export default class UserModel {
    _id = "";
    login_id= "";
    email= "";
    contacts = [];
    notes = [];
    provider = [];

    constructor(id: string,loginid: string,email: string,contacts: any,notes: any,provider: any) {
        this._id = id;
        this.login_id = loginid;
        this.email = email;
        this.contacts = contacts;
        this.notes = notes;
        this.provider = provider;
    }
}
