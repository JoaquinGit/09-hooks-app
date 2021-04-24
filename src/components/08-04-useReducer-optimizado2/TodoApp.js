/*
useReducer:
Es una alternativa al useState para manejar estados complejos que involucran muchos valores, o cuando el próximo estado depende del anterior.

*/

import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

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


    // graba datos en el localStorage cuando los "todos" cambian
    useEffect(() => {
       
        localStorage.setItem('todos', JSON.stringify( todos ));

    }, [todos])


    // Se encarga de agregar un "todo" disparando la acción 'add' y recibiendo los datos del componente <TodoAdd /> (formulario)
    const handleAddTodo = ( newTodo ) => {

        dispatch({
            type: 'add',
            payload: newTodo
        });
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

                    {/* No hace nada con los handlers más que pasárselos al hijo (aquí entra useContext) */}
                    <TodoList
                        todos={ todos }
                        handleToggle= { handleToggle }
                        handleDelete={ handleDelete }
                    />

                </div>

                <div className="col-5">
                    
                    <TodoAdd handleAddTodo={ handleAddTodo }/>

                </div>

            </div>
        </div>
    )
}
