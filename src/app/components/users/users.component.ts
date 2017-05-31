//app/components/heroes/heroes.component.ts
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';

import {AppState} from '../../reducers';
import {UserActions} from '../../actions';
import {UserService} from '../../services';
import {User} from '../../models';
import {Component, Input, OnInit} from '@angular/core';

import {Http, Headers} from '@angular/http';
const BASE_URL = 'http://localhost:3000/db';
const BASE_URL2 = 'http://localhost:3000/users';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };



@Component({
    selector: 'rx-users',
    templateUrl: './users.component.html',
})
export class Users {  
    users: Observable<User[]>;
    addingUser:boolean;
    notPressedAddButton:boolean;
    isPressedListButton:boolean;
    isPressedDashboardButton:boolean;
    seeUserInput:boolean;
    selectedUser = null;
    currentState:AppState;  
   
    constructor(
        private store: Store<AppState>,
        private userActions: UserActions,
        private router: Router,         
        private svc:UserService
       // private http: Http
    ){        
        this.users = store.select('users');  
        this.addingUser = false;
        this.notPressedAddButton = true;
        this.isPressedListButton = false;
        this.isPressedDashboardButton = false;
        this.seeUserInput = true;    
    }
 

    ngOnInit(){
        this.router.navigate(['users']);
             
    }

    addUser(){
        this.addingUser = true;
        this.selectedUser = null;
        this.notPressedAddButton = false;
        this.isPressedListButton = false;
    }


    close(){
        this.addingUser = false;
        this.notPressedAddButton = true;
    }

    delete(user){
        this.store.dispatch(this.userActions.deleteUser(user));
    }
    
    seeList(){
        this.isPressedListButton = true; 
        this.notPressedAddButton = true;    

    }

    select(user) {
        this.selectedUser = user;
        this.addingUser = false;
    }

     seeDashboard(user){
        this.isPressedDashboardButton = true;
        this.notPressedAddButton = false;
        this.seeUserInput = false; 
        this.selectedUser = user;
        //this.router.navigate(['/dashboard/']);
    }

    edit(selectedUser){
        this.addingUser = true;
        this.selectedUser = selectedUser;
        this.notPressedAddButton = false;
        this.isPressedListButton = false;
        this.isPressedDashboardButton = false;        
        this.seeUserInput = true; 
    }
}