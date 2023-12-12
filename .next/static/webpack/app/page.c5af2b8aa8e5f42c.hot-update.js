"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _components_ReservationCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ReservationCard */ \"(app-pages-browser)/./app/components/ReservationCard.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _GlobalRedux_features_reservationSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GlobalRedux/features/reservationSlice */ \"(app-pages-browser)/./app/GlobalRedux/features/reservationSlice.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [reservationNameInput, setReservationNameInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const reservations = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.reservations.value);\n    react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch;\n    const handleInput = ()=>{\n        if (!reservationNameInput) return;\n        (0,_GlobalRedux_features_reservationSlice__WEBPACK_IMPORTED_MODULE_3__.addReservation)(reservationNameInput);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-4 fs-3 border-end border-secondary\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"\",\n                                        children: \"Reservation Container\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/sujon_hasan/Personal/Sujon/WebDevelopment/Project/restaurant/app/page.tsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"fs-5\",\n                                        children: reservations.map((name)=>{\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ReservationCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                                name: name\n                                            }, void 0, false, {\n                                                fileName: \"/home/sujon_hasan/Personal/Sujon/WebDevelopment/Project/restaurant/app/page.tsx\",\n                                                lineNumber: 31,\n                                                columnNumber: 28\n                                            }, this);\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"/home/sujon_hasan/Personal/Sujon/WebDevelopment/Project/restaurant/app/page.tsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/sujon_hasan/Personal/Sujon/WebDevelopment/Project/restaurant/app/page.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-5 fs-5\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: \"w-50\",\n                                        value: reservationNameInput,\n                                        onChange: (e)=>setReservationNameInput(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"/home/sujon_hasan/Personal/Sujon/WebDevelopment/Project/restaurant/app/page.tsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleInput,\n                                        children: \"Add\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/sujon_hasan/Personal/Sujon/WebDevelopment/Project/restaurant/app/page.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/sujon_hasan/Personal/Sujon/WebDevelopment/Project/restaurant/app/page.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/sujon_hasan/Personal/Sujon/WebDevelopment/Project/restaurant/app/page.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-8 fs-5 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"fs-2\",\n                                children: \"customer food\"\n                            }, void 0, false, {\n                                fileName: \"/home/sujon_hasan/Personal/Sujon/WebDevelopment/Project/restaurant/app/page.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"shadow-sm p-3 mb-5 bg-white rounded\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"sujon\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/sujon_hasan/Personal/Sujon/WebDevelopment/Project/restaurant/app/page.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"d-flex justify-content-between\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"d-flex flex-wrap gap-3\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: \"Beef Biriyani,\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/sujon_hasan/Personal/Sujon/WebDevelopment/Project/restaurant/app/page.tsx\",\n                                                        lineNumber: 51,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: \"Drink,\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/sujon_hasan/Personal/Sujon/WebDevelopment/Project/restaurant/app/page.tsx\",\n                                                        lineNumber: 52,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: \"Burger,\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/sujon_hasan/Personal/Sujon/WebDevelopment/Project/restaurant/app/page.tsx\",\n                                                        lineNumber: 53,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: \"Borhani\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/sujon_hasan/Personal/Sujon/WebDevelopment/Project/restaurant/app/page.tsx\",\n                                                        lineNumber: 54,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/sujon_hasan/Personal/Sujon/WebDevelopment/Project/restaurant/app/page.tsx\",\n                                                lineNumber: 50,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"text-end\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                        className: \"w-25\",\n                                                        value: \"typing\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/sujon_hasan/Personal/Sujon/WebDevelopment/Project/restaurant/app/page.tsx\",\n                                                        lineNumber: 57,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                        children: \"Add\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/sujon_hasan/Personal/Sujon/WebDevelopment/Project/restaurant/app/page.tsx\",\n                                                        lineNumber: 61,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/sujon_hasan/Personal/Sujon/WebDevelopment/Project/restaurant/app/page.tsx\",\n                                                lineNumber: 56,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/sujon_hasan/Personal/Sujon/WebDevelopment/Project/restaurant/app/page.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/sujon_hasan/Personal/Sujon/WebDevelopment/Project/restaurant/app/page.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/sujon_hasan/Personal/Sujon/WebDevelopment/Project/restaurant/app/page.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/sujon_hasan/Personal/Sujon/WebDevelopment/Project/restaurant/app/page.tsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/sujon_hasan/Personal/Sujon/WebDevelopment/Project/restaurant/app/page.tsx\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/sujon_hasan/Personal/Sujon/WebDevelopment/Project/restaurant/app/page.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"TdjMpNXGA1HfDj2wx6/kQMICaNw=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNzQztBQUNnQjtBQUVLO0FBQzFCO0FBQ3dDO0FBRTFELFNBQVNNOztJQUV0QixNQUFNLENBQUNDLHNCQUFzQkMsd0JBQXdCLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ2pFLE1BQU1LLGVBQWVQLHdEQUFXQSxDQUFDLENBQUNRLFFBQXFCQSxNQUFNRCxZQUFZLENBQUNFLEtBQUs7SUFDL0VWLG9EQUFXQTtJQUVYLE1BQU1XLGNBQWM7UUFFbEIsSUFBRyxDQUFDTCxzQkFBc0I7UUFFMUJGLHNGQUFjQSxDQUFDRTtJQUNqQjtJQUNBLHFCQUNFLDhEQUFDTTtRQUFLQyxXQUFXZCw4REFBVztrQkFFMUIsNEVBQUNlO1lBQUlELFdBQVU7c0JBQ2IsNEVBQUNDO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDQzs7a0RBQ0MsOERBQUNDO3dDQUFFRixXQUFVO2tEQUFHOzs7Ozs7a0RBQ2hCLDhEQUFDQzt3Q0FBSUQsV0FBVTtrREFDWkwsYUFBYVEsR0FBRyxDQUFDQyxDQUFBQTs0Q0FDZCxxQkFBTyw4REFBQ2YsbUVBQWVBO2dEQUFDZSxNQUFNQTs7Ozs7O3dDQUNsQzs7Ozs7Ozs7Ozs7OzBDQUlKLDhEQUFDSDtnQ0FBSUQsV0FBVTs7a0RBQ2IsOERBQUNLO3dDQUNDTCxXQUFVO3dDQUNWSCxPQUFPSjt3Q0FDUGEsVUFBVSxDQUFDQyxJQUFNYix3QkFBd0JhLEVBQUVDLE1BQU0sQ0FBQ1gsS0FBSzs7Ozs7O2tEQUV6RCw4REFBQ1k7d0NBQU9DLFNBQVNaO2tEQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR25DLDhEQUFDRzt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNFO2dDQUFFRixXQUFVOzBDQUFPOzs7Ozs7MENBQ3BCLDhEQUFDQztnQ0FBSUQsV0FBVTs7a0RBQ2IsOERBQUNXO2tEQUFHOzs7Ozs7a0RBQ0osOERBQUNWO3dDQUFJRCxXQUFVOzswREFDYiw4REFBQ0M7Z0RBQUlELFdBQVU7O2tFQUNiLDhEQUFDRTtrRUFBRTs7Ozs7O2tFQUNILDhEQUFDQTtrRUFBRTs7Ozs7O2tFQUNILDhEQUFDQTtrRUFBRTs7Ozs7O2tFQUNILDhEQUFDQTtrRUFBRTs7Ozs7Ozs7Ozs7OzBEQUVMLDhEQUFDRDtnREFBSUQsV0FBVTs7a0VBQ2IsOERBQUNLO3dEQUNDTCxXQUFVO3dEQUNWSCxPQUFNOzs7Ozs7a0VBRVIsOERBQUNZO2tFQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVzFCO0dBL0R3QmpCOztRQUdESixvREFBV0E7OztLQUhWSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcGFnZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tICcuL0dsb2JhbFJlZHV4L3N0b3JlJ1xuaW1wb3J0IFJlc2VydmF0aW9uQ2FyZCBmcm9tICcuL2NvbXBvbmVudHMvUmVzZXJ2YXRpb25DYXJkJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYWRkUmVzZXJ2YXRpb24gfSBmcm9tICcuL0dsb2JhbFJlZHV4L2ZlYXR1cmVzL3Jlc2VydmF0aW9uU2xpY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IFtyZXNlcnZhdGlvbk5hbWVJbnB1dCwgc2V0UmVzZXJ2YXRpb25OYW1lSW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IHJlc2VydmF0aW9ucyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5yZXNlcnZhdGlvbnMudmFsdWUpO1xuICB1c2VEaXNwYXRjaFxuXG4gIGNvbnN0IGhhbmRsZUlucHV0ID0gKCkgPT57XG5cbiAgICBpZighcmVzZXJ2YXRpb25OYW1lSW5wdXQpIHJldHVybjtcblxuICAgIGFkZFJlc2VydmF0aW9uKHJlc2VydmF0aW9uTmFtZUlucHV0KVxuICB9XG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IHRleHQtY2VudGVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTQgZnMtMyBib3JkZXItZW5kIGJvcmRlci1zZWNvbmRhcnknPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPScnPlJlc2VydmF0aW9uIENvbnRhaW5lcjwvcD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZzLTUnPlxuICAgICAgICAgICAgICAgIHtyZXNlcnZhdGlvbnMubWFwKG5hbWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFJlc2VydmF0aW9uQ2FyZCBuYW1lPXtuYW1lfSAvPlxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01IGZzLTVcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTUwJ1xuICAgICAgICAgICAgICAgIHZhbHVlPXtyZXNlcnZhdGlvbk5hbWVJbnB1dH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJlc2VydmF0aW9uTmFtZUlucHV0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVJbnB1dH0gPkFkZDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC04IGZzLTUgJz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZnMtMic+Y3VzdG9tZXIgZm9vZDwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzaGFkb3ctc20gcC0zIG1iLTUgYmctd2hpdGUgcm91bmRlZCc+XG4gICAgICAgICAgICAgIDxoMz5zdWpvbjwvaDM+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4nPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXggZmxleC13cmFwIGdhcC0zJz5cbiAgICAgICAgICAgICAgICAgIDxwPkJlZWYgQmlyaXlhbmksPC9wPlxuICAgICAgICAgICAgICAgICAgPHA+RHJpbmssPC9wPlxuICAgICAgICAgICAgICAgICAgPHA+QnVyZ2VyLDwvcD5cbiAgICAgICAgICAgICAgICAgIDxwPkJvcmhhbmk8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWVuZFwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy0yNSdcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ0eXBpbmdcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24+QWRkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvbWFpbj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJSZXNlcnZhdGlvbkNhcmQiLCJ1c2VTdGF0ZSIsImFkZFJlc2VydmF0aW9uIiwiSG9tZSIsInJlc2VydmF0aW9uTmFtZUlucHV0Iiwic2V0UmVzZXJ2YXRpb25OYW1lSW5wdXQiLCJyZXNlcnZhdGlvbnMiLCJzdGF0ZSIsInZhbHVlIiwiaGFuZGxlSW5wdXQiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwicCIsIm1hcCIsIm5hbWUiLCJpbnB1dCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});