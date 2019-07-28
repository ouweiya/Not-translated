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
        } else {
          var domain = new URL(sender.url).hostname;
          console.log(request, domain);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9jb21wb25lbnRzL0Nzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9jb21wb25lbnRzL0RyYXdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9jb21wb25lbnRzL015SW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3B0aW9uc1BhZ2UvY29tcG9uZW50cy9NeVRhYmxlQm9keS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9jb21wb25lbnRzL015VGFibGVIZWFkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL09wdGlvbnNQYWdlL2NvbXBvbmVudHMvTXlUYWJsZVRvb2xiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3B0aW9uc1BhZ2UvY29tcG9uZW50cy9TZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3B0aW9uc1BhZ2UvY29tcG9uZW50cy9UYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsidGhlbWUiLCJjcmVhdGVNdWlUaGVtZSIsInBhbGV0dGUiLCJwcmltYXJ5IiwiYmx1ZSIsInNlY29uZGFyeSIsImUiLCJUaGVtZVByb3ZpZGVyIiwiQ3NzQmFzZWxpbmUiLCJTdG9yZSIsIk9wdGlvbnMiLCJDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImRhdGEiLCJyb3dzIiwic2VsZWN0ZWQiLCJkb21haW4iLCJlcnJvciIsInRvZ2dsZSIsImRlYm91bmNlIiwiXyIsInRpbWUiLCJjYWxsYmFjayIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJwcm9wcyIsInVzZVJlZHVjZXIiLCJkaXNwYXRjaCIsInVzZUVmZmVjdCIsImNocm9tZSIsInN0b3JhZ2UiLCJzeW5jIiwiZ2V0IiwiZmlyc3QiLCJPYmplY3QiLCJrZXlzIiwiY29uc29sZSIsImxvZyIsInJ1bnRpbWUiLCJvbk1lc3NhZ2UiLCJhZGRMaXN0ZW5lciIsInJlcXVlc3QiLCJzZW5kZXIiLCJVUkwiLCJ1cmwiLCJob3N0bmFtZSIsImluY2x1ZGVzIiwic2V0IiwiTSIsInVzZU1lbW8iLCJQcm92aWRlciIsInZhbHVlIiwiY2hpbGRyZW4iLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiY29udGFpbmVyIiwiZGlzcGxheSIsImZsZXhXcmFwIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJ0ZXh0RmllbGQiLCJzcGFjaW5nIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwibGFzdCIsIm1hcmdpbkJvdHRvbSIsIk91dGxpbmVkVGV4dEZpZWxkcyIsImMiLCJ1c2VDb250ZXh0Iiwic2V0TG9jYWxDc3MiLCJjc3MiLCJ0YXJnZXQiLCJuZXdDc3MiLCJuZXdkYXRhIiwic2V0R2xvYmFsQ3NzIiwiYSIsImdsb2JhbENzcyIsIkNzcyIsInNocmluayIsImRyYXdlcldpZHRoIiwiZHJhd2VyIiwid2lkdGgiLCJmbGV4U2hyaW5rIiwib3ZlcmZsb3ciLCJkcmF3ZXJQYXBlciIsInRvb2xiYXIiLCJtaXhpbnMiLCJib3giLCJiYWNrZ3JvdW5kIiwiYm94U2l6aW5nIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJ0cmFuc2l0aW9uIiwic2hhZG93IiwiYm94U2hhZG93IiwidHh0IiwicGFkZGluZ0xlZnQiLCJyZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInNldEZpbHRlciIsImN1cnJlbnREYXRhIiwic2V0Q3VycmVudERhdGEiLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiU2VhcmNoQm94IiwiY2xhc3NOYW1lIiwiU2VhcmNoIiwiRGl2aWRlciIsInJlbmRlcmxpc3QiLCJmaWx0ZXIiLCJ2IiwibWFwIiwiaSIsIkxpc3RJdGVtIiwiYnV0dG9uIiwia2V5Iiwib25DbGljayIsIkxpc3RJdGVtVGV4dCIsImxpc3RCb3giLCJMaXN0IiwiZHJhd2VyT3B0aW9uIiwidmFyaWFudCIsImNsYXNzZXMiLCJwYXBlciIsImFuY2hvciIsIm9uU2Nyb2xsIiwiRHJhd2VyIiwicm9vdCIsImJvcmRlckJvdHRvbUNvbG9yIiwiSW5wdXRNZSIsInJvdyIsImZpZWxkIiwiRXJyb3IiLCJzZXRFcnJvciIsIlR4dCIsInNldFR4dCIsImZuIiwiU2V0IiwicmVkdWNlIiwiYWNjIiwidjIiLCJpc05hTiIsInBhcnNlRmxvYXQiLCJjb25jYXQiLCJTdWJtaXQiLCJvYmoyIiwib2JqIiwiZWRpdCIsInZhbCIsIm5ld1JvdyIsIm5ld1Jvd3MiLCJ1bmRlZmluZWQiLCJzdG9wUHJvcGFnYXRpb24iLCJNeUlucHV0IiwiTXlUYWJsZUJvZHkiLCJjcmVhdGVEYXRhIiwic3R5IiwiZGVmIiwibWlkIiwiaWQiLCJsZW5ndGgiLCJBcnJheSIsImhhbmRsZUNsaWNrIiwiaGVhZFJvd3MiLCJudW1lcmljIiwibGFiZWwiLCJFbmhhbmNlZFRhYmxlSGVhZCIsIm9yZGVyIiwic2V0T3JkZXIiLCJvcmRlckJ5Iiwic2V0T3JkZXJCeSIsIm51bVNlbGVjdGVkIiwicm93Q291bnQiLCJoYW5kbGVTZWxlY3RBbGxDbGljayIsImV2ZW50IiwiY2hlY2tlZCIsIm5ld1NlbGVjdGVkcyIsIm9uUmVxdWVzdFNvcnQiLCJwcm9wZXJ0eSIsImlzRGVzYyIsInJldmVyc2UiLCJjcmVhdGVTb3J0SGFuZGxlciIsInVzZVRvb2xiYXJTdHlsZXMiLCJhYnNvbHV0ZSIsImJvdHRvbSIsInJpZ2h0Iiwic3BhY2VyIiwidG9wIiwiRW5oYW5jZWRUYWJsZVRvb2xiYXIiLCJyb3dzMiIsImV2ZXJ5IiwiRGF0ZSIsIm5vdyIsIkljb24iLCJ0aXRsZSIsImljb24iLCJUb29sdGlwIiwiRmFiIiwiY29sb3IiLCJ0b2dnbGVIYW5kbGVyIiwiZiIsIkFkZEljb24iLCJEZWxldGVJY29uIiwiU3dpdGNoIiwib25DaGFuZ2UiLCJmbGV4R3JvdyIsInNlYXJjaCIsInNlYXJjaEljb24iLCJoZWlnaHQiLCJwb2ludGVyRXZlbnRzIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaW5wdXRSb290IiwiaW5wdXRJbnB1dCIsInBhZGRpbmciLCJpbnB1dCIsIlNlYXJjaEFwcEJhciIsInRyaW0iLCJ0YWJsZSIsIm1pbldpZHRoIiwidGFibGVXcmFwcGVyIiwib3ZlcmZsb3dYIiwiRW5oYW5jZWRUYWJsZSIsIlBhcGVyIiwiTXlUYWJsZVRvb2xiYXIiLCJUYWJsZSIsInNpemUiLCJNeVRhYmxlSGVhZCIsImFwcEJhciIsIm1hcmdpbkxlZnQiLCJjb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwiUGVybWFuZW50RHJhd2VyTGVmdCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtB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LENBQUNLO0FBQXhCLEtBQ0UsMkRBQUMsMERBQUQsT0FERixFQUdFO0FBQU0sYUFBUyxFQUFFTCxPQUFPLENBQUM0RztBQUF6QixLQUNFLDJEQUFDLHlEQUFELEVBQVd0SSxXQUFYLENBREYsQ0FIRixDQURGO0FBU0QsQzs7Ozs7Ozs7Ozs7O0FDckREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU0xRyxLQUFLLEdBQUdDLCtFQUFjLENBQUM7QUFDM0JDLFNBQU8sRUFBRTtBQUNQQyxXQUFPLEVBQUVDLG9FQUFJQTtBQUROO0FBRGtCLENBQUQsQ0FBNUI7QUFNQStPLGdEQUFRLENBQUNDLE1BQVQsQ0FDRSwyREFBQyxpRUFBRDtBQUFlLE9BQUssRUFBRXBQO0FBQXRCLEdBQ0UsMkRBQUMscUVBQUQsT0FERixFQUVFLDJEQUFDLDJEQUFELE9BRkYsQ0FERixFQUtFcVAsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBTEYsRSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXguanNcIixcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCBhcyBmLCBjcmVhdGVFbGVtZW50IGFzIGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJ3R5cGVmYWNlLXJvYm90byc7XG5pbXBvcnQgT3B0aW9ucyBmcm9tICcuL09wdGlvbnNQYWdlL2luZGV4JztcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XG5pbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgYmx1ZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvYmx1ZSc7XG5pbXBvcnQgU3RvcmUgZnJvbSAnLi9PcHRpb25zUGFnZS9TdG9yZSc7XG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgcHJpbWFyeTogYmx1ZSxcbiAgICBzZWNvbmRhcnk6IGJsdWVcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IGUoVGhlbWVQcm92aWRlciwgeyB0aGVtZSB9LCBlKENzc0Jhc2VsaW5lKSwgZShTdG9yZSwgbnVsbCwgZShPcHRpb25zKSkpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgRnJhZ21lbnQgYXMgZiwgY3JlYXRlRWxlbWVudCBhcyBlLCB1c2VSZWR1Y2VyLCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ2RhdGEnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGRhdGE6IGFjdGlvbi5kYXRhIH07XG4gICAgY2FzZSAncm93cyc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcm93czogYWN0aW9uLnJvd3MgfTtcbiAgICBjYXNlICdzZWxlY3RlZCc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc2VsZWN0ZWQ6IGFjdGlvbi5zZWxlY3RlZCB9O1xuICAgIGNhc2UgJ2RvbWFpbic6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZG9tYWluOiBhY3Rpb24uZG9tYWluIH07XG4gICAgY2FzZSAnZXJyb3InOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGVycm9yOiBhY3Rpb24uZXJyb3IgfTtcbiAgICBjYXNlICd0b2dnbGUnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHRvZ2dsZTogYWN0aW9uLnRvZ2dsZSB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmNvbnN0IGRlYm91bmNlID0gKF8gPT4ge1xuICBsZXQgdGltZSA9IG51bGw7XG4gIHJldHVybiBjYWxsYmFjayA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWUpO1xuICAgIHRpbWUgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfSwgMTAwKTtcbiAgfTtcbn0pKCk7XG5cbmNvbnN0IFN0b3JlID0gcHJvcHMgPT4ge1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwge1xuICAgIGRhdGE6IHt9LFxuICAgIHJvd3M6IFtdLFxuICAgIHNlbGVjdGVkOiBbXSxcbiAgICBkb21haW46ICcnLFxuICAgIGVycm9yOiBmYWxzZSxcbiAgICB0b2dnbGU6IGZhbHNlXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQobnVsbCwgZGF0YSA9PiB7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdkYXRhJywgZGF0YSB9KTtcbiAgICAgIGxldCBmaXJzdCA9IE9iamVjdC5rZXlzKGRhdGEpWzBdO1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnZG9tYWluJywgZG9tYWluOiBmaXJzdCA9PT0gJ2dsb2JhbENzcycgPyAnJyA6IGZpcnN0IH0pO1xuICAgICAgY29uc29sZS5sb2coJ+iOt+WPluaVsOaNricsIGRhdGEpO1xuICAgIH0pO1xuXG4gICAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChyZXF1ZXN0LCBzZW5kZXIpID0+IHtcbiAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KG51bGwsIGRhdGEgPT4ge1xuICAgICAgICBpZiAocmVxdWVzdCA9PT0gJ3NlbCcpIHtcbiAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdkYXRhJywgZGF0YSB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBkb21haW4gPSBuZXcgVVJMKHNlbmRlci51cmwpLmhvc3RuYW1lO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcXVlc3QsIGRvbWFpbik7XG5cbiAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoZGF0YSkuaW5jbHVkZXMoZG9tYWluKSkge1xuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnZG9tYWluJywgZG9tYWluIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRlYm91bmNlKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCflhajlsYDllYblupc6ICcsIHN0YXRlLmRhdGEpO1xuICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoc3RhdGUuZGF0YSk7XG4gICAgfSk7XG4gIH0sIFtzdGF0ZV0pO1xuXG4gIGNvbnN0IE0gPSB1c2VNZW1vKF8gPT4gZShDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBbc3RhdGUsIGRpc3BhdGNoXSB9LCBwcm9wcy5jaGlsZHJlbiksIFtzdGF0ZV0pO1xuICByZXR1cm4gTTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JlO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuLi9TdG9yZSc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgY29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgbWF4V2lkdGg6IDk2MCxcbiAgICBtYXJnaW46ICdhdXRvJ1xuICB9LFxuICB0ZXh0RmllbGQ6IHtcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoNCwgMSksXG4gICAgJyYgdGV4dGFyZWEnOiB7XG4gICAgICBmb250RmFtaWx5OiAnRmlyYSBDb2RlIFJlZ3VsYXInLFxuICAgICAgZm9udFNpemU6ICcxNHB4J1xuICAgIH1cbiAgfSxcbiAgbGFzdDoge1xuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZyg4KVxuICB9XG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE91dGxpbmVkVGV4dEZpZWxkcygpIHtcbiAgY29uc3QgYyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbeyBkYXRhLCBkb21haW4gfSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChDb250ZXh0KTtcblxuICBjb25zdCBzZXRMb2NhbENzcyA9IGUgPT4ge1xuICAgIGlmICghZG9tYWluKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNzcyA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IG5ld0NzcyA9IHsgLi4uZGF0YVtkb21haW5dLCBjc3MgfTtcbiAgICBsZXQgbmV3ZGF0YSA9IHsgLi4uZGF0YSwgW2RvbWFpbl06IG5ld0NzcyB9O1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ2RhdGEnLCBkYXRhOiBuZXdkYXRhIH0pO1xuICB9O1xuXG4gIGNvbnN0IHNldEdsb2JhbENzcyA9IGUgPT4ge1xuICAgIGNvbnN0IGNzcyA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGxldCBhID0geyAuLi5kYXRhLCBnbG9iYWxDc3M6IGNzcyB9O1xuICAgIGNvbnNvbGUubG9nKGEpO1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ2RhdGEnLCBkYXRhOiBhIH0pO1xuICB9O1xuXG4gIGxldCBDc3MgPSAnJztcbiAgaWYgKGRhdGFbZG9tYWluXSkge1xuICAgIENzcyA9IGRhdGFbZG9tYWluXS5jc3MgfHwgJyc7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgbWF4V2lkdGg9J21kJz5cbiAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgbGFiZWw9e2RvbWFpbiB8fCAn5pyq6YCJ5oupJ31cbiAgICAgICAgbXVsdGlsaW5lXG4gICAgICAgIHJvd3M9JzgnXG4gICAgICAgIGNsYXNzTmFtZT17Yy50ZXh0RmllbGR9XG4gICAgICAgIG1hcmdpbj0nbm9ybWFsJ1xuICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcbiAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgIG9uQ2hhbmdlPXtzZXRMb2NhbENzc31cbiAgICAgICAgaWQ9J3RleHQnXG4gICAgICAgIHZhbHVlPXtDc3N9XG4gICAgICAgIHBsYWNlaG9sZGVyPSfpu5jorqTov5DnlKjlhajlsYAnXG4gICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgIHNocmluazogdHJ1ZVxuICAgICAgICB9fVxuICAgICAgLz5cblxuICAgICAgPFRleHRGaWVsZFxuICAgICAgICBsYWJlbD0n5YWo5bGAJ1xuICAgICAgICBtdWx0aWxpbmVcbiAgICAgICAgcm93cz0nOCdcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjLnRleHRGaWVsZH0gJHtjLmxhc3R9YH1cbiAgICAgICAgbWFyZ2luPSdub3JtYWwnXG4gICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xuICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgdmFsdWU9e2RhdGEuZ2xvYmFsQ3NzfVxuICAgICAgICBvbkNoYW5nZT17c2V0R2xvYmFsQ3NzfVxuICAgICAgICBpZD0ndGV4dCdcbiAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgc2hyaW5rOiB0cnVlXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCwgRnJhZ21lbnQgYXMgZiwgY3JlYXRlRWxlbWVudCBhcyBlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgRHJhd2VyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RyYXdlcic7XG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcbmltcG9ydCBMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3QnO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9TZWFyY2gnO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4uL1N0b3JlJztcblxuY29uc3QgZHJhd2VyV2lkdGggPSAzMDA7XG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIGRyYXdlcjoge1xuICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcbiAgICBmbGV4U2hyaW5rOiAwLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICB9LFxuICBkcmF3ZXJQYXBlcjoge1xuICAgIHdpZHRoOiBkcmF3ZXJXaWR0aFxuICB9LFxuICB0b29sYmFyOiB0aGVtZS5taXhpbnMudG9vbGJhcixcbiAgYm94OiB7XG4gICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHpJbmRleDogMTAsXG4gICAgd2lkdGg6IGRyYXdlcldpZHRoIC0gNSxcbiAgICB0cmFuc2l0aW9uOiAnYm94LXNoYWRvdyAwLjNzIGVhc2UtaW4tb3V0J1xuICB9LFxuICBzaGFkb3c6IHtcbiAgICBib3hTaGFkb3c6ICcwcHggMnB4IDRweCAtMXB4ICMwMDAwMDAzMywgMHB4IDRweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xNCksIDBweCAxcHggMTBweCAwcHggcmdiYSgwLDAsMCwwLjEyKSdcbiAgfSxcbiAgdHh0OiB7XG4gICAgcGFkZGluZ0xlZnQ6IDhcbiAgfVxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBfID0+IHtcbiAgY29uc3QgYyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IFt0eHQsIHNldEZpbHRlcl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtjdXJyZW50RGF0YSwgc2V0Q3VycmVudERhdGFdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbeyBkYXRhLCBkb21haW4gfSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChDb250ZXh0KTtcbiAgLy8gY29uc29sZS5sb2coMTEsIHVzZUNvbnRleHQoQ29udGV4dCkpO1xuICAvLyBjb25zb2xlLmxvZygn5oq95bGJOicsIGRhdGEpO1xuXG4gIGNvbnN0IHNjcm9sbCA9IGUgPT4ge1xuICAgIGUudGFyZ2V0LnNjcm9sbFRvcCA+IDMwICYmIHJlZi5jdXJyZW50LmNsYXNzTGlzdC5hZGQoYy5zaGFkb3cpO1xuICAgIGUudGFyZ2V0LnNjcm9sbFRvcCA8IDMwICYmIHJlZi5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoYy5zaGFkb3cpO1xuICB9O1xuXG4gIGNvbnN0IFNlYXJjaEJveCA9IGUoJ2RpdicsIHsgY2xhc3NOYW1lOiBjLmJveCwgcmVmIH0sIGUoU2VhcmNoLCB7IHNldEZpbHRlciB9KSwgZShEaXZpZGVyKSk7XG5cbiAgY29uc3QgcmVuZGVybGlzdCA9IE9iamVjdC5rZXlzKGRhdGEpXG4gICAgLmZpbHRlcih2ID0+IHYgIT09ICdnbG9iYWxDc3MnKVxuICAgIC5maWx0ZXIodiA9PiB2LmluY2x1ZGVzKHR4dCkpXG4gICAgLm1hcCgodiwgaSkgPT5cbiAgICAgIGUoXG4gICAgICAgIExpc3RJdGVtLFxuICAgICAgICB7IGJ1dHRvbjogdHJ1ZSwga2V5OiBpLCBvbkNsaWNrOiBlID0+IGRpc3BhdGNoKHsgdHlwZTogJ2RvbWFpbicsIGRvbWFpbjogdiB9KSwgc2VsZWN0ZWQ6IGRvbWFpbiA9PT0gdiB9LFxuICAgICAgICBlKExpc3RJdGVtVGV4dCwgeyBwcmltYXJ5OiB2LCBjbGFzc05hbWU6IGMudHh0IH0pXG4gICAgICApXG4gICAgKTtcblxuICBjb25zdCBsaXN0Qm94ID0gZShMaXN0LCBudWxsLCByZW5kZXJsaXN0KTtcblxuICBjb25zdCBkcmF3ZXJPcHRpb24gPSB7XG4gICAgY2xhc3NOYW1lOiBjLmRyYXdlcixcbiAgICB2YXJpYW50OiAncGVybWFuZW50JyxcbiAgICBjbGFzc2VzOiB7IHBhcGVyOiBjLmRyYXdlclBhcGVyIH0sXG4gICAgYW5jaG9yOiAnbGVmdCcsXG4gICAgb25TY3JvbGw6IHNjcm9sbFxuICB9O1xuXG4gIHJldHVybiBlKERyYXdlciwgZHJhd2VyT3B0aW9uLCBTZWFyY2hCb3gsIGUoJ2RpdicsIHsgY2xhc3NOYW1lOiBjLnRvb2xiYXIgfSksIGxpc3RCb3gpO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIEZyYWdtZW50IGFzIGYsIGNyZWF0ZUVsZW1lbnQgYXMgZSwgdXNlQ29udGV4dCwgdXNlTWVtbywgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnLi4vU3RvcmUnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICAnJiBkaXY6OmJlZm9yZSc6IHtcbiAgICAgIGJvcmRlckJvdHRvbUNvbG9yOiAnIzAwMDAwMDAwJ1xuICAgIH1cbiAgfVxufSkpO1xuXG5jb25zdCBJbnB1dE1lID0gKHsgcm93LCBmaWVsZCB9KSA9PiB7XG4gIGNvbnN0IGMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW3sgcm93cywgZG9tYWluLCBkYXRhLCBlcnJvciB9LCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xuICBjb25zdCBbRXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW1R4dCwgc2V0VHh0XSA9IHVzZVN0YXRlKCcnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEVycm9yKGZhbHNlKTtcbiAgICBzZXRUeHQoJycpO1xuICB9LCBbZGF0YV0pO1xuXG4gIGNvbnN0IGZuID0gdiA9PiB7XG4gICAgcmV0dXJuIFsuLi5uZXcgU2V0KHJvd3MucmVkdWNlKChhY2MsIHYyKSA9PiAodjJbdl0gJiYgaXNOYU4ocGFyc2VGbG9hdCh2Mlt2XSkpID8gYWNjLmNvbmNhdCh2Mlt2XSkgOiBhY2MpLCBbXSkpXTtcbiAgfTtcblxuICBjb25zdCBTdWJtaXQgPSBlID0+IHtcbiAgICBsZXQgb2JqMiA9IFsnc3R5JywgJ2RlZicsICdtaWQnXS5yZWR1Y2UoKG9iaiwgdikgPT4ge1xuICAgICAgcmV0dXJuIHsgLi4ub2JqLCBbdl06IGZuKHYpIH07XG4gICAgfSwge30pO1xuICAgIG9iajIgPSB7IC4uLmRhdGFbZG9tYWluXSwgLi4ub2JqMiB9O1xuICAgIGNvbnNvbGUubG9nKCdvYmoyJywgb2JqMik7XG5cbiAgICBsZXQgb2JqID0geyAuLi5kYXRhLCBbZG9tYWluXTogb2JqMiB9O1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ2RhdGEnLCBkYXRhOiBvYmogfSk7XG4gIH07XG5cbiAgY29uc3QgZWRpdCA9IGUgPT4ge1xuICAgIGlmICghZG9tYWluKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGlmICghaXNOYU4ocGFyc2VGbG9hdCh2YWwpKSkge1xuICAgICAgc2V0RXJyb3IodHJ1ZSk7XG4gICAgICBzZXRUeHQoJ+mAieaLqeWZqOS4jeiDveaYr+aVsOWtlycpO1xuICAgIH0gZWxzZSBpZiAocm93cy5tYXAodiA9PiB2W2ZpZWxkXSkuaW5jbHVkZXModmFsKSAmJiB2YWwpIHtcbiAgICAgIHNldEVycm9yKHRydWUpO1xuICAgICAgc2V0VHh0KCfph43lpI3pgInmi6nlmagnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXJyb3IoZmFsc2UpO1xuICAgICAgc2V0VHh0KCcnKTtcbiAgICB9XG5cbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdlcnJvcicsIGVycm9yOiB2YWwgfSk7XG5cbiAgICBjb25zdCBuZXdSb3cgPSB7IC4uLnJvdywgW2ZpZWxkXTogdmFsIH07XG4gICAgbGV0IG5ld1Jvd3MgPSByb3dzLm1hcCh2ID0+ICh2ID09PSByb3cgPyBuZXdSb3cgOiB2KSk7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAncm93cycsIHJvd3M6IG5ld1Jvd3MgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8VGV4dEZpZWxkXG4gICAgICB2YWx1ZT17cm93W2ZpZWxkXSA9PT0gdW5kZWZpbmVkID8gJycgOiByb3dbZmllbGRdfVxuICAgICAgb25DaGFuZ2U9e2VkaXR9XG4gICAgICBjbGFzc2VzPXt7IHJvb3Q6IGMucm9vdCB9fVxuICAgICAgb25DbGljaz17ZSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfVxuICAgICAgb25CbHVyPXtTdWJtaXR9XG4gICAgICBsYWJlbD17VHh0fVxuICAgICAgZXJyb3I9eyEhKGVycm9yID09PSByb3dbZmllbGRdICYmIGVycm9yICYmIEVycm9yKX1cbiAgICAvPlxuICApO1xufTtcblxuY29uc3QgTXlJbnB1dCA9IHByb3BzID0+IHtcbiAgcmV0dXJuIHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCd4eHh4eHh4Jyk7XG4gICAgcmV0dXJuIDxJbnB1dE1lIHsuLi5wcm9wc30gLz47XG4gIH0sIFtwcm9wcy5yb3ddKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE15SW5wdXQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgYXMgZiwgY3JlYXRlRWxlbWVudCBhcyBlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHknO1xuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94JztcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuLi9TdG9yZSc7XG5pbXBvcnQgSW5wdXRNZSBmcm9tICcuL015SW5wdXQnO1xuXG5jb25zdCBNeVRhYmxlQm9keSA9IF8gPT4ge1xuICBjb25zdCBbeyBkYXRhLCBzZWxlY3RlZCwgcm93cywgZG9tYWluIH0sIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XG4gIGNvbnN0IGNyZWF0ZURhdGEgPSAoc3R5LCBkZWYsIG1pZCwgaWQpID0+ICh7IHN0eSwgZGVmLCBtaWQsIGlkIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coeyBkYXRhLCBkb21haW4gfSk7XG4gICAgY29uc29sZS5sb2coJ2RhdGFbZG9tYWluXT0+ICcsIGRhdGFbZG9tYWluXSk7XG5cbiAgICBpZiAoZGF0YVtkb21haW5dKSB7XG4gICAgICBsZXQgeyBzdHksIGRlZiwgbWlkIH0gPSBkYXRhW2RvbWFpbl07XG4gICAgICBjb25zdCBpID0gWyBzdHksIGRlZiwgbWlkXS5yZWR1Y2UoKGFjYywgdikgPT4gKHYubGVuZ3RoID4gYWNjID8gdi5sZW5ndGggOiBhY2MpLCAwKTtcbiAgICAgIGNvbnN0IHJvd3MgPSBbLi4uQXJyYXkoaSldLm1hcCgodiwgaSkgPT4gY3JlYXRlRGF0YShzdHlbaV0gfHwgJycsIGRlZltpXSB8fCAnJywgbWlkW2ldIHx8ICcnLCBpKSk7XG4gICAgICBjb25zb2xlLmxvZyhyb3dzLCAxMTEpO1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAncm93cycsIHJvd3MgfSk7XG5cbiAgICAgIGlmICghcm93cy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3Qgb2JqID0geyAuLi5kYXRhIH07XG4gICAgICAgIGRlbGV0ZSBvYmpbZG9tYWluXTtcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnZGF0YScsIGRhdGE6IG9iaiB9KTtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5yZW1vdmUoZG9tYWluKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ3NlbGVjdGVkJywgc2VsZWN0ZWQ6IFtdIH0pO1xuICAgIH07XG4gIH0sIFtkYXRhLCBkb21haW5dKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChlLCBpZCkgPT4ge1xuICAgIHNlbGVjdGVkLmluY2x1ZGVzKGlkKVxuICAgICAgPyBkaXNwYXRjaCh7IHR5cGU6ICdzZWxlY3RlZCcsIHNlbGVjdGVkOiBzZWxlY3RlZC5maWx0ZXIodiA9PiB2ICE9PSBpZCkgfSlcbiAgICAgIDogZGlzcGF0Y2goeyB0eXBlOiAnc2VsZWN0ZWQnLCBzZWxlY3RlZDogc2VsZWN0ZWQuY29uY2F0KGlkKSB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxUYWJsZUJvZHk+XG4gICAgICB7cm93cy5sZW5ndGggPyAoXG4gICAgICAgIHJvd3MubWFwKChyb3csIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFRhYmxlUm93IGhvdmVyIG9uQ2xpY2s9e2UgPT4gaGFuZGxlQ2xpY2soZSwgcm93LmlkKX0ga2V5PXtpfSBzZWxlY3RlZD17c2VsZWN0ZWQuaW5jbHVkZXMocm93LmlkKX0+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgcGFkZGluZz0nY2hlY2tib3gnPlxuICAgICAgICAgICAgICAgIDxDaGVja2JveCBjaGVja2VkPXtzZWxlY3RlZC5pbmNsdWRlcyhyb3cuaWQpfSAvPlxuICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzY29wZT0ncm93Jz5cbiAgICAgICAgICAgICAgICA8SW5wdXRNZSByb3c9e3Jvd30gZmllbGQ9J3N0eScgLz5cbiAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249J2NlbnRlcic+XG4gICAgICAgICAgICAgICAgPElucHV0TWUgcm93PXtyb3d9IGZpZWxkPSdkZWYnIC8+XG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPSdjZW50ZXInPlxuICAgICAgICAgICAgICAgIDxJbnB1dE1lIHJvdz17cm93fSBmaWVsZD0nbWlkJyAvPlxuICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgICkgOiAoXG4gICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICA8VGFibGVDZWxsIGNvbFNwYW49ezR9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgYWxpZ249J2NlbnRlcicgdmFyaWFudD0nc3VidGl0bGUyJyBjb2xvcj0ndGV4dFNlY29uZGFyeSc+XG4gICAgICAgICAgICAgIOayoeacieaVsOaNrlxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgKX1cbiAgICA8L1RhYmxlQm9keT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE15VGFibGVCb2R5O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBGcmFnbWVudCBhcyBmLCBjcmVhdGVFbGVtZW50IGFzIGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGFibGVIZWFkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZCc7XG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3cnO1xuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGwnO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94JztcbmltcG9ydCBUYWJsZVNvcnRMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVNvcnRMYWJlbCc7XG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnLi4vU3RvcmUnO1xuXG5jb25zdCBoZWFkUm93cyA9IFtcbiAgeyBpZDogJ3N0eScsIG51bWVyaWM6IGZhbHNlLCBsYWJlbDogJ+i/kOeUqOagt+W8jycgfSxcbiAgeyBpZDogJ2RlZicsIG51bWVyaWM6IHRydWUsIGxhYmVsOiAn5LiN6L+Q55So5qC35byPJyB9LFxuICB7IGlkOiAnbWlkJywgbnVtZXJpYzogdHJ1ZSwgbGFiZWw6ICflvLrliLbnv7vor5EnIH1cbl07XG5cbmNvbnN0IEVuaGFuY2VkVGFibGVIZWFkID0gcHJvcHMgPT4ge1xuICBjb25zdCBbeyBzZWxlY3RlZCwgcm93cywgZGF0YSB9LCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xuXG4gIGNvbnN0IFtvcmRlciwgc2V0T3JkZXJdID0gdXNlU3RhdGUoJ2FzYycpO1xuICBjb25zdCBbb3JkZXJCeSwgc2V0T3JkZXJCeV0gPSB1c2VTdGF0ZSgnc3R5Jyk7XG4gIGNvbnN0IG51bVNlbGVjdGVkID0gc2VsZWN0ZWQubGVuZ3RoO1xuICBjb25zdCByb3dDb3VudCA9IHJvd3MubGVuZ3RoO1xuXG4gIGNvbnN0IGhhbmRsZVNlbGVjdEFsbENsaWNrID0gZXZlbnQgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgY29uc3QgbmV3U2VsZWN0ZWRzID0gcm93cy5tYXAocm93ID0+IHJvdy5pZCk7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdzZWxlY3RlZCcsIHNlbGVjdGVkOiBuZXdTZWxlY3RlZHMgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGRpc3BhdGNoKHsgdHlwZTogJ3NlbGVjdGVkJywgc2VsZWN0ZWQ6IFtdIH0pO1xuXG4gIH07XG5cbiAgY29uc3Qgb25SZXF1ZXN0U29ydCA9IChlLCBwcm9wZXJ0eSkgPT4ge1xuICAgIGNvbnN0IGlzRGVzYyA9IG9yZGVyQnkgPT09IHByb3BlcnR5ICYmIG9yZGVyID09PSAnZGVzYyc7XG4gICAgc2V0T3JkZXIoaXNEZXNjID8gJ2FzYycgOiAnZGVzYycpO1xuICAgIHNldE9yZGVyQnkocHJvcGVydHkpO1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ3Jvd3MnLCByb3dzOiBbLi4ucm93c10ucmV2ZXJzZSgpIH0pO1xuICB9O1xuICBjb25zdCBjcmVhdGVTb3J0SGFuZGxlciA9IHByb3BlcnR5ID0+IGUgPT4gb25SZXF1ZXN0U29ydChlLCBwcm9wZXJ0eSk7XG5cbiAgcmV0dXJuIChcbiAgICA8VGFibGVIZWFkPlxuICAgICAgPFRhYmxlUm93PlxuICAgICAgICA8VGFibGVDZWxsIHBhZGRpbmc9J2NoZWNrYm94Jz5cbiAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgIGluZGV0ZXJtaW5hdGU9e251bVNlbGVjdGVkID4gMCAmJiBudW1TZWxlY3RlZCA8IHJvd0NvdW50fVxuICAgICAgICAgICAgY2hlY2tlZD17ISFyb3dDb3VudCAmJiBudW1TZWxlY3RlZCA9PT0gcm93Q291bnR9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VsZWN0QWxsQ2xpY2t9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9UYWJsZUNlbGw+XG5cbiAgICAgICAge2hlYWRSb3dzLm1hcCgocm93LCBpKSA9PiAoXG4gICAgICAgICAgPFRhYmxlQ2VsbCBrZXk9e2l9IGFsaWduPXtyb3cubnVtZXJpYyA/ICdjZW50ZXInIDogJ2xlZnQnfSBzb3J0RGlyZWN0aW9uPXtvcmRlckJ5ID09PSByb3cuaWQgPyBvcmRlciA6IGZhbHNlfT5cbiAgICAgICAgICAgIDxUYWJsZVNvcnRMYWJlbCBhY3RpdmU9e29yZGVyQnkgPT09IHJvdy5pZH0gZGlyZWN0aW9uPXtvcmRlcn0gb25DbGljaz17Y3JlYXRlU29ydEhhbmRsZXIocm93LmlkKX0+XG4gICAgICAgICAgICAgIHtyb3cubGFiZWx9XG4gICAgICAgICAgICA8L1RhYmxlU29ydExhYmVsPlxuICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICApKX1cbiAgICAgIDwvVGFibGVSb3c+XG4gICAgPC9UYWJsZUhlYWQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFbmhhbmNlZFRhYmxlSGVhZDtcblxuLy8gY29uc3QgeyBvblNlbGVjdEFsbENsaWNrLCBvcmRlciwgb3JkZXJCeSwgbnVtU2VsZWN0ZWQsIHJvd0NvdW50LCBvblJlcXVlc3RTb3J0IH0gPSBwcm9wcztcblxuLy8gY29uc3QgRW5oYW5jZWRUYWJsZUhlYWQyID0gUmVhY3QubWVtbyhcbi8vICAgcHJvcHMgPT4gPEVuaGFuY2VkVGFibGVIZWFkIHsuLi5wcm9wc30gLz4sXG4vLyAgIChwcmV2UHJvcHMsIG5leHRQcm9wcykgPT4ge1xuLy8gICAgIGlmIChcbi8vICAgICAgIHByZXZQcm9wcy5udW1TZWxlY3RlZCA9PT0gbmV4dFByb3BzLm51bVNlbGVjdGVkICYmXG4vLyAgICAgICBwcmV2UHJvcHMub3JkZXIgPT09IG5leHRQcm9wcy5vcmRlciAmJlxuLy8gICAgICAgcHJldlByb3BzLm9yZGVyQnkgPT09IG5leHRQcm9wcy5vcmRlckJ5ICYmXG4vLyAgICAgICBwcmV2UHJvcHMucm93Q291bnQgPT09IG5leHRQcm9wcy5yb3dDb3VudFxuLy8gICAgIClcbi8vICAgICAgIHJldHVybiB0cnVlO1xuLy8gICAgIHJldHVybiBmYWxzZTtcbi8vICAgfVxuLy8gKTtcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCBhcyBmLCBjcmVhdGVFbGVtZW50IGFzIGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcCc7XG5pbXBvcnQgRmFiIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ZhYic7XG5pbXBvcnQgQWRkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkJztcbmltcG9ydCBTd2l0Y2ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3dpdGNoJztcbmltcG9ydCBEZWxldGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9EZWxldGUnO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4uL1N0b3JlJztcblxuY29uc3QgdXNlVG9vbGJhclN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgYWJzb2x1dGU6IHtcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICBib3R0b206IHRoZW1lLnNwYWNpbmcoMTApLFxuICAgIHJpZ2h0OiB0aGVtZS5zcGFjaW5nKDUpLFxuICAgIHpJbmRleDogMjBcbiAgfSxcbiAgc3BhY2VyOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIHJpZ2h0OiAyMCxcbiAgICB6SW5kZXg6IDIwXG4gIH1cbn0pKTtcblxuY29uc3QgRW5oYW5jZWRUYWJsZVRvb2xiYXIgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IGMgPSB1c2VUb29sYmFyU3R5bGVzKCk7XG4gIGNvbnN0IFt7IHNlbGVjdGVkLCBkYXRhLCBkb21haW4sIHJvd3MsIHRvZ2dsZSB9LCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xuXG4gIGNvbnN0IGNyZWF0ZURhdGEgPSAoc3R5LCBkZWYsIG1pZCwgaWQpID0+ICh7IHN0eSwgZGVmLCBtaWQsIGlkIH0pO1xuXG4gIGNvbnN0IHJlbW92ZSA9IF8gPT4ge1xuICAgIGxldCByb3dzMiA9IHJvd3MuZmlsdGVyKHYgPT4gIXNlbGVjdGVkLmluY2x1ZGVzKHYuaWQpKTtcblxuICAgIGxldCBvYmoyID0gWydzdHknLCAnZGVmJywgJ21pZCddLnJlZHVjZSgob2JqLCB2KSA9PiB7XG4gICAgICByZXR1cm4geyAuLi5vYmosIFt2XTogcm93czIucmVkdWNlKChhY2MsIHYyKSA9PiAodjJbdl0gPyBhY2MuY29uY2F0KHYyW3ZdKSA6IGFjYyksIFtdKSB9O1xuICAgIH0sIHt9KTtcbiAgICBvYmoyID0geyAuLi5kYXRhW2RvbWFpbl0sIC4uLm9iajIgfTtcbiAgICBsZXQgb2JqID0geyAuLi5kYXRhLCBbZG9tYWluXTogb2JqMiB9O1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ2RhdGEnLCBkYXRhOiBvYmogfSk7XG5cbiAgICBjb25zb2xlLmxvZygneHh4eCcsIHJvd3MyKTtcbiAgfTtcblxuICBjb25zdCBhZGQgPSBfID0+IHtcbiAgICBpZiAocm93cy5ldmVyeSh2ID0+IHYuc3R5IHx8IHYuZGVmIHx8IHYubWlkKSkge1xuICAgICAgY29uc3Qgcm93ID0gY3JlYXRlRGF0YSh1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBEYXRlLm5vdygpKTtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ3Jvd3MnLCByb3dzOiByb3dzLmNvbmNhdChyb3cpIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBJY29uID0gKHRpdGxlLCBjYWxsYmFjaywgaWNvbikgPT4ge1xuICAgIHJldHVybiBlKFRvb2x0aXAsIHsgdGl0bGUgfSwgZShGYWIsIHsgY29sb3I6ICdwcmltYXJ5JywgY2xhc3NOYW1lOiBjLmFic29sdXRlLCBvbkNsaWNrOiBjYWxsYmFjayB9LCBlKGljb24pKSk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlSGFuZGxlciA9IF8gPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ3RvZ2dsZScsIHRvZ2dsZTogIXRvZ2dsZSB9KTtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdzZWxlY3RlZCcsIHNlbGVjdGVkOiBbXSB9KTtcbiAgfTtcblxuICByZXR1cm4gZShcbiAgICBmLFxuICAgIG51bGwsXG4gICAgIXRvZ2dsZSAmJiAoc2VsZWN0ZWQubGVuZ3RoID09PSAwID8gSWNvbignQWRkJywgYWRkLCBBZGRJY29uKSA6IEljb24oJ0RlbGV0ZScsIHJlbW92ZSwgRGVsZXRlSWNvbikpLFxuICAgIGUoU3dpdGNoLCB7XG4gICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgY2hlY2tlZDogdG9nZ2xlLFxuICAgICAgb25DaGFuZ2U6IHRvZ2dsZUhhbmRsZXIsXG4gICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgIGNsYXNzTmFtZTogYy5zcGFjZXJcbiAgICB9KVxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRW5oYW5jZWRUYWJsZVRvb2xiYXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoJztcbmltcG9ydCBJbnB1dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dCc7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgZmxleEdyb3c6IDFcbiAgfSxcbiAgc2VhcmNoOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgfSxcbiAgc2VhcmNoSWNvbjoge1xuICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDMuNSksXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcbiAgfSxcbiAgaW5wdXRSb290OiB7XG4gICAgY29sb3I6ICdpbmhlcml0J1xuICB9LFxuICBpbnB1dElucHV0OiB7XG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxLCAxLCAxLCA1KSxcbiAgICB3aWR0aDogJzEwMCUnXG4gIH0sXG4gIGlucHV0OiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpXG4gIH1cbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoQXBwQmFyKHsgc2V0RmlsdGVyIH0pIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPFRvb2xiYXIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNofT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoSWNvbn0+XG4gICAgICAgICAgPFNlYXJjaEljb24gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdTZWFyY2jigKYnXG4gICAgICAgICAgY2xhc3Nlcz17e1xuICAgICAgICAgICAgcm9vdDogY2xhc3Nlcy5pbnB1dFJvb3QsXG4gICAgICAgICAgICBpbnB1dDogY2xhc3Nlcy5pbnB1dElucHV0XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRGaWx0ZXIoZS50YXJnZXQudmFsdWUudHJpbSgpKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvVG9vbGJhcj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYsIEZyYWdtZW50IGFzIGYsIGNyZWF0ZUVsZW1lbnQgYXMgZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBUYWJsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZSc7XG5cbmltcG9ydCBNeVRhYmxlSGVhZCBmcm9tICcuL015VGFibGVIZWFkJztcbmltcG9ydCBNeVRhYmxlVG9vbGJhciBmcm9tICcuL015VGFibGVUb29sYmFyJztcbmltcG9ydCBNeVRhYmxlQm9keSBmcm9tICcuL015VGFibGVCb2R5JztcbmltcG9ydCBDc3MgZnJvbSAnLi9Dc3MnO1xuXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnLi4vU3RvcmUnO1xuXG5jb25zdCB1c2VUb29sYmFyU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBhYnNvbHV0ZToge1xuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIGJvdHRvbTogdGhlbWUuc3BhY2luZygxMCksXG4gICAgcmlnaHQ6IHRoZW1lLnNwYWNpbmcoNSksXG4gICAgekluZGV4OiAyMFxuICB9LFxuICBzcGFjZXI6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgcmlnaHQ6IDIwLFxuICAgIHpJbmRleDogMjBcbiAgfVxufSkpO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICB3aWR0aDogJzEwMCUnXG4gIH0sXG4gIHBhcGVyOiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMilcbiAgfSxcbiAgdGFibGU6IHtcbiAgICBtaW5XaWR0aDogNzUwXG4gIH0sXG4gIHRhYmxlV3JhcHBlcjoge1xuICAgIG92ZXJmbG93WDogJ2F1dG8nXG4gIH1cbn0pKTtcblxuY29uc3QgY3JlYXRlRGF0YSA9IChzdHksIGRlZiwgbWlkLCBpZCkgPT4gKHsgc3R5LCBkZWYsIG1pZCwgaWQgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVuaGFuY2VkVGFibGUoKSB7XG4gIGNvbnN0IGMgPSB1c2VUb29sYmFyU3R5bGVzKCk7XG4gIGNvbnN0IFt7IHRvZ2dsZSB9LCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xuXG4gIHJldHVybiBlKFxuICAgIFBhcGVyLFxuICAgIHsgY2xhc3NOYW1lOiBjLnBhcGVyIH0sXG4gICAgZShNeVRhYmxlVG9vbGJhciksXG4gICAgIXRvZ2dsZVxuICAgICAgPyBlKFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiBjLnRhYmxlV3JhcHBlciB9LFxuICAgICAgICAgIGUoVGFibGUsIHsgY2xhc3NOYW1lOiBjLnRhYmxlLCBzaXplOiAnbWVkaXVtJyB9LCBlKE15VGFibGVIZWFkKSwgZShNeVRhYmxlQm9keSkpXG4gICAgICAgIClcbiAgICAgIDogZShDc3MpXG4gICk7XG59XG57XG4gIC8qIDxUYWJsZSBjbGFzc05hbWU9e2NsYXNzZXMudGFibGV9IHNpemU9J21lZGl1bSc+IDwvVGFibGU+ICovXG59XG4vKiA8RW5oYW5jZWRUYWJsZUhlYWQyXG5udW1TZWxlY3RlZD17c2VsZWN0ZWQubGVuZ3RofVxub3JkZXI9e29yZGVyfVxub3JkZXJCeT17b3JkZXJCeX1cbm9uU2VsZWN0QWxsQ2xpY2s9e2hhbmRsZVNlbGVjdEFsbENsaWNrfVxub25SZXF1ZXN0U29ydD17aGFuZGxlUmVxdWVzdFNvcnR9XG5yb3dDb3VudD17ZGF0YS5sZW5ndGh9XG4vPiAqL1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCwgRnJhZ21lbnQgYXMgZiwgY3JlYXRlRWxlbWVudCBhcyBlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgVGFibGUgZnJvbSAnLi9jb21wb25lbnRzL1RhYmxlJztcbmltcG9ydCBEcmF3ZXIgZnJvbSAnLi9jb21wb25lbnRzL0RyYXdlcic7XG5cbmNvbnN0IGRyYXdlcldpZHRoID0gMzAwO1xuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnXG4gIH0sXG4gIGFwcEJhcjoge1xuICAgIHdpZHRoOiBgY2FsYygxMDAlIC0gJHtkcmF3ZXJXaWR0aH1weClgLFxuICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoXG4gIH0sXG5cbiAgY29udGVudDoge1xuICAgIGZsZXhHcm93OiAxLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLmRlZmF1bHRcbiAgfVxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQZXJtYW5lbnREcmF3ZXJMZWZ0KCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtjdXJyZW50RGF0YSwgc2V0Q3VycmVudERhdGFdID0gdXNlU3RhdGUoe30pO1xuXG4gIC8vIGNvbnN0IENoYW5nZSA9IGRvbWFpbiA9PiB7XG4gIC8vICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQobnVsbCwgZCA9PiB7XG4gIC8vICAgICBzZXRDdXJyZW50RGF0YSh7IGRvbWFpbiwgZGF0YTogZCB9KTtcbiAgLy8gICB9KTtcbiAgLy8gfTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIENoYW5nZSgpO1xuICAvLyAgIGNocm9tZS5zdG9yYWdlLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcigoY2hhbmdlcywgYXJlYU5hbWUpID0+IHtcbiAgLy8gICAgIENoYW5nZSguLi5PYmplY3Qua2V5cyhjaGFuZ2VzKSk7XG4gIC8vICAgfSk7XG4gIC8vIH0sIFtdKTtcblxuICAvLyBjb25zdCBnZXRDdXJyZW50RGF0YSA9IGRvbWFpbiA9PiB7XG4gIC8vICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQobnVsbCwgZCA9PiB7XG4gIC8vICAgICBzZXRDdXJyZW50RGF0YSh7IGRvbWFpbiwgZGF0YTogZCB9KTtcbiAgLy8gICB9KTtcbiAgLy8gfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPERyYXdlciAvPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgIDxUYWJsZSB7Li4uY3VycmVudERhdGF9IC8+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgT3B0aW9ucyBmcm9tICcuL2NvbXBvbmVudHMvT3B0aW9ucyc7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xuaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IGJsdWUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL2JsdWUnO1xuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIHByaW1hcnk6IGJsdWVcbiAgfVxufSk7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICA8T3B0aW9ucyAvPlxuICA8L1RoZW1lUHJvdmlkZXI+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==