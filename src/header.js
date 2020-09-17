const header = () => {
  const content = document.querySelector('#content');
  const header = document.createElement('header');

  // Create Logo

  const logoDiv = document.createElement('div');
  logoDiv.setAttribute('class', 'logo');
  const logoLink = logoDiv.appendChild(document.createElement('a'));
  logoLink.setAttribute('href', './');
  logoLink.innerHTML = 'Centurion';

  // Create Nav

  const nav = document.createElement('nav');
  const navUl = nav.appendChild(document.createElement('ul'));
  const makeLi = (liDataMenu, liText) => {
    const li = navUl.appendChild(document.createElement('li'));
    const liLink = li.appendChild(document.createElement('a'));
    liLink.className = 'menu-item';
    if (liDataMenu === 'home') {
      liLink.setAttribute('href', './');
    } else if (liDataMenu === 'en') {
      liLink.setAttribute('href', '#');
    } else {
      liLink.setAttribute('data-menu', liDataMenu);
    }
    liLink.innerHTML = liText;
  };
  makeLi('home', 'Home');
  makeLi('#about-us', 'About Us');
  makeLi('#menu', 'Menu');
  makeLi('#events', 'Events');
  makeLi('#contact', 'Contact');
  makeLi('#reservations', 'Reservations');
  makeLi('en', 'EN▼');

  header.appendChild(logoDiv);
  header.appendChild(nav);
  content.appendChild(header);
};
export default header;