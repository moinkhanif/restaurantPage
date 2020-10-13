module.exports = {
  content: () => document.querySelector('#content'),
  createEl: (el, ...className) => {
    const element = document.createElement(el);
    if (className.length !== 0) {
      element.classList.add(...className);
    }
    return element;
  },
  createImg: (url, format, alt = 'Anonymous Image', webp = true) => {
    const pic = document.createElement('picture');
    if (webp) {
      const srcOne = pic.appendChild(document.createElement('source'));
      srcOne.setAttribute('type', 'image/webp');
      srcOne.setAttribute('srcset', `${url}.webp`);
    }
    const srcTwo = pic.appendChild(document.createElement('source'));
    srcTwo.setAttribute('type', `image/${format}`);
    srcTwo.setAttribute('srcset', `${url}.${format}`);
    const image = pic.appendChild(document.createElement('img'));
    image.setAttribute('src', `${url}.${format}`);
    image.setAttribute('alt', alt);
    return pic;
  },
  createSection: (id) => {
    const sectionDiv = document.createElement('div');
    sectionDiv.setAttribute('id', id);
    sectionDiv.className = 'main-section';
    return sectionDiv;
  },
  removeAllChildNodes: (parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  },
  simpleInput: ({
    form, text, type = 'text', placeholder = 'Enter text',
  }) => {
    const label = form.appendChild(document.createElement('label'));
    label.innerHTML = text;
    label.appendChild(document.createElement('br'));
    const input = label.appendChild(document.createElement('input'));
    input.setAttribute('placeholder', placeholder);
    input.setAttribute('type', type);
    input.setAttribute('required', '');
    return label;
  },
};