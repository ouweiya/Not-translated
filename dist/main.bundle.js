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
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
    theme: theme
  }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__["default"]), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_OptionsPage_Store__WEBPACK_IMPORTED_MODULE_7__["default"], null, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_OptionsPage_index__WEBPACK_IMPORTED_MODULE_2__["default"])));
});

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

var debounce = function (_) {
  var time = null;
  return function (callback) {
    clearTimeout(time);
    time = setTimeout(function () {
      callback();
    }, 100);
  };
}();

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
      var first = Object.keys(data)[0];
      dispatch({
        type: 'domain',
        domain: first === 'globalCss' ? '' : first
      });
      console.log('获取数据', data);
    });
    chrome.runtime.onMessage.addListener(function (request, sender) {
      chrome.storage.sync.get(null, function (data) {
        if (request === 'sel') {
          dispatch({
            type: 'data',
            data: data
          });
        } else if (request === 'current') {
          var domain = new URL(sender.url).hostname;

          if (Object.keys(data).includes(domain)) {
            dispatch({
              type: 'domain',
              domain: domain
            });
          }
        }
      });
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    debounce(function () {
      chrome.storage.sync.set(state.data);
    });
  }, [state]);
  var M = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function (_) {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Context.Provider, {
      value: [state, dispatch]
    }, props.children);
  }, [state]);
  return M;
};

/* harmony default export */ __webpack_exports__["default"] = (Store);

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
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Store */ "./src/components/OptionsPage/Store.js");
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
      margin: theme.spacing(4, 1),
      '& textarea': {
        fontFamily: 'Fira Code Regular',
        fontSize: '14px'
      }
    },
    last: {
      marginBottom: theme.spacing(8)
    }
  };
});
function OutlinedTextFields() {
  var c = useStyles();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Store__WEBPACK_IMPORTED_MODULE_4__["Context"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      _useContext2$ = _useContext2[0],
      data = _useContext2$.data,
      domain = _useContext2$.domain,
      dispatch = _useContext2[1];

  var setLocalCss = function setLocalCss(e) {
    if (!domain) {
      return;
    }

    var css = e.target.value;

    var newCss = _objectSpread({}, data[domain], {
      css: css
    });

    var newdata = _objectSpread({}, data, _defineProperty({}, domain, newCss));

    dispatch({
      type: 'data',
      data: newdata
    });
  };

  var setGlobalCss = function setGlobalCss(e) {
    var css = e.target.value;

    var a = _objectSpread({}, data, {
      globalCss: css
    });

    dispatch({
      type: 'data',
      data: a
    });
  };

  var Css = '';

  if (data[domain]) {
    Css = data[domain].css || '';
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    maxWidth: "md"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: domain || '未选择',
    multiline: true,
    rows: "8",
    className: c.textField,
    margin: "normal",
    variant: "outlined",
    fullWidth: true,
    onChange: setLocalCss,
    id: "text",
    value: Css,
    placeholder: "\u9ED8\u8BA4\u8FD0\u7528\u5168\u5C40",
    InputLabelProps: {
      shrink: true
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: "\u5168\u5C40",
    multiline: true,
    rows: "8",
    className: "".concat(c.textField, " ").concat(c.last),
    margin: "normal",
    variant: "outlined",
    fullWidth: true,
    value: data.globalCss,
    onChange: setGlobalCss,
    id: "text",
    InputLabelProps: {
      shrink: true
    }
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

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Store__WEBPACK_IMPORTED_MODULE_8__["Context"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      _useContext2$ = _useContext2[0],
      data = _useContext2$.data,
      domain = _useContext2$.domain,
      dispatch = _useContext2[1];

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
    return v !== 'globalCss';
  }).filter(function (v) {
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
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Store */ "./src/components/OptionsPage/Store.js");
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
      '& > div::before': {
        borderBottomColor: '#00000000'
      }
    }
  };
});

var InputMe = function InputMe(_ref) {
  var row = _ref.row,
      field = _ref.field;
  var c = useStyles();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Store__WEBPACK_IMPORTED_MODULE_3__["Context"]),
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
    obj2 = _objectSpread({}, data[domain], {}, obj2);

    var obj = _objectSpread({}, data, _defineProperty({}, domain, obj2));

    dispatch({
      type: 'data',
      data: obj
    });
  };

  var edit = function edit(e) {
    if (!domain) {
      return;
    }

    var val = e.target.value;

    if (!isNaN(parseFloat(val))) {
      setError(true);
      setTxt('选择器不能是数字');
    } else if (rows.map(function (v) {
      return v[field];
    }).includes(val) && val) {
      setError(true);
      setTxt('重复选择器');
    } else {
      setError(false);
      setTxt('');
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

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputMe, props);
  }, [props.row]);
};

/* harmony default export */ __webpack_exports__["default"] = (MyInput);

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
    var k = Object.keys(data).filter(function (v) {
      return v !== 'globalCss';
    });

    if (k.length === 1) {
      dispatch({
        type: 'domain',
        domain: "".concat(k)
      });
    }

    if (data[domain]) {
      var _data$domain = data[domain],
          sty = _data$domain.sty,
          def = _data$domain.def,
          mid = _data$domain.mid;
      var i = [sty, def, mid].reduce(function (acc, v) {
        return v.length > acc ? v.length : acc;
      }, 0);

      var _rows = _toConsumableArray(Array(i)).map(function (v, i) {
        return createData(sty[i] || '', def[i] || '', mid[i] || '', i);
      });

      dispatch({
        type: 'rows',
        rows: _rows
      });

      if (!_rows.length) {
        var _k = Object.keys(data).filter(function (v) {
          return v !== 'globalCss';
        });

        var _i2 = _k.indexOf(domain) + 1;

        var newdom = _k[_i2];
        dispatch({
          type: 'domain',
          domain: newdom
        });

        var obj = _objectSpread({}, data);

        delete obj[domain];
        dispatch({
          type: 'data',
          data: obj
        });
        chrome.storage.sync.remove(domain);
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
      align: "left"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MyInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
      row: row,
      field: "def"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], {
      align: "left"
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
  label: '运用样式'
}, {
  id: 'def',
  label: '不运用样式'
}, {
  id: 'mid',
  label: '强制翻译'
}];

