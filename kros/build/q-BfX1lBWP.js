import{_ as S,$ as G,g as K,s as st,j as it,S as lt,e as ct,b as ut,f as U,d as dt,c as M,a as f,T as _t,E as mt,q as N,H as pt,w as ft}from"./q-DoTjXb0A.js";import{t as vt,j as Z,k as x,r as tt,m as et,l as ot,n as J,o as yt,q as ht,v as St,w as D,x as g,y as Ct,z as Et,A as wt,B as qt,c as bt,C as gt,d as Rt,D as Lt,R as At,e as Pt,f as Dt,h as It,i as kt}from"./q-0_DAk0wA.js";const Tt=":root{view-transition-name:none}";const z=()=>S(()=>import("./q-CDdgzPWU.js"),__vite__mapDeps([])),Q=[["/kros/",[z,()=>S(()=>import("./q-DoQHblhw.js"),__vite__mapDeps([]))]],["kros/contact/",[z,()=>S(()=>import("./q-UJxE5Kx2.js"),__vite__mapDeps([]))]],["kros/prices/",[z,()=>S(()=>import("./q-CxuvHqbI.js"),__vite__mapDeps([]))]]],B=[];const $=!0;const Ht=async(v,n)=>{const[y,C,a,E]=G(),{type:i="link",forceReload:_=v===void 0,replaceState:m=!1,scroll:w=!0}=typeof n=="object"?n:{forceReload:n},l=a.value.dest,o=v===void 0?l:vt(v,E.url);if(!Z(o,l)){location.href=o.href;return}if(!_&&x(o,l)){i==="link"&&o.href!==location.href&&history.pushState(null,"",o),tt(i,o,new URL(location.href),et()),i==="popstate"&&(window._qCityScrollEnabled=!0);return}return a.value={type:i,dest:o,forceReload:_,replaceState:m,scroll:w},ot(o,K()),J(Q,B,$,o.pathname),y.value=void 0,E.isNavigating=!0,new Promise(q=>{C.r=q})},Ot=({track:v})=>{const[n,y,C,a,E,i,_,m,w,l,o]=G();async function q(){var X;const[u,R]=v(()=>[l.value,n.value]),nt=st(""),L=o.url,d=R?"form":u.type,rt=u.replaceState;let r,A,V=null,I;{r=new URL(u.dest,location),r.pathname.endsWith("/")||(r.pathname+="/");let k=J(Q,B,$,r.pathname);I=K();const T=A=await ot(r,I,{action:R,clearCache:!0});if(!T){l.untrackedValue={type:d,dest:r};return}const H=T.href,O=new URL(H,r);yt(O,r)||(r=O,k=J(Q,B,$,r.pathname));try{V=await k}catch{window.location.href=H;return}}if(V){const[k,T,H,O]=V,P=H,at=P[P.length-1];o.prevUrl=L,o.url=r,o.params={...T},l.untrackedValue={type:d,dest:r};const b=ht(A,o,P,nt);y.headings=at.headings,y.menu=O,C.value=it(P),a.links=b.links,a.meta=b.meta,a.styles=b.styles,a.scripts=b.scripts,a.title=b.title,a.frontmatter=b.frontmatter;{w.viewTransition!==!1&&(document.__q_view_transition__=!0);let F;d==="popstate"&&(F=et()),(u.scroll&&(!u.forceReload||!x(r,L))&&(d==="link"||d==="popstate")||d==="form"&&!x(r,L))&&(document.__q_scroll_restore__=()=>tt(d,r,L,F));const Y=A==null?void 0:A.loaders,t=window;if(Y&&Object.assign(_,Y),St.clear(),!t._qCitySPA){if(t._qCitySPA=!0,history.scrollRestoration="manual",t.addEventListener("popstate",()=>{t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce),i(location.href,{type:"popstate"})}),t.removeEventListener("popstate",t._qCityInitPopstate),t._qCityInitPopstate=void 0,!t._qCityHistoryPatch){t._qCityHistoryPatch=!0;const s=history.pushState,p=history.replaceState,h=e=>(e===null||typeof e>"u"?e={}:(e==null?void 0:e.constructor)!==Object&&(e={_data:e}),e._qCityScroll=e._qCityScroll||g(document.documentElement),e);history.pushState=(e,c,j)=>(e=h(e),s.call(history,e,c,j)),history.replaceState=(e,c,j)=>(e=h(e),p.call(history,e,c,j))}document.body.addEventListener("click",s=>{if(s.defaultPrevented)return;const p=s.target.closest("a[href]");if(p&&!p.hasAttribute("preventdefault:click")){const h=p.getAttribute("href"),e=new URL(location.href),c=new URL(h,e);if(Z(c,e)&&x(c,e)){if(s.preventDefault(),!c.hash&&!c.href.endsWith("#")){c.href!==e.href&&history.pushState(null,"",c),t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce),D({...g(document.documentElement),x:0,y:0}),location.reload();return}i(p.getAttribute("href"))}}}),document.body.removeEventListener("click",t._qCityInitAnchors),t._qCityInitAnchors=void 0,window.navigation||(document.addEventListener("visibilitychange",()=>{if(t._qCityScrollEnabled&&document.visibilityState==="hidden"){const s=g(document.documentElement);D(s)}},{passive:!0}),document.removeEventListener("visibilitychange",t._qCityInitVisibility),t._qCityInitVisibility=void 0),t.addEventListener("scroll",()=>{t._qCityScrollEnabled&&(clearTimeout(t._qCityScrollDebounce),t._qCityScrollDebounce=setTimeout(()=>{const s=g(document.documentElement);D(s),t._qCityScrollDebounce=void 0},200))},{passive:!0}),removeEventListener("scroll",t._qCityInitScroll),t._qCityInitScroll=void 0,(X=t._qCityBootstrap)==null||X.remove(),t._qCityBootstrap=void 0,Ct.resolve()}if(d!=="popstate"){t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce);const s=g(document.documentElement);D(s)}Et(window,d,L,r,rt),lt(I).then(()=>{var h;wt(I).setAttribute("q:route",k);const p=g(document.documentElement);D(p),t._qCityScrollEnabled=!0,o.isNavigating=!1,(h=m.r)==null||h.call(m)})}}}q()},Ut=v=>{ct(N(()=>S(()=>Promise.resolve().then(()=>W),void 0),"s_RPDJAz33WLA"));const n=qt();if(!(n!=null&&n.params))throw new Error("Missing Qwik City Env Data");const y=ut("url");if(!y)throw new Error("Missing Qwik URL Env Data");const C=new URL(y),a=U({url:C,params:n.params,isNavigating:!1,prevUrl:void 0},{deep:!1}),E={},i=dt(U(n.response.loaders,{deep:!1})),_=M({type:"initial",dest:C,forceReload:!1,replaceState:!1,scroll:!0}),m=U(bt),w=U({headings:void 0,menu:void 0}),l=M(),o=n.response.action,q=o?n.response.loaders[o]:void 0,u=M(q?{id:o,data:n.response.formData,output:{result:q,status:n.response.status}}:void 0),R=N(()=>S(()=>Promise.resolve().then(()=>W),void 0),"s_fX0bDjeJa0E",[u,E,_,a]);return f(gt,w),f(Rt,l),f(Lt,m),f(At,a),f(Pt,R),f(Dt,i),f(It,u),f(kt,_),_t(N(()=>S(()=>Promise.resolve().then(()=>W),void 0),"s_02wMImzEAbk",[u,w,l,m,n,R,i,E,v,_,a])),mt(pt,null,3,"qY_0")},W=Object.freeze(Object.defineProperty({__proto__:null,_hW:ft,s_02wMImzEAbk:Ot,s_RPDJAz33WLA:Tt,s_TxCFOy819ag:Ut,s_fX0bDjeJa0E:Ht},Symbol.toStringTag,{value:"Module"}));export{ft as _hW,Ot as s_02wMImzEAbk,Tt as s_RPDJAz33WLA,Ut as s_TxCFOy819ag,Ht as s_fX0bDjeJa0E};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
