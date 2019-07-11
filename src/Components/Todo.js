import React from 'react';

export default class Todo extends React.Component {
 
  constructor(props) {
    super(props);
  }
  render() {
  	//console.log(this.props.aSingleTodo);
  	const {title, id, completed} = this.props.aSingleTodo;
  	const completedStyle = {
  		textDecoration: 'line-through',
  		color: '#9e9999'
  	}
    return (
      	<div className="checkbox">
      	    <div className="custom-control custom-checkbox">
      	        <input 
      	            type="checkbox" 
      	            className="custom-control-input"
      	            id={`custom-control-input${id}`}
      	            checked={completed}
      	        />
      	        <label 
      	            className="custom-control-label" 
      	            htmlFor={`custom-control-input${id}`}
      	            style={completed ? completedStyle : null}
      	            onClick={this.props.handleCompletedState}
      	        >
      	            {title}
      	        </label>
      	    </div>
      	    <div className="delTodo">
      	        <button className="btn btn-danger btn-sm" onClick={this.props.deleteTodo} >Delete</button>
      	    </div>
      	</div>
    );
  }
}