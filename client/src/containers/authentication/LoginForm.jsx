import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { log_in } from '../../store/authentication/actions.js';

function LoginForm(){
    const [formInputs, setFormInputs] = useState({username: "", password: ""});
    // Get state and dispatch method from store
    const {apiPending, errorMsg} = useSelector(state => state.authenticate);
    const dispatch = useDispatch();

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
        dispatch(log_in(formInputs));
    }

    return   <form onSubmit={handleSubmit} action="/login" method="post">
    <input onChange={handleChange} value={formInputs.username} type="text" name="username" placeholder="username" />
    <input onChange={handleChange} value={formInputs.password} type="password" name="password" placeholder="password" />
    <div className="error-msg">
    {errorMsg}
    </div>
    <button className="login-button" type="submit">{apiPending ? <div className="lds-dual-ring"></div> : 'Log In'}</button>
    </form>
}

export default LoginForm;