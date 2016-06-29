/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\n__webpack_require__(1);\n\n__webpack_require__(2);\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/index.js\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/index.js?");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("// removed by extract-text-webpack-plugin\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/css/index.scss\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/css/index.scss?");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _interopRequireDefault = __webpack_require__(3)['default'];\n\nvar _jquery = __webpack_require__(4);\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\n// import 'smartmenus';\n// import 'smartmenus/src/css/sm-core-css.css';\n\nvar _libFitnav = __webpack_require__(7);\n\nvar _libFitnav2 = _interopRequireDefault(_libFitnav);\n\n(0, _jquery2['default'])(function () {\n  var $nav = (0, _jquery2['default'])('#topNav');\n  var $menu = $nav.find('> ul');\n  var $mobileNav = (0, _jquery2['default'])('#menu');\n  var $toggle = (0, _jquery2['default'])('#mobileNavToggle');\n\n  // $menu.smartmenus({\n  //   subIndicatorsPos: 'append',\n  //   // subIndicatorsText: '\\u25BC',\n  // });\n\n  var visibleClass = 'STATE--visible';\n\n  var onUpdate = function onUpdate(itFits) {\n    if (itFits) {\n      $toggle.removeClass(visibleClass);\n      return $nav.addClass(visibleClass);\n    }\n\n    $toggle.addClass(visibleClass);\n    return $nav.removeClass(visibleClass);\n  };\n\n  var fitNav = new _libFitnav2['default']({\n    container: $nav[0],\n    children: $menu.find('> li').get(),\n    onUpdate: onUpdate\n  });\n\n  fitNav.start();\n\n  // Mobile Menu\n\n  var toggleMobileNav = function toggleMobileNav() {\n    $mobileNav.toggleClass(visibleClass);\n  };\n\n  (0, _jquery2['default'])(document).on('click', '[data-mobile-nav-toggle]', function (event) {\n    event.preventDefault();\n    toggleMobileNav();\n  });\n});\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/js/menu.js\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/js/menu.js?");

