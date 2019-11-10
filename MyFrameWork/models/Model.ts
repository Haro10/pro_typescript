import { AxiosPromise, AxiosResponse } from "axios";

interface Attributes<T>{
    get<K extends keyof T>(key:K):T[K],
    set(update: T):void,
    getAll(): T,
}

interface Eventing{
    on(eventName: string, callBack: () => void): void,
    trigger(eventName:string):void,
}

interface Sync<T>{
    fetch(id:number):AxiosPromise,
    save(data: T): AxiosPromise,
}

interface HasId{
    id?: number
}

export class Model<T extends HasId> {
    constructor(
        private attributes: Attributes<T>,
        private events: Eventing,
        private sync: Sync<T>,
        ){}

        get = this.attributes.get;
        
        set = this.attributes.set;

        on = this.events.on;
      
        trigger = this.events.trigger;
     
        fetch(): void{
             const id = this.get('id');
             console.log(id);
             if (typeof id !== 'number') {
                 throw new Error('can not fetch without an Id');
             }
     
             this.sync.fetch(id)
             .then((response: AxiosResponse): void => {
                 this.set(response.data);
                 console.log(response.data);
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