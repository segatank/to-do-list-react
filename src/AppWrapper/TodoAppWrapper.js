import React, { Component } from 'react';
import AddTaskField from './AddTaskField/AddTaskField.js';
import TasksContainer from './TasksContainer/TasksContainer.js';
import TasksFooter from './TasksFooter/TasksFooter.js';

import './TodoAppWrapper.css';


class TodoAppWrapper extends Component {
  render() {
    return (
      <section className="to-do-list_main-wrapper">
        <AddTaskField />
        <TasksContainer />
        <TasksFooter />
      </section>
    );
  }
}

export default TodoAppWrapper;
