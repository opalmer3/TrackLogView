import React, { useState } from 'react';
import Axios from 'axios';

function EditSessionForm(props){
    const [formInputs, setFormInputs] = useState({date: props.date, session: props.session, times: props.times, comments: props.comments});
    // state for whether inputs are valid
    const [invalidInputs, setinvalidInputs] = useState({date: false, session: false, times: false});
    const [submitted, setSubmitted] = useState(false);

    const blankFieldStyling = {border: '2px solid red'};
    
    function handleChange(event){
        const {name, value} = event.target;
        setFormInputs(prevValues=>{
            return {
                ...prevValues,
                [name]: value
            }
        })

    }

    // reset the field invalid state to false on focus of the input
    function handleFocus(event){
        const {name} = event.target;
        setinvalidInputs(prevValues=>{
            return {
                ...prevValues,
                [name]: false
            }
        });
    }
    
    async function handleSubmit(event){
        event.preventDefault();
        // Validate inputs
        let inputsValid = true;
        Object.keys(formInputs).forEach(key=>{
            if(formInputs[key].trim() === '' && key !== 'comments'){
                setinvalidInputs(prevValues=>{
                    return {
                        ...prevValues,
                        [key]: true
                    }
                });
                inputsValid =false;
            }
        });
        if (inputsValid === false) { return; }

        // if inputs valid proceed
        setSubmitted(true);
        
        const response = await Axios({
                            url:'/api/editSession',
                            method: 'patch',
                            data: {
                                ...formInputs,
                                id: props.id
                            }
                        });
        if (response.data.success === true){
            props.handleEdit();
            props.callReRender();
        } else {
            alert(response.data.message);
        }
    }

    return <form onSubmit={handleSubmit} className="session-form" action="/editSession" method="post">
                <input onChange={handleChange}
                    onFocus={handleFocus}
                    type="date"
                    name="date"
                    value={formInputs.date}
                    style={invalidInputs.date ? blankFieldStyling : {}}
                    />
                <textarea onChange={handleChange}
                    onFocus={handleFocus}
                    name="session"
                    placeholder="Session"
                    value={formInputs.session}
                    style={invalidInputs.session ? blankFieldStyling : {}}></textarea>
                <textarea onChange={handleChange}
                    onFocus={handleFocus}
                    name="times"
                    placeholder="Times"
                    value={formInputs.times}
                    style={invalidInputs.times ? blankFieldStyling : {}}></textarea>
                <textarea onChange={handleChange}
                    name="comments"
                    placeholder="Comments"
                    value={formInputs.comments}></textarea>
                
                <div className="submit-cancel-buttons">
                    {submitted ? 
                    <div className="lds-dual-ring"></div>
                    :
                        <>
                            <button onClick={props.handleEdit} type="button" className="cancel">Cancel</button>
                            <button className="submit" type="submit">Confirm</button>
                        </>
                    }
                </div>
                
            </form>
                
}

export default EditSessionForm;