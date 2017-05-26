import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

import {AppState} from '../reducers';
import {UserActions} from '../actions';
import {UserService} from '../services';
import {User} from '../models';


@Injectable()
export class UserEffects {

    user:User;    
    currentState:AppState;
    constructor (
        private update$: Actions,
        private userActions: UserActions,
        private svc: UserService,
    ) {}

    @Effect() loadUsers$ = this.update$
        .ofType(UserActions.LOAD_USERS)    
        .map(type => this.svc.getUsers());

    @Effect() getUser$ = this.update$
        .ofType(UserActions.GET_USER)
        .map(action => action.payload)
        .switchMap(id => this.svc.getUser(id))
        .map(user => this.userActions.getUserSuccess(user));

    @Effect() saveUser$ = this.update$
        .ofType(UserActions.SAVE_USER)
        .map(action => action.payload)
        .switchMap(user => this.svc.saveUser(user))
        .map(user => this.userActions.saveUserSuccess(user));

    @Effect() addUser$ = this.update$
        .ofType(UserActions.ADD_USER)
        .map(action => action.payload)
        .switchMap(user => this.svc.saveUser(user))
        .map(user => this.userActions.addUserSuccess(user));

    @Effect() deleteUser$ = this.update$
        .ofType(UserActions.DELETE_USER)
        .map(action => action.payload)
        .switchMap(user => this.svc.deleteUser(user))
        .map(user => this.userActions.deleteUserSuccess(user));
}