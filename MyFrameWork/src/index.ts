import {User} from '../models/User';

let newUser = new User({name: 'Ha', age: 19});
newUser.set({age: 28});
newUser.on('onClick', () => {
    console.log('User clicked on item');
});
newUser.on('onClick', () => {});
newUser.on('onHover', () => {
    console.log('User hover in the item');
});
newUser.trigger('onClick');
newUser.trigger('onHover');
// console.log(newUser);
// console.log(`Welcome to my project ${newUser.get('name')} with ${newUser.get('age')} age`);
