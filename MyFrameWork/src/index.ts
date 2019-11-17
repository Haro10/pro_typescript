import {UserForm} from './views/UserForm';
import { User } from './models/User';

const userForm = new UserForm(
    document.getElementById('root'),
    User.buildUser({
        name: 'Ha',
        age: 29
    })
)

userForm.render();