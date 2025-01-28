/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderAbout: () => (/* binding */ renderAbout)
/* harmony export */ });
/* harmony import */ var _elements_images_images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements/images/images */ "./src/pages/elements/images/images.js");

function renderAbout() {
  const container = document.querySelector('.content--canvas');
  _elements_images_images__WEBPACK_IMPORTED_MODULE_0__.iconImage.classList.remove("icon");
  _elements_images_images__WEBPACK_IMPORTED_MODULE_0__.iconImage.classList.add("iconAbout");
  const car = document.createElement("div");
  car.classList.add("about");
  car.id = "content";
  const img = document.createElement("div");
  const text = document.createElement("div");
  text.classList.add("aboutDesc");
  const h1 = document.createElement("h1");
  h1.textContent = "Who are we?";
  const p = document.createElement("p");
  p.textContent = "SpaceBurgers™ was born in 2013 after a fruitless search for a good old-fashioned hamburger. During his days in the financial industry, Jacques traveled the world and discovered that the best food, anywhere in the world, could be found in restaurants that had a limited menu. With the hamburger being one of his favourite foods, Jacques frequented many hamburger spots during his travels. Back home in Toronto, the inability to find a well-made classic hamburger was particularly frustrating to him. Despite Toronto being a hub for restaurants, and hamburgers, he simply could not find the delicious old-fashioned fresh burger he was seeking. It felt as though restaurants were trying too hard to be different and innovative, overcomplicating a simple concept.";
  text.append(h1, p);
  car.append(_elements_images_images__WEBPACK_IMPORTED_MODULE_0__.iconImage, text);
  container.appendChild(car);
}

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderContact: () => (/* binding */ renderContact)
/* harmony export */ });
/* harmony import */ var _elements_images_images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements/images/images */ "./src/pages/elements/images/images.js");

function renderContact() {
  const container = document.querySelector('.content--canvas');
  const car = document.createElement("div");
  car.classList.add("contact");
  car.id = "content";
  let img;
  const form = document.createElement("form");
  form.classList.add("form");
  function createInput(placeholder, elementType, inputType) {
    var input = document.createElement(elementType);
    if (elementType == "input") {
      input.type = inputType;
      input.className = "input";
    } else {
      input.className = "textarea";
    }
    input.placeholder = placeholder;
    form.appendChild(input);
  }
  createInput("Name", "input", "text");
  createInput("Surame", "input", "text");
  createInput("Email", "input", "email");
  createInput("Tell us more...", "textarea", "text");
  img = _elements_images_images__WEBPACK_IMPORTED_MODULE_0__.location;
  car.append(img, form);
  container.appendChild(car);
}

/***/ }),

/***/ "./src/pages/elements/bg.js":
/*!**********************************!*\
  !*** ./src/pages/elements/bg.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderBg: () => (/* binding */ renderBg)
