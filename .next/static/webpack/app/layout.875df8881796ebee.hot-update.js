"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/GlobalRedux/features/reservationSlice.ts":
/*!******************************************************!*\
  !*** ./app/GlobalRedux/features/reservationSlice.ts ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   reservationSlice: function() { return /* binding */ reservationSlice; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst initialState = {\n    value: []\n};\nconst reservationSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"reservations\",\n    initialState,\n    reducers: {\n        addReservation: (state, action)=>{\n            state.value.push(action.payload);\n        }\n    }\n});\nexp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (reservationSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9HbG9iYWxSZWR1eC9mZWF0dXJlcy9yZXNlcnZhdGlvblNsaWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQThEO0FBTTlELE1BQU1DLGVBQWdDO0lBQ2xDQyxPQUFPLEVBQUU7QUFDYjtBQUdPLE1BQU1DLG1CQUFtQkgsNkRBQVdBLENBQUM7SUFFeENJLE1BQU07SUFDTkg7SUFDQUksVUFBVTtRQUVOQyxnQkFBZ0IsQ0FBQ0MsT0FBT0M7WUFDcEJELE1BQU1MLEtBQUssQ0FBQ08sSUFBSSxDQUFDRCxPQUFPRSxPQUFPO1FBQ25DO0lBQ0o7QUFDSixHQUFFO0FBRUZDO0FBRUEsK0RBQWVSLGlCQUFpQlMsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9HbG9iYWxSZWR1eC9mZWF0dXJlcy9yZXNlcnZhdGlvblNsaWNlLnRzPzRlNDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuXG5pbnRlcmZhY2UgaW5pdGlhbFN0YXRlVHlwZSB7XG4gICAgdmFsdWU6IHN0cmluZ1tdLCBcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlOmluaXRpYWxTdGF0ZVR5cGUgPSB7XG4gICAgdmFsdWU6IFtdXG59XG5cblxuZXhwb3J0IGNvbnN0IHJlc2VydmF0aW9uU2xpY2UgPSBjcmVhdGVTbGljZSh7XG5cbiAgICBuYW1lOiBcInJlc2VydmF0aW9uc1wiLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICByZWR1Y2Vyczoge1xuXG4gICAgICAgIGFkZFJlc2VydmF0aW9uOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KT0+e1xuICAgICAgICAgICAgc3RhdGUudmFsdWUucHVzaChhY3Rpb24ucGF5bG9hZClcbiAgICAgICAgfVxuICAgIH1cbn0pXG5cbmV4cFxuXG5leHBvcnQgZGVmYXVsdCByZXNlcnZhdGlvblNsaWNlLnJlZHVjZXI7Il0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwidmFsdWUiLCJyZXNlcnZhdGlvblNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiYWRkUmVzZXJ2YXRpb24iLCJzdGF0ZSIsImFjdGlvbiIsInB1c2giLCJwYXlsb2FkIiwiZXhwIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/GlobalRedux/features/reservationSlice.ts\n"));

/***/ })

});