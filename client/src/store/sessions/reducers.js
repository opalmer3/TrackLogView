import {  ERROR_MSG, API_LOADING, GET_SESSIONS } from './constants.js';

const initialStateSessions = {
    apiLoading: false,
    sessionsGotten: false,
    sessions: [],
    months: [],
    errorMsg: ''
}

export const get_sessions = (state=initialStateSessions, action={}) =>{
    switch (action.type) {
        case API_LOADING:
            return {
                ...state,
                apiLoading: true
            }
        
        case GET_SESSIONS:
            return {
                ...state,
                apiLoading: false,
                sessionsGotten: true,
                sessions: action.payload.sessions,
                months: action.payload.months,
                errorMsg: '',
            }

        case ERROR_MSG:
            return {
                ...state,
                apiLoading: false,
                errorMsg: action.payload
            }

        default:
            return state;
    }
}