import React, { useEffect, useState } from "react";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [filterStr, setFilterStr] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/")
      .then((response) => response.json())
      .then((contacts) => setContacts(contacts));
  }, []);

  return (
    <>
      <input
        placeholder="search by last name"
        value={filterStr}
        type="text"
        onChange={(e) => {
          e.preventDefault();
          let newStr = e.target.value;
          setFilterStr(newStr);
        }}
      />
      <ul>
        {contacts
          .filter((contact) => contact.last_name.includes(filterStr))
          .map((contact) => {
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
