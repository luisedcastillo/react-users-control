import {combineReducers} from 'redux';
import {createSelector} from 'reselect';
import {users} from './users';

export default combineReducers({
    users
});


export const getUsersFromState = createSelector((state) => state.users, users => users);