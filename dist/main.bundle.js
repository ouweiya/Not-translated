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
  var El = window.location.hash === '#popup' ? Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Popup__WEBPACK_IMPORTED_MODULE_1__["default"]) : _Options__WEBPACK_IMPORTED_MODULE_2__["default"];
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, El);
};

/* harmony default export */ __webpack_exports__["default"] = (App); // e(Store, null, Options)

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
/* harmony import */ var _OptionsPage_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OptionsPage/index */ "./src/components/OptionsPage/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/colors/blue */ "./node_modules/@material-ui/core/colors/blue.js");
/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _OptionsPage_Store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./OptionsPage/Store */ "./src/components/OptionsPage/Store.js");








var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["createMuiTheme"])({
  palette: {
    primary: _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_6___default.a,
    secondary: _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_6___default.a
  }
});
/* harmony default export */ __webpack_exports__["default"] = (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
  theme: theme
}, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__["default"]), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_OptionsPage_Store__WEBPACK_IMPORTED_MODULE_7__["default"], null, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_OptionsPage_index__WEBPACK_IMPORTED_MODULE_2__["default"]))));

/***/ }),

/***/ "./src/components/OptionsPage/Store.js":
/*!*********************************************!*\
  !*** ./src/components/OptionsPage/Store.js ***!
  \*********************************************/
/*! exports provided: Context, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var Context = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);

var reducer = function reducer(state, action) {
  switch (action.type) {
    case 'data':
      return _objectSpread({}, state, {
        data: action.data
      });

    case 'rows':
      return _objectSpread({}, state, {
        rows: action.rows
      });

    case 'selected':
      return _objectSpread({}, state, {
        selected: action.selected
      });

    case 'domain':
      return _objectSpread({}, state, {
        domain: action.domain
      });

    case 'error':
      return _objectSpread({}, state, {
        error: action.error
      });

    case 'toggle':
      return _objectSpread({}, state, {
        toggle: action.toggle
      });

    default:
      return state;
  }
};

var Store = function Store(props) {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, {
    data: {},
    rows: [],
    selected: [],
    domain: '',
    error: false,
    toggle: false
  }),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    chrome.storage.sync.get(null, function (data) {
      dispatch({
        type: 'data',
        data: data
      });
      dispatch({
        type: 'domain',
        domain: Object.keys(data)[0]
      });
      console.log('获取数据', data);
    });
  }, []);
  var M = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function (_) {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Context.Provider, {
      value: [state, dispatch]
    }, props.children);
  }, [state]);
  return M;
};

/* harmony default export */ __webpack_exports__["default"] = (Store);

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

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {// console.log(localCss);
    // debounce(domain, { ...dataAll[domain], css: localCss });
    // chrome.storage.sync.set({ [domain]: { ...dataAll[domain], css: localCss } });
    // chrome.storage.sync.set({ [domain]: { ...dataAll[domain], css: localCss } });
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

/***/ "./src/components/OptionsPage/components/Drawer.js":
/*!*********************************************************!*\
  !*** ./src/components/OptionsPage/components/Drawer.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Search */ "./src/components/OptionsPage/components/Search.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Store */ "./src/components/OptionsPage/Store.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var drawerWidth = 300;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      overflow: 'hidden'
    },
    drawerPaper: {
      width: drawerWidth
    },
    toolbar: theme.mixins.toolbar,
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
/* harmony default export */ __webpack_exports__["default"] = (function (_) {
  var c = useStyles();
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      txt = _useState2[0],
      setFilter = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState4 = _slicedToArray(_useState3, 2),
      currentData = _useState4[0],
      setCurrentData = _useState4[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Store__WEBPACK_IMPORTED_MODULE_8__["Context"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      _useContext2$ = _useContext2[0],
      data = _useContext2$.data,
      domain = _useContext2$.domain,
      dispatch = _useContext2[1]; // console.log(11, useContext(Context));
  // console.log('抽屉:', data);


  var scroll = function scroll(e) {
    e.target.scrollTop > 30 && ref.current.classList.add(c.shadow);
    e.target.scrollTop < 30 && ref.current.classList.remove(c.shadow);
  };

  var SearchBox = Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', {
    className: c.box,
    ref: ref
  }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Search__WEBPACK_IMPORTED_MODULE_7__["default"], {
    setFilter: setFilter
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_3__["default"]));
  var renderlist = Object.keys(data).filter(function (v) {
    return v.includes(txt);
  }).map(function (v, i) {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
      button: true,
      key: i,
      onClick: function onClick(e) {
        return dispatch({
          type: 'domain',
          domain: v
        });
      },
      selected: domain === v
    }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], {
      primary: v,
      className: c.txt
    }));
  });
  var listBox = Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__["default"], null, renderlist);
  var drawerOption = {
    className: c.drawer,
    variant: 'permanent',
    classes: {
      paper: c.drawerPaper
    },
    anchor: 'left',
    onScroll: scroll
  };
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_2__["default"], drawerOption, SearchBox, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', {
    className: c.toolbar
  }), listBox);
});

/***/ }),

/***/ "./src/components/OptionsPage/components/MyInput.js":
/*!**********************************************************!*\
  !*** ./src/components/OptionsPage/components/MyInput.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Store */ "./src/components/OptionsPage/Store.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {
      '& div::before': {
        borderBottomColor: '#00000000'
      }
    }
  };
});

var InputMe = function InputMe(_ref) {
  var row = _ref.row,
      field = _ref.field;
  var c = useStyles();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Store__WEBPACK_IMPORTED_MODULE_4__["Context"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      _useContext2$ = _useContext2[0],
      rows = _useContext2$.rows,
      domain = _useContext2$.domain,
      data = _useContext2$.data,
      error = _useContext2$.error,
      dispatch = _useContext2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      Error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState4 = _slicedToArray(_useState3, 2),
      Txt = _useState4[0],
      setTxt = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setError(false);
    setTxt('');
  }, [data]);

  var fn = function fn(v) {
    return _toConsumableArray(new Set(rows.reduce(function (acc, v2) {
      return v2[v] && isNaN(parseFloat(v2[v])) ? acc.concat(v2[v]) : acc;
    }, [])));
  };

  var Submit = function Submit(e) {
    var obj2 = ['sty', 'def', 'mid'].reduce(function (obj, v) {
      return _objectSpread({}, obj, _defineProperty({}, v, fn(v)));
    }, {});
    console.log('obj2', obj2);

    var obj = _objectSpread({}, data, _defineProperty({}, domain, obj2));

    dispatch({
      type: 'data',
      data: obj
    });
  };

  var edit = function edit(e) {
    var val = e.target.value;
    setTxt('');

    if (!isNaN(parseFloat(val))) {
      // console.log('选择器不能是数字');
      setError(true);
      setTxt('选择器不能是数字');
    } else if (rows.map(function (v) {
      return v[field];
    }).includes(val) && val) {
      // console.log('重复选择器');
      setError(true);
      setTxt('重复选择器');
    } else {// setError(false);
      // setTxt('');
    }

    dispatch({
      type: 'error',
      error: val
    });

    var newRow = _objectSpread({}, row, _defineProperty({}, field, val));

    var newRows = rows.map(function (v) {
      return v === row ? newRow : v;
    });
    dispatch({
      type: 'rows',
      rows: newRows
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    value: row[field] === undefined ? '' : row[field],
    onChange: edit,
    classes: {
      root: c.root
    },
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    onBlur: Submit,
    label: Txt,
    error: !!(error === row[field] && error && Error)
  });
};

var MyInput = function MyInput(props) {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    console.log('xxxxxxx');
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputMe, props);
  }, [props.row]);
};

/* harmony default export */ __webpack_exports__["default"] = (MyInput); // const compare = (prev, next) => {
//   console.log(prev, '===', next);
//   if (prev.value === next.value) {
//     return true;
//   }
//   return false;
// };
// return (
//   <MyInput
//     value={row[field] === undefined ? '' : row[field]}
//     onChange={edit}
//     className={c.root}
//     onClick={e => e.stopPropagation()}
//   />
// );
// let MyInput = React.memo(props => {
//   console.log('MyInput', props);
//   return <Input {...props} />;
// }, compare);
// const MyInput = React.memo(props => {
//   console.log('MyInput', props);
//   return <Input {...props} />;
// }, compare);
// const MyInput = React.memo(props => {
//   return <InputMe {...props} />;
// }, compare);
// export default MyInput;
// (prevProps, nextProps) => {
//   if (prevProps.row === nextProps.row) return true;
//   return false;
// };
// onBlur={e => toggle || (toggle = true)}
// const classes = useStyles2();
// // let toggle = true;
// const click = e => {
//   e.stopPropagation();
//   // (toggle = !toggle) && e.target.blur();
// };

/***/ }),

/***/ "./src/components/OptionsPage/components/MyTableBody.js":
/*!**************************************************************!*\
  !*** ./src/components/OptionsPage/components/MyTableBody.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Store */ "./src/components/OptionsPage/Store.js");
/* harmony import */ var _MyInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MyInput */ "./src/components/OptionsPage/components/MyInput.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var MyTableBody = function MyTableBody(_) {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Store__WEBPACK_IMPORTED_MODULE_6__["Context"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      _useContext2$ = _useContext2[0],
      data = _useContext2$.data,
      selected = _useContext2$.selected,
      rows = _useContext2$.rows,
      domain = _useContext2$.domain,
      dispatch = _useContext2[1];

  var createData = function createData(sty, def, mid, id) {
    return {
      sty: sty,
      def: def,
      mid: mid,
      id: id
    };
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (data[domain]) {
      var _data$domain = data[domain],
          sty = _data$domain.sty,
          def = _data$domain.def,
          mid = _data$domain.mid;
      var i = Object.values(data[domain]).reduce(function (acc, v) {
        return v.length > acc ? acc = v.length : acc;
      }, 0);

      var _rows = _toConsumableArray(Array(i)).map(function (v, i) {
        return createData(sty[i] || '', def[i] || '', mid[i] || '', i);
      });

      console.log(_rows, 111);
      dispatch({
        type: 'rows',
        rows: _rows
      });

      if (!_rows.length) {
        var obj = _objectSpread({}, data);

        delete obj[domain];
        dispatch({
          type: 'data',
          data: obj
        });
      }
    }

    return function () {
      dispatch({
        type: 'selected',
        selected: []
      });
    };
  }, [data, domain]);

  var handleClick = function handleClick(e, id) {
    selected.includes(id) ? dispatch({
      type: 'selected',
      selected: selected.filter(function (v) {
        return v !== id;
      })
    }) : dispatch({
      type: 'selected',
      selected: selected.concat(id)
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_1__["default"], null, rows.length ? rows.map(function (row, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_2__["default"], {
      hover: true,
      onClick: function onClick(e) {
        return handleClick(e, row.id);
      },
      key: i,
      selected: selected.includes(row.id)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], {
      padding: "checkbox"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_5__["default"], {
      checked: selected.includes(row.id)
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], {
      scope: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MyInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
      row: row,
      field: "sty"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], {
      align: "center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MyInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
      row: row,
      field: "def"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], {
      align: "center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MyInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
      row: row,
      field: "mid"
    })));
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], {
    colSpan: 4
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    align: "center",
    variant: "subtitle2",
    color: "textSecondary"
  }, "\u6CA1\u6709\u6570\u636E"))));
};

