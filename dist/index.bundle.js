/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/background_2.jpg */ "./src/assets/images/background_2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml,\nbody {\n    font-family: 'Courier New', Courier, monospace;\n    font-size: 20px;\n    height: 100%;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    display: grid;\n}\n\n#content {\n    padding: 0.5rem;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n\n    \n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n#menu-buttons {\n    padding: 0.4rem;\n    flex: 0 1 auto;\n\n    display: flex;\n    flex-direction: row;\n    gap: 50px;\n    align-items: center;\n}\n\nbutton {\n    padding: 0.5rem 1rem;\n    font-size: 1.2rem;\n    border: 2px solid transparent;\n    border-radius: 10px;\n    color: whitesmoke;\n\n    background-color: #0002;\n    position: relative;\n    z-index: 1;\n    box-shadow: 0px 0px 3px 4px lightpink;\n\n    transition: transform 100ms ease-in,\n                box-shadow 100ms ease-in;\n}\n\nbutton:hover {\n    transform: translateY(-6px);\n    box-shadow: 0px 4px 8px 2px lightpink;\n}\n\nbutton:active {\n    transform: translateY(-2px);\n    box-shadow: 0px 0px 8px 4px lightpink;\n}\n\n.pressed {\n    background-color: #0008;\n}\n\n#page-content-container {\n    flex: 1 1 auto;\n    width: 100%;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 25px;\n}\n\n.category {\n    flex: 1 1 auto;\n    width: 100%;\n\n    padding: 0.5rem;\n    /* border: 2px red solid; */\n\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(400px, 0.33fr));\n    place-content: center;\n    gap: 2.5rem;\n}\n\n.menuItems {\n    height: 400px;\n    padding: 1.5rem;\n    background-position: center;\n    background-size: cover;\n    background-clip: border-box;\n    background-repeat: no-repeat;\n    overflow: hidden;\n    border-radius: 25px;\n    box-shadow: rgb(54, 55, 56) 3px 3px 6px 0px inset, \n                rgba(212, 204, 204, 0.5) -3px -3px 6px 1px inset;;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 0.5rem;\n\n    position: relative;\n    z-index: 1;\n}\n\n.menuItems::before {\n    content: '';\n    background-color: white;\n    opacity: 0.4;\n    top: 1rem;\n    left: 1rem;\n    bottom: 1rem;\n    right: 1rem;\n\n    border: 5px solid grey;\n    border-radius: 0 20px 0 20px;\n    \n    position: absolute;\n    z-index: -1;\n\n    transition: transform 150ms ease-in;\n                /* opacity 50ms ease-in-out; */\n    transform: scaleX(0);\n}\n\n.menuItems:hover::before {\n    transform: scaleX(1);\n    /* opacity: 0.4; */\n}\n\n.menuItems > * {\n    position: relative;\n\n    transition: transform 300ms ease-in-out;\n    transform: translateY(390px);\n}\n\n.menuItems:hover>* {\n    transform: translateY(0);\n}\n\n.pageItems{\n    width: 400px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 0.5rem;\n    padding: 1rem;\n    color: white;\n\n    border: 3px solid lightpink;\n    border-radius: 0 20px 0 20px;\n    position: relative;\n    z-index: 1;\n\n    overflow: hidden;\n}\n\nh1,\nh2 {\n    padding: 1rem;\n    color: white;\n    border: 3px solid lightblue;\n    border-radius: 0 20px 0 20px;\n    position: relative;\n    overflow: hidden;\n    z-index: 1;\n}\n\n.pageItems::before,\nh1::before,\nh2::before {\n    content: '';\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    position: absolute;\n    background-color: #0004;\n    z-index: -1;\n}\n\nh3 {\n    font-size: 1.25rem;\n}\np {\n    text-align: center;\n    font-size: 1.15rem;\n}", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA;;;IAGI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;;IAEI,8CAA8C;IAC9C,eAAe;IACf,YAAY;IACZ,mDAAoD;IACpD,aAAa;AACjB;;AAEA;IACI,eAAe;;IAEf,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;;;IAGT,4BAA4B;IAC5B,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,cAAc;;IAEd,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,oBAAoB;IACpB,iBAAiB;IACjB,6BAA6B;IAC7B,mBAAmB;IACnB,iBAAiB;;IAEjB,uBAAuB;IACvB,kBAAkB;IAClB,UAAU;IACV,qCAAqC;;IAErC;wCACoC;AACxC;;AAEA;IACI,2BAA2B;IAC3B,qCAAqC;AACzC;;AAEA;IACI,2BAA2B;IAC3B,qCAAqC;AACzC;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,cAAc;IACd,WAAW;;IAEX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,cAAc;IACd,WAAW;;IAEX,eAAe;IACf,2BAA2B;;IAE3B,aAAa;IACb,8DAA8D;IAC9D,qBAAqB;IACrB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,eAAe;IACf,2BAA2B;IAC3B,sBAAsB;IACtB,2BAA2B;IAC3B,4BAA4B;IAC5B,gBAAgB;IAChB,mBAAmB;IACnB;gEAC4D;IAC5D,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;;IAEX,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,WAAW;IACX,uBAAuB;IACvB,YAAY;IACZ,SAAS;IACT,UAAU;IACV,YAAY;IACZ,WAAW;;IAEX,sBAAsB;IACtB,4BAA4B;;IAE5B,kBAAkB;IAClB,WAAW;;IAEX,mCAAmC;gBACvB,8BAA8B;IAC1C,oBAAoB;AACxB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;;IAElB,uCAAuC;IACvC,4BAA4B;AAChC;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;IACX,aAAa;IACb,YAAY;;IAEZ,2BAA2B;IAC3B,4BAA4B;IAC5B,kBAAkB;IAClB,UAAU;;IAEV,gBAAgB;AACpB;;AAEA;;IAEI,aAAa;IACb,YAAY;IACZ,2BAA2B;IAC3B,4BAA4B;IAC5B,kBAAkB;IAClB,gBAAgB;IAChB,UAAU;AACd;;AAEA;;;IAGI,WAAW;IACX,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,kBAAkB;IAClB,uBAAuB;IACvB,WAAW;AACf;;AAEA;IACI,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,kBAAkB;AACtB","sourcesContent":["*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml,\nbody {\n    font-family: 'Courier New', Courier, monospace;\n    font-size: 20px;\n    height: 100%;\n    background: url('../assets/images/background_2.jpg');\n    display: grid;\n}\n\n#content {\n    padding: 0.5rem;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n\n    \n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n#menu-buttons {\n    padding: 0.4rem;\n    flex: 0 1 auto;\n\n    display: flex;\n    flex-direction: row;\n    gap: 50px;\n    align-items: center;\n}\n\nbutton {\n    padding: 0.5rem 1rem;\n    font-size: 1.2rem;\n    border: 2px solid transparent;\n    border-radius: 10px;\n    color: whitesmoke;\n\n    background-color: #0002;\n    position: relative;\n    z-index: 1;\n    box-shadow: 0px 0px 3px 4px lightpink;\n\n    transition: transform 100ms ease-in,\n                box-shadow 100ms ease-in;\n}\n\nbutton:hover {\n    transform: translateY(-6px);\n    box-shadow: 0px 4px 8px 2px lightpink;\n}\n\nbutton:active {\n    transform: translateY(-2px);\n    box-shadow: 0px 0px 8px 4px lightpink;\n}\n\n.pressed {\n    background-color: #0008;\n}\n\n#page-content-container {\n    flex: 1 1 auto;\n    width: 100%;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 25px;\n}\n\n.category {\n    flex: 1 1 auto;\n    width: 100%;\n\n    padding: 0.5rem;\n    /* border: 2px red solid; */\n\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(400px, 0.33fr));\n    place-content: center;\n    gap: 2.5rem;\n}\n\n.menuItems {\n    height: 400px;\n    padding: 1.5rem;\n    background-position: center;\n    background-size: cover;\n    background-clip: border-box;\n    background-repeat: no-repeat;\n    overflow: hidden;\n    border-radius: 25px;\n    box-shadow: rgb(54, 55, 56) 3px 3px 6px 0px inset, \n                rgba(212, 204, 204, 0.5) -3px -3px 6px 1px inset;;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 0.5rem;\n\n    position: relative;\n    z-index: 1;\n}\n\n.menuItems::before {\n    content: '';\n    background-color: white;\n    opacity: 0.4;\n    top: 1rem;\n    left: 1rem;\n    bottom: 1rem;\n    right: 1rem;\n\n    border: 5px solid grey;\n    border-radius: 0 20px 0 20px;\n    \n    position: absolute;\n    z-index: -1;\n\n    transition: transform 150ms ease-in;\n                /* opacity 50ms ease-in-out; */\n    transform: scaleX(0);\n}\n\n.menuItems:hover::before {\n    transform: scaleX(1);\n    /* opacity: 0.4; */\n}\n\n.menuItems > * {\n    position: relative;\n\n    transition: transform 300ms ease-in-out;\n    transform: translateY(390px);\n}\n\n.menuItems:hover>* {\n    transform: translateY(0);\n}\n\n.pageItems{\n    width: 400px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 0.5rem;\n    padding: 1rem;\n    color: white;\n\n    border: 3px solid lightpink;\n    border-radius: 0 20px 0 20px;\n    position: relative;\n    z-index: 1;\n\n    overflow: hidden;\n}\n\nh1,\nh2 {\n    padding: 1rem;\n    color: white;\n    border: 3px solid lightblue;\n    border-radius: 0 20px 0 20px;\n    position: relative;\n    overflow: hidden;\n    z-index: 1;\n}\n\n.pageItems::before,\nh1::before,\nh2::before {\n    content: '';\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    position: absolute;\n    background-color: #0004;\n    z-index: -1;\n}\n\nh3 {\n    font-size: 1.25rem;\n}\np {\n    text-align: center;\n    font-size: 1.15rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contact)
/* harmony export */ });
const contactInfo = (function(){
    let call = '555-555-5555';
    let email = 'realmail@cool.com';
    return {
        call,
        email
    };
})();

