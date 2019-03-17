/*! formstone v1.4.13 [scrollbar.js] 2019-03-17 | GPL-3.0 License | formstone.it */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./core","./touch"],t):t(jQuery,Formstone)}(function(t,n){"use strict";function e(){k=t(g.base)}function o(t){t.$el.addClass(p.isSetup);var n={},e={},o={},i=0,l=!0;t.horizontal?(t.barHeight=t.$content[0].offsetHeight-t.$content[0].clientHeight,t.frameWidth=t.$content.outerWidth(),t.trackWidth=t.frameWidth-2*t.trackMargin,t.scrollWidth=t.$content[0].scrollWidth,t.ratio=t.trackWidth/t.scrollWidth,t.trackRatio=t.trackWidth/t.scrollWidth,t.handleWidth=t.handleSize>0?t.handleSize:t.trackWidth*t.trackRatio,t.scrollRatio=(t.scrollWidth-t.frameWidth)/(t.trackWidth-t.handleWidth),t.handleBounds={left:0,right:t.trackWidth-t.handleWidth},t.$content.css({paddingBottom:t.barHeight+t.paddingBottom}),i=t.$content.scrollLeft()*t.ratio,l=t.scrollWidth<=t.frameWidth,n={width:t.frameWidth},e={width:t.trackWidth,marginLeft:t.trackMargin,marginRight:t.trackMargin},o={width:t.handleWidth}):(t.barWidth=t.$content[0].offsetWidth-t.$content[0].clientWidth,t.frameHeight=t.$content.outerHeight(),t.trackHeight=t.frameHeight-2*t.trackMargin,t.scrollHeight=t.$content[0].scrollHeight,t.ratio=t.trackHeight/t.scrollHeight,t.trackRatio=t.trackHeight/t.scrollHeight,t.handleHeight=t.handleSize>0?t.handleSize:t.trackHeight*t.trackRatio,t.scrollRatio=(t.scrollHeight-t.frameHeight)/(t.trackHeight-t.handleHeight),t.handleBounds={top:0,bottom:t.trackHeight-t.handleHeight},i=t.$content.scrollTop()*t.ratio,l=t.scrollHeight<=t.frameHeight,n={height:t.frameHeight},e={height:t.trackHeight,marginBottom:t.trackMargin,marginTop:t.trackMargin},o={height:t.handleHeight}),l?t.$el.removeClass(p.active):t.$el.addClass(p.active),t.$bar.css(n),t.$track.css(e),t.$handle.css(o),t.panning=!1,d(t,i),a({data:t}),t.$el.removeClass(p.setup)}function a(t){m.killEvent(t);var n=t.data,e={};if(!n.panning){if(n.horizontal){var o=n.$content.scrollLeft();o<0&&(o=0),n.handleLeft=o/n.scrollRatio,n.handleLeft>n.handleBounds.right&&(n.handleLeft=n.handleBounds.right),e={left:n.handleLeft}}else{var a=n.$content.scrollTop();a<0&&(a=0),n.handleTop=a/n.scrollRatio,n.handleTop>n.handleBounds.bottom&&(n.handleTop=n.handleBounds.bottom),e={top:n.handleTop}}n.$handle.css(e)}}function i(t){l(t,!0)}function l(t,n){var e,o,a=t.data;if(a.horizontal){var i=a.$content[0].scrollLeft,l=a.$content[0].scrollWidth,c=a.$content.outerWidth();if(e=t.originalEvent.deltaX*(!0===n?-1:1),!0===n)return a.$content.scrollLeft(i-e),r(t);if("left"===(o=e<0?"right":"left")&&e>l-c-i)return a.$content.scrollLeft(l),r(t);if("right"===o&&-e>i)return a.$content.scrollLeft(0),r(t)}else{var h=a.$content[0].scrollTop,s=a.$content[0].scrollHeight,d=a.$content.outerHeight();if(e=t.originalEvent.deltaY*(!0===n?-1:1),!0===n)return a.$content.scrollTop(h-e),r(t);if("down"===(o=e<0?"up":"down")&&e>s-d-h)return a.$content.scrollTop(s),r(t);if("up"===o&&-e>h)return a.$content.scrollTop(0),r(t)}}function r(t){return m.killEvent(t),t.returnValue=!1,!1}function c(t){var n,e=t.data,o=e.$track.offset();e.panning=!0,n=e.horizontal?e.handleLeft=t.pageX-o.left-e.handleWidth/2:e.handleTop=t.pageY-o.top-e.handleHeight/2,d(e,n)}function h(t){var n=t.data;d(n,n.horizontal?n.handleLeft+t.deltaX:n.handleTop+t.deltaY)}function s(t){var n=t.data;n.panning=!1,n.horizontal?n.handleLeft+=t.deltaX:n.handleTop+=t.deltaY}function d(t,n){var e={};t.horizontal?(n<t.handleBounds.left&&(n=t.handleBounds.left),n>t.handleBounds.right&&(n=t.handleBounds.right),e={left:n},t.$content.scrollLeft(Math.round(n*t.scrollRatio))):(n<t.handleBounds.top&&(n=t.handleBounds.top),n>t.handleBounds.bottom&&(n=t.handleBounds.bottom),e={top:n},t.$content.scrollTop(Math.round(n*t.scrollRatio))),t.$handle.css(e)}var f,u=n.Plugin("scrollbar",{widget:!0,defaults:{customClass:"",duration:0,handleSize:0,horizontal:!1,mouseWheel:!0,theme:"fs-light",trackMargin:0},classes:["content","bar","track","handle","horizontal","setup","active"],methods:{_construct:function(t){var n="";n+='<div class="'+p.bar+'">',n+='<div class="'+p.track+'">',n+='<button type="button" class="'+p.handle+'" aria-hidden="true" tabindex="-1"></button>',n+="</div></div>",t.paddingRight=parseInt(this.css("padding-right"),10),t.paddingBottom=parseInt(this.css("padding-bottom"),10),t.thisClasses=[p.base,t.theme,t.customClass,t.horizontal?p.horizontal:""],this.addClass(t.thisClasses.join(" ")).wrapInner('<div class="'+p.content+'" tabindex="0"></div>').prepend(n),t.$content=this.find(g.content),t.$bar=this.find(g.bar),t.$track=this.find(g.track),t.$handle=this.find(g.handle),t.trackMargin=parseInt(t.trackMargin,10),t.$content.on($.scroll,t,a),t.mouseWheel&&t.$content.on("wheel"+$.namespace,t,l),t.$track.fsTouch({axis:t.horizontal?"x":"y",pan:!0}).on($.panStart,t,c).on($.pan,t,h).on($.panEnd,t,s).on($.click,m.killEvent).on("wheel"+$.namespace,t,i),o(t),e()},_destruct:function(t){t.$track.fsTouch("destroy"),t.$bar.remove(),t.$content.off($.namespace).contents().unwrap(),this.removeClass(t.thisClasses.join(" ")).off($.namespace),this.attr("id")===t.rawGuid&&this.removeAttr("id")},_resize:function(t){m.iterate.call(k,o)},scroll:function(n,e,o){var a=o||n.duration,i={};if("number"!==t.type(e)){var l=t(e);if(l.length>0){var r=l.position();e=n.horizontal?r.left+n.$content.scrollLeft():r.top+n.$content.scrollTop()}else e="top"===e?0:"bottom"===e?n.horizontal?n.$content[0].scrollWidth:n.$content[0].scrollHeight:n.$content.scrollTop()}i[n.horizontal?"scrollLeft":"scrollTop"]=e,n.$content.stop().animate(i,a)},resize:o}}),g=u.classes,p=g.raw,$=u.events,m=u.functions,k=(n.$window,[]);n.Ready(function(){f=n.$body})});