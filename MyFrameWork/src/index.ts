import {UserForm} from './views/UserForm';
import { User } from './models/User';

const root =  document.getElementById('root');
if (root) {
    const userForm = new UserForm(
        root,
         User.buildUser({
             name: 'Ha',
             age: 29
         })
     )
     
     userForm.render();
} else {
    throw new Error('the root is not existing');
}
