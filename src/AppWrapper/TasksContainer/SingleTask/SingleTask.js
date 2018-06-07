import React, { Component } from 'react';
//import './SingleTask.css';

const removeTask = (index) => {
  console.log(index)
}

function SingleTask (props) {
    return (
        <div className="container-list-single-item">
          <input type="checkbox"/>
          <label>{props.taskName}</label>
          <button className="item-button_hidden" onClick={props.onClick.bind(this)}>+</button>
        </div>
    );
}

export default SingleTask;
