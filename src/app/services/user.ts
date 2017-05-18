//app/services/user.ts

import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../models';
const BASE_URL2 = 'http://localhost:3000/db';
const BASE_URL = 'http://localhost:3000/users';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class UserService {
    user:URLSearchParams;
    constructor (private http: Http) {}

    getUsers(): Observable<User[]>{
       return this.http.get(BASE_URL,HEADER) 
       .map(res => res.json());
    }

    getUser(id): Observable<User> {
        return this.http.get(BASE_URL + id)
        .map(res => res.json());
    }
 
    saveUser(user) {
        if(user.id === 0) {
            return this.http.post(BASE_URL, JSON.stringify(user), HEADER)
                            .map(res => res.json());
            
        } else {
            return this.http.post(BASE_URL, JSON.stringify(user), HEADER)
                            .map(res => res.json());
        }
    }

    deleteUser(user) {
        return this.http.delete(BASE_URL + '/' + user.id)
        .map(res => user);
    }
}