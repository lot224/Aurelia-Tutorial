import {Contact} from './contact';

export class ContactUpdated {
    contact:Contact;
    constructor(contact) {
        this.contact = contact;
    }
}

export class ContactViewed {
    contact:Contact;
    constructor (contact) {
        this.contact = contact;
    }
}