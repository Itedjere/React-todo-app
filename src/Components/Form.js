import React from 'react';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    	typedTodo: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
	}

  handleChange(event) {
  	this.setState({
  		[event.target.name]: event.target.value
  	})
  }


  handleFormSubmission(event) {
    event.preventDefault();
    this.props.sendToServerUpdateTodosState(this.state.typedTodo);
    this.setState({typedTodo: ''})
  }
  
  render() {
    return (
      <React.Fragment>
      	<form className="todo-form" onSubmit={this.handleFormSubmission}>
      	    <div className="form-group">
      	        <label htmlFor="title">Enter Todo Title</label>
      	        <input 
      	            type="text" 
      	            name="typedTodo" 
      	            className="form-control" 
      	            id="title"
      	            onChange={this.handleChange}
      	            value={this.state.typedTodo}
      	        />
      	    </div>
      	    <button className="btn btn-primary">Submit</button>
      	</form>
      </React.Fragment>
    );
  }
}

export default Form