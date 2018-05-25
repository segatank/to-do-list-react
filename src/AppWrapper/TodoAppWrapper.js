import React, { Component } from 'react';
import AddTaskField from './AddTaskField/AddTaskField.js';
import TasksContainer from './TasksContainer/TasksContainer.js';
import TasksFooter from './TasksFooter/TasksFooter.js';

import './TodoAppWrapper.css';


class TodoAppWrapper extends Component {
  constructor (props) {
    super(props);

    this.state = {
      listOfTasks : [
        {taskName: "walk a dog", status: "unfinished"},
        {taskName: "buy some vegies", status: "unfinished"},
        {taskName: "clean the flat", status: "unfinished"}
      ]
    }
  }

  render() {
    return (
      <section className="to-do-list_main-wrapper">
        <AddTaskField />
        <TasksContainer tasksList={this.state.listOfTasks}/>
        <TasksFooter totalTasks={this.state.listOfTasks.length}/>
      </section>
    );
  }
}

export default TodoAppWrapper;
