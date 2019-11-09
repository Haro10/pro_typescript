import {Eventing} from './Eventing';
import {Sync} from './Sync';
import {Attributes} from './Attributes';
import { AxiosResponse } from 'axios';

export interface UserProps {
    id?:number;
    name?: string;
    age?: number
}

const rootUrl =  'http://localhost:3000/users';

export class User {
    events: Eventing = new Eventing(); // with the option 3 we always have a events inside of 
    sync: Sync<UserProps> = new Sync<UserProps>(rootUrl); 
    attributes: Attributes<UserProps>;

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
    constructor(data: UserProps){
        this.attributes = new Attributes<UserProps>(data);
    }

    get get(){
       return this.attributes.get;
    }

    get set(){
        return this.attributes.set;
    }

    get on(){
        return this.events.on;
    }

    get trigger(){
        return this.events.trigger;
    }
    
    fetch(): void{
        const id = this.get('id');

        if (typeof id !== 'number') {
            throw new Error('can not fetch without an Id');
        }

        this.sync.fetch(id)
        .then((response: AxiosResponse): void => {
            this.set(response.data);
            this.trigger('fetch');
        })
        .catch((err: any) => {
            throw(err);
        })
    }
     
    save(): void{
        this.sync.save(this.attributes.getAll())
        .then((response: AxiosResponse): void => {
            this.trigger('save');
        })
        .catch(() => {
            this.trigger('error');
        })
    }
}