const { createSection, createEl, createImg } = require('../unitools.js');

const about = (main) => {
  const aboutUs = main.appendChild(createSection('about-us'));
  aboutUs.classList.add('our-story');
  const aboutArticle = aboutUs.appendChild(createEl('article'));
  aboutArticle.appendChild(createImg('./img/bibimbap', 'jpg', 'bibimbap'));
  const sectionInfo = aboutArticle.appendChild(createEl('div', 'section-info'));
  sectionInfo.appendChild(createEl('h4', 'title-complement'))
    .innerHTML = 'Discover';
  sectionInfo.appendChild(createEl('h3', 'section-title'))
    .innerHTML = 'Our Story';
  sectionInfo.appendChild(createEl('p'))
    .innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias commodi architecto repellendus consectetur provident quos recusandae fuga tenetur? Veniam amet magni sequi itaque ut reprehenderit voluptatum cupiditate, ipsa eos quo!';
  const sectionA = sectionInfo.appendChild(createEl('a', 'story-more'));
  sectionA.setAttribute('href', '#');
  sectionA.innerHTML = 'More About Us &nbsp; &#8594;';

  return aboutUs;
};

export default about;