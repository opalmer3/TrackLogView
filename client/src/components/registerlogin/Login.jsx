import React from 'react';
import LoginForm from '../../containers/authentication/LoginForm.jsx'
import user from './images/user.svg'


function Login(){
    return <div className="login-container page">
    <div className="login-box">
    <img className="user-img" src={user} alt=""></img>
      <LoginForm />
      <a href="/register"><button className="register-button">Register</button></a>
    </div>
  </div>
}

export default Login;
