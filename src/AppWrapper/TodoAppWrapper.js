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
        {taskName: "feed the cat", status: "finished"},
        {taskName: "buy some vegies", status: "unfinished"},
        {taskName: "clean the flat", status: "finished"},
        {taskName: "wash the window", status: "finished"},
      ],
      filter : "all"
    }
    this.handleAddTask = this.handleAddTask.bind(this)
    this.handleFilterTasks = this.handleFilterTasks.bind(this)
  }

  handleAddTask (event) {
      const ENTER_KEY = 13;

      if (event.keyCode !== ENTER_KEY) {
        return;
      }

      if (event.target.value.length > 0) {
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
  }

  handleFilterTasks (event) {
    this.setState({
      filter: event.target.id
    });
  }

  render() {
    return (
      <section className="to-do-list_main-wrapper">
        <AddTaskField onClick={this.handleAddTask} />
        <TasksContainer tasksList={this.state.listOfTasks} tasksFiltered={this.state.filter}/>
        <TasksFooter totalTasks={this.state.listOfTasks.length} onClick={this.handleFilterTasks} filter={this.state.filter}/>
      </section>
    );
  }
}

export default TodoAppWrapper;
