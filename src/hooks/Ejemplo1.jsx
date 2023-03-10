import React, { useState } from 'react'


const Ejemplo1 = props => {


  const valorInicial = 0;
  //Valor Inicial
  const personaInicial = {
    nombre: 'martin',
    email: 'martin@example.com'
  }

  const [contador, setContador] = useState(valorInicial)
  const [persona, setPersona] = useState(personaInicial)

  /**
   * Funcion para Actualizar el estado privado del contador
   */
  function incrementarContador() {
    setContador(contador + 1)
  }
  /**
   * 
   */
  function actualizarPersona() {
    setPersona({
      nombre: 'Pepe',
      email: 'pepe@gmail.com'
    }
    )
  }
  return (
    <div>
      <h1>Ejemplo de UseState</h1>
      <h2>Contador: {contador}</h2>
      <h2>Persona</h2>
      <h3>Nombre: {persona.nombre}</h3>
      <h3>Email: {persona.email}</h3>
      <div>
        <button onClick={incrementarContador}>Incrementar contador</button>
        <button onClick={actualizarPersona}>Actualizar persona</button>
      </div>
    </div>
  )
}



export default Ejemplo1