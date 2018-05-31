import React, { Component } from 'react';
import SingleTask from './SingleTask/SingleTask.js';
import './TasksContainer.css';


class TasksContainer extends Component {

  render() {
    const listArr = this.props.tasksList;
    const isItems = this.props.tasksList.length > 0;
    const resultList = [];
    for (let i=0; i < listArr.length; i++) {
      resultList.push(
        <li key={i.toString()}>
          <SingleTask taskNumber={i} taskName={listArr[i].taskName}/>
        </li>
      );
    }
    return (
      <div className="container-list-whole">
        <ul>
        {isItems
          ? resultList
          : <li>
              <div className="container-list-single-item">
                <label>Nothing to do.</label>
                </div>
            </li>
        }
        </ul>
      </div>
    )
  }
}

export default TasksContainer;
