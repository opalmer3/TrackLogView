import React, {useState, useEffect} from 'react';
import TopBanner from '../general/TopBanner.jsx';
import CompareForm from './CompareForm.jsx';
import Month from './Month.jsx';
import Loading from '../general/Loading.jsx';
import {useSelector, useDispatch} from 'react-redux';
import {get_sessions} from '../../store/sessions/actions.js';

function Compare(){
    // Get state from redux store
    const { sessions, months, errorMsg, apiLoading, sessionsGotten } = useSelector(state => state.get_sessions);
    const dispatch = useDispatch();
    // Set local state for each month's sessions
    const [sessions1, setSessions1] = useState({month: '', sessions: []});
    const [sessions2, setSessions2] = useState({month: '', sessions: []});
    const [formSubmitted, setFormSubmitted] = useState(false);
    

    useEffect(()=>{
        if (sessionsGotten === false){
            dispatch(get_sessions())
        }
    }, [dispatch, sessionsGotten]);

    function setSessions(month1, sessionsMonth1, month2, sessionsMonth2){
        setSessions1({month: month1, sessions: sessionsMonth1});
        setSessions2({month: month2, sessions: sessionsMonth2});

        sessionsMonth1 = sessions.filter( session => {return new Date(session.date).getMonth() === parseInt(month1.slice(0,2)) - 1 && new Date(session.date).getFullYear() === parseInt(month1.slice(-4))});
        sessionsMonth2 = sessions.filter( session => {return new Date(session.date).getMonth() === parseInt(month2.slice(0,2)) - 1 && new Date(session.date).getFullYear() === parseInt(month2.slice(-4))});

        setSessions1({month: month1, sessions: sessionsMonth1});
        setSessions2({month: month2, sessions: sessionsMonth2});

        setFormSubmitted(true);
    }

    return (<div className='page'>
                <TopBanner title='Compare' content='Select 2 months to track your progress' />
                <div className='compare-container'>
                { !apiLoading ? 
                        <CompareForm months={months}  
                                    setSessions={setSessions}
                        />
                        :
                        <Loading />
                }
                        <div className="sessions compare-sessions">
                        {errorMsg}
                       { formSubmitted && 
                       <>
                            <Month  number={1}
                                    month={parseInt(sessions1.month.slice(0,2)) - 1} 
                                    year={parseInt(sessions1.month.slice(-4))} 
                                    sessions={sessions1.sessions}>
                            </Month> 
                            <Month  number={2}
                                    month={parseInt(sessions2.month.slice(0,2)) - 1} 
                                    year={parseInt(sessions2.month.slice(-4))} 
                                    sessions={sessions2.sessions}>
                            </Month> 
                        </>
                        }
                    </div>
                </div>
            </div>)
}

export default Compare;