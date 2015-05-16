/*! formstone v0.5.13 [swap.js] 2015-05-16 | MIT License | formstone.it */

!function(a,b,c){"use strict";function d(b){b.enabled=!1,b.active=!1,b.classes=a.extend(!0,{},m,b.classes),b.target=this.data(l+"-target"),b.$target=a(b.target).addClass(b.classes.raw.target),b.linked=this.data(l+"-linked"),b.mq="(max-width:"+(b.maxWidth===1/0?"100000px":b.maxWidth)+")",b.mqGuid=b.classes.raw.base+"__"+p++;var c=this.data(l+"-group");b.group=c?"[data-"+l+'-group="'+c+'"]':!1,!b.collapse&&b.group&&a(b.group).eq(0).attr("data-"+l+"-active","true"),b.onEnable=this.data(l+"-active"),b.$swaps=a().add(this).add(b.$target),this.touch({tap:!0}).on(n.tap,b,j),a.mediaquery("bind",b.mqGuid,b.mq,{enter:function(){h.call(b.$el,b)},leave:function(){i.call(b.$el,b)}})}function e(b){a.mediaquery("unbind",b.mqGuid,b.mq),b.$swaps.removeClass([b.classes.raw.enabled,b.classes.raw.active].join(" ")).off(n.namespace),this.touch("destroy")}function f(b,c){if(b.enabled&&!b.active){a(b.group).not(b.$el)[k.namespace]("deactivate");var d=b.group?a(b.group).index(b.$el):null;b.$swaps.addClass(b.classes.raw.active),b.linked&&!c&&a(b.linked).not(b.$el).swap("activate",!0),this.trigger(n.activate,[d]),b.active=!0}}function g(b,c){b.enabled&&b.active&&(b.$swaps.removeClass(b.classes.raw.active),b.linked&&!c&&a(b.linked).not(b.$el).swap("deactivate",!0),this.trigger(n.deactivate),b.active=!1)}function h(b,c){b.enabled||(b.$swaps.addClass(b.classes.raw.enabled),c||a(b.linked).not(b.$el).swap("enable"),b.enabled=!0,this.trigger(n.enable),b.onEnable?(b.active=!0,b.$swaps.addClass(b.classes.raw.active)):(b.active=!0,g.call(this,b)))}function i(b,c){b.enabled&&(b.$swaps.removeClass([b.classes.raw.enabled,b.classes.raw.active].join(" ")),c||a(b.linked).not(b.$el).swap("disable"),this.trigger(n.disable),b.enabled=!1)}function j(a){o.killEvent(a);var b=a.data;b.active&&b.collapse?g.call(b.$el,b):f.call(b.$el,b)}var k=b.Plugin("swap",{widget:!0,defaults:{collapse:!0,maxWidth:1/0},classes:["target","enabled","active"],events:{tap:"tap",activate:"activate",deactivate:"deactivate",enable:"enable",disable:"disable"},methods:{_construct:d,_destruct:e,activate:f,deactivate:g,enable:h,disable:i}}),l=k.namespace,m=k.classes,n=k.events,o=k.functions,p=0}(jQuery,Formstone);