import './styles.scss';

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
console.log("It's exciting to start a new restaurant!");
