/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Popup */ "./src/components/Popup.js");
/* harmony import */ var _Options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Options */ "./src/components/Options.js");




var App = function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, window.location.hash === '#popup' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Popup__WEBPACK_IMPORTED_MODULE_1__["default"], null) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Options__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/Options.js":
/*!***********************************!*\
  !*** ./src/components/Options.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeface_roboto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typeface-roboto */ "./node_modules/typeface-roboto/index.css");
/* harmony import */ var typeface_roboto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeface_roboto__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _OptionsPage_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OptionsPage/App */ "./src/components/OptionsPage/App.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/colors/blue */ "./node_modules/@material-ui/core/colors/blue.js");
/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_6__);







var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["createMuiTheme"])({
  palette: {
    primary: _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_6___default.a,
    secondary: _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_6___default.a
  }
});

var Options = function Options(_) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
    theme: theme
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OptionsPage_App__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Options);

/***/ }),

/***/ "./src/components/OptionsPage/App.js":
/*!*******************************************!*\
  !*** ./src/components/OptionsPage/App.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PermanentDrawerLeft; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Table */ "./src/components/OptionsPage/components/Table.js");
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Search */ "./src/components/OptionsPage/components/Search.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var drawerWidth = 300;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {
      display: 'flex'
    },
    appBar: {
      width: "calc(100% - ".concat(drawerWidth, "px)"),
      marginLeft: drawerWidth
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      overflow: 'hidden'
    },
    drawerPaper: {
      width: drawerWidth
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background["default"]
    },
    box: {
      background: '#fff',
      boxSizing: 'border-box',
      position: 'fixed',
      zIndex: 10,
      width: drawerWidth - 5,
      transition: 'box-shadow 0.3s ease-in-out'
    },
    shadow: {
      boxShadow: '0px 2px 4px -1px #00000033, 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)'
    },
    txt: {
      paddingLeft: 8
    }
  };
});
function PermanentDrawerLeft() {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      domain = _useState2[0],
      setDomain = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState4 = _slicedToArray(_useState3, 2),
      txt = _useState4[0],
      setFilter = _useState4[1];

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var scroll = function scroll(e) {
    e.target.scrollTop > 30 && ref.current.classList.add(classes.shadow);
    e.target.scrollTop < 30 && ref.current.classList.remove(classes.shadow);
  };

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState6 = _slicedToArray(_useState5, 2),
      currentData = _useState6[0],
      setCurrentData = _useState6[1];

  var Change = function Change(domain) {
    chrome.storage.sync.get(null, function (d) {
      console.log('初始化', d);
      setDomain(Object.keys(d));
      setCurrentData({
        domain: domain,
        data: d
      }); // console.log('props', { domain, data: d });
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Change();
    chrome.storage.onChanged.addListener(function (changes, areaName) {
      // console.log(...Object.keys(changes));
      Change.apply(void 0, _toConsumableArray(Object.keys(changes)));
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {// console.log(currentData);
  }, [currentData]);

  var getCurrentData = function getCurrentData(domain) {
    chrome.storage.sync.get(null, function (d) {
      setCurrentData({
        domain: domain,
        data: d
      }); // console.log({ domain, data: d });
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.drawer,
    variant: "permanent",
    classes: {
      paper: classes.drawerPaper
    },
    anchor: "left",
    onScroll: scroll
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.box,
    ref: ref
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Search__WEBPACK_IMPORTED_MODULE_8__["default"], {
    setFilter: setFilter
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.toolbar
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__["default"], null, domain.filter(function (v) {
    return v.includes(txt);
  }).map(function (v, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
      button: true,
      key: i,
      onClick: function onClick(e) {
        return getCurrentData(v);
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], {
      primary: v,
      className: classes.txt
    }));
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: classes.content
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table__WEBPACK_IMPORTED_MODULE_7__["default"], currentData)));
}

/***/ }),

/***/ "./src/components/OptionsPage/components/Css.css":
/*!*******************************************************!*\
  !*** ./src/components/OptionsPage/components/Css.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/OptionsPage/components/Css.js":
/*!******************************************************!*\
  !*** ./src/components/OptionsPage/components/Css.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OutlinedTextFields; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _Css_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Css.css */ "./src/components/OptionsPage/components/Css.css");
/* harmony import */ var _Css_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Css_css__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      maxWidth: 960,
      margin: 'auto'
    },
    textField: {
      margin: theme.spacing(4, 1)
    },
    last: {
      marginBottom: theme.spacing(8)
    }
  };
});

var debounce = function () {
  var time = null;
  return function (domain, data) {
    clearTimeout(time);
    time = setTimeout(function () {// console.log(domain, data);
      // chrome.storage.sync.set({ '127.0.0.1': { css: 'dsdsdfasfdfr342343242342343' } });
    }, 500);
  };
}();

function OutlinedTextFields(_ref) {
  var domain = _ref.domain,
      dataAll = _ref.dataAll;
  var classes = useStyles();
  var code = "font-family: 'Fira Code Regular', Consolas !important;\nfont-size: 14px !important;";

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(code),
      _useState2 = _slicedToArray(_useState, 2),
      globalCss = _useState2[0],
      setGlobalCss = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(code),
      _useState4 = _slicedToArray(_useState3, 2),
      localCss = _useState4[0],
      setLocalCss = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // console.log(localCss);
    // debounce(domain, { ...dataAll[domain], css: localCss });
    chrome.storage.sync.set(_defineProperty({}, domain, _objectSpread({}, dataAll[domain], {
      css: localCss
    }))); // chrome.storage.sync.set({ [domain]: { ...dataAll[domain], css: localCss } });
    // console.log('ccc', domain, dataAll);
    // console.log({ ...dataAll[domain], css: localCss });
  }, [localCss]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log(globalCss);
  }, [globalCss]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    maxWidth: "md"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: domain || '未选择',
    multiline: true,
    rows: "8",
    className: classes.textField,
    margin: "normal",
    variant: "outlined",
    fullWidth: true,
    value: localCss,
    onChange: function onChange(e) {
      return setLocalCss(e.target.value);
    },
    id: "text"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: "Global",
    multiline: true,
    rows: "8",
    className: "".concat(classes.textField, " ").concat(classes.last),
    margin: "normal",
    variant: "outlined",
    fullWidth: true,
    value: globalCss,
    onChange: function onChange(e) {
      return setGlobalCss(e.target.value);
    },
    id: "text"
  }));
}

/***/ }),

/***/ "./src/components/OptionsPage/components/Search.js":
/*!*********************************************************!*\
  !*** ./src/components/OptionsPage/components/Search.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchAppBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1
    },
    search: {
      position: 'relative'
    },
    searchIcon: {
      width: theme.spacing(3.5),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    inputRoot: {
      color: 'inherit'
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 5),
      width: '100%'
    },
    input: {
      margin: theme.spacing(1)
    }
  };
});
function SearchAppBar(_ref) {
  var setFilter = _ref.setFilter;
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.search
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.searchIcon
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_2___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    placeholder: "Search\u2026",
    classes: {
      root: classes.inputRoot,
      input: classes.inputInput
    },
    onChange: function onChange(e) {
      return setFilter(e.target.value.trim());
    }
  })));
}

/***/ }),

/***/ "./src/components/OptionsPage/components/Table.js":
/*!********************************************************!*\
  !*** ./src/components/OptionsPage/components/Table.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EnhancedTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_TableSortLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableSortLabel */ "./node_modules/@material-ui/core/esm/TableSortLabel/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/esm/Tooltip/index.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/esm/Fab/index.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Switch */ "./node_modules/@material-ui/core/esm/Switch/index.js");
/* harmony import */ var _Css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Css */ "./src/components/OptionsPage/components/Css.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



















var useToolbarStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    absolute: {
      position: 'fixed',
      bottom: theme.spacing(10),
      right: theme.spacing(5),
      zIndex: 20
    },
    spacer: {
      position: 'absolute',
      top: 0,
      right: 20,
      zIndex: 20
    }
  };
});
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {
      width: '100%'
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2)
    },
    table: {
      minWidth: 750
    },
    tableWrapper: {
      overflowX: 'auto'
    }
  };
});
var headRows = [{
  id: 'sty',
  numeric: false,
  label: '运用样式'
}, {
  id: 'def',
  numeric: true,
  label: '不运用样式'
}, {
  id: 'mid',
  numeric: true,
  label: '强制翻译'
}];