const displayContactInfo = (function () {

    const addTitle = function() {        
        let h1 = document.createElement('h1');
        h1.textContent = 'Contact Us';
        return h1;
    };

    const addInfo = function() {
        let div = document.createElement('div');
        div.setAttribute('class', 'pageItems')
        
        let p1 = document.createElement('p');
        p1.textContent = contactInfo.call;

        let p2 = document.createElement('p');
        p2.textContent = contactInfo.email;

        div.appendChild(p1);
        div.appendChild(p2);

        return div;
    };

    return{
        addTitle,
        addInfo
    };
})();


function contact() {
    console.log("this is contact.");

    let pageContentConatiner = document.getElementById('page-content-container');
    if(pageContentConatiner) {
        pageContentConatiner.appendChild(displayContactInfo.addTitle());
        pageContentConatiner.appendChild(displayContactInfo.addInfo());
    }
}


/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Restaurant = (function() {
    let name =  `Eggs EveryDay`;
    let about = 'At eggs everyday we believe that eggs should not be limited to breakfast or any specific day. But eggs are something that can be enjoyed at any day or any meal or in any form. So Eggs Everyday.';
    let location = '123, Mars Drive, Jupiter'
    return {
        name,
        about,
        location
    };
})();

const addContent = function() {
    let restaurantName = document.createElement('h1');
    restaurantName.textContent = Restaurant.name;

    let restaurantAbout = document.createElement('div');
    restaurantAbout.setAttribute('class', 'pageItems');
    let  p1 = document.createElement('p');    
    p1.textContent = Restaurant.about;
    restaurantAbout.appendChild(p1);

    let restaurantLoaction = document.createElement('div');
    restaurantLoaction.setAttribute('class', 'pageItems');
    let location = document.createElement('h3');
    location.textContent = 'Location';
    let p2 = document.createElement('p');
    p2.textContent = Restaurant.location;
    restaurantLoaction.appendChild(location);
    restaurantLoaction.appendChild(p2);
    
    let pageContentConatiner = document.getElementById('page-content-container');
    if(pageContentConatiner) {
        pageContentConatiner.appendChild(restaurantName);
        pageContentConatiner.appendChild(restaurantAbout);
        pageContentConatiner.appendChild(restaurantLoaction);
    }

};

