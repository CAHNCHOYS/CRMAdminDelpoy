System.register(["./index-legacy-8b0be313.js"],(function(e,t){"use strict";var l,o,a,i,n,r,s,u,c,d,v,p,m,f,b,g,x,y,h,k,w;return{setters:[e=>{l=e.r,o=e.z,a=e.D,i=e.d,n=e.o,r=e.y,s=e.e,u=e.m,c=e.c,d=e.X,v=e.b,p=e.V,m=e.l,f=e.t,b=e.T,g=e.U,x=e.a0,y=e.W,h=e.Y,k=e.C,w=e.k}],execute:function(){e("a",(({tableElements:e,sortField:t,pageName:i,route:n,router:r})=>{const s=l(+n.query.currentPage||1),u=l(10),c=o((()=>Math.ceil(e.value.length/u.value))),d=l(!1),v=o((()=>{const l=e.value.length;let o=(s.value-1)*u.value;var a;o>=l&&l&&(a=Math.ceil(l/u.value),s.value=a,o=(s.value-1)*u.value);let i=o+u.value;const n=e.value.slice(o,i);return d.value?n.sort(((e,l)=>e[t.value]>l[t.value]?-1:1)):n.sort(((e,l)=>e[t.value]>l[t.value]?1:-1))}));return a(s,(()=>{r.push({name:i,query:{...n.query,currentPage:s.value}})})),{currentPage:s,paginatedElements:v,totalPages:c,isInverseSort:d,elemetsPerPage:u,setSortField:e=>{t.value===e?d.value=!d.value:d.value=!1,t.value=e}}})),e("u",(()=>{const e=l(!1),t=l(!1),o=l(!1),a=l(null);return{isAddDialogActive:e,isEditDialogActive:o,isDeleteDialogActive:t,itemToEdit:a,openDialog:(e,l)=>{console.log(e),a.value=e,"edit"===l&&(o.value=!0),"delete"===l&&(t.value=!0)}}}));const t={class:"d-none d-sm-table-row"},D=["onClick"],S=u("th",{class:"text-h6 pa-0 pr-3 pb-3 font-weight-bold text-black text-left"},"Действия",-1),C={class:"d-sm-none d-block font-weight-bold pr-1"},F={class:"text-sm-left text-right"},N={class:"d-sm-table-cell d-flex justify-end h-auto pa-0 py-3"},_={class:"d-flex flex-wrap"},T={key:1,class:"text-center text-h6 text-error font-weight-bold mb-5"};e("_",i({__name:"ElementsTable",props:{items:null,fields:null,currentSortField:null,isInverseSort:{type:Boolean},noDataText:null},emits:["update:currentSortField","openDialog"],setup(e,{emit:l}){const o=(e,t)=>{k.from(e,{duration:.6,opacity:0,y:"-50%",ease:"power1.out",onComplete:t})},a=(e,t)=>{k.to(e,{y:"100%",opacity:0,ease:"expo.out",position:"absolute",visibility:"hidden",duration:.5,onComplete:t})};return(l,i)=>{const k=w("v-icon"),E=w("v-hover"),P=w("v-btn"),A=w("v-tooltip"),j=w("v-table");return e.items.length?(n(),r(j,{key:0},{default:s((()=>[u("tr",t,[(n(!0),c(y,null,d(e.fields,(t=>(n(),c("th",{class:"text-h6 pa-0 pb-3 font-weight-bold text-black text-left",key:t.fieldName,onClick:e=>l.$emit("update:currentSortField",t.fieldName)},[v(E,null,{default:s((({isHovering:l,props:o})=>[u("p",p(o,{class:"pr-6 d-inline-block",style:{position:"relative"}}),[m(f(t.fieldText)+" ",1),b(v(k,{style:x([{position:"absolute",right:"0px",top:"50%",transform:"translate(0, -50%)"},{opacity:l&&e.currentSortField!=t.fieldName?.6:1}]),icon:e.isInverseSort&&e.currentSortField==t.fieldName?"mdi-arrow-up-thin":"mdi-arrow-down-thin"},null,8,["icon","style"]),[[g,e.currentSortField===t.fieldName||l]])],16)])),_:2},1024)],8,D)))),128)),S]),u("tbody",null,[v(h,{onEnter:o,onLeave:a},{default:s((()=>[(n(!0),c(y,null,d(e.items,(t=>(n(),c("tr",{key:t.id,class:"d-sm-table-row d-block"},[(n(!0),c(y,null,d(e.fields,(e=>(n(),c("td",{key:e.fieldName,class:"d-sm-table-cell d-flex justify-space-between pa-0 h-auto py-3"},[u("div",C,f(e.fieldText)+":",1),u("div",F,f(t[e.fieldName]),1)])))),128)),u("td",N,[u("div",_,[v(A,{text:"Удалить",location:"bottom","content-class":"tooltip",transition:"slide-x-transition"},{activator:s((({props:e})=>[v(P,p(e,{variant:"flat",icon:"mdi-trash-can",color:"error",class:"mr-2",onClick:e=>l.$emit("openDialog",t,"delete")}),null,16,["onClick"])])),_:2},1024),v(A,{text:"Редактировать",location:"bottom","content-class":"tooltip",transition:"slide-x-reverse-transition"},{activator:s((({props:e})=>[v(P,p(e,{variant:"flat",icon:"mdi-pencil",color:"info",onClick:e=>l.$emit("openDialog",t,"edit")}),null,16,["onClick"])])),_:2},1024)])])])))),128))])),_:1})])])),_:1})):(n(),c("div",T,f(e.noDataText),1))}}}))}}}));
