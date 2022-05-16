import React, { useState } from "react";
import "../css/App.css";
import ListContacts from "./ListContacts";
import CreateContact from "./CreateContact";
import * as ContactsAPI from "../utils/ContactsAPI";

const App = () => {
  const [contacts, setContacts] = useState(
    [
      {
        id: "karen",
        name: "Karen Isgrigg",
        handle: "karen_isgrigg",
        avatarURL: "http://localhost:5001/karen.jpg",
      },
      {
        id: "richard",
        name: "Richard Kalehoff",
        handle: "richardkalehoff",
        avatarURL: "http://localhost:5001/richard.jpg",
      },
      {
        id: "tyler",
        name: "Tyler McGinnis",
        handle: "tylermcginnis",
        avatarURL: "http://localhost:5001/tyler.jpg",
      },
    ]
  )

  const handleDelete = (contact) => {
    console.log(contact)
    ContactsAPI.remove(contact)
    setContacts(prev => prev.filter(c => c.id !== contact.id))
  }

  return (<div>
    
    <ListContacts contacts={contacts} handleDelete={handleDelete}/>  
    <CreateContact />
  </div>);
};

export default App;
