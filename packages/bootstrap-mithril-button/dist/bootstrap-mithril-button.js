!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("mithril")):"function"==typeof define&&define.amd?define(["mithril"],t):e["bootstrap-mithril"]=t(e.m)}(this,function(e){"use strict";e="default"in e?e.default:e;var t={};return t.oninit=function(){},t.view=function(t){var n=t.attrs,i=(n.href?"a":"button")+".btn";return e(i,{className:n.classes?n.classes.join(" "):"btn-default",href:n.href||null,type:n.href?null:n.type||"button",oncreate:n.href?e.route.link:null,disabled:n.disabled?"disabled":"",onclick:n.onclick},[n.before,n.label,n.after])},t});
//# sourceMappingURL=bootstrap-mithril-button.js.map
