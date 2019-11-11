export class UserForm{
    constructor(private parent: Element){}

    template():string{
        return `
        <div>
            <h1>User Form</h1>
            <input></input>
        </div>
        `
    }

    render(): void{
        const templateElement = document.createElement('template'); // it means type template
        templateElement.innerHTML = this.template();
        this.parent.append(templateElement.content)
    }
}