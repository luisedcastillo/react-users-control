import { createAction } from 'redux-actions';
import { UPDATE_USER_INFO } from './../constants/action-types';
import { put } from './../services/http-caller';
import { getUsersUrl } from '../services/users-service';

export const updateUser = createAction(UPDATE_USER_INFO,
    (id, user) => put(getUsersUrl(), id, user));
