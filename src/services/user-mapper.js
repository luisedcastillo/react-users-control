import {FEMALE, MALE} from './../constants/user-constants'

export const toUser = data => {
    const { name, email, phone, id, username, website } = data;

    return {
        id,
        name,
        username,
        email,
        phone,
        website,
        gender: id % 3 !== 0 ? MALE : FEMALE
    };
};

export const toUsers = list => (
    list.map(item => toUser(item))
);