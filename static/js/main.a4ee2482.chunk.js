(this["webpackJsonpshuffle-spotify"]=this["webpackJsonpshuffle-spotify"]||[]).push([[0],{10:function(e,t,s){},11:function(e,t,s){"use strict";s.r(t);var r=s(1),o=s.n(r),c=s(3),n=s.n(c),a=s(4),i=s(0);var l=function(e){var t=e.hashItems.access_token,s=Object(r.useState)(null),o=Object(a.a)(s,2),c=o[0],n=o[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)("button",{className:"shuffleButton",onClick:function(){fetch("https://api.spotify.com/v1/me/player/shuffle?state=true",{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:""}).then((function(e){return n(e.status)})).catch(console.error)},children:"Activate Shuffle"}),c&&(204===c?Object(i.jsx)("p",{className:"regText successText",children:"Yay, your playback has been shuffled :)"}):Object(i.jsx)("p",{className:"regText errorText",children:"It looks like there was an error :("}))]})},h=function(){window.location.href="https://accounts.spotify.com/authorize?client_id=ffe90abde69148bbbd6e4a1e372c0097&redirect_uri=https:%2F%2Fdangude.com%2Fshuffle-spotify&scope=user-read-private%20user-read-email%20user-modify-playback-state&response_type=token&state=20210212"};var u=function(){var e=function(){console.log(window.location);var e=new URLSearchParams(window.location.search);if(Object.fromEntries(e.entries()).hasOwnProperty("error"))return-1;if(!window.location.hash)return 0;var t=window.location.hash.substr(1).split("&").reduce((function(e,t){var s=t.split("=");return e[s[0]]=s[1],e}),{});return t.hasOwnProperty("access_token")?t:void 0}();return-1===e?Object(i.jsx)("p",{className:"regText errorText",children:"Sorry, it looks like an error occurred"}):0===e?Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{className:"regText",children:"Please login below to use the app"}),Object(i.jsx)("button",{className:"regText authButton",onClick:h,children:"Login"})]}):Object(i.jsx)(l,{hashItems:e})};s(10);n.a.render(Object(i.jsxs)(o.a.StrictMode,{children:[Object(i.jsx)("h1",{id:"title",children:"Shuffle Spotify"}),Object(i.jsx)("h3",{id:"subtitle",children:"Activates shuffle for what you are listening to on Spotify"}),Object(i.jsx)(u,{})]}),document.getElementById("root")),console.log("Git hash: ".concat("de088c60fbb30cba944025b87f00c06a24c560d7"))}},[[11,1,2]]]);
//# sourceMappingURL=main.a4ee2482.chunk.js.map