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
        {taskName: "walk a dog", taskNumber: 0, status: "unfinished", },
        {taskName: "feed the cat", taskNumber: 1, status: "finished"},
        {taskName: "buy some vegies", taskNumber: 2, status: "unfinished"},
        {taskName: "clean the flat", taskNumber: 3, status: "finished"},
        {taskName: "wash the window", taskNumber: 4, status: "finished"},
      ],
      filter : "all"
    }
    this.handleAddTask = this.handleAddTask.bind(this)
    this.handleRemoveTask = this.handleRemoveTask.bind(this)
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
          taskNumber: this.state.listOfTasks.length || 0,
          status: "unfinished"
        };

        this.setState(prevState => ({
          listOfTasks: [...prevState.listOfTasks, task]
        }));

        document.getElementById("newTaskInput").value = '';
      }
  }

  handleRemoveTask (event) {
    const tmpArr = this.state.listOfTasks;

    if (tmpArr && tmpArr.length>0) {
      const resultArr = tmpArr.filter(
        arrItem => Number(arrItem.taskNumber) !== Number(event.target.value)
      );

      this.setState({
        listOfTasks: resultArr
      });
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
        <TasksContainer tasksInfo={this.state} onClick={this.handleRemoveTask}/>
        <TasksFooter totalTasks={this.state.listOfTasks.length} onClick={this.handleFilterTasks} filter={this.state.filter}/>
      </section>
    );
  }
}

export default TodoAppWrapper;
