/*
useReducer:
Es una alternativa al useState para manejar estados complejos que involucran muchos valores, o cuando el próximo estado depende del anterior.

*/

import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';

import './styles.css';

// init del reducer: le da el estado incial al reducer
const init = () => {

    /*     return [{
        id: new Date().getTime(),
        desc: 'Aprender React',
        done: false
    }]; */


    // JSON.parse convierte string a arreglo
    // JSON.parse(null) devuelve null
    // si existen "todos" los regreso como arreglo, sino regreso arreglo vacío
    return JSON.parse(localStorage.getItem('todos')) || [];
}


export const TodoApp = () => {

    // useReducer( funcion_reducer, initialState, funcion_inicializadora_del_state)
    // dispatch: dispara acciones hacia el reducer
    const [ todos, dispatch ] = useReducer(todoReducer, [], init);  

    // Custom Hook para manejo del formulario
    const [ { description }, handleInputChange, reset ] = useForm({
        description:''
    })

    // graba datos en el localStorage cuando los "todos" cambian
    useEffect(() => {
       
        localStorage.setItem('todos', JSON.stringify( todos ));

    }, [todos])

    //console.log( description );
    
    const handleSubmit = (e) => {
        e.preventDefault();

        // validación para que no agregue string vacío
        if ( description.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch( action );

        // limpia campo del formulario luego de enviarlo
        reset();
    }

    // actualiza "todos" cuando se elimina uno
    const handleDelete = ( todoId ) => {

        // Pasos:
        // 1. crear la accion
        // 2.hacer dispatch

        // payload = id
        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch( action );
    }

    //alterna entre completado y pendiente
    const handleToggle = (todoId) => {

        const action = {
            type: 'toggle',
            payload: todoId
        }

        dispatch( action );

    }



    return (
        <div>
            <h1>TodoApp ( { todos.length } ) </h1>
            <hr />

            <div className="row">

                <div className="col-7">

                    <ul className="list-group list-group-flush">
                        {
                            todos.map( (todo, i) => (
                                <li
                                key={ todo.id }
                                className="list-group-item"
                                >  
                                <p 
                                    className= { `${ todo.done && 'complete'}` }
                                    onClick= { () => handleToggle(todo.id) }
                                > 
                                    { i + 1 }. { todo.desc }   
                                </p>
                                <button
                                    className="btn btn-danger"
                                    onClick={ () => handleDelete(todo.id) }
                                >
                                    Borrar
                                </button>
                            </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="col-5">
                    
                    <h4>Agregar TODO</h4>
                    <hr />

                    <form onSubmit={ handleSubmit }>

                        <input 
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Aprender ..."
                            autoComplete="off"
                            value={ description }
                            onChange= { handleInputChange }
                        />

                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1 btn-block"
                        >
                            Agregar
                        </button>
                    </form>

                </div>

            </div>
        </div>
    )
}
