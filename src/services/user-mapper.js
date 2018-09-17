import {FEMALE, MALE} from './../constants/user-constants'

export const toUser = data => {
    const { name, email, phone, id } = data;

    return {
        id,
        name,
        email,
        phone,
        gender: id % 3 !== 0 ? MALE : FEMALE
    };
};

export const toUsers = list => (
    list.map(item => toUser(item))
);