import React from 'react';
import RegisterForm from './RegisterForm.jsx'
import clipboard from './images/clipboard.svg'

function Register(){

return <div className="login-container page">
        <div className="login-box">
            <img className="user-img" src={clipboard} alt=""/>
            <RegisterForm />
        </div>
        </div>;
}

export default Register;