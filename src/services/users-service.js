import UrlBulder from 'url-builder';
import { get } from 'http-caller';
import {BASE_URL, USERS} from './../constants/api-constants';

const usersUrl = null;

getUsersUrl(){
    if(!usersUrl){
        usersUrl = new UrlBulder(BASE_URL)
                    .withChild(USERS)
                    .build();
    }

    return usersUrl;
}

export const getUsers = () => get(getUsersUrl()));