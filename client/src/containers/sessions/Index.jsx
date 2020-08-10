import React, { useState, useEffect } from 'react';
import Loading from '../../components/general/Loading.jsx';
import TopBanner from '../../components/general/TopBanner.jsx';
import Month from '../../components/index/Month.jsx'
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { get_sessions } from '../../store/sessions/actions.js';

function Index(){
    // Get relevant state from redux store
    const {sessions, months, errorMsg, apiLoading} = useSelector(state => state.get_sessions);
    const dispatch = useDispatch();
    // Used in use effect so infinite loop not invoked
    const [reRender, setReRender] = useState(false);

    useEffect(()=>{
        dispatch(get_sessions());
    }, [dispatch, reRender]);


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
            {apiLoading ? <Loading />
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