/*! PhotoSwipe - v4.1.3 - 2019-01-08
* http://photoswipe.com
* Copyright (c) 2019 Dmitry Semenov; */
!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.PhotoSwipe=t()}(this,function(){"use strict";return function(p,n,e,t){var m={features:null,bind:function(e,t,n,i){var o=(i?"remove":"add")+"EventListener";t=t.split(" ");for(var a=0;a<t.length;a++)t[a]&&e[o](t[a],n,!1)},isArray:function(e){return e instanceof Array},createEl:function(e,t){t=document.createElement(t||"div");return e&&(t.className=e),t},getScrollY:function(){var e=window.pageYOffset;return e!==undefined?e:document.documentElement.scrollTop},unbind:function(e,t,n){m.bind(e,t,n,!0)},removeClass:function(e,t){t=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(t," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")},addClass:function(e,t){m.hasClass(e,t)||(e.className+=(e.className?" ":"")+t)},hasClass:function(e,t){return e.className&&new RegExp("(^|\\s)"+t+"(\\s|$)").test(e.className)},getChildByClass:function(e,t){for(var n=e.firstChild;n;){if(m.hasClass(n,t))return n;n=n.nextSibling}},arraySearch:function(e,t,n){for(var i=e.length;i--;)if(e[i][n]===t)return i;return-1},extend:function(e,t,n){for(var i in t)t.hasOwnProperty(i)&&(n&&e.hasOwnProperty(i)||(e[i]=t[i]))},easing:{sine:{out:function(e){return Math.sin(e*(Math.PI/2))},inOut:function(e){return-(Math.cos(Math.PI*e)-1)/2}},cubic:{out:function(e){return--e*e*e+1}}},detectFeatures:function(){if(m.features)return m.features;var e,t,n=m.createEl().style,i="",o={};o.oldIE=document.all&&!document.addEventListener,o.touch="ontouchstart"in window,window.requestAnimationFrame&&(o.raf=window.requestAnimationFrame,o.caf=window.cancelAnimationFrame),o.pointerEvent=!!window.PointerEvent||navigator.msPointerEnabled,o.pointerEvent||(e=navigator.userAgent,!/iP(hone|od)/.test(navigator.platform)||(t=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/))&&0<t.length&&1<=(t=parseInt(t[1],10))&&t<8&&(o.isOldIOSPhone=!0),t=(t=e.match(/Android\s([0-9\.]*)/))?t[1]:0,1<=(t=parseFloat(t))&&(t<4.4&&(o.isOldAndroid=!0),o.androidVersion=t),o.isMobileOpera=/opera mini|opera mobi/i.test(e));for(var a,r,l,s=["transform","perspective","animationName"],u=["","webkit","Moz","ms","O"],c=0;c<4;c++){for(var i=u[c],d=0;d<3;d++)a=s[d],r=i+(i?a.charAt(0).toUpperCase()+a.slice(1):a),!o[a]&&r in n&&(o[a]=r);i&&!o.raf&&(i=i.toLowerCase(),o.raf=window[i+"RequestAnimationFrame"],o.raf&&(o.caf=window[i+"CancelAnimationFrame"]||window[i+"CancelRequestAnimationFrame"]))}return o.raf||(l=0,o.raf=function(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-l)),i=window.setTimeout(function(){e(t+n)},n);return l=t+n,i},o.caf=function(e){clearTimeout(e)}),o.svg=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,m.features=o}};m.detectFeatures(),m.features.oldIE&&(m.bind=function(e,t,n,i){t=t.split(" ");for(var o,a=(i?"detach":"attach")+"Event",r=function(){n.handleEvent.call(n)},l=0;l<t.length;l++)if(o=t[l])if("object"==typeof n&&n.handleEvent){if(i){if(!n["oldIE"+o])return!1}else n["oldIE"+o]=r;e[a]("on"+o,n["oldIE"+o])}else e[a]("on"+o,n)});var f=this,a=25,h={allowPanToNext:!0,spacing:.12,bgOpacity:1,mouseUsed:!1,loop:!0,pinchToClose:!0,closeOnScroll:!0,closeOnVerticalDrag:!0,verticalDragRange:.75,hideAnimationDuration:333,showAnimationDuration:333,showHideOpacity:!1,focus:!0,escKey:!0,arrowKeys:!0,mainScrollEndFriction:.35,panEndFriction:.35,isClickableElement:function(e){return"A"===e.tagName},getDoubleTapZoom:function(e,t){return e||t.initialZoomLevel<.7?1:1.33},maxSpreadZoom:1.33,modal:!0,scaleMode:"fit"};m.extend(h,t);var r,i,o,y,l,s,u,c,d,x,g,v,w,b,I,C,D,T,M,S,A,E,O,k,R,P,Z,F,L,z,_,N,U,H,Y,W,B,G,X,V,K,q,$,j,J,Q,ee,te,ne,ie,oe,ae,re,le,se,ue,ce=function(){return{x:0,y:0}},de=ce(),pe=ce(),me=ce(),fe={},he=0,ye={},xe=ce(),ge=0,ve=!0,we=[],be={},Ie=!1,Ce=function(e,t){m.extend(f,t.publicMethods),we.push(e)},De=function(e){var t=Vt();return t-1<e?e-t:e<0?t+e:e},Te={},Me=function(e,t){return Te[e]||(Te[e]=[]),Te[e].push(t)},Se=function(e){var t=Te[e];if(t){var n=Array.prototype.slice.call(arguments);n.shift();for(var i=0;i<t.length;i++)t[i].apply(f,n)}},Ae=function(){return(new Date).getTime()},Ee=function(e){le=e,f.bg.style.opacity=e*h.bgOpacity},Oe=function(e,t,n,i,o){(!Ie||o&&o!==f.currItem)&&(i/=(o||f.currItem).fitRatio),e[E]=v+t+"px, "+n+"px"+w+" scale("+i+")"},ke=function(e){ne&&(e&&(x>f.currItem.fitRatio?Ie||(an(f.currItem,!1,!0),Ie=!0):Ie&&(an(f.currItem),Ie=!1)),Oe(ne,me.x,me.y,x))},Re=function(e){e.container&&Oe(e.container.style,e.initialPosition.x,e.initialPosition.y,e.initialZoomLevel,e)},Pe=function(e,t){t[E]=v+e+"px, 0px"+w},Ze=function(e,t){var n;!h.loop&&t&&(n=y+(xe.x*he-e)/xe.x,t=Math.round(e-mt.x),(n<0&&0<t||n>=Vt()-1&&t<0)&&(e=mt.x+t*h.mainScrollEndFriction)),mt.x=e,Pe(e,l)},Fe=function(e,t){var n=ft[e]-ye[e];return pe[e]+de[e]+n-t/g*n},Le=function(e,t){e.x=t.x,e.y=t.y,t.id&&(e.id=t.id)},ze=function(e){e.x=Math.round(e.x),e.y=Math.round(e.y)},_e=null,Ne=function(){_e&&(m.unbind(document,"mousemove",Ne),m.addClass(p,"pswp--has_mouse"),h.mouseUsed=!0,Se("mouseUsed")),_e=setTimeout(function(){_e=null},100)},Ue=function(e,t){e=en(f.currItem,fe,e);return t&&(te=e),e},He=function(e){return(e=e||f.currItem).initialZoomLevel},Ye=function(e){return 0<(e=e||f.currItem).w?h.maxSpreadZoom:1},We=function(e,t,n,i){return i===f.currItem.initialZoomLevel?(n[e]=f.currItem.initialPosition[e],!0):(n[e]=Fe(e,i),n[e]>t.min[e]?(n[e]=t.min[e],!0):n[e]<t.max[e]&&(n[e]=t.max[e],!0))},Be=function(e){var t="";h.escKey&&27===e.keyCode?t="close":h.arrowKeys&&(37===e.keyCode?t="prev":39===e.keyCode&&(t="next")),t&&(e.ctrlKey||e.altKey||e.shiftKey||e.metaKey||(e.preventDefault?e.preventDefault():e.returnValue=!1,f[t]()))},Ge=function(e){e&&(q||K||ie||B)&&(e.preventDefault(),e.stopPropagation())},Xe=function(){f.setScrollOffset(0,m.getScrollY())},Ve={},Ke=0,qe=function(e){Ve[e]&&(Ve[e].raf&&P(Ve[e].raf),Ke--,delete Ve[e])},$e=function(e){Ve[e]&&qe(e),Ve[e]||(Ke++,Ve[e]={})},je=function(){for(var e in Ve)Ve.hasOwnProperty(e)&&qe(e)},Je=function(e,t,n,i,o,a,r){var l,s=Ae();$e(e);var u=function(){if(Ve[e]){if(l=Ae()-s,i<=l)return qe(e),a(n),void(r&&r());a((n-t)*o(l/i)+t),Ve[e].raf=R(u)}};u()},t={shout:Se,listen:Me,viewportSize:fe,options:h,isMainScrollAnimating:function(){return ie},getZoomLevel:function(){return x},getCurrentIndex:function(){return y},isDragging:function(){return X},isZooming:function(){return Q},setScrollOffset:function(e,t){ye.x=e,z=ye.y=t,Se("updateScrollOffset",ye)},applyZoomPan:function(e,t,n,i){me.x=t,me.y=n,x=e,ke(i)},init:function(){if(!r&&!i){var e;f.framework=m,f.template=p,f.bg=m.getChildByClass(p,"pswp__bg"),Z=p.className,r=!0,_=m.detectFeatures(),R=_.raf,P=_.caf,E=_.transform,L=_.oldIE,f.scrollWrap=m.getChildByClass(p,"pswp__scroll-wrap"),f.container=m.getChildByClass(f.scrollWrap,"pswp__container"),l=f.container.style,f.itemHolders=C=[{el:f.container.children[0],wrap:0,index:-1},{el:f.container.children[1],wrap:0,index:-1},{el:f.container.children[2],wrap:0,index:-1}],C[0].el.style.display=C[2].el.style.display="none",function(){if(E){var e=_.perspective&&!k;return v="translate"+(e?"3d(":"("),w=_.perspective?", 0px)":")"}E="left",m.addClass(p,"pswp--ie"),Pe=function(e,t){t.left=e+"px"},Re=function(e){var t=1<e.fitRatio?1:e.fitRatio,n=e.container.style,i=t*e.w,t=t*e.h;n.width=i+"px",n.height=t+"px",n.left=e.initialPosition.x+"px",n.top=e.initialPosition.y+"px"},ke=function(){var e,t,n,i;ne&&(e=ne,n=(t=1<(i=f.currItem).fitRatio?1:i.fitRatio)*i.w,i=t*i.h,e.width=n+"px",e.height=i+"px",e.left=me.x+"px",e.top=me.y+"px")}}(),d={resize:f.updateSize,orientationchange:function(){clearTimeout(N),N=setTimeout(function(){fe.x!==f.scrollWrap.clientWidth&&f.updateSize()},500)},scroll:Xe,keydown:Be,click:Ge};var t=_.isOldIOSPhone||_.isOldAndroid||_.isMobileOpera;for(_.animationName&&_.transform&&!t||(h.showAnimationDuration=h.hideAnimationDuration=0),e=0;e<we.length;e++)f["init"+we[e]]();n&&(f.ui=new n(f,m)).init(),Se("firstUpdate"),y=y||h.index||0,(isNaN(y)||y<0||y>=Vt())&&(y=0),f.currItem=Xt(y),(_.isOldIOSPhone||_.isOldAndroid)&&(ve=!1),p.setAttribute("aria-hidden","false"),h.modal&&(ve?p.style.position="fixed":(p.style.position="absolute",p.style.top=m.getScrollY()+"px")),z===undefined&&(Se("initialLayout"),z=F=m.getScrollY());t="pswp--open ";for(h.mainClass&&(t+=h.mainClass+" "),h.showHideOpacity&&(t+="pswp--animate_opacity "),t+=k?"pswp--touch":"pswp--notouch",t+=_.animationName?" pswp--css_animation":"",t+=_.svg?" pswp--svg":"",m.addClass(p,t),f.updateSize(),s=-1,ge=null,e=0;e<3;e++)Pe((e+s)*xe.x,C[e].el.style);L||m.bind(f.scrollWrap,c,f),Me("initialZoomInEnd",function(){f.setContent(C[0],y-1),f.setContent(C[2],y+1),C[0].el.style.display=C[2].el.style.display="block",h.focus&&p.focus(),m.bind(document,"keydown",f),_.transform&&m.bind(f.scrollWrap,"click",f),h.mouseUsed||m.bind(document,"mousemove",Ne),m.bind(window,"resize scroll orientationchange",f),Se("bindEvents")}),f.setContent(C[1],y),f.updateCurrItem(),Se("afterInit"),ve||(b=setInterval(function(){Ke||X||Q||x!==f.currItem.initialZoomLevel||f.updateSize()},1e3)),m.addClass(p,"pswp--visible")}},close:function(){r&&(i=!(r=!1),Se("close"),m.unbind(window,"resize scroll orientationchange",f),m.unbind(window,"scroll",d.scroll),m.unbind(document,"keydown",f),m.unbind(document,"mousemove",Ne),_.transform&&m.unbind(f.scrollWrap,"click",f),X&&m.unbind(window,u,f),clearTimeout(N),Se("unbindEvents"),Kt(f.currItem,null,!0,f.destroy))},destroy:function(){Se("destroy"),Yt&&clearTimeout(Yt),p.setAttribute("aria-hidden","true"),p.className=Z,b&&clearInterval(b),m.unbind(f.scrollWrap,c,f),m.unbind(window,"scroll",f),gt(),je(),Te=null},panTo:function(e,t,n){n||(e>te.min.x?e=te.min.x:e<te.max.x&&(e=te.max.x),t>te.min.y?t=te.min.y:t<te.max.y&&(t=te.max.y)),me.x=e,me.y=t,ke()},handleEvent:function(e){e=e||window.event,d[e.type]&&d[e.type](e)},goTo:function(e){var t=(e=De(e))-y;ge=t,y=e,f.currItem=Xt(y),he-=t,Ze(xe.x*he),je(),ie=!1,f.updateCurrItem()},next:function(){f.goTo(y+1)},prev:function(){f.goTo(y-1)},updateCurrZoomItem:function(e){var t;e&&Se("beforeChange",0),ne=C[1].el.children.length?(t=C[1].el.children[0],m.hasClass(t,"pswp__zoom-wrap")?t.style:null):null,te=f.currItem.bounds,g=x=f.currItem.initialZoomLevel,me.x=te.center.x,me.y=te.center.y,e&&Se("afterChange")},invalidateCurrItems:function(){I=!0;for(var e=0;e<3;e++)C[e].item&&(C[e].item.needsUpdate=!0)},updateCurrItem:function(e){if(0!==ge){var t,n=Math.abs(ge);if(!(e&&n<2)){f.currItem=Xt(y),Ie=!1,Se("beforeChange",ge),3<=n&&(s+=ge+(0<ge?-3:3),n=3);for(var i=0;i<n;i++)0<ge?(t=C.shift(),C[2]=t,Pe((++s+2)*xe.x,t.el.style),f.setContent(t,y-n+i+1+1)):(t=C.pop(),C.unshift(t),Pe(--s*xe.x,t.el.style),f.setContent(t,y+n-i-1-1));!ne||1!==Math.abs(ge)||(e=Xt(D)).initialZoomLevel!==x&&(en(e,fe),an(e),Re(e)),ge=0,f.updateCurrZoomItem(),D=y,Se("afterChange")}}},updateSize:function(e){if(!ve&&h.modal){var t=m.getScrollY();if(z!==t&&(p.style.top=t+"px",z=t),!e&&be.x===window.innerWidth&&be.y===window.innerHeight)return;be.x=window.innerWidth,be.y=window.innerHeight,p.style.height=be.y+"px"}if(fe.x=f.scrollWrap.clientWidth,fe.y=f.scrollWrap.clientHeight,Xe(),xe.x=fe.x+Math.round(fe.x*h.spacing),xe.y=fe.y,Ze(xe.x*he),Se("beforeResize"),s!==undefined){for(var n,i,o,a=0;a<3;a++)n=C[a],Pe((a+s)*xe.x,n.el.style),o=y+a-1,h.loop&&2<Vt()&&(o=De(o)),(i=Xt(o))&&(I||i.needsUpdate||!i.bounds)?(f.cleanSlide(i),f.setContent(n,o),1===a&&(f.currItem=i,f.updateCurrZoomItem(!0)),i.needsUpdate=!1):-1===n.index&&0<=o&&f.setContent(n,o),i&&i.container&&(en(i,fe),an(i),Re(i));I=!1}g=x=f.currItem.initialZoomLevel,(te=f.currItem.bounds)&&(me.x=te.center.x,me.y=te.center.y,ke(!0)),Se("resize")},zoomTo:function(t,e,n,i,o){e&&(g=x,ft.x=Math.abs(e.x)-me.x,ft.y=Math.abs(e.y)-me.y,Le(pe,me));var e=Ue(t,!1),a={};We("x",e,a,t),We("y",e,a,t);var r=x,l={x:me.x,y:me.y};ze(a);e=function(e){1===e?(x=t,me.x=a.x,me.y=a.y):(x=(t-r)*e+r,me.x=(a.x-l.x)*e+l.x,me.y=(a.y-l.y)*e+l.y),o&&o(e),ke(1===e)};n?Je("customZoomTo",0,1,n,i||m.easing.sine.inOut,e):e(1)}},Qe=30,et=10,tt={},nt={},it={},ot={},at={},rt=[],lt={},st=[],ut={},ct=0,dt=ce(),pt=0,mt=ce(),ft=ce(),ht=ce(),yt=function(e,t){return e.x===t.x&&e.y===t.y},xt=function(e,t){return ut.x=Math.abs(e.x-t.x),ut.y=Math.abs(e.y-t.y),Math.sqrt(ut.x*ut.x+ut.y*ut.y)},gt=function(){$&&(P($),$=null)},vt=function(){X&&($=R(vt),Ft())},wt=function(){return!("fit"===h.scaleMode&&x===f.currItem.initialZoomLevel)},bt=function(e,t){return!(!e||e===document)&&(!(e.getAttribute("class")&&-1<e.getAttribute("class").indexOf("pswp__scroll-wrap"))&&(t(e)?e:bt(e.parentNode,t)))},It={},Ct=function(e,t){return It.prevent=!bt(e.target,h.isClickableElement),Se("preventDragEvent",e,t,It),It.prevent},Dt=function(e,t){return t.x=e.pageX,t.y=e.pageY,t.id=e.identifier,t},Tt=function(e,t,n){n.x=.5*(e.x+t.x),n.y=.5*(e.y+t.y)},Mt=function(e,t,n){var i;50<e-H&&((i=2<st.length?st.shift():{}).x=t,i.y=n,st.push(i),H=e)},St=function(){var e=me.y-f.currItem.initialPosition.y;return 1-Math.abs(e/(fe.y/2))},At={},Et={},Ot=[],kt=function(e){for(;0<Ot.length;)Ot.pop();return O?(ue=0,rt.forEach(function(e){0===ue?Ot[0]=e:1===ue&&(Ot[1]=e),ue++})):-1<e.type.indexOf("touch")?e.touches&&0<e.touches.length&&(Ot[0]=Dt(e.touches[0],At),1<e.touches.length&&(Ot[1]=Dt(e.touches[1],Et))):(At.x=e.pageX,At.y=e.pageY,At.id="",Ot[0]=At),Ot},Rt=function(e,t){var n,i,o,a=me[e]+t[e],r=0<t[e],l=mt.x+t.x,s=mt.x-lt.x,u=a>te.min[e]||a<te.max[e]?h.panEndFriction:1,a=me[e]+t[e]*u;if((h.allowPanToNext||x===f.currItem.initialZoomLevel)&&(ne?"h"!==oe||"x"!==e||K||(r?(a>te.min[e]&&(u=h.panEndFriction,te.min[e],n=te.min[e]-pe[e]),(n<=0||s<0)&&1<Vt()?(o=l,s<0&&l>lt.x&&(o=lt.x)):te.min.x!==te.max.x&&(i=a)):(a<te.max[e]&&(u=h.panEndFriction,te.max[e],n=pe[e]-te.max[e]),(n<=0||0<s)&&1<Vt()?(o=l,0<s&&l<lt.x&&(o=lt.x)):te.min.x!==te.max.x&&(i=a))):o=l,"x"===e))return o!==undefined&&(Ze(o,!0),j=o!==lt.x),te.min.x!==te.max.x&&(i!==undefined?me.x=i:j||(me.x+=t.x*u)),o!==undefined;ie||j||x>f.currItem.fitRatio&&(me[e]+=t[e]*u)},Pt=function(e){var t;"mousedown"===e.type&&0<e.button||(Gt?e.preventDefault():G&&"mousedown"===e.type||(Ct(e,!0)&&e.preventDefault(),Se("pointerDown"),O&&((t=m.arraySearch(rt,e.pointerId,"id"))<0&&(t=rt.length),rt[t]={x:e.pageX,y:e.pageY,id:e.pointerId}),e=(t=kt(e)).length,J=null,je(),X&&1!==e||(X=ae=!0,m.bind(window,u,f),W=se=re=B=j=q=V=K=!1,oe=null,Se("firstTouchStart",t),Le(pe,me),de.x=de.y=0,Le(ot,t[0]),Le(at,ot),lt.x=xe.x*he,st=[{x:ot.x,y:ot.y}],H=U=Ae(),Ue(x,!0),gt(),vt()),!Q&&1<e&&!ie&&!j&&(g=x,Q=V=!(K=!1),de.y=de.x=0,Le(pe,me),Le(tt,t[0]),Le(nt,t[1]),Tt(tt,nt,ht),ft.x=Math.abs(ht.x)-me.x,ft.y=Math.abs(ht.y)-me.y,ee=xt(tt,nt))))},Zt=function(e){var t,n;e.preventDefault(),!O||-1<(t=m.arraySearch(rt,e.pointerId,"id"))&&((n=rt[t]).x=e.pageX,n.y=e.pageY),X&&(n=kt(e),oe||q||Q?J=n:mt.x!==xe.x*he?oe="h":(e=Math.abs(n[0].x-ot.x)-Math.abs(n[0].y-ot.y),Math.abs(e)>=et&&(oe=0<e?"h":"v",J=n)))},Ft=function(){if(J){var e,t,n,i,o=J.length;if(0!==o)if(Le(tt,J[0]),it.x=tt.x-ot.x,it.y=tt.y-ot.y,Q&&1<o)ot.x=tt.x,ot.y=tt.y,!it.x&&!it.y&&yt(J[1],nt)||(Le(nt,J[1]),K||(K=!0,Se("zoomGestureStarted")),e=xt(tt,nt),(a=Ut(e))>f.currItem.initialZoomLevel+f.currItem.initialZoomLevel/15&&(se=!0),t=1,n=He(),i=Ye(),a<n?h.pinchToClose&&!se&&g<=f.currItem.initialZoomLevel?(Ee(o=1-(n-a)/(n/1.2)),Se("onPinchClose",o),re=!0):a=n-(t=1<(t=(n-a)/n)?1:t)*(n/3):i<a&&(a=i+(t=1<(t=(a-i)/(6*n))?1:t)*n),t<0&&(t=0),Tt(tt,nt,dt),de.x+=dt.x-ht.x,de.y+=dt.y-ht.y,Le(ht,dt),me.x=Fe("x",a),me.y=Fe("y",a),W=x<a,x=a,ke());else if(oe&&(ae&&(ae=!1,Math.abs(it.x)>=et&&(it.x-=J[0].x-at.x),Math.abs(it.y)>=et&&(it.y-=J[0].y-at.y)),ot.x=tt.x,ot.y=tt.y,0!==it.x||0!==it.y)){if("v"===oe&&h.closeOnVerticalDrag&&!wt()){de.y+=it.y,me.y+=it.y;var a=St();return B=!0,Se("onVerticalDrag",a),Ee(a),void ke()}Mt(Ae(),tt.x,tt.y),q=!0,te=f.currItem.bounds,Rt("x",it)||(Rt("y",it),ze(me),ke())}}},Lt=function(e){if(_.isOldAndroid){if(G&&"mouseup"===e.type)return;-1<e.type.indexOf("touch")&&(clearTimeout(G),G=setTimeout(function(){G=0},600))}Se("pointerUp"),Ct(e,!1)&&e.preventDefault(),!O||-1<(n=m.arraySearch(rt,e.pointerId,"id"))&&(a=rt.splice(n,1)[0],navigator.msPointerEnabled?(a.type={4:"mouse",2:"touch",3:"pen"}[e.pointerType],a.type||(a.type=e.pointerType||"mouse")):a.type=e.pointerType||"mouse");var t=kt(e),n=t.length;if(2===(n="mouseup"===e.type?0:n))return!(J=null);1===n&&Le(at,t[0]),0!==n||oe||ie||(a||("mouseup"===e.type?a={x:e.pageX,y:e.pageY,type:"mouse"}:e.changedTouches&&e.changedTouches[0]&&(a={x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY,type:"touch"})),Se("touchRelease",e,a));var i,o,a=-1;if(0===n&&(X=!1,m.unbind(window,u,f),gt(),Q?a=0:-1!==pt&&(a=Ae()-pt)),pt=1===n?Ae():-1,a=-1!==a&&a<150?"zoom":"swipe",Q&&n<2&&(Q=!1,1===n&&(a="zoomPointerUp"),Se("zoomGestureEnded")),J=null,q||K||ie||B)if(je(),(Y=Y||zt()).calculateSwipeSpeed("x"),B)St()<h.verticalDragRange?f.close():(i=me.y,o=le,Je("verticalDrag",0,1,300,m.easing.cubic.out,function(e){me.y=(f.currItem.initialPosition.y-i)*e+i,Ee((1-o)*e+o),ke()}),Se("onVerticalDrag",1));else{if((j||ie)&&0===n){if(Nt(a,Y))return;a="zoomPointerUp"}ie||("swipe"===a?!j&&x>f.currItem.fitRatio&&_t(Y):Ht())}},zt=function(){var t,n,i={lastFlickOffset:{},lastFlickDist:{},lastFlickSpeed:{},slowDownRatio:{},slowDownRatioReverse:{},speedDecelerationRatio:{},speedDecelerationRatioAbs:{},distanceOffset:{},backAnimDestination:{},backAnimStarted:{},calculateSwipeSpeed:function(e){n=1<st.length?(t=Ae()-H+50,st[st.length-2][e]):(t=Ae()-U,at[e]),i.lastFlickOffset[e]=ot[e]-n,i.lastFlickDist[e]=Math.abs(i.lastFlickOffset[e]),20<i.lastFlickDist[e]?i.lastFlickSpeed[e]=i.lastFlickOffset[e]/t:i.lastFlickSpeed[e]=0,Math.abs(i.lastFlickSpeed[e])<.1&&(i.lastFlickSpeed[e]=0),i.slowDownRatio[e]=.95,i.slowDownRatioReverse[e]=1-i.slowDownRatio[e],i.speedDecelerationRatio[e]=1},calculateOverBoundsAnimOffset:function(t,e){i.backAnimStarted[t]||(me[t]>te.min[t]?i.backAnimDestination[t]=te.min[t]:me[t]<te.max[t]&&(i.backAnimDestination[t]=te.max[t]),i.backAnimDestination[t]!==undefined&&(i.slowDownRatio[t]=.7,i.slowDownRatioReverse[t]=1-i.slowDownRatio[t],i.speedDecelerationRatioAbs[t]<.05&&(i.lastFlickSpeed[t]=0,i.backAnimStarted[t]=!0,Je("bounceZoomPan"+t,me[t],i.backAnimDestination[t],e||300,m.easing.sine.out,function(e){me[t]=e,ke()}))))},calculateAnimOffset:function(e){i.backAnimStarted[e]||(i.speedDecelerationRatio[e]=i.speedDecelerationRatio[e]*(i.slowDownRatio[e]+i.slowDownRatioReverse[e]-i.slowDownRatioReverse[e]*i.timeDiff/10),i.speedDecelerationRatioAbs[e]=Math.abs(i.lastFlickSpeed[e]*i.speedDecelerationRatio[e]),i.distanceOffset[e]=i.lastFlickSpeed[e]*i.speedDecelerationRatio[e]*i.timeDiff,me[e]+=i.distanceOffset[e])},panAnimLoop:function(){Ve.zoomPan&&(Ve.zoomPan.raf=R(i.panAnimLoop),i.now=Ae(),i.timeDiff=i.now-i.lastNow,i.lastNow=i.now,i.calculateAnimOffset("x"),i.calculateAnimOffset("y"),ke(),i.calculateOverBoundsAnimOffset("x"),i.calculateOverBoundsAnimOffset("y"),i.speedDecelerationRatioAbs.x<.05&&i.speedDecelerationRatioAbs.y<.05&&(me.x=Math.round(me.x),me.y=Math.round(me.y),ke(),qe("zoomPan")))}};return i},_t=function(e){if(e.calculateSwipeSpeed("y"),te=f.currItem.bounds,e.backAnimDestination={},e.backAnimStarted={},Math.abs(e.lastFlickSpeed.x)<=.05&&Math.abs(e.lastFlickSpeed.y)<=.05)return e.speedDecelerationRatioAbs.x=e.speedDecelerationRatioAbs.y=0,e.calculateOverBoundsAnimOffset("x"),e.calculateOverBoundsAnimOffset("y"),!0;$e("zoomPan"),e.lastNow=Ae(),e.panAnimLoop()},Nt=function(e,t){var n,i;ie||(ct=y),"swipe"===e&&(i=ot.x-at.x,e=t.lastFlickDist.x<10,Qe<i&&(e||20<t.lastFlickOffset.x)?a=-1:i<-Qe&&(e||t.lastFlickOffset.x<-20)&&(a=1)),a&&((y+=a)<0?(y=h.loop?Vt()-1:0,o=!0):y>=Vt()&&(y=h.loop?0:Vt()-1,o=!0),o&&!h.loop||(ge+=a,he-=a,n=!0));var o=xe.x*he,a=Math.abs(o-mt.x),r=n||o>mt.x==0<t.lastFlickSpeed.x?(r=0<Math.abs(t.lastFlickSpeed.x)?a/Math.abs(t.lastFlickSpeed.x):333,r=Math.min(r,400),Math.max(r,250)):333;return ct===y&&(n=!1),ie=!0,Se("mainScrollAnimStart"),Je("mainScroll",mt.x,o,r,m.easing.cubic.out,Ze,function(){je(),ie=!1,ct=-1,!n&&ct===y||f.updateCurrItem(),Se("mainScrollAnimComplete")}),n&&f.updateCurrItem(!0),n},Ut=function(e){return 1/ee*e*g},Ht=function(){var e=x,t=He(),n=Ye();x<t?e=t:n<x&&(e=n);var i,o=le;return re&&!W&&!se&&x<t?f.close():(re&&(i=function(e){Ee((1-o)*e+o)}),f.zoomTo(e,0,200,m.easing.cubic.out,i)),!0};Ce("Gestures",{publicMethods:{initGestures:function(){var e=function(e,t,n,i,o){T=e+t,M=e+n,S=e+i,A=o?e+o:""};(O=_.pointerEvent)&&_.touch&&(_.touch=!1),O?navigator.msPointerEnabled?e("MSPointer","Down","Move","Up","Cancel"):e("pointer","down","move","up","cancel"):_.touch?(e("touch","start","move","end","cancel"),k=!0):e("mouse","down","move","up"),u=M+" "+S+" "+A,c=T,O&&!k&&(k=1<navigator.maxTouchPoints||1<navigator.msMaxTouchPoints),f.likelyTouchDevice=k,d[T]=Pt,d[M]=Zt,d[S]=Lt,A&&(d[A]=d[S]),_.touch&&(c+=" mousedown",u+=" mousemove mouseup",d.mousedown=d[T],d.mousemove=d[M],d.mouseup=d[S]),k||(h.allowPanToNext=!1)}}});var Yt,Wt,Bt,Gt,Xt,Vt,Kt=function(a,e,r,t){var l;Yt&&clearTimeout(Yt),Bt=Gt=!0,a.initialLayout?(l=a.initialLayout,a.initialLayout=null):l=h.getThumbBoundsFn&&h.getThumbBoundsFn(y);var s=r?h.hideAnimationDuration:h.showAnimationDuration,u=function(){qe("initialZoom"),r?(f.template.removeAttribute("style"),f.bg.removeAttribute("style")):(Ee(1),e&&(e.style.display="block"),m.addClass(p,"pswp--animated-in"),Se("initialZoom"+(r?"OutEnd":"InEnd"))),t&&t(),Gt=!1};if(!s||!l||l.x===undefined)return Se("initialZoom"+(r?"Out":"In")),x=a.initialZoomLevel,Le(me,a.initialPosition),ke(),p.style.opacity=r?0:1,Ee(1),void(s?setTimeout(function(){u()},s):u());var c,d;c=o,d=!f.currItem.src||f.currItem.loadError||h.showHideOpacity,a.miniImg&&(a.miniImg.style.webkitBackfaceVisibility="hidden"),r||(x=l.w/a.w,me.x=l.x,me.y=l.y-F,f[d?"template":"bg"].style.opacity=.001,ke()),$e("initialZoom"),r&&!c&&m.removeClass(p,"pswp--animated-in"),d&&(r?m[(c?"remove":"add")+"Class"](p,"pswp--animate_opacity"):setTimeout(function(){m.addClass(p,"pswp--animate_opacity")},30)),Yt=setTimeout(function(){var t,n,i,o,e;Se("initialZoom"+(r?"Out":"In")),r?(t=l.w/a.w,n={x:me.x,y:me.y},i=x,o=le,e=function(e){1===e?(x=t,me.x=l.x,me.y=l.y-z):(x=(t-i)*e+i,me.x=(l.x-n.x)*e+n.x,me.y=(l.y-z-n.y)*e+n.y),ke(),d?p.style.opacity=1-e:Ee(o-e*o)},c?Je("initialZoom",0,1,s,m.easing.cubic.out,e,u):(e(1),Yt=setTimeout(u,s+20))):(x=a.initialZoomLevel,Le(me,a.initialPosition),ke(),Ee(1),d?p.style.opacity=1:Ee(1),Yt=setTimeout(u,s+20))},r?25:90)},qt={},$t=[],jt={index:0,errorMsg:'<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',forceProgressiveLoading:!1,preload:[1,1],getNumItemsFn:function(){return Wt.length}},Jt=function(){return{center:{x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}}},Qt=function(e,t,n){var i=e.bounds;i.center.x=Math.round((qt.x-t)/2),i.center.y=Math.round((qt.y-n)/2)+e.vGap.top,i.max.x=t>qt.x?Math.round(qt.x-t):i.center.x,i.max.y=n>qt.y?Math.round(qt.y-n)+e.vGap.top:i.center.y,i.min.x=t>qt.x?0:i.center.x,i.min.y=n>qt.y?e.vGap.top:i.center.y},en=function(e,t,n){if(!e.src||e.loadError)return e.w=e.h=0,e.initialZoomLevel=e.fitRatio=1,e.bounds=Jt(),e.initialPosition=e.bounds.center,e.bounds;var i,o=!n;return o&&(e.vGap||(e.vGap={top:0,bottom:0}),Se("parseVerticalMargin",e)),qt.x=t.x,qt.y=t.y-e.vGap.top-e.vGap.bottom,o&&(i=qt.x/e.w,t=qt.y/e.h,e.fitRatio=i<t?i:t,"orig"===(t=h.scaleMode)?n=1:"fit"===t&&(n=e.fitRatio),e.initialZoomLevel=n=1<n?1:n,e.bounds||(e.bounds=Jt())),n?(Qt(e,e.w*n,e.h*n),o&&n===e.initialZoomLevel&&(e.initialPosition=e.bounds.center),e.bounds):void 0},tn=function(e,t,n,i,o,a){t.loadError||i&&(t.imageAppended=!0,an(t,i,t===f.currItem&&Ie),n.appendChild(i),a&&setTimeout(function(){t&&t.loaded&&t.placeholder&&(t.placeholder.style.display="none",t.placeholder=null)},500))},nn=function(e){e.loading=!0,e.loaded=!1;var t=e.img=m.createEl("pswp__img","img"),n=function(){e.loading=!1,e.loaded=!0,e.loadComplete?e.loadComplete(e):e.img=null,t.onload=t.onerror=null,t=null};return t.onload=n,t.onerror=function(){e.loadError=!0,n()},t.src=e.src,t.alt=e.alt||"",t},on=function(e,t){if(e.src&&e.loadError&&e.container)return t&&(e.container.innerHTML=""),e.container.innerHTML=h.errorMsg.replace("%url%",e.src),!0},an=function(e,t,n){var i;e.src&&(t=t||e.container.lastChild,i=n?e.w:Math.round(e.w*e.fitRatio),n=n?e.h:Math.round(e.h*e.fitRatio),e.placeholder&&!e.loaded&&(e.placeholder.style.width=i+"px",e.placeholder.style.height=n+"px"),t.style.width=i+"px",t.style.height=n+"px")},rn=function(){if($t.length){for(var e,t=0;t<$t.length;t++)(e=$t[t]).holder.index===e.index&&tn(e.index,e.item,e.baseDiv,e.img,!1,e.clearPlaceholder);$t=[]}};Ce("Controller",{publicMethods:{lazyLoadItem:function(e){e=De(e);var t=Xt(e);t&&(!t.loaded&&!t.loading||I)&&(Se("gettingData",e,t),t.src&&nn(t))},initController:function(){m.extend(h,jt,!0),f.items=Wt=e,Xt=f.getItemAt,Vt=h.getNumItemsFn,h.loop,Vt()<3&&(h.loop=!1),Me("beforeChange",function(e){for(var t=h.preload,n=null===e||0<=e,i=Math.min(t[0],Vt()),o=Math.min(t[1],Vt()),a=1;a<=(n?o:i);a++)f.lazyLoadItem(y+a);for(a=1;a<=(n?i:o);a++)f.lazyLoadItem(y-a)}),Me("initialLayout",function(){f.currItem.initialLayout=h.getThumbBoundsFn&&h.getThumbBoundsFn(y)}),Me("mainScrollAnimComplete",rn),Me("initialZoomInEnd",rn),Me("destroy",function(){for(var e,t=0;t<Wt.length;t++)(e=Wt[t]).container&&(e.container=null),e.placeholder&&(e.placeholder=null),e.img&&(e.img=null),e.preloader&&(e.preloader=null),e.loadError&&(e.loaded=e.loadError=!1);$t=null})},getItemAt:function(e){return 0<=e&&(Wt[e]!==undefined&&Wt[e])},allowProgressiveImg:function(){return h.forceProgressiveLoading||!k||h.mouseUsed||1200<screen.width},setContent:function(t,n){h.loop&&(n=De(n));var e=f.getItemAt(t.index);e&&(e.container=null);var i,o,a=f.getItemAt(n);a?(Se("gettingData",n,a),t.index=n,o=(t.item=a).container=m.createEl("pswp__zoom-wrap"),!a.src&&a.html&&(a.html.tagName?o.appendChild(a.html):o.innerHTML=a.html),on(a),en(a,fe),!a.src||a.loadError||a.loaded?a.src&&!a.loadError&&((i=m.createEl("pswp__img","img")).style.opacity=1,i.src=a.src,an(a,i),tn(n,a,o,i,!0)):(a.loadComplete=function(e){if(r){if(t&&t.index===n){if(on(e,!0))return e.loadComplete=e.img=null,en(e,fe),Re(e),void(t.index===y&&f.updateCurrZoomItem());e.imageAppended?!Gt&&e.placeholder&&(e.placeholder.style.display="none",e.placeholder=null):_.transform&&(ie||Gt)?$t.push({item:e,baseDiv:o,img:e.img,index:n,holder:t,clearPlaceholder:!0}):tn(n,e,o,e.img,ie||Gt,!0)}e.loadComplete=null,e.img=null,Se("imageLoadComplete",n,e)}},m.features.transform&&(e="pswp__img pswp__img--placeholder",e+=a.msrc?"":" pswp__img--placeholder--blank",e=m.createEl(e,a.msrc?"img":""),a.msrc&&(e.src=a.msrc),an(a,e),o.appendChild(e),a.placeholder=e),a.loading||nn(a),f.allowProgressiveImg()&&(!Bt&&_.transform?$t.push({item:a,baseDiv:o,img:a.img,index:n,holder:t}):tn(n,a,o,a.img,!0,!0))),Bt||n!==y?Re(a):(ne=o.style,Kt(a,i||a.img)),t.el.innerHTML="",t.el.appendChild(o)):t.el.innerHTML=""},cleanSlide:function(e){e.img&&(e.img.onload=e.img.onerror=null),e.loaded=e.loading=e.img=e.imageAppended=!1}}});var ln,sn,un={},cn=function(e,t,n){var i=document.createEvent("CustomEvent"),n={origEvent:e,target:e.target,releasePoint:t,pointerType:n||"touch"};i.initCustomEvent("pswpTap",!0,!0,n),e.target.dispatchEvent(i)};Ce("Tap",{publicMethods:{initTap:function(){Me("firstTouchStart",f.onTapStart),Me("touchRelease",f.onTapRelease),Me("destroy",function(){un={},ln=null})},onTapStart:function(e){1<e.length&&(clearTimeout(ln),ln=null)},onTapRelease:function(e,t){var n,i,o;t&&(q||V||Ke||!f.container.contains(e.target)||(n=t,ln&&(clearTimeout(ln),ln=null,i=n,o=un,Math.abs(i.x-o.x)<a&&Math.abs(i.y-o.y)<a)?Se("doubleTap",n):"mouse"!==t.type?"BUTTON"===e.target.tagName.toUpperCase()||m.hasClass(e.target,"pswp__single-tap")?cn(e,t):(Le(un,n),ln=setTimeout(function(){cn(e,t),ln=null},300)):cn(e,t,"mouse")))}}}),Ce("DesktopZoom",{publicMethods:{initDesktopZoom:function(){L||(k?Me("mouseUsed",function(){f.setupDesktopZoom()}):f.setupDesktopZoom(!0))},setupDesktopZoom:function(e){sn={};var t="wheel mousewheel DOMMouseScroll";Me("bindEvents",function(){m.bind(p,t,f.handleMouseWheel)}),Me("unbindEvents",function(){sn&&m.unbind(p,t,f.handleMouseWheel)}),f.mouseZoomedIn=!1;var n,i=function(){f.mouseZoomedIn&&(m.removeClass(p,"pswp--zoomed-in"),f.mouseZoomedIn=!1),x<1?m.addClass(p,"pswp--zoom-allowed"):m.removeClass(p,"pswp--zoom-allowed"),o()},o=function(){n&&(m.removeClass(p,"pswp--dragging"),n=!1)};Me("resize",i),Me("afterChange",i),Me("pointerDown",function(){f.mouseZoomedIn&&(n=!0,m.addClass(p,"pswp--dragging"))}),Me("pointerUp",o),e||i()},handleMouseWheel:function(e){if(x<=f.currItem.fitRatio)return h.modal&&(!h.closeOnScroll||Ke||X?e.preventDefault():E&&2<Math.abs(e.deltaY)&&(o=!0,f.close())),!0;if(e.stopPropagation(),sn.x=0,"deltaX"in e)1===e.deltaMode?(sn.x=18*e.deltaX,sn.y=18*e.deltaY):(sn.x=e.deltaX,sn.y=e.deltaY);else if("wheelDelta"in e)e.wheelDeltaX&&(sn.x=-.16*e.wheelDeltaX),e.wheelDeltaY?sn.y=-.16*e.wheelDeltaY:sn.y=-.16*e.wheelDelta;else{if(!("detail"in e))return;sn.y=e.detail}Ue(x,!0);var t=me.x-sn.x,n=me.y-sn.y;(h.modal||t<=te.min.x&&t>=te.max.x&&n<=te.min.y&&n>=te.max.y)&&e.preventDefault(),f.panTo(t,n)},toggleDesktopZoom:function(e){e=e||{x:fe.x/2+ye.x,y:fe.y/2+ye.y};var t=h.getDoubleTapZoom(!0,f.currItem),n=x===t;f.mouseZoomedIn=!n,f.zoomTo(n?f.currItem.initialZoomLevel:t,e,333),m[(n?"remove":"add")+"Class"](p,"pswp--zoomed-in")}}});var dn,pn,mn,fn,hn,yn,xn,gn,vn,wn,bn,In,Cn={history:!0,galleryUID:1},Dn=function(){return bn.hash.substring(1)},Tn=function(){dn&&clearTimeout(dn),mn&&clearTimeout(mn)},Mn=function(){var e=Dn(),t={};if(e.length<5)return t;var n,i=e.split("&");for(a=0;a<i.length;a++)i[a]&&((n=i[a].split("=")).length<2||(t[n[0]]=n[1]));if(h.galleryPIDs){for(var o=t.pid,a=t.pid=0;a<Wt.length;a++)if(Wt[a].pid===o){t.pid=a;break}}else t.pid=parseInt(t.pid,10)-1;return t.pid<0&&(t.pid=0),t},Sn=function(){var e,t;mn&&clearTimeout(mn),Ke||X?mn=setTimeout(Sn,500):(fn?clearTimeout(pn):fn=!0,t=y+1,(e=Xt(y)).hasOwnProperty("pid")&&(t=e.pid),e=xn+"&gid="+h.galleryUID+"&pid="+t,gn||-1===bn.hash.indexOf(e)&&(wn=!0),t=bn.href.split("#")[0]+"#"+e,In?"#"+e!==window.location.hash&&history[gn?"replaceState":"pushState"]("",document.title,t):gn?bn.replace(t):bn.hash=e,gn=!0,pn=setTimeout(function(){fn=!1},60))};Ce("History",{publicMethods:{initHistory:function(){var e,t;m.extend(h,Cn,!0),h.history&&(bn=window.location,gn=vn=wn=!1,xn=Dn(),In="pushState"in history,-1<xn.indexOf("gid=")&&(xn=(xn=xn.split("&gid=")[0]).split("?gid=")[0]),Me("afterChange",f.updateURL),Me("unbindEvents",function(){m.unbind(window,"hashchange",f.onHashChange)}),e=function(){yn=!0,vn||(wn?history.back():xn?bn.hash=xn:In?history.pushState("",document.title,bn.pathname+bn.search):bn.hash=""),Tn()},Me("unbindEvents",function(){o&&e()}),Me("destroy",function(){yn||e()}),Me("firstUpdate",function(){y=Mn().pid}),-1<(t=xn.indexOf("pid="))&&"&"===(xn=xn.substring(0,t)).slice(-1)&&(xn=xn.slice(0,-1)),setTimeout(function(){r&&m.bind(window,"hashchange",f.onHashChange)},40))},onHashChange:function(){if(Dn()===xn)return vn=!0,void f.close();fn||(hn=!0,f.goTo(Mn().pid),hn=!1)},updateURL:function(){Tn(),hn||(gn?dn=setTimeout(Sn,800):Sn())}}}),m.extend(f,t)}});