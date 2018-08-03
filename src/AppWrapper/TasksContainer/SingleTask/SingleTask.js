import React from 'react';
import './SingleTask.css';

function SingleTask (props) {
    return (
        <div
          className="container-list-single-item"
          >
          <input
            type="checkbox"
            onChange={props.onChange}
            value={props.taskNumber}
            defaultChecked={props.taskStatus === "finished" ? true : false}
          />
          <label className={
              props.taskStatus === "finished" ? "to-do-list-completed" : ""
            }
            onDoubleClick={(event) => editTasksContent(event)}>
            {props.taskName}
          </label>
          <input
            className="item-input_edit element_hidden"
            type="text"
            defaultValue={props.taskName}
            onKeyDown={props.onKeyDown}/>
          <button className="item-button_hidden" value={props.taskNumber} onClick={props.onClick}>X</button>
        </div>
    );
}

function editTasksContent(event) {
  console.log(event.target)
}

export default SingleTask;
