import {User} from '../models/User';

let user1 = User.buildUser({id: 1 , name: 'Ha', age: 19});
const users = User.buildCollection();
user1.on('save', () => {
    console.log('we save data success ');
})
user1.on('fetch', () => {
    console.log('we fetch data success, and we will update other fields');
})

// user1.fetch()
users.fetch();
console.log(users);