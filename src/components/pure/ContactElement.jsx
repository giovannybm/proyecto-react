import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'

const ContactElement = ({contact}) => {
  return (
    <div>
        <p>Nombre: {contact.name}</p>
        <p>Apellido: {contact.lastName}</p>
        <p>Email: {contact.email}</p>
        <p>Estado: {contact.connected ? 'Conectado':'Desconectado'}</p>
    </div>
  )
}

ContactElement.propTypes = {
    contact: PropTypes.instanceOf(Contact)
}

export default ContactElement