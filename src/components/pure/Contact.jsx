import React from 'react'

import { Contact } from '../../models/contact.class'
import ContactElement from './ContactElement'
const ContactComponent = () => {
  const defaultContact = new Contact('Camilo', 'Chaparro', 'cami.chaparro@example.com', true)
  return (
    <div>
      <ContactElement contact={defaultContact} />
    </div>
  )
}



export default ContactComponent