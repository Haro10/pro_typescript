export interface UserProps {
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

}