import React, { Component } from 'react';
import './AddTaskField.css';

class AddTaskField extends Component {
  render() {
    return (
      <div>
        <h3 className="to-do-list_header">What needs to be done:</h3>
        <input
          type="text"
          className="to-do-list_input-field"
          ref="inputFieldTag"
          placeholder="add your task"
          onKeyDown={this.props.onClick.bind(null, this)}/>
      </div>
    );
  }
}

export default AddTaskField;
