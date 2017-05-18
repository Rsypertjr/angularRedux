import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {Users} from './users.component';
import {UserList} from './user-list.component';
import {UserDetail} from './user-detail.component';
import {UserFormComponent} from './user-form.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [Users, UserList, UserDetail, UserFormComponent],
  exports: [Users, UserDetail],
  providers: []
})
export class UsersModule {}