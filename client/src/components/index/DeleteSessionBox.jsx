import React, { useState } from 'react';
import Axios from 'axios';

function DeleteSessionBox(props){
    const [errorMsg, setErrorMsg] = useState('');
    const [submitted, setSubmitted] = useState(false);
    
    async function submitDelete(){
        setSubmitted(true);
        const response = await Axios({
            url: '/api/deleteSession',
            method: 'delete',
            data: {
                id: props.id
            }
        });

        if(response.data.success === true){
            props.callReRender()
            props.handleDelete();
        } else {
            setSubmitted(false);
            setErrorMsg(response.data.message);
        }
    }
    return <div className="confirmation-window">
                <div className="confirmation-box">
                    <h3>Are you sure you want to delete this session?</h3>
                    <p>{errorMsg}</p>
                    {submitted ? 
                        <div className="lds-dual-ring"></div>
                        :
                        <>
                            <button className="submit" onClick={submitDelete}>Delete</button>
                            <button onClick={props.handleDelete} className="cancel">Cancel</button>
                        </>
                    }
                </div>
            </div>
}

export default DeleteSessionBox;