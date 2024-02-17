/* Qwik Service Worker */
const appBundles=[["q-0qMmU8_u.js",[10,11],["02wMImzEAbk","fX0bDjeJa0E","RPDJAz33WLA","TxCFOy819ag"]],["q-3zydxYzp.js",[11]],["q-6WrGwLm7.js",[10,11],["wOIPfiQ04l4"]],["q-7xRY8Dra.js",[11]],["q-B4i9ixcO.js",[11],["VkLNXphUh5s"]],["q-BCz8TUWY.js",[11],["pZoqo039gOs"]],["q-BiB5W3Oz.js",[11],["xYL1qOwPyDI"]],["q-BNObGfG1.js",[11]],["q-BOb1FJY8.js",[11],["A5bZC7WO00A"]],["q-Bq36Wx9q.js",[]],["q-BsH2VBFS.js",[11]],["q-BvEco60E.js",[]],["q-BVRujUge.js",[10,11],["8gdLBszqbaM","Osdg8FnYTw4","pIf0khHUxfY"]],["q-C2gB30Ny.js",[11]],["q-C_J1z3uj.js",[11]],["q-CfjGtYqY.js",[10,11],["Nk9PlpjQm9Y","p9MSze0ojs4"]],["q-CsvJxYBG.js",[11]],["q-D5xTxpIg.js",[10,11,22],["ceU05TscGYE"]],["q-DHPwlckR.js",[10,11],["zrbrqoaqXSY"]],["q-DKwBUhjJ.js",[11,22],["3lb9EjxI5sA"]],["q-DXq7jls0.js",[11],["M0MhZOWBKK8"]],["q-fJkQnue_.js",[],["DyVc0YBIqQU"]],["q-hBO0Reg2.js",[11]],["q-lMC1GSFJ.js",[10,11],["3sccYCDd1Z0"]],["q-qkvlW4vf.js",[10,11],["BUbtvTyvVRE","WmYC5H00wtI"]],["q-vL4ZxGUi.js",[10,11],["e0ssiDXoeAM"]]];
const libraryBundleIds=[0];
const linkBundles=[[/^\/$/,[1,4,3,6]],[/^\/contact\/?$/,[1,4,16,20]],[/^\/prices\/?$/,[1,4,14,5]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],L=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!E(n),E=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},v=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,A]of a)A(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),v(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),v(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",()=>{(async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=L(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})()})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());