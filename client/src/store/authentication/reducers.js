import { AUTHENTICATE, API_PENDING, ERROR_MSG } from './constants.js';

const initialStateAuthentication = {
    apiPending: true,
    loggedIn: false,
    errorMsg: ''
}

export const authenticate = (state=initialStateAuthentication, action={}) =>{
    switch (action.type) {
        case API_PENDING:
            return {
                ...state,
                apiPending: true
            }
        
        case AUTHENTICATE:
            return {
                ...state,
                apiPending: false,
                errorMsg: '',
                loggedIn: action.payload
            }

        case ERROR_MSG:
            return {
                ...state,
                apiPending: false,
                errorMsg: action.payload
            }

        default:
            return state;
    }
}