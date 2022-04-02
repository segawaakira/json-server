(this["webpackJsonpreact-reacthooks-lesson-ts"]=this["webpackJsonpreact-reacthooks-lesson-ts"]||[]).push([[0],{118:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(20),c=n.n(o),a=n(12),i=Object(a.b)({styles:{global:{body:{backgroundColor:"orange.50",color:"gray.800"},p:{fontSize:{base:"md",md:"lg"},lineHeight:"tall"}}}}),s=n(49),u=n(30),d=n(38),l=n(39),f=n(55),b=n(54),j=n(23),m=n(16),h=n.n(m),O=n(24),p=n.n(O),x="https://test-segawa-json.herokuapp.com/todos",g=function(){var t=Object(j.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get(x);case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=Object(j.a)(h.a.mark((function t(e){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.post(x,e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),T=function(){var t=Object(j.a)(h.a.mark((function t(e){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.delete("".concat(x,"/").concat(e));case 2:return t.abrupt("return",e);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),L=function(){var t=Object(j.a)(h.a.mark((function t(e,n){var r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.put("".concat(x,"/").concat(e),n);case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),I=n(4),S=Object(r.memo)((function(t){var e=t.title,n=t.as,r=t.fontSize,o=t.mt;return Object(I.jsx)(s.c,{mt:o,as:n,fontSize:r,w:"full",children:e})})),w=n(50),k=n(51),y=function(t){var e=t.placeholder,n=t.leftIcon,r=t.buttonText,o=t.inputEl,c=t.handleAddTodoListItem;return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(w.a,{placeholder:e,bgColor:"white",mt:"8",borderColor:"gray.400",ref:o}),Object(I.jsx)(k.a,{onClick:c,colorScheme:"blue",leftIcon:n,mt:"8",children:r})]})},C=function(t){var e=t.todo,n=t.toggleTodoListItemStatus,r=t.deleteTodoListItem,o=e.done?"\u672a\u5b8c\u4e86\u30ea\u30b9\u30c8\u3078":"\u5b8c\u4e86\u30ea\u30b9\u30c8\u3078",c=e.done?"pink":"blue";return Object(I.jsxs)(s.e,{borderWidth:"1px",p:"4",mt:"4",bg:"white",borderRadius:"md",borderColor:"gray.300",children:[Object(I.jsx)(s.f,{mb:"6",children:e.content}),Object(I.jsxs)(s.b,{alignItems:"center",justifyContent:"flex-end",children:[Object(I.jsx)(k.a,{colorScheme:c,variant:"outline",size:"sm",onClick:function(){return n(e.id,e.done)},children:o}),Object(I.jsx)(k.b,{icon:Object(I.jsx)(u.b,{}),variant:"unstyled","aria-label":"delete",onClick:function(){return r(e.id)}})]})]})},z=function(t){var e=t.title,n=t.as,r=t.fontSize,o=t.todoList,c=t.toggleTodoListItemStatus,a=t.deleteTodoListItem;return Object(I.jsx)(I.Fragment,{children:0!==o.length&&Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(S,{title:e,as:n,fontSize:r,mt:"12"}),Object(I.jsx)(s.d,{w:"full",children:o.map((function(t){return Object(I.jsx)(C,{todo:t,toggleTodoListItemStatus:c,deleteTodoListItem:a},t.id)}))})]})})};var D=function(){var t=function(){var t=Object(r.useState)([]),e=Object(f.a)(t,2),n=e[0],o=e[1];return Object(r.useEffect)((function(){g().then((function(t){o(Object(l.a)(t).reverse())}))}),[]),{todoList:n,toggleTodoListItemStatus:function(t,e){var r=n.find((function(e){return e.id===t})),c=Object(d.a)(Object(d.a)({},r),{},{done:!e});L(t,c).then((function(t){var e=n.map((function(e){return e.id!==t.id?e:t}));o(e)}))},addTodoListItem:function(t){var e={content:t,id:Object(b.a)(),done:!1};return v(e).then((function(t){o([t].concat(Object(l.a)(n)))}))},deleteTodoListItem:function(t){T(t).then((function(t){var e=n.filter((function(e){return e.id!==t}));o(e)}))}}}(),e=t.todoList,n=t.addTodoListItem,o=t.toggleTodoListItemStatus,c=t.deleteTodoListItem,a=Object(r.useRef)(null),i=e.filter((function(t){return!t.done})),j=e.filter((function(t){return t.done}));return Object(I.jsxs)(s.a,{centerContent:!0,p:{base:"4",md:"6"},maxWidth:"3xl",children:[Object(I.jsx)(S,{title:"TODO\u9032\u6357\u7ba1\u7406",as:"h1",fontSize:{base:"2xl",md:"3xl"},mt:"0"}),Object(I.jsx)(y,{placeholder:"ADD TODO",leftIcon:Object(I.jsx)(u.a,{}),buttonText:"TODO\u3092\u8ffd\u52a0",inputEl:a,handleAddTodoListItem:function(){""!==a.current.value&&(n(a.current.value),a.current.value="")}}),Object(I.jsx)(z,{todoList:i,toggleTodoListItemStatus:o,deleteTodoListItem:c,title:"\u672a\u5b8c\u4e86TODO\u30ea\u30b9\u30c8",as:"h2",fontSize:{base:"xl",md:"2xl"}}),Object(I.jsx)(z,{todoList:j,toggleTodoListItemStatus:o,deleteTodoListItem:c,title:"\u5b8c\u4e86TODO\u30ea\u30b9\u30c8",as:"h2",fontSize:{base:"xl",md:"2xl"}})]})},F=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,120)).then((function(e){var n=e.getCLS,r=e.getFID,o=e.getFCP,c=e.getLCP,a=e.getTTFB;n(t),r(t),o(t),c(t),a(t)}))},E=document.getElementById("root");c.a.render(Object(I.jsx)(r.StrictMode,{children:Object(I.jsx)(a.a,{theme:i,children:Object(I.jsx)(D,{})})}),E),F()}},[[118,1,2]]]);
//# sourceMappingURL=main.798e1448.chunk.js.map