import React, {useState} from 'react'
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'

const ListContacts = (props) => {
    const {contacts, handleDelete} = props
    const [input, setInput] = useState("")

    const showContacts = input === "" ? contacts : contacts.filter(contact => contact.name.toLowerCase().includes(input))

    return (
        <div className='list-contacts'>
            <div className='list-contacts-top'>
                <input 
                    name="input"
                    className='search-contacts'
                    value={input} 
                    type="text" 
                    placeholder='Search Contacts'
                    onChange={(e) => setInput(e.target.value.trim())}
                />
                <Link to="/create" className='add-contact'>
                    Add contact
                </Link>
            </div>
            {input ? 
                <div className='showing-contacts'>
                    Show {showContacts.length} of {contacts.length} contacts. 
                    <button onClick={() => setInput("")}>Show all</button>
                </div> : null}
            <ol className='contact-list'>
                {showContacts.map(contact => {
                    return(
                        <li key={contact.id} className='contact-list-item'>
                            <div className='contact-avatar' style={{
                                backgroundImage: `url(${contact.avatarURL})`,
                            }}>

                            </div>
                            <div className='contact-details'>
                                <p><strong>{contact.name}</strong></p>
                                <p><em>{contact.handle}</em></p>
                            </div>
                            <button className='contact-remove' onClick={() => handleDelete(contact)}>Remove</button>
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}

ListContacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired
}

export default ListContacts