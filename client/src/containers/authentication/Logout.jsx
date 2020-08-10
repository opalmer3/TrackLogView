import React, { useEffect } from 'react';
import Loading from '../../components/general/Loading.jsx';
import { log_out } from '../../store/authentication/actions.js';
import { useDispatch } from 'react-redux';

function Logout(){
   const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(log_out());
    });
       
    return <Loading />;
}

export default Logout;
