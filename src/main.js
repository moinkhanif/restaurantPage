const { content, createEl } = require('./unitools.js');

const menu = require('./main/menu');
const aboutUs = require('./main/about').default;
const index = require('./main/first-serve').default;

const events = () => { };
const contact = () => { };
const reservations = () => { };

const ROUTES = { index, aboutUs };

const main = (webSearch) => {
  let main = document.querySelector('main');
  main = main ? main.replaceChild(createEl('main'), main) : content().appendChild(createEl('main'));
  const child = webSearch === '' || webSearch === 'index' ? index() : ROUTES[window.location.search.slice(3)]();
  main.appendChild(child);

  document.querySelectorAll('.menu-item').forEach((menuItem) => {
    if ('menu' in menuItem.dataset) {
      const menuName = menuItem.dataset.menu.slice(1);
      const routeFunction = ROUTES[menuName];

      menuItem.addEventListener('click', () => {
        main.replaceChild(routeFunction(), main.firstChild);
        window.history.pushState(`${menuName}`, 'Title', `?p=${menuName}`);
      });
    }
  });
};
export default main;
