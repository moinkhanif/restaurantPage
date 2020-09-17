const main = () => {
  const content = document.querySelector('#content');
  const main = content.appendChild(document.createElement('main'));
  const firstServe = main.appendChild(document.createElement('div'));
  firstServe.className = 'first-serve';
};
export default main;