import React, { useState } from 'react';
import Axios from 'axios';

function CompareForm(props){
    const [formMonths, setFormMonths] = useState({month1: '', month2: ''});

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

        if (formMonths.month1 === '' || formMonths.month2 === '') return props.handleError('Please select 2 months to compare');
        // reset error message
        props.handleError('');
        // toggle session gotten to display loader
        props.toggleSessionsGotten();
        const response = await Axios({
                        url:'/api/compare',
                        method:'post',
                        data: formMonths
        });

        if (response.data.success === true){
            props.setSessions(formMonths.month1, response.data.month1Sessions, formMonths.month2, response.data.month2Sessions);
        } else {
            props.handleError(response.data.message);
        } 
        // after load toggles session gotten to display content 
        props.toggleSessionsGotten();
    }

    return <div className="compare-form-container">
            <form onSubmit={handleSubmit} action="/compare" method="get">
                <select onChange={handleChange} value={formMonths.month1} name="month1">
                <option value="" disabled="disabled">Choose Month</option>
                {props.months.map((month, index)=>{ 
                    const date = '0' + (month.month + 1).toString().slice(-2) + ' ' + month.year;
                    return <option  key={index} value={date}>{monthNames[month.month] + ' ' + month.year}</option>
                })}
                </select>
                <select onChange={handleChange} value={formMonths.month2} name="month2">
                <option value="" disabled="disabled">Choose Month</option>
                {props.months.map((month, index)=>{ 
                    const date = '0' + (month.month + 1).toString().slice(-2) + ' ' + month.year;
                    return <option  key={index} value={date}>{monthNames[month.month] + ' ' + month.year}</option>
                })}
                </select>
                <button className="compare-button" type="submit">Compare</button>
            </form>
            <div className="error-msg">
                {props.errorMsg}
            </div>
            </div>
}

export default CompareForm;