import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import FormRow from './FormRow.jsx';
import Axios from 'axios';

function LogForm(){
    const [rowCount, setRowCount] = useState(1);
    const [formInputs, setFormInputs] = useState([{date: '', session: '', times: '', comments: ''}]);
    const [missingFormInputs, setMissingFormInputs] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const fieldNames = ['date', 'session', 'times', 'comments'];

    const history = useHistory();

    function handleChange(event){
        const {name, value} = event.target;
        const rowNum = name.slice(-1);
        const fieldName= name.slice(0, -1);

        setFormInputs(prevValues=>{
                prevValues[rowNum] = {
                    ...prevValues[rowNum],
                    [fieldName]: value
                }
                return [...prevValues];
        });       
    }

    function handleAddRow(){
        if (rowCount >= 10) return;

        setRowCount(prevCount=>{
            return prevCount + 1;
        });
        // update form inputs state appending a new object to the array
        setFormInputs(prevValues=>{
            return [
                ...prevValues,
                {date: '', session: '', times: '', comments: ''}
            ]
        });
    }
    function handleRemoveRow(){
        if (rowCount > 1){
            setRowCount(prevCount=>{
                return prevCount - 1;
            });
            // pop the last object off the form inputs array
            setFormInputs(prevValues=>{
                prevValues.pop();
                return [
                    ...prevValues,
                ]
            });
            
        }
    }
    // removes field from missing inputs list 
    function removeMissing(event){
        const {name} = event.target;
        setMissingFormInputs(prevValues=>{
            prevValues.splice(prevValues.indexOf(name), 1);
            return [
                ...prevValues
            ];
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        setSubmitted(true);
        // Check all neccessary fields have been filled
        let blankFields = [];

        formInputs.forEach((n, index)=>{
            
            fieldNames.forEach(field=>{ 
                // if date is invalid or session or time field is blank add it to blank fields array
                if ( formInputs[index][field].trim() === '' && field !== 'comments' && field !=='date'){
                     blankFields.push(field + index.toString()); 
                } else if (field === 'date' && (new Date(n.date).toString() === 'Invalid Date' || n.date.trim().length !== 10)){
                    blankFields.push(field + index.toString());
                } 
        });
    });
        // Set state of missing form inputs
        setMissingFormInputs([
            ...blankFields
        ]);

        if (blankFields.length === 0){
            submitToServer();
        } else {
            setSubmitted(false);
        }
    }

    async function submitToServer(){
        try{
            const response = await Axios({
                url:'/api/log',
                method: 'POST',
                data: {
                    inputs: formInputs
                    }
                });
            if (response.data.success){
                setTimeout(function(){
                    history.push("/");
                }, 500)
            } else {
                alert(response.data.message);
            }
        }
       catch(e){
           alert(e);
       }
    }
    
    return  <form onSubmit={handleSubmit} action="/log" method="post">
    {Array(rowCount).fill(0).map((n, index)=>{ 
        return    <FormRow 
                    key={index} 
                    rowNumber={index} 
                    handleChange={handleChange}
                    formInputs={formInputs}
                    missingFormInputs={missingFormInputs}
                    removeMissing={removeMissing}
                    />; 

        })}
    <div className="add-remove-buttons">
    <button onClick={handleAddRow} className="add" id="add" type="button">Add another session</button>
    <button onClick={handleRemoveRow}className="remove" id="remove" type="button">Remove last session</button>
    </div>
    <div className="error-msg">
   
    </div>
    <button className="log-button" type="submit">{submitted ? <div className="lds-dual-ring"></div> : 'Log'}</button>
</form>
}

export default LogForm;