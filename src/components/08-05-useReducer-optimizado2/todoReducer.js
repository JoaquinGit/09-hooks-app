/*
Maneja las acciones posibles del Hook useReducer.
*/
export const todoReducer = ( state = [], action ) => {

    switch ( action.type ) {
        case 'add':
            return [ ...state, action.payload ];

        case 'delete':
            // devuelve array quitando los resultados que cumplen la condición
            return state.filter( todo => todo.id !== action.payload );  

        case 'toggle':

         /*    return state.map( todo => {
                
                // si son id es igual alterna el done, sino devuelve el id sin modificar
                if ( todo.id === action.payload ) {
                    return {
                        ...todo,
                        done: !todo.done
                    }    
                } else {    // es necesario para que map no transforme el todo en undefined
                    
                    return todo;
                }
            }) */

            // forma simplificada con operador ternario
            return state.map( todo => 
                ( todo.id === action.payload )
                    ? { ...todo, done: !todo.done }
                    : todo
            );

        default:
            return state;
    }


}