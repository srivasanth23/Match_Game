(this["webpackJsonpmatch-game"]=this["webpackJsonpmatch-game"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,a){},,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var c=a(2),s=a.n(c),n=a(4),i=a.n(n),r=a(5),m=a(7),g=a(8),b=a(6),l=(a(13),a(0)),h=function(t){var e=t.tabDetails,a=t.onClickTab,c=t.isActive,s=e.tabId,n=e.displayText,i=c?"active-tab":"";return Object(l.jsx)("li",{className:"list-container",children:Object(l.jsx)("button",{className:"tabs-btn ".concat(i),type:"button",onClick:function(){a(s)},children:Object(l.jsxs)("p",{className:"tab",children:[" ",n]})})})},p=(a(15),function(t){var e=t.onClick,a=t.imageDetails,c=a.id,s=a.thumbnailUrl;return Object(l.jsx)("li",{className:"image-list-container",children:Object(l.jsx)("button",{className:"image-checking-button",type:"button",onClick:function(){e(c)},children:Object(l.jsx)("img",{src:s,alt:"thumbnail",className:"image-resizer"})})})}),d=(a(16),function(t){var e=t.score,a=t.resetButton;return Object(l.jsxs)("div",{className:"score-background",children:[Object(l.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/match-game-trophy.png",alt:"trophy",className:"trophy-image"}),Object(l.jsx)("p",{className:"score-heading",children:" YOUR SCORE "}),Object(l.jsxs)("p",{className:"score-para",children:[" ",e," "]}),Object(l.jsxs)("button",{className:"reset-btn",type:"button",onClick:function(){a()},children:[Object(l.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png",alt:"reset",className:"reset-image"}),"PLAY AGAIN"]})]})}),o=(a(17),function(t){Object(g.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(r.a)(this,a);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(t=e.call.apply(e,[this].concat(s))).state={timer:60,isTimerRunning:!0,activeTab:"FRUIT",score:0,matchIamgeIndex:0},t.onClickTab=function(e){t.setState({activeTab:e})},t.getfilteredTabImages=function(e){return t.props.imagesList.filter((function(t){return t.category===e}))},t.checkMatch=function(e){var a=t.state.matchIamgeIndex,c=t.props.imagesList,s=c[a].id,n=Math.ceil(Math.random()*c.length);s===e?t.setState((function(t){return{score:t.score+1,matchIamgeIndex:n}})):(clearInterval(t.timer),t.setState({isTimerRunning:!1}))},t.countdown=function(){0===t.state.timer?(clearInterval(t.timer),t.setState({isTimerRunning:!1})):t.setState((function(t){return{timer:t.timer-1}}))},t.resetButton=function(){t.setState({timer:60,isTimerRunning:!0,activeTab:"FRUIT",score:0,matchIamgeIndex:0}),t.timer=setInterval(t.countdown,1e3)},t}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.timer=setInterval(this.countdown,1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var t=this,e=this.state,a=e.timer,c=e.activeTab,s=e.isTimerRunning,n=this.state,i=n.score,r=n.matchIamgeIndex,m=this.props,g=m.tabsList,b=m.imagesList,o=this.getfilteredTabImages(c),f=b[r].imageUrl;return Object(l.jsxs)("div",{className:"app-conatiner",children:[Object(l.jsxs)("nav",{className:"nav-conatiner",children:[Object(l.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png",alt:"website logo",className:"logo"}),Object(l.jsxs)("ul",{className:"score-container",children:[Object(l.jsxs)("li",{className:"inner-score",children:[Object(l.jsx)("p",{className:"score",children:"Score: "}),Object(l.jsxs)("p",{className:"score",children:[" ",i]})]}),Object(l.jsxs)("li",{className:"timer",children:[Object(l.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png",alt:"timer",className:"timer-image"}),Object(l.jsxs)("p",{children:[a," sec"]})]})]})]}),Object(l.jsxs)("div",{className:"game-container",children:[s&&Object(l.jsxs)("div",{className:"play-conatiner",children:[Object(l.jsx)("img",{src:f,className:"q-image",alt:"match"}),Object(l.jsx)("ul",{className:"unordered-tabs-list",children:g.map((function(e){return Object(l.jsx)(h,{tabDetails:e,isActive:c===e.tabId,onClickTab:t.onClickTab},e.tabId)}))}),Object(l.jsx)("ul",{className:"images-container",children:o.map((function(e){return Object(l.jsx)(p,{imageDetails:e,onClick:t.checkMatch},e.id)}))})]}),!s&&Object(l.jsx)(d,{score:i,resetButton:this.resetButton})]})]})}}]),a}(c.Component)),f=o,u=(a(18),[{tabId:"FRUIT",displayText:"Fruits"},{tabId:"ANIMAL",displayText:"Animals"},{tabId:"PLACE",displayText:"Places"}]),j=[{id:"b11ec8ce-35c9-4d67-a7f7-07516d0d8186",imageUrl:"https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/match-game/orange-thumbnail-img.png",category:"FRUIT"},{id:"04ac6b9f-b7e7-45f7-a8fc-fd48f3f72526",imageUrl:"https://assets.ccbp.in/frontend/react-js/match-game/panda-img.png",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/match-game/panda-thumbnail-img.png",category:"ANIMAL"},{id:"a132f546-5b2b-4c0d-b9e4-e524bdf904cc",imageUrl:"https://assets.ccbp.in/frontend/react-js/match-game/zebra-img.png",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/match-game/zebra-thumbnail-img.png",category:"ANIMAL"},{id:"d89386da-94db-4275-9cb5-249c6e071a19",imageUrl:"https://assets.ccbp.in/frontend/react-js/match-game/paris-img.png",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/match-game/paris-thumbnail-img.png",category:"PLACE"},{id:"d810bbb0-1683-407a-8db6-898fe7b75782",imageUrl:"https://assets.ccbp.in/frontend/react-js/match-game/giraffe-img.png",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/match-game/giraffe-thumbnail-img.png",category:"ANIMAL"},{id:"176aab62-e86a-4ccd-8b89-5b83c3f02506",imageUrl:"https://assets.ccbp.in/frontend/react-js/match-game/taj-mahal-img.png",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/match-game/taj-mahal-thumbnail-img.png",category:"PLACE"},{id:"0e8daf1b-45b0-4eb0-9dde-383fede78a9b",imageUrl:"https://assets.ccbp.in/frontend/react-js/match-game/monkey-img.png",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/match-game/monkey-thumbnail-img.png",category:"ANIMAL"},{id:"1a38bf4a-659d-4470-956c-56c1bedd26ac",imageUrl:"https://assets.ccbp.in/frontend/react-js/match-game/cheetah-img.png",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/match-game/cheetah-thumbnail-img.png",category:"ANIMAL"},{id:"8f2ebd70-4fdd-47a0-b4f9-a6c654b519ab",imageUrl:"https://assets.ccbp.in/frontend/react-js/match-game/ooti-img.png",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/match-game/ooti-thumbnail-img.png",category:"PLACE"},{id:"7a72c38e-a83d-48eb-b9ce-ae3c0361cc49",imageUrl:"https://assets.ccbp.in/frontend/react-js/match-game/pineapple-img.png",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/match-game/pineapple-thumbnail-img.png",category:"FRUIT"},{id:"97a33ed5-98ed-4c95-a8f0-1595880b3b69",imageUrl:"https://assets.ccbp.in/frontend/react-js/match-game/strawberry-img.png",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/match-game/strawberry-thumbnail-img.png",category:"FRUIT"},{id:"07e20159-a950-4c22-9ca8-5ed71563ae24",imageUrl:"https://assets.ccbp.in/frontend/react-js/match-game/maldives-img.png",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/match-game/maldives-thumbnail-img.png",category:"PLACE"},{id:"43883239-8a28-47dc-9e93-43ef31654c17",imageUrl:"https://assets.ccbp.in/frontend/react-js/match-game/emerald-lake-img.png",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/match-game/emerald-thumbnail-lake-img.png",category:"PLACE"},{id:"49865ac4-b5e8-4d04-893b-d69ad6004da8",imageUrl:"https://assets.ccbp.in/frontend/react-js/match-game/watermelon-img.png",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/match-game/watermelon-thumbnail-img.png",category:"FRUIT"},{id:"649ab251-7fd6-4d65-aa0f-39020ce25932",imageUrl:"https://assets.ccbp.in/frontend/react-js/match-game/elephant-img.png",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/match-game/elephant-thumbnail-img.png",category:"ANIMAL"},{id:"1d0d1c41-e05e-4820-8614-34ee5ada20e0",imageUrl:"https://assets.ccbp.in/frontend/react-js/match-game/jammu-hills-img.png",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/match-game/jammu-thumbnail-hills-img.png",category:"PLACE"},{id:"88b4ab36-a0c1-4c56-9ce5-3b80dd8c7669",imageUrl:"https://assets.ccbp.in/frontend/react-js/match-game/fierce-coyote-img.png",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/match-game/fierce-thumbnail-coyote-img.png",category:"ANIMAL"},{id:"8a841bf8-3222-44da-b0fb-4c60190402d7",imageUrl:"https://assets.ccbp.in/frontend/react-js/match-game/lidder-valley-img.png",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/match-game/lidder-thumbnail-valley-img.png",category:"PLACE"},{id:"d406e63c-eaaf-49ea-88a6-ed6a1572eb97",imageUrl:"https://assets.ccbp.in/frontend/react-js/match-game/kivi-img.png",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/match-game/kivi-thumbnail-img.png",category:"FRUIT"},{id:"e997ebf9-9a47-4b7e-9035-01ae372d73dc",imageUrl:"https://assets.ccbp.in/frontend/react-js/match-game/dragon-fruit-img.png",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/match-game/dragon-thumbnail-fruit-img.png",category:"FRUIT"},{id:"c7fbe10e-3282-4fca-815b-91b75d5228cb",imageUrl:"https://assets.ccbp.in/frontend/react-js/match-game/goa-img.png",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/match-game/goa-thumbnail-img.png",category:"PLACE"},{id:"4210274c-7304-44d6-8690-c5251252cd10",imageUrl:"https://assets.ccbp.in/frontend/react-js/match-game/papaya-img.png",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/match-game/papaya-thumbnail-img.png",category:"FRUIT"},{id:"057b6193-a80d-4036-9e6e-fe847c99fbb6",imageUrl:"https://assets.ccbp.in/frontend/react-js/match-game/mixed-fruits-img.png",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/match-game/mixed-thumbnail-fruits-img.png",category:"FRUIT"},{id:"4e56c59b-835b-4802-87fe-77aaaa5b9526",imageUrl:"https://assets.ccbp.in/frontend/react-js/match-game/fox-img.png",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/match-game/fox-thumbnail-img.png",category:"ANIMAL"},{id:"ad75a7b1-0875-4700-977b-2c45924509aa",imageUrl:"https://assets.ccbp.in/frontend/react-js/match-game/lotus-temple-img.png",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/match-game/lotus-thumbnail-temple-img.png",category:"PLACE"},{id:"525aba17-ed5c-4f09-ad1c-b6bff222c97a",imageUrl:"https://assets.ccbp.in/frontend/react-js/match-game/dog-img.png",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/match-game/dog-thumbnail-img.png",category:"ANIMAL"},{id:"c6c66b00-c130-47d2-9d3a-1c3378d08aba",imageUrl:"https://assets.ccbp.in/frontend/react-js/match-game/apple-img.png",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/match-game/apple-thumbnail-img.png",category:"FRUIT"},{id:"6078b408-4f10-46d3-8815-db14403dbd73",imageUrl:"https://assets.ccbp.in/frontend/react-js/match-game/bhadrinath-img.png",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/match-game/bhadrinath-thumbnail-img.png",category:"PLACE"},{id:"a2baca84-3beb-49d1-bced-f9a88c161bec",imageUrl:"https://assets.ccbp.in/frontend/react-js/match-game/camel-img.png",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/match-game/camel-thumbnail-img.png",category:"ANIMAL"},{id:"1edac278-8390-4da9-b914-5f41fb49283c",imageUrl:"https://assets.ccbp.in/frontend/react-js/match-game/cherry-img.png",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/match-game/cherry-thumbnail-img.png",category:"FRUIT"}],U=function(){return Object(l.jsx)(f,{tabsList:u,imagesList:j})};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(U,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.80d0081c.chunk.js.map