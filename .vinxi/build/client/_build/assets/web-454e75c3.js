const u={context:void 0,registry:void 0};function $(e){u.context=e}function ke(){return{...u.context,id:"".concat(u.context.id).concat(u.context.count++,"-"),count:0}}const Le=(e,t)=>e===t,W=Symbol("solid-proxy"),Y={equals:Le};let q=null,pe=$e;const C=1,H=2,Se={owned:null,cleanups:null,context:null,owner:null},ne={};var a=null;let f=null,y=null,A=null,p=null,J=0;function Ae(e,t){const n=y,s=a,r=e.length===0,i=t===void 0?s:t,l=r?Se:{owned:null,cleanups:null,context:i?i.context:null,owner:i},o=r?e:()=>e(()=>O(()=>k(l)));a=l,y=null;try{return E(o,!0)}finally{y=n,a=s}}function j(e,t){t=t?Object.assign({},Y,t):Y;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=r=>(typeof r=="function"&&(f&&f.running&&f.sources.has(n)?r=r(n.tValue):r=r(n.value)),Pe(n,r));return[Ce.bind(n),s]}function de(e,t,n){const s=K(e,t,!0,C);_(s)}function V(e,t,n){const s=K(e,t,!1,C);_(s)}function gt(e,t,n){pe=Re;const s=K(e,t,!1,C),r=D&&fe(D);r&&(s.suspense=r),(!n||!n.render)&&(s.user=!0),p?p.push(s):_(s)}function N(e,t,n){n=n?Object.assign({},Y,n):Y;const s=K(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,_(s),Ce.bind(s)}function ve(e){return e&&typeof e=="object"&&"then"in e}function Ve(e,t,n){let s,r,i;arguments.length===2&&typeof t=="object"||arguments.length===1?(s=!0,r=e,i=t||{}):(s=e,r=t,i=n||{});let l=null,o=ne,c=null,h=!1,d=!1,g="initialValue"in i,m=typeof s=="function"&&N(s);const S=new Set,[P,T]=(i.storage||j)(i.initialValue),[L,I]=j(void 0),[v,Z]=j(void 0,{equals:!1}),[ue,ce]=j(g?"ready":"unresolved");if(u.context){c="".concat(u.context.id).concat(u.context.count++);let w;i.ssrLoadFrom==="initial"?o=i.initialValue:u.load&&(w=u.load(c))&&(o=w)}function M(w,b,x,F){return l===w&&(l=null,F!==void 0&&(g=!0),(w===o||b===o)&&i.onHydrated&&queueMicrotask(()=>i.onHydrated(F,{value:b})),o=ne,f&&w&&h?(f.promises.delete(w),h=!1,E(()=>{f.running=!0,ae(b,x)},!1)):ae(b,x)),b}function ae(w,b){E(()=>{b===void 0&&T(()=>w),ce(b!==void 0?"errored":g?"ready":"unresolved"),I(b);for(const x of S.keys())x.decrement();S.clear()},!1)}function ee(){const w=D&&fe(D),b=P(),x=L();if(x!==void 0&&!l)throw x;return y&&!y.user&&w&&de(()=>{v(),l&&(w.resolved&&f&&h?f.promises.add(l):S.has(w)||(w.increment(),S.add(w)))}),b}function te(w=!0){if(w!==!1&&d)return;d=!1;const b=m?m():s;if(h=f&&f.running,b==null||b===!1){M(l,O(P));return}f&&l&&f.promises.delete(l);const x=o!==ne?o:O(()=>r(b,{value:P(),refetching:w}));return ve(x)?(l=x,"value"in x?(x.status==="success"?M(l,x.value,void 0,b):M(l,void 0,void 0,b),x):(d=!0,queueMicrotask(()=>d=!1),E(()=>{ce(g?"refreshing":"pending"),Z()},!1),x.then(F=>M(x,F,void 0,b),F=>M(x,void 0,je(F),b)))):(M(l,x,void 0,b),x)}return Object.defineProperties(ee,{state:{get:()=>ue()},error:{get:()=>L()},loading:{get(){const w=ue();return w==="pending"||w==="refreshing"}},latest:{get(){if(!g)return ee();const w=L();if(w&&!l)throw w;return P()}}}),m?de(()=>te(!1)):te(!1),[ee,{refetch:te,mutate:T}]}function yt(e){return E(e,!1)}function O(e){if(y===null)return e();const t=y;y=null;try{return e()}finally{y=t}}function wt(e,t,n){const s=Array.isArray(e);let r,i=n&&n.defer;return l=>{let o;if(s){o=Array(e.length);for(let h=0;h<e.length;h++)o[h]=e[h]()}else o=e();if(i){i=!1;return}const c=O(()=>t(o,r,l));return r=o,c}}function Ee(e){return a===null||(a.cleanups===null?a.cleanups=[e]:a.cleanups.push(e)),e}function De(e,t){q||(q=Symbol("error")),a=K(void 0,void 0,!0),a.context={...a.context,[q]:[t]},f&&f.running&&f.sources.add(a);try{return e()}catch(n){X(n)}finally{a=a.owner}}function Ie(){return a}function bt(e,t){const n=a,s=y;a=e,y=null;try{return E(t,!0)}catch(r){X(r)}finally{a=n,y=s}}function mt(e){if(f&&f.running)return e(),f.done;const t=y,n=a;return Promise.resolve().then(()=>{y=t,a=n;let s;return D&&(s=f||(f={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),s.done||(s.done=new Promise(r=>s.resolve=r)),s.running=!0),E(e,!1),y=a=null,s?s.done:void 0})}const[xt,he]=j(!1);function Me(e){p.push.apply(p,e),e.length=0}function Oe(e,t){const n=Symbol("context");return{id:n,Provider:_e(n),defaultValue:e}}function fe(e){return a&&a.context&&a.context[e.id]!==void 0?a.context[e.id]:e.defaultValue}function Fe(e){const t=N(e),n=N(()=>ie(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}let D;function Ue(){return D||(D=Oe())}function Ce(){const e=f&&f.running;if(this.sources&&(e?this.tState:this.state))if((e?this.tState:this.state)===C)_(this);else{const t=A;A=null,E(()=>Q(this),!1),A=t}if(y){const t=this.observers?this.observers.length:0;y.sources?(y.sources.push(this),y.sourceSlots.push(t)):(y.sources=[this],y.sourceSlots=[t]),this.observers?(this.observers.push(y),this.observerSlots.push(y.sources.length-1)):(this.observers=[y],this.observerSlots=[y.sources.length-1])}return e&&f.sources.has(this)?this.tValue:this.value}function Pe(e,t,n){let s=f&&f.running&&f.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(s,t)){if(f){const r=f.running;(r||!n&&f.sources.has(e))&&(f.sources.add(e),e.tValue=t),r||(e.value=t)}else e.value=t;e.observers&&e.observers.length&&E(()=>{for(let r=0;r<e.observers.length;r+=1){const i=e.observers[r],l=f&&f.running;l&&f.disposed.has(i)||((l?!i.tState:!i.state)&&(i.pure?A.push(i):p.push(i),i.observers&&Ne(i)),l?i.tState=C:i.state=C)}if(A.length>1e6)throw A=[],new Error},!1)}return t}function _(e){if(!e.fn)return;k(e);const t=J;ge(e,f&&f.running&&f.sources.has(e)?e.tValue:e.value,t),f&&!f.running&&f.sources.has(e)&&queueMicrotask(()=>{E(()=>{f&&(f.running=!0),y=a=e,ge(e,e.tValue,t),y=a=null},!1)})}function ge(e,t,n){let s;const r=a,i=y;y=a=e;try{s=e.fn(t)}catch(l){return e.pure&&(f&&f.running?(e.tState=C,e.tOwned&&e.tOwned.forEach(k),e.tOwned=void 0):(e.state=C,e.owned&&e.owned.forEach(k),e.owned=null)),e.updatedAt=n+1,X(l)}finally{y=i,a=r}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Pe(e,s,!0):f&&f.running&&e.pure?(f.sources.add(e),e.tValue=s):e.value=s,e.updatedAt=n)}function K(e,t,n,s=C,r){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:a,context:a?a.context:null,pure:n};return f&&f.running&&(i.state=0,i.tState=s),a===null||a!==Se&&(f&&f.running&&a.pure?a.tOwned?a.tOwned.push(i):a.tOwned=[i]:a.owned?a.owned.push(i):a.owned=[i]),i}function z(e){const t=f&&f.running;if((t?e.tState:e.state)===0)return;if((t?e.tState:e.state)===H)return Q(e);if(e.suspense&&O(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<J);){if(t&&f.disposed.has(e))return;(t?e.tState:e.state)&&n.push(e)}for(let s=n.length-1;s>=0;s--){if(e=n[s],t){let r=e,i=n[s+1];for(;(r=r.owner)&&r!==i;)if(f.disposed.has(r))return}if((t?e.tState:e.state)===C)_(e);else if((t?e.tState:e.state)===H){const r=A;A=null,E(()=>Q(e,n[0]),!1),A=r}}}function E(e,t){if(A)return e();let n=!1;t||(A=[]),p?n=!0:p=[],J++;try{const s=e();return Be(n),s}catch(s){n||(p=null),A=null,X(s)}}function Be(e){if(A&&($e(A),A=null),e)return;let t;if(f){if(!f.promises.size&&!f.queue.size){const s=f.sources,r=f.disposed;p.push.apply(p,f.effects),t=f.resolve;for(const i of p)"tState"in i&&(i.state=i.tState),delete i.tState;f=null,E(()=>{for(const i of r)k(i);for(const i of s){if(i.value=i.tValue,i.owned)for(let l=0,o=i.owned.length;l<o;l++)k(i.owned[l]);i.tOwned&&(i.owned=i.tOwned),delete i.tValue,delete i.tOwned,i.tState=0}he(!1)},!1)}else if(f.running){f.running=!1,f.effects.push.apply(f.effects,p),p=null,he(!0);return}}const n=p;p=null,n.length&&E(()=>pe(n),!1),t&&t()}function $e(e){for(let t=0;t<e.length;t++)z(e[t])}function Re(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:z(s)}if(u.context){if(u.count){u.effects||(u.effects=[]),u.effects.push(...e.slice(0,n));return}else u.effects&&(e=[...u.effects,...e],n+=u.effects.length,delete u.effects);$()}for(t=0;t<n;t++)z(e[t])}function Q(e,t){const n=f&&f.running;n?e.tState=0:e.state=0;for(let s=0;s<e.sources.length;s+=1){const r=e.sources[s];if(r.sources){const i=n?r.tState:r.state;i===C?r!==t&&(!r.updatedAt||r.updatedAt<J)&&z(r):i===H&&Q(r,t)}}}function Ne(e){const t=f&&f.running;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(t?!s.tState:!s.state)&&(t?s.tState=H:s.state=H,s.pure?A.push(s):p.push(s),s.observers&&Ne(s))}}function k(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const i=r.pop(),l=n.observerSlots.pop();s<r.length&&(i.sourceSlots[l]=s,r[s]=i,n.observerSlots[s]=l)}}if(f&&f.running&&e.pure){if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)k(e.tOwned[t]);delete e.tOwned}Te(e,!0)}else if(e.owned){for(t=e.owned.length-1;t>=0;t--)k(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}f&&f.running?e.tState=0:e.state=0}function Te(e,t){if(t||(e.tState=0,f.disposed.add(e)),e.owned)for(let n=0;n<e.owned.length;n++)Te(e.owned[n])}function je(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function ye(e,t,n){try{for(const s of t)s(e)}catch(s){X(s,n&&n.owner||null)}}function X(e,t=a){const n=q&&t&&t.context&&t.context[q],s=je(e);if(!n)throw s;p?p.push({fn(){ye(s,n,t)},state:C}):ye(s,n,t)}function ie(e){if(typeof e=="function"&&!e.length)return ie(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=ie(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function _e(e,t){return function(s){let r;return V(()=>r=O(()=>(a.context={...a.context,[e]:s.value},Fe(()=>s.children))),void 0),r}}let qe=!1;function He(e,t){if(qe&&u.context){const n=u.context;$(ke());const s=O(()=>e(t||{}));return $(n),s}return O(()=>e(t||{}))}function G(){return!0}const re={get(e,t,n){return t===W?n:e.get(t)},has(e,t){return t===W?!0:e.has(t)},set:G,deleteProperty:G,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:G,deleteProperty:G}},ownKeys(e){return e.keys()}};function se(e){return(e=typeof e=="function"?e():e)?e:{}}function Ke(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function pt(...e){let t=!1;for(let i=0;i<e.length;i++){const l=e[i];t=t||!!l&&W in l,e[i]=typeof l=="function"?(t=!0,N(l)):l}if(t)return new Proxy({get(i){for(let l=e.length-1;l>=0;l--){const o=se(e[l])[i];if(o!==void 0)return o}},has(i){for(let l=e.length-1;l>=0;l--)if(i in se(e[l]))return!0;return!1},keys(){const i=[];for(let l=0;l<e.length;l++)i.push(...Object.keys(se(e[l])));return[...new Set(i)]}},re);const n={},s={},r=new Set;for(let i=e.length-1;i>=0;i--){const l=e[i];if(!l)continue;const o=Object.getOwnPropertyNames(l);for(let c=0,h=o.length;c<h;c++){const d=o[c];if(d==="__proto__"||d==="constructor")continue;const g=Object.getOwnPropertyDescriptor(l,d);if(!r.has(d))g.get?(r.add(d),Object.defineProperty(n,d,{enumerable:!0,configurable:!0,get:Ke.bind(s[d]=[g.get.bind(l)])})):(g.value!==void 0&&r.add(d),n[d]=g.value);else{const m=s[d];m?g.get?m.push(g.get.bind(l)):g.value!==void 0&&m.push(()=>g.value):n[d]===void 0&&(n[d]=g.value)}}}return n}function St(e,...t){if(W in e){const r=new Set(t.length>1?t.flat():t[0]),i=t.map(l=>new Proxy({get(o){return l.includes(o)?e[o]:void 0},has(o){return l.includes(o)&&o in e},keys(){return l.filter(o=>o in e)}},re));return i.push(new Proxy({get(l){return r.has(l)?void 0:e[l]},has(l){return r.has(l)?!1:l in e},keys(){return Object.keys(e).filter(l=>!r.has(l))}},re)),i}const n={},s=t.map(()=>({}));for(const r of Object.getOwnPropertyNames(e)){const i=Object.getOwnPropertyDescriptor(e,r),l=!i.get&&!i.set&&i.enumerable&&i.writable&&i.configurable;let o=!1,c=0;for(const h of t)h.includes(r)&&(o=!0,l?s[c][r]=i.value:Object.defineProperty(s[c],r,i)),++c;o||(l?n[r]=i.value:Object.defineProperty(n,r,i))}return[...s,n]}function At(e){let t,n;const s=r=>{const i=u.context;if(i){const[o,c]=j();u.count||(u.count=0),u.count++,(n||(n=e())).then(h=>{$(i),u.count--,c(()=>h.default),$()}),t=o}else if(!t){const[o]=Ve(()=>(n||(n=e())).then(c=>c.default));t=o}let l;return N(()=>(l=t())&&O(()=>{if(!i)return l(r);const o=u.context;$(i);const c=l(r);return $(o),c}))};return s.preload=()=>n||((n=e()).then(r=>t=()=>r.default),n),s}let Xe=0;function Et(){const e=u.context;return e?"".concat(e.id).concat(e.count++):"cl-".concat(Xe++)}const Ge=e=>"Stale read from <".concat(e,">.");function Ot(e){const t=e.keyed,n=N(()=>e.when,void 0,{equals:(s,r)=>t?s===r:!s==!r});return N(()=>{const s=n();if(s){const r=e.children;return typeof r=="function"&&r.length>0?O(()=>r(t?s:()=>{if(!O(n))throw Ge("Show");return e.when})):r}return e.fallback},void 0,void 0)}let B;function Ct(){B&&[...B].forEach(e=>e())}function Pt(e){let t;u.context&&u.load&&(t=u.load(u.context.id+u.context.count));const[n,s]=j(t,void 0);return B||(B=new Set),B.add(s),Ee(()=>B.delete(s)),N(()=>{let r;if(r=n()){const i=e.fallback;return typeof i=="function"&&i.length?O(()=>i(r,()=>s())):i}return De(()=>e.children,s)},void 0,void 0)}const We=Oe();function $t(e){let t=0,n,s,r,i,l;const[o,c]=j(!1),h=Ue(),d={increment:()=>{++t===1&&c(!0)},decrement:()=>{--t===0&&c(!1)},inFallback:o,effects:[],resolved:!1},g=Ie();if(u.context&&u.load){const P=u.context.id+u.context.count;let T=u.load(P);if(T&&(typeof T!="object"||T.status!=="success")&&(r=T),r&&r!=="$$f"){const[L,I]=j(void 0,{equals:!1});i=L,r.then(()=>{u.gather(P),$(s),I(),$()}).catch(v=>{if(v||u.done)return v&&(l=v),I()})}}const m=fe(We);m&&(n=m.register(d.inFallback));let S;return Ee(()=>S&&S()),He(h.Provider,{value:d,get children(){return N(()=>{if(l)throw l;if(s=u.context,i)return i(),i=void 0;s&&r==="$$f"&&$();const P=N(()=>e.children);return N(T=>{const L=d.inFallback(),{showContent:I=!0,showFallback:v=!0}=n?n():{};if((!L||r&&r!=="$$f")&&I)return d.resolved=!0,S&&S(),S=s=r=void 0,Me(d.effects),P();if(v)return S?T:Ae(Z=>(S=Z,s&&($({id:s.id+"f",count:0}),s=void 0),e.fallback),g)})})}})}const Ye=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],ze=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Ye]),Qe=new Set(["innerHTML","textContent","innerText","children"]),Je=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Ze=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function et(e,t){const n=Ze[e];return typeof n=="object"?n[t]?n.$:void 0:n}const tt=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),nt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function st(e,t,n){let s=n.length,r=t.length,i=s,l=0,o=0,c=t[r-1].nextSibling,h=null;for(;l<r||o<i;){if(t[l]===n[o]){l++,o++;continue}for(;t[r-1]===n[i-1];)r--,i--;if(r===l){const d=i<s?o?n[o-1].nextSibling:n[i-o]:c;for(;o<i;)e.insertBefore(n[o++],d)}else if(i===o)for(;l<r;)(!h||!h.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[i-1]&&n[o]===t[r-1]){const d=t[--r].nextSibling;e.insertBefore(n[o++],t[l++].nextSibling),e.insertBefore(n[--i],d),t[r]=n[i]}else{if(!h){h=new Map;let g=o;for(;g<i;)h.set(n[g],g++)}const d=h.get(t[l]);if(d!=null)if(o<d&&d<i){let g=l,m=1,S;for(;++g<r&&g<i&&!((S=h.get(t[g]))==null||S!==d+m);)m++;if(m>d-o){const P=t[l];for(;o<d;)e.insertBefore(n[o++],P)}else e.replaceChild(n[o++],t[l++])}else l++;else t[l++].remove()}}}const we="_$DX_DELEGATE";function Nt(e,t,n,s={}){let r;return Ae(i=>{r=i,t===document?e():ct(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{r(),t.textContent=""}}function Tt(e,t,n){let s;const r=()=>{const l=document.createElement("template");return l.innerHTML=e,n?l.content.firstChild.firstChild:l.content.firstChild},i=t?()=>O(()=>document.importNode(s||(s=r()),!0)):()=>(s||(s=r())).cloneNode(!0);return i.cloneNode=i,i}function it(e,t=window.document){const n=t[we]||(t[we]=new Set);for(let s=0,r=e.length;s<r;s++){const i=e[s];n.has(i)||(n.add(i),t.addEventListener(i,ht))}}function le(e,t,n){u.context||(n==null?e.removeAttribute(t):e.setAttribute(t,n))}function rt(e,t,n,s){u.context||(s==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,s))}function lt(e,t){u.context||(t==null?e.removeAttribute("class"):e.className=t)}function ot(e,t,n,s){if(s)Array.isArray(n)?(e["$$".concat(t)]=n[0],e["$$".concat(t,"Data")]=n[1]):e["$$".concat(t)]=n;else if(Array.isArray(n)){const r=n[0];e.addEventListener(t,n[0]=i=>r.call(e,n[1],i))}else e.addEventListener(t,n)}function ft(e,t,n={}){const s=Object.keys(t||{}),r=Object.keys(n);let i,l;for(i=0,l=r.length;i<l;i++){const o=r[i];!o||o==="undefined"||t[o]||(be(e,o,!1),delete n[o])}for(i=0,l=s.length;i<l;i++){const o=s[i],c=!!t[o];!o||o==="undefined"||n[o]===c||!c||(be(e,o,!0),n[o]=c)}return n}function ut(e,t,n){if(!t)return n?le(e,"style"):t;const s=e.style;if(typeof t=="string")return s.cssText=t;typeof n=="string"&&(s.cssText=n=void 0),n||(n={}),t||(t={});let r,i;for(i in n)t[i]==null&&s.removeProperty(i),delete n[i];for(i in t)r=t[i],r!==n[i]&&(s.setProperty(i,r),n[i]=r);return n}function jt(e,t={},n,s){const r={};return s||V(()=>r.children=R(e,t.children,r.children)),V(()=>t.ref&&t.ref(e)),V(()=>at(e,t,n,!0,r,!0)),r}function ct(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return R(e,t,s,n);V(r=>R(e,t(),r,n),s)}function at(e,t,n,s,r={},i=!1){t||(t={});for(const l in r)if(!(l in t)){if(l==="children")continue;r[l]=me(e,l,null,r[l],n,i)}for(const l in t){if(l==="children"){s||R(e,t.children);continue}const o=t[l];r[l]=me(e,l,o,r[l],n,i)}}function dt(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function be(e,t,n){const s=t.trim().split(/\s+/);for(let r=0,i=s.length;r<i;r++)e.classList.toggle(s[r],n)}function me(e,t,n,s,r,i){let l,o,c,h,d;if(t==="style")return ut(e,n,s);if(t==="classList")return ft(e,n,s);if(n===s)return s;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){const g=t.slice(3);s&&e.removeEventListener(g,s),n&&e.addEventListener(g,n)}else if(t.slice(0,10)==="oncapture:"){const g=t.slice(10);s&&e.removeEventListener(g,s,!0),n&&e.addEventListener(g,n,!0)}else if(t.slice(0,2)==="on"){const g=t.slice(2).toLowerCase(),m=tt.has(g);if(!m&&s){const S=Array.isArray(s)?s[0]:s;e.removeEventListener(g,S)}(m||n)&&(ot(e,g,n,m),m&&it([g]))}else if(t.slice(0,5)==="attr:")le(e,t.slice(5),n);else if((d=t.slice(0,5)==="prop:")||(c=Qe.has(t))||!r&&((h=et(t,e.tagName))||(o=ze.has(t)))||(l=e.nodeName.includes("-"))){if(d)t=t.slice(5),o=!0;else if(u.context)return n;t==="class"||t==="className"?lt(e,n):l&&!o&&!c?e[dt(t)]=n:e[h||t]=n}else{const g=r&&t.indexOf(":")>-1&&nt[t.split(":")[0]];g?rt(e,g,t,n):le(e,Je[t]||t,n)}return n}function ht(e){const t="$$".concat(e.type);let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),u.registry&&!u.done&&(u.done=_$HY.done=!0);n;){const s=n[t];if(s&&!n.disabled){const r=n["".concat(t,"Data")];if(r!==void 0?s.call(n,r,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function R(e,t,n,s,r){if(u.context){!n&&(n=[...e.childNodes]);let o=[];for(let c=0;c<n.length;c++){const h=n[c];h.nodeType===8&&h.data.slice(0,2)==="!$"?h.remove():o.push(h)}n=o}for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,l=s!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(u.context)return n;if(i==="number"&&(t=t.toString()),l){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=U(e,n,s,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean"){if(u.context)return n;n=U(e,n,s)}else{if(i==="function")return V(()=>{let o=t();for(;typeof o=="function";)o=o();n=R(e,o,n,s)}),()=>n;if(Array.isArray(t)){const o=[],c=n&&Array.isArray(n);if(oe(o,t,n,r))return V(()=>n=R(e,o,n,s,!0)),()=>n;if(u.context){if(!o.length)return n;if(s===void 0)return[...e.childNodes];let h=o[0],d=[h];for(;(h=h.nextSibling)!==s;)d.push(h);return n=d}if(o.length===0){if(n=U(e,n,s),l)return n}else c?n.length===0?xe(e,o,s):st(e,n,o):(n&&U(e),xe(e,o));n=o}else if(t.nodeType){if(u.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=U(e,n,s,t);U(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function oe(e,t,n,s){let r=!1;for(let i=0,l=t.length;i<l;i++){let o=t[i],c=n&&n[i],h;if(!(o==null||o===!0||o===!1))if((h=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))r=oe(e,o,c)||r;else if(h==="function")if(s){for(;typeof o=="function";)o=o();r=oe(e,Array.isArray(o)?o:[o],Array.isArray(c)?c:[c])||r}else e.push(o),r=!0;else{const d=String(o);c&&c.nodeType===3&&c.data===d?e.push(c):e.push(document.createTextNode(d))}}return r}function xe(e,t,n=null){for(let s=0,r=t.length;s<r;s++)e.insertBefore(t[s],n)}function U(e,t,n,s){if(n===void 0)return e.textContent="";const r=s||document.createTextNode("");if(t.length){let i=!1;for(let l=t.length-1;l>=0;l--){const o=t[l];if(r!==o){const c=o.parentNode===e;!i&&!l?c?e.replaceChild(r,o):e.insertBefore(r,n):c&&o.remove()}else i=!0}}else e.insertBefore(r,n);return[r]}function kt(){}const Lt=!1;export{Ie as A,O as B,mt as C,Lt as D,Pt as E,kt as F,le as G,Ot as S,Oe as a,jt as b,He as c,Et as d,V as e,Fe as f,N as g,wt as h,Ae as i,j,it as k,ct as l,pt as m,At as n,Ee as o,yt as p,$t as q,gt as r,u as s,Tt as t,fe as u,ot as v,Ct as w,Nt as x,St as y,bt as z};