/* harmony export */ });
function renderBg() {
  const STAR_COLOR = '#fff';
  const STAR_SIZE = 3;
  const STAR_MIN_SCALE = 0.2;
  const OVERFLOW_THRESHOLD = 50;
  const STAR_COUNT = (window.innerWidth + window.innerHeight) / 8;
  const canvas = document.querySelector('canvas'),
    context = canvas.getContext('2d');
  let scale = 1,
    // device pixel ratio
    width,
    height;
  let stars = [];
  let pointerX, pointerY;
  let velocity = {
    x: 0,
    y: 0,
    tx: 0,
    ty: 0,
    z: 0.0005
  };
  let touchInput = false;
  generate();
  resize();
  step();
  window.onresize = resize;
  document.onmousemove = onMouseMove;
  document.ontouchmove = onTouchMove;
  document.ontouchend = onMouseLeave;
  document.onmouseleave = onMouseLeave;
  function generate() {
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: 0,
        y: 0,
        z: STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE)
      });
    }
  }
  function placeStar(star) {
    star.x = Math.random() * width;
    star.y = Math.random() * height;
  }
  function recycleStar(star) {
    let direction = 'z';
    let vx = Math.abs(velocity.x),
      vy = Math.abs(velocity.y);
    if (vx > 1 || vy > 1) {
      let axis;
      if (vx > vy) {
        axis = Math.random() < vx / (vx + vy) ? 'h' : 'v';
      } else {
        axis = Math.random() < vy / (vx + vy) ? 'v' : 'h';
      }
      if (axis === 'h') {
        direction = velocity.x > 0 ? 'l' : 'r';
      } else {
        direction = velocity.y > 0 ? 't' : 'b';
      }
    }
    star.z = STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE);
    if (direction === 'z') {
      star.z = 0.1;
      star.x = Math.random() * width;
      star.y = Math.random() * height;
    } else if (direction === 'l') {
      star.x = -OVERFLOW_THRESHOLD;
      star.y = height * Math.random();
    } else if (direction === 'r') {
      star.x = width + OVERFLOW_THRESHOLD;
      star.y = height * Math.random();
    } else if (direction === 't') {
      star.x = width * Math.random();
      star.y = -OVERFLOW_THRESHOLD;
    } else if (direction === 'b') {
      star.x = width * Math.random();
      star.y = height + OVERFLOW_THRESHOLD;
    }
  }
  function resize() {
    scale = window.devicePixelRatio || 1;
    width = window.innerWidth * scale;
    height = window.innerHeight * scale;
    canvas.width = width;
    canvas.height = height;
    stars.forEach(placeStar);
  }
  function step() {
    context.clearRect(0, 0, width, height);
    update();
    render();
    requestAnimationFrame(step);
  }
  function update() {
    velocity.tx *= 0.96;
    velocity.ty *= 0.96;
    velocity.x += (velocity.tx - velocity.x) * 0.8;
    velocity.y += (velocity.ty - velocity.y) * 0.8;
    stars.forEach(star => {
      star.x += velocity.x * star.z;
      star.y += velocity.y * star.z;
      star.x += (star.x - width / 2) * velocity.z * star.z;
      star.y += (star.y - height / 2) * velocity.z * star.z;
      star.z += velocity.z;

      // recycle when out of bounds
      if (star.x < -OVERFLOW_THRESHOLD || star.x > width + OVERFLOW_THRESHOLD || star.y < -OVERFLOW_THRESHOLD || star.y > height + OVERFLOW_THRESHOLD) {
        recycleStar(star);
      }
    });
  }
  function render() {
    stars.forEach(star => {
      context.beginPath();
      context.lineCap = 'round';
      context.lineWidth = STAR_SIZE * star.z * scale;
      context.globalAlpha = 0.5 + 0.5 * Math.random();
      context.strokeStyle = STAR_COLOR;
      context.beginPath();
      context.moveTo(star.x, star.y);
      var tailX = velocity.x * 2,
        tailY = velocity.y * 2;

      // stroke() wont work on an invisible line
      if (Math.abs(tailX) < 0.1) tailX = 0.5;
      if (Math.abs(tailY) < 0.1) tailY = 0.5;
      context.lineTo(star.x + tailX, star.y + tailY);
      context.stroke();
    });
  }
  function movePointer(x, y) {
    if (typeof pointerX === 'number' && typeof pointerY === 'number') {
      let ox = x - pointerX,
        oy = y - pointerY;
      velocity.tx = velocity.tx + ox / 8 * scale * (touchInput ? 1 : -1);
      velocity.ty = velocity.ty + oy / 8 * scale * (touchInput ? 1 : -1);
    }
    pointerX = x;
    pointerY = y;
  }
  function onMouseMove(event) {
    touchInput = false;
    movePointer(event.clientX, event.clientY);
  }
  function onTouchMove(event) {
    touchInput = true;
    movePointer(event.touches[0].clientX, event.touches[0].clientY, true);
    event.preventDefault();
  }
  function onMouseLeave() {
    pointerX = null;
    pointerY = null;
  }
}

/***/ }),

