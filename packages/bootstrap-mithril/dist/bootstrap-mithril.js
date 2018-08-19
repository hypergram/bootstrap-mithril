(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('bootstrap-mithril-button'), require('bootstrap-mithril-card'), require('bootstrap-mithril-navbar'), require('bootstrap-mithril-breadcrumb')) :
	typeof define === 'function' && define.amd ? define(['exports', 'bootstrap-mithril-button', 'bootstrap-mithril-card', 'bootstrap-mithril-navbar', 'bootstrap-mithril-breadcrumb'], factory) :
	(factory((global['bootstrap-mithril'] = {}),global['bootstrap-mithril-button'],global['bootstrap-mithril-card'],global['bootstrap-mithril-navbar'],global['bootstrap-mithril-breadcrumb']));
}(this, (function (exports,bootstrapMithrilButton,bootstrapMithrilCard,bootstrapMithrilNavbar,bootstrapMithrilBreadcrumb) { 'use strict';

	bootstrapMithrilButton = bootstrapMithrilButton && bootstrapMithrilButton.hasOwnProperty('default') ? bootstrapMithrilButton['default'] : bootstrapMithrilButton;
	bootstrapMithrilCard = bootstrapMithrilCard && bootstrapMithrilCard.hasOwnProperty('default') ? bootstrapMithrilCard['default'] : bootstrapMithrilCard;
	bootstrapMithrilNavbar = bootstrapMithrilNavbar && bootstrapMithrilNavbar.hasOwnProperty('default') ? bootstrapMithrilNavbar['default'] : bootstrapMithrilNavbar;
	bootstrapMithrilBreadcrumb = bootstrapMithrilBreadcrumb && bootstrapMithrilBreadcrumb.hasOwnProperty('default') ? bootstrapMithrilBreadcrumb['default'] : bootstrapMithrilBreadcrumb;



	exports.button = bootstrapMithrilButton;
	exports.card = bootstrapMithrilCard;
	exports.navbar = bootstrapMithrilNavbar;
	exports.breadcrumb = bootstrapMithrilBreadcrumb;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=bootstrap-mithril.js.map
