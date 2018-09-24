
import { handleActions } from 'redux-actions';
import { FETCH_USERS_INFO } from './../constants/action-types';

export const users = handleActions({
    [FETCH_USERS_INFO]: (state, action) => action.payload
}, []);


// export const users = (state = null, action) => {
//     switch(action.type){
//         case GET_USERS_INFO: {
//             return null;
//         }
//         case SET_USERS_INFO: {
//             return action.payload;
//         }
//         default:
//         return state;
//     }
// };