/* harmony default export */ __webpack_exports__["default"] = (MyTableBody);

/***/ }),

/***/ "./src/components/OptionsPage/components/MyTableHead.js":
/*!**************************************************************!*\
  !*** ./src/components/OptionsPage/components/MyTableHead.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _material_ui_core_TableSortLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableSortLabel */ "./node_modules/@material-ui/core/esm/TableSortLabel/index.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Store */ "./src/components/OptionsPage/Store.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








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

var EnhancedTableHead = function EnhancedTableHead(props) {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Store__WEBPACK_IMPORTED_MODULE_6__["Context"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      _useContext2$ = _useContext2[0],
      selected = _useContext2$.selected,
      rows = _useContext2$.rows,
      data = _useContext2$.data,
      dispatch = _useContext2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('asc'),
      _useState2 = _slicedToArray(_useState, 2),
      order = _useState2[0],
      setOrder = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('sty'),
      _useState4 = _slicedToArray(_useState3, 2),
      orderBy = _useState4[0],
      setOrderBy = _useState4[1];

  var numSelected = selected.length;
  var rowCount = rows.length;

  var handleSelectAllClick = function handleSelectAllClick(event) {
    if (event.target.checked) {
      var newSelecteds = rows.map(function (row) {
        return row.id;
      });
      dispatch({
        type: 'selected',
        selected: newSelecteds
      });
      return;
    }

    dispatch({
      type: 'selected',
      selected: []
    });
  };

  var onRequestSort = function onRequestSort(e, property) {
    var isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
    dispatch({
      type: 'rows',
      rows: _toConsumableArray(rows).reverse()
    });
  };

  var createSortHandler = function createSortHandler(property) {
    return function (e) {
      return onRequestSort(e, property);
    };
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], {
    padding: "checkbox"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    indeterminate: numSelected > 0 && numSelected < rowCount,
    checked: !!rowCount && numSelected === rowCount,
    onChange: handleSelectAllClick
  })), headRows.map(function (row, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: i,
      align: row.numeric ? 'center' : 'left',
      sortDirection: orderBy === row.id ? order : false
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableSortLabel__WEBPACK_IMPORTED_MODULE_5__["default"], {
      active: orderBy === row.id,
      direction: order,
      onClick: createSortHandler(row.id)
    }, row.label));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (EnhancedTableHead); // const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
// const EnhancedTableHead2 = React.memo(
//   props => <EnhancedTableHead {...props} />,
//   (prevProps, nextProps) => {
//     if (
//       prevProps.numSelected === nextProps.numSelected &&
//       prevProps.order === nextProps.order &&
//       prevProps.orderBy === nextProps.orderBy &&
//       prevProps.rowCount === nextProps.rowCount
//     )
//       return true;
//     return false;
//   }
// );

/***/ }),

/***/ "./src/components/OptionsPage/components/MyTableToolbar.js":
/*!*****************************************************************!*\
  !*** ./src/components/OptionsPage/components/MyTableToolbar.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/esm/Tooltip/index.js");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/esm/Fab/index.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Switch */ "./node_modules/@material-ui/core/esm/Switch/index.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Store */ "./src/components/OptionsPage/Store.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









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

var EnhancedTableToolbar = function EnhancedTableToolbar(props) {
  var c = useToolbarStyles();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Store__WEBPACK_IMPORTED_MODULE_7__["Context"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      _useContext2$ = _useContext2[0],
      selected = _useContext2$.selected,
      data = _useContext2$.data,
      domain = _useContext2$.domain,
      rows = _useContext2$.rows,
      toggle = _useContext2$.toggle,
      dispatch = _useContext2[1];

  var createData = function createData(sty, def, mid, id) {
    return {
      sty: sty,
      def: def,
      mid: mid,
      id: id
    };
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (data[domain]) {// let bool = Object.values(data[domain]).some(v => v.length);
      // if (!bool) {
      // const obj = { ...data };
      // delete obj[domain];
      // dispatch({ type: 'data', data: obj });
      // }
    }
  }, [rows]);

  var remove = function remove(_) {
    var rows2 = rows.filter(function (v) {
      return !selected.includes(v.id);
    });
    var obj2 = ['sty', 'def', 'mid'].reduce(function (obj, v) {
      return _objectSpread({}, obj, _defineProperty({}, v, rows2.reduce(function (acc, v2) {
        return v2[v] ? acc.concat(v2[v]) : acc;
      }, [])));
    }, {});

    var obj = _objectSpread({}, data, _defineProperty({}, domain, obj2));

    dispatch({
      type: 'data',
      data: obj
    });
    console.log('xxxx', rows2);

    if (!rows2.length) {
      var _obj = _objectSpread({}, data);

      delete _obj[domain]; // dispatch({ type: 'data', data: obj });
    }
  };

  var add = function add(_) {
    if (rows.every(function (v) {
      return v.sty || v.def || v.mid;
    })) {
      var row = createData(undefined, undefined, undefined, Date.now());
      dispatch({
        type: 'rows',
        rows: rows.concat(row)
      });
    } // let obj2 = ['sty', 'def', 'mid'].reduce((obj, v) => {
    //   return { ...obj, [v]: rows.reduce((acc, v2) => (v2[v] ? acc.concat(v2[v]) : acc), []) };
    // }, {});

  };

  var Icon = function Icon(title, callback, icon) {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: title
    }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_3__["default"], {
      color: 'primary',
      className: c.absolute,
      onClick: callback
    }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(icon)));
  };

  var toggleHandler = function toggleHandler(_) {
    dispatch({
      type: 'toggle',
      toggle: !toggle
    });
    dispatch({
      type: 'selected',
      selected: []
    });
  };

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, !toggle && (selected.length === 0 ? Icon('Add', add, _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_4___default.a) : Icon('Delete', remove, _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6___default.a)), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: 'primary',
    checked: toggle,
    onChange: toggleHandler,
    value: true,
    className: c.spacer
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (EnhancedTableToolbar);
/*   return (
    <>
      {numSelected === 0 ? (
        <Tooltip title='Add'>
          <Fab color='primary' className={classes.absolute} onClick={add}>
            <AddIcon />
          </Fab>
        </Tooltip>
      ) : (
        <Tooltip title='Delete'>
          <Fab color='primary' className={classes.absolute} onClick={remove}>
            <DeleteIcon />
          </Fab>
        </Tooltip>
      )}

      <Switch
        color='primary'
        checked={!1}
        onChange={_ => setToggle(d => !d)}
        value='checkedA'
        className={classes.spacer}
      />
    </>
  ); */
// const EnhancedTableToolbar2 = React.memo(
//   props => <EnhancedTableToolbar {...props} />,
//   (prevProps, nextProps) => {
//     if (prevProps.numSelected === nextProps.numSelected && prevProps.toggle === nextProps.toggle) return true;
//     return false;
//   }
// );

{}
/* <EnhancedTableToolbar numSelected={selected.length} remove={remove} add={add} toggle={toggle} setToggle={setToggle} />; */
// export default _ => {
//   return (
//     <EnhancedTableToolbar2
//       numSelected={selected.length}
//       remove={remove}
//       add={add}
//       toggle={toggle}
//       setToggle={setToggle}
//     />
//   );
// };

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
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _MyTableHead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MyTableHead */ "./src/components/OptionsPage/components/MyTableHead.js");
/* harmony import */ var _MyTableToolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MyTableToolbar */ "./src/components/OptionsPage/components/MyTableToolbar.js");
/* harmony import */ var _MyTableBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MyTableBody */ "./src/components/OptionsPage/components/MyTableBody.js");
/* harmony import */ var _Css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Css */ "./src/components/OptionsPage/components/Css.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Store */ "./src/components/OptionsPage/Store.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










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

function EnhancedTable() {
  var c = useToolbarStyles();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Store__WEBPACK_IMPORTED_MODULE_8__["Context"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      toggle = _useContext2[0].toggle,
      dispatch = _useContext2[1];

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: c.paper
  }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_MyTableToolbar__WEBPACK_IMPORTED_MODULE_5__["default"]), toggle ? Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', {
    className: c.tableWrapper
  }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: c.table,
    size: 'medium'
  }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_MyTableHead__WEBPACK_IMPORTED_MODULE_4__["default"]), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_MyTableBody__WEBPACK_IMPORTED_MODULE_6__["default"]))) : Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Css__WEBPACK_IMPORTED_MODULE_7__["default"]));
}
{}
/* <Table className={classes.table} size='medium'> </Table> */

/* <EnhancedTableHead2
numSelected={selected.length}
order={order}
orderBy={orderBy}
onSelectAllClick={handleSelectAllClick}
onRequestSort={handleRequestSort}
rowCount={data.length}
/> */

/***/ }),

/***/ "./src/components/OptionsPage/index.js":
/*!*********************************************!*\
  !*** ./src/components/OptionsPage/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PermanentDrawerLeft; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Table */ "./src/components/OptionsPage/components/Table.js");
