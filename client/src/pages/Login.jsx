import React from 'react';
import LoginForm from './components/registerlogin/LoginForm.jsx'
import user from '../images/user.svg'


function Login(props){
    return <div className="login-container page">
    <div className="login-box">
    <img className="user-img" src={user} alt=""></img>
      <LoginForm authenticate={props.authenticate} />
      <a href="/register"><button className="register-button">Register</button></a>
    </div>
  </div>
}

export default Login;
