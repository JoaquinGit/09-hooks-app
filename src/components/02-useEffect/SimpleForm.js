/*
useEffect controla el renderizado.
Permite que determinado código se ejecute únicamente:
    - En el primer renderizado, o
    - cuando cambia determinado elemento, o
    - cuando se desmonta un componente.
*/


import React, {useEffect, useState} from 'react';
import { Message } from './Message';

import '../styles.css';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
       name: '',
       email: '' 
    });

    const {name, email} = formState;

    // [] = Ejecuta solo en el primer renderizado
    useEffect(() => {
        console.log('hey')
    }, []);

    useEffect(() => {
        console.log('formState cambió')
    }, [formState]);

    useEffect(() => {
        console.log('email cambió')
    }, [email]);

    const handleInputChange = ( {target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value,
        })
    }
   
    return (

        <>
            <h1>useEffect</h1>
            <hr/>

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
                
            </div>
            
            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
                
            </div>

            {name === '123' && <Message />}
        </>
    )
}
