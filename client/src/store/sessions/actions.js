//jshint esversion:6
import Axios from 'axios';
import { API_LOADING, GET_SESSIONS, ERROR_MSG} from './constants.js';


export const get_sessions = () => async (dispatch) => {
    dispatch({type: API_LOADING});
    try{
        let response = await Axios.get("/api/home");
        if (response.data.success === true){
            dispatch({type: GET_SESSIONS, payload: response.data})
        } else {
            dispatch({type: ERROR_MSG, payload: response.data.message});
        }
    } catch(err){
        dispatch({type: ERROR_MSG, payload: err});
    } 
}