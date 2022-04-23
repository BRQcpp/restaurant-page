/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact-page.js":
/*!*****************************!*\
  !*** ./src/contact-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactPage": () => (/* binding */ contactPage)
/* harmony export */ });
function contactPage() 
{
    let content = document.querySelector('.content');
    content.innerHTML = '';

    let header = document.createElement('div');
    header.classList.add('header');
    header.innerText = 'Restaurant contact';

    let mainContent = document.createElement('div');
    mainContent.classList.add('main-content');

    let contact = document.createElement('div');
    contact.classList.add('contact');
    contact.innerText = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum sed nisi eget mattis. In viverra, arcu at tempor malesuada, arcu sem tincidunt turpis, vel dignissimturpis lectus ornare turpis. Pellentesque condimentum, tellus vitae consectetur vestibulum, magna mi scelerisque';

    mainContent.appendChild(contact);
    content.appendChild(header);
    content.appendChild(mainContent);

    let body = document.querySelector('body');
    body.appendChild(content);
}




/***/ }),

/***/ "./src/main-page.js":
/*!**************************!*\
  !*** ./src/main-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainPage": () => (/* binding */ mainPage)
/* harmony export */ });
function mainPage() 
{
    let content = document.querySelector('.content');
    content.innerHTML = '';

    let header = document.createElement('div');
    header.classList.add('header');
    header.innerText = 'Restaurant Page';

    let mainContent = document.createElement('div');
    mainContent.classList.add('main-content');

    let photo = document.createElement('div');
    photo.classList.add('photo');

    let photoImg = document.createElement('img'); 
    photoImg.setAttribute('src', '../graphics/restaurant.jpg');
    photoImg.setAttribute('alt', 'image of restaurant');

    let description = document.createElement('div');
    description.classList.add('description');
    description.innerText = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum sed nisi eget mattis. In viverra, arcu at tempor malesuada, arcu sem tincidunt turpis, vel dignissimturpis lectus ornare turpis. Pellentesque condimentum, tellus vitae consectetur vestibulum, magna mi scelerisque';

    photo.appendChild(photoImg);
    mainContent.appendChild(photo);
    mainContent.appendChild(description);
    content.appendChild(header);
    content.appendChild(mainContent);
}




/***/ }),

/***/ "./src/menu-page.js":
/*!**************************!*\
  !*** ./src/menu-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuPage": () => (/* binding */ menuPage)
/* harmony export */ });
function menuPage() 
{
    let content = document.querySelector('.content');
    content.innerHTML = '';

    let header = document.createElement('div');
    header.classList.add('header');
    header.innerText = 'Restaurant Menu';

    let mainContent = document.createElement('div');
    mainContent.classList.add('main-content');

    let menuPos = document.createElement('div');
    menuPos.classList.add('menu-pos');

    let menuPos2 = document.createElement('div');
    menuPos2.classList.add('menu-pos');

    let photo = document.createElement('div');
    photo.classList.add('photo');

    let photoImg = document.createElement('img'); 
    photoImg.setAttribute('src', '../graphics/food1.jpg');
    photoImg.setAttribute('alt', 'image of restaurant');

    let description = document.createElement('div');
    description.classList.add('description');
    description.innerText = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum sed nisi eget mattis. In viverra, arcu at tempor malesuada, arcu sem tincidunt turpis, vel dignissimturpis lectus ornare turpis. Pellentesque condimentum, tellus vitae consectetur vestibulum, magna mi scelerisque';
   
    let photo2 = document.createElement('div');
    photo2.classList.add('photo');

    let photoImg2 = document.createElement('img'); 
    photoImg2.setAttribute('src', '../graphics/food2.jpg');
    photoImg2.setAttribute('alt', 'image of restaurant');

    photo.appendChild(photoImg);
    menuPos.appendChild(photo);
    menuPos.appendChild(description);
    mainContent.appendChild(menuPos);
    photo2.appendChild(photoImg2);
    menuPos2.appendChild(photo2);
    menuPos2.appendChild(description);
    mainContent.appendChild(menuPos);
    mainContent.appendChild(menuPos2);
    content.appendChild(header);
    content.appendChild(mainContent);

    let body = document.querySelector('body');
    body.appendChild(content);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page.js */ "./src/main-page.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-page */ "./src/menu-page.js");
/* harmony import */ var _contact_page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-page.js */ "./src/contact-page.js");




