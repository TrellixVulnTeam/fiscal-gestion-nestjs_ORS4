"use strict";(self.webpackChunkdomicilios=self.webpackChunkdomicilios||[]).push([[3764],{3764:(V,h,m)=>{m.r(h),m.d(h,{startTapClick:()=>M});var u=m(6536);const M=n=>{let i,s,E,d,o=10*-v,r=0;const U=n.getBoolean("animated",!0)&&n.getBoolean("rippleEffect",!0),p=new WeakMap,A=t=>{o=(0,u.o)(t),S(t)},D=()=>{clearTimeout(d),d=void 0,s&&(b(!1),s=void 0)},R=t=>{s||void 0!==i&&null!==i.parentElement||(i=void 0,g(k(t),t))},S=t=>{g(void 0,t)},g=(t,e)=>{if(t&&t===s)return;clearTimeout(d),d=void 0;const{x:l,y:a}=(0,u.p)(e);if(s){if(p.has(s))throw new Error("internal error");s.classList.contains(f)||w(s,l,a),b(!0)}if(t){const I=p.get(t);I&&(clearTimeout(I),p.delete(t));const F=T(t)?0:P;t.classList.remove(f),d=setTimeout(()=>{w(t,l,a),d=void 0},F)}s=t},w=(t,e,l)=>{r=Date.now(),t.classList.add(f);const a=U&&y(t);a&&a.addRipple&&(C(),E=a.addRipple(e,l))},C=()=>{void 0!==E&&(E.then(t=>t()),E=void 0)},b=t=>{C();const e=s;if(!e)return;const l=L-Date.now()+r;if(t&&l>0&&!T(e)){const a=setTimeout(()=>{e.classList.remove(f),p.delete(e)},L);p.set(e,a)}else e.classList.remove(f)},c=document;c.addEventListener("ionScrollStart",t=>{i=t.target,D()}),c.addEventListener("ionScrollEnd",()=>{i=void 0}),c.addEventListener("ionGestureCaptured",D),c.addEventListener("touchstart",t=>{o=(0,u.o)(t),R(t)},!0),c.addEventListener("touchcancel",A,!0),c.addEventListener("touchend",A,!0),c.addEventListener("mousedown",t=>{const e=(0,u.o)(t)-v;o<e&&R(t)},!0),c.addEventListener("mouseup",t=>{const e=(0,u.o)(t)-v;o<e&&S(t)},!0)},k=n=>{if(!n.composedPath)return n.target.closest(".ion-activatable");{const o=n.composedPath();for(let r=0;r<o.length-2;r++){const i=o[r];if(i.classList&&i.classList.contains("ion-activatable"))return i}}},T=n=>n.classList.contains("ion-activatable-instant"),y=n=>{if(n.shadowRoot){const o=n.shadowRoot.querySelector("ion-ripple-effect");if(o)return o}return n.querySelector("ion-ripple-effect")},f="ion-activated",P=200,L=200,v=2500}}]);