/*! formstone v1.4.0 [viewer.js] 2017-10-06 | GPL-3.0 License | formstone.it */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./core","./transition"],t):t(jQuery,Formstone)}(function(t,e){"use strict";function i(){(O=V.scrollTop()+e.windowHeight)<0&&(O=0)}function o(){(q=t(R.base)).length?S.lockViewport(A):S.unlockViewport(A)}function n(e,i,o){e.isAnimating||(e.isAnimating=!0,e.$container=t('<div class="'+N.container+'"><img></div>'),e.$image=e.$container.find("img"),e.$viewport.append(e.$container),e.$image.one(P.load,function(){r(e),e.isAnimating=!1,e.$container.fsTransition({property:"opacity"},function(){}),e.$el.removeClass(N.loading),e.$container.fsTouch({pan:!0,scale:!0}).on(P.scaleStart,e,T).on(P.scaleEnd,e,M).on(P.scale,e,$),e.$el.trigger(P.loaded)}).one(P.error,e,a).attr("src",i).addClass(N.image),(e.$image[0].complete||4===e.$image[0].readyState)&&e.$image.trigger(P.load),e.source=i)}function a(t){t.data.$el.trigger(P.error)}function r(t){g(t),s(t),t.containerTop=t.viewportHeight/2,t.containerLeft=t.viewportWidth/2,c(t),t.imageHeight=t.naturalHeight,t.imageWidth=t.naturalWidth,u(t),l(t),m(t),d(t),h(t),W(t,{containerTop:t.containerTop,containerLeft:t.containerLeft,imageHeight:t.imageHeight,imageWidth:t.imageWidth,imageTop:t.imageTop,imageLeft:t.imageLeft}),t.isRendering=!0}function g(t){var e=E(t.$image);t.naturalHeight=e.naturalHeight,t.naturalWidth=e.naturalWidth,t.ratioHorizontal=t.naturalHeight/t.naturalWidth,t.ratioVertical=t.naturalWidth/t.naturalHeight,t.isWide=t.naturalWidth>t.naturalHeight}function s(t){t.viewportHeight=t.$viewport.outerHeight(),t.viewportWidth=t.$viewport.outerWidth()}function l(t){t.imageHeight<=t.viewportHeight?(t.containerMinTop=t.viewportHeight/2,t.containerMaxTop=t.viewportHeight/2):(t.containerMinTop=t.viewportHeight-t.imageHeight/2,t.containerMaxTop=t.imageHeight/2),t.imageWidth<=t.viewportWidth?(t.containerMinLeft=t.viewportWidth/2,t.containerMaxLeft=t.viewportWidth/2):(t.containerMinLeft=t.viewportWidth-t.imageWidth/2,t.containerMaxLeft=t.imageWidth/2)}function c(t){t.isWide?(t.imageMinWidth=t.viewportWidth,t.imageMinHeight=t.imageMinWidth*t.ratioHorizontal,t.imageMinHeight>t.viewportHeight&&(t.imageMinHeight=t.viewportHeight,t.imageMinWidth=t.imageMinHeight*t.ratioVertical)):(t.imageMinHeight=t.viewportHeight,t.imageMinWidth=t.imageMinHeight*t.ratioVertical,t.imageMinWidth>t.viewportWidth&&(t.imageMinWidth=t.viewportWidth,t.imageMinHeight=t.imageMinWidth*t.ratioHorizontal)),(t.imageMinWidth>t.naturalWidth||t.imageMinHeight>t.naturalHeight)&&(t.imageMinHeight=t.naturalHeight,t.imageMinWidth=t.naturalWidth),t.imageMaxHeight=t.naturalHeight,t.imageMaxWidth=t.naturalWidth}function m(t){t.imageTop=-t.imageHeight/2,t.imageLeft=-t.imageWidth/2}function d(t){t.lastContainerTop=t.containerTop,t.lastContainerLeft=t.containerLeft,t.lastImageHeight=t.imageHeight,t.lastImageWidth=t.imageWidth,t.lastImageTop=t.imageTop,t.lastImageLeft=t.imageLeft}function h(t){t.renderContainerTop=t.lastContainerTop,t.renderContainerLeft=t.lastContainerLeft,t.renderImageTop=t.lastImageTop,t.renderImageLeft=t.lastImageLeft,t.renderImageHeight=t.lastImageHeight,t.renderImageWidth=t.lastImageWidth}function u(t){t.imageHeight=t.imageMinHeight,t.imageWidth=t.imageMinWidth}function f(t){t.imageHeight<t.imageMinHeight&&(t.imageHeight=t.imageMinHeight),t.imageHeight>t.imageMaxHeight&&(t.imageHeight=t.imageMaxHeight),t.imageWidth<t.imageMinWidth&&(t.imageWidth=t.imageMinWidth),t.imageWidth>t.imageMaxWidth&&(t.imageWidth=t.imageMaxWidth)}function p(t){t.containerTop<t.containerMinTop&&(t.containerTop=t.containerMinTop),t.containerTop>t.containerMaxTop&&(t.containerTop=t.containerMaxTop),t.containerLeft<t.containerMinLeft&&(t.containerLeft=t.containerMinLeft),t.containerLeft>t.containerMaxLeft&&(t.containerLeft=t.containerMaxLeft)}function H(t){null===t.tapTimer?t.tapTimer=S.startTimer(t.tapTimer,500,function(){v(t)}):(v(t),w(t))}function v(t){S.clearTimer(t.tapTimer),t.tapTimer=null}function W(t,i){if(e.transform){var o=i.imageWidth/t.naturalWidth,n=i.imageHeight/t.naturalHeight;t.$container.css(e.transform,"translate3d("+i.containerLeft+"px, "+i.containerTop+"px, 0)"),t.$image.css(e.transform,"translate3d(-50%, -50%, 0) scale("+o+","+n+")")}else t.$container.css({top:i.containerTop,left:i.containerLeft}),t.$image.css({height:i.imageHeight,width:i.imageWidth,top:i.imageTop,left:i.imageLeft})}function T(t){var e=t.data;H(e),d(e)}function $(t){var e=t.data;v(e),e.isRendering=!1,e.isZooming=!1;e.imageHeight,e.imageMinHeight;e.containerTop=e.lastContainerTop+t.deltaY,e.containerLeft=e.lastContainerLeft+t.deltaX,e.imageHeight=e.lastImageHeight*t.scale,e.imageWidth=e.lastImageWidth*t.scale,l(e),p(e),f(e),m(e),W(e,{containerTop:e.containerTop,containerLeft:e.containerLeft,imageHeight:e.imageHeight,imageWidth:e.imageWidth,imageTop:e.imageTop,imageLeft:e.imageLeft})}function M(t){var e=t.data;e.isZooming||(d(e),h(e),e.isRendering=!0)}function w(t){var e=t.imageHeight>t.imageMinHeight+1;t.isZooming=!0,d(t),h(t),e?(t.imageHeight=t.imageMinHeight,t.imageWidth=t.imageMinWidth):(t.imageHeight=t.imageMaxHeight,t.imageWidth=t.imageMaxWidth),l(t),p(t),m(t),t.isRendering=!0}function _(e){S.killEvent(e);var i=t(e.currentTarget),o=e.data;"out"===(i.hasClass(N.control_zoom_out)?"out":"in")?L(o):C(o)}function C(t){t.keyDownTime=1,t.action="zoom_in"}function L(t){t.keyDownTime=1,t.action="zoom_out"}function x(t){t.data.action=!1}function z(t){if(t.isRendering){if(t.action){t.keyDownTime+=t.zoomIncrement;var e=("zoom_out"===t.action?-1:1)*Math.round(t.imageWidth*t.keyDownTime-t.imageWidth);e>t.zoomDelta&&(e=t.zoomDelta),t.isWide?(t.imageWidth+=e,t.imageHeight=Math.round(t.imageWidth/t.ratioVertical)):(t.imageHeight+=e,t.imageWidth=Math.round(t.imageHeight/t.ratioHorizontal)),f(t),m(t),l(t),p(t)}t.renderContainerTop+=Math.round((t.containerTop-t.renderContainerTop)*t.zoomEnertia),t.renderContainerLeft+=Math.round((t.containerLeft-t.renderContainerLeft)*t.zoomEnertia),t.renderImageTop+=Math.round((t.imageTop-t.renderImageTop)*t.zoomEnertia),t.renderImageLeft+=Math.round((t.imageLeft-t.renderImageLeft)*t.zoomEnertia),t.renderImageHeight+=Math.round((t.imageHeight-t.renderImageHeight)*t.zoomEnertia),t.renderImageWidth+=Math.round((t.imageWidth-t.renderImageWidth)*t.zoomEnertia),W(t,{containerTop:t.renderContainerTop,containerLeft:t.renderContainerLeft,imageHeight:t.renderImageHeight,imageWidth:t.renderImageWidth,imageTop:t.renderImageTop,imageLeft:t.renderImageLeft})}}function I(t,e){t.isAnimating||(v(t),t.isAnimating=!0,t.isRendering=!1,t.isZooming=!1,Z(t),t.$container.fsTransition({property:"opacity"},function(){t.isAnimating=!1,t.$container.remove(),"function"==typeof e&&e.call(window,t)}),t.$el.addClass(N.loading))}function y(e){S.killEvent(e);var i=t(e.currentTarget),o=e.data,a=o.index+(i.hasClass(N.control_next)?1:-1);o.isAnimating||(a<0&&(a=0),a>o.total&&(a=o.total),a!==o.index&&(o.index=a,I(o,function(){n(o,o.images[o.index])})),b(o))}function b(t){t.$controlItems.removeClass(N.control_disabled),0===t.index&&t.$controlPrevious.addClass(N.control_disabled),t.index===t.images.length-1&&t.$controlNext.addClass(N.control_disabled)}function j(t){s(t),l(t),c(t),m(t),l(t),p(t),f(t)}function Z(t){t.$container&&t.$container.length&&t.$container.fsTouch("destroy").off(P.scaleStart,T).off(P.scaleEnd,M).off(P.scale,$)}function E(t){var e=t[0],i=new Image;return void 0!==e.naturalHeight?{naturalHeight:e.naturalHeight,naturalWidth:e.naturalWidth}:"img"===e.tagName.toLowerCase()&&(i.src=e.src,{naturalHeight:i.height,naturalWidth:i.width})}var k,D=e.Plugin("viewer",{widget:!0,defaults:{controls:!0,customClass:"",labels:{count:"of",next:"Next",previous:"Previous",zoom_in:"Zoom In",zoom_out:"Zoom Out"},theme:"fs-light",zoomDelta:100,zoomEnertia:.2,zoomIncrement:.01},classes:["source","wrapper","viewport","container","image","gallery","loading_icon","controls","controls_custom","control","control_previous","control_next","control_zoom_in","control_zoom_out","control_disabled","loading"],events:{loaded:"loaded",ready:"ready"},methods:{_construct:function(e){var i,a="",r=[N.control,N.control_previous].join(" "),g=[N.control,N.control_next].join(" "),s=[N.control,N.control_zoom_in].join(" "),l=[N.control,N.control_zoom_out].join(" ");e.thisClasses=[N.base,N.loading,e.customClass,e.theme],e.images=[],e.source=!1,e.gallery=!1,e.tapTimer=null,e.action=!1,e.isRendering=!1,e.isZooming=!1,e.isAnimating=!1,e.keyDownTime=1,e.$images=this.find("img").addClass(N.source),e.index=0,e.total=e.$images.length-1,e.customControls="object"===t.type(e.controls)&&e.controls.zoom_in&&e.controls.zoom_out,e.$images.length>1&&(e.gallery=!0,e.thisClasses.push(N.gallery),!e.customControls||e.controls.previous&&e.controls.next||(e.customControls=!1));for(var c=0;c<e.$images.length;c++)i=e.$images.eq(c),e.images.push(i.attr("src"));a+='<div class="'+N.wrapper+'">',a+='<div class="'+N.loading_icon+'"></div>',a+='<div class="'+N.viewport+'"></div>',a+="</div>",e.controls&&!e.customControls&&(a+='<div class="'+N.controls+'">',a+='<button type="button" class="'+r+'">'+e.labels.previous+"</button>",a+='<button type="button" class="'+l+'">'+e.labels.zoom_out+"</button>",a+='<button type="button" class="'+s+'">'+e.labels.zoom_in+"</button>",a+='<button type="button" class="'+g+'">'+e.labels.next+"</button>",a+="</div>"),this.addClass(e.thisClasses.join(" ")).prepend(a),e.$wrapper=this.find(R.wrapper),e.$viewport=this.find(R.viewport),e.customControls?(e.$controls=t(e.controls.container).addClass([N.controls,N.controls_custom].join(" ")),e.$controlPrevious=t(e.controls.previous).addClass(r),e.$controlNext=t(e.controls.next).addClass(g),e.$controlZoomIn=t(e.controls.zoom_in).addClass(s),e.$controlZoomOut=t(e.controls.zoom_out).addClass(l)):(e.$controls=this.find(R.controls),e.$controlPrevious=this.find(R.control_previous),e.$controlNext=this.find(R.control_next),e.$controlZoomIn=this.find(R.control_zoom_in),e.$controlZoomOut=this.find(R.control_zoom_out)),e.$controlItems=e.$controlPrevious.add(e.$controlNext),e.$controlZooms=e.$controlZoomIn.add(e.$controlZoomOut),o(),e.$controlItems.on(P.click,e,y),e.$controlZooms.on([P.touchStart,P.mouseDown].join(" "),e,_).on([P.touchEnd,P.mouseUp].join(" "),e,x),n(e,e.images[e.index],!0),b(e)},_destruct:function(t){t.$wrapper.remove(),t.$image.removeClass(N.source),t.controls&&!t.customControls&&t.$controls.remove(),t.customControls&&(t.$controls.removeClass([N.controls,N.controls_custom].join(" ")),t.$controlItems.off(P.click).removeClass([N.control,N.control_previous,N.control_next].join(" ")),t.$controlZooms.off([P.touchStart,P.mouseDown].join(" ")).off([P.touchStart,P.mouseDown].join(" ")).off([P.touchEnd,P.mouseUp].join(" ")).removeClass([N.control,N.control_zoom_in,N.control_zoom_out].join(" "))),this.removeClass(t.thisClasses.join(" ")).off(P.namespace),o()},_resize:function(){S.iterate.call(q,j)},_raf:function(){S.iterate.call(q,z)},resize:j,load:function(t,e){t.index=0,"string"==typeof e?(t.total=0,t.images=[e],t.gallery=!1,t.$el.removeClass(N.gallery)):(t.total=e.length-1,t.images=e,e.length>1&&(t.gallery=!0,t.$el.addClass(N.gallery)),e=t.images[t.index]),I(t,function(){n(t,e)})},unload:function(t){I(t)}}}),A=D.namespace,R=D.classes,N=R.raw,P=D.events,S=D.functions,V=(e.window,e.$window),O=0,q=[];e.Ready(function(){i(),V.on("scroll",i),k=e.$body})});