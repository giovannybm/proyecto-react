import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Hello = ({ name }) => {
    const [age, setAge] = useState(29)
    const birthday = () => {
        setAge(age + 1)
    }
    return (
        <div>
            <h1>Hola {name} desde componente Funcional</h1>
            <h2>Tu edad es: {age}</h2>
            <button onClick={birthday}>Increment Age</button>
        </div>
    )
}

Hello.propTypes = {
    name: PropTypes.string,
}

export default Hello