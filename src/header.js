const { content, createEl } = require('./unitools.js');

const header = () => {
  const header = createEl('header');

  // Create Logo

  const logoDiv = createEl('div', 'logo');
  const logoLink = logoDiv.appendChild(createEl('a'));
  logoLink.setAttribute('href', './');
  logoLink.innerHTML = 'Centurion';

  // Create Nav

  const nav = createEl('nav');
  const navUl = nav.appendChild(createEl('ul'));

  const makeLi = (liDataMenu, liText) => {
    const li = navUl.appendChild(createEl('li'));
    const liLink = li.appendChild(createEl('a', 'menu-item'));
    if (liDataMenu === 'en') {
      liLink.setAttribute('href', '#');
    } else {
      liLink.setAttribute('data-menu', liDataMenu);
      liLink.id = liDataMenu;
    }
    liLink.innerHTML = liText;
  };

  makeLi('index', 'Home');
  makeLi('aboutUs', 'About Us');
  makeLi('menu', 'Menu');
  makeLi('events', 'Events');
  makeLi('contact', 'Contact');
  makeLi('reservations', 'Reservations');
  makeLi('en', 'EN▼');

  header.appendChild(logoDiv);
  header.appendChild(nav);
  content().appendChild(header);
};
export default header;