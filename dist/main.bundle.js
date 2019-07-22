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
function OutlinedTextFields() {
  var classes = useStyles();
  var code = "font-family: 'Fira Code Regular', Consolas !important;\nfont-size: 14px !important;";

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(code),
      _useState2 = _slicedToArray(_useState, 2),
      Css = _useState2[0],
      setCss = _useState2[1];

  var handleChange = function handleChange(e) {
    console.log(e.target.value);
    setCss(e.target.value);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    maxWidth: "md"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: 'www.google.com',
    multiline: true,
    rows: "8",
    className: classes.textField,
    margin: "normal",
    variant: "outlined",
    fullWidth: true,
    value: Css,
    onChange: handleChange,
    id: "text"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: "Global",
    multiline: true,
    rows: "8",
    className: "".concat(classes.textField, " ").concat(classes.last),
    margin: "normal",
    variant: "outlined",
    fullWidth: true,
    value: Css,
    onChange: handleChange,
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
      });
      console.log('edit:', data.map(function (v) {
        return v === row ? newRow : v;
      }));
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
  }, "\u6CA1\u6709\u6570\u636E"))))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Css__WEBPACK_IMPORTED_MODULE_17__["default"], null)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL09wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3B0aW9uc1BhZ2UvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL09wdGlvbnNQYWdlL2NvbXBvbmVudHMvQ3NzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9jb21wb25lbnRzL0Nzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9jb21wb25lbnRzL1NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9jb21wb25lbnRzL1RhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BvcHVwLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhhc2giLCJ0aGVtZSIsImNyZWF0ZU11aVRoZW1lIiwicGFsZXR0ZSIsInByaW1hcnkiLCJibHVlIiwic2Vjb25kYXJ5IiwiT3B0aW9ucyIsIl8iLCJkcmF3ZXJXaWR0aCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290IiwiZGlzcGxheSIsImFwcEJhciIsIndpZHRoIiwibWFyZ2luTGVmdCIsImRyYXdlciIsImZsZXhTaHJpbmsiLCJvdmVyZmxvdyIsImRyYXdlclBhcGVyIiwidG9vbGJhciIsIm1peGlucyIsImNvbnRlbnQiLCJmbGV4R3JvdyIsImJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmQiLCJib3giLCJib3hTaXppbmciLCJwb3NpdGlvbiIsInpJbmRleCIsInRyYW5zaXRpb24iLCJzaGFkb3ciLCJib3hTaGFkb3ciLCJ0eHQiLCJwYWRkaW5nTGVmdCIsIlBlcm1hbmVudERyYXdlckxlZnQiLCJjbGFzc2VzIiwidXNlU3RhdGUiLCJkb21haW4iLCJzZXREb21haW4iLCJzZXRGaWx0ZXIiLCJyZWYiLCJ1c2VSZWYiLCJzY3JvbGwiLCJlIiwidGFyZ2V0Iiwic2Nyb2xsVG9wIiwiY3VycmVudCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImN1cnJlbnREYXRhIiwic2V0Q3VycmVudERhdGEiLCJDaGFuZ2UiLCJjaHJvbWUiLCJzdG9yYWdlIiwic3luYyIsImdldCIsImQiLCJjb25zb2xlIiwibG9nIiwiT2JqZWN0Iiwia2V5cyIsImRhdGEiLCJ1c2VFZmZlY3QiLCJvbkNoYW5nZWQiLCJhZGRMaXN0ZW5lciIsImNoYW5nZXMiLCJhcmVhTmFtZSIsImdldEN1cnJlbnREYXRhIiwicGFwZXIiLCJmaWx0ZXIiLCJ2IiwiaW5jbHVkZXMiLCJtYXAiLCJpIiwiY29udGFpbmVyIiwiZmxleFdyYXAiLCJtYXhXaWR0aCIsIm1hcmdpbiIsInRleHRGaWVsZCIsInNwYWNpbmciLCJsYXN0IiwibWFyZ2luQm90dG9tIiwiT3V0bGluZWRUZXh0RmllbGRzIiwiY29kZSIsIkNzcyIsInNldENzcyIsImhhbmRsZUNoYW5nZSIsInZhbHVlIiwic2VhcmNoIiwic2VhcmNoSWNvbiIsImhlaWdodCIsInBvaW50ZXJFdmVudHMiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJpbnB1dFJvb3QiLCJjb2xvciIsImlucHV0SW5wdXQiLCJwYWRkaW5nIiwiaW5wdXQiLCJTZWFyY2hBcHBCYXIiLCJ0cmltIiwidXNlVG9vbGJhclN0eWxlcyIsImFic29sdXRlIiwiYm90dG9tIiwicmlnaHQiLCJzcGFjZXIiLCJ0b3AiLCJ0YWJsZSIsIm1pbldpZHRoIiwidGFibGVXcmFwcGVyIiwib3ZlcmZsb3dYIiwiaGVhZFJvd3MiLCJpZCIsIm51bWVyaWMiLCJsYWJlbCIsIkVuaGFuY2VkVGFibGVUb29sYmFyIiwicHJvcHMiLCJudW1TZWxlY3RlZCIsInRvZ2dsZSIsInNldFRvZ2dsZSIsIkVuaGFuY2VkVGFibGVIZWFkIiwib25TZWxlY3RBbGxDbGljayIsIm9yZGVyIiwib3JkZXJCeSIsInJvd0NvdW50Iiwib25SZXF1ZXN0U29ydCIsImNyZWF0ZVNvcnRIYW5kbGVyIiwicHJvcGVydHkiLCJldmVudCIsInJvdyIsInVzZVN0eWxlczIiLCJib3JkZXJCb3R0b21Db2xvciIsIklucHV0TWUiLCJSZWFjdCIsIm1lbW8iLCJ2YWwiLCJjbGljayIsInN0b3BQcm9wYWdhdGlvbiIsInVuZGVmaW5lZCIsInByZXZQcm9wcyIsIm5leHRQcm9wcyIsIkNoZWNrYm94MiIsImNoZWNrZWQiLCJFbmhhbmNlZFRhYmxlVG9vbGJhcjIiLCJFbmhhbmNlZFRhYmxlSGVhZDIiLCJkZWJvdW5jZSIsInRpbWUiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiZm4iLCJzdHkiLCJkZWYiLCJtaWQiLCJhcnIiLCJuYW1lIiwicmVkdWNlIiwiYWNjIiwiY29uY2F0IiwicmVzdWx0Iiwic2V0IiwiY3JlYXRlRGF0YSIsIkVuaGFuY2VkVGFibGUiLCJkYXRhQWxsIiwic2V0RGF0YSIsInNldE9yZGVyIiwic2V0T3JkZXJCeSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJoYW5kbGVSZXF1ZXN0U29ydCIsImlzRGVzYyIsInJldmVyc2UiLCJ2YWx1ZXMiLCJsZW5ndGgiLCJyb3dzIiwiQXJyYXkiLCJoYW5kbGVTZWxlY3RBbGxDbGljayIsIm5ld1NlbGVjdGVkcyIsIm4iLCJoYW5kbGVDbGljayIsImlzU2VsZWN0ZWQiLCJpbmRleE9mIiwiYSIsIkRhdGUiLCJub3ciLCJlZGl0IiwiZmllbGQiLCJuZXdSb3ciLCJpc0l0ZW1TZWxlY3RlZCIsImJ1dHRvbiIsIm9uY2UiLCJzZXRPbmNlIiwiU2VsZWN0aW9uIiwidGFicyIsImdldFNlbGVjdGVkIiwidGFiIiwiZXhlY3V0ZVNjcmlwdCIsImZpbGUiLCJydW5BdCIsImNsb3NlIiwiY2xlYXIiLCJiaW5kIiwic3RvcCIsIlJlYWN0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LENBQ0UsMkRBQUMsaUVBQUQ7QUFBZSxPQUFLLEVBQUU3TTtBQUF0QixHQUNFLDJEQUFDLHFFQUFELE9BREYsRUFFRSwyREFBQyx1REFBRCxPQUZGLENBREYsRUFLRThNLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUxGLEUiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LmpzXCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBvcHVwIGZyb20gJy4vUG9wdXAnO1xuaW1wb3J0IE9wdGlvbnMgZnJvbSAnLi9PcHRpb25zJztcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICByZXR1cm4gPD57d2luZG93LmxvY2F0aW9uLmhhc2ggPT09ICcjcG9wdXAnID8gPFBvcHVwIC8+IDogPE9wdGlvbnMgLz59PC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAndHlwZWZhY2Utcm9ib3RvJztcbmltcG9ydCBBcHAgZnJvbSAnLi9PcHRpb25zUGFnZS9BcHAnO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCB7IGNyZWF0ZU11aVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBibHVlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9ibHVlJztcblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBwcmltYXJ5OiBibHVlLFxuICAgIHNlY29uZGFyeTogYmx1ZVxuICB9XG59KTtcblxuY29uc3QgT3B0aW9ucyA9IF8gPT4gKFxuICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgIDxDc3NCYXNlbGluZSAvPlxuICAgIDxBcHAgLz5cbiAgPC9UaGVtZVByb3ZpZGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgT3B0aW9ucztcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBEcmF3ZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyJztcbmltcG9ydCBMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3QnO1xuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xuaW1wb3J0IFRhYmxlIGZyb20gJy4vY29tcG9uZW50cy9UYWJsZSc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vY29tcG9uZW50cy9TZWFyY2gnO1xuXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDMwMDtcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdmbGV4J1xuICB9LFxuICBhcHBCYXI6IHtcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcbiAgICBtYXJnaW5MZWZ0OiBkcmF3ZXJXaWR0aFxuICB9LFxuICBkcmF3ZXI6IHtcbiAgICB3aWR0aDogZHJhd2VyV2lkdGgsXG4gICAgZmxleFNocmluazogMCxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgfSxcbiAgZHJhd2VyUGFwZXI6IHtcbiAgICB3aWR0aDogZHJhd2VyV2lkdGhcbiAgfSxcbiAgdG9vbGJhcjogdGhlbWUubWl4aW5zLnRvb2xiYXIsXG4gIGNvbnRlbnQ6IHtcbiAgICBmbGV4R3JvdzogMSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5kZWZhdWx0XG4gIH0sXG4gIGJveDoge1xuICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB6SW5kZXg6IDEwLFxuICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCAtIDUsXG4gICAgdHJhbnNpdGlvbjogJ2JveC1zaGFkb3cgMC4zcyBlYXNlLWluLW91dCdcbiAgfSxcbiAgc2hhZG93OiB7XG4gICAgYm94U2hhZG93OiAnMHB4IDJweCA0cHggLTFweCAjMDAwMDAwMzMsIDBweCA0cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMTQpLCAwcHggMXB4IDEwcHggMHB4IHJnYmEoMCwwLDAsMC4xMiknXG4gIH0sXG4gIHR4dDoge1xuICAgIHBhZGRpbmdMZWZ0OiA4XG4gIH1cbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGVybWFuZW50RHJhd2VyTGVmdCgpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbZG9tYWluLCBzZXREb21haW5dID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdHh0LCBzZXRGaWx0ZXJdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3Qgc2Nyb2xsID0gZSA9PiB7XG4gICAgZS50YXJnZXQuc2Nyb2xsVG9wID4gMzAgJiYgcmVmLmN1cnJlbnQuY2xhc3NMaXN0LmFkZChjbGFzc2VzLnNoYWRvdyk7XG4gICAgZS50YXJnZXQuc2Nyb2xsVG9wIDwgMzAgJiYgcmVmLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc2VzLnNoYWRvdyk7XG4gIH07XG4gIGNvbnN0IFtjdXJyZW50RGF0YSwgc2V0Q3VycmVudERhdGFdID0gdXNlU3RhdGUoe30pO1xuXG4gIGNvbnN0IENoYW5nZSA9IGRvbWFpbiA9PiB7XG4gICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQobnVsbCwgZCA9PiB7XG4gICAgICBjb25zb2xlLmxvZygn5Yid5aeL5YyWJywgZCk7XG4gICAgICBzZXREb21haW4oT2JqZWN0LmtleXMoZCkpO1xuICAgICAgc2V0Q3VycmVudERhdGEoeyBkb21haW4sIGRhdGE6IGQgfSk7XG4gICAgICAvLyBjb25zb2xlLmxvZygncHJvcHMnLCB7IGRvbWFpbiwgZGF0YTogZCB9KTtcbiAgICB9KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIENoYW5nZSgpO1xuICAgIGNocm9tZS5zdG9yYWdlLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcigoY2hhbmdlcywgYXJlYU5hbWUpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKC4uLk9iamVjdC5rZXlzKGNoYW5nZXMpKTtcbiAgICAgIENoYW5nZSguLi5PYmplY3Qua2V5cyhjaGFuZ2VzKSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnREYXRhKTtcbiAgfSwgW2N1cnJlbnREYXRhXSk7XG5cbiAgY29uc3QgZ2V0Q3VycmVudERhdGEgPSBkb21haW4gPT4ge1xuICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KG51bGwsIGQgPT4ge1xuICAgICAgc2V0Q3VycmVudERhdGEoeyBkb21haW4sIGRhdGE6IGQgfSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyh7IGRvbWFpbiwgZGF0YTogZCB9KTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPERyYXdlclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VyfVxuICAgICAgICB2YXJpYW50PSdwZXJtYW5lbnQnXG4gICAgICAgIGNsYXNzZXM9e3tcbiAgICAgICAgICBwYXBlcjogY2xhc3Nlcy5kcmF3ZXJQYXBlclxuICAgICAgICB9fVxuICAgICAgICBhbmNob3I9J2xlZnQnXG4gICAgICAgIG9uU2Nyb2xsPXtzY3JvbGx9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJveH0gcmVmPXtyZWZ9PlxuICAgICAgICAgIDxTZWFyY2ggc2V0RmlsdGVyPXtzZXRGaWx0ZXJ9IC8+XG4gICAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhcn0gLz5cblxuICAgICAgICA8TGlzdD5cbiAgICAgICAgICB7ZG9tYWluXG4gICAgICAgICAgICAuZmlsdGVyKHYgPT4gdi5pbmNsdWRlcyh0eHQpKVxuICAgICAgICAgICAgLm1hcCgodiwgaSkgPT4gKFxuICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGtleT17aX0gb25DbGljaz17ZSA9PiBnZXRDdXJyZW50RGF0YSh2KX0+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXt2fSBjbGFzc05hbWU9e2NsYXNzZXMudHh0fSAvPlxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvTGlzdD5cbiAgICAgIDwvRHJhd2VyPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgIDxUYWJsZSB7Li4uY3VycmVudERhdGF9IC8+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcbmltcG9ydCAnLi9Dc3MuY3NzJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBjb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICBtYXhXaWR0aDogOTYwLFxuICAgIG1hcmdpbjogJ2F1dG8nXG4gIH0sXG4gIHRleHRGaWVsZDoge1xuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZyg0LCAxKVxuICB9LFxuICBsYXN0OiB7XG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDgpXG4gIH1cbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3V0bGluZWRUZXh0RmllbGRzKCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IGNvZGUgPSBgZm9udC1mYW1pbHk6ICdGaXJhIENvZGUgUmVndWxhcicsIENvbnNvbGFzICFpbXBvcnRhbnQ7XFxuZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7YDtcbiAgY29uc3QgW0Nzcywgc2V0Q3NzXSA9IHVzZVN0YXRlKGNvZGUpO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGUgPT4ge1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBzZXRDc3MoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBtYXhXaWR0aD0nbWQnPlxuICAgICAgPFRleHRGaWVsZFxuICAgICAgICBsYWJlbD17J3d3dy5nb29nbGUuY29tJ31cbiAgICAgICAgbXVsdGlsaW5lXG4gICAgICAgIHJvd3M9JzgnXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XG4gICAgICAgIG1hcmdpbj0nbm9ybWFsJ1xuICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcbiAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgIHZhbHVlPXtDc3N9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgIGlkPSd0ZXh0J1xuICAgICAgLz5cblxuICAgICAgPFRleHRGaWVsZFxuICAgICAgICBsYWJlbD0nR2xvYmFsJ1xuICAgICAgICBtdWx0aWxpbmVcbiAgICAgICAgcm93cz0nOCdcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLnRleHRGaWVsZH0gJHtjbGFzc2VzLmxhc3R9YH1cbiAgICAgICAgbWFyZ2luPSdub3JtYWwnXG4gICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xuICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgdmFsdWU9e0Nzc31cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgaWQ9J3RleHQnXG4gICAgICAvPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaCc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXQnO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIGZsZXhHcm93OiAxXG4gIH0sXG4gIHNlYXJjaDoge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gIH0sXG4gIHNlYXJjaEljb246IHtcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZygzLjUpLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXG4gIH0sXG4gIGlucHV0Um9vdDoge1xuICAgIGNvbG9yOiAnaW5oZXJpdCdcbiAgfSxcbiAgaW5wdXRJbnB1dDoge1xuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSwgMSwgMSwgNSksXG4gICAgd2lkdGg6ICcxMDAlJ1xuICB9LFxuICBpbnB1dDoge1xuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKVxuICB9XG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaEFwcEJhcih7IHNldEZpbHRlciB9KSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxUb29sYmFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaEljb259PlxuICAgICAgICAgIDxTZWFyY2hJY29uIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nU2VhcmNo4oCmJ1xuICAgICAgICAgIGNsYXNzZXM9e3tcbiAgICAgICAgICAgIHJvb3Q6IGNsYXNzZXMuaW5wdXRSb290LFxuICAgICAgICAgICAgaW5wdXQ6IGNsYXNzZXMuaW5wdXRJbnB1dFxuICAgICAgICAgIH19XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0RmlsdGVyKGUudGFyZ2V0LnZhbHVlLnRyaW0oKSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L1Rvb2xiYXI+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgVGFibGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGUnO1xuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHknO1xuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGwnO1xuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnO1xuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcbmltcG9ydCBUYWJsZVNvcnRMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVNvcnRMYWJlbCc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3gnO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcCc7XG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlJztcbmltcG9ydCBBZGRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BZGQnO1xuaW1wb3J0IEZhYiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9GYWInO1xuaW1wb3J0IElucHV0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0JztcbmltcG9ydCBTd2l0Y2ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3dpdGNoJztcbmltcG9ydCBDc3MgZnJvbSAnLi9Dc3MnO1xuXG5jb25zdCB1c2VUb29sYmFyU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBhYnNvbHV0ZToge1xuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIGJvdHRvbTogdGhlbWUuc3BhY2luZygxMCksXG4gICAgcmlnaHQ6IHRoZW1lLnNwYWNpbmcoNSksXG4gICAgekluZGV4OiAyMFxuICB9LFxuICBzcGFjZXI6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgcmlnaHQ6IDIwLFxuICAgIHpJbmRleDogMjBcbiAgfVxufSkpO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICB3aWR0aDogJzEwMCUnXG4gIH0sXG4gIHBhcGVyOiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMilcbiAgfSxcbiAgdGFibGU6IHtcbiAgICBtaW5XaWR0aDogNzUwXG4gIH0sXG4gIHRhYmxlV3JhcHBlcjoge1xuICAgIG92ZXJmbG93WDogJ2F1dG8nXG4gIH1cbn0pKTtcblxuY29uc3QgaGVhZFJvd3MgPSBbXG4gIHsgaWQ6ICdzdHknLCBudW1lcmljOiBmYWxzZSwgbGFiZWw6ICfov5DnlKjmoLflvI8nIH0sXG4gIHsgaWQ6ICdkZWYnLCBudW1lcmljOiB0cnVlLCBsYWJlbDogJ+S4jei/kOeUqOagt+W8jycgfSxcbiAgeyBpZDogJ21pZCcsIG51bWVyaWM6IHRydWUsIGxhYmVsOiAn5by65Yi257+76K+RJyB9XG5dO1xuXG5jb25zdCBFbmhhbmNlZFRhYmxlVG9vbGJhciA9IHByb3BzID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVRvb2xiYXJTdHlsZXMoKTtcbiAgY29uc3QgeyBudW1TZWxlY3RlZCwgcmVtb3ZlLCBhZGQsIHRvZ2dsZSwgc2V0VG9nZ2xlIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7dG9nZ2xlICYmXG4gICAgICAgIChudW1TZWxlY3RlZCA9PT0gMCA/IChcbiAgICAgICAgICA8VG9vbHRpcCB0aXRsZT0nQWRkJz5cbiAgICAgICAgICAgIDxGYWIgY29sb3I9J3ByaW1hcnknIGNsYXNzTmFtZT17Y2xhc3Nlcy5hYnNvbHV0ZX0gb25DbGljaz17YWRkfT5cbiAgICAgICAgICAgICAgPEFkZEljb24gLz5cbiAgICAgICAgICAgIDwvRmFiPlxuICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8VG9vbHRpcCB0aXRsZT0nRGVsZXRlJz5cbiAgICAgICAgICAgIDxGYWIgY29sb3I9J3ByaW1hcnknIGNsYXNzTmFtZT17Y2xhc3Nlcy5hYnNvbHV0ZX0gb25DbGljaz17cmVtb3ZlfT5cbiAgICAgICAgICAgICAgPERlbGV0ZUljb24gLz5cbiAgICAgICAgICAgIDwvRmFiPlxuICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgKSl9XG4gICAgICA8U3dpdGNoXG4gICAgICAgIGNvbG9yPSdwcmltYXJ5J1xuICAgICAgICBjaGVja2VkPXshdG9nZ2xlfVxuICAgICAgICBvbkNoYW5nZT17XyA9PiBzZXRUb2dnbGUoZCA9PiAhZCl9XG4gICAgICAgIHZhbHVlPSdjaGVja2VkQSdcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnNwYWNlcn1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBFbmhhbmNlZFRhYmxlSGVhZCA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBvblNlbGVjdEFsbENsaWNrLCBvcmRlciwgb3JkZXJCeSwgbnVtU2VsZWN0ZWQsIHJvd0NvdW50LCBvblJlcXVlc3RTb3J0IH0gPSBwcm9wcztcbiAgY29uc3QgY3JlYXRlU29ydEhhbmRsZXIgPSBwcm9wZXJ0eSA9PiBldmVudCA9PiBvblJlcXVlc3RTb3J0KGV2ZW50LCBwcm9wZXJ0eSk7XG5cbiAgcmV0dXJuIChcbiAgICA8VGFibGVIZWFkPlxuICAgICAgPFRhYmxlUm93PlxuICAgICAgICA8VGFibGVDZWxsIHBhZGRpbmc9J2NoZWNrYm94Jz5cbiAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgIGluZGV0ZXJtaW5hdGU9e251bVNlbGVjdGVkID4gMCAmJiBudW1TZWxlY3RlZCA8IHJvd0NvdW50fVxuICAgICAgICAgICAgY2hlY2tlZD17ISFyb3dDb3VudCAmJiBudW1TZWxlY3RlZCA9PT0gcm93Q291bnR9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25TZWxlY3RBbGxDbGlja31cbiAgICAgICAgICAvPlxuICAgICAgICA8L1RhYmxlQ2VsbD5cblxuICAgICAgICB7aGVhZFJvd3MubWFwKChyb3csIGkpID0+IChcbiAgICAgICAgICA8VGFibGVDZWxsIGtleT17aX0gYWxpZ249e3Jvdy5udW1lcmljID8gJ2NlbnRlcicgOiAnbGVmdCd9IHNvcnREaXJlY3Rpb249e29yZGVyQnkgPT09IHJvdy5pZCA/IG9yZGVyIDogZmFsc2V9PlxuICAgICAgICAgICAgPFRhYmxlU29ydExhYmVsIGFjdGl2ZT17b3JkZXJCeSA9PT0gcm93LmlkfSBkaXJlY3Rpb249e29yZGVyfSBvbkNsaWNrPXtjcmVhdGVTb3J0SGFuZGxlcihyb3cuaWQpfT5cbiAgICAgICAgICAgICAge3Jvdy5sYWJlbH1cbiAgICAgICAgICAgIDwvVGFibGVTb3J0TGFiZWw+XG4gICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICkpfVxuICAgICAgPC9UYWJsZVJvdz5cbiAgICA8L1RhYmxlSGVhZD5cbiAgKTtcbn07XG5cbmNvbnN0IHVzZVN0eWxlczIgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICAnJjo6YmVmb3JlJzoge1xuICAgICAgYm9yZGVyQm90dG9tQ29sb3I6ICcjMDAwMDAwMDAnXG4gICAgfSxcbiAgICAnJjpob3Zlcjpub3QoLk11aS1kaXNhYmxlZCk6OmJlZm9yZSc6IHtcbiAgICAgIGJvcmRlckJvdHRvbUNvbG9yOiAnIzAwMDAwMDAwJ1xuICAgIH1cbiAgfVxufSkpO1xuXG5jb25zdCBJbnB1dE1lID0gUmVhY3QubWVtbyhcbiAgKHsgdmFsLCByb3csIC4uLnByb3BzIH0pID0+IHtcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzMigpO1xuICAgIC8vIGxldCB0b2dnbGUgPSB0cnVlO1xuICAgIGNvbnN0IGNsaWNrID0gZSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgLy8gKHRvZ2dsZSA9ICF0b2dnbGUpICYmIGUudGFyZ2V0LmJsdXIoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxJbnB1dFxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH1cbiAgICAgICAgdmFsdWU9e3ZhbCA9PT0gdW5kZWZpbmVkID8gJycgOiB2YWx9XG4gICAgICAgIG9uQ2xpY2s9e2NsaWNrfVxuICAgICAgICAvLyBvbkJsdXI9e2UgPT4gdG9nZ2xlIHx8ICh0b2dnbGUgPSB0cnVlKX1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICApO1xuICB9LFxuICAocHJldlByb3BzLCBuZXh0UHJvcHMpID0+IHtcbiAgICBpZiAocHJldlByb3BzLnJvdyA9PT0gbmV4dFByb3BzLnJvdykgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4pO1xuXG5jb25zdCBDaGVja2JveDIgPSBSZWFjdC5tZW1vKFxuICBwcm9wcyA9PiB7XG4gICAgcmV0dXJuIDxDaGVja2JveCB7Li4ucHJvcHN9IC8+O1xuICB9LFxuICAocHJldlByb3BzLCBuZXh0UHJvcHMpID0+IHtcbiAgICBpZiAocHJldlByb3BzLmNoZWNrZWQgPT09IG5leHRQcm9wcy5jaGVja2VkKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbik7XG5cbmNvbnN0IEVuaGFuY2VkVGFibGVUb29sYmFyMiA9IFJlYWN0Lm1lbW8oXG4gIHByb3BzID0+IDxFbmhhbmNlZFRhYmxlVG9vbGJhciB7Li4ucHJvcHN9IC8+LFxuICAocHJldlByb3BzLCBuZXh0UHJvcHMpID0+IHtcbiAgICBpZiAocHJldlByb3BzLm51bVNlbGVjdGVkID09PSBuZXh0UHJvcHMubnVtU2VsZWN0ZWQgJiYgcHJldlByb3BzLnRvZ2dsZSA9PT0gbmV4dFByb3BzLnRvZ2dsZSkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4pO1xuY29uc3QgRW5oYW5jZWRUYWJsZUhlYWQyID0gUmVhY3QubWVtbyhcbiAgcHJvcHMgPT4gPEVuaGFuY2VkVGFibGVIZWFkIHsuLi5wcm9wc30gLz4sXG4gIChwcmV2UHJvcHMsIG5leHRQcm9wcykgPT4ge1xuICAgIGlmIChcbiAgICAgIHByZXZQcm9wcy5udW1TZWxlY3RlZCA9PT0gbmV4dFByb3BzLm51bVNlbGVjdGVkICYmXG4gICAgICBwcmV2UHJvcHMub3JkZXIgPT09IG5leHRQcm9wcy5vcmRlciAmJlxuICAgICAgcHJldlByb3BzLm9yZGVyQnkgPT09IG5leHRQcm9wcy5vcmRlckJ5ICYmXG4gICAgICBwcmV2UHJvcHMucm93Q291bnQgPT09IG5leHRQcm9wcy5yb3dDb3VudFxuICAgIClcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuKTtcblxuY29uc3QgZGVib3VuY2UgPSAoXyA9PiB7XG4gIGxldCB0aW1lID0gbnVsbDtcbiAgcmV0dXJuIChkb21haW4sIGRhdGEpID0+IHtcbiAgICBjbGVhclRpbWVvdXQodGltZSk7XG4gICAgdGltZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgZm4gPSAoc3R5LCBkZWYsIG1pZCkgPT4gKHsgc3R5LCBkZWYsIG1pZCB9KTtcbiAgICAgIGxldCBhcnIgPSBbJ3N0eScsICdkZWYnLCAnbWlkJ10ubWFwKG5hbWUgPT4gZGF0YS5yZWR1Y2UoKGFjYywgdikgPT4gKHZbbmFtZV0gPyBhY2MuY29uY2F0KHZbbmFtZV0pIDogYWNjKSwgW10pKTtcbiAgICAgIC8vIGFyciA9IGFyci5tYXAodiA9PiBbLi4ubmV3IFNldCh2KV0pO1xuICAgICAgLy8gY29uc29sZS5sb2coYXJyKTtcbiAgICAgIGxldCByZXN1bHQgPSBmbiguLi5hcnIpO1xuICAgICAgY29uc29sZS5sb2coJ3Jlc3VsdCcsIHsgW2RvbWFpbl06IHJlc3VsdCB9KTtcbiAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHsgW2RvbWFpbl06IHJlc3VsdCB9KTtcbiAgICB9LCA1MDApO1xuICB9O1xufSkoKTtcblxuY29uc3QgY3JlYXRlRGF0YSA9IChzdHksIGRlZiwgbWlkLCBpZCkgPT4gKHsgc3R5LCBkZWYsIG1pZCwgaWQgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVuaGFuY2VkVGFibGUoeyBkb21haW4sIGRhdGE6IGRhdGFBbGwgfSkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW29yZGVyLCBzZXRPcmRlcl0gPSB1c2VTdGF0ZSgnYXNjJyk7XG4gIGNvbnN0IFtvcmRlckJ5LCBzZXRPcmRlckJ5XSA9IHVzZVN0YXRlKCdjYWxvcmllcycpO1xuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCByZWYgPSB1c2VSZWYodHJ1ZSk7XG5cbiAgY29uc3QgaGFuZGxlUmVxdWVzdFNvcnQgPSAoZXZlbnQsIHByb3BlcnR5KSA9PiB7XG4gICAgY29uc3QgaXNEZXNjID0gb3JkZXJCeSA9PT0gcHJvcGVydHkgJiYgb3JkZXIgPT09ICdkZXNjJztcbiAgICBzZXRPcmRlcihpc0Rlc2MgPyAnYXNjJyA6ICdkZXNjJyk7XG4gICAgc2V0T3JkZXJCeShwcm9wZXJ0eSk7XG4gICAgc2V0RGF0YShkYXRhID0+IFsuLi5kYXRhXS5yZXZlcnNlKCkpO1xuICAgIGNvbnNvbGUubG9nKCdyZXZlcnNlJyk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KFxuICAgIF8gPT4ge1xuICAgICAgaWYgKGRhdGFBbGwgJiYgZGF0YUFsbFtkb21haW5dKSB7XG4gICAgICAgIGxldCB7IHN0eSwgZGVmLCBtaWQgfSA9IGRhdGFBbGxbZG9tYWluXTtcbiAgICAgICAgY29uc3QgaSA9IE9iamVjdC52YWx1ZXMoZGF0YUFsbFtkb21haW5dKS5yZWR1Y2UoKGFjYywgdikgPT4gKHYubGVuZ3RoID4gYWNjID8gKGFjYyA9IHYubGVuZ3RoKSA6IGFjYyksIDApO1xuICAgICAgICBjb25zdCByb3dzID0gWy4uLkFycmF5KGkpXS5tYXAoKHYsIGkpID0+IGNyZWF0ZURhdGEoc3R5W2ldIHx8ICcnLCBkZWZbaV0gfHwgJycsIG1pZFtpXSB8fCAnJywgaSkpO1xuICAgICAgICBzZXREYXRhKHJvd3MpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyb3dzKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtkb21haW4sIGRhdGFBbGxdXG4gICk7XG5cbiAgdXNlRWZmZWN0KFxuICAgIF8gPT4ge1xuICAgICAgaWYgKHJlZi5jdXJyZW50KSB7XG4gICAgICAgIHJlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgICFkYXRhLmxlbmd0aCAmJiBjaHJvbWUuc3RvcmFnZS5zeW5jLnJlbW92ZShkb21haW4pO1xuICAgICAgY29uc29sZS5sb2coJ+S5i+WQjicsIGRhdGEpO1xuICAgICAgZGVib3VuY2UoZG9tYWluLCBkYXRhKTtcbiAgICB9LFxuICAgIFtkYXRhXVxuICApO1xuXG4gIGNvbnN0IGhhbmRsZVNlbGVjdEFsbENsaWNrID0gZXZlbnQgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdldmVudC50YXJnZXQuY2hlY2tlZCcsIGV2ZW50LnRhcmdldC5jaGVja2VkKTtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgIGNvbnN0IG5ld1NlbGVjdGVkcyA9IGRhdGEubWFwKG4gPT4gbi5pZCk7XG4gICAgICBjb25zb2xlLmxvZyhuZXdTZWxlY3RlZHMpO1xuICAgICAgc2V0U2VsZWN0ZWQobmV3U2VsZWN0ZWRzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0U2VsZWN0ZWQoW10pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50LCBuYW1lKSA9PiB7XG4gICAgc2VsZWN0ZWQuaW5jbHVkZXMobmFtZSkgPyBzZXRTZWxlY3RlZChzZWxlY3RlZC5maWx0ZXIodiA9PiB2ICE9PSBuYW1lKSkgOiBzZXRTZWxlY3RlZChzZWxlY3RlZC5jb25jYXQobmFtZSkpO1xuICB9O1xuXG4gIGNvbnN0IGlzU2VsZWN0ZWQgPSBuYW1lID0+IHNlbGVjdGVkLmluZGV4T2YobmFtZSkgIT09IC0xO1xuXG4gIGNvbnN0IHJlbW92ZSA9IF8gPT4ge1xuICAgIHNldERhdGEoZGF0YSA9PiBkYXRhLmZpbHRlcih2ID0+ICFzZWxlY3RlZC5pbmNsdWRlcyh2LmlkKSkpO1xuICAgIHNldFNlbGVjdGVkKFtdKTtcbiAgfTtcblxuICBjb25zdCBhZGQgPSBfID0+IHtcbiAgICBjb25zdCBhID0gY3JlYXRlRGF0YSh1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBEYXRlLm5vdygpKTtcbiAgICBzZXREYXRhKGRhdGEgPT4gZGF0YS5jb25jYXQoYSkpO1xuICB9O1xuICBjb25zdCBlZGl0ID0gKGZpZWxkLCByb3cpID0+IGUgPT4ge1xuICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IG5ld1JvdyA9IHsgLi4ucm93LCBbZmllbGRdOiB2YWwgfTtcbiAgICBzZXREYXRhKGRhdGEgPT4gZGF0YS5tYXAodiA9PiAodiA9PT0gcm93ID8gbmV3Um93IDogdikpKTtcbiAgICBjb25zb2xlLmxvZygnZWRpdDonLCBkYXRhLm1hcCh2ID0+ICh2ID09PSByb3cgPyBuZXdSb3cgOiB2KSkpO1xuICAgIGNvbnNvbGUubG9nKCfmmK/lkKbph43lpI0gPT4gJywgZGF0YS5tYXAodiA9PiB2W2ZpZWxkXSkuaW5jbHVkZXModmFsKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cbiAgICAgIDxFbmhhbmNlZFRhYmxlVG9vbGJhcjJcbiAgICAgICAgbnVtU2VsZWN0ZWQ9e3NlbGVjdGVkLmxlbmd0aH1cbiAgICAgICAgcmVtb3ZlPXtyZW1vdmV9XG4gICAgICAgIGFkZD17YWRkfVxuICAgICAgICB0b2dnbGU9e3RvZ2dsZX1cbiAgICAgICAgc2V0VG9nZ2xlPXtzZXRUb2dnbGV9XG4gICAgICAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJsZVdyYXBwZXJ9PlxuICAgICAgICB7dG9nZ2xlID8gKFxuICAgICAgICAgIDxUYWJsZSBjbGFzc05hbWU9e2NsYXNzZXMudGFibGV9IHNpemU9J21lZGl1bSc+XG4gICAgICAgICAgICA8RW5oYW5jZWRUYWJsZUhlYWQyXG4gICAgICAgICAgICAgIG51bVNlbGVjdGVkPXtzZWxlY3RlZC5sZW5ndGh9XG4gICAgICAgICAgICAgIG9yZGVyPXtvcmRlcn1cbiAgICAgICAgICAgICAgb3JkZXJCeT17b3JkZXJCeX1cbiAgICAgICAgICAgICAgb25TZWxlY3RBbGxDbGljaz17aGFuZGxlU2VsZWN0QWxsQ2xpY2t9XG4gICAgICAgICAgICAgIG9uUmVxdWVzdFNvcnQ9e2hhbmRsZVJlcXVlc3RTb3J0fVxuICAgICAgICAgICAgICByb3dDb3VudD17ZGF0YS5sZW5ndGh9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8VGFibGVCb2R5PlxuICAgICAgICAgICAgICB7ZGF0YS5sZW5ndGggPyAoXG4gICAgICAgICAgICAgICAgZGF0YS5tYXAoKHJvdywgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgaXNJdGVtU2VsZWN0ZWQgPSBpc1NlbGVjdGVkKHJvdy5pZCk7XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBob3ZlciBvbkNsaWNrPXtlID0+IGhhbmRsZUNsaWNrKGUsIHJvdy5pZCl9IGtleT17aX0gc2VsZWN0ZWQ9e2lzSXRlbVNlbGVjdGVkfT5cbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHBhZGRpbmc9J2NoZWNrYm94Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveDIgY2hlY2tlZD17aXNJdGVtU2VsZWN0ZWR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHNjb3BlPSdyb3cnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TWUgdmFsPXtyb3cuc3R5fSBvbkNoYW5nZT17ZWRpdCgnc3R5Jywgcm93KX0gcm93PXtyb3d9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj0nY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dE1lIHZhbD17cm93LmRlZn0gb25DaGFuZ2U9e2VkaXQoJ2RlZicsIHJvdyl9IHJvdz17cm93fSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249J2NlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRNZSB2YWw9e3Jvdy5taWR9IG9uQ2hhbmdlPXtlZGl0KCdtaWQnLCByb3cpfSByb3c9e3Jvd30gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbFNwYW49ezR9PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBhbGlnbj0nY2VudGVyJyB2YXJpYW50PSdzdWJ0aXRsZTInIGNvbG9yPSd0ZXh0U2Vjb25kYXJ5Jz5cbiAgICAgICAgICAgICAgICAgICAgICDmsqHmnInmlbDmja5cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvVGFibGVCb2R5PlxuICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPENzcyAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9QYXBlcj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIHBhZGRpbmc6IDEwLFxuICAgIHdpZHRoOiAxNTBcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgbWFyZ2luQm90dG9tOiA4XG4gIH1cbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgXyA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW29uY2UsIHNldE9uY2VdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgU2VsZWN0aW9uID0gZSA9PiB7XG4gICAgY2hyb21lLnRhYnMuZ2V0U2VsZWN0ZWQodGFiID0+IHtcbiAgICAgIGNocm9tZS50YWJzLmV4ZWN1dGVTY3JpcHQodGFiLmlkLCB7XG4gICAgICAgIGZpbGU6ICdzZWxlY3Rvci5qcycsXG4gICAgICAgIHJ1bkF0OiAnZG9jdW1lbnRfc3RhcnQnXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBzZXRPbmNlKGZhbHNlKTtcbiAgICB3aW5kb3cuY2xvc2UoKTtcbiAgfTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBTZWxlY3Rpb24oKTtcbiAgfSwgW10pO1xuICBjb25zdCBjbGVhciA9ICgpID0+IHtcbiAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmNsZWFyKGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSwgJ0NsZWFyJykpO1xuXG4gICAgY2hyb21lLnRhYnMuZ2V0U2VsZWN0ZWQodGFiID0+IHtcbiAgICAgIGNocm9tZS50YWJzLmV4ZWN1dGVTY3JpcHQodGFiLmlkLCB7XG4gICAgICAgIGNvZGU6IGB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7YCxcbiAgICAgICAgcnVuQXQ6ICdkb2N1bWVudF9zdGFydCdcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuICBjb25zdCBzdG9wID0gKCkgPT4ge1xuICAgIC8vIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sIHRhYiA9PiB7XG4gICAgLy8gICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWJbMF0uaWQsICdOT1RSQU5TTEFURScpO1xuICAgIC8vIH0pO1xuICAgIC8vIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sIGZ1bmN0aW9uKHRhYnMpIHtcbiAgICAvLyAgIGNocm9tZS50YWJzLnJlbG9hZCh0YWJzWzBdLmlkKTtcbiAgICAvLyB9KTtcbiAgICAvLyBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCBmdW5jdGlvbih0YWJzKSB7XG4gICAgLy8gICBjaHJvbWUudGFicy51cGRhdGUodGFic1swXS5pZCwgeyB1cmw6IHRhYnNbMF0udXJsIH0pO1xuICAgIC8vIH0pO1xuICAgIC8vIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sIGZ1bmN0aW9uKGFycmF5T2ZUYWJzKSB7XG4gICAgLy8gICB2YXIgY29kZSA9ICd3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7JztcbiAgICAvLyAgIGNocm9tZS50YWJzLmV4ZWN1dGVTY3JpcHQoYXJyYXlPZlRhYnNbMF0uaWQsIHsgY29kZTogY29kZSB9KTtcbiAgICAvLyB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPEJ1dHRvblxuICAgICAgICBjb2xvcj0ncHJpbWFyeSdcbiAgICAgICAgdmFyaWFudD0nY29udGFpbmVkJ1xuICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgb25DbGljaz17b25jZSA/IFNlbGVjdGlvbiA6IG51bGx9XG4gICAgICA+XG4gICAgICAgIOe/u+ivkVxuICAgICAgPC9CdXR0b24+XG4gICAgICA8QnV0dG9uIGNvbG9yPSdzZWNvbmRhcnknIHZhcmlhbnQ9J2NvbnRhaW5lZCcgZnVsbFdpZHRoIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IG9uQ2xpY2s9e3N0b3B9PlxuICAgICAgICDkuI3nv7vor5FcbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPEJ1dHRvbiBjb2xvcj0nc2Vjb25kYXJ5JyB2YXJpYW50PSdjb250YWluZWQnIGZ1bGxXaWR0aCBvbkNsaWNrPXtjbGVhcn0+XG4gICAgICAgIOa4heepulxuICAgICAgPC9CdXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwJztcblxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCB7IGNyZWF0ZU11aVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBibHVlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9ibHVlJztcblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBwcmltYXJ5OiBibHVlXG4gIH1cbn0pO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgPEFwcCAvPlxuICA8L1RoZW1lUHJvdmlkZXI+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==