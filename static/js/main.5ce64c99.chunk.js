(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{14:function(t,e,n){t.exports={contacts:"Section_contacts__21cnA",phonebook:"Section_phonebook__WZa7H",container:"Section_container__3RGrk",title:"Section_title__1muVk",forChildrens:"Section_forChildrens__r0PtF"}},15:function(t,e,n){t.exports={formComponent:"Input_formComponent__2Rd3f",filterComponent:"Input_filterComponent__2T4Wn",formLabel:"Input_formLabel__2cj0B",formInput:"Input_formInput__3rKpd"}},19:function(t,e,n){t.exports={contactList:"ContactList_contactList__2QWrC",contactItem:"ContactList_contactItem__CkfAB",contactImg:"ContactList_contactImg__2hyQT"}},22:function(t,e,n){t.exports={submitBtn:"Button_submitBtn__SEzpX",btn:"Button_btn__1g5MC"}},33:function(t,e,n){t.exports={form:"FormContacts_form__2_G9q"}},68:function(t,e,n){},69:function(t,e,n){},70:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(18),o=n.n(c),u=n(4),i=n(35),s=n(7),l=n(32),d=n.n(l),b=n(2),p=n(36),f=n(8),j=n(9),m=n(5),h=n.n(m),O=n(11),v=n(13),x=n.n(v);x.a.defaults.baseURL="https://61debee6fb8dae0017c2e232.mockapi.io";var _,g,y,C="/contacts",w=function(){var t=Object(j.a)(h.a.mark((function t(){var e,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get(C);case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),k=function(){var t=Object(j.a)(h.a.mark((function t(e){var n,r,a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.post(C,e);case 2:return n=t.sent,r=n.data,a=Object(O.a)(Object(O.a)({},e),{},{id:r.id}),t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),N=function(){var t=Object(j.a)(h.a.mark((function t(e){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("test"),t.next=3,x.a.delete(C+"/"+e);case 3:return t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),I=Object(s.c)("contacts/getContacts",function(){var t=Object(j.a)(h.a.mark((function t(e,n){var r,a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,w();case 4:return a=t.sent,t.abrupt("return",a);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",r(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),L=Object(s.c)("contacts/addContact",function(){var t=Object(j.a)(h.a.mark((function t(e,n){var r,a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,k(e);case 4:return a=t.sent,t.abrupt("return",a);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",r(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),A=Object(s.c)("contacts/deleteContact",function(){var t=Object(j.a)(h.a.mark((function t(e,n){var r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,N(e);case 4:return t.abrupt("return",e);case 7:return t.prev=7,t.t0=t.catch(1),t.abrupt("return",r(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,n){return t.apply(this,arguments)}}()),S=Object(s.b)("filterContacts"),B=Object(s.d)([],(_={},Object(b.a)(_,I.fulfilled,(function(t,e){return e.payload})),Object(b.a)(_,L.fulfilled,(function(t,e){var n=e.payload;return[].concat(Object(p.a)(t),[n])})),Object(b.a)(_,A.fulfilled,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),_)),F=Object(s.d)("idle",(g={},Object(b.a)(g,I.pending,(function(){return"pending"})),Object(b.a)(g,I.fulfilled,(function(){return"resolved"})),Object(b.a)(g,I.rejected,(function(){return"rejected"})),Object(b.a)(g,L.pending,(function(){return"pending"})),Object(b.a)(g,L.fulfilled,(function(){return"resolved"})),Object(b.a)(g,L.rejected,(function(){return"rejected"})),Object(b.a)(g,A.pending,(function(){return"pending"})),Object(b.a)(g,A.fulfilled,(function(){return"resolved"})),Object(b.a)(g,A.rejected,(function(){return"rejected"})),g)),z=Object(s.d)(null,(y={},Object(b.a)(y,I.rejected,(function(t,e){return e.payload})),Object(b.a)(y,I.pending,(function(){return null})),Object(b.a)(y,L.rejected,(function(t,e){return e.payload})),Object(b.a)(y,L.pending,(function(){return null})),Object(b.a)(y,A.rejected,(function(t,e){return e.payload})),Object(b.a)(y,A.pending,(function(){return null})),y)),V=Object(s.d)("",Object(b.a)({},S.type,(function(t,e){return e.payload}))),E=Object(f.b)({items:B,filter:V,status:F,error:z}),Z=Object(s.a)({reducer:{contacts:E},middleware:function(t){return t().concat(d.a)},devTools:!1}),P=n(14),W=n.n(P),J=n(1),M=function(t){var e=t.title,n=t.children,r=t.classEl;return Object(J.jsx)("section",{className:W.a[r],children:Object(J.jsxs)("div",{className:W.a.container,children:[Object(J.jsx)("h2",{className:W.a.title,children:e}),Object(J.jsx)("div",{className:W.a.forChildrens,children:n})]})})},T=function(t){return t.contacts.filter},q=function(t){return t.contacts.items},D=n(37),R=n(15),G=n.n(R),Q=Object(D.a)(),$=function(t){var e=t.labelName,n=t.value,r=t.onChange,a=t.type,c=t.name,o=t.pattern,u=t.title,i=t.placeholderValue;return Object(J.jsxs)("div",{className:"filter"===c?G.a.filterComponent:G.a.formComponent,children:[Object(J.jsxs)("label",{htmlFor:Q,className:G.a.formLabel,children:[e,":"]}),Object(J.jsx)("input",{className:G.a.formInput,id:Q,value:n,onChange:r,type:a,name:c,pattern:o,title:u,placeholder:i})]})},H=$;$.defaultProps={type:"text",placeholder:void 0};var K=n(22),U=n.n(K),X=function(t){var e=t.type,n=t.text,r=t.onClick;return Object(J.jsx)("button",{onClick:r||void 0,type:e,className:"submit"===e?U.a.submitBtn:U.a.btn,children:n})},Y=X;X.defaultProps={type:"button",onClick:void 0};var tt=n(33),et=n.n(tt),nt=function(){var t=Object(u.b)(),e=Object(u.c)(q);return Object(J.jsx)(J.Fragment,{children:Object(J.jsxs)("form",{onSubmit:function(n){n.preventDefault();var r=new FormData(n.currentTarget),a={};r.forEach((function(t,e){return a[e]=t}));var c=a.name,o=a.number;if(!c||!o)return alert("Please fill the form");!function(n){var r=n.name,a=r.toLowerCase(),c=e.find((function(t){return t.name.toLowerCase()===a}));if(c)return alert("".concat(r," is already in your contacts!"));t(L(n))}(a),function(){var t=document.querySelector('input[name="name"]'),e=document.querySelector('input[name="number"]');t.value="",e.value=""}()},className:et.a.form,children:[Object(J.jsx)(H,{labelName:"Name",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholderValue:"Jane Doe"}),Object(J.jsx)(H,{labelName:"Number",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholderValue:"+38-099-123-45-67"}),Object(J.jsx)(Y,{type:"submit",text:"Add contact"})]})})},rt=function(){var t=Object(u.c)(T),e=Object(u.b)();return Object(J.jsx)(J.Fragment,{children:Object(J.jsx)(H,{labelName:"Find contact by name",value:t,onChange:function(t){var n=t.target.value;e(S(n))},type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholderValue:"Search"})})},at=n(34),ct=n.n(at),ot=n(19),ut=n.n(ot),it=function(){var t=Object(u.c)(T),e=Object(u.c)(q),n=Object(u.b)();return Object(J.jsx)("ul",{className:ut.a.contactList,children:function(){var n=t.toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))}().map((function(t){var e=t.id,r=t.name,a=t.number;return Object(J.jsxs)("li",{className:ut.a.contactItem,children:[Object(J.jsx)("img",{src:ct.a.generate_avatar(),alt:"img",width:"60",className:ut.a.contactImg}),Object(J.jsxs)("div",{children:[Object(J.jsxs)("p",{children:[r,":"]}),Object(J.jsx)("p",{children:a})]}),Object(J.jsx)(Y,{type:"button",text:"\ud83d\uddd9",onClick:function(){return n(A(e))}})]},e)}))})},st=Object(r.memo)(it),lt=(n(68),function(){var t=Object(u.b)();return Object(r.useEffect)((function(){t(I())}),[t]),Object(J.jsxs)(J.Fragment,{children:[Object(J.jsxs)(M,{title:"Phonebook",classEl:"phonebook",children:[Object(J.jsx)(nt,{}),Object(J.jsx)(rt,{})]}),Object(J.jsx)(M,{title:"Contacts",classEl:"contacts",children:Object(J.jsx)(st,{})})]})});n(69);o.a.render(Object(J.jsx)(a.a.StrictMode,{children:Object(J.jsx)(u.a,{store:Z,children:Object(J.jsx)(i.a,{children:Object(J.jsx)(lt,{})})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.5ce64c99.chunk.js.map