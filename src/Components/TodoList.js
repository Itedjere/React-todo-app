import React from 'react';
import Todo from './Todo.js'

class TodoList extends React.Component {

  constructor(props) {
    super(props);
    //this.privateHandleCompletedState = this.privateHandleCompletedState.bind(this);
  }

  

  render() {
    let todosList = this.props.todos.map(aSingleTodo => 
        <Todo 
        aSingleTodo={aSingleTodo} 
        key={aSingleTodo.id} 
        handleCompletedState={() => this.props.handleCompletedState(aSingleTodo.id)}
        deleteTodo={() => this.props.deleteTodo(aSingleTodo.id)}
        /> );
    return (
          <div className="todolist">
            {todosList}
          </div>
    );
  }
}

export default TodoList