export const ENTER_KEY = 13;
export const ESCAPE_KEY = 27;

export function generateUniqueId() {
  const shortid = require('shortid');

  return shortid.generate();
}

export function editModeOff(event) {
  const element = event.target;
  const elementId = element.id;

  if (
    !document.getElementById(elementId).classList.contains('element_hidden')
  ) {
    document.getElementById(elementId).classList.add('element_hidden');
    document.getElementById(elementId).value = '';
  }
}

export const DEFAULT_LIST_TASKS = [
  {
    taskName: 'walk a dog',
    taskNumber: generateUniqueId(),
    status: 'unfinished',
  },
  {
    taskName: 'feed the cat',
    taskNumber: generateUniqueId(),
    status: 'finished',
  },
  {
    taskName: 'buy some vegies',
    taskNumber: generateUniqueId(),
    status: 'unfinished',
  },
  {
    taskName: 'clean the flat',
    taskNumber: generateUniqueId(),
    status: 'finished',
  },
  {
    taskName: 'wash the window',
    taskNumber: generateUniqueId(),
    status: 'finished',
  },
];

//removed for now
function getRandomGreeting() {
  const greetArray = [
    'Hello',
    'Howdy',
    'Hey',
    'Hi',
    'Sup`',
    'Yo',
    'Hiya',
    'What`s up',
    'Good time of the day',
    'Greetings',
    'Salute',
    'Hail',
    "G'day",
  ];

  return greetArray[Math.round(Math.random() * (greetArray.length - 0) + 0)];
}
