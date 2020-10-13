const { createEl, createImg } = require('../unitools.js');

const firstServe = () => {
  const fs = createEl('div', 'first-serve');
  fs.id = 'index';
  const fsP = fs.appendChild(createEl('p'));
  fsP.innerHTML = 'A Premium <br> And <span class="title-complement">Authentic</span> Serve <br> For the likes of You';
  fsP.appendChild(createEl('br'));
  const fspButton = fsP.appendChild(createEl('button'));
  fspButton.innerHTML = 'Book A Table';

  // Picture section

  fs.appendChild(createImg('./img/k-food-1rs', 'png', 'Delicious Meal'));

  return fs;
};

export default firstServe;