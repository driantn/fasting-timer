if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let t={};const o=e=>n(e,d),l={module:{uri:d},exports:t,require:o};i[d]=Promise.all(s.map((e=>l[e]||o(e)))).then((e=>(r(...e),t)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-43e762ea.js",revision:null},{url:"assets/index-6c79bb7b.css",revision:null},{url:"index.html",revision:"d2e774608544d91622466b1d27d7960b"},{url:"registerSW.js",revision:"6e4e6461550198ed1f64e8023c581984"},{url:"128x128.png",revision:"e8b31d1a5e3433d02978af2bc94d5788"},{url:"256x256.png",revision:"5aa78f1b5d88450daa6191fd6a18383a"},{url:"512x512.png",revision:"6bd90d89e054b07e19897ad692eca95c"},{url:"manifest.webmanifest",revision:"c4de6a974f85c210768fccf7bdc622df"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
