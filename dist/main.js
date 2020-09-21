/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _final_splash_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./final-splash.png */ \"./src/final-splash.png\");\n/* harmony import */ var _img_handplant_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/handplant.png */ \"./src/img/handplant.png\");\n// Imports\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@574&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_final_splash_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_img_handplant_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"*,\\n*::after,\\n*::before {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nbody {\\n  background-color: #181717;\\n  color: #fff;\\n  font-family: Arial, Helvetica, sans-serif;\\n  scroll-behavior: smooth;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\n.title-complement {\\n  color: #c79771;\\n  font-family: \\\"Dancing Script\\\", cursive;\\n  font-size: 2.4rem;\\n}\\n\\n.section-title {\\n  font-size: 2.7rem;\\n}\\n\\n#content {\\n  max-width: 90%;\\n  margin: auto;\\n}\\n#content header {\\n  height: 10vh;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n#content header ul li {\\n  display: inline-block;\\n  list-style: none;\\n  margin-left: 40px;\\n  cursor: pointer;\\n}\\n#content header ul li a {\\n  color: #aaa9a9;\\n  padding-bottom: 5px;\\n}\\n#content header .logo a {\\n  font-family: \\\"Dancing Script\\\", cursive;\\n  font-size: 2rem;\\n  color: #c79771;\\n}\\n#content header ul > li a[active],\\n#content header ul > li a:hover,\\n#content header ul > li a:focus {\\n  color: #fff;\\n  border-bottom: 1.5px solid #c79771;\\n}\\n#content main .main-section {\\n  min-height: 90vh;\\n}\\n#content main .first-serve {\\n  min-height: 90vh;\\n  display: flex;\\n  margin: auto;\\n  align-items: center;\\n}\\n#content main .first-serve p {\\n  font-family: \\\"Franklin Gothic Medium\\\", \\\"Arial Narrow\\\", Arial, sans-serif;\\n  width: 50%;\\n  text-align: left;\\n  font-size: 5vw;\\n}\\n#content main .first-serve p .title-complement {\\n  font-size: 5vw;\\n}\\n#content main .first-serve p button {\\n  background-color: rgba(0, 0, 0, 0);\\n  color: #fff;\\n  border: 2px solid #aaa9a9;\\n  padding: 10px 20px;\\n  font-weight: 700;\\n  font-size: 2rem;\\n  position: relative;\\n  overflow: hidden;\\n  cursor: pointer;\\n}\\n#content main .first-serve p button::before {\\n  content: \\\"\\\";\\n  display: block;\\n  height: 100px;\\n  width: 50px;\\n  top: -15px;\\n  position: absolute;\\n  background-color: #c79771;\\n  z-index: -1;\\n  transform: rotate(20deg);\\n  left: -57px;\\n  transition-duration: 600ms;\\n}\\n#content main .first-serve p button:hover::before, #content main .first-serve p button:focus::before {\\n  left: 100%;\\n}\\n#content main .first-serve picture {\\n  width: 50%;\\n  max-width: 50%;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-size: 85%;\\n  background-repeat: no-repeat;\\n}\\n#content main .first-serve picture img {\\n  width: 111%;\\n  position: relative;\\n  left: -30%;\\n}\\n#content #about-us {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n#content #about-us article {\\n  max-width: 80%;\\n  display: flex;\\n  background-color: #fff;\\n  color: #000;\\n}\\n#content #about-us article picture {\\n  width: 70%;\\n  position: relative;\\n}\\n#content #about-us article picture img {\\n  width: 100%;\\n  height: 100%;\\n  object-fit: cover;\\n}\\n#content #about-us article picture::before {\\n  content: \\\"\\\";\\n  display: block;\\n  height: 150%;\\n  width: 150%;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-size: 90%;\\n  background-repeat: no-repeat;\\n  position: absolute;\\n  z-index: -10;\\n  left: -25%;\\n  top: -25%;\\n}\\n#content #about-us article .section-info {\\n  width: 60%;\\n  height: 300px;\\n  padding: 40px 70px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-evenly;\\n  position: relative;\\n}\\n#content #about-us article .section-info a {\\n  color: #c79771;\\n  font-weight: 700;\\n}\\n#content #about-us article .section-info::after {\\n  content: \\\"\\\";\\n  display: block;\\n  height: 80%;\\n  width: 50%;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  background-size: 90%;\\n  background-repeat: no-repeat;\\n  position: absolute;\\n  z-index: 10;\\n  right: -28%;\\n  bottom: -15%;\\n  transform: rotate(20deg);\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/final-splash.png":
/*!******************************!*\
  !*** ./src/final-splash.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"b5fb4382a7fd89b26290d59a49b3d376.png\");\n\n//# sourceURL=webpack:///./src/final-splash.png?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst { content, createEl } = __webpack_require__(/*! ./unitools.js */ \"./src/unitools.js\");\n\nconst header = () => {\n  const header = createEl('header');\n\n  // Create Logo\n\n  const logoDiv = createEl('div', 'logo');\n  const logoLink = logoDiv.appendChild(createEl('a'));\n  logoLink.setAttribute('href', './');\n  logoLink.innerHTML = 'Centurion';\n\n  // Create Nav\n\n  const nav = createEl('nav');\n  const navUl = nav.appendChild(createEl('ul'));\n\n  const makeLi = (liDataMenu, liText) => {\n    const li = navUl.appendChild(createEl('li'));\n    const liLink = li.appendChild(createEl('a', 'menu-item'));\n    if (liDataMenu === 'en') {\n      liLink.setAttribute('href', '#');\n    } else {\n      liLink.setAttribute('data-menu', liDataMenu);\n    }\n    liLink.innerHTML = liText;\n  };\n\n  makeLi('#firstServe', 'Home');\n  makeLi('#aboutUs', 'About Us');\n  makeLi('#menu', 'Menu');\n  makeLi('#events', 'Events');\n  makeLi('#contact', 'Contact');\n  makeLi('#reservations', 'Reservations');\n  makeLi('en', 'EN▼');\n\n  header.appendChild(logoDiv);\n  header.appendChild(nav);\n  content().appendChild(header);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (header);\n\n//# sourceURL=webpack:///./src/header.js?");

/***/ }),

