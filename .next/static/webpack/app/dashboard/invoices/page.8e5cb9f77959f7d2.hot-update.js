"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/invoices/page",{

/***/ "(app-pages-browser)/./app/ui/search.tsx":
/*!***************************!*\
  !*** ./app/ui/search.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Search; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_MagnifyingGlassIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=MagnifyingGlassIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/MagnifyingGlassIcon.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var use_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-debounce */ \"(app-pages-browser)/./node_modules/use-debounce/dist/index.module.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Search(param) {\n    let { placeholder } = param;\n    var _searchParams_get;\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams)();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname)();\n    const { replace } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleSearch = (0,use_debounce__WEBPACK_IMPORTED_MODULE_2__.useDebouncedCallback)((term)=>{\n        console.log(\"Searching... \".concat(term));\n        const params = new URLSearchParams(searchParams);\n        params.set(\"page\", \"1\");\n        if (term) {\n            params.set(\"query\", term);\n        } else {\n            params.delete(\"query\");\n        }\n        replace(\"\".concat(pathname, \"?\").concat(params.toString()));\n    }, 300);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative flex flex-1 flex-shrink-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"search\",\n                className: \"sr-only\",\n                children: \"Search\"\n            }, void 0, false, {\n                fileName: \"/Users/keyman.k.li/Git_SRC/nextjs-dashboard/app/ui/search.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500\",\n                placeholder: placeholder,\n                onChange: (e)=>{\n                    handleSearch(e.target.value);\n                },\n                defaultValue: (_searchParams_get = searchParams.get(\"query\")) === null || _searchParams_get === void 0 ? void 0 : _searchParams_get.toString()\n            }, void 0, false, {\n                fileName: \"/Users/keyman.k.li/Git_SRC/nextjs-dashboard/app/ui/search.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MagnifyingGlassIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                className: \"absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900\"\n            }, void 0, false, {\n                fileName: \"/Users/keyman.k.li/Git_SRC/nextjs-dashboard/app/ui/search.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/keyman.k.li/Git_SRC/nextjs-dashboard/app/ui/search.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(Search, \"vCAeG7Dxg1cijEEWRCJvC0O/qwo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams,\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname,\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        use_debounce__WEBPACK_IMPORTED_MODULE_2__.useDebouncedCallback\n    ];\n});\n_c = Search;\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91aS9zZWFyY2gudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRWtFO0FBQ1E7QUFDdEI7QUFFckMsU0FBU0ssT0FBTyxLQUF3QztRQUF4QyxFQUFFQyxXQUFXLEVBQTJCLEdBQXhDO1FBNEJUQzs7SUEzQnBCLE1BQU1BLGVBQWVOLGdFQUFlQTtJQUNwQyxNQUFNTyxXQUFXTiw0REFBV0E7SUFDNUIsTUFBTSxFQUFFTyxPQUFPLEVBQUUsR0FBR04sMERBQVNBO0lBRTdCLE1BQU1PLGVBQWVOLGtFQUFvQkEsQ0FBQyxDQUFDTztRQUN6Q0MsUUFBUUMsR0FBRyxDQUFDLGdCQUFxQixPQUFMRjtRQUU1QixNQUFNRyxTQUFTLElBQUlDLGdCQUFnQlI7UUFDbkNPLE9BQU9FLEdBQUcsQ0FBQyxRQUFRO1FBQ25CLElBQUlMLE1BQU07WUFDUkcsT0FBT0UsR0FBRyxDQUFDLFNBQVNMO1FBQ3RCLE9BQU87WUFDTEcsT0FBT0csTUFBTSxDQUFDO1FBQ2hCO1FBQ0FSLFFBQVEsR0FBZUssT0FBWk4sVUFBUyxLQUFxQixPQUFsQk0sT0FBT0ksUUFBUTtJQUN4QyxHQUFHO0lBQ0gscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBTUMsU0FBUTtnQkFBU0YsV0FBVTswQkFBVTs7Ozs7OzBCQUc1Qyw4REFBQ0c7Z0JBQ0NILFdBQVU7Z0JBQ1ZkLGFBQWFBO2dCQUNia0IsVUFBVSxDQUFDQztvQkFDVGYsYUFBYWUsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO2dCQUM3QjtnQkFDQUMsWUFBWSxHQUFFckIsb0JBQUFBLGFBQWFzQixHQUFHLENBQUMsc0JBQWpCdEIsd0NBQUFBLGtCQUEyQlcsUUFBUTs7Ozs7OzBCQUVuRCw4REFBQ2xCLDZHQUFtQkE7Z0JBQUNvQixXQUFVOzs7Ozs7Ozs7Ozs7QUFHckM7R0FqQ3dCZjs7UUFDREosNERBQWVBO1FBQ25CQyx3REFBV0E7UUFDUkMsc0RBQVNBO1FBRVJDLDhEQUFvQkE7OztLQUxuQkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3VpL3NlYXJjaC50c3g/MWExOSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IE1hZ25pZnlpbmdHbGFzc0ljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0LzI0L291dGxpbmUnO1xuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zLCB1c2VQYXRobmFtZSwgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IHVzZURlYm91bmNlZENhbGxiYWNrIH0gZnJvbSAndXNlLWRlYm91bmNlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoKHsgcGxhY2Vob2xkZXIgfTogeyBwbGFjZWhvbGRlcjogc3RyaW5nIH0pIHtcbiAgY29uc3Qgc2VhcmNoUGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKCk7XG4gIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKTtcbiAgY29uc3QgeyByZXBsYWNlIH0gPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSB1c2VEZWJvdW5jZWRDYWxsYmFjaygodGVybSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGBTZWFyY2hpbmcuLi4gJHt0ZXJtfWApO1xuICBcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHNlYXJjaFBhcmFtcyk7XG4gICAgcGFyYW1zLnNldCgncGFnZScsICcxJyk7XG4gICAgaWYgKHRlcm0pIHtcbiAgICAgIHBhcmFtcy5zZXQoJ3F1ZXJ5JywgdGVybSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmFtcy5kZWxldGUoJ3F1ZXJ5Jyk7XG4gICAgfVxuICAgIHJlcGxhY2UoYCR7cGF0aG5hbWV9PyR7cGFyYW1zLnRvU3RyaW5nKCl9YCk7XG4gIH0sIDMwMCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGZsZXgtMSBmbGV4LXNocmluay0wXCI+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cInNlYXJjaFwiIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5cbiAgICAgICAgU2VhcmNoXG4gICAgICA8L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIGNsYXNzTmFtZT1cInBlZXIgYmxvY2sgdy1mdWxsIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBweS1bOXB4XSBwbC0xMCB0ZXh0LXNtIG91dGxpbmUtMiBwbGFjZWhvbGRlcjp0ZXh0LWdyYXktNTAwXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICBoYW5kbGVTZWFyY2goZS50YXJnZXQudmFsdWUpO1xuICAgICAgICB9fVxuICAgICAgICBkZWZhdWx0VmFsdWU9e3NlYXJjaFBhcmFtcy5nZXQoJ3F1ZXJ5Jyk/LnRvU3RyaW5nKCl9XG4gICAgICAvPlxuICAgICAgPE1hZ25pZnlpbmdHbGFzc0ljb24gY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0zIHRvcC0xLzIgaC1bMThweF0gdy1bMThweF0gLXRyYW5zbGF0ZS15LTEvMiB0ZXh0LWdyYXktNTAwIHBlZXItZm9jdXM6dGV4dC1ncmF5LTkwMFwiIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTWFnbmlmeWluZ0dsYXNzSWNvbiIsInVzZVNlYXJjaFBhcmFtcyIsInVzZVBhdGhuYW1lIiwidXNlUm91dGVyIiwidXNlRGVib3VuY2VkQ2FsbGJhY2siLCJTZWFyY2giLCJwbGFjZWhvbGRlciIsInNlYXJjaFBhcmFtcyIsInBhdGhuYW1lIiwicmVwbGFjZSIsImhhbmRsZVNlYXJjaCIsInRlcm0iLCJjb25zb2xlIiwibG9nIiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwic2V0IiwiZGVsZXRlIiwidG9TdHJpbmciLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZGVmYXVsdFZhbHVlIiwiZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/ui/search.tsx\n"));

/***/ })

});