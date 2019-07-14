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
  }, []);
  chrome.storage.onChanged.addListener(function (changes, areaName) {
    Change();
  });

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
      }, Data[i].join()))));
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

  var clear = function clear() {
    chrome.storage.sync.clear(console.log.bind(console, 'Clear'));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL09wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFwcCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaGFzaCIsIl8iLCJ1c2VTdGF0ZSIsIkRhdGEiLCJzZXREYXRhIiwiQ2hhbmdlIiwiY2hyb21lIiwic3RvcmFnZSIsInN5bmMiLCJnZXQiLCJkIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsIm9uQ2hhbmdlZCIsImFkZExpc3RlbmVyIiwiY2hhbmdlcyIsImFyZWFOYW1lIiwiTGlzdCIsImFyciIsImkiLCJwdXNoIiwiY29sb3IiLCJtYXJnaW4iLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsImpvaW4iLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290Iiwid2lkdGgiLCJidXR0b24iLCJtYXJnaW5Cb3R0b20iLCJjbGFzc2VzIiwib25jZSIsInNldE9uY2UiLCJTZWxlY3Rpb24iLCJlIiwidGFicyIsImdldFNlbGVjdGVkIiwidGFiIiwiZXhlY3V0ZVNjcmlwdCIsImlkIiwiZmlsZSIsInJ1bkF0IiwiY2xvc2UiLCJjbGVhciIsImJpbmQiLCJzdG9wIiwicXVlcnkiLCJhY3RpdmUiLCJjdXJyZW50V2luZG93Iiwic2VuZE1lc3NhZ2UiLCJjcmVhdGVNdWlUaGVtZSIsInBhbGV0dGUiLCJwcmltYXJ5IiwiYmx1ZSIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFD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SUFBTWxCLEtBQUssR0FBR3lCLCtFQUFjLENBQUM7QUFDM0JDLFNBQU8sRUFBRTtBQUNQQyxXQUFPLEVBQUVDLG9FQUFJQTtBQUROO0FBRGtCLENBQUQsQ0FBNUI7QUFNQUMsZ0RBQVEsQ0FBQ0MsTUFBVCxDQUNFLDJEQUFDLGlFQUFEO0FBQWUsT0FBSyxFQUFFOUI7QUFBdEIsR0FDRSwyREFBQyxxRUFBRCxPQURGLEVBRUUsMkRBQUMsdURBQUQsT0FGRixDQURGLEVBS0UrQixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FMRixFIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9pbmRleC5qc1wiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQb3B1cCBmcm9tICcuL1BvcHVwJztcbmltcG9ydCBPcHRpb25zIGZyb20gJy4vT3B0aW9ucyc7XG5cbi8vIGltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICByZXR1cm4gPD57d2luZG93LmxvY2F0aW9uLmhhc2ggPT09ICcjcG9wdXAnID8gPFBvcHVwIC8+IDogPE9wdGlvbnMgLz59PC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IF8gPT4ge1xuICBjb25zdCBbRGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgQ2hhbmdlID0gKCkgPT4ge1xuICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KG51bGwsIGQgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ29wdGlvbjonLCBkKTtcbiAgICAgIHNldERhdGEoZCk7XG4gICAgfSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBDaGFuZ2UoKTtcbiAgfSwgW10pO1xuXG4gIGNocm9tZS5zdG9yYWdlLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcigoY2hhbmdlcywgYXJlYU5hbWUpID0+IHtcbiAgICBDaGFuZ2UoKTtcbiAgfSk7XG5cbiAgY29uc3QgTGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCBhcnIgPSBbXTtcbiAgICBmb3IgKGxldCBpIGluIERhdGEpIHtcbiAgICAgIGFyci5wdXNoKFxuICAgICAgICA8ZGl2IGtleT17aX0+XG4gICAgICAgICAgPGgzPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICdncmVlbicsIG1hcmdpbjogJzAgMTZweCcgfX0+e2l9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgYmFja2dyb3VuZDogJyM4N2ZmNzknLCBwYWRkaW5nOiAnMCAxMHB4JyB9fT57RGF0YVtpXS5qb2luKCl9PC9zcGFuPlxuICAgICAgICAgIDwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMaXN0IC8+XG4gICAgPC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIHBhZGRpbmc6IDEwLFxuICAgIHdpZHRoOiAxNTBcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgbWFyZ2luQm90dG9tOiA4XG4gIH1cbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgXyA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW29uY2UsIHNldE9uY2VdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgU2VsZWN0aW9uID0gZSA9PiB7XG4gICAgY2hyb21lLnRhYnMuZ2V0U2VsZWN0ZWQodGFiID0+IHtcbiAgICAgIGNocm9tZS50YWJzLmV4ZWN1dGVTY3JpcHQodGFiLmlkLCB7XG4gICAgICAgIGZpbGU6ICdzZWxlY3Rvci5qcycsXG4gICAgICAgIHJ1bkF0OiAnZG9jdW1lbnRfc3RhcnQnXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBzZXRPbmNlKGZhbHNlKTtcbiAgICB3aW5kb3cuY2xvc2UoKTtcbiAgfTtcblxuICBjb25zdCBjbGVhciA9ICgpID0+IHtcbiAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmNsZWFyKGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSwgJ0NsZWFyJykpO1xuICB9O1xuICBjb25zdCBzdG9wID0gKCkgPT4ge1xuICAgIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sIHRhYiA9PiB7XG4gICAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWJbMF0uaWQsICdOT1RSQU5TTEFURScpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIGNvbG9yPSdwcmltYXJ5J1xuICAgICAgICB2YXJpYW50PSdjb250YWluZWQnXG4gICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxuICAgICAgICBvbkNsaWNrPXtvbmNlID8gU2VsZWN0aW9uIDogbnVsbH1cbiAgICAgID5cbiAgICAgICAg57+76K+RXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgY29sb3I9J3NlY29uZGFyeSdcbiAgICAgICAgdmFyaWFudD0nY29udGFpbmVkJ1xuICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgb25DbGljaz17c3RvcH1cbiAgICAgID5cbiAgICAgICAg5LiN57+76K+RXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxCdXR0b24gY29sb3I9J3NlY29uZGFyeScgdmFyaWFudD0nY29udGFpbmVkJyBmdWxsV2lkdGggb25DbGljaz17Y2xlYXJ9PlxuICAgICAgICDmuIXnqbpcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCc7XG5cbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XG5pbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgYmx1ZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvYmx1ZSc7XG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgcHJpbWFyeTogYmx1ZVxuICB9XG59KTtcblxuUmVhY3RET00ucmVuZGVyKFxuICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgIDxDc3NCYXNlbGluZSAvPlxuICAgIDxBcHAgLz5cbiAgPC9UaGVtZVByb3ZpZGVyPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=