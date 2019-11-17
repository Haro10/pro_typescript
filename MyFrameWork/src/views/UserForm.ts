import { User } from "../models/User";

export class UserForm{
    constructor(public parent: Element, private model: User){
        this.bindModel();
    }

    bindModel(): void{
        this.model.on('change', () => {
            this.render();
        })
    }

    template():string{
        return `
        <div>
            <h1>User Form</h1>
            <div> Name: ${this.model.get('name')}</div>
            <div> Age: ${this.model.get('age')}</div>
            <input></input>
            <button>Click Me</button>
            <button class='set-age'>Set a new age</button>
        </div>
        `
    }

    eventsMap(): {[key:string]: ()=> void} {
        return {
            'click:.set-age': this.onSetAgeClick,
        };
    }

    onSetAgeClick = () => {
        this.model.setRandomAge();
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

    render(): void{
        this.parent.innerHTML = '';
        const templateElement = document.createElement('template'); // it means type template
        templateElement.innerHTML = this.template();
        console.log('this.template()', this)
        console.log(templateElement.content);
        this.bindEvents(templateElement.content);
        this.parent.append(templateElement.content)
    }
}