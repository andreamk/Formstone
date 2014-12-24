/*! Formstone v0.0.1 [navigation.js] 2014-12-24 | MIT License | formstone.it */

!function(a,b){"use strict";function c(b){b.guid="__"+r++,b.eventGuid=q.namespace+b.guid,b.rawClassGuid=p.base+b.guid,b.classGuid="."+b.rawClassGuid,"toggle"===b.type&&(b.gravity="");var c=p.base,d=[c,b.type].join("-"),e=b.gravity?[d,b.gravity].join("-"):"",f=[b.rawClassGuid,b.customClass].join(" ");b.handle=this.data(n+"-handle"),b.content=this.data(n+"-content"),b.handleClasses=[p.handle,p.handle.replace(c,d),p.handle.replace(c,e),f].join(" "),b.navClasses=[p.nav.replace(c,d),p.nav.replace(c,e),f].join(" "),b.contentClasses=[p.content.replace(c,d),p.content.replace(c,e),f].join(" "),b.$nav=this.addClass(b.navClasses),b.$handle=a(b.handle).addClass(b.handleClasses),b.$content=a(b.content).addClass(b.contentClasses),b.$animate=a().add(b.$nav).add(b.$content),b.label&&b.$handle.text(b.labels.closed),b.$handle.attr("data-switch-target",b.classGuid).on("activate.switch"+b.eventGuid,b,i).on("deactivate.switch"+b.eventGuid,b,j).on("enable.switch"+b.eventGuid,b,k).on("disable.switch"+b.eventGuid,b,l).switch({maxWidth:b.maxWidth,classes:{target:b.classGuid,enabled:o.enabled,active:o.open,raw:{target:b.rawClassGuid,enabled:p.enabled,active:p.open}}})}function d(a){a.$content.removeClass(a.contentClasses),a.$handle.attr("data-switch-target","").removeClass(a.handleClasses).off(a.eventGuid).switch("destroy"),this.removeClass(a.navClasses).off(q.namespace)}function e(a){a.$handle.switch("activate")}function f(a){a.$handle.switch("deactivate")}function g(a){a.$handle.switch("enable")}function h(a){a.$handle.switch("disable")}function i(a){var b=a.data;b.$el.trigger(q.open),b.$content.addClass(p.open),b.label&&b.$handle.text(b.labels.open)}function j(a){var b=a.data;b.$el.trigger(q.close),b.$content.removeClass(p.open),b.label&&b.$handle.text(b.labels.closed)}function k(a){var b=a.data;b.$content.addClass(p.enabled),setTimeout(function(){b.$animate.addClass(p.animated)},0)}function l(a){var b=a.data;b.$content.removeClass(p.enabled,p.animated),b.$animate.removeClass(p.animated)}var m=b.Plugin("navigation",{widget:!0,defaults:{customClass:"",gravity:"left",label:!0,labels:{closed:"Menu",open:"Close"},maxWidth:"980px",type:"toggle"},classes:["handle","nav","content","animated","enabled","open","toggle","push","overlay","left","right"],events:{tap:"tap",open:"open",close:"close"},methods:{_construct:c,_destruct:d,open:e,close:f,enable:g,disable:h}}),n=m.namespace,o=m.classes,p=o.raw,q=m.events,r=(m.functions,0)}(jQuery,Formstone);