(0,_main_page_js__WEBPACK_IMPORTED_MODULE_0__.mainPage)();

document.querySelector('#main').addEventListener('click', () => { (0,_main_page_js__WEBPACK_IMPORTED_MODULE_0__.mainPage)() })
document.querySelector('#menu').addEventListener('click', () => { ;(0,_menu_page__WEBPACK_IMPORTED_MODULE_1__.menuPage)() })
document.querySelector('#contact').addEventListener('click', () => { ;(0,_contact_page_js__WEBPACK_IMPORTED_MODULE_2__.contactPage)() })
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVCTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7O1VDbERBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ04wQztBQUNIO0FBQ1M7O0FBRWhELHVEQUFROztBQUVSLGtFQUFrRSx1REFBUSxJQUFJO0FBQzlFLGtFQUFrRSxxREFBUSxJQUFJO0FBQzlFLHFFQUFxRSw4REFBVyxJQUFJLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tYWluLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUtcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNvbnRhY3RQYWdlKCkgXG57XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgIGhlYWRlci5pbm5lclRleHQgPSAnUmVzdGF1cmFudCBjb250YWN0JztcblxuICAgIGxldCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5Db250ZW50LmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGVudCcpO1xuXG4gICAgbGV0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcbiAgICBjb250YWN0LmlubmVyVGV4dCA9ICcgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWVuZWFuIGRpY3R1bSBzZWQgbmlzaSBlZ2V0IG1hdHRpcy4gSW4gdml2ZXJyYSwgYXJjdSBhdCB0ZW1wb3IgbWFsZXN1YWRhLCBhcmN1IHNlbSB0aW5jaWR1bnQgdHVycGlzLCB2ZWwgZGlnbmlzc2ltdHVycGlzIGxlY3R1cyBvcm5hcmUgdHVycGlzLiBQZWxsZW50ZXNxdWUgY29uZGltZW50dW0sIHRlbGx1cyB2aXRhZSBjb25zZWN0ZXR1ciB2ZXN0aWJ1bHVtLCBtYWduYSBtaSBzY2VsZXJpc3F1ZSc7XG5cbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChjb250YWN0KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluQ29udGVudCk7XG5cbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xufVxuXG5cbiIsImV4cG9ydCBmdW5jdGlvbiBtYWluUGFnZSgpIFxue1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICBoZWFkZXIuaW5uZXJUZXh0ID0gJ1Jlc3RhdXJhbnQgUGFnZSc7XG5cbiAgICBsZXQgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluQ29udGVudC5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRlbnQnKTtcblxuICAgIGxldCBwaG90byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBob3RvLmNsYXNzTGlzdC5hZGQoJ3Bob3RvJyk7XG5cbiAgICBsZXQgcGhvdG9JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTsgXG4gICAgcGhvdG9JbWcuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vZ3JhcGhpY3MvcmVzdGF1cmFudC5qcGcnKTtcbiAgICBwaG90b0ltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdpbWFnZSBvZiByZXN0YXVyYW50Jyk7XG5cbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9ICcgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWVuZWFuIGRpY3R1bSBzZWQgbmlzaSBlZ2V0IG1hdHRpcy4gSW4gdml2ZXJyYSwgYXJjdSBhdCB0ZW1wb3IgbWFsZXN1YWRhLCBhcmN1IHNlbSB0aW5jaWR1bnQgdHVycGlzLCB2ZWwgZGlnbmlzc2ltdHVycGlzIGxlY3R1cyBvcm5hcmUgdHVycGlzLiBQZWxsZW50ZXNxdWUgY29uZGltZW50dW0sIHRlbGx1cyB2aXRhZSBjb25zZWN0ZXR1ciB2ZXN0aWJ1bHVtLCBtYWduYSBtaSBzY2VsZXJpc3F1ZSc7XG5cbiAgICBwaG90by5hcHBlbmRDaGlsZChwaG90b0ltZyk7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQocGhvdG8pO1xuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluQ29udGVudCk7XG59XG5cblxuIiwiZXhwb3J0IGZ1bmN0aW9uIG1lbnVQYWdlKCkgXG57XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgIGhlYWRlci5pbm5lclRleHQgPSAnUmVzdGF1cmFudCBNZW51JztcblxuICAgIGxldCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5Db250ZW50LmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGVudCcpO1xuXG4gICAgbGV0IG1lbnVQb3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51UG9zLmNsYXNzTGlzdC5hZGQoJ21lbnUtcG9zJyk7XG5cbiAgICBsZXQgbWVudVBvczIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51UG9zMi5jbGFzc0xpc3QuYWRkKCdtZW51LXBvcycpO1xuXG4gICAgbGV0IHBob3RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGhvdG8uY2xhc3NMaXN0LmFkZCgncGhvdG8nKTtcblxuICAgIGxldCBwaG90b0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpOyBcbiAgICBwaG90b0ltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9ncmFwaGljcy9mb29kMS5qcGcnKTtcbiAgICBwaG90b0ltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdpbWFnZSBvZiByZXN0YXVyYW50Jyk7XG5cbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9ICcgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWVuZWFuIGRpY3R1bSBzZWQgbmlzaSBlZ2V0IG1hdHRpcy4gSW4gdml2ZXJyYSwgYXJjdSBhdCB0ZW1wb3IgbWFsZXN1YWRhLCBhcmN1IHNlbSB0aW5jaWR1bnQgdHVycGlzLCB2ZWwgZGlnbmlzc2ltdHVycGlzIGxlY3R1cyBvcm5hcmUgdHVycGlzLiBQZWxsZW50ZXNxdWUgY29uZGltZW50dW0sIHRlbGx1cyB2aXRhZSBjb25zZWN0ZXR1ciB2ZXN0aWJ1bHVtLCBtYWduYSBtaSBzY2VsZXJpc3F1ZSc7XG4gICBcbiAgICBsZXQgcGhvdG8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGhvdG8yLmNsYXNzTGlzdC5hZGQoJ3Bob3RvJyk7XG5cbiAgICBsZXQgcGhvdG9JbWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7IFxuICAgIHBob3RvSW1nMi5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9ncmFwaGljcy9mb29kMi5qcGcnKTtcbiAgICBwaG90b0ltZzIuc2V0QXR0cmlidXRlKCdhbHQnLCAnaW1hZ2Ugb2YgcmVzdGF1cmFudCcpO1xuXG4gICAgcGhvdG8uYXBwZW5kQ2hpbGQocGhvdG9JbWcpO1xuICAgIG1lbnVQb3MuYXBwZW5kQ2hpbGQocGhvdG8pO1xuICAgIG1lbnVQb3MuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG1lbnVQb3MpO1xuICAgIHBob3RvMi5hcHBlbmRDaGlsZChwaG90b0ltZzIpO1xuICAgIG1lbnVQb3MyLmFwcGVuZENoaWxkKHBob3RvMik7XG4gICAgbWVudVBvczIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG1lbnVQb3MpO1xuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG1lbnVQb3MyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluQ29udGVudCk7XG5cbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbWFpblBhZ2UgfSBmcm9tIFwiLi9tYWluLXBhZ2UuanNcIjtcbmltcG9ydCB7IG1lbnVQYWdlIH0gZnJvbSBcIi4vbWVudS1wYWdlXCI7XG5pbXBvcnQgeyBjb250YWN0UGFnZSB9IGZyb20gXCIuL2NvbnRhY3QtcGFnZS5qc1wiO1xuXG5tYWluUGFnZSgpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBtYWluUGFnZSgpIH0pXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBtZW51UGFnZSgpIH0pXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBjb250YWN0UGFnZSgpIH0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9