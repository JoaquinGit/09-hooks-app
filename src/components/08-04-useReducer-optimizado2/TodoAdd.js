/*
Componente que maneja el formulario
*/


import React from 'react';
import { useForm } from '../../hooks/useForm'

export const TodoAdd = ( { handleAddTodo } ) => {

    // Custom Hook para manejo del formulario
    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        // validación para que no agregue string vacío
        if ( description.trim().length <= 1) {
            return;
        }

        // crea "todo" nuevo
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        // envía al padre datos para que cargue la acción en el reducer mediante el dispatcher
        handleAddTodo(newTodo);

        // limpia campo del formulario luego de enviarlo
        reset();
    }

    return (

        <>
            <h4>Agregar TODO</h4>
            <hr />

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Aprender ..."
                    autoComplete="off"
                    value={description}
                    onChange={handleInputChange}
                />

                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1 btn-block"
                >
                    Agregar
                </button>

            </form>


        </>
    )
}
