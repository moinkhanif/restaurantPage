(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/main/first-serve.js":
/*!*********************************!*\
  !*** ./src/main/first-serve.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst { createEl, createImg } = __webpack_require__(/*! ../unitools.js */ \"./src/unitools.js\");\n\nconst firstServe = () => {\n  const fs = createEl('div', 'first-serve');\n  const fsP = fs.appendChild(createEl('p'));\n  fsP.innerHTML = 'A Premium <br> And <span class=\"title-complement\">Authentic</span> Serve <br> For the likes of You';\n  fsP.appendChild(createEl('br'));\n  const fspButton = fsP.appendChild(createEl('button'));\n  fspButton.innerHTML = 'Book A Table';\n\n  // Picture section\n\n  fs.appendChild(createImg('./img/k-food-1rs', 'png', 'Delicious Meal'));\n\n  return fs;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (firstServe);\n\n//# sourceURL=webpack:///./src/main/first-serve.js?");

/***/ })

}]);