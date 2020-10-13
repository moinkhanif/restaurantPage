(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/main/about.js":
/*!***************************!*\
  !*** ./src/main/about.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst { createSection, createEl, createImg } = __webpack_require__(/*! ../unitools.js */ \"./src/unitools.js\");\n\nconst about = () => {\n  const aboutUs = createSection('about-us');\n  // console.log(aboutUs);\n  aboutUs.classList.add('our-story');\n  const aboutArticle = aboutUs.appendChild(createEl('article'));\n  aboutArticle.appendChild(createImg('./img/bibimbap', 'jpg', 'bibimbap'));\n  const sectionInfo = aboutArticle.appendChild(createEl('div', 'section-info'));\n  sectionInfo.appendChild(createEl('h4', 'title-complement'))\n    .innerHTML = 'Discover';\n  sectionInfo.appendChild(createEl('h3', 'section-title'))\n    .innerHTML = 'Our Story';\n  sectionInfo.appendChild(createEl('p'))\n    .innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias commodi architecto repellendus consectetur provident quos recusandae fuga tenetur? Veniam amet magni sequi itaque ut reprehenderit voluptatum cupiditate, ipsa eos quo!';\n  const sectionA = sectionInfo.appendChild(createEl('a', 'story-more'));\n  sectionA.setAttribute('href', '#');\n  sectionA.innerHTML = 'More About Us &nbsp; &#8594;';\n\n  return aboutUs;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (about);\n\n//# sourceURL=webpack:///./src/main/about.js?");

/***/ })

}]);