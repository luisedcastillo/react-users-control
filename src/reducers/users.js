
import {GET_USERS_INFO, SET_USERS_INFO} from './../actions';


export const users = (state = null, action) => {
    switch(action.type){
        case GET_USERS_INFO: {
            return null;
        }
        case SET_USERS_INFO: {
            return action.payload;
        }
        default:
        return state;
    }
};