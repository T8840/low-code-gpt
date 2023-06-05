"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/getNftsForOwner";
exports.ids = ["pages/api/getNftsForOwner"];
exports.modules = {

/***/ "alchemy-sdk":
/*!******************************!*\
  !*** external "alchemy-sdk" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("alchemy-sdk");

/***/ }),

/***/ "(api)/./pages/api/getNftsForOwner.js":
/*!**************************************!*\
  !*** ./pages/api/getNftsForOwner.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var alchemy_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alchemy-sdk */ \"alchemy-sdk\");\n/* harmony import */ var alchemy_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(alchemy_sdk__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const { address , pageSize , chain , excludeFilter , pageKey  } = JSON.parse(req.body);\n    console.log(chain);\n    if (req.method !== \"POST\") {\n        res.status(405).send({\n            message: \"Only POST requests allowed\"\n        });\n        return;\n    }\n    const settings = {\n        apiKey: process.env.ALCHEMY_API_KEY,\n        network: alchemy_sdk__WEBPACK_IMPORTED_MODULE_0__.Network[chain]\n    };\n    const alchemy = new alchemy_sdk__WEBPACK_IMPORTED_MODULE_0__.Alchemy(settings);\n    try {\n        const nfts = await alchemy.nft.getNftsForOwner(address, {\n            pageSize: pageSize ? pageSize : 100,\n            excludeFilters: excludeFilter && [\n                alchemy_sdk__WEBPACK_IMPORTED_MODULE_0__.NftFilters.SPAM\n            ],\n            pageKey: pageKey ? pageKey : \"\"\n        });\n        const formattedNfts = nfts.ownedNfts.map((nft)=>{\n            const { contract , title , tokenType , tokenId , description , media  } = nft;\n            return {\n                contract: contract.address,\n                symbol: contract.symbol,\n                collectionName: contract.openSea?.collectionName,\n                media: media[0]?.gateway ? media[0]?.gateway : \"https://via.placeholder.com/500\",\n                verified: contract.openSea?.safelistRequestStatus,\n                tokenType,\n                tokenId,\n                title,\n                description\n            };\n        });\n        res.status(200).json({\n            nfts: formattedNfts,\n            pageKey: nfts.pageKey\n        });\n    } catch (e) {\n        console.warn(e);\n        res.status(500).send({\n            message: \"something went wrong, check the log in your terminal\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0TmZ0c0Zvck93bmVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyRDtBQUU1QyxlQUFlRyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxNQUFNLEVBQUVDLFFBQU8sRUFBRUMsU0FBUSxFQUFFQyxNQUFLLEVBQUVDLGNBQWEsRUFBRUMsUUFBTyxFQUFFLEdBQUdDLEtBQUtDLEtBQUssQ0FDckVSLElBQUlTLElBQUk7SUFFVkMsUUFBUUMsR0FBRyxDQUFDUDtJQUNaLElBQUlKLElBQUlZLE1BQU0sS0FBSyxRQUFRO1FBQ3pCWCxJQUFJWSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBNkI7UUFDN0Q7SUFDRixDQUFDO0lBRUQsTUFBTUMsV0FBVztRQUNmQyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGVBQWU7UUFDbkNDLFNBQVN6QixnREFBTyxDQUFDUSxNQUFNO0lBQ3pCO0lBRUEsTUFBTWtCLFVBQVUsSUFBSXpCLGdEQUFPQSxDQUFDbUI7SUFFNUIsSUFBSTtRQUNGLE1BQU1PLE9BQU8sTUFBTUQsUUFBUUUsR0FBRyxDQUFDQyxlQUFlLENBQUN2QixTQUFTO1lBQ3REQyxVQUFVQSxXQUFXQSxXQUFXLEdBQUc7WUFDbkN1QixnQkFBZ0JyQixpQkFBaUI7Z0JBQUNQLHdEQUFlO2FBQUM7WUFDbERRLFNBQVNBLFVBQVVBLFVBQVUsRUFBRTtRQUNqQztRQUVBLE1BQU1zQixnQkFBZ0JMLEtBQUtNLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLENBQUNOLE1BQVE7WUFDaEQsTUFBTSxFQUFFTyxTQUFRLEVBQUVDLE1BQUssRUFBRUMsVUFBUyxFQUFFQyxRQUFPLEVBQUVDLFlBQVcsRUFBRUMsTUFBSyxFQUFFLEdBQUdaO1lBRXBFLE9BQU87Z0JBQ0xPLFVBQVVBLFNBQVM3QixPQUFPO2dCQUMxQm1DLFFBQVFOLFNBQVNNLE1BQU07Z0JBQ3ZCQyxnQkFBZ0JQLFNBQVNRLE9BQU8sRUFBRUQ7Z0JBQ2xDRixPQUFPQSxLQUFLLENBQUMsRUFBRSxFQUFFSSxVQUNiSixLQUFLLENBQUMsRUFBRSxFQUFFSSxVQUNWLGlDQUFpQztnQkFDckNDLFVBQVVWLFNBQVNRLE9BQU8sRUFBRUc7Z0JBQzVCVDtnQkFDQUM7Z0JBQ0FGO2dCQUNBRztZQUNGO1FBQ0Y7UUFFQWxDLElBQUlZLE1BQU0sQ0FBQyxLQUFLOEIsSUFBSSxDQUFDO1lBQUVwQixNQUFNSztZQUFldEIsU0FBU2lCLEtBQUtqQixPQUFPO1FBQUM7SUFDcEUsRUFBRSxPQUFPc0MsR0FBRztRQUNWbEMsUUFBUW1DLElBQUksQ0FBQ0Q7UUFDYjNDLElBQUlZLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFDbkJDLFNBQVM7UUFDWDtJQUNGO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWNyZWF0ZS13ZWIzLWRhcHAvLi9wYWdlcy9hcGkvZ2V0TmZ0c0Zvck93bmVyLmpzP2Y0NjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV0d29yaywgQWxjaGVteSwgTmZ0RmlsdGVycyB9IGZyb20gXCJhbGNoZW15LXNka1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGNvbnN0IHsgYWRkcmVzcywgcGFnZVNpemUsIGNoYWluLCBleGNsdWRlRmlsdGVyLCBwYWdlS2V5IH0gPSBKU09OLnBhcnNlKFxyXG4gICAgcmVxLmJvZHlcclxuICApO1xyXG4gIGNvbnNvbGUubG9nKGNoYWluKTtcclxuICBpZiAocmVxLm1ldGhvZCAhPT0gXCJQT1NUXCIpIHtcclxuICAgIHJlcy5zdGF0dXMoNDA1KS5zZW5kKHsgbWVzc2FnZTogXCJPbmx5IFBPU1QgcmVxdWVzdHMgYWxsb3dlZFwiIH0pO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICBhcGlLZXk6IHByb2Nlc3MuZW52LkFMQ0hFTVlfQVBJX0tFWSxcclxuICAgIG5ldHdvcms6IE5ldHdvcmtbY2hhaW5dLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFsY2hlbXkgPSBuZXcgQWxjaGVteShzZXR0aW5ncyk7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBuZnRzID0gYXdhaXQgYWxjaGVteS5uZnQuZ2V0TmZ0c0Zvck93bmVyKGFkZHJlc3MsIHtcclxuICAgICAgcGFnZVNpemU6IHBhZ2VTaXplID8gcGFnZVNpemUgOiAxMDAsXHJcbiAgICAgIGV4Y2x1ZGVGaWx0ZXJzOiBleGNsdWRlRmlsdGVyICYmIFtOZnRGaWx0ZXJzLlNQQU1dLFxyXG4gICAgICBwYWdlS2V5OiBwYWdlS2V5ID8gcGFnZUtleSA6IFwiXCIsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBmb3JtYXR0ZWROZnRzID0gbmZ0cy5vd25lZE5mdHMubWFwKChuZnQpID0+IHtcclxuICAgICAgY29uc3QgeyBjb250cmFjdCwgdGl0bGUsIHRva2VuVHlwZSwgdG9rZW5JZCwgZGVzY3JpcHRpb24sIG1lZGlhIH0gPSBuZnQ7XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvbnRyYWN0OiBjb250cmFjdC5hZGRyZXNzLFxyXG4gICAgICAgIHN5bWJvbDogY29udHJhY3Quc3ltYm9sLFxyXG4gICAgICAgIGNvbGxlY3Rpb25OYW1lOiBjb250cmFjdC5vcGVuU2VhPy5jb2xsZWN0aW9uTmFtZSxcclxuICAgICAgICBtZWRpYTogbWVkaWFbMF0/LmdhdGV3YXlcclxuICAgICAgICAgID8gbWVkaWFbMF0/LmdhdGV3YXlcclxuICAgICAgICAgIDogXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNTAwXCIsXHJcbiAgICAgICAgdmVyaWZpZWQ6IGNvbnRyYWN0Lm9wZW5TZWE/LnNhZmVsaXN0UmVxdWVzdFN0YXR1cyxcclxuICAgICAgICB0b2tlblR5cGUsXHJcbiAgICAgICAgdG9rZW5JZCxcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbmZ0czogZm9ybWF0dGVkTmZ0cywgcGFnZUtleTogbmZ0cy5wYWdlS2V5IH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUud2FybihlKTtcclxuICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKHtcclxuICAgICAgbWVzc2FnZTogXCJzb21ldGhpbmcgd2VudCB3cm9uZywgY2hlY2sgdGhlIGxvZyBpbiB5b3VyIHRlcm1pbmFsXCIsXHJcbiAgICB9KTtcclxuICB9XHJcbn0iXSwibmFtZXMiOlsiTmV0d29yayIsIkFsY2hlbXkiLCJOZnRGaWx0ZXJzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImFkZHJlc3MiLCJwYWdlU2l6ZSIsImNoYWluIiwiZXhjbHVkZUZpbHRlciIsInBhZ2VLZXkiLCJKU09OIiwicGFyc2UiLCJib2R5IiwiY29uc29sZSIsImxvZyIsIm1ldGhvZCIsInN0YXR1cyIsInNlbmQiLCJtZXNzYWdlIiwic2V0dGluZ3MiLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiQUxDSEVNWV9BUElfS0VZIiwibmV0d29yayIsImFsY2hlbXkiLCJuZnRzIiwibmZ0IiwiZ2V0TmZ0c0Zvck93bmVyIiwiZXhjbHVkZUZpbHRlcnMiLCJTUEFNIiwiZm9ybWF0dGVkTmZ0cyIsIm93bmVkTmZ0cyIsIm1hcCIsImNvbnRyYWN0IiwidGl0bGUiLCJ0b2tlblR5cGUiLCJ0b2tlbklkIiwiZGVzY3JpcHRpb24iLCJtZWRpYSIsInN5bWJvbCIsImNvbGxlY3Rpb25OYW1lIiwib3BlblNlYSIsImdhdGV3YXkiLCJ2ZXJpZmllZCIsInNhZmVsaXN0UmVxdWVzdFN0YXR1cyIsImpzb24iLCJlIiwid2FybiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/getNftsForOwner.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getNftsForOwner.js"));
module.exports = __webpack_exports__;

})();