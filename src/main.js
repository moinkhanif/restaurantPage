const { content, createEl } = require('./unitools.js');

const menu = require('./main/menu');
const aboutUs = require('./main/about').default;
const index = require('./main/first-serve').default;

const events = () => {};
const contact = () => {};
const reservations = () => {};


const main = () => {
  const main = content().appendChild(createEl('main'));
  const child = index();
  main.appendChild(child);

  document.querySelectorAll('.menu-item').forEach((menuItem) => {
    if ('menu' in menuItem.dataset) {
      const menuName = menuItem.dataset.menu.slice(1);
      const routeFunction = eval(`${menuName}`);

      menuItem.addEventListener('click', () => {
        main.replaceChild(routeFunction(), main.firstChild);
        window.history.pushState(`${menuName}`, 'Title', `?p=${menuName}`);
      });
    }
  });
  // About(main);
};
export default main;
