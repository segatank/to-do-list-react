import React from 'react';

import { editModeOff } from '../../../constants/globalFunctions.js';

import './SingleTask.css';

const SingleTask = (props) => {
  return (
    <div className="container-list-single-item">
      <input
        type="checkbox"
        onChange={props.onChange}
        value={props.taskNumber}
        defaultChecked={props.taskStatus === 'finished' ? true : false}
      />
      <label
        htmlFor={props.taskNumber}
        className={
          props.taskStatus === 'finished' ? 'to-do-list-completed' : ''
        }
        onDoubleClick={event => editTasksContent(event)}
      >
        {props.taskName}
      </label>
      <input
        id={props.taskNumber}
        className="item-input_edit element_hidden"
        type="text"
        defaultValue={props.taskName}
        onKeyDown={props.onKeyDown}
        onBlur={event => editModeOff(event)}
      />
      <button
        className="item-button_hidden"
        value={props.taskNumber}
        onClick={props.onClick}
      >-
      </button>
    </div>
  );
}

function editTasksContent(event) {
  const labelElem = event.target;
  const inputId = labelElem.htmlFor;

  if (document.getElementById(inputId).classList.contains('element_hidden')) {
    labelElem.classList.add('element_hidden');
    document.getElementById(inputId).classList.remove('element_hidden');
    document.getElementById(inputId).focus();
  }
}

export default SingleTask;
