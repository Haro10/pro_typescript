import {Eventing} from './Eventing';
import {ApiSync} from './ApiSync';
import {Attributes} from './Attributes';
import { Model } from './Model';
import { Collection } from './Collection';

export interface UserProps {
    id?:number;
    name?: string;
    age?: number
}

const rootUrl =  'http://localhost:3000/users';

export class User extends Model<UserProps> {

    static buildUser(attrs: UserProps): User{
        return new User(new Attributes<UserProps>(attrs), new Eventing(), new ApiSync<UserProps>(rootUrl));
    }

    static buildCollection(){
        return new Collection<User,UserProps>(rootUrl, this.buildUser)
    }

    //you can't feel free to implement any function with your bussiness - How is beautiful you are!!!
    isAdmin(): boolean{
        return this.get('id') === 1;
    }
   
}