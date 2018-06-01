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
    this.handleAddTask = this.handleAddTask.bind(this)
  }

  handleAddTask (component, event) {
      const ENTER_KEY = 13;

      if (event.keyCode !== ENTER_KEY) {
        return;
      }

      event.preventDefault();

      const task = {
        taskName: event.target.value,
        status: "unfinished"
      };

      this.setState(prevState => ({
        listOfTasks: [...prevState.listOfTasks, task]
      }));

      document.getElementById("newTaskInput").value = '';
  }

  render() {
    return (
      <section className="to-do-list_main-wrapper">
        <AddTaskField onClick={this.handleAddTask} />
        <TasksContainer tasksList={this.state.listOfTasks} />
        <TasksFooter totalTasks={this.state.listOfTasks.length} />
      </section>
    );
  }
}

export default TodoAppWrapper;
