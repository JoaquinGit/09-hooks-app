import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';

import '../styles.css';


export const FormWithCustomHook = () => {

    // onChange activa setState
    const [formState, handleInputChange] = useForm({
       name: '',
       email: '',
       password: ''
    });

    const {name, email, password} = formState;

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(formState);
    }

    useEffect(() => {
        console.log('Email cambió')
    }, [ email ])
   
    return (
        <form onSubmit= {handleSubmit}>
            <h1>FormWithCustomHook</h1>
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

            <div className="form-group">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="*****"
                    value={ password }
                    onChange={ handleInputChange }
                />
                
            </div>

            <button className="btn btn-primary" type='submit'>
                Guardar
            </button>

        </form>
    )
}
