
import { get } from './../services/http-caller';
import { getUsersUrl } from './../services/users-service';
import { toUsers } from './../services/user-mapper';

//export const SET_USER = 'SET_USER';
//export const SET_USERS = 'SET_USERS';
export const GET_USERS_INFO = 'GET_USERS_INFO';
export const SET_USERS_INFO = 'SET_USERS_INFO';

//const setUser = payload => ({type: SET_USER, payload});
const setUsersInfo = payload => ({type: SET_USERS_INFO, payload});
const getUsersInfo = payload => ({type: GET_USERS_INFO, payload});

//const setUsers = payload => ({type: GET_USER_INFO, payload});

export const setUsers = payload => {
    return dispatch => {
        dispatch(getUsersInfo({}));
        get(getUsersUrl())
        .then(data => {
            const users = toUsers(data);
            dispatch(setUsersInfo(users));
        });
    };
};
