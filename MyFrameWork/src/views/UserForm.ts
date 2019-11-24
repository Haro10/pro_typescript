import { User, UserProps } from "../models/User";
import {View} from './View';

export class UserForm extends View<User, UserProps>{
    template():string{
        return `
        <div>
            <input placeholder = '${this.model.get('name')}'></input>
            <button class='set-name'>Set a new name</button>
            <button class='set-age'>Set a new age</button>
            <button class='save-user'>Save User</button>
        </div>
        `
    }

    eventsMap(): {[key:string]: ()=> void} {
        return {
            'click:.set-age': this.onSetAgeClick,
            'click:.set-name': this.onSetNameClick,
            'click:.save-user': this.onSaveUser,
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

    onSaveUser = () => {
        this.model.save();
    }
}