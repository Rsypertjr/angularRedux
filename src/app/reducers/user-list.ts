import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {User} from '../models';
import {UserActions} from '../actions';
import * as _ from 'lodash';

export type UserListState = User[];

const initialState: UserListState = [];

export default function (state = initialState, action: Action): UserListState {
    switch (action.type){
        case UserActions.LOAD_USERS_SUCCESS: {
            return action.payload;
        }

        case UserActions.ADD_USER_SUCCESS: {
            return [...state, action.payload];
        }

        case UserActions.SAVE_USER_SUCCESS: {
            let index = _.findIndex(state, {id: action.payload.id});
            if (index >= 0) {
                alert("gets here");
                return [
                    ...state.slice(0,index),
                    action.payload,
                    ...state.slice(index + 1)
                ];
            }
            return state;
        }

        case UserActions.UPDATE_USER_SUCCESS: {
            return state.map(item => {
                    return item.id === action.payload.id ? 
                      Object.assign({}, item, action.payload) : item;
                });          
        }




        case UserActions.DELETE_USER_SUCCESS: {
            return state.filter(user => {
                return user.email !== action.payload.email;
            });
        }

        default: {
            return state;
        }
    }
}