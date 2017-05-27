import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Store, StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {CommonModule} from '@angular/common';
import { AppComponent } from './app.component';
import reducer from './reducers';

import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { DashboardModule, UsersModule } from './components';
import { UserList } from './components/users/user-list.component';
import { UserDetail } from './components/users/user-detail.component';
import { UserFormComponent } from './components/users/user-form.component';
import { UserService } from './services/user';
import { UserEffects } from './effects';
import { UserActions } from './actions';
import { Users} from './components/users/users.component';
import { Dashboard } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [AppComponent,Users,Dashboard,UserList, UserDetail,UserFormComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(reducer),
    EffectsModule.run(UserEffects),
    RouterModule.forRoot(routes)
  ],
  providers: [UserActions, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
