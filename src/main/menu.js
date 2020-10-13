import Bibimbap from '../img/menu/bibimbap.jpg';
import Japchae from '../img/menu/japchae.jpg';
import Kimchi from '../img/menu/Kimchi-Sala.jpg';
import Gimbap from '../img/menu/Vegetable_gimbap.jpg';

const { createSection, createEl, createImg } = require('../unitools.js');


const FOOD = [
  {
    name: 'Bibimbap (Rice Bowl)',
    img: Bibimbap,
    p: 'For those who find comfort in food bowls, Bibimbap will surely leave you filled and comforted.',
  },
  {
    name: 'Japchae (Stir-Fried Glass Noodles)',
    img: Japchae,
    p: 'Arguably Korea’s favourite noodle dish, Japchae is made up of glass noodles stirred in sesame oil with meat, mushrooms, and an assortment of other vegetables.',
  },
  {
    name: 'Kimchi (Spicy Fermented Vegetables)',
    img: Kimchi,
    p: 'Kimchi is the first thing that comes to our mind on the mention of Korean food. It is the best way to get familiar with the Korean Cuisine.',
  },
  {
    name: 'Kimbap/Gimbap (Korean-Style Sushi)',
    img: Gimbap,
    p: 'Gimbap or Kimbap is a popular grab-and-go Korean street food which resemble a lot like Japanese sushi rolls.',
  },
];

const menu = () => {
  const menuS = createSection('menu');
  const menuDiv = menuS.appendChild(createEl('div'));
  const menuTitle = menuDiv.appendChild(createEl('div', 'menu-header'));
  const titleContainer = menuTitle.appendChild(createEl('div', 'menu-title'));
  const t1 = titleContainer.appendChild(createEl('h4', 'title-complement'));
  t1.innerHTML = 'Discover';
  const t2 = titleContainer.appendChild(createEl('h3', 'section-title', 'title-invert'));
  t2.innerHTML = 'Our Menu';
  const menuP = menuTitle.appendChild(createEl('p', 'menu-desc'));
  menuP.innerHTML = 'Here is a Korean food list that you must should try out this year. Apart from the usual Kimchi and Korean BBQ dishes, there is much more to Korean cuisine that a foodie needs to know.';
  const menuItems = menuDiv.appendChild(createEl('div', 'menu-items'));
  FOOD.forEach((item) => {
    const { name } = item;
    const imgSrc = item.img.slice(0, -4);
    const itemDesc = item.p;
    const menuContent = menuItems.appendChild(createEl('div', 'yummy-menu-content'));
    menuContent.appendChild(createImg(imgSrc, 'jpg', name, false));
    const menuInfo = menuContent.appendChild(createEl('div', 'menu-info'));
    menuInfo.appendChild(createEl('h4', 'title-complement')).innerHTML = name;
    menuInfo.appendChild(createEl('p')).innerHTML = itemDesc;
  });


  return menuS;
};
export default menu;