var EnhancedTableToolbar = function EnhancedTableToolbar(props) {
  var classes = useToolbarStyles();
  var numSelected = props.numSelected,
      remove = props.remove,
      add = props.add,
      toggle = props.toggle,
      setToggle = props.setToggle;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, toggle && (numSelected === 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_11__["default"], {
    title: "Add"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_14__["default"], {
    color: "primary",
    className: classes.absolute,
    onClick: add
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_13___default.a, null))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_11__["default"], {
    title: "Delete"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_14__["default"], {
    color: "primary",
    className: classes.absolute,
    onClick: remove
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_12___default.a, null)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_16__["default"], {
    color: "primary",
    checked: !toggle,
    onChange: function onChange(_) {
      return setToggle(function (d) {
        return !d;
      });
    },
    value: "checkedA",
    className: classes.spacer
  }));
};

var EnhancedTableHead = function EnhancedTableHead(props) {
  var onSelectAllClick = props.onSelectAllClick,
      order = props.order,
      orderBy = props.orderBy,
      numSelected = props.numSelected,
      rowCount = props.rowCount,
      onRequestSort = props.onRequestSort;

  var createSortHandler = function createSortHandler(property) {
    return function (event) {
      return onRequestSort(event, property);
    };
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
    padding: "checkbox"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_10__["default"], {
    indeterminate: numSelected > 0 && numSelected < rowCount,
    checked: !!rowCount && numSelected === rowCount,
    onChange: onSelectAllClick
  })), headRows.map(function (row, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: i,
      align: row.numeric ? 'center' : 'left',
      sortDirection: orderBy === row.id ? order : false
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableSortLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
      active: orderBy === row.id,
      direction: order,
      onClick: createSortHandler(row.id)
    }, row.label));
  })));
};

var useStyles2 = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {
      '&::before': {
        borderBottomColor: '#00000000'
      },
      '&:hover:not(.Mui-disabled)::before': {
        borderBottomColor: '#00000000'
      }
    }
  };
});
var InputMe = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (_ref) {
  var val = _ref.val,
      row = _ref.row,
      props = _objectWithoutProperties(_ref, ["val", "row"]);

  var classes = useStyles2(); // let toggle = true;

  var click = function click(e) {
    e.stopPropagation(); // (toggle = !toggle) && e.target.blur();
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_15__["default"], _extends({
    className: classes.root,
    value: val === undefined ? '' : val,
    onClick: click // onBlur={e => toggle || (toggle = true)}

  }, props));
}, function (prevProps, nextProps) {
  if (prevProps.row === nextProps.row) return true;
  return false;
});
var Checkbox2 = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_10__["default"], props);
}, function (prevProps, nextProps) {
  if (prevProps.checked === nextProps.checked) return true;
  return false;
});
var EnhancedTableToolbar2 = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EnhancedTableToolbar, props);
}, function (prevProps, nextProps) {
  if (prevProps.numSelected === nextProps.numSelected && prevProps.toggle === nextProps.toggle) return true;
  return false;
});
var EnhancedTableHead2 = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EnhancedTableHead, props);
}, function (prevProps, nextProps) {
  if (prevProps.numSelected === nextProps.numSelected && prevProps.order === nextProps.order && prevProps.orderBy === nextProps.orderBy && prevProps.rowCount === nextProps.rowCount) return true;
  return false;
});

var debounce = function (_) {
  var time = null;
  return function (domain, data) {
    clearTimeout(time);
    time = setTimeout(function () {
      var fn = function fn(sty, def, mid) {
        return {
          sty: sty,
          def: def,
          mid: mid
        };
      };

      var arr = ['sty', 'def', 'mid'].map(function (name) {
        return data.reduce(function (acc, v) {
          return v[name] ? acc.concat(v[name]) : acc;
        }, []);
      }); // arr = arr.map(v => [...new Set(v)]);
      // console.log(arr);

      var result = fn.apply(void 0, _toConsumableArray(arr));
      console.log('result', _defineProperty({}, domain, result));
      chrome.storage.sync.set(_defineProperty({}, domain, result));
    }, 500);
  };
}();

var createData = function createData(sty, def, mid, id) {
  return {
    sty: sty,
    def: def,
    mid: mid,
    id: id
  };
};

function EnhancedTable(_ref2) {
  var domain = _ref2.domain,
      dataAll = _ref2.data;
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('asc'),
      _useState4 = _slicedToArray(_useState3, 2),
      order = _useState4[0],
      setOrder = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('calories'),
      _useState6 = _slicedToArray(_useState5, 2),
      orderBy = _useState6[0],
      setOrderBy = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState8 = _slicedToArray(_useState7, 2),
      selected = _useState8[0],
      setSelected = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState10 = _slicedToArray(_useState9, 2),
      toggle = _useState10[0],
      setToggle = _useState10[1];

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);

  var handleRequestSort = function handleRequestSort(event, property) {
    var isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
    setData(function (data) {
      return _toConsumableArray(data).reverse();
    });
    console.log('reverse');
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function (_) {
    if (dataAll && dataAll[domain]) {
      var _dataAll$domain = dataAll[domain],
          sty = _dataAll$domain.sty,
          def = _dataAll$domain.def,
          mid = _dataAll$domain.mid;
      var i = Object.values(dataAll[domain]).reduce(function (acc, v) {
        return v.length > acc ? acc = v.length : acc;
      }, 0);

      var rows = _toConsumableArray(Array(i)).map(function (v, i) {
        return createData(sty[i] || '', def[i] || '', mid[i] || '', i);
      });

      setData(rows); // console.log(rows);
    }
  }, [domain, dataAll]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function (_) {
    if (ref.current) {
      ref.current = false;
      return;
    }

    !data.length && chrome.storage.sync.remove(domain);
    console.log('之后', data);
    debounce(domain, data);
  }, [data]);

  var handleSelectAllClick = function handleSelectAllClick(event) {
    console.log('event.target.checked', event.target.checked);

    if (event.target.checked) {
      var newSelecteds = data.map(function (n) {
        return n.id;
      });
      console.log(newSelecteds);
      setSelected(newSelecteds);
      return;
    }

    setSelected([]);
  };

  var handleClick = function handleClick(event, name) {
    selected.includes(name) ? setSelected(selected.filter(function (v) {
      return v !== name;
    })) : setSelected(selected.concat(name));
  };

  var isSelected = function isSelected(name) {
    return selected.indexOf(name) !== -1;
  };

  var remove = function remove(_) {
    setData(function (data) {
      return data.filter(function (v) {
        return !selected.includes(v.id);
      });
    });
    setSelected([]);
  };

  var add = function add(_) {
    var a = createData(undefined, undefined, undefined, Date.now());
    setData(function (data) {
      return data.concat(a);
    });
  };

  var edit = function edit(field, row) {
    return function (e) {
      var val = e.target.value;

      var newRow = _objectSpread({}, row, _defineProperty({}, field, val));

      setData(function (data) {
        return data.map(function (v) {
          return v === row ? newRow : v;
        });
      }); // console.log('edit:', data.map(v => (v === row ? newRow : v)));

      console.log('是否重复 => ', data.map(function (v) {
        return v[field];
      }).includes(val));
    };
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.paper
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EnhancedTableToolbar2, {
    numSelected: selected.length,
    remove: remove,
    add: add,
    toggle: toggle,
    setToggle: setToggle
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.tableWrapper
  }, toggle ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.table,
    size: "medium"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EnhancedTableHead2, {
    numSelected: selected.length,
    order: order,
    orderBy: orderBy,
    onSelectAllClick: handleSelectAllClick,
    onRequestSort: handleRequestSort,
    rowCount: data.length
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__["default"], null, data.length ? data.map(function (row, i) {
    var isItemSelected = isSelected(row.id);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__["default"], {
      hover: true,
      onClick: function onClick(e) {
        return handleClick(e, row.id);
      },
      key: i,
      selected: isItemSelected
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
      padding: "checkbox"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Checkbox2, {
      checked: isItemSelected
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
      scope: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputMe, {
      val: row.sty,
      onChange: edit('sty', row),
      row: row
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
      align: "center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputMe, {
      val: row.def,
      onChange: edit('def', row),
      row: row
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
      align: "center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputMe, {
      val: row.mid,
      onChange: edit('mid', row),
      row: row
    })));
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
    colSpan: 4
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    align: "center",
    variant: "subtitle2",
    color: "textSecondary"
  }, "\u6CA1\u6709\u6570\u636E"))))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Css__WEBPACK_IMPORTED_MODULE_17__["default"], {
    domain: domain,
    dataAll: dataAll
  })));
}

