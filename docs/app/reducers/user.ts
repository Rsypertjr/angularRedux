//app/reducers/user.ts
import {Action} from '@ngrx/store';

import {User} from '../models';
import {UserActions} from '../actions';

export type UserState = User;

const initialState: UserState = {
    id: 0,
    firstName: '',
    lastName: '',
    email: ''
};

export default function(state = initialState, action: Action): UserState {

    switch(action.type){
        case UserActions.RESET_BLANK_USER: {
            return initialState;
        }
        case UserActions.GET_USER_SUCCESS: {
            return action.payload;
        }

        default: {
             return state;
         }
    }
}



