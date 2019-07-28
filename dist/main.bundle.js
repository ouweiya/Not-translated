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
  // const El = window.location.hash === '#popup' ? e(Popup) : Options;
  // const El = window.location.hash === '#popup' ? e(Popup) : Options;
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, _Options__WEBPACK_IMPORTED_MODULE_2__["default"]);
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
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Store */ "./src/components/OptionsPage/Store.js");
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

function OutlinedTextFields() {
  var classes = useStyles();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Store__WEBPACK_IMPORTED_MODULE_5__["Context"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      _useContext2$ = _useContext2[0],
      data = _useContext2$.data,
      domain = _useContext2$.domain,
      dispatch = _useContext2[1]; // const [Css, setCss] = useState('');
  // window.data = data;


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {// console.log(data);
    // if (data[domain]) {
    //   setCss(data[domain].css);
    //   console.log('CCC:', Css);
    // }
  }, [data, domain]);

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
    Css = data[domain].css || ''; // console.log('CCC:', Css);
  } // console.log(data.globalCss, 3323);


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
    className: "".concat(classes.textField, " ").concat(classes.last),
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
    obj2 = _objectSpread({}, data[domain], {}, obj2);

    var obj = _objectSpread({}, data, _defineProperty({}, domain, obj2));

    dispatch({
      type: 'data',
      data: obj
    });
    console.log('xxxx', rows2); // if (!rows2.length) {
    //   const obj = { ...data };
    //   delete obj[domain];
    //   // dispatch({ type: 'data', data: obj });
    // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL09wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3B0aW9uc1BhZ2UvU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3B0aW9uc1BhZ2UvY29tcG9uZW50cy9Dc3MuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL09wdGlvbnNQYWdlL2NvbXBvbmVudHMvQ3NzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL09wdGlvbnNQYWdlL2NvbXBvbmVudHMvRHJhd2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL09wdGlvbnNQYWdlL2NvbXBvbmVudHMvTXlJbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9jb21wb25lbnRzL015VGFibGVCb2R5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL09wdGlvbnNQYWdlL2NvbXBvbmVudHMvTXlUYWJsZUhlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3B0aW9uc1BhZ2UvY29tcG9uZW50cy9NeVRhYmxlVG9vbGJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9jb21wb25lbnRzL1NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9jb21wb25lbnRzL1RhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL09wdGlvbnNQYWdlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BvcHVwLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJlIiwiZiIsIk9wdGlvbnMiLCJ0aGVtZSIsImNyZWF0ZU11aVRoZW1lIiwicGFsZXR0ZSIsInByaW1hcnkiLCJibHVlIiwic2Vjb25kYXJ5IiwiVGhlbWVQcm92aWRlciIsIkNzc0Jhc2VsaW5lIiwiU3RvcmUiLCJDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImRhdGEiLCJyb3dzIiwic2VsZWN0ZWQiLCJkb21haW4iLCJlcnJvciIsInRvZ2dsZSIsImRlYm91bmNlIiwiXyIsInRpbWUiLCJjYWxsYmFjayIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJwcm9wcyIsInVzZVJlZHVjZXIiLCJkaXNwYXRjaCIsInVzZUVmZmVjdCIsImNocm9tZSIsInN0b3JhZ2UiLCJzeW5jIiwiZ2V0IiwiZmlyc3QiLCJPYmplY3QiLCJrZXlzIiwiY29uc29sZSIsImxvZyIsInJ1bnRpbWUiLCJvbk1lc3NhZ2UiLCJhZGRMaXN0ZW5lciIsInJlcXVlc3QiLCJzZW5kZXIiLCJVUkwiLCJ1cmwiLCJob3N0bmFtZSIsImluY2x1ZGVzIiwic2V0IiwiTSIsInVzZU1lbW8iLCJQcm92aWRlciIsInZhbHVlIiwiY2hpbGRyZW4iLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiY29udGFpbmVyIiwiZGlzcGxheSIsImZsZXhXcmFwIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJ0ZXh0RmllbGQiLCJzcGFjaW5nIiwibGFzdCIsIm1hcmdpbkJvdHRvbSIsIk91dGxpbmVkVGV4dEZpZWxkcyIsImNsYXNzZXMiLCJ1c2VDb250ZXh0Iiwic2V0TG9jYWxDc3MiLCJjc3MiLCJ0YXJnZXQiLCJuZXdDc3MiLCJuZXdkYXRhIiwic2V0R2xvYmFsQ3NzIiwiYSIsImdsb2JhbENzcyIsIkNzcyIsInNocmluayIsImRyYXdlcldpZHRoIiwiZHJhd2VyIiwid2lkdGgiLCJmbGV4U2hyaW5rIiwib3ZlcmZsb3ciLCJkcmF3ZXJQYXBlciIsInRvb2xiYXIiLCJtaXhpbnMiLCJib3giLCJiYWNrZ3JvdW5kIiwiYm94U2l6aW5nIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJ0cmFuc2l0aW9uIiwic2hhZG93IiwiYm94U2hhZG93IiwidHh0IiwicGFkZGluZ0xlZnQiLCJjIiwicmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJzZXRGaWx0ZXIiLCJjdXJyZW50RGF0YSIsInNldEN1cnJlbnREYXRhIiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwiY3VycmVudCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIlNlYXJjaEJveCIsImNsYXNzTmFtZSIsIlNlYXJjaCIsIkRpdmlkZXIiLCJyZW5kZXJsaXN0IiwiZmlsdGVyIiwidiIsIm1hcCIsImkiLCJMaXN0SXRlbSIsImJ1dHRvbiIsImtleSIsIm9uQ2xpY2siLCJMaXN0SXRlbVRleHQiLCJsaXN0Qm94IiwiTGlzdCIsImRyYXdlck9wdGlvbiIsInZhcmlhbnQiLCJwYXBlciIsImFuY2hvciIsIm9uU2Nyb2xsIiwiRHJhd2VyIiwicm9vdCIsImJvcmRlckJvdHRvbUNvbG9yIiwiSW5wdXRNZSIsInJvdyIsImZpZWxkIiwiRXJyb3IiLCJzZXRFcnJvciIsIlR4dCIsInNldFR4dCIsImZuIiwiU2V0IiwicmVkdWNlIiwiYWNjIiwidjIiLCJpc05hTiIsInBhcnNlRmxvYXQiLCJjb25jYXQiLCJTdWJtaXQiLCJvYmoyIiwib2JqIiwiZWRpdCIsInZhbCIsIm5ld1JvdyIsIm5ld1Jvd3MiLCJ1bmRlZmluZWQiLCJzdG9wUHJvcGFnYXRpb24iLCJNeUlucHV0IiwiTXlUYWJsZUJvZHkiLCJjcmVhdGVEYXRhIiwic3R5IiwiZGVmIiwibWlkIiwiaWQiLCJsZW5ndGgiLCJBcnJheSIsImhhbmRsZUNsaWNrIiwiaGVhZFJvd3MiLCJudW1lcmljIiwibGFiZWwiLCJFbmhhbmNlZFRhYmxlSGVhZCIsIm9yZGVyIiwic2V0T3JkZXIiLCJvcmRlckJ5Iiwic2V0T3JkZXJCeSIsIm51bVNlbGVjdGVkIiwicm93Q291bnQiLCJoYW5kbGVTZWxlY3RBbGxDbGljayIsImV2ZW50IiwiY2hlY2tlZCIsIm5ld1NlbGVjdGVkcyIsIm9uUmVxdWVzdFNvcnQiLCJwcm9wZXJ0eSIsImlzRGVzYyIsInJldmVyc2UiLCJjcmVhdGVTb3J0SGFuZGxlciIsInVzZVRvb2xiYXJTdHlsZXMiLCJhYnNvbHV0ZSIsImJvdHRvbSIsInJpZ2h0Iiwic3BhY2VyIiwidG9wIiwiRW5oYW5jZWRUYWJsZVRvb2xiYXIiLCJyb3dzMiIsImV2ZXJ5IiwiRGF0ZSIsIm5vdyIsIkljb24iLCJ0aXRsZSIsImljb24iLCJUb29sdGlwIiwiRmFiIiwiY29sb3IiLCJ0b2dnbGVIYW5kbGVyIiwiQWRkSWNvbiIsIkRlbGV0ZUljb24iLCJTd2l0Y2giLCJvbkNoYW5nZSIsImZsZXhHcm93Iiwic2VhcmNoIiwic2VhcmNoSWNvbiIsImhlaWdodCIsInBvaW50ZXJFdmVudHMiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJpbnB1dFJvb3QiLCJpbnB1dElucHV0IiwicGFkZGluZyIsImlucHV0IiwiU2VhcmNoQXBwQmFyIiwidHJpbSIsInRhYmxlIiwibWluV2lkdGgiLCJ0YWJsZVdyYXBwZXIiLCJvdmVyZmxvd1giLCJFbmhhbmNlZFRhYmxlIiwiUGFwZXIiLCJNeVRhYmxlVG9vbGJhciIsIlRhYmxlIiwic2l6ZSIsIk15VGFibGVIZWFkIiwiYXBwQmFyIiwibWFyZ2luTGVmdCIsImNvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJQZXJtYW5lbnREcmF3ZXJMZWZ0Iiwib25jZSIsInNldE9uY2UiLCJTZWxlY3Rpb24iLCJ0YWJzIiwiZ2V0U2VsZWN0ZWQiLCJ0YWIiLCJleGVjdXRlU2NyaXB0IiwiZmlsZSIsInJ1bkF0Iiwid2luZG93IiwiY2xvc2UiLCJjbGVhciIsImJpbmQiLCJjb2RlIiwic3RvcCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUFnQix1QkFBdUI7QUFDdkM7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdkpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUNoQjtBQUNBO0FBQ0EsU0FBT0MsMkRBQUMsQ0FBQ0MsOENBQUQsRUFBSSxJQUFKLEVBQVVDLGdEQUFWLENBQVI7QUFDRCxDQUpEOztBQU1lSCxrRUFBZixFLENBQ0EsMEI7Ozs7Ozs7Ozs7OztBQ1hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNSSxLQUFLLEdBQUdDLCtFQUFjLENBQUM7QUFDM0JDLFNBQU8sRUFBRTtBQUNQQyxXQUFPLEVBQUVDLG9FQURGO0FBRVBDLGFBQVMsRUFBRUQsb0VBQUlBO0FBRlI7QUFEa0IsQ0FBRCxDQUE1QjtBQU9lUCwwSEFBQyxDQUFDUyxpRUFBRCxFQUFnQjtBQUFFTixPQUFLLEVBQUxBO0FBQUYsQ0FBaEIsRUFBMkJILDJEQUFDLENBQUNVLHFFQUFELENBQTVCLEVBQTJDViwyREFBQyxDQUFDVywwREFBRCxFQUFRLElBQVIsRUFBY1gsMkRBQUMsQ0FBQ0UsMERBQUQsQ0FBZixDQUE1QyxDQUFoQixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFFTyxJQUFNVSxPQUFPLEdBQUdDLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsSUFBcEIsQ0FBaEI7O0FBRVAsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ2pDLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUssTUFBTDtBQUNFLCtCQUFZRixLQUFaO0FBQW1CRyxZQUFJLEVBQUVGLE1BQU0sQ0FBQ0U7QUFBaEM7O0FBQ0YsU0FBSyxNQUFMO0FBQ0UsK0JBQVlILEtBQVo7QUFBbUJJLFlBQUksRUFBRUgsTUFBTSxDQUFDRztBQUFoQzs7QUFDRixTQUFLLFVBQUw7QUFDRSwrQkFBWUosS0FBWjtBQUFtQkssZ0JBQVEsRUFBRUosTUFBTSxDQUFDSTtBQUFwQzs7QUFDRixTQUFLLFFBQUw7QUFDRSwrQkFBWUwsS0FBWjtBQUFtQk0sY0FBTSxFQUFFTCxNQUFNLENBQUNLO0FBQWxDOztBQUNGLFNBQUssT0FBTDtBQUNFLCtCQUFZTixLQUFaO0FBQW1CTyxhQUFLLEVBQUVOLE1BQU0sQ0FBQ007QUFBakM7O0FBQ0YsU0FBSyxRQUFMO0FBQ0UsK0JBQVlQLEtBQVo7QUFBbUJRLGNBQU0sRUFBRVAsTUFBTSxDQUFDTztBQUFsQzs7QUFDRjtBQUNFLGFBQU9SLEtBQVA7QUFkSjtBQWdCRCxDQWpCRDs7QUFtQkEsSUFBTVMsUUFBUSxHQUFJLFVBQUFDLENBQUMsRUFBSTtBQUNyQixNQUFJQyxJQUFJLEdBQUcsSUFBWDtBQUNBLFNBQU8sVUFBQUMsUUFBUSxFQUFJO0FBQ2pCQyxnQkFBWSxDQUFDRixJQUFELENBQVo7QUFDQUEsUUFBSSxHQUFHRyxVQUFVLENBQUMsWUFBTTtBQUN0QkYsY0FBUTtBQUNULEtBRmdCLEVBRWQsR0FGYyxDQUFqQjtBQUdELEdBTEQ7QUFNRCxDQVJnQixFQUFqQjs7QUFVQSxJQUFNakIsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQW9CLEtBQUssRUFBSTtBQUFBLG9CQUNLQyx3REFBVSxDQUFDakIsT0FBRCxFQUFVO0FBQzVDSSxRQUFJLEVBQUUsRUFEc0M7QUFFNUNDLFFBQUksRUFBRSxFQUZzQztBQUc1Q0MsWUFBUSxFQUFFLEVBSGtDO0FBSTVDQyxVQUFNLEVBQUUsRUFKb0M7QUFLNUNDLFNBQUssRUFBRSxLQUxxQztBQU01Q0MsVUFBTSxFQUFFO0FBTm9DLEdBQVYsQ0FEZjtBQUFBO0FBQUEsTUFDZFIsS0FEYztBQUFBLE1BQ1BpQixRQURPOztBQVVyQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFVBQU0sQ0FBQ0MsT0FBUCxDQUFlQyxJQUFmLENBQW9CQyxHQUFwQixDQUF3QixJQUF4QixFQUE4QixVQUFBbkIsSUFBSSxFQUFJO0FBQ3BDYyxjQUFRLENBQUM7QUFBRWYsWUFBSSxFQUFFLE1BQVI7QUFBZ0JDLFlBQUksRUFBSkE7QUFBaEIsT0FBRCxDQUFSO0FBQ0EsVUFBSW9CLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVl0QixJQUFaLEVBQWtCLENBQWxCLENBQVo7QUFDQWMsY0FBUSxDQUFDO0FBQUVmLFlBQUksRUFBRSxRQUFSO0FBQWtCSSxjQUFNLEVBQUVpQixLQUFLLEtBQUssV0FBVixHQUF3QixFQUF4QixHQUE2QkE7QUFBdkQsT0FBRCxDQUFSO0FBQ0FHLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0J4QixJQUFwQjtBQUNELEtBTEQ7QUFPQWdCLFVBQU0sQ0FBQ1MsT0FBUCxDQUFlQyxTQUFmLENBQXlCQyxXQUF6QixDQUFxQyxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDeERiLFlBQU0sQ0FBQ0MsT0FBUCxDQUFlQyxJQUFmLENBQW9CQyxHQUFwQixDQUF3QixJQUF4QixFQUE4QixVQUFBbkIsSUFBSSxFQUFJO0FBQ3BDLFlBQUk0QixPQUFPLEtBQUssS0FBaEIsRUFBdUI7QUFDckJkLGtCQUFRLENBQUM7QUFBRWYsZ0JBQUksRUFBRSxNQUFSO0FBQWdCQyxnQkFBSSxFQUFKQTtBQUFoQixXQUFELENBQVI7QUFDRCxTQUZELE1BRU87QUFDTCxjQUFNRyxNQUFNLEdBQUcsSUFBSTJCLEdBQUosQ0FBUUQsTUFBTSxDQUFDRSxHQUFmLEVBQW9CQyxRQUFuQztBQUNBVCxpQkFBTyxDQUFDQyxHQUFSLENBQVlJLE9BQVosRUFBcUJ6QixNQUFyQjs7QUFFQSxjQUFJa0IsTUFBTSxDQUFDQyxJQUFQLENBQVl0QixJQUFaLEVBQWtCaUMsUUFBbEIsQ0FBMkI5QixNQUEzQixDQUFKLEVBQXdDO0FBQ3RDVyxvQkFBUSxDQUFDO0FBQUVmLGtCQUFJLEVBQUUsUUFBUjtBQUFrQkksb0JBQU0sRUFBTkE7QUFBbEIsYUFBRCxDQUFSO0FBQ0Q7QUFDRjtBQUNGLE9BWEQ7QUFZRCxLQWJEO0FBY0QsR0F0QlEsRUFzQk4sRUF0Qk0sQ0FBVDtBQXdCQVkseURBQVMsQ0FBQyxZQUFNO0FBQ2RULFlBQVEsQ0FBQyxZQUFNO0FBQ2JpQixhQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCM0IsS0FBSyxDQUFDRyxJQUE1QjtBQUNBZ0IsWUFBTSxDQUFDQyxPQUFQLENBQWVDLElBQWYsQ0FBb0JnQixHQUFwQixDQUF3QnJDLEtBQUssQ0FBQ0csSUFBOUI7QUFDRCxLQUhPLENBQVI7QUFJRCxHQUxRLEVBS04sQ0FBQ0gsS0FBRCxDQUxNLENBQVQ7QUFPQSxNQUFNc0MsQ0FBQyxHQUFHQyxxREFBTyxDQUFDLFVBQUE3QixDQUFDO0FBQUEsV0FBSTFCLDJEQUFDLENBQUNZLE9BQU8sQ0FBQzRDLFFBQVQsRUFBbUI7QUFBRUMsV0FBSyxFQUFFLENBQUN6QyxLQUFELEVBQVFpQixRQUFSO0FBQVQsS0FBbkIsRUFBaURGLEtBQUssQ0FBQzJCLFFBQXZELENBQUw7QUFBQSxHQUFGLEVBQXlFLENBQUMxQyxLQUFELENBQXpFLENBQWpCO0FBQ0EsU0FBT3NDLENBQVA7QUFDRCxDQTNDRDs7QUE2Q2UzQyxvRUFBZixFOzs7Ozs7Ozs7OztBQzlFQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTWdELFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFBekQsS0FBSztBQUFBLFNBQUs7QUFDckMwRCxhQUFTLEVBQUU7QUFDVEMsYUFBTyxFQUFFLE1BREE7QUFFVEMsY0FBUSxFQUFFLE1BRkQ7QUFHVEMsY0FBUSxFQUFFLEdBSEQ7QUFJVEMsWUFBTSxFQUFFO0FBSkMsS0FEMEI7QUFPckNDLGFBQVMsRUFBRTtBQUNURCxZQUFNLEVBQUU5RCxLQUFLLENBQUNnRSxPQUFOLENBQWMsQ0FBZCxFQUFpQixDQUFqQjtBQURDLEtBUDBCO0FBVXJDQyxRQUFJLEVBQUU7QUFDSkMsa0JBQVksRUFBRWxFLEtBQUssQ0FBQ2dFLE9BQU4sQ0FBYyxDQUFkO0FBRFY7QUFWK0IsR0FBTDtBQUFBLENBQU4sQ0FBNUI7O0FBZUEsSUFBTTFDLFFBQVEsR0FBSSxZQUFNO0FBQ3RCLE1BQUlFLElBQUksR0FBRyxJQUFYO0FBQ0EsU0FBTyxVQUFDTCxNQUFELEVBQVNILElBQVQsRUFBa0I7QUFDdkJVLGdCQUFZLENBQUNGLElBQUQsQ0FBWjtBQUNBQSxRQUFJLEdBQUdHLFVBQVUsQ0FBQyxZQUFNLENBQ3RCO0FBQ0E7QUFDRCxLQUhnQixFQUdkLEdBSGMsQ0FBakI7QUFJRCxHQU5EO0FBT0QsQ0FUZ0IsRUFBakI7O0FBV2UsU0FBU3dDLGtCQUFULEdBQThCO0FBQzNDLE1BQU1DLE9BQU8sR0FBR1osU0FBUyxFQUF6Qjs7QUFEMkMsb0JBRU5hLHdEQUFVLENBQUM1RCw4Q0FBRCxDQUZKO0FBQUE7QUFBQTtBQUFBLE1BRWxDTyxJQUZrQyxpQkFFbENBLElBRmtDO0FBQUEsTUFFNUJHLE1BRjRCLGlCQUU1QkEsTUFGNEI7QUFBQSxNQUVsQlcsUUFGa0Isb0JBRzNDO0FBQ0E7OztBQUNBQyx5REFBUyxDQUFDLFlBQU0sQ0FDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsR0FOUSxFQU1OLENBQUNmLElBQUQsRUFBT0csTUFBUCxDQU5NLENBQVQ7O0FBUUEsTUFBTW1ELFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUF6RSxDQUFDLEVBQUk7QUFDdkIsUUFBSSxDQUFDc0IsTUFBTCxFQUFhO0FBQ1g7QUFDRDs7QUFDRCxRQUFNb0QsR0FBRyxHQUFHMUUsQ0FBQyxDQUFDMkUsTUFBRixDQUFTbEIsS0FBckI7O0FBQ0EsUUFBTW1CLE1BQU0scUJBQVF6RCxJQUFJLENBQUNHLE1BQUQsQ0FBWjtBQUFzQm9ELFNBQUcsRUFBSEE7QUFBdEIsTUFBWjs7QUFDQSxRQUFJRyxPQUFPLHFCQUFRMUQsSUFBUixzQkFBZUcsTUFBZixFQUF3QnNELE1BQXhCLEVBQVg7O0FBQ0EzQyxZQUFRLENBQUM7QUFBRWYsVUFBSSxFQUFFLE1BQVI7QUFBZ0JDLFVBQUksRUFBRTBEO0FBQXRCLEtBQUQsQ0FBUjtBQUNELEdBUkQ7O0FBVUEsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQTlFLENBQUMsRUFBSTtBQUN4QixRQUFNMEUsR0FBRyxHQUFHMUUsQ0FBQyxDQUFDMkUsTUFBRixDQUFTbEIsS0FBckI7O0FBQ0EsUUFBSXNCLENBQUMscUJBQVE1RCxJQUFSO0FBQWM2RCxlQUFTLEVBQUVOO0FBQXpCLE1BQUw7O0FBQ0FoQyxXQUFPLENBQUNDLEdBQVIsQ0FBWW9DLENBQVo7QUFDQTlDLFlBQVEsQ0FBQztBQUFFZixVQUFJLEVBQUUsTUFBUjtBQUFnQkMsVUFBSSxFQUFFNEQ7QUFBdEIsS0FBRCxDQUFSO0FBQ0QsR0FMRDs7QUFPQSxNQUFJRSxHQUFHLEdBQUcsRUFBVjs7QUFDQSxNQUFJOUQsSUFBSSxDQUFDRyxNQUFELENBQVIsRUFBa0I7QUFDaEIyRCxPQUFHLEdBQUc5RCxJQUFJLENBQUNHLE1BQUQsQ0FBSixDQUFhb0QsR0FBYixJQUFvQixFQUExQixDQURnQixDQUVoQjtBQUNELEdBbEMwQyxDQW1DM0M7OztBQUVBLFNBQ0UsMkRBQUMsbUVBQUQ7QUFBVyxZQUFRLEVBQUM7QUFBcEIsS0FDRSwyREFBQyxtRUFBRDtBQUNFLFNBQUssRUFBRXBELE1BQU0sSUFBSSxLQURuQjtBQUVFLGFBQVMsTUFGWDtBQUdFLFFBQUksRUFBQyxHQUhQO0FBSUUsYUFBUyxFQUFFaUQsT0FBTyxDQUFDTCxTQUpyQjtBQUtFLFVBQU0sRUFBQyxRQUxUO0FBTUUsV0FBTyxFQUFDLFVBTlY7QUFPRSxhQUFTLE1BUFg7QUFRRSxZQUFRLEVBQUVPLFdBUlo7QUFTRSxNQUFFLEVBQUMsTUFUTDtBQVVFLFNBQUssRUFBRVEsR0FWVDtBQVdFLGVBQVcsRUFBQyxzQ0FYZDtBQVlFLG1CQUFlLEVBQUU7QUFDZkMsWUFBTSxFQUFFO0FBRE87QUFabkIsSUFERixFQWtCRSwyREFBQyxtRUFBRDtBQUNFLFNBQUssRUFBQyxjQURSO0FBRUUsYUFBUyxNQUZYO0FBR0UsUUFBSSxFQUFDLEdBSFA7QUFJRSxhQUFTLFlBQUtYLE9BQU8sQ0FBQ0wsU0FBYixjQUEwQkssT0FBTyxDQUFDSCxJQUFsQyxDQUpYO0FBS0UsVUFBTSxFQUFDLFFBTFQ7QUFNRSxXQUFPLEVBQUMsVUFOVjtBQU9FLGFBQVMsTUFQWDtBQVFFLFNBQUssRUFBRWpELElBQUksQ0FBQzZELFNBUmQ7QUFTRSxZQUFRLEVBQUVGLFlBVFo7QUFVRSxNQUFFLEVBQUMsTUFWTDtBQVdFLG1CQUFlLEVBQUU7QUFDZkksWUFBTSxFQUFFO0FBRE87QUFYbkIsSUFsQkYsQ0FERjtBQW9DRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1DLFdBQVcsR0FBRyxHQUFwQjtBQUNBLElBQU14QixTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQXpELEtBQUs7QUFBQSxTQUFLO0FBQ3JDaUYsVUFBTSxFQUFFO0FBQ05DLFdBQUssRUFBRUYsV0FERDtBQUVORyxnQkFBVSxFQUFFLENBRk47QUFHTkMsY0FBUSxFQUFFO0FBSEosS0FENkI7QUFNckNDLGVBQVcsRUFBRTtBQUNYSCxXQUFLLEVBQUVGO0FBREksS0FOd0I7QUFTckNNLFdBQU8sRUFBRXRGLEtBQUssQ0FBQ3VGLE1BQU4sQ0FBYUQsT0FUZTtBQVVyQ0UsT0FBRyxFQUFFO0FBQ0hDLGdCQUFVLEVBQUUsTUFEVDtBQUVIQyxlQUFTLEVBQUUsWUFGUjtBQUdIQyxjQUFRLEVBQUUsT0FIUDtBQUlIQyxZQUFNLEVBQUUsRUFKTDtBQUtIVixXQUFLLEVBQUVGLFdBQVcsR0FBRyxDQUxsQjtBQU1IYSxnQkFBVSxFQUFFO0FBTlQsS0FWZ0M7QUFrQnJDQyxVQUFNLEVBQUU7QUFDTkMsZUFBUyxFQUFFO0FBREwsS0FsQjZCO0FBcUJyQ0MsT0FBRyxFQUFFO0FBQ0hDLGlCQUFXLEVBQUU7QUFEVjtBQXJCZ0MsR0FBTDtBQUFBLENBQU4sQ0FBNUI7QUEwQmUseUVBQUExRSxDQUFDLEVBQUk7QUFDbEIsTUFBTTJFLENBQUMsR0FBRzFDLFNBQVMsRUFBbkI7QUFDQSxNQUFNMkMsR0FBRyxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBbEI7O0FBRmtCLGtCQUdPQyxzREFBUSxDQUFDLEVBQUQsQ0FIZjtBQUFBO0FBQUEsTUFHWEwsR0FIVztBQUFBLE1BR05NLFNBSE07O0FBQUEsbUJBSW9CRCxzREFBUSxDQUFDLEVBQUQsQ0FKNUI7QUFBQTtBQUFBLE1BSVhFLFdBSlc7QUFBQSxNQUlFQyxjQUpGOztBQUFBLG9CQUttQm5DLHdEQUFVLENBQUM1RCw4Q0FBRCxDQUw3QjtBQUFBO0FBQUE7QUFBQSxNQUtUTyxJQUxTLGlCQUtUQSxJQUxTO0FBQUEsTUFLSEcsTUFMRyxpQkFLSEEsTUFMRztBQUFBLE1BS09XLFFBTFAsb0JBTWxCO0FBQ0E7OztBQUVBLE1BQU0yRSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFBNUcsQ0FBQyxFQUFJO0FBQ2xCQSxLQUFDLENBQUMyRSxNQUFGLENBQVNrQyxTQUFULEdBQXFCLEVBQXJCLElBQTJCUCxHQUFHLENBQUNRLE9BQUosQ0FBWUMsU0FBWixDQUFzQkMsR0FBdEIsQ0FBMEJYLENBQUMsQ0FBQ0osTUFBNUIsQ0FBM0I7QUFDQWpHLEtBQUMsQ0FBQzJFLE1BQUYsQ0FBU2tDLFNBQVQsR0FBcUIsRUFBckIsSUFBMkJQLEdBQUcsQ0FBQ1EsT0FBSixDQUFZQyxTQUFaLENBQXNCRSxNQUF0QixDQUE2QlosQ0FBQyxDQUFDSixNQUEvQixDQUEzQjtBQUNELEdBSEQ7O0FBS0EsTUFBTWlCLFNBQVMsR0FBR2xILDJEQUFDLENBQUMsS0FBRCxFQUFRO0FBQUVtSCxhQUFTLEVBQUVkLENBQUMsQ0FBQ1YsR0FBZjtBQUFvQlcsT0FBRyxFQUFIQTtBQUFwQixHQUFSLEVBQW1DdEcsMkRBQUMsQ0FBQ29ILCtDQUFELEVBQVM7QUFBRVgsYUFBUyxFQUFUQTtBQUFGLEdBQVQsQ0FBcEMsRUFBNkR6RywyREFBQyxDQUFDcUgsaUVBQUQsQ0FBOUQsQ0FBbkI7QUFFQSxNQUFNQyxVQUFVLEdBQUc5RSxNQUFNLENBQUNDLElBQVAsQ0FBWXRCLElBQVosRUFDaEJvRyxNQURnQixDQUNULFVBQUFDLENBQUM7QUFBQSxXQUFJQSxDQUFDLEtBQUssV0FBVjtBQUFBLEdBRFEsRUFFaEJELE1BRmdCLENBRVQsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ3BFLFFBQUYsQ0FBVytDLEdBQVgsQ0FBSjtBQUFBLEdBRlEsRUFHaEJzQixHQUhnQixDQUdaLFVBQUNELENBQUQsRUFBSUUsQ0FBSjtBQUFBLFdBQ0gxSCwyREFBQyxDQUNDMkgsa0VBREQsRUFFQztBQUFFQyxZQUFNLEVBQUUsSUFBVjtBQUFnQkMsU0FBRyxFQUFFSCxDQUFyQjtBQUF3QkksYUFBTyxFQUFFLGlCQUFBOUgsQ0FBQztBQUFBLGVBQUlpQyxRQUFRLENBQUM7QUFBRWYsY0FBSSxFQUFFLFFBQVI7QUFBa0JJLGdCQUFNLEVBQUVrRztBQUExQixTQUFELENBQVo7QUFBQSxPQUFsQztBQUErRW5HLGNBQVEsRUFBRUMsTUFBTSxLQUFLa0c7QUFBcEcsS0FGRCxFQUdDeEgsMkRBQUMsQ0FBQytILHNFQUFELEVBQWU7QUFBRXpILGFBQU8sRUFBRWtILENBQVg7QUFBY0wsZUFBUyxFQUFFZCxDQUFDLENBQUNGO0FBQTNCLEtBQWYsQ0FIRixDQURFO0FBQUEsR0FIWSxDQUFuQjtBQVdBLE1BQU02QixPQUFPLEdBQUdoSSwyREFBQyxDQUFDaUksOERBQUQsRUFBTyxJQUFQLEVBQWFYLFVBQWIsQ0FBakI7QUFFQSxNQUFNWSxZQUFZLEdBQUc7QUFDbkJmLGFBQVMsRUFBRWQsQ0FBQyxDQUFDakIsTUFETTtBQUVuQitDLFdBQU8sRUFBRSxXQUZVO0FBR25CNUQsV0FBTyxFQUFFO0FBQUU2RCxXQUFLLEVBQUUvQixDQUFDLENBQUNiO0FBQVgsS0FIVTtBQUluQjZDLFVBQU0sRUFBRSxNQUpXO0FBS25CQyxZQUFRLEVBQUUxQjtBQUxTLEdBQXJCO0FBUUEsU0FBTzVHLDJEQUFDLENBQUN1SSxnRUFBRCxFQUFTTCxZQUFULEVBQXVCaEIsU0FBdkIsRUFBa0NsSCwyREFBQyxDQUFDLEtBQUQsRUFBUTtBQUFFbUgsYUFBUyxFQUFFZCxDQUFDLENBQUNaO0FBQWYsR0FBUixDQUFuQyxFQUFzRXVDLE9BQXRFLENBQVI7QUFDRCxDQXRDRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTXJFLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFBekQsS0FBSztBQUFBLFNBQUs7QUFDckNxSSxRQUFJLEVBQUU7QUFDSix1QkFBaUI7QUFDZkMseUJBQWlCLEVBQUU7QUFESjtBQURiO0FBRCtCLEdBQUw7QUFBQSxDQUFOLENBQTVCOztBQVFBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQW9CO0FBQUEsTUFBakJDLEdBQWlCLFFBQWpCQSxHQUFpQjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUNsQyxNQUFNdkMsQ0FBQyxHQUFHMUMsU0FBUyxFQUFuQjs7QUFEa0Msb0JBRWdCYSx3REFBVSxDQUFDNUQsOENBQUQsQ0FGMUI7QUFBQTtBQUFBO0FBQUEsTUFFekJRLElBRnlCLGlCQUV6QkEsSUFGeUI7QUFBQSxNQUVuQkUsTUFGbUIsaUJBRW5CQSxNQUZtQjtBQUFBLE1BRVhILElBRlcsaUJBRVhBLElBRlc7QUFBQSxNQUVMSSxLQUZLLGlCQUVMQSxLQUZLO0FBQUEsTUFFSVUsUUFGSjs7QUFBQSxrQkFHUnVFLHNEQUFRLENBQUMsS0FBRCxDQUhBO0FBQUE7QUFBQSxNQUczQnFDLEtBSDJCO0FBQUEsTUFHcEJDLFFBSG9COztBQUFBLG1CQUladEMsc0RBQVEsQ0FBQyxFQUFELENBSkk7QUFBQTtBQUFBLE1BSTNCdUMsR0FKMkI7QUFBQSxNQUl0QkMsTUFKc0I7O0FBTWxDOUcseURBQVMsQ0FBQyxZQUFNO0FBQ2Q0RyxZQUFRLENBQUMsS0FBRCxDQUFSO0FBQ0FFLFVBQU0sQ0FBQyxFQUFELENBQU47QUFDRCxHQUhRLEVBR04sQ0FBQzdILElBQUQsQ0FITSxDQUFUOztBQUtBLE1BQU04SCxFQUFFLEdBQUcsU0FBTEEsRUFBSyxDQUFBekIsQ0FBQyxFQUFJO0FBQ2QsOEJBQVcsSUFBSTBCLEdBQUosQ0FBUTlILElBQUksQ0FBQytILE1BQUwsQ0FBWSxVQUFDQyxHQUFELEVBQU1DLEVBQU47QUFBQSxhQUFjQSxFQUFFLENBQUM3QixDQUFELENBQUYsSUFBUzhCLEtBQUssQ0FBQ0MsVUFBVSxDQUFDRixFQUFFLENBQUM3QixDQUFELENBQUgsQ0FBWCxDQUFkLEdBQW9DNEIsR0FBRyxDQUFDSSxNQUFKLENBQVdILEVBQUUsQ0FBQzdCLENBQUQsQ0FBYixDQUFwQyxHQUF3RDRCLEdBQXRFO0FBQUEsS0FBWixFQUF3RixFQUF4RixDQUFSLENBQVg7QUFDRCxHQUZEOztBQUlBLE1BQU1LLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUF6SixDQUFDLEVBQUk7QUFDbEIsUUFBSTBKLElBQUksR0FBRyxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQlAsTUFBdEIsQ0FBNkIsVUFBQ1EsR0FBRCxFQUFNbkMsQ0FBTixFQUFZO0FBQ2xELCtCQUFZbUMsR0FBWixzQkFBa0JuQyxDQUFsQixFQUFzQnlCLEVBQUUsQ0FBQ3pCLENBQUQsQ0FBeEI7QUFDRCxLQUZVLEVBRVIsRUFGUSxDQUFYO0FBR0FrQyxRQUFJLHFCQUFRdkksSUFBSSxDQUFDRyxNQUFELENBQVosTUFBeUJvSSxJQUF6QixDQUFKO0FBQ0FoSCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CK0csSUFBcEI7O0FBRUEsUUFBSUMsR0FBRyxxQkFBUXhJLElBQVIsc0JBQWVHLE1BQWYsRUFBd0JvSSxJQUF4QixFQUFQOztBQUNBekgsWUFBUSxDQUFDO0FBQUVmLFVBQUksRUFBRSxNQUFSO0FBQWdCQyxVQUFJLEVBQUV3STtBQUF0QixLQUFELENBQVI7QUFDRCxHQVREOztBQVdBLE1BQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUE1SixDQUFDLEVBQUk7QUFDaEIsUUFBSSxDQUFDc0IsTUFBTCxFQUFhO0FBQ1g7QUFDRDs7QUFDRCxRQUFNdUksR0FBRyxHQUFHN0osQ0FBQyxDQUFDMkUsTUFBRixDQUFTbEIsS0FBckI7O0FBQ0EsUUFBSSxDQUFDNkYsS0FBSyxDQUFDQyxVQUFVLENBQUNNLEdBQUQsQ0FBWCxDQUFWLEVBQTZCO0FBQzNCZixjQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0FFLFlBQU0sQ0FBQyxVQUFELENBQU47QUFDRCxLQUhELE1BR08sSUFBSTVILElBQUksQ0FBQ3FHLEdBQUwsQ0FBUyxVQUFBRCxDQUFDO0FBQUEsYUFBSUEsQ0FBQyxDQUFDb0IsS0FBRCxDQUFMO0FBQUEsS0FBVixFQUF3QnhGLFFBQXhCLENBQWlDeUcsR0FBakMsS0FBeUNBLEdBQTdDLEVBQWtEO0FBQ3ZEZixjQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0FFLFlBQU0sQ0FBQyxPQUFELENBQU47QUFDRCxLQUhNLE1BR0E7QUFDTEYsY0FBUSxDQUFDLEtBQUQsQ0FBUjtBQUNBRSxZQUFNLENBQUMsRUFBRCxDQUFOO0FBQ0Q7O0FBRUQvRyxZQUFRLENBQUM7QUFBRWYsVUFBSSxFQUFFLE9BQVI7QUFBaUJLLFdBQUssRUFBRXNJO0FBQXhCLEtBQUQsQ0FBUjs7QUFFQSxRQUFNQyxNQUFNLHFCQUFRbkIsR0FBUixzQkFBY0MsS0FBZCxFQUFzQmlCLEdBQXRCLEVBQVo7O0FBQ0EsUUFBSUUsT0FBTyxHQUFHM0ksSUFBSSxDQUFDcUcsR0FBTCxDQUFTLFVBQUFELENBQUM7QUFBQSxhQUFLQSxDQUFDLEtBQUttQixHQUFOLEdBQVltQixNQUFaLEdBQXFCdEMsQ0FBMUI7QUFBQSxLQUFWLENBQWQ7QUFDQXZGLFlBQVEsQ0FBQztBQUFFZixVQUFJLEVBQUUsTUFBUjtBQUFnQkUsVUFBSSxFQUFFMkk7QUFBdEIsS0FBRCxDQUFSO0FBQ0QsR0FyQkQ7O0FBdUJBLFNBQ0UsMkRBQUMsbUVBQUQ7QUFDRSxTQUFLLEVBQUVwQixHQUFHLENBQUNDLEtBQUQsQ0FBSCxLQUFlb0IsU0FBZixHQUEyQixFQUEzQixHQUFnQ3JCLEdBQUcsQ0FBQ0MsS0FBRCxDQUQ1QztBQUVFLFlBQVEsRUFBRWdCLElBRlo7QUFHRSxXQUFPLEVBQUU7QUFBRXBCLFVBQUksRUFBRW5DLENBQUMsQ0FBQ21DO0FBQVYsS0FIWDtBQUlFLFdBQU8sRUFBRSxpQkFBQXhJLENBQUM7QUFBQSxhQUFJQSxDQUFDLENBQUNpSyxlQUFGLEVBQUo7QUFBQSxLQUpaO0FBS0UsVUFBTSxFQUFFUixNQUxWO0FBTUUsU0FBSyxFQUFFVixHQU5UO0FBT0UsU0FBSyxFQUFFLENBQUMsRUFBRXhILEtBQUssS0FBS29ILEdBQUcsQ0FBQ0MsS0FBRCxDQUFiLElBQXdCckgsS0FBeEIsSUFBaUNzSCxLQUFuQztBQVBWLElBREY7QUFXRCxDQTVERDs7QUE4REEsSUFBTXFCLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUFuSSxLQUFLLEVBQUk7QUFDdkIsU0FBT3dCLHFEQUFPLENBQUMsWUFBTTtBQUNuQmIsV0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUNBLFdBQU8sMkRBQUMsT0FBRCxFQUFhWixLQUFiLENBQVA7QUFDRCxHQUhhLEVBR1gsQ0FBQ0EsS0FBSyxDQUFDNEcsR0FBUCxDQUhXLENBQWQ7QUFJRCxDQUxEOztBQU9ldUIsc0VBQWYsRSxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFBekksQ0FBQyxFQUFJO0FBQUEsb0JBQzhCOEMsd0RBQVUsQ0FBQzVELDhDQUFELENBRHhDO0FBQUE7QUFBQTtBQUFBLE1BQ2RPLElBRGMsaUJBQ2RBLElBRGM7QUFBQSxNQUNSRSxRQURRLGlCQUNSQSxRQURRO0FBQUEsTUFDRUQsSUFERixpQkFDRUEsSUFERjtBQUFBLE1BQ1FFLE1BRFIsaUJBQ1FBLE1BRFI7QUFBQSxNQUNrQlcsUUFEbEI7O0FBRXZCLE1BQU1tSSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBV0MsR0FBWCxFQUFnQkMsRUFBaEI7QUFBQSxXQUF3QjtBQUFFSCxTQUFHLEVBQUhBLEdBQUY7QUFBT0MsU0FBRyxFQUFIQSxHQUFQO0FBQVlDLFNBQUcsRUFBSEEsR0FBWjtBQUFpQkMsUUFBRSxFQUFGQTtBQUFqQixLQUF4QjtBQUFBLEdBQW5COztBQUVBdEkseURBQVMsQ0FBQyxZQUFNO0FBQ2RRLFdBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUV4QixVQUFJLEVBQUpBLElBQUY7QUFBUUcsWUFBTSxFQUFOQTtBQUFSLEtBQVo7QUFDQW9CLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLEVBQStCeEIsSUFBSSxDQUFDRyxNQUFELENBQW5DOztBQUVBLFFBQUlILElBQUksQ0FBQ0csTUFBRCxDQUFSLEVBQWtCO0FBQUEseUJBQ1FILElBQUksQ0FBQ0csTUFBRCxDQURaO0FBQUEsVUFDVitJLEdBRFUsZ0JBQ1ZBLEdBRFU7QUFBQSxVQUNMQyxHQURLLGdCQUNMQSxHQURLO0FBQUEsVUFDQUMsR0FEQSxnQkFDQUEsR0FEQTtBQUVoQixVQUFNN0MsQ0FBQyxHQUFHLENBQUUyQyxHQUFGLEVBQU9DLEdBQVAsRUFBWUMsR0FBWixFQUFpQnBCLE1BQWpCLENBQXdCLFVBQUNDLEdBQUQsRUFBTTVCLENBQU47QUFBQSxlQUFhQSxDQUFDLENBQUNpRCxNQUFGLEdBQVdyQixHQUFYLEdBQWlCNUIsQ0FBQyxDQUFDaUQsTUFBbkIsR0FBNEJyQixHQUF6QztBQUFBLE9BQXhCLEVBQXVFLENBQXZFLENBQVY7O0FBQ0EsVUFBTWhJLEtBQUksR0FBRyxtQkFBSXNKLEtBQUssQ0FBQ2hELENBQUQsQ0FBVCxFQUFjRCxHQUFkLENBQWtCLFVBQUNELENBQUQsRUFBSUUsQ0FBSjtBQUFBLGVBQVUwQyxVQUFVLENBQUNDLEdBQUcsQ0FBQzNDLENBQUQsQ0FBSCxJQUFVLEVBQVgsRUFBZTRDLEdBQUcsQ0FBQzVDLENBQUQsQ0FBSCxJQUFVLEVBQXpCLEVBQTZCNkMsR0FBRyxDQUFDN0MsQ0FBRCxDQUFILElBQVUsRUFBdkMsRUFBMkNBLENBQTNDLENBQXBCO0FBQUEsT0FBbEIsQ0FBYjs7QUFDQWhGLGFBQU8sQ0FBQ0MsR0FBUixDQUFZdkIsS0FBWixFQUFrQixHQUFsQjtBQUNBYSxjQUFRLENBQUM7QUFBRWYsWUFBSSxFQUFFLE1BQVI7QUFBZ0JFLFlBQUksRUFBSkE7QUFBaEIsT0FBRCxDQUFSOztBQUVBLFVBQUksQ0FBQ0EsS0FBSSxDQUFDcUosTUFBVixFQUFrQjtBQUNoQixZQUFNZCxHQUFHLHFCQUFReEksSUFBUixDQUFUOztBQUNBLGVBQU93SSxHQUFHLENBQUNySSxNQUFELENBQVY7QUFDQVcsZ0JBQVEsQ0FBQztBQUFFZixjQUFJLEVBQUUsTUFBUjtBQUFnQkMsY0FBSSxFQUFFd0k7QUFBdEIsU0FBRCxDQUFSO0FBQ0F4SCxjQUFNLENBQUNDLE9BQVAsQ0FBZUMsSUFBZixDQUFvQjRFLE1BQXBCLENBQTJCM0YsTUFBM0I7QUFDRDtBQUNGOztBQUNELFdBQU8sWUFBTTtBQUNYVyxjQUFRLENBQUM7QUFBRWYsWUFBSSxFQUFFLFVBQVI7QUFBb0JHLGdCQUFRLEVBQUU7QUFBOUIsT0FBRCxDQUFSO0FBQ0QsS0FGRDtBQUdELEdBckJRLEVBcUJOLENBQUNGLElBQUQsRUFBT0csTUFBUCxDQXJCTSxDQUFUOztBQXVCQSxNQUFNcUosV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQzNLLENBQUQsRUFBSXdLLEVBQUosRUFBVztBQUM3Qm5KLFlBQVEsQ0FBQytCLFFBQVQsQ0FBa0JvSCxFQUFsQixJQUNJdkksUUFBUSxDQUFDO0FBQUVmLFVBQUksRUFBRSxVQUFSO0FBQW9CRyxjQUFRLEVBQUVBLFFBQVEsQ0FBQ2tHLE1BQVQsQ0FBZ0IsVUFBQUMsQ0FBQztBQUFBLGVBQUlBLENBQUMsS0FBS2dELEVBQVY7QUFBQSxPQUFqQjtBQUE5QixLQUFELENBRFosR0FFSXZJLFFBQVEsQ0FBQztBQUFFZixVQUFJLEVBQUUsVUFBUjtBQUFvQkcsY0FBUSxFQUFFQSxRQUFRLENBQUNtSSxNQUFULENBQWdCZ0IsRUFBaEI7QUFBOUIsS0FBRCxDQUZaO0FBR0QsR0FKRDs7QUFNQSxTQUNFLDJEQUFDLG1FQUFELFFBQ0dwSixJQUFJLENBQUNxSixNQUFMLEdBQ0NySixJQUFJLENBQUNxRyxHQUFMLENBQVMsVUFBQ2tCLEdBQUQsRUFBTWpCLENBQU4sRUFBWTtBQUNuQixXQUNFLDJEQUFDLGtFQUFEO0FBQVUsV0FBSyxNQUFmO0FBQWdCLGFBQU8sRUFBRSxpQkFBQTFILENBQUM7QUFBQSxlQUFJMkssV0FBVyxDQUFDM0ssQ0FBRCxFQUFJMkksR0FBRyxDQUFDNkIsRUFBUixDQUFmO0FBQUEsT0FBMUI7QUFBc0QsU0FBRyxFQUFFOUMsQ0FBM0Q7QUFBOEQsY0FBUSxFQUFFckcsUUFBUSxDQUFDK0IsUUFBVCxDQUFrQnVGLEdBQUcsQ0FBQzZCLEVBQXRCO0FBQXhFLE9BQ0UsMkRBQUMsbUVBQUQ7QUFBVyxhQUFPLEVBQUM7QUFBbkIsT0FDRSwyREFBQyxrRUFBRDtBQUFVLGFBQU8sRUFBRW5KLFFBQVEsQ0FBQytCLFFBQVQsQ0FBa0J1RixHQUFHLENBQUM2QixFQUF0QjtBQUFuQixNQURGLENBREYsRUFJRSwyREFBQyxtRUFBRDtBQUFXLFdBQUssRUFBQztBQUFqQixPQUNFLDJEQUFDLGdEQUFEO0FBQVMsU0FBRyxFQUFFN0IsR0FBZDtBQUFtQixXQUFLLEVBQUM7QUFBekIsTUFERixDQUpGLEVBT0UsMkRBQUMsbUVBQUQ7QUFBVyxXQUFLLEVBQUM7QUFBakIsT0FDRSwyREFBQyxnREFBRDtBQUFTLFNBQUcsRUFBRUEsR0FBZDtBQUFtQixXQUFLLEVBQUM7QUFBekIsTUFERixDQVBGLEVBVUUsMkRBQUMsbUVBQUQ7QUFBVyxXQUFLLEVBQUM7QUFBakIsT0FDRSwyREFBQyxnREFBRDtBQUFTLFNBQUcsRUFBRUEsR0FBZDtBQUFtQixXQUFLLEVBQUM7QUFBekIsTUFERixDQVZGLENBREY7QUFnQkQsR0FqQkQsQ0FERCxHQW9CQywyREFBQyxrRUFBRCxRQUNFLDJEQUFDLG1FQUFEO0FBQVcsV0FBTyxFQUFFO0FBQXBCLEtBQ0UsMkRBQUMsb0VBQUQ7QUFBWSxTQUFLLEVBQUMsUUFBbEI7QUFBMkIsV0FBTyxFQUFDLFdBQW5DO0FBQStDLFNBQUssRUFBQztBQUFyRCxnQ0FERixDQURGLENBckJKLENBREY7QUFnQ0QsQ0FqRUQ7O0FBbUVld0IsMEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1TLFFBQVEsR0FBRyxDQUNmO0FBQUVKLElBQUUsRUFBRSxLQUFOO0FBQWFLLFNBQU8sRUFBRSxLQUF0QjtBQUE2QkMsT0FBSyxFQUFFO0FBQXBDLENBRGUsRUFFZjtBQUFFTixJQUFFLEVBQUUsS0FBTjtBQUFhSyxTQUFPLEVBQUUsSUFBdEI7QUFBNEJDLE9BQUssRUFBRTtBQUFuQyxDQUZlLEVBR2Y7QUFBRU4sSUFBRSxFQUFFLEtBQU47QUFBYUssU0FBTyxFQUFFLElBQXRCO0FBQTRCQyxPQUFLLEVBQUU7QUFBbkMsQ0FIZSxDQUFqQjs7QUFNQSxJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUFoSixLQUFLLEVBQUk7QUFBQSxvQkFDWXlDLHdEQUFVLENBQUM1RCw4Q0FBRCxDQUR0QjtBQUFBO0FBQUE7QUFBQSxNQUN4QlMsUUFEd0IsaUJBQ3hCQSxRQUR3QjtBQUFBLE1BQ2RELElBRGMsaUJBQ2RBLElBRGM7QUFBQSxNQUNSRCxJQURRLGlCQUNSQSxJQURRO0FBQUEsTUFDQWMsUUFEQTs7QUFBQSxrQkFHUHVFLHNEQUFRLENBQUMsS0FBRCxDQUhEO0FBQUE7QUFBQSxNQUcxQndFLEtBSDBCO0FBQUEsTUFHbkJDLFFBSG1COztBQUFBLG1CQUlIekUsc0RBQVEsQ0FBQyxLQUFELENBSkw7QUFBQTtBQUFBLE1BSTFCMEUsT0FKMEI7QUFBQSxNQUlqQkMsVUFKaUI7O0FBS2pDLE1BQU1DLFdBQVcsR0FBRy9KLFFBQVEsQ0FBQ29KLE1BQTdCO0FBQ0EsTUFBTVksUUFBUSxHQUFHakssSUFBSSxDQUFDcUosTUFBdEI7O0FBRUEsTUFBTWEsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFBQyxLQUFLLEVBQUk7QUFDcEMsUUFBSUEsS0FBSyxDQUFDNUcsTUFBTixDQUFhNkcsT0FBakIsRUFBMEI7QUFDeEIsVUFBTUMsWUFBWSxHQUFHckssSUFBSSxDQUFDcUcsR0FBTCxDQUFTLFVBQUFrQixHQUFHO0FBQUEsZUFBSUEsR0FBRyxDQUFDNkIsRUFBUjtBQUFBLE9BQVosQ0FBckI7QUFDQXZJLGNBQVEsQ0FBQztBQUFFZixZQUFJLEVBQUUsVUFBUjtBQUFvQkcsZ0JBQVEsRUFBRW9LO0FBQTlCLE9BQUQsQ0FBUjtBQUNBO0FBQ0Q7O0FBQ0R4SixZQUFRLENBQUM7QUFBRWYsVUFBSSxFQUFFLFVBQVI7QUFBb0JHLGNBQVEsRUFBRTtBQUE5QixLQUFELENBQVI7QUFFRCxHQVJEOztBQVVBLE1BQU1xSyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUMxTCxDQUFELEVBQUkyTCxRQUFKLEVBQWlCO0FBQ3JDLFFBQU1DLE1BQU0sR0FBR1YsT0FBTyxLQUFLUyxRQUFaLElBQXdCWCxLQUFLLEtBQUssTUFBakQ7QUFDQUMsWUFBUSxDQUFDVyxNQUFNLEdBQUcsS0FBSCxHQUFXLE1BQWxCLENBQVI7QUFDQVQsY0FBVSxDQUFDUSxRQUFELENBQVY7QUFDQTFKLFlBQVEsQ0FBQztBQUFFZixVQUFJLEVBQUUsTUFBUjtBQUFnQkUsVUFBSSxFQUFFLG1CQUFJQSxJQUFKLEVBQVV5SyxPQUFWO0FBQXRCLEtBQUQsQ0FBUjtBQUNELEdBTEQ7O0FBTUEsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFBSCxRQUFRO0FBQUEsV0FBSSxVQUFBM0wsQ0FBQztBQUFBLGFBQUkwTCxhQUFhLENBQUMxTCxDQUFELEVBQUkyTCxRQUFKLENBQWpCO0FBQUEsS0FBTDtBQUFBLEdBQWxDOztBQUVBLFNBQ0UsMkRBQUMsbUVBQUQsUUFDRSwyREFBQyxrRUFBRCxRQUNFLDJEQUFDLG1FQUFEO0FBQVcsV0FBTyxFQUFDO0FBQW5CLEtBQ0UsMkRBQUMsa0VBQUQ7QUFDRSxpQkFBYSxFQUFFUCxXQUFXLEdBQUcsQ0FBZCxJQUFtQkEsV0FBVyxHQUFHQyxRQURsRDtBQUVFLFdBQU8sRUFBRSxDQUFDLENBQUNBLFFBQUYsSUFBY0QsV0FBVyxLQUFLQyxRQUZ6QztBQUdFLFlBQVEsRUFBRUM7QUFIWixJQURGLENBREYsRUFTR1YsUUFBUSxDQUFDbkQsR0FBVCxDQUFhLFVBQUNrQixHQUFELEVBQU1qQixDQUFOO0FBQUEsV0FDWiwyREFBQyxtRUFBRDtBQUFXLFNBQUcsRUFBRUEsQ0FBaEI7QUFBbUIsV0FBSyxFQUFFaUIsR0FBRyxDQUFDa0MsT0FBSixHQUFjLFFBQWQsR0FBeUIsTUFBbkQ7QUFBMkQsbUJBQWEsRUFBRUssT0FBTyxLQUFLdkMsR0FBRyxDQUFDNkIsRUFBaEIsR0FBcUJRLEtBQXJCLEdBQTZCO0FBQXZHLE9BQ0UsMkRBQUMsd0VBQUQ7QUFBZ0IsWUFBTSxFQUFFRSxPQUFPLEtBQUt2QyxHQUFHLENBQUM2QixFQUF4QztBQUE0QyxlQUFTLEVBQUVRLEtBQXZEO0FBQThELGFBQU8sRUFBRWMsaUJBQWlCLENBQUNuRCxHQUFHLENBQUM2QixFQUFMO0FBQXhGLE9BQ0c3QixHQUFHLENBQUNtQyxLQURQLENBREYsQ0FEWTtBQUFBLEdBQWIsQ0FUSCxDQURGLENBREY7QUFxQkQsQ0EvQ0Q7O0FBaURlQyxnRkFBZixFLENBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTWdCLGdCQUFnQixHQUFHbkksMkVBQVUsQ0FBQyxVQUFBekQsS0FBSztBQUFBLFNBQUs7QUFDNUM2TCxZQUFRLEVBQUU7QUFDUmxHLGNBQVEsRUFBRSxPQURGO0FBRVJtRyxZQUFNLEVBQUU5TCxLQUFLLENBQUNnRSxPQUFOLENBQWMsRUFBZCxDQUZBO0FBR1IrSCxXQUFLLEVBQUUvTCxLQUFLLENBQUNnRSxPQUFOLENBQWMsQ0FBZCxDQUhDO0FBSVI0QixZQUFNLEVBQUU7QUFKQSxLQURrQztBQU81Q29HLFVBQU0sRUFBRTtBQUNOckcsY0FBUSxFQUFFLFVBREo7QUFFTnNHLFNBQUcsRUFBRSxDQUZDO0FBR05GLFdBQUssRUFBRSxFQUhEO0FBSU5uRyxZQUFNLEVBQUU7QUFKRjtBQVBvQyxHQUFMO0FBQUEsQ0FBTixDQUFuQzs7QUFlQSxJQUFNc0csb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFBdEssS0FBSyxFQUFJO0FBQ3BDLE1BQU1zRSxDQUFDLEdBQUcwRixnQkFBZ0IsRUFBMUI7O0FBRG9DLG9CQUV5QnZILHdEQUFVLENBQUM1RCw4Q0FBRCxDQUZuQztBQUFBO0FBQUE7QUFBQSxNQUUzQlMsUUFGMkIsaUJBRTNCQSxRQUYyQjtBQUFBLE1BRWpCRixJQUZpQixpQkFFakJBLElBRmlCO0FBQUEsTUFFWEcsTUFGVyxpQkFFWEEsTUFGVztBQUFBLE1BRUhGLElBRkcsaUJBRUhBLElBRkc7QUFBQSxNQUVHSSxNQUZILGlCQUVHQSxNQUZIO0FBQUEsTUFFYVMsUUFGYjs7QUFJcEMsTUFBTW1JLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFXQyxHQUFYLEVBQWdCQyxFQUFoQjtBQUFBLFdBQXdCO0FBQUVILFNBQUcsRUFBSEEsR0FBRjtBQUFPQyxTQUFHLEVBQUhBLEdBQVA7QUFBWUMsU0FBRyxFQUFIQSxHQUFaO0FBQWlCQyxRQUFFLEVBQUZBO0FBQWpCLEtBQXhCO0FBQUEsR0FBbkI7O0FBRUF0SSx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJZixJQUFJLENBQUNHLE1BQUQsQ0FBUixFQUFrQixDQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRDtBQUNGLEdBVFEsRUFTTixDQUFDRixJQUFELENBVE0sQ0FBVDs7QUFXQSxNQUFNNkYsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQXZGLENBQUMsRUFBSTtBQUNsQixRQUFJNEssS0FBSyxHQUFHbEwsSUFBSSxDQUFDbUcsTUFBTCxDQUFZLFVBQUFDLENBQUM7QUFBQSxhQUFJLENBQUNuRyxRQUFRLENBQUMrQixRQUFULENBQWtCb0UsQ0FBQyxDQUFDZ0QsRUFBcEIsQ0FBTDtBQUFBLEtBQWIsQ0FBWjtBQUVBLFFBQUlkLElBQUksR0FBRyxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQlAsTUFBdEIsQ0FBNkIsVUFBQ1EsR0FBRCxFQUFNbkMsQ0FBTixFQUFZO0FBQ2xELCtCQUFZbUMsR0FBWixzQkFBa0JuQyxDQUFsQixFQUFzQjhFLEtBQUssQ0FBQ25ELE1BQU4sQ0FBYSxVQUFDQyxHQUFELEVBQU1DLEVBQU47QUFBQSxlQUFjQSxFQUFFLENBQUM3QixDQUFELENBQUYsR0FBUTRCLEdBQUcsQ0FBQ0ksTUFBSixDQUFXSCxFQUFFLENBQUM3QixDQUFELENBQWIsQ0FBUixHQUE0QjRCLEdBQTFDO0FBQUEsT0FBYixFQUE2RCxFQUE3RCxDQUF0QjtBQUNELEtBRlUsRUFFUixFQUZRLENBQVg7QUFHQU0sUUFBSSxxQkFBUXZJLElBQUksQ0FBQ0csTUFBRCxDQUFaLE1BQXlCb0ksSUFBekIsQ0FBSjs7QUFDQSxRQUFJQyxHQUFHLHFCQUFReEksSUFBUixzQkFBZUcsTUFBZixFQUF3Qm9JLElBQXhCLEVBQVA7O0FBQ0F6SCxZQUFRLENBQUM7QUFBRWYsVUFBSSxFQUFFLE1BQVI7QUFBZ0JDLFVBQUksRUFBRXdJO0FBQXRCLEtBQUQsQ0FBUjtBQUVBakgsV0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQjJKLEtBQXBCLEVBVmtCLENBV2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxHQWhCRDs7QUFrQkEsTUFBTXRGLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUF0RixDQUFDLEVBQUk7QUFDZixRQUFJTixJQUFJLENBQUNtTCxLQUFMLENBQVcsVUFBQS9FLENBQUM7QUFBQSxhQUFJQSxDQUFDLENBQUM2QyxHQUFGLElBQVM3QyxDQUFDLENBQUM4QyxHQUFYLElBQWtCOUMsQ0FBQyxDQUFDK0MsR0FBeEI7QUFBQSxLQUFaLENBQUosRUFBOEM7QUFDNUMsVUFBTTVCLEdBQUcsR0FBR3lCLFVBQVUsQ0FBQ0osU0FBRCxFQUFZQSxTQUFaLEVBQXVCQSxTQUF2QixFQUFrQ3dDLElBQUksQ0FBQ0MsR0FBTCxFQUFsQyxDQUF0QjtBQUNBeEssY0FBUSxDQUFDO0FBQUVmLFlBQUksRUFBRSxNQUFSO0FBQWdCRSxZQUFJLEVBQUVBLElBQUksQ0FBQ29JLE1BQUwsQ0FBWWIsR0FBWjtBQUF0QixPQUFELENBQVI7QUFDRCxLQUpjLENBTWI7QUFDQTtBQUNBOztBQUNILEdBVEQ7O0FBV0EsTUFBTStELElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBUS9LLFFBQVIsRUFBa0JnTCxJQUFsQixFQUEyQjtBQUN0QyxXQUFPNU0sMkRBQUMsQ0FBQzZNLGlFQUFELEVBQVU7QUFBRUYsV0FBSyxFQUFMQTtBQUFGLEtBQVYsRUFBcUIzTSwyREFBQyxDQUFDOE0sNkRBQUQsRUFBTTtBQUFFQyxXQUFLLEVBQUUsU0FBVDtBQUFvQjVGLGVBQVMsRUFBRWQsQ0FBQyxDQUFDMkYsUUFBakM7QUFBMkNsRSxhQUFPLEVBQUVsRztBQUFwRCxLQUFOLEVBQXNFNUIsMkRBQUMsQ0FBQzRNLElBQUQsQ0FBdkUsQ0FBdEIsQ0FBUjtBQUNELEdBRkQ7O0FBSUEsTUFBTUksYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBdEwsQ0FBQyxFQUFJO0FBQ3pCTyxZQUFRLENBQUM7QUFBRWYsVUFBSSxFQUFFLFFBQVI7QUFBa0JNLFlBQU0sRUFBRSxDQUFDQTtBQUEzQixLQUFELENBQVI7QUFDQVMsWUFBUSxDQUFDO0FBQUVmLFVBQUksRUFBRSxVQUFSO0FBQW9CRyxjQUFRLEVBQUU7QUFBOUIsS0FBRCxDQUFSO0FBQ0QsR0FIRDs7QUFLQSxTQUFPckIsMkRBQUMsQ0FDTkMsOENBRE0sRUFFTixJQUZNLEVBR04sQ0FBQ3VCLE1BQUQsS0FBWUgsUUFBUSxDQUFDb0osTUFBVCxLQUFvQixDQUFwQixHQUF3QmlDLElBQUksQ0FBQyxLQUFELEVBQVExRixHQUFSLEVBQWFpRyw2REFBYixDQUE1QixHQUFvRFAsSUFBSSxDQUFDLFFBQUQsRUFBV3pGLE1BQVgsRUFBbUJpRyxnRUFBbkIsQ0FBcEUsQ0FITSxFQUlObE4sMkRBQUMsQ0FBQ21OLGdFQUFELEVBQVM7QUFDUkosU0FBSyxFQUFFLFNBREM7QUFFUnZCLFdBQU8sRUFBRWhLLE1BRkQ7QUFHUjRMLFlBQVEsRUFBRUosYUFIRjtBQUlSdkosU0FBSyxFQUFFLElBSkM7QUFLUjBELGFBQVMsRUFBRWQsQ0FBQyxDQUFDOEY7QUFMTCxHQUFULENBSkssQ0FBUjtBQVlELENBbkVEOztBQXFFZUUsbUZBQWY7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxDQUVDO0FBREM7QUFHRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEs7Ozs7Ozs7Ozs7OztBQzlJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTTFJLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFBekQsS0FBSztBQUFBLFNBQUs7QUFDckNxSSxRQUFJLEVBQUU7QUFDSjZFLGNBQVEsRUFBRTtBQUROLEtBRCtCO0FBSXJDQyxVQUFNLEVBQUU7QUFDTnhILGNBQVEsRUFBRTtBQURKLEtBSjZCO0FBT3JDeUgsY0FBVSxFQUFFO0FBQ1ZsSSxXQUFLLEVBQUVsRixLQUFLLENBQUNnRSxPQUFOLENBQWMsR0FBZCxDQURHO0FBRVZxSixZQUFNLEVBQUUsTUFGRTtBQUdWMUgsY0FBUSxFQUFFLFVBSEE7QUFJVjJILG1CQUFhLEVBQUUsTUFKTDtBQUtWM0osYUFBTyxFQUFFLE1BTEM7QUFNVjRKLGdCQUFVLEVBQUUsUUFORjtBQU9WQyxvQkFBYyxFQUFFO0FBUE4sS0FQeUI7QUFnQnJDQyxhQUFTLEVBQUU7QUFDVGIsV0FBSyxFQUFFO0FBREUsS0FoQjBCO0FBbUJyQ2MsY0FBVSxFQUFFO0FBQ1ZDLGFBQU8sRUFBRTNOLEtBQUssQ0FBQ2dFLE9BQU4sQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBREM7QUFFVmtCLFdBQUssRUFBRTtBQUZHLEtBbkJ5QjtBQXVCckMwSSxTQUFLLEVBQUU7QUFDTDlKLFlBQU0sRUFBRTlELEtBQUssQ0FBQ2dFLE9BQU4sQ0FBYyxDQUFkO0FBREg7QUF2QjhCLEdBQUw7QUFBQSxDQUFOLENBQTVCO0FBNEJlLFNBQVM2SixZQUFULE9BQXFDO0FBQUEsTUFBYnZILFNBQWEsUUFBYkEsU0FBYTtBQUNsRCxNQUFNbEMsT0FBTyxHQUFHWixTQUFTLEVBQXpCO0FBRUEsU0FDRSwyREFBQyxpRUFBRDtBQUFTLGFBQVMsRUFBRVksT0FBTyxDQUFDaUU7QUFBNUIsS0FDRTtBQUFLLGFBQVMsRUFBRWpFLE9BQU8sQ0FBQytJO0FBQXhCLEtBQ0U7QUFBSyxhQUFTLEVBQUUvSSxPQUFPLENBQUNnSjtBQUF4QixLQUNFLDJEQUFDLGdFQUFELE9BREYsQ0FERixFQUlFLDJEQUFDLCtEQUFEO0FBQ0UsZUFBVyxFQUFDLGNBRGQ7QUFFRSxXQUFPLEVBQUU7QUFDUC9FLFVBQUksRUFBRWpFLE9BQU8sQ0FBQ3FKLFNBRFA7QUFFUEcsV0FBSyxFQUFFeEosT0FBTyxDQUFDc0o7QUFGUixLQUZYO0FBTUUsWUFBUSxFQUFFLGtCQUFBN04sQ0FBQztBQUFBLGFBQUl5RyxTQUFTLENBQUN6RyxDQUFDLENBQUMyRSxNQUFGLENBQVNsQixLQUFULENBQWV3SyxJQUFmLEVBQUQsQ0FBYjtBQUFBO0FBTmIsSUFKRixDQURGLENBREY7QUFpQkQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0REQ7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTWxDLGdCQUFnQixHQUFHbkksMkVBQVUsQ0FBQyxVQUFBekQsS0FBSztBQUFBLFNBQUs7QUFDNUM2TCxZQUFRLEVBQUU7QUFDUmxHLGNBQVEsRUFBRSxPQURGO0FBRVJtRyxZQUFNLEVBQUU5TCxLQUFLLENBQUNnRSxPQUFOLENBQWMsRUFBZCxDQUZBO0FBR1IrSCxXQUFLLEVBQUUvTCxLQUFLLENBQUNnRSxPQUFOLENBQWMsQ0FBZCxDQUhDO0FBSVI0QixZQUFNLEVBQUU7QUFKQSxLQURrQztBQU81Q29HLFVBQU0sRUFBRTtBQUNOckcsY0FBUSxFQUFFLFVBREo7QUFFTnNHLFNBQUcsRUFBRSxDQUZDO0FBR05GLFdBQUssRUFBRSxFQUhEO0FBSU5uRyxZQUFNLEVBQUU7QUFKRjtBQVBvQyxHQUFMO0FBQUEsQ0FBTixDQUFuQztBQWVBLElBQU1wQyxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQXpELEtBQUs7QUFBQSxTQUFLO0FBQ3JDcUksUUFBSSxFQUFFO0FBQ0puRCxXQUFLLEVBQUU7QUFESCxLQUQrQjtBQUlyQytDLFNBQUssRUFBRTtBQUNML0MsV0FBSyxFQUFFLE1BREY7QUFFTGhCLGtCQUFZLEVBQUVsRSxLQUFLLENBQUNnRSxPQUFOLENBQWMsQ0FBZDtBQUZULEtBSjhCO0FBUXJDK0osU0FBSyxFQUFFO0FBQ0xDLGNBQVEsRUFBRTtBQURMLEtBUjhCO0FBV3JDQyxnQkFBWSxFQUFFO0FBQ1pDLGVBQVMsRUFBRTtBQURDO0FBWHVCLEdBQUw7QUFBQSxDQUFOLENBQTVCOztBQWdCQSxJQUFNakUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQVdDLEdBQVgsRUFBZ0JDLEVBQWhCO0FBQUEsU0FBd0I7QUFBRUgsT0FBRyxFQUFIQSxHQUFGO0FBQU9DLE9BQUcsRUFBSEEsR0FBUDtBQUFZQyxPQUFHLEVBQUhBLEdBQVo7QUFBaUJDLE1BQUUsRUFBRkE7QUFBakIsR0FBeEI7QUFBQSxDQUFuQjs7QUFFZSxTQUFTOEQsYUFBVCxHQUF5QjtBQUN0QyxNQUFNakksQ0FBQyxHQUFHMEYsZ0JBQWdCLEVBQTFCOztBQURzQyxvQkFFUHZILHdEQUFVLENBQUM1RCw4Q0FBRCxDQUZIO0FBQUE7QUFBQSxNQUU3QlksTUFGNkIsbUJBRTdCQSxNQUY2QjtBQUFBLE1BRW5CUyxRQUZtQjs7QUFJdEMsU0FBT2pDLDJEQUFDLENBQ051TywrREFETSxFQUVOO0FBQUVwSCxhQUFTLEVBQUVkLENBQUMsQ0FBQytCO0FBQWYsR0FGTSxFQUdOcEksMkRBQUMsQ0FBQ3dPLHVEQUFELENBSEssRUFJTixDQUFDaE4sTUFBRCxHQUNJeEIsMkRBQUMsQ0FDQyxLQURELEVBRUM7QUFBRW1ILGFBQVMsRUFBRWQsQ0FBQyxDQUFDK0g7QUFBZixHQUZELEVBR0NwTywyREFBQyxDQUFDeU8sK0RBQUQsRUFBUTtBQUFFdEgsYUFBUyxFQUFFZCxDQUFDLENBQUM2SCxLQUFmO0FBQXNCUSxRQUFJLEVBQUU7QUFBNUIsR0FBUixFQUFnRDFPLDJEQUFDLENBQUMyTyxvREFBRCxDQUFqRCxFQUFnRTNPLDJEQUFDLENBQUNtSyxvREFBRCxDQUFqRSxDQUhGLENBREwsR0FNSW5LLDJEQUFDLENBQUNpRiw0Q0FBRCxDQVZDLENBQVI7QUFZRDtBQUNELENBRUM7QUFEQzs7QUFFRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1FLFdBQVcsR0FBRyxHQUFwQjtBQUNBLElBQU14QixTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQXpELEtBQUs7QUFBQSxTQUFLO0FBQ3JDcUksUUFBSSxFQUFFO0FBQ0oxRSxhQUFPLEVBQUU7QUFETCxLQUQrQjtBQUlyQzhLLFVBQU0sRUFBRTtBQUNOdkosV0FBSyx3QkFBaUJGLFdBQWpCLFFBREM7QUFFTjBKLGdCQUFVLEVBQUUxSjtBQUZOLEtBSjZCO0FBU3JDMkosV0FBTyxFQUFFO0FBQ1B6QixjQUFRLEVBQUUsQ0FESDtBQUVQMEIscUJBQWUsRUFBRTVPLEtBQUssQ0FBQ0UsT0FBTixDQUFjdUYsVUFBZDtBQUZWO0FBVDRCLEdBQUw7QUFBQSxDQUFOLENBQTVCO0FBZWUsU0FBU29KLG1CQUFULEdBQStCO0FBQzVDLE1BQU16SyxPQUFPLEdBQUdaLFNBQVMsRUFBekI7O0FBRDRDLGtCQUVONkMsc0RBQVEsQ0FBQyxFQUFELENBRkY7QUFBQTtBQUFBLE1BRXJDRSxXQUZxQztBQUFBLE1BRXhCQyxjQUZ3QixrQkFJNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQ0U7QUFBSyxhQUFTLEVBQUVwQyxPQUFPLENBQUNpRTtBQUF4QixLQUNFLDJEQUFDLDBEQUFELE9BREYsRUFHRTtBQUFNLGFBQVMsRUFBRWpFLE9BQU8sQ0FBQ3VLO0FBQXpCLEtBQ0UsMkRBQUMseURBQUQsRUFBV3BJLFdBQVgsQ0FERixDQUhGLENBREY7QUFTRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckREO0FBQ0E7QUFDQTtBQUVBLElBQU0vQyxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQXpELEtBQUs7QUFBQSxTQUFLO0FBQ3JDcUksUUFBSSxFQUFFO0FBQ0pzRixhQUFPLEVBQUUsRUFETDtBQUVKekksV0FBSyxFQUFFO0FBRkgsS0FEK0I7QUFLckN1QyxVQUFNLEVBQUU7QUFDTnZELGtCQUFZLEVBQUU7QUFEUjtBQUw2QixHQUFMO0FBQUEsQ0FBTixDQUE1QjtBQVVlLHlFQUFBM0MsQ0FBQyxFQUFJO0FBQ2xCLE1BQU02QyxPQUFPLEdBQUdaLFNBQVMsRUFBekI7O0FBRGtCLGtCQUVNNkMsc0RBQVEsQ0FBQyxJQUFELENBRmQ7QUFBQTtBQUFBLE1BRVh5SSxJQUZXO0FBQUEsTUFFTEMsT0FGSzs7QUFJbEIsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQW5QLENBQUMsRUFBSTtBQUNyQm1DLFVBQU0sQ0FBQ2lOLElBQVAsQ0FBWUMsV0FBWixDQUF3QixVQUFBQyxHQUFHLEVBQUk7QUFDN0JuTixZQUFNLENBQUNpTixJQUFQLENBQVlHLGFBQVosQ0FBMEJELEdBQUcsQ0FBQzlFLEVBQTlCLEVBQWtDO0FBQ2hDZ0YsWUFBSSxFQUFFLGFBRDBCO0FBRWhDQyxhQUFLLEVBQUU7QUFGeUIsT0FBbEM7QUFJRCxLQUxEO0FBTUFQLFdBQU8sQ0FBQyxLQUFELENBQVA7QUFDQVEsVUFBTSxDQUFDQyxLQUFQO0FBQ0QsR0FURDs7QUFVQXpOLHlEQUFTLENBQUMsWUFBTSxDQUNkO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFHQSxNQUFNME4sS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUNsQnpOLFVBQU0sQ0FBQ0MsT0FBUCxDQUFlQyxJQUFmLENBQW9CdU4sS0FBcEIsQ0FBMEJsTixPQUFPLENBQUNDLEdBQVIsQ0FBWWtOLElBQVosQ0FBaUJuTixPQUFqQixFQUEwQixPQUExQixDQUExQjtBQUVBUCxVQUFNLENBQUNpTixJQUFQLENBQVlDLFdBQVosQ0FBd0IsVUFBQUMsR0FBRyxFQUFJO0FBQzdCbk4sWUFBTSxDQUFDaU4sSUFBUCxDQUFZRyxhQUFaLENBQTBCRCxHQUFHLENBQUM5RSxFQUE5QixFQUFrQztBQUNoQ3NGLFlBQUksNkJBRDRCO0FBRWhDTCxhQUFLLEVBQUU7QUFGeUIsT0FBbEM7QUFJRCxLQUxEO0FBTUQsR0FURDs7QUFVQSxNQUFNTSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNLENBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsR0FkRDs7QUFnQkEsU0FDRTtBQUFLLGFBQVMsRUFBRXhMLE9BQU8sQ0FBQ2lFO0FBQXhCLEtBQ0UsMkRBQUMsZ0VBQUQ7QUFDRSxTQUFLLEVBQUMsU0FEUjtBQUVFLFdBQU8sRUFBQyxXQUZWO0FBR0UsYUFBUyxNQUhYO0FBSUUsYUFBUyxFQUFFakUsT0FBTyxDQUFDcUQsTUFKckI7QUFLRSxXQUFPLEVBQUVxSCxJQUFJLEdBQUdFLFNBQUgsR0FBZTtBQUw5QixvQkFERixFQVVFLDJEQUFDLGdFQUFEO0FBQVEsU0FBSyxFQUFDLFdBQWQ7QUFBMEIsV0FBTyxFQUFDLFdBQWxDO0FBQThDLGFBQVMsTUFBdkQ7QUFBd0QsYUFBUyxFQUFFNUssT0FBTyxDQUFDcUQsTUFBM0U7QUFBbUYsV0FBTyxFQUFFbUk7QUFBNUYsMEJBVkYsRUFhRSwyREFBQyxnRUFBRDtBQUFRLFNBQUssRUFBQyxXQUFkO0FBQTBCLFdBQU8sRUFBQyxXQUFsQztBQUE4QyxhQUFTLE1BQXZEO0FBQXdELFdBQU8sRUFBRUg7QUFBakUsb0JBYkYsQ0FERjtBQW1CRCxDQTlERCxFOzs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNelAsS0FBSyxHQUFHQywrRUFBYyxDQUFDO0FBQzNCQyxTQUFPLEVBQUU7QUFDUEMsV0FBTyxFQUFFQyxvRUFBSUE7QUFETjtBQURrQixDQUFELENBQTVCO0FBTUF5UCxnREFBUSxDQUFDQyxNQUFULENBQ0UsMkRBQUMsaUVBQUQ7QUFBZSxPQUFLLEVBQUU5UDtBQUF0QixHQUNFLDJEQUFDLHFFQUFELE9BREYsRUFFRSwyREFBQyx1REFBRCxPQUZGLENBREYsRUFLRStQLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUxGLEUiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LmpzXCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlRWxlbWVudCBhcyBlLCBGcmFnbWVudCBhcyBmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBvcHVwIGZyb20gJy4vUG9wdXAnO1xuaW1wb3J0IE9wdGlvbnMgZnJvbSAnLi9PcHRpb25zJztcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICAvLyBjb25zdCBFbCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoID09PSAnI3BvcHVwJyA/IGUoUG9wdXApIDogT3B0aW9ucztcbiAgLy8gY29uc3QgRWwgPSB3aW5kb3cubG9jYXRpb24uaGFzaCA9PT0gJyNwb3B1cCcgPyBlKFBvcHVwKSA6IE9wdGlvbnM7XG4gIHJldHVybiBlKGYsIG51bGwsIE9wdGlvbnMpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuLy8gZShTdG9yZSwgbnVsbCwgT3B0aW9ucylcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCBhcyBmLCBjcmVhdGVFbGVtZW50IGFzIGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJ3R5cGVmYWNlLXJvYm90byc7XG5pbXBvcnQgT3B0aW9ucyBmcm9tICcuL09wdGlvbnNQYWdlL2luZGV4JztcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XG5pbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgYmx1ZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvYmx1ZSc7XG5pbXBvcnQgU3RvcmUgZnJvbSAnLi9PcHRpb25zUGFnZS9TdG9yZSc7XG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgcHJpbWFyeTogYmx1ZSxcbiAgICBzZWNvbmRhcnk6IGJsdWVcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGUoVGhlbWVQcm92aWRlciwgeyB0aGVtZSB9LCBlKENzc0Jhc2VsaW5lKSwgZShTdG9yZSwgbnVsbCwgZShPcHRpb25zKSkpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgRnJhZ21lbnQgYXMgZiwgY3JlYXRlRWxlbWVudCBhcyBlLCB1c2VSZWR1Y2VyLCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ2RhdGEnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGRhdGE6IGFjdGlvbi5kYXRhIH07XG4gICAgY2FzZSAncm93cyc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcm93czogYWN0aW9uLnJvd3MgfTtcbiAgICBjYXNlICdzZWxlY3RlZCc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc2VsZWN0ZWQ6IGFjdGlvbi5zZWxlY3RlZCB9O1xuICAgIGNhc2UgJ2RvbWFpbic6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZG9tYWluOiBhY3Rpb24uZG9tYWluIH07XG4gICAgY2FzZSAnZXJyb3InOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGVycm9yOiBhY3Rpb24uZXJyb3IgfTtcbiAgICBjYXNlICd0b2dnbGUnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHRvZ2dsZTogYWN0aW9uLnRvZ2dsZSB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmNvbnN0IGRlYm91bmNlID0gKF8gPT4ge1xuICBsZXQgdGltZSA9IG51bGw7XG4gIHJldHVybiBjYWxsYmFjayA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWUpO1xuICAgIHRpbWUgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfSwgMTAwKTtcbiAgfTtcbn0pKCk7XG5cbmNvbnN0IFN0b3JlID0gcHJvcHMgPT4ge1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwge1xuICAgIGRhdGE6IHt9LFxuICAgIHJvd3M6IFtdLFxuICAgIHNlbGVjdGVkOiBbXSxcbiAgICBkb21haW46ICcnLFxuICAgIGVycm9yOiBmYWxzZSxcbiAgICB0b2dnbGU6IGZhbHNlXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQobnVsbCwgZGF0YSA9PiB7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdkYXRhJywgZGF0YSB9KTtcbiAgICAgIGxldCBmaXJzdCA9IE9iamVjdC5rZXlzKGRhdGEpWzBdO1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnZG9tYWluJywgZG9tYWluOiBmaXJzdCA9PT0gJ2dsb2JhbENzcycgPyAnJyA6IGZpcnN0IH0pO1xuICAgICAgY29uc29sZS5sb2coJ+iOt+WPluaVsOaNricsIGRhdGEpO1xuICAgIH0pO1xuXG4gICAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChyZXF1ZXN0LCBzZW5kZXIpID0+IHtcbiAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KG51bGwsIGRhdGEgPT4ge1xuICAgICAgICBpZiAocmVxdWVzdCA9PT0gJ3NlbCcpIHtcbiAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdkYXRhJywgZGF0YSB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBkb21haW4gPSBuZXcgVVJMKHNlbmRlci51cmwpLmhvc3RuYW1lO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcXVlc3QsIGRvbWFpbik7XG5cbiAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoZGF0YSkuaW5jbHVkZXMoZG9tYWluKSkge1xuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnZG9tYWluJywgZG9tYWluIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRlYm91bmNlKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCflhajlsYDllYblupc6ICcsIHN0YXRlLmRhdGEpO1xuICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoc3RhdGUuZGF0YSk7XG4gICAgfSk7XG4gIH0sIFtzdGF0ZV0pO1xuXG4gIGNvbnN0IE0gPSB1c2VNZW1vKF8gPT4gZShDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBbc3RhdGUsIGRpc3BhdGNoXSB9LCBwcm9wcy5jaGlsZHJlbiksIFtzdGF0ZV0pO1xuICByZXR1cm4gTTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JlO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XG5pbXBvcnQgJy4vQ3NzLmNzcyc7XG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnLi4vU3RvcmUnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIGNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgIG1heFdpZHRoOiA5NjAsXG4gICAgbWFyZ2luOiAnYXV0bydcbiAgfSxcbiAgdGV4dEZpZWxkOiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDQsIDEpXG4gIH0sXG4gIGxhc3Q6IHtcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoOClcbiAgfVxufSkpO1xuXG5jb25zdCBkZWJvdW5jZSA9ICgoKSA9PiB7XG4gIGxldCB0aW1lID0gbnVsbDtcbiAgcmV0dXJuIChkb21haW4sIGRhdGEpID0+IHtcbiAgICBjbGVhclRpbWVvdXQodGltZSk7XG4gICAgdGltZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coZG9tYWluLCBkYXRhKTtcbiAgICAgIC8vIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHsgJzEyNy4wLjAuMSc6IHsgY3NzOiAnZHNkc2RmYXNmZGZyMzQyMzQzMjQyMzQyMzQzJyB9IH0pO1xuICAgIH0sIDUwMCk7XG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPdXRsaW5lZFRleHRGaWVsZHMoKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW3sgZGF0YSwgZG9tYWluIH0sIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XG4gIC8vIGNvbnN0IFtDc3MsIHNldENzc10gPSB1c2VTdGF0ZSgnJyk7XG4gIC8vIHdpbmRvdy5kYXRhID0gZGF0YTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAvLyBpZiAoZGF0YVtkb21haW5dKSB7XG4gICAgLy8gICBzZXRDc3MoZGF0YVtkb21haW5dLmNzcyk7XG4gICAgLy8gICBjb25zb2xlLmxvZygnQ0NDOicsIENzcyk7XG4gICAgLy8gfVxuICB9LCBbZGF0YSwgZG9tYWluXSk7XG5cbiAgY29uc3Qgc2V0TG9jYWxDc3MgPSBlID0+IHtcbiAgICBpZiAoIWRvbWFpbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjc3MgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBjb25zdCBuZXdDc3MgPSB7IC4uLmRhdGFbZG9tYWluXSwgY3NzIH07XG4gICAgbGV0IG5ld2RhdGEgPSB7IC4uLmRhdGEsIFtkb21haW5dOiBuZXdDc3MgfTtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdkYXRhJywgZGF0YTogbmV3ZGF0YSB9KTtcbiAgfTtcblxuICBjb25zdCBzZXRHbG9iYWxDc3MgPSBlID0+IHtcbiAgICBjb25zdCBjc3MgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBsZXQgYSA9IHsgLi4uZGF0YSwgZ2xvYmFsQ3NzOiBjc3MgfTtcbiAgICBjb25zb2xlLmxvZyhhKTtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdkYXRhJywgZGF0YTogYSB9KTtcbiAgfTtcblxuICBsZXQgQ3NzID0gJyc7XG4gIGlmIChkYXRhW2RvbWFpbl0pIHtcbiAgICBDc3MgPSBkYXRhW2RvbWFpbl0uY3NzIHx8ICcnO1xuICAgIC8vIGNvbnNvbGUubG9nKCdDQ0M6JywgQ3NzKTtcbiAgfVxuICAvLyBjb25zb2xlLmxvZyhkYXRhLmdsb2JhbENzcywgMzMyMyk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIG1heFdpZHRoPSdtZCc+XG4gICAgICA8VGV4dEZpZWxkXG4gICAgICAgIGxhYmVsPXtkb21haW4gfHwgJ+acqumAieaLqSd9XG4gICAgICAgIG11bHRpbGluZVxuICAgICAgICByb3dzPSc4J1xuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxuICAgICAgICBtYXJnaW49J25vcm1hbCdcbiAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXG4gICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICBvbkNoYW5nZT17c2V0TG9jYWxDc3N9XG4gICAgICAgIGlkPSd0ZXh0J1xuICAgICAgICB2YWx1ZT17Q3NzfVxuICAgICAgICBwbGFjZWhvbGRlcj0n6buY6K6k6L+Q55So5YWo5bGAJ1xuICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICBzaHJpbms6IHRydWVcbiAgICAgICAgfX1cbiAgICAgIC8+XG5cbiAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgbGFiZWw9J+WFqOWxgCdcbiAgICAgICAgbXVsdGlsaW5lXG4gICAgICAgIHJvd3M9JzgnXG4gICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy50ZXh0RmllbGR9ICR7Y2xhc3Nlcy5sYXN0fWB9XG4gICAgICAgIG1hcmdpbj0nbm9ybWFsJ1xuICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcbiAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgIHZhbHVlPXtkYXRhLmdsb2JhbENzc31cbiAgICAgICAgb25DaGFuZ2U9e3NldEdsb2JhbENzc31cbiAgICAgICAgaWQ9J3RleHQnXG4gICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgIHNocmluazogdHJ1ZVxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QsIEZyYWdtZW50IGFzIGYsIGNyZWF0ZUVsZW1lbnQgYXMgZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IERyYXdlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EcmF3ZXInO1xuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vU2VhcmNoJztcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuLi9TdG9yZSc7XG5cbmNvbnN0IGRyYXdlcldpZHRoID0gMzAwO1xuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBkcmF3ZXI6IHtcbiAgICB3aWR0aDogZHJhd2VyV2lkdGgsXG4gICAgZmxleFNocmluazogMCxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgfSxcbiAgZHJhd2VyUGFwZXI6IHtcbiAgICB3aWR0aDogZHJhd2VyV2lkdGhcbiAgfSxcbiAgdG9vbGJhcjogdGhlbWUubWl4aW5zLnRvb2xiYXIsXG4gIGJveDoge1xuICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB6SW5kZXg6IDEwLFxuICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCAtIDUsXG4gICAgdHJhbnNpdGlvbjogJ2JveC1zaGFkb3cgMC4zcyBlYXNlLWluLW91dCdcbiAgfSxcbiAgc2hhZG93OiB7XG4gICAgYm94U2hhZG93OiAnMHB4IDJweCA0cHggLTFweCAjMDAwMDAwMzMsIDBweCA0cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMTQpLCAwcHggMXB4IDEwcHggMHB4IHJnYmEoMCwwLDAsMC4xMiknXG4gIH0sXG4gIHR4dDoge1xuICAgIHBhZGRpbmdMZWZ0OiA4XG4gIH1cbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgXyA9PiB7XG4gIGNvbnN0IGMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBbdHh0LCBzZXRGaWx0ZXJdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbY3VycmVudERhdGEsIHNldEN1cnJlbnREYXRhXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW3sgZGF0YSwgZG9tYWluIH0sIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XG4gIC8vIGNvbnNvbGUubG9nKDExLCB1c2VDb250ZXh0KENvbnRleHQpKTtcbiAgLy8gY29uc29sZS5sb2coJ+aKveWxiTonLCBkYXRhKTtcblxuICBjb25zdCBzY3JvbGwgPSBlID0+IHtcbiAgICBlLnRhcmdldC5zY3JvbGxUb3AgPiAzMCAmJiByZWYuY3VycmVudC5jbGFzc0xpc3QuYWRkKGMuc2hhZG93KTtcbiAgICBlLnRhcmdldC5zY3JvbGxUb3AgPCAzMCAmJiByZWYuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKGMuc2hhZG93KTtcbiAgfTtcblxuICBjb25zdCBTZWFyY2hCb3ggPSBlKCdkaXYnLCB7IGNsYXNzTmFtZTogYy5ib3gsIHJlZiB9LCBlKFNlYXJjaCwgeyBzZXRGaWx0ZXIgfSksIGUoRGl2aWRlcikpO1xuXG4gIGNvbnN0IHJlbmRlcmxpc3QgPSBPYmplY3Qua2V5cyhkYXRhKVxuICAgIC5maWx0ZXIodiA9PiB2ICE9PSAnZ2xvYmFsQ3NzJylcbiAgICAuZmlsdGVyKHYgPT4gdi5pbmNsdWRlcyh0eHQpKVxuICAgIC5tYXAoKHYsIGkpID0+XG4gICAgICBlKFxuICAgICAgICBMaXN0SXRlbSxcbiAgICAgICAgeyBidXR0b246IHRydWUsIGtleTogaSwgb25DbGljazogZSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdkb21haW4nLCBkb21haW46IHYgfSksIHNlbGVjdGVkOiBkb21haW4gPT09IHYgfSxcbiAgICAgICAgZShMaXN0SXRlbVRleHQsIHsgcHJpbWFyeTogdiwgY2xhc3NOYW1lOiBjLnR4dCB9KVxuICAgICAgKVxuICAgICk7XG5cbiAgY29uc3QgbGlzdEJveCA9IGUoTGlzdCwgbnVsbCwgcmVuZGVybGlzdCk7XG5cbiAgY29uc3QgZHJhd2VyT3B0aW9uID0ge1xuICAgIGNsYXNzTmFtZTogYy5kcmF3ZXIsXG4gICAgdmFyaWFudDogJ3Blcm1hbmVudCcsXG4gICAgY2xhc3NlczogeyBwYXBlcjogYy5kcmF3ZXJQYXBlciB9LFxuICAgIGFuY2hvcjogJ2xlZnQnLFxuICAgIG9uU2Nyb2xsOiBzY3JvbGxcbiAgfTtcblxuICByZXR1cm4gZShEcmF3ZXIsIGRyYXdlck9wdGlvbiwgU2VhcmNoQm94LCBlKCdkaXYnLCB7IGNsYXNzTmFtZTogYy50b29sYmFyIH0pLCBsaXN0Qm94KTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCBGcmFnbWVudCBhcyBmLCBjcmVhdGVFbGVtZW50IGFzIGUsIHVzZUNvbnRleHQsIHVzZU1lbW8sIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IElucHV0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0JztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuLi9TdG9yZSc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgICcmIGRpdjo6YmVmb3JlJzoge1xuICAgICAgYm9yZGVyQm90dG9tQ29sb3I6ICcjMDAwMDAwMDAnXG4gICAgfVxuICB9XG59KSk7XG5cbmNvbnN0IElucHV0TWUgPSAoeyByb3csIGZpZWxkIH0pID0+IHtcbiAgY29uc3QgYyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbeyByb3dzLCBkb21haW4sIGRhdGEsIGVycm9yIH0sIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XG4gIGNvbnN0IFtFcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbVHh0LCBzZXRUeHRdID0gdXNlU3RhdGUoJycpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0RXJyb3IoZmFsc2UpO1xuICAgIHNldFR4dCgnJyk7XG4gIH0sIFtkYXRhXSk7XG5cbiAgY29uc3QgZm4gPSB2ID0+IHtcbiAgICByZXR1cm4gWy4uLm5ldyBTZXQocm93cy5yZWR1Y2UoKGFjYywgdjIpID0+ICh2Mlt2XSAmJiBpc05hTihwYXJzZUZsb2F0KHYyW3ZdKSkgPyBhY2MuY29uY2F0KHYyW3ZdKSA6IGFjYyksIFtdKSldO1xuICB9O1xuXG4gIGNvbnN0IFN1Ym1pdCA9IGUgPT4ge1xuICAgIGxldCBvYmoyID0gWydzdHknLCAnZGVmJywgJ21pZCddLnJlZHVjZSgob2JqLCB2KSA9PiB7XG4gICAgICByZXR1cm4geyAuLi5vYmosIFt2XTogZm4odikgfTtcbiAgICB9LCB7fSk7XG4gICAgb2JqMiA9IHsgLi4uZGF0YVtkb21haW5dLCAuLi5vYmoyIH07XG4gICAgY29uc29sZS5sb2coJ29iajInLCBvYmoyKTtcblxuICAgIGxldCBvYmogPSB7IC4uLmRhdGEsIFtkb21haW5dOiBvYmoyIH07XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnZGF0YScsIGRhdGE6IG9iaiB9KTtcbiAgfTtcblxuICBjb25zdCBlZGl0ID0gZSA9PiB7XG4gICAgaWYgKCFkb21haW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdmFsID0gZS50YXJnZXQudmFsdWU7XG4gICAgaWYgKCFpc05hTihwYXJzZUZsb2F0KHZhbCkpKSB7XG4gICAgICBzZXRFcnJvcih0cnVlKTtcbiAgICAgIHNldFR4dCgn6YCJ5oup5Zmo5LiN6IO95piv5pWw5a2XJyk7XG4gICAgfSBlbHNlIGlmIChyb3dzLm1hcCh2ID0+IHZbZmllbGRdKS5pbmNsdWRlcyh2YWwpICYmIHZhbCkge1xuICAgICAgc2V0RXJyb3IodHJ1ZSk7XG4gICAgICBzZXRUeHQoJ+mHjeWkjemAieaLqeWZqCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRFcnJvcihmYWxzZSk7XG4gICAgICBzZXRUeHQoJycpO1xuICAgIH1cblxuICAgIGRpc3BhdGNoKHsgdHlwZTogJ2Vycm9yJywgZXJyb3I6IHZhbCB9KTtcblxuICAgIGNvbnN0IG5ld1JvdyA9IHsgLi4ucm93LCBbZmllbGRdOiB2YWwgfTtcbiAgICBsZXQgbmV3Um93cyA9IHJvd3MubWFwKHYgPT4gKHYgPT09IHJvdyA/IG5ld1JvdyA6IHYpKTtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdyb3dzJywgcm93czogbmV3Um93cyB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxUZXh0RmllbGRcbiAgICAgIHZhbHVlPXtyb3dbZmllbGRdID09PSB1bmRlZmluZWQgPyAnJyA6IHJvd1tmaWVsZF19XG4gICAgICBvbkNoYW5nZT17ZWRpdH1cbiAgICAgIGNsYXNzZXM9e3sgcm9vdDogYy5yb290IH19XG4gICAgICBvbkNsaWNrPXtlID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XG4gICAgICBvbkJsdXI9e1N1Ym1pdH1cbiAgICAgIGxhYmVsPXtUeHR9XG4gICAgICBlcnJvcj17ISEoZXJyb3IgPT09IHJvd1tmaWVsZF0gJiYgZXJyb3IgJiYgRXJyb3IpfVxuICAgIC8+XG4gICk7XG59O1xuXG5jb25zdCBNeUlucHV0ID0gcHJvcHMgPT4ge1xuICByZXR1cm4gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3h4eHh4eHgnKTtcbiAgICByZXR1cm4gPElucHV0TWUgey4uLnByb3BzfSAvPjtcbiAgfSwgW3Byb3BzLnJvd10pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlJbnB1dDtcblxuLy8gY29uc3QgY29tcGFyZSA9IChwcmV2LCBuZXh0KSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKHByZXYsICc9PT0nLCBuZXh0KTtcbi8vICAgaWYgKHByZXYudmFsdWUgPT09IG5leHQudmFsdWUpIHtcbi8vICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgfVxuLy8gICByZXR1cm4gZmFsc2U7XG4vLyB9O1xuXG4vLyByZXR1cm4gKFxuLy8gICA8TXlJbnB1dFxuLy8gICAgIHZhbHVlPXtyb3dbZmllbGRdID09PSB1bmRlZmluZWQgPyAnJyA6IHJvd1tmaWVsZF19XG4vLyAgICAgb25DaGFuZ2U9e2VkaXR9XG4vLyAgICAgY2xhc3NOYW1lPXtjLnJvb3R9XG4vLyAgICAgb25DbGljaz17ZSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfVxuLy8gICAvPlxuLy8gKTtcbi8vIGxldCBNeUlucHV0ID0gUmVhY3QubWVtbyhwcm9wcyA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKCdNeUlucHV0JywgcHJvcHMpO1xuLy8gICByZXR1cm4gPElucHV0IHsuLi5wcm9wc30gLz47XG4vLyB9LCBjb21wYXJlKTtcblxuLy8gY29uc3QgTXlJbnB1dCA9IFJlYWN0Lm1lbW8ocHJvcHMgPT4ge1xuLy8gICBjb25zb2xlLmxvZygnTXlJbnB1dCcsIHByb3BzKTtcbi8vICAgcmV0dXJuIDxJbnB1dCB7Li4ucHJvcHN9IC8+O1xuLy8gfSwgY29tcGFyZSk7XG5cbi8vIGNvbnN0IE15SW5wdXQgPSBSZWFjdC5tZW1vKHByb3BzID0+IHtcbi8vICAgcmV0dXJuIDxJbnB1dE1lIHsuLi5wcm9wc30gLz47XG4vLyB9LCBjb21wYXJlKTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgTXlJbnB1dDtcblxuLy8gKHByZXZQcm9wcywgbmV4dFByb3BzKSA9PiB7XG4vLyAgIGlmIChwcmV2UHJvcHMucm93ID09PSBuZXh0UHJvcHMucm93KSByZXR1cm4gdHJ1ZTtcbi8vICAgcmV0dXJuIGZhbHNlO1xuLy8gfTtcblxuLy8gb25CbHVyPXtlID0+IHRvZ2dsZSB8fCAodG9nZ2xlID0gdHJ1ZSl9XG4vLyBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzMigpO1xuLy8gLy8gbGV0IHRvZ2dsZSA9IHRydWU7XG4vLyBjb25zdCBjbGljayA9IGUgPT4ge1xuLy8gICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuLy8gICAvLyAodG9nZ2xlID0gIXRvZ2dsZSkgJiYgZS50YXJnZXQuYmx1cigpO1xuLy8gfTtcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCBhcyBmLCBjcmVhdGVFbGVtZW50IGFzIGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keSc7XG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3cnO1xuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGwnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3gnO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4uL1N0b3JlJztcbmltcG9ydCBJbnB1dE1lIGZyb20gJy4vTXlJbnB1dCc7XG5cbmNvbnN0IE15VGFibGVCb2R5ID0gXyA9PiB7XG4gIGNvbnN0IFt7IGRhdGEsIHNlbGVjdGVkLCByb3dzLCBkb21haW4gfSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChDb250ZXh0KTtcbiAgY29uc3QgY3JlYXRlRGF0YSA9IChzdHksIGRlZiwgbWlkLCBpZCkgPT4gKHsgc3R5LCBkZWYsIG1pZCwgaWQgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyh7IGRhdGEsIGRvbWFpbiB9KTtcbiAgICBjb25zb2xlLmxvZygnZGF0YVtkb21haW5dPT4gJywgZGF0YVtkb21haW5dKTtcblxuICAgIGlmIChkYXRhW2RvbWFpbl0pIHtcbiAgICAgIGxldCB7IHN0eSwgZGVmLCBtaWQgfSA9IGRhdGFbZG9tYWluXTtcbiAgICAgIGNvbnN0IGkgPSBbIHN0eSwgZGVmLCBtaWRdLnJlZHVjZSgoYWNjLCB2KSA9PiAodi5sZW5ndGggPiBhY2MgPyB2Lmxlbmd0aCA6IGFjYyksIDApO1xuICAgICAgY29uc3Qgcm93cyA9IFsuLi5BcnJheShpKV0ubWFwKCh2LCBpKSA9PiBjcmVhdGVEYXRhKHN0eVtpXSB8fCAnJywgZGVmW2ldIHx8ICcnLCBtaWRbaV0gfHwgJycsIGkpKTtcbiAgICAgIGNvbnNvbGUubG9nKHJvd3MsIDExMSk7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdyb3dzJywgcm93cyB9KTtcblxuICAgICAgaWYgKCFyb3dzLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBvYmogPSB7IC4uLmRhdGEgfTtcbiAgICAgICAgZGVsZXRlIG9ialtkb21haW5dO1xuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdkYXRhJywgZGF0YTogb2JqIH0pO1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnJlbW92ZShkb21haW4pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnc2VsZWN0ZWQnLCBzZWxlY3RlZDogW10gfSk7XG4gICAgfTtcbiAgfSwgW2RhdGEsIGRvbWFpbl0pO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUsIGlkKSA9PiB7XG4gICAgc2VsZWN0ZWQuaW5jbHVkZXMoaWQpXG4gICAgICA/IGRpc3BhdGNoKHsgdHlwZTogJ3NlbGVjdGVkJywgc2VsZWN0ZWQ6IHNlbGVjdGVkLmZpbHRlcih2ID0+IHYgIT09IGlkKSB9KVxuICAgICAgOiBkaXNwYXRjaCh7IHR5cGU6ICdzZWxlY3RlZCcsIHNlbGVjdGVkOiBzZWxlY3RlZC5jb25jYXQoaWQpIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFRhYmxlQm9keT5cbiAgICAgIHtyb3dzLmxlbmd0aCA/IChcbiAgICAgICAgcm93cy5tYXAoKHJvdywgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VGFibGVSb3cgaG92ZXIgb25DbGljaz17ZSA9PiBoYW5kbGVDbGljayhlLCByb3cuaWQpfSBrZXk9e2l9IHNlbGVjdGVkPXtzZWxlY3RlZC5pbmNsdWRlcyhyb3cuaWQpfT5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBwYWRkaW5nPSdjaGVja2JveCc+XG4gICAgICAgICAgICAgICAgPENoZWNrYm94IGNoZWNrZWQ9e3NlbGVjdGVkLmluY2x1ZGVzKHJvdy5pZCl9IC8+XG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIHNjb3BlPSdyb3cnPlxuICAgICAgICAgICAgICAgIDxJbnB1dE1lIHJvdz17cm93fSBmaWVsZD0nc3R5JyAvPlxuICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj0nY2VudGVyJz5cbiAgICAgICAgICAgICAgICA8SW5wdXRNZSByb3c9e3Jvd30gZmllbGQ9J2RlZicgLz5cbiAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249J2NlbnRlcic+XG4gICAgICAgICAgICAgICAgPElucHV0TWUgcm93PXtyb3d9IGZpZWxkPSdtaWQnIC8+XG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgKSA6IChcbiAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgIDxUYWJsZUNlbGwgY29sU3Bhbj17NH0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBhbGlnbj0nY2VudGVyJyB2YXJpYW50PSdzdWJ0aXRsZTInIGNvbG9yPSd0ZXh0U2Vjb25kYXJ5Jz5cbiAgICAgICAgICAgICAg5rKh5pyJ5pWw5o2uXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgIDwvVGFibGVSb3c+XG4gICAgICApfVxuICAgIDwvVGFibGVCb2R5PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlUYWJsZUJvZHk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIEZyYWdtZW50IGFzIGYsIGNyZWF0ZUVsZW1lbnQgYXMgZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkJztcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbCc7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3gnO1xuaW1wb3J0IFRhYmxlU29ydExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlU29ydExhYmVsJztcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuLi9TdG9yZSc7XG5cbmNvbnN0IGhlYWRSb3dzID0gW1xuICB7IGlkOiAnc3R5JywgbnVtZXJpYzogZmFsc2UsIGxhYmVsOiAn6L+Q55So5qC35byPJyB9LFxuICB7IGlkOiAnZGVmJywgbnVtZXJpYzogdHJ1ZSwgbGFiZWw6ICfkuI3ov5DnlKjmoLflvI8nIH0sXG4gIHsgaWQ6ICdtaWQnLCBudW1lcmljOiB0cnVlLCBsYWJlbDogJ+W8uuWItue/u+ivkScgfVxuXTtcblxuY29uc3QgRW5oYW5jZWRUYWJsZUhlYWQgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IFt7IHNlbGVjdGVkLCByb3dzLCBkYXRhIH0sIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XG5cbiAgY29uc3QgW29yZGVyLCBzZXRPcmRlcl0gPSB1c2VTdGF0ZSgnYXNjJyk7XG4gIGNvbnN0IFtvcmRlckJ5LCBzZXRPcmRlckJ5XSA9IHVzZVN0YXRlKCdzdHknKTtcbiAgY29uc3QgbnVtU2VsZWN0ZWQgPSBzZWxlY3RlZC5sZW5ndGg7XG4gIGNvbnN0IHJvd0NvdW50ID0gcm93cy5sZW5ndGg7XG5cbiAgY29uc3QgaGFuZGxlU2VsZWN0QWxsQ2xpY2sgPSBldmVudCA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jaGVja2VkKSB7XG4gICAgICBjb25zdCBuZXdTZWxlY3RlZHMgPSByb3dzLm1hcChyb3cgPT4gcm93LmlkKTtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ3NlbGVjdGVkJywgc2VsZWN0ZWQ6IG5ld1NlbGVjdGVkcyB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnc2VsZWN0ZWQnLCBzZWxlY3RlZDogW10gfSk7XG5cbiAgfTtcblxuICBjb25zdCBvblJlcXVlc3RTb3J0ID0gKGUsIHByb3BlcnR5KSA9PiB7XG4gICAgY29uc3QgaXNEZXNjID0gb3JkZXJCeSA9PT0gcHJvcGVydHkgJiYgb3JkZXIgPT09ICdkZXNjJztcbiAgICBzZXRPcmRlcihpc0Rlc2MgPyAnYXNjJyA6ICdkZXNjJyk7XG4gICAgc2V0T3JkZXJCeShwcm9wZXJ0eSk7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAncm93cycsIHJvd3M6IFsuLi5yb3dzXS5yZXZlcnNlKCkgfSk7XG4gIH07XG4gIGNvbnN0IGNyZWF0ZVNvcnRIYW5kbGVyID0gcHJvcGVydHkgPT4gZSA9PiBvblJlcXVlc3RTb3J0KGUsIHByb3BlcnR5KTtcblxuICByZXR1cm4gKFxuICAgIDxUYWJsZUhlYWQ+XG4gICAgICA8VGFibGVSb3c+XG4gICAgICAgIDxUYWJsZUNlbGwgcGFkZGluZz0nY2hlY2tib3gnPlxuICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZT17bnVtU2VsZWN0ZWQgPiAwICYmIG51bVNlbGVjdGVkIDwgcm93Q291bnR9XG4gICAgICAgICAgICBjaGVja2VkPXshIXJvd0NvdW50ICYmIG51bVNlbGVjdGVkID09PSByb3dDb3VudH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWxlY3RBbGxDbGlja31cbiAgICAgICAgICAvPlxuICAgICAgICA8L1RhYmxlQ2VsbD5cblxuICAgICAgICB7aGVhZFJvd3MubWFwKChyb3csIGkpID0+IChcbiAgICAgICAgICA8VGFibGVDZWxsIGtleT17aX0gYWxpZ249e3Jvdy5udW1lcmljID8gJ2NlbnRlcicgOiAnbGVmdCd9IHNvcnREaXJlY3Rpb249e29yZGVyQnkgPT09IHJvdy5pZCA/IG9yZGVyIDogZmFsc2V9PlxuICAgICAgICAgICAgPFRhYmxlU29ydExhYmVsIGFjdGl2ZT17b3JkZXJCeSA9PT0gcm93LmlkfSBkaXJlY3Rpb249e29yZGVyfSBvbkNsaWNrPXtjcmVhdGVTb3J0SGFuZGxlcihyb3cuaWQpfT5cbiAgICAgICAgICAgICAge3Jvdy5sYWJlbH1cbiAgICAgICAgICAgIDwvVGFibGVTb3J0TGFiZWw+XG4gICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICkpfVxuICAgICAgPC9UYWJsZVJvdz5cbiAgICA8L1RhYmxlSGVhZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVuaGFuY2VkVGFibGVIZWFkO1xuXG4vLyBjb25zdCB7IG9uU2VsZWN0QWxsQ2xpY2ssIG9yZGVyLCBvcmRlckJ5LCBudW1TZWxlY3RlZCwgcm93Q291bnQsIG9uUmVxdWVzdFNvcnQgfSA9IHByb3BzO1xuXG4vLyBjb25zdCBFbmhhbmNlZFRhYmxlSGVhZDIgPSBSZWFjdC5tZW1vKFxuLy8gICBwcm9wcyA9PiA8RW5oYW5jZWRUYWJsZUhlYWQgey4uLnByb3BzfSAvPixcbi8vICAgKHByZXZQcm9wcywgbmV4dFByb3BzKSA9PiB7XG4vLyAgICAgaWYgKFxuLy8gICAgICAgcHJldlByb3BzLm51bVNlbGVjdGVkID09PSBuZXh0UHJvcHMubnVtU2VsZWN0ZWQgJiZcbi8vICAgICAgIHByZXZQcm9wcy5vcmRlciA9PT0gbmV4dFByb3BzLm9yZGVyICYmXG4vLyAgICAgICBwcmV2UHJvcHMub3JkZXJCeSA9PT0gbmV4dFByb3BzLm9yZGVyQnkgJiZcbi8vICAgICAgIHByZXZQcm9wcy5yb3dDb3VudCA9PT0gbmV4dFByb3BzLnJvd0NvdW50XG4vLyAgICAgKVxuLy8gICAgICAgcmV0dXJuIHRydWU7XG4vLyAgICAgcmV0dXJuIGZhbHNlO1xuLy8gICB9XG4vLyApO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IGFzIGYsIGNyZWF0ZUVsZW1lbnQgYXMgZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sdGlwJztcbmltcG9ydCBGYWIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRmFiJztcbmltcG9ydCBBZGRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BZGQnO1xuaW1wb3J0IFN3aXRjaCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Td2l0Y2gnO1xuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0RlbGV0ZSc7XG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnLi4vU3RvcmUnO1xuXG5jb25zdCB1c2VUb29sYmFyU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBhYnNvbHV0ZToge1xuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIGJvdHRvbTogdGhlbWUuc3BhY2luZygxMCksXG4gICAgcmlnaHQ6IHRoZW1lLnNwYWNpbmcoNSksXG4gICAgekluZGV4OiAyMFxuICB9LFxuICBzcGFjZXI6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgcmlnaHQ6IDIwLFxuICAgIHpJbmRleDogMjBcbiAgfVxufSkpO1xuXG5jb25zdCBFbmhhbmNlZFRhYmxlVG9vbGJhciA9IHByb3BzID0+IHtcbiAgY29uc3QgYyA9IHVzZVRvb2xiYXJTdHlsZXMoKTtcbiAgY29uc3QgW3sgc2VsZWN0ZWQsIGRhdGEsIGRvbWFpbiwgcm93cywgdG9nZ2xlIH0sIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XG5cbiAgY29uc3QgY3JlYXRlRGF0YSA9IChzdHksIGRlZiwgbWlkLCBpZCkgPT4gKHsgc3R5LCBkZWYsIG1pZCwgaWQgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGF0YVtkb21haW5dKSB7XG4gICAgICAvLyBsZXQgYm9vbCA9IE9iamVjdC52YWx1ZXMoZGF0YVtkb21haW5dKS5zb21lKHYgPT4gdi5sZW5ndGgpO1xuICAgICAgLy8gaWYgKCFib29sKSB7XG4gICAgICAvLyBjb25zdCBvYmogPSB7IC4uLmRhdGEgfTtcbiAgICAgIC8vIGRlbGV0ZSBvYmpbZG9tYWluXTtcbiAgICAgIC8vIGRpc3BhdGNoKHsgdHlwZTogJ2RhdGEnLCBkYXRhOiBvYmogfSk7XG4gICAgICAvLyB9XG4gICAgfVxuICB9LCBbcm93c10pO1xuXG4gIGNvbnN0IHJlbW92ZSA9IF8gPT4ge1xuICAgIGxldCByb3dzMiA9IHJvd3MuZmlsdGVyKHYgPT4gIXNlbGVjdGVkLmluY2x1ZGVzKHYuaWQpKTtcblxuICAgIGxldCBvYmoyID0gWydzdHknLCAnZGVmJywgJ21pZCddLnJlZHVjZSgob2JqLCB2KSA9PiB7XG4gICAgICByZXR1cm4geyAuLi5vYmosIFt2XTogcm93czIucmVkdWNlKChhY2MsIHYyKSA9PiAodjJbdl0gPyBhY2MuY29uY2F0KHYyW3ZdKSA6IGFjYyksIFtdKSB9O1xuICAgIH0sIHt9KTtcbiAgICBvYmoyID0geyAuLi5kYXRhW2RvbWFpbl0sIC4uLm9iajIgfTtcbiAgICBsZXQgb2JqID0geyAuLi5kYXRhLCBbZG9tYWluXTogb2JqMiB9O1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ2RhdGEnLCBkYXRhOiBvYmogfSk7XG5cbiAgICBjb25zb2xlLmxvZygneHh4eCcsIHJvd3MyKTtcbiAgICAvLyBpZiAoIXJvd3MyLmxlbmd0aCkge1xuICAgIC8vICAgY29uc3Qgb2JqID0geyAuLi5kYXRhIH07XG4gICAgLy8gICBkZWxldGUgb2JqW2RvbWFpbl07XG4gICAgLy8gICAvLyBkaXNwYXRjaCh7IHR5cGU6ICdkYXRhJywgZGF0YTogb2JqIH0pO1xuICAgIC8vIH1cbiAgfTtcblxuICBjb25zdCBhZGQgPSBfID0+IHtcbiAgICBpZiAocm93cy5ldmVyeSh2ID0+IHYuc3R5IHx8IHYuZGVmIHx8IHYubWlkKSkge1xuICAgICAgY29uc3Qgcm93ID0gY3JlYXRlRGF0YSh1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBEYXRlLm5vdygpKTtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ3Jvd3MnLCByb3dzOiByb3dzLmNvbmNhdChyb3cpIH0pO1xuICAgIH1cblxuICAgICAgLy8gbGV0IG9iajIgPSBbJ3N0eScsICdkZWYnLCAnbWlkJ10ucmVkdWNlKChvYmosIHYpID0+IHtcbiAgICAgIC8vICAgcmV0dXJuIHsgLi4ub2JqLCBbdl06IHJvd3MucmVkdWNlKChhY2MsIHYyKSA9PiAodjJbdl0gPyBhY2MuY29uY2F0KHYyW3ZdKSA6IGFjYyksIFtdKSB9O1xuICAgICAgLy8gfSwge30pO1xuICB9O1xuXG4gIGNvbnN0IEljb24gPSAodGl0bGUsIGNhbGxiYWNrLCBpY29uKSA9PiB7XG4gICAgcmV0dXJuIGUoVG9vbHRpcCwgeyB0aXRsZSB9LCBlKEZhYiwgeyBjb2xvcjogJ3ByaW1hcnknLCBjbGFzc05hbWU6IGMuYWJzb2x1dGUsIG9uQ2xpY2s6IGNhbGxiYWNrIH0sIGUoaWNvbikpKTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVIYW5kbGVyID0gXyA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAndG9nZ2xlJywgdG9nZ2xlOiAhdG9nZ2xlIH0pO1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ3NlbGVjdGVkJywgc2VsZWN0ZWQ6IFtdIH0pO1xuICB9O1xuXG4gIHJldHVybiBlKFxuICAgIGYsXG4gICAgbnVsbCxcbiAgICAhdG9nZ2xlICYmIChzZWxlY3RlZC5sZW5ndGggPT09IDAgPyBJY29uKCdBZGQnLCBhZGQsIEFkZEljb24pIDogSWNvbignRGVsZXRlJywgcmVtb3ZlLCBEZWxldGVJY29uKSksXG4gICAgZShTd2l0Y2gsIHtcbiAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICBjaGVja2VkOiB0b2dnbGUsXG4gICAgICBvbkNoYW5nZTogdG9nZ2xlSGFuZGxlcixcbiAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgY2xhc3NOYW1lOiBjLnNwYWNlclxuICAgIH0pXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFbmhhbmNlZFRhYmxlVG9vbGJhcjtcblxuLyogICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7bnVtU2VsZWN0ZWQgPT09IDAgPyAoXG4gICAgICAgIDxUb29sdGlwIHRpdGxlPSdBZGQnPlxuICAgICAgICAgIDxGYWIgY29sb3I9J3ByaW1hcnknIGNsYXNzTmFtZT17Y2xhc3Nlcy5hYnNvbHV0ZX0gb25DbGljaz17YWRkfT5cbiAgICAgICAgICAgIDxBZGRJY29uIC8+XG4gICAgICAgICAgPC9GYWI+XG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICkgOiAoXG4gICAgICAgIDxUb29sdGlwIHRpdGxlPSdEZWxldGUnPlxuICAgICAgICAgIDxGYWIgY29sb3I9J3ByaW1hcnknIGNsYXNzTmFtZT17Y2xhc3Nlcy5hYnNvbHV0ZX0gb25DbGljaz17cmVtb3ZlfT5cbiAgICAgICAgICAgIDxEZWxldGVJY29uIC8+XG4gICAgICAgICAgPC9GYWI+XG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICl9XG5cbiAgICAgIDxTd2l0Y2hcbiAgICAgICAgY29sb3I9J3ByaW1hcnknXG4gICAgICAgIGNoZWNrZWQ9eyExfVxuICAgICAgICBvbkNoYW5nZT17XyA9PiBzZXRUb2dnbGUoZCA9PiAhZCl9XG4gICAgICAgIHZhbHVlPSdjaGVja2VkQSdcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnNwYWNlcn1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7ICovXG5cbi8vIGNvbnN0IEVuaGFuY2VkVGFibGVUb29sYmFyMiA9IFJlYWN0Lm1lbW8oXG4vLyAgIHByb3BzID0+IDxFbmhhbmNlZFRhYmxlVG9vbGJhciB7Li4ucHJvcHN9IC8+LFxuLy8gICAocHJldlByb3BzLCBuZXh0UHJvcHMpID0+IHtcbi8vICAgICBpZiAocHJldlByb3BzLm51bVNlbGVjdGVkID09PSBuZXh0UHJvcHMubnVtU2VsZWN0ZWQgJiYgcHJldlByb3BzLnRvZ2dsZSA9PT0gbmV4dFByb3BzLnRvZ2dsZSkgcmV0dXJuIHRydWU7XG4vLyAgICAgcmV0dXJuIGZhbHNlO1xuLy8gICB9XG4vLyApO1xue1xuICAvKiA8RW5oYW5jZWRUYWJsZVRvb2xiYXIgbnVtU2VsZWN0ZWQ9e3NlbGVjdGVkLmxlbmd0aH0gcmVtb3ZlPXtyZW1vdmV9IGFkZD17YWRkfSB0b2dnbGU9e3RvZ2dsZX0gc2V0VG9nZ2xlPXtzZXRUb2dnbGV9IC8+OyAqL1xufVxuXG4vLyBleHBvcnQgZGVmYXVsdCBfID0+IHtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8RW5oYW5jZWRUYWJsZVRvb2xiYXIyXG4vLyAgICAgICBudW1TZWxlY3RlZD17c2VsZWN0ZWQubGVuZ3RofVxuLy8gICAgICAgcmVtb3ZlPXtyZW1vdmV9XG4vLyAgICAgICBhZGQ9e2FkZH1cbi8vICAgICAgIHRvZ2dsZT17dG9nZ2xlfVxuLy8gICAgICAgc2V0VG9nZ2xlPXtzZXRUb2dnbGV9XG4vLyAgICAgLz5cbi8vICAgKTtcbi8vIH07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoJztcbmltcG9ydCBJbnB1dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dCc7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgZmxleEdyb3c6IDFcbiAgfSxcbiAgc2VhcmNoOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgfSxcbiAgc2VhcmNoSWNvbjoge1xuICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDMuNSksXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcbiAgfSxcbiAgaW5wdXRSb290OiB7XG4gICAgY29sb3I6ICdpbmhlcml0J1xuICB9LFxuICBpbnB1dElucHV0OiB7XG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxLCAxLCAxLCA1KSxcbiAgICB3aWR0aDogJzEwMCUnXG4gIH0sXG4gIGlucHV0OiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpXG4gIH1cbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoQXBwQmFyKHsgc2V0RmlsdGVyIH0pIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPFRvb2xiYXIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNofT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoSWNvbn0+XG4gICAgICAgICAgPFNlYXJjaEljb24gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdTZWFyY2jigKYnXG4gICAgICAgICAgY2xhc3Nlcz17e1xuICAgICAgICAgICAgcm9vdDogY2xhc3Nlcy5pbnB1dFJvb3QsXG4gICAgICAgICAgICBpbnB1dDogY2xhc3Nlcy5pbnB1dElucHV0XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRGaWx0ZXIoZS50YXJnZXQudmFsdWUudHJpbSgpKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvVG9vbGJhcj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYsIEZyYWdtZW50IGFzIGYsIGNyZWF0ZUVsZW1lbnQgYXMgZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBUYWJsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZSc7XG5cbmltcG9ydCBNeVRhYmxlSGVhZCBmcm9tICcuL015VGFibGVIZWFkJztcbmltcG9ydCBNeVRhYmxlVG9vbGJhciBmcm9tICcuL015VGFibGVUb29sYmFyJztcbmltcG9ydCBNeVRhYmxlQm9keSBmcm9tICcuL015VGFibGVCb2R5JztcbmltcG9ydCBDc3MgZnJvbSAnLi9Dc3MnO1xuXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnLi4vU3RvcmUnO1xuXG5jb25zdCB1c2VUb29sYmFyU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBhYnNvbHV0ZToge1xuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIGJvdHRvbTogdGhlbWUuc3BhY2luZygxMCksXG4gICAgcmlnaHQ6IHRoZW1lLnNwYWNpbmcoNSksXG4gICAgekluZGV4OiAyMFxuICB9LFxuICBzcGFjZXI6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgcmlnaHQ6IDIwLFxuICAgIHpJbmRleDogMjBcbiAgfVxufSkpO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICB3aWR0aDogJzEwMCUnXG4gIH0sXG4gIHBhcGVyOiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMilcbiAgfSxcbiAgdGFibGU6IHtcbiAgICBtaW5XaWR0aDogNzUwXG4gIH0sXG4gIHRhYmxlV3JhcHBlcjoge1xuICAgIG92ZXJmbG93WDogJ2F1dG8nXG4gIH1cbn0pKTtcblxuY29uc3QgY3JlYXRlRGF0YSA9IChzdHksIGRlZiwgbWlkLCBpZCkgPT4gKHsgc3R5LCBkZWYsIG1pZCwgaWQgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVuaGFuY2VkVGFibGUoKSB7XG4gIGNvbnN0IGMgPSB1c2VUb29sYmFyU3R5bGVzKCk7XG4gIGNvbnN0IFt7IHRvZ2dsZSB9LCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xuXG4gIHJldHVybiBlKFxuICAgIFBhcGVyLFxuICAgIHsgY2xhc3NOYW1lOiBjLnBhcGVyIH0sXG4gICAgZShNeVRhYmxlVG9vbGJhciksXG4gICAgIXRvZ2dsZVxuICAgICAgPyBlKFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiBjLnRhYmxlV3JhcHBlciB9LFxuICAgICAgICAgIGUoVGFibGUsIHsgY2xhc3NOYW1lOiBjLnRhYmxlLCBzaXplOiAnbWVkaXVtJyB9LCBlKE15VGFibGVIZWFkKSwgZShNeVRhYmxlQm9keSkpXG4gICAgICAgIClcbiAgICAgIDogZShDc3MpXG4gICk7XG59XG57XG4gIC8qIDxUYWJsZSBjbGFzc05hbWU9e2NsYXNzZXMudGFibGV9IHNpemU9J21lZGl1bSc+IDwvVGFibGU+ICovXG59XG4vKiA8RW5oYW5jZWRUYWJsZUhlYWQyXG5udW1TZWxlY3RlZD17c2VsZWN0ZWQubGVuZ3RofVxub3JkZXI9e29yZGVyfVxub3JkZXJCeT17b3JkZXJCeX1cbm9uU2VsZWN0QWxsQ2xpY2s9e2hhbmRsZVNlbGVjdEFsbENsaWNrfVxub25SZXF1ZXN0U29ydD17aGFuZGxlUmVxdWVzdFNvcnR9XG5yb3dDb3VudD17ZGF0YS5sZW5ndGh9XG4vPiAqL1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCwgRnJhZ21lbnQgYXMgZiwgY3JlYXRlRWxlbWVudCBhcyBlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgVGFibGUgZnJvbSAnLi9jb21wb25lbnRzL1RhYmxlJztcbmltcG9ydCBEcmF3ZXIgZnJvbSAnLi9jb21wb25lbnRzL0RyYXdlcic7XG5cbmNvbnN0IGRyYXdlcldpZHRoID0gMzAwO1xuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnXG4gIH0sXG4gIGFwcEJhcjoge1xuICAgIHdpZHRoOiBgY2FsYygxMDAlIC0gJHtkcmF3ZXJXaWR0aH1weClgLFxuICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoXG4gIH0sXG5cbiAgY29udGVudDoge1xuICAgIGZsZXhHcm93OiAxLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLmRlZmF1bHRcbiAgfVxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQZXJtYW5lbnREcmF3ZXJMZWZ0KCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtjdXJyZW50RGF0YSwgc2V0Q3VycmVudERhdGFdID0gdXNlU3RhdGUoe30pO1xuXG4gIC8vIGNvbnN0IENoYW5nZSA9IGRvbWFpbiA9PiB7XG4gIC8vICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQobnVsbCwgZCA9PiB7XG4gIC8vICAgICBzZXRDdXJyZW50RGF0YSh7IGRvbWFpbiwgZGF0YTogZCB9KTtcbiAgLy8gICB9KTtcbiAgLy8gfTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIENoYW5nZSgpO1xuICAvLyAgIGNocm9tZS5zdG9yYWdlLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcigoY2hhbmdlcywgYXJlYU5hbWUpID0+IHtcbiAgLy8gICAgIENoYW5nZSguLi5PYmplY3Qua2V5cyhjaGFuZ2VzKSk7XG4gIC8vICAgfSk7XG4gIC8vIH0sIFtdKTtcblxuICAvLyBjb25zdCBnZXRDdXJyZW50RGF0YSA9IGRvbWFpbiA9PiB7XG4gIC8vICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQobnVsbCwgZCA9PiB7XG4gIC8vICAgICBzZXRDdXJyZW50RGF0YSh7IGRvbWFpbiwgZGF0YTogZCB9KTtcbiAgLy8gICB9KTtcbiAgLy8gfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPERyYXdlciAvPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgIDxUYWJsZSB7Li4uY3VycmVudERhdGF9IC8+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBwYWRkaW5nOiAxMCxcbiAgICB3aWR0aDogMTUwXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIG1hcmdpbkJvdHRvbTogOFxuICB9XG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IF8gPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtvbmNlLCBzZXRPbmNlXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IFNlbGVjdGlvbiA9IGUgPT4ge1xuICAgIGNocm9tZS50YWJzLmdldFNlbGVjdGVkKHRhYiA9PiB7XG4gICAgICBjaHJvbWUudGFicy5leGVjdXRlU2NyaXB0KHRhYi5pZCwge1xuICAgICAgICBmaWxlOiAnc2VsZWN0b3IuanMnLFxuICAgICAgICBydW5BdDogJ2RvY3VtZW50X3N0YXJ0J1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgc2V0T25jZShmYWxzZSk7XG4gICAgd2luZG93LmNsb3NlKCk7XG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gU2VsZWN0aW9uKCk7XG4gIH0sIFtdKTtcbiAgY29uc3QgY2xlYXIgPSAoKSA9PiB7XG4gICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5jbGVhcihjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUsICdDbGVhcicpKTtcblxuICAgIGNocm9tZS50YWJzLmdldFNlbGVjdGVkKHRhYiA9PiB7XG4gICAgICBjaHJvbWUudGFicy5leGVjdXRlU2NyaXB0KHRhYi5pZCwge1xuICAgICAgICBjb2RlOiBgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO2AsXG4gICAgICAgIHJ1bkF0OiAnZG9jdW1lbnRfc3RhcnQnXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbiAgY29uc3Qgc3RvcCA9ICgpID0+IHtcbiAgICAvLyBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCB0YWIgPT4ge1xuICAgIC8vICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiWzBdLmlkLCAnTk9UUkFOU0xBVEUnKTtcbiAgICAvLyB9KTtcbiAgICAvLyBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCBmdW5jdGlvbih0YWJzKSB7XG4gICAgLy8gICBjaHJvbWUudGFicy5yZWxvYWQodGFic1swXS5pZCk7XG4gICAgLy8gfSk7XG4gICAgLy8gY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSwgZnVuY3Rpb24odGFicykge1xuICAgIC8vICAgY2hyb21lLnRhYnMudXBkYXRlKHRhYnNbMF0uaWQsIHsgdXJsOiB0YWJzWzBdLnVybCB9KTtcbiAgICAvLyB9KTtcbiAgICAvLyBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCBmdW5jdGlvbihhcnJheU9mVGFicykge1xuICAgIC8vICAgdmFyIGNvZGUgPSAnd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpOyc7XG4gICAgLy8gICBjaHJvbWUudGFicy5leGVjdXRlU2NyaXB0KGFycmF5T2ZUYWJzWzBdLmlkLCB7IGNvZGU6IGNvZGUgfSk7XG4gICAgLy8gfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgY29sb3I9J3ByaW1hcnknXG4gICAgICAgIHZhcmlhbnQ9J2NvbnRhaW5lZCdcbiAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XG4gICAgICAgIG9uQ2xpY2s9e29uY2UgPyBTZWxlY3Rpb24gOiBudWxsfVxuICAgICAgPlxuICAgICAgICDnv7vor5FcbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPEJ1dHRvbiBjb2xvcj0nc2Vjb25kYXJ5JyB2YXJpYW50PSdjb250YWluZWQnIGZ1bGxXaWR0aCBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufSBvbkNsaWNrPXtzdG9wfT5cbiAgICAgICAg5LiN57+76K+RXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxCdXR0b24gY29sb3I9J3NlY29uZGFyeScgdmFyaWFudD0nY29udGFpbmVkJyBmdWxsV2lkdGggb25DbGljaz17Y2xlYXJ9PlxuICAgICAgICDmuIXnqbpcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCc7XG5cbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XG5pbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgYmx1ZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvYmx1ZSc7XG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgcHJpbWFyeTogYmx1ZVxuICB9XG59KTtcblxuUmVhY3RET00ucmVuZGVyKFxuICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgIDxDc3NCYXNlbGluZSAvPlxuICAgIDxBcHAgLz5cbiAgPC9UaGVtZVByb3ZpZGVyPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=