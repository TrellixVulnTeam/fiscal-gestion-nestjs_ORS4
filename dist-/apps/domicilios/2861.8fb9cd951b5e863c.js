"use strict";(self.webpackChunkdomicilios=self.webpackChunkdomicilios||[]).push([[2861],{2861:(pt,O,b)=>{b.r(O),b.d(O,{scopeCss:()=>at});const m="-shadowcsshost",y="-shadowcssslotted",B="-shadowcsscontext",S=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",j=new RegExp("("+m+S,"gim"),v=new RegExp("("+B+S,"gim"),N=new RegExp("("+y+S,"gim"),f=m+"-no-combinator",x=/-shadowcsshost-no-combinator([^\s]*)/,M=[/::shadow/g,/::content/g],_=/-shadowcsshost/gim,I=/:host/gim,K=/::slotted/gim,U=/:host-context/gim,Y=/\/\*\s*[\s\S]*?\*\//g,z=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,G=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,J=/([{}])/g,C="%BLOCK%",H=(t,e)=>{const o=X(t);let n=0;return o.escapedString.replace(G,(...c)=>{const s=c[2];let a="",r=c[4],l="";r&&r.startsWith("{"+C)&&(a=o.blocks[n++],r=r.substring(C.length+1),l="{");const p=e({selector:s,content:a});return`${c[1]}${p.selector}${c[3]}${l}${p.content}${r}`})},X=t=>{const e=t.split(J),o=[],n=[];let c=0,s=[];for(let r=0;r<e.length;r++){const l=e[r];"}"===l&&c--,c>0?s.push(l):(s.length>0&&(n.push(s.join("")),o.push(C),s=[]),o.push(l)),"{"===l&&c++}return s.length>0&&(n.push(s.join("")),o.push(C)),{escapedString:o.join(""),blocks:n}},E=(t,e,o)=>t.replace(e,(...n)=>{if(n[2]){const c=n[2].split(","),s=[];for(let a=0;a<c.length;a++){const r=c[a].trim();if(!r)break;s.push(o(f,r,n[3]))}return s.join(",")}return f+n[3]}),W=(t,e,o)=>t+e.replace(m,"")+o,T=(t,e,o)=>e.indexOf(m)>-1?W(t,e,o):t+e+o+", "+e+" "+t+o,w=(t,e,o,n,c)=>H(t,s=>{let a=s.selector,r=s.content;return"@"!==s.selector[0]?a=((t,e,o,n)=>t.split(",").map(c=>n&&c.indexOf("."+n)>-1?c.trim():((t,e)=>!(t=>(t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")))(e).test(t))(c,e)?((t,e,o)=>{const c="."+(e=e.replace(/\[is=([^\]]*)\]/g,(g,...h)=>h[0])),s=g=>{let h=g.trim();if(!h)return"";if(g.indexOf(f)>-1)h=((t,e,o)=>{if(_.lastIndex=0,_.test(t)){const n=`.${o}`;return t.replace(x,(c,s)=>s.replace(/([^:]*)(:*)(.*)/,(a,r,l,i)=>r+n+l+i)).replace(_,n+" ")}return e+" "+t})(g,e,o);else{const k=g.replace(_,"");if(k.length>0){const R=k.match(/([^:]*)(:*)(.*)/);R&&(h=R[1]+c+R[2]+R[3])}}return h},a=(t=>{const e=[];let n,o=0;return n=(t=t.replace(/(\[[^\]]*\])/g,(s,a)=>{const r=`__ph-${o}__`;return e.push(a),o++,r})).replace(/(:nth-[-\w]+)(\([^)]+\))/g,(s,a,r)=>{const l=`__ph-${o}__`;return e.push(r),o++,a+l}),{content:n,placeholders:e}})(t);let i,r="",l=0;const p=/( |>|\+|~(?!=))\s*/g;let u=!((t=a.content).indexOf(f)>-1);for(;null!==(i=p.exec(t));){const g=i[1],h=t.slice(l,i.index).trim();u=u||h.indexOf(f)>-1,r+=`${u?s(h):h} ${g} `,l=p.lastIndex}const $=t.substring(l);return u=u||$.indexOf(f)>-1,r+=u?s($):$,((t,e)=>e.replace(/__ph-(\d+)__/g,(o,n)=>t[+n]))(a.placeholders,r)})(c,e,o).trim():c.trim()).join(", "))(s.selector,e,o,n):(s.selector.startsWith("@media")||s.selector.startsWith("@supports")||s.selector.startsWith("@page")||s.selector.startsWith("@document"))&&(r=w(s.content,e,o,n)),{selector:a.replace(/\s{2,}/g," ").trim(),content:r}}),at=(t,e,o)=>{const n=e+"-h",c=e+"-s",s=(t=>t.match(z)||[])(t);t=(t=>t.replace(Y,""))(t);const a=[];if(o){const l=i=>{const p=`/*!@___${a.length}___*/`;return a.push({placeholder:p,comment:`/*!@${i.selector}*/`}),i.selector=p+i.selector,i};t=H(t,i=>"@"!==i.selector[0]?l(i):((i.selector.startsWith("@media")||i.selector.startsWith("@supports")||i.selector.startsWith("@page")||i.selector.startsWith("@document"))&&(i.content=H(i.content,l)),i))}const r=((t,e,o,n,c)=>{const s=((t,e)=>{const o="."+e+" > ",n=[];return t=t.replace(N,(...c)=>{if(c[2]){const s=c[2].trim(),r=o+s+c[3];let l="";for(let d=c[4]-1;d>=0;d--){const u=c[5][d];if("}"===u||","===u)break;l=u+l}const i=l+r,p=`${l.trimRight()}${r.trim()}`;return i.trim()!==p.trim()&&n.push({orgSelector:i,updatedSelector:`${p}, ${i}`}),r}return f+c[3]}),{selectors:n,cssText:t}})(t=(t=>E(t,v,T))(t=(t=>E(t,j,W))(t=(t=>t.replace(U,B).replace(I,m).replace(K,y))(t))),n);return t=(t=>M.reduce((e,o)=>e.replace(o," "),t))(t=s.cssText),e&&(t=w(t,e,o,n)),{cssText:(t=(t=t.replace(/-shadowcsshost-no-combinator/g,`.${o}`)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:s.selectors}})(t,e,n,c);return t=[r.cssText,...s].join("\n"),o&&a.forEach(({placeholder:l,comment:i})=>{t=t.replace(l,i)}),r.slottedSelectors.forEach(l=>{t=t.replace(l.orgSelector,l.updatedSelector)}),t}}}]);