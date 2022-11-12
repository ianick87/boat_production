(self.webpackChunklite=self.webpackChunklite||[]).push([[8261],{41987:(e,n,i)=>{"use strict";i.d(n,{e:()=>y,t:()=>S});var l=i(63038),t=i.n(l),o=i(67294),a=i(6479),r=i.n(a),d=i(64718),c=i(19262),u=i(319),s=i.n(u),m=i(69387),f={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherFollowersDialog_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"followersUserConnection"},arguments:[{kind:"Argument",name:{kind:"Name",value:"paging"},value:{kind:"Variable",name:{kind:"Name",value:"pagingInfo"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"users"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"DialogUserEntity_user"}}]}},{kind:"Field",name:{kind:"Name",value:"pagingInfo"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"next"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"to"}},{kind:"Field",name:{kind:"Name",value:"from"}},{kind:"Field",name:{kind:"Name",value:"limit"}}]}}]}}]}}]}}].concat(s()(m.U.definitions))},k={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"PublisherFollowersDialogUserQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"pagingInfo"}},type:{kind:"NamedType",name:{kind:"Name",value:"PagingOptions"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"user"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherFollowersDialog_publisher"}}]}}]}}].concat(s()(f.definitions))},v={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"PublisherFollowersDialogPublicationQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"pagingInfo"}},type:{kind:"NamedType",name:{kind:"Name",value:"PagingOptions"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"collection"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherFollowersDialog_publisher"}}]}}]}}].concat(s()(f.definitions))},p=function(e){var n,i,l,t,a,u=e.publisher,s=e.followerCount,m=e.isVisible,f=e.hide,p=(0,d.a)("User"===u.__typename?k:v,{variables:{id:u.id,pagingInfo:{limit:10}},ssr:!1}),g=p.data,b=p.error,w=p.fetchMore,S="User"===u.__typename?"user":"collection",y=null==g||null===(n=g[S])||void 0===n||null===(i=n.followersUserConnection)||void 0===i?void 0:i.users,N=null==g||null===(l=g[S])||void 0===l||null===(t=l.followersUserConnection)||void 0===t||null===(a=t.pagingInfo)||void 0===a?void 0:a.next;return b||0===s?null:o.createElement(c.L,{hide:f,isVisible:m,heading:"".concat(s," Followers"),entities:y,pagingInfoNext:N,handleFetchMore:function(){if(N){N.__typename;var e=r()(N,["__typename"]);w({variables:{pagingInfo:e}})}}})},g=i(93310),b=i(87691),w=i(21372),S=function(e){var n,i,l=null!==(n="Collection"===e.__typename?e.subscriberCount:null===(i=e.socialStats)||void 0===i?void 0:i.followerCount)&&void 0!==n?n:0;return{followerCount:l,isFollowerCountVisible:l>0}},y=function(e){var n=e.disableLink,i=void 0!==n&&n,l=e.scale,a=void 0===l?"L":l,r=e.publisher,d=e.linkStyle,c=void 0===d?"SUBTLE":d,u=S(r),s=u.followerCount,m=u.isFollowerCountVisible,f=o.useState(!1),k=t()(f,2),v=k[0],y=k[1],N=!i;if(!m)return null;var F="".concat((0,w.pY)(s)," Follower").concat(1===s?"":"s");return N?o.createElement(o.Fragment,null,o.createElement(b.F,{playwrightClassName:"pw-follower-count",tag:"span",scale:a},o.createElement(g.r,{onClick:function(){return y(!0)},linkStyle:c},F)),o.createElement(p,{hide:function(){return y(!1)},publisher:r,followerCount:s,isVisible:v})):o.createElement(b.F,{tag:"span",scale:a,color:"DARKER"},F)}},69387:(e,n,i)=>{"use strict";i.d(n,{U:()=>r});var l=i(319),t=i.n(l),o=i(78693),a=i(27048),r={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"DialogUserEntity_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"bio"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserFollowButton_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserAvatar_user"}}]}}].concat(t()(o.s.definitions),t()(a.W.definitions))}},19262:(e,n,i)=>{"use strict";i.d(n,{L:()=>w});var l=i(67294),t=i(91583),o=i(77355),a=i(47230),r=i(20113),d=i(68427),c=i(71652),u=i(82405),s=i(93310),m=i(87691),f=function(e){var n=e.avatar,i=e.href,t=e.name,a=e.followButton,d=e.bio;return l.createElement(o.x,{padding:"12px 0"},l.createElement(o.x,{display:"flex",alignItems:"flex-start",justifyContent:"space-between"},l.createElement(o.x,{display:"flex",alignItems:"flex-start"},l.createElement(o.x,{marginRight:"20px"},n),l.createElement(o.x,{display:"flex",flexDirection:"column",alignItems:"flex-start"},l.createElement(s.r,{href:i},l.createElement(r.X6,{scale:"XS"},t)),d&&l.createElement(m.F,{scale:"S"},d))),l.createElement(o.x,{marginLeft:"48px"},a)))},k=function(e){var n=e.follower,i=n.name,t=(0,d.R)(n);return l.createElement(f,{avatar:l.createElement(c.v,{collection:n,circular:!0,size:40}),href:t,name:i,followButton:l.createElement(u.Fp,{buttonSize:"SMALL",collection:n,susiEntry:"follow_list"})})},v=i(84739),p=i(17193),g=i(32317),b=function(e){var n=e.follower,i=n.name,t=n.bio,o=void 0===t?"":t,a=(0,v.B)(n);return l.createElement(f,{avatar:l.createElement(p.Yt,{user:n,scale:"S"}),href:a,name:i,bio:o,followButton:l.createElement(g.Bv,{buttonSize:"SMALL",user:n,susiEntry:"follow_list"})})},w=function(e){var n=e.hide,i=e.isVisible,d=e.heading,c=e.entities,u=e.pagingInfoNext,s=e.handleFetchMore;return l.createElement(t.V,{isVisible:i,hide:n,withAnimation:!0},l.createElement(o.x,{maxWidth:"550px"},l.createElement(o.x,{display:"flex",flexDirection:"column",textAlign:"center",marginBottom:"24px"},l.createElement(r.X6,{scale:"S"},d)),null==c?void 0:c.map((function(e){return"User"===e.__typename?l.createElement(b,{follower:e,key:e.id}):l.createElement(k,{follower:e,key:e.id})})),u&&l.createElement(o.x,{display:"flex",flexDirection:"column",margin:"24px",alignItems:"center"},l.createElement(a.z,{buttonStyle:"SOCIAL",size:"SMALL",onClick:s},"Show more"))))}},82405:(e,n,i)=>{"use strict";i.d(n,{b3:()=>I,Iq:()=>U,Fp:()=>V});var l=i(63038),t=i.n(l),o=i(28655),a=i.n(o),r=i(92471),d=i(21919),c=i(67294),u=i(5977),s=i(77520),m=i(74928),f=i(25550),k=i(25267),v=i(67701),p=i(26350),g=i(98007),b=i(50563),w=i(93310),S=i(77355),y=i(47230),N=i(18627),F=i(66411),E=i(92661),C=i(43487),_=i(50458),h=i(68216);function x(){var e=a()(["\n  fragment CollectionFollowButton_collection on Collection {\n    __typename\n    id\n    name\n    slug\n    ...collectionUrl_collection\n    ...SusiClickable_collection\n  }\n  ","\n  ","\n"]);return x=function(){return e},e}function D(){var e=a()(["\n  fragment CollectionFollowButton_post on Post {\n    __typename\n    id\n  }\n"]);return D=function(){return e},e}var I=(0,r.Ps)(D()),U=(0,r.Ps)(x(),h.nf,g.Os),V=function(e){var n,i=e.buttonSize,l=e.buttonStyleFn,o=e.collection,a=e.post,r=e.simpleLink,g=e.susiEntry,_=void 0===g?"follow_card":g,h=e.preventParentClick,x=(0,C.v9)((function(e){return e.config.authDomain})),D=(0,f.r)().viewerId,I=(0,N.Av)(),U=(0,F.pK)(),V=(0,u.TH)(),A=(0,E.$B)(V.pathname),B=null==A||null===(n=A.route)||void 0===n?void 0:n.name,T=(0,v.gY)(o),O=T.viewerEdge,P=T.loading,R=function(e,n){var i=(0,d.D)(m.e),l=t()(i,1)[0];return c.useCallback((function(){return l({variables:{id:e},optimisticResponse:{followCollection:{__typename:"Collection",id:e,name:"",viewerEdge:{__typename:"CollectionViewerEdge",id:"collectionId:".concat(e,"-viewerId:").concat(n),isFollowing:!0}}},update:function(i){i.modify({id:"User:".concat(n),fields:{missionControl:(0,b.im)("followedCollections",!0),followingCollectionConnection:(0,b.Hc)(e)}})}})}),[e])}(o.id,D),z=function(e,n){var i=(0,d.D)(m.X),l=t()(i,1)[0];return c.useCallback((function(){return l({variables:{id:e},optimisticResponse:{unfollowCollection:{__typename:"Collection",id:e,name:"",viewerEdge:{__typename:"CollectionViewerEdge",id:"collectionId:".concat(e,"-viewerId:").concat(n),isFollowing:!1}}},update:function(e){e.modify({id:"User:".concat(n),fields:{missionControl:(0,b.im)("followedCollections",!1)}})}})}),[e])}(o.id,D),M=c.useCallback((function(e){h&&e.preventDefault(),null!=O&&O.isFollowing||(I.event("collection.followed",{collectionId:o.id,followSource:U}),R())}),[o,O,h,U]),G=c.useCallback((function(e){h&&e.preventDefault(),I.event("collection.unfollowed",{collectionId:o.id,followSource:U}),z()}),[h,U]),X=!(null==O||!O.isFollowing),q=l?l(!!X):X?"OBVIOUS":"STRONG";return r?c.createElement(w.r,{onClick:X?G:M},c.createElement(S.x,{display:"flex",flexDirection:"row"},X?"Unfollow publication":"Follow publication")):c.createElement(k.I,null,(function(e){return e?c.createElement(y.z,{size:i,onClick:X?z:R,buttonStyle:q,loading:P},X?"Following":"Follow"):c.createElement(p.R,{collection:o,buttonStyle:X?"OBVIOUS":"STRONG",isButton:!0,buttonSize:"REGULAR",operation:"register",actionUrl:L(x,o,a)||"",susiEntry:_,pageSource:(0,s.x)(B,"register")},X?"Following":"Follow")}))},L=function(e,n,i){return n.slug&&(i&&i.id?(0,_.TAb)(e,n.slug,i.id):(0,_.LlO)(e,n.slug))}},75101:(e,n,i)=>{"use strict";i.d(n,{G:()=>r});var l=i(67294),t=i(5977),o=i(43487),a=i(78870),r=function(){var e=(0,t.TH)(),n=(0,o.v9)((function(e){return e.navigation.hostname}));return(0,l.useCallback)((function(i){return(0,a.z9)(i,n,e)}),[e,n])}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/8261.d872e38a.chunk.js.map