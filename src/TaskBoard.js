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
  }
  render() {
    const isItems = this.state.taskArr.length > 0;

    return (
      <section>
        <h3>What needs to be done:</h3>
        <input type="text"/>
        <section>
        {isItems
          ? <DisplayAllItems listItems={this.state.taskArr} />
          : <div>"Nothing to do."</div>}
        </section>
        <div>
          <input type="radio" name="sortTasks" id="all"/>
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
        <div>
          <input type="checkbox"/>{listArr[i]}
        </div>
      </li>
    );
  }
  return (
    <div>
      <ul>
        {resultList}
      </ul>
    </div>
  )
}

export default TaskBoard;
