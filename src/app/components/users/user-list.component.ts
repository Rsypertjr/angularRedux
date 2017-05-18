//app/components/users/user.list.component.ts
import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'rx-user-list',
    templateUrl: './user-list.component.html',
    styles: ['./user-list.component.css']
})
export class UserList {
    @Input() users;
    @Input() selectedUser;

    @Output() onSelect = new EventEmitter();
    @Output() onDelete = new EventEmitter();
    @Output() dashboard = new EventEmitter();
    
    constructor(
         private titleService: Title){}

    delete($event, user){
        $event.stopPropagation();
        this.onDelete.emit(user);
    } 

   ngOnInit(){
       
        this.titleService.setTitle('User List');
   }

}