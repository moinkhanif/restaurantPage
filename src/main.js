const { content, createEl, createImg } = require('./unitools.js');

const main = () => {
  const main = content().appendChild(createEl('main'));
  const firstServe = main.appendChild(createEl('div'));
  firstServe.className = 'first-serve';
  const fsP = firstServe.appendChild(createEl('p'));
  fsP.innerHTML = 'A Premium <br> And <span class="title-complement">Authentic</span> Serve <br> For the likes of You';
  fsP.appendChild(createEl('br'));
  const fspButton = fsP.appendChild(createEl('button'));
  fspButton.innerHTML = 'Book A Table';

  // Picture section

  firstServe.appendChild(createImg('./img/k-food-1rs', 'png', 'Delicious Meal'));
};
export default main;