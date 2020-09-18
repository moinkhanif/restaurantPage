module.exports = {
  content: () => document.querySelector('#content'),
  createEl: (el) => document.createElement(el),
  createImg: (url, format, alt = 'Anonymous Image') => {
    const pic = document.createElement('picture');
    const srcOne = pic.appendChild(document.createElement('source'));
    srcOne.setAttribute('type', 'image/webp');
    srcOne.setAttribute('srcset', `${url}.webp`);
    const srcTwo = pic.appendChild(document.createElement('source'));
    srcTwo.setAttribute('type', `image/${format}`);
    srcTwo.setAttribute('srcset', `${url}.${format}`);
    const image = pic.appendChild(document.createElement('img'));
    image.setAttribute('src', `${url}.webp`);
    image.setAttribute('alt', alt);
    return pic;
  },
};