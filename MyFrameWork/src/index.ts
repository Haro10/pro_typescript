import {User} from '../models/User';

let user1 = new User({id: 1 , name: 'Ha', age: 1900});
let user2 = new User({name: 'Ha', age: 1900});
// newUser.set({age: 28});
// newUser.on('onClick', () => {
//     console.log('User clicked on item', newUser.get('age'));
// });
// newUser.on('onClick', () => {});
// newUser.on('onHover', () => {
//     console.log('User hover in the item');
// });
// newUser.trigger('onClick');
// newUser.trigger('onHover');
user1.save();
user2.save();
// console.log(`Welcome to my project ${newUser.get('name')} with ${newUser.get('age')} age`);
