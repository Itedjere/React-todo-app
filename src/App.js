import React from 'react';
import Header from './Components/Header'
import Form from './Components/Form'
import TodoList from './Components/TodoList'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        todos: [],
      }
      this.sendToServerUpdateTodosState = this.sendToServerUpdateTodosState.bind(this);
      this.handleCompletedState = this.handleCompletedState.bind(this);
      this.deleteTodo = this.deleteTodo.bind(this);
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos/?_limit=10')
      .then(response => this.setState({todos: response.data}))
      .catch(error => console.error('Error:', error))
  }

  handleCompletedState(id) {
    console.log(id);
    this.setState(prevState => ({
        todos: prevState.todos.map(aSingleTodo => {
          if (aSingleTodo.id === id) {
            aSingleTodo.completed = !aSingleTodo.completed;
          }
          return aSingleTodo;
        })
    }))
  }

  deleteTodo(id) {
    console.log(id);
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(response => {
      this.setState({
        todos: this.state.todos.filter(aSingleTodo => aSingleTodo.id != id)
      })
    })
    .catch((error) => {
        console.log(error);
      });
  }

  sendToServerUpdateTodosState(typedTodo) {
    let newTodo = {
      title: typedTodo,
      completed: false
    };

    axios.post('https://jsonplaceholder.typicode.com/todos/', newTodo)
      .then((response) => {
        console.log(response);
        this.setState({todos: [...this.state.todos, response.data]});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render (){
    console.log(this.state.todos);
    return (
      <div className="container">
        <div className="todolist-wrapper">
          <div className="todolist-container">
            <Header />
            <Form sendToServerUpdateTodosState={this.sendToServerUpdateTodosState} />
            <TodoList 
              todos={this.state.todos}
              handleCompletedState={this.handleCompletedState}
              deleteTodo={this.deleteTodo}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
