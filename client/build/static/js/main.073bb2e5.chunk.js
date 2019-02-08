(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){},24:function(e,t,a){},28:function(e,t,a){e.exports=a(66)},55:function(e,t,a){},59:function(e,t,a){},63:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),s=a.n(c),l=a(15),i=a.n(l),o=a(26),u=a(6),m=a(7),h=a(9),d=a(8),p=a(10),v=a(68),E=a(69),g=a(70),f=a(11),b=a.n(f),w={getPaths:function(){return b.a.get("/api/paths")},getSubjects:function(e){return b.a.get("/api/paths/".concat(e))},getResources:function(e,t){return b.a.get("/api/paths/".concat(e,"/subjects/").concat(t))},submitReview:function(e,t){return b.a.post("/api/review/".concat(e,"/").concat(t))},getReviews:function(e){return b.a.get("/api/review/".concat(e))}},j=a(67);a(55);var y=function(e){return r.a.createElement("div",{className:"PathContainer"},r.a.createElement("div",{key:e.path.id},r.a.createElement(j.a,{to:"/paths/"+e.path.id},r.a.createElement("div",{className:"PathCardImg"},r.a.createElement("img",{src:e.path.image,alt:e.path.name})),r.a.createElement("div",{className:"PathCardOverlay"},r.a.createElement("div",{className:"text"},"Pick Me!")),r.a.createElement("p",{className:"PathCardDesc"},e.path.name,r.a.createElement("hr",null),e.path.description))))},C={PathHeader:{textAlign:"center"}},S=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={paths:[],user:a.props.user},a.loadPaths=function(){w.getPaths().then(function(e){return a.setState({paths:e.data})}).catch(function(e){return console.log(e)})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){console.log("USERNAME IN PATHS",this.state.user.name),console.log("USEREMAIL IN PATHS",this.state.user.email),this.loadPaths()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{style:C.PathHeader,className:"PathHeader"},r.a.createElement("h1",null,"Welcome to Root Route, ",this.state.user.name,"!")," ",r.a.createElement("hr",null),r.a.createElement("h3",null,"Pick a path to get started!")),this.state.paths.map(function(e){return r.a.createElement(y,{path:e})}))}}]),t}(n.Component);var N=function(){return r.a.createElement("h1",null,"404 Page Not Found")};a(59);var O=function(e){return r.a.createElement("div",{className:"SubjectContainer"},r.a.createElement("div",{key:e.subject.id},r.a.createElement(j.a,{to:"".concat(e.link,"/subjects/").concat(e.subject.id)},r.a.createElement("div",{className:"SubjectCardImg"},r.a.createElement("img",{className:"SubjectCardImg",src:e.subject.image,alt:e.subject.name})),r.a.createElement("div",{className:"SubjectCardOverlay"},r.a.createElement("div",{className:"text"},"Pick Me!")),r.a.createElement("p",{className:"SubjectCardName"},e.subject.name," "),r.a.createElement("p",{className:"SubjectCardDesc"},r.a.createElement("hr",null),e.subject.description,r.a.createElement("hr",null)))))},k={SubjectHeader:{textAlign:"center"}},R=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={subjects:[],user:a.props.user},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("USERNAME IN SUBJECTS",this.state.user.name),console.log("USEREMAIL IN SUBJECTS",this.state.user.email),w.getSubjects(this.props.match.params.pathid).then(function(t){return e.setState({subjects:t.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"SubjectHeader",style:k.SubjectHeader},r.a.createElement("h3",null,"Click on any technology to find the best online courses")),this.state.subjects.map(function(t){return r.a.createElement(O,{subject:t,link:"/paths/".concat(e.props.match.params.pathid)})}))}}]),t}(n.Component);a(23);var I=function(e){return r.a.createElement("div",null,r.a.createElement("p",null,"Review #",e.review.id,": ",e.review.reviewContent))};var M=function(e){return r.a.createElement("form",{className:"review"},r.a.createElement("label",{htmlFor:"reviewfield"},"Review:"),r.a.createElement("input",{value:e.reviewContent,onChange:e.handleInputChange,name:"reviewfield",type:"text",className:"form-control",placeholder:"Add your review here",id:"review"}),r.a.createElement("button",{type:"submit",onClick:e.handleFormSubmit,className:"btn btn-success"},"Submit Review"))},A=(a(24),function(e){var t=e.handleClose,a=e.show,n=e.children,c=a?"modal display-block":"modal display-none";return r.a.createElement("div",{className:c},r.a.createElement("section",{className:"modal-main"},n,r.a.createElement("button",{onClick:t},"close")))}),D=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={id:a.props.resource.id,name:a.props.resource.name,link:a.props.resource.link,image:a.props.resource.image,description:a.props.resource.description,reviewContent:"",reviews:[],error:"",innerLink:a.props.innerLink,reviewsDisplayed:!0,descriptionsDisplayed:!0,show:!1},a.showModal=function(){a.setState({show:!0})},a.hideModal=function(){a.setState({show:!1})},a.loadReviews=function(e){w.getReviews(e).then(function(e){return a.setState({reviews:e.data})}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){a.setState({reviewContent:e.target.value})},a.handleFormSubmit=function(e){e.preventDefault(),w.submitReview(a.state.id,a.state.reviewContent).then(function(e){if("error"===e.data.status)throw new Error(e.data.message);a.loadReviews(a.state.id)}).catch(function(e){return a.setState({error:e.message})})},a.toggleReviews=function(){!1===a.state.reviewsDisplayed?a.setState({reviewsDisplayed:!0}):a.setState({reviewsDisplayed:!1})},a.toggleDescriptions=function(){!1===a.state.descriptionsDisplayed?a.setState({descriptionsDisplayed:!0}):a.setState({descriptionsDisplayed:!1})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.loadReviews(this.state.id)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"ResourceContainer"},r.a.createElement("div",{key:this.state.id},r.a.createElement("div",{className:"ResourceCardImg"},r.a.createElement("img",{className:"ResourceCardImg",src:this.state.image,alt:this.state.name})),r.a.createElement("div",{className:"ResourceCardOverlay"},r.a.createElement("div",{className:"text"},r.a.createElement("a",{href:this.state.link},"Pick Me!"))),r.a.createElement("p",{className:"ResourceCardName"},this.state.name," "),r.a.createElement("p",{className:"ResourceCardButton"},r.a.createElement("button",{className:"DescriptionButton",onClick:this.toggleDescriptions},this.state.descriptionsDisplayed?"Overview":"Hide")),!!this.state.descriptionsDisplayed||r.a.createElement("p",{className:"ResourceCardDesc"},r.a.createElement("hr",null),this.state.description," ",r.a.createElement("hr",null),r.a.createElement("button",{type:"button",onClick:this.showModal},"Open Me")))),r.a.createElement(A,{show:this.state.show,handleClose:this.hideModal},this.state.reviews.map(function(e){return r.a.createElement(I,{review:e})}),r.a.createElement(M,{handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange,reviewContent:this.state.reviewContent})))}}]),t}(n.Component),P={ResourceHeader:{textAlign:"center",padding:20,paddingBottom:40}},x=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={resources:[],user:a.props.user},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("USERNAME IN RESOURCES",this.state.user.name),console.log("USEREMAIL IN RESOURCES",this.state.user.email),w.getResources(this.props.match.params.pathid,this.props.match.params.subjectid).then(function(t){return e.setState({resources:t.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"ResourceHeader",style:P.ResourceHeader},r.a.createElement("h3",null,"Click any course to start mastering skills")),this.state.resources.map(function(t){return r.a.createElement(D,{resource:t,innerLink:"/paths/".concat(e.props.match.params.pathid,"/subjects/").concat(e.props.match.params.subjectid)})}))}}]),t}(n.Component),H=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("a",{href:"http://localhost:3001/auth/google",class:"button"},r.a.createElement("div",null,r.a.createElement("span",{class:"svgIcon t-popup-svg"},r.a.createElement("svg",{class:"svgIcon-use",width:"25",height:"37",viewBox:"0 0 25 25"},r.a.createElement("g",{fill:"none","fill-rule":"evenodd"},r.a.createElement("path",{d:"M20.66 12.693c0-.603-.054-1.182-.155-1.738H12.5v3.287h4.575a3.91 3.91 0 0 1-1.697 2.566v2.133h2.747c1.608-1.48 2.535-3.65 2.535-6.24z",fill:"#4285F4"}),r.a.createElement("path",{d:"M12.5 21c2.295 0 4.22-.76 5.625-2.06l-2.747-2.132c-.76.51-1.734.81-2.878.81-2.214 0-4.088-1.494-4.756-3.503h-2.84v2.202A8.498 8.498 0 0 0 12.5 21z",fill:"#34A853"}),r.a.createElement("path",{d:"M7.744 14.115c-.17-.51-.267-1.055-.267-1.615s.097-1.105.267-1.615V8.683h-2.84A8.488 8.488 0 0 0 4 12.5c0 1.372.328 2.67.904 3.817l2.84-2.202z",fill:"#FBBC05"}),r.a.createElement("path",{d:"M12.5 7.38c1.248 0 2.368.43 3.25 1.272l2.437-2.438C16.715 4.842 14.79 4 12.5 4a8.497 8.497 0 0 0-7.596 4.683l2.84 2.202c.668-2.01 2.542-3.504 4.756-3.504z",fill:"#EA4335"})))),r.a.createElement("span",{class:"button-label"},"Sign in with Google"))))}}]),t}(n.Component);a(63);var L=function(e){return r.a.createElement("nav",{className:"navbar"},r.a.createElement("a",{href:"/"},r.a.createElement("span",null,"Root Route")),r.a.createElement("a",{className:"navlink",href:"/profile"},r.a.createElement("span",null,"Community")),r.a.createElement("a",{className:"navlink",href:"/dashboard"},r.a.createElement("span",null,"Dashboard")),r.a.createElement("p",null,"Welcome, ",e.user.name,"!"),r.a.createElement("a",{className:"navlink",href:"/auth/google",class:"button"},r.a.createElement("div",null,r.a.createElement("span",{class:"svgIcon t-popup-svg"},r.a.createElement("svg",{class:"svgIcon-use",width:"25",height:"37",viewBox:"0 0 25 25"},r.a.createElement("g",{fill:"none","fill-rule":"evenodd"},r.a.createElement("path",{d:"M20.66 12.693c0-.603-.054-1.182-.155-1.738H12.5v3.287h4.575a3.91 3.91 0 0 1-1.697 2.566v2.133h2.747c1.608-1.48 2.535-3.65 2.535-6.24z",fill:"#4285F4"}),r.a.createElement("path",{d:"M12.5 21c2.295 0 4.22-.76 5.625-2.06l-2.747-2.132c-.76.51-1.734.81-2.878.81-2.214 0-4.088-1.494-4.756-3.503h-2.84v2.202A8.498 8.498 0 0 0 12.5 21z",fill:"#34A853"}),r.a.createElement("path",{d:"M7.744 14.115c-.17-.51-.267-1.055-.267-1.615s.097-1.105.267-1.615V8.683h-2.84A8.488 8.488 0 0 0 4 12.5c0 1.372.328 2.67.904 3.817l2.84-2.202z",fill:"#FBBC05"}),r.a.createElement("path",{d:"M12.5 7.38c1.248 0 2.368.43 3.25 1.272l2.437-2.438C16.715 4.842 14.79 4 12.5 4a8.497 8.497 0 0 0-7.596 4.683l2.84 2.202c.668-2.01 2.542-3.504 4.756-3.504z",fill:"#EA4335"})))),r.a.createElement("span",{class:"button-label"},"Sign in with Google"))))},B=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={user:"",isLoggedIn:!1},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/protected");case 2:t=e.sent,a=!1,t.data&&t.data.email.length>0&&(a=!0),this.setState({user:t.data,isLoggedIn:a});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isLoggedIn,a=e.user;return t&&r.a.createElement("h1",null,"Logged In!"),r.a.createElement(v.a,null,r.a.createElement("div",null,r.a.createElement(L,{user:a}),r.a.createElement(E.a,null,r.a.createElement(g.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(H,Object.assign({},e,{user:a}))}}),this.state.isLoggedIn&&r.a.createElement(g.a,{exact:!0,path:"/paths",render:function(e){return r.a.createElement(S,Object.assign({},e,{user:a}))}}),this.state.isLoggedIn&&r.a.createElement(g.a,{exact:!0,path:"/paths/:pathid",render:function(e){return r.a.createElement(R,Object.assign({},e,{user:a}))}}),this.state.isLoggedIn&&r.a.createElement(g.a,{exact:!0,path:"/paths/:pathid/subjects/:subjectid",render:function(e){return r.a.createElement(x,Object.assign({},e,{user:a}))}}),r.a.createElement(g.a,{component:N}))))}}]),t}(n.Component);s.a.render(r.a.createElement(B,null),document.getElementById("root"))}},[[28,2,1]]]);
//# sourceMappingURL=main.073bb2e5.chunk.js.map