import './styles.scss';
import header from './header';
import main from './main';

window.onload = () => {
  header();
  main();
};

document.querySelectorAll('.menu-item').forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    const { menu } = menuItem.dataset;
    if (menu) {
      document.querySelector(menu).scrollIntoView({
        behavior: 'smooth',
      });
    }
  });
});
