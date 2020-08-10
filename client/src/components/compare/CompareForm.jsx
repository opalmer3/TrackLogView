import React, { useState } from 'react';


function CompareForm({months, setSessions}){
    // local state for form inputs
    const [formMonths, setFormMonths] = useState({month1: '', month2: ''});
    const [formErrorMsg, setFormErrorMsg] = useState('');

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novemeber', 'December'];
    
    function handleChange(event){
        const {name, value} = event.target;
        setFormMonths(prevValues=>{
            return {
                ...prevValues,
                [name]: value
            }
        });
    }

    async function handleSubmit(event){
        event.preventDefault();

        if (formMonths.month1 === '' || formMonths.month2 === '') return setFormErrorMsg('Please select 2 months to compare');
        // reset error message
        setFormErrorMsg('');
        // Update state in parent component with the months selected
        setSessions(formMonths.month1, [], formMonths.month2, []);
    }

    return <div className="compare-form-container">
            <form onSubmit={handleSubmit} action="/compare" method="get">

                <select onChange={handleChange} value={formMonths.month1} name="month1">
                <option value="" disabled="disabled">Choose Month</option>
                {months.map((month, index)=>{ 
                    const date = '0' + (month.month + 1).toString().slice(-2) + ' ' + month.year;
                    return <option  key={index} value={date}>{monthNames[month.month] + ' ' + month.year}</option>
                })}
                </select>

                <select onChange={handleChange} value={formMonths.month2} name="month2">
                <option value="" disabled="disabled">Choose Month</option>
                {months.map((month, index)=>{ 
                    const date = '0' + (month.month + 1).toString().slice(-2) + ' ' + month.year;
                    return <option  key={index} value={date}>{monthNames[month.month] + ' ' + month.year}</option>
                })}
                </select>
                <button className="compare-button" type="submit">Compare</button>
            </form>
            <div className="error-msg">
                {formErrorMsg}
            </div>
            </div>
}

export default CompareForm;