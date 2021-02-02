import React from "react";
import Card from "./card";
import contacts from "../contacts.js";

function Contact() {

    function createCard(contact) {
        return (
            <Card
                key={contact.id}
                id={contact.id}
                name={contact.name}
                img={contact.imgURL}
                alt={contact.alt}
                phone={contact.phone}
                email={contact.email}
            />
        );
    };

    return (
        <div>
            <h1 className="heading">My Contacts</h1>
            {contacts.map(createCard)}
        </div>
    );
};

export default Contact;