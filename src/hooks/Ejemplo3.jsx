import React, { useState, useContext } from 'react'

/**
 * 
 * @returns Componente 1
 * Dispone de un contexto 
 */
const miContexto = React.createContext(null)
const Componente1 = () => {
  
  const state =useContext(miContexto)
  return (
    <div>
      <h1>
        El token es: {state.token}
      </h1>
      <Componente2/>
    </div>
  )
}

/**
 * 
 * @returns Componente 2
 * Dispone de un contexto 
 */
const Componente2 = () => {
  const state=useContext(miContexto)
  return (
    <div>
      <h2>
        La sesion es: {state.session}
      </h2>
    </div>
  )
}
/**
 * 
 * @returns Componente 3
 * Dispone de un contexto 
 */
const ComponenteConContexto = () => {
  const estadoInicial ={
    token:'123456789',
    session:1
  }
  const [sessionData, setsessionData] = useState(estadoInicial)

  const updateSession=()=>{
    setsessionData({
      token:'JYT9890809',
      session:sessionData.session +1
    })
  }

  return (
    <miContexto.Provider value={sessionData}>
    {/* Todo lo que este aqui dentro puede leer los datos de sessionData*/}
    <Componente1></Componente1>
    <button onClick={updateSession}>Actualizar</button>
    </miContexto.Provider>
  )
}

export default ComponenteConContexto