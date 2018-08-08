
export const ENTER_KEY = 13;
export const ESCAPE_KEY = 27;

export function generateUniqueId () {
  const shortid = require('shortid');

  return shortid.generate();
}

export function editModeOff (event) {
  const element = event.target;
  const elementId = element.id;

  if (!document.getElementById(elementId).classList.contains('element_hidden')) {
    document.getElementById(elementId).classList.add('element_hidden');
    document.getElementById(elementId).value = '';
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
