import React, { useState } from 'react';
import Axios from 'axios';

function LoginForm(props){
    const [formInputs, setFormInputs] = useState({username: "", password: ""});
    const [errorMsg, setErrorMsg] = useState("");
    const [submitted, setSubmitted] = useState(false);

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
                url: '/api/login',
                method: 'POST',
                headers: {},
                data: {
                    ...formInputs
                }
            });
            
            if (response.data.success === true){
                await props.authenticate();
            } else {
                setSubmitted(false);
                setErrorMsg(response.data.error);
            }
        } catch(e) {
            alert(e);
            setSubmitted(false);
        }
    }

    return   <form onSubmit={handleSubmit} action="/login" method="post">
    <input onChange={handleChange} value={formInputs.username} type="text" name="username" placeholder="username" />
    <input onChange={handleChange} value={formInputs.password} type="password" name="password" placeholder="password" />
    <div className="error-msg">
    {errorMsg}
    </div>
    <button className="login-button" type="submit">{submitted ? <div className="lds-dual-ring"></div> : 'Log In'}</button>
    </form>
}

export default LoginForm;