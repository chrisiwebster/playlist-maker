(this["webpackJsonpplaylist-maker"]=this["webpackJsonpplaylist-maker"]||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),c=a(18),s=a.n(c),r=a(20),l=a(7),o=a(2),u=a(8),d=(a(25),a(26),a(0)),j=function(e){var t=e.type,a=e.name,n=e.onClick,i=e.className,c=e.id;return Object(d.jsx)("button",{id:c,type:t||"button",className:i,onClick:n,children:a})},h=function(e){var t=e.handleNavClick,a=e.status,n=e.expiresIn,i=e.accessToken,c=e.handleSignIn;return Object(d.jsxs)("div",{id:"nav",children:[""===i&&Object(d.jsx)(u.b,{to:"/",children:Object(d.jsx)(j,{type:"button",name:"Sign in",className:"btn-primary",onClick:function(){return c()}})}),void 0!==n&&Object(d.jsxs)("nav",{children:[Object(d.jsx)("i",{tabIndex:"0",onKeyDown:function(){return t()},onClick:function(){return t()},className:!0===a?"fas fa-times":"fas fa-hamburger"}),Object(d.jsxs)("ul",{className:a?"navigation active":"navigation",role:"navigation",children:[Object(d.jsx)("li",{onClick:function(){return t()},children:Object(d.jsx)(u.c,{to:"/",className:"nav-item",children:"Home"})}),Object(d.jsx)("li",{onClick:function(){return t()},children:Object(d.jsx)(u.c,{to:"/about",className:"nav-item",children:"About"})}),Object(d.jsx)("li",{onClick:function(){return t()},children:Object(d.jsx)(u.c,{to:"/search",className:"nav-item",children:"Search songs"})}),Object(d.jsx)("li",{onClick:function(){return t()},children:Object(d.jsx)(u.c,{to:"/view-playlists",className:"nav-item",children:"View playlists"})})]})]})]})},p=a.p+"static/media/colour_radio.4ca86dda.png",m=a.p+"static/media/singing_microphone_boy.24711902.png",b=(a(33),function(e){var t=e.title;return Object(d.jsxs)("header",{children:[Object(d.jsx)("h1",{children:t}),Object(d.jsx)("img",{src:m,alt:"Boy singing into microphone",title:"Decorative image"})]})}),f=function(e){var t=e.accessToken,a=e.expiresIn;return Object(d.jsxs)("div",{id:"home",children:[Object(d.jsx)(b,{title:"Playlist Maker"}),""===t&&Object(d.jsxs)("div",{className:"warning-box",children:[Object(d.jsx)("div",{className:"warning-icon",children:Object(d.jsx)("i",{className:"fas fa-exclamation-triangle"})}),Object(d.jsxs)("div",{className:"warning-text",children:[Object(d.jsx)("p",{children:"Sign into Spotify using the button above."}),Object(d.jsx)("p",{children:"Then you can navigate to the rest of the site to create and view playlists."})]})]}),void 0!==a&&Object(d.jsxs)("section",{children:[Object(d.jsxs)("div",{className:"content-wrapper",children:[Object(d.jsx)("h2",{children:"Use the Spotify API"}),Object(d.jsx)("p",{children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]}),Object(d.jsx)("img",{id:"colour-radio",src:p,alt:"Decorative",title:"Colourful radio"})]})]})},O=a.p+"static/media/tape_headphones.a1503ef3.png",x=function(){return Object(d.jsxs)("div",{id:"about",children:[Object(d.jsx)(b,{title:"About"}),Object(d.jsxs)("section",{children:[Object(d.jsxs)("div",{className:"content-wrapper",children:[Object(d.jsx)("p",{children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),Object(d.jsx)("p",{children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]}),Object(d.jsx)("img",{id:"tape",src:O,alt:"Tape and headphones",title:"Decorative image"})]})]})},v=(a(34),function(e){var t=e.playlists,a=e.viewPlaylists,i=e.errorMessage;return Object(n.useEffect)((function(){document.title="View playlists | Chrisi Webster",a()}),[]),Object(d.jsxs)("div",{id:"playlist",children:[Object(d.jsx)(b,{title:"View your playlists"}),""!==i&&Object(d.jsxs)("div",{className:"warning-box",children:[Object(d.jsx)("div",{className:"warning-icon",children:Object(d.jsx)("i",{className:"fas fa-exclamation-triangle"})}),Object(d.jsx)("div",{className:"warning-text",children:Object(d.jsx)("p",{children:i})})]}),Object(d.jsx)("section",{children:t.map((function(e){return Object(d.jsx)("div",{className:"playlist-wrapper",children:Object(d.jsx)("h3",{children:e.name})},e.id)}))})]})}),y=(a(35),a(36),function(e){var t=e.track,a=e.remove,n=e.addTrack,i=e.removeTrack;return Object(d.jsxs)("div",{className:"tracks",children:[Object(d.jsxs)("p",{children:[t.name," | ",t.artist,Object(d.jsx)("br",{}),t.album]}),a?Object(d.jsx)(j,{type:"submit",name:"-",className:"btn-secondary",onClick:function(){return i(t)}}):Object(d.jsx)(j,{type:"submit",name:"+",className:"btn-secondary",onClick:function(){return n(t)}})]})}),k=function(e){var t=e.tracks,a=e.addTrack,n=e.removeTrack,i=e.remove;return Object(d.jsx)("div",{className:"track-list",children:t.map((function(e){return Object(d.jsx)(y,{track:e,addTrack:a,removeTrack:n,remove:i},e.id+"1")}))})},g=function(e){var t=e.searchTracks,a=e.addTrack;return Object(d.jsx)("div",{className:"track-list",children:Object(d.jsx)(k,{tracks:t,addTrack:a,remove:!1})})},N=(a(37),function(e){var t=e.type,a=e.label,n=e.placeholder,i=e.onChange,c=e.onBlur,s=e.id,r=e.value;return Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:s,children:a}),Object(d.jsx)("input",{id:s,type:t,value:r,placeholder:n,onChange:i,onBlur:c})]})}),S=(a(38),function(e){var t=e.handleAPISearch,a=e.searchInput,n=e.handleSearchInput,i=e.handleClearSearchInput;return Object(d.jsxs)("form",{id:"search",onSubmit:function(e){return t(e)},children:[Object(d.jsx)(N,{type:"text",value:a,id:"search",placeholder:"Search for songs",onChange:function(e){return n(e)},onBlur:function(){return i()}}),Object(d.jsx)(j,{type:"submit",name:"Search",className:"btn-primary"})]})}),T=function(e){var t=e.updatePlaylistName,a=e.playlistTracks,n=e.savePlaylist,i=e.removeTrack,c=e.playlistName,s=e.setPlaylistTracks,r=e.setPlaylistName,l=e.handleClearNameInput,o=e.playlistInput;return Object(d.jsxs)("div",{id:"playlist",children:[Object(d.jsxs)("form",{id:"playlist-form",onSubmit:function(e){return function(e){e.preventDefault();var t=a.map((function(e){return e.uri}));n(c,t),r("New Playlist"),s([]),l()}(e)},children:[Object(d.jsx)(N,{type:"text",id:"playlist",value:o,onChange:function(e){return t(e)}}),Object(d.jsx)(j,{type:"submit",name:"Save",id:"save-spotify",className:"btn-primary"})]}),Object(d.jsx)("div",{className:"track-list",children:Object(d.jsx)(k,{tracks:a,removeTrack:i,remove:!0})})]})},w=function(e){var t=e.errorMessage,a=e.handleAPISearch,i=e.searchInput,c=e.addTrack,s=e.handleSearchInput,r=e.handleClearSearchInput,l=e.searchTracks,o=e.updatePlaylistName,u=e.removeTrack,j=e.savePlaylist,h=e.setPlaylistName,p=e.playlistTracks,m=e.playlistName,f=e.playlistInput,O=e.setPlaylistTracks,x=e.handleClearNameInput;return Object(n.useEffect)((function(){document.title="Search | Chrisi Webster"})),Object(d.jsxs)("div",{id:"search-results",children:[Object(d.jsx)(b,{title:"Search for songs"}),""!==t&&Object(d.jsxs)("div",{className:"warning-box",children:[Object(d.jsx)("div",{className:"warning-icon",children:Object(d.jsx)("i",{className:"fas fa-exclamation-triangle"})}),Object(d.jsx)("div",{className:"warning-text",children:Object(d.jsx)("p",{children:t})})]}),Object(d.jsx)(S,{handleAPISearch:a,handleSearchInput:s,handleClearSearchInput:r,searchInput:i}),Object(d.jsxs)("div",{id:"tracks-wrapper",children:[Object(d.jsxs)("h2",{children:["Search results (",l.length,")"]}),Object(d.jsx)(g,{searchTracks:l,addTrack:c}),Object(d.jsx)("h2",{children:"Add to playlist"}),Object(d.jsx)(T,{updatePlaylistName:o,removeTrack:u,savePlaylist:j,setPlaylistName:h,playlistTracks:p,searchTracks:l,playlistName:m,playlistInput:f,setPlaylistTracks:O,handleClearNameInput:x})]})]})},I=(a(39),function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(),s=Object(l.a)(c,2),u=s[0],j=s[1],p=Object(n.useState)(""),m=Object(l.a)(p,2),b=m[0],O=m[1],y=Object(n.useState)(),k=Object(l.a)(y,2),g=k[0],N=k[1],S=Object(n.useState)([]),T=Object(l.a)(S,2),I=T[0],P=T[1],C=Object(n.useState)(""),q=Object(l.a)(C,2),A=q[0],D=q[1],_=Object(n.useState)([]),B=Object(l.a)(_,2),E=B[0],M=B[1],z=Object(n.useState)(""),J=Object(l.a)(z,2),U=J[0],V=J[1],W=Object(n.useState)("New Playlist"),Y=Object(l.a)(W,2),F=Y[0],G=Y[1],H=Object(n.useState)([]),K=Object(l.a)(H,2),L=K[0],Q=K[1],R=Object(n.useState)(""),X=Object(l.a)(R,2),Z=X[0],$=X[1],ee=Object(n.useCallback)((function(){var e=window.location.href.match(/access_token=([^&]*)/),t=window.location.href.match(/expires_in=([^&]*)/);e&&t&&(O(e[1]),j(Number(t[1])),setInterval((function(){j((function(e){return e-1})),0===u&&j("")}),1e3))}),[u]);return Object(n.useEffect)((function(){ee()})),Object(d.jsxs)("div",{id:"app-wrapper",children:[Object(d.jsx)(h,{handleNavClick:function(){i(!0!==a)},status:a,expiresIn:u,accessToken:b,handleSignIn:function(){window.location="https://accounts.spotify.com/authorize?client_id=".concat("54d03dd971f04b3e971ec3ffa241645c","&response_type=token&scope=").concat("playlist-read-private playlist-read-collaborative playlist-modify-public","&redirect_uri=").concat("https://chrisiwebster.github.io/playlist-maker")}}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/",children:Object(d.jsx)(f,{checkAccessToken:ee,accessToken:b,expiresIn:u})}),Object(d.jsx)(o.a,{exact:!0,path:"/about",children:Object(d.jsx)(x,{})}),Object(d.jsx)(o.a,{path:"/search",children:Object(d.jsx)(w,{handleAPISearch:function(e){e.preventDefault(),""!==b?fetch("https://api.spotify.com/v1/search?type=track&q=".concat(g,"&limit=50"),{headers:{Authorization:"Bearer ".concat(b)}}).then((function(e){return e.json()})).then((function(e){return e.tracks?e.tracks.items.map((function(e){return{id:e.id,name:e.name,artist:e.artists[0].name,album:e.album.name,uri:e.uri}})):[]})).then((function(e){P(e)})):$("You need to sign in")},searchInput:A,handleSearchInput:function(e){D(e.target.value),N(A)},handleClearSearchInput:function(){D("")},updatePlaylistName:function(e){G(e.target.value),V(F)},removeTrack:function(e){var t=E.filter((function(t){return t.id!==e.id}));M(t)},savePlaylist:function(e,t){if(e&&t.length){var a={Authorization:"Bearer ".concat(b)};return fetch("https://api.spotify.com/v1/me",{headers:a}).then((function(e){return e.json()})).then((function(n){var i=n.id;return fetch("https://api.spotify.com/v1/users/".concat(i,"/playlists"),{headers:a,method:"POST",body:JSON.stringify({name:e})}).then((function(e){return e.json()})).then((function(e){var n=e.id;return fetch("https://api.spotify.com/v1/users/".concat(i,"/playlists/").concat(n,"/tracks"),{headers:a,method:"POST",body:JSON.stringify({uris:t})})}))}))}},setPlaylistName:V,playlistTracks:E,searchTracks:I,playlistName:U,playlistInput:F,addTrack:function(e){E.find((function(e){return e.id===E.id}))||M((function(t){return[].concat(Object(r.a)(t),[e])}))},setPlaylistTracks:M,handleClearNameInput:function(){G("New Playlist")},errorMessage:Z})}),Object(d.jsx)(o.a,{exact:!0,path:"/view-playlists",children:Object(d.jsx)(v,{viewPlaylists:function(){var e={Authorization:"Bearer ".concat(b)};if(void 0!==u)return fetch("https://api.spotify.com/v1/me",{headers:e}).then((function(e){return e.json()})).then((function(t){var a=t.id;return fetch("https://api.spotify.com/v1/users/".concat(a,"/playlists?limit=50"),{headers:e,method:"GET"}).then((function(e){return e.json()})).then((function(e){return e.items?e.items.map((function(e){return{id:e.id,name:e.name,href:e.href,images:e.images}})):[]})).then((function(e){Q(e)}))}));$("You need to sign in")},setPlaylists:Q,playlists:L,errorMessage:Z})})]})]})});s.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(u.a,{basename:"/playlist-maker",children:Object(d.jsx)(I,{})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.72e2f35f.chunk.js.map