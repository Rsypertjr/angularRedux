//app/routes.ts
import { Routes } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

//import {Dashboard, Users, UserDetail} from './components';
import {Dashboard} from './components/dashboard/dashboard.component';
import {Users} from './components/users/users.component';
import {AppComponent} from './app.component';
import {UserDetail} from './components/users/user-detail.component';
const BASE_URL = 'http://localhost:3000/users';

export const routes: Routes = [
    { path: '', component: Users },
    { path: 'dashboard', component: Dashboard },
    { path: 'users', component: Users },
    { path: 'detail/:id', component: UserDetail }
];

