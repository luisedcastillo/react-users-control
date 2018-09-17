
import {FEMALE, WOMEN, MEN} from '../constants/user-constants';

export const convertGenderToUrlPath = (gender) => {
    if(gender === FEMALE){
        return WOMEN;
    }

    return MEN;
};