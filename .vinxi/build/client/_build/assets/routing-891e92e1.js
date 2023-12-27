import{z as Q,g as y,A as V,u as $,a as k,j as S,e as Y,B as T,w as _,h as Z,C as ee,D as te,c as ne}from"./web-454e75c3.js";function re(){let e=new Set;function t(r){return e.add(r),()=>e.delete(r)}let n=!1;function s(r,a){if(n)return!(n=!1);const o={to:r,options:a,defaultPrevented:!1,preventDefault:()=>o.defaultPrevented=!0};for(const i of e)i.listener({...o,from:i.location,retry:l=>{l&&(n=!0),i.navigate(r,a)}});return!o.defaultPrevented}return{subscribe:t,confirm:s}}const se=/^(?:[a-z0-9]+:)?\/\//i,ae=/^\/+|(\/)\/+$/g;function C(e,t=!1){const n=e.replace(ae,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function L(e,t,n){if(se.test(t))return;const s=C(e),r=n&&C(n);let a="";return!r||t.startsWith("/")?a=s:r.toLowerCase().indexOf(s.toLowerCase())!==0?a=s+r:a=r,(a||"/")+C(t,!a)}function oe(e,t){if(e==null)throw new Error(t);return e}function ce(e,t){return C(e).replace(/\/*(\*.*)?$/g,"")+C(t)}function z(e){const t={};return e.searchParams.forEach((n,s)=>{t[s]=n}),t}function ie(e,t,n){const[s,r]=e.split("/*",2),a=s.split("/").filter(Boolean),o=a.length;return i=>{const l=i.split("/").filter(Boolean),u=l.length-o;if(u<0||u>0&&r===void 0&&!t)return null;const d={path:o?"":"/",params:{}},p=h=>n===void 0?void 0:n[h];for(let h=0;h<o;h++){const m=a[h],R=l[h],w=m[0]===":",x=w?m.slice(1):m;if(w&&M(R,p(x)))d.params[x]=R;else if(w||!M(R,m))return null;d.path+="/".concat(R)}if(r){const h=u?l.slice(-u).join("/"):"";if(M(h,p(r)))d.params[r]=h;else return null}return d}}function M(e,t){const n=s=>s.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function ue(e){const[t,n]=e.pattern.split("/*",2),s=t.split("/").filter(Boolean);return s.reduce((r,a)=>r+(a.startsWith(":")?2:3),s.length-(n===void 0?0:1))}function le(e){const t=new Map,n=V();return new Proxy({},{get(s,r){return t.has(r)||Q(n,()=>t.set(r,y(()=>e()[r]))),t.get(r)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function D(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),s=e.slice(t.index+t[0].length);const r=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(s);)r.push(n+=t[1]),s=s.slice(t[0].length);return D(s).reduce((a,o)=>[...a,...r.map(i=>i+o)],[])}const fe=100,he=k(),W=k(),F=()=>oe($(he),"Make sure your app is wrapped in a <Router />"),de=()=>$(W)||F().base,Pe=e=>{const t=de();return y(()=>t.resolvePath(e()))},xe=e=>{const t=F();return y(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},be=()=>F().location;function pe(e,t=""){const{component:n,load:s,children:r,metadata:a}=e,o=!r||Array.isArray(r)&&!r.length,i={key:e,component:n,load:s,metadata:a};return K(e.path).reduce((l,u)=>{for(const d of D(u)){const p=ce(t,d),h=o?p:p.split("/*",1)[0];l.push({...i,originalPath:d,pattern:h,matcher:ie(h,!o,e.matchFilters)})}return l},[])}function me(e,t=0){return{routes:e,score:ue(e[e.length-1])*1e4-t,matcher(n){const s=[];for(let r=e.length-1;r>=0;r--){const a=e[r],o=a.matcher(n);if(!o)return null;s.unshift({...o,route:a})}return s}}}function K(e){return Array.isArray(e)?e:[e]}function ge(e,t="",n=[],s=[]){const r=K(e);for(let a=0,o=r.length;a<o;a++){const i=r[a];if(i&&typeof i=="object"){i.hasOwnProperty("path")||(i.path="");const l=pe(i,t);for(const u of l){n.push(u);const d=Array.isArray(i.children)&&i.children.length===0;if(i.children&&!d)ge(i.children,u.pattern,n,s);else{const p=me([...n],s.length);s.push(p)}n.pop()}}}return n.length?s:s.sort((a,o)=>o.score-a.score)}function ve(e,t){for(let n=0,s=e.length;n<s;n++){const r=e[n].matcher(t);if(r)return r}return[]}function ye(e,t){const n=new URL("http://sar"),s=y(l=>{const u=e();try{return new URL(u,n)}catch(d){return console.error("Invalid path ".concat(u)),l}},n,{equals:(l,u)=>l.href===u.href}),r=y(()=>s().pathname),a=y(()=>s().search,!0),o=y(()=>s().hash),i=()=>"";return{get pathname(){return r()},get search(){return a()},get hash(){return o()},get state(){return t()},get key(){return i()},query:le(Z(a,()=>z(s())))}}let v;function Ee(e,t,n={}){const{signal:[s,r],utils:a={}}=e,o=a.parsePath||(c=>c),i=a.renderPath||(c=>c),l=a.beforeLeave||re(),u=L("",n.base||"");if(u===void 0)throw new Error("".concat(u," is not a valid base path"));u&&!s().value&&r({value:u,replace:!0,scroll:!1});const[d,p]=S(!1),h=async c=>{p(!0);try{await ee(c)}finally{p(!1)}},[m,R]=S(s().value),[w,x]=S(s().state),U=ye(m,w),b=[],O=S([]),q={pattern:u,params:{},path:()=>u,outlet:()=>null,resolvePath(c){return L(u,c)}};return Y(()=>{const{value:c,state:f}=s();T(()=>{c!==m()&&h(()=>{v="native",R(c),x(f),_(),O[1]([])}).then(()=>{v=void 0})})}),{base:q,location:U,isRouting:d,renderPath:i,parsePath:o,navigatorFactory:X,beforeLeave:l,preloadRoute:J,submissions:O};function H(c,f,g){T(()=>{if(typeof f=="number"){f&&(a.go?l.confirm(f,g)&&a.go(f):console.warn("Router integration does not support relative routing"));return}const{replace:B,resolve:j,scroll:P,state:E}={replace:!1,resolve:!0,scroll:!0,...g},A=j?c.resolvePath(f):L("",f);if(A===void 0)throw new Error("Path '".concat(f,"' is not a routable path"));if(b.length>=fe)throw new Error("Too many redirects");const I=m();if((A!==I||E!==w())&&!te){if(l.confirm(A,g)){const N=b.push({value:I,replace:B,scroll:P,state:w()});h(()=>{v="navigate",R(A),x(E),_(),O[1]([])}).then(()=>{b.length===N&&(v=void 0,G({value:A,state:E}))})}}})}function X(c){return c=c||$(W)||q,(f,g)=>H(c,f,g)}function G(c){const f=b[0];f&&((c.value!==f.value||c.state!==f.state)&&r({...c,replace:f.replace,scroll:f.scroll}),b.length=0)}function J(c,f){const g=ve(t(),c.pathname),B=v;v="preload";for(let j in g){const{route:P,params:E}=g[j];P.component&&P.component.preload&&P.component.preload(),f&&P.load&&P.load({params:E,location:{pathname:c.pathname,search:c.search,hash:c.hash,query:z(c),state:null,key:""},intent:"preload"})}v=B}}function Ae(e,t,n,s,r){const{base:a,location:o}=e,{pattern:i,component:l,load:u}=s().route,d=y(()=>s().path);l&&l.preload&&l.preload();const p=u?u({params:r,location:o,intent:v||"initial"}):void 0;return{parent:t,pattern:i,path:d,params:r,outlet:()=>l?ne(l,{params:r,location:o,data:p,get children(){return n()}}):n(),resolvePath(m){return L(a.path(),m,d())}}}export{he as R,Ee as a,le as b,ge as c,W as d,Ae as e,xe as f,ve as g,be as h,C as n,Pe as u};
