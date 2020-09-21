const { content, createEl } = require('./unitools.js');

const menu = require('./main/menu');
const aboutUs = require('./main/about').default;
const index = require('./main/first-serve').default;
const { removeAllChildNodes } = require('./unitools.js');

const events = () => { };
const contact = () => { };
const reservations = () => { };

const ROUTES = { index, aboutUs };

const main = (webSearch) => {
  let main = document.querySelector('main');
  if (main) {
    removeAllChildNodes(main);
  } else {
    main = content().appendChild(createEl('main'));
  }
  let child;
  if (webSearch === '' || webSearch === 'index' || webSearch === null) {
    child = index();
    document.getElementById('index').setAttribute('active', true);
  } else {
    child = ROUTES[webSearch]();
  }
  main.appendChild(child);


  document.querySelectorAll('.menu-item').forEach((menuItem) => {
    if ('menu' in menuItem.dataset) {
      const menuName = menuItem.dataset.menu;
      const routeFunction = ROUTES[menuName];

      menuItem.addEventListener('click', (e) => {
        main.replaceChild(routeFunction(), main.firstChild);
        window.history.pushState(`${menuName}`, 'Title', `?p=${menuName}`);
        document.querySelector('[active]').removeAttribute('active');
        e.target.setAttribute('active', true);
      });
    }
  });
};
export default main;
