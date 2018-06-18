import React from 'react';
import './SingleTask.css';

function SingleTask (props) {
    return (
        <div className="container-list-single-item">
          <input
            type="checkbox"
            onChange={props.onChange}
            value={props.taskNumber}
            defaultChecked={props.taskStatus === "finished" ? true : false}
          />
          <label className={
              props.taskStatus === "finished" ? "to-do-list-completed" : ""
            }>{props.taskName}</label>
          <button className="item-button_hidden" value={props.taskNumber} onClick={props.onClick}>X</button>
        </div>
    );
}

export default SingleTask;
