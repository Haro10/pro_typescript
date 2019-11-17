export class UserForm{
    constructor(private parent: Element){}

    template():string{
        return `
        <div>
            <h1>User Form</h1>
            <input></input>
            <button>Click Me</button>
        </div>
        `
    }

    eventsMap(): {[key:string]: ()=> void} {
        return {
            'click:button': this.onButtonClick,
            'mouseenter:button': this.onButtonHover,
        };
    }

    onButtonClick(): void{
        console.log('You clicked button');
    }

    onButtonHover(): void{
        console.log('You hovered button');
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
        const templateElement = document.createElement('template'); // it means type template
        templateElement.innerHTML = this.template();
        this.bindEvents(templateElement.content);
        this.parent.append(templateElement.content)
    }
}