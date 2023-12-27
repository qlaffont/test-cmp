System.register(["./web-legacy-6bb2d31f.js"],(function(t,e){"use strict";var r,n,o,a,s,c,l,i,u,h,p,f,d;return{setters:[t=>{r=t.z,n=t.g,o=t.A,a=t.u,s=t.a,c=t.j,l=t.e,i=t.B,u=t.w,h=t.h,p=t.C,f=t.D,t.F,d=t.c}],execute:function(){t({a:function(t,e,r={}){const{signal:[o,s],utils:d={}}=t,g=d.parsePath||(t=>t),v=d.renderPath||(t=>t),w=d.beforeLeave||function(){let t=new Set;function e(e){return t.add(e),()=>t.delete(e)}let r=!1;function n(e,n){if(r)return!(r=!1);const o={to:e,options:n,defaultPrevented:!1,preventDefault:()=>o.defaultPrevented=!0};for(const a of t)a.listener({...o,from:a.location,retry:t=>{t&&(r=!0),a.navigate(e,n)}});return!o.defaultPrevented}return{subscribe:e,confirm:n}}(),b=m("",r.base||"");if(void 0===b)throw new Error(`${b} is not a valid base path`);b&&!o().value&&s({value:b,replace:!0,scroll:!1});const[P,R]=c(!1),$=async t=>{R(!0);try{await p(t)}finally{R(!1)}},[L,j]=c(o().value),[k,B]=c(o().state),D=function(t,e){const r=new URL("http://sar"),o=n((e=>{const n=t();try{return new URL(n,r)}catch(o){return console.error(`Invalid path ${n}`),e}}),r,{equals:(t,e)=>t.href===e.href}),a=n((()=>o().pathname)),s=n((()=>o().search),!0),c=n((()=>o().hash)),l=()=>"";return{get pathname(){return a()},get search(){return s()},get hash(){return c()},get state(){return e()},get key(){return l()},query:A(h(s,(()=>y(o()))))}}(L,k),F=[],O=c([]),z={pattern:b,params:{},path:()=>b,outlet:()=>null,resolvePath:t=>m(b,t)};return l((()=>{const{value:t,state:e}=o();i((()=>{t!==L()&&$((()=>{q="native",j(t),B(e),u(),O[1]([])})).then((()=>{q=void 0}))}))})),{base:z,location:D,isRouting:P,renderPath:v,parsePath:g,navigatorFactory:function(t){return t=t||a(E)||z,(e,r)=>K(t,e,r)},beforeLeave:w,preloadRoute:function(t,r){const n=C(e(),t.pathname),o=q;q="preload";for(let e in n){const{route:o,params:a}=n[e];o.component&&o.component.preload&&o.component.preload(),r&&o.load&&o.load({params:a,location:{pathname:t.pathname,search:t.search,hash:t.hash,query:y(t),state:null,key:""},intent:"preload"})}q=o},submissions:O};function K(t,e,r){i((()=>{if("number"==typeof e)return void(e&&(d.go?w.confirm(e,r)&&d.go(e):console.warn("Router integration does not support relative routing")));const{replace:n,resolve:o,scroll:a,state:c}={replace:!1,resolve:!0,scroll:!0,...r},l=o?t.resolvePath(e):m("",e);if(void 0===l)throw new Error(`Path '${e}' is not a routable path`);if(F.length>=x)throw new Error("Too many redirects");const i=L();if(l!==i||c!==k())if(f);else if(w.confirm(l,r)){const t=F.push({value:i,replace:n,scroll:a,state:k()});$((()=>{q="navigate",j(l),B(c),u(),O[1]([])})).then((()=>{F.length===t&&(q=void 0,function(t){const e=F[0];e&&(t.value===e.value&&t.state===e.state||s({...t,replace:e.replace,scroll:e.scroll}),F.length=0)}({value:l,state:c}))}))}}))}},b:A,c:function t(e,r="",n=[],o=[]){const a=B(e);for(let s=0,c=a.length;s<c;s++){const e=a[s];if(e&&"object"==typeof e){e.hasOwnProperty("path")||(e.path="");const a=j(e,r);for(const r of a){n.push(r);const a=Array.isArray(e.children)&&0===e.children.length;if(e.children&&!a)t(e.children,r.pattern,n,o);else{const t=k([...n],o.length);o.push(t)}n.pop()}}}return n.length?o:o.sort(((t,e)=>e.score-t.score))},e:function(t,e,r,o,a){const{base:s,location:c}=t,{pattern:l,component:i,load:u}=o().route,h=n((()=>o().path));i&&i.preload&&i.preload();const p=u?u({params:a,location:c,intent:q||"initial"}):void 0;return{parent:e,pattern:l,path:h,params:a,outlet:()=>i?d(i,{params:a,location:c,data:p,get children(){return r()}}):r(),resolvePath:t=>m(s.path(),t,h())}},g:C,n:v});const e=/^(?:[a-z0-9]+:)?\/\//i,g=/^\/+|(\/)\/+$/g;function v(t,e=!1){const r=t.replace(g,"$1");return r?e||/^[?#]/.test(r)?r:"/"+r:""}function m(t,r,n){if(e.test(r))return;const o=v(t),a=n&&v(n);let s="";return s=!a||r.startsWith("/")?o:0!==a.toLowerCase().indexOf(o.toLowerCase())?o+a:a,(s||"/")+v(r,!s)}function y(t){const e={};return t.searchParams.forEach(((t,r)=>{e[r]=t})),e}function w(t,e,r){const[n,o]=t.split("/*",2),a=n.split("/").filter(Boolean),s=a.length;return t=>{const n=t.split("/").filter(Boolean),c=n.length-s;if(c<0||c>0&&void 0===o&&!e)return null;const l={path:s?"":"/",params:{}},i=t=>void 0===r?void 0:r[t];for(let e=0;e<s;e++){const t=a[e],r=n[e],o=":"===t[0],s=o?t.slice(1):t;if(o&&b(r,i(s)))l.params[s]=r;else if(o||!b(r,t))return null;l.path+=`/${r}`}if(o){const t=c?n.slice(-c).join("/"):"";if(!b(t,i(o)))return null;l.params[o]=t}return l}}function b(t,e){const r=e=>0===e.localeCompare(t,void 0,{sensitivity:"base"});return void 0===e||("string"==typeof e?r(e):"function"==typeof e?e(t):Array.isArray(e)?e.some(r):e instanceof RegExp&&e.test(t))}function P(t){const[e,r]=t.pattern.split("/*",2),n=e.split("/").filter(Boolean);return n.reduce(((t,e)=>t+(e.startsWith(":")?2:3)),n.length-(void 0===r?0:1))}function A(t){const e=new Map,a=o();return new Proxy({},{get:(o,s)=>(e.has(s)||r(a,(()=>e.set(s,n((()=>t()[s]))))),e.get(s)()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),ownKeys:()=>Reflect.ownKeys(t())})}function R(t){let e=/(\/?\:[^\/]+)\?/.exec(t);if(!e)return[t];let r=t.slice(0,e.index),n=t.slice(e.index+e[0].length);const o=[r,r+=e[1]];for(;e=/^(\/\:[^\/]+)\?/.exec(n);)o.push(r+=e[1]),n=n.slice(e[0].length);return R(n).reduce(((t,e)=>[...t,...o.map((t=>t+e))]),[])}const x=100,$=t("R",s()),E=t("d",s()),L=()=>function(t,e){if(null==t)throw new Error(e);return t}(a($),"Make sure your app is wrapped in a <Router />");function j(t,e=""){const{component:r,load:n,children:o,metadata:a}=t,s=!o||Array.isArray(o)&&!o.length,c={key:t,component:r,load:n,metadata:a};return B(t.path).reduce(((r,n)=>{for(const a of R(n)){const n=(o=a,v(e).replace(/\/*(\*.*)?$/g,"")+v(o)),l=s?n:n.split("/*",1)[0];r.push({...c,originalPath:a,pattern:l,matcher:w(l,!s,t.matchFilters)})}var o;return r}),[])}function k(t,e=0){return{routes:t,score:1e4*P(t[t.length-1])-e,matcher(e){const r=[];for(let n=t.length-1;n>=0;n--){const o=t[n],a=o.matcher(e);if(!a)return null;r.unshift({...a,route:o})}return r}}}function B(t){return Array.isArray(t)?t:[t]}function C(t,e){for(let r=0,n=t.length;r<n;r++){const n=t[r].matcher(e);if(n)return n}return[]}let q;t("u",(t=>{const e=a(E)||L().base;return n((()=>e.resolvePath(t())))})),t("f",(t=>{const e=L();return n((()=>{const r=t();return void 0!==r?e.renderPath(r):r}))})),t("h",(()=>L().location))}}}));