import React from 'react'
import { useState, useCallback } from 'react';

const Teste = () => {

    const [name, setName] = useState('Nathan')
    const [age, setAge] = useState(22)

    const handleChangeName = useCallback(() => {
        setName(prev => prev === 'Nathan' ? 'Joao' : 'Nathan')
    }, []);

    const handleChangeAge = useCallback(() => {
        const newAge = 10 * age
        console.log(age, newAge)
        setAge(prev => prev === 22 ? 32 : 22)
    }, [age]);


  return (
    <div>
        <p>
            Nome: {name} 
        </p>
        <p>
            idade: {age}
        </p>
        <button onClick={handleChangeName}>Alterar nome</button>
        <button onClick={handleChangeAge}>Alterar idade</button>
    </div>
  )
}

export { Teste } 