function home() {
    console.log("this is home.");
    addContent();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);


/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _assets_images_bread_omelette_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/bread_omelette.jpg */ "./src/assets/images/bread_omelette.jpg");
/* harmony import */ var _assets_images_boiled_egg_sandwich_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/boiled_egg_sandwich.jpg */ "./src/assets/images/boiled_egg_sandwich.jpg");
/* harmony import */ var _assets_images_cake_icecream_shake_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/cake_icecream_shake.jpg */ "./src/assets/images/cake_icecream_shake.jpg");
/* harmony import */ var _assets_images_half_fry_egg_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/half_fry_egg.jpg */ "./src/assets/images/half_fry_egg.jpg");
/* harmony import */ var _assets_images_lemon_juice_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/lemon_juice.jpg */ "./src/assets/images/lemon_juice.jpg");
/* harmony import */ var _assets_images_order_confirm_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/order_confirm.png */ "./src/assets/images/order_confirm.png");







const mainDishes = (function() {
    let dish1 = {
        name: 'Bread Omelette',
        description: 'A delicious and quick breakfast, served with homemade ketchup.',
        cost: '$4',
        image: _assets_images_bread_omelette_jpg__WEBPACK_IMPORTED_MODULE_0__
    }
    let dish2 = {
        name: 'Half fried egg',
        description: 'Classic sunny side up served with 2 supplementary breads and onions',
        cost: '$4',
        image: _assets_images_half_fry_egg_jpg__WEBPACK_IMPORTED_MODULE_3__
    }
    let dish3 = {
        name: 'Boiled Egg sandwich',
        description: 'Boiled egg diced to form a delicous sandwich with a twist of mixed fruit jam and other spices',
        cost: '$4',
        image: _assets_images_boiled_egg_sandwich_jpg__WEBPACK_IMPORTED_MODULE_1__
    }

    return {
        dish1,
        dish2,
        dish3
    };
})();

const bevrages = (function(){
    let dish1 = {
        name: 'Cake and Ice cream Shake',
        description: 'A shake with 2 scoops of ice cream and a whole cake slice.',
        cost: '$6',
        image: _assets_images_cake_icecream_shake_jpg__WEBPACK_IMPORTED_MODULE_2__
    }
    let dish2 = {
        name: 'Sweet Lemon Juice',
        description: 'Sweet and refreshing lemon juice to start your day.',
        cost: '$2',
        image: _assets_images_lemon_juice_jpg__WEBPACK_IMPORTED_MODULE_4__
    }

    return {
        dish1,
        dish2,
    };
})();

const displayContent = (function() {

    const addMenuTitle = function(element = 'h1', text = 'Menu') {        
        let menuHeading = document.createElement(`${element}`);
        menuHeading.textContent = text;
        
        return menuHeading;
    }

    function createOrderIcon(orderName) {
        const icon = new Image();
        icon.src = _assets_images_order_confirm_png__WEBPACK_IMPORTED_MODULE_5__;
        icon.addEventListener('click', () => console.log(orderName));
        return icon;
    }

    function createDiv(content) {
        let div = document.createElement('div');
        div.setAttribute('class', 'menuItems');
        
        // console.log(content);
        let h3 = document.createElement('h3');
        h3.textContent = content.name;

        let p = document.createElement('p');
        p.textContent = content.description;

        let h4 = document.createElement('h4');
        h4.textContent = content.cost;

        div.appendChild(h3);
        div.appendChild(p);
        div.appendChild(h4);


        div.appendChild(createOrderIcon(content.name));
        div.style.backgroundImage = `url(${content.image})`;
        return div;
    }

    const displayDishes = function(contents, heading) {
        let div = document.createElement('div'); // div which stores the similar category of dishes
        div.setAttribute('class', 'category');
        // let category = addMenuTitle('h2', heading);
        // div.appendChild(category);
        for(let content in contents) {
            div.appendChild(createDiv(contents[content]));
            // console.log(contents[content]);
        }

        return div;
    }
   
    return {
        addMenuTitle,
        displayDishes
    }
})();

function menu() {
    console.log("this is menu");
    let pageContentContainer = document.getElementById('page-content-container');
    // console.log(mainDishes.dish1.name)

    pageContentContainer.appendChild(displayContent.addMenuTitle());
    
    pageContentContainer.appendChild(displayContent.addMenuTitle('h2', 'Main Dishes'));
    pageContentContainer.appendChild(displayContent.displayDishes(mainDishes));

    pageContentContainer.appendChild(displayContent.addMenuTitle('h2', 'Bevrages'));
    pageContentContainer.appendChild(displayContent.displayDishes(bevrages));
}

/***/ }),

/***/ "./src/assets/images/background_2.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/background_2.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "98d86263a5930c781b1d.jpg";

/***/ }),

/***/ "./src/assets/images/boiled_egg_sandwich.jpg":
/*!***************************************************!*\
  !*** ./src/assets/images/boiled_egg_sandwich.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6658101d6a05996554d6.jpg";

/***/ }),

/***/ "./src/assets/images/bread_omelette.jpg":
/*!**********************************************!*\
  !*** ./src/assets/images/bread_omelette.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5484ef9bb016c26cf2af.jpg";

/***/ }),

/***/ "./src/assets/images/cake_icecream_shake.jpg":
/*!***************************************************!*\
  !*** ./src/assets/images/cake_icecream_shake.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "185c07ac9b2088f9f2bd.jpg";

/***/ }),

