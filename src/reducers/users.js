
import {GET_USERS_INFO, SET_USERS_INFO} from './../actions';

export const users = (state = {}, action) => {
    switch(action.type){
        case GET_USERS_INFO: {
            return ({...state, users: null});
        }
        case SET_USERS_INFO: {
            const {users} = action.payload;
            return ({...state, users});
        }
        default:
        return state;
    }
};