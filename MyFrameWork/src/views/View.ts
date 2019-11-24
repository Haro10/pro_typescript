import { Model } from "../models/Model";

export abstract class View<T extends Model<K>, K> {
    views: {[key:string]: Element} = {};

    constructor(public parent: Element, public model: T){
        this.bindModel();
    }
    
    abstract template():string;
    eventsMap():{[key:string]: () => void} {
        return {};
    };

    viewsMap():{[key:string]: string}{
        return {};
    }

    bindModel(): void{
        this.model.on('change', () => {
            this.render();
        })
    }

    bindEvents(fragment: DocumentFragment):void{
        const eventsMap = this.eventsMap();
        for (let eventKey in eventsMap){ // use let to get eventKey (key) in eventMaps(object)
           const [eventName, selector]  = eventKey.split(':');
           fragment.querySelectorAll(selector).forEach(element => {
               element.addEventListener(eventName, eventsMap[eventKey])
           })
        }
    }

    renderViews = (fragment : DocumentFragment) => {
        const viewsMap = this.viewsMap();
        for (let viewKey in viewsMap) {
          const view = fragment.querySelector(viewsMap[viewKey])
          if (view) {
            this.views[viewKey] = view;
          }
      }
    }

    onRender =():void => {}

    render(): void{
        this.parent.innerHTML = '';
        const templateElement = document.createElement('template'); // it means type template
        templateElement.innerHTML = this.template();
        this.renderViews(templateElement.content);
        this.onRender();
        this.bindEvents(templateElement.content);
        this.parent.append(templateElement.content)
    }
}