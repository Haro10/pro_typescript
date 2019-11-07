import axios, {AxiosResponse} from 'axios';

export interface UserProps {
    id?:number;
    name?: string;
    age?: number
}

export type CallBack = () => void;

export class User {
    constructor(private data: UserProps){}
    
    events: {[key: string]: CallBack[]} = {};

    get(prop: string): number | string{
        return this.data[prop]
    }

    set(user: UserProps){
        Object.assign(this.data, user);
    }
    
    on(eventName: string | number, callback : CallBack){
        const handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    }

    trigger(eventName: string) : void{
        const handlers = this.events[eventName];
        if (!handlers || handlers.length === 0) {
            return;
        }
       handlers.forEach(handler => handler());
    }

    fetch(): void{
        axios.get(`http://localhost:3000/users/${this.get('id')}`)
        .then((response: AxiosResponse): void => {
           return this.set(response.data);
        })
    }

    save():void {
        const id = this.get('id');
        if (id) {
            axios.put(`http://localhost:3000/users/${id}`, this.data);
        } else {
            axios.post(`http://localhost:3000/users`, this.data);
        }
    }
}