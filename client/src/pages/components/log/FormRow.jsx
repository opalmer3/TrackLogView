import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';


function FormRow(props){
    const [slideDown, setSlideDown] = useState(false);
    const date = 'date' + props.rowNumber;
    const session = 'session' + props.rowNumber;
    const times = 'times' + props.rowNumber;
    const comments = 'comments' + props.rowNumber;
    
    const blankFieldStyling = {border: '2px solid red'};
    
    useEffect(()=>{
        setSlideDown(true);
    }, []);
    
    return  <CSSTransition in={slideDown} timeout={500} classNames={'slide-down'}>
                <div id={props.rowNumber} className="session-form">
 
                        <input onChange={props.handleChange} 
                                onFocus={props.removeMissing}
                                value={props.formInputs[date]} 
                                type="date"
                                name={"date" + props.rowNumber} 
                                style={props.missingFormInputs.indexOf('date' + props.rowNumber.toString()) !== -1 ? blankFieldStyling : {}}
                                />

                        <textarea onChange={props.handleChange} 
                                onFocus={props.removeMissing}
                                value={props.formInputs[session]}
                                name={"session" + props.rowNumber} 
                                placeholder="Session"
                                style={props.missingFormInputs.indexOf('session' + props.rowNumber.toString()) !== -1 ? blankFieldStyling : {}}></textarea>

                        <textarea onChange={props.handleChange} 
                                onFocus={props.removeMissing}
                                value={props.formInputs[times]}
                                name={"times" + props.rowNumber}
                                placeholder="Times"
                                style={props.missingFormInputs.indexOf('times' + props.rowNumber.toString()) !== -1 ? blankFieldStyling : {}}></textarea>

                        <textarea onChange={props.handleChange} 
                                value={props.formInputs[comments]}
                                name={"comments" + props.rowNumber}
                                placeholder="Comments (Optional)"></textarea>
                </div>
                </CSSTransition>
}

export default FormRow;