/***/ "./src/img/handplant.png":
/*!*******************************!*\
  !*** ./src/img/handplant.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"b3ba0a7fccec27f1e5dea3ae53c242c1.png\");\n\n//# sourceURL=webpack:///./src/img/handplant.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main */ \"./src/main.js\");\n\n\n\n\nwindow.onload = () => {\n  // document.querySelector('#content').innerHTML = '';\n  Object(_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  Object(_main__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  // console.log(aboutUs)\n// const ROUTES = {\n//   '#home': firstServe,\n//   '#aboutUs': aboutUs\n// }\n\n// document.querySelectorAll('.menu-item').forEach(menuElement => {\n//   if  (menuElement){\n//     const menuName = menuElement.dataset.menu;\n//     if (menuName) {\n//       const routeFunction = new Function(\"return\" + menuName.slice(1) + \"();\")\n//       menuElement.addEventListener('click', () => {\n//         // routeFunction\n//       })\n//     }\n//   })\n//   }\n//aa\n};\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst { content, createEl } = __webpack_require__(/*! ./unitools.js */ \"./src/unitools.js\");\n\nconst menu = __webpack_require__(/*! ./main/menu */ \"./src/main/menu.js\");\nconst aboutUs = __webpack_require__(/*! ./main/about */ \"./src/main/about.js\").default;\nconst firstServe = __webpack_require__(/*! ./main/first-serve */ \"./src/main/first-serve.js\").default;\nconst events = () => {}\nconst contact = () => {}\nconst reservations = () => {}\n\nconst main = () => {\n  const main = content().appendChild(createEl('main'));\n  const child = firstServe()\n  main.appendChild(child);\n\n  document.querySelectorAll('.menu-item').forEach((menuItem) => {\n    if (\"menu\" in menuItem.dataset) {\n      const menuName = menuItem.dataset.menu.slice(1);\n      const routeFunction = eval(`${menuName}`)\n\n      menuItem.addEventListener('click', () => {\n        main.replaceChild(routeFunction(), main.firstChild);\n      })\n    }\n  });\n  // About(main);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (main);\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/main/about.js":
