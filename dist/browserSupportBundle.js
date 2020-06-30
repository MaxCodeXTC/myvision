/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./browserSupport/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./browserSupport/browserSupport.js":
/*!******************************************!*\
  !*** ./browserSupport/browserSupport.js ***!
  \******************************************/
/*! exports provided: validateBrowserType, validateCanvasSupport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateBrowserType\", function() { return validateBrowserType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateCanvasSupport\", function() { return validateCanvasSupport; });\nconst CANVAS_BROWSER_SUPPORT_URL = 'https://community.canvaslms.com/docs/DOC-10720-what-are-the-browser-and-computer-requirements-for-canvas';\r\nconst CHROMIUM_SUPPORT_URL = 'https://www.zdnet.com/pictures/all-the-chromium-based-browsers/';\r\nlet displayingBrowserSupportOverlay = false;\r\n\r\nfunction validateBrowserType() {\r\n  console.log('called first');\r\n  const agent = navigator.userAgent.toLowerCase();\r\n  console.log(agent.indexOf('chrome') > -1 || agent.indexOf('edg') > -1 || agent.indexOf('firefox') > -1);\r\n  if (agent.indexOf('chrome') > -1 || agent.indexOf('edg') > -1 || agent.indexOf('firefox') > -1) return;\r\n  const inadequateClientResourcesOverlay = document.getElementById('inadequate-client-resources-overlay');\r\n  const inadequateClientResourcesOverlayText = document.getElementById('inadequate-client-resources-overlay-text');\r\n  inadequateClientResourcesOverlayText.innerHTML = `Please switch to a <a href=\"${CHROMIUM_SUPPORT_URL}\" target=\"_blank\">Chromium</a> based browser or Firefox to use MyVision`;\r\n  inadequateClientResourcesOverlayText.style.marginTop = '32px';\r\n  inadequateClientResourcesOverlayText.style.maxWidth = 'unset';\r\n  inadequateClientResourcesOverlay.style.display = 'block';\r\n  displayingBrowserSupportOverlay = true;\r\n}\r\n\r\nfunction validateCanvasSupport() {\r\n  if (displayingBrowserSupportOverlay) return;\r\n  const canvasElement = document.createElement('canvas');\r\n  const isCanvasSupported = !!(canvasElement.getContext && canvasElement.getContext('2d'));\r\n  console.log(isCanvasSupported);\r\n  if (!isCanvasSupported) {\r\n    const inadequateClientResourcesOverlay = document.getElementById('inadequate-client-resources-overlay');\r\n    const inadequateClientResourcesOverlayText = document.getElementById('inadequate-client-resources-overlay-text');\r\n    inadequateClientResourcesOverlayText.innerHTML = `Your browser does not support the Canvas feature, please update or choose another one from <a href=\"${CANVAS_BROWSER_SUPPORT_URL}\" target=\"_blank\">here</a>`;\r\n    inadequateClientResourcesOverlay.style.display = 'block';\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./browserSupport/browserSupport.js?");

/***/ }),

/***/ "./browserSupport/index.js":
/*!*********************************!*\
  !*** ./browserSupport/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _browserSupport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browserSupport */ \"./browserSupport/browserSupport.js\");\n\r\n\r\nObject(_browserSupport__WEBPACK_IMPORTED_MODULE_0__[\"validateBrowserType\"])();\r\nObject(_browserSupport__WEBPACK_IMPORTED_MODULE_0__[\"validateCanvasSupport\"])();\r\n\n\n//# sourceURL=webpack:///./browserSupport/index.js?");

/***/ })

/******/ });