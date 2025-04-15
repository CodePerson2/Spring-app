(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const f of l.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&n(f)}).observe(document,{childList:!0,subtree:!0});function r(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(i){if(i.ep)return;i.ep=!0;const l=r(i);fetch(i.href,l)}})();const nt=!1;var Re=Array.isArray,Kt=Array.prototype.indexOf,We=Array.from,Wt=Object.defineProperty,re=Object.getOwnPropertyDescriptor,wt=Object.getOwnPropertyDescriptors,Xt=Object.prototype,zt=Array.prototype,Xe=Object.getPrototypeOf,lt=Object.isExtensible;function Zt(e){return e()}function Ve(e){for(var t=0;t<e.length;t++)e[t]()}const M=2,yt=4,Le=8,ze=16,H=32,ae=64,be=128,R=256,xe=512,I=1024,B=2048,Q=4096,G=8192,ke=16384,Jt=32768,Ze=65536,Qt=1<<17,er=1<<19,mt=1<<20,$e=1<<21,ne=Symbol("$state"),tr=Symbol("legacy props");function Et(e){return e===this.v}function rr(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Je(e){return!rr(e,this.v)}function nr(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function lr(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ir(e){throw new Error("https://svelte.dev/e/effect_orphan")}function ar(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function fr(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function ur(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function or(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function sr(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let he=!1,cr=!1;function vr(){he=!0}const _r=1,dr=2,pr=16,hr=1,gr=2,wr=4,yr=8,mr=16,Er=1,br=2,N=Symbol(),xr="http://www.w3.org/1999/xhtml";function Sr(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let x=null;function it(e){x=e}function Me(e,t=!1,r){var n=x={p:x,c:null,d:!1,e:null,m:!1,s:e,x:null,l:null};he&&!t&&(x.l={s:null,u:null,r1:[],r2:de(!1)}),Lt(()=>{n.d=!0})}function Ce(e){const t=x;if(t!==null){const f=t.e;if(f!==null){var r=y,n=g;t.e=null;try{for(var i=0;i<f.length;i++){var l=f[i];z(l.effect),V(l.reaction),kt(l.fn)}}finally{z(r),V(n)}}x=t.p,t.m=!0}return{}}function Fe(){return!he||x!==null&&x.l===null}function Z(e){if(typeof e!="object"||e===null||ne in e)return e;const t=Xe(e);if(t!==Xt&&t!==zt)return e;var r=new Map,n=Re(e),i=Y(0),l=g,f=o=>{var a=g;V(l);var s=o();return V(a),s};return n&&r.set("length",Y(e.length)),new Proxy(e,{defineProperty(o,a,s){(!("value"in s)||s.configurable===!1||s.enumerable===!1||s.writable===!1)&&ur();var _=r.get(a);return _===void 0?(_=f(()=>Y(s.value)),r.set(a,_)):O(_,f(()=>Z(s.value))),!0},deleteProperty(o,a){var s=r.get(a);if(s===void 0)a in o&&r.set(a,f(()=>Y(N)));else{if(n&&typeof a=="string"){var _=r.get("length"),c=Number(a);Number.isInteger(c)&&c<_.v&&O(_,c)}O(s,N),at(i)}return!0},get(o,a,s){var v;if(a===ne)return e;var _=r.get(a),c=a in o;if(_===void 0&&(!c||(v=re(o,a))!=null&&v.writable)&&(_=f(()=>Y(Z(c?o[a]:N))),r.set(a,_)),_!==void 0){var u=w(_);return u===N?void 0:u}return Reflect.get(o,a,s)},getOwnPropertyDescriptor(o,a){var s=Reflect.getOwnPropertyDescriptor(o,a);if(s&&"value"in s){var _=r.get(a);_&&(s.value=w(_))}else if(s===void 0){var c=r.get(a),u=c==null?void 0:c.v;if(c!==void 0&&u!==N)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return s},has(o,a){var u;if(a===ne)return!0;var s=r.get(a),_=s!==void 0&&s.v!==N||Reflect.has(o,a);if(s!==void 0||y!==null&&(!_||(u=re(o,a))!=null&&u.writable)){s===void 0&&(s=f(()=>Y(_?Z(o[a]):N)),r.set(a,s));var c=w(s);if(c===N)return!1}return _},set(o,a,s,_){var E;var c=r.get(a),u=a in o;if(n&&a==="length")for(var v=s;v<c.v;v+=1){var d=r.get(v+"");d!==void 0?O(d,N):v in o&&(d=f(()=>Y(N)),r.set(v+"",d))}c===void 0?(!u||(E=re(o,a))!=null&&E.writable)&&(c=f(()=>Y(void 0)),O(c,f(()=>Z(s))),r.set(a,c)):(u=c.v!==N,O(c,f(()=>Z(s))));var h=Reflect.getOwnPropertyDescriptor(o,a);if(h!=null&&h.set&&h.set.call(_,s),!u){if(n&&typeof a=="string"){var m=r.get("length"),p=Number(a);Number.isInteger(p)&&p>=m.v&&O(m,p+1)}at(i)}return!0},ownKeys(o){w(i);var a=Reflect.ownKeys(o).filter(c=>{var u=r.get(c);return u===void 0||u.v!==N});for(var[s,_]of r)_.v!==N&&!(s in o)&&a.push(s);return a},setPrototypeOf(){or()}})}function at(e,t=1){O(e,e.v+t)}function ve(e){var t=M|B,r=g!==null&&(g.f&M)!==0?g:null;return y===null||r!==null&&(r.f&R)!==0?t|=R:y.f|=mt,{ctx:x,deps:null,effects:null,equals:Et,f:t,fn:e,reactions:null,rv:0,v:null,wv:0,parent:r??y}}function bt(e){const t=ve(e);return t.equals=Je,t}function xt(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)X(t[r])}}function Tr(e){for(var t=e.parent;t!==null;){if((t.f&M)===0)return t;t=t.parent}return null}function St(e){var t,r=y;z(Tr(e));try{xt(e),t=$t(e)}finally{z(r)}return t}function Tt(e){var t=St(e),r=(W||(e.f&R)!==0)&&e.deps!==null?Q:I;C(e,r),e.equals(t)||(e.v=t,e.wv=Bt())}const _e=new Map;function de(e,t){var r={f:0,v:e,reactions:null,equals:Et,rv:0,wv:0};return r}function Y(e,t){const r=de(e);return Cr(r),r}function le(e,t=!1){var n;const r=de(e);return t||(r.equals=Je),he&&x!==null&&x.l!==null&&((n=x.l).s??(n.s=[])).push(r),r}function O(e,t,r=!1){g!==null&&!U&&Fe()&&(g.f&(M|ze))!==0&&!(P!=null&&P.includes(e))&&sr();let n=r?Z(t):t;return Pt(e,n)}function Pt(e,t){if(!e.equals(t)){var r=e.v;ge?_e.set(e,t):_e.set(e,r),e.v=t,(e.f&M)!==0&&((e.f&B)!==0&&St(e),C(e,(e.f&R)===0?I:Q)),e.wv=Bt(),At(e,B),Fe()&&y!==null&&(y.f&I)!==0&&(y.f&(H|ae))===0&&(L===null?Fr([e]):L.push(e))}return t}function At(e,t){var r=e.reactions;if(r!==null)for(var n=Fe(),i=r.length,l=0;l<i;l++){var f=r[l],o=f.f;(o&B)===0&&(!n&&f===y||(C(f,t),(o&(I|R))!==0&&((o&M)!==0?At(f,Q):Be(f))))}}let Pr=!1;var ft,Nt,Ot,It;function Ar(){if(ft===void 0){ft=window,Nt=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;Ot=re(t,"firstChild").get,It=re(t,"nextSibling").get,lt(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),lt(r)&&(r.__t=void 0)}}function Dt(e=""){return document.createTextNode(e)}function Se(e){return Ot.call(e)}function qe(e){return It.call(e)}function te(e,t){return Se(e)}function ie(e,t){{var r=Se(e);return r instanceof Comment&&r.data===""?qe(r):r}}function k(e,t=1,r=!1){let n=e;for(;t--;)n=qe(n);return n}function Nr(e){e.textContent=""}function Rt(e){y===null&&g===null&&ir(),g!==null&&(g.f&R)!==0&&y===null&&lr(),ge&&nr()}function Or(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function fe(e,t,r,n=!0){var i=y,l={ctx:x,deps:null,nodes_start:null,nodes_end:null,f:e|B,first:null,fn:t,last:null,next:null,parent:i,prev:null,teardown:null,transitions:null,wv:0};if(r)try{tt(l),l.f|=Jt}catch(a){throw X(l),a}else t!==null&&Be(l);var f=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&(mt|be))===0;if(!f&&n&&(i!==null&&Or(l,i),g!==null&&(g.f&M)!==0)){var o=g;(o.effects??(o.effects=[])).push(l)}return l}function Lt(e){const t=fe(Le,null,!1);return C(t,I),t.teardown=e,t}function ut(e){Rt();var t=y!==null&&(y.f&H)!==0&&x!==null&&!x.m;if(t){var r=x;(r.e??(r.e=[])).push({fn:e,effect:y,reaction:g})}else{var n=kt(e);return n}}function Ir(e){return Rt(),Rr(e)}function Dr(e){const t=fe(ae,e,!0);return(r={})=>new Promise(n=>{r.outro?Te(t,()=>{X(t),n(void 0)}):(X(t),n(void 0))})}function kt(e){return fe(yt,e,!1)}function Rr(e){return fe(Le,e,!0)}function Ue(e,t=[],r=ve){const n=t.map(r);return Qe(()=>e(...n.map(w)))}function Qe(e,t=0){return fe(Le|ze|t,e,!0)}function pe(e,t=!0){return fe(Le|H,e,!0,t)}function Mt(e){var t=e.teardown;if(t!==null){const r=ge,n=g;ot(!0),V(null);try{t.call(null)}finally{ot(r),V(n)}}}function Ct(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){var n=r.next;(r.f&ae)!==0?r.parent=null:X(r,t),r=n}}function Lr(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&H)===0&&X(t),t=r}}function X(e,t=!0){var r=!1;if((t||(e.f&er)!==0)&&e.nodes_start!==null){for(var n=e.nodes_start,i=e.nodes_end;n!==null;){var l=n===i?null:qe(n);n.remove(),n=l}r=!0}Ct(e,t&&!r),Ie(e,0),C(e,ke);var f=e.transitions;if(f!==null)for(const a of f)a.stop();Mt(e);var o=e.parent;o!==null&&o.first!==null&&Ft(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function Ft(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function Te(e,t){var r=[];et(e,r,!0),qt(r,()=>{X(e),t&&t()})}function qt(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var i of e)i.out(n)}else t()}function et(e,t,r){if((e.f&G)===0){if(e.f^=G,e.transitions!==null)for(const f of e.transitions)(f.is_global||r)&&t.push(f);for(var n=e.first;n!==null;){var i=n.next,l=(n.f&Ze)!==0||(n.f&H)!==0;et(n,t,l?r:!1),n=i}}}function Pe(e){Ut(e,!0)}function Ut(e,t){if((e.f&G)!==0){e.f^=G,(e.f&I)===0&&(e.f^=I),we(e)&&(C(e,B),Be(e));for(var r=e.first;r!==null;){var n=r.next,i=(r.f&Ze)!==0||(r.f&H)!==0;Ut(r,i?t:!1),r=n}if(e.transitions!==null)for(const l of e.transitions)(l.is_global||t)&&l.in()}}let Ae=[];function kr(){var e=Ae;Ae=[],Ve(e)}function Mr(e){Ae.length===0&&queueMicrotask(kr),Ae.push(e)}let me=!1,Ge=!1,Ne=null,J=!1,ge=!1;function ot(e){ge=e}let Ee=[];let g=null,U=!1;function V(e){g=e}let y=null;function z(e){y=e}let P=null;function Cr(e){g!==null&&g.f&$e&&(P===null?P=[e]:P.push(e))}let T=null,D=0,L=null;function Fr(e){L=e}let jt=1,Oe=0,W=!1;function Bt(){return++jt}function we(e){var c;var t=e.f;if((t&B)!==0)return!0;if((t&Q)!==0){var r=e.deps,n=(t&R)!==0;if(r!==null){var i,l,f=(t&xe)!==0,o=n&&y!==null&&!W,a=r.length;if(f||o){var s=e,_=s.parent;for(i=0;i<a;i++)l=r[i],(f||!((c=l==null?void 0:l.reactions)!=null&&c.includes(s)))&&(l.reactions??(l.reactions=[])).push(s);f&&(s.f^=xe),o&&_!==null&&(_.f&R)===0&&(s.f^=R)}for(i=0;i<a;i++)if(l=r[i],we(l)&&Tt(l),l.wv>e.wv)return!0}(!n||y!==null&&!W)&&C(e,I)}return!1}function qr(e,t){for(var r=t;r!==null;){if((r.f&be)!==0)try{r.fn(e);return}catch{r.f^=be}r=r.parent}throw me=!1,e}function Ur(e){return(e.f&ke)===0&&(e.parent===null||(e.parent.f&be)===0)}function je(e,t,r,n){if(me){if(r===null&&(me=!1),Ur(t))throw e;return}r!==null&&(me=!0);{qr(e,t);return}}function Vt(e,t,r=!0){var n=e.reactions;if(n!==null)for(var i=0;i<n.length;i++){var l=n[i];P!=null&&P.includes(e)||((l.f&M)!==0?Vt(l,t,!1):t===l&&(r?C(l,B):(l.f&I)!==0&&C(l,Q),Be(l)))}}function $t(e){var v;var t=T,r=D,n=L,i=g,l=W,f=P,o=x,a=U,s=e.f;T=null,D=0,L=null,W=(s&R)!==0&&(U||!J||g===null),g=(s&(H|ae))===0?e:null,P=null,it(e.ctx),U=!1,Oe++,e.f|=$e;try{var _=(0,e.fn)(),c=e.deps;if(T!==null){var u;if(Ie(e,D),c!==null&&D>0)for(c.length=D+T.length,u=0;u<T.length;u++)c[D+u]=T[u];else e.deps=c=T;if(!W)for(u=D;u<c.length;u++)((v=c[u]).reactions??(v.reactions=[])).push(e)}else c!==null&&D<c.length&&(Ie(e,D),c.length=D);if(Fe()&&L!==null&&!U&&c!==null&&(e.f&(M|Q|B))===0)for(u=0;u<L.length;u++)Vt(L[u],e);return i!==e&&(Oe++,L!==null&&(n===null?n=L:n.push(...L))),_}finally{T=t,D=r,L=n,g=i,W=l,P=f,it(o),U=a,e.f^=$e}}function jr(e,t){let r=t.reactions;if(r!==null){var n=Kt.call(r,e);if(n!==-1){var i=r.length-1;i===0?r=t.reactions=null:(r[n]=r[i],r.pop())}}r===null&&(t.f&M)!==0&&(T===null||!T.includes(t))&&(C(t,Q),(t.f&(R|xe))===0&&(t.f^=xe),xt(t),Ie(t,0))}function Ie(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)jr(e,r[n])}function tt(e){var t=e.f;if((t&ke)===0){C(e,I);var r=y,n=x,i=J;y=e,J=!0;try{(t&ze)!==0?Lr(e):Ct(e),Mt(e);var l=$t(e);e.teardown=typeof l=="function"?l:null,e.wv=jt;var f=e.deps,o;nt&&cr&&e.f&B}catch(a){je(a,e,r,n||e.ctx)}finally{J=i,y=r}}}function Br(){try{ar()}catch(e){if(Ne!==null)je(e,Ne,null);else throw e}}function Vr(){var e=J;try{var t=0;for(J=!0;Ee.length>0;){t++>1e3&&Br();var r=Ee,n=r.length;Ee=[];for(var i=0;i<n;i++){var l=Gr(r[i]);$r(l)}_e.clear()}}finally{Ge=!1,J=e,Ne=null}}function $r(e){var t=e.length;if(t!==0)for(var r=0;r<t;r++){var n=e[r];if((n.f&(ke|G))===0)try{we(n)&&(tt(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?Ft(n):n.fn=null))}catch(i){je(i,n,null,n.ctx)}}}function Be(e){Ge||(Ge=!0,queueMicrotask(Vr));for(var t=Ne=e;t.parent!==null;){t=t.parent;var r=t.f;if((r&(ae|H))!==0){if((r&I)===0)return;t.f^=I}}Ee.push(t)}function Gr(e){for(var t=[],r=e;r!==null;){var n=r.f,i=(n&(H|ae))!==0,l=i&&(n&I)!==0;if(!l&&(n&G)===0){if((n&yt)!==0)t.push(r);else if(i)r.f^=I;else{var f=g;try{g=r,we(r)&&tt(r)}catch(s){je(s,r,null,r.ctx)}finally{g=f}}var o=r.first;if(o!==null){r=o;continue}}var a=r.parent;for(r=r.next;r===null&&a!==null;)r=a.next,a=a.parent}return t}function w(e){var t=e.f,r=(t&M)!==0;if(g!==null&&!U){if(!(P!=null&&P.includes(e))){var n=g.deps;e.rv<Oe&&(e.rv=Oe,T===null&&n!==null&&n[D]===e?D++:T===null?T=[e]:(!W||!T.includes(e))&&T.push(e))}}else if(r&&e.deps===null&&e.effects===null){var i=e,l=i.parent;l!==null&&(l.f&R)===0&&(i.f^=R)}return r&&(i=e,we(i)&&Tt(i)),ge&&_e.has(e)?_e.get(e):e.v}function He(e){var t=U;try{return U=!0,e()}finally{U=t}}const Hr=-7169;function C(e,t){e.f=e.f&Hr|t}function Yr(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(ne in e)Ye(e);else if(!Array.isArray(e))for(let t in e){const r=e[t];typeof r=="object"&&r&&ne in r&&Ye(r)}}}function Ye(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{Ye(e[n],t)}catch{}const r=Xe(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=wt(r);for(let i in n){const l=n[i].get;if(l)try{l.call(e)}catch{}}}}}const Kr=["touchstart","touchmove"];function Wr(e){return Kr.includes(e)}function Xr(e){var t=g,r=y;V(null),z(null);try{return e()}finally{V(t),z(r)}}const zr=new Set,st=new Set;function Zr(e,t,r,n={}){function i(l){if(n.capture||se.call(t,l),!l.cancelBubble)return Xr(()=>r==null?void 0:r.call(this,l))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Mr(()=>{t.addEventListener(e,i,n)}):t.addEventListener(e,i,n),i}function ct(e,t,r,n,i){var l={capture:n,passive:i},f=Zr(e,t,r,l);(t===document.body||t===window||t===document)&&Lt(()=>{t.removeEventListener(e,f,l)})}function se(e){var E;var t=this,r=t.ownerDocument,n=e.type,i=((E=e.composedPath)==null?void 0:E.call(e))||[],l=i[0]||e.target,f=0,o=e.__root;if(o){var a=i.indexOf(o);if(a!==-1&&(t===document||t===window)){e.__root=t;return}var s=i.indexOf(t);if(s===-1)return;a<=s&&(f=a)}if(l=i[f]||e.target,l!==t){Wt(e,"currentTarget",{configurable:!0,get(){return l||r}});var _=g,c=y;V(null),z(null);try{for(var u,v=[];l!==null;){var d=l.assignedSlot||l.parentNode||l.host||null;try{var h=l["__"+n];if(h!=null&&(!l.disabled||e.target===l))if(Re(h)){var[m,...p]=h;m.apply(l,[e,...p])}else h.call(l,e)}catch(A){u?v.push(A):u=A}if(e.cancelBubble||d===t||d===null)break;l=d}if(u){for(let A of v)queueMicrotask(()=>{throw A});throw u}}finally{e.__root=t,delete e.currentTarget,V(_),z(c)}}}function Jr(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function vt(e,t){var r=y;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function $(e,t){var r=(t&Er)!==0,n=(t&br)!==0,i,l=!e.startsWith("<!>");return()=>{i===void 0&&(i=Jr(l?e:"<!>"+e),r||(i=Se(i)));var f=n||Nt?document.importNode(i,!0):i.cloneNode(!0);if(r){var o=Se(f),a=f.lastChild;vt(o,a)}else vt(f,f);return f}}function j(e,t){e!==null&&e.before(t)}function Ke(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r+"")}function Qr(e,t){return en(e,t)}const ee=new Map;function en(e,{target:t,anchor:r,props:n={},events:i,context:l,intro:f=!0}){Ar();var o=new Set,a=c=>{for(var u=0;u<c.length;u++){var v=c[u];if(!o.has(v)){o.add(v);var d=Wr(v);t.addEventListener(v,se,{passive:d});var h=ee.get(v);h===void 0?(document.addEventListener(v,se,{passive:d}),ee.set(v,1)):ee.set(v,h+1)}}};a(We(zr)),st.add(a);var s=void 0,_=Dr(()=>{var c=r??t.appendChild(Dt());return pe(()=>{if(l){Me({});var u=x;u.c=l}i&&(n.$$events=i),s=e(c,n)||{},l&&Ce()}),()=>{var d;for(var u of o){t.removeEventListener(u,se);var v=ee.get(u);--v===0?(document.removeEventListener(u,se),ee.delete(u)):ee.set(u,v)}st.delete(a),c!==r&&((d=c.parentNode)==null||d.removeChild(c))}});return tn.set(s,_),s}let tn=new WeakMap;function ce(e,t,[r,n]=[0,0]){var i=e,l=null,f=null,o=N,a=r>0?Ze:0,s=!1;const _=(u,v=!0)=>{s=!0,c(v,u)},c=(u,v)=>{o!==(o=u)&&(o?(l?Pe(l):v&&(l=pe(()=>v(i))),f&&Te(f,()=>{f=null})):(f?Pe(f):v&&(f=pe(()=>v(i,[r+1,n]))),l&&Te(l,()=>{l=null})))};Qe(()=>{s=!1,t(_),s||c(null,null)},a)}function rn(e,t){return t}function nn(e,t,r,n){for(var i=[],l=t.length,f=0;f<l;f++)et(t[f].e,i,!0);var o=l>0&&i.length===0&&r!==null;if(o){var a=r.parentNode;Nr(a),a.append(r),n.clear(),K(e,t[0].prev,t[l-1].next)}qt(i,()=>{for(var s=0;s<l;s++){var _=t[s];o||(n.delete(_.k),K(e,_.prev,_.next)),X(_.e,!o)}})}function ln(e,t,r,n,i,l=null){var f=e,o={flags:t,items:new Map,first:null};{var a=e;f=a.appendChild(Dt())}var s=null,_=!1,c=bt(()=>{var u=r();return Re(u)?u:u==null?[]:We(u)});Qe(()=>{var u=w(c),v=u.length;_&&v===0||(_=v===0,an(u,o,f,i,t,n,r),l!==null&&(v===0?s?Pe(s):s=pe(()=>l(f)):s!==null&&Te(s,()=>{s=null})),w(c))})}function an(e,t,r,n,i,l,f){var o=e.length,a=t.items,s=t.first,_=s,c,u=null,v=[],d=[],h,m,p,E;for(E=0;E<o;E+=1){if(h=e[E],m=l(h,E),p=a.get(m),p===void 0){var A=_?_.e.nodes_start:r;u=un(A,t,u,u===null?t.first:u.next,h,m,E,n,i,f),a.set(m,u),v=[],d=[],_=u.next;continue}if(fn(p,h,E),(p.e.f&G)!==0&&Pe(p.e),p!==_){if(c!==void 0&&c.has(p)){if(v.length<d.length){var F=d[0],S;u=F.prev;var ue=v[0],b=v[v.length-1];for(S=0;S<v.length;S+=1)_t(v[S],F,r);for(S=0;S<d.length;S+=1)c.delete(d[S]);K(t,ue.prev,b.next),K(t,u,ue),K(t,b,F),_=F,u=b,E-=1,v=[],d=[]}else c.delete(p),_t(p,_,r),K(t,p.prev,p.next),K(t,p,u===null?t.first:u.next),K(t,u,p),u=p;continue}for(v=[],d=[];_!==null&&_.k!==m;)(_.e.f&G)===0&&(c??(c=new Set)).add(_),d.push(_),_=_.next;if(_===null)continue;p=_}v.push(p),u=p,_=p.next}if(_!==null||c!==void 0){for(var q=c===void 0?[]:We(c);_!==null;)(_.e.f&G)===0&&q.push(_),_=_.next;var oe=q.length;if(oe>0){var Yt=o===0?r:null;nn(t,q,Yt,a)}}y.first=t.first&&t.first.e,y.last=u&&u.e}function fn(e,t,r,n){Pt(e.v,t),e.i=r}function un(e,t,r,n,i,l,f,o,a,s){var _=(a&_r)!==0,c=(a&pr)===0,u=_?c?le(i):de(i):i,v=(a&dr)===0?f:de(f),d={i:v,v:u,k:l,a:null,e:null,prev:r,next:n};try{return d.e=pe(()=>o(e,u,v,s),Pr),d.e.prev=r&&r.e,d.e.next=n&&n.e,r===null?t.first=d:(r.next=d,r.e.next=d.e),n!==null&&(n.prev=d,n.e.prev=d.e),d}finally{}}function _t(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,i=t?t.e.nodes_start:r,l=e.e.nodes_start;l!==n;){var f=qe(l);i.before(l),l=f}}function K(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function Gt(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(r=Gt(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function on(){for(var e,t,r=0,n="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=Gt(e))&&(n&&(n+=" "),n+=t);return n}function sn(e){return typeof e=="object"?on(e):e??""}function cn(e,t,r){var n=e==null?"":""+e;return n=n?n+" "+t:t,n===""?null:n}function vn(e,t,r,n,i,l){var f=e.__className;if(f!==r||f===void 0){var o=cn(r,n);o==null?e.removeAttribute("class"):e.className=o,e.__className=r}return l}const _n=Symbol("is custom element"),dn=Symbol("is html");function Ht(e,t,r,n){var i=pn(e);i[t]!==(i[t]=r)&&(r==null?e.removeAttribute(t):typeof r!="string"&&hn(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function pn(e){return e.__attributes??(e.__attributes={[_n]:e.nodeName.includes("-"),[dn]:e.namespaceURI===xr})}var dt=new Map;function hn(e){var t=dt.get(e.nodeName);if(t)return t;dt.set(e.nodeName,t=[]);for(var r,n=e,i=Element.prototype;i!==n;){r=wt(n);for(var l in r)r[l].set&&t.push(l);n=Xe(n)}return t}function rt(e=!1){const t=x,r=t.l.u;if(!r)return;let n=()=>Yr(t.s);if(e){let i=0,l={};const f=ve(()=>{let o=!1;const a=t.s;for(const s in a)a[s]!==l[s]&&(l[s]=a[s],o=!0);return o&&i++,i});n=()=>w(f)}r.b.length&&Ir(()=>{pt(t,n),Ve(r.b)}),ut(()=>{const i=He(()=>r.m.map(Zt));return()=>{for(const l of i)typeof l=="function"&&l()}}),r.a.length&&ut(()=>{pt(t,n),Ve(r.a)})}function pt(e,t){if(e.l.s)for(const r of e.l.s)w(r);t()}let ye=!1;function gn(e){var t=ye;try{return ye=!1,[e(),ye]}finally{ye=t}}function ht(e){var t;return((t=e.ctx)==null?void 0:t.d)??!1}function De(e,t,r,n){var ue;var i=(r&hr)!==0,l=!he||(r&gr)!==0,f=(r&yr)!==0,o=(r&mr)!==0,a=!1,s;f?[s,a]=gn(()=>e[t]):s=e[t];var _=ne in e||tr in e,c=f&&(((ue=re(e,t))==null?void 0:ue.set)??(_&&t in e&&(b=>e[t]=b)))||void 0,u=n,v=!0,d=!1,h=()=>(d=!0,v&&(v=!1,o?u=He(n):u=n),u);s===void 0&&n!==void 0&&(c&&l&&fr(),s=h(),c&&c(s));var m;if(l)m=()=>{var b=e[t];return b===void 0?h():(v=!0,d=!1,b)};else{var p=(i?ve:bt)(()=>e[t]);p.f|=Qt,m=()=>{var b=w(p);return b!==void 0&&(u=void 0),b===void 0?u:b}}if((r&wr)===0)return m;if(c){var E=e.$$legacy;return function(b,q){return arguments.length>0?((!l||!q||E||a)&&c(q?m():b),b):m()}}var A=!1,F=le(s),S=ve(()=>{var b=m(),q=w(F);return A?(A=!1,q):F.v=b});return f&&w(S),i||(S.equals=Je),function(b,q){if(arguments.length>0){const oe=q?w(S):l&&f?Z(b):b;if(!S.equals(oe)){if(A=!0,O(F,oe),d&&u!==void 0&&(u=oe),ht(S))return b;He(()=>w(S))}return b}return ht(S)?S.v:w(S)}}function wn(e,t,{bubbles:r=!1,cancelable:n=!1}={}){return new CustomEvent(e,{detail:t,bubbles:r,cancelable:n})}function yn(){const e=x;return e===null&&Sr(),(t,r,n)=>{var l;const i=(l=e.s.$$events)==null?void 0:l[t];if(i){const f=Re(i)?i.slice():[i],o=wn(t,r,n);for(const a of f)a.call(e.x,o);return!o.defaultPrevented}return!0}}const mn="5";var gt;typeof window<"u"&&((gt=window.__svelte??(window.__svelte={})).v??(gt.v=new Set)).add(mn);vr();var En=$('<p style="color: red;"> </p>'),bn=$('<input type="file" accept="image/jpeg"> <button>Upload</button> <!>',1);function xn(e,t){Me(t,!1);const r=yn();let n=le(null),i=le("");async function l(){const c=new FormData;c.append("image",w(n));const v=await(await fetch("/api/exif-reader",{method:"POST",body:c})).json();if(Object.keys(v).length===0){O(i,"No EXIF data found in this file. Please upload a valid photo with metadata.");return}O(i,"");const d=URL.createObjectURL(w(n));r("uploaded",{exif:v,imageUrl:d})}rt();var f=bn(),o=ie(f),a=k(o,2),s=k(a,2);{var _=c=>{var u=En(),v=te(u);Ue(()=>Ke(v,w(i))),j(c,u)};ce(s,c=>{w(i)&&c(_)})}ct("change",o,c=>O(n,c.target.files[0])),ct("click",a,l),j(e,f),Ce()}var Sn=$("<p>No EXIF data found.</p>"),Tn=$('<tr><td class="svelte-8q9iwp"><strong> </strong></td><td class="svelte-8q9iwp"> </td></tr>'),Pn=$('<table class="exif-table svelte-8q9iwp"><thead><tr><th class="svelte-8q9iwp">Key</th><th class="svelte-8q9iwp">Value</th></tr></thead><tbody></tbody></table>'),An=$("<h2>EXIF Data</h2> <!>",1);function Nn(e,t){Me(t,!1);let r=De(t,"exifData",24,()=>({}));rt();var n=An(),i=k(ie(n),2);{var l=o=>{var a=Sn();j(o,a)},f=o=>{var a=Pn(),s=k(te(a));ln(s,5,()=>Object.entries(r()),rn,(_,c,u)=>{let v=()=>w(c)[0],d=()=>w(c)[1];var h=Tn();vn(h,1,sn(u%2===0?"even":"odd"),"svelte-8q9iwp");var m=te(h),p=te(m),E=te(p),A=k(m),F=te(A);Ue(()=>{Ke(E,v()),Ke(F,d())}),j(_,h)}),j(o,a)};ce(i,o=>{Object.keys(r()).length===0?o(l):o(f,!1)})}j(e,n),Ce()}var On=$('<h2>Uploaded Image</h2> <img alt="Uploaded" style="max-width: 100%; height: auto;">',1);function In(e,t){let r=De(t,"imageUrl",8);var n=On(),i=k(ie(n),2);Ue(()=>Ht(i,"src",r())),j(e,n)}var Dn=$('<h2>Photo Location</h2> <iframe title="Google Map" width="100%" height="300" frameborder="0" style="border:0" allowfullscreen=""></iframe>',1);function Rn(e,t){let r=De(t,"lat",8),n=De(t,"lon",8);var i=Dn(),l=k(ie(i),2);Ue(()=>Ht(l,"src",`https://www.google.com/maps?q=${r()},${n()}&z=15&output=embed`)),j(e,i)}var Ln=$("<!> <!>",1),kn=$('<header class="svelte-1y918sf"><h1>Secure Photo Metadata Reader</h1></header> <!> <!> <!> <footer class="svelte-1y918sf"><p>&copy; 2025 Secure Photo Metadata Reader</p></footer>',1);function Mn(e,t){Me(t,!1);let r=le(null),n=le(null);function i(v){console.log("Image uploaded:",v.detail),O(r,v.detail.exif),O(n,v.detail.imageUrl)}function l(v){const d=v.split(/[^\d.]+/).filter(Boolean).map(Number);return d.length!==3?null:d[0]+d[1]/60+d[2]/3600}function f(v){const d=v["GPS Latitude"],h=v["GPS Longitude"],m=v["GPS Latitude Ref"],p=v["GPS Longitude Ref"];if(!d||!h||!m||!p)return null;const E=l(d)*(m==="S"?-1:1),A=l(h)*(p==="W"?-1:1);return{lat:E,lon:A}}rt();var o=kn(),a=k(ie(o),2);xn(a,{$$events:{uploaded:i}});var s=k(a,2);{var _=v=>{In(v,{get imageUrl(){return w(n)}})};ce(s,v=>{w(n)&&v(_)})}var c=k(s,2);{var u=v=>{var d=Ln(),h=ie(d);{var m=E=>{Rn(E,{get lat(){return f(w(r)).lat},get lon(){return f(w(r)).lon}})};ce(h,E=>{f(w(r))&&E(m)})}var p=k(h,2);Nn(p,{get exifData(){return w(r)}}),j(v,d)};ce(c,v=>{w(r)&&v(u)})}j(e,o),Ce()}Qr(Mn,{target:document.getElementById("app")});