/***/ "./src/assets/images/half_fry_egg.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/half_fry_egg.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dadde9613dda06667758.jpg";

/***/ }),

/***/ "./src/assets/images/lemon_juice.jpg":
/*!*******************************************!*\
  !*** ./src/assets/images/lemon_juice.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4cd91ada948689316821.jpg";

/***/ }),

/***/ "./src/assets/images/order_confirm.png":
/*!*********************************************!*\
  !*** ./src/assets/images/order_confirm.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fed0cdf28e39a3130e30.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/home.js */ "./src/modules/home.js");
/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu.js */ "./src/modules/menu.js");
/* harmony import */ var _modules_contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/contact.js */ "./src/modules/contact.js");
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");






const pageContentContainer = (function() {
    const removePageContentContainer = function() {
        let pageContentContainer = document.getElementById('page-content-container');
        if(pageContentContainer) {
            // console.log('removing content container');
            pageContentContainer.remove();
        }
    };
    
    const addPageContentContainer = function () {
        let pageContentContainer = document.getElementById('page-content-container');
        if(!pageContentContainer) {
            // console.log('adding content container');
            pageContentContainer = document.createElement('div');
            pageContentContainer.setAttribute('id', 'page-content-container');
            content.appendChild(pageContentContainer);
        }
    };

    return {
        removePageContentContainer,
        addPageContentContainer
    };
})();

