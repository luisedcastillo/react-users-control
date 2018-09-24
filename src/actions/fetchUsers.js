
import { createAction } from 'redux-actions';
import { get } from '../services/http-caller';
import { getUsersUrl } from '../services/users-service';
import { toUsers } from '../services/user-mapper';
import { FETCH_USERS_INFO } from './../constants/action-types';


const apiFetchUsers = () => get(getUsersUrl()).then(data => toUsers(data));
export const fetchUsers = createAction(FETCH_USERS_INFO, apiFetchUsers);