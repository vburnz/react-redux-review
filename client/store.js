import thunkMiddleware from 'redux-thunk'
import { createStore , applyMiddleware} from 'redux'
import axios from 'axios'


//ACTION TYPES
const ADD_TODO = 'ADD_TODO'; 

//ACTION CREATORS 

export const addedTodo = todo => ({ 
    type: ADD_TODO, 
    todo
})

//THUNK CREATORS 
export const addTodo = todo => async dispatch => { 
    const res = await axios.post('/api/todos', todo); 
    dispatch(addedTodo(res.data)); 
}



//REDUCER

const initialState = { 
    todos: []
}

const reducer = (state = initialState, action) => { 
    switch(action.type){ 
        case ADD_TODO: 
            return {...state, todos:[...state.todos, action.todo]}
        default: 
            return state; 
    }
        
}

export default createStore(reducer, applyMiddleware(thunkMiddleware))