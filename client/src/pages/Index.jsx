import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Loading from './components/Loading.jsx';
import TopBanner from './components/general/TopBanner.jsx';
import Month from './components/sessions/Month.jsx'
import { NavLink } from 'react-router-dom';

function Index(){
    const [sessions, setSessions] = useState([]);
    const [months, setMonths] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(true);
    // Used in use effect so infinite loop not invoked
    const [reRender, setReRender] = useState(false);

    useEffect(()=>{
        async function getSessions(){
            try{
                let response = await Axios.get("/api/home");
                if (response.data.success === true){
                    setSessions(response.data.sessions);
                    setMonths(response.data.months); 
                    setLoading(false);
                } else {
                    setErrorMsg(response.data.message);
                }
                
            } catch(e){
                console.log(e);
            } 
        }
        getSessions();
    }, [reRender]);


    function callReRender(){
         // instigate re-render of sessions 
         setReRender(!reRender);
    }

    return <div className='page'>
            <TopBanner title='Your Sessions' content='Track, view, edit and delete sessions' />
            
            <div className="error-msg">
            {errorMsg}
            </div>

            <div className="sessions">
            {loading ? <Loading />
            :
            <>
                {months.length !== 0 ? months.map((month, index)=>{
                                        return <Month key={index} 
                                                month={month.month}
                                                year={month.year} 
                                                sessions={sessions}
                                                callReRender={callReRender} /> 
                                            })
                                    :
                                    <div className="no-sessions">
                                        <p>You haven't logged any sessions yet!</p>
                                        <NavLink to="/log" className="log-button">Log your first session!</NavLink> 
                                    </div>
                }
            </>}
            </div>
            
        
        </div>
}

export default Index;