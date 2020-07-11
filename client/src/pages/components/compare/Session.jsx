import React from 'react';

function Session(props){
    return <div id={props.id} className="session-info">
                <div className="session-item">
                {props.date}
                </div>
                <div className="session-item">
                {props.session}
                </div>
                <div className="session-item">
                {props.times}
                </div>
                <div className="session-item">
                {props.comments}
                </div>
            </div>
}

export default Session;