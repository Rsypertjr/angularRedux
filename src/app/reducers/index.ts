import '@ngrx/core/add/operator/select';
import {compose} from '@ngrx/core/compose';
//import {storeLogger} from 'ngrx-store-logger';
import {combineReducers} from '@ngrx/store';

import userListReducer, * as fromUserList from './user-list';
import userReducer, * as fromUser from './user';

export interface AppState {
    users: fromUserList.UserListState;
    user: fromUser.UserState;
};

//uncomment the storeLogger import and this line
//and comment out the other export default line to turn on
//the store logger to see the actions as they flow through the store
//turned this off by default as i found the logger kinda noisy

//export default compose(storeLogger(), combineReducers)({
export default compose(combineReducers)({
    users: userListReducer,
    user: userReducer
});