/***/ "./src/pages/elements/cards.js":
/*!*************************************!*\
  !*** ./src/pages/elements/cards.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createCard)
/* harmony export */ });
function createCard(imgPath, heading, text, alt) {
  let div = document.createElement("div");
  let textDiv = document.createElement("div");
  let h1 = document.createElement("h1");
  h1.textContent = heading;
  let p = document.createElement("p");
  p.textContent = text;
  textDiv.append(h1, p);
  textDiv.classList.add("description");
  let img = document.createElement('img');
  img.src = imgPath;
  img.alt = alt;
  div.append(img, textDiv);
  div.classList.add("card");
  return div;
}

/***/ }),

/***/ "./src/pages/elements/carousel.js":
/*!****************************************!*\
  !*** ./src/pages/elements/carousel.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   carouselLogic: () => (/* binding */ carouselLogic)
/* harmony export */ });
function carouselLogic(leftBtn, rightBtn) {
  const prev = leftBtn;
  const next = rightBtn;
  const wrap = document.querySelector('.img-wrap');
  const imgs = document.querySelectorAll('.img-wrap .card');
  let idx = 0;
  function showImg() {
    if (idx >= imgs.length) idx = 0;
    if (idx < 0) idx = imgs.length - 1;
    wrap.style.transform = `translateX(-${idx * 100}%)`;
  }
  next.addEventListener('click', () => {
    idx++;
    showImg();
  });
  prev.addEventListener('click', () => {
    idx--;
    showImg();
  });
  setInterval(() => {
    idx++;
    showImg();
  }, 3000);
  showImg();
}


/***/ }),

/***/ "./src/pages/elements/header.js":
/*!**************************************!*\
  !*** ./src/pages/elements/header.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderHeader: () => (/* binding */ renderHeader)
/* harmony export */ });
/* harmony import */ var _images_images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/images */ "./src/pages/elements/images/images.js");

function renderHeader() {
  const container = document.querySelector('.content--canvas');
  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const buttonMain = document.createElement("button");
  const buttonAbout = document.createElement("button");
  const buttonContact = document.createElement("button");
  buttonMain.innerText = "Main";
  buttonAbout.innerText = "About";
  buttonContact.innerText = "Contact";
  buttonMain.id = "Main";
  buttonAbout.id = "About";
  buttonContact.id = "Contact";
  nav.append(buttonMain, buttonAbout, buttonContact);
  header.append(nav);
  header.append(_images_images__WEBPACK_IMPORTED_MODULE_0__.iconImage);
  container.appendChild(header);
}

/***/ }),

/***/ "./src/pages/elements/images/images.js":
/*!*********************************************!*\
  !*** ./src/pages/elements/images/images.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   burger1: () => (/* reexport default export from named module */ _chicken_png__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   burger2: () => (/* reexport default export from named module */ _hamburger_png__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   burger3: () => (/* reexport default export from named module */ _mixed_png__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   iconImage: () => (/* binding */ iconImage),
/* harmony export */   location: () => (/* binding */ location)
/* harmony export */ });
/* harmony import */ var _icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon.svg */ "./src/pages/elements/images/icon.svg");
/* harmony import */ var _chicken_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chicken.png */ "./src/pages/elements/images/chicken.png");
/* harmony import */ var _hamburger_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hamburger.png */ "./src/pages/elements/images/hamburger.png");
/* harmony import */ var _mixed_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mixed.png */ "./src/pages/elements/images/mixed.png");
/* harmony import */ var _location_PNG__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./location.PNG */ "./src/pages/elements/images/location.PNG");

const iconImage = document.createElement("img");
iconImage.src = _icon_svg__WEBPACK_IMPORTED_MODULE_0__;
iconImage.classList.add("icon");




const location = document.createElement("img");
location.src = _location_PNG__WEBPACK_IMPORTED_MODULE_4__;
location.classList.add("location");


/***/ }),

/***/ "./src/pages/main.js":
/*!***************************!*\
  !*** ./src/pages/main.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderMain: () => (/* binding */ renderMain)
