import React from 'react';
import './TasksFooter.css';

function TasksFooter(props) {
  return (
    <div name="container-footer">
        <span>Tasks </span>
        <span>to do: </span>
        <span>{props.totalTasks} </span>
        <input type="radio" name="sortTasks" id="all" onClick={props.onClick.bind(this)}/>
          <label htmlFor="all">All</label>
        <input type="radio" name="sortTasks" id="unfinished" onClick={props.onClick.bind(this)}/>
          <label htmlFor="unfinished">Unfinished</label>
        <input type="radio" name="sortTasks" id="finished" onClick={props.onClick.bind(this)}/>
          <label htmlFor="finished">Finished</label>
    </div>
  );
}

export default TasksFooter;
