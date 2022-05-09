import React, { useState } from "react";
import "../css/App.css";
import ListContacts from "./ListContacts";

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

  const handleDelete = (id) => {
    setContacts(prev => prev.filter(contact => contact.id !== id))
  }

  return (<div>
    <ListContacts contacts={contacts} handleDelete={handleDelete}/>  
  </div>);
};

export default App;
