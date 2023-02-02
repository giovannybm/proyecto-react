import React from 'react'

const Ejemlo4 = (props) => {
  return (
    <div>
        <h1>Ejemplo de children props</h1>
        <h2>
            Nombre: {props.nombre}
        </h2>
        {props.children}
    </div>
  )
}

export default Ejemlo4