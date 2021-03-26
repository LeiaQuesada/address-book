import React, { useEffect, useState } from "react";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/")
      .then((response) => response.json())
      .then((contacts) => setContacts(contacts));
  }, []);

  return (
    <>
      <ul>
        {contacts.map((contact) => {
          return (
            <ul key={contact.phone_number}>
              <li>
                {contact.first_name} {contact.last_name}
              </li>
              <li>Phone: {contact.phone_number}</li>
              <li>Email: {contact.email}</li>
              <hr />
            </ul>
          );
        })}
      </ul>
    </>
  );
};

export default Contacts;
