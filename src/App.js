import React from "react";
import Contacts from "./components/Contacts";
import AddContact from "./components/AddContact";

const App = () => {
  return (
    <>
      <h1>Address Book</h1>
      <Contacts />
      <AddContact />
    </>
  );
};

export default App;
