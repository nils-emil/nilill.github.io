(function(t){function e(e){for(var r,o,i=e[0],c=e[1],u=e[2],l=0,d=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},s=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var p=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},3145:function(t,e,n){"use strict";var r=n("3dd8"),a=n.n(r);a.a},"3dd8":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("game")],1)},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{staticClass:"btn btn-secondary btn-init",on:{click:function(e){return t.initNewGame()}}},[t._v("\n        Start a new game\n    ")]),n("div",{staticClass:"container container-fluid container-quest"},[n("quests",{attrs:{messages:t.messages}})],1),n("game-footer",{attrs:{game:t.game,shop:t.shop,reputations:t.reputations}})],1)},i=[],c=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),u=n("2f62"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[t._l(t.messages,(function(e){return[e.adId.endsWith("=")?t._e():n("div",{key:e.adId,staticClass:"col-md-6 col-lg-4 col-sm-12 mb-3"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[n("h6",{staticClass:"card-subtitle mb-2"},[n("b",[t._v(t._s(e.probability))])]),n("h5",{staticClass:"card-title pt-2"},[t._v("Reward of "+t._s(e.reward)+" gold that expires in:\n                            "+t._s(e.expiresIn)+" "+t._s(1===e.expiresIn?"turn":"turns"))]),n("p",{staticClass:"card-text tex"},[t._v(t._s(e.message))]),n("button",{staticClass:"btn btn-dark mt-3",attrs:{type:"button"},on:{click:function(n){return t.solveMessage(e.adId)}}},[t._v("Solve\n                        ")])])])])]}))],2)},l=[],d={props:["messages"],name:"Quests",methods:{solveMessage:function(t){this.$store.dispatch("solveMessage",t)}}},m=d,f=n("2877"),g=Object(f["a"])(m,p,l,!1,null,null,null),h=g.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"game-footer"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-3 col-sm-12"},[n("div",{staticClass:"row"},[n("div",{staticClass:"footer--block col-6 col-sm-6"},[n("h5",{staticClass:"card-title"},[t._v(" Gold: "),n("b",[t._v(t._s(t.game.gold))])]),n("h5",{staticClass:"card-title"},[t._v("Lives: "),n("b",[t._v(t._s(t.game.lives))])]),n("h5",{staticClass:"card-title"},[t._v("Score: "),n("b",[t._v(t._s(t.game.score))])]),n("h5",{staticClass:"card-title"},[t._v("Turn: "),n("b",[t._v(t._s(t.game.turn))])])]),n("div",{staticClass:"footer--block col-6 col-sm-6 d-md-none d-sm-block"},[n("h5",{staticClass:"card-title"},[t._v("People:"),n("b",[t._v(" "+t._s(t.reputations.people))])]),n("h5",{staticClass:"card-title"},[t._v("State: "),n("b",[t._v(t._s(t.reputations.state))])]),n("h5",{staticClass:"card-title"},[t._v("Underworld: "),n("b",[t._v(t._s(t.reputations.underworld)+" ")])]),n("h5",{staticClass:"card-title"},[t._v("High score: "),n("b",[t._v(t._s(t.game.highScore))])])])])]),n("div",{staticClass:"col-md-6 col-sm-12"},[t.shop&&t.shop.length>0?n("carousel",t._l(t.shop,(function(e){return n("div",[n("div",{staticClass:"footer--block"},[n("button",{staticClass:"btn btn-dark",attrs:{type:"button"},on:{click:function(n){return t.buyItem(e.id)}}},[t._v("\n                            Buy "),n("b",[t._v(t._s(e.name))]),t._v(" for "+t._s(e.cost)+" gold\n                        ")])])])})),0):t._e()],1),n("div",{staticClass:"col-md-3 col-sm-6 d-none d-md-block"},[n("div",{staticClass:"footer--block"},[n("h5",{staticClass:"card-title"},[t._v("People:"),n("b",[t._v(" "+t._s(t.reputations.people))])]),n("h5",{staticClass:"card-title"},[t._v("State: "),n("b",[t._v(t._s(t.reputations.state))])]),n("h5",{staticClass:"card-title"},[t._v("Underworld: "),n("b",[t._v(t._s(t.reputations.underworld)+" ")])]),n("h5",{staticClass:"card-title"},[t._v("High score: "),n("b",[t._v(t._s(t.game.highScore))])])])])])])},b=[],w=n("7ec7"),_=n.n(w),y={components:{carousel:_.a},props:["messages","game","reputations","shop"],name:"GameFooter",methods:{buyItem:function(t){this.$store.dispatch("buyItem",t)}}},O=y,j=Object(f["a"])(O,v,b,!1,null,null,null),S=j.exports;function C(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?C(n,!0).forEach((function(e){Object(c["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var P={name:"HelloWorld",components:{GameFooter:S,Quests:h},computed:E({},Object(u["b"])(["game","messages","shop","reputations"])),created:function(){this.$store.dispatch("initGame")},methods:{solveMessage:function(t){this.$store.dispatch("solveMessage",t)},initNewGame:function(){this.$store.dispatch("initGame")}}},x=P,k=(n("3145"),Object(f["a"])(x,o,i,!1,null,"92091982",null)),R=k.exports,I={name:"app",components:{Game:R}},M=I,G=(n("034f"),Object(f["a"])(M,a,s,!1,null,null,null)),T=G.exports,A=n("c13f"),D=n.n(A),$=(n("033b"),n("ab8b"),n("96cf"),n("3b8d")),N=n("bc3a"),U=n.n(N);function q(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function H(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?q(n,!0).forEach((function(e){Object(c["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):q(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Q={game:[]},F={INIT_GAME:function(t,e){t.game=e},UPDATE_GAME:function(t,e){t.game=H({},t.game,{},e)}},J={initGame:function(){var t=Object($["a"])(regeneratorRuntime.mark((function t(e){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,r=e.dispatch,a=e.getters,t.next=3,U.a.post("https://www.dragonsofmugloar.com/api/v2/game/start").then((function(t){n("INIT_GAME",t.data),r("initMessages",a.game.gameId),r("initReputation",a.game.gameId),r("initShop",a.game.gameId)}));case 3:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),updateGame:function(){var t=Object($["a"])(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=e.commit,r("UPDATE_GAME",n);case 2:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),endGame:function(){var t=Object($["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.commit,n("END_GAME");case 2:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},W={game:function(t){return t.game}},B={state:Q,mutations:F,actions:J,getters:W},L={messages:[]},z={SET_MESSAGES:function(t,e){t.messages=e}},K={messages:function(t){return t.messages}},V={initMessages:function(){var t=Object($["a"])(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,U.a.get("https://www.dragonsofmugloar.com/api/v2/".concat(n,"/messages")).then((function(t){return t.data})).then((function(t){return r("SET_MESSAGES",t)}));case 3:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),solveMessage:function(){var t=Object($["a"])(regeneratorRuntime.mark((function t(e,n){var r,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.dispatch,a=e.getters,s=a.game.gameId,t.next=4,U.a.post("https://www.dragonsofmugloar.com/api/v2/".concat(s,"/solve/").concat(n)).then((function(t){r("initShop",s),r("initMessages",s),r("initReputation",s),r("updateGame",t.data),t.data.success?r("handleSuccessfulAction","Quest successful"):r("handleError",{error:"Quest failed!"})}),(function(t){return r("handleError",t.response.data)}));case 4:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}()},X={state:L,mutations:z,actions:V,getters:K},Y={reputation:[]},Z={SET_REPUTATION:function(t,e){t.reputation=e}},tt={reputations:function(t){return t.reputation}},et={initReputation:function(){var t=Object($["a"])(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,U.a.post("https://www.dragonsofmugloar.com/api/v2/".concat(n,"/investigate/reputation")).then((function(t){return r("SET_REPUTATION",t.data)}));case 3:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}()},nt={state:Y,mutations:Z,actions:et,getters:tt},rt=n("6ee6"),at=n("aced"),st={handleError:function(){var t=Object($["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:Object(rt["a"])(e),n.error?at["a"].open({duration:2e3,queue:!1,message:n.error,position:"is-bottom",type:"is-danger"}):at["a"].open({duration:2e3,queue:!1,message:n.status,position:"is-bottom",type:"is-danger"});case 2:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),handleSuccessfulAction:function(){var t=Object($["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:Object(rt["a"])(e),at["a"].open({duration:2e3,queue:!1,message:n,type:"is-success"});case 2:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}()},ot={actions:st},it={shopItems:[]},ct={SET_SHOP:function(t,e){t.shopItems=e}},ut={shop:function(t){return t.shopItems}},pt={initShop:function(){var t=Object($["a"])(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=e.commit,U.a.get("https://www.dragonsofmugloar.com/api/v2/".concat(n,"/shop")).then((function(t){return r("SET_SHOP",t.data)}));case 2:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),buyItem:function(){var t=Object($["a"])(regeneratorRuntime.mark((function t(e,n){var r,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.dispatch,a=e.getters,s=a.game.gameId,t.next=4,U.a.post("https://www.dragonsofmugloar.com/api/v2/".concat(s,"/shop/buy/").concat(n)).then((function(t){r("initShop",s),r("initMessages",s),r("initReputation",s),r("updateGame",t.data),t.data.shoppingSuccess?r("handleSuccessfulAction","Purchase successful"):r("handleError",{error:"Failed to buy item!"})}),(function(t){return r("handleError",t.response.data)}));case 4:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}()},lt={state:it,mutations:ct,actions:pt,getters:ut};r["a"].use(u["a"]);var dt=new u["a"].Store({modules:{game:B,messages:X,shop:lt,errors:ot,reputations:nt}}),mt=n("289d");n("5abe");r["a"].use(mt["a"]),r["a"].use(D.a),r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(T)},store:dt}).$mount("#app")},"64a9":function(t,e,n){}});
//# sourceMappingURL=app.9dfc2216.js.map