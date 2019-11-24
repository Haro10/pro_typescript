import { View } from "./View"
import { User, UserProps } from "../models/User";
import { UserForm } from "./UserForm";
import { UserShow } from "./UserShow";

export class UserEdit extends View<User, UserProps> {
    viewsMap = (): {[key:string]: string} => {
        return {
         userShow : '.user-show',
         userForm : '.user-form',
        }
   }

   onRender = () => {
       new UserForm(this.views.userForm, this.model).render();
       new UserShow(this.views.userShow, this.model).render();
   }

   template = () : string => {
       return `
       <div class='user-show'></div>
       <div class='user-form'></div>
       `;
   }
}