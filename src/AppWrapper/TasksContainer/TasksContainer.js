import React, { Component } from 'react';
import SingleTask from './SingleTask/SingleTask.js';
import './TasksContainer.css';


class TasksContainer extends Component {

  render() {
    const arrAfterFiltering = this.props.tasksInfo.filter === "all"
                                ? this.props.tasksInfo.listOfTasks
                                : this.props.tasksInfo.listOfTasks.filter(
                                  element => element.status === this.props.tasksInfo.filter)
    const isItems = arrAfterFiltering.length > 0;
    const resultList = [];
    for (let i=0; i < arrAfterFiltering.length; i++) {
      resultList.push(
        <li key={i.toString()}>
          <SingleTask
            taskNumber={arrAfterFiltering[i].taskNumber}
            taskName={arrAfterFiltering[i].taskName}
            taskStatus={arrAfterFiltering[i].status}
            onClick={this.props.onClick}
            onChange={this.props.onChange}
          />
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
