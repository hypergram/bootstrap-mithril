(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('bootstrap-mithril-button'), require('bootstrap-mithril-card'), require('bootstrap-mithril-navbar')) :
	typeof define === 'function' && define.amd ? define(['exports', 'bootstrap-mithril-button', 'bootstrap-mithril-card', 'bootstrap-mithril-navbar'], factory) :
	(factory((global['bootstrap-mithril'] = {}),global['bootstrap-mithril-button'],global['bootstrap-mithril-card'],global['bootstrap-mithril-navbar']));
}(this, (function (exports,bootstrapMithrilButton,bootstrapMithrilCard,bootstrapMithrilNavbar) { 'use strict';

	bootstrapMithrilButton = bootstrapMithrilButton && bootstrapMithrilButton.hasOwnProperty('default') ? bootstrapMithrilButton['default'] : bootstrapMithrilButton;
	bootstrapMithrilCard = bootstrapMithrilCard && bootstrapMithrilCard.hasOwnProperty('default') ? bootstrapMithrilCard['default'] : bootstrapMithrilCard;
	bootstrapMithrilNavbar = bootstrapMithrilNavbar && bootstrapMithrilNavbar.hasOwnProperty('default') ? bootstrapMithrilNavbar['default'] : bootstrapMithrilNavbar;



	exports.button = bootstrapMithrilButton;
	exports.card = bootstrapMithrilCard;
	exports.navbar = bootstrapMithrilNavbar;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=bootstrap-mithril.js.map