/***/ },
/* 3 */
/***/ function(module, exports) {

	eval("\"use strict\";\n\nexports[\"default\"] = function (obj) {\n  return obj && obj.__esModule ? obj : {\n    \"default\": obj\n  };\n};\n\nexports.__esModule = true;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/helpers/interop-require-default.js\n ** module id = 3\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/helpers/interop-require-default.js?");

/***/ },
/* 4 */
/***/ function(module, exports) {

	eval("module.exports = jQuery;\n\n/*****************\n ** WEBPACK FOOTER\n ** external \"jQuery\"\n ** module id = 4\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%22jQuery%22?");

/***/ },
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	eval("/**\n * @class FitNav\n *\n * @param {Object} config - Configuration options\n * @param {Element} config.container - The container element\n * @param {NodeList} config.children - The children elements\n * @param {function} config.onUpdate - Function to call on updates\n * @param {(number|function)} [config.addWidth=0] - Add width to the the children calculation\n *\n**/\n\n'use strict';\n\nvar _createClass = __webpack_require__(8)['default'];\n\nvar _classCallCheck = __webpack_require__(12)['default'];\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nvar FitNav = (function () {\n  function FitNav() {\n    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];\n\n    var container = _ref.container;\n    var children = _ref.children;\n    var onUpdate = _ref.onUpdate;\n    var _ref$addWidth = _ref.addWidth;\n    var addWidth = _ref$addWidth === undefined ? 0 : _ref$addWidth;\n\n    _classCallCheck(this, FitNav);\n\n    this.container = container;\n    this.children = children;\n    this.onUpdate = onUpdate;\n    this.addWidth = addWidth;\n  }\n\n  _createClass(FitNav, [{\n    key: 'start',\n    value: function start() {\n      this.onResize();\n      this.addEventListener(window, 'resize', this);\n    }\n  }, {\n    key: 'stop',\n    value: function stop() {\n      this.removeEventListener(window, 'resize', this);\n    }\n  }, {\n    key: 'onResize',\n    value: function onResize() {\n      this.onUpdate(this.doesItFit());\n    }\n  }, {\n    key: 'doesItFit',\n    value: function doesItFit() {\n      var container = this.calcContainerWidth();\n      var children = this.calcChildrenWidth();\n      var addWidth = this.calcAddWidth();\n\n      return container - children - addWidth >= 0;\n    }\n  }, {\n    key: 'calcContainerWidth',\n    value: function calcContainerWidth() {\n      return this.outerWidth(this.container);\n    }\n  }, {\n    key: 'calcChildrenWidth',\n    value: function calcChildrenWidth() {\n      var width = 0;\n\n      for (var i = 0, limit = this.children.length; i < limit; i++) {\n        width += this.outerWidth(this.children[i]);\n      }\n\n      return width;\n    }\n  }, {\n    key: 'calcAddWidth',\n    value: function calcAddWidth() {\n      if (typeof this.addWidth === 'function') {\n        return this.addWidth();\n      }\n      return this.addWidth;\n    }\n  }, {\n    key: 'handleEvent',\n    value: function handleEvent(event) {\n      switch (event.type) {\n        case 'resize':\n          // debounce(this.onResize, 2000);\n          this.onResize();\n          break;\n        default:\n      }\n    }\n  }, {\n    key: 'addEventListener',\n    value: function addEventListener(el, eventName, handler) {\n      if (el.addEventListener) {\n        el.addEventListener(eventName, handler);\n      } else {\n        el.attachEvent('on' + eventName, function () {\n          handler.call(el);\n        });\n      }\n    }\n  }, {\n    key: 'removeEventListener',\n    value: function removeEventListener(el, eventName, handler) {\n      if (el.removeEventListener) {\n        el.removeEventListener(eventName, handler);\n      } else {\n        el.detachEvent('on' + eventName, handler);\n      }\n    }\n  }, {\n    key: 'outerWidth',\n    value: function outerWidth(el) {\n      var width = el.offsetWidth;\n      var style = el.currentStyle || getComputedStyle(el);\n\n      width += parseInt(style.marginLeft, 10) + parseInt(style.marginRight, 10);\n      return width;\n    }\n  }]);\n\n  return FitNav;\n})();\n\nexports['default'] = FitNav;\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/js/lib/fitnav.js\n ** module id = 7\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/js/lib/fitnav.js?");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nvar _Object$defineProperty = __webpack_require__(9)[\"default\"];\n\nexports[\"default\"] = (function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];\n      descriptor.enumerable = descriptor.enumerable || false;\n      descriptor.configurable = true;\n      if (\"value\" in descriptor) descriptor.writable = true;\n\n      _Object$defineProperty(target, descriptor.key, descriptor);\n    }\n  }\n\n  return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) defineProperties(Constructor, staticProps);\n    return Constructor;\n  };\n})();\n\nexports.__esModule = true;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/helpers/create-class.js\n ** module id = 8\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/helpers/create-class.js?");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	eval("module.exports = { \"default\": __webpack_require__(10), __esModule: true };\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/core-js/object/define-property.js\n ** module id = 9\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/core-js/object/define-property.js?");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	eval("var $ = __webpack_require__(11);\nmodule.exports = function defineProperty(it, key, desc){\n  return $.setDesc(it, key, desc);\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/core-js/library/fn/object/define-property.js\n ** module id = 10\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/core-js/library/fn/object/define-property.js?");

/***/ },
/* 11 */
/***/ function(module, exports) {

	eval("var $Object = Object;\nmodule.exports = {\n  create:     $Object.create,\n  getProto:   $Object.getPrototypeOf,\n  isEnum:     {}.propertyIsEnumerable,\n  getDesc:    $Object.getOwnPropertyDescriptor,\n  setDesc:    $Object.defineProperty,\n  setDescs:   $Object.defineProperties,\n  getKeys:    $Object.keys,\n  getNames:   $Object.getOwnPropertyNames,\n  getSymbols: $Object.getOwnPropertySymbols,\n  each:       [].forEach\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/core-js/library/modules/$.js\n ** module id = 11\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/core-js/library/modules/$.js?");

/***/ },
/* 12 */
/***/ function(module, exports) {

	eval("\"use strict\";\n\nexports[\"default\"] = function (instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n};\n\nexports.__esModule = true;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/helpers/class-call-check.js\n ** module id = 12\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/helpers/class-call-check.js?");

/***/ }
/******/ ]);