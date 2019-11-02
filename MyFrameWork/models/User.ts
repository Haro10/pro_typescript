export interface UserProps {
    name?: string;
    age?: number
}

export class User {
    constructor(private data: UserProps){}

    get(prop: string): number | string{
        return this.data[prop]
    }
    set(user: UserProps){
        Object.assign(this.data, user);
    }
}