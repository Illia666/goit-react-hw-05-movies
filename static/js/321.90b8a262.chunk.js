"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[321],{7465:function(e,t,r){var n=r(5861),a=r(9439),u=r(7757),c=r.n(u),s=r(2791),i=r(7689),o=r(7671),p=r(7596),f=function(e){var t=(0,s.useState)(null),r=(0,a.Z)(t,2),u=r[0],f=r[1],v=(0,i.UO)().movieId;return(0,s.useEffect)((function(){var t=function(){var t=(0,n.Z)(c().mark((function t(){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.Y5)(v,e);case 3:r=t.sent,f(r),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),n=t.t0.response,p.Am.error(n.data.message);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[v,e]),u};t.Z=f,f.defaultProps={path:""}},321:function(e,t,r){r.r(t),r.d(t,{default:function(){return i}});var n=r(7465),a="Reviews_item__BcxN4",u="Reviews_title__6ADCf",c="Reviews_text__enAiG",s=r(184),i=function(){var e=(0,n.Z)("/reviews");return(0,s.jsx)(s.Fragment,{children:e&&(e.results.length>0?(0,s.jsx)("ul",{children:e.results.map((function(e){var t=e.id,r=e.author,n=e.content;return(0,s.jsxs)("li",{className:a,children:[(0,s.jsx)("h3",{className:u,children:"Author: ".concat(r)}),(0,s.jsx)("p",{className:c,children:n})]},t)}))}):(0,s.jsx)("p",{className:c,children:"We don't have any reviews for this movie"}))})}},7671:function(e,t,r){r.d(t,{NV:function(){return f},Y5:function(){return p},_p:function(){return s},ap:function(){return o}});var n=r(5861),a=r(7757),u=r.n(a),c=r(1243),s="https://image.tmdb.org/t/p/w500",i=c.Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"b0b4fd1b10f37d2fc7069fdd28d61a74",language:"en-US"}}),o=function(){var e=(0,n.Z)(u().mark((function e(){var t,r,n,a=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:1,e.next=3,i.get("trending/movie/day",{params:{page:t}});case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t,r){var n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("movie/".concat(t).concat(r));case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(){var t,r,n,a,c=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:1,r=c.length>1?c[1]:void 0,e.next=4,i.get("search/movie",{params:{page:t,query:r,sort_by:"popularity.desc"}});case 4:return n=e.sent,a=n.data,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=321.90b8a262.chunk.js.map