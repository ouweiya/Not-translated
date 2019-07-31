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

  var localData = {};
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    chrome.runtime.onMessage.addListener(function (request, sender) {
      if (request.type === 'currentDomain') {
        chrome.storage.sync.get(null, function (data) {
          dispatch({
            type: 'data',
            data: data
          });
          console.log('获取数据', data);
          localData = data;
          var first = Object.keys(data).includes(request.currentDomain) ? request.currentDomain : Object.keys(data)[0];
          dispatch({
            type: 'domain',
            domain: first === 'globalCss' ? '' : first
          });
        });
      }
    });
    chrome.runtime.onMessage.addListener(function (request, sender) {
      if (request === 'sel') {
        chrome.storage.sync.get(null, function (data) {
          dispatch({
            type: 'data',
            data: data
          });
          localData = data;
          var domain = new URL(sender.url).hostname;

          if (Object.keys(data).includes(domain)) {
            dispatch({
              type: 'domain',
              domain: domain
            });
          }
        });
      }

      if (request === 'current') {
        var domain = new URL(sender.url).hostname;

        if (Object.keys(localData).includes(domain)) {
          dispatch({
            type: 'domain',
            domain: domain
          });
        }
      }
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    debounce(function () {
      chrome.storage.sync.set(state.data);
    });
    localData = state.data;
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
    error: !!(error === row[field] && error && Error),
    fullWidth: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9jb21wb25lbnRzL0Nzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9jb21wb25lbnRzL0RyYXdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9jb21wb25lbnRzL015SW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3B0aW9uc1BhZ2UvY29tcG9uZW50cy9NeVRhYmxlQm9keS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9jb21wb25lbnRzL015VGFibGVIZWFkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL09wdGlvbnNQYWdlL2NvbXBvbmVudHMvTXlUYWJsZVRvb2xiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3B0aW9uc1BhZ2UvY29tcG9uZW50cy9TZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3B0aW9uc1BhZ2UvY29tcG9uZW50cy9UYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsidGhlbWUiLCJjcmVhdGVNdWlUaGVtZSIsInBhbGV0dGUiLCJwcmltYXJ5IiwiYmx1ZSIsInNlY29uZGFyeSIsImUiLCJUaGVtZVByb3ZpZGVyIiwiQ3NzQmFzZWxpbmUiLCJTdG9yZSIsIk9wdGlvbnMiLCJDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImRhdGEiLCJyb3dzIiwic2VsZWN0ZWQiLCJkb21haW4iLCJlcnJvciIsInRvZ2dsZSIsImRlYm91bmNlIiwiXyIsInRpbWUiLCJjYWxsYmFjayIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJwcm9wcyIsInVzZVJlZHVjZXIiLCJkaXNwYXRjaCIsImxvY2FsRGF0YSIsInVzZUVmZmVjdCIsImNocm9tZSIsInJ1bnRpbWUiLCJvbk1lc3NhZ2UiLCJhZGRMaXN0ZW5lciIsInJlcXVlc3QiLCJzZW5kZXIiLCJzdG9yYWdlIiwic3luYyIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJmaXJzdCIsIk9iamVjdCIsImtleXMiLCJpbmNsdWRlcyIsImN1cnJlbnREb21haW4iLCJVUkwiLCJ1cmwiLCJob3N0bmFtZSIsInNldCIsIk0iLCJ1c2VNZW1vIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImNoaWxkcmVuIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImNvbnRhaW5lciIsImRpc3BsYXkiLCJmbGV4V3JhcCIsIm1heFdpZHRoIiwibWFyZ2luIiwidGV4dEZpZWxkIiwic3BhY2luZyIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImxhc3QiLCJtYXJnaW5Cb3R0b20iLCJPdXRsaW5lZFRleHRGaWVsZHMiLCJjIiwidXNlQ29udGV4dCIsInNldExvY2FsQ3NzIiwiY3NzIiwidGFyZ2V0IiwibmV3Q3NzIiwibmV3ZGF0YSIsInNldEdsb2JhbENzcyIsImEiLCJnbG9iYWxDc3MiLCJDc3MiLCJzaHJpbmsiLCJkcmF3ZXJXaWR0aCIsImRyYXdlciIsIndpZHRoIiwiZmxleFNocmluayIsIm92ZXJmbG93IiwiZHJhd2VyUGFwZXIiLCJ0b29sYmFyIiwibWl4aW5zIiwiYm94IiwiYmFja2dyb3VuZCIsImJveFNpemluZyIsInBvc2l0aW9uIiwiekluZGV4IiwidHJhbnNpdGlvbiIsInNoYWRvdyIsImJveFNoYWRvdyIsInR4dCIsInBhZGRpbmdMZWZ0IiwicmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJzZXRGaWx0ZXIiLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiU2VhcmNoQm94IiwiY2xhc3NOYW1lIiwiU2VhcmNoIiwiRGl2aWRlciIsInJlbmRlcmxpc3QiLCJmaWx0ZXIiLCJ2IiwibWFwIiwiaSIsIkxpc3RJdGVtIiwiYnV0dG9uIiwia2V5Iiwib25DbGljayIsIkxpc3RJdGVtVGV4dCIsImxpc3RCb3giLCJMaXN0IiwiZHJhd2VyT3B0aW9uIiwidmFyaWFudCIsImNsYXNzZXMiLCJwYXBlciIsImFuY2hvciIsIm9uU2Nyb2xsIiwiRHJhd2VyIiwicm9vdCIsImJvcmRlckJvdHRvbUNvbG9yIiwiSW5wdXRNZSIsInJvdyIsImZpZWxkIiwiRXJyb3IiLCJzZXRFcnJvciIsIlR4dCIsInNldFR4dCIsImZuIiwiU2V0IiwicmVkdWNlIiwiYWNjIiwidjIiLCJpc05hTiIsInBhcnNlRmxvYXQiLCJjb25jYXQiLCJTdWJtaXQiLCJvYmoyIiwib2JqIiwiZWRpdCIsInZhbCIsIm5ld1JvdyIsIm5ld1Jvd3MiLCJ1bmRlZmluZWQiLCJzdG9wUHJvcGFnYXRpb24iLCJNeUlucHV0IiwiTXlUYWJsZUJvZHkiLCJjcmVhdGVEYXRhIiwic3R5IiwiZGVmIiwibWlkIiwiaWQiLCJrIiwibGVuZ3RoIiwiQXJyYXkiLCJpbmRleE9mIiwibmV3ZG9tIiwiaGFuZGxlQ2xpY2siLCJoZWFkUm93cyIsImxhYmVsIiwiRW5oYW5jZWRUYWJsZUhlYWQiLCJvcmRlciIsInNldE9yZGVyIiwib3JkZXJCeSIsInNldE9yZGVyQnkiLCJudW1TZWxlY3RlZCIsInJvd0NvdW50IiwiaGFuZGxlU2VsZWN0QWxsQ2xpY2siLCJldmVudCIsImNoZWNrZWQiLCJuZXdTZWxlY3RlZHMiLCJvblJlcXVlc3RTb3J0IiwicHJvcGVydHkiLCJpc0Rlc2MiLCJyZXZlcnNlIiwiY3JlYXRlU29ydEhhbmRsZXIiLCJ1c2VUb29sYmFyU3R5bGVzIiwiYWJzb2x1dGUiLCJib3R0b20iLCJyaWdodCIsInNwYWNlciIsInRvcCIsIkVuaGFuY2VkVGFibGVUb29sYmFyIiwicm93czIiLCJldmVyeSIsIkRhdGUiLCJub3ciLCJJY29uIiwidGl0bGUiLCJpY29uIiwiVG9vbHRpcCIsIkZhYiIsImNvbG9yIiwidG9nZ2xlSGFuZGxlciIsImYiLCJBZGRJY29uIiwiRGVsZXRlSWNvbiIsIlN3aXRjaCIsIm9uQ2hhbmdlIiwiZmxleEdyb3ciLCJzZWFyY2giLCJzZWFyY2hJY29uIiwiaGVpZ2h0IiwicG9pbnRlckV2ZW50cyIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImlucHV0Um9vdCIsImlucHV0SW5wdXQiLCJwYWRkaW5nIiwiaW5wdXQiLCJTZWFyY2hBcHBCYXIiLCJ0cmltIiwidGFibGUiLCJtaW5XaWR0aCIsInRhYmxlV3JhcHBlciIsIm92ZXJmbG93WCIsIkVuaGFuY2VkVGFibGUiLCJQYXBlciIsIk15VGFibGVUb29sYmFyIiwiVGFibGUiLCJzaXplIiwiTXlUYWJsZUhlYWQiLCJhcHBCYXIiLCJtYXJnaW5MZWZ0IiwiY29udGVudCIsImJhY2tncm91bmRDb2xvciIsIlBlcm1hbmVudERyYXdlckxlZnQiLCJjdXJyZW50RGF0YSIsInNldEN1cnJlbnREYXRhIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQSwwQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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dXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXguanNcIixcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCBhcyBmLCBjcmVhdGVFbGVtZW50IGFzIGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJ3R5cGVmYWNlLXJvYm90byc7XG5pbXBvcnQgT3B0aW9ucyBmcm9tICcuL09wdGlvbnNQYWdlL2luZGV4JztcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XG5pbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgYmx1ZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvYmx1ZSc7XG5pbXBvcnQgU3RvcmUgZnJvbSAnLi9PcHRpb25zUGFnZS9TdG9yZSc7XG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgcHJpbWFyeTogYmx1ZSxcbiAgICBzZWNvbmRhcnk6IGJsdWVcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IGUoVGhlbWVQcm92aWRlciwgeyB0aGVtZSB9LCBlKENzc0Jhc2VsaW5lKSwgZShTdG9yZSwgbnVsbCwgZShPcHRpb25zKSkpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgRnJhZ21lbnQgYXMgZiwgY3JlYXRlRWxlbWVudCBhcyBlLCB1c2VSZWR1Y2VyLCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ2RhdGEnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGRhdGE6IGFjdGlvbi5kYXRhIH07XG4gICAgY2FzZSAncm93cyc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcm93czogYWN0aW9uLnJvd3MgfTtcbiAgICBjYXNlICdzZWxlY3RlZCc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc2VsZWN0ZWQ6IGFjdGlvbi5zZWxlY3RlZCB9O1xuICAgIGNhc2UgJ2RvbWFpbic6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZG9tYWluOiBhY3Rpb24uZG9tYWluIH07XG4gICAgY2FzZSAnZXJyb3InOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGVycm9yOiBhY3Rpb24uZXJyb3IgfTtcbiAgICBjYXNlICd0b2dnbGUnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHRvZ2dsZTogYWN0aW9uLnRvZ2dsZSB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmNvbnN0IGRlYm91bmNlID0gKF8gPT4ge1xuICBsZXQgdGltZSA9IG51bGw7XG4gIHJldHVybiBjYWxsYmFjayA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWUpO1xuICAgIHRpbWUgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfSwgMTAwKTtcbiAgfTtcbn0pKCk7XG5cbmNvbnN0IFN0b3JlID0gcHJvcHMgPT4ge1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwge1xuICAgIGRhdGE6IHt9LFxuICAgIHJvd3M6IFtdLFxuICAgIHNlbGVjdGVkOiBbXSxcbiAgICBkb21haW46ICcnLFxuICAgIGVycm9yOiBmYWxzZSxcbiAgICB0b2dnbGU6IGZhbHNlXG4gIH0pO1xuXG4gIGxldCBsb2NhbERhdGEgPSB7fTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKHJlcXVlc3QsIHNlbmRlcikgPT4ge1xuICAgICAgaWYgKHJlcXVlc3QudHlwZSA9PT0gJ2N1cnJlbnREb21haW4nKSB7XG4gICAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KG51bGwsIGRhdGEgPT4ge1xuICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ2RhdGEnLCBkYXRhIH0pO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCfojrflj5bmlbDmja4nLCBkYXRhKTtcbiAgICAgICAgICBsb2NhbERhdGEgPSBkYXRhO1xuICAgICAgICAgIGxldCBmaXJzdCA9IE9iamVjdC5rZXlzKGRhdGEpLmluY2x1ZGVzKHJlcXVlc3QuY3VycmVudERvbWFpbilcbiAgICAgICAgICAgID8gcmVxdWVzdC5jdXJyZW50RG9tYWluXG4gICAgICAgICAgICA6IE9iamVjdC5rZXlzKGRhdGEpWzBdO1xuXG4gICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnZG9tYWluJywgZG9tYWluOiBmaXJzdCA9PT0gJ2dsb2JhbENzcycgPyAnJyA6IGZpcnN0IH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigocmVxdWVzdCwgc2VuZGVyKSA9PiB7XG4gICAgICBpZiAocmVxdWVzdCA9PT0gJ3NlbCcpIHtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQobnVsbCwgZGF0YSA9PiB7XG4gICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnZGF0YScsIGRhdGEgfSk7XG4gICAgICAgICAgbG9jYWxEYXRhID0gZGF0YTtcbiAgICAgICAgICBjb25zdCBkb21haW4gPSBuZXcgVVJMKHNlbmRlci51cmwpLmhvc3RuYW1lO1xuICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhkYXRhKS5pbmNsdWRlcyhkb21haW4pKSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdkb21haW4nLCBkb21haW4gfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlcXVlc3QgPT09ICdjdXJyZW50Jykge1xuICAgICAgICBjb25zdCBkb21haW4gPSBuZXcgVVJMKHNlbmRlci51cmwpLmhvc3RuYW1lO1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMobG9jYWxEYXRhKS5pbmNsdWRlcyhkb21haW4pKSB7XG4gICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnZG9tYWluJywgZG9tYWluIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRlYm91bmNlKCgpID0+IHtcbiAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHN0YXRlLmRhdGEpO1xuICAgIH0pO1xuICAgIGxvY2FsRGF0YSA9IHN0YXRlLmRhdGE7XG4gIH0sIFtzdGF0ZV0pO1xuXG4gIGNvbnN0IE0gPSB1c2VNZW1vKF8gPT4gZShDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBbc3RhdGUsIGRpc3BhdGNoXSB9LCBwcm9wcy5jaGlsZHJlbiksIFtzdGF0ZV0pO1xuICByZXR1cm4gTTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JlO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuLi9TdG9yZSc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgY29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgbWF4V2lkdGg6IDk2MCxcbiAgICBtYXJnaW46ICdhdXRvJ1xuICB9LFxuICB0ZXh0RmllbGQ6IHtcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoNCwgMSksXG4gICAgJyYgdGV4dGFyZWEnOiB7XG4gICAgICBmb250RmFtaWx5OiAnRmlyYSBDb2RlIFJlZ3VsYXInLFxuICAgICAgZm9udFNpemU6ICcxNHB4J1xuICAgIH1cbiAgfSxcbiAgbGFzdDoge1xuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZyg4KVxuICB9XG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE91dGxpbmVkVGV4dEZpZWxkcygpIHtcbiAgY29uc3QgYyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbeyBkYXRhLCBkb21haW4gfSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChDb250ZXh0KTtcblxuICBjb25zdCBzZXRMb2NhbENzcyA9IGUgPT4ge1xuICAgIGlmICghZG9tYWluKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNzcyA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IG5ld0NzcyA9IHsgLi4uZGF0YVtkb21haW5dLCBjc3MgfTtcbiAgICBsZXQgbmV3ZGF0YSA9IHsgLi4uZGF0YSwgW2RvbWFpbl06IG5ld0NzcyB9O1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ2RhdGEnLCBkYXRhOiBuZXdkYXRhIH0pO1xuICB9O1xuXG4gIGNvbnN0IHNldEdsb2JhbENzcyA9IGUgPT4ge1xuICAgIGNvbnN0IGNzcyA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGxldCBhID0geyAuLi5kYXRhLCBnbG9iYWxDc3M6IGNzcyB9O1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ2RhdGEnLCBkYXRhOiBhIH0pO1xuICB9O1xuXG4gIGxldCBDc3MgPSAnJztcbiAgaWYgKGRhdGFbZG9tYWluXSkge1xuICAgIENzcyA9IGRhdGFbZG9tYWluXS5jc3MgfHwgJyc7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgbWF4V2lkdGg9J21kJz5cbiAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgbGFiZWw9e2RvbWFpbiB8fCAn5pyq6YCJ5oupJ31cbiAgICAgICAgbXVsdGlsaW5lXG4gICAgICAgIHJvd3M9JzgnXG4gICAgICAgIGNsYXNzTmFtZT17Yy50ZXh0RmllbGR9XG4gICAgICAgIG1hcmdpbj0nbm9ybWFsJ1xuICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcbiAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgIG9uQ2hhbmdlPXtzZXRMb2NhbENzc31cbiAgICAgICAgaWQ9J3RleHQnXG4gICAgICAgIHZhbHVlPXtDc3N9XG4gICAgICAgIHBsYWNlaG9sZGVyPSfpu5jorqTov5DnlKjlhajlsYAnXG4gICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgIHNocmluazogdHJ1ZVxuICAgICAgICB9fVxuICAgICAgLz5cblxuICAgICAgPFRleHRGaWVsZFxuICAgICAgICBsYWJlbD0n5YWo5bGAJ1xuICAgICAgICBtdWx0aWxpbmVcbiAgICAgICAgcm93cz0nOCdcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjLnRleHRGaWVsZH0gJHtjLmxhc3R9YH1cbiAgICAgICAgbWFyZ2luPSdub3JtYWwnXG4gICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xuICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgdmFsdWU9e2RhdGEuZ2xvYmFsQ3NzfVxuICAgICAgICBvbkNoYW5nZT17c2V0R2xvYmFsQ3NzfVxuICAgICAgICBpZD0ndGV4dCdcbiAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgc2hyaW5rOiB0cnVlXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCwgRnJhZ21lbnQgYXMgZiwgY3JlYXRlRWxlbWVudCBhcyBlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgRHJhd2VyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RyYXdlcic7XG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcbmltcG9ydCBMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3QnO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9TZWFyY2gnO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4uL1N0b3JlJztcblxuY29uc3QgZHJhd2VyV2lkdGggPSAzMDA7XG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIGRyYXdlcjoge1xuICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcbiAgICBmbGV4U2hyaW5rOiAwLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICB9LFxuICBkcmF3ZXJQYXBlcjoge1xuICAgIHdpZHRoOiBkcmF3ZXJXaWR0aFxuICB9LFxuICB0b29sYmFyOiB0aGVtZS5taXhpbnMudG9vbGJhcixcbiAgYm94OiB7XG4gICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHpJbmRleDogMTAsXG4gICAgd2lkdGg6IGRyYXdlcldpZHRoIC0gNSxcbiAgICB0cmFuc2l0aW9uOiAnYm94LXNoYWRvdyAwLjNzIGVhc2UtaW4tb3V0J1xuICB9LFxuICBzaGFkb3c6IHtcbiAgICBib3hTaGFkb3c6ICcwcHggMnB4IDRweCAtMXB4ICMwMDAwMDAzMywgMHB4IDRweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xNCksIDBweCAxcHggMTBweCAwcHggcmdiYSgwLDAsMCwwLjEyKSdcbiAgfSxcbiAgdHh0OiB7XG4gICAgcGFkZGluZ0xlZnQ6IDhcbiAgfVxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBfID0+IHtcbiAgY29uc3QgYyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IFt0eHQsIHNldEZpbHRlcl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt7IGRhdGEsIGRvbWFpbiB9LCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xuXG4gIGNvbnN0IHNjcm9sbCA9IGUgPT4ge1xuICAgIGUudGFyZ2V0LnNjcm9sbFRvcCA+IDMwICYmIHJlZi5jdXJyZW50LmNsYXNzTGlzdC5hZGQoYy5zaGFkb3cpO1xuICAgIGUudGFyZ2V0LnNjcm9sbFRvcCA8IDMwICYmIHJlZi5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoYy5zaGFkb3cpO1xuICB9O1xuXG4gIGNvbnN0IFNlYXJjaEJveCA9IGUoJ2RpdicsIHsgY2xhc3NOYW1lOiBjLmJveCwgcmVmIH0sIGUoU2VhcmNoLCB7IHNldEZpbHRlciB9KSwgZShEaXZpZGVyKSk7XG5cbiAgY29uc3QgcmVuZGVybGlzdCA9IE9iamVjdC5rZXlzKGRhdGEpXG4gICAgLmZpbHRlcih2ID0+IHYgIT09ICdnbG9iYWxDc3MnKVxuICAgIC5maWx0ZXIodiA9PiB2LmluY2x1ZGVzKHR4dCkpXG4gICAgLm1hcCgodiwgaSkgPT5cbiAgICAgIGUoXG4gICAgICAgIExpc3RJdGVtLFxuICAgICAgICB7IGJ1dHRvbjogdHJ1ZSwga2V5OiBpLCBvbkNsaWNrOiBlID0+IGRpc3BhdGNoKHsgdHlwZTogJ2RvbWFpbicsIGRvbWFpbjogdiB9KSwgc2VsZWN0ZWQ6IGRvbWFpbiA9PT0gdiB9LFxuICAgICAgICBlKExpc3RJdGVtVGV4dCwgeyBwcmltYXJ5OiB2LCBjbGFzc05hbWU6IGMudHh0IH0pXG4gICAgICApXG4gICAgKTtcblxuICBjb25zdCBsaXN0Qm94ID0gZShMaXN0LCBudWxsLCByZW5kZXJsaXN0KTtcblxuICBjb25zdCBkcmF3ZXJPcHRpb24gPSB7XG4gICAgY2xhc3NOYW1lOiBjLmRyYXdlcixcbiAgICB2YXJpYW50OiAncGVybWFuZW50JyxcbiAgICBjbGFzc2VzOiB7IHBhcGVyOiBjLmRyYXdlclBhcGVyIH0sXG4gICAgYW5jaG9yOiAnbGVmdCcsXG4gICAgb25TY3JvbGw6IHNjcm9sbFxuICB9O1xuXG4gIHJldHVybiBlKERyYXdlciwgZHJhd2VyT3B0aW9uLCBTZWFyY2hCb3gsIGUoJ2RpdicsIHsgY2xhc3NOYW1lOiBjLnRvb2xiYXIgfSksIGxpc3RCb3gpO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIEZyYWdtZW50IGFzIGYsIGNyZWF0ZUVsZW1lbnQgYXMgZSwgdXNlQ29udGV4dCwgdXNlTWVtbywgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnLi4vU3RvcmUnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICAnJiA+IGRpdjo6YmVmb3JlJzoge1xuICAgICAgYm9yZGVyQm90dG9tQ29sb3I6ICcjMDAwMDAwMDAnXG4gICAgfVxuICB9XG59KSk7XG5cbmNvbnN0IElucHV0TWUgPSAoeyByb3csIGZpZWxkIH0pID0+IHtcbiAgY29uc3QgYyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbeyByb3dzLCBkb21haW4sIGRhdGEsIGVycm9yIH0sIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XG4gIGNvbnN0IFtFcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbVHh0LCBzZXRUeHRdID0gdXNlU3RhdGUoJycpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0RXJyb3IoZmFsc2UpO1xuICAgIHNldFR4dCgnJyk7XG4gIH0sIFtkYXRhXSk7XG5cbiAgY29uc3QgZm4gPSB2ID0+IHtcbiAgICByZXR1cm4gWy4uLm5ldyBTZXQocm93cy5yZWR1Y2UoKGFjYywgdjIpID0+ICh2Mlt2XSAmJiBpc05hTihwYXJzZUZsb2F0KHYyW3ZdKSkgPyBhY2MuY29uY2F0KHYyW3ZdKSA6IGFjYyksIFtdKSldO1xuICB9O1xuXG4gIGNvbnN0IFN1Ym1pdCA9IGUgPT4ge1xuICAgIGxldCBvYmoyID0gWydzdHknLCAnZGVmJywgJ21pZCddLnJlZHVjZSgob2JqLCB2KSA9PiB7XG4gICAgICByZXR1cm4geyAuLi5vYmosIFt2XTogZm4odikgfTtcbiAgICB9LCB7fSk7XG4gICAgb2JqMiA9IHsgLi4uZGF0YVtkb21haW5dLCAuLi5vYmoyIH07XG5cbiAgICBsZXQgb2JqID0geyAuLi5kYXRhLCBbZG9tYWluXTogb2JqMiB9O1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ2RhdGEnLCBkYXRhOiBvYmogfSk7XG4gIH07XG5cbiAgY29uc3QgZWRpdCA9IGUgPT4ge1xuICAgIGlmICghZG9tYWluKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGlmICghaXNOYU4ocGFyc2VGbG9hdCh2YWwpKSkge1xuICAgICAgc2V0RXJyb3IodHJ1ZSk7XG4gICAgICBzZXRUeHQoJ+mAieaLqeWZqOS4jeiDveaYr+aVsOWtlycpO1xuICAgIH0gZWxzZSBpZiAocm93cy5tYXAodiA9PiB2W2ZpZWxkXSkuaW5jbHVkZXModmFsKSAmJiB2YWwpIHtcbiAgICAgIHNldEVycm9yKHRydWUpO1xuICAgICAgc2V0VHh0KCfph43lpI3pgInmi6nlmagnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXJyb3IoZmFsc2UpO1xuICAgICAgc2V0VHh0KCcnKTtcbiAgICB9XG5cbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdlcnJvcicsIGVycm9yOiB2YWwgfSk7XG5cbiAgICBjb25zdCBuZXdSb3cgPSB7IC4uLnJvdywgW2ZpZWxkXTogdmFsIH07XG4gICAgbGV0IG5ld1Jvd3MgPSByb3dzLm1hcCh2ID0+ICh2ID09PSByb3cgPyBuZXdSb3cgOiB2KSk7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAncm93cycsIHJvd3M6IG5ld1Jvd3MgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8VGV4dEZpZWxkXG4gICAgICB2YWx1ZT17cm93W2ZpZWxkXSA9PT0gdW5kZWZpbmVkID8gJycgOiByb3dbZmllbGRdfVxuICAgICAgb25DaGFuZ2U9e2VkaXR9XG4gICAgICBjbGFzc2VzPXt7IHJvb3Q6IGMucm9vdCB9fVxuICAgICAgb25DbGljaz17ZSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfVxuICAgICAgb25CbHVyPXtTdWJtaXR9XG4gICAgICBsYWJlbD17VHh0fVxuICAgICAgZXJyb3I9eyEhKGVycm9yID09PSByb3dbZmllbGRdICYmIGVycm9yICYmIEVycm9yKX1cbiAgICAgIGZ1bGxXaWR0aFxuICAgIC8+XG4gICk7XG59O1xuXG5jb25zdCBNeUlucHV0ID0gcHJvcHMgPT4ge1xuICByZXR1cm4gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIDxJbnB1dE1lIHsuLi5wcm9wc30gLz47XG4gIH0sIFtwcm9wcy5yb3ddKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE15SW5wdXQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgYXMgZiwgY3JlYXRlRWxlbWVudCBhcyBlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHknO1xuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94JztcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuLi9TdG9yZSc7XG5pbXBvcnQgSW5wdXRNZSBmcm9tICcuL015SW5wdXQnO1xuXG5jb25zdCBNeVRhYmxlQm9keSA9IF8gPT4ge1xuICBjb25zdCBbeyBkYXRhLCBzZWxlY3RlZCwgcm93cywgZG9tYWluIH0sIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XG4gIGNvbnN0IGNyZWF0ZURhdGEgPSAoc3R5LCBkZWYsIG1pZCwgaWQpID0+ICh7IHN0eSwgZGVmLCBtaWQsIGlkIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGsgPSBPYmplY3Qua2V5cyhkYXRhKS5maWx0ZXIodiA9PiB2ICE9PSAnZ2xvYmFsQ3NzJyk7XG5cbiAgICBpZiAoay5sZW5ndGggPT09IDEpIHtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ2RvbWFpbicsIGRvbWFpbjogYCR7a31gIH0pO1xuICAgIH1cbiAgICBpZiAoZGF0YVtkb21haW5dKSB7XG4gICAgICBsZXQgeyBzdHksIGRlZiwgbWlkIH0gPSBkYXRhW2RvbWFpbl07XG4gICAgICBjb25zdCBpID0gW3N0eSwgZGVmLCBtaWRdLnJlZHVjZSgoYWNjLCB2KSA9PiAodi5sZW5ndGggPiBhY2MgPyB2Lmxlbmd0aCA6IGFjYyksIDApO1xuICAgICAgY29uc3Qgcm93cyA9IFsuLi5BcnJheShpKV0ubWFwKCh2LCBpKSA9PiBjcmVhdGVEYXRhKHN0eVtpXSB8fCAnJywgZGVmW2ldIHx8ICcnLCBtaWRbaV0gfHwgJycsIGkpKTtcblxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAncm93cycsIHJvd3MgfSk7XG5cbiAgICAgIGlmICghcm93cy5sZW5ndGgpIHtcbiAgICAgICAgbGV0IGsgPSBPYmplY3Qua2V5cyhkYXRhKS5maWx0ZXIodiA9PiB2ICE9PSAnZ2xvYmFsQ3NzJyk7XG4gICAgICAgIGxldCBpID0gay5pbmRleE9mKGRvbWFpbikgKyAxO1xuICAgICAgICBsZXQgbmV3ZG9tID0ga1tpXTtcblxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdkb21haW4nLCBkb21haW46IG5ld2RvbSB9KTtcblxuICAgICAgICBjb25zdCBvYmogPSB7IC4uLmRhdGEgfTtcbiAgICAgICAgZGVsZXRlIG9ialtkb21haW5dO1xuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdkYXRhJywgZGF0YTogb2JqIH0pO1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnJlbW92ZShkb21haW4pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnc2VsZWN0ZWQnLCBzZWxlY3RlZDogW10gfSk7XG4gICAgfTtcbiAgfSwgW2RhdGEsIGRvbWFpbl0pO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUsIGlkKSA9PiB7XG4gICAgc2VsZWN0ZWQuaW5jbHVkZXMoaWQpXG4gICAgICA/IGRpc3BhdGNoKHsgdHlwZTogJ3NlbGVjdGVkJywgc2VsZWN0ZWQ6IHNlbGVjdGVkLmZpbHRlcih2ID0+IHYgIT09IGlkKSB9KVxuICAgICAgOiBkaXNwYXRjaCh7IHR5cGU6ICdzZWxlY3RlZCcsIHNlbGVjdGVkOiBzZWxlY3RlZC5jb25jYXQoaWQpIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFRhYmxlQm9keT5cbiAgICAgIHtyb3dzLmxlbmd0aCA/IChcbiAgICAgICAgcm93cy5tYXAoKHJvdywgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VGFibGVSb3cgaG92ZXIgb25DbGljaz17ZSA9PiBoYW5kbGVDbGljayhlLCByb3cuaWQpfSBrZXk9e2l9IHNlbGVjdGVkPXtzZWxlY3RlZC5pbmNsdWRlcyhyb3cuaWQpfT5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBwYWRkaW5nPSdjaGVja2JveCc+XG4gICAgICAgICAgICAgICAgPENoZWNrYm94IGNoZWNrZWQ9e3NlbGVjdGVkLmluY2x1ZGVzKHJvdy5pZCl9IC8+XG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIHNjb3BlPSdyb3cnPlxuICAgICAgICAgICAgICAgIDxJbnB1dE1lIHJvdz17cm93fSBmaWVsZD0nc3R5JyAvPlxuICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj0nbGVmdCc+XG4gICAgICAgICAgICAgICAgPElucHV0TWUgcm93PXtyb3d9IGZpZWxkPSdkZWYnIC8+XG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPSdsZWZ0Jz5cbiAgICAgICAgICAgICAgICA8SW5wdXRNZSByb3c9e3Jvd30gZmllbGQ9J21pZCcgLz5cbiAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICApIDogKFxuICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgPFRhYmxlQ2VsbCBjb2xTcGFuPXs0fT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGFsaWduPSdjZW50ZXInIHZhcmlhbnQ9J3N1YnRpdGxlMicgY29sb3I9J3RleHRTZWNvbmRhcnknPlxuICAgICAgICAgICAgICDmsqHmnInmlbDmja5cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICl9XG4gICAgPC9UYWJsZUJvZHk+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNeVRhYmxlQm9keTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgRnJhZ21lbnQgYXMgZiwgY3JlYXRlRWxlbWVudCBhcyBlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnO1xuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcbmltcG9ydCBDaGVja2JveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaGVja2JveCc7XG5pbXBvcnQgVGFibGVTb3J0TGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVTb3J0TGFiZWwnO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4uL1N0b3JlJztcblxuY29uc3QgaGVhZFJvd3MgPSBbXG4gIHsgaWQ6ICdzdHknLCBsYWJlbDogJ+i/kOeUqOagt+W8jycgfSxcbiAgeyBpZDogJ2RlZicsIGxhYmVsOiAn5LiN6L+Q55So5qC35byPJyB9LFxuICB7IGlkOiAnbWlkJywgbGFiZWw6ICflvLrliLbnv7vor5EnIH1cbl07XG5cbmNvbnN0IEVuaGFuY2VkVGFibGVIZWFkID0gKCkgPT4ge1xuICBjb25zdCBbeyBzZWxlY3RlZCwgcm93cywgZGF0YSB9LCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xuXG4gIGNvbnN0IFtvcmRlciwgc2V0T3JkZXJdID0gdXNlU3RhdGUoJ2FzYycpO1xuICBjb25zdCBbb3JkZXJCeSwgc2V0T3JkZXJCeV0gPSB1c2VTdGF0ZSgnc3R5Jyk7XG4gIGNvbnN0IG51bVNlbGVjdGVkID0gc2VsZWN0ZWQubGVuZ3RoO1xuICBjb25zdCByb3dDb3VudCA9IHJvd3MubGVuZ3RoO1xuXG4gIGNvbnN0IGhhbmRsZVNlbGVjdEFsbENsaWNrID0gZXZlbnQgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgY29uc3QgbmV3U2VsZWN0ZWRzID0gcm93cy5tYXAocm93ID0+IHJvdy5pZCk7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdzZWxlY3RlZCcsIHNlbGVjdGVkOiBuZXdTZWxlY3RlZHMgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGRpc3BhdGNoKHsgdHlwZTogJ3NlbGVjdGVkJywgc2VsZWN0ZWQ6IFtdIH0pO1xuICB9O1xuXG4gIGNvbnN0IG9uUmVxdWVzdFNvcnQgPSAoZSwgcHJvcGVydHkpID0+IHtcbiAgICBjb25zdCBpc0Rlc2MgPSBvcmRlckJ5ID09PSBwcm9wZXJ0eSAmJiBvcmRlciA9PT0gJ2Rlc2MnO1xuICAgIHNldE9yZGVyKGlzRGVzYyA/ICdhc2MnIDogJ2Rlc2MnKTtcbiAgICBzZXRPcmRlckJ5KHByb3BlcnR5KTtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdyb3dzJywgcm93czogWy4uLnJvd3NdLnJldmVyc2UoKSB9KTtcbiAgfTtcbiAgY29uc3QgY3JlYXRlU29ydEhhbmRsZXIgPSBwcm9wZXJ0eSA9PiBlID0+IG9uUmVxdWVzdFNvcnQoZSwgcHJvcGVydHkpO1xuXG4gIHJldHVybiAoXG4gICAgPFRhYmxlSGVhZD5cbiAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgPFRhYmxlQ2VsbCBwYWRkaW5nPSdjaGVja2JveCc+XG4gICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICBpbmRldGVybWluYXRlPXtudW1TZWxlY3RlZCA+IDAgJiYgbnVtU2VsZWN0ZWQgPCByb3dDb3VudH1cbiAgICAgICAgICAgIGNoZWNrZWQ9eyEhcm93Q291bnQgJiYgbnVtU2VsZWN0ZWQgPT09IHJvd0NvdW50fVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlbGVjdEFsbENsaWNrfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvVGFibGVDZWxsPlxuXG4gICAgICAgIHtoZWFkUm93cy5tYXAoKHJvdywgaSkgPT4gKFxuICAgICAgICAgIDxUYWJsZUNlbGwga2V5PXtpfSBhbGlnbj0nbGVmdCcgc29ydERpcmVjdGlvbj17b3JkZXJCeSA9PT0gcm93LmlkID8gb3JkZXIgOiBmYWxzZX0+XG4gICAgICAgICAgICA8VGFibGVTb3J0TGFiZWwgYWN0aXZlPXtvcmRlckJ5ID09PSByb3cuaWR9IGRpcmVjdGlvbj17b3JkZXJ9IG9uQ2xpY2s9e2NyZWF0ZVNvcnRIYW5kbGVyKHJvdy5pZCl9PlxuICAgICAgICAgICAgICB7cm93LmxhYmVsfVxuICAgICAgICAgICAgPC9UYWJsZVNvcnRMYWJlbD5cbiAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgKSl9XG4gICAgICA8L1RhYmxlUm93PlxuICAgIDwvVGFibGVIZWFkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRW5oYW5jZWRUYWJsZUhlYWQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgYXMgZiwgY3JlYXRlRWxlbWVudCBhcyBlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBUb29sdGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXAnO1xuaW1wb3J0IEZhYiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9GYWInO1xuaW1wb3J0IEFkZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FkZCc7XG5pbXBvcnQgU3dpdGNoIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N3aXRjaCc7XG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlJztcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuLi9TdG9yZSc7XG5cbmNvbnN0IHVzZVRvb2xiYXJTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIGFic29sdXRlOiB7XG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgYm90dG9tOiB0aGVtZS5zcGFjaW5nKDEwKSxcbiAgICByaWdodDogdGhlbWUuc3BhY2luZyg1KSxcbiAgICB6SW5kZXg6IDIwXG4gIH0sXG4gIHNwYWNlcjoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMCxcbiAgICByaWdodDogMjAsXG4gICAgekluZGV4OiAyMFxuICB9XG59KSk7XG5cbmNvbnN0IEVuaGFuY2VkVGFibGVUb29sYmFyID0gcHJvcHMgPT4ge1xuICBjb25zdCBjID0gdXNlVG9vbGJhclN0eWxlcygpO1xuICBjb25zdCBbeyBzZWxlY3RlZCwgZGF0YSwgZG9tYWluLCByb3dzLCB0b2dnbGUgfSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChDb250ZXh0KTtcblxuICBjb25zdCBjcmVhdGVEYXRhID0gKHN0eSwgZGVmLCBtaWQsIGlkKSA9PiAoeyBzdHksIGRlZiwgbWlkLCBpZCB9KTtcblxuICBjb25zdCByZW1vdmUgPSBfID0+IHtcbiAgICBsZXQgcm93czIgPSByb3dzLmZpbHRlcih2ID0+ICFzZWxlY3RlZC5pbmNsdWRlcyh2LmlkKSk7XG5cbiAgICBsZXQgb2JqMiA9IFsnc3R5JywgJ2RlZicsICdtaWQnXS5yZWR1Y2UoKG9iaiwgdikgPT4ge1xuICAgICAgcmV0dXJuIHsgLi4ub2JqLCBbdl06IHJvd3MyLnJlZHVjZSgoYWNjLCB2MikgPT4gKHYyW3ZdID8gYWNjLmNvbmNhdCh2Mlt2XSkgOiBhY2MpLCBbXSkgfTtcbiAgICB9LCB7fSk7XG4gICAgb2JqMiA9IHsgLi4uZGF0YVtkb21haW5dLCAuLi5vYmoyIH07XG4gICAgbGV0IG9iaiA9IHsgLi4uZGF0YSwgW2RvbWFpbl06IG9iajIgfTtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdkYXRhJywgZGF0YTogb2JqIH0pO1xuICB9O1xuXG4gIGNvbnN0IGFkZCA9IF8gPT4ge1xuICAgIGlmIChyb3dzLmV2ZXJ5KHYgPT4gdi5zdHkgfHwgdi5kZWYgfHwgdi5taWQpKSB7XG4gICAgICBjb25zdCByb3cgPSBjcmVhdGVEYXRhKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIERhdGUubm93KCkpO1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAncm93cycsIHJvd3M6IHJvd3MuY29uY2F0KHJvdykgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IEljb24gPSAodGl0bGUsIGNhbGxiYWNrLCBpY29uKSA9PiB7XG4gICAgcmV0dXJuIGUoVG9vbHRpcCwgeyB0aXRsZSB9LCBlKEZhYiwgeyBjb2xvcjogJ3ByaW1hcnknLCBjbGFzc05hbWU6IGMuYWJzb2x1dGUsIG9uQ2xpY2s6IGNhbGxiYWNrIH0sIGUoaWNvbikpKTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVIYW5kbGVyID0gXyA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAndG9nZ2xlJywgdG9nZ2xlOiAhdG9nZ2xlIH0pO1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ3NlbGVjdGVkJywgc2VsZWN0ZWQ6IFtdIH0pO1xuICB9O1xuXG4gIHJldHVybiBlKFxuICAgIGYsXG4gICAgbnVsbCxcbiAgICAhdG9nZ2xlICYmIChzZWxlY3RlZC5sZW5ndGggPT09IDAgPyBJY29uKCdBZGQnLCBhZGQsIEFkZEljb24pIDogSWNvbignRGVsZXRlJywgcmVtb3ZlLCBEZWxldGVJY29uKSksXG4gICAgZShTd2l0Y2gsIHtcbiAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICBjaGVja2VkOiB0b2dnbGUsXG4gICAgICBvbkNoYW5nZTogdG9nZ2xlSGFuZGxlcixcbiAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgY2xhc3NOYW1lOiBjLnNwYWNlclxuICAgIH0pXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFbmhhbmNlZFRhYmxlVG9vbGJhcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZWFyY2gnO1xuaW1wb3J0IElucHV0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0JztcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBmbGV4R3JvdzogMVxuICB9LFxuICBzZWFyY2g6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICB9LFxuICBzZWFyY2hJY29uOiB7XG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoMy41KSxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xuICB9LFxuICBpbnB1dFJvb3Q6IHtcbiAgICBjb2xvcjogJ2luaGVyaXQnXG4gIH0sXG4gIGlucHV0SW5wdXQ6IHtcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEsIDEsIDEsIDUpLFxuICAgIHdpZHRoOiAnMTAwJSdcbiAgfSxcbiAgaW5wdXQ6IHtcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSlcbiAgfVxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2hBcHBCYXIoeyBzZXRGaWx0ZXIgfSkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8VG9vbGJhciBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2h9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hJY29ufT5cbiAgICAgICAgICA8U2VhcmNoSWNvbiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgcGxhY2Vob2xkZXI9J1NlYXJjaOKApidcbiAgICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgICByb290OiBjbGFzc2VzLmlucHV0Um9vdCxcbiAgICAgICAgICAgIGlucHV0OiBjbGFzc2VzLmlucHV0SW5wdXRcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEZpbHRlcihlLnRhcmdldC52YWx1ZS50cmltKCkpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9Ub29sYmFyPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiwgRnJhZ21lbnQgYXMgZiwgY3JlYXRlRWxlbWVudCBhcyBlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IFRhYmxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlJztcblxuaW1wb3J0IE15VGFibGVIZWFkIGZyb20gJy4vTXlUYWJsZUhlYWQnO1xuaW1wb3J0IE15VGFibGVUb29sYmFyIGZyb20gJy4vTXlUYWJsZVRvb2xiYXInO1xuaW1wb3J0IE15VGFibGVCb2R5IGZyb20gJy4vTXlUYWJsZUJvZHknO1xuaW1wb3J0IENzcyBmcm9tICcuL0Nzcyc7XG5cbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuLi9TdG9yZSc7XG5cbmNvbnN0IHVzZVRvb2xiYXJTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIGFic29sdXRlOiB7XG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgYm90dG9tOiB0aGVtZS5zcGFjaW5nKDEwKSxcbiAgICByaWdodDogdGhlbWUuc3BhY2luZyg1KSxcbiAgICB6SW5kZXg6IDIwXG4gIH0sXG4gIHNwYWNlcjoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMCxcbiAgICByaWdodDogMjAsXG4gICAgekluZGV4OiAyMFxuICB9XG59KSk7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIHdpZHRoOiAnMTAwJSdcbiAgfSxcbiAgcGFwZXI6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygyKVxuICB9LFxuICB0YWJsZToge1xuICAgIG1pbldpZHRoOiA3NTBcbiAgfSxcbiAgdGFibGVXcmFwcGVyOiB7XG4gICAgb3ZlcmZsb3dYOiAnYXV0bydcbiAgfVxufSkpO1xuXG5jb25zdCBjcmVhdGVEYXRhID0gKHN0eSwgZGVmLCBtaWQsIGlkKSA9PiAoeyBzdHksIGRlZiwgbWlkLCBpZCB9KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRW5oYW5jZWRUYWJsZSgpIHtcbiAgY29uc3QgYyA9IHVzZVRvb2xiYXJTdHlsZXMoKTtcbiAgY29uc3QgW3sgdG9nZ2xlIH0sIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XG5cbiAgcmV0dXJuIGUoXG4gICAgUGFwZXIsXG4gICAgeyBjbGFzc05hbWU6IGMucGFwZXIgfSxcbiAgICBlKE15VGFibGVUb29sYmFyKSxcbiAgICAhdG9nZ2xlXG4gICAgICA/IGUoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgeyBjbGFzc05hbWU6IGMudGFibGVXcmFwcGVyIH0sXG4gICAgICAgICAgZShUYWJsZSwgeyBjbGFzc05hbWU6IGMudGFibGUsIHNpemU6ICdtZWRpdW0nIH0sIGUoTXlUYWJsZUhlYWQpLCBlKE15VGFibGVCb2R5KSlcbiAgICAgICAgKVxuICAgICAgOiBlKENzcylcbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QsIEZyYWdtZW50IGFzIGYsIGNyZWF0ZUVsZW1lbnQgYXMgZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFRhYmxlIGZyb20gJy4vY29tcG9uZW50cy9UYWJsZSc7XG5pbXBvcnQgRHJhd2VyIGZyb20gJy4vY29tcG9uZW50cy9EcmF3ZXInO1xuXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDMwMDtcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdmbGV4J1xuICB9LFxuICBhcHBCYXI6IHtcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcbiAgICBtYXJnaW5MZWZ0OiBkcmF3ZXJXaWR0aFxuICB9LFxuXG4gIGNvbnRlbnQ6IHtcbiAgICBmbGV4R3JvdzogMSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5kZWZhdWx0XG4gIH1cbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGVybWFuZW50RHJhd2VyTGVmdCgpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbY3VycmVudERhdGEsIHNldEN1cnJlbnREYXRhXSA9IHVzZVN0YXRlKHt9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPERyYXdlciAvPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgIDxUYWJsZSB7Li4uY3VycmVudERhdGF9IC8+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgT3B0aW9ucyBmcm9tICcuL2NvbXBvbmVudHMvT3B0aW9ucyc7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xuaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IGJsdWUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL2JsdWUnO1xuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIHByaW1hcnk6IGJsdWVcbiAgfVxufSk7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICA8T3B0aW9ucyAvPlxuICA8L1RoZW1lUHJvdmlkZXI+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9