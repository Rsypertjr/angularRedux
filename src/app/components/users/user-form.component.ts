import { Component,Input, Output, EventEmitter,OnInit } from '@angular/core';
import { User }    from '../../models/user';
import { FormControl,FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html'
})
export class UserFormComponent {
constructor(private titleService: Title) {}
 
//submitted = false;

@Input() selectedUser;
    
_user;
@Input() set user(auser){
    this._user = Object.assign({},auser);

}

get user() {
    return this._user;
}




ngOnInit(){
  if(this.selectedUser != null)
      this.user = this.selectedUser;
  //  this.user = {id:1, firstName:'First Name', lastName:'Last Name', email:'Email Address'};

   this.titleService.setTitle('Input User');
}

@Output() back = new EventEmitter();
@Output() save = new EventEmitter();
@Output() saveEdit = new EventEmitter();

}