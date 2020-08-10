import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

function RegisterForm(){
    const [formInputs, setFormInputs] = useState({fName: "", lName: "", username: "", email: "", password: "", passwordConfirmation: ""});
    const [errorMsg, setErrorMsg] = useState("");
    const [submitted, setSubmitted] = useState(false);
    
    const history = useHistory();

    function handleChange(e){
        const {name, value} = e.target;
        
        setFormInputs( prevValues =>{
            return {
                ...prevValues,
                [name]: value
            }
        }
        );
    }

    async function handleSubmit(e){
        e.preventDefault();
        setSubmitted(true);
        try{
            const response = await Axios({
                url: '/api/register',
                method: 'POST',
                data: {
                    ...formInputs
                }
            });

            if (response.data.success === true){
                history.push('/login');
            } else {
                setSubmitted(false);
                setErrorMsg(response.data.message);
            }
        } catch(e){
            alert(e);
        }
    }

    return   <form onSubmit={handleSubmit} action="/register" method="post">
    <input onChange={handleChange} value={formInputs.fName} type="text" name="fName" placeholder="first name" />
    <input onChange={handleChange} value={formInputs.lName} type="text" name="lName" placeholder="last name" />
    <input onChange={handleChange} value={formInputs.username} type="text" name="username" placeholder="username" />
    <input onChange={handleChange} value={formInputs.email} type="email" name="email" placeholder="email" />
    <input onChange={handleChange} value={formInputs.password} type="password" name="password" placeholder="password" />
    <input onChange={handleChange} value={formInputs.passwordConfirmation} type="password" name="passwordConfirmation" placeholder="password again" />
    <div className="error-msg">
    {errorMsg}
    </div>
    <button className="login-button" type="submit">{submitted ? <div className="lds-dual-ring"></div> : 'Register'}</button>
    </form>
}

export default RegisterForm;