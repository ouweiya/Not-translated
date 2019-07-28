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
          console.log('选项接受:, current', domain);

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
      console.log('全局商店: ', state.data);
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

    console.log(a);
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
    console.log('xxxxxxx');
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
    console.log({
      data: data,
      domain: domain
    });
    console.log('data[domain]=> ', data[domain]);
    var k = Object.keys(data).filter(function (v) {
      return v !== 'globalCss';
    });
    console.log('是否为空', k);

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

      console.log(_rows, 111);
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
        console.log('下一个域名:', newdom);
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
    console.log('xxxx', rows2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9jb21wb25lbnRzL0Nzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9jb21wb25lbnRzL0RyYXdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9jb21wb25lbnRzL015SW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3B0aW9uc1BhZ2UvY29tcG9uZW50cy9NeVRhYmxlQm9keS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9jb21wb25lbnRzL015VGFibGVIZWFkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL09wdGlvbnNQYWdlL2NvbXBvbmVudHMvTXlUYWJsZVRvb2xiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3B0aW9uc1BhZ2UvY29tcG9uZW50cy9TZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3B0aW9uc1BhZ2UvY29tcG9uZW50cy9UYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsidGhlbWUiLCJjcmVhdGVNdWlUaGVtZSIsInBhbGV0dGUiLCJwcmltYXJ5IiwiYmx1ZSIsInNlY29uZGFyeSIsImUiLCJUaGVtZVByb3ZpZGVyIiwiQ3NzQmFzZWxpbmUiLCJTdG9yZSIsIk9wdGlvbnMiLCJDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImRhdGEiLCJyb3dzIiwic2VsZWN0ZWQiLCJkb21haW4iLCJlcnJvciIsInRvZ2dsZSIsImRlYm91bmNlIiwiXyIsInRpbWUiLCJjYWxsYmFjayIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJwcm9wcyIsInVzZVJlZHVjZXIiLCJkaXNwYXRjaCIsInVzZUVmZmVjdCIsImNocm9tZSIsInN0b3JhZ2UiLCJzeW5jIiwiZ2V0IiwiZmlyc3QiLCJPYmplY3QiLCJrZXlzIiwiY29uc29sZSIsImxvZyIsInJ1bnRpbWUiLCJvbk1lc3NhZ2UiLCJhZGRMaXN0ZW5lciIsInJlcXVlc3QiLCJzZW5kZXIiLCJVUkwiLCJ1cmwiLCJob3N0bmFtZSIsImluY2x1ZGVzIiwic2V0IiwiTSIsInVzZU1lbW8iLCJQcm92aWRlciIsInZhbHVlIiwiY2hpbGRyZW4iLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiY29udGFpbmVyIiwiZGlzcGxheSIsImZsZXhXcmFwIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJ0ZXh0RmllbGQiLCJzcGFjaW5nIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwibGFzdCIsIm1hcmdpbkJvdHRvbSIsIk91dGxpbmVkVGV4dEZpZWxkcyIsImMiLCJ1c2VDb250ZXh0Iiwic2V0TG9jYWxDc3MiLCJjc3MiLCJ0YXJnZXQiLCJuZXdDc3MiLCJuZXdkYXRhIiwic2V0R2xvYmFsQ3NzIiwiYSIsImdsb2JhbENzcyIsIkNzcyIsInNocmluayIsImRyYXdlcldpZHRoIiwiZHJhd2VyIiwid2lkdGgiLCJmbGV4U2hyaW5rIiwib3ZlcmZsb3ciLCJkcmF3ZXJQYXBlciIsInRvb2xiYXIiLCJtaXhpbnMiLCJib3giLCJiYWNrZ3JvdW5kIiwiYm94U2l6aW5nIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJ0cmFuc2l0aW9uIiwic2hhZG93IiwiYm94U2hhZG93IiwidHh0IiwicGFkZGluZ0xlZnQiLCJyZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInNldEZpbHRlciIsImN1cnJlbnREYXRhIiwic2V0Q3VycmVudERhdGEiLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiU2VhcmNoQm94IiwiY2xhc3NOYW1lIiwiU2VhcmNoIiwiRGl2aWRlciIsInJlbmRlcmxpc3QiLCJmaWx0ZXIiLCJ2IiwibWFwIiwiaSIsIkxpc3RJdGVtIiwiYnV0dG9uIiwia2V5Iiwib25DbGljayIsIkxpc3RJdGVtVGV4dCIsImxpc3RCb3giLCJMaXN0IiwiZHJhd2VyT3B0aW9uIiwidmFyaWFudCIsImNsYXNzZXMiLCJwYXBlciIsImFuY2hvciIsIm9uU2Nyb2xsIiwiRHJhd2VyIiwicm9vdCIsImJvcmRlckJvdHRvbUNvbG9yIiwiSW5wdXRNZSIsInJvdyIsImZpZWxkIiwiRXJyb3IiLCJzZXRFcnJvciIsIlR4dCIsInNldFR4dCIsImZuIiwiU2V0IiwicmVkdWNlIiwiYWNjIiwidjIiLCJpc05hTiIsInBhcnNlRmxvYXQiLCJjb25jYXQiLCJTdWJtaXQiLCJvYmoyIiwib2JqIiwiZWRpdCIsInZhbCIsIm5ld1JvdyIsIm5ld1Jvd3MiLCJ1bmRlZmluZWQiLCJzdG9wUHJvcGFnYXRpb24iLCJNeUlucHV0IiwiTXlUYWJsZUJvZHkiLCJjcmVhdGVEYXRhIiwic3R5IiwiZGVmIiwibWlkIiwiaWQiLCJrIiwibGVuZ3RoIiwiQXJyYXkiLCJpbmRleE9mIiwibmV3ZG9tIiwiaGFuZGxlQ2xpY2siLCJoZWFkUm93cyIsImxhYmVsIiwiRW5oYW5jZWRUYWJsZUhlYWQiLCJvcmRlciIsInNldE9yZGVyIiwib3JkZXJCeSIsInNldE9yZGVyQnkiLCJudW1TZWxlY3RlZCIsInJvd0NvdW50IiwiaGFuZGxlU2VsZWN0QWxsQ2xpY2siLCJldmVudCIsImNoZWNrZWQiLCJuZXdTZWxlY3RlZHMiLCJvblJlcXVlc3RTb3J0IiwicHJvcGVydHkiLCJpc0Rlc2MiLCJyZXZlcnNlIiwiY3JlYXRlU29ydEhhbmRsZXIiLCJ1c2VUb29sYmFyU3R5bGVzIiwiYWJzb2x1dGUiLCJib3R0b20iLCJyaWdodCIsInNwYWNlciIsInRvcCIsIkVuaGFuY2VkVGFibGVUb29sYmFyIiwicm93czIiLCJldmVyeSIsIkRhdGUiLCJub3ciLCJJY29uIiwidGl0bGUiLCJpY29uIiwiVG9vbHRpcCIsIkZhYiIsImNvbG9yIiwidG9nZ2xlSGFuZGxlciIsImYiLCJBZGRJY29uIiwiRGVsZXRlSWNvbiIsIlN3aXRjaCIsIm9uQ2hhbmdlIiwiZmxleEdyb3ciLCJzZWFyY2giLCJzZWFyY2hJY29uIiwiaGVpZ2h0IiwicG9pbnRlckV2ZW50cyIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImlucHV0Um9vdCIsImlucHV0SW5wdXQiLCJwYWRkaW5nIiwiaW5wdXQiLCJTZWFyY2hBcHBCYXIiLCJ0cmltIiwidGFibGUiLCJtaW5XaWR0aCIsInRhYmxlV3JhcHBlciIsIm92ZXJmbG93WCIsIkVuaGFuY2VkVGFibGUiLCJQYXBlciIsIk15VGFibGVUb29sYmFyIiwiVGFibGUiLCJzaXplIiwiTXlUYWJsZUhlYWQiLCJhcHBCYXIiLCJtYXJnaW5MZWZ0IiwiY29udGVudCIsImJhY2tncm91bmRDb2xvciIsIlBlcm1hbmVudERyYXdlckxlZnQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVB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QUF0QixHQUNFLDJEQUFDLHFFQUFELE9BREYsRUFFRSwyREFBQywyREFBRCxPQUZGLENBREYsRUFLRXVQLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUxGLEUiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LmpzXCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgYXMgZiwgY3JlYXRlRWxlbWVudCBhcyBlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICd0eXBlZmFjZS1yb2JvdG8nO1xuaW1wb3J0IE9wdGlvbnMgZnJvbSAnLi9PcHRpb25zUGFnZS9pbmRleCc7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xuaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IGJsdWUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL2JsdWUnO1xuaW1wb3J0IFN0b3JlIGZyb20gJy4vT3B0aW9uc1BhZ2UvU3RvcmUnO1xuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIHByaW1hcnk6IGJsdWUsXG4gICAgc2Vjb25kYXJ5OiBibHVlXG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiBlKFRoZW1lUHJvdmlkZXIsIHsgdGhlbWUgfSwgZShDc3NCYXNlbGluZSksIGUoU3RvcmUsIG51bGwsIGUoT3B0aW9ucykpKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIEZyYWdtZW50IGFzIGYsIGNyZWF0ZUVsZW1lbnQgYXMgZSwgdXNlUmVkdWNlciwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdkYXRhJzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBkYXRhOiBhY3Rpb24uZGF0YSB9O1xuICAgIGNhc2UgJ3Jvd3MnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHJvd3M6IGFjdGlvbi5yb3dzIH07XG4gICAgY2FzZSAnc2VsZWN0ZWQnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHNlbGVjdGVkOiBhY3Rpb24uc2VsZWN0ZWQgfTtcbiAgICBjYXNlICdkb21haW4nOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGRvbWFpbjogYWN0aW9uLmRvbWFpbiB9O1xuICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBlcnJvcjogYWN0aW9uLmVycm9yIH07XG4gICAgY2FzZSAndG9nZ2xlJzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB0b2dnbGU6IGFjdGlvbi50b2dnbGUgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5jb25zdCBkZWJvdW5jZSA9IChfID0+IHtcbiAgbGV0IHRpbWUgPSBudWxsO1xuICByZXR1cm4gY2FsbGJhY2sgPT4ge1xuICAgIGNsZWFyVGltZW91dCh0aW1lKTtcbiAgICB0aW1lID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH0sIDEwMCk7XG4gIH07XG59KSgpO1xuXG5jb25zdCBTdG9yZSA9IHByb3BzID0+IHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIHtcbiAgICBkYXRhOiB7fSxcbiAgICByb3dzOiBbXSxcbiAgICBzZWxlY3RlZDogW10sXG4gICAgZG9tYWluOiAnJyxcbiAgICBlcnJvcjogZmFsc2UsXG4gICAgdG9nZ2xlOiBmYWxzZVxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KG51bGwsIGRhdGEgPT4ge1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnZGF0YScsIGRhdGEgfSk7XG4gICAgICBsZXQgZmlyc3QgPSBPYmplY3Qua2V5cyhkYXRhKVswXTtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ2RvbWFpbicsIGRvbWFpbjogZmlyc3QgPT09ICdnbG9iYWxDc3MnID8gJycgOiBmaXJzdCB9KTtcbiAgICAgIGNvbnNvbGUubG9nKCfojrflj5bmlbDmja4nLCBkYXRhKTtcbiAgICB9KTtcblxuICAgIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigocmVxdWVzdCwgc2VuZGVyKSA9PiB7XG4gICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChudWxsLCBkYXRhID0+IHtcbiAgICAgICAgaWYgKHJlcXVlc3QgPT09ICdzZWwnKSB7XG4gICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnZGF0YScsIGRhdGEgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVxdWVzdCA9PT0gJ2N1cnJlbnQnKSB7XG4gICAgICAgICAgY29uc3QgZG9tYWluID0gbmV3IFVSTChzZW5kZXIudXJsKS5ob3N0bmFtZTtcbiAgICAgICAgICBjb25zb2xlLmxvZygn6YCJ6aG55o6l5Y+XOiwgY3VycmVudCcsIGRvbWFpbik7XG4gICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGRhdGEpLmluY2x1ZGVzKGRvbWFpbikpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ2RvbWFpbicsIGRvbWFpbiB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkZWJvdW5jZSgoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygn5YWo5bGA5ZWG5bqXOiAnLCBzdGF0ZS5kYXRhKTtcbiAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHN0YXRlLmRhdGEpO1xuICAgIH0pO1xuICB9LCBbc3RhdGVdKTtcblxuICBjb25zdCBNID0gdXNlTWVtbyhfID0+IGUoQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZTogW3N0YXRlLCBkaXNwYXRjaF0gfSwgcHJvcHMuY2hpbGRyZW4pLCBbc3RhdGVdKTtcbiAgcmV0dXJuIE07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdG9yZTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnLi4vU3RvcmUnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIGNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgIG1heFdpZHRoOiA5NjAsXG4gICAgbWFyZ2luOiAnYXV0bydcbiAgfSxcbiAgdGV4dEZpZWxkOiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDQsIDEpLFxuICAgICcmIHRleHRhcmVhJzoge1xuICAgICAgZm9udEZhbWlseTogJ0ZpcmEgQ29kZSBSZWd1bGFyJyxcbiAgICAgIGZvbnRTaXplOiAnMTRweCdcbiAgICB9XG4gIH0sXG4gIGxhc3Q6IHtcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoOClcbiAgfVxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPdXRsaW5lZFRleHRGaWVsZHMoKSB7XG4gIGNvbnN0IGMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW3sgZGF0YSwgZG9tYWluIH0sIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XG5cbiAgY29uc3Qgc2V0TG9jYWxDc3MgPSBlID0+IHtcbiAgICBpZiAoIWRvbWFpbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjc3MgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBjb25zdCBuZXdDc3MgPSB7IC4uLmRhdGFbZG9tYWluXSwgY3NzIH07XG4gICAgbGV0IG5ld2RhdGEgPSB7IC4uLmRhdGEsIFtkb21haW5dOiBuZXdDc3MgfTtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdkYXRhJywgZGF0YTogbmV3ZGF0YSB9KTtcbiAgfTtcblxuICBjb25zdCBzZXRHbG9iYWxDc3MgPSBlID0+IHtcbiAgICBjb25zdCBjc3MgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBsZXQgYSA9IHsgLi4uZGF0YSwgZ2xvYmFsQ3NzOiBjc3MgfTtcbiAgICBjb25zb2xlLmxvZyhhKTtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdkYXRhJywgZGF0YTogYSB9KTtcbiAgfTtcblxuICBsZXQgQ3NzID0gJyc7XG4gIGlmIChkYXRhW2RvbWFpbl0pIHtcbiAgICBDc3MgPSBkYXRhW2RvbWFpbl0uY3NzIHx8ICcnO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIG1heFdpZHRoPSdtZCc+XG4gICAgICA8VGV4dEZpZWxkXG4gICAgICAgIGxhYmVsPXtkb21haW4gfHwgJ+acqumAieaLqSd9XG4gICAgICAgIG11bHRpbGluZVxuICAgICAgICByb3dzPSc4J1xuICAgICAgICBjbGFzc05hbWU9e2MudGV4dEZpZWxkfVxuICAgICAgICBtYXJnaW49J25vcm1hbCdcbiAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXG4gICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICBvbkNoYW5nZT17c2V0TG9jYWxDc3N9XG4gICAgICAgIGlkPSd0ZXh0J1xuICAgICAgICB2YWx1ZT17Q3NzfVxuICAgICAgICBwbGFjZWhvbGRlcj0n6buY6K6k6L+Q55So5YWo5bGAJ1xuICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICBzaHJpbms6IHRydWVcbiAgICAgICAgfX1cbiAgICAgIC8+XG5cbiAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgbGFiZWw9J+WFqOWxgCdcbiAgICAgICAgbXVsdGlsaW5lXG4gICAgICAgIHJvd3M9JzgnXG4gICAgICAgIGNsYXNzTmFtZT17YCR7Yy50ZXh0RmllbGR9ICR7Yy5sYXN0fWB9XG4gICAgICAgIG1hcmdpbj0nbm9ybWFsJ1xuICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcbiAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgIHZhbHVlPXtkYXRhLmdsb2JhbENzc31cbiAgICAgICAgb25DaGFuZ2U9e3NldEdsb2JhbENzc31cbiAgICAgICAgaWQ9J3RleHQnXG4gICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgIHNocmluazogdHJ1ZVxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QsIEZyYWdtZW50IGFzIGYsIGNyZWF0ZUVsZW1lbnQgYXMgZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IERyYXdlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EcmF3ZXInO1xuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vU2VhcmNoJztcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuLi9TdG9yZSc7XG5cbmNvbnN0IGRyYXdlcldpZHRoID0gMzAwO1xuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBkcmF3ZXI6IHtcbiAgICB3aWR0aDogZHJhd2VyV2lkdGgsXG4gICAgZmxleFNocmluazogMCxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgfSxcbiAgZHJhd2VyUGFwZXI6IHtcbiAgICB3aWR0aDogZHJhd2VyV2lkdGhcbiAgfSxcbiAgdG9vbGJhcjogdGhlbWUubWl4aW5zLnRvb2xiYXIsXG4gIGJveDoge1xuICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB6SW5kZXg6IDEwLFxuICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCAtIDUsXG4gICAgdHJhbnNpdGlvbjogJ2JveC1zaGFkb3cgMC4zcyBlYXNlLWluLW91dCdcbiAgfSxcbiAgc2hhZG93OiB7XG4gICAgYm94U2hhZG93OiAnMHB4IDJweCA0cHggLTFweCAjMDAwMDAwMzMsIDBweCA0cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMTQpLCAwcHggMXB4IDEwcHggMHB4IHJnYmEoMCwwLDAsMC4xMiknXG4gIH0sXG4gIHR4dDoge1xuICAgIHBhZGRpbmdMZWZ0OiA4XG4gIH1cbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgXyA9PiB7XG4gIGNvbnN0IGMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBbdHh0LCBzZXRGaWx0ZXJdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbY3VycmVudERhdGEsIHNldEN1cnJlbnREYXRhXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW3sgZGF0YSwgZG9tYWluIH0sIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XG4gIC8vIGNvbnNvbGUubG9nKDExLCB1c2VDb250ZXh0KENvbnRleHQpKTtcbiAgLy8gY29uc29sZS5sb2coJ+aKveWxiTonLCBkYXRhKTtcblxuICBjb25zdCBzY3JvbGwgPSBlID0+IHtcbiAgICBlLnRhcmdldC5zY3JvbGxUb3AgPiAzMCAmJiByZWYuY3VycmVudC5jbGFzc0xpc3QuYWRkKGMuc2hhZG93KTtcbiAgICBlLnRhcmdldC5zY3JvbGxUb3AgPCAzMCAmJiByZWYuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKGMuc2hhZG93KTtcbiAgfTtcblxuICBjb25zdCBTZWFyY2hCb3ggPSBlKCdkaXYnLCB7IGNsYXNzTmFtZTogYy5ib3gsIHJlZiB9LCBlKFNlYXJjaCwgeyBzZXRGaWx0ZXIgfSksIGUoRGl2aWRlcikpO1xuXG4gIGNvbnN0IHJlbmRlcmxpc3QgPSBPYmplY3Qua2V5cyhkYXRhKVxuICAgIC5maWx0ZXIodiA9PiB2ICE9PSAnZ2xvYmFsQ3NzJylcbiAgICAuZmlsdGVyKHYgPT4gdi5pbmNsdWRlcyh0eHQpKVxuICAgIC5tYXAoKHYsIGkpID0+XG4gICAgICBlKFxuICAgICAgICBMaXN0SXRlbSxcbiAgICAgICAgeyBidXR0b246IHRydWUsIGtleTogaSwgb25DbGljazogZSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdkb21haW4nLCBkb21haW46IHYgfSksIHNlbGVjdGVkOiBkb21haW4gPT09IHYgfSxcbiAgICAgICAgZShMaXN0SXRlbVRleHQsIHsgcHJpbWFyeTogdiwgY2xhc3NOYW1lOiBjLnR4dCB9KVxuICAgICAgKVxuICAgICk7XG5cbiAgY29uc3QgbGlzdEJveCA9IGUoTGlzdCwgbnVsbCwgcmVuZGVybGlzdCk7XG5cbiAgY29uc3QgZHJhd2VyT3B0aW9uID0ge1xuICAgIGNsYXNzTmFtZTogYy5kcmF3ZXIsXG4gICAgdmFyaWFudDogJ3Blcm1hbmVudCcsXG4gICAgY2xhc3NlczogeyBwYXBlcjogYy5kcmF3ZXJQYXBlciB9LFxuICAgIGFuY2hvcjogJ2xlZnQnLFxuICAgIG9uU2Nyb2xsOiBzY3JvbGxcbiAgfTtcblxuICByZXR1cm4gZShEcmF3ZXIsIGRyYXdlck9wdGlvbiwgU2VhcmNoQm94LCBlKCdkaXYnLCB7IGNsYXNzTmFtZTogYy50b29sYmFyIH0pLCBsaXN0Qm94KTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCBGcmFnbWVudCBhcyBmLCBjcmVhdGVFbGVtZW50IGFzIGUsIHVzZUNvbnRleHQsIHVzZU1lbW8sIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4uL1N0b3JlJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgJyYgPiBkaXY6OmJlZm9yZSc6IHtcbiAgICAgIGJvcmRlckJvdHRvbUNvbG9yOiAnIzAwMDAwMDAwJ1xuICAgIH1cbiAgfVxufSkpO1xuXG5jb25zdCBJbnB1dE1lID0gKHsgcm93LCBmaWVsZCB9KSA9PiB7XG4gIGNvbnN0IGMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW3sgcm93cywgZG9tYWluLCBkYXRhLCBlcnJvciB9LCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xuICBjb25zdCBbRXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW1R4dCwgc2V0VHh0XSA9IHVzZVN0YXRlKCcnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEVycm9yKGZhbHNlKTtcbiAgICBzZXRUeHQoJycpO1xuICB9LCBbZGF0YV0pO1xuXG4gIGNvbnN0IGZuID0gdiA9PiB7XG4gICAgcmV0dXJuIFsuLi5uZXcgU2V0KHJvd3MucmVkdWNlKChhY2MsIHYyKSA9PiAodjJbdl0gJiYgaXNOYU4ocGFyc2VGbG9hdCh2Mlt2XSkpID8gYWNjLmNvbmNhdCh2Mlt2XSkgOiBhY2MpLCBbXSkpXTtcbiAgfTtcblxuICBjb25zdCBTdWJtaXQgPSBlID0+IHtcbiAgICBsZXQgb2JqMiA9IFsnc3R5JywgJ2RlZicsICdtaWQnXS5yZWR1Y2UoKG9iaiwgdikgPT4ge1xuICAgICAgcmV0dXJuIHsgLi4ub2JqLCBbdl06IGZuKHYpIH07XG4gICAgfSwge30pO1xuICAgIG9iajIgPSB7IC4uLmRhdGFbZG9tYWluXSwgLi4ub2JqMiB9O1xuICAgIGNvbnNvbGUubG9nKCdvYmoyJywgb2JqMik7XG5cbiAgICBsZXQgb2JqID0geyAuLi5kYXRhLCBbZG9tYWluXTogb2JqMiB9O1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ2RhdGEnLCBkYXRhOiBvYmogfSk7XG4gIH07XG5cbiAgY29uc3QgZWRpdCA9IGUgPT4ge1xuICAgIGlmICghZG9tYWluKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGlmICghaXNOYU4ocGFyc2VGbG9hdCh2YWwpKSkge1xuICAgICAgc2V0RXJyb3IodHJ1ZSk7XG4gICAgICBzZXRUeHQoJ+mAieaLqeWZqOS4jeiDveaYr+aVsOWtlycpO1xuICAgIH0gZWxzZSBpZiAocm93cy5tYXAodiA9PiB2W2ZpZWxkXSkuaW5jbHVkZXModmFsKSAmJiB2YWwpIHtcbiAgICAgIHNldEVycm9yKHRydWUpO1xuICAgICAgc2V0VHh0KCfph43lpI3pgInmi6nlmagnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXJyb3IoZmFsc2UpO1xuICAgICAgc2V0VHh0KCcnKTtcbiAgICB9XG5cbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdlcnJvcicsIGVycm9yOiB2YWwgfSk7XG5cbiAgICBjb25zdCBuZXdSb3cgPSB7IC4uLnJvdywgW2ZpZWxkXTogdmFsIH07XG4gICAgbGV0IG5ld1Jvd3MgPSByb3dzLm1hcCh2ID0+ICh2ID09PSByb3cgPyBuZXdSb3cgOiB2KSk7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAncm93cycsIHJvd3M6IG5ld1Jvd3MgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8VGV4dEZpZWxkXG4gICAgICB2YWx1ZT17cm93W2ZpZWxkXSA9PT0gdW5kZWZpbmVkID8gJycgOiByb3dbZmllbGRdfVxuICAgICAgb25DaGFuZ2U9e2VkaXR9XG4gICAgICBjbGFzc2VzPXt7IHJvb3Q6IGMucm9vdCB9fVxuICAgICAgb25DbGljaz17ZSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfVxuICAgICAgb25CbHVyPXtTdWJtaXR9XG4gICAgICBsYWJlbD17VHh0fVxuICAgICAgZXJyb3I9eyEhKGVycm9yID09PSByb3dbZmllbGRdICYmIGVycm9yICYmIEVycm9yKX1cbiAgICAvPlxuICApO1xufTtcblxuY29uc3QgTXlJbnB1dCA9IHByb3BzID0+IHtcbiAgcmV0dXJuIHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCd4eHh4eHh4Jyk7XG4gICAgcmV0dXJuIDxJbnB1dE1lIHsuLi5wcm9wc30gLz47XG4gIH0sIFtwcm9wcy5yb3ddKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE15SW5wdXQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgYXMgZiwgY3JlYXRlRWxlbWVudCBhcyBlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHknO1xuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94JztcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuLi9TdG9yZSc7XG5pbXBvcnQgSW5wdXRNZSBmcm9tICcuL015SW5wdXQnO1xuXG5jb25zdCBNeVRhYmxlQm9keSA9IF8gPT4ge1xuICBjb25zdCBbeyBkYXRhLCBzZWxlY3RlZCwgcm93cywgZG9tYWluIH0sIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XG4gIGNvbnN0IGNyZWF0ZURhdGEgPSAoc3R5LCBkZWYsIG1pZCwgaWQpID0+ICh7IHN0eSwgZGVmLCBtaWQsIGlkIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coeyBkYXRhLCBkb21haW4gfSk7XG4gICAgY29uc29sZS5sb2coJ2RhdGFbZG9tYWluXT0+ICcsIGRhdGFbZG9tYWluXSk7XG5cbiAgICBsZXQgayA9IE9iamVjdC5rZXlzKGRhdGEpLmZpbHRlcih2ID0+IHYgIT09ICdnbG9iYWxDc3MnKTtcbiAgICBjb25zb2xlLmxvZygn5piv5ZCm5Li656m6Jywgayk7XG4gICAgaWYgKGsubGVuZ3RoID09PSAxKSB7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdkb21haW4nLCBkb21haW46IGAke2t9YCB9KTtcbiAgICB9XG4gICAgaWYgKGRhdGFbZG9tYWluXSkge1xuICAgICAgbGV0IHsgc3R5LCBkZWYsIG1pZCB9ID0gZGF0YVtkb21haW5dO1xuICAgICAgY29uc3QgaSA9IFtzdHksIGRlZiwgbWlkXS5yZWR1Y2UoKGFjYywgdikgPT4gKHYubGVuZ3RoID4gYWNjID8gdi5sZW5ndGggOiBhY2MpLCAwKTtcbiAgICAgIGNvbnN0IHJvd3MgPSBbLi4uQXJyYXkoaSldLm1hcCgodiwgaSkgPT4gY3JlYXRlRGF0YShzdHlbaV0gfHwgJycsIGRlZltpXSB8fCAnJywgbWlkW2ldIHx8ICcnLCBpKSk7XG4gICAgICBjb25zb2xlLmxvZyhyb3dzLCAxMTEpO1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAncm93cycsIHJvd3MgfSk7XG5cbiAgICAgIGlmICghcm93cy5sZW5ndGgpIHtcbiAgICAgICAgbGV0IGsgPSBPYmplY3Qua2V5cyhkYXRhKS5maWx0ZXIodiA9PiB2ICE9PSAnZ2xvYmFsQ3NzJyk7XG4gICAgICAgIGxldCBpID0gay5pbmRleE9mKGRvbWFpbikgKyAxO1xuICAgICAgICBsZXQgbmV3ZG9tID0ga1tpXTtcbiAgICAgICAgY29uc29sZS5sb2coJ+S4i+S4gOS4quWfn+WQjTonLCBuZXdkb20pO1xuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdkb21haW4nLCBkb21haW46IG5ld2RvbSB9KTtcblxuICAgICAgICBjb25zdCBvYmogPSB7IC4uLmRhdGEgfTtcbiAgICAgICAgZGVsZXRlIG9ialtkb21haW5dO1xuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdkYXRhJywgZGF0YTogb2JqIH0pO1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnJlbW92ZShkb21haW4pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnc2VsZWN0ZWQnLCBzZWxlY3RlZDogW10gfSk7XG4gICAgfTtcbiAgfSwgW2RhdGEsIGRvbWFpbl0pO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUsIGlkKSA9PiB7XG4gICAgc2VsZWN0ZWQuaW5jbHVkZXMoaWQpXG4gICAgICA/IGRpc3BhdGNoKHsgdHlwZTogJ3NlbGVjdGVkJywgc2VsZWN0ZWQ6IHNlbGVjdGVkLmZpbHRlcih2ID0+IHYgIT09IGlkKSB9KVxuICAgICAgOiBkaXNwYXRjaCh7IHR5cGU6ICdzZWxlY3RlZCcsIHNlbGVjdGVkOiBzZWxlY3RlZC5jb25jYXQoaWQpIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFRhYmxlQm9keT5cbiAgICAgIHtyb3dzLmxlbmd0aCA/IChcbiAgICAgICAgcm93cy5tYXAoKHJvdywgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VGFibGVSb3cgaG92ZXIgb25DbGljaz17ZSA9PiBoYW5kbGVDbGljayhlLCByb3cuaWQpfSBrZXk9e2l9IHNlbGVjdGVkPXtzZWxlY3RlZC5pbmNsdWRlcyhyb3cuaWQpfT5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBwYWRkaW5nPSdjaGVja2JveCc+XG4gICAgICAgICAgICAgICAgPENoZWNrYm94IGNoZWNrZWQ9e3NlbGVjdGVkLmluY2x1ZGVzKHJvdy5pZCl9IC8+XG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIHNjb3BlPSdyb3cnPlxuICAgICAgICAgICAgICAgIDxJbnB1dE1lIHJvdz17cm93fSBmaWVsZD0nc3R5JyAvPlxuICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj0nbGVmdCc+XG4gICAgICAgICAgICAgICAgPElucHV0TWUgcm93PXtyb3d9IGZpZWxkPSdkZWYnIC8+XG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPSdsZWZ0Jz5cbiAgICAgICAgICAgICAgICA8SW5wdXRNZSByb3c9e3Jvd30gZmllbGQ9J21pZCcgLz5cbiAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICApIDogKFxuICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgPFRhYmxlQ2VsbCBjb2xTcGFuPXs0fT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGFsaWduPSdjZW50ZXInIHZhcmlhbnQ9J3N1YnRpdGxlMicgY29sb3I9J3RleHRTZWNvbmRhcnknPlxuICAgICAgICAgICAgICDmsqHmnInmlbDmja5cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICl9XG4gICAgPC9UYWJsZUJvZHk+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNeVRhYmxlQm9keTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgRnJhZ21lbnQgYXMgZiwgY3JlYXRlRWxlbWVudCBhcyBlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnO1xuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcbmltcG9ydCBDaGVja2JveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaGVja2JveCc7XG5pbXBvcnQgVGFibGVTb3J0TGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVTb3J0TGFiZWwnO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4uL1N0b3JlJztcblxuY29uc3QgaGVhZFJvd3MgPSBbXG4gIHsgaWQ6ICdzdHknLCBsYWJlbDogJ+i/kOeUqOagt+W8jycgfSxcbiAgeyBpZDogJ2RlZicsIGxhYmVsOiAn5LiN6L+Q55So5qC35byPJyB9LFxuICB7IGlkOiAnbWlkJywgbGFiZWw6ICflvLrliLbnv7vor5EnIH1cbl07XG5cbmNvbnN0IEVuaGFuY2VkVGFibGVIZWFkID0gKCkgPT4ge1xuICBjb25zdCBbeyBzZWxlY3RlZCwgcm93cywgZGF0YSB9LCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xuXG4gIGNvbnN0IFtvcmRlciwgc2V0T3JkZXJdID0gdXNlU3RhdGUoJ2FzYycpO1xuICBjb25zdCBbb3JkZXJCeSwgc2V0T3JkZXJCeV0gPSB1c2VTdGF0ZSgnc3R5Jyk7XG4gIGNvbnN0IG51bVNlbGVjdGVkID0gc2VsZWN0ZWQubGVuZ3RoO1xuICBjb25zdCByb3dDb3VudCA9IHJvd3MubGVuZ3RoO1xuXG4gIGNvbnN0IGhhbmRsZVNlbGVjdEFsbENsaWNrID0gZXZlbnQgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgY29uc3QgbmV3U2VsZWN0ZWRzID0gcm93cy5tYXAocm93ID0+IHJvdy5pZCk7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdzZWxlY3RlZCcsIHNlbGVjdGVkOiBuZXdTZWxlY3RlZHMgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGRpc3BhdGNoKHsgdHlwZTogJ3NlbGVjdGVkJywgc2VsZWN0ZWQ6IFtdIH0pO1xuICB9O1xuXG4gIGNvbnN0IG9uUmVxdWVzdFNvcnQgPSAoZSwgcHJvcGVydHkpID0+IHtcbiAgICBjb25zdCBpc0Rlc2MgPSBvcmRlckJ5ID09PSBwcm9wZXJ0eSAmJiBvcmRlciA9PT0gJ2Rlc2MnO1xuICAgIHNldE9yZGVyKGlzRGVzYyA/ICdhc2MnIDogJ2Rlc2MnKTtcbiAgICBzZXRPcmRlckJ5KHByb3BlcnR5KTtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdyb3dzJywgcm93czogWy4uLnJvd3NdLnJldmVyc2UoKSB9KTtcbiAgfTtcbiAgY29uc3QgY3JlYXRlU29ydEhhbmRsZXIgPSBwcm9wZXJ0eSA9PiBlID0+IG9uUmVxdWVzdFNvcnQoZSwgcHJvcGVydHkpO1xuXG4gIHJldHVybiAoXG4gICAgPFRhYmxlSGVhZD5cbiAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgPFRhYmxlQ2VsbCBwYWRkaW5nPSdjaGVja2JveCc+XG4gICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICBpbmRldGVybWluYXRlPXtudW1TZWxlY3RlZCA+IDAgJiYgbnVtU2VsZWN0ZWQgPCByb3dDb3VudH1cbiAgICAgICAgICAgIGNoZWNrZWQ9eyEhcm93Q291bnQgJiYgbnVtU2VsZWN0ZWQgPT09IHJvd0NvdW50fVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlbGVjdEFsbENsaWNrfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvVGFibGVDZWxsPlxuXG4gICAgICAgIHtoZWFkUm93cy5tYXAoKHJvdywgaSkgPT4gKFxuICAgICAgICAgIDxUYWJsZUNlbGwga2V5PXtpfSBhbGlnbj0nbGVmdCcgc29ydERpcmVjdGlvbj17b3JkZXJCeSA9PT0gcm93LmlkID8gb3JkZXIgOiBmYWxzZX0+XG4gICAgICAgICAgICA8VGFibGVTb3J0TGFiZWwgYWN0aXZlPXtvcmRlckJ5ID09PSByb3cuaWR9IGRpcmVjdGlvbj17b3JkZXJ9IG9uQ2xpY2s9e2NyZWF0ZVNvcnRIYW5kbGVyKHJvdy5pZCl9PlxuICAgICAgICAgICAgICB7cm93LmxhYmVsfVxuICAgICAgICAgICAgPC9UYWJsZVNvcnRMYWJlbD5cbiAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgKSl9XG4gICAgICA8L1RhYmxlUm93PlxuICAgIDwvVGFibGVIZWFkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRW5oYW5jZWRUYWJsZUhlYWQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgYXMgZiwgY3JlYXRlRWxlbWVudCBhcyBlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBUb29sdGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXAnO1xuaW1wb3J0IEZhYiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9GYWInO1xuaW1wb3J0IEFkZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FkZCc7XG5pbXBvcnQgU3dpdGNoIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N3aXRjaCc7XG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlJztcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuLi9TdG9yZSc7XG5cbmNvbnN0IHVzZVRvb2xiYXJTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIGFic29sdXRlOiB7XG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgYm90dG9tOiB0aGVtZS5zcGFjaW5nKDEwKSxcbiAgICByaWdodDogdGhlbWUuc3BhY2luZyg1KSxcbiAgICB6SW5kZXg6IDIwXG4gIH0sXG4gIHNwYWNlcjoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMCxcbiAgICByaWdodDogMjAsXG4gICAgekluZGV4OiAyMFxuICB9XG59KSk7XG5cbmNvbnN0IEVuaGFuY2VkVGFibGVUb29sYmFyID0gcHJvcHMgPT4ge1xuICBjb25zdCBjID0gdXNlVG9vbGJhclN0eWxlcygpO1xuICBjb25zdCBbeyBzZWxlY3RlZCwgZGF0YSwgZG9tYWluLCByb3dzLCB0b2dnbGUgfSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChDb250ZXh0KTtcblxuICBjb25zdCBjcmVhdGVEYXRhID0gKHN0eSwgZGVmLCBtaWQsIGlkKSA9PiAoeyBzdHksIGRlZiwgbWlkLCBpZCB9KTtcblxuICBjb25zdCByZW1vdmUgPSBfID0+IHtcbiAgICBsZXQgcm93czIgPSByb3dzLmZpbHRlcih2ID0+ICFzZWxlY3RlZC5pbmNsdWRlcyh2LmlkKSk7XG5cbiAgICBsZXQgb2JqMiA9IFsnc3R5JywgJ2RlZicsICdtaWQnXS5yZWR1Y2UoKG9iaiwgdikgPT4ge1xuICAgICAgcmV0dXJuIHsgLi4ub2JqLCBbdl06IHJvd3MyLnJlZHVjZSgoYWNjLCB2MikgPT4gKHYyW3ZdID8gYWNjLmNvbmNhdCh2Mlt2XSkgOiBhY2MpLCBbXSkgfTtcbiAgICB9LCB7fSk7XG4gICAgb2JqMiA9IHsgLi4uZGF0YVtkb21haW5dLCAuLi5vYmoyIH07XG4gICAgbGV0IG9iaiA9IHsgLi4uZGF0YSwgW2RvbWFpbl06IG9iajIgfTtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdkYXRhJywgZGF0YTogb2JqIH0pO1xuXG4gICAgY29uc29sZS5sb2coJ3h4eHgnLCByb3dzMik7XG4gIH07XG5cbiAgY29uc3QgYWRkID0gXyA9PiB7XG4gICAgaWYgKHJvd3MuZXZlcnkodiA9PiB2LnN0eSB8fCB2LmRlZiB8fCB2Lm1pZCkpIHtcbiAgICAgIGNvbnN0IHJvdyA9IGNyZWF0ZURhdGEodW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgRGF0ZS5ub3coKSk7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdyb3dzJywgcm93czogcm93cy5jb25jYXQocm93KSB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgSWNvbiA9ICh0aXRsZSwgY2FsbGJhY2ssIGljb24pID0+IHtcbiAgICByZXR1cm4gZShUb29sdGlwLCB7IHRpdGxlIH0sIGUoRmFiLCB7IGNvbG9yOiAncHJpbWFyeScsIGNsYXNzTmFtZTogYy5hYnNvbHV0ZSwgb25DbGljazogY2FsbGJhY2sgfSwgZShpY29uKSkpO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZUhhbmRsZXIgPSBfID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICd0b2dnbGUnLCB0b2dnbGU6ICF0b2dnbGUgfSk7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnc2VsZWN0ZWQnLCBzZWxlY3RlZDogW10gfSk7XG4gIH07XG5cbiAgcmV0dXJuIGUoXG4gICAgZixcbiAgICBudWxsLFxuICAgICF0b2dnbGUgJiYgKHNlbGVjdGVkLmxlbmd0aCA9PT0gMCA/IEljb24oJ0FkZCcsIGFkZCwgQWRkSWNvbikgOiBJY29uKCdEZWxldGUnLCByZW1vdmUsIERlbGV0ZUljb24pKSxcbiAgICBlKFN3aXRjaCwge1xuICAgICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICAgIGNoZWNrZWQ6IHRvZ2dsZSxcbiAgICAgIG9uQ2hhbmdlOiB0b2dnbGVIYW5kbGVyLFxuICAgICAgdmFsdWU6IHRydWUsXG4gICAgICBjbGFzc05hbWU6IGMuc3BhY2VyXG4gICAgfSlcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVuaGFuY2VkVGFibGVUb29sYmFyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaCc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXQnO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIGZsZXhHcm93OiAxXG4gIH0sXG4gIHNlYXJjaDoge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gIH0sXG4gIHNlYXJjaEljb246IHtcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZygzLjUpLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXG4gIH0sXG4gIGlucHV0Um9vdDoge1xuICAgIGNvbG9yOiAnaW5oZXJpdCdcbiAgfSxcbiAgaW5wdXRJbnB1dDoge1xuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSwgMSwgMSwgNSksXG4gICAgd2lkdGg6ICcxMDAlJ1xuICB9LFxuICBpbnB1dDoge1xuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKVxuICB9XG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaEFwcEJhcih7IHNldEZpbHRlciB9KSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxUb29sYmFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaEljb259PlxuICAgICAgICAgIDxTZWFyY2hJY29uIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nU2VhcmNo4oCmJ1xuICAgICAgICAgIGNsYXNzZXM9e3tcbiAgICAgICAgICAgIHJvb3Q6IGNsYXNzZXMuaW5wdXRSb290LFxuICAgICAgICAgICAgaW5wdXQ6IGNsYXNzZXMuaW5wdXRJbnB1dFxuICAgICAgICAgIH19XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0RmlsdGVyKGUudGFyZ2V0LnZhbHVlLnRyaW0oKSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L1Rvb2xiYXI+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmLCBGcmFnbWVudCBhcyBmLCBjcmVhdGVFbGVtZW50IGFzIGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgVGFibGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGUnO1xuXG5pbXBvcnQgTXlUYWJsZUhlYWQgZnJvbSAnLi9NeVRhYmxlSGVhZCc7XG5pbXBvcnQgTXlUYWJsZVRvb2xiYXIgZnJvbSAnLi9NeVRhYmxlVG9vbGJhcic7XG5pbXBvcnQgTXlUYWJsZUJvZHkgZnJvbSAnLi9NeVRhYmxlQm9keSc7XG5pbXBvcnQgQ3NzIGZyb20gJy4vQ3NzJztcblxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4uL1N0b3JlJztcblxuY29uc3QgdXNlVG9vbGJhclN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgYWJzb2x1dGU6IHtcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICBib3R0b206IHRoZW1lLnNwYWNpbmcoMTApLFxuICAgIHJpZ2h0OiB0aGVtZS5zcGFjaW5nKDUpLFxuICAgIHpJbmRleDogMjBcbiAgfSxcbiAgc3BhY2VyOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIHJpZ2h0OiAyMCxcbiAgICB6SW5kZXg6IDIwXG4gIH1cbn0pKTtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgd2lkdGg6ICcxMDAlJ1xuICB9LFxuICBwYXBlcjoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpXG4gIH0sXG4gIHRhYmxlOiB7XG4gICAgbWluV2lkdGg6IDc1MFxuICB9LFxuICB0YWJsZVdyYXBwZXI6IHtcbiAgICBvdmVyZmxvd1g6ICdhdXRvJ1xuICB9XG59KSk7XG5cbmNvbnN0IGNyZWF0ZURhdGEgPSAoc3R5LCBkZWYsIG1pZCwgaWQpID0+ICh7IHN0eSwgZGVmLCBtaWQsIGlkIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFbmhhbmNlZFRhYmxlKCkge1xuICBjb25zdCBjID0gdXNlVG9vbGJhclN0eWxlcygpO1xuICBjb25zdCBbeyB0b2dnbGUgfSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChDb250ZXh0KTtcblxuICByZXR1cm4gZShcbiAgICBQYXBlcixcbiAgICB7IGNsYXNzTmFtZTogYy5wYXBlciB9LFxuICAgIGUoTXlUYWJsZVRvb2xiYXIpLFxuICAgICF0b2dnbGVcbiAgICAgID8gZShcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogYy50YWJsZVdyYXBwZXIgfSxcbiAgICAgICAgICBlKFRhYmxlLCB7IGNsYXNzTmFtZTogYy50YWJsZSwgc2l6ZTogJ21lZGl1bScgfSwgZShNeVRhYmxlSGVhZCksIGUoTXlUYWJsZUJvZHkpKVxuICAgICAgICApXG4gICAgICA6IGUoQ3NzKVxuICApO1xufVxue1xuICAvKiA8VGFibGUgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYmxlfSBzaXplPSdtZWRpdW0nPiA8L1RhYmxlPiAqL1xufVxuLyogPEVuaGFuY2VkVGFibGVIZWFkMlxubnVtU2VsZWN0ZWQ9e3NlbGVjdGVkLmxlbmd0aH1cbm9yZGVyPXtvcmRlcn1cbm9yZGVyQnk9e29yZGVyQnl9XG5vblNlbGVjdEFsbENsaWNrPXtoYW5kbGVTZWxlY3RBbGxDbGlja31cbm9uUmVxdWVzdFNvcnQ9e2hhbmRsZVJlcXVlc3RTb3J0fVxucm93Q291bnQ9e2RhdGEubGVuZ3RofVxuLz4gKi9cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QsIEZyYWdtZW50IGFzIGYsIGNyZWF0ZUVsZW1lbnQgYXMgZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFRhYmxlIGZyb20gJy4vY29tcG9uZW50cy9UYWJsZSc7XG5pbXBvcnQgRHJhd2VyIGZyb20gJy4vY29tcG9uZW50cy9EcmF3ZXInO1xuXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDMwMDtcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdmbGV4J1xuICB9LFxuICBhcHBCYXI6IHtcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcbiAgICBtYXJnaW5MZWZ0OiBkcmF3ZXJXaWR0aFxuICB9LFxuXG4gIGNvbnRlbnQ6IHtcbiAgICBmbGV4R3JvdzogMSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5kZWZhdWx0XG4gIH1cbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGVybWFuZW50RHJhd2VyTGVmdCgpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbY3VycmVudERhdGEsIHNldEN1cnJlbnREYXRhXSA9IHVzZVN0YXRlKHt9KTtcblxuICAvLyBjb25zdCBDaGFuZ2UgPSBkb21haW4gPT4ge1xuICAvLyAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KG51bGwsIGQgPT4ge1xuICAvLyAgICAgc2V0Q3VycmVudERhdGEoeyBkb21haW4sIGRhdGE6IGQgfSk7XG4gIC8vICAgfSk7XG4gIC8vIH07XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBDaGFuZ2UoKTtcbiAgLy8gICBjaHJvbWUuc3RvcmFnZS5vbkNoYW5nZWQuYWRkTGlzdGVuZXIoKGNoYW5nZXMsIGFyZWFOYW1lKSA9PiB7XG4gIC8vICAgICBDaGFuZ2UoLi4uT2JqZWN0LmtleXMoY2hhbmdlcykpO1xuICAvLyAgIH0pO1xuICAvLyB9LCBbXSk7XG5cbiAgLy8gY29uc3QgZ2V0Q3VycmVudERhdGEgPSBkb21haW4gPT4ge1xuICAvLyAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KG51bGwsIGQgPT4ge1xuICAvLyAgICAgc2V0Q3VycmVudERhdGEoeyBkb21haW4sIGRhdGE6IGQgfSk7XG4gIC8vICAgfSk7XG4gIC8vIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxEcmF3ZXIgLz5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAgICA8VGFibGUgey4uLmN1cnJlbnREYXRhfSAvPlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IE9wdGlvbnMgZnJvbSAnLi9jb21wb25lbnRzL09wdGlvbnMnO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCB7IGNyZWF0ZU11aVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBibHVlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9ibHVlJztcblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBwcmltYXJ5OiBibHVlXG4gIH1cbn0pO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgPE9wdGlvbnMgLz5cbiAgPC9UaGVtZVByb3ZpZGVyPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=