/* harmony export */ });
/* harmony import */ var _elements_carousel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements/carousel.js */ "./src/pages/elements/carousel.js");
/* harmony import */ var _elements_cards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements/cards.js */ "./src/pages/elements/cards.js");
/* harmony import */ var _elements_images_images_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/images/images.js */ "./src/pages/elements/images/images.js");



function renderMain() {
  const container = document.querySelector('.content--canvas');
  const car = document.createElement("div");
  const cardContainer = document.createElement("div");
  const leftBtn = document.createElement("button");
  const rightBtn = document.createElement("button");
  leftBtn.classList.add("btn", "prev");
  car.id = "content";
  rightBtn.classList.add("btn", "next");
  leftBtn.textContent = "‹";
  rightBtn.textContent = "›";
  cardContainer.classList.add("img-wrap");
  cardContainer.id = "cardContainer";
  car.classList.add("car");
  let card1 = (0,_elements_cards_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_elements_images_images_js__WEBPACK_IMPORTED_MODULE_2__.burger1, "THE CHEESEBURGER", "Bun, 2 mixed burgers (200g), cheddar x 4, special sauce, iceberg, fresh onion, pickles", "1");
  let card2 = (0,_elements_cards_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_elements_images_images_js__WEBPACK_IMPORTED_MODULE_2__.burger2, "THE HAMBURGER ", "Bun, 2 mixed burgers (200g), cheddar x 4, special sauce, iceberg, fresh onion, pickles", "2");
  let card3 = (0,_elements_cards_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_elements_images_images_js__WEBPACK_IMPORTED_MODULE_2__.burger3, "THE ALL IN ONE BURGER", "Bun, 2 mixed burgers (200g), cheddar x 4, special sauce, iceberg, fresh onion, pickles", "3");
  let card4 = (0,_elements_cards_js__WEBPACK_IMPORTED_MODULE_1__["default"])("https://png.pngtree.com/png-clipart/20230325/original/pngtree-juicy-burgers-with-a-transparent-background-png-image_9002761.png", "THE DEFAULT BURGER", "Bun, 2 mixed burgers (200g), cheddar x 4, special sauce, iceberg, fresh onion, pickles", "4");
  cardContainer.appendChild(card1);
  cardContainer.appendChild(card2);
  cardContainer.appendChild(card3);
  cardContainer.appendChild(card4);
  console.log(cardContainer);
  car.append(rightBtn, leftBtn, cardContainer);
  car.append(cardContainer);
  container.appendChild(car);
  (0,_elements_carousel_js__WEBPACK_IMPORTED_MODULE_0__.carouselLogic)(leftBtn, rightBtn);
}

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/elements/images/chicken.png":
/*!***********************************************!*\
  !*** ./src/pages/elements/images/chicken.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "83193ef85aebcee69b69.png";

/***/ }),

/***/ "./src/pages/elements/images/hamburger.png":
/*!*************************************************!*\
  !*** ./src/pages/elements/images/hamburger.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b5b59ac54130d224406f.png";

/***/ }),

