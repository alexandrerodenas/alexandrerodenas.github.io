const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DvU0gVLJ.js","assets/shared-GfKnJiSu.js","assets/Unique_impl-Cds87zow.js","assets/index-CfaO2VPq.js","assets/index-38BOA9ll.js"])))=>i.map(i=>d[i]);
function iE(t,e){for(var a=0;a<e.length;a++){const r=e[a];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const l=Object.getOwnPropertyDescriptor(r,i);l&&Object.defineProperty(t,i,l.get?l:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function a(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=a(i);fetch(i.href,l)}})();var az=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Vh(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function oE(t){if(Object.prototype.hasOwnProperty.call(t,"__esModule"))return t;var e=t.default;if(typeof e=="function"){var a=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};a.prototype=e.prototype}else a={};return Object.defineProperty(a,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(a,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),a}var qf={exports:{}},Ri={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jy;function lE(){if(Jy)return Ri;Jy=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function a(r,i,l){var c=null;if(l!==void 0&&(c=""+l),i.key!==void 0&&(c=""+i.key),"key"in i){l={};for(var f in i)f!=="key"&&(l[f]=i[f])}else l=i;return i=l.ref,{$$typeof:t,type:r,key:c,ref:i!==void 0?i:null,props:l}}return Ri.Fragment=e,Ri.jsx=a,Ri.jsxs=a,Ri}var e0;function uE(){return e0||(e0=1,qf.exports=lE()),qf.exports}var T=uE(),Ff={exports:{}},xe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t0;function cE(){if(t0)return xe;t0=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function v(O){return O===null||typeof O!="object"?null:(O=y&&O[y]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,$={};function A(O,B,ae){this.props=O,this.context=B,this.refs=$,this.updater=ae||S}A.prototype.isReactComponent={},A.prototype.setState=function(O,B){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,B,"setState")},A.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function M(){}M.prototype=A.prototype;function X(O,B,ae){this.props=O,this.context=B,this.refs=$,this.updater=ae||S}var z=X.prototype=new M;z.constructor=X,k(z,A.prototype),z.isPureReactComponent=!0;var I=Array.isArray,V={H:null,A:null,T:null,S:null,V:null},Z=Object.prototype.hasOwnProperty;function re(O,B,ae,se,ce,ke){return ae=ke.ref,{$$typeof:t,type:O,key:B,ref:ae!==void 0?ae:null,props:ke}}function ie(O,B){return re(O.type,B,void 0,void 0,void 0,O.props)}function F(O){return typeof O=="object"&&O!==null&&O.$$typeof===t}function U(O){var B={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ae){return B[ae]})}var _=/\/+/g;function te(O,B){return typeof O=="object"&&O!==null&&O.key!=null?U(""+O.key):B.toString(36)}function ue(){}function pe(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(ue,ue):(O.status="pending",O.then(function(B){O.status==="pending"&&(O.status="fulfilled",O.value=B)},function(B){O.status==="pending"&&(O.status="rejected",O.reason=B)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function fe(O,B,ae,se,ce){var ke=typeof O;(ke==="undefined"||ke==="boolean")&&(O=null);var we=!1;if(O===null)we=!0;else switch(ke){case"bigint":case"string":case"number":we=!0;break;case"object":switch(O.$$typeof){case t:case e:we=!0;break;case g:return we=O._init,fe(we(O._payload),B,ae,se,ce)}}if(we)return ce=ce(O),we=se===""?"."+te(O,0):se,I(ce)?(ae="",we!=null&&(ae=we.replace(_,"$&/")+"/"),fe(ce,B,ae,"",function(zt){return zt})):ce!=null&&(F(ce)&&(ce=ie(ce,ae+(ce.key==null||O&&O.key===ce.key?"":(""+ce.key).replace(_,"$&/")+"/")+we)),B.push(ce)),1;we=0;var xt=se===""?".":se+":";if(I(O))for(var Xe=0;Xe<O.length;Xe++)se=O[Xe],ke=xt+te(se,Xe),we+=fe(se,B,ae,ke,ce);else if(Xe=v(O),typeof Xe=="function")for(O=Xe.call(O),Xe=0;!(se=O.next()).done;)se=se.value,ke=xt+te(se,Xe++),we+=fe(se,B,ae,ke,ce);else if(ke==="object"){if(typeof O.then=="function")return fe(pe(O),B,ae,se,ce);throw B=String(O),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return we}function G(O,B,ae){if(O==null)return O;var se=[],ce=0;return fe(O,se,"","",function(ke){return B.call(ae,ke,ce++)}),se}function P(O){if(O._status===-1){var B=O._result;B=B(),B.then(function(ae){(O._status===0||O._status===-1)&&(O._status=1,O._result=ae)},function(ae){(O._status===0||O._status===-1)&&(O._status=2,O._result=ae)}),O._status===-1&&(O._status=0,O._result=B)}if(O._status===1)return O._result.default;throw O._result}var Q=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function oe(){}return xe.Children={map:G,forEach:function(O,B,ae){G(O,function(){B.apply(this,arguments)},ae)},count:function(O){var B=0;return G(O,function(){B++}),B},toArray:function(O){return G(O,function(B){return B})||[]},only:function(O){if(!F(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},xe.Component=A,xe.Fragment=a,xe.Profiler=i,xe.PureComponent=X,xe.StrictMode=r,xe.Suspense=h,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,xe.__COMPILER_RUNTIME={__proto__:null,c:function(O){return V.H.useMemoCache(O)}},xe.cache=function(O){return function(){return O.apply(null,arguments)}},xe.cloneElement=function(O,B,ae){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var se=k({},O.props),ce=O.key,ke=void 0;if(B!=null)for(we in B.ref!==void 0&&(ke=void 0),B.key!==void 0&&(ce=""+B.key),B)!Z.call(B,we)||we==="key"||we==="__self"||we==="__source"||we==="ref"&&B.ref===void 0||(se[we]=B[we]);var we=arguments.length-2;if(we===1)se.children=ae;else if(1<we){for(var xt=Array(we),Xe=0;Xe<we;Xe++)xt[Xe]=arguments[Xe+2];se.children=xt}return re(O.type,ce,void 0,void 0,ke,se)},xe.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:l,_context:O},O},xe.createElement=function(O,B,ae){var se,ce={},ke=null;if(B!=null)for(se in B.key!==void 0&&(ke=""+B.key),B)Z.call(B,se)&&se!=="key"&&se!=="__self"&&se!=="__source"&&(ce[se]=B[se]);var we=arguments.length-2;if(we===1)ce.children=ae;else if(1<we){for(var xt=Array(we),Xe=0;Xe<we;Xe++)xt[Xe]=arguments[Xe+2];ce.children=xt}if(O&&O.defaultProps)for(se in we=O.defaultProps,we)ce[se]===void 0&&(ce[se]=we[se]);return re(O,ke,void 0,void 0,null,ce)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(O){return{$$typeof:f,render:O}},xe.isValidElement=F,xe.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:P}},xe.memo=function(O,B){return{$$typeof:p,type:O,compare:B===void 0?null:B}},xe.startTransition=function(O){var B=V.T,ae={};V.T=ae;try{var se=O(),ce=V.S;ce!==null&&ce(ae,se),typeof se=="object"&&se!==null&&typeof se.then=="function"&&se.then(oe,Q)}catch(ke){Q(ke)}finally{V.T=B}},xe.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},xe.use=function(O){return V.H.use(O)},xe.useActionState=function(O,B,ae){return V.H.useActionState(O,B,ae)},xe.useCallback=function(O,B){return V.H.useCallback(O,B)},xe.useContext=function(O){return V.H.useContext(O)},xe.useDebugValue=function(){},xe.useDeferredValue=function(O,B){return V.H.useDeferredValue(O,B)},xe.useEffect=function(O,B,ae){var se=V.H;if(typeof ae=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return se.useEffect(O,B)},xe.useId=function(){return V.H.useId()},xe.useImperativeHandle=function(O,B,ae){return V.H.useImperativeHandle(O,B,ae)},xe.useInsertionEffect=function(O,B){return V.H.useInsertionEffect(O,B)},xe.useLayoutEffect=function(O,B){return V.H.useLayoutEffect(O,B)},xe.useMemo=function(O,B){return V.H.useMemo(O,B)},xe.useOptimistic=function(O,B){return V.H.useOptimistic(O,B)},xe.useReducer=function(O,B,ae){return V.H.useReducer(O,B,ae)},xe.useRef=function(O){return V.H.useRef(O)},xe.useState=function(O){return V.H.useState(O)},xe.useSyncExternalStore=function(O,B,ae){return V.H.useSyncExternalStore(O,B,ae)},xe.useTransition=function(){return V.H.useTransition()},xe.version="19.1.0",xe}var n0;function Hh(){return n0||(n0=1,Ff.exports=cE()),Ff.exports}var de=Hh();const W0=Vh(de);var Vf={exports:{}},Ci={},Hf={exports:{}},Gf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a0;function fE(){return a0||(a0=1,function(t){function e(G,P){var Q=G.length;G.push(P);e:for(;0<Q;){var oe=Q-1>>>1,O=G[oe];if(0<i(O,P))G[oe]=P,G[Q]=O,Q=oe;else break e}}function a(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var P=G[0],Q=G.pop();if(Q!==P){G[0]=Q;e:for(var oe=0,O=G.length,B=O>>>1;oe<B;){var ae=2*(oe+1)-1,se=G[ae],ce=ae+1,ke=G[ce];if(0>i(se,Q))ce<O&&0>i(ke,se)?(G[oe]=ke,G[ce]=Q,oe=ce):(G[oe]=se,G[ae]=Q,oe=ae);else if(ce<O&&0>i(ke,Q))G[oe]=ke,G[ce]=Q,oe=ce;else break e}}return P}function i(G,P){var Q=G.sortIndex-P.sortIndex;return Q!==0?Q:G.id-P.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;t.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();t.unstable_now=function(){return c.now()-f}}var h=[],p=[],g=1,y=null,v=3,S=!1,k=!1,$=!1,A=!1,M=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function I(G){for(var P=a(p);P!==null;){if(P.callback===null)r(p);else if(P.startTime<=G)r(p),P.sortIndex=P.expirationTime,e(h,P);else break;P=a(p)}}function V(G){if($=!1,I(G),!k)if(a(h)!==null)k=!0,Z||(Z=!0,te());else{var P=a(p);P!==null&&fe(V,P.startTime-G)}}var Z=!1,re=-1,ie=5,F=-1;function U(){return A?!0:!(t.unstable_now()-F<ie)}function _(){if(A=!1,Z){var G=t.unstable_now();F=G;var P=!0;try{e:{k=!1,$&&($=!1,X(re),re=-1),S=!0;var Q=v;try{t:{for(I(G),y=a(h);y!==null&&!(y.expirationTime>G&&U());){var oe=y.callback;if(typeof oe=="function"){y.callback=null,v=y.priorityLevel;var O=oe(y.expirationTime<=G);if(G=t.unstable_now(),typeof O=="function"){y.callback=O,I(G),P=!0;break t}y===a(h)&&r(h),I(G)}else r(h);y=a(h)}if(y!==null)P=!0;else{var B=a(p);B!==null&&fe(V,B.startTime-G),P=!1}}break e}finally{y=null,v=Q,S=!1}P=void 0}}finally{P?te():Z=!1}}}var te;if(typeof z=="function")te=function(){z(_)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,pe=ue.port2;ue.port1.onmessage=_,te=function(){pe.postMessage(null)}}else te=function(){M(_,0)};function fe(G,P){re=M(function(){G(t.unstable_now())},P)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(G){G.callback=null},t.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ie=0<G?Math.floor(1e3/G):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_next=function(G){switch(v){case 1:case 2:case 3:var P=3;break;default:P=v}var Q=v;v=P;try{return G()}finally{v=Q}},t.unstable_requestPaint=function(){A=!0},t.unstable_runWithPriority=function(G,P){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var Q=v;v=G;try{return P()}finally{v=Q}},t.unstable_scheduleCallback=function(G,P,Q){var oe=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?oe+Q:oe):Q=oe,G){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=Q+O,G={id:g++,callback:P,priorityLevel:G,startTime:Q,expirationTime:O,sortIndex:-1},Q>oe?(G.sortIndex=Q,e(p,G),a(h)===null&&G===a(p)&&($?(X(re),re=-1):$=!0,fe(V,Q-oe))):(G.sortIndex=O,e(h,G),k||S||(k=!0,Z||(Z=!0,te()))),G},t.unstable_shouldYield=U,t.unstable_wrapCallback=function(G){var P=v;return function(){var Q=v;v=P;try{return G.apply(this,arguments)}finally{v=Q}}}}(Gf)),Gf}var s0;function hE(){return s0||(s0=1,Hf.exports=fE()),Hf.exports}var Kf={exports:{}},kt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r0;function dE(){if(r0)return kt;r0=1;var t=Hh();function e(h){var p="https://react.dev/errors/"+h;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+h+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var r={d:{f:a,r:function(){throw Error(e(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},i=Symbol.for("react.portal");function l(h,p,g){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:i,key:y==null?null:""+y,children:h,containerInfo:p,implementation:g}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(h,p){if(h==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return kt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,kt.createPortal=function(h,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return l(h,p,null,g)},kt.flushSync=function(h){var p=c.T,g=r.p;try{if(c.T=null,r.p=2,h)return h()}finally{c.T=p,r.p=g,r.d.f()}},kt.preconnect=function(h,p){typeof h=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(h,p))},kt.prefetchDNS=function(h){typeof h=="string"&&r.d.D(h)},kt.preinit=function(h,p){if(typeof h=="string"&&p&&typeof p.as=="string"){var g=p.as,y=f(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(h,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:y,integrity:v,fetchPriority:S}):g==="script"&&r.d.X(h,{crossOrigin:y,integrity:v,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},kt.preinitModule=function(h,p){if(typeof h=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=f(p.as,p.crossOrigin);r.d.M(h,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(h)},kt.preload=function(h,p){if(typeof h=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,y=f(g,p.crossOrigin);r.d.L(h,g,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},kt.preloadModule=function(h,p){if(typeof h=="string")if(p){var g=f(p.as,p.crossOrigin);r.d.m(h,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(h)},kt.requestFormReset=function(h){r.d.r(h)},kt.unstable_batchedUpdates=function(h,p){return h(p)},kt.useFormState=function(h,p,g){return c.H.useFormState(h,p,g)},kt.useFormStatus=function(){return c.H.useHostTransitionStatus()},kt.version="19.1.0",kt}var i0;function pE(){if(i0)return Kf.exports;i0=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),Kf.exports=dE(),Kf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o0;function mE(){if(o0)return Ci;o0=1;var t=hE(),e=Hh(),a=pE();function r(n){var s="https://react.dev/errors/"+n;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var s=n,o=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,(s.flags&4098)!==0&&(o=s.return),n=s.return;while(n)}return s.tag===3?o:null}function c(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function f(n){if(l(n)!==n)throw Error(r(188))}function h(n){var s=n.alternate;if(!s){if(s=l(n),s===null)throw Error(r(188));return s!==n?null:n}for(var o=n,u=s;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return f(d),n;if(m===u)return f(d),s;m=m.sibling}throw Error(r(188))}if(o.return!==u.return)o=d,u=m;else{for(var w=!1,N=d.child;N;){if(N===o){w=!0,o=d,u=m;break}if(N===u){w=!0,u=d,o=m;break}N=N.sibling}if(!w){for(N=m.child;N;){if(N===o){w=!0,o=m,u=d;break}if(N===u){w=!0,u=m,o=d;break}N=N.sibling}if(!w)throw Error(r(189))}}if(o.alternate!==u)throw Error(r(190))}if(o.tag!==3)throw Error(r(188));return o.stateNode.current===o?n:s}function p(n){var s=n.tag;if(s===5||s===26||s===27||s===6)return n;for(n=n.child;n!==null;){if(s=p(n),s!==null)return s;n=n.sibling}return null}var g=Object.assign,y=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),M=Symbol.for("react.provider"),X=Symbol.for("react.consumer"),z=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),Z=Symbol.for("react.suspense_list"),re=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),F=Symbol.for("react.activity"),U=Symbol.for("react.memo_cache_sentinel"),_=Symbol.iterator;function te(n){return n===null||typeof n!="object"?null:(n=_&&n[_]||n["@@iterator"],typeof n=="function"?n:null)}var ue=Symbol.for("react.client.reference");function pe(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===ue?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case A:return"Profiler";case $:return"StrictMode";case V:return"Suspense";case Z:return"SuspenseList";case F:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case S:return"Portal";case z:return(n.displayName||"Context")+".Provider";case X:return(n._context.displayName||"Context")+".Consumer";case I:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case re:return s=n.displayName||null,s!==null?s:pe(n.type)||"Memo";case ie:s=n._payload,n=n._init;try{return pe(n(s))}catch{}}return null}var fe=Array.isArray,G=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},oe=[],O=-1;function B(n){return{current:n}}function ae(n){0>O||(n.current=oe[O],oe[O]=null,O--)}function se(n,s){O++,oe[O]=n.current,n.current=s}var ce=B(null),ke=B(null),we=B(null),xt=B(null);function Xe(n,s){switch(se(we,s),se(ke,n),se(ce,null),s.nodeType){case 9:case 11:n=(n=s.documentElement)&&(n=n.namespaceURI)?_y(n):0;break;default:if(n=s.tagName,s=s.namespaceURI)s=_y(s),n=Ay(s,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}ae(ce),se(ce,n)}function zt(){ae(ce),ae(ke),ae(we)}function zr(n){n.memoizedState!==null&&se(xt,n);var s=ce.current,o=Ay(s,n.type);s!==o&&(se(ke,n),se(ce,o))}function As(n){ke.current===n&&(ae(ce),ae(ke)),xt.current===n&&(ae(xt),_i._currentValue=Q)}var ku=Object.prototype.hasOwnProperty,_u=t.unstable_scheduleCallback,Au=t.unstable_cancelCallback,LN=t.unstable_shouldYield,BN=t.unstable_requestPaint,Tn=t.unstable_now,UN=t.unstable_getCurrentPriorityLevel,op=t.unstable_ImmediatePriority,lp=t.unstable_UserBlockingPriority,go=t.unstable_NormalPriority,qN=t.unstable_LowPriority,up=t.unstable_IdlePriority,FN=t.log,VN=t.unstable_setDisableYieldValue,jr=null,Kt=null;function ia(n){if(typeof FN=="function"&&VN(n),Kt&&typeof Kt.setStrictMode=="function")try{Kt.setStrictMode(jr,n)}catch{}}var Yt=Math.clz32?Math.clz32:KN,HN=Math.log,GN=Math.LN2;function KN(n){return n>>>=0,n===0?32:31-(HN(n)/GN|0)|0}var yo=256,bo=4194304;function Ya(n){var s=n&42;if(s!==0)return s;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function vo(n,s,o){var u=n.pendingLanes;if(u===0)return 0;var d=0,m=n.suspendedLanes,w=n.pingedLanes;n=n.warmLanes;var N=u&134217727;return N!==0?(u=N&~m,u!==0?d=Ya(u):(w&=N,w!==0?d=Ya(w):o||(o=N&~n,o!==0&&(d=Ya(o))))):(N=u&~m,N!==0?d=Ya(N):w!==0?d=Ya(w):o||(o=u&~n,o!==0&&(d=Ya(o)))),d===0?0:s!==0&&s!==d&&(s&m)===0&&(m=d&-d,o=s&-s,m>=o||m===32&&(o&4194048)!==0)?s:d}function Mr(n,s){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&s)===0}function YN(n,s){switch(n){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cp(){var n=yo;return yo<<=1,(yo&4194048)===0&&(yo=256),n}function fp(){var n=bo;return bo<<=1,(bo&62914560)===0&&(bo=4194304),n}function Ou(n){for(var s=[],o=0;31>o;o++)s.push(n);return s}function Ir(n,s){n.pendingLanes|=s,s!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function PN(n,s,o,u,d,m){var w=n.pendingLanes;n.pendingLanes=o,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=o,n.entangledLanes&=o,n.errorRecoveryDisabledLanes&=o,n.shellSuspendCounter=0;var N=n.entanglements,D=n.expirationTimes,H=n.hiddenUpdates;for(o=w&~o;0<o;){var W=31-Yt(o),ne=1<<W;N[W]=0,D[W]=-1;var K=H[W];if(K!==null)for(H[W]=null,W=0;W<K.length;W++){var Y=K[W];Y!==null&&(Y.lane&=-536870913)}o&=~ne}u!==0&&hp(n,u,0),m!==0&&d===0&&n.tag!==0&&(n.suspendedLanes|=m&~(w&~s))}function hp(n,s,o){n.pendingLanes|=s,n.suspendedLanes&=~s;var u=31-Yt(s);n.entangledLanes|=s,n.entanglements[u]=n.entanglements[u]|1073741824|o&4194090}function dp(n,s){var o=n.entangledLanes|=s;for(n=n.entanglements;o;){var u=31-Yt(o),d=1<<u;d&s|n[u]&s&&(n[u]|=s),o&=~d}}function $u(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Du(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function pp(){var n=P.p;return n!==0?n:(n=window.event,n===void 0?32:Yy(n.type))}function XN(n,s){var o=P.p;try{return P.p=n,s()}finally{P.p=o}}var oa=Math.random().toString(36).slice(2),Tt="__reactFiber$"+oa,jt="__reactProps$"+oa,Os="__reactContainer$"+oa,Ru="__reactEvents$"+oa,ZN="__reactListeners$"+oa,WN="__reactHandles$"+oa,mp="__reactResources$"+oa,Lr="__reactMarker$"+oa;function Cu(n){delete n[Tt],delete n[jt],delete n[Ru],delete n[ZN],delete n[WN]}function $s(n){var s=n[Tt];if(s)return s;for(var o=n.parentNode;o;){if(s=o[Os]||o[Tt]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(n=Ry(n);n!==null;){if(o=n[Tt])return o;n=Ry(n)}return s}n=o,o=n.parentNode}return null}function Ds(n){if(n=n[Tt]||n[Os]){var s=n.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return n}return null}function Br(n){var s=n.tag;if(s===5||s===26||s===27||s===6)return n.stateNode;throw Error(r(33))}function Rs(n){var s=n[mp];return s||(s=n[mp]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function dt(n){n[Lr]=!0}var gp=new Set,yp={};function Pa(n,s){Cs(n,s),Cs(n+"Capture",s)}function Cs(n,s){for(yp[n]=s,n=0;n<s.length;n++)gp.add(s[n])}var QN=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),bp={},vp={};function JN(n){return ku.call(vp,n)?!0:ku.call(bp,n)?!1:QN.test(n)?vp[n]=!0:(bp[n]=!0,!1)}function wo(n,s,o){if(JN(s))if(o===null)n.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":n.removeAttribute(s);return;case"boolean":var u=s.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){n.removeAttribute(s);return}}n.setAttribute(s,""+o)}}function So(n,s,o){if(o===null)n.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttribute(s,""+o)}}function Mn(n,s,o,u){if(u===null)n.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(o);return}n.setAttributeNS(s,o,""+u)}}var zu,wp;function zs(n){if(zu===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);zu=s&&s[1]||"",wp=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+zu+n+wp}var ju=!1;function Mu(n,s){if(!n||ju)return"";ju=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(s){var ne=function(){throw Error()};if(Object.defineProperty(ne.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ne,[])}catch(Y){var K=Y}Reflect.construct(n,[],ne)}else{try{ne.call()}catch(Y){K=Y}n.call(ne.prototype)}}else{try{throw Error()}catch(Y){K=Y}(ne=n())&&typeof ne.catch=="function"&&ne.catch(function(){})}}catch(Y){if(Y&&K&&typeof Y.stack=="string")return[Y.stack,K.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),w=m[0],N=m[1];if(w&&N){var D=w.split(`
`),H=N.split(`
`);for(d=u=0;u<D.length&&!D[u].includes("DetermineComponentFrameRoot");)u++;for(;d<H.length&&!H[d].includes("DetermineComponentFrameRoot");)d++;if(u===D.length||d===H.length)for(u=D.length-1,d=H.length-1;1<=u&&0<=d&&D[u]!==H[d];)d--;for(;1<=u&&0<=d;u--,d--)if(D[u]!==H[d]){if(u!==1||d!==1)do if(u--,d--,0>d||D[u]!==H[d]){var W=`
`+D[u].replace(" at new "," at ");return n.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",n.displayName)),W}while(1<=u&&0<=d);break}}}finally{ju=!1,Error.prepareStackTrace=o}return(o=n?n.displayName||n.name:"")?zs(o):""}function ex(n){switch(n.tag){case 26:case 27:case 5:return zs(n.type);case 16:return zs("Lazy");case 13:return zs("Suspense");case 19:return zs("SuspenseList");case 0:case 15:return Mu(n.type,!1);case 11:return Mu(n.type.render,!1);case 1:return Mu(n.type,!0);case 31:return zs("Activity");default:return""}}function Sp(n){try{var s="";do s+=ex(n),n=n.return;while(n);return s}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function nn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Np(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function tx(n){var s=Np(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,s),u=""+n[s];if(!n.hasOwnProperty(s)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,m=o.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return d.call(this)},set:function(w){u=""+w,m.call(this,w)}}),Object.defineProperty(n,s,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(w){u=""+w},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function No(n){n._valueTracker||(n._valueTracker=tx(n))}function xp(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var o=s.getValue(),u="";return n&&(u=Np(n)?n.checked?"true":"false":n.value),n=u,n!==o?(s.setValue(n),!0):!1}function xo(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var nx=/[\n"\\]/g;function an(n){return n.replace(nx,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function Iu(n,s,o,u,d,m,w,N){n.name="",w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?n.type=w:n.removeAttribute("type"),s!=null?w==="number"?(s===0&&n.value===""||n.value!=s)&&(n.value=""+nn(s)):n.value!==""+nn(s)&&(n.value=""+nn(s)):w!=="submit"&&w!=="reset"||n.removeAttribute("value"),s!=null?Lu(n,w,nn(s)):o!=null?Lu(n,w,nn(o)):u!=null&&n.removeAttribute("value"),d==null&&m!=null&&(n.defaultChecked=!!m),d!=null&&(n.checked=d&&typeof d!="function"&&typeof d!="symbol"),N!=null&&typeof N!="function"&&typeof N!="symbol"&&typeof N!="boolean"?n.name=""+nn(N):n.removeAttribute("name")}function Tp(n,s,o,u,d,m,w,N){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(n.type=m),s!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||s!=null))return;o=o!=null?""+nn(o):"",s=s!=null?""+nn(s):o,N||s===n.value||(n.value=s),n.defaultValue=s}u=u??d,u=typeof u!="function"&&typeof u!="symbol"&&!!u,n.checked=N?n.checked:!!u,n.defaultChecked=!!u,w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"&&(n.name=w)}function Lu(n,s,o){s==="number"&&xo(n.ownerDocument)===n||n.defaultValue===""+o||(n.defaultValue=""+o)}function js(n,s,o,u){if(n=n.options,s){s={};for(var d=0;d<o.length;d++)s["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=s.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&u&&(n[o].defaultSelected=!0)}else{for(o=""+nn(o),s=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}s!==null||n[d].disabled||(s=n[d])}s!==null&&(s.selected=!0)}}function Ep(n,s,o){if(s!=null&&(s=""+nn(s),s!==n.value&&(n.value=s),o==null)){n.defaultValue!==s&&(n.defaultValue=s);return}n.defaultValue=o!=null?""+nn(o):""}function kp(n,s,o,u){if(s==null){if(u!=null){if(o!=null)throw Error(r(92));if(fe(u)){if(1<u.length)throw Error(r(93));u=u[0]}o=u}o==null&&(o=""),s=o}o=nn(s),n.defaultValue=o,u=n.textContent,u===o&&u!==""&&u!==null&&(n.value=u)}function Ms(n,s){if(s){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=s;return}}n.textContent=s}var ax=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _p(n,s,o){var u=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?n.setProperty(s,""):s==="float"?n.cssFloat="":n[s]="":u?n.setProperty(s,o):typeof o!="number"||o===0||ax.has(s)?s==="float"?n.cssFloat=o:n[s]=(""+o).trim():n[s]=o+"px"}function Ap(n,s,o){if(s!=null&&typeof s!="object")throw Error(r(62));if(n=n.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||s!=null&&s.hasOwnProperty(u)||(u.indexOf("--")===0?n.setProperty(u,""):u==="float"?n.cssFloat="":n[u]="");for(var d in s)u=s[d],s.hasOwnProperty(d)&&o[d]!==u&&_p(n,d,u)}else for(var m in s)s.hasOwnProperty(m)&&_p(n,m,s[m])}function Bu(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),rx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function To(n){return rx.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Uu=null;function qu(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Is=null,Ls=null;function Op(n){var s=Ds(n);if(s&&(n=s.stateNode)){var o=n[jt]||null;e:switch(n=s.stateNode,s.type){case"input":if(Iu(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+an(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var u=o[s];if(u!==n&&u.form===n.form){var d=u[jt]||null;if(!d)throw Error(r(90));Iu(u,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(s=0;s<o.length;s++)u=o[s],u.form===n.form&&xp(u)}break e;case"textarea":Ep(n,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&js(n,!!o.multiple,s,!1)}}}var Fu=!1;function $p(n,s,o){if(Fu)return n(s,o);Fu=!0;try{var u=n(s);return u}finally{if(Fu=!1,(Is!==null||Ls!==null)&&(ul(),Is&&(s=Is,n=Ls,Ls=Is=null,Op(s),n)))for(s=0;s<n.length;s++)Op(n[s])}}function Ur(n,s){var o=n.stateNode;if(o===null)return null;var u=o[jt]||null;if(u===null)return null;o=u[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(r(231,s,typeof o));return o}var In=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vu=!1;if(In)try{var qr={};Object.defineProperty(qr,"passive",{get:function(){Vu=!0}}),window.addEventListener("test",qr,qr),window.removeEventListener("test",qr,qr)}catch{Vu=!1}var la=null,Hu=null,Eo=null;function Dp(){if(Eo)return Eo;var n,s=Hu,o=s.length,u,d="value"in la?la.value:la.textContent,m=d.length;for(n=0;n<o&&s[n]===d[n];n++);var w=o-n;for(u=1;u<=w&&s[o-u]===d[m-u];u++);return Eo=d.slice(n,1<u?1-u:void 0)}function ko(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function _o(){return!0}function Rp(){return!1}function Mt(n){function s(o,u,d,m,w){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=m,this.target=w,this.currentTarget=null;for(var N in n)n.hasOwnProperty(N)&&(o=n[N],this[N]=o?o(m):m[N]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?_o:Rp,this.isPropagationStopped=Rp,this}return g(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=_o)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=_o)},persist:function(){},isPersistent:_o}),s}var Xa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ao=Mt(Xa),Fr=g({},Xa,{view:0,detail:0}),ix=Mt(Fr),Gu,Ku,Vr,Oo=g({},Fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Vr&&(Vr&&n.type==="mousemove"?(Gu=n.screenX-Vr.screenX,Ku=n.screenY-Vr.screenY):Ku=Gu=0,Vr=n),Gu)},movementY:function(n){return"movementY"in n?n.movementY:Ku}}),Cp=Mt(Oo),ox=g({},Oo,{dataTransfer:0}),lx=Mt(ox),ux=g({},Fr,{relatedTarget:0}),Yu=Mt(ux),cx=g({},Xa,{animationName:0,elapsedTime:0,pseudoElement:0}),fx=Mt(cx),hx=g({},Xa,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),dx=Mt(hx),px=g({},Xa,{data:0}),zp=Mt(px),mx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bx(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=yx[n])?!!s[n]:!1}function Pu(){return bx}var vx=g({},Fr,{key:function(n){if(n.key){var s=mx[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=ko(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?gx[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pu,charCode:function(n){return n.type==="keypress"?ko(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ko(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),wx=Mt(vx),Sx=g({},Oo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jp=Mt(Sx),Nx=g({},Fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pu}),xx=Mt(Nx),Tx=g({},Xa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ex=Mt(Tx),kx=g({},Oo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),_x=Mt(kx),Ax=g({},Xa,{newState:0,oldState:0}),Ox=Mt(Ax),$x=[9,13,27,32],Xu=In&&"CompositionEvent"in window,Hr=null;In&&"documentMode"in document&&(Hr=document.documentMode);var Dx=In&&"TextEvent"in window&&!Hr,Mp=In&&(!Xu||Hr&&8<Hr&&11>=Hr),Ip=" ",Lp=!1;function Bp(n,s){switch(n){case"keyup":return $x.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Up(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Bs=!1;function Rx(n,s){switch(n){case"compositionend":return Up(s);case"keypress":return s.which!==32?null:(Lp=!0,Ip);case"textInput":return n=s.data,n===Ip&&Lp?null:n;default:return null}}function Cx(n,s){if(Bs)return n==="compositionend"||!Xu&&Bp(n,s)?(n=Dp(),Eo=Hu=la=null,Bs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Mp&&s.locale!=="ko"?null:s.data;default:return null}}var zx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qp(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!zx[n.type]:s==="textarea"}function Fp(n,s,o,u){Is?Ls?Ls.push(u):Ls=[u]:Is=u,s=ml(s,"onChange"),0<s.length&&(o=new Ao("onChange","change",null,o,u),n.push({event:o,listeners:s}))}var Gr=null,Kr=null;function jx(n){Ny(n,0)}function $o(n){var s=Br(n);if(xp(s))return n}function Vp(n,s){if(n==="change")return s}var Hp=!1;if(In){var Zu;if(In){var Wu="oninput"in document;if(!Wu){var Gp=document.createElement("div");Gp.setAttribute("oninput","return;"),Wu=typeof Gp.oninput=="function"}Zu=Wu}else Zu=!1;Hp=Zu&&(!document.documentMode||9<document.documentMode)}function Kp(){Gr&&(Gr.detachEvent("onpropertychange",Yp),Kr=Gr=null)}function Yp(n){if(n.propertyName==="value"&&$o(Kr)){var s=[];Fp(s,Kr,n,qu(n)),$p(jx,s)}}function Mx(n,s,o){n==="focusin"?(Kp(),Gr=s,Kr=o,Gr.attachEvent("onpropertychange",Yp)):n==="focusout"&&Kp()}function Ix(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return $o(Kr)}function Lx(n,s){if(n==="click")return $o(s)}function Bx(n,s){if(n==="input"||n==="change")return $o(s)}function Ux(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var Pt=typeof Object.is=="function"?Object.is:Ux;function Yr(n,s){if(Pt(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var o=Object.keys(n),u=Object.keys(s);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!ku.call(s,d)||!Pt(n[d],s[d]))return!1}return!0}function Pp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Xp(n,s){var o=Pp(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=s&&u>=s)return{node:o,offset:s-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Pp(o)}}function Zp(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?Zp(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function Wp(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var s=xo(n.document);s instanceof n.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)n=s.contentWindow;else break;s=xo(n.document)}return s}function Qu(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}var qx=In&&"documentMode"in document&&11>=document.documentMode,Us=null,Ju=null,Pr=null,ec=!1;function Qp(n,s,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;ec||Us==null||Us!==xo(u)||(u=Us,"selectionStart"in u&&Qu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Pr&&Yr(Pr,u)||(Pr=u,u=ml(Ju,"onSelect"),0<u.length&&(s=new Ao("onSelect","select",null,s,o),n.push({event:s,listeners:u}),s.target=Us)))}function Za(n,s){var o={};return o[n.toLowerCase()]=s.toLowerCase(),o["Webkit"+n]="webkit"+s,o["Moz"+n]="moz"+s,o}var qs={animationend:Za("Animation","AnimationEnd"),animationiteration:Za("Animation","AnimationIteration"),animationstart:Za("Animation","AnimationStart"),transitionrun:Za("Transition","TransitionRun"),transitionstart:Za("Transition","TransitionStart"),transitioncancel:Za("Transition","TransitionCancel"),transitionend:Za("Transition","TransitionEnd")},tc={},Jp={};In&&(Jp=document.createElement("div").style,"AnimationEvent"in window||(delete qs.animationend.animation,delete qs.animationiteration.animation,delete qs.animationstart.animation),"TransitionEvent"in window||delete qs.transitionend.transition);function Wa(n){if(tc[n])return tc[n];if(!qs[n])return n;var s=qs[n],o;for(o in s)if(s.hasOwnProperty(o)&&o in Jp)return tc[n]=s[o];return n}var em=Wa("animationend"),tm=Wa("animationiteration"),nm=Wa("animationstart"),Fx=Wa("transitionrun"),Vx=Wa("transitionstart"),Hx=Wa("transitioncancel"),am=Wa("transitionend"),sm=new Map,nc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");nc.push("scrollEnd");function mn(n,s){sm.set(n,s),Pa(s,[n])}var rm=new WeakMap;function sn(n,s){if(typeof n=="object"&&n!==null){var o=rm.get(n);return o!==void 0?o:(s={value:n,source:s,stack:Sp(s)},rm.set(n,s),s)}return{value:n,source:s,stack:Sp(s)}}var rn=[],Fs=0,ac=0;function Do(){for(var n=Fs,s=ac=Fs=0;s<n;){var o=rn[s];rn[s++]=null;var u=rn[s];rn[s++]=null;var d=rn[s];rn[s++]=null;var m=rn[s];if(rn[s++]=null,u!==null&&d!==null){var w=u.pending;w===null?d.next=d:(d.next=w.next,w.next=d),u.pending=d}m!==0&&im(o,d,m)}}function Ro(n,s,o,u){rn[Fs++]=n,rn[Fs++]=s,rn[Fs++]=o,rn[Fs++]=u,ac|=u,n.lanes|=u,n=n.alternate,n!==null&&(n.lanes|=u)}function sc(n,s,o,u){return Ro(n,s,o,u),Co(n)}function Vs(n,s){return Ro(n,null,null,s),Co(n)}function im(n,s,o){n.lanes|=o;var u=n.alternate;u!==null&&(u.lanes|=o);for(var d=!1,m=n.return;m!==null;)m.childLanes|=o,u=m.alternate,u!==null&&(u.childLanes|=o),m.tag===22&&(n=m.stateNode,n===null||n._visibility&1||(d=!0)),n=m,m=m.return;return n.tag===3?(m=n.stateNode,d&&s!==null&&(d=31-Yt(o),n=m.hiddenUpdates,u=n[d],u===null?n[d]=[s]:u.push(s),s.lane=o|536870912),m):null}function Co(n){if(50<vi)throw vi=0,ff=null,Error(r(185));for(var s=n.return;s!==null;)n=s,s=n.return;return n.tag===3?n.stateNode:null}var Hs={};function Gx(n,s,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xt(n,s,o,u){return new Gx(n,s,o,u)}function rc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ln(n,s){var o=n.alternate;return o===null?(o=Xt(n.tag,s,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=s,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&65011712,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,s=n.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o.refCleanup=n.refCleanup,o}function om(n,s){n.flags&=65011714;var o=n.alternate;return o===null?(n.childLanes=0,n.lanes=s,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=o.childLanes,n.lanes=o.lanes,n.child=o.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=o.memoizedProps,n.memoizedState=o.memoizedState,n.updateQueue=o.updateQueue,n.type=o.type,s=o.dependencies,n.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),n}function zo(n,s,o,u,d,m){var w=0;if(u=n,typeof n=="function")rc(n)&&(w=1);else if(typeof n=="string")w=YT(n,o,ce.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case F:return n=Xt(31,o,s,d),n.elementType=F,n.lanes=m,n;case k:return Qa(o.children,d,m,s);case $:w=8,d|=24;break;case A:return n=Xt(12,o,s,d|2),n.elementType=A,n.lanes=m,n;case V:return n=Xt(13,o,s,d),n.elementType=V,n.lanes=m,n;case Z:return n=Xt(19,o,s,d),n.elementType=Z,n.lanes=m,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case M:case z:w=10;break e;case X:w=9;break e;case I:w=11;break e;case re:w=14;break e;case ie:w=16,u=null;break e}w=29,o=Error(r(130,n===null?"null":typeof n,"")),u=null}return s=Xt(w,o,s,d),s.elementType=n,s.type=u,s.lanes=m,s}function Qa(n,s,o,u){return n=Xt(7,n,u,s),n.lanes=o,n}function ic(n,s,o){return n=Xt(6,n,null,s),n.lanes=o,n}function oc(n,s,o){return s=Xt(4,n.children!==null?n.children:[],n.key,s),s.lanes=o,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}var Gs=[],Ks=0,jo=null,Mo=0,on=[],ln=0,Ja=null,Bn=1,Un="";function es(n,s){Gs[Ks++]=Mo,Gs[Ks++]=jo,jo=n,Mo=s}function lm(n,s,o){on[ln++]=Bn,on[ln++]=Un,on[ln++]=Ja,Ja=n;var u=Bn;n=Un;var d=32-Yt(u)-1;u&=~(1<<d),o+=1;var m=32-Yt(s)+d;if(30<m){var w=d-d%5;m=(u&(1<<w)-1).toString(32),u>>=w,d-=w,Bn=1<<32-Yt(s)+d|o<<d|u,Un=m+n}else Bn=1<<m|o<<d|u,Un=n}function lc(n){n.return!==null&&(es(n,1),lm(n,1,0))}function uc(n){for(;n===jo;)jo=Gs[--Ks],Gs[Ks]=null,Mo=Gs[--Ks],Gs[Ks]=null;for(;n===Ja;)Ja=on[--ln],on[ln]=null,Un=on[--ln],on[ln]=null,Bn=on[--ln],on[ln]=null}var Rt=null,nt=null,je=!1,ts=null,En=!1,cc=Error(r(519));function ns(n){var s=Error(r(418,""));throw Wr(sn(s,n)),cc}function um(n){var s=n.stateNode,o=n.type,u=n.memoizedProps;switch(s[Tt]=n,s[jt]=u,o){case"dialog":Oe("cancel",s),Oe("close",s);break;case"iframe":case"object":case"embed":Oe("load",s);break;case"video":case"audio":for(o=0;o<Si.length;o++)Oe(Si[o],s);break;case"source":Oe("error",s);break;case"img":case"image":case"link":Oe("error",s),Oe("load",s);break;case"details":Oe("toggle",s);break;case"input":Oe("invalid",s),Tp(s,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),No(s);break;case"select":Oe("invalid",s);break;case"textarea":Oe("invalid",s),kp(s,u.value,u.defaultValue,u.children),No(s)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||u.suppressHydrationWarning===!0||ky(s.textContent,o)?(u.popover!=null&&(Oe("beforetoggle",s),Oe("toggle",s)),u.onScroll!=null&&Oe("scroll",s),u.onScrollEnd!=null&&Oe("scrollend",s),u.onClick!=null&&(s.onclick=gl),s=!0):s=!1,s||ns(n)}function cm(n){for(Rt=n.return;Rt;)switch(Rt.tag){case 5:case 13:En=!1;return;case 27:case 3:En=!0;return;default:Rt=Rt.return}}function Xr(n){if(n!==Rt)return!1;if(!je)return cm(n),je=!0,!1;var s=n.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=n.type,o=!(o!=="form"&&o!=="button")||_f(n.type,n.memoizedProps)),o=!o),o&&nt&&ns(n),cm(n),s===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));e:{for(n=n.nextSibling,s=0;n;){if(n.nodeType===8)if(o=n.data,o==="/$"){if(s===0){nt=yn(n.nextSibling);break e}s--}else o!=="$"&&o!=="$!"&&o!=="$?"||s++;n=n.nextSibling}nt=null}}else s===27?(s=nt,Ta(n.type)?(n=Df,Df=null,nt=n):nt=s):nt=Rt?yn(n.stateNode.nextSibling):null;return!0}function Zr(){nt=Rt=null,je=!1}function fm(){var n=ts;return n!==null&&(Bt===null?Bt=n:Bt.push.apply(Bt,n),ts=null),n}function Wr(n){ts===null?ts=[n]:ts.push(n)}var fc=B(null),as=null,qn=null;function ua(n,s,o){se(fc,s._currentValue),s._currentValue=o}function Fn(n){n._currentValue=fc.current,ae(fc)}function hc(n,s,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,u!==null&&(u.childLanes|=s)):u!==null&&(u.childLanes&s)!==s&&(u.childLanes|=s),n===o)break;n=n.return}}function dc(n,s,o,u){var d=n.child;for(d!==null&&(d.return=n);d!==null;){var m=d.dependencies;if(m!==null){var w=d.child;m=m.firstContext;e:for(;m!==null;){var N=m;m=d;for(var D=0;D<s.length;D++)if(N.context===s[D]){m.lanes|=o,N=m.alternate,N!==null&&(N.lanes|=o),hc(m.return,o,n),u||(w=null);break e}m=N.next}}else if(d.tag===18){if(w=d.return,w===null)throw Error(r(341));w.lanes|=o,m=w.alternate,m!==null&&(m.lanes|=o),hc(w,o,n),w=null}else w=d.child;if(w!==null)w.return=d;else for(w=d;w!==null;){if(w===n){w=null;break}if(d=w.sibling,d!==null){d.return=w.return,w=d;break}w=w.return}d=w}}function Qr(n,s,o,u){n=null;for(var d=s,m=!1;d!==null;){if(!m){if((d.flags&524288)!==0)m=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var w=d.alternate;if(w===null)throw Error(r(387));if(w=w.memoizedProps,w!==null){var N=d.type;Pt(d.pendingProps.value,w.value)||(n!==null?n.push(N):n=[N])}}else if(d===xt.current){if(w=d.alternate,w===null)throw Error(r(387));w.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(n!==null?n.push(_i):n=[_i])}d=d.return}n!==null&&dc(s,n,o,u),s.flags|=262144}function Io(n){for(n=n.firstContext;n!==null;){if(!Pt(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function ss(n){as=n,qn=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Et(n){return hm(as,n)}function Lo(n,s){return as===null&&ss(n),hm(n,s)}function hm(n,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},qn===null){if(n===null)throw Error(r(308));qn=s,n.dependencies={lanes:0,firstContext:s},n.flags|=524288}else qn=qn.next=s;return o}var Kx=typeof AbortController<"u"?AbortController:function(){var n=[],s=this.signal={aborted:!1,addEventListener:function(o,u){n.push(u)}};this.abort=function(){s.aborted=!0,n.forEach(function(o){return o()})}},Yx=t.unstable_scheduleCallback,Px=t.unstable_NormalPriority,ut={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pc(){return{controller:new Kx,data:new Map,refCount:0}}function Jr(n){n.refCount--,n.refCount===0&&Yx(Px,function(){n.controller.abort()})}var ei=null,mc=0,Ys=0,Ps=null;function Xx(n,s){if(ei===null){var o=ei=[];mc=0,Ys=bf(),Ps={status:"pending",value:void 0,then:function(u){o.push(u)}}}return mc++,s.then(dm,dm),s}function dm(){if(--mc===0&&ei!==null){Ps!==null&&(Ps.status="fulfilled");var n=ei;ei=null,Ys=0,Ps=null;for(var s=0;s<n.length;s++)(0,n[s])()}}function Zx(n,s){var o=[],u={status:"pending",value:null,reason:null,then:function(d){o.push(d)}};return n.then(function(){u.status="fulfilled",u.value=s;for(var d=0;d<o.length;d++)(0,o[d])(s)},function(d){for(u.status="rejected",u.reason=d,d=0;d<o.length;d++)(0,o[d])(void 0)}),u}var pm=G.S;G.S=function(n,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&Xx(n,s),pm!==null&&pm(n,s)};var rs=B(null);function gc(){var n=rs.current;return n!==null?n:Ze.pooledCache}function Bo(n,s){s===null?se(rs,rs.current):se(rs,s.pool)}function mm(){var n=gc();return n===null?null:{parent:ut._currentValue,pool:n}}var ti=Error(r(460)),gm=Error(r(474)),Uo=Error(r(542)),yc={then:function(){}};function ym(n){return n=n.status,n==="fulfilled"||n==="rejected"}function qo(){}function bm(n,s,o){switch(o=n[o],o===void 0?n.push(s):o!==s&&(s.then(qo,qo),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw n=s.reason,wm(n),n;default:if(typeof s.status=="string")s.then(qo,qo);else{if(n=Ze,n!==null&&100<n.shellSuspendCounter)throw Error(r(482));n=s,n.status="pending",n.then(function(u){if(s.status==="pending"){var d=s;d.status="fulfilled",d.value=u}},function(u){if(s.status==="pending"){var d=s;d.status="rejected",d.reason=u}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw n=s.reason,wm(n),n}throw ni=s,ti}}var ni=null;function vm(){if(ni===null)throw Error(r(459));var n=ni;return ni=null,n}function wm(n){if(n===ti||n===Uo)throw Error(r(483))}var ca=!1;function bc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vc(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function fa(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function ha(n,s,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Ie&2)!==0){var d=u.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s,s=Co(n),im(n,null,o),s}return Ro(n,u,s,o),Co(n)}function ai(n,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var u=s.lanes;u&=n.pendingLanes,o|=u,s.lanes=o,dp(n,o)}}function wc(n,s){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var w={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?d=m=w:m=m.next=w,o=o.next}while(o!==null);m===null?d=m=s:m=m.next=s}else d=m=s;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=s:n.next=s,o.lastBaseUpdate=s}var Sc=!1;function si(){if(Sc){var n=Ps;if(n!==null)throw n}}function ri(n,s,o,u){Sc=!1;var d=n.updateQueue;ca=!1;var m=d.firstBaseUpdate,w=d.lastBaseUpdate,N=d.shared.pending;if(N!==null){d.shared.pending=null;var D=N,H=D.next;D.next=null,w===null?m=H:w.next=H,w=D;var W=n.alternate;W!==null&&(W=W.updateQueue,N=W.lastBaseUpdate,N!==w&&(N===null?W.firstBaseUpdate=H:N.next=H,W.lastBaseUpdate=D))}if(m!==null){var ne=d.baseState;w=0,W=H=D=null,N=m;do{var K=N.lane&-536870913,Y=K!==N.lane;if(Y?(De&K)===K:(u&K)===K){K!==0&&K===Ys&&(Sc=!0),W!==null&&(W=W.next={lane:0,tag:N.tag,payload:N.payload,callback:null,next:null});e:{var Se=n,ge=N;K=s;var Ve=o;switch(ge.tag){case 1:if(Se=ge.payload,typeof Se=="function"){ne=Se.call(Ve,ne,K);break e}ne=Se;break e;case 3:Se.flags=Se.flags&-65537|128;case 0:if(Se=ge.payload,K=typeof Se=="function"?Se.call(Ve,ne,K):Se,K==null)break e;ne=g({},ne,K);break e;case 2:ca=!0}}K=N.callback,K!==null&&(n.flags|=64,Y&&(n.flags|=8192),Y=d.callbacks,Y===null?d.callbacks=[K]:Y.push(K))}else Y={lane:K,tag:N.tag,payload:N.payload,callback:N.callback,next:null},W===null?(H=W=Y,D=ne):W=W.next=Y,w|=K;if(N=N.next,N===null){if(N=d.shared.pending,N===null)break;Y=N,N=Y.next,Y.next=null,d.lastBaseUpdate=Y,d.shared.pending=null}}while(!0);W===null&&(D=ne),d.baseState=D,d.firstBaseUpdate=H,d.lastBaseUpdate=W,m===null&&(d.shared.lanes=0),wa|=w,n.lanes=w,n.memoizedState=ne}}function Sm(n,s){if(typeof n!="function")throw Error(r(191,n));n.call(s)}function Nm(n,s){var o=n.callbacks;if(o!==null)for(n.callbacks=null,n=0;n<o.length;n++)Sm(o[n],s)}var Xs=B(null),Fo=B(0);function xm(n,s){n=Xn,se(Fo,n),se(Xs,s),Xn=n|s.baseLanes}function Nc(){se(Fo,Xn),se(Xs,Xs.current)}function xc(){Xn=Fo.current,ae(Xs),ae(Fo)}var da=0,Ee=null,qe=null,ot=null,Vo=!1,Zs=!1,is=!1,Ho=0,ii=0,Ws=null,Wx=0;function st(){throw Error(r(321))}function Tc(n,s){if(s===null)return!1;for(var o=0;o<s.length&&o<n.length;o++)if(!Pt(n[o],s[o]))return!1;return!0}function Ec(n,s,o,u,d,m){return da=m,Ee=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,G.H=n===null||n.memoizedState===null?ig:og,is=!1,m=o(u,d),is=!1,Zs&&(m=Em(s,o,u,d)),Tm(n),m}function Tm(n){G.H=Zo;var s=qe!==null&&qe.next!==null;if(da=0,ot=qe=Ee=null,Vo=!1,ii=0,Ws=null,s)throw Error(r(300));n===null||pt||(n=n.dependencies,n!==null&&Io(n)&&(pt=!0))}function Em(n,s,o,u){Ee=n;var d=0;do{if(Zs&&(Ws=null),ii=0,Zs=!1,25<=d)throw Error(r(301));if(d+=1,ot=qe=null,n.updateQueue!=null){var m=n.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}G.H=sT,m=s(o,u)}while(Zs);return m}function Qx(){var n=G.H,s=n.useState()[0];return s=typeof s.then=="function"?oi(s):s,n=n.useState()[0],(qe!==null?qe.memoizedState:null)!==n&&(Ee.flags|=1024),s}function kc(){var n=Ho!==0;return Ho=0,n}function _c(n,s,o){s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~o}function Ac(n){if(Vo){for(n=n.memoizedState;n!==null;){var s=n.queue;s!==null&&(s.pending=null),n=n.next}Vo=!1}da=0,ot=qe=Ee=null,Zs=!1,ii=Ho=0,Ws=null}function It(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ot===null?Ee.memoizedState=ot=n:ot=ot.next=n,ot}function lt(){if(qe===null){var n=Ee.alternate;n=n!==null?n.memoizedState:null}else n=qe.next;var s=ot===null?Ee.memoizedState:ot.next;if(s!==null)ot=s,qe=n;else{if(n===null)throw Ee.alternate===null?Error(r(467)):Error(r(310));qe=n,n={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},ot===null?Ee.memoizedState=ot=n:ot=ot.next=n}return ot}function Oc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function oi(n){var s=ii;return ii+=1,Ws===null&&(Ws=[]),n=bm(Ws,n,s),s=Ee,(ot===null?s.memoizedState:ot.next)===null&&(s=s.alternate,G.H=s===null||s.memoizedState===null?ig:og),n}function Go(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return oi(n);if(n.$$typeof===z)return Et(n)}throw Error(r(438,String(n)))}function $c(n){var s=null,o=Ee.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var u=Ee.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(s={data:u.data.map(function(d){return d.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=Oc(),Ee.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(n),u=0;u<n;u++)o[u]=U;return s.index++,o}function Vn(n,s){return typeof s=="function"?s(n):s}function Ko(n){var s=lt();return Dc(s,qe,n)}function Dc(n,s,o){var u=n.queue;if(u===null)throw Error(r(311));u.lastRenderedReducer=o;var d=n.baseQueue,m=u.pending;if(m!==null){if(d!==null){var w=d.next;d.next=m.next,m.next=w}s.baseQueue=d=m,u.pending=null}if(m=n.baseState,d===null)n.memoizedState=m;else{s=d.next;var N=w=null,D=null,H=s,W=!1;do{var ne=H.lane&-536870913;if(ne!==H.lane?(De&ne)===ne:(da&ne)===ne){var K=H.revertLane;if(K===0)D!==null&&(D=D.next={lane:0,revertLane:0,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null}),ne===Ys&&(W=!0);else if((da&K)===K){H=H.next,K===Ys&&(W=!0);continue}else ne={lane:0,revertLane:H.revertLane,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},D===null?(N=D=ne,w=m):D=D.next=ne,Ee.lanes|=K,wa|=K;ne=H.action,is&&o(m,ne),m=H.hasEagerState?H.eagerState:o(m,ne)}else K={lane:ne,revertLane:H.revertLane,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},D===null?(N=D=K,w=m):D=D.next=K,Ee.lanes|=ne,wa|=ne;H=H.next}while(H!==null&&H!==s);if(D===null?w=m:D.next=N,!Pt(m,n.memoizedState)&&(pt=!0,W&&(o=Ps,o!==null)))throw o;n.memoizedState=m,n.baseState=w,n.baseQueue=D,u.lastRenderedState=m}return d===null&&(u.lanes=0),[n.memoizedState,u.dispatch]}function Rc(n){var s=lt(),o=s.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=n;var u=o.dispatch,d=o.pending,m=s.memoizedState;if(d!==null){o.pending=null;var w=d=d.next;do m=n(m,w.action),w=w.next;while(w!==d);Pt(m,s.memoizedState)||(pt=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),o.lastRenderedState=m}return[m,u]}function km(n,s,o){var u=Ee,d=lt(),m=je;if(m){if(o===void 0)throw Error(r(407));o=o()}else o=s();var w=!Pt((qe||d).memoizedState,o);w&&(d.memoizedState=o,pt=!0),d=d.queue;var N=Om.bind(null,u,d,n);if(li(2048,8,N,[n]),d.getSnapshot!==s||w||ot!==null&&ot.memoizedState.tag&1){if(u.flags|=2048,Qs(9,Yo(),Am.bind(null,u,d,o,s),null),Ze===null)throw Error(r(349));m||(da&124)!==0||_m(u,s,o)}return o}function _m(n,s,o){n.flags|=16384,n={getSnapshot:s,value:o},s=Ee.updateQueue,s===null?(s=Oc(),Ee.updateQueue=s,s.stores=[n]):(o=s.stores,o===null?s.stores=[n]:o.push(n))}function Am(n,s,o,u){s.value=o,s.getSnapshot=u,$m(s)&&Dm(n)}function Om(n,s,o){return o(function(){$m(s)&&Dm(n)})}function $m(n){var s=n.getSnapshot;n=n.value;try{var o=s();return!Pt(n,o)}catch{return!0}}function Dm(n){var s=Vs(n,2);s!==null&&en(s,n,2)}function Cc(n){var s=It();if(typeof n=="function"){var o=n;if(n=o(),is){ia(!0);try{o()}finally{ia(!1)}}}return s.memoizedState=s.baseState=n,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vn,lastRenderedState:n},s}function Rm(n,s,o,u){return n.baseState=o,Dc(n,qe,typeof u=="function"?u:Vn)}function Jx(n,s,o,u,d){if(Xo(n))throw Error(r(485));if(n=s.action,n!==null){var m={payload:d,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(w){m.listeners.push(w)}};G.T!==null?o(!0):m.isTransition=!1,u(m),o=s.pending,o===null?(m.next=s.pending=m,Cm(s,m)):(m.next=o.next,s.pending=o.next=m)}}function Cm(n,s){var o=s.action,u=s.payload,d=n.state;if(s.isTransition){var m=G.T,w={};G.T=w;try{var N=o(d,u),D=G.S;D!==null&&D(w,N),zm(n,s,N)}catch(H){zc(n,s,H)}finally{G.T=m}}else try{m=o(d,u),zm(n,s,m)}catch(H){zc(n,s,H)}}function zm(n,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){jm(n,s,u)},function(u){return zc(n,s,u)}):jm(n,s,o)}function jm(n,s,o){s.status="fulfilled",s.value=o,Mm(s),n.state=o,s=n.pending,s!==null&&(o=s.next,o===s?n.pending=null:(o=o.next,s.next=o,Cm(n,o)))}function zc(n,s,o){var u=n.pending;if(n.pending=null,u!==null){u=u.next;do s.status="rejected",s.reason=o,Mm(s),s=s.next;while(s!==u)}n.action=null}function Mm(n){n=n.listeners;for(var s=0;s<n.length;s++)(0,n[s])()}function Im(n,s){return s}function Lm(n,s){if(je){var o=Ze.formState;if(o!==null){e:{var u=Ee;if(je){if(nt){t:{for(var d=nt,m=En;d.nodeType!==8;){if(!m){d=null;break t}if(d=yn(d.nextSibling),d===null){d=null;break t}}m=d.data,d=m==="F!"||m==="F"?d:null}if(d){nt=yn(d.nextSibling),u=d.data==="F!";break e}}ns(u)}u=!1}u&&(s=o[0])}}return o=It(),o.memoizedState=o.baseState=s,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Im,lastRenderedState:s},o.queue=u,o=ag.bind(null,Ee,u),u.dispatch=o,u=Cc(!1),m=Bc.bind(null,Ee,!1,u.queue),u=It(),d={state:s,dispatch:null,action:n,pending:null},u.queue=d,o=Jx.bind(null,Ee,d,m,o),d.dispatch=o,u.memoizedState=n,[s,o,!1]}function Bm(n){var s=lt();return Um(s,qe,n)}function Um(n,s,o){if(s=Dc(n,s,Im)[0],n=Ko(Vn)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var u=oi(s)}catch(w){throw w===ti?Uo:w}else u=s;s=lt();var d=s.queue,m=d.dispatch;return o!==s.memoizedState&&(Ee.flags|=2048,Qs(9,Yo(),eT.bind(null,d,o),null)),[u,m,n]}function eT(n,s){n.action=s}function qm(n){var s=lt(),o=qe;if(o!==null)return Um(s,o,n);lt(),s=s.memoizedState,o=lt();var u=o.queue.dispatch;return o.memoizedState=n,[s,u,!1]}function Qs(n,s,o,u){return n={tag:n,create:o,deps:u,inst:s,next:null},s=Ee.updateQueue,s===null&&(s=Oc(),Ee.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,s.lastEffect=n),n}function Yo(){return{destroy:void 0,resource:void 0}}function Fm(){return lt().memoizedState}function Po(n,s,o,u){var d=It();u=u===void 0?null:u,Ee.flags|=n,d.memoizedState=Qs(1|s,Yo(),o,u)}function li(n,s,o,u){var d=lt();u=u===void 0?null:u;var m=d.memoizedState.inst;qe!==null&&u!==null&&Tc(u,qe.memoizedState.deps)?d.memoizedState=Qs(s,m,o,u):(Ee.flags|=n,d.memoizedState=Qs(1|s,m,o,u))}function Vm(n,s){Po(8390656,8,n,s)}function Hm(n,s){li(2048,8,n,s)}function Gm(n,s){return li(4,2,n,s)}function Km(n,s){return li(4,4,n,s)}function Ym(n,s){if(typeof s=="function"){n=n();var o=s(n);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function Pm(n,s,o){o=o!=null?o.concat([n]):null,li(4,4,Ym.bind(null,s,n),o)}function jc(){}function Xm(n,s){var o=lt();s=s===void 0?null:s;var u=o.memoizedState;return s!==null&&Tc(s,u[1])?u[0]:(o.memoizedState=[n,s],n)}function Zm(n,s){var o=lt();s=s===void 0?null:s;var u=o.memoizedState;if(s!==null&&Tc(s,u[1]))return u[0];if(u=n(),is){ia(!0);try{n()}finally{ia(!1)}}return o.memoizedState=[u,s],u}function Mc(n,s,o){return o===void 0||(da&1073741824)!==0?n.memoizedState=s:(n.memoizedState=o,n=Jg(),Ee.lanes|=n,wa|=n,o)}function Wm(n,s,o,u){return Pt(o,s)?o:Xs.current!==null?(n=Mc(n,o,u),Pt(n,s)||(pt=!0),n):(da&42)===0?(pt=!0,n.memoizedState=o):(n=Jg(),Ee.lanes|=n,wa|=n,s)}function Qm(n,s,o,u,d){var m=P.p;P.p=m!==0&&8>m?m:8;var w=G.T,N={};G.T=N,Bc(n,!1,s,o);try{var D=d(),H=G.S;if(H!==null&&H(N,D),D!==null&&typeof D=="object"&&typeof D.then=="function"){var W=Zx(D,u);ui(n,s,W,Jt(n))}else ui(n,s,u,Jt(n))}catch(ne){ui(n,s,{then:function(){},status:"rejected",reason:ne},Jt())}finally{P.p=m,G.T=w}}function tT(){}function Ic(n,s,o,u){if(n.tag!==5)throw Error(r(476));var d=Jm(n).queue;Qm(n,d,s,Q,o===null?tT:function(){return eg(n),o(u)})}function Jm(n){var s=n.memoizedState;if(s!==null)return s;s={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vn,lastRenderedState:Q},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vn,lastRenderedState:o},next:null},n.memoizedState=s,n=n.alternate,n!==null&&(n.memoizedState=s),s}function eg(n){var s=Jm(n).next.queue;ui(n,s,{},Jt())}function Lc(){return Et(_i)}function tg(){return lt().memoizedState}function ng(){return lt().memoizedState}function nT(n){for(var s=n.return;s!==null;){switch(s.tag){case 24:case 3:var o=Jt();n=fa(o);var u=ha(s,n,o);u!==null&&(en(u,s,o),ai(u,s,o)),s={cache:pc()},n.payload=s;return}s=s.return}}function aT(n,s,o){var u=Jt();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},Xo(n)?sg(s,o):(o=sc(n,s,o,u),o!==null&&(en(o,n,u),rg(o,s,u)))}function ag(n,s,o){var u=Jt();ui(n,s,o,u)}function ui(n,s,o,u){var d={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(Xo(n))sg(s,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var w=s.lastRenderedState,N=m(w,o);if(d.hasEagerState=!0,d.eagerState=N,Pt(N,w))return Ro(n,s,d,0),Ze===null&&Do(),!1}catch{}finally{}if(o=sc(n,s,d,u),o!==null)return en(o,n,u),rg(o,s,u),!0}return!1}function Bc(n,s,o,u){if(u={lane:2,revertLane:bf(),action:u,hasEagerState:!1,eagerState:null,next:null},Xo(n)){if(s)throw Error(r(479))}else s=sc(n,o,u,2),s!==null&&en(s,n,2)}function Xo(n){var s=n.alternate;return n===Ee||s!==null&&s===Ee}function sg(n,s){Zs=Vo=!0;var o=n.pending;o===null?s.next=s:(s.next=o.next,o.next=s),n.pending=s}function rg(n,s,o){if((o&4194048)!==0){var u=s.lanes;u&=n.pendingLanes,o|=u,s.lanes=o,dp(n,o)}}var Zo={readContext:Et,use:Go,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useLayoutEffect:st,useInsertionEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useSyncExternalStore:st,useId:st,useHostTransitionStatus:st,useFormState:st,useActionState:st,useOptimistic:st,useMemoCache:st,useCacheRefresh:st},ig={readContext:Et,use:Go,useCallback:function(n,s){return It().memoizedState=[n,s===void 0?null:s],n},useContext:Et,useEffect:Vm,useImperativeHandle:function(n,s,o){o=o!=null?o.concat([n]):null,Po(4194308,4,Ym.bind(null,s,n),o)},useLayoutEffect:function(n,s){return Po(4194308,4,n,s)},useInsertionEffect:function(n,s){Po(4,2,n,s)},useMemo:function(n,s){var o=It();s=s===void 0?null:s;var u=n();if(is){ia(!0);try{n()}finally{ia(!1)}}return o.memoizedState=[u,s],u},useReducer:function(n,s,o){var u=It();if(o!==void 0){var d=o(s);if(is){ia(!0);try{o(s)}finally{ia(!1)}}}else d=s;return u.memoizedState=u.baseState=d,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:d},u.queue=n,n=n.dispatch=aT.bind(null,Ee,n),[u.memoizedState,n]},useRef:function(n){var s=It();return n={current:n},s.memoizedState=n},useState:function(n){n=Cc(n);var s=n.queue,o=ag.bind(null,Ee,s);return s.dispatch=o,[n.memoizedState,o]},useDebugValue:jc,useDeferredValue:function(n,s){var o=It();return Mc(o,n,s)},useTransition:function(){var n=Cc(!1);return n=Qm.bind(null,Ee,n.queue,!0,!1),It().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,s,o){var u=Ee,d=It();if(je){if(o===void 0)throw Error(r(407));o=o()}else{if(o=s(),Ze===null)throw Error(r(349));(De&124)!==0||_m(u,s,o)}d.memoizedState=o;var m={value:o,getSnapshot:s};return d.queue=m,Vm(Om.bind(null,u,m,n),[n]),u.flags|=2048,Qs(9,Yo(),Am.bind(null,u,m,o,s),null),o},useId:function(){var n=It(),s=Ze.identifierPrefix;if(je){var o=Un,u=Bn;o=(u&~(1<<32-Yt(u)-1)).toString(32)+o,s="«"+s+"R"+o,o=Ho++,0<o&&(s+="H"+o.toString(32)),s+="»"}else o=Wx++,s="«"+s+"r"+o.toString(32)+"»";return n.memoizedState=s},useHostTransitionStatus:Lc,useFormState:Lm,useActionState:Lm,useOptimistic:function(n){var s=It();s.memoizedState=s.baseState=n;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=Bc.bind(null,Ee,!0,o),o.dispatch=s,[n,s]},useMemoCache:$c,useCacheRefresh:function(){return It().memoizedState=nT.bind(null,Ee)}},og={readContext:Et,use:Go,useCallback:Xm,useContext:Et,useEffect:Hm,useImperativeHandle:Pm,useInsertionEffect:Gm,useLayoutEffect:Km,useMemo:Zm,useReducer:Ko,useRef:Fm,useState:function(){return Ko(Vn)},useDebugValue:jc,useDeferredValue:function(n,s){var o=lt();return Wm(o,qe.memoizedState,n,s)},useTransition:function(){var n=Ko(Vn)[0],s=lt().memoizedState;return[typeof n=="boolean"?n:oi(n),s]},useSyncExternalStore:km,useId:tg,useHostTransitionStatus:Lc,useFormState:Bm,useActionState:Bm,useOptimistic:function(n,s){var o=lt();return Rm(o,qe,n,s)},useMemoCache:$c,useCacheRefresh:ng},sT={readContext:Et,use:Go,useCallback:Xm,useContext:Et,useEffect:Hm,useImperativeHandle:Pm,useInsertionEffect:Gm,useLayoutEffect:Km,useMemo:Zm,useReducer:Rc,useRef:Fm,useState:function(){return Rc(Vn)},useDebugValue:jc,useDeferredValue:function(n,s){var o=lt();return qe===null?Mc(o,n,s):Wm(o,qe.memoizedState,n,s)},useTransition:function(){var n=Rc(Vn)[0],s=lt().memoizedState;return[typeof n=="boolean"?n:oi(n),s]},useSyncExternalStore:km,useId:tg,useHostTransitionStatus:Lc,useFormState:qm,useActionState:qm,useOptimistic:function(n,s){var o=lt();return qe!==null?Rm(o,qe,n,s):(o.baseState=n,[n,o.queue.dispatch])},useMemoCache:$c,useCacheRefresh:ng},Js=null,ci=0;function Wo(n){var s=ci;return ci+=1,Js===null&&(Js=[]),bm(Js,n,s)}function fi(n,s){s=s.props.ref,n.ref=s!==void 0?s:null}function Qo(n,s){throw s.$$typeof===y?Error(r(525)):(n=Object.prototype.toString.call(s),Error(r(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n)))}function lg(n){var s=n._init;return s(n._payload)}function ug(n){function s(L,j){if(n){var q=L.deletions;q===null?(L.deletions=[j],L.flags|=16):q.push(j)}}function o(L,j){if(!n)return null;for(;j!==null;)s(L,j),j=j.sibling;return null}function u(L){for(var j=new Map;L!==null;)L.key!==null?j.set(L.key,L):j.set(L.index,L),L=L.sibling;return j}function d(L,j){return L=Ln(L,j),L.index=0,L.sibling=null,L}function m(L,j,q){return L.index=q,n?(q=L.alternate,q!==null?(q=q.index,q<j?(L.flags|=67108866,j):q):(L.flags|=67108866,j)):(L.flags|=1048576,j)}function w(L){return n&&L.alternate===null&&(L.flags|=67108866),L}function N(L,j,q,J){return j===null||j.tag!==6?(j=ic(q,L.mode,J),j.return=L,j):(j=d(j,q),j.return=L,j)}function D(L,j,q,J){var he=q.type;return he===k?W(L,j,q.props.children,J,q.key):j!==null&&(j.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===ie&&lg(he)===j.type)?(j=d(j,q.props),fi(j,q),j.return=L,j):(j=zo(q.type,q.key,q.props,null,L.mode,J),fi(j,q),j.return=L,j)}function H(L,j,q,J){return j===null||j.tag!==4||j.stateNode.containerInfo!==q.containerInfo||j.stateNode.implementation!==q.implementation?(j=oc(q,L.mode,J),j.return=L,j):(j=d(j,q.children||[]),j.return=L,j)}function W(L,j,q,J,he){return j===null||j.tag!==7?(j=Qa(q,L.mode,J,he),j.return=L,j):(j=d(j,q),j.return=L,j)}function ne(L,j,q){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=ic(""+j,L.mode,q),j.return=L,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case v:return q=zo(j.type,j.key,j.props,null,L.mode,q),fi(q,j),q.return=L,q;case S:return j=oc(j,L.mode,q),j.return=L,j;case ie:var J=j._init;return j=J(j._payload),ne(L,j,q)}if(fe(j)||te(j))return j=Qa(j,L.mode,q,null),j.return=L,j;if(typeof j.then=="function")return ne(L,Wo(j),q);if(j.$$typeof===z)return ne(L,Lo(L,j),q);Qo(L,j)}return null}function K(L,j,q,J){var he=j!==null?j.key:null;if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return he!==null?null:N(L,j,""+q,J);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case v:return q.key===he?D(L,j,q,J):null;case S:return q.key===he?H(L,j,q,J):null;case ie:return he=q._init,q=he(q._payload),K(L,j,q,J)}if(fe(q)||te(q))return he!==null?null:W(L,j,q,J,null);if(typeof q.then=="function")return K(L,j,Wo(q),J);if(q.$$typeof===z)return K(L,j,Lo(L,q),J);Qo(L,q)}return null}function Y(L,j,q,J,he){if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return L=L.get(q)||null,N(j,L,""+J,he);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case v:return L=L.get(J.key===null?q:J.key)||null,D(j,L,J,he);case S:return L=L.get(J.key===null?q:J.key)||null,H(j,L,J,he);case ie:var _e=J._init;return J=_e(J._payload),Y(L,j,q,J,he)}if(fe(J)||te(J))return L=L.get(q)||null,W(j,L,J,he,null);if(typeof J.then=="function")return Y(L,j,q,Wo(J),he);if(J.$$typeof===z)return Y(L,j,q,Lo(j,J),he);Qo(j,J)}return null}function Se(L,j,q,J){for(var he=null,_e=null,me=j,ye=j=0,gt=null;me!==null&&ye<q.length;ye++){me.index>ye?(gt=me,me=null):gt=me.sibling;var ze=K(L,me,q[ye],J);if(ze===null){me===null&&(me=gt);break}n&&me&&ze.alternate===null&&s(L,me),j=m(ze,j,ye),_e===null?he=ze:_e.sibling=ze,_e=ze,me=gt}if(ye===q.length)return o(L,me),je&&es(L,ye),he;if(me===null){for(;ye<q.length;ye++)me=ne(L,q[ye],J),me!==null&&(j=m(me,j,ye),_e===null?he=me:_e.sibling=me,_e=me);return je&&es(L,ye),he}for(me=u(me);ye<q.length;ye++)gt=Y(me,L,ye,q[ye],J),gt!==null&&(n&&gt.alternate!==null&&me.delete(gt.key===null?ye:gt.key),j=m(gt,j,ye),_e===null?he=gt:_e.sibling=gt,_e=gt);return n&&me.forEach(function(Oa){return s(L,Oa)}),je&&es(L,ye),he}function ge(L,j,q,J){if(q==null)throw Error(r(151));for(var he=null,_e=null,me=j,ye=j=0,gt=null,ze=q.next();me!==null&&!ze.done;ye++,ze=q.next()){me.index>ye?(gt=me,me=null):gt=me.sibling;var Oa=K(L,me,ze.value,J);if(Oa===null){me===null&&(me=gt);break}n&&me&&Oa.alternate===null&&s(L,me),j=m(Oa,j,ye),_e===null?he=Oa:_e.sibling=Oa,_e=Oa,me=gt}if(ze.done)return o(L,me),je&&es(L,ye),he;if(me===null){for(;!ze.done;ye++,ze=q.next())ze=ne(L,ze.value,J),ze!==null&&(j=m(ze,j,ye),_e===null?he=ze:_e.sibling=ze,_e=ze);return je&&es(L,ye),he}for(me=u(me);!ze.done;ye++,ze=q.next())ze=Y(me,L,ye,ze.value,J),ze!==null&&(n&&ze.alternate!==null&&me.delete(ze.key===null?ye:ze.key),j=m(ze,j,ye),_e===null?he=ze:_e.sibling=ze,_e=ze);return n&&me.forEach(function(rE){return s(L,rE)}),je&&es(L,ye),he}function Ve(L,j,q,J){if(typeof q=="object"&&q!==null&&q.type===k&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case v:e:{for(var he=q.key;j!==null;){if(j.key===he){if(he=q.type,he===k){if(j.tag===7){o(L,j.sibling),J=d(j,q.props.children),J.return=L,L=J;break e}}else if(j.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===ie&&lg(he)===j.type){o(L,j.sibling),J=d(j,q.props),fi(J,q),J.return=L,L=J;break e}o(L,j);break}else s(L,j);j=j.sibling}q.type===k?(J=Qa(q.props.children,L.mode,J,q.key),J.return=L,L=J):(J=zo(q.type,q.key,q.props,null,L.mode,J),fi(J,q),J.return=L,L=J)}return w(L);case S:e:{for(he=q.key;j!==null;){if(j.key===he)if(j.tag===4&&j.stateNode.containerInfo===q.containerInfo&&j.stateNode.implementation===q.implementation){o(L,j.sibling),J=d(j,q.children||[]),J.return=L,L=J;break e}else{o(L,j);break}else s(L,j);j=j.sibling}J=oc(q,L.mode,J),J.return=L,L=J}return w(L);case ie:return he=q._init,q=he(q._payload),Ve(L,j,q,J)}if(fe(q))return Se(L,j,q,J);if(te(q)){if(he=te(q),typeof he!="function")throw Error(r(150));return q=he.call(q),ge(L,j,q,J)}if(typeof q.then=="function")return Ve(L,j,Wo(q),J);if(q.$$typeof===z)return Ve(L,j,Lo(L,q),J);Qo(L,q)}return typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint"?(q=""+q,j!==null&&j.tag===6?(o(L,j.sibling),J=d(j,q),J.return=L,L=J):(o(L,j),J=ic(q,L.mode,J),J.return=L,L=J),w(L)):o(L,j)}return function(L,j,q,J){try{ci=0;var he=Ve(L,j,q,J);return Js=null,he}catch(me){if(me===ti||me===Uo)throw me;var _e=Xt(29,me,null,L.mode);return _e.lanes=J,_e.return=L,_e}finally{}}}var er=ug(!0),cg=ug(!1),un=B(null),kn=null;function pa(n){var s=n.alternate;se(ct,ct.current&1),se(un,n),kn===null&&(s===null||Xs.current!==null||s.memoizedState!==null)&&(kn=n)}function fg(n){if(n.tag===22){if(se(ct,ct.current),se(un,n),kn===null){var s=n.alternate;s!==null&&s.memoizedState!==null&&(kn=n)}}else ma()}function ma(){se(ct,ct.current),se(un,un.current)}function Hn(n){ae(un),kn===n&&(kn=null),ae(ct)}var ct=B(0);function Jo(n){for(var s=n;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||$f(o)))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}function Uc(n,s,o,u){s=n.memoizedState,o=o(u,s),o=o==null?s:g({},s,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var qc={enqueueSetState:function(n,s,o){n=n._reactInternals;var u=Jt(),d=fa(u);d.payload=s,o!=null&&(d.callback=o),s=ha(n,d,u),s!==null&&(en(s,n,u),ai(s,n,u))},enqueueReplaceState:function(n,s,o){n=n._reactInternals;var u=Jt(),d=fa(u);d.tag=1,d.payload=s,o!=null&&(d.callback=o),s=ha(n,d,u),s!==null&&(en(s,n,u),ai(s,n,u))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var o=Jt(),u=fa(o);u.tag=2,s!=null&&(u.callback=s),s=ha(n,u,o),s!==null&&(en(s,n,o),ai(s,n,o))}};function hg(n,s,o,u,d,m,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,w):s.prototype&&s.prototype.isPureReactComponent?!Yr(o,u)||!Yr(d,m):!0}function dg(n,s,o,u){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,u),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,u),s.state!==n&&qc.enqueueReplaceState(s,s.state,null)}function os(n,s){var o=s;if("ref"in s){o={};for(var u in s)u!=="ref"&&(o[u]=s[u])}if(n=n.defaultProps){o===s&&(o=g({},o));for(var d in n)o[d]===void 0&&(o[d]=n[d])}return o}var el=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function pg(n){el(n)}function mg(n){console.error(n)}function gg(n){el(n)}function tl(n,s){try{var o=n.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(u){setTimeout(function(){throw u})}}function yg(n,s,o){try{var u=n.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function Fc(n,s,o){return o=fa(o),o.tag=3,o.payload={element:null},o.callback=function(){tl(n,s)},o}function bg(n){return n=fa(n),n.tag=3,n}function vg(n,s,o,u){var d=o.type.getDerivedStateFromError;if(typeof d=="function"){var m=u.value;n.payload=function(){return d(m)},n.callback=function(){yg(s,o,u)}}var w=o.stateNode;w!==null&&typeof w.componentDidCatch=="function"&&(n.callback=function(){yg(s,o,u),typeof d!="function"&&(Sa===null?Sa=new Set([this]):Sa.add(this));var N=u.stack;this.componentDidCatch(u.value,{componentStack:N!==null?N:""})})}function rT(n,s,o,u,d){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(s=o.alternate,s!==null&&Qr(s,o,d,!0),o=un.current,o!==null){switch(o.tag){case 13:return kn===null?df():o.alternate===null&&at===0&&(at=3),o.flags&=-257,o.flags|=65536,o.lanes=d,u===yc?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([u]):s.add(u),mf(n,u,d)),!1;case 22:return o.flags|=65536,u===yc?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([u]):o.add(u)),mf(n,u,d)),!1}throw Error(r(435,o.tag))}return mf(n,u,d),df(),!1}if(je)return s=un.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=d,u!==cc&&(n=Error(r(422),{cause:u}),Wr(sn(n,o)))):(u!==cc&&(s=Error(r(423),{cause:u}),Wr(sn(s,o))),n=n.current.alternate,n.flags|=65536,d&=-d,n.lanes|=d,u=sn(u,o),d=Fc(n.stateNode,u,d),wc(n,d),at!==4&&(at=2)),!1;var m=Error(r(520),{cause:u});if(m=sn(m,o),bi===null?bi=[m]:bi.push(m),at!==4&&(at=2),s===null)return!0;u=sn(u,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,n=d&-d,o.lanes|=n,n=Fc(o.stateNode,u,n),wc(o,n),!1;case 1:if(s=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Sa===null||!Sa.has(m))))return o.flags|=65536,d&=-d,o.lanes|=d,d=bg(d),vg(d,n,o,u),wc(o,d),!1}o=o.return}while(o!==null);return!1}var wg=Error(r(461)),pt=!1;function vt(n,s,o,u){s.child=n===null?cg(s,null,o,u):er(s,n.child,o,u)}function Sg(n,s,o,u,d){o=o.render;var m=s.ref;if("ref"in u){var w={};for(var N in u)N!=="ref"&&(w[N]=u[N])}else w=u;return ss(s),u=Ec(n,s,o,w,m,d),N=kc(),n!==null&&!pt?(_c(n,s,d),Gn(n,s,d)):(je&&N&&lc(s),s.flags|=1,vt(n,s,u,d),s.child)}function Ng(n,s,o,u,d){if(n===null){var m=o.type;return typeof m=="function"&&!rc(m)&&m.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=m,xg(n,s,m,u,d)):(n=zo(o.type,null,u,s,s.mode,d),n.ref=s.ref,n.return=s,s.child=n)}if(m=n.child,!Zc(n,d)){var w=m.memoizedProps;if(o=o.compare,o=o!==null?o:Yr,o(w,u)&&n.ref===s.ref)return Gn(n,s,d)}return s.flags|=1,n=Ln(m,u),n.ref=s.ref,n.return=s,s.child=n}function xg(n,s,o,u,d){if(n!==null){var m=n.memoizedProps;if(Yr(m,u)&&n.ref===s.ref)if(pt=!1,s.pendingProps=u=m,Zc(n,d))(n.flags&131072)!==0&&(pt=!0);else return s.lanes=n.lanes,Gn(n,s,d)}return Vc(n,s,o,u,d)}function Tg(n,s,o){var u=s.pendingProps,d=u.children,m=n!==null?n.memoizedState:null;if(u.mode==="hidden"){if((s.flags&128)!==0){if(u=m!==null?m.baseLanes|o:o,n!==null){for(d=s.child=n.child,m=0;d!==null;)m=m|d.lanes|d.childLanes,d=d.sibling;s.childLanes=m&~u}else s.childLanes=0,s.child=null;return Eg(n,s,u,o)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},n!==null&&Bo(s,m!==null?m.cachePool:null),m!==null?xm(s,m):Nc(),fg(s);else return s.lanes=s.childLanes=536870912,Eg(n,s,m!==null?m.baseLanes|o:o,o)}else m!==null?(Bo(s,m.cachePool),xm(s,m),ma(),s.memoizedState=null):(n!==null&&Bo(s,null),Nc(),ma());return vt(n,s,d,o),s.child}function Eg(n,s,o,u){var d=gc();return d=d===null?null:{parent:ut._currentValue,pool:d},s.memoizedState={baseLanes:o,cachePool:d},n!==null&&Bo(s,null),Nc(),fg(s),n!==null&&Qr(n,s,u,!0),null}function nl(n,s){var o=s.ref;if(o===null)n!==null&&n.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(r(284));(n===null||n.ref!==o)&&(s.flags|=4194816)}}function Vc(n,s,o,u,d){return ss(s),o=Ec(n,s,o,u,void 0,d),u=kc(),n!==null&&!pt?(_c(n,s,d),Gn(n,s,d)):(je&&u&&lc(s),s.flags|=1,vt(n,s,o,d),s.child)}function kg(n,s,o,u,d,m){return ss(s),s.updateQueue=null,o=Em(s,u,o,d),Tm(n),u=kc(),n!==null&&!pt?(_c(n,s,m),Gn(n,s,m)):(je&&u&&lc(s),s.flags|=1,vt(n,s,o,m),s.child)}function _g(n,s,o,u,d){if(ss(s),s.stateNode===null){var m=Hs,w=o.contextType;typeof w=="object"&&w!==null&&(m=Et(w)),m=new o(u,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=qc,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=u,m.state=s.memoizedState,m.refs={},bc(s),w=o.contextType,m.context=typeof w=="object"&&w!==null?Et(w):Hs,m.state=s.memoizedState,w=o.getDerivedStateFromProps,typeof w=="function"&&(Uc(s,o,w,u),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(w=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),w!==m.state&&qc.enqueueReplaceState(m,m.state,null),ri(s,u,m,d),si(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),u=!0}else if(n===null){m=s.stateNode;var N=s.memoizedProps,D=os(o,N);m.props=D;var H=m.context,W=o.contextType;w=Hs,typeof W=="object"&&W!==null&&(w=Et(W));var ne=o.getDerivedStateFromProps;W=typeof ne=="function"||typeof m.getSnapshotBeforeUpdate=="function",N=s.pendingProps!==N,W||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(N||H!==w)&&dg(s,m,u,w),ca=!1;var K=s.memoizedState;m.state=K,ri(s,u,m,d),si(),H=s.memoizedState,N||K!==H||ca?(typeof ne=="function"&&(Uc(s,o,ne,u),H=s.memoizedState),(D=ca||hg(s,o,D,u,K,H,w))?(W||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=u,s.memoizedState=H),m.props=u,m.state=H,m.context=w,u=D):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),u=!1)}else{m=s.stateNode,vc(n,s),w=s.memoizedProps,W=os(o,w),m.props=W,ne=s.pendingProps,K=m.context,H=o.contextType,D=Hs,typeof H=="object"&&H!==null&&(D=Et(H)),N=o.getDerivedStateFromProps,(H=typeof N=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w!==ne||K!==D)&&dg(s,m,u,D),ca=!1,K=s.memoizedState,m.state=K,ri(s,u,m,d),si();var Y=s.memoizedState;w!==ne||K!==Y||ca||n!==null&&n.dependencies!==null&&Io(n.dependencies)?(typeof N=="function"&&(Uc(s,o,N,u),Y=s.memoizedState),(W=ca||hg(s,o,W,u,K,Y,D)||n!==null&&n.dependencies!==null&&Io(n.dependencies))?(H||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,Y,D),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,Y,D)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||w===n.memoizedProps&&K===n.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||w===n.memoizedProps&&K===n.memoizedState||(s.flags|=1024),s.memoizedProps=u,s.memoizedState=Y),m.props=u,m.state=Y,m.context=D,u=W):(typeof m.componentDidUpdate!="function"||w===n.memoizedProps&&K===n.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||w===n.memoizedProps&&K===n.memoizedState||(s.flags|=1024),u=!1)}return m=u,nl(n,s),u=(s.flags&128)!==0,m||u?(m=s.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,n!==null&&u?(s.child=er(s,n.child,null,d),s.child=er(s,null,o,d)):vt(n,s,o,d),s.memoizedState=m.state,n=s.child):n=Gn(n,s,d),n}function Ag(n,s,o,u){return Zr(),s.flags|=256,vt(n,s,o,u),s.child}var Hc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Gc(n){return{baseLanes:n,cachePool:mm()}}function Kc(n,s,o){return n=n!==null?n.childLanes&~o:0,s&&(n|=cn),n}function Og(n,s,o){var u=s.pendingProps,d=!1,m=(s.flags&128)!==0,w;if((w=m)||(w=n!==null&&n.memoizedState===null?!1:(ct.current&2)!==0),w&&(d=!0,s.flags&=-129),w=(s.flags&32)!==0,s.flags&=-33,n===null){if(je){if(d?pa(s):ma(),je){var N=nt,D;if(D=N){e:{for(D=N,N=En;D.nodeType!==8;){if(!N){N=null;break e}if(D=yn(D.nextSibling),D===null){N=null;break e}}N=D}N!==null?(s.memoizedState={dehydrated:N,treeContext:Ja!==null?{id:Bn,overflow:Un}:null,retryLane:536870912,hydrationErrors:null},D=Xt(18,null,null,0),D.stateNode=N,D.return=s,s.child=D,Rt=s,nt=null,D=!0):D=!1}D||ns(s)}if(N=s.memoizedState,N!==null&&(N=N.dehydrated,N!==null))return $f(N)?s.lanes=32:s.lanes=536870912,null;Hn(s)}return N=u.children,u=u.fallback,d?(ma(),d=s.mode,N=al({mode:"hidden",children:N},d),u=Qa(u,d,o,null),N.return=s,u.return=s,N.sibling=u,s.child=N,d=s.child,d.memoizedState=Gc(o),d.childLanes=Kc(n,w,o),s.memoizedState=Hc,u):(pa(s),Yc(s,N))}if(D=n.memoizedState,D!==null&&(N=D.dehydrated,N!==null)){if(m)s.flags&256?(pa(s),s.flags&=-257,s=Pc(n,s,o)):s.memoizedState!==null?(ma(),s.child=n.child,s.flags|=128,s=null):(ma(),d=u.fallback,N=s.mode,u=al({mode:"visible",children:u.children},N),d=Qa(d,N,o,null),d.flags|=2,u.return=s,d.return=s,u.sibling=d,s.child=u,er(s,n.child,null,o),u=s.child,u.memoizedState=Gc(o),u.childLanes=Kc(n,w,o),s.memoizedState=Hc,s=d);else if(pa(s),$f(N)){if(w=N.nextSibling&&N.nextSibling.dataset,w)var H=w.dgst;w=H,u=Error(r(419)),u.stack="",u.digest=w,Wr({value:u,source:null,stack:null}),s=Pc(n,s,o)}else if(pt||Qr(n,s,o,!1),w=(o&n.childLanes)!==0,pt||w){if(w=Ze,w!==null&&(u=o&-o,u=(u&42)!==0?1:$u(u),u=(u&(w.suspendedLanes|o))!==0?0:u,u!==0&&u!==D.retryLane))throw D.retryLane=u,Vs(n,u),en(w,n,u),wg;N.data==="$?"||df(),s=Pc(n,s,o)}else N.data==="$?"?(s.flags|=192,s.child=n.child,s=null):(n=D.treeContext,nt=yn(N.nextSibling),Rt=s,je=!0,ts=null,En=!1,n!==null&&(on[ln++]=Bn,on[ln++]=Un,on[ln++]=Ja,Bn=n.id,Un=n.overflow,Ja=s),s=Yc(s,u.children),s.flags|=4096);return s}return d?(ma(),d=u.fallback,N=s.mode,D=n.child,H=D.sibling,u=Ln(D,{mode:"hidden",children:u.children}),u.subtreeFlags=D.subtreeFlags&65011712,H!==null?d=Ln(H,d):(d=Qa(d,N,o,null),d.flags|=2),d.return=s,u.return=s,u.sibling=d,s.child=u,u=d,d=s.child,N=n.child.memoizedState,N===null?N=Gc(o):(D=N.cachePool,D!==null?(H=ut._currentValue,D=D.parent!==H?{parent:H,pool:H}:D):D=mm(),N={baseLanes:N.baseLanes|o,cachePool:D}),d.memoizedState=N,d.childLanes=Kc(n,w,o),s.memoizedState=Hc,u):(pa(s),o=n.child,n=o.sibling,o=Ln(o,{mode:"visible",children:u.children}),o.return=s,o.sibling=null,n!==null&&(w=s.deletions,w===null?(s.deletions=[n],s.flags|=16):w.push(n)),s.child=o,s.memoizedState=null,o)}function Yc(n,s){return s=al({mode:"visible",children:s},n.mode),s.return=n,n.child=s}function al(n,s){return n=Xt(22,n,null,s),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function Pc(n,s,o){return er(s,n.child,null,o),n=Yc(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function $g(n,s,o){n.lanes|=s;var u=n.alternate;u!==null&&(u.lanes|=s),hc(n.return,s,o)}function Xc(n,s,o,u,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(m.isBackwards=s,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=d)}function Dg(n,s,o){var u=s.pendingProps,d=u.revealOrder,m=u.tail;if(vt(n,s,u.children,o),u=ct.current,(u&2)!==0)u=u&1|2,s.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&$g(n,o,s);else if(n.tag===19)$g(n,o,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}switch(se(ct,u),d){case"forwards":for(o=s.child,d=null;o!==null;)n=o.alternate,n!==null&&Jo(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=s.child,s.child=null):(d=o.sibling,o.sibling=null),Xc(s,!1,d,o,m);break;case"backwards":for(o=null,d=s.child,s.child=null;d!==null;){if(n=d.alternate,n!==null&&Jo(n)===null){s.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}Xc(s,!0,o,null,m);break;case"together":Xc(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Gn(n,s,o){if(n!==null&&(s.dependencies=n.dependencies),wa|=s.lanes,(o&s.childLanes)===0)if(n!==null){if(Qr(n,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(n!==null&&s.child!==n.child)throw Error(r(153));if(s.child!==null){for(n=s.child,o=Ln(n,n.pendingProps),s.child=o,o.return=s;n.sibling!==null;)n=n.sibling,o=o.sibling=Ln(n,n.pendingProps),o.return=s;o.sibling=null}return s.child}function Zc(n,s){return(n.lanes&s)!==0?!0:(n=n.dependencies,!!(n!==null&&Io(n)))}function iT(n,s,o){switch(s.tag){case 3:Xe(s,s.stateNode.containerInfo),ua(s,ut,n.memoizedState.cache),Zr();break;case 27:case 5:zr(s);break;case 4:Xe(s,s.stateNode.containerInfo);break;case 10:ua(s,s.type,s.memoizedProps.value);break;case 13:var u=s.memoizedState;if(u!==null)return u.dehydrated!==null?(pa(s),s.flags|=128,null):(o&s.child.childLanes)!==0?Og(n,s,o):(pa(s),n=Gn(n,s,o),n!==null?n.sibling:null);pa(s);break;case 19:var d=(n.flags&128)!==0;if(u=(o&s.childLanes)!==0,u||(Qr(n,s,o,!1),u=(o&s.childLanes)!==0),d){if(u)return Dg(n,s,o);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),se(ct,ct.current),u)break;return null;case 22:case 23:return s.lanes=0,Tg(n,s,o);case 24:ua(s,ut,n.memoizedState.cache)}return Gn(n,s,o)}function Rg(n,s,o){if(n!==null)if(n.memoizedProps!==s.pendingProps)pt=!0;else{if(!Zc(n,o)&&(s.flags&128)===0)return pt=!1,iT(n,s,o);pt=(n.flags&131072)!==0}else pt=!1,je&&(s.flags&1048576)!==0&&lm(s,Mo,s.index);switch(s.lanes=0,s.tag){case 16:e:{n=s.pendingProps;var u=s.elementType,d=u._init;if(u=d(u._payload),s.type=u,typeof u=="function")rc(u)?(n=os(u,n),s.tag=1,s=_g(null,s,u,n,o)):(s.tag=0,s=Vc(null,s,u,n,o));else{if(u!=null){if(d=u.$$typeof,d===I){s.tag=11,s=Sg(null,s,u,n,o);break e}else if(d===re){s.tag=14,s=Ng(null,s,u,n,o);break e}}throw s=pe(u)||u,Error(r(306,s,""))}}return s;case 0:return Vc(n,s,s.type,s.pendingProps,o);case 1:return u=s.type,d=os(u,s.pendingProps),_g(n,s,u,d,o);case 3:e:{if(Xe(s,s.stateNode.containerInfo),n===null)throw Error(r(387));u=s.pendingProps;var m=s.memoizedState;d=m.element,vc(n,s),ri(s,u,null,o);var w=s.memoizedState;if(u=w.cache,ua(s,ut,u),u!==m.cache&&dc(s,[ut],o,!0),si(),u=w.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:w.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=Ag(n,s,u,o);break e}else if(u!==d){d=sn(Error(r(424)),s),Wr(d),s=Ag(n,s,u,o);break e}else{switch(n=s.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(nt=yn(n.firstChild),Rt=s,je=!0,ts=null,En=!0,o=cg(s,null,u,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(Zr(),u===d){s=Gn(n,s,o);break e}vt(n,s,u,o)}s=s.child}return s;case 26:return nl(n,s),n===null?(o=My(s.type,null,s.pendingProps,null))?s.memoizedState=o:je||(o=s.type,n=s.pendingProps,u=yl(we.current).createElement(o),u[Tt]=s,u[jt]=n,St(u,o,n),dt(u),s.stateNode=u):s.memoizedState=My(s.type,n.memoizedProps,s.pendingProps,n.memoizedState),null;case 27:return zr(s),n===null&&je&&(u=s.stateNode=Cy(s.type,s.pendingProps,we.current),Rt=s,En=!0,d=nt,Ta(s.type)?(Df=d,nt=yn(u.firstChild)):nt=d),vt(n,s,s.pendingProps.children,o),nl(n,s),n===null&&(s.flags|=4194304),s.child;case 5:return n===null&&je&&((d=u=nt)&&(u=zT(u,s.type,s.pendingProps,En),u!==null?(s.stateNode=u,Rt=s,nt=yn(u.firstChild),En=!1,d=!0):d=!1),d||ns(s)),zr(s),d=s.type,m=s.pendingProps,w=n!==null?n.memoizedProps:null,u=m.children,_f(d,m)?u=null:w!==null&&_f(d,w)&&(s.flags|=32),s.memoizedState!==null&&(d=Ec(n,s,Qx,null,null,o),_i._currentValue=d),nl(n,s),vt(n,s,u,o),s.child;case 6:return n===null&&je&&((n=o=nt)&&(o=jT(o,s.pendingProps,En),o!==null?(s.stateNode=o,Rt=s,nt=null,n=!0):n=!1),n||ns(s)),null;case 13:return Og(n,s,o);case 4:return Xe(s,s.stateNode.containerInfo),u=s.pendingProps,n===null?s.child=er(s,null,u,o):vt(n,s,u,o),s.child;case 11:return Sg(n,s,s.type,s.pendingProps,o);case 7:return vt(n,s,s.pendingProps,o),s.child;case 8:return vt(n,s,s.pendingProps.children,o),s.child;case 12:return vt(n,s,s.pendingProps.children,o),s.child;case 10:return u=s.pendingProps,ua(s,s.type,u.value),vt(n,s,u.children,o),s.child;case 9:return d=s.type._context,u=s.pendingProps.children,ss(s),d=Et(d),u=u(d),s.flags|=1,vt(n,s,u,o),s.child;case 14:return Ng(n,s,s.type,s.pendingProps,o);case 15:return xg(n,s,s.type,s.pendingProps,o);case 19:return Dg(n,s,o);case 31:return u=s.pendingProps,o=s.mode,u={mode:u.mode,children:u.children},n===null?(o=al(u,o),o.ref=s.ref,s.child=o,o.return=s,s=o):(o=Ln(n.child,u),o.ref=s.ref,s.child=o,o.return=s,s=o),s;case 22:return Tg(n,s,o);case 24:return ss(s),u=Et(ut),n===null?(d=gc(),d===null&&(d=Ze,m=pc(),d.pooledCache=m,m.refCount++,m!==null&&(d.pooledCacheLanes|=o),d=m),s.memoizedState={parent:u,cache:d},bc(s),ua(s,ut,d)):((n.lanes&o)!==0&&(vc(n,s),ri(s,null,null,o),si()),d=n.memoizedState,m=s.memoizedState,d.parent!==u?(d={parent:u,cache:u},s.memoizedState=d,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=d),ua(s,ut,u)):(u=m.cache,ua(s,ut,u),u!==d.cache&&dc(s,[ut],o,!0))),vt(n,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(r(156,s.tag))}function Kn(n){n.flags|=4}function Cg(n,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!qy(s)){if(s=un.current,s!==null&&((De&4194048)===De?kn!==null:(De&62914560)!==De&&(De&536870912)===0||s!==kn))throw ni=yc,gm;n.flags|=8192}}function sl(n,s){s!==null&&(n.flags|=4),n.flags&16384&&(s=n.tag!==22?fp():536870912,n.lanes|=s,sr|=s)}function hi(n,s){if(!je)switch(n.tailMode){case"hidden":s=n.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function tt(n){var s=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(s)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&65011712,u|=d.flags&65011712,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=o,s}function oT(n,s,o){var u=s.pendingProps;switch(uc(s),s.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(s),null;case 1:return tt(s),null;case 3:return o=s.stateNode,u=null,n!==null&&(u=n.memoizedState.cache),s.memoizedState.cache!==u&&(s.flags|=2048),Fn(ut),zt(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(Xr(s)?Kn(s):n===null||n.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,fm())),tt(s),null;case 26:return o=s.memoizedState,n===null?(Kn(s),o!==null?(tt(s),Cg(s,o)):(tt(s),s.flags&=-16777217)):o?o!==n.memoizedState?(Kn(s),tt(s),Cg(s,o)):(tt(s),s.flags&=-16777217):(n.memoizedProps!==u&&Kn(s),tt(s),s.flags&=-16777217),null;case 27:As(s),o=we.current;var d=s.type;if(n!==null&&s.stateNode!=null)n.memoizedProps!==u&&Kn(s);else{if(!u){if(s.stateNode===null)throw Error(r(166));return tt(s),null}n=ce.current,Xr(s)?um(s):(n=Cy(d,u,o),s.stateNode=n,Kn(s))}return tt(s),null;case 5:if(As(s),o=s.type,n!==null&&s.stateNode!=null)n.memoizedProps!==u&&Kn(s);else{if(!u){if(s.stateNode===null)throw Error(r(166));return tt(s),null}if(n=ce.current,Xr(s))um(s);else{switch(d=yl(we.current),n){case 1:n=d.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:n=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":n=d.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":n=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":n=d.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof u.is=="string"?d.createElement("select",{is:u.is}):d.createElement("select"),u.multiple?n.multiple=!0:u.size&&(n.size=u.size);break;default:n=typeof u.is=="string"?d.createElement(o,{is:u.is}):d.createElement(o)}}n[Tt]=s,n[jt]=u;e:for(d=s.child;d!==null;){if(d.tag===5||d.tag===6)n.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===s)break e;for(;d.sibling===null;){if(d.return===null||d.return===s)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}s.stateNode=n;e:switch(St(n,o,u),o){case"button":case"input":case"select":case"textarea":n=!!u.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Kn(s)}}return tt(s),s.flags&=-16777217,null;case 6:if(n&&s.stateNode!=null)n.memoizedProps!==u&&Kn(s);else{if(typeof u!="string"&&s.stateNode===null)throw Error(r(166));if(n=we.current,Xr(s)){if(n=s.stateNode,o=s.memoizedProps,u=null,d=Rt,d!==null)switch(d.tag){case 27:case 5:u=d.memoizedProps}n[Tt]=s,n=!!(n.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||ky(n.nodeValue,o)),n||ns(s)}else n=yl(n).createTextNode(u),n[Tt]=s,s.stateNode=n}return tt(s),null;case 13:if(u=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(d=Xr(s),u!==null&&u.dehydrated!==null){if(n===null){if(!d)throw Error(r(318));if(d=s.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(r(317));d[Tt]=s}else Zr(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;tt(s),d=!1}else d=fm(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=d),d=!0;if(!d)return s.flags&256?(Hn(s),s):(Hn(s),null)}if(Hn(s),(s.flags&128)!==0)return s.lanes=o,s;if(o=u!==null,n=n!==null&&n.memoizedState!==null,o){u=s.child,d=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(d=u.alternate.memoizedState.cachePool.pool);var m=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==d&&(u.flags|=2048)}return o!==n&&o&&(s.child.flags|=8192),sl(s,s.updateQueue),tt(s),null;case 4:return zt(),n===null&&Nf(s.stateNode.containerInfo),tt(s),null;case 10:return Fn(s.type),tt(s),null;case 19:if(ae(ct),d=s.memoizedState,d===null)return tt(s),null;if(u=(s.flags&128)!==0,m=d.rendering,m===null)if(u)hi(d,!1);else{if(at!==0||n!==null&&(n.flags&128)!==0)for(n=s.child;n!==null;){if(m=Jo(n),m!==null){for(s.flags|=128,hi(d,!1),n=m.updateQueue,s.updateQueue=n,sl(s,n),s.subtreeFlags=0,n=o,o=s.child;o!==null;)om(o,n),o=o.sibling;return se(ct,ct.current&1|2),s.child}n=n.sibling}d.tail!==null&&Tn()>ol&&(s.flags|=128,u=!0,hi(d,!1),s.lanes=4194304)}else{if(!u)if(n=Jo(m),n!==null){if(s.flags|=128,u=!0,n=n.updateQueue,s.updateQueue=n,sl(s,n),hi(d,!0),d.tail===null&&d.tailMode==="hidden"&&!m.alternate&&!je)return tt(s),null}else 2*Tn()-d.renderingStartTime>ol&&o!==536870912&&(s.flags|=128,u=!0,hi(d,!1),s.lanes=4194304);d.isBackwards?(m.sibling=s.child,s.child=m):(n=d.last,n!==null?n.sibling=m:s.child=m,d.last=m)}return d.tail!==null?(s=d.tail,d.rendering=s,d.tail=s.sibling,d.renderingStartTime=Tn(),s.sibling=null,n=ct.current,se(ct,u?n&1|2:n&1),s):(tt(s),null);case 22:case 23:return Hn(s),xc(),u=s.memoizedState!==null,n!==null?n.memoizedState!==null!==u&&(s.flags|=8192):u&&(s.flags|=8192),u?(o&536870912)!==0&&(s.flags&128)===0&&(tt(s),s.subtreeFlags&6&&(s.flags|=8192)):tt(s),o=s.updateQueue,o!==null&&sl(s,o.retryQueue),o=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==o&&(s.flags|=2048),n!==null&&ae(rs),null;case 24:return o=null,n!==null&&(o=n.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),Fn(ut),tt(s),null;case 25:return null;case 30:return null}throw Error(r(156,s.tag))}function lT(n,s){switch(uc(s),s.tag){case 1:return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return Fn(ut),zt(),n=s.flags,(n&65536)!==0&&(n&128)===0?(s.flags=n&-65537|128,s):null;case 26:case 27:case 5:return As(s),null;case 13:if(Hn(s),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(r(340));Zr()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return ae(ct),null;case 4:return zt(),null;case 10:return Fn(s.type),null;case 22:case 23:return Hn(s),xc(),n!==null&&ae(rs),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 24:return Fn(ut),null;case 25:return null;default:return null}}function zg(n,s){switch(uc(s),s.tag){case 3:Fn(ut),zt();break;case 26:case 27:case 5:As(s);break;case 4:zt();break;case 13:Hn(s);break;case 19:ae(ct);break;case 10:Fn(s.type);break;case 22:case 23:Hn(s),xc(),n!==null&&ae(rs);break;case 24:Fn(ut)}}function di(n,s){try{var o=s.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&n)===n){u=void 0;var m=o.create,w=o.inst;u=m(),w.destroy=u}o=o.next}while(o!==d)}}catch(N){Ge(s,s.return,N)}}function ga(n,s,o){try{var u=s.updateQueue,d=u!==null?u.lastEffect:null;if(d!==null){var m=d.next;u=m;do{if((u.tag&n)===n){var w=u.inst,N=w.destroy;if(N!==void 0){w.destroy=void 0,d=s;var D=o,H=N;try{H()}catch(W){Ge(d,D,W)}}}u=u.next}while(u!==m)}}catch(W){Ge(s,s.return,W)}}function jg(n){var s=n.updateQueue;if(s!==null){var o=n.stateNode;try{Nm(s,o)}catch(u){Ge(n,n.return,u)}}}function Mg(n,s,o){o.props=os(n.type,n.memoizedProps),o.state=n.memoizedState;try{o.componentWillUnmount()}catch(u){Ge(n,s,u)}}function pi(n,s){try{var o=n.ref;if(o!==null){switch(n.tag){case 26:case 27:case 5:var u=n.stateNode;break;case 30:u=n.stateNode;break;default:u=n.stateNode}typeof o=="function"?n.refCleanup=o(u):o.current=u}}catch(d){Ge(n,s,d)}}function _n(n,s){var o=n.ref,u=n.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(d){Ge(n,s,d)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(d){Ge(n,s,d)}else o.current=null}function Ig(n){var s=n.type,o=n.memoizedProps,u=n.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(d){Ge(n,n.return,d)}}function Wc(n,s,o){try{var u=n.stateNode;OT(u,n.type,o,s),u[jt]=s}catch(d){Ge(n,n.return,d)}}function Lg(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Ta(n.type)||n.tag===4}function Qc(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Lg(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Ta(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Jc(n,s,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(n,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(n),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=gl));else if(u!==4&&(u===27&&Ta(n.type)&&(o=n.stateNode,s=null),n=n.child,n!==null))for(Jc(n,s,o),n=n.sibling;n!==null;)Jc(n,s,o),n=n.sibling}function rl(n,s,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,s?o.insertBefore(n,s):o.appendChild(n);else if(u!==4&&(u===27&&Ta(n.type)&&(o=n.stateNode),n=n.child,n!==null))for(rl(n,s,o),n=n.sibling;n!==null;)rl(n,s,o),n=n.sibling}function Bg(n){var s=n.stateNode,o=n.memoizedProps;try{for(var u=n.type,d=s.attributes;d.length;)s.removeAttributeNode(d[0]);St(s,u,o),s[Tt]=n,s[jt]=o}catch(m){Ge(n,n.return,m)}}var Yn=!1,rt=!1,ef=!1,Ug=typeof WeakSet=="function"?WeakSet:Set,mt=null;function uT(n,s){if(n=n.containerInfo,Ef=xl,n=Wp(n),Qu(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var w=0,N=-1,D=-1,H=0,W=0,ne=n,K=null;t:for(;;){for(var Y;ne!==o||d!==0&&ne.nodeType!==3||(N=w+d),ne!==m||u!==0&&ne.nodeType!==3||(D=w+u),ne.nodeType===3&&(w+=ne.nodeValue.length),(Y=ne.firstChild)!==null;)K=ne,ne=Y;for(;;){if(ne===n)break t;if(K===o&&++H===d&&(N=w),K===m&&++W===u&&(D=w),(Y=ne.nextSibling)!==null)break;ne=K,K=ne.parentNode}ne=Y}o=N===-1||D===-1?null:{start:N,end:D}}else o=null}o=o||{start:0,end:0}}else o=null;for(kf={focusedElem:n,selectionRange:o},xl=!1,mt=s;mt!==null;)if(s=mt,n=s.child,(s.subtreeFlags&1024)!==0&&n!==null)n.return=s,mt=n;else for(;mt!==null;){switch(s=mt,m=s.alternate,n=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&m!==null){n=void 0,o=s,d=m.memoizedProps,m=m.memoizedState,u=o.stateNode;try{var Se=os(o.type,d,o.elementType===o.type);n=u.getSnapshotBeforeUpdate(Se,m),u.__reactInternalSnapshotBeforeUpdate=n}catch(ge){Ge(o,o.return,ge)}}break;case 3:if((n&1024)!==0){if(n=s.stateNode.containerInfo,o=n.nodeType,o===9)Of(n);else if(o===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Of(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(r(163))}if(n=s.sibling,n!==null){n.return=s.return,mt=n;break}mt=s.return}}function qg(n,s,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:ya(n,o),u&4&&di(5,o);break;case 1:if(ya(n,o),u&4)if(n=o.stateNode,s===null)try{n.componentDidMount()}catch(w){Ge(o,o.return,w)}else{var d=os(o.type,s.memoizedProps);s=s.memoizedState;try{n.componentDidUpdate(d,s,n.__reactInternalSnapshotBeforeUpdate)}catch(w){Ge(o,o.return,w)}}u&64&&jg(o),u&512&&pi(o,o.return);break;case 3:if(ya(n,o),u&64&&(n=o.updateQueue,n!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{Nm(n,s)}catch(w){Ge(o,o.return,w)}}break;case 27:s===null&&u&4&&Bg(o);case 26:case 5:ya(n,o),s===null&&u&4&&Ig(o),u&512&&pi(o,o.return);break;case 12:ya(n,o);break;case 13:ya(n,o),u&4&&Hg(n,o),u&64&&(n=o.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(o=bT.bind(null,o),MT(n,o))));break;case 22:if(u=o.memoizedState!==null||Yn,!u){s=s!==null&&s.memoizedState!==null||rt,d=Yn;var m=rt;Yn=u,(rt=s)&&!m?ba(n,o,(o.subtreeFlags&8772)!==0):ya(n,o),Yn=d,rt=m}break;case 30:break;default:ya(n,o)}}function Fg(n){var s=n.alternate;s!==null&&(n.alternate=null,Fg(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&Cu(s)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var We=null,Lt=!1;function Pn(n,s,o){for(o=o.child;o!==null;)Vg(n,s,o),o=o.sibling}function Vg(n,s,o){if(Kt&&typeof Kt.onCommitFiberUnmount=="function")try{Kt.onCommitFiberUnmount(jr,o)}catch{}switch(o.tag){case 26:rt||_n(o,s),Pn(n,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:rt||_n(o,s);var u=We,d=Lt;Ta(o.type)&&(We=o.stateNode,Lt=!1),Pn(n,s,o),xi(o.stateNode),We=u,Lt=d;break;case 5:rt||_n(o,s);case 6:if(u=We,d=Lt,We=null,Pn(n,s,o),We=u,Lt=d,We!==null)if(Lt)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(o.stateNode)}catch(m){Ge(o,s,m)}else try{We.removeChild(o.stateNode)}catch(m){Ge(o,s,m)}break;case 18:We!==null&&(Lt?(n=We,Dy(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,o.stateNode),Di(n)):Dy(We,o.stateNode));break;case 4:u=We,d=Lt,We=o.stateNode.containerInfo,Lt=!0,Pn(n,s,o),We=u,Lt=d;break;case 0:case 11:case 14:case 15:rt||ga(2,o,s),rt||ga(4,o,s),Pn(n,s,o);break;case 1:rt||(_n(o,s),u=o.stateNode,typeof u.componentWillUnmount=="function"&&Mg(o,s,u)),Pn(n,s,o);break;case 21:Pn(n,s,o);break;case 22:rt=(u=rt)||o.memoizedState!==null,Pn(n,s,o),rt=u;break;default:Pn(n,s,o)}}function Hg(n,s){if(s.memoizedState===null&&(n=s.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Di(n)}catch(o){Ge(s,s.return,o)}}function cT(n){switch(n.tag){case 13:case 19:var s=n.stateNode;return s===null&&(s=n.stateNode=new Ug),s;case 22:return n=n.stateNode,s=n._retryCache,s===null&&(s=n._retryCache=new Ug),s;default:throw Error(r(435,n.tag))}}function tf(n,s){var o=cT(n);s.forEach(function(u){var d=vT.bind(null,n,u);o.has(u)||(o.add(u),u.then(d,d))})}function Zt(n,s){var o=s.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u],m=n,w=s,N=w;e:for(;N!==null;){switch(N.tag){case 27:if(Ta(N.type)){We=N.stateNode,Lt=!1;break e}break;case 5:We=N.stateNode,Lt=!1;break e;case 3:case 4:We=N.stateNode.containerInfo,Lt=!0;break e}N=N.return}if(We===null)throw Error(r(160));Vg(m,w,d),We=null,Lt=!1,m=d.alternate,m!==null&&(m.return=null),d.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)Gg(s,n),s=s.sibling}var gn=null;function Gg(n,s){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Zt(s,n),Wt(n),u&4&&(ga(3,n,n.return),di(3,n),ga(5,n,n.return));break;case 1:Zt(s,n),Wt(n),u&512&&(rt||o===null||_n(o,o.return)),u&64&&Yn&&(n=n.updateQueue,n!==null&&(u=n.callbacks,u!==null&&(o=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var d=gn;if(Zt(s,n),Wt(n),u&512&&(rt||o===null||_n(o,o.return)),u&4){var m=o!==null?o.memoizedState:null;if(u=n.memoizedState,o===null)if(u===null)if(n.stateNode===null){e:{u=n.type,o=n.memoizedProps,d=d.ownerDocument||d;t:switch(u){case"title":m=d.getElementsByTagName("title")[0],(!m||m[Lr]||m[Tt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=d.createElement(u),d.head.insertBefore(m,d.querySelector("head > title"))),St(m,u,o),m[Tt]=n,dt(m),u=m;break e;case"link":var w=By("link","href",d).get(u+(o.href||""));if(w){for(var N=0;N<w.length;N++)if(m=w[N],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){w.splice(N,1);break t}}m=d.createElement(u),St(m,u,o),d.head.appendChild(m);break;case"meta":if(w=By("meta","content",d).get(u+(o.content||""))){for(N=0;N<w.length;N++)if(m=w[N],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){w.splice(N,1);break t}}m=d.createElement(u),St(m,u,o),d.head.appendChild(m);break;default:throw Error(r(468,u))}m[Tt]=n,dt(m),u=m}n.stateNode=u}else Uy(d,n.type,n.stateNode);else n.stateNode=Ly(d,u,n.memoizedProps);else m!==u?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,u===null?Uy(d,n.type,n.stateNode):Ly(d,u,n.memoizedProps)):u===null&&n.stateNode!==null&&Wc(n,n.memoizedProps,o.memoizedProps)}break;case 27:Zt(s,n),Wt(n),u&512&&(rt||o===null||_n(o,o.return)),o!==null&&u&4&&Wc(n,n.memoizedProps,o.memoizedProps);break;case 5:if(Zt(s,n),Wt(n),u&512&&(rt||o===null||_n(o,o.return)),n.flags&32){d=n.stateNode;try{Ms(d,"")}catch(Y){Ge(n,n.return,Y)}}u&4&&n.stateNode!=null&&(d=n.memoizedProps,Wc(n,d,o!==null?o.memoizedProps:d)),u&1024&&(ef=!0);break;case 6:if(Zt(s,n),Wt(n),u&4){if(n.stateNode===null)throw Error(r(162));u=n.memoizedProps,o=n.stateNode;try{o.nodeValue=u}catch(Y){Ge(n,n.return,Y)}}break;case 3:if(wl=null,d=gn,gn=bl(s.containerInfo),Zt(s,n),gn=d,Wt(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Di(s.containerInfo)}catch(Y){Ge(n,n.return,Y)}ef&&(ef=!1,Kg(n));break;case 4:u=gn,gn=bl(n.stateNode.containerInfo),Zt(s,n),Wt(n),gn=u;break;case 12:Zt(s,n),Wt(n);break;case 13:Zt(s,n),Wt(n),n.child.flags&8192&&n.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(lf=Tn()),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,tf(n,u)));break;case 22:d=n.memoizedState!==null;var D=o!==null&&o.memoizedState!==null,H=Yn,W=rt;if(Yn=H||d,rt=W||D,Zt(s,n),rt=W,Yn=H,Wt(n),u&8192)e:for(s=n.stateNode,s._visibility=d?s._visibility&-2:s._visibility|1,d&&(o===null||D||Yn||rt||ls(n)),o=null,s=n;;){if(s.tag===5||s.tag===26){if(o===null){D=o=s;try{if(m=D.stateNode,d)w=m.style,typeof w.setProperty=="function"?w.setProperty("display","none","important"):w.display="none";else{N=D.stateNode;var ne=D.memoizedProps.style,K=ne!=null&&ne.hasOwnProperty("display")?ne.display:null;N.style.display=K==null||typeof K=="boolean"?"":(""+K).trim()}}catch(Y){Ge(D,D.return,Y)}}}else if(s.tag===6){if(o===null){D=s;try{D.stateNode.nodeValue=d?"":D.memoizedProps}catch(Y){Ge(D,D.return,Y)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===n)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break e;for(;s.sibling===null;){if(s.return===null||s.return===n)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}u&4&&(u=n.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,tf(n,o))));break;case 19:Zt(s,n),Wt(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,tf(n,u)));break;case 30:break;case 21:break;default:Zt(s,n),Wt(n)}}function Wt(n){var s=n.flags;if(s&2){try{for(var o,u=n.return;u!==null;){if(Lg(u)){o=u;break}u=u.return}if(o==null)throw Error(r(160));switch(o.tag){case 27:var d=o.stateNode,m=Qc(n);rl(n,m,d);break;case 5:var w=o.stateNode;o.flags&32&&(Ms(w,""),o.flags&=-33);var N=Qc(n);rl(n,N,w);break;case 3:case 4:var D=o.stateNode.containerInfo,H=Qc(n);Jc(n,H,D);break;default:throw Error(r(161))}}catch(W){Ge(n,n.return,W)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function Kg(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var s=n;Kg(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),n=n.sibling}}function ya(n,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)qg(n,s.alternate,s),s=s.sibling}function ls(n){for(n=n.child;n!==null;){var s=n;switch(s.tag){case 0:case 11:case 14:case 15:ga(4,s,s.return),ls(s);break;case 1:_n(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&Mg(s,s.return,o),ls(s);break;case 27:xi(s.stateNode);case 26:case 5:_n(s,s.return),ls(s);break;case 22:s.memoizedState===null&&ls(s);break;case 30:ls(s);break;default:ls(s)}n=n.sibling}}function ba(n,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var u=s.alternate,d=n,m=s,w=m.flags;switch(m.tag){case 0:case 11:case 15:ba(d,m,o),di(4,m);break;case 1:if(ba(d,m,o),u=m,d=u.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(H){Ge(u,u.return,H)}if(u=m,d=u.updateQueue,d!==null){var N=u.stateNode;try{var D=d.shared.hiddenCallbacks;if(D!==null)for(d.shared.hiddenCallbacks=null,d=0;d<D.length;d++)Sm(D[d],N)}catch(H){Ge(u,u.return,H)}}o&&w&64&&jg(m),pi(m,m.return);break;case 27:Bg(m);case 26:case 5:ba(d,m,o),o&&u===null&&w&4&&Ig(m),pi(m,m.return);break;case 12:ba(d,m,o);break;case 13:ba(d,m,o),o&&w&4&&Hg(d,m);break;case 22:m.memoizedState===null&&ba(d,m,o),pi(m,m.return);break;case 30:break;default:ba(d,m,o)}s=s.sibling}}function nf(n,s){var o=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),n=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(n=s.memoizedState.cachePool.pool),n!==o&&(n!=null&&n.refCount++,o!=null&&Jr(o))}function af(n,s){n=null,s.alternate!==null&&(n=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==n&&(s.refCount++,n!=null&&Jr(n))}function An(n,s,o,u){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)Yg(n,s,o,u),s=s.sibling}function Yg(n,s,o,u){var d=s.flags;switch(s.tag){case 0:case 11:case 15:An(n,s,o,u),d&2048&&di(9,s);break;case 1:An(n,s,o,u);break;case 3:An(n,s,o,u),d&2048&&(n=null,s.alternate!==null&&(n=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==n&&(s.refCount++,n!=null&&Jr(n)));break;case 12:if(d&2048){An(n,s,o,u),n=s.stateNode;try{var m=s.memoizedProps,w=m.id,N=m.onPostCommit;typeof N=="function"&&N(w,s.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(D){Ge(s,s.return,D)}}else An(n,s,o,u);break;case 13:An(n,s,o,u);break;case 23:break;case 22:m=s.stateNode,w=s.alternate,s.memoizedState!==null?m._visibility&2?An(n,s,o,u):mi(n,s):m._visibility&2?An(n,s,o,u):(m._visibility|=2,tr(n,s,o,u,(s.subtreeFlags&10256)!==0)),d&2048&&nf(w,s);break;case 24:An(n,s,o,u),d&2048&&af(s.alternate,s);break;default:An(n,s,o,u)}}function tr(n,s,o,u,d){for(d=d&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var m=n,w=s,N=o,D=u,H=w.flags;switch(w.tag){case 0:case 11:case 15:tr(m,w,N,D,d),di(8,w);break;case 23:break;case 22:var W=w.stateNode;w.memoizedState!==null?W._visibility&2?tr(m,w,N,D,d):mi(m,w):(W._visibility|=2,tr(m,w,N,D,d)),d&&H&2048&&nf(w.alternate,w);break;case 24:tr(m,w,N,D,d),d&&H&2048&&af(w.alternate,w);break;default:tr(m,w,N,D,d)}s=s.sibling}}function mi(n,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=n,u=s,d=u.flags;switch(u.tag){case 22:mi(o,u),d&2048&&nf(u.alternate,u);break;case 24:mi(o,u),d&2048&&af(u.alternate,u);break;default:mi(o,u)}s=s.sibling}}var gi=8192;function nr(n){if(n.subtreeFlags&gi)for(n=n.child;n!==null;)Pg(n),n=n.sibling}function Pg(n){switch(n.tag){case 26:nr(n),n.flags&gi&&n.memoizedState!==null&&XT(gn,n.memoizedState,n.memoizedProps);break;case 5:nr(n);break;case 3:case 4:var s=gn;gn=bl(n.stateNode.containerInfo),nr(n),gn=s;break;case 22:n.memoizedState===null&&(s=n.alternate,s!==null&&s.memoizedState!==null?(s=gi,gi=16777216,nr(n),gi=s):nr(n));break;default:nr(n)}}function Xg(n){var s=n.alternate;if(s!==null&&(n=s.child,n!==null)){s.child=null;do s=n.sibling,n.sibling=null,n=s;while(n!==null)}}function yi(n){var s=n.deletions;if((n.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];mt=u,Wg(u,n)}Xg(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Zg(n),n=n.sibling}function Zg(n){switch(n.tag){case 0:case 11:case 15:yi(n),n.flags&2048&&ga(9,n,n.return);break;case 3:yi(n);break;case 12:yi(n);break;case 22:var s=n.stateNode;n.memoizedState!==null&&s._visibility&2&&(n.return===null||n.return.tag!==13)?(s._visibility&=-3,il(n)):yi(n);break;default:yi(n)}}function il(n){var s=n.deletions;if((n.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];mt=u,Wg(u,n)}Xg(n)}for(n=n.child;n!==null;){switch(s=n,s.tag){case 0:case 11:case 15:ga(8,s,s.return),il(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,il(s));break;default:il(s)}n=n.sibling}}function Wg(n,s){for(;mt!==null;){var o=mt;switch(o.tag){case 0:case 11:case 15:ga(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Jr(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,mt=u;else e:for(o=n;mt!==null;){u=mt;var d=u.sibling,m=u.return;if(Fg(u),u===o){mt=null;break e}if(d!==null){d.return=m,mt=d;break e}mt=m}}}var fT={getCacheForType:function(n){var s=Et(ut),o=s.data.get(n);return o===void 0&&(o=n(),s.data.set(n,o)),o}},hT=typeof WeakMap=="function"?WeakMap:Map,Ie=0,Ze=null,Ae=null,De=0,Le=0,Qt=null,va=!1,ar=!1,sf=!1,Xn=0,at=0,wa=0,us=0,rf=0,cn=0,sr=0,bi=null,Bt=null,of=!1,lf=0,ol=1/0,ll=null,Sa=null,wt=0,Na=null,rr=null,ir=0,uf=0,cf=null,Qg=null,vi=0,ff=null;function Jt(){if((Ie&2)!==0&&De!==0)return De&-De;if(G.T!==null){var n=Ys;return n!==0?n:bf()}return pp()}function Jg(){cn===0&&(cn=(De&536870912)===0||je?cp():536870912);var n=un.current;return n!==null&&(n.flags|=32),cn}function en(n,s,o){(n===Ze&&(Le===2||Le===9)||n.cancelPendingCommit!==null)&&(or(n,0),xa(n,De,cn,!1)),Ir(n,o),((Ie&2)===0||n!==Ze)&&(n===Ze&&((Ie&2)===0&&(us|=o),at===4&&xa(n,De,cn,!1)),On(n))}function ey(n,s,o){if((Ie&6)!==0)throw Error(r(327));var u=!o&&(s&124)===0&&(s&n.expiredLanes)===0||Mr(n,s),d=u?mT(n,s):pf(n,s,!0),m=u;do{if(d===0){ar&&!u&&xa(n,s,0,!1);break}else{if(o=n.current.alternate,m&&!dT(o)){d=pf(n,s,!1),m=!1;continue}if(d===2){if(m=s,n.errorRecoveryDisabledLanes&m)var w=0;else w=n.pendingLanes&-536870913,w=w!==0?w:w&536870912?536870912:0;if(w!==0){s=w;e:{var N=n;d=bi;var D=N.current.memoizedState.isDehydrated;if(D&&(or(N,w).flags|=256),w=pf(N,w,!1),w!==2){if(sf&&!D){N.errorRecoveryDisabledLanes|=m,us|=m,d=4;break e}m=Bt,Bt=d,m!==null&&(Bt===null?Bt=m:Bt.push.apply(Bt,m))}d=w}if(m=!1,d!==2)continue}}if(d===1){or(n,0),xa(n,s,0,!0);break}e:{switch(u=n,m=d,m){case 0:case 1:throw Error(r(345));case 4:if((s&4194048)!==s)break;case 6:xa(u,s,cn,!va);break e;case 2:Bt=null;break;case 3:case 5:break;default:throw Error(r(329))}if((s&62914560)===s&&(d=lf+300-Tn(),10<d)){if(xa(u,s,cn,!va),vo(u,0,!0)!==0)break e;u.timeoutHandle=Oy(ty.bind(null,u,o,Bt,ll,of,s,cn,us,sr,va,m,2,-0,0),d);break e}ty(u,o,Bt,ll,of,s,cn,us,sr,va,m,0,-0,0)}}break}while(!0);On(n)}function ty(n,s,o,u,d,m,w,N,D,H,W,ne,K,Y){if(n.timeoutHandle=-1,ne=s.subtreeFlags,(ne&8192||(ne&16785408)===16785408)&&(ki={stylesheets:null,count:0,unsuspend:PT},Pg(s),ne=ZT(),ne!==null)){n.cancelPendingCommit=ne(ly.bind(null,n,s,m,o,u,d,w,N,D,W,1,K,Y)),xa(n,m,w,!H);return}ly(n,s,m,o,u,d,w,N,D)}function dT(n){for(var s=n;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var d=o[u],m=d.getSnapshot;d=d.value;try{if(!Pt(m(),d))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function xa(n,s,o,u){s&=~rf,s&=~us,n.suspendedLanes|=s,n.pingedLanes&=~s,u&&(n.warmLanes|=s),u=n.expirationTimes;for(var d=s;0<d;){var m=31-Yt(d),w=1<<m;u[m]=-1,d&=~w}o!==0&&hp(n,o,s)}function ul(){return(Ie&6)===0?(wi(0),!1):!0}function hf(){if(Ae!==null){if(Le===0)var n=Ae.return;else n=Ae,qn=as=null,Ac(n),Js=null,ci=0,n=Ae;for(;n!==null;)zg(n.alternate,n),n=n.return;Ae=null}}function or(n,s){var o=n.timeoutHandle;o!==-1&&(n.timeoutHandle=-1,DT(o)),o=n.cancelPendingCommit,o!==null&&(n.cancelPendingCommit=null,o()),hf(),Ze=n,Ae=o=Ln(n.current,null),De=s,Le=0,Qt=null,va=!1,ar=Mr(n,s),sf=!1,sr=cn=rf=us=wa=at=0,Bt=bi=null,of=!1,(s&8)!==0&&(s|=s&32);var u=n.entangledLanes;if(u!==0)for(n=n.entanglements,u&=s;0<u;){var d=31-Yt(u),m=1<<d;s|=n[d],u&=~m}return Xn=s,Do(),o}function ny(n,s){Ee=null,G.H=Zo,s===ti||s===Uo?(s=vm(),Le=3):s===gm?(s=vm(),Le=4):Le=s===wg?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,Qt=s,Ae===null&&(at=1,tl(n,sn(s,n.current)))}function ay(){var n=G.H;return G.H=Zo,n===null?Zo:n}function sy(){var n=G.A;return G.A=fT,n}function df(){at=4,va||(De&4194048)!==De&&un.current!==null||(ar=!0),(wa&134217727)===0&&(us&134217727)===0||Ze===null||xa(Ze,De,cn,!1)}function pf(n,s,o){var u=Ie;Ie|=2;var d=ay(),m=sy();(Ze!==n||De!==s)&&(ll=null,or(n,s)),s=!1;var w=at;e:do try{if(Le!==0&&Ae!==null){var N=Ae,D=Qt;switch(Le){case 8:hf(),w=6;break e;case 3:case 2:case 9:case 6:un.current===null&&(s=!0);var H=Le;if(Le=0,Qt=null,lr(n,N,D,H),o&&ar){w=0;break e}break;default:H=Le,Le=0,Qt=null,lr(n,N,D,H)}}pT(),w=at;break}catch(W){ny(n,W)}while(!0);return s&&n.shellSuspendCounter++,qn=as=null,Ie=u,G.H=d,G.A=m,Ae===null&&(Ze=null,De=0,Do()),w}function pT(){for(;Ae!==null;)ry(Ae)}function mT(n,s){var o=Ie;Ie|=2;var u=ay(),d=sy();Ze!==n||De!==s?(ll=null,ol=Tn()+500,or(n,s)):ar=Mr(n,s);e:do try{if(Le!==0&&Ae!==null){s=Ae;var m=Qt;t:switch(Le){case 1:Le=0,Qt=null,lr(n,s,m,1);break;case 2:case 9:if(ym(m)){Le=0,Qt=null,iy(s);break}s=function(){Le!==2&&Le!==9||Ze!==n||(Le=7),On(n)},m.then(s,s);break e;case 3:Le=7;break e;case 4:Le=5;break e;case 7:ym(m)?(Le=0,Qt=null,iy(s)):(Le=0,Qt=null,lr(n,s,m,7));break;case 5:var w=null;switch(Ae.tag){case 26:w=Ae.memoizedState;case 5:case 27:var N=Ae;if(!w||qy(w)){Le=0,Qt=null;var D=N.sibling;if(D!==null)Ae=D;else{var H=N.return;H!==null?(Ae=H,cl(H)):Ae=null}break t}}Le=0,Qt=null,lr(n,s,m,5);break;case 6:Le=0,Qt=null,lr(n,s,m,6);break;case 8:hf(),at=6;break e;default:throw Error(r(462))}}gT();break}catch(W){ny(n,W)}while(!0);return qn=as=null,G.H=u,G.A=d,Ie=o,Ae!==null?0:(Ze=null,De=0,Do(),at)}function gT(){for(;Ae!==null&&!LN();)ry(Ae)}function ry(n){var s=Rg(n.alternate,n,Xn);n.memoizedProps=n.pendingProps,s===null?cl(n):Ae=s}function iy(n){var s=n,o=s.alternate;switch(s.tag){case 15:case 0:s=kg(o,s,s.pendingProps,s.type,void 0,De);break;case 11:s=kg(o,s,s.pendingProps,s.type.render,s.ref,De);break;case 5:Ac(s);default:zg(o,s),s=Ae=om(s,Xn),s=Rg(o,s,Xn)}n.memoizedProps=n.pendingProps,s===null?cl(n):Ae=s}function lr(n,s,o,u){qn=as=null,Ac(s),Js=null,ci=0;var d=s.return;try{if(rT(n,d,s,o,De)){at=1,tl(n,sn(o,n.current)),Ae=null;return}}catch(m){if(d!==null)throw Ae=d,m;at=1,tl(n,sn(o,n.current)),Ae=null;return}s.flags&32768?(je||u===1?n=!0:ar||(De&536870912)!==0?n=!1:(va=n=!0,(u===2||u===9||u===3||u===6)&&(u=un.current,u!==null&&u.tag===13&&(u.flags|=16384))),oy(s,n)):cl(s)}function cl(n){var s=n;do{if((s.flags&32768)!==0){oy(s,va);return}n=s.return;var o=oT(s.alternate,s,Xn);if(o!==null){Ae=o;return}if(s=s.sibling,s!==null){Ae=s;return}Ae=s=n}while(s!==null);at===0&&(at=5)}function oy(n,s){do{var o=lT(n.alternate,n);if(o!==null){o.flags&=32767,Ae=o;return}if(o=n.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(n=n.sibling,n!==null)){Ae=n;return}Ae=n=o}while(n!==null);at=6,Ae=null}function ly(n,s,o,u,d,m,w,N,D){n.cancelPendingCommit=null;do fl();while(wt!==0);if((Ie&6)!==0)throw Error(r(327));if(s!==null){if(s===n.current)throw Error(r(177));if(m=s.lanes|s.childLanes,m|=ac,PN(n,o,m,w,N,D),n===Ze&&(Ae=Ze=null,De=0),rr=s,Na=n,ir=o,uf=m,cf=d,Qg=u,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,wT(go,function(){return dy(),null})):(n.callbackNode=null,n.callbackPriority=0),u=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||u){u=G.T,G.T=null,d=P.p,P.p=2,w=Ie,Ie|=4;try{uT(n,s,o)}finally{Ie=w,P.p=d,G.T=u}}wt=1,uy(),cy(),fy()}}function uy(){if(wt===1){wt=0;var n=Na,s=rr,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=G.T,G.T=null;var u=P.p;P.p=2;var d=Ie;Ie|=4;try{Gg(s,n);var m=kf,w=Wp(n.containerInfo),N=m.focusedElem,D=m.selectionRange;if(w!==N&&N&&N.ownerDocument&&Zp(N.ownerDocument.documentElement,N)){if(D!==null&&Qu(N)){var H=D.start,W=D.end;if(W===void 0&&(W=H),"selectionStart"in N)N.selectionStart=H,N.selectionEnd=Math.min(W,N.value.length);else{var ne=N.ownerDocument||document,K=ne&&ne.defaultView||window;if(K.getSelection){var Y=K.getSelection(),Se=N.textContent.length,ge=Math.min(D.start,Se),Ve=D.end===void 0?ge:Math.min(D.end,Se);!Y.extend&&ge>Ve&&(w=Ve,Ve=ge,ge=w);var L=Xp(N,ge),j=Xp(N,Ve);if(L&&j&&(Y.rangeCount!==1||Y.anchorNode!==L.node||Y.anchorOffset!==L.offset||Y.focusNode!==j.node||Y.focusOffset!==j.offset)){var q=ne.createRange();q.setStart(L.node,L.offset),Y.removeAllRanges(),ge>Ve?(Y.addRange(q),Y.extend(j.node,j.offset)):(q.setEnd(j.node,j.offset),Y.addRange(q))}}}}for(ne=[],Y=N;Y=Y.parentNode;)Y.nodeType===1&&ne.push({element:Y,left:Y.scrollLeft,top:Y.scrollTop});for(typeof N.focus=="function"&&N.focus(),N=0;N<ne.length;N++){var J=ne[N];J.element.scrollLeft=J.left,J.element.scrollTop=J.top}}xl=!!Ef,kf=Ef=null}finally{Ie=d,P.p=u,G.T=o}}n.current=s,wt=2}}function cy(){if(wt===2){wt=0;var n=Na,s=rr,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=G.T,G.T=null;var u=P.p;P.p=2;var d=Ie;Ie|=4;try{qg(n,s.alternate,s)}finally{Ie=d,P.p=u,G.T=o}}wt=3}}function fy(){if(wt===4||wt===3){wt=0,BN();var n=Na,s=rr,o=ir,u=Qg;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?wt=5:(wt=0,rr=Na=null,hy(n,n.pendingLanes));var d=n.pendingLanes;if(d===0&&(Sa=null),Du(o),s=s.stateNode,Kt&&typeof Kt.onCommitFiberRoot=="function")try{Kt.onCommitFiberRoot(jr,s,void 0,(s.current.flags&128)===128)}catch{}if(u!==null){s=G.T,d=P.p,P.p=2,G.T=null;try{for(var m=n.onRecoverableError,w=0;w<u.length;w++){var N=u[w];m(N.value,{componentStack:N.stack})}}finally{G.T=s,P.p=d}}(ir&3)!==0&&fl(),On(n),d=n.pendingLanes,(o&4194090)!==0&&(d&42)!==0?n===ff?vi++:(vi=0,ff=n):vi=0,wi(0)}}function hy(n,s){(n.pooledCacheLanes&=s)===0&&(s=n.pooledCache,s!=null&&(n.pooledCache=null,Jr(s)))}function fl(n){return uy(),cy(),fy(),dy()}function dy(){if(wt!==5)return!1;var n=Na,s=uf;uf=0;var o=Du(ir),u=G.T,d=P.p;try{P.p=32>o?32:o,G.T=null,o=cf,cf=null;var m=Na,w=ir;if(wt=0,rr=Na=null,ir=0,(Ie&6)!==0)throw Error(r(331));var N=Ie;if(Ie|=4,Zg(m.current),Yg(m,m.current,w,o),Ie=N,wi(0,!1),Kt&&typeof Kt.onPostCommitFiberRoot=="function")try{Kt.onPostCommitFiberRoot(jr,m)}catch{}return!0}finally{P.p=d,G.T=u,hy(n,s)}}function py(n,s,o){s=sn(o,s),s=Fc(n.stateNode,s,2),n=ha(n,s,2),n!==null&&(Ir(n,2),On(n))}function Ge(n,s,o){if(n.tag===3)py(n,n,o);else for(;s!==null;){if(s.tag===3){py(s,n,o);break}else if(s.tag===1){var u=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Sa===null||!Sa.has(u))){n=sn(o,n),o=bg(2),u=ha(s,o,2),u!==null&&(vg(o,u,s,n),Ir(u,2),On(u));break}}s=s.return}}function mf(n,s,o){var u=n.pingCache;if(u===null){u=n.pingCache=new hT;var d=new Set;u.set(s,d)}else d=u.get(s),d===void 0&&(d=new Set,u.set(s,d));d.has(o)||(sf=!0,d.add(o),n=yT.bind(null,n,s,o),s.then(n,n))}function yT(n,s,o){var u=n.pingCache;u!==null&&u.delete(s),n.pingedLanes|=n.suspendedLanes&o,n.warmLanes&=~o,Ze===n&&(De&o)===o&&(at===4||at===3&&(De&62914560)===De&&300>Tn()-lf?(Ie&2)===0&&or(n,0):rf|=o,sr===De&&(sr=0)),On(n)}function my(n,s){s===0&&(s=fp()),n=Vs(n,s),n!==null&&(Ir(n,s),On(n))}function bT(n){var s=n.memoizedState,o=0;s!==null&&(o=s.retryLane),my(n,o)}function vT(n,s){var o=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=n.stateNode;break;case 22:u=n.stateNode._retryCache;break;default:throw Error(r(314))}u!==null&&u.delete(s),my(n,o)}function wT(n,s){return _u(n,s)}var hl=null,ur=null,gf=!1,dl=!1,yf=!1,cs=0;function On(n){n!==ur&&n.next===null&&(ur===null?hl=ur=n:ur=ur.next=n),dl=!0,gf||(gf=!0,NT())}function wi(n,s){if(!yf&&dl){yf=!0;do for(var o=!1,u=hl;u!==null;){if(n!==0){var d=u.pendingLanes;if(d===0)var m=0;else{var w=u.suspendedLanes,N=u.pingedLanes;m=(1<<31-Yt(42|n)+1)-1,m&=d&~(w&~N),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,vy(u,m))}else m=De,m=vo(u,u===Ze?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||Mr(u,m)||(o=!0,vy(u,m));u=u.next}while(o);yf=!1}}function ST(){gy()}function gy(){dl=gf=!1;var n=0;cs!==0&&($T()&&(n=cs),cs=0);for(var s=Tn(),o=null,u=hl;u!==null;){var d=u.next,m=yy(u,s);m===0?(u.next=null,o===null?hl=d:o.next=d,d===null&&(ur=o)):(o=u,(n!==0||(m&3)!==0)&&(dl=!0)),u=d}wi(n)}function yy(n,s){for(var o=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes&-62914561;0<m;){var w=31-Yt(m),N=1<<w,D=d[w];D===-1?((N&o)===0||(N&u)!==0)&&(d[w]=YN(N,s)):D<=s&&(n.expiredLanes|=N),m&=~N}if(s=Ze,o=De,o=vo(n,n===s?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u=n.callbackNode,o===0||n===s&&(Le===2||Le===9)||n.cancelPendingCommit!==null)return u!==null&&u!==null&&Au(u),n.callbackNode=null,n.callbackPriority=0;if((o&3)===0||Mr(n,o)){if(s=o&-o,s===n.callbackPriority)return s;switch(u!==null&&Au(u),Du(o)){case 2:case 8:o=lp;break;case 32:o=go;break;case 268435456:o=up;break;default:o=go}return u=by.bind(null,n),o=_u(o,u),n.callbackPriority=s,n.callbackNode=o,s}return u!==null&&u!==null&&Au(u),n.callbackPriority=2,n.callbackNode=null,2}function by(n,s){if(wt!==0&&wt!==5)return n.callbackNode=null,n.callbackPriority=0,null;var o=n.callbackNode;if(fl()&&n.callbackNode!==o)return null;var u=De;return u=vo(n,n===Ze?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u===0?null:(ey(n,u,s),yy(n,Tn()),n.callbackNode!=null&&n.callbackNode===o?by.bind(null,n):null)}function vy(n,s){if(fl())return null;ey(n,s,!0)}function NT(){RT(function(){(Ie&6)!==0?_u(op,ST):gy()})}function bf(){return cs===0&&(cs=cp()),cs}function wy(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:To(""+n)}function Sy(n,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,n.id&&o.setAttribute("form",n.id),s.parentNode.insertBefore(o,s),n=new FormData(n),o.parentNode.removeChild(o),n}function xT(n,s,o,u,d){if(s==="submit"&&o&&o.stateNode===d){var m=wy((d[jt]||null).action),w=u.submitter;w&&(s=(s=w[jt]||null)?wy(s.formAction):w.getAttribute("formAction"),s!==null&&(m=s,w=null));var N=new Ao("action","action",null,u,d);n.push({event:N,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(cs!==0){var D=w?Sy(d,w):new FormData(d);Ic(o,{pending:!0,data:D,method:d.method,action:m},null,D)}}else typeof m=="function"&&(N.preventDefault(),D=w?Sy(d,w):new FormData(d),Ic(o,{pending:!0,data:D,method:d.method,action:m},m,D))},currentTarget:d}]})}}for(var vf=0;vf<nc.length;vf++){var wf=nc[vf],TT=wf.toLowerCase(),ET=wf[0].toUpperCase()+wf.slice(1);mn(TT,"on"+ET)}mn(em,"onAnimationEnd"),mn(tm,"onAnimationIteration"),mn(nm,"onAnimationStart"),mn("dblclick","onDoubleClick"),mn("focusin","onFocus"),mn("focusout","onBlur"),mn(Fx,"onTransitionRun"),mn(Vx,"onTransitionStart"),mn(Hx,"onTransitionCancel"),mn(am,"onTransitionEnd"),Cs("onMouseEnter",["mouseout","mouseover"]),Cs("onMouseLeave",["mouseout","mouseover"]),Cs("onPointerEnter",["pointerout","pointerover"]),Cs("onPointerLeave",["pointerout","pointerover"]),Pa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Si="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kT=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Si));function Ny(n,s){s=(s&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],d=u.event;u=u.listeners;e:{var m=void 0;if(s)for(var w=u.length-1;0<=w;w--){var N=u[w],D=N.instance,H=N.currentTarget;if(N=N.listener,D!==m&&d.isPropagationStopped())break e;m=N,d.currentTarget=H;try{m(d)}catch(W){el(W)}d.currentTarget=null,m=D}else for(w=0;w<u.length;w++){if(N=u[w],D=N.instance,H=N.currentTarget,N=N.listener,D!==m&&d.isPropagationStopped())break e;m=N,d.currentTarget=H;try{m(d)}catch(W){el(W)}d.currentTarget=null,m=D}}}}function Oe(n,s){var o=s[Ru];o===void 0&&(o=s[Ru]=new Set);var u=n+"__bubble";o.has(u)||(xy(s,n,2,!1),o.add(u))}function Sf(n,s,o){var u=0;s&&(u|=4),xy(o,n,u,s)}var pl="_reactListening"+Math.random().toString(36).slice(2);function Nf(n){if(!n[pl]){n[pl]=!0,gp.forEach(function(o){o!=="selectionchange"&&(kT.has(o)||Sf(o,!1,n),Sf(o,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[pl]||(s[pl]=!0,Sf("selectionchange",!1,s))}}function xy(n,s,o,u){switch(Yy(s)){case 2:var d=JT;break;case 8:d=eE;break;default:d=Mf}o=d.bind(null,s,o,n),d=void 0,!Vu||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(s,o,{capture:!0,passive:d}):n.addEventListener(s,o,!0):d!==void 0?n.addEventListener(s,o,{passive:d}):n.addEventListener(s,o,!1)}function xf(n,s,o,u,d){var m=u;if((s&1)===0&&(s&2)===0&&u!==null)e:for(;;){if(u===null)return;var w=u.tag;if(w===3||w===4){var N=u.stateNode.containerInfo;if(N===d)break;if(w===4)for(w=u.return;w!==null;){var D=w.tag;if((D===3||D===4)&&w.stateNode.containerInfo===d)return;w=w.return}for(;N!==null;){if(w=$s(N),w===null)return;if(D=w.tag,D===5||D===6||D===26||D===27){u=m=w;continue e}N=N.parentNode}}u=u.return}$p(function(){var H=m,W=qu(o),ne=[];e:{var K=sm.get(n);if(K!==void 0){var Y=Ao,Se=n;switch(n){case"keypress":if(ko(o)===0)break e;case"keydown":case"keyup":Y=wx;break;case"focusin":Se="focus",Y=Yu;break;case"focusout":Se="blur",Y=Yu;break;case"beforeblur":case"afterblur":Y=Yu;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=Cp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=lx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=xx;break;case em:case tm:case nm:Y=fx;break;case am:Y=Ex;break;case"scroll":case"scrollend":Y=ix;break;case"wheel":Y=_x;break;case"copy":case"cut":case"paste":Y=dx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=jp;break;case"toggle":case"beforetoggle":Y=Ox}var ge=(s&4)!==0,Ve=!ge&&(n==="scroll"||n==="scrollend"),L=ge?K!==null?K+"Capture":null:K;ge=[];for(var j=H,q;j!==null;){var J=j;if(q=J.stateNode,J=J.tag,J!==5&&J!==26&&J!==27||q===null||L===null||(J=Ur(j,L),J!=null&&ge.push(Ni(j,J,q))),Ve)break;j=j.return}0<ge.length&&(K=new Y(K,Se,null,o,W),ne.push({event:K,listeners:ge}))}}if((s&7)===0){e:{if(K=n==="mouseover"||n==="pointerover",Y=n==="mouseout"||n==="pointerout",K&&o!==Uu&&(Se=o.relatedTarget||o.fromElement)&&($s(Se)||Se[Os]))break e;if((Y||K)&&(K=W.window===W?W:(K=W.ownerDocument)?K.defaultView||K.parentWindow:window,Y?(Se=o.relatedTarget||o.toElement,Y=H,Se=Se?$s(Se):null,Se!==null&&(Ve=l(Se),ge=Se.tag,Se!==Ve||ge!==5&&ge!==27&&ge!==6)&&(Se=null)):(Y=null,Se=H),Y!==Se)){if(ge=Cp,J="onMouseLeave",L="onMouseEnter",j="mouse",(n==="pointerout"||n==="pointerover")&&(ge=jp,J="onPointerLeave",L="onPointerEnter",j="pointer"),Ve=Y==null?K:Br(Y),q=Se==null?K:Br(Se),K=new ge(J,j+"leave",Y,o,W),K.target=Ve,K.relatedTarget=q,J=null,$s(W)===H&&(ge=new ge(L,j+"enter",Se,o,W),ge.target=q,ge.relatedTarget=Ve,J=ge),Ve=J,Y&&Se)t:{for(ge=Y,L=Se,j=0,q=ge;q;q=cr(q))j++;for(q=0,J=L;J;J=cr(J))q++;for(;0<j-q;)ge=cr(ge),j--;for(;0<q-j;)L=cr(L),q--;for(;j--;){if(ge===L||L!==null&&ge===L.alternate)break t;ge=cr(ge),L=cr(L)}ge=null}else ge=null;Y!==null&&Ty(ne,K,Y,ge,!1),Se!==null&&Ve!==null&&Ty(ne,Ve,Se,ge,!0)}}e:{if(K=H?Br(H):window,Y=K.nodeName&&K.nodeName.toLowerCase(),Y==="select"||Y==="input"&&K.type==="file")var he=Vp;else if(qp(K))if(Hp)he=Bx;else{he=Ix;var _e=Mx}else Y=K.nodeName,!Y||Y.toLowerCase()!=="input"||K.type!=="checkbox"&&K.type!=="radio"?H&&Bu(H.elementType)&&(he=Vp):he=Lx;if(he&&(he=he(n,H))){Fp(ne,he,o,W);break e}_e&&_e(n,K,H),n==="focusout"&&H&&K.type==="number"&&H.memoizedProps.value!=null&&Lu(K,"number",K.value)}switch(_e=H?Br(H):window,n){case"focusin":(qp(_e)||_e.contentEditable==="true")&&(Us=_e,Ju=H,Pr=null);break;case"focusout":Pr=Ju=Us=null;break;case"mousedown":ec=!0;break;case"contextmenu":case"mouseup":case"dragend":ec=!1,Qp(ne,o,W);break;case"selectionchange":if(qx)break;case"keydown":case"keyup":Qp(ne,o,W)}var me;if(Xu)e:{switch(n){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else Bs?Bp(n,o)&&(ye="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(ye="onCompositionStart");ye&&(Mp&&o.locale!=="ko"&&(Bs||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&Bs&&(me=Dp()):(la=W,Hu="value"in la?la.value:la.textContent,Bs=!0)),_e=ml(H,ye),0<_e.length&&(ye=new zp(ye,n,null,o,W),ne.push({event:ye,listeners:_e}),me?ye.data=me:(me=Up(o),me!==null&&(ye.data=me)))),(me=Dx?Rx(n,o):Cx(n,o))&&(ye=ml(H,"onBeforeInput"),0<ye.length&&(_e=new zp("onBeforeInput","beforeinput",null,o,W),ne.push({event:_e,listeners:ye}),_e.data=me)),xT(ne,n,H,o,W)}Ny(ne,s)})}function Ni(n,s,o){return{instance:n,listener:s,currentTarget:o}}function ml(n,s){for(var o=s+"Capture",u=[];n!==null;){var d=n,m=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||m===null||(d=Ur(n,o),d!=null&&u.unshift(Ni(n,d,m)),d=Ur(n,s),d!=null&&u.push(Ni(n,d,m))),n.tag===3)return u;n=n.return}return[]}function cr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Ty(n,s,o,u,d){for(var m=s._reactName,w=[];o!==null&&o!==u;){var N=o,D=N.alternate,H=N.stateNode;if(N=N.tag,D!==null&&D===u)break;N!==5&&N!==26&&N!==27||H===null||(D=H,d?(H=Ur(o,m),H!=null&&w.unshift(Ni(o,H,D))):d||(H=Ur(o,m),H!=null&&w.push(Ni(o,H,D)))),o=o.return}w.length!==0&&n.push({event:s,listeners:w})}var _T=/\r\n?/g,AT=/\u0000|\uFFFD/g;function Ey(n){return(typeof n=="string"?n:""+n).replace(_T,`
`).replace(AT,"")}function ky(n,s){return s=Ey(s),Ey(n)===s}function gl(){}function Fe(n,s,o,u,d,m){switch(o){case"children":typeof u=="string"?s==="body"||s==="textarea"&&u===""||Ms(n,u):(typeof u=="number"||typeof u=="bigint")&&s!=="body"&&Ms(n,""+u);break;case"className":So(n,"class",u);break;case"tabIndex":So(n,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":So(n,o,u);break;case"style":Ap(n,u,m);break;case"data":if(s!=="object"){So(n,"data",u);break}case"src":case"href":if(u===""&&(s!=="a"||o!=="href")){n.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=To(""+u),n.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){n.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(s!=="input"&&Fe(n,s,"name",d.name,d,null),Fe(n,s,"formEncType",d.formEncType,d,null),Fe(n,s,"formMethod",d.formMethod,d,null),Fe(n,s,"formTarget",d.formTarget,d,null)):(Fe(n,s,"encType",d.encType,d,null),Fe(n,s,"method",d.method,d,null),Fe(n,s,"target",d.target,d,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=To(""+u),n.setAttribute(o,u);break;case"onClick":u!=null&&(n.onclick=gl);break;case"onScroll":u!=null&&Oe("scroll",n);break;case"onScrollEnd":u!=null&&Oe("scrollend",n);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(r(61));if(o=u.__html,o!=null){if(d.children!=null)throw Error(r(60));n.innerHTML=o}}break;case"multiple":n.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":n.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){n.removeAttribute("xlink:href");break}o=To(""+u),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""+u):n.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""):n.removeAttribute(o);break;case"capture":case"download":u===!0?n.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,u):n.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?n.setAttribute(o,u):n.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?n.removeAttribute(o):n.setAttribute(o,u);break;case"popover":Oe("beforetoggle",n),Oe("toggle",n),wo(n,"popover",u);break;case"xlinkActuate":Mn(n,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Mn(n,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Mn(n,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Mn(n,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Mn(n,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Mn(n,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Mn(n,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Mn(n,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Mn(n,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":wo(n,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=sx.get(o)||o,wo(n,o,u))}}function Tf(n,s,o,u,d,m){switch(o){case"style":Ap(n,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(r(61));if(o=u.__html,o!=null){if(d.children!=null)throw Error(r(60));n.innerHTML=o}}break;case"children":typeof u=="string"?Ms(n,u):(typeof u=="number"||typeof u=="bigint")&&Ms(n,""+u);break;case"onScroll":u!=null&&Oe("scroll",n);break;case"onScrollEnd":u!=null&&Oe("scrollend",n);break;case"onClick":u!=null&&(n.onclick=gl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!yp.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(d=o.endsWith("Capture"),s=o.slice(2,d?o.length-7:void 0),m=n[jt]||null,m=m!=null?m[o]:null,typeof m=="function"&&n.removeEventListener(s,m,d),typeof u=="function")){typeof m!="function"&&m!==null&&(o in n?n[o]=null:n.hasAttribute(o)&&n.removeAttribute(o)),n.addEventListener(s,u,d);break e}o in n?n[o]=u:u===!0?n.setAttribute(o,""):wo(n,o,u)}}}function St(n,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Oe("error",n),Oe("load",n);var u=!1,d=!1,m;for(m in o)if(o.hasOwnProperty(m)){var w=o[m];if(w!=null)switch(m){case"src":u=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,s));default:Fe(n,s,m,w,o,null)}}d&&Fe(n,s,"srcSet",o.srcSet,o,null),u&&Fe(n,s,"src",o.src,o,null);return;case"input":Oe("invalid",n);var N=m=w=d=null,D=null,H=null;for(u in o)if(o.hasOwnProperty(u)){var W=o[u];if(W!=null)switch(u){case"name":d=W;break;case"type":w=W;break;case"checked":D=W;break;case"defaultChecked":H=W;break;case"value":m=W;break;case"defaultValue":N=W;break;case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(r(137,s));break;default:Fe(n,s,u,W,o,null)}}Tp(n,m,N,D,H,w,d,!1),No(n);return;case"select":Oe("invalid",n),u=w=m=null;for(d in o)if(o.hasOwnProperty(d)&&(N=o[d],N!=null))switch(d){case"value":m=N;break;case"defaultValue":w=N;break;case"multiple":u=N;default:Fe(n,s,d,N,o,null)}s=m,o=w,n.multiple=!!u,s!=null?js(n,!!u,s,!1):o!=null&&js(n,!!u,o,!0);return;case"textarea":Oe("invalid",n),m=d=u=null;for(w in o)if(o.hasOwnProperty(w)&&(N=o[w],N!=null))switch(w){case"value":u=N;break;case"defaultValue":d=N;break;case"children":m=N;break;case"dangerouslySetInnerHTML":if(N!=null)throw Error(r(91));break;default:Fe(n,s,w,N,o,null)}kp(n,u,d,m),No(n);return;case"option":for(D in o)if(o.hasOwnProperty(D)&&(u=o[D],u!=null))switch(D){case"selected":n.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:Fe(n,s,D,u,o,null)}return;case"dialog":Oe("beforetoggle",n),Oe("toggle",n),Oe("cancel",n),Oe("close",n);break;case"iframe":case"object":Oe("load",n);break;case"video":case"audio":for(u=0;u<Si.length;u++)Oe(Si[u],n);break;case"image":Oe("error",n),Oe("load",n);break;case"details":Oe("toggle",n);break;case"embed":case"source":case"link":Oe("error",n),Oe("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(H in o)if(o.hasOwnProperty(H)&&(u=o[H],u!=null))switch(H){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,s));default:Fe(n,s,H,u,o,null)}return;default:if(Bu(s)){for(W in o)o.hasOwnProperty(W)&&(u=o[W],u!==void 0&&Tf(n,s,W,u,o,void 0));return}}for(N in o)o.hasOwnProperty(N)&&(u=o[N],u!=null&&Fe(n,s,N,u,o,null))}function OT(n,s,o,u){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,m=null,w=null,N=null,D=null,H=null,W=null;for(Y in o){var ne=o[Y];if(o.hasOwnProperty(Y)&&ne!=null)switch(Y){case"checked":break;case"value":break;case"defaultValue":D=ne;default:u.hasOwnProperty(Y)||Fe(n,s,Y,null,u,ne)}}for(var K in u){var Y=u[K];if(ne=o[K],u.hasOwnProperty(K)&&(Y!=null||ne!=null))switch(K){case"type":m=Y;break;case"name":d=Y;break;case"checked":H=Y;break;case"defaultChecked":W=Y;break;case"value":w=Y;break;case"defaultValue":N=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(r(137,s));break;default:Y!==ne&&Fe(n,s,K,Y,u,ne)}}Iu(n,w,N,D,H,W,m,d);return;case"select":Y=w=N=K=null;for(m in o)if(D=o[m],o.hasOwnProperty(m)&&D!=null)switch(m){case"value":break;case"multiple":Y=D;default:u.hasOwnProperty(m)||Fe(n,s,m,null,u,D)}for(d in u)if(m=u[d],D=o[d],u.hasOwnProperty(d)&&(m!=null||D!=null))switch(d){case"value":K=m;break;case"defaultValue":N=m;break;case"multiple":w=m;default:m!==D&&Fe(n,s,d,m,u,D)}s=N,o=w,u=Y,K!=null?js(n,!!o,K,!1):!!u!=!!o&&(s!=null?js(n,!!o,s,!0):js(n,!!o,o?[]:"",!1));return;case"textarea":Y=K=null;for(N in o)if(d=o[N],o.hasOwnProperty(N)&&d!=null&&!u.hasOwnProperty(N))switch(N){case"value":break;case"children":break;default:Fe(n,s,N,null,u,d)}for(w in u)if(d=u[w],m=o[w],u.hasOwnProperty(w)&&(d!=null||m!=null))switch(w){case"value":K=d;break;case"defaultValue":Y=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(r(91));break;default:d!==m&&Fe(n,s,w,d,u,m)}Ep(n,K,Y);return;case"option":for(var Se in o)if(K=o[Se],o.hasOwnProperty(Se)&&K!=null&&!u.hasOwnProperty(Se))switch(Se){case"selected":n.selected=!1;break;default:Fe(n,s,Se,null,u,K)}for(D in u)if(K=u[D],Y=o[D],u.hasOwnProperty(D)&&K!==Y&&(K!=null||Y!=null))switch(D){case"selected":n.selected=K&&typeof K!="function"&&typeof K!="symbol";break;default:Fe(n,s,D,K,u,Y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ge in o)K=o[ge],o.hasOwnProperty(ge)&&K!=null&&!u.hasOwnProperty(ge)&&Fe(n,s,ge,null,u,K);for(H in u)if(K=u[H],Y=o[H],u.hasOwnProperty(H)&&K!==Y&&(K!=null||Y!=null))switch(H){case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(r(137,s));break;default:Fe(n,s,H,K,u,Y)}return;default:if(Bu(s)){for(var Ve in o)K=o[Ve],o.hasOwnProperty(Ve)&&K!==void 0&&!u.hasOwnProperty(Ve)&&Tf(n,s,Ve,void 0,u,K);for(W in u)K=u[W],Y=o[W],!u.hasOwnProperty(W)||K===Y||K===void 0&&Y===void 0||Tf(n,s,W,K,u,Y);return}}for(var L in o)K=o[L],o.hasOwnProperty(L)&&K!=null&&!u.hasOwnProperty(L)&&Fe(n,s,L,null,u,K);for(ne in u)K=u[ne],Y=o[ne],!u.hasOwnProperty(ne)||K===Y||K==null&&Y==null||Fe(n,s,ne,K,u,Y)}var Ef=null,kf=null;function yl(n){return n.nodeType===9?n:n.ownerDocument}function _y(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ay(n,s){if(n===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&s==="foreignObject"?0:n}function _f(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Af=null;function $T(){var n=window.event;return n&&n.type==="popstate"?n===Af?!1:(Af=n,!0):(Af=null,!1)}var Oy=typeof setTimeout=="function"?setTimeout:void 0,DT=typeof clearTimeout=="function"?clearTimeout:void 0,$y=typeof Promise=="function"?Promise:void 0,RT=typeof queueMicrotask=="function"?queueMicrotask:typeof $y<"u"?function(n){return $y.resolve(null).then(n).catch(CT)}:Oy;function CT(n){setTimeout(function(){throw n})}function Ta(n){return n==="head"}function Dy(n,s){var o=s,u=0,d=0;do{var m=o.nextSibling;if(n.removeChild(o),m&&m.nodeType===8)if(o=m.data,o==="/$"){if(0<u&&8>u){o=u;var w=n.ownerDocument;if(o&1&&xi(w.documentElement),o&2&&xi(w.body),o&4)for(o=w.head,xi(o),w=o.firstChild;w;){var N=w.nextSibling,D=w.nodeName;w[Lr]||D==="SCRIPT"||D==="STYLE"||D==="LINK"&&w.rel.toLowerCase()==="stylesheet"||o.removeChild(w),w=N}}if(d===0){n.removeChild(m),Di(s);return}d--}else o==="$"||o==="$?"||o==="$!"?d++:u=o.charCodeAt(0)-48;else u=0;o=m}while(o);Di(s)}function Of(n){var s=n.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Of(o),Cu(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}n.removeChild(o)}}function zT(n,s,o,u){for(;n.nodeType===1;){var d=o;if(n.nodeName.toLowerCase()!==s.toLowerCase()){if(!u&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(u){if(!n[Lr])switch(s){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(m=n.getAttribute("rel"),m==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(m!==d.rel||n.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||n.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||n.getAttribute("title")!==(d.title==null?null:d.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(m=n.getAttribute("src"),(m!==(d.src==null?null:d.src)||n.getAttribute("type")!==(d.type==null?null:d.type)||n.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&m&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(s==="input"&&n.type==="hidden"){var m=d.name==null?null:""+d.name;if(d.type==="hidden"&&n.getAttribute("name")===m)return n}else return n;if(n=yn(n.nextSibling),n===null)break}return null}function jT(n,s,o){if(s==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!o||(n=yn(n.nextSibling),n===null))return null;return n}function $f(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function MT(n,s){var o=n.ownerDocument;if(n.data!=="$?"||o.readyState==="complete")s();else{var u=function(){s(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),n._reactRetry=u}}function yn(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return n}var Df=null;function Ry(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(s===0)return n;s--}else o==="/$"&&s++}n=n.previousSibling}return null}function Cy(n,s,o){switch(s=yl(o),n){case"html":if(n=s.documentElement,!n)throw Error(r(452));return n;case"head":if(n=s.head,!n)throw Error(r(453));return n;case"body":if(n=s.body,!n)throw Error(r(454));return n;default:throw Error(r(451))}}function xi(n){for(var s=n.attributes;s.length;)n.removeAttributeNode(s[0]);Cu(n)}var fn=new Map,zy=new Set;function bl(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Zn=P.d;P.d={f:IT,r:LT,D:BT,C:UT,L:qT,m:FT,X:HT,S:VT,M:GT};function IT(){var n=Zn.f(),s=ul();return n||s}function LT(n){var s=Ds(n);s!==null&&s.tag===5&&s.type==="form"?eg(s):Zn.r(n)}var fr=typeof document>"u"?null:document;function jy(n,s,o){var u=fr;if(u&&typeof s=="string"&&s){var d=an(s);d='link[rel="'+n+'"][href="'+d+'"]',typeof o=="string"&&(d+='[crossorigin="'+o+'"]'),zy.has(d)||(zy.add(d),n={rel:n,crossOrigin:o,href:s},u.querySelector(d)===null&&(s=u.createElement("link"),St(s,"link",n),dt(s),u.head.appendChild(s)))}}function BT(n){Zn.D(n),jy("dns-prefetch",n,null)}function UT(n,s){Zn.C(n,s),jy("preconnect",n,s)}function qT(n,s,o){Zn.L(n,s,o);var u=fr;if(u&&n&&s){var d='link[rel="preload"][as="'+an(s)+'"]';s==="image"&&o&&o.imageSrcSet?(d+='[imagesrcset="'+an(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(d+='[imagesizes="'+an(o.imageSizes)+'"]')):d+='[href="'+an(n)+'"]';var m=d;switch(s){case"style":m=hr(n);break;case"script":m=dr(n)}fn.has(m)||(n=g({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:n,as:s},o),fn.set(m,n),u.querySelector(d)!==null||s==="style"&&u.querySelector(Ti(m))||s==="script"&&u.querySelector(Ei(m))||(s=u.createElement("link"),St(s,"link",n),dt(s),u.head.appendChild(s)))}}function FT(n,s){Zn.m(n,s);var o=fr;if(o&&n){var u=s&&typeof s.as=="string"?s.as:"script",d='link[rel="modulepreload"][as="'+an(u)+'"][href="'+an(n)+'"]',m=d;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=dr(n)}if(!fn.has(m)&&(n=g({rel:"modulepreload",href:n},s),fn.set(m,n),o.querySelector(d)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Ei(m)))return}u=o.createElement("link"),St(u,"link",n),dt(u),o.head.appendChild(u)}}}function VT(n,s,o){Zn.S(n,s,o);var u=fr;if(u&&n){var d=Rs(u).hoistableStyles,m=hr(n);s=s||"default";var w=d.get(m);if(!w){var N={loading:0,preload:null};if(w=u.querySelector(Ti(m)))N.loading=5;else{n=g({rel:"stylesheet",href:n,"data-precedence":s},o),(o=fn.get(m))&&Rf(n,o);var D=w=u.createElement("link");dt(D),St(D,"link",n),D._p=new Promise(function(H,W){D.onload=H,D.onerror=W}),D.addEventListener("load",function(){N.loading|=1}),D.addEventListener("error",function(){N.loading|=2}),N.loading|=4,vl(w,s,u)}w={type:"stylesheet",instance:w,count:1,state:N},d.set(m,w)}}}function HT(n,s){Zn.X(n,s);var o=fr;if(o&&n){var u=Rs(o).hoistableScripts,d=dr(n),m=u.get(d);m||(m=o.querySelector(Ei(d)),m||(n=g({src:n,async:!0},s),(s=fn.get(d))&&Cf(n,s),m=o.createElement("script"),dt(m),St(m,"link",n),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(d,m))}}function GT(n,s){Zn.M(n,s);var o=fr;if(o&&n){var u=Rs(o).hoistableScripts,d=dr(n),m=u.get(d);m||(m=o.querySelector(Ei(d)),m||(n=g({src:n,async:!0,type:"module"},s),(s=fn.get(d))&&Cf(n,s),m=o.createElement("script"),dt(m),St(m,"link",n),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(d,m))}}function My(n,s,o,u){var d=(d=we.current)?bl(d):null;if(!d)throw Error(r(446));switch(n){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=hr(o.href),o=Rs(d).hoistableStyles,u=o.get(s),u||(u={type:"style",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){n=hr(o.href);var m=Rs(d).hoistableStyles,w=m.get(n);if(w||(d=d.ownerDocument||d,w={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(n,w),(m=d.querySelector(Ti(n)))&&!m._p&&(w.instance=m,w.state.loading=5),fn.has(n)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},fn.set(n,o),m||KT(d,n,o,w.state))),s&&u===null)throw Error(r(528,""));return w}if(s&&u!==null)throw Error(r(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=dr(o),o=Rs(d).hoistableScripts,u=o.get(s),u||(u={type:"script",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,n))}}function hr(n){return'href="'+an(n)+'"'}function Ti(n){return'link[rel="stylesheet"]['+n+"]"}function Iy(n){return g({},n,{"data-precedence":n.precedence,precedence:null})}function KT(n,s,o,u){n.querySelector('link[rel="preload"][as="style"]['+s+"]")?u.loading=1:(s=n.createElement("link"),u.preload=s,s.addEventListener("load",function(){return u.loading|=1}),s.addEventListener("error",function(){return u.loading|=2}),St(s,"link",o),dt(s),n.head.appendChild(s))}function dr(n){return'[src="'+an(n)+'"]'}function Ei(n){return"script[async]"+n}function Ly(n,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var u=n.querySelector('style[data-href~="'+an(o.href)+'"]');if(u)return s.instance=u,dt(u),u;var d=g({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(n.ownerDocument||n).createElement("style"),dt(u),St(u,"style",d),vl(u,o.precedence,n),s.instance=u;case"stylesheet":d=hr(o.href);var m=n.querySelector(Ti(d));if(m)return s.state.loading|=4,s.instance=m,dt(m),m;u=Iy(o),(d=fn.get(d))&&Rf(u,d),m=(n.ownerDocument||n).createElement("link"),dt(m);var w=m;return w._p=new Promise(function(N,D){w.onload=N,w.onerror=D}),St(m,"link",u),s.state.loading|=4,vl(m,o.precedence,n),s.instance=m;case"script":return m=dr(o.src),(d=n.querySelector(Ei(m)))?(s.instance=d,dt(d),d):(u=o,(d=fn.get(m))&&(u=g({},o),Cf(u,d)),n=n.ownerDocument||n,d=n.createElement("script"),dt(d),St(d,"link",u),n.head.appendChild(d),s.instance=d);case"void":return null;default:throw Error(r(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(u=s.instance,s.state.loading|=4,vl(u,o.precedence,n));return s.instance}function vl(n,s,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=u.length?u[u.length-1]:null,m=d,w=0;w<u.length;w++){var N=u[w];if(N.dataset.precedence===s)m=N;else if(m!==d)break}m?m.parentNode.insertBefore(n,m.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(n,s.firstChild))}function Rf(n,s){n.crossOrigin==null&&(n.crossOrigin=s.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=s.referrerPolicy),n.title==null&&(n.title=s.title)}function Cf(n,s){n.crossOrigin==null&&(n.crossOrigin=s.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=s.referrerPolicy),n.integrity==null&&(n.integrity=s.integrity)}var wl=null;function By(n,s,o){if(wl===null){var u=new Map,d=wl=new Map;d.set(o,u)}else d=wl,u=d.get(o),u||(u=new Map,d.set(o,u));if(u.has(n))return u;for(u.set(n,null),o=o.getElementsByTagName(n),d=0;d<o.length;d++){var m=o[d];if(!(m[Lr]||m[Tt]||n==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var w=m.getAttribute(s)||"";w=n+w;var N=u.get(w);N?N.push(m):u.set(w,[m])}}return u}function Uy(n,s,o){n=n.ownerDocument||n,n.head.insertBefore(o,s==="title"?n.querySelector("head > title"):null)}function YT(n,s,o){if(o===1||s.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return n=s.disabled,typeof s.precedence=="string"&&n==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function qy(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var ki=null;function PT(){}function XT(n,s,o){if(ki===null)throw Error(r(475));var u=ki;if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var d=hr(o.href),m=n.querySelector(Ti(d));if(m){n=m._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(u.count++,u=Sl.bind(u),n.then(u,u)),s.state.loading|=4,s.instance=m,dt(m);return}m=n.ownerDocument||n,o=Iy(o),(d=fn.get(d))&&Rf(o,d),m=m.createElement("link"),dt(m);var w=m;w._p=new Promise(function(N,D){w.onload=N,w.onerror=D}),St(m,"link",o),s.instance=m}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(s,n),(n=s.state.preload)&&(s.state.loading&3)===0&&(u.count++,s=Sl.bind(u),n.addEventListener("load",s),n.addEventListener("error",s))}}function ZT(){if(ki===null)throw Error(r(475));var n=ki;return n.stylesheets&&n.count===0&&zf(n,n.stylesheets),0<n.count?function(s){var o=setTimeout(function(){if(n.stylesheets&&zf(n,n.stylesheets),n.unsuspend){var u=n.unsuspend;n.unsuspend=null,u()}},6e4);return n.unsuspend=s,function(){n.unsuspend=null,clearTimeout(o)}}:null}function Sl(){if(this.count--,this.count===0){if(this.stylesheets)zf(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Nl=null;function zf(n,s){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Nl=new Map,s.forEach(WT,n),Nl=null,Sl.call(n))}function WT(n,s){if(!(s.state.loading&4)){var o=Nl.get(n);if(o)var u=o.get(null);else{o=new Map,Nl.set(n,o);for(var d=n.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<d.length;m++){var w=d[m];(w.nodeName==="LINK"||w.getAttribute("media")!=="not all")&&(o.set(w.dataset.precedence,w),u=w)}u&&o.set(null,u)}d=s.instance,w=d.getAttribute("data-precedence"),m=o.get(w)||u,m===u&&o.set(null,d),o.set(w,d),this.count++,u=Sl.bind(this),d.addEventListener("load",u),d.addEventListener("error",u),m?m.parentNode.insertBefore(d,m.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(d,n.firstChild)),s.state.loading|=4}}var _i={$$typeof:z,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function QT(n,s,o,u,d,m,w,N){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ou(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ou(0),this.hiddenUpdates=Ou(null),this.identifierPrefix=u,this.onUncaughtError=d,this.onCaughtError=m,this.onRecoverableError=w,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=N,this.incompleteTransitions=new Map}function Fy(n,s,o,u,d,m,w,N,D,H,W,ne){return n=new QT(n,s,o,w,N,D,H,ne),s=1,m===!0&&(s|=24),m=Xt(3,null,null,s),n.current=m,m.stateNode=n,s=pc(),s.refCount++,n.pooledCache=s,s.refCount++,m.memoizedState={element:u,isDehydrated:o,cache:s},bc(m),n}function Vy(n){return n?(n=Hs,n):Hs}function Hy(n,s,o,u,d,m){d=Vy(d),u.context===null?u.context=d:u.pendingContext=d,u=fa(s),u.payload={element:o},m=m===void 0?null:m,m!==null&&(u.callback=m),o=ha(n,u,s),o!==null&&(en(o,n,s),ai(o,n,s))}function Gy(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<s?o:s}}function jf(n,s){Gy(n,s),(n=n.alternate)&&Gy(n,s)}function Ky(n){if(n.tag===13){var s=Vs(n,67108864);s!==null&&en(s,n,67108864),jf(n,67108864)}}var xl=!0;function JT(n,s,o,u){var d=G.T;G.T=null;var m=P.p;try{P.p=2,Mf(n,s,o,u)}finally{P.p=m,G.T=d}}function eE(n,s,o,u){var d=G.T;G.T=null;var m=P.p;try{P.p=8,Mf(n,s,o,u)}finally{P.p=m,G.T=d}}function Mf(n,s,o,u){if(xl){var d=If(u);if(d===null)xf(n,s,u,Tl,o),Py(n,u);else if(nE(d,n,s,o,u))u.stopPropagation();else if(Py(n,u),s&4&&-1<tE.indexOf(n)){for(;d!==null;){var m=Ds(d);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var w=Ya(m.pendingLanes);if(w!==0){var N=m;for(N.pendingLanes|=2,N.entangledLanes|=2;w;){var D=1<<31-Yt(w);N.entanglements[1]|=D,w&=~D}On(m),(Ie&6)===0&&(ol=Tn()+500,wi(0))}}break;case 13:N=Vs(m,2),N!==null&&en(N,m,2),ul(),jf(m,2)}if(m=If(u),m===null&&xf(n,s,u,Tl,o),m===d)break;d=m}d!==null&&u.stopPropagation()}else xf(n,s,u,null,o)}}function If(n){return n=qu(n),Lf(n)}var Tl=null;function Lf(n){if(Tl=null,n=$s(n),n!==null){var s=l(n);if(s===null)n=null;else{var o=s.tag;if(o===13){if(n=c(s),n!==null)return n;n=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null)}}return Tl=n,null}function Yy(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(UN()){case op:return 2;case lp:return 8;case go:case qN:return 32;case up:return 268435456;default:return 32}default:return 32}}var Bf=!1,Ea=null,ka=null,_a=null,Ai=new Map,Oi=new Map,Aa=[],tE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Py(n,s){switch(n){case"focusin":case"focusout":Ea=null;break;case"dragenter":case"dragleave":ka=null;break;case"mouseover":case"mouseout":_a=null;break;case"pointerover":case"pointerout":Ai.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oi.delete(s.pointerId)}}function $i(n,s,o,u,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:s,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[d]},s!==null&&(s=Ds(s),s!==null&&Ky(s)),n):(n.eventSystemFlags|=u,s=n.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),n)}function nE(n,s,o,u,d){switch(s){case"focusin":return Ea=$i(Ea,n,s,o,u,d),!0;case"dragenter":return ka=$i(ka,n,s,o,u,d),!0;case"mouseover":return _a=$i(_a,n,s,o,u,d),!0;case"pointerover":var m=d.pointerId;return Ai.set(m,$i(Ai.get(m)||null,n,s,o,u,d)),!0;case"gotpointercapture":return m=d.pointerId,Oi.set(m,$i(Oi.get(m)||null,n,s,o,u,d)),!0}return!1}function Xy(n){var s=$s(n.target);if(s!==null){var o=l(s);if(o!==null){if(s=o.tag,s===13){if(s=c(o),s!==null){n.blockedOn=s,XN(n.priority,function(){if(o.tag===13){var u=Jt();u=$u(u);var d=Vs(o,u);d!==null&&en(d,o,u),jf(o,u)}});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function El(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var o=If(n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Uu=u,o.target.dispatchEvent(u),Uu=null}else return s=Ds(o),s!==null&&Ky(s),n.blockedOn=o,!1;s.shift()}return!0}function Zy(n,s,o){El(n)&&o.delete(s)}function aE(){Bf=!1,Ea!==null&&El(Ea)&&(Ea=null),ka!==null&&El(ka)&&(ka=null),_a!==null&&El(_a)&&(_a=null),Ai.forEach(Zy),Oi.forEach(Zy)}function kl(n,s){n.blockedOn===s&&(n.blockedOn=null,Bf||(Bf=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,aE)))}var _l=null;function Wy(n){_l!==n&&(_l=n,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){_l===n&&(_l=null);for(var s=0;s<n.length;s+=3){var o=n[s],u=n[s+1],d=n[s+2];if(typeof u!="function"){if(Lf(u||o)===null)continue;break}var m=Ds(o);m!==null&&(n.splice(s,3),s-=3,Ic(m,{pending:!0,data:d,method:o.method,action:u},u,d))}}))}function Di(n){function s(D){return kl(D,n)}Ea!==null&&kl(Ea,n),ka!==null&&kl(ka,n),_a!==null&&kl(_a,n),Ai.forEach(s),Oi.forEach(s);for(var o=0;o<Aa.length;o++){var u=Aa[o];u.blockedOn===n&&(u.blockedOn=null)}for(;0<Aa.length&&(o=Aa[0],o.blockedOn===null);)Xy(o),o.blockedOn===null&&Aa.shift();if(o=(n.ownerDocument||n).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var d=o[u],m=o[u+1],w=d[jt]||null;if(typeof m=="function")w||Wy(o);else if(w){var N=null;if(m&&m.hasAttribute("formAction")){if(d=m,w=m[jt]||null)N=w.formAction;else if(Lf(d)!==null)continue}else N=w.action;typeof N=="function"?o[u+1]=N:(o.splice(u,3),u-=3),Wy(o)}}}function Uf(n){this._internalRoot=n}Al.prototype.render=Uf.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(r(409));var o=s.current,u=Jt();Hy(o,u,n,s,null,null)},Al.prototype.unmount=Uf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;Hy(n.current,2,null,n,null,null),ul(),s[Os]=null}};function Al(n){this._internalRoot=n}Al.prototype.unstable_scheduleHydration=function(n){if(n){var s=pp();n={blockedOn:null,target:n,priority:s};for(var o=0;o<Aa.length&&s!==0&&s<Aa[o].priority;o++);Aa.splice(o,0,n),o===0&&Xy(n)}};var Qy=e.version;if(Qy!=="19.1.0")throw Error(r(527,Qy,"19.1.0"));P.findDOMNode=function(n){var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(r(188)):(n=Object.keys(n).join(","),Error(r(268,n)));return n=h(s),n=n!==null?p(n):null,n=n===null?null:n.stateNode,n};var sE={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:G,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ol.isDisabled&&Ol.supportsFiber)try{jr=Ol.inject(sE),Kt=Ol}catch{}}return Ci.createRoot=function(n,s){if(!i(n))throw Error(r(299));var o=!1,u="",d=pg,m=mg,w=gg,N=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(w=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(N=s.unstable_transitionCallbacks)),s=Fy(n,1,!1,null,null,o,u,d,m,w,N,null),n[Os]=s.current,Nf(n),new Uf(s)},Ci.hydrateRoot=function(n,s,o){if(!i(n))throw Error(r(299));var u=!1,d="",m=pg,w=mg,N=gg,D=null,H=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(w=o.onCaughtError),o.onRecoverableError!==void 0&&(N=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(D=o.unstable_transitionCallbacks),o.formState!==void 0&&(H=o.formState)),s=Fy(n,1,!0,s,o??null,u,d,m,w,N,D,H),s.context=Vy(null),o=s.current,u=Jt(),u=$u(u),d=fa(u),d.callback=null,ha(o,d,u),o=u,s.current.lanes=o,Ir(s,o),On(s),n[Os]=s.current,Nf(n),new Al(s)},Ci.version="19.1.0",Ci}var l0;function gE(){if(l0)return Vf.exports;l0=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),Vf.exports=mE(),Vf.exports}var yE=gE();const bE=Vh(yE);var Ne=(t=>(t.QUEUED="QUEUED",t.ANALYZING="ANALYZING",t.ANALYZED="ANALYZED",t.ERROR="ERROR",t.UNCATEGORIZED="UNCATEGORIZED",t))(Ne||{});const vE="modulepreload",wE=function(t){return"/"+t},u0={},zi=function(e,a,r){let i=Promise.resolve();if(a&&a.length>0){let c=function(p){return Promise.all(p.map(g=>Promise.resolve(g).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),h=(f==null?void 0:f.nonce)||(f==null?void 0:f.getAttribute("nonce"));i=c(a.map(p=>{if(p=wE(p),p in u0)return;u0[p]=!0;const g=p.endsWith(".css"),y=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${y}`))return;const v=document.createElement("link");if(v.rel=g?"stylesheet":vE,g||(v.as="script"),v.crossOrigin="",v.href=p,h&&v.setAttribute("nonce",h),document.head.appendChild(v),g)return new Promise((S,k)=>{v.addEventListener("load",S),v.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${p}`)))})}))}function l(c){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=c,window.dispatchEvent(f),!f.defaultPrevented)throw c}return i.then(c=>{for(const f of c||[])f.status==="rejected"&&l(f.reason);return e().catch(l)})};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const SE=1e-7,NE=1e-4;class xE{constructor(e,a){this.backend=e,this.dataMover=a,this.data=new WeakMap,this.dataIdsCount=0}get(e){return this.data.has(e)||this.dataMover.moveData(this.backend,e),this.data.get(e)}set(e,a){this.dataIdsCount++,this.data.set(e,a)}has(e){return this.data.has(e)}delete(e){return this.dataIdsCount--,this.data.delete(e)}numDataIds(){return this.dataIdsCount}}class Q0{refCount(e){return Ut("refCount")}incRef(e){return Ut("incRef")}timerAvailable(){return!0}time(e){return Ut("time")}read(e){return Ut("read")}readSync(e){return Ut("readSync")}readToGPU(e,a){return Ut("readToGPU")}numDataIds(){return Ut("numDataIds")}disposeData(e,a){return Ut("disposeData")}write(e,a,r){return Ut("write")}move(e,a,r,i,l){return Ut("move")}createTensorFromGPUData(e,a,r){return Ut("createTensorFromGPUData")}memory(){return Ut("memory")}floatPrecision(){return Ut("floatPrecision")}epsilon(){return this.floatPrecision()===32?SE:NE}dispose(){return Ut("dispose")}}function Ut(t){throw new Error(`'${t}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function J0(t){let e=t.length,a=0;for(;e>0;)a=Math.random()*e|0,e--,Hl(t,e,a)}function TE(t,e){if(t.length!==e.length)throw new Error(`Array sizes must match to be shuffled together First array length was ${t.length}Second array length was ${e.length}`);let a=t.length,r=0;for(;a>0;)r=Math.random()*a|0,a--,Hl(t,a,r),Hl(e,a,r)}function qi(t,e,a){return Math.max(t,Math.min(e,a))}function EE(t){return t%2===0?t:t+1}function Hl(t,e,a){const r=t[e];t[e]=t[a],t[a]=r}function kE(t){let e=0;for(let a=0;a<t.length;a++)e+=t[a];return e}function _E(t,e){const a=Math.random();return e*a+(1-a)*t}function AE(t,e){let a=0;for(let r=0;r<t.length;r++){const i=Number(t[r])-Number(e[r]);a+=i*i}return a}function E(t,e){if(!t)throw new Error(typeof e=="string"?e:e())}function Dt(t,e,a=""){E(Nn(t,e),()=>a+` Shapes ${t} and ${e} must match`)}function _s(t){E(t!=null,()=>"The input to the tensor constructor must be a non-null value.")}function Ue(t){if(t.length===0)return 1;let e=t[0];for(let a=1;a<t.length;a++)e*=t[a];return e}function OE(t){return t.length===0}function eb(t,e){if(t===e)return!0;if(t==null||e==null||t.length!==e.length)return!1;for(let a=0;a<t.length;a++)if(t[a]!==null&&e[a]!==null&&t[a]!==e[a])return!1;return!0}function Nn(t,e){if(t===e)return!0;if(t==null||e==null||t.length!==e.length)return!1;for(let a=0;a<t.length;a++)if(t[a]!==e[a])return!1;return!0}function Nr(t){return t%1===0}function $E(t){if(Math.tanh!=null)return Math.tanh(t);if(t===1/0)return 1;if(t===-1/0)return-1;{const e=Math.exp(2*t);return(e-1)/(e+1)}}function DE(t){const e=Math.ceil(Math.sqrt(t));return[e,Math.ceil(t/e)]}function RE(t){const e=new Uint32Array(t);for(let a=0;a<t;++a)e[a]=a;return J0(e),e}function Bi(t,e){return e<=t.length?t:t+" ".repeat(e-t.length)}function CE(t,e=i=>0,a,r){return new Promise((i,l)=>{let c=0;const f=()=>{if(t()){i();return}c++;const h=e(c);if(a!=null&&c>=a){l();return}r!=null?r(f,h):setTimeout(f,h)};f()})}function zE(t,e){let a=1,r=-1;for(let l=0;l<t.length;++l)if(t[l]>=0)a*=t[l];else if(t[l]===-1){if(r!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${r} and dim ${l}`);r=l}else if(t[l]<0)throw Error(`Shapes can not be < 0. Found ${t[l]} at dim ${l}`);if(r===-1){if(e>0&&e!==a)throw Error(`Size(${e}) must match the product of shape ${t}`);return t}if(a===0)throw Error(`Cannot infer the missing size in [${t}] when there are 0 elements`);if(e%a!==0)throw Error(`The implicit shape can't be a fractional number. Got ${e} / ${a}`);const i=t.slice();return i[r]=e/a,i}function to(t,e){const a=e.length;return t=t==null?e.map((r,i)=>i):[].concat(t),E(t.every(r=>r>=-a&&r<a),()=>`All values in axis param must be in range [-${a}, ${a}) but got axis ${t}`),E(t.every(r=>Nr(r)),()=>`All values in axis param must be integers but got axis ${t}`),t.map(r=>r<0?a+r:r)}function tb(t,e){const a=[],r=[],i=e!=null&&Array.isArray(e)&&e.length===0,l=e==null||i?null:to(e,t).sort();let c=0;for(let f=0;f<t.length;++f){if(l!=null){if(l[c]===f&&t[f]!==1)throw new Error(`Can't squeeze axis ${f} since its dim '${t[f]}' is not 1`);(l[c]==null||l[c]>f)&&t[f]===1&&(a.push(t[f]),r.push(f)),l[c]<=f&&c++}t[f]!==1&&(a.push(t[f]),r.push(f))}return{newShape:a,keptDims:r}}function nb(t,e){return Gh(t,e)}function Gh(t,e){let a=null;if(t==null||t==="float32")a=new Float32Array(e);else if(t==="int32")a=new Int32Array(e);else if(t==="bool")a=new Uint8Array(e);else if(t==="string")a=new Array(e);else throw new Error(`Unknown data type ${t}`);return a}function ab(t,e){for(let a=0;a<t.length;a++){const r=t[a];if(isNaN(r)||!isFinite(r))throw Error(`A tensor of type ${e} being uploaded contains ${r}.`)}}function sb(t){return t==="bool"||t==="complex64"||t==="float32"||t==="int32"||t==="string"}function jE(t,e){return!(e==="complex64"||e==="float32"&&t!=="complex64"||e==="int32"&&t!=="float32"&&t!=="complex64"||e==="bool"&&t==="bool")}function Gl(t){if(t==="float32"||t==="int32")return 4;if(t==="complex64")return 8;if(t==="bool")return 1;throw new Error(`Unknown dtype ${t}`)}function rb(t){if(t==null)return 0;let e=0;return t.forEach(a=>e+=a.length),e}function Ca(t){return typeof t=="string"||t instanceof String}function ib(t){return typeof t=="boolean"}function ob(t){return typeof t=="number"}function no(t){return Array.isArray(t)?no(t[0]):t instanceof Float32Array?"float32":t instanceof Int32Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray?"int32":ob(t)?"float32":Ca(t)?"string":ib(t)?"bool":"float32"}function Ia(t){return!!(t&&t.constructor&&t.call&&t.apply)}function Kl(t,e){for(let a=e;a<t;++a)if(t%a===0)return a;return t}function $r(t){const e=t.length;if(e<2)return[];const a=new Array(e-1);a[e-2]=t[e-1];for(let r=e-3;r>=0;--r)a[r]=a[r+1]*t[r+1];return a}function lb(t,e,a,r=!1){const i=new Array;if(e.length===1){const l=e[0]*(r?2:1);for(let c=0;c<l;c++)i[c]=a[t+c]}else{const l=e[0],c=e.slice(1),f=c.reduce((h,p)=>h*p)*(r?2:1);for(let h=0;h<l;h++)i[h]=lb(t+h*f,c,a,r)}return i}function bs(t,e,a=!1){if(t.length===0)return e[0];const r=t.reduce((i,l)=>i*l)*(a?2:1);if(r===0)return[];if(r!==e.length)throw new Error(`[${t}] does not match the input size ${e.length}${a?" for a complex tensor":""}.`);return lb(0,t,e,a)}function ME(t,e){if(Array.isArray(t))return t;if(e==="float32")return t instanceof Float32Array?t:new Float32Array(t);if(e==="int32")return t instanceof Int32Array?t:new Int32Array(t);if(e==="bool"||e==="string")return Uint8Array.from(new Int32Array(t));throw new Error(`Unknown dtype ${e}`)}function Kh(t,e){const a=ou(t,e);for(let r=0;r<a.length;r++)a[r]=1;return a}function ou(t,e){if(e==null||e==="float32"||e==="complex64")return new Float32Array(t);if(e==="int32")return new Int32Array(t);if(e==="bool")return new Uint8Array(t);throw new Error(`Unknown data type ${e}`)}function IE(t,e){const a=t.reduce((r,i)=>r*i,1);if(e==null||e==="float32")return bs(t,new Float32Array(a));if(e==="int32")return bs(t,new Int32Array(a));if(e==="bool")return bs(t,new Uint8Array(a));throw new Error(`Unknown data type ${e}`)}function Gt(t){t.forEach(e=>{E(Number.isInteger(e)&&e>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${t}].`)})}function LE(t,e,a){if(e===0)return 0;if(e===1)return t[0];let r=t[t.length-1];for(let i=0;i<t.length-1;++i)r+=a[i]*t[i];return r}function BE(t,e,a){if(e===0)return[];if(e===1)return[t];const r=new Array(e);for(let i=0;i<r.length-1;++i)r[i]=Math.floor(t/a[i]),t-=r[i]*a[i];return r[r.length-1]=t,r}function La(t){return t&&t.then&&typeof t.then=="function"}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const c0="tfjsflags";class ub{constructor(e){this.global=e,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=UE,this.populateURLFlags()}setPlatform(e,a){this.platform!=null&&(ve().getBool("IS_TEST")||ve().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${e}.`)),this.platformName=e,this.platform=a}registerFlag(e,a,r){if(this.flagRegistry[e]={evaluationFn:a,setHook:r},this.urlFlags[e]!=null){const i=this.urlFlags[e];ve().getBool("IS_TEST")||ve().getBool("PROD")||console.warn(`Setting feature override from URL ${e}: ${i}.`),this.set(e,i)}}async getAsync(e){return e in this.flags?this.flags[e]:(this.flags[e]=await this.evaluateFlag(e),this.flags[e])}get(e){if(e in this.flags)return this.flags[e];const a=this.evaluateFlag(e);if(La(a))throw new Error(`Flag ${e} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[e]=a,this.flags[e]}getNumber(e){return this.get(e)}getBool(e){return this.get(e)}getString(e){return this.get(e)}getFlags(){return this.flags}get features(){return this.flags}set(e,a){if(this.flagRegistry[e]==null)throw new Error(`Cannot set flag ${e} as it has not been registered.`);this.flags[e]=a,this.flagRegistry[e].setHook!=null&&this.flagRegistry[e].setHook(a)}evaluateFlag(e){if(this.flagRegistry[e]==null)throw new Error(`Cannot evaluate flag '${e}': no evaluation function found.`);return this.flagRegistry[e].evaluationFn()}setFlags(e){this.flags=Object.assign({},e)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;const e=this.getQueryParams(this.global.location.search);c0 in e&&e[c0].split(",").forEach(r=>{const[i,l]=r.split(":");this.urlFlags[i]=FE(i,l)})}}function UE(t){const e={};return t.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(a,...r)=>(qE(e,r[0],r[1]),r.join("="))),e}function qE(t,e,a){t[decodeURIComponent(e)]=decodeURIComponent(a||"")}function FE(t,e){const a=e.toLowerCase();return a==="true"||a==="false"?a==="true":`${+a}`===a?+a:e}function ve(){return Yh}let Yh=null;function VE(t){Yh=t}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Yf;function cb(){if(Yf==null){let t;if(typeof window<"u")t=window;else if(typeof global<"u")t=global;else if(typeof process<"u")t=process;else if(typeof self<"u")t=self;else throw new Error("Could not find a global object");Yf=t}return Yf}function HE(){const t=cb();return t._tfGlobals==null&&(t._tfGlobals=new Map),t._tfGlobals}function Ph(t,e){const a=HE();if(a.has(t))return a.get(t);{const r=e();return a.set(t,r),a.get(t)}}const fb="Abs",hb="Acos",db="Acosh",Xh="Add",pb="AddN",mb="All",gb="Any",yb="ArgMax",bb="ArgMin",vb="Asin",wb="Asinh",Sb="Atan",Nb="Atanh",xb="Atan2",Tb="AvgPool",GE="AvgPoolGrad",Eb="AvgPool3D",KE="AvgPool3DGrad",kb="BatchMatMul",_b="BatchToSpaceND",Ab="Bincount",Ob="BitwiseAnd",YE="BroadcastTo",$b="BroadcastArgs",Zh="Cast",Db="Ceil",Rb="ClipByValue",Cb="Complex",zb="ComplexAbs",jb="Concat",Mb="Conv2D",Ib="Conv2DBackpropFilter",Lb="Conv2DBackpropInput",Bb="Conv3D",PE="Conv3DBackpropFilterV2",Ub="Conv3DBackpropInputV2",qb="Cos",Fb="Cosh",Vb="Cumprod",Hb="Cumsum",Gb="CropAndResize",Kb="DenseBincount",Yb="DepthToSpace",Pb="DepthwiseConv2dNative",Xb="DepthwiseConv2dNativeBackpropFilter",Zb="DepthwiseConv2dNativeBackpropInput",Wb="Diag",Qb="Dilation2D",XE="Dilation2DBackpropInput",ZE="Dilation2DBackpropFilter",Wh="Draw",Jb="RealDiv",e1="Einsum",t1="Elu",WE="EluGrad",n1="Erf",a1="Equal",s1="Exp",r1="ExpandDims",i1="Expm1",o1="FFT",l1="Fill",u1="FlipLeftRight",c1="Floor",f1="FloorDiv",h1="FusedBatchNorm",d1="GatherV2",p1="GatherNd",m1="Greater",g1="GreaterEqual",Qh="Identity",y1="IFFT",b1="Imag",v1="IsFinite",w1="IsInf",S1="IsNan",N1="LeakyRelu",x1="Less",T1="LessEqual",E1="LinSpace",k1="Log",_1="Log1p",A1="LogicalAnd",O1="LogicalNot",$1="LogicalOr",QE="LogicalXor",JE="LogSoftmax",e3="LowerBound",D1="LRN",t3="LRNGrad",n3="MatrixBandPart",R1="Max",C1="Maximum",z1="MaxPool",a3="MaxPoolGrad",j1="MaxPool3D",s3="MaxPool3DGrad",M1="MaxPoolWithArgmax",I1="Mean",L1="Min",B1="Minimum",U1="MirrorPad",q1="Mod",F1="Multinomial",V1="Multiply",H1="Neg",G1="NotEqual",K1="NonMaxSuppressionV3",Y1="NonMaxSuppressionV4",P1="NonMaxSuppressionV5",X1="OnesLike",Z1="OneHot",W1="Pack",Q1="PadV2",r3="Pool",J1="Pow",e2="Prelu",t2="Prod",n2="RaggedGather",a2="RaggedRange",s2="RaggedTensorToTensor",r2="Range",i2="Real",o2="Reciprocal",l2="Relu",u2="Reshape",c2="ResizeNearestNeighbor",i3="ResizeNearestNeighborGrad",f2="ResizeBilinear",o3="ResizeBilinearGrad",h2="Relu6",d2="Reverse",p2="Round",m2="Rsqrt",g2="ScatterNd",y2="TensorScatterUpdate",b2="SearchSorted",v2="Select",w2="Selu",S2="Slice",N2="Sin",x2="Sinh",T2="Sign",E2="Sigmoid",k2="Softplus",_2="Sqrt",A2="Sum",O2="SpaceToBatchND",$2="SplitV",D2="Softmax",R2="SparseFillEmptyRows",C2="SparseReshape",z2="SparseSegmentMean",j2="SparseSegmentSum",M2="SparseToDense",I2="SquaredDifference",l3="Square",L2="StaticRegexReplace",B2="StridedSlice",U2="StringNGrams",q2="StringSplit",F2="StringToHashBucketFast",V2="Sub",H2="Tan",G2="Tanh",Jh="Tile",K2="TopK",Y2="Transform",Cl="Transpose",P2="Unique",X2="Unpack",Z2="UnsortedSegmentSum",u3="UpperBound",W2="ZerosLike",Q2="Step",ih="FromPixels",J2="RotateWithOffset",oh="_FusedMatMul",lh="FusedConv2D",uh="FusedDepthwiseConv2D";/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Da(...t){ve().getBool("IS_TEST")||ve().getBool("PROD")||console.warn(...t)}function c3(...t){ve().getBool("IS_TEST")||ve().getBool("PROD")||console.log(...t)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xr=Ph("kernelRegistry",()=>new Map),Fi=Ph("gradRegistry",()=>new Map);function Vi(t,e){const a=ed(t,e);return xr.get(a)}function ch(t){return Fi.get(t)}function Yl(t){const e=xr.entries(),a=[];for(;;){const{done:r,value:i}=e.next();if(r)break;const[l,c]=i,[f]=l.split("_");f===t&&a.push(c)}return a}function ev(t){const{kernelName:e,backendName:a}=t,r=ed(e,a);xr.has(r)&&Da(`The kernel '${e}' for backend '${a}' is already registered`),xr.set(r,t)}function f3(t){const{kernelName:e}=t;Fi.has(e)&&ve().getBool("DEBUG")&&Da(`Overriding the gradient for '${e}'`),Fi.set(e,t)}function h3(t,e){const a=ed(t,e);if(!xr.has(a))throw new Error(`The kernel '${t}' for backend '${e}' is not registered`);xr.delete(a)}function d3(t){if(!Fi.has(t))throw new Error(`The gradient '${t}' for backend is not registered`);Fi.delete(t)}function p3(t,e){Yl(t).forEach(r=>{const i=Object.assign({},r,{backendName:e});ev(i)})}function ed(t,e){return`${e}_${t}`}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tv(t){return t instanceof Float32Array||t instanceof Int32Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray}var Pf,f0;function m3(){if(f0)return Pf;f0=1,Pf=e;var t=null;try{t=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function e(U,_,te){this.low=U|0,this.high=_|0,this.unsigned=!!te}e.prototype.__isLong__,Object.defineProperty(e.prototype,"__isLong__",{value:!0});function a(U){return(U&&U.__isLong__)===!0}e.isLong=a;var r={},i={};function l(U,_){var te,ue,pe;return _?(U>>>=0,(pe=0<=U&&U<256)&&(ue=i[U],ue)?ue:(te=f(U,(U|0)<0?-1:0,!0),pe&&(i[U]=te),te)):(U|=0,(pe=-128<=U&&U<128)&&(ue=r[U],ue)?ue:(te=f(U,U<0?-1:0,!1),pe&&(r[U]=te),te))}e.fromInt=l;function c(U,_){if(isNaN(U))return _?X:M;if(_){if(U<0)return X;if(U>=k)return re}else{if(U<=-$)return ie;if(U+1>=$)return Z}return U<0?c(-U,_).neg():f(U%S|0,U/S|0,_)}e.fromNumber=c;function f(U,_,te){return new e(U,_,te)}e.fromBits=f;var h=Math.pow;function p(U,_,te){if(U.length===0)throw Error("empty string");if(U==="NaN"||U==="Infinity"||U==="+Infinity"||U==="-Infinity")return M;if(typeof _=="number"?(te=_,_=!1):_=!!_,te=te||10,te<2||36<te)throw RangeError("radix");var ue;if((ue=U.indexOf("-"))>0)throw Error("interior hyphen");if(ue===0)return p(U.substring(1),_,te).neg();for(var pe=c(h(te,8)),fe=M,G=0;G<U.length;G+=8){var P=Math.min(8,U.length-G),Q=parseInt(U.substring(G,G+P),te);if(P<8){var oe=c(h(te,P));fe=fe.mul(oe).add(c(Q))}else fe=fe.mul(pe),fe=fe.add(c(Q))}return fe.unsigned=_,fe}e.fromString=p;function g(U,_){return typeof U=="number"?c(U,_):typeof U=="string"?p(U,_):f(U.low,U.high,typeof _=="boolean"?_:U.unsigned)}e.fromValue=g;var y=65536,v=1<<24,S=y*y,k=S*S,$=k/2,A=l(v),M=l(0);e.ZERO=M;var X=l(0,!0);e.UZERO=X;var z=l(1);e.ONE=z;var I=l(1,!0);e.UONE=I;var V=l(-1);e.NEG_ONE=V;var Z=f(-1,2147483647,!1);e.MAX_VALUE=Z;var re=f(-1,-1,!0);e.MAX_UNSIGNED_VALUE=re;var ie=f(0,-2147483648,!1);e.MIN_VALUE=ie;var F=e.prototype;return F.toInt=function(){return this.unsigned?this.low>>>0:this.low},F.toNumber=function(){return this.unsigned?(this.high>>>0)*S+(this.low>>>0):this.high*S+(this.low>>>0)},F.toString=function(_){if(_=_||10,_<2||36<_)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(ie)){var te=c(_),ue=this.div(te),pe=ue.mul(te).sub(this);return ue.toString(_)+pe.toInt().toString(_)}else return"-"+this.neg().toString(_);for(var fe=c(h(_,6),this.unsigned),G=this,P="";;){var Q=G.div(fe),oe=G.sub(Q.mul(fe)).toInt()>>>0,O=oe.toString(_);if(G=Q,G.isZero())return O+P;for(;O.length<6;)O="0"+O;P=""+O+P}},F.getHighBits=function(){return this.high},F.getHighBitsUnsigned=function(){return this.high>>>0},F.getLowBits=function(){return this.low},F.getLowBitsUnsigned=function(){return this.low>>>0},F.getNumBitsAbs=function(){if(this.isNegative())return this.eq(ie)?64:this.neg().getNumBitsAbs();for(var _=this.high!=0?this.high:this.low,te=31;te>0&&(_&1<<te)==0;te--);return this.high!=0?te+33:te+1},F.isZero=function(){return this.high===0&&this.low===0},F.eqz=F.isZero,F.isNegative=function(){return!this.unsigned&&this.high<0},F.isPositive=function(){return this.unsigned||this.high>=0},F.isOdd=function(){return(this.low&1)===1},F.isEven=function(){return(this.low&1)===0},F.equals=function(_){return a(_)||(_=g(_)),this.unsigned!==_.unsigned&&this.high>>>31===1&&_.high>>>31===1?!1:this.high===_.high&&this.low===_.low},F.eq=F.equals,F.notEquals=function(_){return!this.eq(_)},F.neq=F.notEquals,F.ne=F.notEquals,F.lessThan=function(_){return this.comp(_)<0},F.lt=F.lessThan,F.lessThanOrEqual=function(_){return this.comp(_)<=0},F.lte=F.lessThanOrEqual,F.le=F.lessThanOrEqual,F.greaterThan=function(_){return this.comp(_)>0},F.gt=F.greaterThan,F.greaterThanOrEqual=function(_){return this.comp(_)>=0},F.gte=F.greaterThanOrEqual,F.ge=F.greaterThanOrEqual,F.compare=function(_){if(a(_)||(_=g(_)),this.eq(_))return 0;var te=this.isNegative(),ue=_.isNegative();return te&&!ue?-1:!te&&ue?1:this.unsigned?_.high>>>0>this.high>>>0||_.high===this.high&&_.low>>>0>this.low>>>0?-1:1:this.sub(_).isNegative()?-1:1},F.comp=F.compare,F.negate=function(){return!this.unsigned&&this.eq(ie)?ie:this.not().add(z)},F.neg=F.negate,F.add=function(_){a(_)||(_=g(_));var te=this.high>>>16,ue=this.high&65535,pe=this.low>>>16,fe=this.low&65535,G=_.high>>>16,P=_.high&65535,Q=_.low>>>16,oe=_.low&65535,O=0,B=0,ae=0,se=0;return se+=fe+oe,ae+=se>>>16,se&=65535,ae+=pe+Q,B+=ae>>>16,ae&=65535,B+=ue+P,O+=B>>>16,B&=65535,O+=te+G,O&=65535,f(ae<<16|se,O<<16|B,this.unsigned)},F.subtract=function(_){return a(_)||(_=g(_)),this.add(_.neg())},F.sub=F.subtract,F.multiply=function(_){if(this.isZero())return M;if(a(_)||(_=g(_)),t){var te=t.mul(this.low,this.high,_.low,_.high);return f(te,t.get_high(),this.unsigned)}if(_.isZero())return M;if(this.eq(ie))return _.isOdd()?ie:M;if(_.eq(ie))return this.isOdd()?ie:M;if(this.isNegative())return _.isNegative()?this.neg().mul(_.neg()):this.neg().mul(_).neg();if(_.isNegative())return this.mul(_.neg()).neg();if(this.lt(A)&&_.lt(A))return c(this.toNumber()*_.toNumber(),this.unsigned);var ue=this.high>>>16,pe=this.high&65535,fe=this.low>>>16,G=this.low&65535,P=_.high>>>16,Q=_.high&65535,oe=_.low>>>16,O=_.low&65535,B=0,ae=0,se=0,ce=0;return ce+=G*O,se+=ce>>>16,ce&=65535,se+=fe*O,ae+=se>>>16,se&=65535,se+=G*oe,ae+=se>>>16,se&=65535,ae+=pe*O,B+=ae>>>16,ae&=65535,ae+=fe*oe,B+=ae>>>16,ae&=65535,ae+=G*Q,B+=ae>>>16,ae&=65535,B+=ue*O+pe*oe+fe*Q+G*P,B&=65535,f(se<<16|ce,B<<16|ae,this.unsigned)},F.mul=F.multiply,F.divide=function(_){if(a(_)||(_=g(_)),_.isZero())throw Error("division by zero");if(t){if(!this.unsigned&&this.high===-2147483648&&_.low===-1&&_.high===-1)return this;var te=(this.unsigned?t.div_u:t.div_s)(this.low,this.high,_.low,_.high);return f(te,t.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?X:M;var ue,pe,fe;if(this.unsigned){if(_.unsigned||(_=_.toUnsigned()),_.gt(this))return X;if(_.gt(this.shru(1)))return I;fe=X}else{if(this.eq(ie)){if(_.eq(z)||_.eq(V))return ie;if(_.eq(ie))return z;var G=this.shr(1);return ue=G.div(_).shl(1),ue.eq(M)?_.isNegative()?z:V:(pe=this.sub(_.mul(ue)),fe=ue.add(pe.div(_)),fe)}else if(_.eq(ie))return this.unsigned?X:M;if(this.isNegative())return _.isNegative()?this.neg().div(_.neg()):this.neg().div(_).neg();if(_.isNegative())return this.div(_.neg()).neg();fe=M}for(pe=this;pe.gte(_);){ue=Math.max(1,Math.floor(pe.toNumber()/_.toNumber()));for(var P=Math.ceil(Math.log(ue)/Math.LN2),Q=P<=48?1:h(2,P-48),oe=c(ue),O=oe.mul(_);O.isNegative()||O.gt(pe);)ue-=Q,oe=c(ue,this.unsigned),O=oe.mul(_);oe.isZero()&&(oe=z),fe=fe.add(oe),pe=pe.sub(O)}return fe},F.div=F.divide,F.modulo=function(_){if(a(_)||(_=g(_)),t){var te=(this.unsigned?t.rem_u:t.rem_s)(this.low,this.high,_.low,_.high);return f(te,t.get_high(),this.unsigned)}return this.sub(this.div(_).mul(_))},F.mod=F.modulo,F.rem=F.modulo,F.not=function(){return f(~this.low,~this.high,this.unsigned)},F.and=function(_){return a(_)||(_=g(_)),f(this.low&_.low,this.high&_.high,this.unsigned)},F.or=function(_){return a(_)||(_=g(_)),f(this.low|_.low,this.high|_.high,this.unsigned)},F.xor=function(_){return a(_)||(_=g(_)),f(this.low^_.low,this.high^_.high,this.unsigned)},F.shiftLeft=function(_){return a(_)&&(_=_.toInt()),(_&=63)===0?this:_<32?f(this.low<<_,this.high<<_|this.low>>>32-_,this.unsigned):f(0,this.low<<_-32,this.unsigned)},F.shl=F.shiftLeft,F.shiftRight=function(_){return a(_)&&(_=_.toInt()),(_&=63)===0?this:_<32?f(this.low>>>_|this.high<<32-_,this.high>>_,this.unsigned):f(this.high>>_-32,this.high>=0?0:-1,this.unsigned)},F.shr=F.shiftRight,F.shiftRightUnsigned=function(_){if(a(_)&&(_=_.toInt()),_&=63,_===0)return this;var te=this.high;if(_<32){var ue=this.low;return f(ue>>>_|te<<32-_,te>>>_,this.unsigned)}else return _===32?f(te,0,this.unsigned):f(te>>>_-32,0,this.unsigned)},F.shru=F.shiftRightUnsigned,F.shr_u=F.shiftRightUnsigned,F.toSigned=function(){return this.unsigned?f(this.low,this.high,!1):this},F.toUnsigned=function(){return this.unsigned?this:f(this.low,this.high,!0)},F.toBytes=function(_){return _?this.toBytesLE():this.toBytesBE()},F.toBytesLE=function(){var _=this.high,te=this.low;return[te&255,te>>>8&255,te>>>16&255,te>>>24,_&255,_>>>8&255,_>>>16&255,_>>>24]},F.toBytesBE=function(){var _=this.high,te=this.low;return[_>>>24,_>>>16&255,_>>>8&255,_&255,te>>>24,te>>>16&255,te>>>8&255,te&255]},e.fromBytes=function(_,te,ue){return ue?e.fromBytesLE(_,te):e.fromBytesBE(_,te)},e.fromBytesLE=function(_,te){return new e(_[0]|_[1]<<8|_[2]<<16|_[3]<<24,_[4]|_[5]<<8|_[6]<<16|_[7]<<24,te)},e.fromBytesBE=function(_,te){return new e(_[4]<<24|_[5]<<16|_[6]<<8|_[7],_[0]<<24|_[1]<<16|_[2]<<8|_[3],te)},Pf}var nv=m3();const av=Vh(nv),g3=iE({__proto__:null,default:av},[nv]);/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ps=av||g3;function ao(t){return ps.fromString(t,!0,16)}const sv=ao("c3a5c85c97cb3127"),ds=ao("b492b66fbe98f273"),At=ao("9ae16a3b2f90404f");function fh(t){return t.xor(t.shru(47))}function rv(t,e,a){const r=t.slice(e,e+a);return ps.fromBytes(Array.from(r),!0,!0)}function Ke(t,e){return rv(t,e,8)}function h0(t,e){return rv(t,e,4)}function ft(t,e){return e===0?t:t.shru(e).or(t.shl(64-e))}function Ma(t,e,a=ao("9ddfea08eb382d69")){let r=t.xor(e).mul(a);r=r.xor(r.shru(47));let i=e.xor(r).mul(a);return i=i.xor(i.shru(47)),i=i.mul(a),i}function y3(t,e,a,r,i,l){i=i.add(t),l=ft(l.add(i).add(r),21);const c=i;return i=i.add(e),i=i.add(a),l=l.add(ft(i,44)),[i.add(r),l.add(c)]}function $l(t,e,a,r){return y3(Ke(t,e),Ke(t,e+8),Ke(t,e+16),Ke(t,e+24),a,r)}function b3(t,e=t.length){if(e>=8){const a=At.add(e*2),r=Ke(t,0).add(At),i=Ke(t,e-8),l=ft(i,37).mul(a).add(r),c=ft(r,25).add(i).mul(a);return Ma(l,c,a)}if(e>=4){const a=At.add(e*2),r=h0(t,0);return Ma(r.shl(3).add(e),h0(t,e-4),a)}if(e>0){const a=t[0],r=t[e>>1],i=t[e-1],l=a+(r<<8),c=e+(i<<2);return fh(At.mul(l).xor(sv.mul(c))).mul(At)}return At}function v3(t,e=t.length){const a=At.add(e*2),r=Ke(t,0).mul(ds),i=Ke(t,8),l=Ke(t,e-8).mul(a),c=Ke(t,e-16).mul(At);return Ma(ft(r.add(i),43).add(ft(l,30)).add(c),r.add(ft(i.add(At),18)).add(l),a)}function w3(t,e=t.length){const a=At.add(e*2),r=Ke(t,0).mul(At),i=Ke(t,8),l=Ke(t,e-8).mul(a),c=Ke(t,e-16).mul(At),f=ft(r.add(i),43).add(ft(l,30)).add(c),h=Ma(f,r.add(ft(i.add(At),18)).add(l),a),p=Ke(t,16).mul(a),g=Ke(t,24),y=f.add(Ke(t,e-32)).mul(a),v=h.add(Ke(t,e-24)).mul(a);return Ma(ft(p.add(g),43).add(ft(y,30)).add(v),p.add(ft(g.add(r),18)).add(y),a)}function S3(t,e=t.length){const a=ps.fromNumber(81,!0);if(e<=32)return e<=16?b3(t,e):v3(t,e);if(e<=64)return w3(t,e);let r=a,i=a.mul(ds).add(113),l=fh(i.mul(At).add(113)).mul(At),c=[ps.UZERO,ps.UZERO],f=[ps.UZERO,ps.UZERO];r=r.mul(At).add(Ke(t,0));let h=0;const p=(e-1>>6)*64,g=p+(e-1&63)-63;do r=ft(r.add(i).add(c[0]).add(Ke(t,h+8)),37).mul(ds),i=ft(i.add(c[1]).add(Ke(t,h+48)),42).mul(ds),r=r.xor(f[1]),i=i.add(c[0]).add(Ke(t,h+40)),l=ft(l.add(f[0]),33).mul(ds),c=$l(t,h,c[1].mul(ds),r.add(f[0])),f=$l(t,h+32,l.add(f[1]),i.add(Ke(t,h+16))),[l,r]=[r,l],h+=64;while(h!==p);const y=ds.add(l.and(255).shl(1));return h=g,f[0]=f[0].add(e-1&63),c[0]=c[0].add(f[0]),f[0]=f[0].add(c[0]),r=ft(r.add(i).add(c[0]).add(Ke(t,h+8)),37).mul(y),i=ft(i.add(c[1]).add(Ke(t,h+48)),42).mul(y),r=r.xor(f[1].mul(9)),i=i.add(c[0].mul(9).add(Ke(t,h+40))),l=ft(l.add(f[0]),33).mul(y),c=$l(t,h,c[1].mul(y),r.add(f[0])),f=$l(t,h+32,l.add(f[1]),i.add(Ke(t,h+16))),[l,r]=[r,l],Ma(Ma(c[0],f[0],y).add(fh(i).mul(sv)).add(l),Ma(c[1],f[1],y).add(r),y)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function N3(t,e){return e==="string"?so(t):lu([t],e)}function x3(t,e){return t instanceof Float32Array&&e==="float32"||t instanceof Int32Array&&e==="int32"||t instanceof Uint8Array&&e==="bool"}function lu(t,e){if(e==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(t)&&(t=Ba(t)),ve().getBool("DEBUG")&&ab(t,e),x3(t,e))return t;if(e==null||e==="float32"||e==="complex64")return new Float32Array(t);if(e==="int32")return new Int32Array(t);if(e==="bool"){const a=new Uint8Array(t.length);for(let r=0;r<a.length;++r)Math.round(t[r])!==0&&(a[r]=1);return a}else throw new Error(`Unknown data type ${e}`)}function Hi(){return ve().platform.now()}function T3(t,e){return ve().platform.fetch(t,e)}function so(t,e="utf-8"){return e=e||"utf-8",ve().platform.encode(t,e)}function Pl(t,e="utf-8"){return e=e||"utf-8",ve().platform.decode(t,e)}function ht(t){return ve().platform.isTypedArray!=null?ve().platform.isTypedArray(t):tv(t)}function Ba(t,e=[],a=!1){if(e==null&&(e=[]),typeof t=="boolean"||typeof t=="number"||typeof t=="string"||La(t)||t==null||ht(t)&&a)e.push(t);else if(Array.isArray(t)||ht(t))for(let r=0;r<t.length;++r)Ba(t[r],e,a);else{let r=-1;for(const i of Object.keys(t))/^([1-9]+[0-9]*|0)$/.test(i)&&(r=Math.max(r,Number(i)));for(let i=0;i<=r;i++)Ba(t[i],e,a)}return e}const E3=Object.freeze(Object.defineProperty({__proto__:null,arraysEqual:Nn,arraysEqualWithNull:eb,assert:E,assertNonNegativeIntegerDimensions:Gt,assertNonNull:_s,assertShapesMatch:Dt,bytesFromStringArray:rb,bytesPerElement:Gl,checkConversionForErrors:ab,clamp:qi,computeStrides:$r,convertBackendValuesAndArrayBuffer:ME,createScalarValue:N3,createShuffledIndices:RE,decodeString:Pl,distSquared:AE,encodeString:so,fetch:T3,fingerPrint64:S3,flatten:Ba,getArrayFromDType:Gh,getTypedArrayFromDType:nb,hasEncodingLoss:jE,hexToLong:ao,indexToLoc:BE,inferDtype:no,inferFromImplicitShape:zE,isBoolean:ib,isFunction:Ia,isInt:Nr,isNumber:ob,isPromise:La,isScalarShape:OE,isString:Ca,isTypedArray:ht,isValidDtype:sb,locToIndex:LE,makeOnesTypedArray:Kh,makeZerosNestedTypedArray:IE,makeZerosTypedArray:ou,nearestDivisor:Kl,nearestLargerEven:EE,now:Hi,parseAxisParam:to,randUniform:_E,repeatedTry:CE,rightPad:Bi,shuffle:J0,shuffleCombo:TE,sizeFromShape:Ue,sizeToSquarishShape:DE,squeezeShape:tb,sum:kE,swap:Hl,tanh:$E,toNestedArray:bs,toTypedArray:lu},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class k3{constructor(e,a){this.backendTimer=e,this.logger=a,a==null&&(this.logger=new A3)}profileKernel(e,a,r){let i;const l=()=>{i=r()};let c;const f=Hi();if(this.backendTimer.timerAvailable())c=this.backendTimer.time(l);else{l();for(const p of i)p.dataSync();c=Promise.resolve({kernelMs:Hi()-f})}if(ve().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let p=0;p<i.length;p++){const g=i[p];g.data().then(y=>{_3(y,g.dtype,e)})}return{kernelName:e,outputs:i,inputs:a,timeMs:c.then(p=>p.kernelMs),extraInfo:c.then(p=>p.getExtraProfileInfo!=null?p.getExtraProfileInfo():"")}}logKernelProfile(e){const{kernelName:a,outputs:r,timeMs:i,inputs:l,extraInfo:c}=e;r.forEach(f=>{Promise.all([f.data(),i,c]).then(h=>{this.logger.logKernelProfile(a,f,h[0],h[1],l,h[2])})})}}function _3(t,e,a){if(e!=="float32")return!1;for(let r=0;r<t.length;r++){const i=t[r];if(isNaN(i)||!isFinite(i))return console.warn(`Found ${i} in the result of '${a}'`),!0}return!1}class A3{logKernelProfile(e,a,r,i,l,c){const f=typeof i=="number"?Bi(`${i}ms`,9):i.error,h=Bi(e,25),p=a.rank,g=a.size,y=Bi(a.shape.toString(),14);let v="";for(const S in l){const k=l[S];if(k!=null){const $=k.shape||a.shape,A=$.length;v+=`${S}: ${A}D ${A>0?$:""} `}}console.log(`%c${h}	%c${f}	%c${p}D ${y}	%c${g}	%c${v}	%c${c}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function O3(t,e,a){const r={},i={};for(let h=0;h<e.length;h++)r[e[h].id]=!0;for(let h=0;h<t.length;h++){const p=t[h],g=p.inputs;for(const y in g){const v=g[y];let S=!1;for(let k=0;k<e.length;k++)if(r[v.id]){p.outputs.forEach($=>r[$.id]=!0),S=!0,i[p.id]=!0;break}if(S)break}}const l={};l[a.id]=!0;const c={};for(let h=t.length-1;h>=0;h--){const p=t[h],g=p.inputs;for(let y=0;y<p.outputs.length;y++)if(l[p.outputs[y].id]){for(const v in g)l[g[v].id]=!0,c[p.id]=!0;break}}const f=[];for(let h=0;h<t.length;h++){const p=t[h];if(i[p.id]&&c[p.id]){const g={};for(const v in p.inputs){const S=p.inputs[v];r[S.id]&&(g[v]=S)}const y=Object.assign({},p);y.inputs=g,y.outputs=p.outputs,f.push(y)}}return f}function $3(t,e,a,r){for(let i=e.length-1;i>=0;i--){const l=e[i],c=[];if(l.outputs.forEach(h=>{const p=t[h.id];p!=null?c.push(p):c.push(null)}),l.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${l.kernelName}.`);const f=l.gradient(c);for(const h in l.inputs){if(!(h in f))throw new Error(`Cannot backprop through input ${h}. Available gradients found: ${Object.keys(f)}.`);const p=a(()=>f[h]());if(p.dtype!=="float32")throw new Error(`Error in gradient for op ${l.kernelName}. The gradient of input ${h} must have 'float32' dtype, but has '${p.dtype}'`);const g=l.inputs[h];if(!Nn(p.shape,g.shape))throw new Error(`Error in gradient for op ${l.kernelName}. The gradient of input '${h}' has shape '${p.shape}', which does not match the shape of the input '${g.shape}'`);if(t[g.id]==null)t[g.id]=p;else{const y=t[g.id];t[g.id]=r(y,p),y.dispose()}}}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const d0=20,ji=3,Xf=7;function D3(t,e,a,r){const i=$r(e),l=R3(t,e,a,i),c=e.length,f=zl(t,e,a,i,l),h=["Tensor"];return r&&(h.push(`  dtype: ${a}`),h.push(`  rank: ${c}`),h.push(`  shape: [${e}]`),h.push("  values:")),h.push(f.map(p=>"    "+p).join(`
`)),h.join(`
`)}function R3(t,e,a,r){const i=Ue(e),l=r[r.length-1],c=new Array(l).fill(0),f=e.length,h=a==="complex64"?Li(t):t;if(f>1)for(let p=0;p<i/l;p++){const g=p*l;for(let y=0;y<l;y++)c[y]=Math.max(c[y],Ii(h[g+y],0,a).length)}return c}function Ii(t,e,a){let r;return Array.isArray(t)?r=`${parseFloat(t[0].toFixed(Xf))} + ${parseFloat(t[1].toFixed(Xf))}j`:Ca(t)?r=`'${t}'`:a==="bool"?r=iv(t):r=parseFloat(t.toFixed(Xf)).toString(),Bi(r,e)}function iv(t){return t===0?"false":"true"}function zl(t,e,a,r,i,l=!0){const c=a==="complex64"?2:1,f=e[0],h=e.length;if(h===0){if(a==="complex64"){const $=Li(t);return[Ii($[0],0,a)]}return a==="bool"?[iv(t[0])]:[t[0].toString()]}if(h===1){if(f>d0){const A=ji*c;let M=Array.from(t.slice(0,A)),X=Array.from(t.slice((f-ji)*c,f*c));return a==="complex64"&&(M=Li(M),X=Li(X)),["["+M.map((z,I)=>Ii(z,i[I],a)).join(", ")+", ..., "+X.map((z,I)=>Ii(z,i[f-ji+I],a)).join(", ")+"]"]}return["["+(a==="complex64"?Li(t):Array.from(t)).map((A,M)=>Ii(A,i[M],a)).join(", ")+"]"]}const p=e.slice(1),g=r.slice(1),y=r[0]*c,v=[];if(f>d0){for(let $=0;$<ji;$++){const A=$*y,M=A+y;v.push(...zl(t.slice(A,M),p,a,g,i,!1))}v.push("...");for(let $=f-ji;$<f;$++){const A=$*y,M=A+y;v.push(...zl(t.slice(A,M),p,a,g,i,$===f-1))}}else for(let $=0;$<f;$++){const A=$*y,M=A+y;v.push(...zl(t.slice(A,M),p,a,g,i,$===f-1))}const S=h===2?",":"";v[0]="["+(f>0?v[0]+S:"");for(let $=1;$<v.length-1;$++)v[$]=" "+v[$]+S;let k=`,
`;for(let $=2;$<h;$++)k+=`
`;return v[v.length-1]=" "+v[v.length-1]+"]"+(l?"":k),v}function Li(t){const e=[];for(let a=0;a<t.length;a+=2)e.push([t[a],t[a+1]]);return e}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Xl{constructor(e,a,r){if(this.dtype=a,this.shape=e.slice(),this.size=Ue(e),r!=null){const i=r.length;E(i===this.size,()=>`Length of values '${i}' does not match the size inferred by the shape '${this.size}'.`)}if(a==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=r||Gh(a,this.size),this.strides=$r(e)}set(e,...a){a.length===0&&(a=[0]),E(a.length===this.rank,()=>`The number of provided coordinates (${a.length}) must match the rank (${this.rank})`);const r=this.locToIndex(a);this.values[r]=e}get(...e){e.length===0&&(e=[0]);let a=0;for(const i of e){if(i<0||i>=this.shape[a]){const l=`Requested out of range element at ${e}.   Buffer shape=${this.shape}`;throw new Error(l)}a++}let r=e[e.length-1];for(let i=0;i<e.length-1;++i)r+=this.strides[i]*e[i];return this.values[r]}locToIndex(e){if(this.rank===0)return 0;if(this.rank===1)return e[0];let a=e[e.length-1];for(let r=0;r<e.length-1;++r)a+=this.strides[r]*e[r];return a}indexToLoc(e){if(this.rank===0)return[];if(this.rank===1)return[e];const a=new Array(this.shape.length);for(let r=0;r<a.length-1;++r)a[r]=Math.floor(e/this.strides[r]),e-=a[r]*this.strides[r];return a[a.length-1]=e,a}get rank(){return this.shape.length}toTensor(){return bn().makeTensor(this.values,this.shape,this.dtype)}}let bn=null,pr=null;function C3(t){bn=t}function z3(t){pr=t}class Je{constructor(e,a,r,i){this.kept=!1,this.isDisposedInternal=!1,this.shape=e.slice(),this.dtype=a||"float32",this.size=Ue(e),this.strides=$r(e),this.dataId=r,this.id=i,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const e=await this.data();return pr.buffer(this.shape,this.dtype,e)}bufferSync(){return pr.buffer(this.shape,this.dtype,this.dataSync())}async array(){const e=await this.data();return bs(this.shape,e,this.dtype==="complex64")}arraySync(){return bs(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();const e=bn().read(this.dataId);if(this.dtype==="string"){const a=await e;try{return a.map(r=>Pl(r))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return e}dataToGPU(e){return this.throwIfDisposed(),bn().readToGPU(this.dataId,e)}dataSync(){this.throwIfDisposed();const e=bn().readSync(this.dataId);if(this.dtype==="string")try{return e.map(a=>Pl(a))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return e}async bytes(){this.throwIfDisposed();const e=await bn().read(this.dataId);return this.dtype==="string"?e:new Uint8Array(e.buffer)}dispose(){this.isDisposed||(this.kerasMask&&this.kerasMask.dispose(),bn().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(e=!1){return pr.print(this,e)}clone(){return this.throwIfDisposed(),pr.clone(this)}toString(e=!1){const a=this.dataSync();return D3(a,this.shape,this.dtype,e)}cast(e){return this.throwIfDisposed(),pr.cast(this,e)}variable(e=!0,a,r){return this.throwIfDisposed(),bn().makeVariable(this,e,a,r)}}Object.defineProperty(Je,Symbol.hasInstance,{value:t=>!!t&&t.data!=null&&t.dataSync!=null&&t.throwIfDisposed!=null});function ov(){return Ph("Tensor",()=>Je)}ov();class Gi extends Je{constructor(e,a,r,i){super(e.shape,e.dtype,e.dataId,i),this.trainable=a,this.name=r}assign(e){if(e.dtype!==this.dtype)throw new Error(`dtype of the new value (${e.dtype}) and previous value (${this.dtype}) must match`);if(!Nn(e.shape,this.shape))throw new Error(`shape of the new value (${e.shape}) and previous value (${this.shape}) must match`);bn().disposeTensor(this),this.dataId=e.dataId,bn().incRef(this,null)}dispose(){bn().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(Gi,Symbol.hasInstance,{value:t=>t instanceof Je&&t.assign!=null&&t.assign instanceof Function});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var hh;(function(t){t.R0="R0",t.R1="R1",t.R2="R2",t.R3="R3",t.R4="R4",t.R5="R5",t.R6="R6"})(hh||(hh={}));var dh;(function(t){t.float32="float32",t.int32="int32",t.bool="int32",t.complex64="complex64"})(dh||(dh={}));var ph;(function(t){t.float32="float32",t.int32="int32",t.bool="bool",t.complex64="complex64"})(ph||(ph={}));var mh;(function(t){t.float32="float32",t.int32="float32",t.bool="float32",t.complex64="complex64"})(mh||(mh={}));var gh;(function(t){t.float32="complex64",t.int32="complex64",t.bool="complex64",t.complex64="complex64"})(gh||(gh={}));const j3={float32:mh,int32:dh,bool:ph,complex64:gh};function uu(t,e){if(t==="string"||e==="string"){if(t==="string"&&e==="string")return"string";throw new Error(`Can not upcast ${t} with ${e}`)}return j3[t][e]}function M3(t){return uu(t,"int32")}function lv(t){return t!=null&&typeof t=="object"&&"texture"in t&&t.texture instanceof WebGLTexture}function uv(t){return typeof GPUBuffer<"u"&&t!=null&&typeof t=="object"&&"buffer"in t&&t.buffer instanceof GPUBuffer}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function et(t,e){if(t.dtype===e.dtype)return[t,e];const a=uu(t.dtype,e.dtype);return[t.cast(a),e.cast(a)]}function cv(t,e){E(t.dtype===e.dtype,()=>`The dtypes of the first(${t.dtype}) and second(${e.dtype}) input must match`)}function I3(t,e){return e.some(a=>a.id===t.id)}function td(t){const e=[];return fv(t,e,new Set),e}function fv(t,e,a){if(t==null)return;if(t instanceof Je){e.push(t);return}if(!L3(t))return;const r=t;for(const i in r){const l=r[i];a.has(l)||(a.add(l),fv(l,e,a))}}function L3(t){return Array.isArray(t)||typeof t=="object"}const B3=Object.freeze(Object.defineProperty({__proto__:null,assertTypesMatch:cv,getTensorsInContainer:td,isTensorInList:I3,makeTypesMatch:et},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zf(t){return t.kernelName!=null}class p0{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(e=>e.name)))}}}dispose(){for(const e in this.registeredVariables)this.registeredVariables[e].dispose()}}class Tr{constructor(e){this.ENV=e,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new p0}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;const e=this.getSortedBackends();for(let a=0;a<e.length;a++){const r=e[a];if(await this.initializeBackend(r).success){await this.setBackend(r);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){const{name:e,asyncInit:a}=this.initializeBackendsAndReturnBest();if(a)throw new Error(`The highest priority backend '${e}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(e)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(e){if(!(e in this.registry))if(e in this.registryFactory){const{asyncInit:a}=this.initializeBackend(e);if(a)return null}else return null;return this.registry[e]}findBackendFactory(e){return e in this.registryFactory?this.registryFactory[e].factory:null}registerBackend(e,a,r=1){return e in this.registryFactory?(Da(`${e} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[e]={factory:a,priority:r},!0)}async setBackend(e){if(this.registryFactory[e]==null)throw new Error(`Backend name '${e}' not found in registry`);if(this.backendName=e,this.registry[e]==null){this.backendInstance=null;const{success:a,asyncInit:r}=this.initializeBackend(e);if(!(r?await a:a))return!1}return this.backendInstance=this.registry[e],this.setupRegisteredKernels(),this.profiler=new k3(this.backendInstance),!0}setupRegisteredKernels(){Yl(this.backendName).forEach(a=>{a.setupFunc!=null&&a.setupFunc(this.backendInstance)})}disposeRegisteredKernels(e){Yl(e).forEach(r=>{r.disposeFunc!=null&&r.disposeFunc(this.registry[e])})}initializeBackend(e){const a=this.registryFactory[e];if(a==null)throw new Error(`Cannot initialize backend ${e}, no registration found.`);try{const r=a.factory();if(r&&!(r instanceof Q0)&&typeof r.then=="function"){const i=++this.pendingBackendInitId,l=r.then(c=>i<this.pendingBackendInitId?!1:(this.registry[e]=c,this.pendingBackendInit=null,!0)).catch(c=>(i<this.pendingBackendInitId||(this.pendingBackendInit=null,Da(`Initialization of backend ${e} failed`),Da(c.stack||c.message)),!1));return this.pendingBackendInit=l,{success:l,asyncInit:!0}}else return this.registry[e]=r,{success:!0,asyncInit:!1}}catch(r){return Da(`Initialization of backend ${e} failed`),Da(r.stack||r.message),{success:!1,asyncInit:!1}}}removeBackend(e){if(!(e in this.registryFactory))throw new Error(`${e} backend not found in registry`);this.backendName===e&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,e in this.registry&&(this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e]),delete this.registryFactory[e],this.backendName===e&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((e,a)=>this.registryFactory[a].priority-this.registryFactory[e].priority)}initializeBackendsAndReturnBest(){const e=this.getSortedBackends();for(let a=0;a<e.length;a++){const r=e[a],{success:i,asyncInit:l}=this.initializeBackend(r);if(l||i)return{name:r,asyncInit:l}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(e,a){const r=this.state.tensorInfo.get(a),i=r.backend,l=this.readSync(a),c=i.refCount(a);i.disposeData(a,!0),r.backend=e,e.move(a,l,r.shape,r.dtype,c),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(e,a){let r=null;if(a==null){if(typeof e!="function")throw new Error("Please provide a function to tidy()");a=e}else{if(typeof e!="string"&&!(e instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof a!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");r=e}let i;return this.scopedRun(()=>this.startScope(r),()=>this.endScope(i),()=>(i=a(),i instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),i))}scopedRun(e,a,r){e();try{const i=r();return a(),i}catch(i){throw a(),i}}nextTensorId(){return Tr.nextTensorId++}nextVariableId(){return Tr.nextVariableId++}clone(e){const a=C.runKernel(Qh,{x:e}),r={x:e},i=c=>({x:()=>{const f="float32",h={x:c},p={dtype:f};return C.runKernel(Zh,h,p)}}),l=[];return this.addTapeNode(this.state.activeScope.name,r,[a],i,l,{}),a}runKernel(e,a,r){if(this.backendName==null&&this.backend,!(Vi(e,this.backendName)!=null))throw new Error(`Kernel '${e}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:e,inputs:a,attrs:r})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(e,a,r){const i=this.backend.numDataIds();let l=0;r.forEach(h=>{l+=h.dtype==="complex64"?3:1});const c=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],f=i-a-l-c;if(f>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${f} data ids) after running '${e}'`)}runKernelFunc(e){let a,r=[];const i=this.isTapeOn(),l=this.state.numBytes,c=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let f;this.backendName==null&&this.backend;let h;const p=Zf(e)?e.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(Zf(e)){const{kernelName:k,inputs:$,attrs:A}=e;this.backendName==null&&this.backend;const M=Vi(k,this.backendName);E(M!=null,()=>`Cannot find registered kernel '${k}' for backend '${this.backendName}'`),f=()=>{const X=this.backend.numDataIds();h=M.kernelFunc({inputs:$,attrs:A,backend:this.backend});const z=Array.isArray(h)?h:[h];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(k,X,z);const I=z.map(V=>V.rank!=null?V:this.makeTensorFromTensorInfo(V));if(i){const V=this.getTensorsForGradient(k,$,I);r=this.saveTensorsForBackwardMode(V)}return I}}else{const{forwardFunc:k}=e,$=A=>{i&&(r=A.map(M=>this.keep(this.clone(M))))};f=()=>{const A=this.backend.numDataIds();h=this.tidy(()=>k(this.backend,$));const M=Array.isArray(h)?h:[h];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(p,A,M),M}}const{inputs:g,attrs:y}=e,v=Zf(e)?null:e.backwardsFunc;let S;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?a=f():(S=this.profiler.profileKernel(p,g,()=>f()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(S),a=S.outputs)}),i&&this.addTapeNode(p,g,a,v,r,y),this.state.profiling&&this.state.activeProfile.kernels.push({name:p,bytesAdded:this.state.numBytes-l,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-c,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(g).map(k=>g[k]!=null?g[k].shape:null),outputShapes:a.map(k=>k.shape),kernelTimeMs:S.timeMs,extraInfo:S.extraInfo}),Array.isArray(h)?a:a[0]}saveTensorsForBackwardMode(e){return e.map(r=>this.keep(this.clone(r)))}getTensorsForGradient(e,a,r){const i=ch(e);if(i!=null){const l=i.inputsToSave||[],c=i.outputsToSave||[];let f;i.saveAllInputs?(E(Array.isArray(a),()=>"saveAllInputs is true, expected inputs to be an array."),f=Object.keys(a).map(p=>a[p])):f=l.map(p=>a[p]);const h=r.filter((p,g)=>c[g]);return f.concat(h)}return[]}makeTensor(e,a,r,i){if(e==null)throw new Error("Values passed to engine.makeTensor() are null");r=r||"float32",i=i||this.backend;let l=e;r==="string"&&Ca(e[0])&&(l=e.map(h=>so(h)));const c=i.write(l,a,r),f=new Je(a,r,c,this.nextTensorId());if(this.trackTensor(f,i),r==="string"){const h=this.state.tensorInfo.get(c),p=rb(l);this.state.numBytes+=p-h.bytes,h.bytes=p}return f}makeTensorFromDataId(e,a,r,i){r=r||"float32";const l={dataId:e,shape:a,dtype:r};return this.makeTensorFromTensorInfo(l,i)}makeTensorFromTensorInfo(e,a){const{dataId:r,shape:i,dtype:l}=e,c=new Je(i,l,r,this.nextTensorId());return this.trackTensor(c,a),c}makeVariable(e,a=!0,r,i){r=r||this.nextVariableId().toString(),i!=null&&i!==e.dtype&&(e=e.cast(i));const l=new Gi(e,a,r,this.nextTensorId());if(this.state.registeredVariables[l.name]!=null)throw new Error(`Variable with name ${l.name} was already registered`);return this.state.registeredVariables[l.name]=l,this.incRef(l,this.backend),l}trackTensor(e,a){this.state.numTensors++,e.dtype==="string"&&this.state.numStringTensors++;let r=0;e.dtype!=="complex64"&&e.dtype!=="string"&&(r=e.size*Gl(e.dtype)),this.state.numBytes+=r,this.state.tensorInfo.has(e.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(e.dataId,{backend:a||this.backend,dtype:e.dtype,shape:e.shape,bytes:r})),e instanceof Gi||this.track(e)}incRef(e,a){this.trackTensor(e,a),this.backend.incRef(e.dataId)}removeDataId(e,a){this.state.tensorInfo.has(e)&&this.state.tensorInfo.get(e).backend===a&&(this.state.tensorInfo.delete(e),this.state.numDataBuffers--)}disposeTensor(e){if(!this.state.tensorInfo.has(e.dataId))return;const a=this.state.tensorInfo.get(e.dataId);if(this.state.numTensors--,e.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=a.bytes),e.dtype!=="complex64"&&e.dtype!=="string"){const r=e.size*Gl(e.dtype);this.state.numBytes-=r}a.backend.disposeData(e.dataId)&&this.removeDataId(e.dataId,a.backend)}disposeVariables(){for(const e in this.state.registeredVariables){const a=this.state.registeredVariables[e];this.disposeVariable(a)}}disposeVariable(e){this.disposeTensor(e),this.state.registeredVariables[e.name]!=null&&delete this.state.registeredVariables[e.name]}memory(){const e=this.backend.memory();return e.numTensors=this.state.numTensors,e.numDataBuffers=this.state.numDataBuffers,e.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(e.unreliable=!0,e.reasons==null&&(e.reasons=[]),e.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),e}async profile(e){this.state.profiling=!0;const a=this.state.numBytes,r=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await e(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(i=>i.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-a,this.state.activeProfile.newTensors=this.state.numTensors-r;for(const i of this.state.activeProfile.kernels)i.kernelTimeMs=await i.kernelTimeMs,i.extraInfo=await i.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(e,a,r,i,l,c){const f={id:this.state.nextTapeNodeId++,kernelName:e,inputs:a,outputs:r,saved:l},h=ch(e);h!=null&&(i=h.gradFunc),i!=null&&(f.gradient=p=>(p=p.map((g,y)=>{if(g==null){const v=r[y],S=ou(v.size,v.dtype);return this.makeTensor(S,v.shape,v.dtype)}return g}),i(p.length>1?p:p[0],l,c))),this.state.activeTape.push(f)}keep(e){return e.kept=!0,e}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(e){const a={track:[],name:"unnamed scope",id:this.state.nextScopeId++};e&&(a.name=e),this.state.scopeStack.push(a),this.state.activeScope=a}endScope(e){const a=td(e),r=new Set(a.map(l=>l.id));for(let l=0;l<this.state.activeScope.track.length;l++){const c=this.state.activeScope.track[l];!c.kept&&!r.has(c.id)&&c.dispose()}const i=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],a.forEach(l=>{!l.kept&&l.scopeId===i.id&&this.track(l)})}gradients(e,a,r,i=!1){if(E(a.length>0,()=>"gradients() received an empty list of xs."),r!=null&&r.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${r.dtype}'`);const l=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",e));E(l instanceof Je,()=>"The result y returned by f() must be a tensor.");const c=O3(this.state.activeTape,a,l);if(!i&&c.length===0&&a.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const f={};f[l.id]=r??U3(l.shape),$3(f,c,p=>this.tidy(p),q3);const h=a.map(p=>f[p.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(p=>{for(const g of p.saved)g.dispose()}),this.state.activeTape=null),{value:l,grads:h}})}customGrad(e){return E(Ia(e),()=>"The f passed in customGrad(f) must be a function."),(...a)=>{E(a.every(f=>f instanceof Je),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let r;const i={};a.forEach((f,h)=>{i[h]=f});const l=(f,h)=>(r=e(...a,h),E(r.value instanceof Je,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),E(Ia(r.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),r.value),c=(f,h)=>{const p=r.gradFunc(f,h),g=Array.isArray(p)?p:[p];E(g.length===a.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),E(g.every(v=>v instanceof Je),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const y={};return g.forEach((v,S)=>{y[S]=()=>v}),y};return this.runKernelFunc({forwardFunc:l,backwardsFunc:c,inputs:i})}}readSync(e){return this.state.tensorInfo.get(e).backend.readSync(e)}read(e){return this.state.tensorInfo.get(e).backend.read(e)}readToGPU(e,a){return this.state.tensorInfo.get(e).backend.readToGPU(e,a)}async time(e){const a=Hi(),r=await this.backend.time(e);return r.wallMs=Hi()-a,r}track(e){return this.state.activeScope!=null&&(e.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(e)),e}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new p0;for(const e in this.registry)this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}Tr.nextTensorId=0;Tr.nextVariableId=0;function U3(t){const e=Kh(Ue(t),"float32");return C.makeTensor(e,t,"float32")}function hv(){const t=cb();if(t._tfengine==null){const e=new ub(t);t._tfengine=new Tr(e)}return VE(t._tfengine.ENV),C3(()=>t._tfengine),t._tfengine}const C=hv();function q3(t,e){const a={a:t,b:e};return C.runKernel(Xh,a)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function F3(){return typeof navigator<"u"&&navigator!=null}let yh;function V3(t){yh=t}function H3(t){if(yh!==void 0)return yh;if(t||F3()){if(t||(t=navigator),t.product==="ReactNative")return!0;const e=t.userAgent||t.vendor||(typeof window<"u"?window.opera:"");if(!e){const a=t;return a.userAgentData&&a.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4))}return!1}function dv(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}const G3=Object.freeze(Object.defineProperty({__proto__:null,isBrowser:dv,isMobile:H3,mockIsMobile:V3},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ct=ve();Ct.registerFlag("DEBUG",()=>!1,t=>{t&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")});Ct.registerFlag("IS_BROWSER",()=>dv());Ct.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u");Ct.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor));Ct.registerFlag("IS_SAFARI",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor));Ct.registerFlag("PROD",()=>!1);Ct.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>Ct.getBool("DEBUG"));Ct.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0);Ct.registerFlag("IS_TEST",()=>!1);Ct.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>Ct.getBool("DEBUG"));Ct.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1);Ct.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1);Ct.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dn(t,e){let a=t;if(ht(t))return e==="string"?[]:[t.length];if(lv(t)){const i=t.channels||"RGBA";return[t.height,t.width*i.length]}else if(uv(t))return[t.buffer.size/(e==null?4:Gl(e))];if(!Array.isArray(t))return[];const r=[];for(;Array.isArray(a)||ht(a)&&e!=="string";)r.push(a.length),a=a[0];return Array.isArray(t)&&ve().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&pv(t,r,[]),r}function pv(t,e,a){if(a=a||[],!Array.isArray(t)&&!ht(t)){E(e.length===0,()=>`Element arr[${a.join("][")}] is a primitive, but should be an array/TypedArray of ${e[0]} elements`);return}E(e.length>0,()=>`Element arr[${a.join("][")}] should be a primitive, but is an array of ${t.length} elements`),E(t.length===e[0],()=>`Element arr[${a.join("][")}] should have ${e[0]} elements, but has ${t.length} elements`);const r=e.slice(1);for(let i=0;i<t.length;++i)pv(t[i],r,a.concat(i))}function m0(t,e,a,r){if(t!=="string_or_numeric"){if(t==null)throw new Error("Expected dtype cannot be null.");if(t!=="numeric"&&t!==e||t==="numeric"&&e==="string")throw new Error(`Argument '${a}' passed to '${r}' must be ${t} tensor, but got ${e} tensor`)}}function x(t,e,a,r="numeric"){if(t instanceof ov())return m0(r,t.dtype,e,a),t;let i=no(t);if(i!=="string"&&["bool","int32","float32"].indexOf(r)>=0&&(i=r),m0(r,i,e,a),t==null||!ht(t)&&!Array.isArray(t)&&typeof t!="number"&&typeof t!="boolean"&&typeof t!="string"){const h=t==null?"null":t.constructor.name;throw new Error(`Argument '${e}' passed to '${a}' must be a Tensor or TensorLike, but got '${h}'`)}const l=Dn(t,i);!ht(t)&&!Array.isArray(t)&&(t=[t]);const f=i!=="string"?lu(t,i):Ba(t,[],!0);return C.makeTensor(f,l,i)}function Ki(t,e,a,r="numeric"){if(!Array.isArray(t))throw new Error(`Argument ${e} passed to ${a} must be a \`Tensor[]\` or \`TensorLike[]\``);return t.map((l,c)=>x(l,`${e}[${c}]`,a,r))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const nd="__op";function R(t){const e=Object.keys(t);if(e.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${e.length} keys.`);let a=e[0];const r=t[a];a.endsWith("_")&&(a=a.substring(0,a.length-1)),a=a+nd;const i=(...l)=>{C.startScope(a);try{const c=r(...l);return La(c)&&console.error("Cannot return a Promise inside of tidy."),C.endScope(c),c}catch(c){throw C.endScope(null),c}};return Object.defineProperty(i,"name",{value:a,configurable:!0}),i}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function K3(t,e){const a=x(t,"real","complex"),r=x(e,"imag","complex");Dt(a.shape,r.shape,`real and imag shapes, ${a.shape} and ${r.shape}, must match in call to tf.complex().`);const i={real:a,imag:r};return C.runKernel(Cb,i)}const aa=R({complex_:K3});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ha(t,e,a,r){if(r==null)r=no(t);else if(r==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(uv(t)||lv(t)){if(r!=="float32"&&r!=="int32")throw new Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${r}.`);return C.backend.createTensorFromGPUData(t,e||a,r)}if(!ht(t)&&!Array.isArray(t)&&typeof t!="number"&&typeof t!="boolean"&&typeof t!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(e!=null){Gt(e);const i=Ue(e),l=Ue(a);E(i===l,()=>`Based on the provided shape, [${e}], the tensor should have ${i} values but has ${l}`);for(let c=0;c<a.length;++c){const f=a[c],h=c===a.length-1?f!==Ue(e.slice(c)):!0;E(a[c]===e[c]||!h,()=>`Error creating a new Tensor. Inferred shape (${a}) does not match the provided shape (${e}). `)}}return!ht(t)&&!Array.isArray(t)&&(t=[t]),e=e||a,t=r!=="string"?lu(t,r):Ba(t,[],!0),C.makeTensor(t,e,r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wn(t,e,a){const r=Dn(t,a);return Ha(t,e,r,a)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ss={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};class xn{static join(e){return new xn(e).slice()}constructor(e){if(this.shards=[],this.previousShardIndex=0,e==null||(e instanceof Array||(e=[e]),e=e.map(r=>ht(r)?r.buffer:r),e.length===0))return;this.bufferUniformSize=e[0].byteLength;let a=0;for(let r=0;r<e.length;r++){const i=e[r];r!==e.length-1&&i.byteLength!==this.bufferUniformSize&&(this.bufferUniformSize=void 0);const l=a+i.byteLength;this.shards.push({buffer:i,start:a,end:l}),a=l}this.shards.length===0&&(this.byteLength=0),this.byteLength=this.shards[this.shards.length-1].end}slice(e=0,a=this.byteLength){if(this.shards.length===0)return new ArrayBuffer(0);if(e=isNaN(Number(e))?0:e,a=isNaN(Number(a))?0:a,e=Math.max(0,e),a=Math.min(this.byteLength,a),a<=e)return new ArrayBuffer(0);const r=this.findShardForByte(e);if(r===-1)throw new Error(`Could not find start shard for byte ${e}`);const i=a-e,l=new ArrayBuffer(i),c=new Uint8Array(l);let f=0;for(let h=r;h<this.shards.length;h++){const p=this.shards[h],y=e+f-p.start,v=f,k=Math.min(a,p.end)-p.start,$=new Uint8Array(p.buffer,y,k-y);if(c.set($,v),f+=$.length,a<p.end)break}return l}findShardForByte(e){if(this.shards.length===0||e<0||e>=this.byteLength)return-1;if(this.bufferUniformSize!=null)return this.previousShardIndex=Math.floor(e/this.bufferUniformSize),this.previousShardIndex;function a(i){return e<i.start?-1:e>=i.end?1:0}if(a(this.shards[this.previousShardIndex])===0)return this.previousShardIndex;const r=Y3(this.shards,a);return r===-1?-1:(this.previousShardIndex=r,this.previousShardIndex)}}function Y3(t,e){let a=0,r=t.length;for(;a<=r;){const i=Math.floor((r-a)/2)+a,l=e(t[i]);if(l===0)return i;l<0?r=i:a=i+1}return-1}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function P3(){ve().set("PROD",!0)}function X3(){ve().set("DEBUG",!0)}function Z3(){ve().set("DEPRECATION_WARNINGS_ENABLED",!1),console.warn("TensorFlow.js deprecation warnings have been disabled.")}function W3(t){ve().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(t+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}function Q3(){C.disposeVariables()}function J3(){return C}function ek(){return C.memory()}function tk(t){return C.profile(t)}function Re(t,e){return C.tidy(t,e)}function $t(t){td(t).forEach(a=>a.dispose())}function vn(t){return C.keep(t)}function nk(t){return C.time(t)}function ak(t){return C.setBackend(t)}function sk(){return C.ready()}function mv(){return C.backendName}function rk(t){C.removeBackend(t)}function ik(t){return C.findBackend(t)}function ok(t){return C.findBackendFactory(t)}function lk(t,e,a=1){return C.registerBackend(t,e,a)}function gv(){return C.backend}function uk(t,e){ve().setPlatform(t,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ua=4;async function ck(t,e){const a=[],r=[],i=Array.isArray(t)?t.map(c=>c.name):Object.keys(t);for(let c=0;c<i.length;++c){const f=i[c],h=Array.isArray(t)?t[c].tensor:t[f];if(h.dtype!=="float32"&&h.dtype!=="int32"&&h.dtype!=="bool"&&h.dtype!=="string"&&h.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${f}': ${h.dtype}`);const p={name:f,shape:h.shape,dtype:h.dtype};if(h.dtype==="string"){const g=new Promise(async y=>{const v=await h.bytes(),S=v.reduce((A,M)=>A+M.length,0)+Ua*v.length,k=new Uint8Array(S);let $=0;for(let A=0;A<v.length;A++){const M=v[A],X=new Uint8Array(new Uint32Array([M.length]).buffer);k.set(X,$),$+=Ua,k.set(M,$),$+=M.length}y(k)});r.push(g)}else r.push(h.data());e!=null&&(p.group=e),a.push(p)}const l=await Promise.all(r);return{data:dk(l),specs:a}}function yv(t,e){const a=new xn(t),r={};let i=0;for(const l of e){const c=fk(l,(f,h)=>a.slice(i+f,i+h));r[l.name]=bv(l,a.slice(i,i+c)),i+=c}return r}function fk(t,e){const a=Ue(t.shape);let r;if("quantization"in t){const i=t.quantization;r=Ss[i.dtype]}else if(t.dtype==="string"){let i=0;for(let l=0;l<a;l++)i+=Ua+new Uint32Array(e(i,i+Ua))[0];return i}else r=Ss[t.dtype];return a*r}async function hk(t,e){const a=Ue(t.shape);let r;if("quantization"in t){const i=t.quantization;r=Ss[i.dtype]}else if(t.dtype==="string"){let i=0;for(let l=0;l<a;l++)i+=Ua+new Uint32Array(await e(i,i+Ua))[0];return i}else r=Ss[t.dtype];return a*r}function bv(t,e){const a=t.name,r=t.dtype,i=t.shape,l=Ue(i);let c,f=0;if("quantization"in t){const h=t.quantization;if(h.dtype==="uint8"||h.dtype==="uint16"){if(!("min"in h&&"scale"in h))throw new Error(`Weight ${t.name} with quantization ${h.dtype} doesn't have corresponding metadata min and scale.`)}else if(h.dtype==="float16"){if(r!=="float32")throw new Error(`Weight ${t.name} is quantized with ${h.dtype} which only supports weights of type float32 not ${r}.`)}else throw new Error(`Weight ${t.name} has unknown quantization dtype ${h.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);const p=Ss[h.dtype],g=h.dtype==="uint8"?new Uint8Array(e):new Uint16Array(e);if(r==="float32")if(h.dtype==="uint8"||h.dtype==="uint16"){c=new Float32Array(g.length);for(let y=0;y<g.length;y++){const v=g[y];c[y]=v*h.scale+h.min}}else if(h.dtype==="float16")c=wk()(g);else throw new Error(`Unsupported quantization type ${h.dtype} for weight type float32.`);else if(r==="int32"){if(h.dtype!=="uint8"&&h.dtype!=="uint16")throw new Error(`Unsupported quantization type ${h.dtype} for weight type int32.`);c=new Int32Array(g.length);for(let y=0;y<g.length;y++){const v=g[y];c[y]=Math.round(v*h.scale+h.min)}}else throw new Error(`Unsupported dtype in weight '${a}': ${r}`);f+=l*p}else if(r==="string"){const h=Ue(t.shape);c=[];for(let p=0;p<h;p++){const g=new Uint32Array(e.slice(f,f+Ua))[0];f+=Ua;const y=new Uint8Array(e.slice(f,f+g));c.push(y),f+=g}}else{const h=Ss[r];if(r==="float32")c=new Float32Array(e);else if(r==="int32")c=new Int32Array(e);else if(r==="bool")c=new Uint8Array(e);else if(r==="complex64"){c=new Float32Array(e);const p=new Float32Array(c.length/2),g=new Float32Array(c.length/2);for(let k=0;k<p.length;k++)p[k]=c[k*2],g[k]=c[k*2+1];const y=wn(p,i,"float32"),v=wn(g,i,"float32"),S=aa(y,v);return y.dispose(),v.dispose(),S}else throw new Error(`Unsupported dtype in weight '${a}': ${r}`);f+=l*h}return wn(c,i,r)}async function g0(t,e,a){let r=new Uint8Array(e);for(;r.byteLength<a;){const{done:i,value:l}=await t.read();if(i&&l==null){const f=a-r.byteLength;throw new Error(`Reader is done but ${f} bytes are still expected`)}const c=new Uint8Array(r.length+l.byteLength);c.set(r,0),c.set(new Uint8Array(l),r.length),r=c}return r.buffer}async function vv(t,e){const a={},r=t.getReader();let i=new ArrayBuffer(0);for(const l of e){const c=await hk(l,async(p,g)=>(i=await g0(r,i,g),i.slice(p,g)));i=await g0(r,i,c);const f=i.slice(0,c);i=i.slice(c);const h=bv(l,f);if(a[l.name]=h,mv()==="webgpu"){const p=gv();"uploadToGPU"in p&&Ue(h.shape)>=ve().get("WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD")&&p.uploadToGPU(h.dataId)}}return a}function dk(t){if(t===null)throw new Error(`Invalid input value: ${JSON.stringify(t)}`);let e=0;const a=[];t.forEach(l=>{if(e+=l.byteLength,a.push(l.byteLength===l.buffer.byteLength?l:new l.constructor(l)),!(l instanceof Float32Array||l instanceof Int32Array||l instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${l.constructor.name}`)});const r=new Uint8Array(e);let i=0;return a.forEach(l=>{r.set(new Uint8Array(l.buffer),i),i+=l.byteLength}),r.buffer}const ad=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function y0(t){return ad?Buffer.byteLength(t,"utf8"):new Blob([t]).size}function pk(t){if(ad)return Buffer.from(t).toString("base64");const e=new Uint8Array(t);let a="";for(let r=0,i=e.length;r<i;r++)a+=String.fromCharCode(e[r]);return btoa(a)}function mk(t){if(ad){const r=Buffer.from(t,"base64");return r.buffer.slice(r.byteOffset,r.byteOffset+r.byteLength)}const e=atob(t),a=new Uint8Array(e.length);for(let r=0;r<e.length;++r)a.set([e.charCodeAt(r)],r);return a.buffer}function gk(t){return xn.join(t)}function b0(t){const e="/";for(t=t.trim();t.endsWith(e);)t=t.slice(0,t.length-1);const a=t.split(e);return a[a.length-1]}function wv(t,e){const a={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,weightsManifest:e};return t.signature!=null&&(a.signature=t.signature),t.userDefinedMetadata!=null&&(a.userDefinedMetadata=t.userDefinedMetadata),t.modelInitializer!=null&&(a.modelInitializer=t.modelInitializer),t.initializerSignature!=null&&(a.initializerSignature=t.initializerSignature),t.trainingConfig!=null&&(a.trainingConfig=t.trainingConfig),a}function sd(t,e,a){const r={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy};if(t.trainingConfig!=null&&(r.trainingConfig=t.trainingConfig),t.weightsManifest!=null){if(!e)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!a)throw new Error("modelJSON has weightsManifest but weightData is null");r.weightSpecs=e,r.weightData=a}return t.signature!=null&&(r.signature=t.signature),t.userDefinedMetadata!=null&&(r.userDefinedMetadata=t.userDefinedMetadata),t.modelInitializer!=null&&(r.modelInitializer=t.modelInitializer),t.initializerSignature!=null&&(r.initializerSignature=t.initializerSignature),r}async function rd(t,e){let a,r;return t.weightsManifest!=null&&([a,r]=await e(t.weightsManifest)),sd(t,a,r)}function ro(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:t.modelTopology==null?0:y0(JSON.stringify(t.modelTopology)),weightSpecsBytes:t.weightSpecs==null?0:y0(JSON.stringify(t.weightSpecs)),weightDataBytes:t.weightData==null?0:new xn(t.weightData).byteLength}}function Zl(t){const e=[];for(const a of t)e.push(...a.weights);return e}function yk(){const t=a=>{let r=a<<13,i=0;for(;(r&8388608)===0;)i-=8388608,r<<=1;return r&=-8388609,i+=947912704,r|i},e=new Uint32Array(2048);e[0]=0;for(let a=1;a<1024;a++)e[a]=t(a);for(let a=1024;a<2048;a++)e[a]=939524096+(a-1024<<13);return e}function bk(){const t=new Uint32Array(64);t[0]=0,t[31]=1199570944,t[32]=2147483648,t[63]=3347054592;for(let e=1;e<31;e++)t[e]=e<<23;for(let e=33;e<63;e++)t[e]=2147483648+(e-32<<23);return t}function vk(){const t=new Uint32Array(64);for(let e=0;e<64;e++)t[e]=1024;return t[0]=t[32]=0,t}function wk(){const t=yk(),e=bk(),a=vk();return r=>{const i=new ArrayBuffer(4*r.length),l=new Uint32Array(i);for(let c=0;c<r.length;c++){const f=r[c],h=t[a[f>>10]+(f&1023)]+e[f>>10];l[c]=h}return new Float32Array(i)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Qe{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return Qe.instance==null&&(Qe.instance=new Qe),Qe.instance}static registerSaveRouter(e){Qe.getInstance().saveRouters.push(e)}static registerLoadRouter(e){Qe.getInstance().loadRouters.push(e)}static getSaveHandlers(e){return Qe.getHandlers(e,"save")}static getLoadHandlers(e,a){return Qe.getHandlers(e,"load",a)}static getHandlers(e,a,r){const i=[];return(a==="load"?Qe.getInstance().loadRouters:Qe.getInstance().saveRouters).forEach(c=>{const f=c(e,r);f!==null&&i.push(f)}),i}}const Sk=t=>Qe.registerSaveRouter(t),Nk=t=>Qe.registerLoadRouter(t),xk=t=>Qe.getSaveHandlers(t),Tk=(t,e)=>Qe.getLoadHandlers(t,e);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const bh="tensorflowjs",vh=1,ys="models_store",za="model_info_store";function Sv(){if(!ve().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const t=typeof window>"u"?self:window,e=t.indexedDB||t.mozIndexedDB||t.webkitIndexedDB||t.msIndexedDB||t.shimIndexedDB;if(e==null)throw new Error("The current browser does not appear to support IndexedDB.");return e}function wh(t){const e=t.result;e.createObjectStore(ys,{keyPath:"modelPath"}),e.createObjectStore(za,{keyPath:"modelPath"})}class Ns{constructor(e){if(this.indexedDB=Sv(),e==null||!e)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=e}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,e)}async load(){return this.databaseAction(this.modelPath)}databaseAction(e,a){return new Promise((r,i)=>{const l=this.indexedDB.open(bh,vh);l.onupgradeneeded=()=>wh(l),l.onsuccess=()=>{const c=l.result;if(a==null){const f=c.transaction(ys,"readonly"),p=f.objectStore(ys).get(this.modelPath);p.onsuccess=()=>{if(p.result==null)return c.close(),i(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));r(p.result.modelArtifacts)},p.onerror=g=>(c.close(),i(p.error)),f.oncomplete=()=>c.close()}else{a.weightData=xn.join(a.weightData);const f=ro(a),h=c.transaction(za,"readwrite");let p=h.objectStore(za),g;try{g=p.put({modelPath:this.modelPath,modelArtifactsInfo:f})}catch(v){return i(v)}let y;g.onsuccess=()=>{y=c.transaction(ys,"readwrite");const v=y.objectStore(ys);let S;try{S=v.put({modelPath:this.modelPath,modelArtifacts:a,modelArtifactsInfo:f})}catch(k){return i(k)}S.onsuccess=()=>r({modelArtifactsInfo:f}),S.onerror=k=>{p=h.objectStore(za);const $=p.delete(this.modelPath);$.onsuccess=()=>(c.close(),i(S.error)),$.onerror=A=>(c.close(),i(S.error))}},g.onerror=v=>(c.close(),i(g.error)),h.oncomplete=()=>{y==null?c.close():y.oncomplete=()=>c.close()}}},l.onerror=c=>i(l.error)})}}Ns.URL_SCHEME="indexeddb://";const Nv=t=>ve().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(Ns.URL_SCHEME)?Ek(t.slice(Ns.URL_SCHEME.length)):null;Qe.registerSaveRouter(Nv);Qe.registerLoadRouter(Nv);function Ek(t){return new Ns(t)}function kk(t){return t.startsWith(Ns.URL_SCHEME)?t.slice(Ns.URL_SCHEME.length):t}class _k{constructor(){this.indexedDB=Sv()}async listModels(){return new Promise((e,a)=>{const r=this.indexedDB.open(bh,vh);r.onupgradeneeded=()=>wh(r),r.onsuccess=()=>{const i=r.result,l=i.transaction(za,"readonly"),f=l.objectStore(za).getAll();f.onsuccess=()=>{const h={};for(const p of f.result)h[p.modelPath]=p.modelArtifactsInfo;e(h)},f.onerror=h=>(i.close(),a(f.error)),l.oncomplete=()=>i.close()},r.onerror=i=>a(r.error)})}async removeModel(e){return e=kk(e),new Promise((a,r)=>{const i=this.indexedDB.open(bh,vh);i.onupgradeneeded=()=>wh(i),i.onsuccess=()=>{const l=i.result,c=l.transaction(za,"readwrite"),f=c.objectStore(za),h=f.get(e);let p;h.onsuccess=()=>{if(h.result==null)return l.close(),r(new Error(`Cannot find model with path '${e}' in IndexedDB.`));{const g=f.delete(e),y=()=>{p=l.transaction(ys,"readwrite");const S=p.objectStore(ys).delete(e);S.onsuccess=()=>a(h.result.modelArtifactsInfo),S.onerror=k=>r(h.error)};g.onsuccess=y,g.onerror=v=>(y(),l.close(),r(h.error))}},h.onerror=g=>(l.close(),r(h.error)),c.oncomplete=()=>{p==null?l.close():p.oncomplete=()=>l.close()}},i.onerror=l=>r(i.error)})}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ea="/",mr="tensorflowjs_models",xv="info",Ak="model_topology",Ok="weight_specs",$k="weight_data",Dk="model_metadata";function Tv(t){return{info:[mr,t,xv].join(ea),topology:[mr,t,Ak].join(ea),weightSpecs:[mr,t,Ok].join(ea),weightData:[mr,t,$k].join(ea),modelMetadata:[mr,t,Dk].join(ea)}}function Ev(t){for(const e of Object.values(t))window.localStorage.removeItem(e)}function Rk(t){const e=t.split(ea);if(e.length<3)throw new Error(`Invalid key format: ${t}`);return e.slice(1,e.length-1).join(ea)}function Ck(t){return t.startsWith(xs.URL_SCHEME)?t.slice(xs.URL_SCHEME.length):t}class xs{constructor(e){if(!ve().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,e==null||!e)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=e,this.keys=Tv(this.modelPath)}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const a=JSON.stringify(e.modelTopology),r=JSON.stringify(e.weightSpecs),i=ro(e),l=xn.join(e.weightData);try{this.LS.setItem(this.keys.info,JSON.stringify(i)),this.LS.setItem(this.keys.topology,a),this.LS.setItem(this.keys.weightSpecs,r),this.LS.setItem(this.keys.weightData,pk(l));const c={format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,signature:e.signature!=null?e.signature:void 0,userDefinedMetadata:e.userDefinedMetadata!=null?e.userDefinedMetadata:void 0,modelInitializer:e.modelInitializer!=null?e.modelInitializer:void 0,initializerSignature:e.initializerSignature!=null?e.initializerSignature:void 0,trainingConfig:e.trainingConfig!=null?e.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(c)),{modelArtifactsInfo:i}}catch{throw Ev(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${i.modelTopologyBytes}, weightSpecsBytes=${i.weightSpecsBytes}, weightDataBytes=${i.weightDataBytes}.`)}}}async load(){const e=JSON.parse(this.LS.getItem(this.keys.info));if(e==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(e.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const a={},r=JSON.parse(this.LS.getItem(this.keys.topology));if(r==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);a.modelTopology=r;const i=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(i==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);a.weightSpecs=i;const l=this.LS.getItem(this.keys.modelMetadata);if(l!=null){const f=JSON.parse(l);a.format=f.format,a.generatedBy=f.generatedBy,a.convertedBy=f.convertedBy,f.signature!=null&&(a.signature=f.signature),f.userDefinedMetadata!=null&&(a.userDefinedMetadata=f.userDefinedMetadata),f.modelInitializer!=null&&(a.modelInitializer=f.modelInitializer),f.initializerSignature!=null&&(a.initializerSignature=f.initializerSignature),f.trainingConfig!=null&&(a.trainingConfig=f.trainingConfig)}const c=this.LS.getItem(this.keys.weightData);if(c==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return a.weightData=mk(c),a}}xs.URL_SCHEME="localstorage://";const kv=t=>ve().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(xs.URL_SCHEME)?zk(t.slice(xs.URL_SCHEME.length)):null;Qe.registerSaveRouter(kv);Qe.registerLoadRouter(kv);function zk(t){return new xs(t)}class jk{constructor(){E(ve().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),E(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){const e={},a=mr+ea,r=ea+xv;for(let i=0;i<this.LS.length;++i){const l=this.LS.key(i);if(l.startsWith(a)&&l.endsWith(r)){const c=Rk(l);e[c]=JSON.parse(this.LS.getItem(l))}}return e}async removeModel(e){e=Ck(e);const a=Tv(e);if(this.LS.getItem(a.info)==null)throw new Error(`Cannot find model at path '${e}'`);const r=JSON.parse(this.LS.getItem(a.info));return Ev(a),r}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yr="://";class _t{constructor(){this.managers={}}static getInstance(){return _t.instance==null&&(_t.instance=new _t),_t.instance}static registerManager(e,a){E(e!=null,()=>"scheme must not be undefined or null."),e.endsWith(yr)&&(e=e.slice(0,e.indexOf(yr))),E(e.length>0,()=>"scheme must not be an empty string.");const r=_t.getInstance();E(r.managers[e]==null,()=>`A model store manager is already registered for scheme '${e}'.`),r.managers[e]=a}static getManager(e){const a=_t.getInstance().managers[e];if(a==null)throw new Error(`Cannot find model manager for scheme '${e}'`);return a}static getSchemes(){return Object.keys(_t.getInstance().managers)}}function jl(t){if(t.indexOf(yr)===-1)throw new Error(`The url string provided does not contain a scheme. Supported schemes are: ${_t.getSchemes().join(",")}`);return{scheme:t.split(yr)[0],path:t.split(yr)[1]}}async function _v(t,e,a=!1){E(t!==e,()=>`Old path and new path are the same: '${t}'`);const r=Qe.getLoadHandlers(t);E(r.length>0,()=>`Copying failed because no load handler is found for source URL ${t}.`),E(r.length<2,()=>`Copying failed because more than one (${r.length}) load handlers for source URL ${t}.`);const i=r[0],l=Qe.getSaveHandlers(e);E(l.length>0,()=>`Copying failed because no save handler is found for destination URL ${e}.`),E(l.length<2,()=>`Copying failed because more than one (${r.length}) save handlers for destination URL ${e}.`);const c=l[0],f=jl(t).scheme,h=jl(t).path,p=f===jl(t).scheme,g=await i.load();a&&p&&await _t.getManager(f).removeModel(h);const y=await c.save(g);return a&&!p&&await _t.getManager(f).removeModel(h),y.modelArtifactsInfo}async function Mk(){const t=_t.getSchemes(),e={};for(const a of t){const r=await _t.getManager(a).listModels();for(const i in r){const l=a+yr+i;e[l]=r[i]}}return e}async function Ik(t){const e=jl(t);return _t.getManager(e.scheme).removeModel(e.path)}async function Lk(t,e){return _v(t,e,!1)}async function Bk(t,e){return _v(t,e,!0)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Uk{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(e,a){return fetch(e,a)}now(){return performance.now()}encode(e,a){if(a!=="utf-8"&&a!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${a}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(e)}decode(e,a){return new TextDecoder(a).decode(e)}setTimeoutCustom(e,a){if(typeof window>"u"||!ve().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(e,a);return}this.functionRefs.push(e),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},a),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",r=>{if(r.source===window&&r.data.name===this.messageName){r.stopPropagation();const i=this.functionRefs[r.data.index];i(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}isTypedArray(e){return tv(e)}}if(ve().get("IS_BROWSER")){ve().setPlatform("browser",new Uk);try{_t.registerManager(xs.URL_SCHEME,new jk)}catch{}try{_t.registerManager(Ns.URL_SCHEME,new _k)}catch{}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qk={importFetch:()=>require("node-fetch")};let Wf;class Fk{constructor(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}fetch(e,a){return ve().global.fetch!=null?ve().global.fetch(e,a):(Wf==null&&(Wf=qk.importFetch()),Wf(e,a))}now(){const e=process.hrtime();return e[0]*1e3+e[1]/1e6}encode(e,a){if(a!=="utf-8"&&a!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${a}`);return this.textEncoder.encode(e)}decode(e,a){return e.length===0?"":new this.util.TextDecoder(a).decode(e)}isTypedArray(e){return this.util.types.isFloat32Array(e)||this.util.types.isInt32Array(e)||this.util.types.isUint8Array(e)||this.util.types.isUint8ClampedArray(e)}}ve().get("IS_NODE")&&!ve().get("IS_BROWSER")&&ve().setPlatform("node",new Fk);/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rn(t,e="float32",a){return e=e||"float32",Gt(t),new Xl(t,e,a)}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vk(t,e){const a=x(t,"x","cast");if(!sb(e))throw new Error(`Failed to cast to unknown dtype ${e}`);if(e==="string"&&a.dtype!=="string"||e!=="string"&&a.dtype==="string")throw new Error("Only strings can be casted to strings");const r={x:a},i={dtype:e};return C.runKernel(Zh,r,i)}const He=R({cast_:Vk});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hk(t){const a={x:x(t,"x","clone","string_or_numeric")};return C.runKernel(Qh,a)}const ta=R({clone_:Hk});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function id(t,e=!1){console.log(t.toString(e))}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */hv();const Gk={buffer:Rn,cast:He,clone:ta,print:id};z3(Gk);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kk(t,e){let a=x(t,"a","add"),r=x(e,"b","add");[a,r]=et(a,r);const i={a,b:r};return C.runKernel(Xh,i)}const be=R({add_:Kk});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yk(t,e){let a=x(t,"a","floorDiv"),r=x(e,"b","floorDiv");[a,r]=et(a,r);const i={a,b:r};return C.runKernel(f1,i)}const od=R({floorDiv_:Yk});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pk(t,e){let a=x(t,"a","div"),r=x(e,"b","div");if([a,r]=et(a,r),a.dtype==="int32"&&r.dtype==="int32")return od(a,r);const i={a,b:r},l={};return C.runKernel(Jb,i,l)}const Pe=R({div_:Pk});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xk(t,e){let a=x(t,"a","mul"),r=x(e,"b","mul");[a,r]=et(a,r);const i={a,b:r};return C.runKernel(V1,i)}const le=R({mul_:Xk});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zk(t){const e=x(t,"x","abs");if(e.dtype==="complex64"){const a={x:e};return C.runKernel(zb,a)}else{const a={x:e};return C.runKernel(fb,a)}}const Vt=R({abs_:Zk});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wk(t){const a={x:x(t,"x","acos")};return C.runKernel(hb,a)}const Av=R({acos_:Wk});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qk(t){const a={x:x(t,"x","acosh")};return C.runKernel(db,a)}const Ov=R({acosh_:Qk});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jk(t){E(Array.isArray(t),()=>"The argument passed to tf.addN() must be a list of tensors"),E(t.length>=1,()=>`Must pass at least one tensor to tf.addN(), but got ${t.length}`);const e=t.map((i,l)=>x(i,`tensors${l}`,"addN")),a=e[0];e.forEach(i=>{if(i.dtype!==a.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),e.forEach(i=>{if(!Nn(i.shape,a.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});const r=e;return C.runKernel(pb,r)}const $v=R({addN_:Jk});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function e_(t,e=null,a=!1){const i={x:x(t,"x","all","bool")},l={axis:e,keepDims:a};return C.runKernel(mb,i,l)}const Dv=R({all_:e_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function t_(t,e=null,a=!1){const i={x:x(t,"x","any","bool")},l={axis:e,keepDims:a};return C.runKernel(gb,i,l)}const Rv=R({any_:t_});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function n_(t,e=0){const r={x:x(t,"x","argMax")},i={axis:e};return C.runKernel(yb,r,i)}const Cv=R({argMax_:n_});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a_(t,e=0){const r={x:x(t,"x","argMin")},i={axis:e};return C.runKernel(bb,r,i)}const zv=R({argMin_:a_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s_(t){const a={x:x(t,"x","asin")};return C.runKernel(vb,a)}const jv=R({asin_:s_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function r_(t){const a={x:x(t,"x","asinh")};return C.runKernel(wb,a)}const Mv=R({asinh_:r_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function i_(t){const a={x:x(t,"x","atan")};return C.runKernel(Sb,a)}const Iv=R({atan_:i_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function o_(t,e){let a=x(t,"a","atan2"),r=x(e,"b","atan2");[a,r]=et(a,r);const i={a,b:r};return C.runKernel(xb,i)}const Lv=R({atan2_:o_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function l_(t){const a={x:x(t,"x","atanh")};return C.runKernel(Nb,a)}const Bv=R({atanh_:l_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function u_(t,e,a,r,i="NHWC",l){const c=t[3],f=[...e,c],h=Fv(i);return io(t,f,a,l,r,null,null,h)}function Uv(t,e,a,r,i,l,c="channelsLast"){const[f,h]=Yi(e);let p;if(c==="channelsLast")p=[f,h,t[3],t[3]];else if(c==="channelsFirst")p=[f,h,t[1],t[1]];else throw new Error(`Unknown dataFormat ${c}`);return io(t,p,a,r,i,l,!1,c)}function c_(t,e,a,r,i,l,c="NDHWC"){const[f,h,p]=Sh(e);let g,y;if(c==="NDHWC")y="channelsLast",g=[f,h,p,t[4],t[4]];else if(c==="NCDHW")y="channelsFirst",g=[f,h,p,t[1],t[1]];else throw new Error(`Unknown dataFormat ${c}`);return qv(t,g,a,r,i,!1,y,l)}function io(t,e,a,r,i,l,c=!1,f="channelsLast"){let[h,p,g,y]=[-1,-1,-1,-1];if(f==="channelsLast")[h,p,g,y]=t;else if(f==="channelsFirst")[h,y,p,g]=t;else throw new Error(`Unknown dataFormat ${f}`);const[v,S,,k]=e,[$,A]=Yi(a),[M,X]=Yi(r),z=br(v,M),I=br(S,X),{padInfo:V,outHeight:Z,outWidth:re}=d_(i,p,g,$,A,z,I,l,f),ie=c?k*y:k;let F;return f==="channelsFirst"?F=[h,ie,Z,re]:f==="channelsLast"&&(F=[h,Z,re,ie]),{batchSize:h,dataFormat:f,inHeight:p,inWidth:g,inChannels:y,outHeight:Z,outWidth:re,outChannels:ie,padInfo:V,strideHeight:$,strideWidth:A,filterHeight:v,filterWidth:S,effectiveFilterHeight:z,effectiveFilterWidth:I,dilationHeight:M,dilationWidth:X,inShape:t,outShape:F,filterShape:e}}function qv(t,e,a,r,i,l=!1,c="channelsLast",f){let[h,p,g,y,v]=[-1,-1,-1,-1,-1];if(c==="channelsLast")[h,p,g,y,v]=t;else if(c==="channelsFirst")[h,v,p,g,y]=t;else throw new Error(`Unknown dataFormat ${c}`);const[S,k,$,,A]=e,[M,X,z]=Sh(a),[I,V,Z]=Sh(r),re=br(S,I),ie=br(k,V),F=br($,Z),{padInfo:U,outDepth:_,outHeight:te,outWidth:ue}=p_(i,p,g,y,M,X,z,re,ie,F,f),pe=l?A*v:A;let fe;return c==="channelsFirst"?fe=[h,pe,_,te,ue]:c==="channelsLast"&&(fe=[h,_,te,ue,pe]),{batchSize:h,dataFormat:c,inDepth:p,inHeight:g,inWidth:y,inChannels:v,outDepth:_,outHeight:te,outWidth:ue,outChannels:pe,padInfo:U,strideDepth:M,strideHeight:X,strideWidth:z,filterDepth:S,filterHeight:k,filterWidth:$,effectiveFilterDepth:re,effectiveFilterHeight:ie,effectiveFilterWidth:F,dilationDepth:I,dilationHeight:V,dilationWidth:Z,inShape:t,outShape:fe,filterShape:e}}function f_(t,e,a,r,i){r==null&&(r=ld(t,e,a));const l=t[0],c=t[1],f=Pi((l-e+2*r)/a+1,i),h=Pi((c-e+2*r)/a+1,i);return[f,h]}function h_(t,e,a,r,i,l){i==null&&(i=ld(t,e[0],r[0]));const c=[0,0,0,a];for(let f=0;f<3;f++)t[f]+2*i>=e[f]&&(c[f]=Pi((t[f]-e[f]+2*i)/r[f]+1,l));return c}function ld(t,e,a,r=1){const i=br(e,r);return Math.floor((t[0]*(a-1)-a+i)/2)}function Yi(t){return typeof t=="number"?[t,t,t]:t.length===2?[t[0],t[1],1]:t}function Sh(t){return typeof t=="number"?[t,t,t]:t}function br(t,e){return e<=1?t:t+(t-1)*(e-1)}function d_(t,e,a,r,i,l,c,f,h){let p,g,y;if(typeof t=="number"){p={top:t,bottom:t,left:t,right:t,type:t===0?"VALID":"NUMBER"};const S=f_([e,a],l,r,t,f);g=S[0],y=S[1]}else if(t==="same"){g=Math.ceil(e/r),y=Math.ceil(a/i);const v=Math.max(0,(g-1)*r+l-e),S=Math.max(0,(y-1)*i+c-a),k=Math.floor(v/2),$=v-k,A=Math.floor(S/2),M=S-A;p={top:k,bottom:$,left:A,right:M,type:"SAME"}}else if(t==="valid")p={top:0,bottom:0,left:0,right:0,type:"VALID"},g=Math.ceil((e-l+1)/r),y=Math.ceil((a-c+1)/i);else if(typeof t=="object"){const v=h==="channelsLast"?t[1][0]:t[2][0],S=h==="channelsLast"?t[1][1]:t[2][1],k=h==="channelsLast"?t[2][0]:t[3][0],$=h==="channelsLast"?t[2][1]:t[3][1];p={top:v,bottom:S,left:k,right:$,type:v===0&&S===0&&k===0&&$===0?"VALID":"EXPLICIT"},g=Pi((e-l+v+S)/r+1,f),y=Pi((a-c+k+$)/i+1,f)}else throw Error(`Unknown padding parameter: ${t}`);return{padInfo:p,outHeight:g,outWidth:y}}function p_(t,e,a,r,i,l,c,f,h,p,g){let y,v,S,k;if(t==="valid"&&(t=0),typeof t=="number"){y={top:t,bottom:t,left:t,right:t,front:t,back:t,type:t===0?"VALID":"NUMBER"};const A=h_([e,a,r,1],[f,h,p],1,[i,l,c],t,g);v=A[0],S=A[1],k=A[2]}else if(t==="same"){v=Math.ceil(e/i),S=Math.ceil(a/l),k=Math.ceil(r/c);const $=(v-1)*i+f-e,A=(S-1)*l+h-a,M=(k-1)*c+p-r,X=Math.floor($/2),z=$-X,I=Math.floor(A/2),V=A-I,Z=Math.floor(M/2),re=M-Z;y={top:I,bottom:V,left:Z,right:re,front:X,back:z,type:"SAME"}}else throw Error(`Unknown padding parameter: ${t}`);return{padInfo:y,outDepth:v,outHeight:S,outWidth:k}}function Pi(t,e){if(!e)return Math.trunc(t);switch(e){case"round":return Math.round(t);case"ceil":return Math.ceil(t);case"floor":return Math.floor(t);default:throw new Error(`Unknown roundingMode ${e}`)}}function Xi(t){const[e,a,r]=Yi(t);return e===1&&a===1&&r===1}function sa(t,e){return Xi(t)||Xi(e)}function Ts(t){return Yi(t).every(e=>e>0)}function Fv(t){if(t==="NHWC")return"channelsLast";if(t==="NCHW")return"channelsFirst";throw new Error(`Unknown dataFormat ${t}`)}function pn(t,e,a){if(a!=null){if(typeof e=="string")throw Error(`Error in ${t}: pad must be an integer when using dimRoundingMode ${a} but got pad ${e}.`);if(typeof e=="number")E(Nr(e),()=>`Error in ${t}: pad must be an integer when using dimRoundingMode ${a} but got pad ${e}.`);else if(typeof e=="object")e.forEach(r=>{r.forEach(i=>{E(Nr(i),()=>`Error in ${t}: pad must be an integer when using dimRoundingMode ${a} but got pad ${i}.`)})});else throw Error(`Error in ${t}: Unknown padding parameter: ${e}`)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function m_(t,e){const r={x:x(t,"x","reshape","string_or_numeric")},i={shape:e};return C.runKernel(u2,r,i)}const ee=R({reshape_:m_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function g_(t,e,a,r,i){const l=x(t,"x","avgPool","float32"),c=1;E(sa(a,c),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${a} and dilations '${c}'`);let f=l,h=!1;l.rank===3&&(h=!0,f=ee(l,[1,l.shape[0],l.shape[1],l.shape[2]])),E(f.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${f.rank}.`),pn("avgPool",r,i);const p={x:f},g={filterSize:e,strides:a,pad:r,dimRoundingMode:i};let y=C.runKernel(Tb,p,g);return y=He(y,l.dtype),h?ee(y,[y.shape[1],y.shape[2],y.shape[3]]):y}const ud=R({avgPool_:g_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function y_(t,e,a,r,i,l="NDHWC"){const c=x(t,"x","avgPool3d","float32");let f=c,h=!1;c.rank===4&&(h=!0,f=ee(c,[1,c.shape[0],c.shape[1],c.shape[2],c.shape[3]])),E(f.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${f.rank}.`),E(l==="NDHWC",()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${l}`),E(typeof a=="number"&&a>0||Array.isArray(a)&&a[0]>0&&a[1]>0&&a[2]>0,()=>`Error in avgPool3d: Stride must be > 0, but got '${a}'`),pn("avgPool3d",r,i);const p={x:f},g={filterSize:e,strides:a,pad:r,dimRoundingMode:i,dataFormat:l};let y=C.runKernel(Eb,p,g);return y=He(y,f.dtype),h?ee(y,[y.shape[1],y.shape[2],y.shape[3],y.shape[4]]):y}const Vv=R({avgPool3d_:y_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function b_(t,e=0){E(t.length>=1,()=>"Pass at least one tensor to concat");const a=Ki(t,"tensors","concat","string_or_numeric");if(a[0].dtype==="complex64"&&a.forEach(l=>{if(l.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${l.dtype}. `)}),a.length===1)return ta(a[0]);const r=a,i={axis:e};return C.runKernel(jb,r,i)}const Nt=R({concat_:b_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function v_(t,e,a=!1,r=!1){let i=x(t,"a","matMul"),l=x(e,"b","matMul");[i,l]=et(i,l);const c={a:i,b:l},f={transposeA:a,transposeB:r};return C.runKernel(kb,c,f)}const Me=R({matMul_:v_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function w_(t){const a={x:x(t,"x","sigmoid","float32")};return C.runKernel(E2,a)}const vs=R({sigmoid_:w_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function S_(t,e,a){const r=x(t,"x","slice","string_or_numeric");if(r.rank===0)throw new Error("Slicing scalar is not possible");const i={x:r},l={begin:e,size:a};return C.runKernel(S2,i,l)}const Be=R({slice_:S_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function N_(t){const a={x:x(t,"x","tanh","float32")};return C.runKernel(G2,a)}const Wl=R({tanh_:N_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function x_(t,e,a,r,i,l){const c=x(t,"forgetBias","basicLSTMCell"),f=x(e,"lstmKernel","basicLSTMCell"),h=x(a,"lstmBias","basicLSTMCell"),p=x(r,"data","basicLSTMCell"),g=x(i,"c","basicLSTMCell"),y=x(l,"h","basicLSTMCell"),v=Nt([p,y],1),S=Me(v,f),k=be(S,h),$=k.shape[0],A=k.shape[1]/4,M=[$,A],X=Be(k,[0,0],M),z=Be(k,[0,A],M),I=Be(k,[0,A*2],M),V=Be(k,[0,A*3],M),Z=be(le(vs(X),Wl(z)),le(g,vs(be(c,I)))),re=le(Wl(Z),vs(V));return[Z,re]}const Hv=R({basicLSTMCell_:x_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function T_(t,e,a){const r=x(t,"x","batchToSpaceND"),i=e.reduce((f,h)=>f*h);E(r.rank>=1+e.length,()=>`input rank is ${r.rank} but should be > than blockShape.length ${e.length}`),E(a.length===e.length,()=>`crops.length is ${a.length} but should be equal to blockShape.length  ${e.length}`),E(r.shape[0]%i===0,()=>`input tensor batch is ${r.shape[0]} but is not divisible by the product of the elements of blockShape ${e.join(" * ")} === ${i}`);const l={x:r},c={blockShape:e,crops:a};return C.runKernel(_b,l,c)}const cd=R({batchToSpaceND_:T_});function E_(t){let e;return t.rank===0||t.rank===1?e=ee(t,[1,1,1,t.size]):t.rank===2?e=ee(t,[1,1,t.shape[0],t.shape[1]]):t.rank===3?e=ee(t,[1,t.shape[0],t.shape[1],t.shape[2]]):e=t,e}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function k_(t,e,a,r,i,l){l==null&&(l=.001);const c=x(t,"x","batchNorm"),f=x(e,"mean","batchNorm"),h=x(a,"variance","batchNorm");let p;i!=null&&(p=x(i,"scale","batchNorm"));let g;r!=null&&(g=x(r,"offset","batchNorm")),E(f.rank===h.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),E(g==null||f.rank===g.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),E(p==null||f.rank===p.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");const v={x:E_(c),scale:p,offset:g,mean:f,variance:h},S={varianceEpsilon:l},k=C.runKernel(h1,v,S);return ee(k,c.shape)}const oo=R({batchNorm_:k_});function __(t,e,a,r,i,l){const c=x(t,"x","batchNorm"),f=x(e,"mean","batchNorm"),h=x(a,"variance","batchNorm");let p;i!=null&&(p=x(i,"scale","batchNorm"));let g;return r!=null&&(g=x(r,"offset","batchNorm")),E(c.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${c.rank}.`),E(f.rank===2||f.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${f.rank}.`),E(h.rank===2||h.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${h.rank}.`),p!=null&&E(p.rank===2||p.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${p.rank}.`),g!=null&&E(g.rank===2||g.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${g.rank}.`),oo(c,f,h,g,p,l)}const Gv=R({batchNorm2d_:__});function A_(t,e,a,r,i,l){const c=x(t,"x","batchNorm"),f=x(e,"mean","batchNorm"),h=x(a,"variance","batchNorm");let p;i!=null&&(p=x(i,"scale","batchNorm"));let g;return r!=null&&(g=x(r,"offset","batchNorm")),E(c.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${c.rank}.`),E(f.rank===3||f.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${f.rank}.`),E(h.rank===3||h.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${h.rank}.`),p!=null&&E(p.rank===3||p.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${p.rank}.`),g!=null&&E(g.rank===3||g.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${g.rank}.`),oo(c,f,h,g,p,l)}const Kv=R({batchNorm3d_:A_});function O_(t,e,a,r,i,l){const c=x(t,"x","batchNorm"),f=x(e,"mean","batchNorm"),h=x(a,"variance","batchNorm");let p;i!=null&&(p=x(i,"scale","batchNorm"));let g;return r!=null&&(g=x(r,"offset","batchNorm")),E(c.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${c.rank}.`),E(f.rank===4||f.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${f.rank}.`),E(h.rank===4||h.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${h.rank}.`),p!=null&&E(p.rank===4||p.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${p.rank}.`),g!=null&&E(g.rank===4||g.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${g.rank}.`),oo(c,f,h,g,p,l)}const Yv=R({batchNorm4d_:O_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $_(t,e,a){const r=x(t,"x","bincount"),i=x(e,"weights","bincount");E(r.dtype==="int32",()=>`Error in bincount: input dtype must be int32, but got ${r.dtype}`),E(a>=0,()=>`size must be non-negative, but got ${a}.`),E(i.size===r.size||i.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${r.shape}, weights shape: ${i.shape}.`);const l={x:r,weights:i},c={size:a};return C.runKernel(Ab,l,c)}const fd=R({bincount_:$_});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function D_(t,e){const a=x(t,"x","bitwiseAnd"),r=x(e,"y","bitwiseAnd");if(!Nn(a.shape,r.shape))throw new Error(`BitwiseAnd: Tensors must have the same shape. x: ${a.shape}, y: ${r.shape}`);if(a.dtype!=="int32"||r.dtype!=="int32")throw new Error(`BitwiseAnd: Only supports 'int32' values in tensor, found type of x: ${a.dtype} and type of y: ${r.dtype}`);const i={a,b:r};return C.runKernel(Ob,i)}const Pv=R({bitwiseAnd_:D_});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function R_(t,e){const a=x(t,"s0","broadcastArgs","int32"),r=x(e,"s1","broadcastArgs","int32");if(a.rank!==1)throw new Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${a.rank}`);if(r.rank!==1)throw new Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${r.rank}`);const i={s0:a,s1:r};return C.runKernel($b,i)}const Xv=R({broadcastArgs_:R_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function C_(t,e){let a=x(t,"broadcastTo","x");const r=a.shape;if(Gt(e),e.length<a.rank)throw new Error(`broadcastTo(): shape.length=${e.length} < input.rank=${a.rank}.`);if(e.length>a.rank){const p=a.shape.slice();for(;p.length<e.length;)p.unshift(1);a=ee(a,p)}const i=a.shape,l=Array.from(e);for(let p=e.length-1;p>=0;p--)if(i[p]===e[p])l[p]=1;else if(a.shape[p]!==1)throw new Error(`broadcastTo(): [${r}] cannot be broadcast to [${e}].`);if(l.map((p,g)=>p>1?g:-1).filter(p=>p>=0).length===0)return ta(a);const f={x:a},h={reps:l};return C.runKernel(Jh,f,h)}const Ui=R({broadcastTo_:C_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function z_(t){const a={x:x(t,"x","ceil","float32")};return C.runKernel(Db,a)}const Zv=R({ceil_:z_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dr(t,e,a){Gt(t),a=a||no(e);const r={shape:t,value:e,dtype:a};return C.runKernel(l1,{},r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function j_(t,e,a){const r=x(t,"x","clipByValue");if(E(e<=a,()=>`Error in clip: min (${e}) must be less than or equal to max (${a}).`),e===a)return Dr(r.shape,e,r.dtype);const i={x:r},l={clipValueMin:e,clipValueMax:a};return C.runKernel(Rb,i,l)}const Wv=R({clipByValue_:j_});function M_(t){return Nt(t,0)}const Qv=R({concat1d_:M_});function I_(t,e){return Nt(t,e)}const Jv=R({concat2d_:I_});function L_(t,e){return Nt(t,e)}const ew=R({concat3d_:L_});function B_(t,e){return Nt(t,e)}const tw=R({concat4d_:B_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function U_(t,e,a,r,i="NHWC",l=[1,1],c){const f=x(t,"x","conv2d","float32"),h=x(e,"filter","conv2d","float32");let p=f,g=!1;f.rank===3&&(g=!0,p=ee(f,[1,f.shape[0],f.shape[1],f.shape[2]])),E(p.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${p.rank}.`),E(h.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${h.rank}.`),pn("conv2d",r,c);const y=i==="NHWC"?p.shape[3]:p.shape[1];E(y===h.shape[2],()=>`Error in conv2d: depth of input (${y}) must match input depth for filter ${h.shape[2]}.`),E(sa(a,l),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${a} and dilations '${l}'`),E(Ts(l),()=>"Error in conv2D: Dilated rates should be larger than 0."),E(Ts(a),()=>"Error in conv2D: Strides should be larger than 0.");const v={x:p,filter:h},S={strides:a,pad:r,dataFormat:i,dilations:l,dimRoundingMode:c},k=C.runKernel(Mb,v,S);return g?ee(k,[k.shape[1],k.shape[2],k.shape[3]]):k}const lo=R({conv2d_:U_});function q_(t,e,a,r,i="NWC",l=1,c){const f=x(t,"x","conv1d"),h=x(e,"filter","conv1d");let p=f,g=!1;f.rank===2&&(g=!0,p=ee(f,[1,f.shape[0],f.shape[1]])),E(p.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${p.rank}.`),E(h.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${h.rank}.`),pn("conv1d",r,c),E(p.shape[2]===h.shape[1],()=>`Error in conv1d: depth of input (${p.shape[2]}) must match input depth for filter ${h.shape[1]}.`),E(sa(a,l),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${a} and dilation '${l}'`),E(Ts(l),()=>"Error in conv1D: Dilated rates should be larger than 0."),E(Ts(a),()=>"Error in conv1D: Stride should be larger than 0."),E(i==="NWC",()=>`Error in conv1d: got dataFormat of ${i} but only NWC is currently supported.`);const y=ee(h,[1,h.shape[0],h.shape[1],h.shape[2]]),v=ee(p,[p.shape[0],1,p.shape[1],p.shape[2]]),A=lo(v,y,[1,a],r,"NHWC",[1,l],c);return g?ee(A,[A.shape[2],A.shape[3]]):ee(A,[A.shape[0],A.shape[2],A.shape[3]])}const nw=R({conv1d_:q_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function F_(t,e,a,r,i,l="NHWC",c){E(t.length===e.rank,()=>`Length of inShape (${t.length}) and rank of dy (${e.rank}) must match`);let f=t,h=e,p=!1;e.rank===3&&(p=!0,h=ee(e,[1,e.shape[0],e.shape[1],e.shape[2]]),f=[1,t[0],t[1],t[2]]),E(f.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${f.length}.`),E(h.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${h.rank}`),E(a.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${a.rank}`);const g=l==="NHWC"?f[3]:f[1],y=l==="NHWC"?h.shape[3]:h.shape[1];E(g===a.shape[2],()=>`Error in conv2dDerInput: depth of input (${g}) must match input depth for filter ${a.shape[2]}.`),E(y===a.shape[3],()=>`Error in conv2dDerInput: depth of output (${y}) must match output depth for filter ${a.shape[3]}.`),pn("conv2dDerInput",i,c);const v={dy:h,filter:a},S={strides:r,pad:i,dataFormat:l,dimRoundingMode:c,inputShape:f},k=C.runKernel(Lb,v,S);return p?ee(k,[k.shape[1],k.shape[2],k.shape[3]]):k}const aw=R({conv2DBackpropInput_:F_});function V_(t,e,a,r,i,l){const c=x(t,"x","conv2dTranspose"),f=x(e,"filter","conv2dTranspose");return aw(a,c,f,r,i,"NHWC",l)}const sw=R({conv2dTranspose_:V_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function H_(t,e,a,r,i="NDHWC",l=[1,1,1]){const c=x(t,"x","conv3d"),f=x(e,"filter","conv3d");let h=c,p=!1;c.rank===4&&(p=!0,h=ee(c,[1,c.shape[0],c.shape[1],c.shape[2],c.shape[3]])),E(h.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${h.rank}.`),E(f.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${f.rank}.`),E(h.shape[4]===f.shape[3],()=>`Error in conv3d: depth of input (${h.shape[4]}) must match input depth for filter ${f.shape[3]}.`),E(sa(a,l),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${a} and dilations '${l}'`),E(i==="NDHWC",()=>`Error in conv3d: got dataFormat of ${i} but only NDHWC is currently supported.`),E(Ts(l),()=>"Error in conv3D: Dilated rates should be larger than 0."),E(Ts(a),()=>"Error in conv3D: Strides should be larger than 0.");const g={x:h,filter:f},y={strides:a,pad:r,dataFormat:i,dilations:l},v=C.runKernel(Bb,g,y);return p?ee(v,[v.shape[1],v.shape[2],v.shape[3],v.shape[4]]):v}const rw=R({conv3d_:H_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function G_(t,e,a,r,i){E(t.length===e.rank,()=>`Length of inShape (${t.length}) and rank of dy (${e.rank}) must match`);let l=t,c=e,f=!1;e.rank===4&&(f=!0,c=ee(e,[1,e.shape[0],e.shape[1],e.shape[2],e.shape[3]]),l=[1,t[0],t[1],t[2],t[3]]);const h=l[4],p=c.shape[4];E(l.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${l.length}.`),E(c.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${c.rank}`),E(a.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${a.rank}`),E(h===a.shape[3],()=>`Error in conv3dDerInput: depth of input (${h}) must match input depth for filter ${a.shape[3]}.`),E(p===a.shape[4],()=>`Error in conv3dDerInput: depth of output (${p}) must match output depth for filter ${a.shape[4]}.`);const g={dy:c,filter:a},y={pad:i,strides:r,inputShape:l},v=C.runKernel(Ub,g,y);return f?ee(v,[v.shape[1],v.shape[2],v.shape[3],v.shape[4]]):v}const K_=R({conv3DBackpropInput_:G_});function Y_(t,e,a,r,i){const l=x(t,"x","conv3dTranspose"),c=x(e,"filter","conv3dTranspose");return K_(a,l,c,r,i)}const iw=R({conv3dTranspose_:Y_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function P_(t){const a={x:x(t,"x","cos","float32")};return C.runKernel(qb,a)}const ow=R({cos_:P_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function X_(t){const a={x:x(t,"x","cosh","float32")};return C.runKernel(Fb,a)}const lw=R({cosh_:X_});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Z_(t,e=0,a=!1,r=!1){const l={x:x(t,"x","cumprod")},c={axis:e,exclusive:a,reverse:r};return C.runKernel(Vb,l,c)}const uw=R({cumprod_:Z_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function W_(t,e=0,a=!1,r=!1){const l={x:x(t,"x","cumsum")},c={axis:e,exclusive:a,reverse:r};return C.runKernel(Hb,l,c)}const cw=R({cumsum_:W_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Q_(t,e,a,r=!1){const i=x(t,"x","denseBincount"),l=x(e,"weights","denseBincount");E(i.dtype==="int32",()=>`Error in denseBincount: input dtype must be int32, but got ${i.dtype}`),E(i.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${i.rank}.`),E(a>=0,()=>`size must be non-negative, but got ${a}.`),E(l.size===i.size||l.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${i.shape}, weights shape: ${l.shape}.`);const c={x:i,weights:l},f={size:a,binaryOutput:r};return C.runKernel(Kb,c,f)}const fw=R({denseBincount_:Q_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function J_(t,e,a="NHWC"){const r=x(t,"x","depthToSpace","float32"),i=a==="NHWC"?r.shape[1]:r.shape[2],l=a==="NHWC"?r.shape[2]:r.shape[3],c=a==="NHWC"?r.shape[3]:r.shape[1];E(e>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${e}`),E(i*e>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${i} and ${e}  for depthToSpace with input shape
    ${r.shape}`),E(l*e>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${l} and ${e} for depthToSpace with input shape
        ${r.shape}`),E(c%(e*e)===0,()=>`Dimension size must be evenly divisible by ${e*e} but is ${c} for depthToSpace with input shape ${r.shape}`);const f={x:r},h={blockSize:e,dataFormat:a};return C.runKernel(Yb,f,h)}const hw=R({depthToSpace_:J_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eA(t,e,a,r,i="NHWC",l=[1,1],c){const f=x(t,"x","depthwiseConv2d","float32"),h=x(e,"filter","depthwiseConv2d","float32");let p=f,g=!1;f.rank===3&&(g=!0,p=ee(f,[1,f.shape[0],f.shape[1],f.shape[2]])),E(p.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${p.rank}.`),E(h.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${h.rank}.`);const y=i==="NHWC"?p.shape[3]:p.shape[1];E(y===h.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${y}) must match the inChannels dimension in filter ${h.shape[2]}.`),pn("depthwiseConv2d",r,c);const v={x:p,filter:h},S={strides:a,pad:r,dataFormat:i,dilations:l,dimRoundingMode:c},k=C.runKernel(Pb,v,S);return g?ee(k,[k.shape[1],k.shape[2],k.shape[3]]):k}const cu=R({depthwiseConv2d_:eA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tA(t){const a={x:x(t,"x","diag")};return C.runKernel(Wb,a)}const dw=R({diag_:tA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nA(t,e,a,r,i=[1,1],l="NHWC"){const c=x(t,"x","dilation2d"),f=x(e,"filter","dilation2d");E(c.rank===3||c.rank===4,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${c.rank}.`),E(f.rank===3,()=>`Error in dilation2d: filter must be rank 3, but got rank ${f.rank}.`),E(l==="NHWC",()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${l}`);let h=c,p=!1;c.rank===3&&(h=ee(c,[1,c.shape[0],c.shape[1],c.shape[2]]),p=!0),E(h.shape[3]===f.shape[2],()=>`Error in dilation2d:  input and filter must have the same depth: ${h.shape[3]} vs ${f.shape[2]}`);const g={x:h,filter:f},y={strides:a,pad:r,dilations:i},v=C.runKernel(Qb,g,y);return p?ee(v,[v.shape[1],v.shape[2],v.shape[3]]):v}const pw=R({dilation2d_:nA});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mw(t,e){const a=t.length,r=[];for(let i=0;i<a;i++){const l=a-1-i,c=t[l]||1;(e[e.length-1-i]||1)>1&&c===1&&r.unshift(l)}return r}function hd(t,e){const a=[];for(let r=0;r<e.length;r++){const i=t[t.length-r-1],l=e.length-r-1,c=e[l];(i==null||i===1&&c>1)&&a.unshift(l)}return a}function it(t,e){const a=Math.max(t.length,e.length),r=new Array(a);for(let i=0;i<a;i++){let l=t[t.length-i-1];l==null&&(l=1);let c=e[e.length-i-1];if(c==null&&(c=1),l===1)r[a-i-1]=c;else if(c===1)r[a-i-1]=l;else if(l!==c){const f=`Operands could not be broadcast together with shapes ${t} and ${e}.`;throw Error(f)}else r[a-i-1]=l}return r}const aA=Object.freeze(Object.defineProperty({__proto__:null,assertAndGetBroadcastShape:it,getBroadcastDims:mw,getReductionAxes:hd},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sA(t,e){let a=x(t,"a","equal","string_or_numeric"),r=x(e,"b","equal","string_or_numeric");[a,r]=et(a,r),it(a.shape,r.shape);const i={a,b:r};return C.runKernel(a1,i)}const dd=R({equal_:sA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rA(t,e,a){const r=x(e,"a","where"),i=x(a,"b","where"),l=x(t,"condition","where","bool"),c=it(it(l.shape,r.shape),i.shape),f=Ui(l,c),h=Ui(r,c),p=Ui(i,c),g={condition:f,t:h,e:p};return C.runKernel(v2,g)}const na=R({where_:rA});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function iA(t){const a={x:x(t,"x","zerosLike")};return C.runKernel(W2,a)}const Ht=R({zerosLike_:iA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function oA(t,e){let a=x(t,"a","div"),r=x(e,"b","div");[a,r]=et(a,r);const i=Pe(a,r),l=Ht(i),c=dd(r,l);return na(c,l,i)}const gw=R({divNoNan_:oA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lA(t,e){const a=x(t,"t1","dot"),r=x(e,"t2","dot");E((a.rank===1||a.rank===2)&&(r.rank===1||r.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${a.rank} and ${r.rank}.`);const i=a.rank===1?a.size:a.shape[1],l=r.rank===1?r.size:r.shape[0];if(E(i===l,()=>`Error in dot: inner dimensions of inputs must match, but got ${i} and ${l}.`),a.rank===1&&r.rank===1){const c=ee(a,[1,-1]),f=ee(r,[-1,1]),h=Me(c,f);return ee(h,[])}else if(a.rank===1&&r.rank===2){const c=ee(a,[1,-1]),f=ee(r,[r.shape[0],r.shape[1]]),h=Me(c,f);return ee(h,[h.size])}else if(a.rank===2&&r.rank===1){const c=ee(r,[-1,1]),f=Me(a,c);return ee(f,[f.size])}else{const c=ee(r,[r.shape[0],r.shape[1]]);return Me(a,c)}}const yw=R({dot_:lA});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uA(t,...e){const a=e.map((i,l)=>x(i,`tensors${l}`,"einsum")),r={equation:t};return C.runKernel(e1,a,r)}const ms=R({einsum_:uA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cA(t){const a={x:x(t,"x","elu","float32")};return C.runKernel(t1,a)}const pd=R({elu_:cA});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fA(t,e){const a=x(t,"x","ensureShape","string_or_numeric");if(!eb(a.shape,e))throw new Error(`EnsureShape: Shape of tensor ${a.shape} is not compatible with expected shape ${e}`);return t}const bw=R({ensureShape_:fA});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hA(t){let e=x(t,"x","erf");E(e.dtype==="int32"||e.dtype==="float32",()=>"Input dtype must be `int32` or `float32`."),e.dtype==="int32"&&(e=He(e,"float32"));const a={x:e};return C.runKernel(n1,a)}const vw=R({erf_:hA});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function md(t,e){for(let a=0;a<t.length;++a)if(t[t.length-a-1]!==e-1-a)return!1;return!0}function ww(t,e,a){const r=t.length+e.length,i=[];let l=0,c=0;for(let f=0;f<r;f++)a.indexOf(f)===-1?i.push(t[l++]):i.push(e[c++]);return i}function dA(t,e){const a=[],r=t.length;for(let l=0;l<r;l++)e.indexOf(l)===-1&&a.push(t[l]);const i=e.map(l=>t[l]);return[a,i]}function uo(t,e){const a=e.map(r=>1);return ww(t,a,e)}function pA(t,e,a){E(md(e,a),()=>`${t} supports only inner-most axes for now. Got axes ${e} and rank-${a} input.`)}function mA(t,e){if(md(t,e))return null;const a=[];for(let r=0;r<e;++r)t.indexOf(r)===-1&&a.push(r);return t.forEach(r=>a.push(r)),a}function gA(t){return t.map((e,a)=>[a,e]).sort((e,a)=>e[1]-a[1]).map(e=>e[0])}function yA(t,e){const a=[];for(let r=e-t;r<e;++r)a.push(r);return a}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bA(t,e=null,a=!1){const i={x:x(t,"x","max")},l={reductionIndices:e,keepDims:a};return C.runKernel(R1,i,l)}const ws=R({max_:bA});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vA(t,e=null,a=!1){const i={x:x(t,"x","min")},l={axis:e,keepDims:a};return C.runKernel(L1,i,l)}const Ql=R({min_:vA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wA(t,e){let a=x(t,"base","pow"),r=x(e,"exp","pow");[a,r]=et(a,r);const i={a,b:r};return C.runKernel(J1,i)}const Er=R({pow_:wA});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $e(t,e){if((ht(t)&&e!=="string"||Array.isArray(t))&&e!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(e==="string"&&ht(t)&&!(t instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Ha(t,[],[],e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function SA(t){const a={x:x(t,"x","sqrt","float32")};return C.runKernel(_2,a)}const Cn=R({sqrt_:SA});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function NA(t){const e=x(t,"x","square"),a={};return C.runKernel("Square",{x:e},a)}const dn=R({square_:NA});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xA(t,e=null,a=!1){let r=x(t,"x","sum");r.dtype==="bool"&&(r=He(r,"int32"));const i={x:r},l={axis:e,keepDims:a};return C.runKernel(A2,i,l)}const Ye=R({sum_:xA});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function TA(t,e="euclidean",a=null,r=!1){t=x(t,"x","norm");const i=Sw(t,e,a);let l=i.shape;if(r){const c=to(a,t.shape);l=uo(i.shape,c)}return ee(i,l)}function Sw(t,e,a=null){if(t.rank===0)return Vt(t);if(t.rank!==1&&a===null)return Sw(ee(t,[-1]),e,a);if(t.rank===1||typeof a=="number"||Array.isArray(a)&&a.length===1){if(e===1)return Ye(Vt(t),a);if(e===1/0)return ws(Vt(t),a);if(e===-1/0)return Ql(Vt(t),a);if(e==="euclidean"||e===2)return Cn(Ye(Er(Vt(t),$e(2,"int32")),a));throw new Error(`Error in norm: invalid ord value: ${e}`)}if(Array.isArray(a)&&a.length===2){if(e===1)return ws(Ye(Vt(t),a[0]),a[1]-1);if(e===1/0)return ws(Ye(Vt(t),a[1]),a[0]);if(e===-1/0)return Ql(Ye(Vt(t),a[1]),a[0]);if(e==="fro"||e==="euclidean")return Cn(Ye(dn(t),a));throw new Error(`Error in norm: invalid ord value: ${e}`)}throw new Error(`Error in norm: invalid axis: ${a}`)}const co=R({norm_:TA});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function EA(t,e=null,a=!1){return co(t,"euclidean",e,a)}const Nw=R({euclideanNorm_:EA});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kA(t){const a={x:x(t,"x","exp")};return C.runKernel(s1,a)}const qa=R({exp_:kA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _A(t,e=0){const a=x(t,"x","expandDims","string_or_numeric");E(e<=a.rank,()=>"Axis must be <= rank of the tensor");const r={input:a},i={dim:e};return C.runKernel(r1,r,i)}const Wn=R({expandDims_:_A});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function AA(t){const a={x:x(t,"x","expm1")};return C.runKernel(i1,a)}const xw=R({expm1_:AA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function OA(t,e){const a=x(t,"x","tile","string_or_numeric");E(a.rank===e.length,()=>`Error in transpose: rank of input ${a.rank} must match length of reps ${e}.`);const r={x:a},i={reps:e};return C.runKernel(Jh,r,i)}const vr=R({tile_:OA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $A(t,e,a,r="float32"){e==null&&(e=t);const i=Rn([t,e],r),l=t<=e?t:e;for(let f=0;f<l;++f)i.set(1,f,f);const c=ee(i.toTensor(),[t,e]);if(a==null)return c;if(a.length===1)return vr(Wn(c,0),[a[0],1,1]);if(a.length===2)return vr(Wn(Wn(c,0),0),[a[0],a[1],1,1]);if(a.length===3)return vr(Wn(Wn(Wn(c,0),0),0),[a[0],a[1],a[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${a.length}D.`)}const gd=R({eye_:$A});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function DA(t){const a={x:x(t,"x","floor","float32")};return C.runKernel(c1,a)}const yd=R({floor_:DA});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function RA(t,e,a=0,r=0){const i=x(t,"x","gather"),l=x(e,"indices","gather","int32"),c={x:i,indices:l},f={axis:a,batchDims:r};return C.runKernel(d1,c,f)}const bd=R({gather_:RA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function CA(t,e){let a=x(t,"a","greater","string_or_numeric"),r=x(e,"b","greater","string_or_numeric");[a,r]=et(a,r),it(a.shape,r.shape);const i={a,b:r};return C.runKernel(m1,i)}const fo=R({greater_:CA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zA(t,e){let a=x(t,"a","greaterEqual","string_or_numeric"),r=x(e,"b","greaterEqual","string_or_numeric");[a,r]=et(a,r),it(a.shape,r.shape);const i={a,b:r};return C.runKernel(g1,i)}const vd=R({greaterEqual_:zA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jA(t){const a={input:x(t,"input","imag")};return C.runKernel(b1,a)}const ho=R({imag_:jA});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function MA(t){const a={x:x(t,"x","isFinite")};return C.runKernel(v1,a)}const Tw=R({isFinite_:MA});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function IA(t){const a={x:x(t,"x","isInf")};return C.runKernel(w1,a)}const Ew=R({isInf_:IA});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function LA(t){const a={x:x(t,"x","isNaN")};return C.runKernel(S1,a)}const kw=R({isNaN_:LA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function BA(t,e=.2){const r={x:x(t,"x","leakyRelu")},i={alpha:e};return C.runKernel(N1,r,i)}const wd=R({leakyRelu_:BA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function UA(t,e){let a=x(t,"a","less","string_or_numeric"),r=x(e,"b","less","string_or_numeric");[a,r]=et(a,r),it(a.shape,r.shape);const i={a,b:r};return C.runKernel(x1,i)}const Jl=R({less_:UA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qA(t,e){let a=x(t,"a","lessEqual","string_or_numeric"),r=x(e,"b","lessEqual","string_or_numeric");[a,r]=et(a,r),it(a.shape,r.shape);const i={a,b:r};return C.runKernel(T1,i)}const fu=R({lessEqual_:qA});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _w(t,e,a){if(a<=0)throw new Error("The number of values should be positive.");const r={start:t,stop:e,num:a};return C.runKernel(E1,{},r)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function FA(t,e=5,a=1,r=1,i=.5){const l=x(t,"x","localResponseNormalization");E(l.rank===4||l.rank===3,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${l.rank}.`),E(Nr(e),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${e}.`);let c=l,f=!1;l.rank===3&&(f=!0,c=ee(l,[1,l.shape[0],l.shape[1],l.shape[2]]));const h={x:c},p={depthRadius:e,bias:a,alpha:r,beta:i},g=C.runKernel(D1,h,p);return f?ee(g,[g.shape[1],g.shape[2],g.shape[3]]):g}const Aw=R({localResponseNormalization_:FA});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function VA(t){const a={x:x(t,"x","log","float32")};return C.runKernel(k1,a)}const kr=R({log_:VA});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function HA(t){const a={x:x(t,"x","log1p")};return C.runKernel(_1,a)}const Sd=R({log1p_:HA});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function GA(t){return E(Ia(t),()=>"The f passed in grad(f) must be a function"),(e,a)=>{const r=x(e,"x","tf.grad","string_or_numeric"),i=a!=null?x(a,"dy","tf.grad"):null;return C.tidy(()=>{const{value:l,grads:c}=C.gradients(()=>t(r),[r],i);return i!=null&&Dt(l.shape,i.shape,"The shape of dy passed in grad(f)(x, dy) must match the shape returned by f(x)"),hu(c),c[0]})}}function KA(t){return E(Ia(t),()=>"The f passed in grads(f) must be a function"),(e,a)=>{E(Array.isArray(e),()=>"The args passed in grads(f)(args) must be an array of `Tensor`s or `TensorLike`s");const r=Ki(e,"args","tf.grads","string_or_numeric"),i=a!=null?x(a,"dy","tf.grads"):null;return C.tidy(()=>{const{value:l,grads:c}=C.gradients(()=>t(...r),r,i);return i!=null&&Dt(l.shape,i.shape,"The shape of dy passed in grads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),hu(c),c})}}function YA(t){return E(Ia(t),()=>"The f passed in valueAndGrad(f) must be a function"),(e,a)=>{E(e instanceof Je,()=>"The x passed in valueAndGrad(f)(x) must be a tensor"),E(a==null||a instanceof Je,()=>"The dy passed in valueAndGrad(f)(x, dy) must be a tensor");const{grads:r,value:i}=C.gradients(()=>t(e),[e],a);return hu(r),{grad:r[0],value:i}}}function PA(t){return E(Ia(t),()=>"The f passed in valueAndGrads(f) must be a function"),(e,a)=>{E(Array.isArray(e)&&e.every(i=>i instanceof Je),()=>"The args passed in valueAndGrads(f)(args) must be array of tensors"),E(a==null||a instanceof Je,()=>"The dy passed in valueAndGrads(f)(args, dy) must be a tensor");const r=C.gradients(()=>t(...e),e,a);return a!=null&&Dt(r.value.shape,a.shape,"The shape of dy passed in valueAndGrads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),hu(r.grads),r}}function Ow(t,e){E(Ia(t),()=>"The f passed in variableGrads(f) must be a function"),E(e==null||Array.isArray(e)&&e.every(p=>p instanceof Gi),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");const a=e!=null;if(!a){e=[];for(const p in C.registeredVariables)e.push(C.registeredVariables[p])}const r=a?e.filter(p=>!p.trainable):null,i=e.length;e=e.filter(p=>p.trainable),E(e.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${i} variables is trainable.`);const l=!0,{value:c,grads:f}=C.gradients(t,e,null,l);E(f.some(p=>p!=null),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),E(c.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${c.rank} tensor`);const h={};return e.forEach((p,g)=>{f[g]!=null&&(h[p.name]=f[g])}),r!=null&&r.forEach(p=>h[p.name]=null),{value:c,grads:h}}function zn(t){return C.customGrad(t)}function hu(t){if(t.filter(a=>a==null).length>0)throw new Error(`Cannot compute gradient of y=f(x) with respect to x. Make sure that
    the f you passed encloses all operations that lead from x to y.`)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function XA(t){const a={x:x(t,"x","neg")};return C.runKernel(H1,a)}const Sn=R({neg_:XA});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ZA(t){const a={x:x(t,"x","softplus")};return C.runKernel(k2,a)}const Nd=R({softplus_:ZA});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function WA(t){const e=x(t,"x","logSigmoid");return zn(r=>({value:Sn(Nd(Sn(r))),gradFunc:c=>le(c,vs(Sn(r)))}))(e)}const $w=R({logSigmoid_:WA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function QA(t,e){let a=x(t,"a","sub"),r=x(e,"b","sub");[a,r]=et(a,r);const i={a,b:r};return C.runKernel(V2,i)}const Te=R({sub_:QA});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function JA(t,e=-1){const a=x(t,"logits","logSoftmax");if(e===-1&&(e=a.rank-1),e!==a.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${a.rank} and axis was ${e}`);return zn((i,l)=>{const f=ws(i,e,!0),h=Te(i,f),p=Te(He(h,"float32"),kr(Ye(qa(h),e,!0)));return l([p]),{value:p,gradFunc:(y,v)=>{const[S]=v,k=!0,$=qa(S);return Te(y,le(Ye(y,e,k),$))}}})(a)}const Dw=R({logSoftmax_:JA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function e4(t,e=null,a=!1){const r=x(t,"x","logSumExp"),i=to(e,r.shape),l=ws(r,i,!0),c=Te(r,l),f=qa(c),h=Ye(f,i),p=kr(h),g=be(ee(l,p.shape),p);if(a){const y=uo(g.shape,i);return ee(g,y)}return g}const xd=R({logSumExp_:e4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function t4(t,e){const a=x(t,"a","logicalAnd","bool"),r=x(e,"b","logicalAnd","bool");it(a.shape,r.shape);const i={a,b:r};return C.runKernel(A1,i)}const Zi=R({logicalAnd_:t4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function n4(t){const a={x:x(t,"x","logicalNot","bool")};return C.runKernel(O1,a)}const Td=R({logicalNot_:n4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a4(t,e){const a=x(t,"a","logicalOr","bool"),r=x(e,"b","logicalOr","bool");it(a.shape,r.shape);const i={a,b:r};return C.runKernel($1,i)}const Ed=R({logicalOr_:a4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s4(t,e){const a=x(t,"a","logicalXor","bool"),r=x(e,"b","logicalXor","bool");return it(a.shape,r.shape),Zi(Ed(t,e),Td(Zi(t,e)))}const Rw=R({logicalXor_:s4});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Dl=2147483648;function r4(t,e,a="left"){const r=x(t,"sortedSequence","searchSorted"),i=x(e,"values","searchSorted"),l=r.shape[r.shape.length-1],c=i.shape[i.shape.length-1],f=ee(r,[-1,l]),h=ee(i,[-1,c]);if(f.rank<2)throw new Error("Sorted input argument must be at least 2-dimensional");if(f.shape[0]!==h.shape[0])throw new Error("Leading dimension of 'sortedSequence' and 'values' must match.");if(Ue(h.shape)>=Dl)throw new Error(`values tensor size must less than ${Dl}`);if(f.shape[1]>=Dl)throw new Error(`trailing dim_size must less than ${Dl} for int32 output type, was ${f.shape[1]}`);const p={sortedSequence:f,values:h},g={side:a};return C.runKernel(b2,p,g)}const du=R({searchSorted_:r4});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cw(t,e){return du(t,e,"left")}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function i4(t,e,a,r,i){const l=x(t,"x","maxPool"),c=1;let f=l,h=!1;l.rank===3&&(h=!0,f=ee(l,[1,l.shape[0],l.shape[1],l.shape[2]])),E(f.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${f.rank}.`),E(sa(a,c),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${a} and dilations '${c}'`),pn("maxPool",r,i);const p={x:f},g={filterSize:e,strides:a,pad:r,dimRoundingMode:i},y=C.runKernel(z1,p,g);return h?ee(y,[y.shape[1],y.shape[2],y.shape[3]]):y}const kd=R({maxPool_:i4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function o4(t,e=[1,1,1],a,r,i,l="NDHWC"){const c=x(t,"x","maxPool3d");let f=c,h=!1;c.rank===4&&(h=!0,f=ee(c,[1,c.shape[0],c.shape[1],c.shape[2],c.shape[3]])),E(f.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${f.rank}.`),E(l==="NDHWC",()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${l}`),pn("maxPool3d",r,i);const p={x:f},g={filterSize:e,strides:a,pad:r,dimRoundingMode:i,dataFormat:l},y=C.runKernel(j1,p,g);return h?ee(y,[y.shape[1],y.shape[2],y.shape[3],y.shape[4]]):y}const zw=R({maxPool3d_:o4});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function l4(t,e,a,r,i=!1){const c={x:x(t,"x","maxPoolWithArgmax")},f={filterSize:e,strides:a,pad:r,includeBatchInIndex:i},h=C.runKernel(M1,c,f);return{result:h[0],indexes:h[1]}}const jw=R({maxPoolWithArgmax_:l4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function u4(t,e){let a=x(t,"a","maximum"),r=x(e,"b","maximum");[a,r]=et(a,r),a.dtype==="bool"&&(a=He(a,"int32"),r=He(r,"int32")),it(a.shape,r.shape);const i={a,b:r};return C.runKernel(C1,i)}const _d=R({maximum_:u4});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function c4(t,e=null,a=!1){const i={x:x(t,"x","mean")},l={axis:e,keepDims:a};return C.runKernel(I1,i,l)}const Wi=R({mean_:c4});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fa(t,e="float32"){if(Gt(t),e==="complex64"){const r=Fa(t,"float32"),i=Fa(t,"float32");return aa(r,i)}const a=ou(Ue(t),e);return C.makeTensor(a,t,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ja(t,e="float32"){if(Gt(t),e==="complex64"){const r=ja(t,"float32"),i=Fa(t,"float32");return aa(r,i)}const a=Kh(Ue(t),e);return C.makeTensor(a,t,e)}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mw(t,e,{indexing:a="xy"}={}){if(a!=="xy"&&a!=="ij")throw new TypeError(`${a} is not a valid third argument to meshgrid`);if(t===void 0)return[];let r=x(t,"x","meshgrid",t instanceof Je?t.dtype:"float32");if(e===void 0)return[r];let i=x(e,"y","meshgrid",e instanceof Je?e.dtype:"float32");const l=Ue(r.shape),c=Ue(i.shape);return a==="xy"?(r=ee(r,[1,-1]),i=ee(i,[-1,1]),[Me(ja([c,1],r.dtype),r),Me(i,ja([1,l],i.dtype))]):(r=ee(r,[-1,1]),i=ee(i,[1,-1]),[Me(r,ja([1,c],r.dtype)),Me(ja([l,1],i.dtype),i)])}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function f4(t,e){let a=x(t,"a","minimum"),r=x(e,"b","minimum");[a,r]=et(a,r),a.dtype==="bool"&&(a=He(a,"int32"),r=He(r,"int32")),it(a.shape,r.shape);const i={a,b:r};return C.runKernel(B1,i)}const Qi=R({minimum_:f4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function h4(t,e,a){E(a==="reflect"||a==="symmetric",()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${a}.`);const r=x(t,"x","mirrorPad");if(r.rank===0)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");E(e.length===r.rank,()=>`Padding doesn't match input. Must be ${r.rank}. Got ${e.length}.`);const i=a==="reflect"?1:0;for(let f=0;f<r.rank;f++)E(e[f].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),E(e[f][0]>=0&&e[f][0]<=r.shape[f]-i&&e[f][1]>=0&&e[f][1]<=r.shape[f]-i,()=>`Padding in dimension ${f} cannot be greater than or equal to ${r.shape[f]-i} or less than 0 for input of shape ${r.shape}`);const l={paddings:e,mode:a},c={x:r};return C.runKernel(U1,c,l)}const Iw=R({mirrorPad_:h4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function d4(t,e){let a=x(t,"a","mod"),r=x(e,"b","mod");[a,r]=et(a,r);const i={a,b:r};return C.runKernel(q1,i)}const Lw=R({mod_:d4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function p4(t,e=null,a=!1){t=x(t,"x","moments");const r=to(e,t.shape),i=Wi(t,r,a);let l=i.shape;a||(l=uo(i.shape,r));const c=dn(Te(He(t,"float32"),ee(i,l))),f=Wi(c,r,a);return{mean:i,variance:f}}const Bw=R({moments_:p4});function m4(t,e,a,r){const i=x(e,"data","multiRNNCell"),l=Ki(a,"c","multiRNNCell"),c=Ki(r,"h","multiRNNCell");let f=i;const h=[];for(let y=0;y<t.length;y++){const v=t[y](f,l[y],c[y]);h.push(v[0]),h.push(v[1]),f=v[1]}const p=[],g=[];for(let y=0;y<h.length;y+=2)p.push(h[y]),g.push(h[y+1]);return[p,g]}const Uw=R({multiRNNCell_:m4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function g4(t,e,a,r=!1){const i=x(t,"logits","multinomial"),l=i.size,c=i.rank;if(l<2)throw new Error(`Error in multinomial: you need at least 2 outcomes, but got ${l}.`);if(c>2)throw new Error(`Rank of probabilities must be 1 or 2, but is ${c}`);a=a||Math.random();const h={logits:c===1?ee(i,[1,-1]):i},p={numSamples:e,seed:a,normalized:r},g=C.runKernel(F1,h,p);return c===1?ee(g,[g.size]):g}const qw=R({multinomial_:g4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function y4(t,e){let a=x(t,"a","notEqual","string_or_numeric"),r=x(e,"b","notEqual","string_or_numeric");[a,r]=et(a,r),it(a.shape,r.shape);const i={a,b:r};return C.runKernel(G1,i)}const Ad=R({notEqual_:y4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function b4(t,e,a=1,r=0,i="int32"){if(e<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${e}`);const c={indices:x(t,"indices","oneHot","int32")},f={dtype:i,depth:e,onValue:a,offValue:r};return C.runKernel(Z1,c,f)}const eu=R({oneHot_:b4});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function v4(t){const a={x:x(t,"x","onesLike")};return C.runKernel(X1,a)}const Fw=R({onesLike_:v4});function w4(t,e){const a=x(t,"v1","outerProduct"),r=x(e,"v2","outerProduct");E(a.rank===1&&r.rank===1,()=>`Error in outerProduct: inputs must be rank 1, but got ranks ${a.rank} and ${r.rank}.`);const i=ee(a,[-1,1]),l=ee(r,[1,-1]);return Me(i,l)}const Vw=R({outerProduct_:w4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function S4(t,e,a=0){const r=x(t,"x","pad");if(r.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const i={paddings:e,constantValue:a},l={x:r};return C.runKernel(Q1,l,i)}const Rr=R({pad_:S4});function N4(t,e,a=0){return E(e.length===2,()=>"Invalid number of paddings. Must be length of 2."),Rr(t,[e],a)}const Hw=R({pad1d_:N4});function x4(t,e,a=0){return E(e.length===2&&e[0].length===2&&e[1].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),Rr(t,e,a)}const Gw=R({pad2d_:x4});function T4(t,e,a=0){return E(e.length===3&&e[0].length===2&&e[1].length===2&&e[2].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),Rr(t,e,a)}const Kw=R({pad3d_:T4});function E4(t,e,a=0){return E(e.length===4&&e[0].length===2&&e[1].length===2&&e[2].length===2&&e[3].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),Rr(t,e,a)}const Yw=R({pad4d_:E4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function k4(t,e,a){const r=x(t,"x","spaceToBatchND");E(r.rank>=1+e.length,()=>`input rank ${r.rank} should be > than [blockShape] ${e.length}`),E(a.length===e.length,()=>`paddings.shape[0] ${a.length} must be equal to [blockShape] ${e.length}`),E(r.shape.reduce((c,f,h)=>h>0&&h<=e.length?c&&(f+a[h-1][0]+a[h-1][1])%e[h-1]===0:c,!0),()=>`input spatial dimensions ${r.shape.slice(1)} with paddings ${a.toString()} must be divisible by blockShapes ${e.toString()}`);const i={x:r},l={blockShape:e,paddings:a};return C.runKernel(O2,i,l)}const Od=R({spaceToBatchND_:k4});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _4(t,e,a,r,i,l,c){i==null&&(i=[1,1]),l==null&&(l=1),r===0&&(r="valid");const f=x(t,"x","maxPool");let h=f,p=!1;f.rank===3&&(p=!0,h=ee(f,[1,f.shape[0],f.shape[1],f.shape[2]])),E(sa(l,i),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${l} and dilations '${i}'`);const g=Uv(h.shape,e,l,i,r),y=[g.dilationHeight,g.dilationWidth];let v;r==="same"?v=O4([g.filterHeight,g.filterWidth],y):v=[[0,0],[0,0]];const S=y[0]===1&&y[1]===1,[k,$]=A4([g.inHeight,g.inWidth],y,v),A=S?r:"valid",M=S?h:Od(h,y,k),z=(a==="avg"?()=>ud(M,e,l,A,c):()=>kd(M,e,l,A,c))(),I=S?z:cd(z,y,$);return p?ee(I,[I.shape[1],I.shape[2],I.shape[3]]):I}function A4(t,e,a){const r=a.map(g=>g[0]),i=a.map(g=>g[1]),l=t.concat(r,i),c=e.map((g,y)=>(g-l[y]%g)%g),f=i.map((g,y)=>g+c[y]),h=e.map((g,y)=>[r[y],f[y]]),p=e.map((g,y)=>[0,c[y]]);return[h,p]}function O4(t,e){const r=t.map((c,f)=>c+(c-1)*(e[f]-1)).map(c=>c-1),i=r.map(c=>Math.floor(c/2)),l=r.map((c,f)=>c-i[f]);return r.map((c,f)=>[i[f],l[f]])}const Pw=R({pool_:_4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $4(t,e){const a=x(t,"x","prelu"),r=x(e,"alpha","prelu"),i={x:a,alpha:r};return C.runKernel(e2,i)}const $d=R({prelu_:$4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function D4(t,e=null,a=!1){let r=x(t,"x","prod");r.dtype==="bool"&&(r=He(r,"int32"));const i={x:r},l={axis:e,keepDims:a};return C.runKernel(t2,i,l)}const Xw=R({prod_:D4});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function R4(t,e,a,r){const i=t.map((g,y)=>x(g,`tensors${y}`,"raggedGather","int32")),l=x(e,"paramsDenseValues","raggedGather"),c=x(a,"indices","raggedGather","int32"),f={paramsNestedSplits:i,paramsDenseValues:l,indices:c},h={outputRaggedRank:r},p=C.runKernel(n2,f,h);return{outputNestedSplits:p.slice(0,p.length-1),outputDenseValues:p[p.length-1]}}const Zw=R({raggedGather_:R4});/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function C4(t,e,a){const r=x(t,"starts","raggedRange"),i=x(e,"limits","raggedRange",r.dtype),l=x(a,"deltas","raggedRange",r.dtype),c={starts:r,limits:i,deltas:l},f=C.runKernel(a2,c);return{rtNestedSplits:f[0],rtDenseValues:f[1]}}const Ww=R({raggedRange_:C4});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function z4(t,e,a,r,i){const l=x(t,"shape","raggedTensorToTensor","int32"),c=x(e,"values","raggedTensorToTensor"),f=x(a,"defaultValue","raggedTensorToTensor",c.dtype),h=r.map((y,v)=>x(y,`tensors${v}`,"raggedTensorToTensor","int32")),p={shape:l,values:c,defaultValue:f,rowPartitionTensors:h},g={rowPartitionTypes:i};return C.runKernel(s2,p,g)}const Qw=R({raggedTensorToTensor_:z4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function j4(t,e,a){Gt(t);const r=Ue(t);let i=null;if(a==null||a==="float32")i=new Float32Array(r);else if(a==="int32")i=new Int32Array(r);else if(a==="bool")i=new Uint8Array(r);else throw new Error(`Unknown data type ${a}`);for(let l=0;l<r;l++)i[l]=e();return C.makeTensor(i,t,a)}const Jw=R({rand_:j4});var Ml={exports:{}},M4=Ml.exports,v0;function I4(){return v0||(v0=1,function(t){(function(e,a,r){function i(h){var p=this,g=f();p.next=function(){var y=2091639*p.s0+p.c*23283064365386963e-26;return p.s0=p.s1,p.s1=p.s2,p.s2=y-(p.c=y|0)},p.c=1,p.s0=g(" "),p.s1=g(" "),p.s2=g(" "),p.s0-=g(h),p.s0<0&&(p.s0+=1),p.s1-=g(h),p.s1<0&&(p.s1+=1),p.s2-=g(h),p.s2<0&&(p.s2+=1),g=null}function l(h,p){return p.c=h.c,p.s0=h.s0,p.s1=h.s1,p.s2=h.s2,p}function c(h,p){var g=new i(h),y=p&&p.state,v=g.next;return v.int32=function(){return g.next()*4294967296|0},v.double=function(){return v()+(v()*2097152|0)*11102230246251565e-32},v.quick=v,y&&(typeof y=="object"&&l(y,g),v.state=function(){return l(g,{})}),v}function f(){var h=4022871197,p=function(g){g=String(g);for(var y=0;y<g.length;y++){h+=g.charCodeAt(y);var v=.02519603282416938*h;h=v>>>0,v-=h,v*=h,h=v>>>0,v-=h,h+=v*4294967296}return(h>>>0)*23283064365386963e-26};return p}a&&a.exports?a.exports=c:this.alea=c})(M4,t)}(Ml)),Ml.exports}var Il={exports:{}},L4=Il.exports,w0;function B4(){return w0||(w0=1,function(t){(function(e,a,r){function i(f){var h=this,p="";h.x=0,h.y=0,h.z=0,h.w=0,h.next=function(){var y=h.x^h.x<<11;return h.x=h.y,h.y=h.z,h.z=h.w,h.w^=h.w>>>19^y^y>>>8},f===(f|0)?h.x=f:p+=f;for(var g=0;g<p.length+64;g++)h.x^=p.charCodeAt(g)|0,h.next()}function l(f,h){return h.x=f.x,h.y=f.y,h.z=f.z,h.w=f.w,h}function c(f,h){var p=new i(f),g=h&&h.state,y=function(){return(p.next()>>>0)/4294967296};return y.double=function(){do var v=p.next()>>>11,S=(p.next()>>>0)/4294967296,k=(v+S)/(1<<21);while(k===0);return k},y.int32=p.next,y.quick=y,g&&(typeof g=="object"&&l(g,p),y.state=function(){return l(p,{})}),y}a&&a.exports?a.exports=c:this.xor128=c})(L4,t)}(Il)),Il.exports}var Ll={exports:{}},U4=Ll.exports,S0;function q4(){return S0||(S0=1,function(t){(function(e,a,r){function i(f){var h=this,p="";h.next=function(){var y=h.x^h.x>>>2;return h.x=h.y,h.y=h.z,h.z=h.w,h.w=h.v,(h.d=h.d+362437|0)+(h.v=h.v^h.v<<4^(y^y<<1))|0},h.x=0,h.y=0,h.z=0,h.w=0,h.v=0,f===(f|0)?h.x=f:p+=f;for(var g=0;g<p.length+64;g++)h.x^=p.charCodeAt(g)|0,g==p.length&&(h.d=h.x<<10^h.x>>>4),h.next()}function l(f,h){return h.x=f.x,h.y=f.y,h.z=f.z,h.w=f.w,h.v=f.v,h.d=f.d,h}function c(f,h){var p=new i(f),g=h&&h.state,y=function(){return(p.next()>>>0)/4294967296};return y.double=function(){do var v=p.next()>>>11,S=(p.next()>>>0)/4294967296,k=(v+S)/(1<<21);while(k===0);return k},y.int32=p.next,y.quick=y,g&&(typeof g=="object"&&l(g,p),y.state=function(){return l(p,{})}),y}a&&a.exports?a.exports=c:this.xorwow=c})(U4,t)}(Ll)),Ll.exports}var Bl={exports:{}},F4=Bl.exports,N0;function V4(){return N0||(N0=1,function(t){(function(e,a,r){function i(f){var h=this;h.next=function(){var g=h.x,y=h.i,v,S;return v=g[y],v^=v>>>7,S=v^v<<24,v=g[y+1&7],S^=v^v>>>10,v=g[y+3&7],S^=v^v>>>3,v=g[y+4&7],S^=v^v<<7,v=g[y+7&7],v=v^v<<13,S^=v^v<<9,g[y]=S,h.i=y+1&7,S};function p(g,y){var v,S=[];if(y===(y|0))S[0]=y;else for(y=""+y,v=0;v<y.length;++v)S[v&7]=S[v&7]<<15^y.charCodeAt(v)+S[v+1&7]<<13;for(;S.length<8;)S.push(0);for(v=0;v<8&&S[v]===0;++v);for(v==8?S[7]=-1:S[v],g.x=S,g.i=0,v=256;v>0;--v)g.next()}p(h,f)}function l(f,h){return h.x=f.x.slice(),h.i=f.i,h}function c(f,h){f==null&&(f=+new Date);var p=new i(f),g=h&&h.state,y=function(){return(p.next()>>>0)/4294967296};return y.double=function(){do var v=p.next()>>>11,S=(p.next()>>>0)/4294967296,k=(v+S)/(1<<21);while(k===0);return k},y.int32=p.next,y.quick=y,g&&(g.x&&l(g,p),y.state=function(){return l(p,{})}),y}a&&a.exports?a.exports=c:this.xorshift7=c})(F4,t)}(Bl)),Bl.exports}var Ul={exports:{}},H4=Ul.exports,x0;function G4(){return x0||(x0=1,function(t){(function(e,a,r){function i(f){var h=this;h.next=function(){var g=h.w,y=h.X,v=h.i,S,k;return h.w=g=g+1640531527|0,k=y[v+34&127],S=y[v=v+1&127],k^=k<<13,S^=S<<17,k^=k>>>15,S^=S>>>12,k=y[v]=k^S,h.i=v,k+(g^g>>>16)|0};function p(g,y){var v,S,k,$,A,M=[],X=128;for(y===(y|0)?(S=y,y=null):(y=y+"\0",S=0,X=Math.max(X,y.length)),k=0,$=-32;$<X;++$)y&&(S^=y.charCodeAt(($+32)%y.length)),$===0&&(A=S),S^=S<<10,S^=S>>>15,S^=S<<4,S^=S>>>13,$>=0&&(A=A+1640531527|0,v=M[$&127]^=S+A,k=v==0?k+1:0);for(k>=128&&(M[(y&&y.length||0)&127]=-1),k=127,$=4*128;$>0;--$)S=M[k+34&127],v=M[k=k+1&127],S^=S<<13,v^=v<<17,S^=S>>>15,v^=v>>>12,M[k]=S^v;g.w=A,g.X=M,g.i=k}p(h,f)}function l(f,h){return h.i=f.i,h.w=f.w,h.X=f.X.slice(),h}function c(f,h){f==null&&(f=+new Date);var p=new i(f),g=h&&h.state,y=function(){return(p.next()>>>0)/4294967296};return y.double=function(){do var v=p.next()>>>11,S=(p.next()>>>0)/4294967296,k=(v+S)/(1<<21);while(k===0);return k},y.int32=p.next,y.quick=y,g&&(g.X&&l(g,p),y.state=function(){return l(p,{})}),y}a&&a.exports?a.exports=c:this.xor4096=c})(H4,t)}(Ul)),Ul.exports}var ql={exports:{}},K4=ql.exports,T0;function Y4(){return T0||(T0=1,function(t){(function(e,a,r){function i(f){var h=this,p="";h.next=function(){var y=h.b,v=h.c,S=h.d,k=h.a;return y=y<<25^y>>>7^v,v=v-S|0,S=S<<24^S>>>8^k,k=k-y|0,h.b=y=y<<20^y>>>12^v,h.c=v=v-S|0,h.d=S<<16^v>>>16^k,h.a=k-y|0},h.a=0,h.b=0,h.c=-1640531527,h.d=1367130551,f===Math.floor(f)?(h.a=f/4294967296|0,h.b=f|0):p+=f;for(var g=0;g<p.length+20;g++)h.b^=p.charCodeAt(g)|0,h.next()}function l(f,h){return h.a=f.a,h.b=f.b,h.c=f.c,h.d=f.d,h}function c(f,h){var p=new i(f),g=h&&h.state,y=function(){return(p.next()>>>0)/4294967296};return y.double=function(){do var v=p.next()>>>11,S=(p.next()>>>0)/4294967296,k=(v+S)/(1<<21);while(k===0);return k},y.int32=p.next,y.quick=y,g&&(typeof g=="object"&&l(g,p),y.state=function(){return l(p,{})}),y}a&&a.exports?a.exports=c:this.tychei=c})(K4,t)}(ql)),ql.exports}var Fl={exports:{}};const P4={},X4=Object.freeze(Object.defineProperty({__proto__:null,default:P4},Symbol.toStringTag,{value:"Module"})),Z4=oE(X4);var W4=Fl.exports,E0;function Q4(){return E0||(E0=1,function(t){(function(e,a,r){var i=256,l=6,c=52,f="random",h=r.pow(i,l),p=r.pow(2,c),g=p*2,y=i-1,v;function S(I,V,Z){var re=[];V=V==!0?{entropy:!0}:V||{};var ie=M(A(V.entropy?[I,z(a)]:I??X(),3),re),F=new k(re),U=function(){for(var _=F.g(l),te=h,ue=0;_<p;)_=(_+ue)*i,te*=i,ue=F.g(1);for(;_>=g;)_/=2,te/=2,ue>>>=1;return(_+ue)/te};return U.int32=function(){return F.g(4)|0},U.quick=function(){return F.g(4)/4294967296},U.double=U,M(z(F.S),a),(V.pass||Z||function(_,te,ue,pe){return pe&&(pe.S&&$(pe,F),_.state=function(){return $(F,{})}),ue?(r[f]=_,te):_})(U,ie,"global"in V?V.global:this==r,V.state)}function k(I){var V,Z=I.length,re=this,ie=0,F=re.i=re.j=0,U=re.S=[];for(Z||(I=[Z++]);ie<i;)U[ie]=ie++;for(ie=0;ie<i;ie++)U[ie]=U[F=y&F+I[ie%Z]+(V=U[ie])],U[F]=V;(re.g=function(_){for(var te,ue=0,pe=re.i,fe=re.j,G=re.S;_--;)te=G[pe=y&pe+1],ue=ue*i+G[y&(G[pe]=G[fe=y&fe+te])+(G[fe]=te)];return re.i=pe,re.j=fe,ue})(i)}function $(I,V){return V.i=I.i,V.j=I.j,V.S=I.S.slice(),V}function A(I,V){var Z=[],re=typeof I,ie;if(V&&re=="object")for(ie in I)try{Z.push(A(I[ie],V-1))}catch{}return Z.length?Z:re=="string"?I:I+"\0"}function M(I,V){for(var Z=I+"",re,ie=0;ie<Z.length;)V[y&ie]=y&(re^=V[y&ie]*19)+Z.charCodeAt(ie++);return z(V)}function X(){try{var I;return v&&(I=v.randomBytes)?I=I(i):(I=new Uint8Array(i),(e.crypto||e.msCrypto).getRandomValues(I)),z(I)}catch{var V=e.navigator,Z=V&&V.plugins;return[+new Date,e,Z,e.screen,z(a)]}}function z(I){return String.fromCharCode.apply(0,I)}if(M(r.random(),a),t.exports){t.exports=S;try{v=Z4}catch{}}else r["seed"+f]=S})(typeof self<"u"?self:W4,[],Math)}(Fl)),Fl.exports}var Qf,k0;function J4(){if(k0)return Qf;k0=1;var t=I4(),e=B4(),a=q4(),r=V4(),i=G4(),l=Y4(),c=Q4();return c.alea=t,c.xor128=e,c.xorwow=a,c.xorshift7=r,c.xor4096=i,c.tychei=l,Qf=c,Qf}var Dd=J4();/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const eO=.001,eS=.1;function tO(t,e,a){return a==null&&(a=Rd()),Nh(t,e,(r,i)=>Cd(r,i,a))}function Rd(){return C.backend.floatPrecision()===32?eO:eS}function Nh(t,e,a){let r=!0;if((ht(t)||ht(e))&&(r=!1),ht(t)&&ht(e)&&(r=!0),r){const c=t.constructor.name,f=e.constructor.name;if(c!==f)throw new Error(`Arrays are of different type. Actual: ${c}. Expected: ${f}`)}if(Array.isArray(t)&&Array.isArray(e)){const c=Dn(t),f=Dn(e);if(!Nn(c,f))throw new Error(`Arrays have different shapes. Actual: [${c}]. Expected: [${f}]`)}const i=ht(t)?t:Ba(t),l=ht(e)?e:Ba(e);if(i.length!==l.length)throw new Error(`Arrays have different lengths actual: ${i.length} vs expected: ${l.length}.
Actual:   ${i}.
Expected: ${l}.`);for(let c=0;c<l.length;++c){const f=i[c],h=l[c];if(!a(f,h))throw new Error(`Arrays differ: actual[${c}] = ${f}, expected[${c}] = ${h}.
Actual:   ${i}.
Expected: ${l}.`)}typeof expect<"u"&&expect().nothing()}function nO(t,e){t().then(()=>e.fail(),()=>e()),typeof expect<"u"&&expect().nothing()}function aO(t,e){const a=typeof e=="string"||typeof e=="number"||typeof e=="boolean"?[e]:e;return Ca(t)||Ca(t[0])||Ca(e)||Ca(e[0])?Nh(t,a,(r,i)=>r==i):Nh(t,e,(r,i)=>Cd(r,i,0))}function sO(t,e,a){if(a==null&&(a=Rd()),!Cd(t,e,a))throw new Error(`Numbers differ: actual === ${t}, expected === ${e}`);typeof expect<"u"&&expect().nothing()}function Cd(t,e,a){return!isFinite(t)&&!isFinite(e)?!0:!(isNaN(t)||isNaN(e)||Math.abs(t-e)>a)}function rO(t,e,a){for(let r=0;r<t.length;r++)if(t[r]<e||t[r]>a)throw new Error(`Value out of range:${t[r]} low: ${e}, high: ${a}`)}function iO(t,e){const a=new Float32Array(t),r=new Float32Array(e);if(a.length!==r.length)throw new Error(`Expected ArrayBuffer to be of length ${r.length}, but it was ${a.length}`);for(let i=0;i<r.length;i++)if(a[i]!==r[i])throw new Error(`Expected ArrayBuffer value at ${i} to be ${r[i]} but got ${a[i]} instead`)}function tS(t){for(let e=0;e<t.length;e++){const a=t[e];Array.isArray(a)?tS(a):t[e]=so(a)}return t}function oO(t){const e=document.createElement("video");return"playsInline"in e&&(e.playsInline=!0),e.muted=!0,e.loop=!0,e.style.position="fixed",e.style.left="0px",e.style.top="0px",e.preload="auto",e.appendChild(t),new Promise(a=>{e.addEventListener("loadeddata",r=>a(e)),e.load()})}async function lO(t){await t.play(),"requestVideoFrameCallback"in t&&await new Promise(e=>{t.requestVideoFrameCallback(e)})}const uO=Object.freeze(Object.defineProperty({__proto__:null,TEST_EPSILON_FLOAT16:eS,createVideoElement:oO,encodeStrings:tS,expectArrayBuffersEqual:iO,expectArraysClose:tO,expectArraysEqual:aO,expectNumbersClose:sO,expectPromiseToFail:nO,expectValuesInRange:rO,play:lO,testEpsilon:Rd},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class zd{constructor(e,a,r,i,l){this.mean=e,this.stdDev=a,this.dtype=r,this.nextVal=NaN,this.truncated=i,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);const c=l||Math.random();this.random=Dd.alea(c.toString())}nextValue(){if(!isNaN(this.nextVal)){const i=this.nextVal;return this.nextVal=NaN,i}let e,a,r=!1;for(;!r;){let i,l,c;do i=2*this.random()-1,l=2*this.random()-1,c=i*i+l*l;while(c>=1||c===0);const f=Math.sqrt(-2*Math.log(c)/c);e=this.mean+this.stdDev*i*f,a=this.mean+this.stdDev*l*f,(!this.truncated||this.isValidTruncated(e))&&(r=!0)}return(!this.truncated||this.isValidTruncated(a))&&(this.nextVal=this.convertValue(a)),this.convertValue(e)}convertValue(e){return this.dtype==null||this.dtype==="float32"?e:Math.round(e)}isValidTruncated(e){return e<=this.upper&&e>=this.lower}}class cO{constructor(e,a,r,i){this.alpha=e,this.beta=1/a,this.dtype=r;const l=i||Math.random();this.randu=Dd.alea(l.toString()),this.randn=new zd(0,1,r,!1,this.randu()),e<1?this.d=e+2/3:this.d=e-1/3,this.c=1/Math.sqrt(9*this.d)}nextValue(){let e,a,r,i,l,c;for(;;){do i=this.randn.nextValue(),c=1+this.c*i;while(c<=0);if(c*=c*c,e=i*i,a=1-.331*e*e,r=.5*e+this.d*(1-c+Math.log(c)),l=this.randu(),l<a||Math.log(l)<r)break}return c=1/this.beta*this.d*c,this.alpha<1&&(c*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(c)}convertValue(e){return this.dtype==="float32"?e:Math.round(e)}}class fO{constructor(e=0,a=1,r,i){if(this.canReturnFloat=()=>this.dtype==null||this.dtype==="float32",this.min=e,this.range=a-e,this.dtype=r,i==null&&(i=Math.random()),typeof i=="number"&&(i=i.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${e} - ${a} <= 1 and dtype is not float`);this.random=Dd.alea(i)}convertValue(e){return this.canReturnFloat()?e:Math.round(e)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hO(t,e,a=1,r="float32",i){if(Gt(t),a==null&&(a=1),r==null&&(r="float32"),r!=="float32"&&r!=="int32")throw new Error(`Unsupported data type ${r}`);const l=new cO(e,a,r,i),c=Rn(t,r);for(let f=0;f<c.values.length;f++)c.values[f]=l.nextValue();return c.toTensor()}const nS=R({randomGamma_:hO});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dO(t,e=0,a=1,r,i){if(Gt(t),r!=null&&r==="bool")throw new Error(`Unsupported data type ${r}`);const l=new zd(e,a,r,!1,i),c=Rn(t,r);for(let f=0;f<c.values.length;f++)c.values[f]=l.nextValue();return c.toTensor()}const jd=R({randomNormal_:dO});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pO(t,e,a){if(e!=null&&e==="bool")throw new Error(`Unsupported data type ${e}`);return jd(t,0,1,e,a)}const aS=R({randomStandardNormal_:pO});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mO(t,e=0,a=1,r="float32",i){Gt(t);const l=Rn(t,r),c=new fO(e,a,null,i);for(let f=0;f<l.values.length;f++)l.values[f]=c.nextValue();return l.toTensor()}const pu=R({randomUniform_:mO});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gO(t,e,a,r){return pu(t,e,a,"int32",r)}const sS=R({randomUniformInt_:gO});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _r(t,e,a=1,r="float32"){if(a===0)throw new Error("Cannot have a step of zero");const i={start:t,stop:e,step:a,dtype:r};return C.runKernel(r2,{},i)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yO(t){const a={input:x(t,"input","real")};return C.runKernel(i2,a)}const Ar=R({real_:yO});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bO(t){const a={x:x(t,"x","reciprocal")};return C.runKernel(o2,a)}const rS=R({reciprocal_:bO});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vO(t){const a={x:x(t,"x","relu")};return C.runKernel(l2,a)}const po=R({relu_:vO});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wO(t){const a={x:x(t,"x","relu6")};return C.runKernel(h2,a)}const Md=R({relu6_:wO});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function SO(t,e){const r={x:x(t,"x","reverse")},i={dims:e};return C.runKernel(d2,r,i)}const Va=R({reverse_:SO});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function NO(t){const e=x(t,"x","reverse");return E(e.rank===1,()=>`Error in reverse1D: x must be rank 1 but got rank ${e.rank}.`),Va(e,0)}const iS=R({reverse1d_:NO});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xO(t,e){const a=x(t,"x","reverse");return E(a.rank===2,()=>`Error in reverse2D: x must be rank 2 but got rank ${a.rank}.`),Va(a,e)}const oS=R({reverse2d_:xO});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function TO(t,e){const a=x(t,"x","reverse");return E(a.rank===3,()=>`Error in reverse3D: x must be rank 3 but got rank ${a.rank}.`),Va(a,e)}const lS=R({reverse3d_:TO});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function EO(t,e){const a=x(t,"x","reverse");return E(a.rank===4,()=>`Error in reverse4D: x must be rank 4 but got rank ${a.rank}.`),Va(a,e)}const uS=R({reverse4d_:EO});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kO(t){const a={x:x(t,"x","round")};return C.runKernel(p2,a)}const Id=R({round_:kO});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _O(t){const a={x:x(t,"x","rsqrt","float32")};return C.runKernel(m2,a)}const cS=R({rsqrt_:_O});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function AO(t){const a={x:x(t,"x","selu")};return C.runKernel(w2,a)}const fS=R({selu_:AO});function OO(t,e,a,r,i,l=[1,1],c="NHWC"){const f=x(t,"x","separableConv2d"),h=x(e,"depthwiseFilter","separableConv2d"),p=x(a,"pointwiseFilter","separableConv2d");let g=f,y=!1;if(f.rank===3&&(y=!0,g=ee(f,[1,f.shape[0],f.shape[1],f.shape[2]])),c==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");E(g.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${g.rank}.`),E(h.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${h.rank}.`),E(p.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${h.rank}.`),E(p.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${p.shape[0]}.`),E(p.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${p.shape[1]}.`);const v=h.shape[2],S=h.shape[3];E(p.shape[2]===v*S,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${v*S}, but got ${p.shape[2]}.`);const k=cu(g,h,r,i,c,l),A=lo(k,p,1,"valid",c);return y?ee(A,[A.shape[1],A.shape[2],A.shape[3]]):A}const hS=R({separableConv2d_:OO});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function $O(t,e){const a=x(t,"x","setdiff1d"),r=x(e,"y","setdiff1d");E(a.dtype===r.dtype,()=>`x and y should have the same dtype, but got x (${a.dtype}) and y (${r.dtype}).`),E(a.rank===1,()=>`x should be 1D tensor, but got x (${a.shape}).`),E(r.rank===1,()=>`y should be 1D tensor, but got y (${r.shape}).`);const i=await a.data(),l=await r.data(),c=new Set(l);let f=0;for(let g=0;g<i.length;g++)c.has(i[g])||f++;const h=new Xl([f],a.dtype),p=new Xl([f],"int32");for(let g=0,y=0;g<i.length;g++)c.has(i[g])||(h.values[y]=i[g],p.values[y]=g,y++);return[h.toTensor(),p.toTensor()]}const dS=$O;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function DO(t){const a={x:x(t,"x","sign")};return C.runKernel(T2,a)}const pS=R({sign_:DO});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function RO(t){const a={x:x(t,"x","sin","float32")};return C.runKernel(N2,a)}const mS=R({sin_:RO});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function CO(t){const a={x:x(t,"x","sinh")};return C.runKernel(x2,a)}const gS=R({sinh_:CO});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zO(t,e,a){const r=x(t,"x","slice1d");return E(r.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${r.rank} tensor`),Be(r,[e],[a])}const yS=R({slice1d_:zO});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jO(t,e,a){const r=x(t,"x","slice2d");return E(r.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${r.rank} tensor`),Be(r,e,a)}const bS=R({slice2d_:jO});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function MO(t,e,a){const r=x(t,"x","slice3d");return E(r.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${r.rank} tensor`),Be(r,e,a)}const vS=R({slice3d_:MO});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function IO(t,e,a){const r=x(t,"x","slice4d");return E(r.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${r.rank} tensor`),Be(r,e,a)}const wS=R({slice4d_:IO});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function LO(t,e=-1){const a=x(t,"logits","softmax","float32");if(e===-1&&(e=a.rank-1),e!==a.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${a.rank} and dim was ${e}`);const r={logits:a},i={dim:e};return C.runKernel(D2,r,i)}const Ld=R({softmax_:LO});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function BO(t){E(t.dtype==="complex64",()=>`The dtype for tf.spectral.fft() must be complex64 but got ${t.dtype}.`);const e={input:t};return C.runKernel(o1,e)}const mu=R({fft_:BO});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function UO(t){E(t.dtype==="complex64",()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${t.dtype}.`);const e={input:t};return C.runKernel(y1,e)}const Ji=R({ifft_:UO});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qO(t){const e=t.shape[t.shape.length-1],a=t.size/e;let r;if(e<=2){const i=ee(t,[a,e]);r=Ji(i)}else{const i=[a,2*(e-1)],l=ee(Ar(t),[a,e]),c=ee(ho(t),[a,e]),f=Va(Be(l,[0,1],[a,e-2]),1),h=le(Va(Be(c,[0,1],[a,e-2]),1),$e(-1)),p=Nt([l,f],1),g=Nt([c,h],1),y=ee(aa(p,g),[i[0],i[1]]);r=Ji(y)}if(r=Ar(r),t.rank===3&&t.shape[0]!==0){const i=r,l=t.shape[0];r=ee(r,[l,r.shape[0]/l,r.shape[1]]),i.dispose()}return r}const Bd=R({irfft_:qO});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function FO(t,e,a=0){const i={x:x(t,"x","split")},l={numOrSizeSplits:e,axis:a};return C.runKernel($2,i,l)}const Or=R({split_:FO});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function VO(t,e){E(t.dtype==="float32",()=>`The dtype for rfft() must be real value but got ${t.dtype}`);let a=t.shape[t.shape.length-1];const r=t.size/a;let i;if(e!=null&&e<a){const k=t.shape.map(A=>0),$=t.shape.map(A=>A);$[t.shape.length-1]=e,i=Be(t,k,$),a=e}else if(e!=null&&e>a){const k=t.shape.map($=>$);k[t.shape.length-1]=e-a,i=Nt([t,Fa(k)],t.shape.length-1),a=e}else i=t;const l=Ht(i),c=ee(aa(i,l),[r,a]),f=mu(c),h=Math.floor(a/2)+1,p=Ar(f),g=ho(f),y=Or(p,[h,a-h],p.shape.length-1),v=Or(g,[h,a-h],g.shape.length-1),S=i.shape.slice();return S[i.shape.length-1]=h,ee(aa(y[0],v[0]),S)}const gu=R({rfft_:VO});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function HO(t,e){let a=x(t,"a","squaredDifference"),r=x(e,"b","squaredDifference");[a,r]=et(a,r),it(a.shape,r.shape);const i={a,b:r},l={};return C.runKernel(I2,i,l)}const Ud=R({squaredDifference_:HO});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function GO(t,e){const a=x(t,"x","squeeze","string_or_numeric");return ee(a,tb(a.shape,e).newShape)}const mo=R({squeeze_:GO});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function KO(t,e=0){const a=Ki(t,"tensors","stack","string_or_numeric");E(a.length>=1,()=>"Pass at least one tensor to tf.stack"),a.length>0&&E(e<=a[0].rank,()=>"Axis must be <= rank of the tensor");const r=a,i={axis:e};return C.runKernel(W1,r,i)}const jn=R({stack_:KO});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function YO(t,e=0){const r={x:x(t,"x","step")},i={alpha:e};return C.runKernel(Q2,r,i)}const qd=R({step_:YO});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function PO(t,e,a,r,i=0,l=0,c=0,f=0,h=0){const g={x:x(t,"x","stridedSlice","string_or_numeric")},y={begin:e,end:a,strides:r,beginMask:i,endMask:l,ellipsisMask:c,newAxisMask:f,shrinkAxisMask:h};return C.runKernel(B2,g,y)}const SS=R({stridedSlice_:PO});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function XO(t){const a={x:x(t,"x","tan","float32")};return C.runKernel(H2,a)}const NS=R({tan_:XO});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tn(t,e){_s(t);const a=Dn(t,e);if(a.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return Ha(t,null,a,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wr(t,e,a){if(_s(t),e!=null&&e.length!==2)throw new Error("tensor2d() requires shape to have two numbers");const r=Dn(t,a);if(r.length!==2&&r.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(r.length===1&&e==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return Ha(t,e,r,a)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fd(t,e,a){if(_s(t),e!=null&&e.length!==3)throw new Error("tensor3d() requires shape to have three numbers");const r=Dn(t,a);if(r.length!==3&&r.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(r.length===1&&e==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return Ha(t,e,r,a)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xS(t,e,a){if(_s(t),e!=null&&e.length!==4)throw new Error("tensor4d() requires shape to have four numbers");const r=Dn(t,a);if(r.length!==4&&r.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(r.length===1&&e==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return Ha(t,e,r,a)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function TS(t,e,a){if(_s(t),e!=null&&e.length!==5)throw new Error("tensor5d() requires shape to have five numbers");const r=Dn(t,a);if(r.length!==5&&r.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(r.length===1&&e==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return Ha(t,e,r,a)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ES(t,e,a){if(_s(t),e!=null&&e.length!==6)throw new Error("tensor6d() requires shape to have six numbers");const r=Dn(t,a);if(r.length!==6&&r.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(r.length===1&&e==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return e=e||r,Ha(t,e,r,a)}function Vd(t,e,a){const r=e.rank>1?e.shape[e.rank-1]:1,i=e.rank>1?e.rank-1:1,l=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${a.shape}, indices.shape: ${e.shape}, shape: ${t}, sliceDim: ${r}, and batchDim: ${i}.`;if(a.rank<i)throw new Error(l+` update.rank < ${i}. `);if(t.length<r+(a.rank-i))throw new Error(l+` Output shape length < ${r+(a.rank-i)}`);if(a.rank!==i+t.length-r)throw new Error(l+` update.rank != ${i+t.length-r}`);for(let c=0;c<i;++c)if(a.shape[c]!==e.shape[c])throw new Error(l+` updates.shape[${c}] (${a.shape[c]}) != indices.shape[${c}] (${e.shape[c]}).`);for(let c=0;c<a.rank-i;++c)if(a.shape[c+i]!==t[c+r])throw new Error(l+` updates.shape[${c+i}] (${a.shape[c+i]}) != shape[${c+i}] (${t[c+i]})`)}function yu(t,e,a){if(e.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${e.rank}.`);if(t.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${t.rank}.`);if(e.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${e.dtype}`);if(a.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${a}`);if(a.length===0){if(e.size===0)throw new Error(`Indices specified for empty output. indices shape: ${e.shape}`);if(t.size===0)throw new Error(`Updates specified for empty output. updates shape: ${t.shape}`)}Vd(a,e,t)}function kS(t,e,a){const r=e.shape.length,i=r>1?e.shape[r-1]:1,l=a.length;let c=1;for(let y=i;y<l;++y)c*=a[y];const f=i<1?1:i,h=Ue(e.shape)/f,p=[...$r(a.slice(0,i)),1],g=Ue(a);return{sliceRank:i,numUpdates:h,sliceSize:c,strides:p,outputSize:g}}const ZO=Object.freeze(Object.defineProperty({__proto__:null,calculateShapes:kS,validateInput:yu,validateUpdateShape:Vd},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function WO(t,e,a){const r=x(t,"tensor","tensorScatterupdate"),i=x(e,"indices","tensorScatterupdate","int32"),l=x(a,"updates","tensorScatterupdate");if(yu(l,i,r.shape),r.dtype!==l.dtype)throw new Error(`tensor and updates must have the same dtype, instead they are ${r.dtype} and ${l.dtype}.`);const c={tensor:r,indices:i,updates:l},f={};return C.runKernel(y2,c,f)}const _S=R({tensorScatterUpdate_:WO});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function QO(t,e=1,a=!0){const r=x(t,"x","topk");if(r.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");const i=r.shape[r.shape.length-1];if(e<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${e}`);if(e>i)throw new Error(`'k' passed to topk() must be <= the last dimension (${i}) but got ${e}`);const l={x:r},c={k:e,sorted:a},[f,h]=C.runKernel(K2,l,c);return{values:f,indices:h}}const AS=R({topk_:QO});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function JO(t,e=0,a=1,r,i){if(Gt(t),r!=null&&r==="bool")throw new Error("Unsupported data type $ { dtype }");const l=new zd(e,a,r,!0,i),c=Rn(t,r);for(let f=0;f<c.values.length;f++)c.values[f]=l.nextValue();return c.toTensor()}const OS=R({truncatedNormal_:JO});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function e$(t,e=0){const a=x(t,"x","unique","string_or_numeric");E(a.rank>0,()=>"The input tensor must be at least 1D");const r={x:a},i={axis:e},[l,c]=C.runKernel(P2,r,i);return{values:l,indices:c}}const $S=R({unique_:e$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function t$(t,e,a){const r=x(t,"x","unsortedSegmentSum"),i=x(e,"segmentIds","unsortedSegmentSum","int32");E(Nr(a),()=>"numSegments must be of dtype int");const l={x:r,segmentIds:i},c={numSegments:a};return C.runKernel(Z2,l,c)}const DS=R({unsortedSegmentSum_:t$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function n$(t,e=0){const a=x(t,"x","unstack","string_or_numeric");E(e>=-a.shape.length&&e<a.shape.length,()=>`Axis = ${e} is not in [-${a.shape.length}, ${a.shape.length})`);const r={value:a},i={axis:e};return C.runKernel(X2,r,i)}const Ga=R({unstack_:n$});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function RS(t,e){return du(t,e,"right")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function CS(t,e=!0,a,r){return C.makeVariable(t,e,a,r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zS(t,e){const a=[];for(let l=0;l<e.length;l++)e[l]&&a.push(l);const r=Rn(t,"int32"),i=Rn([a.length,t.length],"int32");for(let l=0;l<a.length;l++){const c=r.indexToLoc(a[l]),f=l*t.length;i.values.set(c,f)}return i.toTensor()}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function a$(t){const e=x(t,"condition","whereAsync","bool"),a=await e.data(),r=zS(e.shape,a);return t!==e&&e.dispose(),r}const Hd=a$;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function s$(t,e,a){const r=x(t,"tensor","boolMask"),i=x(e,"mask","boolMask","bool"),l=a??0,c=i.rank,f=r.shape;E(c>0,()=>"mask cannot be scalar"),Dt(f.slice(l,l+c),i.shape,"mask's shape must match the first K dimensions of tensor's shape,");let h=1;for(let $=l;$<l+c;$++)h*=f[$];const p=f.slice(0,l).concat([h],f.slice(l+c)),g=ee(r,p),y=ee(i,[-1]),v=await Hd(y),S=mo(v,[1]),k=bd(g,S,l);return t!==r&&r.dispose(),e!==i&&i.dispose(),S.dispose(),g.dispose(),y.dispose(),v.dispose(),k}const jS=s$;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function r$(t,e,a){const r=x(t,"x","transpose");if(e==null&&(e=r.shape.map((c,f)=>f).reverse()),E(r.rank===e.length,()=>`Error in transpose: rank of input ${r.rank} must match length of perm ${e}.`),e.forEach(c=>{E(c>=0&&c<r.rank,()=>`All entries in 'perm' must be between 0 and ${r.rank-1} but got ${e}`)}),r.rank<=1)return r.clone();const i={x:r},l={perm:e};return r.dtype==="complex64"?Re(()=>{let c=Ar(r),f=ho(r);return c=C.runKernel(Cl,{x:c},l),f=C.runKernel(Cl,{x:f},l),a&&(f=Sn(f)),aa(c,f)}):C.runKernel(Cl,i,l)}const eo=R({transpose_:r$});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function i$(t,e,a,r,i=!0){const l=x(t,"v","movingAverage"),c=x(e,"x","movingAverage"),f=x(a,"decay","movingAverage");cv(l,c),E(Nn(l.shape,c.shape),()=>"Shape mismatch in v and x");const h=$e(1),p=Te(h,f);let g=le(Te(c,l),p);if(i){E(r!=null,()=>"When using zeroDebias: true, step is required.");const y=x(r,"step","movingAverage");g=Pe(g,Te(h,Er(f,y)))}return be(l,g)}const MS=R({movingAverage_:i$});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function o$(t,e,a){Gt(a);const r=x(t,"indices","scatterND","int32"),i=x(e,"updates","scatterND");yu(i,r,a);const l={indices:r,updates:i},c={shape:a};return C.runKernel(g2,l,c)}const IS=R({scatterND_:o$});function l$(t,e,a,r){if(t.dtype!=="int32")throw new Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);if(t.rank>2)throw new Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${t.shape}.`);const i=t.rank>0?t.shape[0]:1,l=t.rank>1?t.shape[1]:1;if(a.length!==l)throw new Error(`outputShape has incorrect number of elements:, ${a.length}, should be: ${l}.`);const c=e.size;if(!(e.rank===0||e.rank===1&&c===i))throw new Error(`sparseValues has incorrect shape ${e.shape}, should be [] or [${i}]`);if(e.dtype!==r.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function u$(t,e,a,r=0){Gt(a);const i=x(t,"sparseIndices","sparseToDense","int32"),l=x(e,"sparseValues","sparseToDense","string_or_numeric"),c=x(r,"defaultValue","sparseToDense",l.dtype);l$(i,l,a,c);const f={sparseIndices:i,sparseValues:l,defaultValue:c},h={outputShape:a};return C.runKernel(M2,f,h)}const LS=R({sparseToDense_:u$});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function c$(t,e){const a=x(e,"indices","gatherND","int32"),i={params:x(t,"x","gatherND","string_or_numeric"),indices:a};return C.runKernel(p1,i)}const BS=R({gatherND_:c$});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function f$(t,e){if(e==null)return t.shape.slice();if(Nn(t.shape,e))return e;if(t.shape.length===e.length){const a=[];for(let r=0;r<t.shape.length;r++)e[r]==null&&t.shape[r]!=null?a.push(t.shape[r]):a.push(e[r]);return a}return e}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function h$(t,e,a,r){const i=x(t,"x","dropout");if(E(i.dtype==="float32",()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${i.dtype} tensor instead.`),E(e>=0&&e<1,()=>`rate must be a float in the range [0, 1), but got ${e}.`),e===0)return t instanceof Je?i.clone():i;const l=f$(i,a),c=1-e,f=Pe(yd(be(pu(l,0,1,"float32",r),c)),c);return le(i,f)}const US=R({dropout_:h$});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gd(t){return Math.floor(Math.pow(2,Math.ceil(Math.log(t)/Math.log(2))))}function bu(t,e,a){const r=1-t%2,i=new Float32Array(t);for(let l=0;l<t;++l){const c=2*Math.PI*l/(t+r-1);i[l]=e-a*Math.cos(c)}return tn(i,"float32")}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function d$(t,e,a=1){const r=x(t,"predictions","inTopK"),i=x(e,"targets","inTopK");E(r.rank>1,()=>`inTopK() expects the predictions to be of rank 2 or higher, but got ${r.rank}`),E(r.rank-1===i.rank,()=>`predictions rank should be 1 larger than targets rank, but got predictions rank ${r.rank} and targets rank ${i.rank}`),Dt(r.shape.slice(0,r.shape.length-1),i.shape,"predictions's shape should be align with the targets' shape, except the last dimension.");const l=r.shape[r.shape.length-1];E(a>0&&a<=l,()=>`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${l}), but got ${a}`);const c=await r.data(),f=await i.data(),[h,p]=[c.length/l,l],g=nb("bool",h);for(let y=0;y<h;y++){const v=y*p,S=c.subarray(v,v+p),k=[];for(let $=0;$<S.length;$++)k.push({value:S[$],index:$});k.sort(($,A)=>A.value-$.value),g[y]=0;for(let $=0;$<a;$++)if(k[$].index===f[y]){g[y]=1;break}}return t!==r&&r.dispose(),e!==i&&i.dispose(),wn(g,i.shape,"bool")}const qS=d$;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function p$(t,e,a,r,i,l="NHWC",c){let f=t;t.rank===3&&(f=ee(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let h=e;h.rank===3&&(h=ee(e,[1,e.shape[0],e.shape[1],e.shape[2]])),E(f.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${f.shape}.`),E(h.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${h.shape}.`),E(a.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${a}.`);const p=l==="NHWC"?f.shape[3]:f.shape[1],g=l==="NHWC"?h.shape[3]:h.shape[1];E(p===a[2],()=>`Error in conv2dDerFilter: depth of input ${p}) must match input depth in filter (${a[2]}.`),E(g===a[3],()=>`Error in conv2dDerFilter: depth of dy (${g}) must match output depth for filter (${a[3]}).`),pn("conv2dDerFilter",i,c);const y={x:f,dy:h},v={strides:r,pad:i,dataFormat:l,dimRoundingMode:c,filterShape:a};return C.runKernel(Ib,y,v)}const m$=R({conv2DBackpropFilter_:p$});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vu(t,e,a){if(a==null||a==="linear")return t;if(a==="relu")return le(t,qd(e));throw new Error(`Cannot compute gradient for fused activation ${a}.`)}function wu(t,e){let a=e;const r=hd(t.shape,e.shape);return r.length>0&&(a=Ye(a,r)),ee(a,t.shape)}function Su(t,e,a,r){if(e==="linear")return t;if(e==="relu")return po(t);if(e==="elu")return pd(t);if(e==="relu6")return Md(t);if(e==="prelu")return $d(t,a);if(e==="leakyrelu")return wd(t,r);if(e==="sigmoid")return vs(t);throw new Error(`Unknown fused activation ${e}.`)}const Nu=(t,e)=>!(t>0)||e==="linear";/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function g$({x:t,filter:e,strides:a,pad:r,dataFormat:i="NHWC",dilations:l=[1,1],dimRoundingMode:c,bias:f,activation:h="linear",preluActivationWeights:p,leakyreluAlpha:g}){if(h=h||"linear",Nu(C.state.gradientDepth,h)===!1){E(i==="NHWC",()=>`Error in fused conv2d: got dataFormat of ${i} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let Z=lo(t,e,a,r,i,l,c);return f!=null&&(Z=be(Z,f)),Su(Z,h,p,g)}const y=x(t,"x","conv2d","float32"),v=x(e,"filter","conv2d","float32");let S=y,k=!1;y.rank===3&&(k=!0,S=ee(y,[1,y.shape[0],y.shape[1],y.shape[2]])),E(S.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${S.rank}.`),E(v.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${v.rank}.`),pn("fused conv2d",r,c);const $=i==="NHWC"?S.shape[3]:S.shape[1];E(v.shape[2]===$,()=>`Error in conv2d: depth of input (${$}) must match input depth for filter ${v.shape[2]}.`),E(sa(a,l),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${a} and dilations '${l}'`);const A=io(S.shape,v.shape,a,l,r,c);let M;f!=null&&(M=x(f,"bias","fused conv2d"),[M]=et(M,y),i==="NHWC"?it(A.outShape,M.shape):(E(M.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${M.shape.length}.`),E(M.shape.length===0||M.shape[0]===A.outChannels||M.shape[0]===1,()=>`Error in fused conv2d: bias shape (${M.shape}) is not compatible with the number of output channels (${A.outChannels})`)));let X;if(p!=null){const Z=p.shape;if(E(Z.length<=1||Z.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${Z.length}.`),Z.length===1)E(Z[0]===1||Z[0]===A.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${Z}) is not compatible with the number of output channels (${A.outChannels}).`);else if(Z.length===3)try{it(Z,A.outShape)}catch{const ie=`Error in fused conv2d: PReLU activation weights (${Z}) is not compatible with the output shape of the conv2d (${A.outShape}).`;throw Error(ie)}X=x(p,"prelu weights","fused conv2d")}const z=(Z,re)=>{E(i==="NHWC",()=>`Error in gradient of fused conv2D: got dataFormat of ${i} but only NHWC is currently supported.`);const[ie,F,U,_]=re,te=vu(Z,U,h);E(Xi(l),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${l}'`);const ue=aw(F.shape,te,ie,a,r),pe=m$(F,te,ie.shape,a,r),fe=[ue,pe];if(_!=null){const G=wu(_,te);fe.push(G)}return fe},I={x:S,filter:v,bias:M,preluActivationWeights:X},V={strides:a,pad:r,dataFormat:i,dilations:l,dimRoundingMode:c,activation:h,leakyreluAlpha:g};return f==null?zn((re,ie,F)=>{let U=C.runKernel(lh,I,V);return F([ie,re,U]),k&&(U=ee(U,[U.shape[1],U.shape[2],U.shape[3]])),{value:U,gradFunc:z}})(S,v):zn((re,ie,F,U)=>{let _=C.runKernel(lh,I,V);return U([ie,re,_,F]),k&&(_=ee(_,[_.shape[1],_.shape[2],_.shape[3]])),{value:_,gradFunc:z}})(S,v,M)}const y$=R({fusedConv2d_:g$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function b$(t,e,a,r,i,l=[1,1],c){let f=t;t.rank===3&&(f=ee(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let h=e;h.rank===3&&(h=ee(e,[1,e.shape[0],e.shape[1],e.shape[2]]));const p={x:f,dy:h},g={strides:r,pad:i,dimRoundingMode:c,dilations:l,filterShape:a};return C.runKernel(Xb,p,g)}const v$=R({depthwiseConv2dNativeBackpropFilter_:b$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function w$(t,e,a,r,i,l=[1,1],c){let f=e,h=!1;e.rank===3&&(h=!0,f=ee(e,[1,e.shape[0],e.shape[1],e.shape[2]]));const p={dy:f,filter:a},g={strides:r,pad:i,dimRoundingMode:c,dilations:l,inputShape:t},y=C.runKernel(Zb,p,g);return h?ee(y,[y.shape[1],y.shape[2],y.shape[3]]):y}const S$=R({depthwiseConv2dNativeBackpropInput_:w$});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function N$({x:t,filter:e,strides:a,pad:r,dataFormat:i="NHWC",dilations:l=[1,1],dimRoundingMode:c,bias:f,activation:h="linear",preluActivationWeights:p,leakyreluAlpha:g}){if(Nu(C.state.gradientDepth,h)===!1){let V=cu(t,e,a,r,i,l,c);return f!=null&&(V=be(V,f)),Su(V,h,p,g)}const y=x(t,"x","depthwiseConv2d","float32"),v=x(e,"filter","depthwiseConv2d","float32");let S=y,k=!1;y.rank===3&&(k=!0,S=ee(y,[1,y.shape[0],y.shape[1],y.shape[2]])),E(S.rank===4,()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${S.rank}.`),E(v.rank===4,()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${v.rank}.`),E(S.shape[3]===v.shape[2],()=>`Error in fused depthwiseConv2d: number of input channels (${S.shape[3]}) must match the inChannels dimension in filter ${v.shape[2]}.`),l==null&&(l=[1,1]),E(sa(a,l),()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${a} and dilations '${l}'`),pn("fused depthwiseConv2d",r,c);const $=io(S.shape,v.shape,a,l,r,c,!0);let A;f!=null&&(A=x(f,"bias","fused conv2d"),[A]=et(A,y),it($.outShape,A.shape));let M;p!=null&&(M=x(p,"prelu weights","fused depthwiseConv2d"));const X=(V,Z)=>{E(Xi(l),()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${l}'`);const[re,ie,F,U]=Z,_=vu(V,F,h),te=S$(ie.shape,_,re,a,r,l,c),ue=v$(ie,_,re.shape,a,r,l,c);if(U!=null){const pe=wu(A,_);return[te,ue,pe]}return[te,ue]},z={x:S,filter:v,bias:A,preluActivationWeights:M},I={strides:a,pad:r,dataFormat:i,dilations:l,dimRoundingMode:c,activation:h,leakyreluAlpha:g};return f==null?zn((Z,re,ie)=>{let F=C.runKernel(uh,z,I);return ie([re,Z,F]),k&&(F=ee(F,[F.shape[1],F.shape[2],F.shape[3]])),{value:F,gradFunc:X}})(S,v):zn((Z,re,ie,F)=>{let U=C.runKernel(uh,z,I);return F([re,Z,U,ie]),k&&(U=ee(U,[U.shape[1],U.shape[2],U.shape[3]])),{value:U,gradFunc:X}})(S,v,A)}const x$=R({fusedDepthwiseConv2d_:N$});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function T$({a:t,b:e,transposeA:a=!1,transposeB:r=!1,bias:i,activation:l="linear",preluActivationWeights:c,leakyreluAlpha:f=.2}){if(Nu(C.state.gradientDepth,l)===!1){let _=Me(t,e,a,r);return i!=null&&(_=be(_,i)),Su(_,l,c,f)}let h=x(t,"a","fused matMul"),p=x(e,"b","fused matMul");[h,p]=et(h,p);const g=a?h.shape[h.rank-2]:h.shape[h.rank-1],y=r?p.shape[p.rank-1]:p.shape[p.rank-2],v=a?h.shape[h.rank-1]:h.shape[h.rank-2],S=r?p.shape[p.rank-2]:p.shape[p.rank-1],k=h.shape.slice(0,-2),$=p.shape.slice(0,-2),A=Ue(k),M=Ue($);E(g===y,()=>`Error in fused matMul: inner shapes (${g}) and (${y}) of Tensors with shapes ${h.shape} and ${p.shape} and transposeA=${a} and transposeB=${r} must match.`);const z=it(h.shape.slice(0,-2),p.shape.slice(0,-2)).concat([v,S]),I=a?ee(h,[A,g,v]):ee(h,[A,v,g]),V=r?ee(p,[M,S,y]):ee(p,[M,y,S]);let Z;i!=null&&(Z=x(i,"bias","fused matMul"),[Z]=et(Z,h),it(z,Z.shape));let re;c!=null&&(re=x(c,"prelu weights","fused matMul"));const ie=(_,te)=>{const[ue,pe,fe,G]=te,P=vu(ee(_,fe.shape),fe,l);let Q,oe;if(!a&&!r?(Q=Me(P,pe,!1,!0),oe=Me(ue,P,!0,!1)):!a&&r?(Q=Me(P,pe,!1,!1),oe=Me(P,ue,!0,!1)):a&&!r?(Q=Me(pe,P,!1,!0),oe=Me(ue,P,!1,!1)):(Q=Me(pe,P,!0,!0),oe=Me(P,ue,!0,!0)),i!=null){const O=wu(G,P);return[Q,oe,O]}else return[Q,oe]},F={a:I,b:V,bias:Z,preluActivationWeights:re},U={transposeA:a,transposeB:r,activation:l,leakyreluAlpha:f};return i==null?zn((te,ue,pe)=>{const fe=C.runKernel(oh,F,U);return pe([te,ue,fe]),{value:ee(fe,z),gradFunc:ie}})(I,V):zn((te,ue,pe,fe)=>{const G=C.runKernel(oh,F,U);return fe([te,ue,G,pe]),{value:ee(G,z),gradFunc:ie}})(I,V,Z)}const E$=R({fusedMatMul_:T$});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const FS=Object.freeze(Object.defineProperty({__proto__:null,conv2d:y$,depthwiseConv2d:x$,matMul:E$},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function k$(t){return bu(t,.54,.46)}const _$=R({hammingWindow_:k$});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function A$(t){return bu(t,.5,.5)}const VS=R({hannWindow_:A$});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function O$(t,e,a,r=!1,i=0){let l=0;const c=[];for(;l+e<=t.size;)c.push(Be(t,l,e)),l+=a;if(r)for(;l<t.size;){const f=l+e-t.size,h=Nt([Be(t,l,e-f),Dr([f],i)]);c.push(h),l+=a}return c.length===0?wr([],[0,e]):ee(Nt(c),[c.length,e])}const HS=R({frame_:O$});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $$(t,e,a,r,i=VS){r==null&&(r=Gd(e));const l=HS(t,e,a),c=le(l,i(e));return gu(c,r)}const D$=R({stft_:$$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function R$(t,e,a,r,i="bilinear",l=0){const c=x(t,"image","cropAndResize"),f=x(e,"boxes","cropAndResize","float32"),h=x(a,"boxInd","cropAndResize","int32"),p=f.shape[0];E(c.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${c.rank}.`),E(f.rank===2&&f.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${p},4] but had shape ${f.shape}.`),E(h.rank===1&&h.shape[0]===p,()=>`Error in cropAndResize: boxInd must be have size [${p}] but had shape ${f.shape}.`),E(r.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${r.length}.`),E(r[0]>=1&&r[1]>=1,()=>`cropSize must be atleast [1,1], but was ${r}`),E(i==="bilinear"||i==="nearest",()=>`method must be bilinear or nearest, but was ${i}`);const g={image:c,boxes:f,boxInd:h},y={method:i,extrapolationValue:l,cropSize:r};return C.runKernel(Gb,g,y)}const C$=R({cropAndResize_:R$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function z$(t){const e=x(t,"image","flipLeftRight","float32");E(e.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${e.rank}.`);const a={image:e};return C.runKernel(u1,a,{})}const j$=R({flipLeftRight_:z$});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function M$(t){const e=x(t,"image","grayscaleToRGB"),a=e.rank-1,r=e.shape[a];E(e.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${e.rank}.`),E(r===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${r}.`);const i=new Array(e.rank);return i.fill(1,0,a),i[a]=3,vr(e,i)}const I$=R({grayscaleToRGB_:M$});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function L$(t){const e=x(t,"image","RGBToGrayscale"),a=e.rank-1,r=e.shape[a];E(e.rank>=2,()=>`Error in RGBToGrayscale: images must be at least rank 2, but got rank ${e.rank}.`),E(r===3,()=>`Error in RGBToGrayscale: last dimension of an RGB image should be size 3, but got size ${r}.`);const i=e.dtype,l=He(e,"float32"),c=tn([.2989,.587,.114]);let f;switch(e.rank){case 2:f=ms("ij,j->i",l,c);break;case 3:f=ms("ijk,k->ij",l,c);break;case 4:f=ms("ijkl,l->ijk",l,c);break;case 5:f=ms("ijklm,m->ijkl",l,c);break;case 6:f=ms("ijklmn,n->ijklm",l,c);break;default:throw new Error("Not a valid tensor rank.")}return f=Wn(f,-1),He(f,i)}const B$=R({rgbToGrayscale_:L$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function U$(t,e,a=0,r=.5){const i=x(t,"image","rotateWithOffset","float32");E(i.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${i.rank}.`);const l={image:i},c={radians:e,fillValue:a,center:r};return C.runKernel(J2,l,c)}const q$=R({rotateWithOffset_:U$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cr(t,e,a,r,i,l){r==null&&(r=.5),i==null&&(i=Number.NEGATIVE_INFINITY),l==null&&(l=0);const c=t.shape[0];return a=Math.min(a,c),E(0<=r&&r<=1,()=>`iouThreshold must be in [0, 1], but was '${r}'`),E(t.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${t.rank}'`),E(t.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${t.shape[1]}`),E(e.rank===1,()=>"scores must be a 1D tensor"),E(e.shape[0]===c,()=>`scores has incompatible shape with boxes. Expected ${c}, but was ${e.shape[0]}`),E(0<=l&&l<=1,()=>`softNmsSigma must be in [0, 1], but was '${l}'`),{maxOutputSize:a,iouThreshold:r,scoreThreshold:i,softNmsSigma:l}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function F$(t,e,a,r=.5,i=Number.NEGATIVE_INFINITY){const l=x(t,"boxes","nonMaxSuppression","float32"),c=x(e,"scores","nonMaxSuppression","float32"),f=Cr(l,c,a,r,i);a=f.maxOutputSize,r=f.iouThreshold,i=f.scoreThreshold;const h={maxOutputSize:a,iouThreshold:r,scoreThreshold:i};return C.runKernel(K1,{boxes:l,scores:c},h)}const V$=R({nonMaxSuppression_:F$});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function H$(t,e,a){const r=G$(t,e,a),i=r<0?-(r+1):r;t.splice(i,0,e)}function G$(t,e,a){return Y$(t,e,a||K$)}function K$(t,e){return t>e?1:t<e?-1:0}function Y$(t,e,a){let r=0,i=t.length,l=0,c=!1;for(;r<i;){l=r+(i-r>>>1);const f=a(e,t[l]);f>0?r=l+1:(i=l,c=!f)}return c?r:-r-1}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function GS(t,e,a,r,i){return Kd(t,e,a,r,i,0)}function KS(t,e,a,r,i,l){return Kd(t,e,a,r,i,0,!1,l,!0)}function YS(t,e,a,r,i,l){return Kd(t,e,a,r,i,l,!0)}function Kd(t,e,a,r,i,l,c=!1,f=!1,h=!1){const p=[];for(let A=0;A<e.length;A++)e[A]>i&&p.push({score:e[A],boxIndex:A,suppressBeginIndex:0});p.sort(_0);const g=l>0?-.5/l:0,y=[],v=[];for(;y.length<a&&p.length>0;){const A=p.pop(),{score:M,boxIndex:X,suppressBeginIndex:z}=A;if(M<i)break;let I=!1;for(let V=y.length-1;V>=z;--V){const Z=P$(t,X,y[V]);if(Z>=r){I=!0;break}if(A.score=A.score*X$(r,g,Z),A.score<=i)break}A.suppressBeginIndex=y.length,I||(A.score===M?(y.push(X),v.push(A.score)):A.score>i&&H$(p,A,_0))}const S=y.length,k=a-S;f&&k>0&&(y.push(...new Array(k).fill(0)),v.push(...new Array(k).fill(0)));const $={selectedIndices:y};return c&&($.selectedScores=v),h&&($.validOutputs=S),$}function P$(t,e,a){const r=t.subarray(e*4,e*4+4),i=t.subarray(a*4,a*4+4),l=Math.min(r[0],r[2]),c=Math.min(r[1],r[3]),f=Math.max(r[0],r[2]),h=Math.max(r[1],r[3]),p=Math.min(i[0],i[2]),g=Math.min(i[1],i[3]),y=Math.max(i[0],i[2]),v=Math.max(i[1],i[3]),S=(f-l)*(h-c),k=(y-p)*(v-g);if(S<=0||k<=0)return 0;const $=Math.max(l,p),A=Math.max(c,g),M=Math.min(f,y),X=Math.min(h,v),z=Math.max(M-$,0)*Math.max(X-A,0);return z/(S+k-z)}function X$(t,e,a){const r=Math.exp(e*a*a);return a<=t?r:0}function _0(t,e){return t.score-e.score||t.score===e.score&&e.boxIndex-t.boxIndex}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function Z$(t,e,a,r=.5,i=Number.NEGATIVE_INFINITY){const l=x(t,"boxes","nonMaxSuppressionAsync"),c=x(e,"scores","nonMaxSuppressionAsync"),f=Cr(l,c,a,r,i);a=f.maxOutputSize,r=f.iouThreshold,i=f.scoreThreshold;const h=await Promise.all([l.data(),c.data()]),p=h[0],g=h[1],{selectedIndices:y}=GS(p,g,a,r,i);return l!==t&&l.dispose(),c!==e&&c.dispose(),tn(y,"int32")}const W$=Z$;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Q$(t,e,a,r=.5,i=Number.NEGATIVE_INFINITY,l=0){const c=x(t,"boxes","nonMaxSuppression"),f=x(e,"scores","nonMaxSuppression"),h=Cr(c,f,a,r,i,l);a=h.maxOutputSize,r=h.iouThreshold,i=h.scoreThreshold,l=h.softNmsSigma;const p={boxes:c,scores:f},g={maxOutputSize:a,iouThreshold:r,scoreThreshold:i,softNmsSigma:l},y=C.runKernel(P1,p,g);return{selectedIndices:y[0],selectedScores:y[1]}}const J$=R({nonMaxSuppressionWithScore_:Q$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function eD(t,e,a,r=.5,i=Number.NEGATIVE_INFINITY,l=0){const c=x(t,"boxes","nonMaxSuppressionAsync"),f=x(e,"scores","nonMaxSuppressionAsync"),h=Cr(c,f,a,r,i,l);a=h.maxOutputSize,r=h.iouThreshold,i=h.scoreThreshold,l=h.softNmsSigma;const p=await Promise.all([c.data(),f.data()]),g=p[0],y=p[1],{selectedIndices:v,selectedScores:S}=YS(g,y,a,r,i,l);return c!==t&&c.dispose(),f!==e&&f.dispose(),{selectedIndices:tn(v,"int32"),selectedScores:tn(S)}}const tD=eD;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nD(t,e,a,r=.5,i=Number.NEGATIVE_INFINITY,l=!1){const c=x(t,"boxes","nonMaxSuppression"),f=x(e,"scores","nonMaxSuppression"),h=Cr(c,f,a,r,i,null),p=h.maxOutputSize,g=h.iouThreshold,y=h.scoreThreshold,v={boxes:c,scores:f},S={maxOutputSize:p,iouThreshold:g,scoreThreshold:y,padToMaxOutputSize:l},k=C.runKernel(Y1,v,S);return{selectedIndices:k[0],validOutputs:k[1]}}const aD=R({nonMaxSuppressionPadded_:nD});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function sD(t,e,a,r=.5,i=Number.NEGATIVE_INFINITY,l=!1){const c=x(t,"boxes","nonMaxSuppressionAsync"),f=x(e,"scores","nonMaxSuppressionAsync"),h=Cr(c,f,a,r,i,null),p=h.maxOutputSize,g=h.iouThreshold,y=h.scoreThreshold,[v,S]=await Promise.all([c.data(),f.data()]),{selectedIndices:k,validOutputs:$}=KS(v,S,p,g,y,l);return c!==t&&c.dispose(),f!==e&&f.dispose(),{selectedIndices:tn(k,"int32"),validOutputs:$e($,"int32")}}const rD=sD;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function iD(t,e,a=!1,r=!1){const i=x(t,"images","resizeBilinear");E(i.rank===3||i.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${i.rank}.`),E(e.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${e}.`),E(r===!1||a===!1,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let l=i,c=!1;i.rank===3&&(c=!0,l=ee(i,[1,i.shape[0],i.shape[1],i.shape[2]]));const f={images:l},h={alignCorners:a,halfPixelCenters:r,size:e},p=C.runKernel(f2,f,h);return c?ee(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const oD=R({resizeBilinear_:iD});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lD(t,e,a=!1,r=!1){const i=x(t,"images","resizeNearestNeighbor");E(i.rank===3||i.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${i.rank}.`),E(e.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${e}.`),E(i.dtype==="float32"||i.dtype==="int32",()=>"`images` must have `int32` or `float32` as dtype"),E(r===!1||a===!1,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let l=i,c=!1;i.rank===3&&(c=!0,l=ee(i,[1,i.shape[0],i.shape[1],i.shape[2]]));const f={images:l},h={alignCorners:a,halfPixelCenters:r,size:e},p=C.runKernel(c2,f,h);return c?ee(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const uD=R({resizeNearestNeighbor_:lD});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cD(t,e="binary",a=!1,r=.5){const i=x(t,"image","threshold"),l=.2989,c=.587,f=.114,h=i.shape[0]*i.shape[1];let p=le(tn([r]),255),g,y,v,S;if(E(i.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${i.rank}.`),E(i.shape[2]===3||i.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${i.shape[2]}.`),E(i.dtype==="int32"||i.dtype==="float32",()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${i.dtype}.`),E(e==="otsu"||e==="binary",()=>`Method must be binary or otsu, but was ${e}`),i.shape[2]===3){[g,y,v]=Or(i,[1,1,1],-1);const A=le(g,l),M=le(y,c),X=le(v,f);S=be(be(A,M),X)}else S=t;if(e==="otsu"){const A=fd(He(Id(S),"int32"),wn([]),256);p=fD(A,h)}const k=a?fu(S,p):fo(S,p);return He(le(k,255),"int32")}function fD(t,e){let a=tn([-1]),r=tn([0]),i=tn([0]),l,c,f,h,p,g;for(let y=0;y<t.size-1;y++){l=Be(t,0,y+1),c=Be(t,y+1),p=Pe(Ye(l),e),g=Pe(Ye(c),e);const v=Ye(le(l,_r(0,l.size)));f=Pe(v,Ye(l));const S=Dr(c.shape,l.size),k=be(_r(0,c.size),S),$=le(c,k);h=Pe(Ye($),Ye(c));const A=Te(f,h),M=Te(f,h),X=le(p,g);i=le(le(X,A),M);const z=fo(i,r);r=na(z,i,r),a=na(z,tn([y]),a)}return a}const hD=R({threshold_:cD});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dD(t,e,a="nearest",r="constant",i=0,l){const c=x(t,"image","transform","float32"),f=x(e,"transforms","transform","float32");E(c.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${c.rank}.`),E(f.rank===2&&(f.shape[0]===c.shape[0]||f.shape[0]===1)&&f.shape[1]===8,()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),E(l==null||l.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${l}.`);const h={image:c,transforms:f},p={interpolation:a,fillMode:r,fillValue:i,outputShape:l};return C.runKernel(Y2,h,p)}const pD=R({transform_:dD});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mD(t,e,a){const r=x(t,"a","bandPart");E(r.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${r.rank}.`);const i=r.shape,[l,c]=r.shape.slice(-2);let f,h;typeof e=="number"?(E(e%1===0,()=>`bandPart(): numLower must be an integer, got ${e}.`),E(e<=l,()=>`bandPart(): numLower (${e}) must not be greater than the number of rows (${l}).`),f=x(e<0?l:e,"numLower","bandPart")):(E(e.dtype==="int32",()=>"bandPart(): numLower's dtype must be an int32."),f=na(Jl(e,0),l,Qi(e,l))),typeof a=="number"?(E(a%1===0,()=>`bandPart(): numUpper must be an integer, got ${a}.`),E(a<=c,()=>`bandPart(): numUpper (${a}) must not be greater than the number of columns (${c}).`),h=x(a<0?c:a,"numUpper","bandPart")):(E(a.dtype==="int32",()=>"bandPart(): numUpper's dtype must be an int32."),h=na(Jl(a,0),c,Qi(a,c)));const p=ee(_r(0,l,1,"int32"),[-1,1]),g=_r(0,c,1,"int32"),y=Te(p,g),v=Zi(fu(y,f),vd(y,Sn(h))),S=Fa([l,c],r.dtype);return ee(jn(Ga(ee(r,[-1,l,c])).map(k=>na(v,k,S))),i)}const gD=R({bandPart_:mD});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yD(t){let e;if(Array.isArray(t)){e=!1,E(t!=null&&t.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");const i=t[0].shape[0];for(let l=1;l<t.length;++l)E(t[l].shape[0]===i,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${t[l].shape[0]} vs. ${i})`)}else e=!0,t=Or(t,t.shape[0],0).map(i=>mo(i,[0]));E(t.length<=t[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${t.length}) exceeds number of dimensions (${t[0].shape[0]}).`);const a=[],r=t;for(let i=0;i<t.length;++i)a.push(C.tidy(()=>{let l=r[i];if(i>0)for(let c=0;c<i;++c){const f=le(Ye(le(a[c],l)),a[c]);l=Te(l,f)}return Pe(l,co(l,"euclidean"))}));return e?jn(a,0):a}const bD=R({gramSchmidt_:yD});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vD(t,e=!1){if(E(t.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${t.rank}`),t.rank===2)return A0(t,e);{const a=t.shape.slice(0,t.shape.length-2).reduce((h,p)=>h*p),r=Ga(ee(t,[a,t.shape[t.shape.length-2],t.shape[t.shape.length-1]]),0),i=[],l=[];r.forEach(h=>{const[p,g]=A0(h,e);i.push(p),l.push(g)});const c=ee(jn(i,0),t.shape),f=ee(jn(l,0),t.shape);return[c,f]}}function A0(t,e=!1){return C.tidy(()=>{E(t.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${t.shape.length}D Tensor.`);const a=t.shape[0],r=t.shape[1];let i=gd(a),l=ta(t);const c=wr([[1]],[1,1]);let f=ta(c);const h=a>=r?r:a;for(let p=0;p<h;++p){const g=l,y=f,v=i;[f,l,i]=C.tidy(()=>{const S=Be(l,[p,p],[a-p,1]),k=co(S),$=Be(l,[p,p],[1,1]),A=na(fo($,0),wr([[-1]]),wr([[1]])),M=Te($,le(A,k)),X=Pe(S,M);X.shape[0]===1?f=ta(c):f=Nt([c,Be(X,[1,0],[X.shape[0]-1,X.shape[1]])],0);const z=Sn(Pe(Me(A,M),k)),I=Be(l,[p,0],[a-p,r]),V=le(z,f),Z=eo(f);if(p===0)l=Te(I,Me(V,Me(Z,I)));else{const F=Te(I,Me(V,Me(Z,I)));l=Nt([Be(l,[0,0],[p,r]),F],0)}const re=eo(V),ie=Be(i,[0,p],[a,i.shape[1]-p]);if(p===0)i=Te(ie,Me(Me(ie,f),re));else{const F=Te(ie,Me(Me(ie,f),re));i=Nt([Be(i,[0,0],[a,p]),F],1)}return[f,l,i]}),$t([g,y,v])}return!e&&a>r&&(i=Be(i,[0,0],[a,r]),l=Be(l,[0,0],[r,r])),[i,l]})}const wD=R({qr_:vD});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Ot;(function(t){t[t.NONE=0]="NONE",t[t.MEAN=1]="MEAN",t[t.SUM=2]="SUM",t[t.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(Ot||(Ot={}));function SD(t,e,a=Ot.SUM_BY_NONZERO_WEIGHTS){const r=x(t,"losses","computeWeightedLoss");let i=null;e!=null&&(i=x(e,"weights","computeWeightedLoss"));const l=i==null?r:le(r,i);if(a===Ot.NONE)return l;if(a===Ot.SUM)return Ye(l);if(a===Ot.MEAN){if(i==null)return Wi(l);{const c=r.size/i.size,f=Pe(Ye(l),Ye(i));return c>1?Pe(f,$e(c)):f}}if(a===Ot.SUM_BY_NONZERO_WEIGHTS){if(i==null)return Pe(Ye(l),$e(r.size));{const c=le(i,ja(r.shape)),f=He(Ye(Ad(c,$e(0))),"float32");return Pe(Ye(l),f)}}throw Error(`Unknown reduction: ${a}`)}const ra=R({computeWeightedLoss_:SD});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ND(t,e,a,r=Ot.SUM_BY_NONZERO_WEIGHTS){const i=x(t,"labels","absoluteDifference"),l=x(e,"predictions","absoluteDifference");let c=null;a!=null&&(c=x(a,"weights","absoluteDifference")),Dt(i.shape,l.shape,"Error in absoluteDifference: ");const f=Vt(Te(i,l));return ra(f,c,r)}const xD=R({absoluteDifference_:ND});function TD(t,e,a,r,i=Ot.SUM_BY_NONZERO_WEIGHTS){const l=x(t,"labels","cosineDistance"),c=x(e,"predictions","cosineDistance");let f=null;r!=null&&(f=x(r,"weights","cosineDistance")),Dt(l.shape,c.shape,"Error in cosineDistance: ");const h=$e(1),p=Te(h,Ye(le(l,c),a,!0));return ra(p,f,i)}const ED=R({cosineDistance_:TD});function kD(t,e,a,r=Ot.SUM_BY_NONZERO_WEIGHTS){let i=x(t,"labels","hingeLoss");const l=x(e,"predictions","hingeLoss");let c=null;a!=null&&(c=x(a,"weights","hingeLoss")),Dt(i.shape,l.shape,"Error in hingeLoss: ");const f=$e(1);i=Te(le($e(2),i),f);const h=po(Te(f,le(i,l)));return ra(h,c,r)}const _D=R({hingeLoss_:kD});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function AD(t,e,a,r=1,i=Ot.SUM_BY_NONZERO_WEIGHTS){const l=x(t,"labels","huberLoss"),c=x(e,"predictions","huberLoss");let f=null;a!=null&&(f=x(a,"weights","huberLoss")),Dt(l.shape,c.shape,"Error in huberLoss: ");const h=$e(r),p=Vt(Te(c,l)),g=Qi(p,h),y=Te(p,g),v=be(le($e(.5),dn(g)),le(h,y));return ra(v,f,i)}const OD=R({huberLoss_:AD});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $D(t,e,a,r=1e-7,i=Ot.SUM_BY_NONZERO_WEIGHTS){const l=x(t,"labels","logLoss"),c=x(e,"predictions","logLoss");let f=null;a!=null&&(f=x(a,"weights","logLoss")),Dt(l.shape,c.shape,"Error in logLoss: ");const h=$e(1),p=$e(r),g=Sn(le(l,kr(be(c,p)))),y=le(Te(h,l),kr(be(Te(h,c),p))),v=Te(g,y);return ra(v,f,i)}const DD=R({logLoss_:$D});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function RD(t,e,a,r=Ot.SUM_BY_NONZERO_WEIGHTS){const i=x(t,"labels","meanSquaredError"),l=x(e,"predictions","meanSquaredError");let c=null;a!=null&&(c=x(a,"weights","meanSquaredError")),Dt(i.shape,l.shape,"Error in meanSquaredError: ");const f=Ud(i,l);return ra(f,c,r)}const CD=R({meanSquaredError_:RD});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zD(t,e){const a=x(t,"labels","sigmoidCrossEntropyWithLogits"),r=x(e,"logits","sigmoidCrossEntropyWithLogits");Dt(a.shape,r.shape,"Error in sigmoidCrossEntropyWithLogits: ");const i=po(r),l=le(r,a),c=Sd(qa(Sn(Vt(r))));return be(Te(i,l),c)}function jD(t,e,a,r=0,i=Ot.SUM_BY_NONZERO_WEIGHTS){let l=x(t,"multiClassLabels","sigmoidCrossEntropy");const c=x(e,"logits","sigmoidCrossEntropy");let f=null;if(a!=null&&(f=x(a,"weights","sigmoidCrossEntropy")),Dt(l.shape,c.shape,"Error in sigmoidCrossEntropy: "),r>0){const p=$e(r),g=$e(1),y=$e(.5);l=be(le(l,Te(g,p)),le(y,p))}const h=zD(l,c);return ra(h,f,i)}const MD=R({sigmoidCrossEntropy_:jD});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ID(t,e,a=-1){if(a===-1&&(a=e.rank-1),a!==e.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${e.rank} and dim was ${a}`);return zn((i,l,c)=>{const h=xd(l,[a],!0),p=Te(He(l,"float32"),h);c([i,p]);const g=Sn(le(p,i));return{value:Ye(g,[a]),gradFunc:(S,k)=>{const[$,A]=k,M=uo(S.shape,[a]);return[le(ee(S,M),Te(He($,"float32"),qa(A))),le(ee(S,M),Te(qa(A),He($,"float32")))]}}})(t,e)}function LD(t,e,a,r=0,i=Ot.SUM_BY_NONZERO_WEIGHTS){let l=x(t,"onehotLabels","softmaxCrossEntropy");const c=x(e,"logits","softmaxCrossEntropy");let f=null;if(a!=null&&(f=x(a,"weights","softmaxCrossEntropy")),Dt(l.shape,c.shape,"Error in softmaxCrossEntropy: "),r>0){const p=$e(r),g=$e(1),y=$e(l.shape[1]);l=be(le(l,Te(g,p)),Pe(p,y))}const h=ID(l,c);return ra(h,f,i)}const BD=R({softmaxCrossEntropy_:LD});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function UD(t,e,a,r){const i=x(t,"indices","sparseFillEmptyRows","int32"),l=x(e,"values","sparseFillEmptyRows"),c=x(a,"denseShape","sparseFillEmptyRows","int32"),f=x(r,"defaultValue","sparseFillEmptyRows",l.dtype);if(i.rank!==2)throw new Error(`Indices should be Tensor2D but received shape
        ${i.shape}`);if(l.rank!==1)throw new Error(`Values should be Tensor1D but received shape ${l.shape}`);if(c.rank!==1)throw new Error(`Dense shape should be Tensor1D but received shape ${c.shape}`);if(f.rank!==0)throw new Error(`Default value should be a scalar but received shape ${f.shape}`);const h={indices:i,values:l,denseShape:c,defaultValue:f},p=C.runKernel(R2,h);return{outputIndices:p[0],outputValues:p[1],emptyRowIndicator:p[2],reverseIndexMap:p[3]}}const qD=R({sparseFillEmptyRows_:UD});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function FD(t,e,a){const r=x(t,"inputIndices","sparseReshape","int32"),i=x(e,"inputShape","sparseReshape","int32"),l=x(a,"newShape","sparseReshape","int32");if(r.rank!==2)throw new Error(`Input indices should be Tensor2D but received shape
        ${r.shape}`);if(i.rank!==1)throw new Error(`Input shape should be Tensor1D but received shape ${i.shape}`);if(l.rank!==1)throw new Error(`New shape should be Tensor1D but received shape ${l.shape}`);const c={inputIndices:r,inputShape:i,newShape:l},f=C.runKernel(C2,c);return{outputIndices:f[0],outputShape:f[1]}}const VD=R({sparseReshape_:FD});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function HD(t,e,a){const r=x(t,"data","sparseSegmentMean"),i=x(e,"indices","sparseSegmentMean","int32"),l=x(a,"segmentIds","sparseSegmentMean","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(i.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
          ${i.shape}`);if(l.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
          ${l.shape}`);const c={data:r,indices:i,segmentIds:l};return C.runKernel(z2,c)}const GD=R({sparseSegmentMean_:HD});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function KD(t,e,a){const r=x(t,"data","sparseSegmentSum"),i=x(e,"indices","sparseSegmentSum","int32"),l=x(a,"segmentIds","sparseSegmentSum","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(i.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
         ${i.shape}`);if(l.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
         ${l.shape}`);const c={data:r,indices:i,segmentIds:l};return C.runKernel(j2,c)}const YD=R({sparseSegmentSum_:KD});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function PD(t,e,a,r,i,l,c,f){const h=x(t,"data","stringNGrams","string");if(h.dtype!=="string")throw new Error("Data must be of datatype string");if(h.shape.length!==1)throw new Error(`Data must be a vector, saw: ${h.shape}`);const p=x(e,"dataSplits","stringNGrams");if(p.dtype!=="int32")throw new Error("Data splits must be of datatype int32");const g={separator:a,nGramWidths:r,leftPad:i,rightPad:l,padWidth:c,preserveShortSequences:f},y={data:h,dataSplits:p},v=C.runKernel(U2,y,g);return{nGrams:v[0],nGramsSplits:v[1]}}const XD=R({stringNGrams_:PD});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ZD(t,e,a=!0){const r=x(t,"input","stringSplit","string"),i=x(e,"delimiter","stringSplit","string");if(r.rank!==1)throw new Error(`Input should be Tensor1D but received shape ${r.shape}`);if(i.rank!==0)throw new Error(`Delimiter should be a scalar but received shape ${i.shape}`);const l={skipEmpty:a},c={input:r,delimiter:i},f=C.runKernel(q2,c,l);return{indices:f[0],values:f[1],shape:f[2]}}const WD=R({stringSplit_:ZD});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function QD(t,e){const a=x(t,"input","stringToHashBucketFast","string"),r={numBuckets:e};if(e<=0)throw new Error("Number of buckets must be at least 1");const i={input:a};return C.runKernel(F2,i,r)}const JD=R({stringToHashBucketFast_:QD});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function e6(t,e,a,r=!0){const i=x(t,"input","staticRegexReplace","string"),l={pattern:e,rewrite:a,replaceGlobal:r};return C.runKernel(L2,{x:i},l)}const t6=R({staticRegexReplace_:e6});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const PS={fft:mu,ifft:Ji,rfft:gu,irfft:Bd},XS={hammingWindow:_$,hannWindow:VS,frame:HS,stft:D$},Yd={flipLeftRight:j$,grayscaleToRGB:I$,resizeNearestNeighbor:uD,resizeBilinear:oD,rgbToGrayscale:B$,rotateWithOffset:q$,cropAndResize:C$,nonMaxSuppression:V$,nonMaxSuppressionAsync:W$,nonMaxSuppressionWithScore:J$,nonMaxSuppressionWithScoreAsync:tD,nonMaxSuppressionPadded:aD,nonMaxSuppressionPaddedAsync:rD,threshold:hD,transform:pD},ZS={bandPart:gD,gramSchmidt:bD,qr:wD},WS={absoluteDifference:xD,computeWeightedLoss:ra,cosineDistance:ED,hingeLoss:_D,huberLoss:OD,logLoss:DD,meanSquaredError:CD,sigmoidCrossEntropy:MD,softmaxCrossEntropy:BD},QS={sparseFillEmptyRows:qD,sparseReshape:VD,sparseSegmentMean:GD,sparseSegmentSum:YD},JS={stringNGrams:XD,stringSplit:WD,stringToHashBucketFast:JD,staticRegexReplace:t6};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const n6=new Map,xh=new Map;class eN{getClassName(){return this.constructor.className}static fromConfig(e,a){return new e(a)}}class Ra{constructor(){this.classNameMap={}}static getMap(){return Ra.instance==null&&(Ra.instance=new Ra),Ra.instance}static register(e){Ra.getMap().classNameMap[e.className]=[e,e.fromConfig]}}function tN(t,e,a){E(t.className!=null,()=>"Class being registered does not have the static className property defined."),E(typeof t.className=="string",()=>"className is required to be a string, but got type "+typeof t.className),E(t.className.length>0,()=>"Class being registered has an empty-string as its className, which is disallowed."),typeof e>"u"&&(e="Custom"),typeof a>"u"&&(a=t.className);const r=a,i=e+">"+r;return Ra.register(t),n6.set(i,t),xh.set(t,i),t}function a6(t){return xh.has(t)?xh.get(t):t.className}const s6=Object.freeze(Object.defineProperty({__proto__:null,Serializable:eN,SerializationMap:Ra,getRegisteredName:a6,registerClass:tN},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ka extends eN{minimize(e,a=!1,r){const{value:i,grads:l}=this.computeGradients(e,r);if(r!=null){const c=r.map(f=>({name:f.name,tensor:l[f.name]}));this.applyGradients(c)}else this.applyGradients(l);return $t(l),a?i:(i.dispose(),null)}get iterations(){return this.iterations_==null&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(e,a){return Ow(e,a)}dispose(){this.iterations_!=null&&$t(this.iterations_)}async saveIterations(){return this.iterations_==null&&(this.iterations_=0),{name:"iter",tensor:$e(this.iterations_,"int32")}}async getWeights(){throw new Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(e){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(e){return this.iterations_=(await e[0].tensor.data())[0],e.slice(1)}}Object.defineProperty(Ka,Symbol.hasInstance,{value:t=>t.minimize!=null&&t.computeGradients!=null&&t.applyGradients!=null});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Pd extends Ka{static get className(){return"Adadelta"}constructor(e,a,r=null){super(),this.learningRate=e,this.rho=a,this.epsilon=r,this.accumulatedGrads=[],this.accumulatedUpdates=[],r==null&&(this.epsilon=C.backend.epsilon())}applyGradients(e){(Array.isArray(e)?e.map(r=>r.name):Object.keys(e)).forEach((r,i)=>{const l=C.registeredVariables[r],c=!1;this.accumulatedGrads[i]==null&&(this.accumulatedGrads[i]={originalName:`${r}/accum_grad`,variable:Re(()=>Ht(l).variable(c))}),this.accumulatedUpdates[i]==null&&(this.accumulatedUpdates[i]={originalName:`${r}/accum_var`,variable:Re(()=>Ht(l).variable(c))});const f=Array.isArray(e)?e[i].tensor:e[r];if(f==null)return;const h=this.accumulatedGrads[i].variable,p=this.accumulatedUpdates[i].variable;Re(()=>{const g=be(le(h,this.rho),le(dn(f),1-this.rho)),y=le(Pe(Cn(be(p,this.epsilon)),Cn(be(h,this.epsilon))),f),v=be(le(p,this.rho),le(dn(y),1-this.rho));h.assign(g),p.assign(v);const S=be(le(y,-this.learningRate),l);l.assign(S)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&($t(this.accumulatedGrads.map(e=>e.variable)),$t(this.accumulatedUpdates.map(e=>e.variable)))}async getWeights(){const e=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(e.map(a=>({name:a.originalName,tensor:a.variable})))}async setWeights(e){e=await this.extractIterations(e);const a=e.length/2,r=!1;this.accumulatedGrads=e.slice(0,a).map(i=>({originalName:i.name,variable:i.tensor.variable(r)})),this.accumulatedUpdates=e.slice(a,a*2).map(i=>({originalName:i.name,variable:i.tensor.variable(r)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(e,a){return new e(a.learningRate,a.rho,a.epsilon)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Xd extends Ka{static get className(){return"Adagrad"}constructor(e,a=.1){super(),this.learningRate=e,this.initialAccumulatorValue=a,this.accumulatedGrads=[]}applyGradients(e){(Array.isArray(e)?e.map(r=>r.name):Object.keys(e)).forEach((r,i)=>{const l=C.registeredVariables[r];this.accumulatedGrads[i]==null&&(this.accumulatedGrads[i]={originalName:`${r}/accumulator`,variable:Re(()=>Dr(l.shape,this.initialAccumulatorValue).variable(!1))});const c=Array.isArray(e)?e[i].tensor:e[r];if(c==null)return;const f=this.accumulatedGrads[i].variable;Re(()=>{const h=be(f,dn(c));f.assign(h);const p=be(le(Pe(c,Cn(be(h,C.backend.epsilon()))),-this.learningRate),l);l.assign(p)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&$t(this.accumulatedGrads.map(e=>e.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e);const a=!1;this.accumulatedGrads=e.map(r=>({originalName:r.name,variable:r.tensor.variable(a)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(e,a){return new e(a.learningRate,a.initialAccumulatorValue)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Zd extends Ka{static get className(){return"Adam"}constructor(e,a,r,i=null){super(),this.learningRate=e,this.beta1=a,this.beta2=r,this.epsilon=i,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],Re(()=>{this.accBeta1=$e(a).variable(),this.accBeta2=$e(r).variable()}),i==null&&(this.epsilon=C.backend.epsilon())}applyGradients(e){const a=Array.isArray(e)?e.map(r=>r.name):Object.keys(e);Re(()=>{const r=Te(1,this.accBeta1),i=Te(1,this.accBeta2);a.forEach((l,c)=>{const f=C.registeredVariables[l],h=!1;this.accumulatedFirstMoment[c]==null&&(this.accumulatedFirstMoment[c]={originalName:`${l}/m`,variable:Re(()=>Ht(f).variable(h))}),this.accumulatedSecondMoment[c]==null&&(this.accumulatedSecondMoment[c]={originalName:`${l}/v`,variable:Re(()=>Ht(f).variable(h))});const p=Array.isArray(e)?e[c].tensor:e[l];if(p==null)return;const g=this.accumulatedFirstMoment[c].variable,y=this.accumulatedSecondMoment[c].variable,v=be(le(g,this.beta1),le(p,1-this.beta1)),S=be(le(y,this.beta2),le(dn(p),1-this.beta2)),k=Pe(v,r),$=Pe(S,i);g.assign(v),y.assign(S);const A=be(le(Pe(k,be(Cn($),this.epsilon)),-this.learningRate),f);f.assign(A)}),this.accBeta1.assign(le(this.accBeta1,this.beta1)),this.accBeta2.assign(le(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&$t(this.accumulatedFirstMoment.map(e=>e.variable)),this.accumulatedSecondMoment!=null&&$t(this.accumulatedSecondMoment.map(e=>e.variable))}async getWeights(){const e=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(e.map(a=>({name:a.originalName,tensor:a.variable})))}async setWeights(e){e=await this.extractIterations(e),Re(()=>{this.accBeta1.assign(Er(this.beta1,this.iterations_+1)),this.accBeta2.assign(Er(this.beta2,this.iterations_+1))});const a=e.length/2,r=!1;this.accumulatedFirstMoment=e.slice(0,a).map(i=>({originalName:i.name,variable:i.tensor.variable(r)})),this.accumulatedSecondMoment=e.slice(a,a*2).map(i=>({originalName:i.name,variable:i.tensor.variable(r)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(e,a){return new e(a.learningRate,a.beta1,a.beta2,a.epsilon)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Wd extends Ka{static get className(){return"Adamax"}constructor(e,a,r,i=null,l=0){super(),this.learningRate=e,this.beta1=a,this.beta2=r,this.epsilon=i,this.decay=l,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],Re(()=>{this.iteration=$e(0).variable(),this.accBeta1=$e(a).variable()}),i==null&&(this.epsilon=C.backend.epsilon())}applyGradients(e){const a=Array.isArray(e)?e.map(r=>r.name):Object.keys(e);Re(()=>{const r=Te(1,this.accBeta1),i=Pe(-this.learningRate,be(le(this.iteration,this.decay),1));a.forEach((l,c)=>{const f=C.registeredVariables[l],h=!1;this.accumulatedFirstMoment[c]==null&&(this.accumulatedFirstMoment[c]={originalName:`${l}/m`,variable:Ht(f).variable(h)}),this.accumulatedWeightedInfNorm[c]==null&&(this.accumulatedWeightedInfNorm[c]={originalName:`${l}/v`,variable:Ht(f).variable(h)});const p=Array.isArray(e)?e[c].tensor:e[l];if(p==null)return;const g=this.accumulatedFirstMoment[c].variable,y=this.accumulatedWeightedInfNorm[c].variable,v=be(le(g,this.beta1),le(p,1-this.beta1)),S=le(y,this.beta2),k=Vt(p),$=_d(S,k);g.assign(v),y.assign($);const A=be(le(Pe(i,r),Pe(v,be($,this.epsilon))),f);f.assign(A)}),this.iteration.assign(be(this.iteration,1)),this.accBeta1.assign(le(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&$t(this.accumulatedFirstMoment.map(e=>e.variable)),this.accumulatedWeightedInfNorm!=null&&$t(this.accumulatedWeightedInfNorm.map(e=>e.variable))}async getWeights(){throw new Error("getWeights() is not implemented for Adamax yet.")}async setWeights(e){throw new Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(e,a){return new e(a.learningRate,a.beta1,a.beta2,a.epsilon,a.decay)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class xu extends Ka{static get className(){return"SGD"}constructor(e){super(),this.learningRate=e,this.setLearningRate(e)}applyGradients(e){(Array.isArray(e)?e.map(r=>r.name):Object.keys(e)).forEach((r,i)=>{const l=Array.isArray(e)?e[i].tensor:e[r];if(l==null)return;const c=C.registeredVariables[r];Re(()=>{const f=be(le(this.c,l),c);c.assign(f)})}),this.incrementIterations()}setLearningRate(e){this.learningRate=e,this.c!=null&&this.c.dispose(),this.c=vn($e(-e))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(e){if(e=await this.extractIterations(e),e.length!==0)throw new Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(e,a){return new e(a.learningRate)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Qd extends xu{static get className(){return"Momentum"}constructor(e,a,r=!1){super(e),this.learningRate=e,this.momentum=a,this.useNesterov=r,this.accumulations=[],this.m=$e(this.momentum)}applyGradients(e){(Array.isArray(e)?e.map(r=>r.name):Object.keys(e)).forEach((r,i)=>{const l=C.registeredVariables[r];this.accumulations[i]==null&&(this.accumulations[i]={originalName:`${r}/momentum`,variable:Re(()=>Ht(l).variable(!1))});const c=this.accumulations[i].variable,f=Array.isArray(e)?e[i].tensor:e[r];f!=null&&Re(()=>{let h;const p=be(le(this.m,c),f);this.useNesterov?h=be(le(this.c,be(f,le(p,this.m))),l):h=be(le(this.c,p),l),c.assign(p),l.assign(h)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&$t(this.accumulations.map(e=>e.variable))}setMomentum(e){this.momentum=e}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e);const a=!1;this.accumulations=e.map(r=>({originalName:r.name,variable:r.tensor.variable(a)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(e,a){return new e(a.learningRate,a.momentum,a.useNesterov)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Jd extends Ka{static get className(){return"RMSProp"}constructor(e,a=.9,r=0,i=null,l=!1){if(super(),this.learningRate=e,this.decay=a,this.momentum=r,this.epsilon=i,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=l,i==null&&(this.epsilon=C.backend.epsilon()),e==null)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(e){(Array.isArray(e)?e.map(r=>r.name):Object.keys(e)).forEach((r,i)=>{const l=C.registeredVariables[r],c=!1;this.accumulatedMeanSquares[i]==null&&(this.accumulatedMeanSquares[i]={originalName:`${r}/rms`,variable:Re(()=>Ht(l).variable(c))}),this.accumulatedMoments[i]==null&&(this.accumulatedMoments[i]={originalName:`${r}/momentum`,variable:Re(()=>Ht(l).variable(c))}),this.accumulatedMeanGrads[i]==null&&this.centered&&(this.accumulatedMeanGrads[i]={originalName:`${r}/mg`,variable:Re(()=>Ht(l).variable(c))});const f=Array.isArray(e)?e[i].tensor:e[r];if(f==null)return;const h=this.accumulatedMeanSquares[i].variable,p=this.accumulatedMoments[i].variable;Re(()=>{const g=be(le(h,this.decay),le(dn(f),1-this.decay));if(this.centered){const y=this.accumulatedMeanGrads[i].variable,v=be(le(y,this.decay),le(f,1-this.decay)),S=Pe(le(f,this.learningRate),Cn(Te(g,be(dn(v),this.epsilon)))),k=be(le(p,this.momentum),S);h.assign(g),y.assign(v),p.assign(k);const $=Te(l,k);l.assign($)}else{const y=be(le(h,this.decay),le(dn(f),1-this.decay)),v=be(le(p,this.momentum),Pe(le(f,this.learningRate),Cn(be(y,this.epsilon))));h.assign(y),p.assign(v);const S=Te(l,v);l.assign(S)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&$t(this.accumulatedMeanSquares.map(e=>e.variable)),this.accumulatedMeanGrads!=null&&this.centered&&$t(this.accumulatedMeanGrads.map(e=>e.variable)),this.accumulatedMoments!=null&&$t(this.accumulatedMoments.map(e=>e.variable))}async getWeights(){const e=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&e.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(e.map(a=>({name:a.originalName,tensor:a.variable})))}async setWeights(e){e=await this.extractIterations(e);const a=this.centered?e.length/3:e.length/2,r=!1;this.accumulatedMeanSquares=e.slice(0,a).map(i=>({originalName:i.name,variable:i.tensor.variable(r)})),this.accumulatedMoments=e.slice(a,a*2).map(i=>({originalName:i.name,variable:i.tensor.variable(r)})),this.centered&&(this.accumulatedMeanGrads=e.slice(a*2,a*3).map(i=>({originalName:i.name,variable:i.tensor.variable(r)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(e,a){return new e(a.learningRate,a.decay,a.momentum,a.epsilon,a.centered)}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const r6=[Pd,Xd,Zd,Wd,Qd,Jd,xu];function i6(){for(const t of r6)tN(t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const o6="model",l6=".json",u6=".weights.bin";function O0(t){return new Promise(e=>setTimeout(e)).then(t)}class Es{constructor(e){if(!ve().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");e.startsWith(Es.URL_SCHEME)&&(e=e.slice(Es.URL_SCHEME.length)),(e==null||e.length===0)&&(e=o6),this.modelJsonFileName=e+l6,this.weightDataFileName=e+u6}async save(e){if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");const a=xn.join(e.weightData),r=window.URL.createObjectURL(new Blob([a],{type:"application/octet-stream"}));if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const i=[{paths:["./"+this.weightDataFileName],weights:e.weightSpecs}],l=wv(e,i),c=window.URL.createObjectURL(new Blob([JSON.stringify(l)],{type:"application/json"})),f=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(f.download=this.modelJsonFileName,f.href=c,await O0(()=>f.dispatchEvent(new MouseEvent("click"))),e.weightData!=null){const h=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;h.download=this.weightDataFileName,h.href=r,await O0(()=>h.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:ro(e)}}}}Es.URL_SCHEME="downloads://";class c6{constructor(e){if(e==null||e.length<1)throw new Error(`When calling browserFiles, at least 1 file is required, but received ${e}`);this.jsonFile=e[0],this.weightsFiles=e.slice(1)}async load(){return new Promise((e,a)=>{const r=new FileReader;r.onload=i=>{const l=JSON.parse(i.target.result),c=l.modelTopology;if(c==null){a(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));return}if(l.weightsManifest==null){a(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));return}if(this.weightsFiles.length===0){e({modelTopology:c});return}const h=rd(l,p=>this.loadWeights(p));e(h)},r.onerror=i=>a(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),r.readAsText(this.jsonFile)})}loadWeights(e){const a=[],r=[];for(const c of e)a.push(...c.weights),r.push(...c.paths);const i=this.checkManifestAndWeightFiles(e),l=r.map(c=>this.loadWeightsFile(c,i[c]));return Promise.all(l).then(c=>[a,c])}loadWeightsFile(e,a){return new Promise((r,i)=>{const l=new FileReader;l.onload=c=>{const f=c.target.result;r(f)},l.onerror=c=>i(`Failed to weights data from file of path '${e}'.`),l.readAsArrayBuffer(a)})}checkManifestAndWeightFiles(e){const a=[],r=this.weightsFiles.map(l=>b0(l.name)),i={};for(const l of e)l.paths.forEach(c=>{const f=b0(c);if(a.indexOf(f)!==-1)throw new Error(`Duplicate file basename found in weights manifest: '${f}'`);if(a.push(f),r.indexOf(f)===-1)throw new Error(`Weight file with basename '${f}' is not provided.`);i[c]=this.weightsFiles[r.indexOf(f)]});if(a.length!==this.weightsFiles.length)throw new Error(`Mismatch in the number of files in weights manifest (${a.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return i}}const f6=t=>ve().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(Es.URL_SCHEME)?h6(t.slice(Es.URL_SCHEME.length)):null;Qe.registerSaveRouter(f6);function h6(t="model"){return new Es(t)}function d6(t){return new c6(t)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $0(t,e,a,r){c(t),a=a??0,r=r??1,f(a,r);let i=0;const l=h=>(h.then(p=>{const g=a+ ++i/t.length*(r-a);return e(g),p}),h);function c(h){E(h!=null&&Array.isArray(h)&&h.length>0,()=>"promises must be a none empty array")}function f(h,p){E(h>=0&&h<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${h}`),E(p>=0&&p<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${p}`),E(p>=h,()=>`startFraction must be no more than endFraction, but got startFraction ${h} and endFraction ${p}`)}return Promise.all(t.map(l))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function nN(t,e){e==null&&(e={});const a=e.fetchFunc==null?ve().platform.fetch:e.fetchFunc,r=t.map(y=>a(y,e.requestInit,{isBinary:!0})),f=(e.onProgress==null?await Promise.all(r):await $0(r,e.onProgress,0,.5)).map(y=>y.arrayBuffer());return e.onProgress==null?await Promise.all(f):await $0(f,e.onProgress,.5,1)}function p6(t,e){var a;const r=e.fetchFunc==null?ve().platform.fetch:e.fetchFunc;let i=0,l;return(a=e.onProgress)===null||a===void 0||a.call(e,0),new ReadableStream({pull:async c=>{for(var f;i<t.length;){l||(l=(await r(t[i],e.requestInit,{isBinary:!0})).body.getReader());const{done:h,value:p}=await l.read();if(h){i++,l=void 0,(f=e.onProgress)===null||f===void 0||f.call(e,i/t.length);continue}c.enqueue(p);return}c.close()}})}async function m6(t,e="",a,r){return aN(c=>nN(c,{requestInit:r}))(t,e,a)}function aN(t){return async(e,a="",r)=>{const i=e.map(()=>!1),l={},c=r!=null?r.map(()=>!1):[],f=[];if(e.forEach((S,k)=>{let $=0;S.weights.forEach(A=>{const M="quantization"in A?A.quantization.dtype:A.dtype,X=Ss[M]*Ue(A.shape),z=()=>{i[k]=!0,l[k]==null&&(l[k]=[]),l[k].push({manifestEntry:A,groupOffset:$,sizeBytes:X})};r!=null?r.forEach((I,V)=>{I===A.name&&(z(),c[V]=!0)}):z(),f.push(A.name),$+=X})}),!c.every(S=>S)){const S=r.filter((k,$)=>!c[$]);throw new Error(`Could not find weights in manifest with names: ${S.join(", ")}. 
Manifest JSON has weights with names: ${f.join(", ")}.`)}const h=i.reduce((S,k,$)=>(k&&S.push($),S),[]),p=[];h.forEach(S=>{e[S].paths.forEach(k=>{const $=a+(a.endsWith("/")?"":"/")+k;p.push($)})});const g=await t(p),y={};let v=0;return h.forEach(S=>{const k=e[S].paths.length,$=new xn(g.slice(v,v+k));l[S].forEach(M=>{const X=$.slice(M.groupOffset,M.groupOffset+M.sizeBytes),z=yv(X,[M.manifestEntry]);for(const I in z)y[I]=z[I]}),v+=k}),y}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const g6="application/octet-stream",y6="application/json";class ep{constructor(e,a){if(this.DEFAULT_METHOD="POST",a==null&&(a={}),this.weightPathPrefix=a.weightPathPrefix,this.weightUrlConverter=a.weightUrlConverter,a.fetchFunc!=null?(E(typeof a.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=a.fetchFunc):this.fetch=ve().platform.fetch,E(e!=null&&e.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(e)&&E(e.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${e.length}).`),this.path=e,a.requestInit!=null&&a.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=a.requestInit||{},this.loadOptions=a}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const a=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);a.body=new FormData;const r=[{paths:["./model.weights.bin"],weights:e.weightSpecs}],i=wv(e,r);if(a.body.append("model.json",new Blob([JSON.stringify(i)],{type:y6}),"model.json"),e.weightData!=null){const c=xn.join(e.weightData);a.body.append("model.weights.bin",new Blob([c],{type:g6}),"model.weights.bin")}const l=await this.fetch(this.path,a);if(l.ok)return{modelArtifactsInfo:ro(e),responses:[l]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${l.status}.`)}async loadModelJSON(){const e=await this.fetch(this.path,this.requestInit);if(!e.ok)throw new Error(`Request to ${this.path} failed with status code ${e.status}. Please verify this URL points to the model JSON of the model to load.`);let a;try{a=await e.json()}catch{let c=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?c+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":c+=" Please make sure the server is serving valid JSON for this request.",new Error(c)}const r=a.modelTopology,i=a.weightsManifest;if(r==null&&i==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return a}async load(){if(this.loadOptions.streamWeights)return this.loadStream();const e=await this.loadModelJSON();return rd(e,a=>this.loadWeights(a))}async loadStream(){const e=await this.loadModelJSON(),a=await this.getWeightUrls(e.weightsManifest),r=Zl(e.weightsManifest),i=()=>p6(a,this.loadOptions);return Object.assign(Object.assign({},e),{weightSpecs:r,getWeightStream:i})}async getWeightUrls(e){const a=Array.isArray(this.path)?this.path[1]:this.path,[r,i]=b6(a),l=this.weightPathPrefix||r,c=[],f=[];for(const h of e)for(const p of h.paths)this.weightUrlConverter!=null?f.push(this.weightUrlConverter(p)):c.push(l+p+i);return this.weightUrlConverter&&c.push(...await Promise.all(f)),c}async loadWeights(e){const a=await this.getWeightUrls(e),r=Zl(e),i=await nN(a,this.loadOptions);return[r,i]}}ep.URL_SCHEME_REGEX=/^https?:\/\//;function b6(t){const e=t.lastIndexOf("/"),a=t.lastIndexOf("?"),r=t.substring(0,e),i=a>e?t.substring(a):"";return[r+"/",i]}function Th(t){return t.match(ep.URL_SCHEME_REGEX)!=null}const sN=(t,e)=>{if(typeof fetch>"u"&&(e==null||e.fetchFunc==null))return null;{let a=!0;if(Array.isArray(t)?a=t.every(r=>Th(r)):a=Th(t),a)return tp(t,e)}return null};Qe.registerSaveRouter(sN);Qe.registerLoadRouter(sN);function tp(t,e){return new ep(t,e)}function v6(t,e){return tp(t,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Jf{constructor(e){this.modelArtifacts=e}load(){return this.modelArtifacts}}class rN{constructor(e){this.saveHandler=e}save(e){return this.saveHandler(e)}}class w6{constructor(e){e.load&&(this.load=()=>Promise.resolve(e.load())),e.save&&(this.save=a=>Promise.resolve(e.save(a)))}}function S6(t,e,a,r){const i=arguments;return new w6(tu(...i))}function tu(t,e,a,r){return arguments.length===1?t.modelTopology!=null||t.weightSpecs!=null?new Jf(t):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Jf({modelTopology:t})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Jf({modelTopology:t,weightSpecs:e,weightData:a,trainingConfig:r}))}function N6(t){return new rN(t)}function x6(t){return new rN(t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const np=Object.freeze(Object.defineProperty({__proto__:null,CompositeArrayBuffer:xn,browserFiles:d6,browserHTTPRequest:v6,concatenateArrayBuffers:gk,copyModel:Lk,decodeWeights:yv,decodeWeightsStream:vv,encodeWeights:ck,fromMemory:S6,fromMemorySync:tu,getLoadHandlers:Tk,getModelArtifactsForJSON:rd,getModelArtifactsForJSONSync:sd,getModelArtifactsInfoForJSON:ro,getSaveHandlers:xk,getWeightSpecs:Zl,http:tp,isHTTPScheme:Th,listModels:Mk,loadWeights:m6,moveModel:Bk,registerLoadRouter:Nk,registerSaveRouter:Sk,removeModel:Ik,weightsLoaderFactory:aN,withSaveHandler:N6,withSaveHandlerSync:x6},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function T6(t,e,a){const r=x(t,"labels","confusionMatrix"),i=x(e,"predictions","confusionMatrix");E(a==null||a>0&&Number.isInteger(a),()=>`If provided, numClasses must be a positive integer, but got ${a}`),E(r.rank===1,()=>`Expected the rank of labels to be 1, but got ${r.rank}`),E(i.rank===1,()=>`Expected the rank of predictions to be 1, but got ${i.rank}`),E(r.shape[0]===i.shape[0],()=>`Mismatch in the number of examples: ${r.shape[0]} vs. ${i.shape[0]}. Labels and predictions should have the same number of elements.`),E(a>0&&Number.isInteger(a),()=>`numClasses is required to be a positive integer, but got ${a}`);const l=eu(He(r,"int32"),a),c=eu(He(i,"int32"),a),f=eo(l),h=Me(f,c);return He(h,"int32")}const E6=R({confusionMatrix_:T6});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const k6=Object.freeze(Object.defineProperty({__proto__:null,confusionMatrix:E6},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let fs,D0=!1;function iN(t,e=3){if(e>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(t==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");let a=!1,r=!1,i=!1,l=!1,c=!1,f=!1;if(t.data instanceof Uint8Array)a=!0;else if(typeof ImageData<"u"&&t instanceof ImageData)r=!0;else if(typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement)i=!0;else if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement)l=!0;else if(t.getContext!=null)c=!0;else if(typeof ImageBitmap<"u"&&t instanceof ImageBitmap)f=!0;else throw new Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${t.constructor.name}`);if(Vi(ih,C.backendName)!=null){const k={pixels:t},$={numChannels:e};return C.runKernel(ih,k,$)}const[p,g]=i?[t.videoWidth,t.videoHeight]:[t.width,t.height];let y;if(c)y=t.getContext("2d").getImageData(0,0,p,g).data;else if(r||a)y=t.data;else if(l||i||f){if(fs==null)if(typeof document>"u")if(typeof OffscreenCanvas<"u"&&typeof OffscreenCanvasRenderingContext2D<"u")fs=new OffscreenCanvas(1,1).getContext("2d");else throw new Error("Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.");else fs=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});fs.canvas.width=p,fs.canvas.height=g,fs.drawImage(t,0,0,p,g),y=fs.getImageData(0,0,p,g).data}let v;if(e===4)v=new Int32Array(y);else{const k=p*g;v=new Int32Array(k*e);for(let $=0;$<k;$++)for(let A=0;A<e;++A)v[$*e+A]=y[$*4+A]}return Fd(v,[g,p,e],"int32")}function _6(t){return t!=null&&t.data instanceof Uint8Array}function A6(){return typeof window<"u"&&typeof ImageBitmap<"u"&&window.hasOwnProperty("createImageBitmap")}function O6(t){return t!=null&&t.width!==0&&t.height!==0}function $6(t){return A6()&&!(t instanceof ImageBitmap)&&O6(t)&&!_6(t)}async function D6(t,e=3){let a=null;if(ve().getBool("WRAP_TO_IMAGEBITMAP")&&$6(t)){let r;try{r=await createImageBitmap(t,{premultiplyAlpha:"none"})}catch{r=null}r!=null&&r.width===t.width&&r.height===t.height?a=r:a=t}else a=t;return iN(a,e)}function oN(t){if(t.rank!==2&&t.rank!==3)throw new Error(`toPixels only supports rank 2 or 3 tensors, got rank ${t.rank}.`);const e=t.rank===2?1:t.shape[2];if(e>4||e===2)throw new Error(`toPixels only supports depth of size 1, 3 or 4 but got ${e}`);if(t.dtype!=="float32"&&t.dtype!=="int32")throw new Error(`Unsupported type for toPixels: ${t.dtype}. Please use float32 or int32 tensors.`)}function R6(t){const e=(t==null?void 0:t.alpha)||1;if(e>1||e<0)throw new Error(`Alpha value ${e} is suppoed to be in range [0 - 1].`)}async function C6(t,e){let a=x(t,"img","toPixels");if(!(t instanceof Je)){const p=a;a=He(p,"int32"),p.dispose()}oN(a);const[r,i]=a.shape.slice(0,2),l=a.rank===2?1:a.shape[2],c=await a.data(),f=a.dtype==="float32"?255:1,h=new Uint8ClampedArray(i*r*4);for(let p=0;p<r*i;++p){const g=[0,0,0,255];for(let v=0;v<l;v++){const S=c[p*l+v];if(a.dtype==="float32"){if(S<0||S>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${S}.`)}else if(a.dtype==="int32"&&(S<0||S>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${S}.`);l===1?(g[0]=S*f,g[1]=S*f,g[2]=S*f):g[v]=S*f}const y=p*4;h[y+0]=Math.round(g[0]),h[y+1]=Math.round(g[1]),h[y+2]=Math.round(g[2]),h[y+3]=Math.round(g[3])}if(e!=null){D0||Vi(Wh,C.backendName)!=null&&(console.warn("tf.browser.toPixels is not efficient to draw tensor on canvas. Please try tf.browser.draw instead."),D0=!0),e.width=i,e.height=r;const p=e.getContext("2d"),g=new ImageData(h,i,r);p.putImageData(g,0,0)}return a!==t&&a.dispose(),h}function z6(t,e,a){let r=x(t,"img","draw");if(!(t instanceof Je)){const c=r;r=He(c,"int32"),c.dispose()}oN(r),R6(a==null?void 0:a.imageOptions);const i={image:r},l={canvas:e,options:a};C.runKernel(Wh,i,l)}const lN=R({fromPixels_:iN}),j6=Object.freeze(Object.defineProperty({__proto__:null,draw:z6,fromPixels:lN,fromPixelsAsync:D6,toPixels:C6},Symbol.toStringTag,{value:"Module"}));function uN(t,e){const a=t.shape.length,r=e.shape.length;if(a<1)throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${a}.`);if(r<1)throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${r}.`);if(e.dtype!=="int32")throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${e.dtype}.`);if(e.shape[r-1]>a)throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${e.shape[r-1]} vs. ${a}`);if(Ue(t.shape)===0)throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${t.shape}.`);const i=e.shape,l=i[i.length-1];let c=1;for(let y=0;y<i.length-1;++y)c*=i[y];const f=t.shape,h=i.slice();h.pop();let p=1;for(let y=l;y<a;++y)p*=f[y],h.push(f[y]);const g=[...$r(t.shape).map(y=>y/p),1].slice(0,l);return[h,c,p,g]}const M6=Object.freeze(Object.defineProperty({__proto__:null,prepareAndValidate:uN},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Eh=-2,I6=-1;function L6(t,e,a){const r=t.shape.length;E(r===e.length,()=>`Error in slice${r}D: Length of begin ${e} must match the rank of the array (${r}).`),E(r===a.length,()=>`Error in slice${r}D: Length of size ${a} must match the rank of the array (${r}).`);for(let i=0;i<r;++i)E(e[i]+a[i]<=t.shape[i],()=>`Error in slice${r}D: begin[${i}] + size[${i}] (${e[i]+a[i]}) would overflow input.shape[${i}] (${t.shape[i]})`)}function B6(t){const e=[];let a=0;for(;t>0;)t&1&&e.push(a),t/=2,a++;return e}function U6(t,e,a){const r=[];for(let i=0;i<t.length;i++)r[i]=Math.ceil((e[i]-t[i])/a[i]);return r}function cN(t,e,a,r){const i=[...t];for(let l=i.length;l<r.length;l++)i.push(1);for(let l=0;l<a;l++)l===0?i[e]=1:(i.splice(e,0,1),i.pop());return i}function fN(t,e,a){return a<=t?a:a-(e-1)}function hN(t,e){const a=[];for(let r=0;r<t;r++)a.push(e+r);return a}function q6(t,e,a,r,i,l,c,f,h){const p=t.length;let g=new Array(p),y=new Array(p),v=new Array(p);if(e.length&&a>0){const S=e[0],k=a+1;g=dN(c,S,k,r,t),y=pN(f,S,k,i,t),v=cN(l,S,k,t)}else for(let S=0;S<p;S++)g[S]=gN(c,r,l,t,S,h),y[S]=yN(f,i,l,t,S,h),v[S]=mN(l,S,h);return{begin:g,end:y,strides:v}}function dN(t,e,a,r,i){const l=[...i],c=hN(a,e);for(let f=0;f<l.length;f++)if(c.indexOf(f)>-1)l[f]=0;else{const h=fN(e,a,f);let p=r[h];t&1<<h&&(p=0),l[f]=p}return l}function pN(t,e,a,r,i){const l=[...i],c=hN(a,e);for(let f=0;f<l.length;f++)if(c.indexOf(f)>-1)l[f]=Number.MAX_SAFE_INTEGER;else{const h=fN(e,a,f);let p=r[h];t&1<<h&&(p=Number.MAX_SAFE_INTEGER),l[f]=p}for(let f=0;f<l.length;f++){const h=i[f];l[f]<0&&(l[f]+=h),l[f]=qi(0,l[f],i[f])}return l}function mN(t,e,a){let r=t[e];return(a&1<<e||r==null)&&(r=1),r}function gN(t,e,a,r,i,l){let c=e[i];const f=a[i]||1;(t&1<<i||l&1<<i||c==null)&&(f>0?c=Number.MIN_SAFE_INTEGER:c=Number.MAX_SAFE_INTEGER);const h=r[i];return c<0&&(c+=h),c=qi(0,c,h-1),c}function yN(t,e,a,r,i,l){let c=e[i];const f=a[i]||1;(t&1<<i||l&1<<i||c==null)&&(f>0?c=Number.MAX_SAFE_INTEGER:c=Number.MIN_SAFE_INTEGER);const h=r[i];return c<0&&(c+=h),f>0?c=qi(0,c,h):c=qi(-1,c,h-1),c}function F6(t,e,a){let r=a.length;for(let i=0;i<a.length;i++)if(a[i]>1){r=i;break}for(let i=r+1;i<a.length;i++)if(e[i]>0||a[i]!==t[i])return!1;return!0}function V6(t,e){let a=t.length>0?t[t.length-1]:1;for(let r=0;r<t.length-1;r++)a+=t[r]*e[r];return a}function H6(t,e,a){let r;const i=t.shape.length;typeof e=="number"?r=[e,...new Array(i-1).fill(0)]:e.length<i?r=e.concat(new Array(i-e.length).fill(0)):r=e.slice(),r.forEach(c=>{E(c!==-1,()=>"slice() does not support negative begin indexing.")});let l;return a==null?l=new Array(i).fill(-1):typeof a=="number"?l=[a,...new Array(i-1).fill(-1)]:a.length<i?l=a.concat(new Array(i-a.length).fill(-1)):l=a,l=l.map((c,f)=>c>=0?c:(E(c===-1,()=>`Negative size values should be exactly -1 but got ${c} for the slice() size at index ${f}.`),t.shape[f]-r[f])),[r,l]}function G6(t,e,a,r,i,l,c,f,h){let p;if(r==null?(p=new Array(e.length),p.fill(1)):p=r,c!=null&&(c&c-1)!==0)throw new Error("Multiple ellipses in slice is not allowed.");let g=!1;const y={dims:p.length,numAddAxisAfterEllipsis:0,begin:e.slice(),end:a.slice(),strides:p.slice(),beginMask:i,endMask:l,ellipsisMask:c,newAxisMask:f,shrinkAxisMask:h};for(let z=0;z<y.dims;z++)g&&(1<<z&f)!==0&&y.numAddAxisAfterEllipsis++,1<<z&c&&(g=!0);g||(y.ellipsisMask|=1<<y.dims,y.dims++);const v={dims:t.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};K6(y,v);let S=!0,k=!0,$=!0;const A=[],M=[];for(let z=0;z<t.length;++z){if(v.strides[z]===0)throw Error(`strides[${z}] must be non-zero`);const I=!!(v.shrinkAxisMask&1<<z),V=t[z];if(V===-1){A.push(I?1:-1);continue}const Z=[v.beginMask&1<<z,v.endMask&1<<z],re=[v.strides[z]>0?0:-1,v.strides[z]>0?V:V-1];if(I&&v.strides[z]<=0)throw Error("only stride 1 allowed on non-range indexing.");$=$&&v.strides[z]===1;const ie=!!(v.beginMask&1<<z&&v.endMask&1<<z);if(v.beginValid&&v.endValid){if(I){const te=v.begin[z]<0?V+v.begin[z]:v.begin[z];if(v.begin[z]=te,v.end[z]=v.begin[z]+1,te<0||te>=V)throw Error(`slice index ${v.begin[z]} of dimension ${z} out of bounds.`)}else v.begin[z]=R0(v.begin[z],0,v.strides[z],V,Z,re),v.end[z]=R0(v.end[z],1,v.strides[z],V,Z,re);const _=v.strides[z]===1&&v.begin[z]===0&&v.end[z]===V;S=S&&_,k=k&&(z===0&&v.strides[z]===1||_)}else S=S&&v.strides[z]===1&&ie,k=k&&(z===0&&v.strides[z]===1||ie);let F,U=!1;if(v.beginValid&&v.endValid?(F=v.end[z]-v.begin[z],U=!0):I?(F=1,U=!0):ie&&V>=0&&(v.strides[z]<0?F=-V:F=V,U=!0),U){let _;F===0||F<0!=v.strides[z]<0?_=0:_=Math.trunc(F/v.strides[z])+(F%v.strides[z]!==0?1:0),A.push(_)}else A.push(-1)}for(let z=0;z<v.finalShapeGatherIndices.length;++z){const I=v.finalShapeGatherIndices[z];I>=0?M.push(A[I]):I===Eh&&M.push(1)}return{finalShapeSparse:M.filter((z,I)=>v.finalShapeGatherIndices[I]!==Eh),finalShape:M,isIdentity:S,sliceDim0:k,isSimpleSlice:$,begin:v.begin,end:v.end,strides:v.strides}}function K6(t,e){e.beginMask=0,e.endMask=0,e.shrinkAxisMask=0;let a=0;e.beginValid=t.begin!=null,e.endValid=t.end!=null,e.begin=new Array(e.dims),e.end=new Array(e.dims),e.strides=new Array(e.dims),e.finalShapeGatherIndices=[],e.finalShapeGatherIndicesSparse=[],e.inputShapeGatherIndicesSparse=new Array(e.dims);for(let r=0;r<t.dims;r++)if(1<<r&t.ellipsisMask){const i=Math.min(e.dims-(t.dims-r)+1+t.numAddAxisAfterEllipsis,e.dims);for(;a<i;a++)e.begin[a]=0,e.end[a]=0,e.strides[a]=1,e.beginMask|=1<<a,e.endMask|=1<<a,e.finalShapeGatherIndices.push(a),e.finalShapeGatherIndicesSparse.push(-1),e.inputShapeGatherIndicesSparse[a]=r}else if(1<<r&t.newAxisMask)e.finalShapeGatherIndices.push(Eh),e.finalShapeGatherIndicesSparse.push(-1);else{if(a===e.begin.length)throw Error(`Index out of range using input dim ${a}; input has only ${e.dims} dims, ${e.begin.length}.`);t.begin!=null&&(e.begin[a]=t.begin[r]),t.end!=null&&(e.end[a]=t.end[r]),e.strides[a]=t.strides[r],t.beginMask&1<<r&&(e.beginMask|=1<<a),t.endMask&1<<r&&(e.endMask|=1<<a),t.shrinkAxisMask&1<<r?(e.finalShapeGatherIndices.push(I6),e.finalShapeGatherIndicesSparse.push(-1),e.shrinkAxisMask|=1<<a):(e.finalShapeGatherIndices.push(a),e.finalShapeGatherIndicesSparse.push(r)),e.inputShapeGatherIndicesSparse[a]=r,a++}}function R0(t,e,a,r,i,l){if(i[e])return a>0?l[e]:l[e+1&1];{const c=t<0?r+t:t;return c<l[0]?l[0]:c>l[1]?l[1]:c}}const bN=Object.freeze(Object.defineProperty({__proto__:null,assertParamsValid:L6,computeFlatOffset:V6,computeOutShape:U6,getNormalizedAxes:q6,isSliceContinous:F6,maskToAxes:B6,parseSliceParams:H6,sliceInfo:G6,startForAxis:gN,startIndicesWithElidedDims:dN,stopForAxis:yN,stopIndicesWithElidedDims:pN,stridesForAxis:mN,stridesWithElidedDims:cN},Symbol.toStringTag,{value:"Module"}));/** @license See the LICENSE file. */const Y6="4.22.0";/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class vN{static sgd(e){return new xu(e)}static momentum(e,a,r=!1){return new Qd(e,a,r)}static rmsprop(e,a=.9,r=0,i=null,l=!1){return new Jd(e,a,r,i,l)}static adam(e=.001,a=.9,r=.999,i=null){return new Zd(e,a,r,i)}static adadelta(e=.001,a=.95,r=null){return new Pd(e,a,r)}static adamax(e=.002,a=.9,r=.999,i=null,l=0){return new Wd(e,a,r,i,l)}static adagrad(e,a=.1){return new Xd(e,a)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const P6=vN;/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const X6=typeof requestAnimationFrame<"u"?requestAnimationFrame:typeof setImmediate<"u"?setImmediate:t=>t();function Z6(){return new Promise(t=>X6(()=>t()))}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function W6(t,e){const a=t[0].length;t.forEach((i,l)=>{E(i.length===a,()=>`Error in concat${a}D: rank of tensors[${l}] must be the same as the rank of the rest (${a})`)}),E(e>=0&&e<a,()=>`Error in concat${a}D: axis must be between 0 and ${a-1}.`);const r=t[0];t.forEach((i,l)=>{for(let c=0;c<a;c++)E(c===e||i[c]===r[c],()=>`Error in concat${a}D: Shape of tensors[${l}] (${i}) does not match the shape of the rest (${r}) along the non-concatenated axis ${l}.`)})}function Q6(t,e){const a=t[0].slice();for(let r=1;r<t.length;r++)a[e]+=t[r][e];return a}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var $n;(function(t){t[t.FIRST_DIM_SIZE=0]="FIRST_DIM_SIZE",t[t.VALUE_ROWIDS=1]="VALUE_ROWIDS",t[t.ROW_LENGTHS=2]="ROW_LENGTHS",t[t.ROW_SPLITS=3]="ROW_SPLITS",t[t.ROW_LIMITS=4]="ROW_LIMITS",t[t.ROW_STARTS=5]="ROW_STARTS"})($n||($n={}));function J6(t,e,a){let r=new Array;if(a==null&&e==null)return r;if(e==null)for(;r.length<t+a.length;)r.push(-1);else r=e.slice();if(a==null)return r;if(t+a.length!==r.length)throw new Error(`rt input.shape and shape=${e} are incompatible: rt input.rank = ${t+a.length}, but shape.rank = ${r.length}`);for(let i=1;i<a.length;++i){const l=a[i],c=r[r.length-a.length+i],f=r[c];if(l>=0)if(f>=0){if(f!==l)throw new Error(`rt input.shape and shape=${e} are incompatible: rt input.shape[${i+t}] = ${l} but shape[${i+t}] = ${f}`)}else r[c]=l}return r}function e5(t){const e={FIRST_DIM_SIZE:$n.FIRST_DIM_SIZE,VALUE_ROWIDS:$n.VALUE_ROWIDS,ROW_LENGTHS:$n.ROW_LENGTHS,ROW_SPLITS:$n.ROW_SPLITS,ROW_LIMITS:$n.ROW_LIMITS,ROW_STARTS:$n.ROW_STARTS},a=[];for(const r of t)if(r in e)a.push(e[r]);else break;return a}function t5(t){return t.length===0?0:t[0]===$n.FIRST_DIM_SIZE?t.length-1:t.length}function n5(t,e){if(t==null||e==null)return;const a=t.length,r=e.length;if(a>=r)throw new Error(`defaultValue.shape=${t} and ragged tensor flatValues.shape=${e}, are incompatible: defaultValue.rank = ${a} must be less than ragged tensor input flatValues.rank = ${r})`);for(let i=0;i<Math.min(a,r-1);++i){const l=t[i],c=e[i+1];if(l>=0&&c>=0&&l!==1&&l!==c)throw new Error(`defaultValue.shape=${t}, and ragged tensor input flatValues.shape=${e} are incompatible: defaultValue.shape[${i-t.length}] = ${l} but ragged tensor input.flatValues.shape[${i-t.length}] = ${c}`)}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ap=30;function a5(t){return t<=ap?t:Kl(t,Math.floor(Math.sqrt(t)))}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s5(t,e,a){const r=a*(typeof t=="number"?t:t[0]),i=e*(typeof t=="number"?t:t[1]);return[r,i]}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function r5(t,e,a,r=!0){let i=[];if(r)i=i.concat(e.slice(0)),i.push(t[0]/a),i=i.concat(t.slice(1));else{i=i.concat(t[0]);const l=e.length;for(let c=0;c<l;++c)i=i.concat([t[c+1]/e[c],e[c]]);i=i.concat(t.slice(l+1))}return i}function i5(t,e,a=!0){const r=[];if(a){r.push(e);for(let i=e+1;i<t;++i)i<=2*e?(r.push(i),r.push(i-(e+1))):r.push(i)}else{const i=[],l=[];for(let c=1;c<t;++c)c>=e*2+1||c%2===1?l.push(c):i.push(c);r.push(...i),r.push(0),r.push(...l)}return r}function o5(t,e,a,r=!0){const i=[];r?i.push(t[0]/a):i.push(t[0]*a);for(let l=1;l<t.length;++l)l<=e.length?r?i.push(e[l-1]*t[l]):i.push(t[l]/e[l-1]):i.push(t[l]);return i}function l5(t,e){const a=[0];for(let r=0;r<e;++r)a.push(t[r][0]);return a}function u5(t,e,a){const r=t.slice(0,1);for(let i=0;i<a;++i)r.push(t[i+1]-e[i][0]-e[i][1]);return r}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const c5=1.7580993408473768,f5=1.0507009873554805;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const h5=.3275911,d5=.254829592,p5=-.284496736,m5=1.421413741,g5=-1.453152027,y5=1.061405429;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function b5(t,e){if(t.length!==e.length)throw new Error(`Cannot merge real and imag arrays of different lengths. real:${t.length}, imag: ${e.length}.`);const a=new Float32Array(t.length*2);for(let r=0;r<a.length;r+=2)a[r]=t[r/2],a[r+1]=e[r/2];return a}function v5(t){const e=new Float32Array(t.length/2),a=new Float32Array(t.length/2);for(let r=0;r<t.length;r+=2)e[r/2]=t[r],a[r/2]=t[r+1];return{real:e,imag:a}}function w5(t){const e=Math.ceil(t.length/4),a=new Float32Array(e),r=new Float32Array(e);for(let i=0;i<t.length;i+=4)a[Math.floor(i/4)]=t[i],r[Math.floor(i/4)]=t[i+1];return{real:a,imag:r}}function S5(t){const e=Math.floor(t.length/4),a=new Float32Array(e),r=new Float32Array(e);for(let i=2;i<t.length;i+=4)a[Math.floor(i/4)]=t[i],r[Math.floor(i/4)]=t[i+1];return{real:a,imag:r}}function N5(t,e){const a=t[e*2],r=t[e*2+1];return{real:a,imag:r}}function x5(t,e,a,r){t[r*2]=e,t[r*2+1]=a}function T5(t,e){const a=new Float32Array(t/2),r=new Float32Array(t/2);for(let i=0;i<Math.ceil(t/2);i++){const l=(e?2:-2)*Math.PI*(i/t);a[i]=Math.cos(l),r[i]=Math.sin(l)}return{real:a,imag:r}}function E5(t,e,a){const r=(a?2:-2)*Math.PI*(t/e),i=Math.cos(r),l=Math.sin(r);return{real:i,imag:l}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const eh="->",k5=/->/g,C0=",",z0="...";function _5(t,e){t=t.replace(/\s/g,"");const a=(t.length-t.replace(k5,"").length)/eh.length;if(a<1)throw new Error("Equations without an arrow are not supported.");if(a>1)throw new Error(`Equation must contain exactly one arrow ("${eh}").`);const[r,i]=t.split(eh);E(r.indexOf(z0)===-1,()=>`The ellipsis notation ("${z0}") is not supported yet.`);const l=r.split(C0),c=l.length;if(e!==c)throw new Error(`Expected ${c} input tensors, received ${e}`);if(c>2)throw new Error("Support for more than 2 input tensors is not implemented yet.");const f=[];for(let v=0;v<i.length;++v){const S=i[v];if(!l.some(k=>k.indexOf(S)!==-1))throw new Error(`Output subscripts contain the label ${S} not present in the input subscripts.`);f.indexOf(S)===-1&&f.push(S)}for(let v=0;v<r.length;++v){const S=r[v];f.indexOf(S)===-1&&S!==C0&&f.push(S)}const h=new Array(l.length);for(let v=0;v<c;++v){if(new Set(l[v].split("")).size!==l[v].length)throw new Error(`Found duplicate axes in input component ${l[v]}. Support for duplicate axes in input is not implemented yet.`);h[v]=[];for(let S=0;S<l[v].length;++S)h[v].push(f.indexOf(l[v][S]))}const p=f.length,g=i.length,y=[];for(let v=g;v<p;++v)y.push(v);return{allDims:f,summedDims:y,idDims:h}}function A5(t,e){let a=new Array(t);a.fill(-1);for(let i=0;i<e.length;++i)a[e[i]]=i;const r=[];for(let i=0;i<t;++i)a[i]===-1&&r.push(i);return a=a.filter(i=>i!==-1),{permutationIndices:a,expandDims:r}}function O5(t,e,a){const r=new Array(t);for(let i=0;i<a.length;++i){const l=a[i].shape;for(let c=0;c<e[i].length;++c)r[e[i][c]]===void 0?r[e[i][c]]=l[c]:E(r[e[i][c]]===l[c],()=>`Expected dimension ${r[e[i][c]]} at axis ${c} of input shaped ${JSON.stringify(l)}, but got dimension ${l[c]}`)}}function $5(t,e){const a=t,r=[];let i=0;t.length===0&&a.push(-1),i=t.length+1;for(let c=0;c<i;++c)r.push([]);const l=[];for(let c=0;c<a.length;++c){const f=a[c],h=R5(e,f);for(const p of h)l.indexOf(p)===-1&&(r[c].push(p),l.push(p))}return{path:a,steps:r}}function D5(t){return t.every((e,a)=>e===a)}function R5(t,e){const a=[];for(let r=0;r<t.length;++r)(t[r].length===0||t[r].indexOf(e)!==-1||e===-1)&&a.push(r);return a}function C5(t,e,a=0){let r=[];if(typeof e=="number")E(t.shape[a]%e===0,()=>"Number of splits must evenly divide the axis."),r=new Array(e).fill(t.shape[a]/e);else{const i=e.reduce((c,f)=>(f===-1&&(c+=1),c),0);E(i<=1,()=>"There should be only one negative value in split array.");const l=e.indexOf(-1);if(l!==-1){const c=e.reduce((f,h)=>h>0?f+h:f);e[l]=t.shape[a]-c}E(t.shape[a]===e.reduce((c,f)=>c+f),()=>"The sum of sizes must match the size of the axis dimension."),r=e}return r}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function z5(t){return`Received SparseTensor with denseShape[0] = 0 but
  indices.shape[0] = ${t}`}function j5(t,e){return`indices(${t}, 0) is invalid: ${e} < 0`}function M5(t,e,a){return`indices(${t}, 0) is invalid: ${e} >= ${a}`}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function I5(t,e){return`only one output dimension may be -1, not both ${t} and ${e}`}function L5(t,e){return`size ${t} must be non-negative, not ${e}`}function B5(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"}function U5(t,e){const a=Ue(t),r=Ue(e);return`Input to reshape is a SparseTensor with ${a}
  dense values, but the requested shape requires a multiple of ${r}. inputShape=${t} outputShape= ${e}`}function q5(t,e){const a=Ue(t),r=Ue(e);return`Input to reshape is a tensor with ${a} dense values, but the requested shape has ${r}. inputShape=${t} outputShape=${e}`}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function F5(){return"segment ids must be >= 0"}function V5(){return"segment ids are not increasing"}function H5(t,e){return`Segment id ${t} out of range [0, ${e}), possibly because segmentIds input is not sorted.`}function G5(t,e,a){return`Bad: indices[${t}] == ${e} out of range [0, ${a})`}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function K5(t,e){let a=!1,r;for(t<=ap?(r=t,a=!0):r=Kl(t,Math.floor(Math.sqrt(t)));!a;)r>e||r===t?a=!0:r=Kl(t,r+1);return r}function Y5(t,e,a){const r=[],i=t.length;for(let l=0;l<i;l++)l!==e?r.push(t[l]):r.push(a);return r}function P5(t,e,a,r){const i=e.shape.length,l=t.shape.length;if(r!==0&&(r<-i||r>i))throw new Error(`Expect batchDims in the range of [-${i}, ${i}], but got ${r}`);if(r<0&&(r+=i),r>l)throw new Error(`batchDims (${r}) must be less than rank(x) (
    ${l}).`);if(a<r)throw new Error(`batchDims (${r}) must be less than or equal to axis (${a}).`);for(let y=0;y<r;++y)if(t.shape[y]!==e.shape[y])throw new Error(`x.shape[${y}]: ${t.shape[y]} should be equal to indices.shape[${y}]: ${e.shape[y]}.`);const c=t.shape[a],f=[];let h=1,p=1,g=1;for(let y=0;y<r;++y)f.push(t.shape[y]),h*=t.shape[y];for(let y=r;y<a;y++)f.push(t.shape[y]),p*=t.shape[y];for(let y=r;y<i;y++)f.push(e.shape[y]);for(let y=a+1;y<l;y++)f.push(t.shape[y]),g*=t.shape[y];return{batchSize:h,sliceSize:g,outerSize:p,dimSize:c,outputShape:f}}const X5=Object.freeze(Object.defineProperty({__proto__:null,collectGatherOpShapeInfo:P5,computeOutShape:Y5,segOpComputeOptimalWindowSize:K5},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Z5(t){try{return t.map(e=>Pl(e))}catch(e){throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${e}`)}}function W5(t){return t.map(e=>so(e))}const Q5=Object.freeze(Object.defineProperty({__proto__:null,ERF_A1:d5,ERF_A2:p5,ERF_A3:m5,ERF_A4:g5,ERF_A5:y5,ERF_P:h5,PARALLELIZE_THRESHOLD:ap,get RowPartitionType(){return $n},SELU_SCALE:f5,SELU_SCALEALPHA:c5,applyActivation:Su,assertAndGetBroadcastShape:it,assertAxesAreInnerMostDims:pA,assertParamsConsistent:W6,assignToTypedArray:x5,axesAreInnerMostDims:md,calculateShapes:kS,checkEinsumDimSizes:O5,checkPadOnDimRoundingMode:pn,combineLocations:ww,combineRaggedTensorToTensorShapes:J6,complexWithEvenIndex:w5,complexWithOddIndex:S5,computeConv2DInfo:io,computeConv3DInfo:qv,computeDefaultPad:ld,computeDilation2DInfo:u_,computeOptimalWindowSize:a5,computeOutAndReduceShapes:dA,computeOutShape:Q6,computePool2DInfo:Uv,computePool3DInfo:c_,convertConv2DDataFormat:Fv,decodeEinsumEquation:_5,eitherStridesOrDilationsAreOne:sa,expandShapeToKeepDim:uo,exponent:E5,exponents:T5,fromStringArrayToUint8:W5,fromUint8ToStringArray:Z5,getAxesPermutation:mA,getBroadcastDims:mw,getComplexWithIndex:N5,getEinsumComputePath:$5,getEinsumPermutation:A5,getFusedBiasGradient:wu,getFusedDyActivation:vu,getImageCenter:s5,getInnerMostAxes:yA,getPermuted:i5,getRaggedRank:t5,getReductionAxes:hd,getReshaped:r5,getReshapedPermuted:o5,getRowPartitionTypesHelper:e5,getSliceBeginCoords:l5,getSliceSize:u5,getSparseFillEmptyRowsIndicesDenseShapeMismatch:z5,getSparseFillEmptyRowsNegativeIndexErrorMessage:j5,getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:M5,getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:B5,getSparseReshapeInputOutputMismatchErrorMessage:q5,getSparseReshapeInputOutputMultipleErrorMessage:U5,getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:I5,getSparseReshapeNegativeOutputDimErrorMessage:L5,getSparseSegmentReductionIndicesOutOfRangeErrorMessage:G5,getSparseSegmentReductionNegativeSegmentIdsErrorMessage:F5,getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:V5,getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:H5,getUndoAxesPermutation:gA,isIdentityPermutation:D5,log:c3,mergeRealAndImagArrays:b5,prepareAndValidate:uN,prepareSplitSize:C5,segment_util:X5,shouldFuse:Nu,slice_util:bN,splitRealAndImagArrays:v5,stridesOrDilationsArePositive:Ts,tupleValuesAreOne:Xi,upcastType:uu,validateDefaultValueShape:n5,validateInput:yu,validateUpdateShape:Vd,warn:Da},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const J5=Object.freeze(Object.defineProperty({__proto__:null,nonMaxSuppressionV3Impl:GS,nonMaxSuppressionV4Impl:KS,nonMaxSuppressionV5Impl:YS,whereImpl:zS},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */i6();const eR=Object.freeze(Object.defineProperty({__proto__:null,Abs:fb,Acos:hb,Acosh:db,AdadeltaOptimizer:Pd,AdagradOptimizer:Xd,AdamOptimizer:Zd,AdamaxOptimizer:Wd,Add:Xh,AddN:pb,All:mb,Any:gb,ArgMax:yb,ArgMin:bb,Asin:vb,Asinh:wb,Atan:Sb,Atan2:xb,Atanh:Nb,AvgPool:Tb,AvgPool3D:Eb,AvgPool3DGrad:KE,AvgPoolGrad:GE,BatchMatMul:kb,BatchToSpaceND:_b,Bincount:Ab,BitwiseAnd:Ob,BroadcastArgs:$b,BroadcastTo:YE,Cast:Zh,Ceil:Db,ClipByValue:Rb,Complex:Cb,ComplexAbs:zb,Concat:jb,Conv2D:Mb,Conv2DBackpropFilter:Ib,Conv2DBackpropInput:Lb,Conv3D:Bb,Conv3DBackpropFilterV2:PE,Conv3DBackpropInputV2:Ub,Cos:qb,Cosh:Fb,CropAndResize:Gb,Cumprod:Vb,Cumsum:Hb,DataStorage:xE,DenseBincount:Kb,DepthToSpace:Yb,DepthwiseConv2dNative:Pb,DepthwiseConv2dNativeBackpropFilter:Xb,DepthwiseConv2dNativeBackpropInput:Zb,Diag:Wb,Dilation2D:Qb,Dilation2DBackpropFilter:ZE,Dilation2DBackpropInput:XE,Draw:Wh,get ENV(){return Yh},Einsum:e1,Elu:t1,EluGrad:WE,Environment:ub,Equal:a1,Erf:n1,Exp:s1,ExpandDims:r1,Expm1:i1,FFT:o1,Fill:l1,FlipLeftRight:u1,Floor:c1,FloorDiv:f1,FromPixels:ih,FusedBatchNorm:h1,FusedConv2D:lh,FusedDepthwiseConv2D:uh,GatherNd:p1,GatherV2:d1,Greater:m1,GreaterEqual:g1,IFFT:y1,Identity:Qh,Imag:b1,IsFinite:v1,IsInf:w1,IsNan:S1,KernelBackend:Q0,LRN:D1,LRNGrad:t3,LeakyRelu:N1,Less:x1,LessEqual:T1,LinSpace:E1,Log:k1,Log1p:_1,LogSoftmax:JE,LogicalAnd:A1,LogicalNot:O1,LogicalOr:$1,LogicalXor:QE,LowerBound:e3,MatrixBandPart:n3,Max:R1,MaxPool:z1,MaxPool3D:j1,MaxPool3DGrad:s3,MaxPoolGrad:a3,MaxPoolWithArgmax:M1,Maximum:C1,Mean:I1,Min:L1,Minimum:B1,MirrorPad:U1,Mod:q1,MomentumOptimizer:Qd,Multinomial:F1,Multiply:V1,Neg:H1,NonMaxSuppressionV3:K1,NonMaxSuppressionV4:Y1,NonMaxSuppressionV5:P1,NotEqual:G1,OP_SCOPE_SUFFIX:nd,OneHot:Z1,OnesLike:X1,Optimizer:Ka,OptimizerConstructors:vN,Pack:W1,PadV2:Q1,Pool:r3,Pow:J1,Prelu:e2,Prod:t2,RMSPropOptimizer:Jd,RaggedGather:n2,RaggedRange:a2,RaggedTensorToTensor:s2,Range:r2,get Rank(){return hh},Real:i2,RealDiv:Jb,Reciprocal:o2,get Reduction(){return Ot},Relu:l2,Relu6:h2,Reshape:u2,ResizeBilinear:f2,ResizeBilinearGrad:o3,ResizeNearestNeighbor:c2,ResizeNearestNeighborGrad:i3,Reverse:d2,RotateWithOffset:J2,Round:p2,Rsqrt:m2,SGDOptimizer:xu,ScatterNd:g2,SearchSorted:b2,Select:v2,Selu:w2,Sigmoid:E2,Sign:T2,Sin:N2,Sinh:x2,Slice:S2,Softmax:D2,Softplus:k2,SpaceToBatchND:O2,SparseFillEmptyRows:R2,SparseReshape:C2,SparseSegmentMean:z2,SparseSegmentSum:j2,SparseToDense:M2,SplitV:$2,Sqrt:_2,Square:l3,SquaredDifference:I2,StaticRegexReplace:L2,Step:Q2,StridedSlice:B2,StringNGrams:U2,StringSplit:q2,StringToHashBucketFast:F2,Sub:V2,Sum:A2,Tan:H2,Tanh:G2,Tensor:Je,TensorBuffer:Xl,TensorScatterUpdate:y2,Tile:Jh,TopK:K2,Transform:Y2,Transpose:Cl,Unique:P2,Unpack:X2,UnsortedSegmentSum:Z2,UpperBound:u3,Variable:Gi,ZerosLike:W2,_FusedMatMul:oh,abs:Vt,acos:Av,acosh:Ov,add:be,addN:$v,all:Dv,any:Rv,argMax:Cv,argMin:zv,asin:jv,asinh:Mv,atan:Iv,atan2:Lv,atanh:Bv,avgPool:ud,avgPool3d:Vv,backend:gv,backend_util:Q5,basicLSTMCell:Hv,batchNorm:oo,batchNorm2d:Gv,batchNorm3d:Kv,batchNorm4d:Yv,batchToSpaceND:cd,bincount:fd,bitwiseAnd:Pv,booleanMaskAsync:jS,broadcastArgs:Xv,broadcastTo:Ui,broadcast_util:aA,browser:j6,buffer:Rn,cast:He,ceil:Zv,clipByValue:Wv,clone:ta,complex:aa,concat:Nt,concat1d:Qv,concat2d:Jv,concat3d:ew,concat4d:tw,conv1d:nw,conv2d:lo,conv2dTranspose:sw,conv3d:rw,conv3dTranspose:iw,copyRegisteredKernels:p3,cos:ow,cosh:lw,cosineWindow:bu,cumprod:uw,cumsum:cw,customGrad:zn,denseBincount:fw,deprecationWarn:W3,depthToSpace:hw,depthwiseConv2d:cu,device_util:G3,diag:dw,dilation2d:pw,disableDeprecationWarnings:Z3,dispose:$t,disposeVariables:Q3,div:Pe,divNoNan:gw,dot:yw,dropout:US,einsum:ms,elu:pd,enableDebugMode:X3,enableProdMode:P3,enclosingPowerOfTwo:Gd,engine:J3,ensureShape:bw,env:ve,equal:dd,erf:vw,euclideanNorm:Nw,exp:qa,expandDims:Wn,expm1:xw,eye:gd,fft:mu,fill:Dr,findBackend:ik,findBackendFactory:ok,floor:yd,floorDiv:od,fused:FS,gather:bd,gatherND:BS,gather_util:M6,getBackend:mv,getGradient:ch,getKernel:Vi,getKernelsForBackend:Yl,grad:GA,grads:KA,greater:fo,greaterEqual:vd,ifft:Ji,imag:ho,image:Yd,inTopKAsync:qS,io:np,irfft:Bd,isFinite:Tw,isInf:Ew,isNaN:kw,keep:vn,kernel_impls:J5,leakyRelu:wd,less:Jl,lessEqual:fu,linalg:ZS,linspace:_w,localResponseNormalization:Aw,log:kr,log1p:Sd,logSigmoid:$w,logSoftmax:Dw,logSumExp:xd,logicalAnd:Zi,logicalNot:Td,logicalOr:Ed,logicalXor:Rw,losses:WS,lowerBound:Cw,matMul:Me,math:k6,max:ws,maxPool:kd,maxPool3d:zw,maxPoolWithArgmax:jw,maximum:_d,mean:Wi,memory:ek,meshgrid:Mw,min:Ql,minimum:Qi,mirrorPad:Iw,mod:Lw,moments:Bw,movingAverage:MS,mul:le,multiRNNCell:Uw,multinomial:qw,neg:Sn,nextFrame:Z6,norm:co,notEqual:Ad,oneHot:eu,ones:ja,onesLike:Fw,op:R,outerProduct:Vw,pad:Rr,pad1d:Hw,pad2d:Gw,pad3d:Kw,pad4d:Yw,pool:Pw,pow:Er,prelu:$d,print:id,prod:Xw,profile:tk,raggedGather:Zw,raggedRange:Ww,raggedTensorToTensor:Qw,rand:Jw,randomGamma:nS,randomNormal:jd,randomStandardNormal:aS,randomUniform:pu,randomUniformInt:sS,range:_r,ready:sk,real:Ar,reciprocal:rS,registerBackend:lk,registerGradient:f3,registerKernel:ev,relu:po,relu6:Md,removeBackend:rk,reshape:ee,reverse:Va,reverse1d:iS,reverse2d:oS,reverse3d:lS,reverse4d:uS,rfft:gu,round:Id,rsqrt:cS,scalar:$e,scatterND:IS,scatter_util:ZO,searchSorted:du,selu:fS,separableConv2d:hS,serialization:s6,setBackend:ak,setPlatform:uk,setdiff1dAsync:dS,sigmoid:vs,sign:pS,signal:XS,sin:mS,sinh:gS,slice:Be,slice1d:yS,slice2d:bS,slice3d:vS,slice4d:wS,slice_util:bN,softmax:Ld,softplus:Nd,spaceToBatchND:Od,sparse:QS,sparseToDense:LS,spectral:PS,split:Or,sqrt:Cn,square:dn,squaredDifference:Ud,squeeze:mo,stack:jn,step:qd,stridedSlice:SS,string:JS,sub:Te,sum:Ye,sumOutType:M3,tan:NS,tanh:Wl,tensor:wn,tensor1d:tn,tensor2d:wr,tensor3d:Fd,tensor4d:xS,tensor5d:TS,tensor6d:ES,tensorScatterUpdate:_S,tensor_util:B3,test_util:uO,tidy:Re,tile:vr,time:nk,topk:AS,train:P6,transpose:eo,truncatedNormal:OS,unique:$S,unregisterGradient:d3,unregisterKernel:h3,unsortedSegmentSum:DS,unstack:Ga,upcastType:uu,upperBound:RS,util:E3,valueAndGrad:YA,valueAndGrads:PA,variable:CS,variableGrads:Ow,version_core:Y6,where:na,whereAsync:Hd,zeros:Fa,zerosLike:Ht},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const tR=ve();tR.registerFlag("KEEP_INTERMEDIATE_TENSORS",()=>!1,t=>{t&&console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */var qt;(function(t){t[t.DT_INVALID=0]="DT_INVALID",t[t.DT_FLOAT=1]="DT_FLOAT",t[t.DT_DOUBLE=2]="DT_DOUBLE",t[t.DT_INT32=3]="DT_INT32",t[t.DT_UINT8=4]="DT_UINT8",t[t.DT_INT16=5]="DT_INT16",t[t.DT_INT8=6]="DT_INT8",t[t.DT_STRING=7]="DT_STRING",t[t.DT_COMPLEX64=8]="DT_COMPLEX64",t[t.DT_INT64=9]="DT_INT64",t[t.DT_BOOL=10]="DT_BOOL",t[t.DT_QINT8=11]="DT_QINT8",t[t.DT_QUINT8=12]="DT_QUINT8",t[t.DT_QINT32=13]="DT_QINT32",t[t.DT_BFLOAT16=14]="DT_BFLOAT16",t[t.DT_QINT16=15]="DT_QINT16",t[t.DT_QUINT16=16]="DT_QUINT16",t[t.DT_UINT16=17]="DT_UINT16",t[t.DT_COMPLEX128=18]="DT_COMPLEX128",t[t.DT_HALF=19]="DT_HALF",t[t.DT_RESOURCE=20]="DT_RESOURCE",t[t.DT_VARIANT=21]="DT_VARIANT",t[t.DT_UINT32=22]="DT_UINT32",t[t.DT_UINT64=23]="DT_UINT64",t[t.DT_FLOAT_REF=101]="DT_FLOAT_REF",t[t.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",t[t.DT_INT32_REF=103]="DT_INT32_REF",t[t.DT_UINT8_REF=104]="DT_UINT8_REF",t[t.DT_INT16_REF=105]="DT_INT16_REF",t[t.DT_INT8_REF=106]="DT_INT8_REF",t[t.DT_STRING_REF=107]="DT_STRING_REF",t[t.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",t[t.DT_INT64_REF=109]="DT_INT64_REF",t[t.DT_BOOL_REF=110]="DT_BOOL_REF",t[t.DT_QINT8_REF=111]="DT_QINT8_REF",t[t.DT_QUINT8_REF=112]="DT_QUINT8_REF",t[t.DT_QINT32_REF=113]="DT_QINT32_REF",t[t.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF",t[t.DT_QINT16_REF=115]="DT_QINT16_REF",t[t.DT_QUINT16_REF=116]="DT_QUINT16_REF",t[t.DT_UINT16_REF=117]="DT_UINT16_REF",t[t.DT_COMPLEX128_REF=118]="DT_COMPLEX128_REF",t[t.DT_HALF_REF=119]="DT_HALF_REF",t[t.DT_RESOURCE_REF=120]="DT_RESOURCE_REF",t[t.DT_VARIANT_REF=121]="DT_VARIANT_REF",t[t.DT_UINT32_REF=122]="DT_UINT32_REF",t[t.DT_UINT64_REF=123]="DT_UINT64_REF"})(qt||(qt={}));var j0;(function(t){(function(e){e[e.LEGACY=0]="LEGACY",e[e.V1=1]="V1",e[e.V2=2]="V2"})(t.CheckpointFormatVersion||(t.CheckpointFormatVersion={}))})(j0||(j0={}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const sp={};function sz(t,e){const a={tfOpName:t,category:"custom",inputs:[],attrs:[],customExecutor:e};sp[t]=a}function wN(t){return sp[t]}function rz(t){delete sp[t]}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function b(t,e,a,r,i){const l=e.inputParams[t];if(l&&l.inputIndexStart!==void 0){const f=l.inputIndexStart,h=l.inputIndexEnd===0?void 0:l.inputIndexEnd===void 0?f+1:l.inputIndexEnd,p=f<0?e.inputNames.length+f:f;if(l.type==="tensor")return yt(e.inputNames[p],a,r,i);if(l.type==="tensors"){const v=e.inputs.slice(f,h);return e.inputNames.slice(f,h).filter((k,$)=>{var A;return((A=v[$])===null||A===void 0?void 0:A.op)!=="NoOp"}).map(k=>yt(k,a,r,i))}const g=yt(e.inputNames[p],a,r,i),y=g.dataSync();return l.type==="number"?y[0]:bs(g.shape,y)}const c=e.attrParams[t];return c&&c.value}function yt(t,e,a,r){const[i,l]=Ft(t,a);if(r!=null){const f=r.getHashTableHandleByName(i);if(f!=null)return f}const c=a.currentContextIds.find(f=>!!e[nu(i,f)]);return c!==void 0?e[nu(i,c)][l]:void 0}function M0(t,e,a){return e[nu(t,a.currentContextId)]}function Qn(t,e){const[a,r,i]=Ft(t,e);return[nu(a,e&&e.currentContextId),r,i]}function nu(t,e){return e?`${t}-${e}`:t}function Ft(t,e){if(t==="")return["",0,void 0];const a=e!=null&&e.parseNodeNameCache!=null;if(a){const l=e.parseNodeNameCache.get(t);if(l!=null)return l}const r=t.split(":");let i;if(r.length===1)i=[t,0,void 0];else{const l=r[0],c=r.length===3?r[1]:void 0,f=Number(r[r.length-1]);i=[l,f,c]}return a&&e.parseNodeNameCache.set(t,i),i}function Vl(t,e,a){let r=b("pad",t,e,a);if(r==="explicit"){r=b("explicitPaddings",t,e,a);const i=[[0,0],[0,0],[0,0],[0,0]];for(let l=0;l<4;l++)i[l][0]=r[l*2],i[l][1]=r[l*2+1];return i}return r}function Jn(t){return t.kept?t:ta(t)}/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const nR=[{tfOpName:"Add",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddV2",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddN",category:"arithmetic",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"BiasAdd",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"Sub",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"RealDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Div",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"DivNoNan",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mul",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Maximum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Minimum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Pow",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SquaredDifference",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorMod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],aR=Object.freeze(Object.defineProperty({__proto__:null,json:nR},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const sR=[{tfOpName:"Abs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan2",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ceil",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ClipByValue",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"clipValueMin",type:"number"},{start:2,name:"clipValueMax",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Complex",category:"basic_math",inputs:[{start:0,name:"real",type:"tensor"},{start:1,name:"imag",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ComplexAbs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Elu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Exp",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Floor",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Imag",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Neg",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Real",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Prelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"alpha",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu6",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Selu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sigmoid",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Rsqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Square",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sign",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Round",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Expm1",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log1p",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Reciprocal",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Softplus",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Erf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LeakyRelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"alpha",name:"alpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsNan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsFinite",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsInf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],rR=Object.freeze(Object.defineProperty({__proto__:null,json:sR},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const iR=[{tfOpName:"EmptyTensorList",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"maxNumElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"LoopCond",category:"control",inputs:[{start:0,name:"pred",type:"tensor"}]},{tfOpName:"Switch",category:"control",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"pred",type:"tensor"}]},{tfOpName:"Merge",category:"control",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"Enter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"frame_name",name:"frameName",type:"string"},{tfName:"is_constant",name:"isConstant",type:"bool"}]},{tfOpName:"Exit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NextIteration",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayV3",category:"control",inputs:[{start:0,name:"size",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"dynamic_size",name:"dynamicSize",type:"bool"},{tfName:"clear_after_read",name:"clearAfterRead",type:"bool"},{tfName:"identical_element_shapes",name:"identicalElementShapes",type:"bool"},{tfName:"tensor_array_name",name:"name",type:"string"}]},{tfOpName:"TensorArrayWriteV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayReadV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayGatherV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"}]},{tfOpName:"TensorArrayScatterV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArrayConcatV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape_except0",name:"elementShapeExcept0",type:"shape",notSupported:!0}]},{tfOpName:"TensorArraySplitV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"tensor",type:"tensor"},{start:2,name:"lengths",type:"number[]"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArraySizeV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}]},{tfOpName:"TensorArrayCloseV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"}]},{tfOpName:"StatelessIf",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"If",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"StatelessWhile",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"While",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"TensorListScatter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListScatterV2",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"},{start:3,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGather",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListSetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListReserve",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListFromTensor",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListStack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"},{tfName:"num_elements",name:"numElements",type:"dtype"}]},{tfOpName:"TensorListSplit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"},{start:2,name:"lengths",type:"number[]"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcat",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcatV2",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPopBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPushBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListLength",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}]},{tfOpName:"TensorListResize",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"size",type:"number"}]}],oR=Object.freeze(Object.defineProperty({__proto__:null,json:iR},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const lR=[{tfOpName:"AvgPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[],notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPoolWithArgmax",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"include_batch_in_index",name:"includeBatchInIndex",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AvgPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Conv1D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"stride",name:"stride",type:"number"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NWC"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"dilation",name:"dilation",type:"number",defaultValue:1}]},{tfOpName:"Conv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"useCudnnOnGpu",name:"useCudnnOnGpu",type:"bool"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"_FusedConv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"use_cudnn_on_gpu",name:"useCudnnOnGpu",type:"bool",defaultValue:!0},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2}]},{tfOpName:"Conv2DBackpropInput",category:"convolution",inputs:[{start:2,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:0,name:"outputShape",type:"number[]"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]",notSupported:!0}]},{tfOpName:"DepthwiseConv2d",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"DepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"FusedDepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]}]},{tfOpName:"Conv3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"Dilation2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"rates",name:"dilations",type:"number[]"},{tfName:"padding",name:"pad",type:"string"}]}],uR=Object.freeze(Object.defineProperty({__proto__:null,json:lR},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cR=[{tfOpName:"Fill",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"},{start:1,name:"value",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"LinSpace",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"num",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"OneHot",category:"creation",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"depth",type:"number"},{start:2,name:"onValue",type:"number",defaultValue:1},{start:3,name:"offValue",type:"number",defaultValue:0}],attrs:[{tfName:"axis",name:"axis",type:"number",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Ones",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"OnesLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"RandomStandardNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniform",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number",defaultValue:0},{tfName:"maxval",name:"maxval",type:"number",defaultValue:1},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniformInt",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number"},{tfName:"maxval",name:"maxval",type:"number"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Range",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"step",type:"number",defaultValue:0}],attrs:[{tfName:"Tidx",name:"dtype",type:"dtype"}]},{tfOpName:"TruncatedNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"means",name:"mean",type:"number",defaultValue:0},{tfName:"stddev",name:"stdDev",type:"number",defaultValue:1},{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Zeros",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"ZerosLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Multinomial",category:"creation",inputs:[{start:0,name:"logits",type:"tensor"},{start:1,name:"numSamples",type:"number"}],attrs:[{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number"},{tfName:"T",name:"dtype",type:"dtype"},{tfName:"output_dtype",name:"output_dtype",type:"dtype"}]}],fR=Object.freeze(Object.defineProperty({__proto__:null,json:cR},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const hR=[{tfOpName:"NonMaxSuppressionV2",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV3",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV4",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"T_threshold",name:"threshold",type:"dtype",notSupported:!0},{tfName:"pad_to_max_output_size",name:"padToMaxOutputSize",type:"bool"}]},{tfOpName:"NonMaxSuppressionV5",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"},{start:5,name:"softNmsSigma",type:"number"}]},{tfOpName:"Where",category:"dynamic",inputs:[{start:0,name:"condition",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ListDiff",category:"dynamic",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],dR=Object.freeze(Object.defineProperty({__proto__:null,json:hR},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const pR=[{tfOpName:"LowerBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"TopKV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"k",type:"number"}],attrs:[{tfName:"sorted",name:"sorted",type:"bool"}]},{tfOpName:"UpperBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"Unique",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"UniqueV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]}],mR=Object.freeze(Object.defineProperty({__proto__:null,json:pR},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const gR=[{tfOpName:"PlaceholderWithDefault",category:"graph",inputs:[{start:0,name:"default",type:"tensor"}],attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Placeholder",category:"graph",attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Const",category:"graph"},{tfOpName:"Identity",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IdentityN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Snapshot",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Rank",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Size",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Shape",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"ShapeN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Print",category:"graph",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"data",type:"tensors"}],attrs:[{tfName:"message",name:"message",type:"string"},{tfName:"first_n",name:"firstN",type:"number",notSupported:!0},{tfName:"summarize",name:"summarize",type:"number",defaultValue:3}]},{tfOpName:"NoOp",category:"graph",inputs:[]},{tfOpName:"StopGradient",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"FakeQuantWithMinMaxVars",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"min",name:"min",type:"number"},{tfName:"max",name:"max",type:"number"}]}],yR=Object.freeze(Object.defineProperty({__proto__:null,json:gR},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const bR=[{tfOpName:"HashTable",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"HashTableV2",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"LookupTableImport",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableImportV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFind",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFindV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableSize",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"LookupTableSizeV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"InitializeTable",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}]},{tfOpName:"InitializeTableV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}]}],vR=Object.freeze(Object.defineProperty({__proto__:null,json:bR},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const wR=[{tfOpName:"ResizeBilinear",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ResizeNearestNeighbor",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"CropAndResize",category:"image",inputs:[{start:0,name:"image",type:"tensor"},{start:1,name:"boxes",type:"tensor"},{start:2,name:"boxInd",type:"tensor"},{start:3,name:"cropSize",type:"number[]"}],attrs:[{tfName:"method",name:"method",type:"string"},{tfName:"extrapolation_value",name:"extrapolationValue",type:"number"}]},{tfOpName:"ImageProjectiveTransformV3",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"transforms",type:"tensor"},{start:2,name:"outputShape",type:"number[]"},{start:3,name:"fillValue",type:"number"}],attrs:[{tfName:"interpolation",name:"interpolation",type:"string"},{tfName:"fill_mode",name:"fillMode",type:"string"}]}],SR=Object.freeze(Object.defineProperty({__proto__:null,json:wR},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const NR=[{tfOpName:"Equal",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NotEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Greater",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"GreaterEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Less",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LessEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalAnd",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalNot",category:"logical",inputs:[{start:0,name:"a",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalOr",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Select",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SelectV2",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BitwiseAnd",category:"logical",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}]}],xR=Object.freeze(Object.defineProperty({__proto__:null,json:NR},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const TR=[{tfOpName:"_FusedMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMulV2",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Transpose",category:"matrices",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"perm",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Einsum",category:"matrices",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"equation",name:"equation",type:"string"},{tfName:"N",name:"n",type:"number",defaultValue:2},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"MatrixBandPart",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"numLower",type:"tensor"},{start:1,name:"numUpper",type:"tensor"}]}],ER=Object.freeze(Object.defineProperty({__proto__:null,json:TR},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const kR=[{tfOpName:"EuclideanNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",defaultValue:!1}]},{tfOpName:"FusedBatchNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV2",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV3",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"LRN",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"depth_radius",name:"radius",type:"number",defaultValue:5},{tfName:"bias",name:"bias",type:"number",defaultValue:1},{tfName:"alpha",name:"alpha",type:"number",defaultValue:1},{tfName:"beta",name:"beta",type:"number",defaultValue:.5}]},{tfOpName:"Softmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"LogSoftmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]}],_R=Object.freeze(Object.defineProperty({__proto__:null,json:kR},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const AR=[{tfOpName:"Bincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}]},{tfOpName:"DenseBincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}],attrs:[{tfName:"binary_output",name:"binaryOutput",type:"bool"}]},{tfOpName:"Max",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Mean",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Min",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Sum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"All",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Any",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"ArgMax",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"ArgMin",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"Prod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cumprod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]},{tfOpName:"Cumsum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]}],OR=Object.freeze(Object.defineProperty({__proto__:null,json:AR},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $R=[{tfOpName:"ConcatV2",category:"slice_join",inputs:[{start:0,end:-1,name:"tensors",type:"tensors"},{start:-1,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"Concat",category:"slice_join",inputs:[{start:1,end:0,name:"tensors",type:"tensors"},{start:0,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"GatherV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"axis",type:"number",defaultValue:0}],attrs:[{tfName:"batch_dims",name:"batchDims",type:"number",defaultValue:0}]},{tfOpName:"Gather",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",notSupported:!0}]},{tfOpName:"Reverse",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"dims",type:"bool[]"}]},{tfOpName:"ReverseV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}]},{tfOpName:"Slice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"size",type:"number[]"}]},{tfOpName:"StridedSlice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"end",type:"number[]"},{start:3,name:"strides",type:"number[]"}],attrs:[{tfName:"begin_mask",name:"beginMask",type:"number",defaultValue:0},{tfName:"end_mask",name:"endMask",type:"number",defaultValue:0},{tfName:"new_axis_mask",name:"newAxisMask",type:"number",defaultValue:0},{tfName:"ellipsis_mask",name:"ellipsisMask",type:"number",defaultValue:0},{tfName:"shrink_axis_mask",name:"shrinkAxisMask",type:"number",defaultValue:0}]},{tfOpName:"Pack",category:"slice_join",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0}]},{tfOpName:"Unpack",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0},{tfName:"num",name:"num",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Tile",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"reps",type:"number[]"}]},{tfOpName:"Split",category:"slice_join",inputs:[{start:0,name:"axis",type:"number",defaultValue:0},{start:1,name:"x",type:"tensor"}],attrs:[{tfName:"num_split",name:"numOrSizeSplits",type:"number",defaultValue:1}]},{tfOpName:"SplitV",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"numOrSizeSplits",type:"number[]"},{start:2,name:"axis",type:"number",defaultValue:0}]},{tfOpName:"ScatterNd",category:"slice_join",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"shape",type:"number[]"}]},{tfOpName:"GatherNd",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}]},{tfOpName:"SparseToDense",category:"slice_join",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!1,notSupported:!0}]},{tfOpName:"TensorScatterUpdate",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"values",type:"tensor"}]}],DR=Object.freeze(Object.defineProperty({__proto__:null,json:$R},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const RR=[{tfOpName:"SparseFillEmptyRows",category:"sparse",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"denseShape",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}]},{tfOpName:"SparseReshape",category:"sparse",inputs:[{start:0,name:"inputIndices",type:"tensor"},{start:1,name:"inputShape",type:"tensor"},{start:2,name:"newShape",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SparseSegmentMean",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]},{tfOpName:"SparseSegmentSum",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]}],CR=Object.freeze(Object.defineProperty({__proto__:null,json:RR},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const zR=[{tfOpName:"FFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"RFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]},{tfOpName:"IRFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]}],jR=Object.freeze(Object.defineProperty({__proto__:null,json:zR},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const MR=[{tfOpName:"StaticRegexReplace",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"pattern",name:"pattern",type:"string"},{tfName:"rewrite",name:"rewrite",type:"string"},{tfName:"replace_global",name:"replaceGlobal",type:"bool"}]},{tfOpName:"StringNGrams",category:"string",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"dataSplits",type:"tensor"}],attrs:[{tfName:"separator",name:"separator",type:"string"},{tfName:"ngram_widths",name:"nGramWidths",type:"number[]"},{tfName:"left_pad",name:"leftPad",type:"string"},{tfName:"right_pad",name:"rightPad",type:"string"},{tfName:"pad_width",name:"padWidth",type:"number"},{tfName:"preserve_short_sequences",name:"preserveShortSequences",type:"bool"}],outputs:["ngrams","ngrams_splits"]},{tfOpName:"StringSplit",category:"string",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"delimiter",type:"tensor"}],attrs:[{tfName:"skip_empty",name:"skipEmpty",type:"bool"}],outputs:["indices","values","shape"]},{tfOpName:"StringToHashBucketFast",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"num_buckets",name:"numBuckets",type:"number"}]}],IR=Object.freeze(Object.defineProperty({__proto__:null,json:MR},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const LR=[{tfOpName:"Cast",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"SrcT",name:"sdtype",type:"dtype",notSupported:!0},{tfName:"DstT",name:"dtype",type:"dtype"}]},{tfOpName:"ExpandDims",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"MirrorPad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"mode",name:"mode",type:"string"}]},{tfOpName:"Pad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"constant_value",name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"PadV2",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"},{start:2,name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"Reshape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"EnsureShape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"Squeeze",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"axis",tfDeprecatedName:"squeeze_dims",name:"axis",type:"number[]"}]},{tfOpName:"SpaceToBatchND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"paddings",type:"number[]"}]},{tfOpName:"BatchToSpaceND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"crops",type:"number[]"}]},{tfOpName:"DepthToSpace",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"block_size",name:"blockSize",type:"number"},{tfName:"data_format",name:"dataFormat",type:"string"}]},{tfOpName:"BroadcastTo",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}],attrs:[]},{tfOpName:"BroadcastArgs",category:"transformation",inputs:[{start:0,name:"s0",type:"tensor"},{start:1,name:"s1",type:"tensor"}],attrs:[]}],BR=Object.freeze(Object.defineProperty({__proto__:null,json:LR},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class I0{static get Instance(){return this._instance||(this._instance=new this)}constructor(){const e=[aR,rR,oR,uR,fR,dR,mR,yR,vR,SR,xR,ER,_R,OR,DR,CR,jR,IR,BR],a=[].concat(...e.map(r=>r.json));this.opMappers=a.reduce((r,i)=>(r[i.tfOpName]=i,r),{})}transformGraph(e,a={}){const r=e.node,i=[],l=[],c=[],f=r.reduce(($,A)=>($[A.name]=this.mapNode(A),A.op.startsWith("Placeholder")?i.push($[A.name]):A.op==="Const"?l.push($[A.name]):(A.input==null||A.input.length===0)&&c.push($[A.name]),$),{});let h=[];const p=[];let g={},y={};a!=null&&(g=this.mapSignatureEntries(a.inputs),y=this.mapSignatureEntries(a.outputs));const v=Object.keys(f);v.forEach($=>{const A=f[$];A.inputNames.forEach((M,X)=>{const[z,,I]=Qn(M),V=f[z];if(V.outputs!=null){const Z=V.outputs.indexOf(I);if(Z!==-1){const re=`${z}:${Z}`;A.inputNames[X]=re}}A.inputs.push(V),V.children.push(A)})}),Object.keys(y).length===0?v.forEach($=>{const A=f[$];A.children.length===0&&p.push(A)}):Object.keys(y).forEach($=>{const[A]=Qn($),M=f[A];M!=null&&(M.signatureKey=y[$],p.push(M))}),Object.keys(g).length>0?Object.keys(g).forEach($=>{const[A]=Qn($),M=f[A];M&&(M.signatureKey=g[$],h.push(M))}):h=i;let S={};e.library!=null&&e.library.function!=null&&(S=e.library.function.reduce(($,A)=>($[A.signature.name]=this.mapFunction(A),$),{}));const k={nodes:f,inputs:h,outputs:p,weights:l,placeholders:i,signature:a,functions:S};return c.length>0&&(k.initNodes=c),k}mapSignatureEntries(e){return Object.keys(e||{}).reduce((a,r)=>(a[e[r].name]=r,a),{})}mapNode(e){const a=wN(e.op)||this.opMappers[e.op]||{};e.attr==null&&(e.attr={});const r={name:e.name,op:e.op,category:a.category,inputNames:(e.input||[]).map(i=>i.startsWith("^")?i.slice(1):i),inputs:[],children:[],inputParams:{},attrParams:{},rawAttrs:e.attr,outputs:a.outputs};return a.inputs!=null&&(r.inputParams=a.inputs.reduce((i,l)=>(i[l.name]={type:l.type,inputIndexStart:l.start,inputIndexEnd:l.end},i),{})),a.attrs!=null&&(r.attrParams=a.attrs.reduce((i,l)=>{const c=l.type;let f;switch(l.type){case"string":f=kh(e.attr,l.tfName,l.defaultValue),f===void 0&&l.tfDeprecatedName&&(f=kh(e.attr,l.tfDeprecatedName,l.defaultValue));break;case"string[]":f=Ch(e.attr,l.tfName,l.defaultValue),f===void 0&&l.tfDeprecatedName&&(f=Ch(e.attr,l.tfDeprecatedName,l.defaultValue));break;case"number":f=Ah(e.attr,l.tfName,l.defaultValue||0),f===void 0&&l.tfDeprecatedName&&(f=Ah(e.attr,l.tfDeprecatedName,l.defaultValue));break;case"number[]":f=Rh(e.attr,l.tfName,l.defaultValue),f===void 0&&l.tfDeprecatedName&&(f=Rh(e.attr,l.tfDeprecatedName,l.defaultValue));break;case"bool":f=_h(e.attr,l.tfName,l.defaultValue),f===void 0&&l.tfDeprecatedName&&(f=_h(e.attr,l.tfDeprecatedName,l.defaultValue));break;case"bool[]":f=jh(e.attr,l.tfName,l.defaultValue),f===void 0&&l.tfDeprecatedName&&(f=jh(e.attr,l.tfDeprecatedName,l.defaultValue));break;case"shape":f=Dh(e.attr,l.tfName,l.defaultValue),f===void 0&&l.tfDeprecatedName&&(f=Dh(e.attr,l.tfDeprecatedName,l.defaultValue));break;case"shape[]":f=zh(e.attr,l.tfName,l.defaultValue),f===void 0&&l.tfDeprecatedName&&(f=zh(e.attr,l.tfDeprecatedName,l.defaultValue));break;case"dtype":f=Oh(e.attr,l.tfName,l.defaultValue),f===void 0&&l.tfDeprecatedName&&(f=Oh(e.attr,l.tfDeprecatedName,l.defaultValue));break;case"dtype[]":f=$h(e.attr,l.tfName,l.defaultValue),f===void 0&&l.tfDeprecatedName&&(f=$h(e.attr,l.tfDeprecatedName,l.defaultValue));break;case"func":f=L0(e.attr,l.tfName,l.defaultValue),f===void 0&&l.tfDeprecatedName&&(f=L0(e.attr,l.tfDeprecatedName,l.defaultValue));break;case"tensor":case"tensors":break;default:throw new Error(`Unsupported param type: ${l.type} for op: ${e.op}`)}return i[l.name]={value:f,type:c},i},{})),r}mapFunction(e){const a=e.nodeDef,r=[],i=[];let l={};a!=null&&(l=a.reduce((y,v)=>(y[v.name]=this.mapNode(v),v.op==="Const"&&i.push(y[v.name]),y),{}));const c=[],f=[];e.signature.inputArg.forEach(y=>{const[v]=Qn(y.name),S={name:v,op:"Placeholder",inputs:[],inputNames:[],category:"graph",inputParams:{},attrParams:{dtype:{value:rp(y.type),type:"dtype"}},children:[]};S.signatureKey=y.name,c.push(S),l[v]=S}),Object.keys(l).forEach(y=>{const v=l[y];v.inputNames.forEach((S,k)=>{const[$,,A]=Qn(S),M=l[$];if(M.outputs!=null){const X=M.outputs.indexOf(A);if(X!==-1){const z=`${$}:${X}`;v.inputNames[k]=z}}v.inputs.push(M),M.children.push(v)})});const p=e.ret;e.signature.outputArg.forEach(y=>{const[v,S]=Qn(p[y.name]),k=l[v];k!=null&&(k.defaultOutput=S,f.push(k))});const g=this.mapArgsToSignature(e);return{nodes:l,inputs:c,outputs:f,weights:i,placeholders:r,signature:g}}mapArgsToSignature(e){return{methodName:e.signature.name,inputs:e.signature.inputArg.reduce((a,r)=>(a[r.name]=this.mapArgToTensorInfo(r),a),{}),outputs:e.signature.outputArg.reduce((a,r)=>(a[r.name]=this.mapArgToTensorInfo(r,e.ret),a),{})}}mapArgToTensorInfo(e,a){let r=e.name;return a!=null&&(r=a[r]),{name:r,dtype:e.type}}}function UR(t){const e=ve().global;if(typeof e.atob<"u")return e.atob(t);if(typeof Buffer<"u")return new Buffer(t,"base64").toString();throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()")}function SN(t,e){const a=Array.isArray(t)?String.fromCharCode.apply(null,t):UR(t);return e?a:a.toLowerCase()}function kh(t,e,a,r=!1){const i=t[e];return i!=null?SN(i.s,r):a}function _h(t,e,a){const r=t[e];return r?r.b:a}function Ah(t,e,a){const r=t[e]||{},i=r.i!=null?r.i:r.f!=null?r.f:a;return typeof i=="number"?i:parseInt(i,10)}function rp(t){switch(typeof t=="string"&&(t=qt[t]),t){case qt.DT_FLOAT:case qt.DT_HALF:return"float32";case qt.DT_INT32:case qt.DT_INT64:case qt.DT_INT8:case qt.DT_UINT8:return"int32";case qt.DT_BOOL:return"bool";case qt.DT_DOUBLE:return"float32";case qt.DT_STRING:return"string";case qt.DT_COMPLEX64:case qt.DT_COMPLEX128:return"complex64";default:return null}}function L0(t,e,a){const r=t[e];return r&&r.func?r.func.name:a}function Oh(t,e,a){const r=t[e];return r&&r.type?rp(r.type):a}function $h(t,e,a){const r=t[e];return r&&r.list&&r.list.type?r.list.type.map(i=>rp(i)):a}function NN(t){if(!t.unknownRank)return t.dim!=null?t.dim.map(e=>typeof e.size=="number"?e.size:parseInt(e.size,10)):[]}function Dh(t,e,a){const r=t[e];return r&&r.shape?NN(r.shape):a}function Rh(t,e,a){const r=t[e];return r?((r.list.f&&r.list.f.length?r.list.f:r.list.i)||[]).map(i=>typeof i=="number"?i:parseInt(i,10)):a}function Ch(t,e,a,r=!1){const i=t[e];return i&&i.list&&i.list.s?i.list.s.map(l=>SN(l,r)):a}function zh(t,e,a){const r=t[e];return r&&r.list&&r.list.shape?r.list.shape.map(i=>NN(i)):a}function jh(t,e,a){const r=t[e];return r&&r.list&&r.list.b?r.list.b:a}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class qR{constructor(e,a,r){this.node=e,this.tensorMap=a,this.context=r,this.inputs=[],this.attrs={},this.inputs=e.inputNames.map(i=>this.getInput(i)),e.rawAttrs!=null&&(this.attrs=Object.keys(e.rawAttrs).reduce((i,l)=>(i[l]=this.getAttr(l),i),{}))}getInput(e){return yt(e,this.tensorMap,this.context)}getAttr(e,a){const r=this.node.rawAttrs[e];if(r.tensor!=null)return yt(e,this.tensorMap,this.context);if(r.i!=null||r.f!=null)return Ah(this.node.rawAttrs,e,a);if(r.s!=null)return kh(this.node.rawAttrs,e,a);if(r.b!=null)return _h(this.node.rawAttrs,e,a);if(r.shape!=null)return Dh(this.node.rawAttrs,e,a);if(r.type!=null)return Oh(this.node.rawAttrs,e,a);if(r.list!=null){if(r.list.i!=null||r.list.f!=null)return Rh(this.node.rawAttrs,e,a);if(r.list.s!=null)return Ch(this.node.rawAttrs,e,a);if(r.list.shape!=null)return zh(this.node.rawAttrs,e,a);if(r.list.b!=null)return jh(this.node.rawAttrs,e,a);if(r.list.type!=null)return $h(this.node.rawAttrs,e,a)}return a}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const bt=Object.freeze(Object.defineProperty({__proto__:null,OP_SCOPE_SUFFIX:nd,abs:Vt,acos:Av,acosh:Ov,add:be,addN:$v,all:Dv,any:Rv,argMax:Cv,argMin:zv,asin:jv,asinh:Mv,atan:Iv,atan2:Lv,atanh:Bv,avgPool:ud,avgPool3d:Vv,basicLSTMCell:Hv,batchNorm:oo,batchNorm2d:Gv,batchNorm3d:Kv,batchNorm4d:Yv,batchToSpaceND:cd,bincount:fd,bitwiseAnd:Pv,booleanMaskAsync:jS,broadcastArgs:Xv,broadcastTo:Ui,buffer:Rn,cast:He,ceil:Zv,clipByValue:Wv,clone:ta,complex:aa,concat:Nt,concat1d:Qv,concat2d:Jv,concat3d:ew,concat4d:tw,conv1d:nw,conv2d:lo,conv2dTranspose:sw,conv3d:rw,conv3dTranspose:iw,cos:ow,cosh:lw,cosineWindow:bu,cumprod:uw,cumsum:cw,denseBincount:fw,depthToSpace:hw,depthwiseConv2d:cu,diag:dw,dilation2d:pw,div:Pe,divNoNan:gw,dot:yw,dropout:US,einsum:ms,elu:pd,enclosingPowerOfTwo:Gd,ensureShape:bw,equal:dd,erf:vw,euclideanNorm:Nw,exp:qa,expandDims:Wn,expm1:xw,eye:gd,fft:mu,fill:Dr,floor:yd,floorDiv:od,fused:FS,gather:bd,gatherND:BS,greater:fo,greaterEqual:vd,ifft:Ji,imag:ho,image:Yd,inTopKAsync:qS,irfft:Bd,isFinite:Tw,isInf:Ew,isNaN:kw,leakyRelu:wd,less:Jl,lessEqual:fu,linalg:ZS,linspace:_w,localResponseNormalization:Aw,log:kr,log1p:Sd,logSigmoid:$w,logSoftmax:Dw,logSumExp:xd,logicalAnd:Zi,logicalNot:Td,logicalOr:Ed,logicalXor:Rw,losses:WS,lowerBound:Cw,matMul:Me,max:ws,maxPool:kd,maxPool3d:zw,maxPoolWithArgmax:jw,maximum:_d,mean:Wi,meshgrid:Mw,min:Ql,minimum:Qi,mirrorPad:Iw,mod:Lw,moments:Bw,movingAverage:MS,mul:le,multiRNNCell:Uw,multinomial:qw,neg:Sn,norm:co,notEqual:Ad,oneHot:eu,ones:ja,onesLike:Fw,op:R,outerProduct:Vw,pad:Rr,pad1d:Hw,pad2d:Gw,pad3d:Kw,pad4d:Yw,pool:Pw,pow:Er,prelu:$d,print:id,prod:Xw,raggedGather:Zw,raggedRange:Ww,raggedTensorToTensor:Qw,rand:Jw,randomGamma:nS,randomNormal:jd,randomStandardNormal:aS,randomUniform:pu,randomUniformInt:sS,range:_r,real:Ar,reciprocal:rS,relu:po,relu6:Md,reshape:ee,reverse:Va,reverse1d:iS,reverse2d:oS,reverse3d:lS,reverse4d:uS,rfft:gu,round:Id,rsqrt:cS,scalar:$e,scatterND:IS,searchSorted:du,selu:fS,separableConv2d:hS,setdiff1dAsync:dS,sigmoid:vs,sign:pS,signal:XS,sin:mS,sinh:gS,slice:Be,slice1d:yS,slice2d:bS,slice3d:vS,slice4d:wS,softmax:Ld,softplus:Nd,spaceToBatchND:Od,sparse:QS,sparseToDense:LS,spectral:PS,split:Or,sqrt:Cn,square:dn,squaredDifference:Ud,squeeze:mo,stack:jn,step:qd,stridedSlice:SS,string:JS,sub:Te,sum:Ye,tan:NS,tanh:Wl,tensor:wn,tensor1d:tn,tensor2d:wr,tensor3d:Fd,tensor4d:xS,tensor5d:TS,tensor6d:ES,tensorScatterUpdate:_S,tile:vr,topk:AS,transpose:eo,truncatedNormal:OS,unique:$S,unsortedSegmentSum:DS,unstack:Ga,upperBound:RS,variable:CS,where:na,whereAsync:Hd,zeros:Fa,zerosLike:Ht},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const FR=(t,e,a,r=bt)=>{switch(t.op){case"BiasAdd":case"AddV2":case"Add":return[r.add(b("a",t,e,a),b("b",t,e,a))];case"AddN":return[r.addN(b("tensors",t,e,a))];case"FloorMod":case"Mod":return[r.mod(b("a",t,e,a),b("b",t,e,a))];case"Mul":return[r.mul(b("a",t,e,a),b("b",t,e,a))];case"RealDiv":case"Div":return[r.div(b("a",t,e,a),b("b",t,e,a))];case"DivNoNan":return[r.divNoNan(b("a",t,e,a),b("b",t,e,a))];case"FloorDiv":return[r.floorDiv(b("a",t,e,a),b("b",t,e,a))];case"Sub":return[r.sub(b("a",t,e,a),b("b",t,e,a))];case"Minimum":return[r.minimum(b("a",t,e,a),b("b",t,e,a))];case"Maximum":return[r.maximum(b("a",t,e,a),b("b",t,e,a))];case"Pow":return[r.pow(b("a",t,e,a),b("b",t,e,a))];case"SquaredDifference":return[r.squaredDifference(b("a",t,e,a),b("b",t,e,a))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const VR=(t,e,a,r=bt)=>{switch(t.op){case"Abs":case"ComplexAbs":return[r.abs(b("x",t,e,a))];case"Acos":return[r.acos(b("x",t,e,a))];case"Acosh":return[r.acosh(b("x",t,e,a))];case"Asin":return[r.asin(b("x",t,e,a))];case"Asinh":return[r.asinh(b("x",t,e,a))];case"Atan":return[r.atan(b("x",t,e,a))];case"Atan2":return[r.atan2(b("x",t,e,a),b("y",t,e,a))];case"Atanh":return[r.atanh(b("x",t,e,a))];case"Ceil":return[r.ceil(b("x",t,e,a))];case"Complex":return[r.complex(b("real",t,e,a),b("imag",t,e,a))];case"Cos":return[r.cos(b("x",t,e,a))];case"Cosh":return[r.cosh(b("x",t,e,a))];case"Elu":return[r.elu(b("x",t,e,a))];case"Erf":return[r.erf(b("x",t,e,a))];case"Exp":return[r.exp(b("x",t,e,a))];case"Expm1":return[r.expm1(b("x",t,e,a))];case"Floor":return[r.floor(b("x",t,e,a))];case"Log":return[r.log(b("x",t,e,a))];case"Log1p":return[r.log1p(b("x",t,e,a))];case"Imag":return[r.imag(b("x",t,e,a))];case"Neg":return[r.neg(b("x",t,e,a))];case"Reciprocal":return[r.reciprocal(b("x",t,e,a))];case"Real":return[r.real(b("x",t,e,a))];case"Relu":return[r.relu(b("x",t,e,a))];case"Round":return[r.round(b("x",t,e,a))];case"Selu":return[r.selu(b("x",t,e,a))];case"Sigmoid":return[r.sigmoid(b("x",t,e,a))];case"Sin":return[r.sin(b("x",t,e,a))];case"Sign":return[r.sign(b("x",t,e,a))];case"Sinh":return[r.sinh(b("x",t,e,a))];case"Softplus":return[r.softplus(b("x",t,e,a))];case"Sqrt":return[r.sqrt(b("x",t,e,a))];case"Square":return[r.square(b("x",t,e,a))];case"Tanh":return[r.tanh(b("x",t,e,a))];case"Tan":return[r.tan(b("x",t,e,a))];case"ClipByValue":return[r.clipByValue(b("x",t,e,a),b("clipValueMin",t,e,a),b("clipValueMax",t,e,a))];case"Relu6":return[r.relu6(b("x",t,e,a))];case"Rsqrt":return[r.rsqrt(yt(t.inputNames[0],e,a))];case"LeakyRelu":return[r.leakyRelu(b("x",t,e,a),b("alpha",t,e,a))];case"Prelu":return[r.prelu(b("x",t,e,a),b("alpha",t,e,a))];case"IsNan":return[r.isNaN(yt(t.inputNames[0],e,a))];case"IsInf":return[r.isInf(yt(t.inputNames[0],e,a))];case"IsFinite":return[r.isFinite(yt(t.inputNames[0],e,a))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hn(t,e,a=""){if(!(typeof t=="number"||typeof e=="number")){E(t.length===e.length,()=>a+` Shapes ${t} and ${e} must match`);for(let r=0;r<t.length;r++){const i=t[r],l=e[r];E(i<0||l<0||i===l,()=>a+` Shapes ${t} and ${e} must match`)}}}function B0(t){return!(typeof t=="number"||t.some(e=>e<0))}function Mi(t,e,a){let r=Mh(t,a);const i=!B0(r);if(i&&e.length===0)throw new Error(`Tried to calculate elements of an empty list with non-fully-defined elementShape: ${r}`);if(i&&e.forEach(l=>{r=Mh(l.shape,r)}),!B0(r))throw new Error(`Non-fully-defined elementShape: ${r}`);return r}function Mh(t,e){if(typeof t=="number")return e;if(typeof e=="number")return t;if(t.length!==e.length)throw new Error(`Incompatible ranks during merge: ${t} vs. ${e}`);const a=[];for(let r=0;r<t.length;++r){const i=t[r],l=e[r];if(i>=0&&l>=0&&i!==l)throw new Error(`Incompatible shape during merge: ${t} vs. ${e}`);a[r]=i>=0?i:l}return a}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class HR{constructor(e,a,r,i,l,c,f){this.name=e,this.dtype=a,this.maxSize=r,this.elementShape=i,this.identicalElementShapes=l,this.dynamicSize=c,this.clearAfterRead=f,this.tensors=[],this.closed_=!1,this.idTensor=$e(0),vn(this.idTensor)}get id(){return this.idTensor.id}get closed(){return this.closed_}clearAndClose(e){this.tensors.forEach(a=>{(e==null||!e.has(a.tensor.id))&&a.tensor.dispose()}),this.tensors=[],this.closed_=!0,this.idTensor.dispose()}size(){return this.tensors.length}read(e){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(e<0||e>=this.size())throw new Error(`Tried to read from index ${e}, but array size is: ${this.size()}`);const a=this.tensors[e];if(a.cleared)throw new Error(`TensorArray ${this.name}: Could not read index ${e} twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).`);return this.clearAfterRead&&(a.cleared=!0),a.read=!0,a.tensor}readMany(e){return e.map(a=>this.read(a))}write(e,a){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(e<0||!this.dynamicSize&&e>=this.maxSize)throw new Error(`Tried to write to index ${e}, but array is not resizeable and size is: ${this.maxSize}`);const r=this.tensors[e]||{};if(a.dtype!==this.dtype)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e},
          because the value dtype is ${a.dtype}, but TensorArray dtype is ${this.dtype}.`);if(this.size()===0&&(this.elementShape==null||this.elementShape.length===0)&&(this.elementShape=a.shape),hn(this.elementShape,a.shape,`TensorArray ${this.name}: Could not write to TensorArray index ${e}.`),r.read)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been read.`);if(r.written)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been written.`);r.tensor=a,vn(a),r.written=!0,this.tensors[e]=r}writeMany(e,a){if(e.length!==a.length)throw new Error(`TensorArray ${this.name}: could not write multiple tensors,because the index size: ${e.length} is not the same as tensors size: ${a.length}.`);e.forEach((r,i)=>this.write(r,a[i]))}gather(e,a){if(a&&a!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${a}`);if(e)e=e.slice(0,this.size());else{e=[];for(let i=0;i<this.size();i++)e.push(i)}if(e.length===0)return wn([],[0].concat(this.elementShape));const r=this.readMany(e);return hn(this.elementShape,r[0].shape,"TensorArray shape mismatch: "),jn(r,0)}concat(e){if(e&&e!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${e}`);if(this.size()===0)return wn([],[0].concat(this.elementShape));const a=[];for(let i=0;i<this.size();i++)a.push(i);const r=this.readMany(a);return hn(this.elementShape,r[0].shape,`TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${r[0].shape})`),Nt(r,0)}scatter(e,a){if(a.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${a.dtype}`);if(e.length!==a.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${e.length} vs. ${a.shape[0]}`);const r=Math.max(...e);if(!this.dynamicSize&&r>=this.maxSize)throw new Error(`Max index must be < array size (${r}  vs. ${this.maxSize})`);this.writeMany(e,Ga(a,0))}split(e,a){if(a.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${a.dtype}`);let r=0;const i=e.map(h=>(r+=h,r));if(r!==a.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${r}, and tensor's shape is: ${a.shape}`);if(!this.dynamicSize&&e.length!==this.maxSize)throw new Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${e.length}), and the TensorArray is not marked as dynamically resizeable`);const l=r===0?0:a.size/r,c=[];Re(()=>{a=ee(a,[1,r,l]);for(let h=0;h<e.length;++h){const g=[0,h===0?0:i[h-1],0],y=[1,e[h],l];c[h]=ee(Be(a,g,y),this.elementShape)}return c});const f=[];for(let h=0;h<e.length;h++)f[h]=h;this.writeMany(f,c)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ks{get id(){return this.idTensor.id}constructor(e,a,r,i=-1){this.tensors=e,this.elementShape=a,this.elementDtype=r,e!=null&&e.forEach(l=>{if(r!==l.dtype)throw new Error(`Invalid data types; op elements ${r}, but list elements ${l.dtype}`);hn(a,l.shape,"TensorList shape mismatch: "),vn(l)}),this.idTensor=$e(0),this.maxNumElements=i,vn(this.idTensor)}copy(){return new ks([...this.tensors],this.elementShape,this.elementDtype)}clearAndClose(e){this.tensors.forEach(a=>{(e==null||!e.has(a.id))&&a.dispose()}),this.tensors.length=0,this.idTensor.dispose()}size(){return this.tensors.length}stack(e,a,r=-1){if(a!==this.elementDtype)throw new Error(`Invalid data types; op elements ${a}, but list elements ${this.elementDtype}`);if(r!==-1&&this.tensors.length!==r)throw new Error(`Operation expected a list with ${r} elements but got a list with ${this.tensors.length} elements.`);hn(e,this.elementShape,"TensorList shape mismatch: ");const i=Mi(this.elementShape,this.tensors,e);return Re(()=>{const l=this.tensors.map(c=>ee(c,i));return jn(l,0)})}popBack(e,a){if(a!==this.elementDtype)throw new Error(`Invalid data types; op elements ${a}, but list elements ${this.elementDtype}`);if(this.size()===0)throw new Error("Trying to pop from an empty list.");const r=Mi(this.elementShape,this.tensors,e),i=this.tensors.pop();return i.kept=!1,hn(i.shape,e,"TensorList shape mismatch: "),ee(i,r)}pushBack(e){if(e.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e.dtype}, but list elements ${this.elementDtype}`);if(hn(e.shape,this.elementShape,"TensorList shape mismatch: "),this.maxNumElements===this.size())throw new Error("Trying to push element into a full list.");vn(e),this.tensors.push(e)}resize(e){if(e<0)throw new Error(`TensorListResize expects size to be non-negative. Got: ${e}`);if(this.maxNumElements!==-1&&e>this.maxNumElements)throw new Error(`TensorListResize input size ${e} is greater maxNumElement ${this.maxNumElements}.`);const a=new ks([],this.elementShape,this.elementDtype,this.maxNumElements);a.tensors.length=e;for(let r=0;r<Math.min(this.tensors.length,e);++r)a.tensors[r]=this.tensors[r];return a}getItem(e,a,r){if(r!==this.elementDtype)throw new Error(`Invalid data types; op elements ${r}, but list elements ${this.elementDtype}`);if(e<0||e>this.tensors.length)throw new Error(`Trying to access element ${e} in a list with ${this.tensors.length} elements.`);if(this.tensors[e]==null)throw new Error(`element at index ${e} is null.`);hn(this.tensors[e].shape,a,"TensorList shape mismatch: ");const i=Mi(this.elementShape,this.tensors,a);return ee(this.tensors[e],i)}setItem(e,a){if(a.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${a.dtype}, but list elements ${this.elementDtype}`);if(e<0||this.maxNumElements!==-1&&e>=this.maxNumElements)throw new Error(`Trying to set element ${e} in a list with max ${this.maxNumElements} elements.`);hn(this.elementShape,a.shape,"TensorList shape mismatch: "),vn(a),this.tensors[e]!=null&&(this.tensors[e].kept=!1),this.tensors[e]=a}gather(e,a,r){if(a!==this.elementDtype)throw new Error(`Invalid data types; op elements ${a}, but list elements ${this.elementDtype}`);hn(this.elementShape,r,"TensorList shape mismatch: "),e=e.slice(0,this.size());const i=Mi(this.elementShape,this.tensors,r);return e.length===0?wn([],[0].concat(i)):Re(()=>{const l=e.map(c=>ee(this.tensors[c],i));return jn(l,0)})}concat(e,a){if(e&&e!==this.elementDtype)throw new Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${e}`);hn(this.elementShape,a,"TensorList shape mismatch: ");const r=Mi(this.elementShape,this.tensors,a);return this.size()===0?wn([],[0].concat(r)):Re(()=>{const i=this.tensors.map(l=>ee(l,r));return Nt(i,0)})}}function GR(t,e,a){const r=t.dtype;if(t.shape.length<1)throw new Error(`Tensor must be at least a vector, but saw shape: ${t.shape}`);if(t.dtype!==a)throw new Error(`Invalid data types; op elements ${t.dtype}, but list elements ${a}`);const i=t.shape.slice(1);hn(i,e,"TensorList shape mismatch: ");const l=Ga(t);return new ks(l,e,r)}function KR(t,e,a,r){return new ks([],t,e,r)}function YR(t,e,a,r){if(e.length!==t.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${e.length} vs. ${t.shape[0]}`);const i=Math.max(...e);if(r!=null&&r!==-1&&i>=r)throw new Error(`Max index must be < array size (${i}  vs. ${r})`);const l=new ks([],a,t.dtype,r),c=Ga(t,0);return e.forEach((f,h)=>{l.setItem(f,c[h])}),l}function PR(t,e,a){let r=0;const i=e.map(g=>(r+=g,r));if(r!==t.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${r}, and tensor's shape is: ${t.shape}`);const l=t.shape.slice(1),c=Mh(l,a),f=r===0?0:t.size/r,h=Re(()=>{const g=[];t=ee(t,[1,r,f]);for(let y=0;y<e.length;++y){const S=[0,y===0?0:i[y-1],0],k=[1,e[y],f];g[y]=ee(Be(t,S,k),c)}return t.dispose(),g}),p=new ks([],a,t.dtype,e.length);for(let g=0;g<h.length;g++)p.setItem(g,h[g]);return p}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const XR=async(t,e,a)=>{switch(t.op){case"If":case"StatelessIf":{const r=b("thenBranch",t,e,a),i=b("elseBranch",t,e,a),l=b("cond",t,e,a),c=b("args",t,e,a);return(await l.data())[0]?a.functionMap[r].executeFunctionAsync(c,a.tensorArrayMap,a.tensorListMap):a.functionMap[i].executeFunctionAsync(c,a.tensorArrayMap,a.tensorListMap)}case"While":case"StatelessWhile":{const r=b("body",t,e,a),i=b("cond",t,e,a),l=b("args",t,e,a),c=await a.functionMap[i].executeFunctionAsync(l,a.tensorArrayMap,a.tensorListMap),f=l.map(g=>g.id);let h=await c[0].data();c.forEach(g=>{!g.kept&&f.indexOf(g.id)===-1&&g.dispose()});let p=l;for(;h[0];){const g=p;p=await a.functionMap[r].executeFunctionAsync(p,a.tensorArrayMap,a.tensorListMap);const y=p.map(S=>S.id);g.forEach(S=>{!S.kept&&f.indexOf(S.id)===-1&&y.indexOf(S.id)===-1&&S.dispose()});const v=await a.functionMap[i].executeFunctionAsync(p,a.tensorArrayMap,a.tensorListMap);h=await v[0].data(),v.forEach(S=>{!S.kept&&f.indexOf(S.id)===-1&&y.indexOf(S.id)===-1&&S.dispose()})}return p}case"LoopCond":{const r=b("pred",t,e,a);return[Jn(r)]}case"Switch":{const r=b("pred",t,e,a);let i=b("data",t,e,a);return i.kept||(i=Jn(i)),(await r.data())[0]?[void 0,i]:[i,void 0]}case"Merge":{const r=t.inputNames.find(i=>yt(i,e,a)!==void 0);if(r){const i=yt(r,e,a);return[Jn(i)]}return}case"Enter":{const r=b("frameName",t,e,a),i=b("tensor",t,e,a);return a.enterFrame(r),[Jn(i)]}case"Exit":{const r=b("tensor",t,e,a);return a.exitFrame(),[Jn(r)]}case"NextIteration":{const r=b("tensor",t,e,a);return a.nextIteration(),[Jn(r)]}case"TensorArrayV3":{const r=b("size",t,e,a),i=b("dtype",t,e,a),l=b("elementShape",t,e,a),c=b("dynamicSize",t,e,a),f=b("clearAfterRead",t,e,a),h=b("identicalElementShapes",t,e,a),p=b("name",t,e,a),g=new HR(p,i,r,l,h,c,f);return a.addTensorArray(g),[g.idTensor,$e(1)]}case"TensorArrayWriteV3":{const r=b("tensorArrayId",t,e,a),i=b("index",t,e,a),l=b("tensor",t,e,a),c=a.getTensorArray(r.id);return c.write(i,l),[c.idTensor]}case"TensorArrayReadV3":{const r=b("tensorArrayId",t,e,a),i=b("index",t,e,a);return[a.getTensorArray(r.id).read(i)]}case"TensorArrayGatherV3":{const r=b("tensorArrayId",t,e,a),i=b("indices",t,e,a),l=b("dtype",t,e,a);return[a.getTensorArray(r.id).gather(i,l)]}case"TensorArrayScatterV3":{const r=b("tensorArrayId",t,e,a),i=b("indices",t,e,a),l=b("tensor",t,e,a),c=a.getTensorArray(r.id);return c.scatter(i,l),[c.idTensor]}case"TensorArrayConcatV3":{const r=b("tensorArrayId",t,e,a),i=a.getTensorArray(r.id),l=b("dtype",t,e,a);return[i.concat(l)]}case"TensorArraySplitV3":{const r=b("tensorArrayId",t,e,a),i=b("tensor",t,e,a),l=b("lengths",t,e,a),c=a.getTensorArray(r.id);return c.split(l,i),[c.idTensor]}case"TensorArraySizeV3":{const r=b("tensorArrayId",t,e,a),i=a.getTensorArray(r.id);return[$e(i.size(),"int32")]}case"TensorArrayCloseV3":{const r=b("tensorArrayId",t,e,a),i=a.getTensorArray(r.id);return i.clearAndClose(),[i.idTensor]}case"TensorListSetItem":{const r=b("tensorListId",t,e,a),i=b("index",t,e,a),l=b("tensor",t,e,a),c=a.getTensorList(r.id);return c.setItem(i,l),[c.idTensor]}case"TensorListGetItem":{const r=b("tensorListId",t,e,a),i=b("index",t,e,a),l=b("elementShape",t,e,a),c=b("elementDType",t,e,a);return[a.getTensorList(r.id).getItem(i,l,c)]}case"TensorListScatterV2":case"TensorListScatter":{const r=b("indices",t,e,a),i=b("tensor",t,e,a),l=b("elementShape",t,e,a),c=b("numElements",t,e,a),f=YR(i,r,l,c);return a.addTensorList(f),[f.idTensor]}case"TensorListReserve":case"EmptyTensorList":{const r=b("elementShape",t,e,a),i=b("elementDType",t,e,a);let l;t.op==="TensorListReserve"?l="numElements":l="maxNumElements";const c=b(l,t,e,a),f=t.op==="TensorListReserve"?-1:c,h=KR(r,i,c,f);return a.addTensorList(h),[h.idTensor]}case"TensorListGather":{const r=b("tensorListId",t,e,a),i=b("indices",t,e,a),l=b("elementShape",t,e,a),c=b("elementDType",t,e,a);return[a.getTensorList(r.id).gather(i,c,l)]}case"TensorListStack":{const r=b("tensorListId",t,e,a),i=b("elementShape",t,e,a),l=b("elementDType",t,e,a),c=b("numElements",t,e,a);return[a.getTensorList(r.id).stack(i,l,c)]}case"TensorListFromTensor":{const r=b("tensor",t,e,a),i=b("elementShape",t,e,a),l=b("elementDType",t,e,a),c=GR(r,i,l);return a.addTensorList(c),[c.idTensor]}case"TensorListConcat":case"TensorListConcatV2":{const r=b("tensorListId",t,e,a),i=a.getTensorList(r.id),l=b("dtype",t,e,a),c=b("elementShape",t,e,a);return[i.concat(l,c)]}case"TensorListPushBack":{const r=b("tensorListId",t,e,a),i=b("tensor",t,e,a),l=a.getTensorList(r.id);return l.pushBack(i),[l.idTensor]}case"TensorListPopBack":{const r=b("tensorListId",t,e,a),i=b("elementShape",t,e,a),l=b("elementDType",t,e,a);return[a.getTensorList(r.id).popBack(i,l)]}case"TensorListSplit":{const r=b("tensor",t,e,a),i=b("elementShape",t,e,a),l=b("lengths",t,e,a),c=PR(r,l,i);return a.addTensorList(c),[c.idTensor]}case"TensorListLength":{const r=b("tensorListId",t,e,a),i=a.getTensorList(r.id);return[$e(i.size(),"int32")]}case"TensorListResize":{const r=b("tensorListId",t,e,a),i=b("size",t,e,a),c=a.getTensorList(r.id).resize(i);return a.addTensorList(c),[c.idTensor]}default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function U0(t,e,a){const[r,i]=b("fusedOps",t,e,a),l=r==="biasadd",c=!l,f=i==="prelu",h=r==="fusedbatchnorm",p=b("numArgs",t,e,a);if(l){if(f&&p!==2)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!f&&l&&p!==1)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.")}if(h)throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported");const g=b("strides",t,e,a),y=Vl(t,e,a),v=b("dataFormat",t,e,a).toUpperCase(),S=b("dilations",t,e,a);let[k,$]=b("args",t,e,a);c&&($=k,k=void 0);const A=b("leakyreluAlpha",t,e,a);return{stride:g,pad:y,dataFormat:v,dilations:S,biasArg:k,preluArg:$,activationFunc:i,leakyreluAlpha:A}}const ZR=(t,e,a,r=bt)=>{switch(t.op){case"Conv1D":{const i=b("stride",t,e,a),l=b("pad",t,e,a),c=b("dataFormat",t,e,a).toUpperCase(),f=b("dilation",t,e,a);return[r.conv1d(b("x",t,e,a),b("filter",t,e,a),i,l,c,f)]}case"Conv2D":{const i=b("strides",t,e,a),l=Vl(t,e,a),c=b("dataFormat",t,e,a).toUpperCase(),f=b("dilations",t,e,a);return[r.conv2d(b("x",t,e,a),b("filter",t,e,a),[i[1],i[2]],l,c,[f[1],f[2]])]}case"_FusedConv2D":{const{stride:i,pad:l,dataFormat:c,dilations:f,biasArg:h,preluArg:p,activationFunc:g,leakyreluAlpha:y}=U0(t,e,a);return[r.fused.conv2d({x:b("x",t,e,a),filter:b("filter",t,e,a),strides:[i[1],i[2]],pad:l,dataFormat:c,dilations:[f[1],f[2]],bias:h,activation:g,preluActivationWeights:p,leakyreluAlpha:y})]}case"FusedDepthwiseConv2dNative":{const{stride:i,pad:l,dataFormat:c,dilations:f,biasArg:h,preluArg:p,activationFunc:g,leakyreluAlpha:y}=U0(t,e,a);return[r.fused.depthwiseConv2d({x:b("x",t,e,a),filter:b("filter",t,e,a),strides:[i[1],i[2]],pad:l,dataFormat:c,dilations:[f[1],f[2]],bias:h,activation:g,preluActivationWeights:p,leakyreluAlpha:y})]}case"Conv2DBackpropInput":case"Conv2dTranspose":{const i=b("outputShape",t,e,a),l=b("strides",t,e,a),c=Vl(t,e,a);return[r.conv2dTranspose(b("x",t,e,a),b("filter",t,e,a),i,[l[1],l[2]],c)]}case"DepthwiseConv2dNative":case"DepthwiseConv2d":{const i=b("strides",t,e,a),l=Vl(t,e,a),c=b("dilations",t,e,a),f=b("dataFormat",t,e,a).toUpperCase();return[r.depthwiseConv2d(b("input",t,e,a),b("filter",t,e,a),[i[1],i[2]],l,f,[c[1],c[2]])]}case"Conv3D":{const i=b("strides",t,e,a),l=b("pad",t,e,a),c=b("dataFormat",t,e,a).toUpperCase(),f=b("dilations",t,e,a);return[r.conv3d(b("x",t,e,a),b("filter",t,e,a),[i[1],i[2],i[3]],l,c,[f[1],f[2],f[3]])]}case"AvgPool":{const i=b("strides",t,e,a),l=b("pad",t,e,a),c=b("kernelSize",t,e,a);return[r.avgPool(b("x",t,e,a),[c[1],c[2]],[i[1],i[2]],l)]}case"MaxPool":{const i=b("strides",t,e,a),l=b("pad",t,e,a),c=b("kernelSize",t,e,a);return[r.maxPool(b("x",t,e,a),[c[1],c[2]],[i[1],i[2]],l)]}case"MaxPoolWithArgmax":{const i=b("strides",t,e,a),l=b("pad",t,e,a),c=b("kernelSize",t,e,a),f=b("includeBatchInIndex",t,e,a),{result:h,indexes:p}=r.maxPoolWithArgmax(b("x",t,e,a),[c[1],c[2]],[i[1],i[2]],l,f);return[h,p]}case"AvgPool3D":{const i=b("strides",t,e,a),l=b("pad",t,e,a),c=b("kernelSize",t,e,a);return[r.avgPool3d(b("x",t,e,a),[c[1],c[2],c[3]],[i[1],i[2],i[3]],l)]}case"MaxPool3D":{const i=b("strides",t,e,a),l=b("pad",t,e,a),c=b("kernelSize",t,e,a);return[r.maxPool3d(b("x",t,e,a),[c[1],c[2],c[3]],[i[1],i[2],i[3]],l)]}case"Dilation2D":{const i=b("strides",t,e,a),l=b("pad",t,e,a),c=b("dilations",t,e,a),f=i[1],h=i[2],p=c[1],g=c[2];return[r.dilation2d(b("x",t,e,a),b("filter",t,e,a),[f,h],l,[p,g],"NHWC")]}default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const WR=(t,e,a,r=bt)=>{switch(t.op){case"Fill":{const i=b("shape",t,e,a),l=b("dtype",t,e,a),c=b("value",t,e,a);return[r.fill(i,c,l)]}case"LinSpace":{const i=b("start",t,e,a),l=b("stop",t,e,a),c=b("num",t,e,a);return[r.linspace(i,l,c)]}case"Multinomial":{const i=b("logits",t,e,a),l=b("numSamples",t,e,a),c=b("seed",t,e,a);return[r.multinomial(i,l,c)]}case"OneHot":{const i=b("indices",t,e,a),l=b("depth",t,e,a),c=b("onValue",t,e,a),f=b("offValue",t,e,a),h=b("dtype",t,e,a);return[r.oneHot(i,l,c,f,h)]}case"Ones":return[r.ones(b("shape",t,e,a),b("dtype",t,e,a))];case"OnesLike":return[r.onesLike(b("x",t,e,a))];case"RandomStandardNormal":return[r.randomStandardNormal(b("shape",t,e,a),b("dtype",t,e,a),b("seed",t,e,a))];case"RandomUniform":return[r.randomUniform(b("shape",t,e,a),b("minval",t,e,a),b("maxval",t,e,a),b("dtype",t,e,a))];case"RandomUniformInt":return[r.randomUniformInt(b("shape",t,e,a),b("minval",t,e,a),b("maxval",t,e,a),b("seed",t,e,a))];case"Range":{const i=b("start",t,e,a),l=b("stop",t,e,a),c=b("step",t,e,a);return[r.range(i,l,c,b("dtype",t,e,a))]}case"TruncatedNormal":{const i=b("shape",t,e,a),l=b("mean",t,e,a),c=b("stdDev",t,e,a),f=b("seed",t,e,a);return[r.truncatedNormal(i,l,c,b("dtype",t,e,a),f)]}case"Zeros":return[r.zeros(b("shape",t,e,a),b("dtype",t,e,a))];case"ZerosLike":return[r.zerosLike(b("x",t,e,a))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function th(t,e,a){const r=b("boxes",t,e,a),i=b("scores",t,e,a),l=b("maxOutputSize",t,e,a),c=b("iouThreshold",t,e,a),f=b("scoreThreshold",t,e,a),h=b("softNmsSigma",t,e,a);return{boxes:r,scores:i,maxOutputSize:l,iouThreshold:c,scoreThreshold:f,softNmsSigma:h}}const QR=async(t,e,a,r,i=bt)=>{switch(t.op){case"NonMaxSuppressionV5":{const{boxes:l,scores:c,maxOutputSize:f,iouThreshold:h,scoreThreshold:p,softNmsSigma:g}=th(t,e,a),y=await i.image.nonMaxSuppressionWithScoreAsync(l,c,f,h,p,g);return[y.selectedIndices,y.selectedScores]}case"NonMaxSuppressionV4":{const{boxes:l,scores:c,maxOutputSize:f,iouThreshold:h,scoreThreshold:p}=th(t,e,a),g=b("padToMaxOutputSize",t,e,a),y=await i.image.nonMaxSuppressionPaddedAsync(l,c,f,h,p,g);return[y.selectedIndices,y.validOutputs]}case"NonMaxSuppressionV3":case"NonMaxSuppressionV2":{const{boxes:l,scores:c,maxOutputSize:f,iouThreshold:h,scoreThreshold:p}=th(t,e,a);return[await i.image.nonMaxSuppressionAsync(l,c,f,h,p)]}case"Where":{const l=i.cast(b("condition",t,e,a),"bool"),c=[await i.whereAsync(l)];return l.dispose(),c}case"ListDiff":return i.setdiff1dAsync(b("x",t,e,a),b("y",t,e,a));default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const JR=(t,e,a,r=bt)=>{switch(t.op){case"LowerBound":{const i=b("sortedSequence",t,e,a),l=b("values",t,e,a);return[r.lowerBound(i,l)]}case"TopKV2":{const i=b("x",t,e,a),l=b("k",t,e,a),c=b("sorted",t,e,a),f=r.topk(i,l,c);return[f.values,f.indices]}case"UpperBound":{const i=b("sortedSequence",t,e,a),l=b("values",t,e,a);return[r.upperBound(i,l)]}case"Unique":{const i=b("x",t,e,a),l=r.unique(i);return[l.values,l.indices]}case"UniqueV2":{const i=b("x",t,e,a),l=b("axis",t,e,a),c=r.unique(i,l);return[c.values,c.indices]}default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const e8=(t,e,a,r=bt)=>{switch(t.op){case"Const":return e[t.name];case"PlaceholderWithDefault":const i=b("default",t,e,a);return[yt(t.name,e,a)||i];case"Placeholder":return[yt(t.name,e,a)];case"Identity":case"StopGradient":case"FakeQuantWithMinMaxVars":{const g=b("x",t,e,a);return[Jn(g)]}case"IdentityN":return b("x",t,e,a).map(g=>Jn(g));case"Snapshot":const l=b("x",t,e,a);return[Jn(l)];case"Shape":return[r.tensor1d(b("x",t,e,a).shape,"int32")];case"ShapeN":return b("x",t,e,a).map(g=>r.tensor1d(g.shape));case"Size":return[r.scalar(b("x",t,e,a).size,"int32")];case"Rank":return[r.scalar(b("x",t,e,a).rank,"int32")];case"NoOp":return[r.scalar(1)];case"Print":const c=b("x",t,e,a),f=b("data",t,e,a),h=b("message",t,e,a),p=b("summarize",t,e,a);console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."),console.log(h);for(let g=0;g<f.length;g++)console.log(Array.prototype.slice.call(f[g].dataSync()).slice(0,p));return[c];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class t8{get id(){return this.handle.id}constructor(e,a){this.keyDType=e,this.valueDType=a,this.handle=$e(0),this.tensorMap=new Map,vn(this.handle)}clearAndClose(){this.tensorMap.forEach(e=>e.dispose()),this.tensorMap.clear(),this.handle.dispose()}size(){return this.tensorMap.size}tensorSize(){return $e(this.size(),"int32")}async import(e,a){this.checkKeyAndValueTensor(e,a);const r=await e.data();return this.tensorMap.forEach(i=>i.dispose()),this.tensorMap.clear(),Re(()=>{const i=Ga(a),l=r.length,c=i.length;E(l===c,()=>`The number of elements doesn't match, keys has ${l} elements, the values has ${c} elements.`);for(let f=0;f<l;f++){const h=r[f],p=i[f];vn(p),this.tensorMap.set(h,p)}return this.handle})}async find(e,a){this.checkKeyAndValueTensor(e,a);const r=await e.data();return Re(()=>{const i=[];for(let l=0;l<r.length;l++){const c=r[l],f=this.findWithDefault(c,a);i.push(f)}return jn(i)})}findWithDefault(e,a){const r=this.tensorMap.get(e);return r??a}checkKeyAndValueTensor(e,a){if(e.dtype!==this.keyDType)throw new Error(`Expect key dtype ${this.keyDType}, but got ${e.dtype}`);if(a.dtype!==this.valueDType)throw new Error(`Expect value dtype ${this.valueDType}, but got ${a.dtype}`)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const n8=async(t,e,a,r)=>{switch(t.op){case"HashTable":case"HashTableV2":{const i=r.getHashTableHandleByName(t.name);if(i!=null)return[i];{const l=b("keyDType",t,e,a),c=b("valueDType",t,e,a),f=new t8(l,c);return r.addHashTable(t.name,f),[f.handle]}}case"InitializeTable":case"InitializeTableV2":case"LookupTableImport":case"LookupTableImportV2":{const i=b("tableHandle",t,e,a,r),l=b("keys",t,e,a),c=b("values",t,e,a);return[await r.getHashTableById(i.id).import(l,c)]}case"LookupTableFind":case"LookupTableFindV2":{const i=b("tableHandle",t,e,a,r),l=b("keys",t,e,a),c=b("defaultValue",t,e,a);return[await r.getHashTableById(i.id).find(l,c)]}case"LookupTableSize":case"LookupTableSizeV2":{const i=b("tableHandle",t,e,a,r);return[r.getHashTableById(i.id).tensorSize()]}default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const a8=(t,e,a,r=bt)=>{switch(t.op){case"ResizeBilinear":{const i=b("images",t,e,a),l=b("size",t,e,a),c=b("alignCorners",t,e,a),f=b("halfPixelCenters",t,e,a);return[r.image.resizeBilinear(i,[l[0],l[1]],c,f)]}case"ResizeNearestNeighbor":{const i=b("images",t,e,a),l=b("size",t,e,a),c=b("alignCorners",t,e,a),f=b("halfPixelCenters",t,e,a);return[r.image.resizeNearestNeighbor(i,[l[0],l[1]],c,f)]}case"CropAndResize":{const i=b("image",t,e,a),l=b("boxes",t,e,a),c=b("boxInd",t,e,a),f=b("cropSize",t,e,a),h=b("method",t,e,a),p=b("extrapolationValue",t,e,a);return[r.image.cropAndResize(i,l,c,f,h,p)]}case"ImageProjectiveTransformV3":{const i=b("images",t,e,a),l=b("transforms",t,e,a),c=b("outputShape",t,e,a),f=b("fillValue",t,e,a),h=b("interpolation",t,e,a),p=b("fillMode",t,e,a);return[r.image.transform(i,l,h.toLowerCase(),p.toLowerCase(),f,c)]}default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const s8=(t,e,a,r=bt)=>{switch(t.op){case"Equal":return[r.equal(b("a",t,e,a),b("b",t,e,a))];case"NotEqual":return[r.notEqual(b("a",t,e,a),b("b",t,e,a))];case"Greater":return[r.greater(b("a",t,e,a),b("b",t,e,a))];case"GreaterEqual":return[r.greaterEqual(b("a",t,e,a),b("b",t,e,a))];case"Less":return[r.less(b("a",t,e,a),b("b",t,e,a))];case"LessEqual":return[r.lessEqual(b("a",t,e,a),b("b",t,e,a))];case"LogicalAnd":return[r.logicalAnd(b("a",t,e,a),b("b",t,e,a))];case"LogicalNot":return[r.logicalNot(b("a",t,e,a))];case"LogicalOr":return[r.logicalOr(b("a",t,e,a),b("b",t,e,a))];case"Select":case"SelectV2":return[r.where(b("condition",t,e,a),b("a",t,e,a),b("b",t,e,a))];case"BitwiseAnd":return[r.bitwiseAnd(b("a",t,e,a),b("b",t,e,a))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const r8=(t,e,a,r=bt)=>{switch(t.op){case"BatchMatMul":case"BatchMatMulV2":case"MatMul":return[r.matMul(b("a",t,e,a),b("b",t,e,a),b("transposeA",t,e,a),b("transposeB",t,e,a))];case"Einsum":return[r.einsum(b("equation",t,e,a),...b("tensors",t,e,a))];case"Transpose":return[r.transpose(b("x",t,e,a),b("perm",t,e,a))];case"_FusedMatMul":const[i,l]=b("fusedOps",t,e,a),c=i==="biasadd",f=l==="prelu",h=b("numArgs",t,e,a),p=b("leakyreluAlpha",t,e,a);if(c){if(f&&h!==2)throw new Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!f&&h!==1)throw new Error("Fused MatMul with BiasAdd must have one extra argument: bias.")}const[g,y]=b("args",t,e,a);return[r.fused.matMul({a:b("a",t,e,a),b:b("b",t,e,a),transposeA:b("transposeA",t,e,a),transposeB:b("transposeB",t,e,a),bias:g,activation:l,preluActivationWeights:y,leakyreluAlpha:p})];case"MatrixBandPart":return[r.linalg.bandPart(b("a",t,e,a),b("numLower",t,e,a),b("numUpper",t,e,a))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const i8=(t,e,a,r=bt)=>{switch(t.op){case"EuclideanNorm":return[r.euclideanNorm(b("x",t,e,a),b("axis",t,e,a),b("keepDims",t,e,a))];case"FusedBatchNorm":case"FusedBatchNormV2":return[r.batchNorm(b("x",t,e,a),b("mean",t,e,a),b("variance",t,e,a),b("offset",t,e,a),b("scale",t,e,a),b("epsilon",t,e,a))];case"FusedBatchNormV3":return[r.batchNorm(b("x",t,e,a),b("mean",t,e,a),b("variance",t,e,a),b("offset",t,e,a),b("scale",t,e,a),b("epsilon",t,e,a))];case"LRN":return[r.localResponseNormalization(b("x",t,e,a),b("radius",t,e,a),b("bias",t,e,a),b("alpha",t,e,a),b("beta",t,e,a))];case"Softmax":return[r.softmax(b("x",t,e,a))];case"LogSoftmax":return[r.logSoftmax(b("x",t,e,a))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const o8=(t,e,a,r=bt)=>{switch(t.op){case"RaggedGather":{const{outputNestedSplits:i,outputDenseValues:l}=r.raggedGather(b("paramsNestedSplits",t,e,a),b("paramsDenseValues",t,e,a),b("indices",t,e,a),b("outputRaggedRank",t,e,a));return i.concat(l)}case"RaggedRange":{const{rtNestedSplits:i,rtDenseValues:l}=r.raggedRange(b("starts",t,e,a),b("limits",t,e,a),b("splits",t,e,a));return[i,l]}case"RaggedTensorToTensor":return[r.raggedTensorToTensor(b("shape",t,e,a),b("values",t,e,a),b("defaultValue",t,e,a),b("rowPartitionTensors",t,e,a),b("rowPartitionTypes",t,e,a))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const l8=(t,e,a,r=bt)=>{switch(t.op){case"Max":{const f=b("axis",t,e,a),h=b("keepDims",t,e,a);return[r.max(b("x",t,e,a),f,h)]}case"Mean":{const f=b("axis",t,e,a),h=b("keepDims",t,e,a);return[r.mean(b("x",t,e,a),f,h)]}case"Min":{const f=b("axis",t,e,a),h=b("keepDims",t,e,a);return[r.min(b("x",t,e,a),f,h)]}case"Sum":{const f=b("axis",t,e,a),h=b("keepDims",t,e,a);return[r.sum(b("x",t,e,a),f,h)]}case"All":{const f=b("axis",t,e,a),h=b("keepDims",t,e,a);return[r.all(b("x",t,e,a),f,h)]}case"Any":{const f=b("axis",t,e,a),h=b("keepDims",t,e,a);return[r.any(b("x",t,e,a),f,h)]}case"ArgMax":{const f=b("axis",t,e,a);return[r.argMax(b("x",t,e,a),f)]}case"ArgMin":{const f=b("axis",t,e,a);return[r.argMin(b("x",t,e,a),f)]}case"Prod":{const f=b("axis",t,e,a),h=b("keepDims",t,e,a);return[r.prod(b("x",t,e,a),f,h)]}case"Cumprod":{const f=b("axis",t,e,a),h=b("exclusive",t,e,a),p=b("reverse",t,e,a);return[r.cumprod(b("x",t,e,a),f,h,p)]}case"Cumsum":{const f=b("axis",t,e,a),h=b("exclusive",t,e,a),p=b("reverse",t,e,a);return[r.cumsum(b("x",t,e,a),f,h,p)]}case"Bincount":const i=b("x",t,e,a),l=b("weights",t,e,a),c=b("size",t,e,a);return[r.bincount(i,l,c)];case"DenseBincount":{const f=b("x",t,e,a),h=b("weights",t,e,a),p=b("size",t,e,a),g=b("binaryOutput",t,e,a);return[r.denseBincount(f,h,p,g)]}default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const u8=(t,e,a,r=bt)=>{switch(t.op){case"ConcatV2":case"Concat":{const i=b("n",t,e,a),l=b("axis",t,e,a);let c=b("tensors",t,e,a);return c=c.slice(0,i),[r.concat(c,l)]}case"Gather":{const i=b("x",t,e,a),l=b("indices",t,e,a);return[r.gather(i,r.cast(l,"int32"),0)]}case"GatherV2":{const i=b("axis",t,e,a),l=b("batchDims",t,e,a),c=b("x",t,e,a),f=b("indices",t,e,a);return[r.gather(c,r.cast(f,"int32"),i,l)]}case"Reverse":{const i=b("dims",t,e,a),l=[];for(let f=0;f<i.length;f++)i[f]&&l.push(f);const c=b("x",t,e,a);return[r.reverse(c,l)]}case"ReverseV2":{const i=b("axis",t,e,a),l=b("x",t,e,a);return[r.reverse(l,i)]}case"Slice":{const i=b("begin",t,e,a),l=b("size",t,e,a);return[r.slice(b("x",t,e,a),i,l)]}case"StridedSlice":{const i=b("begin",t,e,a),l=b("end",t,e,a),c=b("strides",t,e,a),f=b("beginMask",t,e,a),h=b("endMask",t,e,a),p=b("ellipsisMask",t,e,a),g=b("newAxisMask",t,e,a),y=b("shrinkAxisMask",t,e,a),v=b("x",t,e,a);return[r.stridedSlice(v,i,l,c,f,h,p,g,y)]}case"Pack":return Re(()=>{const i=b("axis",t,e,a),l=b("tensors",t,e,a),c=l[0].shape,f=r.squeeze(l[0]).shape,h=l.map(p=>{const g=Nn(p.shape,c);if(!g&&!Nn(r.squeeze(p).shape,f))throw new Error("the input tensors shape does not match");return g?p:r.reshape(p,c)});return[r.stack(h,i)]});case"Unpack":{const i=b("axis",t,e,a),l=b("tensor",t,e,a);return r.unstack(l,i)}case"Tile":{const i=b("reps",t,e,a);return[r.tile(b("x",t,e,a),i)]}case"Split":case"SplitV":{const i=b("axis",t,e,a),l=b("numOrSizeSplits",t,e,a),c=b("x",t,e,a);return r.split(c,l,i)}case"ScatterNd":{const i=b("indices",t,e,a),l=b("values",t,e,a),c=b("shape",t,e,a);return[r.scatterND(i,l,c)]}case"GatherNd":{const i=b("x",t,e,a),l=b("indices",t,e,a);return[r.gatherND(i,l)]}case"SparseToDense":{const i=b("sparseIndices",t,e,a),l=b("outputShape",t,e,a),c=b("sparseValues",t,e,a),f=b("defaultValue",t,e,a);return[r.sparseToDense(i,c,l,c.dtype===f.dtype?f:r.cast(f,c.dtype))]}case"TensorScatterUpdate":{const i=b("indices",t,e,a),l=b("values",t,e,a),c=b("tensor",t,e,a);return[r.tensorScatterUpdate(c,i,l)]}default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const c8=(t,e,a,r=bt)=>{switch(t.op){case"SparseFillEmptyRows":{const{outputIndices:i,outputValues:l,emptyRowIndicator:c,reverseIndexMap:f}=r.sparse.sparseFillEmptyRows(b("indices",t,e,a),b("values",t,e,a),b("denseShape",t,e,a),b("defaultValue",t,e,a));return[i,l,c,f]}case"SparseReshape":{const{outputIndices:i,outputShape:l}=r.sparse.sparseReshape(b("inputIndices",t,e,a),b("inputShape",t,e,a),b("newShape",t,e,a));return[i,l]}case"SparseSegmentMean":return[r.sparse.sparseSegmentMean(b("data",t,e,a),b("indices",t,e,a),b("segmentIds",t,e,a))];case"SparseSegmentSum":return[r.sparse.sparseSegmentSum(b("data",t,e,a),b("indices",t,e,a),b("segmentIds",t,e,a))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const f8=(t,e,a,r=bt)=>{switch(t.op){case"FFT":return[r.fft(b("x",t,e,a))];case"IFFT":return[r.ifft(b("x",t,e,a))];case"RFFT":return[r.rfft(b("x",t,e,a))];case"IRFFT":return[r.irfft(b("x",t,e,a))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const h8=(t,e,a,r=bt)=>{switch(t.op){case"StaticRegexReplace":return[r.string.staticRegexReplace(b("input",t,e,a),b("pattern",t,e,a),b("rewrite",t,e,a),b("replaceGlobal",t,e,a))];case"StringNGrams":{const{nGrams:i,nGramsSplits:l}=r.string.stringNGrams(b("data",t,e,a),b("dataSplits",t,e,a),b("separator",t,e,a),b("nGramWidths",t,e,a),b("leftPad",t,e,a),b("rightPad",t,e,a),b("padWidth",t,e,a),b("preserveShortSequences",t,e,a));return[i,l]}case"StringSplit":{const{indices:i,values:l,shape:c}=r.string.stringSplit(b("input",t,e,a),b("delimiter",t,e,a),b("skipEmpty",t,e,a));return[i,l,c]}case"StringToHashBucketFast":return[r.string.stringToHashBucketFast(b("input",t,e,a),b("numBuckets",t,e,a))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const d8=(t,e,a,r=bt)=>{switch(t.op){case"Cast":return[r.cast(b("x",t,e,a),b("dtype",t,e,a))];case"ExpandDims":{const i=b("axis",t,e,a);return[r.expandDims(b("x",t,e,a),i)]}case"Squeeze":{const i=b("axis",t,e,a);return[r.squeeze(b("x",t,e,a),i)]}case"Reshape":return[r.reshape(b("x",t,e,a),b("shape",t,e,a))];case"EnsureShape":return[r.ensureShape(b("x",t,e,a),b("shape",t,e,a))];case"MirrorPad":return[r.mirrorPad(b("x",t,e,a),b("padding",t,e,a),b("mode",t,e,a))];case"PadV2":case"Pad":return[r.pad(b("x",t,e,a),b("padding",t,e,a),b("constantValue",t,e,a))];case"SpaceToBatchND":{const i=b("blockShape",t,e,a),l=b("paddings",t,e,a);return[r.spaceToBatchND(b("x",t,e,a),i,l)]}case"BatchToSpaceND":{const i=b("blockShape",t,e,a),l=b("crops",t,e,a);return[r.batchToSpaceND(b("x",t,e,a),i,l)]}case"DepthToSpace":{const i=b("blockSize",t,e,a),l=b("dataFormat",t,e,a).toUpperCase();return[r.depthToSpace(b("x",t,e,a),i,l)]}case"BroadcastTo":return[r.broadcastTo(b("x",t,e,a),b("shape",t,e,a))];case"BroadcastArgs":return[r.broadcastArgs(b("s0",t,e,a),b("s1",t,e,a))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function q0(t,e,a,r,i=Re){const l=((c,f,h)=>{switch(c.category){case"arithmetic":return i(()=>FR(c,f,h));case"basic_math":return i(()=>VR(c,f,h));case"control":return XR(c,f,h);case"convolution":return i(()=>ZR(c,f,h));case"creation":return i(()=>WR(c,f,h));case"dynamic":return QR(c,f,h);case"evaluation":return i(()=>JR(c,f,h));case"image":return i(()=>a8(c,f,h));case"graph":return i(()=>e8(c,f,h));case"logical":return i(()=>s8(c,f,h));case"matrices":return i(()=>r8(c,f,h));case"normalization":return i(()=>i8(c,f,h));case"ragged":return i(()=>o8(c,f,h));case"reduction":return i(()=>l8(c,f,h));case"slice_join":return i(()=>u8(c,f,h));case"sparse":return i(()=>c8(c,f,h));case"spectral":return i(()=>f8(c,f,h));case"string":return i(()=>h8(c,f,h));case"transformation":return i(()=>d8(c,f,h));case"hash_table":return n8(c,f,h,r);case"custom":const p=wN(c.op);if(p&&p.customExecutor)return p.customExecutor(new qR(c,f,h));throw TypeError(`Custom op ${c.op} is not registered.`);default:throw TypeError(`Unknown op '${c.op}'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()`)}})(t,e,a);return La(l)?l.then(c=>[].concat(c)):[].concat(l)}class F0{constructor(e={},a={},r={},i={},l){this.weightMap=e,this.tensorArrayMap=a,this.tensorListMap=r,this.functionMap=i,this.parseNodeNameCache=l,this.rootContext={id:0,frameName:"",iterationId:0},this.contexts=[this.rootContext],this.lastId=0,this.generateCurrentContextIds()}newFrame(e,a){return{id:e,frameName:a,iterationId:0}}set currentContext(e){this.contexts!==e&&(this.contexts=e,this.generateCurrentContextIds())}get currentContext(){return this.contexts}get currentContextId(){return this._currentContextIds[0]}get currentContextIds(){return this._currentContextIds}generateCurrentContextIds(){const e=[];for(let a=0;a<this.contexts.length-1;a++){const r=this.contexts.slice(0,this.contexts.length-a);e.push(this.contextIdforContexts(r))}e.push(""),this._currentContextIds=e}contextIdforContexts(e){return e?e.map(a=>a.id===0&&a.iterationId===0?"":`${a.frameName}-${a.iterationId}`).join("/"):""}enterFrame(e){this.contexts&&(this.lastId++,this.contexts=this.contexts.slice(),this.contexts.push(this.newFrame(this.lastId,e)),this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)))}exitFrame(){if(this.contexts&&this.contexts.length>1)this.contexts=this.contexts.slice(),this.contexts.splice(-1),this.currentContextIds.shift();else throw new Error("Cannot exit frame, the context is empty")}nextIteration(){if(this.contexts&&this.contexts.length>0){this.contexts=this.contexts.slice(),this.lastId++;const e=Object.assign({},this.contexts[this.contexts.length-1]);e.iterationId+=1,e.id=this.lastId,this.contexts.splice(-1,1,e),this._currentContextIds.splice(0,1,this.contextIdforContexts(this.contexts))}else throw new Error("Cannot increase frame iteration, the context is empty")}getWeight(e){return this.weightMap[e]}addTensorArray(e){this.tensorArrayMap[e.id]=e}getTensorArray(e){return this.tensorArrayMap[e]}addTensorList(e){this.tensorListMap[e.id]=e}getTensorList(e){return this.tensorListMap[e]}dispose(e){for(const a in this.tensorArrayMap)this.tensorArrayMap[a].clearAndClose(e);for(const a in this.tensorListMap)this.tensorListMap[a].clearAndClose(e)}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function V0(t,e,a,r){const i=new Set,l=[];let c=null,f=null;const h=new Set,p=new Set(Object.keys(t).map(v=>Ft(v)[0]));r=r||[];const g=new Set(r.map(v=>Ft(v.name)[0])),y=[...e];for(;y.length>0;){const v=y.pop();if((gs(v)||S8(v)||N8(v))&&c==null&&(c=v,f=c.children.map(S=>S.name).filter(S=>i.has(S))),i.add(v.name),a[v.name]==null&&!p.has(v.name)&&!g.has(v.name)){if(v.inputs.length===0){l.push(v.name);continue}v.inputs.forEach(S=>{h.has(S.name)||(h.add(S.name),y.push(S))})}}return{inputs:t,outputs:e,usedNodes:i,missingInputs:l,dynamicNode:c,syncInputs:f}}function p8(t,e){const{usedNodes:a,inputs:r}=e,i=Object.keys(r).map(A=>Ft(A)[0]).map(A=>t.nodes[A]),l=t.initNodes||[],c=A=>a.has(typeof A=="string"?A:A.name);function f(A){return[...new Map(A.map(M=>[M.name,M])).values()]}const h=f([...i,...t.weights,...l]).filter(c),p=f([...h,...Object.values(t.nodes)]).filter(c),g=new Map(p.map(A=>[A.name,A])),y={};for(const A of p){y[A.name]=y[A.name]||0;for(const M of A.children)c(M)||(y[M.name]=Number.POSITIVE_INFINITY),y[M.name]=(y[M.name]||0)+1}const v=Object.entries(y).filter(([,A])=>A===0).map(([A])=>A),S=[...v];for(;v.length>0;){const A=v.pop(),M=g.get(A);for(const X of M.children.filter(c))--y[X.name]===0&&(S.push(X.name),v.push(X.name))}const k=S.map(A=>g.get(A)),$=m8(k,h);return g8($,h),$}function m8(t,e){const a=new Map(t.map(c=>[c.name,c])),r=e.map(c=>c.name),i=new Set(r);for(;r.length>0;){const c=r.pop(),f=a.get(c);for(const h of f.children)!a.has(h.name)||i.has(h.name)||(i.add(h.name),r.push(h.name))}return t.filter(c=>i.has(c.name))}class Rl extends Error{constructor(e){super(`NodesExecutionOrderError: ${e}`)}}function g8(t,e){const a=new Map(t.map((f,h)=>[f.name,h])),r=new Set(e.map(f=>f.name)),i=f=>r.has(typeof f=="string"?f:f.name),l=new Set(t.map(f=>f.name)),c=f=>l.has(typeof f=="string"?f:f.name);for(const f of t){for(const h of f.children.filter(c)){if(!a.has(h.name))throw new Rl(`Child ${h.name} of node ${f.name} is unreachable.`);if(a.get(f.name)>a.get(h.name))throw new Rl(`Node ${f.name} is scheduled to run after its child ${h.name}.`)}if(!i(f))for(const h of f.inputs){if(!a.has(h.name))throw new Rl(`Input ${h.name} of node ${f.name} is unreachable.`);if(a.get(h.name)>a.get(f.name))throw new Rl(`Node ${f.name} is scheduled to run before its input ${h.name}.`)}}}function y8(t){const e=new Map(t.map((f,h)=>[f.name,h])),a=Number.MAX_SAFE_INTEGER,r=t.map((f,h)=>gs(f)?a:h),i=f=>{const h=r[e.get(f.name)];return h??-1},l=t.map((f,h)=>f.children.map(i).reduce((p,g)=>Math.max(p,g),r[h])),c=new Map;for(let f=0;f<t.length;++f){const h=l[f];if(h===a)continue;const p=t[f],g=t[h];c.has(g.name)||c.set(g.name,[]),c.get(g.name).push(p)}return c}const b8=new Set(["Switch","Merge","Enter","Exit","NextIteration","StatelessIf","StatelessWhile","if","While"]),v8=new Set(["NonMaxSuppressionV2","NonMaxSuppressionV3","NonMaxSuppressionV5","Where"]),w8=new Set(["HashTable","HashTableV2","LookupTableImport","LookupTableImportV2","LookupTableFind","LookupTableFindV2","LookupTableSize","LookupTableSizeV2"]);function gs(t){return b8.has(t.op)}function S8(t){return v8.has(t.op)}function N8(t){return w8.has(t.op)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class au{get weightIds(){return this.parent?this.parent.weightIds:this._weightIds}get functionExecutorMap(){return this.parent?this.parent.functionExecutorMap:this._functionExecutorMap}get weightMap(){return this.parent?this.parent.weightMap:this._weightMap}set weightMap(e){const a=Object.keys(e).map(r=>e[r].map(i=>i.id));this._weightIds=[].concat(...a),this._weightMap=e}set resourceManager(e){this._resourceManager=e}get inputs(){return this._inputs.map(e=>({name:e.name,shape:e.attrParams.shape?e.attrParams.shape.value:void 0,dtype:e.attrParams.dtype?e.attrParams.dtype.value:void 0}))}get outputs(){return this._outputs.map(e=>({name:e.name,shape:e.attrParams.shape?e.attrParams.shape.value:void 0,dtype:e.attrParams.dtype?e.attrParams.dtype.value:void 0}))}get inputNodes(){return this._inputs.map(e=>e.signatureKey||e.name)}get outputNodes(){return this._outputs.map(e=>{const a=e.signatureKey||e.name;return e.defaultOutput?`${a}:${e.defaultOutput}`:a})}get functions(){return Object.keys(this._functions).reduce((e,a)=>(e[a]=this._functions[a].signature,e),{})}constructor(e,a){this.graph=e,this.parent=a,this.compiledMap=new Map,this.parseNodeNameCache=new Map,this._weightMap={},this.SEPARATOR=",",this._functions={},this._functionExecutorMap={},this.keepIntermediateTensors=!1,this._outputs=e.outputs,this._inputs=e.inputs,this._initNodes=e.initNodes,this._signature=e.signature,this._functions=e.functions,e.functions!=null&&Object.keys(e.functions).forEach(r=>{this._functionExecutorMap[r]=new au(e.functions[r],this)})}getCompilationKey(e,a){const r=e.map(l=>l.name).sort(),i=a.map(l=>l.name).sort();return r.join(this.SEPARATOR)+"--"+i.join(this.SEPARATOR)}compile(e,a){const r=V0(e,a,this.weightMap,this._initNodes),{missingInputs:i,dynamicNode:l,syncInputs:c}=r;if(l!=null)throw new Error(`This execution contains the node '${l.name}', which has the dynamic op '${l.op}'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [${c}]`);if(i.length>0){const p=a.map(y=>y.name),g=Object.keys(e);throw new Error(`Cannot compute the outputs [${p}] from the provided inputs [${g}]. Missing the following inputs: [${i}]`)}const f=p8(this.graph,r),h=y8(f);return{orderedNodes:f,nodeLiveUntilMap:h}}cloneAndKeepTensor(e){if(e==null)return null;const a=e.clone();return vn(a),a}cloneTensorList(e){return e?e.map(r=>this.cloneAndKeepTensor(r)):null}cloneTensorMap(e){return Object.fromEntries(Object.entries(e).map(([a,r])=>[a,this.cloneTensorList(r)]))}execute(e,a){this.disposeIntermediateTensors(),e=this.mapInputs(e);const r=Object.keys(e).sort();this.checkInputs(e),this.checkInputShapeAndType(e),a=this.mapOutputs(a),this.checkOutputs(a);const i=r.map(v=>this.graph.nodes[Ft(v)[0]]),l=a.map(v=>Ft(v)[0]),c=new Set(l);let f=l.map(v=>this.graph.nodes[v]);f.length===0&&(f=this._outputs);const h=this.getCompilationKey(i,f);let p=this.compiledMap.get(h);p==null&&(p=this.compile(e,f),this.compiledMap.set(h,p));try{this.keepIntermediateTensors=ve().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(v){this.keepIntermediateTensors=!1,console.warn(v.message)}const g={},y={};return Re(()=>{const v=new F0(this.weightMap,g,y,this.functionExecutorMap,this.parseNodeNameCache),S=Object.assign({},this.weightMap);this.keepIntermediateTensors&&(this.clonedTensorsMap=this.cloneTensorMap(this.weightMap)),Object.keys(e).forEach(M=>{const[X,z]=Ft(M,v),I=[];I[z]=e[M],S[X]=I,this.keepIntermediateTensors&&(this.clonedTensorsMap[X]=this.cloneTensorList(I))});const k=this.getFrozenTensorIds(S),{orderedNodes:$,nodeLiveUntilMap:A}=p;for(const M of $){if(S[M.name])continue;const X=q0(M,S,v,this._resourceManager);if(La(X))throw new Error(`The execution of the op '${M.op}' returned a promise. Please use model.executeAsync() instead.`);S[M.name]=X,this.keepIntermediateTensors&&(this.clonedTensorsMap[M.name]=this.cloneTensorList(X)),this.checkTensorForDisposalWithNodeLiveUntilInfo(M,S,v,k,c,A.get(M.name))}return this.parent==null&&v.dispose(k),a.map(M=>yt(M,S,v))})}getFrozenTensorIds(e){const a=[].concat.apply([],Object.keys(e).map(r=>e[r]).map(r=>r.map(i=>i.id)));return new Set(a)}checkTensorForDisposal(e,a,r,i,l,c,f){if(!(gs(a)||c.has(e))){for(const h of r[e])h!=null&&(f[h.id]=(f[h.id]||0)+a.children.length);for(const h of a.inputs){if(gs(h))continue;const p=M0(h.name,r,i);if(p!=null)for(const g of p){if(!g||g.kept||l.has(g.id))continue;const y=f[g.id];y===1?(g.dispose(),delete f[g.id]):y!=null&&f[g.id]--}}}}checkTensorForDisposalWithNodeLiveUntilInfo(e,a,r,i,l,c){function f(h){return gs(h)||l.has(h.name)}if(!(gs(e)||c==null))for(const h of c){if(f(h))continue;const p=M0(h.name,a,r);for(const g of p)!g||g.kept||i.has(g.id)||g.dispose()}}async executeAsync(e,a){return this._executeAsync(e,a)}disposeIntermediateTensors(){this.clonedTensorsMap&&(Object.values(this.clonedTensorsMap).forEach(e=>{for(const a of e)a&&!a.isDisposed&&a.dispose()}),this.clonedTensorsMap=null)}getIntermediateTensors(){return this.clonedTensorsMap}async _executeAsync(e,a,r=!1,i={},l={}){this.disposeIntermediateTensors(),r||(e=this.mapInputs(e),this.checkInputs(e),this.checkInputShapeAndType(e),a=this.mapOutputs(a),this.checkOutputs(a));try{this.keepIntermediateTensors=ve().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(v){this.keepIntermediateTensors=!1,console.warn(v.message)}const c=new F0(this.weightMap,i,l,this.functionExecutorMap,this.parseNodeNameCache);this.keepIntermediateTensors&&(this.clonedTensorsMap=this.cloneTensorMap(this.weightMap));const f=await this.executeWithControlFlow(e,c,a,r),h=a.map(v=>yt(v,f,c)),p=h.map(v=>v.id),g=Object.keys(e).map(v=>e[v].id),y=new Set([...p,...g,...this.weightIds]);return Object.values(f).forEach(v=>{v.forEach(S=>{S&&!S.isDisposed&&!y.has(S.id)&&S.dispose()})}),this.parent==null&&c.dispose(y),h}async executeFunctionAsync(e,a,r){const i=e.reduce((l,c,f)=>(l[this.inputs[f].name]=c,l),{});return this._executeAsync(i,this.outputNodes,!0,a,r)}async executeWithControlFlow(e,a,r,i){const l=Object.keys(e),c=l.map(I=>this.graph.nodes[Ft(I)[0]]),f=r.map(I=>Ft(I)[0]),h=new Set(f);let p=f.map(I=>this.graph.nodes[I]);p.length===0&&(p=this._outputs);const{usedNodes:g,missingInputs:y,dynamicNode:v,syncInputs:S}=V0(e,p,this.weightMap,this._initNodes),k=[...c,...this.graph.weights,...this._initNodes||[]].map(I=>({node:I,contexts:a.currentContext})),$=Object.assign({},this.weightMap);Object.keys(e).forEach(I=>{const[V,Z]=Ft(I),re=[];re[Z]=e[I],$[V]=re});const A={},M=this.getFrozenTensorIds($),X={};for(;k.length>0;){const I=this.processStack(c,k,a,$,X,M,h,A,g);await Promise.all(I)}v==null&&!i&&console.warn("This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead.");const z=p.filter(I=>!gs(I)&&!yt(I.name,$,a)).map(I=>I.name);if(z.length>0){let I="";throw v!=null&&(I=`Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [${S}]`),new Error(`Cannot compute the outputs [${z}] from the provided inputs [${l}]. Consider providing the following inputs: [${y}]. ${I}`)}return $}processStack(e,a,r,i,l,c,f,h,p){const g=[];for(;a.length>0;){const y=a.pop();r.currentContext=y.contexts;let v="";if(y.node.op==="Enter"&&b("isConstant",y.node,i,r)&&([v]=Qn(y.node.name,r)),i[y.node.name]==null){const S=q0(y.node,i,r,this._resourceManager);v||([v]=Qn(y.node.name,r));const k=r.currentContext;La(S)?g.push(S.then($=>(i[v]=$,this.keepIntermediateTensors&&(this.clonedTensorsMap[v]=this.cloneTensorList($)),r.currentContext=k,this.checkTensorForDisposal(v,y.node,i,r,c,f,h),this.processChildNodes(y.node,a,r,i,l,p),$))):(i[v]=S,this.keepIntermediateTensors&&(this.clonedTensorsMap[v]=this.cloneTensorList(S)),this.checkTensorForDisposal(v,y.node,i,r,c,f,h),this.processChildNodes(y.node,a,r,i,l,p))}else this.processChildNodes(y.node,a,r,i,l,p)}return g}processChildNodes(e,a,r,i,l,c){e.children.forEach(f=>{const[h]=Qn(f.name,r);l[h]||!c.has(f.name)||(f.op==="Merge"?f.inputNames.some(p=>!!yt(p,i,r))&&(l[h]=!0,a.push({contexts:r.currentContext,node:f})):f.inputNames.every(p=>!!yt(p,i,r))&&(l[h]=!0,a.push({contexts:r.currentContext,node:f})))})}dispose(){Object.keys(this.weightMap).forEach(e=>this.weightMap[e].forEach(a=>a.dispose()))}checkInputShapeAndType(e){Object.keys(e).forEach(a=>{const r=e[a],[i]=Ft(a),l=this.graph.nodes[i];if(l.attrParams.shape&&l.attrParams.shape.value){const c=l.attrParams.shape.value,f=c.length===r.shape.length&&r.shape.every((h,p)=>c[p]===-1||c[p]===h);E(f,()=>`The shape of dict['${l.name}'] provided in model.execute(dict) must be [${c}], but was [${r.shape}]`)}l.attrParams.dtype&&l.attrParams.dtype.value&&E(r.dtype===l.attrParams.dtype.value,()=>`The dtype of dict['${l.name}'] provided in model.execute(dict) must be ${l.attrParams.dtype.value}, but was ${r.dtype}`)})}mapInputs(e){var a,r;const i={};for(const l in e){const c=(r=(a=this._signature)===null||a===void 0?void 0:a.inputs)===null||r===void 0?void 0:r[l];c!=null?i[c.name]=e[l]:i[l]=e[l]}return i}checkInputs(e){const a=Object.keys(e).filter(r=>{const[i]=Ft(r);return this.graph.nodes[i]==null});if(a.length>0)throw new Error(`The dict provided in model.execute(dict) has keys: [${a}] that are not part of graph`)}mapOutputs(e){return e.map(a=>{var r,i;const l=(i=(r=this._signature)===null||r===void 0?void 0:r.outputs)===null||i===void 0?void 0:i[a];return l!=null?l.name:a},{})}checkOutputs(e){e.forEach(a=>{const[r]=Ft(a);if(!this.graph.nodes[r])throw new Error(`The output '${a}' is not found in the graph`)})}}class x8{constructor(e={},a={}){this.hashTableNameToHandle=e,this.hashTableMap=a}addHashTable(e,a){this.hashTableNameToHandle[e]=a.handle,this.hashTableMap[a.id]=a}getHashTableHandleByName(e){return this.hashTableNameToHandle[e]}getHashTableById(e){return this.hashTableMap[e]}dispose(){for(const e in this.hashTableMap)this.hashTableMap[e].clearAndClose(),delete this.hashTableMap[e];for(const e in this.hashTableNameToHandle)this.hashTableNameToHandle[e].dispose(),delete this.hashTableNameToHandle[e]}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const T8="?tfjs-format=file",E8="model.json";class xN{get modelVersion(){return this.version}get inputNodes(){return this.executor.inputNodes}get outputNodes(){return this.executor.outputNodes}get inputs(){return this.executor.inputs}get outputs(){return this.executor.outputs}get weights(){return this.executor.weightMap}get metadata(){return this.artifacts.userDefinedMetadata}get modelSignature(){return this.signature}get modelStructuredOutputKeys(){return this.structuredOutputKeys}constructor(e,a={},r=np){this.modelUrl=e,this.loadOptions=a,this.version="n/a",this.io=r,a==null&&(this.loadOptions={}),this.resourceManager=new x8}findIOHandler(){const e=this.modelUrl;if(e.load!=null)this.handler=e;else if(this.loadOptions.requestInit!=null)this.handler=this.io.browserHTTPRequest(e,this.loadOptions);else{const a=this.io.getLoadHandlers(e,this.loadOptions);if(a.length===0)a.push(this.io.browserHTTPRequest(e,this.loadOptions));else if(a.length>1)throw new Error(`Found more than one (${a.length}) load handlers for URL '${[e]}'`);this.handler=a[0]}}load(){if(this.findIOHandler(),this.handler.load==null)throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");const e=this.handler.load();return La(e)?e.then(a=>a.getWeightStream==null?this.loadSync(a):this.loadStreaming(a)):this.loadSync(e)}loadSync(e){const a=this.io.decodeWeights(e.weightData,e.weightSpecs);return this.loadWithWeightMap(e,a)}async loadStreaming(e){if(e.getWeightStream==null)throw new Error("Model artifacts missing streamWeights function");const a=await vv(e.getWeightStream(),e.weightSpecs);return this.loadWithWeightMap(e,a)}loadWithWeightMap(e,a){this.artifacts=e;const r=this.artifacts.modelTopology;let i=this.artifacts.signature;if(this.artifacts.userDefinedMetadata!=null){const l=this.artifacts.userDefinedMetadata;l.signature!=null&&(i=l.signature),l.structuredOutputKeys!=null&&(this.structuredOutputKeys=l.structuredOutputKeys)}if(this.signature=i,this.version=`${r.versions.producer}.${r.versions.minConsumer}`,this.executor=new au(I0.Instance.transformGraph(r,this.signature)),this.executor.weightMap=this.convertTensorMapToTensorsMap(a),this.executor.resourceManager=this.resourceManager,e.modelInitializer!=null&&e.modelInitializer.node!=null){const l=I0.Instance.transformGraph(e.modelInitializer);this.initializer=new au(l),this.initializer.weightMap=this.executor.weightMap,this.initializer.resourceManager=this.resourceManager,this.initializerSignature=e.initializerSignature}return!0}async save(e,a){if(typeof e=="string"){const r=this.io.getSaveHandlers(e);if(r.length===0)throw new Error(`Cannot find any save handlers for URL '${e}'`);if(r.length>1)throw new Error(`Found more than one (${r.length}) save handlers for URL '${e}'`);e=r[0]}if(e.save==null)throw new Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");return e.save(this.artifacts)}addStructuredOutputNames(e){if(this.structuredOutputKeys){const a=e instanceof Je?[e]:e,r={};return a.forEach((i,l)=>r[this.structuredOutputKeys[l]]=i),r}return e}predict(e,a){const r=this.execute(e,this.outputNodes);return this.addStructuredOutputNames(r)}async predictAsync(e,a){const r=await this.executeAsync(e,this.outputNodes);return this.addStructuredOutputNames(r)}normalizeInputs(e){var a;if(!(e instanceof Je)&&!Array.isArray(e)){const l=(a=this.signature)===null||a===void 0?void 0:a.inputs;if(l!=null)for(const c in l){const f=l[c];f.resourceId!=null&&(e[c]=this.resourceIdToCapturedInput[f.resourceId])}return e}e=Array.isArray(e)?e:[e];const r=Object.keys(this.resourceIdToCapturedInput).length;if(e.length+r!==this.inputNodes.length)throw new Error(`Input tensor count mismatch, the graph model has ${this.inputNodes.length-r} non-resource placeholders, while there are ${e.length} input tensors provided.`);let i=0;return this.inputNodes.reduce((l,c)=>{var f,h,p;const g=(p=(h=(f=this.signature)===null||f===void 0?void 0:f.inputs)===null||h===void 0?void 0:h[c])===null||p===void 0?void 0:p.resourceId;return g!=null?l[c]=this.resourceIdToCapturedInput[g]:l[c]=e[i++],l},{})}normalizeOutputs(e){return e=e||this.outputNodes,Array.isArray(e)?e:[e]}executeInitializerGraph(){return this.initializer==null?[]:this.initializerSignature==null?this.initializer.execute({},[]):this.initializer.execute({},Object.keys(this.initializerSignature.outputs))}async executeInitializerGraphAsync(){return this.initializer==null?[]:this.initializerSignature==null?this.initializer.executeAsync({},[]):this.initializer.executeAsync({},Object.keys(this.initializerSignature.outputs))}setResourceIdToCapturedInput(e){if(this.resourceIdToCapturedInput={},this.initializerSignature){const a=this.initializerSignature.outputs,r=Object.keys(a);for(let i=0;i<r.length;i++){const l=r[i],c=a[l];this.resourceIdToCapturedInput[c.resourceId]=e[i]}}}execute(e,a){this.resourceIdToCapturedInput==null&&this.setResourceIdToCapturedInput(this.executeInitializerGraph()),e=this.normalizeInputs(e),a=this.normalizeOutputs(a);const r=this.executor.execute(e,a);return r.length>1?r:r[0]}async executeAsync(e,a){this.resourceIdToCapturedInput==null&&this.setResourceIdToCapturedInput(await this.executeInitializerGraphAsync()),e=this.normalizeInputs(e),a=this.normalizeOutputs(a);const r=await this.executor.executeAsync(e,a);return r.length>1?r:r[0]}getIntermediateTensors(){return this.executor.getIntermediateTensors()}disposeIntermediateTensors(){this.executor.disposeIntermediateTensors()}convertTensorMapToTensorsMap(e){return Object.keys(e).reduce((a,r)=>(a[r]=[e[r]],a),{})}dispose(){this.executor.dispose(),this.initializer&&(this.initializer.dispose(),this.resourceIdToCapturedInput&&$t(this.resourceIdToCapturedInput)),this.resourceManager.dispose()}}async function H0(t,e={},a=np){if(t==null)throw new Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");e==null&&(e={}),e.fromTFHub&&typeof t=="string"&&(t=k8(t));const r=new xN(t,e,a);return await r.load(),r}function iz(t){if(t==null)throw new Error("modelUrl in loadGraphModelSync() cannot be null. Please provide model artifacts or an IOHandler that loads the model");let e;if(t instanceof Array){const[r,i]=t;if(!r)throw new Error("modelJSON must be the first element of the array");if(!i||!(i instanceof ArrayBuffer))throw new Error("An ArrayBuffer of weights must be the second element of the array");if(!("modelTopology"in r))throw new Error("Model JSON is missing 'modelTopology'");if(!("weightsManifest"in r))throw new Error("Model JSON is missing 'weightsManifest'");const l=Zl(r.weightsManifest),c=sd(r,l,i);e=tu(c)}else if("load"in t)e=t;else if("modelTopology"in t&&"weightSpecs"in t&&"weightData"in t)e=tu(t);else throw new Error("Unknown model format");const a=new xN(e);return a.load(),a}function k8(t){return t.endsWith("/")||(t=t+"/"),`${t}${E8}${T8}`}/**
    * @license
    * Copyright 2023 Google LLC. All Rights Reserved.
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    * http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    * =============================================================================
    */function su(t,e,a,r){return new(a||(a=Promise))(function(i,l){function c(p){try{h(r.next(p))}catch(g){l(g)}}function f(p){try{h(r.throw(p))}catch(g){l(g)}}function h(p){var g;p.done?i(p.value):(g=p.value,g instanceof a?g:new a(function(y){y(g)})).then(c,f)}h((r=r.apply(t,[])).next())})}function ru(t,e){var a,r,i,l,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return l={next:f(0),throw:f(1),return:f(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function f(h){return function(p){return function(g){if(a)throw new TypeError("Generator is already executing.");for(;c;)try{if(a=1,r&&(i=2&g[0]?r.return:g[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,g[1])).done)return i;switch(r=0,i&&(g=[2&g[0],i.value]),g[0]){case 0:case 1:i=g;break;case 4:return c.label++,{value:g[1],done:!1};case 5:c.label++,r=g[1],g=[0];continue;case 7:g=c.ops.pop(),c.trys.pop();continue;default:if(!(i=(i=c.trys).length>0&&i[i.length-1])&&(g[0]===6||g[0]===2)){c=0;continue}if(g[0]===3&&(!i||g[1]>i[0]&&g[1]<i[3])){c.label=g[1];break}if(g[0]===6&&c.label<i[1]){c.label=i[1],i=g;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(g);break}i[2]&&c.ops.pop(),c.trys.pop();continue}g=e.call(t,c)}catch(y){g=[6,y],r=0}finally{a=i=0}if(5&g[0])throw g[1];return{value:g[0]?g[1]:void 0,done:!0}}([h,p])}}}var _8={0:"tench, Tinca tinca",1:"goldfish, Carassius auratus",2:"great white shark, white shark, man-eater, man-eating shark, Carcharodon carcharias",3:"tiger shark, Galeocerdo cuvieri",4:"hammerhead, hammerhead shark",5:"electric ray, crampfish, numbfish, torpedo",6:"stingray",7:"cock",8:"hen",9:"ostrich, Struthio camelus",10:"brambling, Fringilla montifringilla",11:"goldfinch, Carduelis carduelis",12:"house finch, linnet, Carpodacus mexicanus",13:"junco, snowbird",14:"indigo bunting, indigo finch, indigo bird, Passerina cyanea",15:"robin, American robin, Turdus migratorius",16:"bulbul",17:"jay",18:"magpie",19:"chickadee",20:"water ouzel, dipper",21:"kite",22:"bald eagle, American eagle, Haliaeetus leucocephalus",23:"vulture",24:"great grey owl, great gray owl, Strix nebulosa",25:"European fire salamander, Salamandra salamandra",26:"common newt, Triturus vulgaris",27:"eft",28:"spotted salamander, Ambystoma maculatum",29:"axolotl, mud puppy, Ambystoma mexicanum",30:"bullfrog, Rana catesbeiana",31:"tree frog, tree-frog",32:"tailed frog, bell toad, ribbed toad, tailed toad, Ascaphus trui",33:"loggerhead, loggerhead turtle, Caretta caretta",34:"leatherback turtle, leatherback, leathery turtle, Dermochelys coriacea",35:"mud turtle",36:"terrapin",37:"box turtle, box tortoise",38:"banded gecko",39:"common iguana, iguana, Iguana iguana",40:"American chameleon, anole, Anolis carolinensis",41:"whiptail, whiptail lizard",42:"agama",43:"frilled lizard, Chlamydosaurus kingi",44:"alligator lizard",45:"Gila monster, Heloderma suspectum",46:"green lizard, Lacerta viridis",47:"African chameleon, Chamaeleo chamaeleon",48:"Komodo dragon, Komodo lizard, dragon lizard, giant lizard, Varanus komodoensis",49:"African crocodile, Nile crocodile, Crocodylus niloticus",50:"American alligator, Alligator mississipiensis",51:"triceratops",52:"thunder snake, worm snake, Carphophis amoenus",53:"ringneck snake, ring-necked snake, ring snake",54:"hognose snake, puff adder, sand viper",55:"green snake, grass snake",56:"king snake, kingsnake",57:"garter snake, grass snake",58:"water snake",59:"vine snake",60:"night snake, Hypsiglena torquata",61:"boa constrictor, Constrictor constrictor",62:"rock python, rock snake, Python sebae",63:"Indian cobra, Naja naja",64:"green mamba",65:"sea snake",66:"horned viper, cerastes, sand viper, horned asp, Cerastes cornutus",67:"diamondback, diamondback rattlesnake, Crotalus adamanteus",68:"sidewinder, horned rattlesnake, Crotalus cerastes",69:"trilobite",70:"harvestman, daddy longlegs, Phalangium opilio",71:"scorpion",72:"black and gold garden spider, Argiope aurantia",73:"barn spider, Araneus cavaticus",74:"garden spider, Aranea diademata",75:"black widow, Latrodectus mactans",76:"tarantula",77:"wolf spider, hunting spider",78:"tick",79:"centipede",80:"black grouse",81:"ptarmigan",82:"ruffed grouse, partridge, Bonasa umbellus",83:"prairie chicken, prairie grouse, prairie fowl",84:"peacock",85:"quail",86:"partridge",87:"African grey, African gray, Psittacus erithacus",88:"macaw",89:"sulphur-crested cockatoo, Kakatoe galerita, Cacatua galerita",90:"lorikeet",91:"coucal",92:"bee eater",93:"hornbill",94:"hummingbird",95:"jacamar",96:"toucan",97:"drake",98:"red-breasted merganser, Mergus serrator",99:"goose",100:"black swan, Cygnus atratus",101:"tusker",102:"echidna, spiny anteater, anteater",103:"platypus, duckbill, duckbilled platypus, duck-billed platypus, Ornithorhynchus anatinus",104:"wallaby, brush kangaroo",105:"koala, koala bear, kangaroo bear, native bear, Phascolarctos cinereus",106:"wombat",107:"jelly fish",108:"sea anemone, anemone",109:"brain coral",110:"flatworm, platyhelminth",111:"nematode, nematode worm, roundworm",112:"conch",113:"snail",114:"slug",115:"sea slug, nudibranch",116:"chiton, coat-of-mail shell, sea cradle, polyplacophore",117:"chambered nautilus, pearly nautilus, nautilus",118:"Dungeness crab, Cancer magister",119:"rock crab, Cancer irroratus",120:"fiddler crab",121:"king crab, Alaska crab, Alaskan king crab, Alaska king crab, Paralithodes camtschatica",122:"American lobster, Northern lobster, Maine lobster, Homarus americanus",123:"spiny lobster, langouste, rock lobster, crawfish, crayfish, sea crawfish",124:"crayfish, crawfish, crawdad, crawdaddy",125:"hermit crab",126:"isopod",127:"white stork, Ciconia ciconia",128:"black stork, Ciconia nigra",129:"spoonbill",130:"flamingo",131:"little blue heron, Egretta caerulea",132:"American egret, great white heron, Egretta albus",133:"bittern",134:"crane",135:"limpkin, Aramus pictus",136:"European gallinule, Porphyrio porphyrio",137:"American coot, marsh hen, mud hen, water hen, Fulica americana",138:"bustard",139:"ruddy turnstone, Arenaria interpres",140:"red-backed sandpiper, dunlin, Erolia alpina",141:"redshank, Tringa totanus",142:"dowitcher",143:"oystercatcher, oyster catcher",144:"pelican",145:"king penguin, Aptenodytes patagonica",146:"albatross, mollymawk",147:"grey whale, gray whale, devilfish, Eschrichtius gibbosus, Eschrichtius robustus",148:"killer whale, killer, orca, grampus, sea wolf, Orcinus orca",149:"dugong, Dugong dugon",150:"sea lion",151:"Chihuahua",152:"Japanese spaniel",153:"Maltese dog, Maltese terrier, Maltese",154:"Pekinese, Pekingese, Peke",155:"Shih-Tzu",156:"Blenheim spaniel",157:"papillon",158:"toy terrier",159:"Rhodesian ridgeback",160:"Afghan hound, Afghan",161:"basset, basset hound",162:"beagle",163:"bloodhound, sleuthhound",164:"bluetick",165:"black-and-tan coonhound",166:"Walker hound, Walker foxhound",167:"English foxhound",168:"redbone",169:"borzoi, Russian wolfhound",170:"Irish wolfhound",171:"Italian greyhound",172:"whippet",173:"Ibizan hound, Ibizan Podenco",174:"Norwegian elkhound, elkhound",175:"otterhound, otter hound",176:"Saluki, gazelle hound",177:"Scottish deerhound, deerhound",178:"Weimaraner",179:"Staffordshire bullterrier, Staffordshire bull terrier",180:"American Staffordshire terrier, Staffordshire terrier, American pit bull terrier, pit bull terrier",181:"Bedlington terrier",182:"Border terrier",183:"Kerry blue terrier",184:"Irish terrier",185:"Norfolk terrier",186:"Norwich terrier",187:"Yorkshire terrier",188:"wire-haired fox terrier",189:"Lakeland terrier",190:"Sealyham terrier, Sealyham",191:"Airedale, Airedale terrier",192:"cairn, cairn terrier",193:"Australian terrier",194:"Dandie Dinmont, Dandie Dinmont terrier",195:"Boston bull, Boston terrier",196:"miniature schnauzer",197:"giant schnauzer",198:"standard schnauzer",199:"Scotch terrier, Scottish terrier, Scottie",200:"Tibetan terrier, chrysanthemum dog",201:"silky terrier, Sydney silky",202:"soft-coated wheaten terrier",203:"West Highland white terrier",204:"Lhasa, Lhasa apso",205:"flat-coated retriever",206:"curly-coated retriever",207:"golden retriever",208:"Labrador retriever",209:"Chesapeake Bay retriever",210:"German short-haired pointer",211:"vizsla, Hungarian pointer",212:"English setter",213:"Irish setter, red setter",214:"Gordon setter",215:"Brittany spaniel",216:"clumber, clumber spaniel",217:"English springer, English springer spaniel",218:"Welsh springer spaniel",219:"cocker spaniel, English cocker spaniel, cocker",220:"Sussex spaniel",221:"Irish water spaniel",222:"kuvasz",223:"schipperke",224:"groenendael",225:"malinois",226:"briard",227:"kelpie",228:"komondor",229:"Old English sheepdog, bobtail",230:"Shetland sheepdog, Shetland sheep dog, Shetland",231:"collie",232:"Border collie",233:"Bouvier des Flandres, Bouviers des Flandres",234:"Rottweiler",235:"German shepherd, German shepherd dog, German police dog, alsatian",236:"Doberman, Doberman pinscher",237:"miniature pinscher",238:"Greater Swiss Mountain dog",239:"Bernese mountain dog",240:"Appenzeller",241:"EntleBucher",242:"boxer",243:"bull mastiff",244:"Tibetan mastiff",245:"French bulldog",246:"Great Dane",247:"Saint Bernard, St Bernard",248:"Eskimo dog, husky",249:"malamute, malemute, Alaskan malamute",250:"Siberian husky",251:"dalmatian, coach dog, carriage dog",252:"affenpinscher, monkey pinscher, monkey dog",253:"basenji",254:"pug, pug-dog",255:"Leonberg",256:"Newfoundland, Newfoundland dog",257:"Great Pyrenees",258:"Samoyed, Samoyede",259:"Pomeranian",260:"chow, chow chow",261:"keeshond",262:"Brabancon griffon",263:"Pembroke, Pembroke Welsh corgi",264:"Cardigan, Cardigan Welsh corgi",265:"toy poodle",266:"miniature poodle",267:"standard poodle",268:"Mexican hairless",269:"timber wolf, grey wolf, gray wolf, Canis lupus",270:"white wolf, Arctic wolf, Canis lupus tundrarum",271:"red wolf, maned wolf, Canis rufus, Canis niger",272:"coyote, prairie wolf, brush wolf, Canis latrans",273:"dingo, warrigal, warragal, Canis dingo",274:"dhole, Cuon alpinus",275:"African hunting dog, hyena dog, Cape hunting dog, Lycaon pictus",276:"hyena, hyaena",277:"red fox, Vulpes vulpes",278:"kit fox, Vulpes macrotis",279:"Arctic fox, white fox, Alopex lagopus",280:"grey fox, gray fox, Urocyon cinereoargenteus",281:"tabby, tabby cat",282:"tiger cat",283:"Persian cat",284:"Siamese cat, Siamese",285:"Egyptian cat",286:"cougar, puma, catamount, mountain lion, painter, panther, Felis concolor",287:"lynx, catamount",288:"leopard, Panthera pardus",289:"snow leopard, ounce, Panthera uncia",290:"jaguar, panther, Panthera onca, Felis onca",291:"lion, king of beasts, Panthera leo",292:"tiger, Panthera tigris",293:"cheetah, chetah, Acinonyx jubatus",294:"brown bear, bruin, Ursus arctos",295:"American black bear, black bear, Ursus americanus, Euarctos americanus",296:"ice bear, polar bear, Ursus Maritimus, Thalarctos maritimus",297:"sloth bear, Melursus ursinus, Ursus ursinus",298:"mongoose",299:"meerkat, mierkat",300:"tiger beetle",301:"ladybug, ladybeetle, lady beetle, ladybird, ladybird beetle",302:"ground beetle, carabid beetle",303:"long-horned beetle, longicorn, longicorn beetle",304:"leaf beetle, chrysomelid",305:"dung beetle",306:"rhinoceros beetle",307:"weevil",308:"fly",309:"bee",310:"ant, emmet, pismire",311:"grasshopper, hopper",312:"cricket",313:"walking stick, walkingstick, stick insect",314:"cockroach, roach",315:"mantis, mantid",316:"cicada, cicala",317:"leafhopper",318:"lacewing, lacewing fly",319:"dragonfly, darning needle, devil's darning needle, sewing needle, snake feeder, snake doctor, mosquito hawk, skeeter hawk",320:"damselfly",321:"admiral",322:"ringlet, ringlet butterfly",323:"monarch, monarch butterfly, milkweed butterfly, Danaus plexippus",324:"cabbage butterfly",325:"sulphur butterfly, sulfur butterfly",326:"lycaenid, lycaenid butterfly",327:"starfish, sea star",328:"sea urchin",329:"sea cucumber, holothurian",330:"wood rabbit, cottontail, cottontail rabbit",331:"hare",332:"Angora, Angora rabbit",333:"hamster",334:"porcupine, hedgehog",335:"fox squirrel, eastern fox squirrel, Sciurus niger",336:"marmot",337:"beaver",338:"guinea pig, Cavia cobaya",339:"sorrel",340:"zebra",341:"hog, pig, grunter, squealer, Sus scrofa",342:"wild boar, boar, Sus scrofa",343:"warthog",344:"hippopotamus, hippo, river horse, Hippopotamus amphibius",345:"ox",346:"water buffalo, water ox, Asiatic buffalo, Bubalus bubalis",347:"bison",348:"ram, tup",349:"bighorn, bighorn sheep, cimarron, Rocky Mountain bighorn, Rocky Mountain sheep, Ovis canadensis",350:"ibex, Capra ibex",351:"hartebeest",352:"impala, Aepyceros melampus",353:"gazelle",354:"Arabian camel, dromedary, Camelus dromedarius",355:"llama",356:"weasel",357:"mink",358:"polecat, fitch, foulmart, foumart, Mustela putorius",359:"black-footed ferret, ferret, Mustela nigripes",360:"otter",361:"skunk, polecat, wood pussy",362:"badger",363:"armadillo",364:"three-toed sloth, ai, Bradypus tridactylus",365:"orangutan, orang, orangutang, Pongo pygmaeus",366:"gorilla, Gorilla gorilla",367:"chimpanzee, chimp, Pan troglodytes",368:"gibbon, Hylobates lar",369:"siamang, Hylobates syndactylus, Symphalangus syndactylus",370:"guenon, guenon monkey",371:"patas, hussar monkey, Erythrocebus patas",372:"baboon",373:"macaque",374:"langur",375:"colobus, colobus monkey",376:"proboscis monkey, Nasalis larvatus",377:"marmoset",378:"capuchin, ringtail, Cebus capucinus",379:"howler monkey, howler",380:"titi, titi monkey",381:"spider monkey, Ateles geoffroyi",382:"squirrel monkey, Saimiri sciureus",383:"Madagascar cat, ring-tailed lemur, Lemur catta",384:"indri, indris, Indri indri, Indri brevicaudatus",385:"Indian elephant, Elephas maximus",386:"African elephant, Loxodonta africana",387:"lesser panda, red panda, panda, bear cat, cat bear, Ailurus fulgens",388:"giant panda, panda, panda bear, coon bear, Ailuropoda melanoleuca",389:"barracouta, snoek",390:"eel",391:"coho, cohoe, coho salmon, blue jack, silver salmon, Oncorhynchus kisutch",392:"rock beauty, Holocanthus tricolor",393:"anemone fish",394:"sturgeon",395:"gar, garfish, garpike, billfish, Lepisosteus osseus",396:"lionfish",397:"puffer, pufferfish, blowfish, globefish",398:"abacus",399:"abaya",400:"academic gown, academic robe, judge's robe",401:"accordion, piano accordion, squeeze box",402:"acoustic guitar",403:"aircraft carrier, carrier, flattop, attack aircraft carrier",404:"airliner",405:"airship, dirigible",406:"altar",407:"ambulance",408:"amphibian, amphibious vehicle",409:"analog clock",410:"apiary, bee house",411:"apron",412:"ashcan, trash can, garbage can, wastebin, ash bin, ash-bin, ashbin, dustbin, trash barrel, trash bin",413:"assault rifle, assault gun",414:"backpack, back pack, knapsack, packsack, rucksack, haversack",415:"bakery, bakeshop, bakehouse",416:"balance beam, beam",417:"balloon",418:"ballpoint, ballpoint pen, ballpen, Biro",419:"Band Aid",420:"banjo",421:"bannister, banister, balustrade, balusters, handrail",422:"barbell",423:"barber chair",424:"barbershop",425:"barn",426:"barometer",427:"barrel, cask",428:"barrow, garden cart, lawn cart, wheelbarrow",429:"baseball",430:"basketball",431:"bassinet",432:"bassoon",433:"bathing cap, swimming cap",434:"bath towel",435:"bathtub, bathing tub, bath, tub",436:"beach wagon, station wagon, wagon, estate car, beach waggon, station waggon, waggon",437:"beacon, lighthouse, beacon light, pharos",438:"beaker",439:"bearskin, busby, shako",440:"beer bottle",441:"beer glass",442:"bell cote, bell cot",443:"bib",444:"bicycle-built-for-two, tandem bicycle, tandem",445:"bikini, two-piece",446:"binder, ring-binder",447:"binoculars, field glasses, opera glasses",448:"birdhouse",449:"boathouse",450:"bobsled, bobsleigh, bob",451:"bolo tie, bolo, bola tie, bola",452:"bonnet, poke bonnet",453:"bookcase",454:"bookshop, bookstore, bookstall",455:"bottlecap",456:"bow",457:"bow tie, bow-tie, bowtie",458:"brass, memorial tablet, plaque",459:"brassiere, bra, bandeau",460:"breakwater, groin, groyne, mole, bulwark, seawall, jetty",461:"breastplate, aegis, egis",462:"broom",463:"bucket, pail",464:"buckle",465:"bulletproof vest",466:"bullet train, bullet",467:"butcher shop, meat market",468:"cab, hack, taxi, taxicab",469:"caldron, cauldron",470:"candle, taper, wax light",471:"cannon",472:"canoe",473:"can opener, tin opener",474:"cardigan",475:"car mirror",476:"carousel, carrousel, merry-go-round, roundabout, whirligig",477:"carpenter's kit, tool kit",478:"carton",479:"car wheel",480:"cash machine, cash dispenser, automated teller machine, automatic teller machine, automated teller, automatic teller, ATM",481:"cassette",482:"cassette player",483:"castle",484:"catamaran",485:"CD player",486:"cello, violoncello",487:"cellular telephone, cellular phone, cellphone, cell, mobile phone",488:"chain",489:"chainlink fence",490:"chain mail, ring mail, mail, chain armor, chain armour, ring armor, ring armour",491:"chain saw, chainsaw",492:"chest",493:"chiffonier, commode",494:"chime, bell, gong",495:"china cabinet, china closet",496:"Christmas stocking",497:"church, church building",498:"cinema, movie theater, movie theatre, movie house, picture palace",499:"cleaver, meat cleaver, chopper",500:"cliff dwelling",501:"cloak",502:"clog, geta, patten, sabot",503:"cocktail shaker",504:"coffee mug",505:"coffeepot",506:"coil, spiral, volute, whorl, helix",507:"combination lock",508:"computer keyboard, keypad",509:"confectionery, confectionary, candy store",510:"container ship, containership, container vessel",511:"convertible",512:"corkscrew, bottle screw",513:"cornet, horn, trumpet, trump",514:"cowboy boot",515:"cowboy hat, ten-gallon hat",516:"cradle",517:"crane",518:"crash helmet",519:"crate",520:"crib, cot",521:"Crock Pot",522:"croquet ball",523:"crutch",524:"cuirass",525:"dam, dike, dyke",526:"desk",527:"desktop computer",528:"dial telephone, dial phone",529:"diaper, nappy, napkin",530:"digital clock",531:"digital watch",532:"dining table, board",533:"dishrag, dishcloth",534:"dishwasher, dish washer, dishwashing machine",535:"disk brake, disc brake",536:"dock, dockage, docking facility",537:"dogsled, dog sled, dog sleigh",538:"dome",539:"doormat, welcome mat",540:"drilling platform, offshore rig",541:"drum, membranophone, tympan",542:"drumstick",543:"dumbbell",544:"Dutch oven",545:"electric fan, blower",546:"electric guitar",547:"electric locomotive",548:"entertainment center",549:"envelope",550:"espresso maker",551:"face powder",552:"feather boa, boa",553:"file, file cabinet, filing cabinet",554:"fireboat",555:"fire engine, fire truck",556:"fire screen, fireguard",557:"flagpole, flagstaff",558:"flute, transverse flute",559:"folding chair",560:"football helmet",561:"forklift",562:"fountain",563:"fountain pen",564:"four-poster",565:"freight car",566:"French horn, horn",567:"frying pan, frypan, skillet",568:"fur coat",569:"garbage truck, dustcart",570:"gasmask, respirator, gas helmet",571:"gas pump, gasoline pump, petrol pump, island dispenser",572:"goblet",573:"go-kart",574:"golf ball",575:"golfcart, golf cart",576:"gondola",577:"gong, tam-tam",578:"gown",579:"grand piano, grand",580:"greenhouse, nursery, glasshouse",581:"grille, radiator grille",582:"grocery store, grocery, food market, market",583:"guillotine",584:"hair slide",585:"hair spray",586:"half track",587:"hammer",588:"hamper",589:"hand blower, blow dryer, blow drier, hair dryer, hair drier",590:"hand-held computer, hand-held microcomputer",591:"handkerchief, hankie, hanky, hankey",592:"hard disc, hard disk, fixed disk",593:"harmonica, mouth organ, harp, mouth harp",594:"harp",595:"harvester, reaper",596:"hatchet",597:"holster",598:"home theater, home theatre",599:"honeycomb",600:"hook, claw",601:"hoopskirt, crinoline",602:"horizontal bar, high bar",603:"horse cart, horse-cart",604:"hourglass",605:"iPod",606:"iron, smoothing iron",607:"jack-o'-lantern",608:"jean, blue jean, denim",609:"jeep, landrover",610:"jersey, T-shirt, tee shirt",611:"jigsaw puzzle",612:"jinrikisha, ricksha, rickshaw",613:"joystick",614:"kimono",615:"knee pad",616:"knot",617:"lab coat, laboratory coat",618:"ladle",619:"lampshade, lamp shade",620:"laptop, laptop computer",621:"lawn mower, mower",622:"lens cap, lens cover",623:"letter opener, paper knife, paperknife",624:"library",625:"lifeboat",626:"lighter, light, igniter, ignitor",627:"limousine, limo",628:"liner, ocean liner",629:"lipstick, lip rouge",630:"Loafer",631:"lotion",632:"loudspeaker, speaker, speaker unit, loudspeaker system, speaker system",633:"loupe, jeweler's loupe",634:"lumbermill, sawmill",635:"magnetic compass",636:"mailbag, postbag",637:"mailbox, letter box",638:"maillot",639:"maillot, tank suit",640:"manhole cover",641:"maraca",642:"marimba, xylophone",643:"mask",644:"matchstick",645:"maypole",646:"maze, labyrinth",647:"measuring cup",648:"medicine chest, medicine cabinet",649:"megalith, megalithic structure",650:"microphone, mike",651:"microwave, microwave oven",652:"military uniform",653:"milk can",654:"minibus",655:"miniskirt, mini",656:"minivan",657:"missile",658:"mitten",659:"mixing bowl",660:"mobile home, manufactured home",661:"Model T",662:"modem",663:"monastery",664:"monitor",665:"moped",666:"mortar",667:"mortarboard",668:"mosque",669:"mosquito net",670:"motor scooter, scooter",671:"mountain bike, all-terrain bike, off-roader",672:"mountain tent",673:"mouse, computer mouse",674:"mousetrap",675:"moving van",676:"muzzle",677:"nail",678:"neck brace",679:"necklace",680:"nipple",681:"notebook, notebook computer",682:"obelisk",683:"oboe, hautboy, hautbois",684:"ocarina, sweet potato",685:"odometer, hodometer, mileometer, milometer",686:"oil filter",687:"organ, pipe organ",688:"oscilloscope, scope, cathode-ray oscilloscope, CRO",689:"overskirt",690:"oxcart",691:"oxygen mask",692:"packet",693:"paddle, boat paddle",694:"paddlewheel, paddle wheel",695:"padlock",696:"paintbrush",697:"pajama, pyjama, pj's, jammies",698:"palace",699:"panpipe, pandean pipe, syrinx",700:"paper towel",701:"parachute, chute",702:"parallel bars, bars",703:"park bench",704:"parking meter",705:"passenger car, coach, carriage",706:"patio, terrace",707:"pay-phone, pay-station",708:"pedestal, plinth, footstall",709:"pencil box, pencil case",710:"pencil sharpener",711:"perfume, essence",712:"Petri dish",713:"photocopier",714:"pick, plectrum, plectron",715:"pickelhaube",716:"picket fence, paling",717:"pickup, pickup truck",718:"pier",719:"piggy bank, penny bank",720:"pill bottle",721:"pillow",722:"ping-pong ball",723:"pinwheel",724:"pirate, pirate ship",725:"pitcher, ewer",726:"plane, carpenter's plane, woodworking plane",727:"planetarium",728:"plastic bag",729:"plate rack",730:"plow, plough",731:"plunger, plumber's helper",732:"Polaroid camera, Polaroid Land camera",733:"pole",734:"police van, police wagon, paddy wagon, patrol wagon, wagon, black Maria",735:"poncho",736:"pool table, billiard table, snooker table",737:"pop bottle, soda bottle",738:"pot, flowerpot",739:"potter's wheel",740:"power drill",741:"prayer rug, prayer mat",742:"printer",743:"prison, prison house",744:"projectile, missile",745:"projector",746:"puck, hockey puck",747:"punching bag, punch bag, punching ball, punchball",748:"purse",749:"quill, quill pen",750:"quilt, comforter, comfort, puff",751:"racer, race car, racing car",752:"racket, racquet",753:"radiator",754:"radio, wireless",755:"radio telescope, radio reflector",756:"rain barrel",757:"recreational vehicle, RV, R.V.",758:"reel",759:"reflex camera",760:"refrigerator, icebox",761:"remote control, remote",762:"restaurant, eating house, eating place, eatery",763:"revolver, six-gun, six-shooter",764:"rifle",765:"rocking chair, rocker",766:"rotisserie",767:"rubber eraser, rubber, pencil eraser",768:"rugby ball",769:"rule, ruler",770:"running shoe",771:"safe",772:"safety pin",773:"saltshaker, salt shaker",774:"sandal",775:"sarong",776:"sax, saxophone",777:"scabbard",778:"scale, weighing machine",779:"school bus",780:"schooner",781:"scoreboard",782:"screen, CRT screen",783:"screw",784:"screwdriver",785:"seat belt, seatbelt",786:"sewing machine",787:"shield, buckler",788:"shoe shop, shoe-shop, shoe store",789:"shoji",790:"shopping basket",791:"shopping cart",792:"shovel",793:"shower cap",794:"shower curtain",795:"ski",796:"ski mask",797:"sleeping bag",798:"slide rule, slipstick",799:"sliding door",800:"slot, one-armed bandit",801:"snorkel",802:"snowmobile",803:"snowplow, snowplough",804:"soap dispenser",805:"soccer ball",806:"sock",807:"solar dish, solar collector, solar furnace",808:"sombrero",809:"soup bowl",810:"space bar",811:"space heater",812:"space shuttle",813:"spatula",814:"speedboat",815:"spider web, spider's web",816:"spindle",817:"sports car, sport car",818:"spotlight, spot",819:"stage",820:"steam locomotive",821:"steel arch bridge",822:"steel drum",823:"stethoscope",824:"stole",825:"stone wall",826:"stopwatch, stop watch",827:"stove",828:"strainer",829:"streetcar, tram, tramcar, trolley, trolley car",830:"stretcher",831:"studio couch, day bed",832:"stupa, tope",833:"submarine, pigboat, sub, U-boat",834:"suit, suit of clothes",835:"sundial",836:"sunglass",837:"sunglasses, dark glasses, shades",838:"sunscreen, sunblock, sun blocker",839:"suspension bridge",840:"swab, swob, mop",841:"sweatshirt",842:"swimming trunks, bathing trunks",843:"swing",844:"switch, electric switch, electrical switch",845:"syringe",846:"table lamp",847:"tank, army tank, armored combat vehicle, armoured combat vehicle",848:"tape player",849:"teapot",850:"teddy, teddy bear",851:"television, television system",852:"tennis ball",853:"thatch, thatched roof",854:"theater curtain, theatre curtain",855:"thimble",856:"thresher, thrasher, threshing machine",857:"throne",858:"tile roof",859:"toaster",860:"tobacco shop, tobacconist shop, tobacconist",861:"toilet seat",862:"torch",863:"totem pole",864:"tow truck, tow car, wrecker",865:"toyshop",866:"tractor",867:"trailer truck, tractor trailer, trucking rig, rig, articulated lorry, semi",868:"tray",869:"trench coat",870:"tricycle, trike, velocipede",871:"trimaran",872:"tripod",873:"triumphal arch",874:"trolleybus, trolley coach, trackless trolley",875:"trombone",876:"tub, vat",877:"turnstile",878:"typewriter keyboard",879:"umbrella",880:"unicycle, monocycle",881:"upright, upright piano",882:"vacuum, vacuum cleaner",883:"vase",884:"vault",885:"velvet",886:"vending machine",887:"vestment",888:"viaduct",889:"violin, fiddle",890:"volleyball",891:"waffle iron",892:"wall clock",893:"wallet, billfold, notecase, pocketbook",894:"wardrobe, closet, press",895:"warplane, military plane",896:"washbasin, handbasin, washbowl, lavabo, wash-hand basin",897:"washer, automatic washer, washing machine",898:"water bottle",899:"water jug",900:"water tower",901:"whiskey jug",902:"whistle",903:"wig",904:"window screen",905:"window shade",906:"Windsor tie",907:"wine bottle",908:"wing",909:"wok",910:"wooden spoon",911:"wool, woolen, woollen",912:"worm fence, snake fence, snake-rail fence, Virginia fence",913:"wreck",914:"yawl",915:"yurt",916:"web site, website, internet site, site",917:"comic book",918:"crossword puzzle, crossword",919:"street sign",920:"traffic light, traffic signal, stoplight",921:"book jacket, dust cover, dust jacket, dust wrapper",922:"menu",923:"plate",924:"guacamole",925:"consomme",926:"hot pot, hotpot",927:"trifle",928:"ice cream, icecream",929:"ice lolly, lolly, lollipop, popsicle",930:"French loaf",931:"bagel, beigel",932:"pretzel",933:"cheeseburger",934:"hotdog, hot dog, red hot",935:"mashed potato",936:"head cabbage",937:"broccoli",938:"cauliflower",939:"zucchini, courgette",940:"spaghetti squash",941:"acorn squash",942:"butternut squash",943:"cucumber, cuke",944:"artichoke, globe artichoke",945:"bell pepper",946:"cardoon",947:"mushroom",948:"Granny Smith",949:"strawberry",950:"orange",951:"lemon",952:"fig",953:"pineapple, ananas",954:"banana",955:"jackfruit, jak, jack",956:"custard apple",957:"pomegranate",958:"hay",959:"carbonara",960:"chocolate sauce, chocolate syrup",961:"dough",962:"meat loaf, meatloaf",963:"pizza, pizza pie",964:"potpie",965:"burrito",966:"red wine",967:"espresso",968:"cup",969:"eggnog",970:"alp",971:"bubble",972:"cliff, drop, drop-off",973:"coral reef",974:"geyser",975:"lakeside, lakeshore",976:"promontory, headland, head, foreland",977:"sandbar, sand bar",978:"seashore, coast, seacoast, sea-coast",979:"valley, vale",980:"volcano",981:"ballplayer, baseball player",982:"groom, bridegroom",983:"scuba diver",984:"rapeseed",985:"daisy",986:"yellow lady's slipper, yellow lady-slipper, Cypripedium calceolus, Cypripedium parviflorum",987:"corn",988:"acorn",989:"hip, rose hip, rosehip",990:"buckeye, horse chestnut, conker",991:"coral fungus",992:"agaric",993:"gyromitra",994:"stinkhorn, carrion fungus",995:"earthstar",996:"hen-of-the-woods, hen of the woods, Polyporus frondosus, Grifola frondosa",997:"bolete",998:"ear, spike, capitulum",999:"toilet tissue, toilet paper, bathroom tissue"},$a=224,A8={"1.00":"module_apply_default/MobilenetV1/Logits/global_pool","2.00":"module_apply_default/MobilenetV2/Logits/AvgPool"},gr={"1.00":{.25:{url:"https://tfhub.dev/google/imagenet/mobilenet_v1_025_224/classification/1",inputRange:[0,1]},"0.50":{url:"https://tfhub.dev/google/imagenet/mobilenet_v1_050_224/classification/1",inputRange:[0,1]},.75:{url:"https://tfhub.dev/google/imagenet/mobilenet_v1_075_224/classification/1",inputRange:[0,1]},"1.00":{url:"https://tfhub.dev/google/imagenet/mobilenet_v1_100_224/classification/1",inputRange:[0,1]}},"2.00":{"0.50":{url:"https://tfhub.dev/google/imagenet/mobilenet_v2_050_224/classification/2",inputRange:[0,1]},.75:{url:"https://tfhub.dev/google/imagenet/mobilenet_v2_075_224/classification/2",inputRange:[0,1]},"1.00":{url:"https://tfhub.dev/google/imagenet/mobilenet_v2_100_224/classification/2",inputRange:[0,1]}}};function O8(t){return t===void 0&&(t={version:1,alpha:1}),su(this,void 0,void 0,function(){var e,a,r,i,l,c,f;return ru(this,function(h){switch(h.label){case 0:if(eR==null)throw new Error("Cannot find TensorFlow.js. If you are using a <script> tag, please also include @tensorflow/tfjs on the page before using this model.");if(e=t.version.toFixed(2),a=t.alpha?t.alpha.toFixed(2):"",r=-1,i=1,t.modelUrl==null){if(!(e in gr))throw new Error("Invalid version of MobileNet. Valid versions are: "+Object.keys(gr));if(!(a in gr[e]))throw new Error("MobileNet constructed with invalid alpha "+t.alpha+". Valid multipliers for this version are: "+Object.keys(gr[e])+".");c=gr[e][a].inputRange,r=c[0],i=c[1]}return t.inputRange!=null&&(f=t.inputRange,r=f[0],i=f[1]),[4,(l=new $8(e,a,t.modelUrl,r,i)).load()];case 1:return h.sent(),[2,l]}})})}var $8=function(){function t(e,a,r,i,l){i===void 0&&(i=-1),l===void 0&&(l=1),this.version=e,this.alpha=a,this.modelUrl=r,this.inputMin=i,this.inputMax=l,this.normalizationConstant=(l-i)/255}return t.prototype.load=function(){return su(this,void 0,void 0,function(){var e,a,r,i,l=this;return ru(this,function(c){switch(c.label){case 0:return this.modelUrl?(e=this,[4,H0(this.modelUrl)]):[3,2];case 1:return e.model=c.sent(),[3,4];case 2:return a=gr[this.version][this.alpha].url,r=this,[4,H0(a,{fromTFHub:!0})];case 3:r.model=c.sent(),c.label=4;case 4:return[4,(i=Re(function(){return l.model.predict(Fa([1,$a,$a,3]))})).data()];case 5:return c.sent(),i.dispose(),[2]}})})},t.prototype.infer=function(e,a){var r=this;return a===void 0&&(a=!1),Re(function(){e instanceof Je||(e=lN(e));var i=be(le(He(e,"float32"),r.normalizationConstant),r.inputMin),l=i;(e.shape[0]!==$a||e.shape[1]!==$a)&&(l=Yd.resizeBilinear(i,[$a,$a],!0));var c,f=ee(l,[-1,$a,$a,3]);if(a){var h=A8[r.version],p=r.model.execute(f,h);c=mo(p,[1,2])}else{var g=r.model.predict(f);c=Be(g,[0,1],[-1,1e3])}return c})},t.prototype.classify=function(e,a){return a===void 0&&(a=3),su(this,void 0,void 0,function(){var r,i;return ru(this,function(l){switch(l.label){case 0:return[4,D8(r=this.infer(e),a)];case 1:return i=l.sent(),r.dispose(),[2,i]}})})},t}();function D8(t,e){return su(this,void 0,void 0,function(){var a,r,i,l,c,f,h;return ru(this,function(p){switch(p.label){case 0:return[4,(a=Ld(t)).data()];case 1:for(r=p.sent(),a.dispose(),i=[],h=0;h<r.length;h++)i.push({value:r[h],index:h});for(i.sort(function(g,y){return y.value-g.value}),l=new Float32Array(e),c=new Int32Array(e),h=0;h<e;h++)l[h]=i[h].value,c[h]=i[h].index;for(f=[],h=0;h<c.length;h++)f.push({className:_8[c[h]],probability:l[h]});return[2,f]}})})}let nh=null,ah=null,Ih=null,hs=null,TN=null;const iu={classification:"idle",detection:"idle"},Lh=new Set,Sr=(t,e)=>{iu[t]!==e&&(iu[t]=e,R8())},R8=()=>{Lh.forEach(t=>t({...iu}))},C8=t=>(Lh.add(t),t({...iu}),()=>{Lh.delete(t)}),z8=()=>Ih,EN=async()=>{var t;if(!hs){console.log("Dynamically loading TensorFlow.js..."),hs=await zi(()=>import("./index-CEbOeyc0.js"),[]),TN=await zi(()=>import("./coco-ssd.es2017.esm.min-BIrYAgpL.js").then(e=>e.c),[]),await zi(()=>import("./index-DvU0gVLJ.js"),__vite__mapDeps([0,1,2])),await zi(()=>import("./index-CfaO2VPq.js"),__vite__mapDeps([3,2])),await zi(()=>import("./index-38BOA9ll.js"),__vite__mapDeps([4,1,2]));try{await hs.setBackend("webgpu"),console.log("Using WebGPU backend for TensorFlow.js")}catch(e){console.warn("WebGPU backend not available, falling back to WASM.",e);try{await hs.setBackend("wasm"),console.log("Using WASM backend for TensorFlow.js")}catch(a){console.warn("WASM backend not available, falling back to WebGL.",a),await hs.setBackend("webgl")}}await hs.ready(),Ih=(t=hs.getBackend())==null?void 0:t.toUpperCase(),console.log(`TensorFlow.js backend ready (${Ih}).`)}},kN=()=>(nh||(nh=(async()=>{try{Sr("classification","loading"),await EN(),console.log("Loading MobileNet classification model...");const t=await O8();return console.log("MobileNet model loaded successfully."),Sr("classification","loaded"),t}catch(t){throw console.error("Failed to load classification model:",t),Sr("classification","error"),t}})()),nh),_N=()=>(ah||(ah=(async()=>{try{Sr("detection","loading"),await EN(),console.log("Loading COCO-SSD object detection model...");const t=await TN.load();return console.log("COCO-SSD model loaded successfully."),Sr("detection","loaded"),t}catch(t){throw console.error("Failed to load detection model:",t),Sr("detection","error"),t}})()),ah),j8=()=>{console.log("Preloading AI models..."),kN(),_N()},AN=t=>new Promise((e,a)=>{const r=new Image;r.onload=()=>e(r),r.onerror=i=>a(i),r.src=t}),M8=async t=>{try{const e=await kN(),a=await AN(t);return(await e.classify(a)).map(i=>({label:i.className.split(", ")[0],score:i.probability}))}catch(e){throw console.error("Error during image classification with MobileNet:",e),e}},I8=async t=>{try{const e=await _N(),a=await AN(t);return(await e.detect(a)).map(i=>({label:i.class,score:i.score}))}catch(e){throw console.error("Error during object detection with COCO-SSD:",e),e}};async function L8(t,e){const a=e.split("/"),r=a.pop();let i=t;if(!r)return!1;try{for(const l of a)i=await i.getDirectoryHandle(l,{create:!1});return await i.removeEntry(r),!0}catch(l){return console.error(`Failed to delete file ${e}:`,l),!1}}const B8=t=>{const[e,a]=de.useState(new Map),[r,i]=de.useState("Ready to sort some photos! 🥳"),[l,c]=de.useState(!1),[f,h]=de.useState({processed:0,total:0}),[p,g]=de.useState(!0),[y,v]=de.useState(null),[S,k]=de.useState(!1),[$,A]=de.useState({classification:"idle",detection:"idle"}),M=de.useRef(null),X=de.useRef(e),z=de.useRef(t);de.useEffect(()=>{X.current=e},[e]),de.useEffect(()=>{z.current=t},[t]),de.useEffect(()=>{window.showDirectoryPicker||(g(!1),i("Browser not supported. Use Chrome or Edge for directory access."),console.warn("File System Access API (`showDirectoryPicker`) is not supported in this browser."))},[]),de.useEffect(()=>{j8();const P=C8(A);return()=>P()},[]);const{allAvailableClassificationLabels:I,allAvailableDetectionLabels:V,allAvailableLabels:Z}=de.useMemo(()=>{const P=new Set,Q=new Set;for(const O of e.values())(O.status===Ne.ANALYZED||O.status===Ne.UNCATEGORIZED)&&(O.classifications.forEach(B=>P.add(B.label.toLowerCase())),O.detections.forEach(B=>Q.add(B.label.toLowerCase())));const oe=new Set([...P,...Q]);return{allAvailableClassificationLabels:Array.from(P).sort(),allAvailableDetectionLabels:Array.from(Q).sort(),allAvailableLabels:Array.from(oe).sort()}},[e]),re=de.useMemo(()=>Array.from(e.values()).filter(P=>P.selected),[e]);de.useEffect(()=>{re.length===0&&S&&k(!1)},[re.length,S]),de.useEffect(()=>{if(l&&f.total>0){const{processed:P,total:Q}=f;Q>0&&P<Q?i(`Analyzing... (${P}/${Q})`):P===Q&&Q>0&&(c(!1),i(`Analysis complete! ${Q} photos ready. ✅`))}},[f,l]);const ie=de.useCallback((P,Q)=>{if(!Q||Q.length===0)return!1;for(const oe of Q){const O=P.find(B=>B.label.toLowerCase().includes(oe.label.toLowerCase()));if(O&&O.score*100>=oe.confidence)return!0}return!1},[]),F=de.useCallback(async(P,Q)=>{a(oe=>new Map(oe).set(P,{...oe.get(P),status:Ne.ANALYZING}));try{const[oe,O]=await Promise.all([M8(Q),I8(Q)]);y||v(z8());const B=z.current.unknownThreshold??10,ae=oe.length>0&&oe.every(ke=>ke.score*100<B),se=oe.length===0,ce=ae||se;a(ke=>{const we=new Map(ke),xt=we.get(P);if(xt){const Xe=ce?Ne.UNCATEGORIZED:Ne.ANALYZED,zt={...xt,status:Xe,classifications:oe,detections:O};if(zt.status===Ne.ANALYZED&&z.current.autoApplyRules){const zr=ie(zt.classifications,z.current.classificationRules),As=ie(zt.detections,z.current.detectionRules);(zr||As)&&(zt.selected=!0)}we.set(P,zt)}return we})}catch(oe){console.error(`Failed to analyze ${P}:`,oe),a(O=>new Map(O).set(P,{...O.get(P),status:Ne.ERROR,classifications:[],detections:[]}))}finally{h(oe=>({...oe,processed:oe.processed+1}))}},[ie,y]),U=de.useCallback(async()=>{if(!p){console.warn("Attempted to load photos, but the File System Access API is not supported.");return}try{const P=await window.showDirectoryPicker();M.current=P,c(!0),i("Scanning directory..."),a(new Map),k(!1);const Q=[];async function oe(B,ae){for await(const se of B.values()){const ce=ae?`${ae}/${se.name}`:se.name;se.kind==="file"&&se.name.match(/\.(jpg|jpeg|png|gif|webp)$/i)?Q.push({path:ce,handle:se}):se.kind==="directory"&&await oe(se,ce)}}if(await oe(P,""),Q.length===0){i("No photos found in this directory. Try another one!"),c(!1);return}i(`Found ${Q.length} photos. Loading previews...`),h({processed:0,total:Q.length});const O=new Map;for(const{path:B,handle:ae}of Q){const se=await ae.getFile(),ce=URL.createObjectURL(se);O.set(B,{id:B,binary:"",objectURL:ce,status:Ne.QUEUED,classifications:[],detections:[],selected:!1})}a(O);for(const{path:B,handle:ae}of Q){const se=await ae.getFile(),ce=new FileReader;ce.onload=()=>{const ke=ce.result;F(B,ke)},ce.readAsDataURL(se)}}catch(P){P.name==="AbortError"?i("Directory selection cancelled."):(console.error("Error loading directory:",P),i("Could not load directory. Check console for details.")),c(!1)}},[F,p]),_=de.useCallback(P=>{a(Q=>{const oe=new Map(Q),O=oe.get(P);return O&&oe.set(P,{...O,selected:!O.selected}),oe})},[]),te=de.useCallback(()=>{(re.length>0||S)&&k(P=>!P)},[re.length,S]),ue=de.useCallback(async()=>{if(re.length===0||!M.current)return;const P=[...re];if(!window.confirm(`Are you sure you want to permanently delete ${P.length} photo(s)? This action cannot be undone.`))return;i(`Deleting ${P.length} photos...`);const oe=new Map(X.current);P.forEach(B=>oe.delete(B.id)),a(oe);let O=0;await Promise.all(P.map(async B=>{await L8(M.current,B.id)&&(URL.revokeObjectURL(B.objectURL),O++)})),O===P.length?i(`Successfully deleted ${O} photos. ✅`):i(`Deleted ${O} of ${P.length} photos. Some deletions failed.`)},[re]),pe=de.useCallback(()=>{const P=Array.from(X.current.values()).filter(B=>B.status===Ne.ANALYZED);if(P.length===0){i("No analyzed photos to apply rules to.");return}const Q=[];for(const B of P){const ae=ie(B.classifications,z.current.classificationRules),se=ie(B.detections,z.current.detectionRules);(ae||se)&&Q.push(B.id)}if(Q.length===0){i("No photos matched your rules. ✨");return}let oe=0;const O=new Map(X.current);if(Q.forEach(B=>{const ae=O.get(B);ae&&!ae.selected&&(O.set(B,{...ae,selected:!0}),oe++)}),a(O),oe>0)i(`Selected ${oe} new photo${oe===1?"":"s"} based on your rules.`);else{const B=Q.length===1?"":"s",ae=Q.length===1?"was":"were";i(`All ${Q.length} photo${B} matching your rules ${ae} already selected.`)}},[ie]),fe=de.useCallback(P=>{let Q=Array.from(X.current.values()).filter(B=>B.status===Ne.ANALYZED);if(P.trim()){const B=P.toLowerCase().trim();Q=Q.filter(ae=>ae.classifications.some(se=>se.label.toLowerCase().includes(B))||ae.detections.some(se=>se.label.toLowerCase().includes(B)))}if(Q.length===0){i("No photos match the current criteria to select.");return}let oe=0;const O=new Map(X.current);Q.forEach(B=>{B.selected||(O.set(B.id,{...B,selected:!0}),oe++)}),a(O),oe>0?i(`Selected ${oe} new photo${oe===1?"":"s"}.`):i("All matching photos were already selected.")},[]),G=de.useCallback(P=>{let Q=Array.from(X.current.values()).filter(B=>B.selected);if(Q.length===0){i("No photos are currently selected.");return}if(P.trim()){const B=P.toLowerCase().trim();Q=Q.filter(ae=>ae.status===Ne.ANALYZED&&(ae.classifications.some(se=>se.label.toLowerCase().includes(B))||ae.detections.some(se=>se.label.toLowerCase().includes(B))))}if(Q.length===0){const B=P.trim()?"No selected photos match the current filter.":"No photos are currently selected.";i(B);return}const oe=new Map(X.current);Q.forEach(B=>{oe.set(B.id,{...B,selected:!1})}),a(oe);const O=Q.length===1?"":"s";i(`Cleared selection of ${Q.length} photo${O}.`)},[]);return{photos:e,statusMessage:r,isLoading:l,isApiSupported:p,handleLoadPhotos:U,handleSelectPhoto:_,selectedPhotos:re,handleDeleteSelected:ue,handleApplyRulesManually:pe,handleSelectAll:fe,handleClearSelection:G,tfBackend:y,isolateSelection:S,handleToggleIsolateSelection:te,allAvailableLabels:Z,allAvailableClassificationLabels:I,allAvailableDetectionLabels:V,modelsLoadState:$}};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U8=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),q8=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,a,r)=>r?r.toUpperCase():a.toLowerCase()),G0=t=>{const e=q8(t);return e.charAt(0).toUpperCase()+e.slice(1)},ON=(...t)=>t.filter((e,a,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===a).join(" ").trim(),F8=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var V8={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H8=de.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:a=2,absoluteStrokeWidth:r,className:i="",children:l,iconNode:c,...f},h)=>de.createElement("svg",{ref:h,...V8,width:e,height:e,stroke:t,strokeWidth:r?Number(a)*24/Number(e):a,className:ON("lucide",i),...!l&&!F8(f)&&{"aria-hidden":"true"},...f},[...c.map(([p,g])=>de.createElement(p,g)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=(t,e)=>{const a=de.forwardRef(({className:r,...i},l)=>de.createElement(H8,{ref:l,iconNode:e,className:ON(`lucide-${U8(G0(t))}`,`lucide-${t}`,r),...i}));return a.displayName=G0(t),a};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G8=[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M17 10V4h-2",key:"zcsr5x"}],["path",{d:"M15 10h4",key:"id2lce"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2",key:"33xykx"}]],K8=Ce("arrow-down-1-0",G8);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y8=[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M20 8h-5",key:"1vsyxs"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10",key:"ag13bf"}],["path",{d:"M15 14h5l-5 6h5",key:"ur5jdg"}]],P8=Ce("arrow-down-a-z",Y8);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X8=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],ip=Ce("bot",X8);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z8=[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]],Tu=Ce("boxes",Z8);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W8=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],$N=Ce("check",W8);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q8=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],K0=Ce("chevron-right",Q8);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J8=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],eC=Ce("circle-alert",J8);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tC=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],nC=Ce("circle-check",tC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aC=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],Y0=Ce("circle-plus",aC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sC=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],rC=Ce("circle-question-mark",sC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iC=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],oC=Ce("circle-x",iC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lC=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],uC=Ce("download",lC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cC=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],DN=Ce("eye-off",cC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fC=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],hC=Ce("eye",fC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dC=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],RN=Ce("folder-open",dC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pC=[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]],mC=Ce("folder-tree",pC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gC=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],P0=Ce("folder",gC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yC=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],Bh=Ce("funnel",yC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bC=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],vC=Ce("layout-grid",bC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wC=[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]],CN=Ce("loader",wC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SC=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],NC=Ce("save",SC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xC=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],TC=Ce("search",xC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EC=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],kC=Ce("settings-2",EC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _C=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],AC=Ce("shield-check",_C);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OC=[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]],$C=Ce("sliders-horizontal",OC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DC=[["path",{d:"M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344",key:"2acyp4"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],RC=Ce("square-check-big",DC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CC=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],zC=Ce("square-x",CC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jC=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],zN=Ce("tag",jC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MC=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],Uh=Ce("trash-2",MC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IC=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],LC=Ce("upload",IC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BC=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],UC=Ce("user",BC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qC=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],jN=Ce("x",qC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FC=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],MN=Ce("zap",FC),Eu=({className:t="w-6 h-6"})=>T.jsx(CN,{className:`${t} animate-spin text-primary`}),VC=({status:t})=>{const a={[Ne.QUEUED]:{text:"Queued",icon:T.jsx(CN,{className:"w-3 h-3"}),color:"bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200"},[Ne.ANALYZING]:{text:"Analyzing...",icon:T.jsx(Eu,{className:"w-3 h-3"}),color:"bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300"},[Ne.ANALYZED]:{text:"Analyzed",icon:T.jsx($N,{className:"w-3 h-3"}),color:"bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300"},[Ne.UNCATEGORIZED]:{text:"Uncategorized",icon:T.jsx(rC,{className:"w-3 h-3"}),color:"bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300"},[Ne.ERROR]:{text:"Error",icon:T.jsx(eC,{className:"w-3 h-3"}),color:"bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300"}}[t];if(!a)return null;const{text:r,icon:i,color:l}=a;return T.jsxs("div",{className:`absolute top-2 left-2 flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full ${l}`,children:[i,T.jsx("span",{children:r})]})},qh=({value:t,onChange:e,suggestions:a,placeholder:r,icon:i,className:l})=>{const[c,f]=de.useState([]),[h,p]=de.useState(!1),[g,y]=de.useState(0),v=de.useRef(null),S=de.useRef(null);de.useEffect(()=>{const X=z=>{v.current&&!v.current.contains(z.target)&&p(!1)};return document.addEventListener("mousedown",X),()=>{document.removeEventListener("mousedown",X)}},[]),de.useEffect(()=>{if(h&&S.current){const X=S.current.children[g];X&&X.scrollIntoView({block:"nearest"})}},[g,h]);const k=X=>{const z=X.currentTarget.value,I=z.toLowerCase(),V=I.length>0?a.filter(Z=>Z.toLowerCase().includes(I)):a;e(z),f(V),p(!0),y(0)},$=()=>{const X=t.toLowerCase(),z=X.length>0?a.filter(I=>I.toLowerCase().includes(X)):a;f(z),p(!0)},A=X=>{e(X),f([]),p(!1)},M=X=>{!h||c.length===0||(X.key==="Enter"?(X.preventDefault(),e(c[g]),p(!1)):X.key==="ArrowUp"?(X.preventDefault(),y(z=>z>0?z-1:0)):X.key==="ArrowDown"?(X.preventDefault(),y(z=>z<c.length-1?z+1:c.length-1)):X.key==="Escape"&&p(!1))};return T.jsxs("div",{ref:v,className:"relative",children:[T.jsxs("div",{className:"relative",children:[i&&T.jsx("div",{className:"absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400",children:i}),T.jsx("input",{type:"text",value:t,onChange:k,onKeyDown:M,onFocus:$,placeholder:r,autoComplete:"off",className:l||`w-full ${i?"pl-10":"pl-3"} pr-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary focus:outline-none transition`})]}),h&&c.length>0&&T.jsx("ul",{ref:S,className:"absolute z-20 w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md mt-1 max-h-60 overflow-y-auto shadow-lg",children:c.map((X,z)=>T.jsx("li",{className:`p-2 cursor-pointer capitalize ${z===g?"bg-primary text-white":"hover:bg-gray-100 dark:hover:bg-gray-600"}`,onClick:()=>A(X),onMouseEnter:()=>y(z),children:X},X))})]})},X0=({status:t})=>{switch(t){case"loading":return T.jsx(Eu,{className:"w-4 h-4"});case"loaded":return T.jsx(nC,{className:"w-4 h-4 text-green-500"});case"error":return T.jsx(oC,{className:"w-4 h-4 text-red-500"});default:return T.jsx("div",{className:"w-4 h-4"})}},HC=({status:t})=>t.classification==="loaded"&&t.detection==="loaded"||t.classification==="idle"&&t.detection==="idle"?null:T.jsxs("div",{className:"mt-4 mb-2 p-3 bg-gray-100 dark:bg-gray-700/50 rounded-lg text-sm space-y-2 transition-all duration-300",children:[T.jsx("h4",{className:"font-semibold text-center text-gray-600 dark:text-gray-300 text-xs uppercase tracking-wider",children:"AI Models Status"}),T.jsxs("div",{className:"flex items-center justify-between",children:[T.jsx("span",{className:"text-gray-700 dark:text-gray-200",children:"Classification"}),T.jsx(X0,{status:t.classification})]}),T.jsxs("div",{className:"flex items-center justify-between",children:[T.jsx("span",{className:"text-gray-700 dark:text-gray-200",children:"Object Detection"}),T.jsx(X0,{status:t.detection})]})]}),GC=({userProfile:t,onOpenProfileSettings:e,onLoadPhotos:a,isLoading:r,isApiSupported:i,filterLabel:l,onFilterChange:c,onSelectAll:f,onClearSelection:h,onApplyRules:p,onDeleteSelected:g,selectedPhotoCount:y,totalPhotoCount:v,statusMessage:S,noAnalyzedPhotos:k,tfBackend:$,isolateSelection:A,onToggleIsolateSelection:M,allAvailableLabels:X,modelsLoadState:z})=>T.jsxs("aside",{className:"w-80 bg-white dark:bg-gray-800 p-6 flex flex-col shadow-lg shrink-0",children:[T.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[T.jsx("img",{src:"/logo.png",alt:"Pixo Logo",className:"w-10 h-10"}),T.jsx("h1",{className:"text-2xl font-bold tracking-tight",children:"Pixo"})]}),T.jsxs("div",{role:"button",tabIndex:0,"aria-label":"Open profile settings",onClick:e,onKeyDown:I=>(I.key==="Enter"||I.key===" ")&&e(),className:"flex items-center justify-between gap-3 mb-8 p-3 bg-gray-100 dark:bg-gray-700/60 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",children:[T.jsxs("div",{className:"flex items-center gap-3 overflow-hidden",children:[T.jsx("div",{className:"w-10 h-10 bg-primary text-white flex items-center justify-center rounded-full font-bold text-lg shrink-0",children:t.firstName.charAt(0).toUpperCase()}),T.jsxs("div",{className:"overflow-hidden",children:[T.jsx("p",{className:"font-semibold text-gray-800 dark:text-gray-100 truncate",title:t.firstName,children:t.firstName}),T.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:"View settings"})]})]}),T.jsx(kC,{className:"w-5 h-5 text-gray-500 dark:text-gray-400 shrink-0"})]}),T.jsxs("div",{className:"mb-6",children:[T.jsxs("label",{className:"font-semibold mb-2 flex items-center gap-2",children:[T.jsx(RN,{className:"w-5 h-5 text-secondary"})," Load Photos"]}),T.jsx("div",{className:"flex gap-2",children:T.jsx("button",{onClick:a,disabled:r||!i,className:"w-full px-4 py-2 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark transition disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center",title:i?"Select a directory to load photos":"Your browser is not supported for this feature.",children:r?T.jsx(Eu,{className:"w-5 h-5"}):"Select Directory"})})]}),T.jsxs("div",{className:"mb-6",children:[T.jsxs("label",{className:"font-semibold mb-2 flex items-center gap-2",children:[T.jsx(Bh,{className:"w-5 h-5 text-secondary"})," Filter by Label"]}),T.jsx(qh,{icon:T.jsx(TC,{}),placeholder:"e.g., cat, dog, car...",value:l,onChange:c,suggestions:X})]}),T.jsxs("div",{className:"space-y-3",children:[T.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[T.jsxs("button",{onClick:f,disabled:r||k,className:"w-full flex items-center justify-center gap-2 px-4 py-2 text-sm bg-gray-200 dark:bg-gray-700 font-semibold rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition disabled:bg-gray-400/30 disabled:text-gray-500 disabled:cursor-not-allowed",title:k&&!r?"No analyzed photos to select":"Select all analyzed photos",children:[T.jsx(RC,{className:"w-4 h-4"})," Select All"]}),T.jsxs("button",{onClick:h,disabled:y===0,className:"w-full flex items-center justify-center gap-2 px-4 py-2 text-sm bg-gray-200 dark:bg-gray-700 font-semibold rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition disabled:bg-gray-400/30 disabled:text-gray-500 disabled:cursor-not-allowed",children:[T.jsx(zC,{className:"w-4 h-4"})," Clear All"]})]}),T.jsxs("button",{onClick:p,disabled:r||k,className:"w-full flex items-center justify-center gap-2 px-4 py-2 bg-secondary text-white font-semibold rounded-md hover:bg-secondary-dark transition disabled:bg-gray-400 disabled:cursor-not-allowed",title:k&&!r?"No analyzed photos to apply rules to":"Apply custom rules to all analyzed photos",children:[T.jsx(MN,{className:"w-5 h-5"})," Apply Manual Rules"]}),T.jsx("button",{onClick:M,disabled:y===0&&!A,className:"w-full flex items-center justify-center gap-2 px-4 py-2 bg-accent text-white font-semibold rounded-md hover:bg-accent-dark transition disabled:bg-gray-400/50 disabled:text-white/80 disabled:cursor-not-allowed",title:A?"Show all photos":"Show only selected photos",children:A?T.jsxs(T.Fragment,{children:[T.jsx(hC,{className:"w-5 h-5"})," Show All"]}):T.jsxs(T.Fragment,{children:[T.jsx(DN,{className:"w-5 h-5"})," Isolate Selection"]})}),T.jsxs("button",{onClick:g,disabled:y===0,className:"w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition disabled:bg-red-400/50 disabled:cursor-not-allowed",children:[T.jsx(Uh,{className:"w-5 h-5"})," Delete Selected (",y,")"]})]}),T.jsxs("div",{className:"mt-auto pt-6 border-t border-gray-200 dark:border-gray-700",children:[T.jsxs("div",{className:"flex justify-between items-center text-sm font-medium mb-2",children:[T.jsx("span",{children:"Total Photos"}),T.jsx("span",{className:"px-2 py-0.5 bg-primary/20 text-primary rounded-full",children:v})]}),T.jsxs("div",{className:"flex justify-between items-center text-sm font-medium",children:[T.jsx("span",{children:"Selected"}),T.jsx("span",{className:"px-2 py-0.5 bg-accent/20 text-accent rounded-full",children:y})]}),T.jsx(HC,{status:z}),T.jsxs("div",{className:"mt-4 text-xs text-gray-500 dark:text-gray-400 p-2 bg-gray-100 dark:bg-gray-700/50 rounded-md text-center space-y-1",children:[T.jsx("p",{children:S}),$&&T.jsxs("p",{className:"font-mono text-gray-400 dark:text-gray-500 text-[10px] tracking-wider pt-1 border-t border-gray-200 dark:border-gray-600/50 mt-1",children:["AI Backend: ",$]})]})]})]});function KC({photo:t,onSelect:e,onView:a,onFilterChange:r}){const i=de.useRef(null);de.useEffect(()=>()=>{i.current&&clearTimeout(i.current)},[]);const l=p=>{p.stopPropagation(),i.current?(clearTimeout(i.current),i.current=null,a(t)):i.current=setTimeout(()=>{e(t.id),i.current=null},250)},c=(p,g)=>{p.stopPropagation(),r(g)},f=t.status===Ne.ANALYZED&&t.classifications.length>0?t.classifications.reduce((p,g)=>g.score>p.score?g:p,t.classifications[0]):null,h=t.status===Ne.ANALYZED&&t.detections.length>0?t.detections.reduce((p,g)=>g.score>p.score?g:p,t.detections[0]):null;return T.jsxs("div",{className:"relative group aspect-square bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300",onClick:l,children:[T.jsx("img",{src:t.objectURL,alt:t.id,className:"w-full h-full object-cover transition-transform duration-300 group-hover:scale-110",loading:"lazy"}),T.jsx("div",{className:"absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-opacity duration-300"}),t.selected&&T.jsx("div",{className:"absolute inset-0 border-4 border-accent rounded-lg pointer-events-none",children:T.jsx("div",{className:"absolute top-2 right-2 bg-accent text-white rounded-full p-1",children:T.jsx($N,{className:"w-4 h-4"})})}),T.jsx(VC,{status:t.status}),T.jsxs("div",{className:"absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent",children:[(h||f)&&T.jsxs("div",{className:"mb-1 space-y-1",children:[h&&T.jsxs("div",{className:"flex items-center justify-between text-white",children:[T.jsxs("button",{onClick:p=>c(p,h.label),className:"flex items-center gap-1.5 overflow-hidden text-left hover:underline focus:outline-none focus:underline",title:`Filter by "${h.label}"`,children:[T.jsx(Tu,{className:"w-3 h-3 text-white/90 shrink-0"}),T.jsx("span",{className:"text-sm font-bold capitalize truncate",children:h.label})]}),T.jsx("span",{className:"text-xs font-mono bg-accent/20 px-1.5 py-0.5 rounded-full",children:`${(h.score*100).toFixed(0)}%`})]}),f&&T.jsxs("div",{className:"flex items-center justify-between text-white",children:[T.jsxs("button",{onClick:p=>c(p,f.label),className:"flex items-center gap-1.5 overflow-hidden text-left hover:underline focus:outline-none focus:underline",title:`Filter by "${f.label}"`,children:[T.jsx(zN,{className:"w-3 h-3 text-white/90 shrink-0"}),T.jsx("span",{className:"text-sm font-bold capitalize truncate",children:f.label})]}),T.jsx("span",{className:"text-xs font-mono bg-white/20 px-1.5 py-0.5 rounded-full",children:`${(f.score*100).toFixed(0)}%`})]})]}),T.jsx("p",{className:"text-white text-xs truncate",title:t.id.split(/[\\/]/).pop(),children:t.id.split(/[\\/]/).pop()})]})]})}const Fh=W0.memo(KC),YC=({photos:t,onSelectPhoto:e,onViewPhoto:a,thumbnailSize:r,onFilterChange:i})=>{const[l,c]=de.useState(new Set([Ne.ANALYZED,Ne.UNCATEGORIZED])),[f,h]=de.useState("alpha"),[p,g]=de.useState("classification"),y={XS:"grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 2xl:grid-cols-11",S:"grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-9",M:"grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7",L:"grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6",XL:"grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"},v={XS:"grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12",S:"grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10",M:"grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8",L:"grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6",XL:"grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"},S=A=>{c(M=>{const X=new Set(M);return X.has(A)?X.delete(A):X.add(A),X})},k=de.useMemo(()=>{const A={[Ne.ANALYZED]:{},[Ne.QUEUED]:[],[Ne.ANALYZING]:[],[Ne.ERROR]:[],[Ne.UNCATEGORIZED]:[]},M=Array.from(t.values());for(const I of M)if(I.status===Ne.ANALYZED){if(p==="classification"){if(I.classifications.length>0){const Z=I.classifications.reduce((ie,F)=>F.score>ie.score?F:ie,I.classifications[0]).label,re=Z.charAt(0).toUpperCase()+Z.slice(1);A[Ne.ANALYZED][re]||(A[Ne.ANALYZED][re]=[]),A[Ne.ANALYZED][re].push(I)}}else if(I.detections.length>0){const V=new Set;I.detections.forEach(Z=>V.add(Z.label)),V.forEach(Z=>{const re=Z.charAt(0).toUpperCase()+Z.slice(1);A[Ne.ANALYZED][re]||(A[Ne.ANALYZED][re]=[]),A[Ne.ANALYZED][re].push(I)})}}else{const V=I.status;A[V]&&A[V].push(I)}const z=Object.keys(A[Ne.ANALYZED]).sort((I,V)=>{if(f==="count"){const Z=A[Ne.ANALYZED][I].length,re=A[Ne.ANALYZED][V].length;if(re!==Z)return re-Z}return I.localeCompare(V)}).reduce((I,V)=>(I[V]=A[Ne.ANALYZED][V],I),{});return A[Ne.ANALYZED]=z,A},[t,f,p]),$=[Ne.ANALYZING,Ne.QUEUED,Ne.ANALYZED,Ne.UNCATEGORIZED,Ne.ERROR];return T.jsx("div",{className:"space-y-4",children:$.map(A=>{const M=k[A];if(!M)return null;const X=A===Ne.ANALYZED,z=X?Object.values(M).flat():M;if(z.length===0)return null;const I=l.has(A);return T.jsxs("div",{children:[T.jsxs("div",{className:"flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200/60 dark:hover:bg-gray-700/60 transition-colors",children:[T.jsxs("div",{onClick:()=>S(A),className:"flex items-center gap-3 flex-grow cursor-pointer",children:[T.jsx(K0,{className:`w-5 h-5 text-gray-500 transition-transform ${I?"rotate-90":""}`}),T.jsx(P0,{className:"w-6 h-6 text-secondary"}),T.jsx("h3",{className:"font-bold text-lg capitalize",children:A.toLowerCase().replace(/_/g," ")}),T.jsxs("span",{className:"text-sm text-gray-500 dark:text-gray-400",children:["(",z.length," photos)"]})]}),X&&I&&T.jsxs("div",{className:"flex items-center gap-2 ml-auto",children:[T.jsxs("div",{className:"flex items-center p-0.5 bg-gray-300 dark:bg-gray-600 rounded-md",children:[T.jsx("button",{onClick:()=>g("classification"),className:`p-1.5 rounded-sm transition-colors ${p==="classification"?"bg-white dark:bg-gray-800 text-primary shadow-sm":"text-gray-600 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-800/50"}`,"aria-label":"Group by classification",title:"Group by classification",children:T.jsx(zN,{className:"w-4 h-4"})}),T.jsx("button",{onClick:()=>g("detection"),className:`p-1.5 rounded-sm transition-colors ${p==="detection"?"bg-white dark:bg-gray-800 text-primary shadow-sm":"text-gray-600 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-800/50"}`,"aria-label":"Group by detected objects",title:"Group by detected objects",children:T.jsx(Tu,{className:"w-4 h-4"})})]}),Object.keys(M).length>1&&T.jsxs("div",{className:"flex items-center p-0.5 bg-gray-300 dark:bg-gray-600 rounded-md",children:[T.jsx("button",{onClick:()=>h("alpha"),className:`p-1.5 rounded-sm transition-colors ${f==="alpha"?"bg-white dark:bg-gray-800 text-primary shadow-sm":"text-gray-600 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-800/50"}`,"aria-label":"Sort alphabetically",title:"Sort alphabetically",children:T.jsx(P8,{className:"w-4 h-4"})}),T.jsx("button",{onClick:()=>h("count"),className:`p-1.5 rounded-sm transition-colors ${f==="count"?"bg-white dark:bg-gray-800 text-primary shadow-sm":"text-gray-600 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-800/50"}`,"aria-label":"Sort by photo count",title:"Sort by photo count",children:T.jsx(K8,{className:"w-4 h-4"})})]})]})]}),I&&T.jsx("div",{className:"pl-11 pt-3 space-y-3",children:X?Object.entries(M).map(([V,Z])=>{const re=`${A}-${V}`,ie=l.has(re);return T.jsxs("div",{children:[T.jsxs("div",{onClick:()=>S(re),className:"flex items-center gap-2 p-1 rounded-md hover:bg-gray-200/60 dark:hover:bg-gray-700/60 cursor-pointer transition-colors",children:[T.jsx(K0,{className:`w-4 h-4 text-gray-500 transition-transform ${ie?"rotate-90":""}`}),T.jsx(P0,{className:"w-5 h-5 text-gray-400 dark:text-gray-500"}),T.jsx("h4",{className:"font-semibold",children:V}),T.jsxs("span",{className:"text-xs text-gray-500 dark:text-gray-400",children:["(",Z.length,")"]})]}),ie&&T.jsx("div",{className:`pl-7 pt-2 grid ${y[r]} gap-4`,children:Z.map(F=>T.jsx(Fh,{photo:F,onSelect:e,onView:a,onFilterChange:i},F.id))})]},re)}):T.jsx("div",{className:`grid ${v[r]} gap-4`,children:M.map(V=>T.jsx(Fh,{photo:V,onSelect:e,onView:a,onFilterChange:i},V.id))})})]},A)})})},PC=({photos:t,onSelectPhoto:e,onViewPhoto:a,thumbnailSize:r,onFilterChange:i})=>{const l={XS:"grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12",S:"grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10",M:"grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8",L:"grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6",XL:"grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"};return T.jsx("div",{className:`grid ${l[r]} gap-4`,children:t.map(c=>T.jsx(Fh,{photo:c,onSelect:e,onView:a,onFilterChange:i},c.id))})},XC=({photos:t,isLoading:e,filterLabel:a,isolateSelection:r,onSelectPhoto:i,onViewPhoto:l,thumbnailSize:c,onFilterChange:f})=>{const[h,p]=de.useState("grid"),g=de.useMemo(()=>{if(!r)return t;const S=new Map;for(const[k,$]of t.entries())$.selected&&S.set(k,$);return S},[t,r]),y=de.useMemo(()=>{const S=Array.from(g.values());if(!a.trim())return S;const k=a.toLowerCase();return S.filter($=>$.status===Ne.ANALYZED&&($.classifications.some(A=>A.label.toLowerCase().includes(k))||$.detections.some(A=>A.label.toLowerCase().includes(k))))},[g,a]),v=()=>{if(t.size===0&&!e)return T.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-center text-gray-500 dark:text-gray-400",children:[T.jsx(RN,{className:"w-24 h-24 mb-4 text-gray-300 dark:text-gray-600"}),T.jsx("h2",{className:"text-2xl font-semibold",children:"Your workspace is empty"}),T.jsx("p",{className:"mt-2 max-w-sm",children:"Click 'Select Directory' on the left to begin your photo sorting adventure!"})]});if(g.size===0){const S=r?"No Selected Photos":"No Matching Photos",k=r?"You're in isolation mode, but no photos are selected. Clear the isolation to see all photos.":"No photos match the current filter criteria. Try adjusting your search.",$=r?DN:Bh;return T.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-center text-gray-500 dark:text-gray-400",children:[T.jsx($,{className:"w-24 h-24 mb-4 text-gray-300 dark:text-gray-600"}),T.jsx("h2",{className:"text-2xl font-semibold",children:S}),T.jsx("p",{className:"mt-2 max-w-sm",children:k})]})}return h==="grid"?y.length===0?T.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-center text-gray-500 dark:text-gray-400",children:[T.jsx(Bh,{className:"w-24 h-24 mb-4 text-gray-300 dark:text-gray-600"}),T.jsx("h2",{className:"text-2xl font-semibold",children:"No Matching Photos"}),T.jsx("p",{className:"mt-2 max-w-sm",children:"No photos match your label filter. Try a different search term."})]}):T.jsx(PC,{photos:y,onSelectPhoto:i,onViewPhoto:l,thumbnailSize:c,onFilterChange:f}):T.jsx(YC,{photos:g,onSelectPhoto:i,onViewPhoto:l,thumbnailSize:c,onFilterChange:f})};return T.jsxs("main",{className:"flex-1 p-6 flex flex-col",children:[t.size>0&&!e&&T.jsx("div",{className:"flex justify-end items-center mb-4 flex-shrink-0",children:T.jsxs("div",{className:"flex items-center p-1 bg-gray-200 dark:bg-gray-700 rounded-lg",children:[T.jsx("button",{onClick:()=>p("grid"),className:`p-2 rounded-md transition-colors ${h==="grid"?"bg-white dark:bg-gray-800 text-primary shadow-sm":"text-gray-500 dark:text-gray-400 hover:bg-white/50 dark:hover:bg-gray-800/50"}`,"aria-label":"Grid View",title:"Grid View",children:T.jsx(vC,{className:"w-5 h-5"})}),T.jsx("button",{onClick:()=>p("folder"),className:`p-2 rounded-md transition-colors ${h==="folder"?"bg-white dark:bg-gray-800 text-primary shadow-sm":"text-gray-500 dark:text-gray-400 hover:bg-white/50 dark:hover:bg-gray-800/50"}`,"aria-label":"Folder View",title:"Folder View",children:T.jsx(mC,{className:"w-5 h-5"})})]})}),T.jsx("div",{className:"flex-1 overflow-y-auto",children:v()})]})},ZC=({photo:t,onClose:e})=>{if(!t)return null;const a=t.status===Ne.ANALYZING||t.status===Ne.QUEUED;return T.jsx("div",{className:"fixed inset-0 bg-black/70 z-40 flex items-center justify-center",onClick:e,children:T.jsxs("div",{className:"relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-gray-800 rounded-lg shadow-2xl flex flex-col md:flex-row",onClick:r=>r.stopPropagation(),children:[T.jsx("div",{className:"md:w-2/3 bg-black/90 flex items-center justify-center rounded-l-lg",children:T.jsx("img",{src:t.objectURL,alt:"Enlarged view",className:"max-w-full max-h-[90vh] md:max-h-[85vh] object-contain"})}),T.jsxs("div",{className:"md:w-1/3 p-6 flex flex-col overflow-y-auto",children:[T.jsx("button",{onClick:e,className:"absolute top-3 right-3 p-1.5 bg-gray-200/50 dark:bg-gray-700/50 rounded-full hover:bg-red-500 hover:text-white transition",children:T.jsx(jN,{className:"w-5 h-5"})}),a?T.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-gray-500",children:[T.jsx(Eu,{className:"w-10 h-10 mb-2"}),T.jsx("p",{children:"Analyzing..."})]}):T.jsxs("div",{className:"space-y-6",children:[T.jsxs("div",{children:[T.jsxs("h3",{className:"text-lg font-bold mb-3 flex items-center gap-2",children:[T.jsx(ip,{className:"w-5 h-5 text-secondary"})," AI Classifications"]}),T.jsx("ul",{className:"space-y-3",children:t.classifications.length>0?t.classifications.map((r,i)=>T.jsxs("li",{className:"text-sm",children:[T.jsxs("div",{className:"flex justify-between items-center mb-1",children:[T.jsx("span",{className:"font-semibold capitalize",children:r.label}),T.jsx("span",{className:"font-mono text-xs px-2 py-0.5 bg-primary/20 text-primary rounded-full",children:`${(r.score*100).toFixed(1)}%`})]}),T.jsx("div",{className:"w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5",children:T.jsx("div",{className:"bg-primary h-1.5 rounded-full",style:{width:`${r.score*100}%`}})})]},`class-${i}`)):T.jsx("p",{className:"text-gray-500 text-sm",children:"No classifications found."})})]}),T.jsxs("div",{className:"pt-4 border-t border-gray-200 dark:border-gray-700",children:[T.jsxs("h3",{className:"text-lg font-bold mb-3 flex items-center gap-2",children:[T.jsx(Tu,{className:"w-5 h-5 text-secondary"})," Detected Objects"]}),T.jsx("ul",{className:"space-y-3",children:t.detections.length>0?t.detections.map((r,i)=>T.jsxs("li",{className:"text-sm",children:[T.jsxs("div",{className:"flex justify-between items-center mb-1",children:[T.jsx("span",{className:"font-semibold capitalize",children:r.label}),T.jsx("span",{className:"font-mono text-xs px-2 py-0.5 bg-accent/20 text-accent rounded-full",children:`${(r.score*100).toFixed(1)}%`})]}),T.jsx("div",{className:"w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5",children:T.jsx("div",{className:"bg-accent h-1.5 rounded-full",style:{width:`${r.score*100}%`}})})]},`detect-${i}`)):T.jsx("p",{className:"text-gray-500 text-sm",children:"No objects detected."})})]})]}),T.jsx("div",{className:"mt-auto pt-4",children:T.jsx("p",{className:"text-xs text-gray-400 truncate",title:t.id,children:t.id})})]})]})})},WC=({currentProfile:t,onSave:e,closeModal:a,allAvailableClassificationLabels:r,allAvailableDetectionLabels:i})=>{const[l,c]=de.useState(()=>({...t,classificationRules:t.classificationRules||[],detectionRules:t.detectionRules||[],unknownThreshold:t.unknownThreshold??10,thumbnailSize:t.thumbnailSize??"M"})),[f,h]=de.useState({label:"",confidence:75}),[p,g]=de.useState({label:"",confidence:75}),y=de.useRef(null),v=["XS","S","M","L","XL"],S=()=>{e(l),a()},k=z=>{if(z==="classification"){if(!f.label)return;c(I=>({...I,classificationRules:[...I.classificationRules,{...f,id:Date.now().toString()}]})),h({label:"",confidence:75})}else{if(!p.label)return;c(I=>({...I,detectionRules:[...I.detectionRules,{...p,id:Date.now().toString()}]})),g({label:"",confidence:75})}},$=(z,I)=>{c(I==="classification"?V=>({...V,classificationRules:V.classificationRules.filter(Z=>Z.id!==z)}):V=>({...V,detectionRules:V.detectionRules.filter(Z=>Z.id!==z)}))},A=()=>{try{const z=JSON.stringify(l,null,2),I=new Blob([z],{type:"application/json"}),V=URL.createObjectURL(I),Z=document.createElement("a");Z.href=V,Z.download=`pixo_profile_${l.firstName.toLowerCase().replace(/\s/g,"_")}.json`,document.body.appendChild(Z),Z.click(),document.body.removeChild(Z),URL.revokeObjectURL(V)}catch(z){console.error("Failed to export profile:",z),alert("An error occurred while exporting your profile.")}},M=()=>{var z;(z=y.current)==null||z.click()},X=z=>{var Z;const I=(Z=z.target.files)==null?void 0:Z[0];if(!I)return;const V=new FileReader;V.onload=re=>{var ie;try{const F=(ie=re.target)==null?void 0:ie.result;if(typeof F!="string")throw new Error("Failed to read file content.");const U=JSON.parse(F);if(U.rules&&!U.classificationRules&&(U.classificationRules=U.rules,delete U.rules),U.classificationRules||(U.classificationRules=[]),U.detectionRules||(U.detectionRules=[]),typeof U.firstName=="string"&&Array.isArray(U.classificationRules)&&Array.isArray(U.detectionRules)&&typeof U.autoApplyRules=="boolean"){const te={...t,...U,unknownThreshold:U.unknownThreshold??10,thumbnailSize:U.thumbnailSize??"M"};c(te),alert("Profile imported successfully! Review the changes and click 'Save Changes' to apply them.")}else throw new Error("Invalid profile file format.")}catch(F){console.error("Failed to import profile:",F),alert("Failed to import profile. Please make sure it's a valid JSON file exported from this application.")}},V.onerror=()=>{alert("Error reading file.")},V.readAsText(I),z.target&&(z.target.value="")};return T.jsxs("div",{className:"space-y-6",children:[T.jsx("input",{type:"file",ref:y,onChange:X,accept:".json",className:"hidden"}),T.jsxs("div",{children:[T.jsx("label",{className:"block font-semibold mb-1",children:"First Name"}),T.jsx("input",{type:"text",value:l.firstName,onChange:z=>c({...l,firstName:z.target.value}),className:"w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary"})]}),T.jsxs("div",{className:"space-y-2",children:[T.jsx("label",{className:"block font-semibold",children:"Thumbnail Size"}),T.jsx("div",{className:"flex items-center p-1 bg-gray-200 dark:bg-gray-700 rounded-lg",children:v.map(z=>T.jsx("button",{onClick:()=>c({...l,thumbnailSize:z}),className:`flex-1 p-2 rounded-md transition-colors text-sm font-semibold ${(l.thumbnailSize||"M")===z?"bg-white dark:bg-gray-800 text-primary shadow-sm":"text-gray-600 dark:text-gray-400 hover:bg-white/50 dark:hover:bg-gray-800/50"}`,children:z},z))})]}),T.jsx("div",{children:T.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[T.jsx("input",{type:"checkbox",checked:l.autoApplyRules,onChange:z=>c({...l,autoApplyRules:z.target.checked}),className:"w-5 h-5 rounded text-primary focus:ring-primary"}),T.jsx("span",{children:"Automatically apply all rules on photo load"})]})}),T.jsxs("div",{className:"space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700",children:[T.jsx("h3",{className:"text-lg font-bold",children:"Uncategorized Rule (Classification-based)"}),T.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"If all AI **classification** scores for a photo are below this threshold, it will be classified as 'Uncategorized'. This helps filter out ambiguous images."}),T.jsxs("div",{children:[T.jsxs("label",{className:"block text-sm font-medium mb-1",children:["Confidence Threshold (",l.unknownThreshold,"%)"]}),T.jsx("input",{type:"range",min:"0",max:"50",value:l.unknownThreshold,onChange:z=>c({...l,unknownThreshold:parseInt(z.target.value,10)}),className:"w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-600"})]})]}),T.jsxs("div",{className:"space-y-4 pt-4 border-t border-gray-200 dark:border-gray-700",children:[T.jsxs("h3",{className:"text-lg font-bold flex items-center gap-2",children:[T.jsx(ip,{className:"w-5 h-5 text-secondary"})," Classification Rules"]}),l.classificationRules.length===0&&T.jsx("p",{className:"text-gray-500 text-sm",children:"No classification rules defined. Add one below!"}),T.jsx("div",{className:"space-y-2 max-h-40 overflow-y-auto pr-2",children:l.classificationRules.map(z=>T.jsxs("div",{className:"flex items-center gap-2 p-2 bg-gray-100 dark:bg-gray-700/50 rounded-md",children:[T.jsx("span",{className:"font-semibold px-2 py-1 text-xs rounded-full bg-primary/20 text-primary",children:"SELECT"}),T.jsx("span",{children:"if contains"}),T.jsx("span",{className:"font-semibold text-primary",children:`"${z.label}"`}),T.jsx("span",{children:"with confidence"}),T.jsx("span",{className:"font-semibold text-primary",children:`> ${z.confidence}%`}),T.jsx("button",{onClick:()=>$(z.id,"classification"),className:"ml-auto p-1 rounded-full hover:bg-red-200",children:T.jsx(Uh,{className:"w-4 h-4 text-red-600"})})]},z.id))}),T.jsxs("div",{className:"p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg",children:[T.jsx("h4",{className:"font-semibold mb-2",children:"Add New Classification Rule"}),T.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 items-end",children:[T.jsxs("div",{children:[T.jsx("label",{className:"block text-sm font-medium mb-1",children:"Label"}),T.jsx(qh,{placeholder:"e.g., beach, forest",value:f.label,onChange:z=>h({...f,label:z}),suggestions:r})]}),T.jsxs("div",{children:[T.jsxs("label",{className:"block text-sm font-medium mb-1",children:["Confidence (",f.confidence,"%)"]}),T.jsx("input",{type:"range",min:"1",max:"100",value:f.confidence,onChange:z=>h({...f,confidence:parseInt(z.target.value)}),className:"w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-600"})]})]}),T.jsxs("button",{onClick:()=>k("classification"),className:"mt-4 flex items-center gap-2 px-4 py-2 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark transition text-sm",children:[T.jsx(Y0,{className:"w-4 h-4"})," Add Classification Rule"]})]})]}),T.jsxs("div",{className:"space-y-4 pt-4 border-t border-gray-200 dark:border-gray-700",children:[T.jsxs("h3",{className:"text-lg font-bold flex items-center gap-2",children:[T.jsx(Tu,{className:"w-5 h-5 text-secondary"})," Object Detection Rules"]}),l.detectionRules.length===0&&T.jsx("p",{className:"text-gray-500 text-sm",children:"No detection rules defined. Add one below!"}),T.jsx("div",{className:"space-y-2 max-h-40 overflow-y-auto pr-2",children:l.detectionRules.map(z=>T.jsxs("div",{className:"flex items-center gap-2 p-2 bg-gray-100 dark:bg-gray-700/50 rounded-md",children:[T.jsx("span",{className:"font-semibold px-2 py-1 text-xs rounded-full bg-accent/20 text-accent",children:"SELECT"}),T.jsx("span",{children:"if an object is"}),T.jsx("span",{className:"font-semibold text-accent",children:`"${z.label}"`}),T.jsx("span",{children:"with confidence"}),T.jsx("span",{className:"font-semibold text-accent",children:`> ${z.confidence}%`}),T.jsx("button",{onClick:()=>$(z.id,"detection"),className:"ml-auto p-1 rounded-full hover:bg-red-200",children:T.jsx(Uh,{className:"w-4 h-4 text-red-600"})})]},z.id))}),T.jsxs("div",{className:"p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg",children:[T.jsx("h4",{className:"font-semibold mb-2",children:"Add New Detection Rule"}),T.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 items-end",children:[T.jsxs("div",{children:[T.jsx("label",{className:"block text-sm font-medium mb-1",children:"Object Label"}),T.jsx(qh,{placeholder:"e.g., person, car, dog",value:p.label,onChange:z=>g({...p,label:z}),suggestions:i})]}),T.jsxs("div",{children:[T.jsxs("label",{className:"block text-sm font-medium mb-1",children:["Confidence (",p.confidence,"%)"]}),T.jsx("input",{type:"range",min:"1",max:"100",value:p.confidence,onChange:z=>g({...p,confidence:parseInt(z.target.value)}),className:"w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-600"})]})]}),T.jsxs("button",{onClick:()=>k("detection"),className:"mt-4 flex items-center gap-2 px-4 py-2 bg-accent text-white font-semibold rounded-md hover:bg-accent-dark transition text-sm",children:[T.jsx(Y0,{className:"w-4 h-4"})," Add Detection Rule"]})]})]}),T.jsxs("div",{className:"flex justify-between items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-700",children:[T.jsxs("div",{className:"flex gap-2",children:[T.jsxs("button",{onClick:M,className:"flex items-center gap-2 px-3 py-2 text-sm bg-gray-200 dark:bg-gray-700 font-semibold rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition",children:[T.jsx(LC,{className:"w-4 h-4"})," Import"]}),T.jsxs("button",{onClick:A,className:"flex items-center gap-2 px-3 py-2 text-sm bg-gray-200 dark:bg-gray-700 font-semibold rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition",children:[T.jsx(uC,{className:"w-4 h-4"})," Export"]})]}),T.jsxs("div",{className:"flex gap-3",children:[T.jsx("button",{onClick:a,className:"px-4 py-2 bg-gray-200 dark:bg-gray-600 font-semibold rounded-md hover:bg-gray-300 dark:hover:bg-gray-500 transition",children:"Cancel"}),T.jsxs("button",{onClick:S,className:"flex items-center gap-2 px-4 py-2 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark transition",children:[T.jsx(NC,{className:"w-5 h-5"})," Save Changes"]})]})]})]})},QC=({isOpen:t,onClose:e,userProfile:a,onSave:r,allAvailableClassificationLabels:i,allAvailableDetectionLabels:l})=>t?T.jsx("div",{className:"fixed inset-0 bg-black/70 z-50 flex items-center justify-center",onClick:e,children:T.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col",onClick:c=>c.stopPropagation(),children:[T.jsxs("div",{className:"p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center",children:[T.jsxs("h2",{className:"text-2xl font-bold flex items-center gap-2",children:[T.jsx(UC,{className:"text-primary"})," User Profile & Rules"]}),T.jsx("button",{onClick:e,className:"p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600",children:T.jsx(jN,{className:"w-5 h-5"})})]}),T.jsx("div",{className:"p-6 overflow-y-auto",children:T.jsx(WC,{currentProfile:a,onSave:r,closeModal:e,allAvailableClassificationLabels:i,allAvailableDetectionLabels:l})})]})}):null,JC=({userProfile:t,onProfileUpdate:e})=>{const{photos:a,statusMessage:r,isLoading:i,isApiSupported:l,handleLoadPhotos:c,handleSelectPhoto:f,selectedPhotos:h,handleDeleteSelected:p,handleApplyRulesManually:g,handleSelectAll:y,handleClearSelection:v,isolateSelection:S,handleToggleIsolateSelection:k,tfBackend:$,allAvailableLabels:A,allAvailableClassificationLabels:M,allAvailableDetectionLabels:X,modelsLoadState:z}=B8(t),[I,V]=de.useState(""),[Z,re]=de.useState(!1),[ie,F]=de.useState(null),U=de.useMemo(()=>Array.from(a.values()).every(_=>_.status!==Ne.ANALYZED),[a]);return T.jsxs("div",{className:"flex h-screen bg-gray-100 dark:bg-gray-900",children:[T.jsx(GC,{userProfile:t,onOpenProfileSettings:()=>re(!0),onLoadPhotos:c,isLoading:i,isApiSupported:l,filterLabel:I,onFilterChange:V,onSelectAll:()=>y(I),onClearSelection:()=>v(I),onApplyRules:g,onDeleteSelected:p,selectedPhotoCount:h.length,totalPhotoCount:a.size,statusMessage:r,noAnalyzedPhotos:U,tfBackend:$,isolateSelection:S,onToggleIsolateSelection:k,allAvailableLabels:A,modelsLoadState:z}),T.jsx(XC,{photos:a,isLoading:i,filterLabel:I,onFilterChange:V,onSelectPhoto:f,onViewPhoto:F,isolateSelection:S,thumbnailSize:t.thumbnailSize??"M"}),T.jsx(ZC,{photo:ie,onClose:()=>F(null)}),T.jsx(QC,{isOpen:Z,onClose:()=>re(!1),userProfile:t,onSave:e,allAvailableClassificationLabels:M,allAvailableDetectionLabels:X})]})},sh=({icon:t,title:e,children:a})=>T.jsxs("div",{className:"bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center",children:[T.jsx("div",{className:"mb-4 text-secondary",children:t}),T.jsx("h3",{className:"text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100",children:e}),T.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:a})]}),ez=({onProfileSave:t})=>{const[e,a]=de.useState(""),r=i=>{if(i.preventDefault(),e.trim()){const l={firstName:e.trim(),classificationRules:[{id:"1",label:"cat",confidence:80},{id:"2",label:"dog",confidence:80}],detectionRules:[{id:"3",label:"person",confidence:75},{id:"4",label:"car",confidence:75}],autoApplyRules:!0,unknownThreshold:10,thumbnailSize:"M"};t(l)}};return T.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans",children:[T.jsxs("main",{className:"container mx-auto px-6 py-16 text-center",children:[T.jsxs("div",{className:"max-w-4xl mx-auto mb-16",children:[T.jsx("div",{className:"flex justify-center items-center mb-6",children:T.jsx("img",{src:"/logo.png",alt:"Pixo Logo",className:"w-24 h-24"})}),T.jsx("h1",{className:"text-4xl md:text-6xl font-bold text-primary dark:text-primary-light mb-4 leading-tight",children:"Welcome to Pixo"}),T.jsxs("p",{className:"text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12",children:["Organize your photos effortlessly.",T.jsx("br",{}),"Automatically categorize your local photos with powerful AI, right in your browser.",T.jsx("br",{}),"No uploads, total privacy."]})]}),T.jsxs("div",{className:"grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20",children:[T.jsx(sh,{icon:T.jsx(ip,{className:"w-10 h-10"}),title:"Automatic Tagging",children:"Leverage state-of-the-art AI to scan and label your photos based on their content."}),T.jsx(sh,{icon:T.jsx(AC,{className:"w-10 h-10"}),title:"100% Private",children:"Your photos are processed entirely on your device. Nothing is ever uploaded to a server."}),T.jsx(sh,{icon:T.jsx($C,{className:"w-10 h-10"}),title:"Powerful Rules",children:"Create custom rules to automatically select photos that match your criteria for easy organization."})]}),T.jsxs("div",{className:"max-w-md mx-auto bg-white dark:bg-gray-800/50 p-8 rounded-xl shadow-2xl ring-1 ring-primary/20",children:[T.jsx("h2",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4",children:"Ready to Get Started?"}),T.jsx("p",{className:"text-gray-600 dark:text-gray-300 mb-6",children:"Let's begin by setting up your profile. What should I call you?"}),T.jsxs("form",{onSubmit:r,className:"flex flex-col gap-4",children:[T.jsx("input",{type:"text",value:e,onChange:i=>a(i.target.value),placeholder:"Enter your first name...",className:"w-full px-4 py-3 bg-white dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition",required:!0}),T.jsxs("button",{type:"submit",className:"w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light",children:["Start Organizing ",T.jsx(MN,{className:"w-5 h-5"})]})]})]})]}),T.jsx("footer",{className:"text-center py-8 text-sm text-gray-500",children:T.jsx("p",{children:"Powered by Alexandre Rodenas"})})]})},rh="pixoUserProfile",Z0={saveUserProfile:t=>{try{localStorage.setItem(rh,JSON.stringify(t))}catch(e){console.error("Failed to save user profile to localStorage",e)}},loadUserProfile:()=>{try{const t=localStorage.getItem(rh);return t?JSON.parse(t):null}catch(t){return console.error("Failed to load user profile from localStorage",t),localStorage.removeItem(rh),null}}},tz=()=>{const[t,e]=de.useState(null),[a,r]=de.useState(!0);de.useEffect(()=>{let l=Z0.loadUserProfile();l&&(l.rules&&!l.classificationRules&&(l.classificationRules=l.rules,delete l.rules),l.detectionRules||(l.detectionRules=[]),l.thumbnailSize||(l.thumbnailSize="M")),e(l),r(!1),window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&document.documentElement.classList.add("dark")},[]);const i=de.useCallback(l=>{Z0.saveUserProfile(l),e(l)},[]);return a?T.jsx("div",{className:"flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300",children:T.jsx("p",{className:"text-xl animate-pulse",children:"Loading your space... ✨"})}):T.jsx("div",{className:"min-h-screen font-sans",children:t?T.jsx(JC,{userProfile:t,onProfileUpdate:i}):T.jsx(ez,{onProfileSave:i})})},IN=document.getElementById("root");if(!IN)throw new Error("Could not find root element to mount to");const nz=bE.createRoot(IN);nz.render(T.jsx(W0.StrictMode,{children:T.jsx(tz,{})}));export{Xh as $,c5 as A,d5 as B,p5 as C,xE as D,h5 as E,m5 as F,xN as G,g5 as H,y5 as I,l1 as J,Q0 as K,g3 as L,no as M,Gh as N,zE as O,it as P,OE as Q,u2 as R,f5 as S,Qh as T,Cb as U,uu as V,Z5 as W,fb as X,hb as Y,db as Z,oh as _,H0 as a,Vb as a$,pb as a0,Cl as a1,dA as a2,to as a3,mA as a4,yA as a5,pA as a6,uo as a7,M3 as a8,mb as a9,Ab as aA,$b as aB,G1 as aC,i2 as aD,Zh as aE,Fa as aF,jE as aG,Db as aH,Rb as aI,zb as aJ,Q6 as aK,b1 as aL,jb as aM,W6 as aN,Mb as aO,Fv as aP,io as aQ,Ib as aR,Lb as aS,Bb as aT,qv as aU,PE as aV,Ub as aW,qb as aX,Fb as aY,Gb as aZ,gA as a_,gb as aa,yb as ab,bb as ac,vb as ad,wb as ae,Sb as af,xb as ag,Nb as ah,R1 as ai,I1 as aj,Tb as ak,Uv as al,Eb as am,c_ as an,KE as ao,GE as ap,kb as aq,S2 as ar,H6 as as,L6 as at,_b as au,r5 as av,i5 as aw,o5 as ax,l5 as ay,u5 as az,iz as b,L1 as b$,Hb as b0,Kb as b1,Yb as b2,Pb as b3,Xb as b4,Zb as b5,Wb as b6,Qb as b7,u_ as b8,ZE as b9,p1 as bA,uN as bB,d1 as bC,P5 as bD,m1 as bE,g1 as bF,y1 as bG,v1 as bH,w1 as bI,S1 as bJ,N1 as bK,x1 as bL,T1 as bM,E1 as bN,k1 as bO,_1 as bP,A1 as bQ,O1 as bR,$1 as bS,D1 as bT,t3 as bU,C1 as bV,z1 as bW,j1 as bX,s3 as bY,a3 as bZ,M1 as b_,XE as ba,Wh as bb,V1 as bc,A2 as bd,e1 as be,_5 as bf,O5 as bg,$5 as bh,A5 as bi,D5 as bj,t1 as bk,WE as bl,a1 as bm,n1 as bn,s1 as bo,r1 as bp,i1 as bq,o1 as br,u1 as bs,c1 as bt,f1 as bu,ih as bv,h1 as bw,lh as bx,uh as by,sa as bz,eR as c,K2 as c$,B1 as c0,U1 as c1,q1 as c2,D2 as c3,F1 as c4,H1 as c5,K1 as c6,GS as c7,P1 as c8,YS as c9,v2 as cA,w2 as cB,E2 as cC,T2 as cD,N2 as cE,x2 as cF,k2 as cG,O2 as cH,z2 as cI,j2 as cJ,Jh as cK,M2 as cL,ou as cM,$2 as cN,C5 as cO,_2 as cP,l3 as cQ,I2 as cR,Q2 as cS,B2 as cT,G6 as cU,U6 as cV,U2 as cW,V2 as cX,H2 as cY,G2 as cZ,y2 as c_,Z1 as ca,W2 as cb,X1 as cc,W1 as cd,Dt as ce,Q1 as cf,J1 as cg,e2 as ch,t2 as ci,r2 as cj,Jb as ck,o2 as cl,l2 as cm,h2 as cn,f2 as co,o3 as cp,c2 as cq,i3 as cr,d2 as cs,J2 as ct,s5 as cu,p2 as cv,m2 as cw,g2 as cx,kS as cy,b2 as cz,rz as d,$n as d$,Y2 as d0,X2 as d1,Z2 as d2,Y5 as d3,ev as d4,wn as d5,F6 as d6,V6 as d7,Ob as d8,W5 as d9,DE as dA,Bi as dB,EE as dC,tb as dD,H3 as dE,Q5 as dF,CE as dG,Da as dH,zS as dI,Re as dJ,$e as dK,Z6 as dL,dv as dM,N3 as dN,Nr as dO,a5 as dP,KS as dQ,n2 as dR,a2 as dS,s2 as dT,L2 as dU,K5 as dV,BE as dW,LE as dX,lu as dY,e5 as dZ,t5 as d_,QE as da,Y1 as db,R2 as dc,M5 as dd,j5 as de,z5 as df,C2 as dg,q5 as dh,U5 as di,L5 as dj,I5 as dk,B5 as dl,F5 as dm,G5 as dn,H5 as dp,V5 as dq,q2 as dr,F2 as ds,P2 as dt,Z4 as du,az as dv,Hi as dw,Gl as dx,W3 as dy,T3 as dz,Vh as e,n5 as e0,J6 as e1,ee as e2,Ui as e3,Xl as e4,Hl as e5,S3 as e6,ve as f,oE as g,mw as h,Nn as i,$r as j,E as k,av as l,J3 as m,ME as n,b5 as o,Ue as p,Pl as q,sz as r,Dd as s,Rn as t,Ba as u,kE as v,Ca as w,so as x,nb as y,lk as z};
