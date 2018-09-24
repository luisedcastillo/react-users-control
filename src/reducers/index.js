import {combineReducers} from 'redux';
import {createSelector} from 'reselect';
import {reducer as reduxForm} from 'redux-form';
import {users} from './users';

export default combineReducers({
    users,
    form: reduxForm
});


export const getUsersFromState = createSelector((state) => state.users, users => users);