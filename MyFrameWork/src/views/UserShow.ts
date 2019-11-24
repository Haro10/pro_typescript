import { View } from "./View";
import { User, UserProps } from "../models/User";


export class UserShow extends View<User, UserProps>{
    template =  () => {
        return `
        <h1>User Form</h1>
        <div> Name: ${this.model.get('name')}</div>
        <div> Age: ${this.model.get('age')}</div>
        `;
    }
}