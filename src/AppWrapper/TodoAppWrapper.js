import React, { Component } from 'react';
import ListOwner from './ListOwner/ListOwner.js';
import AddTaskField from './AddTaskField/AddTaskField.js';
import TasksContainer from './TasksContainer/TasksContainer.js';
import TasksFooter from './TasksFooter/TasksFooter.js';

import './TodoAppWrapper.css';

const dummyValues = [
  {taskName: "walk a dog", taskNumber: generateUniqueId(), status: "unfinished"},
  {taskName: "feed the cat", taskNumber: generateUniqueId(), status: "finished"},
  {taskName: "buy some vegies", taskNumber: generateUniqueId(), status: "unfinished"},
  {taskName: "clean the flat", taskNumber: generateUniqueId(), status: "finished"},
  {taskName: "wash the window", taskNumber: generateUniqueId(), status: "finished"},
];

class TodoAppWrapper extends Component {
  constructor (props) {
    super(props);

    this.state = {
      listOfTasks : [],
      filter  : "all",
      listOwner : "anon"
    }

    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleRemoveTask = this.handleRemoveTask.bind(this);
    this.handleModifyTaskStatus = this.handleModifyTaskStatus.bind(this);
    this.handleFilterTasks = this.handleFilterTasks.bind(this);
    this.handleSetOwnersName = this.handleSetOwnersName.bind(this);
  }

  componentWillMount () {
    //it is possible to move this code straight to constructor
    localStorage.getItem('listOfTasks') ? this.setState({
      listOfTasks: JSON.parse(localStorage.getItem('listOfTasks'))
    }) : this.setState({
      listOfTasks: dummyValues
    });
    localStorage.getItem('filter') ? this.setState({
      filter: JSON.parse(localStorage.getItem('filter'))
    }) : this.setState({
      filter: "all"
    })
  }

  componentDidMount () {
    window.addEventListener('beforeunload', this.saveTasksToLocStorage.bind(this));
  }

  componentWillUnmount () {
    window.removeEventListener('beforeunload', this.saveTasksToLocStorage.bind(this));
  }

  saveTasksToLocStorage (event) {
    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  handleSetOwnersName (event) {
    const ENTER_KEY = 13;

    if (event.keyCode !== ENTER_KEY) {
      return;
    }

    if (event.target.value.length > 0) {
      event.preventDefault();

      this.setState({
        listOwner: event.target.value
      });
    }
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
          taskNumber: generateUniqueId(),
          status: "unfinished"
        };

        this.setState(prevState => ({
          listOfTasks: [...prevState.listOfTasks, task]
        }));

        document.getElementById("newTaskInput").value = '';
      }
  }

  handleRemoveTask (event) {
    if (this.state.listOfTasks && this.state.listOfTasks.length > 0) {
      const resultArr = this.state.listOfTasks.filter(
        arrItem => arrItem.taskNumber !== event.target.value
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

  handleModifyTaskStatus (event) {
    const newArr = this.state.listOfTasks.map (function (arrItem) {
        if (arrItem.taskNumber === event.target.value) {
          arrItem.status === "finished" ?
            arrItem.status = "unfinished" :
            arrItem.status = "finished";
        }
        return arrItem;
    });
    this.setState({
      listOfTasks: newArr
    });
  }


  render() {
    return (
      <section className="to-do-list_main-wrapper">
        <ListOwner
          listOwner={this.state.listOwner}
          onKeyDown={this.handleSetOwnersName}
        />
        <AddTaskField
          onKeyDown={this.handleAddTask}
        />
        <TasksContainer
          tasksInfo={this.state}
          onClick={this.handleRemoveTask}
          onChange={this.handleModifyTaskStatus}
        />
        <TasksFooter
          totalTasks={this.state.listOfTasks.length}
          onClick={this.handleFilterTasks}
          filter={this.state.filter}
        />
      </section>
    );
  }
}

function generateUniqueId () {
  let shortid = require('shortid');

  return shortid.generate();
}

export default TodoAppWrapper;
