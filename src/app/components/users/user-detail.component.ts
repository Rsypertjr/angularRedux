//app/components/users/user.detail.component.ts
import {Component, EventEmitter, Input, OnInit, OnDestroy, Output} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';

import {User} from '../../models';
import {AppState} from '../../reducers';
import {UserActions} from '../../actions';
import {UserService} from '../../services';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'rx-user-detail',
    templateUrl: './user-detail.component.html',
})
export class UserDetail implements OnInit, OnDestroy {
    idSub: Subscription;
    cindex:number;
    currentState:AppState;
    user: Observable<any>;
    navigated = false;
    @Output() close = new EventEmitter();
    @Input() selectedUser;
    constructor(
         private store: Store<AppState>,
         private route: ActivatedRoute,
         private userActions: UserActions,
         private router: Router, 
         private titleService: Title
    ){
        this.user = store.select('user');   
    }
    
    ngOnInit() {
        this.titleService.setTitle('Input User');
        this.idSub = this.route.params
            .select<string>('id')
            .subscribe(id => {
                if (id) {
                    this.store.dispatch(this.userActions.getUserSuccess(id));
                    this.navigated = true;
                } else {
                    this.store.dispatch(this.userActions.resetBlankUser());
                    this.navigated = false;
                }
            });
    }


    ngOnDestroy() {
        this.idSub.unsubscribe();
    }

    goBack(savedUser: User = null){
        this.close.emit(savedUser);
        if(this.navigated) {window.history.back();}
    }

    save(user:User){
        user.id = ++this.cindex;
        this.store.dispatch(this.userActions.addUserSuccess(user));    //bypass API
        this.goBack(user);
    }

   saveEdit(user:User){     
        //Does not update API
        this.store.dispatch(this.userActions.updateUserSuccess(user));    
        this.goBack(user);
    } 
}