interface ModelForView {
    on(name: string, callBack: () => void) : void;
};

abstract class View<T extends ModelForView> {
    constructor(public parent: Element, public model: T){
        this.bindModel();
    }

    abstract eventsMap():{[key:string]: () => void};
    abstract template():string;

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