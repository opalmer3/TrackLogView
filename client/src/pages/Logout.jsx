import React, { useEffect } from 'react';
import Loading from './components/Loading.jsx';
import Axios from 'axios';

function Logout(props){
   
    useEffect(()=>{
        async function sendLogout(){
            try{
                let response = await Axios.get("/api/logout");
                if (response.data.success === true){
                    await props.authenticate();
                }
            } catch(e){
                console.log(e);
            }
        }
        sendLogout();
    });
    
    return <Loading />;
}

export default Logout;
