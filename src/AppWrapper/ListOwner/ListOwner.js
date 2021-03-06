import React from 'react';

import { editModeOff } from '../../constants/globalFunctions.js';

import './ListOwner.css';

const ListOwner = (props) => {
  return (
    <React.Fragment>
      <h2 className="list-owner" onDoubleClick={event => changeOwner(event)}>
        Hello, {props.listOwner}!
      </h2>
      <input
        id="editOwner"
        type="text"
        className="list-owner-field element_hidden"
        defaultValue={props.listOwner}
        onKeyDown={props.onKeyDown.bind(this)}
        onBlur={event => editModeOff(event)}
      />
    </React.Fragment>
  );
}

function changeOwner(event) {
  if (
    document.getElementById('editOwner').classList.contains('element_hidden')
  ) {
    document.getElementById('editOwner').classList.remove('element_hidden');
    const posX = event.clientX - 80 + 'px';
    document.getElementById('editOwner').style['left'] = posX;
    document.getElementById('editOwner').focus();
  }
}

export default ListOwner;
