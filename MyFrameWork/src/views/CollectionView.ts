import axios, { AxiosResponse } from "axios";
import { UserProps, User } from "../models/User";
import { Collection } from "../models/Collection";

export abstract class CollectionView<T,K> {
    constructor(public parent: Element, public collection: Collection<T,K>) {
        
    }

    abstract renderItem = (data: T, itemParent: Element):void => {};

    
    render = () : void => {
        this.parent.innerHTML = '';
        const templateElement = document.createElement('template');
        this.collection.collection.forEach(element => {
            const itemParent = document.createElement('div');
            this.renderItem(element, itemParent);
            templateElement.content.append(itemParent);
        });
        this.parent.append(templateElement.content);
    }
}