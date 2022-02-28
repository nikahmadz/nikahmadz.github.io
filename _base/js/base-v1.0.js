(()=>{"use strict";window.base=((e={})=>{const t="1.0.6",o=window,n=document,r=void 0,s=()=>{},i=n.documentElement||n.body,c="",a=!0,l=!1,d=e=>typeof e,h=e=>Object.prototype.toString.call(e),g=d(s),u=h([]),p=d(c),f=Array.isArray?e=>Array.isArray(e):e=>h(e)===u,m=e=>{throw e},y=e=>m(`Cannot find: ${e}`),v=(e,t)=>m(`Invalid argument ${e}`+(t?`. Expecting (${t})`:c)),b=(e,t)=>{try{const o=JSON.parse(e,t);if(o&&"object"==typeof o)return o}catch(e){}},_=(e,t,o)=>{try{return JSON.stringify(e,t,o)}catch(e){}},C=Math.random,N=setTimeout,w=clearTimeout,x=(e,t=100)=>{let o;return(...n)=>(w(o),o=N((()=>{e.apply(r,n)}),t))},S=(e,t)=>{for(const o in e)if(t(e[o],o))break},E=(e,t)=>{const o=e.indexOf(t);o>=0&&(delete e[o],E(e,t))},k=e=>n.getElementById(e||c),$=e=>e.parentNode,I=(e,t=i)=>t.getElementsByTagName(e||c),J=e=>(e.hidden=l,e),T=e=>(e.hidden=a,e),A=(e,t)=>e.firstChild?e.insertBefore(t,e.firstChild):M(e,t),B=(e,t)=>{if(t)return d(t)===p?e.appendChild(n.createTextNode(t)):e.appendChild(t)},M=(e,t)=>{if(f(t))for(let o=0;o<t.length;o++)B(e,t[o]);else B(e,t)},O=()=>m("Cannot refer root element"),H=e=>($(e)||m("Cannot remove node with no parent")).removeChild(e),L=(e,t,o)=>{const r=n.createElement(e);if(t)for(const e in t)r.setAttribute(e,t[e]);return o&&M(r,o),r},F=o.getComputedStyle?e=>o.getComputedStyle(e):e=>e.currentStyle,R=e=>new RegExp(`(^|\\s+)(${e})\\s*(?=(\\s|$))`,"g"),z=new RegExp("[\\.\\|\\s]+","g"),j=(e,t,o)=>{const n=(e,t="|")=>e.replace(z,t).trim(),r=o?n(o," "):c,s=n(r+"|"+t);return e.className=(e.className.replace(R(s),c)+(r.length?" "+r:c)).trim(),e},D=(e,t)=>j(e,r,t),K=(e,t)=>j(e,t),q="__fade",G="_fadein",U="_fadeout",W=(e,t=300)=>(N(K,t,j(e,U,q),q),e),P=e=>j(e,U,G),X=e=>j(e,"_fadein|"+q,U),Q=(e,t,o)=>{J(D(e,"_peek"));const n=t();return o||T(e),K(e,"_peek"),n},V=e=>"addEventListener"in e&&"removeEventListener"in e,Y=e=>"attachEvent"in e&&"detachEvent"in e,Z=(e,t,o,n)=>{if(V(e))return e.addEventListener(t,o,n),{h:o,stop:()=>ee(e,t,o,n)};if(Y(e)){const r=s=>{o.apply(e,s),n&&n.once&&e.detachEvent("on"+t,r)};return e.attachEvent("on"+t,r),{h:r,stop:()=>e.detachEvent("on"+t,r)}}m("Fail to add event listener.")},ee=(e,t,o,n)=>{V(e)?e.removeEventListener(t,o,n):Y(e)?e.detachEvent("on"+t,o):m("Fail to remove event listener.")},te=(e,t)=>Z(e,"click",t),oe=(e,t)=>ee(e,"click",t),ne=(e,t)=>o=>{t&&o.isComposing||e(o)},re=(e,t)=>Z(o,"keyup",ne(e,t)),se=(()=>{const e=[];return{push:t=>{d(t)===g&&e.push(t)},cancel:t=>{E(e,t)},esc:()=>{if(e.length){const t=e.pop();t&&d(t)===g&&t()}else he(n.body)}}})(),ie=e=>{if(e){const t=[],n=e=>{E(t,e)},r=e=>{d(e)===g&&t.push(e)},s=()=>{for(let e=0;e<t.length;e++)t[e]&&d(t[e])===g&&t[e]()},i=t=>e.getItem(t)||c,a=(t,o)=>{e.setItem(t,o),s()},l=t=>{e.removeItem(t),s()},h=t=>parseInt(c+(e.getItem(t)||0)),u=(e,t)=>a(e,c+t),p=(t,o="{}")=>b(e.getItem(t)||o)||b(o)||{},f=(e,t,o="{}")=>a(e,_(t)||o),m=t=>{const o=e.getItem(t),n=b(o),r=o&&!n;if(r){const e=`Base found corrupted data on [${t}].`;console.log("%c"+e,"color:tomato"),N((()=>{if(confirm(`${e} Recover bad data?`)){const e=`${t}.${v()}.x`,n=`Data has been recovered as [${e}].`;ce.setString(e,o),N((()=>{console.log("%c"+n,"color:orange"),alert(n)}))}}))}return!r},y=()=>{let t=0;for(let o=0;o<e.length;o++){const n=e.key(o);n&&(t+=i(n).length)}return t},v=(t=c,o=0)=>{const n=t+parseInt(Date.now()+o+c).toString(36);return null!==e.getItem(n)?v(t,o+1):n};return Z(o,"storage",s),{storage:e,getString:i,setString:a,getNumber:h,setNumber:u,getJson:p,setJson:f,validateJson:m,onChange:r,cleanOnChange:n,remove:l,size:y,newKey:v}}},ce=ie(o.localStorage),ae=ie(o.sessionStorage),le=(e,t)=>{const o=t?(t.validateJson(e),t.getJson(e)):{},n=(n,r,s=true)=>(o[n]=r,t&&s?(t.setJson(e,o),a):l);return t.onChange((()=>{t.validateJson(e)||t.setJson(e,o)})),{get:e=>o[e],set:n,remove:e=>{n(e,r)}}},de=le("base",ce),he=(()=>{const e=L("a",{tabindex:"0",class:"_no-focus"}),t=t=>{A(t,e),e.focus()};return t.clear=()=>{$(e)&&H(e)},t})(),ge="_dark",ue=(()=>{const e="_color-scheme",t="theme";let s=c,a=[ge],l=k(e);l||(l=L("meta",{name:"color-scheme",content:"",id:e}),n.head.appendChild(l));const h=l,g=o.matchMedia,u=e=>{if(!f(e))return v("to change theme");a=e},m=(e=c)=>{j(i,s,e);let o="normal";return"dark"===e.slice(1,5)&&(o="dark"),h.setAttribute("content",o),de.set(t,e),s=e};if(g){const e=g("(prefers-color-scheme: dark)");de.get(t)!==r?m(de.get(t)):e.matches?m(ge):m(),Z(e,"change",(e=>{e.matches?m(ge):m()}))}else m(de.get(t));return{list:u,set:m,change:(e=a)=>d(e)===p?m(e):f(e)?(u(e),m(e[e.indexOf(s)+1]||c)):v("to change theme"),current:()=>s}})(),pe=(t,o)=>{e[o]=t};return Z(o,"load",(()=>{const e=(()=>{const e="_scrub";let t,o=l,r=k(e);r||(r=L("div",{id:e,class:e}),A(n.body,r));const s=r;return{show:()=>{o||(o=a,w(t),t=N(P,0,J(s)))},hide:()=>{o&&(o=l,w(t),t=N(T,300,X(s)))}}})(),t=(()=>{const e="_error",t=k(e),r=k(e+"-action"),s=k(e+"-description");if(t){const e=e=>{h||(h=a,s&&(s.innerHTML=e?e.message?e.message.replace(/^Uncaught/,c):e:"Unexpected error occured somewhere."),w(d),J(W(t)),se.push(i),r&&he(r))},i=()=>{h&&(h=l,w(d),d=N(T,300,X(t)),se.cancel(i),he(n.body))};let d,h=l;return Z(o,"error",e),{open:e,close:i}}{const t=()=>y(e);return{open:t,close:t}}})(),i=(()=>{const e=k("_bg");if(e){const t=()=>{c||P(e),c=a},o=()=>{c&&X(e),c=l},n="_bgi _smoothest",s=(e=n,t=1e3)=>{if(d){const o=d;return d=r,N(X,100,j(o,q,e)),N(H,100+t,o),o}},i=(t,o=n,r=1e3)=>{if(t===d)return;const s=d;d=t,W(D(t,o),r),e.appendChild(t),N((()=>{s&&s!==d&&H(s)}),r)};D(e,"_app");let c=e.hidden?l:a,d=e.firstElementChild||r;return{show:t,hide:o,now:()=>d,set:i,remove:s}}{const e=()=>y("_bg");return{show:e,hide:e,now:s,set:e,remove:s}}})(),h=(()=>{const e="_overlay",t=k(e),o=k("_close-overlay");if(t){const e=(e={})=>{if(!c){c=a,w(i),e.esc&&se.push(n),o&&(e.close===a?(e.esc?o.title="Close (esc)":o.title="Close",J(o)):T(o));let r=G;e.blur&&(r="_fadein _blur"),i=N(j,0,J(t),U,r)}},n=()=>{c&&(c=l,w(i),i=N(T,300,j(t,"_fadein|_blur",U)),se.cancel(n))},r=e=>{t&&te(t,e)},s=e=>{t&&oe(t,e)};o&&te(o,n);let i,c=l;return{show:e,hide:n,click:r,ignore:s}}{const t=()=>y(e);return{show:t,hide:t,click:t,ignore:t}}})(),u=(e={id:[]})=>{const t=e.id[0],n=k(t)||y(t),r=k(e.id[1]);n.style.touchAction="none";const s=Q(n,(()=>({x:0-n.offsetWidth/2,y:0-n.offsetHeight/2}))),i={x:s.x,y:s.y},u=e.stay,p=e=>{n.style.transform=`translate(${e.x}px,${e.y}px)`},f=()=>{_&&(w(b),w(v),se.cancel(f),h.ignore(f),h.hide(),((e,t=300,o="_smooth")=>{const n=e.style;n.height=`${e.offsetHeight}px`,n.marginBottom=`-${F(e).marginBottom}`,D(e,o),N((()=>{n.height=".1px",N((()=>{n.height=c,n.marginBottom=c,T(K(e,o))}),t)}))})(D(n,U)),v=N((()=>{_=l,d(e.onClose)===g&&e.onClose(n)}),300))},m=x((()=>{Q(n,(()=>{n.style.transform=c,s.x=i.x=0-n.offsetWidth/2,s.y=i.y=0-n.offsetHeight/2}),_)}));let v,b,_=l;return Z(o,"resize",m),r&&te(r,f),e.interact&&e.interact(n,s,p),{open:(t={})=>{_||(w(b),w(v),t.esc&&se.push(f),!e.interact||t.stay||u||(s.x=i.x,s.y=i.y,p(s)),r&&(t.close===l||e.close===l?T(r):(r.title="Close",t.esc&&(r.title="Close (esc)"),J(r))),t.overlay&&(h.show({close:l,blur:t.blur}),t.esc&&h.click(f)),v=N((()=>{const o="__zoomin-c",r="_lift-1";J(j(n,"_fadeout|"+r,o)),N(j,300,n,o,r),_=a;const s=t.timeout||e.timeout;s&&(b=N(f,s))}),t.overlay?300:0))},close:f,destroy:e=>{r&&oe(r,f),ee(o,"resize",m),f(),e&&d(e)===g&&N((()=>{e(n),H(n)}),300)}}},p=(()=>{const e=k("_app");if(e)return{show:()=>J(e)}})();(e=>{for(const t in e){const o=k(e[t]);o&&H(o)}})(["_script","_noscript","_detect"]),re((e=>{"Escape"===e.code?se.esc():e.altKey&&"KeyT"===e.code?ue.change():"Tab"===e.code&&he.clear()})),p&&p.show(),e.hide(),S({app:p,scrub:e,error:t,details:(e,t)=>{const o=I("summary",e)[0],n=I("section",e)[0];if(!(e&&o&&n))throw"Malformed details: "+t;let r,s;const i=e.style,d=o.style,h=()=>{e.open?i.height=s+"px":i.height=r+"px"};te(o,(()=>{if(isNaN(r)||isNaN(s)){i.opacity="0",i.height=c;const t=e.open;e.open=l,r=e.offsetHeight,e.open=a,s=e.offsetHeight,e.open=t,h(),i.opacity=c}N((()=>{i.overflow="hidden",d.outline="0",h(),N((()=>{i.overflow=c,d.outline=c}),300)}))}))},bg:i,overlay:h,modal:u,toast:(e={id:[]})=>{const t="_toaster",o=k(t)||y(t),n=e.id[0],s=e.id[1],i=k(n)||y(n);k(s)||y(s),T(i);let c=0;const l=[];return{pop:(t={})=>{const d=n+"-"+c++,h=d+"-close",g=i.cloneNode(a);g.id=d,o.appendChild(g),((k(d)||y(d)).querySelector("#"+s)||y(s)).id=h;let p=u({id:[d,h],timeout:e.timeout,onClose:()=>{p&&(p.destroy(),p=r)}})||m("Cannot create toast[modal]: "+d);return p&&(l.push(p),p.open(t)),p},close:e=>{const t=l.indexOf(e);if(t>=0){const e=l[t];e&&e.close()}}}},drawer:(e={id:[]})=>{const t=e.id[0],o=k(t)||y(t),r=k(e.id[1])||y(e.id[1]),s=k(e.id[2]),i="_slideout",c="_slidein",d="_lift-1",h=()=>{u||(u=a,se.push(g),J(o),N((()=>{P(o),j(r,i,c),he(r),N(D,300,r,d)}),100))},g=()=>{u&&(u=l,j(r,"_slidein|"+d,i),N(T,300,X(o)),se.cancel(g),he(n.body))};let u=l;return D(r,i),T(X(o)),te(o,(e=>{e&&e.target===o&&g()})),s&&te(s,g),{open:h,close:g,toggle:()=>{u?g():h()}}},bog:(e="_bog",t=2)=>{const o=k(e)||y(e),n=()=>{o.innerHTML=c},s=(e,s)=>(s&&n(),o.innerHTML+=_(e,r,t)+"\n");return s.clear=n,s}},pe)})),S({version:t,objectOf:h,isArray:f,cantFind:y,invalidArgs:v,JsonParse:b,JsonStringify:_,random:(e,t)=>e&&t?C()*(t-e)+e:e?C()*e:C(),trimNumber:(e,t=Number.MIN_SAFE_INTEGER,o=Number.MAX_SAFE_INTEGER)=>e>o?o:e<t?t:e,loop:(e,t=0)=>{if(d(e)!==g)return v("for loop","Function");let o,n=l;const r=()=>{n&&(e(s),o=N(r,t))},s={start:()=>{n=a,r()},stop:()=>{w(o),n=l}};return s},each:S,find:(e,t)=>{let o;for(let n=0;!o&&n<e.length;n++)o=t(e[n],n);return o},list:(e,t)=>{const o=[];return e(o)&&t(),{check:n=>{o[n]=a;const r=e(o);return r&&t(),r}}},eager:(e,t=100)=>{let o,n=l;return(...s)=>(n||(n=a,e.apply(r,s)),w(o),o=N((()=>{n=l}),t))},later:x,nodeId:k,nodeTag:I,getNode:(e,t=i)=>t.querySelector(e||c),show:J,hide:T,appendNode:B,prependNode:A,afterNode:(e,t)=>($(e)||O()).insertBefore(t,e.nextSibling),beforeNode:(e,t)=>($(e)||O()).insertBefore(t,e),removeNode:H,newNode:L,fa:(e=c,t="fas",o=c)=>(o&&(o=" "+o),L("i",{class:`_ico -fa${o}`},L("i",{class:`${t} fa-${e}`}))),nodeStyle:F,MatchClass:R,changeClass:j,addClass:D,removeClass:K,fadeIn:P,fadeOut:X,peek:Q,listenTo:Z,stopListenTo:ee,ready:e=>Z(o,"load",e),onClick:te,unClick:oe,onkeypress:re,keypress:ne,esc:se,img:(e,t,o)=>(o&&(Z(e,"load",o,{once:a}),Z(e,"error",o,{once:a})),e.src=t,e),local:ce,session:ae,Data:le,back:(e=-1)=>()=>{o.history.go(e)},goto:(e=c)=>()=>{o.location.href=e},exit:(e="/")=>{const t=o.location,r=n.referrer,s="."+btoa(t.pathname),i=r.match(t.origin);let c=ae.getString(s);return c||(c=i&&0==i.index&&r!=t.origin+t.pathname?r:e),ae.setString(s,c),()=>{const o=ae.getString(s)||e;ae.remove(s),t.href=o}},refocus:he,theme:ue,loadNumber:ce.getNumber,saveNumber:e=>t=>ce.setNumber(e,t),loadJson:ce.getJson,saveJson:e=>t=>ce.setJson(e,t),loadString:ce.getString,saveString:e=>t=>ce.setString(e,t)},pe),console.log(`%c Base v${t} `,"background:#225599;color:#eee;padding:5px;margin:10px"),e})(window.base)})();