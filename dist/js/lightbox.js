/*! formstone v0.9.0 [lightbox.js] 2016-02-04 | MIT License | formstone.it */

!function(a,b,c){"use strict";function d(){W=b.$body,X=a("html, body"),Y=b.window.location.hash.replace("#","")}function e(){$&&j()}function f(a){this.on(S.click,a,i);var b=this.data(O+"-gallery");!Z&&Y&&b===Y&&(Z=!0,this.trigger(S.click))}function g(a){k(),this.off(S.namespace)}function h(b,c){b instanceof a&&i.apply(U,[{data:a.extend(!0,{},{$object:b},P,c||{})}])}function i(c){if(!$){var d=c.data,e=d.$el,f=d.$object,g=e&&e[0].href?e[0].href||"":"",h=e&&e[0].hash?e[0].hash||"":"",i=(g.toLowerCase().split(".").pop().split(/\#|\?/),e?e.data(O+"-type"):""),j="image"===i||g.match(d.fileTypes)||"data:image"===g.substr(0,10),l=M(g),m="url"===i||!j&&!l&&"http"===g.substr(0,4)&&!h,o="element"===i||!j&&!l&&!m&&"#"===h.substr(0,1),q="undefined"!=typeof f;if(o&&(g=h),!(j||l||m||o||q))return;if(T.killEvent(c),$=a.extend({},{visible:!1,gallery:{active:!1},isMobile:b.isMobile||d.mobile,isTouch:b.support.touch,isAnimating:!0,oldContentHeight:0,oldContentWidth:0},d),$.touch=d.touch&&$.isMobile&&$.isTouch,$.margin*=2,j?$.type="image":l?$.type="video":$.type="element",j||l){var r=e.data(O+"-gallery");r&&($.gallery.active=!0,$.gallery.id=r,$.gallery.$items=a("a[data-lightbox-gallery= "+$.gallery.id+"], a[rel= "+$.gallery.id+"]"),$.gallery.index=$.gallery.$items.index($.$el),$.gallery.total=$.gallery.$items.length-1)}var t="";$.isMobile||(t+='<div class="'+[Q.raw.overlay,$.theme,$.customClass].join(" ")+'"></div>');var u=[Q.raw.base,Q.raw.loading,Q.raw.animating,$.theme,$.customClass];$.fixed&&u.push(Q.raw.fixed),$.isMobile&&u.push(Q.raw.mobile),$.isTouch&&u.push(Q.raw.touch),m&&u.push(Q.raw.iframed),(o||q)&&u.push(Q.raw.inline),t+='<div class="'+u.join(" ")+'">',t+='<button type="button" class="'+Q.raw.close+'">'+$.labels.close+"</button>",t+='<span class="'+Q.raw.loading_icon+'"></span>',t+='<div class="'+Q.raw.container+'">',t+='<div class="'+Q.raw.content+'">',(j||l)&&(t+='<div class="'+Q.raw.tools+'">',t+='<div class="'+Q.raw.controls+'">',$.gallery.active&&(t+='<button type="button" class="'+[Q.raw.control,Q.raw.control_previous].join(" ")+'">'+$.labels.previous+"</button>",t+='<button type="button" class="'+[Q.raw.control,Q.raw.control_next].join(" ")+'">'+$.labels.next+"</button>"),$.isMobile&&$.isTouch&&(t+='<button type="button" class="'+[Q.raw.caption_toggle].join(" ")+'">'+$.labels.captionClosed+"</button>"),t+="</div>",t+='<div class="'+Q.raw.meta+'">',$.gallery.active&&(t+='<p class="'+Q.raw.position+'"',$.gallery.total<1&&(t+=' style="display: none;"'),t+=">",t+='<span class="'+Q.raw.position_current+'">'+($.gallery.index+1)+"</span> ",t+=$.labels.count,t+=' <span class="'+Q.raw.position_total+'">'+($.gallery.total+1)+"</span>",t+="</p>"),t+='<div class="'+Q.raw.caption+'">',t+=$.formatter.call(e,d),t+="</div></div>",t+="</div>"),t+="</div></div></div>",W.append(t),$.$overlay=a(Q.overlay),$.$lightbox=a(Q.base),$.$close=a(Q.close),$.$container=a(Q.container),$.$content=a(Q.content),$.$tools=a(Q.tools),$.$meta=a(Q.meta),$.$position=a(Q.position),$.$caption=a(Q.caption),$.$controlBox=a(Q.controls),$.$controls=a(Q.control),$.isMobile?($.paddingVertical=$.$close.outerHeight(),$.paddingHorizontal=0,$.mobilePaddingVertical=parseInt($.$content.css("paddingTop"),10)+parseInt($.$content.css("paddingBottom"),10),$.mobilePaddingHorizontal=parseInt($.$content.css("paddingLeft"),10)+parseInt($.$content.css("paddingRight"),10)):($.paddingVertical=parseInt($.$lightbox.css("paddingTop"),10)+parseInt($.$lightbox.css("paddingBottom"),10),$.paddingHorizontal=parseInt($.$lightbox.css("paddingLeft"),10)+parseInt($.$lightbox.css("paddingRight"),10),$.mobilePaddingVertical=0,$.mobilePaddingHorizontal=0),$.contentHeight=$.$lightbox.outerHeight()-$.paddingVertical,$.contentWidth=$.$lightbox.outerWidth()-$.paddingHorizontal,$.controlHeight=$.$controls.outerHeight(),n(),$.gallery.active&&($.$lightbox.addClass(R.has_controls),E()),V.on(S.keyDown,F),W.on(S.click,[Q.overlay,Q.close].join(", "),k),$.gallery.active&&$.$lightbox.on(S.click,Q.control,D),$.isMobile&&$.isTouch&&$.$lightbox.on(S.click,Q.caption_toggle,p),$.$lightbox.fsTransition({property:"opacity"},function(){j?s(g):l?A(g):m?H(g):o?G(g):q&&I($.$object)}).addClass(Q.raw.open),$.$overlay.addClass(Q.raw.open)}}function j(a){"object"!=typeof a&&($.targetHeight=arguments[0],$.targetWidth=arguments[1]),"element"===$.type?J($.$content.find("> :first-child")):"image"===$.type?y():"video"===$.type&&B(),m()}function k(a){T.killEvent(a),$&&($.$lightbox.fsTransition("destroy"),$.$container.fsTransition("destroy"),t(),$.$lightbox.addClass(Q.raw.animating).fsTransition({property:"opacity"},function(a){$.$lightbox.off(S.namespace),$.$container.off(S.namespace),V.off(S.keyDown),W.off(S.namespace),$.$overlay.remove(),$.$lightbox.remove(),$=null,V.trigger(S.close)}),$.$lightbox.removeClass(Q.raw.open),$.$overlay.removeClass(Q.raw.open),$.isMobile&&X.removeClass(R.lock))}function l(){var a=o();$.isMobile?0:$.duration;$.isMobile||$.$controls.css({marginTop:($.contentHeight-$.controlHeight-$.metaHeight)/2}),$.$lightbox.fsTransition({property:$.contentHeight!==$.oldContentHeight?"height":"width"},function(){$.$container.fsTransition({property:"opacity"},function(){$.$lightbox.removeClass(Q.raw.animating),$.isAnimating=!1}),$.$lightbox.removeClass(Q.raw.loading),$.visible=!0,V.trigger(S.open),$.gallery.active&&C()}),$.isMobile||$.$lightbox.css({height:$.contentHeight+$.paddingVertical,width:$.contentWidth+$.paddingHorizontal,top:$.fixed?0:a.top});var b=$.oldContentHeight!==$.contentHeight||$.oldContentWidth!==$.contentWidth;($.isMobile||!b)&&$.$lightbox.fsTransition("resolve"),$.oldContentHeight=$.contentHeight,$.oldContentWidth=$.contentWidth,$.isMobile&&X.addClass(R.lock)}function m(){if($.visible&&!$.isMobile){var a=o();$.$controls.css({marginTop:($.contentHeight-$.controlHeight-$.metaHeight)/2}),$.$lightbox.css({height:$.contentHeight+$.paddingVertical,width:$.contentWidth+$.paddingHorizontal,top:$.fixed?0:a.top})}}function n(){var a=o();$.$lightbox.css({top:$.fixed?0:a.top})}function o(){if($.isMobile)return{left:0,top:0};var a={left:(b.windowWidth-$.contentWidth-$.paddingHorizontal)/2,top:$.top<=0?(b.windowHeight-$.contentHeight-$.paddingVertical)/2:$.top};return $.fixed!==!0&&(a.top+=V.scrollTop()),a}function p(a){T.killEvent(a),$.captionOpen?q():($.$lightbox.addClass(Q.raw.caption_open).find(Q.caption_toggle).text($.labels.captionOpen),$.captionOpen=!0)}function q(){$.$lightbox.removeClass(Q.raw.caption_open).find(Q.caption_toggle).text($.labels.captionClosed),$.captionOpen=!1}function r(){var a=this.attr("title"),b=a!==c&&a?a.replace(/^\s+|\s+$/g,""):!1;return b?'<p class="caption">'+b+"</p>":""}function s(b){$.hasScaled=!1,$.$imageContainer=a('<div class="'+Q.raw.image_container+'"><img></div>'),$.$image=$.$imageContainer.find("img"),$.$image.one(S.load,function(){var a=L($.$image);$.naturalHeight=a.naturalHeight,$.naturalWidth=a.naturalWidth,$.retina&&($.naturalHeight/=2,$.naturalWidth/=2),$.$content.prepend($.$imageContainer),""===$.$caption.html()?($.$caption.hide(),$.$lightbox.removeClass(R.has_caption)):($.$caption.show(),$.$lightbox.addClass(R.has_caption)),y(),l(),$.touch&&(u(),w({scale:1,deltaX:0,deltaY:0}),x(),$.$container.fsTouch({pan:!0,scale:!0}).on(S.scaleStart,v).on(S.scaleEnd,x).on(S.scale,w))}).error(K).attr("src",b).addClass(Q.raw.image),($.$image[0].complete||4===$.$image[0].readyState)&&$.$image.trigger(S.load)}function t(){$.$image&&$.$image.length&&$.$container.fsTouch("destroy")}function u(){$.scalePosition=$.$imageContainer.position(),$.scaleY=$.scalePosition.top,$.scaleX=$.scalePosition.left,$.scaleHeight=$.$image.outerHeight(),$.scaleWidth=$.$image.outerWidth()}function v(a){u(),$.$lightbox.removeClass(Q.raw.animating)}function w(a){$.targetContainerY=$.scaleY+a.deltaY,$.targetContainerX=$.scaleX+a.deltaX,$.targetImageHeight=$.scaleHeight*a.scale,$.targetImageWidth=$.scaleWidth*a.scale,$.targetImageHeight<$.scaleMinHeight&&($.targetImageHeight=$.scaleMinHeight),$.targetImageHeight>$.scaleMaxHeight&&($.targetImageHeight=$.scaleMaxHeight),$.targetImageWidth<$.scaleMinWidth&&($.targetImageWidth=$.scaleMinWidth),$.targetImageWidth>$.scaleMaxWidth&&($.targetImageWidth=$.scaleMaxWidth),$.hasScaled=!0,$.isScaling=!0,$.$imageContainer.css({top:$.targetContainerY,left:$.targetContainerX}),$.$image.css({height:$.targetImageHeight,width:$.targetImageWidth,top:-($.targetImageHeight/2),left:-($.targetImageWidth/2)})}function x(a){u(),$.isScaling=!1;var b=$.$container.outerHeight()-$.metaHeight,c=$.$container.outerWidth();$.scaleMinY=b-$.scaleHeight/2,$.scaleMinX=c-$.scaleWidth/2,$.scaleMaxY=$.scaleHeight/2,$.scaleMaxX=$.scaleWidth/2,$.scaleHeight<b?$.scalePosition.top=b/2:($.scalePosition.top<$.scaleMinY&&($.scalePosition.top=$.scaleMinY),$.scalePosition.top>$.scaleMaxY&&($.scalePosition.top=$.scaleMaxY)),$.scaleWidth<c?$.scalePosition.left=c/2:($.scalePosition.left<$.scaleMinX&&($.scalePosition.left=$.scaleMinX),$.scalePosition.left>$.scaleMaxX&&($.scalePosition.left=$.scaleMaxX)),$.$lightbox.addClass(Q.raw.animating),$.$imageContainer.css({left:$.scalePosition.left,top:$.scalePosition.top})}function y(){if($.$image){var a=0;for($.windowHeight=$.viewportHeight=b.windowHeight-$.mobilePaddingVertical-$.paddingVertical,$.windowWidth=$.viewportWidth=b.windowWidth-$.mobilePaddingHorizontal-$.paddingHorizontal,$.contentHeight=1/0,$.contentWidth=1/0,$.imageMarginTop=0,$.imageMarginLeft=0;$.contentHeight>$.viewportHeight&&2>a;)$.imageHeight=0===a?$.naturalHeight:$.$image.outerHeight(),$.imageWidth=0===a?$.naturalWidth:$.$image.outerWidth(),$.metaHeight=0===a?0:$.metaHeight,$.spacerHeight=0===a?0:$.spacerHeight,0===a&&($.ratioHorizontal=$.imageHeight/$.imageWidth,$.ratioVertical=$.imageWidth/$.imageHeight,$.isWide=$.imageWidth>$.imageHeight),$.imageHeight<$.minHeight&&($.minHeight=$.imageHeight),$.imageWidth<$.minWidth&&($.minWidth=$.imageWidth),$.isMobile?($.isTouch?($.$controlBox.css({width:b.windowWidth}),$.spacerHeight=$.$controls.outerHeight(!0)):($.$tools.css({width:b.windowWidth}),$.spacerHeight=$.$tools.outerHeight(!0)),$.contentHeight=$.viewportHeight,$.contentWidth=$.viewportWidth,z(),$.imageMarginTop=($.contentHeight-$.targetImageHeight-$.spacerHeight)/2,$.imageMarginLeft=($.contentWidth-$.targetImageWidth)/2):(0===a&&($.viewportHeight-=$.margin+$.paddingVertical,$.viewportWidth-=$.margin+$.paddingHorizontal),$.viewportHeight-=$.metaHeight,z(),$.contentHeight=$.targetImageHeight,$.contentWidth=$.targetImageWidth),$.isMobile||$.isTouch||$.$meta.css({width:$.contentWidth}),$.hasScaled||($.$image.css({height:$.targetImageHeight,width:$.targetImageWidth}),$.touch?$.$image.css({top:-($.targetImageHeight/2),left:-($.targetImageWidth/2)}):$.$image.css({marginTop:$.imageMarginTop,marginLeft:$.imageMarginLeft})),$.isMobile||($.metaHeight=$.$meta.outerHeight(!0),$.contentHeight+=$.metaHeight),a++;$.touch&&($.scaleMinHeight=$.targetImageHeight,$.scaleMinWidth=$.targetImageWidth,$.scaleMaxHeight=$.naturalHeight,$.scaleMaxWidth=$.naturalWidth)}}function z(){var a=$.isMobile?$.contentHeight-$.spacerHeight:$.viewportHeight,b=$.isMobile?$.contentWidth:$.viewportWidth;$.isWide?($.targetImageWidth=b,$.targetImageHeight=$.targetImageWidth*$.ratioHorizontal,$.targetImageHeight>a&&($.targetImageHeight=a,$.targetImageWidth=$.targetImageHeight*$.ratioVertical)):($.targetImageHeight=a,$.targetImageWidth=$.targetImageHeight*$.ratioVertical,$.targetImageWidth>b&&($.targetImageWidth=b,$.targetImageHeight=$.targetImageWidth*$.ratioHorizontal)),($.targetImageWidth>$.imageWidth||$.targetImageHeight>$.imageHeight)&&($.targetImageHeight=$.imageHeight,$.targetImageWidth=$.imageWidth),($.targetImageWidth<$.minWidth||$.targetImageHeight<$.minHeight)&&($.targetImageWidth<$.minWidth?($.targetImageWidth=$.minWidth,$.targetImageHeight=$.targetImageWidth*$.ratioHorizontal):($.targetImageHeight=$.minHeight,$.targetImageWidth=$.targetImageHeight*$.ratioVertical))}function A(b){var c=b.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i),d=b.match(/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/),e=b.split("?"),f=null!==c?"//www.youtube.com/embed/"+c[1]:"//player.vimeo.com/video/"+d[3];e.length>=2&&(f+="?"+e.slice(1)[0].trim()),$.$videoWrapper=a('<div class="'+Q.raw.video_wrapper+'"></div>'),$.$video=a('<iframe class="'+Q.raw.video+'" frameborder="0" seamless="seamless" allowfullscreen></iframe>'),$.$video.attr("src",f).addClass(Q.raw.video).prependTo($.$videoWrapper),$.$content.prepend($.$videoWrapper),B(),l()}function B(){$.windowHeight=$.viewportHeight=b.windowHeight-$.mobilePaddingVertical-$.paddingVertical,$.windowWidth=$.viewportWidth=b.windowWidth-$.mobilePaddingHorizontal-$.paddingHorizontal,$.videoMarginTop=0,$.videoMarginLeft=0,$.isMobile?($.isTouch?($.$controlBox.css({width:b.windowWidth}),$.spacerHeight=$.$controls.outerHeight(!0)):($.$tools.css({width:b.windowWidth}),$.spacerHeight=$.$tools.outerHeight(!0)),$.viewportHeight-=$.spacerHeight,$.targetVideoWidth=$.viewportWidth,$.targetVideoHeight=$.targetVideoWidth*$.videoRatio,$.targetVideoHeight>$.viewportHeight&&($.targetVideoHeight=$.viewportHeight,$.targetVideoWidth=$.targetVideoHeight/$.videoRatio),$.videoMarginTop=($.viewportHeight-$.targetVideoHeight)/2,$.videoMarginLeft=($.viewportWidth-$.targetVideoWidth)/2):($.viewportHeight=$.windowHeight-$.margin,$.viewportWidth=$.windowWidth-$.margin,$.targetVideoWidth=$.videoWidth>$.viewportWidth?$.viewportWidth:$.videoWidth,$.targetVideoWidth<$.minWidth&&($.targetVideoWidth=$.minWidth),$.targetVideoHeight=$.targetVideoWidth*$.videoRatio,$.contentHeight=$.targetVideoHeight,$.contentWidth=$.targetVideoWidth),$.isMobile||$.isTouch||$.$meta.css({width:$.contentWidth}),$.$videoWrapper.css({height:$.targetVideoHeight,width:$.targetVideoWidth,marginTop:$.videoMarginTop,marginLeft:$.videoMarginLeft}),$.isMobile||($.metaHeight=$.$meta.outerHeight(!0),$.contentHeight=$.targetVideoHeight+$.metaHeight)}function C(b){var c="";$.gallery.index>0&&(c=$.gallery.$items.eq($.gallery.index-1).attr("href"),M(c)||a('<img src="'+c+'">')),$.gallery.index<$.gallery.total&&(c=$.gallery.$items.eq($.gallery.index+1).attr("href"),M(c)||a('<img src="'+c+'">'))}function D(b){T.killEvent(b);var c=a(b.currentTarget);$.isAnimating||c.hasClass(Q.raw.control_disabled)||($.isAnimating=!0,t(),q(),$.gallery.index+=c.hasClass(Q.raw.control_next)?1:-1,$.gallery.index>$.gallery.total&&($.gallery.index=$.infinite?0:$.gallery.total),$.gallery.index<0&&($.gallery.index=$.infinite?$.gallery.total:0),$.$lightbox.addClass(Q.raw.animating),$.$container.fsTransition({property:"opacity"},function(){"undefined"!=typeof $.$imageContainer&&$.$imageContainer.remove(),"undefined"!=typeof $.$videoWrapper&&$.$videoWrapper.remove(),$.$el=$.gallery.$items.eq($.gallery.index),$.$caption.html($.formatter.call($.$el,$)),$.$position.find(Q.position_current).html($.gallery.index+1);var a=$.$el.attr("href"),b=M(a);b?($.type="video",A(a)):($.type="image",s(a)),E()}),$.$lightbox.addClass(Q.raw.loading))}function E(){$.$controls.removeClass(Q.raw.control_disabled),$.infinite||(0===$.gallery.index&&$.$controls.filter(Q.control_previous).addClass(R.control_disabled),$.gallery.index===$.gallery.total&&$.$controls.filter(Q.control_next).addClass(R.control_disabled))}function F(a){!$.gallery.active||37!==a.keyCode&&39!==a.keyCode?27===a.keyCode&&$.$close.trigger(S.click):(T.killEvent(a),$.$controls.filter(37===a.keyCode?Q.control_previous:Q.control_next).trigger(S.click))}function G(b){var c=a(b).find("> :first-child").clone();I(c)}function H(b){b+=b.indexOf("?")>-1?"&"+$.requestKey+"=true":"?"+$.requestKey+"=true";var c=a('<iframe class="'+Q.raw.iframe+'" src="'+b+'"></iframe>');I(c)}function I(a){$.$content.append(a),J(a),l()}function J(a){$.windowHeight=b.windowHeight-$.mobilePaddingVertical-$.paddingVertical,$.windowWidth=b.windowWidth-$.mobilePaddingHorizontal-$.paddingHorizontal,$.objectHeight=a.outerHeight(!0),$.objectWidth=a.outerWidth(!0),$.targetHeight=$.targetHeight||($.$el?$.$el.data(O+"-height"):null),$.targetWidth=$.targetWidth||($.$el?$.$el.data(O+"-width"):null),$.maxHeight=$.windowHeight<0?$.minHeight:$.windowHeight,$.isIframe=a.is("iframe"),$.objectMarginTop=0,$.objectMarginLeft=0,$.isMobile||($.windowHeight-=$.margin,$.windowWidth-=$.margin),$.contentHeight=$.targetHeight?$.targetHeight:$.isIframe||$.isMobile?$.windowHeight:$.objectHeight,$.contentWidth=$.targetWidth?$.targetWidth:$.isIframe||$.isMobile?$.windowWidth:$.objectWidth,($.isIframe||$.isObject)&&$.isMobile?($.contentHeight=$.windowHeight,$.contentWidth=$.windowWidth):$.isObject&&($.contentHeight=$.contentHeight>$.windowHeight?$.windowHeight:$.contentHeight,$.contentWidth=$.contentWidth>$.windowWidth?$.windowWidth:$.contentWidth)}function K(b){var c=a('<div class="'+Q.raw.error+'"><p>Error Loading Resource</p></div>');$.type="element",$.$tools.remove(),$.$image.off(S.namespace),I(c)}function L(a){var b=a[0],c=new Image;return"undefined"!=typeof b.naturalHeight?{naturalHeight:b.naturalHeight,naturalWidth:b.naturalWidth}:"img"===b.tagName.toLowerCase()?(c.src=b.src,{naturalHeight:c.height,naturalWidth:c.width}):!1}function M(a){return a.indexOf("youtube.com")>-1||a.indexOf("youtu.be")>-1||a.indexOf("vimeo.com")>-1}var N=b.Plugin("lightbox",{widget:!0,defaults:{customClass:"",fileTypes:/\.(jpg|sjpg|jpeg|png|gif)$/i,fixed:!1,formatter:r,infinite:!1,labels:{close:"Close",count:"of",next:"Next",previous:"Previous",captionClosed:"View Caption",captionOpen:"Close Caption"},margin:50,minHeight:100,minWidth:100,mobile:!1,retina:!1,requestKey:"fs-lightbox",theme:"fs-light",top:0,touch:!0,videoRatio:.5625,videoWidth:800},classes:["loading","animating","fixed","mobile","touch","inline","iframed","open","overlay","close","loading_icon","container","content","image","image_container","video","video_wrapper","tools","meta","controls","control","control_previous","control_next","control_disabled","position","position_current","position_total","caption_toggle","caption","caption_open","has_controls","has_caption","iframe","error","lock"],events:{open:"open",close:"close"},methods:{_setup:d,_construct:f,_destruct:g,_resize:e,resize:j},utilities:{_initialize:h,close:k}}),O=N.namespace,P=N.defaults,Q=N.classes,R=Q.raw,S=N.events,T=N.functions,U=b.window,V=b.$window,W=null,X=null,Y=!1,Z=!1,$=null}(jQuery,Formstone);