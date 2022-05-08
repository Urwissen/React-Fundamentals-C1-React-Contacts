import React from 'react'

const ListContacts = (props) => {
    const {contacts} = props

    return (
        <ol className='contact-list'>
            {contacts.map(contact => {
                return(
                    <li key={contact.id}>
                        <img src={contact.avatarURL} alt={contact.id}/>
                        <p><strong>{contact.name}</strong></p>
                        <p><em>{contact.handle}</em></p>
                    </li>
                )
            })}
        </ol>
    )
}

export default ListContacts