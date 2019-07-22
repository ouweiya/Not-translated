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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }










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
  var arr = ['127.0.0.1', 'github.com', 'material-ui.com'];
  arr = _toConsumableArray(Array(10)).reduce(function (acc, v) {
    return acc.concat(arr);
  }, []);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(arr),
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
      key: i
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], {
      primary: v,
      className: classes.txt
    }));
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: classes.content
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table__WEBPACK_IMPORTED_MODULE_7__["default"], null)));
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
      marginBottom: theme.spacing(8),
      fontFamily: 'Fira Code Regular',
      color: 'pink'
    },
    root: {
      padding: 0
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
    onChange: handleChange
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: "Global",
    multiline: true,
    rows: "8",
    className: "".concat(classes.textField, " ").concat(classes.last),
    margin: "normal",
    variant: "outlined",
    fullWidth: true,
    value: Css,
    onChange: handleChange
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }



















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

var createData = function createData(sty, def, mid, id) {
  return {
    sty: sty,
    def: def,
    mid: mid,
    id: id
  };
};

var rows = _toConsumableArray(Array(10)).map(function (v, i) {
  return createData("Jack-".concat(i), i, i, i);
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

  var classes = useStyles2();
  var toggle = true;

  var click = function click(e) {
    e.stopPropagation();
    (toggle = !toggle) && e.target.blur();
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_15__["default"], _extends({
    className: classes.root,
    value: val === undefined ? '' : val,
    onClick: click,
    onBlur: function onBlur(e) {
      return toggle || (toggle = true);
    }
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
  return function (data) {
    clearTimeout(time);
    time = setTimeout(function () {
      var fn = function fn(sty, def, mid, css) {
        return {
          sty: sty,
          def: def,
          mid: mid,
          css: css
        };
      };

      var arr = ['sty', 'def', 'mid', 'css'].map(function (name) {
        return data.reduce(function (acc, v) {
          return v[name] ? acc.concat(v[name]) : acc;
        }, []);
      });
      var obj = fn.apply(void 0, _toConsumableArray(arr));
      console.log(obj);
    }, 1000);
  };
}();

function EnhancedTable() {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(rows),
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

  var handleRequestSort = function handleRequestSort(event, property) {
    var isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
    setData(function (data) {
      return _toConsumableArray(data).reverse();
    });
    console.log('reverse');
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log('之后', data); // console.log('selected', selected);
    // debounce(data);
  }, [selected, data]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL09wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3B0aW9uc1BhZ2UvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL09wdGlvbnNQYWdlL2NvbXBvbmVudHMvQ3NzLmNzcz8wY2UxIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL09wdGlvbnNQYWdlL2NvbXBvbmVudHMvQ3NzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL09wdGlvbnNQYWdlL2NvbXBvbmVudHMvU2VhcmNoLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL09wdGlvbnNQYWdlL2NvbXBvbmVudHMvVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFwcCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaGFzaCIsInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwicHJpbWFyeSIsImJsdWUiLCJzZWNvbmRhcnkiLCJPcHRpb25zIiwiXyIsImRyYXdlcldpZHRoIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJkaXNwbGF5IiwiYXBwQmFyIiwid2lkdGgiLCJtYXJnaW5MZWZ0IiwiZHJhd2VyIiwiZmxleFNocmluayIsIm92ZXJmbG93IiwiZHJhd2VyUGFwZXIiLCJ0b29sYmFyIiwibWl4aW5zIiwiY29udGVudCIsImZsZXhHcm93IiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZCIsImJveCIsImJveFNpemluZyIsInBvc2l0aW9uIiwiekluZGV4IiwidHJhbnNpdGlvbiIsInNoYWRvdyIsImJveFNoYWRvdyIsInR4dCIsInBhZGRpbmdMZWZ0IiwiUGVybWFuZW50RHJhd2VyTGVmdCIsImNsYXNzZXMiLCJhcnIiLCJBcnJheSIsInJlZHVjZSIsImFjYyIsInYiLCJjb25jYXQiLCJ1c2VTdGF0ZSIsImRvbWFpbiIsInNldERvbWFpbiIsInNldEZpbHRlciIsInJlZiIsInVzZVJlZiIsInNjcm9sbCIsImUiLCJ0YXJnZXQiLCJzY3JvbGxUb3AiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwicGFwZXIiLCJmaWx0ZXIiLCJpbmNsdWRlcyIsIm1hcCIsImkiLCJjb250YWluZXIiLCJmbGV4V3JhcCIsIm1heFdpZHRoIiwibWFyZ2luIiwidGV4dEZpZWxkIiwic3BhY2luZyIsImxhc3QiLCJtYXJnaW5Cb3R0b20iLCJmb250RmFtaWx5IiwiY29sb3IiLCJwYWRkaW5nIiwiT3V0bGluZWRUZXh0RmllbGRzIiwiY29kZSIsIkNzcyIsInNldENzcyIsImhhbmRsZUNoYW5nZSIsImNvbnNvbGUiLCJsb2ciLCJ2YWx1ZSIsInNlYXJjaCIsInNlYXJjaEljb24iLCJoZWlnaHQiLCJwb2ludGVyRXZlbnRzIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaW5wdXRSb290IiwiaW5wdXRJbnB1dCIsImlucHV0IiwiU2VhcmNoQXBwQmFyIiwidHJpbSIsInVzZVRvb2xiYXJTdHlsZXMiLCJhYnNvbHV0ZSIsImJvdHRvbSIsInJpZ2h0Iiwic3BhY2VyIiwidG9wIiwidGFibGUiLCJtaW5XaWR0aCIsInRhYmxlV3JhcHBlciIsIm92ZXJmbG93WCIsImNyZWF0ZURhdGEiLCJzdHkiLCJkZWYiLCJtaWQiLCJpZCIsInJvd3MiLCJoZWFkUm93cyIsIm51bWVyaWMiLCJsYWJlbCIsIkVuaGFuY2VkVGFibGVUb29sYmFyIiwicHJvcHMiLCJudW1TZWxlY3RlZCIsInRvZ2dsZSIsInNldFRvZ2dsZSIsImQiLCJFbmhhbmNlZFRhYmxlSGVhZCIsIm9uU2VsZWN0QWxsQ2xpY2siLCJvcmRlciIsIm9yZGVyQnkiLCJyb3dDb3VudCIsIm9uUmVxdWVzdFNvcnQiLCJjcmVhdGVTb3J0SGFuZGxlciIsInByb3BlcnR5IiwiZXZlbnQiLCJyb3ciLCJ1c2VTdHlsZXMyIiwiYm9yZGVyQm90dG9tQ29sb3IiLCJJbnB1dE1lIiwiUmVhY3QiLCJtZW1vIiwidmFsIiwiY2xpY2siLCJzdG9wUHJvcGFnYXRpb24iLCJibHVyIiwidW5kZWZpbmVkIiwicHJldlByb3BzIiwibmV4dFByb3BzIiwiQ2hlY2tib3gyIiwiY2hlY2tlZCIsIkVuaGFuY2VkVGFibGVUb29sYmFyMiIsIkVuaGFuY2VkVGFibGVIZWFkMiIsImRlYm91bmNlIiwidGltZSIsImRhdGEiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiZm4iLCJjc3MiLCJuYW1lIiwib2JqIiwiRW5oYW5jZWRUYWJsZSIsInNldERhdGEiLCJzZXRPcmRlciIsInNldE9yZGVyQnkiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiaGFuZGxlUmVxdWVzdFNvcnQiLCJpc0Rlc2MiLCJyZXZlcnNlIiwidXNlRWZmZWN0IiwiaGFuZGxlU2VsZWN0QWxsQ2xpY2siLCJuZXdTZWxlY3RlZHMiLCJuIiwiaGFuZGxlQ2xpY2siLCJpc1NlbGVjdGVkIiwiaW5kZXhPZiIsImEiLCJEYXRlIiwibm93IiwiZWRpdCIsImZpZWxkIiwibmV3Um93IiwibGVuZ3RoIiwiaXNJdGVtU2VsZWN0ZWQiLCJidXR0b24iLCJvbmNlIiwic2V0T25jZSIsIlNlbGVjdGlvbiIsImNocm9tZSIsInRhYnMiLCJnZXRTZWxlY3RlZCIsInRhYiIsImV4ZWN1dGVTY3JpcHQiLCJmaWxlIiwicnVuQXQiLCJjbG9zZSIsImNsZWFyIiwic3RvcmFnZSIsInN5bmMiLCJiaW5kIiwic3RvcCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FB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LGFBQVMsRUFBRTVKLE9BQU8sQ0FBQ3pCO0FBQXhCLEtBQ0UsMkRBQUMsZ0VBQUQ7QUFDRSxTQUFLLEVBQUMsU0FEUjtBQUVFLFdBQU8sRUFBQyxXQUZWO0FBR0UsYUFBUyxNQUhYO0FBSUUsYUFBUyxFQUFFeUIsT0FBTyxDQUFDNEksTUFKckI7QUFLRSxXQUFPLEVBQUVDLElBQUksR0FBR0UsU0FBSCxHQUFlO0FBTDlCLG9CQURGLEVBVUUsMkRBQUMsZ0VBQUQ7QUFBUSxTQUFLLEVBQUMsV0FBZDtBQUEwQixXQUFPLEVBQUMsV0FBbEM7QUFBOEMsYUFBUyxNQUF2RDtBQUF3RCxhQUFTLEVBQUUvSSxPQUFPLENBQUM0SSxNQUEzRTtBQUFtRixXQUFPLEVBQUVnQjtBQUE1RiwwQkFWRixFQWFFLDJEQUFDLGdFQUFEO0FBQVEsU0FBSyxFQUFDLFdBQWQ7QUFBMEIsV0FBTyxFQUFDLFdBQWxDO0FBQThDLGFBQVMsTUFBdkQ7QUFBd0QsV0FBTyxFQUFFSjtBQUFqRSxvQkFiRixDQURGO0FBbUJELENBOURELEU7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU01TCxLQUFLLEdBQUdDLCtFQUFjLENBQUM7QUFDM0JDLFNBQU8sRUFBRTtBQUNQQyxXQUFPLEVBQUVDLG9FQUFJQTtBQUROO0FBRGtCLENBQUQsQ0FBNUI7QUFNQTZMLGdEQUFRLENBQUNDLE1BQVQsQ0FDRSwyREFBQyxpRUFBRDtBQUFlLE9BQUssRUFBRWxNO0FBQXRCLEdBQ0UsMkRBQUMscUVBQUQsT0FERixFQUVFLDJEQUFDLHVEQUFELE9BRkYsQ0FERixFQUtFbU0sUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBTEYsRSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXguanNcIixcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUG9wdXAgZnJvbSAnLi9Qb3B1cCc7XG5pbXBvcnQgT3B0aW9ucyBmcm9tICcuL09wdGlvbnMnO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gIHJldHVybiA8Pnt3aW5kb3cubG9jYXRpb24uaGFzaCA9PT0gJyNwb3B1cCcgPyA8UG9wdXAgLz4gOiA8T3B0aW9ucyAvPn08Lz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICd0eXBlZmFjZS1yb2JvdG8nO1xuaW1wb3J0IEFwcCBmcm9tICcuL09wdGlvbnNQYWdlL0FwcCc7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xuaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IGJsdWUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL2JsdWUnO1xuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIHByaW1hcnk6IGJsdWUsXG4gICAgc2Vjb25kYXJ5OiBibHVlXG4gIH1cbn0pO1xuXG5jb25zdCBPcHRpb25zID0gXyA9PiAoXG4gIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgPEFwcCAvPlxuICA8L1RoZW1lUHJvdmlkZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBPcHRpb25zO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBEcmF3ZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyJztcbmltcG9ydCBMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3QnO1xuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xuaW1wb3J0IFRhYmxlIGZyb20gJy4vY29tcG9uZW50cy9UYWJsZSc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vY29tcG9uZW50cy9TZWFyY2gnO1xuXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDMwMDtcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdmbGV4J1xuICB9LFxuICBhcHBCYXI6IHtcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcbiAgICBtYXJnaW5MZWZ0OiBkcmF3ZXJXaWR0aFxuICB9LFxuICBkcmF3ZXI6IHtcbiAgICB3aWR0aDogZHJhd2VyV2lkdGgsXG4gICAgZmxleFNocmluazogMCxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgfSxcbiAgZHJhd2VyUGFwZXI6IHtcbiAgICB3aWR0aDogZHJhd2VyV2lkdGhcbiAgfSxcbiAgdG9vbGJhcjogdGhlbWUubWl4aW5zLnRvb2xiYXIsXG4gIGNvbnRlbnQ6IHtcbiAgICBmbGV4R3JvdzogMSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5kZWZhdWx0XG4gIH0sXG4gIGJveDoge1xuICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB6SW5kZXg6IDEwLFxuICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCAtIDUsXG4gICAgdHJhbnNpdGlvbjogJ2JveC1zaGFkb3cgMC4zcyBlYXNlLWluLW91dCdcbiAgfSxcbiAgc2hhZG93OiB7XG4gICAgYm94U2hhZG93OiAnMHB4IDJweCA0cHggLTFweCAjMDAwMDAwMzMsIDBweCA0cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMTQpLCAwcHggMXB4IDEwcHggMHB4IHJnYmEoMCwwLDAsMC4xMiknXG4gIH0sXG4gIHR4dDoge1xuICAgIHBhZGRpbmdMZWZ0OiA4XG4gIH1cbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGVybWFuZW50RHJhd2VyTGVmdCgpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBsZXQgYXJyID0gWycxMjcuMC4wLjEnLCAnZ2l0aHViLmNvbScsICdtYXRlcmlhbC11aS5jb20nXTtcbiAgYXJyID0gWy4uLkFycmF5KDEwKV0ucmVkdWNlKChhY2MsIHYpID0+IGFjYy5jb25jYXQoYXJyKSwgW10pO1xuXG4gIGNvbnN0IFtkb21haW4sIHNldERvbWFpbl0gPSB1c2VTdGF0ZShhcnIpO1xuICBjb25zdCBbdHh0LCBzZXRGaWx0ZXJdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3Qgc2Nyb2xsID0gZSA9PiB7XG4gICAgZS50YXJnZXQuc2Nyb2xsVG9wID4gMzAgJiYgcmVmLmN1cnJlbnQuY2xhc3NMaXN0LmFkZChjbGFzc2VzLnNoYWRvdyk7XG4gICAgZS50YXJnZXQuc2Nyb2xsVG9wIDwgMzAgJiYgcmVmLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc2VzLnNoYWRvdyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxEcmF3ZXJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlcn1cbiAgICAgICAgdmFyaWFudD0ncGVybWFuZW50J1xuICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgcGFwZXI6IGNsYXNzZXMuZHJhd2VyUGFwZXJcbiAgICAgICAgfX1cbiAgICAgICAgYW5jaG9yPSdsZWZ0J1xuICAgICAgICBvblNjcm9sbD17c2Nyb2xsfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib3h9IHJlZj17cmVmfT5cbiAgICAgICAgICA8U2VhcmNoIHNldEZpbHRlcj17c2V0RmlsdGVyfSAvPlxuICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xiYXJ9IC8+XG5cbiAgICAgICAgPExpc3Q+XG4gICAgICAgICAge2RvbWFpblxuICAgICAgICAgICAgLmZpbHRlcih2ID0+IHYuaW5jbHVkZXModHh0KSlcbiAgICAgICAgICAgIC5tYXAoKHYsIGkpID0+IChcbiAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17dn0gY2xhc3NOYW1lPXtjbGFzc2VzLnR4dH0gLz5cbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L0xpc3Q+XG4gICAgICA8L0RyYXdlcj5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAgICA8VGFibGUgLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xuaW1wb3J0ICcuL0Nzcy5jc3MnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIGNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgIG1heFdpZHRoOiA5NjAsXG4gICAgbWFyZ2luOiAnYXV0bydcbiAgfSxcbiAgdGV4dEZpZWxkOiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDQsIDEpXG4gIH0sXG4gIGxhc3Q6IHtcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoOCksXG4gICAgZm9udEZhbWlseTogJ0ZpcmEgQ29kZSBSZWd1bGFyJyxcbiAgICBjb2xvcjogJ3BpbmsnXG4gIH0sXG4gIHJvb3Q6IHtcbiAgICBwYWRkaW5nOiAwXG4gIH1cbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3V0bGluZWRUZXh0RmllbGRzKCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IGNvZGUgPSBgZm9udC1mYW1pbHk6ICdGaXJhIENvZGUgUmVndWxhcicsIENvbnNvbGFzICFpbXBvcnRhbnQ7XFxuZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7YDtcbiAgY29uc3QgW0Nzcywgc2V0Q3NzXSA9IHVzZVN0YXRlKGNvZGUpO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGUgPT4ge1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBzZXRDc3MoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBtYXhXaWR0aD0nbWQnPlxuICAgICAgPFRleHRGaWVsZFxuICAgICAgICBsYWJlbD17J3d3dy5nb29nbGUuY29tJ31cbiAgICAgICAgbXVsdGlsaW5lXG4gICAgICAgIHJvd3M9JzgnXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XG4gICAgICAgIG1hcmdpbj0nbm9ybWFsJ1xuICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcbiAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgIHZhbHVlPXtDc3N9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAvPlxuXG4gICAgICA8VGV4dEZpZWxkXG4gICAgICAgIGxhYmVsPSdHbG9iYWwnXG4gICAgICAgIG11bHRpbGluZVxuICAgICAgICByb3dzPSc4J1xuICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzZXMudGV4dEZpZWxkfSAke2NsYXNzZXMubGFzdH1gfVxuICAgICAgICBtYXJnaW49J25vcm1hbCdcbiAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXG4gICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICB2YWx1ZT17Q3NzfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZWFyY2gnO1xuaW1wb3J0IElucHV0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0JztcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBmbGV4R3JvdzogMVxuICB9LFxuICBzZWFyY2g6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICB9LFxuICBzZWFyY2hJY29uOiB7XG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoMy41KSxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xuICB9LFxuICBpbnB1dFJvb3Q6IHtcbiAgICBjb2xvcjogJ2luaGVyaXQnXG4gIH0sXG4gIGlucHV0SW5wdXQ6IHtcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEsIDEsIDEsIDUpLFxuICAgIHdpZHRoOiAnMTAwJSdcbiAgfSxcbiAgaW5wdXQ6IHtcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSlcbiAgfVxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2hBcHBCYXIoeyBzZXRGaWx0ZXIgfSkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8VG9vbGJhciBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2h9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hJY29ufT5cbiAgICAgICAgICA8U2VhcmNoSWNvbiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgcGxhY2Vob2xkZXI9J1NlYXJjaOKApidcbiAgICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgICByb290OiBjbGFzc2VzLmlucHV0Um9vdCxcbiAgICAgICAgICAgIGlucHV0OiBjbGFzc2VzLmlucHV0SW5wdXRcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEZpbHRlcihlLnRhcmdldC52YWx1ZS50cmltKCkpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9Ub29sYmFyPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBUYWJsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZSc7XG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keSc7XG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbCc7XG5pbXBvcnQgVGFibGVIZWFkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZCc7XG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3cnO1xuaW1wb3J0IFRhYmxlU29ydExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlU29ydExhYmVsJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBDaGVja2JveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaGVja2JveCc7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sdGlwJztcbmltcG9ydCBEZWxldGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9EZWxldGUnO1xuaW1wb3J0IEFkZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FkZCc7XG5pbXBvcnQgRmFiIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ZhYic7XG5pbXBvcnQgSW5wdXQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXQnO1xuaW1wb3J0IFN3aXRjaCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Td2l0Y2gnO1xuaW1wb3J0IENzcyBmcm9tICcuL0Nzcyc7XG5cbmNvbnN0IHVzZVRvb2xiYXJTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIGFic29sdXRlOiB7XG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgYm90dG9tOiB0aGVtZS5zcGFjaW5nKDEwKSxcbiAgICByaWdodDogdGhlbWUuc3BhY2luZyg1KSxcbiAgICB6SW5kZXg6IDIwXG4gIH0sXG4gIHNwYWNlcjoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMCxcbiAgICByaWdodDogMjAsXG4gICAgekluZGV4OiAyMFxuICB9XG59KSk7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIHdpZHRoOiAnMTAwJSdcbiAgfSxcbiAgcGFwZXI6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygyKVxuICB9LFxuICB0YWJsZToge1xuICAgIG1pbldpZHRoOiA3NTBcbiAgfSxcbiAgdGFibGVXcmFwcGVyOiB7XG4gICAgb3ZlcmZsb3dYOiAnYXV0bydcbiAgfVxufSkpO1xuXG5jb25zdCBjcmVhdGVEYXRhID0gKHN0eSwgZGVmLCBtaWQsIGlkKSA9PiAoeyBzdHksIGRlZiwgbWlkLCBpZCB9KTtcbmNvbnN0IHJvd3MgPSBbLi4uQXJyYXkoMTApXS5tYXAoKHYsIGkpID0+IGNyZWF0ZURhdGEoYEphY2stJHtpfWAsIGksIGksIGkpKTtcblxuY29uc3QgaGVhZFJvd3MgPSBbXG4gIHsgaWQ6ICdzdHknLCBudW1lcmljOiBmYWxzZSwgbGFiZWw6ICfov5DnlKjmoLflvI8nIH0sXG4gIHsgaWQ6ICdkZWYnLCBudW1lcmljOiB0cnVlLCBsYWJlbDogJ+S4jei/kOeUqOagt+W8jycgfSxcbiAgeyBpZDogJ21pZCcsIG51bWVyaWM6IHRydWUsIGxhYmVsOiAn5by65Yi257+76K+RJyB9XG5dO1xuXG5jb25zdCBFbmhhbmNlZFRhYmxlVG9vbGJhciA9IHByb3BzID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVRvb2xiYXJTdHlsZXMoKTtcbiAgY29uc3QgeyBudW1TZWxlY3RlZCwgcmVtb3ZlLCBhZGQsIHRvZ2dsZSwgc2V0VG9nZ2xlIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7dG9nZ2xlICYmXG4gICAgICAgIChudW1TZWxlY3RlZCA9PT0gMCA/IChcbiAgICAgICAgICA8VG9vbHRpcCB0aXRsZT0nQWRkJz5cbiAgICAgICAgICAgIDxGYWIgY29sb3I9J3ByaW1hcnknIGNsYXNzTmFtZT17Y2xhc3Nlcy5hYnNvbHV0ZX0gb25DbGljaz17YWRkfT5cbiAgICAgICAgICAgICAgPEFkZEljb24gLz5cbiAgICAgICAgICAgIDwvRmFiPlxuICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8VG9vbHRpcCB0aXRsZT0nRGVsZXRlJz5cbiAgICAgICAgICAgIDxGYWIgY29sb3I9J3ByaW1hcnknIGNsYXNzTmFtZT17Y2xhc3Nlcy5hYnNvbHV0ZX0gb25DbGljaz17cmVtb3ZlfT5cbiAgICAgICAgICAgICAgPERlbGV0ZUljb24gLz5cbiAgICAgICAgICAgIDwvRmFiPlxuICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgKSl9XG4gICAgICA8U3dpdGNoXG4gICAgICAgIGNvbG9yPSdwcmltYXJ5J1xuICAgICAgICBjaGVja2VkPXshdG9nZ2xlfVxuICAgICAgICBvbkNoYW5nZT17XyA9PiBzZXRUb2dnbGUoZCA9PiAhZCl9XG4gICAgICAgIHZhbHVlPSdjaGVja2VkQSdcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnNwYWNlcn1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBFbmhhbmNlZFRhYmxlSGVhZCA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBvblNlbGVjdEFsbENsaWNrLCBvcmRlciwgb3JkZXJCeSwgbnVtU2VsZWN0ZWQsIHJvd0NvdW50LCBvblJlcXVlc3RTb3J0IH0gPSBwcm9wcztcbiAgY29uc3QgY3JlYXRlU29ydEhhbmRsZXIgPSBwcm9wZXJ0eSA9PiBldmVudCA9PiBvblJlcXVlc3RTb3J0KGV2ZW50LCBwcm9wZXJ0eSk7XG5cbiAgcmV0dXJuIChcbiAgICA8VGFibGVIZWFkPlxuICAgICAgPFRhYmxlUm93PlxuICAgICAgICA8VGFibGVDZWxsIHBhZGRpbmc9J2NoZWNrYm94Jz5cbiAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgIGluZGV0ZXJtaW5hdGU9e251bVNlbGVjdGVkID4gMCAmJiBudW1TZWxlY3RlZCA8IHJvd0NvdW50fVxuICAgICAgICAgICAgY2hlY2tlZD17ISFyb3dDb3VudCAmJiBudW1TZWxlY3RlZCA9PT0gcm93Q291bnR9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25TZWxlY3RBbGxDbGlja31cbiAgICAgICAgICAvPlxuICAgICAgICA8L1RhYmxlQ2VsbD5cblxuICAgICAgICB7aGVhZFJvd3MubWFwKChyb3csIGkpID0+IChcbiAgICAgICAgICA8VGFibGVDZWxsIGtleT17aX0gYWxpZ249e3Jvdy5udW1lcmljID8gJ2NlbnRlcicgOiAnbGVmdCd9IHNvcnREaXJlY3Rpb249e29yZGVyQnkgPT09IHJvdy5pZCA/IG9yZGVyIDogZmFsc2V9PlxuICAgICAgICAgICAgPFRhYmxlU29ydExhYmVsIGFjdGl2ZT17b3JkZXJCeSA9PT0gcm93LmlkfSBkaXJlY3Rpb249e29yZGVyfSBvbkNsaWNrPXtjcmVhdGVTb3J0SGFuZGxlcihyb3cuaWQpfT5cbiAgICAgICAgICAgICAge3Jvdy5sYWJlbH1cbiAgICAgICAgICAgIDwvVGFibGVTb3J0TGFiZWw+XG4gICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICkpfVxuICAgICAgPC9UYWJsZVJvdz5cbiAgICA8L1RhYmxlSGVhZD5cbiAgKTtcbn07XG5cbmNvbnN0IHVzZVN0eWxlczIgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICAnJjo6YmVmb3JlJzoge1xuICAgICAgYm9yZGVyQm90dG9tQ29sb3I6ICcjMDAwMDAwMDAnXG4gICAgfSxcbiAgICAnJjpob3Zlcjpub3QoLk11aS1kaXNhYmxlZCk6OmJlZm9yZSc6IHtcbiAgICAgIGJvcmRlckJvdHRvbUNvbG9yOiAnIzAwMDAwMDAwJ1xuICAgIH1cbiAgfVxufSkpO1xuXG5jb25zdCBJbnB1dE1lID0gUmVhY3QubWVtbyhcbiAgKHsgdmFsLCByb3csIC4uLnByb3BzIH0pID0+IHtcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzMigpO1xuICAgIGxldCB0b2dnbGUgPSB0cnVlO1xuICAgIGNvbnN0IGNsaWNrID0gZSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgKHRvZ2dsZSA9ICF0b2dnbGUpICYmIGUudGFyZ2V0LmJsdXIoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxJbnB1dFxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH1cbiAgICAgICAgdmFsdWU9e3ZhbCA9PT0gdW5kZWZpbmVkID8gJycgOiB2YWx9XG4gICAgICAgIG9uQ2xpY2s9e2NsaWNrfVxuICAgICAgICBvbkJsdXI9e2UgPT4gdG9nZ2xlIHx8ICh0b2dnbGUgPSB0cnVlKX1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICApO1xuICB9LFxuICAocHJldlByb3BzLCBuZXh0UHJvcHMpID0+IHtcbiAgICBpZiAocHJldlByb3BzLnJvdyA9PT0gbmV4dFByb3BzLnJvdykgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4pO1xuXG5jb25zdCBDaGVja2JveDIgPSBSZWFjdC5tZW1vKFxuICBwcm9wcyA9PiB7XG4gICAgcmV0dXJuIDxDaGVja2JveCB7Li4ucHJvcHN9IC8+O1xuICB9LFxuICAocHJldlByb3BzLCBuZXh0UHJvcHMpID0+IHtcbiAgICBpZiAocHJldlByb3BzLmNoZWNrZWQgPT09IG5leHRQcm9wcy5jaGVja2VkKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbik7XG5cbmNvbnN0IEVuaGFuY2VkVGFibGVUb29sYmFyMiA9IFJlYWN0Lm1lbW8oXG4gIHByb3BzID0+IDxFbmhhbmNlZFRhYmxlVG9vbGJhciB7Li4ucHJvcHN9IC8+LFxuICAocHJldlByb3BzLCBuZXh0UHJvcHMpID0+IHtcbiAgICBpZiAocHJldlByb3BzLm51bVNlbGVjdGVkID09PSBuZXh0UHJvcHMubnVtU2VsZWN0ZWQgJiYgcHJldlByb3BzLnRvZ2dsZSA9PT0gbmV4dFByb3BzLnRvZ2dsZSkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4pO1xuY29uc3QgRW5oYW5jZWRUYWJsZUhlYWQyID0gUmVhY3QubWVtbyhcbiAgcHJvcHMgPT4gPEVuaGFuY2VkVGFibGVIZWFkIHsuLi5wcm9wc30gLz4sXG4gIChwcmV2UHJvcHMsIG5leHRQcm9wcykgPT4ge1xuICAgIGlmIChcbiAgICAgIHByZXZQcm9wcy5udW1TZWxlY3RlZCA9PT0gbmV4dFByb3BzLm51bVNlbGVjdGVkICYmXG4gICAgICBwcmV2UHJvcHMub3JkZXIgPT09IG5leHRQcm9wcy5vcmRlciAmJlxuICAgICAgcHJldlByb3BzLm9yZGVyQnkgPT09IG5leHRQcm9wcy5vcmRlckJ5ICYmXG4gICAgICBwcmV2UHJvcHMucm93Q291bnQgPT09IG5leHRQcm9wcy5yb3dDb3VudFxuICAgIClcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuKTtcblxuY29uc3QgZGVib3VuY2UgPSAoXyA9PiB7XG4gIGxldCB0aW1lID0gbnVsbDtcbiAgcmV0dXJuIGRhdGEgPT4ge1xuICAgIGNsZWFyVGltZW91dCh0aW1lKTtcbiAgICB0aW1lID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBmbiA9IChzdHksIGRlZiwgbWlkLCBjc3MpID0+ICh7IHN0eSwgZGVmLCBtaWQsIGNzcyB9KTtcbiAgICAgIGxldCBhcnIgPSBbJ3N0eScsICdkZWYnLCAnbWlkJywgJ2NzcyddLm1hcChuYW1lID0+XG4gICAgICAgIGRhdGEucmVkdWNlKChhY2MsIHYpID0+ICh2W25hbWVdID8gYWNjLmNvbmNhdCh2W25hbWVdKSA6IGFjYyksIFtdKVxuICAgICAgKTtcbiAgICAgIGxldCBvYmogPSBmbiguLi5hcnIpO1xuICAgICAgY29uc29sZS5sb2cob2JqKTtcbiAgICB9LCAxMDAwKTtcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVuaGFuY2VkVGFibGUoKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUocm93cyk7XG4gIGNvbnN0IFtvcmRlciwgc2V0T3JkZXJdID0gdXNlU3RhdGUoJ2FzYycpO1xuICBjb25zdCBbb3JkZXJCeSwgc2V0T3JkZXJCeV0gPSB1c2VTdGF0ZSgnY2Fsb3JpZXMnKTtcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBoYW5kbGVSZXF1ZXN0U29ydCA9IChldmVudCwgcHJvcGVydHkpID0+IHtcbiAgICBjb25zdCBpc0Rlc2MgPSBvcmRlckJ5ID09PSBwcm9wZXJ0eSAmJiBvcmRlciA9PT0gJ2Rlc2MnO1xuICAgIHNldE9yZGVyKGlzRGVzYyA/ICdhc2MnIDogJ2Rlc2MnKTtcbiAgICBzZXRPcmRlckJ5KHByb3BlcnR5KTtcbiAgICBzZXREYXRhKGRhdGEgPT4gWy4uLmRhdGFdLnJldmVyc2UoKSk7XG4gICAgY29uc29sZS5sb2coJ3JldmVyc2UnKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCfkuYvlkI4nLCBkYXRhKTtcbiAgICAvLyBjb25zb2xlLmxvZygnc2VsZWN0ZWQnLCBzZWxlY3RlZCk7XG4gICAgLy8gZGVib3VuY2UoZGF0YSk7XG4gIH0sIFtzZWxlY3RlZCwgZGF0YV0pO1xuXG4gIGNvbnN0IGhhbmRsZVNlbGVjdEFsbENsaWNrID0gZXZlbnQgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdldmVudC50YXJnZXQuY2hlY2tlZCcsIGV2ZW50LnRhcmdldC5jaGVja2VkKTtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgIGNvbnN0IG5ld1NlbGVjdGVkcyA9IGRhdGEubWFwKG4gPT4gbi5pZCk7XG4gICAgICBjb25zb2xlLmxvZyhuZXdTZWxlY3RlZHMpO1xuICAgICAgc2V0U2VsZWN0ZWQobmV3U2VsZWN0ZWRzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0U2VsZWN0ZWQoW10pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50LCBuYW1lKSA9PiB7XG4gICAgc2VsZWN0ZWQuaW5jbHVkZXMobmFtZSkgPyBzZXRTZWxlY3RlZChzZWxlY3RlZC5maWx0ZXIodiA9PiB2ICE9PSBuYW1lKSkgOiBzZXRTZWxlY3RlZChzZWxlY3RlZC5jb25jYXQobmFtZSkpO1xuICB9O1xuXG4gIGNvbnN0IGlzU2VsZWN0ZWQgPSBuYW1lID0+IHNlbGVjdGVkLmluZGV4T2YobmFtZSkgIT09IC0xO1xuXG4gIGNvbnN0IHJlbW92ZSA9IF8gPT4ge1xuICAgIHNldERhdGEoZGF0YSA9PiBkYXRhLmZpbHRlcih2ID0+ICFzZWxlY3RlZC5pbmNsdWRlcyh2LmlkKSkpO1xuICAgIHNldFNlbGVjdGVkKFtdKTtcbiAgfTtcblxuICBjb25zdCBhZGQgPSBfID0+IHtcbiAgICBjb25zdCBhID0gY3JlYXRlRGF0YSh1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBEYXRlLm5vdygpKTtcbiAgICBzZXREYXRhKGRhdGEgPT4gZGF0YS5jb25jYXQoYSkpO1xuICB9O1xuICBjb25zdCBlZGl0ID0gKGZpZWxkLCByb3cpID0+IGUgPT4ge1xuICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IG5ld1JvdyA9IHsgLi4ucm93LCBbZmllbGRdOiB2YWwgfTtcbiAgICBzZXREYXRhKGRhdGEgPT4gZGF0YS5tYXAodiA9PiAodiA9PT0gcm93ID8gbmV3Um93IDogdikpKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxuICAgICAgPEVuaGFuY2VkVGFibGVUb29sYmFyMlxuICAgICAgICBudW1TZWxlY3RlZD17c2VsZWN0ZWQubGVuZ3RofVxuICAgICAgICByZW1vdmU9e3JlbW92ZX1cbiAgICAgICAgYWRkPXthZGR9XG4gICAgICAgIHRvZ2dsZT17dG9nZ2xlfVxuICAgICAgICBzZXRUb2dnbGU9e3NldFRvZ2dsZX1cbiAgICAgIC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYmxlV3JhcHBlcn0+XG4gICAgICAgIHt0b2dnbGUgPyAoXG4gICAgICAgICAgPFRhYmxlIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJsZX0gc2l6ZT0nbWVkaXVtJz5cbiAgICAgICAgICAgIDxFbmhhbmNlZFRhYmxlSGVhZDJcbiAgICAgICAgICAgICAgbnVtU2VsZWN0ZWQ9e3NlbGVjdGVkLmxlbmd0aH1cbiAgICAgICAgICAgICAgb3JkZXI9e29yZGVyfVxuICAgICAgICAgICAgICBvcmRlckJ5PXtvcmRlckJ5fVxuICAgICAgICAgICAgICBvblNlbGVjdEFsbENsaWNrPXtoYW5kbGVTZWxlY3RBbGxDbGlja31cbiAgICAgICAgICAgICAgb25SZXF1ZXN0U29ydD17aGFuZGxlUmVxdWVzdFNvcnR9XG4gICAgICAgICAgICAgIHJvd0NvdW50PXtkYXRhLmxlbmd0aH1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxUYWJsZUJvZHk+XG4gICAgICAgICAgICAgIHtkYXRhLmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgICBkYXRhLm1hcCgocm93LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBpc0l0ZW1TZWxlY3RlZCA9IGlzU2VsZWN0ZWQocm93LmlkKTtcblxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93IGhvdmVyIG9uQ2xpY2s9e2UgPT4gaGFuZGxlQ2xpY2soZSwgcm93LmlkKX0ga2V5PXtpfSBzZWxlY3RlZD17aXNJdGVtU2VsZWN0ZWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgcGFkZGluZz0nY2hlY2tib3gnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94MiBjaGVja2VkPXtpc0l0ZW1TZWxlY3RlZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cblxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc2NvcGU9J3Jvdyc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRNZSB2YWw9e3Jvdy5zdHl9IG9uQ2hhbmdlPXtlZGl0KCdzdHknLCByb3cpfSByb3c9e3Jvd30gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPSdjZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TWUgdmFsPXtyb3cuZGVmfSBvbkNoYW5nZT17ZWRpdCgnZGVmJywgcm93KX0gcm93PXtyb3d9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj0nY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dE1lIHZhbD17cm93Lm1pZH0gb25DaGFuZ2U9e2VkaXQoJ21pZCcsIHJvdyl9IHJvdz17cm93fSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29sU3Bhbj17NH0+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGFsaWduPSdjZW50ZXInIHZhcmlhbnQ9J3N1YnRpdGxlMicgY29sb3I9J3RleHRTZWNvbmRhcnknPlxuICAgICAgICAgICAgICAgICAgICAgIOayoeacieaVsOaNrlxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8Q3NzIC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L1BhcGVyPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgcGFkZGluZzogMTAsXG4gICAgd2lkdGg6IDE1MFxuICB9LFxuICBidXR0b246IHtcbiAgICBtYXJnaW5Cb3R0b206IDhcbiAgfVxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBfID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbb25jZSwgc2V0T25jZV0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBTZWxlY3Rpb24gPSBlID0+IHtcbiAgICBjaHJvbWUudGFicy5nZXRTZWxlY3RlZCh0YWIgPT4ge1xuICAgICAgY2hyb21lLnRhYnMuZXhlY3V0ZVNjcmlwdCh0YWIuaWQsIHtcbiAgICAgICAgZmlsZTogJ3NlbGVjdG9yLmpzJyxcbiAgICAgICAgcnVuQXQ6ICdkb2N1bWVudF9zdGFydCdcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHNldE9uY2UoZmFsc2UpO1xuICAgIHdpbmRvdy5jbG9zZSgpO1xuICB9O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFNlbGVjdGlvbigpO1xuICB9LCBbXSk7XG4gIGNvbnN0IGNsZWFyID0gKCkgPT4ge1xuICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuY2xlYXIoY29uc29sZS5sb2cuYmluZChjb25zb2xlLCAnQ2xlYXInKSk7XG5cbiAgICBjaHJvbWUudGFicy5nZXRTZWxlY3RlZCh0YWIgPT4ge1xuICAgICAgY2hyb21lLnRhYnMuZXhlY3V0ZVNjcmlwdCh0YWIuaWQsIHtcbiAgICAgICAgY29kZTogYHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtgLFxuICAgICAgICBydW5BdDogJ2RvY3VtZW50X3N0YXJ0J1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IHN0b3AgPSAoKSA9PiB7XG4gICAgLy8gY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSwgdGFiID0+IHtcbiAgICAvLyAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYlswXS5pZCwgJ05PVFJBTlNMQVRFJyk7XG4gICAgLy8gfSk7XG4gICAgLy8gY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSwgZnVuY3Rpb24odGFicykge1xuICAgIC8vICAgY2hyb21lLnRhYnMucmVsb2FkKHRhYnNbMF0uaWQpO1xuICAgIC8vIH0pO1xuICAgIC8vIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sIGZ1bmN0aW9uKHRhYnMpIHtcbiAgICAvLyAgIGNocm9tZS50YWJzLnVwZGF0ZSh0YWJzWzBdLmlkLCB7IHVybDogdGFic1swXS51cmwgfSk7XG4gICAgLy8gfSk7XG4gICAgLy8gY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSwgZnVuY3Rpb24oYXJyYXlPZlRhYnMpIHtcbiAgICAvLyAgIHZhciBjb2RlID0gJ3dpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTsnO1xuICAgIC8vICAgY2hyb21lLnRhYnMuZXhlY3V0ZVNjcmlwdChhcnJheU9mVGFic1swXS5pZCwgeyBjb2RlOiBjb2RlIH0pO1xuICAgIC8vIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIGNvbG9yPSdwcmltYXJ5J1xuICAgICAgICB2YXJpYW50PSdjb250YWluZWQnXG4gICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxuICAgICAgICBvbkNsaWNrPXtvbmNlID8gU2VsZWN0aW9uIDogbnVsbH1cbiAgICAgID5cbiAgICAgICAg57+76K+RXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxCdXR0b24gY29sb3I9J3NlY29uZGFyeScgdmFyaWFudD0nY29udGFpbmVkJyBmdWxsV2lkdGggY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0gb25DbGljaz17c3RvcH0+XG4gICAgICAgIOS4jee/u+ivkVxuICAgICAgPC9CdXR0b24+XG4gICAgICA8QnV0dG9uIGNvbG9yPSdzZWNvbmRhcnknIHZhcmlhbnQ9J2NvbnRhaW5lZCcgZnVsbFdpZHRoIG9uQ2xpY2s9e2NsZWFyfT5cbiAgICAgICAg5riF56m6XG4gICAgICA8L0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAnO1xuXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xuaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IGJsdWUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL2JsdWUnO1xuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIHByaW1hcnk6IGJsdWVcbiAgfVxufSk7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICA8QXBwIC8+XG4gIDwvVGhlbWVQcm92aWRlcj4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcbik7XG4iXSwic291cmNlUm9vdCI6IiJ9