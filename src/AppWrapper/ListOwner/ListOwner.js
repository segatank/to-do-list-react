import React from 'react';
import './ListOwner.css';

function ListOwner (props) {
  return (
    <div>
      <h2 className="list-owner"
        onDoubleClick={(event)=>changeOwner(event)}>
        Hello, {props.listOwner}!</h2>
      <input
        id="editOwner"
        type="text"
        className="list-owner-field edit-owner-field_hidden"
        onKeyDown={props.onKeyDown.bind(this)}
        onBlur={(event)=>editModeOff()}
        />
    </div>
  );
}

function changeOwner (event) {
  if (document.getElementById("editOwner").classList.contains('edit-owner-field_hidden')) {
    document.getElementById("editOwner").classList.remove('edit-owner-field_hidden');
    const posX = (event.clientX - 80)+"px";
    document.getElementById("editOwner").style["left"] = posX;
    document.getElementById("editOwner").focus();
  }
}

function editModeOff () {
  if (!document.getElementById("editOwner").classList.contains('edit-owner-field_hidden')) {
    document.getElementById("editOwner").classList.add('edit-owner-field_hidden');
    document.getElementById("editOwner").value = '';
  }
}
//removed for now
function getRandomGreeting () {
  const greetArray = [
    "Hello", "Howdy", "Hey", "Hi", "Sup`", "Yo", "Hiya",
    "What`s up", "Good time of the day", "Greetings",
    "Salute", "Hail", "G'day"
  ];

  return greetArray[Math.round(Math.random() * (greetArray.length - 0) + 0)];
}

export default ListOwner;