/*!***************************!*\
  !*** ./src/main/about.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst { createSection, createEl, createImg } = __webpack_require__(/*! ../unitools.js */ \"./src/unitools.js\");\n\nconst about = () => {\n  const aboutUs = createSection('about-us');\n  // console.log(aboutUs);\n  aboutUs.classList.add('our-story');\n  const aboutArticle = aboutUs.appendChild(createEl('article'));\n  aboutArticle.appendChild(createImg('./img/bibimbap', 'jpg', 'bibimbap'));\n  const sectionInfo = aboutArticle.appendChild(createEl('div', 'section-info'));\n  sectionInfo.appendChild(createEl('h4', 'title-complement'))\n    .innerHTML = 'Discover';\n  sectionInfo.appendChild(createEl('h3', 'section-title'))\n    .innerHTML = 'Our Story';\n  sectionInfo.appendChild(createEl('p'))\n    .innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias commodi architecto repellendus consectetur provident quos recusandae fuga tenetur? Veniam amet magni sequi itaque ut reprehenderit voluptatum cupiditate, ipsa eos quo!';\n  const sectionA = sectionInfo.appendChild(createEl('a', 'story-more'));\n  sectionA.setAttribute('href', '#');\n  sectionA.innerHTML = 'More About Us &nbsp; &#8594;';\n\n  return aboutUs;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (about);\n\n//# sourceURL=webpack:///./src/main/about.js?");

/***/ }),

/***/ "./src/main/first-serve.js":
/*!*********************************!*\
  !*** ./src/main/first-serve.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst { createEl, createImg } = __webpack_require__(/*! ../unitools.js */ \"./src/unitools.js\");\n\nconst firstServe = () => {\n  const fs = createEl('div', 'first-serve');\n  const fsP = fs.appendChild(createEl('p'));\n  fsP.innerHTML = 'A Premium <br> And <span class=\"title-complement\">Authentic</span> Serve <br> For the likes of You';\n  fsP.appendChild(createEl('br'));\n  const fspButton = fsP.appendChild(createEl('button'));\n  fspButton.innerHTML = 'Book A Table';\n\n  // Picture section\n\n  fs.appendChild(createImg('./img/k-food-1rs', 'png', 'Delicious Meal'));\n\n  return fs;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (firstServe);\n\n//# sourceURL=webpack:///./src/main/first-serve.js?");

/***/ }),

/***/ "./src/main/menu.js":
/*!**************************!*\
  !*** ./src/main/menu.js ***!
  \**************************/
/*! exports provided: menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menu\", function() { return menu; });\n// const { createSection, createEl, createImg } = require('../unitools.js');\n\nconst menu = (main) => main;\n\n\n//# sourceURL=webpack:///./src/main/menu.js?");

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/styles.scss?");

/***/ }),

/***/ "./src/unitools.js":
/*!*************************!*\
  !*** ./src/unitools.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  content: () => document.querySelector('#content'),\n  createEl: (el, className = 'none') => {\n    const element = document.createElement(el);\n    if (className !== 'none') {\n      element.classList.add(className);\n    }\n    return element;\n  },\n  createImg: (url, format, alt = 'Anonymous Image') => {\n    const pic = document.createElement('picture');\n    const srcOne = pic.appendChild(document.createElement('source'));\n    srcOne.setAttribute('type', 'image/webp');\n    srcOne.setAttribute('srcset', `${url}.webp`);\n    const srcTwo = pic.appendChild(document.createElement('source'));\n    srcTwo.setAttribute('type', `image/${format}`);\n    srcTwo.setAttribute('srcset', `${url}.${format}`);\n    const image = pic.appendChild(document.createElement('img'));\n    image.setAttribute('src', `${url}.webp`);\n    image.setAttribute('alt', alt);\n    return pic;\n  },\n  createSection: (id) => {\n    const sectionDiv = document.createElement('div');\n    sectionDiv.setAttribute('id', id);\n    sectionDiv.className = 'main-section';\n    return sectionDiv;\n  },\n};\n\n//# sourceURL=webpack:///./src/unitools.js?");

/***/ })

/******/ });