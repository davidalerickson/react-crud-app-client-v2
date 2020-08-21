(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{110:function(e,t,n){e.exports=n(234)},234:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(31),i=n.n(c),o=n(8),s=n(6),u=n(106),l=n(20),m=n(7),p=n(11),d=n(12),h=n(14),f=n(13),b=n(22),E=n.n(b),v=n(9),g=n(36),S=n(107),y=n.n(S).a.create({baseURL:"https://davider-streams-api.herokuapp.com"}),O=n(16),j=Object(O.a)({forceRefresh:!0}),I=function(e){return function(){var t=Object(g.a)(E.a.mark((function t(n){var a;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.get("/streams/".concat(e));case 2:a=t.sent,n({type:"FETCH_STREAM",payload:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},N=n(236),k=n(235),C=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).renderInput=function(t){var n=t.input,a=t.label,c=t.meta,i="field ".concat(c.error&&c.touched?"error":"");return r.a.createElement("div",{className:i},r.a.createElement("label",null,a),r.a.createElement("input",Object.assign({},n,{autoComplete:"off"})),e.renderError(c))},e.onSubmit=function(t){e.props.onSubmit(t)},e}return Object(d.a)(n,[{key:"renderError",value:function(e){var t=e.error;if(e.touched&&t)return r.a.createElement("div",{className:"ui error message"},r.a.createElement("div",{className:"header"},t))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{className:"ui form error",onSubmit:this.props.handleSubmit(this.onSubmit)},r.a.createElement(N.a,{name:"title",component:this.renderInput,label:"Enter Title"}),r.a.createElement(N.a,{name:"description",component:this.renderInput,label:"Enter Description"}),r.a.createElement("button",{className:"ui button primary"},"Submit")))}}]),n}(r.a.Component),w=Object(k.a)({form:"streamForm",validate:function(e){var t={};return e.title||(t.title="You must enter a title"),e.description||(t.description="You must enter a description"),t}})(C),A=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onSubmit=function(t){console.log(t),e.props.createStream(t)},e}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Create a Stream"),r.a.createElement(w,{onSubmit:this.onSubmit}))}}]),n}(r.a.Component),T=Object(o.b)(null,{createStream:function(e){return function(){var t=Object(g.a)(E.a.mark((function t(n,a){var r,c;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth.userId,t.next=3,y.post("/streams",Object(v.a)(Object(v.a)({},e),{},{userId:r}));case 3:c=t.sent,n({type:"CREATE_STREAM",payload:c.data}),j.push({pushHistoryVar:"/#/"});case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}})(A),_=function(e){return i.a.createPortal(r.a.createElement("div",{className:"ui dimmer modals visible active"},r.a.createElement("div",{className:"ui standard modal visible active",onClick:function(e){return e.stopPropagation()}},r.a.createElement("div",{className:"header"},e.title),r.a.createElement("div",{className:"content"},e.content),r.a.createElement("div",{className:"actions"},e.actions))),document.querySelector("#modal"))},x=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).RenderActions=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){return e.props.deleteStream(e.props.match.params.id)},className:"ui button negative"},"Delete"),r.a.createElement(l.b,{to:"/",className:"ui button"},"Cancel"))},e.renderContent=function(){return e.props.stream?'Are you sure you want to delete this stream with title: "'.concat(e.props.stream.title,'"'):"Are you sure you want to delete this stream?"},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchStream(this.props.match.params.id)}},{key:"render",value:function(){return r.a.createElement(_,{title:"Delete Stream",content:this.renderContent(),actions:this.RenderActions()})}}]),n}(r.a.Component),R=Object(o.b)((function(e,t){return{stream:e.streams[t.match.params.id]}}),{fetchStream:I,deleteStream:function(e){return function(){var t=Object(g.a)(E.a.mark((function t(n){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.delete("/streams/".concat(e));case 2:n({type:"DELETE_STREAM",payload:e}),j.push({pushHistoryVar:"/#/"});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(x),M=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onSubmit=function(t){e.props.editStream(e.props.match.params.id,t)},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchStream(this.props.match.params.id)}},{key:"render",value:function(){return this.props.stream?r.a.createElement("div",null,r.a.createElement("h3",null,"Edit a Stream"),r.a.createElement(w,{onSubmit:this.onSubmit,initialValues:{title:this.props.stream.title,description:this.props.stream.description}})):r.a.createElement("div",null,"...Loading")}}]),n}(r.a.Component),D=Object(o.b)((function(e,t){return{stream:e.streams[t.match.params.id]}}),{fetchStream:I,editStream:function(e,t){return function(){var n=Object(g.a)(E.a.mark((function n(a){var r;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y.patch("/streams/".concat(e),t);case 2:r=n.sent,a({type:"EDIT_STREAM",payload:r.data}),j.push({pushHistoryVar:"/#/"});case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})(M),L=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchStreams()}},{key:"renderAdmin",value:function(e){if(e.userId===this.props.CurrentUserId)return r.a.createElement("div",{className:"right floated content"},r.a.createElement(l.b,{to:"/streams/edit/".concat(e.id),className:"ui button primary"},"Edit"),r.a.createElement(l.b,{to:"/streams/delete/".concat(e.id),className:"ui button negative"},"Delete"))}},{key:"renderList",value:function(){var e=this;return this.props.streams.map((function(t){return r.a.createElement("div",{className:"item",key:t.id},e.renderAdmin(t),r.a.createElement("i",{className:"large middle aligned icon camera"}),r.a.createElement("div",{className:"content"},r.a.createElement(l.b,{to:"/streams/".concat(t.id),className:"header"},t.title),r.a.createElement("div",{className:"description"},t.description)))}))}},{key:"renderCreate",value:function(){if(this.props.isSignedIn)return r.a.createElement("div",{style:{textAlign:"right"}},r.a.createElement(l.b,{to:"/streams/new",className:"ui button primary"},"Create Stream"))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Streams"),r.a.createElement("div",{className:"ui celled list"},this.renderList()),this.renderCreate())}}]),n}(r.a.Component),H=Object(o.b)((function(e){return{streams:Object.values(e.streams),CurrentUserId:e.auth.userId,isSignedIn:e.auth.isSignedIn}}),{fetchStreams:function(){return function(){var e=Object(g.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.get("/streams");case 2:n=e.sent,t({type:"FETCH_STREAMS",payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(L),U=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchStream(this.props.match.params.id)}},{key:"render",value:function(){if(console.log(this.props.stream),!this.props.stream)return r.a.createElement("div",null,"...Loading");var e=this.props.stream,t=e.title,n=e.description;return r.a.createElement("div",null,r.a.createElement("h1",null,t),r.a.createElement("h5",null,n))}}]),n}(r.a.Component),F=Object(o.b)((function(e,t){return{stream:e.streams[t.match.params.id]}}),{fetchStream:I})(U),G=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onAuthChange=function(t){t?e.props.signIn(e.auth.currentUser.get().getId()):e.props.signOut()},e.onSignInClick=function(){e.auth.signIn()},e.onSignOutClick=function(){e.auth.signOut()},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",(function(){window.gapi.client.init({clientId:"603572671189-vep01tu0k5v0j4qo30dejeimkk8t95kj.apps.googleusercontent.com",scope:"email"}).then((function(){e.auth=window.gapi.auth2.getAuthInstance(),e.onAuthChange(e.auth.isSignedIn.get()),e.auth.isSignedIn.listen(e.onAuthChange)}))}))}},{key:"renderAuthButton",value:function(){return null===this.props.isSignedIn?null:this.props.isSignedIn?r.a.createElement("button",{onClick:this.onSignOutClick,className:"ui red google button"},r.a.createElement("i",{className:"google icon"}),"Sign Out"):r.a.createElement("button",{onClick:this.onSignInClick,className:"ui red google button"},r.a.createElement("i",{className:"google icon"}),"Sign in with Google")}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderAuthButton())}}]),n}(a.Component),V=Object(o.b)((function(e){return{isSignedIn:e.auth.isSignedIn}}),{signIn:function(e){return{type:"SIGN_IN",payload:e}},signOut:function(){return{type:"SIGN_OUT"}}})(G),q=function(){return r.a.createElement("div",{className:"ui secondary pointing menu"},r.a.createElement(l.b,{to:"/",className:"item"},"Streamer"),r.a.createElement("div",{className:"right menu"},r.a.createElement(l.b,{to:"/",className:"item"},"All Streams"),r.a.createElement(V,null)))},P=function(){return r.a.createElement("div",{className:"ui container"},r.a.createElement(l.a,{basename:"/",history:j},r.a.createElement("div",null,r.a.createElement(q,null),r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/",exact:!0,component:H}),r.a.createElement(m.a,{path:"/streams/new",exact:!0,component:T}),r.a.createElement(m.a,{path:"/streams/edit/:id",exact:!0,component:D}),r.a.createElement(m.a,{path:"/streams/delete/:id",exact:!0,component:R}),r.a.createElement(m.a,{path:"/streams/:id",exact:!0,component:F})))))},B=n(237),J={isSignedIn:!0,userId:101010},X=n(35),Y=n(74),K=n.n(Y),z=Object(s.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return Object(v.a)(Object(v.a)({},e),{},{isSignedIn:!0,userId:t.payload});case"SIGN_OUT":return Object(v.a)(Object(v.a)({},e),{},{isSignedIn:!1,userId:null});default:return e}},form:B.a,streams:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_STREAMS":return Object(v.a)(Object(v.a)({},e),K.a.mapKeys(t.payload,"id"));case"FETCH_STREAM":case"CREATE_STREAM":case"EDIT_STREAM":return Object(v.a)(Object(v.a)({},e),{},Object(X.a)({},t.payload.id,t.payload));case"DELETE_STREAM":return K.a.omit(e,t.payload);default:return e}}}),Q=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,W=Object(s.e)(z,Q(Object(s.a)(u.a)));i.a.render(r.a.createElement(o.a,{store:W},r.a.createElement(P,null)),document.querySelector("#root"))}},[[110,1,2]]]);
//# sourceMappingURL=main.ffa1dd0e.chunk.js.map