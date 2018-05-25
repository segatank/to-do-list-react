import React, { Component } from 'react';
import './TasksFooter.css';

class TasksFooter extends Component {
  render() {
    return (
      <div name="container-footer">
          <span>Tasks </span>
          <span>to do: </span>
          <span>{this.props.totalTasks} </span>
          <input type="radio" name="sortTasks" id="all" />
            <label htmlFor="all">All</label>
          <input type="radio" name="sortTasks" id="unfinished"/>
            <label htmlFor="unfinished">Unfinished</label>
          <input type="radio" name="sortTasks" id="finished"/>
            <label htmlFor="finished">Finished</label>
      </div>
    );
  }
}

export default TasksFooter;
