import './styles.scss';
import header from './header';
import main from './main';


const render = (search) => {
  header();
  main(search);
};

window.onload = (e) => {
  const webSearch = e.currentTarget.location.search === '' ? 'index'
    : e.currentTarget.location.search.slice(3);
  render(webSearch);
  document.getElementById(webSearch).setAttribute('active', true);
};

window.onpopstate = (eve) => {
  document.querySelector('[active]').removeAttribute('active');
  if (eve.state) {
    document.getElementById(eve.state).setAttribute('active', true);
  }
  main(eve.state);
};
