import React, { Component } from 'react';
import SingleTask from './SingleTask/SingleTask.js';

import './TasksContainer.css';

class TasksContainer extends Component {
  render() {
    const listArr = [
      {taskName: "walk a dog", status: "unfinished"},
      {taskName: "buy some vegies", status: "unfinished"},
      {taskName: "clean the flat", status: "unfinished"}
    ];

    const resultList = [];
    for (let i=0; i < listArr.length; i++) {
      resultList.push(
        <li key={i.toString()}>
          <div className="container-list-single-item">
            <input type="checkbox"/>
            <label>{listArr[i].taskName}</label>
            <button className="item-button_hidden" onClick={removeTask.bind(null, i)}>+</button>
          </div>
        </li>
      );
    }
    return (
      <div className="container-list-whole">
        <ul>
          {resultList}
        </ul>
      </div>
    )
  }
}

const removeTask = (index) => {
  console.log(index)
}

export default TasksContainer;
