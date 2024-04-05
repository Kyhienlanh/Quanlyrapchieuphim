"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9406],{19406:function(e,t,n){function r(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function o(e){var t=r(e).Element;return e instanceof t||e instanceof Element}function i(e){var t=r(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function a(e){if("undefined"==typeof ShadowRoot)return!1;var t=r(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}n.d(t,{ZP:function(){return e3}});var s,c,p,u,f,d,l=Math.max,m=Math.min,v=Math.round;function h(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function g(){return!/^((?!chrome|android).)*safari/i.test(h())}function b(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var a=e.getBoundingClientRect(),s=1,c=1;t&&i(e)&&(s=e.offsetWidth>0&&v(a.width)/e.offsetWidth||1,c=e.offsetHeight>0&&v(a.height)/e.offsetHeight||1);var p=(o(e)?r(e):window).visualViewport,u=!g()&&n,f=(a.left+(u&&p?p.offsetLeft:0))/s,d=(a.top+(u&&p?p.offsetTop:0))/c,l=a.width/s,m=a.height/c;return{width:l,height:m,top:d,right:f+l,bottom:d+m,left:f,x:f,y:d}}function y(e){var t=r(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function w(e){return e?(e.nodeName||"").toLowerCase():null}function x(e){return((o(e)?e.ownerDocument:e.document)||window.document).documentElement}function O(e){return b(x(e)).left+y(e).scrollLeft}function E(e){return r(e).getComputedStyle(e)}function A(e){var t=E(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function T(e){var t=b(e),n=e.offsetWidth,r=e.offsetHeight;return 1>=Math.abs(t.width-n)&&(n=t.width),1>=Math.abs(t.height-r)&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function j(e){return"html"===w(e)?e:e.assignedSlot||e.parentNode||(a(e)?e.host:null)||x(e)}function D(e,t){void 0===t&&(t=[]);var n,o=function e(t){return["html","body","#document"].indexOf(w(t))>=0?t.ownerDocument.body:i(t)&&A(t)?t:e(j(t))}(e),a=o===(null==(n=e.ownerDocument)?void 0:n.body),s=r(o),c=a?[s].concat(s.visualViewport||[],A(o)?o:[]):o,p=t.concat(c);return a?p:p.concat(D(j(c)))}function L(e){return i(e)&&"fixed"!==E(e).position?e.offsetParent:null}function k(e){for(var t=r(e),n=L(e);n&&["table","td","th"].indexOf(w(n))>=0&&"static"===E(n).position;)n=L(n);return n&&("html"===w(n)||"body"===w(n)&&"static"===E(n).position)?t:n||function(e){var t=/firefox/i.test(h());if(/Trident/i.test(h())&&i(e)&&"fixed"===E(e).position)return null;var n=j(e);for(a(n)&&(n=n.host);i(n)&&0>["html","body"].indexOf(w(n));){var r=E(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}var C="bottom",P="right",S="left",H="auto",M=["top",C,P,S],R="start",V="viewport",W="popper",N=M.reduce(function(e,t){return e.concat([t+"-"+R,t+"-end"])},[]),B=[].concat(M,[H]).reduce(function(e,t){return e.concat([t,t+"-"+R,t+"-end"])},[]),_=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"],I={placement:"bottom",modifiers:[],strategy:"absolute"};function U(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(e){return!(e&&"function"==typeof e.getBoundingClientRect)})}var q={passive:!0};function $(e){return e.split("-")[0]}function F(e){return e.split("-")[1]}function z(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function X(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?$(o):null,a=o?F(o):null,s=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(i){case"top":t={x:s,y:n.y-r.height};break;case C:t={x:s,y:n.y+n.height};break;case P:t={x:n.x+n.width,y:c};break;case S:t={x:n.x-r.width,y:c};break;default:t={x:n.x,y:n.y}}var p=i?z(i):null;if(null!=p){var u="y"===p?"height":"width";switch(a){case R:t[p]=t[p]-(n[u]/2-r[u]/2);break;case"end":t[p]=t[p]+(n[u]/2-r[u]/2)}}return t}var Y={top:"auto",right:"auto",bottom:"auto",left:"auto"};function J(e){var t,n,o,i,a,s,c,p=e.popper,u=e.popperRect,f=e.placement,d=e.variation,l=e.offsets,m=e.position,h=e.gpuAcceleration,g=e.adaptive,b=e.roundOffsets,y=e.isFixed,w=l.x,O=void 0===w?0:w,A=l.y,T=void 0===A?0:A,j="function"==typeof b?b({x:O,y:T}):{x:O,y:T};O=j.x,T=j.y;var D=l.hasOwnProperty("x"),L=l.hasOwnProperty("y"),H=S,M="top",R=window;if(g){var V=k(p),W="clientHeight",N="clientWidth";V===r(p)&&"static"!==E(V=x(p)).position&&"absolute"===m&&(W="scrollHeight",N="scrollWidth"),("top"===f||(f===S||f===P)&&"end"===d)&&(M=C,T-=(y&&V===R&&R.visualViewport?R.visualViewport.height:V[W])-u.height,T*=h?1:-1),(f===S||("top"===f||f===C)&&"end"===d)&&(H=P,O-=(y&&V===R&&R.visualViewport?R.visualViewport.width:V[N])-u.width,O*=h?1:-1)}var B=Object.assign({position:m},g&&Y),_=!0===b?(t={x:O,y:T},n=r(p),o=t.x,i=t.y,{x:v(o*(a=n.devicePixelRatio||1))/a||0,y:v(i*a)/a||0}):{x:O,y:T};return(O=_.x,T=_.y,h)?Object.assign({},B,((c={})[M]=L?"0":"",c[H]=D?"0":"",c.transform=1>=(R.devicePixelRatio||1)?"translate("+O+"px, "+T+"px)":"translate3d("+O+"px, "+T+"px, 0)",c)):Object.assign({},B,((s={})[M]=L?T+"px":"",s[H]=D?O+"px":"",s.transform="",s))}var Z={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];i(o)&&w(o)&&(Object.assign(o.style,n),Object.keys(r).forEach(function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)}))})},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(e){var r=t.elements[e],o=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce(function(e,t){return e[t]="",e},{});i(r)&&w(r)&&(Object.assign(r.style,a),Object.keys(o).forEach(function(e){r.removeAttribute(e)}))})}},requires:["computeStyles"]},G={left:"right",right:"left",bottom:"top",top:"bottom"};function K(e){return e.replace(/left|right|bottom|top/g,function(e){return G[e]})}var Q={start:"end",end:"start"};function ee(e){return e.replace(/start|end/g,function(e){return Q[e]})}function et(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&a(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function en(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function er(e,t,n){var i,a,s,c,p,u,f,d,m,v;return t===V?en(function(e,t){var n=r(e),o=x(e),i=n.visualViewport,a=o.clientWidth,s=o.clientHeight,c=0,p=0;if(i){a=i.width,s=i.height;var u=g();(u||!u&&"fixed"===t)&&(c=i.offsetLeft,p=i.offsetTop)}return{width:a,height:s,x:c+O(e),y:p}}(e,n)):o(t)?((i=b(t,!1,"fixed"===n)).top=i.top+t.clientTop,i.left=i.left+t.clientLeft,i.bottom=i.top+t.clientHeight,i.right=i.left+t.clientWidth,i.width=t.clientWidth,i.height=t.clientHeight,i.x=i.left,i.y=i.top,i):en((a=x(e),c=x(a),p=y(a),u=null==(s=a.ownerDocument)?void 0:s.body,f=l(c.scrollWidth,c.clientWidth,u?u.scrollWidth:0,u?u.clientWidth:0),d=l(c.scrollHeight,c.clientHeight,u?u.scrollHeight:0,u?u.clientHeight:0),m=-p.scrollLeft+O(a),v=-p.scrollTop,"rtl"===E(u||c).direction&&(m+=l(c.clientWidth,u?u.clientWidth:0)-f),{width:f,height:d,x:m,y:v}))}function eo(){return{top:0,right:0,bottom:0,left:0}}function ei(e){return Object.assign({},eo(),e)}function ea(e,t){return t.reduce(function(t,n){return t[n]=e,t},{})}function es(e,t){void 0===t&&(t={});var n,r,a,s,c,p,u,f=t,d=f.placement,v=void 0===d?e.placement:d,h=f.strategy,g=void 0===h?e.strategy:h,y=f.boundary,O=f.rootBoundary,A=f.elementContext,T=void 0===A?W:A,L=f.altBoundary,S=f.padding,H=void 0===S?0:S,R=ei("number"!=typeof H?H:ea(H,M)),N=e.rects.popper,B=e.elements[void 0!==L&&L?T===W?"reference":W:T],_=(n=o(B)?B:B.contextElement||x(e.elements.popper),p=(c=[].concat("clippingParents"===(r=void 0===y?"clippingParents":y)?(a=D(j(n)),o(s=["absolute","fixed"].indexOf(E(n).position)>=0&&i(n)?k(n):n)?a.filter(function(e){return o(e)&&et(e,s)&&"body"!==w(e)}):[]):[].concat(r),[void 0===O?V:O]))[0],(u=c.reduce(function(e,t){var r=er(n,t,g);return e.top=l(r.top,e.top),e.right=m(r.right,e.right),e.bottom=m(r.bottom,e.bottom),e.left=l(r.left,e.left),e},er(n,p,g))).width=u.right-u.left,u.height=u.bottom-u.top,u.x=u.left,u.y=u.top,u),I=b(e.elements.reference),U=X({reference:I,element:N,strategy:"absolute",placement:v}),q=en(Object.assign({},N,U)),$=T===W?q:I,F={top:_.top-$.top+R.top,bottom:$.bottom-_.bottom+R.bottom,left:_.left-$.left+R.left,right:$.right-_.right+R.right},z=e.modifiersData.offset;if(T===W&&z){var Y=z[v];Object.keys(F).forEach(function(e){var t=[P,C].indexOf(e)>=0?1:-1,n=["top",C].indexOf(e)>=0?"y":"x";F[e]+=Y[n]*t})}return F}function ec(e,t,n){return l(e,m(t,n))}function ep(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function eu(e){return["top",P,C,S].some(function(t){return e[t]>=0})}var ef=(p=void 0===(c=(s={defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,o=e.options,i=o.scroll,a=void 0===i||i,s=o.resize,c=void 0===s||s,p=r(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&u.forEach(function(e){e.addEventListener("scroll",n.update,q)}),c&&p.addEventListener("resize",n.update,q),function(){a&&u.forEach(function(e){e.removeEventListener("scroll",n.update,q)}),c&&p.removeEventListener("resize",n.update,q)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=X({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=n.adaptive,i=n.roundOffsets,a=void 0===i||i,s={placement:$(t.placement),variation:F(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:void 0===r||r,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,J(Object.assign({},s,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:void 0===o||o,roundOffsets:a})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,J(Object.assign({},s,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},Z,{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=B.reduce(function(e,n){var r,o,a,s,c,p;return e[n]=(r=t.rects,a=[S,"top"].indexOf(o=$(n))>=0?-1:1,c=(s="function"==typeof i?i(Object.assign({},r,{placement:n})):i)[0],p=s[1],c=c||0,p=(p||0)*a,[S,P].indexOf(o)>=0?{x:p,y:c}:{x:c,y:p}),e},{}),s=a[t.placement],c=s.x,p=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=p),t.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,c=n.fallbackPlacements,p=n.padding,u=n.boundary,f=n.rootBoundary,d=n.altBoundary,l=n.flipVariations,m=void 0===l||l,v=n.allowedAutoPlacements,h=t.options.placement,g=$(h),b=[h].concat(c||(g!==h&&m?function(e){if($(e)===H)return[];var t=K(e);return[ee(e),t,ee(t)]}(h):[K(h)])).reduce(function(e,n){var r,o,i,a,s,c,d,l,h,g,b,y;return e.concat($(n)===H?(o=(r={placement:n,boundary:u,rootBoundary:f,padding:p,flipVariations:m,allowedAutoPlacements:v}).placement,i=r.boundary,a=r.rootBoundary,s=r.padding,c=r.flipVariations,l=void 0===(d=r.allowedAutoPlacements)?B:d,0===(b=(g=(h=F(o))?c?N:N.filter(function(e){return F(e)===h}):M).filter(function(e){return l.indexOf(e)>=0})).length&&(b=g),Object.keys(y=b.reduce(function(e,n){return e[n]=es(t,{placement:n,boundary:i,rootBoundary:a,padding:s})[$(n)],e},{})).sort(function(e,t){return y[e]-y[t]})):n)},[]),y=t.rects.reference,w=t.rects.popper,x=new Map,O=!0,E=b[0],A=0;A<b.length;A++){var T=b[A],j=$(T),D=F(T)===R,L=["top",C].indexOf(j)>=0,k=L?"width":"height",V=es(t,{placement:T,boundary:u,rootBoundary:f,altBoundary:d,padding:p}),W=L?D?P:S:D?C:"top";y[k]>w[k]&&(W=K(W));var _=K(W),I=[];if(i&&I.push(V[j]<=0),s&&I.push(V[W]<=0,V[_]<=0),I.every(function(e){return e})){E=T,O=!1;break}x.set(T,I)}if(O)for(var U=m?3:1,q=function(e){var t=b.find(function(t){var n=x.get(t);if(n)return n.slice(0,e).every(function(e){return e})});if(t)return E=t,"break"},z=U;z>0&&"break"!==q(z);z--);t.placement!==E&&(t.modifiersData[r]._skip=!0,t.placement=E,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=n.altAxis,a=n.boundary,s=n.rootBoundary,c=n.altBoundary,p=n.padding,u=n.tether,f=void 0===u||u,d=n.tetherOffset,v=void 0===d?0:d,h=es(t,{boundary:a,rootBoundary:s,padding:p,altBoundary:c}),g=$(t.placement),b=F(t.placement),y=!b,w=z(g),x="x"===w?"y":"x",O=t.modifiersData.popperOffsets,E=t.rects.reference,A=t.rects.popper,j="function"==typeof v?v(Object.assign({},t.rects,{placement:t.placement})):v,D="number"==typeof j?{mainAxis:j,altAxis:j}:Object.assign({mainAxis:0,altAxis:0},j),L=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,H={x:0,y:0};if(O){if(void 0===o||o){var M,V="y"===w?"top":S,W="y"===w?C:P,N="y"===w?"height":"width",B=O[w],_=B+h[V],I=B-h[W],U=f?-A[N]/2:0,q=b===R?E[N]:A[N],X=b===R?-A[N]:-E[N],Y=t.elements.arrow,J=f&&Y?T(Y):{width:0,height:0},Z=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:eo(),G=Z[V],K=Z[W],Q=ec(0,E[N],J[N]),ee=y?E[N]/2-U-Q-G-D.mainAxis:q-Q-G-D.mainAxis,et=y?-E[N]/2+U+Q+K+D.mainAxis:X+Q+K+D.mainAxis,en=t.elements.arrow&&k(t.elements.arrow),er=en?"y"===w?en.clientTop||0:en.clientLeft||0:0,ei=null!=(M=null==L?void 0:L[w])?M:0,ea=ec(f?m(_,B+ee-ei-er):_,B,f?l(I,B+et-ei):I);O[w]=ea,H[w]=ea-B}if(void 0!==i&&i){var ep,eu,ef=O[x],ed="y"===x?"height":"width",el=ef+h["x"===w?"top":S],em=ef-h["x"===w?C:P],ev=-1!==["top",S].indexOf(g),eh=null!=(ep=null==L?void 0:L[x])?ep:0,eg=ev?el:ef-E[ed]-A[ed]-eh+D.altAxis,eb=ev?ef+E[ed]+A[ed]-eh-D.altAxis:em,ey=f&&ev?(eu=ec(eg,ef,eb))>eb?eb:eu:ec(f?eg:el,ef,f?eb:em);O[x]=ey,H[x]=ey-ef}t.modifiersData[r]=H}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n,r=e.state,o=e.name,i=e.options,a=r.elements.arrow,s=r.modifiersData.popperOffsets,c=$(r.placement),p=z(c),u=[S,P].indexOf(c)>=0?"height":"width";if(a&&s){var f=ei("number"!=typeof(t="function"==typeof(t=i.padding)?t(Object.assign({},r.rects,{placement:r.placement})):t)?t:ea(t,M)),d=T(a),l=r.rects.reference[u]+r.rects.reference[p]-s[p]-r.rects.popper[u],m=s[p]-r.rects.reference[p],v=k(a),h=v?"y"===p?v.clientHeight||0:v.clientWidth||0:0,g=f["y"===p?"top":S],b=h-d[u]-f["y"===p?C:P],y=h/2-d[u]/2+(l/2-m/2),w=ec(g,y,b);r.modifiersData[o]=((n={})[p]=w,n.centerOffset=w-y,n)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&et(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=es(t,{elementContext:"reference"}),s=es(t,{altBoundary:!0}),c=ep(a,r),p=ep(s,o,i),u=eu(c),f=eu(p);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:p,isReferenceHidden:u,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":f})}}]}).defaultModifiers)?[]:c,f=void 0===(u=s.defaultOptions)?I:u,function(e,t,n){void 0===n&&(n=f);var a,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},I,f),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],u=!1,d={state:s,setOptions:function(n){var r,i,a,u,m,v="function"==typeof n?n(s.options):n;l(),s.options=Object.assign({},f,s.options,v),s.scrollParents={reference:o(e)?D(e):e.contextElement?D(e.contextElement):[],popper:D(t)};var h=(i=Object.keys(r=[].concat(p,s.options.modifiers).reduce(function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e},{})).map(function(e){return r[e]}),a=new Map,u=new Set,m=[],i.forEach(function(e){a.set(e.name,e)}),i.forEach(function(e){u.has(e.name)||function e(t){u.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach(function(t){if(!u.has(t)){var n=a.get(t);n&&e(n)}}),m.push(t)}(e)}),_.reduce(function(e,t){return e.concat(m.filter(function(e){return e.phase===t}))},[]));return s.orderedModifiers=h.filter(function(e){return e.enabled}),s.orderedModifiers.forEach(function(e){var t=e.name,n=e.options,r=e.effect;if("function"==typeof r){var o=r({state:s,name:t,instance:d,options:void 0===n?{}:n});c.push(o||function(){})}}),d.update()},forceUpdate:function(){if(!u){var e,t,n,o,a,c,p,f,l,m,h,g,E=s.elements,j=E.reference,D=E.popper;if(U(j,D)){;s.rects={reference:(t=k(D),n="fixed"===s.options.strategy,o=i(t),f=i(t)&&(c=v((a=t.getBoundingClientRect()).width)/t.offsetWidth||1,p=v(a.height)/t.offsetHeight||1,1!==c||1!==p),l=x(t),m=b(j,f,n),h={scrollLeft:0,scrollTop:0},g={x:0,y:0},(o||!o&&!n)&&(("body"!==w(t)||A(l))&&(h=(e=t)!==r(e)&&i(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:y(e)),i(t)?(g=b(t,!0),g.x+=t.clientLeft,g.y+=t.clientTop):l&&(g.x=O(l))),{x:m.left+h.scrollLeft-g.x,y:m.top+h.scrollTop-g.y,width:m.width,height:m.height}),popper:T(D)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach(function(e){return s.modifiersData[e.name]=Object.assign({},e.data)});for(var L=0;L<s.orderedModifiers.length;L++){if(!0===s.reset){s.reset=!1,L=-1;continue}var C=s.orderedModifiers[L],P=C.fn,S=C.options,H=void 0===S?{}:S,M=C.name;"function"==typeof P&&(s=P({state:s,options:H,name:M,instance:d})||s)}}}},update:function(){return a||(a=new Promise(function(e){Promise.resolve().then(function(){a=void 0,e(new Promise(function(e){d.forceUpdate(),e(s)}))})})),a},destroy:function(){l(),u=!0}};if(!U(e,t))return d;function l(){c.forEach(function(e){return e()}),c=[]}return d.setOptions(n).then(function(e){!u&&n.onFirstUpdate&&n.onFirstUpdate(e)}),d}),ed="tippy-content",el="tippy-arrow",em="tippy-svg-arrow",ev={passive:!0,capture:!0},eh=function(){return document.body};function eg(e,t,n){if(Array.isArray(e)){var r=e[t];return null==r?Array.isArray(n)?n[t]:n:r}return e}function eb(e,t){var n=({}).toString.call(e);return 0===n.indexOf("[object")&&n.indexOf(t+"]")>-1}function ey(e,t){return"function"==typeof e?e.apply(void 0,t):e}function ew(e,t){var n;return 0===t?e:function(r){clearTimeout(n),n=setTimeout(function(){e(r)},t)}}function ex(e){return[].concat(e)}function eO(e,t){-1===e.indexOf(t)&&e.push(t)}function eE(e){return[].slice.call(e)}function eA(e){return Object.keys(e).reduce(function(t,n){return void 0!==e[n]&&(t[n]=e[n]),t},{})}function eT(){return document.createElement("div")}function ej(e){return["Element","Fragment"].some(function(t){return eb(e,t)})}function eD(e,t){e.forEach(function(e){e&&(e.style.transitionDuration=t+"ms")})}function eL(e,t){e.forEach(function(e){e&&e.setAttribute("data-state",t)})}function ek(e,t,n){var r=t+"EventListener";["transitionend","webkitTransitionEnd"].forEach(function(t){e[r](t,n)})}function eC(e,t){for(var n,r=t;r;){if(e.contains(r))return!0;r=null==r.getRootNode?void 0:null==(n=r.getRootNode())?void 0:n.host}return!1}var eP={isTouch:!1},eS=0;function eH(){!eP.isTouch&&(eP.isTouch=!0,window.performance&&document.addEventListener("mousemove",eM))}function eM(){var e=performance.now();e-eS<20&&(eP.isTouch=!1,document.removeEventListener("mousemove",eM)),eS=e}function eR(){var e=document.activeElement;if(e&&e._tippy&&e._tippy.reference===e){var t=e._tippy;e.blur&&!t.state.isVisible&&e.blur()}}var eV=!!("undefined"!=typeof window&&"undefined"!=typeof document)&&!!window.msCrypto,eW=Object.assign({appendTo:eh,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},{animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},{allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999}),eN=Object.keys(eW);function eB(e){var t=(e.plugins||[]).reduce(function(t,n){var r,o=n.name,i=n.defaultValue;return o&&(t[o]=void 0!==e[o]?e[o]:null!=(r=eW[o])?r:i),t},{});return Object.assign({},e,t)}function e_(e,t){var n,r=Object.assign({},t,{content:ey(t.content,[e])},t.ignoreAttributes?{}:((n=t.plugins)?Object.keys(eB(Object.assign({},eW,{plugins:n}))):eN).reduce(function(t,n){var r=(e.getAttribute("data-tippy-"+n)||"").trim();if(!r)return t;if("content"===n)t[n]=r;else try{t[n]=JSON.parse(r)}catch(e){t[n]=r}return t},{}));return r.aria=Object.assign({},eW.aria,r.aria),r.aria={expanded:"auto"===r.aria.expanded?t.interactive:r.aria.expanded,content:"auto"===r.aria.content?t.interactive?null:"describedby":r.aria.content},r}function eI(e,t){e.innerHTML=t}function eU(e){var t=eT();return!0===e?t.className=el:(t.className=em,ej(e)?t.appendChild(e):eI(t,e)),t}function eq(e,t){ej(t.content)?(eI(e,""),e.appendChild(t.content)):"function"!=typeof t.content&&(t.allowHTML?eI(e,t.content):e.textContent=t.content)}function e$(e){var t=e.firstElementChild,n=eE(t.children);return{box:t,content:n.find(function(e){return e.classList.contains(ed)}),arrow:n.find(function(e){return e.classList.contains(el)||e.classList.contains(em)}),backdrop:n.find(function(e){return e.classList.contains("tippy-backdrop")})}}function eF(e){var t=eT(),n=eT();n.className="tippy-box",n.setAttribute("data-state","hidden"),n.setAttribute("tabindex","-1");var r=eT();function o(n,r){var o=e$(t),i=o.box,a=o.content,s=o.arrow;r.theme?i.setAttribute("data-theme",r.theme):i.removeAttribute("data-theme"),"string"==typeof r.animation?i.setAttribute("data-animation",r.animation):i.removeAttribute("data-animation"),r.inertia?i.setAttribute("data-inertia",""):i.removeAttribute("data-inertia"),i.style.maxWidth="number"==typeof r.maxWidth?r.maxWidth+"px":r.maxWidth,r.role?i.setAttribute("role",r.role):i.removeAttribute("role"),(n.content!==r.content||n.allowHTML!==r.allowHTML)&&eq(a,e.props),r.arrow?s?n.arrow!==r.arrow&&(i.removeChild(s),i.appendChild(eU(r.arrow))):i.appendChild(eU(r.arrow)):s&&i.removeChild(s)}return r.className=ed,r.setAttribute("data-state","hidden"),eq(r,e.props),t.appendChild(n),n.appendChild(r),o(e.props,e.props),{popper:t,onUpdate:o}}eF.$$tippy=!0;var ez=1,eX=[],eY=[];function eJ(e,t){void 0===t&&(t={});var n=eW.plugins.concat(t.plugins||[]);document.addEventListener("touchstart",eH,ev),window.addEventListener("blur",eR);var r=Object.assign({},t,{plugins:n}),o=(ej(e)?[e]:eb(e,"NodeList")?eE(e):Array.isArray(e)?e:eE(document.querySelectorAll(e))).reduce(function(e,t){var n=t&&function(e,t){var n,r,o,i,a,s,c,p,u=e_(e,Object.assign({},eW,eB(eA(t)))),f=!1,d=!1,l=!1,m=!1,v=[],h=ew(F,u.interactiveDebounce),g=ez++,b=(n=u.plugins).filter(function(e,t){return n.indexOf(e)===t}),y={id:g,reference:e,popper:eT(),popperInstance:null,props:u,state:{isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},plugins:b,clearDelayTimeouts:function(){clearTimeout(r),clearTimeout(o),cancelAnimationFrame(i)},setProps:function(t){if(!y.state.isDestroyed){P("onBeforeUpdate",[y,t]),q();var n=y.props,r=e_(e,Object.assign({},n,eA(t),{ignoreAttributes:!0}));y.props=r,U(),n.interactiveDebounce!==r.interactiveDebounce&&(M(),h=ew(F,r.interactiveDebounce)),n.triggerTarget&&!r.triggerTarget?ex(n.triggerTarget).forEach(function(e){e.removeAttribute("aria-expanded")}):r.triggerTarget&&e.removeAttribute("aria-expanded"),H(),C(),O&&O(n,r),y.popperInstance&&(J(),G().forEach(function(e){requestAnimationFrame(e._tippy.popperInstance.forceUpdate)})),P("onAfterUpdate",[y,t])}},setContent:function(e){y.setProps({content:e})},show:function(){var t,n,r,o=y.state.isVisible,i=y.state.isDestroyed,a=!y.state.isEnabled,s=eP.isTouch&&!y.props.touch,u=eg(y.props.duration,0,eW.duration);if(!(o||i||a||s||(p||e).hasAttribute("disabled"))&&(P("onShow",[y],!1),!1!==y.props.onShow(y))){if(y.state.isVisible=!0,D()&&(x.style.visibility="visible"),C(),N(),y.state.isMounted||(x.style.transition="none"),D()){var f=e$(x);eD([f.box,f.content],0)}c=function(){var e;if(y.state.isVisible&&!m){if(m=!0,x.offsetHeight,x.style.transition=y.props.moveTransition,D()&&y.props.animation){var t=e$(x),n=t.box,r=t.content;eD([n,r],u),eL([n,r],"visible")}S(),H(),eO(eY,y),null==(e=y.popperInstance)||e.forceUpdate(),P("onMount",[y]),y.props.animation&&D()&&_(u,function(){y.state.isShown=!0,P("onShown",[y])})}},n=y.props.appendTo,r=p||e,(t=y.props.interactive&&n===eh||"parent"===n?r.parentNode:ey(n,[r])).contains(x)||t.appendChild(x),y.state.isMounted=!0,J()}},hide:function(){var e,t=!y.state.isVisible,n=y.state.isDestroyed,r=!y.state.isEnabled,o=eg(y.props.duration,1,eW.duration);if(!t&&!n&&!r&&(P("onHide",[y],!1),!1!==y.props.onHide(y))){if(y.state.isVisible=!1,y.state.isShown=!1,m=!1,f=!1,D()&&(x.style.visibility="hidden"),M(),B(),C(!0),D()){var i=e$(x),a=i.box,s=i.content;y.props.animation&&(eD([a,s],o),eL([a,s],"hidden"))}(S(),H(),y.props.animation)?D()&&(e=y.unmount,_(o,function(){!y.state.isVisible&&x.parentNode&&x.parentNode.contains(x)&&e()})):y.unmount()}},hideWithInteractivity:function(e){L().addEventListener("mousemove",h),eO(eX,h),h(e)},enable:function(){y.state.isEnabled=!0},disable:function(){y.hide(),y.state.isEnabled=!1},unmount:function(){y.state.isVisible&&y.hide(),y.state.isMounted&&(Z(),G().forEach(function(e){e._tippy.unmount()}),x.parentNode&&x.parentNode.removeChild(x),eY=eY.filter(function(e){return e!==y}),y.state.isMounted=!1,P("onHidden",[y]))},destroy:function(){y.state.isDestroyed||(y.clearDelayTimeouts(),y.unmount(),q(),delete e._tippy,y.state.isDestroyed=!0,P("onDestroy",[y]))}};if(!u.render)return y;var w=u.render(y),x=w.popper,O=w.onUpdate;x.setAttribute("data-tippy-root",""),x.id="tippy-"+y.id,y.popper=x,e._tippy=y,x._tippy=y;var E=b.map(function(e){return e.fn(y)}),A=e.hasAttribute("aria-expanded");return U(),H(),C(),P("onCreate",[y]),u.showOnCreate&&K(),x.addEventListener("mouseenter",function(){y.props.interactive&&y.state.isVisible&&y.clearDelayTimeouts()}),x.addEventListener("mouseleave",function(){y.props.interactive&&y.props.trigger.indexOf("mouseenter")>=0&&L().addEventListener("mousemove",h)}),y;function T(){var e=y.props.touch;return Array.isArray(e)?e:[e,0]}function j(){return"hold"===T()[0]}function D(){var e;return!!(null!=(e=y.props.render)&&e.$$tippy)}function L(){var t,n,r=(p||e).parentNode;return r&&null!=(n=ex(r)[0])&&null!=(t=n.ownerDocument)&&t.body?n.ownerDocument:document}function k(e){return y.state.isMounted&&!y.state.isVisible||eP.isTouch||a&&"focus"===a.type?0:eg(y.props.delay,e?0:1,eW.delay)}function C(e){void 0===e&&(e=!1),x.style.pointerEvents=y.props.interactive&&!e?"":"none",x.style.zIndex=""+y.props.zIndex}function P(e,t,n){if(void 0===n&&(n=!0),E.forEach(function(n){n[e]&&n[e].apply(n,t)}),n){var r;(r=y.props)[e].apply(r,t)}}function S(){var t=y.props.aria;if(t.content){var n="aria-"+t.content,r=x.id;ex(y.props.triggerTarget||e).forEach(function(e){var t=e.getAttribute(n);if(y.state.isVisible)e.setAttribute(n,t?t+" "+r:r);else{var o=t&&t.replace(r,"").trim();o?e.setAttribute(n,o):e.removeAttribute(n)}})}}function H(){!A&&y.props.aria.expanded&&ex(y.props.triggerTarget||e).forEach(function(t){y.props.interactive?t.setAttribute("aria-expanded",y.state.isVisible&&t===(p||e)?"true":"false"):t.removeAttribute("aria-expanded")})}function M(){L().removeEventListener("mousemove",h),eX=eX.filter(function(e){return e!==h})}function R(t){if(!eP.isTouch||!l&&"mousedown"!==t.type){var n=t.composedPath&&t.composedPath()[0]||t.target;if(!(y.props.interactive&&eC(x,n))){if(ex(y.props.triggerTarget||e).some(function(e){return eC(e,n)})){if(eP.isTouch||y.state.isVisible&&y.props.trigger.indexOf("click")>=0)return}else P("onClickOutside",[y,t]);!0!==y.props.hideOnClick||(y.clearDelayTimeouts(),y.hide(),d=!0,setTimeout(function(){d=!1}),y.state.isMounted||B())}}}function V(){l=!0}function W(){l=!1}function N(){var e=L();e.addEventListener("mousedown",R,!0),e.addEventListener("touchend",R,ev),e.addEventListener("touchstart",W,ev),e.addEventListener("touchmove",V,ev)}function B(){var e=L();e.removeEventListener("mousedown",R,!0),e.removeEventListener("touchend",R,ev),e.removeEventListener("touchstart",W,ev),e.removeEventListener("touchmove",V,ev)}function _(e,t){var n=e$(x).box;function r(e){e.target===n&&(ek(n,"remove",r),t())}if(0===e)return t();ek(n,"remove",s),ek(n,"add",r),s=r}function I(t,n,r){void 0===r&&(r=!1),ex(y.props.triggerTarget||e).forEach(function(e){e.addEventListener(t,n,r),v.push({node:e,eventType:t,handler:n,options:r})})}function U(){j()&&(I("touchstart",$,{passive:!0}),I("touchend",z,{passive:!0})),y.props.trigger.split(/\s+/).filter(Boolean).forEach(function(e){if("manual"!==e)switch(I(e,$),e){case"mouseenter":I("mouseleave",z);break;case"focus":I(eV?"focusout":"blur",X);break;case"focusin":I("focusout",X)}})}function q(){v.forEach(function(e){var t=e.node,n=e.eventType,r=e.handler,o=e.options;t.removeEventListener(n,r,o)}),v=[]}function $(e){var t,n=!1;if(!(!y.state.isEnabled||Y(e))&&!d){var r=(null==(t=a)?void 0:t.type)==="focus";a=e,p=e.currentTarget,H(),!y.state.isVisible&&eb(e,"MouseEvent")&&eX.forEach(function(t){return t(e)}),"click"===e.type&&(0>y.props.trigger.indexOf("mouseenter")||f)&&!1!==y.props.hideOnClick&&y.state.isVisible?n=!0:K(e),"click"===e.type&&(f=!n),n&&!r&&Q(e)}}function F(t){var n,r,o,i=t.target,a=(p||e).contains(i)||x.contains(i);("mousemove"!==t.type||!a)&&(n=G().concat(x).map(function(e){var t,n=null==(t=e._tippy.popperInstance)?void 0:t.state;return n?{popperRect:e.getBoundingClientRect(),popperState:n,props:u}:null}).filter(Boolean),r=t.clientX,o=t.clientY,n.every(function(e){var t=e.popperRect,n=e.popperState,i=e.props.interactiveBorder,a=n.placement.split("-")[0],s=n.modifiersData.offset;if(!s)return!0;var c="bottom"===a?s.top.y:0,p="top"===a?s.bottom.y:0,u="right"===a?s.left.x:0,f="left"===a?s.right.x:0,d=t.top-o+c>i,l=o-t.bottom-p>i,m=t.left-r+u>i,v=r-t.right-f>i;return d||l||m||v})&&(M(),Q(t)))}function z(e){if(!(Y(e)||y.props.trigger.indexOf("click")>=0&&f)){if(y.props.interactive){y.hideWithInteractivity(e);return}Q(e)}}function X(t){0>y.props.trigger.indexOf("focusin")&&t.target!==(p||e)||y.props.interactive&&t.relatedTarget&&x.contains(t.relatedTarget)||Q(t)}function Y(e){return!!eP.isTouch&&j()!==e.type.indexOf("touch")>=0}function J(){Z();var t=y.props,n=t.popperOptions,r=t.placement,o=t.offset,i=t.getReferenceClientRect,a=t.moveTransition,s=D()?e$(x).arrow:null,u=i?{getBoundingClientRect:i,contextElement:i.contextElement||p||e}:e,f=[{name:"offset",options:{offset:o}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!a}},{name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(e){var t=e.state;if(D()){var n=e$(x).box;["placement","reference-hidden","escaped"].forEach(function(e){"placement"===e?n.setAttribute("data-placement",t.placement):t.attributes.popper["data-popper-"+e]?n.setAttribute("data-"+e,""):n.removeAttribute("data-"+e)}),t.attributes.popper={}}}}];D()&&s&&f.push({name:"arrow",options:{element:s,padding:3}}),f.push.apply(f,(null==n?void 0:n.modifiers)||[]),y.popperInstance=ef(u,x,Object.assign({},n,{placement:r,onFirstUpdate:c,modifiers:f}))}function Z(){y.popperInstance&&(y.popperInstance.destroy(),y.popperInstance=null)}function G(){return eE(x.querySelectorAll("[data-tippy-root]"))}function K(e){y.clearDelayTimeouts(),e&&P("onTrigger",[y,e]),N();var t=k(!0),n=T(),o=n[0],i=n[1];eP.isTouch&&"hold"===o&&i&&(t=i),t?r=setTimeout(function(){y.show()},t):y.show()}function Q(e){if(y.clearDelayTimeouts(),P("onUntrigger",[y,e]),!y.state.isVisible){B();return}if(!(y.props.trigger.indexOf("mouseenter")>=0&&y.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(e.type)>=0)||!f){var t=k(!1);t?o=setTimeout(function(){y.state.isVisible&&y.hide()},t):i=requestAnimationFrame(function(){y.hide()})}}}(t,r);return n&&e.push(n),e},[]);return ej(e)?o[0]:o}eJ.defaultProps=eW,eJ.setDefaultProps=function(e){Object.keys(e).forEach(function(t){eW[t]=e[t]})},eJ.currentInput=eP,Object.assign({},Z,{effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow)}}),eJ.setDefaultProps({render:eF});var eZ=n(51776),eG=n(70257);function eK(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var eQ="undefined"!=typeof window&&"undefined"!=typeof document;function e0(e,t){e&&("function"==typeof e&&e(t),({}).hasOwnProperty.call(e,"current")&&(e.current=t))}function e1(){return eQ&&document.createElement("div")}var e2=eQ?eZ.useLayoutEffect:eZ.useEffect;function e5(e,t,n){n.split(/\s+/).forEach(function(n){n&&e.classList[t](n)})}var e9={name:"className",defaultValue:"",fn:function(e){var t=e.popper.firstElementChild,n=function(){var t;return!!(null==(t=e.props.render)?void 0:t.$$tippy)};function r(){(!e.props.className||n())&&e5(t,"add",e.props.className)}return{onCreate:r,onBeforeUpdate:function(){n()&&e5(t,"remove",e.props.className)},onAfterUpdate:r}}},e3=(d=function(e){var t,n,r,o=e.children,i=e.content,a=e.visible,s=e.singleton,c=e.render,p=e.reference,u=e.disabled,f=void 0!==u&&u,d=e.ignoreAttributes,l=(e.__source,e.__self,eK(e,["children","content","visible","singleton","render","reference","disabled","ignoreAttributes","__source","__self"])),m=void 0!==a,v=void 0!==s,h=(0,eZ.useState)(!1),g=h[0],b=h[1],y=(0,eZ.useState)({}),w=y[0],x=y[1],O=(0,eZ.useState)(),E=O[0],A=O[1],T=(t=function(){return{container:e1(),renders:1}},(n=(0,eZ.useRef)()).current||(n.current=t()),n.current),j=Object.assign({ignoreAttributes:void 0===d||d},l,{content:T.container});m&&(j.trigger="manual",j.hideOnClick=!1),v&&(f=!0);var D=j,L=j.plugins||[];c&&(D=Object.assign({},j,{plugins:v&&null!=s.data?[].concat(L,[{fn:function(){return{onTrigger:function(e,t){var n=s.data.children.find(function(e){return e.instance.reference===t.currentTarget});e.state.$$activeSingletonInstance=n.instance,A(n.content)}}}}]):L,render:function(){return{popper:T.container}}}));var k=[p].concat(o?[o.type]:[]);return e2(function(){var e=p;p&&p.hasOwnProperty("current")&&(e=p.current);var t=eJ(e||T.ref||e1(),Object.assign({},D,{plugins:[e9].concat(j.plugins||[])}));return T.instance=t,f&&t.disable(),a&&t.show(),v&&s.hook({instance:t,content:i,props:D,setSingletonContent:A}),b(!0),function(){t.destroy(),null==s||s.cleanup(t)}},k),e2(function(){if(1===T.renders){T.renders++;return}var e,t,n,r,o,c,p,u=T.instance;u.setProps((e=u.props,Object.assign({},t=D,{popperOptions:Object.assign({},e.popperOptions,t.popperOptions,{modifiers:(o=[].concat((null==(n=e.popperOptions)?void 0:n.modifiers)||[],(null==(r=t.popperOptions)?void 0:r.modifiers)||[]),c=[],o.forEach(function(e){c.find(function(t){return function e(t,n){if(t===n)return!0;if("object"!=typeof t||null==t||"object"!=typeof n||null==n||Object.keys(t).length!==Object.keys(n).length)return!1;for(var r in t)if(!n.hasOwnProperty(r)||!e(t[r],n[r]))return!1;return!0}(e,t)})||c.push(e)}),c)})}))),null==(p=u.popperInstance)||p.forceUpdate(),f?u.disable():u.enable(),m&&(a?u.show():u.hide()),v&&s.hook({instance:u,content:i,props:D,setSingletonContent:A})}),e2(function(){if(c){var e,t=T.instance;t.setProps({popperOptions:Object.assign({},t.props.popperOptions,{modifiers:[].concat(((null==(e=t.props.popperOptions)?void 0:e.modifiers)||[]).filter(function(e){return"$$tippyReact"!==e.name}),[{name:"$$tippyReact",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(e){var t,n=e.state,r=null==(t=n.modifiersData)?void 0:t.hide;(w.placement!==n.placement||w.referenceHidden!==(null==r?void 0:r.isReferenceHidden)||w.escaped!==(null==r?void 0:r.hasPopperEscaped))&&x({placement:n.placement,referenceHidden:null==r?void 0:r.isReferenceHidden,escaped:null==r?void 0:r.hasPopperEscaped}),n.attributes.popper={}}}])})})}},[w.placement,w.referenceHidden,w.escaped].concat(k)),eZ.createElement(eZ.Fragment,null,o?(0,eZ.cloneElement)(o,{ref:function(e){T.ref=e,e0(o.ref,e)}}):null,g&&(0,eG.createPortal)(c?c((r={"data-placement":w.placement},w.referenceHidden&&(r["data-reference-hidden"]=""),w.escaped&&(r["data-escaped"]=""),r),E,T.instance):i,T.container))},(0,eZ.forwardRef)(function(e,t){var n=e.children,r=eK(e,["children"]);return eZ.createElement(d,Object.assign({},void 0,r),n?(0,eZ.cloneElement)(n,{ref:function(e){e0(t,e),e0(n.ref,e)}}):null)}))}}]);