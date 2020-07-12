webpackHotUpdate("static/development/pages/formulario.js",{

/***/ "./components/formulario.js":
/*!**********************************!*\
  !*** ./components/formulario.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/usr/src/app/components/formulario.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\nvar axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar pizzaClick = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n    var a, data, res;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            a = document.getElementById(\"name\").value;\n            data = {\n              name: a\n            };\n            _context.next = 4;\n            return axios.post('http://web:3000/insertar', data);\n\n          case 4:\n            res = _context.sent;\n\n          case 5:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function pizzaClick() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar Form = function Form() {\n  var _jsx;\n\n  return __jsx(\"div\", {\n    className: \"w-25 p-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"form-group\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }\n  }, __jsx(\"label\", {\n    htmlFor: \"exampleInputEmail1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 17\n    }\n  }, \"Nombre de la persona\"), __jsx(\"input\", (_jsx = {\n    id: \"name\",\n    className: \"form-control\"\n  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsx, \"id\", \"name\"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsx, \"__self\", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsx, \"__source\", {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 17\n  }), _jsx))), __jsx(\"button\", {\n    className: \"btn btn-primary\",\n    onClick: pizzaClick,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }\n  }, \"Submit\"));\n};\n\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\n\nvar _c;\n\n$RefreshReg$(_c, \"Form\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm11bGFyaW8uanM/ZGM5OSJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJwaXp6YUNsaWNrIiwiYSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsImRhdGEiLCJuYW1lIiwicG9zdCIsInJlcyIsIkZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBLElBQU1BLEtBQUssR0FBQ0MsbUJBQU8sQ0FBQyw0Q0FBRCxDQUFuQjs7QUFDQSxJQUFNQyxVQUFVO0FBQUEsOExBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1hDLGFBRFcsR0FDUEMsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLEVBQWdDQyxLQUR6QjtBQUVYQyxnQkFGVyxHQUVKO0FBQUVDLGtCQUFJLEVBQUVMO0FBQVIsYUFGSTtBQUFBO0FBQUEsbUJBR0dILEtBQUssQ0FBQ1MsSUFBTixDQUFXLDBCQUFYLEVBQXVDRixJQUF2QyxDQUhIOztBQUFBO0FBR1RHLGVBSFM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBVlIsVUFBVTtBQUFBO0FBQUE7QUFBQSxHQUFoQjs7QUFLQSxJQUFNUyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBRWYsU0FFSTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFPLFdBQU8sRUFBQyxvQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURKLEVBRUk7QUFBTyxNQUFFLEVBQUMsTUFBVjtBQUFpQixhQUFTLEVBQUM7QUFBM0IsMkdBQTZDLE1BQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixDQURKLEVBS0k7QUFBUSxhQUFTLEVBQUMsaUJBQWxCO0FBQW9DLFdBQU8sRUFBRVQsVUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxKLENBRko7QUFXSCxDQWJEOztLQUFNUyxJO0FBZVNBLG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9mb3JtdWxhcmlvLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcInJlYWN0LWRvbVwiXHJcbmNvbnN0IGF4aW9zPXJlcXVpcmUoJ2F4aW9zJylcclxuY29uc3QgcGl6emFDbGljayA9IGFzeW5jICgpID0+IHtcclxuICAgIHZhciBhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lXCIpLnZhbHVlXHJcbiAgICB2YXIgZGF0YSA9IHsgbmFtZTogYSB9XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vd2ViOjMwMDAvaW5zZXJ0YXInLCBkYXRhKTtcclxufVxyXG5jb25zdCBGb3JtID0gKCkgPT4ge1xyXG4gIFxyXG4gICAgcmV0dXJuICggIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTI1IHAtM1wiID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImV4YW1wbGVJbnB1dEVtYWlsMVwiPk5vbWJyZSBkZSBsYSBwZXJzb25hPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cIm5hbWVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIm5hbWVcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXtwaXp6YUNsaWNrfT5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/formulario.js\n");

/***/ })

})