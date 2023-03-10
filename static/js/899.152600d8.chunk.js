"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[899],{1899:function(t,c,n){n.r(c),n.d(c,{default:function(){return b}});var e=n(2791),s=n(1087),a=n(7689),i=n(4942),r=n(5861),o=n(9439),h=n(4687),l=n.n(h),_=n(9434),u=n(1449),d=n(2595),v="SvgIconTrash_icon__t6cpd",f=n(184),m=function(t){return"trash"===t.id?(0,f.jsxs)("svg",{className:v,version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",children:[(0,f.jsx)("title",{children:"trash"}),(0,f.jsx)("path",{d:"M29.98 6.819c-0.096-1.57-1.387-2.816-2.98-2.816h-3v-1.002c0-1.657-1.344-3-3-3h-10c-1.657 0-3 1.343-3 3v1.001h-3c-1.595 0-2.885 1.246-2.981 2.816h-0.019v2.183c0 1.104 0.896 2 2 2v0 17c0 2.209 1.791 4 4 4h16c2.209 0 4-1.791 4-4v-17c1.104 0 2-0.896 2-2v-2.182h-0.020zM10 3.002c0-0.553 0.447-1 1-1h10c0.553 0 1 0.447 1 1v1h-12v-1zM26 28.002c0 1.102-0.898 2-2 2h-16c-1.103 0-2-0.898-2-2v-17h20v17zM28 8.001v1h-24v-1.999c0-0.553 0.447-1 1-1h22c0.553 0 1 0.447 1 1v0.999zM9 28.006h2c0.553 0 1-0.447 1-1v-13c0-0.553-0.447-1-1-1h-2c-0.553 0-1 0.447-1 1v13c0 0.553 0.447 1 1 1zM9 14.005h2v13h-2v-13zM15 28.006h2c0.553 0 1-0.447 1-1v-13c0-0.553-0.447-1-1-1h-2c-0.553 0-1 0.447-1 1v13c0 0.553 0.447 1 1 1zM15 14.005h2v13h-2v-13zM21 28.006h2c0.553 0 1-0.447 1-1v-13c0-0.553-0.447-1-1-1h-2c-0.553 0-1 0.447-1 1v13c0 0.553 0.447 1 1 1zM21 14.005h2v13h-2v-13z"})]}):(0,f.jsx)("svg",{})},x=n(7402),j={loader:"ContactList_loader__eRJ1r",contactList:"ContactList_contactList__lfyFV",contactList__item:"ContactList_contactList__item__JL2fq",contactList__number:"ContactList_contactList__number__0tXaR",contactList__deleteBtn:"ContactList_contactList__deleteBtn__GAFMQ"};function p(){var t=(0,e.useState)(!0),c=(0,o.Z)(t,2),n=c[0],s=c[1],a=(0,e.useState)({}),h=(0,o.Z)(a,2),v=h[0],p=h[1],L=(0,_.v9)(u.F),w=(0,_.I0)();(0,e.useEffect)((function(){p(!1),w((0,d.CL)()),s(!1)}),[w]);var b=function(){var t=(0,r.Z)(l().mark((function t(c){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p((0,i.Z)({},c,!0)),t.next=3,w((0,d.in)(c));case 3:p((0,i.Z)({},c,!1));case 4:case"end":return t.stop()}}),t)})));return function(c){return t.apply(this,arguments)}}();return(0,f.jsx)(f.Fragment,{children:n?(0,f.jsx)(x.Z,{width:"50",height:"50"}):(0,f.jsx)("ul",{className:j.contactList,children:L.map((function(t){var c=t.id,n=t.name,e=t.number;return(0,f.jsxs)("li",{className:j.contactList__item,children:[(0,f.jsxs)("p",{className:j.contactList__name,children:[n,": "]}),(0,f.jsx)("p",{className:j.contactList__number,children:e}),v[c]?(0,f.jsx)("div",{className:j.loader,children:(0,f.jsx)(x.Z,{width:"16",height:"16"})}):(0,f.jsx)("button",{className:j.contactList__deleteBtn,onClick:function(){b(c)},children:(0,f.jsx)(m,{id:"trash"})})]},c)}))})})}var L=n(2270),w={title:"ContactsPage_title__wFrcX",contacts:"ContactsPage_contacts__4uxlm",btn_wrapper:"ContactsPage_btn_wrapper__gB-pq",link:"ContactsPage_link__NY5Cv"},b=function(){return(0,f.jsxs)("div",{className:w.contacts,children:[(0,f.jsxs)("div",{className:w.btn_wrapper,children:[(0,f.jsx)(s.rU,{to:"add-contact",className:w.link,children:(0,f.jsx)(L.Z,{className:w.button,children:"Add contact"})}),(0,f.jsx)(s.rU,{to:"filter",className:w.link,children:(0,f.jsx)(L.Z,{className:w.btn,children:"Find contact"})})]}),(0,f.jsx)(e.Suspense,{children:(0,f.jsx)(a.j3,{})}),(0,f.jsx)("h1",{className:w.title,children:"Contacts"}),(0,f.jsx)(p,{})]})}},1449:function(t,c,n){n.d(c,{F:function(){return s},z:function(){return e}});var e=function(t){return t.filter},s=function(t){var c=t.filter.toLocaleLowerCase();return t.contacts.items.filter((function(t){return t.name.toLocaleLowerCase().includes(c)}))}},2270:function(t,c,n){n.d(c,{Z:function(){return a}});var e="Button_button__wqjY+",s=n(184),a=function(t){var c=t.children,n=t.type,a=void 0===n?"submit":n;return(0,s.jsx)("button",{type:a,className:e,children:c})}}}]);
//# sourceMappingURL=899.152600d8.chunk.js.map