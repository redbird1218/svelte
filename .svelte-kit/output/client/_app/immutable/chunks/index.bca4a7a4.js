function y(){}function Q(t,e){for(const n in e)t[n]=e[n];return t}function D(t){return t()}function L(){return Object.create(null)}function x(t){t.forEach(D)}function k(t){return typeof t=="function"}function yt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function U(t){return Object.keys(t).length===0}function B(t,...e){if(t==null)return y;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function gt(t){let e;return B(t,n=>e=n)(),e}function xt(t,e,n){t.$$.on_destroy.push(B(e,n))}function bt(t,e,n,i){if(t){const s=q(t,e,n,i);return t[0](s)}}function q(t,e,n,i){return t[1]&&i?Q(n.ctx.slice(),t[1](i(e))):n.ctx}function $t(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(e.dirty.length,s.length);for(let l=0;l<r;l+=1)c[l]=e.dirty[l]|s[l];return c}return e.dirty|s}return e.dirty}function wt(t,e,n,i,s,c){if(s){const r=q(e,n,i,c);t.p(r,s)}}function Et(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function vt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Tt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Nt(t){const e={};for(const n in t)e[n]=!0;return e}function At(t,e,n){return t.set(n),e}function kt(t){return t&&k(t.destroy)?t.destroy:y}const V=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;"WeakMap"in V;let v=!1;function X(){v=!0}function Y(){v=!1}function Z(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function tt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&o.push(f)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let o=0;o<e.length;o++){const u=e[o].claim_order,f=(s>0&&e[n[s]].claim_order<=u?s+1:Z(1,s,$=>e[n[$]].claim_order,u))-1;i[o]=n[f]+1;const a=f+1;n[a]=o,s=Math.max(a,s)}const c=[],r=[];let l=e.length-1;for(let o=n[s]+1;o!=0;o=i[o-1]){for(c.push(e[o-1]);l>=o;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);c.reverse(),r.sort((o,u)=>o.claim_order-u.claim_order);for(let o=0,u=0;o<r.length;o++){for(;u<c.length&&r[o].claim_order>=c[u].claim_order;)u++;const f=u<c.length?c[u]:null;t.insertBefore(r[o],f)}}function et(t,e){if(v){for(tt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function nt(t,e,n){t.insertBefore(e,n||null)}function it(t,e,n){v&&!n?et(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function E(t){t.parentNode&&t.parentNode.removeChild(t)}function Mt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function W(t){return document.createElement(t)}function G(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function M(t){return document.createTextNode(t)}function St(){return M(" ")}function Ct(){return M("")}function Lt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function st(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const rt=["width","height"];function Ht(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&rt.indexOf(i)===-1?t[i]=e[i]:st(t,i,e[i])}function jt(t){let e;return{p(...n){e=n,e.forEach(i=>t.push(i))},r(){e.forEach(n=>t.splice(t.indexOf(n),1))}}}function ot(t){return Array.from(t.childNodes)}function R(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function z(t,e,n,i,s=!1){R(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const o=n(l);return o===void 0?t.splice(r,1):t[r]=o,s||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const o=n(l);return o===void 0?t.splice(r,1):t[r]=o,s?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function F(t,e,n,i){return z(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];n[l.name]||c.push(l.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Ot(t,e,n){return F(t,e,n,W)}function Pt(t,e,n){return F(t,e,n,G)}function ct(t,e){return z(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>M(e),!0)}function Dt(t){return ct(t," ")}function H(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function Bt(t,e){const n=H(t,"HTML_TAG_START",0),i=H(t,"HTML_TAG_END",n);if(n===i)return new j(void 0,e);R(t);const s=t.splice(n,i-n+1);E(s[0]),E(s[s.length-1]);const c=s.slice(1,s.length-1);for(const r of c)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new j(c,e)}function qt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Wt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Gt(t,e,n){t.classList[n?"add":"remove"](e)}function lt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function Rt(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const c=s.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(s)):c===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class ut{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=G(n.nodeName):this.e=W(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)nt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(E)}}class j extends ut{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)it(this.t,this.n[n],e)}}function zt(t,e){return new t(e)}let g;function p(t){g=t}function b(){if(!g)throw new Error("Function called outside component initialization");return g}function Ft(t){b().$$.on_mount.push(t)}function It(t){b().$$.after_update.push(t)}function Jt(){const t=b();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const c=lt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}function Kt(t,e){return b().$$.context.set(t,e),e}function Qt(t){return b().$$.context.get(t)}function Ut(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const h=[],O=[];let m=[];const P=[],I=Promise.resolve();let N=!1;function J(){N||(N=!0,I.then(K))}function Vt(){return J(),I}function A(t){m.push(t)}const T=new Set;let _=0;function K(){if(_!==0)return;const t=g;do{try{for(;_<h.length;){const e=h[_];_++,p(e),at(e.$$)}}catch(e){throw h.length=0,_=0,e}for(p(null),h.length=0,_=0;O.length;)O.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];T.has(n)||(T.add(n),n())}m.length=0}while(h.length);for(;P.length;)P.pop()();N=!1,T.clear(),p(t)}function at(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}function ft(t){const e=[],n=[];m.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),m=e}const w=new Set;let d;function Xt(){d={r:0,c:[],p:d}}function Yt(){d.r||x(d.c),d=d.p}function dt(t,e){t&&t.i&&(w.delete(t),t.i(e))}function Zt(t,e,n,i){if(t&&t.o){if(w.has(t))return;w.add(t),d.c.push(()=>{w.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function te(t,e){const n={},i={},s={$$scope:1};let c=t.length;for(;c--;){const r=t[c],l=e[c];if(l){for(const o in r)o in l||(i[o]=1);for(const o in l)s[o]||(n[o]=l[o],s[o]=1);t[c]=l}else for(const o in r)s[o]=1}for(const r in i)r in n||(n[r]=void 0);return n}const _t=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[..._t];function ee(t){t&&t.c()}function ne(t,e){t&&t.l(e)}function ht(t,e,n,i){const{fragment:s,after_update:c}=t.$$;s&&s.m(e,n),i||A(()=>{const r=t.$$.on_mount.map(D).filter(k);t.$$.on_destroy?t.$$.on_destroy.push(...r):x(r),t.$$.on_mount=[]}),c.forEach(A)}function mt(t,e){const n=t.$$;n.fragment!==null&&(ft(n.after_update),x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function pt(t,e){t.$$.dirty[0]===-1&&(h.push(t),J(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ie(t,e,n,i,s,c,r,l=[-1]){const o=g;p(t);const u=t.$$={fragment:null,ctx:[],props:c,update:y,not_equal:s,bound:L(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:L(),dirty:l,skip_bound:!1,root:e.target||o.$$.root};r&&r(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(a,$,...S)=>{const C=S.length?S[0]:$;return u.ctx&&s(u.ctx[a],u.ctx[a]=C)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](C),f&&pt(t,a)),$}):[],u.update(),f=!0,x(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){X();const a=ot(e.target);u.fragment&&u.fragment.l(a),a.forEach(E)}else u.fragment&&u.fragment.c();e.intro&&dt(t.$$.fragment),ht(t,e.target,e.anchor,e.customElement),Y(),K()}p(o)}class se{$destroy(){mt(this,1),this.$destroy=y}$on(e,n){if(!k(n))return y;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!U(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Bt as $,ht as A,mt as B,bt as C,wt as D,Et as E,$t as F,et as G,y as H,xt as I,Kt as J,Q as K,vt as L,Lt as M,x as N,Nt as O,Qt as P,Ut as Q,jt as R,se as S,Ht as T,Gt as U,te as V,Tt as W,Jt as X,j as Y,G as Z,Rt as _,St as a,Pt as a0,At as a1,kt as a2,Mt as a3,gt as a4,it as b,Dt as c,Zt as d,Ct as e,Yt as f,dt as g,E as h,ie as i,It as j,W as k,Ot as l,ot as m,st as n,Ft as o,Wt as p,M as q,ct as r,yt as s,Vt as t,qt as u,Xt as v,O as w,zt as x,ee as y,ne as z};