import React, { Component } from 'react';
import './TaskBoard.css';

const ENTER_KEY = 13;

class TaskBoard extends Component {
  constructor (props) {
    super(props);

    this.state = {
      taskArr : [
        {taskName: "walk a dog", status: "unfinished"},
        {taskName: "buy some vegies", status: "unfinished"},
        {taskName: "clean the flat", status: "unfinished"}
      ]
    }

    this.handleSortList = this.handleSortList.bind(this);
    this.handleAddNewTask = this.handleAddNewTask.bind(this);
    this.handleRemoveTask = this.handleRemoveTask.bind(this);
  }

  handleAddNewTask (event) {
    if (event.keyCode !== ENTER_KEY) {
      return;
    }

    event.preventDefault();

    const task = {
      taskName: event.target.value,
      status: "unfinished"
    };

    this.setState(prevState => ({
      taskArr: [...prevState.taskArr, task]
    }));

    this.refs.inputFieldTag.value = '';
  }

  handleRemoveTask (event) {

  }

  handleSortList (val) {
    //console.log(val)
  }

  render() {
    const isItems = this.state.taskArr.length > 0;

    return (
      <section className="to-do-list_main-wrapper">
        <h3 className="to-do-list_header">What needs to be done:</h3>
        <input
          type="text"
          className="to-do-list_input-field"
          ref="inputFieldTag"
          placeholder="add your task"
          onKeyDown={this.handleAddNewTask}/>
        <section>
        {isItems
          ? <DisplayAllItems listItems={this.state.taskArr} />
          : <div>"Nothing to do."</div>}
        </section>
        <div name="container-footer">
            <span>Tasks </span>
            <span>to do: </span>
            <span>{this.state.taskArr.length} </span>
            <input type="radio" name="sortTasks" id="all" onChange={this.handleSortList("all")} />
              <label htmlFor="all">All</label>
            <input type="radio" name="sortTasks" id="unfinished"/>
              <label htmlFor="unfinished">Unfinished</label>
            <input type="radio" name="sortTasks" id="finished"/>
              <label htmlFor="finished">Finished</label>
        </div>
      </section>
    );
  }
}

function DisplayAllItems (props) {
  const listArr = props.listItems;

  const resultList = [];
  for (let i=0; i < listArr.length; i++) {
    resultList.push(
      <li key={i.toString()}>
        <div className="container-list-single-item">
          <input type="checkbox"/>{listArr[i].taskName}
        </div>
      </li>
    );
  }
  return (
    <div className="container-list-whole">
      <ul>
        {resultList}
      </ul>
    </div>
  )
}

export default TaskBoard;
