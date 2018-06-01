import React, { Component } from 'react';
import SingleTask from './SingleTask/SingleTask.js';
import './TasksContainer.css';


class TasksContainer extends Component {

  render() {
    const arrAfterFiltering = this.props.tasksFiltered === "all"
                                ? this.props.tasksList
                                : this.props.tasksList.filter((element) => element.status === this.props.tasksFiltered)
    const isItems = arrAfterFiltering.length > 0;
    const resultList = [];
    for (let i=0; i < arrAfterFiltering.length; i++) {
      resultList.push(
        <li key={i.toString()}>
          <SingleTask taskNumber={i} taskName={arrAfterFiltering[i].taskName}/>
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
