import './styles.scss';
import header from './header';

window.onload = () => {
  header();
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
