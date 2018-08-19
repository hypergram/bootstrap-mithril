(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('bootstrap-mithril-button'), require('bootstrap-mithril-card'), require('bootstrap-mithril-navbar'), require('bootstrap-mithril-breadcrumb'), require('bootstrap-mithril-formgroup')) :
	typeof define === 'function' && define.amd ? define(['exports', 'bootstrap-mithril-button', 'bootstrap-mithril-card', 'bootstrap-mithril-navbar', 'bootstrap-mithril-breadcrumb', 'bootstrap-mithril-formgroup'], factory) :
	(factory((global['bootstrap-mithril'] = {}),global['bootstrap-mithril-button'],global['bootstrap-mithril-card'],global['bootstrap-mithril-navbar'],global['bootstrap-mithril-breadcrumb'],global['bootstrap-mithril-formgroup']));
}(this, (function (exports,bootstrapMithrilButton,bootstrapMithrilCard,bootstrapMithrilNavbar,bootstrapMithrilBreadcrumb,bootstrapMithrilFormgroup) { 'use strict';

	bootstrapMithrilButton = bootstrapMithrilButton && bootstrapMithrilButton.hasOwnProperty('default') ? bootstrapMithrilButton['default'] : bootstrapMithrilButton;
	bootstrapMithrilCard = bootstrapMithrilCard && bootstrapMithrilCard.hasOwnProperty('default') ? bootstrapMithrilCard['default'] : bootstrapMithrilCard;
	bootstrapMithrilNavbar = bootstrapMithrilNavbar && bootstrapMithrilNavbar.hasOwnProperty('default') ? bootstrapMithrilNavbar['default'] : bootstrapMithrilNavbar;
	bootstrapMithrilBreadcrumb = bootstrapMithrilBreadcrumb && bootstrapMithrilBreadcrumb.hasOwnProperty('default') ? bootstrapMithrilBreadcrumb['default'] : bootstrapMithrilBreadcrumb;
	bootstrapMithrilFormgroup = bootstrapMithrilFormgroup && bootstrapMithrilFormgroup.hasOwnProperty('default') ? bootstrapMithrilFormgroup['default'] : bootstrapMithrilFormgroup;



	exports.button = bootstrapMithrilButton;
	exports.card = bootstrapMithrilCard;
	exports.navbar = bootstrapMithrilNavbar;
	exports.breadcrumb = bootstrapMithrilBreadcrumb;
	exports.formgroup = bootstrapMithrilFormgroup;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=bootstrap-mithril.js.map