var EnhancedTableHead = function EnhancedTableHead() {
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
      align: "left",
      sortDirection: orderBy === row.id ? order : false
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableSortLabel__WEBPACK_IMPORTED_MODULE_5__["default"], {
      active: orderBy === row.id,
      direction: order,
      onClick: createSortHandler(row.id)
    }, row.label));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (EnhancedTableHead);

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

  var remove = function remove(_) {
    var rows2 = rows.filter(function (v) {
      return !selected.includes(v.id);
    });
    var obj2 = ['sty', 'def', 'mid'].reduce(function (obj, v) {
      return _objectSpread({}, obj, _defineProperty({}, v, rows2.reduce(function (acc, v2) {
        return v2[v] ? acc.concat(v2[v]) : acc;
      }, [])));
    }, {});
    obj2 = _objectSpread({}, data[domain], {}, obj2);

    var obj = _objectSpread({}, data, _defineProperty({}, domain, obj2));

    dispatch({
      type: 'data',
      data: obj
    });
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
    }
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
  }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_MyTableToolbar__WEBPACK_IMPORTED_MODULE_5__["default"]), !toggle ? Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', {
    className: c.tableWrapper
  }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: c.table,
    size: 'medium'
  }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_MyTableHead__WEBPACK_IMPORTED_MODULE_4__["default"]), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_MyTableBody__WEBPACK_IMPORTED_MODULE_6__["default"]))) : Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Css__WEBPACK_IMPORTED_MODULE_7__["default"]));
}

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
      setCurrentData = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Drawer__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: classes.content
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table__WEBPACK_IMPORTED_MODULE_2__["default"], currentData)));
}

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
/* harmony import */ var _components_Options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Options */ "./src/components/Options.js");
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
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Options__WEBPACK_IMPORTED_MODULE_2__["default"], null)), document.getElementById('root'));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9jb21wb25lbnRzL0Nzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9jb21wb25lbnRzL0RyYXdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9jb21wb25lbnRzL015SW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3B0aW9uc1BhZ2UvY29tcG9uZW50cy9NeVRhYmxlQm9keS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9jb21wb25lbnRzL015VGFibGVIZWFkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL09wdGlvbnNQYWdlL2NvbXBvbmVudHMvTXlUYWJsZVRvb2xiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3B0aW9uc1BhZ2UvY29tcG9uZW50cy9TZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3B0aW9uc1BhZ2UvY29tcG9uZW50cy9UYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsidGhlbWUiLCJjcmVhdGVNdWlUaGVtZSIsInBhbGV0dGUiLCJwcmltYXJ5IiwiYmx1ZSIsInNlY29uZGFyeSIsImUiLCJUaGVtZVByb3ZpZGVyIiwiQ3NzQmFzZWxpbmUiLCJTdG9yZSIsIk9wdGlvbnMiLCJDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImRhdGEiLCJyb3dzIiwic2VsZWN0ZWQiLCJkb21haW4iLCJlcnJvciIsInRvZ2dsZSIsImRlYm91bmNlIiwiXyIsInRpbWUiLCJjYWxsYmFjayIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJwcm9wcyIsInVzZVJlZHVjZXIiLCJkaXNwYXRjaCIsInVzZUVmZmVjdCIsImNocm9tZSIsInN0b3JhZ2UiLCJzeW5jIiwiZ2V0IiwiZmlyc3QiLCJPYmplY3QiLCJrZXlzIiwiY29uc29sZSIsImxvZyIsInJ1bnRpbWUiLCJvbk1lc3NhZ2UiLCJhZGRMaXN0ZW5lciIsInJlcXVlc3QiLCJzZW5kZXIiLCJVUkwiLCJ1cmwiLCJob3N0bmFtZSIsImluY2x1ZGVzIiwic2V0IiwiTSIsInVzZU1lbW8iLCJQcm92aWRlciIsInZhbHVlIiwiY2hpbGRyZW4iLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiY29udGFpbmVyIiwiZGlzcGxheSIsImZsZXhXcmFwIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJ0ZXh0RmllbGQiLCJzcGFjaW5nIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwibGFzdCIsIm1hcmdpbkJvdHRvbSIsIk91dGxpbmVkVGV4dEZpZWxkcyIsImMiLCJ1c2VDb250ZXh0Iiwic2V0TG9jYWxDc3MiLCJjc3MiLCJ0YXJnZXQiLCJuZXdDc3MiLCJuZXdkYXRhIiwic2V0R2xvYmFsQ3NzIiwiYSIsImdsb2JhbENzcyIsIkNzcyIsInNocmluayIsImRyYXdlcldpZHRoIiwiZHJhd2VyIiwid2lkdGgiLCJmbGV4U2hyaW5rIiwib3ZlcmZsb3ciLCJkcmF3ZXJQYXBlciIsInRvb2xiYXIiLCJtaXhpbnMiLCJib3giLCJiYWNrZ3JvdW5kIiwiYm94U2l6aW5nIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJ0cmFuc2l0aW9uIiwic2hhZG93IiwiYm94U2hhZG93IiwidHh0IiwicGFkZGluZ0xlZnQiLCJyZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInNldEZpbHRlciIsInNjcm9sbCIsInNjcm9sbFRvcCIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJTZWFyY2hCb3giLCJjbGFzc05hbWUiLCJTZWFyY2giLCJEaXZpZGVyIiwicmVuZGVybGlzdCIsImZpbHRlciIsInYiLCJtYXAiLCJpIiwiTGlzdEl0ZW0iLCJidXR0b24iLCJrZXkiLCJvbkNsaWNrIiwiTGlzdEl0ZW1UZXh0IiwibGlzdEJveCIsIkxpc3QiLCJkcmF3ZXJPcHRpb24iLCJ2YXJpYW50IiwiY2xhc3NlcyIsInBhcGVyIiwiYW5jaG9yIiwib25TY3JvbGwiLCJEcmF3ZXIiLCJyb290IiwiYm9yZGVyQm90dG9tQ29sb3IiLCJJbnB1dE1lIiwicm93IiwiZmllbGQiLCJFcnJvciIsInNldEVycm9yIiwiVHh0Iiwic2V0VHh0IiwiZm4iLCJTZXQiLCJyZWR1Y2UiLCJhY2MiLCJ2MiIsImlzTmFOIiwicGFyc2VGbG9hdCIsImNvbmNhdCIsIlN1Ym1pdCIsIm9iajIiLCJvYmoiLCJlZGl0IiwidmFsIiwibmV3Um93IiwibmV3Um93cyIsInVuZGVmaW5lZCIsInN0b3BQcm9wYWdhdGlvbiIsIk15SW5wdXQiLCJNeVRhYmxlQm9keSIsImNyZWF0ZURhdGEiLCJzdHkiLCJkZWYiLCJtaWQiLCJpZCIsImsiLCJsZW5ndGgiLCJBcnJheSIsImluZGV4T2YiLCJuZXdkb20iLCJoYW5kbGVDbGljayIsImhlYWRSb3dzIiwibGFiZWwiLCJFbmhhbmNlZFRhYmxlSGVhZCIsIm9yZGVyIiwic2V0T3JkZXIiLCJvcmRlckJ5Iiwic2V0T3JkZXJCeSIsIm51bVNlbGVjdGVkIiwicm93Q291bnQiLCJoYW5kbGVTZWxlY3RBbGxDbGljayIsImV2ZW50IiwiY2hlY2tlZCIsIm5ld1NlbGVjdGVkcyIsIm9uUmVxdWVzdFNvcnQiLCJwcm9wZXJ0eSIsImlzRGVzYyIsInJldmVyc2UiLCJjcmVhdGVTb3J0SGFuZGxlciIsInVzZVRvb2xiYXJTdHlsZXMiLCJhYnNvbHV0ZSIsImJvdHRvbSIsInJpZ2h0Iiwic3BhY2VyIiwidG9wIiwiRW5oYW5jZWRUYWJsZVRvb2xiYXIiLCJyb3dzMiIsImV2ZXJ5IiwiRGF0ZSIsIm5vdyIsIkljb24iLCJ0aXRsZSIsImljb24iLCJUb29sdGlwIiwiRmFiIiwiY29sb3IiLCJ0b2dnbGVIYW5kbGVyIiwiZiIsIkFkZEljb24iLCJEZWxldGVJY29uIiwiU3dpdGNoIiwib25DaGFuZ2UiLCJmbGV4R3JvdyIsInNlYXJjaCIsInNlYXJjaEljb24iLCJoZWlnaHQiLCJwb2ludGVyRXZlbnRzIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaW5wdXRSb290IiwiaW5wdXRJbnB1dCIsInBhZGRpbmciLCJpbnB1dCIsIlNlYXJjaEFwcEJhciIsInRyaW0iLCJ0YWJsZSIsIm1pbldpZHRoIiwidGFibGVXcmFwcGVyIiwib3ZlcmZsb3dYIiwiRW5oYW5jZWRUYWJsZSIsIlBhcGVyIiwiTXlUYWJsZVRvb2xiYXIiLCJUYWJsZSIsInNpemUiLCJNeVRhYmxlSGVhZCIsImFwcEJhciIsIm1hcmdpbkxlZnQiLCJjb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwiUGVybWFuZW50RHJhd2VyTGVmdCIsImN1cnJlbnREYXRhIiwic2V0Q3VycmVudERhdGEiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBZ0IsdUJBQXVCO0FBQ3ZDOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHQywrRUFBYyxDQUFDO0FBQzNCQyxTQUFPLEVBQUU7QUFDUEMsV0FBTyxFQUFFQyxvRUFERjtBQUVQQyxhQUFTLEVBQUVELG9FQUFJQTtBQUZSO0FBRGtCLENBQUQsQ0FBNUI7QUFPZTtBQUFBLFNBQU1FLDJEQUFDLENBQUNDLGlFQUFELEVBQWdCO0FBQUVQLFNBQUssRUFBTEE7QUFBRixHQUFoQixFQUEyQk0sMkRBQUMsQ0FBQ0UscUVBQUQsQ0FBNUIsRUFBMkNGLDJEQUFDLENBQUNHLDBEQUFELEVBQVEsSUFBUixFQUFjSCwyREFBQyxDQUFDSSwwREFBRCxDQUFmLENBQTVDLENBQVA7QUFBQSxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUVPLElBQU1DLE9BQU8sR0FBR0MsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixJQUFwQixDQUFoQjs7QUFFUCxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDakMsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBSyxNQUFMO0FBQ0UsK0JBQVlGLEtBQVo7QUFBbUJHLFlBQUksRUFBRUYsTUFBTSxDQUFDRTtBQUFoQzs7QUFDRixTQUFLLE1BQUw7QUFDRSwrQkFBWUgsS0FBWjtBQUFtQkksWUFBSSxFQUFFSCxNQUFNLENBQUNHO0FBQWhDOztBQUNGLFNBQUssVUFBTDtBQUNFLCtCQUFZSixLQUFaO0FBQW1CSyxnQkFBUSxFQUFFSixNQUFNLENBQUNJO0FBQXBDOztBQUNGLFNBQUssUUFBTDtBQUNFLCtCQUFZTCxLQUFaO0FBQW1CTSxjQUFNLEVBQUVMLE1BQU0sQ0FBQ0s7QUFBbEM7O0FBQ0YsU0FBSyxPQUFMO0FBQ0UsK0JBQVlOLEtBQVo7QUFBbUJPLGFBQUssRUFBRU4sTUFBTSxDQUFDTTtBQUFqQzs7QUFDRixTQUFLLFFBQUw7QUFDRSwrQkFBWVAsS0FBWjtBQUFtQlEsY0FBTSxFQUFFUCxNQUFNLENBQUNPO0FBQWxDOztBQUNGO0FBQ0UsYUFBT1IsS0FBUDtBQWRKO0FBZ0JELENBakJEOztBQW1CQSxJQUFNUyxRQUFRLEdBQUksVUFBQUMsQ0FBQyxFQUFJO0FBQ3JCLE1BQUlDLElBQUksR0FBRyxJQUFYO0FBQ0EsU0FBTyxVQUFBQyxRQUFRLEVBQUk7QUFDakJDLGdCQUFZLENBQUNGLElBQUQsQ0FBWjtBQUNBQSxRQUFJLEdBQUdHLFVBQVUsQ0FBQyxZQUFNO0FBQ3RCRixjQUFRO0FBQ1QsS0FGZ0IsRUFFZCxHQUZjLENBQWpCO0FBR0QsR0FMRDtBQU1ELENBUmdCLEVBQWpCOztBQVVBLElBQU1sQixLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFBcUIsS0FBSyxFQUFJO0FBQUEsb0JBQ0tDLHdEQUFVLENBQUNqQixPQUFELEVBQVU7QUFDNUNJLFFBQUksRUFBRSxFQURzQztBQUU1Q0MsUUFBSSxFQUFFLEVBRnNDO0FBRzVDQyxZQUFRLEVBQUUsRUFIa0M7QUFJNUNDLFVBQU0sRUFBRSxFQUpvQztBQUs1Q0MsU0FBSyxFQUFFLEtBTHFDO0FBTTVDQyxVQUFNLEVBQUU7QUFOb0MsR0FBVixDQURmO0FBQUE7QUFBQSxNQUNkUixLQURjO0FBQUEsTUFDUGlCLFFBRE87O0FBVXJCQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsVUFBTSxDQUFDQyxPQUFQLENBQWVDLElBQWYsQ0FBb0JDLEdBQXBCLENBQXdCLElBQXhCLEVBQThCLFVBQUFuQixJQUFJLEVBQUk7QUFDcENjLGNBQVEsQ0FBQztBQUFFZixZQUFJLEVBQUUsTUFBUjtBQUFnQkMsWUFBSSxFQUFKQTtBQUFoQixPQUFELENBQVI7QUFDQSxVQUFJb0IsS0FBSyxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWXRCLElBQVosRUFBa0IsQ0FBbEIsQ0FBWjtBQUNBYyxjQUFRLENBQUM7QUFBRWYsWUFBSSxFQUFFLFFBQVI7QUFBa0JJLGNBQU0sRUFBRWlCLEtBQUssS0FBSyxXQUFWLEdBQXdCLEVBQXhCLEdBQTZCQTtBQUF2RCxPQUFELENBQVI7QUFDQUcsYUFBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQnhCLElBQXBCO0FBQ0QsS0FMRDtBQU9BZ0IsVUFBTSxDQUFDUyxPQUFQLENBQWVDLFNBQWYsQ0FBeUJDLFdBQXpCLENBQXFDLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN4RGIsWUFBTSxDQUFDQyxPQUFQLENBQWVDLElBQWYsQ0FBb0JDLEdBQXBCLENBQXdCLElBQXhCLEVBQThCLFVBQUFuQixJQUFJLEVBQUk7QUFDcEMsWUFBSTRCLE9BQU8sS0FBSyxLQUFoQixFQUF1QjtBQUNyQmQsa0JBQVEsQ0FBQztBQUFFZixnQkFBSSxFQUFFLE1BQVI7QUFBZ0JDLGdCQUFJLEVBQUpBO0FBQWhCLFdBQUQsQ0FBUjtBQUNELFNBRkQsTUFFTyxJQUFJNEIsT0FBTyxLQUFLLFNBQWhCLEVBQTJCO0FBQ2hDLGNBQU16QixNQUFNLEdBQUcsSUFBSTJCLEdBQUosQ0FBUUQsTUFBTSxDQUFDRSxHQUFmLEVBQW9CQyxRQUFuQzs7QUFFQSxjQUFJWCxNQUFNLENBQUNDLElBQVAsQ0FBWXRCLElBQVosRUFBa0JpQyxRQUFsQixDQUEyQjlCLE1BQTNCLENBQUosRUFBd0M7QUFDdENXLG9CQUFRLENBQUM7QUFBRWYsa0JBQUksRUFBRSxRQUFSO0FBQWtCSSxvQkFBTSxFQUFOQTtBQUFsQixhQUFELENBQVI7QUFDRDtBQUNGO0FBQ0YsT0FWRDtBQVdELEtBWkQ7QUFhRCxHQXJCUSxFQXFCTixFQXJCTSxDQUFUO0FBdUJBWSx5REFBUyxDQUFDLFlBQU07QUFDZFQsWUFBUSxDQUFDLFlBQU07QUFDYlUsWUFBTSxDQUFDQyxPQUFQLENBQWVDLElBQWYsQ0FBb0JnQixHQUFwQixDQUF3QnJDLEtBQUssQ0FBQ0csSUFBOUI7QUFDRCxLQUZPLENBQVI7QUFHRCxHQUpRLEVBSU4sQ0FBQ0gsS0FBRCxDQUpNLENBQVQ7QUFNQSxNQUFNc0MsQ0FBQyxHQUFHQyxxREFBTyxDQUFDLFVBQUE3QixDQUFDO0FBQUEsV0FBSW5CLDJEQUFDLENBQUNLLE9BQU8sQ0FBQzRDLFFBQVQsRUFBbUI7QUFBRUMsV0FBSyxFQUFFLENBQUN6QyxLQUFELEVBQVFpQixRQUFSO0FBQVQsS0FBbkIsRUFBaURGLEtBQUssQ0FBQzJCLFFBQXZELENBQUw7QUFBQSxHQUFGLEVBQXlFLENBQUMxQyxLQUFELENBQXpFLENBQWpCO0FBQ0EsU0FBT3NDLENBQVA7QUFDRCxDQXpDRDs7QUEyQ2U1QyxvRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNaUQsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUEzRCxLQUFLO0FBQUEsU0FBSztBQUNyQzRELGFBQVMsRUFBRTtBQUNUQyxhQUFPLEVBQUUsTUFEQTtBQUVUQyxjQUFRLEVBQUUsTUFGRDtBQUdUQyxjQUFRLEVBQUUsR0FIRDtBQUlUQyxZQUFNLEVBQUU7QUFKQyxLQUQwQjtBQU9yQ0MsYUFBUyxFQUFFO0FBQ1RELFlBQU0sRUFBRWhFLEtBQUssQ0FBQ2tFLE9BQU4sQ0FBYyxDQUFkLEVBQWlCLENBQWpCLENBREM7QUFFVCxvQkFBYztBQUNaQyxrQkFBVSxFQUFFLG1CQURBO0FBRVpDLGdCQUFRLEVBQUU7QUFGRTtBQUZMLEtBUDBCO0FBY3JDQyxRQUFJLEVBQUU7QUFDSkMsa0JBQVksRUFBRXRFLEtBQUssQ0FBQ2tFLE9BQU4sQ0FBYyxDQUFkO0FBRFY7QUFkK0IsR0FBTDtBQUFBLENBQU4sQ0FBNUI7QUFtQmUsU0FBU0ssa0JBQVQsR0FBOEI7QUFDM0MsTUFBTUMsQ0FBQyxHQUFHZCxTQUFTLEVBQW5COztBQUQyQyxvQkFFTmUsd0RBQVUsQ0FBQzlELDhDQUFELENBRko7QUFBQTtBQUFBO0FBQUEsTUFFbENPLElBRmtDLGlCQUVsQ0EsSUFGa0M7QUFBQSxNQUU1QkcsTUFGNEIsaUJBRTVCQSxNQUY0QjtBQUFBLE1BRWxCVyxRQUZrQjs7QUFJM0MsTUFBTTBDLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFwRSxDQUFDLEVBQUk7QUFDdkIsUUFBSSxDQUFDZSxNQUFMLEVBQWE7QUFDWDtBQUNEOztBQUNELFFBQU1zRCxHQUFHLEdBQUdyRSxDQUFDLENBQUNzRSxNQUFGLENBQVNwQixLQUFyQjs7QUFDQSxRQUFNcUIsTUFBTSxxQkFBUTNELElBQUksQ0FBQ0csTUFBRCxDQUFaO0FBQXNCc0QsU0FBRyxFQUFIQTtBQUF0QixNQUFaOztBQUNBLFFBQUlHLE9BQU8scUJBQVE1RCxJQUFSLHNCQUFlRyxNQUFmLEVBQXdCd0QsTUFBeEIsRUFBWDs7QUFDQTdDLFlBQVEsQ0FBQztBQUFFZixVQUFJLEVBQUUsTUFBUjtBQUFnQkMsVUFBSSxFQUFFNEQ7QUFBdEIsS0FBRCxDQUFSO0FBQ0QsR0FSRDs7QUFVQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBekUsQ0FBQyxFQUFJO0FBQ3hCLFFBQU1xRSxHQUFHLEdBQUdyRSxDQUFDLENBQUNzRSxNQUFGLENBQVNwQixLQUFyQjs7QUFDQSxRQUFJd0IsQ0FBQyxxQkFBUTlELElBQVI7QUFBYytELGVBQVMsRUFBRU47QUFBekIsTUFBTDs7QUFDQTNDLFlBQVEsQ0FBQztBQUFFZixVQUFJLEVBQUUsTUFBUjtBQUFnQkMsVUFBSSxFQUFFOEQ7QUFBdEIsS0FBRCxDQUFSO0FBQ0QsR0FKRDs7QUFNQSxNQUFJRSxHQUFHLEdBQUcsRUFBVjs7QUFDQSxNQUFJaEUsSUFBSSxDQUFDRyxNQUFELENBQVIsRUFBa0I7QUFDaEI2RCxPQUFHLEdBQUdoRSxJQUFJLENBQUNHLE1BQUQsQ0FBSixDQUFhc0QsR0FBYixJQUFvQixFQUExQjtBQUNEOztBQUVELFNBQ0UsMkRBQUMsbUVBQUQ7QUFBVyxZQUFRLEVBQUM7QUFBcEIsS0FDRSwyREFBQyxtRUFBRDtBQUNFLFNBQUssRUFBRXRELE1BQU0sSUFBSSxLQURuQjtBQUVFLGFBQVMsTUFGWDtBQUdFLFFBQUksRUFBQyxHQUhQO0FBSUUsYUFBUyxFQUFFbUQsQ0FBQyxDQUFDUCxTQUpmO0FBS0UsVUFBTSxFQUFDLFFBTFQ7QUFNRSxXQUFPLEVBQUMsVUFOVjtBQU9FLGFBQVMsTUFQWDtBQVFFLFlBQVEsRUFBRVMsV0FSWjtBQVNFLE1BQUUsRUFBQyxNQVRMO0FBVUUsU0FBSyxFQUFFUSxHQVZUO0FBV0UsZUFBVyxFQUFDLHNDQVhkO0FBWUUsbUJBQWUsRUFBRTtBQUNmQyxZQUFNLEVBQUU7QUFETztBQVpuQixJQURGLEVBa0JFLDJEQUFDLG1FQUFEO0FBQ0UsU0FBSyxFQUFDLGNBRFI7QUFFRSxhQUFTLE1BRlg7QUFHRSxRQUFJLEVBQUMsR0FIUDtBQUlFLGFBQVMsWUFBS1gsQ0FBQyxDQUFDUCxTQUFQLGNBQW9CTyxDQUFDLENBQUNILElBQXRCLENBSlg7QUFLRSxVQUFNLEVBQUMsUUFMVDtBQU1FLFdBQU8sRUFBQyxVQU5WO0FBT0UsYUFBUyxNQVBYO0FBUUUsU0FBSyxFQUFFbkQsSUFBSSxDQUFDK0QsU0FSZDtBQVNFLFlBQVEsRUFBRUYsWUFUWjtBQVVFLE1BQUUsRUFBQyxNQVZMO0FBV0UsbUJBQWUsRUFBRTtBQUNmSSxZQUFNLEVBQUU7QUFETztBQVhuQixJQWxCRixDQURGO0FBb0NELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUMsV0FBVyxHQUFHLEdBQXBCO0FBQ0EsSUFBTTFCLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFBM0QsS0FBSztBQUFBLFNBQUs7QUFDckNxRixVQUFNLEVBQUU7QUFDTkMsV0FBSyxFQUFFRixXQUREO0FBRU5HLGdCQUFVLEVBQUUsQ0FGTjtBQUdOQyxjQUFRLEVBQUU7QUFISixLQUQ2QjtBQU1yQ0MsZUFBVyxFQUFFO0FBQ1hILFdBQUssRUFBRUY7QUFESSxLQU53QjtBQVNyQ00sV0FBTyxFQUFFMUYsS0FBSyxDQUFDMkYsTUFBTixDQUFhRCxPQVRlO0FBVXJDRSxPQUFHLEVBQUU7QUFDSEMsZ0JBQVUsRUFBRSxNQURUO0FBRUhDLGVBQVMsRUFBRSxZQUZSO0FBR0hDLGNBQVEsRUFBRSxPQUhQO0FBSUhDLFlBQU0sRUFBRSxFQUpMO0FBS0hWLFdBQUssRUFBRUYsV0FBVyxHQUFHLENBTGxCO0FBTUhhLGdCQUFVLEVBQUU7QUFOVCxLQVZnQztBQWtCckNDLFVBQU0sRUFBRTtBQUNOQyxlQUFTLEVBQUU7QUFETCxLQWxCNkI7QUFxQnJDQyxPQUFHLEVBQUU7QUFDSEMsaUJBQVcsRUFBRTtBQURWO0FBckJnQyxHQUFMO0FBQUEsQ0FBTixDQUE1QjtBQTBCZSx5RUFBQTVFLENBQUMsRUFBSTtBQUNsQixNQUFNK0MsQ0FBQyxHQUFHZCxTQUFTLEVBQW5CO0FBQ0EsTUFBTTRDLEdBQUcsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQWxCOztBQUZrQixrQkFHT0Msc0RBQVEsQ0FBQyxFQUFELENBSGY7QUFBQTtBQUFBLE1BR1hKLEdBSFc7QUFBQSxNQUdOSyxTQUhNOztBQUFBLG9CQUltQmhDLHdEQUFVLENBQUM5RCw4Q0FBRCxDQUo3QjtBQUFBO0FBQUE7QUFBQSxNQUlUTyxJQUpTLGlCQUlUQSxJQUpTO0FBQUEsTUFJSEcsTUFKRyxpQkFJSEEsTUFKRztBQUFBLE1BSU9XLFFBSlA7O0FBTWxCLE1BQU0wRSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFBcEcsQ0FBQyxFQUFJO0FBQ2xCQSxLQUFDLENBQUNzRSxNQUFGLENBQVMrQixTQUFULEdBQXFCLEVBQXJCLElBQTJCTCxHQUFHLENBQUNNLE9BQUosQ0FBWUMsU0FBWixDQUFzQkMsR0FBdEIsQ0FBMEJ0QyxDQUFDLENBQUMwQixNQUE1QixDQUEzQjtBQUNBNUYsS0FBQyxDQUFDc0UsTUFBRixDQUFTK0IsU0FBVCxHQUFxQixFQUFyQixJQUEyQkwsR0FBRyxDQUFDTSxPQUFKLENBQVlDLFNBQVosQ0FBc0JFLE1BQXRCLENBQTZCdkMsQ0FBQyxDQUFDMEIsTUFBL0IsQ0FBM0I7QUFDRCxHQUhEOztBQUtBLE1BQU1jLFNBQVMsR0FBRzFHLDJEQUFDLENBQUMsS0FBRCxFQUFRO0FBQUUyRyxhQUFTLEVBQUV6QyxDQUFDLENBQUNvQixHQUFmO0FBQW9CVSxPQUFHLEVBQUhBO0FBQXBCLEdBQVIsRUFBbUNoRywyREFBQyxDQUFDNEcsK0NBQUQsRUFBUztBQUFFVCxhQUFTLEVBQVRBO0FBQUYsR0FBVCxDQUFwQyxFQUE2RG5HLDJEQUFDLENBQUM2RyxpRUFBRCxDQUE5RCxDQUFuQjtBQUVBLE1BQU1DLFVBQVUsR0FBRzdFLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZdEIsSUFBWixFQUNoQm1HLE1BRGdCLENBQ1QsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsS0FBSyxXQUFWO0FBQUEsR0FEUSxFQUVoQkQsTUFGZ0IsQ0FFVCxVQUFBQyxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDbkUsUUFBRixDQUFXaUQsR0FBWCxDQUFKO0FBQUEsR0FGUSxFQUdoQm1CLEdBSGdCLENBR1osVUFBQ0QsQ0FBRCxFQUFJRSxDQUFKO0FBQUEsV0FDSGxILDJEQUFDLENBQ0NtSCxrRUFERCxFQUVDO0FBQUVDLFlBQU0sRUFBRSxJQUFWO0FBQWdCQyxTQUFHLEVBQUVILENBQXJCO0FBQXdCSSxhQUFPLEVBQUUsaUJBQUF0SCxDQUFDO0FBQUEsZUFBSTBCLFFBQVEsQ0FBQztBQUFFZixjQUFJLEVBQUUsUUFBUjtBQUFrQkksZ0JBQU0sRUFBRWlHO0FBQTFCLFNBQUQsQ0FBWjtBQUFBLE9BQWxDO0FBQStFbEcsY0FBUSxFQUFFQyxNQUFNLEtBQUtpRztBQUFwRyxLQUZELEVBR0NoSCwyREFBQyxDQUFDdUgsc0VBQUQsRUFBZTtBQUFFMUgsYUFBTyxFQUFFbUgsQ0FBWDtBQUFjTCxlQUFTLEVBQUV6QyxDQUFDLENBQUM0QjtBQUEzQixLQUFmLENBSEYsQ0FERTtBQUFBLEdBSFksQ0FBbkI7QUFXQSxNQUFNMEIsT0FBTyxHQUFHeEgsMkRBQUMsQ0FBQ3lILDhEQUFELEVBQU8sSUFBUCxFQUFhWCxVQUFiLENBQWpCO0FBRUEsTUFBTVksWUFBWSxHQUFHO0FBQ25CZixhQUFTLEVBQUV6QyxDQUFDLENBQUNhLE1BRE07QUFFbkI0QyxXQUFPLEVBQUUsV0FGVTtBQUduQkMsV0FBTyxFQUFFO0FBQUVDLFdBQUssRUFBRTNELENBQUMsQ0FBQ2lCO0FBQVgsS0FIVTtBQUluQjJDLFVBQU0sRUFBRSxNQUpXO0FBS25CQyxZQUFRLEVBQUUzQjtBQUxTLEdBQXJCO0FBUUEsU0FBT3BHLDJEQUFDLENBQUNnSSxnRUFBRCxFQUFTTixZQUFULEVBQXVCaEIsU0FBdkIsRUFBa0MxRywyREFBQyxDQUFDLEtBQUQsRUFBUTtBQUFFMkcsYUFBUyxFQUFFekMsQ0FBQyxDQUFDa0I7QUFBZixHQUFSLENBQW5DLEVBQXNFb0MsT0FBdEUsQ0FBUjtBQUNELENBbkNELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNcEUsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUEzRCxLQUFLO0FBQUEsU0FBSztBQUNyQ3VJLFFBQUksRUFBRTtBQUNKLHlCQUFtQjtBQUNqQkMseUJBQWlCLEVBQUU7QUFERjtBQURmO0FBRCtCLEdBQUw7QUFBQSxDQUFOLENBQTVCOztBQVFBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQW9CO0FBQUEsTUFBakJDLEdBQWlCLFFBQWpCQSxHQUFpQjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUNsQyxNQUFNbkUsQ0FBQyxHQUFHZCxTQUFTLEVBQW5COztBQURrQyxvQkFFZ0JlLHdEQUFVLENBQUM5RCw4Q0FBRCxDQUYxQjtBQUFBO0FBQUE7QUFBQSxNQUV6QlEsSUFGeUIsaUJBRXpCQSxJQUZ5QjtBQUFBLE1BRW5CRSxNQUZtQixpQkFFbkJBLE1BRm1CO0FBQUEsTUFFWEgsSUFGVyxpQkFFWEEsSUFGVztBQUFBLE1BRUxJLEtBRkssaUJBRUxBLEtBRks7QUFBQSxNQUVJVSxRQUZKOztBQUFBLGtCQUdSd0Usc0RBQVEsQ0FBQyxLQUFELENBSEE7QUFBQTtBQUFBLE1BRzNCb0MsS0FIMkI7QUFBQSxNQUdwQkMsUUFIb0I7O0FBQUEsbUJBSVpyQyxzREFBUSxDQUFDLEVBQUQsQ0FKSTtBQUFBO0FBQUEsTUFJM0JzQyxHQUoyQjtBQUFBLE1BSXRCQyxNQUpzQjs7QUFNbEM5Ryx5REFBUyxDQUFDLFlBQU07QUFDZDRHLFlBQVEsQ0FBQyxLQUFELENBQVI7QUFDQUUsVUFBTSxDQUFDLEVBQUQsQ0FBTjtBQUNELEdBSFEsRUFHTixDQUFDN0gsSUFBRCxDQUhNLENBQVQ7O0FBS0EsTUFBTThILEVBQUUsR0FBRyxTQUFMQSxFQUFLLENBQUExQixDQUFDLEVBQUk7QUFDZCw4QkFBVyxJQUFJMkIsR0FBSixDQUFROUgsSUFBSSxDQUFDK0gsTUFBTCxDQUFZLFVBQUNDLEdBQUQsRUFBTUMsRUFBTjtBQUFBLGFBQWNBLEVBQUUsQ0FBQzlCLENBQUQsQ0FBRixJQUFTK0IsS0FBSyxDQUFDQyxVQUFVLENBQUNGLEVBQUUsQ0FBQzlCLENBQUQsQ0FBSCxDQUFYLENBQWQsR0FBb0M2QixHQUFHLENBQUNJLE1BQUosQ0FBV0gsRUFBRSxDQUFDOUIsQ0FBRCxDQUFiLENBQXBDLEdBQXdENkIsR0FBdEU7QUFBQSxLQUFaLEVBQXdGLEVBQXhGLENBQVIsQ0FBWDtBQUNELEdBRkQ7O0FBSUEsTUFBTUssTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQWxKLENBQUMsRUFBSTtBQUNsQixRQUFJbUosSUFBSSxHQUFHLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCUCxNQUF0QixDQUE2QixVQUFDUSxHQUFELEVBQU1wQyxDQUFOLEVBQVk7QUFDbEQsK0JBQVlvQyxHQUFaLHNCQUFrQnBDLENBQWxCLEVBQXNCMEIsRUFBRSxDQUFDMUIsQ0FBRCxDQUF4QjtBQUNELEtBRlUsRUFFUixFQUZRLENBQVg7QUFHQW1DLFFBQUkscUJBQVF2SSxJQUFJLENBQUNHLE1BQUQsQ0FBWixNQUF5Qm9JLElBQXpCLENBQUo7O0FBRUEsUUFBSUMsR0FBRyxxQkFBUXhJLElBQVIsc0JBQWVHLE1BQWYsRUFBd0JvSSxJQUF4QixFQUFQOztBQUNBekgsWUFBUSxDQUFDO0FBQUVmLFVBQUksRUFBRSxNQUFSO0FBQWdCQyxVQUFJLEVBQUV3STtBQUF0QixLQUFELENBQVI7QUFDRCxHQVJEOztBQVVBLE1BQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUFySixDQUFDLEVBQUk7QUFDaEIsUUFBSSxDQUFDZSxNQUFMLEVBQWE7QUFDWDtBQUNEOztBQUNELFFBQU11SSxHQUFHLEdBQUd0SixDQUFDLENBQUNzRSxNQUFGLENBQVNwQixLQUFyQjs7QUFDQSxRQUFJLENBQUM2RixLQUFLLENBQUNDLFVBQVUsQ0FBQ00sR0FBRCxDQUFYLENBQVYsRUFBNkI7QUFDM0JmLGNBQVEsQ0FBQyxJQUFELENBQVI7QUFDQUUsWUFBTSxDQUFDLFVBQUQsQ0FBTjtBQUNELEtBSEQsTUFHTyxJQUFJNUgsSUFBSSxDQUFDb0csR0FBTCxDQUFTLFVBQUFELENBQUM7QUFBQSxhQUFJQSxDQUFDLENBQUNxQixLQUFELENBQUw7QUFBQSxLQUFWLEVBQXdCeEYsUUFBeEIsQ0FBaUN5RyxHQUFqQyxLQUF5Q0EsR0FBN0MsRUFBa0Q7QUFDdkRmLGNBQVEsQ0FBQyxJQUFELENBQVI7QUFDQUUsWUFBTSxDQUFDLE9BQUQsQ0FBTjtBQUNELEtBSE0sTUFHQTtBQUNMRixjQUFRLENBQUMsS0FBRCxDQUFSO0FBQ0FFLFlBQU0sQ0FBQyxFQUFELENBQU47QUFDRDs7QUFFRC9HLFlBQVEsQ0FBQztBQUFFZixVQUFJLEVBQUUsT0FBUjtBQUFpQkssV0FBSyxFQUFFc0k7QUFBeEIsS0FBRCxDQUFSOztBQUVBLFFBQU1DLE1BQU0scUJBQVFuQixHQUFSLHNCQUFjQyxLQUFkLEVBQXNCaUIsR0FBdEIsRUFBWjs7QUFDQSxRQUFJRSxPQUFPLEdBQUczSSxJQUFJLENBQUNvRyxHQUFMLENBQVMsVUFBQUQsQ0FBQztBQUFBLGFBQUtBLENBQUMsS0FBS29CLEdBQU4sR0FBWW1CLE1BQVosR0FBcUJ2QyxDQUExQjtBQUFBLEtBQVYsQ0FBZDtBQUNBdEYsWUFBUSxDQUFDO0FBQUVmLFVBQUksRUFBRSxNQUFSO0FBQWdCRSxVQUFJLEVBQUUySTtBQUF0QixLQUFELENBQVI7QUFDRCxHQXJCRDs7QUF1QkEsU0FDRSwyREFBQyxtRUFBRDtBQUNFLFNBQUssRUFBRXBCLEdBQUcsQ0FBQ0MsS0FBRCxDQUFILEtBQWVvQixTQUFmLEdBQTJCLEVBQTNCLEdBQWdDckIsR0FBRyxDQUFDQyxLQUFELENBRDVDO0FBRUUsWUFBUSxFQUFFZ0IsSUFGWjtBQUdFLFdBQU8sRUFBRTtBQUFFcEIsVUFBSSxFQUFFL0QsQ0FBQyxDQUFDK0Q7QUFBVixLQUhYO0FBSUUsV0FBTyxFQUFFLGlCQUFBakksQ0FBQztBQUFBLGFBQUlBLENBQUMsQ0FBQzBKLGVBQUYsRUFBSjtBQUFBLEtBSlo7QUFLRSxVQUFNLEVBQUVSLE1BTFY7QUFNRSxTQUFLLEVBQUVWLEdBTlQ7QUFPRSxTQUFLLEVBQUUsQ0FBQyxFQUFFeEgsS0FBSyxLQUFLb0gsR0FBRyxDQUFDQyxLQUFELENBQWIsSUFBd0JySCxLQUF4QixJQUFpQ3NILEtBQW5DO0FBUFYsSUFERjtBQVdELENBM0REOztBQTZEQSxJQUFNcUIsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQW5JLEtBQUssRUFBSTtBQUN2QixTQUFPd0IscURBQU8sQ0FBQyxZQUFNO0FBQ25CLFdBQU8sMkRBQUMsT0FBRCxFQUFheEIsS0FBYixDQUFQO0FBQ0QsR0FGYSxFQUVYLENBQUNBLEtBQUssQ0FBQzRHLEdBQVAsQ0FGVyxDQUFkO0FBR0QsQ0FKRDs7QUFNZXVCLHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQXpJLENBQUMsRUFBSTtBQUFBLG9CQUM4QmdELHdEQUFVLENBQUM5RCw4Q0FBRCxDQUR4QztBQUFBO0FBQUE7QUFBQSxNQUNkTyxJQURjLGlCQUNkQSxJQURjO0FBQUEsTUFDUkUsUUFEUSxpQkFDUkEsUUFEUTtBQUFBLE1BQ0VELElBREYsaUJBQ0VBLElBREY7QUFBQSxNQUNRRSxNQURSLGlCQUNRQSxNQURSO0FBQUEsTUFDa0JXLFFBRGxCOztBQUV2QixNQUFNbUksVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQVdDLEdBQVgsRUFBZ0JDLEVBQWhCO0FBQUEsV0FBd0I7QUFBRUgsU0FBRyxFQUFIQSxHQUFGO0FBQU9DLFNBQUcsRUFBSEEsR0FBUDtBQUFZQyxTQUFHLEVBQUhBLEdBQVo7QUFBaUJDLFFBQUUsRUFBRkE7QUFBakIsS0FBeEI7QUFBQSxHQUFuQjs7QUFFQXRJLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUl1SSxDQUFDLEdBQUdqSSxNQUFNLENBQUNDLElBQVAsQ0FBWXRCLElBQVosRUFBa0JtRyxNQUFsQixDQUF5QixVQUFBQyxDQUFDO0FBQUEsYUFBSUEsQ0FBQyxLQUFLLFdBQVY7QUFBQSxLQUExQixDQUFSOztBQUVBLFFBQUlrRCxDQUFDLENBQUNDLE1BQUYsS0FBYSxDQUFqQixFQUFvQjtBQUNsQnpJLGNBQVEsQ0FBQztBQUFFZixZQUFJLEVBQUUsUUFBUjtBQUFrQkksY0FBTSxZQUFLbUosQ0FBTDtBQUF4QixPQUFELENBQVI7QUFDRDs7QUFDRCxRQUFJdEosSUFBSSxDQUFDRyxNQUFELENBQVIsRUFBa0I7QUFBQSx5QkFDUUgsSUFBSSxDQUFDRyxNQUFELENBRFo7QUFBQSxVQUNWK0ksR0FEVSxnQkFDVkEsR0FEVTtBQUFBLFVBQ0xDLEdBREssZ0JBQ0xBLEdBREs7QUFBQSxVQUNBQyxHQURBLGdCQUNBQSxHQURBO0FBRWhCLFVBQU05QyxDQUFDLEdBQUcsQ0FBQzRDLEdBQUQsRUFBTUMsR0FBTixFQUFXQyxHQUFYLEVBQWdCcEIsTUFBaEIsQ0FBdUIsVUFBQ0MsR0FBRCxFQUFNN0IsQ0FBTjtBQUFBLGVBQWFBLENBQUMsQ0FBQ21ELE1BQUYsR0FBV3RCLEdBQVgsR0FBaUI3QixDQUFDLENBQUNtRCxNQUFuQixHQUE0QnRCLEdBQXpDO0FBQUEsT0FBdkIsRUFBc0UsQ0FBdEUsQ0FBVjs7QUFDQSxVQUFNaEksS0FBSSxHQUFHLG1CQUFJdUosS0FBSyxDQUFDbEQsQ0FBRCxDQUFULEVBQWNELEdBQWQsQ0FBa0IsVUFBQ0QsQ0FBRCxFQUFJRSxDQUFKO0FBQUEsZUFBVTJDLFVBQVUsQ0FBQ0MsR0FBRyxDQUFDNUMsQ0FBRCxDQUFILElBQVUsRUFBWCxFQUFlNkMsR0FBRyxDQUFDN0MsQ0FBRCxDQUFILElBQVUsRUFBekIsRUFBNkI4QyxHQUFHLENBQUM5QyxDQUFELENBQUgsSUFBVSxFQUF2QyxFQUEyQ0EsQ0FBM0MsQ0FBcEI7QUFBQSxPQUFsQixDQUFiOztBQUVBeEYsY0FBUSxDQUFDO0FBQUVmLFlBQUksRUFBRSxNQUFSO0FBQWdCRSxZQUFJLEVBQUpBO0FBQWhCLE9BQUQsQ0FBUjs7QUFFQSxVQUFJLENBQUNBLEtBQUksQ0FBQ3NKLE1BQVYsRUFBa0I7QUFDaEIsWUFBSUQsRUFBQyxHQUFHakksTUFBTSxDQUFDQyxJQUFQLENBQVl0QixJQUFaLEVBQWtCbUcsTUFBbEIsQ0FBeUIsVUFBQUMsQ0FBQztBQUFBLGlCQUFJQSxDQUFDLEtBQUssV0FBVjtBQUFBLFNBQTFCLENBQVI7O0FBQ0EsWUFBSUUsR0FBQyxHQUFHZ0QsRUFBQyxDQUFDRyxPQUFGLENBQVV0SixNQUFWLElBQW9CLENBQTVCOztBQUNBLFlBQUl1SixNQUFNLEdBQUdKLEVBQUMsQ0FBQ2hELEdBQUQsQ0FBZDtBQUVBeEYsZ0JBQVEsQ0FBQztBQUFFZixjQUFJLEVBQUUsUUFBUjtBQUFrQkksZ0JBQU0sRUFBRXVKO0FBQTFCLFNBQUQsQ0FBUjs7QUFFQSxZQUFNbEIsR0FBRyxxQkFBUXhJLElBQVIsQ0FBVDs7QUFDQSxlQUFPd0ksR0FBRyxDQUFDckksTUFBRCxDQUFWO0FBQ0FXLGdCQUFRLENBQUM7QUFBRWYsY0FBSSxFQUFFLE1BQVI7QUFBZ0JDLGNBQUksRUFBRXdJO0FBQXRCLFNBQUQsQ0FBUjtBQUNBeEgsY0FBTSxDQUFDQyxPQUFQLENBQWVDLElBQWYsQ0FBb0IyRSxNQUFwQixDQUEyQjFGLE1BQTNCO0FBQ0Q7QUFDRjs7QUFDRCxXQUFPLFlBQU07QUFDWFcsY0FBUSxDQUFDO0FBQUVmLFlBQUksRUFBRSxVQUFSO0FBQW9CRyxnQkFBUSxFQUFFO0FBQTlCLE9BQUQsQ0FBUjtBQUNELEtBRkQ7QUFHRCxHQTdCUSxFQTZCTixDQUFDRixJQUFELEVBQU9HLE1BQVAsQ0E3Qk0sQ0FBVDs7QUErQkEsTUFBTXdKLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUN2SyxDQUFELEVBQUlpSyxFQUFKLEVBQVc7QUFDN0JuSixZQUFRLENBQUMrQixRQUFULENBQWtCb0gsRUFBbEIsSUFDSXZJLFFBQVEsQ0FBQztBQUFFZixVQUFJLEVBQUUsVUFBUjtBQUFvQkcsY0FBUSxFQUFFQSxRQUFRLENBQUNpRyxNQUFULENBQWdCLFVBQUFDLENBQUM7QUFBQSxlQUFJQSxDQUFDLEtBQUtpRCxFQUFWO0FBQUEsT0FBakI7QUFBOUIsS0FBRCxDQURaLEdBRUl2SSxRQUFRLENBQUM7QUFBRWYsVUFBSSxFQUFFLFVBQVI7QUFBb0JHLGNBQVEsRUFBRUEsUUFBUSxDQUFDbUksTUFBVCxDQUFnQmdCLEVBQWhCO0FBQTlCLEtBQUQsQ0FGWjtBQUdELEdBSkQ7O0FBTUEsU0FDRSwyREFBQyxtRUFBRCxRQUNHcEosSUFBSSxDQUFDc0osTUFBTCxHQUNDdEosSUFBSSxDQUFDb0csR0FBTCxDQUFTLFVBQUNtQixHQUFELEVBQU1sQixDQUFOLEVBQVk7QUFDbkIsV0FDRSwyREFBQyxrRUFBRDtBQUFVLFdBQUssTUFBZjtBQUFnQixhQUFPLEVBQUUsaUJBQUFsSCxDQUFDO0FBQUEsZUFBSXVLLFdBQVcsQ0FBQ3ZLLENBQUQsRUFBSW9JLEdBQUcsQ0FBQzZCLEVBQVIsQ0FBZjtBQUFBLE9BQTFCO0FBQXNELFNBQUcsRUFBRS9DLENBQTNEO0FBQThELGNBQVEsRUFBRXBHLFFBQVEsQ0FBQytCLFFBQVQsQ0FBa0J1RixHQUFHLENBQUM2QixFQUF0QjtBQUF4RSxPQUNFLDJEQUFDLG1FQUFEO0FBQVcsYUFBTyxFQUFDO0FBQW5CLE9BQ0UsMkRBQUMsa0VBQUQ7QUFBVSxhQUFPLEVBQUVuSixRQUFRLENBQUMrQixRQUFULENBQWtCdUYsR0FBRyxDQUFDNkIsRUFBdEI7QUFBbkIsTUFERixDQURGLEVBSUUsMkRBQUMsbUVBQUQ7QUFBVyxXQUFLLEVBQUM7QUFBakIsT0FDRSwyREFBQyxnREFBRDtBQUFTLFNBQUcsRUFBRTdCLEdBQWQ7QUFBbUIsV0FBSyxFQUFDO0FBQXpCLE1BREYsQ0FKRixFQU9FLDJEQUFDLG1FQUFEO0FBQVcsV0FBSyxFQUFDO0FBQWpCLE9BQ0UsMkRBQUMsZ0RBQUQ7QUFBUyxTQUFHLEVBQUVBLEdBQWQ7QUFBbUIsV0FBSyxFQUFDO0FBQXpCLE1BREYsQ0FQRixFQVVFLDJEQUFDLG1FQUFEO0FBQVcsV0FBSyxFQUFDO0FBQWpCLE9BQ0UsMkRBQUMsZ0RBQUQ7QUFBUyxTQUFHLEVBQUVBLEdBQWQ7QUFBbUIsV0FBSyxFQUFDO0FBQXpCLE1BREYsQ0FWRixDQURGO0FBZ0JELEdBakJELENBREQsR0FvQkMsMkRBQUMsa0VBQUQsUUFDRSwyREFBQyxtRUFBRDtBQUFXLFdBQU8sRUFBRTtBQUFwQixLQUNFLDJEQUFDLG9FQUFEO0FBQVksU0FBSyxFQUFDLFFBQWxCO0FBQTJCLFdBQU8sRUFBQyxXQUFuQztBQUErQyxTQUFLLEVBQUM7QUFBckQsZ0NBREYsQ0FERixDQXJCSixDQURGO0FBZ0NELENBekVEOztBQTJFZXdCLDBFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNWSxRQUFRLEdBQUcsQ0FDZjtBQUFFUCxJQUFFLEVBQUUsS0FBTjtBQUFhUSxPQUFLLEVBQUU7QUFBcEIsQ0FEZSxFQUVmO0FBQUVSLElBQUUsRUFBRSxLQUFOO0FBQWFRLE9BQUssRUFBRTtBQUFwQixDQUZlLEVBR2Y7QUFBRVIsSUFBRSxFQUFFLEtBQU47QUFBYVEsT0FBSyxFQUFFO0FBQXBCLENBSGUsQ0FBakI7O0FBTUEsSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQUEsb0JBQ2V2Ryx3REFBVSxDQUFDOUQsOENBQUQsQ0FEekI7QUFBQTtBQUFBO0FBQUEsTUFDckJTLFFBRHFCLGlCQUNyQkEsUUFEcUI7QUFBQSxNQUNYRCxJQURXLGlCQUNYQSxJQURXO0FBQUEsTUFDTEQsSUFESyxpQkFDTEEsSUFESztBQUFBLE1BQ0djLFFBREg7O0FBQUEsa0JBR0p3RSxzREFBUSxDQUFDLEtBQUQsQ0FISjtBQUFBO0FBQUEsTUFHdkJ5RSxLQUh1QjtBQUFBLE1BR2hCQyxRQUhnQjs7QUFBQSxtQkFJQTFFLHNEQUFRLENBQUMsS0FBRCxDQUpSO0FBQUE7QUFBQSxNQUl2QjJFLE9BSnVCO0FBQUEsTUFJZEMsVUFKYzs7QUFLOUIsTUFBTUMsV0FBVyxHQUFHakssUUFBUSxDQUFDcUosTUFBN0I7QUFDQSxNQUFNYSxRQUFRLEdBQUduSyxJQUFJLENBQUNzSixNQUF0Qjs7QUFFQSxNQUFNYyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUFDLEtBQUssRUFBSTtBQUNwQyxRQUFJQSxLQUFLLENBQUM1RyxNQUFOLENBQWE2RyxPQUFqQixFQUEwQjtBQUN4QixVQUFNQyxZQUFZLEdBQUd2SyxJQUFJLENBQUNvRyxHQUFMLENBQVMsVUFBQW1CLEdBQUc7QUFBQSxlQUFJQSxHQUFHLENBQUM2QixFQUFSO0FBQUEsT0FBWixDQUFyQjtBQUNBdkksY0FBUSxDQUFDO0FBQUVmLFlBQUksRUFBRSxVQUFSO0FBQW9CRyxnQkFBUSxFQUFFc0s7QUFBOUIsT0FBRCxDQUFSO0FBQ0E7QUFDRDs7QUFDRDFKLFlBQVEsQ0FBQztBQUFFZixVQUFJLEVBQUUsVUFBUjtBQUFvQkcsY0FBUSxFQUFFO0FBQTlCLEtBQUQsQ0FBUjtBQUNELEdBUEQ7O0FBU0EsTUFBTXVLLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ3JMLENBQUQsRUFBSXNMLFFBQUosRUFBaUI7QUFDckMsUUFBTUMsTUFBTSxHQUFHVixPQUFPLEtBQUtTLFFBQVosSUFBd0JYLEtBQUssS0FBSyxNQUFqRDtBQUNBQyxZQUFRLENBQUNXLE1BQU0sR0FBRyxLQUFILEdBQVcsTUFBbEIsQ0FBUjtBQUNBVCxjQUFVLENBQUNRLFFBQUQsQ0FBVjtBQUNBNUosWUFBUSxDQUFDO0FBQUVmLFVBQUksRUFBRSxNQUFSO0FBQWdCRSxVQUFJLEVBQUUsbUJBQUlBLElBQUosRUFBVTJLLE9BQVY7QUFBdEIsS0FBRCxDQUFSO0FBQ0QsR0FMRDs7QUFNQSxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUFILFFBQVE7QUFBQSxXQUFJLFVBQUF0TCxDQUFDO0FBQUEsYUFBSXFMLGFBQWEsQ0FBQ3JMLENBQUQsRUFBSXNMLFFBQUosQ0FBakI7QUFBQSxLQUFMO0FBQUEsR0FBbEM7O0FBRUEsU0FDRSwyREFBQyxtRUFBRCxRQUNFLDJEQUFDLGtFQUFELFFBQ0UsMkRBQUMsbUVBQUQ7QUFBVyxXQUFPLEVBQUM7QUFBbkIsS0FDRSwyREFBQyxrRUFBRDtBQUNFLGlCQUFhLEVBQUVQLFdBQVcsR0FBRyxDQUFkLElBQW1CQSxXQUFXLEdBQUdDLFFBRGxEO0FBRUUsV0FBTyxFQUFFLENBQUMsQ0FBQ0EsUUFBRixJQUFjRCxXQUFXLEtBQUtDLFFBRnpDO0FBR0UsWUFBUSxFQUFFQztBQUhaLElBREYsQ0FERixFQVNHVCxRQUFRLENBQUN2RCxHQUFULENBQWEsVUFBQ21CLEdBQUQsRUFBTWxCLENBQU47QUFBQSxXQUNaLDJEQUFDLG1FQUFEO0FBQVcsU0FBRyxFQUFFQSxDQUFoQjtBQUFtQixXQUFLLEVBQUMsTUFBekI7QUFBZ0MsbUJBQWEsRUFBRTJELE9BQU8sS0FBS3pDLEdBQUcsQ0FBQzZCLEVBQWhCLEdBQXFCVSxLQUFyQixHQUE2QjtBQUE1RSxPQUNFLDJEQUFDLHdFQUFEO0FBQWdCLFlBQU0sRUFBRUUsT0FBTyxLQUFLekMsR0FBRyxDQUFDNkIsRUFBeEM7QUFBNEMsZUFBUyxFQUFFVSxLQUF2RDtBQUE4RCxhQUFPLEVBQUVjLGlCQUFpQixDQUFDckQsR0FBRyxDQUFDNkIsRUFBTDtBQUF4RixPQUNHN0IsR0FBRyxDQUFDcUMsS0FEUCxDQURGLENBRFk7QUFBQSxHQUFiLENBVEgsQ0FERixDQURGO0FBcUJELENBOUNEOztBQWdEZUMsZ0ZBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1nQixnQkFBZ0IsR0FBR3JJLDJFQUFVLENBQUMsVUFBQTNELEtBQUs7QUFBQSxTQUFLO0FBQzVDaU0sWUFBUSxFQUFFO0FBQ1JsRyxjQUFRLEVBQUUsT0FERjtBQUVSbUcsWUFBTSxFQUFFbE0sS0FBSyxDQUFDa0UsT0FBTixDQUFjLEVBQWQsQ0FGQTtBQUdSaUksV0FBSyxFQUFFbk0sS0FBSyxDQUFDa0UsT0FBTixDQUFjLENBQWQsQ0FIQztBQUlSOEIsWUFBTSxFQUFFO0FBSkEsS0FEa0M7QUFPNUNvRyxVQUFNLEVBQUU7QUFDTnJHLGNBQVEsRUFBRSxVQURKO0FBRU5zRyxTQUFHLEVBQUUsQ0FGQztBQUdORixXQUFLLEVBQUUsRUFIRDtBQUlObkcsWUFBTSxFQUFFO0FBSkY7QUFQb0MsR0FBTDtBQUFBLENBQU4sQ0FBbkM7O0FBZUEsSUFBTXNHLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQXhLLEtBQUssRUFBSTtBQUNwQyxNQUFNMEMsQ0FBQyxHQUFHd0gsZ0JBQWdCLEVBQTFCOztBQURvQyxvQkFFeUJ2SCx3REFBVSxDQUFDOUQsOENBQUQsQ0FGbkM7QUFBQTtBQUFBO0FBQUEsTUFFM0JTLFFBRjJCLGlCQUUzQkEsUUFGMkI7QUFBQSxNQUVqQkYsSUFGaUIsaUJBRWpCQSxJQUZpQjtBQUFBLE1BRVhHLE1BRlcsaUJBRVhBLE1BRlc7QUFBQSxNQUVIRixJQUZHLGlCQUVIQSxJQUZHO0FBQUEsTUFFR0ksTUFGSCxpQkFFR0EsTUFGSDtBQUFBLE1BRWFTLFFBRmI7O0FBSXBDLE1BQU1tSSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBV0MsR0FBWCxFQUFnQkMsRUFBaEI7QUFBQSxXQUF3QjtBQUFFSCxTQUFHLEVBQUhBLEdBQUY7QUFBT0MsU0FBRyxFQUFIQSxHQUFQO0FBQVlDLFNBQUcsRUFBSEEsR0FBWjtBQUFpQkMsUUFBRSxFQUFGQTtBQUFqQixLQUF4QjtBQUFBLEdBQW5COztBQUVBLE1BQU14RCxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFBdEYsQ0FBQyxFQUFJO0FBQ2xCLFFBQUk4SyxLQUFLLEdBQUdwTCxJQUFJLENBQUNrRyxNQUFMLENBQVksVUFBQUMsQ0FBQztBQUFBLGFBQUksQ0FBQ2xHLFFBQVEsQ0FBQytCLFFBQVQsQ0FBa0JtRSxDQUFDLENBQUNpRCxFQUFwQixDQUFMO0FBQUEsS0FBYixDQUFaO0FBRUEsUUFBSWQsSUFBSSxHQUFHLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCUCxNQUF0QixDQUE2QixVQUFDUSxHQUFELEVBQU1wQyxDQUFOLEVBQVk7QUFDbEQsK0JBQVlvQyxHQUFaLHNCQUFrQnBDLENBQWxCLEVBQXNCaUYsS0FBSyxDQUFDckQsTUFBTixDQUFhLFVBQUNDLEdBQUQsRUFBTUMsRUFBTjtBQUFBLGVBQWNBLEVBQUUsQ0FBQzlCLENBQUQsQ0FBRixHQUFRNkIsR0FBRyxDQUFDSSxNQUFKLENBQVdILEVBQUUsQ0FBQzlCLENBQUQsQ0FBYixDQUFSLEdBQTRCNkIsR0FBMUM7QUFBQSxPQUFiLEVBQTZELEVBQTdELENBQXRCO0FBQ0QsS0FGVSxFQUVSLEVBRlEsQ0FBWDtBQUdBTSxRQUFJLHFCQUFRdkksSUFBSSxDQUFDRyxNQUFELENBQVosTUFBeUJvSSxJQUF6QixDQUFKOztBQUNBLFFBQUlDLEdBQUcscUJBQVF4SSxJQUFSLHNCQUFlRyxNQUFmLEVBQXdCb0ksSUFBeEIsRUFBUDs7QUFDQXpILFlBQVEsQ0FBQztBQUFFZixVQUFJLEVBQUUsTUFBUjtBQUFnQkMsVUFBSSxFQUFFd0k7QUFBdEIsS0FBRCxDQUFSO0FBQ0QsR0FURDs7QUFXQSxNQUFNNUMsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQXJGLENBQUMsRUFBSTtBQUNmLFFBQUlOLElBQUksQ0FBQ3FMLEtBQUwsQ0FBVyxVQUFBbEYsQ0FBQztBQUFBLGFBQUlBLENBQUMsQ0FBQzhDLEdBQUYsSUFBUzlDLENBQUMsQ0FBQytDLEdBQVgsSUFBa0IvQyxDQUFDLENBQUNnRCxHQUF4QjtBQUFBLEtBQVosQ0FBSixFQUE4QztBQUM1QyxVQUFNNUIsR0FBRyxHQUFHeUIsVUFBVSxDQUFDSixTQUFELEVBQVlBLFNBQVosRUFBdUJBLFNBQXZCLEVBQWtDMEMsSUFBSSxDQUFDQyxHQUFMLEVBQWxDLENBQXRCO0FBQ0ExSyxjQUFRLENBQUM7QUFBRWYsWUFBSSxFQUFFLE1BQVI7QUFBZ0JFLFlBQUksRUFBRUEsSUFBSSxDQUFDb0ksTUFBTCxDQUFZYixHQUFaO0FBQXRCLE9BQUQsQ0FBUjtBQUNEO0FBQ0YsR0FMRDs7QUFPQSxNQUFNaUUsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFRakwsUUFBUixFQUFrQmtMLElBQWxCLEVBQTJCO0FBQ3RDLFdBQU92TSwyREFBQyxDQUFDd00saUVBQUQsRUFBVTtBQUFFRixXQUFLLEVBQUxBO0FBQUYsS0FBVixFQUFxQnRNLDJEQUFDLENBQUN5TSw2REFBRCxFQUFNO0FBQUVDLFdBQUssRUFBRSxTQUFUO0FBQW9CL0YsZUFBUyxFQUFFekMsQ0FBQyxDQUFDeUgsUUFBakM7QUFBMkNyRSxhQUFPLEVBQUVqRztBQUFwRCxLQUFOLEVBQXNFckIsMkRBQUMsQ0FBQ3VNLElBQUQsQ0FBdkUsQ0FBdEIsQ0FBUjtBQUNELEdBRkQ7O0FBSUEsTUFBTUksYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBeEwsQ0FBQyxFQUFJO0FBQ3pCTyxZQUFRLENBQUM7QUFBRWYsVUFBSSxFQUFFLFFBQVI7QUFBa0JNLFlBQU0sRUFBRSxDQUFDQTtBQUEzQixLQUFELENBQVI7QUFDQVMsWUFBUSxDQUFDO0FBQUVmLFVBQUksRUFBRSxVQUFSO0FBQW9CRyxjQUFRLEVBQUU7QUFBOUIsS0FBRCxDQUFSO0FBQ0QsR0FIRDs7QUFLQSxTQUFPZCwyREFBQyxDQUNONE0sOENBRE0sRUFFTixJQUZNLEVBR04sQ0FBQzNMLE1BQUQsS0FBWUgsUUFBUSxDQUFDcUosTUFBVCxLQUFvQixDQUFwQixHQUF3QmtDLElBQUksQ0FBQyxLQUFELEVBQVE3RixHQUFSLEVBQWFxRyw2REFBYixDQUE1QixHQUFvRFIsSUFBSSxDQUFDLFFBQUQsRUFBVzVGLE1BQVgsRUFBbUJxRyxnRUFBbkIsQ0FBcEUsQ0FITSxFQUlOOU0sMkRBQUMsQ0FBQytNLGdFQUFELEVBQVM7QUFDUkwsU0FBSyxFQUFFLFNBREM7QUFFUnZCLFdBQU8sRUFBRWxLLE1BRkQ7QUFHUitMLFlBQVEsRUFBRUwsYUFIRjtBQUlSekosU0FBSyxFQUFFLElBSkM7QUFLUnlELGFBQVMsRUFBRXpDLENBQUMsQ0FBQzRIO0FBTEwsR0FBVCxDQUpLLENBQVI7QUFZRCxDQTdDRDs7QUErQ2VFLG1GQUFmLEU7Ozs7Ozs7Ozs7OztBQ3ZFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTTVJLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFBM0QsS0FBSztBQUFBLFNBQUs7QUFDckN1SSxRQUFJLEVBQUU7QUFDSmdGLGNBQVEsRUFBRTtBQUROLEtBRCtCO0FBSXJDQyxVQUFNLEVBQUU7QUFDTnpILGNBQVEsRUFBRTtBQURKLEtBSjZCO0FBT3JDMEgsY0FBVSxFQUFFO0FBQ1ZuSSxXQUFLLEVBQUV0RixLQUFLLENBQUNrRSxPQUFOLENBQWMsR0FBZCxDQURHO0FBRVZ3SixZQUFNLEVBQUUsTUFGRTtBQUdWM0gsY0FBUSxFQUFFLFVBSEE7QUFJVjRILG1CQUFhLEVBQUUsTUFKTDtBQUtWOUosYUFBTyxFQUFFLE1BTEM7QUFNVitKLGdCQUFVLEVBQUUsUUFORjtBQU9WQyxvQkFBYyxFQUFFO0FBUE4sS0FQeUI7QUFnQnJDQyxhQUFTLEVBQUU7QUFDVGQsV0FBSyxFQUFFO0FBREUsS0FoQjBCO0FBbUJyQ2UsY0FBVSxFQUFFO0FBQ1ZDLGFBQU8sRUFBRWhPLEtBQUssQ0FBQ2tFLE9BQU4sQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBREM7QUFFVm9CLFdBQUssRUFBRTtBQUZHLEtBbkJ5QjtBQXVCckMySSxTQUFLLEVBQUU7QUFDTGpLLFlBQU0sRUFBRWhFLEtBQUssQ0FBQ2tFLE9BQU4sQ0FBYyxDQUFkO0FBREg7QUF2QjhCLEdBQUw7QUFBQSxDQUFOLENBQTVCO0FBNEJlLFNBQVNnSyxZQUFULE9BQXFDO0FBQUEsTUFBYnpILFNBQWEsUUFBYkEsU0FBYTtBQUNsRCxNQUFNeUIsT0FBTyxHQUFHeEUsU0FBUyxFQUF6QjtBQUVBLFNBQ0UsMkRBQUMsaUVBQUQ7QUFBUyxhQUFTLEVBQUV3RSxPQUFPLENBQUNLO0FBQTVCLEtBQ0U7QUFBSyxhQUFTLEVBQUVMLE9BQU8sQ0FBQ3NGO0FBQXhCLEtBQ0U7QUFBSyxhQUFTLEVBQUV0RixPQUFPLENBQUN1RjtBQUF4QixLQUNFLDJEQUFDLGdFQUFELE9BREYsQ0FERixFQUlFLDJEQUFDLCtEQUFEO0FBQ0UsZUFBVyxFQUFDLGNBRGQ7QUFFRSxXQUFPLEVBQUU7QUFDUGxGLFVBQUksRUFBRUwsT0FBTyxDQUFDNEYsU0FEUDtBQUVQRyxXQUFLLEVBQUUvRixPQUFPLENBQUM2RjtBQUZSLEtBRlg7QUFNRSxZQUFRLEVBQUUsa0JBQUF6TixDQUFDO0FBQUEsYUFBSW1HLFNBQVMsQ0FBQ25HLENBQUMsQ0FBQ3NFLE1BQUYsQ0FBU3BCLEtBQVQsQ0FBZTJLLElBQWYsRUFBRCxDQUFiO0FBQUE7QUFOYixJQUpGLENBREYsQ0FERjtBQWlCRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RERDtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNbkMsZ0JBQWdCLEdBQUdySSwyRUFBVSxDQUFDLFVBQUEzRCxLQUFLO0FBQUEsU0FBSztBQUM1Q2lNLFlBQVEsRUFBRTtBQUNSbEcsY0FBUSxFQUFFLE9BREY7QUFFUm1HLFlBQU0sRUFBRWxNLEtBQUssQ0FBQ2tFLE9BQU4sQ0FBYyxFQUFkLENBRkE7QUFHUmlJLFdBQUssRUFBRW5NLEtBQUssQ0FBQ2tFLE9BQU4sQ0FBYyxDQUFkLENBSEM7QUFJUjhCLFlBQU0sRUFBRTtBQUpBLEtBRGtDO0FBTzVDb0csVUFBTSxFQUFFO0FBQ05yRyxjQUFRLEVBQUUsVUFESjtBQUVOc0csU0FBRyxFQUFFLENBRkM7QUFHTkYsV0FBSyxFQUFFLEVBSEQ7QUFJTm5HLFlBQU0sRUFBRTtBQUpGO0FBUG9DLEdBQUw7QUFBQSxDQUFOLENBQW5DO0FBZUEsSUFBTXRDLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFBM0QsS0FBSztBQUFBLFNBQUs7QUFDckN1SSxRQUFJLEVBQUU7QUFDSmpELFdBQUssRUFBRTtBQURILEtBRCtCO0FBSXJDNkMsU0FBSyxFQUFFO0FBQ0w3QyxXQUFLLEVBQUUsTUFERjtBQUVMaEIsa0JBQVksRUFBRXRFLEtBQUssQ0FBQ2tFLE9BQU4sQ0FBYyxDQUFkO0FBRlQsS0FKOEI7QUFRckNrSyxTQUFLLEVBQUU7QUFDTEMsY0FBUSxFQUFFO0FBREwsS0FSOEI7QUFXckNDLGdCQUFZLEVBQUU7QUFDWkMsZUFBUyxFQUFFO0FBREM7QUFYdUIsR0FBTDtBQUFBLENBQU4sQ0FBNUI7O0FBZ0JBLElBQU1wRSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBV0MsR0FBWCxFQUFnQkMsRUFBaEI7QUFBQSxTQUF3QjtBQUFFSCxPQUFHLEVBQUhBLEdBQUY7QUFBT0MsT0FBRyxFQUFIQSxHQUFQO0FBQVlDLE9BQUcsRUFBSEEsR0FBWjtBQUFpQkMsTUFBRSxFQUFGQTtBQUFqQixHQUF4QjtBQUFBLENBQW5COztBQUVlLFNBQVNpRSxhQUFULEdBQXlCO0FBQ3RDLE1BQU1oSyxDQUFDLEdBQUd3SCxnQkFBZ0IsRUFBMUI7O0FBRHNDLG9CQUVQdkgsd0RBQVUsQ0FBQzlELDhDQUFELENBRkg7QUFBQTtBQUFBLE1BRTdCWSxNQUY2QixtQkFFN0JBLE1BRjZCO0FBQUEsTUFFbkJTLFFBRm1COztBQUl0QyxTQUFPMUIsMkRBQUMsQ0FDTm1PLCtEQURNLEVBRU47QUFBRXhILGFBQVMsRUFBRXpDLENBQUMsQ0FBQzJEO0FBQWYsR0FGTSxFQUdON0gsMkRBQUMsQ0FBQ29PLHVEQUFELENBSEssRUFJTixDQUFDbk4sTUFBRCxHQUNJakIsMkRBQUMsQ0FDQyxLQURELEVBRUM7QUFBRTJHLGFBQVMsRUFBRXpDLENBQUMsQ0FBQzhKO0FBQWYsR0FGRCxFQUdDaE8sMkRBQUMsQ0FBQ3FPLCtEQUFELEVBQVE7QUFBRTFILGFBQVMsRUFBRXpDLENBQUMsQ0FBQzRKLEtBQWY7QUFBc0JRLFFBQUksRUFBRTtBQUE1QixHQUFSLEVBQWdEdE8sMkRBQUMsQ0FBQ3VPLG9EQUFELENBQWpELEVBQWdFdk8sMkRBQUMsQ0FBQzRKLG9EQUFELENBQWpFLENBSEYsQ0FETCxHQU1JNUosMkRBQUMsQ0FBQzRFLDRDQUFELENBVkMsQ0FBUjtBQVlELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdERDtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1FLFdBQVcsR0FBRyxHQUFwQjtBQUNBLElBQU0xQixTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQTNELEtBQUs7QUFBQSxTQUFLO0FBQ3JDdUksUUFBSSxFQUFFO0FBQ0oxRSxhQUFPLEVBQUU7QUFETCxLQUQrQjtBQUlyQ2lMLFVBQU0sRUFBRTtBQUNOeEosV0FBSyx3QkFBaUJGLFdBQWpCLFFBREM7QUFFTjJKLGdCQUFVLEVBQUUzSjtBQUZOLEtBSjZCO0FBU3JDNEosV0FBTyxFQUFFO0FBQ1B6QixjQUFRLEVBQUUsQ0FESDtBQUVQMEIscUJBQWUsRUFBRWpQLEtBQUssQ0FBQ0UsT0FBTixDQUFjMkYsVUFBZDtBQUZWO0FBVDRCLEdBQUw7QUFBQSxDQUFOLENBQTVCO0FBZWUsU0FBU3FKLG1CQUFULEdBQStCO0FBQzVDLE1BQU1oSCxPQUFPLEdBQUd4RSxTQUFTLEVBQXpCOztBQUQ0QyxrQkFFTjhDLHNEQUFRLENBQUMsRUFBRCxDQUZGO0FBQUE7QUFBQSxNQUVyQzJJLFdBRnFDO0FBQUEsTUFFeEJDLGNBRndCOztBQUk1QyxTQUNFO0FBQUssYUFBUyxFQUFFbEgsT0FBTyxDQUFDSztBQUF4QixLQUNFLDJEQUFDLDBEQUFELE9BREYsRUFHRTtBQUFNLGFBQVMsRUFBRUwsT0FBTyxDQUFDOEc7QUFBekIsS0FDRSwyREFBQyx5REFBRCxFQUFXRyxXQUFYLENBREYsQ0FIRixDQURGO0FBU0QsQzs7Ozs7Ozs7Ozs7O0FDbENEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1uUCxLQUFLLEdBQUdDLCtFQUFjLENBQUM7QUFDM0JDLFNBQU8sRUFBRTtBQUNQQyxXQUFPLEVBQUVDLG9FQUFJQTtBQUROO0FBRGtCLENBQUQsQ0FBNUI7QUFNQWlQLGdEQUFRLENBQUNDLE1BQVQsQ0FDRSwyREFBQyxpRUFBRDtBQUFlLE9BQUssRUFBRXRQO0FBQXRCLEdBQ0UsMkRBQUMscUVBQUQsT0FERixFQUVFLDJEQUFDLDJEQUFELE9BRkYsQ0FERixFQUtFdVAsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBTEYsRSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXguanNcIixcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCBhcyBmLCBjcmVhdGVFbGVtZW50IGFzIGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJ3R5cGVmYWNlLXJvYm90byc7XG5pbXBvcnQgT3B0aW9ucyBmcm9tICcuL09wdGlvbnNQYWdlL2luZGV4JztcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XG5pbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgYmx1ZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvYmx1ZSc7XG5pbXBvcnQgU3RvcmUgZnJvbSAnLi9PcHRpb25zUGFnZS9TdG9yZSc7XG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgcHJpbWFyeTogYmx1ZSxcbiAgICBzZWNvbmRhcnk6IGJsdWVcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IGUoVGhlbWVQcm92aWRlciwgeyB0aGVtZSB9LCBlKENzc0Jhc2VsaW5lKSwgZShTdG9yZSwgbnVsbCwgZShPcHRpb25zKSkpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgRnJhZ21lbnQgYXMgZiwgY3JlYXRlRWxlbWVudCBhcyBlLCB1c2VSZWR1Y2VyLCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ2RhdGEnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGRhdGE6IGFjdGlvbi5kYXRhIH07XG4gICAgY2FzZSAncm93cyc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcm93czogYWN0aW9uLnJvd3MgfTtcbiAgICBjYXNlICdzZWxlY3RlZCc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc2VsZWN0ZWQ6IGFjdGlvbi5zZWxlY3RlZCB9O1xuICAgIGNhc2UgJ2RvbWFpbic6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZG9tYWluOiBhY3Rpb24uZG9tYWluIH07XG4gICAgY2FzZSAnZXJyb3InOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGVycm9yOiBhY3Rpb24uZXJyb3IgfTtcbiAgICBjYXNlICd0b2dnbGUnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHRvZ2dsZTogYWN0aW9uLnRvZ2dsZSB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmNvbnN0IGRlYm91bmNlID0gKF8gPT4ge1xuICBsZXQgdGltZSA9IG51bGw7XG4gIHJldHVybiBjYWxsYmFjayA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWUpO1xuICAgIHRpbWUgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfSwgMTAwKTtcbiAgfTtcbn0pKCk7XG5cbmNvbnN0IFN0b3JlID0gcHJvcHMgPT4ge1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwge1xuICAgIGRhdGE6IHt9LFxuICAgIHJvd3M6IFtdLFxuICAgIHNlbGVjdGVkOiBbXSxcbiAgICBkb21haW46ICcnLFxuICAgIGVycm9yOiBmYWxzZSxcbiAgICB0b2dnbGU6IGZhbHNlXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQobnVsbCwgZGF0YSA9PiB7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdkYXRhJywgZGF0YSB9KTtcbiAgICAgIGxldCBmaXJzdCA9IE9iamVjdC5rZXlzKGRhdGEpWzBdO1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnZG9tYWluJywgZG9tYWluOiBmaXJzdCA9PT0gJ2dsb2JhbENzcycgPyAnJyA6IGZpcnN0IH0pO1xuICAgICAgY29uc29sZS5sb2coJ+iOt+WPluaVsOaNricsIGRhdGEpO1xuICAgIH0pO1xuXG4gICAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChyZXF1ZXN0LCBzZW5kZXIpID0+IHtcbiAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KG51bGwsIGRhdGEgPT4ge1xuICAgICAgICBpZiAocmVxdWVzdCA9PT0gJ3NlbCcpIHtcbiAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdkYXRhJywgZGF0YSB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXF1ZXN0ID09PSAnY3VycmVudCcpIHtcbiAgICAgICAgICBjb25zdCBkb21haW4gPSBuZXcgVVJMKHNlbmRlci51cmwpLmhvc3RuYW1lO1xuXG4gICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGRhdGEpLmluY2x1ZGVzKGRvbWFpbikpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ2RvbWFpbicsIGRvbWFpbiB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkZWJvdW5jZSgoKSA9PiB7XG4gICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldChzdGF0ZS5kYXRhKTtcbiAgICB9KTtcbiAgfSwgW3N0YXRlXSk7XG5cbiAgY29uc3QgTSA9IHVzZU1lbW8oXyA9PiBlKENvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IFtzdGF0ZSwgZGlzcGF0Y2hdIH0sIHByb3BzLmNoaWxkcmVuKSwgW3N0YXRlXSk7XG4gIHJldHVybiBNO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RvcmU7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4uL1N0b3JlJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBjb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICBtYXhXaWR0aDogOTYwLFxuICAgIG1hcmdpbjogJ2F1dG8nXG4gIH0sXG4gIHRleHRGaWVsZDoge1xuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZyg0LCAxKSxcbiAgICAnJiB0ZXh0YXJlYSc6IHtcbiAgICAgIGZvbnRGYW1pbHk6ICdGaXJhIENvZGUgUmVndWxhcicsXG4gICAgICBmb250U2l6ZTogJzE0cHgnXG4gICAgfVxuICB9LFxuICBsYXN0OiB7XG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDgpXG4gIH1cbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3V0bGluZWRUZXh0RmllbGRzKCkge1xuICBjb25zdCBjID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFt7IGRhdGEsIGRvbWFpbiB9LCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xuXG4gIGNvbnN0IHNldExvY2FsQ3NzID0gZSA9PiB7XG4gICAgaWYgKCFkb21haW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY3NzID0gZS50YXJnZXQudmFsdWU7XG4gICAgY29uc3QgbmV3Q3NzID0geyAuLi5kYXRhW2RvbWFpbl0sIGNzcyB9O1xuICAgIGxldCBuZXdkYXRhID0geyAuLi5kYXRhLCBbZG9tYWluXTogbmV3Q3NzIH07XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnZGF0YScsIGRhdGE6IG5ld2RhdGEgfSk7XG4gIH07XG5cbiAgY29uc3Qgc2V0R2xvYmFsQ3NzID0gZSA9PiB7XG4gICAgY29uc3QgY3NzID0gZS50YXJnZXQudmFsdWU7XG4gICAgbGV0IGEgPSB7IC4uLmRhdGEsIGdsb2JhbENzczogY3NzIH07XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnZGF0YScsIGRhdGE6IGEgfSk7XG4gIH07XG5cbiAgbGV0IENzcyA9ICcnO1xuICBpZiAoZGF0YVtkb21haW5dKSB7XG4gICAgQ3NzID0gZGF0YVtkb21haW5dLmNzcyB8fCAnJztcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBtYXhXaWR0aD0nbWQnPlxuICAgICAgPFRleHRGaWVsZFxuICAgICAgICBsYWJlbD17ZG9tYWluIHx8ICfmnKrpgInmi6knfVxuICAgICAgICBtdWx0aWxpbmVcbiAgICAgICAgcm93cz0nOCdcbiAgICAgICAgY2xhc3NOYW1lPXtjLnRleHRGaWVsZH1cbiAgICAgICAgbWFyZ2luPSdub3JtYWwnXG4gICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xuICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgb25DaGFuZ2U9e3NldExvY2FsQ3NzfVxuICAgICAgICBpZD0ndGV4dCdcbiAgICAgICAgdmFsdWU9e0Nzc31cbiAgICAgICAgcGxhY2Vob2xkZXI9J+m7mOiupOi/kOeUqOWFqOWxgCdcbiAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgc2hyaW5rOiB0cnVlXG4gICAgICAgIH19XG4gICAgICAvPlxuXG4gICAgICA8VGV4dEZpZWxkXG4gICAgICAgIGxhYmVsPSflhajlsYAnXG4gICAgICAgIG11bHRpbGluZVxuICAgICAgICByb3dzPSc4J1xuICAgICAgICBjbGFzc05hbWU9e2Ake2MudGV4dEZpZWxkfSAke2MubGFzdH1gfVxuICAgICAgICBtYXJnaW49J25vcm1hbCdcbiAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXG4gICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICB2YWx1ZT17ZGF0YS5nbG9iYWxDc3N9XG4gICAgICAgIG9uQ2hhbmdlPXtzZXRHbG9iYWxDc3N9XG4gICAgICAgIGlkPSd0ZXh0J1xuICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICBzaHJpbms6IHRydWVcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0LCBGcmFnbWVudCBhcyBmLCBjcmVhdGVFbGVtZW50IGFzIGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBEcmF3ZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyJztcbmltcG9ydCBEaXZpZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXInO1xuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuL1NlYXJjaCc7XG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnLi4vU3RvcmUnO1xuXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDMwMDtcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgZHJhd2VyOiB7XG4gICAgd2lkdGg6IGRyYXdlcldpZHRoLFxuICAgIGZsZXhTaHJpbms6IDAsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gIH0sXG4gIGRyYXdlclBhcGVyOiB7XG4gICAgd2lkdGg6IGRyYXdlcldpZHRoXG4gIH0sXG4gIHRvb2xiYXI6IHRoZW1lLm1peGlucy50b29sYmFyLFxuICBib3g6IHtcbiAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgekluZGV4OiAxMCxcbiAgICB3aWR0aDogZHJhd2VyV2lkdGggLSA1LFxuICAgIHRyYW5zaXRpb246ICdib3gtc2hhZG93IDAuM3MgZWFzZS1pbi1vdXQnXG4gIH0sXG4gIHNoYWRvdzoge1xuICAgIGJveFNoYWRvdzogJzBweCAycHggNHB4IC0xcHggIzAwMDAwMDMzLCAwcHggNHB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjE0KSwgMHB4IDFweCAxMHB4IDBweCByZ2JhKDAsMCwwLDAuMTIpJ1xuICB9LFxuICB0eHQ6IHtcbiAgICBwYWRkaW5nTGVmdDogOFxuICB9XG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IF8gPT4ge1xuICBjb25zdCBjID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgW3R4dCwgc2V0RmlsdGVyXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3sgZGF0YSwgZG9tYWluIH0sIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XG5cbiAgY29uc3Qgc2Nyb2xsID0gZSA9PiB7XG4gICAgZS50YXJnZXQuc2Nyb2xsVG9wID4gMzAgJiYgcmVmLmN1cnJlbnQuY2xhc3NMaXN0LmFkZChjLnNoYWRvdyk7XG4gICAgZS50YXJnZXQuc2Nyb2xsVG9wIDwgMzAgJiYgcmVmLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZShjLnNoYWRvdyk7XG4gIH07XG5cbiAgY29uc3QgU2VhcmNoQm94ID0gZSgnZGl2JywgeyBjbGFzc05hbWU6IGMuYm94LCByZWYgfSwgZShTZWFyY2gsIHsgc2V0RmlsdGVyIH0pLCBlKERpdmlkZXIpKTtcblxuICBjb25zdCByZW5kZXJsaXN0ID0gT2JqZWN0LmtleXMoZGF0YSlcbiAgICAuZmlsdGVyKHYgPT4gdiAhPT0gJ2dsb2JhbENzcycpXG4gICAgLmZpbHRlcih2ID0+IHYuaW5jbHVkZXModHh0KSlcbiAgICAubWFwKCh2LCBpKSA9PlxuICAgICAgZShcbiAgICAgICAgTGlzdEl0ZW0sXG4gICAgICAgIHsgYnV0dG9uOiB0cnVlLCBrZXk6IGksIG9uQ2xpY2s6IGUgPT4gZGlzcGF0Y2goeyB0eXBlOiAnZG9tYWluJywgZG9tYWluOiB2IH0pLCBzZWxlY3RlZDogZG9tYWluID09PSB2IH0sXG4gICAgICAgIGUoTGlzdEl0ZW1UZXh0LCB7IHByaW1hcnk6IHYsIGNsYXNzTmFtZTogYy50eHQgfSlcbiAgICAgIClcbiAgICApO1xuXG4gIGNvbnN0IGxpc3RCb3ggPSBlKExpc3QsIG51bGwsIHJlbmRlcmxpc3QpO1xuXG4gIGNvbnN0IGRyYXdlck9wdGlvbiA9IHtcbiAgICBjbGFzc05hbWU6IGMuZHJhd2VyLFxuICAgIHZhcmlhbnQ6ICdwZXJtYW5lbnQnLFxuICAgIGNsYXNzZXM6IHsgcGFwZXI6IGMuZHJhd2VyUGFwZXIgfSxcbiAgICBhbmNob3I6ICdsZWZ0JyxcbiAgICBvblNjcm9sbDogc2Nyb2xsXG4gIH07XG5cbiAgcmV0dXJuIGUoRHJhd2VyLCBkcmF3ZXJPcHRpb24sIFNlYXJjaEJveCwgZSgnZGl2JywgeyBjbGFzc05hbWU6IGMudG9vbGJhciB9KSwgbGlzdEJveCk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgRnJhZ21lbnQgYXMgZiwgY3JlYXRlRWxlbWVudCBhcyBlLCB1c2VDb250ZXh0LCB1c2VNZW1vLCB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuLi9TdG9yZSc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgICcmID4gZGl2OjpiZWZvcmUnOiB7XG4gICAgICBib3JkZXJCb3R0b21Db2xvcjogJyMwMDAwMDAwMCdcbiAgICB9XG4gIH1cbn0pKTtcblxuY29uc3QgSW5wdXRNZSA9ICh7IHJvdywgZmllbGQgfSkgPT4ge1xuICBjb25zdCBjID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFt7IHJvd3MsIGRvbWFpbiwgZGF0YSwgZXJyb3IgfSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChDb250ZXh0KTtcbiAgY29uc3QgW0Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtUeHQsIHNldFR4dF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRFcnJvcihmYWxzZSk7XG4gICAgc2V0VHh0KCcnKTtcbiAgfSwgW2RhdGFdKTtcblxuICBjb25zdCBmbiA9IHYgPT4ge1xuICAgIHJldHVybiBbLi4ubmV3IFNldChyb3dzLnJlZHVjZSgoYWNjLCB2MikgPT4gKHYyW3ZdICYmIGlzTmFOKHBhcnNlRmxvYXQodjJbdl0pKSA/IGFjYy5jb25jYXQodjJbdl0pIDogYWNjKSwgW10pKV07XG4gIH07XG5cbiAgY29uc3QgU3VibWl0ID0gZSA9PiB7XG4gICAgbGV0IG9iajIgPSBbJ3N0eScsICdkZWYnLCAnbWlkJ10ucmVkdWNlKChvYmosIHYpID0+IHtcbiAgICAgIHJldHVybiB7IC4uLm9iaiwgW3ZdOiBmbih2KSB9O1xuICAgIH0sIHt9KTtcbiAgICBvYmoyID0geyAuLi5kYXRhW2RvbWFpbl0sIC4uLm9iajIgfTtcblxuICAgIGxldCBvYmogPSB7IC4uLmRhdGEsIFtkb21haW5dOiBvYmoyIH07XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnZGF0YScsIGRhdGE6IG9iaiB9KTtcbiAgfTtcblxuICBjb25zdCBlZGl0ID0gZSA9PiB7XG4gICAgaWYgKCFkb21haW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdmFsID0gZS50YXJnZXQudmFsdWU7XG4gICAgaWYgKCFpc05hTihwYXJzZUZsb2F0KHZhbCkpKSB7XG4gICAgICBzZXRFcnJvcih0cnVlKTtcbiAgICAgIHNldFR4dCgn6YCJ5oup5Zmo5LiN6IO95piv5pWw5a2XJyk7XG4gICAgfSBlbHNlIGlmIChyb3dzLm1hcCh2ID0+IHZbZmllbGRdKS5pbmNsdWRlcyh2YWwpICYmIHZhbCkge1xuICAgICAgc2V0RXJyb3IodHJ1ZSk7XG4gICAgICBzZXRUeHQoJ+mHjeWkjemAieaLqeWZqCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRFcnJvcihmYWxzZSk7XG4gICAgICBzZXRUeHQoJycpO1xuICAgIH1cblxuICAgIGRpc3BhdGNoKHsgdHlwZTogJ2Vycm9yJywgZXJyb3I6IHZhbCB9KTtcblxuICAgIGNvbnN0IG5ld1JvdyA9IHsgLi4ucm93LCBbZmllbGRdOiB2YWwgfTtcbiAgICBsZXQgbmV3Um93cyA9IHJvd3MubWFwKHYgPT4gKHYgPT09IHJvdyA/IG5ld1JvdyA6IHYpKTtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdyb3dzJywgcm93czogbmV3Um93cyB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxUZXh0RmllbGRcbiAgICAgIHZhbHVlPXtyb3dbZmllbGRdID09PSB1bmRlZmluZWQgPyAnJyA6IHJvd1tmaWVsZF19XG4gICAgICBvbkNoYW5nZT17ZWRpdH1cbiAgICAgIGNsYXNzZXM9e3sgcm9vdDogYy5yb290IH19XG4gICAgICBvbkNsaWNrPXtlID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XG4gICAgICBvbkJsdXI9e1N1Ym1pdH1cbiAgICAgIGxhYmVsPXtUeHR9XG4gICAgICBlcnJvcj17ISEoZXJyb3IgPT09IHJvd1tmaWVsZF0gJiYgZXJyb3IgJiYgRXJyb3IpfVxuICAgIC8+XG4gICk7XG59O1xuXG5jb25zdCBNeUlucHV0ID0gcHJvcHMgPT4ge1xuICByZXR1cm4gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIDxJbnB1dE1lIHsuLi5wcm9wc30gLz47XG4gIH0sIFtwcm9wcy5yb3ddKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE15SW5wdXQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgYXMgZiwgY3JlYXRlRWxlbWVudCBhcyBlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHknO1xuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94JztcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuLi9TdG9yZSc7XG5pbXBvcnQgSW5wdXRNZSBmcm9tICcuL015SW5wdXQnO1xuXG5jb25zdCBNeVRhYmxlQm9keSA9IF8gPT4ge1xuICBjb25zdCBbeyBkYXRhLCBzZWxlY3RlZCwgcm93cywgZG9tYWluIH0sIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XG4gIGNvbnN0IGNyZWF0ZURhdGEgPSAoc3R5LCBkZWYsIG1pZCwgaWQpID0+ICh7IHN0eSwgZGVmLCBtaWQsIGlkIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGsgPSBPYmplY3Qua2V5cyhkYXRhKS5maWx0ZXIodiA9PiB2ICE9PSAnZ2xvYmFsQ3NzJyk7XG5cbiAgICBpZiAoay5sZW5ndGggPT09IDEpIHtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ2RvbWFpbicsIGRvbWFpbjogYCR7a31gIH0pO1xuICAgIH1cbiAgICBpZiAoZGF0YVtkb21haW5dKSB7XG4gICAgICBsZXQgeyBzdHksIGRlZiwgbWlkIH0gPSBkYXRhW2RvbWFpbl07XG4gICAgICBjb25zdCBpID0gW3N0eSwgZGVmLCBtaWRdLnJlZHVjZSgoYWNjLCB2KSA9PiAodi5sZW5ndGggPiBhY2MgPyB2Lmxlbmd0aCA6IGFjYyksIDApO1xuICAgICAgY29uc3Qgcm93cyA9IFsuLi5BcnJheShpKV0ubWFwKCh2LCBpKSA9PiBjcmVhdGVEYXRhKHN0eVtpXSB8fCAnJywgZGVmW2ldIHx8ICcnLCBtaWRbaV0gfHwgJycsIGkpKTtcblxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAncm93cycsIHJvd3MgfSk7XG5cbiAgICAgIGlmICghcm93cy5sZW5ndGgpIHtcbiAgICAgICAgbGV0IGsgPSBPYmplY3Qua2V5cyhkYXRhKS5maWx0ZXIodiA9PiB2ICE9PSAnZ2xvYmFsQ3NzJyk7XG4gICAgICAgIGxldCBpID0gay5pbmRleE9mKGRvbWFpbikgKyAxO1xuICAgICAgICBsZXQgbmV3ZG9tID0ga1tpXTtcblxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdkb21haW4nLCBkb21haW46IG5ld2RvbSB9KTtcblxuICAgICAgICBjb25zdCBvYmogPSB7IC4uLmRhdGEgfTtcbiAgICAgICAgZGVsZXRlIG9ialtkb21haW5dO1xuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdkYXRhJywgZGF0YTogb2JqIH0pO1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnJlbW92ZShkb21haW4pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnc2VsZWN0ZWQnLCBzZWxlY3RlZDogW10gfSk7XG4gICAgfTtcbiAgfSwgW2RhdGEsIGRvbWFpbl0pO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUsIGlkKSA9PiB7XG4gICAgc2VsZWN0ZWQuaW5jbHVkZXMoaWQpXG4gICAgICA/IGRpc3BhdGNoKHsgdHlwZTogJ3NlbGVjdGVkJywgc2VsZWN0ZWQ6IHNlbGVjdGVkLmZpbHRlcih2ID0+IHYgIT09IGlkKSB9KVxuICAgICAgOiBkaXNwYXRjaCh7IHR5cGU6ICdzZWxlY3RlZCcsIHNlbGVjdGVkOiBzZWxlY3RlZC5jb25jYXQoaWQpIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFRhYmxlQm9keT5cbiAgICAgIHtyb3dzLmxlbmd0aCA/IChcbiAgICAgICAgcm93cy5tYXAoKHJvdywgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VGFibGVSb3cgaG92ZXIgb25DbGljaz17ZSA9PiBoYW5kbGVDbGljayhlLCByb3cuaWQpfSBrZXk9e2l9IHNlbGVjdGVkPXtzZWxlY3RlZC5pbmNsdWRlcyhyb3cuaWQpfT5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBwYWRkaW5nPSdjaGVja2JveCc+XG4gICAgICAgICAgICAgICAgPENoZWNrYm94IGNoZWNrZWQ9e3NlbGVjdGVkLmluY2x1ZGVzKHJvdy5pZCl9IC8+XG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIHNjb3BlPSdyb3cnPlxuICAgICAgICAgICAgICAgIDxJbnB1dE1lIHJvdz17cm93fSBmaWVsZD0nc3R5JyAvPlxuICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj0nbGVmdCc+XG4gICAgICAgICAgICAgICAgPElucHV0TWUgcm93PXtyb3d9IGZpZWxkPSdkZWYnIC8+XG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPSdsZWZ0Jz5cbiAgICAgICAgICAgICAgICA8SW5wdXRNZSByb3c9e3Jvd30gZmllbGQ9J21pZCcgLz5cbiAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICApIDogKFxuICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgPFRhYmxlQ2VsbCBjb2xTcGFuPXs0fT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGFsaWduPSdjZW50ZXInIHZhcmlhbnQ9J3N1YnRpdGxlMicgY29sb3I9J3RleHRTZWNvbmRhcnknPlxuICAgICAgICAgICAgICDmsqHmnInmlbDmja5cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICl9XG4gICAgPC9UYWJsZUJvZHk+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNeVRhYmxlQm9keTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgRnJhZ21lbnQgYXMgZiwgY3JlYXRlRWxlbWVudCBhcyBlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnO1xuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcbmltcG9ydCBDaGVja2JveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaGVja2JveCc7XG5pbXBvcnQgVGFibGVTb3J0TGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVTb3J0TGFiZWwnO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4uL1N0b3JlJztcblxuY29uc3QgaGVhZFJvd3MgPSBbXG4gIHsgaWQ6ICdzdHknLCBsYWJlbDogJ+i/kOeUqOagt+W8jycgfSxcbiAgeyBpZDogJ2RlZicsIGxhYmVsOiAn5LiN6L+Q55So5qC35byPJyB9LFxuICB7IGlkOiAnbWlkJywgbGFiZWw6ICflvLrliLbnv7vor5EnIH1cbl07XG5cbmNvbnN0IEVuaGFuY2VkVGFibGVIZWFkID0gKCkgPT4ge1xuICBjb25zdCBbeyBzZWxlY3RlZCwgcm93cywgZGF0YSB9LCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xuXG4gIGNvbnN0IFtvcmRlciwgc2V0T3JkZXJdID0gdXNlU3RhdGUoJ2FzYycpO1xuICBjb25zdCBbb3JkZXJCeSwgc2V0T3JkZXJCeV0gPSB1c2VTdGF0ZSgnc3R5Jyk7XG4gIGNvbnN0IG51bVNlbGVjdGVkID0gc2VsZWN0ZWQubGVuZ3RoO1xuICBjb25zdCByb3dDb3VudCA9IHJvd3MubGVuZ3RoO1xuXG4gIGNvbnN0IGhhbmRsZVNlbGVjdEFsbENsaWNrID0gZXZlbnQgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgY29uc3QgbmV3U2VsZWN0ZWRzID0gcm93cy5tYXAocm93ID0+IHJvdy5pZCk7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdzZWxlY3RlZCcsIHNlbGVjdGVkOiBuZXdTZWxlY3RlZHMgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGRpc3BhdGNoKHsgdHlwZTogJ3NlbGVjdGVkJywgc2VsZWN0ZWQ6IFtdIH0pO1xuICB9O1xuXG4gIGNvbnN0IG9uUmVxdWVzdFNvcnQgPSAoZSwgcHJvcGVydHkpID0+IHtcbiAgICBjb25zdCBpc0Rlc2MgPSBvcmRlckJ5ID09PSBwcm9wZXJ0eSAmJiBvcmRlciA9PT0gJ2Rlc2MnO1xuICAgIHNldE9yZGVyKGlzRGVzYyA/ICdhc2MnIDogJ2Rlc2MnKTtcbiAgICBzZXRPcmRlckJ5KHByb3BlcnR5KTtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdyb3dzJywgcm93czogWy4uLnJvd3NdLnJldmVyc2UoKSB9KTtcbiAgfTtcbiAgY29uc3QgY3JlYXRlU29ydEhhbmRsZXIgPSBwcm9wZXJ0eSA9PiBlID0+IG9uUmVxdWVzdFNvcnQoZSwgcHJvcGVydHkpO1xuXG4gIHJldHVybiAoXG4gICAgPFRhYmxlSGVhZD5cbiAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgPFRhYmxlQ2VsbCBwYWRkaW5nPSdjaGVja2JveCc+XG4gICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICBpbmRldGVybWluYXRlPXtudW1TZWxlY3RlZCA+IDAgJiYgbnVtU2VsZWN0ZWQgPCByb3dDb3VudH1cbiAgICAgICAgICAgIGNoZWNrZWQ9eyEhcm93Q291bnQgJiYgbnVtU2VsZWN0ZWQgPT09IHJvd0NvdW50fVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlbGVjdEFsbENsaWNrfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvVGFibGVDZWxsPlxuXG4gICAgICAgIHtoZWFkUm93cy5tYXAoKHJvdywgaSkgPT4gKFxuICAgICAgICAgIDxUYWJsZUNlbGwga2V5PXtpfSBhbGlnbj0nbGVmdCcgc29ydERpcmVjdGlvbj17b3JkZXJCeSA9PT0gcm93LmlkID8gb3JkZXIgOiBmYWxzZX0+XG4gICAgICAgICAgICA8VGFibGVTb3J0TGFiZWwgYWN0aXZlPXtvcmRlckJ5ID09PSByb3cuaWR9IGRpcmVjdGlvbj17b3JkZXJ9IG9uQ2xpY2s9e2NyZWF0ZVNvcnRIYW5kbGVyKHJvdy5pZCl9PlxuICAgICAgICAgICAgICB7cm93LmxhYmVsfVxuICAgICAgICAgICAgPC9UYWJsZVNvcnRMYWJlbD5cbiAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgKSl9XG4gICAgICA8L1RhYmxlUm93PlxuICAgIDwvVGFibGVIZWFkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRW5oYW5jZWRUYWJsZUhlYWQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgYXMgZiwgY3JlYXRlRWxlbWVudCBhcyBlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBUb29sdGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXAnO1xuaW1wb3J0IEZhYiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9GYWInO1xuaW1wb3J0IEFkZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FkZCc7XG5pbXBvcnQgU3dpdGNoIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N3aXRjaCc7XG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlJztcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuLi9TdG9yZSc7XG5cbmNvbnN0IHVzZVRvb2xiYXJTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIGFic29sdXRlOiB7XG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgYm90dG9tOiB0aGVtZS5zcGFjaW5nKDEwKSxcbiAgICByaWdodDogdGhlbWUuc3BhY2luZyg1KSxcbiAgICB6SW5kZXg6IDIwXG4gIH0sXG4gIHNwYWNlcjoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMCxcbiAgICByaWdodDogMjAsXG4gICAgekluZGV4OiAyMFxuICB9XG59KSk7XG5cbmNvbnN0IEVuaGFuY2VkVGFibGVUb29sYmFyID0gcHJvcHMgPT4ge1xuICBjb25zdCBjID0gdXNlVG9vbGJhclN0eWxlcygpO1xuICBjb25zdCBbeyBzZWxlY3RlZCwgZGF0YSwgZG9tYWluLCByb3dzLCB0b2dnbGUgfSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChDb250ZXh0KTtcblxuICBjb25zdCBjcmVhdGVEYXRhID0gKHN0eSwgZGVmLCBtaWQsIGlkKSA9PiAoeyBzdHksIGRlZiwgbWlkLCBpZCB9KTtcblxuICBjb25zdCByZW1vdmUgPSBfID0+IHtcbiAgICBsZXQgcm93czIgPSByb3dzLmZpbHRlcih2ID0+ICFzZWxlY3RlZC5pbmNsdWRlcyh2LmlkKSk7XG5cbiAgICBsZXQgb2JqMiA9IFsnc3R5JywgJ2RlZicsICdtaWQnXS5yZWR1Y2UoKG9iaiwgdikgPT4ge1xuICAgICAgcmV0dXJuIHsgLi4ub2JqLCBbdl06IHJvd3MyLnJlZHVjZSgoYWNjLCB2MikgPT4gKHYyW3ZdID8gYWNjLmNvbmNhdCh2Mlt2XSkgOiBhY2MpLCBbXSkgfTtcbiAgICB9LCB7fSk7XG4gICAgb2JqMiA9IHsgLi4uZGF0YVtkb21haW5dLCAuLi5vYmoyIH07XG4gICAgbGV0IG9iaiA9IHsgLi4uZGF0YSwgW2RvbWFpbl06IG9iajIgfTtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdkYXRhJywgZGF0YTogb2JqIH0pO1xuICB9O1xuXG4gIGNvbnN0IGFkZCA9IF8gPT4ge1xuICAgIGlmIChyb3dzLmV2ZXJ5KHYgPT4gdi5zdHkgfHwgdi5kZWYgfHwgdi5taWQpKSB7XG4gICAgICBjb25zdCByb3cgPSBjcmVhdGVEYXRhKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIERhdGUubm93KCkpO1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAncm93cycsIHJvd3M6IHJvd3MuY29uY2F0KHJvdykgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IEljb24gPSAodGl0bGUsIGNhbGxiYWNrLCBpY29uKSA9PiB7XG4gICAgcmV0dXJuIGUoVG9vbHRpcCwgeyB0aXRsZSB9LCBlKEZhYiwgeyBjb2xvcjogJ3ByaW1hcnknLCBjbGFzc05hbWU6IGMuYWJzb2x1dGUsIG9uQ2xpY2s6IGNhbGxiYWNrIH0sIGUoaWNvbikpKTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVIYW5kbGVyID0gXyA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAndG9nZ2xlJywgdG9nZ2xlOiAhdG9nZ2xlIH0pO1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ3NlbGVjdGVkJywgc2VsZWN0ZWQ6IFtdIH0pO1xuICB9O1xuXG4gIHJldHVybiBlKFxuICAgIGYsXG4gICAgbnVsbCxcbiAgICAhdG9nZ2xlICYmIChzZWxlY3RlZC5sZW5ndGggPT09IDAgPyBJY29uKCdBZGQnLCBhZGQsIEFkZEljb24pIDogSWNvbignRGVsZXRlJywgcmVtb3ZlLCBEZWxldGVJY29uKSksXG4gICAgZShTd2l0Y2gsIHtcbiAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICBjaGVja2VkOiB0b2dnbGUsXG4gICAgICBvbkNoYW5nZTogdG9nZ2xlSGFuZGxlcixcbiAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgY2xhc3NOYW1lOiBjLnNwYWNlclxuICAgIH0pXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFbmhhbmNlZFRhYmxlVG9vbGJhcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZWFyY2gnO1xuaW1wb3J0IElucHV0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0JztcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBmbGV4R3JvdzogMVxuICB9LFxuICBzZWFyY2g6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICB9LFxuICBzZWFyY2hJY29uOiB7XG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoMy41KSxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xuICB9LFxuICBpbnB1dFJvb3Q6IHtcbiAgICBjb2xvcjogJ2luaGVyaXQnXG4gIH0sXG4gIGlucHV0SW5wdXQ6IHtcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEsIDEsIDEsIDUpLFxuICAgIHdpZHRoOiAnMTAwJSdcbiAgfSxcbiAgaW5wdXQ6IHtcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSlcbiAgfVxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2hBcHBCYXIoeyBzZXRGaWx0ZXIgfSkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8VG9vbGJhciBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2h9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hJY29ufT5cbiAgICAgICAgICA8U2VhcmNoSWNvbiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgcGxhY2Vob2xkZXI9J1NlYXJjaOKApidcbiAgICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgICByb290OiBjbGFzc2VzLmlucHV0Um9vdCxcbiAgICAgICAgICAgIGlucHV0OiBjbGFzc2VzLmlucHV0SW5wdXRcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEZpbHRlcihlLnRhcmdldC52YWx1ZS50cmltKCkpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9Ub29sYmFyPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiwgRnJhZ21lbnQgYXMgZiwgY3JlYXRlRWxlbWVudCBhcyBlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IFRhYmxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlJztcblxuaW1wb3J0IE15VGFibGVIZWFkIGZyb20gJy4vTXlUYWJsZUhlYWQnO1xuaW1wb3J0IE15VGFibGVUb29sYmFyIGZyb20gJy4vTXlUYWJsZVRvb2xiYXInO1xuaW1wb3J0IE15VGFibGVCb2R5IGZyb20gJy4vTXlUYWJsZUJvZHknO1xuaW1wb3J0IENzcyBmcm9tICcuL0Nzcyc7XG5cbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuLi9TdG9yZSc7XG5cbmNvbnN0IHVzZVRvb2xiYXJTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIGFic29sdXRlOiB7XG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgYm90dG9tOiB0aGVtZS5zcGFjaW5nKDEwKSxcbiAgICByaWdodDogdGhlbWUuc3BhY2luZyg1KSxcbiAgICB6SW5kZXg6IDIwXG4gIH0sXG4gIHNwYWNlcjoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMCxcbiAgICByaWdodDogMjAsXG4gICAgekluZGV4OiAyMFxuICB9XG59KSk7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIHdpZHRoOiAnMTAwJSdcbiAgfSxcbiAgcGFwZXI6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygyKVxuICB9LFxuICB0YWJsZToge1xuICAgIG1pbldpZHRoOiA3NTBcbiAgfSxcbiAgdGFibGVXcmFwcGVyOiB7XG4gICAgb3ZlcmZsb3dYOiAnYXV0bydcbiAgfVxufSkpO1xuXG5jb25zdCBjcmVhdGVEYXRhID0gKHN0eSwgZGVmLCBtaWQsIGlkKSA9PiAoeyBzdHksIGRlZiwgbWlkLCBpZCB9KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRW5oYW5jZWRUYWJsZSgpIHtcbiAgY29uc3QgYyA9IHVzZVRvb2xiYXJTdHlsZXMoKTtcbiAgY29uc3QgW3sgdG9nZ2xlIH0sIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XG5cbiAgcmV0dXJuIGUoXG4gICAgUGFwZXIsXG4gICAgeyBjbGFzc05hbWU6IGMucGFwZXIgfSxcbiAgICBlKE15VGFibGVUb29sYmFyKSxcbiAgICAhdG9nZ2xlXG4gICAgICA/IGUoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgeyBjbGFzc05hbWU6IGMudGFibGVXcmFwcGVyIH0sXG4gICAgICAgICAgZShUYWJsZSwgeyBjbGFzc05hbWU6IGMudGFibGUsIHNpemU6ICdtZWRpdW0nIH0sIGUoTXlUYWJsZUhlYWQpLCBlKE15VGFibGVCb2R5KSlcbiAgICAgICAgKVxuICAgICAgOiBlKENzcylcbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QsIEZyYWdtZW50IGFzIGYsIGNyZWF0ZUVsZW1lbnQgYXMgZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFRhYmxlIGZyb20gJy4vY29tcG9uZW50cy9UYWJsZSc7XG5pbXBvcnQgRHJhd2VyIGZyb20gJy4vY29tcG9uZW50cy9EcmF3ZXInO1xuXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDMwMDtcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdmbGV4J1xuICB9LFxuICBhcHBCYXI6IHtcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcbiAgICBtYXJnaW5MZWZ0OiBkcmF3ZXJXaWR0aFxuICB9LFxuXG4gIGNvbnRlbnQ6IHtcbiAgICBmbGV4R3JvdzogMSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5kZWZhdWx0XG4gIH1cbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGVybWFuZW50RHJhd2VyTGVmdCgpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbY3VycmVudERhdGEsIHNldEN1cnJlbnREYXRhXSA9IHVzZVN0YXRlKHt9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPERyYXdlciAvPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgIDxUYWJsZSB7Li4uY3VycmVudERhdGF9IC8+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgT3B0aW9ucyBmcm9tICcuL2NvbXBvbmVudHMvT3B0aW9ucyc7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xuaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IGJsdWUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL2JsdWUnO1xuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIHByaW1hcnk6IGJsdWVcbiAgfVxufSk7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICA8T3B0aW9ucyAvPlxuICA8L1RoZW1lUHJvdmlkZXI+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9