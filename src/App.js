import './App.css';
import Header from './components/Header'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'
import { useState,useEffect } from 'react';


function App() {
 const [contacts, setContacts] = useState([]);
 const LOCAL_STORAGE_KEY ='contact'

  const addContactHandler = (contact) => {
    setContacts([...contacts,contact])
  }
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) =>{
      return contact.id !== id
    })
    setContacts(newContactList)
  }

    useEffect(() => {
      
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
    }, [contacts]);

  useEffect(() => {
    
    const retriveContacts =JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
      if(retriveContacts)  setContacts(retriveContacts)
   
    }, []);


  return (
    <div className="ui container">
          <Header></Header>
          <AddContact addContactHandler={addContactHandler} ></AddContact>
          <ContactList contacts={contacts} getContactId={removeContactHandler}></ContactList>
    </div>
  );
}

export default App;
