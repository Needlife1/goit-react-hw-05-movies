"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[681],{312:function(e,r,t){t.d(r,{H:function(){return i}});var n=t(861),c=t(757),a=t.n(c),u=t(340).Z.create({baseURL:"https://api.themoviedb.org/"}),i=function(){var e=(0,n.Z)(a().mark((function e(r){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.get("".concat(r,"&").concat("api_key=8debd3241aced94fddceeaeecb834be8")),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},681:function(e,r,t){t.r(r);var n=t(861),c=t(439),a=t(757),u=t.n(a),i=t(791),s=t(689),o=t(312),f=t(184);r.default=function(){var e=(0,i.useState)([]),r=(0,c.Z)(e,2),t=r[0],a=r[1],h=(0,s.UO)().moviesId;return(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(u().mark((function e(){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.H)("3/movie/".concat(h,"/reviews?"));case 3:return r=e.sent,t=r.data,e.abrupt("return",a(t.results));case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[h]),(0,f.jsx)(f.Fragment,{children:0===t.length?(0,f.jsx)("p",{children:"We don`t have any reviews for this movie"}):(0,f.jsx)("ul",{children:t.map((function(e){return(0,f.jsxs)("li",{children:[(0,f.jsx)("h3",{children:e.author}),(0,f.jsx)("p",{children:e.content})]},e.id)}))})})}}}]);
//# sourceMappingURL=681.9e5bb85a.chunk.js.map