/***/ }),

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    root: {
      padding: 10,
      width: 150
    },
    button: {
      marginBottom: 8
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (function (_) {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState2 = _slicedToArray(_useState, 2),
      once = _useState2[0],
      setOnce = _useState2[1];

  var Selection = function Selection(e) {
    chrome.tabs.getSelected(function (tab) {
      chrome.tabs.executeScript(tab.id, {
        file: 'selector.js',
        runAt: 'document_start'
      });
    });
    setOnce(false);
    window.close();
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {// Selection();
  }, []);

  var clear = function clear() {
    chrome.storage.sync.clear(console.log.bind(console, 'Clear'));
    chrome.tabs.getSelected(function (tab) {
      chrome.tabs.executeScript(tab.id, {
        code: "window.location.reload();",
        runAt: 'document_start'
      });
    });
  };

  var stop = function stop() {// chrome.tabs.query({ active: true, currentWindow: true }, tab => {
    //   chrome.tabs.sendMessage(tab[0].id, 'NOTRANSLATE');
    // });
    // chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    //   chrome.tabs.reload(tabs[0].id);
    // });
    // chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    //   chrome.tabs.update(tabs[0].id, { url: tabs[0].url });
    // });
    // chrome.tabs.query({ active: true, currentWindow: true }, function(arrayOfTabs) {
    //   var code = 'window.location.reload();';
    //   chrome.tabs.executeScript(arrayOfTabs[0].id, { code: code });
    // });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    color: "primary",
    variant: "contained",
    fullWidth: true,
    className: classes.button,
    onClick: once ? Selection : null
  }, "\u7FFB\u8BD1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    color: "secondary",
    variant: "contained",
    fullWidth: true,
    className: classes.button,
    onClick: stop
  }, "\u4E0D\u7FFB\u8BD1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    color: "secondary",
    variant: "contained",
    fullWidth: true,
    onClick: clear
  }, "\u6E05\u7A7A"));
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ "./src/components/App.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/colors/blue */ "./node_modules/@material-ui/core/colors/blue.js");
/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_6__);







