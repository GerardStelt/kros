/* Qwik Service Worker */
const appBundles=[["q-B-1-LAwH.js",[10],["GDHqMhE6f0Q"]],["q-B-YmtSkP.js",[10]],["q-B3xziZBj.js",[10,28],["v3BAnrUbW1k"]],["q-B9UjsCw0.js",[10,28],["I0bU2he6ktg"]],["q-BHtPJBiE.js",[10]],["q-BLNlw28s.js",[10,28],["3sdQ8fXrMi4","45Qt5RvkfGY","9XJxmNly1Wc","bBo0IY0E9rI","nS0HHj4GoVE","pJ1EyQKHR8g","ZOtaRHUQWeQ"]],["q-BOb1FJY8.js",[10],["A5bZC7WO00A"]],["q-BPvU4mLg.js",[10,28],["02wMImzEAbk","fX0bDjeJa0E","RPDJAz33WLA","TxCFOy819ag"]],["q-Bq36Wx9q.js",[]],["q-BUbUwAwN.js",[10],["Td7uYpmHpvI"]],["q-BvEco60E.js",[]],["q-C2gB30Ny.js",[10]],["q-C8_zGJIa.js",[10],["6LN6QG4rDfI"]],["q-CE6PdFvt.js",[10]],["q-ChY0F5AF.js",[10],["0sPxvX8y5Zc"]],["q-Cjjim92u.js",[10]],["q-CogsGxO9.js",[10]],["q-CugOVQfM.js",[10,28],["anRnQ0rGPN0"]],["q-CyZB5WK8.js",[10]],["q-CZN4H3_O.js",[10]],["q-D5rw4Z35.js",[10],["CIyuPgiUszU"]],["q-DCC9bdJA.js",[10]],["q-DkGuryfw.js",[10]],["q-DrP0OTfX.js",[10,28],["wOIPfiQ04l4"]],["q-DumOnDkx.js",[10,28],["BUbtvTyvVRE","WmYC5H00wtI"]],["q-Dw5CT5pE.js",[10],["mGztVRKKFC4"]],["q-DWlZACAB.js",[10],["2s0A5Q5Ek6o"]],["q-eEN1FxRc.js",[10,28],["8gdLBszqbaM","Osdg8FnYTw4","pIf0khHUxfY"]],["q-FjI7C5Fx.js",[10]],["q-fJkQnue_.js",[],["DyVc0YBIqQU"]],["q-mV329ami.js",[10]],["q-NcszCN8A.js",[10]],["q-PhKPkmaZ.js",[10],["n3Q4sKwVtwk"]],["q-QXJq_6_s.js",[10,28],["e0ssiDXoeAM"]],["q-sWOyx_to.js",[10],["Rmg00yRpihU"]],["q-T4roJ0jh.js",[10,28],["Nk9PlpjQm9Y","p9MSze0ojs4"]],["q-xBTivYvw.js",[10],["yHdEYZ8YaCE"]]];
const libraryBundleIds=[7];
const linkBundles=[[/^\/$/,[21,26,18,5]],[/^\/beton-prefab\/?$/,[21,26,22,20]],[/^\/contact\/?$/,[21,26,13,0]],[/^\/houten-palen\/?$/,[21,26,1,9]],[/^\/krappe-locaties\/?$/,[21,26,15,14]],[/^\/overig\/?$/,[21,26,4,36]],[/^\/prijzen\/?$/,[21,26,16,25]],[/^\/stalen-boor\/?$/,[21,26,19,32]],[/^\/stalen-buis\/?$/,[21,26,31,12]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],L=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!E(n),E=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},v=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,A]of a)A(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),v(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),v(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",()=>{(async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=L(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})()})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
