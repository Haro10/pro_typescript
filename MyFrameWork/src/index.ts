import {User} from '../models/User';

let user1 = new User({id: 1 , name: 'Ha', age: 19});
user1.on('save', () => {
    console.log('we save data success ');
})
user1.on('fetch', () => {
    console.log('we fetch data success, and we will update other fields');
})
// user1.trigger('save');
user1.fetch();
user1.set({age: 28});
user1.save();
console.log(user1);