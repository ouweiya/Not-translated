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


 // import Button from '@material-ui/core/Button';

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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


/* harmony default export */ __webpack_exports__["default"] = (function (_) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      Data = _useState2[0],
      setData = _useState2[1];

  var Change = function Change() {
    chrome.storage.sync.get(null, function (d) {
      console.log('option:', d);
      setData(d);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Change();
    chrome.storage.onChanged.addListener(function (changes, areaName) {
      Change();
    });
  }, []);

  var List = function List() {
    var arr = [];

    for (var i in Data) {
      arr.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: i
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          color: 'green',
          margin: '0 16px'
        }
      }, i), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          background: '#87ff79',
          padding: '0 10px'
        }
      }, JSON.stringify(Data[i], null, '  ')))));
    }

    return arr;
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(List, null));
});

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

  var stop = function stop() {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function (tab) {
      chrome.tabs.sendMessage(tab[0].id, 'NOTRANSLATE');
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL09wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFwcCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaGFzaCIsIl8iLCJ1c2VTdGF0ZSIsIkRhdGEiLCJzZXREYXRhIiwiQ2hhbmdlIiwiY2hyb21lIiwic3RvcmFnZSIsInN5bmMiLCJnZXQiLCJkIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsIm9uQ2hhbmdlZCIsImFkZExpc3RlbmVyIiwiY2hhbmdlcyIsImFyZWFOYW1lIiwiTGlzdCIsImFyciIsImkiLCJwdXNoIiwiY29sb3IiLCJtYXJnaW4iLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290Iiwid2lkdGgiLCJidXR0b24iLCJtYXJnaW5Cb3R0b20iLCJjbGFzc2VzIiwib25jZSIsInNldE9uY2UiLCJTZWxlY3Rpb24iLCJlIiwidGFicyIsImdldFNlbGVjdGVkIiwidGFiIiwiZXhlY3V0ZVNjcmlwdCIsImlkIiwiZmlsZSIsInJ1bkF0IiwiY2xvc2UiLCJjbGVhciIsImJpbmQiLCJjb2RlIiwic3RvcCIsInF1ZXJ5IiwiYWN0aXZlIiwiY3VycmVudFdpbmRvdyIsInNlbmRNZXNzYWdlIiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwicHJpbWFyeSIsImJsdWUiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9C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QUF3RCxhQUFTLEVBQUVILE9BQU8sQ0FBQ0YsTUFBM0U7QUFBbUYsV0FBTyxFQUFFa0I7QUFBNUYsMEJBVkYsRUFhRSwyREFBQyxnRUFBRDtBQUFRLFNBQUssRUFBQyxXQUFkO0FBQTBCLFdBQU8sRUFBQyxXQUFsQztBQUE4QyxhQUFTLE1BQXZEO0FBQXdELFdBQU8sRUFBRUg7QUFBakUsb0JBYkYsQ0FERjtBQW1CRCxDQXJERCxFOzs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNbEIsS0FBSyxHQUFHMEIsK0VBQWMsQ0FBQztBQUMzQkMsU0FBTyxFQUFFO0FBQ1BDLFdBQU8sRUFBRUMsb0VBQUlBO0FBRE47QUFEa0IsQ0FBRCxDQUE1QjtBQU1BQyxnREFBUSxDQUFDQyxNQUFULENBQ0UsMkRBQUMsaUVBQUQ7QUFBZSxPQUFLLEVBQUUvQjtBQUF0QixHQUNFLDJEQUFDLHFFQUFELE9BREYsRUFFRSwyREFBQyx1REFBRCxPQUZGLENBREYsRUFLRWdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUxGLEUiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LmpzXCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBvcHVwIGZyb20gJy4vUG9wdXAnO1xuaW1wb3J0IE9wdGlvbnMgZnJvbSAnLi9PcHRpb25zJztcblxuLy8gaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gIHJldHVybiA8Pnt3aW5kb3cubG9jYXRpb24uaGFzaCA9PT0gJyNwb3B1cCcgPyA8UG9wdXAgLz4gOiA8T3B0aW9ucyAvPn08Lz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgXyA9PiB7XG4gIGNvbnN0IFtEYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBDaGFuZ2UgPSAoKSA9PiB7XG4gICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQobnVsbCwgZCA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnb3B0aW9uOicsIGQpO1xuICAgICAgc2V0RGF0YShkKTtcbiAgICB9KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIENoYW5nZSgpO1xuICAgIGNocm9tZS5zdG9yYWdlLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcigoY2hhbmdlcywgYXJlYU5hbWUpID0+IHtcbiAgICAgIENoYW5nZSgpO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgTGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCBhcnIgPSBbXTtcbiAgICBmb3IgKGxldCBpIGluIERhdGEpIHtcbiAgICAgIGFyci5wdXNoKFxuICAgICAgICA8ZGl2IGtleT17aX0+XG4gICAgICAgICAgPGgzPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICdncmVlbicsIG1hcmdpbjogJzAgMTZweCcgfX0+e2l9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgYmFja2dyb3VuZDogJyM4N2ZmNzknLCBwYWRkaW5nOiAnMCAxMHB4JyB9fT5cbiAgICAgICAgICAgICAge0pTT04uc3RyaW5naWZ5KERhdGFbaV0sIG51bGwsICcgICcpfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMaXN0IC8+XG4gICAgPC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgcGFkZGluZzogMTAsXG4gICAgd2lkdGg6IDE1MFxuICB9LFxuICBidXR0b246IHtcbiAgICBtYXJnaW5Cb3R0b206IDhcbiAgfVxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBfID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbb25jZSwgc2V0T25jZV0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBTZWxlY3Rpb24gPSBlID0+IHtcbiAgICBjaHJvbWUudGFicy5nZXRTZWxlY3RlZCh0YWIgPT4ge1xuICAgICAgY2hyb21lLnRhYnMuZXhlY3V0ZVNjcmlwdCh0YWIuaWQsIHtcbiAgICAgICAgZmlsZTogJ3NlbGVjdG9yLmpzJyxcbiAgICAgICAgcnVuQXQ6ICdkb2N1bWVudF9zdGFydCdcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHNldE9uY2UoZmFsc2UpO1xuICAgIHdpbmRvdy5jbG9zZSgpO1xuICB9O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFNlbGVjdGlvbigpO1xuICB9LCBbXSk7XG4gIGNvbnN0IGNsZWFyID0gKCkgPT4ge1xuICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuY2xlYXIoY29uc29sZS5sb2cuYmluZChjb25zb2xlLCAnQ2xlYXInKSk7XG5cbiAgICBjaHJvbWUudGFicy5nZXRTZWxlY3RlZCh0YWIgPT4ge1xuICAgICAgY2hyb21lLnRhYnMuZXhlY3V0ZVNjcmlwdCh0YWIuaWQsIHtcbiAgICAgICAgY29kZTogYHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtgLFxuICAgICAgICBydW5BdDogJ2RvY3VtZW50X3N0YXJ0J1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgfTtcbiAgY29uc3Qgc3RvcCA9ICgpID0+IHtcbiAgICBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCB0YWIgPT4ge1xuICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiWzBdLmlkLCAnTk9UUkFOU0xBVEUnKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPEJ1dHRvblxuICAgICAgICBjb2xvcj0ncHJpbWFyeSdcbiAgICAgICAgdmFyaWFudD0nY29udGFpbmVkJ1xuICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgb25DbGljaz17b25jZSA/IFNlbGVjdGlvbiA6IG51bGx9XG4gICAgICA+XG4gICAgICAgIOe/u+ivkVxuICAgICAgPC9CdXR0b24+XG4gICAgICA8QnV0dG9uIGNvbG9yPSdzZWNvbmRhcnknIHZhcmlhbnQ9J2NvbnRhaW5lZCcgZnVsbFdpZHRoIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IG9uQ2xpY2s9e3N0b3B9PlxuICAgICAgICDkuI3nv7vor5FcbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPEJ1dHRvbiBjb2xvcj0nc2Vjb25kYXJ5JyB2YXJpYW50PSdjb250YWluZWQnIGZ1bGxXaWR0aCBvbkNsaWNrPXtjbGVhcn0+XG4gICAgICAgIOa4heepulxuICAgICAgPC9CdXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwJztcblxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCB7IGNyZWF0ZU11aVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBibHVlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9ibHVlJztcblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBwcmltYXJ5OiBibHVlXG4gIH1cbn0pO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgPEFwcCAvPlxuICA8L1RoZW1lUHJvdmlkZXI+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==