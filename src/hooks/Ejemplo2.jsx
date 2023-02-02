import React, { useState, useRef, useEffect } from 'react'


const Ejemplo2 = () => {
  const [contador1, setcontador1] = useState(0)
  const [contador2, setcontador2] = useState(0)

  const miRef = useRef()

  const incrementar1 = () => {
    setcontador1(contador1 + 1)
  }
  const incrementar2 = () => {
    setcontador2(contador2 + 1)
  }

  /**
   * caso 1 ejecutar siempre un snipped de codigo
   */
  /* useEffect(() => {
     console.log('cambio de estado')
     console.log('referencia a elementos')
     console.log(miRef)
   },) 
   */
  /**
    * caso 2 ejecutar solo cuando cambie CONTADOR1
    */
  useEffect(() => {
    console.log('cambio de estado')
    console.log('referencia a elementos')
    console.log(miRef)
  }, [contador1,contador2])
  return (
    <div>
      <h1>Ejemplo de UseState, useRef y useEffect</h1>
      <h2>Contador 1: {contador1}</h2>
      <h2>COntador 2: {contador2}</h2>
      <h4 ref={miRef}>
        Ejemplo de elemento Referenciado
      </h4>
      <div>
        <button onClick={incrementar1}>
          Contador 1
        </button>
        <button onClick={incrementar2}>
          Contador 2
        </button>
      </div>
    </div>
  )
}



export default Ejemplo2