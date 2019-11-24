import { CollectionView } from "./CollectionView";
import { User, UserProps } from "../models/User";
import { UserShow } from "./UserShow";

export class UserList extends CollectionView<User, UserProps> {
    renderItem = (data: User, itemParent: Element) => {
        new UserShow(itemParent, data).render();
    }
}