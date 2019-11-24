import { User } from './models/User';
import { UserEdit } from './views/UserEdit';

const root =  document.getElementById('root');
if (root) {
    const view = new UserEdit(
        root,
        User.buildUser({
             name: 'Ha',
             age: 29
         })
     )   
     view.render();
} else {
    throw new Error('the root is not existing');
}
