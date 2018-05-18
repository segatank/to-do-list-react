import React, { Component } from 'react';
import './TaskBoard.css';

class TaskBoard extends Component {
  constructor (props) {
    super(props);

    this.state = {
      taskArr : [
        "walk a dog",
        "buy some vegies",
        "clean the flat"
      ]
    }

    this.handleSortList = this.handleSortList.bind(this);
  }

  handleSortList (val) {
    console.log(val)
  }

  render() {
    const isItems = this.state.taskArr.length > 0;

    return (
      <section className="to-do-list_main-wrapper">
        <h3 className="to-do-list_header">What needs to be done:</h3>
        <input type="text" className="to-do-list_input-field" placeholder="add your task"/>
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
          <input type="checkbox"/>{listArr[i]}
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
