import React, { PureComponent } from 'react';

import ListOwner from './ListOwner/ListOwner.js';
import AddTaskField from './AddTaskField/AddTaskField.js';
import TasksContainer from './TasksContainer/TasksContainer.js';
import TasksFooter from './TasksFooter/TasksFooter.js';
import {
  ENTER_KEY,
  ESCAPE_KEY,
  DEFAULT_LIST_TASKS,
  generateUniqueId
} from '../constants/globalFunctions.js';

import './TodoAppWrapper.css';


class TodoAppWrapper extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      listOfTasks: [],
      filter: 'all',
      listOwner: '',
    };

    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleRemoveTask = this.handleRemoveTask.bind(this);
    this.handleModifyTaskStatus = this.handleModifyTaskStatus.bind(this);
    this.handleModifyTask = this.handleModifyTask.bind(this);
    this.handleFilterTasks = this.handleFilterTasks.bind(this);
    this.handleSetOwnersName = this.handleSetOwnersName.bind(this);
  }

  componentWillMount() {
    //it is possible to move this code straight to constructor
    localStorage.getItem('listOfTasks')
      ? this.setState({
          listOfTasks: JSON.parse(localStorage.getItem('listOfTasks')),
        })
      : this.setState({
          listOfTasks: DEFAULT_LIST_TASKS,
        });
    localStorage.getItem('filter')
      ? this.setState({
          filter: JSON.parse(localStorage.getItem('filter')),
        })
      : this.setState({
          filter: 'all',
        });
    localStorage.getItem('listOwner')
      ? this.setState({
          listOwner: JSON.parse(localStorage.getItem('listOwner')),
        })
      : this.setState({
          listOwner: 'anon',
        });
  }

  componentDidMount() {
    window.addEventListener(
      'beforeunload',
      this.saveAllToLocStorage.bind(this)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      'beforeunload',
      this.saveAllToLocStorage.bind(this)
    );
  }

  saveAllToLocStorage() {
    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  handleSetOwnersName(event) {
    if (event.keyCode === ESCAPE_KEY) {
      document.getElementById(event.target.id).value = '';
      document.getElementById(event.target.id).classList.add('element_hidden');
      return;
    }

    if (event.keyCode !== ENTER_KEY) {
      return;
    }

    if (event.target.value.length > 0) {
      event.preventDefault();

      this.setState({
        listOwner: event.target.value,
      });

      event.target.value = '';
      event.target.classList.add('element_hidden');
    }
  }

  handleAddTask(event) {
    if (event.keyCode !== ENTER_KEY) {
      return;
    }

    if (event.target.value.length > 0) {
      const task = {
        taskName: event.target.value,
        taskNumber: generateUniqueId(),
        status: 'unfinished',
      };

      this.setState(prevState => ({
        listOfTasks: [...prevState.listOfTasks, task],
      }));

      document.getElementById('newTaskInput').value = '';
    }
  }

  handleRemoveTask(event) {
    if (this.state.listOfTasks && this.state.listOfTasks.length > 0) {
      const resultArr = this.state.listOfTasks.filter(
        arrItem => arrItem.taskNumber !== event.target.value
      );

      this.setState({
        listOfTasks: resultArr,
      });
    }
  }

  handleFilterTasks(event) {
    this.setState({
      filter: event.target.id,
    });
  }

  handleModifyTaskStatus(event) {
    const newArr = this.state.listOfTasks.map(function(arrItem) {
      if (arrItem.taskNumber === event.target.value) {
        arrItem.status === 'finished'
          ? (arrItem.status = 'unfinished')
          : (arrItem.status = 'finished');
      }
      return arrItem;
    });
    this.setState({
      listOfTasks: newArr,
    });
  }

  handleModifyTask(event) {
    if (event.keyCode === ESCAPE_KEY) {
      document.getElementById(event.target.id).classList.add('element_hidden');
      const labelsArr = document.getElementsByTagName('label');

      for (let i = 0; i < labelsArr.length; i++) {
        if (labelsArr[i].htmlFor === event.target.id) {
          document.getElementsByTagName('label')[i]
                  .classList.remove('element_hidden');
        }
      }

      return;
    }

    if (event.keyCode !== ENTER_KEY) {
      return;
    }

    if (event.target.value.length > 0) {
      const newArr = this.state.listOfTasks.map(function(arrItem) {
        if (arrItem.taskNumber === event.target.id) {
          arrItem.taskName = event.target.value;
        }
        return arrItem;
      });
      this.setState({
        listOfTasks: newArr,
      });
    }
  }

  render() {
    return (
      <section className="to-do-list_main-wrapper">
        <ListOwner
          listOwner={this.state.listOwner}
          onKeyDown={this.handleSetOwnersName}
        />
        <AddTaskField onKeyDown={this.handleAddTask} />
        <TasksContainer
          tasksInfo={this.state}
          onClick={this.handleRemoveTask}
          onChange={this.handleModifyTaskStatus}
          onKeyDown={this.handleModifyTask}
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

export default TodoAppWrapper;
