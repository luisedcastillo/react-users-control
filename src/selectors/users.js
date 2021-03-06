import { createSelector } from 'reselect';

export const getUsers = state => state.users;
export const getUserById = createSelector(
    (state, props) => {
        const user = state.users.find(u => u.id.toString() === props.id);
        return user;
    },
    user => user
);