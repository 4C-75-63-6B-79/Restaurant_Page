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
})();


(function start(){
    pageContentContainer.addPageContentContainer();
    (0,_modules_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFDO0FBQ0E7QUFDTTs7QUFFZDs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0REFBSTtBQUNaO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0REFBSTtBQUNaO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrREFBTztBQUNmO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQSxJQUFJLDREQUFJO0FBQ1IsQ0FBQyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3M/ZTQ1YiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9tb2R1bGVzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL21vZHVsZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbW9kdWxlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRfMi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuXFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4jbWVudS1idXR0b25zIHtcXG4gICAgcGFkZGluZzogMC40cmVtO1xcbiAgICBmbGV4OiAwIDEgYXV0bztcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiA1MHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggNHB4IGxpZ2h0cGluaztcXG5cXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMG1zIGVhc2UtaW4sXFxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3cgMTAwbXMgZWFzZS1pbjtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02cHgpO1xcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDhweCAycHggbGlnaHRwaW5rO1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDhweCA0cHggbGlnaHRwaW5rO1xcbn1cXG5cXG4ucHJlc3NlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA4O1xcbn1cXG5cXG4jcGFnZS1jb250ZW50LWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjVweDtcXG59XFxuXFxuLmNhdGVnb3J5IHtcXG4gICAgZmxleDogMSAxIGF1dG87XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIC8qIGJvcmRlcjogMnB4IHJlZCBzb2xpZDsgKi9cXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg0MDBweCwgMC4zM2ZyKSk7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAyLjVyZW07XFxufVxcblxcbi5tZW51SXRlbXMge1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBib3gtc2hhZG93OiByZ2IoNTQsIDU1LCA1NikgM3B4IDNweCA2cHggMHB4IGluc2V0LCBcXG4gICAgICAgICAgICAgICAgcmdiYSgyMTIsIDIwNCwgMjA0LCAwLjUpIC0zcHggLTNweCA2cHggMXB4IGluc2V0OztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC41cmVtO1xcblxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5tZW51SXRlbXM6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgb3BhY2l0eTogMC40O1xcbiAgICB0b3A6IDFyZW07XFxuICAgIGxlZnQ6IDFyZW07XFxuICAgIGJvdHRvbTogMXJlbTtcXG4gICAgcmlnaHQ6IDFyZW07XFxuXFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIGdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMjBweCAwIDIwcHg7XFxuICAgIFxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IC0xO1xcblxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXMgZWFzZS1pbjtcXG4gICAgICAgICAgICAgICAgLyogb3BhY2l0eSA1MG1zIGVhc2UtaW4tb3V0OyAqL1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG59XFxuXFxuLm1lbnVJdGVtczpob3Zlcjo6YmVmb3JlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICAgIC8qIG9wYWNpdHk6IDAuNDsgKi9cXG59XFxuXFxuLm1lbnVJdGVtcyA+ICoge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDM5MHB4KTtcXG59XFxuXFxuLm1lbnVJdGVtczpob3Zlcj4qIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbn1cXG5cXG4ucGFnZUl0ZW1ze1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGxpZ2h0cGluaztcXG4gICAgYm9yZGVyLXJhZGl1czogMCAyMHB4IDAgMjBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAxO1xcblxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5oMSxcXG5oMiB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgbGlnaHRibHVlO1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDIwcHggMCAyMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5wYWdlSXRlbXM6OmJlZm9yZSxcXG5oMTo6YmVmb3JlLFxcbmgyOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA0O1xcbiAgICB6LWluZGV4OiAtMTtcXG59XFxuXFxuaDMge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcbnAge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7SUFHSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSw4Q0FBOEM7SUFDOUMsZUFBZTtJQUNmLFlBQVk7SUFDWixtREFBb0Q7SUFDcEQsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7O0lBRWYsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUzs7O0lBR1QsNEJBQTRCO0lBQzVCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjOztJQUVkLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixpQkFBaUI7O0lBRWpCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHFDQUFxQzs7SUFFckM7d0NBQ29DO0FBQ3hDOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVzs7SUFFWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7O0lBRVgsZUFBZTtJQUNmLDJCQUEyQjs7SUFFM0IsYUFBYTtJQUNiLDhEQUE4RDtJQUM5RCxxQkFBcUI7SUFDckIsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQjtnRUFDNEQ7SUFDNUQsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7O0lBRVgsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtJQUNaLFdBQVc7O0lBRVgsc0JBQXNCO0lBQ3RCLDRCQUE0Qjs7SUFFNUIsa0JBQWtCO0lBQ2xCLFdBQVc7O0lBRVgsbUNBQW1DO2dCQUN2Qiw4QkFBOEI7SUFDMUMsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjs7SUFFbEIsdUNBQXVDO0lBQ3ZDLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTtJQUNiLFlBQVk7O0lBRVosMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsVUFBVTs7SUFFVixnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkOztBQUVBOzs7SUFHSSxXQUFXO0lBQ1gsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRfMi5qcGcnKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG5cXG4gICAgXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbiNtZW51LWJ1dHRvbnMge1xcbiAgICBwYWRkaW5nOiAwLjRyZW07XFxuICAgIGZsZXg6IDAgMSBhdXRvO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDUwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCA0cHggbGlnaHRwaW5rO1xcblxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1pbixcXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdyAxMDBtcyBlYXNlLWluO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCk7XFxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IDJweCBsaWdodHBpbms7XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IDRweCBsaWdodHBpbms7XFxufVxcblxcbi5wcmVzc2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDg7XFxufVxcblxcbiNwYWdlLWNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgZmxleDogMSAxIGF1dG87XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAyNXB4O1xcbn1cXG5cXG4uY2F0ZWdvcnkge1xcbiAgICBmbGV4OiAxIDEgYXV0bztcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgLyogYm9yZGVyOiAycHggcmVkIHNvbGlkOyAqL1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDQwMHB4LCAwLjMzZnIpKTtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDIuNXJlbTtcXG59XFxuXFxuLm1lbnVJdGVtcyB7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYig1NCwgNTUsIDU2KSAzcHggM3B4IDZweCAwcHggaW5zZXQsIFxcbiAgICAgICAgICAgICAgICByZ2JhKDIxMiwgMjA0LCAyMDQsIDAuNSkgLTNweCAtM3B4IDZweCAxcHggaW5zZXQ7O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjVyZW07XFxuXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLm1lbnVJdGVtczo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBvcGFjaXR5OiAwLjQ7XFxuICAgIHRvcDogMXJlbTtcXG4gICAgbGVmdDogMXJlbTtcXG4gICAgYm90dG9tOiAxcmVtO1xcbiAgICByaWdodDogMXJlbTtcXG5cXG4gICAgYm9yZGVyOiA1cHggc29saWQgZ3JleTtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAyMHB4IDAgMjBweDtcXG4gICAgXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogLTE7XFxuXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBlYXNlLWluO1xcbiAgICAgICAgICAgICAgICAvKiBvcGFjaXR5IDUwbXMgZWFzZS1pbi1vdXQ7ICovXFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbn1cXG5cXG4ubWVudUl0ZW1zOmhvdmVyOjpiZWZvcmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG4gICAgLyogb3BhY2l0eTogMC40OyAqL1xcbn1cXG5cXG4ubWVudUl0ZW1zID4gKiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzkwcHgpO1xcbn1cXG5cXG4ubWVudUl0ZW1zOmhvdmVyPioge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxufVxcblxcbi5wYWdlSXRlbXN7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG4gICAgYm9yZGVyOiAzcHggc29saWQgbGlnaHRwaW5rO1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDIwcHggMCAyMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDE7XFxuXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmgxLFxcbmgyIHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBsaWdodGJsdWU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMjBweCAwIDIwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLnBhZ2VJdGVtczo6YmVmb3JlLFxcbmgxOjpiZWZvcmUsXFxuaDI6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDQ7XFxuICAgIHotaW5kZXg6IC0xO1xcbn1cXG5cXG5oMyB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxucCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjE1cmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBjb250YWN0SW5mbyA9IChmdW5jdGlvbigpe1xuICAgIGxldCBjYWxsID0gJzU1NS01NTUtNTU1NSc7XG4gICAgbGV0IGVtYWlsID0gJ3JlYWxtYWlsQGNvb2wuY29tJztcbiAgICByZXR1cm4ge1xuICAgICAgICBjYWxsLFxuICAgICAgICBlbWFpbFxuICAgIH07XG59KSgpO1xuXG5jb25zdCBkaXNwbGF5Q29udGFjdEluZm8gPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc3QgYWRkVGl0bGUgPSBmdW5jdGlvbigpIHsgICAgICAgIFxuICAgICAgICBsZXQgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBoMS50ZXh0Q29udGVudCA9ICdDb250YWN0IFVzJztcbiAgICAgICAgcmV0dXJuIGgxO1xuICAgIH07XG5cbiAgICBjb25zdCBhZGRJbmZvID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncGFnZUl0ZW1zJylcbiAgICAgICAgXG4gICAgICAgIGxldCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcDEudGV4dENvbnRlbnQgPSBjb250YWN0SW5mby5jYWxsO1xuXG4gICAgICAgIGxldCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcDIudGV4dENvbnRlbnQgPSBjb250YWN0SW5mby5lbWFpbDtcblxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQocDEpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQocDIpO1xuXG4gICAgICAgIHJldHVybiBkaXY7XG4gICAgfTtcblxuICAgIHJldHVybntcbiAgICAgICAgYWRkVGl0bGUsXG4gICAgICAgIGFkZEluZm9cbiAgICB9O1xufSkoKTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWN0KCkge1xuICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyBjb250YWN0LlwiKTtcblxuICAgIGxldCBwYWdlQ29udGVudENvbmF0aW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLWNvbnRlbnQtY29udGFpbmVyJyk7XG4gICAgaWYocGFnZUNvbnRlbnRDb25hdGluZXIpIHtcbiAgICAgICAgcGFnZUNvbnRlbnRDb25hdGluZXIuYXBwZW5kQ2hpbGQoZGlzcGxheUNvbnRhY3RJbmZvLmFkZFRpdGxlKCkpO1xuICAgICAgICBwYWdlQ29udGVudENvbmF0aW5lci5hcHBlbmRDaGlsZChkaXNwbGF5Q29udGFjdEluZm8uYWRkSW5mbygpKTtcbiAgICB9XG59XG4iLCJjb25zdCBSZXN0YXVyYW50ID0gKGZ1bmN0aW9uKCkge1xuICAgIGxldCBuYW1lID0gIGBFZ2dzIEV2ZXJ5RGF5YDtcbiAgICBsZXQgYWJvdXQgPSAnQXQgZWdncyBldmVyeWRheSB3ZSBiZWxpZXZlIHRoYXQgZWdncyBzaG91bGQgbm90IGJlIGxpbWl0ZWQgdG8gYnJlYWtmYXN0IG9yIGFueSBzcGVjaWZpYyBkYXkuIEJ1dCBlZ2dzIGFyZSBzb21ldGhpbmcgdGhhdCBjYW4gYmUgZW5qb3llZCBhdCBhbnkgZGF5IG9yIGFueSBtZWFsIG9yIGluIGFueSBmb3JtLiBTbyBFZ2dzIEV2ZXJ5ZGF5Lic7XG4gICAgbGV0IGxvY2F0aW9uID0gJzEyMywgTWFycyBEcml2ZSwgSnVwaXRlcidcbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lLFxuICAgICAgICBhYm91dCxcbiAgICAgICAgbG9jYXRpb25cbiAgICB9O1xufSkoKTtcblxuY29uc3QgYWRkQ29udGVudCA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCByZXN0YXVyYW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgcmVzdGF1cmFudE5hbWUudGV4dENvbnRlbnQgPSBSZXN0YXVyYW50Lm5hbWU7XG5cbiAgICBsZXQgcmVzdGF1cmFudEFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmVzdGF1cmFudEFib3V0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncGFnZUl0ZW1zJyk7XG4gICAgbGV0ICBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTsgICAgXG4gICAgcDEudGV4dENvbnRlbnQgPSBSZXN0YXVyYW50LmFib3V0O1xuICAgIHJlc3RhdXJhbnRBYm91dC5hcHBlbmRDaGlsZChwMSk7XG5cbiAgICBsZXQgcmVzdGF1cmFudExvYWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmVzdGF1cmFudExvYWN0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncGFnZUl0ZW1zJyk7XG4gICAgbGV0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBsb2NhdGlvbi50ZXh0Q29udGVudCA9ICdMb2NhdGlvbic7XG4gICAgbGV0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAyLnRleHRDb250ZW50ID0gUmVzdGF1cmFudC5sb2NhdGlvbjtcbiAgICByZXN0YXVyYW50TG9hY3Rpb24uYXBwZW5kQ2hpbGQobG9jYXRpb24pO1xuICAgIHJlc3RhdXJhbnRMb2FjdGlvbi5hcHBlbmRDaGlsZChwMik7XG4gICAgXG4gICAgbGV0IHBhZ2VDb250ZW50Q29uYXRpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UtY29udGVudC1jb250YWluZXInKTtcbiAgICBpZihwYWdlQ29udGVudENvbmF0aW5lcikge1xuICAgICAgICBwYWdlQ29udGVudENvbmF0aW5lci5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZSk7XG4gICAgICAgIHBhZ2VDb250ZW50Q29uYXRpbmVyLmFwcGVuZENoaWxkKHJlc3RhdXJhbnRBYm91dCk7XG4gICAgICAgIHBhZ2VDb250ZW50Q29uYXRpbmVyLmFwcGVuZENoaWxkKHJlc3RhdXJhbnRMb2FjdGlvbik7XG4gICAgfVxuXG59O1xuXG5mdW5jdGlvbiBob21lKCkge1xuICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyBob21lLlwiKTtcbiAgICBhZGRDb250ZW50KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhvbWU7XG4iLCJpbXBvcnQgYnJlYWRfb21lbGV0dGUgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9icmVhZF9vbWVsZXR0ZS5qcGcnO1xuaW1wb3J0IGJvaWxlZF9lZ2dfc2FuZHdpY2ggZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9ib2lsZWRfZWdnX3NhbmR3aWNoLmpwZyc7XG5pbXBvcnQgY2FrZV9pY2VjcmVhbV9zaGFrZSBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2Nha2VfaWNlY3JlYW1fc2hha2UuanBnJztcbmltcG9ydCBoYWxmX2ZyeV9lZ2cgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9oYWxmX2ZyeV9lZ2cuanBnJztcbmltcG9ydCBsZW1vbl9qdWljZSBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2xlbW9uX2p1aWNlLmpwZyc7XG5pbXBvcnQgb3JkZXJfY29uZmlybSBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL29yZGVyX2NvbmZpcm0ucG5nJztcblxuY29uc3QgbWFpbkRpc2hlcyA9IChmdW5jdGlvbigpIHtcbiAgICBsZXQgZGlzaDEgPSB7XG4gICAgICAgIG5hbWU6ICdCcmVhZCBPbWVsZXR0ZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQSBkZWxpY2lvdXMgYW5kIHF1aWNrIGJyZWFrZmFzdCwgc2VydmVkIHdpdGggaG9tZW1hZGUga2V0Y2h1cC4nLFxuICAgICAgICBjb3N0OiAnJDQnLFxuICAgICAgICBpbWFnZTogYnJlYWRfb21lbGV0dGVcbiAgICB9XG4gICAgbGV0IGRpc2gyID0ge1xuICAgICAgICBuYW1lOiAnSGFsZiBmcmllZCBlZ2cnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0NsYXNzaWMgc3Vubnkgc2lkZSB1cCBzZXJ2ZWQgd2l0aCAyIHN1cHBsZW1lbnRhcnkgYnJlYWRzIGFuZCBvbmlvbnMnLFxuICAgICAgICBjb3N0OiAnJDQnLFxuICAgICAgICBpbWFnZTogaGFsZl9mcnlfZWdnXG4gICAgfVxuICAgIGxldCBkaXNoMyA9IHtcbiAgICAgICAgbmFtZTogJ0JvaWxlZCBFZ2cgc2FuZHdpY2gnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0JvaWxlZCBlZ2cgZGljZWQgdG8gZm9ybSBhIGRlbGljb3VzIHNhbmR3aWNoIHdpdGggYSB0d2lzdCBvZiBtaXhlZCBmcnVpdCBqYW0gYW5kIG90aGVyIHNwaWNlcycsXG4gICAgICAgIGNvc3Q6ICckNCcsXG4gICAgICAgIGltYWdlOiBib2lsZWRfZWdnX3NhbmR3aWNoXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGlzaDEsXG4gICAgICAgIGRpc2gyLFxuICAgICAgICBkaXNoM1xuICAgIH07XG59KSgpO1xuXG5jb25zdCBiZXZyYWdlcyA9IChmdW5jdGlvbigpe1xuICAgIGxldCBkaXNoMSA9IHtcbiAgICAgICAgbmFtZTogJ0Nha2UgYW5kIEljZSBjcmVhbSBTaGFrZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQSBzaGFrZSB3aXRoIDIgc2Nvb3BzIG9mIGljZSBjcmVhbSBhbmQgYSB3aG9sZSBjYWtlIHNsaWNlLicsXG4gICAgICAgIGNvc3Q6ICckNicsXG4gICAgICAgIGltYWdlOiBjYWtlX2ljZWNyZWFtX3NoYWtlXG4gICAgfVxuICAgIGxldCBkaXNoMiA9IHtcbiAgICAgICAgbmFtZTogJ1N3ZWV0IExlbW9uIEp1aWNlJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdTd2VldCBhbmQgcmVmcmVzaGluZyBsZW1vbiBqdWljZSB0byBzdGFydCB5b3VyIGRheS4nLFxuICAgICAgICBjb3N0OiAnJDInLFxuICAgICAgICBpbWFnZTogbGVtb25fanVpY2VcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkaXNoMSxcbiAgICAgICAgZGlzaDIsXG4gICAgfTtcbn0pKCk7XG5cbmNvbnN0IGRpc3BsYXlDb250ZW50ID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3QgYWRkTWVudVRpdGxlID0gZnVuY3Rpb24oZWxlbWVudCA9ICdoMScsIHRleHQgPSAnTWVudScpIHsgICAgICAgIFxuICAgICAgICBsZXQgbWVudUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke2VsZW1lbnR9YCk7XG4gICAgICAgIG1lbnVIZWFkaW5nLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBtZW51SGVhZGluZztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVPcmRlckljb24ob3JkZXJOYW1lKSB7XG4gICAgICAgIGNvbnN0IGljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaWNvbi5zcmMgPSBvcmRlcl9jb25maXJtO1xuICAgICAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY29uc29sZS5sb2cob3JkZXJOYW1lKSk7XG4gICAgICAgIHJldHVybiBpY29uO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZURpdihjb250ZW50KSB7XG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudUl0ZW1zJyk7XG4gICAgICAgIFxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjb250ZW50KTtcbiAgICAgICAgbGV0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgaDMudGV4dENvbnRlbnQgPSBjb250ZW50Lm5hbWU7XG5cbiAgICAgICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHAudGV4dENvbnRlbnQgPSBjb250ZW50LmRlc2NyaXB0aW9uO1xuXG4gICAgICAgIGxldCBoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICAgIGg0LnRleHRDb250ZW50ID0gY29udGVudC5jb3N0O1xuXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChoMyk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChwKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGg0KTtcblxuXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVPcmRlckljb24oY29udGVudC5uYW1lKSk7XG4gICAgICAgIGRpdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7Y29udGVudC5pbWFnZX0pYDtcbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9XG5cbiAgICBjb25zdCBkaXNwbGF5RGlzaGVzID0gZnVuY3Rpb24oY29udGVudHMsIGhlYWRpbmcpIHtcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvLyBkaXYgd2hpY2ggc3RvcmVzIHRoZSBzaW1pbGFyIGNhdGVnb3J5IG9mIGRpc2hlc1xuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXRlZ29yeScpO1xuICAgICAgICAvLyBsZXQgY2F0ZWdvcnkgPSBhZGRNZW51VGl0bGUoJ2gyJywgaGVhZGluZyk7XG4gICAgICAgIC8vIGRpdi5hcHBlbmRDaGlsZChjYXRlZ29yeSk7XG4gICAgICAgIGZvcihsZXQgY29udGVudCBpbiBjb250ZW50cykge1xuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZURpdihjb250ZW50c1tjb250ZW50XSkpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY29udGVudHNbY29udGVudF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9XG4gICBcbiAgICByZXR1cm4ge1xuICAgICAgICBhZGRNZW51VGl0bGUsXG4gICAgICAgIGRpc3BsYXlEaXNoZXNcbiAgICB9XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51KCkge1xuICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyBtZW51XCIpO1xuICAgIGxldCBwYWdlQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLWNvbnRlbnQtY29udGFpbmVyJyk7XG4gICAgLy8gY29uc29sZS5sb2cobWFpbkRpc2hlcy5kaXNoMS5uYW1lKVxuXG4gICAgcGFnZUNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlzcGxheUNvbnRlbnQuYWRkTWVudVRpdGxlKCkpO1xuICAgIFxuICAgIHBhZ2VDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpc3BsYXlDb250ZW50LmFkZE1lbnVUaXRsZSgnaDInLCAnTWFpbiBEaXNoZXMnKSk7XG4gICAgcGFnZUNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlzcGxheUNvbnRlbnQuZGlzcGxheURpc2hlcyhtYWluRGlzaGVzKSk7XG5cbiAgICBwYWdlQ29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChkaXNwbGF5Q29udGVudC5hZGRNZW51VGl0bGUoJ2gyJywgJ0JldnJhZ2VzJykpO1xuICAgIHBhZ2VDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpc3BsYXlDb250ZW50LmRpc3BsYXlEaXNoZXMoYmV2cmFnZXMpKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBob21lIGZyb20gJy4vbW9kdWxlcy9ob21lLmpzJztcbmltcG9ydCBtZW51IGZyb20gJy4vbW9kdWxlcy9tZW51LmpzJztcbmltcG9ydCBjb250YWN0IGZyb20gJy4vbW9kdWxlcy9jb250YWN0LmpzJztcblxuaW1wb3J0ICcuL3N0eWxlcy9zdHlsZXMuY3NzJztcblxuY29uc3QgcGFnZUNvbnRlbnRDb250YWluZXIgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgcmVtb3ZlUGFnZUNvbnRlbnRDb250YWluZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHBhZ2VDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UtY29udGVudC1jb250YWluZXInKTtcbiAgICAgICAgaWYocGFnZUNvbnRlbnRDb250YWluZXIpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmluZyBjb250ZW50IGNvbnRhaW5lcicpO1xuICAgICAgICAgICAgcGFnZUNvbnRlbnRDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGFkZFBhZ2VDb250ZW50Q29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgcGFnZUNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1jb250ZW50LWNvbnRhaW5lcicpO1xuICAgICAgICBpZighcGFnZUNvbnRlbnRDb250YWluZXIpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhZGRpbmcgY29udGVudCBjb250YWluZXInKTtcbiAgICAgICAgICAgIHBhZ2VDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwYWdlQ29udGVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BhZ2UtY29udGVudC1jb250YWluZXInKTtcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFnZUNvbnRlbnRDb250YWluZXIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHJlbW92ZVBhZ2VDb250ZW50Q29udGFpbmVyLFxuICAgICAgICBhZGRQYWdlQ29udGVudENvbnRhaW5lclxuICAgIH07XG59KSgpO1xuXG4oZnVuY3Rpb24gYWRkTWVudUJ1dHRvbnMoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnUtYnV0dG9uc1wiKTtcblxuICAgIGNvbnN0IGJ0bkhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ0bkhvbWUuc2V0QXR0cmlidXRlKCdjbGFzcycsJ3ByZXNzZWQnKTtcbiAgICBidG5Ib21lLmlubmVySFRNTCA9IFwiSG9tZVwiO1xuICAgIGJ0bkhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcGFnZUNvbnRlbnRDb250YWluZXIucmVtb3ZlUGFnZUNvbnRlbnRDb250YWluZXIoKTtcbiAgICAgICAgcGFnZUNvbnRlbnRDb250YWluZXIuYWRkUGFnZUNvbnRlbnRDb250YWluZXIoKTtcbiAgICAgICAgaG9tZSgpO1xuICAgICAgICBhZGRDbGlja1N0YXR1cyhidG5Ib21lKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGJ0bk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ0bk1lbnUuaW5uZXJIVE1MID0gXCJNZW51XCI7XG4gICAgYnRuTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBwYWdlQ29udGVudENvbnRhaW5lci5yZW1vdmVQYWdlQ29udGVudENvbnRhaW5lcigpO1xuICAgICAgICBwYWdlQ29udGVudENvbnRhaW5lci5hZGRQYWdlQ29udGVudENvbnRhaW5lcigpO1xuICAgICAgICBtZW51KCk7XG4gICAgICAgIGFkZENsaWNrU3RhdHVzKGJ0bk1lbnUpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYnRuQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnRuQ29udGFjdC5pbm5lckhUTUwgPSBcIkNvbnRhY3RcIjtcbiAgICBidG5Db250YWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHBhZ2VDb250ZW50Q29udGFpbmVyLnJlbW92ZVBhZ2VDb250ZW50Q29udGFpbmVyKCk7XG4gICAgICAgIHBhZ2VDb250ZW50Q29udGFpbmVyLmFkZFBhZ2VDb250ZW50Q29udGFpbmVyKCk7XG4gICAgICAgIGNvbnRhY3QoKTtcbiAgICAgICAgYWRkQ2xpY2tTdGF0dXMoYnRuQ29udGFjdCk7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBhZGRDbGlja1N0YXR1cyhidG4pIHtcbiAgICAgICAgbGV0IGJ0bnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpKTtcbiAgICAgICAgYnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgICAgICAgIGlmKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ3ByZXNzZWQnKSkge1xuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdwcmVzc2VkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgncHJlc3NlZCcpO1xuICAgIH1cblxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnRuSG9tZSk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChidG5NZW51KTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ0bkNvbnRhY3QpO1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xufSkoKTtcblxuXG4oZnVuY3Rpb24gc3RhcnQoKXtcbiAgICBwYWdlQ29udGVudENvbnRhaW5lci5hZGRQYWdlQ29udGVudENvbnRhaW5lcigpO1xuICAgIGhvbWUoKTtcbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9