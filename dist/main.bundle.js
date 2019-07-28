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
    console.log('obj2', obj2);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9jb21wb25lbnRzL0Nzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9jb21wb25lbnRzL0RyYXdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9jb21wb25lbnRzL015SW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3B0aW9uc1BhZ2UvY29tcG9uZW50cy9NeVRhYmxlQm9keS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9jb21wb25lbnRzL015VGFibGVIZWFkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL09wdGlvbnNQYWdlL2NvbXBvbmVudHMvTXlUYWJsZVRvb2xiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3B0aW9uc1BhZ2UvY29tcG9uZW50cy9TZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3B0aW9uc1BhZ2UvY29tcG9uZW50cy9UYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsidGhlbWUiLCJjcmVhdGVNdWlUaGVtZSIsInBhbGV0dGUiLCJwcmltYXJ5IiwiYmx1ZSIsInNlY29uZGFyeSIsImUiLCJUaGVtZVByb3ZpZGVyIiwiQ3NzQmFzZWxpbmUiLCJTdG9yZSIsIk9wdGlvbnMiLCJDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImRhdGEiLCJyb3dzIiwic2VsZWN0ZWQiLCJkb21haW4iLCJlcnJvciIsInRvZ2dsZSIsImRlYm91bmNlIiwiXyIsInRpbWUiLCJjYWxsYmFjayIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJwcm9wcyIsInVzZVJlZHVjZXIiLCJkaXNwYXRjaCIsInVzZUVmZmVjdCIsImNocm9tZSIsInN0b3JhZ2UiLCJzeW5jIiwiZ2V0IiwiZmlyc3QiLCJPYmplY3QiLCJrZXlzIiwiY29uc29sZSIsImxvZyIsInJ1bnRpbWUiLCJvbk1lc3NhZ2UiLCJhZGRMaXN0ZW5lciIsInJlcXVlc3QiLCJzZW5kZXIiLCJVUkwiLCJ1cmwiLCJob3N0bmFtZSIsImluY2x1ZGVzIiwic2V0IiwiTSIsInVzZU1lbW8iLCJQcm92aWRlciIsInZhbHVlIiwiY2hpbGRyZW4iLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiY29udGFpbmVyIiwiZGlzcGxheSIsImZsZXhXcmFwIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJ0ZXh0RmllbGQiLCJzcGFjaW5nIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwibGFzdCIsIm1hcmdpbkJvdHRvbSIsIk91dGxpbmVkVGV4dEZpZWxkcyIsImMiLCJ1c2VDb250ZXh0Iiwic2V0TG9jYWxDc3MiLCJjc3MiLCJ0YXJnZXQiLCJuZXdDc3MiLCJuZXdkYXRhIiwic2V0R2xvYmFsQ3NzIiwiYSIsImdsb2JhbENzcyIsIkNzcyIsInNocmluayIsImRyYXdlcldpZHRoIiwiZHJhd2VyIiwid2lkdGgiLCJmbGV4U2hyaW5rIiwib3ZlcmZsb3ciLCJkcmF3ZXJQYXBlciIsInRvb2xiYXIiLCJtaXhpbnMiLCJib3giLCJiYWNrZ3JvdW5kIiwiYm94U2l6aW5nIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJ0cmFuc2l0aW9uIiwic2hhZG93IiwiYm94U2hhZG93IiwidHh0IiwicGFkZGluZ0xlZnQiLCJyZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInNldEZpbHRlciIsInNjcm9sbCIsInNjcm9sbFRvcCIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJTZWFyY2hCb3giLCJjbGFzc05hbWUiLCJTZWFyY2giLCJEaXZpZGVyIiwicmVuZGVybGlzdCIsImZpbHRlciIsInYiLCJtYXAiLCJpIiwiTGlzdEl0ZW0iLCJidXR0b24iLCJrZXkiLCJvbkNsaWNrIiwiTGlzdEl0ZW1UZXh0IiwibGlzdEJveCIsIkxpc3QiLCJkcmF3ZXJPcHRpb24iLCJ2YXJpYW50IiwiY2xhc3NlcyIsInBhcGVyIiwiYW5jaG9yIiwib25TY3JvbGwiLCJEcmF3ZXIiLCJyb290IiwiYm9yZGVyQm90dG9tQ29sb3IiLCJJbnB1dE1lIiwicm93IiwiZmllbGQiLCJFcnJvciIsInNldEVycm9yIiwiVHh0Iiwic2V0VHh0IiwiZm4iLCJTZXQiLCJyZWR1Y2UiLCJhY2MiLCJ2MiIsImlzTmFOIiwicGFyc2VGbG9hdCIsImNvbmNhdCIsIlN1Ym1pdCIsIm9iajIiLCJvYmoiLCJlZGl0IiwidmFsIiwibmV3Um93IiwibmV3Um93cyIsInVuZGVmaW5lZCIsInN0b3BQcm9wYWdhdGlvbiIsIk15SW5wdXQiLCJNeVRhYmxlQm9keSIsImNyZWF0ZURhdGEiLCJzdHkiLCJkZWYiLCJtaWQiLCJpZCIsImsiLCJsZW5ndGgiLCJBcnJheSIsImluZGV4T2YiLCJuZXdkb20iLCJoYW5kbGVDbGljayIsImhlYWRSb3dzIiwibGFiZWwiLCJFbmhhbmNlZFRhYmxlSGVhZCIsIm9yZGVyIiwic2V0T3JkZXIiLCJvcmRlckJ5Iiwic2V0T3JkZXJCeSIsIm51bVNlbGVjdGVkIiwicm93Q291bnQiLCJoYW5kbGVTZWxlY3RBbGxDbGljayIsImV2ZW50IiwiY2hlY2tlZCIsIm5ld1NlbGVjdGVkcyIsIm9uUmVxdWVzdFNvcnQiLCJwcm9wZXJ0eSIsImlzRGVzYyIsInJldmVyc2UiLCJjcmVhdGVTb3J0SGFuZGxlciIsInVzZVRvb2xiYXJTdHlsZXMiLCJhYnNvbHV0ZSIsImJvdHRvbSIsInJpZ2h0Iiwic3BhY2VyIiwidG9wIiwiRW5oYW5jZWRUYWJsZVRvb2xiYXIiLCJyb3dzMiIsImV2ZXJ5IiwiRGF0ZSIsIm5vdyIsIkljb24iLCJ0aXRsZSIsImljb24iLCJUb29sdGlwIiwiRmFiIiwiY29sb3IiLCJ0b2dnbGVIYW5kbGVyIiwiZiIsIkFkZEljb24iLCJEZWxldGVJY29uIiwiU3dpdGNoIiwib25DaGFuZ2UiLCJmbGV4R3JvdyIsInNlYXJjaCIsInNlYXJjaEljb24iLCJoZWlnaHQiLCJwb2ludGVyRXZlbnRzIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaW5wdXRSb290IiwiaW5wdXRJbnB1dCIsInBhZGRpbmciLCJpbnB1dCIsIlNlYXJjaEFwcEJhciIsInRyaW0iLCJ0YWJsZSIsIm1pbldpZHRoIiwidGFibGVXcmFwcGVyIiwib3ZlcmZsb3dYIiwiRW5oYW5jZWRUYWJsZSIsIlBhcGVyIiwiTXlUYWJsZVRvb2xiYXIiLCJUYWJsZSIsInNpemUiLCJNeVRhYmxlSGVhZCIsImFwcEJhciIsIm1hcmdpbkxlZnQiLCJjb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwiUGVybWFuZW50RHJhd2VyTGVmdCIsImN1cnJlbnREYXRhIiwic2V0Q3VycmVudERhdGEiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBZ0IsdUJBQXVCO0FBQ3ZDOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHQywrRUFBYyxDQUFDO0FBQzNCQyxTQUFPLEVBQUU7QUFDUEMsV0FBTyxFQUFFQyxvRUFERjtBQUVQQyxhQUFTLEVBQUVELG9FQUFJQTtBQUZSO0FBRGtCLENBQUQsQ0FBNUI7QUFPZTtBQUFBLFNBQU1FLDJEQUFDLENBQUNDLGlFQUFELEVBQWdCO0FBQUVQLFNBQUssRUFBTEE7QUFBRixHQUFoQixFQUEyQk0sMkRBQUMsQ0FBQ0UscUVBQUQsQ0FBNUIsRUFBMkNGLDJEQUFDLENBQUNHLDBEQUFELEVBQVEsSUFBUixFQUFjSCwyREFBQyxDQUFDSSwwREFBRCxDQUFmLENBQTVDLENBQVA7QUFBQSxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUVPLElBQU1DLE9BQU8sR0FBR0MsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixJQUFwQixDQUFoQjs7QUFFUCxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDakMsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBSyxNQUFMO0FBQ0UsK0JBQVlGLEtBQVo7QUFBbUJHLFlBQUksRUFBRUYsTUFBTSxDQUFDRTtBQUFoQzs7QUFDRixTQUFLLE1BQUw7QUFDRSwrQkFBWUgsS0FBWjtBQUFtQkksWUFBSSxFQUFFSCxNQUFNLENBQUNHO0FBQWhDOztBQUNGLFNBQUssVUFBTDtBQUNFLCtCQUFZSixLQUFaO0FBQW1CSyxnQkFBUSxFQUFFSixNQUFNLENBQUNJO0FBQXBDOztBQUNGLFNBQUssUUFBTDtBQUNFLCtCQUFZTCxLQUFaO0FBQW1CTSxjQUFNLEVBQUVMLE1BQU0sQ0FBQ0s7QUFBbEM7O0FBQ0YsU0FBSyxPQUFMO0FBQ0UsK0JBQVlOLEtBQVo7QUFBbUJPLGFBQUssRUFBRU4sTUFBTSxDQUFDTTtBQUFqQzs7QUFDRixTQUFLLFFBQUw7QUFDRSwrQkFBWVAsS0FBWjtBQUFtQlEsY0FBTSxFQUFFUCxNQUFNLENBQUNPO0FBQWxDOztBQUNGO0FBQ0UsYUFBT1IsS0FBUDtBQWRKO0FBZ0JELENBakJEOztBQW1CQSxJQUFNUyxRQUFRLEdBQUksVUFBQUMsQ0FBQyxFQUFJO0FBQ3JCLE1BQUlDLElBQUksR0FBRyxJQUFYO0FBQ0EsU0FBTyxVQUFBQyxRQUFRLEVBQUk7QUFDakJDLGdCQUFZLENBQUNGLElBQUQsQ0FBWjtBQUNBQSxRQUFJLEdBQUdHLFVBQVUsQ0FBQyxZQUFNO0FBQ3RCRixjQUFRO0FBQ1QsS0FGZ0IsRUFFZCxHQUZjLENBQWpCO0FBR0QsR0FMRDtBQU1ELENBUmdCLEVBQWpCOztBQVVBLElBQU1sQixLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFBcUIsS0FBSyxFQUFJO0FBQUEsb0JBQ0tDLHdEQUFVLENBQUNqQixPQUFELEVBQVU7QUFDNUNJLFFBQUksRUFBRSxFQURzQztBQUU1Q0MsUUFBSSxFQUFFLEVBRnNDO0FBRzVDQyxZQUFRLEVBQUUsRUFIa0M7QUFJNUNDLFVBQU0sRUFBRSxFQUpvQztBQUs1Q0MsU0FBSyxFQUFFLEtBTHFDO0FBTTVDQyxVQUFNLEVBQUU7QUFOb0MsR0FBVixDQURmO0FBQUE7QUFBQSxNQUNkUixLQURjO0FBQUEsTUFDUGlCLFFBRE87O0FBVXJCQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsVUFBTSxDQUFDQyxPQUFQLENBQWVDLElBQWYsQ0FBb0JDLEdBQXBCLENBQXdCLElBQXhCLEVBQThCLFVBQUFuQixJQUFJLEVBQUk7QUFDcENjLGNBQVEsQ0FBQztBQUFFZixZQUFJLEVBQUUsTUFBUjtBQUFnQkMsWUFBSSxFQUFKQTtBQUFoQixPQUFELENBQVI7QUFDQSxVQUFJb0IsS0FBSyxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWXRCLElBQVosRUFBa0IsQ0FBbEIsQ0FBWjtBQUNBYyxjQUFRLENBQUM7QUFBRWYsWUFBSSxFQUFFLFFBQVI7QUFBa0JJLGNBQU0sRUFBRWlCLEtBQUssS0FBSyxXQUFWLEdBQXdCLEVBQXhCLEdBQTZCQTtBQUF2RCxPQUFELENBQVI7QUFDQUcsYUFBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQnhCLElBQXBCO0FBQ0QsS0FMRDtBQU9BZ0IsVUFBTSxDQUFDUyxPQUFQLENBQWVDLFNBQWYsQ0FBeUJDLFdBQXpCLENBQXFDLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN4RGIsWUFBTSxDQUFDQyxPQUFQLENBQWVDLElBQWYsQ0FBb0JDLEdBQXBCLENBQXdCLElBQXhCLEVBQThCLFVBQUFuQixJQUFJLEVBQUk7QUFDcEMsWUFBSTRCLE9BQU8sS0FBSyxLQUFoQixFQUF1QjtBQUNyQmQsa0JBQVEsQ0FBQztBQUFFZixnQkFBSSxFQUFFLE1BQVI7QUFBZ0JDLGdCQUFJLEVBQUpBO0FBQWhCLFdBQUQsQ0FBUjtBQUNELFNBRkQsTUFFTyxJQUFJNEIsT0FBTyxLQUFLLFNBQWhCLEVBQTJCO0FBQ2hDLGNBQU16QixNQUFNLEdBQUcsSUFBSTJCLEdBQUosQ0FBUUQsTUFBTSxDQUFDRSxHQUFmLEVBQW9CQyxRQUFuQzs7QUFFQSxjQUFJWCxNQUFNLENBQUNDLElBQVAsQ0FBWXRCLElBQVosRUFBa0JpQyxRQUFsQixDQUEyQjlCLE1BQTNCLENBQUosRUFBd0M7QUFDdENXLG9CQUFRLENBQUM7QUFBRWYsa0JBQUksRUFBRSxRQUFSO0FBQWtCSSxvQkFBTSxFQUFOQTtBQUFsQixhQUFELENBQVI7QUFDRDtBQUNGO0FBQ0YsT0FWRDtBQVdELEtBWkQ7QUFhRCxHQXJCUSxFQXFCTixFQXJCTSxDQUFUO0FBdUJBWSx5REFBUyxDQUFDLFlBQU07QUFDZFQsWUFBUSxDQUFDLFlBQU07QUFDYlUsWUFBTSxDQUFDQyxPQUFQLENBQWVDLElBQWYsQ0FBb0JnQixHQUFwQixDQUF3QnJDLEtBQUssQ0FBQ0csSUFBOUI7QUFDRCxLQUZPLENBQVI7QUFHRCxHQUpRLEVBSU4sQ0FBQ0gsS0FBRCxDQUpNLENBQVQ7QUFNQSxNQUFNc0MsQ0FBQyxHQUFHQyxxREFBTyxDQUFDLFVBQUE3QixDQUFDO0FBQUEsV0FBSW5CLDJEQUFDLENBQUNLLE9BQU8sQ0FBQzRDLFFBQVQsRUFBbUI7QUFBRUMsV0FBSyxFQUFFLENBQUN6QyxLQUFELEVBQVFpQixRQUFSO0FBQVQsS0FBbkIsRUFBaURGLEtBQUssQ0FBQzJCLFFBQXZELENBQUw7QUFBQSxHQUFGLEVBQXlFLENBQUMxQyxLQUFELENBQXpFLENBQWpCO0FBQ0EsU0FBT3NDLENBQVA7QUFDRCxDQXpDRDs7QUEyQ2U1QyxvRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNaUQsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUEzRCxLQUFLO0FBQUEsU0FBSztBQUNyQzRELGFBQVMsRUFBRTtBQUNUQyxhQUFPLEVBQUUsTUFEQTtBQUVUQyxjQUFRLEVBQUUsTUFGRDtBQUdUQyxjQUFRLEVBQUUsR0FIRDtBQUlUQyxZQUFNLEVBQUU7QUFKQyxLQUQwQjtBQU9yQ0MsYUFBUyxFQUFFO0FBQ1RELFlBQU0sRUFBRWhFLEtBQUssQ0FBQ2tFLE9BQU4sQ0FBYyxDQUFkLEVBQWlCLENBQWpCLENBREM7QUFFVCxvQkFBYztBQUNaQyxrQkFBVSxFQUFFLG1CQURBO0FBRVpDLGdCQUFRLEVBQUU7QUFGRTtBQUZMLEtBUDBCO0FBY3JDQyxRQUFJLEVBQUU7QUFDSkMsa0JBQVksRUFBRXRFLEtBQUssQ0FBQ2tFLE9BQU4sQ0FBYyxDQUFkO0FBRFY7QUFkK0IsR0FBTDtBQUFBLENBQU4sQ0FBNUI7QUFtQmUsU0FBU0ssa0JBQVQsR0FBOEI7QUFDM0MsTUFBTUMsQ0FBQyxHQUFHZCxTQUFTLEVBQW5COztBQUQyQyxvQkFFTmUsd0RBQVUsQ0FBQzlELDhDQUFELENBRko7QUFBQTtBQUFBO0FBQUEsTUFFbENPLElBRmtDLGlCQUVsQ0EsSUFGa0M7QUFBQSxNQUU1QkcsTUFGNEIsaUJBRTVCQSxNQUY0QjtBQUFBLE1BRWxCVyxRQUZrQjs7QUFJM0MsTUFBTTBDLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFwRSxDQUFDLEVBQUk7QUFDdkIsUUFBSSxDQUFDZSxNQUFMLEVBQWE7QUFDWDtBQUNEOztBQUNELFFBQU1zRCxHQUFHLEdBQUdyRSxDQUFDLENBQUNzRSxNQUFGLENBQVNwQixLQUFyQjs7QUFDQSxRQUFNcUIsTUFBTSxxQkFBUTNELElBQUksQ0FBQ0csTUFBRCxDQUFaO0FBQXNCc0QsU0FBRyxFQUFIQTtBQUF0QixNQUFaOztBQUNBLFFBQUlHLE9BQU8scUJBQVE1RCxJQUFSLHNCQUFlRyxNQUFmLEVBQXdCd0QsTUFBeEIsRUFBWDs7QUFDQTdDLFlBQVEsQ0FBQztBQUFFZixVQUFJLEVBQUUsTUFBUjtBQUFnQkMsVUFBSSxFQUFFNEQ7QUFBdEIsS0FBRCxDQUFSO0FBQ0QsR0FSRDs7QUFVQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBekUsQ0FBQyxFQUFJO0FBQ3hCLFFBQU1xRSxHQUFHLEdBQUdyRSxDQUFDLENBQUNzRSxNQUFGLENBQVNwQixLQUFyQjs7QUFDQSxRQUFJd0IsQ0FBQyxxQkFBUTlELElBQVI7QUFBYytELGVBQVMsRUFBRU47QUFBekIsTUFBTDs7QUFDQTNDLFlBQVEsQ0FBQztBQUFFZixVQUFJLEVBQUUsTUFBUjtBQUFnQkMsVUFBSSxFQUFFOEQ7QUFBdEIsS0FBRCxDQUFSO0FBQ0QsR0FKRDs7QUFNQSxNQUFJRSxHQUFHLEdBQUcsRUFBVjs7QUFDQSxNQUFJaEUsSUFBSSxDQUFDRyxNQUFELENBQVIsRUFBa0I7QUFDaEI2RCxPQUFHLEdBQUdoRSxJQUFJLENBQUNHLE1BQUQsQ0FBSixDQUFhc0QsR0FBYixJQUFvQixFQUExQjtBQUNEOztBQUVELFNBQ0UsMkRBQUMsbUVBQUQ7QUFBVyxZQUFRLEVBQUM7QUFBcEIsS0FDRSwyREFBQyxtRUFBRDtBQUNFLFNBQUssRUFBRXRELE1BQU0sSUFBSSxLQURuQjtBQUVFLGFBQVMsTUFGWDtBQUdFLFFBQUksRUFBQyxHQUhQO0FBSUUsYUFBUyxFQUFFbUQsQ0FBQyxDQUFDUCxTQUpmO0FBS0UsVUFBTSxFQUFDLFFBTFQ7QUFNRSxXQUFPLEVBQUMsVUFOVjtBQU9FLGFBQVMsTUFQWDtBQVFFLFlBQVEsRUFBRVMsV0FSWjtBQVNFLE1BQUUsRUFBQyxNQVRMO0FBVUUsU0FBSyxFQUFFUSxHQVZUO0FBV0UsZUFBVyxFQUFDLHNDQVhkO0FBWUUsbUJBQWUsRUFBRTtBQUNmQyxZQUFNLEVBQUU7QUFETztBQVpuQixJQURGLEVBa0JFLDJEQUFDLG1FQUFEO0FBQ0UsU0FBSyxFQUFDLGNBRFI7QUFFRSxhQUFTLE1BRlg7QUFHRSxRQUFJLEVBQUMsR0FIUDtBQUlFLGFBQVMsWUFBS1gsQ0FBQyxDQUFDUCxTQUFQLGNBQW9CTyxDQUFDLENBQUNILElBQXRCLENBSlg7QUFLRSxVQUFNLEVBQUMsUUFMVDtBQU1FLFdBQU8sRUFBQyxVQU5WO0FBT0UsYUFBUyxNQVBYO0FBUUUsU0FBSyxFQUFFbkQsSUFBSSxDQUFDK0QsU0FSZDtBQVNFLFlBQVEsRUFBRUYsWUFUWjtBQVVFLE1BQUUsRUFBQyxNQVZMO0FBV0UsbUJBQWUsRUFBRTtBQUNmSSxZQUFNLEVBQUU7QUFETztBQVhuQixJQWxCRixDQURGO0FBb0NELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUMsV0FBVyxHQUFHLEdBQXBCO0FBQ0EsSUFBTTFCLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFBM0QsS0FBSztBQUFBLFNBQUs7QUFDckNxRixVQUFNLEVBQUU7QUFDTkMsV0FBSyxFQUFFRixXQUREO0FBRU5HLGdCQUFVLEVBQUUsQ0FGTjtBQUdOQyxjQUFRLEVBQUU7QUFISixLQUQ2QjtBQU1yQ0MsZUFBVyxFQUFFO0FBQ1hILFdBQUssRUFBRUY7QUFESSxLQU53QjtBQVNyQ00sV0FBTyxFQUFFMUYsS0FBSyxDQUFDMkYsTUFBTixDQUFhRCxPQVRlO0FBVXJDRSxPQUFHLEVBQUU7QUFDSEMsZ0JBQVUsRUFBRSxNQURUO0FBRUhDLGVBQVMsRUFBRSxZQUZSO0FBR0hDLGNBQVEsRUFBRSxPQUhQO0FBSUhDLFlBQU0sRUFBRSxFQUpMO0FBS0hWLFdBQUssRUFBRUYsV0FBVyxHQUFHLENBTGxCO0FBTUhhLGdCQUFVLEVBQUU7QUFOVCxLQVZnQztBQWtCckNDLFVBQU0sRUFBRTtBQUNOQyxlQUFTLEVBQUU7QUFETCxLQWxCNkI7QUFxQnJDQyxPQUFHLEVBQUU7QUFDSEMsaUJBQVcsRUFBRTtBQURWO0FBckJnQyxHQUFMO0FBQUEsQ0FBTixDQUE1QjtBQTBCZSx5RUFBQTVFLENBQUMsRUFBSTtBQUNsQixNQUFNK0MsQ0FBQyxHQUFHZCxTQUFTLEVBQW5CO0FBQ0EsTUFBTTRDLEdBQUcsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQWxCOztBQUZrQixrQkFHT0Msc0RBQVEsQ0FBQyxFQUFELENBSGY7QUFBQTtBQUFBLE1BR1hKLEdBSFc7QUFBQSxNQUdOSyxTQUhNOztBQUFBLG9CQUltQmhDLHdEQUFVLENBQUM5RCw4Q0FBRCxDQUo3QjtBQUFBO0FBQUE7QUFBQSxNQUlUTyxJQUpTLGlCQUlUQSxJQUpTO0FBQUEsTUFJSEcsTUFKRyxpQkFJSEEsTUFKRztBQUFBLE1BSU9XLFFBSlA7O0FBTWxCLE1BQU0wRSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFBcEcsQ0FBQyxFQUFJO0FBQ2xCQSxLQUFDLENBQUNzRSxNQUFGLENBQVMrQixTQUFULEdBQXFCLEVBQXJCLElBQTJCTCxHQUFHLENBQUNNLE9BQUosQ0FBWUMsU0FBWixDQUFzQkMsR0FBdEIsQ0FBMEJ0QyxDQUFDLENBQUMwQixNQUE1QixDQUEzQjtBQUNBNUYsS0FBQyxDQUFDc0UsTUFBRixDQUFTK0IsU0FBVCxHQUFxQixFQUFyQixJQUEyQkwsR0FBRyxDQUFDTSxPQUFKLENBQVlDLFNBQVosQ0FBc0JFLE1BQXRCLENBQTZCdkMsQ0FBQyxDQUFDMEIsTUFBL0IsQ0FBM0I7QUFDRCxHQUhEOztBQUtBLE1BQU1jLFNBQVMsR0FBRzFHLDJEQUFDLENBQUMsS0FBRCxFQUFRO0FBQUUyRyxhQUFTLEVBQUV6QyxDQUFDLENBQUNvQixHQUFmO0FBQW9CVSxPQUFHLEVBQUhBO0FBQXBCLEdBQVIsRUFBbUNoRywyREFBQyxDQUFDNEcsK0NBQUQsRUFBUztBQUFFVCxhQUFTLEVBQVRBO0FBQUYsR0FBVCxDQUFwQyxFQUE2RG5HLDJEQUFDLENBQUM2RyxpRUFBRCxDQUE5RCxDQUFuQjtBQUVBLE1BQU1DLFVBQVUsR0FBRzdFLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZdEIsSUFBWixFQUNoQm1HLE1BRGdCLENBQ1QsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsS0FBSyxXQUFWO0FBQUEsR0FEUSxFQUVoQkQsTUFGZ0IsQ0FFVCxVQUFBQyxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDbkUsUUFBRixDQUFXaUQsR0FBWCxDQUFKO0FBQUEsR0FGUSxFQUdoQm1CLEdBSGdCLENBR1osVUFBQ0QsQ0FBRCxFQUFJRSxDQUFKO0FBQUEsV0FDSGxILDJEQUFDLENBQ0NtSCxrRUFERCxFQUVDO0FBQUVDLFlBQU0sRUFBRSxJQUFWO0FBQWdCQyxTQUFHLEVBQUVILENBQXJCO0FBQXdCSSxhQUFPLEVBQUUsaUJBQUF0SCxDQUFDO0FBQUEsZUFBSTBCLFFBQVEsQ0FBQztBQUFFZixjQUFJLEVBQUUsUUFBUjtBQUFrQkksZ0JBQU0sRUFBRWlHO0FBQTFCLFNBQUQsQ0FBWjtBQUFBLE9BQWxDO0FBQStFbEcsY0FBUSxFQUFFQyxNQUFNLEtBQUtpRztBQUFwRyxLQUZELEVBR0NoSCwyREFBQyxDQUFDdUgsc0VBQUQsRUFBZTtBQUFFMUgsYUFBTyxFQUFFbUgsQ0FBWDtBQUFjTCxlQUFTLEVBQUV6QyxDQUFDLENBQUM0QjtBQUEzQixLQUFmLENBSEYsQ0FERTtBQUFBLEdBSFksQ0FBbkI7QUFXQSxNQUFNMEIsT0FBTyxHQUFHeEgsMkRBQUMsQ0FBQ3lILDhEQUFELEVBQU8sSUFBUCxFQUFhWCxVQUFiLENBQWpCO0FBRUEsTUFBTVksWUFBWSxHQUFHO0FBQ25CZixhQUFTLEVBQUV6QyxDQUFDLENBQUNhLE1BRE07QUFFbkI0QyxXQUFPLEVBQUUsV0FGVTtBQUduQkMsV0FBTyxFQUFFO0FBQUVDLFdBQUssRUFBRTNELENBQUMsQ0FBQ2lCO0FBQVgsS0FIVTtBQUluQjJDLFVBQU0sRUFBRSxNQUpXO0FBS25CQyxZQUFRLEVBQUUzQjtBQUxTLEdBQXJCO0FBUUEsU0FBT3BHLDJEQUFDLENBQUNnSSxnRUFBRCxFQUFTTixZQUFULEVBQXVCaEIsU0FBdkIsRUFBa0MxRywyREFBQyxDQUFDLEtBQUQsRUFBUTtBQUFFMkcsYUFBUyxFQUFFekMsQ0FBQyxDQUFDa0I7QUFBZixHQUFSLENBQW5DLEVBQXNFb0MsT0FBdEUsQ0FBUjtBQUNELENBbkNELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNcEUsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUEzRCxLQUFLO0FBQUEsU0FBSztBQUNyQ3VJLFFBQUksRUFBRTtBQUNKLHlCQUFtQjtBQUNqQkMseUJBQWlCLEVBQUU7QUFERjtBQURmO0FBRCtCLEdBQUw7QUFBQSxDQUFOLENBQTVCOztBQVFBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQW9CO0FBQUEsTUFBakJDLEdBQWlCLFFBQWpCQSxHQUFpQjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUNsQyxNQUFNbkUsQ0FBQyxHQUFHZCxTQUFTLEVBQW5COztBQURrQyxvQkFFZ0JlLHdEQUFVLENBQUM5RCw4Q0FBRCxDQUYxQjtBQUFBO0FBQUE7QUFBQSxNQUV6QlEsSUFGeUIsaUJBRXpCQSxJQUZ5QjtBQUFBLE1BRW5CRSxNQUZtQixpQkFFbkJBLE1BRm1CO0FBQUEsTUFFWEgsSUFGVyxpQkFFWEEsSUFGVztBQUFBLE1BRUxJLEtBRkssaUJBRUxBLEtBRks7QUFBQSxNQUVJVSxRQUZKOztBQUFBLGtCQUdSd0Usc0RBQVEsQ0FBQyxLQUFELENBSEE7QUFBQTtBQUFBLE1BRzNCb0MsS0FIMkI7QUFBQSxNQUdwQkMsUUFIb0I7O0FBQUEsbUJBSVpyQyxzREFBUSxDQUFDLEVBQUQsQ0FKSTtBQUFBO0FBQUEsTUFJM0JzQyxHQUoyQjtBQUFBLE1BSXRCQyxNQUpzQjs7QUFNbEM5Ryx5REFBUyxDQUFDLFlBQU07QUFDZDRHLFlBQVEsQ0FBQyxLQUFELENBQVI7QUFDQUUsVUFBTSxDQUFDLEVBQUQsQ0FBTjtBQUNELEdBSFEsRUFHTixDQUFDN0gsSUFBRCxDQUhNLENBQVQ7O0FBS0EsTUFBTThILEVBQUUsR0FBRyxTQUFMQSxFQUFLLENBQUExQixDQUFDLEVBQUk7QUFDZCw4QkFBVyxJQUFJMkIsR0FBSixDQUFROUgsSUFBSSxDQUFDK0gsTUFBTCxDQUFZLFVBQUNDLEdBQUQsRUFBTUMsRUFBTjtBQUFBLGFBQWNBLEVBQUUsQ0FBQzlCLENBQUQsQ0FBRixJQUFTK0IsS0FBSyxDQUFDQyxVQUFVLENBQUNGLEVBQUUsQ0FBQzlCLENBQUQsQ0FBSCxDQUFYLENBQWQsR0FBb0M2QixHQUFHLENBQUNJLE1BQUosQ0FBV0gsRUFBRSxDQUFDOUIsQ0FBRCxDQUFiLENBQXBDLEdBQXdENkIsR0FBdEU7QUFBQSxLQUFaLEVBQXdGLEVBQXhGLENBQVIsQ0FBWDtBQUNELEdBRkQ7O0FBSUEsTUFBTUssTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQWxKLENBQUMsRUFBSTtBQUNsQixRQUFJbUosSUFBSSxHQUFHLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCUCxNQUF0QixDQUE2QixVQUFDUSxHQUFELEVBQU1wQyxDQUFOLEVBQVk7QUFDbEQsK0JBQVlvQyxHQUFaLHNCQUFrQnBDLENBQWxCLEVBQXNCMEIsRUFBRSxDQUFDMUIsQ0FBRCxDQUF4QjtBQUNELEtBRlUsRUFFUixFQUZRLENBQVg7QUFHQW1DLFFBQUkscUJBQVF2SSxJQUFJLENBQUNHLE1BQUQsQ0FBWixNQUF5Qm9JLElBQXpCLENBQUo7QUFDQWhILFdBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0IrRyxJQUFwQjs7QUFFQSxRQUFJQyxHQUFHLHFCQUFReEksSUFBUixzQkFBZUcsTUFBZixFQUF3Qm9JLElBQXhCLEVBQVA7O0FBQ0F6SCxZQUFRLENBQUM7QUFBRWYsVUFBSSxFQUFFLE1BQVI7QUFBZ0JDLFVBQUksRUFBRXdJO0FBQXRCLEtBQUQsQ0FBUjtBQUNELEdBVEQ7O0FBV0EsTUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQXJKLENBQUMsRUFBSTtBQUNoQixRQUFJLENBQUNlLE1BQUwsRUFBYTtBQUNYO0FBQ0Q7O0FBQ0QsUUFBTXVJLEdBQUcsR0FBR3RKLENBQUMsQ0FBQ3NFLE1BQUYsQ0FBU3BCLEtBQXJCOztBQUNBLFFBQUksQ0FBQzZGLEtBQUssQ0FBQ0MsVUFBVSxDQUFDTSxHQUFELENBQVgsQ0FBVixFQUE2QjtBQUMzQmYsY0FBUSxDQUFDLElBQUQsQ0FBUjtBQUNBRSxZQUFNLENBQUMsVUFBRCxDQUFOO0FBQ0QsS0FIRCxNQUdPLElBQUk1SCxJQUFJLENBQUNvRyxHQUFMLENBQVMsVUFBQUQsQ0FBQztBQUFBLGFBQUlBLENBQUMsQ0FBQ3FCLEtBQUQsQ0FBTDtBQUFBLEtBQVYsRUFBd0J4RixRQUF4QixDQUFpQ3lHLEdBQWpDLEtBQXlDQSxHQUE3QyxFQUFrRDtBQUN2RGYsY0FBUSxDQUFDLElBQUQsQ0FBUjtBQUNBRSxZQUFNLENBQUMsT0FBRCxDQUFOO0FBQ0QsS0FITSxNQUdBO0FBQ0xGLGNBQVEsQ0FBQyxLQUFELENBQVI7QUFDQUUsWUFBTSxDQUFDLEVBQUQsQ0FBTjtBQUNEOztBQUVEL0csWUFBUSxDQUFDO0FBQUVmLFVBQUksRUFBRSxPQUFSO0FBQWlCSyxXQUFLLEVBQUVzSTtBQUF4QixLQUFELENBQVI7O0FBRUEsUUFBTUMsTUFBTSxxQkFBUW5CLEdBQVIsc0JBQWNDLEtBQWQsRUFBc0JpQixHQUF0QixFQUFaOztBQUNBLFFBQUlFLE9BQU8sR0FBRzNJLElBQUksQ0FBQ29HLEdBQUwsQ0FBUyxVQUFBRCxDQUFDO0FBQUEsYUFBS0EsQ0FBQyxLQUFLb0IsR0FBTixHQUFZbUIsTUFBWixHQUFxQnZDLENBQTFCO0FBQUEsS0FBVixDQUFkO0FBQ0F0RixZQUFRLENBQUM7QUFBRWYsVUFBSSxFQUFFLE1BQVI7QUFBZ0JFLFVBQUksRUFBRTJJO0FBQXRCLEtBQUQsQ0FBUjtBQUNELEdBckJEOztBQXVCQSxTQUNFLDJEQUFDLG1FQUFEO0FBQ0UsU0FBSyxFQUFFcEIsR0FBRyxDQUFDQyxLQUFELENBQUgsS0FBZW9CLFNBQWYsR0FBMkIsRUFBM0IsR0FBZ0NyQixHQUFHLENBQUNDLEtBQUQsQ0FENUM7QUFFRSxZQUFRLEVBQUVnQixJQUZaO0FBR0UsV0FBTyxFQUFFO0FBQUVwQixVQUFJLEVBQUUvRCxDQUFDLENBQUMrRDtBQUFWLEtBSFg7QUFJRSxXQUFPLEVBQUUsaUJBQUFqSSxDQUFDO0FBQUEsYUFBSUEsQ0FBQyxDQUFDMEosZUFBRixFQUFKO0FBQUEsS0FKWjtBQUtFLFVBQU0sRUFBRVIsTUFMVjtBQU1FLFNBQUssRUFBRVYsR0FOVDtBQU9FLFNBQUssRUFBRSxDQUFDLEVBQUV4SCxLQUFLLEtBQUtvSCxHQUFHLENBQUNDLEtBQUQsQ0FBYixJQUF3QnJILEtBQXhCLElBQWlDc0gsS0FBbkM7QUFQVixJQURGO0FBV0QsQ0E1REQ7O0FBOERBLElBQU1xQixPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFBbkksS0FBSyxFQUFJO0FBQ3ZCLFNBQU93QixxREFBTyxDQUFDLFlBQU07QUFDbkIsV0FBTywyREFBQyxPQUFELEVBQWF4QixLQUFiLENBQVA7QUFDRCxHQUZhLEVBRVgsQ0FBQ0EsS0FBSyxDQUFDNEcsR0FBUCxDQUZXLENBQWQ7QUFHRCxDQUpEOztBQU1ldUIsc0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFBekksQ0FBQyxFQUFJO0FBQUEsb0JBQzhCZ0Qsd0RBQVUsQ0FBQzlELDhDQUFELENBRHhDO0FBQUE7QUFBQTtBQUFBLE1BQ2RPLElBRGMsaUJBQ2RBLElBRGM7QUFBQSxNQUNSRSxRQURRLGlCQUNSQSxRQURRO0FBQUEsTUFDRUQsSUFERixpQkFDRUEsSUFERjtBQUFBLE1BQ1FFLE1BRFIsaUJBQ1FBLE1BRFI7QUFBQSxNQUNrQlcsUUFEbEI7O0FBRXZCLE1BQU1tSSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBV0MsR0FBWCxFQUFnQkMsRUFBaEI7QUFBQSxXQUF3QjtBQUFFSCxTQUFHLEVBQUhBLEdBQUY7QUFBT0MsU0FBRyxFQUFIQSxHQUFQO0FBQVlDLFNBQUcsRUFBSEEsR0FBWjtBQUFpQkMsUUFBRSxFQUFGQTtBQUFqQixLQUF4QjtBQUFBLEdBQW5COztBQUVBdEkseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSXVJLENBQUMsR0FBR2pJLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZdEIsSUFBWixFQUFrQm1HLE1BQWxCLENBQXlCLFVBQUFDLENBQUM7QUFBQSxhQUFJQSxDQUFDLEtBQUssV0FBVjtBQUFBLEtBQTFCLENBQVI7O0FBRUEsUUFBSWtELENBQUMsQ0FBQ0MsTUFBRixLQUFhLENBQWpCLEVBQW9CO0FBQ2xCekksY0FBUSxDQUFDO0FBQUVmLFlBQUksRUFBRSxRQUFSO0FBQWtCSSxjQUFNLFlBQUttSixDQUFMO0FBQXhCLE9BQUQsQ0FBUjtBQUNEOztBQUNELFFBQUl0SixJQUFJLENBQUNHLE1BQUQsQ0FBUixFQUFrQjtBQUFBLHlCQUNRSCxJQUFJLENBQUNHLE1BQUQsQ0FEWjtBQUFBLFVBQ1YrSSxHQURVLGdCQUNWQSxHQURVO0FBQUEsVUFDTEMsR0FESyxnQkFDTEEsR0FESztBQUFBLFVBQ0FDLEdBREEsZ0JBQ0FBLEdBREE7QUFFaEIsVUFBTTlDLENBQUMsR0FBRyxDQUFDNEMsR0FBRCxFQUFNQyxHQUFOLEVBQVdDLEdBQVgsRUFBZ0JwQixNQUFoQixDQUF1QixVQUFDQyxHQUFELEVBQU03QixDQUFOO0FBQUEsZUFBYUEsQ0FBQyxDQUFDbUQsTUFBRixHQUFXdEIsR0FBWCxHQUFpQjdCLENBQUMsQ0FBQ21ELE1BQW5CLEdBQTRCdEIsR0FBekM7QUFBQSxPQUF2QixFQUFzRSxDQUF0RSxDQUFWOztBQUNBLFVBQU1oSSxLQUFJLEdBQUcsbUJBQUl1SixLQUFLLENBQUNsRCxDQUFELENBQVQsRUFBY0QsR0FBZCxDQUFrQixVQUFDRCxDQUFELEVBQUlFLENBQUo7QUFBQSxlQUFVMkMsVUFBVSxDQUFDQyxHQUFHLENBQUM1QyxDQUFELENBQUgsSUFBVSxFQUFYLEVBQWU2QyxHQUFHLENBQUM3QyxDQUFELENBQUgsSUFBVSxFQUF6QixFQUE2QjhDLEdBQUcsQ0FBQzlDLENBQUQsQ0FBSCxJQUFVLEVBQXZDLEVBQTJDQSxDQUEzQyxDQUFwQjtBQUFBLE9BQWxCLENBQWI7O0FBRUF4RixjQUFRLENBQUM7QUFBRWYsWUFBSSxFQUFFLE1BQVI7QUFBZ0JFLFlBQUksRUFBSkE7QUFBaEIsT0FBRCxDQUFSOztBQUVBLFVBQUksQ0FBQ0EsS0FBSSxDQUFDc0osTUFBVixFQUFrQjtBQUNoQixZQUFJRCxFQUFDLEdBQUdqSSxNQUFNLENBQUNDLElBQVAsQ0FBWXRCLElBQVosRUFBa0JtRyxNQUFsQixDQUF5QixVQUFBQyxDQUFDO0FBQUEsaUJBQUlBLENBQUMsS0FBSyxXQUFWO0FBQUEsU0FBMUIsQ0FBUjs7QUFDQSxZQUFJRSxHQUFDLEdBQUdnRCxFQUFDLENBQUNHLE9BQUYsQ0FBVXRKLE1BQVYsSUFBb0IsQ0FBNUI7O0FBQ0EsWUFBSXVKLE1BQU0sR0FBR0osRUFBQyxDQUFDaEQsR0FBRCxDQUFkO0FBRUF4RixnQkFBUSxDQUFDO0FBQUVmLGNBQUksRUFBRSxRQUFSO0FBQWtCSSxnQkFBTSxFQUFFdUo7QUFBMUIsU0FBRCxDQUFSOztBQUVBLFlBQU1sQixHQUFHLHFCQUFReEksSUFBUixDQUFUOztBQUNBLGVBQU93SSxHQUFHLENBQUNySSxNQUFELENBQVY7QUFDQVcsZ0JBQVEsQ0FBQztBQUFFZixjQUFJLEVBQUUsTUFBUjtBQUFnQkMsY0FBSSxFQUFFd0k7QUFBdEIsU0FBRCxDQUFSO0FBQ0F4SCxjQUFNLENBQUNDLE9BQVAsQ0FBZUMsSUFBZixDQUFvQjJFLE1BQXBCLENBQTJCMUYsTUFBM0I7QUFDRDtBQUNGOztBQUNELFdBQU8sWUFBTTtBQUNYVyxjQUFRLENBQUM7QUFBRWYsWUFBSSxFQUFFLFVBQVI7QUFBb0JHLGdCQUFRLEVBQUU7QUFBOUIsT0FBRCxDQUFSO0FBQ0QsS0FGRDtBQUdELEdBN0JRLEVBNkJOLENBQUNGLElBQUQsRUFBT0csTUFBUCxDQTdCTSxDQUFUOztBQStCQSxNQUFNd0osV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ3ZLLENBQUQsRUFBSWlLLEVBQUosRUFBVztBQUM3Qm5KLFlBQVEsQ0FBQytCLFFBQVQsQ0FBa0JvSCxFQUFsQixJQUNJdkksUUFBUSxDQUFDO0FBQUVmLFVBQUksRUFBRSxVQUFSO0FBQW9CRyxjQUFRLEVBQUVBLFFBQVEsQ0FBQ2lHLE1BQVQsQ0FBZ0IsVUFBQUMsQ0FBQztBQUFBLGVBQUlBLENBQUMsS0FBS2lELEVBQVY7QUFBQSxPQUFqQjtBQUE5QixLQUFELENBRFosR0FFSXZJLFFBQVEsQ0FBQztBQUFFZixVQUFJLEVBQUUsVUFBUjtBQUFvQkcsY0FBUSxFQUFFQSxRQUFRLENBQUNtSSxNQUFULENBQWdCZ0IsRUFBaEI7QUFBOUIsS0FBRCxDQUZaO0FBR0QsR0FKRDs7QUFNQSxTQUNFLDJEQUFDLG1FQUFELFFBQ0dwSixJQUFJLENBQUNzSixNQUFMLEdBQ0N0SixJQUFJLENBQUNvRyxHQUFMLENBQVMsVUFBQ21CLEdBQUQsRUFBTWxCLENBQU4sRUFBWTtBQUNuQixXQUNFLDJEQUFDLGtFQUFEO0FBQVUsV0FBSyxNQUFmO0FBQWdCLGFBQU8sRUFBRSxpQkFBQWxILENBQUM7QUFBQSxlQUFJdUssV0FBVyxDQUFDdkssQ0FBRCxFQUFJb0ksR0FBRyxDQUFDNkIsRUFBUixDQUFmO0FBQUEsT0FBMUI7QUFBc0QsU0FBRyxFQUFFL0MsQ0FBM0Q7QUFBOEQsY0FBUSxFQUFFcEcsUUFBUSxDQUFDK0IsUUFBVCxDQUFrQnVGLEdBQUcsQ0FBQzZCLEVBQXRCO0FBQXhFLE9BQ0UsMkRBQUMsbUVBQUQ7QUFBVyxhQUFPLEVBQUM7QUFBbkIsT0FDRSwyREFBQyxrRUFBRDtBQUFVLGFBQU8sRUFBRW5KLFFBQVEsQ0FBQytCLFFBQVQsQ0FBa0J1RixHQUFHLENBQUM2QixFQUF0QjtBQUFuQixNQURGLENBREYsRUFJRSwyREFBQyxtRUFBRDtBQUFXLFdBQUssRUFBQztBQUFqQixPQUNFLDJEQUFDLGdEQUFEO0FBQVMsU0FBRyxFQUFFN0IsR0FBZDtBQUFtQixXQUFLLEVBQUM7QUFBekIsTUFERixDQUpGLEVBT0UsMkRBQUMsbUVBQUQ7QUFBVyxXQUFLLEVBQUM7QUFBakIsT0FDRSwyREFBQyxnREFBRDtBQUFTLFNBQUcsRUFBRUEsR0FBZDtBQUFtQixXQUFLLEVBQUM7QUFBekIsTUFERixDQVBGLEVBVUUsMkRBQUMsbUVBQUQ7QUFBVyxXQUFLLEVBQUM7QUFBakIsT0FDRSwyREFBQyxnREFBRDtBQUFTLFNBQUcsRUFBRUEsR0FBZDtBQUFtQixXQUFLLEVBQUM7QUFBekIsTUFERixDQVZGLENBREY7QUFnQkQsR0FqQkQsQ0FERCxHQW9CQywyREFBQyxrRUFBRCxRQUNFLDJEQUFDLG1FQUFEO0FBQVcsV0FBTyxFQUFFO0FBQXBCLEtBQ0UsMkRBQUMsb0VBQUQ7QUFBWSxTQUFLLEVBQUMsUUFBbEI7QUFBMkIsV0FBTyxFQUFDLFdBQW5DO0FBQStDLFNBQUssRUFBQztBQUFyRCxnQ0FERixDQURGLENBckJKLENBREY7QUFnQ0QsQ0F6RUQ7O0FBMkVld0IsMEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1ZLFFBQVEsR0FBRyxDQUNmO0FBQUVQLElBQUUsRUFBRSxLQUFOO0FBQWFRLE9BQUssRUFBRTtBQUFwQixDQURlLEVBRWY7QUFBRVIsSUFBRSxFQUFFLEtBQU47QUFBYVEsT0FBSyxFQUFFO0FBQXBCLENBRmUsRUFHZjtBQUFFUixJQUFFLEVBQUUsS0FBTjtBQUFhUSxPQUFLLEVBQUU7QUFBcEIsQ0FIZSxDQUFqQjs7QUFNQSxJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFBQSxvQkFDZXZHLHdEQUFVLENBQUM5RCw4Q0FBRCxDQUR6QjtBQUFBO0FBQUE7QUFBQSxNQUNyQlMsUUFEcUIsaUJBQ3JCQSxRQURxQjtBQUFBLE1BQ1hELElBRFcsaUJBQ1hBLElBRFc7QUFBQSxNQUNMRCxJQURLLGlCQUNMQSxJQURLO0FBQUEsTUFDR2MsUUFESDs7QUFBQSxrQkFHSndFLHNEQUFRLENBQUMsS0FBRCxDQUhKO0FBQUE7QUFBQSxNQUd2QnlFLEtBSHVCO0FBQUEsTUFHaEJDLFFBSGdCOztBQUFBLG1CQUlBMUUsc0RBQVEsQ0FBQyxLQUFELENBSlI7QUFBQTtBQUFBLE1BSXZCMkUsT0FKdUI7QUFBQSxNQUlkQyxVQUpjOztBQUs5QixNQUFNQyxXQUFXLEdBQUdqSyxRQUFRLENBQUNxSixNQUE3QjtBQUNBLE1BQU1hLFFBQVEsR0FBR25LLElBQUksQ0FBQ3NKLE1BQXRCOztBQUVBLE1BQU1jLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQUMsS0FBSyxFQUFJO0FBQ3BDLFFBQUlBLEtBQUssQ0FBQzVHLE1BQU4sQ0FBYTZHLE9BQWpCLEVBQTBCO0FBQ3hCLFVBQU1DLFlBQVksR0FBR3ZLLElBQUksQ0FBQ29HLEdBQUwsQ0FBUyxVQUFBbUIsR0FBRztBQUFBLGVBQUlBLEdBQUcsQ0FBQzZCLEVBQVI7QUFBQSxPQUFaLENBQXJCO0FBQ0F2SSxjQUFRLENBQUM7QUFBRWYsWUFBSSxFQUFFLFVBQVI7QUFBb0JHLGdCQUFRLEVBQUVzSztBQUE5QixPQUFELENBQVI7QUFDQTtBQUNEOztBQUNEMUosWUFBUSxDQUFDO0FBQUVmLFVBQUksRUFBRSxVQUFSO0FBQW9CRyxjQUFRLEVBQUU7QUFBOUIsS0FBRCxDQUFSO0FBQ0QsR0FQRDs7QUFTQSxNQUFNdUssYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDckwsQ0FBRCxFQUFJc0wsUUFBSixFQUFpQjtBQUNyQyxRQUFNQyxNQUFNLEdBQUdWLE9BQU8sS0FBS1MsUUFBWixJQUF3QlgsS0FBSyxLQUFLLE1BQWpEO0FBQ0FDLFlBQVEsQ0FBQ1csTUFBTSxHQUFHLEtBQUgsR0FBVyxNQUFsQixDQUFSO0FBQ0FULGNBQVUsQ0FBQ1EsUUFBRCxDQUFWO0FBQ0E1SixZQUFRLENBQUM7QUFBRWYsVUFBSSxFQUFFLE1BQVI7QUFBZ0JFLFVBQUksRUFBRSxtQkFBSUEsSUFBSixFQUFVMkssT0FBVjtBQUF0QixLQUFELENBQVI7QUFDRCxHQUxEOztBQU1BLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQUgsUUFBUTtBQUFBLFdBQUksVUFBQXRMLENBQUM7QUFBQSxhQUFJcUwsYUFBYSxDQUFDckwsQ0FBRCxFQUFJc0wsUUFBSixDQUFqQjtBQUFBLEtBQUw7QUFBQSxHQUFsQzs7QUFFQSxTQUNFLDJEQUFDLG1FQUFELFFBQ0UsMkRBQUMsa0VBQUQsUUFDRSwyREFBQyxtRUFBRDtBQUFXLFdBQU8sRUFBQztBQUFuQixLQUNFLDJEQUFDLGtFQUFEO0FBQ0UsaUJBQWEsRUFBRVAsV0FBVyxHQUFHLENBQWQsSUFBbUJBLFdBQVcsR0FBR0MsUUFEbEQ7QUFFRSxXQUFPLEVBQUUsQ0FBQyxDQUFDQSxRQUFGLElBQWNELFdBQVcsS0FBS0MsUUFGekM7QUFHRSxZQUFRLEVBQUVDO0FBSFosSUFERixDQURGLEVBU0dULFFBQVEsQ0FBQ3ZELEdBQVQsQ0FBYSxVQUFDbUIsR0FBRCxFQUFNbEIsQ0FBTjtBQUFBLFdBQ1osMkRBQUMsbUVBQUQ7QUFBVyxTQUFHLEVBQUVBLENBQWhCO0FBQW1CLFdBQUssRUFBQyxNQUF6QjtBQUFnQyxtQkFBYSxFQUFFMkQsT0FBTyxLQUFLekMsR0FBRyxDQUFDNkIsRUFBaEIsR0FBcUJVLEtBQXJCLEdBQTZCO0FBQTVFLE9BQ0UsMkRBQUMsd0VBQUQ7QUFBZ0IsWUFBTSxFQUFFRSxPQUFPLEtBQUt6QyxHQUFHLENBQUM2QixFQUF4QztBQUE0QyxlQUFTLEVBQUVVLEtBQXZEO0FBQThELGFBQU8sRUFBRWMsaUJBQWlCLENBQUNyRCxHQUFHLENBQUM2QixFQUFMO0FBQXhGLE9BQ0c3QixHQUFHLENBQUNxQyxLQURQLENBREYsQ0FEWTtBQUFBLEdBQWIsQ0FUSCxDQURGLENBREY7QUFxQkQsQ0E5Q0Q7O0FBZ0RlQyxnRkFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTWdCLGdCQUFnQixHQUFHckksMkVBQVUsQ0FBQyxVQUFBM0QsS0FBSztBQUFBLFNBQUs7QUFDNUNpTSxZQUFRLEVBQUU7QUFDUmxHLGNBQVEsRUFBRSxPQURGO0FBRVJtRyxZQUFNLEVBQUVsTSxLQUFLLENBQUNrRSxPQUFOLENBQWMsRUFBZCxDQUZBO0FBR1JpSSxXQUFLLEVBQUVuTSxLQUFLLENBQUNrRSxPQUFOLENBQWMsQ0FBZCxDQUhDO0FBSVI4QixZQUFNLEVBQUU7QUFKQSxLQURrQztBQU81Q29HLFVBQU0sRUFBRTtBQUNOckcsY0FBUSxFQUFFLFVBREo7QUFFTnNHLFNBQUcsRUFBRSxDQUZDO0FBR05GLFdBQUssRUFBRSxFQUhEO0FBSU5uRyxZQUFNLEVBQUU7QUFKRjtBQVBvQyxHQUFMO0FBQUEsQ0FBTixDQUFuQzs7QUFlQSxJQUFNc0csb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFBeEssS0FBSyxFQUFJO0FBQ3BDLE1BQU0wQyxDQUFDLEdBQUd3SCxnQkFBZ0IsRUFBMUI7O0FBRG9DLG9CQUV5QnZILHdEQUFVLENBQUM5RCw4Q0FBRCxDQUZuQztBQUFBO0FBQUE7QUFBQSxNQUUzQlMsUUFGMkIsaUJBRTNCQSxRQUYyQjtBQUFBLE1BRWpCRixJQUZpQixpQkFFakJBLElBRmlCO0FBQUEsTUFFWEcsTUFGVyxpQkFFWEEsTUFGVztBQUFBLE1BRUhGLElBRkcsaUJBRUhBLElBRkc7QUFBQSxNQUVHSSxNQUZILGlCQUVHQSxNQUZIO0FBQUEsTUFFYVMsUUFGYjs7QUFJcEMsTUFBTW1JLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFXQyxHQUFYLEVBQWdCQyxFQUFoQjtBQUFBLFdBQXdCO0FBQUVILFNBQUcsRUFBSEEsR0FBRjtBQUFPQyxTQUFHLEVBQUhBLEdBQVA7QUFBWUMsU0FBRyxFQUFIQSxHQUFaO0FBQWlCQyxRQUFFLEVBQUZBO0FBQWpCLEtBQXhCO0FBQUEsR0FBbkI7O0FBRUEsTUFBTXhELE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUF0RixDQUFDLEVBQUk7QUFDbEIsUUFBSThLLEtBQUssR0FBR3BMLElBQUksQ0FBQ2tHLE1BQUwsQ0FBWSxVQUFBQyxDQUFDO0FBQUEsYUFBSSxDQUFDbEcsUUFBUSxDQUFDK0IsUUFBVCxDQUFrQm1FLENBQUMsQ0FBQ2lELEVBQXBCLENBQUw7QUFBQSxLQUFiLENBQVo7QUFFQSxRQUFJZCxJQUFJLEdBQUcsQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsRUFBc0JQLE1BQXRCLENBQTZCLFVBQUNRLEdBQUQsRUFBTXBDLENBQU4sRUFBWTtBQUNsRCwrQkFBWW9DLEdBQVosc0JBQWtCcEMsQ0FBbEIsRUFBc0JpRixLQUFLLENBQUNyRCxNQUFOLENBQWEsVUFBQ0MsR0FBRCxFQUFNQyxFQUFOO0FBQUEsZUFBY0EsRUFBRSxDQUFDOUIsQ0FBRCxDQUFGLEdBQVE2QixHQUFHLENBQUNJLE1BQUosQ0FBV0gsRUFBRSxDQUFDOUIsQ0FBRCxDQUFiLENBQVIsR0FBNEI2QixHQUExQztBQUFBLE9BQWIsRUFBNkQsRUFBN0QsQ0FBdEI7QUFDRCxLQUZVLEVBRVIsRUFGUSxDQUFYO0FBR0FNLFFBQUkscUJBQVF2SSxJQUFJLENBQUNHLE1BQUQsQ0FBWixNQUF5Qm9JLElBQXpCLENBQUo7O0FBQ0EsUUFBSUMsR0FBRyxxQkFBUXhJLElBQVIsc0JBQWVHLE1BQWYsRUFBd0JvSSxJQUF4QixFQUFQOztBQUNBekgsWUFBUSxDQUFDO0FBQUVmLFVBQUksRUFBRSxNQUFSO0FBQWdCQyxVQUFJLEVBQUV3STtBQUF0QixLQUFELENBQVI7QUFDRCxHQVREOztBQVdBLE1BQU01QyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFBckYsQ0FBQyxFQUFJO0FBQ2YsUUFBSU4sSUFBSSxDQUFDcUwsS0FBTCxDQUFXLFVBQUFsRixDQUFDO0FBQUEsYUFBSUEsQ0FBQyxDQUFDOEMsR0FBRixJQUFTOUMsQ0FBQyxDQUFDK0MsR0FBWCxJQUFrQi9DLENBQUMsQ0FBQ2dELEdBQXhCO0FBQUEsS0FBWixDQUFKLEVBQThDO0FBQzVDLFVBQU01QixHQUFHLEdBQUd5QixVQUFVLENBQUNKLFNBQUQsRUFBWUEsU0FBWixFQUF1QkEsU0FBdkIsRUFBa0MwQyxJQUFJLENBQUNDLEdBQUwsRUFBbEMsQ0FBdEI7QUFDQTFLLGNBQVEsQ0FBQztBQUFFZixZQUFJLEVBQUUsTUFBUjtBQUFnQkUsWUFBSSxFQUFFQSxJQUFJLENBQUNvSSxNQUFMLENBQVliLEdBQVo7QUFBdEIsT0FBRCxDQUFSO0FBQ0Q7QUFDRixHQUxEOztBQU9BLE1BQU1pRSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVFqTCxRQUFSLEVBQWtCa0wsSUFBbEIsRUFBMkI7QUFDdEMsV0FBT3ZNLDJEQUFDLENBQUN3TSxpRUFBRCxFQUFVO0FBQUVGLFdBQUssRUFBTEE7QUFBRixLQUFWLEVBQXFCdE0sMkRBQUMsQ0FBQ3lNLDZEQUFELEVBQU07QUFBRUMsV0FBSyxFQUFFLFNBQVQ7QUFBb0IvRixlQUFTLEVBQUV6QyxDQUFDLENBQUN5SCxRQUFqQztBQUEyQ3JFLGFBQU8sRUFBRWpHO0FBQXBELEtBQU4sRUFBc0VyQiwyREFBQyxDQUFDdU0sSUFBRCxDQUF2RSxDQUF0QixDQUFSO0FBQ0QsR0FGRDs7QUFJQSxNQUFNSSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUF4TCxDQUFDLEVBQUk7QUFDekJPLFlBQVEsQ0FBQztBQUFFZixVQUFJLEVBQUUsUUFBUjtBQUFrQk0sWUFBTSxFQUFFLENBQUNBO0FBQTNCLEtBQUQsQ0FBUjtBQUNBUyxZQUFRLENBQUM7QUFBRWYsVUFBSSxFQUFFLFVBQVI7QUFBb0JHLGNBQVEsRUFBRTtBQUE5QixLQUFELENBQVI7QUFDRCxHQUhEOztBQUtBLFNBQU9kLDJEQUFDLENBQ040TSw4Q0FETSxFQUVOLElBRk0sRUFHTixDQUFDM0wsTUFBRCxLQUFZSCxRQUFRLENBQUNxSixNQUFULEtBQW9CLENBQXBCLEdBQXdCa0MsSUFBSSxDQUFDLEtBQUQsRUFBUTdGLEdBQVIsRUFBYXFHLDZEQUFiLENBQTVCLEdBQW9EUixJQUFJLENBQUMsUUFBRCxFQUFXNUYsTUFBWCxFQUFtQnFHLGdFQUFuQixDQUFwRSxDQUhNLEVBSU45TSwyREFBQyxDQUFDK00sZ0VBQUQsRUFBUztBQUNSTCxTQUFLLEVBQUUsU0FEQztBQUVSdkIsV0FBTyxFQUFFbEssTUFGRDtBQUdSK0wsWUFBUSxFQUFFTCxhQUhGO0FBSVJ6SixTQUFLLEVBQUUsSUFKQztBQUtSeUQsYUFBUyxFQUFFekMsQ0FBQyxDQUFDNEg7QUFMTCxHQUFULENBSkssQ0FBUjtBQVlELENBN0NEOztBQStDZUUsbUZBQWYsRTs7Ozs7Ozs7Ozs7O0FDdkVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNNUksU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUEzRCxLQUFLO0FBQUEsU0FBSztBQUNyQ3VJLFFBQUksRUFBRTtBQUNKZ0YsY0FBUSxFQUFFO0FBRE4sS0FEK0I7QUFJckNDLFVBQU0sRUFBRTtBQUNOekgsY0FBUSxFQUFFO0FBREosS0FKNkI7QUFPckMwSCxjQUFVLEVBQUU7QUFDVm5JLFdBQUssRUFBRXRGLEtBQUssQ0FBQ2tFLE9BQU4sQ0FBYyxHQUFkLENBREc7QUFFVndKLFlBQU0sRUFBRSxNQUZFO0FBR1YzSCxjQUFRLEVBQUUsVUFIQTtBQUlWNEgsbUJBQWEsRUFBRSxNQUpMO0FBS1Y5SixhQUFPLEVBQUUsTUFMQztBQU1WK0osZ0JBQVUsRUFBRSxRQU5GO0FBT1ZDLG9CQUFjLEVBQUU7QUFQTixLQVB5QjtBQWdCckNDLGFBQVMsRUFBRTtBQUNUZCxXQUFLLEVBQUU7QUFERSxLQWhCMEI7QUFtQnJDZSxjQUFVLEVBQUU7QUFDVkMsYUFBTyxFQUFFaE8sS0FBSyxDQUFDa0UsT0FBTixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FEQztBQUVWb0IsV0FBSyxFQUFFO0FBRkcsS0FuQnlCO0FBdUJyQzJJLFNBQUssRUFBRTtBQUNMakssWUFBTSxFQUFFaEUsS0FBSyxDQUFDa0UsT0FBTixDQUFjLENBQWQ7QUFESDtBQXZCOEIsR0FBTDtBQUFBLENBQU4sQ0FBNUI7QUE0QmUsU0FBU2dLLFlBQVQsT0FBcUM7QUFBQSxNQUFiekgsU0FBYSxRQUFiQSxTQUFhO0FBQ2xELE1BQU15QixPQUFPLEdBQUd4RSxTQUFTLEVBQXpCO0FBRUEsU0FDRSwyREFBQyxpRUFBRDtBQUFTLGFBQVMsRUFBRXdFLE9BQU8sQ0FBQ0s7QUFBNUIsS0FDRTtBQUFLLGFBQVMsRUFBRUwsT0FBTyxDQUFDc0Y7QUFBeEIsS0FDRTtBQUFLLGFBQVMsRUFBRXRGLE9BQU8sQ0FBQ3VGO0FBQXhCLEtBQ0UsMkRBQUMsZ0VBQUQsT0FERixDQURGLEVBSUUsMkRBQUMsK0RBQUQ7QUFDRSxlQUFXLEVBQUMsY0FEZDtBQUVFLFdBQU8sRUFBRTtBQUNQbEYsVUFBSSxFQUFFTCxPQUFPLENBQUM0RixTQURQO0FBRVBHLFdBQUssRUFBRS9GLE9BQU8sQ0FBQzZGO0FBRlIsS0FGWDtBQU1FLFlBQVEsRUFBRSxrQkFBQXpOLENBQUM7QUFBQSxhQUFJbUcsU0FBUyxDQUFDbkcsQ0FBQyxDQUFDc0UsTUFBRixDQUFTcEIsS0FBVCxDQUFlMkssSUFBZixFQUFELENBQWI7QUFBQTtBQU5iLElBSkYsQ0FERixDQURGO0FBaUJELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEREO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1uQyxnQkFBZ0IsR0FBR3JJLDJFQUFVLENBQUMsVUFBQTNELEtBQUs7QUFBQSxTQUFLO0FBQzVDaU0sWUFBUSxFQUFFO0FBQ1JsRyxjQUFRLEVBQUUsT0FERjtBQUVSbUcsWUFBTSxFQUFFbE0sS0FBSyxDQUFDa0UsT0FBTixDQUFjLEVBQWQsQ0FGQTtBQUdSaUksV0FBSyxFQUFFbk0sS0FBSyxDQUFDa0UsT0FBTixDQUFjLENBQWQsQ0FIQztBQUlSOEIsWUFBTSxFQUFFO0FBSkEsS0FEa0M7QUFPNUNvRyxVQUFNLEVBQUU7QUFDTnJHLGNBQVEsRUFBRSxVQURKO0FBRU5zRyxTQUFHLEVBQUUsQ0FGQztBQUdORixXQUFLLEVBQUUsRUFIRDtBQUlObkcsWUFBTSxFQUFFO0FBSkY7QUFQb0MsR0FBTDtBQUFBLENBQU4sQ0FBbkM7QUFlQSxJQUFNdEMsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUEzRCxLQUFLO0FBQUEsU0FBSztBQUNyQ3VJLFFBQUksRUFBRTtBQUNKakQsV0FBSyxFQUFFO0FBREgsS0FEK0I7QUFJckM2QyxTQUFLLEVBQUU7QUFDTDdDLFdBQUssRUFBRSxNQURGO0FBRUxoQixrQkFBWSxFQUFFdEUsS0FBSyxDQUFDa0UsT0FBTixDQUFjLENBQWQ7QUFGVCxLQUo4QjtBQVFyQ2tLLFNBQUssRUFBRTtBQUNMQyxjQUFRLEVBQUU7QUFETCxLQVI4QjtBQVdyQ0MsZ0JBQVksRUFBRTtBQUNaQyxlQUFTLEVBQUU7QUFEQztBQVh1QixHQUFMO0FBQUEsQ0FBTixDQUE1Qjs7QUFnQkEsSUFBTXBFLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFXQyxHQUFYLEVBQWdCQyxFQUFoQjtBQUFBLFNBQXdCO0FBQUVILE9BQUcsRUFBSEEsR0FBRjtBQUFPQyxPQUFHLEVBQUhBLEdBQVA7QUFBWUMsT0FBRyxFQUFIQSxHQUFaO0FBQWlCQyxNQUFFLEVBQUZBO0FBQWpCLEdBQXhCO0FBQUEsQ0FBbkI7O0FBRWUsU0FBU2lFLGFBQVQsR0FBeUI7QUFDdEMsTUFBTWhLLENBQUMsR0FBR3dILGdCQUFnQixFQUExQjs7QUFEc0Msb0JBRVB2SCx3REFBVSxDQUFDOUQsOENBQUQsQ0FGSDtBQUFBO0FBQUEsTUFFN0JZLE1BRjZCLG1CQUU3QkEsTUFGNkI7QUFBQSxNQUVuQlMsUUFGbUI7O0FBSXRDLFNBQU8xQiwyREFBQyxDQUNObU8sK0RBRE0sRUFFTjtBQUFFeEgsYUFBUyxFQUFFekMsQ0FBQyxDQUFDMkQ7QUFBZixHQUZNLEVBR043SCwyREFBQyxDQUFDb08sdURBQUQsQ0FISyxFQUlOLENBQUNuTixNQUFELEdBQ0lqQiwyREFBQyxDQUNDLEtBREQsRUFFQztBQUFFMkcsYUFBUyxFQUFFekMsQ0FBQyxDQUFDOEo7QUFBZixHQUZELEVBR0NoTywyREFBQyxDQUFDcU8sK0RBQUQsRUFBUTtBQUFFMUgsYUFBUyxFQUFFekMsQ0FBQyxDQUFDNEosS0FBZjtBQUFzQlEsUUFBSSxFQUFFO0FBQTVCLEdBQVIsRUFBZ0R0TywyREFBQyxDQUFDdU8sb0RBQUQsQ0FBakQsRUFBZ0V2TywyREFBQyxDQUFDNEosb0RBQUQsQ0FBakUsQ0FIRixDQURMLEdBTUk1SiwyREFBQyxDQUFDNEUsNENBQUQsQ0FWQyxDQUFSO0FBWUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0REO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUUsV0FBVyxHQUFHLEdBQXBCO0FBQ0EsSUFBTTFCLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFBM0QsS0FBSztBQUFBLFNBQUs7QUFDckN1SSxRQUFJLEVBQUU7QUFDSjFFLGFBQU8sRUFBRTtBQURMLEtBRCtCO0FBSXJDaUwsVUFBTSxFQUFFO0FBQ054SixXQUFLLHdCQUFpQkYsV0FBakIsUUFEQztBQUVOMkosZ0JBQVUsRUFBRTNKO0FBRk4sS0FKNkI7QUFTckM0SixXQUFPLEVBQUU7QUFDUHpCLGNBQVEsRUFBRSxDQURIO0FBRVAwQixxQkFBZSxFQUFFalAsS0FBSyxDQUFDRSxPQUFOLENBQWMyRixVQUFkO0FBRlY7QUFUNEIsR0FBTDtBQUFBLENBQU4sQ0FBNUI7QUFlZSxTQUFTcUosbUJBQVQsR0FBK0I7QUFDNUMsTUFBTWhILE9BQU8sR0FBR3hFLFNBQVMsRUFBekI7O0FBRDRDLGtCQUVOOEMsc0RBQVEsQ0FBQyxFQUFELENBRkY7QUFBQTtBQUFBLE1BRXJDMkksV0FGcUM7QUFBQSxNQUV4QkMsY0FGd0I7O0FBSTVDLFNBQ0U7QUFBSyxhQUFTLEVBQUVsSCxPQUFPLENBQUNLO0FBQXhCLEtBQ0UsMkRBQUMsMERBQUQsT0FERixFQUdFO0FBQU0sYUFBUyxFQUFFTCxPQUFPLENBQUM4RztBQUF6QixLQUNFLDJEQUFDLHlEQUFELEVBQVdHLFdBQVgsQ0FERixDQUhGLENBREY7QUFTRCxDOzs7Ozs7Ozs7Ozs7QUNsQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTW5QLEtBQUssR0FBR0MsK0VBQWMsQ0FBQztBQUMzQkMsU0FBTyxFQUFFO0FBQ1BDLFdBQU8sRUFBRUMsb0VBQUlBO0FBRE47QUFEa0IsQ0FBRCxDQUE1QjtBQU1BaVAsZ0RBQVEsQ0FBQ0MsTUFBVCxDQUNFLDJEQUFDLGlFQUFEO0FBQWUsT0FBSyxFQUFFdFA7QUFBdEIsR0FDRSwyREFBQyxxRUFBRCxPQURGLEVBRUUsMkRBQUMsMkRBQUQsT0FGRixDQURGLEVBS0V1UCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FMRixFIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9pbmRleC5qc1wiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IGFzIGYsIGNyZWF0ZUVsZW1lbnQgYXMgZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAndHlwZWZhY2Utcm9ib3RvJztcbmltcG9ydCBPcHRpb25zIGZyb20gJy4vT3B0aW9uc1BhZ2UvaW5kZXgnO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCB7IGNyZWF0ZU11aVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBibHVlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9ibHVlJztcbmltcG9ydCBTdG9yZSBmcm9tICcuL09wdGlvbnNQYWdlL1N0b3JlJztcblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBwcmltYXJ5OiBibHVlLFxuICAgIHNlY29uZGFyeTogYmx1ZVxuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gZShUaGVtZVByb3ZpZGVyLCB7IHRoZW1lIH0sIGUoQ3NzQmFzZWxpbmUpLCBlKFN0b3JlLCBudWxsLCBlKE9wdGlvbnMpKSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCBGcmFnbWVudCBhcyBmLCBjcmVhdGVFbGVtZW50IGFzIGUsIHVzZVJlZHVjZXIsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnZGF0YSc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZGF0YTogYWN0aW9uLmRhdGEgfTtcbiAgICBjYXNlICdyb3dzJzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCByb3dzOiBhY3Rpb24ucm93cyB9O1xuICAgIGNhc2UgJ3NlbGVjdGVkJzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBzZWxlY3RlZDogYWN0aW9uLnNlbGVjdGVkIH07XG4gICAgY2FzZSAnZG9tYWluJzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBkb21haW46IGFjdGlvbi5kb21haW4gfTtcbiAgICBjYXNlICdlcnJvcic6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZXJyb3I6IGFjdGlvbi5lcnJvciB9O1xuICAgIGNhc2UgJ3RvZ2dsZSc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdG9nZ2xlOiBhY3Rpb24udG9nZ2xlIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuY29uc3QgZGVib3VuY2UgPSAoXyA9PiB7XG4gIGxldCB0aW1lID0gbnVsbDtcbiAgcmV0dXJuIGNhbGxiYWNrID0+IHtcbiAgICBjbGVhclRpbWVvdXQodGltZSk7XG4gICAgdGltZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9LCAxMDApO1xuICB9O1xufSkoKTtcblxuY29uc3QgU3RvcmUgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCB7XG4gICAgZGF0YToge30sXG4gICAgcm93czogW10sXG4gICAgc2VsZWN0ZWQ6IFtdLFxuICAgIGRvbWFpbjogJycsXG4gICAgZXJyb3I6IGZhbHNlLFxuICAgIHRvZ2dsZTogZmFsc2VcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChudWxsLCBkYXRhID0+IHtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ2RhdGEnLCBkYXRhIH0pO1xuICAgICAgbGV0IGZpcnN0ID0gT2JqZWN0LmtleXMoZGF0YSlbMF07XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdkb21haW4nLCBkb21haW46IGZpcnN0ID09PSAnZ2xvYmFsQ3NzJyA/ICcnIDogZmlyc3QgfSk7XG4gICAgICBjb25zb2xlLmxvZygn6I635Y+W5pWw5o2uJywgZGF0YSk7XG4gICAgfSk7XG5cbiAgICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKHJlcXVlc3QsIHNlbmRlcikgPT4ge1xuICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQobnVsbCwgZGF0YSA9PiB7XG4gICAgICAgIGlmIChyZXF1ZXN0ID09PSAnc2VsJykge1xuICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ2RhdGEnLCBkYXRhIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHJlcXVlc3QgPT09ICdjdXJyZW50Jykge1xuICAgICAgICAgIGNvbnN0IGRvbWFpbiA9IG5ldyBVUkwoc2VuZGVyLnVybCkuaG9zdG5hbWU7XG5cbiAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoZGF0YSkuaW5jbHVkZXMoZG9tYWluKSkge1xuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnZG9tYWluJywgZG9tYWluIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRlYm91bmNlKCgpID0+IHtcbiAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHN0YXRlLmRhdGEpO1xuICAgIH0pO1xuICB9LCBbc3RhdGVdKTtcblxuICBjb25zdCBNID0gdXNlTWVtbyhfID0+IGUoQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZTogW3N0YXRlLCBkaXNwYXRjaF0gfSwgcHJvcHMuY2hpbGRyZW4pLCBbc3RhdGVdKTtcbiAgcmV0dXJuIE07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdG9yZTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnLi4vU3RvcmUnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIGNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgIG1heFdpZHRoOiA5NjAsXG4gICAgbWFyZ2luOiAnYXV0bydcbiAgfSxcbiAgdGV4dEZpZWxkOiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDQsIDEpLFxuICAgICcmIHRleHRhcmVhJzoge1xuICAgICAgZm9udEZhbWlseTogJ0ZpcmEgQ29kZSBSZWd1bGFyJyxcbiAgICAgIGZvbnRTaXplOiAnMTRweCdcbiAgICB9XG4gIH0sXG4gIGxhc3Q6IHtcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoOClcbiAgfVxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPdXRsaW5lZFRleHRGaWVsZHMoKSB7XG4gIGNvbnN0IGMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW3sgZGF0YSwgZG9tYWluIH0sIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XG5cbiAgY29uc3Qgc2V0TG9jYWxDc3MgPSBlID0+IHtcbiAgICBpZiAoIWRvbWFpbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjc3MgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBjb25zdCBuZXdDc3MgPSB7IC4uLmRhdGFbZG9tYWluXSwgY3NzIH07XG4gICAgbGV0IG5ld2RhdGEgPSB7IC4uLmRhdGEsIFtkb21haW5dOiBuZXdDc3MgfTtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdkYXRhJywgZGF0YTogbmV3ZGF0YSB9KTtcbiAgfTtcblxuICBjb25zdCBzZXRHbG9iYWxDc3MgPSBlID0+IHtcbiAgICBjb25zdCBjc3MgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBsZXQgYSA9IHsgLi4uZGF0YSwgZ2xvYmFsQ3NzOiBjc3MgfTtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdkYXRhJywgZGF0YTogYSB9KTtcbiAgfTtcblxuICBsZXQgQ3NzID0gJyc7XG4gIGlmIChkYXRhW2RvbWFpbl0pIHtcbiAgICBDc3MgPSBkYXRhW2RvbWFpbl0uY3NzIHx8ICcnO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIG1heFdpZHRoPSdtZCc+XG4gICAgICA8VGV4dEZpZWxkXG4gICAgICAgIGxhYmVsPXtkb21haW4gfHwgJ+acqumAieaLqSd9XG4gICAgICAgIG11bHRpbGluZVxuICAgICAgICByb3dzPSc4J1xuICAgICAgICBjbGFzc05hbWU9e2MudGV4dEZpZWxkfVxuICAgICAgICBtYXJnaW49J25vcm1hbCdcbiAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXG4gICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICBvbkNoYW5nZT17c2V0TG9jYWxDc3N9XG4gICAgICAgIGlkPSd0ZXh0J1xuICAgICAgICB2YWx1ZT17Q3NzfVxuICAgICAgICBwbGFjZWhvbGRlcj0n6buY6K6k6L+Q55So5YWo5bGAJ1xuICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICBzaHJpbms6IHRydWVcbiAgICAgICAgfX1cbiAgICAgIC8+XG5cbiAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgbGFiZWw9J+WFqOWxgCdcbiAgICAgICAgbXVsdGlsaW5lXG4gICAgICAgIHJvd3M9JzgnXG4gICAgICAgIGNsYXNzTmFtZT17YCR7Yy50ZXh0RmllbGR9ICR7Yy5sYXN0fWB9XG4gICAgICAgIG1hcmdpbj0nbm9ybWFsJ1xuICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcbiAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgIHZhbHVlPXtkYXRhLmdsb2JhbENzc31cbiAgICAgICAgb25DaGFuZ2U9e3NldEdsb2JhbENzc31cbiAgICAgICAgaWQ9J3RleHQnXG4gICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgIHNocmluazogdHJ1ZVxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QsIEZyYWdtZW50IGFzIGYsIGNyZWF0ZUVsZW1lbnQgYXMgZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IERyYXdlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EcmF3ZXInO1xuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vU2VhcmNoJztcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuLi9TdG9yZSc7XG5cbmNvbnN0IGRyYXdlcldpZHRoID0gMzAwO1xuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBkcmF3ZXI6IHtcbiAgICB3aWR0aDogZHJhd2VyV2lkdGgsXG4gICAgZmxleFNocmluazogMCxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgfSxcbiAgZHJhd2VyUGFwZXI6IHtcbiAgICB3aWR0aDogZHJhd2VyV2lkdGhcbiAgfSxcbiAgdG9vbGJhcjogdGhlbWUubWl4aW5zLnRvb2xiYXIsXG4gIGJveDoge1xuICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB6SW5kZXg6IDEwLFxuICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCAtIDUsXG4gICAgdHJhbnNpdGlvbjogJ2JveC1zaGFkb3cgMC4zcyBlYXNlLWluLW91dCdcbiAgfSxcbiAgc2hhZG93OiB7XG4gICAgYm94U2hhZG93OiAnMHB4IDJweCA0cHggLTFweCAjMDAwMDAwMzMsIDBweCA0cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMTQpLCAwcHggMXB4IDEwcHggMHB4IHJnYmEoMCwwLDAsMC4xMiknXG4gIH0sXG4gIHR4dDoge1xuICAgIHBhZGRpbmdMZWZ0OiA4XG4gIH1cbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgXyA9PiB7XG4gIGNvbnN0IGMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBbdHh0LCBzZXRGaWx0ZXJdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbeyBkYXRhLCBkb21haW4gfSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChDb250ZXh0KTtcblxuICBjb25zdCBzY3JvbGwgPSBlID0+IHtcbiAgICBlLnRhcmdldC5zY3JvbGxUb3AgPiAzMCAmJiByZWYuY3VycmVudC5jbGFzc0xpc3QuYWRkKGMuc2hhZG93KTtcbiAgICBlLnRhcmdldC5zY3JvbGxUb3AgPCAzMCAmJiByZWYuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKGMuc2hhZG93KTtcbiAgfTtcblxuICBjb25zdCBTZWFyY2hCb3ggPSBlKCdkaXYnLCB7IGNsYXNzTmFtZTogYy5ib3gsIHJlZiB9LCBlKFNlYXJjaCwgeyBzZXRGaWx0ZXIgfSksIGUoRGl2aWRlcikpO1xuXG4gIGNvbnN0IHJlbmRlcmxpc3QgPSBPYmplY3Qua2V5cyhkYXRhKVxuICAgIC5maWx0ZXIodiA9PiB2ICE9PSAnZ2xvYmFsQ3NzJylcbiAgICAuZmlsdGVyKHYgPT4gdi5pbmNsdWRlcyh0eHQpKVxuICAgIC5tYXAoKHYsIGkpID0+XG4gICAgICBlKFxuICAgICAgICBMaXN0SXRlbSxcbiAgICAgICAgeyBidXR0b246IHRydWUsIGtleTogaSwgb25DbGljazogZSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdkb21haW4nLCBkb21haW46IHYgfSksIHNlbGVjdGVkOiBkb21haW4gPT09IHYgfSxcbiAgICAgICAgZShMaXN0SXRlbVRleHQsIHsgcHJpbWFyeTogdiwgY2xhc3NOYW1lOiBjLnR4dCB9KVxuICAgICAgKVxuICAgICk7XG5cbiAgY29uc3QgbGlzdEJveCA9IGUoTGlzdCwgbnVsbCwgcmVuZGVybGlzdCk7XG5cbiAgY29uc3QgZHJhd2VyT3B0aW9uID0ge1xuICAgIGNsYXNzTmFtZTogYy5kcmF3ZXIsXG4gICAgdmFyaWFudDogJ3Blcm1hbmVudCcsXG4gICAgY2xhc3NlczogeyBwYXBlcjogYy5kcmF3ZXJQYXBlciB9LFxuICAgIGFuY2hvcjogJ2xlZnQnLFxuICAgIG9uU2Nyb2xsOiBzY3JvbGxcbiAgfTtcblxuICByZXR1cm4gZShEcmF3ZXIsIGRyYXdlck9wdGlvbiwgU2VhcmNoQm94LCBlKCdkaXYnLCB7IGNsYXNzTmFtZTogYy50b29sYmFyIH0pLCBsaXN0Qm94KTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCBGcmFnbWVudCBhcyBmLCBjcmVhdGVFbGVtZW50IGFzIGUsIHVzZUNvbnRleHQsIHVzZU1lbW8sIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4uL1N0b3JlJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgJyYgPiBkaXY6OmJlZm9yZSc6IHtcbiAgICAgIGJvcmRlckJvdHRvbUNvbG9yOiAnIzAwMDAwMDAwJ1xuICAgIH1cbiAgfVxufSkpO1xuXG5jb25zdCBJbnB1dE1lID0gKHsgcm93LCBmaWVsZCB9KSA9PiB7XG4gIGNvbnN0IGMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW3sgcm93cywgZG9tYWluLCBkYXRhLCBlcnJvciB9LCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xuICBjb25zdCBbRXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW1R4dCwgc2V0VHh0XSA9IHVzZVN0YXRlKCcnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEVycm9yKGZhbHNlKTtcbiAgICBzZXRUeHQoJycpO1xuICB9LCBbZGF0YV0pO1xuXG4gIGNvbnN0IGZuID0gdiA9PiB7XG4gICAgcmV0dXJuIFsuLi5uZXcgU2V0KHJvd3MucmVkdWNlKChhY2MsIHYyKSA9PiAodjJbdl0gJiYgaXNOYU4ocGFyc2VGbG9hdCh2Mlt2XSkpID8gYWNjLmNvbmNhdCh2Mlt2XSkgOiBhY2MpLCBbXSkpXTtcbiAgfTtcblxuICBjb25zdCBTdWJtaXQgPSBlID0+IHtcbiAgICBsZXQgb2JqMiA9IFsnc3R5JywgJ2RlZicsICdtaWQnXS5yZWR1Y2UoKG9iaiwgdikgPT4ge1xuICAgICAgcmV0dXJuIHsgLi4ub2JqLCBbdl06IGZuKHYpIH07XG4gICAgfSwge30pO1xuICAgIG9iajIgPSB7IC4uLmRhdGFbZG9tYWluXSwgLi4ub2JqMiB9O1xuICAgIGNvbnNvbGUubG9nKCdvYmoyJywgb2JqMik7XG5cbiAgICBsZXQgb2JqID0geyAuLi5kYXRhLCBbZG9tYWluXTogb2JqMiB9O1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ2RhdGEnLCBkYXRhOiBvYmogfSk7XG4gIH07XG5cbiAgY29uc3QgZWRpdCA9IGUgPT4ge1xuICAgIGlmICghZG9tYWluKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGlmICghaXNOYU4ocGFyc2VGbG9hdCh2YWwpKSkge1xuICAgICAgc2V0RXJyb3IodHJ1ZSk7XG4gICAgICBzZXRUeHQoJ+mAieaLqeWZqOS4jeiDveaYr+aVsOWtlycpO1xuICAgIH0gZWxzZSBpZiAocm93cy5tYXAodiA9PiB2W2ZpZWxkXSkuaW5jbHVkZXModmFsKSAmJiB2YWwpIHtcbiAgICAgIHNldEVycm9yKHRydWUpO1xuICAgICAgc2V0VHh0KCfph43lpI3pgInmi6nlmagnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXJyb3IoZmFsc2UpO1xuICAgICAgc2V0VHh0KCcnKTtcbiAgICB9XG5cbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdlcnJvcicsIGVycm9yOiB2YWwgfSk7XG5cbiAgICBjb25zdCBuZXdSb3cgPSB7IC4uLnJvdywgW2ZpZWxkXTogdmFsIH07XG4gICAgbGV0IG5ld1Jvd3MgPSByb3dzLm1hcCh2ID0+ICh2ID09PSByb3cgPyBuZXdSb3cgOiB2KSk7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAncm93cycsIHJvd3M6IG5ld1Jvd3MgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8VGV4dEZpZWxkXG4gICAgICB2YWx1ZT17cm93W2ZpZWxkXSA9PT0gdW5kZWZpbmVkID8gJycgOiByb3dbZmllbGRdfVxuICAgICAgb25DaGFuZ2U9e2VkaXR9XG4gICAgICBjbGFzc2VzPXt7IHJvb3Q6IGMucm9vdCB9fVxuICAgICAgb25DbGljaz17ZSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfVxuICAgICAgb25CbHVyPXtTdWJtaXR9XG4gICAgICBsYWJlbD17VHh0fVxuICAgICAgZXJyb3I9eyEhKGVycm9yID09PSByb3dbZmllbGRdICYmIGVycm9yICYmIEVycm9yKX1cbiAgICAvPlxuICApO1xufTtcblxuY29uc3QgTXlJbnB1dCA9IHByb3BzID0+IHtcbiAgcmV0dXJuIHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiA8SW5wdXRNZSB7Li4ucHJvcHN9IC8+O1xuICB9LCBbcHJvcHMucm93XSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNeUlucHV0O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IGFzIGYsIGNyZWF0ZUVsZW1lbnQgYXMgZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5JztcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbCc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBDaGVja2JveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaGVja2JveCc7XG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnLi4vU3RvcmUnO1xuaW1wb3J0IElucHV0TWUgZnJvbSAnLi9NeUlucHV0JztcblxuY29uc3QgTXlUYWJsZUJvZHkgPSBfID0+IHtcbiAgY29uc3QgW3sgZGF0YSwgc2VsZWN0ZWQsIHJvd3MsIGRvbWFpbiB9LCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xuICBjb25zdCBjcmVhdGVEYXRhID0gKHN0eSwgZGVmLCBtaWQsIGlkKSA9PiAoeyBzdHksIGRlZiwgbWlkLCBpZCB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBrID0gT2JqZWN0LmtleXMoZGF0YSkuZmlsdGVyKHYgPT4gdiAhPT0gJ2dsb2JhbENzcycpO1xuXG4gICAgaWYgKGsubGVuZ3RoID09PSAxKSB7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdkb21haW4nLCBkb21haW46IGAke2t9YCB9KTtcbiAgICB9XG4gICAgaWYgKGRhdGFbZG9tYWluXSkge1xuICAgICAgbGV0IHsgc3R5LCBkZWYsIG1pZCB9ID0gZGF0YVtkb21haW5dO1xuICAgICAgY29uc3QgaSA9IFtzdHksIGRlZiwgbWlkXS5yZWR1Y2UoKGFjYywgdikgPT4gKHYubGVuZ3RoID4gYWNjID8gdi5sZW5ndGggOiBhY2MpLCAwKTtcbiAgICAgIGNvbnN0IHJvd3MgPSBbLi4uQXJyYXkoaSldLm1hcCgodiwgaSkgPT4gY3JlYXRlRGF0YShzdHlbaV0gfHwgJycsIGRlZltpXSB8fCAnJywgbWlkW2ldIHx8ICcnLCBpKSk7XG5cbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ3Jvd3MnLCByb3dzIH0pO1xuXG4gICAgICBpZiAoIXJvd3MubGVuZ3RoKSB7XG4gICAgICAgIGxldCBrID0gT2JqZWN0LmtleXMoZGF0YSkuZmlsdGVyKHYgPT4gdiAhPT0gJ2dsb2JhbENzcycpO1xuICAgICAgICBsZXQgaSA9IGsuaW5kZXhPZihkb21haW4pICsgMTtcbiAgICAgICAgbGV0IG5ld2RvbSA9IGtbaV07XG5cbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnZG9tYWluJywgZG9tYWluOiBuZXdkb20gfSk7XG5cbiAgICAgICAgY29uc3Qgb2JqID0geyAuLi5kYXRhIH07XG4gICAgICAgIGRlbGV0ZSBvYmpbZG9tYWluXTtcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnZGF0YScsIGRhdGE6IG9iaiB9KTtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5yZW1vdmUoZG9tYWluKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ3NlbGVjdGVkJywgc2VsZWN0ZWQ6IFtdIH0pO1xuICAgIH07XG4gIH0sIFtkYXRhLCBkb21haW5dKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChlLCBpZCkgPT4ge1xuICAgIHNlbGVjdGVkLmluY2x1ZGVzKGlkKVxuICAgICAgPyBkaXNwYXRjaCh7IHR5cGU6ICdzZWxlY3RlZCcsIHNlbGVjdGVkOiBzZWxlY3RlZC5maWx0ZXIodiA9PiB2ICE9PSBpZCkgfSlcbiAgICAgIDogZGlzcGF0Y2goeyB0eXBlOiAnc2VsZWN0ZWQnLCBzZWxlY3RlZDogc2VsZWN0ZWQuY29uY2F0KGlkKSB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxUYWJsZUJvZHk+XG4gICAgICB7cm93cy5sZW5ndGggPyAoXG4gICAgICAgIHJvd3MubWFwKChyb3csIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFRhYmxlUm93IGhvdmVyIG9uQ2xpY2s9e2UgPT4gaGFuZGxlQ2xpY2soZSwgcm93LmlkKX0ga2V5PXtpfSBzZWxlY3RlZD17c2VsZWN0ZWQuaW5jbHVkZXMocm93LmlkKX0+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgcGFkZGluZz0nY2hlY2tib3gnPlxuICAgICAgICAgICAgICAgIDxDaGVja2JveCBjaGVja2VkPXtzZWxlY3RlZC5pbmNsdWRlcyhyb3cuaWQpfSAvPlxuICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzY29wZT0ncm93Jz5cbiAgICAgICAgICAgICAgICA8SW5wdXRNZSByb3c9e3Jvd30gZmllbGQ9J3N0eScgLz5cbiAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249J2xlZnQnPlxuICAgICAgICAgICAgICAgIDxJbnB1dE1lIHJvdz17cm93fSBmaWVsZD0nZGVmJyAvPlxuICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj0nbGVmdCc+XG4gICAgICAgICAgICAgICAgPElucHV0TWUgcm93PXtyb3d9IGZpZWxkPSdtaWQnIC8+XG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgKSA6IChcbiAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgIDxUYWJsZUNlbGwgY29sU3Bhbj17NH0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBhbGlnbj0nY2VudGVyJyB2YXJpYW50PSdzdWJ0aXRsZTInIGNvbG9yPSd0ZXh0U2Vjb25kYXJ5Jz5cbiAgICAgICAgICAgICAg5rKh5pyJ5pWw5o2uXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgIDwvVGFibGVSb3c+XG4gICAgICApfVxuICAgIDwvVGFibGVCb2R5PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlUYWJsZUJvZHk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIEZyYWdtZW50IGFzIGYsIGNyZWF0ZUVsZW1lbnQgYXMgZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkJztcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbCc7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3gnO1xuaW1wb3J0IFRhYmxlU29ydExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlU29ydExhYmVsJztcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuLi9TdG9yZSc7XG5cbmNvbnN0IGhlYWRSb3dzID0gW1xuICB7IGlkOiAnc3R5JywgbGFiZWw6ICfov5DnlKjmoLflvI8nIH0sXG4gIHsgaWQ6ICdkZWYnLCBsYWJlbDogJ+S4jei/kOeUqOagt+W8jycgfSxcbiAgeyBpZDogJ21pZCcsIGxhYmVsOiAn5by65Yi257+76K+RJyB9XG5dO1xuXG5jb25zdCBFbmhhbmNlZFRhYmxlSGVhZCA9ICgpID0+IHtcbiAgY29uc3QgW3sgc2VsZWN0ZWQsIHJvd3MsIGRhdGEgfSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChDb250ZXh0KTtcblxuICBjb25zdCBbb3JkZXIsIHNldE9yZGVyXSA9IHVzZVN0YXRlKCdhc2MnKTtcbiAgY29uc3QgW29yZGVyQnksIHNldE9yZGVyQnldID0gdXNlU3RhdGUoJ3N0eScpO1xuICBjb25zdCBudW1TZWxlY3RlZCA9IHNlbGVjdGVkLmxlbmd0aDtcbiAgY29uc3Qgcm93Q291bnQgPSByb3dzLmxlbmd0aDtcblxuICBjb25zdCBoYW5kbGVTZWxlY3RBbGxDbGljayA9IGV2ZW50ID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgIGNvbnN0IG5ld1NlbGVjdGVkcyA9IHJvd3MubWFwKHJvdyA9PiByb3cuaWQpO1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnc2VsZWN0ZWQnLCBzZWxlY3RlZDogbmV3U2VsZWN0ZWRzIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdzZWxlY3RlZCcsIHNlbGVjdGVkOiBbXSB9KTtcbiAgfTtcblxuICBjb25zdCBvblJlcXVlc3RTb3J0ID0gKGUsIHByb3BlcnR5KSA9PiB7XG4gICAgY29uc3QgaXNEZXNjID0gb3JkZXJCeSA9PT0gcHJvcGVydHkgJiYgb3JkZXIgPT09ICdkZXNjJztcbiAgICBzZXRPcmRlcihpc0Rlc2MgPyAnYXNjJyA6ICdkZXNjJyk7XG4gICAgc2V0T3JkZXJCeShwcm9wZXJ0eSk7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAncm93cycsIHJvd3M6IFsuLi5yb3dzXS5yZXZlcnNlKCkgfSk7XG4gIH07XG4gIGNvbnN0IGNyZWF0ZVNvcnRIYW5kbGVyID0gcHJvcGVydHkgPT4gZSA9PiBvblJlcXVlc3RTb3J0KGUsIHByb3BlcnR5KTtcblxuICByZXR1cm4gKFxuICAgIDxUYWJsZUhlYWQ+XG4gICAgICA8VGFibGVSb3c+XG4gICAgICAgIDxUYWJsZUNlbGwgcGFkZGluZz0nY2hlY2tib3gnPlxuICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZT17bnVtU2VsZWN0ZWQgPiAwICYmIG51bVNlbGVjdGVkIDwgcm93Q291bnR9XG4gICAgICAgICAgICBjaGVja2VkPXshIXJvd0NvdW50ICYmIG51bVNlbGVjdGVkID09PSByb3dDb3VudH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWxlY3RBbGxDbGlja31cbiAgICAgICAgICAvPlxuICAgICAgICA8L1RhYmxlQ2VsbD5cblxuICAgICAgICB7aGVhZFJvd3MubWFwKChyb3csIGkpID0+IChcbiAgICAgICAgICA8VGFibGVDZWxsIGtleT17aX0gYWxpZ249J2xlZnQnIHNvcnREaXJlY3Rpb249e29yZGVyQnkgPT09IHJvdy5pZCA/IG9yZGVyIDogZmFsc2V9PlxuICAgICAgICAgICAgPFRhYmxlU29ydExhYmVsIGFjdGl2ZT17b3JkZXJCeSA9PT0gcm93LmlkfSBkaXJlY3Rpb249e29yZGVyfSBvbkNsaWNrPXtjcmVhdGVTb3J0SGFuZGxlcihyb3cuaWQpfT5cbiAgICAgICAgICAgICAge3Jvdy5sYWJlbH1cbiAgICAgICAgICAgIDwvVGFibGVTb3J0TGFiZWw+XG4gICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICkpfVxuICAgICAgPC9UYWJsZVJvdz5cbiAgICA8L1RhYmxlSGVhZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVuaGFuY2VkVGFibGVIZWFkO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IGFzIGYsIGNyZWF0ZUVsZW1lbnQgYXMgZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sdGlwJztcbmltcG9ydCBGYWIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRmFiJztcbmltcG9ydCBBZGRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BZGQnO1xuaW1wb3J0IFN3aXRjaCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Td2l0Y2gnO1xuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0RlbGV0ZSc7XG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnLi4vU3RvcmUnO1xuXG5jb25zdCB1c2VUb29sYmFyU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBhYnNvbHV0ZToge1xuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIGJvdHRvbTogdGhlbWUuc3BhY2luZygxMCksXG4gICAgcmlnaHQ6IHRoZW1lLnNwYWNpbmcoNSksXG4gICAgekluZGV4OiAyMFxuICB9LFxuICBzcGFjZXI6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgcmlnaHQ6IDIwLFxuICAgIHpJbmRleDogMjBcbiAgfVxufSkpO1xuXG5jb25zdCBFbmhhbmNlZFRhYmxlVG9vbGJhciA9IHByb3BzID0+IHtcbiAgY29uc3QgYyA9IHVzZVRvb2xiYXJTdHlsZXMoKTtcbiAgY29uc3QgW3sgc2VsZWN0ZWQsIGRhdGEsIGRvbWFpbiwgcm93cywgdG9nZ2xlIH0sIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XG5cbiAgY29uc3QgY3JlYXRlRGF0YSA9IChzdHksIGRlZiwgbWlkLCBpZCkgPT4gKHsgc3R5LCBkZWYsIG1pZCwgaWQgfSk7XG5cbiAgY29uc3QgcmVtb3ZlID0gXyA9PiB7XG4gICAgbGV0IHJvd3MyID0gcm93cy5maWx0ZXIodiA9PiAhc2VsZWN0ZWQuaW5jbHVkZXModi5pZCkpO1xuXG4gICAgbGV0IG9iajIgPSBbJ3N0eScsICdkZWYnLCAnbWlkJ10ucmVkdWNlKChvYmosIHYpID0+IHtcbiAgICAgIHJldHVybiB7IC4uLm9iaiwgW3ZdOiByb3dzMi5yZWR1Y2UoKGFjYywgdjIpID0+ICh2Mlt2XSA/IGFjYy5jb25jYXQodjJbdl0pIDogYWNjKSwgW10pIH07XG4gICAgfSwge30pO1xuICAgIG9iajIgPSB7IC4uLmRhdGFbZG9tYWluXSwgLi4ub2JqMiB9O1xuICAgIGxldCBvYmogPSB7IC4uLmRhdGEsIFtkb21haW5dOiBvYmoyIH07XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnZGF0YScsIGRhdGE6IG9iaiB9KTtcbiAgfTtcblxuICBjb25zdCBhZGQgPSBfID0+IHtcbiAgICBpZiAocm93cy5ldmVyeSh2ID0+IHYuc3R5IHx8IHYuZGVmIHx8IHYubWlkKSkge1xuICAgICAgY29uc3Qgcm93ID0gY3JlYXRlRGF0YSh1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBEYXRlLm5vdygpKTtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ3Jvd3MnLCByb3dzOiByb3dzLmNvbmNhdChyb3cpIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBJY29uID0gKHRpdGxlLCBjYWxsYmFjaywgaWNvbikgPT4ge1xuICAgIHJldHVybiBlKFRvb2x0aXAsIHsgdGl0bGUgfSwgZShGYWIsIHsgY29sb3I6ICdwcmltYXJ5JywgY2xhc3NOYW1lOiBjLmFic29sdXRlLCBvbkNsaWNrOiBjYWxsYmFjayB9LCBlKGljb24pKSk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlSGFuZGxlciA9IF8gPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ3RvZ2dsZScsIHRvZ2dsZTogIXRvZ2dsZSB9KTtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdzZWxlY3RlZCcsIHNlbGVjdGVkOiBbXSB9KTtcbiAgfTtcblxuICByZXR1cm4gZShcbiAgICBmLFxuICAgIG51bGwsXG4gICAgIXRvZ2dsZSAmJiAoc2VsZWN0ZWQubGVuZ3RoID09PSAwID8gSWNvbignQWRkJywgYWRkLCBBZGRJY29uKSA6IEljb24oJ0RlbGV0ZScsIHJlbW92ZSwgRGVsZXRlSWNvbikpLFxuICAgIGUoU3dpdGNoLCB7XG4gICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgY2hlY2tlZDogdG9nZ2xlLFxuICAgICAgb25DaGFuZ2U6IHRvZ2dsZUhhbmRsZXIsXG4gICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgIGNsYXNzTmFtZTogYy5zcGFjZXJcbiAgICB9KVxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRW5oYW5jZWRUYWJsZVRvb2xiYXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoJztcbmltcG9ydCBJbnB1dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dCc7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgZmxleEdyb3c6IDFcbiAgfSxcbiAgc2VhcmNoOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgfSxcbiAgc2VhcmNoSWNvbjoge1xuICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDMuNSksXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcbiAgfSxcbiAgaW5wdXRSb290OiB7XG4gICAgY29sb3I6ICdpbmhlcml0J1xuICB9LFxuICBpbnB1dElucHV0OiB7XG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxLCAxLCAxLCA1KSxcbiAgICB3aWR0aDogJzEwMCUnXG4gIH0sXG4gIGlucHV0OiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpXG4gIH1cbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoQXBwQmFyKHsgc2V0RmlsdGVyIH0pIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPFRvb2xiYXIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNofT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoSWNvbn0+XG4gICAgICAgICAgPFNlYXJjaEljb24gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdTZWFyY2jigKYnXG4gICAgICAgICAgY2xhc3Nlcz17e1xuICAgICAgICAgICAgcm9vdDogY2xhc3Nlcy5pbnB1dFJvb3QsXG4gICAgICAgICAgICBpbnB1dDogY2xhc3Nlcy5pbnB1dElucHV0XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRGaWx0ZXIoZS50YXJnZXQudmFsdWUudHJpbSgpKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvVG9vbGJhcj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYsIEZyYWdtZW50IGFzIGYsIGNyZWF0ZUVsZW1lbnQgYXMgZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBUYWJsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZSc7XG5cbmltcG9ydCBNeVRhYmxlSGVhZCBmcm9tICcuL015VGFibGVIZWFkJztcbmltcG9ydCBNeVRhYmxlVG9vbGJhciBmcm9tICcuL015VGFibGVUb29sYmFyJztcbmltcG9ydCBNeVRhYmxlQm9keSBmcm9tICcuL015VGFibGVCb2R5JztcbmltcG9ydCBDc3MgZnJvbSAnLi9Dc3MnO1xuXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnLi4vU3RvcmUnO1xuXG5jb25zdCB1c2VUb29sYmFyU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBhYnNvbHV0ZToge1xuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIGJvdHRvbTogdGhlbWUuc3BhY2luZygxMCksXG4gICAgcmlnaHQ6IHRoZW1lLnNwYWNpbmcoNSksXG4gICAgekluZGV4OiAyMFxuICB9LFxuICBzcGFjZXI6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgcmlnaHQ6IDIwLFxuICAgIHpJbmRleDogMjBcbiAgfVxufSkpO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICB3aWR0aDogJzEwMCUnXG4gIH0sXG4gIHBhcGVyOiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMilcbiAgfSxcbiAgdGFibGU6IHtcbiAgICBtaW5XaWR0aDogNzUwXG4gIH0sXG4gIHRhYmxlV3JhcHBlcjoge1xuICAgIG92ZXJmbG93WDogJ2F1dG8nXG4gIH1cbn0pKTtcblxuY29uc3QgY3JlYXRlRGF0YSA9IChzdHksIGRlZiwgbWlkLCBpZCkgPT4gKHsgc3R5LCBkZWYsIG1pZCwgaWQgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVuaGFuY2VkVGFibGUoKSB7XG4gIGNvbnN0IGMgPSB1c2VUb29sYmFyU3R5bGVzKCk7XG4gIGNvbnN0IFt7IHRvZ2dsZSB9LCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xuXG4gIHJldHVybiBlKFxuICAgIFBhcGVyLFxuICAgIHsgY2xhc3NOYW1lOiBjLnBhcGVyIH0sXG4gICAgZShNeVRhYmxlVG9vbGJhciksXG4gICAgIXRvZ2dsZVxuICAgICAgPyBlKFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiBjLnRhYmxlV3JhcHBlciB9LFxuICAgICAgICAgIGUoVGFibGUsIHsgY2xhc3NOYW1lOiBjLnRhYmxlLCBzaXplOiAnbWVkaXVtJyB9LCBlKE15VGFibGVIZWFkKSwgZShNeVRhYmxlQm9keSkpXG4gICAgICAgIClcbiAgICAgIDogZShDc3MpXG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0LCBGcmFnbWVudCBhcyBmLCBjcmVhdGVFbGVtZW50IGFzIGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBUYWJsZSBmcm9tICcuL2NvbXBvbmVudHMvVGFibGUnO1xuaW1wb3J0IERyYXdlciBmcm9tICcuL2NvbXBvbmVudHMvRHJhd2VyJztcblxuY29uc3QgZHJhd2VyV2lkdGggPSAzMDA7XG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnZmxleCdcbiAgfSxcbiAgYXBwQmFyOiB7XG4gICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke2RyYXdlcldpZHRofXB4KWAsXG4gICAgbWFyZ2luTGVmdDogZHJhd2VyV2lkdGhcbiAgfSxcblxuICBjb250ZW50OiB7XG4gICAgZmxleEdyb3c6IDEsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQuZGVmYXVsdFxuICB9XG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBlcm1hbmVudERyYXdlckxlZnQoKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW2N1cnJlbnREYXRhLCBzZXRDdXJyZW50RGF0YV0gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxEcmF3ZXIgLz5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAgICA8VGFibGUgey4uLmN1cnJlbnREYXRhfSAvPlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IE9wdGlvbnMgZnJvbSAnLi9jb21wb25lbnRzL09wdGlvbnMnO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCB7IGNyZWF0ZU11aVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBibHVlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9ibHVlJztcblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBwcmltYXJ5OiBibHVlXG4gIH1cbn0pO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgPE9wdGlvbnMgLz5cbiAgPC9UaGVtZVByb3ZpZGVyPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==