const ut = require('./unitools.js');

const main = () => {
  const main = ut.content().appendChild(document.createElement('main'));
  const firstServe = main.appendChild(document.createElement('div'));
  firstServe.className = 'first-serve';
};
export default main;