"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[374,514,947],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return p}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=c(a),p=r,m=u["".concat(s,".").concat(p)]||u[p]||d[p]||o;return a?n.createElement(m,i(i({ref:t},h),{},{components:a})):n.createElement(m,i({ref:t},h))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4167:function(e,t,a){a.r(t),a.d(t,{HomepageFeatures:function(){return w},default:function(){return E}});var n=a(87462),r=a(63366),o=a(67294),i=a(3905),l=["components"],s={toc:[{value:"Thankyous!",id:"thankyous",children:[],level:3},{value:"What is it?",id:"what-is-it",children:[],level:2},{value:"What does it do?",id:"what-does-it-do",children:[],level:2},{value:"What are the benefits",id:"what-are-the-benefits",children:[],level:2},{value:"What are the drawbacks?",id:"what-are-the-drawbacks",children:[],level:2},{value:"Whats <em>todo</em>?",id:"whats-todo",children:[],level:2},{value:"How does it do it?",id:"how-does-it-do-it",children:[],level:2},{value:"What cheating does this prevent?",id:"what-cheating-does-this-prevent",children:[],level:2},{value:"Is this compatible with FPS unlocking?",id:"is-this-compatible-with-fps-unlocking",children:[],level:2}]};function c(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"thankyous"},"Thankyous!"),(0,i.kt)("p",null,"Special thanks to ",(0,i.kt)("a",{parentName:"p",href:"https://easy.gg/"},"https://easy.gg/")," who are currently sponsoring Chickynoid's development! "),(0,i.kt)("h2",{id:""}),(0,i.kt)("h2",{id:"what-is-it"},"What is it?"),(0,i.kt)("p",null,"Chickynoid is intended to be a hard replacement for roblox \"humanoid\" based characters.\nIt consists of the chickynoid character controller simulation, a character 'renderer', and a replication framework on the client and server for managing player connections and network replication. "),(0,i.kt)("p",null,"Because of how invasive it is and how it works, it's never going to be a drag-and-drop replacement for characters in your existing game. If you're not comfortable doing some serious engineering, this project is probably not for you."),(0,i.kt)("h2",{id:"what-does-it-do"},"What does it do?"),(0,i.kt)("p",null,'Chickynoid heavily borrows from the same principles that games like quake, cod, overwatch, and other first person shooters use to prevent fly hacking, teleporting, and other "typical" character hacks that roblox is typically vulnerable to.'),(0,i.kt)("p",null,"It implements a full character controller, character physics, replication, and world collision using it's own math and systems (Spherecast when pls roblox?), and trusts nothing from the client except input directions and buttons (and to a limited degree dt)."),(0,i.kt)("p",null,'It implements "rollback" style networking on the client, so if the server disagrees about the results of your input, the client corrects to where it should be based on the remaining unconfirmed input.'),(0,i.kt)("h2",{id:"what-are-the-benefits"},"What are the benefits"),(0,i.kt)("p",null,"Players can't move cheat with this. At all*\nThe version of the chickynoid on the server is ground-truth, so its perfect for doing server-side checks for touching triggers and other gameplay uses that humanoid isn't good at.\nThe chickynoid player controller code is fairly straightforward, and is more akin to a typical first person shooter player controller so slides along walls and up stairs in a generally pleasing way."),(0,i.kt)("p",null,'Turn speed, braking, max speed, "step up size" and acceleration are much easier to tune than in default roblox.'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"That's the hope anyway. We'll see what happens...")),(0,i.kt)("h2",{id:"what-are-the-drawbacks"},"What are the drawbacks?"),(0,i.kt)("p",null,"The collision module is limited to parts right now and totally custom. It's designed for making rapid short-distance traces for player movement in a world made out of parts, and not much else."),(0,i.kt)("p",null,"This doesn't replace even a significant subset of what humanoids currently do. It's a platforming character and not much else."),(0,i.kt)("p",null,"Your character is a box, not a nice physically accurate mess like roblox uses."),(0,i.kt)("h2",{id:"whats-todo"},"Whats ",(0,i.kt)("em",{parentName:"h2"},"todo"),"?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("del",{parentName:"li"},'Buffer underrun detection "Antiwarp" (so technically freezing your character is still possible right now)')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("del",{parentName:"li"},"Delta time validation (so technically speed cheating is still possible right now)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("del",{parentName:"li"},"More tweaks to character rendering (hip height)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("del",{parentName:"li"},"Handling player death, resetting, teleporting."))),(0,i.kt)("h2",{id:"how-does-it-do-it"},"How does it do it?"),(0,i.kt)("p",null,"Rollback networking is just a new name for a really old technique I think was invented first by John Carmack in the quake series?"),(0,i.kt)("p",null,"The idea is that the real ground-truth version of your player only exists on the server, and the client sends inputs to the server to move it around."),(0,i.kt)("p",null,"The rest of it is just smoke and mirrors to make this still feel good and not laggy for the player, which is sometimes called player prediction."),(0,i.kt)("p",null,'A main concept is the "command". Every frame the client generates a command, applies it to their local copy of the character (causing the player to simulate for 1 frame), and sends the same input to the server, which then also simulates for 1 frame.'),(0,i.kt)("p",null,"The server, because it owns the authoritative version of the characters and has done all of the same moves, tells the player what really happened. "),(0,i.kt)("p",null,"If the client disagrees, this is called a mispredict, and forces a resimulation (or rollback!). What this means is the client resets to the last known good state from the server, and then ",(0,i.kt)("strong",{parentName:"p"},"instantly"),' re-applies all of the remaining unconfirmed commands to put the player back exactly where they were. If it all goes well, visually, the player should see little to no difference, and the game continues. If it doesn\'t go well, the player will feel a "tug" to correct them.'),(0,i.kt)("h2",{id:"what-cheating-does-this-prevent"},"What cheating does this prevent?"),(0,i.kt)("p",null,"We completely eliminate clipping/geometry hacks, teleport hacks, and fly hacks."),(0,i.kt)("p",null,"This ",(0,i.kt)("em",{parentName:"p"},"almost entirely")," eliminates lag hacks (freeze your window) and speed hacks."),(0,i.kt)("p",null,"We make a good effort to detect speed and lag hacks by watching the stream of incoming commands and looking for problems. A speed hack tries to tell the server to simulate more time than has actually passed, which we can detect and prevent. "),(0,i.kt)("p",null,"A lag hack is generally you are not sending enough commands, or asking for enough simulation time to pass. We can detect that too. Unfortunately these have to tested with some tolerances because peoples network connections are wobbly. The worst that happens is you'll mispredect and feel a lag spike."),(0,i.kt)("p",null,'If a player "underruns" or "lags", we also generate fake commands to catch them back up. This stops their avatar from freezing in the world.'),(0,i.kt)("p",null,"You can see what is going on inside ServerChickynoid.lua"),(0,i.kt)("h2",{id:"is-this-compatible-with-fps-unlocking"},"Is this compatible with FPS unlocking?"),(0,i.kt)("p",null,"Yes, although every extra frame you generate makes extra work for the server. It would be reasonable for the server to throttle you if you go over say, 200fps. Right now you'll start deliberately lagging if you go to 500fps, but that's just some test code right now."),(0,i.kt)("p",null,"Also, the physics simulation produces ever so slightly different results at different framerates, so there is some debates about the correct way to go about this."))}c.isMDXComponent=!0;var h=a(39960),d=a(52263),u=a(54814),p=a(86010),m="heroBanner_PAbV",f="buttons_2tNn",g="features_3cQC",y="featureSvg_1mXg",k=[{title:"Goodbye Move Cheats",description:"Players can't move cheat with this. At all* The version of the Chickynoid on the server is ground-truth, so its perfect for doing server-side checks for touching triggers and other gameplay uses that Humanoid's aren't so good at."},{title:"Customizable",description:"Turn speed, braking, max speed, 'step up size', and acceleration are much easier to tune than with Humanoids. You have direct control over all character physics."},{title:"Straightforward",description:"Beyond the added complexity of server authority, the Chickynoid player controller code is fairly straightforward, and is more akin to a typical first person shooter player controller and so slides along walls and up/down stairs in a generally pleasing way."}];function v(e){var t=e.image,a=e.title,n=e.description;return o.createElement("div",{className:(0,p.Z)("col col--4")},t&&o.createElement("div",{className:"text--center"},o.createElement("img",{className:y,alt:a,src:t})),o.createElement("div",{className:"text--center padding-horiz--md"},o.createElement("h3",null,a),o.createElement("p",null,n)))}function w(){return k?o.createElement("section",{className:g},o.createElement("div",{className:"container"},o.createElement("div",{className:"row"},k.map((function(e,t){return o.createElement(v,(0,n.Z)({key:t},e))}))))):null}function b(){var e=(0,d.Z)().siteConfig;return o.createElement("header",{className:(0,p.Z)("hero",m)},o.createElement("div",{className:"container"},o.createElement("h1",{className:"hero__title"},e.title),o.createElement("p",{className:"hero__subtitle"},e.tagline),o.createElement("div",{className:f},o.createElement(h.Z,{className:"button button--secondary button--lg",to:"/docs/intro"},"Get Started \u2192"))))}function E(){var e=(0,d.Z)(),t=e.siteConfig,a=e.tagline;return o.createElement(u.Z,{title:t.title,description:a},o.createElement(b,null),o.createElement("main",null,o.createElement(w,null),o.createElement("div",{className:"container"},o.createElement(c,null))))}},6979:function(e,t,a){var n=a(76775),r=a(52263),o=a(28084),i=a(94184),l=a.n(i),s=a(67294);t.Z=function(e){var t=(0,s.useRef)(!1),i=(0,s.useRef)(null),c=(0,n.k6)(),h=(0,r.Z)().siteConfig,d=(void 0===h?{}:h).baseUrl;(0,s.useEffect)((function(){var e=function(e){"s"!==e.key&&"/"!==e.key||i.current&&e.srcElement===document.body&&(e.preventDefault(),i.current.focus())};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[]);var u=(0,o.usePluginData)("docusaurus-lunr-search"),p=function(){t.current||(Promise.all([fetch(""+d+u.fileNames.searchDoc).then((function(e){return e.json()})),fetch(""+d+u.fileNames.lunrIndex).then((function(e){return e.json()})),Promise.all([a.e(878),a.e(245)]).then(a.bind(a,24130)),Promise.all([a.e(532),a.e(343)]).then(a.bind(a,53343))]).then((function(e){var t=e[0],a=e[1],n=e[2].default;0!==t.length&&function(e,t,a){new a({searchDocs:e,searchIndex:t,inputSelector:"#search_input_react",handleSelected:function(e,t,a){var n=d+a.url;document.createElement("a").href=n,c.push(n)}})}(t,a,n)})),t.current=!0)},m=(0,s.useCallback)((function(t){i.current.contains(t.target)||i.current.focus(),e.handleSearchBarToggle&&e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return s.createElement("div",{className:"navbar__search",key:"search-box"},s.createElement("span",{"aria-label":"expand searchbar",role:"button",className:l()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:m,onKeyDown:m,tabIndex:0}),s.createElement("input",{id:"search_input_react",type:"search",placeholder:"Press S to Search...","aria-label":"Search",className:l()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:p,onMouseOver:p,onFocus:m,onBlur:m,ref:i}))}}}]);