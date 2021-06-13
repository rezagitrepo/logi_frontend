export interface IUser {
    login_id: String;
    email: String;
    contacts: Array<IContact>;
    notes: Array<INote>;
    provider: Array<IProvider>;
}

export interface IContact {
    title: String,
    first_name: String,
    last_name: String,
    mobile_phone: String,
    office_phone: String,
    office_ext: String,
    fax: String,
    toll_free: String,
    toll_free_ext: String,
    email: String,
}

export interface INote {
    time_stamp: String,
    body: String,
}

export interface IProvider {
    name: String,
    address_line1: String,
    address_line2: String,
    address_line3: String,
    country: String,
    city: String,
    state: String,
    zip_code: String,
    phone: String,
    phone_ext: String,
    fax: String,
    toll_free: String,
    email: String,
    primary_contact: String,
    time_zone: String,
    hour_start: Number,
    hour_end: Number,
    active: Boolean,
    rate_signed: Boolean,
    primary: Boolean
}
