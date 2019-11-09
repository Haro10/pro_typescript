export type CallBack = () => void;

export class Eventing {
    events: {[key: string]: CallBack[]} = {};
    
    on = (eventName: string | number, callback : CallBack) => {
        const handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    }

    trigger = (eventName: string) : void{
        const handlers = this.events[eventName];
        if (!handlers || handlers.length === 0) {
            return;
        }
       handlers.forEach(handler => handler());
    }
}