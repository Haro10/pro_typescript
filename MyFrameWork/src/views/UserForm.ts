import { User } from "../models/User";

export class UserForm extends View<User>{
 
    template():string{
        return `
        <div>
            <h1>User Form</h1>
            <div> Name: ${this.model.get('name')}</div>
            <div> Age: ${this.model.get('age')}</div>
            <input></input>
            <button class='set-name'>Set a new name</button>
            <button class='set-age'>Set a new age</button>
        </div>
        `
    }

    eventsMap(): {[key:string]: ()=> void} {
        return {
            'click:.set-age': this.onSetAgeClick,
            'click:.set-name': this.onSetNameClick,
        };
    }

    onSetAgeClick = () => {
        this.model.setRandomAge();
    }

    onSetNameClick = () => {
    const input = this.parent.querySelector('input');
      if (input) {
        const name = input.value;
        this.model.set({name});
      }
    }
}