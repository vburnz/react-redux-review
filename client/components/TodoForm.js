import React from 'react'; 
import {addTodo} from '../store'
import {connect} from 'react-redux'

class TodoForm extends React.Component { 
    constructor(props){ 
        super(props); 
        this.state = {  
            input : ''
        }
    }

    render(){ 
        <div>
            <ul>
                {this.props.todos.map(todo => <li key={todo.id}>{todo.content}</li>)}
            </ul>
            <form>
                <input
                    type="text"
                    value={this.state.input}
                    onChange={event => this.setState({input: event.target.value})}
                ></input>
                <button onClick= { () => { 
                    this.props.add(this.state.input); 
                    this.setState({input: ''})
                }}> Sumbit
                </button>
            </form>
        </div>

    }
}

const mapStateToProps = state => { 
    return { 
        todos: state.todos
    }
}

const mapDispatchToProps = dispatch => { 
    return { 
        add: (todo) => dispatch(addTodo(todo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm); 