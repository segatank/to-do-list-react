import React, { Component } from 'react';
//import './SingleTask.css';

const removeTask = (index) => {
  console.log(index)
}

class SingleTask extends Component {
  render() {
    return (
        <div className="container-list-single-item">
          <input type="checkbox"/>
          <label>{this.props.taskName}</label>
          <button className="item-button_hidden" onClick={removeTask.bind(null, this.props.taskName)}>+</button>
        </div>
    );
  }
}

export default SingleTask;
