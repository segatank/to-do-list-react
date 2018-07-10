import React from 'react';
import SingleTask from './SingleTask/SingleTask.js';
import './TasksContainer.css';


function TasksContainer (props) {

    const arrAfterFiltering = props.tasksInfo.filter === "all"
                                ? props.tasksInfo.listOfTasks
                                : props.tasksInfo.listOfTasks.filter(
                                  element => element.status === props.tasksInfo.filter)
    const isItems = arrAfterFiltering.length > 0;
    const resultList = [];
    for (let i=0; i < arrAfterFiltering.length; i++) {
      resultList.push(
        <li key={i.toString()}>
          <SingleTask
            taskNumber={arrAfterFiltering[i].taskNumber}
            taskName={arrAfterFiltering[i].taskName}
            taskStatus={arrAfterFiltering[i].status}
            onClick={props.onClick}
            onChange={props.onChange}
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

export default TasksContainer;
