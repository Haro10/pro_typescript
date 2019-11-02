import {User} from '../models/User';

let newUser = new User({name: 'Ha', age: 19});
newUser.set({age: 28});
console.log(`Welcome to my project ${newUser.get('name')} with ${newUser.get('age')} age`);
