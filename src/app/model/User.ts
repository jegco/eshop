export interface IUser {
    email: String;
    password: String;
    id: String;
}

export class User implements IUser {

    constructor(public email: String,
        public password: String,
        public id: String) { }

    static createEmptyUser() {
        return new User('', '', '');
    }
}
