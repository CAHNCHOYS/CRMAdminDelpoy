System.register(["./index-legacy-0d6d964e.js"],(function(e,t){"use strict";var l,a,o,i,n,r,s,d,u,c,m,p,v,f,x,g,b,h,y,k,w,S,F,D,N,C,T;return{setters:[e=>{l=e.r,a=e.P,o=e.W,i=e.d,n=e.ai,r=e.o,s=e.O,d=e.e,u=e.q,c=e.c,m=e.aq,p=e.b,v=e.an,f=e.p,x=e.t,g=e.al,b=e.am,h=e.E,y=e.av,k=e.ao,w=e.ap,S=e.K,F=e.aw,D=e.F,N=e.ar,C=e.ax,T=e.T}],execute:function(){e("a",(({tableElements:e,sortField:t,pageName:i,route:n,router:r})=>{const s=l(+n.query.currentPage||1),d=l(10),u=a((()=>Math.ceil(e.value.length/d.value))),c=l(!1),m=a((()=>{const l=e.value.length;let a=(s.value-1)*d.value;var o;a>=l&&l&&(o=Math.ceil(l/d.value),s.value=o,a=(s.value-1)*d.value);let i=a+d.value;const n=e.value.slice(a,i);return c.value?n.sort(((e,l)=>e[t.value]>l[t.value]?-1:1)):n.sort(((e,l)=>e[t.value]>l[t.value]?1:-1))}));return o(s,(()=>{r.push({name:i,query:{...n.query,currentPage:s.value}})})),{currentPage:s,paginatedElements:m,totalPages:u,isInverseSort:c,elementsPerPageCount:d,setSortField:e=>{t.value===e?c.value=!c.value:c.value=!1,t.value=e}}})),e("u",(()=>{const e=l(!1),t=l(!1),a=l(!1),o=l(null);return{isAddDialogActive:e,isEditDialogActive:a,isDeleteDialogActive:t,itemToEdit:o,openDialog:(e,l)=>{o.value=e,"edit"===l&&(a.value=!0),"delete"===l&&(t.value=!0)}}}));const t={class:"d-sm-table-row d-none"},_=["onClick"],E=u("th",{class:"text-h6 pa-0 pr-3 pb-3 font-weight-bold text-black text-left"},"Действия",-1),P={class:"d-sm-none d-table-row"},q=["colspan"],A={class:"d-sm-none d-block font-weight-bold flex-grow-1 pr-1"},I={class:"text-sm-left text-right"},$={class:"d-sm-table-cell d-flex justify-end h-auto pa-0 py-3"},j={class:"d-flex flex-wrap"},M={key:1,class:"text-center text-h6 text-error font-weight-bold mb-5"};e("_",i({__name:"ElementsTable",props:{items:null,fields:null,currentSortField:null,isInverseSort:{type:Boolean},noDataText:null},emits:["updateSortField","openDialog"],setup(e,{emit:l}){const{xs:a}=n(),o=(e,t)=>{a.value||T.from(e,{duration:.6,opacity:0,y:"-50%",ease:"power1.out",onComplete:t})};return(a,i)=>e.items.length?(r(),s(C,{key:0},{default:d((()=>[u("tr",t,[(r(!0),c(w,null,m(e.fields,(t=>(r(),c("th",{class:"text-h6 pa-0 pb-3 font-weight-bold text-black text-left",key:t.fieldName,onClick:e=>a.$emit("updateSortField",t.fieldName)},[p(k,null,{default:d((({isHovering:l,props:a})=>[u("p",v(a,{class:"pr-6 d-inline-block",style:{position:"relative"}}),[f(x(t.fieldText)+" ",1),g(p(h,{style:y([{position:"absolute",right:"0px",top:"50%",transform:"translate(0, -50%)"},{opacity:l&&e.currentSortField!=t.fieldName?.6:1}]),icon:e.isInverseSort&&e.currentSortField==t.fieldName?"mdi-arrow-up-thin":"mdi-arrow-down-thin"},null,8,["icon","style"]),[[b,e.currentSortField===t.fieldName||l]])],16)])),_:2},1024)],8,_)))),128)),E]),u("tr",P,[u("td",{colspan:e.fields.length+1},[p(S,{items:e.fields,"item-title":"fieldText","item-value":"fieldName","model-value":e.currentSortField,"onUpdate:modelValue":i[0]||(i[0]=e=>l("updateSortField",e)),variant:"underlined",clearable:!1,label:"Сортировать по"},null,8,["items","model-value"])],8,q)]),u("tbody",null,[p(N,{onEnter:o},{default:d((()=>[(r(!0),c(w,null,m(e.items,(t=>(r(),c("tr",{key:t.id,class:"d-sm-table-row d-block"},[(r(!0),c(w,null,m(e.fields,(e=>(r(),c("td",{key:e.fieldName,class:"d-sm-table-cell d-flex pa-0 h-auto py-3"},[u("div",A,x(e.fieldText)+": ",1),u("div",I,x(t[e.fieldName]),1)])))),128)),u("td",$,[u("div",j,[p(F,{text:"Удалить",location:"bottom","content-class":"tooltip",transition:"slide-x-transition"},{activator:d((({props:e})=>[p(D,v(e,{variant:"flat",icon:"mdi-trash-can",color:"error",class:"mr-2",onClick:e=>a.$emit("openDialog",t,"delete")}),null,16,["onClick"])])),_:2},1024),p(F,{text:"Редактировать",location:"bottom","content-class":"tooltip",transition:"slide-x-reverse-transition"},{activator:d((({props:e})=>[p(D,v(e,{variant:"flat",icon:"mdi-pencil",color:"info",onClick:e=>a.$emit("openDialog",t,"edit")}),null,16,["onClick"])])),_:2},1024)])])])))),128))])),_:1})])])),_:1})):(r(),c("div",M,x(e.noDataText||"Ничего не найдено"),1))}}))}}}));
