//jshint esversion:6
require('dotenv').config();
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const path = require('path');

app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

if (process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, 'client/build')));
}

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({
        url: process.env.MONGO_URI
    })
}));

app.use(function(req, res, next) {
  res.locals.user = req.session.passport;
  next();
});

app.use(passport.initialize());
app.use(passport.session());

mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});

const sessionSchema = new mongoose.Schema({
  date: Date,
  session: String,
  times: String,
  comments: String
});

const Session = new mongoose.model('Session', sessionSchema);

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  fName: String,
  lName: String,
  password: String,
  sessions: [sessionSchema]
});

userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model('User', userSchema);


passport.use(User.createStrategy());

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

////////////// INDEX AND EDIT / DELETE TRAINING SESSION AJAX HANDLERS ///////////////////////
app.get("/api/home", function(req, res){
  User.findById(req.user._id, function(err, user){
    if (err) { return res.send({message: 'Could not retrieve sessions from database'}); }
    // Sort sessions by decending date order
    const sessions = user.sessions.sort((a, b) =>{ return new Date(b.date) - new Date(a.date);});
    // List of months for which there are sessions logged in decending order
    const monthsList = getMonths(sessions);
    res.send({success: true, sessions: sessions, months: monthsList});
  });

});

app.delete("/api/deleteSession", function(req, res){
  User.findById(req.user._id, function(err, user){
    if (err) { return res.send({success: false, message: err}); }
    user.sessions.splice(user.sessions.map(session =>{ return session._id; }).indexOf(req.body.id), 1);
    user.save();
    res.send({success: true});
  });
});

app.patch("/api/editSession", function(req, res){
  const {id, date, session, times, comments} = req.body;
  User.findById(req.user._id, function(err, user){
    if (err) { return res.send({success: false, message: err}); }
    const arrayPosition = user.sessions.map(session =>{ return session._id; }).indexOf(id);

    user.sessions[arrayPosition].date = new Date(date);
    user.sessions[arrayPosition].session = session;
    user.sessions[arrayPosition].times = times;
    user.sessions[arrayPosition].comments = comments;
    user.save();
    res.send({success: true});
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////
///////// REGISTER LOG IN LOG OUT /////////////
app.get("/api/register", function(req, res){
  res.render('register');
});

app.post("/api/register", function(req, res){
    const {fName, lName, username, email, password, passwordConfirmation } = req.body;
    // if any fields are blank then re render page with message
    for( const key in req.body){
      if (req.body[key].trim() === "") res.send({message: 'Please fill all fields'}); break;
    }
    // Check email not already in use
    User.find({ email: email }, function(err, user){
      if (err) { return res.send({message: err.message}); }
      if (user.length !== 0) { return res.send({message: 'Email already in use'} ); }
    });
    // Check passwords match
    if (password !== passwordConfirmation){ return res.send({message: 'Passwords do not match'}); }
    // Insert user into users table
    User.register({fName: fName, lName: lName, username: username, email: email}, password, function(err, user){
      if (err) return res.send({message: err.message});
      else res.send({success: true});
    });
});

app.post("/api/login", function(req, res, next){
  passport.authenticate('local', function(err, user, info) {
    if (err) { return res.send({success: false, error: err}); }
    if (!user) { return res.send({success: false, error: info.message}); }
    req.logIn(user, function(err) {
      if (err) { return res.send({success: false, error: err}); }
      return res.json({success: true});
    });
  })(req, res, next);
});

app.get("/api/logout", function(req, res){
  req.logout();
  res.send({success: true});
});

////////////////////////////////////////////////////////////
//////////////// LOG COMPARE //////////////////////////////
app.post("/api/log", function(req, res){
  // convert inputs from object to list
  const inputs = Object.keys(req.body).map(key =>{ return req.body[key]; });
  // Get number of form rows, 1 row has 4 fields
  const numRows = inputs.length / 4;
  User.findOne({_id: req.user._id}, function(err, user){
    if (err) { return res.send({message: 'Error, please try again'}); }
    // iterate through number of rows in form and add session to sessions list
    for(var i = 0; i < numRows; i++){
      if (i === 0){
        let newSession = new Session({date: new Date(inputs[0]), session: inputs[1], times: inputs[2], comments: inputs[3]});
        user.sessions.push(newSession);
      } else {
        let newSession = new Session({date: new Date(inputs[-1 + ((i + 1) * 2 + ((i * 2 -1)))]), session: inputs[0 + ((i + 1) * 2 + ((i * 2 -1)))], times: inputs[1 + ((i + 1) * 2 + ((i * 2 -1)))], comments: inputs[2 + ((i + 1) * 2 + ((i * 2 -1)))]});
        user.sessions.push(newSession);
      }
  }
  user.save();
  });
  res.send({success:true});
});

app.get("/api/compare", function(req,res){
  // Retrive list of months/years for which sessions are logged to pass to the form on the page
  User.findById(req.user._id, function(err, user){
    if (err) { return res.send({message: 'Error retrieving sessions, try again'}); }
    // Sort sessions by decending date order
    const sessions = user.sessions.sort((a, b) =>{ return new Date(b.date) - new Date(a.date);});
    // List of months for which there are sessions logged in decending order
    const monthsList = getMonths(sessions);
    res.send({success: true, months: monthsList});
  });
});

app.post("/api/compare", function(req,res){
  // Retrive list of months/years for which sessions are logged to pass to the form on the page
  User.findById(req.user._id, function(err, user){
    if (err) { return res.send({message: 'Error retrieving sessions, try again'}); }
    // Sort sessions by decending date order
    const sessions = user.sessions.sort((a, b) =>{ return new Date(b.date) - new Date(a.date);});
    // List of months for which there are sessions logged in decending order
    const monthsList = getMonths(sessions);

    const month1 = new Date(req.body.month1.slice(-4) + '/' + req.body.month1.slice(0,2) + '/01');
    const month2 = new Date(req.body.month2.slice(-4) + '/' + req.body.month2.slice(0,2) + '/01');

    const month1Sessions = [];
    const month2Sessions = [];
    User.findById(req.user._id, function(err, user){
      if (err) { return res.render('compare', {message: 'Error retrieving sessions'});}
      const month1Sessions = user.sessions.filter(session => { return month1.getMonth() === session.date.getMonth(); });
      const month2Sessions = user.sessions.filter(session => { return month2.getMonth() === session.date.getMonth(); });

      res.send({success: true, month1Sessions: month1Sessions, month2Sessions: month2Sessions});
  });
});
});

// Takes a list of sessions as input and returns a list of unique months for which there are sessions
function getMonths(sessions){
  // List of months for which there are sessions logged in decending order
  const monthsList = [];
  // add month and year to list if it is not already in the list
  sessions.forEach(session =>{
    const month = new Date(session.date).getMonth();
    const year = new Date(session.date).getFullYear();
    // create new array of stringified monthyear objects, if session monthyear is not in the months list then add it
    if (monthsList.map(item =>{ return JSON.stringify(item); }).indexOf(JSON.stringify({ month: month, year: year })) === -1){
      monthsList.push({ month: month, year: year });
    }
    });
    return monthsList;
}
///////////// LOGGED IN CHECK ////////////////////
app.get("/api/isloggedin", function (req, res){
  if (!req.isAuthenticated()) return res.send({loggedIn: false});
  return res.send({loggedIn: true});
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
      res.sendFile(path.join(__dirname+'/client/build/index.html'));
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
