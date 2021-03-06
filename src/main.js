const { content, createEl } = require('./unitools.js');

const menu = require('./main/menu').default;
const aboutUs = require('./main/about').default;
const index = require('./main/first-serve').default;
const contact = require('./main/contact').default;
const { removeAllChildNodes } = require('./unitools.js');

const ROUTES = {
  index, aboutUs, menu, contact,
};

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
        if (main.firstChild.id !== menuName) {
          main.replaceChild(routeFunction(), main.firstChild);

          window.history.pushState(`${menuName}`, 'Title', `?p=${menuName}`);
          document.querySelector('[active]').removeAttribute('active');
          e.target.setAttribute('active', true);
        }
      });
    }
  });
};
export default main;