/***/ "./src/pages/elements/images/icon.svg":
/*!********************************************!*\
  !*** ./src/pages/elements/images/icon.svg ***!
  \********************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KDTwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIFRyYW5zZm9ybWVkIGJ5OiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSJub25lIiBzdHJva2U9IiNlYmViZWIiPgoNPGcgaWQ9IlNWR1JlcG9fYmdDYXJyaWVyIiBzdHJva2Utd2lkdGg9IjAiLz4KDTxnIGlkPSJTVkdSZXBvX3RyYWNlckNhcnJpZXIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgoNPGcgaWQ9IlNWR1JlcG9faWNvbkNhcnJpZXIiPgoNPHBhdGggc3Ryb2tlPSIjZWJlYmViIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0ibTE0IDE1IDMuMTcyLTMuMTcyYTIuODMgMi44MyAwIDAgMSAyLS44MjhIMjBhMiAyIDAgMCAxIDIgMnYwYTIgMiAwIDAgMS0yIDJINGEyIDIgMCAwIDEtMi0ydjBhMiAyIDAgMCAxIDItMmgzLjY1N2MxLjUgMCAyLjkzOS41OTYgNCAxLjY1N0wxNCAxNXoiLz4KDTxwYXRoIGZpbGw9IiNlYmViZWIiIHN0cm9rZT0iI2ViZWJlYiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0zIDE1aDE4djJhMyAzIDAgMCAxLTMgM0g2YTMgMyAwIDAgMS0zLTN2LTJ6Ii8+Cg08cGF0aCBmaWxsPSIjZWJlYmViIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01LjQ2NyA0LjU1NEM3LjI3IDMuNDU3IDkuNTggMyAxMiAzczQuNzMuNDU3IDYuNTMzIDEuNTU0YzEuODQ0IDEuMTIxIDMuMTA5IDIuODg2IDMuNDAyIDUuMzI4QzIyLjA4MiAxMS4xMDYgMjEuMDY3IDEyIDIwIDEySDRjLTEuMDY3IDAtMi4wODItLjg5NC0xLjkzNS0yLjExOC4yOTMtMi40NDIgMS41NTgtNC4yMDcgMy40MDItNS4zMjh6TTcgNmExIDEgMCAwIDAgMCAyaC4wMDFhMSAxIDAgMCAwIDAtMkg3em04IDFhMSAxIDAgMCAxIDEtMWguMDAxYTEgMSAwIDEgMSAwIDJIMTZhMSAxIDAgMCAxLTEtMXptLTQgMWExIDEgMCAxIDAgMCAyaC4wMDFhMSAxIDAgMSAwIDAtMkgxMXoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgoNPC9nPgoNPC9zdmc+";

/***/ }),

/***/ "./src/pages/elements/images/location.PNG":
/*!************************************************!*\
  !*** ./src/pages/elements/images/location.PNG ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9b14ee83d67ad13ec9ba.PNG";

/***/ }),

/***/ "./src/pages/elements/images/mixed.png":
/*!*********************************************!*\
  !*** ./src/pages/elements/images/mixed.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d74043e3e0987a122655.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _pages_elements_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/elements/header.js */ "./src/pages/elements/header.js");
/* harmony import */ var _pages_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/main.js */ "./src/pages/main.js");
/* harmony import */ var _pages_about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/about.js */ "./src/pages/about.js");
/* harmony import */ var _pages_contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/contact.js */ "./src/pages/contact.js");
/* harmony import */ var _pages_elements_bg_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/elements/bg.js */ "./src/pages/elements/bg.js");






const canvas = document.createElement("canvas");
canvas.classList.add("bg");
document.body.appendChild(canvas);
const bg = document.createElement("div");
bg.classList.add("content--canvas", "canvas");
document.body.appendChild(bg);
(0,_pages_elements_bg_js__WEBPACK_IMPORTED_MODULE_5__.renderBg)();
(0,_pages_elements_header_js__WEBPACK_IMPORTED_MODULE_1__.renderHeader)();
(0,_pages_contact_js__WEBPACK_IMPORTED_MODULE_4__.renderContact)();
const MainBtn = document.getElementById("Main");
const AboutBtn = document.getElementById("About");
const ContactBtn = document.getElementById("Contact");
MainBtn.onclick = function () {
  let content = document.getElementById("content");
  if (typeof content != 'undefined' && content != null) {
    content.remove();
  }
  (0,_pages_main_js__WEBPACK_IMPORTED_MODULE_2__.renderMain)();
};
AboutBtn.onclick = function () {
  let content = document.getElementById("content");
  if (typeof content != 'undefined' && content != null) {
    content.remove();
  }
  (0,_pages_about_js__WEBPACK_IMPORTED_MODULE_3__.renderAbout)();
};
ContactBtn.onclick = function () {
  let content = document.getElementById("content");
  if (typeof content != 'undefined' && content != null) {
    content.remove();
  }
  (0,_pages_contact_js__WEBPACK_IMPORTED_MODULE_4__.renderContact)();
};
})();

/******/ })()
;
//# sourceMappingURL=index.js.map