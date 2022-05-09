import React, {useState} from 'react'
import PropTypes from "prop-types"

const ListContacts = (props) => {
    const {contacts, handleDelete} = props
    const [input, setInput] = useState("")

    const showContacts = input === "" ? contacts : contacts.filter(contact => contact.name.includes(input))

    console.log(showContacts)
    return (
        <div className='list-contacts'>
            <input 
                name="input" 
                value={input} 
                type="text" 
                placeholder='Search Contacts'
                onChange={(e) => setInput(e.target.value.trim())}
            />
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
                            <button className='contact-remove' onClick={() => handleDelete(contact.id)}>Remove</button>
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