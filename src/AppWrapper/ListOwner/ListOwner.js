import React from 'react';
import './ListOwner.css';

function ListOwner (props) {
  return (
    <div>
      <h2 className="list-owner">{getRandomGreeting()}, {props.listOwner}!</h2>
      <input
        id="editOwner"
        type="text"
        className="list-owner_edit-field"
        onKeyDown={props.onKeyDown.bind(this)}
        />
    </div>
  );
}

function getRandomGreeting () {
  const greetArray = [
    "Hello", "Howdy", "Hey", "Hi", "Sup`", "Yo", "Hiya",
    "What`s up", "Good time of the day", "Greetings",
    "Salute", "Hail", "G'day"
  ];

  return greetArray[Math.round(Math.random() * (greetArray.length - 0) + 0)];
}

export default ListOwner;
