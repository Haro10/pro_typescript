import { User, UserProps } from './models/User';
import { UsersShow } from './views/UsersShow';
import { Collection } from './models/Collection';
import { UserList } from './views/UserList';

// const root =  document.getElementById('root');
// if (root) {
//     const view = new UsersShow(
//         root,
//         new Collection()
//      )   
//      view.render();
// } else {
//     throw new Error('the root is not existing');
// }


const users = new Collection('http://localhost:3000/users', 
  (json:UserProps)=> {
    return User.buildUser(json);
  }
)

users.on('change', () => {
    const root = document.getElementById('root');
    if (root) {
        new UserList(root, users).render();
    }
})

users.fetch();