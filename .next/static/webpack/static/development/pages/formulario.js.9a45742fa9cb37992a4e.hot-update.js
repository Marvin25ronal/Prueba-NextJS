webpackHotUpdate("static\\development\\pages\\formulario.js",{

/***/ "./components/formulario.js":
/*!**********************************!*\
  !*** ./components/formulario.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);




var _this = undefined,
    _jsxFileName = "C:\\Users\\marvi\\OneDrive\\Escritorio\\Prueba-NextJS\\components\\formulario.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;


var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var pizzaClick = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var a, data, url, requestOptions;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            a = document.getElementById("name").value;
            data = {
              name: a
            };
            url = "http://localhost:5000/insertar";
            requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: data
            };
            fetch(url, requestOptions).then(function (response) {
              return response.json();
            }).then(function (data) {
              return console.log(data);
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function pizzaClick() {
    return _ref.apply(this, arguments);
  };
}();

var Form = function Form() {
  var _jsx;

  return __jsx("div", {
    className: "w-25 p-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx("label", {
    htmlFor: "exampleInputEmail1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, "Nombre de la persona"), __jsx("input", (_jsx = {
    id: "name",
    className: "form-control"
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "id", "name"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 17
  }), _jsx))), __jsx("button", {
    className: "btn btn-primary",
    onClick: pizzaClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, "Submit"));
};

_c = Form;
/* harmony default export */ __webpack_exports__["default"] = (Form);

var _c;

$RefreshReg$(_c, "Form");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm11bGFyaW8uanMiXSwibmFtZXMiOlsiYXhpb3MiLCJyZXF1aXJlIiwicGl6emFDbGljayIsImEiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJkYXRhIiwibmFtZSIsInVybCIsInJlcXVlc3RPcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiRm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBLElBQU1BLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyw0Q0FBRCxDQUFyQjs7QUFDQSxJQUFNQyxVQUFVO0FBQUEsOExBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1hDLGFBRFcsR0FDUEMsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLEVBQWdDQyxLQUR6QjtBQUVYQyxnQkFGVyxHQUVKO0FBQUVDLGtCQUFJLEVBQUVMO0FBQVIsYUFGSTtBQUdYTSxlQUhXLEdBR1AsZ0NBSE87QUFJVEMsMEJBSlMsR0FJUTtBQUNuQkMsb0JBQU0sRUFBRSxNQURXO0FBRW5CQyxxQkFBTyxFQUFFO0FBQUUsZ0NBQWdCO0FBQWxCLGVBRlU7QUFHbkJDLGtCQUFJLEVBQUVOO0FBSGEsYUFKUjtBQVNmTyxpQkFBSyxDQUFDTCxHQUFELEVBQU1DLGNBQU4sQ0FBTCxDQUNLSyxJQURMLENBQ1UsVUFBQUMsUUFBUTtBQUFBLHFCQUFJQSxRQUFRLENBQUNDLElBQVQsRUFBSjtBQUFBLGFBRGxCLEVBRUtGLElBRkwsQ0FFVSxVQUFBUixJQUFJO0FBQUEscUJBQUdXLE9BQU8sQ0FBQ0MsR0FBUixDQUFZWixJQUFaLENBQUg7QUFBQSxhQUZkOztBQVRlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVZMLFVBQVU7QUFBQTtBQUFBO0FBQUEsR0FBaEI7O0FBY0EsSUFBTWtCLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFFZixTQUVJO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sV0FBTyxFQUFDLG9CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREosRUFFSTtBQUFPLE1BQUUsRUFBQyxNQUFWO0FBQWlCLGFBQVMsRUFBQztBQUEzQiwyR0FBNkMsTUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLENBREosRUFLSTtBQUFRLGFBQVMsRUFBQyxpQkFBbEI7QUFBb0MsV0FBTyxFQUFFbEIsVUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxKLENBRko7QUFXSCxDQWJEOztLQUFNa0IsSTtBQWVTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcZm9ybXVsYXJpby5qcy45YTQ1NzQyZmE5Y2IzNzk5MmE0ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcInJlYWN0LWRvbVwiXHJcbmNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKVxyXG5jb25zdCBwaXp6YUNsaWNrID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdmFyIGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVcIikudmFsdWVcclxuICAgIHZhciBkYXRhID0geyBuYW1lOiBhIH1cclxuICAgIHZhciB1cmw9XCJodHRwOi8vbG9jYWxob3N0OjUwMDAvaW5zZXJ0YXJcIlxyXG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgYm9keTogZGF0YVxyXG4gICAgfTtcclxuICAgIGZldGNoKHVybCwgcmVxdWVzdE9wdGlvbnMpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT5jb25zb2xlLmxvZyhkYXRhKSk7XHJcbn1cclxuXHJcbmNvbnN0IEZvcm0gPSAoKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTI1IHAtM1wiID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImV4YW1wbGVJbnB1dEVtYWlsMVwiPk5vbWJyZSBkZSBsYSBwZXJzb25hPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cIm5hbWVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIm5hbWVcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXtwaXp6YUNsaWNrfT5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm0iXSwic291cmNlUm9vdCI6IiJ9