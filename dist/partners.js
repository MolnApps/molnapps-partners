var Partners =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/Partners.js
class Partners {
	constructor () {
		this.attached = false
		this.partners = []
		this.template = `
			<div class="Partners__header Partners__header--{classModifier}">
				<a href="{url}">
					<span class="Partners__part">
						<span>Part of</span>
						{logo}
					</span> 
					<span class="Partners__company">{company}</span>
				</a>
			</div>
		`;
		this.logoTemplate = `<img src="{logo.src}" width="{logo.width}" height="{logo.height}" />`
		this.container = document.createElement('div.Partners__container')
	}
	
	register (partner, position = '') {
		let shouldAttachAgain = false
		
		if (this.attached) {
			this.detach()
			shouldAttachAgain = true
		}

		partner = this.setPartnerDefaults(partner)

		if (position == 'top') {
			this.partners.unshift(partner);
		} else {
			this.partners.push(partner)
		}

		if (shouldAttachAgain) {
			this.attach()
		}
	}

	setPartnerDefaults(partner)
	{
		partner = Object.assign({
			classModifier: 'default', 
			url: '#'
		}, partner)
		
		partner.logo = Object.assign({
			src: '',
			width: '', 
			height: ''
		}, partner.logo ? partner.logo : {});

		return partner;
	}
	
	get () {
		let html = [];
		this.partners.forEach((partner) => {
			let markup = this.template
				.replace('{url}', partner.url)
				.replace(
					'{logo}', 
					partner.logo.src ? this.logoTemplate : ''
				)
				.replace('{logo.src}', partner.logo.src)
				.replace('{logo.width}', partner.logo.width)
				.replace('{logo.height}', partner.logo.height)
				.replace('{company}', partner.company)
				.replace('{classModifier}', partner.classModifier);
			html.push(markup);
		})
		return '<div class="Partners__container">' + html.join('') + '</div>';
	}

	attach () {
		if ( ! document.querySelector('div.Partners__isHome')) {
			return;
		}
		
		this.container.innerHTML = this.get()
		document.body.insertAdjacentElement('afterbegin', this.container)
		this.attached = true
	}

	detach () {
		document.body.removeChild(this.container)
		this.attached = false
	}
}

/* harmony default export */ var src_Partners = (Partners);
// CONCATENATED MODULE: ./src/index.js
//import './Partners.scss';


let myHeader = new src_Partners

document.addEventListener("DOMContentLoaded", () => {
	myHeader.attach()
});

/* harmony default export */ var src = __webpack_exports__["default"] = (myHeader);

/***/ })
/******/ ]);
//# sourceMappingURL=partners.js.map