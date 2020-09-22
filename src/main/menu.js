import Bibimbap from '../img/menu/bibimbap.jpg';

const { createSection, createEl, createImg } = require('../unitools.js');


const FOOD = [
  {
    name: 'Bibimbap (Rice Bowl)',
    img: Bibimbap,
    p: `For those who find comfort in food bowls, Bibimbap will surely leave you filled and comforted. Bibimbap is a tasty mixture of rice, vegetables, beef, gochujang (hot chili paste), and a fried egg seasoned with soy sauce and sesame seeds.
    Bibimbap was created as a Royaldish in yesteryears but slowly it became the favorite staple lunch meal among the Korean dishes.`,
  },
];

const menu = () => {
  // console.log(Bibimbap.slice(0, -4))
  const menuS = createSection('menu');
  const menuTitle = menuS.appendChild(createEl('div', 'menu-title'));
  const titleContainer = menuTitle.appendChild(createEl('div'));
  const t1 = titleContainer.appendChild(createEl('h4', 'title-complement'));
  t1.innerHTML = 'Discover';
  const t2 = titleContainer.appendChild(createEl('h3', 'section-title', 'title-invert'));
  t2.innerHTML = 'OurMenu';
  const menuP = menuTitle.appendChild(createEl('p'));
  menuP.innerHTML = 'Here is a Korean food list that you must should try out this year. Apart from the usual Kimchi and Korean BBQ dishes, there is much more to Korean cuisine that a foodie needs to know.';
  FOOD.forEach((item) => {
    const { name } = item;
    const imgSrc = item.img.slice(0, -4);
    const imgdesc = item.p;
    const menuContent = menuTitle.appendChild(createEl('div', 'yummy-menu-content'));
    menuContent.appendChild(createImg(imgSrc, 'jpg', name, false));
  });


  return menuS;
};
export default menu;