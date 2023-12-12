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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _components_ReservationCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ReservationCard */ \"(app-pages-browser)/./app/components/ReservationCard.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _GlobalRedux_features_reservationSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GlobalRedux/features/reservationSlice */ \"(app-pages-browser)/./app/GlobalRedux/features/reservationSlice.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [reservationNameInput, setReservationNameInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const reservations = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.reservations.value);\n    const Dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    const handleInput = ()=>{\n        if (!reservationNameInput) return;\n        Dispatch((0,_GlobalRedux_features_reservationSlice__WEBPACK_IMPORTED_MODULE_3__.addReservation)(reservationNameInput));\n        setReservationNameInput(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-4 fs-3 border-end border-secondary\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"\",\n                                        children: \"Reservation Container\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/sujon_hasan/Personal/Sujon/WebDevelopment/Project/restaurant/app/page.tsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"fs-5\",\n                                        children: reservations.map((name)=>{\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ReservationCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                                name: name\n                                            }, void 0, false, {\n                                                fileName: \"/home/sujon_hasan/Personal/Sujon/WebDevelopment/Project/restaurant/app/page.tsx\",\n                                                lineNumber: 31,\n                                                columnNumber: 28\n                                            }, this);\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"/home/sujon_hasan/Personal/Sujon/WebDevelopment/Project/restaurant/app/page.tsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/sujon_hasan/Personal/Sujon/WebDevelopment/Project/restaurant/app/page.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-5 fs-5\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: \"w-50\",\n                                        value: reservationNameInput,\n                                        onChange: (e)=>setReservationNameInput(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"/home/sujon_hasan/Personal/Sujon/WebDevelopment/Project/restaurant/app/page.tsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleInput,\n                                        children: \"Add\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/sujon_hasan/Personal/Sujon/WebDevelopment/Project/restaurant/app/page.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/sujon_hasan/Personal/Sujon/WebDevelopment/Project/restaurant/app/page.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/sujon_hasan/Personal/Sujon/WebDevelopment/Project/restaurant/app/page.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-8 fs-5 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"fs-2\",\n                                children: \"customer food\"\n                            }, void 0, false, {\n                                fileName: \"/home/sujon_hasan/Personal/Sujon/WebDevelopment/Project/restaurant/app/page.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"shadow-sm p-3 mb-5 bg-white rounded\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"sujon\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/sujon_hasan/Personal/Sujon/WebDevelopment/Project/restaurant/app/page.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"d-flex justify-content-between\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"d-flex flex-wrap gap-3\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: \"Beef Biriyani,\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/sujon_hasan/Personal/Sujon/WebDevelopment/Project/restaurant/app/page.tsx\",\n                                                        lineNumber: 51,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: \"Drink,\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/sujon_hasan/Personal/Sujon/WebDevelopment/Project/restaurant/app/page.tsx\",\n                                                        lineNumber: 52,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: \"Burger,\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/sujon_hasan/Personal/Sujon/WebDevelopment/Project/restaurant/app/page.tsx\",\n                                                        lineNumber: 53,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: \"Borhani\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/sujon_hasan/Personal/Sujon/WebDevelopment/Project/restaurant/app/page.tsx\",\n                                                        lineNumber: 54,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/sujon_hasan/Personal/Sujon/WebDevelopment/Project/restaurant/app/page.tsx\",\n                                                lineNumber: 50,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"text-end\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                        className: \"w-25\",\n                                                        value: \"typing\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/sujon_hasan/Personal/Sujon/WebDevelopment/Project/restaurant/app/page.tsx\",\n                                                        lineNumber: 57,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                        children: \"Add\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/sujon_hasan/Personal/Sujon/WebDevelopment/Project/restaurant/app/page.tsx\",\n                                                        lineNumber: 61,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/sujon_hasan/Personal/Sujon/WebDevelopment/Project/restaurant/app/page.tsx\",\n                                                lineNumber: 56,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/sujon_hasan/Personal/Sujon/WebDevelopment/Project/restaurant/app/page.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/sujon_hasan/Personal/Sujon/WebDevelopment/Project/restaurant/app/page.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/sujon_hasan/Personal/Sujon/WebDevelopment/Project/restaurant/app/page.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/sujon_hasan/Personal/Sujon/WebDevelopment/Project/restaurant/app/page.tsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/sujon_hasan/Personal/Sujon/WebDevelopment/Project/restaurant/app/page.tsx\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/sujon_hasan/Personal/Sujon/WebDevelopment/Project/restaurant/app/page.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"8OqQui8MCRIXjYfDcXrgHcIJFtA=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNzQztBQUNnQjtBQUVLO0FBQzFCO0FBQ3dDO0FBRTFELFNBQVNNOztJQUV0QixNQUFNLENBQUNDLHNCQUFzQkMsd0JBQXdCLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ2pFLE1BQU1LLGVBQWVQLHdEQUFXQSxDQUFDLENBQUNRLFFBQXFCQSxNQUFNRCxZQUFZLENBQUNFLEtBQUs7SUFDL0UsTUFBTUMsV0FBV1gsd0RBQVdBO0lBRTVCLE1BQU1ZLGNBQWM7UUFFbEIsSUFBRyxDQUFDTixzQkFBc0I7UUFDMUJLLFNBQVNQLHNGQUFjQSxDQUFDRTtRQUN4QkMsd0JBQXdCO0lBQzFCO0lBQ0EscUJBQ0UsOERBQUNNO1FBQUtDLFdBQVdmLDhEQUFXO2tCQUUxQiw0RUFBQ2dCO1lBQUlELFdBQVU7c0JBQ2IsNEVBQUNDO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDQzs7a0RBQ0MsOERBQUNDO3dDQUFFRixXQUFVO2tEQUFHOzs7Ozs7a0RBQ2hCLDhEQUFDQzt3Q0FBSUQsV0FBVTtrREFDWk4sYUFBYVMsR0FBRyxDQUFDQyxDQUFBQTs0Q0FDZCxxQkFBTyw4REFBQ2hCLG1FQUFlQTtnREFBQ2dCLE1BQU1BOzs7Ozs7d0NBQ2xDOzs7Ozs7Ozs7Ozs7MENBSUosOERBQUNIO2dDQUFJRCxXQUFVOztrREFDYiw4REFBQ0s7d0NBQ0NMLFdBQVU7d0NBQ1ZKLE9BQU9KO3dDQUNQYyxVQUFVLENBQUNDLElBQU1kLHdCQUF3QmMsRUFBRUMsTUFBTSxDQUFDWixLQUFLOzs7Ozs7a0RBRXpELDhEQUFDYTt3Q0FBT0MsU0FBU1o7a0RBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHbkMsOERBQUNHO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQ0U7Z0NBQUVGLFdBQVU7MENBQU87Ozs7OzswQ0FDcEIsOERBQUNDO2dDQUFJRCxXQUFVOztrREFDYiw4REFBQ1c7a0RBQUc7Ozs7OztrREFDSiw4REFBQ1Y7d0NBQUlELFdBQVU7OzBEQUNiLDhEQUFDQztnREFBSUQsV0FBVTs7a0VBQ2IsOERBQUNFO2tFQUFFOzs7Ozs7a0VBQ0gsOERBQUNBO2tFQUFFOzs7Ozs7a0VBQ0gsOERBQUNBO2tFQUFFOzs7Ozs7a0VBQ0gsOERBQUNBO2tFQUFFOzs7Ozs7Ozs7Ozs7MERBRUwsOERBQUNEO2dEQUFJRCxXQUFVOztrRUFDYiw4REFBQ0s7d0RBQ0NMLFdBQVU7d0RBQ1ZKLE9BQU07Ozs7OztrRUFFUiw4REFBQ2E7a0VBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXMUI7R0EvRHdCbEI7O1FBR0RKLG9EQUFXQTtRQUNmRCxvREFBV0E7OztLQUpOSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcGFnZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tICcuL0dsb2JhbFJlZHV4L3N0b3JlJ1xuaW1wb3J0IFJlc2VydmF0aW9uQ2FyZCBmcm9tICcuL2NvbXBvbmVudHMvUmVzZXJ2YXRpb25DYXJkJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYWRkUmVzZXJ2YXRpb24gfSBmcm9tICcuL0dsb2JhbFJlZHV4L2ZlYXR1cmVzL3Jlc2VydmF0aW9uU2xpY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IFtyZXNlcnZhdGlvbk5hbWVJbnB1dCwgc2V0UmVzZXJ2YXRpb25OYW1lSW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IHJlc2VydmF0aW9ucyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5yZXNlcnZhdGlvbnMudmFsdWUpO1xuICBjb25zdCBEaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgY29uc3QgaGFuZGxlSW5wdXQgPSAoKSA9PntcblxuICAgIGlmKCFyZXNlcnZhdGlvbk5hbWVJbnB1dCkgcmV0dXJuO1xuICAgIERpc3BhdGNoKGFkZFJlc2VydmF0aW9uKHJlc2VydmF0aW9uTmFtZUlucHV0KSk7XG4gICAgc2V0UmVzZXJ2YXRpb25OYW1lSW5wdXQoXCJcIik7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgdGV4dC1jZW50ZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNCBmcy0zIGJvcmRlci1lbmQgYm9yZGVyLXNlY29uZGFyeSc+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9Jyc+UmVzZXJ2YXRpb24gQ29udGFpbmVyPC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZnMtNSc+XG4gICAgICAgICAgICAgICAge3Jlc2VydmF0aW9ucy5tYXAobmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8UmVzZXJ2YXRpb25DYXJkIG5hbWU9e25hbWV9IC8+XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTUgZnMtNVwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctNTAnXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Jlc2VydmF0aW9uTmFtZUlucHV0fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmVzZXJ2YXRpb25OYW1lSW5wdXQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUlucHV0fSA+QWRkPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTggZnMtNSAnPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmcy0yJz5jdXN0b21lciBmb29kPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NoYWRvdy1zbSBwLTMgbWItNSBiZy13aGl0ZSByb3VuZGVkJz5cbiAgICAgICAgICAgICAgPGgzPnN1am9uPC9oMz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2Vlbic+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBmbGV4LXdyYXAgZ2FwLTMnPlxuICAgICAgICAgICAgICAgICAgPHA+QmVlZiBCaXJpeWFuaSw8L3A+XG4gICAgICAgICAgICAgICAgICA8cD5Ecmluayw8L3A+XG4gICAgICAgICAgICAgICAgICA8cD5CdXJnZXIsPC9wPlxuICAgICAgICAgICAgICAgICAgPHA+Qm9yaGFuaTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZW5kXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTI1J1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInR5cGluZ1wiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5BZGQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9tYWluPlxuICApXG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsIlJlc2VydmF0aW9uQ2FyZCIsInVzZVN0YXRlIiwiYWRkUmVzZXJ2YXRpb24iLCJIb21lIiwicmVzZXJ2YXRpb25OYW1lSW5wdXQiLCJzZXRSZXNlcnZhdGlvbk5hbWVJbnB1dCIsInJlc2VydmF0aW9ucyIsInN0YXRlIiwidmFsdWUiLCJEaXNwYXRjaCIsImhhbmRsZUlucHV0IiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsInAiLCJtYXAiLCJuYW1lIiwiaW5wdXQiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwiaDMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});