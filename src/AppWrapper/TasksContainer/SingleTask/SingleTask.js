import React, { Component } from 'react';
//import './SingleTask.css';

function SingleTask (props) {
    return (
        <div className="container-list-single-item">
          <input type="checkbox"/>
          <label>{props.taskName}</label>
          <button className="item-button_hidden" value={props.taskNumber} onClick={props.onClick}>+</button>
        </div>
    );
}

export default SingleTask;
