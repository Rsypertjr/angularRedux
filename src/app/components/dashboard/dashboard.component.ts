//app/components/dashboard/dashboard.component.ts
import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs/Subscription';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {AppState} from '../../reducers';
import {UserActions} from '../../actions';
import {User} from '../../models';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'rx-dashboard',
    templateUrl: './dashboard.component.html',
    styles: ['./dashboard.component.css']

})
export class Dashboard{    
    user: Observable<User>; 
    idSub: Subscription; 
    @Output() close = new EventEmitter(); 
    @Output() edit = new EventEmitter(); 
    @Input() users;
    @Input() selectedUser;
    constructor(
        private store: Store<AppState>,
        private userActions: UserActions,
        private router: Router,        
        private route: ActivatedRoute,        
        private titleService: Title

    ){        
        this.user = store.select('user'); 
    }

     ngOnInit() {
        
        this.titleService.setTitle('Dashboard');
        this.idSub = this.route.params
            .select<string>('id')
            .subscribe(id => {
                if (id) {
                    this.store.dispatch(this.userActions.getUser(id));
                } else {
                    this.store.dispatch(this.userActions.resetBlankUser());
                }
            });
    }

    goBack(){
        this.router.navigate(['']);      
    } 
 

}