import React from 'react'

const ListContacts = (props) => {
    const {contacts, handleDelete} = props

    return (
        <ol className='contact-list'>
            {contacts.map(contact => {
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
    )
}

export default ListContacts