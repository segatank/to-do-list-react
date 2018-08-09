import React from 'react';
import './ListOwner.css';
import { editModeOff } from '../../globalFunctions.js';

function ListOwner (props) {
  return (
    <div>
      <h2 className="list-owner"
        onDoubleClick={(event) => changeOwner(event)}>
        Hello, {props.listOwner}!</h2>
      <input
        id="editOwner"
        type="text"
        className="list-owner-field element_hidden"
        defaultValue={props.listOwner}
        onKeyDown={props.onKeyDown.bind(this)}
        onBlur={(event) => editModeOff(event)}
      />
    </div>
  );
}

function changeOwner (event) {
  if (document.getElementById("editOwner").classList.contains('element_hidden')) {
    document.getElementById("editOwner").classList.remove('element_hidden');
    const posX = (event.clientX - 80)+"px";
    document.getElementById("editOwner").style["left"] = posX;
    document.getElementById("editOwner").focus();
  }
}

export default ListOwner;
