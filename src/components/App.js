import React, { useState, useEffect } from "react";
import "../css/App.css";
import ListContacts from "./ListContacts";
import CreateContact from "./CreateContact";
import * as ContactsAPI from "../utils/ContactsAPI";
import { Route, Routes, useNavigate } from "react-router-dom";

const App = () => {

  const [contacts, setContacts] = useState([])

  let navigate = useNavigate()

  useEffect(() => {
    const getContacts = async() => {
      const res = await ContactsAPI.getAll()
      setContacts(res)
    }
    getContacts()
  }, [])

  const handleDelete = (contact) => {
    console.log(contact)
    ContactsAPI.remove(contact)
    setContacts(prev => prev.filter(c => c.id !== contact.id))
  }

  const handleCreate = (contact) => {
    const create = async() => {
      const res = await ContactsAPI.create(contact)
      console.log("response:", res)
      setContacts(prev => [...prev, res])
    }
    create()
    navigate("/")
  }

  return (
    <Routes>
      <Route exact path="/" element={<ListContacts contacts={contacts} handleDelete={handleDelete}/>  }/>
      <Route path="/create" element={<CreateContact onCreateContact={handleCreate} />}/>
    </Routes>
    

  );
};

export default App;
