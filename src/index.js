import './styles.scss';
import header from './header';
import main from './main';


const render = (search) => {
  header();
  main(search);
};

window.onload = (e) => {
  // document.querySelector('#content').innerHTML = '';
  const webSearch = e.currentTarget.location.search === '' ? 'index'
    : e.currentTarget.location.search.slice(3);
  render(webSearch);
  // console.log(aboutUs)
  // const ROUTES = {
  //   '#home': firstServe,
  //   '#aboutUs': aboutUs
  // }

  // document.querySelectorAll('.menu-item').forEach(menuElement => {
  //   if  (menuElement){
  //     const menuName = menuElement.dataset.menu;
  //     if (menuName) {
  //       const routeFunction = new Function("return" + menuName.slice(1) + "();")
  //       menuElement.addEventListener('click', () => {
  //         // routeFunction
  //       })
  //     }
  //   })
  //   }
  // aa
};

window.onpopstate = (eve) => {
  document.querySelector('[active]').removeAttribute('active');
  if (eve.state) {
    document.getElementById(eve.state).setAttribute('active', true);
  }
  main(eve.state);
};
