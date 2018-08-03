
export function generateUniqueId () {
  const shortid = require('shortid');

  return shortid.generate();
}
