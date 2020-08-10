//jshint esversion:6
import Axios from 'axios';
import { AUTHENTICATE, ERROR_MSG, API_PENDING } from './constants.js';


export const authenticate = () => async (dispatch) => {
    dispatch({type: API_PENDING});
    const response = await Axios.get("/api/isloggedin");
    dispatch({type: AUTHENTICATE, payload: response.data.loggedIn});
}


export const log_in = (formInputs) => async (dispatch) => {
        dispatch({type: API_PENDING});
        try{
            const response = await Axios({
                url: '/api/login',
                method: 'POST',
                headers: {},
                data: formInputs
            });
            
            if (response.data.success === true){
                dispatch({type: AUTHENTICATE, payload: true});
            } else {
                dispatch({type: ERROR_MSG, payload: response.data.error});
            }
        } catch(err) {
            dispatch({type: ERROR_MSG, payload: err});
        }
    }


export const log_out = () => async (dispatch) =>{
        dispatch({type: API_PENDING});
        const response = await Axios.get("/api/logout");
        if (response.data.success === true){
            dispatch({type:AUTHENTICATE, payload: false});
        } else {
            dispatch({type:AUTHENTICATE, payload: true});
        }
}