(function addMenuButtons() {
    const element = document.createElement("div");
    element.setAttribute("id", "menu-buttons");

    const btnHome = document.createElement("button");
    btnHome.setAttribute('class','pressed');
    btnHome.innerHTML = "Home";
    btnHome.addEventListener('click', function() {
        pageContentContainer.removePageContentContainer();
        pageContentContainer.addPageContentContainer();
        (0,_modules_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
        addClickStatus(btnHome);
    });

    const btnMenu = document.createElement("button");
    btnMenu.innerHTML = "Menu";
    btnMenu.addEventListener('click', function() {
        pageContentContainer.removePageContentContainer();
        pageContentContainer.addPageContentContainer();
        (0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
        addClickStatus(btnMenu);
    });

    const btnContact = document.createElement("button");
    btnContact.innerHTML = "Contact";
    btnContact.addEventListener('click', function() {
        pageContentContainer.removePageContentContainer();
        pageContentContainer.addPageContentContainer();
        (0,_modules_contact_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
        addClickStatus(btnContact);
    });

    function addClickStatus(btn) {
        let btns = Array.from(document.querySelectorAll('button'));
        btns.forEach((btn) => {
            if(btn.classList.contains('pressed')) {
                btn.classList.remove('pressed');
            }
        });
        btn.classList.add('pressed');
    }

    element.appendChild(btnHome);
    element.appendChild(btnMenu);
    element.appendChild(btnContact);

    const content = document.getElementById("content");
    content.appendChild(element);
    pageContentContainer.addPageContentContainer();
    (0,_modules_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFDO0FBQ0E7QUFDTTs7QUFFZDs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0REFBSTtBQUNaO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0REFBSTtBQUNaO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrREFBTztBQUNmO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0REFBSTtBQUNSLENBQUMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzP2U0NWIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbW9kdWxlcy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9tb2R1bGVzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kXzIuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcblxcbiAgICBcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuI21lbnUtYnV0dG9ucyB7XFxuICAgIHBhZGRpbmc6IDAuNHJlbTtcXG4gICAgZmxleDogMCAxIGF1dG87XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogNTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDRweCBsaWdodHBpbms7XFxuXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDBtcyBlYXNlLWluLFxcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93IDEwMG1zIGVhc2UtaW47XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggMnB4IGxpZ2h0cGluaztcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggNHB4IGxpZ2h0cGluaztcXG59XFxuXFxuLnByZXNzZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwODtcXG59XFxuXFxuI3BhZ2UtY29udGVudC1jb250YWluZXIge1xcbiAgICBmbGV4OiAxIDEgYXV0bztcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDI1cHg7XFxufVxcblxcbi5jYXRlZ29yeSB7XFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICAvKiBib3JkZXI6IDJweCByZWQgc29saWQ7ICovXFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNDAwcHgsIDAuMzNmcikpO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMi41cmVtO1xcbn1cXG5cXG4ubWVudUl0ZW1zIHtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgYm94LXNoYWRvdzogcmdiKDU0LCA1NSwgNTYpIDNweCAzcHggNnB4IDBweCBpbnNldCwgXFxuICAgICAgICAgICAgICAgIHJnYmEoMjEyLCAyMDQsIDIwNCwgMC41KSAtM3B4IC0zcHggNnB4IDFweCBpbnNldDs7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuNXJlbTtcXG5cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ubWVudUl0ZW1zOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG9wYWNpdHk6IDAuNDtcXG4gICAgdG9wOiAxcmVtO1xcbiAgICBsZWZ0OiAxcmVtO1xcbiAgICBib3R0b206IDFyZW07XFxuICAgIHJpZ2h0OiAxcmVtO1xcblxcbiAgICBib3JkZXI6IDVweCBzb2xpZCBncmV5O1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDIwcHggMCAyMHB4O1xcbiAgICBcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAtMTtcXG5cXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGVhc2UtaW47XFxuICAgICAgICAgICAgICAgIC8qIG9wYWNpdHkgNTBtcyBlYXNlLWluLW91dDsgKi9cXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxufVxcblxcbi5tZW51SXRlbXM6aG92ZXI6OmJlZm9yZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbiAgICAvKiBvcGFjaXR5OiAwLjQ7ICovXFxufVxcblxcbi5tZW51SXRlbXMgPiAqIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzOTBweCk7XFxufVxcblxcbi5tZW51SXRlbXM6aG92ZXI+KiB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG59XFxuXFxuLnBhZ2VJdGVtc3tcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcblxcbiAgICBib3JkZXI6IDNweCBzb2xpZCBsaWdodHBpbms7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMjBweCAwIDIwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMTtcXG5cXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuaDEsXFxuaDIge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGxpZ2h0Ymx1ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAyMHB4IDAgMjBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ucGFnZUl0ZW1zOjpiZWZvcmUsXFxuaDE6OmJlZm9yZSxcXG5oMjo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwNDtcXG4gICAgei1pbmRleDogLTE7XFxufVxcblxcbmgzIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5wIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuMTVyZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0lBR0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7O0lBRUksOENBQThDO0lBQzlDLGVBQWU7SUFDZixZQUFZO0lBQ1osbURBQW9EO0lBQ3BELGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlOztJQUVmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFNBQVM7OztJQUdULDRCQUE0QjtJQUM1QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYzs7SUFFZCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsaUJBQWlCOztJQUVqQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixxQ0FBcUM7O0lBRXJDO3dDQUNvQztBQUN4Qzs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7O0lBRVgsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXOztJQUVYLGVBQWU7SUFDZiwyQkFBMkI7O0lBRTNCLGFBQWE7SUFDYiw4REFBOEQ7SUFDOUQscUJBQXFCO0lBQ3JCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkI7Z0VBQzREO0lBQzVELGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXOztJQUVYLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7SUFDWixXQUFXOztJQUVYLHNCQUFzQjtJQUN0Qiw0QkFBNEI7O0lBRTVCLGtCQUFrQjtJQUNsQixXQUFXOztJQUVYLG1DQUFtQztnQkFDdkIsOEJBQThCO0lBQzFDLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7O0lBRWxCLHVDQUF1QztJQUN2Qyw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGFBQWE7SUFDYixZQUFZOztJQUVaLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLFVBQVU7O0lBRVYsZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLGFBQWE7SUFDYixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7QUFFQTs7O0lBR0ksV0FBVztJQUNYLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kXzIuanBnJyk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuXFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4jbWVudS1idXR0b25zIHtcXG4gICAgcGFkZGluZzogMC40cmVtO1xcbiAgICBmbGV4OiAwIDEgYXV0bztcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiA1MHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggNHB4IGxpZ2h0cGluaztcXG5cXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMG1zIGVhc2UtaW4sXFxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3cgMTAwbXMgZWFzZS1pbjtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02cHgpO1xcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDhweCAycHggbGlnaHRwaW5rO1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDhweCA0cHggbGlnaHRwaW5rO1xcbn1cXG5cXG4ucHJlc3NlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA4O1xcbn1cXG5cXG4jcGFnZS1jb250ZW50LWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjVweDtcXG59XFxuXFxuLmNhdGVnb3J5IHtcXG4gICAgZmxleDogMSAxIGF1dG87XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIC8qIGJvcmRlcjogMnB4IHJlZCBzb2xpZDsgKi9cXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg0MDBweCwgMC4zM2ZyKSk7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAyLjVyZW07XFxufVxcblxcbi5tZW51SXRlbXMge1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBib3gtc2hhZG93OiByZ2IoNTQsIDU1LCA1NikgM3B4IDNweCA2cHggMHB4IGluc2V0LCBcXG4gICAgICAgICAgICAgICAgcmdiYSgyMTIsIDIwNCwgMjA0LCAwLjUpIC0zcHggLTNweCA2cHggMXB4IGluc2V0OztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC41cmVtO1xcblxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5tZW51SXRlbXM6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgb3BhY2l0eTogMC40O1xcbiAgICB0b3A6IDFyZW07XFxuICAgIGxlZnQ6IDFyZW07XFxuICAgIGJvdHRvbTogMXJlbTtcXG4gICAgcmlnaHQ6IDFyZW07XFxuXFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIGdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMjBweCAwIDIwcHg7XFxuICAgIFxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IC0xO1xcblxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXMgZWFzZS1pbjtcXG4gICAgICAgICAgICAgICAgLyogb3BhY2l0eSA1MG1zIGVhc2UtaW4tb3V0OyAqL1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG59XFxuXFxuLm1lbnVJdGVtczpob3Zlcjo6YmVmb3JlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICAgIC8qIG9wYWNpdHk6IDAuNDsgKi9cXG59XFxuXFxuLm1lbnVJdGVtcyA+ICoge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDM5MHB4KTtcXG59XFxuXFxuLm1lbnVJdGVtczpob3Zlcj4qIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbn1cXG5cXG4ucGFnZUl0ZW1ze1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGxpZ2h0cGluaztcXG4gICAgYm9yZGVyLXJhZGl1czogMCAyMHB4IDAgMjBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAxO1xcblxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5oMSxcXG5oMiB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgbGlnaHRibHVlO1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDIwcHggMCAyMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5wYWdlSXRlbXM6OmJlZm9yZSxcXG5oMTo6YmVmb3JlLFxcbmgyOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA0O1xcbiAgICB6LWluZGV4OiAtMTtcXG59XFxuXFxuaDMge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcbnAge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY29udGFjdEluZm8gPSAoZnVuY3Rpb24oKXtcbiAgICBsZXQgY2FsbCA9ICc1NTUtNTU1LTU1NTUnO1xuICAgIGxldCBlbWFpbCA9ICdyZWFsbWFpbEBjb29sLmNvbSc7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2FsbCxcbiAgICAgICAgZW1haWxcbiAgICB9O1xufSkoKTtcblxuY29uc3QgZGlzcGxheUNvbnRhY3RJbmZvID0gKGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IGFkZFRpdGxlID0gZnVuY3Rpb24oKSB7ICAgICAgICBcbiAgICAgICAgbGV0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgaDEudGV4dENvbnRlbnQgPSAnQ29udGFjdCBVcyc7XG4gICAgICAgIHJldHVybiBoMTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkSW5mbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3BhZ2VJdGVtcycpXG4gICAgICAgIFxuICAgICAgICBsZXQgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHAxLnRleHRDb250ZW50ID0gY29udGFjdEluZm8uY2FsbDtcblxuICAgICAgICBsZXQgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHAyLnRleHRDb250ZW50ID0gY29udGFjdEluZm8uZW1haWw7XG5cbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHAxKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHAyKTtcblxuICAgICAgICByZXR1cm4gZGl2O1xuICAgIH07XG5cbiAgICByZXR1cm57XG4gICAgICAgIGFkZFRpdGxlLFxuICAgICAgICBhZGRJbmZvXG4gICAgfTtcbn0pKCk7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFjdCgpIHtcbiAgICBjb25zb2xlLmxvZyhcInRoaXMgaXMgY29udGFjdC5cIik7XG5cbiAgICBsZXQgcGFnZUNvbnRlbnRDb25hdGluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1jb250ZW50LWNvbnRhaW5lcicpO1xuICAgIGlmKHBhZ2VDb250ZW50Q29uYXRpbmVyKSB7XG4gICAgICAgIHBhZ2VDb250ZW50Q29uYXRpbmVyLmFwcGVuZENoaWxkKGRpc3BsYXlDb250YWN0SW5mby5hZGRUaXRsZSgpKTtcbiAgICAgICAgcGFnZUNvbnRlbnRDb25hdGluZXIuYXBwZW5kQ2hpbGQoZGlzcGxheUNvbnRhY3RJbmZvLmFkZEluZm8oKSk7XG4gICAgfVxufVxuIiwiY29uc3QgUmVzdGF1cmFudCA9IChmdW5jdGlvbigpIHtcbiAgICBsZXQgbmFtZSA9ICBgRWdncyBFdmVyeURheWA7XG4gICAgbGV0IGFib3V0ID0gJ0F0IGVnZ3MgZXZlcnlkYXkgd2UgYmVsaWV2ZSB0aGF0IGVnZ3Mgc2hvdWxkIG5vdCBiZSBsaW1pdGVkIHRvIGJyZWFrZmFzdCBvciBhbnkgc3BlY2lmaWMgZGF5LiBCdXQgZWdncyBhcmUgc29tZXRoaW5nIHRoYXQgY2FuIGJlIGVuam95ZWQgYXQgYW55IGRheSBvciBhbnkgbWVhbCBvciBpbiBhbnkgZm9ybS4gU28gRWdncyBFdmVyeWRheS4nO1xuICAgIGxldCBsb2NhdGlvbiA9ICcxMjMsIE1hcnMgRHJpdmUsIEp1cGl0ZXInXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgYWJvdXQsXG4gICAgICAgIGxvY2F0aW9uXG4gICAgfTtcbn0pKCk7XG5cbmNvbnN0IGFkZENvbnRlbnQgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHJlc3RhdXJhbnROYW1lLnRleHRDb250ZW50ID0gUmVzdGF1cmFudC5uYW1lO1xuXG4gICAgbGV0IHJlc3RhdXJhbnRBYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJlc3RhdXJhbnRBYm91dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3BhZ2VJdGVtcycpO1xuICAgIGxldCAgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7ICAgIFxuICAgIHAxLnRleHRDb250ZW50ID0gUmVzdGF1cmFudC5hYm91dDtcbiAgICByZXN0YXVyYW50QWJvdXQuYXBwZW5kQ2hpbGQocDEpO1xuXG4gICAgbGV0IHJlc3RhdXJhbnRMb2FjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJlc3RhdXJhbnRMb2FjdGlvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3BhZ2VJdGVtcycpO1xuICAgIGxldCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgbG9jYXRpb24udGV4dENvbnRlbnQgPSAnTG9jYXRpb24nO1xuICAgIGxldCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwMi50ZXh0Q29udGVudCA9IFJlc3RhdXJhbnQubG9jYXRpb247XG4gICAgcmVzdGF1cmFudExvYWN0aW9uLmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcbiAgICByZXN0YXVyYW50TG9hY3Rpb24uYXBwZW5kQ2hpbGQocDIpO1xuICAgIFxuICAgIGxldCBwYWdlQ29udGVudENvbmF0aW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLWNvbnRlbnQtY29udGFpbmVyJyk7XG4gICAgaWYocGFnZUNvbnRlbnRDb25hdGluZXIpIHtcbiAgICAgICAgcGFnZUNvbnRlbnRDb25hdGluZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpO1xuICAgICAgICBwYWdlQ29udGVudENvbmF0aW5lci5hcHBlbmRDaGlsZChyZXN0YXVyYW50QWJvdXQpO1xuICAgICAgICBwYWdlQ29udGVudENvbmF0aW5lci5hcHBlbmRDaGlsZChyZXN0YXVyYW50TG9hY3Rpb24pO1xuICAgIH1cblxufTtcblxuZnVuY3Rpb24gaG9tZSgpIHtcbiAgICBjb25zb2xlLmxvZyhcInRoaXMgaXMgaG9tZS5cIik7XG4gICAgYWRkQ29udGVudCgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBob21lO1xuIiwiaW1wb3J0IGJyZWFkX29tZWxldHRlIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvYnJlYWRfb21lbGV0dGUuanBnJztcbmltcG9ydCBib2lsZWRfZWdnX3NhbmR3aWNoIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvYm9pbGVkX2VnZ19zYW5kd2ljaC5qcGcnO1xuaW1wb3J0IGNha2VfaWNlY3JlYW1fc2hha2UgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9jYWtlX2ljZWNyZWFtX3NoYWtlLmpwZyc7XG5pbXBvcnQgaGFsZl9mcnlfZWdnIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvaGFsZl9mcnlfZWdnLmpwZyc7XG5pbXBvcnQgbGVtb25fanVpY2UgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9sZW1vbl9qdWljZS5qcGcnO1xuaW1wb3J0IG9yZGVyX2NvbmZpcm0gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9vcmRlcl9jb25maXJtLnBuZyc7XG5cbmNvbnN0IG1haW5EaXNoZXMgPSAoZnVuY3Rpb24oKSB7XG4gICAgbGV0IGRpc2gxID0ge1xuICAgICAgICBuYW1lOiAnQnJlYWQgT21lbGV0dGUnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0EgZGVsaWNpb3VzIGFuZCBxdWljayBicmVha2Zhc3QsIHNlcnZlZCB3aXRoIGhvbWVtYWRlIGtldGNodXAuJyxcbiAgICAgICAgY29zdDogJyQ0JyxcbiAgICAgICAgaW1hZ2U6IGJyZWFkX29tZWxldHRlXG4gICAgfVxuICAgIGxldCBkaXNoMiA9IHtcbiAgICAgICAgbmFtZTogJ0hhbGYgZnJpZWQgZWdnJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdDbGFzc2ljIHN1bm55IHNpZGUgdXAgc2VydmVkIHdpdGggMiBzdXBwbGVtZW50YXJ5IGJyZWFkcyBhbmQgb25pb25zJyxcbiAgICAgICAgY29zdDogJyQ0JyxcbiAgICAgICAgaW1hZ2U6IGhhbGZfZnJ5X2VnZ1xuICAgIH1cbiAgICBsZXQgZGlzaDMgPSB7XG4gICAgICAgIG5hbWU6ICdCb2lsZWQgRWdnIHNhbmR3aWNoJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdCb2lsZWQgZWdnIGRpY2VkIHRvIGZvcm0gYSBkZWxpY291cyBzYW5kd2ljaCB3aXRoIGEgdHdpc3Qgb2YgbWl4ZWQgZnJ1aXQgamFtIGFuZCBvdGhlciBzcGljZXMnLFxuICAgICAgICBjb3N0OiAnJDQnLFxuICAgICAgICBpbWFnZTogYm9pbGVkX2VnZ19zYW5kd2ljaFxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGRpc2gxLFxuICAgICAgICBkaXNoMixcbiAgICAgICAgZGlzaDNcbiAgICB9O1xufSkoKTtcblxuY29uc3QgYmV2cmFnZXMgPSAoZnVuY3Rpb24oKXtcbiAgICBsZXQgZGlzaDEgPSB7XG4gICAgICAgIG5hbWU6ICdDYWtlIGFuZCBJY2UgY3JlYW0gU2hha2UnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0Egc2hha2Ugd2l0aCAyIHNjb29wcyBvZiBpY2UgY3JlYW0gYW5kIGEgd2hvbGUgY2FrZSBzbGljZS4nLFxuICAgICAgICBjb3N0OiAnJDYnLFxuICAgICAgICBpbWFnZTogY2FrZV9pY2VjcmVhbV9zaGFrZVxuICAgIH1cbiAgICBsZXQgZGlzaDIgPSB7XG4gICAgICAgIG5hbWU6ICdTd2VldCBMZW1vbiBKdWljZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnU3dlZXQgYW5kIHJlZnJlc2hpbmcgbGVtb24ganVpY2UgdG8gc3RhcnQgeW91ciBkYXkuJyxcbiAgICAgICAgY29zdDogJyQyJyxcbiAgICAgICAgaW1hZ2U6IGxlbW9uX2p1aWNlXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGlzaDEsXG4gICAgICAgIGRpc2gyLFxuICAgIH07XG59KSgpO1xuXG5jb25zdCBkaXNwbGF5Q29udGVudCA9IChmdW5jdGlvbigpIHtcblxuICAgIGNvbnN0IGFkZE1lbnVUaXRsZSA9IGZ1bmN0aW9uKGVsZW1lbnQgPSAnaDEnLCB0ZXh0ID0gJ01lbnUnKSB7ICAgICAgICBcbiAgICAgICAgbGV0IG1lbnVIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHtlbGVtZW50fWApO1xuICAgICAgICBtZW51SGVhZGluZy50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gbWVudUhlYWRpbmc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlT3JkZXJJY29uKG9yZGVyTmFtZSkge1xuICAgICAgICBjb25zdCBpY29uID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGljb24uc3JjID0gb3JkZXJfY29uZmlybTtcbiAgICAgICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNvbnNvbGUubG9nKG9yZGVyTmFtZSkpO1xuICAgICAgICByZXR1cm4gaWNvbjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVEaXYoY29udGVudCkge1xuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnVJdGVtcycpO1xuICAgICAgICBcbiAgICAgICAgLy8gY29uc29sZS5sb2coY29udGVudCk7XG4gICAgICAgIGxldCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGgzLnRleHRDb250ZW50ID0gY29udGVudC5uYW1lO1xuXG4gICAgICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwLnRleHRDb250ZW50ID0gY29udGVudC5kZXNjcmlwdGlvbjtcblxuICAgICAgICBsZXQgaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgICBoNC50ZXh0Q29udGVudCA9IGNvbnRlbnQuY29zdDtcblxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaDMpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQocCk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChoNCk7XG5cblxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoY3JlYXRlT3JkZXJJY29uKGNvbnRlbnQubmFtZSkpO1xuICAgICAgICBkaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2NvbnRlbnQuaW1hZ2V9KWA7XG4gICAgICAgIHJldHVybiBkaXY7XG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheURpc2hlcyA9IGZ1bmN0aW9uKGNvbnRlbnRzLCBoZWFkaW5nKSB7XG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy8gZGl2IHdoaWNoIHN0b3JlcyB0aGUgc2ltaWxhciBjYXRlZ29yeSBvZiBkaXNoZXNcbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2F0ZWdvcnknKTtcbiAgICAgICAgLy8gbGV0IGNhdGVnb3J5ID0gYWRkTWVudVRpdGxlKCdoMicsIGhlYWRpbmcpO1xuICAgICAgICAvLyBkaXYuYXBwZW5kQ2hpbGQoY2F0ZWdvcnkpO1xuICAgICAgICBmb3IobGV0IGNvbnRlbnQgaW4gY29udGVudHMpIHtcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVEaXYoY29udGVudHNbY29udGVudF0pKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbnRlbnRzW2NvbnRlbnRdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkaXY7XG4gICAgfVxuICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkTWVudVRpdGxlLFxuICAgICAgICBkaXNwbGF5RGlzaGVzXG4gICAgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudSgpIHtcbiAgICBjb25zb2xlLmxvZyhcInRoaXMgaXMgbWVudVwiKTtcbiAgICBsZXQgcGFnZUNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1jb250ZW50LWNvbnRhaW5lcicpO1xuICAgIC8vIGNvbnNvbGUubG9nKG1haW5EaXNoZXMuZGlzaDEubmFtZSlcblxuICAgIHBhZ2VDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpc3BsYXlDb250ZW50LmFkZE1lbnVUaXRsZSgpKTtcbiAgICBcbiAgICBwYWdlQ29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChkaXNwbGF5Q29udGVudC5hZGRNZW51VGl0bGUoJ2gyJywgJ01haW4gRGlzaGVzJykpO1xuICAgIHBhZ2VDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpc3BsYXlDb250ZW50LmRpc3BsYXlEaXNoZXMobWFpbkRpc2hlcykpO1xuXG4gICAgcGFnZUNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlzcGxheUNvbnRlbnQuYWRkTWVudVRpdGxlKCdoMicsICdCZXZyYWdlcycpKTtcbiAgICBwYWdlQ29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChkaXNwbGF5Q29udGVudC5kaXNwbGF5RGlzaGVzKGJldnJhZ2VzKSk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgaG9tZSBmcm9tICcuL21vZHVsZXMvaG9tZS5qcyc7XG5pbXBvcnQgbWVudSBmcm9tICcuL21vZHVsZXMvbWVudS5qcyc7XG5pbXBvcnQgY29udGFjdCBmcm9tICcuL21vZHVsZXMvY29udGFjdC5qcyc7XG5cbmltcG9ydCAnLi9zdHlsZXMvc3R5bGVzLmNzcyc7XG5cbmNvbnN0IHBhZ2VDb250ZW50Q29udGFpbmVyID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHJlbW92ZVBhZ2VDb250ZW50Q29udGFpbmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBwYWdlQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLWNvbnRlbnQtY29udGFpbmVyJyk7XG4gICAgICAgIGlmKHBhZ2VDb250ZW50Q29udGFpbmVyKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmVtb3ZpbmcgY29udGVudCBjb250YWluZXInKTtcbiAgICAgICAgICAgIHBhZ2VDb250ZW50Q29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBhZGRQYWdlQ29udGVudENvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHBhZ2VDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UtY29udGVudC1jb250YWluZXInKTtcbiAgICAgICAgaWYoIXBhZ2VDb250ZW50Q29udGFpbmVyKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYWRkaW5nIGNvbnRlbnQgY29udGFpbmVyJyk7XG4gICAgICAgICAgICBwYWdlQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcGFnZUNvbnRlbnRDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdwYWdlLWNvbnRlbnQtY29udGFpbmVyJyk7XG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhZ2VDb250ZW50Q29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICByZW1vdmVQYWdlQ29udGVudENvbnRhaW5lcixcbiAgICAgICAgYWRkUGFnZUNvbnRlbnRDb250YWluZXJcbiAgICB9O1xufSkoKTtcblxuKGZ1bmN0aW9uIGFkZE1lbnVCdXR0b25zKCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZW51LWJ1dHRvbnNcIik7XG5cbiAgICBjb25zdCBidG5Ib21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidG5Ib21lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdwcmVzc2VkJyk7XG4gICAgYnRuSG9tZS5pbm5lckhUTUwgPSBcIkhvbWVcIjtcbiAgICBidG5Ib21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHBhZ2VDb250ZW50Q29udGFpbmVyLnJlbW92ZVBhZ2VDb250ZW50Q29udGFpbmVyKCk7XG4gICAgICAgIHBhZ2VDb250ZW50Q29udGFpbmVyLmFkZFBhZ2VDb250ZW50Q29udGFpbmVyKCk7XG4gICAgICAgIGhvbWUoKTtcbiAgICAgICAgYWRkQ2xpY2tTdGF0dXMoYnRuSG9tZSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBidG5NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidG5NZW51LmlubmVySFRNTCA9IFwiTWVudVwiO1xuICAgIGJ0bk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcGFnZUNvbnRlbnRDb250YWluZXIucmVtb3ZlUGFnZUNvbnRlbnRDb250YWluZXIoKTtcbiAgICAgICAgcGFnZUNvbnRlbnRDb250YWluZXIuYWRkUGFnZUNvbnRlbnRDb250YWluZXIoKTtcbiAgICAgICAgbWVudSgpO1xuICAgICAgICBhZGRDbGlja1N0YXR1cyhidG5NZW51KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGJ0bkNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ0bkNvbnRhY3QuaW5uZXJIVE1MID0gXCJDb250YWN0XCI7XG4gICAgYnRuQ29udGFjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBwYWdlQ29udGVudENvbnRhaW5lci5yZW1vdmVQYWdlQ29udGVudENvbnRhaW5lcigpO1xuICAgICAgICBwYWdlQ29udGVudENvbnRhaW5lci5hZGRQYWdlQ29udGVudENvbnRhaW5lcigpO1xuICAgICAgICBjb250YWN0KCk7XG4gICAgICAgIGFkZENsaWNrU3RhdHVzKGJ0bkNvbnRhY3QpO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gYWRkQ2xpY2tTdGF0dXMoYnRuKSB7XG4gICAgICAgIGxldCBidG5zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKSk7XG4gICAgICAgIGJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICAgICAgICBpZihidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdwcmVzc2VkJykpIHtcbiAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgncHJlc3NlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ3ByZXNzZWQnKTtcbiAgICB9XG5cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ0bkhvbWUpO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnRuTWVudSk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChidG5Db250YWN0KTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICBwYWdlQ29udGVudENvbnRhaW5lci5hZGRQYWdlQ29udGVudENvbnRhaW5lcigpO1xuICAgIGhvbWUoKTtcbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9