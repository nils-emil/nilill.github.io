webpackJsonp([0],{0:function(t,e){},"0HPj":function(t,e,a){"use strict";a("NYxO");var n={data:function(){return{interval:"",points:""}},methods:{checkGameState:function(){var t={Action:"FetchState",Code:this.$store.state.gameCode};this.$http.post("http://localhost:8080",t).then(function(t){"question"===t.body.State&&(window.clearInterval(window.interval),console.log("Moving to /question from /awarding"),this.$router.replace({path:"/question"}))})},setIntervalThatChecksGameState:function(){window.interval=setInterval(this.checkGameState,1e3)}},computed:{registrations:function(){return this.$store.state.registrations},gameCode:function(){return this.$store.state.gameCode}},created:function(){this.setIntervalThatChecksGameState();var t={Action:"GetPoints",Code:this.gameCode};this.$http.post("http://localhost:8080",t).then(function(t){this.points=t.body.Data})}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"summary"}},[t._m(0),t._v(" "),a("hr"),t._v(" "),t._l(this.points,function(e){return a("div",[a("h3",{staticStyle:{"text-align":"center"}},[t._v(t._s(e.name)+" has "+t._s(e.points)+" points")])])}),t._v(" "),a("br"),t._v(" "),a("br")],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"summary"},[e("h3",[this._v("Results")]),this._v(" "),e("h5")])}]};var s=a("VU/8")(n,o,!1,function(t){a("VBxj")},"data-v-092ca4b9",null);e.a=s.exports},"4/Ff":function(t,e,a){"use strict";a("KXvb");var n={methods:{routeTo:function(t){console.log("Moving to "+t+" from /menu"),this.$router.replace({path:t})}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",attrs:{id:"menu"}},[n("img",{staticClass:"center-block",attrs:{src:a("7Otq")}}),t._v(" "),n("button",{staticClass:"btn btn-primary center-block",on:{click:function(e){t.routeTo("/newGameConfirmation")}}},[t._v("Create a new game.")]),t._v(" "),n("br"),t._v(" "),n("button",{staticClass:"btn btn-primary center-block",on:{click:function(e){t.routeTo("/registration")}}},[t._v("Join a game")]),t._v(" "),n("br"),t._v(" "),n("button",{staticClass:"btn btn-primary center-block",on:{click:function(e){t.routeTo("/about")}}},[t._v("About")])])},staticRenderFns:[]},s=a("VU/8")(n,o,!1,null,null,null);e.a=s.exports},"4jku":function(t,e,a){"use strict";var n={name:"about",data:function(){return{intervalForWaitingScreen:""}},methods:{routeTo:function(t){console.log("Moving to "+t+" from waitingForOtherPlayers1"),window.clearInterval(window.intervalForWaitingScreen),this.$router.replace({path:t})},checkGameState:function(){var t={Action:"FetchState",Code:this.$store.state.gameCode};this.$http.post("http://localhost:8080",t).then(function(t){"chooseBestAnswer"===t.body.State&&(window.clearInterval(window.intervalForWaitingScreen),console.log("Moving to /chooseBestAnswer from /waitingForOtherPlayers1"),this.$router.replace({path:"/chooseBestAnswer"}))})},setIntervalThatChecksGameState:function(){window.intervalForWaitingScreen=setInterval(this.checkGameState,1e3)}},created:function(){var t={Action:"GetQuestion",Code:this.$store.state.gameCode};this.$http.post("http://localhost:8080",t).then(function(t){this.question=t.body.Data}),this.setIntervalThatChecksGameState()}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about container"},[a("h1",{staticClass:"page-header text-center"},[t._v("Please wait till all players have answered")]),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("button",{staticClass:"btn btn-secondary center-block",attrs:{type:"button"},on:{click:function(e){t.routeTo("/")}}},[t._v("Back to main menu")])])},staticRenderFns:[]};var s=a("VU/8")(n,o,!1,function(t){a("DZBC")},"data-v-510e35ab",null);e.a=s.exports},"7Otq":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd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"},DZBC:function(t,e){},Gu2g:function(t,e,a){"use strict";var n={name:"about",data:function(){return{intervalForWaitingScreen:""}},methods:{routeTo:function(t){console.log("Moving to "+t+" from /waitingForOtherPlayers2"),this.$router.replace({path:t})},checkGameState:function(){var t={Action:"FetchState",Code:this.$store.state.gameCode};this.$http.post("http://localhost:8080",t).then(function(t){"awarding"===t.body.State&&(window.clearInterval(window.intervalForWaitingScreen),console.log("Moving to /awarding from /waitingForOtherPlayers2"),this.$router.replace({path:"/awarding"}))})},setIntervalThatChecksGameState:function(){window.intervalForWaitingScreen=setInterval(this.checkGameState,1e3)}},created:function(){var t={Action:"GetQuestion",Code:this.$store.state.gameCode};this.$http.post("http://localhost:8080",t).then(function(t){this.question=t.body.Data}),this.setIntervalThatChecksGameState()}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about container"},[a("h1",{staticClass:"page-header text-center"},[t._v("Please wait till all players have answered (15 sec)")]),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("button",{staticClass:"btn btn-secondary center-block",attrs:{type:"button"},on:{click:function(e){t.routeTo("/")}}},[t._v("Back to main menu")])])},staticRenderFns:[]};var s=a("VU/8")(n,o,!1,function(t){a("PlFf")},"data-v-339ae491",null);e.a=s.exports},KXvb:function(t,e,a){"use strict";var n={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"alert alert-warning alert-dismissible",attrs:{role:"alert"}},[this._m(0),this._v("\n  "+this._s(this.message)+"\n")])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])}]};var o=a("VU/8")({name:"alert",props:["message"],data:function(){return{}}},n,!1,function(t){a("njhW")},"data-v-7dfd5049",null);e.a=o.exports},Kj6Y:function(t,e){},M93x:function(t,e,a){"use strict";var n={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"app"}},[this._v("\n  TEST\n")])},staticRenderFns:[]};a("VU/8")({name:"app",components:{}},n,!1,function(t){a("cdcj")},null,null).exports},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){var e=a("7+uW"),n=(a("M93x"),a("/ocq")),o=a("8+8L"),s=a("hyak"),r=a("tYAA"),i=a("4/Ff"),c=a("phR+"),l=a("uNQ7"),u=a("rne1"),h=a("0HPj"),m=a("m5iF"),d=a("4jku"),v=a("Gu2g"),f=a("wtEF");e.a.use(o.a),e.a.use(n.a);var p=new n.a({mode:"history",base:t,routes:[{path:"/",component:i.a},{path:"/about",component:s.a},{path:"/registration",component:c.a},{path:"/menu",component:i.a},{path:"/question",component:r.a},{path:"/about",component:s.a},{path:"/newGameConfirmation",component:l.a},{path:"/lobby",component:u.a},{path:"/awarding",component:h.a},{path:"/chooseBestAnswer",component:m.a},{path:"/waitingScreen1",component:d.a},{path:"/waitingScreen2",component:v.a}]});new e.a({router:p,template:'\n    <div id="app" class="container">\n \n    <router-view></router-view>\n    </div id>  \n  ',store:f.a}).$mount("#app")}.call(e,"/")},PlFf:function(t,e){},UUlR:function(t,e){},VBxj:function(t,e){},Wtm8:function(t,e){},cdcj:function(t,e){},dbnp:function(t,e){},gpwP:function(t,e){},hyak:function(t,e,a){"use strict";var n={name:"about",data:function(){return{}},methods:{routeTo:function(t){console.log("Moving to "+t+" from /about"),this.$router.replace({path:t})}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about container"},[a("h1",{staticClass:"page-header"},[t._v("About")]),t._v(" "),a("p",[t._v("Mäng toimub mitmes seadmes korraga. On 2 vaadet: mängija ja host. Hosti ekraani pealt kuvatakse küsimus,\n    millele kõik mängijad peavad vastama. Seejärel kui kõik on vastanud kuvatakse kõik vastused hosti ekraanil\n    anonüümselt ning seejärel peavad kõik mängijad valima parima vastuse. Mida rohkem saab mängija hääli, seda\n    rohkem saab ta punkte.\n  ")]),t._v(" "),a("p",[t._v("Version 1.Nils.2")]),t._v(" "),a("br"),t._v(" "),a("button",{staticClass:"btn btn-secondary center-block",attrs:{type:"button"},on:{click:function(e){t.routeTo("/")}}},[t._v("Back to main menu")])])},staticRenderFns:[]};var s=a("VU/8")(n,o,!1,function(t){a("tf1x")},"data-v-57585732",null);e.a=s.exports},m5iF:function(t,e,a){"use strict";a("NYxO");var n={data:function(){return{question:"",questions:"",intervalForState:""}},methods:{awardPlayer:function(t){var e={Action:"GivePoints",Code:this.gameCode,Name:this.$store.state.username,Target:t};this.$http.post("http://localhost:8080",e),console.log("Moving to /waitingScreen1 from /choosebestAnswer"),this.$router.replace({path:"/waitingScreen2"})},checkIfGameShouldStart:function(){var t={Action:"FetchState",Code:this.$store.state.gameCode};this.$http.post("http://localhost:8080",t).then(function(t){"awarding"===t.body.State&&(window.clearInterval(window.intervalForState),console.log("Moving to /awarding from /choose best answer"),this.$router.replace({path:"/awarding"}))})},setIntervalThatChecksIfGameShouldStart:function(){window.intervalForState=setInterval(this.checkIfGameShouldStart,1e3)}},computed:{registrations:function(){return this.$store.state.registrations},username:function(){return this.$store.state.username},gameCode:function(){return this.$store.state.gameCode}},created:function(){this.setIntervalThatChecksIfGameShouldStart();var t={Action:"GetAnswers",Code:this.gameCode};this.$http.post("http://localhost:8080",t).then(function(t){this.questions=t.body.Data});var e={Action:"GetQuestion",Code:this.gameCode};this.$http.post("http://localhost:8080",e).then(function(t){this.question=t.body.Data})}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"summary"}},["host"!==t.username?a("div",[t._m(0),t._v(" "),a("hr"),t._v(" "),a("form",{on:{submit:function(e){e.preventDefault(),t.registerUser(e)}}},t._l(this.questions,function(e){return a("div",[a("button",{staticClass:"btn btn-success center-block",attrs:{type:"button"},on:{click:function(a){t.awardPlayer(e.name)}}},[t._v("\n          "+t._s(e.answer)+"\n        ")]),t._v(" "),a("br")])})),t._v(" "),a("button",{staticClass:"btn btn-secondary center-block",attrs:{type:"button"},on:{click:function(e){t.routeTo("/")}}},[t._v("Back to main menu")]),t._v(" "),a("br")]):t._e(),t._v(" "),"host"===t.username?a("div",[a("h3",[t._v("Choose best answer for the question:")]),t._v(" "),a("h3",[t._v(t._s(this.question))])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"summary"},[e("h3",[this._v("Choose best answer")]),this._v(" "),e("h5")])}]};var s=a("VU/8")(n,o,!1,function(t){a("dbnp")},null,null);e.a=s.exports},njhW:function(t,e){},"phR+":function(t,e,a){"use strict";var n={data:function(){return{name:"",gameCode:"",alert:""}},methods:{routeTo:function(t){console.log("Moving to "+t+" from /joinGame"),this.$router.replace({path:t})},registerUser:function(){var t={name:"Max",gameCode:"gameCode"};t.name=this.$data.name,t.gameCode=this.$data.gameCode;var e={Action:"JoinGame",Code:this.$data.gameCode,Name:this.$data.name};this.$data.name&&this.$data.gameCode?this.$http.post("http://localhost:8080",e).then(function(e){e.body.Data==="Did not find such game with game code: "+this.$data.gameCode?this.alert="Game code was not found.":"Such username is already taken."===e.body.Data?this.alert="Such username is already taken.":(this.$store.dispatch("register",t),this.$store.dispatch("setGameCode",this.$data.gameCode),this.$store.dispatch("setMyUsername",this.$data.name),console.log("Moving to /lobby from /joinGame"),this.$router.replace({path:"/lobby"}))}):this.alert="Please fill in all required fields"}},components:{Alert:a("KXvb").a}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"center-block",attrs:{id:"summary"}},[a("h3",[t._v("Join game")]),t._v(" "),t.alert?a("Alert",{attrs:{message:t.alert}}):t._e(),t._v(" "),a("hr"),t._v(" "),a("form",{on:{submit:function(e){e.preventDefault(),t.registerUser(e)}}},[a("div",{staticClass:"well"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Nickname"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.gameCode,expression:"gameCode"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Gamecode"},domProps:{value:t.gameCode},on:{input:function(e){e.target.composing||(t.gameCode=e.target.value)}}})]),t._v(" "),a("button",{staticClass:"btn btm-success center-block",attrs:{type:"submit"}},[t._v("Join")]),t._v(" "),a("br"),t._v(" "),a("button",{staticClass:"btn btn-secondary center-block",attrs:{type:"button"},on:{click:function(e){t.routeTo("/")}}},[t._v("Back to main menu")])])],1)},staticRenderFns:[]};var s=a("VU/8")(n,o,!1,function(t){a("UUlR")},"data-v-7674a635",null);e.a=s.exports},rne1:function(t,e,a){"use strict";a("NYxO");var n={data:function(){return{loadPlayerInterval:"",gameStatusInterval:""}},methods:{routeTo:function(t){var e={Action:"StartGame",Code:this.gameCode};this.$http.post("http://localhost:8080",e),console.log("Moving to "+t+" from /lobby vol 1"),window.clearInterval(window.gameStatusInterval),window.clearInterval(window.loadPlayerInterval),this.$router.replace({path:t})},checkIfGameShouldStart:function(){var t={Action:"FetchState",Code:this.$store.state.gameCode};this.$http.post("http://localhost:8080",t).then(function(t){"question"===t.body.State&&(window.clearInterval(window.gameStatusInterval),window.clearInterval(window.loadPlayerInterval),console.log("Moving to /question from /lobby vol 2"),this.$router.replace({path:"/question"}))})},setIntervalThatChecksIfGameShouldStart:function(){window.gameStatusInterval=setInterval(this.checkIfGameShouldStart,1e3)},loadPlayers:function(){var t={Action:"FetchState",Code:this.gameCode};this.$http.post("http://localhost:8080",t).then(function(t){this.$store.dispatch("updatePlayers",t.body.Data)})},setIntervalThatLoadsPlayersEverySecond:function(){window.loadPlayerInterval=setInterval(this.loadPlayers,1e3)},unregister:function(t){var e={Action:"RemovePlayer",Code:this.gameCode,Name:t.name};this.$http.post("http://localhost:8080",e),this.$store.commit({type:"unregister",name:t.name})},startGame:function(){window.clearInterval(window.gameStatusInterval),window.clearInterval(window.loadPlayerInterval),console.log("Moving to /question from /question vol 3"),this.$router.replace({path:"/question"});var t={Action:"StartGame",Code:this.gameCode};this.$http.post("http://localhost:8080",t)}},computed:{registrations:function(){return this.$store.state.registrations},total:function(){return this.$store.state.total},gameCode:function(){return this.$store.state.gameCode},username:function(){return this.$store.state.username}},created:function(){this.setIntervalThatChecksIfGameShouldStart(),this.setIntervalThatLoadsPlayersEverySecond()}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"summary"}},[a("div",{staticClass:"summary"},[a("h3",[t._v("Enter game "+t._s(this.gameCode))]),t._v(" "),a("h5",[t._v("Total: "+t._s(t.total))])]),t._v(" "),a("hr"),t._v(" "),t._l(t.registrations,function(e){return a("div",{staticClass:"row"},[a("h4",{staticStyle:{"margin-top":"6px"}},[t._v(t._s(e))]),t._v(" "),"host"===t.username?a("button",{staticClass:"btn pull-right btn-danger",on:{click:function(a){t.unregister(e)}}},[t._v("\n      Unregister\n    ")]):t._e(),t._v(" "),a("div",{staticStyle:{"background-color":"black",height:"1px"}})])}),t._v(" "),a("br"),t._v(" "),"host"===t.username?a("button",{staticClass:"btn btn-primary center-block",on:{click:function(e){t.startGame()}}},[t._v("Start game")]):t._e(),t._v(" "),a("br"),t._v(" "),a("button",{staticClass:"btn btn-secondary center-block",attrs:{type:"button"},on:{click:function(e){t.routeTo("/")}}},[t._v("Back to main menu")])],2)},staticRenderFns:[]};var s=a("VU/8")(n,o,!1,function(t){a("Wtm8")},"data-v-56b095de",null);e.a=s.exports},tYAA:function(t,e,a){"use strict";var n={data:function(){return{answer:"",name:"",gameCode:"",alert:"",question:"",interval:""}},methods:{checkGameState:function(){var t={Action:"FetchState",Code:this.$store.state.gameCode};this.$http.post("http://localhost:8080",t).then(function(t){"awarding"===t.body.State&&(window.clearInterval(window.interval),console.log("Moving to /awarding from /question"),this.$router.replace({path:"/awarding"})),"chooseBestAnswer"===t.body.State&&(window.clearInterval(window.interval),console.log("Moving to /chooseBestAnwer from /question"),this.$router.replace({path:"/chooseBestAnswer"}))})},setIntervalThatChecksGameState:function(){window.interval=setInterval(this.checkGameState,1e3)},routeTo:function(t){var e={Action:"SubmitAnswer",Code:this.$store.state.gameCode,Name:this.$store.state.username,Answer:this.answer};this.$http.post("http://localhost:8080",e).then(function(t){}),window.clearInterval(window.interval),console.log("Moving to "+t+" from /question"),this.$router.replace({path:t})}},computed:{username:function(){return this.$store.state.username}},components:{Alert:a("KXvb").a},created:function(){this.setIntervalThatChecksGameState();var t={Action:"GetQuestion",Code:this.$store.state.gameCode};this.$http.post("http://localhost:8080",t).then(function(t){this.question=t.body.Data})}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"registration"}},["host"===t.username?a("h3",[t._v(" "+t._s(t.question))]):t._e(),t._v(" "),t.alert?a("Alert",{attrs:{message:t.alert}}):t._e(),t._v(" "),a("hr"),t._v(" "),a("form",{on:{submit:function(e){e.preventDefault(),t.routeTo("/waitingScreen1")}}},["host"!==t.username?a("div",{staticClass:"well"},[a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.answer,expression:"answer"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Answer"},domProps:{value:t.answer},on:{input:function(e){e.target.composing||(t.answer=e.target.value)}}})]):t._e(),t._v(" "),"host"!==t.username?a("button",{staticClass:"btn btn-primary center-block",attrs:{type:"submit"}},[t._v("Submit")]):t._e()]),t._v(" "),a("br")],1)},staticRenderFns:[]};var s=a("VU/8")(n,o,!1,function(t){a("Kj6Y")},"data-v-21260ad0",null);e.a=s.exports},tf1x:function(t,e){},uNQ7:function(t,e,a){"use strict";var n={props:["gameCode"],name:"newGame",data:function(){return{alert:""}},methods:{routeTo:function(t){console.log("Moving to "+t+" from /newGameConfirmation"),this.$router.replace({path:t})},CreateGame:function(t){this.$store.dispatch("setMyUsername","host");this.$http.post("http://localhost:8080",{Action:"CreateGame"}).then(function(t){this.$store.dispatch("setGameCode",t.body.Code),console.log("Moving to /lobby from /newGameConfirmation"),this.$router.replace({path:"/lobby"})}),t.preventDefault()}},components:{Alert:a("KXvb").a},created:function(){var t={Action:"GetQuestion",Code:this.$store.state.gameCode};this.$http.post("http://localhost:8080",t).then(function(t){this.question=t.body.Data})}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"add container"},[t.alert?a("Alert",{attrs:{message:t.alert}}):t._e(),t._v(" "),a("h1",{staticClass:"page-header text-center"},[t._v("Are you sure you want to create a new game?")]),t._v(" "),a("form",{on:{submit:t.CreateGame}},[a("button",{staticClass:"btn btn-primary center-block",attrs:{type:"submit"}},[t._v("Yes")])]),t._v(" "),a("br")],1)},staticRenderFns:[]};var s=a("VU/8")(n,o,!1,function(t){a("gpwP")},"data-v-6a39b3e6",null);e.a=s.exports},wtEF:function(t,e,a){"use strict";var n=a("7+uW"),o=a("NYxO"),s=a("8+8L");n.a.use(s.a);var r={register:function(t,e){new Date;if(void 0===t.registrations.find(function(t){return t.name===e.name})){var a={name:e.name,gameCode:e.gameCode};t.registrations.push(a)}},unregister:function(t,e){var a=t.registrations.find(function(t){return t.name===e.name});t.registrations.splice(t.registrations.indexOf(a),1)},updatePlayers:function(t,e){t.registrations=e},setGameCode:function(t,e){t.gameCode=e},setMyUsername:function(t,e){t.username=e},updateGameView:function(t,e){t.gameState=e}};a.d(e,"a",function(){return i}),n.a.use(o.a);var i=new o.a.Store({state:{username:"",gameCode:0,questionNumber:0,gameState:"menu",registrations:[]},getters:{unregisteredUsers:function(t){return t.users.filter(function(t){return!t.registered})},registrations:function(t){return t.registrations},totalRegistrations:function(t){return t.registrations.length},gameState:function(t){return t.gameState}},mutations:r,actions:{register:function(t,e){(0,t.commit)("register",e)},startGame:function(t){(0,t.commit)("startGame")},updatePlayers:function(t,e){(0,t.commit)("updatePlayers",e)},setGameCode:function(t,e){(0,t.commit)("setGameCode",e)},setMyUsername:function(t,e){(0,t.commit)("setMyUsername",e)},loadState:function(t){(0,t.commit)("loadState")}}})}},["NHnr"]);
//# sourceMappingURL=app.c59c28ed4a0d7b271d39.js.map