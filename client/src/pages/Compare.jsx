import React, {useState, useEffect} from 'react';
import TopBanner from './components/general/TopBanner.jsx';
import CompareForm from './components/compare/CompareForm.jsx';
import Month from './components/compare/Month.jsx';
import Loading from './components/Loading.jsx';
import Axios from 'axios';

function Compare(){
    const [sessions1, setSessions1] = useState({month: '', sessions: []});
    const [sessions2, setSessions2] = useState({month: '', sessions: []});
    const [months, setMonths] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');
    const [monthsGotten, setMonthsGotten]= useState(false);
    const [sessionsGotten, setSessionsGotten]= useState(true);

    useEffect(()=>{
        async function getMonths(){
            const response = await Axios.get('/api/compare');
            
            if(response.data.success === true){
                setMonths(response.data.months);
                setErrorMsg('');
            }
            else{
                setErrorMsg(response.data.message);
            }
            setMonthsGotten(true);
        }
        getMonths();
    }, []);

    function setSessions(month1, sessionsMonth1, month2, sessionsMonth2){
        setSessions1({month: month1, sessions: sessionsMonth1});
        setSessions2({month: month2, sessions: sessionsMonth2});
    }
    function toggleSessionsGotten(){
        setSessionsGotten(prevValue=>{
            return !prevValue
        });
    }
    function handleError(err){
        setErrorMsg(err);
    }

    return (<div className='page'>
                <TopBanner title='Compare' content='Select 2 months to track your progress' />
                <div className='compare-container'>
                { monthsGotten ? 
                    <>
                        <CompareForm months={months} 
                                    errorMsg={errorMsg} 
                                    setSessions={setSessions} 
                                    toggleSessionsGotten={toggleSessionsGotten}
                                    handleError={handleError} 
                        />
                        <div className="sessions compare-sessions">
                        {sessionsGotten ? 
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
                        :
                        <div className="lds-dual-ring"></div>
                        }
                        
                        </div>
                    </>
                    : 
                    <Loading />
                }
                </div>
            </div>)
}

export default Compare;