var f=Object.defineProperty;var a=(t,e,r)=>e in t?f(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var o=(t,e,r)=>a(t,typeof e!="symbol"?e+"":e,r);import{r as u,R as l}from"./index-DRjF_FHU.js";const p=typeof window<"u"?u.useLayoutEffect:u.useEffect;function O(t){const e=u.useRef(t);return p(()=>{e.current=t}),u.useRef((...r)=>(0,e.current)(...r)).current}const i={};function d(t,e){const r=u.useRef(i);return r.current===i&&(r.current=t(e)),r}const h=[];function E(t){u.useEffect(t,h)}class s{constructor(){o(this,"currentId",null);o(this,"clear",()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)});o(this,"disposeEffect",()=>this.clear)}static create(){return new s}start(e,r){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,r()},e)}}function b(){const t=d(s.create).current;return E(t.disposeEffect),t}function T(t,e){if(t==null)return{};var r={};for(var n in t)if({}.hasOwnProperty.call(t,n)){if(e.includes(n))continue;r[n]=t[n]}return r}function c(t,e){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,n){return r.__proto__=n,r},c(t,e)}function _(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,c(t,e)}const m=l.createContext(null);export{m as T,_,T as a,b,O as c,p as d,d as u};