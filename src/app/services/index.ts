

import { HttpModule } from '@angular/http';
import {UserService} from './user';

export {
    UserService
};

export default [
    HttpModule,
    UserService
];