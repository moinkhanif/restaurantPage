const { content, createEl } = require('./unitools.js');

const menu = require('./main/menu');
const aboutUs = require('./main/about').default;
const firstServe = require('./main/first-serve').default;

const events = () => {};
const contact = () => {};
const reservations = () => {};

const main = () => {
  const main = content().appendChild(createEl('main'));
  const child = firstServe();
  main.appendChild(child);

  document.querySelectorAll('.menu-item').forEach((menuItem) => {
    if ('menu' in menuItem.dataset) {
      const menuName = menuItem.dataset.menu.slice(1);
      const routeFunction = eval(`${menuName}`);

      menuItem.addEventListener('click', () => {
        main.replaceChild(routeFunction(), main.firstChild);
      });
    }
  });
  // About(main);
};
export default main;
