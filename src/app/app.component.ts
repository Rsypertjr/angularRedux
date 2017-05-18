import { Component, } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from './reducers';
import {Observable} from 'rxjs/Observable';
import {UserActions} from './actions';
import {UserService} from './services';
import {Router} from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: Observable<any>;
  
    constructor(
        private store: Store<AppState>,
        private userActions: UserActions,
        private router: Router,         
        private svc:UserService,
        private titleService: Title
    ){
        this.users = store.select('users');
    }
}
