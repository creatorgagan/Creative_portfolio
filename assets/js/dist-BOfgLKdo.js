import{r as iE}from"./rolldown-runtime-CzF6_L4l.js";import{a as F,c as aE,l as rE,o as D,s as ti,u as nE}from"./admin-components-D24Ek_cO.js";import{l as xn}from"./react-vendor-BSVagTro.js";import{t as sE}from"./hls-DJPxqd7n.js";import{a as xm,i as ut,n as x,r as H,t as wt}from"./classPrivateFieldSet2-DTU-rhuG.js";import{n as Pn,t as oE}from"./dist-BvFLEbdi.js";var ui=iE(nE(),1),lE=Object.create,Om=Object.defineProperty,dE=Object.getOwnPropertyDescriptor,uE=Object.getOwnPropertyNames,cE=Object.getPrototypeOf,hE=Object.prototype.hasOwnProperty,Nm=function(e,t){return function(){return e&&(t=e(e=0)),t}},$e=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}},mE=function(e,t,i,a){if(t&&typeof t=="object"||typeof t=="function")for(var r=uE(t),n=0,s=r.length,o;n<s;n++)o=r[n],!hE.call(e,o)&&o!==i&&Om(e,o,{get:function(l){return t[l]}.bind(null,o),enumerable:!(a=dE(t,o))||a.enumerable});return e},at=function(e,t,i){return i=e!=null?lE(cE(e)):{},mE(t||!e||!e.__esModule?Om(i,"default",{value:e,enumerable:!0}):i,e)},Ct=$e(function(e,t){var i;typeof window!="undefined"?i=window:typeof global!="undefined"?i=global:typeof self!="undefined"?i=self:i={},t.exports=i});function va(e,t){return t!=null&&typeof Symbol!="undefined"&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](e):va(e,t)}var fa=Nm(function(){fa()});function Pm(e){"@swc/helpers - typeof";return e&&typeof Symbol!="undefined"&&e.constructor===Symbol?"symbol":typeof e}var Um=Nm(function(){}),Hm=$e(function(e,t){var i=Array.prototype.slice;t.exports=a;function a(r,n){for(("length"in r)||(r=[r]),r=i.call(r);r.length;){var s=r.shift(),o=n(s);if(o)return o;s.childNodes&&s.childNodes.length&&(r=i.call(s.childNodes).concat(r))}}}),pE=$e(function(e,t){fa(),t.exports=i;function i(a,r){if(!va(this,i))return new i(a,r);this.data=a,this.nodeValue=a,this.length=a.length,this.ownerDocument=r||null}i.prototype.nodeType=8,i.prototype.nodeName="#comment",i.prototype.toString=function(){return"[object Comment]"}}),vE=$e(function(e,t){fa(),t.exports=i;function i(a,r){if(!va(this,i))return new i(a);this.data=a||"",this.length=this.data.length,this.ownerDocument=r||null}i.prototype.type="DOMTextNode",i.prototype.nodeType=3,i.prototype.nodeName="#text",i.prototype.toString=function(){return this.data},i.prototype.replaceData=function(a,r,n){var s=this.data,o=s.substring(0,a),l=s.substring(a+r,s.length);this.data=o+n+l,this.length=this.data.length}}),Bm=$e(function(e,t){t.exports=i;function i(a){var r=this,n=a.type;a.target||(a.target=r),r.listeners||(r.listeners={});var s=r.listeners[n];if(s)return s.forEach(function(o){a.currentTarget=r,typeof o=="function"?o(a):o.handleEvent(a)});r.parentNode&&r.parentNode.dispatchEvent(a)}}),Wm=$e(function(e,t){t.exports=i;function i(a,r){var n=this;n.listeners||(n.listeners={}),n.listeners[a]||(n.listeners[a]=[]),n.listeners[a].indexOf(r)===-1&&n.listeners[a].push(r)}}),Fm=$e(function(e,t){t.exports=i;function i(a,r){var n=this;if(n.listeners&&n.listeners[a]){var s=n.listeners[a],o=s.indexOf(r);o!==-1&&s.splice(o,1)}}}),fE=$e(function(e,t){Um(),t.exports=a;var i=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"];function a(u){switch(u.nodeType){case 3:return p(u.data);case 8:return"<!--"+u.data+"-->";default:return r(u)}}function r(u){var c=[],v=u.tagName;return u.namespaceURI==="http://www.w3.org/1999/xhtml"&&(v=v.toLowerCase()),c.push("<"+v+m(u)+o(u)),i.indexOf(v)>-1?c.push(" />"):(c.push(">"),u.childNodes.length?c.push.apply(c,u.childNodes.map(a)):u.textContent||u.innerText?c.push(p(u.textContent||u.innerText)):u.innerHTML&&c.push(u.innerHTML),c.push("</"+v+">")),c.join("")}function n(u,c){var v=Pm(u[c]);return c==="style"&&Object.keys(u.style).length>0?!0:u.hasOwnProperty(c)&&(v==="string"||v==="boolean"||v==="number")&&c!=="nodeName"&&c!=="className"&&c!=="tagName"&&c!=="textContent"&&c!=="innerText"&&c!=="namespaceURI"&&c!=="innerHTML"}function s(u){if(typeof u=="string")return u;var c="";return Object.keys(u).forEach(function(v){var b=u[v];v=v.replace(/[A-Z]/g,function(E){return"-"+E.toLowerCase()}),c+=v+":"+b+";"}),c}function o(u){var c=u.dataset,v=[];for(var b in c)v.push({name:"data-"+b,value:c[b]});return v.length?l(v):""}function l(u){var c=[];return u.forEach(function(v){var b=v.name,E=v.value;b==="style"&&(E=s(E)),c.push(b+'="'+d(E)+'"')}),c.length?" "+c.join(" "):""}function m(u){var c=[];for(var v in u)n(u,v)&&c.push({name:v,value:u[v]});for(var b in u._attributes)for(var E in u._attributes[b]){var g=u._attributes[b][E],T=(g.prefix?g.prefix+":":"")+E;c.push({name:T,value:g.value})}return u.className&&c.push({name:"class",value:u.className}),c.length?l(c):""}function p(u){var c="";return typeof u=="string"?c=u:u&&(c=u.toString()),c.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function d(u){return p(u).replace(/"/g,"&quot;")}}),Km=$e(function(e,t){fa();var i=Hm(),a=Bm(),r=Wm(),n=Fm(),s=fE(),o="http://www.w3.org/1999/xhtml";t.exports=l;function l(m,p,d){if(!va(this,l))return new l(m);var u=d===void 0?o:d||null;this.tagName=u===o?String(m).toUpperCase():m,this.nodeName=this.tagName,this.className="",this.dataset={},this.childNodes=[],this.parentNode=null,this.style={},this.ownerDocument=p||null,this.namespaceURI=u,this._attributes={},this.tagName==="INPUT"&&(this.type="text")}l.prototype.type="DOMElement",l.prototype.nodeType=1,l.prototype.appendChild=function(m){return m.parentNode&&m.parentNode.removeChild(m),this.childNodes.push(m),m.parentNode=this,m},l.prototype.replaceChild=function(m,p){m.parentNode&&m.parentNode.removeChild(m);var d=this.childNodes.indexOf(p);return p.parentNode=null,this.childNodes[d]=m,m.parentNode=this,p},l.prototype.removeChild=function(m){var p=this.childNodes.indexOf(m);return this.childNodes.splice(p,1),m.parentNode=null,m},l.prototype.insertBefore=function(m,p){m.parentNode&&m.parentNode.removeChild(m);var d=p==null?-1:this.childNodes.indexOf(p);return d>-1?this.childNodes.splice(d,0,m):this.childNodes.push(m),m.parentNode=this,m},l.prototype.setAttributeNS=function(m,p,d){var u=null,c=p,v=p.indexOf(":");if(v>-1&&(u=p.substr(0,v),c=p.substr(v+1)),this.tagName==="INPUT"&&p==="type")this.type=d;else{var b=this._attributes[m]||(this._attributes[m]={});b[c]={value:d,prefix:u}}},l.prototype.getAttributeNS=function(m,p){var d=this._attributes[m],u=d&&d[p]&&d[p].value;return this.tagName==="INPUT"&&p==="type"?this.type:typeof u!="string"?null:u},l.prototype.removeAttributeNS=function(m,p){var d=this._attributes[m];d&&delete d[p]},l.prototype.hasAttributeNS=function(m,p){var d=this._attributes[m];return!!d&&p in d},l.prototype.setAttribute=function(m,p){return this.setAttributeNS(null,m,p)},l.prototype.getAttribute=function(m){return this.getAttributeNS(null,m)},l.prototype.removeAttribute=function(m){return this.removeAttributeNS(null,m)},l.prototype.hasAttribute=function(m){return this.hasAttributeNS(null,m)},l.prototype.removeEventListener=n,l.prototype.addEventListener=r,l.prototype.dispatchEvent=a,l.prototype.focus=function(){},l.prototype.toString=function(){return s(this)},l.prototype.getElementsByClassName=function(m){var p=m.split(" "),d=[];return i(this,function(u){if(u.nodeType===1){var c=(u.className||"").split(" ");p.every(function(v){return c.indexOf(v)!==-1})&&d.push(u)}}),d},l.prototype.getElementsByTagName=function(m){m=m.toLowerCase();var p=[];return i(this.childNodes,function(d){d.nodeType===1&&(m==="*"||d.tagName.toLowerCase()===m)&&p.push(d)}),p},l.prototype.contains=function(m){return i(this,function(p){return m===p})||!1}}),EE=$e(function(e,t){fa();var i=Km();t.exports=a;function a(r){if(!va(this,a))return new a;this.childNodes=[],this.parentNode=null,this.ownerDocument=r||null}a.prototype.type="DocumentFragment",a.prototype.nodeType=11,a.prototype.nodeName="#document-fragment",a.prototype.appendChild=i.prototype.appendChild,a.prototype.replaceChild=i.prototype.replaceChild,a.prototype.removeChild=i.prototype.removeChild,a.prototype.toString=function(){return this.childNodes.map(function(r){return String(r)}).join("")}}),_E=$e(function(e,t){t.exports=i;function i(a){}i.prototype.initEvent=function(a,r,n){this.type=a,this.bubbles=r,this.cancelable=n},i.prototype.preventDefault=function(){}}),gE=$e(function(e,t){fa();var i=Hm(),a=pE(),r=vE(),n=Km(),s=EE(),o=_E(),l=Bm(),m=Wm(),p=Fm();t.exports=d;function d(){if(!va(this,d))return new d;this.head=this.createElement("head"),this.body=this.createElement("body"),this.documentElement=this.createElement("html"),this.documentElement.appendChild(this.head),this.documentElement.appendChild(this.body),this.childNodes=[this.documentElement],this.nodeType=9}var u=d.prototype;u.createTextNode=function(c){return new r(c,this)},u.createElementNS=function(c,v){return new n(v,this,c===null?null:String(c))},u.createElement=function(c){return new n(c,this)},u.createDocumentFragment=function(){return new s(this)},u.createEvent=function(c){return new o(c)},u.createComment=function(c){return new a(c,this)},u.getElementById=function(c){return c=String(c),i(this.childNodes,function(v){if(String(v.id)===c)return v})||null},u.getElementsByClassName=n.prototype.getElementsByClassName,u.getElementsByTagName=n.prototype.getElementsByTagName,u.contains=n.prototype.contains,u.removeEventListener=p,u.addEventListener=m,u.dispatchEvent=l}),bE=$e(function(e,t){t.exports=new(gE())}),Vm=$e(function(e,t){var i=typeof global!="undefined"?global:typeof window!="undefined"?window:{},a=bE(),r;typeof document!="undefined"?r=document:(r=i["__GLOBAL_DOCUMENT_CACHE@4"],r||(r=i["__GLOBAL_DOCUMENT_CACHE@4"]=a)),t.exports=r});function yE(e){if(Array.isArray(e))return e}function TE(e,t){var i=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(i!=null){var a=[],r=!0,n=!1,s,o;try{for(i=i.call(e);!(r=(s=i.next()).done)&&(a.push(s.value),!(t&&a.length===t));r=!0);}catch(l){n=!0,o=l}finally{try{!r&&i.return!=null&&i.return()}finally{if(n)throw o}}return a}}function AE(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ul(e,t){(t==null||t>e.length)&&(t=e.length);for(var i=0,a=new Array(t);i<t;i++)a[i]=e[i];return a}function qm(e,t){if(e){if(typeof e=="string")return Ul(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if(i==="Object"&&e.constructor&&(i=e.constructor.name),i==="Map"||i==="Set")return Array.from(i);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Ul(e,t)}}function pi(e,t){return yE(e)||TE(e,t)||qm(e,t)||AE()}var sn=at(Ct()),Xc=at(Ct()),kE=at(Ct()),Ae={now:function(){var e=kE.default.performance,t=e&&e.timing,i=t&&t.navigationStart,a=typeof i=="number"&&typeof e.now=="function"?i+e.now():Date.now();return Math.round(a)}},fn=function(){var e,t,i;if(typeof((e=Xc.default.crypto)===null||e===void 0?void 0:e.getRandomValues)=="function"){i=new Uint8Array(32),Xc.default.crypto.getRandomValues(i);for(var a=0;a<32;a++)i[a]=i[a]%16}else{i=[];for(var r=0;r<32;r++)i[r]=Math.random()*16|0}var n=0;t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(l){var m=l==="x"?i[n]:i[n]&3|8;return n++,m.toString(16)});var s=Ae.now(),o=s==null?void 0:s.toString(16).substring(3);return o?t.substring(0,28)+o:t},Ym=function(){return("000000"+(Math.random()*Math.pow(36,6)<<0).toString(36)).slice(-6)},_t=function(e){if(e&&typeof e.nodeName!="undefined")return e.muxId||(e.muxId=Ym()),e.muxId;var t;try{t=document.querySelector(e)}catch(i){}return t&&!t.muxId&&(t.muxId=e),(t==null?void 0:t.muxId)||e},ho=function(e){var t;e&&typeof e.nodeName!="undefined"?(t=e,e=_t(t)):t=document.querySelector(e);var i=t&&t.nodeName?t.nodeName.toLowerCase():"";return[t,e,i]};function SE(e){if(Array.isArray(e))return Ul(e)}function wE(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function IE(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gt(e){return SE(e)||wE(e)||qm(e)||IE()}var Xi={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},RE=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:3,i,a,r,n,s,o=e?[console,e]:[console],l=(i=console.trace).bind.apply(i,gt(o)),m=(a=console.info).bind.apply(a,gt(o)),p=(r=console.debug).bind.apply(r,gt(o)),d=(n=console.warn).bind.apply(n,gt(o)),u=(s=console.error).bind.apply(s,gt(o)),c=t;return{trace:function(){for(var v=arguments.length,b=new Array(v),E=0;E<v;E++)b[E]=arguments[E];if(!(c>Xi.TRACE))return l.apply(void 0,gt(b))},debug:function(){for(var v=arguments.length,b=new Array(v),E=0;E<v;E++)b[E]=arguments[E];if(!(c>Xi.DEBUG))return p.apply(void 0,gt(b))},info:function(){for(var v=arguments.length,b=new Array(v),E=0;E<v;E++)b[E]=arguments[E];if(!(c>Xi.INFO))return m.apply(void 0,gt(b))},warn:function(){for(var v=arguments.length,b=new Array(v),E=0;E<v;E++)b[E]=arguments[E];if(!(c>Xi.WARN))return d.apply(void 0,gt(b))},error:function(){for(var v=arguments.length,b=new Array(v),E=0;E<v;E++)b[E]=arguments[E];if(!(c>Xi.ERROR))return u.apply(void 0,gt(b))},get level(){return c},set level(v){v!==this.level&&(c=v!=null?v:t)}}},re=RE("[mux]"),hl=at(Ct());function Hl(){return(hl.default.doNotTrack||hl.default.navigator&&hl.default.navigator.doNotTrack)==="1"}function W(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}fa();function Me(e,t){if(!va(e,t))throw new TypeError("Cannot call a class as a function")}function Jc(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function ii(e,t,i){return t&&Jc(e.prototype,t),i&&Jc(e,i),e}function S(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function ur(e){return ur=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},ur(e)}function CE(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&(e=ur(e),e!==null););return e}function is(e,t,i){return typeof Reflect!="undefined"&&Reflect.get?is=Reflect.get:is=function(a,r,n){var s=CE(a,r);if(s){var o=Object.getOwnPropertyDescriptor(s,r);return o.get?o.get.call(n||a):o.value}},is(e,t,i||e)}function Bl(e,t){return Bl=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},Bl(e,t)}function LE(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Bl(e,t)}function DE(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}Um();function ME(e,t){return t&&(Pm(t)==="object"||typeof t=="function")?t:W(e)}function xE(e){var t=DE();return function(){var i=ur(e),a;if(t){var r=ur(this).constructor;a=Reflect.construct(i,arguments,r)}else a=i.apply(this,arguments);return ME(this,a)}}var kt=function(e){return En(e)[0]},En=function(e){if(typeof e!="string"||e==="")return["localhost"];var t=(e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/)||[])[4],i;return t&&(i=(t.match(/[^\.]+\.[^\.]+$/)||[])[0]),[t,i]},ml=at(Ct()),mo={exists:function(){var e=ml.default.performance;return(e&&e.timing)!==void 0},domContentLoadedEventEnd:function(){var e=ml.default.performance,t=e&&e.timing;return t&&t.domContentLoadedEventEnd},navigationStart:function(){var e=ml.default.performance,t=e&&e.timing;return t&&t.navigationStart}};function Te(e,t,i){i=i===void 0?1:i,e[t]=e[t]||0,e[t]+=i}function po(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{},a=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable}))),a.forEach(function(r){S(e,r,i[r])})}return e}function OE(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),i.push.apply(i,a)}return i}function hu(e,t){return t=t!=null?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):OE(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}),e}var NE=["x-cdn","content-type"],Gm=["x-request-id","cf-ray","x-amz-cf-id","x-akamai-request-id"],PE=NE.concat(Gm);function mu(e){e=e||"";var t={};return e.trim().split(/[\r\n]+/).forEach(function(i){if(i){var a=i.split(": "),r=a.shift();r&&(PE.indexOf(r.toLowerCase())>=0||r.toLowerCase().indexOf("x-litix-")===0)&&(t[r]=a.join(": "))}}),t}function vo(e){if(e){var t=Gm.find(function(i){return e[i]!==void 0});return t?e[t]:void 0}}var UE=function(e){var t={};for(var i in e){var a=e[i];if(a["DATA-ID"].search("io.litix.data.")!==-1){var r=a["DATA-ID"].replace("io.litix.data.","");t[r]=a.VALUE}}return t},$m=UE,Un=function(e){if(!e)return{};var t=mo.navigationStart(),i=e.loading,a=i?i.start:e.trequest,r=i?i.first:e.tfirst,n=i?i.end:e.tload;return{bytesLoaded:e.total,requestStart:Math.round(t+a),responseStart:Math.round(t+r),responseEnd:Math.round(t+n)}},Ar=function(e){if(!(!e||typeof e.getAllResponseHeaders!="function"))return mu(e.getAllResponseHeaders())},HE=function(e,t,i){arguments.length>3&&arguments[3]!==void 0&&arguments[3];var a=arguments.length>4?arguments[4]:void 0,r=e.log,n=e.utils.secondsToMs,s=function(E){var g=parseInt(a.version),T;return g===1&&E.programDateTime!==null&&(T=E.programDateTime),g===0&&E.pdt!==null&&(T=E.pdt),T};if(!mo.exists()){r.warn("performance timing not supported. Not tracking HLS.js.");return}var o=function(E,g){return e.emit(t,E,g)},l=function(E,g){var T=g.levels,y=g.audioTracks,w=g.url,R=g.stats,M=g.networkDetails,B=g.sessionData,Z={},j={};T.forEach(function(Ee,Ve){Z[Ve]={width:Ee.width,height:Ee.height,bitrate:Ee.bitrate,attrs:Ee.attrs}}),y.forEach(function(Ee,Ve){j[Ve]={name:Ee.name,language:Ee.lang,bitrate:Ee.bitrate}});var K=Un(R),ce=K.bytesLoaded,We=K.requestStart,Qe=K.responseStart,ze=K.responseEnd;o("requestcompleted",hu(po({},$m(B)),{request_event_type:E,request_bytes_loaded:ce,request_start:We,request_response_start:Qe,request_response_end:ze,request_type:"manifest",request_hostname:kt(w),request_response_headers:Ar(M),request_rendition_lists:{media:Z,audio:j,video:{}}}))};i.on(a.Events.MANIFEST_LOADED,l);var m=function(E,g){var T=g.details,y=g.level,w=g.networkDetails,R=g.stats,M=Un(R),B=M.bytesLoaded,Z=M.requestStart,j=M.responseStart,K=M.responseEnd,ce=T.fragments[T.fragments.length-1],We=s(ce)+n(ce.duration);o("requestcompleted",{request_event_type:E,request_bytes_loaded:B,request_start:Z,request_response_start:j,request_response_end:K,request_current_level:y,request_type:"manifest",request_hostname:kt(T.url),request_response_headers:Ar(w),video_holdback:T.holdBack&&n(T.holdBack),video_part_holdback:T.partHoldBack&&n(T.partHoldBack),video_part_target_duration:T.partTarget&&n(T.partTarget),video_target_duration:T.targetduration&&n(T.targetduration),video_source_is_live:T.live,player_manifest_newest_program_time:isNaN(We)?void 0:We})};i.on(a.Events.LEVEL_LOADED,m);var p=function(E,g){var T=g.details,y=g.networkDetails,w=g.stats,R=Un(w),M=R.bytesLoaded,B=R.requestStart,Z=R.responseStart,j=R.responseEnd;o("requestcompleted",{request_event_type:E,request_bytes_loaded:M,request_start:B,request_response_start:Z,request_response_end:j,request_type:"manifest",request_hostname:kt(T.url),request_response_headers:Ar(y)})};i.on(a.Events.AUDIO_TRACK_LOADED,p);var d=function(E,g){var T=g.stats,y=g.networkDetails,w=g.frag;T=T||w.stats;var R=Un(T),M=R.bytesLoaded,B=R.requestStart,Z=R.responseStart,j=R.responseEnd,K=y?Ar(y):void 0,ce={request_event_type:E,request_bytes_loaded:M,request_start:B,request_response_start:Z,request_response_end:j,request_hostname:y?kt(y.responseURL):void 0,request_id:K?vo(K):void 0,request_response_headers:K,request_media_duration:w.duration,request_url:y==null?void 0:y.responseURL};w.type==="main"?(ce.request_type="media",ce.request_current_level=w.level,ce.request_video_width=(i.levels[w.level]||{}).width,ce.request_video_height=(i.levels[w.level]||{}).height,ce.request_labeled_bitrate=(i.levels[w.level]||{}).bitrate):ce.request_type=w.type,o("requestcompleted",ce)};i.on(a.Events.FRAG_LOADED,d);var u=function(E,g){var T=g.frag,y=T.start;o("fragmentchange",{currentFragmentPDT:s(T),currentFragmentStart:n(y)})};i.on(a.Events.FRAG_CHANGED,u);var c=function(E,g){var T=g.type,y=g.details,w=g.response,R=g.fatal,M=g.frag,B=g.networkDetails,Z=(M==null?void 0:M.url)||g.url||"",j=B?Ar(B):void 0;if((y===a.ErrorDetails.MANIFEST_LOAD_ERROR||y===a.ErrorDetails.MANIFEST_LOAD_TIMEOUT||y===a.ErrorDetails.FRAG_LOAD_ERROR||y===a.ErrorDetails.FRAG_LOAD_TIMEOUT||y===a.ErrorDetails.LEVEL_LOAD_ERROR||y===a.ErrorDetails.LEVEL_LOAD_TIMEOUT||y===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||y===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT||y===a.ErrorDetails.SUBTITLE_LOAD_ERROR||y===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT||y===a.ErrorDetails.KEY_LOAD_ERROR||y===a.ErrorDetails.KEY_LOAD_TIMEOUT)&&o("requestfailed",{request_error:y,request_url:Z,request_hostname:kt(Z),request_id:j?vo(j):void 0,request_type:y===a.ErrorDetails.FRAG_LOAD_ERROR||y===a.ErrorDetails.FRAG_LOAD_TIMEOUT?"media":y===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||y===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT?"audio":y===a.ErrorDetails.SUBTITLE_LOAD_ERROR||y===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT?"subtitle":y===a.ErrorDetails.KEY_LOAD_ERROR||y===a.ErrorDetails.KEY_LOAD_TIMEOUT?"encryption":"manifest",request_error_code:w==null?void 0:w.code,request_error_text:w==null?void 0:w.text}),R){var K;o("error",{player_error_code:T,player_error_message:y,player_error_context:"".concat(Z?"url: ".concat(Z,`
`):"")+"".concat(w&&(w.code||w.text)?"response: ".concat(w.code,", ").concat(w.text,`
`):"")+"".concat(g.reason?"failure reason: ".concat(g.reason,`
`):"")+"".concat(g.level?"level: ".concat(g.level,`
`):"")+"".concat(g.parent?"parent stream controller: ".concat(g.parent,`
`):"")+"".concat(g.buffer?"buffer length: ".concat(g.buffer,`
`):"")+"".concat(g.error?"error: ".concat(g.error,`
`):"")+"".concat(g.event?"event: ".concat(g.event,`
`):"")+"".concat(g.err?"error message: ".concat((K=g.err)===null||K===void 0?void 0:K.message,`
`):"")})}};i.on(a.Events.ERROR,c);var v=function(E,g){var T=g.frag,y=T&&T._url||"";o("requestcanceled",{request_event_type:E,request_url:y,request_type:"media",request_hostname:kt(y)})};i.on(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,v);var b=function(E,g){var T=g.level,y=i.levels[T];if(y&&y.attrs&&y.attrs.BANDWIDTH){var w=y.attrs.BANDWIDTH,R,M=parseFloat(y.attrs["FRAME-RATE"]);isNaN(M)||(R=M),w?o("renditionchange",{video_source_fps:R,video_source_bitrate:w,video_source_width:y.width,video_source_height:y.height,video_source_rendition_name:y.name,video_source_codec:y==null?void 0:y.videoCodec}):r.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js")}};i.on(a.Events.LEVEL_SWITCHED,b),i._stopMuxMonitor=function(){i.off(a.Events.MANIFEST_LOADED,l),i.off(a.Events.LEVEL_LOADED,m),i.off(a.Events.AUDIO_TRACK_LOADED,p),i.off(a.Events.FRAG_LOADED,d),i.off(a.Events.FRAG_CHANGED,u),i.off(a.Events.ERROR,c),i.off(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,v),i.off(a.Events.LEVEL_SWITCHED,b),i.off(a.Events.DESTROYING,i._stopMuxMonitor),delete i._stopMuxMonitor},i.on(a.Events.DESTROYING,i._stopMuxMonitor)},BE=function(e){e&&typeof e._stopMuxMonitor=="function"&&e._stopMuxMonitor()},eh=function(e,t){if(!e||!e.requestEndDate)return{};var i=kt(e.url),a=e.url,r=e.bytesLoaded,n=new Date(e.requestStartDate).getTime(),s=new Date(e.firstByteDate).getTime(),o=new Date(e.requestEndDate).getTime(),l=isNaN(e.duration)?0:e.duration,m=typeof t.getMetricsFor=="function"?t.getMetricsFor(e.mediaType).HttpList:t.getDashMetrics().getHttpRequests(e.mediaType),p;m.length>0&&(p=mu(m[m.length-1]._responseHeaders||""));var d=p?vo(p):void 0;return{requestStart:n,requestResponseStart:s,requestResponseEnd:o,requestBytesLoaded:r,requestResponseHeaders:p,requestMediaDuration:l,requestHostname:i,requestUrl:a,requestId:d}},WE=function(e,t){var i=t.getQualityFor(e),a=t.getCurrentTrackFor(e).bitrateList;return a?{currentLevel:i,renditionWidth:a[i].width||null,renditionHeight:a[i].height||null,renditionBitrate:a[i].bandwidth}:{}},FE=function(e){var t;return(t=e.match(/.*codecs\*?="(.*)"/))===null||t===void 0?void 0:t[1]},KE=function(e){try{var t,i;return(i=e.getVersion)===null||i===void 0||(t=i.call(e))===null||t===void 0?void 0:t.split(".").map(function(a){return parseInt(a)})[0]}catch(a){return!1}},VE=function(e,t,i){arguments.length>3&&arguments[3]!==void 0&&arguments[3];var a=e.log;if(!i||!i.on){a.warn("Invalid dash.js player reference. Monitoring blocked.");return}var r=KE(i),n=function(T,y){return e.emit(t,T,y)},s=function(T){var y=T.type,w=(T.data||{}).url;n("requestcompleted",{request_event_type:y,request_start:0,request_response_start:0,request_response_end:0,request_bytes_loaded:-1,request_type:"manifest",request_hostname:kt(w),request_url:w})};i.on("manifestLoaded",s);var o={},l=function(T){if(typeof T.getRequests!="function")return null;var y=T.getRequests({state:"executed"});return y.length===0?null:y[y.length-1]},m=function(T){var y=T.type,w=T.fragmentModel,R=T.chunk;p({type:y,request:l(w),chunk:R})},p=function(T){var y=T.type,w=T.chunk,R=T.request,M=(w||{}).mediaInfo||{},B=M.type,Z=M.bitrateList;Z=Z||[];var j={};Z.forEach(function(Oe,Re){j[Re]={},j[Re].width=Oe.width,j[Re].height=Oe.height,j[Re].bitrate=Oe.bandwidth,j[Re].attrs={}}),B==="video"?o.video=j:B==="audio"?o.audio=j:o.media=j;var K=eh(R,i),ce=K.requestStart,We=K.requestResponseStart,Qe=K.requestResponseEnd,ze=K.requestResponseHeaders,Ee=K.requestMediaDuration,Ve=K.requestHostname,vt=K.requestUrl,Lt=K.requestId;n("requestcompleted",{request_event_type:y,request_start:ce,request_response_start:We,request_response_end:Qe,request_bytes_loaded:-1,request_type:B+"_init",request_response_headers:ze,request_hostname:Ve,request_id:Lt,request_url:vt,request_media_duration:Ee,request_rendition_lists:o})};r>=4?i.on("initFragmentLoaded",p):i.on("initFragmentLoaded",m);var d=function(T){var y=T.type,w=T.fragmentModel,R=T.chunk;u({type:y,request:l(w),chunk:R})},u=function(T){var y=T.type,w=T.chunk,R=T.request,M=w||{},B=M.mediaInfo,Z=M.start,j=(B||{}).type,K=eh(R,i),ce=K.requestStart,We=K.requestResponseStart,Qe=K.requestResponseEnd,ze=K.requestBytesLoaded,Ee=K.requestResponseHeaders,Ve=K.requestMediaDuration,vt=K.requestHostname,Lt=K.requestUrl,Oe=K.requestId,Re=WE(j,i),ai=Re.currentLevel,Fe=Re.renditionWidth,nt=Re.renditionHeight,Ea=Re.renditionBitrate;n("requestcompleted",{request_event_type:y,request_start:ce,request_response_start:We,request_response_end:Qe,request_bytes_loaded:ze,request_type:j,request_response_headers:Ee,request_hostname:vt,request_id:Oe,request_url:Lt,request_media_start_time:Z,request_media_duration:Ve,request_current_level:ai,request_labeled_bitrate:Ea,request_video_width:Fe,request_video_height:nt})};r>=4?i.on("mediaFragmentLoaded",u):i.on("mediaFragmentLoaded",d);var c={video:void 0,audio:void 0,totalBitrate:void 0},v=function(){if(c.video&&typeof c.video.bitrate=="number"){if(!(c.video.width&&c.video.height)){a.warn("have bitrate info for video but missing width/height");return}var T=c.video.bitrate;if(c.audio&&typeof c.audio.bitrate=="number"&&(T+=c.audio.bitrate),T!==c.totalBitrate)return c.totalBitrate=T,{video_source_bitrate:T,video_source_height:c.video.height,video_source_width:c.video.width,video_source_codec:FE(c.video.codec)}}},b=function(T,y,w){if(typeof T.newQuality!="number"){a.warn("missing evt.newQuality in qualityChangeRendered event",T);return}var R=T.mediaType;if(R==="audio"||R==="video"){var M=i.getBitrateInfoListFor(R).find(function(Z){return Z.qualityIndex===T.newQuality});if(!(M&&typeof M.bitrate=="number")){a.warn("missing bitrate info for ".concat(R));return}c[R]=hu(po({},M),{codec:i.getCurrentTrackFor(R).codec});var B=v();B&&n("renditionchange",B)}};i.on("qualityChangeRendered",b);var E=function(T){var y=T.request,w=T.mediaType;y=y||{},n("requestcanceled",{request_event_type:y.type+"_"+y.action,request_url:y.url,request_type:w,request_hostname:kt(y.url)})};i.on("fragmentLoadingAbandoned",E);var g=function(T){var y=T.error,w,R,M=(y==null||(w=y.data)===null||w===void 0?void 0:w.request)||{},B=(y==null||(R=y.data)===null||R===void 0?void 0:R.response)||{};(y==null?void 0:y.code)===27&&n("requestfailed",{request_error:M.type+"_"+M.action,request_url:M.url,request_hostname:kt(M.url),request_type:M.mediaType,request_error_code:B.status,request_error_text:B.statusText});var Z="".concat(M!=null&&M.url?"url: ".concat(M.url,`
`):"")+"".concat(B!=null&&B.status||B!=null&&B.statusText?"response: ".concat(B==null?void 0:B.status,", ").concat(B==null?void 0:B.statusText,`
`):"");n("error",{player_error_code:y==null?void 0:y.code,player_error_message:y==null?void 0:y.message,player_error_context:Z})};i.on("error",g),i._stopMuxMonitor=function(){i.off("manifestLoaded",s),i.off("initFragmentLoaded",p),i.off("mediaFragmentLoaded",u),i.off("qualityChangeRendered",b),i.off("error",g),i.off("fragmentLoadingAbandoned",E),delete i._stopMuxMonitor}},qE=function(e){e&&typeof e._stopMuxMonitor=="function"&&e._stopMuxMonitor()},th=0,YE=(function(){function e(){Me(this,e),S(this,"_listeners",void 0)}return ii(e,[{key:"on",value:function(t,i,a){return i._eventEmitterGuid=i._eventEmitterGuid||++th,this._listeners=this._listeners||{},this._listeners[t]=this._listeners[t]||[],a&&(i=i.bind(a)),this._listeners[t].push(i),i}},{key:"off",value:function(t,i){var a=this._listeners&&this._listeners[t];a&&a.forEach(function(r,n){r._eventEmitterGuid===i._eventEmitterGuid&&a.splice(n,1)})}},{key:"one",value:function(t,i,a){var r=this;i._eventEmitterGuid=i._eventEmitterGuid||++th;var n=function(){r.off(t,n),i.apply(a||this,arguments)};n._eventEmitterGuid=i._eventEmitterGuid,this.on(t,n)}},{key:"emit",value:function(t,i){var a=this;if(this._listeners){i=i||{};var r=this._listeners["before*"]||[],n=this._listeners[t]||[],s=this._listeners["after"+t]||[],o=function(l,m){l=l.slice(),l.forEach(function(p){p.call(a,{type:t},m)})};o(r,i),o(n,i),o(s,i)}}}]),e})(),pl=at(Ct()),GE=(function(){function e(t){var i=this;Me(this,e),S(this,"_playbackHeartbeatInterval",void 0),S(this,"_playheadShouldBeProgressing",void 0),S(this,"pm",void 0),this.pm=t,this._playbackHeartbeatInterval=null,this._playheadShouldBeProgressing=!1,t.on("playing",function(){i._playheadShouldBeProgressing=!0}),t.on("play",this._startPlaybackHeartbeatInterval.bind(this)),t.on("playing",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adbreakstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplay",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplaying",this._startPlaybackHeartbeatInterval.bind(this)),t.on("devicewake",this._startPlaybackHeartbeatInterval.bind(this)),t.on("viewstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("rebufferstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("pause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("ended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("viewend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("error",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("aderror",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adpause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adbreakend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("seeked",function(){t.data.player_is_paused?i._stopPlaybackHeartbeatInterval():i._startPlaybackHeartbeatInterval()}),t.on("timeupdate",function(){i._playbackHeartbeatInterval!==null&&t.emit("playbackheartbeat")}),t.on("devicesleep",function(a,r){i._playbackHeartbeatInterval!==null&&(pl.default.clearInterval(i._playbackHeartbeatInterval),t.emit("playbackheartbeatend",{viewer_time:r.viewer_time}),i._playbackHeartbeatInterval=null)})}return ii(e,[{key:"_startPlaybackHeartbeatInterval",value:function(){var t=this;this._playbackHeartbeatInterval===null&&(this.pm.emit("playbackheartbeat"),this._playbackHeartbeatInterval=pl.default.setInterval(function(){t.pm.emit("playbackheartbeat")},this.pm.playbackHeartbeatTime))}},{key:"_stopPlaybackHeartbeatInterval",value:function(){this._playheadShouldBeProgressing=!1,this._playbackHeartbeatInterval!==null&&(pl.default.clearInterval(this._playbackHeartbeatInterval),this.pm.emit("playbackheartbeatend"),this._playbackHeartbeatInterval=null)}}]),e})(),$E=function e(t){var i=this;Me(this,e),S(this,"viewErrored",void 0),t.on("viewinit",function(){i.viewErrored=!1}),t.on("error",function(a,r){try{var n=t.errorTranslator({player_error_code:r.player_error_code,player_error_message:r.player_error_message,player_error_context:r.player_error_context,player_error_severity:r.player_error_severity,player_error_business_exception:r.player_error_business_exception});n&&(t.data.player_error_code=n.player_error_code||r.player_error_code,t.data.player_error_message=n.player_error_message||r.player_error_message,t.data.player_error_context=n.player_error_context||r.player_error_context,t.data.player_error_severity=n.player_error_severity||r.player_error_severity,t.data.player_error_business_exception=n.player_error_business_exception||r.player_error_business_exception,i.viewErrored=!0)}catch(s){t.mux.log.warn("Exception in error translator callback.",s),i.viewErrored=!0}}),t.on("aftererror",function(){var a,r,n,s,o;(a=t.data)===null||a===void 0||delete a.player_error_code,(r=t.data)===null||r===void 0||delete r.player_error_message,(n=t.data)===null||n===void 0||delete n.player_error_context,(s=t.data)===null||s===void 0||delete s.player_error_severity,(o=t.data)===null||o===void 0||delete o.player_error_business_exception})},QE=(function(){function e(t){Me(this,e),S(this,"_watchTimeTrackerLastCheckedTime",void 0),S(this,"pm",void 0),this.pm=t,this._watchTimeTrackerLastCheckedTime=null,t.on("playbackheartbeat",this._updateWatchTime.bind(this)),t.on("playbackheartbeatend",this._clearWatchTimeState.bind(this))}return ii(e,[{key:"_updateWatchTime",value:function(t,i){var a=i.viewer_time;this._watchTimeTrackerLastCheckedTime===null&&(this._watchTimeTrackerLastCheckedTime=a),Te(this.pm.data,"view_watch_time",a-this._watchTimeTrackerLastCheckedTime),this._watchTimeTrackerLastCheckedTime=a}},{key:"_clearWatchTimeState",value:function(t,i){this._updateWatchTime(t,i),this._watchTimeTrackerLastCheckedTime=null}}]),e})(),zE=(function(){function e(t){var i=this;Me(this,e),S(this,"_playbackTimeTrackerLastPlayheadPosition",void 0),S(this,"_lastTime",void 0),S(this,"_isAdPlaying",void 0),S(this,"_callbackUpdatePlaybackTime",void 0),S(this,"pm",void 0),this.pm=t,this._playbackTimeTrackerLastPlayheadPosition=-1,this._lastTime=Ae.now(),this._isAdPlaying=!1,this._callbackUpdatePlaybackTime=null;var a=this._startPlaybackTimeTracking.bind(this);t.on("playing",a),t.on("adplaying",a),t.on("seeked",a);var r=this._stopPlaybackTimeTracking.bind(this);t.on("playbackheartbeatend",r),t.on("seeking",r),t.on("adplaying",function(){i._isAdPlaying=!0}),t.on("adended",function(){i._isAdPlaying=!1}),t.on("adpause",function(){i._isAdPlaying=!1}),t.on("adbreakstart",function(){i._isAdPlaying=!1}),t.on("adbreakend",function(){i._isAdPlaying=!1}),t.on("adplay",function(){i._isAdPlaying=!1}),t.on("viewinit",function(){i._playbackTimeTrackerLastPlayheadPosition=-1,i._lastTime=Ae.now(),i._isAdPlaying=!1,i._callbackUpdatePlaybackTime=null})}return ii(e,[{key:"_startPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime===null&&(this._callbackUpdatePlaybackTime=this._updatePlaybackTime.bind(this),this._playbackTimeTrackerLastPlayheadPosition=this.pm.data.player_playhead_time,this.pm.on("playbackheartbeat",this._callbackUpdatePlaybackTime))}},{key:"_stopPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime&&(this._updatePlaybackTime(),this.pm.off("playbackheartbeat",this._callbackUpdatePlaybackTime),this._callbackUpdatePlaybackTime=null,this._playbackTimeTrackerLastPlayheadPosition=-1)}},{key:"_updatePlaybackTime",value:function(){var t=this.pm.data.player_playhead_time,i=Ae.now(),a=-1;this._playbackTimeTrackerLastPlayheadPosition>=0&&t>this._playbackTimeTrackerLastPlayheadPosition?a=t-this._playbackTimeTrackerLastPlayheadPosition:this._isAdPlaying&&(a=i-this._lastTime),a>0&&a<=1e3&&Te(this.pm.data,"view_content_playback_time",a),this._playbackTimeTrackerLastPlayheadPosition=t,this._lastTime=i}}]),e})(),ZE=(function(){function e(t){Me(this,e),S(this,"pm",void 0),this.pm=t;var i=this._updatePlayheadTime.bind(this);t.on("playbackheartbeat",i),t.on("playbackheartbeatend",i),t.on("timeupdate",i),t.on("destroy",function(){t.off("timeupdate",i)})}return ii(e,[{key:"_updateMaxPlayheadPosition",value:function(){this.pm.data.view_max_playhead_position=typeof this.pm.data.view_max_playhead_position=="undefined"?this.pm.data.player_playhead_time:Math.max(this.pm.data.view_max_playhead_position,this.pm.data.player_playhead_time)}},{key:"_updatePlayheadTime",value:function(t,i){var a=this,r=function(){a.pm.currentFragmentPDT&&a.pm.currentFragmentStart&&(a.pm.data.player_program_time=a.pm.currentFragmentPDT+a.pm.data.player_playhead_time-a.pm.currentFragmentStart)};if(i&&i.player_playhead_time)this.pm.data.player_playhead_time=i.player_playhead_time,r(),this._updateMaxPlayheadPosition();else if(this.pm.getPlayheadTime){var n=this.pm.getPlayheadTime();typeof n!="undefined"&&(this.pm.data.player_playhead_time=n,r(),this._updateMaxPlayheadPosition())}}}]),e})(),ih=300*1e3,jE=function e(t){if(Me(this,e),!t.disableRebufferTracking){var i,a=function(n,s){r(s),i=void 0},r=function(n){if(i){var s=n.viewer_time-i;Te(t.data,"view_rebuffer_duration",s),i=n.viewer_time,t.data.view_rebuffer_duration>ih&&(t.emit("viewend"),t.send("viewend"),t.mux.log.warn("Ending view after rebuffering for longer than ".concat(ih,"ms, future events will be ignored unless a programchange or videochange occurs.")))}t.data.view_watch_time>=0&&t.data.view_rebuffer_count>0&&(t.data.view_rebuffer_frequency=t.data.view_rebuffer_count/t.data.view_watch_time,t.data.view_rebuffer_percentage=t.data.view_rebuffer_duration/t.data.view_watch_time)};t.on("playbackheartbeat",function(n,s){return r(s)}),t.on("rebufferstart",function(n,s){i||(Te(t.data,"view_rebuffer_count",1),i=s.viewer_time,t.one("rebufferend",a))}),t.on("viewinit",function(){i=void 0,t.off("rebufferend",a)})}},XE=(function(){function e(t){var i=this;Me(this,e),S(this,"_lastCheckedTime",void 0),S(this,"_lastPlayheadTime",void 0),S(this,"_lastPlayheadTimeUpdatedTime",void 0),S(this,"_rebuffering",void 0),S(this,"pm",void 0),this.pm=t,!(t.disableRebufferTracking||t.disablePlayheadRebufferTracking)&&(this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null,t.on("playbackheartbeat",this._checkIfRebuffering.bind(this)),t.on("playbackheartbeatend",this._cleanupRebufferTracker.bind(this)),t.on("seeking",function(){i._cleanupRebufferTracker(null,{viewer_time:Ae.now()})}))}return ii(e,[{key:"_checkIfRebuffering",value:function(t,i){if(this.pm.seekingTracker.isSeeking||this.pm.adTracker.isAdBreak||!this.pm.playbackHeartbeat._playheadShouldBeProgressing){this._cleanupRebufferTracker(t,i);return}if(this._lastCheckedTime===null){this._prepareRebufferTrackerState(i.viewer_time);return}if(this._lastPlayheadTime!==this.pm.data.player_playhead_time){this._cleanupRebufferTracker(t,i,!0);return}var a=i.viewer_time-this._lastPlayheadTimeUpdatedTime;typeof this.pm.sustainedRebufferThreshold=="number"&&a>=this.pm.sustainedRebufferThreshold&&(this._rebuffering||(this._rebuffering=!0,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}))),this._lastCheckedTime=i.viewer_time}},{key:"_clearRebufferTrackerState",value:function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null}},{key:"_prepareRebufferTrackerState",value:function(t){this._lastCheckedTime=t,this._lastPlayheadTime=this.pm.data.player_playhead_time,this._lastPlayheadTimeUpdatedTime=t}},{key:"_cleanupRebufferTracker",value:function(t,i){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(this._rebuffering)this._rebuffering=!1,this.pm.emit("rebufferend",{viewer_time:i.viewer_time});else{if(this._lastCheckedTime===null)return;var r=this.pm.data.player_playhead_time-this._lastPlayheadTime,n=i.viewer_time-this._lastPlayheadTimeUpdatedTime;typeof this.pm.minimumRebufferDuration=="number"&&r>0&&n-r>this.pm.minimumRebufferDuration&&(this._lastCheckedTime=null,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}),this.pm.emit("rebufferend",{viewer_time:this._lastPlayheadTimeUpdatedTime+n-r}))}a?this._prepareRebufferTrackerState(i.viewer_time):this._clearRebufferTrackerState()}}]),e})(),JE=(function(){function e(t){var i=this;Me(this,e),S(this,"NAVIGATION_START",void 0),S(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){var a=t.data,r=a.view_id;if(!a.view_program_changed){var n=function(s,o){var l=o.viewer_time;(s.type==="playing"&&typeof t.data.view_time_to_first_frame=="undefined"||s.type==="adplaying"&&(typeof t.data.view_time_to_first_frame=="undefined"||i._inPrerollPosition()))&&i.calculateTimeToFirstFrame(l||Ae.now(),r)};t.one("playing",n),t.one("adplaying",n),t.one("viewend",function(){t.off("playing",n),t.off("adplaying",n)})}})}return ii(e,[{key:"_inPrerollPosition",value:function(){return typeof this.pm.data.view_content_playback_time=="undefined"||this.pm.data.view_content_playback_time<=1e3}},{key:"calculateTimeToFirstFrame",value:function(t,i){i===this.pm.data.view_id&&(this.pm.watchTimeTracker._updateWatchTime(null,{viewer_time:t}),this.pm.data.view_time_to_first_frame=this.pm.data.view_watch_time,(this.pm.data.player_autoplay_on||this.pm.data.video_is_autoplay)&&this.NAVIGATION_START&&(this.pm.data.view_aggregate_startup_time=this.pm.data.view_start+this.pm.data.view_watch_time-this.NAVIGATION_START))}}]),e})(),e_=function e(t){var i=this;Me(this,e),S(this,"_lastPlayerHeight",void 0),S(this,"_lastPlayerWidth",void 0),S(this,"_lastPlayheadPosition",void 0),S(this,"_lastSourceHeight",void 0),S(this,"_lastSourceWidth",void 0),t.on("viewinit",function(){i._lastPlayheadPosition=-1}),["pause","rebufferstart","seeking","error","adbreakstart","hb","renditionchange","orientationchange","viewend"].forEach(function(a){t.on(a,function(){if(i._lastPlayheadPosition>=0&&t.data.player_playhead_time>=0&&i._lastPlayerWidth>=0&&i._lastSourceWidth>0&&i._lastPlayerHeight>=0&&i._lastSourceHeight>0){var r=t.data.player_playhead_time-i._lastPlayheadPosition;if(r<0){i._lastPlayheadPosition=-1;return}var n=Math.min(i._lastPlayerWidth/i._lastSourceWidth,i._lastPlayerHeight/i._lastSourceHeight),s=Math.max(0,n-1),o=Math.max(0,1-n);t.data.view_max_upscale_percentage=Math.max(t.data.view_max_upscale_percentage||0,s),t.data.view_max_downscale_percentage=Math.max(t.data.view_max_downscale_percentage||0,o),Te(t.data,"view_total_content_playback_time",r),Te(t.data,"view_total_upscaling",s*r),Te(t.data,"view_total_downscaling",o*r)}i._lastPlayheadPosition=-1})}),["playing","hb","renditionchange","orientationchange"].forEach(function(a){t.on(a,function(){i._lastPlayheadPosition=t.data.player_playhead_time,i._lastPlayerWidth=t.data.player_width,i._lastPlayerHeight=t.data.player_height,i._lastSourceWidth=t.data.video_source_width,i._lastSourceHeight=t.data.video_source_height})})},t_=2e3,i_=function e(t){var i=this;Me(this,e),S(this,"isSeeking",void 0),this.isSeeking=!1;var a=-1,r=function(){var n=Ae.now(),s=(t.data.viewer_time||n)-(a||n);Te(t.data,"view_seek_duration",s),t.data.view_max_seek_time=Math.max(t.data.view_max_seek_time||0,s),i.isSeeking=!1,a=-1};t.on("seeking",function(n,s){if(Object.assign(t.data,s),i.isSeeking&&s.viewer_time-a<=t_){a=s.viewer_time;return}i.isSeeking&&r(),i.isSeeking=!0,a=s.viewer_time,Te(t.data,"view_seek_count",1),t.send("seeking")}),t.on("seeked",function(){r()}),t.on("viewend",function(){i.isSeeking&&(r(),t.send("seeked")),i.isSeeking=!1,a=-1})},ah=function(e,t){e.push(t),e.sort(function(i,a){return i.viewer_time-a.viewer_time})},a_=["adbreakstart","adrequest","adresponse","adplay","adplaying","adpause","adended","adbreakend","aderror","adclicked","adskipped"],r_=(function(){function e(t){var i=this;Me(this,e),S(this,"_adHasPlayed",void 0),S(this,"_adRequests",void 0),S(this,"_adResponses",void 0),S(this,"_currentAdRequestNumber",void 0),S(this,"_currentAdResponseNumber",void 0),S(this,"_prerollPlayTime",void 0),S(this,"_wouldBeNewAdPlay",void 0),S(this,"isAdBreak",void 0),S(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){i.isAdBreak=!1,i._currentAdRequestNumber=0,i._currentAdResponseNumber=0,i._adRequests=[],i._adResponses=[],i._adHasPlayed=!1,i._wouldBeNewAdPlay=!0,i._prerollPlayTime=void 0}),a_.forEach(function(r){return t.on(r,i._updateAdData.bind(i))});var a=function(){i.isAdBreak=!1};t.on("adbreakstart",function(){i.isAdBreak=!0}),t.on("play",a),t.on("playing",a),t.on("viewend",a),t.on("adrequest",function(r,n){n=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdRequestNumber++},n),ah(i._adRequests,n),Te(t.data,"view_ad_request_count"),i.inPrerollPosition()&&(t.data.view_preroll_requested=!0,i._adHasPlayed||Te(t.data,"view_preroll_request_count"))}),t.on("adresponse",function(r,n){n=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdResponseNumber++},n),ah(i._adResponses,n);var s=i.findAdRequest(n.ad_request_id);s&&Te(t.data,"view_ad_request_time",Math.max(0,n.viewer_time-s.viewer_time))}),t.on("adplay",function(r,n){i._adHasPlayed=!0,i._wouldBeNewAdPlay&&(i._wouldBeNewAdPlay=!1,Te(t.data,"view_ad_played_count")),i.inPrerollPosition()&&!t.data.view_preroll_played&&(t.data.view_preroll_played=!0,i._adRequests.length>0&&(t.data.view_preroll_request_time=Math.max(0,n.viewer_time-i._adRequests[0].viewer_time)),t.data.view_start&&(t.data.view_startup_preroll_request_time=Math.max(0,n.viewer_time-t.data.view_start)),i._prerollPlayTime=n.viewer_time)}),t.on("adplaying",function(r,n){i.inPrerollPosition()&&typeof t.data.view_preroll_load_time=="undefined"&&typeof i._prerollPlayTime!="undefined"&&(t.data.view_preroll_load_time=n.viewer_time-i._prerollPlayTime,t.data.view_startup_preroll_load_time=n.viewer_time-i._prerollPlayTime)}),t.on("adclicked",function(r,n){i._wouldBeNewAdPlay||Te(t.data,"view_ad_clicked_count")}),t.on("adskipped",function(r,n){i._wouldBeNewAdPlay||Te(t.data,"view_ad_skipped_count")}),t.on("adended",function(){i._wouldBeNewAdPlay=!0}),t.on("aderror",function(){i._wouldBeNewAdPlay=!0})}return ii(e,[{key:"inPrerollPosition",value:function(){return typeof this.pm.data.view_content_playback_time=="undefined"||this.pm.data.view_content_playback_time<=1e3}},{key:"findAdRequest",value:function(t){for(var i=0;i<this._adRequests.length;i++)if(this._adRequests[i].ad_request_id===t)return this._adRequests[i]}},{key:"_updateAdData",value:function(t,i){if(this.inPrerollPosition()){if(!this.pm.data.view_preroll_ad_tag_hostname&&i.ad_tag_url){var a=pi(En(i.ad_tag_url),2),r=a[0],n=a[1];this.pm.data.view_preroll_ad_tag_domain=n,this.pm.data.view_preroll_ad_tag_hostname=r}if(!this.pm.data.view_preroll_ad_asset_hostname&&i.ad_asset_url){var s=pi(En(i.ad_asset_url),2),o=s[0],l=s[1];this.pm.data.view_preroll_ad_asset_domain=l,this.pm.data.view_preroll_ad_asset_hostname=o}}this.pm.data.ad_asset_url=i==null?void 0:i.ad_asset_url,this.pm.data.ad_tag_url=i==null?void 0:i.ad_tag_url,this.pm.data.ad_creative_id=i==null?void 0:i.ad_creative_id,this.pm.data.ad_id=i==null?void 0:i.ad_id,this.pm.data.ad_universal_id=i==null?void 0:i.ad_universal_id}}]),e})(),rh=at(Ct()),n_=function e(t){Me(this,e);var i,a,r=function(){t.disableRebufferTracking||(Te(t.data,"view_waiting_rebuffer_count",1),i=Ae.now(),a=rh.default.setInterval(function(){if(i){var m=Ae.now();Te(t.data,"view_waiting_rebuffer_duration",m-i),i=m}},250))},n=function(){t.disableRebufferTracking||i&&(Te(t.data,"view_waiting_rebuffer_duration",Ae.now()-i),i=!1,rh.default.clearInterval(a))},s=!1,o=function(){s=!0},l=function(){s=!1,n()};t.on("waiting",function(){s&&r()}),t.on("playing",function(){n(),o()}),t.on("pause",l),t.on("seeking",l)},s_=function e(t){var i=this;Me(this,e),S(this,"lastWallClockTime",void 0);var a=function(){i.lastWallClockTime=Ae.now(),t.on("before*",r)},r=function(n){var s=Ae.now(),o=i.lastWallClockTime;i.lastWallClockTime=s,s-o>3e4&&(t.emit("devicesleep",{viewer_time:o}),Object.assign(t.data,{viewer_time:o}),t.send("devicesleep"),t.emit("devicewake",{viewer_time:s}),Object.assign(t.data,{viewer_time:s}),t.send("devicewake"))};t.one("playbackheartbeat",a),t.on("playbackheartbeatend",function(){t.off("before*",r),t.one("playbackheartbeat",a)})},vl=at(Ct()),Qm=(function(e){return e()})(function(){var e=function(){for(var i=0,a={};i<arguments.length;i++){var r=arguments[i];for(var n in r)a[n]=r[n]}return a};function t(i){function a(r,n,s){var o;if(typeof document!="undefined"){if(arguments.length>1){if(s=e({path:"/"},a.defaults,s),typeof s.expires=="number"){var l=new Date;l.setMilliseconds(l.getMilliseconds()+s.expires*864e5),s.expires=l}try{o=JSON.stringify(n),/^[\{\[]/.test(o)&&(n=o)}catch(b){}return i.write?n=i.write(n,r):n=encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),r=encodeURIComponent(String(r)),r=r.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),r=r.replace(/[\(\)]/g,escape),document.cookie=[r,"=",n,s.expires?"; expires="+s.expires.toUTCString():"",s.path?"; path="+s.path:"",s.domain?"; domain="+s.domain:"",s.secure?"; secure":""].join("")}r||(o={});for(var m=document.cookie?document.cookie.split("; "):[],p=/(%[0-9A-Z]{2})+/g,d=0;d<m.length;d++){var u=m[d].split("="),c=u.slice(1).join("=");c.charAt(0)==='"'&&(c=c.slice(1,-1));try{var v=u[0].replace(p,decodeURIComponent);if(c=i.read?i.read(c,v):i(c,v)||c.replace(p,decodeURIComponent),this.json)try{c=JSON.parse(c)}catch(b){}if(r===v){o=c;break}r||(o[v]=c)}catch(b){}}return o}}return a.set=a,a.get=function(r){return a.call(a,r)},a.getJSON=function(){return a.apply({json:!0},[].slice.call(arguments))},a.defaults={},a.remove=function(r,n){a(r,"",e(n,{expires:-1}))},a.withConverter=t,a}return t(function(){})}),zm="muxData",o_=function(e){return Object.entries(e).map(function(t){var i=pi(t,2),a=i[0],r=i[1];return"".concat(a,"=").concat(r)}).join("&")},l_=function(e){return e.split("&").reduce(function(t,i){var a=pi(i.split("="),2),r=a[0],n=a[1],s=+n;return t[r]=n&&s==n?s:n,t},{})},Zm=function(){var e;try{e=l_(Qm.get(zm)||"")}catch(t){e={}}return e},jm=function(e){try{Qm.set(zm,o_(e),{expires:365})}catch(t){}},d_=function(){var e=Zm();return e.mux_viewer_id=e.mux_viewer_id||fn(),e.msn=e.msn||Math.random(),jm(e),{mux_viewer_id:e.mux_viewer_id,mux_sample_number:e.msn}},u_=function(){var e=Zm(),t=Ae.now();return e.session_start&&(e.sst=e.session_start,delete e.session_start),e.session_id&&(e.sid=e.session_id,delete e.session_id),e.session_expires&&(e.sex=e.session_expires,delete e.session_expires),(!e.sex||e.sex<t)&&(e.sid=fn(),e.sst=t),e.sex=t+1500*1e3,jm(e),{session_id:e.sid,session_start:e.sst,session_expires:e.sex}};function c_(e,t){var i=t.beaconCollectionDomain,a=t.beaconDomain;if(i)return"https://"+i;e=e||"inferred";var r=a||"litix.io";return e.match(/^[a-z0-9]+$/)?"https://"+e+"."+r:"https://img.litix.io/a.gif"}var h_=at(Ct()),Xm=function(){var e;switch(Jm()){case"cellular":e="cellular";break;case"ethernet":e="wired";break;case"wifi":e="wifi";break;case void 0:break;default:e="other"}return e},Jm=function(){var e=h_.default.navigator,t=e&&(e.connection||e.mozConnection||e.webkitConnection);return t&&t.type};Xm.getConnectionFromAPI=Jm;var m_=Xm,p_=ep({a:"env",b:"beacon",c:"custom",d:"ad",e:"event",f:"experiment",i:"internal",m:"mux",n:"response",p:"player",q:"request",r:"retry",s:"session",t:"timestamp",u:"viewer",v:"video",w:"page",x:"view",y:"sub"}),nh=ep({ad:"ad",af:"affiliate",ag:"aggregate",ap:"api",al:"application",ao:"audio",ar:"architecture",as:"asset",au:"autoplay",av:"average",bi:"bitrate",bn:"brand",br:"break",bw:"browser",by:"bytes",bz:"business",ca:"cached",cb:"cancel",cc:"codec",cd:"code",cg:"category",ch:"changed",ci:"client",ck:"clicked",cl:"canceled",cn:"config",co:"count",ce:"counter",cp:"complete",cq:"creator",cr:"creative",cs:"captions",ct:"content",cu:"current",cx:"connection",cz:"context",dg:"downscaling",dm:"domain",dn:"cdn",do:"downscale",dr:"drm",dp:"dropped",du:"duration",dv:"device",dy:"dynamic",eb:"enabled",ec:"encoding",ed:"edge",en:"end",eg:"engine",em:"embed",er:"error",ep:"experiments",es:"errorcode",et:"errortext",ee:"event",ev:"events",ex:"expires",ez:"exception",fa:"failed",fi:"first",fm:"family",ft:"format",fp:"fps",fq:"frequency",fr:"frame",fs:"fullscreen",ha:"has",hb:"holdback",he:"headers",ho:"host",hn:"hostname",ht:"height",id:"id",ii:"init",in:"instance",ip:"ip",is:"is",ke:"key",la:"language",lb:"labeled",le:"level",li:"live",ld:"loaded",lo:"load",ls:"lists",lt:"latency",ma:"max",md:"media",me:"message",mf:"manifest",mi:"mime",ml:"midroll",mm:"min",mn:"manufacturer",mo:"model",mx:"mux",ne:"newest",nm:"name",no:"number",on:"on",or:"origin",os:"os",pa:"paused",pb:"playback",pd:"producer",pe:"percentage",pf:"played",pg:"program",ph:"playhead",pi:"plugin",pl:"preroll",pn:"playing",po:"poster",pp:"pip",pr:"preload",ps:"position",pt:"part",py:"property",px:"pop",pz:"plan",ra:"rate",rd:"requested",re:"rebuffer",rf:"rendition",rg:"range",rm:"remote",ro:"ratio",rp:"response",rq:"request",rs:"requests",sa:"sample",sd:"skipped",se:"session",sh:"shift",sk:"seek",sm:"stream",so:"source",sq:"sequence",sr:"series",ss:"status",st:"start",su:"startup",sv:"server",sw:"software",sy:"severity",ta:"tag",tc:"tech",te:"text",tg:"target",th:"throughput",ti:"time",tl:"total",to:"to",tt:"title",ty:"type",ug:"upscaling",un:"universal",up:"upscale",ur:"url",us:"user",va:"variant",vd:"viewed",vi:"video",ve:"version",vw:"view",vr:"viewer",wd:"width",wa:"watch",wt:"waiting"});function ep(e){var t={};for(var i in e)e.hasOwnProperty(i)&&(t[e[i]]=i);return t}function Wl(e){var t={},i={};return Object.keys(e).forEach(function(a){var r=!1;if(e.hasOwnProperty(a)&&e[a]!==void 0){var n=a.split("_"),s=n[0],o=p_[s];o||(re.info("Data key word `"+n[0]+"` not expected in "+a),o=s+"_"),n.splice(1).forEach(function(l){l==="url"&&(r=!0),nh[l]?o+=nh[l]:Number.isInteger(Number(l))?o+=l:(re.info("Data key word `"+l+"` not expected in "+a),o+="_"+l+"_")}),r?i[o]=e[a]:t[o]=e[a]}}),Object.assign(t,i)}var ea=at(Ct()),v_=at(Vm()),f_={maxBeaconSize:300,maxQueueLength:3600,baseTimeBetweenBeacons:1e4,maxPayloadKBSize:500},E_=56*1024,__=["hb","requestcompleted","requestfailed","requestcanceled"],g_="https://img.litix.io",fi=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this._beaconUrl=e||g_,this._eventQueue=[],this._postInFlight=!1,this._resendAfterPost=!1,this._failureCount=0,this._sendTimeout=!1,this._options=Object.assign({},f_,t)};fi.prototype.queueEvent=function(e,t){var i=Object.assign({},t);return this._eventQueue.length<=this._options.maxQueueLength||e==="eventrateexceeded"?(this._eventQueue.push(i),this._sendTimeout||this._startBeaconSending(),this._eventQueue.length<=this._options.maxQueueLength):!1};fi.prototype.flushEvents=function(){if(arguments.length>0&&arguments[0]!==void 0&&arguments[0]&&this._eventQueue.length===1){this._eventQueue.pop();return}this._eventQueue.length&&this._sendBeaconQueue(),this._startBeaconSending()};fi.prototype.destroy=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;this.destroyed=!0,e?this._clearBeaconQueue():this.flushEvents(),ea.default.clearTimeout(this._sendTimeout)};fi.prototype._clearBeaconQueue=function(){var e=this._eventQueue.length>this._options.maxBeaconSize?this._eventQueue.length-this._options.maxBeaconSize:0,t=this._eventQueue.slice(e);e>0&&Object.assign(t[t.length-1],Wl({mux_view_message:"event queue truncated"}));var i=this._createPayload(t);tp(this._beaconUrl,i,!0,function(){})};fi.prototype._sendBeaconQueue=function(){var e=this;if(this._postInFlight){this._resendAfterPost=!0;return}var t=this._eventQueue.slice(0,this._options.maxBeaconSize);this._eventQueue=this._eventQueue.slice(this._options.maxBeaconSize),this._postInFlight=!0;var i=this._createPayload(t),a=Ae.now();tp(this._beaconUrl,i,!1,function(r,n){n?(e._eventQueue=t.concat(e._eventQueue),e._failureCount+=1,re.info("Error sending beacon: "+n)):e._failureCount=0,e._roundTripTime=Ae.now()-a,e._postInFlight=!1,e._resendAfterPost&&(e._resendAfterPost=!1,e._eventQueue.length>0&&e._sendBeaconQueue())})};fi.prototype._getNextBeaconTime=function(){if(!this._failureCount)return this._options.baseTimeBetweenBeacons;var e=Math.pow(2,this._failureCount-1);return e=e*Math.random(),(1+e)*this._options.baseTimeBetweenBeacons};fi.prototype._startBeaconSending=function(){var e=this;ea.default.clearTimeout(this._sendTimeout),!this.destroyed&&(this._sendTimeout=ea.default.setTimeout(function(){e._eventQueue.length&&e._sendBeaconQueue(),e._startBeaconSending()},this._getNextBeaconTime()))};fi.prototype._createPayload=function(e){var t=this,i={transmission_timestamp:Math.round(Ae.now())};this._roundTripTime&&(i.rtt_ms=Math.round(this._roundTripTime));var a,r,n,s=function(){a=JSON.stringify({metadata:i,events:r||e}),n=a.length/1024},o=function(){return n<=t._options.maxPayloadKBSize};return s(),o()||(re.info("Payload size is too big ("+n+" kb). Removing unnecessary events."),r=e.filter(function(l){return __.indexOf(l.e)===-1}),s()),o()||(re.info("Payload size still too big ("+n+" kb). Cropping fields.."),r.forEach(function(l){for(var m in l){var p=l[m],d=50*1024;typeof p=="string"&&p.length>d&&(l[m]=p.substring(0,d))}}),s()),a};var b_=typeof v_.default.exitPictureInPicture=="function"?function(e){return e.length<=E_}:function(e){return!1},tp=function(e,t,i,a){if(i&&navigator&&navigator.sendBeacon&&navigator.sendBeacon(e,t)){a();return}if(ea.default.fetch){ea.default.fetch(e,{method:"POST",body:t,headers:{"Content-Type":"text/plain"},keepalive:b_(t)}).then(function(n){return a(null,n.ok?null:"Error")}).catch(function(n){return a(null,n)});return}if(ea.default.XMLHttpRequest){var r=new ea.default.XMLHttpRequest;r.onreadystatechange=function(){if(r.readyState===4)return a(null,r.status!==200?"error":void 0)},r.open("POST",e),r.setRequestHeader("Content-Type","text/plain"),r.send(t);return}a()},y_=fi,T_=["env_key","view_id","view_sequence_number","player_sequence_number","beacon_domain","player_playhead_time","viewer_time","mux_api_version","event","video_id","player_instance_id","player_error_code","player_error_message","player_error_context","player_error_severity","player_error_business_exception"],A_=["adplay","adplaying","adpause","adfirstquartile","admidpoint","adthirdquartile","adended","adresponse","adrequest"],k_=["ad_id","ad_creative_id","ad_universal_id"],S_=["viewstart","error","ended","viewend"],w_=600*1e3,I_=(function(){function e(t,i){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};Me(this,e);var r,n,s,o,l,m,p,d,u,c,v,b;S(this,"mux",void 0),S(this,"envKey",void 0),S(this,"options",void 0),S(this,"eventQueue",void 0),S(this,"sampleRate",void 0),S(this,"disableCookies",void 0),S(this,"respectDoNotTrack",void 0),S(this,"previousBeaconData",void 0),S(this,"lastEventTime",void 0),S(this,"rateLimited",void 0),S(this,"pageLevelData",void 0),S(this,"viewerData",void 0),this.mux=t,this.envKey=i,this.options=a,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.eventQueue=new y_(c_(this.envKey,this.options));var E;this.sampleRate=(E=this.options.sampleRate)!==null&&E!==void 0?E:1;var g;this.disableCookies=(g=this.options.disableCookies)!==null&&g!==void 0?g:!1;var T;this.respectDoNotTrack=(T=this.options.respectDoNotTrack)!==null&&T!==void 0?T:!1,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.pageLevelData={mux_api_version:this.mux.API_VERSION,mux_embed:this.mux.NAME,mux_embed_version:this.mux.VERSION,viewer_application_name:(r=this.options.platform)===null||r===void 0?void 0:r.name,viewer_application_version:(n=this.options.platform)===null||n===void 0?void 0:n.version,viewer_application_engine:(s=this.options.platform)===null||s===void 0?void 0:s.layout,viewer_device_name:(o=this.options.platform)===null||o===void 0?void 0:o.product,viewer_device_category:"",viewer_device_manufacturer:(l=this.options.platform)===null||l===void 0?void 0:l.manufacturer,viewer_os_family:(p=this.options.platform)===null||p===void 0||(m=p.os)===null||m===void 0?void 0:m.family,viewer_os_architecture:(u=this.options.platform)===null||u===void 0||(d=u.os)===null||d===void 0?void 0:d.architecture,viewer_os_version:(v=this.options.platform)===null||v===void 0||(c=v.os)===null||c===void 0?void 0:c.version,viewer_connection_type:m_(),page_url:vl.default===null||vl.default===void 0||(b=vl.default.location)===null||b===void 0?void 0:b.href},this.viewerData=this.disableCookies?{}:d_()}return ii(e,[{key:"send",value:function(t,i){if(!(!t||!(i!=null&&i.view_id))){if(this.respectDoNotTrack&&Hl())return re.info("Not sending `"+t+"` because Do Not Track is enabled");if(!i||typeof i!="object")return re.error("A data object was expected in send() but was not provided");var a=this.disableCookies?{}:u_(),r=hu(po({},this.pageLevelData,i,a,this.viewerData),{event:t,env_key:this.envKey});r.user_id&&(r.viewer_user_id=r.user_id,delete r.user_id);var n,s=((n=r.mux_sample_number)!==null&&n!==void 0?n:0)>=this.sampleRate,o=Wl(this._deduplicateBeaconData(t,r));if(this.lastEventTime=this.mux.utils.now(),s)return re.info("Not sending event due to sample rate restriction",t,r,o);if(this.envKey||re.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",t,r,o),!this.rateLimited){if(re.info("Sending event",t,r,o),this.rateLimited=!this.eventQueue.queueEvent(t,o),this.mux.WINDOW_UNLOADING&&t==="viewend")this.eventQueue.destroy(!0);else if(this.mux.WINDOW_HIDDEN&&t==="hb"?this.eventQueue.flushEvents(!0):S_.indexOf(t)>=0&&this.eventQueue.flushEvents(),this.rateLimited)return r.event="eventrateexceeded",o=Wl(r),this.eventQueue.queueEvent(r.event,o),re.error("Beaconing disabled due to rate limit.")}}}},{key:"destroy",value:function(){this.eventQueue.destroy(!1)}},{key:"_deduplicateBeaconData",value:function(t,i){var a=this,r={},n=i.view_id;if(n==="-1"||t==="viewstart"||t==="viewend"||!this.previousBeaconData||this.mux.utils.now()-this.lastEventTime>=w_)r=po({},i),n&&(this.previousBeaconData=r),n&&t==="viewend"&&(this.previousBeaconData=null);else{var s=t.indexOf("request")===0;Object.entries(i).forEach(function(o){var l=pi(o,2),m=l[0],p=l[1];a.previousBeaconData&&(p!==a.previousBeaconData[m]||T_.indexOf(m)>-1||a.objectHasChanged(s,m,p,a.previousBeaconData[m])||a.eventRequiresKey(t,m))&&(r[m]=p,a.previousBeaconData[m]=p)})}return r}},{key:"objectHasChanged",value:function(t,i,a,r){return!t||i.indexOf("request_")!==0?!1:i==="request_response_headers"||typeof a!="object"||typeof r!="object"?!0:Object.keys(a||{}).length!==Object.keys(r||{}).length}},{key:"eventRequiresKey",value:function(t,i){return!!(t==="renditionchange"&&i.indexOf("video_source_")===0||k_.includes(i)&&A_.includes(t))}}]),e})(),R_=function e(t){Me(this,e);var i=0,a=0,r=0,n=0,s=0,o=0,l=0,m=function(u,c){var v=c.request_start,b=c.request_response_start,E=c.request_response_end,g=c.request_bytes_loaded;n++;var T,y;if(b?(T=b-(v!=null?v:0),y=(E!=null?E:0)-b):y=(E!=null?E:0)-(v!=null?v:0),y>0&&g&&g>0){var w=g/y*8e3;s++,a+=g,r+=y,t.data.view_min_request_throughput=Math.min(t.data.view_min_request_throughput||1/0,w),t.data.view_average_request_throughput=a/r*8e3,t.data.view_request_count=n,T>0&&(i+=T,t.data.view_max_request_latency=Math.max(t.data.view_max_request_latency||0,T),t.data.view_average_request_latency=i/s)}},p=function(u,c){n++,o++,t.data.view_request_count=n,t.data.view_request_failed_count=o},d=function(u,c){n++,l++,t.data.view_request_count=n,t.data.view_request_canceled_count=l};t.on("requestcompleted",m),t.on("requestfailed",p),t.on("requestcanceled",d)},C_=3600*1e3,L_=function e(t){var i=this;Me(this,e),S(this,"_lastEventTime",void 0),t.on("before*",function(a,r){var n=r.viewer_time,s=Ae.now(),o=i._lastEventTime;if(i._lastEventTime=s,o&&s-o>C_){var l=Object.keys(t.data).reduce(function(p,d){return d.indexOf("video_")===0?Object.assign(p,S({},d,t.data[d])):p},{});t.mux.log.info("Received event after at least an hour inactivity, creating a new view");var m=t.playbackHeartbeat._playheadShouldBeProgressing;t._resetView(Object.assign({viewer_time:n},l)),t.playbackHeartbeat._playheadShouldBeProgressing=m,t.playbackHeartbeat._playheadShouldBeProgressing&&a.type!=="play"&&a.type!=="adbreakstart"&&(t.emit("play",{viewer_time:n}),a.type!=="playing"&&t.emit("playing",{viewer_time:n}))}})},D_=["viewstart","ended","loadstart","pause","play","playing","ratechange","waiting","adplay","adpause","adended","aderror","adplaying","adrequest","adresponse","adbreakstart","adbreakend","adfirstquartile","admidpoint","adthirdquartile","rebufferstart","rebufferend","seeked","error","hb","requestcompleted","requestfailed","requestcanceled","renditionchange"],M_=new Set(["requestcompleted","requestfailed","requestcanceled"]),x_=(function(e){LE(i,e);var t=xE(i);function i(a,r,n){Me(this,i);var s=t.call(this);S(W(s),"DOM_CONTENT_LOADED_EVENT_END",void 0),S(W(s),"NAVIGATION_START",void 0),S(W(s),"_destroyed",void 0),S(W(s),"_heartBeatTimeout",void 0),S(W(s),"adTracker",void 0),S(W(s),"dashjs",void 0),S(W(s),"data",void 0),S(W(s),"disablePlayheadRebufferTracking",void 0),S(W(s),"disableRebufferTracking",void 0),S(W(s),"errorTracker",void 0),S(W(s),"errorTranslator",void 0),S(W(s),"emitTranslator",void 0),S(W(s),"getAdData",void 0),S(W(s),"getPlayheadTime",void 0),S(W(s),"getStateData",void 0),S(W(s),"stateDataTranslator",void 0),S(W(s),"hlsjs",void 0),S(W(s),"id",void 0),S(W(s),"longResumeTracker",void 0),S(W(s),"minimumRebufferDuration",void 0),S(W(s),"mux",void 0),S(W(s),"playbackEventDispatcher",void 0),S(W(s),"playbackHeartbeat",void 0),S(W(s),"playbackHeartbeatTime",void 0),S(W(s),"playheadTime",void 0),S(W(s),"seekingTracker",void 0),S(W(s),"sustainedRebufferThreshold",void 0),S(W(s),"watchTimeTracker",void 0),S(W(s),"currentFragmentPDT",void 0),S(W(s),"currentFragmentStart",void 0),s.DOM_CONTENT_LOADED_EVENT_END=mo.domContentLoadedEventEnd(),s.NAVIGATION_START=mo.navigationStart(),s.mux=a,s.id=r,n!=null&&n.beaconDomain&&s.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."),n=Object.assign({debug:!1,minimumRebufferDuration:250,sustainedRebufferThreshold:1e3,playbackHeartbeatTime:25,beaconDomain:"litix.io",sampleRate:1,disableCookies:!1,respectDoNotTrack:!1,disableRebufferTracking:!1,disablePlayheadRebufferTracking:!1,errorTranslator:function(d){return d},emitTranslator:function(){for(var d=arguments.length,u=new Array(d),c=0;c<d;c++)u[c]=arguments[c];return u},stateDataTranslator:function(d){return d}},n),n.data=n.data||{},n.data.property_key&&(n.data.env_key=n.data.property_key,delete n.data.property_key),re.level=n.debug?Xi.DEBUG:Xi.WARN,s.getPlayheadTime=n.getPlayheadTime,s.getStateData=n.getStateData||function(){return{}},s.getAdData=n.getAdData||function(){},s.minimumRebufferDuration=n.minimumRebufferDuration,s.sustainedRebufferThreshold=n.sustainedRebufferThreshold,s.playbackHeartbeatTime=n.playbackHeartbeatTime,s.disableRebufferTracking=n.disableRebufferTracking,s.disableRebufferTracking&&s.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."),s.disablePlayheadRebufferTracking=n.disablePlayheadRebufferTracking,s.errorTranslator=n.errorTranslator,s.emitTranslator=n.emitTranslator,s.stateDataTranslator=n.stateDataTranslator,s.playbackEventDispatcher=new I_(a,n.data.env_key,n),s.data={player_instance_id:fn(),mux_sample_rate:n.sampleRate,beacon_domain:n.beaconCollectionDomain||n.beaconDomain},s.data.view_sequence_number=1,s.data.player_sequence_number=1;var o=function(){typeof this.data.view_start=="undefined"&&(this.data.view_start=this.mux.utils.now(),this.emit("viewstart"))}.bind(W(s));if(s.on("viewinit",function(d,u){this._resetVideoData(),this._resetViewData(),this._resetErrorData(),this._updateStateData(),Object.assign(this.data,u),this._initializeViewData(),this.one("play",o),this.one("adbreakstart",o)}),s.on("videochange",function(d,u){this._resetView(u)}),s.on("programchange",function(d,u){this.data.player_is_paused&&this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."),this._resetView(Object.assign(u,{view_program_changed:!0})),o(),this.emit("play"),this.emit("playing")}),s.on("fragmentchange",function(d,u){this.currentFragmentPDT=u.currentFragmentPDT,this.currentFragmentStart=u.currentFragmentStart}),s.on("destroy",s.destroy),typeof window!="undefined"&&typeof window.addEventListener=="function"&&typeof window.removeEventListener=="function"){var l=function(){var d=typeof s.data.view_start!="undefined";s.mux.WINDOW_HIDDEN=document.visibilityState==="hidden",d&&s.mux.WINDOW_HIDDEN&&(s.data.player_is_paused||s.emit("hb"))};window.addEventListener("visibilitychange",l,!1);var m=function(d){d.persisted||s.destroy()};window.addEventListener("pagehide",m,!1),s.on("destroy",function(){window.removeEventListener("visibilitychange",l),window.removeEventListener("pagehide",m)})}s.on("playerready",function(d,u){Object.assign(this.data,u)}),D_.forEach(function(d){s.on(d,function(u,c){d.indexOf("ad")!==0&&this._updateStateData(),Object.assign(this.data,c),this._sanitizeData()}),s.on("after"+d,function(){(d!=="error"||this.errorTracker.viewErrored)&&this.send(d)})}),s.on("viewend",function(d,u){Object.assign(s.data,u)});var p=function(d){var u=this.mux.utils.now();this.data.player_init_time&&(this.data.player_startup_time=u-this.data.player_init_time),!this.mux.PLAYER_TRACKED&&this.NAVIGATION_START&&(this.mux.PLAYER_TRACKED=!0,(this.data.player_init_time||this.DOM_CONTENT_LOADED_EVENT_END)&&(this.data.page_load_time=Math.min(this.data.player_init_time||1/0,this.DOM_CONTENT_LOADED_EVENT_END||1/0)-this.NAVIGATION_START)),this.send("playerready"),delete this.data.player_startup_time,delete this.data.page_load_time};return s.one("playerready",p),s.longResumeTracker=new L_(W(s)),s.errorTracker=new $E(W(s)),new s_(W(s)),s.seekingTracker=new i_(W(s)),s.playheadTime=new ZE(W(s)),s.playbackHeartbeat=new GE(W(s)),new e_(W(s)),s.watchTimeTracker=new QE(W(s)),new zE(W(s)),s.adTracker=new r_(W(s)),new XE(W(s)),new jE(W(s)),new JE(W(s)),new n_(W(s)),new R_(W(s)),n.hlsjs&&s.addHLSJS(n),n.dashjs&&s.addDashJS(n),s.emit("viewinit",n.data),s}return ii(i,[{key:"emit",value:function(a,r){var n,s=Object.assign({viewer_time:this.mux.utils.now()},r),o=[a,s];if(this.emitTranslator)try{o=this.emitTranslator(a,s)}catch(l){this.mux.log.warn("Exception in emit translator callback.",l)}o!=null&&o.length&&(n=is(ur(i.prototype),"emit",this)).call.apply(n,[this].concat(gt(o)))}},{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,typeof this.data.view_start!="undefined"&&(this.emit("viewend"),this.send("viewend")),this.playbackEventDispatcher.destroy(),this.removeHLSJS(),this.removeDashJS(),window.clearTimeout(this._heartBeatTimeout))}},{key:"send",value:function(a){if(this.data.view_id){var r=Object.assign({},this.data);if(r.video_source_is_live===void 0&&(r.player_source_duration===1/0||r.video_source_duration===1/0?r.video_source_is_live=!0:(r.player_source_duration>0||r.video_source_duration>0)&&(r.video_source_is_live=!1)),r.video_source_is_live||["player_program_time","player_manifest_newest_program_time","player_live_edge_program_time","player_program_time","video_holdback","video_part_holdback","video_target_duration","video_part_target_duration"].forEach(function(o){r[o]=void 0}),r.video_source_url=r.video_source_url||r.player_source_url,r.video_source_url){var n=pi(En(r.video_source_url),2),s=n[0];r.video_source_domain=n[1],r.video_source_hostname=s}delete r.ad_request_id,this.playbackEventDispatcher.send(a,r),this.data.view_sequence_number++,this.data.player_sequence_number++,M_.has(a)||this._restartHeartBeat(),a==="viewend"&&delete this.data.view_id}}},{key:"_resetView",value:function(a){this.emit("viewend"),this.send("viewend"),this.emit("viewinit",a)}},{key:"_updateStateData",value:function(){var a=this.getStateData();if(typeof this.stateDataTranslator=="function")try{a=this.stateDataTranslator(a)}catch(r){this.mux.log.warn("Exception in stateDataTranslator translator callback.",r)}Object.assign(this.data,a),this.playheadTime._updatePlayheadTime(),this._sanitizeData()}},{key:"_sanitizeData",value:function(){var a=this;["player_width","player_height","video_source_width","video_source_height","player_playhead_time","video_source_bitrate"].forEach(function(r){var n=parseInt(a.data[r],10);a.data[r]=isNaN(n)?void 0:n}),["player_source_url","video_source_url"].forEach(function(r){if(a.data[r]){var n=a.data[r].toLowerCase();(n.indexOf("data:")===0||n.indexOf("blob:")===0)&&(a.data[r]="MSE style URL")}})}},{key:"_resetVideoData",value:function(){var a=this;Object.keys(this.data).forEach(function(r){r.indexOf("video_")===0&&delete a.data[r]})}},{key:"_resetViewData",value:function(){var a=this;Object.keys(this.data).forEach(function(r){r.indexOf("view_")===0&&delete a.data[r]}),this.data.view_sequence_number=1}},{key:"_resetErrorData",value:function(){delete this.data.player_error_code,delete this.data.player_error_message,delete this.data.player_error_context,delete this.data.player_error_severity,delete this.data.player_error_business_exception}},{key:"_initializeViewData",value:function(){var a=this,r=this.data.view_id=fn(),n=function(){r===a.data.view_id&&Te(a.data,"player_view_count",1)};this.data.player_is_paused?this.one("play",n):n()}},{key:"_restartHeartBeat",value:function(){var a=this;window.clearTimeout(this._heartBeatTimeout),this._heartBeatTimeout=window.setTimeout(function(){a.data.player_is_paused||a.emit("hb")},1e4)}},{key:"addHLSJS",value:function(a){if(!a.hlsjs){this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.");return}if(this.hlsjs){this.mux.log.warn("An instance of HLS.js is already being monitored for this player.");return}this.hlsjs=a.hlsjs,HE(this.mux,this.id,a.hlsjs,{},a.Hls||window.Hls)}},{key:"removeHLSJS",value:function(){this.hlsjs&&(BE(this.hlsjs),this.hlsjs=void 0)}},{key:"addDashJS",value:function(a){if(!a.dashjs){this.mux.log.warn("You must pass a valid dashjs instance in order to track it.");return}if(this.dashjs){this.mux.log.warn("An instance of Dash.js is already being monitored for this player.");return}this.dashjs=a.dashjs,VE(this.mux,this.id,a.dashjs)}},{key:"removeDashJS",value:function(){this.dashjs&&(qE(this.dashjs),this.dashjs=void 0)}}]),i})(YE),kr=at(Vm());function O_(){return kr.default&&!!(kr.default.fullscreenElement||kr.default.webkitFullscreenElement||kr.default.mozFullScreenElement||kr.default.msFullscreenElement)}var N_=["loadstart","pause","play","playing","seeking","seeked","timeupdate","ratechange","stalled","waiting","error","ended"],P_={1:"MEDIA_ERR_ABORTED",2:"MEDIA_ERR_NETWORK",3:"MEDIA_ERR_DECODE",4:"MEDIA_ERR_SRC_NOT_SUPPORTED"};function U_(e,t,i){var a=pi(ho(t),3),r=a[0],n=a[1],s=a[2],o=e.log,l=e.utils.getComputedStyle,m=e.utils.secondsToMs,p={automaticErrorTracking:!0};if(r){if(s!=="video"&&s!=="audio")return o.error("The element of `"+n+"` was not a media element.")}else return o.error("No element was found with the `"+n+"` query selector.");r.mux&&(r.mux.destroy(),delete r.mux,o.warn("Already monitoring this video element, replacing existing event listeners")),i=Object.assign(p,i,{getPlayheadTime:function(){return m(r.currentTime)},getStateData:function(){var u,c,v,b=((u=(c=this).getPlayheadTime)===null||u===void 0?void 0:u.call(c))||m(r.currentTime),E=this.hlsjs&&this.hlsjs.url,g=this.dashjs&&typeof this.dashjs.getSource=="function"&&this.dashjs.getSource(),T={player_is_paused:r.paused,player_width:parseInt(l(r,"width")),player_height:parseInt(l(r,"height")),player_autoplay_on:r.autoplay,player_preload_on:r.preload,player_language_code:r.lang,player_is_fullscreen:O_(),video_poster_url:r.poster,video_source_url:E||g||r.currentSrc,video_source_duration:m(r.duration),video_source_height:r.videoHeight,video_source_width:r.videoWidth,view_dropped_frame_count:r==null||(v=r.getVideoPlaybackQuality)===null||v===void 0?void 0:v.call(r).droppedVideoFrames};if(r.getStartDate&&b>0){var y=r.getStartDate();if(y&&typeof y.getTime=="function"&&y.getTime()){var w=y.getTime();T.player_program_time=w+b,r.seekable.length>0&&(T.player_live_edge_program_time=w+r.seekable.end(r.seekable.length-1))}}return T}}),i.data=Object.assign({player_software:"HTML5 Video Element",player_mux_plugin_name:"VideoElementMonitor",player_mux_plugin_version:e.VERSION},i.data),r.mux=r.mux||{},r.mux.deleted=!1,r.mux.emit=function(u,c){e.emit(n,u,c)},r.mux.updateData=function(u){r.mux.emit("hb",u)};var d=function(){o.error("The monitor for this video element has already been destroyed.")};r.mux.destroy=function(){Object.keys(r.mux.listeners).forEach(function(u){r.removeEventListener(u,r.mux.listeners[u],!1)}),delete r.mux.listeners,r.mux.destroy=d,r.mux.swapElement=d,r.mux.emit=d,r.mux.addHLSJS=d,r.mux.addDashJS=d,r.mux.removeHLSJS=d,r.mux.removeDashJS=d,r.mux.updateData=d,r.mux.setEmitTranslator=d,r.mux.setStateDataTranslator=d,r.mux.setGetPlayheadTime=d,r.mux.deleted=!0,e.emit(n,"destroy")},r.mux.swapElement=function(u){var c=pi(ho(u),3),v=c[0],b=c[1],E=c[2];if(v){if(E!=="video"&&E!=="audio")return e.log.error("The element of `"+b+"` was not a media element.")}else return e.log.error("No element was found with the `"+b+"` query selector.");v.muxId=r.muxId,delete r.muxId,v.mux=v.mux||{},v.mux.listeners=Object.assign({},r.mux.listeners),delete r.mux.listeners,Object.keys(v.mux.listeners).forEach(function(g){r.removeEventListener(g,v.mux.listeners[g],!1),v.addEventListener(g,v.mux.listeners[g],!1)}),v.mux.swapElement=r.mux.swapElement,v.mux.destroy=r.mux.destroy,delete r.mux,r=v},r.mux.addHLSJS=function(u){e.addHLSJS(n,u)},r.mux.addDashJS=function(u){e.addDashJS(n,u)},r.mux.removeHLSJS=function(){e.removeHLSJS(n)},r.mux.removeDashJS=function(){e.removeDashJS(n)},r.mux.setEmitTranslator=function(u){e.setEmitTranslator(n,u)},r.mux.setStateDataTranslator=function(u){e.setStateDataTranslator(n,u)},r.mux.setGetPlayheadTime=function(u){u||(u=i.getPlayheadTime),e.setGetPlayheadTime(n,u)},e.init(n,i),e.emit(n,"playerready"),r.paused||(e.emit(n,"play"),r.readyState>2&&e.emit(n,"playing")),r.mux.listeners={},N_.forEach(function(u){u==="error"&&!i.automaticErrorTracking||(r.mux.listeners[u]=function(){var c={};if(u==="error"){if(!r.error||r.error.code===1)return;c.player_error_code=r.error.code,c.player_error_message=P_[r.error.code]||r.error.message}e.emit(n,u,c)},r.addEventListener(u,r.mux.listeners[u],!1))})}function H_(e,t,i,a){var r=a;if(e&&typeof e[t]=="function")try{r=e[t].apply(e,i)}catch(n){re.info("safeCall error",n)}return r}var on=at(Ct()),wa;on.default&&on.default.WeakMap&&(wa=new WeakMap);function B_(e,t){if(!e||!t||!on.default||typeof on.default.getComputedStyle!="function")return"";var i;return wa&&wa.has(e)&&(i=wa.get(e)),i||(i=on.default.getComputedStyle(e,null),wa&&wa.set(e,i)),i.getPropertyValue(t)}function W_(e){return Math.floor(e*1e3)}var Wi={TARGET_DURATION:"#EXT-X-TARGETDURATION",PART_INF:"#EXT-X-PART-INF",SERVER_CONTROL:"#EXT-X-SERVER-CONTROL",INF:"#EXTINF",PROGRAM_DATE_TIME:"#EXT-X-PROGRAM-DATE-TIME",VERSION:"#EXT-X-VERSION",SESSION_DATA:"#EXT-X-SESSION-DATA"},Vo=function(e){return this.buffer="",this.manifest={segments:[],serverControl:{},sessionData:{}},this.currentUri={},this.process(e),this.manifest};Vo.prototype.process=function(e){var t;for(this.buffer+=e,t=this.buffer.indexOf(`
`);t>-1;t=this.buffer.indexOf(`
`))this.processLine(this.buffer.substring(0,t)),this.buffer=this.buffer.substring(t+1)};Vo.prototype.processLine=function(e){var t=q_(e,e.indexOf(":")),i=t[0],a=t.length===2?pu(t[1]):void 0;if(i[0]!=="#")this.currentUri.uri=i,this.manifest.segments.push(this.currentUri),this.manifest.targetDuration&&!("duration"in this.currentUri)&&(this.currentUri.duration=this.manifest.targetDuration),this.currentUri={};else switch(i){case Wi.TARGET_DURATION:if(!isFinite(a)||a<0)return;this.manifest.targetDuration=a,this.setHoldBack();break;case Wi.PART_INF:fl(this.manifest,t),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),this.setHoldBack();break;case Wi.SERVER_CONTROL:fl(this.manifest,t),this.setHoldBack();break;case Wi.INF:a===0?this.currentUri.duration=.01:a>0&&(this.currentUri.duration=a);break;case Wi.PROGRAM_DATE_TIME:var r=a,n=new Date(r);this.manifest.dateTimeString||(this.manifest.dateTimeString=r,this.manifest.dateTimeObject=n),this.currentUri.dateTimeString=r,this.currentUri.dateTimeObject=n;break;case Wi.VERSION:fl(this.manifest,t);break;case Wi.SESSION_DATA:var s=$m(Y_(t[1]));Object.assign(this.manifest.sessionData,s)}};Vo.prototype.setHoldBack=function(){var e=this.manifest,t=e.serverControl,i=e.targetDuration,a=e.partTargetDuration;if(t){var r="holdBack",n="partHoldBack",s=i&&i*3,o=a&&a*2;i&&!t.hasOwnProperty(r)&&(t[r]=s),s&&t[r]<s&&(t[r]=s),a&&!t.hasOwnProperty(n)&&(t[n]=a*3),a&&t[n]<o&&(t[n]=o)}};var fl=function(e,t){var i=ip(t[0].replace("#EXT-X-","")),a;V_(t[1])?(a={},a=Object.assign(K_(t[1]),a)):a=pu(t[1]),e[i]=a},ip=function(e){return e.toLowerCase().replace(/-(\w)/g,function(t){return t[1].toUpperCase()})},pu=function(e){if(e.toLowerCase()==="yes"||e.toLowerCase()==="no")return e.toLowerCase()==="yes";var t=e.indexOf(":")!==-1?e:parseFloat(e);return isNaN(t)?e:t},F_=function(e){var t={},i=e.split("=");if(i.length>1){var a=ip(i[0]);t[a]=pu(i[1])}return t},K_=function(e){for(var t=e.split(","),i={},a=0;t.length>a;a++){var r=t[a],n=F_(r);i=Object.assign(n,i)}return i},V_=function(e){return e.indexOf("=")>-1},q_=function(e,t){return t===-1?[e]:[e.substring(0,t),e.substring(t+1)]},Y_=function(e){var t={};if(e){var i=e.search(",");return[e.slice(0,i),e.slice(i+1)].forEach(function(a,r){for(var n=a.replace(/['"]+/g,"").split("="),s=0;s<n.length;s++)n[s]==="DATA-ID"&&(t["DATA-ID"]=n[1-s]),n[s]==="VALUE"&&(t.VALUE=n[1-s])}),{data:t}}},G_=Vo,$_={safeCall:H_,safeIncrement:Te,getComputedStyle:B_,secondsToMs:W_,assign:Object.assign,headersStringToObject:mu,cdnHeadersToRequestId:vo,extractHostnameAndDomain:En,extractHostname:kt,manifestParser:G_,generateShortID:Ym,generateUUID:fn,now:Ae.now,findMediaElement:ho},Q_={PLAYER_READY:"playerready",VIEW_INIT:"viewinit",VIDEO_CHANGE:"videochange",PLAY:"play",PAUSE:"pause",PLAYING:"playing",TIME_UPDATE:"timeupdate",SEEKING:"seeking",SEEKED:"seeked",REBUFFER_START:"rebufferstart",REBUFFER_END:"rebufferend",ERROR:"error",ENDED:"ended",RENDITION_CHANGE:"renditionchange",ORIENTATION_CHANGE:"orientationchange",AD_REQUEST:"adrequest",AD_RESPONSE:"adresponse",AD_BREAK_START:"adbreakstart",AD_PLAY:"adplay",AD_PLAYING:"adplaying",AD_PAUSE:"adpause",AD_FIRST_QUARTILE:"adfirstquartile",AD_MID_POINT:"admidpoint",AD_THIRD_QUARTILE:"adthirdquartile",AD_ENDED:"adended",AD_BREAK_END:"adbreakend",AD_ERROR:"aderror",REQUEST_COMPLETED:"requestcompleted",REQUEST_FAILED:"requestfailed",REQUEST_CANCELLED:"requestcanceled",HEARTBEAT:"hb",DESTROY:"destroy"},z_="mux-embed",Z_="5.9.0",j_="2.1",_e={},xi=function(e){var t=arguments;typeof e=="string"?xi.hasOwnProperty(e)?sn.default.setTimeout(function(){t=Array.prototype.splice.call(t,1),xi[e].apply(null,t)},0):re.warn("`"+e+"` is an unknown task"):typeof e=="function"?sn.default.setTimeout(function(){e(xi)},0):re.warn("`"+e+"` is invalid.")},X_={loaded:Ae.now(),NAME:z_,VERSION:Z_,API_VERSION:j_,PLAYER_TRACKED:!1,monitor:function(e,t){return U_(xi,e,t)},destroyMonitor:function(e){var t=pi(ho(e),1)[0];t&&t.mux&&typeof t.mux.destroy=="function"?t.mux.destroy():re.error("A video element monitor for `"+e+"` has not been initialized via `mux.monitor`.")},addHLSJS:function(e,t){var i=_t(e);_e[i]?_e[i].addHLSJS(t):re.error("A monitor for `"+i+"` has not been initialized.")},addDashJS:function(e,t){var i=_t(e);_e[i]?_e[i].addDashJS(t):re.error("A monitor for `"+i+"` has not been initialized.")},removeHLSJS:function(e){var t=_t(e);_e[t]?_e[t].removeHLSJS():re.error("A monitor for `"+t+"` has not been initialized.")},removeDashJS:function(e){var t=_t(e);_e[t]?_e[t].removeDashJS():re.error("A monitor for `"+t+"` has not been initialized.")},init:function(e,t){Hl()&&t&&t.respectDoNotTrack&&re.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");var i=_t(e);_e[i]=new x_(xi,i,t)},emit:function(e,t,i){var a=_t(e);_e[a]?(_e[a].emit(t,i),t==="destroy"&&delete _e[a]):re.error("A monitor for `"+a+"` has not been initialized.")},updateData:function(e,t){var i=_t(e);_e[i]?_e[i].emit("hb",t):re.error("A monitor for `"+i+"` has not been initialized.")},setEmitTranslator:function(e,t){var i=_t(e);_e[i]?_e[i].emitTranslator=t:re.error("A monitor for `"+i+"` has not been initialized.")},setStateDataTranslator:function(e,t){var i=_t(e);_e[i]?_e[i].stateDataTranslator=t:re.error("A monitor for `"+i+"` has not been initialized.")},setGetPlayheadTime:function(e,t){var i=_t(e);_e[i]?_e[i].getPlayheadTime=t:re.error("A monitor for `"+i+"` has not been initialized.")},checkDoNotTrack:Hl,log:re,utils:$_,events:Q_,WINDOW_HIDDEN:!1,WINDOW_UNLOADING:!1};Object.assign(xi,X_);typeof sn.default!="undefined"&&typeof sn.default.addEventListener=="function"&&sn.default.addEventListener("pagehide",function(e){e.persisted||(xi.WINDOW_UNLOADING=!0)},!1);var vu=xi;ti();var q=sE,se={VIDEO:"video",THUMBNAIL:"thumbnail",STORYBOARD:"storyboard",DRM:"drm"},P={NOT_AN_ERROR:0,NETWORK_OFFLINE:2000002,NETWORK_UNKNOWN_ERROR:2e6,NETWORK_NO_STATUS:2000001,NETWORK_INVALID_URL:24e5,NETWORK_NOT_FOUND:2404e3,NETWORK_NOT_READY:2412e3,NETWORK_GENERIC_SERVER_FAIL:25e5,NETWORK_TOKEN_MISSING:2403201,NETWORK_TOKEN_MALFORMED:2412202,NETWORK_TOKEN_EXPIRED:2403210,NETWORK_TOKEN_AUD_MISSING:2403221,NETWORK_TOKEN_AUD_MISMATCH:2403222,NETWORK_TOKEN_SUB_MISMATCH:2403232,ENCRYPTED_ERROR:5e6,ENCRYPTED_UNSUPPORTED_KEY_SYSTEM:5000001,ENCRYPTED_GENERATE_REQUEST_FAILED:5000002,ENCRYPTED_UPDATE_LICENSE_FAILED:5000003,ENCRYPTED_UPDATE_SERVER_CERT_FAILED:5000004,ENCRYPTED_CDM_ERROR:5000005,ENCRYPTED_OUTPUT_RESTRICTED:5000006,ENCRYPTED_MISSING_TOKEN:5000002},qo=e=>e===se.VIDEO?"playback":e,yi=class Nr extends Error{constructor(t,i=Nr.MEDIA_ERR_CUSTOM,a,r){var n;super(t),this.name="MediaError",this.code=i,this.context=r,this.fatal=a!=null?a:i>=Nr.MEDIA_ERR_NETWORK&&i<=Nr.MEDIA_ERR_ENCRYPTED,this.message||(this.message=(n=Nr.defaultMessages[this.code])!=null?n:"")}};yi.MEDIA_ERR_ABORTED=1,yi.MEDIA_ERR_NETWORK=2,yi.MEDIA_ERR_DECODE=3,yi.MEDIA_ERR_SRC_NOT_SUPPORTED=4,yi.MEDIA_ERR_ENCRYPTED=5,yi.MEDIA_ERR_CUSTOM=100,yi.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."};var C=yi,J_=e=>e==null,fu=(e,t)=>J_(t)?!1:e in t,Fl={ANY:"any",MUTED:"muted"},X={ON_DEMAND:"on-demand",LIVE:"live",UNKNOWN:"unknown"},Zt={MSE:"mse",NATIVE:"native"},Pr={HEADER:"header",QUERY:"query",NONE:"none"},fo=Object.values(Pr),hi={M3U8:"application/vnd.apple.mpegurl",MP4:"video/mp4"},Kl={HLS:hi.M3U8},ik=Object.keys(Kl),ak=[...Object.values(hi),"hls","HLS"],rk={upTo720p:"720p",upTo1080p:"1080p",upTo1440p:"1440p",upTo2160p:"2160p"},nk={noLessThan480p:"480p",noLessThan540p:"540p",noLessThan720p:"720p",noLessThan1080p:"1080p",noLessThan1440p:"1440p",noLessThan2160p:"2160p"},sk={DESCENDING:"desc"};var Vl={code:"en"},be=(e,t,i,a,r=e)=>{r.addEventListener(t,i,a),e.addEventListener("teardown",()=>{r.removeEventListener(t,i)},{once:!0})};function eg(e,t,i){t&&i>t&&(i=t);for(let a=0;a<e.length;a++)if(e.start(a)<=i&&e.end(a)>=i)return!0;return!1}var Eu=e=>{let t=e.indexOf("?");return t<0?[e]:[e.slice(0,t),e.slice(t)]},Yo=e=>{let{type:t}=e;if(t){let i=t.toUpperCase();return fu(i,Kl)?Kl[i]:t}return tg(e)},ap=e=>e==="VOD"?X.ON_DEMAND:X.LIVE,rp=e=>e==="EVENT"?Number.POSITIVE_INFINITY:e==="VOD"?NaN:0,tg=e=>{let{src:t}=e;if(!t)return"";let i="";try{i=new URL(t).pathname}catch(n){console.error("invalid url")}let a=i.lastIndexOf(".");if(a<0)return ag(e)?hi.M3U8:"";let r=i.slice(a+1).toUpperCase();return fu(r,hi)?hi[r]:""},ig="mux.com",ag=({src:e,customDomain:t=ig})=>{let i;try{i=new URL(`${e}`)}catch(l){return!1}let a=i.protocol==="https:",r=i.hostname===`stream.${t}`.toLowerCase(),n=i.pathname.split("/"),s=n.length===2,o=!(n!=null&&n[1].includes("."));return a&&r&&s&&o},tr=e=>{let t=(e!=null?e:"").split(".")[1];if(t)try{let i=t.replace(/-/g,"+").replace(/_/g,"/"),a=decodeURIComponent(atob(i).split("").map(function(r){return"%"+("00"+r.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(a)}catch(i){return}},rg=({exp:e},t=Date.now())=>!e||e*1e3<t,ng=({sub:e},t)=>e!==t,sg=({aud:e},t)=>!e,og=({aud:e},t)=>e!==t,np="en";function O(e,t=!0){var i,a;return new lg(t&&(a=(i=Vl)==null?void 0:i[e])!=null?a:e,t?Vl.code:np)}var lg=class{constructor(e,t=(i=>(i=Vl)!=null?i:np)()){this.message=e,this.locale=t}format(e){return this.message.replace(/\{(\w+)\}/g,(t,i)=>{var a;return(a=e[i])!=null?a:""})}toString(){return this.message}},dg=Object.values(Fl),sh=e=>typeof e=="boolean"||typeof e=="string"&&dg.includes(e),ug=(e,t,i)=>{let{autoplay:a}=e,r=!1,n=!1,s=sh(a)?a:!!a,o=()=>{r||be(t,"playing",()=>{r=!0},{once:!0})};if(o(),be(t,"loadstart",()=>{r=!1,o(),El(t,s)},{once:!0}),be(t,"loadstart",()=>{i||(e.streamType&&e.streamType!==X.UNKNOWN?n=e.streamType===X.LIVE:n=!Number.isFinite(t.duration)),El(t,s)},{once:!0}),i&&i.once(q.Events.LEVEL_LOADED,(l,m)=>{var p;e.streamType&&e.streamType!==X.UNKNOWN?n=e.streamType===X.LIVE:n=(p=m.details.live)!=null?p:!1}),!s){let l=()=>{!n||Number.isFinite(e.startTime)||(i!=null&&i.liveSyncPosition?t.currentTime=i.liveSyncPosition:Number.isFinite(t.seekable.end(0))&&(t.currentTime=t.seekable.end(0)))};i&&be(t,"play",()=>{t.preload==="metadata"?i.once(q.Events.LEVEL_UPDATED,l):l()},{once:!0})}return l=>{r||(s=sh(l)?l:!!l,El(t,s))}},El=(e,t)=>{if(!t)return;let i=e.muted,a=()=>e.muted=i;switch(t){case Fl.ANY:e.play().catch(()=>{e.muted=!0,e.play().catch(a)});break;case Fl.MUTED:e.muted=!0,e.play().catch(a);break;default:e.play().catch(()=>{});break}},cg=({preload:e,src:t},i,a)=>{let r=d=>{d!=null&&["","none","metadata","auto"].includes(d)?i.setAttribute("preload",d):i.removeAttribute("preload")};if(!a)return r(e),r;let n=!1,s=!1,o=a.config.maxBufferLength,l=a.config.maxBufferSize,m=d=>{r(d);let u=d!=null?d:i.preload;s||u==="none"||(u==="metadata"?(a.config.maxBufferLength=1,a.config.maxBufferSize=1):(a.config.maxBufferLength=o,a.config.maxBufferSize=l),p())},p=()=>{!n&&t&&(n=!0,a.loadSource(t))};return be(i,"play",()=>{s=!0,a.config.maxBufferLength=o,a.config.maxBufferSize=l,p()},{once:!0}),m(e),m};function hg(e,t){var i;if(!("videoTracks"in e))return;let a=new WeakMap;t.on(q.Events.MANIFEST_PARSED,function(l,m){o();let p=e.addVideoTrack("main");p.selected=!0;for(let[d,u]of m.levels.entries()){let c=p.addRendition(u.url[0],u.width,u.height,u.videoCodec,u.bitrate);a.set(u,`${d}`),c.id=`${d}`}}),t.on(q.Events.AUDIO_TRACKS_UPDATED,function(l,m){s();for(let p of m.audioTracks){let d=p.default?"main":"alternative",u=e.addAudioTrack(d,p.name,p.lang);u.id=`${p.id}`,p.default&&(u.enabled=!0)}}),e.audioTracks.addEventListener("change",()=>{var l;let m=+((l=[...e.audioTracks].find(d=>d.enabled))==null?void 0:l.id),p=t.audioTracks.map(d=>d.id);m!=t.audioTrack&&p.includes(m)&&(t.audioTrack=m)}),t.on(q.Events.LEVELS_UPDATED,function(l,m){var p;let d=e.videoTracks[(p=e.videoTracks.selectedIndex)!=null?p:0];if(!d)return;let u=m.levels.map(c=>a.get(c));for(let c of e.videoRenditions)c.id&&!u.includes(c.id)&&d.removeRendition(c)});let r=l=>{let m=l.target.selectedIndex;m!=t.nextLevel&&(t.nextLevel=m)};(i=e.videoRenditions)==null||i.addEventListener("change",r);let n=()=>{for(let l of e.videoTracks)e.removeVideoTrack(l)},s=()=>{for(let l of e.audioTracks)e.removeAudioTrack(l)},o=()=>{n(),s()};t.once(q.Events.DESTROYING,o)}var _l=e=>"time"in e?e.time:e.startTime;function mg(e,t){t.on(q.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(r,{tracks:n})=>{n.forEach(s=>{var o,l;let m=(o=s.subtitleTrack)!=null?o:s.closedCaptions,p=t.subtitleTracks.findIndex(({lang:u,name:c,type:v})=>u==(m==null?void 0:m.lang)&&c===s.label&&v.toLowerCase()===s.kind),d=((l=s._id)!=null?l:s.default)?"default":`${s.kind}${p}`;_u(e,s.kind,s.label,m==null?void 0:m.lang,d,s.default)})});let i=()=>{if(!t.subtitleTracks.length)return;let r=Array.from(e.textTracks).find(o=>o.id&&o.mode==="showing"&&["subtitles","captions"].includes(o.kind));if(!r)return;let n=t.subtitleTracks[t.subtitleTrack],s=n?n.default?"default":`${t.subtitleTracks[t.subtitleTrack].type.toLowerCase()}${t.subtitleTrack}`:void 0;(t.subtitleTrack<0||(r==null?void 0:r.id)!==s)&&(t.subtitleTrack=t.subtitleTracks.findIndex(({lang:o,name:l,type:m,default:p})=>r.id==="default"&&p||o==r.language&&l===r.label&&m.toLowerCase()===r.kind)),(r==null?void 0:r.id)===s&&r.cues&&Array.from(r.cues).forEach(o=>{r.addCue(o)})};e.textTracks.addEventListener("change",i),t.on(q.Events.CUES_PARSED,(r,{track:n,cues:s})=>{let o=e.textTracks.getTrackById(n);if(!o)return;let l=o.mode==="disabled";l&&(o.mode="hidden"),s.forEach(m=>{var p;(p=o.cues)!=null&&p.getCueById(m.id)||o.addCue(m)}),l&&(o.mode="disabled")}),t.once(q.Events.DESTROYING,()=>{e.textTracks.removeEventListener("change",i),e.querySelectorAll("track[data-removeondestroy]").forEach(r=>{r.remove()})});let a=()=>{Array.from(e.textTracks).forEach(r=>{var n,s;if(!["subtitles","caption"].includes(r.kind)&&(r.label==="thumbnails"||r.kind==="chapters")){if(!((n=r.cues)!=null&&n.length)){let o="track";r.kind&&(o+=`[kind="${r.kind}"]`),r.label&&(o+=`[label="${r.label}"]`);let l=e.querySelector(o),m=(s=l==null?void 0:l.getAttribute("src"))!=null?s:"";l==null||l.removeAttribute("src"),setTimeout(()=>{l==null||l.setAttribute("src",m)},0)}r.mode!=="hidden"&&(r.mode="hidden")}})};t.once(q.Events.MANIFEST_LOADED,a),t.once(q.Events.MEDIA_ATTACHED,a)}function _u(e,t,i,a,r,n){let s=document.createElement("track");return s.kind=t,s.label=i,a&&(s.srclang=a),r&&(s.id=r),n&&(s.default=!0),s.track.mode=["subtitles","captions"].includes(t)?"disabled":"hidden",s.setAttribute("data-removeondestroy",""),e.append(s),s.track}function pg(e,t){var i;(i=Array.prototype.find.call(e.querySelectorAll("track"),a=>a.track===t))==null||i.remove()}function On(e,t,i){var a;return(a=Array.from(e.querySelectorAll("track")).find(r=>r.track.label===t&&r.track.kind===i))==null?void 0:a.track}function sp(e,t,i,a){return ql.apply(this,arguments)}function ql(){return ql=F(function*(e,t,i,a){let r=On(e,i,a);return r||(r=_u(e,a,i),r.mode="hidden",yield new Promise(n=>setTimeout(()=>n(void 0),0))),r.mode!=="hidden"&&(r.mode="hidden"),[...t].sort((n,s)=>_l(s)-_l(n)).forEach(n=>{var s,o;let l=n.value,m=_l(n);if("endTime"in n&&n.endTime!=null)r==null||r.addCue(new VTTCue(m,n.endTime,a==="chapters"?l:JSON.stringify(l!=null?l:null)));else{let p=Array.prototype.findIndex.call(r==null?void 0:r.cues,v=>v.startTime>=m),d=(s=r==null?void 0:r.cues)==null?void 0:s[p],u=d?d.startTime:Number.isFinite(e.duration)?e.duration:Number.MAX_SAFE_INTEGER,c=(o=r==null?void 0:r.cues)==null?void 0:o[p-1];c&&(c.endTime=m),r==null||r.addCue(new VTTCue(m,u,a==="chapters"?l:JSON.stringify(l!=null?l:null)))}}),e.textTracks.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),r}),ql.apply(this,arguments)}var gu="cuepoints",op=Object.freeze({label:gu});function lp(e,t){return Yl.apply(this,arguments)}function Yl(){return Yl=F(function*(e,t,i=op){return sp(e,t,i.label,"metadata")}),Yl.apply(this,arguments)}var Gl=e=>({time:e.startTime,value:JSON.parse(e.text)});function vg(e,t={label:gu}){let i=On(e,t.label,"metadata");return i!=null&&i.cues?Array.from(i.cues,a=>Gl(a)):[]}function dp(e,t={label:gu}){var i,a;let r=On(e,t.label,"metadata");if(!((i=r==null?void 0:r.activeCues)!=null&&i.length))return;if(r.activeCues.length===1)return Gl(r.activeCues[0]);let{currentTime:n}=e;return Gl(Array.prototype.find.call((a=r.activeCues)!=null?a:[],({startTime:s,endTime:o})=>s<=n&&o>n)||r.activeCues[0])}function fg(e){return $l.apply(this,arguments)}function $l(){return $l=F(function*(e,t=op){return new Promise(i=>{be(e,"loadstart",F(function*(){let a=yield lp(e,[],t);be(e,"cuechange",()=>{let r=dp(e);if(r){let n=new CustomEvent("cuepointchange",{composed:!0,bubbles:!0,detail:r});e.dispatchEvent(n)}},{},a),i(a)}))})}),$l.apply(this,arguments)}var bu="chapters",up=Object.freeze({label:bu}),Ql=e=>({startTime:e.startTime,endTime:e.endTime,value:e.text});function cp(e,t){return zl.apply(this,arguments)}function zl(){return zl=F(function*(e,t,i=up){return sp(e,t,i.label,"chapters")}),zl.apply(this,arguments)}function Eg(e,t={label:bu}){var i;let a=On(e,t.label,"chapters");return(i=a==null?void 0:a.cues)!=null&&i.length?Array.from(a.cues,r=>Ql(r)):[]}function hp(e,t={label:bu}){var i,a;let r=On(e,t.label,"chapters");if(!((i=r==null?void 0:r.activeCues)!=null&&i.length))return;if(r.activeCues.length===1)return Ql(r.activeCues[0]);let{currentTime:n}=e;return Ql(Array.prototype.find.call((a=r.activeCues)!=null?a:[],({startTime:s,endTime:o})=>s<=n&&o>n)||r.activeCues[0])}function _g(e){return Zl.apply(this,arguments)}function Zl(){return Zl=F(function*(e,t=up){return new Promise(i=>{be(e,"loadstart",F(function*(){let a=yield cp(e,[],t);be(e,"cuechange",()=>{let r=hp(e);if(r){let n=new CustomEvent("chapterchange",{composed:!0,bubbles:!0,detail:r});e.dispatchEvent(n)}},{},a),i(a)}))})}),Zl.apply(this,arguments)}function gg(e,t){if(t){let i=t.playingDate;if(i!=null)return new Date(i.getTime()-e.currentTime*1e3)}return typeof e.getStartDate=="function"?e.getStartDate():new Date(NaN)}function bg(e,t){if(t&&t.playingDate)return t.playingDate;if(typeof e.getStartDate=="function"){let i=e.getStartDate();return new Date(i.getTime()+e.currentTime*1e3)}return new Date(NaN)}var ln={VIDEO:"v",THUMBNAIL:"t",STORYBOARD:"s",DRM:"d"},yg=e=>{if(e===se.VIDEO)return ln.VIDEO;if(e===se.DRM)return ln.DRM},Tg=(e,t)=>{var i,a;let r=qo(e),n=`${r}Token`;return(i=t.tokens)!=null&&i[r]?(a=t.tokens)==null?void 0:a[r]:fu(n,t)?t[n]:void 0},Eo=(e,t,i,a,r=!1,n=!(s=>(s=globalThis.navigator)==null?void 0:s.onLine)())=>{var s,o;if(n){let g=O("Your device appears to be offline",r),T,y=C.MEDIA_ERR_NETWORK,w=new C(g,y,!1,T);return w.errorCategory=t,w.muxCode=P.NETWORK_OFFLINE,w.data=e,w}let l="status"in e?e.status:e.code,m=Date.now(),p=C.MEDIA_ERR_NETWORK;if(l===200)return;let d=qo(t),u=Tg(t,i),c=yg(t),[v]=Eu((s=i.playbackId)!=null?s:"");if(!l||!v)return;let b=tr(u);if(u&&!b){let g=new C(O("The {tokenNamePrefix}-token provided is invalid or malformed.",r).format({tokenNamePrefix:d}),p,!0,O("Compact JWT string: {token}",r).format({token:u}));return g.errorCategory=t,g.muxCode=P.NETWORK_TOKEN_MALFORMED,g.data=e,g}if(l>=500){let g=new C("",p,a!=null?a:!0);return g.errorCategory=t,g.muxCode=P.NETWORK_UNKNOWN_ERROR,g}if(l===403)if(b){if(rg(b,m)){let g={timeStyle:"medium",dateStyle:"medium"},T=new C(O("The video’s secured {tokenNamePrefix}-token has expired.",r).format({tokenNamePrefix:d}),p,!0,O("Expired at: {expiredDate}. Current time: {currentDate}.",r).format({expiredDate:new Intl.DateTimeFormat("en",g).format((o=b.exp)!=null?o:0),currentDate:new Intl.DateTimeFormat("en",g).format(m)}));return T.errorCategory=t,T.muxCode=P.NETWORK_TOKEN_EXPIRED,T.data=e,T}if(ng(b,v)){let g=new C(O("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",r).format({tokenNamePrefix:d}),p,!0,O("Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}",r).format({tokenNamePrefix:d,playbackId:v,tokenPlaybackId:b.sub}));return g.errorCategory=t,g.muxCode=P.NETWORK_TOKEN_SUB_MISMATCH,g.data=e,g}if(sg(b,c)){let g=new C(O("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:d}),p,!0,O("The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.",r).format({tokenNamePrefix:d,expectedAud:c}));return g.errorCategory=t,g.muxCode=P.NETWORK_TOKEN_AUD_MISSING,g.data=e,g}if(og(b,c)){let g=new C(O("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:d}),p,!0,O("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.",r).format({tokenNamePrefix:d,expectedAud:c,aud:b.aud}));return g.errorCategory=t,g.muxCode=P.NETWORK_TOKEN_AUD_MISMATCH,g.data=e,g}}else{let g=O("Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.",r).format({tokenNamePrefix:d,category:t}),T=O("Specified playback ID: {playbackId}",r).format({playbackId:v}),y=new C(g,p,a!=null?a:!0,T);return y.errorCategory=t,y.muxCode=P.NETWORK_TOKEN_MISSING,y.data=e,y}if(l===412){let g=O("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",r),T=O("Specified playback ID: {playbackId}",r).format({playbackId:v}),y=new C(g,p,a!=null?a:!0,T);return y.errorCategory=t,y.muxCode=P.NETWORK_NOT_READY,y.streamType=i.streamType===X.LIVE?"live":i.streamType===X.ON_DEMAND?"on-demand":"unknown",y.data=e,y}if(l===404){let g=O("This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",r),T=O("Specified playback ID: {playbackId}",r).format({playbackId:v}),y=new C(g,p,a!=null?a:!0,T);return y.errorCategory=t,y.muxCode=P.NETWORK_NOT_FOUND,y.data=e,y}if(l===400){let g=O("The URL or playback-id was invalid. You may have used an invalid value as a playback-id."),T=O("Specified playback ID: {playbackId}",r).format({playbackId:v}),y=new C(g,p,a!=null?a:!0,T);return y.errorCategory=t,y.muxCode=P.NETWORK_INVALID_URL,y.data=e,y}let E=new C("",p,a!=null?a:!0);return E.errorCategory=t,E.muxCode=P.NETWORK_UNKNOWN_ERROR,E.data=e,E},oh=q.DefaultConfig.capLevelController,Ag={"720p":921600,"1080p":2073600,"1440p":4194304,"2160p":8294400};function kg(e){return Ag[e.toLowerCase().trim()]}var jl=class Ur extends oh{constructor(t){super(t)}static setMaxAutoResolution(t,i){i?Ur.maxAutoResolution.set(t,i):Ur.maxAutoResolution.delete(t)}getMaxAutoResolution(){var t;let i=this.hls;return(t=Ur.maxAutoResolution.get(i))!=null?t:void 0}get levels(){var t;return(t=this.hls.levels)!=null?t:[]}getValidLevels(t){return this.levels.filter((i,a)=>this.isLevelAllowed(i)&&a<=t)}getMaxLevelCapped(t){let i=this.getValidLevels(t),a=this.getMaxAutoResolution();if(!a)return super.getMaxLevel(t);let r=kg(a);if(!r)return super.getMaxLevel(t);let n=i.filter(l=>l.width*l.height<=r),s=n.findIndex(l=>l.width*l.height===r);if(s!==-1){let l=n[s];return i.findIndex(m=>m===l)}if(n.length===0)return 0;let o=n[n.length-1];return i.findIndex(l=>l===o)}getMaxLevel(t){if(this.getMaxAutoResolution()!==void 0)return this.getMaxLevelCapped(t);let i=super.getMaxLevel(t),a=this.getValidLevels(t);if(!a[i])return i;let r=Math.min(a[i].width,a[i].height),n=Ur.minMaxResolution;return r>=n?i:oh.getMaxLevelByMediaSize(a,n*(16/9),n)}};jl.minMaxResolution=720,jl.maxAutoResolution=new WeakMap;var gl=jl,as={FAIRPLAY:"fairplay",PLAYREADY:"playready",WIDEVINE:"widevine"},Sg=e=>{if(e.includes("fps"))return as.FAIRPLAY;if(e.includes("playready"))return as.PLAYREADY;if(e.includes("widevine"))return as.WIDEVINE},wg=e=>{let t=e.split(`
`).find((i,a,r)=>a&&r[a-1].startsWith("#EXT-X-STREAM-INF"));return fetch(t).then(i=>i.status!==200?Promise.reject(i):i.text())},Ig=e=>{let t=e.split(`
`).filter(a=>a.startsWith("#EXT-X-SESSION-DATA"));if(!t.length)return{};let i={};for(let a of t){let r=Cg(a),n=r["DATA-ID"];n&&(i[n]=D({},r))}return{sessionData:i}},Rg=/([A-Z0-9-]+)="?(.*?)"?(?:,|$)/g;function Cg(e){let t=[...e.matchAll(Rg)];return Object.fromEntries(t.map(([,i,a])=>[i,a]))}var Lg=e=>{var t,i,a;let r=e.split(`
`),n=(i=((t=r.find(m=>m.startsWith("#EXT-X-PLAYLIST-TYPE")))!=null?t:"").split(":")[1])==null?void 0:i.trim(),s=ap(n),o=rp(n),l;if(s===X.LIVE){let m=r.find(p=>p.startsWith("#EXT-X-PART-INF"));if(m)l=+m.split(":")[1].split("=")[1]*2;else{let p=r.find(u=>u.startsWith("#EXT-X-TARGETDURATION")),d=(a=p==null?void 0:p.split(":"))==null?void 0:a[1];l=+(d!=null?d:6)*3}}return{streamType:s,targetLiveWindow:o,liveEdgeStartOffset:l}},Dg=(function(){var e=F(function*(t,i){if(i===hi.MP4)return{streamType:X.ON_DEMAND,targetLiveWindow:NaN,liveEdgeStartOffset:void 0,sessionData:void 0};if(i===hi.M3U8){let a=yield fetch(t);if(!a.ok)return Promise.reject(a);let r=yield a.text(),n=yield wg(r);return D(D({},Ig(r)),Lg(n))}return console.error(`Media type ${i} is an unrecognized or unsupported type for src ${t}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0,sessionData:void 0}});return function(i,a){return e.apply(this,arguments)}})(),Mg=(function(){var e=F(function*(t,i,a=Yo({src:t})){var r,n,s,o;let{streamType:l,targetLiveWindow:m,liveEdgeStartOffset:p,sessionData:d}=yield Dg(t,a),u=d==null?void 0:d["com.apple.hls.chapters"];(u!=null&&u.URI||u!=null&&u.VALUE.toLocaleLowerCase().startsWith("http"))&&yu((r=u.URI)!=null?r:u.VALUE,i),((n=pe.get(i))!=null?n:{}).liveEdgeStartOffset=p,((s=pe.get(i))!=null?s:{}).targetLiveWindow=m,i.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),((o=pe.get(i))!=null?o:{}).streamType=l,i.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))});return function(i,a){return e.apply(this,arguments)}})(),yu=(function(){var e=F(function*(t,i){var a,r;try{let n=yield fetch(t);if(!n.ok)throw new Error(`Failed to fetch Mux metadata: ${n.status} ${n.statusText}`);let s=yield n.json(),o={};if(!((a=s==null?void 0:s[0])!=null&&a.metadata))return;for(let m of s[0].metadata)m.key&&m.value&&(o[m.key]=m.value);((r=pe.get(i))!=null?r:{}).metadata=o;let l=new CustomEvent("muxmetadata");i.dispatchEvent(l)}catch(n){console.error(n)}});return function(i,a){return e.apply(this,arguments)}})(),xg=e=>{var t;let i=e.type,a=ap(i),r=rp(i),n,s=!!((t=e.partList)!=null&&t.length);return a===X.LIVE&&(n=s?e.partTarget*2:e.targetduration*3),{streamType:a,targetLiveWindow:r,liveEdgeStartOffset:n,lowLatency:s}},Og=(e,t,i)=>{var a,r,n,s,o,l,m,p;let{streamType:d,targetLiveWindow:u,liveEdgeStartOffset:c,lowLatency:v}=xg(e);if(d===X.LIVE){v?(i.config.backBufferLength=(a=i.userConfig.backBufferLength)!=null?a:4,i.config.maxFragLookUpTolerance=(r=i.userConfig.maxFragLookUpTolerance)!=null?r:.001,i.config.abrBandWidthUpFactor=(n=i.userConfig.abrBandWidthUpFactor)!=null?n:i.config.abrBandWidthFactor):i.config.backBufferLength=(s=i.userConfig.backBufferLength)!=null?s:8;let b=Object.freeze({get length(){return t.seekable.length},start(E){return t.seekable.start(E)},end(E){var g;return E>this.length||E<0||Number.isFinite(t.duration)?t.seekable.end(E):(g=i.liveSyncPosition)!=null?g:t.seekable.end(E)}});((o=pe.get(t))!=null?o:{}).seekable=b}((l=pe.get(t))!=null?l:{}).liveEdgeStartOffset=c,((m=pe.get(t))!=null?m:{}).targetLiveWindow=u,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),((p=pe.get(t))!=null?p:{}).streamType=d,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},lh,dh,mp=(dh=(lh=globalThis==null?void 0:globalThis.navigator)==null?void 0:lh.userAgent)!=null?dh:"",uh,ch,hh,Ng=(hh=(ch=(uh=globalThis==null?void 0:globalThis.navigator)==null?void 0:uh.userAgentData)==null?void 0:ch.platform)!=null?hh:"",Pg=mp.toLowerCase().includes("android")||["x11","android"].some(e=>Ng.toLowerCase().includes(e)),Ug=e=>/^((?!chrome|android).)*safari/i.test(mp)&&!!e.canPlayType("application/vnd.apple.mpegurl"),pe=new WeakMap,mi="mux.com",mh,ph,pp=(ph=(mh=q).isSupported)==null?void 0:ph.call(mh),Hg=e=>Pg||!Ug(e),Tu=()=>{if(typeof window!="undefined")return vu.utils.now()},Bg=vu.utils.generateUUID,Xl=({playbackId:e,customDomain:t=mi,maxResolution:i,minResolution:a,renditionOrder:r,programStartTime:n,programEndTime:s,assetStartTime:o,assetEndTime:l,playbackToken:m,tokens:{playback:p=m}={},extraSourceParams:d={}}={})=>{if(!e)return;let[u,c=""]=Eu(e),v=new URL(`https://stream.${t}/${u}.m3u8${c}`);return p||v.searchParams.has("token")?(v.searchParams.forEach((b,E)=>{E!="token"&&v.searchParams.delete(E)}),p&&v.searchParams.set("token",p)):(i&&v.searchParams.set("max_resolution",i),a&&(v.searchParams.set("min_resolution",a),i&&+i.slice(0,-1)<+a.slice(0,-1)&&console.error("minResolution must be <= maxResolution","minResolution",a,"maxResolution",i)),r&&v.searchParams.set("rendition_order",r),n&&v.searchParams.set("program_start_time",`${n}`),s&&v.searchParams.set("program_end_time",`${s}`),o&&v.searchParams.set("asset_start_time",`${o}`),l&&v.searchParams.set("asset_end_time",`${l}`),Object.entries(d).forEach(([b,E])=>{E!=null&&v.searchParams.set(b,E)})),v.toString()},Go=e=>{if(!e)return;let[t]=e.split("?");return t||void 0},Au=e=>{if(!e||!e.startsWith("https://stream."))return;let[t]=new URL(e).pathname.slice(1).split(/\.m3u8|\//);return t||void 0},Wg=e=>{var t,i,a;return(t=e==null?void 0:e.metadata)!=null&&t.video_id?e.metadata.video_id:Tp(e)&&(a=(i=Go(e.playbackId))!=null?i:Au(e.src))!=null?a:e.src},vp=e=>{var t;return(t=pe.get(e))==null?void 0:t.error},Fg=e=>{var t;return(t=pe.get(e))==null?void 0:t.metadata},Jl=e=>{var t,i;return(i=(t=pe.get(e))==null?void 0:t.streamType)!=null?i:X.UNKNOWN},Kg=e=>{var t,i;return(i=(t=pe.get(e))==null?void 0:t.targetLiveWindow)!=null?i:NaN},ku=e=>{var t,i;return(i=(t=pe.get(e))==null?void 0:t.seekable)!=null?i:e.seekable},Vg=e=>{var t;let i=(t=pe.get(e))==null?void 0:t.liveEdgeStartOffset;if(typeof i!="number")return NaN;let a=ku(e);return a.length?a.end(a.length-1)-i:NaN},Su=.034,qg=(e,t,i=Su)=>Math.abs(e-t)<=i,fp=(e,t,i=Su)=>e>t||qg(e,t,i),Yg=(e,t=Su)=>e.paused&&fp(e.currentTime,e.duration,t),Ep=(e,t)=>{var i,a,r;if(!t||!e.buffered.length)return;if(e.readyState>2)return!1;let n=t.currentLevel>=0?(a=(i=t.levels)==null?void 0:i[t.currentLevel])==null?void 0:a.details:(r=t.levels.find(d=>!!d.details))==null?void 0:r.details;if(!n||n.live)return;let{fragments:s}=n;if(!(s!=null&&s.length))return;if(e.currentTime<e.duration-(n.targetduration+.5))return!1;let o=s[s.length-1];if(e.currentTime<=o.start)return!1;let l=o.start+o.duration/2,m=e.buffered.start(e.buffered.length-1),p=e.buffered.end(e.buffered.length-1);return l>m&&l<p},_p=(e,t)=>e.ended||e.loop?e.ended:t&&Ep(e,t)?!0:Yg(e),Gg=(e,t,i)=>{gp(t,i,e);let{metadata:a={}}=e,{view_session_id:r=Bg()}=a,n=Wg(e);a.view_session_id=r,a.video_id=n,e.metadata=a;let s=m=>{var p;(p=t.mux)==null||p.emit("hb",{view_drm_type:m})};e.drmTypeCb=s,pe.set(t,{retryCount:0});let o=$g(e,t),l=cg(e,t,o);return e!=null&&e.muxDataKeepSession&&t!=null&&t.mux&&!t.mux.deleted?o&&t.mux.addHLSJS({hlsjs:o,Hls:o?q:void 0}):Jg(e,t,o),e0(e,t,o),fg(t),_g(t),{engine:o,setAutoplay:ug(e,t,o),setPreload:l}},gp=(e,t,i)=>{let a=t==null?void 0:t.engine;e!=null&&e.mux&&!e.mux.deleted&&(i!=null&&i.muxDataKeepSession?a&&e.mux.removeHLSJS():(e.mux.destroy(),delete e.mux)),a&&(a.detachMedia(),a.destroy()),e&&(e.hasAttribute("src")&&(e.removeAttribute("src"),e.load()),e.removeEventListener("error",kp),e.removeEventListener("error",td),e.removeEventListener("durationchange",Ap),pe.delete(e),e.dispatchEvent(new Event("teardown")))};function bp(e,t){var i;let a=Yo(e);if(a!==hi.M3U8)return!0;let r=!a||((i=t.canPlayType(a))!=null?i:!0),{preferPlayback:n}=e,s=n===Zt.MSE,o=n===Zt.NATIVE,l=pp&&(s||Hg(t));return r&&(o||!l)}var $g=(e,t)=>{let{debug:i,streamType:a,startTime:r=-1,metadata:n,preferCmcd:s,_hlsConfig:o={},maxAutoResolution:l}=e,m=Yo(e)===hi.M3U8,p=bp(e,t);if(m&&!p&&pp){let d={backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelToPlayerSize:!0,capLevelOnFPSDrop:!0},u=Qg(a),c=zg(e),v=[Pr.QUERY,Pr.HEADER].includes(s)?{useHeaders:s===Pr.HEADER,sessionId:n==null?void 0:n.view_session_id,contentId:n==null?void 0:n.video_id}:void 0,b=o.capLevelToPlayerSize==null?{capLevelController:gl}:{},E=new q(D(D(D(D(D({debug:i,startPosition:r,cmcd:v,xhrSetup:(g,T)=>{var y,w;if(s&&s!==Pr.QUERY)return;let R=new URL(T);if(!R.searchParams.has("CMCD"))return;let M=((w=(y=R.searchParams.get("CMCD"))==null?void 0:y.split(","))!=null?w:[]).filter(B=>B.startsWith("sid")||B.startsWith("cid")).join(",");R.searchParams.set("CMCD",M),g.open("GET",R)}},b),d),u),c),o));return b.capLevelController===gl&&l!==void 0&&gl.setMaxAutoResolution(E,l),E.on(q.Events.MANIFEST_PARSED,(function(){var g=F(function*(T,y){var w,R;let M=(w=y.sessionData)==null?void 0:w["com.apple.hls.chapters"];(M!=null&&M.URI||M!=null&&M.VALUE.toLocaleLowerCase().startsWith("http"))&&yu((R=M==null?void 0:M.URI)!=null?R:M==null?void 0:M.VALUE,t)});return function(T,y){return g.apply(this,arguments)}})()),E}},Qg=e=>e===X.LIVE?{backBufferLength:8}:{},zg=e=>{let{tokens:{drm:t}={},playbackId:i,drmTypeCb:a}=e,r=Go(i);return!t||!r?{}:{emeEnabled:!0,drmSystems:{"com.apple.fps":{licenseUrl:rs(e,"fairplay"),serverCertificateUrl:yp(e,"fairplay")},"com.widevine.alpha":{licenseUrl:rs(e,"widevine")},"com.microsoft.playready":{licenseUrl:rs(e,"playready")}},requestMediaKeySystemAccessFunc:(n,s)=>(n==="com.widevine.alpha"&&(s=[...s.map(o=>{var l;let m=(l=o.videoCapabilities)==null?void 0:l.map(p=>D(D({},p),{},{robustness:"HW_SECURE_ALL"}));return D(D({},o),{},{videoCapabilities:m})}),...s]),navigator.requestMediaKeySystemAccess(n,s).then(o=>{let l=Sg(n);return a==null||a(l),o}))}},Zg=(function(){var e=F(function*(t){let i=yield fetch(t);return i.status!==200?Promise.reject(i):yield i.arrayBuffer()});return function(i){return e.apply(this,arguments)}})(),jg=(function(){var e=F(function*(t,i){let a=yield fetch(i,{method:"POST",headers:{"Content-type":"application/octet-stream"},body:t});if(a.status!==200)return Promise.reject(a);let r=yield a.arrayBuffer();return new Uint8Array(r)});return function(i,a){return e.apply(this,arguments)}})(),Xg=(e,t)=>{let i=(function(){var n=F(function*(s){let o=yield navigator.requestMediaKeySystemAccess("com.apple.fps",[{initDataTypes:[s],videoCapabilities:[{contentType:"application/vnd.apple.mpegurl",robustness:""}],distinctiveIdentifier:"not-allowed",persistentState:"not-allowed",sessionTypes:["temporary"]}]).then(m=>{var p;return(p=e.drmTypeCb)==null||p.call(e,as.FAIRPLAY),m}).catch(()=>{let m=new C(O("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),C.MEDIA_ERR_ENCRYPTED,!0);m.errorCategory=se.DRM,m.muxCode=P.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM,it(t,m)});if(!o)return;let l=yield o.createMediaKeys();try{let m=yield Zg(yp(e,"fairplay")).catch(p=>{if(p instanceof Response){let d=Eo(p,se.DRM,e);return console.error("mediaError",d==null?void 0:d.message,d==null?void 0:d.context),d?Promise.reject(d):Promise.reject(new Error("Unexpected error in app cert request"))}return Promise.reject(p)});yield l.setServerCertificate(m).catch(()=>{let p=new C(O("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),C.MEDIA_ERR_ENCRYPTED,!0);return p.errorCategory=se.DRM,p.muxCode=P.ENCRYPTED_UPDATE_SERVER_CERT_FAILED,Promise.reject(p)})}catch(m){it(t,m);return}yield t.setMediaKeys(l)});return function(o){return n.apply(this,arguments)}})(),a=n=>{let s;n==="internal-error"?(s=new C(O("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser."),C.MEDIA_ERR_ENCRYPTED,!0),s.errorCategory=se.DRM,s.muxCode=P.ENCRYPTED_CDM_ERROR):(n==="output-restricted"||n==="output-downscaled")&&(s=new C(O("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."),C.MEDIA_ERR_ENCRYPTED,!1),s.errorCategory=se.DRM,s.muxCode=P.ENCRYPTED_OUTPUT_RESTRICTED),s&&it(t,s)},r=(function(){var n=F(function*(s,o){let l=t.mediaKeys.createSession(),m=()=>{l.keyStatuses.forEach(d=>a(d))},p=(function(){var d=F(function*(u){let c=u.message;try{let v=yield jg(c,rs(e,"fairplay"));try{yield l.update(v)}catch(b){let E=new C(O("Failed to update DRM license. This may be an issue with the player or your protected content."),C.MEDIA_ERR_ENCRYPTED,!0);E.errorCategory=se.DRM,E.muxCode=P.ENCRYPTED_UPDATE_LICENSE_FAILED,it(t,E)}}catch(v){if(v instanceof Response){let b=Eo(v,se.DRM,e);if(console.error("mediaError",b==null?void 0:b.message,b==null?void 0:b.context),b){it(t,b);return}console.error("Unexpected error in license key request",v);return}console.error(v)}});return function(c){return d.apply(this,arguments)}})();l.addEventListener("keystatuseschange",m),l.addEventListener("message",p),t.addEventListener("teardown",()=>{l.removeEventListener("keystatuseschange",m),l.removeEventListener("message",p),l.close()},{once:!0}),yield l.generateRequest(s,o).catch(d=>{console.error("Failed to generate license request",d);let u=new C(O("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),C.MEDIA_ERR_ENCRYPTED,!0);return u.errorCategory=se.DRM,u.muxCode=P.ENCRYPTED_GENERATE_REQUEST_FAILED,Promise.reject(u)})});return function(o,l){return n.apply(this,arguments)}})();be(t,"encrypted",(function(){var n=F(function*(s){try{let o=s.initDataType;if(o!=="skd"){console.error(`Received unexpected initialization data type "${o}"`);return}t.mediaKeys||(yield i(o));let l=s.initData;if(l==null){console.error(`Could not start encrypted playback due to missing initData in ${s.type} event`);return}yield r(o,l)}catch(o){it(t,o);return}});return function(s){return n.apply(this,arguments)}})())},rs=({playbackId:e,tokens:{drm:t}={},customDomain:i=mi},a)=>{let r=Go(e);return`https://license.${i.toLocaleLowerCase().endsWith(mi)?i:mi}/license/${a}/${r}?token=${t}`},yp=({playbackId:e,tokens:{drm:t}={},customDomain:i=mi},a)=>{let r=Go(e);return`https://license.${i.toLocaleLowerCase().endsWith(mi)?i:mi}/appcert/${a}/${r}?token=${t}`},Tp=({playbackId:e,src:t,customDomain:i})=>{if(e)return!0;if(typeof t!="string")return!1;let a=window==null?void 0:window.location.href,r=new URL(t,a).hostname.toLocaleLowerCase();return r.includes(mi)||!!i&&r.includes(i.toLocaleLowerCase())},Jg=(e,t,i)=>{var a;let{envKey:r,disableTracking:n,muxDataSDK:s=vu,muxDataSDKOptions:o={}}=e,l=Tp(e);if(!n&&(r||l)){let{playerInitTime:m,playerSoftwareName:p,playerSoftwareVersion:d,beaconCollectionDomain:u,debug:c,disableCookies:v}=e,b=D(D({},e.metadata),{},{video_title:((a=e==null?void 0:e.metadata)==null?void 0:a.video_title)||void 0}),E=g=>typeof g.player_error_code=="string"?!1:typeof e.errorTranslator=="function"?e.errorTranslator(g):g;s.monitor(t,D(D({debug:c,beaconCollectionDomain:u,hlsjs:i,Hls:i?q:void 0,automaticErrorTracking:!1,errorTranslator:E,disableCookies:v},o),{},{data:D(D({},r?{env_key:r}:{}),{},{player_software_name:p,player_software:p,player_software_version:d,player_init_time:m},b)}))}},e0=(e,t,i)=>{var a,r;let n=bp(e,t),{src:s,customDomain:o=mi}=e,l=()=>{t.ended||e.disablePseudoEnded||!_p(t,i)||(Ep(t,i)?t.currentTime=t.buffered.end(t.buffered.length-1):t.dispatchEvent(new Event("ended")))},m,p,d=()=>{let u=ku(t),c,v;u.length>0&&(c=u.start(0),v=u.end(0)),(p!==v||m!==c)&&t.dispatchEvent(new CustomEvent("seekablechange",{composed:!0})),m=c,p=v};if(be(t,"durationchange",d),t&&n){let u=Yo(e);if(typeof s=="string"){if(s.endsWith(".mp4")&&s.includes(o)){let b=Au(s);yu(new URL(`https://stream.${o}/${b}/metadata.json`).toString(),t)}let c=()=>{if(Jl(t)!==X.LIVE||Number.isFinite(t.duration))return;let b=setInterval(d,1e3);t.addEventListener("teardown",()=>{clearInterval(b)},{once:!0}),be(t,"durationchange",()=>{Number.isFinite(t.duration)&&clearInterval(b)})},v=(function(){var b=F(function*(){return Mg(s,t,u).then(c).catch(E=>{if(E instanceof Response){let g=Eo(E,se.VIDEO,e);if(g){it(t,g);return}}else E instanceof Error})});return function(){return b.apply(this,arguments)}})();if(t.preload==="none"){let b=()=>{v(),t.removeEventListener("loadedmetadata",E)},E=()=>{v(),t.removeEventListener("play",b)};be(t,"play",b,{once:!0}),be(t,"loadedmetadata",E,{once:!0})}else v();(a=e.tokens)!=null&&a.drm?Xg(e,t):be(t,"encrypted",()=>{let b=new C(O("Attempting to play DRM-protected content without providing a DRM token."),C.MEDIA_ERR_ENCRYPTED,!0);b.errorCategory=se.DRM,b.muxCode=P.ENCRYPTED_MISSING_TOKEN,it(t,b)},{once:!0}),t.setAttribute("src",s),e.startTime&&(((r=pe.get(t))!=null?r:{}).startTime=e.startTime,t.addEventListener("durationchange",Ap,{once:!0}))}else t.removeAttribute("src");t.addEventListener("error",kp),t.addEventListener("error",td),t.addEventListener("emptied",()=>{t.querySelectorAll("track[data-removeondestroy]").forEach(c=>{c.remove()})},{once:!0}),be(t,"pause",l),be(t,"seeked",l),be(t,"play",()=>{t.ended||fp(t.currentTime,t.duration)&&(t.currentTime=t.seekable.length?t.seekable.start(0):0)})}else i&&s?(i.once(q.Events.LEVEL_LOADED,(u,c)=>{Og(c.details,t,i),d(),Jl(t)===X.LIVE&&!Number.isFinite(t.duration)&&(i.on(q.Events.LEVEL_UPDATED,d),be(t,"durationchange",()=>{Number.isFinite(t.duration)&&i.off(q.Events.LEVELS_UPDATED,d)}))}),i.on(q.Events.ERROR,(u,c)=>{var v,b;let E=t0(c,e);if(E.muxCode===P.NETWORK_NOT_READY){let g=(v=pe.get(t))!=null?v:{},T=(b=g.retryCount)!=null?b:0;if(T<6){let y=T===0?5e3:6e4,w=new C(`Retrying in ${y/1e3} seconds...`,E.code,E.fatal);Object.assign(w,E),it(t,w),setTimeout(()=>{g.retryCount=T+1,c.details==="manifestLoadError"&&c.url&&i.loadSource(c.url)},y);return}else{g.retryCount=0;let y=new C('Try again later or <a href="#" onclick="window.location.reload(); return false;" style="color: #4a90e2;">click here to retry</a>',E.code,E.fatal);Object.assign(y,E),it(t,y);return}}it(t,E)}),i.on(q.Events.MANIFEST_LOADED,()=>{let u=pe.get(t);u&&u.error&&(u.error=null,u.retryCount=0,t.dispatchEvent(new Event("emptied")),t.dispatchEvent(new Event("loadstart")))}),t.addEventListener("error",td),be(t,"waiting",l),hg(e,i),mg(t,i),i.attachMedia(t)):console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.")};function Ap(e){var t;let i=e.target,a=(t=pe.get(i))==null?void 0:t.startTime;if(a&&eg(i.seekable,i.duration,a)){let r=i.preload==="auto";r&&(i.preload="none"),i.currentTime=a,r&&(i.preload="auto")}}function kp(e){return ed.apply(this,arguments)}function ed(){return ed=F(function*(e){if(!e.isTrusted)return;e.stopImmediatePropagation();let t=e.target;if(!(t!=null&&t.error))return;let{message:i,code:a}=t.error,r=new C(i,a);if(t.src&&a===C.MEDIA_ERR_SRC_NOT_SUPPORTED&&t.readyState===HTMLMediaElement.HAVE_NOTHING){setTimeout(()=>{var n;let s=(n=vp(t))!=null?n:t.error;(s==null?void 0:s.code)===C.MEDIA_ERR_SRC_NOT_SUPPORTED&&it(t,r)},500);return}if(t.src&&(a!==C.MEDIA_ERR_DECODE||a!==void 0))try{let{status:n}=yield fetch(t.src);r.data={response:{code:n}}}catch(n){}it(t,r)}),ed.apply(this,arguments)}function it(e,t){var i;t.fatal&&(((i=pe.get(e))!=null?i:{}).error=t,e.dispatchEvent(new CustomEvent("error",{detail:t})))}function td(e){var t,i;if(!(e instanceof CustomEvent)||!(e.detail instanceof C))return;let a=e.target,r=e.detail;!r||!r.fatal||(((t=pe.get(a))!=null?t:{}).error=r,(i=a.mux)==null||i.emit("error",{player_error_code:r.code,player_error_message:r.message,player_error_context:r.context}))}var t0=(e,t)=>{var i,a,r;e.fatal?console.error("getErrorFromHlsErrorData()",e):t.debug&&console.warn("getErrorFromHlsErrorData() (non-fatal)",e);let n={[q.ErrorTypes.NETWORK_ERROR]:C.MEDIA_ERR_NETWORK,[q.ErrorTypes.MEDIA_ERROR]:C.MEDIA_ERR_DECODE,[q.ErrorTypes.KEY_SYSTEM_ERROR]:C.MEDIA_ERR_ENCRYPTED},s=p=>[q.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,q.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED].includes(p.details)?C.MEDIA_ERR_NETWORK:n[p.type],o=p=>{if(p.type===q.ErrorTypes.KEY_SYSTEM_ERROR)return se.DRM;if(p.type===q.ErrorTypes.NETWORK_ERROR)return se.VIDEO},l,m=s(e);if(m===C.MEDIA_ERR_NETWORK&&e.response){let p=(i=o(e))!=null?i:se.VIDEO;l=(a=Eo(e.response,p,t,e.fatal))!=null?a:new C("",m,e.fatal)}else m===C.MEDIA_ERR_ENCRYPTED?e.details===q.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE?(l=new C(O("Attempting to play DRM-protected content without providing a DRM token."),C.MEDIA_ERR_ENCRYPTED,e.fatal),l.errorCategory=se.DRM,l.muxCode=P.ENCRYPTED_MISSING_TOKEN):e.details===q.ErrorDetails.KEY_SYSTEM_NO_ACCESS?(l=new C(O("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),C.MEDIA_ERR_ENCRYPTED,e.fatal),l.errorCategory=se.DRM,l.muxCode=P.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM):e.details===q.ErrorDetails.KEY_SYSTEM_NO_SESSION?(l=new C(O("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),C.MEDIA_ERR_ENCRYPTED,!0),l.errorCategory=se.DRM,l.muxCode=P.ENCRYPTED_GENERATE_REQUEST_FAILED):e.details===q.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED?(l=new C(O("Failed to update DRM license. This may be an issue with the player or your protected content."),C.MEDIA_ERR_ENCRYPTED,e.fatal),l.errorCategory=se.DRM,l.muxCode=P.ENCRYPTED_UPDATE_LICENSE_FAILED):e.details===q.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED?(l=new C(O("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),C.MEDIA_ERR_ENCRYPTED,e.fatal),l.errorCategory=se.DRM,l.muxCode=P.ENCRYPTED_UPDATE_SERVER_CERT_FAILED):e.details===q.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR?(l=new C(O("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser."),C.MEDIA_ERR_ENCRYPTED,e.fatal),l.errorCategory=se.DRM,l.muxCode=P.ENCRYPTED_CDM_ERROR):e.details===q.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED?(l=new C(O("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."),C.MEDIA_ERR_ENCRYPTED,!1),l.errorCategory=se.DRM,l.muxCode=P.ENCRYPTED_OUTPUT_RESTRICTED):(l=new C(e.error.message,C.MEDIA_ERR_ENCRYPTED,e.fatal),l.errorCategory=se.DRM,l.muxCode=P.ENCRYPTED_ERROR):l=new C("",m,e.fatal);return l.context||(l.context=`${e.url?`url: ${e.url}
`:""}${e.response&&(e.response.code||e.response.text)?`response: ${e.response.code}, ${e.response.text}
`:""}${e.reason?`failure reason: ${e.reason}
`:""}${e.level?`level: ${e.level}
`:""}${e.parent?`parent stream controller: ${e.parent}
`:""}${e.buffer?`buffer length: ${e.buffer}
`:""}${e.error?`error: ${e.error}
`:""}${e.event?`event: ${e.event}
`:""}${e.err?`error message: ${(r=e.err)==null?void 0:r.message}
`:""}`),l.data=e,l};rE();ti();var Sp=e=>{throw TypeError(e)},wu=(e,t,i)=>t.has(e)||Sp("Cannot "+i),Ue=(e,t,i)=>(wu(e,t,"read from private field"),i?i.call(e):t.get(e)),Et=(e,t,i)=>t.has(e)?Sp("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),dt=(e,t,i,a)=>(wu(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),Hn=(e,t,i)=>(wu(e,t,"access private method"),i),i0=()=>{try{return"0.29.2"}catch(e){}return"UNKNOWN"},a0=i0(),r0=()=>a0,n0=`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" part="logo" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 1600 500"><g fill="#fff"><path d="M994.287 93.486c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m0-93.486c-34.509 0-62.484 27.976-62.484 62.486v187.511c0 68.943-56.09 125.033-125.032 125.033s-125.03-56.09-125.03-125.033V62.486C681.741 27.976 653.765 0 619.256 0s-62.484 27.976-62.484 62.486v187.511C556.772 387.85 668.921 500 806.771 500c137.851 0 250.001-112.15 250.001-250.003V62.486c0-34.51-27.976-62.486-62.485-62.486M1537.51 468.511c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m-275.883-218.509-143.33 143.329c-24.402 24.402-24.402 63.966 0 88.368 24.402 24.402 63.967 24.402 88.369 0l143.33-143.329 143.328 143.329c24.402 24.4 63.967 24.402 88.369 0 24.403-24.402 24.403-63.966.001-88.368l-143.33-143.329.001-.004 143.329-143.329c24.402-24.402 24.402-63.965 0-88.367s-63.967-24.402-88.369 0L1349.996 161.63 1206.667 18.302c-24.402-24.401-63.967-24.402-88.369 0s-24.402 63.965 0 88.367l143.329 143.329v.004ZM437.511 468.521c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31M461.426 4.759C438.078-4.913 411.2.432 393.33 18.303L249.999 161.632 106.669 18.303C88.798.432 61.922-4.913 38.573 4.759 15.224 14.43-.001 37.214-.001 62.488v375.026c0 34.51 27.977 62.486 62.487 62.486 34.51 0 62.486-27.976 62.486-62.486V213.341l80.843 80.844c24.404 24.402 63.965 24.402 88.369 0l80.843-80.844v224.173c0 34.51 27.976 62.486 62.486 62.486s62.486-27.976 62.486-62.486V62.488c0-25.274-15.224-48.058-38.573-57.729" style="fill-rule:nonzero"/></g></svg>`,_={BEACON_COLLECTION_DOMAIN:"beacon-collection-domain",CUSTOM_DOMAIN:"custom-domain",DEBUG:"debug",DISABLE_TRACKING:"disable-tracking",DISABLE_COOKIES:"disable-cookies",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended",DRM_TOKEN:"drm-token",PLAYBACK_TOKEN:"playback-token",ENV_KEY:"env-key",MAX_RESOLUTION:"max-resolution",MIN_RESOLUTION:"min-resolution",MAX_AUTO_RESOLUTION:"max-auto-resolution",RENDITION_ORDER:"rendition-order",PROGRAM_START_TIME:"program-start-time",PROGRAM_END_TIME:"program-end-time",ASSET_START_TIME:"asset-start-time",ASSET_END_TIME:"asset-end-time",METADATA_URL:"metadata-url",PLAYBACK_ID:"playback-id",PLAYER_SOFTWARE_NAME:"player-software-name",PLAYER_SOFTWARE_VERSION:"player-software-version",PLAYER_INIT_TIME:"player-init-time",PREFER_CMCD:"prefer-cmcd",PREFER_PLAYBACK:"prefer-playback",START_TIME:"start-time",STREAM_TYPE:"stream-type",TARGET_LIVE_WINDOW:"target-live-window",LIVE_EDGE_OFFSET:"live-edge-offset",TYPE:"type",LOGO:"logo"},s0=Object.values(_),vh=r0(),fh="mux-video",Nt,Hr,ns,Br,ss,os,ls,ds,us,Wr,Ia,Fr,o0=class extends Pn{constructor(){super(),Et(this,Ia),Et(this,Nt),Et(this,Hr),Et(this,ns),Et(this,Br,{}),Et(this,ss,{}),Et(this,os),Et(this,ls),Et(this,ds),Et(this,us),Et(this,Wr,""),dt(this,ns,Tu()),this.nativeEl.addEventListener("muxmetadata",e=>{var t;let i=Fg(this.nativeEl),a=(t=this.metadata)!=null?t:{};this.metadata=D(D({},i),a),(i==null?void 0:i["com.mux.video.branding"])==="mux-free-plan"&&(dt(this,Wr,"default"),this.updateLogo())})}static get NAME(){return fh}static get VERSION(){return vh}static get observedAttributes(){var e;return[...s0,...(e=Pn.observedAttributes)!=null?e:[]]}static getLogoHTML(e){return!e||e==="false"?"":e==="default"?n0:`<img part="logo" src="${e}" />`}static getTemplateHTML(e={}){var t;return`
      ${Pn.getTemplateHTML(e)}
      <style>
        :host {
          position: relative;
        }
        slot[name="logo"] {
          display: flex;
          justify-content: end;
          position: absolute;
          top: 1rem;
          right: 1rem;
          opacity: 0;
          transition: opacity 0.25s ease-in-out;
          z-index: 1;
        }
        slot[name="logo"]:has([part="logo"]) {
          opacity: 1;
        }
        slot[name="logo"] [part="logo"] {
          width: 5rem;
          pointer-events: none;
          user-select: none;
        }
      </style>
      <slot name="logo">
        ${this.getLogoHTML((t=e[_.LOGO])!=null?t:"")}
      </slot>
    `}get preferCmcd(){var e;return(e=this.getAttribute(_.PREFER_CMCD))!=null?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?fo.includes(e)?this.setAttribute(_.PREFER_CMCD,e):console.warn(`Invalid value for preferCmcd. Must be one of ${fo.join()}`):this.removeAttribute(_.PREFER_CMCD))}get playerInitTime(){return this.hasAttribute(_.PLAYER_INIT_TIME)?+this.getAttribute(_.PLAYER_INIT_TIME):Ue(this,ns)}set playerInitTime(e){e!=this.playerInitTime&&(e==null?this.removeAttribute(_.PLAYER_INIT_TIME):this.setAttribute(_.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return(e=Ue(this,ds))!=null?e:fh}set playerSoftwareName(e){dt(this,ds,e)}get playerSoftwareVersion(){var e;return(e=Ue(this,ls))!=null?e:vh}set playerSoftwareVersion(e){dt(this,ls,e)}get _hls(){var e;return(e=Ue(this,Nt))==null?void 0:e.engine}get mux(){var e;return(e=this.nativeEl)==null?void 0:e.mux}get error(){var e;return(e=vp(this.nativeEl))!=null?e:null}get errorTranslator(){return Ue(this,us)}set errorTranslator(e){dt(this,us,e)}get src(){return this.getAttribute("src")}set src(e){e!==this.src&&(e==null?this.removeAttribute("src"):this.setAttribute("src",e))}get type(){var e;return(e=this.getAttribute(_.TYPE))!=null?e:void 0}set type(e){e!==this.type&&(e?this.setAttribute(_.TYPE,e):this.removeAttribute(_.TYPE))}get preload(){let e=this.getAttribute("preload");return e===""?"auto":["none","metadata","auto"].includes(e)?e:super.preload}set preload(e){e!=this.getAttribute("preload")&&(["","none","metadata","auto"].includes(e)?this.setAttribute("preload",e):this.removeAttribute("preload"))}get debug(){return this.getAttribute(_.DEBUG)!=null}set debug(e){e!==this.debug&&(e?this.setAttribute(_.DEBUG,""):this.removeAttribute(_.DEBUG))}get disableTracking(){return this.hasAttribute(_.DISABLE_TRACKING)}set disableTracking(e){e!==this.disableTracking&&this.toggleAttribute(_.DISABLE_TRACKING,!!e)}get disableCookies(){return this.hasAttribute(_.DISABLE_COOKIES)}set disableCookies(e){e!==this.disableCookies&&(e?this.setAttribute(_.DISABLE_COOKIES,""):this.removeAttribute(_.DISABLE_COOKIES))}get disablePseudoEnded(){return this.hasAttribute(_.DISABLE_PSEUDO_ENDED)}set disablePseudoEnded(e){e!==this.disablePseudoEnded&&(e?this.setAttribute(_.DISABLE_PSEUDO_ENDED,""):this.removeAttribute(_.DISABLE_PSEUDO_ENDED))}get startTime(){let e=this.getAttribute(_.START_TIME);if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}set startTime(e){e!==this.startTime&&(e==null?this.removeAttribute(_.START_TIME):this.setAttribute(_.START_TIME,`${e}`))}get playbackId(){var e;return this.hasAttribute(_.PLAYBACK_ID)?this.getAttribute(_.PLAYBACK_ID):(e=Au(this.src))!=null?e:void 0}set playbackId(e){e!==this.playbackId&&(e?this.setAttribute(_.PLAYBACK_ID,e):this.removeAttribute(_.PLAYBACK_ID))}get maxResolution(){var e;return(e=this.getAttribute(_.MAX_RESOLUTION))!=null?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(_.MAX_RESOLUTION,e):this.removeAttribute(_.MAX_RESOLUTION))}get minResolution(){var e;return(e=this.getAttribute(_.MIN_RESOLUTION))!=null?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(_.MIN_RESOLUTION,e):this.removeAttribute(_.MIN_RESOLUTION))}get maxAutoResolution(){var e;return(e=this.getAttribute(_.MAX_AUTO_RESOLUTION))!=null?e:void 0}set maxAutoResolution(e){e==null?this.removeAttribute(_.MAX_AUTO_RESOLUTION):this.setAttribute(_.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){var e;return(e=this.getAttribute(_.RENDITION_ORDER))!=null?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(_.RENDITION_ORDER,e):this.removeAttribute(_.RENDITION_ORDER))}get programStartTime(){let e=this.getAttribute(_.PROGRAM_START_TIME);if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}set programStartTime(e){e==null?this.removeAttribute(_.PROGRAM_START_TIME):this.setAttribute(_.PROGRAM_START_TIME,`${e}`)}get programEndTime(){let e=this.getAttribute(_.PROGRAM_END_TIME);if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}set programEndTime(e){e==null?this.removeAttribute(_.PROGRAM_END_TIME):this.setAttribute(_.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){let e=this.getAttribute(_.ASSET_START_TIME);if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetStartTime(e){e==null?this.removeAttribute(_.ASSET_START_TIME):this.setAttribute(_.ASSET_START_TIME,`${e}`)}get assetEndTime(){let e=this.getAttribute(_.ASSET_END_TIME);if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetEndTime(e){e==null?this.removeAttribute(_.ASSET_END_TIME):this.setAttribute(_.ASSET_END_TIME,`${e}`)}get customDomain(){var e;return(e=this.getAttribute(_.CUSTOM_DOMAIN))!=null?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(_.CUSTOM_DOMAIN,e):this.removeAttribute(_.CUSTOM_DOMAIN))}get drmToken(){var e;return(e=this.getAttribute(_.DRM_TOKEN))!=null?e:void 0}set drmToken(e){e!==this.drmToken&&(e?this.setAttribute(_.DRM_TOKEN,e):this.removeAttribute(_.DRM_TOKEN))}get playbackToken(){var e,t,i,a;if(this.hasAttribute(_.PLAYBACK_TOKEN))return(e=this.getAttribute(_.PLAYBACK_TOKEN))!=null?e:void 0;if(this.hasAttribute(_.PLAYBACK_ID)){let[,r]=Eu((t=this.playbackId)!=null?t:"");return(i=new URLSearchParams(r).get("token"))!=null?i:void 0}if(this.src)return(a=new URLSearchParams(this.src).get("token"))!=null?a:void 0}set playbackToken(e){e!==this.playbackToken&&(e?this.setAttribute(_.PLAYBACK_TOKEN,e):this.removeAttribute(_.PLAYBACK_TOKEN))}get tokens(){let e=this.getAttribute(_.PLAYBACK_TOKEN),t=this.getAttribute(_.DRM_TOKEN);return D(D(D({},Ue(this,ss)),e!=null?{playback:e}:{}),t!=null?{drm:t}:{})}set tokens(e){dt(this,ss,e!=null?e:{})}get ended(){return _p(this.nativeEl,this._hls)}get envKey(){var e;return(e=this.getAttribute(_.ENV_KEY))!=null?e:void 0}set envKey(e){e!==this.envKey&&(e?this.setAttribute(_.ENV_KEY,e):this.removeAttribute(_.ENV_KEY))}get beaconCollectionDomain(){var e;return(e=this.getAttribute(_.BEACON_COLLECTION_DOMAIN))!=null?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(_.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(_.BEACON_COLLECTION_DOMAIN))}get streamType(){var e;return(e=this.getAttribute(_.STREAM_TYPE))!=null?e:Jl(this.nativeEl)}set streamType(e){e!==this.streamType&&(e?this.setAttribute(_.STREAM_TYPE,e):this.removeAttribute(_.STREAM_TYPE))}get targetLiveWindow(){return this.hasAttribute(_.TARGET_LIVE_WINDOW)?+this.getAttribute(_.TARGET_LIVE_WINDOW):Kg(this.nativeEl)}set targetLiveWindow(e){e!=this.targetLiveWindow&&(e==null?this.removeAttribute(_.TARGET_LIVE_WINDOW):this.setAttribute(_.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e,t;if(this.hasAttribute(_.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:i}=this,a=(e=this.nativeEl.seekable.end(0))!=null?e:0,r=(t=this.nativeEl.seekable.start(0))!=null?t:0;return Math.max(r,a-i)}return Vg(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(_.LIVE_EDGE_OFFSET))return+this.getAttribute(_.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){e!=this.liveEdgeOffset&&(e==null?this.removeAttribute(_.LIVE_EDGE_OFFSET):this.setAttribute(_.LIVE_EDGE_OFFSET,`${+e}`))}get seekable(){return ku(this.nativeEl)}addCuePoints(e){var t=this;return F(function*(){return lp(t.nativeEl,e)})()}get activeCuePoint(){return dp(this.nativeEl)}get cuePoints(){return vg(this.nativeEl)}addChapters(e){var t=this;return F(function*(){return cp(t.nativeEl,e)})()}get activeChapter(){return hp(this.nativeEl)}get chapters(){return Eg(this.nativeEl)}getStartDate(){return gg(this.nativeEl,this._hls)}get currentPdt(){return bg(this.nativeEl,this._hls)}get preferPlayback(){let e=this.getAttribute(_.PREFER_PLAYBACK);if(e===Zt.MSE||e===Zt.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===Zt.MSE||e===Zt.NATIVE?this.setAttribute(_.PREFER_PLAYBACK,e):this.removeAttribute(_.PREFER_PLAYBACK))}get metadata(){return D(D({},this.getAttributeNames().filter(e=>e.startsWith("metadata-")&&![_.METADATA_URL].includes(e)).reduce((e,t)=>{let i=this.getAttribute(t);return i!=null&&(e[t.replace(/^metadata-/,"").replace(/-/g,"_")]=i),e},{})),Ue(this,Br))}set metadata(e){dt(this,Br,e!=null?e:{}),this.mux&&this.mux.emit("hb",Ue(this,Br))}get _hlsConfig(){return Ue(this,os)}set _hlsConfig(e){dt(this,os,e)}get logo(){var e;return(e=this.getAttribute(_.LOGO))!=null?e:Ue(this,Wr)}set logo(e){e?this.setAttribute(_.LOGO,e):this.removeAttribute(_.LOGO)}load(){dt(this,Nt,Gg(this,this.nativeEl,Ue(this,Nt)))}unload(){gp(this.nativeEl,Ue(this,Nt),this),dt(this,Nt,void 0)}attributeChangedCallback(e,t,i){var a,r;switch(Pn.observedAttributes.includes(e)&&!["src","autoplay","preload"].includes(e)&&super.attributeChangedCallback(e,t,i),e){case _.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=i!=null?i:void 0;break;case _.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=i!=null?i:void 0;break;case"src":{let n=!!t,s=!!i;!n&&s?Hn(this,Ia,Fr).call(this):n&&!s?this.unload():n&&s&&(this.unload(),Hn(this,Ia,Fr).call(this));break}case"autoplay":if(i===t)break;(a=Ue(this,Nt))==null||a.setAutoplay(this.autoplay);break;case"preload":if(i===t)break;(r=Ue(this,Nt))==null||r.setPreload(i);break;case _.PLAYBACK_ID:this.src=Xl(this);break;case _.DEBUG:{let n=this.debug;this.mux&&console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."),this._hls&&(this._hls.config.debug=n);break}case _.METADATA_URL:i&&fetch(i).then(n=>n.json()).then(n=>this.metadata=n).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${i}!`));break;case _.STREAM_TYPE:(i==null||i!==t)&&this.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}));break;case _.TARGET_LIVE_WINDOW:(i==null||i!==t)&&this.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0,detail:this.targetLiveWindow}));break;case _.LOGO:(i==null||i!==t)&&this.updateLogo();break;case _.DISABLE_TRACKING:if(i==null||i!==t){let n=this.currentTime,s=this.paused;this.unload(),Hn(this,Ia,Fr).call(this).then(()=>{this.currentTime=n,s||this.play()})}break;case _.DISABLE_COOKIES:(i==null||i!==t)&&this.disableCookies&&document.cookie.split(";").forEach(n=>{n.trim().startsWith("muxData")&&(document.cookie=n.replace(/^ +/,"").replace(/=.*/,"=;expires="+new Date().toUTCString()+";path=/"))});break}}updateLogo(){if(!this.shadowRoot)return;let e=this.shadowRoot.querySelector('slot[name="logo"]');e&&(e.innerHTML=this.constructor.getLogoHTML(Ue(this,Wr)||this.logo))}connectedCallback(){var e;(e=super.connectedCallback)==null||e.call(this),this.nativeEl&&this.src&&!Ue(this,Nt)&&Hn(this,Ia,Fr).call(this)}disconnectedCallback(){this.unload()}handleEvent(e){e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{composed:!0,detail:e.detail}))}};Nt=new WeakMap,Hr=new WeakMap,ns=new WeakMap,Br=new WeakMap,ss=new WeakMap,os=new WeakMap,ls=new WeakMap,ds=new WeakMap,us=new WeakMap,Wr=new WeakMap,Ia=new WeakSet,Fr=F(function*(){Ue(this,Hr)||(yield dt(this,Hr,Promise.resolve()),dt(this,Hr,null),this.load())});ti();const sa=new WeakMap;var bl=class extends Error{},l0=class extends Error{},d0=["application/x-mpegURL","application/vnd.apple.mpegurl","audio/mpegurl"];const u0=globalThis.WeakRef?class extends Set{add(e){super.add(new WeakRef(e))}forEach(e){super.forEach(t=>{const i=t.deref();i&&e(i)})}}:Set;function c0(e){var t,i;!((t=globalThis.chrome)===null||t===void 0||(t=t.cast)===null||t===void 0)&&t.isAvailable?!((i=globalThis.cast)===null||i===void 0)&&i.framework?e():customElements.whenDefined("google-cast-button").then(e):globalThis.__onGCastApiAvailable=()=>{customElements.whenDefined("google-cast-button").then(e)}}function h0(){return globalThis.chrome}function m0(){var e;const t="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";if(!((e=globalThis.chrome)===null||e===void 0)&&e.cast||document.querySelector(`script[src="${t}"]`))return;const i=document.createElement("script");i.src=t,document.head.append(i)}function Pi(){var e;return(e=globalThis.cast)===null||e===void 0||(e=e.framework)===null||e===void 0?void 0:e.CastContext.getInstance()}function Iu(){var e;return(e=Pi())===null||e===void 0?void 0:e.getCurrentSession()}function Ru(){var e;return(e=Iu())===null||e===void 0?void 0:e.getSessionObj().media[0]}function p0(e){return new Promise((t,i)=>{Ru().editTracksInfo(e,t,i)})}function v0(e){return new Promise((t,i)=>{Ru().getStatus(e,t,i)})}function wp(e){return Pi().setOptions(D(D({},Ip()),e))}function Ip(){return{receiverApplicationId:"CC1AD845",autoJoinPolicy:"origin_scoped",androidReceiverCompatible:!1,language:"en-US",resumeSavedSession:!0}}function f0(e){if(!e)return;const t=e.match(/\.([a-zA-Z0-9]+)(?:\?.*)?$/);return t?t[1]:null}function E0(e){const t=e.split(`
`),i=[];for(let a=0;a<t.length;a++)if(t[a].trim().startsWith("#EXT-X-STREAM-INF")){const r=t[a+1]?t[a+1].trim():"";r&&!r.startsWith("#")&&i.push(r)}return i}function _0(e){return e.split(`
`).find(t=>!t.trim().startsWith("#")&&t.trim()!=="")}function g0(e){return id.apply(this,arguments)}function id(){return id=F(function*(e){try{const t=(yield fetch(e,{method:"HEAD"})).headers.get("Content-Type");return d0.some(i=>t===i)}catch(t){return console.error("Error while trying to get the Content-Type of the manifest",t),!1}}),id.apply(this,arguments)}function b0(e){return ad.apply(this,arguments)}function ad(){return ad=F(function*(e){try{const t=yield(yield fetch(e)).text();let i=t;const a=E0(t);if(a.length>0){const r=new URL(a[0],e).toString();i=yield(yield fetch(r)).text()}return f0(_0(i))}catch(t){console.error("Error while trying to parse the manifest playlist",t);return}}),ad.apply(this,arguments)}var cs=new u0,Oi=new WeakSet,we;c0(()=>{var e;if(!(!((e=globalThis.chrome)===null||e===void 0||(e=e.cast)===null||e===void 0)&&e.isAvailable)){var t;console.debug("chrome.cast.isAvailable",(t=globalThis.chrome)===null||t===void 0||(t=t.cast)===null||t===void 0?void 0:t.isAvailable);return}we||(we=cast.framework,Pi().addEventListener(we.CastContextEventType.CAST_STATE_CHANGED,i=>{cs.forEach(a=>{var r,n;return(r=(n=sa.get(a)).onCastStateChanged)===null||r===void 0?void 0:r.call(n,i)})}),Pi().addEventListener(we.CastContextEventType.SESSION_STATE_CHANGED,i=>{cs.forEach(a=>{var r,n;return(r=(n=sa.get(a)).onSessionStateChanged)===null||r===void 0?void 0:r.call(n,i)})}),cs.forEach(i=>{var a,r;return(a=(r=sa.get(i)).init)===null||a===void 0?void 0:a.call(r)}))});var Eh=0,ee=new WeakMap,rd=new WeakMap,It=new WeakMap,oa=new WeakMap,_n=new WeakMap,Kr=new WeakMap,za=new WeakMap,_h=new WeakMap,Be=new WeakSet,y0=class extends EventTarget{constructor(e){super(),xm(this,Be),ut(this,ee,void 0),ut(this,rd,void 0),ut(this,It,void 0),ut(this,oa,void 0),ut(this,_n,"disconnected"),ut(this,Kr,!1),ut(this,za,new Set),ut(this,_h,new WeakMap),wt(ee,this,e),cs.add(this),sa.set(this,{init:()=>H(Be,this,gh).call(this),onCastStateChanged:()=>H(Be,this,Rp).call(this),onSessionStateChanged:()=>H(Be,this,k0).call(this),getCastPlayer:()=>Za.call(H(Be,this))}),H(Be,this,gh).call(this)}get state(){return x(_n,this)}watchAvailability(e){var t=this;return F(function*(){if(x(ee,t).disableRemotePlayback)throw new bl("disableRemotePlayback attribute is present.");return x(_h,t).set(e,++Eh),x(za,t).add(e),queueMicrotask(()=>e(H(Be,t,A0).call(t))),Eh})()}cancelWatchAvailability(e){var t=this;return F(function*(){if(x(ee,t).disableRemotePlayback)throw new bl("disableRemotePlayback attribute is present.");e?x(za,t).delete(e):x(za,t).clear()})()}prompt(){var e=this;return F(function*(){var t,i,a;if(x(ee,e).disableRemotePlayback)throw new bl("disableRemotePlayback attribute is present.");if(!(!((t=globalThis.chrome)===null||t===void 0||(t=t.cast)===null||t===void 0)&&t.isAvailable))throw new l0("The RemotePlayback API is disabled on this platform.");const r=Oi.has(x(ee,e));Oi.add(x(ee,e)),wp(x(ee,e).castOptions),Object.entries(x(oa,e)).forEach(([n,s])=>{x(It,e).controller.addEventListener(n,s)});try{yield Pi().requestSession()}catch(n){if(r||Oi.delete(x(ee,e)),n==="cancel")return;throw new Error(n)}(i=sa.get(x(ee,e)))===null||i===void 0||(a=i.loadOnPrompt)===null||a===void 0||a.call(i)})()}};function Za(){if(Oi.has(x(ee,this)))return x(It,this)}function T0(){Oi.has(x(ee,this))&&(Object.entries(x(oa,this)).forEach(([e,t])=>{x(It,this).controller.removeEventListener(e,t)}),Oi.delete(x(ee,this)),x(ee,this).muted=x(It,this).isMuted,x(ee,this).currentTime=x(It,this).savedPlayerState.currentTime,x(It,this).savedPlayerState.isPaused===!1&&x(ee,this).play())}function A0(){var e;const t=(e=Pi())===null||e===void 0?void 0:e.getCastState();return t&&t!=="NO_DEVICES_AVAILABLE"}function Rp(){const e=Pi().getCastState();if(Oi.has(x(ee,this))&&e==="CONNECTING"&&(wt(_n,this,"connecting"),this.dispatchEvent(new Event("connecting"))),!x(Kr,this)&&(e!=null&&e.includes("CONNECT"))){wt(Kr,this,!0);for(let t of x(za,this))t(!0)}else if(x(Kr,this)&&(!e||e==="NO_DEVICES_AVAILABLE")){wt(Kr,this,!1);for(let t of x(za,this))t(!1)}}function k0(){var e=this;return F(function*(){const{SESSION_RESUMED:t}=we.SessionState;if(Pi().getSessionState()===t){var i;if(x(ee,e).castSrc===((i=Ru())===null||i===void 0?void 0:i.media.contentId)){Oi.add(x(ee,e)),Object.entries(x(oa,e)).forEach(([a,r])=>{x(It,e).controller.addEventListener(a,r)});try{yield v0(new chrome.cast.media.GetStatusRequest)}catch(a){console.error(a)}x(oa,e)[we.RemotePlayerEventType.IS_PAUSED_CHANGED](),x(oa,e)[we.RemotePlayerEventType.PLAYER_STATE_CHANGED]()}}})()}function gh(){var e=this;!we||x(rd,this)||(wt(rd,this,!0),wp(x(ee,this).castOptions),x(ee,this).textTracks.addEventListener("change",()=>H(Be,this,Cp).call(this)),H(Be,this,Rp).call(this),wt(It,this,new we.RemotePlayer),new we.RemotePlayerController(x(It,this)),wt(oa,this,{[we.RemotePlayerEventType.IS_CONNECTED_CHANGED]:({value:t})=>{t===!0?(wt(_n,this,"connected"),this.dispatchEvent(new Event("connect"))):(H(Be,this,T0).call(this),wt(_n,this,"disconnected"),this.dispatchEvent(new Event("disconnect")))},[we.RemotePlayerEventType.DURATION_CHANGED]:()=>{x(ee,this).dispatchEvent(new Event("durationchange"))},[we.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]:()=>{x(ee,this).dispatchEvent(new Event("volumechange"))},[we.RemotePlayerEventType.IS_MUTED_CHANGED]:()=>{x(ee,this).dispatchEvent(new Event("volumechange"))},[we.RemotePlayerEventType.CURRENT_TIME_CHANGED]:()=>{var t;!((t=Za.call(H(Be,this)))===null||t===void 0)&&t.isMediaLoaded&&x(ee,this).dispatchEvent(new Event("timeupdate"))},[we.RemotePlayerEventType.VIDEO_INFO_CHANGED]:()=>{x(ee,this).dispatchEvent(new Event("resize"))},[we.RemotePlayerEventType.IS_PAUSED_CHANGED]:()=>{x(ee,this).dispatchEvent(new Event(this.paused?"pause":"play"))},[we.RemotePlayerEventType.PLAYER_STATE_CHANGED]:()=>{var t,i;((t=Za.call(H(Be,this)))===null||t===void 0?void 0:t.playerState)!==chrome.cast.media.PlayerState.PAUSED&&x(ee,this).dispatchEvent(new Event({[chrome.cast.media.PlayerState.PLAYING]:"playing",[chrome.cast.media.PlayerState.BUFFERING]:"waiting",[chrome.cast.media.PlayerState.IDLE]:"emptied"}[(i=Za.call(H(Be,this)))===null||i===void 0?void 0:i.playerState]))},[we.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]:F(function*(){var t;!((t=Za.call(H(Be,e)))===null||t===void 0)&&t.isMediaLoaded&&(yield Promise.resolve(),H(Be,e,S0).call(e))})}))}function S0(){H(Be,this,Cp).call(this)}function Cp(){var e=this;return F(function*(){var t,i,a,r;if(!Za.call(H(Be,e)))return;const n=((t=(i=x(It,e).mediaInfo)===null||i===void 0?void 0:i.tracks)!==null&&t!==void 0?t:[]).filter(({type:c})=>c===chrome.cast.media.TrackType.TEXT),s=[...x(ee,e).textTracks].filter(({kind:c})=>c==="subtitles"||c==="captions"),o=n.map(({language:c,name:v,trackId:b})=>{var E;const{mode:g}=(E=s.find(T=>T.language===c&&T.label===v))!==null&&E!==void 0?E:{};return g?{mode:g,trackId:b}:!1}).filter(Boolean),l=o.filter(({mode:c})=>c!=="showing").map(({trackId:c})=>c),m=o.find(({mode:c})=>c==="showing"),p=(a=(r=Iu())===null||r===void 0||(r=r.getSessionObj().media[0])===null||r===void 0?void 0:r.activeTrackIds)!==null&&a!==void 0?a:[];let d=p;if(p.length&&(d=d.filter(c=>!l.includes(c))),m!=null&&m.trackId&&(d=[...d,m.trackId]),d=[...new Set(d)],!((c,v)=>c.length===v.length&&c.every(b=>v.includes(b)))(p,d))try{yield p0(new chrome.cast.media.EditTracksInfoRequest(d))}catch(c){console.error(c)}})()}function _o(e){return _o=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_o(e)}function w0(e,t){for(;!{}.hasOwnProperty.call(e,t)&&(e=_o(e))!==null;);return e}function nd(){return nd=typeof Reflect!="undefined"&&Reflect.get?Reflect.get.bind():function(e,t,i){var a=w0(e,t);if(a){var r=Object.getOwnPropertyDescriptor(a,t);return r.get?r.get.call(arguments.length<3?e:i):r.value}},nd.apply(null,arguments)}function yl(e,t,i,a){var r=nd(_o(1&a?e.prototype:e),t,i);return 2&a&&typeof r=="function"?function(n){return r.apply(i,n)}:r}const I0=e=>{var t,i,a,r,n,s,o;return a=new WeakMap,r=new WeakMap,n=new WeakMap,s=new WeakMap,o=new WeakSet,t=class extends e{constructor(...d){super(...d),xm(this,o),ut(this,a,{paused:!1}),ut(this,r,Ip()),ut(this,n,void 0),ut(this,s,void 0)}get remote(){return x(s,this)?x(s,this):h0()?(this.disableRemotePlayback||m0(),sa.set(this,{loadOnPrompt:()=>H(o,this,m).call(this)}),wt(s,this,new y0(this))):super.remote}attributeChangedCallback(d,u,c){if(super.attributeChangedCallback(d,u,c),d==="cast-receiver"&&c){x(r,this).receiverApplicationId=c;return}if(l.call(H(o,this)))switch(d){case"cast-stream-type":case"cast-src":this.load();break}}load(){var d=()=>super.load,u=()=>super.currentTime,c=this;return F(function*(){var v,b;if(!l.call(H(o,c)))return d().call(c);const E=new chrome.cast.media.MediaInfo(c.castSrc,c.castContentType);E.customData=c.castCustomData;const g=[...c.querySelectorAll("track")].filter(({kind:R,src:M})=>M&&(R==="subtitles"||R==="captions")),T=[];let y=0;if(g.length&&(E.tracks=g.map(R=>{const M=++y;T.length===0&&R.track.mode==="showing"&&T.push(M);const B=new chrome.cast.media.Track(M,chrome.cast.media.TrackType.TEXT);return B.trackContentId=R.src,B.trackContentType="text/vtt",B.subtype=R.kind==="captions"?chrome.cast.media.TextTrackType.CAPTIONS:chrome.cast.media.TextTrackType.SUBTITLES,B.name=R.label,B.language=R.srclang,B})),c.castStreamType==="live"?E.streamType=chrome.cast.media.StreamType.LIVE:E.streamType=chrome.cast.media.StreamType.BUFFERED,E.metadata=new chrome.cast.media.GenericMediaMetadata,E.metadata.title=c.title,E.metadata.images=[{url:c.poster}],g0(c.castSrc)){const R=yield b0(c.castSrc);R!=null&&R.includes("m4s")||R!=null&&R.includes("mp4")?(E.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.FMP4,E.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.FMP4):R!=null&&R.includes("ts")&&(E.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.TS,E.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.TS)}const w=new chrome.cast.media.LoadRequest(E);w.currentTime=(v=u())!==null&&v!==void 0?v:0,w.autoplay=!x(a,c).paused,w.activeTrackIds=T,yield(b=Iu())===null||b===void 0?void 0:b.loadMedia(w),c.dispatchEvent(new Event("volumechange"))})()}play(){if(l.call(H(o,this))){if(l.call(H(o,this)).isPaused){var d;(d=l.call(H(o,this)).controller)===null||d===void 0||d.playOrPause()}return}return super.play()}pause(){if(l.call(H(o,this))){if(!l.call(H(o,this)).isPaused){var d;(d=l.call(H(o,this)).controller)===null||d===void 0||d.playOrPause()}return}super.pause()}get castOptions(){return x(r,this)}get castReceiver(){var d;return(d=this.getAttribute("cast-receiver"))!==null&&d!==void 0?d:void 0}set castReceiver(d){this.castReceiver!=d&&this.setAttribute("cast-receiver",`${d}`)}get castSrc(){var d,u,c;return(d=(u=this.getAttribute("cast-src"))!==null&&u!==void 0?u:(c=this.querySelector("source"))===null||c===void 0?void 0:c.src)!==null&&d!==void 0?d:this.currentSrc}set castSrc(d){this.castSrc!=d&&this.setAttribute("cast-src",`${d}`)}get castContentType(){var d;return(d=this.getAttribute("cast-content-type"))!==null&&d!==void 0?d:void 0}set castContentType(d){this.setAttribute("cast-content-type",`${d}`)}get castStreamType(){var d,u;return(d=(u=this.getAttribute("cast-stream-type"))!==null&&u!==void 0?u:this.streamType)!==null&&d!==void 0?d:void 0}set castStreamType(d){this.setAttribute("cast-stream-type",`${d}`)}get castCustomData(){return x(n,this)}set castCustomData(d){const u=typeof d;if(!["object","undefined"].includes(u)){console.error(`castCustomData must be nullish or an object but value was of type ${u}`);return}wt(n,this,d)}get readyState(){if(l.call(H(o,this)))switch(l.call(H(o,this)).playerState){case chrome.cast.media.PlayerState.IDLE:return 0;case chrome.cast.media.PlayerState.BUFFERING:return 2;default:return 3}return super.readyState}get paused(){return l.call(H(o,this))?l.call(H(o,this)).isPaused:super.paused}get muted(){var d;return l.call(H(o,this))?(d=l.call(H(o,this)))===null||d===void 0?void 0:d.isMuted:super.muted}set muted(d){if(l.call(H(o,this))){if(d&&!l.call(H(o,this)).isMuted||!d&&l.call(H(o,this)).isMuted){var u;(u=l.call(H(o,this)).controller)===null||u===void 0||u.muteOrUnmute()}return}super.muted=d}get volume(){var d,u;return l.call(H(o,this))?(d=(u=l.call(H(o,this)))===null||u===void 0?void 0:u.volumeLevel)!==null&&d!==void 0?d:1:super.volume}set volume(d){if(l.call(H(o,this))){var u;l.call(H(o,this)).volumeLevel=+d,(u=l.call(H(o,this)).controller)===null||u===void 0||u.setVolumeLevel();return}super.volume=d}get duration(){var d;if(l.call(H(o,this))&&(!((d=l.call(H(o,this)))===null||d===void 0)&&d.isMediaLoaded)){var u,c;return(u=(c=l.call(H(o,this)))===null||c===void 0?void 0:c.duration)!==null&&u!==void 0?u:NaN}return super.duration}get currentTime(){var d;if(l.call(H(o,this))&&(!((d=l.call(H(o,this)))===null||d===void 0)&&d.isMediaLoaded)){var u,c;return(u=(c=l.call(H(o,this)))===null||c===void 0?void 0:c.currentTime)!==null&&u!==void 0?u:0}return super.currentTime}set currentTime(d){if(l.call(H(o,this))){var u;l.call(H(o,this)).currentTime=d,(u=l.call(H(o,this)).controller)===null||u===void 0||u.seek();return}super.currentTime=d}},aE(t,"observedAttributes",[...(i=e.observedAttributes)!==null&&i!==void 0?i:[],"cast-src","cast-content-type","cast-stream-type","cast-receiver"]),t;function l(){var p,d;return(p=sa.get(this.remote))===null||p===void 0||(d=p.getCastPlayer)===null||d===void 0?void 0:d.call(p)}function m(){var p=()=>yl(t.prototype,"paused",this),d=()=>yl(t.prototype,"pause",this),u=()=>yl(t.prototype,"muted",this),c=this;return F(function*(){x(a,c).paused=p(),d().call(c),c.muted=u();try{yield c.load()}catch(v){console.error(v)}})()}};var Lp=e=>{throw TypeError(e)},Dp=(e,t,i)=>t.has(e)||Lp("Cannot "+i),Mp=(e,t,i)=>(Dp(e,t,"read from private field"),i?i.call(e):t.get(e)),xp=(e,t,i)=>t.has(e)?Lp("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Op=(e,t,i,a)=>(Dp(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),$o=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if(typeof DocumentFragment=="undefined"){class e extends $o{}globalThis.DocumentFragment=e}var Cu=class extends $o{},R0=class extends $o{},C0={get(e){},define(e,t,i){},getName(e){return null},upgrade(e){},whenDefined(e){return Promise.resolve(Cu)}},hs,L0=class{constructor(e,t={}){xp(this,hs),Op(this,hs,t==null?void 0:t.detail)}get detail(){return Mp(this,hs)}initCustomEvent(){}};hs=new WeakMap;function D0(e,t){return new Cu}var Np={document:{createElement:D0},DocumentFragment,customElements:C0,CustomEvent:L0,EventTarget:$o,HTMLElement:Cu,HTMLVideoElement:R0},Pp=typeof window=="undefined"||typeof globalThis.customElements=="undefined",Tl=Pp?Np:globalThis;Pp?Np.document:globalThis.document;var ms,bh=class extends I0(oE(o0)){constructor(){super(...arguments),xp(this,ms)}get autoplay(){let e=this.getAttribute("autoplay");return e===null?!1:e===""?!0:e}set autoplay(e){e!==this.autoplay&&(e?this.setAttribute("autoplay",typeof e=="string"?e:""):this.removeAttribute("autoplay"))}get muxCastCustomData(){return{mux:{playbackId:this.playbackId,minResolution:this.minResolution,maxResolution:this.maxResolution,renditionOrder:this.renditionOrder,customDomain:this.customDomain,tokens:{drm:this.drmToken},envKey:this.envKey,metadata:this.metadata,disableCookies:this.disableCookies,disableTracking:this.disableTracking,beaconCollectionDomain:this.beaconCollectionDomain,startTime:this.startTime,preferCmcd:this.preferCmcd}}}get castCustomData(){var e;return(e=Mp(this,ms))!=null?e:this.muxCastCustomData}set castCustomData(e){Op(this,ms,e)}};ms=new WeakMap;Tl.customElements.get("mux-video")||(Tl.customElements.define("mux-video",bh),Tl.MuxVideoElement=bh);ti();var I={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_LOOP_REQUEST:"medialooprequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},z={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},Up={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_LOOP:"mediaLoop",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},Hp=Object.entries(Up),h=Hp.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{}),vi=Hp.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),D({},{USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"})),lk=Object.entries(vi).reduce((e,[t,i])=>{const a=h[t];return a&&(e[i]=a),e},{userinactivechange:"userinactive"}),M0=Object.entries(h).reduce((e,[t,i])=>{const a=vi[t];return a&&(e[i]=a),e},{userinactive:"userinactivechange"}),Jt={SUBTITLES:"subtitles",CAPTIONS:"captions",DESCRIPTIONS:"descriptions",CHAPTERS:"chapters",METADATA:"metadata"},ir={DISABLED:"disabled",HIDDEN:"hidden",SHOWING:"showing"},Al={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},je={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},li={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},x0={INLINE:"inline",FULLSCREEN:"fullscreen",PICTURE_IN_PICTURE:"picture-in-picture"};function O0(e){return e==null?void 0:e.map(P0).join(" ")}function N0(e){return e==null?void 0:e.split(/\s+/).map(U0)}function P0(e){if(e){const{id:t,width:i,height:a}=e;return[t,i,a].filter(r=>r!=null).join(":")}}function U0(e){if(e){const[t,i,a]=e.split(":");return{id:t,width:+i,height:+a}}}function H0(e){return e==null?void 0:e.map(W0).join(" ")}function B0(e){return e==null?void 0:e.split(/\s+/).map(F0)}function W0(e){if(e){const{id:t,kind:i,language:a,label:r}=e;return[t,i,a,r].filter(n=>n!=null).join(":")}}function F0(e){if(e){const[t,i,a,r]=e.split(":");return{id:t,kind:i,language:a,label:r}}}function K0(e){return e.replace(/[-_]([a-z])/g,(t,i)=>i.toUpperCase())}function Lu(e){return typeof e=="number"&&!Number.isNaN(e)&&Number.isFinite(e)}function Bp(e){return typeof e!="string"?!1:!isNaN(e)&&!isNaN(parseFloat(e))}var Wp=e=>new Promise(t=>setTimeout(t,e)),yh=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],V0=(e,t)=>`${e} ${e===1?yh[t].singular:yh[t].plural}`,dn=e=>{if(!Lu(e))return"";const t=Math.abs(e),i=t!==e,a=new Date(0,0,0,0,0,t,0);return`${[a.getHours(),a.getMinutes(),a.getSeconds()].map((r,n)=>r&&V0(r,n)).filter(r=>r).join(", ")}${i?" remaining":""}`};function Ni(e,t){let i=!1;e<0&&(i=!0,e=0-e),e=e<0?0:e;let a=Math.floor(e%60),r=Math.floor(e/60%60),n=Math.floor(e/3600);const s=Math.floor(t/60%60),o=Math.floor(t/3600);return(isNaN(e)||e===1/0)&&(n=r=a="0"),n=n>0||o>0?n+":":"",r=((n||s>=10)&&r<10?"0"+r:r)+":",a=a<10?"0"+a:a,(i?"-":"")+n+r+a}var dk=Object.freeze({length:0,start(e){const t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){const t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),q0={"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute",Loop:"Loop","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it."},Th,kl={en:q0},sd=((Th=globalThis.navigator)==null?void 0:Th.language)||"en",Y0=e=>{sd=e},G0=e=>{var t,i,a;const[r]=sd.split("-");return((t=kl[sd])==null?void 0:t[e])||((i=kl[r])==null?void 0:i[e])||((a=kl.en)==null?void 0:a[e])||e},L=(e,t={})=>G0(e).replace(/\{(\w+)\}/g,(i,a)=>a in t?String(t[a]):`{${a}}`),Fp=class{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}},Kp=class extends Fp{},Ah=class extends Kp{constructor(){super(...arguments),this.role=null}},$0=class{observe(){}unobserve(){}disconnect(){}},Vp={createElement:function(){return new gn.HTMLElement},createElementNS:function(){return new gn.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent(e){return!1}},gn={ResizeObserver:$0,document:Vp,Node:Kp,Element:Ah,HTMLElement:class extends Ah{constructor(){super(...arguments),this.innerHTML=""}get content(){return new gn.DocumentFragment}},DocumentFragment:class extends Fp{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem(e){return null},setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia(e){return{matches:!1,media:e}},DOMParser:class{parseFromString(t,i){return{body:{textContent:t}}}}},qp="global"in globalThis&&(globalThis==null?void 0:globalThis.global)===globalThis||typeof window=="undefined"||typeof window.customElements=="undefined",Yp=Object.keys(gn).every(e=>e in globalThis),f=qp&&!Yp?gn:globalThis,ke=qp&&!Yp?Vp:globalThis.document,kh=new WeakMap,Du=e=>{let t=kh.get(e);return t||kh.set(e,t=new Set),t},Gp=new f.ResizeObserver(e=>{for(const t of e)for(const i of Du(t.target))i(t)});function cr(e,t){Du(e).add(t),Gp.observe(e)}function hr(e,t){const i=Du(e);i.delete(t),i.size||Gp.unobserve(e)}function rt(e){const t={};for(const i of e)t[i.name]=i.value;return t}function Ge(e){var t;return(t=od(e))!=null?t:Er(e,"media-controller")}function od(e){var t;const{MEDIA_CONTROLLER:i}=z,a=e.getAttribute(i);if(a)return(t=Qo(e))==null?void 0:t.getElementById(a)}var $p=(e,t,i=".value")=>{const a=e.querySelector(i);a&&(a.textContent=t)},Q0=(e,t)=>{const i=`slot[name="${t}"]`,a=e.shadowRoot.querySelector(i);return a?a.children:[]},Qp=(e,t)=>Q0(e,t)[0],Ei=(e,t)=>!e||!t?!1:e!=null&&e.contains(t)?!0:Ei(e,t.getRootNode().host),Er=(e,t)=>{if(!e)return null;const i=e.closest(t);return i||Er(e.getRootNode().host,t)};function Mu(e=document){var t;const i=e==null?void 0:e.activeElement;return i?(t=Mu(i.shadowRoot))!=null?t:i:null}function Qo(e){var t;const i=(t=e==null?void 0:e.getRootNode)==null?void 0:t.call(e);return i instanceof ShadowRoot||i instanceof Document?i:null}function zp(e,{depth:t=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(e.checkVisibility)return e.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let r=e;for(;r&&t>0;){const n=getComputedStyle(r);if(i&&n.opacity==="0"||a&&n.visibility==="hidden"||n.display==="none")return!1;r=r.parentElement,t--}return!0}function z0(e,t,i,a){const r=a.x-i.x,n=a.y-i.y,s=r*r+n*n;if(s===0)return 0;const o=((e-i.x)*r+(t-i.y)*n)/s;return Math.max(0,Math.min(1,o))}function Ie(e,t){const i=Z0(e,a=>a===t);return i||xu(e,t)}function Z0(e,t){var i,a;let r;for(r of(i=e.querySelectorAll("style:not([media])"))!=null?i:[]){let n;try{n=(a=r.sheet)==null?void 0:a.cssRules}catch(s){continue}for(const s of n!=null?n:[])if(t(s.selectorText))return s}}function xu(e,t){var i,a;const r=(i=e.querySelectorAll("style:not([media])"))!=null?i:[],n=r==null?void 0:r[r.length-1];return n!=null&&n.sheet?(n==null||n.sheet.insertRule(`${t}{}`,n.sheet.cssRules.length),(a=n.sheet.cssRules)==null?void 0:a[n.sheet.cssRules.length-1]):(console.warn("Media Chrome: No style sheet found on style tag of",e),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}})}function oe(e,t,i=NaN){const a=e.getAttribute(t);return a!=null?+a:i}function ve(e,t,i){const a=+i;if(i==null||Number.isNaN(a)){e.hasAttribute(t)&&e.removeAttribute(t);return}oe(e,t,void 0)!==a&&e.setAttribute(t,`${a}`)}function Y(e,t){return e.hasAttribute(t)}function G(e,t,i){if(i==null){e.hasAttribute(t)&&e.removeAttribute(t);return}Y(e,t)!=i&&e.toggleAttribute(t,i)}function le(e,t,i=null){var a;return(a=e.getAttribute(t))!=null?a:i}function de(e,t,i){if(i==null){e.hasAttribute(t)&&e.removeAttribute(t);return}const a=`${i}`;le(e,t,void 0)!==a&&e.setAttribute(t,a)}var Zp=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},_i=(e,t,i)=>(Zp(e,t,"read from private field"),i?i.call(e):t.get(e)),j0=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Bn=(e,t,i,a)=>(Zp(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),qe;function X0(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `}var zo=class extends f.HTMLElement{constructor(){if(super(),j0(this,qe,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=rt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[z.MEDIA_CONTROLLER,h.MEDIA_PAUSED]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===z.MEDIA_CONTROLLER&&(t&&((r=(a=_i(this,qe))==null?void 0:a.unassociateElement)==null||r.call(a,this),Bn(this,qe,null)),i&&this.isConnected&&(Bn(this,qe,(n=this.getRootNode())==null?void 0:n.getElementById(i)),(o=(s=_i(this,qe))==null?void 0:s.associateElement)==null||o.call(s,this)))}connectedCallback(){var e,t,i,a;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),Bn(this,qe,J0(this)),this.getAttribute(z.MEDIA_CONTROLLER)&&((t=(e=_i(this,qe))==null?void 0:e.associateElement)==null||t.call(e,this)),(i=_i(this,qe))==null||i.addEventListener("pointerdown",this),(a=_i(this,qe))==null||a.addEventListener("click",this)}disconnectedCallback(){var e,t,i,a;this.getAttribute(z.MEDIA_CONTROLLER)&&((t=(e=_i(this,qe))==null?void 0:e.unassociateElement)==null||t.call(e,this)),(i=_i(this,qe))==null||i.removeEventListener("pointerdown",this),(a=_i(this,qe))==null||a.removeEventListener("click",this),Bn(this,qe,null)}handleEvent(e){var t;const i=(t=e.composedPath())==null?void 0:t[0];if(["video","media-controller"].includes(i==null?void 0:i.localName)){if(e.type==="pointerdown")this._pointerType=e.pointerType;else if(e.type==="click"){const{clientX:a,clientY:r}=e,{left:n,top:s,width:o,height:l}=this.getBoundingClientRect(),m=a-n,p=r-s;if(m<0||p<0||m>o||p>l||o===0&&l===0)return;const d=this._pointerType||"mouse";if(this._pointerType=void 0,d===Al.TOUCH){this.handleTap(e);return}else if(d===Al.MOUSE||d===Al.PEN){this.handleMouseClick(e);return}}}}get mediaPaused(){return Y(this,h.MEDIA_PAUSED)}set mediaPaused(e){G(this,h.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){const t=this.mediaPaused?I.MEDIA_PLAY_REQUEST:I.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new f.CustomEvent(t,{composed:!0,bubbles:!0}))}};qe=new WeakMap;zo.shadowRootOptions={mode:"open"};zo.getTemplateHTML=X0;function J0(e){var t;const i=e.getAttribute(z.MEDIA_CONTROLLER);return i?(t=e.getRootNode())==null?void 0:t.getElementById(i):Er(e,"media-controller")}f.customElements.get("media-gesture-receiver")||f.customElements.define("media-gesture-receiver",zo);var Sh=zo,Ou=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},tt=(e,t,i)=>(Ou(e,t,"read from private field"),i?i.call(e):t.get(e)),Xe=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},qi=(e,t,i,a)=>(Ou(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),mt=(e,t,i)=>(Ou(e,t,"access private method"),i),go,Ra,bn,ja,ps,ld,jp,Vr,vs,dd,Xp,ud,Jp,yn,Zo,jo,Nu,mr,Tn,N={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive",AUTOHIDE_OVER_CONTROLS:"autohideovercontrols"};function eb(e){return`
    <style>
      
      :host([${h.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
        overflow: hidden;
      }

      :host(:not([${N.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${N.AUDIO}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${N.AUDIO}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${N.AUDIO}])[${N.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${N.AUDIO}])[${N.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${N.AUDIO}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${N.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${N.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${N.AUDIO}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${N.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${N.USER_INACTIVE}]:not([${h.MEDIA_PAUSED}]):not([${h.MEDIA_IS_AIRPLAYING}]):not([${h.MEDIA_IS_CASTING}]):not([${N.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${N.NO_AUTOHIDE}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${N.USER_INACTIVE}]:not([${N.NO_AUTOHIDE}]):not([${h.MEDIA_PAUSED}]):not([${h.MEDIA_IS_CASTING}]):not([${N.AUDIO}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${N.USER_INACTIVE}][${N.AUTOHIDE_OVER_CONTROLS}]:not([${N.NO_AUTOHIDE}]):not([${h.MEDIA_PAUSED}]):not([${h.MEDIA_IS_CASTING}]):not([${N.AUDIO}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${N.AUDIO}])[${h.MEDIA_HAS_PLAYED}]) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${Sh.shadowRootOptions.mode}">
          ${Sh.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `}var tb=Object.values(h),ib="sm:384 md:576 lg:768 xl:960";function ab(e){ev(e.target,e.contentRect.width)}function ev(e,t){var i;if(!e.isConnected)return;const a=rb((i=e.getAttribute(N.BREAKPOINTS))!=null?i:ib),r=nb(a,t);let n=!1;if(Object.keys(a).forEach(s=>{if(r.includes(s)){e.hasAttribute(`breakpoint${s}`)||(e.setAttribute(`breakpoint${s}`,""),n=!0);return}e.hasAttribute(`breakpoint${s}`)&&(e.removeAttribute(`breakpoint${s}`),n=!0)}),n){const s=new CustomEvent(vi.BREAKPOINTS_CHANGE,{detail:r});e.dispatchEvent(s)}e.breakpointsComputed||(e.breakpointsComputed=!0,e.dispatchEvent(new CustomEvent(vi.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}function rb(e){const t=e.split(/\s+/);return Object.fromEntries(t.map(i=>i.split(":")))}function nb(e,t){return Object.keys(e).filter(i=>t>=parseInt(e[i]))}var Xo=class extends f.HTMLElement{constructor(){if(super(),Xe(this,ld),Xe(this,dd),Xe(this,ud),Xe(this,yn),Xe(this,jo),Xe(this,mr),Xe(this,go,0),Xe(this,Ra,null),Xe(this,bn,null),Xe(this,ja,void 0),this.breakpointsComputed=!1,Xe(this,ps,new MutationObserver(mt(this,ld,jp).bind(this))),Xe(this,Vr,!1),Xe(this,vs,t=>{tt(this,Vr)||(setTimeout(()=>{ab(t),qi(this,Vr,!1)},0),qi(this,Vr,!0))}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const t=rt(this.attributes),i=this.constructor.getTemplateHTML(t);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(i):this.shadowRoot.innerHTML=i}const e=this.querySelector(":scope > slot[slot=media]");e&&e.addEventListener("slotchange",()=>{if(!e.assignedElements({flatten:!0}).length){tt(this,Ra)&&this.mediaUnsetCallback(tt(this,Ra));return}this.handleMediaUpdated(this.media)})}static get observedAttributes(){return[N.AUTOHIDE,N.GESTURES_DISABLED].concat(tb).filter(e=>![h.MEDIA_RENDITION_LIST,h.MEDIA_AUDIO_TRACK_LIST,h.MEDIA_CHAPTERS_CUES,h.MEDIA_WIDTH,h.MEDIA_HEIGHT,h.MEDIA_ERROR,h.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,t,i){e.toLowerCase()==N.AUTOHIDE&&(this.autohide=i)}get media(){let e=this.querySelector(":scope > [slot=media]");return(e==null?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}handleMediaUpdated(e){var t=this;return F(function*(){e&&(qi(t,Ra,e),e.localName.includes("-")&&(yield f.customElements.whenDefined(e.localName)),t.mediaSetCallback(e))})()}connectedCallback(){var e;tt(this,ps).observe(this,{childList:!0,subtree:!0}),cr(this,tt(this,vs));const t=this.getAttribute(N.AUDIO)!=null?L("audio player"):L("video player");this.setAttribute("role","region"),this.setAttribute("aria-label",t),this.handleMediaUpdated(this.media),this.setAttribute(N.USER_INACTIVE,""),ev(this,this.getBoundingClientRect().width),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),(e=f.window)==null||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;tt(this,ps).disconnect(),hr(this,tt(this,vs)),this.media&&this.mediaUnsetCallback(this.media),(e=f.window)==null||e.removeEventListener("mouseup",this)}mediaSetCallback(e){}mediaUnsetCallback(e){qi(this,Ra,null)}handleEvent(e){switch(e.type){case"pointerdown":qi(this,go,e.timeStamp);break;case"pointermove":mt(this,dd,Xp).call(this,e);break;case"pointerup":mt(this,ud,Jp).call(this,e);break;case"mouseleave":mt(this,yn,Zo).call(this);break;case"mouseup":this.removeAttribute(N.KEYBOARD_CONTROL);break;case"keyup":mt(this,mr,Tn).call(this),this.setAttribute(N.KEYBOARD_CONTROL,"");break}}set autohide(e){const t=Number(e);qi(this,ja,isNaN(t)?0:t)}get autohide(){return(tt(this,ja)===void 0?2:tt(this,ja)).toString()}get breakpoints(){return le(this,N.BREAKPOINTS)}set breakpoints(e){de(this,N.BREAKPOINTS,e)}get audio(){return Y(this,N.AUDIO)}set audio(e){G(this,N.AUDIO,e)}get gesturesDisabled(){return Y(this,N.GESTURES_DISABLED)}set gesturesDisabled(e){G(this,N.GESTURES_DISABLED,e)}get keyboardControl(){return Y(this,N.KEYBOARD_CONTROL)}set keyboardControl(e){G(this,N.KEYBOARD_CONTROL,e)}get noAutohide(){return Y(this,N.NO_AUTOHIDE)}set noAutohide(e){G(this,N.NO_AUTOHIDE,e)}get autohideOverControls(){return Y(this,N.AUTOHIDE_OVER_CONTROLS)}set autohideOverControls(e){G(this,N.AUTOHIDE_OVER_CONTROLS,e)}get userInteractive(){return Y(this,N.USER_INACTIVE)}set userInteractive(e){G(this,N.USER_INACTIVE,e)}};go=new WeakMap;Ra=new WeakMap;bn=new WeakMap;ja=new WeakMap;ps=new WeakMap;ld=new WeakSet;jp=function(e){const t=this.media;for(const i of e){if(i.type!=="childList")continue;const a=i.removedNodes;for(const r of a){if(r.slot!="media"||i.target!=this)continue;let n=i.previousSibling&&i.previousSibling.previousElementSibling;if(!n||!t)this.mediaUnsetCallback(r);else{let s=n.slot!=="media";for(;(n=n.previousSibling)!==null;)n.slot=="media"&&(s=!1);s&&this.mediaUnsetCallback(r)}}if(t)for(const r of i.addedNodes)r===t&&this.handleMediaUpdated(t)}};Vr=new WeakMap;vs=new WeakMap;dd=new WeakSet;Xp=function(e){if(e.pointerType!=="mouse"&&e.timeStamp-tt(this,go)<250)return;mt(this,jo,Nu).call(this),clearTimeout(tt(this,bn));const t=this.hasAttribute(N.AUTOHIDE_OVER_CONTROLS);([this,this.media].includes(e.target)||t)&&mt(this,mr,Tn).call(this)};ud=new WeakSet;Jp=function(e){if(e.pointerType==="touch"){const t=!this.hasAttribute(N.USER_INACTIVE);[this,this.media].includes(e.target)&&t?mt(this,yn,Zo).call(this):mt(this,mr,Tn).call(this)}else e.composedPath().some(t=>["media-play-button","media-fullscreen-button"].includes(t==null?void 0:t.localName))&&mt(this,mr,Tn).call(this)};yn=new WeakSet;Zo=function(){if(tt(this,ja)<0||this.hasAttribute(N.USER_INACTIVE))return;this.setAttribute(N.USER_INACTIVE,"");const e=new f.CustomEvent(vi.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)};jo=new WeakSet;Nu=function(){if(!this.hasAttribute(N.USER_INACTIVE))return;this.removeAttribute(N.USER_INACTIVE);const e=new f.CustomEvent(vi.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)};mr=new WeakSet;Tn=function(){mt(this,jo,Nu).call(this),clearTimeout(tt(this,bn));const e=parseInt(this.autohide);e<0||qi(this,bn,setTimeout(()=>{mt(this,yn,Zo).call(this)},e*1e3))};Xo.shadowRootOptions={mode:"open"};Xo.getTemplateHTML=eb;f.customElements.get("media-container")||f.customElements.define("media-container",Xo);var tv=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},De=(e,t,i)=>(tv(e,t,"read from private field"),i?i.call(e):t.get(e)),Sr=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Wn=(e,t,i,a)=>(tv(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),Ca,La,bo,ta,si,Ti,Pu=class{constructor(e,t,{defaultValue:i}={defaultValue:void 0}){Sr(this,si),Sr(this,Ca,void 0),Sr(this,La,void 0),Sr(this,bo,void 0),Sr(this,ta,new Set),Wn(this,Ca,e),Wn(this,La,t),Wn(this,bo,new Set(i))}[Symbol.iterator](){return De(this,si,Ti).values()}get length(){return De(this,si,Ti).size}get value(){var e;return(e=[...De(this,si,Ti)].join(" "))!=null?e:""}set value(e){var t;e!==this.value&&(Wn(this,ta,new Set),this.add(...(t=e==null?void 0:e.split(" "))!=null?t:[]))}toString(){return this.value}item(e){return[...De(this,si,Ti)][e]}values(){return De(this,si,Ti).values()}forEach(e,t){De(this,si,Ti).forEach(e,t)}add(...e){var t,i;e.forEach(a=>De(this,ta).add(a)),!(this.value===""&&!((t=De(this,Ca))!=null&&t.hasAttribute(`${De(this,La)}`)))&&((i=De(this,Ca))==null||i.setAttribute(`${De(this,La)}`,`${this.value}`))}remove(...e){var t;e.forEach(i=>De(this,ta).delete(i)),(t=De(this,Ca))==null||t.setAttribute(`${De(this,La)}`,`${this.value}`)}contains(e){return De(this,si,Ti).has(e)}toggle(e,t){return typeof t!="undefined"?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){return this.remove(e),this.add(t),e===t}};Ca=new WeakMap;La=new WeakMap;bo=new WeakMap;ta=new WeakMap;si=new WeakSet;Ti=function(){return De(this,ta).size?De(this,ta):De(this,bo)};ti();var sb=(e="")=>e.split(/\s+/),iv=(e="")=>{const[t,i,a]=e.split(":"),r=a?decodeURIComponent(a):void 0;return{kind:t==="cc"?Jt.CAPTIONS:Jt.SUBTITLES,language:i,label:r}},Jo=(e="",t={})=>sb(e).map(i=>{const a=iv(i);return D(D({},t),a)}),av=e=>e?Array.isArray(e)?e.map(t=>typeof t=="string"?iv(t):t):typeof e=="string"?Jo(e):[e]:[],cd=({kind:e,label:t,language:i}={kind:"subtitles"})=>t?`${e==="captions"?"cc":"sb"}:${i}:${encodeURIComponent(t)}`:i,An=(e=[])=>Array.prototype.map.call(e,cd).join(" "),ob=(e,t)=>i=>i[e]===t,rv=e=>{const t=Object.entries(e).map(([i,a])=>ob(i,a));return i=>t.every(a=>a(i))},un=(e,t=[],i=[])=>{const a=av(i).map(rv),r=n=>a.some(s=>s(n));Array.from(t).filter(r).forEach(n=>{n.mode=e})},el=(e,t=()=>!0)=>{if(!(e!=null&&e.textTracks))return[];const i=typeof t=="function"?t:rv(t);return Array.from(e.textTracks).filter(i)},nv=e=>{var t;return!!((t=e.mediaSubtitlesShowing)!=null&&t.length)||e.hasAttribute(h.MEDIA_SUBTITLES_SHOWING)},lb=e=>{var t;const{media:i,fullscreenElement:a}=e;try{const r=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(r){const n=(t=a[r])==null?void 0:t.call(a);if(n instanceof Promise)return n.catch(()=>{})}else i!=null&&i.webkitEnterFullscreen?i.webkitEnterFullscreen():i!=null&&i.requestFullscreen&&i.requestFullscreen()}catch(r){console.error(r)}},wh="exitFullscreen"in ke?"exitFullscreen":"webkitExitFullscreen"in ke?"webkitExitFullscreen":"webkitCancelFullScreen"in ke?"webkitCancelFullScreen":void 0,db=e=>{var t;const{documentElement:i}=e;if(wh){const a=(t=i==null?void 0:i[wh])==null?void 0:t.call(i);if(a instanceof Promise)return a.catch(()=>{})}},qr="fullscreenElement"in ke?"fullscreenElement":"webkitFullscreenElement"in ke?"webkitFullscreenElement":void 0,ub=e=>{const{documentElement:t,media:i}=e,a=t==null?void 0:t[qr];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===x0.FULLSCREEN?i:a},cb=e=>{var t;const{media:i,documentElement:a,fullscreenElement:r=i}=e;if(!i||!a)return!1;const n=ub(e);if(!n)return!1;if(n===r||n===i)return!0;if(n.localName.includes("-")){let s=n.shadowRoot;if(!(qr in s))return Ei(n,r);for(;s!=null&&s[qr];){if(s[qr]===r)return!0;s=(t=s[qr])==null?void 0:t.shadowRoot}}return!1},hb="fullscreenEnabled"in ke?"fullscreenEnabled":"webkitFullscreenEnabled"in ke?"webkitFullscreenEnabled":void 0,mb=e=>{const{documentElement:t,media:i}=e;return!!(t!=null&&t[hb])||i&&"webkitSupportsFullscreen"in i},Fn,Uu=()=>{var e,t;return Fn||(Fn=(t=(e=ke)==null?void 0:e.createElement)==null?void 0:t.call(e,"video"),Fn)},pb=(function(){var e=F(function*(t=Uu()){if(!t)return!1;const i=t.volume;t.volume=i/2+.1;const a=new AbortController,r=yield Promise.race([vb(t,a.signal),fb(t,i)]);return a.abort(),r});return function(){return e.apply(this,arguments)}})(),vb=(e,t)=>new Promise(i=>{e.addEventListener("volumechange",()=>i(!0),{signal:t})}),fb=(function(){var e=F(function*(t,i){for(let a=0;a<10;a++){if(t.volume===i)return!1;yield Wp(10)}return t.volume!==i});return function(i,a){return e.apply(this,arguments)}})(),Eb=/.*Version\/.*Safari\/.*/.test(f.navigator.userAgent),sv=(e=Uu())=>f.matchMedia("(display-mode: standalone)").matches&&Eb?!1:typeof(e==null?void 0:e.requestPictureInPicture)=="function",ov=(e=Uu())=>mb({documentElement:ke,media:e}),_b=ov(),gb=sv(),bb=!!f.WebKitPlaybackTargetAvailabilityEvent,yb=!!f.chrome,yo=e=>el(e.media,t=>[Jt.SUBTITLES,Jt.CAPTIONS].includes(t.kind)).sort((t,i)=>t.kind>=i.kind?1:-1),lv=e=>el(e.media,t=>t.mode===ir.SHOWING&&[Jt.SUBTITLES,Jt.CAPTIONS].includes(t.kind)),dv=(e,t)=>{const i=yo(e),a=lv(e),r=!!a.length;if(i.length){if(t===!1||r&&t!==!0)un(ir.DISABLED,i,a);else if(t===!0||!r&&t!==!1){let n=i[0];const{options:s}=e;if(!(s!=null&&s.noSubtitlesLangPref)){const p=globalThis.localStorage.getItem("media-chrome-pref-subtitles-lang"),d=p?[p,...globalThis.navigator.languages]:globalThis.navigator.languages,u=i.filter(c=>d.some(v=>c.language.toLowerCase().startsWith(v.split("-")[0]))).sort((c,v)=>d.findIndex(b=>c.language.toLowerCase().startsWith(b.split("-")[0]))-d.findIndex(b=>v.language.toLowerCase().startsWith(b.split("-")[0])));u[0]&&(n=u[0])}const{language:o,label:l,kind:m}=n;un(ir.DISABLED,i,a),un(ir.SHOWING,i,[{language:o,label:l,kind:m}])}}},Hu=(e,t)=>e===t?!0:e==null||t==null||typeof e!=typeof t?!1:typeof e=="number"&&Number.isNaN(e)&&Number.isNaN(t)?!0:typeof e!="object"?!1:Array.isArray(e)?Tb(e,t):Object.entries(e).every(([i,a])=>i in t&&Hu(a,t[i])),Tb=(e,t)=>{const i=Array.isArray(e),a=Array.isArray(t);return i!==a?!1:i||a?e.length!==t.length?!1:e.every((r,n)=>Hu(r,t[n])):!0};ti();var Ab=Object.values(li),To,kb=pb().then(e=>(To=e,To)),Sb=(function(){var e=F(function*(...t){yield Promise.all(t.filter(i=>i).map((function(){var i=F(function*(a){if(!("localName"in a&&a instanceof f.HTMLElement))return;const r=a.localName;if(!r.includes("-"))return;const n=f.customElements.get(r);n&&a instanceof n||(yield f.customElements.whenDefined(r),f.customElements.upgrade(a))});return function(a){return i.apply(this,arguments)}})()))});return function(){return e.apply(this,arguments)}})(),wb=new f.DOMParser,Ib=e=>e&&(wb.parseFromString(e,"text/html").body.textContent||e),Yr={mediaError:{get(e,t){const{media:i}=e;if((t==null?void 0:t.type)!=="playing")return i==null?void 0:i.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(e,t){var i;const{media:a}=e;if((t==null?void 0:t.type)!=="playing")return(i=a==null?void 0:a.error)==null?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(e,t){var i,a;const{media:r}=e;if((t==null?void 0:t.type)!=="playing")return(a=(i=r==null?void 0:r.error)==null?void 0:i.message)!=null?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(e){var t;const{media:i}=e;return(t=i==null?void 0:i.videoWidth)!=null?t:0},mediaEvents:["resize"]},mediaHeight:{get(e){var t;const{media:i}=e;return(t=i==null?void 0:i.videoHeight)!=null?t:0},mediaEvents:["resize"]},mediaPaused:{get(e){var t;const{media:i}=e;return(t=i==null?void 0:i.paused)!=null?t:!0},set(e,t){var i;const{media:a}=t;a&&(e?a.pause():(i=a.play())==null||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(e,t){const{media:i}=e;return i?t?t.type==="playing":!i.paused:!1},mediaEvents:["playing","emptied"]},mediaEnded:{get(e){var t;const{media:i}=e;return(t=i==null?void 0:i.ended)!=null?t:!1},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(e){var t;const{media:i}=e;return(t=i==null?void 0:i.playbackRate)!=null?t:1},set(e,t){const{media:i}=t;i&&Number.isFinite(+e)&&(i.playbackRate=+e)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(e){var t;const{media:i}=e;return(t=i==null?void 0:i.muted)!=null?t:!1},set(e,t){const{media:i,options:{noMutedPref:a}={}}=t;if(i){i.muted=e;try{const r=f.localStorage.getItem("media-chrome-pref-muted")!==null,n=i.hasAttribute("muted");if(a){r&&f.localStorage.removeItem("media-chrome-pref-muted");return}if(n&&!r)return;f.localStorage.setItem("media-chrome-pref-muted",e?"true":"false")}catch(r){console.debug("Error setting muted pref",r)}}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{const{options:{noMutedPref:i}}=t,{media:a}=t;if(!(!a||a.muted||i))try{const r=f.localStorage.getItem("media-chrome-pref-muted")==="true";Yr.mediaMuted.set(r,t),e(r)}catch(r){console.debug("Error getting muted pref",r)}}]},mediaLoop:{get(e){const{media:t}=e;return t==null?void 0:t.loop},set(e,t){const{media:i}=t;i&&(i.loop=e)},mediaEvents:["medialooprequest"]},mediaVolume:{get(e){var t;const{media:i}=e;return(t=i==null?void 0:i.volume)!=null?t:1},set(e,t){const{media:i,options:{noVolumePref:a}={}}=t;if(i){try{e==null?f.localStorage.removeItem("media-chrome-pref-volume"):!i.hasAttribute("muted")&&!a&&f.localStorage.setItem("media-chrome-pref-volume",e.toString())}catch(r){console.debug("Error setting volume pref",r)}Number.isFinite(+e)&&(i.volume=+e)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{const{options:{noVolumePref:i}}=t;if(!i)try{const{media:a}=t;if(!a)return;const r=f.localStorage.getItem("media-chrome-pref-volume");if(r==null)return;Yr.mediaVolume.set(+r,t),e(+r)}catch(a){console.debug("Error getting volume pref",a)}}]},mediaVolumeLevel:{get(e){const{media:t}=e;return typeof(t==null?void 0:t.volume)=="undefined"?"high":t.muted||t.volume===0?"off":t.volume<.5?"low":t.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(e){var t;const{media:i}=e;return(t=i==null?void 0:i.currentTime)!=null?t:0},set(e,t){const{media:i}=t;!i||!Lu(e)||(i.currentTime=e)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(e){const{media:t,options:{defaultDuration:i}={}}=e;return i&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?i:Number.isFinite(t==null?void 0:t.duration)?t.duration:NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(e){const{media:t}=e;return(t==null?void 0:t.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(e){var t;const{media:i}=e;if(!((t=i==null?void 0:i.seekable)!=null&&t.length))return;const a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(!(!a&&!r))return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(e){var t;const{media:i}=e,a=(t=i==null?void 0:i.buffered)!=null?t:[];return Array.from(a).map((r,n)=>[Number(a.start(n).toFixed(3)),Number(a.end(n).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(e){const{media:t,options:{defaultStreamType:i}={}}=e,a=[li.LIVE,li.ON_DEMAND].includes(i)?i:void 0;if(!t)return a;const{streamType:r}=t;if(Ab.includes(r))return r===li.UNKNOWN?a:r;const n=t.duration;return n===1/0?li.LIVE:Number.isFinite(n)?li.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(e){const{media:t}=e;if(!t)return NaN;const{targetLiveWindow:i}=t,a=Yr.mediaStreamType.get(e);return(i==null||Number.isNaN(i))&&a===li.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(e){const{media:t,options:{liveEdgeOffset:i=10}={}}=e;if(!t)return!1;if(typeof t.liveEdgeStart=="number")return Number.isNaN(t.liveEdgeStart)?!1:t.currentTime>=t.liveEdgeStart;if(Yr.mediaStreamType.get(e)!==li.LIVE)return!1;const a=t.seekable;if(!a)return!0;if(!a.length)return!1;const r=a.end(a.length-1)-i;return t.currentTime>=r},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get(e){return yo(e).map(({kind:t,label:i,language:a})=>({kind:t,label:i,language:a}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get(e){return lv(e).map(({kind:t,label:i,language:a})=>({kind:t,label:i,language:a}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i,a;const{media:r,options:n}=t;if(!r)return;const s=o=>{var l;n.defaultSubtitles&&(o&&![Jt.CAPTIONS,Jt.SUBTITLES].includes((l=o==null?void 0:o.track)==null?void 0:l.kind)||dv(t,!0))};return r.addEventListener("loadstart",s),(i=r.textTracks)==null||i.addEventListener("addtrack",s),(a=r.textTracks)==null||a.addEventListener("removetrack",s),()=>{var o,l;r.removeEventListener("loadstart",s),(o=r.textTracks)==null||o.removeEventListener("addtrack",s),(l=r.textTracks)==null||l.removeEventListener("removetrack",s)}}]},mediaChaptersCues:{get(e){var t;const{media:i}=e;if(!i)return[];const[a]=el(i,{kind:Jt.CHAPTERS});return Array.from((t=a==null?void 0:a.cues)!=null?t:[]).map(({text:r,startTime:n,endTime:s})=>({text:Ib(r),startTime:n,endTime:s}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i;const{media:a}=t;if(!a)return;const r=a.querySelector('track[kind="chapters"][default][src]'),n=(i=a.shadowRoot)==null?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return r==null||r.addEventListener("load",e),n==null||n.addEventListener("load",e),()=>{r==null||r.removeEventListener("load",e),n==null||n.removeEventListener("load",e)}}]},mediaIsPip:{get(e){var t,i;const{media:a,documentElement:r}=e;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return(t=a.localName)!=null&&t.includes("-")?Ei(a,r.pictureInPictureElement):!1;if(r.pictureInPictureElement.localName.includes("-")){let n=r.pictureInPictureElement.shadowRoot;for(;n!=null&&n.pictureInPictureElement;){if(n.pictureInPictureElement===a)return!0;n=(i=n.pictureInPictureElement)==null?void 0:i.shadowRoot}}return!1},set(e,t){const{media:i}=t;if(i)if(e){if(!ke.pictureInPictureEnabled){console.warn("MediaChrome: Picture-in-picture is not enabled");return}if(!i.requestPictureInPicture){console.warn("MediaChrome: The current media does not support picture-in-picture");return}const a=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(r=>{if(r.code===11){if(!i.src){console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");return}if(i.readyState===0&&i.preload==="none"){const n=()=>{i.removeEventListener("loadedmetadata",s),i.preload="none"},s=()=>{i.requestPictureInPicture().catch(a),n()};i.addEventListener("loadedmetadata",s),i.preload="metadata",setTimeout(()=>{i.readyState===0&&a(),n()},1e3)}else throw r}else throw r})}else ke.pictureInPictureElement&&ke.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(e){var t;const{media:i}=e;return[...(t=i==null?void 0:i.videoRenditions)!=null?t:[]].map(a=>D({},a))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(e){var t,i,a;const{media:r}=e;return(a=(i=r==null?void 0:r.videoRenditions)==null?void 0:i[(t=r.videoRenditions)==null?void 0:t.selectedIndex])==null?void 0:a.id},set(e,t){const{media:i}=t;if(!(i!=null&&i.videoRenditions)){console.warn("MediaController: Rendition selection not supported by this media.");return}const a=e,r=Array.prototype.findIndex.call(i.videoRenditions,n=>n.id==a);i.videoRenditions.selectedIndex!=r&&(i.videoRenditions.selectedIndex=r)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(e){var t;const{media:i}=e;return[...(t=i==null?void 0:i.audioTracks)!=null?t:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(e){var t,i;const{media:a}=e;return(i=[...(t=a==null?void 0:a.audioTracks)!=null?t:[]].find(r=>r.enabled))==null?void 0:i.id},set(e,t){const{media:i}=t;if(!(i!=null&&i.audioTracks)){console.warn("MediaChrome: Audio track selection not supported by this media.");return}const a=e;for(const r of i.audioTracks)r.enabled=a==r.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get(e){return cb(e)},set(e,t,i){var a;e?(lb(t),i.detail&&((a=t.media)==null||a.focus())):db(t)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(e){var t;const{media:i}=e;return!(i!=null&&i.remote)||((t=i.remote)==null?void 0:t.state)==="disconnected"?!1:!!i.remote.state},set(e,t){var i,a;const{media:r}=t;if(r&&!(e&&((i=r.remote)==null?void 0:i.state)!=="disconnected")&&!(!e&&((a=r.remote)==null?void 0:a.state)!=="connected")){if(typeof r.remote.prompt!="function"){console.warn("MediaChrome: Casting is not supported in this environment");return}r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get(){return!1},set(e,t){const{media:i}=t;if(i){if(!(i.webkitShowPlaybackTargetPicker&&f.WebKitPlaybackTargetAvailabilityEvent)){console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");return}i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(e){const{media:t}=e;if(!_b||!ov(t))return je.UNSUPPORTED}},mediaPipUnavailable:{get(e){const{media:t}=e;if(!gb||!sv(t))return je.UNSUPPORTED;if(t!=null&&t.disablePictureInPicture)return je.UNAVAILABLE}},mediaVolumeUnavailable:{get(e){const{media:t}=e;if(To===!1||(t==null?void 0:t.volume)==null)return je.UNSUPPORTED},stateOwnersUpdateHandlers:[e=>{To==null&&kb.then(t=>e(t?void 0:je.UNSUPPORTED))}]},mediaCastUnavailable:{get(e,{availability:t="not-available"}={}){var i;const{media:a}=e;if(!yb||!((i=a==null?void 0:a.remote)!=null&&i.state))return je.UNSUPPORTED;if(!(t==null||t==="available"))return je.UNAVAILABLE},stateOwnersUpdateHandlers:[(e,t)=>{var i;const{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||(i=a==null?void 0:a.remote)==null||i.watchAvailability(r=>{e({availability:r?"available":"not-available"})}).catch(r=>{r.name==="NotSupportedError"?e({availability:null}):e({availability:"not-available"})}),()=>{var r;(r=a==null?void 0:a.remote)==null||r.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get(e,t){if(!bb)return je.UNSUPPORTED;if((t==null?void 0:t.availability)==="not-available")return je.UNAVAILABLE},mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(e,t)=>{var i;const{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||(i=a==null?void 0:a.remote)==null||i.watchAvailability(r=>{e({availability:r?"available":"not-available"})}).catch(r=>{r.name==="NotSupportedError"?e({availability:null}):e({availability:"not-available"})}),()=>{var r;(r=a==null?void 0:a.remote)==null||r.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(e){var t;const{media:i}=e;if(!(i!=null&&i.videoRenditions))return je.UNSUPPORTED;if(!((t=i.videoRenditions)!=null&&t.length))return je.UNAVAILABLE},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(e){var t,i;const{media:a}=e;if(!(a!=null&&a.audioTracks))return je.UNSUPPORTED;if(((i=(t=a.audioTracks)==null?void 0:t.length)!=null?i:0)<=1)return je.UNAVAILABLE},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaLang:{get(e){const{options:{mediaLang:t}={}}=e;return t!=null?t:"en"}}},Rb={[I.MEDIA_PREVIEW_REQUEST](e,t,{detail:i}){var a,r,n;const{media:s}=t,o=i!=null?i:void 0;let l,m;if(s&&o!=null){const[u]=el(s,{kind:Jt.METADATA,label:"thumbnails"}),c=Array.prototype.find.call((a=u==null?void 0:u.cues)!=null?a:[],(v,b,E)=>b===0?v.endTime>o:b===E.length-1?v.startTime<=o:v.startTime<=o&&v.endTime>o);if(c){const v=/'^(?:[a-z]+:)?\/\//i.test(c.text)||(r=s==null?void 0:s.querySelector('track[label="thumbnails"]'))==null?void 0:r.src,b=new URL(c.text,v);m=new URLSearchParams(b.hash).get("#xywh").split(",").map(E=>+E),l=b.href}}const p=e.mediaDuration.get(t);let d=(n=e.mediaChaptersCues.get(t).find((u,c,v)=>c===v.length-1&&p===u.endTime?u.startTime<=o&&u.endTime>=o:u.startTime<=o&&u.endTime>o))==null?void 0:n.text;return i!=null&&d==null&&(d=""),{mediaPreviewTime:o,mediaPreviewImage:l,mediaPreviewCoords:m,mediaPreviewChapter:d}},[I.MEDIA_PAUSE_REQUEST](e,t){e.mediaPaused.set(!0,t)},[I.MEDIA_PLAY_REQUEST](e,t){var i,a,r,n;const s="mediaPaused",l=e.mediaStreamType.get(t)===li.LIVE,m=!((i=t.options)!=null&&i.noAutoSeekToLive),p=e.mediaTargetLiveWindow.get(t)>0;if(l&&m&&!p){const d=(a=e.mediaSeekable.get(t))==null?void 0:a[1];if(d){const u=d-((n=(r=t.options)==null?void 0:r.seekToLiveOffset)!=null?n:0);e.mediaCurrentTime.set(u,t)}}e[s].set(!1,t)},[I.MEDIA_PLAYBACK_RATE_REQUEST](e,t,{detail:i}){const a="mediaPlaybackRate",r=i;e[a].set(r,t)},[I.MEDIA_MUTE_REQUEST](e,t){e.mediaMuted.set(!0,t)},[I.MEDIA_UNMUTE_REQUEST](e,t){const i="mediaMuted";e.mediaVolume.get(t)||e.mediaVolume.set(.25,t),e[i].set(!1,t)},[I.MEDIA_LOOP_REQUEST](e,t,{detail:i}){const a="mediaLoop",r=!!i;return e[a].set(r,t),{mediaLoop:r}},[I.MEDIA_VOLUME_REQUEST](e,t,{detail:i}){const a="mediaVolume",r=i;r&&e.mediaMuted.get(t)&&e.mediaMuted.set(!1,t),e[a].set(r,t)},[I.MEDIA_SEEK_REQUEST](e,t,{detail:i}){const a="mediaCurrentTime",r=i;e[a].set(r,t)},[I.MEDIA_SEEK_TO_LIVE_REQUEST](e,t){var i,a,r;const n="mediaCurrentTime",s=(i=e.mediaSeekable.get(t))==null?void 0:i[1];if(Number.isNaN(Number(s)))return;const o=s-((r=(a=t.options)==null?void 0:a.seekToLiveOffset)!=null?r:0);e[n].set(o,t)},[I.MEDIA_SHOW_SUBTITLES_REQUEST](e,t,{detail:i}){var a;const{options:r}=t,n=yo(t),s=av(i),o=(a=s[0])==null?void 0:a.language;o&&!r.noSubtitlesLangPref&&f.localStorage.setItem("media-chrome-pref-subtitles-lang",o),un(ir.SHOWING,n,s)},[I.MEDIA_DISABLE_SUBTITLES_REQUEST](e,t,{detail:i}){const a=yo(t),r=i!=null?i:[];un(ir.DISABLED,a,r)},[I.MEDIA_TOGGLE_SUBTITLES_REQUEST](e,t,{detail:i}){dv(t,i)},[I.MEDIA_RENDITION_REQUEST](e,t,{detail:i}){const a="mediaRenditionSelected",r=i;e[a].set(r,t)},[I.MEDIA_AUDIO_TRACK_REQUEST](e,t,{detail:i}){const a="mediaAudioTrackEnabled",r=i;e[a].set(r,t)},[I.MEDIA_ENTER_PIP_REQUEST](e,t){const i="mediaIsPip";e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e[i].set(!0,t)},[I.MEDIA_EXIT_PIP_REQUEST](e,t){e.mediaIsPip.set(!1,t)},[I.MEDIA_ENTER_FULLSCREEN_REQUEST](e,t,i){const a="mediaIsFullscreen";e.mediaIsPip.get(t)&&e.mediaIsPip.set(!1,t),e[a].set(!0,t,i)},[I.MEDIA_EXIT_FULLSCREEN_REQUEST](e,t){e.mediaIsFullscreen.set(!1,t)},[I.MEDIA_ENTER_CAST_REQUEST](e,t){const i="mediaIsCasting";e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e[i].set(!0,t)},[I.MEDIA_EXIT_CAST_REQUEST](e,t){e.mediaIsCasting.set(!1,t)},[I.MEDIA_AIRPLAY_REQUEST](e,t){e.mediaIsAirplaying.set(!0,t)}};ti();var Cb=({media:e,fullscreenElement:t,documentElement:i,stateMediator:a=Yr,requestMap:r=Rb,options:n={},monitorStateOwnersOnlyWithSubscriptions:s=!0})=>{const o=[],l={options:D({},n)};let m=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0});const p=b=>{b!=null&&(Hu(b,m)||(m=Object.freeze(D(D({},m),b)),o.forEach(E=>E(m))))},d=()=>{p(Object.entries(a).reduce((b,[E,{get:g}])=>(b[E]=g(l),b),{}))},u={};let c;const v=(function(){var b=F(function*(E,g){var T,y,w,R,M,B,Z,j,K,ce,We,Qe,ze,Ee,Ve,vt;const Lt=!!c;if(c=D(D(D({},l),c!=null?c:{}),E),Lt)return;yield Sb(...Object.values(E));const Oe=o.length>0&&g===0&&s,Re=l.media!==c.media,ai=((T=l.media)==null?void 0:T.textTracks)!==((y=c.media)==null?void 0:y.textTracks),Fe=((w=l.media)==null?void 0:w.videoRenditions)!==((R=c.media)==null?void 0:R.videoRenditions),nt=((M=l.media)==null?void 0:M.audioTracks)!==((B=c.media)==null?void 0:B.audioTracks),Ea=((Z=l.media)==null?void 0:Z.remote)!==((j=c.media)==null?void 0:j.remote),Hc=l.documentElement!==c.documentElement,Bc=!!l.media&&(Re||Oe),Wc=!!((K=l.media)!=null&&K.textTracks)&&(ai||Oe),Fc=!!((ce=l.media)!=null&&ce.videoRenditions)&&(Fe||Oe),Kc=!!((We=l.media)!=null&&We.audioTracks)&&(nt||Oe),Vc=!!((Qe=l.media)!=null&&Qe.remote)&&(Ea||Oe),qc=!!l.documentElement&&(Hc||Oe),cl=Bc||Wc||Fc||Kc||Vc||qc,_a=o.length===0&&g===1&&s,Yc=!!c.media&&(Re||_a),Gc=!!((ze=c.media)!=null&&ze.textTracks)&&(ai||_a),$c=!!((Ee=c.media)!=null&&Ee.videoRenditions)&&(Fe||_a),Qc=!!((Ve=c.media)!=null&&Ve.audioTracks)&&(nt||_a),zc=!!((vt=c.media)!=null&&vt.remote)&&(Ea||_a),Zc=!!c.documentElement&&(Hc||_a),jc=Yc||Gc||$c||Qc||zc||Zc;if(!(cl||jc)){Object.entries(c).forEach(([te,Tr])=>{l[te]=Tr}),d(),c=void 0;return}Object.entries(a).forEach(([te,{get:Tr,mediaEvents:zf=[],textTracksEvents:Zf=[],videoRenditionsEvents:jf=[],audioTracksEvents:Xf=[],remoteEvents:Jf=[],rootEvents:eE=[],stateOwnersUpdateHandlers:tE=[]}])=>{u[te]||(u[te]={});const Ze=ne=>{const Ne=Tr(l,ne);p({[te]:Ne})};let Ce;Ce=u[te].mediaEvents,zf.forEach(ne=>{Ce&&Bc&&(l.media.removeEventListener(ne,Ce),u[te].mediaEvents=void 0),Yc&&(c.media.addEventListener(ne,Ze),u[te].mediaEvents=Ze)}),Ce=u[te].textTracksEvents,Zf.forEach(ne=>{var Ne,ft;Ce&&Wc&&((Ne=l.media.textTracks)==null||Ne.removeEventListener(ne,Ce),u[te].textTracksEvents=void 0),Gc&&((ft=c.media.textTracks)==null||ft.addEventListener(ne,Ze),u[te].textTracksEvents=Ze)}),Ce=u[te].videoRenditionsEvents,jf.forEach(ne=>{var Ne,ft;Ce&&Fc&&((Ne=l.media.videoRenditions)==null||Ne.removeEventListener(ne,Ce),u[te].videoRenditionsEvents=void 0),$c&&((ft=c.media.videoRenditions)==null||ft.addEventListener(ne,Ze),u[te].videoRenditionsEvents=Ze)}),Ce=u[te].audioTracksEvents,Xf.forEach(ne=>{var Ne,ft;Ce&&Kc&&((Ne=l.media.audioTracks)==null||Ne.removeEventListener(ne,Ce),u[te].audioTracksEvents=void 0),Qc&&((ft=c.media.audioTracks)==null||ft.addEventListener(ne,Ze),u[te].audioTracksEvents=Ze)}),Ce=u[te].remoteEvents,Jf.forEach(ne=>{var Ne,ft;Ce&&Vc&&((Ne=l.media.remote)==null||Ne.removeEventListener(ne,Ce),u[te].remoteEvents=void 0),zc&&((ft=c.media.remote)==null||ft.addEventListener(ne,Ze),u[te].remoteEvents=Ze)}),Ce=u[te].rootEvents,eE.forEach(ne=>{Ce&&qc&&(l.documentElement.removeEventListener(ne,Ce),u[te].rootEvents=void 0),Zc&&(c.documentElement.addEventListener(ne,Ze),u[te].rootEvents=Ze)});const Nn=u[te].stateOwnersUpdateHandlers;if(Nn&&cl&&(Array.isArray(Nn)?Nn:[Nn]).forEach(ne=>{typeof ne=="function"&&ne()}),jc){const ne=tE.map(Ne=>Ne(Ze,c)).filter(Ne=>typeof Ne=="function");u[te].stateOwnersUpdateHandlers=ne.length===1?ne[0]:ne}else cl&&(u[te].stateOwnersUpdateHandlers=void 0)}),Object.entries(c).forEach(([te,Tr])=>{l[te]=Tr}),d(),c=void 0});return function(g,T){return b.apply(this,arguments)}})();return v({media:e,fullscreenElement:t,documentElement:i,options:n}),{dispatch(b){const{type:E,detail:g}=b;if(r[E]&&m.mediaErrorCode==null){p(r[E](a,l,b));return}E==="mediaelementchangerequest"?v({media:g}):E==="fullscreenelementchangerequest"?v({fullscreenElement:g}):E==="documentelementchangerequest"?v({documentElement:g}):E==="optionschangerequest"&&(Object.entries(g!=null?g:{}).forEach(([T,y])=>{l.options[T]=y}),d())},getState(){return m},subscribe(b){return v({},o.length+1),o.push(b),b(m),()=>{const E=o.indexOf(b);E>=0&&(v({},o.length-1),o.splice(E,1))}}}},Bu=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},U=(e,t,i)=>(Bu(e,t,"read from private field"),i?i.call(e):t.get(e)),st=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Pt=(e,t,i,a)=>(Bu(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),$t=(e,t,i)=>(Bu(e,t,"access private method"),i),Di,Gr,$,ia,$r,Ut,fs,Qr,Es,hd,la,ar,_s,md,pd,uv,cv=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Enter"," ","f","m","k","c","l","j",">","<","p"],Ih=10,Rh=.025,Ch=.25,Lb=.25,Db=2,k={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_DOWN_VOLUME_STEP:"keyboarddownvolumestep",KEYBOARD_UP_VOLUME_STEP:"keyboardupvolumestep",KEYS_USED:"keysused",LANG:"lang",LOOP:"loop",LIVE_EDGE_OFFSET:"liveedgeoffset",NO_AUTO_SEEK_TO_LIVE:"noautoseektolive",NO_DEFAULT_STORE:"nodefaultstore",NO_HOTKEYS:"nohotkeys",NO_MUTED_PREF:"nomutedpref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_VOLUME_PREF:"novolumepref",SEEK_TO_LIVE_OFFSET:"seektoliveoffset"},hv=class extends Xo{constructor(){super(),st(this,Es),st(this,la),st(this,_s),st(this,pd),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,st(this,Di,new Pu(this,k.HOTKEYS)),st(this,Gr,void 0),st(this,$,void 0),st(this,ia,null),st(this,$r,void 0),st(this,Ut,void 0),st(this,fs,t=>{var i;(i=U(this,$))==null||i.dispatch(t)}),st(this,Qr,void 0),this.associateElement(this);let e={};Pt(this,$r,t=>{Object.entries(t).forEach(([i,a])=>{if(i in e&&e[i]===a)return;this.propagateMediaState(i,a);const r=i.toLowerCase(),n=new f.CustomEvent(M0[r],{composed:!0,detail:a});this.dispatchEvent(n)}),e=t}),this.hasAttribute(k.NO_HOTKEYS)?this.disableHotkeys():this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(k.NO_HOTKEYS,k.HOTKEYS,k.DEFAULT_STREAM_TYPE,k.DEFAULT_SUBTITLES,k.DEFAULT_DURATION,k.NO_MUTED_PREF,k.NO_VOLUME_PREF,k.LANG,k.LOOP)}get mediaStore(){return U(this,$)}set mediaStore(e){var t,i;if(U(this,$)&&((t=U(this,Ut))==null||t.call(this),Pt(this,Ut,void 0)),Pt(this,$,e),!U(this,$)&&!this.hasAttribute(k.NO_DEFAULT_STORE)){$t(this,Es,hd).call(this);return}Pt(this,Ut,(i=U(this,$))==null?void 0:i.subscribe(U(this,$r)))}get fullscreenElement(){var e;return(e=U(this,Gr))!=null?e:this}set fullscreenElement(e){var t;this.hasAttribute(k.FULLSCREEN_ELEMENT)&&this.removeAttribute(k.FULLSCREEN_ELEMENT),Pt(this,Gr,e),(t=U(this,$))==null||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return Y(this,k.DEFAULT_SUBTITLES)}set defaultSubtitles(e){G(this,k.DEFAULT_SUBTITLES,e)}get defaultStreamType(){return le(this,k.DEFAULT_STREAM_TYPE)}set defaultStreamType(e){de(this,k.DEFAULT_STREAM_TYPE,e)}get defaultDuration(){return oe(this,k.DEFAULT_DURATION)}set defaultDuration(e){ve(this,k.DEFAULT_DURATION,e)}get noHotkeys(){return Y(this,k.NO_HOTKEYS)}set noHotkeys(e){G(this,k.NO_HOTKEYS,e)}get keysUsed(){return le(this,k.KEYS_USED)}set keysUsed(e){de(this,k.KEYS_USED,e)}get liveEdgeOffset(){return oe(this,k.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){ve(this,k.LIVE_EDGE_OFFSET,e)}get noAutoSeekToLive(){return Y(this,k.NO_AUTO_SEEK_TO_LIVE)}set noAutoSeekToLive(e){G(this,k.NO_AUTO_SEEK_TO_LIVE,e)}get noVolumePref(){return Y(this,k.NO_VOLUME_PREF)}set noVolumePref(e){G(this,k.NO_VOLUME_PREF,e)}get noMutedPref(){return Y(this,k.NO_MUTED_PREF)}set noMutedPref(e){G(this,k.NO_MUTED_PREF,e)}get noSubtitlesLangPref(){return Y(this,k.NO_SUBTITLES_LANG_PREF)}set noSubtitlesLangPref(e){G(this,k.NO_SUBTITLES_LANG_PREF,e)}get noDefaultStore(){return Y(this,k.NO_DEFAULT_STORE)}set noDefaultStore(e){G(this,k.NO_DEFAULT_STORE,e)}attributeChangedCallback(e,t,i){var a,r,n,s,o,l,m,p,d,u,c,v;if(super.attributeChangedCallback(e,t,i),e===k.NO_HOTKEYS)i!==t&&i===""?(this.hasAttribute(k.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):i!==t&&i===null&&this.enableHotkeys();else if(e===k.HOTKEYS)U(this,Di).value=i;else if(e===k.DEFAULT_SUBTITLES&&i!==t)(a=U(this,$))==null||a.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(k.DEFAULT_SUBTITLES)}});else if(e===k.DEFAULT_STREAM_TYPE)(n=U(this,$))==null||n.dispatch({type:"optionschangerequest",detail:{defaultStreamType:(r=this.getAttribute(k.DEFAULT_STREAM_TYPE))!=null?r:void 0}});else if(e===k.LIVE_EDGE_OFFSET)(s=U(this,$))==null||s.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(k.LIVE_EDGE_OFFSET)?+this.getAttribute(k.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(k.SEEK_TO_LIVE_OFFSET)?void 0:+this.getAttribute(k.LIVE_EDGE_OFFSET)}});else if(e===k.SEEK_TO_LIVE_OFFSET)(o=U(this,$))==null||o.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(k.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(k.SEEK_TO_LIVE_OFFSET):void 0}});else if(e===k.NO_AUTO_SEEK_TO_LIVE)(l=U(this,$))==null||l.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(k.NO_AUTO_SEEK_TO_LIVE)}});else if(e===k.FULLSCREEN_ELEMENT){const b=i?(m=this.getRootNode())==null?void 0:m.getElementById(i):void 0;Pt(this,Gr,b),(p=U(this,$))==null||p.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else e===k.LANG&&i!==t?(Y0(i),(d=U(this,$))==null||d.dispatch({type:"optionschangerequest",detail:{mediaLang:i}})):e===k.LOOP&&i!==t?(u=U(this,$))==null||u.dispatch({type:I.MEDIA_LOOP_REQUEST,detail:i!=null}):e===k.NO_VOLUME_PREF&&i!==t?(c=U(this,$))==null||c.dispatch({type:"optionschangerequest",detail:{noVolumePref:this.hasAttribute(k.NO_VOLUME_PREF)}}):e===k.NO_MUTED_PREF&&i!==t&&((v=U(this,$))==null||v.dispatch({type:"optionschangerequest",detail:{noMutedPref:this.hasAttribute(k.NO_MUTED_PREF)}}))}connectedCallback(){var e,t;!U(this,$)&&!this.hasAttribute(k.NO_DEFAULT_STORE)&&$t(this,Es,hd).call(this),(e=U(this,$))==null||e.dispatch({type:"documentelementchangerequest",detail:ke}),super.connectedCallback(),U(this,$)&&!U(this,Ut)&&Pt(this,Ut,(t=U(this,$))==null?void 0:t.subscribe(U(this,$r))),U(this,Qr)!==void 0&&U(this,$)&&this.media&&setTimeout(()=>{var i,a,r;(a=(i=this.media)==null?void 0:i.textTracks)!=null&&a.length&&((r=U(this,$))==null||r.dispatch({type:I.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:U(this,Qr)}))},0),this.hasAttribute(k.NO_HOTKEYS)?this.disableHotkeys():this.enableHotkeys()}disconnectedCallback(){var e,t,i,a,r;if((e=super.disconnectedCallback)==null||e.call(this),U(this,$)){const n=U(this,$).getState();Pt(this,Qr,!!((t=n.mediaSubtitlesShowing)!=null&&t.length)),(i=U(this,$))==null||i.dispatch({type:"documentelementchangerequest",detail:void 0}),(a=U(this,$))==null||a.dispatch({type:I.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})}U(this,Ut)&&((r=U(this,Ut))==null||r.call(this),Pt(this,Ut,void 0))}mediaSetCallback(e){var t;super.mediaSetCallback(e),(t=U(this,$))==null||t.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var t;super.mediaUnsetCallback(e),(t=U(this,$))==null||t.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,t){Mh(this.mediaStateReceivers,e,t)}associateElement(e){if(!e)return;const{associatedElementSubscriptions:t}=this;if(t.has(e))return;const i=Ub(e,this.registerMediaStateReceiver.bind(this),this.unregisterMediaStateReceiver.bind(this));Object.values(I).forEach(a=>{e.addEventListener(a,U(this,fs))}),t.set(e,i)}unassociateElement(e){if(!e)return;const{associatedElementSubscriptions:t}=this;t.has(e)&&(t.get(e)(),t.delete(e),Object.values(I).forEach(i=>{e.removeEventListener(i,U(this,fs))}))}registerMediaStateReceiver(e){if(!e)return;const t=this.mediaStateReceivers;t.indexOf(e)>-1||(t.push(e),U(this,$)&&Object.entries(U(this,$).getState()).forEach(([i,a])=>{Mh([e],i,a)}))}unregisterMediaStateReceiver(e){const t=this.mediaStateReceivers,i=t.indexOf(e);i<0||t.splice(i,1)}enableHotkeys(){this.addEventListener("keydown",$t(this,_s,md))}disableHotkeys(){this.removeEventListener("keydown",$t(this,_s,md)),this.removeEventListener("keyup",$t(this,la,ar))}get hotkeys(){return le(this,k.HOTKEYS)}set hotkeys(e){de(this,k.HOTKEYS,e)}keyboardShortcutHandler(e){var t,i,a,r,n,s,o,l,m;const p=e.target;if(((a=(i=(t=p.getAttribute(k.KEYS_USED))==null?void 0:t.split(" "))!=null?i:p==null?void 0:p.keysUsed)!=null?a:[]).map(v=>v==="Space"?" ":v).filter(Boolean).includes(e.key))return;let d,u,c;if(!U(this,Di).contains(`no${e.key.toLowerCase()}`)&&!(e.key===" "&&U(this,Di).contains("nospace"))&&!(e.shiftKey&&(e.key==="/"||e.key==="?")&&U(this,Di).contains("noshift+/")))switch(e.key){case" ":case"k":d=U(this,$).getState().mediaPaused?I.MEDIA_PLAY_REQUEST:I.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new f.CustomEvent(d,{composed:!0,bubbles:!0}));break;case"m":d=this.mediaStore.getState().mediaVolumeLevel==="off"?I.MEDIA_UNMUTE_REQUEST:I.MEDIA_MUTE_REQUEST,this.dispatchEvent(new f.CustomEvent(d,{composed:!0,bubbles:!0}));break;case"f":d=this.mediaStore.getState().mediaIsFullscreen?I.MEDIA_EXIT_FULLSCREEN_REQUEST:I.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new f.CustomEvent(d,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new f.CustomEvent(I.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":case"j":{const v=this.hasAttribute(k.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(k.KEYBOARD_BACKWARD_SEEK_OFFSET):Ih;u=Math.max(((r=this.mediaStore.getState().mediaCurrentTime)!=null?r:0)-v,0),c=new f.CustomEvent(I.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:u}),this.dispatchEvent(c);break}case"ArrowRight":case"l":{const v=this.hasAttribute(k.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(k.KEYBOARD_FORWARD_SEEK_OFFSET):Ih;u=Math.max(((n=this.mediaStore.getState().mediaCurrentTime)!=null?n:0)+v,0),c=new f.CustomEvent(I.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:u}),this.dispatchEvent(c);break}case"ArrowUp":{const v=this.hasAttribute(k.KEYBOARD_UP_VOLUME_STEP)?+this.getAttribute(k.KEYBOARD_UP_VOLUME_STEP):Rh;u=Math.min(((s=this.mediaStore.getState().mediaVolume)!=null?s:1)+v,1),c=new f.CustomEvent(I.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:u}),this.dispatchEvent(c);break}case"ArrowDown":{const v=this.hasAttribute(k.KEYBOARD_DOWN_VOLUME_STEP)?+this.getAttribute(k.KEYBOARD_DOWN_VOLUME_STEP):Rh;u=Math.max(((o=this.mediaStore.getState().mediaVolume)!=null?o:1)-v,0),c=new f.CustomEvent(I.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:u}),this.dispatchEvent(c);break}case"<":{const v=(l=this.mediaStore.getState().mediaPlaybackRate)!=null?l:1;u=Math.max(v-Ch,Lb).toFixed(2),c=new f.CustomEvent(I.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:u}),this.dispatchEvent(c);break}case">":{const v=(m=this.mediaStore.getState().mediaPlaybackRate)!=null?m:1;u=Math.min(v+Ch,Db).toFixed(2),c=new f.CustomEvent(I.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:u}),this.dispatchEvent(c);break}case"/":case"?":e.shiftKey&&$t(this,pd,uv).call(this);break;case"p":d=this.mediaStore.getState().mediaIsPip?I.MEDIA_EXIT_PIP_REQUEST:I.MEDIA_ENTER_PIP_REQUEST,c=new f.CustomEvent(d,{composed:!0,bubbles:!0}),this.dispatchEvent(c);break;default:break}}};Di=new WeakMap;Gr=new WeakMap;$=new WeakMap;ia=new WeakMap;$r=new WeakMap;Ut=new WeakMap;fs=new WeakMap;Qr=new WeakMap;Es=new WeakSet;hd=function(){var e;this.mediaStore=Cb({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(k.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(k.DEFAULT_DURATION)?+this.getAttribute(k.DEFAULT_DURATION):void 0,defaultStreamType:(e=this.getAttribute(k.DEFAULT_STREAM_TYPE))!=null?e:void 0,liveEdgeOffset:this.hasAttribute(k.LIVE_EDGE_OFFSET)?+this.getAttribute(k.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(k.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(k.SEEK_TO_LIVE_OFFSET):this.hasAttribute(k.LIVE_EDGE_OFFSET)?+this.getAttribute(k.LIVE_EDGE_OFFSET):void 0,noAutoSeekToLive:this.hasAttribute(k.NO_AUTO_SEEK_TO_LIVE),noVolumePref:this.hasAttribute(k.NO_VOLUME_PREF),noMutedPref:this.hasAttribute(k.NO_MUTED_PREF),noSubtitlesLangPref:this.hasAttribute(k.NO_SUBTITLES_LANG_PREF)}})};la=new WeakSet;ar=function(e){const{key:t,shiftKey:i}=e;if(!(i&&(t==="/"||t==="?")||cv.includes(t))){this.removeEventListener("keyup",$t(this,la,ar));return}this.keyboardShortcutHandler(e)};_s=new WeakSet;md=function(e){var t;const{metaKey:i,altKey:a,key:r,shiftKey:n}=e,s=n&&(r==="/"||r==="?");if(s&&((t=U(this,ia))!=null&&t.open)){this.removeEventListener("keyup",$t(this,la,ar));return}if(i||a||!s&&!cv.includes(r)){this.removeEventListener("keyup",$t(this,la,ar));return}const o=e.target,l=o instanceof HTMLElement&&(o.tagName.toLowerCase()==="media-volume-range"||o.tagName.toLowerCase()==="media-time-range");[" ","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(r)&&!(U(this,Di).contains(`no${r.toLowerCase()}`)||r===" "&&U(this,Di).contains("nospace"))&&!l&&e.preventDefault(),this.addEventListener("keyup",$t(this,la,ar),{once:!0})};pd=new WeakSet;uv=function(){U(this,ia)||(Pt(this,ia,ke.createElement("media-keyboard-shortcuts-dialog")),this.appendChild(U(this,ia))),U(this,ia).open=!0};var Mb=Object.values(h),xb=Object.values(Up),mv=e=>{var t,i,a,r;let{observedAttributes:n}=e.constructor;!n&&((t=e.nodeName)!=null&&t.includes("-"))&&(f.customElements.upgrade(e),{observedAttributes:n}=e.constructor);const s=(r=(a=(i=e==null?void 0:e.getAttribute)==null?void 0:i.call(e,z.MEDIA_CHROME_ATTRIBUTES))==null?void 0:a.split)==null?void 0:r.call(a,/\s+/);return Array.isArray(n||s)?(n||s).filter(o=>Mb.includes(o)):[]},Ob=e=>{var t,i;return(t=e.nodeName)!=null&&t.includes("-")&&f.customElements.get((i=e.nodeName)==null?void 0:i.toLowerCase())&&!(e instanceof f.customElements.get(e.nodeName.toLowerCase()))&&f.customElements.upgrade(e),xb.some(a=>a in e)},vd=e=>Ob(e)||!!mv(e).length,Lh=e=>{var t;return(t=e==null?void 0:e.join)==null?void 0:t.call(e,":")},Dh={[h.MEDIA_SUBTITLES_LIST]:An,[h.MEDIA_SUBTITLES_SHOWING]:An,[h.MEDIA_SEEKABLE]:Lh,[h.MEDIA_BUFFERED]:e=>e==null?void 0:e.map(Lh).join(" "),[h.MEDIA_PREVIEW_COORDS]:e=>e==null?void 0:e.join(" "),[h.MEDIA_RENDITION_LIST]:O0,[h.MEDIA_AUDIO_TRACK_LIST]:H0},Nb=(function(){var e=F(function*(t,i,a){var r,n;if(t.isConnected||(yield Wp(0)),typeof a=="boolean"||a==null)return G(t,i,a);if(typeof a=="number")return ve(t,i,a);if(typeof a=="string")return de(t,i,a);if(Array.isArray(a)&&!a.length)return t.removeAttribute(i);const s=(n=(r=Dh[i])==null?void 0:r.call(Dh,a))!=null?n:a;return t.setAttribute(i,s)});return function(i,a,r){return e.apply(this,arguments)}})(),Pb=e=>{var t;return!!((t=e.closest)!=null&&t.call(e,'*[slot="media"]'))},Yi=(e,t)=>{if(Pb(e))return;const i=(r,n)=>{var s,o;vd(r)&&n(r);const{children:l=[]}=r!=null?r:{},m=(o=(s=r==null?void 0:r.shadowRoot)==null?void 0:s.children)!=null?o:[];[...l,...m].forEach(p=>Yi(p,n))},a=e==null?void 0:e.nodeName.toLowerCase();if(a.includes("-")&&!vd(e)){f.customElements.whenDefined(a).then(()=>{i(e,t)});return}i(e,t)},Mh=(e,t,i)=>{e.forEach(a=>{if(t in a){a[t]=i;return}const r=mv(a),n=t.toLowerCase();r.includes(n)&&Nb(a,n,i)})},Ub=(e,t,i)=>{Yi(e,t);const a=p=>{var d;t((d=p==null?void 0:p.composedPath()[0])!=null?d:p.target)},r=p=>{var d;i((d=p==null?void 0:p.composedPath()[0])!=null?d:p.target)};e.addEventListener(I.REGISTER_MEDIA_STATE_RECEIVER,a),e.addEventListener(I.UNREGISTER_MEDIA_STATE_RECEIVER,r);const n=p=>{p.forEach(d=>{const{addedNodes:u=[],removedNodes:c=[],type:v,target:b,attributeName:E}=d;v==="childList"?(Array.prototype.forEach.call(u,g=>Yi(g,t)),Array.prototype.forEach.call(c,g=>Yi(g,i))):v==="attributes"&&E===z.MEDIA_CHROME_ATTRIBUTES&&(vd(b)?t(b):i(b))})};let s=[];const o=p=>{const d=p.target;d.name!=="media"&&(s.forEach(u=>Yi(u,i)),s=[...d.assignedElements({flatten:!0})],s.forEach(u=>Yi(u,t)))};e.addEventListener("slotchange",o);const l=new MutationObserver(n);return l.observe(e,{childList:!0,attributes:!0,subtree:!0}),()=>{Yi(e,i),e.removeEventListener("slotchange",o),l.disconnect(),e.removeEventListener(I.REGISTER_MEDIA_STATE_RECEIVER,a),e.removeEventListener(I.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};f.customElements.get("media-controller")||f.customElements.define("media-controller",hv);var Hb=hv,ga={PLACEMENT:"placement",BOUNDS:"bounds"};function Bb(e){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `}var tl=class extends f.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!zp(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;const t=this.placement;if(t==="left"||t==="right"){this.style.removeProperty("--media-tooltip-offset-x");return}const i=getComputedStyle(this),a=(e=Er(this,"#"+this.bounds))!=null?e:Ge(this);if(!a)return;const{x:r,width:n}=a.getBoundingClientRect(),{x:s,width:o}=this.getBoundingClientRect(),l=s+o,m=r+n,p=i.getPropertyValue("--media-tooltip-offset-x"),d=p?parseFloat(p.replace("px","")):0,u=i.getPropertyValue("--media-tooltip-container-margin"),c=u?parseFloat(u.replace("px","")):0,v=s-r+d-c,b=l-m+d+c;if(v<0){this.style.setProperty("--media-tooltip-offset-x",`${v}px`);return}if(b>0){this.style.setProperty("--media-tooltip-offset-x",`${b}px`);return}this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=rt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){const e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[ga.PLACEMENT,ga.BOUNDS]}get placement(){return le(this,ga.PLACEMENT)}set placement(e){de(this,ga.PLACEMENT,e)}get bounds(){return le(this,ga.BOUNDS)}set bounds(e){de(this,ga.BOUNDS,e)}};tl.shadowRootOptions={mode:"open"};tl.getTemplateHTML=Bb;f.customElements.get("media-tooltip")||f.customElements.define("media-tooltip",tl);var xh=tl,Wu=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ge=(e,t,i)=>(Wu(e,t,"read from private field"),i?i.call(e):t.get(e)),ba=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Kn=(e,t,i,a)=>(Wu(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),Wb=(e,t,i)=>(Wu(e,t,"access private method"),i),Ht,Xa,Mi,Da,gs,fd,pv,gi={TOOLTIP_PLACEMENT:"tooltipplacement",DISABLED:"disabled",NO_TOOLTIP:"notooltip"};function Fb(e,t={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${xh.shadowRootOptions.mode}">
          ${xh.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(e)}
        </slot>
      </media-tooltip>
    </slot>
  `}function Kb(e,t){return`
    <slot></slot>
  `}function Vb(){return""}var xe=class extends f.HTMLElement{constructor(){if(super(),ba(this,fd),ba(this,Ht,void 0),this.preventClick=!1,this.tooltipEl=null,ba(this,Xa,e=>{this.preventClick||this.handleClick(e),setTimeout(ge(this,Mi),0)}),ba(this,Mi,()=>{var e,t;(t=(e=this.tooltipEl)==null?void 0:e.updateXOffset)==null||t.call(e)}),ba(this,Da,e=>{const{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener("keyup",ge(this,Da));return}this.preventClick||this.handleClick(e)}),ba(this,gs,e=>{const{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",ge(this,Da));return}this.addEventListener("keyup",ge(this,Da),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=rt(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",gi.TOOLTIP_PLACEMENT,z.MEDIA_CONTROLLER,h.MEDIA_LANG]}enable(){this.addEventListener("click",ge(this,Xa)),this.addEventListener("keydown",ge(this,gs)),this.tabIndex=0}disable(){this.removeEventListener("click",ge(this,Xa)),this.removeEventListener("keydown",ge(this,gs)),this.removeEventListener("keyup",ge(this,Da)),this.tabIndex=-1}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===z.MEDIA_CONTROLLER?(t&&((r=(a=ge(this,Ht))==null?void 0:a.unassociateElement)==null||r.call(a,this),Kn(this,Ht,null)),i&&this.isConnected&&(Kn(this,Ht,(n=this.getRootNode())==null?void 0:n.getElementById(i)),(o=(s=ge(this,Ht))==null?void 0:s.associateElement)==null||o.call(s,this))):e==="disabled"&&i!==t?i==null?this.enable():this.disable():e===gi.TOOLTIP_PLACEMENT&&this.tooltipEl&&i!==t?this.tooltipEl.placement=i:e===h.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),ge(this,Mi).call(this)}connectedCallback(){var e,t,i;const{style:a}=Ie(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");const r=this.getAttribute(z.MEDIA_CONTROLLER);r&&(Kn(this,Ht,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(i=(t=ge(this,Ht))==null?void 0:t.associateElement)==null||i.call(t,this)),f.customElements.whenDefined("media-tooltip").then(()=>Wb(this,fd,pv).call(this))}disconnectedCallback(){var e,t;this.disable(),(t=(e=ge(this,Ht))==null?void 0:e.unassociateElement)==null||t.call(e,this),Kn(this,Ht,null),this.removeEventListener("mouseenter",ge(this,Mi)),this.removeEventListener("focus",ge(this,Mi)),this.removeEventListener("click",ge(this,Xa))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return le(this,gi.TOOLTIP_PLACEMENT)}set tooltipPlacement(e){de(this,gi.TOOLTIP_PLACEMENT,e)}get mediaController(){return le(this,z.MEDIA_CONTROLLER)}set mediaController(e){de(this,z.MEDIA_CONTROLLER,e)}get disabled(){return Y(this,gi.DISABLED)}set disabled(e){G(this,gi.DISABLED,e)}get noTooltip(){return Y(this,gi.NO_TOOLTIP)}set noTooltip(e){G(this,gi.NO_TOOLTIP,e)}handleClick(e){}};Ht=new WeakMap;Xa=new WeakMap;Mi=new WeakMap;Da=new WeakMap;gs=new WeakMap;fd=new WeakSet;pv=function(){this.addEventListener("mouseenter",ge(this,Mi)),this.addEventListener("focus",ge(this,Mi)),this.addEventListener("click",ge(this,Xa));const e=this.tooltipPlacement;e&&this.tooltipEl&&(this.tooltipEl.placement=e)};xe.shadowRootOptions={mode:"open"};xe.getTemplateHTML=Fb;xe.getSlotTemplateHTML=Kb;xe.getTooltipContentHTML=Vb;f.customElements.get("media-chrome-button")||f.customElements.define("media-chrome-button",xe);var Oh=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`;function qb(e){return`
    <style>
      :host([${h.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${h.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${h.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${h.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${Oh}</slot>
      <slot name="exit">${Oh}</slot>
    </slot>
  `}function Yb(){return`
    <slot name="tooltip-enter">${L("start airplay")}</slot>
    <slot name="tooltip-exit">${L("stop airplay")}</slot>
  `}var Nh=e=>{const t=e.mediaIsAirplaying?L("stop airplay"):L("start airplay");e.setAttribute("aria-label",t)},Fu=class extends xe{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_IS_AIRPLAYING,h.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Nh(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===h.MEDIA_IS_AIRPLAYING&&Nh(this)}get mediaIsAirplaying(){return Y(this,h.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){G(this,h.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return le(this,h.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){de(this,h.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){const e=new f.CustomEvent(I.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}};Fu.getSlotTemplateHTML=qb;Fu.getTooltipContentHTML=Yb;f.customElements.get("media-airplay-button")||f.customElements.define("media-airplay-button",Fu);var Gb=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,$b=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;function Qb(e){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${Gb}</slot>
      <slot name="off">${$b}</slot>
    </slot>
  `}function zb(){return`
    <slot name="tooltip-enable">${L("Enable captions")}</slot>
    <slot name="tooltip-disable">${L("Disable captions")}</slot>
  `}var Ph=e=>{e.setAttribute("aria-checked",nv(e).toString())},Ku=class extends xe{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_SUBTITLES_LIST,h.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",L("closed captions")),Ph(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===h.MEDIA_SUBTITLES_SHOWING&&Ph(this)}get mediaSubtitlesList(){return Uh(this,h.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){Hh(this,h.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return Uh(this,h.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){Hh(this,h.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new f.CustomEvent(I.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}};Ku.getSlotTemplateHTML=Qb;Ku.getTooltipContentHTML=zb;var Uh=(e,t)=>{const i=e.getAttribute(t);return i?Jo(i):[]},Hh=(e,t,i)=>{if(!(i!=null&&i.length)){e.removeAttribute(t);return}const a=An(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};f.customElements.get("media-captions-button")||f.customElements.define("media-captions-button",Ku);var Zb='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg>',jb='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg>';function Xb(e){return`
    <style>
      :host([${h.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${h.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${h.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${h.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${Zb}</slot>
      <slot name="exit">${jb}</slot>
    </slot>
  `}function Jb(){return`
    <slot name="tooltip-enter">${L("Start casting")}</slot>
    <slot name="tooltip-exit">${L("Stop casting")}</slot>
  `}var Bh=e=>{const t=e.mediaIsCasting?L("stop casting"):L("start casting");e.setAttribute("aria-label",t)},Vu=class extends xe{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_IS_CASTING,h.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Bh(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===h.MEDIA_IS_CASTING&&Bh(this)}get mediaIsCasting(){return Y(this,h.MEDIA_IS_CASTING)}set mediaIsCasting(e){G(this,h.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return le(this,h.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){de(this,h.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){const e=this.mediaIsCasting?I.MEDIA_EXIT_CAST_REQUEST:I.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new f.CustomEvent(e,{composed:!0,bubbles:!0}))}};Vu.getSlotTemplateHTML=Xb;Vu.getTooltipContentHTML=Jb;f.customElements.get("media-cast-button")||f.customElements.define("media-cast-button",Vu);var qu=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},da=(e,t,i)=>(qu(e,t,"read from private field"),i?i.call(e):t.get(e)),ri=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Yu=(e,t,i,a)=>(qu(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),Fi=(e,t,i)=>(qu(e,t,"access private method"),i),Ao,kn,pa,bs,Ed,_d,vv,gd,fv,bd,Ev,yd,_v,Td,gv;function ey(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(e)}
  `}function ty(e){return`
    <slot id="content"></slot>
  `}var wr={OPEN:"open",ANCHOR:"anchor"},_r=class extends f.HTMLElement{constructor(){super(),ri(this,bs),ri(this,_d),ri(this,gd),ri(this,bd),ri(this,yd),ri(this,Td),ri(this,Ao,!1),ri(this,kn,null),ri(this,pa,null),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}static get observedAttributes(){return[wr.OPEN,wr.ANCHOR]}get open(){return Y(this,wr.OPEN)}set open(e){G(this,wr.OPEN,e)}handleEvent(e){switch(e.type){case"invoke":Fi(this,bd,Ev).call(this,e);break;case"focusout":Fi(this,yd,_v).call(this,e);break;case"keydown":Fi(this,Td,gv).call(this,e);break}}connectedCallback(){Fi(this,bs,Ed).call(this),this.role||(this.role="dialog")}attributeChangedCallback(e,t,i){Fi(this,bs,Ed).call(this),e===wr.OPEN&&i!==t&&(this.open?Fi(this,_d,vv).call(this):Fi(this,gd,fv).call(this))}focus(){var i;Yu(this,kn,Mu());const e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),t=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));e||t||(i=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]'))==null||i.focus()}get keysUsed(){return["Escape","Tab"]}};Ao=new WeakMap;kn=new WeakMap;pa=new WeakMap;bs=new WeakSet;Ed=function(){if(!da(this,Ao)&&(Yu(this,Ao,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);const e=rt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e),queueMicrotask(()=>{const{style:t}=Ie(this.shadowRoot,":host");t.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}};_d=new WeakSet;vv=function(){var e;(e=da(this,pa))==null||e.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})};gd=new WeakSet;fv=function(){var e;(e=da(this,pa))==null||e.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))};bd=new WeakSet;Ev=function(e){Yu(this,pa,e.relatedTarget),Ei(this,e.relatedTarget)||(this.open=!this.open)};yd=new WeakSet;_v=function(e){var t;Ei(this,e.relatedTarget)||((t=da(this,kn))==null||t.focus(),da(this,pa)&&da(this,pa)!==e.relatedTarget&&this.open&&(this.open=!1))};Td=new WeakSet;gv=function(e){var t,i,a,r,n;const{key:s,ctrlKey:o,altKey:l,metaKey:m}=e;o||l||m||this.keysUsed.includes(s)&&(e.preventDefault(),e.stopPropagation(),s==="Tab"?(e.shiftKey?(i=(t=this.previousElementSibling)==null?void 0:t.focus)==null||i.call(t):(r=(a=this.nextElementSibling)==null?void 0:a.focus)==null||r.call(a),this.blur()):s==="Escape"&&((n=da(this,kn))==null||n.focus(),this.open=!1))};_r.shadowRootOptions={mode:"open"};_r.getTemplateHTML=ey;_r.getSlotTemplateHTML=ty;f.customElements.get("media-chrome-dialog")||f.customElements.define("media-chrome-dialog",_r);var Gu=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},he=(e,t,i)=>(Gu(e,t,"read from private field"),i?i.call(e):t.get(e)),Pe=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Ai=(e,t,i,a)=>(Gu(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),yt=(e,t,i)=>(Gu(e,t,"access private method"),i),Bt,il,ys,Ts,Tt,ko,As,ks,Ss,$u,bv,ws,Ad,Is,kd,So,Qu,Sd,yv,wd,Tv,Id,Av,Rd,kv;function iy(e){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, -7px);
        height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, -5px);
          height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
      <input id="range" type="range" min="0" max="1" step="any" value="0">

      ${this.getContainerTemplateHTML(e)}
    </div>
    <div id="rightgap"></div>
  `}function ay(e){return""}var gr=class extends f.HTMLElement{constructor(){if(super(),Pe(this,$u),Pe(this,ws),Pe(this,Is),Pe(this,So),Pe(this,Sd),Pe(this,wd),Pe(this,Id),Pe(this,Rd),Pe(this,Bt,void 0),Pe(this,il,void 0),Pe(this,ys,void 0),Pe(this,Ts,void 0),Pe(this,Tt,{}),Pe(this,ko,[]),Pe(this,As,()=>{if(this.range.matches(":focus-visible")){const{style:e}=Ie(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),Pe(this,ks,()=>{const{style:e}=Ie(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),Pe(this,Ss,()=>{const e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=rt(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.container=this.shadowRoot.querySelector("#container"),Ai(this,ys,this.shadowRoot.querySelector("#startpoint")),Ai(this,Ts,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",z.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===z.MEDIA_CONTROLLER?(t&&((r=(a=he(this,Bt))==null?void 0:a.unassociateElement)==null||r.call(a,this),Ai(this,Bt,null)),i&&this.isConnected&&(Ai(this,Bt,(n=this.getRootNode())==null?void 0:n.getElementById(i)),(o=(s=he(this,Bt))==null?void 0:s.associateElement)==null||o.call(s,this))):(e==="disabled"||e==="aria-disabled"&&t!==i)&&(i==null?(this.range.removeAttribute(e),yt(this,ws,Ad).call(this)):(this.range.setAttribute(e,i),yt(this,Is,kd).call(this)))}connectedCallback(){var e,t,i;const{style:a}=Ie(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),he(this,Tt).pointer=Ie(this.shadowRoot,"#pointer"),he(this,Tt).progress=Ie(this.shadowRoot,"#progress"),he(this,Tt).thumb=Ie(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),he(this,Tt).activeSegment=Ie(this.shadowRoot,"#segments-clipping rect:nth-child(0)");const r=this.getAttribute(z.MEDIA_CONTROLLER);r&&(Ai(this,Bt,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(i=(t=he(this,Bt))==null?void 0:t.associateElement)==null||i.call(t,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",he(this,As)),this.shadowRoot.addEventListener("focusout",he(this,ks)),yt(this,ws,Ad).call(this),cr(this.container,he(this,Ss))}disconnectedCallback(){var e,t;yt(this,Is,kd).call(this),(t=(e=he(this,Bt))==null?void 0:e.unassociateElement)==null||t.call(e,this),Ai(this,Bt,null),this.shadowRoot.removeEventListener("focusin",he(this,As)),this.shadowRoot.removeEventListener("focusout",he(this,ks)),hr(this.container,he(this,Ss))}updatePointerBar(e){var t;(t=he(this,Tt).pointer)==null||t.style.setProperty("width",`${this.getPointerRatio(e)*100}%`)}updateBar(){var e,t;const i=this.range.valueAsNumber*100;(e=he(this,Tt).progress)==null||e.style.setProperty("width",`${i}%`),(t=he(this,Tt).thumb)==null||t.style.setProperty("left",`${i}%`)}updateSegments(e){const t=this.shadowRoot.querySelector("#segments-clipping");if(t.textContent="",this.container.classList.toggle("segments",!!(e!=null&&e.length)),!(e!=null&&e.length))return;const i=[...new Set([+this.range.min,...e.flatMap(r=>[r.start,r.end]),+this.range.max])];Ai(this,ko,[...i]);const a=i.pop();for(const[r,n]of i.entries()){const[s,o]=[r===0,r===i.length-1],l=s?"calc(var(--segments-gap) / -1)":`${n*100}%`,m=`calc(${((o?a:i[r+1])-n)*100}%${s||o?"":" - var(--segments-gap)"})`,p=ke.createElementNS("http://www.w3.org/2000/svg","rect"),d=xu(this.shadowRoot,`#segments-clipping rect:nth-child(${r+1})`);d.style.setProperty("x",l),d.style.setProperty("width",m),t.append(p)}}getPointerRatio(e){return z0(e.clientX,e.clientY,he(this,ys).getBoundingClientRect(),he(this,Ts).getBoundingClientRect())}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":yt(this,Rd,kv).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":yt(this,Sd,yv).call(this,e);break;case"pointerdown":yt(this,So,Qu).call(this,e);break;case"pointerup":yt(this,wd,Tv).call(this);break;case"pointerleave":yt(this,Id,Av).call(this);break}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}};Bt=new WeakMap;il=new WeakMap;ys=new WeakMap;Ts=new WeakMap;Tt=new WeakMap;ko=new WeakMap;As=new WeakMap;ks=new WeakMap;Ss=new WeakMap;$u=new WeakSet;bv=function(e){const t=he(this,Tt).activeSegment;if(!t)return;const i=this.getPointerRatio(e),a=`#segments-clipping rect:nth-child(${he(this,ko).findIndex((r,n,s)=>{const o=s[n+1];return o!=null&&i>=r&&i<=o})+1})`;(t.selectorText!=a||!t.style.transform)&&(t.selectorText=a,t.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))};ws=new WeakSet;Ad=function(){this.hasAttribute("disabled")||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))};Is=new WeakSet;kd=function(){var e,t;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),(e=f.window)==null||e.removeEventListener("pointerup",this),(t=f.window)==null||t.removeEventListener("pointermove",this)};So=new WeakSet;Qu=function(e){var t;Ai(this,il,e.composedPath().includes(this.range)),(t=f.window)==null||t.addEventListener("pointerup",this)};Sd=new WeakSet;yv=function(e){var t;e.pointerType!=="mouse"&&yt(this,So,Qu).call(this,e),this.addEventListener("pointerleave",this),(t=f.window)==null||t.addEventListener("pointermove",this)};wd=new WeakSet;Tv=function(){var e;(e=f.window)==null||e.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")};Id=new WeakSet;Av=function(){var e,t;this.removeEventListener("pointerleave",this),(e=f.window)==null||e.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),(t=he(this,Tt).activeSegment)==null||t.style.removeProperty("transform")};Rd=new WeakSet;kv=function(e){e.pointerType==="pen"&&e.buttons===0||(this.toggleAttribute("dragging",e.buttons===1||e.pointerType!=="mouse"),this.updatePointerBar(e),yt(this,$u,bv).call(this,e),this.dragging&&(e.pointerType!=="mouse"||!he(this,il))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))))};gr.shadowRootOptions={mode:"open"};gr.getTemplateHTML=iy;gr.getContainerTemplateHTML=ay;f.customElements.get("media-chrome-range")||f.customElements.define("media-chrome-range",gr);var Sv=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Vn=(e,t,i)=>(Sv(e,t,"read from private field"),i?i.call(e):t.get(e)),ry=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},qn=(e,t,i,a)=>(Sv(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),Wt;function ny(e){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `}var zu=class extends f.HTMLElement{constructor(){if(super(),ry(this,Wt,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=rt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[z.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===z.MEDIA_CONTROLLER&&(t&&((r=(a=Vn(this,Wt))==null?void 0:a.unassociateElement)==null||r.call(a,this),qn(this,Wt,null)),i&&this.isConnected&&(qn(this,Wt,(n=this.getRootNode())==null?void 0:n.getElementById(i)),(o=(s=Vn(this,Wt))==null?void 0:s.associateElement)==null||o.call(s,this)))}connectedCallback(){var e,t,i;const a=this.getAttribute(z.MEDIA_CONTROLLER);a&&(qn(this,Wt,(e=this.getRootNode())==null?void 0:e.getElementById(a)),(i=(t=Vn(this,Wt))==null?void 0:t.associateElement)==null||i.call(t,this))}disconnectedCallback(){var e,t;(t=(e=Vn(this,Wt))==null?void 0:e.unassociateElement)==null||t.call(e,this),qn(this,Wt,null)}};Wt=new WeakMap;zu.shadowRootOptions={mode:"open"};zu.getTemplateHTML=ny;f.customElements.get("media-control-bar")||f.customElements.define("media-control-bar",zu);var wv=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Yn=(e,t,i)=>(wv(e,t,"read from private field"),i?i.call(e):t.get(e)),sy=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Gn=(e,t,i,a)=>(wv(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),Ft;function oy(e,t={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}
  `}function ly(e,t){return`
    <slot></slot>
  `}var Hi=class extends f.HTMLElement{constructor(){if(super(),sy(this,Ft,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=rt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[z.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===z.MEDIA_CONTROLLER&&(t&&((r=(a=Yn(this,Ft))==null?void 0:a.unassociateElement)==null||r.call(a,this),Gn(this,Ft,null)),i&&this.isConnected&&(Gn(this,Ft,(n=this.getRootNode())==null?void 0:n.getElementById(i)),(o=(s=Yn(this,Ft))==null?void 0:s.associateElement)==null||o.call(s,this)))}connectedCallback(){var e,t,i;const{style:a}=Ie(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);const r=this.getAttribute(z.MEDIA_CONTROLLER);r&&(Gn(this,Ft,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(i=(t=Yn(this,Ft))==null?void 0:t.associateElement)==null||i.call(t,this))}disconnectedCallback(){var e,t;(t=(e=Yn(this,Ft))==null?void 0:e.unassociateElement)==null||t.call(e,this),Gn(this,Ft,null)}};Ft=new WeakMap;Hi.shadowRootOptions={mode:"open"};Hi.getTemplateHTML=oy;Hi.getSlotTemplateHTML=ly;f.customElements.get("media-text-display")||f.customElements.define("media-text-display",Hi);var Iv=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Wh=(e,t,i)=>(Iv(e,t,"read from private field"),i?i.call(e):t.get(e)),dy=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},uy=(e,t,i,a)=>(Iv(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),zr;function cy(e,t){return`
    <slot>${Ni(t.mediaDuration)}</slot>
  `}var Rv=class extends Hi{constructor(){var e;super(),dy(this,zr,void 0),uy(this,zr,this.shadowRoot.querySelector("slot")),Wh(this,zr).textContent=Ni((e=this.mediaDuration)!=null?e:0)}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_DURATION]}attributeChangedCallback(e,t,i){e===h.MEDIA_DURATION&&(Wh(this,zr).textContent=Ni(+i)),super.attributeChangedCallback(e,t,i)}get mediaDuration(){return oe(this,h.MEDIA_DURATION)}set mediaDuration(e){ve(this,h.MEDIA_DURATION,e)}};zr=new WeakMap;Rv.getSlotTemplateHTML=cy;f.customElements.get("media-duration-display")||f.customElements.define("media-duration-display",Rv);var hy={2:L("Network Error"),3:L("Decode Error"),4:L("Source Not Supported"),5:L("Encryption Error")},my={2:L("A network error caused the media download to fail."),3:L("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:L("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:L("The media is encrypted and there are no keys to decrypt it.")},Cv=e=>{var t,i;return e.code===1?null:{title:(t=hy[e.code])!=null?t:`Error ${e.code}`,message:(i=my[e.code])!=null?i:e.message}},Lv=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},py=(e,t,i)=>(Lv(e,t,"read from private field"),i?i.call(e):t.get(e)),vy=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},fy=(e,t,i,a)=>(Lv(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),Rs;function Ey(e){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${e.mediaerrorcode}" id="content">
      ${Dv({code:+e.mediaerrorcode,message:e.mediaerrormessage})}
    </slot>
  `}function _y(e){return e.code&&Cv(e)!==null}function Dv(e){var t;const{title:i,message:a}=(t=Cv(e))!=null?t:{};let r="";return i&&(r+=`<slot name="error-${e.code}-title"><h3>${i}</h3></slot>`),a&&(r+=`<slot name="error-${e.code}-message"><p>${a}</p></slot>`),r}var Fh=[h.MEDIA_ERROR_CODE,h.MEDIA_ERROR_MESSAGE],al=class extends _r{constructor(){super(...arguments),vy(this,Rs,null)}static get observedAttributes(){return[...super.observedAttributes,...Fh]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,t,i){var a;if(super.attributeChangedCallback(e,t,i),!Fh.includes(e))return;const r=(a=this.mediaError)!=null?a:{code:this.mediaErrorCode,message:this.mediaErrorMessage};this.open=_y(r),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(r))}get mediaError(){return py(this,Rs)}set mediaError(e){fy(this,Rs,e)}get mediaErrorCode(){return oe(this,"mediaerrorcode")}set mediaErrorCode(e){ve(this,"mediaerrorcode",e)}get mediaErrorMessage(){return le(this,"mediaerrormessage")}set mediaErrorMessage(e){de(this,"mediaerrormessage",e)}};Rs=new WeakMap;al.getSlotTemplateHTML=Ey;al.formatErrorMessage=Dv;f.customElements.get("media-error-dialog")||f.customElements.define("media-error-dialog",al);var Mv=al,gy=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},bi=(e,t,i)=>(gy(e,t,"read from private field"),i?i.call(e):t.get(e)),Kh=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Ma,xa;function by(e){return`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        background: rgb(20 20 30 / .8);
        backdrop-filter: blur(10px);
      }

      #content {
        display: block;
        width: clamp(400px, 40vw, 700px);
        max-width: 90vw;
        text-align: left;
      }

      h2 {
        margin: 0 0 1.5rem 0;
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
      }

      .shortcuts-table {
        width: 100%;
        border-collapse: collapse;
      }

      .shortcuts-table tr {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .shortcuts-table tr:last-child {
        border-bottom: none;
      }

      .shortcuts-table td {
        padding: 0.75rem 0.5rem;
      }

      .shortcuts-table td:first-child {
        text-align: right;
        padding-right: 1rem;
        width: 40%;
        min-width: 120px;
      }

      .shortcuts-table td:last-child {
        padding-left: 1rem;
      }

      .key {
        display: inline-block;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        padding: 0.25rem 0.5rem;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
        font-weight: 500;
        min-width: 1.5rem;
        text-align: center;
        margin: 0 0.2rem;
      }

      .description {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.95rem;
      }

      .key-combo {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.3rem;
      }

      .key-separator {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.9rem;
      }
    </style>
    <slot id="content">
      ${yy()}
    </slot>
  `}function yy(){return`
    <h2>Keyboard Shortcuts</h2>
    <table class="shortcuts-table">${[{keys:["Space","k"],description:"Toggle Playback"},{keys:["m"],description:"Toggle mute"},{keys:["f"],description:"Toggle fullscreen"},{keys:["c"],description:"Toggle captions or subtitles, if available"},{keys:["p"],description:"Toggle Picture in Picture"},{keys:["←","j"],description:"Seek back 10s"},{keys:["→","l"],description:"Seek forward 10s"},{keys:["↑"],description:"Turn volume up"},{keys:["↓"],description:"Turn volume down"},{keys:["< (SHIFT+,)"],description:"Decrease playback rate"},{keys:["> (SHIFT+.)"],description:"Increase playback rate"}].map(({keys:e,description:t})=>`
      <tr>
        <td>
          <div class="key-combo">${e.map((i,a)=>a>0?`<span class="key-separator">or</span><span class="key">${i}</span>`:`<span class="key">${i}</span>`).join("")}</div>
        </td>
        <td class="description">${t}</td>
      </tr>
    `).join("")}</table>
  `}var xv=class extends _r{constructor(){super(...arguments),Kh(this,Ma,e=>{var t;if(!this.open)return;const i=(t=this.shadowRoot)==null?void 0:t.querySelector("#content");if(!i)return;const a=e.composedPath(),r=a[0]===this||a.includes(this),n=a.includes(i);r&&!n&&(this.open=!1)}),Kh(this,xa,e=>{if(!this.open)return;const t=e.shiftKey&&(e.key==="/"||e.key==="?");(e.key==="Escape"||t)&&!e.ctrlKey&&!e.altKey&&!e.metaKey&&(this.open=!1,e.preventDefault(),e.stopPropagation())})}connectedCallback(){super.connectedCallback(),this.open&&(this.addEventListener("click",bi(this,Ma)),document.addEventListener("keydown",bi(this,xa)))}disconnectedCallback(){this.removeEventListener("click",bi(this,Ma)),document.removeEventListener("keydown",bi(this,xa))}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e==="open"&&(this.open?(this.addEventListener("click",bi(this,Ma)),document.addEventListener("keydown",bi(this,xa))):(this.removeEventListener("click",bi(this,Ma)),document.removeEventListener("keydown",bi(this,xa))))}};Ma=new WeakMap;xa=new WeakMap;xv.getSlotTemplateHTML=by;f.customElements.get("media-keyboard-shortcuts-dialog")||f.customElements.define("media-keyboard-shortcuts-dialog",xv);var Ov=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Ty=(e,t,i)=>(Ov(e,t,"read from private field"),i?i.call(e):t.get(e)),Ay=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ky=(e,t,i,a)=>(Ov(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),Cs,Sy=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,wy=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`;function Iy(e){return`
    <style>
      :host([${h.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${h.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${h.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${h.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${Sy}</slot>
      <slot name="exit">${wy}</slot>
    </slot>
  `}function Ry(){return`
    <slot name="tooltip-enter">${L("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${L("Exit fullscreen mode")}</slot>
  `}var Vh=e=>{const t=e.mediaIsFullscreen?L("exit fullscreen mode"):L("enter fullscreen mode");e.setAttribute("aria-label",t)},Zu=class extends xe{constructor(){super(...arguments),Ay(this,Cs,null)}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_IS_FULLSCREEN,h.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Vh(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===h.MEDIA_IS_FULLSCREEN&&Vh(this)}get mediaFullscreenUnavailable(){return le(this,h.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){de(this,h.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return Y(this,h.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){G(this,h.MEDIA_IS_FULLSCREEN,e)}handleClick(e){ky(this,Cs,e);const t=Ty(this,Cs)instanceof PointerEvent,i=this.mediaIsFullscreen?new f.CustomEvent(I.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0}):new f.CustomEvent(I.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0,detail:t});this.dispatchEvent(i)}};Cs=new WeakMap;Zu.getSlotTemplateHTML=Iy;Zu.getTooltipContentHTML=Ry;f.customElements.get("media-fullscreen-button")||f.customElements.define("media-fullscreen-button",Zu);var{MEDIA_TIME_IS_LIVE:Ls,MEDIA_PAUSED:cn}=h,{MEDIA_SEEK_TO_LIVE_REQUEST:Cy,MEDIA_PLAY_REQUEST:Ly}=I,Dy='<svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg>';function My(e){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${Ls}]:not([${cn}])) slot[name=indicator] > *,
      :host([${Ls}]:not([${cn}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${Ls}]:not([${cn}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator">${Dy}</slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${L("live")}</slot>
  `}var qh=e=>{var t;const i=e.mediaPaused||!e.mediaTimeIsLive,a=L(i?"seek to live":"playing live");e.setAttribute("aria-label",a);const r=(t=e.shadowRoot)==null?void 0:t.querySelector('slot[name="text"]');r&&(r.textContent=L("live")),i?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")},Nv=class extends xe{static get observedAttributes(){return[...super.observedAttributes,Ls,cn]}connectedCallback(){super.connectedCallback(),qh(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),qh(this)}get mediaPaused(){return Y(this,h.MEDIA_PAUSED)}set mediaPaused(e){G(this,h.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return Y(this,h.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){G(this,h.MEDIA_TIME_IS_LIVE,e)}handleClick(){!this.mediaPaused&&this.mediaTimeIsLive||(this.dispatchEvent(new f.CustomEvent(Cy,{composed:!0,bubbles:!0})),this.hasAttribute(cn)&&this.dispatchEvent(new f.CustomEvent(Ly,{composed:!0,bubbles:!0})))}};Nv.getSlotTemplateHTML=My;f.customElements.get("media-live-button")||f.customElements.define("media-live-button",Nv);var Pv=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Ir=(e,t,i)=>(Pv(e,t,"read from private field"),i?i.call(e):t.get(e)),Yh=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Rr=(e,t,i,a)=>(Pv(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),Kt,Ds,$n={LOADING_DELAY:"loadingdelay",NO_AUTOHIDE:"noautohide"},Uv=500,xy=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;function Oy(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, ${Uv}ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${h.MEDIA_LOADING}]:not([${h.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${h.MEDIA_LOADING}]:not([${h.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${h.MEDIA_LOADING}]:not([${h.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${xy}</slot>
    <div id="status" role="status" aria-live="polite">${L("media loading")}</div>
  `}var ju=class extends f.HTMLElement{constructor(){if(super(),Yh(this,Kt,void 0),Yh(this,Ds,Uv),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=rt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[z.MEDIA_CONTROLLER,h.MEDIA_PAUSED,h.MEDIA_LOADING,$n.LOADING_DELAY]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===$n.LOADING_DELAY&&t!==i?this.loadingDelay=Number(i):e===z.MEDIA_CONTROLLER&&(t&&((r=(a=Ir(this,Kt))==null?void 0:a.unassociateElement)==null||r.call(a,this),Rr(this,Kt,null)),i&&this.isConnected&&(Rr(this,Kt,(n=this.getRootNode())==null?void 0:n.getElementById(i)),(o=(s=Ir(this,Kt))==null?void 0:s.associateElement)==null||o.call(s,this)))}connectedCallback(){var e,t,i;const a=this.getAttribute(z.MEDIA_CONTROLLER);a&&(Rr(this,Kt,(e=this.getRootNode())==null?void 0:e.getElementById(a)),(i=(t=Ir(this,Kt))==null?void 0:t.associateElement)==null||i.call(t,this))}disconnectedCallback(){var e,t;(t=(e=Ir(this,Kt))==null?void 0:e.unassociateElement)==null||t.call(e,this),Rr(this,Kt,null)}get loadingDelay(){return Ir(this,Ds)}set loadingDelay(e){Rr(this,Ds,e);const{style:t}=Ie(this.shadowRoot,":host");t.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return Y(this,h.MEDIA_PAUSED)}set mediaPaused(e){G(this,h.MEDIA_PAUSED,e)}get mediaLoading(){return Y(this,h.MEDIA_LOADING)}set mediaLoading(e){G(this,h.MEDIA_LOADING,e)}get mediaController(){return le(this,z.MEDIA_CONTROLLER)}set mediaController(e){de(this,z.MEDIA_CONTROLLER,e)}get noAutohide(){return Y(this,$n.NO_AUTOHIDE)}set noAutohide(e){G(this,$n.NO_AUTOHIDE,e)}};Kt=new WeakMap;Ds=new WeakMap;ju.shadowRootOptions={mode:"open"};ju.getTemplateHTML=Oy;f.customElements.get("media-loading-indicator")||f.customElements.define("media-loading-indicator",ju);var Ny=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,Gh=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,Py=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`;function Uy(e){return`
    <style>
      :host(:not([${h.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${h.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${h.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${h.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${h.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${h.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${h.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${Ny}</slot>
      <slot name="low">${Gh}</slot>
      <slot name="medium">${Gh}</slot>
      <slot name="high">${Py}</slot>
    </slot>
  `}function Hy(){return`
    <slot name="tooltip-mute">${L("Mute")}</slot>
    <slot name="tooltip-unmute">${L("Unmute")}</slot>
  `}var $h=e=>{const t=e.mediaVolumeLevel==="off"?L("unmute"):L("mute");e.setAttribute("aria-label",t)},Xu=class extends xe{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),$h(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===h.MEDIA_VOLUME_LEVEL&&$h(this)}get mediaVolumeLevel(){return le(this,h.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){de(this,h.MEDIA_VOLUME_LEVEL,e)}handleClick(){const e=this.mediaVolumeLevel==="off"?I.MEDIA_UNMUTE_REQUEST:I.MEDIA_MUTE_REQUEST;this.dispatchEvent(new f.CustomEvent(e,{composed:!0,bubbles:!0}))}};Xu.getSlotTemplateHTML=Uy;Xu.getTooltipContentHTML=Hy;f.customElements.get("media-mute-button")||f.customElements.define("media-mute-button",Xu);var Qh=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`;function By(e){return`
    <style>
      :host([${h.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${h.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${h.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${h.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${Qh}</slot>
      <slot name="exit">${Qh}</slot>
    </slot>
  `}function Wy(){return`
    <slot name="tooltip-enter">${L("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${L("Exit picture in picture mode")}</slot>
  `}var zh=e=>{const t=e.mediaIsPip?L("exit picture in picture mode"):L("enter picture in picture mode");e.setAttribute("aria-label",t)},Ju=class extends xe{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_IS_PIP,h.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),zh(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===h.MEDIA_IS_PIP&&zh(this)}get mediaPipUnavailable(){return le(this,h.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){de(this,h.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return Y(this,h.MEDIA_IS_PIP)}set mediaIsPip(e){G(this,h.MEDIA_IS_PIP,e)}handleClick(){const e=this.mediaIsPip?I.MEDIA_EXIT_PIP_REQUEST:I.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new f.CustomEvent(e,{composed:!0,bubbles:!0}))}};Ju.getSlotTemplateHTML=By;Ju.getTooltipContentHTML=Wy;f.customElements.get("media-pip-button")||f.customElements.define("media-pip-button",Ju);var Fy=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ya=(e,t,i)=>(Fy(e,t,"read from private field"),i?i.call(e):t.get(e)),Ky=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ki,Sl={RATES:"rates"},Hv=[1,1.2,1.5,1.7,2];function Vy(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||1}x</slot>
  `}function qy(){return L("Playback rate")}var ec=class extends xe{constructor(){var e;super(),Ky(this,ki,new Pu(this,Sl.RATES,{defaultValue:Hv})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${(e=this.mediaPlaybackRate)!=null?e:1}x`}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PLAYBACK_RATE,Sl.RATES]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===Sl.RATES&&(ya(this,ki).value=i),e===h.MEDIA_PLAYBACK_RATE){const a=i?+i:NaN,r=Number.isNaN(a)?1:a;this.container.innerHTML=`${r}x`,this.setAttribute("aria-label",L("Playback rate {playbackRate}",{playbackRate:r}))}}get rates(){return ya(this,ki)}set rates(e){e?Array.isArray(e)?ya(this,ki).value=e.join(" "):typeof e=="string"&&(ya(this,ki).value=e):ya(this,ki).value=""}get mediaPlaybackRate(){return oe(this,h.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){ve(this,h.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,t;const i=Array.from(ya(this,ki).values(),n=>+n).sort((n,s)=>n-s),a=(t=(e=i.find(n=>n>this.mediaPlaybackRate))!=null?e:i[0])!=null?t:1,r=new f.CustomEvent(I.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(r)}};ki=new WeakMap;ec.getSlotTemplateHTML=Vy;ec.getTooltipContentHTML=qy;f.customElements.get("media-playback-rate-button")||f.customElements.define("media-playback-rate-button",ec);var Yy=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,Gy=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`;function $y(e){return`
    <style>
      :host([${h.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${h.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${h.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${h.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${Yy}</slot>
      <slot name="pause">${Gy}</slot>
    </slot>
  `}function Qy(){return`
    <slot name="tooltip-play">${L("Play")}</slot>
    <slot name="tooltip-pause">${L("Pause")}</slot>
  `}var Zh=e=>{const t=e.mediaPaused?L("play"):L("pause");e.setAttribute("aria-label",t)},tc=class extends xe{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PAUSED,h.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),Zh(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),(e===h.MEDIA_PAUSED||e===h.MEDIA_LANG)&&Zh(this)}get mediaPaused(){return Y(this,h.MEDIA_PAUSED)}set mediaPaused(e){G(this,h.MEDIA_PAUSED,e)}handleClick(){const e=this.mediaPaused?I.MEDIA_PLAY_REQUEST:I.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new f.CustomEvent(e,{composed:!0,bubbles:!0}))}};tc.getSlotTemplateHTML=$y;tc.getTooltipContentHTML=Qy;f.customElements.get("media-play-button")||f.customElements.define("media-play-button",tc);var Dt={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"};function zy(e){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `}var Zy=e=>{e.style.removeProperty("background-image")},jy=(e,t)=>{e.style["background-image"]=`url('${t}')`},ic=class extends f.HTMLElement{static get observedAttributes(){return[Dt.PLACEHOLDER_SRC,Dt.SRC]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=rt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,t,i){e===Dt.SRC&&(i==null?this.image.removeAttribute(Dt.SRC):this.image.setAttribute(Dt.SRC,i)),e===Dt.PLACEHOLDER_SRC&&(i==null?Zy(this.image):jy(this.image,i))}get placeholderSrc(){return le(this,Dt.PLACEHOLDER_SRC)}set placeholderSrc(e){de(this,Dt.SRC,e)}get src(){return le(this,Dt.SRC)}set src(e){de(this,Dt.SRC,e)}};ic.shadowRootOptions={mode:"open"};ic.getTemplateHTML=zy;f.customElements.get("media-poster-image")||f.customElements.define("media-poster-image",ic);var Bv=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Xy=(e,t,i)=>(Bv(e,t,"read from private field"),i?i.call(e):t.get(e)),Jy=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},eT=(e,t,i,a)=>(Bv(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),Ms,tT=class extends Hi{constructor(){super(),Jy(this,Ms,void 0),eT(this,Ms,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PREVIEW_CHAPTER,h.MEDIA_LANG]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),(e===h.MEDIA_PREVIEW_CHAPTER||e===h.MEDIA_LANG)&&i!==t&&i!=null)if(Xy(this,Ms).textContent=i,i!==""){const a=L("chapter: {chapterName}",{chapterName:i});this.setAttribute("aria-valuetext",a)}else this.removeAttribute("aria-valuetext")}get mediaPreviewChapter(){return le(this,h.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){de(this,h.MEDIA_PREVIEW_CHAPTER,e)}};Ms=new WeakMap;f.customElements.get("media-preview-chapter-display")||f.customElements.define("media-preview-chapter-display",tT);var Wv=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Qn=(e,t,i)=>(Wv(e,t,"read from private field"),i?i.call(e):t.get(e)),iT=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},zn=(e,t,i,a)=>(Wv(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),Vt;function aT(e){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `}var rl=class extends f.HTMLElement{constructor(){if(super(),iT(this,Vt,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=rt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[z.MEDIA_CONTROLLER,h.MEDIA_PREVIEW_IMAGE,h.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,t,i;const a=this.getAttribute(z.MEDIA_CONTROLLER);a&&(zn(this,Vt,(e=this.getRootNode())==null?void 0:e.getElementById(a)),(i=(t=Qn(this,Vt))==null?void 0:t.associateElement)==null||i.call(t,this))}disconnectedCallback(){var e,t;(t=(e=Qn(this,Vt))==null?void 0:e.unassociateElement)==null||t.call(e,this),zn(this,Vt,null)}attributeChangedCallback(e,t,i){var a,r,n,s,o;[h.MEDIA_PREVIEW_IMAGE,h.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===z.MEDIA_CONTROLLER&&(t&&((r=(a=Qn(this,Vt))==null?void 0:a.unassociateElement)==null||r.call(a,this),zn(this,Vt,null)),i&&this.isConnected&&(zn(this,Vt,(n=this.getRootNode())==null?void 0:n.getElementById(i)),(o=(s=Qn(this,Vt))==null?void 0:s.associateElement)==null||o.call(s,this)))}get mediaPreviewImage(){return le(this,h.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){de(this,h.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){const e=this.getAttribute(h.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(t=>+t)}set mediaPreviewCoords(e){if(!e){this.removeAttribute(h.MEDIA_PREVIEW_COORDS);return}this.setAttribute(h.MEDIA_PREVIEW_COORDS,e.join(" "))}update(){const e=this.mediaPreviewCoords,t=this.mediaPreviewImage;if(!(e&&t))return;const[i,a,r,n]=e,s=t.split("#")[0],{maxWidth:o,maxHeight:l,minWidth:m,minHeight:p}=getComputedStyle(this),d=Math.min(parseInt(o)/r,parseInt(l)/n),u=Math.max(parseInt(m)/r,parseInt(p)/n),c=d<1,v=c?d:u>1?u:1,{style:b}=Ie(this.shadowRoot,":host"),E=Ie(this.shadowRoot,"img").style,g=this.shadowRoot.querySelector("img"),T=c?"min":"max";b.setProperty(`${T}-width`,"initial","important"),b.setProperty(`${T}-height`,"initial","important"),b.width=`${r*v}px`,b.height=`${n*v}px`;const y=()=>{E.width=`${this.imgWidth*v}px`,E.height=`${this.imgHeight*v}px`,E.display="block"};g.src!==s&&(g.onload=()=>{this.imgWidth=g.naturalWidth,this.imgHeight=g.naturalHeight,y()},g.src=s,y()),y(),E.transform=`translate(-${i*v}px, -${a*v}px)`}};Vt=new WeakMap;rl.shadowRootOptions={mode:"open"};rl.getTemplateHTML=aT;f.customElements.get("media-preview-thumbnail")||f.customElements.define("media-preview-thumbnail",rl);var jh=rl,Fv=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Xh=(e,t,i)=>(Fv(e,t,"read from private field"),i?i.call(e):t.get(e)),rT=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nT=(e,t,i,a)=>(Fv(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),Zr,sT=class extends Hi{constructor(){super(),rT(this,Zr,void 0),nT(this,Zr,this.shadowRoot.querySelector("slot")),Xh(this,Zr).textContent=Ni(0)}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===h.MEDIA_PREVIEW_TIME&&i!=null&&(Xh(this,Zr).textContent=Ni(parseFloat(i)))}get mediaPreviewTime(){return oe(this,h.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){ve(this,h.MEDIA_PREVIEW_TIME,e)}};Zr=new WeakMap;f.customElements.get("media-preview-time-display")||f.customElements.define("media-preview-time-display",sT);var Ta={SEEK_OFFSET:"seekoffset"},wl=30,oT=e=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${e}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`;function lT(e,t){return`
    <slot name="icon">${oT(t.seekOffset)}</slot>
  `}function dT(){return L("Seek backward")}var uT=0,ac=class extends xe{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_CURRENT_TIME,Ta.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=oe(this,Ta.SEEK_OFFSET,wl)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===Ta.SEEK_OFFSET&&(this.seekOffset=oe(this,Ta.SEEK_OFFSET,wl))}get seekOffset(){return oe(this,Ta.SEEK_OFFSET,wl)}set seekOffset(e){ve(this,Ta.SEEK_OFFSET,e),this.setAttribute("aria-label",L("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),$p(Qp(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return oe(this,h.MEDIA_CURRENT_TIME,uT)}set mediaCurrentTime(e){ve(this,h.MEDIA_CURRENT_TIME,e)}handleClick(){const e=Math.max(this.mediaCurrentTime-this.seekOffset,0),t=new f.CustomEvent(I.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}};ac.getSlotTemplateHTML=lT;ac.getTooltipContentHTML=dT;f.customElements.get("media-seek-backward-button")||f.customElements.define("media-seek-backward-button",ac);var Aa={SEEK_OFFSET:"seekoffset"},Il=30,cT=e=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${e}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`;function hT(e,t){return`
    <slot name="icon">${cT(t.seekOffset)}</slot>
  `}function mT(){return L("Seek forward")}var pT=0,rc=class extends xe{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_CURRENT_TIME,Aa.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=oe(this,Aa.SEEK_OFFSET,Il)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===Aa.SEEK_OFFSET&&(this.seekOffset=oe(this,Aa.SEEK_OFFSET,Il))}get seekOffset(){return oe(this,Aa.SEEK_OFFSET,Il)}set seekOffset(e){ve(this,Aa.SEEK_OFFSET,e),this.setAttribute("aria-label",L("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),$p(Qp(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return oe(this,h.MEDIA_CURRENT_TIME,pT)}set mediaCurrentTime(e){ve(this,h.MEDIA_CURRENT_TIME,e)}handleClick(){const e=this.mediaCurrentTime+this.seekOffset,t=new f.CustomEvent(I.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}};rc.getSlotTemplateHTML=hT;rc.getTooltipContentHTML=mT;f.customElements.get("media-seek-forward-button")||f.customElements.define("media-seek-forward-button",rc);var Kv=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Rl=(e,t,i)=>(Kv(e,t,"read from private field"),i?i.call(e):t.get(e)),vT=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},fT=(e,t,i,a)=>(Kv(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),Oa,Gi={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},Jh=[...Object.values(Gi),h.MEDIA_CURRENT_TIME,h.MEDIA_DURATION,h.MEDIA_SEEKABLE],em=["Enter"," "],ET="&nbsp;/&nbsp;",Cd=(e,{timesSep:t=ET}={})=>{var i,a;const r=(i=e.mediaCurrentTime)!=null?i:0,[,n]=(a=e.mediaSeekable)!=null?a:[];let s=0;Number.isFinite(e.mediaDuration)?s=e.mediaDuration:Number.isFinite(n)&&(s=n);const o=e.remaining?Ni(0-(s-r)):Ni(r);return e.showDuration?`${o}${t}${Ni(s)}`:o},_T="video not loaded, unknown time.",gT=e=>{var t;const i=e.mediaCurrentTime,[,a]=(t=e.mediaSeekable)!=null?t:[];let r=null;if(Number.isFinite(e.mediaDuration)?r=e.mediaDuration:Number.isFinite(a)&&(r=a),i==null||r===null){e.setAttribute("aria-valuetext",_T);return}const n=e.remaining?dn(0-(r-i)):dn(i);if(!e.showDuration){e.setAttribute("aria-valuetext",n);return}const s=`${n} of ${dn(r)}`;e.setAttribute("aria-valuetext",s)};function bT(e,t){return`
    <slot>${Cd(t)}</slot>
  `}var Vv=class extends Hi{constructor(){super(),vT(this,Oa,void 0),fT(this,Oa,this.shadowRoot.querySelector("slot")),Rl(this,Oa).innerHTML=`${Cd(this)}`}static get observedAttributes(){return[...super.observedAttributes,...Jh,"disabled"]}connectedCallback(){const{style:e}=Ie(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",L("playback time"));const t=i=>{const{key:a}=i;if(!em.includes(a)){this.removeEventListener("keyup",t);return}this.toggleTimeDisplay()};this.addEventListener("keydown",i=>{const{metaKey:a,altKey:r,key:n}=i;if(a||r||!em.includes(n)){this.removeEventListener("keyup",t);return}this.addEventListener("keyup",t)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(e,t,i){Jh.includes(e)?this.update():e==="disabled"&&i!==t&&(i==null?this.enable():this.disable()),super.attributeChangedCallback(e,t,i)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return Y(this,Gi.REMAINING)}set remaining(e){G(this,Gi.REMAINING,e)}get showDuration(){return Y(this,Gi.SHOW_DURATION)}set showDuration(e){G(this,Gi.SHOW_DURATION,e)}get noToggle(){return Y(this,Gi.NO_TOGGLE)}set noToggle(e){G(this,Gi.NO_TOGGLE,e)}get mediaDuration(){return oe(this,h.MEDIA_DURATION)}set mediaDuration(e){ve(this,h.MEDIA_DURATION,e)}get mediaCurrentTime(){return oe(this,h.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){ve(this,h.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){const e=this.getAttribute(h.MEDIA_SEEKABLE);if(e)return e.split(":").map(t=>+t)}set mediaSeekable(e){if(e==null){this.removeAttribute(h.MEDIA_SEEKABLE);return}this.setAttribute(h.MEDIA_SEEKABLE,e.join(":"))}update(){const e=Cd(this);gT(this),e!==Rl(this,Oa).innerHTML&&(Rl(this,Oa).innerHTML=e)}};Oa=new WeakMap;Vv.getSlotTemplateHTML=bT;f.customElements.get("media-time-display")||f.customElements.define("media-time-display",Vv);var qv=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Le=(e,t,i)=>(qv(e,t,"read from private field"),i?i.call(e):t.get(e)),Mt=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Je=(e,t,i,a)=>(qv(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),yT=(e,t,i,a)=>({set _(r){Je(e,t,r,i)},get _(){return Le(e,t,a)}}),Na,xs,Pa,jr,Os,Ns,Ps,Ua,$i,Us,TT=class{constructor(e,t,i){Mt(this,Na,void 0),Mt(this,xs,void 0),Mt(this,Pa,void 0),Mt(this,jr,void 0),Mt(this,Os,void 0),Mt(this,Ns,void 0),Mt(this,Ps,void 0),Mt(this,Ua,void 0),Mt(this,$i,0),Mt(this,Us,(a=performance.now())=>{Je(this,$i,requestAnimationFrame(Le(this,Us))),Je(this,jr,performance.now()-Le(this,Pa));const r=1e3/this.fps;if(Le(this,jr)>r){Je(this,Pa,a-Le(this,jr)%r);const n=1e3/((a-Le(this,xs))/++yT(this,Os)._),s=(a-Le(this,Ns))/1e3/this.duration;let o=Le(this,Ps)+s*this.playbackRate;o-Le(this,Na).valueAsNumber>0?Je(this,Ua,this.playbackRate/this.duration/n):(Je(this,Ua,.995*Le(this,Ua)),o=Le(this,Na).valueAsNumber+Le(this,Ua)),this.callback(o)}}),Je(this,Na,e),this.callback=t,this.fps=i}start(){Le(this,$i)===0&&(Je(this,Pa,performance.now()),Je(this,xs,Le(this,Pa)),Je(this,Os,0),Le(this,Us).call(this))}stop(){Le(this,$i)!==0&&(cancelAnimationFrame(Le(this,$i)),Je(this,$i,0))}update({start:e,duration:t,playbackRate:i}){const a=e-Le(this,Na).valueAsNumber,r=Math.abs(t-this.duration);(a>0||a<-.03||r>=.5)&&this.callback(e),Je(this,Ps,e),Je(this,Ns,performance.now()),this.duration=t,this.playbackRate=i}};Na=new WeakMap;xs=new WeakMap;Pa=new WeakMap;jr=new WeakMap;Os=new WeakMap;Ns=new WeakMap;Ps=new WeakMap;Ua=new WeakMap;$i=new WeakMap;Us=new WeakMap;var nc=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},fe=(e,t,i)=>(nc(e,t,"read from private field"),i?i.call(e):t.get(e)),Se=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lt=(e,t,i,a)=>(nc(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),Ke=(e,t,i)=>(nc(e,t,"access private method"),i),Ha,ua,wo,hn,Io,Hs,Sn,wn,Ba,Wa,Fa,Xr,sc,Yv,Ld,Ro,oc,Co,lc,Lo,dc,Dd,Gv,In,Do,Md,$v,AT="video not loaded, unknown time.",kT=e=>{const t=e.range,i=dn(+Qv(e)),a=dn(+e.mediaSeekableEnd),r=i&&a?`${i} of ${a}`:AT;t.setAttribute("aria-valuetext",r)};function ST(e){return`
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${h.MEDIA_PREVIEW_IMAGE}], [${h.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${h.MEDIA_PREVIEW_IMAGE}], [${h.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${h.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${h.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${h.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${h.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${h.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${h.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${h.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${h.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${h.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${h.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${h.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${h.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${jh.shadowRootOptions.mode}">
            ${jh.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `}var Zn=(e,t=e.mediaCurrentTime)=>{const i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;if(Number.isNaN(a))return 0;const r=(t-i)/(a-i);return Math.max(0,Math.min(r,1))},Qv=(e,t=e.range.valueAsNumber)=>{const i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:t*(a-i)+i},uc=class extends gr{constructor(){super(),Se(this,Fa),Se(this,sc),Se(this,Ro),Se(this,Co),Se(this,Lo),Se(this,Dd),Se(this,In),Se(this,Md),Se(this,Ha,void 0),Se(this,ua,void 0),Se(this,wo,void 0),Se(this,hn,void 0),Se(this,Io,void 0),Se(this,Hs,void 0),Se(this,Sn,void 0),Se(this,wn,void 0),Se(this,Ba,void 0),Se(this,Wa,void 0),Se(this,Ld,t=>{this.dragging||(Lu(t)&&(this.range.valueAsNumber=t),fe(this,Wa)||this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),lt(this,wo,this.shadowRoot.querySelectorAll('[part~="box"]')),lt(this,Io,this.shadowRoot.querySelector('[part~="preview-box"]')),lt(this,Hs,this.shadowRoot.querySelector('[part~="current-box"]'));const e=getComputedStyle(this);lt(this,Sn,parseInt(e.getPropertyValue("--media-box-padding-left"))),lt(this,wn,parseInt(e.getPropertyValue("--media-box-padding-right"))),lt(this,ua,new TT(this.range,fe(this,Ld),60))}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PAUSED,h.MEDIA_DURATION,h.MEDIA_SEEKABLE,h.MEDIA_CURRENT_TIME,h.MEDIA_PREVIEW_IMAGE,h.MEDIA_PREVIEW_TIME,h.MEDIA_PREVIEW_CHAPTER,h.MEDIA_BUFFERED,h.MEDIA_PLAYBACK_RATE,h.MEDIA_LOADING,h.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",L("seek")),Ke(this,Fa,Xr).call(this),lt(this,Ha,this.getRootNode()),(e=fe(this,Ha))==null||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),Ke(this,Fa,Xr).call(this),(e=fe(this,Ha))==null||e.removeEventListener("transitionstart",this),lt(this,Ha,null)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),t!=i&&(e===h.MEDIA_CURRENT_TIME||e===h.MEDIA_PAUSED||e===h.MEDIA_ENDED||e===h.MEDIA_LOADING||e===h.MEDIA_DURATION||e===h.MEDIA_SEEKABLE?(fe(this,ua).update({start:Zn(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),Ke(this,Fa,Xr).call(this),kT(this)):e===h.MEDIA_BUFFERED&&this.updateBufferedBar(),(e===h.MEDIA_DURATION||e===h.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=fe(this,Ba),this.updateBar()))}get mediaChaptersCues(){return fe(this,Ba)}set mediaChaptersCues(e){var t;lt(this,Ba,e),this.updateSegments((t=fe(this,Ba))==null?void 0:t.map(i=>({start:Zn(this,i.startTime),end:Zn(this,i.endTime)})))}get mediaPaused(){return Y(this,h.MEDIA_PAUSED)}set mediaPaused(e){G(this,h.MEDIA_PAUSED,e)}get mediaLoading(){return Y(this,h.MEDIA_LOADING)}set mediaLoading(e){G(this,h.MEDIA_LOADING,e)}get mediaDuration(){return oe(this,h.MEDIA_DURATION)}set mediaDuration(e){ve(this,h.MEDIA_DURATION,e)}get mediaCurrentTime(){return oe(this,h.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){ve(this,h.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return oe(this,h.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){ve(this,h.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){const e=this.getAttribute(h.MEDIA_BUFFERED);return e?e.split(" ").map(t=>t.split(":").map(i=>+i)):[]}set mediaBuffered(e){if(!e){this.removeAttribute(h.MEDIA_BUFFERED);return}const t=e.map(i=>i.join(":")).join(" ");this.setAttribute(h.MEDIA_BUFFERED,t)}get mediaSeekable(){const e=this.getAttribute(h.MEDIA_SEEKABLE);if(e)return e.split(":").map(t=>+t)}set mediaSeekable(e){if(e==null){this.removeAttribute(h.MEDIA_SEEKABLE);return}this.setAttribute(h.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;const[,t=this.mediaDuration]=(e=this.mediaSeekable)!=null?e:[];return t}get mediaSeekableStart(){var e;const[t=0]=(e=this.mediaSeekable)!=null?e:[];return t}get mediaPreviewImage(){return le(this,h.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){de(this,h.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return oe(this,h.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){ve(this,h.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return Y(this,h.MEDIA_ENDED)}set mediaEnded(e){G(this,h.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;const t=this.mediaBuffered;if(!t.length)return;let i;if(this.mediaEnded)i=1;else{const r=this.mediaCurrentTime,[,n=this.mediaSeekableStart]=(e=t.find(([s,o])=>s<=r&&r<=o))!=null?e:[];i=Zn(this,n)}const{style:a}=Ie(this.shadowRoot,"#buffered");a.setProperty("width",`${i*100}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;const e=Ie(this.shadowRoot,"#current-rail"),t=Ie(this.shadowRoot,'[part~="current-box"]'),i=Ke(this,Ro,oc).call(this,fe(this,Hs)),a=Ke(this,Co,lc).call(this,i,this.range.valueAsNumber),r=Ke(this,Lo,dc).call(this,i,this.range.valueAsNumber);e.style.transform=`translateX(${a})`,e.style.setProperty("--_range-width",`${i.range.width}`),t.style.setProperty("--_box-shift",`${r}`),t.style.setProperty("--_box-width",`${i.box.width}px`),t.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":Ke(this,Md,$v).call(this);break;case"pointermove":Ke(this,Dd,Gv).call(this,e);break;case"pointerup":fe(this,Wa)&&lt(this,Wa,!1);break;case"pointerdown":lt(this,Wa,!0);break;case"pointerleave":Ke(this,In,Do).call(this,null);break;case"transitionstart":Ei(e.target,this)&&setTimeout(()=>Ke(this,Fa,Xr).call(this),0);break}}};Ha=new WeakMap;ua=new WeakMap;wo=new WeakMap;hn=new WeakMap;Io=new WeakMap;Hs=new WeakMap;Sn=new WeakMap;wn=new WeakMap;Ba=new WeakMap;Wa=new WeakMap;Fa=new WeakSet;Xr=function(){Ke(this,sc,Yv).call(this)?fe(this,ua).start():fe(this,ua).stop()};sc=new WeakSet;Yv=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&zp(this)};Ld=new WeakMap;Ro=new WeakSet;oc=function(e){var t;const i=((t=this.getAttribute("bounds")?Er(this,`#${this.getAttribute("bounds")}`):this.parentElement)!=null?t:this).getBoundingClientRect(),a=this.range.getBoundingClientRect(),r=e.offsetWidth;return{box:{width:r,min:-(a.left-i.left-r/2),max:i.right-a.left-r/2},bounds:i,range:a}};Co=new WeakSet;lc=function(e,t){let i=`${t*100}%`;const{width:a,min:r,max:n}=e.box;if(!a)return i;if(Number.isNaN(r)||(i=`max(${`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`}, ${i})`),!Number.isNaN(n)){const s=`calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;i=`min(${i}, ${s})`}return i};Lo=new WeakSet;dc=function(e,t){const{width:i,min:a,max:r}=e.box,n=t*e.range.width;if(n<a+fe(this,Sn)){const s=e.range.left-e.bounds.left-fe(this,Sn);return`${n-i/2+s}px`}if(n>r-fe(this,wn)){const s=e.bounds.right-e.range.right-fe(this,wn);return`${n+i/2-s-e.range.width}px`}return 0};Dd=new WeakSet;Gv=function(e){const t=[...fe(this,wo)].some(p=>e.composedPath().includes(p));if(!this.dragging&&(t||!e.composedPath().includes(this))){Ke(this,In,Do).call(this,null);return}const i=this.mediaSeekableEnd;if(!i)return;const a=Ie(this.shadowRoot,"#preview-rail"),r=Ie(this.shadowRoot,'[part~="preview-box"]'),n=Ke(this,Ro,oc).call(this,fe(this,Io));let s=(e.clientX-n.range.left)/n.range.width;s=Math.max(0,Math.min(1,s));const o=Ke(this,Co,lc).call(this,n,s),l=Ke(this,Lo,dc).call(this,n,s);a.style.transform=`translateX(${o})`,a.style.setProperty("--_range-width",`${n.range.width}`),r.style.setProperty("--_box-shift",`${l}`),r.style.setProperty("--_box-width",`${n.box.width}px`);const m=Math.round(fe(this,hn))-Math.round(s*i);Math.abs(m)<1&&s>.01&&s<.99||(lt(this,hn,s*i),Ke(this,In,Do).call(this,fe(this,hn)))};In=new WeakSet;Do=function(e){this.dispatchEvent(new f.CustomEvent(I.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))};Md=new WeakSet;$v=function(){fe(this,ua).stop();const e=Qv(this);this.dispatchEvent(new f.CustomEvent(I.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))};uc.shadowRootOptions={mode:"open"};uc.getContainerTemplateHTML=ST;f.customElements.get("media-time-range")||f.customElements.define("media-time-range",uc);var wT=1,IT=e=>e.mediaMuted?0:e.mediaVolume,RT=e=>`${Math.round(e*100)}%`,CT=class extends gr{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_VOLUME,h.MEDIA_MUTED,h.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.addEventListener("input",()=>{const e=this.range.value,t=new f.CustomEvent(I.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)})}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",L("volume"))}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),(e===h.MEDIA_VOLUME||e===h.MEDIA_MUTED)&&(this.range.valueAsNumber=IT(this),this.range.setAttribute("aria-valuetext",RT(this.range.valueAsNumber)),this.updateBar())}get mediaVolume(){return oe(this,h.MEDIA_VOLUME,wT)}set mediaVolume(e){ve(this,h.MEDIA_VOLUME,e)}get mediaMuted(){return Y(this,h.MEDIA_MUTED)}set mediaMuted(e){G(this,h.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return le(this,h.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){de(this,h.MEDIA_VOLUME_UNAVAILABLE,e)}};f.customElements.get("media-volume-range")||f.customElements.define("media-volume-range",CT);function LT(e){return`
      <style>
        :host {
          min-width: 4ch;
          padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1rem;
          font-weight: var(--media-button-font-weight, normal);
        }

        #checked-indicator {
          display: none;
        }

        :host([${h.MEDIA_LOOP}]) #checked-indicator {
          display: block;
        }
      </style>
      
      <span id="icon">
     </span>

      <div id="checked-indicator">
        <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
          <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
        </svg>
      </div>
    `}function DT(){return L("Loop")}var cc=class extends xe{constructor(){super(...arguments),this.container=null}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_LOOP]}connectedCallback(){var e;super.connectedCallback(),this.container=((e=this.shadowRoot)==null?void 0:e.querySelector("#icon"))||null,this.container&&(this.container.textContent=L("Loop"))}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===h.MEDIA_LOOP&&this.container&&this.setAttribute("aria-checked",this.mediaLoop?"true":"false")}get mediaLoop(){return Y(this,h.MEDIA_LOOP)}set mediaLoop(e){G(this,h.MEDIA_LOOP,e)}handleClick(){const e=!this.mediaLoop,t=new f.CustomEvent(I.MEDIA_LOOP_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}};cc.getSlotTemplateHTML=LT;cc.getTooltipContentHTML=DT;f.customElements.get("media-loop-button")||f.customElements.define("media-loop-button",cc);var zv=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},V=(e,t,i)=>(zv(e,t,"read from private field"),i?i.call(e):t.get(e)),Qt=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ci=(e,t,i,a)=>(zv(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),Ka,Bs,Qi,Jr,Si,wi,Ii,zi,Va,Ws,bt,tm=1,im=0,MT=1,xT={processCallback(e,t,i){if(i){for(const[a,r]of t)if(a in i){const n=i[a];typeof n=="boolean"&&r instanceof Rt&&typeof r.element[r.attributeName]=="boolean"?r.booleanValue=n:typeof n=="function"&&r instanceof Rt?r.element[r.attributeName]=n:r.value=n}}}},nl=class extends f.DocumentFragment{constructor(e,t,i=xT){var a;super(),Qt(this,Ka,void 0),Qt(this,Bs,void 0),this.append(e.content.cloneNode(!0)),ci(this,Ka,Zv(this)),ci(this,Bs,i),(a=i.createCallback)==null||a.call(i,this,V(this,Ka),t),i.processCallback(this,V(this,Ka),t)}update(e){V(this,Bs).processCallback(this,V(this,Ka),e)}};Ka=new WeakMap;Bs=new WeakMap;var Zv=(e,t=[])=>{let i,a;for(const r of e.attributes||[])if(r.value.includes("{{")){const n=new NT;for([i,a]of rm(r.value))if(!i)n.append(a);else{const s=new Rt(e,r.name,r.namespaceURI);n.append(s),t.push([a,s])}r.value=n.toString()}for(const r of e.childNodes)if(r.nodeType===tm&&!(r instanceof HTMLTemplateElement))Zv(r,t);else{const n=r.data;if(r.nodeType===tm||n.includes("{{")){const s=[];if(n)for([i,a]of rm(n))if(!i)s.push(new Text(a));else{const o=new br(e);s.push(o),t.push([a,o])}else if(r instanceof HTMLTemplateElement){const o=new Jv(e,r);s.push(o),t.push([o.expression,o])}r.replaceWith(...s.flatMap(o=>o.replacementNodes||[o]))}}return t},am={},rm=e=>{let t="",i=0,a=am[e],r=0,n;if(a)return a;for(a=[];n=e[r];r++)n==="{"&&e[r+1]==="{"&&e[r-1]!=="\\"&&e[r+2]&&++i==1?(t&&a.push([im,t]),t="",r++):n==="}"&&e[r+1]==="}"&&e[r-1]!=="\\"&&!--i?(a.push([MT,t.trim()]),t="",r++):t+=n||"";return t&&a.push([im,(i>0?"{{":"")+t]),am[e]=a},OT=11,jv=class{get value(){return""}set value(e){}toString(){return this.value}},Xv=new WeakMap,NT=class{constructor(){Qt(this,Qi,[])}[Symbol.iterator](){return V(this,Qi).values()}get length(){return V(this,Qi).length}item(e){return V(this,Qi)[e]}append(...e){for(const t of e)t instanceof Rt&&Xv.set(t,this),V(this,Qi).push(t)}toString(){return V(this,Qi).join("")}};Qi=new WeakMap;var Rt=class extends jv{constructor(e,t,i){super(),Qt(this,zi),Qt(this,Jr,""),Qt(this,Si,void 0),Qt(this,wi,void 0),Qt(this,Ii,void 0),ci(this,Si,e),ci(this,wi,t),ci(this,Ii,i)}get attributeName(){return V(this,wi)}get attributeNamespace(){return V(this,Ii)}get element(){return V(this,Si)}get value(){return V(this,Jr)}set value(e){V(this,Jr)!==e&&(ci(this,Jr,e),!V(this,zi,Va)||V(this,zi,Va).length===1?e==null?V(this,Si).removeAttributeNS(V(this,Ii),V(this,wi)):V(this,Si).setAttributeNS(V(this,Ii),V(this,wi),e):V(this,Si).setAttributeNS(V(this,Ii),V(this,wi),V(this,zi,Va).toString()))}get booleanValue(){return V(this,Si).hasAttributeNS(V(this,Ii),V(this,wi))}set booleanValue(e){if(!V(this,zi,Va)||V(this,zi,Va).length===1)this.value=e?"":null;else throw new DOMException("Value is not fully templatized")}};Jr=new WeakMap;Si=new WeakMap;wi=new WeakMap;Ii=new WeakMap;zi=new WeakSet;Va=function(){return Xv.get(this)};var br=class extends jv{constructor(e,t){super(),Qt(this,Ws,void 0),Qt(this,bt,void 0),ci(this,Ws,e),ci(this,bt,t?[...t]:[new Text])}get replacementNodes(){return V(this,bt)}get parentNode(){return V(this,Ws)}get nextSibling(){return V(this,bt)[V(this,bt).length-1].nextSibling}get previousSibling(){return V(this,bt)[0].previousSibling}get value(){return V(this,bt).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){const t=e.flat().flatMap(i=>i==null?[new Text]:i.forEach?[...i]:i.nodeType===OT?[...i.childNodes]:i.nodeType?[i]:[new Text(i)]);t.length||t.push(new Text),ci(this,bt,PT(V(this,bt)[0].parentNode,V(this,bt),t,this.nextSibling))}};Ws=new WeakMap;bt=new WeakMap;var Jv=class extends br{constructor(e,t){const i=t.getAttribute("directive")||t.getAttribute("type");let a=t.getAttribute("expression")||t.getAttribute(i)||"";a.startsWith("{{")&&(a=a.trim().slice(2,-2).trim()),super(e),this.expression=a,this.template=t,this.directive=i}};function PT(e,t,i,a=null){let r=0,n,s,o,l=i.length,m=t.length;for(;r<l&&r<m&&t[r]==i[r];)r++;for(;r<l&&r<m&&i[l-1]==t[m-1];)a=i[--m,--l];if(r==m)for(;r<l;)e.insertBefore(i[r++],a);if(r==l)for(;r<m;)e.removeChild(t[r++]);else{for(n=t[r];r<l;)o=i[r++],s=n?n.nextSibling:a,n==o?n=s:r<l&&i[r]==s?(e.replaceChild(o,n),n=s):e.insertBefore(o,n);for(;n!=a;)s=n.nextSibling,e.removeChild(n),n=s}return i}ti();var nm={string:e=>String(e)},ef=class{constructor(e){this.template=e,this.state=void 0}},aa=new WeakMap,ra=new WeakMap,xd={partial:(e,t)=>{t[e.expression]=new ef(e.template)},if:(e,t)=>{var i;if(tf(e.expression,t))if(aa.get(e)!==e.template){aa.set(e,e.template);const a=new nl(e.template,t,hc);e.replace(a),ra.set(e,a)}else(i=ra.get(e))==null||i.update(t);else e.replace(""),aa.delete(e),ra.delete(e)}},UT=Object.keys(xd),hc={processCallback(e,t,i){var a,r;if(i)for(const[n,s]of t){if(s instanceof Jv){if(!s.directive){const l=UT.find(m=>s.template.hasAttribute(m));l&&(s.directive=l,s.expression=s.template.getAttribute(l))}(a=xd[s.directive])==null||a.call(xd,s,i);continue}let o=tf(n,i);if(o instanceof ef){aa.get(s)!==o.template?(aa.set(s,o.template),o=new nl(o.template,o.state,hc),s.value=o,ra.set(s,o)):(r=ra.get(s))==null||r.update(o.state);continue}o?(s instanceof Rt&&s.attributeName.startsWith("aria-")&&(o=String(o)),s instanceof Rt?typeof o=="boolean"?s.booleanValue=o:typeof o=="function"?s.element[s.attributeName]=o:s.value=o:(s.value=o,aa.delete(s),ra.delete(s))):s instanceof Rt?s.value=void 0:(s.value=void 0,aa.delete(s),ra.delete(s))}}},sm={"!":e=>!e,"!!":e=>!!e,"==":(e,t)=>e==t,"!=":(e,t)=>e!=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,"??":(e,t)=>e!=null?e:t,"|":(e,t)=>{var i;return(i=nm[t])==null?void 0:i.call(nm,e)}};function HT(e){return BT(e,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:t})=>t!=="ws")}function tf(e,t={}){var i,a,r,n,s,o,l;const m=HT(e);if(m.length===0||m.some(({type:p})=>!p))return Cr(e);if(((i=m[0])==null?void 0:i.token)===">"){const p=t[(a=m[1])==null?void 0:a.token];if(!p)return Cr(e);const d=D({},t);p.state=d;const u=m.slice(2);for(let c=0;c<u.length;c+=3){const v=(r=u[c])==null?void 0:r.token,b=(n=u[c+1])==null?void 0:n.token,E=(s=u[c+2])==null?void 0:s.token;v&&b==="="&&(d[v]=Lr(E,t))}return p}if(m.length===1)return jn(m[0])?Lr(m[0].token,t):Cr(e);if(m.length===2){const p=sm[(o=m[0])==null?void 0:o.token];return!p||!jn(m[1])?Cr(e):p(Lr(m[1].token,t))}if(m.length===3){const p=(l=m[1])==null?void 0:l.token,d=sm[p];if(!d||!jn(m[0])||!jn(m[2]))return Cr(e);const u=Lr(m[0].token,t);return p==="|"?d(u,m[2].token):d(u,Lr(m[2].token,t))}}function Cr(e){return console.warn(`Warning: invalid expression \`${e}\``),!1}function jn({type:e}){return["number","boolean","string","param"].includes(e)}function Lr(e,t){const i=e[0],a=e.slice(-1);return e==="true"||e==="false"?e==="true":i===a&&["'",'"'].includes(i)?e.slice(1,-1):Bp(e)?parseFloat(e):t[e]}function BT(e,t){let i,a,r;const n=[];for(;e;){r=null,i=e.length;for(const s in t)a=t[s].exec(e),a&&a.index<i&&(r={token:a[0],type:s,matches:a.slice(1)},i=a.index);i&&n.push({token:e.substr(0,i),type:void 0}),r&&n.push(r),e=e.substr(i+(r?r.token.length:0))}return n}var mc=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Od=(e,t,i)=>(mc(e,t,"read from private field"),i?i.call(e):t.get(e)),Dr=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},na=(e,t,i,a)=>(mc(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),Cl=(e,t,i)=>(mc(e,t,"access private method"),i),rr,Fs,nr,Nd,af,Ks,Pd,Ll={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},rf=ke.createElement("template");rf.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;var sl=class extends f.HTMLElement{constructor(){super(),Dr(this,Nd),Dr(this,Ks),Dr(this,rr,void 0),Dr(this,Fs,void 0),Dr(this,nr,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer());const e=new MutationObserver(t=>{var i;this.mediaController&&!((i=this.mediaController)!=null&&i.breakpointsComputed)||t.some(a=>{const r=a.target;return r===this?!0:r.localName!=="media-controller"?!1:!!(Ll[a.attributeName]||a.attributeName.startsWith("breakpoint"))})&&this.render()});e.observe(this,{attributes:!0}),e.observe(this.renderRoot,{attributes:!0,subtree:!0}),this.addEventListener(vi.BREAKPOINTS_COMPUTED,this.render),Cl(this,Nd,af).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return(e=Od(this,rr))!=null?e:this.constructor.template}set template(e){if(e===null){this.removeAttribute("template");return}typeof e=="string"?this.setAttribute("template",e):e instanceof HTMLTemplateElement&&(na(this,rr,e),na(this,nr,null),this.createRenderer())}get props(){var e,t,i;const a=[...Array.from((t=(e=this.mediaController)==null?void 0:e.attributes)!=null?t:[]).filter(({name:n})=>Ll[n]||n.startsWith("breakpoint")),...Array.from(this.attributes)],r={};for(const n of a){const s=(i=Ll[n.name])!=null?i:K0(n.name);let{value:o}=n;o!=null?(Bp(o)&&(o=parseFloat(o)),r[s]=o===""?!0:o):r[s]=!1}return r}attributeChangedCallback(e,t,i){e==="template"&&t!=i&&Cl(this,Ks,Pd).call(this)}connectedCallback(){Cl(this,Ks,Pd).call(this)}createRenderer(){this.template instanceof HTMLTemplateElement&&this.template!==Od(this,Fs)&&(na(this,Fs,this.template),this.renderer=new nl(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(rf.content.cloneNode(!0),this.renderer))}render(){var e;(e=this.renderer)==null||e.update(this.props)}};rr=new WeakMap;Fs=new WeakMap;nr=new WeakMap;Nd=new WeakSet;af=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){const t=this[e];delete this[e],this[e]=t}};Ks=new WeakSet;Pd=function(){var e;const t=this.getAttribute("template");if(!t||t===Od(this,nr))return;const i=this.getRootNode(),a=(e=i==null?void 0:i.getElementById)==null?void 0:e.call(i,t);if(a){na(this,nr,t),na(this,rr,a),this.createRenderer();return}WT(t)&&(na(this,nr,t),FT(t).then(r=>{const n=ke.createElement("template");n.innerHTML=r,na(this,rr,n),this.createRenderer()}).catch(console.error))};sl.observedAttributes=["template"];sl.processor=hc;function WT(e){if(!/^(\/|\.\/|https?:\/\/)/.test(e))return!1;const t=/^https?:\/\//.test(e)?void 0:location.origin;try{new URL(e,t)}catch(i){return!1}return!0}function FT(e){return Ud.apply(this,arguments)}function Ud(){return Ud=F(function*(e){const t=yield fetch(e);if(t.status!==200)throw new Error(`Failed to load resource: the server responded with a status of ${t.status}`);return t.text()}),Ud.apply(this,arguments)}f.customElements.get("media-theme")||f.customElements.define("media-theme",sl);function KT({anchor:e,floating:t,placement:i}){const{x:a,y:r}=YT(VT({anchor:e,floating:t}),i);return{x:a,y:r}}function VT({anchor:e,floating:t}){return{anchor:qT(e,t.offsetParent),floating:{x:0,y:0,width:t.offsetWidth,height:t.offsetHeight}}}function qT(e,t){var i;const a=e.getBoundingClientRect(),r=(i=t==null?void 0:t.getBoundingClientRect())!=null?i:{x:0,y:0};return{x:a.x-r.x,y:a.y-r.y,width:a.width,height:a.height}}function YT({anchor:e,floating:t},i){const a=GT(i)==="x"?"y":"x",r=a==="y"?"height":"width",n=nf(i),s=e.x+e.width/2-t.width/2,o=e.y+e.height/2-t.height/2,l=e[r]/2-t[r]/2;let m;switch(n){case"top":m={x:s,y:e.y-t.height};break;case"bottom":m={x:s,y:e.y+e.height};break;case"right":m={x:e.x+e.width,y:o};break;case"left":m={x:e.x-t.width,y:o};break;default:m={x:e.x,y:e.y}}switch(i.split("-")[1]){case"start":m[a]-=l;break;case"end":m[a]+=l;break}return m}function nf(e){return e.split("-")[0]}function GT(e){return["top","bottom"].includes(nf(e))?"y":"x"}var $T=["action","relatedTarget"],QT=["newState","oldState"],pc=class extends Event{constructor(e){let{action:t="auto",relatedTarget:i}=e,a=xn(e,$T);super("invoke",a),this.action=t,this.relatedTarget=i}},zT=class extends Event{constructor(e){let{newState:t,oldState:i}=e,a=xn(e,QT);super("toggle",a),this.newState=t,this.oldState=i}},vc=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Q=(e,t,i)=>(vc(e,t,"read from private field"),i?i.call(e):t.get(e)),ie=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},qt=(e,t,i,a)=>(vc(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ae=(e,t,i)=>(vc(e,t,"access private method"),i),Yt,ca,Ui,Vs,qs,ha,Rn,Hd,sf,Mo,fc,xo,Ys,Bd,Wd,of,Fd,lf,Kd,df,sr,or,lr,Cn,Oo,Ec,Vd,uf,_c,cf,qd,hf,gc,mf,Yd,pf,Gd,vf,mn,No,$d,ff,pn,Po,Gs,Qd;function pr({type:e,text:t,value:i,checked:a}){const r=ke.createElement("media-chrome-menu-item");r.type=e!=null?e:"",r.part.add("menu-item"),e&&r.part.add(e),r.value=i,r.checked=a;const n=ke.createElement("span");return n.textContent=t,r.append(n),r}function ma(e,t){let i=e.querySelector(`:scope > [slot="${t}"]`);if((i==null?void 0:i.nodeName)=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i=i.cloneNode(!0),i;const a=e.shadowRoot.querySelector(`[name="${t}"] > svg`);return a?a.cloneNode(!0):""}function ZT(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
        border-radius: var(--media-menu-border-radius);
        border: var(--media-menu-border, none);
        display: var(--media-menu-display, inline-flex) !important;
        
        transition: var(--media-menu-transition-in,
          visibility 0s,
          opacity .2s ease-out,
          transform .15s ease-out,
          left .2s ease-in-out,
          min-width .2s ease-in-out,
          min-height .2s ease-in-out
        ) !important;
        
        visibility: var(--media-menu-visibility, visible);
        opacity: var(--media-menu-opacity, 1);
        max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
        transform: var(--media-menu-transform-in, translateY(0) scale(1));
        flex-direction: column;
        
        min-height: 0;
        position: relative;
        bottom: var(--_menu-bottom);
        box-sizing: border-box;
      } 

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([hidden]) {
        transition: var(--media-menu-transition-out,
          visibility .15s ease-in,
          opacity .15s ease-in,
          transform .15s ease-in
        ) !important;
        visibility: var(--media-menu-hidden-visibility, hidden);
        opacity: var(--media-menu-hidden-opacity, 0);
        max-height: var(--media-menu-hidden-max-height,
          var(--media-menu-max-height, var(--_menu-max-height, 300px)));
        transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
        pointer-events: none;
      }

      :host([slot="submenu"]) {
        background: none;
        width: 100%;
        min-height: 100%;
        position: absolute;
        bottom: 0;
        right: -100%;
      }

      #container {
        display: flex;
        flex-direction: column;
        min-height: 0;
        transition: transform .2s ease-out;
        transform: translate(0, 0);
      }

      #container.has-expanded {
        transition: transform .2s ease-in;
        transform: translate(-100%, 0);
      }

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        outline: inherit;
        display: inline-flex;
        align-items: center;
      }

      slot[name="header"][hidden] {
        display: none;
      }

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .7em;
        border-bottom: 1px solid rgb(255 255 255 / .25);
        cursor: var(--media-cursor, default);
      }

      slot[name="header"] > button[part~="back"],
      slot[name="header"]::slotted(button[part~="back"]) {
        cursor: var(--media-cursor, pointer);
      }

      svg[part~="back"] {
        height: var(--media-menu-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
        margin-right: .5ch;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap);
        flex-direction: var(--media-menu-flex-direction, column);
        overflow: var(--media-menu-overflow, hidden auto);
        display: flex;
        min-height: 0;
      }

      :host([role="menu"]) slot:not([name]) {
        padding-block: .4em;
      }

      slot:not([name])::slotted([role="menu"]) {
        background: none;
      }

      media-chrome-menu-item > span {
        margin-right: .5ch;
        max-width: var(--media-menu-item-max-width);
        text-overflow: ellipsis;
        overflow: hidden;
      }
    </style>
    <style id="layout-row" media="width:0">

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .5em;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap, .25em);
        flex-direction: var(--media-menu-flex-direction, row);
        padding-inline: .5em;
      }

      media-chrome-menu-item {
        padding: .3em .5em;
      }

      media-chrome-menu-item[aria-checked="true"] {
        background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
      }

      
      media-chrome-menu-item::part(checked-indicator) {
        display: var(--media-menu-item-checked-indicator-display, none);
      }
    </style>
    <div id="container" part="container">
      <slot name="header" hidden>
        <button part="back button" aria-label="Back to previous menu">
          <slot name="back-icon">
            <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
              <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
            </svg>
          </slot>
          <slot name="title"></slot>
        </button>
      </slot>
      <slot></slot>
    </div>
    <slot name="checked-indicator" hidden></slot>
  `}var Ki={STYLE:"style",HIDDEN:"hidden",DISABLED:"disabled",ANCHOR:"anchor"},pt=class extends f.HTMLElement{constructor(){if(super(),ie(this,Hd),ie(this,Mo),ie(this,Ys),ie(this,Wd),ie(this,Fd),ie(this,Kd),ie(this,lr),ie(this,Oo),ie(this,Vd),ie(this,_c),ie(this,qd),ie(this,gc),ie(this,Yd),ie(this,Gd),ie(this,mn),ie(this,$d),ie(this,pn),ie(this,Gs),ie(this,Yt,null),ie(this,ca,null),ie(this,Ui,null),ie(this,Vs,new Set),ie(this,qs,void 0),ie(this,ha,!1),ie(this,Rn,null),ie(this,xo,()=>{const e=Q(this,Vs),t=new Set(this.items);for(const i of e)t.has(i)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:i}));for(const i of t)e.has(i)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:i}));qt(this,Vs,t)}),ie(this,sr,()=>{ae(this,lr,Cn).call(this),ae(this,Oo,Ec).call(this,!1)}),ie(this,or,()=>{ae(this,lr,Cn).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=rt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),this.shadowRoot.addEventListener("slotchange",this),qt(this,qs,new MutationObserver(Q(this,xo))),Q(this,qs).observe(this.defaultSlot,{childList:!0})}static get observedAttributes(){return[Ki.DISABLED,Ki.HIDDEN,Ki.STYLE,Ki.ANCHOR,z.MEDIA_CONTROLLER]}static formatMenuItemText(e,t){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":ae(this,Hd,sf).call(this,e);break;case"invoke":ae(this,Wd,of).call(this,e);break;case"click":ae(this,Vd,uf).call(this,e);break;case"toggle":ae(this,qd,hf).call(this,e);break;case"focusout":ae(this,Yd,pf).call(this,e);break;case"keydown":ae(this,Gd,vf).call(this,e);break}}connectedCallback(){var e,t;qt(this,Rn,xu(this.shadowRoot,":host")),ae(this,Ys,Bd).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),qt(this,Yt,od(this)),(t=(e=Q(this,Yt))==null?void 0:e.associateElement)==null||t.call(e,this),this.hidden||(cr(Ln(this),Q(this,sr)),cr(this,Q(this,or))),ae(this,Mo,fc).call(this)}disconnectedCallback(){var e,t;hr(Ln(this),Q(this,sr)),hr(this,Q(this,or)),this.disable(),(t=(e=Q(this,Yt))==null?void 0:e.unassociateElement)==null||t.call(e,this),qt(this,Yt,null)}attributeChangedCallback(e,t,i){var a,r,n,s;e===Ki.HIDDEN&&i!==t?(Q(this,ha)||qt(this,ha,!0),this.hidden?ae(this,Kd,df).call(this):ae(this,Fd,lf).call(this),this.dispatchEvent(new zT({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===z.MEDIA_CONTROLLER?(t&&((r=(a=Q(this,Yt))==null?void 0:a.unassociateElement)==null||r.call(a,this),qt(this,Yt,null)),i&&this.isConnected&&(qt(this,Yt,od(this)),(s=(n=Q(this,Yt))==null?void 0:n.associateElement)==null||s.call(n,this))):e===Ki.DISABLED&&i!==t?i==null?this.enable():this.disable():e===Ki.STYLE&&i!==t&&ae(this,Ys,Bd).call(this)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?(e=Qo(this))==null?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(jT)}get radioGroupItems(){return this.items.filter(e=>e.role==="menuitemradio")}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,t;return(t=(e=this.checkedItems[0])==null?void 0:e.value)!=null?t:""}set value(e){const t=this.items.find(i=>i.value===e);t&&ae(this,Gs,Qd).call(this,t)}focus(){var e;if(qt(this,ca,Mu()),this.items.length){ae(this,pn,Po).call(this,this.items[0]),this.items[0].focus();return}(e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]'))==null||e.focus()}handleSelect(e){var t;const i=ae(this,mn,No).call(this,e);i&&(ae(this,Gs,Qd).call(this,i,i.type==="checkbox"),Q(this,Ui)&&!this.hidden&&((t=Q(this,ca))==null||t.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var t,i;const{key:a}=e,r=this.items,n=(i=(t=ae(this,mn,No).call(this,e))!=null?t:ae(this,$d,ff).call(this))!=null?i:r[0],s=r.indexOf(n);let o=Math.max(0,s);a==="ArrowDown"?o++:a==="ArrowUp"?o--:e.key==="Home"?o=0:e.key==="End"&&(o=r.length-1),o<0&&(o=r.length-1),o>r.length-1&&(o=0),ae(this,pn,Po).call(this,r[o]),r[o].focus()}};Yt=new WeakMap;ca=new WeakMap;Ui=new WeakMap;Vs=new WeakMap;qs=new WeakMap;ha=new WeakMap;Rn=new WeakMap;Hd=new WeakSet;sf=function(e){const t=e.target;for(const i of t.assignedNodes({flatten:!0}))i.nodeType===3&&i.textContent.trim()===""&&i.remove();["header","title"].includes(t.name)&&ae(this,Mo,fc).call(this),t.name||Q(this,xo).call(this)};Mo=new WeakSet;fc=function(){const e=this.shadowRoot.querySelector('slot[name="header"]');e.hidden=this.shadowRoot.querySelector('slot[name="title"]').assignedNodes().length===0&&e.assignedNodes().length===0};xo=new WeakMap;Ys=new WeakSet;Bd=function(){var e;const t=this.shadowRoot.querySelector("#layout-row"),i=(e=getComputedStyle(this).getPropertyValue("--media-menu-layout"))==null?void 0:e.trim();t.setAttribute("media",i==="row"?"":"width:0")};Wd=new WeakSet;of=function(e){qt(this,Ui,e.relatedTarget),Ei(this,e.relatedTarget)||(this.hidden=!this.hidden)};Fd=new WeakSet;lf=function(){var e;(e=Q(this,Ui))==null||e.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),cr(Ln(this),Q(this,sr)),cr(this,Q(this,or))};Kd=new WeakSet;df=function(){var e;(e=Q(this,Ui))==null||e.setAttribute("aria-expanded","false"),hr(Ln(this),Q(this,sr)),hr(this,Q(this,or))};sr=new WeakMap;or=new WeakMap;lr=new WeakSet;Cn=function(e){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;const{x:t,y:i}=KT({anchor:this.anchorElement,floating:this,placement:"top-start"});e!=null||(e=this.offsetWidth);const a=Ln(this).getBoundingClientRect(),r=a.width-t-e,n=a.height-i-this.offsetHeight,{style:s}=Q(this,Rn);s.setProperty("position","absolute"),s.setProperty("right",`${Math.max(0,r)}px`),s.setProperty("--_menu-bottom",`${n}px`);const o=getComputedStyle(this),l=s.getPropertyValue("--_menu-bottom")===o.bottom?n:parseFloat(o.bottom),m=a.height-l-parseFloat(o.marginBottom);this.style.setProperty("--_menu-max-height",`${m}px`)};Oo=new WeakSet;Ec=function(e){const t=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=t==null?void 0:t.querySelector('[role="menu"]'),{style:a}=Q(this,Rn);if(e||a.setProperty("--media-menu-transition-in","none"),i){const r=i.offsetHeight,n=Math.max(i.offsetWidth,t.offsetWidth);this.style.setProperty("min-width",`${n}px`),this.style.setProperty("min-height",`${r}px`),ae(this,lr,Cn).call(this,n)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),ae(this,lr,Cn).call(this);a.removeProperty("--media-menu-transition-in")};Vd=new WeakSet;uf=function(e){var t;if(e.stopPropagation(),e.composedPath().includes(Q(this,_c,cf))){(t=Q(this,ca))==null||t.focus(),this.hidden=!0;return}const i=ae(this,mn,No).call(this,e);!i||i.hasAttribute("disabled")||(ae(this,pn,Po).call(this,i),this.handleSelect(e))};_c=new WeakSet;cf=function(){var e;return(e=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))==null?void 0:e.find(t=>t.matches('button[part~="back"]'))};qd=new WeakSet;hf=function(e){if(e.target===this)return;ae(this,gc,mf).call(this);const t=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(const i of t)i.invokeTargetElement!=e.target&&e.newState=="open"&&i.getAttribute("aria-expanded")=="true"&&!i.invokeTargetElement.hidden&&i.invokeTargetElement.dispatchEvent(new pc({relatedTarget:i}));for(const i of t)i.setAttribute("aria-expanded",`${!i.submenuElement.hidden}`);ae(this,Oo,Ec).call(this,!0)};gc=new WeakSet;mf=function(){const e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)};Yd=new WeakSet;pf=function(e){var t;Ei(this,e.relatedTarget)||(Q(this,ha)&&((t=Q(this,ca))==null||t.focus()),Q(this,Ui)&&Q(this,Ui)!==e.relatedTarget&&!this.hidden&&(this.hidden=!0))};Gd=new WeakSet;vf=function(e){var t,i,a,r,n;const{key:s,ctrlKey:o,altKey:l,metaKey:m}=e;if(!(o||l||m)&&this.keysUsed.includes(s))if(e.preventDefault(),e.stopPropagation(),s==="Tab"){if(Q(this,ha)){this.hidden=!0;return}e.shiftKey?(i=(t=this.previousElementSibling)==null?void 0:t.focus)==null||i.call(t):(r=(a=this.nextElementSibling)==null?void 0:a.focus)==null||r.call(a),this.blur()}else s==="Escape"?((n=Q(this,ca))==null||n.focus(),Q(this,ha)&&(this.hidden=!0)):s==="Enter"||s===" "?this.handleSelect(e):this.handleMove(e)};mn=new WeakSet;No=function(e){return e.composedPath().find(t=>["menuitemradio","menuitemcheckbox"].includes(t.role))};$d=new WeakSet;ff=function(){return this.items.find(e=>e.tabIndex===0)};pn=new WeakSet;Po=function(e){for(const t of this.items)t.tabIndex=t===e?0:-1};Gs=new WeakSet;Qd=function(e,t){const i=[...this.checkedItems];e.type==="radio"&&this.radioGroupItems.forEach(a=>a.checked=!1),t?e.checked=!e.checked:e.checked=!0,this.checkedItems.some((a,r)=>a!=i[r])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))};pt.shadowRootOptions={mode:"open"};pt.getTemplateHTML=ZT;function jT(e){return["menuitem","menuitemradio","menuitemcheckbox"].includes(e==null?void 0:e.role)}function Ln(e){var t;return(t=e.getAttribute("bounds")?Er(e,`#${e.getAttribute("bounds")}`):Ge(e)||e.parentElement)!=null?t:e}f.customElements.get("media-chrome-menu")||f.customElements.define("media-chrome-menu",pt);var bc=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},jt=(e,t,i)=>(bc(e,t,"read from private field"),i?i.call(e):t.get(e)),ni=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Dl=(e,t,i,a)=>(bc(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),St=(e,t,i)=>(bc(e,t,"access private method"),i),$s,vn,zd,Ef,Uo,yc,Tc,_f,Xt,vr,Dn,Zd,gf,Qs,jd;function XT(e){return`
    <style>
      :host {
        transition: var(--media-menu-item-transition,
          background .15s linear,
          opacity .2s ease-in-out
        );
        outline: var(--media-menu-item-outline, 0);
        outline-offset: var(--media-menu-item-outline-offset, -1px);
        cursor: var(--media-cursor, pointer);
        display: flex;
        align-items: center;
        align-self: stretch;
        justify-self: stretch;
        white-space: nowrap;
        white-space-collapse: collapse;
        text-wrap: nowrap;
        padding: .4em .8em .4em 1em;
      }

      :host(:focus-visible) {
        box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: var(--media-menu-item-hover-outline, 0);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host(:hover) {
        cursor: var(--media-cursor, pointer);
        background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
        outline: var(--media-menu-item-hover-outline);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host([aria-checked="true"]) {
        background: var(--media-menu-item-checked-background);
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        pointer-events: none;
        color: rgba(255, 255, 255, .3);
      }

      slot:not([name]) {
        width: 100%;
      }

      slot:not([name="submenu"]) {
        display: inline-flex;
        align-items: center;
        transition: inherit;
        opacity: var(--media-menu-item-opacity, 1);
      }

      slot[name="description"] {
        justify-content: end;
      }

      slot[name="description"] > span {
        display: inline-block;
        margin-inline: 1em .2em;
        max-width: var(--media-menu-item-description-max-width, 100px);
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: .8em;
        font-weight: 400;
        text-align: right;
        position: relative;
        top: .04em;
      }

      slot[name="checked-indicator"] {
        display: none;
      }

      :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
        display: var(--media-menu-item-checked-indicator-display, inline-block);
      }

      
      svg, img, ::slotted(svg), ::slotted(img) {
        height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
      }

      
      [part~="indicator"],
      ::slotted([part~="indicator"]) {
        fill: var(--media-menu-item-indicator-fill,
          var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
        height: var(--media-menu-item-indicator-height, 1.25em);
        margin-right: .5ch;
      }

      [part~="checked-indicator"] {
        visibility: hidden;
      }

      :host([aria-checked="true"]) [part~="checked-indicator"] {
        visibility: visible;
      }
    </style>
    <slot name="checked-indicator">
      <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
        <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
      </svg>
    </slot>
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="description"></slot>
    <slot name="suffix">
      ${this.getSuffixSlotInnerHTML(e)}
    </slot>
    <slot name="submenu"></slot>
  `}function JT(e){return""}var ot={TYPE:"type",VALUE:"value",CHECKED:"checked",DISABLED:"disabled"},Bi=class extends f.HTMLElement{constructor(){if(super(),ni(this,zd),ni(this,Uo),ni(this,Tc),ni(this,vr),ni(this,Zd),ni(this,Qs),ni(this,$s,!1),ni(this,vn,void 0),ni(this,Xt,()=>{var e,t;this.submenuElement.items&&this.setAttribute("submenusize",`${this.submenuElement.items.length}`);const i=this.shadowRoot.querySelector('slot[name="description"]'),a=(e=this.submenuElement.checkedItems)==null?void 0:e[0],r=(t=a==null?void 0:a.dataset.description)!=null?t:a==null?void 0:a.text,n=ke.createElement("span");n.textContent=r!=null?r:"",i.replaceChildren(n)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=rt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.shadowRoot.addEventListener("slotchange",this)}static get observedAttributes(){return[ot.TYPE,ot.DISABLED,ot.CHECKED,ot.VALUE]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),Mr(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":St(this,zd,Ef).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":St(this,Zd,gf).call(this,e);break;case"keyup":St(this,vr,Dn).call(this,e);break}}attributeChangedCallback(e,t,i){e===ot.CHECKED&&Mr(this)&&!jt(this,$s)?this.setAttribute("aria-checked",i!=null?"true":"false"):e===ot.TYPE&&i!==t?this.role="menuitem"+i:e===ot.DISABLED&&i!==t&&(i==null?this.enable():this.disable())}connectedCallback(){this.hasAttribute(ot.DISABLED)||this.enable(),this.role="menuitem"+this.type,Dl(this,vn,Xd(this,this.parentNode)),St(this,Qs,jd).call(this),this.submenuElement&&St(this,Uo,yc).call(this)}disconnectedCallback(){this.disable(),St(this,Qs,jd).call(this),Dl(this,vn,null)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?(e=Qo(this))==null?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return(e=this.getAttribute(ot.TYPE))!=null?e:""}set type(e){this.setAttribute(ot.TYPE,`${e}`)}get value(){var e;return(e=this.getAttribute(ot.VALUE))!=null?e:this.text}set value(e){this.setAttribute(ot.VALUE,e)}get text(){var e;return((e=this.textContent)!=null?e:"").trim()}get checked(){if(Mr(this))return this.getAttribute("aria-checked")==="true"}set checked(e){Mr(this)&&(Dl(this,$s,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){Mr(this)||this.invokeTargetElement&&Ei(this,e.target)&&this.invokeTargetElement.dispatchEvent(new pc({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}};$s=new WeakMap;vn=new WeakMap;zd=new WeakSet;Ef=function(e){const t=e.target;if(!(t!=null&&t.name))for(const i of t.assignedNodes({flatten:!0}))i instanceof Text&&i.textContent.trim()===""&&i.remove();t.name==="submenu"&&(this.submenuElement?St(this,Uo,yc).call(this):St(this,Tc,_f).call(this))};Uo=new WeakSet;yc=F(function*(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",jt(this,Xt)),this.submenuElement.addEventListener("addmenuitem",jt(this,Xt)),this.submenuElement.addEventListener("removemenuitem",jt(this,Xt)),jt(this,Xt).call(this)});Tc=new WeakSet;_f=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",jt(this,Xt)),this.submenuElement.removeEventListener("addmenuitem",jt(this,Xt)),this.submenuElement.removeEventListener("removemenuitem",jt(this,Xt)),jt(this,Xt).call(this)};Xt=new WeakMap;vr=new WeakSet;Dn=function(e){const{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener("keyup",St(this,vr,Dn));return}this.handleClick(e)};Zd=new WeakSet;gf=function(e){const{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",St(this,vr,Dn));return}this.addEventListener("keyup",St(this,vr,Dn),{once:!0})};Qs=new WeakSet;jd=function(){var e;const t=(e=jt(this,vn))==null?void 0:e.radioGroupItems;if(!t)return;let i=t.filter(a=>a.getAttribute("aria-checked")==="true").pop();i||(i=t[0]);for(const a of t)a.setAttribute("aria-checked","false");i==null||i.setAttribute("aria-checked","true")};Bi.shadowRootOptions={mode:"open"};Bi.getTemplateHTML=XT;Bi.getSuffixSlotInnerHTML=JT;function Mr(e){return e.type==="radio"||e.type==="checkbox"}function Xd(e,t){if(!e)return null;const{host:i}=e.getRootNode();return!t&&i?Xd(e,i):t!=null&&t.items?t:Xd(t,t==null?void 0:t.parentNode)}f.customElements.get("media-chrome-menu-item")||f.customElements.define("media-chrome-menu-item",Bi);function e1(e){return`
    ${pt.getTemplateHTML(e)}
    <style>
      :host {
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
        min-width: var(--media-settings-menu-min-width, 170px);
        border-radius: 2px 2px 0 0;
        overflow: hidden;
      }

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([role="menu"]) {
        
        justify-content: end;
      }

      slot:not([name]) {
        justify-content: var(--media-settings-menu-justify-content);
        flex-direction: var(--media-settings-menu-flex-direction, column);
        overflow: visible;
      }

      #container.has-expanded {
        --media-settings-menu-item-opacity: 0;
      }
    </style>
  `}var bf=class extends pt{get anchorElement(){return this.anchor!=="auto"?super.anchorElement:Ge(this).querySelector("media-settings-menu-button")}};bf.getTemplateHTML=e1;f.customElements.get("media-settings-menu")||f.customElements.define("media-settings-menu",bf);function t1(e){return`
    ${Bi.getTemplateHTML.call(this,e)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `}function i1(e){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `}var ol=class extends Bi{};ol.shadowRootOptions={mode:"open"};ol.getTemplateHTML=t1;ol.getSuffixSlotInnerHTML=i1;f.customElements.get("media-settings-menu-item")||f.customElements.define("media-settings-menu-item",ol);var yr=class extends xe{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?(e=Qo(this))==null?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){var e;(e=this.invokeTargetElement)==null||e.dispatchEvent(new pc({relatedTarget:this}))}};f.customElements.get("media-chrome-menu-button")||f.customElements.define("media-chrome-menu-button",yr);function a1(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
      </svg>
    </slot>
  `}function r1(){return L("Settings")}var Ac=class extends yr{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",L("settings"))}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:Ge(this).querySelector("media-settings-menu")}};Ac.getSlotTemplateHTML=a1;Ac.getTooltipContentHTML=r1;f.customElements.get("media-settings-menu-button")||f.customElements.define("media-settings-menu-button",Ac);var kc=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},yf=(e,t,i)=>(kc(e,t,"read from private field"),i?i.call(e):t.get(e)),Xn=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Jd=(e,t,i,a)=>(kc(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),Jn=(e,t,i)=>(kc(e,t,"access private method"),i),en,Ho,zs,eu,Zs,tu,n1=class extends pt{constructor(){super(...arguments),Xn(this,zs),Xn(this,Zs),Xn(this,en,[]),Xn(this,Ho,void 0)}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_AUDIO_TRACK_LIST,h.MEDIA_AUDIO_TRACK_ENABLED,h.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===h.MEDIA_AUDIO_TRACK_ENABLED&&t!==i?this.value=i:e===h.MEDIA_AUDIO_TRACK_LIST&&t!==i&&(Jd(this,en,B0(i!=null?i:"")),Jn(this,zs,eu).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",Jn(this,Zs,tu))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",Jn(this,Zs,tu))}get anchorElement(){var e;return this.anchor!=="auto"?super.anchorElement:(e=Ge(this))==null?void 0:e.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return yf(this,en)}set mediaAudioTrackList(e){Jd(this,en,e),Jn(this,zs,eu).call(this)}get mediaAudioTrackEnabled(){var e;return(e=le(this,h.MEDIA_AUDIO_TRACK_ENABLED))!=null?e:""}set mediaAudioTrackEnabled(e){de(this,h.MEDIA_AUDIO_TRACK_ENABLED,e)}};en=new WeakMap;Ho=new WeakMap;zs=new WeakSet;eu=function(){if(yf(this,Ho)===JSON.stringify(this.mediaAudioTrackList))return;Jd(this,Ho,JSON.stringify(this.mediaAudioTrackList));const e=this.mediaAudioTrackList;this.defaultSlot.textContent="",e.sort((t,i)=>t.id.localeCompare(i.id,void 0,{numeric:!0}));for(const t of e){const i=pr({type:"radio",text:this.formatMenuItemText(t.label,t),value:`${t.id}`,checked:t.enabled});i.prepend(ma(this,"checked-indicator")),this.defaultSlot.append(i)}};Zs=new WeakSet;tu=function(){if(this.value==null)return;const e=new f.CustomEvent(I.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)};f.customElements.get("media-audio-track-menu")||f.customElements.define("media-audio-track-menu",n1);var s1=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`;function o1(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${s1}</slot>
  `}function l1(){return L("Audio")}var om=e=>{const t=L("Audio");e.setAttribute("aria-label",t)},Sc=class extends yr{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_AUDIO_TRACK_ENABLED,h.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),om(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===h.MEDIA_LANG&&om(this)}get invokeTargetElement(){var e;return this.invokeTarget!=null?super.invokeTargetElement:(e=Ge(this))==null?void 0:e.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var e;return(e=le(this,h.MEDIA_AUDIO_TRACK_ENABLED))!=null?e:""}set mediaAudioTrackEnabled(e){de(this,h.MEDIA_AUDIO_TRACK_ENABLED,e)}};Sc.getSlotTemplateHTML=o1;Sc.getTooltipContentHTML=l1;f.customElements.get("media-audio-track-menu-button")||f.customElements.define("media-audio-track-menu-button",Sc);var wc=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},d1=(e,t,i)=>(wc(e,t,"read from private field"),i?i.call(e):t.get(e)),Ml=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},u1=(e,t,i,a)=>(wc(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),es=(e,t,i)=>(wc(e,t,"access private method"),i),Bo,js,iu,Xs,au,c1=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;function h1(e){return`
    ${pt.getTemplateHTML(e)}
    <slot name="captions-indicator" hidden>${c1}</slot>
  `}var Tf=class extends pt{constructor(){super(...arguments),Ml(this,js),Ml(this,Xs),Ml(this,Bo,void 0)}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_SUBTITLES_LIST,h.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===h.MEDIA_SUBTITLES_LIST&&t!==i?es(this,js,iu).call(this):e===h.MEDIA_SUBTITLES_SHOWING&&t!==i&&(this.value=i||"",es(this,js,iu).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",es(this,Xs,au))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",es(this,Xs,au))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:Ge(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return lm(this,h.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){dm(this,h.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return lm(this,h.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){dm(this,h.MEDIA_SUBTITLES_SHOWING,e)}};Bo=new WeakMap;js=new WeakSet;iu=function(){var e;const t=d1(this,Bo)!==JSON.stringify(this.mediaSubtitlesList),i=this.value!==this.getAttribute(h.MEDIA_SUBTITLES_SHOWING);if(!t&&!i)return;u1(this,Bo,JSON.stringify(this.mediaSubtitlesList)),this.defaultSlot.textContent="";const a=!this.value,r=pr({type:"radio",text:this.formatMenuItemText(L("Off")),value:"off",checked:a});r.prepend(ma(this,"checked-indicator")),this.defaultSlot.append(r);const n=this.mediaSubtitlesList;for(const s of n){const o=pr({type:"radio",text:this.formatMenuItemText(s.label,s),value:cd(s),checked:this.value==cd(s)});o.prepend(ma(this,"checked-indicator")),((e=s.kind)!=null?e:"subs")==="captions"&&o.append(ma(this,"captions-indicator")),this.defaultSlot.append(o)}};Xs=new WeakSet;au=function(){const e=this.mediaSubtitlesShowing,t=this.getAttribute(h.MEDIA_SUBTITLES_SHOWING),i=this.value!==t;if(e!=null&&e.length&&i&&this.dispatchEvent(new f.CustomEvent(I.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!i)return;const a=new f.CustomEvent(I.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)};Tf.getTemplateHTML=h1;var lm=(e,t)=>{const i=e.getAttribute(t);return i?Jo(i):[]},dm=(e,t,i)=>{if(!(i!=null&&i.length)){e.removeAttribute(t);return}const a=An(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};f.customElements.get("media-captions-menu")||f.customElements.define("media-captions-menu",Tf);var m1=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,p1=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;function v1(){return`
    <style>
      :host([data-captions-enabled="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([data-captions-enabled="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${m1}</slot>
      <slot name="off">${p1}</slot>
    </slot>
  `}function f1(){return L("Captions")}var um=e=>{e.setAttribute("data-captions-enabled",nv(e).toString())},cm=e=>{e.setAttribute("aria-label",L("closed captions"))},Ic=class extends yr{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_SUBTITLES_LIST,h.MEDIA_SUBTITLES_SHOWING,h.MEDIA_LANG]}connectedCallback(){super.connectedCallback(),cm(this),um(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===h.MEDIA_SUBTITLES_SHOWING?um(this):e===h.MEDIA_LANG&&cm(this)}get invokeTargetElement(){var e;return this.invokeTarget!=null?super.invokeTargetElement:(e=Ge(this))==null?void 0:e.querySelector("media-captions-menu")}get mediaSubtitlesList(){return hm(this,h.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){mm(this,h.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return hm(this,h.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){mm(this,h.MEDIA_SUBTITLES_SHOWING,e)}};Ic.getSlotTemplateHTML=v1;Ic.getTooltipContentHTML=f1;var hm=(e,t)=>{const i=e.getAttribute(t);return i?Jo(i):[]},mm=(e,t,i)=>{if(!(i!=null&&i.length)){e.removeAttribute(t);return}const a=An(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};f.customElements.get("media-captions-menu-button")||f.customElements.define("media-captions-menu-button",Ic);var Af=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},qa=(e,t,i)=>(Af(e,t,"read from private field"),i?i.call(e):t.get(e)),xl=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ka=(e,t,i)=>(Af(e,t,"access private method"),i),Ci,Ya,tn,Js,ru,Ol={RATES:"rates"},E1=class extends pt{constructor(){super(),xl(this,Ya),xl(this,Js),xl(this,Ci,new Pu(this,Ol.RATES,{defaultValue:Hv})),ka(this,Ya,tn).call(this)}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PLAYBACK_RATE,Ol.RATES]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===h.MEDIA_PLAYBACK_RATE&&t!=i?(this.value=i,ka(this,Ya,tn).call(this)):e===Ol.RATES&&t!=i&&(qa(this,Ci).value=i,ka(this,Ya,tn).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",ka(this,Js,ru))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",ka(this,Js,ru))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:Ge(this).querySelector("media-playback-rate-menu-button")}get rates(){return qa(this,Ci)}set rates(e){e?Array.isArray(e)?qa(this,Ci).value=e.join(" "):typeof e=="string"&&(qa(this,Ci).value=e):qa(this,Ci).value="",ka(this,Ya,tn).call(this)}get mediaPlaybackRate(){return oe(this,h.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){ve(this,h.MEDIA_PLAYBACK_RATE,e)}};Ci=new WeakMap;Ya=new WeakSet;tn=function(){this.defaultSlot.textContent="";const e=this.mediaPlaybackRate,t=new Set(Array.from(qa(this,Ci)).map(a=>Number(a)));e>0&&!t.has(e)&&t.add(e);const i=Array.from(t).sort((a,r)=>a-r);for(const a of i){const r=pr({type:"radio",text:this.formatMenuItemText(`${a}x`,a),value:a.toString(),checked:e===a});r.prepend(ma(this,"checked-indicator")),this.defaultSlot.append(r)}};Js=new WeakSet;ru=function(){if(!this.value)return;const e=new f.CustomEvent(I.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)};f.customElements.get("media-playback-rate-menu")||f.customElements.define("media-playback-rate-menu",E1);function _1(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
      
      :host([aria-expanded="true"]) slot {
        display: block;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||1}x</slot>
  `}function g1(){return L("Playback rate")}var Rc=class extends yr{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PLAYBACK_RATE]}constructor(){var e;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${(e=this.mediaPlaybackRate)!=null?e:1}x`}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===h.MEDIA_PLAYBACK_RATE){const a=i?+i:NaN,r=Number.isNaN(a)?1:a;this.container.innerHTML=`${r}x`,this.setAttribute("aria-label",L("Playback rate {playbackRate}",{playbackRate:r}))}}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:Ge(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return oe(this,h.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){ve(this,h.MEDIA_PLAYBACK_RATE,e)}};Rc.getSlotTemplateHTML=_1;Rc.getTooltipContentHTML=g1;f.customElements.get("media-playback-rate-menu-button")||f.customElements.define("media-playback-rate-menu-button",Rc);var Cc=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},an=(e,t,i)=>(Cc(e,t,"read from private field"),i?i.call(e):t.get(e)),ts=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},pm=(e,t,i,a)=>(Cc(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),Sa=(e,t,i)=>(Cc(e,t,"access private method"),i),rn,Ja,Ga,nn,eo,nu,b1=class extends pt{constructor(){super(...arguments),ts(this,Ga),ts(this,eo),ts(this,rn,[]),ts(this,Ja,{})}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_RENDITION_LIST,h.MEDIA_RENDITION_SELECTED,h.MEDIA_RENDITION_UNAVAILABLE,h.MEDIA_HEIGHT]}static formatMenuItemText(e,t){return super.formatMenuItemText(e,t)}static formatRendition(e,{showBitrate:t=!1}={}){const i=`${Math.min(e.width,e.height)}p`;if(t&&e.bitrate){const a=e.bitrate/1e6;return`${i} (${`${a.toFixed(a<1?1:0)} Mbps`})`}return this.formatMenuItemText(i,e)}static compareRendition(e,t){var i,a;return t.height===e.height?((i=t.bitrate)!=null?i:0)-((a=e.bitrate)!=null?a:0):t.height-e.height}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===h.MEDIA_RENDITION_SELECTED&&t!==i?(this.value=i!=null?i:"auto",Sa(this,Ga,nn).call(this)):e===h.MEDIA_RENDITION_LIST&&t!==i?(pm(this,rn,N0(i)),Sa(this,Ga,nn).call(this)):e===h.MEDIA_HEIGHT&&t!==i&&Sa(this,Ga,nn).call(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",Sa(this,eo,nu))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",Sa(this,eo,nu))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:Ge(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return an(this,rn)}set mediaRenditionList(e){pm(this,rn,e),Sa(this,Ga,nn).call(this)}get mediaRenditionSelected(){return le(this,h.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){de(this,h.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return oe(this,h.MEDIA_HEIGHT)}set mediaHeight(e){ve(this,h.MEDIA_HEIGHT,e)}compareRendition(e,t){return this.constructor.compareRendition(e,t)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}formatRendition(e,t){return this.constructor.formatRendition(e,t)}showRenditionBitrate(e){return this.mediaRenditionList.some(t=>t!==e&&t.height===e.height&&t.bitrate!==e.bitrate)}};rn=new WeakMap;Ja=new WeakMap;Ga=new WeakSet;nn=function(){if(an(this,Ja).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&an(this,Ja).mediaHeight===this.mediaHeight)return;an(this,Ja).mediaRenditionList=JSON.stringify(this.mediaRenditionList),an(this,Ja).mediaHeight=this.mediaHeight;const e=this.mediaRenditionList.sort(this.compareRendition.bind(this)),t=e.find(s=>s.id===this.mediaRenditionSelected);for(const s of e)s.selected=s===t;this.defaultSlot.textContent="";const i=!this.mediaRenditionSelected;for(const s of e){const o=pr({type:"radio",text:this.formatRendition(s,{showBitrate:this.showRenditionBitrate(s)}),value:`${s.id}`,checked:s.selected&&!i});o.prepend(ma(this,"checked-indicator")),this.defaultSlot.append(o)}const a=t&&this.showRenditionBitrate(t),r=i?t?this.formatMenuItemText(`${L("Auto")} • ${this.formatRendition(t,{showBitrate:a})}`,t):this.formatMenuItemText(`${L("Auto")} (${this.mediaHeight}p)`):this.formatMenuItemText(L("Auto")),n=pr({type:"radio",text:r,value:"auto",checked:i});n.dataset.description=r,n.prepend(ma(this,"checked-indicator")),this.defaultSlot.append(n)};eo=new WeakSet;nu=function(){if(this.value==null)return;const e=new f.CustomEvent(I.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)};f.customElements.get("media-rendition-menu")||f.customElements.define("media-rendition-menu",b1);var y1=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;function T1(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${y1}</slot>
  `}function A1(){return L("Quality")}var Lc=class extends yr{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_RENDITION_SELECTED,h.MEDIA_RENDITION_UNAVAILABLE,h.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",L("quality"))}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:Ge(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return le(this,h.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){de(this,h.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return oe(this,h.MEDIA_HEIGHT)}set mediaHeight(e){ve(this,h.MEDIA_HEIGHT,e)}};Lc.getSlotTemplateHTML=T1;Lc.getTooltipContentHTML=A1;f.customElements.get("media-rendition-menu-button")||f.customElements.define("media-rendition-menu-button",Lc);var Dc=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Gt=(e,t,i)=>(Dc(e,t,"read from private field"),i?i.call(e):t.get(e)),xt=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},kf=(e,t,i,a)=>(Dc(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ct=(e,t,i)=>(Dc(e,t,"access private method"),i),fr,Mn,ll,Ji,er,Mc,Sf,to,su,io,ou,wf,Wo,Fo,ao;function k1(e){return`
      ${pt.getTemplateHTML(e)}
      <style>
        :host {
          --_menu-bg: rgb(20 20 30 / .8);
          background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
          min-width: var(--media-settings-menu-min-width, 170px);
          border-radius: 2px;
          overflow: hidden;
        }
      </style>
    `}var If=class extends pt{constructor(){super(),xt(this,Mn),xt(this,Ji),xt(this,Mc),xt(this,to),xt(this,ou),xt(this,fr,!1),xt(this,io,e=>{const t=e.target,i=(t==null?void 0:t.nodeName)==="VIDEO",a=ct(this,to,su).call(this,t);(i||a)&&(Gt(this,fr)?ct(this,Ji,er).call(this):ct(this,ou,wf).call(this,e))}),xt(this,Wo,e=>{const t=e.target,i=this.contains(t),a=e.button===2,r=(t==null?void 0:t.nodeName)==="VIDEO",n=ct(this,to,su).call(this,t);i||a&&(r||n)||ct(this,Ji,er).call(this)}),xt(this,Fo,e=>{e.key==="Escape"&&ct(this,Ji,er).call(this)}),xt(this,ao,e=>{var t,i;const a=e.target;if((t=a.matches)!=null&&t.call(a,'button[invoke="copy"]')){const r=(i=a.closest("media-context-menu-item"))==null?void 0:i.querySelector('input[slot="copy"]');r&&navigator.clipboard.writeText(r.value)}ct(this,Ji,er).call(this)}),this.setAttribute("noautohide",""),ct(this,Mn,ll).call(this)}connectedCallback(){super.connectedCallback(),Ge(this).addEventListener("contextmenu",Gt(this,io)),this.addEventListener("click",Gt(this,ao))}disconnectedCallback(){super.disconnectedCallback(),Ge(this).removeEventListener("contextmenu",Gt(this,io)),this.removeEventListener("click",Gt(this,ao)),document.removeEventListener("mousedown",Gt(this,Wo)),document.removeEventListener("keydown",Gt(this,Fo))}};fr=new WeakMap;Mn=new WeakSet;ll=function(){this.hidden=!Gt(this,fr)};Ji=new WeakSet;er=function(){kf(this,fr,!1),ct(this,Mn,ll).call(this)};Mc=new WeakSet;Sf=function(){document.querySelectorAll("media-context-menu").forEach(e=>{var t;e!==this&&ct(t=e,Ji,er).call(t)})};to=new WeakSet;su=function(e){return e?e.hasAttribute("slot")&&e.getAttribute("slot")==="media"?!0:e.nodeName.includes("-")&&e.tagName.includes("-")?e.hasAttribute("src")||e.hasAttribute("poster")||e.hasAttribute("preload")||e.hasAttribute("playsinline"):!1:!1};io=new WeakMap;ou=new WeakSet;wf=function(e){e.preventDefault(),ct(this,Mc,Sf).call(this),kf(this,fr,!0),this.style.position="fixed",this.style.left=`${e.clientX}px`,this.style.top=`${e.clientY}px`,ct(this,Mn,ll).call(this),document.addEventListener("mousedown",Gt(this,Wo),{once:!0}),document.addEventListener("keydown",Gt(this,Fo),{once:!0})};Wo=new WeakMap;Fo=new WeakMap;ao=new WeakMap;If.getTemplateHTML=k1;f.customElements.get("media-context-menu")||f.customElements.define("media-context-menu",If);function S1(e){return`
    ${Bi.getTemplateHTML.call(this,e)}
    <style>
        ::slotted(*) {
            color: var(--media-text-color, white);
            text-decoration: none;
            border: none;
            background: none;
            cursor: pointer;
            padding: 0;
            min-height: var(--media-control-height, 24px);
        }
    </style>
  `}var xc=class extends Bi{};xc.shadowRootOptions={mode:"open"};xc.getTemplateHTML=S1;f.customElements.get("media-context-menu-item")||f.customElements.define("media-context-menu-item",xc);ti();var Rf=e=>{throw TypeError(e)},Oc=(e,t,i)=>t.has(e)||Rf("Cannot "+i),J=(e,t,i)=>(Oc(e,t,"read from private field"),i?i.call(e):t.get(e)),At=(e,t,i)=>t.has(e)?Rf("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),ei=(e,t,i,a)=>(Oc(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ye=(e,t,i)=>(Oc(e,t,"access private method"),i),dl=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if(typeof DocumentFragment=="undefined"){class e extends dl{}globalThis.DocumentFragment=e}var Nc=class extends dl{},w1=class extends dl{},I1={get(e){},define(e,t,i){},getName(e){return null},upgrade(e){},whenDefined(e){return Promise.resolve(Nc)}},ro,R1=class{constructor(e,t={}){At(this,ro),ei(this,ro,t==null?void 0:t.detail)}get detail(){return J(this,ro)}initCustomEvent(){}};ro=new WeakMap;function C1(e,t){return new Nc}var Cf={document:{createElement:C1},DocumentFragment,customElements:I1,CustomEvent:R1,EventTarget:dl,HTMLElement:Nc,HTMLVideoElement:w1},Lf=typeof window=="undefined"||typeof globalThis.customElements=="undefined",zt=Lf?Cf:globalThis,Ko=Lf?Cf.document:globalThis.document;function L1(e){let t="";return Object.entries(e).forEach(([i,a])=>{a!=null&&(t+=`${lu(i)}: ${a}; `)}),t?t.trim():void 0}function lu(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function Df(e){return e.replace(/[-_]([a-z])/g,(t,i)=>i.toUpperCase())}function et(e){if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}function Mf(e){let t=D1(e).toString();return t?"?"+t:""}function D1(e){let t={};for(let i in e)e[i]!=null&&(t[i]=e[i]);return new URLSearchParams(t)}var xf=(e,t)=>!e||!t?!1:e.contains(t)?!0:xf(e,t.getRootNode().host),Of="mux.com",M1=()=>{try{return"3.10.2"}catch(e){}return"UNKNOWN"},x1=M1(),Nf=()=>x1,O1=(e,{token:t,customDomain:i=Of,thumbnailTime:a,programTime:r}={})=>{var n;let s=t==null?a:void 0,{aud:o}=(n=tr(t))!=null?n:{};if(!(t&&o!=="t"))return`https://image.${i}/${e}/thumbnail.webp${Mf({token:t,time:s,program_time:r})}`},N1=(e,{token:t,customDomain:i=Of,programStartTime:a,programEndTime:r}={})=>{var n;let{aud:s}=(n=tr(t))!=null?n:{};if(!(t&&s!=="s"))return`https://image.${i}/${e}/storyboard.vtt${Mf({token:t,format:"webp",program_start_time:a,program_end_time:r})}`},Pc=e=>{if(e){if([X.LIVE,X.ON_DEMAND].includes(e))return e;if(e!=null&&e.includes("live"))return X.LIVE}},P1={crossorigin:"crossOrigin",playsinline:"playsInline"};function U1(e){var t;return(t=P1[e])!=null?t:Df(e)}var $a,Qa,Ye,H1=class{constructor(e,t){At(this,$a),At(this,Qa),At(this,Ye,[]),ei(this,$a,e),ei(this,Qa,t)}[Symbol.iterator](){return J(this,Ye).values()}get length(){return J(this,Ye).length}get value(){var e;return(e=J(this,Ye).join(" "))!=null?e:""}set value(e){var t;e!==this.value&&(ei(this,Ye,[]),this.add(...(t=e==null?void 0:e.split(" "))!=null?t:[]))}toString(){return this.value}item(e){return J(this,Ye)[e]}values(){return J(this,Ye).values()}keys(){return J(this,Ye).keys()}forEach(e){J(this,Ye).forEach(e)}add(...e){var t,i;e.forEach(a=>{this.contains(a)||J(this,Ye).push(a)}),!(this.value===""&&!((t=J(this,$a))!=null&&t.hasAttribute(`${J(this,Qa)}`)))&&((i=J(this,$a))==null||i.setAttribute(`${J(this,Qa)}`,`${this.value}`))}remove(...e){var t;e.forEach(i=>{J(this,Ye).splice(J(this,Ye).indexOf(i),1)}),(t=J(this,$a))==null||t.setAttribute(`${J(this,Qa)}`,`${this.value}`)}contains(e){return J(this,Ye).includes(e)}toggle(e,t){return typeof t!="undefined"?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){this.remove(e),this.add(t)}};$a=new WeakMap,Qa=new WeakMap,Ye=new WeakMap;var Pf=`[mux-player ${Nf()}]`;function di(...e){console.warn(Pf,...e)}function ht(...e){console.error(Pf,...e)}function Uf(e){var t;let i=(t=e.message)!=null?t:"";e.context&&(i+=` ${e.context}`),e.file&&(i+=` ${O("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${e.file}`),di(i)}var He={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},Li={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"};D(D({},He),Li);var vm=Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),B1=Object.values(He).filter(e=>He.PLAYSINLINE!==e),W1=Object.values(Li),F1=[...B1,...W1],K1=class extends zt.HTMLElement{static get observedAttributes(){return F1}constructor(){super()}attributeChangedCallback(e,t,i){var a,r;switch(e){case Li.MUTED:this.media&&(this.media.muted=i!=null,this.media.defaultMuted=i!=null);return;case Li.VOLUME:{let n=(a=et(i))!=null?a:1;this.media&&(this.media.volume=n);return}case Li.PLAYBACKRATE:{let n=(r=et(i))!=null?r:1;this.media&&(this.media.playbackRate=n,this.media.defaultPlaybackRate=n);return}}}play(){var e,t;return(t=(e=this.media)==null?void 0:e.play())!=null?t:Promise.reject()}pause(){var e;(e=this.media)==null||e.pause()}load(){var e;(e=this.media)==null||e.load()}get media(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var e,t;return(t=(e=this.media)==null?void 0:e.paused)!=null?t:!0}get duration(){var e,t;return(t=(e=this.media)==null?void 0:e.duration)!=null?t:NaN}get ended(){var e,t;return(t=(e=this.media)==null?void 0:e.ended)!=null?t:!1}get buffered(){var e,t;return(t=(e=this.media)==null?void 0:e.buffered)!=null?t:vm}get seekable(){var e,t;return(t=(e=this.media)==null?void 0:e.seekable)!=null?t:vm}get readyState(){var e,t;return(t=(e=this.media)==null?void 0:e.readyState)!=null?t:0}get videoWidth(){var e,t;return(t=(e=this.media)==null?void 0:e.videoWidth)!=null?t:0}get videoHeight(){var e,t;return(t=(e=this.media)==null?void 0:e.videoHeight)!=null?t:0}get currentSrc(){var e,t;return(t=(e=this.media)==null?void 0:e.currentSrc)!=null?t:""}get currentTime(){var e,t;return(t=(e=this.media)==null?void 0:e.currentTime)!=null?t:0}set currentTime(e){this.media&&(this.media.currentTime=Number(e))}get volume(){var e,t;return(t=(e=this.media)==null?void 0:e.volume)!=null?t:1}set volume(e){this.media&&(this.media.volume=Number(e))}get playbackRate(){var e,t;return(t=(e=this.media)==null?void 0:e.playbackRate)!=null?t:1}set playbackRate(e){this.media&&(this.media.playbackRate=Number(e))}get defaultPlaybackRate(){var e;return(e=et(this.getAttribute(Li.PLAYBACKRATE)))!=null?e:1}set defaultPlaybackRate(e){e!=null?this.setAttribute(Li.PLAYBACKRATE,`${e}`):this.removeAttribute(Li.PLAYBACKRATE)}get crossOrigin(){return xr(this,He.CROSSORIGIN)}set crossOrigin(e){this.setAttribute(He.CROSSORIGIN,`${e}`)}get autoplay(){return xr(this,He.AUTOPLAY)!=null}set autoplay(e){e?this.setAttribute(He.AUTOPLAY,typeof e=="string"?e:""):this.removeAttribute(He.AUTOPLAY)}get loop(){return xr(this,He.LOOP)!=null}set loop(e){e?this.setAttribute(He.LOOP,""):this.removeAttribute(He.LOOP)}get muted(){var e,t;return(t=(e=this.media)==null?void 0:e.muted)!=null?t:!1}set muted(e){this.media&&(this.media.muted=!!e)}get defaultMuted(){return xr(this,He.MUTED)!=null}set defaultMuted(e){e?this.setAttribute(He.MUTED,""):this.removeAttribute(He.MUTED)}get playsInline(){return xr(this,He.PLAYSINLINE)!=null}set playsInline(e){ht("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(e){["","none","metadata","auto"].includes(e)?this.setAttribute(He.PRELOAD,e):this.removeAttribute(He.PRELOAD)}};function xr(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}var fm=K1,V1=`:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-menu-button-display: var(--captions-menu-button, var(--media-captions-button-display));
  --media-rendition-menu-button-display: var(--rendition-menu-button);
  --media-audio-track-menu-button-display: var(--audio-track-menu-button);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button, var(--_cast-button-drm-display));
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-playback-rate-menu-button-display: var(--playback-rate-menu-button);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  line-height: 0;
  width: 100%;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]):not([placeholdersrc]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--top-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--top-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--top-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --captions-menu-button,
    var(--media-playback-rate-button-display, var(--top-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--center-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--center-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--center-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--center-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--bottom-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--bottom-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--bottom-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--bottom-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}

:host([no-tooltips]) {
  --media-tooltip-display: none;
}
`,Or=new WeakMap,q1=class Hf{constructor(t,i){this.element=t,this.type=i,this.element.addEventListener(this.type,this);let a=Or.get(this.element);a&&a.set(this.type,this)}set(t){if(typeof t=="function")this.handleEvent=t.bind(this.element);else if(typeof t=="object"&&typeof t.handleEvent=="function")this.handleEvent=t.handleEvent.bind(t);else{this.element.removeEventListener(this.type,this);let i=Or.get(this.element);i&&i.delete(this.type)}}static for(t){Or.has(t.element)||Or.set(t.element,new Map);let i=t.attributeName.slice(2),a=Or.get(t.element);return a&&a.has(i)?a.get(i):new Hf(t.element,i)}};function Y1(e,t){return e instanceof Rt&&e.attributeName.startsWith("on")?(q1.for(e).set(t),e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),!0):!1}function G1(e,t){return t instanceof Bf&&e instanceof br?(t.renderInto(e),!0):!1}function $1(e,t){return t instanceof DocumentFragment&&e instanceof br?(t.childNodes.length&&e.replace(...t.childNodes),!0):!1}function Q1(e,t){if(e instanceof Rt){let i=e.attributeNamespace,a=e.element.getAttributeNS(i,e.attributeName);return String(t)!==a&&(e.value=String(t)),!0}return e.value=String(t),!0}function z1(e,t){if(e instanceof Rt&&t instanceof Element){let i=e.element;return i[e.attributeName]!==t&&(e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),i[e.attributeName]=t),!0}return!1}function Z1(e,t){if(typeof t=="boolean"&&e instanceof Rt){let i=e.attributeNamespace;return t!==e.element.hasAttributeNS(i,e.attributeName)&&(e.booleanValue=t),!0}return!1}function j1(e,t){return t===!1&&e instanceof br?(e.replace(""),!0):!1}function X1(e,t){z1(e,t)||Z1(e,t)||Y1(e,t)||j1(e,t)||G1(e,t)||$1(e,t)||Q1(e,t)}var Nl=new Map,Em=new WeakMap,_m=new WeakMap,Bf=class{constructor(e,t,i){this.strings=e,this.values=t,this.processor=i,this.stringsKey=this.strings.join("")}get template(){if(Nl.has(this.stringsKey))return Nl.get(this.stringsKey);{let e=Ko.createElement("template"),t=this.strings.length-1;return e.innerHTML=this.strings.reduce((i,a,r)=>i+a+(r<t?`{{ ${r} }}`:""),""),Nl.set(this.stringsKey,e),e}}renderInto(e){var t;let i=this.template;if(Em.get(e)!==i){Em.set(e,i);let r=new nl(i,this.values,this.processor);_m.set(e,r),e instanceof br?e.replace(...r.children):e.appendChild(r);return}let a=_m.get(e);(t=a==null?void 0:a.update)==null||t.call(a,this.values)}},J1={processCallback(e,t,i){var a;if(i)for(let[r,n]of t)r in i&&X1(n,(a=i[r])!=null?a:"")}};function no(e,...t){return new Bf(e,t,J1)}function eA(e,t){e.renderInto(t)}var tA=e=>{let{tokens:t}=e;return t.drm?":host(:not([cast-receiver])) { --_cast-button-drm-display: none; }":""},iA=e=>no`
  <style>
    ${tA(e)}
    ${V1}
  </style>
  ${nA(e)}
`,aA=e=>{let t=e.hotKeys?`${e.hotKeys}`:"";return Pc(e.streamType)==="live"&&(t+=" noarrowleft noarrowright"),t},rA=Object.values({TOP:"top",CENTER:"center",BOTTOM:"bottom",LAYER:"layer",MEDIA_LAYER:"media-layer",POSTER_LAYER:"poster-layer",VERTICAL_LAYER:"vertical-layer",CENTERED_LAYER:"centered-layer",GESTURE_LAYER:"gesture-layer",CONTROLLER_LAYER:"controller",BUTTON:"button",RANGE:"range",THUMB:"thumb",DISPLAY:"display",CONTROL_BAR:"control-bar",MENU_BUTTON:"menu-button",MENU:"menu",MENU_ITEM:"menu-item",OPTION:"option",POSTER:"poster",LIVE:"live",PLAY:"play",PRE_PLAY:"pre-play",SEEK_BACKWARD:"seek-backward",SEEK_FORWARD:"seek-forward",MUTE:"mute",CAPTIONS:"captions",AIRPLAY:"airplay",PIP:"pip",FULLSCREEN:"fullscreen",CAST:"cast",PLAYBACK_RATE:"playback-rate",VOLUME:"volume",TIME:"time",TITLE:"title",AUDIO_TRACK:"audio-track",RENDITION:"rendition"}).join(", "),nA=e=>{var t,i,a,r,n,s,o,l,m,p,d,u,c,v,b,E,g,T,y,w,R,M,B,Z,j,K,ce,We,Qe,ze,Ee,Ve,vt,Lt,Oe,Re,ai,Fe;return no`
  <media-theme
    template="${e.themeTemplate||!1}"
    defaultstreamtype="${(t=e.defaultStreamType)!=null?t:!1}"
    hotkeys="${aA(e)||!1}"
    nohotkeys="${e.noHotKeys||!e.hasSrc||!1}"
    noautoseektolive="${!!((i=e.streamType)!=null&&i.includes(X.LIVE))&&e.targetLiveWindow!==0}"
    novolumepref="${e.novolumepref||!1}"
    nomutedpref="${e.nomutedpref||!1}"
    disabled="${!e.hasSrc||e.isDialogOpen}"
    audio="${(a=e.audio)!=null?a:!1}"
    style="${(r=L1({"--media-primary-color":e.primaryColor,"--media-secondary-color":e.secondaryColor,"--media-accent-color":e.accentColor}))!=null?r:!1}"
    defaultsubtitles="${!e.defaultHiddenCaptions}"
    forwardseekoffset="${(n=e.forwardSeekOffset)!=null?n:!1}"
    backwardseekoffset="${(s=e.backwardSeekOffset)!=null?s:!1}"
    playbackrates="${(o=e.playbackRates)!=null?o:!1}"
    defaultshowremainingtime="${(l=e.defaultShowRemainingTime)!=null?l:!1}"
    defaultduration="${(m=e.defaultDuration)!=null?m:!1}"
    hideduration="${(p=e.hideDuration)!=null?p:!1}"
    title="${(d=e.title)!=null?d:!1}"
    videotitle="${(u=e.videoTitle)!=null?u:!1}"
    proudlydisplaymuxbadge="${(c=e.proudlyDisplayMuxBadge)!=null?c:!1}"
    exportparts="${rA}"
    onclose="${e.onCloseErrorDialog}"
    onfocusin="${e.onFocusInErrorDialog}"
  >
    <mux-video
      slot="media"
      inert="${(v=e.noHotKeys)!=null?v:!1}"
      target-live-window="${(b=e.targetLiveWindow)!=null?b:!1}"
      stream-type="${(E=Pc(e.streamType))!=null?E:!1}"
      crossorigin="${(g=e.crossOrigin)!=null?g:""}"
      playsinline
      autoplay="${(T=e.autoplay)!=null?T:!1}"
      muted="${(y=e.muted)!=null?y:!1}"
      loop="${(w=e.loop)!=null?w:!1}"
      preload="${(R=e.preload)!=null?R:!1}"
      debug="${(M=e.debug)!=null?M:!1}"
      prefer-cmcd="${(B=e.preferCmcd)!=null?B:!1}"
      disable-tracking="${(Z=e.disableTracking)!=null?Z:!1}"
      disable-cookies="${(j=e.disableCookies)!=null?j:!1}"
      prefer-playback="${(K=e.preferPlayback)!=null?K:!1}"
      start-time="${e.startTime!=null?e.startTime:!1}"
      beacon-collection-domain="${(ce=e.beaconCollectionDomain)!=null?ce:!1}"
      player-init-time="${(We=e.playerInitTime)!=null?We:!1}"
      player-software-name="${(Qe=e.playerSoftwareName)!=null?Qe:!1}"
      player-software-version="${(ze=e.playerSoftwareVersion)!=null?ze:!1}"
      env-key="${(Ee=e.envKey)!=null?Ee:!1}"
      custom-domain="${(Ve=e.customDomain)!=null?Ve:!1}"
      src="${e.src?e.src:e.playbackId?Xl(e):!1}"
      cast-src="${e.src?e.src:e.playbackId?Xl(e):!1}"
      cast-receiver="${(vt=e.castReceiver)!=null?vt:!1}"
      drm-token="${(Oe=(Lt=e.tokens)==null?void 0:Lt.drm)!=null?Oe:!1}"
      exportparts="video"
      disable-pseudo-ended="${(Re=e.disablePseudoEnded)!=null?Re:!1}"
      max-auto-resolution="${(ai=e.maxAutoResolution)!=null?ai:!1}"
    >
      ${e.storyboard?no`<track label="thumbnails" default kind="metadata" src="${e.storyboard}" />`:no``}
      <slot></slot>
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${e.poster?e.poster:!1}"
        placeholdersrc="${(Fe=e.placeholder)!=null?Fe:!1}"
      ></media-poster-image>
    </slot>
  </media-theme>
`},Wf=e=>e.charAt(0).toUpperCase()+e.slice(1),sA=(e,t=!1)=>{var i,a;if(e.muxCode){let r=Wf((i=e.errorCategory)!=null?i:"video"),n=qo((a=e.errorCategory)!=null?a:se.VIDEO);if(e.muxCode===P.NETWORK_OFFLINE)return O("Your device appears to be offline",t);if(e.muxCode===P.NETWORK_TOKEN_EXPIRED)return O("{category} URL has expired",t).format({category:r});if([P.NETWORK_TOKEN_SUB_MISMATCH,P.NETWORK_TOKEN_AUD_MISMATCH,P.NETWORK_TOKEN_AUD_MISSING,P.NETWORK_TOKEN_MALFORMED].includes(e.muxCode))return O("{category} URL is formatted incorrectly",t).format({category:r});if(e.muxCode===P.NETWORK_TOKEN_MISSING)return O("Invalid {categoryName} URL",t).format({categoryName:n});if(e.muxCode===P.NETWORK_NOT_FOUND)return O("{category} does not exist",t).format({category:r});if(e.muxCode===P.NETWORK_NOT_READY){let s=e.streamType==="live"?"Live stream":"Video";return O("{mediaType} is not currently available",t).format({mediaType:s})}}if(e.code){if(e.code===C.MEDIA_ERR_NETWORK)return O("Network Error",t);if(e.code===C.MEDIA_ERR_DECODE)return O("Media Error",t);if(e.code===C.MEDIA_ERR_SRC_NOT_SUPPORTED)return O("Source Not Supported",t)}return O("Error",t)},oA=(e,t=!1)=>{var i,a;if(e.muxCode){let r=Wf((i=e.errorCategory)!=null?i:"video"),n=qo((a=e.errorCategory)!=null?a:se.VIDEO);return e.muxCode===P.NETWORK_OFFLINE?O("Check your internet connection and try reloading this video.",t):e.muxCode===P.NETWORK_TOKEN_EXPIRED?O("The video’s secured {tokenNamePrefix}-token has expired.",t).format({tokenNamePrefix:n}):e.muxCode===P.NETWORK_TOKEN_SUB_MISMATCH?O("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",t).format({tokenNamePrefix:n}):e.muxCode===P.NETWORK_TOKEN_MALFORMED?O("{category} URL is formatted incorrectly",t).format({category:r}):[P.NETWORK_TOKEN_AUD_MISMATCH,P.NETWORK_TOKEN_AUD_MISSING].includes(e.muxCode)?O("The {tokenNamePrefix}-token is formatted with incorrect information.",t).format({tokenNamePrefix:n}):[P.NETWORK_TOKEN_MISSING,P.NETWORK_INVALID_URL].includes(e.muxCode)?O("The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.",t).format({tokenNamePrefix:n}):e.muxCode===P.NETWORK_NOT_FOUND?"":e.message}return e.code&&(e.code===C.MEDIA_ERR_NETWORK||e.code===C.MEDIA_ERR_DECODE||(e.code,C.MEDIA_ERR_SRC_NOT_SUPPORTED)),e.message},lA=(e,t=!1)=>({title:sA(e,t).toString(),message:oA(e,t).toString()}),dA=e=>{if(e.muxCode){if(e.muxCode===P.NETWORK_TOKEN_EXPIRED)return"403-expired-token.md";if(e.muxCode===P.NETWORK_TOKEN_MALFORMED)return"403-malformatted-token.md";if([P.NETWORK_TOKEN_AUD_MISMATCH,P.NETWORK_TOKEN_AUD_MISSING].includes(e.muxCode))return"403-incorrect-aud-value.md";if(e.muxCode===P.NETWORK_TOKEN_SUB_MISMATCH)return"403-playback-id-mismatch.md";if(e.muxCode===P.NETWORK_TOKEN_MISSING)return"missing-signed-tokens.md";if(e.muxCode===P.NETWORK_NOT_FOUND)return"404-not-found.md";if(e.muxCode===P.NETWORK_NOT_READY)return"412-not-playable.md"}if(e.code){if(e.code===C.MEDIA_ERR_NETWORK)return"";if(e.code===C.MEDIA_ERR_DECODE)return"media-decode-error.md";if(e.code===C.MEDIA_ERR_SRC_NOT_SUPPORTED)return"media-src-not-supported.md"}return""},gm=(e,t)=>{let i=dA(e);return{message:e.message,context:e.context,file:i}},uA=`<template id="media-theme-gerwig">
  <style>
    @keyframes pre-play-hide {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      30% {
        transform: scale(0.7);
      }

      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, transparent);
      --_accent-color: var(--media-accent-color, #fa50b5);
      --_text-color: var(--media-text-color, #000);

      --media-icon-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_accent-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-preview-time-text-shadow: none;
      --media-control-height: 14px;
      --media-control-padding: 6px;
      --media-tooltip-container-margin: 6px;
      --media-tooltip-distance: 18px;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --_secondary-color: var(--media-secondary-color, black);
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
      background-color: var(--media-control-background);
    }

    /*
     * 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast.
     */
    media-controller {
      --media-webkit-text-track-transform: translateY(0) scale(0.98);
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused], :not([userinactive])) {
      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    /*
     * CSS specific to iOS devices.
     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757
     */
    @supports (-webkit-touch-callout: none) {
      /* Disable subtitle adjusting for iOS Safari */
      media-controller[mediaisfullscreen] {
        --media-webkit-text-track-transform: unset;
        --media-webkit-text-track-transition: unset;
      }
    }

    media-time-range {
      --media-box-padding-left: 6px;
      --media-box-padding-right: 6px;
      --media-range-bar-color: var(--_accent-color);
      --media-time-range-buffered-color: var(--_primary-color);
      --media-range-track-color: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.4);
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_accent-color) 25%,
        var(--_accent-color)
      );
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-transform: scale(0);
      --media-range-thumb-transition: transform 0.3s;
      --media-range-thumb-opacity: 1;
      --media-preview-background: var(--_primary-color);
      --media-box-arrow-background: var(--_primary-color);
      --media-preview-thumbnail-border: 5px solid var(--_primary-color);
      --media-preview-border-radius: 5px;
      --media-text-color: var(--_text-color);
      --media-control-hover-background: transparent;
      --media-preview-chapter-text-shadow: none;
      color: var(--_accent-color);
      padding: 0 6px;
    }

    :host([audio]) media-time-range {
      --media-preview-time-padding: 1.5px 6px;
      --media-preview-box-margin: 0 0 -5px;
    }

    media-time-range:hover {
      --media-range-thumb-transform: scale(1);
    }

    media-preview-thumbnail {
      border-bottom-width: 0;
    }

    [part~='menu'] {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      bottom: 50px;
      padding: 2.5px 10px;
    }

    [part~='menu']::part(indicator) {
      fill: var(--_accent-color);
    }

    [part~='menu']::part(menu-item) {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 6px 10px;
      min-height: 34px;
    }

    [part~='menu']::part(checked) {
      font-weight: 700;
    }

    media-captions-menu,
    media-rendition-menu,
    media-audio-track-menu,
    media-playback-rate-menu {
      position: absolute; /* ensure they don't take up space in DOM on load */
      --media-menu-background: var(--_primary-color);
      --media-menu-item-checked-background: transparent;
      --media-text-color: var(--_text-color);
      --media-menu-item-hover-background: transparent;
      --media-menu-item-hover-outline: var(--_accent-color) solid 1px;
    }

    media-rendition-menu {
      min-width: 140px;
    }

    /* The icon is a circle so make it 16px high instead of 14px for more balance. */
    media-audio-track-menu-button {
      --media-control-padding: 5px;
      --media-control-height: 16px;
    }

    media-playback-rate-menu-button {
      --media-control-padding: 6px 3px;
      min-width: 4.4ch;
    }

    media-playback-rate-menu {
      --media-menu-flex-direction: row;
      --media-menu-item-checked-background: var(--_accent-color);
      --media-menu-item-checked-indicator-display: none;
      margin-right: 6px;
      padding: 0;
      --media-menu-gap: 0.25em;
    }

    media-playback-rate-menu[part~='menu']::part(menu-item) {
      padding: 6px 6px 6px 8px;
    }

    media-playback-rate-menu[part~='menu']::part(checked) {
      color: #fff;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is([part*='button'], [part*='range'], [part*='display']) {
      border-radius: 3px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot~='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    media-control-bar {
      --gradient-steps:
        hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%, hsl(0 0% 0% / 0.104) 22.5%,
        hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%, hsl(0 0% 0% / 0.45) 47.1%,
        hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%, hsl(0 0% 0% / 0.825) 71%,
        hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%, hsl(0 0% 0%) 100%;
    }

    :host([title]) media-control-bar[slot='top-chrome']::before,
    :host([videotitle]) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to top, var(--gradient-steps));
      opacity: 0.8;
      pointer-events: none;
    }

    :host(:not([audio])) media-control-bar[part~='bottom']::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to bottom, var(--gradient-steps));
      opacity: 0.8;
      z-index: 1;
      pointer-events: none;
    }

    media-control-bar[part~='bottom'] > * {
      z-index: 20;
    }

    media-control-bar[part~='bottom'] {
      padding: 6px 6px;
    }

    media-control-bar[slot~='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      --media-tooltip-display: none;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    [breakpointsm] .center-controls media-play-button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transition: background 0.4s;
      padding: 24px;
      --media-control-background: #000;
      --media-control-hover-background: var(--_accent-color);
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 20px;
      width: max(33px, min(8%, 40px));
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback {
      display: grid;
      align-items: initial;
      justify-content: initial;
      height: 100%;
      overflow: hidden;
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {
      place-self: var(--_pre-playback-place, center);
      grid-area: 1 / 1;
      margin: 16px;
    }

    /* Show and hide controls or pre-playback state */

    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])
      .center-controls.pre-playback
      media-play-button {
      /* Using \`forwards\` would lead to a laggy UI after the animation got in the end state */
      animation: 0.3s linear pre-play-hide;
      opacity: 0;
      pointer-events: none;
    }

    .autoplay-unmute {
      --media-control-hover-background: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .autoplay-unmute-btn {
      --media-control-height: 16px;
      border-radius: 8px;
      background: #000;
      color: var(--_primary-color);
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    .autoplay-unmute-btn:hover {
      background: var(--_accent-color);
    }

    [breakpointsm] .autoplay-unmute-btn {
      --media-control-height: 30px;
      padding: 14px 24px;
      font-size: 26px;
    }

    .autoplay-unmute-btn svg {
      margin: 0 6px 0 0;
    }

    [breakpointsm] .autoplay-unmute-btn svg {
      margin: 0 10px 0 0;
    }

    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {
      display: none;
    }

    media-error-dialog:not([mediaerrorcode]) {
      opacity: 0;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_primary-color) 25%,
        var(--_primary-color)
      );
      --media-control-hover-background: none;
    }

    media-time-display {
      white-space: nowrap;
    }

    /* Generic style for explicitly disabled controls */
    media-control-bar[part~='bottom'] [disabled],
    media-control-bar[part~='bottom'] [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-text-display {
      --media-font-size: 16px;
      --media-control-padding: 14px;
      font-weight: 500;
    }

    media-play-button.animated *:is(g, path) {
      transition: all 0.3s;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt1 {
      opacity: 0;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt2 {
      transform-origin: center center;
      transform: scaleY(0);
    }

    media-play-button.animated[mediapaused] .play-icon {
      clip-path: inset(0 0 0 0);
    }

    media-play-button.animated:not([mediapaused]) .play-icon {
      clip-path: inset(0 0 0 100%);
    }

    media-seek-forward-button,
    media-seek-backward-button {
      --media-font-weight: 400;
    }

    .mute-icon {
      display: inline-block;
    }

    .mute-icon :is(path, g) {
      transition: opacity 0.5s;
    }

    .muted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='low'] :is(.volume-medium, .volume-high),
    media-mute-button[mediavolumelevel='medium'] :is(.volume-high) {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .unmuted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .muted {
      opacity: 1;
    }

    /**
     * Our defaults for these buttons are to hide them at small sizes
     * users can override this with CSS
     */
    media-controller:not([breakpointsm]):not([audio]) {
      --bottom-play-button: none;
      --bottom-seek-backward-button: none;
      --bottom-seek-forward-button: none;
      --bottom-time-display: none;
      --bottom-playback-rate-menu-button: none;
      --bottom-pip-button: none;
    }

    [part='mux-badge'] {
      position: absolute;
      bottom: 10px;
      right: 10px;
      z-index: 2;
      opacity: 0.6;
      transition:
        opacity 0.2s ease-in-out,
        bottom 0.2s ease-in-out;
    }

    [part='mux-badge']:hover {
      opacity: 1;
    }

    [part='mux-badge'] a {
      font-size: 14px;
      font-family: var(--_font-family);
      color: var(--_primary-color);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    [part='mux-badge'] .mux-badge-text {
      transition: opacity 0.5s ease-in-out;
      opacity: 0;
    }

    [part='mux-badge'] .mux-badge-logo {
      width: 40px;
      height: auto;
      display: inline-block;
    }

    [part='mux-badge'] .mux-badge-logo svg {
      width: 100%;
      height: 100%;
      fill: white;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'],
    media-controller:not([userinactive]) [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      transition: bottom 0.1s ease-in-out;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      transition: bottom 0.2s ease-in-out 0.62s;
    }

    media-controller:not([userinactive]) [part='mux-badge'] .mux-badge-text,
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] .mux-badge-text {
      opacity: 1;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] .mux-badge-text {
      opacity: 0;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive])[mediahasplayed] [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      bottom: calc(28px + var(--media-control-height, 0px) + var(--media-control-padding, 0px) * 2);
    }
  </style>

  <template partial="TitleDisplay">
    <template if="videotitle">
      <template if="videotitle != true">
        <media-text-display part="top title display" class="title-display">{{videotitle}}</media-text-display>
      </template>
    </template>
    <template if="!videotitle">
      <template if="title">
        <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
      </template>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      class="animated"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">
        <g class="play-icon">
          <path
            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
          />
        </g>
        <g class="pause-icon">
          <path
            class="pause-icon-pt1"
            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"
          />
          <path
            class="pause-icon-pt2"
            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"
          />
        </g>
      </svg>
    </media-play-button>
  </template>

  <template partial="PrePlayButton">
    <media-play-button
      part="{{section ?? 'center'}} play button pre-play"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">
        <path
          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <path
          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"
        />
        <text transform="translate(6 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <g>
          <text transform="translate(-1 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset}}
          </text>
          <path
            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"
          />
        </g>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">
        <g class="unmuted">
          <path
            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"
          />
          <path
            class="volume-low"
            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"
          />
          <path
            class="volume-medium"
            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"
          />
          <path
            class="volume-high"
            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"
          />
        </g>
        <g class="muted">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"
          />
        </g>
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"
        />
        <path
          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenu">
    <media-captions-menu-button part="bottom captions button">
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">
        <path
          d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">
        <path
          d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"
        />
        <path
          d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"
        />
        <path
          d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"
        />
      </svg>
    </media-captions-menu-button>
    <media-captions-menu
      hidden
      anchor="auto"
      part="bottom captions menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg></div
    ></media-captions-menu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"
        />
        <path
          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"
        />
        <path
          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"
        />
        <path
          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"
        />
        <path
          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"
        />
        <path
          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"
        />
        <path
          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"
        />
        <path
          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"
        />
        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button part="{{section ?? 'top'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <span slot="text">Live</span>
    </media-live-button>
  </template>

  <template partial="PlaybackRateMenu">
    <media-playback-rate-menu-button part="bottom playback-rate button"></media-playback-rate-menu-button>
    <media-playback-rate-menu
      hidden
      anchor="auto"
      rates="{{playbackrates}}"
      exportparts="menu-item"
      part="bottom playback-rate menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-menu>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}" exportparts="thumb">
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
      <div slot="preview" part="arrow"></div>
    </media-time-range>
  </template>

  <template partial="AudioTrackMenu">
    <media-audio-track-menu-button part="bottom audio-track button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">
        <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />
        <path
          d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"
        />
      </svg>
    </media-audio-track-menu-button>
    <media-audio-track-menu
      hidden
      anchor="auto"
      part="bottom audio-track menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-audio-track-menu>
  </template>

  <template partial="RenditionMenu">
    <media-rendition-menu-button part="bottom rendition button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">
        <path
          d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </svg>
    </media-rendition-menu-button>
    <media-rendition-menu
      hidden
      anchor="auto"
      part="bottom rendition menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            opacity: 0;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-rendition-menu>
  </template>

  <template partial="MuxBadge">
    <div part="mux-badge">
      <a href="https://www.mux.com/player" target="_blank">
        <span class="mux-badge-text">Powered by</span>
        <div class="mux-badge-logo">
          <svg
            viewBox="0 0 1600 500"
            style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"
          >
            <g>
              <path
                d="M994.287,93.486c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m0,-93.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,68.943 -56.09,125.033 -125.032,125.033c-68.942,-0 -125.03,-56.09 -125.03,-125.033l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,137.853 112.149,250.003 249.999,250.003c137.851,-0 250.001,-112.15 250.001,-250.003l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M1537.51,468.511c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m-275.883,-218.509l-143.33,143.329c-24.402,24.402 -24.402,63.966 0,88.368c24.402,24.402 63.967,24.402 88.369,-0l143.33,-143.329l143.328,143.329c24.402,24.4 63.967,24.402 88.369,-0c24.403,-24.402 24.403,-63.966 0.001,-88.368l-143.33,-143.329l0.001,-0.004l143.329,-143.329c24.402,-24.402 24.402,-63.965 0,-88.367c-24.402,-24.402 -63.967,-24.402 -88.369,-0l-143.329,143.328l-143.329,-143.328c-24.402,-24.401 -63.967,-24.402 -88.369,-0c-24.402,24.402 -24.402,63.965 0,88.367l143.329,143.329l0,0.004Z"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M437.511,468.521c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m23.915,-463.762c-23.348,-9.672 -50.226,-4.327 -68.096,13.544l-143.331,143.329l-143.33,-143.329c-17.871,-17.871 -44.747,-23.216 -68.096,-13.544c-23.349,9.671 -38.574,32.455 -38.574,57.729l0,375.026c0,34.51 27.977,62.486 62.487,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-224.173l80.843,80.844c24.404,24.402 63.965,24.402 88.369,-0l80.843,-80.844l0,224.173c0,34.51 27.976,62.486 62.486,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-375.026c0,-25.274 -15.224,-48.058 -38.573,-57.729"
                style="fill-rule: nonzero"
              ></path>
            </g>
          </svg>
        </div>
      </a>
    </div>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:470"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
    style="--_pre-playback-place:{{preplaybackplace ?? 'center'}}"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>

    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>

    <template if="!audio">
      <media-error-dialog slot="dialog" noautohide></media-error-dialog>
      <!-- Pre-playback UI -->
      <!-- same for both on-demand and live -->
      <div slot="centered-chrome" class="center-controls pre-playback">
        <template if="!breakpointsm">{{>PlayButton section="center"}}</template>
        <template if="breakpointsm">{{>PrePlayButton section="center"}}</template>
      </div>

      <!-- Mux Badge -->
      <template if="proudlydisplaymuxbadge"> {{>MuxBadge}} </template>

      <!-- Autoplay centered unmute button -->
      <!--
        todo: figure out how show this with available state variables
        needs to show when:
        - autoplay is enabled
        - playback has been successful
        - audio is muted
        - in place / instead of the pre-plaback play button
        - not to show again after user has interacted with this button
          - OR user has interacted with the mute button in the control bar
      -->
      <!--
        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug
        makes it appear even if commented out in the markup, add it back when code is un-commented
      -->
      <!-- <div slot="centered-chrome" class="autoplay-unmute">
        <div role="button" class="autoplay-unmute-btn">Unmute</div>
      </div> -->

      <template if="streamtype == 'on-demand'">
        <template if="breakpointsm">
          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>
        </template>
        {{>TimeRange}}
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}
          {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>PlaybackRateMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}}
          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar part="control-bar top" slot="top-chrome">
          {{>LiveButton}}
          <template if="breakpointsm"> {{>TitleDisplay}} </template>
        </media-control-bar>
        <template if="targetlivewindow > 0">{{>TimeRange}}</template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>
          {{>MuteButton}} {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
          {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          {{>MuteButton}}
          <template if="breakpointsm">{{>VolumeRange}}</template>
          {{>TimeDisplay}} {{>TimeRange}}
          <template if="breakpointsm">{{>PlaybackRateMenu}}</template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}}
          <template if="breakpointsm">
            {{>VolumeRange}}
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          </template>
          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>
          <template if="!targetlivewindow"><div class="spacer"></div></template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>
    </template>

    <slot></slot>
  </media-controller>
</template>
`,du=Ko.createElement("template");"innerHTML"in du&&(du.innerHTML=uA);var bm,ym,Ff=class extends sl{};Ff.template=(ym=(bm=du.content)==null?void 0:bm.children)==null?void 0:ym[0];zt.customElements.get("media-theme-gerwig")||zt.customElements.define("media-theme-gerwig",Ff);var cA="gerwig",oi={SRC:"src",POSTER:"poster"},A={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",ACCENT_COLOR:"accent-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",FULLSCREEN_ELEMENT:"fullscreen-element",DRM_TOKEN:"drm-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",DEFAULT_DURATION:"default-duration",TITLE:"title",VIDEO_TITLE:"video-title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",EXTRA_SOURCE_PARAMS:"extra-source-params",NO_VOLUME_PREF:"no-volume-pref",NO_MUTED_PREF:"no-muted-pref",CAST_RECEIVER:"cast-receiver",NO_TOOLTIPS:"no-tooltips",PROUDLY_DISPLAY_MUX_BADGE:"proudly-display-mux-badge",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended"},uu=["audio","backwardseekoffset","defaultduration","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","videotitle","novolumepref","nomutedpref","proudlydisplaymuxbadge"];function hA(e,t){var i,a,r;return D(D({src:!e.playbackId&&e.src,playbackId:e.playbackId,hasSrc:!!e.playbackId||!!e.src||!!e.currentSrc,poster:e.poster,storyboard:((i=e.media)==null?void 0:i.currentSrc)&&e.storyboard,storyboardSrc:e.getAttribute(A.STORYBOARD_SRC),fullscreenElement:e.getAttribute(A.FULLSCREEN_ELEMENT),placeholder:e.getAttribute("placeholder"),themeTemplate:pA(e),thumbnailTime:!e.tokens.thumbnail&&e.thumbnailTime,autoplay:e.autoplay,crossOrigin:e.crossOrigin,loop:e.loop,noHotKeys:e.hasAttribute(A.NOHOTKEYS),hotKeys:e.getAttribute(A.HOTKEYS),muted:e.muted,paused:e.paused,preload:e.preload,envKey:e.envKey,preferCmcd:e.preferCmcd,debug:e.debug,disableTracking:e.disableTracking,disableCookies:e.disableCookies,tokens:e.tokens,beaconCollectionDomain:e.beaconCollectionDomain,maxResolution:e.maxResolution,minResolution:e.minResolution,maxAutoResolution:e.maxAutoResolution,programStartTime:e.programStartTime,programEndTime:e.programEndTime,assetStartTime:e.assetStartTime,assetEndTime:e.assetEndTime,renditionOrder:e.renditionOrder,metadata:e.metadata,playerInitTime:e.playerInitTime,playerSoftwareName:e.playerSoftwareName,playerSoftwareVersion:e.playerSoftwareVersion,startTime:e.startTime,preferPlayback:e.preferPlayback,audio:e.audio,defaultStreamType:e.defaultStreamType,targetLiveWindow:e.getAttribute(_.TARGET_LIVE_WINDOW),streamType:Pc(e.getAttribute(_.STREAM_TYPE)),primaryColor:e.getAttribute(A.PRIMARY_COLOR),secondaryColor:e.getAttribute(A.SECONDARY_COLOR),accentColor:e.getAttribute(A.ACCENT_COLOR),forwardSeekOffset:e.forwardSeekOffset,backwardSeekOffset:e.backwardSeekOffset,defaultHiddenCaptions:e.defaultHiddenCaptions,defaultDuration:e.defaultDuration,defaultShowRemainingTime:e.defaultShowRemainingTime,hideDuration:vA(e),playbackRates:e.getAttribute(A.PLAYBACK_RATES),customDomain:(a=e.getAttribute(_.CUSTOM_DOMAIN))!=null?a:void 0,title:e.getAttribute(A.TITLE),videoTitle:(r=e.getAttribute(A.VIDEO_TITLE))!=null?r:e.getAttribute(A.TITLE),novolumepref:e.hasAttribute(A.NO_VOLUME_PREF),nomutedpref:e.hasAttribute(A.NO_MUTED_PREF),proudlyDisplayMuxBadge:e.hasAttribute(A.PROUDLY_DISPLAY_MUX_BADGE),castReceiver:e.castReceiver,disablePseudoEnded:e.hasAttribute(A.DISABLE_PSEUDO_ENDED)},t),{},{extraSourceParams:e.extraSourceParams})}var mA=Mv.formatErrorMessage;Mv.formatErrorMessage=e=>{var t,i;if(e instanceof C){let a=lA(e,!1);return`
      ${a!=null&&a.title?`<h3>${a.title}</h3>`:""}
      ${a!=null&&a.message||a!=null&&a.linkUrl?`<p>
        ${a==null?void 0:a.message}
        ${a!=null&&a.linkUrl?`<a
              href="${a.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${(t=a.linkText)!=null?t:""} ${O("(opens in a new window)")}"
              >${(i=a.linkText)!=null?i:a.linkUrl}</a
            >`:""}
      </p>`:""}
    `}return mA(e)};function pA(e){var t,i;let a=e.theme;if(a){let r=(i=(t=e.getRootNode())==null?void 0:t.getElementById)==null?void 0:i.call(t,a);if(r&&r instanceof HTMLTemplateElement)return r;a.startsWith("media-theme-")||(a=`media-theme-${a}`);let n=zt.customElements.get(a);if(n!=null&&n.template)return n.template}}function vA(e){var t;let i=(t=e.mediaController)==null?void 0:t.querySelector("media-time-display");return i&&getComputedStyle(i).getPropertyValue("--media-duration-display-display").trim()==="none"}function Tm(e){let t=e.videoTitle?{video_title:e.videoTitle}:{};return e.getAttributeNames().filter(i=>i.startsWith("metadata-")).reduce((i,a)=>{let r=e.getAttribute(a);return r!==null&&(i[a.replace(/^metadata-/,"").replace(/-/g,"_")]=r),i},t)}var fA=Object.values(_),EA=Object.values(oi),_A=Object.values(A),Am=Nf(),km="mux-player",Sm={isDialogOpen:!1},gA={redundant_streams:!0},so,oo,lo,Zi,uo,dr,me,Ri,Kf,cu,ji,wm,Im,Rm,Cm,bA=class extends fm{constructor(){super(),At(this,me),At(this,so),At(this,oo,!1),At(this,lo,{}),At(this,Zi,!0),At(this,uo,new H1(this,"hotkeys")),At(this,dr,D(D({},Sm),{},{onCloseErrorDialog:e=>{var t;((t=e.composedPath()[0])==null?void 0:t.localName)==="media-error-dialog"&&ye(this,me,cu).call(this,{isDialogOpen:!1})},onFocusInErrorDialog:e=>{var t;((t=e.composedPath()[0])==null?void 0:t.localName)==="media-error-dialog"&&(xf(this,Ko.activeElement)||e.preventDefault())}})),ei(this,so,Tu()),this.attachShadow({mode:"open"}),ye(this,me,Kf).call(this),this.isConnected&&ye(this,me,Ri).call(this)}static get NAME(){return km}static get VERSION(){return Am}static get observedAttributes(){var e;return[...(e=fm.observedAttributes)!=null?e:[],...EA,...fA,..._A]}get mediaTheme(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("media-theme")}get mediaController(){var e,t;return(t=(e=this.mediaTheme)==null?void 0:e.shadowRoot)==null?void 0:t.querySelector("media-controller")}connectedCallback(){let e=this.media;e&&(e.metadata=Tm(this))}attributeChangedCallback(e,t,i){var a;switch(ye(this,me,Ri).call(this),super.attributeChangedCallback(e,t,i),e){case A.HOTKEYS:J(this,uo).value=i;break;case A.THUMBNAIL_TIME:i!=null&&this.tokens.thumbnail&&di(O("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").toString());break;case A.THUMBNAIL_TOKEN:if(i){let r=tr(i);if(r){let{aud:n}=r,s=ln.THUMBNAIL;n!==s&&di(O("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:n,expectedAud:s,tokenNamePrefix:"thumbnail"}))}}break;case A.STORYBOARD_TOKEN:if(i){let r=tr(i);if(r){let{aud:n}=r,s=ln.STORYBOARD;n!==s&&di(O("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:n,expectedAud:s,tokenNamePrefix:"storyboard"}))}}break;case A.DRM_TOKEN:if(i){let r=tr(i);if(r){let{aud:n}=r,s=ln.DRM;n!==s&&di(O("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:n,expectedAud:s,tokenNamePrefix:"drm"}))}}break;case _.PLAYBACK_ID:i!=null&&i.includes("?token")&&ht(O("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:i}));break;case _.STREAM_TYPE:i&&![X.LIVE,X.ON_DEMAND,X.UNKNOWN].includes(i)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=i.includes("dvr")?Number.POSITIVE_INFINITY:0:Uf({file:"invalid-stream-type.md",message:O("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):i===X.LIVE?(a=this.getAttribute(A.TARGET_LIVE_WINDOW))!=null||(this.targetLiveWindow=0):this.targetLiveWindow=NaN;break;case A.FULLSCREEN_ELEMENT:if(i!=null||i!==t){let r=Ko.getElementById(i),n=r==null?void 0:r.querySelector("mux-player");this.mediaController&&r&&n&&(this.mediaController.fullscreenElement=r)}break}[_.PLAYBACK_ID,oi.SRC,A.PLAYBACK_TOKEN].includes(e)&&t!==i&&ei(this,dr,D(D({},J(this,dr)),Sm)),ye(this,me,ji).call(this,{[U1(e)]:i})}requestFullscreen(e){var t=this;return F(function*(){var i;if(!(!t.mediaController||t.mediaController.hasAttribute(h.MEDIA_IS_FULLSCREEN)))return(i=t.mediaController)==null||i.dispatchEvent(new zt.CustomEvent(I.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((a,r)=>{var n;(n=t.mediaController)==null||n.addEventListener(vi.MEDIA_IS_FULLSCREEN,()=>a(),{once:!0})})})()}exitFullscreen(){var e=this;return F(function*(){var t;if(!(!e.mediaController||!e.mediaController.hasAttribute(h.MEDIA_IS_FULLSCREEN)))return(t=e.mediaController)==null||t.dispatchEvent(new zt.CustomEvent(I.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((i,a)=>{var r;(r=e.mediaController)==null||r.addEventListener(vi.MEDIA_IS_FULLSCREEN,()=>i(),{once:!0})})})()}get preferCmcd(){var e;return(e=this.getAttribute(_.PREFER_CMCD))!=null?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?fo.includes(e)?this.setAttribute(_.PREFER_CMCD,e):di(`Invalid value for preferCmcd. Must be one of ${fo.join()}`):this.removeAttribute(_.PREFER_CMCD))}get hasPlayed(){var e,t;return(t=(e=this.mediaController)==null?void 0:e.hasAttribute(h.MEDIA_HAS_PLAYED))!=null?t:!1}get inLiveWindow(){var e;return(e=this.mediaController)==null?void 0:e.hasAttribute(h.MEDIA_TIME_IS_LIVE)}get _hls(){var e;return(e=this.media)==null?void 0:e._hls}get mux(){var e;return(e=this.media)==null?void 0:e.mux}get theme(){var e;return(e=this.getAttribute(A.THEME))!=null?e:cA}set theme(e){this.setAttribute(A.THEME,`${e}`)}get themeProps(){let e=this.mediaTheme;if(!e)return;let t={};for(let i of e.getAttributeNames()){if(uu.includes(i))continue;let a=e.getAttribute(i);t[Df(i)]=a===""?!0:a}return t}set themeProps(e){var t,i;ye(this,me,Ri).call(this);let a=D(D({},this.themeProps),e);for(let r in a){if(uu.includes(r))continue;let n=e==null?void 0:e[r];typeof n=="boolean"||n==null?(t=this.mediaTheme)==null||t.toggleAttribute(lu(r),!!n):(i=this.mediaTheme)==null||i.setAttribute(lu(r),n)}}get playbackId(){var e;return(e=this.getAttribute(_.PLAYBACK_ID))!=null?e:void 0}set playbackId(e){e?this.setAttribute(_.PLAYBACK_ID,e):this.removeAttribute(_.PLAYBACK_ID)}get src(){var e,t;return this.playbackId?(e=Vi(this,oi.SRC))!=null?e:void 0:(t=this.getAttribute(oi.SRC))!=null?t:void 0}set src(e){e?this.setAttribute(oi.SRC,e):this.removeAttribute(oi.SRC)}get poster(){var e;let t=this.getAttribute(oi.POSTER);if(t!=null)return t;let{tokens:i}=this;if(i.playback&&!i.thumbnail){di("Missing expected thumbnail token. No poster image will be shown");return}if(this.playbackId&&!this.audio)return O1(this.playbackId,{customDomain:this.customDomain,thumbnailTime:(e=this.thumbnailTime)!=null?e:this.startTime,programTime:this.programStartTime,token:i.thumbnail})}set poster(e){e||e===""?this.setAttribute(oi.POSTER,e):this.removeAttribute(oi.POSTER)}get storyboardSrc(){var e;return(e=this.getAttribute(A.STORYBOARD_SRC))!=null?e:void 0}set storyboardSrc(e){e?this.setAttribute(A.STORYBOARD_SRC,e):this.removeAttribute(A.STORYBOARD_SRC)}get storyboard(){let{tokens:e}=this;if(this.storyboardSrc&&!e.storyboard)return this.storyboardSrc;if(!(this.audio||!this.playbackId||!this.streamType||[X.LIVE,X.UNKNOWN].includes(this.streamType)||e.playback&&!e.storyboard))return N1(this.playbackId,{customDomain:this.customDomain,token:e.storyboard,programStartTime:this.programStartTime,programEndTime:this.programEndTime})}get audio(){return this.hasAttribute(A.AUDIO)}set audio(e){if(!e){this.removeAttribute(A.AUDIO);return}this.setAttribute(A.AUDIO,"")}get hotkeys(){return J(this,uo)}get nohotkeys(){return this.hasAttribute(A.NOHOTKEYS)}set nohotkeys(e){if(!e){this.removeAttribute(A.NOHOTKEYS);return}this.setAttribute(A.NOHOTKEYS,"")}get thumbnailTime(){return et(this.getAttribute(A.THUMBNAIL_TIME))}set thumbnailTime(e){this.setAttribute(A.THUMBNAIL_TIME,`${e}`)}get videoTitle(){var e,t;return(t=(e=this.getAttribute(A.VIDEO_TITLE))!=null?e:this.getAttribute(A.TITLE))!=null?t:""}set videoTitle(e){e!==this.videoTitle&&(e?this.setAttribute(A.VIDEO_TITLE,e):this.removeAttribute(A.VIDEO_TITLE))}get placeholder(){var e;return(e=Vi(this,A.PLACEHOLDER))!=null?e:""}set placeholder(e){this.setAttribute(A.PLACEHOLDER,`${e}`)}get primaryColor(){var e,t;let i=this.getAttribute(A.PRIMARY_COLOR);if(i!=null||this.mediaTheme&&(i=(t=(e=zt.getComputedStyle(this.mediaTheme))==null?void 0:e.getPropertyValue("--_primary-color"))==null?void 0:t.trim(),i))return i}set primaryColor(e){this.setAttribute(A.PRIMARY_COLOR,`${e}`)}get secondaryColor(){var e,t;let i=this.getAttribute(A.SECONDARY_COLOR);if(i!=null||this.mediaTheme&&(i=(t=(e=zt.getComputedStyle(this.mediaTheme))==null?void 0:e.getPropertyValue("--_secondary-color"))==null?void 0:t.trim(),i))return i}set secondaryColor(e){this.setAttribute(A.SECONDARY_COLOR,`${e}`)}get accentColor(){var e,t;let i=this.getAttribute(A.ACCENT_COLOR);if(i!=null||this.mediaTheme&&(i=(t=(e=zt.getComputedStyle(this.mediaTheme))==null?void 0:e.getPropertyValue("--_accent-color"))==null?void 0:t.trim(),i))return i}set accentColor(e){this.setAttribute(A.ACCENT_COLOR,`${e}`)}get defaultShowRemainingTime(){return this.hasAttribute(A.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(e){e?this.setAttribute(A.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(A.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(A.PLAYBACK_RATES))return this.getAttribute(A.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(e=>Number(e)).filter(e=>!Number.isNaN(e)).sort((e,t)=>e-t)}set playbackRates(e){if(!e){this.removeAttribute(A.PLAYBACK_RATES);return}this.setAttribute(A.PLAYBACK_RATES,e.join(" "))}get forwardSeekOffset(){var e;return(e=et(this.getAttribute(A.FORWARD_SEEK_OFFSET)))!=null?e:10}set forwardSeekOffset(e){this.setAttribute(A.FORWARD_SEEK_OFFSET,`${e}`)}get backwardSeekOffset(){var e;return(e=et(this.getAttribute(A.BACKWARD_SEEK_OFFSET)))!=null?e:10}set backwardSeekOffset(e){this.setAttribute(A.BACKWARD_SEEK_OFFSET,`${e}`)}get defaultHiddenCaptions(){return this.hasAttribute(A.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(e){e?this.setAttribute(A.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(A.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return et(this.getAttribute(A.DEFAULT_DURATION))}set defaultDuration(e){e==null?this.removeAttribute(A.DEFAULT_DURATION):this.setAttribute(A.DEFAULT_DURATION,`${e}`)}get playerInitTime(){return this.hasAttribute(_.PLAYER_INIT_TIME)?et(this.getAttribute(_.PLAYER_INIT_TIME)):J(this,so)}set playerInitTime(e){e!=this.playerInitTime&&(e==null?this.removeAttribute(_.PLAYER_INIT_TIME):this.setAttribute(_.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return(e=this.getAttribute(_.PLAYER_SOFTWARE_NAME))!=null?e:km}get playerSoftwareVersion(){var e;return(e=this.getAttribute(_.PLAYER_SOFTWARE_VERSION))!=null?e:Am}get beaconCollectionDomain(){var e;return(e=this.getAttribute(_.BEACON_COLLECTION_DOMAIN))!=null?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(_.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(_.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var e;return(e=this.getAttribute(_.MAX_RESOLUTION))!=null?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(_.MAX_RESOLUTION,e):this.removeAttribute(_.MAX_RESOLUTION))}get minResolution(){var e;return(e=this.getAttribute(_.MIN_RESOLUTION))!=null?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(_.MIN_RESOLUTION,e):this.removeAttribute(_.MIN_RESOLUTION))}get maxAutoResolution(){var e;return(e=this.getAttribute(_.MAX_AUTO_RESOLUTION))!=null?e:void 0}set maxAutoResolution(e){e==null?this.removeAttribute(_.MAX_AUTO_RESOLUTION):this.setAttribute(_.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){var e;return(e=this.getAttribute(_.RENDITION_ORDER))!=null?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(_.RENDITION_ORDER,e):this.removeAttribute(_.RENDITION_ORDER))}get programStartTime(){return et(this.getAttribute(_.PROGRAM_START_TIME))}set programStartTime(e){e==null?this.removeAttribute(_.PROGRAM_START_TIME):this.setAttribute(_.PROGRAM_START_TIME,`${e}`)}get programEndTime(){return et(this.getAttribute(_.PROGRAM_END_TIME))}set programEndTime(e){e==null?this.removeAttribute(_.PROGRAM_END_TIME):this.setAttribute(_.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){return et(this.getAttribute(_.ASSET_START_TIME))}set assetStartTime(e){e==null?this.removeAttribute(_.ASSET_START_TIME):this.setAttribute(_.ASSET_START_TIME,`${e}`)}get assetEndTime(){return et(this.getAttribute(_.ASSET_END_TIME))}set assetEndTime(e){e==null?this.removeAttribute(_.ASSET_END_TIME):this.setAttribute(_.ASSET_END_TIME,`${e}`)}get extraSourceParams(){return this.hasAttribute(A.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(A.EXTRA_SOURCE_PARAMS)).entries()].reduce((e,[t,i])=>(e[t]=i,e),{}):gA}set extraSourceParams(e){e==null?this.removeAttribute(A.EXTRA_SOURCE_PARAMS):this.setAttribute(A.EXTRA_SOURCE_PARAMS,new URLSearchParams(e).toString())}get customDomain(){var e;return(e=this.getAttribute(_.CUSTOM_DOMAIN))!=null?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(_.CUSTOM_DOMAIN,e):this.removeAttribute(_.CUSTOM_DOMAIN))}get envKey(){var e;return(e=Vi(this,_.ENV_KEY))!=null?e:void 0}set envKey(e){this.setAttribute(_.ENV_KEY,`${e}`)}get noVolumePref(){return this.hasAttribute(A.NO_VOLUME_PREF)}set noVolumePref(e){e?this.setAttribute(A.NO_VOLUME_PREF,""):this.removeAttribute(A.NO_VOLUME_PREF)}get noMutedPref(){return this.hasAttribute(A.NO_MUTED_PREF)}set noMutedPref(e){e?this.setAttribute(A.NO_MUTED_PREF,""):this.removeAttribute(A.NO_MUTED_PREF)}get debug(){return Vi(this,_.DEBUG)!=null}set debug(e){e?this.setAttribute(_.DEBUG,""):this.removeAttribute(_.DEBUG)}get disableTracking(){return Vi(this,_.DISABLE_TRACKING)!=null}set disableTracking(e){this.toggleAttribute(_.DISABLE_TRACKING,!!e)}get disableCookies(){return Vi(this,_.DISABLE_COOKIES)!=null}set disableCookies(e){e?this.setAttribute(_.DISABLE_COOKIES,""):this.removeAttribute(_.DISABLE_COOKIES)}get streamType(){var e,t,i;return(i=(t=this.getAttribute(_.STREAM_TYPE))!=null?t:(e=this.media)==null?void 0:e.streamType)!=null?i:X.UNKNOWN}set streamType(e){this.setAttribute(_.STREAM_TYPE,`${e}`)}get defaultStreamType(){var e,t,i;return(i=(t=this.getAttribute(A.DEFAULT_STREAM_TYPE))!=null?t:(e=this.mediaController)==null?void 0:e.getAttribute(A.DEFAULT_STREAM_TYPE))!=null?i:X.ON_DEMAND}set defaultStreamType(e){e?this.setAttribute(A.DEFAULT_STREAM_TYPE,e):this.removeAttribute(A.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var e,t;return this.hasAttribute(A.TARGET_LIVE_WINDOW)?+this.getAttribute(A.TARGET_LIVE_WINDOW):(t=(e=this.media)==null?void 0:e.targetLiveWindow)!=null?t:NaN}set targetLiveWindow(e){e==this.targetLiveWindow||Number.isNaN(e)&&Number.isNaN(this.targetLiveWindow)||(e==null?this.removeAttribute(A.TARGET_LIVE_WINDOW):this.setAttribute(A.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e;return(e=this.media)==null?void 0:e.liveEdgeStart}get startTime(){return et(Vi(this,_.START_TIME))}set startTime(e){this.setAttribute(_.START_TIME,`${e}`)}get preferPlayback(){let e=this.getAttribute(_.PREFER_PLAYBACK);if(e===Zt.MSE||e===Zt.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===Zt.MSE||e===Zt.NATIVE?this.setAttribute(_.PREFER_PLAYBACK,e):this.removeAttribute(_.PREFER_PLAYBACK))}get metadata(){var e;return(e=this.media)==null?void 0:e.metadata}set metadata(e){if(ye(this,me,Ri).call(this),!this.media){ht("underlying media element missing when trying to set metadata. metadata will not be set.");return}this.media.metadata=D(D({},Tm(this)),e)}get _hlsConfig(){var e;return(e=this.media)==null?void 0:e._hlsConfig}set _hlsConfig(e){if(ye(this,me,Ri).call(this),!this.media){ht("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.");return}this.media._hlsConfig=e}addCuePoints(e){var t=this;return F(function*(){var i;if(ye(t,me,Ri).call(t),!t.media){ht("underlying media element missing when trying to addCuePoints. cuePoints will not be added.");return}return(i=t.media)==null?void 0:i.addCuePoints(e)})()}get activeCuePoint(){var e;return(e=this.media)==null?void 0:e.activeCuePoint}get cuePoints(){var e,t;return(t=(e=this.media)==null?void 0:e.cuePoints)!=null?t:[]}addChapters(e){var t;if(ye(this,me,Ri).call(this),!this.media){ht("underlying media element missing when trying to addChapters. chapters will not be added.");return}return(t=this.media)==null?void 0:t.addChapters(e)}get activeChapter(){var e;return(e=this.media)==null?void 0:e.activeChapter}get chapters(){var e,t;return(t=(e=this.media)==null?void 0:e.chapters)!=null?t:[]}getStartDate(){var e;return(e=this.media)==null?void 0:e.getStartDate()}get currentPdt(){var e;return(e=this.media)==null?void 0:e.currentPdt}get tokens(){let e=this.getAttribute(A.PLAYBACK_TOKEN),t=this.getAttribute(A.DRM_TOKEN),i=this.getAttribute(A.THUMBNAIL_TOKEN),a=this.getAttribute(A.STORYBOARD_TOKEN);return D(D(D(D(D({},J(this,lo)),e!=null?{playback:e}:{}),t!=null?{drm:t}:{}),i!=null?{thumbnail:i}:{}),a!=null?{storyboard:a}:{})}set tokens(e){ei(this,lo,e!=null?e:{})}get playbackToken(){var e;return(e=this.getAttribute(A.PLAYBACK_TOKEN))!=null?e:void 0}set playbackToken(e){this.setAttribute(A.PLAYBACK_TOKEN,`${e}`)}get drmToken(){var e;return(e=this.getAttribute(A.DRM_TOKEN))!=null?e:void 0}set drmToken(e){this.setAttribute(A.DRM_TOKEN,`${e}`)}get thumbnailToken(){var e;return(e=this.getAttribute(A.THUMBNAIL_TOKEN))!=null?e:void 0}set thumbnailToken(e){this.setAttribute(A.THUMBNAIL_TOKEN,`${e}`)}get storyboardToken(){var e;return(e=this.getAttribute(A.STORYBOARD_TOKEN))!=null?e:void 0}set storyboardToken(e){this.setAttribute(A.STORYBOARD_TOKEN,`${e}`)}addTextTrack(e,t,i,a){var r;let n=(r=this.media)==null?void 0:r.nativeEl;if(n)return _u(n,e,t,i,a)}removeTextTrack(e){var t;let i=(t=this.media)==null?void 0:t.nativeEl;if(i)return pg(i,e)}get textTracks(){var e;return(e=this.media)==null?void 0:e.textTracks}get castReceiver(){var e;return(e=this.getAttribute(A.CAST_RECEIVER))!=null?e:void 0}set castReceiver(e){e!==this.castReceiver&&(e?this.setAttribute(A.CAST_RECEIVER,e):this.removeAttribute(A.CAST_RECEIVER))}get castCustomData(){var e;return(e=this.media)==null?void 0:e.castCustomData}set castCustomData(e){if(!this.media){ht("underlying media element missing when trying to set castCustomData. castCustomData will not be set.");return}this.media.castCustomData=e}get noTooltips(){return this.hasAttribute(A.NO_TOOLTIPS)}set noTooltips(e){if(!e){this.removeAttribute(A.NO_TOOLTIPS);return}this.setAttribute(A.NO_TOOLTIPS,"")}get proudlyDisplayMuxBadge(){return this.hasAttribute(A.PROUDLY_DISPLAY_MUX_BADGE)}set proudlyDisplayMuxBadge(e){e?this.setAttribute(A.PROUDLY_DISPLAY_MUX_BADGE,""):this.removeAttribute(A.PROUDLY_DISPLAY_MUX_BADGE)}};so=new WeakMap,oo=new WeakMap,lo=new WeakMap,Zi=new WeakMap,uo=new WeakMap,dr=new WeakMap,me=new WeakSet,Ri=function(){var e,t,i,a;if(!J(this,oo)){ei(this,oo,!0),ye(this,me,ji).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof zt.HTMLElement))throw""}catch(r){ht("<media-theme> failed to upgrade!")}try{customElements.upgrade(this.media)}catch(r){ht("underlying media element failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof Hb))throw""}catch(r){ht("<media-controller> failed to upgrade!")}ye(this,me,wm).call(this),ye(this,me,Im).call(this),ye(this,me,Rm).call(this),ei(this,Zi,(t=(e=this.mediaController)==null?void 0:e.hasAttribute(N.USER_INACTIVE))!=null?t:!0),ye(this,me,Cm).call(this),(i=this.media)==null||i.addEventListener("streamtypechange",()=>ye(this,me,ji).call(this)),(a=this.media)==null||a.addEventListener("loadstart",()=>ye(this,me,ji).call(this))}},Kf=function(){var e,t;try{(e=window==null?void 0:window.CSS)==null||e.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),(t=window==null?void 0:window.CSS)==null||t.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch(i){}},cu=function(e){Object.assign(J(this,dr),e),ye(this,me,ji).call(this)},ji=function(e={}){eA(iA(hA(this,D(D({},J(this,dr)),e))),this.shadowRoot)},wm=function(){let e=t=>{var i,a;if(!(t!=null&&t.startsWith("theme-")))return;let r=t.replace(/^theme-/,"");if(uu.includes(r))return;let n=this.getAttribute(t);n!=null?(i=this.mediaTheme)==null||i.setAttribute(r,n):(a=this.mediaTheme)==null||a.removeAttribute(r)};new MutationObserver(t=>{for(let{attributeName:i}of t)e(i)}).observe(this,{attributes:!0}),this.getAttributeNames().forEach(e)},Im=function(){let e=t=>{var i;let a=(i=this.media)==null?void 0:i.error;if(!(a instanceof C)){let{message:n,code:s}=a!=null?a:{};a=new C(n,s)}if(!(a!=null&&a.fatal)){di(a),a.data&&di(`${a.name} data:`,a.data);return}let r=gm(a,!1);r.message&&Uf(r),ht(a),a.data&&ht(`${a.name} data:`,a.data),ye(this,me,cu).call(this,{isDialogOpen:!0})};this.addEventListener("error",e),this.media&&(this.media.errorTranslator=(t={})=>{var i,a,r;if(!(((i=this.media)==null?void 0:i.error)instanceof C))return t;let n=gm((a=this.media)==null?void 0:a.error,!1);return{player_error_code:(r=this.media)==null?void 0:r.error.code,player_error_message:n.message?String(n.message):t.player_error_message,player_error_context:n.context?String(n.context):t.player_error_context}})},Rm=function(){var e,t,i,a;let r=()=>ye(this,me,ji).call(this);(t=(e=this.media)==null?void 0:e.textTracks)==null||t.addEventListener("addtrack",r),(a=(i=this.media)==null?void 0:i.textTracks)==null||a.addEventListener("removetrack",r)},Cm=function(){var e,t;if(!/Firefox/i.test(navigator.userAgent))return;let i,a=new WeakMap,r=()=>this.streamType===X.LIVE&&!this.secondaryColor&&this.offsetWidth>=800,n=(l,m,p=!1)=>{r()||Array.from(l&&l.activeCues||[]).forEach(d=>{if(!(!d.snapToLines||d.line<-5||d.line>=0&&d.line<10))if(!m||this.paused){let u=d.text.split(`
`).length,c=-3;this.streamType===X.LIVE&&(c=-2);let v=c-u;if(d.line===v&&!p)return;a.has(d)||a.set(d,d.line),d.line=v}else setTimeout(()=>{d.line=a.get(d)||"auto"},500)})},s=()=>{var l,m;n(i,(m=(l=this.mediaController)==null?void 0:l.hasAttribute(N.USER_INACTIVE))!=null?m:!1)},o=()=>{var l,m;let p=Array.from(((m=(l=this.mediaController)==null?void 0:l.media)==null?void 0:m.textTracks)||[]).filter(d=>["subtitles","captions"].includes(d.kind)&&d.mode==="showing")[0];p!==i&&(i==null||i.removeEventListener("cuechange",s)),i=p,i==null||i.addEventListener("cuechange",s),n(i,J(this,Zi))};o(),(e=this.textTracks)==null||e.addEventListener("change",o),(t=this.textTracks)==null||t.addEventListener("addtrack",o),this.addEventListener("userinactivechange",()=>{var l,m;let p=(m=(l=this.mediaController)==null?void 0:l.hasAttribute(N.USER_INACTIVE))!=null?m:!0;J(this,Zi)!==p&&(ei(this,Zi,p),n(i,J(this,Zi)))})};function Vi(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}var Lm=bA,Vf=e=>{throw TypeError(e)},qf=(e,t,i)=>t.has(e)||Vf("Cannot "+i),yA=(e,t,i)=>(qf(e,t,"read from private field"),i?i.call(e):t.get(e)),TA=(e,t,i)=>t.has(e)?Vf("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),AA=(e,t,i,a)=>(qf(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ul=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if(typeof DocumentFragment=="undefined"){class e extends ul{}globalThis.DocumentFragment=e}var Uc=class extends ul{},kA=class extends ul{},SA={get(e){},define(e,t,i){},getName(e){return null},upgrade(e){},whenDefined(e){return Promise.resolve(Uc)}},co,wA=class{constructor(e,t={}){TA(this,co),AA(this,co,t==null?void 0:t.detail)}get detail(){return yA(this,co)}initCustomEvent(){}};co=new WeakMap;function IA(e,t){return new Uc}var Yf={document:{createElement:IA},DocumentFragment,customElements:SA,CustomEvent:wA,EventTarget:ul,HTMLElement:Uc,HTMLVideoElement:kA},Gf=typeof window=="undefined"||typeof globalThis.customElements=="undefined",Pl=Gf?Yf:globalThis;Gf?Yf.document:globalThis.document;Pl.customElements.get("mux-player")||(Pl.customElements.define("mux-player",Lm),Pl.MuxPlayerElement=Lm);ti();var RA=["ref"],CA=["children"],LA=["onAbort","onCanPlay","onCanPlayThrough","onEmptied","onLoadStart","onLoadedData","onLoadedMetadata","onProgress","onDurationChange","onVolumeChange","onRateChange","onResize","onWaiting","onPlay","onPlaying","onTimeUpdate","onPause","onSeeking","onSeeked","onStalled","onSuspend","onEnded","onError","onCuePointChange","onChapterChange","metadata","tokens","paused","playbackId","playbackRates","currentTime","themeProps","extraSourceParams","castCustomData","_hlsConfig"],$f=parseInt("19.2.3")>=19,Dm={className:"class",classname:"class",htmlFor:"for",crossOrigin:"crossorigin",viewBox:"viewBox",playsInline:"playsinline",autoPlay:"autoplay",playbackRate:"playbackrate"},DA=e=>e==null,MA=(e,t)=>DA(t)?!1:e in t,xA=e=>e.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`),OA=(e,t)=>{if(!(!$f&&typeof t=="boolean"&&!t)){if(MA(e,Dm))return Dm[e];if(typeof t!="undefined")return/[A-Z]/.test(e)?xA(e):e}},NA=(e,t)=>!$f&&typeof e=="boolean"?"":e,PA=(e={})=>{let{ref:t}=e,i=xn(e,RA);return Object.entries(i).reduce((a,[r,n])=>{let s=OA(r,n);return s&&(a[s]=NA(n,r)),a},{})};function Mm(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function UA(...e){return t=>{let i=!1,a=e.map(r=>{let n=Mm(r,t);return!i&&typeof n=="function"&&(i=!0),n});if(i)return()=>{for(let r=0;r<a.length;r++){let n=a[r];typeof n=="function"?n():Mm(e[r],null)}}}}function HA(...e){return ui.useCallback(UA(...e),e)}var BA=Object.prototype.hasOwnProperty,WA=(e,t)=>{if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(Array.isArray(e))return!Array.isArray(t)||e.length!==t.length?!1:e.some((r,n)=>t[n]===r);let i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(let r=0;r<i.length;r++)if(!BA.call(t,i[r])||!Object.is(e[i[r]],t[i[r]]))return!1;return!0},Qf=(e,t,i)=>!WA(t,e[i]),FA=(e,t,i)=>{e[i]=t},KA=(e,t,i,a=FA,r=Qf)=>(0,ui.useEffect)(()=>{let n=i==null?void 0:i.current;n&&r(n,t,e)&&a(n,t,e)},[i==null?void 0:i.current,t]),Ot=KA,VA=()=>{try{return"3.10.2"}catch(e){}return"UNKNOWN"},qA=VA(),YA=()=>qA,ue=(e,t,i)=>(0,ui.useEffect)(()=>{let a=t==null?void 0:t.current;if(!a||!i)return;let r=e,n=i;return a.addEventListener(r,n),()=>{a.removeEventListener(r,n)}},[t==null?void 0:t.current,i,e]),GA=ui.forwardRef((e,t)=>{let{children:i}=e,a=xn(e,CA);return ui.createElement("mux-player",D(D({suppressHydrationWarning:!0},PA(a)),{},{ref:t}),i)}),$A=(e,t)=>{let{onAbort:i,onCanPlay:a,onCanPlayThrough:r,onEmptied:n,onLoadStart:s,onLoadedData:o,onLoadedMetadata:l,onProgress:m,onDurationChange:p,onVolumeChange:d,onRateChange:u,onResize:c,onWaiting:v,onPlay:b,onPlaying:E,onTimeUpdate:g,onPause:T,onSeeking:y,onSeeked:w,onStalled:R,onSuspend:M,onEnded:B,onError:Z,onCuePointChange:j,onChapterChange:K,metadata:ce,tokens:We,paused:Qe,playbackId:ze,playbackRates:Ee,currentTime:Ve,themeProps:vt,extraSourceParams:Lt,castCustomData:Oe,_hlsConfig:Re}=t,ai=xn(t,LA);return Ot("tokens",We,e),Ot("playbackId",ze,e),Ot("playbackRates",Ee,e),Ot("metadata",ce,e),Ot("extraSourceParams",Lt,e),Ot("_hlsConfig",Re,e),Ot("themeProps",vt,e),Ot("castCustomData",Oe,e),Ot("paused",Qe,e,(Fe,nt)=>{nt!=null&&(nt?Fe.pause():Fe.play())},(Fe,nt,Ea)=>Fe.hasAttribute("autoplay")&&!Fe.hasPlayed?!1:Qf(Fe,nt,Ea)),Ot("currentTime",Ve,e,(Fe,nt)=>{nt!=null&&(Fe.currentTime=nt)}),ue("abort",e,i),ue("canplay",e,a),ue("canplaythrough",e,r),ue("emptied",e,n),ue("loadstart",e,s),ue("loadeddata",e,o),ue("loadedmetadata",e,l),ue("progress",e,m),ue("durationchange",e,p),ue("volumechange",e,d),ue("ratechange",e,u),ue("resize",e,c),ue("waiting",e,v),ue("play",e,b),ue("playing",e,E),ue("timeupdate",e,g),ue("pause",e,T),ue("seeking",e,y),ue("seeked",e,w),ue("stalled",e,R),ue("suspend",e,M),ue("ended",e,B),ue("error",e,Z),ue("cuepointchange",e,j),ue("chapterchange",e,K),[ai]},QA=YA(),zA="mux-player-react",mk=ui.forwardRef((e,t)=>{var i;let a=(0,ui.useRef)(null),r=HA(a,t),[n]=$A(a,e),[s]=(0,ui.useState)((i=e.playerInitTime)!=null?i:Tu());return ui.createElement(GA,D({ref:r,defaultHiddenCaptions:e.defaultHiddenCaptions,playerSoftwareName:zA,playerSoftwareVersion:QA,playerInitTime:s},n))});export{rk as MaxResolution,C as MediaError,nk as MinResolution,sk as RenditionOrder,mk as default,Tu as generatePlayerInitTime,zA as playerSoftwareName,QA as playerSoftwareVersion};

//# sourceMappingURL=dist-BOfgLKdo.js.map