var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["createMuiTheme"])({
  palette: {
    primary: _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_6___default.a
  }
});
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
  theme: theme
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_2__["default"], null)), document.getElementById('root'));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL09wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3B0aW9uc1BhZ2UvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL09wdGlvbnNQYWdlL2NvbXBvbmVudHMvQ3NzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9jb21wb25lbnRzL0Nzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9jb21wb25lbnRzL1NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9jb21wb25lbnRzL1RhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BvcHVwLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhhc2giLCJ0aGVtZSIsImNyZWF0ZU11aVRoZW1lIiwicGFsZXR0ZSIsInByaW1hcnkiLCJibHVlIiwic2Vjb25kYXJ5IiwiT3B0aW9ucyIsIl8iLCJkcmF3ZXJXaWR0aCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290IiwiZGlzcGxheSIsImFwcEJhciIsIndpZHRoIiwibWFyZ2luTGVmdCIsImRyYXdlciIsImZsZXhTaHJpbmsiLCJvdmVyZmxvdyIsImRyYXdlclBhcGVyIiwidG9vbGJhciIsIm1peGlucyIsImNvbnRlbnQiLCJmbGV4R3JvdyIsImJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmQiLCJib3giLCJib3hTaXppbmciLCJwb3NpdGlvbiIsInpJbmRleCIsInRyYW5zaXRpb24iLCJzaGFkb3ciLCJib3hTaGFkb3ciLCJ0eHQiLCJwYWRkaW5nTGVmdCIsIlBlcm1hbmVudERyYXdlckxlZnQiLCJjbGFzc2VzIiwidXNlU3RhdGUiLCJkb21haW4iLCJzZXREb21haW4iLCJzZXRGaWx0ZXIiLCJyZWYiLCJ1c2VSZWYiLCJzY3JvbGwiLCJlIiwidGFyZ2V0Iiwic2Nyb2xsVG9wIiwiY3VycmVudCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImN1cnJlbnREYXRhIiwic2V0Q3VycmVudERhdGEiLCJDaGFuZ2UiLCJjaHJvbWUiLCJzdG9yYWdlIiwic3luYyIsImdldCIsImQiLCJjb25zb2xlIiwibG9nIiwiT2JqZWN0Iiwia2V5cyIsImRhdGEiLCJ1c2VFZmZlY3QiLCJvbkNoYW5nZWQiLCJhZGRMaXN0ZW5lciIsImNoYW5nZXMiLCJhcmVhTmFtZSIsImdldEN1cnJlbnREYXRhIiwicGFwZXIiLCJmaWx0ZXIiLCJ2IiwiaW5jbHVkZXMiLCJtYXAiLCJpIiwiY29udGFpbmVyIiwiZmxleFdyYXAiLCJtYXhXaWR0aCIsIm1hcmdpbiIsInRleHRGaWVsZCIsInNwYWNpbmciLCJsYXN0IiwibWFyZ2luQm90dG9tIiwiZGVib3VuY2UiLCJ0aW1lIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsIk91dGxpbmVkVGV4dEZpZWxkcyIsImRhdGFBbGwiLCJjb2RlIiwiZ2xvYmFsQ3NzIiwic2V0R2xvYmFsQ3NzIiwibG9jYWxDc3MiLCJzZXRMb2NhbENzcyIsInNldCIsImNzcyIsInZhbHVlIiwic2VhcmNoIiwic2VhcmNoSWNvbiIsImhlaWdodCIsInBvaW50ZXJFdmVudHMiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJpbnB1dFJvb3QiLCJjb2xvciIsImlucHV0SW5wdXQiLCJwYWRkaW5nIiwiaW5wdXQiLCJTZWFyY2hBcHBCYXIiLCJ0cmltIiwidXNlVG9vbGJhclN0eWxlcyIsImFic29sdXRlIiwiYm90dG9tIiwicmlnaHQiLCJzcGFjZXIiLCJ0b3AiLCJ0YWJsZSIsIm1pbldpZHRoIiwidGFibGVXcmFwcGVyIiwib3ZlcmZsb3dYIiwiaGVhZFJvd3MiLCJpZCIsIm51bWVyaWMiLCJsYWJlbCIsIkVuaGFuY2VkVGFibGVUb29sYmFyIiwicHJvcHMiLCJudW1TZWxlY3RlZCIsInRvZ2dsZSIsInNldFRvZ2dsZSIsIkVuaGFuY2VkVGFibGVIZWFkIiwib25TZWxlY3RBbGxDbGljayIsIm9yZGVyIiwib3JkZXJCeSIsInJvd0NvdW50Iiwib25SZXF1ZXN0U29ydCIsImNyZWF0ZVNvcnRIYW5kbGVyIiwicHJvcGVydHkiLCJldmVudCIsInJvdyIsInVzZVN0eWxlczIiLCJib3JkZXJCb3R0b21Db2xvciIsIklucHV0TWUiLCJSZWFjdCIsIm1lbW8iLCJ2YWwiLCJjbGljayIsInN0b3BQcm9wYWdhdGlvbiIsInVuZGVmaW5lZCIsInByZXZQcm9wcyIsIm5leHRQcm9wcyIsIkNoZWNrYm94MiIsImNoZWNrZWQiLCJFbmhhbmNlZFRhYmxlVG9vbGJhcjIiLCJFbmhhbmNlZFRhYmxlSGVhZDIiLCJmbiIsInN0eSIsImRlZiIsIm1pZCIsImFyciIsIm5hbWUiLCJyZWR1Y2UiLCJhY2MiLCJjb25jYXQiLCJyZXN1bHQiLCJjcmVhdGVEYXRhIiwiRW5oYW5jZWRUYWJsZSIsInNldERhdGEiLCJzZXRPcmRlciIsInNldE9yZGVyQnkiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiaGFuZGxlUmVxdWVzdFNvcnQiLCJpc0Rlc2MiLCJyZXZlcnNlIiwidmFsdWVzIiwibGVuZ3RoIiwicm93cyIsIkFycmF5IiwiaGFuZGxlU2VsZWN0QWxsQ2xpY2siLCJuZXdTZWxlY3RlZHMiLCJuIiwiaGFuZGxlQ2xpY2siLCJpc1NlbGVjdGVkIiwiaW5kZXhPZiIsImEiLCJEYXRlIiwibm93IiwiZWRpdCIsImZpZWxkIiwibmV3Um93IiwiaXNJdGVtU2VsZWN0ZWQiLCJidXR0b24iLCJvbmNlIiwic2V0T25jZSIsIlNlbGVjdGlvbiIsInRhYnMiLCJnZXRTZWxlY3RlZCIsInRhYiIsImV4ZWN1dGVTY3JpcHQiLCJmaWxlIiwicnVuQXQiLCJjbG9zZSIsImNsZWFyIiwiYmluZCIsInN0b3AiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBZ0IsdUJBQXVC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O0FBRUUsV0FBTyxFQUFDLFdBRlY7QUFHRSxhQUFTLE1BSFg7QUFJRSxhQUFTLEVBQUV5QixPQUFPLENBQUM0SixNQUpyQjtBQUtFLFdBQU8sRUFBRUMsSUFBSSxHQUFHRSxTQUFILEdBQWU7QUFMOUIsb0JBREYsRUFVRSwyREFBQyxnRUFBRDtBQUFRLFNBQUssRUFBQyxXQUFkO0FBQTBCLFdBQU8sRUFBQyxXQUFsQztBQUE4QyxhQUFTLE1BQXZEO0FBQXdELGFBQVMsRUFBRS9KLE9BQU8sQ0FBQzRKLE1BQTNFO0FBQW1GLFdBQU8sRUFBRWE7QUFBNUYsMEJBVkYsRUFhRSwyREFBQyxnRUFBRDtBQUFRLFNBQUssRUFBQyxXQUFkO0FBQTBCLFdBQU8sRUFBQyxXQUFsQztBQUE4QyxhQUFTLE1BQXZEO0FBQXdELFdBQU8sRUFBRUY7QUFBakUsb0JBYkYsQ0FERjtBQW1CRCxDQTlERCxFOzs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNM00sS0FBSyxHQUFHQywrRUFBYyxDQUFDO0FBQzNCQyxTQUFPLEVBQUU7QUFDUEMsV0FBTyxFQUFFQyxvRUFBSUE7QUFETjtBQURrQixDQUFELENBQTVCO0FBTUEwTSxnREFBUSxDQUFDQyxNQUFULENBQ0UsMkRBQUMsaUVBQUQ7QUFBZSxPQUFLLEVBQUUvTTtBQUF0QixHQUNFLDJEQUFDLHFFQUFELE9BREYsRUFFRSwyREFBQyx1REFBRCxPQUZGLENBREYsRUFLRWdOLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUxGLEUiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LmpzXCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBvcHVwIGZyb20gJy4vUG9wdXAnO1xuaW1wb3J0IE9wdGlvbnMgZnJvbSAnLi9PcHRpb25zJztcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICByZXR1cm4gPD57d2luZG93LmxvY2F0aW9uLmhhc2ggPT09ICcjcG9wdXAnID8gPFBvcHVwIC8+IDogPE9wdGlvbnMgLz59PC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAndHlwZWZhY2Utcm9ib3RvJztcbmltcG9ydCBBcHAgZnJvbSAnLi9PcHRpb25zUGFnZS9BcHAnO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCB7IGNyZWF0ZU11aVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBibHVlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9ibHVlJztcblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBwcmltYXJ5OiBibHVlLFxuICAgIHNlY29uZGFyeTogYmx1ZVxuICB9XG59KTtcblxuY29uc3QgT3B0aW9ucyA9IF8gPT4gKFxuICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgIDxDc3NCYXNlbGluZSAvPlxuICAgIDxBcHAgLz5cbiAgPC9UaGVtZVByb3ZpZGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgT3B0aW9ucztcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBEcmF3ZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyJztcbmltcG9ydCBMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3QnO1xuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xuaW1wb3J0IFRhYmxlIGZyb20gJy4vY29tcG9uZW50cy9UYWJsZSc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vY29tcG9uZW50cy9TZWFyY2gnO1xuXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDMwMDtcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdmbGV4J1xuICB9LFxuICBhcHBCYXI6IHtcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcbiAgICBtYXJnaW5MZWZ0OiBkcmF3ZXJXaWR0aFxuICB9LFxuICBkcmF3ZXI6IHtcbiAgICB3aWR0aDogZHJhd2VyV2lkdGgsXG4gICAgZmxleFNocmluazogMCxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgfSxcbiAgZHJhd2VyUGFwZXI6IHtcbiAgICB3aWR0aDogZHJhd2VyV2lkdGhcbiAgfSxcbiAgdG9vbGJhcjogdGhlbWUubWl4aW5zLnRvb2xiYXIsXG4gIGNvbnRlbnQ6IHtcbiAgICBmbGV4R3JvdzogMSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5kZWZhdWx0XG4gIH0sXG4gIGJveDoge1xuICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB6SW5kZXg6IDEwLFxuICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCAtIDUsXG4gICAgdHJhbnNpdGlvbjogJ2JveC1zaGFkb3cgMC4zcyBlYXNlLWluLW91dCdcbiAgfSxcbiAgc2hhZG93OiB7XG4gICAgYm94U2hhZG93OiAnMHB4IDJweCA0cHggLTFweCAjMDAwMDAwMzMsIDBweCA0cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMTQpLCAwcHggMXB4IDEwcHggMHB4IHJnYmEoMCwwLDAsMC4xMiknXG4gIH0sXG4gIHR4dDoge1xuICAgIHBhZGRpbmdMZWZ0OiA4XG4gIH1cbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGVybWFuZW50RHJhd2VyTGVmdCgpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbZG9tYWluLCBzZXREb21haW5dID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdHh0LCBzZXRGaWx0ZXJdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3Qgc2Nyb2xsID0gZSA9PiB7XG4gICAgZS50YXJnZXQuc2Nyb2xsVG9wID4gMzAgJiYgcmVmLmN1cnJlbnQuY2xhc3NMaXN0LmFkZChjbGFzc2VzLnNoYWRvdyk7XG4gICAgZS50YXJnZXQuc2Nyb2xsVG9wIDwgMzAgJiYgcmVmLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc2VzLnNoYWRvdyk7XG4gIH07XG4gIGNvbnN0IFtjdXJyZW50RGF0YSwgc2V0Q3VycmVudERhdGFdID0gdXNlU3RhdGUoe30pO1xuXG4gIGNvbnN0IENoYW5nZSA9IGRvbWFpbiA9PiB7XG4gICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQobnVsbCwgZCA9PiB7XG4gICAgICBjb25zb2xlLmxvZygn5Yid5aeL5YyWJywgZCk7XG4gICAgICBzZXREb21haW4oT2JqZWN0LmtleXMoZCkpO1xuICAgICAgc2V0Q3VycmVudERhdGEoeyBkb21haW4sIGRhdGE6IGQgfSk7XG4gICAgICAvLyBjb25zb2xlLmxvZygncHJvcHMnLCB7IGRvbWFpbiwgZGF0YTogZCB9KTtcbiAgICB9KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIENoYW5nZSgpO1xuICAgIGNocm9tZS5zdG9yYWdlLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcigoY2hhbmdlcywgYXJlYU5hbWUpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKC4uLk9iamVjdC5rZXlzKGNoYW5nZXMpKTtcbiAgICAgIENoYW5nZSguLi5PYmplY3Qua2V5cyhjaGFuZ2VzKSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnREYXRhKTtcbiAgfSwgW2N1cnJlbnREYXRhXSk7XG5cbiAgY29uc3QgZ2V0Q3VycmVudERhdGEgPSBkb21haW4gPT4ge1xuICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KG51bGwsIGQgPT4ge1xuICAgICAgc2V0Q3VycmVudERhdGEoeyBkb21haW4sIGRhdGE6IGQgfSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyh7IGRvbWFpbiwgZGF0YTogZCB9KTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPERyYXdlclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VyfVxuICAgICAgICB2YXJpYW50PSdwZXJtYW5lbnQnXG4gICAgICAgIGNsYXNzZXM9e3tcbiAgICAgICAgICBwYXBlcjogY2xhc3Nlcy5kcmF3ZXJQYXBlclxuICAgICAgICB9fVxuICAgICAgICBhbmNob3I9J2xlZnQnXG4gICAgICAgIG9uU2Nyb2xsPXtzY3JvbGx9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJveH0gcmVmPXtyZWZ9PlxuICAgICAgICAgIDxTZWFyY2ggc2V0RmlsdGVyPXtzZXRGaWx0ZXJ9IC8+XG4gICAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhcn0gLz5cblxuICAgICAgICA8TGlzdD5cbiAgICAgICAgICB7ZG9tYWluXG4gICAgICAgICAgICAuZmlsdGVyKHYgPT4gdi5pbmNsdWRlcyh0eHQpKVxuICAgICAgICAgICAgLm1hcCgodiwgaSkgPT4gKFxuICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGtleT17aX0gb25DbGljaz17ZSA9PiBnZXRDdXJyZW50RGF0YSh2KX0+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXt2fSBjbGFzc05hbWU9e2NsYXNzZXMudHh0fSAvPlxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvTGlzdD5cbiAgICAgIDwvRHJhd2VyPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgIDxUYWJsZSB7Li4uY3VycmVudERhdGF9IC8+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xuaW1wb3J0ICcuL0Nzcy5jc3MnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIGNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgIG1heFdpZHRoOiA5NjAsXG4gICAgbWFyZ2luOiAnYXV0bydcbiAgfSxcbiAgdGV4dEZpZWxkOiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDQsIDEpXG4gIH0sXG4gIGxhc3Q6IHtcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoOClcbiAgfVxufSkpO1xuXG5jb25zdCBkZWJvdW5jZSA9ICgoKSA9PiB7XG4gIGxldCB0aW1lID0gbnVsbDtcbiAgcmV0dXJuIChkb21haW4sIGRhdGEpID0+IHtcbiAgICBjbGVhclRpbWVvdXQodGltZSk7XG4gICAgdGltZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coZG9tYWluLCBkYXRhKTtcbiAgICAgIC8vIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHsgJzEyNy4wLjAuMSc6IHsgY3NzOiAnZHNkc2RmYXNmZGZyMzQyMzQzMjQyMzQyMzQzJyB9IH0pO1xuICAgIH0sIDUwMCk7XG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPdXRsaW5lZFRleHRGaWVsZHMoeyBkb21haW4sIGRhdGFBbGwgfSkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IGNvZGUgPSBgZm9udC1mYW1pbHk6ICdGaXJhIENvZGUgUmVndWxhcicsIENvbnNvbGFzICFpbXBvcnRhbnQ7XFxuZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7YDtcbiAgY29uc3QgW2dsb2JhbENzcywgc2V0R2xvYmFsQ3NzXSA9IHVzZVN0YXRlKGNvZGUpO1xuICBjb25zdCBbbG9jYWxDc3MsIHNldExvY2FsQ3NzXSA9IHVzZVN0YXRlKGNvZGUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2cobG9jYWxDc3MpO1xuICAgIC8vIGRlYm91bmNlKGRvbWFpbiwgeyAuLi5kYXRhQWxsW2RvbWFpbl0sIGNzczogbG9jYWxDc3MgfSk7XG4gICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoeyBbZG9tYWluXTogeyAuLi5kYXRhQWxsW2RvbWFpbl0sIGNzczogbG9jYWxDc3MgfSB9KTtcbiAgICAvLyBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7IFtkb21haW5dOiB7IC4uLmRhdGFBbGxbZG9tYWluXSwgY3NzOiBsb2NhbENzcyB9IH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKCdjY2MnLCBkb21haW4sIGRhdGFBbGwpO1xuICAgIC8vIGNvbnNvbGUubG9nKHsgLi4uZGF0YUFsbFtkb21haW5dLCBjc3M6IGxvY2FsQ3NzIH0pO1xuICB9LCBbbG9jYWxDc3NdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGdsb2JhbENzcyk7XG4gIH0sIFtnbG9iYWxDc3NdKTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgbWF4V2lkdGg9J21kJz5cbiAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgbGFiZWw9e2RvbWFpbiB8fCAn5pyq6YCJ5oupJ31cbiAgICAgICAgbXVsdGlsaW5lXG4gICAgICAgIHJvd3M9JzgnXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XG4gICAgICAgIG1hcmdpbj0nbm9ybWFsJ1xuICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcbiAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgIHZhbHVlPXtsb2NhbENzc31cbiAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0TG9jYWxDc3MoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICBpZD0ndGV4dCdcbiAgICAgIC8+XG5cbiAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgbGFiZWw9J0dsb2JhbCdcbiAgICAgICAgbXVsdGlsaW5lXG4gICAgICAgIHJvd3M9JzgnXG4gICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy50ZXh0RmllbGR9ICR7Y2xhc3Nlcy5sYXN0fWB9XG4gICAgICAgIG1hcmdpbj0nbm9ybWFsJ1xuICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcbiAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgIHZhbHVlPXtnbG9iYWxDc3N9XG4gICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEdsb2JhbENzcyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIGlkPSd0ZXh0J1xuICAgICAgLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZWFyY2gnO1xuaW1wb3J0IElucHV0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0JztcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBmbGV4R3JvdzogMVxuICB9LFxuICBzZWFyY2g6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICB9LFxuICBzZWFyY2hJY29uOiB7XG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoMy41KSxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xuICB9LFxuICBpbnB1dFJvb3Q6IHtcbiAgICBjb2xvcjogJ2luaGVyaXQnXG4gIH0sXG4gIGlucHV0SW5wdXQ6IHtcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEsIDEsIDEsIDUpLFxuICAgIHdpZHRoOiAnMTAwJSdcbiAgfSxcbiAgaW5wdXQ6IHtcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSlcbiAgfVxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2hBcHBCYXIoeyBzZXRGaWx0ZXIgfSkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8VG9vbGJhciBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2h9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hJY29ufT5cbiAgICAgICAgICA8U2VhcmNoSWNvbiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgcGxhY2Vob2xkZXI9J1NlYXJjaOKApidcbiAgICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgICByb290OiBjbGFzc2VzLmlucHV0Um9vdCxcbiAgICAgICAgICAgIGlucHV0OiBjbGFzc2VzLmlucHV0SW5wdXRcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEZpbHRlcihlLnRhcmdldC52YWx1ZS50cmltKCkpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9Ub29sYmFyPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFRhYmxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlJztcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5JztcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkJztcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XG5pbXBvcnQgVGFibGVTb3J0TGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVTb3J0TGFiZWwnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94JztcbmltcG9ydCBUb29sdGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXAnO1xuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0RlbGV0ZSc7XG5pbXBvcnQgQWRkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkJztcbmltcG9ydCBGYWIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRmFiJztcbmltcG9ydCBJbnB1dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dCc7XG5pbXBvcnQgU3dpdGNoIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N3aXRjaCc7XG5pbXBvcnQgQ3NzIGZyb20gJy4vQ3NzJztcblxuY29uc3QgdXNlVG9vbGJhclN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgYWJzb2x1dGU6IHtcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICBib3R0b206IHRoZW1lLnNwYWNpbmcoMTApLFxuICAgIHJpZ2h0OiB0aGVtZS5zcGFjaW5nKDUpLFxuICAgIHpJbmRleDogMjBcbiAgfSxcbiAgc3BhY2VyOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIHJpZ2h0OiAyMCxcbiAgICB6SW5kZXg6IDIwXG4gIH1cbn0pKTtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgd2lkdGg6ICcxMDAlJ1xuICB9LFxuICBwYXBlcjoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpXG4gIH0sXG4gIHRhYmxlOiB7XG4gICAgbWluV2lkdGg6IDc1MFxuICB9LFxuICB0YWJsZVdyYXBwZXI6IHtcbiAgICBvdmVyZmxvd1g6ICdhdXRvJ1xuICB9XG59KSk7XG5cbmNvbnN0IGhlYWRSb3dzID0gW1xuICB7IGlkOiAnc3R5JywgbnVtZXJpYzogZmFsc2UsIGxhYmVsOiAn6L+Q55So5qC35byPJyB9LFxuICB7IGlkOiAnZGVmJywgbnVtZXJpYzogdHJ1ZSwgbGFiZWw6ICfkuI3ov5DnlKjmoLflvI8nIH0sXG4gIHsgaWQ6ICdtaWQnLCBudW1lcmljOiB0cnVlLCBsYWJlbDogJ+W8uuWItue/u+ivkScgfVxuXTtcblxuY29uc3QgRW5oYW5jZWRUYWJsZVRvb2xiYXIgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VUb29sYmFyU3R5bGVzKCk7XG4gIGNvbnN0IHsgbnVtU2VsZWN0ZWQsIHJlbW92ZSwgYWRkLCB0b2dnbGUsIHNldFRvZ2dsZSB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3RvZ2dsZSAmJlxuICAgICAgICAobnVtU2VsZWN0ZWQgPT09IDAgPyAoXG4gICAgICAgICAgPFRvb2x0aXAgdGl0bGU9J0FkZCc+XG4gICAgICAgICAgICA8RmFiIGNvbG9yPSdwcmltYXJ5JyBjbGFzc05hbWU9e2NsYXNzZXMuYWJzb2x1dGV9IG9uQ2xpY2s9e2FkZH0+XG4gICAgICAgICAgICAgIDxBZGRJY29uIC8+XG4gICAgICAgICAgICA8L0ZhYj5cbiAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFRvb2x0aXAgdGl0bGU9J0RlbGV0ZSc+XG4gICAgICAgICAgICA8RmFiIGNvbG9yPSdwcmltYXJ5JyBjbGFzc05hbWU9e2NsYXNzZXMuYWJzb2x1dGV9IG9uQ2xpY2s9e3JlbW92ZX0+XG4gICAgICAgICAgICAgIDxEZWxldGVJY29uIC8+XG4gICAgICAgICAgICA8L0ZhYj5cbiAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICkpfVxuICAgICAgPFN3aXRjaFxuICAgICAgICBjb2xvcj0ncHJpbWFyeSdcbiAgICAgICAgY2hlY2tlZD17IXRvZ2dsZX1cbiAgICAgICAgb25DaGFuZ2U9e18gPT4gc2V0VG9nZ2xlKGQgPT4gIWQpfVxuICAgICAgICB2YWx1ZT0nY2hlY2tlZEEnXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFjZXJ9XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgRW5oYW5jZWRUYWJsZUhlYWQgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgb25TZWxlY3RBbGxDbGljaywgb3JkZXIsIG9yZGVyQnksIG51bVNlbGVjdGVkLCByb3dDb3VudCwgb25SZXF1ZXN0U29ydCB9ID0gcHJvcHM7XG4gIGNvbnN0IGNyZWF0ZVNvcnRIYW5kbGVyID0gcHJvcGVydHkgPT4gZXZlbnQgPT4gb25SZXF1ZXN0U29ydChldmVudCwgcHJvcGVydHkpO1xuXG4gIHJldHVybiAoXG4gICAgPFRhYmxlSGVhZD5cbiAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgPFRhYmxlQ2VsbCBwYWRkaW5nPSdjaGVja2JveCc+XG4gICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICBpbmRldGVybWluYXRlPXtudW1TZWxlY3RlZCA+IDAgJiYgbnVtU2VsZWN0ZWQgPCByb3dDb3VudH1cbiAgICAgICAgICAgIGNoZWNrZWQ9eyEhcm93Q291bnQgJiYgbnVtU2VsZWN0ZWQgPT09IHJvd0NvdW50fVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uU2VsZWN0QWxsQ2xpY2t9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9UYWJsZUNlbGw+XG5cbiAgICAgICAge2hlYWRSb3dzLm1hcCgocm93LCBpKSA9PiAoXG4gICAgICAgICAgPFRhYmxlQ2VsbCBrZXk9e2l9IGFsaWduPXtyb3cubnVtZXJpYyA/ICdjZW50ZXInIDogJ2xlZnQnfSBzb3J0RGlyZWN0aW9uPXtvcmRlckJ5ID09PSByb3cuaWQgPyBvcmRlciA6IGZhbHNlfT5cbiAgICAgICAgICAgIDxUYWJsZVNvcnRMYWJlbCBhY3RpdmU9e29yZGVyQnkgPT09IHJvdy5pZH0gZGlyZWN0aW9uPXtvcmRlcn0gb25DbGljaz17Y3JlYXRlU29ydEhhbmRsZXIocm93LmlkKX0+XG4gICAgICAgICAgICAgIHtyb3cubGFiZWx9XG4gICAgICAgICAgICA8L1RhYmxlU29ydExhYmVsPlxuICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICApKX1cbiAgICAgIDwvVGFibGVSb3c+XG4gICAgPC9UYWJsZUhlYWQ+XG4gICk7XG59O1xuXG5jb25zdCB1c2VTdHlsZXMyID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgJyY6OmJlZm9yZSc6IHtcbiAgICAgIGJvcmRlckJvdHRvbUNvbG9yOiAnIzAwMDAwMDAwJ1xuICAgIH0sXG4gICAgJyY6aG92ZXI6bm90KC5NdWktZGlzYWJsZWQpOjpiZWZvcmUnOiB7XG4gICAgICBib3JkZXJCb3R0b21Db2xvcjogJyMwMDAwMDAwMCdcbiAgICB9XG4gIH1cbn0pKTtcblxuY29uc3QgSW5wdXRNZSA9IFJlYWN0Lm1lbW8oXG4gICh7IHZhbCwgcm93LCAuLi5wcm9wcyB9KSA9PiB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlczIoKTtcbiAgICAvLyBsZXQgdG9nZ2xlID0gdHJ1ZTtcbiAgICBjb25zdCBjbGljayA9IGUgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIC8vICh0b2dnbGUgPSAhdG9nZ2xlKSAmJiBlLnRhcmdldC5ibHVyKCk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8SW5wdXRcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9XG4gICAgICAgIHZhbHVlPXt2YWwgPT09IHVuZGVmaW5lZCA/ICcnIDogdmFsfVxuICAgICAgICBvbkNsaWNrPXtjbGlja31cbiAgICAgICAgLy8gb25CbHVyPXtlID0+IHRvZ2dsZSB8fCAodG9nZ2xlID0gdHJ1ZSl9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgIC8+XG4gICAgKTtcbiAgfSxcbiAgKHByZXZQcm9wcywgbmV4dFByb3BzKSA9PiB7XG4gICAgaWYgKHByZXZQcm9wcy5yb3cgPT09IG5leHRQcm9wcy5yb3cpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuKTtcblxuY29uc3QgQ2hlY2tib3gyID0gUmVhY3QubWVtbyhcbiAgcHJvcHMgPT4ge1xuICAgIHJldHVybiA8Q2hlY2tib3ggey4uLnByb3BzfSAvPjtcbiAgfSxcbiAgKHByZXZQcm9wcywgbmV4dFByb3BzKSA9PiB7XG4gICAgaWYgKHByZXZQcm9wcy5jaGVja2VkID09PSBuZXh0UHJvcHMuY2hlY2tlZCkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4pO1xuXG5jb25zdCBFbmhhbmNlZFRhYmxlVG9vbGJhcjIgPSBSZWFjdC5tZW1vKFxuICBwcm9wcyA9PiA8RW5oYW5jZWRUYWJsZVRvb2xiYXIgey4uLnByb3BzfSAvPixcbiAgKHByZXZQcm9wcywgbmV4dFByb3BzKSA9PiB7XG4gICAgaWYgKHByZXZQcm9wcy5udW1TZWxlY3RlZCA9PT0gbmV4dFByb3BzLm51bVNlbGVjdGVkICYmIHByZXZQcm9wcy50b2dnbGUgPT09IG5leHRQcm9wcy50b2dnbGUpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuKTtcbmNvbnN0IEVuaGFuY2VkVGFibGVIZWFkMiA9IFJlYWN0Lm1lbW8oXG4gIHByb3BzID0+IDxFbmhhbmNlZFRhYmxlSGVhZCB7Li4ucHJvcHN9IC8+LFxuICAocHJldlByb3BzLCBuZXh0UHJvcHMpID0+IHtcbiAgICBpZiAoXG4gICAgICBwcmV2UHJvcHMubnVtU2VsZWN0ZWQgPT09IG5leHRQcm9wcy5udW1TZWxlY3RlZCAmJlxuICAgICAgcHJldlByb3BzLm9yZGVyID09PSBuZXh0UHJvcHMub3JkZXIgJiZcbiAgICAgIHByZXZQcm9wcy5vcmRlckJ5ID09PSBuZXh0UHJvcHMub3JkZXJCeSAmJlxuICAgICAgcHJldlByb3BzLnJvd0NvdW50ID09PSBuZXh0UHJvcHMucm93Q291bnRcbiAgICApXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbik7XG5cbmNvbnN0IGRlYm91bmNlID0gKF8gPT4ge1xuICBsZXQgdGltZSA9IG51bGw7XG4gIHJldHVybiAoZG9tYWluLCBkYXRhKSA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWUpO1xuICAgIHRpbWUgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGZuID0gKHN0eSwgZGVmLCBtaWQpID0+ICh7IHN0eSwgZGVmLCBtaWQgfSk7XG4gICAgICBsZXQgYXJyID0gWydzdHknLCAnZGVmJywgJ21pZCddLm1hcChuYW1lID0+IGRhdGEucmVkdWNlKChhY2MsIHYpID0+ICh2W25hbWVdID8gYWNjLmNvbmNhdCh2W25hbWVdKSA6IGFjYyksIFtdKSk7XG4gICAgICAvLyBhcnIgPSBhcnIubWFwKHYgPT4gWy4uLm5ldyBTZXQodildKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGFycik7XG4gICAgICBsZXQgcmVzdWx0ID0gZm4oLi4uYXJyKTtcbiAgICAgIGNvbnNvbGUubG9nKCdyZXN1bHQnLCB7IFtkb21haW5dOiByZXN1bHQgfSk7XG4gICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7IFtkb21haW5dOiByZXN1bHQgfSk7XG4gICAgfSwgNTAwKTtcbiAgfTtcbn0pKCk7XG5cbmNvbnN0IGNyZWF0ZURhdGEgPSAoc3R5LCBkZWYsIG1pZCwgaWQpID0+ICh7IHN0eSwgZGVmLCBtaWQsIGlkIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFbmhhbmNlZFRhYmxlKHsgZG9tYWluLCBkYXRhOiBkYXRhQWxsIH0pIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtvcmRlciwgc2V0T3JkZXJdID0gdXNlU3RhdGUoJ2FzYycpO1xuICBjb25zdCBbb3JkZXJCeSwgc2V0T3JkZXJCeV0gPSB1c2VTdGF0ZSgnY2Fsb3JpZXMnKTtcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgcmVmID0gdXNlUmVmKHRydWUpO1xuXG4gIGNvbnN0IGhhbmRsZVJlcXVlc3RTb3J0ID0gKGV2ZW50LCBwcm9wZXJ0eSkgPT4ge1xuICAgIGNvbnN0IGlzRGVzYyA9IG9yZGVyQnkgPT09IHByb3BlcnR5ICYmIG9yZGVyID09PSAnZGVzYyc7XG4gICAgc2V0T3JkZXIoaXNEZXNjID8gJ2FzYycgOiAnZGVzYycpO1xuICAgIHNldE9yZGVyQnkocHJvcGVydHkpO1xuICAgIHNldERhdGEoZGF0YSA9PiBbLi4uZGF0YV0ucmV2ZXJzZSgpKTtcbiAgICBjb25zb2xlLmxvZygncmV2ZXJzZScpO1xuICB9O1xuXG4gIHVzZUVmZmVjdChcbiAgICBfID0+IHtcbiAgICAgIGlmIChkYXRhQWxsICYmIGRhdGFBbGxbZG9tYWluXSkge1xuICAgICAgICBsZXQgeyBzdHksIGRlZiwgbWlkIH0gPSBkYXRhQWxsW2RvbWFpbl07XG4gICAgICAgIGNvbnN0IGkgPSBPYmplY3QudmFsdWVzKGRhdGFBbGxbZG9tYWluXSkucmVkdWNlKChhY2MsIHYpID0+ICh2Lmxlbmd0aCA+IGFjYyA/IChhY2MgPSB2Lmxlbmd0aCkgOiBhY2MpLCAwKTtcbiAgICAgICAgY29uc3Qgcm93cyA9IFsuLi5BcnJheShpKV0ubWFwKCh2LCBpKSA9PiBjcmVhdGVEYXRhKHN0eVtpXSB8fCAnJywgZGVmW2ldIHx8ICcnLCBtaWRbaV0gfHwgJycsIGkpKTtcbiAgICAgICAgc2V0RGF0YShyb3dzKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocm93cyk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbZG9tYWluLCBkYXRhQWxsXVxuICApO1xuXG4gIHVzZUVmZmVjdChcbiAgICBfID0+IHtcbiAgICAgIGlmIChyZWYuY3VycmVudCkge1xuICAgICAgICByZWYuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAhZGF0YS5sZW5ndGggJiYgY2hyb21lLnN0b3JhZ2Uuc3luYy5yZW1vdmUoZG9tYWluKTtcbiAgICAgIGNvbnNvbGUubG9nKCfkuYvlkI4nLCBkYXRhKTtcbiAgICAgIGRlYm91bmNlKGRvbWFpbiwgZGF0YSk7XG4gICAgfSxcbiAgICBbZGF0YV1cbiAgKTtcblxuICBjb25zdCBoYW5kbGVTZWxlY3RBbGxDbGljayA9IGV2ZW50ID0+IHtcbiAgICBjb25zb2xlLmxvZygnZXZlbnQudGFyZ2V0LmNoZWNrZWQnLCBldmVudC50YXJnZXQuY2hlY2tlZCk7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jaGVja2VkKSB7XG4gICAgICBjb25zdCBuZXdTZWxlY3RlZHMgPSBkYXRhLm1hcChuID0+IG4uaWQpO1xuICAgICAgY29uc29sZS5sb2cobmV3U2VsZWN0ZWRzKTtcbiAgICAgIHNldFNlbGVjdGVkKG5ld1NlbGVjdGVkcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldFNlbGVjdGVkKFtdKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudCwgbmFtZSkgPT4ge1xuICAgIHNlbGVjdGVkLmluY2x1ZGVzKG5hbWUpID8gc2V0U2VsZWN0ZWQoc2VsZWN0ZWQuZmlsdGVyKHYgPT4gdiAhPT0gbmFtZSkpIDogc2V0U2VsZWN0ZWQoc2VsZWN0ZWQuY29uY2F0KG5hbWUpKTtcbiAgfTtcblxuICBjb25zdCBpc1NlbGVjdGVkID0gbmFtZSA9PiBzZWxlY3RlZC5pbmRleE9mKG5hbWUpICE9PSAtMTtcblxuICBjb25zdCByZW1vdmUgPSBfID0+IHtcbiAgICBzZXREYXRhKGRhdGEgPT4gZGF0YS5maWx0ZXIodiA9PiAhc2VsZWN0ZWQuaW5jbHVkZXModi5pZCkpKTtcbiAgICBzZXRTZWxlY3RlZChbXSk7XG4gIH07XG5cbiAgY29uc3QgYWRkID0gXyA9PiB7XG4gICAgY29uc3QgYSA9IGNyZWF0ZURhdGEodW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgRGF0ZS5ub3coKSk7XG4gICAgc2V0RGF0YShkYXRhID0+IGRhdGEuY29uY2F0KGEpKTtcbiAgfTtcbiAgY29uc3QgZWRpdCA9IChmaWVsZCwgcm93KSA9PiBlID0+IHtcbiAgICBjb25zdCB2YWwgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBjb25zdCBuZXdSb3cgPSB7IC4uLnJvdywgW2ZpZWxkXTogdmFsIH07XG4gICAgc2V0RGF0YShkYXRhID0+IGRhdGEubWFwKHYgPT4gKHYgPT09IHJvdyA/IG5ld1JvdyA6IHYpKSk7XG4gICAgLy8gY29uc29sZS5sb2coJ2VkaXQ6JywgZGF0YS5tYXAodiA9PiAodiA9PT0gcm93ID8gbmV3Um93IDogdikpKTtcbiAgICBjb25zb2xlLmxvZygn5piv5ZCm6YeN5aSNID0+ICcsIGRhdGEubWFwKHYgPT4gdltmaWVsZF0pLmluY2x1ZGVzKHZhbCkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XG4gICAgICA8RW5oYW5jZWRUYWJsZVRvb2xiYXIyXG4gICAgICAgIG51bVNlbGVjdGVkPXtzZWxlY3RlZC5sZW5ndGh9XG4gICAgICAgIHJlbW92ZT17cmVtb3ZlfVxuICAgICAgICBhZGQ9e2FkZH1cbiAgICAgICAgdG9nZ2xlPXt0b2dnbGV9XG4gICAgICAgIHNldFRvZ2dsZT17c2V0VG9nZ2xlfVxuICAgICAgLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGFibGVXcmFwcGVyfT5cbiAgICAgICAge3RvZ2dsZSA/IChcbiAgICAgICAgICA8VGFibGUgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYmxlfSBzaXplPSdtZWRpdW0nPlxuICAgICAgICAgICAgPEVuaGFuY2VkVGFibGVIZWFkMlxuICAgICAgICAgICAgICBudW1TZWxlY3RlZD17c2VsZWN0ZWQubGVuZ3RofVxuICAgICAgICAgICAgICBvcmRlcj17b3JkZXJ9XG4gICAgICAgICAgICAgIG9yZGVyQnk9e29yZGVyQnl9XG4gICAgICAgICAgICAgIG9uU2VsZWN0QWxsQ2xpY2s9e2hhbmRsZVNlbGVjdEFsbENsaWNrfVxuICAgICAgICAgICAgICBvblJlcXVlc3RTb3J0PXtoYW5kbGVSZXF1ZXN0U29ydH1cbiAgICAgICAgICAgICAgcm93Q291bnQ9e2RhdGEubGVuZ3RofVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPFRhYmxlQm9keT5cbiAgICAgICAgICAgICAge2RhdGEubGVuZ3RoID8gKFxuICAgICAgICAgICAgICAgIGRhdGEubWFwKChyb3csIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGlzSXRlbVNlbGVjdGVkID0gaXNTZWxlY3RlZChyb3cuaWQpO1xuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cgaG92ZXIgb25DbGljaz17ZSA9PiBoYW5kbGVDbGljayhlLCByb3cuaWQpfSBrZXk9e2l9IHNlbGVjdGVkPXtpc0l0ZW1TZWxlY3RlZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBwYWRkaW5nPSdjaGVja2JveCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3gyIGNoZWNrZWQ9e2lzSXRlbVNlbGVjdGVkfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzY29wZT0ncm93Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dE1lIHZhbD17cm93LnN0eX0gb25DaGFuZ2U9e2VkaXQoJ3N0eScsIHJvdyl9IHJvdz17cm93fSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249J2NlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRNZSB2YWw9e3Jvdy5kZWZ9IG9uQ2hhbmdlPXtlZGl0KCdkZWYnLCByb3cpfSByb3c9e3Jvd30gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPSdjZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TWUgdmFsPXtyb3cubWlkfSBvbkNoYW5nZT17ZWRpdCgnbWlkJywgcm93KX0gcm93PXtyb3d9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb2xTcGFuPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgYWxpZ249J2NlbnRlcicgdmFyaWFudD0nc3VidGl0bGUyJyBjb2xvcj0ndGV4dFNlY29uZGFyeSc+XG4gICAgICAgICAgICAgICAgICAgICAg5rKh5pyJ5pWw5o2uXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1RhYmxlQm9keT5cbiAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxDc3MgZG9tYWluPXtkb21haW59IGRhdGFBbGw9e2RhdGFBbGx9IC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L1BhcGVyPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgcGFkZGluZzogMTAsXG4gICAgd2lkdGg6IDE1MFxuICB9LFxuICBidXR0b246IHtcbiAgICBtYXJnaW5Cb3R0b206IDhcbiAgfVxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBfID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbb25jZSwgc2V0T25jZV0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBTZWxlY3Rpb24gPSBlID0+IHtcbiAgICBjaHJvbWUudGFicy5nZXRTZWxlY3RlZCh0YWIgPT4ge1xuICAgICAgY2hyb21lLnRhYnMuZXhlY3V0ZVNjcmlwdCh0YWIuaWQsIHtcbiAgICAgICAgZmlsZTogJ3NlbGVjdG9yLmpzJyxcbiAgICAgICAgcnVuQXQ6ICdkb2N1bWVudF9zdGFydCdcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHNldE9uY2UoZmFsc2UpO1xuICAgIHdpbmRvdy5jbG9zZSgpO1xuICB9O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFNlbGVjdGlvbigpO1xuICB9LCBbXSk7XG4gIGNvbnN0IGNsZWFyID0gKCkgPT4ge1xuICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuY2xlYXIoY29uc29sZS5sb2cuYmluZChjb25zb2xlLCAnQ2xlYXInKSk7XG5cbiAgICBjaHJvbWUudGFicy5nZXRTZWxlY3RlZCh0YWIgPT4ge1xuICAgICAgY2hyb21lLnRhYnMuZXhlY3V0ZVNjcmlwdCh0YWIuaWQsIHtcbiAgICAgICAgY29kZTogYHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtgLFxuICAgICAgICBydW5BdDogJ2RvY3VtZW50X3N0YXJ0J1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IHN0b3AgPSAoKSA9PiB7XG4gICAgLy8gY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSwgdGFiID0+IHtcbiAgICAvLyAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYlswXS5pZCwgJ05PVFJBTlNMQVRFJyk7XG4gICAgLy8gfSk7XG4gICAgLy8gY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSwgZnVuY3Rpb24odGFicykge1xuICAgIC8vICAgY2hyb21lLnRhYnMucmVsb2FkKHRhYnNbMF0uaWQpO1xuICAgIC8vIH0pO1xuICAgIC8vIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sIGZ1bmN0aW9uKHRhYnMpIHtcbiAgICAvLyAgIGNocm9tZS50YWJzLnVwZGF0ZSh0YWJzWzBdLmlkLCB7IHVybDogdGFic1swXS51cmwgfSk7XG4gICAgLy8gfSk7XG4gICAgLy8gY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSwgZnVuY3Rpb24oYXJyYXlPZlRhYnMpIHtcbiAgICAvLyAgIHZhciBjb2RlID0gJ3dpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTsnO1xuICAgIC8vICAgY2hyb21lLnRhYnMuZXhlY3V0ZVNjcmlwdChhcnJheU9mVGFic1swXS5pZCwgeyBjb2RlOiBjb2RlIH0pO1xuICAgIC8vIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIGNvbG9yPSdwcmltYXJ5J1xuICAgICAgICB2YXJpYW50PSdjb250YWluZWQnXG4gICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxuICAgICAgICBvbkNsaWNrPXtvbmNlID8gU2VsZWN0aW9uIDogbnVsbH1cbiAgICAgID5cbiAgICAgICAg57+76K+RXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxCdXR0b24gY29sb3I9J3NlY29uZGFyeScgdmFyaWFudD0nY29udGFpbmVkJyBmdWxsV2lkdGggY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0gb25DbGljaz17c3RvcH0+XG4gICAgICAgIOS4jee/u+ivkVxuICAgICAgPC9CdXR0b24+XG4gICAgICA8QnV0dG9uIGNvbG9yPSdzZWNvbmRhcnknIHZhcmlhbnQ9J2NvbnRhaW5lZCcgZnVsbFdpZHRoIG9uQ2xpY2s9e2NsZWFyfT5cbiAgICAgICAg5riF56m6XG4gICAgICA8L0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAnO1xuXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xuaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IGJsdWUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL2JsdWUnO1xuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIHByaW1hcnk6IGJsdWVcbiAgfVxufSk7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICA8QXBwIC8+XG4gIDwvVGhlbWVQcm92aWRlcj4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcbik7XG4iXSwic291cmNlUm9vdCI6IiJ9