
import { createAction } from 'redux-actions';
import { get } from '../services/http-caller';
import { getUsersUrl } from '../services/users-service';
import { toUsers } from '../services/user-mapper';
import { FETCH_USERS_INFO } from './../constants/action-types';


const apiFetchUsers = () => get(getUsersUrl()).then(data => toUsers(data));
export const fetchUsers = createAction(FETCH_USERS_INFO, apiFetchUsers);


// export const setUsers = payload => {
//     return dispatch => {
//         dispatch(getUsersInfo({}));
//         get(getUsersUrl())
//         .then(data => {
//             const users = toUsers(data);
//             dispatch(setUsersInfo(users));
//         });
//     };
// };
