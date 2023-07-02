var U=Object.defineProperty;var Z=(i,e,t)=>e in i?U(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var _=(i,e,t)=>(Z(i,typeof e!="symbol"?e+"":e,t),t);import{s as B,n as I,f as N}from"../chunks/scheduler.8b5db029.js";import{S as T,i as A,e as P,a as p,f as h,g,h as k,j as b,k as d,l as W,y as R,m as F,n as G,x as H,z as J,o as K,d as m,p as $,b as ee,t as v,r as C,s as y,u as x,c as E,A as te,v as S,w as Y}from"../chunks/index.c97d987d.js";function X(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}const ne=!0,ge=Object.freeze(Object.defineProperty({__proto__:null,prerender:ne},Symbol.toStringTag,{value:"Module"}));function q(i,e,t){const n=i.slice();return n[5]=e[t],n[7]=t,n}function z(i){let e,t=X(i[0]),n=[];for(let s=0;s<t.length;s+=1)n[s]=D(q(i,t,s));return{c(){e=g("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){e=k(s,"DIV",{class:!0,style:!0});var r=b(e);for(let l=0;l<n.length;l+=1)n[l].l(r);r.forEach(h),this.h()},h(){d(e,"class","box svelte-xl8pzb"),W(e,"transform","translate("+i[1]+"px, "+i[2]+"px)")},m(s,r){p(s,e,r);for(let l=0;l<n.length;l+=1)n[l]&&n[l].m(e,null)},p(s,r){if(r&9){t=X(s[0]);let l;for(l=0;l<t.length;l+=1){const c=q(s,t,l);n[l]?n[l].p(c,r):(n[l]=D(c),n[l].c(),n[l].m(e,null))}for(;l<n.length;l+=1)n[l].d(1);n.length=t.length}r&6&&W(e,"transform","translate("+s[1]+"px, "+s[2]+"px)")},d(s){s&&h(e),R(n,s)}}}function D(i){let e,t=i[5]+"",n,s,r;function l(){return i[4](i[7])}return{c(){e=g("div"),n=F(t),this.h()},l(c){e=k(c,"DIV",{class:!0});var o=b(e);n=G(o,t),o.forEach(h),this.h()},h(){d(e,"class","option svelte-xl8pzb")},m(c,o){p(c,e,o),H(e,n),s||(r=J(e,"click",l),s=!0)},p(c,o){i=c,o&1&&t!==(t=i[5]+"")&&K(n,t)},d(c){c&&h(e),s=!1,r()}}}function le(i){let e,t=i[0].length>0&&z(i);return{c(){t&&t.c(),e=P()},l(n){t&&t.l(n),e=P()},m(n,s){t&&t.m(n,s),p(n,e,s)},p(n,[s]){n[0].length>0?t?t.p(n,s):(t=z(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:I,o:I,d(n){n&&h(e),t&&t.d(n)}}}function se(i,e,t){let{options:n=[]}=e,{posX:s}=e,{posY:r}=e,{clickOption:l=o=>{console.log("clicked index: "+o)}}=e;const c=o=>l(o);return i.$$set=o=>{"options"in o&&t(0,n=o.options),"posX"in o&&t(1,s=o.posX),"posY"in o&&t(2,r=o.posY),"clickOption"in o&&t(3,l=o.clickOption)},[n,s,r,l,c]}class oe extends T{constructor(e){super(),A(this,e,se,le,B,{options:0,posX:1,posY:2,clickOption:3})}}class ie{constructor(e,t,n,s,r,l,c,o){_(this,"options");_(this,"top");_(this,"right");_(this,"bottom");_(this,"left");_(this,"focus");_(this,"unfocus");_(this,"choose");this.options=e,this.top=t,this.right=n,this.bottom=s,this.left=r,this.focus=l,this.unfocus=c,this.choose=o}}function V(i){let e,t=i[1][i[2]]+"",n,s,r,l;return{c(){e=g("span"),n=F(t),this.h()},l(c){e=k(c,"SPAN",{class:!0});var o=b(e);n=G(o,t),o.forEach(h),this.h()},h(){d(e,"class",s=N(i[0]?"highlight":"")+" svelte-ldu728")},m(c,o){p(c,e,o),H(e,n),r||(l=J(e,"click",i[3]),r=!0)},p(c,o){o&6&&t!==(t=c[1][c[2]]+"")&&K(n,t),o&1&&s!==(s=N(c[0]?"highlight":"")+" svelte-ldu728")&&d(e,"class",s)},d(c){c&&h(e),r=!1,l()}}}function ce(i){let e,t=i[1].length>i[2]&&V(i);return{c(){t&&t.c(),e=P()},l(n){t&&t.l(n),e=P()},m(n,s){t&&t.m(n,s),p(n,e,s)},p(n,[s]){n[1].length>n[2]?t?t.p(n,s):(t=V(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:I,o:I,d(n){n&&h(e),t&&t.d(n)}}}function re(i,e,t){let{wordOptions:n}=e,{clickHandler:s=f=>{}}=e,{highlight:r=!1}=e;function l(){t(0,r=!0)}function c(){t(0,r=!1)}function o(f){t(2,a=f)}function u(f){const O=f.target.getBoundingClientRect();let Q=new ie(n,O.top,O.right,O.bottom,O.left,l,c,o);s(Q)}let a=0;return i.$$set=f=>{"wordOptions"in f&&t(1,n=f.wordOptions),"clickHandler"in f&&t(4,s=f.clickHandler),"highlight"in f&&t(0,r=f.highlight)},[r,n,a,u,s]}class fe extends T{constructor(e){super(),A(this,e,re,ce,B,{wordOptions:1,clickHandler:4,highlight:0})}}function j(i,e,t){const n=i.slice();return n[2]=e[t],n}function M(i){let e,t,n,s="",r;return e=new fe({props:{wordOptions:i[2],clickHandler:i[0]}}),{c(){C(e.$$.fragment),t=y(),n=g("span"),n.innerHTML=s,this.h()},l(l){x(e.$$.fragment,l),t=E(l),n=k(l,"SPAN",{class:!0,["data-svelte-h"]:!0}),te(n)!=="svelte-1qufua2"&&(n.innerHTML=s),this.h()},h(){d(n,"class","svelte-1su5o1k")},m(l,c){S(e,l,c),p(l,t,c),p(l,n,c),r=!0},p(l,c){const o={};c&2&&(o.wordOptions=l[2]),c&1&&(o.clickHandler=l[0]),e.$set(o)},i(l){r||(m(e.$$.fragment,l),r=!0)},o(l){v(e.$$.fragment,l),r=!1},d(l){l&&(h(t),h(n)),Y(e,l)}}}function ae(i){let e,t,n=X(i[1]),s=[];for(let l=0;l<n.length;l+=1)s[l]=M(j(i,n,l));const r=l=>v(s[l],1,1,()=>{s[l]=null});return{c(){e=g("div");for(let l=0;l<s.length;l+=1)s[l].c();this.h()},l(l){e=k(l,"DIV",{class:!0});var c=b(e);for(let o=0;o<s.length;o+=1)s[o].l(c);c.forEach(h),this.h()},h(){d(e,"class","box svelte-1su5o1k")},m(l,c){p(l,e,c);for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(e,null);t=!0},p(l,[c]){if(c&3){n=X(l[1]);let o;for(o=0;o<n.length;o+=1){const u=j(l,n,o);s[o]?(s[o].p(u,c),m(s[o],1)):(s[o]=M(u),s[o].c(),m(s[o],1),s[o].m(e,null))}for($(),o=n.length;o<s.length;o+=1)r(o);ee()}},i(l){if(!t){for(let c=0;c<n.length;c+=1)m(s[c]);t=!0}},o(l){s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)v(s[c]);t=!1},d(l){l&&h(e),R(s,l)}}}function ue(i,e,t){let{wordClickHander:n}=e,{text:s=[["I","We","You","They","He","She","It"],["go","went","goes","run","runs","work","works","live","lives"],["to","at","on","in"],["school","class","college","classrom","university","work","house","appartment","a house","the house","an appartment","the appartment","the school","the college","a school"]]}=e;return i.$$set=r=>{"wordClickHander"in r&&t(0,n=r.wordClickHander),"text"in r&&t(1,s=r.text)},[n,s]}class L extends T{constructor(e){super(),A(this,e,ue,ae,B,{wordClickHander:0,text:1})}}function he(i){let e,t,n,s,r,l,c,o,u;return t=new L({props:{wordClickHander:i[3]}}),l=new L({props:{wordClickHander:i[3]}}),o=new oe({props:{options:i[0],posX:i[1],posY:i[2],clickOption:i[4]}}),{c(){e=g("div"),C(t.$$.fragment),n=y(),s=g("span"),r=y(),C(l.$$.fragment),c=y(),C(o.$$.fragment),this.h()},l(a){e=k(a,"DIV",{class:!0});var f=b(e);x(t.$$.fragment,f),n=E(f),s=k(f,"SPAN",{class:!0}),b(s).forEach(h),r=E(f),x(l.$$.fragment,f),f.forEach(h),c=E(a),x(o.$$.fragment,a),this.h()},h(){d(s,"class","line svelte-1q75h2"),d(e,"class","box svelte-1q75h2")},m(a,f){p(a,e,f),S(t,e,null),H(e,n),H(e,s),H(e,r),S(l,e,null),p(a,c,f),S(o,a,f),u=!0},p(a,[f]){const w={};f&1&&(w.options=a[0]),f&2&&(w.posX=a[1]),f&4&&(w.posY=a[2]),o.$set(w)},i(a){u||(m(t.$$.fragment,a),m(l.$$.fragment,a),m(o.$$.fragment,a),u=!0)},o(a){v(t.$$.fragment,a),v(l.$$.fragment,a),v(o.$$.fragment,a),u=!1},d(a){a&&(h(e),h(c)),Y(t),Y(l),Y(o,a)}}}function pe(i,e,t){let n,s=200,r=200,l;return[n,s,r,u=>{t(0,n=u.options),t(1,s=u.left),t(2,r=u.bottom),l!=null&&l.unfocus(),l=u,u.focus()},u=>{l.choose(u)}]}class ke extends T{constructor(e){super(),A(this,e,pe,he,B,{})}}export{ke as component,ge as universal};
