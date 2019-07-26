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

    default:
      return state;
  }
};

var Store = function Store(props) {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, {
    data: {},
    rows: [],
    selected: [],
    domain: ''
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
      data = _useContext2[0].data,
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
      }
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
      dispatch = _useContext2[1]; // const [localData, setLocalData] = useState(data);


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

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_1__["default"], null, 1 ? rows.map(function (row, i) {
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
    }, row.sty), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], {
      align: "center"
    }, row.def), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], {
      align: "center"
    }, row.mid));
  }) : undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MyTableBody); // selected.includes(id) ? setSelected(selected.filter(v => v !== id)) : setSelected(selected.concat(id));

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
      var bool = Object.values(data[domain]).some(function (v) {
        return v.length;
      });

      if (!bool) {
        var obj = _objectSpread({}, data);

        delete obj[domain];
        dispatch({
          type: 'data',
          data: obj
        });
      }
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
  };

  var add = function add(_) {
    if (rows.every(function (v) {
      return v.sty || v.def || v.mid;
    })) {
      var row = createData(undefined, undefined, undefined, Date.now());
      console.log(row);
      dispatch({
        type: 'rows',
        rows: rows.concat(row)
      });
      console.log(rows);
      var obj2 = ['sty', 'def', 'mid'].reduce(function (obj, v) {
        return _objectSpread({}, obj, _defineProperty({}, v, rows.reduce(function (acc, v2) {
          return v2[v] ? acc.concat(v2[v]) : acc;
        }, [])));
      }, {});

      var obj = _objectSpread({}, data, _defineProperty({}, domain, obj2));
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

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, selected.length === 0 ? Icon('Add', add, _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_4___default.a) : Icon('Delete', remove, _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6___default.a), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: 'primary',
    checked: true,
    onChange: function onChange(_) {
      console.log(10);
    },
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

var createData = function createData(sty, def, mid, id) {
  return {
    sty: sty,
    def: def,
    mid: mid,
    id: id
  };
};

function EnhancedTable(_ref) {
  var domain = _ref.domain,
      dataAll = _ref.data;
  var c = useToolbarStyles();
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: c.paper
  }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_MyTableToolbar__WEBPACK_IMPORTED_MODULE_5__["default"]), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', {
    className: c.tableWrapper
  }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: c.table,
    size: 'medium'
  }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_MyTableHead__WEBPACK_IMPORTED_MODULE_4__["default"]), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_MyTableBody__WEBPACK_IMPORTED_MODULE_6__["default"]))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL09wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3B0aW9uc1BhZ2UvU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3B0aW9uc1BhZ2UvY29tcG9uZW50cy9EcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3B0aW9uc1BhZ2UvY29tcG9uZW50cy9NeVRhYmxlQm9keS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9jb21wb25lbnRzL015VGFibGVIZWFkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL09wdGlvbnNQYWdlL2NvbXBvbmVudHMvTXlUYWJsZVRvb2xiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3B0aW9uc1BhZ2UvY29tcG9uZW50cy9TZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3B0aW9uc1BhZ2UvY29tcG9uZW50cy9UYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiQXBwIiwiRWwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhhc2giLCJlIiwiUG9wdXAiLCJPcHRpb25zIiwiZiIsInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwicHJpbWFyeSIsImJsdWUiLCJzZWNvbmRhcnkiLCJUaGVtZVByb3ZpZGVyIiwiQ3NzQmFzZWxpbmUiLCJTdG9yZSIsIkNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiZGF0YSIsInJvd3MiLCJzZWxlY3RlZCIsImRvbWFpbiIsInByb3BzIiwidXNlUmVkdWNlciIsImRpc3BhdGNoIiwidXNlRWZmZWN0IiwiY2hyb21lIiwic3RvcmFnZSIsInN5bmMiLCJnZXQiLCJPYmplY3QiLCJrZXlzIiwiY29uc29sZSIsImxvZyIsIk0iLCJ1c2VNZW1vIiwiXyIsIlByb3ZpZGVyIiwidmFsdWUiLCJjaGlsZHJlbiIsImRyYXdlcldpZHRoIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImRyYXdlciIsIndpZHRoIiwiZmxleFNocmluayIsIm92ZXJmbG93IiwiZHJhd2VyUGFwZXIiLCJ0b29sYmFyIiwibWl4aW5zIiwiYm94IiwiYmFja2dyb3VuZCIsImJveFNpemluZyIsInBvc2l0aW9uIiwiekluZGV4IiwidHJhbnNpdGlvbiIsInNoYWRvdyIsImJveFNoYWRvdyIsInR4dCIsInBhZGRpbmdMZWZ0IiwiYyIsInJlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwic2V0RmlsdGVyIiwiY3VycmVudERhdGEiLCJzZXRDdXJyZW50RGF0YSIsInVzZUNvbnRleHQiLCJzY3JvbGwiLCJ0YXJnZXQiLCJzY3JvbGxUb3AiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiU2VhcmNoQm94IiwiY2xhc3NOYW1lIiwiU2VhcmNoIiwiRGl2aWRlciIsInJlbmRlcmxpc3QiLCJmaWx0ZXIiLCJ2IiwiaW5jbHVkZXMiLCJtYXAiLCJpIiwiTGlzdEl0ZW0iLCJidXR0b24iLCJrZXkiLCJvbkNsaWNrIiwiTGlzdEl0ZW1UZXh0IiwibGlzdEJveCIsIkxpc3QiLCJkcmF3ZXJPcHRpb24iLCJ2YXJpYW50IiwiY2xhc3NlcyIsInBhcGVyIiwiYW5jaG9yIiwib25TY3JvbGwiLCJEcmF3ZXIiLCJNeVRhYmxlQm9keSIsImNyZWF0ZURhdGEiLCJzdHkiLCJkZWYiLCJtaWQiLCJpZCIsInZhbHVlcyIsInJlZHVjZSIsImFjYyIsImxlbmd0aCIsIkFycmF5IiwiaGFuZGxlQ2xpY2siLCJjb25jYXQiLCJyb3ciLCJoZWFkUm93cyIsIm51bWVyaWMiLCJsYWJlbCIsIkVuaGFuY2VkVGFibGVIZWFkIiwib3JkZXIiLCJzZXRPcmRlciIsIm9yZGVyQnkiLCJzZXRPcmRlckJ5IiwibnVtU2VsZWN0ZWQiLCJyb3dDb3VudCIsImhhbmRsZVNlbGVjdEFsbENsaWNrIiwiZXZlbnQiLCJjaGVja2VkIiwibmV3U2VsZWN0ZWRzIiwib25SZXF1ZXN0U29ydCIsInByb3BlcnR5IiwiaXNEZXNjIiwicmV2ZXJzZSIsImNyZWF0ZVNvcnRIYW5kbGVyIiwidXNlVG9vbGJhclN0eWxlcyIsImFic29sdXRlIiwiYm90dG9tIiwic3BhY2luZyIsInJpZ2h0Iiwic3BhY2VyIiwidG9wIiwiRW5oYW5jZWRUYWJsZVRvb2xiYXIiLCJib29sIiwic29tZSIsIm9iaiIsInJvd3MyIiwib2JqMiIsInYyIiwiZXZlcnkiLCJ1bmRlZmluZWQiLCJEYXRlIiwibm93IiwiSWNvbiIsInRpdGxlIiwiY2FsbGJhY2siLCJpY29uIiwiVG9vbHRpcCIsIkZhYiIsImNvbG9yIiwiQWRkSWNvbiIsIkRlbGV0ZUljb24iLCJTd2l0Y2giLCJvbkNoYW5nZSIsInJvb3QiLCJmbGV4R3JvdyIsInNlYXJjaCIsInNlYXJjaEljb24iLCJoZWlnaHQiLCJwb2ludGVyRXZlbnRzIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImlucHV0Um9vdCIsImlucHV0SW5wdXQiLCJwYWRkaW5nIiwiaW5wdXQiLCJtYXJnaW4iLCJTZWFyY2hBcHBCYXIiLCJ0cmltIiwibWFyZ2luQm90dG9tIiwidGFibGUiLCJtaW5XaWR0aCIsInRhYmxlV3JhcHBlciIsIm92ZXJmbG93WCIsInVzZVN0eWxlczIiLCJib3JkZXJCb3R0b21Db2xvciIsIkVuaGFuY2VkVGFibGUiLCJkYXRhQWxsIiwiUGFwZXIiLCJNeVRhYmxlVG9vbGJhciIsIlRhYmxlIiwic2l6ZSIsIk15VGFibGVIZWFkIiwiYXBwQmFyIiwibWFyZ2luTGVmdCIsImNvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJQZXJtYW5lbnREcmF3ZXJMZWZ0Iiwib25jZSIsInNldE9uY2UiLCJTZWxlY3Rpb24iLCJ0YWJzIiwiZ2V0U2VsZWN0ZWQiLCJ0YWIiLCJleGVjdXRlU2NyaXB0IiwiZmlsZSIsInJ1bkF0IiwiY2xvc2UiLCJjbGVhciIsImJpbmQiLCJjb2RlIiwic3RvcCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztB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REYsRUFLRWtOLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUxGLEUiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LmpzXCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlRWxlbWVudCBhcyBlLCBGcmFnbWVudCBhcyBmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBvcHVwIGZyb20gJy4vUG9wdXAnO1xuaW1wb3J0IE9wdGlvbnMgZnJvbSAnLi9PcHRpb25zJztcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICBjb25zdCBFbCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoID09PSAnI3BvcHVwJyA/IGUoUG9wdXApIDogT3B0aW9ucztcbiAgcmV0dXJuIGUoZiwgbnVsbCwgRWwpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuLy8gZShTdG9yZSwgbnVsbCwgT3B0aW9ucylcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCBhcyBmLCBjcmVhdGVFbGVtZW50IGFzIGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJ3R5cGVmYWNlLXJvYm90byc7XG5pbXBvcnQgT3B0aW9ucyBmcm9tICcuL09wdGlvbnNQYWdlL2luZGV4JztcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XG5pbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgYmx1ZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvYmx1ZSc7XG5pbXBvcnQgU3RvcmUgZnJvbSAnLi9PcHRpb25zUGFnZS9TdG9yZSc7XG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgcHJpbWFyeTogYmx1ZSxcbiAgICBzZWNvbmRhcnk6IGJsdWVcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGUoVGhlbWVQcm92aWRlciwgeyB0aGVtZSB9LCBlKENzc0Jhc2VsaW5lKSwgZShTdG9yZSwgbnVsbCwgZShPcHRpb25zKSkpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgRnJhZ21lbnQgYXMgZiwgY3JlYXRlRWxlbWVudCBhcyBlLCB1c2VSZWR1Y2VyLCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ2RhdGEnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGRhdGE6IGFjdGlvbi5kYXRhIH07XG4gICAgY2FzZSAncm93cyc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcm93czogYWN0aW9uLnJvd3MgfTtcbiAgICBjYXNlICdzZWxlY3RlZCc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc2VsZWN0ZWQ6IGFjdGlvbi5zZWxlY3RlZCB9O1xuICAgIGNhc2UgJ2RvbWFpbic6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZG9tYWluOiBhY3Rpb24uZG9tYWluIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuY29uc3QgU3RvcmUgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCB7XG4gICAgZGF0YToge30sXG4gICAgcm93czogW10sXG4gICAgc2VsZWN0ZWQ6IFtdLFxuICAgIGRvbWFpbjogJydcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChudWxsLCBkYXRhID0+IHtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ2RhdGEnLCBkYXRhIH0pO1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnZG9tYWluJywgZG9tYWluOiBPYmplY3Qua2V5cyhkYXRhKVswXSB9KTtcbiAgICAgIGNvbnNvbGUubG9nKCfojrflj5bmlbDmja4nLCBkYXRhKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IE0gPSB1c2VNZW1vKF8gPT4gZShDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBbc3RhdGUsIGRpc3BhdGNoXSB9LCBwcm9wcy5jaGlsZHJlbiksIFtzdGF0ZV0pO1xuICByZXR1cm4gTTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JlO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCwgRnJhZ21lbnQgYXMgZiwgY3JlYXRlRWxlbWVudCBhcyBlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgRHJhd2VyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RyYXdlcic7XG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcbmltcG9ydCBMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3QnO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9TZWFyY2gnO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4uL1N0b3JlJztcblxuY29uc3QgZHJhd2VyV2lkdGggPSAzMDA7XG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIGRyYXdlcjoge1xuICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcbiAgICBmbGV4U2hyaW5rOiAwLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICB9LFxuICBkcmF3ZXJQYXBlcjoge1xuICAgIHdpZHRoOiBkcmF3ZXJXaWR0aFxuICB9LFxuICB0b29sYmFyOiB0aGVtZS5taXhpbnMudG9vbGJhcixcbiAgYm94OiB7XG4gICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHpJbmRleDogMTAsXG4gICAgd2lkdGg6IGRyYXdlcldpZHRoIC0gNSxcbiAgICB0cmFuc2l0aW9uOiAnYm94LXNoYWRvdyAwLjNzIGVhc2UtaW4tb3V0J1xuICB9LFxuICBzaGFkb3c6IHtcbiAgICBib3hTaGFkb3c6ICcwcHggMnB4IDRweCAtMXB4ICMwMDAwMDAzMywgMHB4IDRweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xNCksIDBweCAxcHggMTBweCAwcHggcmdiYSgwLDAsMCwwLjEyKSdcbiAgfSxcbiAgdHh0OiB7XG4gICAgcGFkZGluZ0xlZnQ6IDhcbiAgfVxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBfID0+IHtcbiAgY29uc3QgYyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IFt0eHQsIHNldEZpbHRlcl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtjdXJyZW50RGF0YSwgc2V0Q3VycmVudERhdGFdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbeyBkYXRhIH0sIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XG4gIC8vIGNvbnNvbGUubG9nKDExLCB1c2VDb250ZXh0KENvbnRleHQpKTtcbiAgLy8gY29uc29sZS5sb2coJ+aKveWxiTonLCBkYXRhKTtcblxuICBjb25zdCBzY3JvbGwgPSBlID0+IHtcbiAgICBlLnRhcmdldC5zY3JvbGxUb3AgPiAzMCAmJiByZWYuY3VycmVudC5jbGFzc0xpc3QuYWRkKGMuc2hhZG93KTtcbiAgICBlLnRhcmdldC5zY3JvbGxUb3AgPCAzMCAmJiByZWYuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKGMuc2hhZG93KTtcbiAgfTtcblxuICBjb25zdCBTZWFyY2hCb3ggPSBlKCdkaXYnLCB7IGNsYXNzTmFtZTogYy5ib3gsIHJlZiB9LCBlKFNlYXJjaCwgeyBzZXRGaWx0ZXIgfSksIGUoRGl2aWRlcikpO1xuXG4gIGNvbnN0IHJlbmRlcmxpc3QgPSBPYmplY3Qua2V5cyhkYXRhKVxuICAgIC5maWx0ZXIodiA9PiB2LmluY2x1ZGVzKHR4dCkpXG4gICAgLm1hcCgodiwgaSkgPT5cbiAgICAgIGUoXG4gICAgICAgIExpc3RJdGVtLFxuICAgICAgICB7IGJ1dHRvbjogdHJ1ZSwga2V5OiBpLCBvbkNsaWNrOiBlID0+IGRpc3BhdGNoKHsgdHlwZTogJ2RvbWFpbicsIGRvbWFpbjogdiB9KSB9LFxuICAgICAgICBlKExpc3RJdGVtVGV4dCwgeyBwcmltYXJ5OiB2LCBjbGFzc05hbWU6IGMudHh0IH0pXG4gICAgICApXG4gICAgKTtcblxuICBjb25zdCBsaXN0Qm94ID0gZShMaXN0LCBudWxsLCByZW5kZXJsaXN0KTtcblxuICBjb25zdCBkcmF3ZXJPcHRpb24gPSB7XG4gICAgY2xhc3NOYW1lOiBjLmRyYXdlcixcbiAgICB2YXJpYW50OiAncGVybWFuZW50JyxcbiAgICBjbGFzc2VzOiB7IHBhcGVyOiBjLmRyYXdlclBhcGVyIH0sXG4gICAgYW5jaG9yOiAnbGVmdCcsXG4gICAgb25TY3JvbGw6IHNjcm9sbFxuICB9O1xuXG4gIHJldHVybiBlKERyYXdlciwgZHJhd2VyT3B0aW9uLCBTZWFyY2hCb3gsIGUoJ2RpdicsIHsgY2xhc3NOYW1lOiBjLnRvb2xiYXIgfSksIGxpc3RCb3gpO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCBhcyBmLCBjcmVhdGVFbGVtZW50IGFzIGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keSc7XG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3cnO1xuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGwnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3gnO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4uL1N0b3JlJztcblxuY29uc3QgTXlUYWJsZUJvZHkgPSBfID0+IHtcbiAgY29uc3QgW3sgZGF0YSwgc2VsZWN0ZWQsIHJvd3MsIGRvbWFpbiB9LCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xuICAvLyBjb25zdCBbbG9jYWxEYXRhLCBzZXRMb2NhbERhdGFdID0gdXNlU3RhdGUoZGF0YSk7XG4gIGNvbnN0IGNyZWF0ZURhdGEgPSAoc3R5LCBkZWYsIG1pZCwgaWQpID0+ICh7IHN0eSwgZGVmLCBtaWQsIGlkIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRhdGFbZG9tYWluXSkge1xuICAgICAgbGV0IHsgc3R5LCBkZWYsIG1pZCB9ID0gZGF0YVtkb21haW5dO1xuICAgICAgY29uc3QgaSA9IE9iamVjdC52YWx1ZXMoZGF0YVtkb21haW5dKS5yZWR1Y2UoKGFjYywgdikgPT4gKHYubGVuZ3RoID4gYWNjID8gKGFjYyA9IHYubGVuZ3RoKSA6IGFjYyksIDApO1xuICAgICAgY29uc3Qgcm93cyA9IFsuLi5BcnJheShpKV0ubWFwKCh2LCBpKSA9PiBjcmVhdGVEYXRhKHN0eVtpXSB8fCAnJywgZGVmW2ldIHx8ICcnLCBtaWRbaV0gfHwgJycsIGkpKTtcbiAgICAgIGNvbnNvbGUubG9nKHJvd3MsIDExMSk7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdyb3dzJywgcm93cyB9KTtcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ3NlbGVjdGVkJywgc2VsZWN0ZWQ6IFtdIH0pO1xuICAgIH07XG4gIH0sIFtkYXRhLCBkb21haW5dKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChlLCBpZCkgPT4ge1xuICAgIHNlbGVjdGVkLmluY2x1ZGVzKGlkKVxuICAgICAgPyBkaXNwYXRjaCh7IHR5cGU6ICdzZWxlY3RlZCcsIHNlbGVjdGVkOiBzZWxlY3RlZC5maWx0ZXIodiA9PiB2ICE9PSBpZCkgfSlcbiAgICAgIDogZGlzcGF0Y2goeyB0eXBlOiAnc2VsZWN0ZWQnLCBzZWxlY3RlZDogc2VsZWN0ZWQuY29uY2F0KGlkKSB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxUYWJsZUJvZHk+XG4gICAgICB7MSA/IChcbiAgICAgICAgcm93cy5tYXAoKHJvdywgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VGFibGVSb3cgaG92ZXIgb25DbGljaz17ZSA9PiBoYW5kbGVDbGljayhlLCByb3cuaWQpfSBrZXk9e2l9IHNlbGVjdGVkPXtzZWxlY3RlZC5pbmNsdWRlcyhyb3cuaWQpfT5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBwYWRkaW5nPSdjaGVja2JveCc+XG4gICAgICAgICAgICAgICAgPENoZWNrYm94IGNoZWNrZWQ9e3NlbGVjdGVkLmluY2x1ZGVzKHJvdy5pZCl9IC8+XG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIHNjb3BlPSdyb3cnPlxuICAgICAgICAgICAgICAgIHtyb3cuc3R5fVxuICAgICAgICAgICAgICAgIHsvKiA8SW5wdXRNZSB2YWw9e3Jvdy5zdHl9IG9uQ2hhbmdlPXtlZGl0KCdzdHknLCByb3cpfSByb3c9e3Jvd30gLz4gKi99XG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPSdjZW50ZXInPlxuICAgICAgICAgICAgICAgIHtyb3cuZGVmfVxuICAgICAgICAgICAgICAgIHsvKiA8SW5wdXRNZSB2YWw9e3Jvdy5kZWZ9IG9uQ2hhbmdlPXtlZGl0KCdkZWYnLCByb3cpfSByb3c9e3Jvd30gLz4gKi99XG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPSdjZW50ZXInPlxuICAgICAgICAgICAgICAgIHtyb3cubWlkfVxuICAgICAgICAgICAgICAgIHsvKiA8SW5wdXRNZSB2YWw9e3Jvdy5taWR9IG9uQ2hhbmdlPXtlZGl0KCdtaWQnLCByb3cpfSByb3c9e3Jvd30gLz4gKi99XG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgKSA6IChcbiAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgIDxUYWJsZUNlbGwgY29sU3Bhbj17NH0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBhbGlnbj0nY2VudGVyJyB2YXJpYW50PSdzdWJ0aXRsZTInIGNvbG9yPSd0ZXh0U2Vjb25kYXJ5Jz5cbiAgICAgICAgICAgICAg5rKh5pyJ5pWw5o2uXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgIDwvVGFibGVSb3c+XG4gICAgICApfVxuICAgIDwvVGFibGVCb2R5PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlUYWJsZUJvZHk7XG4vLyBzZWxlY3RlZC5pbmNsdWRlcyhpZCkgPyBzZXRTZWxlY3RlZChzZWxlY3RlZC5maWx0ZXIodiA9PiB2ICE9PSBpZCkpIDogc2V0U2VsZWN0ZWQoc2VsZWN0ZWQuY29uY2F0KGlkKSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIEZyYWdtZW50IGFzIGYsIGNyZWF0ZUVsZW1lbnQgYXMgZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkJztcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbCc7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3gnO1xuaW1wb3J0IFRhYmxlU29ydExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlU29ydExhYmVsJztcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuLi9TdG9yZSc7XG5cbmNvbnN0IGhlYWRSb3dzID0gW1xuICB7IGlkOiAnc3R5JywgbnVtZXJpYzogZmFsc2UsIGxhYmVsOiAn6L+Q55So5qC35byPJyB9LFxuICB7IGlkOiAnZGVmJywgbnVtZXJpYzogdHJ1ZSwgbGFiZWw6ICfkuI3ov5DnlKjmoLflvI8nIH0sXG4gIHsgaWQ6ICdtaWQnLCBudW1lcmljOiB0cnVlLCBsYWJlbDogJ+W8uuWItue/u+ivkScgfVxuXTtcblxuY29uc3QgRW5oYW5jZWRUYWJsZUhlYWQgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IFt7IHNlbGVjdGVkLCByb3dzLCBkYXRhIH0sIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XG5cbiAgY29uc3QgW29yZGVyLCBzZXRPcmRlcl0gPSB1c2VTdGF0ZSgnYXNjJyk7XG4gIGNvbnN0IFtvcmRlckJ5LCBzZXRPcmRlckJ5XSA9IHVzZVN0YXRlKCdzdHknKTtcbiAgY29uc3QgbnVtU2VsZWN0ZWQgPSBzZWxlY3RlZC5sZW5ndGg7XG4gIGNvbnN0IHJvd0NvdW50ID0gcm93cy5sZW5ndGg7XG5cbiAgY29uc3QgaGFuZGxlU2VsZWN0QWxsQ2xpY2sgPSBldmVudCA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jaGVja2VkKSB7XG4gICAgICBjb25zdCBuZXdTZWxlY3RlZHMgPSByb3dzLm1hcChyb3cgPT4gcm93LmlkKTtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ3NlbGVjdGVkJywgc2VsZWN0ZWQ6IG5ld1NlbGVjdGVkcyB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnc2VsZWN0ZWQnLCBzZWxlY3RlZDogW10gfSk7XG5cbiAgfTtcblxuICBjb25zdCBvblJlcXVlc3RTb3J0ID0gKGUsIHByb3BlcnR5KSA9PiB7XG4gICAgY29uc3QgaXNEZXNjID0gb3JkZXJCeSA9PT0gcHJvcGVydHkgJiYgb3JkZXIgPT09ICdkZXNjJztcbiAgICBzZXRPcmRlcihpc0Rlc2MgPyAnYXNjJyA6ICdkZXNjJyk7XG4gICAgc2V0T3JkZXJCeShwcm9wZXJ0eSk7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAncm93cycsIHJvd3M6IFsuLi5yb3dzXS5yZXZlcnNlKCkgfSk7XG4gIH07XG4gIGNvbnN0IGNyZWF0ZVNvcnRIYW5kbGVyID0gcHJvcGVydHkgPT4gZSA9PiBvblJlcXVlc3RTb3J0KGUsIHByb3BlcnR5KTtcblxuICByZXR1cm4gKFxuICAgIDxUYWJsZUhlYWQ+XG4gICAgICA8VGFibGVSb3c+XG4gICAgICAgIDxUYWJsZUNlbGwgcGFkZGluZz0nY2hlY2tib3gnPlxuICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZT17bnVtU2VsZWN0ZWQgPiAwICYmIG51bVNlbGVjdGVkIDwgcm93Q291bnR9XG4gICAgICAgICAgICBjaGVja2VkPXshIXJvd0NvdW50ICYmIG51bVNlbGVjdGVkID09PSByb3dDb3VudH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWxlY3RBbGxDbGlja31cbiAgICAgICAgICAvPlxuICAgICAgICA8L1RhYmxlQ2VsbD5cblxuICAgICAgICB7aGVhZFJvd3MubWFwKChyb3csIGkpID0+IChcbiAgICAgICAgICA8VGFibGVDZWxsIGtleT17aX0gYWxpZ249e3Jvdy5udW1lcmljID8gJ2NlbnRlcicgOiAnbGVmdCd9IHNvcnREaXJlY3Rpb249e29yZGVyQnkgPT09IHJvdy5pZCA/IG9yZGVyIDogZmFsc2V9PlxuICAgICAgICAgICAgPFRhYmxlU29ydExhYmVsIGFjdGl2ZT17b3JkZXJCeSA9PT0gcm93LmlkfSBkaXJlY3Rpb249e29yZGVyfSBvbkNsaWNrPXtjcmVhdGVTb3J0SGFuZGxlcihyb3cuaWQpfT5cbiAgICAgICAgICAgICAge3Jvdy5sYWJlbH1cbiAgICAgICAgICAgIDwvVGFibGVTb3J0TGFiZWw+XG4gICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICkpfVxuICAgICAgPC9UYWJsZVJvdz5cbiAgICA8L1RhYmxlSGVhZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVuaGFuY2VkVGFibGVIZWFkO1xuXG4vLyBjb25zdCB7IG9uU2VsZWN0QWxsQ2xpY2ssIG9yZGVyLCBvcmRlckJ5LCBudW1TZWxlY3RlZCwgcm93Q291bnQsIG9uUmVxdWVzdFNvcnQgfSA9IHByb3BzO1xuXG4vLyBjb25zdCBFbmhhbmNlZFRhYmxlSGVhZDIgPSBSZWFjdC5tZW1vKFxuLy8gICBwcm9wcyA9PiA8RW5oYW5jZWRUYWJsZUhlYWQgey4uLnByb3BzfSAvPixcbi8vICAgKHByZXZQcm9wcywgbmV4dFByb3BzKSA9PiB7XG4vLyAgICAgaWYgKFxuLy8gICAgICAgcHJldlByb3BzLm51bVNlbGVjdGVkID09PSBuZXh0UHJvcHMubnVtU2VsZWN0ZWQgJiZcbi8vICAgICAgIHByZXZQcm9wcy5vcmRlciA9PT0gbmV4dFByb3BzLm9yZGVyICYmXG4vLyAgICAgICBwcmV2UHJvcHMub3JkZXJCeSA9PT0gbmV4dFByb3BzLm9yZGVyQnkgJiZcbi8vICAgICAgIHByZXZQcm9wcy5yb3dDb3VudCA9PT0gbmV4dFByb3BzLnJvd0NvdW50XG4vLyAgICAgKVxuLy8gICAgICAgcmV0dXJuIHRydWU7XG4vLyAgICAgcmV0dXJuIGZhbHNlO1xuLy8gICB9XG4vLyApO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IGFzIGYsIGNyZWF0ZUVsZW1lbnQgYXMgZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sdGlwJztcbmltcG9ydCBGYWIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRmFiJztcbmltcG9ydCBBZGRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BZGQnO1xuaW1wb3J0IFN3aXRjaCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Td2l0Y2gnO1xuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0RlbGV0ZSc7XG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnLi4vU3RvcmUnO1xuXG5jb25zdCB1c2VUb29sYmFyU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBhYnNvbHV0ZToge1xuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIGJvdHRvbTogdGhlbWUuc3BhY2luZygxMCksXG4gICAgcmlnaHQ6IHRoZW1lLnNwYWNpbmcoNSksXG4gICAgekluZGV4OiAyMFxuICB9LFxuICBzcGFjZXI6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgcmlnaHQ6IDIwLFxuICAgIHpJbmRleDogMjBcbiAgfVxufSkpO1xuXG5jb25zdCBFbmhhbmNlZFRhYmxlVG9vbGJhciA9IHByb3BzID0+IHtcbiAgY29uc3QgYyA9IHVzZVRvb2xiYXJTdHlsZXMoKTtcbiAgY29uc3QgW3sgc2VsZWN0ZWQsIGRhdGEsIGRvbWFpbiwgcm93cyB9LCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xuXG4gIGNvbnN0IGNyZWF0ZURhdGEgPSAoc3R5LCBkZWYsIG1pZCwgaWQpID0+ICh7IHN0eSwgZGVmLCBtaWQsIGlkIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRhdGFbZG9tYWluXSkge1xuICAgICAgbGV0IGJvb2wgPSBPYmplY3QudmFsdWVzKGRhdGFbZG9tYWluXSkuc29tZSh2ID0+IHYubGVuZ3RoKTtcbiAgICAgIGlmICghYm9vbCkge1xuICAgICAgICBjb25zdCBvYmogPSB7IC4uLmRhdGEgfTtcbiAgICAgICAgZGVsZXRlIG9ialtkb21haW5dO1xuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdkYXRhJywgZGF0YTogb2JqIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW3Jvd3NdKTtcblxuICBjb25zdCByZW1vdmUgPSBfID0+IHtcbiAgICBsZXQgcm93czIgPSByb3dzLmZpbHRlcih2ID0+ICFzZWxlY3RlZC5pbmNsdWRlcyh2LmlkKSk7XG5cbiAgICBsZXQgb2JqMiA9IFsnc3R5JywgJ2RlZicsICdtaWQnXS5yZWR1Y2UoKG9iaiwgdikgPT4ge1xuICAgICAgcmV0dXJuIHsgLi4ub2JqLCBbdl06IHJvd3MyLnJlZHVjZSgoYWNjLCB2MikgPT4gKHYyW3ZdID8gYWNjLmNvbmNhdCh2Mlt2XSkgOiBhY2MpLCBbXSkgfTtcbiAgICB9LCB7fSk7XG5cbiAgICBsZXQgb2JqID0geyAuLi5kYXRhLCBbZG9tYWluXTogb2JqMiB9O1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ2RhdGEnLCBkYXRhOiBvYmogfSk7XG4gIH07XG5cbiAgY29uc3QgYWRkID0gXyA9PiB7XG4gICAgaWYgKHJvd3MuZXZlcnkodiA9PiB2LnN0eSB8fCB2LmRlZiB8fCB2Lm1pZCkpIHtcbiAgICAgIGNvbnN0IHJvdyA9IGNyZWF0ZURhdGEodW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgRGF0ZS5ub3coKSk7XG4gICAgICBjb25zb2xlLmxvZyhyb3cpO1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAncm93cycsIHJvd3M6IHJvd3MuY29uY2F0KHJvdykgfSk7XG4gICAgICBjb25zb2xlLmxvZyhyb3dzKTtcblxuICAgICAgbGV0IG9iajIgPSBbJ3N0eScsICdkZWYnLCAnbWlkJ10ucmVkdWNlKChvYmosIHYpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgLi4ub2JqLCBbdl06IHJvd3MucmVkdWNlKChhY2MsIHYyKSA9PiAodjJbdl0gPyBhY2MuY29uY2F0KHYyW3ZdKSA6IGFjYyksIFtdKSB9O1xuICAgICAgfSwge30pO1xuXG4gICAgICBsZXQgb2JqID0geyAuLi5kYXRhLCBbZG9tYWluXTogb2JqMiB9O1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBJY29uID0gKHRpdGxlLCBjYWxsYmFjaywgaWNvbikgPT4ge1xuICAgIHJldHVybiBlKFRvb2x0aXAsIHsgdGl0bGUgfSwgZShGYWIsIHsgY29sb3I6ICdwcmltYXJ5JywgY2xhc3NOYW1lOiBjLmFic29sdXRlLCBvbkNsaWNrOiBjYWxsYmFjayB9LCBlKGljb24pKSk7XG4gIH07XG5cbiAgcmV0dXJuIGUoXG4gICAgZixcbiAgICBudWxsLFxuICAgIHNlbGVjdGVkLmxlbmd0aCA9PT0gMCA/IEljb24oJ0FkZCcsIGFkZCwgQWRkSWNvbikgOiBJY29uKCdEZWxldGUnLCByZW1vdmUsIERlbGV0ZUljb24pLFxuICAgIGUoU3dpdGNoLCB7XG4gICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgY2hlY2tlZDogdHJ1ZSxcbiAgICAgIG9uQ2hhbmdlOiBfID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coMTApO1xuICAgICAgfSxcbiAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgY2xhc3NOYW1lOiBjLnNwYWNlclxuICAgIH0pXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFbmhhbmNlZFRhYmxlVG9vbGJhcjtcblxuLyogICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7bnVtU2VsZWN0ZWQgPT09IDAgPyAoXG4gICAgICAgIDxUb29sdGlwIHRpdGxlPSdBZGQnPlxuICAgICAgICAgIDxGYWIgY29sb3I9J3ByaW1hcnknIGNsYXNzTmFtZT17Y2xhc3Nlcy5hYnNvbHV0ZX0gb25DbGljaz17YWRkfT5cbiAgICAgICAgICAgIDxBZGRJY29uIC8+XG4gICAgICAgICAgPC9GYWI+XG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICkgOiAoXG4gICAgICAgIDxUb29sdGlwIHRpdGxlPSdEZWxldGUnPlxuICAgICAgICAgIDxGYWIgY29sb3I9J3ByaW1hcnknIGNsYXNzTmFtZT17Y2xhc3Nlcy5hYnNvbHV0ZX0gb25DbGljaz17cmVtb3ZlfT5cbiAgICAgICAgICAgIDxEZWxldGVJY29uIC8+XG4gICAgICAgICAgPC9GYWI+XG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICl9XG5cbiAgICAgIDxTd2l0Y2hcbiAgICAgICAgY29sb3I9J3ByaW1hcnknXG4gICAgICAgIGNoZWNrZWQ9eyExfVxuICAgICAgICBvbkNoYW5nZT17XyA9PiBzZXRUb2dnbGUoZCA9PiAhZCl9XG4gICAgICAgIHZhbHVlPSdjaGVja2VkQSdcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnNwYWNlcn1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7ICovXG5cbi8vIGNvbnN0IEVuaGFuY2VkVGFibGVUb29sYmFyMiA9IFJlYWN0Lm1lbW8oXG4vLyAgIHByb3BzID0+IDxFbmhhbmNlZFRhYmxlVG9vbGJhciB7Li4ucHJvcHN9IC8+LFxuLy8gICAocHJldlByb3BzLCBuZXh0UHJvcHMpID0+IHtcbi8vICAgICBpZiAocHJldlByb3BzLm51bVNlbGVjdGVkID09PSBuZXh0UHJvcHMubnVtU2VsZWN0ZWQgJiYgcHJldlByb3BzLnRvZ2dsZSA9PT0gbmV4dFByb3BzLnRvZ2dsZSkgcmV0dXJuIHRydWU7XG4vLyAgICAgcmV0dXJuIGZhbHNlO1xuLy8gICB9XG4vLyApO1xue1xuICAvKiA8RW5oYW5jZWRUYWJsZVRvb2xiYXIgbnVtU2VsZWN0ZWQ9e3NlbGVjdGVkLmxlbmd0aH0gcmVtb3ZlPXtyZW1vdmV9IGFkZD17YWRkfSB0b2dnbGU9e3RvZ2dsZX0gc2V0VG9nZ2xlPXtzZXRUb2dnbGV9IC8+OyAqL1xufVxuXG4vLyBleHBvcnQgZGVmYXVsdCBfID0+IHtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8RW5oYW5jZWRUYWJsZVRvb2xiYXIyXG4vLyAgICAgICBudW1TZWxlY3RlZD17c2VsZWN0ZWQubGVuZ3RofVxuLy8gICAgICAgcmVtb3ZlPXtyZW1vdmV9XG4vLyAgICAgICBhZGQ9e2FkZH1cbi8vICAgICAgIHRvZ2dsZT17dG9nZ2xlfVxuLy8gICAgICAgc2V0VG9nZ2xlPXtzZXRUb2dnbGV9XG4vLyAgICAgLz5cbi8vICAgKTtcbi8vIH07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoJztcbmltcG9ydCBJbnB1dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dCc7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgZmxleEdyb3c6IDFcbiAgfSxcbiAgc2VhcmNoOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgfSxcbiAgc2VhcmNoSWNvbjoge1xuICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDMuNSksXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcbiAgfSxcbiAgaW5wdXRSb290OiB7XG4gICAgY29sb3I6ICdpbmhlcml0J1xuICB9LFxuICBpbnB1dElucHV0OiB7XG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxLCAxLCAxLCA1KSxcbiAgICB3aWR0aDogJzEwMCUnXG4gIH0sXG4gIGlucHV0OiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpXG4gIH1cbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoQXBwQmFyKHsgc2V0RmlsdGVyIH0pIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPFRvb2xiYXIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNofT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoSWNvbn0+XG4gICAgICAgICAgPFNlYXJjaEljb24gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdTZWFyY2jigKYnXG4gICAgICAgICAgY2xhc3Nlcz17e1xuICAgICAgICAgICAgcm9vdDogY2xhc3Nlcy5pbnB1dFJvb3QsXG4gICAgICAgICAgICBpbnB1dDogY2xhc3Nlcy5pbnB1dElucHV0XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRGaWx0ZXIoZS50YXJnZXQudmFsdWUudHJpbSgpKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvVG9vbGJhcj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYsIEZyYWdtZW50IGFzIGYsIGNyZWF0ZUVsZW1lbnQgYXMgZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBUYWJsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZSc7XG5cbmltcG9ydCBNeVRhYmxlSGVhZCBmcm9tICcuL015VGFibGVIZWFkJztcbmltcG9ydCBNeVRhYmxlVG9vbGJhciBmcm9tICcuL015VGFibGVUb29sYmFyJztcbmltcG9ydCBNeVRhYmxlQm9keSBmcm9tICcuL015VGFibGVCb2R5JztcblxuY29uc3QgdXNlVG9vbGJhclN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgYWJzb2x1dGU6IHtcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICBib3R0b206IHRoZW1lLnNwYWNpbmcoMTApLFxuICAgIHJpZ2h0OiB0aGVtZS5zcGFjaW5nKDUpLFxuICAgIHpJbmRleDogMjBcbiAgfSxcbiAgc3BhY2VyOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIHJpZ2h0OiAyMCxcbiAgICB6SW5kZXg6IDIwXG4gIH1cbn0pKTtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgd2lkdGg6ICcxMDAlJ1xuICB9LFxuICBwYXBlcjoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpXG4gIH0sXG4gIHRhYmxlOiB7XG4gICAgbWluV2lkdGg6IDc1MFxuICB9LFxuICB0YWJsZVdyYXBwZXI6IHtcbiAgICBvdmVyZmxvd1g6ICdhdXRvJ1xuICB9XG59KSk7XG5cbmNvbnN0IHVzZVN0eWxlczIgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICAnJjo6YmVmb3JlJzoge1xuICAgICAgYm9yZGVyQm90dG9tQ29sb3I6ICcjMDAwMDAwMDAnXG4gICAgfSxcbiAgICAnJjpob3Zlcjpub3QoLk11aS1kaXNhYmxlZCk6OmJlZm9yZSc6IHtcbiAgICAgIGJvcmRlckJvdHRvbUNvbG9yOiAnIzAwMDAwMDAwJ1xuICAgIH1cbiAgfVxufSkpO1xuXG5jb25zdCBjcmVhdGVEYXRhID0gKHN0eSwgZGVmLCBtaWQsIGlkKSA9PiAoeyBzdHksIGRlZiwgbWlkLCBpZCB9KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRW5oYW5jZWRUYWJsZSh7IGRvbWFpbiwgZGF0YTogZGF0YUFsbCB9KSB7XG4gIGNvbnN0IGMgPSB1c2VUb29sYmFyU3R5bGVzKCk7XG4gIHJldHVybiBlKFxuICAgIFBhcGVyLFxuICAgIHsgY2xhc3NOYW1lOiBjLnBhcGVyIH0sXG4gICAgZShNeVRhYmxlVG9vbGJhciksXG4gICAgZShcbiAgICAgICdkaXYnLFxuICAgICAgeyBjbGFzc05hbWU6IGMudGFibGVXcmFwcGVyIH0sXG4gICAgICBlKFRhYmxlLCB7IGNsYXNzTmFtZTogYy50YWJsZSwgc2l6ZTogJ21lZGl1bScgfSwgZShNeVRhYmxlSGVhZCksIGUoTXlUYWJsZUJvZHkpKVxuICAgIClcbiAgKTtcbn1cbntcbiAgLyogPFRhYmxlIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJsZX0gc2l6ZT0nbWVkaXVtJz4gPC9UYWJsZT4gKi9cbn1cbi8qIDxFbmhhbmNlZFRhYmxlSGVhZDJcbm51bVNlbGVjdGVkPXtzZWxlY3RlZC5sZW5ndGh9XG5vcmRlcj17b3JkZXJ9XG5vcmRlckJ5PXtvcmRlckJ5fVxub25TZWxlY3RBbGxDbGljaz17aGFuZGxlU2VsZWN0QWxsQ2xpY2t9XG5vblJlcXVlc3RTb3J0PXtoYW5kbGVSZXF1ZXN0U29ydH1cbnJvd0NvdW50PXtkYXRhLmxlbmd0aH1cbi8+ICovXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0LCBGcmFnbWVudCBhcyBmLCBjcmVhdGVFbGVtZW50IGFzIGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBUYWJsZSBmcm9tICcuL2NvbXBvbmVudHMvVGFibGUnO1xuaW1wb3J0IERyYXdlciBmcm9tICcuL2NvbXBvbmVudHMvRHJhd2VyJztcblxuY29uc3QgZHJhd2VyV2lkdGggPSAzMDA7XG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnZmxleCdcbiAgfSxcbiAgYXBwQmFyOiB7XG4gICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke2RyYXdlcldpZHRofXB4KWAsXG4gICAgbWFyZ2luTGVmdDogZHJhd2VyV2lkdGhcbiAgfSxcblxuICBjb250ZW50OiB7XG4gICAgZmxleEdyb3c6IDEsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQuZGVmYXVsdFxuICB9XG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBlcm1hbmVudERyYXdlckxlZnQoKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW2N1cnJlbnREYXRhLCBzZXRDdXJyZW50RGF0YV0gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgLy8gY29uc3QgQ2hhbmdlID0gZG9tYWluID0+IHtcbiAgLy8gICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChudWxsLCBkID0+IHtcbiAgLy8gICAgIHNldEN1cnJlbnREYXRhKHsgZG9tYWluLCBkYXRhOiBkIH0pO1xuICAvLyAgIH0pO1xuICAvLyB9O1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgQ2hhbmdlKCk7XG4gIC8vICAgY2hyb21lLnN0b3JhZ2Uub25DaGFuZ2VkLmFkZExpc3RlbmVyKChjaGFuZ2VzLCBhcmVhTmFtZSkgPT4ge1xuICAvLyAgICAgQ2hhbmdlKC4uLk9iamVjdC5rZXlzKGNoYW5nZXMpKTtcbiAgLy8gICB9KTtcbiAgLy8gfSwgW10pO1xuXG4gIC8vIGNvbnN0IGdldEN1cnJlbnREYXRhID0gZG9tYWluID0+IHtcbiAgLy8gICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChudWxsLCBkID0+IHtcbiAgLy8gICAgIHNldEN1cnJlbnREYXRhKHsgZG9tYWluLCBkYXRhOiBkIH0pO1xuICAvLyAgIH0pO1xuICAvLyB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8RHJhd2VyIC8+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cbiAgICAgICAgPFRhYmxlIHsuLi5jdXJyZW50RGF0YX0gLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIHBhZGRpbmc6IDEwLFxuICAgIHdpZHRoOiAxNTBcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgbWFyZ2luQm90dG9tOiA4XG4gIH1cbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgXyA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW29uY2UsIHNldE9uY2VdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgU2VsZWN0aW9uID0gZSA9PiB7XG4gICAgY2hyb21lLnRhYnMuZ2V0U2VsZWN0ZWQodGFiID0+IHtcbiAgICAgIGNocm9tZS50YWJzLmV4ZWN1dGVTY3JpcHQodGFiLmlkLCB7XG4gICAgICAgIGZpbGU6ICdzZWxlY3Rvci5qcycsXG4gICAgICAgIHJ1bkF0OiAnZG9jdW1lbnRfc3RhcnQnXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBzZXRPbmNlKGZhbHNlKTtcbiAgICB3aW5kb3cuY2xvc2UoKTtcbiAgfTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBTZWxlY3Rpb24oKTtcbiAgfSwgW10pO1xuICBjb25zdCBjbGVhciA9ICgpID0+IHtcbiAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmNsZWFyKGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSwgJ0NsZWFyJykpO1xuXG4gICAgY2hyb21lLnRhYnMuZ2V0U2VsZWN0ZWQodGFiID0+IHtcbiAgICAgIGNocm9tZS50YWJzLmV4ZWN1dGVTY3JpcHQodGFiLmlkLCB7XG4gICAgICAgIGNvZGU6IGB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7YCxcbiAgICAgICAgcnVuQXQ6ICdkb2N1bWVudF9zdGFydCdcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuICBjb25zdCBzdG9wID0gKCkgPT4ge1xuICAgIC8vIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sIHRhYiA9PiB7XG4gICAgLy8gICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWJbMF0uaWQsICdOT1RSQU5TTEFURScpO1xuICAgIC8vIH0pO1xuICAgIC8vIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sIGZ1bmN0aW9uKHRhYnMpIHtcbiAgICAvLyAgIGNocm9tZS50YWJzLnJlbG9hZCh0YWJzWzBdLmlkKTtcbiAgICAvLyB9KTtcbiAgICAvLyBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCBmdW5jdGlvbih0YWJzKSB7XG4gICAgLy8gICBjaHJvbWUudGFicy51cGRhdGUodGFic1swXS5pZCwgeyB1cmw6IHRhYnNbMF0udXJsIH0pO1xuICAgIC8vIH0pO1xuICAgIC8vIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sIGZ1bmN0aW9uKGFycmF5T2ZUYWJzKSB7XG4gICAgLy8gICB2YXIgY29kZSA9ICd3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7JztcbiAgICAvLyAgIGNocm9tZS50YWJzLmV4ZWN1dGVTY3JpcHQoYXJyYXlPZlRhYnNbMF0uaWQsIHsgY29kZTogY29kZSB9KTtcbiAgICAvLyB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPEJ1dHRvblxuICAgICAgICBjb2xvcj0ncHJpbWFyeSdcbiAgICAgICAgdmFyaWFudD0nY29udGFpbmVkJ1xuICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgb25DbGljaz17b25jZSA/IFNlbGVjdGlvbiA6IG51bGx9XG4gICAgICA+XG4gICAgICAgIOe/u+ivkVxuICAgICAgPC9CdXR0b24+XG4gICAgICA8QnV0dG9uIGNvbG9yPSdzZWNvbmRhcnknIHZhcmlhbnQ9J2NvbnRhaW5lZCcgZnVsbFdpZHRoIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IG9uQ2xpY2s9e3N0b3B9PlxuICAgICAgICDkuI3nv7vor5FcbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPEJ1dHRvbiBjb2xvcj0nc2Vjb25kYXJ5JyB2YXJpYW50PSdjb250YWluZWQnIGZ1bGxXaWR0aCBvbkNsaWNrPXtjbGVhcn0+XG4gICAgICAgIOa4heepulxuICAgICAgPC9CdXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwJztcblxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCB7IGNyZWF0ZU11aVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBibHVlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9ibHVlJztcblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBwcmltYXJ5OiBibHVlXG4gIH1cbn0pO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgPEFwcCAvPlxuICA8L1RoZW1lUHJvdmlkZXI+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==