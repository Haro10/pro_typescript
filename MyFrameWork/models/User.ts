import {Eventing} from './Eventing';
import {Sync} from './Sync';

export interface UserProps {
    id?:number;
    name?: string;
    age?: number
}

export class User {
    //OPTION 1: put event to construtor 
    // constructor(private data: UserProps, event: Eventing){}
    //-> it's too compicated when creating a new User with 2 parameters
    // When using:
    // const user = new User({id:1, name:'Kieu Minh'}, new Eventing());

    //OPTION 2: using static function like stats project
    // constructor(private event: Eventing){}
    // private data: UserProps = {};
    // static fromData(data: UserProps){
    //     const user = new User(new Eventing());
    //     user.data = data;
    //     return user;
    // }
    // -> it is not necessary because it's  will be goo when we have alot of type Eventing like stats project
    // Like : SupperEventing, AnimalEventing => But we dont't have that -> and I think it good to have only one Eventing
    //=> So we go to the third option

    //OPTION 3: create a new Eventing inside the User
    constructor(private data: UserProps){}

    events: Eventing = new Eventing(); // with the option 3 we always have a events inside of 
    sync: Sync<UserProps> = new Sync('http://localhost:3000/user'); 


    get(prop: string): number | string{
        return this.data[prop]
    }

    set(user: UserProps){
        Object.assign(this.data, user);
    }
   
}