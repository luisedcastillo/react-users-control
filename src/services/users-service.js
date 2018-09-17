import UrlBulder from './url-builder';
import { get } from './http-caller';
import {BASE_URL, USERS} from '../constants/api-constants';

let usersUrl = null;

const getUsersUrl = () => {
    if(!usersUrl){
        usersUrl = new UrlBulder(BASE_URL)
                    .withChild(USERS)
                    .build();
    }

    return usersUrl;
};

export const getUsers = () => get(getUsersUrl());