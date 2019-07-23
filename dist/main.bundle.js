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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL09wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3B0aW9uc1BhZ2UvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL09wdGlvbnNQYWdlL2NvbXBvbmVudHMvQ3NzLmNzcz8wY2UxIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL09wdGlvbnNQYWdlL2NvbXBvbmVudHMvQ3NzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL09wdGlvbnNQYWdlL2NvbXBvbmVudHMvU2VhcmNoLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL09wdGlvbnNQYWdlL2NvbXBvbmVudHMvVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFwcCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaGFzaCIsInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwicHJpbWFyeSIsImJsdWUiLCJzZWNvbmRhcnkiLCJPcHRpb25zIiwiXyIsImRyYXdlcldpZHRoIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJkaXNwbGF5IiwiYXBwQmFyIiwid2lkdGgiLCJtYXJnaW5MZWZ0IiwiZHJhd2VyIiwiZmxleFNocmluayIsIm92ZXJmbG93IiwiZHJhd2VyUGFwZXIiLCJ0b29sYmFyIiwibWl4aW5zIiwiY29udGVudCIsImZsZXhHcm93IiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZCIsImJveCIsImJveFNpemluZyIsInBvc2l0aW9uIiwiekluZGV4IiwidHJhbnNpdGlvbiIsInNoYWRvdyIsImJveFNoYWRvdyIsInR4dCIsInBhZGRpbmdMZWZ0IiwiUGVybWFuZW50RHJhd2VyTGVmdCIsImNsYXNzZXMiLCJ1c2VTdGF0ZSIsImRvbWFpbiIsInNldERvbWFpbiIsInNldEZpbHRlciIsInJlZiIsInVzZVJlZiIsInNjcm9sbCIsImUiLCJ0YXJnZXQiLCJzY3JvbGxUb3AiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiY3VycmVudERhdGEiLCJzZXRDdXJyZW50RGF0YSIsIkNoYW5nZSIsImNocm9tZSIsInN0b3JhZ2UiLCJzeW5jIiwiZ2V0IiwiZCIsImNvbnNvbGUiLCJsb2ciLCJPYmplY3QiLCJrZXlzIiwiZGF0YSIsInVzZUVmZmVjdCIsIm9uQ2hhbmdlZCIsImFkZExpc3RlbmVyIiwiY2hhbmdlcyIsImFyZWFOYW1lIiwiZ2V0Q3VycmVudERhdGEiLCJwYXBlciIsImZpbHRlciIsInYiLCJpbmNsdWRlcyIsIm1hcCIsImkiLCJjb250YWluZXIiLCJmbGV4V3JhcCIsIm1heFdpZHRoIiwibWFyZ2luIiwidGV4dEZpZWxkIiwic3BhY2luZyIsImxhc3QiLCJtYXJnaW5Cb3R0b20iLCJkZWJvdW5jZSIsInRpbWUiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiT3V0bGluZWRUZXh0RmllbGRzIiwiZGF0YUFsbCIsImNvZGUiLCJnbG9iYWxDc3MiLCJzZXRHbG9iYWxDc3MiLCJsb2NhbENzcyIsInNldExvY2FsQ3NzIiwic2V0IiwiY3NzIiwidmFsdWUiLCJzZWFyY2giLCJzZWFyY2hJY29uIiwiaGVpZ2h0IiwicG9pbnRlckV2ZW50cyIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImlucHV0Um9vdCIsImNvbG9yIiwiaW5wdXRJbnB1dCIsInBhZGRpbmciLCJpbnB1dCIsIlNlYXJjaEFwcEJhciIsInRyaW0iLCJ1c2VUb29sYmFyU3R5bGVzIiwiYWJzb2x1dGUiLCJib3R0b20iLCJyaWdodCIsInNwYWNlciIsInRvcCIsInRhYmxlIiwibWluV2lkdGgiLCJ0YWJsZVdyYXBwZXIiLCJvdmVyZmxvd1giLCJoZWFkUm93cyIsImlkIiwibnVtZXJpYyIsImxhYmVsIiwiRW5oYW5jZWRUYWJsZVRvb2xiYXIiLCJwcm9wcyIsIm51bVNlbGVjdGVkIiwidG9nZ2xlIiwic2V0VG9nZ2xlIiwiRW5oYW5jZWRUYWJsZUhlYWQiLCJvblNlbGVjdEFsbENsaWNrIiwib3JkZXIiLCJvcmRlckJ5Iiwicm93Q291bnQiLCJvblJlcXVlc3RTb3J0IiwiY3JlYXRlU29ydEhhbmRsZXIiLCJwcm9wZXJ0eSIsImV2ZW50Iiwicm93IiwidXNlU3R5bGVzMiIsImJvcmRlckJvdHRvbUNvbG9yIiwiSW5wdXRNZSIsIlJlYWN0IiwibWVtbyIsInZhbCIsImNsaWNrIiwic3RvcFByb3BhZ2F0aW9uIiwidW5kZWZpbmVkIiwicHJldlByb3BzIiwibmV4dFByb3BzIiwiQ2hlY2tib3gyIiwiY2hlY2tlZCIsIkVuaGFuY2VkVGFibGVUb29sYmFyMiIsIkVuaGFuY2VkVGFibGVIZWFkMiIsImZuIiwic3R5IiwiZGVmIiwibWlkIiwiYXJyIiwibmFtZSIsInJlZHVjZSIsImFjYyIsImNvbmNhdCIsInJlc3VsdCIsImNyZWF0ZURhdGEiLCJFbmhhbmNlZFRhYmxlIiwic2V0RGF0YSIsInNldE9yZGVyIiwic2V0T3JkZXJCeSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJoYW5kbGVSZXF1ZXN0U29ydCIsImlzRGVzYyIsInJldmVyc2UiLCJ2YWx1ZXMiLCJsZW5ndGgiLCJyb3dzIiwiQXJyYXkiLCJoYW5kbGVTZWxlY3RBbGxDbGljayIsIm5ld1NlbGVjdGVkcyIsIm4iLCJoYW5kbGVDbGljayIsImlzU2VsZWN0ZWQiLCJpbmRleE9mIiwiYSIsIkRhdGUiLCJub3ciLCJlZGl0IiwiZmllbGQiLCJuZXdSb3ciLCJpc0l0ZW1TZWxlY3RlZCIsImJ1dHRvbiIsIm9uY2UiLCJzZXRPbmNlIiwiU2VsZWN0aW9uIiwidGFicyIsImdldFNlbGVjdGVkIiwidGFiIiwiZXhlY3V0ZVNjcmlwdCIsImZpbGUiLCJydW5BdCIsImNsb3NlIiwiY2xlYXIiLCJiaW5kIiwic3RvcCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUFnQix1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LFNBRFI7QUFFRSxXQUFPLEVBQUMsV0FGVjtBQUdFLGFBQVMsTUFIWDtBQUlFLGFBQVMsRUFBRXlCLE9BQU8sQ0FBQzRKLE1BSnJCO0FBS0UsV0FBTyxFQUFFQyxJQUFJLEdBQUdFLFNBQUgsR0FBZTtBQUw5QixvQkFERixFQVVFLDJEQUFDLGdFQUFEO0FBQVEsU0FBSyxFQUFDLFdBQWQ7QUFBMEIsV0FBTyxFQUFDLFdBQWxDO0FBQThDLGFBQVMsTUFBdkQ7QUFBd0QsYUFBUyxFQUFFL0osT0FBTyxDQUFDNEosTUFBM0U7QUFBbUYsV0FBTyxFQUFFYTtBQUE1RiwwQkFWRixFQWFFLDJEQUFDLGdFQUFEO0FBQVEsU0FBSyxFQUFDLFdBQWQ7QUFBMEIsV0FBTyxFQUFDLFdBQWxDO0FBQThDLGFBQVMsTUFBdkQ7QUFBd0QsV0FBTyxFQUFFRjtBQUFqRSxvQkFiRixDQURGO0FBbUJELENBOURELEU7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU0zTSxLQUFLLEdBQUdDLCtFQUFjLENBQUM7QUFDM0JDLFNBQU8sRUFBRTtBQUNQQyxXQUFPLEVBQUVDLG9FQUFJQTtBQUROO0FBRGtCLENBQUQsQ0FBNUI7QUFNQTBNLGdEQUFRLENBQUNDLE1BQVQsQ0FDRSwyREFBQyxpRUFBRDtBQUFlLE9BQUssRUFBRS9NO0FBQXRCLEdBQ0UsMkRBQUMscUVBQUQsT0FERixFQUVFLDJEQUFDLHVEQUFELE9BRkYsQ0FERixFQUtFZ04sUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBTEYsRSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXguanNcIixcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUG9wdXAgZnJvbSAnLi9Qb3B1cCc7XG5pbXBvcnQgT3B0aW9ucyBmcm9tICcuL09wdGlvbnMnO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gIHJldHVybiA8Pnt3aW5kb3cubG9jYXRpb24uaGFzaCA9PT0gJyNwb3B1cCcgPyA8UG9wdXAgLz4gOiA8T3B0aW9ucyAvPn08Lz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICd0eXBlZmFjZS1yb2JvdG8nO1xuaW1wb3J0IEFwcCBmcm9tICcuL09wdGlvbnNQYWdlL0FwcCc7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xuaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IGJsdWUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL2JsdWUnO1xuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIHByaW1hcnk6IGJsdWUsXG4gICAgc2Vjb25kYXJ5OiBibHVlXG4gIH1cbn0pO1xuXG5jb25zdCBPcHRpb25zID0gXyA9PiAoXG4gIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgPEFwcCAvPlxuICA8L1RoZW1lUHJvdmlkZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBPcHRpb25zO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IERyYXdlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EcmF3ZXInO1xuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XG5pbXBvcnQgVGFibGUgZnJvbSAnLi9jb21wb25lbnRzL1RhYmxlJztcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9jb21wb25lbnRzL1NlYXJjaCc7XG5cbmNvbnN0IGRyYXdlcldpZHRoID0gMzAwO1xuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnXG4gIH0sXG4gIGFwcEJhcjoge1xuICAgIHdpZHRoOiBgY2FsYygxMDAlIC0gJHtkcmF3ZXJXaWR0aH1weClgLFxuICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoXG4gIH0sXG4gIGRyYXdlcjoge1xuICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcbiAgICBmbGV4U2hyaW5rOiAwLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICB9LFxuICBkcmF3ZXJQYXBlcjoge1xuICAgIHdpZHRoOiBkcmF3ZXJXaWR0aFxuICB9LFxuICB0b29sYmFyOiB0aGVtZS5taXhpbnMudG9vbGJhcixcbiAgY29udGVudDoge1xuICAgIGZsZXhHcm93OiAxLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLmRlZmF1bHRcbiAgfSxcbiAgYm94OiB7XG4gICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHpJbmRleDogMTAsXG4gICAgd2lkdGg6IGRyYXdlcldpZHRoIC0gNSxcbiAgICB0cmFuc2l0aW9uOiAnYm94LXNoYWRvdyAwLjNzIGVhc2UtaW4tb3V0J1xuICB9LFxuICBzaGFkb3c6IHtcbiAgICBib3hTaGFkb3c6ICcwcHggMnB4IDRweCAtMXB4ICMwMDAwMDAzMywgMHB4IDRweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xNCksIDBweCAxcHggMTBweCAwcHggcmdiYSgwLDAsMCwwLjEyKSdcbiAgfSxcbiAgdHh0OiB7XG4gICAgcGFkZGluZ0xlZnQ6IDhcbiAgfVxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQZXJtYW5lbnREcmF3ZXJMZWZ0KCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtkb21haW4sIHNldERvbWFpbl0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0eHQsIHNldEZpbHRlcl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBzY3JvbGwgPSBlID0+IHtcbiAgICBlLnRhcmdldC5zY3JvbGxUb3AgPiAzMCAmJiByZWYuY3VycmVudC5jbGFzc0xpc3QuYWRkKGNsYXNzZXMuc2hhZG93KTtcbiAgICBlLnRhcmdldC5zY3JvbGxUb3AgPCAzMCAmJiByZWYuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzZXMuc2hhZG93KTtcbiAgfTtcbiAgY29uc3QgW2N1cnJlbnREYXRhLCBzZXRDdXJyZW50RGF0YV0gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgY29uc3QgQ2hhbmdlID0gZG9tYWluID0+IHtcbiAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChudWxsLCBkID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCfliJ3lp4vljJYnLCBkKTtcbiAgICAgIHNldERvbWFpbihPYmplY3Qua2V5cyhkKSk7XG4gICAgICBzZXRDdXJyZW50RGF0YSh7IGRvbWFpbiwgZGF0YTogZCB9KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdwcm9wcycsIHsgZG9tYWluLCBkYXRhOiBkIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgQ2hhbmdlKCk7XG4gICAgY2hyb21lLnN0b3JhZ2Uub25DaGFuZ2VkLmFkZExpc3RlbmVyKChjaGFuZ2VzLCBhcmVhTmFtZSkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coLi4uT2JqZWN0LmtleXMoY2hhbmdlcykpO1xuICAgICAgQ2hhbmdlKC4uLk9iamVjdC5rZXlzKGNoYW5nZXMpKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudERhdGEpO1xuICB9LCBbY3VycmVudERhdGFdKTtcblxuICBjb25zdCBnZXRDdXJyZW50RGF0YSA9IGRvbWFpbiA9PiB7XG4gICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQobnVsbCwgZCA9PiB7XG4gICAgICBzZXRDdXJyZW50RGF0YSh7IGRvbWFpbiwgZGF0YTogZCB9KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHsgZG9tYWluLCBkYXRhOiBkIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8RHJhd2VyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJ9XG4gICAgICAgIHZhcmlhbnQ9J3Blcm1hbmVudCdcbiAgICAgICAgY2xhc3Nlcz17e1xuICAgICAgICAgIHBhcGVyOiBjbGFzc2VzLmRyYXdlclBhcGVyXG4gICAgICAgIH19XG4gICAgICAgIGFuY2hvcj0nbGVmdCdcbiAgICAgICAgb25TY3JvbGw9e3Njcm9sbH1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYm94fSByZWY9e3JlZn0+XG4gICAgICAgICAgPFNlYXJjaCBzZXRGaWx0ZXI9e3NldEZpbHRlcn0gLz5cbiAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyfSAvPlxuXG4gICAgICAgIDxMaXN0PlxuICAgICAgICAgIHtkb21haW5cbiAgICAgICAgICAgIC5maWx0ZXIodiA9PiB2LmluY2x1ZGVzKHR4dCkpXG4gICAgICAgICAgICAubWFwKCh2LCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24ga2V5PXtpfSBvbkNsaWNrPXtlID0+IGdldEN1cnJlbnREYXRhKHYpfT5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e3Z9IGNsYXNzTmFtZT17Y2xhc3Nlcy50eHR9IC8+XG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9MaXN0PlxuICAgICAgPC9EcmF3ZXI+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cbiAgICAgICAgPFRhYmxlIHsuLi5jdXJyZW50RGF0YX0gLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XG5pbXBvcnQgJy4vQ3NzLmNzcyc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgY29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgbWF4V2lkdGg6IDk2MCxcbiAgICBtYXJnaW46ICdhdXRvJ1xuICB9LFxuICB0ZXh0RmllbGQ6IHtcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoNCwgMSlcbiAgfSxcbiAgbGFzdDoge1xuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZyg4KVxuICB9XG59KSk7XG5cbmNvbnN0IGRlYm91bmNlID0gKCgpID0+IHtcbiAgbGV0IHRpbWUgPSBudWxsO1xuICByZXR1cm4gKGRvbWFpbiwgZGF0YSkgPT4ge1xuICAgIGNsZWFyVGltZW91dCh0aW1lKTtcbiAgICB0aW1lID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhkb21haW4sIGRhdGEpO1xuICAgICAgLy8gY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoeyAnMTI3LjAuMC4xJzogeyBjc3M6ICdkc2RzZGZhc2ZkZnIzNDIzNDMyNDIzNDIzNDMnIH0gfSk7XG4gICAgfSwgNTAwKTtcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE91dGxpbmVkVGV4dEZpZWxkcyh7IGRvbWFpbiwgZGF0YUFsbCB9KSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgY29kZSA9IGBmb250LWZhbWlseTogJ0ZpcmEgQ29kZSBSZWd1bGFyJywgQ29uc29sYXMgIWltcG9ydGFudDtcXG5mb250LXNpemU6IDE0cHggIWltcG9ydGFudDtgO1xuICBjb25zdCBbZ2xvYmFsQ3NzLCBzZXRHbG9iYWxDc3NdID0gdXNlU3RhdGUoY29kZSk7XG4gIGNvbnN0IFtsb2NhbENzcywgc2V0TG9jYWxDc3NdID0gdXNlU3RhdGUoY29kZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhsb2NhbENzcyk7XG4gICAgLy8gZGVib3VuY2UoZG9tYWluLCB7IC4uLmRhdGFBbGxbZG9tYWluXSwgY3NzOiBsb2NhbENzcyB9KTtcbiAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7IFtkb21haW5dOiB7IC4uLmRhdGFBbGxbZG9tYWluXSwgY3NzOiBsb2NhbENzcyB9IH0pO1xuICAgIC8vIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHsgW2RvbWFpbl06IHsgLi4uZGF0YUFsbFtkb21haW5dLCBjc3M6IGxvY2FsQ3NzIH0gfSk7XG4gICAgLy8gY29uc29sZS5sb2coJ2NjYycsIGRvbWFpbiwgZGF0YUFsbCk7XG4gICAgLy8gY29uc29sZS5sb2coeyAuLi5kYXRhQWxsW2RvbWFpbl0sIGNzczogbG9jYWxDc3MgfSk7XG4gIH0sIFtsb2NhbENzc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coZ2xvYmFsQ3NzKTtcbiAgfSwgW2dsb2JhbENzc10pO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBtYXhXaWR0aD0nbWQnPlxuICAgICAgPFRleHRGaWVsZFxuICAgICAgICBsYWJlbD17ZG9tYWluIHx8ICfmnKrpgInmi6knfVxuICAgICAgICBtdWx0aWxpbmVcbiAgICAgICAgcm93cz0nOCdcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cbiAgICAgICAgbWFyZ2luPSdub3JtYWwnXG4gICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xuICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgdmFsdWU9e2xvY2FsQ3NzfVxuICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRMb2NhbENzcyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIGlkPSd0ZXh0J1xuICAgICAgLz5cblxuICAgICAgPFRleHRGaWVsZFxuICAgICAgICBsYWJlbD0nR2xvYmFsJ1xuICAgICAgICBtdWx0aWxpbmVcbiAgICAgICAgcm93cz0nOCdcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLnRleHRGaWVsZH0gJHtjbGFzc2VzLmxhc3R9YH1cbiAgICAgICAgbWFyZ2luPSdub3JtYWwnXG4gICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xuICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgdmFsdWU9e2dsb2JhbENzc31cbiAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0R2xvYmFsQ3NzKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgaWQ9J3RleHQnXG4gICAgICAvPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaCc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXQnO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIGZsZXhHcm93OiAxXG4gIH0sXG4gIHNlYXJjaDoge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gIH0sXG4gIHNlYXJjaEljb246IHtcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZygzLjUpLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXG4gIH0sXG4gIGlucHV0Um9vdDoge1xuICAgIGNvbG9yOiAnaW5oZXJpdCdcbiAgfSxcbiAgaW5wdXRJbnB1dDoge1xuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSwgMSwgMSwgNSksXG4gICAgd2lkdGg6ICcxMDAlJ1xuICB9LFxuICBpbnB1dDoge1xuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKVxuICB9XG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaEFwcEJhcih7IHNldEZpbHRlciB9KSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxUb29sYmFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaEljb259PlxuICAgICAgICAgIDxTZWFyY2hJY29uIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nU2VhcmNo4oCmJ1xuICAgICAgICAgIGNsYXNzZXM9e3tcbiAgICAgICAgICAgIHJvb3Q6IGNsYXNzZXMuaW5wdXRSb290LFxuICAgICAgICAgICAgaW5wdXQ6IGNsYXNzZXMuaW5wdXRJbnB1dFxuICAgICAgICAgIH19XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0RmlsdGVyKGUudGFyZ2V0LnZhbHVlLnRyaW0oKSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L1Rvb2xiYXI+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgVGFibGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGUnO1xuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHknO1xuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGwnO1xuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnO1xuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcbmltcG9ydCBUYWJsZVNvcnRMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVNvcnRMYWJlbCc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3gnO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcCc7XG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlJztcbmltcG9ydCBBZGRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BZGQnO1xuaW1wb3J0IEZhYiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9GYWInO1xuaW1wb3J0IElucHV0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0JztcbmltcG9ydCBTd2l0Y2ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3dpdGNoJztcbmltcG9ydCBDc3MgZnJvbSAnLi9Dc3MnO1xuXG5jb25zdCB1c2VUb29sYmFyU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBhYnNvbHV0ZToge1xuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIGJvdHRvbTogdGhlbWUuc3BhY2luZygxMCksXG4gICAgcmlnaHQ6IHRoZW1lLnNwYWNpbmcoNSksXG4gICAgekluZGV4OiAyMFxuICB9LFxuICBzcGFjZXI6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgcmlnaHQ6IDIwLFxuICAgIHpJbmRleDogMjBcbiAgfVxufSkpO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICB3aWR0aDogJzEwMCUnXG4gIH0sXG4gIHBhcGVyOiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMilcbiAgfSxcbiAgdGFibGU6IHtcbiAgICBtaW5XaWR0aDogNzUwXG4gIH0sXG4gIHRhYmxlV3JhcHBlcjoge1xuICAgIG92ZXJmbG93WDogJ2F1dG8nXG4gIH1cbn0pKTtcblxuY29uc3QgaGVhZFJvd3MgPSBbXG4gIHsgaWQ6ICdzdHknLCBudW1lcmljOiBmYWxzZSwgbGFiZWw6ICfov5DnlKjmoLflvI8nIH0sXG4gIHsgaWQ6ICdkZWYnLCBudW1lcmljOiB0cnVlLCBsYWJlbDogJ+S4jei/kOeUqOagt+W8jycgfSxcbiAgeyBpZDogJ21pZCcsIG51bWVyaWM6IHRydWUsIGxhYmVsOiAn5by65Yi257+76K+RJyB9XG5dO1xuXG5jb25zdCBFbmhhbmNlZFRhYmxlVG9vbGJhciA9IHByb3BzID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVRvb2xiYXJTdHlsZXMoKTtcbiAgY29uc3QgeyBudW1TZWxlY3RlZCwgcmVtb3ZlLCBhZGQsIHRvZ2dsZSwgc2V0VG9nZ2xlIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7dG9nZ2xlICYmXG4gICAgICAgIChudW1TZWxlY3RlZCA9PT0gMCA/IChcbiAgICAgICAgICA8VG9vbHRpcCB0aXRsZT0nQWRkJz5cbiAgICAgICAgICAgIDxGYWIgY29sb3I9J3ByaW1hcnknIGNsYXNzTmFtZT17Y2xhc3Nlcy5hYnNvbHV0ZX0gb25DbGljaz17YWRkfT5cbiAgICAgICAgICAgICAgPEFkZEljb24gLz5cbiAgICAgICAgICAgIDwvRmFiPlxuICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8VG9vbHRpcCB0aXRsZT0nRGVsZXRlJz5cbiAgICAgICAgICAgIDxGYWIgY29sb3I9J3ByaW1hcnknIGNsYXNzTmFtZT17Y2xhc3Nlcy5hYnNvbHV0ZX0gb25DbGljaz17cmVtb3ZlfT5cbiAgICAgICAgICAgICAgPERlbGV0ZUljb24gLz5cbiAgICAgICAgICAgIDwvRmFiPlxuICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgKSl9XG4gICAgICA8U3dpdGNoXG4gICAgICAgIGNvbG9yPSdwcmltYXJ5J1xuICAgICAgICBjaGVja2VkPXshdG9nZ2xlfVxuICAgICAgICBvbkNoYW5nZT17XyA9PiBzZXRUb2dnbGUoZCA9PiAhZCl9XG4gICAgICAgIHZhbHVlPSdjaGVja2VkQSdcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnNwYWNlcn1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBFbmhhbmNlZFRhYmxlSGVhZCA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBvblNlbGVjdEFsbENsaWNrLCBvcmRlciwgb3JkZXJCeSwgbnVtU2VsZWN0ZWQsIHJvd0NvdW50LCBvblJlcXVlc3RTb3J0IH0gPSBwcm9wcztcbiAgY29uc3QgY3JlYXRlU29ydEhhbmRsZXIgPSBwcm9wZXJ0eSA9PiBldmVudCA9PiBvblJlcXVlc3RTb3J0KGV2ZW50LCBwcm9wZXJ0eSk7XG5cbiAgcmV0dXJuIChcbiAgICA8VGFibGVIZWFkPlxuICAgICAgPFRhYmxlUm93PlxuICAgICAgICA8VGFibGVDZWxsIHBhZGRpbmc9J2NoZWNrYm94Jz5cbiAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgIGluZGV0ZXJtaW5hdGU9e251bVNlbGVjdGVkID4gMCAmJiBudW1TZWxlY3RlZCA8IHJvd0NvdW50fVxuICAgICAgICAgICAgY2hlY2tlZD17ISFyb3dDb3VudCAmJiBudW1TZWxlY3RlZCA9PT0gcm93Q291bnR9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25TZWxlY3RBbGxDbGlja31cbiAgICAgICAgICAvPlxuICAgICAgICA8L1RhYmxlQ2VsbD5cblxuICAgICAgICB7aGVhZFJvd3MubWFwKChyb3csIGkpID0+IChcbiAgICAgICAgICA8VGFibGVDZWxsIGtleT17aX0gYWxpZ249e3Jvdy5udW1lcmljID8gJ2NlbnRlcicgOiAnbGVmdCd9IHNvcnREaXJlY3Rpb249e29yZGVyQnkgPT09IHJvdy5pZCA/IG9yZGVyIDogZmFsc2V9PlxuICAgICAgICAgICAgPFRhYmxlU29ydExhYmVsIGFjdGl2ZT17b3JkZXJCeSA9PT0gcm93LmlkfSBkaXJlY3Rpb249e29yZGVyfSBvbkNsaWNrPXtjcmVhdGVTb3J0SGFuZGxlcihyb3cuaWQpfT5cbiAgICAgICAgICAgICAge3Jvdy5sYWJlbH1cbiAgICAgICAgICAgIDwvVGFibGVTb3J0TGFiZWw+XG4gICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICkpfVxuICAgICAgPC9UYWJsZVJvdz5cbiAgICA8L1RhYmxlSGVhZD5cbiAgKTtcbn07XG5cbmNvbnN0IHVzZVN0eWxlczIgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICAnJjo6YmVmb3JlJzoge1xuICAgICAgYm9yZGVyQm90dG9tQ29sb3I6ICcjMDAwMDAwMDAnXG4gICAgfSxcbiAgICAnJjpob3Zlcjpub3QoLk11aS1kaXNhYmxlZCk6OmJlZm9yZSc6IHtcbiAgICAgIGJvcmRlckJvdHRvbUNvbG9yOiAnIzAwMDAwMDAwJ1xuICAgIH1cbiAgfVxufSkpO1xuXG5jb25zdCBJbnB1dE1lID0gUmVhY3QubWVtbyhcbiAgKHsgdmFsLCByb3csIC4uLnByb3BzIH0pID0+IHtcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzMigpO1xuICAgIC8vIGxldCB0b2dnbGUgPSB0cnVlO1xuICAgIGNvbnN0IGNsaWNrID0gZSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgLy8gKHRvZ2dsZSA9ICF0b2dnbGUpICYmIGUudGFyZ2V0LmJsdXIoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxJbnB1dFxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH1cbiAgICAgICAgdmFsdWU9e3ZhbCA9PT0gdW5kZWZpbmVkID8gJycgOiB2YWx9XG4gICAgICAgIG9uQ2xpY2s9e2NsaWNrfVxuICAgICAgICAvLyBvbkJsdXI9e2UgPT4gdG9nZ2xlIHx8ICh0b2dnbGUgPSB0cnVlKX1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICApO1xuICB9LFxuICAocHJldlByb3BzLCBuZXh0UHJvcHMpID0+IHtcbiAgICBpZiAocHJldlByb3BzLnJvdyA9PT0gbmV4dFByb3BzLnJvdykgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4pO1xuXG5jb25zdCBDaGVja2JveDIgPSBSZWFjdC5tZW1vKFxuICBwcm9wcyA9PiB7XG4gICAgcmV0dXJuIDxDaGVja2JveCB7Li4ucHJvcHN9IC8+O1xuICB9LFxuICAocHJldlByb3BzLCBuZXh0UHJvcHMpID0+IHtcbiAgICBpZiAocHJldlByb3BzLmNoZWNrZWQgPT09IG5leHRQcm9wcy5jaGVja2VkKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbik7XG5cbmNvbnN0IEVuaGFuY2VkVGFibGVUb29sYmFyMiA9IFJlYWN0Lm1lbW8oXG4gIHByb3BzID0+IDxFbmhhbmNlZFRhYmxlVG9vbGJhciB7Li4ucHJvcHN9IC8+LFxuICAocHJldlByb3BzLCBuZXh0UHJvcHMpID0+IHtcbiAgICBpZiAocHJldlByb3BzLm51bVNlbGVjdGVkID09PSBuZXh0UHJvcHMubnVtU2VsZWN0ZWQgJiYgcHJldlByb3BzLnRvZ2dsZSA9PT0gbmV4dFByb3BzLnRvZ2dsZSkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4pO1xuY29uc3QgRW5oYW5jZWRUYWJsZUhlYWQyID0gUmVhY3QubWVtbyhcbiAgcHJvcHMgPT4gPEVuaGFuY2VkVGFibGVIZWFkIHsuLi5wcm9wc30gLz4sXG4gIChwcmV2UHJvcHMsIG5leHRQcm9wcykgPT4ge1xuICAgIGlmIChcbiAgICAgIHByZXZQcm9wcy5udW1TZWxlY3RlZCA9PT0gbmV4dFByb3BzLm51bVNlbGVjdGVkICYmXG4gICAgICBwcmV2UHJvcHMub3JkZXIgPT09IG5leHRQcm9wcy5vcmRlciAmJlxuICAgICAgcHJldlByb3BzLm9yZGVyQnkgPT09IG5leHRQcm9wcy5vcmRlckJ5ICYmXG4gICAgICBwcmV2UHJvcHMucm93Q291bnQgPT09IG5leHRQcm9wcy5yb3dDb3VudFxuICAgIClcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuKTtcblxuY29uc3QgZGVib3VuY2UgPSAoXyA9PiB7XG4gIGxldCB0aW1lID0gbnVsbDtcbiAgcmV0dXJuIChkb21haW4sIGRhdGEpID0+IHtcbiAgICBjbGVhclRpbWVvdXQodGltZSk7XG4gICAgdGltZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgZm4gPSAoc3R5LCBkZWYsIG1pZCkgPT4gKHsgc3R5LCBkZWYsIG1pZCB9KTtcbiAgICAgIGxldCBhcnIgPSBbJ3N0eScsICdkZWYnLCAnbWlkJ10ubWFwKG5hbWUgPT4gZGF0YS5yZWR1Y2UoKGFjYywgdikgPT4gKHZbbmFtZV0gPyBhY2MuY29uY2F0KHZbbmFtZV0pIDogYWNjKSwgW10pKTtcbiAgICAgIC8vIGFyciA9IGFyci5tYXAodiA9PiBbLi4ubmV3IFNldCh2KV0pO1xuICAgICAgLy8gY29uc29sZS5sb2coYXJyKTtcbiAgICAgIGxldCByZXN1bHQgPSBmbiguLi5hcnIpO1xuICAgICAgY29uc29sZS5sb2coJ3Jlc3VsdCcsIHsgW2RvbWFpbl06IHJlc3VsdCB9KTtcbiAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHsgW2RvbWFpbl06IHJlc3VsdCB9KTtcbiAgICB9LCA1MDApO1xuICB9O1xufSkoKTtcblxuY29uc3QgY3JlYXRlRGF0YSA9IChzdHksIGRlZiwgbWlkLCBpZCkgPT4gKHsgc3R5LCBkZWYsIG1pZCwgaWQgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVuaGFuY2VkVGFibGUoeyBkb21haW4sIGRhdGE6IGRhdGFBbGwgfSkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW29yZGVyLCBzZXRPcmRlcl0gPSB1c2VTdGF0ZSgnYXNjJyk7XG4gIGNvbnN0IFtvcmRlckJ5LCBzZXRPcmRlckJ5XSA9IHVzZVN0YXRlKCdjYWxvcmllcycpO1xuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCByZWYgPSB1c2VSZWYodHJ1ZSk7XG5cbiAgY29uc3QgaGFuZGxlUmVxdWVzdFNvcnQgPSAoZXZlbnQsIHByb3BlcnR5KSA9PiB7XG4gICAgY29uc3QgaXNEZXNjID0gb3JkZXJCeSA9PT0gcHJvcGVydHkgJiYgb3JkZXIgPT09ICdkZXNjJztcbiAgICBzZXRPcmRlcihpc0Rlc2MgPyAnYXNjJyA6ICdkZXNjJyk7XG4gICAgc2V0T3JkZXJCeShwcm9wZXJ0eSk7XG4gICAgc2V0RGF0YShkYXRhID0+IFsuLi5kYXRhXS5yZXZlcnNlKCkpO1xuICAgIGNvbnNvbGUubG9nKCdyZXZlcnNlJyk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KFxuICAgIF8gPT4ge1xuICAgICAgaWYgKGRhdGFBbGwgJiYgZGF0YUFsbFtkb21haW5dKSB7XG4gICAgICAgIGxldCB7IHN0eSwgZGVmLCBtaWQgfSA9IGRhdGFBbGxbZG9tYWluXTtcbiAgICAgICAgY29uc3QgaSA9IE9iamVjdC52YWx1ZXMoZGF0YUFsbFtkb21haW5dKS5yZWR1Y2UoKGFjYywgdikgPT4gKHYubGVuZ3RoID4gYWNjID8gKGFjYyA9IHYubGVuZ3RoKSA6IGFjYyksIDApO1xuICAgICAgICBjb25zdCByb3dzID0gWy4uLkFycmF5KGkpXS5tYXAoKHYsIGkpID0+IGNyZWF0ZURhdGEoc3R5W2ldIHx8ICcnLCBkZWZbaV0gfHwgJycsIG1pZFtpXSB8fCAnJywgaSkpO1xuICAgICAgICBzZXREYXRhKHJvd3MpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyb3dzKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtkb21haW4sIGRhdGFBbGxdXG4gICk7XG5cbiAgdXNlRWZmZWN0KFxuICAgIF8gPT4ge1xuICAgICAgaWYgKHJlZi5jdXJyZW50KSB7XG4gICAgICAgIHJlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgICFkYXRhLmxlbmd0aCAmJiBjaHJvbWUuc3RvcmFnZS5zeW5jLnJlbW92ZShkb21haW4pO1xuICAgICAgY29uc29sZS5sb2coJ+S5i+WQjicsIGRhdGEpO1xuICAgICAgZGVib3VuY2UoZG9tYWluLCBkYXRhKTtcbiAgICB9LFxuICAgIFtkYXRhXVxuICApO1xuXG4gIGNvbnN0IGhhbmRsZVNlbGVjdEFsbENsaWNrID0gZXZlbnQgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdldmVudC50YXJnZXQuY2hlY2tlZCcsIGV2ZW50LnRhcmdldC5jaGVja2VkKTtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgIGNvbnN0IG5ld1NlbGVjdGVkcyA9IGRhdGEubWFwKG4gPT4gbi5pZCk7XG4gICAgICBjb25zb2xlLmxvZyhuZXdTZWxlY3RlZHMpO1xuICAgICAgc2V0U2VsZWN0ZWQobmV3U2VsZWN0ZWRzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0U2VsZWN0ZWQoW10pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50LCBuYW1lKSA9PiB7XG4gICAgc2VsZWN0ZWQuaW5jbHVkZXMobmFtZSkgPyBzZXRTZWxlY3RlZChzZWxlY3RlZC5maWx0ZXIodiA9PiB2ICE9PSBuYW1lKSkgOiBzZXRTZWxlY3RlZChzZWxlY3RlZC5jb25jYXQobmFtZSkpO1xuICB9O1xuXG4gIGNvbnN0IGlzU2VsZWN0ZWQgPSBuYW1lID0+IHNlbGVjdGVkLmluZGV4T2YobmFtZSkgIT09IC0xO1xuXG4gIGNvbnN0IHJlbW92ZSA9IF8gPT4ge1xuICAgIHNldERhdGEoZGF0YSA9PiBkYXRhLmZpbHRlcih2ID0+ICFzZWxlY3RlZC5pbmNsdWRlcyh2LmlkKSkpO1xuICAgIHNldFNlbGVjdGVkKFtdKTtcbiAgfTtcblxuICBjb25zdCBhZGQgPSBfID0+IHtcbiAgICBjb25zdCBhID0gY3JlYXRlRGF0YSh1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBEYXRlLm5vdygpKTtcbiAgICBzZXREYXRhKGRhdGEgPT4gZGF0YS5jb25jYXQoYSkpO1xuICB9O1xuICBjb25zdCBlZGl0ID0gKGZpZWxkLCByb3cpID0+IGUgPT4ge1xuICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IG5ld1JvdyA9IHsgLi4ucm93LCBbZmllbGRdOiB2YWwgfTtcbiAgICBzZXREYXRhKGRhdGEgPT4gZGF0YS5tYXAodiA9PiAodiA9PT0gcm93ID8gbmV3Um93IDogdikpKTtcbiAgICAvLyBjb25zb2xlLmxvZygnZWRpdDonLCBkYXRhLm1hcCh2ID0+ICh2ID09PSByb3cgPyBuZXdSb3cgOiB2KSkpO1xuICAgIGNvbnNvbGUubG9nKCfmmK/lkKbph43lpI0gPT4gJywgZGF0YS5tYXAodiA9PiB2W2ZpZWxkXSkuaW5jbHVkZXModmFsKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cbiAgICAgIDxFbmhhbmNlZFRhYmxlVG9vbGJhcjJcbiAgICAgICAgbnVtU2VsZWN0ZWQ9e3NlbGVjdGVkLmxlbmd0aH1cbiAgICAgICAgcmVtb3ZlPXtyZW1vdmV9XG4gICAgICAgIGFkZD17YWRkfVxuICAgICAgICB0b2dnbGU9e3RvZ2dsZX1cbiAgICAgICAgc2V0VG9nZ2xlPXtzZXRUb2dnbGV9XG4gICAgICAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJsZVdyYXBwZXJ9PlxuICAgICAgICB7dG9nZ2xlID8gKFxuICAgICAgICAgIDxUYWJsZSBjbGFzc05hbWU9e2NsYXNzZXMudGFibGV9IHNpemU9J21lZGl1bSc+XG4gICAgICAgICAgICA8RW5oYW5jZWRUYWJsZUhlYWQyXG4gICAgICAgICAgICAgIG51bVNlbGVjdGVkPXtzZWxlY3RlZC5sZW5ndGh9XG4gICAgICAgICAgICAgIG9yZGVyPXtvcmRlcn1cbiAgICAgICAgICAgICAgb3JkZXJCeT17b3JkZXJCeX1cbiAgICAgICAgICAgICAgb25TZWxlY3RBbGxDbGljaz17aGFuZGxlU2VsZWN0QWxsQ2xpY2t9XG4gICAgICAgICAgICAgIG9uUmVxdWVzdFNvcnQ9e2hhbmRsZVJlcXVlc3RTb3J0fVxuICAgICAgICAgICAgICByb3dDb3VudD17ZGF0YS5sZW5ndGh9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8VGFibGVCb2R5PlxuICAgICAgICAgICAgICB7ZGF0YS5sZW5ndGggPyAoXG4gICAgICAgICAgICAgICAgZGF0YS5tYXAoKHJvdywgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgaXNJdGVtU2VsZWN0ZWQgPSBpc1NlbGVjdGVkKHJvdy5pZCk7XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBob3ZlciBvbkNsaWNrPXtlID0+IGhhbmRsZUNsaWNrKGUsIHJvdy5pZCl9IGtleT17aX0gc2VsZWN0ZWQ9e2lzSXRlbVNlbGVjdGVkfT5cbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHBhZGRpbmc9J2NoZWNrYm94Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveDIgY2hlY2tlZD17aXNJdGVtU2VsZWN0ZWR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHNjb3BlPSdyb3cnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TWUgdmFsPXtyb3cuc3R5fSBvbkNoYW5nZT17ZWRpdCgnc3R5Jywgcm93KX0gcm93PXtyb3d9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj0nY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dE1lIHZhbD17cm93LmRlZn0gb25DaGFuZ2U9e2VkaXQoJ2RlZicsIHJvdyl9IHJvdz17cm93fSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249J2NlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRNZSB2YWw9e3Jvdy5taWR9IG9uQ2hhbmdlPXtlZGl0KCdtaWQnLCByb3cpfSByb3c9e3Jvd30gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbFNwYW49ezR9PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBhbGlnbj0nY2VudGVyJyB2YXJpYW50PSdzdWJ0aXRsZTInIGNvbG9yPSd0ZXh0U2Vjb25kYXJ5Jz5cbiAgICAgICAgICAgICAgICAgICAgICDmsqHmnInmlbDmja5cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvVGFibGVCb2R5PlxuICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPENzcyBkb21haW49e2RvbWFpbn0gZGF0YUFsbD17ZGF0YUFsbH0gLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvUGFwZXI+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBwYWRkaW5nOiAxMCxcbiAgICB3aWR0aDogMTUwXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIG1hcmdpbkJvdHRvbTogOFxuICB9XG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IF8gPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtvbmNlLCBzZXRPbmNlXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IFNlbGVjdGlvbiA9IGUgPT4ge1xuICAgIGNocm9tZS50YWJzLmdldFNlbGVjdGVkKHRhYiA9PiB7XG4gICAgICBjaHJvbWUudGFicy5leGVjdXRlU2NyaXB0KHRhYi5pZCwge1xuICAgICAgICBmaWxlOiAnc2VsZWN0b3IuanMnLFxuICAgICAgICBydW5BdDogJ2RvY3VtZW50X3N0YXJ0J1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgc2V0T25jZShmYWxzZSk7XG4gICAgd2luZG93LmNsb3NlKCk7XG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gU2VsZWN0aW9uKCk7XG4gIH0sIFtdKTtcbiAgY29uc3QgY2xlYXIgPSAoKSA9PiB7XG4gICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5jbGVhcihjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUsICdDbGVhcicpKTtcblxuICAgIGNocm9tZS50YWJzLmdldFNlbGVjdGVkKHRhYiA9PiB7XG4gICAgICBjaHJvbWUudGFicy5leGVjdXRlU2NyaXB0KHRhYi5pZCwge1xuICAgICAgICBjb2RlOiBgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO2AsXG4gICAgICAgIHJ1bkF0OiAnZG9jdW1lbnRfc3RhcnQnXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbiAgY29uc3Qgc3RvcCA9ICgpID0+IHtcbiAgICAvLyBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCB0YWIgPT4ge1xuICAgIC8vICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiWzBdLmlkLCAnTk9UUkFOU0xBVEUnKTtcbiAgICAvLyB9KTtcbiAgICAvLyBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCBmdW5jdGlvbih0YWJzKSB7XG4gICAgLy8gICBjaHJvbWUudGFicy5yZWxvYWQodGFic1swXS5pZCk7XG4gICAgLy8gfSk7XG4gICAgLy8gY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSwgZnVuY3Rpb24odGFicykge1xuICAgIC8vICAgY2hyb21lLnRhYnMudXBkYXRlKHRhYnNbMF0uaWQsIHsgdXJsOiB0YWJzWzBdLnVybCB9KTtcbiAgICAvLyB9KTtcbiAgICAvLyBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCBmdW5jdGlvbihhcnJheU9mVGFicykge1xuICAgIC8vICAgdmFyIGNvZGUgPSAnd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpOyc7XG4gICAgLy8gICBjaHJvbWUudGFicy5leGVjdXRlU2NyaXB0KGFycmF5T2ZUYWJzWzBdLmlkLCB7IGNvZGU6IGNvZGUgfSk7XG4gICAgLy8gfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgY29sb3I9J3ByaW1hcnknXG4gICAgICAgIHZhcmlhbnQ9J2NvbnRhaW5lZCdcbiAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XG4gICAgICAgIG9uQ2xpY2s9e29uY2UgPyBTZWxlY3Rpb24gOiBudWxsfVxuICAgICAgPlxuICAgICAgICDnv7vor5FcbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPEJ1dHRvbiBjb2xvcj0nc2Vjb25kYXJ5JyB2YXJpYW50PSdjb250YWluZWQnIGZ1bGxXaWR0aCBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufSBvbkNsaWNrPXtzdG9wfT5cbiAgICAgICAg5LiN57+76K+RXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxCdXR0b24gY29sb3I9J3NlY29uZGFyeScgdmFyaWFudD0nY29udGFpbmVkJyBmdWxsV2lkdGggb25DbGljaz17Y2xlYXJ9PlxuICAgICAgICDmuIXnqbpcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCc7XG5cbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XG5pbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgYmx1ZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvYmx1ZSc7XG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgcHJpbWFyeTogYmx1ZVxuICB9XG59KTtcblxuUmVhY3RET00ucmVuZGVyKFxuICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgIDxDc3NCYXNlbGluZSAvPlxuICAgIDxBcHAgLz5cbiAgPC9UaGVtZVByb3ZpZGVyPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=