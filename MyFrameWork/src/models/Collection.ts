import axios, {AxiosResponse} from "axios";
import { Eventing } from "./Eventing";

export class Collection<T, K>{
    private collection: T[] = [];
    private events: Eventing = new Eventing();
    
    constructor(public rootUrl: string, public deserialize:(json : K)=>T){}

    get trigger(){
        return this.events.trigger;
    }

    fetch(): T[]{
        axios.get(this.rootUrl)
        .then((response: AxiosResponse) => {
            response.data.forEach((data: K) => {
                this.collection.push(this.deserialize(data))
            });
            this.trigger('GetAll');
            console.log('collection: ', this.rootUrl)
            return this.collection;
        })
        .catch(() => {
            this.trigger('error');
        })
        return [];
    }
}