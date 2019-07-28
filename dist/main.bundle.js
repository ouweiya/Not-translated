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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9jb21wb25lbnRzL0Nzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9jb21wb25lbnRzL0RyYXdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9jb21wb25lbnRzL015SW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3B0aW9uc1BhZ2UvY29tcG9uZW50cy9NeVRhYmxlQm9keS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9jb21wb25lbnRzL015VGFibGVIZWFkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL09wdGlvbnNQYWdlL2NvbXBvbmVudHMvTXlUYWJsZVRvb2xiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3B0aW9uc1BhZ2UvY29tcG9uZW50cy9TZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3B0aW9uc1BhZ2UvY29tcG9uZW50cy9UYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsidGhlbWUiLCJjcmVhdGVNdWlUaGVtZSIsInBhbGV0dGUiLCJwcmltYXJ5IiwiYmx1ZSIsInNlY29uZGFyeSIsImUiLCJUaGVtZVByb3ZpZGVyIiwiQ3NzQmFzZWxpbmUiLCJTdG9yZSIsIk9wdGlvbnMiLCJDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImRhdGEiLCJyb3dzIiwic2VsZWN0ZWQiLCJkb21haW4iLCJlcnJvciIsInRvZ2dsZSIsImRlYm91bmNlIiwiXyIsInRpbWUiLCJjYWxsYmFjayIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJwcm9wcyIsInVzZVJlZHVjZXIiLCJkaXNwYXRjaCIsInVzZUVmZmVjdCIsImNocm9tZSIsInN0b3JhZ2UiLCJzeW5jIiwiZ2V0IiwiZmlyc3QiLCJPYmplY3QiLCJrZXlzIiwiY29uc29sZSIsImxvZyIsInJ1bnRpbWUiLCJvbk1lc3NhZ2UiLCJhZGRMaXN0ZW5lciIsInJlcXVlc3QiLCJzZW5kZXIiLCJVUkwiLCJ1cmwiLCJob3N0bmFtZSIsImluY2x1ZGVzIiwic2V0IiwiTSIsInVzZU1lbW8iLCJQcm92aWRlciIsInZhbHVlIiwiY2hpbGRyZW4iLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiY29udGFpbmVyIiwiZGlzcGxheSIsImZsZXhXcmFwIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJ0ZXh0RmllbGQiLCJzcGFjaW5nIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwibGFzdCIsIm1hcmdpbkJvdHRvbSIsIk91dGxpbmVkVGV4dEZpZWxkcyIsImMiLCJ1c2VDb250ZXh0Iiwic2V0TG9jYWxDc3MiLCJjc3MiLCJ0YXJnZXQiLCJuZXdDc3MiLCJuZXdkYXRhIiwic2V0R2xvYmFsQ3NzIiwiYSIsImdsb2JhbENzcyIsIkNzcyIsInNocmluayIsImRyYXdlcldpZHRoIiwiZHJhd2VyIiwid2lkdGgiLCJmbGV4U2hyaW5rIiwib3ZlcmZsb3ciLCJkcmF3ZXJQYXBlciIsInRvb2xiYXIiLCJtaXhpbnMiLCJib3giLCJiYWNrZ3JvdW5kIiwiYm94U2l6aW5nIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJ0cmFuc2l0aW9uIiwic2hhZG93IiwiYm94U2hhZG93IiwidHh0IiwicGFkZGluZ0xlZnQiLCJyZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInNldEZpbHRlciIsImN1cnJlbnREYXRhIiwic2V0Q3VycmVudERhdGEiLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiU2VhcmNoQm94IiwiY2xhc3NOYW1lIiwiU2VhcmNoIiwiRGl2aWRlciIsInJlbmRlcmxpc3QiLCJmaWx0ZXIiLCJ2IiwibWFwIiwiaSIsIkxpc3RJdGVtIiwiYnV0dG9uIiwia2V5Iiwib25DbGljayIsIkxpc3RJdGVtVGV4dCIsImxpc3RCb3giLCJMaXN0IiwiZHJhd2VyT3B0aW9uIiwidmFyaWFudCIsImNsYXNzZXMiLCJwYXBlciIsImFuY2hvciIsIm9uU2Nyb2xsIiwiRHJhd2VyIiwicm9vdCIsImJvcmRlckJvdHRvbUNvbG9yIiwiSW5wdXRNZSIsInJvdyIsImZpZWxkIiwiRXJyb3IiLCJzZXRFcnJvciIsIlR4dCIsInNldFR4dCIsImZuIiwiU2V0IiwicmVkdWNlIiwiYWNjIiwidjIiLCJpc05hTiIsInBhcnNlRmxvYXQiLCJjb25jYXQiLCJTdWJtaXQiLCJvYmoyIiwib2JqIiwiZWRpdCIsInZhbCIsIm5ld1JvdyIsIm5ld1Jvd3MiLCJ1bmRlZmluZWQiLCJzdG9wUHJvcGFnYXRpb24iLCJNeUlucHV0IiwiTXlUYWJsZUJvZHkiLCJjcmVhdGVEYXRhIiwic3R5IiwiZGVmIiwibWlkIiwiaWQiLCJrIiwibGVuZ3RoIiwiQXJyYXkiLCJpbmRleE9mIiwibmV3ZG9tIiwiaGFuZGxlQ2xpY2siLCJoZWFkUm93cyIsImxhYmVsIiwiRW5oYW5jZWRUYWJsZUhlYWQiLCJvcmRlciIsInNldE9yZGVyIiwib3JkZXJCeSIsInNldE9yZGVyQnkiLCJudW1TZWxlY3RlZCIsInJvd0NvdW50IiwiaGFuZGxlU2VsZWN0QWxsQ2xpY2siLCJldmVudCIsImNoZWNrZWQiLCJuZXdTZWxlY3RlZHMiLCJvblJlcXVlc3RTb3J0IiwicHJvcGVydHkiLCJpc0Rlc2MiLCJyZXZlcnNlIiwiY3JlYXRlU29ydEhhbmRsZXIiLCJ1c2VUb29sYmFyU3R5bGVzIiwiYWJzb2x1dGUiLCJib3R0b20iLCJyaWdodCIsInNwYWNlciIsInRvcCIsIkVuaGFuY2VkVGFibGVUb29sYmFyIiwicm93czIiLCJldmVyeSIsIkRhdGUiLCJub3ciLCJJY29uIiwidGl0bGUiLCJpY29uIiwiVG9vbHRpcCIsIkZhYiIsImNvbG9yIiwidG9nZ2xlSGFuZGxlciIsImYiLCJBZGRJY29uIiwiRGVsZXRlSWNvbiIsIlN3aXRjaCIsIm9uQ2hhbmdlIiwiZmxleEdyb3ciLCJzZWFyY2giLCJzZWFyY2hJY29uIiwiaGVpZ2h0IiwicG9pbnRlckV2ZW50cyIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImlucHV0Um9vdCIsImlucHV0SW5wdXQiLCJwYWRkaW5nIiwiaW5wdXQiLCJTZWFyY2hBcHBCYXIiLCJ0cmltIiwidGFibGUiLCJtaW5XaWR0aCIsInRhYmxlV3JhcHBlciIsIm92ZXJmbG93WCIsIkVuaGFuY2VkVGFibGUiLCJQYXBlciIsIk15VGFibGVUb29sYmFyIiwiVGFibGUiLCJzaXplIiwiTXlUYWJsZUhlYWQiLCJhcHBCYXIiLCJtYXJnaW5MZWZ0IiwiY29udGVudCIsImJhY2tncm91bmRDb2xvciIsIlBlcm1hbmVudERyYXdlckxlZnQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBZ0IsdUJBQXVCO0FBQ3ZDOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHQywrRUFBYyxDQUFDO0FBQzNCQyxTQUFPLEVBQUU7QUFDUEMsV0FBTyxFQUFFQyxvRUFERjtBQUVQQyxhQUFTLEVBQUVELG9FQUFJQTtBQUZSO0FBRGtCLENBQUQsQ0FBNUI7QUFPZTtBQUFBLFNBQU1FLDJEQUFDLENBQUNDLGlFQUFELEVBQWdCO0FBQUVQLFNBQUssRUFBTEE7QUFBRixHQUFoQixFQUEyQk0sMkRBQUMsQ0FBQ0UscUVBQUQsQ0FBNUIsRUFBMkNGLDJEQUFDLENBQUNHLDBEQUFELEVBQVEsSUFBUixFQUFjSCwyREFBQyxDQUFDSSwwREFBRCxDQUFmLENBQTVDLENBQVA7QUFBQSxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUVPLElBQU1DLE9BQU8sR0FBR0MsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixJQUFwQixDQUFoQjs7QUFFUCxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDakMsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBSyxNQUFMO0FBQ0UsK0JBQVlGLEtBQVo7QUFBbUJHLFlBQUksRUFBRUYsTUFBTSxDQUFDRTtBQUFoQzs7QUFDRixTQUFLLE1BQUw7QUFDRSwrQkFBWUgsS0FBWjtBQUFtQkksWUFBSSxFQUFFSCxNQUFNLENBQUNHO0FBQWhDOztBQUNGLFNBQUssVUFBTDtBQUNFLCtCQUFZSixLQUFaO0FBQW1CSyxnQkFBUSxFQUFFSixNQUFNLENBQUNJO0FBQXBDOztBQUNGLFNBQUssUUFBTDtBQUNFLCtCQUFZTCxLQUFaO0FBQW1CTSxjQUFNLEVBQUVMLE1BQU0sQ0FBQ0s7QUFBbEM7O0FBQ0YsU0FBSyxPQUFMO0FBQ0UsK0JBQVlOLEtBQVo7QUFBbUJPLGFBQUssRUFBRU4sTUFBTSxDQUFDTTtBQUFqQzs7QUFDRixTQUFLLFFBQUw7QUFDRSwrQkFBWVAsS0FBWjtBQUFtQlEsY0FBTSxFQUFFUCxNQUFNLENBQUNPO0FBQWxDOztBQUNGO0FBQ0UsYUFBT1IsS0FBUDtBQWRKO0FBZ0JELENBakJEOztBQW1CQSxJQUFNUyxRQUFRLEdBQUksVUFBQUMsQ0FBQyxFQUFJO0FBQ3JCLE1BQUlDLElBQUksR0FBRyxJQUFYO0FBQ0EsU0FBTyxVQUFBQyxRQUFRLEVBQUk7QUFDakJDLGdCQUFZLENBQUNGLElBQUQsQ0FBWjtBQUNBQSxRQUFJLEdBQUdHLFVBQVUsQ0FBQyxZQUFNO0FBQ3RCRixjQUFRO0FBQ1QsS0FGZ0IsRUFFZCxHQUZjLENBQWpCO0FBR0QsR0FMRDtBQU1ELENBUmdCLEVBQWpCOztBQVVBLElBQU1sQixLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFBcUIsS0FBSyxFQUFJO0FBQUEsb0JBQ0tDLHdEQUFVLENBQUNqQixPQUFELEVBQVU7QUFDNUNJLFFBQUksRUFBRSxFQURzQztBQUU1Q0MsUUFBSSxFQUFFLEVBRnNDO0FBRzVDQyxZQUFRLEVBQUUsRUFIa0M7QUFJNUNDLFVBQU0sRUFBRSxFQUpvQztBQUs1Q0MsU0FBSyxFQUFFLEtBTHFDO0FBTTVDQyxVQUFNLEVBQUU7QUFOb0MsR0FBVixDQURmO0FBQUE7QUFBQSxNQUNkUixLQURjO0FBQUEsTUFDUGlCLFFBRE87O0FBVXJCQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsVUFBTSxDQUFDQyxPQUFQLENBQWVDLElBQWYsQ0FBb0JDLEdBQXBCLENBQXdCLElBQXhCLEVBQThCLFVBQUFuQixJQUFJLEVBQUk7QUFDcENjLGNBQVEsQ0FBQztBQUFFZixZQUFJLEVBQUUsTUFBUjtBQUFnQkMsWUFBSSxFQUFKQTtBQUFoQixPQUFELENBQVI7QUFDQSxVQUFJb0IsS0FBSyxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWXRCLElBQVosRUFBa0IsQ0FBbEIsQ0FBWjtBQUNBYyxjQUFRLENBQUM7QUFBRWYsWUFBSSxFQUFFLFFBQVI7QUFBa0JJLGNBQU0sRUFBRWlCLEtBQUssS0FBSyxXQUFWLEdBQXdCLEVBQXhCLEdBQTZCQTtBQUF2RCxPQUFELENBQVI7QUFDQUcsYUFBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQnhCLElBQXBCO0FBQ0QsS0FMRDtBQU9BZ0IsVUFBTSxDQUFDUyxPQUFQLENBQWVDLFNBQWYsQ0FBeUJDLFdBQXpCLENBQXFDLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN4RGIsWUFBTSxDQUFDQyxPQUFQLENBQWVDLElBQWYsQ0FBb0JDLEdBQXBCLENBQXdCLElBQXhCLEVBQThCLFVBQUFuQixJQUFJLEVBQUk7QUFDcEMsWUFBSTRCLE9BQU8sS0FBSyxLQUFoQixFQUF1QjtBQUNyQmQsa0JBQVEsQ0FBQztBQUFFZixnQkFBSSxFQUFFLE1BQVI7QUFBZ0JDLGdCQUFJLEVBQUpBO0FBQWhCLFdBQUQsQ0FBUjtBQUNELFNBRkQsTUFFTztBQUNMLGNBQU1HLE1BQU0sR0FBRyxJQUFJMkIsR0FBSixDQUFRRCxNQUFNLENBQUNFLEdBQWYsRUFBb0JDLFFBQW5DO0FBQ0FULGlCQUFPLENBQUNDLEdBQVIsQ0FBWUksT0FBWixFQUFxQnpCLE1BQXJCOztBQUVBLGNBQUlrQixNQUFNLENBQUNDLElBQVAsQ0FBWXRCLElBQVosRUFBa0JpQyxRQUFsQixDQUEyQjlCLE1BQTNCLENBQUosRUFBd0M7QUFDdENXLG9CQUFRLENBQUM7QUFBRWYsa0JBQUksRUFBRSxRQUFSO0FBQWtCSSxvQkFBTSxFQUFOQTtBQUFsQixhQUFELENBQVI7QUFDRDtBQUNGO0FBQ0YsT0FYRDtBQVlELEtBYkQ7QUFjRCxHQXRCUSxFQXNCTixFQXRCTSxDQUFUO0FBd0JBWSx5REFBUyxDQUFDLFlBQU07QUFDZFQsWUFBUSxDQUFDLFlBQU07QUFDYmlCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0IzQixLQUFLLENBQUNHLElBQTVCO0FBQ0FnQixZQUFNLENBQUNDLE9BQVAsQ0FBZUMsSUFBZixDQUFvQmdCLEdBQXBCLENBQXdCckMsS0FBSyxDQUFDRyxJQUE5QjtBQUNELEtBSE8sQ0FBUjtBQUlELEdBTFEsRUFLTixDQUFDSCxLQUFELENBTE0sQ0FBVDtBQU9BLE1BQU1zQyxDQUFDLEdBQUdDLHFEQUFPLENBQUMsVUFBQTdCLENBQUM7QUFBQSxXQUFJbkIsMkRBQUMsQ0FBQ0ssT0FBTyxDQUFDNEMsUUFBVCxFQUFtQjtBQUFFQyxXQUFLLEVBQUUsQ0FBQ3pDLEtBQUQsRUFBUWlCLFFBQVI7QUFBVCxLQUFuQixFQUFpREYsS0FBSyxDQUFDMkIsUUFBdkQsQ0FBTDtBQUFBLEdBQUYsRUFBeUUsQ0FBQzFDLEtBQUQsQ0FBekUsQ0FBakI7QUFDQSxTQUFPc0MsQ0FBUDtBQUNELENBM0NEOztBQTZDZTVDLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1pRCxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQTNELEtBQUs7QUFBQSxTQUFLO0FBQ3JDNEQsYUFBUyxFQUFFO0FBQ1RDLGFBQU8sRUFBRSxNQURBO0FBRVRDLGNBQVEsRUFBRSxNQUZEO0FBR1RDLGNBQVEsRUFBRSxHQUhEO0FBSVRDLFlBQU0sRUFBRTtBQUpDLEtBRDBCO0FBT3JDQyxhQUFTLEVBQUU7QUFDVEQsWUFBTSxFQUFFaEUsS0FBSyxDQUFDa0UsT0FBTixDQUFjLENBQWQsRUFBaUIsQ0FBakIsQ0FEQztBQUVULG9CQUFjO0FBQ1pDLGtCQUFVLEVBQUUsbUJBREE7QUFFWkMsZ0JBQVEsRUFBRTtBQUZFO0FBRkwsS0FQMEI7QUFjckNDLFFBQUksRUFBRTtBQUNKQyxrQkFBWSxFQUFFdEUsS0FBSyxDQUFDa0UsT0FBTixDQUFjLENBQWQ7QUFEVjtBQWQrQixHQUFMO0FBQUEsQ0FBTixDQUE1QjtBQW1CZSxTQUFTSyxrQkFBVCxHQUE4QjtBQUMzQyxNQUFNQyxDQUFDLEdBQUdkLFNBQVMsRUFBbkI7O0FBRDJDLG9CQUVOZSx3REFBVSxDQUFDOUQsOENBQUQsQ0FGSjtBQUFBO0FBQUE7QUFBQSxNQUVsQ08sSUFGa0MsaUJBRWxDQSxJQUZrQztBQUFBLE1BRTVCRyxNQUY0QixpQkFFNUJBLE1BRjRCO0FBQUEsTUFFbEJXLFFBRmtCOztBQUkzQyxNQUFNMEMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQXBFLENBQUMsRUFBSTtBQUN2QixRQUFJLENBQUNlLE1BQUwsRUFBYTtBQUNYO0FBQ0Q7O0FBQ0QsUUFBTXNELEdBQUcsR0FBR3JFLENBQUMsQ0FBQ3NFLE1BQUYsQ0FBU3BCLEtBQXJCOztBQUNBLFFBQU1xQixNQUFNLHFCQUFRM0QsSUFBSSxDQUFDRyxNQUFELENBQVo7QUFBc0JzRCxTQUFHLEVBQUhBO0FBQXRCLE1BQVo7O0FBQ0EsUUFBSUcsT0FBTyxxQkFBUTVELElBQVIsc0JBQWVHLE1BQWYsRUFBd0J3RCxNQUF4QixFQUFYOztBQUNBN0MsWUFBUSxDQUFDO0FBQUVmLFVBQUksRUFBRSxNQUFSO0FBQWdCQyxVQUFJLEVBQUU0RDtBQUF0QixLQUFELENBQVI7QUFDRCxHQVJEOztBQVVBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUF6RSxDQUFDLEVBQUk7QUFDeEIsUUFBTXFFLEdBQUcsR0FBR3JFLENBQUMsQ0FBQ3NFLE1BQUYsQ0FBU3BCLEtBQXJCOztBQUNBLFFBQUl3QixDQUFDLHFCQUFROUQsSUFBUjtBQUFjK0QsZUFBUyxFQUFFTjtBQUF6QixNQUFMOztBQUNBbEMsV0FBTyxDQUFDQyxHQUFSLENBQVlzQyxDQUFaO0FBQ0FoRCxZQUFRLENBQUM7QUFBRWYsVUFBSSxFQUFFLE1BQVI7QUFBZ0JDLFVBQUksRUFBRThEO0FBQXRCLEtBQUQsQ0FBUjtBQUNELEdBTEQ7O0FBT0EsTUFBSUUsR0FBRyxHQUFHLEVBQVY7O0FBQ0EsTUFBSWhFLElBQUksQ0FBQ0csTUFBRCxDQUFSLEVBQWtCO0FBQ2hCNkQsT0FBRyxHQUFHaEUsSUFBSSxDQUFDRyxNQUFELENBQUosQ0FBYXNELEdBQWIsSUFBb0IsRUFBMUI7QUFDRDs7QUFFRCxTQUNFLDJEQUFDLG1FQUFEO0FBQVcsWUFBUSxFQUFDO0FBQXBCLEtBQ0UsMkRBQUMsbUVBQUQ7QUFDRSxTQUFLLEVBQUV0RCxNQUFNLElBQUksS0FEbkI7QUFFRSxhQUFTLE1BRlg7QUFHRSxRQUFJLEVBQUMsR0FIUDtBQUlFLGFBQVMsRUFBRW1ELENBQUMsQ0FBQ1AsU0FKZjtBQUtFLFVBQU0sRUFBQyxRQUxUO0FBTUUsV0FBTyxFQUFDLFVBTlY7QUFPRSxhQUFTLE1BUFg7QUFRRSxZQUFRLEVBQUVTLFdBUlo7QUFTRSxNQUFFLEVBQUMsTUFUTDtBQVVFLFNBQUssRUFBRVEsR0FWVDtBQVdFLGVBQVcsRUFBQyxzQ0FYZDtBQVlFLG1CQUFlLEVBQUU7QUFDZkMsWUFBTSxFQUFFO0FBRE87QUFabkIsSUFERixFQWtCRSwyREFBQyxtRUFBRDtBQUNFLFNBQUssRUFBQyxjQURSO0FBRUUsYUFBUyxNQUZYO0FBR0UsUUFBSSxFQUFDLEdBSFA7QUFJRSxhQUFTLFlBQUtYLENBQUMsQ0FBQ1AsU0FBUCxjQUFvQk8sQ0FBQyxDQUFDSCxJQUF0QixDQUpYO0FBS0UsVUFBTSxFQUFDLFFBTFQ7QUFNRSxXQUFPLEVBQUMsVUFOVjtBQU9FLGFBQVMsTUFQWDtBQVFFLFNBQUssRUFBRW5ELElBQUksQ0FBQytELFNBUmQ7QUFTRSxZQUFRLEVBQUVGLFlBVFo7QUFVRSxNQUFFLEVBQUMsTUFWTDtBQVdFLG1CQUFlLEVBQUU7QUFDZkksWUFBTSxFQUFFO0FBRE87QUFYbkIsSUFsQkYsQ0FERjtBQW9DRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1DLFdBQVcsR0FBRyxHQUFwQjtBQUNBLElBQU0xQixTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQTNELEtBQUs7QUFBQSxTQUFLO0FBQ3JDcUYsVUFBTSxFQUFFO0FBQ05DLFdBQUssRUFBRUYsV0FERDtBQUVORyxnQkFBVSxFQUFFLENBRk47QUFHTkMsY0FBUSxFQUFFO0FBSEosS0FENkI7QUFNckNDLGVBQVcsRUFBRTtBQUNYSCxXQUFLLEVBQUVGO0FBREksS0FOd0I7QUFTckNNLFdBQU8sRUFBRTFGLEtBQUssQ0FBQzJGLE1BQU4sQ0FBYUQsT0FUZTtBQVVyQ0UsT0FBRyxFQUFFO0FBQ0hDLGdCQUFVLEVBQUUsTUFEVDtBQUVIQyxlQUFTLEVBQUUsWUFGUjtBQUdIQyxjQUFRLEVBQUUsT0FIUDtBQUlIQyxZQUFNLEVBQUUsRUFKTDtBQUtIVixXQUFLLEVBQUVGLFdBQVcsR0FBRyxDQUxsQjtBQU1IYSxnQkFBVSxFQUFFO0FBTlQsS0FWZ0M7QUFrQnJDQyxVQUFNLEVBQUU7QUFDTkMsZUFBUyxFQUFFO0FBREwsS0FsQjZCO0FBcUJyQ0MsT0FBRyxFQUFFO0FBQ0hDLGlCQUFXLEVBQUU7QUFEVjtBQXJCZ0MsR0FBTDtBQUFBLENBQU4sQ0FBNUI7QUEwQmUseUVBQUE1RSxDQUFDLEVBQUk7QUFDbEIsTUFBTStDLENBQUMsR0FBR2QsU0FBUyxFQUFuQjtBQUNBLE1BQU00QyxHQUFHLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUFsQjs7QUFGa0Isa0JBR09DLHNEQUFRLENBQUMsRUFBRCxDQUhmO0FBQUE7QUFBQSxNQUdYSixHQUhXO0FBQUEsTUFHTkssU0FITTs7QUFBQSxtQkFJb0JELHNEQUFRLENBQUMsRUFBRCxDQUo1QjtBQUFBO0FBQUEsTUFJWEUsV0FKVztBQUFBLE1BSUVDLGNBSkY7O0FBQUEsb0JBS21CbEMsd0RBQVUsQ0FBQzlELDhDQUFELENBTDdCO0FBQUE7QUFBQTtBQUFBLE1BS1RPLElBTFMsaUJBS1RBLElBTFM7QUFBQSxNQUtIRyxNQUxHLGlCQUtIQSxNQUxHO0FBQUEsTUFLT1csUUFMUCxvQkFNbEI7QUFDQTs7O0FBRUEsTUFBTTRFLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUF0RyxDQUFDLEVBQUk7QUFDbEJBLEtBQUMsQ0FBQ3NFLE1BQUYsQ0FBU2lDLFNBQVQsR0FBcUIsRUFBckIsSUFBMkJQLEdBQUcsQ0FBQ1EsT0FBSixDQUFZQyxTQUFaLENBQXNCQyxHQUF0QixDQUEwQnhDLENBQUMsQ0FBQzBCLE1BQTVCLENBQTNCO0FBQ0E1RixLQUFDLENBQUNzRSxNQUFGLENBQVNpQyxTQUFULEdBQXFCLEVBQXJCLElBQTJCUCxHQUFHLENBQUNRLE9BQUosQ0FBWUMsU0FBWixDQUFzQkUsTUFBdEIsQ0FBNkJ6QyxDQUFDLENBQUMwQixNQUEvQixDQUEzQjtBQUNELEdBSEQ7O0FBS0EsTUFBTWdCLFNBQVMsR0FBRzVHLDJEQUFDLENBQUMsS0FBRCxFQUFRO0FBQUU2RyxhQUFTLEVBQUUzQyxDQUFDLENBQUNvQixHQUFmO0FBQW9CVSxPQUFHLEVBQUhBO0FBQXBCLEdBQVIsRUFBbUNoRywyREFBQyxDQUFDOEcsK0NBQUQsRUFBUztBQUFFWCxhQUFTLEVBQVRBO0FBQUYsR0FBVCxDQUFwQyxFQUE2RG5HLDJEQUFDLENBQUMrRyxpRUFBRCxDQUE5RCxDQUFuQjtBQUVBLE1BQU1DLFVBQVUsR0FBRy9FLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZdEIsSUFBWixFQUNoQnFHLE1BRGdCLENBQ1QsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsS0FBSyxXQUFWO0FBQUEsR0FEUSxFQUVoQkQsTUFGZ0IsQ0FFVCxVQUFBQyxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDckUsUUFBRixDQUFXaUQsR0FBWCxDQUFKO0FBQUEsR0FGUSxFQUdoQnFCLEdBSGdCLENBR1osVUFBQ0QsQ0FBRCxFQUFJRSxDQUFKO0FBQUEsV0FDSHBILDJEQUFDLENBQ0NxSCxrRUFERCxFQUVDO0FBQUVDLFlBQU0sRUFBRSxJQUFWO0FBQWdCQyxTQUFHLEVBQUVILENBQXJCO0FBQXdCSSxhQUFPLEVBQUUsaUJBQUF4SCxDQUFDO0FBQUEsZUFBSTBCLFFBQVEsQ0FBQztBQUFFZixjQUFJLEVBQUUsUUFBUjtBQUFrQkksZ0JBQU0sRUFBRW1HO0FBQTFCLFNBQUQsQ0FBWjtBQUFBLE9BQWxDO0FBQStFcEcsY0FBUSxFQUFFQyxNQUFNLEtBQUttRztBQUFwRyxLQUZELEVBR0NsSCwyREFBQyxDQUFDeUgsc0VBQUQsRUFBZTtBQUFFNUgsYUFBTyxFQUFFcUgsQ0FBWDtBQUFjTCxlQUFTLEVBQUUzQyxDQUFDLENBQUM0QjtBQUEzQixLQUFmLENBSEYsQ0FERTtBQUFBLEdBSFksQ0FBbkI7QUFXQSxNQUFNNEIsT0FBTyxHQUFHMUgsMkRBQUMsQ0FBQzJILDhEQUFELEVBQU8sSUFBUCxFQUFhWCxVQUFiLENBQWpCO0FBRUEsTUFBTVksWUFBWSxHQUFHO0FBQ25CZixhQUFTLEVBQUUzQyxDQUFDLENBQUNhLE1BRE07QUFFbkI4QyxXQUFPLEVBQUUsV0FGVTtBQUduQkMsV0FBTyxFQUFFO0FBQUVDLFdBQUssRUFBRTdELENBQUMsQ0FBQ2lCO0FBQVgsS0FIVTtBQUluQjZDLFVBQU0sRUFBRSxNQUpXO0FBS25CQyxZQUFRLEVBQUUzQjtBQUxTLEdBQXJCO0FBUUEsU0FBT3RHLDJEQUFDLENBQUNrSSxnRUFBRCxFQUFTTixZQUFULEVBQXVCaEIsU0FBdkIsRUFBa0M1RywyREFBQyxDQUFDLEtBQUQsRUFBUTtBQUFFNkcsYUFBUyxFQUFFM0MsQ0FBQyxDQUFDa0I7QUFBZixHQUFSLENBQW5DLEVBQXNFc0MsT0FBdEUsQ0FBUjtBQUNELENBdENELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNdEUsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUEzRCxLQUFLO0FBQUEsU0FBSztBQUNyQ3lJLFFBQUksRUFBRTtBQUNKLHlCQUFtQjtBQUNqQkMseUJBQWlCLEVBQUU7QUFERjtBQURmO0FBRCtCLEdBQUw7QUFBQSxDQUFOLENBQTVCOztBQVFBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQW9CO0FBQUEsTUFBakJDLEdBQWlCLFFBQWpCQSxHQUFpQjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUNsQyxNQUFNckUsQ0FBQyxHQUFHZCxTQUFTLEVBQW5COztBQURrQyxvQkFFZ0JlLHdEQUFVLENBQUM5RCw4Q0FBRCxDQUYxQjtBQUFBO0FBQUE7QUFBQSxNQUV6QlEsSUFGeUIsaUJBRXpCQSxJQUZ5QjtBQUFBLE1BRW5CRSxNQUZtQixpQkFFbkJBLE1BRm1CO0FBQUEsTUFFWEgsSUFGVyxpQkFFWEEsSUFGVztBQUFBLE1BRUxJLEtBRkssaUJBRUxBLEtBRks7QUFBQSxNQUVJVSxRQUZKOztBQUFBLGtCQUdSd0Usc0RBQVEsQ0FBQyxLQUFELENBSEE7QUFBQTtBQUFBLE1BRzNCc0MsS0FIMkI7QUFBQSxNQUdwQkMsUUFIb0I7O0FBQUEsbUJBSVp2QyxzREFBUSxDQUFDLEVBQUQsQ0FKSTtBQUFBO0FBQUEsTUFJM0J3QyxHQUoyQjtBQUFBLE1BSXRCQyxNQUpzQjs7QUFNbENoSCx5REFBUyxDQUFDLFlBQU07QUFDZDhHLFlBQVEsQ0FBQyxLQUFELENBQVI7QUFDQUUsVUFBTSxDQUFDLEVBQUQsQ0FBTjtBQUNELEdBSFEsRUFHTixDQUFDL0gsSUFBRCxDQUhNLENBQVQ7O0FBS0EsTUFBTWdJLEVBQUUsR0FBRyxTQUFMQSxFQUFLLENBQUExQixDQUFDLEVBQUk7QUFDZCw4QkFBVyxJQUFJMkIsR0FBSixDQUFRaEksSUFBSSxDQUFDaUksTUFBTCxDQUFZLFVBQUNDLEdBQUQsRUFBTUMsRUFBTjtBQUFBLGFBQWNBLEVBQUUsQ0FBQzlCLENBQUQsQ0FBRixJQUFTK0IsS0FBSyxDQUFDQyxVQUFVLENBQUNGLEVBQUUsQ0FBQzlCLENBQUQsQ0FBSCxDQUFYLENBQWQsR0FBb0M2QixHQUFHLENBQUNJLE1BQUosQ0FBV0gsRUFBRSxDQUFDOUIsQ0FBRCxDQUFiLENBQXBDLEdBQXdENkIsR0FBdEU7QUFBQSxLQUFaLEVBQXdGLEVBQXhGLENBQVIsQ0FBWDtBQUNELEdBRkQ7O0FBSUEsTUFBTUssTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQXBKLENBQUMsRUFBSTtBQUNsQixRQUFJcUosSUFBSSxHQUFHLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCUCxNQUF0QixDQUE2QixVQUFDUSxHQUFELEVBQU1wQyxDQUFOLEVBQVk7QUFDbEQsK0JBQVlvQyxHQUFaLHNCQUFrQnBDLENBQWxCLEVBQXNCMEIsRUFBRSxDQUFDMUIsQ0FBRCxDQUF4QjtBQUNELEtBRlUsRUFFUixFQUZRLENBQVg7QUFHQW1DLFFBQUkscUJBQVF6SSxJQUFJLENBQUNHLE1BQUQsQ0FBWixNQUF5QnNJLElBQXpCLENBQUo7QUFDQWxILFdBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0JpSCxJQUFwQjs7QUFFQSxRQUFJQyxHQUFHLHFCQUFRMUksSUFBUixzQkFBZUcsTUFBZixFQUF3QnNJLElBQXhCLEVBQVA7O0FBQ0EzSCxZQUFRLENBQUM7QUFBRWYsVUFBSSxFQUFFLE1BQVI7QUFBZ0JDLFVBQUksRUFBRTBJO0FBQXRCLEtBQUQsQ0FBUjtBQUNELEdBVEQ7O0FBV0EsTUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQXZKLENBQUMsRUFBSTtBQUNoQixRQUFJLENBQUNlLE1BQUwsRUFBYTtBQUNYO0FBQ0Q7O0FBQ0QsUUFBTXlJLEdBQUcsR0FBR3hKLENBQUMsQ0FBQ3NFLE1BQUYsQ0FBU3BCLEtBQXJCOztBQUNBLFFBQUksQ0FBQytGLEtBQUssQ0FBQ0MsVUFBVSxDQUFDTSxHQUFELENBQVgsQ0FBVixFQUE2QjtBQUMzQmYsY0FBUSxDQUFDLElBQUQsQ0FBUjtBQUNBRSxZQUFNLENBQUMsVUFBRCxDQUFOO0FBQ0QsS0FIRCxNQUdPLElBQUk5SCxJQUFJLENBQUNzRyxHQUFMLENBQVMsVUFBQUQsQ0FBQztBQUFBLGFBQUlBLENBQUMsQ0FBQ3FCLEtBQUQsQ0FBTDtBQUFBLEtBQVYsRUFBd0IxRixRQUF4QixDQUFpQzJHLEdBQWpDLEtBQXlDQSxHQUE3QyxFQUFrRDtBQUN2RGYsY0FBUSxDQUFDLElBQUQsQ0FBUjtBQUNBRSxZQUFNLENBQUMsT0FBRCxDQUFOO0FBQ0QsS0FITSxNQUdBO0FBQ0xGLGNBQVEsQ0FBQyxLQUFELENBQVI7QUFDQUUsWUFBTSxDQUFDLEVBQUQsQ0FBTjtBQUNEOztBQUVEakgsWUFBUSxDQUFDO0FBQUVmLFVBQUksRUFBRSxPQUFSO0FBQWlCSyxXQUFLLEVBQUV3STtBQUF4QixLQUFELENBQVI7O0FBRUEsUUFBTUMsTUFBTSxxQkFBUW5CLEdBQVIsc0JBQWNDLEtBQWQsRUFBc0JpQixHQUF0QixFQUFaOztBQUNBLFFBQUlFLE9BQU8sR0FBRzdJLElBQUksQ0FBQ3NHLEdBQUwsQ0FBUyxVQUFBRCxDQUFDO0FBQUEsYUFBS0EsQ0FBQyxLQUFLb0IsR0FBTixHQUFZbUIsTUFBWixHQUFxQnZDLENBQTFCO0FBQUEsS0FBVixDQUFkO0FBQ0F4RixZQUFRLENBQUM7QUFBRWYsVUFBSSxFQUFFLE1BQVI7QUFBZ0JFLFVBQUksRUFBRTZJO0FBQXRCLEtBQUQsQ0FBUjtBQUNELEdBckJEOztBQXVCQSxTQUNFLDJEQUFDLG1FQUFEO0FBQ0UsU0FBSyxFQUFFcEIsR0FBRyxDQUFDQyxLQUFELENBQUgsS0FBZW9CLFNBQWYsR0FBMkIsRUFBM0IsR0FBZ0NyQixHQUFHLENBQUNDLEtBQUQsQ0FENUM7QUFFRSxZQUFRLEVBQUVnQixJQUZaO0FBR0UsV0FBTyxFQUFFO0FBQUVwQixVQUFJLEVBQUVqRSxDQUFDLENBQUNpRTtBQUFWLEtBSFg7QUFJRSxXQUFPLEVBQUUsaUJBQUFuSSxDQUFDO0FBQUEsYUFBSUEsQ0FBQyxDQUFDNEosZUFBRixFQUFKO0FBQUEsS0FKWjtBQUtFLFVBQU0sRUFBRVIsTUFMVjtBQU1FLFNBQUssRUFBRVYsR0FOVDtBQU9FLFNBQUssRUFBRSxDQUFDLEVBQUUxSCxLQUFLLEtBQUtzSCxHQUFHLENBQUNDLEtBQUQsQ0FBYixJQUF3QnZILEtBQXhCLElBQWlDd0gsS0FBbkM7QUFQVixJQURGO0FBV0QsQ0E1REQ7O0FBOERBLElBQU1xQixPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFBckksS0FBSyxFQUFJO0FBQ3ZCLFNBQU93QixxREFBTyxDQUFDLFlBQU07QUFDbkJiLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFDQSxXQUFPLDJEQUFDLE9BQUQsRUFBYVosS0FBYixDQUFQO0FBQ0QsR0FIYSxFQUdYLENBQUNBLEtBQUssQ0FBQzhHLEdBQVAsQ0FIVyxDQUFkO0FBSUQsQ0FMRDs7QUFPZXVCLHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQTNJLENBQUMsRUFBSTtBQUFBLG9CQUM4QmdELHdEQUFVLENBQUM5RCw4Q0FBRCxDQUR4QztBQUFBO0FBQUE7QUFBQSxNQUNkTyxJQURjLGlCQUNkQSxJQURjO0FBQUEsTUFDUkUsUUFEUSxpQkFDUkEsUUFEUTtBQUFBLE1BQ0VELElBREYsaUJBQ0VBLElBREY7QUFBQSxNQUNRRSxNQURSLGlCQUNRQSxNQURSO0FBQUEsTUFDa0JXLFFBRGxCOztBQUV2QixNQUFNcUksVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQVdDLEdBQVgsRUFBZ0JDLEVBQWhCO0FBQUEsV0FBd0I7QUFBRUgsU0FBRyxFQUFIQSxHQUFGO0FBQU9DLFNBQUcsRUFBSEEsR0FBUDtBQUFZQyxTQUFHLEVBQUhBLEdBQVo7QUFBaUJDLFFBQUUsRUFBRkE7QUFBakIsS0FBeEI7QUFBQSxHQUFuQjs7QUFFQXhJLHlEQUFTLENBQUMsWUFBTTtBQUNkUSxXQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFFeEIsVUFBSSxFQUFKQSxJQUFGO0FBQVFHLFlBQU0sRUFBTkE7QUFBUixLQUFaO0FBQ0FvQixXQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWixFQUErQnhCLElBQUksQ0FBQ0csTUFBRCxDQUFuQztBQUVBLFFBQUlxSixDQUFDLEdBQUduSSxNQUFNLENBQUNDLElBQVAsQ0FBWXRCLElBQVosRUFBa0JxRyxNQUFsQixDQUF5QixVQUFBQyxDQUFDO0FBQUEsYUFBSUEsQ0FBQyxLQUFLLFdBQVY7QUFBQSxLQUExQixDQUFSO0FBQ0EvRSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CZ0ksQ0FBcEI7O0FBQ0EsUUFBSUEsQ0FBQyxDQUFDQyxNQUFGLEtBQWEsQ0FBakIsRUFBb0I7QUFDbEIzSSxjQUFRLENBQUM7QUFBRWYsWUFBSSxFQUFFLFFBQVI7QUFBa0JJLGNBQU0sWUFBS3FKLENBQUw7QUFBeEIsT0FBRCxDQUFSO0FBQ0Q7O0FBQ0QsUUFBSXhKLElBQUksQ0FBQ0csTUFBRCxDQUFSLEVBQWtCO0FBQUEseUJBQ1FILElBQUksQ0FBQ0csTUFBRCxDQURaO0FBQUEsVUFDVmlKLEdBRFUsZ0JBQ1ZBLEdBRFU7QUFBQSxVQUNMQyxHQURLLGdCQUNMQSxHQURLO0FBQUEsVUFDQUMsR0FEQSxnQkFDQUEsR0FEQTtBQUVoQixVQUFNOUMsQ0FBQyxHQUFHLENBQUM0QyxHQUFELEVBQU1DLEdBQU4sRUFBV0MsR0FBWCxFQUFnQnBCLE1BQWhCLENBQXVCLFVBQUNDLEdBQUQsRUFBTTdCLENBQU47QUFBQSxlQUFhQSxDQUFDLENBQUNtRCxNQUFGLEdBQVd0QixHQUFYLEdBQWlCN0IsQ0FBQyxDQUFDbUQsTUFBbkIsR0FBNEJ0QixHQUF6QztBQUFBLE9BQXZCLEVBQXNFLENBQXRFLENBQVY7O0FBQ0EsVUFBTWxJLEtBQUksR0FBRyxtQkFBSXlKLEtBQUssQ0FBQ2xELENBQUQsQ0FBVCxFQUFjRCxHQUFkLENBQWtCLFVBQUNELENBQUQsRUFBSUUsQ0FBSjtBQUFBLGVBQVUyQyxVQUFVLENBQUNDLEdBQUcsQ0FBQzVDLENBQUQsQ0FBSCxJQUFVLEVBQVgsRUFBZTZDLEdBQUcsQ0FBQzdDLENBQUQsQ0FBSCxJQUFVLEVBQXpCLEVBQTZCOEMsR0FBRyxDQUFDOUMsQ0FBRCxDQUFILElBQVUsRUFBdkMsRUFBMkNBLENBQTNDLENBQXBCO0FBQUEsT0FBbEIsQ0FBYjs7QUFDQWpGLGFBQU8sQ0FBQ0MsR0FBUixDQUFZdkIsS0FBWixFQUFrQixHQUFsQjtBQUNBYSxjQUFRLENBQUM7QUFBRWYsWUFBSSxFQUFFLE1BQVI7QUFBZ0JFLFlBQUksRUFBSkE7QUFBaEIsT0FBRCxDQUFSOztBQUVBLFVBQUksQ0FBQ0EsS0FBSSxDQUFDd0osTUFBVixFQUFrQjtBQUNoQixZQUFJRCxFQUFDLEdBQUduSSxNQUFNLENBQUNDLElBQVAsQ0FBWXRCLElBQVosRUFBa0JxRyxNQUFsQixDQUF5QixVQUFBQyxDQUFDO0FBQUEsaUJBQUlBLENBQUMsS0FBSyxXQUFWO0FBQUEsU0FBMUIsQ0FBUjs7QUFDQSxZQUFJRSxHQUFDLEdBQUdnRCxFQUFDLENBQUNHLE9BQUYsQ0FBVXhKLE1BQVYsSUFBb0IsQ0FBNUI7O0FBQ0EsWUFBSXlKLE1BQU0sR0FBR0osRUFBQyxDQUFDaEQsR0FBRCxDQUFkO0FBQ0FqRixlQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCb0ksTUFBdEI7QUFDQTlJLGdCQUFRLENBQUM7QUFBRWYsY0FBSSxFQUFFLFFBQVI7QUFBa0JJLGdCQUFNLEVBQUV5SjtBQUExQixTQUFELENBQVI7O0FBRUEsWUFBTWxCLEdBQUcscUJBQVExSSxJQUFSLENBQVQ7O0FBQ0EsZUFBTzBJLEdBQUcsQ0FBQ3ZJLE1BQUQsQ0FBVjtBQUNBVyxnQkFBUSxDQUFDO0FBQUVmLGNBQUksRUFBRSxNQUFSO0FBQWdCQyxjQUFJLEVBQUUwSTtBQUF0QixTQUFELENBQVI7QUFDQTFILGNBQU0sQ0FBQ0MsT0FBUCxDQUFlQyxJQUFmLENBQW9CNkUsTUFBcEIsQ0FBMkI1RixNQUEzQjtBQUNEO0FBQ0Y7O0FBQ0QsV0FBTyxZQUFNO0FBQ1hXLGNBQVEsQ0FBQztBQUFFZixZQUFJLEVBQUUsVUFBUjtBQUFvQkcsZ0JBQVEsRUFBRTtBQUE5QixPQUFELENBQVI7QUFDRCxLQUZEO0FBR0QsR0FoQ1EsRUFnQ04sQ0FBQ0YsSUFBRCxFQUFPRyxNQUFQLENBaENNLENBQVQ7O0FBa0NBLE1BQU0wSixXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDekssQ0FBRCxFQUFJbUssRUFBSixFQUFXO0FBQzdCckosWUFBUSxDQUFDK0IsUUFBVCxDQUFrQnNILEVBQWxCLElBQ0l6SSxRQUFRLENBQUM7QUFBRWYsVUFBSSxFQUFFLFVBQVI7QUFBb0JHLGNBQVEsRUFBRUEsUUFBUSxDQUFDbUcsTUFBVCxDQUFnQixVQUFBQyxDQUFDO0FBQUEsZUFBSUEsQ0FBQyxLQUFLaUQsRUFBVjtBQUFBLE9BQWpCO0FBQTlCLEtBQUQsQ0FEWixHQUVJekksUUFBUSxDQUFDO0FBQUVmLFVBQUksRUFBRSxVQUFSO0FBQW9CRyxjQUFRLEVBQUVBLFFBQVEsQ0FBQ3FJLE1BQVQsQ0FBZ0JnQixFQUFoQjtBQUE5QixLQUFELENBRlo7QUFHRCxHQUpEOztBQU1BLFNBQ0UsMkRBQUMsbUVBQUQsUUFDR3RKLElBQUksQ0FBQ3dKLE1BQUwsR0FDQ3hKLElBQUksQ0FBQ3NHLEdBQUwsQ0FBUyxVQUFDbUIsR0FBRCxFQUFNbEIsQ0FBTixFQUFZO0FBQ25CLFdBQ0UsMkRBQUMsa0VBQUQ7QUFBVSxXQUFLLE1BQWY7QUFBZ0IsYUFBTyxFQUFFLGlCQUFBcEgsQ0FBQztBQUFBLGVBQUl5SyxXQUFXLENBQUN6SyxDQUFELEVBQUlzSSxHQUFHLENBQUM2QixFQUFSLENBQWY7QUFBQSxPQUExQjtBQUFzRCxTQUFHLEVBQUUvQyxDQUEzRDtBQUE4RCxjQUFRLEVBQUV0RyxRQUFRLENBQUMrQixRQUFULENBQWtCeUYsR0FBRyxDQUFDNkIsRUFBdEI7QUFBeEUsT0FDRSwyREFBQyxtRUFBRDtBQUFXLGFBQU8sRUFBQztBQUFuQixPQUNFLDJEQUFDLGtFQUFEO0FBQVUsYUFBTyxFQUFFckosUUFBUSxDQUFDK0IsUUFBVCxDQUFrQnlGLEdBQUcsQ0FBQzZCLEVBQXRCO0FBQW5CLE1BREYsQ0FERixFQUlFLDJEQUFDLG1FQUFEO0FBQVcsV0FBSyxFQUFDO0FBQWpCLE9BQ0UsMkRBQUMsZ0RBQUQ7QUFBUyxTQUFHLEVBQUU3QixHQUFkO0FBQW1CLFdBQUssRUFBQztBQUF6QixNQURGLENBSkYsRUFPRSwyREFBQyxtRUFBRDtBQUFXLFdBQUssRUFBQztBQUFqQixPQUNFLDJEQUFDLGdEQUFEO0FBQVMsU0FBRyxFQUFFQSxHQUFkO0FBQW1CLFdBQUssRUFBQztBQUF6QixNQURGLENBUEYsRUFVRSwyREFBQyxtRUFBRDtBQUFXLFdBQUssRUFBQztBQUFqQixPQUNFLDJEQUFDLGdEQUFEO0FBQVMsU0FBRyxFQUFFQSxHQUFkO0FBQW1CLFdBQUssRUFBQztBQUF6QixNQURGLENBVkYsQ0FERjtBQWdCRCxHQWpCRCxDQURELEdBb0JDLDJEQUFDLGtFQUFELFFBQ0UsMkRBQUMsbUVBQUQ7QUFBVyxXQUFPLEVBQUU7QUFBcEIsS0FDRSwyREFBQyxvRUFBRDtBQUFZLFNBQUssRUFBQyxRQUFsQjtBQUEyQixXQUFPLEVBQUMsV0FBbkM7QUFBK0MsU0FBSyxFQUFDO0FBQXJELGdDQURGLENBREYsQ0FyQkosQ0FERjtBQWdDRCxDQTVFRDs7QUE4RWV3QiwwRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTVksUUFBUSxHQUFHLENBQ2Y7QUFBRVAsSUFBRSxFQUFFLEtBQU47QUFBYVEsT0FBSyxFQUFFO0FBQXBCLENBRGUsRUFFZjtBQUFFUixJQUFFLEVBQUUsS0FBTjtBQUFhUSxPQUFLLEVBQUU7QUFBcEIsQ0FGZSxFQUdmO0FBQUVSLElBQUUsRUFBRSxLQUFOO0FBQWFRLE9BQUssRUFBRTtBQUFwQixDQUhlLENBQWpCOztBQU1BLElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUFBLG9CQUNlekcsd0RBQVUsQ0FBQzlELDhDQUFELENBRHpCO0FBQUE7QUFBQTtBQUFBLE1BQ3JCUyxRQURxQixpQkFDckJBLFFBRHFCO0FBQUEsTUFDWEQsSUFEVyxpQkFDWEEsSUFEVztBQUFBLE1BQ0xELElBREssaUJBQ0xBLElBREs7QUFBQSxNQUNHYyxRQURIOztBQUFBLGtCQUdKd0Usc0RBQVEsQ0FBQyxLQUFELENBSEo7QUFBQTtBQUFBLE1BR3ZCMkUsS0FIdUI7QUFBQSxNQUdoQkMsUUFIZ0I7O0FBQUEsbUJBSUE1RSxzREFBUSxDQUFDLEtBQUQsQ0FKUjtBQUFBO0FBQUEsTUFJdkI2RSxPQUp1QjtBQUFBLE1BSWRDLFVBSmM7O0FBSzlCLE1BQU1DLFdBQVcsR0FBR25LLFFBQVEsQ0FBQ3VKLE1BQTdCO0FBQ0EsTUFBTWEsUUFBUSxHQUFHckssSUFBSSxDQUFDd0osTUFBdEI7O0FBRUEsTUFBTWMsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFBQyxLQUFLLEVBQUk7QUFDcEMsUUFBSUEsS0FBSyxDQUFDOUcsTUFBTixDQUFhK0csT0FBakIsRUFBMEI7QUFDeEIsVUFBTUMsWUFBWSxHQUFHekssSUFBSSxDQUFDc0csR0FBTCxDQUFTLFVBQUFtQixHQUFHO0FBQUEsZUFBSUEsR0FBRyxDQUFDNkIsRUFBUjtBQUFBLE9BQVosQ0FBckI7QUFDQXpJLGNBQVEsQ0FBQztBQUFFZixZQUFJLEVBQUUsVUFBUjtBQUFvQkcsZ0JBQVEsRUFBRXdLO0FBQTlCLE9BQUQsQ0FBUjtBQUNBO0FBQ0Q7O0FBQ0Q1SixZQUFRLENBQUM7QUFBRWYsVUFBSSxFQUFFLFVBQVI7QUFBb0JHLGNBQVEsRUFBRTtBQUE5QixLQUFELENBQVI7QUFDRCxHQVBEOztBQVNBLE1BQU15SyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUN2TCxDQUFELEVBQUl3TCxRQUFKLEVBQWlCO0FBQ3JDLFFBQU1DLE1BQU0sR0FBR1YsT0FBTyxLQUFLUyxRQUFaLElBQXdCWCxLQUFLLEtBQUssTUFBakQ7QUFDQUMsWUFBUSxDQUFDVyxNQUFNLEdBQUcsS0FBSCxHQUFXLE1BQWxCLENBQVI7QUFDQVQsY0FBVSxDQUFDUSxRQUFELENBQVY7QUFDQTlKLFlBQVEsQ0FBQztBQUFFZixVQUFJLEVBQUUsTUFBUjtBQUFnQkUsVUFBSSxFQUFFLG1CQUFJQSxJQUFKLEVBQVU2SyxPQUFWO0FBQXRCLEtBQUQsQ0FBUjtBQUNELEdBTEQ7O0FBTUEsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFBSCxRQUFRO0FBQUEsV0FBSSxVQUFBeEwsQ0FBQztBQUFBLGFBQUl1TCxhQUFhLENBQUN2TCxDQUFELEVBQUl3TCxRQUFKLENBQWpCO0FBQUEsS0FBTDtBQUFBLEdBQWxDOztBQUVBLFNBQ0UsMkRBQUMsbUVBQUQsUUFDRSwyREFBQyxrRUFBRCxRQUNFLDJEQUFDLG1FQUFEO0FBQVcsV0FBTyxFQUFDO0FBQW5CLEtBQ0UsMkRBQUMsa0VBQUQ7QUFDRSxpQkFBYSxFQUFFUCxXQUFXLEdBQUcsQ0FBZCxJQUFtQkEsV0FBVyxHQUFHQyxRQURsRDtBQUVFLFdBQU8sRUFBRSxDQUFDLENBQUNBLFFBQUYsSUFBY0QsV0FBVyxLQUFLQyxRQUZ6QztBQUdFLFlBQVEsRUFBRUM7QUFIWixJQURGLENBREYsRUFTR1QsUUFBUSxDQUFDdkQsR0FBVCxDQUFhLFVBQUNtQixHQUFELEVBQU1sQixDQUFOO0FBQUEsV0FDWiwyREFBQyxtRUFBRDtBQUFXLFNBQUcsRUFBRUEsQ0FBaEI7QUFBbUIsV0FBSyxFQUFDLE1BQXpCO0FBQWdDLG1CQUFhLEVBQUUyRCxPQUFPLEtBQUt6QyxHQUFHLENBQUM2QixFQUFoQixHQUFxQlUsS0FBckIsR0FBNkI7QUFBNUUsT0FDRSwyREFBQyx3RUFBRDtBQUFnQixZQUFNLEVBQUVFLE9BQU8sS0FBS3pDLEdBQUcsQ0FBQzZCLEVBQXhDO0FBQTRDLGVBQVMsRUFBRVUsS0FBdkQ7QUFBOEQsYUFBTyxFQUFFYyxpQkFBaUIsQ0FBQ3JELEdBQUcsQ0FBQzZCLEVBQUw7QUFBeEYsT0FDRzdCLEdBQUcsQ0FBQ3FDLEtBRFAsQ0FERixDQURZO0FBQUEsR0FBYixDQVRILENBREYsQ0FERjtBQXFCRCxDQTlDRDs7QUFnRGVDLGdGQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNZ0IsZ0JBQWdCLEdBQUd2SSwyRUFBVSxDQUFDLFVBQUEzRCxLQUFLO0FBQUEsU0FBSztBQUM1Q21NLFlBQVEsRUFBRTtBQUNScEcsY0FBUSxFQUFFLE9BREY7QUFFUnFHLFlBQU0sRUFBRXBNLEtBQUssQ0FBQ2tFLE9BQU4sQ0FBYyxFQUFkLENBRkE7QUFHUm1JLFdBQUssRUFBRXJNLEtBQUssQ0FBQ2tFLE9BQU4sQ0FBYyxDQUFkLENBSEM7QUFJUjhCLFlBQU0sRUFBRTtBQUpBLEtBRGtDO0FBTzVDc0csVUFBTSxFQUFFO0FBQ052RyxjQUFRLEVBQUUsVUFESjtBQUVOd0csU0FBRyxFQUFFLENBRkM7QUFHTkYsV0FBSyxFQUFFLEVBSEQ7QUFJTnJHLFlBQU0sRUFBRTtBQUpGO0FBUG9DLEdBQUw7QUFBQSxDQUFOLENBQW5DOztBQWVBLElBQU13RyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUExSyxLQUFLLEVBQUk7QUFDcEMsTUFBTTBDLENBQUMsR0FBRzBILGdCQUFnQixFQUExQjs7QUFEb0Msb0JBRXlCekgsd0RBQVUsQ0FBQzlELDhDQUFELENBRm5DO0FBQUE7QUFBQTtBQUFBLE1BRTNCUyxRQUYyQixpQkFFM0JBLFFBRjJCO0FBQUEsTUFFakJGLElBRmlCLGlCQUVqQkEsSUFGaUI7QUFBQSxNQUVYRyxNQUZXLGlCQUVYQSxNQUZXO0FBQUEsTUFFSEYsSUFGRyxpQkFFSEEsSUFGRztBQUFBLE1BRUdJLE1BRkgsaUJBRUdBLE1BRkg7QUFBQSxNQUVhUyxRQUZiOztBQUlwQyxNQUFNcUksVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQVdDLEdBQVgsRUFBZ0JDLEVBQWhCO0FBQUEsV0FBd0I7QUFBRUgsU0FBRyxFQUFIQSxHQUFGO0FBQU9DLFNBQUcsRUFBSEEsR0FBUDtBQUFZQyxTQUFHLEVBQUhBLEdBQVo7QUFBaUJDLFFBQUUsRUFBRkE7QUFBakIsS0FBeEI7QUFBQSxHQUFuQjs7QUFFQSxNQUFNeEQsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQXhGLENBQUMsRUFBSTtBQUNsQixRQUFJZ0wsS0FBSyxHQUFHdEwsSUFBSSxDQUFDb0csTUFBTCxDQUFZLFVBQUFDLENBQUM7QUFBQSxhQUFJLENBQUNwRyxRQUFRLENBQUMrQixRQUFULENBQWtCcUUsQ0FBQyxDQUFDaUQsRUFBcEIsQ0FBTDtBQUFBLEtBQWIsQ0FBWjtBQUVBLFFBQUlkLElBQUksR0FBRyxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQlAsTUFBdEIsQ0FBNkIsVUFBQ1EsR0FBRCxFQUFNcEMsQ0FBTixFQUFZO0FBQ2xELCtCQUFZb0MsR0FBWixzQkFBa0JwQyxDQUFsQixFQUFzQmlGLEtBQUssQ0FBQ3JELE1BQU4sQ0FBYSxVQUFDQyxHQUFELEVBQU1DLEVBQU47QUFBQSxlQUFjQSxFQUFFLENBQUM5QixDQUFELENBQUYsR0FBUTZCLEdBQUcsQ0FBQ0ksTUFBSixDQUFXSCxFQUFFLENBQUM5QixDQUFELENBQWIsQ0FBUixHQUE0QjZCLEdBQTFDO0FBQUEsT0FBYixFQUE2RCxFQUE3RCxDQUF0QjtBQUNELEtBRlUsRUFFUixFQUZRLENBQVg7QUFHQU0sUUFBSSxxQkFBUXpJLElBQUksQ0FBQ0csTUFBRCxDQUFaLE1BQXlCc0ksSUFBekIsQ0FBSjs7QUFDQSxRQUFJQyxHQUFHLHFCQUFRMUksSUFBUixzQkFBZUcsTUFBZixFQUF3QnNJLElBQXhCLEVBQVA7O0FBQ0EzSCxZQUFRLENBQUM7QUFBRWYsVUFBSSxFQUFFLE1BQVI7QUFBZ0JDLFVBQUksRUFBRTBJO0FBQXRCLEtBQUQsQ0FBUjtBQUVBbkgsV0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQitKLEtBQXBCO0FBQ0QsR0FYRDs7QUFhQSxNQUFNekYsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQXZGLENBQUMsRUFBSTtBQUNmLFFBQUlOLElBQUksQ0FBQ3VMLEtBQUwsQ0FBVyxVQUFBbEYsQ0FBQztBQUFBLGFBQUlBLENBQUMsQ0FBQzhDLEdBQUYsSUFBUzlDLENBQUMsQ0FBQytDLEdBQVgsSUFBa0IvQyxDQUFDLENBQUNnRCxHQUF4QjtBQUFBLEtBQVosQ0FBSixFQUE4QztBQUM1QyxVQUFNNUIsR0FBRyxHQUFHeUIsVUFBVSxDQUFDSixTQUFELEVBQVlBLFNBQVosRUFBdUJBLFNBQXZCLEVBQWtDMEMsSUFBSSxDQUFDQyxHQUFMLEVBQWxDLENBQXRCO0FBQ0E1SyxjQUFRLENBQUM7QUFBRWYsWUFBSSxFQUFFLE1BQVI7QUFBZ0JFLFlBQUksRUFBRUEsSUFBSSxDQUFDc0ksTUFBTCxDQUFZYixHQUFaO0FBQXRCLE9BQUQsQ0FBUjtBQUNEO0FBQ0YsR0FMRDs7QUFPQSxNQUFNaUUsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFRbkwsUUFBUixFQUFrQm9MLElBQWxCLEVBQTJCO0FBQ3RDLFdBQU96TSwyREFBQyxDQUFDME0saUVBQUQsRUFBVTtBQUFFRixXQUFLLEVBQUxBO0FBQUYsS0FBVixFQUFxQnhNLDJEQUFDLENBQUMyTSw2REFBRCxFQUFNO0FBQUVDLFdBQUssRUFBRSxTQUFUO0FBQW9CL0YsZUFBUyxFQUFFM0MsQ0FBQyxDQUFDMkgsUUFBakM7QUFBMkNyRSxhQUFPLEVBQUVuRztBQUFwRCxLQUFOLEVBQXNFckIsMkRBQUMsQ0FBQ3lNLElBQUQsQ0FBdkUsQ0FBdEIsQ0FBUjtBQUNELEdBRkQ7O0FBSUEsTUFBTUksYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBMUwsQ0FBQyxFQUFJO0FBQ3pCTyxZQUFRLENBQUM7QUFBRWYsVUFBSSxFQUFFLFFBQVI7QUFBa0JNLFlBQU0sRUFBRSxDQUFDQTtBQUEzQixLQUFELENBQVI7QUFDQVMsWUFBUSxDQUFDO0FBQUVmLFVBQUksRUFBRSxVQUFSO0FBQW9CRyxjQUFRLEVBQUU7QUFBOUIsS0FBRCxDQUFSO0FBQ0QsR0FIRDs7QUFLQSxTQUFPZCwyREFBQyxDQUNOOE0sOENBRE0sRUFFTixJQUZNLEVBR04sQ0FBQzdMLE1BQUQsS0FBWUgsUUFBUSxDQUFDdUosTUFBVCxLQUFvQixDQUFwQixHQUF3QmtDLElBQUksQ0FBQyxLQUFELEVBQVE3RixHQUFSLEVBQWFxRyw2REFBYixDQUE1QixHQUFvRFIsSUFBSSxDQUFDLFFBQUQsRUFBVzVGLE1BQVgsRUFBbUJxRyxnRUFBbkIsQ0FBcEUsQ0FITSxFQUlOaE4sMkRBQUMsQ0FBQ2lOLGdFQUFELEVBQVM7QUFDUkwsU0FBSyxFQUFFLFNBREM7QUFFUnZCLFdBQU8sRUFBRXBLLE1BRkQ7QUFHUmlNLFlBQVEsRUFBRUwsYUFIRjtBQUlSM0osU0FBSyxFQUFFLElBSkM7QUFLUjJELGFBQVMsRUFBRTNDLENBQUMsQ0FBQzhIO0FBTEwsR0FBVCxDQUpLLENBQVI7QUFZRCxDQS9DRDs7QUFpRGVFLG1GQUFmLEU7Ozs7Ozs7Ozs7OztBQ3pFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTTlJLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFBM0QsS0FBSztBQUFBLFNBQUs7QUFDckN5SSxRQUFJLEVBQUU7QUFDSmdGLGNBQVEsRUFBRTtBQUROLEtBRCtCO0FBSXJDQyxVQUFNLEVBQUU7QUFDTjNILGNBQVEsRUFBRTtBQURKLEtBSjZCO0FBT3JDNEgsY0FBVSxFQUFFO0FBQ1ZySSxXQUFLLEVBQUV0RixLQUFLLENBQUNrRSxPQUFOLENBQWMsR0FBZCxDQURHO0FBRVYwSixZQUFNLEVBQUUsTUFGRTtBQUdWN0gsY0FBUSxFQUFFLFVBSEE7QUFJVjhILG1CQUFhLEVBQUUsTUFKTDtBQUtWaEssYUFBTyxFQUFFLE1BTEM7QUFNVmlLLGdCQUFVLEVBQUUsUUFORjtBQU9WQyxvQkFBYyxFQUFFO0FBUE4sS0FQeUI7QUFnQnJDQyxhQUFTLEVBQUU7QUFDVGQsV0FBSyxFQUFFO0FBREUsS0FoQjBCO0FBbUJyQ2UsY0FBVSxFQUFFO0FBQ1ZDLGFBQU8sRUFBRWxPLEtBQUssQ0FBQ2tFLE9BQU4sQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBREM7QUFFVm9CLFdBQUssRUFBRTtBQUZHLEtBbkJ5QjtBQXVCckM2SSxTQUFLLEVBQUU7QUFDTG5LLFlBQU0sRUFBRWhFLEtBQUssQ0FBQ2tFLE9BQU4sQ0FBYyxDQUFkO0FBREg7QUF2QjhCLEdBQUw7QUFBQSxDQUFOLENBQTVCO0FBNEJlLFNBQVNrSyxZQUFULE9BQXFDO0FBQUEsTUFBYjNILFNBQWEsUUFBYkEsU0FBYTtBQUNsRCxNQUFNMkIsT0FBTyxHQUFHMUUsU0FBUyxFQUF6QjtBQUVBLFNBQ0UsMkRBQUMsaUVBQUQ7QUFBUyxhQUFTLEVBQUUwRSxPQUFPLENBQUNLO0FBQTVCLEtBQ0U7QUFBSyxhQUFTLEVBQUVMLE9BQU8sQ0FBQ3NGO0FBQXhCLEtBQ0U7QUFBSyxhQUFTLEVBQUV0RixPQUFPLENBQUN1RjtBQUF4QixLQUNFLDJEQUFDLGdFQUFELE9BREYsQ0FERixFQUlFLDJEQUFDLCtEQUFEO0FBQ0UsZUFBVyxFQUFDLGNBRGQ7QUFFRSxXQUFPLEVBQUU7QUFDUGxGLFVBQUksRUFBRUwsT0FBTyxDQUFDNEYsU0FEUDtBQUVQRyxXQUFLLEVBQUUvRixPQUFPLENBQUM2RjtBQUZSLEtBRlg7QUFNRSxZQUFRLEVBQUUsa0JBQUEzTixDQUFDO0FBQUEsYUFBSW1HLFNBQVMsQ0FBQ25HLENBQUMsQ0FBQ3NFLE1BQUYsQ0FBU3BCLEtBQVQsQ0FBZTZLLElBQWYsRUFBRCxDQUFiO0FBQUE7QUFOYixJQUpGLENBREYsQ0FERjtBQWlCRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RERDtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNbkMsZ0JBQWdCLEdBQUd2SSwyRUFBVSxDQUFDLFVBQUEzRCxLQUFLO0FBQUEsU0FBSztBQUM1Q21NLFlBQVEsRUFBRTtBQUNScEcsY0FBUSxFQUFFLE9BREY7QUFFUnFHLFlBQU0sRUFBRXBNLEtBQUssQ0FBQ2tFLE9BQU4sQ0FBYyxFQUFkLENBRkE7QUFHUm1JLFdBQUssRUFBRXJNLEtBQUssQ0FBQ2tFLE9BQU4sQ0FBYyxDQUFkLENBSEM7QUFJUjhCLFlBQU0sRUFBRTtBQUpBLEtBRGtDO0FBTzVDc0csVUFBTSxFQUFFO0FBQ052RyxjQUFRLEVBQUUsVUFESjtBQUVOd0csU0FBRyxFQUFFLENBRkM7QUFHTkYsV0FBSyxFQUFFLEVBSEQ7QUFJTnJHLFlBQU0sRUFBRTtBQUpGO0FBUG9DLEdBQUw7QUFBQSxDQUFOLENBQW5DO0FBZUEsSUFBTXRDLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFBM0QsS0FBSztBQUFBLFNBQUs7QUFDckN5SSxRQUFJLEVBQUU7QUFDSm5ELFdBQUssRUFBRTtBQURILEtBRCtCO0FBSXJDK0MsU0FBSyxFQUFFO0FBQ0wvQyxXQUFLLEVBQUUsTUFERjtBQUVMaEIsa0JBQVksRUFBRXRFLEtBQUssQ0FBQ2tFLE9BQU4sQ0FBYyxDQUFkO0FBRlQsS0FKOEI7QUFRckNvSyxTQUFLLEVBQUU7QUFDTEMsY0FBUSxFQUFFO0FBREwsS0FSOEI7QUFXckNDLGdCQUFZLEVBQUU7QUFDWkMsZUFBUyxFQUFFO0FBREM7QUFYdUIsR0FBTDtBQUFBLENBQU4sQ0FBNUI7O0FBZ0JBLElBQU1wRSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBV0MsR0FBWCxFQUFnQkMsRUFBaEI7QUFBQSxTQUF3QjtBQUFFSCxPQUFHLEVBQUhBLEdBQUY7QUFBT0MsT0FBRyxFQUFIQSxHQUFQO0FBQVlDLE9BQUcsRUFBSEEsR0FBWjtBQUFpQkMsTUFBRSxFQUFGQTtBQUFqQixHQUF4QjtBQUFBLENBQW5COztBQUVlLFNBQVNpRSxhQUFULEdBQXlCO0FBQ3RDLE1BQU1sSyxDQUFDLEdBQUcwSCxnQkFBZ0IsRUFBMUI7O0FBRHNDLG9CQUVQekgsd0RBQVUsQ0FBQzlELDhDQUFELENBRkg7QUFBQTtBQUFBLE1BRTdCWSxNQUY2QixtQkFFN0JBLE1BRjZCO0FBQUEsTUFFbkJTLFFBRm1COztBQUl0QyxTQUFPMUIsMkRBQUMsQ0FDTnFPLCtEQURNLEVBRU47QUFBRXhILGFBQVMsRUFBRTNDLENBQUMsQ0FBQzZEO0FBQWYsR0FGTSxFQUdOL0gsMkRBQUMsQ0FBQ3NPLHVEQUFELENBSEssRUFJTixDQUFDck4sTUFBRCxHQUNJakIsMkRBQUMsQ0FDQyxLQURELEVBRUM7QUFBRTZHLGFBQVMsRUFBRTNDLENBQUMsQ0FBQ2dLO0FBQWYsR0FGRCxFQUdDbE8sMkRBQUMsQ0FBQ3VPLCtEQUFELEVBQVE7QUFBRTFILGFBQVMsRUFBRTNDLENBQUMsQ0FBQzhKLEtBQWY7QUFBc0JRLFFBQUksRUFBRTtBQUE1QixHQUFSLEVBQWdEeE8sMkRBQUMsQ0FBQ3lPLG9EQUFELENBQWpELEVBQWdFek8sMkRBQUMsQ0FBQzhKLG9EQUFELENBQWpFLENBSEYsQ0FETCxHQU1JOUosMkRBQUMsQ0FBQzRFLDRDQUFELENBVkMsQ0FBUjtBQVlEO0FBQ0QsQ0FFQztBQURDOztBQUVGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUUsV0FBVyxHQUFHLEdBQXBCO0FBQ0EsSUFBTTFCLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFBM0QsS0FBSztBQUFBLFNBQUs7QUFDckN5SSxRQUFJLEVBQUU7QUFDSjVFLGFBQU8sRUFBRTtBQURMLEtBRCtCO0FBSXJDbUwsVUFBTSxFQUFFO0FBQ04xSixXQUFLLHdCQUFpQkYsV0FBakIsUUFEQztBQUVONkosZ0JBQVUsRUFBRTdKO0FBRk4sS0FKNkI7QUFTckM4SixXQUFPLEVBQUU7QUFDUHpCLGNBQVEsRUFBRSxDQURIO0FBRVAwQixxQkFBZSxFQUFFblAsS0FBSyxDQUFDRSxPQUFOLENBQWMyRixVQUFkO0FBRlY7QUFUNEIsR0FBTDtBQUFBLENBQU4sQ0FBNUI7QUFlZSxTQUFTdUosbUJBQVQsR0FBK0I7QUFDNUMsTUFBTWhILE9BQU8sR0FBRzFFLFNBQVMsRUFBekI7O0FBRDRDLGtCQUVOOEMsc0RBQVEsQ0FBQyxFQUFELENBRkY7QUFBQTtBQUFBLE1BRXJDRSxXQUZxQztBQUFBLE1BRXhCQyxjQUZ3QixrQkFJNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQ0U7QUFBSyxhQUFTLEVBQUV5QixPQUFPLENBQUNLO0FBQXhCLEtBQ0UsMkRBQUMsMERBQUQsT0FERixFQUdFO0FBQU0sYUFBUyxFQUFFTCxPQUFPLENBQUM4RztBQUF6QixLQUNFLDJEQUFDLHlEQUFELEVBQVd4SSxXQUFYLENBREYsQ0FIRixDQURGO0FBU0QsQzs7Ozs7Ozs7Ozs7O0FDckREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU0xRyxLQUFLLEdBQUdDLCtFQUFjLENBQUM7QUFDM0JDLFNBQU8sRUFBRTtBQUNQQyxXQUFPLEVBQUVDLG9FQUFJQTtBQUROO0FBRGtCLENBQUQsQ0FBNUI7QUFNQWlQLGdEQUFRLENBQUNDLE1BQVQsQ0FDRSwyREFBQyxpRUFBRDtBQUFlLE9BQUssRUFBRXRQO0FBQXRCLEdBQ0UsMkRBQUMscUVBQUQsT0FERixFQUVFLDJEQUFDLDJEQUFELE9BRkYsQ0FERixFQUtFdVAsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBTEYsRSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXguanNcIixcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCBhcyBmLCBjcmVhdGVFbGVtZW50IGFzIGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJ3R5cGVmYWNlLXJvYm90byc7XG5pbXBvcnQgT3B0aW9ucyBmcm9tICcuL09wdGlvbnNQYWdlL2luZGV4JztcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XG5pbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgYmx1ZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvYmx1ZSc7XG5pbXBvcnQgU3RvcmUgZnJvbSAnLi9PcHRpb25zUGFnZS9TdG9yZSc7XG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgcHJpbWFyeTogYmx1ZSxcbiAgICBzZWNvbmRhcnk6IGJsdWVcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IGUoVGhlbWVQcm92aWRlciwgeyB0aGVtZSB9LCBlKENzc0Jhc2VsaW5lKSwgZShTdG9yZSwgbnVsbCwgZShPcHRpb25zKSkpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgRnJhZ21lbnQgYXMgZiwgY3JlYXRlRWxlbWVudCBhcyBlLCB1c2VSZWR1Y2VyLCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ2RhdGEnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGRhdGE6IGFjdGlvbi5kYXRhIH07XG4gICAgY2FzZSAncm93cyc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcm93czogYWN0aW9uLnJvd3MgfTtcbiAgICBjYXNlICdzZWxlY3RlZCc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc2VsZWN0ZWQ6IGFjdGlvbi5zZWxlY3RlZCB9O1xuICAgIGNhc2UgJ2RvbWFpbic6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZG9tYWluOiBhY3Rpb24uZG9tYWluIH07XG4gICAgY2FzZSAnZXJyb3InOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGVycm9yOiBhY3Rpb24uZXJyb3IgfTtcbiAgICBjYXNlICd0b2dnbGUnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHRvZ2dsZTogYWN0aW9uLnRvZ2dsZSB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmNvbnN0IGRlYm91bmNlID0gKF8gPT4ge1xuICBsZXQgdGltZSA9IG51bGw7XG4gIHJldHVybiBjYWxsYmFjayA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWUpO1xuICAgIHRpbWUgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfSwgMTAwKTtcbiAgfTtcbn0pKCk7XG5cbmNvbnN0IFN0b3JlID0gcHJvcHMgPT4ge1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwge1xuICAgIGRhdGE6IHt9LFxuICAgIHJvd3M6IFtdLFxuICAgIHNlbGVjdGVkOiBbXSxcbiAgICBkb21haW46ICcnLFxuICAgIGVycm9yOiBmYWxzZSxcbiAgICB0b2dnbGU6IGZhbHNlXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQobnVsbCwgZGF0YSA9PiB7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdkYXRhJywgZGF0YSB9KTtcbiAgICAgIGxldCBmaXJzdCA9IE9iamVjdC5rZXlzKGRhdGEpWzBdO1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnZG9tYWluJywgZG9tYWluOiBmaXJzdCA9PT0gJ2dsb2JhbENzcycgPyAnJyA6IGZpcnN0IH0pO1xuICAgICAgY29uc29sZS5sb2coJ+iOt+WPluaVsOaNricsIGRhdGEpO1xuICAgIH0pO1xuXG4gICAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChyZXF1ZXN0LCBzZW5kZXIpID0+IHtcbiAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KG51bGwsIGRhdGEgPT4ge1xuICAgICAgICBpZiAocmVxdWVzdCA9PT0gJ3NlbCcpIHtcbiAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdkYXRhJywgZGF0YSB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBkb21haW4gPSBuZXcgVVJMKHNlbmRlci51cmwpLmhvc3RuYW1lO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcXVlc3QsIGRvbWFpbik7XG5cbiAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoZGF0YSkuaW5jbHVkZXMoZG9tYWluKSkge1xuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnZG9tYWluJywgZG9tYWluIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRlYm91bmNlKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCflhajlsYDllYblupc6ICcsIHN0YXRlLmRhdGEpO1xuICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoc3RhdGUuZGF0YSk7XG4gICAgfSk7XG4gIH0sIFtzdGF0ZV0pO1xuXG4gIGNvbnN0IE0gPSB1c2VNZW1vKF8gPT4gZShDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBbc3RhdGUsIGRpc3BhdGNoXSB9LCBwcm9wcy5jaGlsZHJlbiksIFtzdGF0ZV0pO1xuICByZXR1cm4gTTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JlO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuLi9TdG9yZSc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgY29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgbWF4V2lkdGg6IDk2MCxcbiAgICBtYXJnaW46ICdhdXRvJ1xuICB9LFxuICB0ZXh0RmllbGQ6IHtcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoNCwgMSksXG4gICAgJyYgdGV4dGFyZWEnOiB7XG4gICAgICBmb250RmFtaWx5OiAnRmlyYSBDb2RlIFJlZ3VsYXInLFxuICAgICAgZm9udFNpemU6ICcxNHB4J1xuICAgIH1cbiAgfSxcbiAgbGFzdDoge1xuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZyg4KVxuICB9XG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE91dGxpbmVkVGV4dEZpZWxkcygpIHtcbiAgY29uc3QgYyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbeyBkYXRhLCBkb21haW4gfSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChDb250ZXh0KTtcblxuICBjb25zdCBzZXRMb2NhbENzcyA9IGUgPT4ge1xuICAgIGlmICghZG9tYWluKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNzcyA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IG5ld0NzcyA9IHsgLi4uZGF0YVtkb21haW5dLCBjc3MgfTtcbiAgICBsZXQgbmV3ZGF0YSA9IHsgLi4uZGF0YSwgW2RvbWFpbl06IG5ld0NzcyB9O1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ2RhdGEnLCBkYXRhOiBuZXdkYXRhIH0pO1xuICB9O1xuXG4gIGNvbnN0IHNldEdsb2JhbENzcyA9IGUgPT4ge1xuICAgIGNvbnN0IGNzcyA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGxldCBhID0geyAuLi5kYXRhLCBnbG9iYWxDc3M6IGNzcyB9O1xuICAgIGNvbnNvbGUubG9nKGEpO1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ2RhdGEnLCBkYXRhOiBhIH0pO1xuICB9O1xuXG4gIGxldCBDc3MgPSAnJztcbiAgaWYgKGRhdGFbZG9tYWluXSkge1xuICAgIENzcyA9IGRhdGFbZG9tYWluXS5jc3MgfHwgJyc7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgbWF4V2lkdGg9J21kJz5cbiAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgbGFiZWw9e2RvbWFpbiB8fCAn5pyq6YCJ5oupJ31cbiAgICAgICAgbXVsdGlsaW5lXG4gICAgICAgIHJvd3M9JzgnXG4gICAgICAgIGNsYXNzTmFtZT17Yy50ZXh0RmllbGR9XG4gICAgICAgIG1hcmdpbj0nbm9ybWFsJ1xuICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcbiAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgIG9uQ2hhbmdlPXtzZXRMb2NhbENzc31cbiAgICAgICAgaWQ9J3RleHQnXG4gICAgICAgIHZhbHVlPXtDc3N9XG4gICAgICAgIHBsYWNlaG9sZGVyPSfpu5jorqTov5DnlKjlhajlsYAnXG4gICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgIHNocmluazogdHJ1ZVxuICAgICAgICB9fVxuICAgICAgLz5cblxuICAgICAgPFRleHRGaWVsZFxuICAgICAgICBsYWJlbD0n5YWo5bGAJ1xuICAgICAgICBtdWx0aWxpbmVcbiAgICAgICAgcm93cz0nOCdcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjLnRleHRGaWVsZH0gJHtjLmxhc3R9YH1cbiAgICAgICAgbWFyZ2luPSdub3JtYWwnXG4gICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xuICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgdmFsdWU9e2RhdGEuZ2xvYmFsQ3NzfVxuICAgICAgICBvbkNoYW5nZT17c2V0R2xvYmFsQ3NzfVxuICAgICAgICBpZD0ndGV4dCdcbiAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgc2hyaW5rOiB0cnVlXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCwgRnJhZ21lbnQgYXMgZiwgY3JlYXRlRWxlbWVudCBhcyBlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgRHJhd2VyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RyYXdlcic7XG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcbmltcG9ydCBMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3QnO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9TZWFyY2gnO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4uL1N0b3JlJztcblxuY29uc3QgZHJhd2VyV2lkdGggPSAzMDA7XG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIGRyYXdlcjoge1xuICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcbiAgICBmbGV4U2hyaW5rOiAwLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICB9LFxuICBkcmF3ZXJQYXBlcjoge1xuICAgIHdpZHRoOiBkcmF3ZXJXaWR0aFxuICB9LFxuICB0b29sYmFyOiB0aGVtZS5taXhpbnMudG9vbGJhcixcbiAgYm94OiB7XG4gICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHpJbmRleDogMTAsXG4gICAgd2lkdGg6IGRyYXdlcldpZHRoIC0gNSxcbiAgICB0cmFuc2l0aW9uOiAnYm94LXNoYWRvdyAwLjNzIGVhc2UtaW4tb3V0J1xuICB9LFxuICBzaGFkb3c6IHtcbiAgICBib3hTaGFkb3c6ICcwcHggMnB4IDRweCAtMXB4ICMwMDAwMDAzMywgMHB4IDRweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xNCksIDBweCAxcHggMTBweCAwcHggcmdiYSgwLDAsMCwwLjEyKSdcbiAgfSxcbiAgdHh0OiB7XG4gICAgcGFkZGluZ0xlZnQ6IDhcbiAgfVxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBfID0+IHtcbiAgY29uc3QgYyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IFt0eHQsIHNldEZpbHRlcl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtjdXJyZW50RGF0YSwgc2V0Q3VycmVudERhdGFdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbeyBkYXRhLCBkb21haW4gfSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChDb250ZXh0KTtcbiAgLy8gY29uc29sZS5sb2coMTEsIHVzZUNvbnRleHQoQ29udGV4dCkpO1xuICAvLyBjb25zb2xlLmxvZygn5oq95bGJOicsIGRhdGEpO1xuXG4gIGNvbnN0IHNjcm9sbCA9IGUgPT4ge1xuICAgIGUudGFyZ2V0LnNjcm9sbFRvcCA+IDMwICYmIHJlZi5jdXJyZW50LmNsYXNzTGlzdC5hZGQoYy5zaGFkb3cpO1xuICAgIGUudGFyZ2V0LnNjcm9sbFRvcCA8IDMwICYmIHJlZi5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoYy5zaGFkb3cpO1xuICB9O1xuXG4gIGNvbnN0IFNlYXJjaEJveCA9IGUoJ2RpdicsIHsgY2xhc3NOYW1lOiBjLmJveCwgcmVmIH0sIGUoU2VhcmNoLCB7IHNldEZpbHRlciB9KSwgZShEaXZpZGVyKSk7XG5cbiAgY29uc3QgcmVuZGVybGlzdCA9IE9iamVjdC5rZXlzKGRhdGEpXG4gICAgLmZpbHRlcih2ID0+IHYgIT09ICdnbG9iYWxDc3MnKVxuICAgIC5maWx0ZXIodiA9PiB2LmluY2x1ZGVzKHR4dCkpXG4gICAgLm1hcCgodiwgaSkgPT5cbiAgICAgIGUoXG4gICAgICAgIExpc3RJdGVtLFxuICAgICAgICB7IGJ1dHRvbjogdHJ1ZSwga2V5OiBpLCBvbkNsaWNrOiBlID0+IGRpc3BhdGNoKHsgdHlwZTogJ2RvbWFpbicsIGRvbWFpbjogdiB9KSwgc2VsZWN0ZWQ6IGRvbWFpbiA9PT0gdiB9LFxuICAgICAgICBlKExpc3RJdGVtVGV4dCwgeyBwcmltYXJ5OiB2LCBjbGFzc05hbWU6IGMudHh0IH0pXG4gICAgICApXG4gICAgKTtcblxuICBjb25zdCBsaXN0Qm94ID0gZShMaXN0LCBudWxsLCByZW5kZXJsaXN0KTtcblxuICBjb25zdCBkcmF3ZXJPcHRpb24gPSB7XG4gICAgY2xhc3NOYW1lOiBjLmRyYXdlcixcbiAgICB2YXJpYW50OiAncGVybWFuZW50JyxcbiAgICBjbGFzc2VzOiB7IHBhcGVyOiBjLmRyYXdlclBhcGVyIH0sXG4gICAgYW5jaG9yOiAnbGVmdCcsXG4gICAgb25TY3JvbGw6IHNjcm9sbFxuICB9O1xuXG4gIHJldHVybiBlKERyYXdlciwgZHJhd2VyT3B0aW9uLCBTZWFyY2hCb3gsIGUoJ2RpdicsIHsgY2xhc3NOYW1lOiBjLnRvb2xiYXIgfSksIGxpc3RCb3gpO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIEZyYWdtZW50IGFzIGYsIGNyZWF0ZUVsZW1lbnQgYXMgZSwgdXNlQ29udGV4dCwgdXNlTWVtbywgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnLi4vU3RvcmUnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICAnJiA+IGRpdjo6YmVmb3JlJzoge1xuICAgICAgYm9yZGVyQm90dG9tQ29sb3I6ICcjMDAwMDAwMDAnXG4gICAgfVxuICB9XG59KSk7XG5cbmNvbnN0IElucHV0TWUgPSAoeyByb3csIGZpZWxkIH0pID0+IHtcbiAgY29uc3QgYyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbeyByb3dzLCBkb21haW4sIGRhdGEsIGVycm9yIH0sIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XG4gIGNvbnN0IFtFcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbVHh0LCBzZXRUeHRdID0gdXNlU3RhdGUoJycpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0RXJyb3IoZmFsc2UpO1xuICAgIHNldFR4dCgnJyk7XG4gIH0sIFtkYXRhXSk7XG5cbiAgY29uc3QgZm4gPSB2ID0+IHtcbiAgICByZXR1cm4gWy4uLm5ldyBTZXQocm93cy5yZWR1Y2UoKGFjYywgdjIpID0+ICh2Mlt2XSAmJiBpc05hTihwYXJzZUZsb2F0KHYyW3ZdKSkgPyBhY2MuY29uY2F0KHYyW3ZdKSA6IGFjYyksIFtdKSldO1xuICB9O1xuXG4gIGNvbnN0IFN1Ym1pdCA9IGUgPT4ge1xuICAgIGxldCBvYmoyID0gWydzdHknLCAnZGVmJywgJ21pZCddLnJlZHVjZSgob2JqLCB2KSA9PiB7XG4gICAgICByZXR1cm4geyAuLi5vYmosIFt2XTogZm4odikgfTtcbiAgICB9LCB7fSk7XG4gICAgb2JqMiA9IHsgLi4uZGF0YVtkb21haW5dLCAuLi5vYmoyIH07XG4gICAgY29uc29sZS5sb2coJ29iajInLCBvYmoyKTtcblxuICAgIGxldCBvYmogPSB7IC4uLmRhdGEsIFtkb21haW5dOiBvYmoyIH07XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnZGF0YScsIGRhdGE6IG9iaiB9KTtcbiAgfTtcblxuICBjb25zdCBlZGl0ID0gZSA9PiB7XG4gICAgaWYgKCFkb21haW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdmFsID0gZS50YXJnZXQudmFsdWU7XG4gICAgaWYgKCFpc05hTihwYXJzZUZsb2F0KHZhbCkpKSB7XG4gICAgICBzZXRFcnJvcih0cnVlKTtcbiAgICAgIHNldFR4dCgn6YCJ5oup5Zmo5LiN6IO95piv5pWw5a2XJyk7XG4gICAgfSBlbHNlIGlmIChyb3dzLm1hcCh2ID0+IHZbZmllbGRdKS5pbmNsdWRlcyh2YWwpICYmIHZhbCkge1xuICAgICAgc2V0RXJyb3IodHJ1ZSk7XG4gICAgICBzZXRUeHQoJ+mHjeWkjemAieaLqeWZqCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRFcnJvcihmYWxzZSk7XG4gICAgICBzZXRUeHQoJycpO1xuICAgIH1cblxuICAgIGRpc3BhdGNoKHsgdHlwZTogJ2Vycm9yJywgZXJyb3I6IHZhbCB9KTtcblxuICAgIGNvbnN0IG5ld1JvdyA9IHsgLi4ucm93LCBbZmllbGRdOiB2YWwgfTtcbiAgICBsZXQgbmV3Um93cyA9IHJvd3MubWFwKHYgPT4gKHYgPT09IHJvdyA/IG5ld1JvdyA6IHYpKTtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdyb3dzJywgcm93czogbmV3Um93cyB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxUZXh0RmllbGRcbiAgICAgIHZhbHVlPXtyb3dbZmllbGRdID09PSB1bmRlZmluZWQgPyAnJyA6IHJvd1tmaWVsZF19XG4gICAgICBvbkNoYW5nZT17ZWRpdH1cbiAgICAgIGNsYXNzZXM9e3sgcm9vdDogYy5yb290IH19XG4gICAgICBvbkNsaWNrPXtlID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XG4gICAgICBvbkJsdXI9e1N1Ym1pdH1cbiAgICAgIGxhYmVsPXtUeHR9XG4gICAgICBlcnJvcj17ISEoZXJyb3IgPT09IHJvd1tmaWVsZF0gJiYgZXJyb3IgJiYgRXJyb3IpfVxuICAgIC8+XG4gICk7XG59O1xuXG5jb25zdCBNeUlucHV0ID0gcHJvcHMgPT4ge1xuICByZXR1cm4gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3h4eHh4eHgnKTtcbiAgICByZXR1cm4gPElucHV0TWUgey4uLnByb3BzfSAvPjtcbiAgfSwgW3Byb3BzLnJvd10pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlJbnB1dDtcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCBhcyBmLCBjcmVhdGVFbGVtZW50IGFzIGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keSc7XG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3cnO1xuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGwnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3gnO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4uL1N0b3JlJztcbmltcG9ydCBJbnB1dE1lIGZyb20gJy4vTXlJbnB1dCc7XG5cbmNvbnN0IE15VGFibGVCb2R5ID0gXyA9PiB7XG4gIGNvbnN0IFt7IGRhdGEsIHNlbGVjdGVkLCByb3dzLCBkb21haW4gfSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChDb250ZXh0KTtcbiAgY29uc3QgY3JlYXRlRGF0YSA9IChzdHksIGRlZiwgbWlkLCBpZCkgPT4gKHsgc3R5LCBkZWYsIG1pZCwgaWQgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyh7IGRhdGEsIGRvbWFpbiB9KTtcbiAgICBjb25zb2xlLmxvZygnZGF0YVtkb21haW5dPT4gJywgZGF0YVtkb21haW5dKTtcblxuICAgIGxldCBrID0gT2JqZWN0LmtleXMoZGF0YSkuZmlsdGVyKHYgPT4gdiAhPT0gJ2dsb2JhbENzcycpO1xuICAgIGNvbnNvbGUubG9nKCfmmK/lkKbkuLrnqbonLCBrKTtcbiAgICBpZiAoay5sZW5ndGggPT09IDEpIHtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ2RvbWFpbicsIGRvbWFpbjogYCR7a31gIH0pO1xuICAgIH1cbiAgICBpZiAoZGF0YVtkb21haW5dKSB7XG4gICAgICBsZXQgeyBzdHksIGRlZiwgbWlkIH0gPSBkYXRhW2RvbWFpbl07XG4gICAgICBjb25zdCBpID0gW3N0eSwgZGVmLCBtaWRdLnJlZHVjZSgoYWNjLCB2KSA9PiAodi5sZW5ndGggPiBhY2MgPyB2Lmxlbmd0aCA6IGFjYyksIDApO1xuICAgICAgY29uc3Qgcm93cyA9IFsuLi5BcnJheShpKV0ubWFwKCh2LCBpKSA9PiBjcmVhdGVEYXRhKHN0eVtpXSB8fCAnJywgZGVmW2ldIHx8ICcnLCBtaWRbaV0gfHwgJycsIGkpKTtcbiAgICAgIGNvbnNvbGUubG9nKHJvd3MsIDExMSk7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdyb3dzJywgcm93cyB9KTtcblxuICAgICAgaWYgKCFyb3dzLmxlbmd0aCkge1xuICAgICAgICBsZXQgayA9IE9iamVjdC5rZXlzKGRhdGEpLmZpbHRlcih2ID0+IHYgIT09ICdnbG9iYWxDc3MnKTtcbiAgICAgICAgbGV0IGkgPSBrLmluZGV4T2YoZG9tYWluKSArIDE7XG4gICAgICAgIGxldCBuZXdkb20gPSBrW2ldO1xuICAgICAgICBjb25zb2xlLmxvZygn5LiL5LiA5Liq5Z+f5ZCNOicsIG5ld2RvbSk7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ2RvbWFpbicsIGRvbWFpbjogbmV3ZG9tIH0pO1xuXG4gICAgICAgIGNvbnN0IG9iaiA9IHsgLi4uZGF0YSB9O1xuICAgICAgICBkZWxldGUgb2JqW2RvbWFpbl07XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ2RhdGEnLCBkYXRhOiBvYmogfSk7XG4gICAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMucmVtb3ZlKGRvbWFpbik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdzZWxlY3RlZCcsIHNlbGVjdGVkOiBbXSB9KTtcbiAgICB9O1xuICB9LCBbZGF0YSwgZG9tYWluXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSwgaWQpID0+IHtcbiAgICBzZWxlY3RlZC5pbmNsdWRlcyhpZClcbiAgICAgID8gZGlzcGF0Y2goeyB0eXBlOiAnc2VsZWN0ZWQnLCBzZWxlY3RlZDogc2VsZWN0ZWQuZmlsdGVyKHYgPT4gdiAhPT0gaWQpIH0pXG4gICAgICA6IGRpc3BhdGNoKHsgdHlwZTogJ3NlbGVjdGVkJywgc2VsZWN0ZWQ6IHNlbGVjdGVkLmNvbmNhdChpZCkgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8VGFibGVCb2R5PlxuICAgICAge3Jvd3MubGVuZ3RoID8gKFxuICAgICAgICByb3dzLm1hcCgocm93LCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUYWJsZVJvdyBob3ZlciBvbkNsaWNrPXtlID0+IGhhbmRsZUNsaWNrKGUsIHJvdy5pZCl9IGtleT17aX0gc2VsZWN0ZWQ9e3NlbGVjdGVkLmluY2x1ZGVzKHJvdy5pZCl9PlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIHBhZGRpbmc9J2NoZWNrYm94Jz5cbiAgICAgICAgICAgICAgICA8Q2hlY2tib3ggY2hlY2tlZD17c2VsZWN0ZWQuaW5jbHVkZXMocm93LmlkKX0gLz5cbiAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgc2NvcGU9J3Jvdyc+XG4gICAgICAgICAgICAgICAgPElucHV0TWUgcm93PXtyb3d9IGZpZWxkPSdzdHknIC8+XG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPSdsZWZ0Jz5cbiAgICAgICAgICAgICAgICA8SW5wdXRNZSByb3c9e3Jvd30gZmllbGQ9J2RlZicgLz5cbiAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249J2xlZnQnPlxuICAgICAgICAgICAgICAgIDxJbnB1dE1lIHJvdz17cm93fSBmaWVsZD0nbWlkJyAvPlxuICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgICkgOiAoXG4gICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICA8VGFibGVDZWxsIGNvbFNwYW49ezR9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgYWxpZ249J2NlbnRlcicgdmFyaWFudD0nc3VidGl0bGUyJyBjb2xvcj0ndGV4dFNlY29uZGFyeSc+XG4gICAgICAgICAgICAgIOayoeacieaVsOaNrlxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgKX1cbiAgICA8L1RhYmxlQm9keT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE15VGFibGVCb2R5O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBGcmFnbWVudCBhcyBmLCBjcmVhdGVFbGVtZW50IGFzIGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGFibGVIZWFkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZCc7XG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3cnO1xuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGwnO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94JztcbmltcG9ydCBUYWJsZVNvcnRMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVNvcnRMYWJlbCc7XG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnLi4vU3RvcmUnO1xuXG5jb25zdCBoZWFkUm93cyA9IFtcbiAgeyBpZDogJ3N0eScsIGxhYmVsOiAn6L+Q55So5qC35byPJyB9LFxuICB7IGlkOiAnZGVmJywgbGFiZWw6ICfkuI3ov5DnlKjmoLflvI8nIH0sXG4gIHsgaWQ6ICdtaWQnLCBsYWJlbDogJ+W8uuWItue/u+ivkScgfVxuXTtcblxuY29uc3QgRW5oYW5jZWRUYWJsZUhlYWQgPSAoKSA9PiB7XG4gIGNvbnN0IFt7IHNlbGVjdGVkLCByb3dzLCBkYXRhIH0sIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XG5cbiAgY29uc3QgW29yZGVyLCBzZXRPcmRlcl0gPSB1c2VTdGF0ZSgnYXNjJyk7XG4gIGNvbnN0IFtvcmRlckJ5LCBzZXRPcmRlckJ5XSA9IHVzZVN0YXRlKCdzdHknKTtcbiAgY29uc3QgbnVtU2VsZWN0ZWQgPSBzZWxlY3RlZC5sZW5ndGg7XG4gIGNvbnN0IHJvd0NvdW50ID0gcm93cy5sZW5ndGg7XG5cbiAgY29uc3QgaGFuZGxlU2VsZWN0QWxsQ2xpY2sgPSBldmVudCA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jaGVja2VkKSB7XG4gICAgICBjb25zdCBuZXdTZWxlY3RlZHMgPSByb3dzLm1hcChyb3cgPT4gcm93LmlkKTtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ3NlbGVjdGVkJywgc2VsZWN0ZWQ6IG5ld1NlbGVjdGVkcyB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnc2VsZWN0ZWQnLCBzZWxlY3RlZDogW10gfSk7XG4gIH07XG5cbiAgY29uc3Qgb25SZXF1ZXN0U29ydCA9IChlLCBwcm9wZXJ0eSkgPT4ge1xuICAgIGNvbnN0IGlzRGVzYyA9IG9yZGVyQnkgPT09IHByb3BlcnR5ICYmIG9yZGVyID09PSAnZGVzYyc7XG4gICAgc2V0T3JkZXIoaXNEZXNjID8gJ2FzYycgOiAnZGVzYycpO1xuICAgIHNldE9yZGVyQnkocHJvcGVydHkpO1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ3Jvd3MnLCByb3dzOiBbLi4ucm93c10ucmV2ZXJzZSgpIH0pO1xuICB9O1xuICBjb25zdCBjcmVhdGVTb3J0SGFuZGxlciA9IHByb3BlcnR5ID0+IGUgPT4gb25SZXF1ZXN0U29ydChlLCBwcm9wZXJ0eSk7XG5cbiAgcmV0dXJuIChcbiAgICA8VGFibGVIZWFkPlxuICAgICAgPFRhYmxlUm93PlxuICAgICAgICA8VGFibGVDZWxsIHBhZGRpbmc9J2NoZWNrYm94Jz5cbiAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgIGluZGV0ZXJtaW5hdGU9e251bVNlbGVjdGVkID4gMCAmJiBudW1TZWxlY3RlZCA8IHJvd0NvdW50fVxuICAgICAgICAgICAgY2hlY2tlZD17ISFyb3dDb3VudCAmJiBudW1TZWxlY3RlZCA9PT0gcm93Q291bnR9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VsZWN0QWxsQ2xpY2t9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9UYWJsZUNlbGw+XG5cbiAgICAgICAge2hlYWRSb3dzLm1hcCgocm93LCBpKSA9PiAoXG4gICAgICAgICAgPFRhYmxlQ2VsbCBrZXk9e2l9IGFsaWduPSdsZWZ0JyBzb3J0RGlyZWN0aW9uPXtvcmRlckJ5ID09PSByb3cuaWQgPyBvcmRlciA6IGZhbHNlfT5cbiAgICAgICAgICAgIDxUYWJsZVNvcnRMYWJlbCBhY3RpdmU9e29yZGVyQnkgPT09IHJvdy5pZH0gZGlyZWN0aW9uPXtvcmRlcn0gb25DbGljaz17Y3JlYXRlU29ydEhhbmRsZXIocm93LmlkKX0+XG4gICAgICAgICAgICAgIHtyb3cubGFiZWx9XG4gICAgICAgICAgICA8L1RhYmxlU29ydExhYmVsPlxuICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICApKX1cbiAgICAgIDwvVGFibGVSb3c+XG4gICAgPC9UYWJsZUhlYWQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFbmhhbmNlZFRhYmxlSGVhZDtcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCBhcyBmLCBjcmVhdGVFbGVtZW50IGFzIGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcCc7XG5pbXBvcnQgRmFiIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ZhYic7XG5pbXBvcnQgQWRkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkJztcbmltcG9ydCBTd2l0Y2ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3dpdGNoJztcbmltcG9ydCBEZWxldGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9EZWxldGUnO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4uL1N0b3JlJztcblxuY29uc3QgdXNlVG9vbGJhclN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgYWJzb2x1dGU6IHtcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICBib3R0b206IHRoZW1lLnNwYWNpbmcoMTApLFxuICAgIHJpZ2h0OiB0aGVtZS5zcGFjaW5nKDUpLFxuICAgIHpJbmRleDogMjBcbiAgfSxcbiAgc3BhY2VyOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIHJpZ2h0OiAyMCxcbiAgICB6SW5kZXg6IDIwXG4gIH1cbn0pKTtcblxuY29uc3QgRW5oYW5jZWRUYWJsZVRvb2xiYXIgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IGMgPSB1c2VUb29sYmFyU3R5bGVzKCk7XG4gIGNvbnN0IFt7IHNlbGVjdGVkLCBkYXRhLCBkb21haW4sIHJvd3MsIHRvZ2dsZSB9LCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xuXG4gIGNvbnN0IGNyZWF0ZURhdGEgPSAoc3R5LCBkZWYsIG1pZCwgaWQpID0+ICh7IHN0eSwgZGVmLCBtaWQsIGlkIH0pO1xuXG4gIGNvbnN0IHJlbW92ZSA9IF8gPT4ge1xuICAgIGxldCByb3dzMiA9IHJvd3MuZmlsdGVyKHYgPT4gIXNlbGVjdGVkLmluY2x1ZGVzKHYuaWQpKTtcblxuICAgIGxldCBvYmoyID0gWydzdHknLCAnZGVmJywgJ21pZCddLnJlZHVjZSgob2JqLCB2KSA9PiB7XG4gICAgICByZXR1cm4geyAuLi5vYmosIFt2XTogcm93czIucmVkdWNlKChhY2MsIHYyKSA9PiAodjJbdl0gPyBhY2MuY29uY2F0KHYyW3ZdKSA6IGFjYyksIFtdKSB9O1xuICAgIH0sIHt9KTtcbiAgICBvYmoyID0geyAuLi5kYXRhW2RvbWFpbl0sIC4uLm9iajIgfTtcbiAgICBsZXQgb2JqID0geyAuLi5kYXRhLCBbZG9tYWluXTogb2JqMiB9O1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ2RhdGEnLCBkYXRhOiBvYmogfSk7XG5cbiAgICBjb25zb2xlLmxvZygneHh4eCcsIHJvd3MyKTtcbiAgfTtcblxuICBjb25zdCBhZGQgPSBfID0+IHtcbiAgICBpZiAocm93cy5ldmVyeSh2ID0+IHYuc3R5IHx8IHYuZGVmIHx8IHYubWlkKSkge1xuICAgICAgY29uc3Qgcm93ID0gY3JlYXRlRGF0YSh1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBEYXRlLm5vdygpKTtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ3Jvd3MnLCByb3dzOiByb3dzLmNvbmNhdChyb3cpIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBJY29uID0gKHRpdGxlLCBjYWxsYmFjaywgaWNvbikgPT4ge1xuICAgIHJldHVybiBlKFRvb2x0aXAsIHsgdGl0bGUgfSwgZShGYWIsIHsgY29sb3I6ICdwcmltYXJ5JywgY2xhc3NOYW1lOiBjLmFic29sdXRlLCBvbkNsaWNrOiBjYWxsYmFjayB9LCBlKGljb24pKSk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlSGFuZGxlciA9IF8gPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ3RvZ2dsZScsIHRvZ2dsZTogIXRvZ2dsZSB9KTtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdzZWxlY3RlZCcsIHNlbGVjdGVkOiBbXSB9KTtcbiAgfTtcblxuICByZXR1cm4gZShcbiAgICBmLFxuICAgIG51bGwsXG4gICAgIXRvZ2dsZSAmJiAoc2VsZWN0ZWQubGVuZ3RoID09PSAwID8gSWNvbignQWRkJywgYWRkLCBBZGRJY29uKSA6IEljb24oJ0RlbGV0ZScsIHJlbW92ZSwgRGVsZXRlSWNvbikpLFxuICAgIGUoU3dpdGNoLCB7XG4gICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgY2hlY2tlZDogdG9nZ2xlLFxuICAgICAgb25DaGFuZ2U6IHRvZ2dsZUhhbmRsZXIsXG4gICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgIGNsYXNzTmFtZTogYy5zcGFjZXJcbiAgICB9KVxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRW5oYW5jZWRUYWJsZVRvb2xiYXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoJztcbmltcG9ydCBJbnB1dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dCc7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgZmxleEdyb3c6IDFcbiAgfSxcbiAgc2VhcmNoOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgfSxcbiAgc2VhcmNoSWNvbjoge1xuICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDMuNSksXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcbiAgfSxcbiAgaW5wdXRSb290OiB7XG4gICAgY29sb3I6ICdpbmhlcml0J1xuICB9LFxuICBpbnB1dElucHV0OiB7XG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxLCAxLCAxLCA1KSxcbiAgICB3aWR0aDogJzEwMCUnXG4gIH0sXG4gIGlucHV0OiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpXG4gIH1cbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoQXBwQmFyKHsgc2V0RmlsdGVyIH0pIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPFRvb2xiYXIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNofT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoSWNvbn0+XG4gICAgICAgICAgPFNlYXJjaEljb24gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdTZWFyY2jigKYnXG4gICAgICAgICAgY2xhc3Nlcz17e1xuICAgICAgICAgICAgcm9vdDogY2xhc3Nlcy5pbnB1dFJvb3QsXG4gICAgICAgICAgICBpbnB1dDogY2xhc3Nlcy5pbnB1dElucHV0XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRGaWx0ZXIoZS50YXJnZXQudmFsdWUudHJpbSgpKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvVG9vbGJhcj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYsIEZyYWdtZW50IGFzIGYsIGNyZWF0ZUVsZW1lbnQgYXMgZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBUYWJsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZSc7XG5cbmltcG9ydCBNeVRhYmxlSGVhZCBmcm9tICcuL015VGFibGVIZWFkJztcbmltcG9ydCBNeVRhYmxlVG9vbGJhciBmcm9tICcuL015VGFibGVUb29sYmFyJztcbmltcG9ydCBNeVRhYmxlQm9keSBmcm9tICcuL015VGFibGVCb2R5JztcbmltcG9ydCBDc3MgZnJvbSAnLi9Dc3MnO1xuXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnLi4vU3RvcmUnO1xuXG5jb25zdCB1c2VUb29sYmFyU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBhYnNvbHV0ZToge1xuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIGJvdHRvbTogdGhlbWUuc3BhY2luZygxMCksXG4gICAgcmlnaHQ6IHRoZW1lLnNwYWNpbmcoNSksXG4gICAgekluZGV4OiAyMFxuICB9LFxuICBzcGFjZXI6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgcmlnaHQ6IDIwLFxuICAgIHpJbmRleDogMjBcbiAgfVxufSkpO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICB3aWR0aDogJzEwMCUnXG4gIH0sXG4gIHBhcGVyOiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMilcbiAgfSxcbiAgdGFibGU6IHtcbiAgICBtaW5XaWR0aDogNzUwXG4gIH0sXG4gIHRhYmxlV3JhcHBlcjoge1xuICAgIG92ZXJmbG93WDogJ2F1dG8nXG4gIH1cbn0pKTtcblxuY29uc3QgY3JlYXRlRGF0YSA9IChzdHksIGRlZiwgbWlkLCBpZCkgPT4gKHsgc3R5LCBkZWYsIG1pZCwgaWQgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVuaGFuY2VkVGFibGUoKSB7XG4gIGNvbnN0IGMgPSB1c2VUb29sYmFyU3R5bGVzKCk7XG4gIGNvbnN0IFt7IHRvZ2dsZSB9LCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xuXG4gIHJldHVybiBlKFxuICAgIFBhcGVyLFxuICAgIHsgY2xhc3NOYW1lOiBjLnBhcGVyIH0sXG4gICAgZShNeVRhYmxlVG9vbGJhciksXG4gICAgIXRvZ2dsZVxuICAgICAgPyBlKFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiBjLnRhYmxlV3JhcHBlciB9LFxuICAgICAgICAgIGUoVGFibGUsIHsgY2xhc3NOYW1lOiBjLnRhYmxlLCBzaXplOiAnbWVkaXVtJyB9LCBlKE15VGFibGVIZWFkKSwgZShNeVRhYmxlQm9keSkpXG4gICAgICAgIClcbiAgICAgIDogZShDc3MpXG4gICk7XG59XG57XG4gIC8qIDxUYWJsZSBjbGFzc05hbWU9e2NsYXNzZXMudGFibGV9IHNpemU9J21lZGl1bSc+IDwvVGFibGU+ICovXG59XG4vKiA8RW5oYW5jZWRUYWJsZUhlYWQyXG5udW1TZWxlY3RlZD17c2VsZWN0ZWQubGVuZ3RofVxub3JkZXI9e29yZGVyfVxub3JkZXJCeT17b3JkZXJCeX1cbm9uU2VsZWN0QWxsQ2xpY2s9e2hhbmRsZVNlbGVjdEFsbENsaWNrfVxub25SZXF1ZXN0U29ydD17aGFuZGxlUmVxdWVzdFNvcnR9XG5yb3dDb3VudD17ZGF0YS5sZW5ndGh9XG4vPiAqL1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCwgRnJhZ21lbnQgYXMgZiwgY3JlYXRlRWxlbWVudCBhcyBlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgVGFibGUgZnJvbSAnLi9jb21wb25lbnRzL1RhYmxlJztcbmltcG9ydCBEcmF3ZXIgZnJvbSAnLi9jb21wb25lbnRzL0RyYXdlcic7XG5cbmNvbnN0IGRyYXdlcldpZHRoID0gMzAwO1xuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnXG4gIH0sXG4gIGFwcEJhcjoge1xuICAgIHdpZHRoOiBgY2FsYygxMDAlIC0gJHtkcmF3ZXJXaWR0aH1weClgLFxuICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoXG4gIH0sXG5cbiAgY29udGVudDoge1xuICAgIGZsZXhHcm93OiAxLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLmRlZmF1bHRcbiAgfVxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQZXJtYW5lbnREcmF3ZXJMZWZ0KCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtjdXJyZW50RGF0YSwgc2V0Q3VycmVudERhdGFdID0gdXNlU3RhdGUoe30pO1xuXG4gIC8vIGNvbnN0IENoYW5nZSA9IGRvbWFpbiA9PiB7XG4gIC8vICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQobnVsbCwgZCA9PiB7XG4gIC8vICAgICBzZXRDdXJyZW50RGF0YSh7IGRvbWFpbiwgZGF0YTogZCB9KTtcbiAgLy8gICB9KTtcbiAgLy8gfTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIENoYW5nZSgpO1xuICAvLyAgIGNocm9tZS5zdG9yYWdlLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcigoY2hhbmdlcywgYXJlYU5hbWUpID0+IHtcbiAgLy8gICAgIENoYW5nZSguLi5PYmplY3Qua2V5cyhjaGFuZ2VzKSk7XG4gIC8vICAgfSk7XG4gIC8vIH0sIFtdKTtcblxuICAvLyBjb25zdCBnZXRDdXJyZW50RGF0YSA9IGRvbWFpbiA9PiB7XG4gIC8vICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQobnVsbCwgZCA9PiB7XG4gIC8vICAgICBzZXRDdXJyZW50RGF0YSh7IGRvbWFpbiwgZGF0YTogZCB9KTtcbiAgLy8gICB9KTtcbiAgLy8gfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPERyYXdlciAvPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgIDxUYWJsZSB7Li4uY3VycmVudERhdGF9IC8+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgT3B0aW9ucyBmcm9tICcuL2NvbXBvbmVudHMvT3B0aW9ucyc7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xuaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IGJsdWUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL2JsdWUnO1xuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIHByaW1hcnk6IGJsdWVcbiAgfVxufSk7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICA8T3B0aW9ucyAvPlxuICA8L1RoZW1lUHJvdmlkZXI+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==