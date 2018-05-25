import React, { Component } from 'react';
import SingleTask from './SingleTask/SingleTask.js';
import './TasksContainer.css';


class TasksContainer extends Component {
  constructor (props) {
    super(props);

    this.state = {
      listOfTasks : this.props.tasksList
    }
  }

  render() {
    const listArr = this.state.listOfTasks;
    const isItems = this.state.listOfTasks.length > 0;
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
