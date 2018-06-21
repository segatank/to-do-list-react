import React from 'react';
import './AddTaskField.css';

function AddTaskField (props) {
  return (
    <div>
      <h3 className="to-do-list_header">What needs to be done:</h3>
      <input
        id="newTaskInput"
        type="text"
        className="to-do-list_input-field"
        placeholder="add new task"
        onKeyDown={props.onKeyDown.bind(this)}/>
    </div>
  );
}

export default AddTaskField;
