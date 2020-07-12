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
    var a, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            a = document.getElementById("name").value;
            data = {
              name: a
            };
            axios(url, {
              method: 'GET',
              mode: 'no-cors',
              headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
              },
              withCredentials: true,
              credentials: 'same-origin'
            }).then(function (response) {});

          case 3:
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
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx("label", {
    htmlFor: "exampleInputEmail1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, "Nombre de la persona"), __jsx("input", (_jsx = {
    id: "name",
    className: "form-control"
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "id", "name"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 17
  }), _jsx))), __jsx("button", {
    className: "btn btn-primary",
    onClick: pizzaClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm11bGFyaW8uanMiXSwibmFtZXMiOlsiYXhpb3MiLCJyZXF1aXJlIiwicGl6emFDbGljayIsImEiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJkYXRhIiwibmFtZSIsInVybCIsIm1ldGhvZCIsIm1vZGUiLCJoZWFkZXJzIiwid2l0aENyZWRlbnRpYWxzIiwiY3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzcG9uc2UiLCJGb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLDRDQUFELENBQXJCOztBQUNBLElBQU1DLFVBQVU7QUFBQSw4TEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWEMsYUFEVyxHQUNQQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0NDLEtBRHpCO0FBRVhDLGdCQUZXLEdBRUo7QUFBRUMsa0JBQUksRUFBRUw7QUFBUixhQUZJO0FBR2ZILGlCQUFLLENBQUNTLEdBQUQsRUFBTTtBQUNQQyxvQkFBTSxFQUFFLEtBREQ7QUFFUEMsa0JBQUksRUFBRSxTQUZDO0FBR1BDLHFCQUFPLEVBQUU7QUFDTCwrQ0FBK0IsR0FEMUI7QUFFTCxnQ0FBZ0I7QUFGWCxlQUhGO0FBT1BDLDZCQUFlLEVBQUUsSUFQVjtBQVFQQyx5QkFBVyxFQUFFO0FBUk4sYUFBTixDQUFMLENBU0dDLElBVEgsQ0FTUSxVQUFBQyxRQUFRLEVBQUksQ0FDbkIsQ0FWRDs7QUFIZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFWZCxVQUFVO0FBQUE7QUFBQTtBQUFBLEdBQWhCOztBQWVBLElBQU1lLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFFZixTQUVJO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sV0FBTyxFQUFDLG9CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREosRUFFSTtBQUFPLE1BQUUsRUFBQyxNQUFWO0FBQWlCLGFBQVMsRUFBQztBQUEzQiwyR0FBNkMsTUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLENBREosRUFLSTtBQUFRLGFBQVMsRUFBQyxpQkFBbEI7QUFBb0MsV0FBTyxFQUFFZixVQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEosQ0FGSjtBQVdILENBYkQ7O0tBQU1lLEk7QUFlU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGZvcm11bGFyaW8uanMuMTgwZDdkMmFjNzQ4NTUwNjBkZDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJyZWFjdC1kb21cIlxyXG5jb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJylcclxuY29uc3QgcGl6emFDbGljayA9IGFzeW5jICgpID0+IHtcclxuICAgIHZhciBhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lXCIpLnZhbHVlXHJcbiAgICB2YXIgZGF0YSA9IHsgbmFtZTogYSB9XHJcbiAgICBheGlvcyh1cmwsIHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIG1vZGU6ICduby1jb3JzJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXHJcbiAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgIH0pXHJcbn1cclxuY29uc3QgRm9ybSA9ICgpID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMjUgcC0zXCIgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZXhhbXBsZUlucHV0RW1haWwxXCI+Tm9tYnJlIGRlIGxhIHBlcnNvbmE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibmFtZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwibmFtZVwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e3BpenphQ2xpY2t9PlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybSJdLCJzb3VyY2VSb290IjoiIn0=