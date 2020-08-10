import React from 'react';
import TopBanner from '../general/TopBanner';
import LogForm from './LogForm.jsx';

function Log(){
    return <div className='page'>
            <TopBanner title='Log' content='Add one or mulitple sessions to your training log' />
            <div className="log-container">
                <LogForm />
            </div>
            </div>
                    

}

export default Log;