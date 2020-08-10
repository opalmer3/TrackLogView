import React from 'react';
import Session from './Session.jsx';

function Month(props){
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novemeber', 'December'];
    
    const sessions = props.sessions.filter(session=>{ return new Date(session.date).getMonth() === props.month && new Date(session.date).getFullYear() === props.year });
    const month = monthNames[props.month] + ' ' + props.year;
    return <div className="month compare-month">
                <h3 className="month-title">{ props.month ? month : 'Month ' + props.number }</h3>
                <div className="table-headers">
                    <div className="header">Date</div>
                    <div className="header">Session</div>
                    <div className="header">Times</div>
                    <div className="header">Comments</div>
                </div>
                { sessions.map((session, index) =>{ 
                    return <Session 
                    key={index} 
                    id={session._id} 
                    date={session.date.slice(0,10)} 
                    session={session.session} 
                    times={session.times} 
                    comments={session.comments} /> 
                    })
                }
        
            </div>
}

export default Month;