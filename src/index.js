import './styles.scss';
import header from './header';
import main from './main';

const { removeAllChildNodes } = require('./unitools.js');


const render = (search) => {
  removeAllChildNodes(document.querySelector('#content'));
  header();
  main(search);
};

window.onload = (e) => {
  // document.querySelector('#content').innerHTML = '';
  const webSearch = e.currentTarget.location.search.slice(3);
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
  render(eve.state);
  // console.log(typeof eve.state);
};