/* harmony import */ var _components_Drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Drawer */ "./src/components/OptionsPage/components/Drawer.js");
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
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background["default"]
    }
  };
});
function PermanentDrawerLeft() {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      currentData = _useState2[0],
      setCurrentData = _useState2[1]; // const Change = domain => {
  //   chrome.storage.sync.get(null, d => {
  //     setCurrentData({ domain, data: d });
  //   });
  // };
  // useEffect(() => {
  //   Change();
  //   chrome.storage.onChanged.addListener((changes, areaName) => {
  //     Change(...Object.keys(changes));
  //   });
  // }, []);
  // const getCurrentData = domain => {
  //   chrome.storage.sync.get(null, d => {
  //     setCurrentData({ domain, data: d });
  //   });
  // };


  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Drawer__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: classes.content
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table__WEBPACK_IMPORTED_MODULE_2__["default"], currentData)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL09wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3B0aW9uc1BhZ2UvU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3B0aW9uc1BhZ2UvY29tcG9uZW50cy9Dc3MuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL09wdGlvbnNQYWdlL2NvbXBvbmVudHMvQ3NzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL09wdGlvbnNQYWdlL2NvbXBvbmVudHMvRHJhd2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL09wdGlvbnNQYWdlL2NvbXBvbmVudHMvTXlJbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9jb21wb25lbnRzL015VGFibGVCb2R5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL09wdGlvbnNQYWdlL2NvbXBvbmVudHMvTXlUYWJsZUhlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3B0aW9uc1BhZ2UvY29tcG9uZW50cy9NeVRhYmxlVG9vbGJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9jb21wb25lbnRzL1NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9jb21wb25lbnRzL1RhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL09wdGlvbnNQYWdlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BvcHVwLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJFbCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaGFzaCIsImUiLCJQb3B1cCIsIk9wdGlvbnMiLCJmIiwidGhlbWUiLCJjcmVhdGVNdWlUaGVtZSIsInBhbGV0dGUiLCJwcmltYXJ5IiwiYmx1ZSIsInNlY29uZGFyeSIsIlRoZW1lUHJvdmlkZXIiLCJDc3NCYXNlbGluZSIsIlN0b3JlIiwiQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJkYXRhIiwicm93cyIsInNlbGVjdGVkIiwiZG9tYWluIiwiZXJyb3IiLCJ0b2dnbGUiLCJwcm9wcyIsInVzZVJlZHVjZXIiLCJkaXNwYXRjaCIsInVzZUVmZmVjdCIsImNocm9tZSIsInN0b3JhZ2UiLCJzeW5jIiwiZ2V0IiwiT2JqZWN0Iiwia2V5cyIsImNvbnNvbGUiLCJsb2ciLCJNIiwidXNlTWVtbyIsIl8iLCJQcm92aWRlciIsInZhbHVlIiwiY2hpbGRyZW4iLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiY29udGFpbmVyIiwiZGlzcGxheSIsImZsZXhXcmFwIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJ0ZXh0RmllbGQiLCJzcGFjaW5nIiwibGFzdCIsIm1hcmdpbkJvdHRvbSIsImRlYm91bmNlIiwidGltZSIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJPdXRsaW5lZFRleHRGaWVsZHMiLCJkYXRhQWxsIiwiY2xhc3NlcyIsImNvZGUiLCJ1c2VTdGF0ZSIsImdsb2JhbENzcyIsInNldEdsb2JhbENzcyIsImxvY2FsQ3NzIiwic2V0TG9jYWxDc3MiLCJ0YXJnZXQiLCJkcmF3ZXJXaWR0aCIsImRyYXdlciIsIndpZHRoIiwiZmxleFNocmluayIsIm92ZXJmbG93IiwiZHJhd2VyUGFwZXIiLCJ0b29sYmFyIiwibWl4aW5zIiwiYm94IiwiYmFja2dyb3VuZCIsImJveFNpemluZyIsInBvc2l0aW9uIiwiekluZGV4IiwidHJhbnNpdGlvbiIsInNoYWRvdyIsImJveFNoYWRvdyIsInR4dCIsInBhZGRpbmdMZWZ0IiwiYyIsInJlZiIsInVzZVJlZiIsInNldEZpbHRlciIsImN1cnJlbnREYXRhIiwic2V0Q3VycmVudERhdGEiLCJ1c2VDb250ZXh0Iiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwiY3VycmVudCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIlNlYXJjaEJveCIsImNsYXNzTmFtZSIsIlNlYXJjaCIsIkRpdmlkZXIiLCJyZW5kZXJsaXN0IiwiZmlsdGVyIiwidiIsImluY2x1ZGVzIiwibWFwIiwiaSIsIkxpc3RJdGVtIiwiYnV0dG9uIiwia2V5Iiwib25DbGljayIsIkxpc3RJdGVtVGV4dCIsImxpc3RCb3giLCJMaXN0IiwiZHJhd2VyT3B0aW9uIiwidmFyaWFudCIsInBhcGVyIiwiYW5jaG9yIiwib25TY3JvbGwiLCJEcmF3ZXIiLCJyb290IiwiYm9yZGVyQm90dG9tQ29sb3IiLCJJbnB1dE1lIiwicm93IiwiZmllbGQiLCJFcnJvciIsInNldEVycm9yIiwiVHh0Iiwic2V0VHh0IiwiZm4iLCJTZXQiLCJyZWR1Y2UiLCJhY2MiLCJ2MiIsImlzTmFOIiwicGFyc2VGbG9hdCIsImNvbmNhdCIsIlN1Ym1pdCIsIm9iajIiLCJvYmoiLCJlZGl0IiwidmFsIiwibmV3Um93IiwibmV3Um93cyIsInVuZGVmaW5lZCIsInN0b3BQcm9wYWdhdGlvbiIsIk15SW5wdXQiLCJNeVRhYmxlQm9keSIsImNyZWF0ZURhdGEiLCJzdHkiLCJkZWYiLCJtaWQiLCJpZCIsInZhbHVlcyIsImxlbmd0aCIsIkFycmF5IiwiaGFuZGxlQ2xpY2siLCJoZWFkUm93cyIsIm51bWVyaWMiLCJsYWJlbCIsIkVuaGFuY2VkVGFibGVIZWFkIiwib3JkZXIiLCJzZXRPcmRlciIsIm9yZGVyQnkiLCJzZXRPcmRlckJ5IiwibnVtU2VsZWN0ZWQiLCJyb3dDb3VudCIsImhhbmRsZVNlbGVjdEFsbENsaWNrIiwiZXZlbnQiLCJjaGVja2VkIiwibmV3U2VsZWN0ZWRzIiwib25SZXF1ZXN0U29ydCIsInByb3BlcnR5IiwiaXNEZXNjIiwicmV2ZXJzZSIsImNyZWF0ZVNvcnRIYW5kbGVyIiwidXNlVG9vbGJhclN0eWxlcyIsImFic29sdXRlIiwiYm90dG9tIiwicmlnaHQiLCJzcGFjZXIiLCJ0b3AiLCJFbmhhbmNlZFRhYmxlVG9vbGJhciIsInJvd3MyIiwiZXZlcnkiLCJEYXRlIiwibm93IiwiSWNvbiIsInRpdGxlIiwiY2FsbGJhY2siLCJpY29uIiwiVG9vbHRpcCIsIkZhYiIsImNvbG9yIiwidG9nZ2xlSGFuZGxlciIsIkFkZEljb24iLCJEZWxldGVJY29uIiwiU3dpdGNoIiwib25DaGFuZ2UiLCJmbGV4R3JvdyIsInNlYXJjaCIsInNlYXJjaEljb24iLCJoZWlnaHQiLCJwb2ludGVyRXZlbnRzIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaW5wdXRSb290IiwiaW5wdXRJbnB1dCIsInBhZGRpbmciLCJpbnB1dCIsIlNlYXJjaEFwcEJhciIsInRyaW0iLCJ0YWJsZSIsIm1pbldpZHRoIiwidGFibGVXcmFwcGVyIiwib3ZlcmZsb3dYIiwiRW5oYW5jZWRUYWJsZSIsIlBhcGVyIiwiTXlUYWJsZVRvb2xiYXIiLCJUYWJsZSIsInNpemUiLCJNeVRhYmxlSGVhZCIsIkNzcyIsImFwcEJhciIsIm1hcmdpbkxlZnQiLCJjb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwiUGVybWFuZW50RHJhd2VyTGVmdCIsIm9uY2UiLCJzZXRPbmNlIiwiU2VsZWN0aW9uIiwidGFicyIsImdldFNlbGVjdGVkIiwidGFiIiwiZXhlY3V0ZVNjcmlwdCIsImZpbGUiLCJydW5BdCIsImNsb3NlIiwiY2xlYXIiLCJiaW5kIiwic3RvcCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTVGLDBCQVZGLEVBYUUsMkRBQUMsZ0VBQUQ7QUFBUSxTQUFLLEVBQUMsV0FBZDtBQUEwQixXQUFPLEVBQUMsV0FBbEM7QUFBOEMsYUFBUyxNQUF2RDtBQUF3RCxXQUFPLEVBQUVGO0FBQWpFLG9CQWJGLENBREY7QUFtQkQsQ0E5REQsRTs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTTdPLEtBQUssR0FBR0MsK0VBQWMsQ0FBQztBQUMzQkMsU0FBTyxFQUFFO0FBQ1BDLFdBQU8sRUFBRUMsb0VBQUlBO0FBRE47QUFEa0IsQ0FBRCxDQUE1QjtBQU1BNE8sZ0RBQVEsQ0FBQ0MsTUFBVCxDQUNFLDJEQUFDLGlFQUFEO0FBQWUsT0FBSyxFQUFFalA7QUFBdEIsR0FDRSwyREFBQyxxRUFBRCxPQURGLEVBRUUsMkRBQUMsdURBQUQsT0FGRixDQURGLEVBS0VrUCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FMRixFIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9pbmRleC5qc1wiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUVsZW1lbnQgYXMgZSwgRnJhZ21lbnQgYXMgZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQb3B1cCBmcm9tICcuL1BvcHVwJztcbmltcG9ydCBPcHRpb25zIGZyb20gJy4vT3B0aW9ucyc7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgY29uc3QgRWwgPSB3aW5kb3cubG9jYXRpb24uaGFzaCA9PT0gJyNwb3B1cCcgPyBlKFBvcHVwKSA6IE9wdGlvbnM7XG4gIHJldHVybiBlKGYsIG51bGwsIEVsKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbi8vIGUoU3RvcmUsIG51bGwsIE9wdGlvbnMpXG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgYXMgZiwgY3JlYXRlRWxlbWVudCBhcyBlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICd0eXBlZmFjZS1yb2JvdG8nO1xuaW1wb3J0IE9wdGlvbnMgZnJvbSAnLi9PcHRpb25zUGFnZS9pbmRleCc7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xuaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IGJsdWUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL2JsdWUnO1xuaW1wb3J0IFN0b3JlIGZyb20gJy4vT3B0aW9uc1BhZ2UvU3RvcmUnO1xuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIHByaW1hcnk6IGJsdWUsXG4gICAgc2Vjb25kYXJ5OiBibHVlXG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBlKFRoZW1lUHJvdmlkZXIsIHsgdGhlbWUgfSwgZShDc3NCYXNlbGluZSksIGUoU3RvcmUsIG51bGwsIGUoT3B0aW9ucykpKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIEZyYWdtZW50IGFzIGYsIGNyZWF0ZUVsZW1lbnQgYXMgZSwgdXNlUmVkdWNlciwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdkYXRhJzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBkYXRhOiBhY3Rpb24uZGF0YSB9O1xuICAgIGNhc2UgJ3Jvd3MnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHJvd3M6IGFjdGlvbi5yb3dzIH07XG4gICAgY2FzZSAnc2VsZWN0ZWQnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHNlbGVjdGVkOiBhY3Rpb24uc2VsZWN0ZWQgfTtcbiAgICBjYXNlICdkb21haW4nOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGRvbWFpbjogYWN0aW9uLmRvbWFpbiB9O1xuICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBlcnJvcjogYWN0aW9uLmVycm9yIH07XG4gICAgY2FzZSAndG9nZ2xlJzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB0b2dnbGU6IGFjdGlvbi50b2dnbGUgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5jb25zdCBTdG9yZSA9IHByb3BzID0+IHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIHtcbiAgICBkYXRhOiB7fSxcbiAgICByb3dzOiBbXSxcbiAgICBzZWxlY3RlZDogW10sXG4gICAgZG9tYWluOiAnJyxcbiAgICBlcnJvcjogZmFsc2UsXG4gICAgdG9nZ2xlOiBmYWxzZVxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KG51bGwsIGRhdGEgPT4ge1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnZGF0YScsIGRhdGEgfSk7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdkb21haW4nLCBkb21haW46IE9iamVjdC5rZXlzKGRhdGEpWzBdIH0pO1xuICAgICAgY29uc29sZS5sb2coJ+iOt+WPluaVsOaNricsIGRhdGEpO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgTSA9IHVzZU1lbW8oXyA9PiBlKENvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IFtzdGF0ZSwgZGlzcGF0Y2hdIH0sIHByb3BzLmNoaWxkcmVuKSwgW3N0YXRlXSk7XG4gIHJldHVybiBNO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RvcmU7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xuaW1wb3J0ICcuL0Nzcy5jc3MnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIGNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgIG1heFdpZHRoOiA5NjAsXG4gICAgbWFyZ2luOiAnYXV0bydcbiAgfSxcbiAgdGV4dEZpZWxkOiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDQsIDEpXG4gIH0sXG4gIGxhc3Q6IHtcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoOClcbiAgfVxufSkpO1xuXG5jb25zdCBkZWJvdW5jZSA9ICgoKSA9PiB7XG4gIGxldCB0aW1lID0gbnVsbDtcbiAgcmV0dXJuIChkb21haW4sIGRhdGEpID0+IHtcbiAgICBjbGVhclRpbWVvdXQodGltZSk7XG4gICAgdGltZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coZG9tYWluLCBkYXRhKTtcbiAgICAgIC8vIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHsgJzEyNy4wLjAuMSc6IHsgY3NzOiAnZHNkc2RmYXNmZGZyMzQyMzQzMjQyMzQyMzQzJyB9IH0pO1xuICAgIH0sIDUwMCk7XG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPdXRsaW5lZFRleHRGaWVsZHMoeyBkb21haW4sIGRhdGFBbGwgfSkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IGNvZGUgPSBgZm9udC1mYW1pbHk6ICdGaXJhIENvZGUgUmVndWxhcicsIENvbnNvbGFzICFpbXBvcnRhbnQ7XFxuZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7YDtcbiAgY29uc3QgW2dsb2JhbENzcywgc2V0R2xvYmFsQ3NzXSA9IHVzZVN0YXRlKGNvZGUpO1xuICBjb25zdCBbbG9jYWxDc3MsIHNldExvY2FsQ3NzXSA9IHVzZVN0YXRlKGNvZGUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2cobG9jYWxDc3MpO1xuICAgIC8vIGRlYm91bmNlKGRvbWFpbiwgeyAuLi5kYXRhQWxsW2RvbWFpbl0sIGNzczogbG9jYWxDc3MgfSk7XG4gICAgLy8gY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoeyBbZG9tYWluXTogeyAuLi5kYXRhQWxsW2RvbWFpbl0sIGNzczogbG9jYWxDc3MgfSB9KTtcbiAgICAvLyBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7IFtkb21haW5dOiB7IC4uLmRhdGFBbGxbZG9tYWluXSwgY3NzOiBsb2NhbENzcyB9IH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKCdjY2MnLCBkb21haW4sIGRhdGFBbGwpO1xuICAgIC8vIGNvbnNvbGUubG9nKHsgLi4uZGF0YUFsbFtkb21haW5dLCBjc3M6IGxvY2FsQ3NzIH0pO1xuICB9LCBbbG9jYWxDc3NdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGdsb2JhbENzcyk7XG4gIH0sIFtnbG9iYWxDc3NdKTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgbWF4V2lkdGg9J21kJz5cbiAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgbGFiZWw9e2RvbWFpbiB8fCAn5pyq6YCJ5oupJ31cbiAgICAgICAgbXVsdGlsaW5lXG4gICAgICAgIHJvd3M9JzgnXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XG4gICAgICAgIG1hcmdpbj0nbm9ybWFsJ1xuICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcbiAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgIHZhbHVlPXtsb2NhbENzc31cbiAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0TG9jYWxDc3MoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICBpZD0ndGV4dCdcbiAgICAgIC8+XG5cbiAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgbGFiZWw9J0dsb2JhbCdcbiAgICAgICAgbXVsdGlsaW5lXG4gICAgICAgIHJvd3M9JzgnXG4gICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy50ZXh0RmllbGR9ICR7Y2xhc3Nlcy5sYXN0fWB9XG4gICAgICAgIG1hcmdpbj0nbm9ybWFsJ1xuICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcbiAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgIHZhbHVlPXtnbG9iYWxDc3N9XG4gICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEdsb2JhbENzcyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIGlkPSd0ZXh0J1xuICAgICAgLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QsIEZyYWdtZW50IGFzIGYsIGNyZWF0ZUVsZW1lbnQgYXMgZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IERyYXdlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EcmF3ZXInO1xuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vU2VhcmNoJztcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuLi9TdG9yZSc7XG5cbmNvbnN0IGRyYXdlcldpZHRoID0gMzAwO1xuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBkcmF3ZXI6IHtcbiAgICB3aWR0aDogZHJhd2VyV2lkdGgsXG4gICAgZmxleFNocmluazogMCxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgfSxcbiAgZHJhd2VyUGFwZXI6IHtcbiAgICB3aWR0aDogZHJhd2VyV2lkdGhcbiAgfSxcbiAgdG9vbGJhcjogdGhlbWUubWl4aW5zLnRvb2xiYXIsXG4gIGJveDoge1xuICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB6SW5kZXg6IDEwLFxuICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCAtIDUsXG4gICAgdHJhbnNpdGlvbjogJ2JveC1zaGFkb3cgMC4zcyBlYXNlLWluLW91dCdcbiAgfSxcbiAgc2hhZG93OiB7XG4gICAgYm94U2hhZG93OiAnMHB4IDJweCA0cHggLTFweCAjMDAwMDAwMzMsIDBweCA0cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMTQpLCAwcHggMXB4IDEwcHggMHB4IHJnYmEoMCwwLDAsMC4xMiknXG4gIH0sXG4gIHR4dDoge1xuICAgIHBhZGRpbmdMZWZ0OiA4XG4gIH1cbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgXyA9PiB7XG4gIGNvbnN0IGMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBbdHh0LCBzZXRGaWx0ZXJdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbY3VycmVudERhdGEsIHNldEN1cnJlbnREYXRhXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW3sgZGF0YSwgZG9tYWluIH0sIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XG4gIC8vIGNvbnNvbGUubG9nKDExLCB1c2VDb250ZXh0KENvbnRleHQpKTtcbiAgLy8gY29uc29sZS5sb2coJ+aKveWxiTonLCBkYXRhKTtcblxuICBjb25zdCBzY3JvbGwgPSBlID0+IHtcbiAgICBlLnRhcmdldC5zY3JvbGxUb3AgPiAzMCAmJiByZWYuY3VycmVudC5jbGFzc0xpc3QuYWRkKGMuc2hhZG93KTtcbiAgICBlLnRhcmdldC5zY3JvbGxUb3AgPCAzMCAmJiByZWYuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKGMuc2hhZG93KTtcbiAgfTtcblxuICBjb25zdCBTZWFyY2hCb3ggPSBlKCdkaXYnLCB7IGNsYXNzTmFtZTogYy5ib3gsIHJlZiB9LCBlKFNlYXJjaCwgeyBzZXRGaWx0ZXIgfSksIGUoRGl2aWRlcikpO1xuXG4gIGNvbnN0IHJlbmRlcmxpc3QgPSBPYmplY3Qua2V5cyhkYXRhKVxuICAgIC5maWx0ZXIodiA9PiB2LmluY2x1ZGVzKHR4dCkpXG4gICAgLm1hcCgodiwgaSkgPT5cbiAgICAgIGUoXG4gICAgICAgIExpc3RJdGVtLFxuICAgICAgICB7IGJ1dHRvbjogdHJ1ZSwga2V5OiBpLCBvbkNsaWNrOiBlID0+IGRpc3BhdGNoKHsgdHlwZTogJ2RvbWFpbicsIGRvbWFpbjogdiB9KSwgc2VsZWN0ZWQ6IGRvbWFpbiA9PT0gdiB9LFxuICAgICAgICBlKExpc3RJdGVtVGV4dCwgeyBwcmltYXJ5OiB2LCBjbGFzc05hbWU6IGMudHh0IH0pXG4gICAgICApXG4gICAgKTtcblxuICBjb25zdCBsaXN0Qm94ID0gZShMaXN0LCBudWxsLCByZW5kZXJsaXN0KTtcblxuICBjb25zdCBkcmF3ZXJPcHRpb24gPSB7XG4gICAgY2xhc3NOYW1lOiBjLmRyYXdlcixcbiAgICB2YXJpYW50OiAncGVybWFuZW50JyxcbiAgICBjbGFzc2VzOiB7IHBhcGVyOiBjLmRyYXdlclBhcGVyIH0sXG4gICAgYW5jaG9yOiAnbGVmdCcsXG4gICAgb25TY3JvbGw6IHNjcm9sbFxuICB9O1xuXG4gIHJldHVybiBlKERyYXdlciwgZHJhd2VyT3B0aW9uLCBTZWFyY2hCb3gsIGUoJ2RpdicsIHsgY2xhc3NOYW1lOiBjLnRvb2xiYXIgfSksIGxpc3RCb3gpO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIEZyYWdtZW50IGFzIGYsIGNyZWF0ZUVsZW1lbnQgYXMgZSwgdXNlQ29udGV4dCwgdXNlTWVtbywgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXQnO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4uL1N0b3JlJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgJyYgZGl2OjpiZWZvcmUnOiB7XG4gICAgICBib3JkZXJCb3R0b21Db2xvcjogJyMwMDAwMDAwMCcsXG4gICAgfVxuICB9XG59KSk7XG5cbmNvbnN0IElucHV0TWUgPSAoeyByb3csIGZpZWxkIH0pID0+IHtcbiAgY29uc3QgYyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbeyByb3dzLCBkb21haW4sIGRhdGEsIGVycm9yIH0sIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XG4gIGNvbnN0IFtFcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbVHh0LCBzZXRUeHRdID0gdXNlU3RhdGUoJycpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0RXJyb3IoZmFsc2UpO1xuICAgIHNldFR4dCgnJyk7XG4gIH0sIFtkYXRhXSk7XG5cbiAgY29uc3QgZm4gPSB2ID0+IHtcbiAgICByZXR1cm4gWy4uLm5ldyBTZXQocm93cy5yZWR1Y2UoKGFjYywgdjIpID0+ICh2Mlt2XSAmJiBpc05hTihwYXJzZUZsb2F0KHYyW3ZdKSkgPyBhY2MuY29uY2F0KHYyW3ZdKSA6IGFjYyksIFtdKSldO1xuICB9O1xuXG4gIGNvbnN0IFN1Ym1pdCA9IGUgPT4ge1xuICAgIGxldCBvYmoyID0gWydzdHknLCAnZGVmJywgJ21pZCddLnJlZHVjZSgob2JqLCB2KSA9PiB7XG4gICAgICByZXR1cm4geyAuLi5vYmosIFt2XTogZm4odikgfTtcbiAgICB9LCB7fSk7XG5cbiAgICBjb25zb2xlLmxvZygnb2JqMicsIG9iajIpO1xuXG4gICAgbGV0IG9iaiA9IHsgLi4uZGF0YSwgW2RvbWFpbl06IG9iajIgfTtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdkYXRhJywgZGF0YTogb2JqIH0pO1xuICB9O1xuXG4gIGNvbnN0IGVkaXQgPSBlID0+IHtcbiAgICBjb25zdCB2YWwgPSBlLnRhcmdldC52YWx1ZTtcblxuICAgIHNldFR4dCgnJyk7XG4gICAgaWYgKCFpc05hTihwYXJzZUZsb2F0KHZhbCkpKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygn6YCJ5oup5Zmo5LiN6IO95piv5pWw5a2XJyk7XG4gICAgICBzZXRFcnJvcih0cnVlKTtcbiAgICAgIHNldFR4dCgn6YCJ5oup5Zmo5LiN6IO95piv5pWw5a2XJyk7XG4gICAgfSBlbHNlIGlmIChyb3dzLm1hcCh2ID0+IHZbZmllbGRdKS5pbmNsdWRlcyh2YWwpICYmIHZhbCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ+mHjeWkjemAieaLqeWZqCcpO1xuICAgICAgc2V0RXJyb3IodHJ1ZSk7XG4gICAgICBzZXRUeHQoJ+mHjeWkjemAieaLqeWZqCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzZXRFcnJvcihmYWxzZSk7XG4gICAgICAvLyBzZXRUeHQoJycpO1xuICAgIH1cblxuICAgIGRpc3BhdGNoKHsgdHlwZTogJ2Vycm9yJywgZXJyb3I6IHZhbCB9KTtcblxuICAgIGNvbnN0IG5ld1JvdyA9IHsgLi4ucm93LCBbZmllbGRdOiB2YWwgfTtcbiAgICBsZXQgbmV3Um93cyA9IHJvd3MubWFwKHYgPT4gKHYgPT09IHJvdyA/IG5ld1JvdyA6IHYpKTtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdyb3dzJywgcm93czogbmV3Um93cyB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxUZXh0RmllbGRcbiAgICAgIHZhbHVlPXtyb3dbZmllbGRdID09PSB1bmRlZmluZWQgPyAnJyA6IHJvd1tmaWVsZF19XG4gICAgICBvbkNoYW5nZT17ZWRpdH1cbiAgICAgIGNsYXNzZXM9e3sgcm9vdDogYy5yb290IH19XG4gICAgICBvbkNsaWNrPXtlID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XG4gICAgICBvbkJsdXI9e1N1Ym1pdH1cbiAgICAgIGxhYmVsPXtUeHR9XG4gICAgICBlcnJvcj17ISEoZXJyb3IgPT09IHJvd1tmaWVsZF0gJiYgZXJyb3IgJiYgRXJyb3IpfVxuICAgIC8+XG4gICk7XG59O1xuXG5jb25zdCBNeUlucHV0ID0gcHJvcHMgPT4ge1xuICByZXR1cm4gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3h4eHh4eHgnKTtcbiAgICByZXR1cm4gPElucHV0TWUgey4uLnByb3BzfSAvPjtcbiAgfSwgW3Byb3BzLnJvd10pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlJbnB1dDtcblxuLy8gY29uc3QgY29tcGFyZSA9IChwcmV2LCBuZXh0KSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKHByZXYsICc9PT0nLCBuZXh0KTtcbi8vICAgaWYgKHByZXYudmFsdWUgPT09IG5leHQudmFsdWUpIHtcbi8vICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgfVxuLy8gICByZXR1cm4gZmFsc2U7XG4vLyB9O1xuXG4vLyByZXR1cm4gKFxuLy8gICA8TXlJbnB1dFxuLy8gICAgIHZhbHVlPXtyb3dbZmllbGRdID09PSB1bmRlZmluZWQgPyAnJyA6IHJvd1tmaWVsZF19XG4vLyAgICAgb25DaGFuZ2U9e2VkaXR9XG4vLyAgICAgY2xhc3NOYW1lPXtjLnJvb3R9XG4vLyAgICAgb25DbGljaz17ZSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfVxuLy8gICAvPlxuLy8gKTtcbi8vIGxldCBNeUlucHV0ID0gUmVhY3QubWVtbyhwcm9wcyA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKCdNeUlucHV0JywgcHJvcHMpO1xuLy8gICByZXR1cm4gPElucHV0IHsuLi5wcm9wc30gLz47XG4vLyB9LCBjb21wYXJlKTtcblxuLy8gY29uc3QgTXlJbnB1dCA9IFJlYWN0Lm1lbW8ocHJvcHMgPT4ge1xuLy8gICBjb25zb2xlLmxvZygnTXlJbnB1dCcsIHByb3BzKTtcbi8vICAgcmV0dXJuIDxJbnB1dCB7Li4ucHJvcHN9IC8+O1xuLy8gfSwgY29tcGFyZSk7XG5cbi8vIGNvbnN0IE15SW5wdXQgPSBSZWFjdC5tZW1vKHByb3BzID0+IHtcbi8vICAgcmV0dXJuIDxJbnB1dE1lIHsuLi5wcm9wc30gLz47XG4vLyB9LCBjb21wYXJlKTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgTXlJbnB1dDtcblxuLy8gKHByZXZQcm9wcywgbmV4dFByb3BzKSA9PiB7XG4vLyAgIGlmIChwcmV2UHJvcHMucm93ID09PSBuZXh0UHJvcHMucm93KSByZXR1cm4gdHJ1ZTtcbi8vICAgcmV0dXJuIGZhbHNlO1xuLy8gfTtcblxuLy8gb25CbHVyPXtlID0+IHRvZ2dsZSB8fCAodG9nZ2xlID0gdHJ1ZSl9XG4vLyBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzMigpO1xuLy8gLy8gbGV0IHRvZ2dsZSA9IHRydWU7XG4vLyBjb25zdCBjbGljayA9IGUgPT4ge1xuLy8gICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuLy8gICAvLyAodG9nZ2xlID0gIXRvZ2dsZSkgJiYgZS50YXJnZXQuYmx1cigpO1xuLy8gfTtcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCBhcyBmLCBjcmVhdGVFbGVtZW50IGFzIGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keSc7XG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3cnO1xuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGwnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3gnO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4uL1N0b3JlJztcbmltcG9ydCBJbnB1dE1lIGZyb20gJy4vTXlJbnB1dCc7XG5cbmNvbnN0IE15VGFibGVCb2R5ID0gXyA9PiB7XG4gIGNvbnN0IFt7IGRhdGEsIHNlbGVjdGVkLCByb3dzLCBkb21haW4gfSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChDb250ZXh0KTtcbiAgY29uc3QgY3JlYXRlRGF0YSA9IChzdHksIGRlZiwgbWlkLCBpZCkgPT4gKHsgc3R5LCBkZWYsIG1pZCwgaWQgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGF0YVtkb21haW5dKSB7XG4gICAgICBsZXQgeyBzdHksIGRlZiwgbWlkIH0gPSBkYXRhW2RvbWFpbl07XG4gICAgICBjb25zdCBpID0gT2JqZWN0LnZhbHVlcyhkYXRhW2RvbWFpbl0pLnJlZHVjZSgoYWNjLCB2KSA9PiAodi5sZW5ndGggPiBhY2MgPyAoYWNjID0gdi5sZW5ndGgpIDogYWNjKSwgMCk7XG4gICAgICBjb25zdCByb3dzID0gWy4uLkFycmF5KGkpXS5tYXAoKHYsIGkpID0+IGNyZWF0ZURhdGEoc3R5W2ldIHx8ICcnLCBkZWZbaV0gfHwgJycsIG1pZFtpXSB8fCAnJywgaSkpO1xuICAgICAgY29uc29sZS5sb2cocm93cywgMTExKTtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ3Jvd3MnLCByb3dzIH0pO1xuXG4gICAgICBpZiAoIXJvd3MubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IG9iaiA9IHsgLi4uZGF0YSB9O1xuICAgICAgICBkZWxldGUgb2JqW2RvbWFpbl07XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ2RhdGEnLCBkYXRhOiBvYmogfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdzZWxlY3RlZCcsIHNlbGVjdGVkOiBbXSB9KTtcbiAgICB9O1xuICB9LCBbZGF0YSwgZG9tYWluXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSwgaWQpID0+IHtcbiAgICBzZWxlY3RlZC5pbmNsdWRlcyhpZClcbiAgICAgID8gZGlzcGF0Y2goeyB0eXBlOiAnc2VsZWN0ZWQnLCBzZWxlY3RlZDogc2VsZWN0ZWQuZmlsdGVyKHYgPT4gdiAhPT0gaWQpIH0pXG4gICAgICA6IGRpc3BhdGNoKHsgdHlwZTogJ3NlbGVjdGVkJywgc2VsZWN0ZWQ6IHNlbGVjdGVkLmNvbmNhdChpZCkgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8VGFibGVCb2R5PlxuICAgICAge3Jvd3MubGVuZ3RoID8gKFxuICAgICAgICByb3dzLm1hcCgocm93LCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUYWJsZVJvdyBob3ZlciBvbkNsaWNrPXtlID0+IGhhbmRsZUNsaWNrKGUsIHJvdy5pZCl9IGtleT17aX0gc2VsZWN0ZWQ9e3NlbGVjdGVkLmluY2x1ZGVzKHJvdy5pZCl9PlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIHBhZGRpbmc9J2NoZWNrYm94Jz5cbiAgICAgICAgICAgICAgICA8Q2hlY2tib3ggY2hlY2tlZD17c2VsZWN0ZWQuaW5jbHVkZXMocm93LmlkKX0gLz5cbiAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgc2NvcGU9J3Jvdyc+XG4gICAgICAgICAgICAgICAgPElucHV0TWUgcm93PXtyb3d9IGZpZWxkPSdzdHknIC8+XG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPSdjZW50ZXInPlxuICAgICAgICAgICAgICAgIDxJbnB1dE1lIHJvdz17cm93fSBmaWVsZD0nZGVmJyAvPlxuICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj0nY2VudGVyJz5cbiAgICAgICAgICAgICAgICA8SW5wdXRNZSByb3c9e3Jvd30gZmllbGQ9J21pZCcgLz5cbiAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICApIDogKFxuICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgPFRhYmxlQ2VsbCBjb2xTcGFuPXs0fT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGFsaWduPSdjZW50ZXInIHZhcmlhbnQ9J3N1YnRpdGxlMicgY29sb3I9J3RleHRTZWNvbmRhcnknPlxuICAgICAgICAgICAgICDmsqHmnInmlbDmja5cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICl9XG4gICAgPC9UYWJsZUJvZHk+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNeVRhYmxlQm9keTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgRnJhZ21lbnQgYXMgZiwgY3JlYXRlRWxlbWVudCBhcyBlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnO1xuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcbmltcG9ydCBDaGVja2JveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaGVja2JveCc7XG5pbXBvcnQgVGFibGVTb3J0TGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVTb3J0TGFiZWwnO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4uL1N0b3JlJztcblxuY29uc3QgaGVhZFJvd3MgPSBbXG4gIHsgaWQ6ICdzdHknLCBudW1lcmljOiBmYWxzZSwgbGFiZWw6ICfov5DnlKjmoLflvI8nIH0sXG4gIHsgaWQ6ICdkZWYnLCBudW1lcmljOiB0cnVlLCBsYWJlbDogJ+S4jei/kOeUqOagt+W8jycgfSxcbiAgeyBpZDogJ21pZCcsIG51bWVyaWM6IHRydWUsIGxhYmVsOiAn5by65Yi257+76K+RJyB9XG5dO1xuXG5jb25zdCBFbmhhbmNlZFRhYmxlSGVhZCA9IHByb3BzID0+IHtcbiAgY29uc3QgW3sgc2VsZWN0ZWQsIHJvd3MsIGRhdGEgfSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChDb250ZXh0KTtcblxuICBjb25zdCBbb3JkZXIsIHNldE9yZGVyXSA9IHVzZVN0YXRlKCdhc2MnKTtcbiAgY29uc3QgW29yZGVyQnksIHNldE9yZGVyQnldID0gdXNlU3RhdGUoJ3N0eScpO1xuICBjb25zdCBudW1TZWxlY3RlZCA9IHNlbGVjdGVkLmxlbmd0aDtcbiAgY29uc3Qgcm93Q291bnQgPSByb3dzLmxlbmd0aDtcblxuICBjb25zdCBoYW5kbGVTZWxlY3RBbGxDbGljayA9IGV2ZW50ID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgIGNvbnN0IG5ld1NlbGVjdGVkcyA9IHJvd3MubWFwKHJvdyA9PiByb3cuaWQpO1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnc2VsZWN0ZWQnLCBzZWxlY3RlZDogbmV3U2VsZWN0ZWRzIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdzZWxlY3RlZCcsIHNlbGVjdGVkOiBbXSB9KTtcblxuICB9O1xuXG4gIGNvbnN0IG9uUmVxdWVzdFNvcnQgPSAoZSwgcHJvcGVydHkpID0+IHtcbiAgICBjb25zdCBpc0Rlc2MgPSBvcmRlckJ5ID09PSBwcm9wZXJ0eSAmJiBvcmRlciA9PT0gJ2Rlc2MnO1xuICAgIHNldE9yZGVyKGlzRGVzYyA/ICdhc2MnIDogJ2Rlc2MnKTtcbiAgICBzZXRPcmRlckJ5KHByb3BlcnR5KTtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdyb3dzJywgcm93czogWy4uLnJvd3NdLnJldmVyc2UoKSB9KTtcbiAgfTtcbiAgY29uc3QgY3JlYXRlU29ydEhhbmRsZXIgPSBwcm9wZXJ0eSA9PiBlID0+IG9uUmVxdWVzdFNvcnQoZSwgcHJvcGVydHkpO1xuXG4gIHJldHVybiAoXG4gICAgPFRhYmxlSGVhZD5cbiAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgPFRhYmxlQ2VsbCBwYWRkaW5nPSdjaGVja2JveCc+XG4gICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICBpbmRldGVybWluYXRlPXtudW1TZWxlY3RlZCA+IDAgJiYgbnVtU2VsZWN0ZWQgPCByb3dDb3VudH1cbiAgICAgICAgICAgIGNoZWNrZWQ9eyEhcm93Q291bnQgJiYgbnVtU2VsZWN0ZWQgPT09IHJvd0NvdW50fVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlbGVjdEFsbENsaWNrfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvVGFibGVDZWxsPlxuXG4gICAgICAgIHtoZWFkUm93cy5tYXAoKHJvdywgaSkgPT4gKFxuICAgICAgICAgIDxUYWJsZUNlbGwga2V5PXtpfSBhbGlnbj17cm93Lm51bWVyaWMgPyAnY2VudGVyJyA6ICdsZWZ0J30gc29ydERpcmVjdGlvbj17b3JkZXJCeSA9PT0gcm93LmlkID8gb3JkZXIgOiBmYWxzZX0+XG4gICAgICAgICAgICA8VGFibGVTb3J0TGFiZWwgYWN0aXZlPXtvcmRlckJ5ID09PSByb3cuaWR9IGRpcmVjdGlvbj17b3JkZXJ9IG9uQ2xpY2s9e2NyZWF0ZVNvcnRIYW5kbGVyKHJvdy5pZCl9PlxuICAgICAgICAgICAgICB7cm93LmxhYmVsfVxuICAgICAgICAgICAgPC9UYWJsZVNvcnRMYWJlbD5cbiAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgKSl9XG4gICAgICA8L1RhYmxlUm93PlxuICAgIDwvVGFibGVIZWFkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRW5oYW5jZWRUYWJsZUhlYWQ7XG5cbi8vIGNvbnN0IHsgb25TZWxlY3RBbGxDbGljaywgb3JkZXIsIG9yZGVyQnksIG51bVNlbGVjdGVkLCByb3dDb3VudCwgb25SZXF1ZXN0U29ydCB9ID0gcHJvcHM7XG5cbi8vIGNvbnN0IEVuaGFuY2VkVGFibGVIZWFkMiA9IFJlYWN0Lm1lbW8oXG4vLyAgIHByb3BzID0+IDxFbmhhbmNlZFRhYmxlSGVhZCB7Li4ucHJvcHN9IC8+LFxuLy8gICAocHJldlByb3BzLCBuZXh0UHJvcHMpID0+IHtcbi8vICAgICBpZiAoXG4vLyAgICAgICBwcmV2UHJvcHMubnVtU2VsZWN0ZWQgPT09IG5leHRQcm9wcy5udW1TZWxlY3RlZCAmJlxuLy8gICAgICAgcHJldlByb3BzLm9yZGVyID09PSBuZXh0UHJvcHMub3JkZXIgJiZcbi8vICAgICAgIHByZXZQcm9wcy5vcmRlckJ5ID09PSBuZXh0UHJvcHMub3JkZXJCeSAmJlxuLy8gICAgICAgcHJldlByb3BzLnJvd0NvdW50ID09PSBuZXh0UHJvcHMucm93Q291bnRcbi8vICAgICApXG4vLyAgICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgICByZXR1cm4gZmFsc2U7XG4vLyAgIH1cbi8vICk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgYXMgZiwgY3JlYXRlRWxlbWVudCBhcyBlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBUb29sdGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXAnO1xuaW1wb3J0IEZhYiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9GYWInO1xuaW1wb3J0IEFkZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FkZCc7XG5pbXBvcnQgU3dpdGNoIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N3aXRjaCc7XG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlJztcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuLi9TdG9yZSc7XG5cbmNvbnN0IHVzZVRvb2xiYXJTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIGFic29sdXRlOiB7XG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgYm90dG9tOiB0aGVtZS5zcGFjaW5nKDEwKSxcbiAgICByaWdodDogdGhlbWUuc3BhY2luZyg1KSxcbiAgICB6SW5kZXg6IDIwXG4gIH0sXG4gIHNwYWNlcjoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMCxcbiAgICByaWdodDogMjAsXG4gICAgekluZGV4OiAyMFxuICB9XG59KSk7XG5cbmNvbnN0IEVuaGFuY2VkVGFibGVUb29sYmFyID0gcHJvcHMgPT4ge1xuICBjb25zdCBjID0gdXNlVG9vbGJhclN0eWxlcygpO1xuICBjb25zdCBbeyBzZWxlY3RlZCwgZGF0YSwgZG9tYWluLCByb3dzLCB0b2dnbGUgfSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChDb250ZXh0KTtcblxuICBjb25zdCBjcmVhdGVEYXRhID0gKHN0eSwgZGVmLCBtaWQsIGlkKSA9PiAoeyBzdHksIGRlZiwgbWlkLCBpZCB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhW2RvbWFpbl0pIHtcbiAgICAgIC8vIGxldCBib29sID0gT2JqZWN0LnZhbHVlcyhkYXRhW2RvbWFpbl0pLnNvbWUodiA9PiB2Lmxlbmd0aCk7XG4gICAgICAvLyBpZiAoIWJvb2wpIHtcbiAgICAgIC8vIGNvbnN0IG9iaiA9IHsgLi4uZGF0YSB9O1xuICAgICAgLy8gZGVsZXRlIG9ialtkb21haW5dO1xuICAgICAgLy8gZGlzcGF0Y2goeyB0eXBlOiAnZGF0YScsIGRhdGE6IG9iaiB9KTtcbiAgICAgIC8vIH1cbiAgICB9XG4gIH0sIFtyb3dzXSk7XG5cbiAgY29uc3QgcmVtb3ZlID0gXyA9PiB7XG4gICAgbGV0IHJvd3MyID0gcm93cy5maWx0ZXIodiA9PiAhc2VsZWN0ZWQuaW5jbHVkZXModi5pZCkpO1xuXG4gICAgbGV0IG9iajIgPSBbJ3N0eScsICdkZWYnLCAnbWlkJ10ucmVkdWNlKChvYmosIHYpID0+IHtcbiAgICAgIHJldHVybiB7IC4uLm9iaiwgW3ZdOiByb3dzMi5yZWR1Y2UoKGFjYywgdjIpID0+ICh2Mlt2XSA/IGFjYy5jb25jYXQodjJbdl0pIDogYWNjKSwgW10pIH07XG4gICAgfSwge30pO1xuXG4gICAgbGV0IG9iaiA9IHsgLi4uZGF0YSwgW2RvbWFpbl06IG9iajIgfTtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdkYXRhJywgZGF0YTogb2JqIH0pO1xuXG4gICAgY29uc29sZS5sb2coJ3h4eHgnLCByb3dzMik7XG4gICAgaWYgKCFyb3dzMi5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IG9iaiA9IHsgLi4uZGF0YSB9O1xuICAgICAgZGVsZXRlIG9ialtkb21haW5dO1xuICAgICAgLy8gZGlzcGF0Y2goeyB0eXBlOiAnZGF0YScsIGRhdGE6IG9iaiB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYWRkID0gXyA9PiB7XG4gICAgaWYgKHJvd3MuZXZlcnkodiA9PiB2LnN0eSB8fCB2LmRlZiB8fCB2Lm1pZCkpIHtcbiAgICAgIGNvbnN0IHJvdyA9IGNyZWF0ZURhdGEodW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgRGF0ZS5ub3coKSk7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdyb3dzJywgcm93czogcm93cy5jb25jYXQocm93KSB9KTtcbiAgICB9XG5cbiAgICAgIC8vIGxldCBvYmoyID0gWydzdHknLCAnZGVmJywgJ21pZCddLnJlZHVjZSgob2JqLCB2KSA9PiB7XG4gICAgICAvLyAgIHJldHVybiB7IC4uLm9iaiwgW3ZdOiByb3dzLnJlZHVjZSgoYWNjLCB2MikgPT4gKHYyW3ZdID8gYWNjLmNvbmNhdCh2Mlt2XSkgOiBhY2MpLCBbXSkgfTtcbiAgICAgIC8vIH0sIHt9KTtcbiAgfTtcblxuICBjb25zdCBJY29uID0gKHRpdGxlLCBjYWxsYmFjaywgaWNvbikgPT4ge1xuICAgIHJldHVybiBlKFRvb2x0aXAsIHsgdGl0bGUgfSwgZShGYWIsIHsgY29sb3I6ICdwcmltYXJ5JywgY2xhc3NOYW1lOiBjLmFic29sdXRlLCBvbkNsaWNrOiBjYWxsYmFjayB9LCBlKGljb24pKSk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlSGFuZGxlciA9IF8gPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ3RvZ2dsZScsIHRvZ2dsZTogIXRvZ2dsZSB9KTtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdzZWxlY3RlZCcsIHNlbGVjdGVkOiBbXSB9KTtcbiAgfTtcblxuICByZXR1cm4gZShcbiAgICBmLFxuICAgIG51bGwsXG4gICAgIXRvZ2dsZSAmJiAoc2VsZWN0ZWQubGVuZ3RoID09PSAwID8gSWNvbignQWRkJywgYWRkLCBBZGRJY29uKSA6IEljb24oJ0RlbGV0ZScsIHJlbW92ZSwgRGVsZXRlSWNvbikpLFxuICAgIGUoU3dpdGNoLCB7XG4gICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgY2hlY2tlZDogdG9nZ2xlLFxuICAgICAgb25DaGFuZ2U6IHRvZ2dsZUhhbmRsZXIsXG4gICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgIGNsYXNzTmFtZTogYy5zcGFjZXJcbiAgICB9KVxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRW5oYW5jZWRUYWJsZVRvb2xiYXI7XG5cbi8qICAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge251bVNlbGVjdGVkID09PSAwID8gKFxuICAgICAgICA8VG9vbHRpcCB0aXRsZT0nQWRkJz5cbiAgICAgICAgICA8RmFiIGNvbG9yPSdwcmltYXJ5JyBjbGFzc05hbWU9e2NsYXNzZXMuYWJzb2x1dGV9IG9uQ2xpY2s9e2FkZH0+XG4gICAgICAgICAgICA8QWRkSWNvbiAvPlxuICAgICAgICAgIDwvRmFiPlxuICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICApIDogKFxuICAgICAgICA8VG9vbHRpcCB0aXRsZT0nRGVsZXRlJz5cbiAgICAgICAgICA8RmFiIGNvbG9yPSdwcmltYXJ5JyBjbGFzc05hbWU9e2NsYXNzZXMuYWJzb2x1dGV9IG9uQ2xpY2s9e3JlbW92ZX0+XG4gICAgICAgICAgICA8RGVsZXRlSWNvbiAvPlxuICAgICAgICAgIDwvRmFiPlxuICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICApfVxuXG4gICAgICA8U3dpdGNoXG4gICAgICAgIGNvbG9yPSdwcmltYXJ5J1xuICAgICAgICBjaGVja2VkPXshMX1cbiAgICAgICAgb25DaGFuZ2U9e18gPT4gc2V0VG9nZ2xlKGQgPT4gIWQpfVxuICAgICAgICB2YWx1ZT0nY2hlY2tlZEEnXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFjZXJ9XG4gICAgICAvPlxuICAgIDwvPlxuICApOyAqL1xuXG4vLyBjb25zdCBFbmhhbmNlZFRhYmxlVG9vbGJhcjIgPSBSZWFjdC5tZW1vKFxuLy8gICBwcm9wcyA9PiA8RW5oYW5jZWRUYWJsZVRvb2xiYXIgey4uLnByb3BzfSAvPixcbi8vICAgKHByZXZQcm9wcywgbmV4dFByb3BzKSA9PiB7XG4vLyAgICAgaWYgKHByZXZQcm9wcy5udW1TZWxlY3RlZCA9PT0gbmV4dFByb3BzLm51bVNlbGVjdGVkICYmIHByZXZQcm9wcy50b2dnbGUgPT09IG5leHRQcm9wcy50b2dnbGUpIHJldHVybiB0cnVlO1xuLy8gICAgIHJldHVybiBmYWxzZTtcbi8vICAgfVxuLy8gKTtcbntcbiAgLyogPEVuaGFuY2VkVGFibGVUb29sYmFyIG51bVNlbGVjdGVkPXtzZWxlY3RlZC5sZW5ndGh9IHJlbW92ZT17cmVtb3ZlfSBhZGQ9e2FkZH0gdG9nZ2xlPXt0b2dnbGV9IHNldFRvZ2dsZT17c2V0VG9nZ2xlfSAvPjsgKi9cbn1cblxuLy8gZXhwb3J0IGRlZmF1bHQgXyA9PiB7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPEVuaGFuY2VkVGFibGVUb29sYmFyMlxuLy8gICAgICAgbnVtU2VsZWN0ZWQ9e3NlbGVjdGVkLmxlbmd0aH1cbi8vICAgICAgIHJlbW92ZT17cmVtb3ZlfVxuLy8gICAgICAgYWRkPXthZGR9XG4vLyAgICAgICB0b2dnbGU9e3RvZ2dsZX1cbi8vICAgICAgIHNldFRvZ2dsZT17c2V0VG9nZ2xlfVxuLy8gICAgIC8+XG4vLyAgICk7XG4vLyB9O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaCc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXQnO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIGZsZXhHcm93OiAxXG4gIH0sXG4gIHNlYXJjaDoge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gIH0sXG4gIHNlYXJjaEljb246IHtcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZygzLjUpLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXG4gIH0sXG4gIGlucHV0Um9vdDoge1xuICAgIGNvbG9yOiAnaW5oZXJpdCdcbiAgfSxcbiAgaW5wdXRJbnB1dDoge1xuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSwgMSwgMSwgNSksXG4gICAgd2lkdGg6ICcxMDAlJ1xuICB9LFxuICBpbnB1dDoge1xuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKVxuICB9XG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaEFwcEJhcih7IHNldEZpbHRlciB9KSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxUb29sYmFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaEljb259PlxuICAgICAgICAgIDxTZWFyY2hJY29uIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nU2VhcmNo4oCmJ1xuICAgICAgICAgIGNsYXNzZXM9e3tcbiAgICAgICAgICAgIHJvb3Q6IGNsYXNzZXMuaW5wdXRSb290LFxuICAgICAgICAgICAgaW5wdXQ6IGNsYXNzZXMuaW5wdXRJbnB1dFxuICAgICAgICAgIH19XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0RmlsdGVyKGUudGFyZ2V0LnZhbHVlLnRyaW0oKSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L1Rvb2xiYXI+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmLCBGcmFnbWVudCBhcyBmLCBjcmVhdGVFbGVtZW50IGFzIGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgVGFibGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGUnO1xuXG5pbXBvcnQgTXlUYWJsZUhlYWQgZnJvbSAnLi9NeVRhYmxlSGVhZCc7XG5pbXBvcnQgTXlUYWJsZVRvb2xiYXIgZnJvbSAnLi9NeVRhYmxlVG9vbGJhcic7XG5pbXBvcnQgTXlUYWJsZUJvZHkgZnJvbSAnLi9NeVRhYmxlQm9keSc7XG5pbXBvcnQgQ3NzIGZyb20gJy4vQ3NzJztcblxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4uL1N0b3JlJztcblxuY29uc3QgdXNlVG9vbGJhclN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgYWJzb2x1dGU6IHtcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICBib3R0b206IHRoZW1lLnNwYWNpbmcoMTApLFxuICAgIHJpZ2h0OiB0aGVtZS5zcGFjaW5nKDUpLFxuICAgIHpJbmRleDogMjBcbiAgfSxcbiAgc3BhY2VyOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIHJpZ2h0OiAyMCxcbiAgICB6SW5kZXg6IDIwXG4gIH1cbn0pKTtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgd2lkdGg6ICcxMDAlJ1xuICB9LFxuICBwYXBlcjoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpXG4gIH0sXG4gIHRhYmxlOiB7XG4gICAgbWluV2lkdGg6IDc1MFxuICB9LFxuICB0YWJsZVdyYXBwZXI6IHtcbiAgICBvdmVyZmxvd1g6ICdhdXRvJ1xuICB9XG59KSk7XG5cbmNvbnN0IGNyZWF0ZURhdGEgPSAoc3R5LCBkZWYsIG1pZCwgaWQpID0+ICh7IHN0eSwgZGVmLCBtaWQsIGlkIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFbmhhbmNlZFRhYmxlKCkge1xuICBjb25zdCBjID0gdXNlVG9vbGJhclN0eWxlcygpO1xuICBjb25zdCBbeyB0b2dnbGUgfSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChDb250ZXh0KTtcblxuICByZXR1cm4gZShcbiAgICBQYXBlcixcbiAgICB7IGNsYXNzTmFtZTogYy5wYXBlciB9LFxuICAgIGUoTXlUYWJsZVRvb2xiYXIpLFxuICAgIHRvZ2dsZVxuICAgICAgPyBlKFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiBjLnRhYmxlV3JhcHBlciB9LFxuICAgICAgICAgIGUoVGFibGUsIHsgY2xhc3NOYW1lOiBjLnRhYmxlLCBzaXplOiAnbWVkaXVtJyB9LCBlKE15VGFibGVIZWFkKSwgZShNeVRhYmxlQm9keSkpXG4gICAgICAgIClcbiAgICAgIDogZShDc3MpXG4gICk7XG59XG57XG4gIC8qIDxUYWJsZSBjbGFzc05hbWU9e2NsYXNzZXMudGFibGV9IHNpemU9J21lZGl1bSc+IDwvVGFibGU+ICovXG59XG4vKiA8RW5oYW5jZWRUYWJsZUhlYWQyXG5udW1TZWxlY3RlZD17c2VsZWN0ZWQubGVuZ3RofVxub3JkZXI9e29yZGVyfVxub3JkZXJCeT17b3JkZXJCeX1cbm9uU2VsZWN0QWxsQ2xpY2s9e2hhbmRsZVNlbGVjdEFsbENsaWNrfVxub25SZXF1ZXN0U29ydD17aGFuZGxlUmVxdWVzdFNvcnR9XG5yb3dDb3VudD17ZGF0YS5sZW5ndGh9XG4vPiAqL1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCwgRnJhZ21lbnQgYXMgZiwgY3JlYXRlRWxlbWVudCBhcyBlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgVGFibGUgZnJvbSAnLi9jb21wb25lbnRzL1RhYmxlJztcbmltcG9ydCBEcmF3ZXIgZnJvbSAnLi9jb21wb25lbnRzL0RyYXdlcic7XG5cbmNvbnN0IGRyYXdlcldpZHRoID0gMzAwO1xuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnXG4gIH0sXG4gIGFwcEJhcjoge1xuICAgIHdpZHRoOiBgY2FsYygxMDAlIC0gJHtkcmF3ZXJXaWR0aH1weClgLFxuICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoXG4gIH0sXG5cbiAgY29udGVudDoge1xuICAgIGZsZXhHcm93OiAxLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLmRlZmF1bHRcbiAgfVxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQZXJtYW5lbnREcmF3ZXJMZWZ0KCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtjdXJyZW50RGF0YSwgc2V0Q3VycmVudERhdGFdID0gdXNlU3RhdGUoe30pO1xuXG4gIC8vIGNvbnN0IENoYW5nZSA9IGRvbWFpbiA9PiB7XG4gIC8vICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQobnVsbCwgZCA9PiB7XG4gIC8vICAgICBzZXRDdXJyZW50RGF0YSh7IGRvbWFpbiwgZGF0YTogZCB9KTtcbiAgLy8gICB9KTtcbiAgLy8gfTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIENoYW5nZSgpO1xuICAvLyAgIGNocm9tZS5zdG9yYWdlLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcigoY2hhbmdlcywgYXJlYU5hbWUpID0+IHtcbiAgLy8gICAgIENoYW5nZSguLi5PYmplY3Qua2V5cyhjaGFuZ2VzKSk7XG4gIC8vICAgfSk7XG4gIC8vIH0sIFtdKTtcblxuICAvLyBjb25zdCBnZXRDdXJyZW50RGF0YSA9IGRvbWFpbiA9PiB7XG4gIC8vICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQobnVsbCwgZCA9PiB7XG4gIC8vICAgICBzZXRDdXJyZW50RGF0YSh7IGRvbWFpbiwgZGF0YTogZCB9KTtcbiAgLy8gICB9KTtcbiAgLy8gfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPERyYXdlciAvPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgIDxUYWJsZSB7Li4uY3VycmVudERhdGF9IC8+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBwYWRkaW5nOiAxMCxcbiAgICB3aWR0aDogMTUwXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIG1hcmdpbkJvdHRvbTogOFxuICB9XG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IF8gPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtvbmNlLCBzZXRPbmNlXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IFNlbGVjdGlvbiA9IGUgPT4ge1xuICAgIGNocm9tZS50YWJzLmdldFNlbGVjdGVkKHRhYiA9PiB7XG4gICAgICBjaHJvbWUudGFicy5leGVjdXRlU2NyaXB0KHRhYi5pZCwge1xuICAgICAgICBmaWxlOiAnc2VsZWN0b3IuanMnLFxuICAgICAgICBydW5BdDogJ2RvY3VtZW50X3N0YXJ0J1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgc2V0T25jZShmYWxzZSk7XG4gICAgd2luZG93LmNsb3NlKCk7XG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gU2VsZWN0aW9uKCk7XG4gIH0sIFtdKTtcbiAgY29uc3QgY2xlYXIgPSAoKSA9PiB7XG4gICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5jbGVhcihjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUsICdDbGVhcicpKTtcblxuICAgIGNocm9tZS50YWJzLmdldFNlbGVjdGVkKHRhYiA9PiB7XG4gICAgICBjaHJvbWUudGFicy5leGVjdXRlU2NyaXB0KHRhYi5pZCwge1xuICAgICAgICBjb2RlOiBgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO2AsXG4gICAgICAgIHJ1bkF0OiAnZG9jdW1lbnRfc3RhcnQnXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbiAgY29uc3Qgc3RvcCA9ICgpID0+IHtcbiAgICAvLyBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCB0YWIgPT4ge1xuICAgIC8vICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiWzBdLmlkLCAnTk9UUkFOU0xBVEUnKTtcbiAgICAvLyB9KTtcbiAgICAvLyBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCBmdW5jdGlvbih0YWJzKSB7XG4gICAgLy8gICBjaHJvbWUudGFicy5yZWxvYWQodGFic1swXS5pZCk7XG4gICAgLy8gfSk7XG4gICAgLy8gY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSwgZnVuY3Rpb24odGFicykge1xuICAgIC8vICAgY2hyb21lLnRhYnMudXBkYXRlKHRhYnNbMF0uaWQsIHsgdXJsOiB0YWJzWzBdLnVybCB9KTtcbiAgICAvLyB9KTtcbiAgICAvLyBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCBmdW5jdGlvbihhcnJheU9mVGFicykge1xuICAgIC8vICAgdmFyIGNvZGUgPSAnd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpOyc7XG4gICAgLy8gICBjaHJvbWUudGFicy5leGVjdXRlU2NyaXB0KGFycmF5T2ZUYWJzWzBdLmlkLCB7IGNvZGU6IGNvZGUgfSk7XG4gICAgLy8gfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgY29sb3I9J3ByaW1hcnknXG4gICAgICAgIHZhcmlhbnQ9J2NvbnRhaW5lZCdcbiAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XG4gICAgICAgIG9uQ2xpY2s9e29uY2UgPyBTZWxlY3Rpb24gOiBudWxsfVxuICAgICAgPlxuICAgICAgICDnv7vor5FcbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPEJ1dHRvbiBjb2xvcj0nc2Vjb25kYXJ5JyB2YXJpYW50PSdjb250YWluZWQnIGZ1bGxXaWR0aCBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufSBvbkNsaWNrPXtzdG9wfT5cbiAgICAgICAg5LiN57+76K+RXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxCdXR0b24gY29sb3I9J3NlY29uZGFyeScgdmFyaWFudD0nY29udGFpbmVkJyBmdWxsV2lkdGggb25DbGljaz17Y2xlYXJ9PlxuICAgICAgICDmuIXnqbpcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCc7XG5cbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XG5pbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgYmx1ZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvYmx1ZSc7XG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgcHJpbWFyeTogYmx1ZVxuICB9XG59KTtcblxuUmVhY3RET00ucmVuZGVyKFxuICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgIDxDc3NCYXNlbGluZSAvPlxuICAgIDxBcHAgLz5cbiAgPC9UaGVtZVByb3ZpZGVyPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=