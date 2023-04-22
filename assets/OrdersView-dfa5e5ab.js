import{r as P,D as he,$ as re,i as ae,h as se,d as le,E as me,R as pe,S as ne,v as oe,y as c,e,j as de,k as r,o as i,b as t,l as m,n as ve,f as o,p as O,t as z,m as Y,Q as ce,u as Ve,z as ke,c as De,x as X,g as Oe}from"./index-6bc77bae.js";import{u as xe,a as we,_ as Me}from"./ElementsTable.vue_vue_type_script_setup_true_lang-f962e500.js";import{u as te}from"./alert-ad4a9987.js";import{u as _e,a as fe,b as Q}from"./useFormSchemas-2bba9048.js";const $e=(d,M,p)=>{const $=te(),b=P(!1),v=P(!1),y=P(!1),S=P([]),_=P("2023-01-01"),u=P("2024-01-01"),A=P(""),h=P(""),q=()=>{M.push({name:"orders-page",query:{startDate:_.value,endDate:u.value,customerName:A.value,productName:h.value}})},g=()=>{_.value="2023-01-01",u.value="2024-01-01",A.value="",h.value="",v.value=!1,S.value=[],M.push({name:"orders-page",query:{}})},x=async()=>{try{if(!d.query.startDate&&!d.query.endDate)return;y.value=!0;const{data:f}=await re.getSerachedOrders({userId:p,product:d.query.productName,customer:d.query.customerName,startDate:d.query.startDate,endDate:d.query.endDate});S.value=f.orders,v.value=!0}catch(f){ae(f)?$.showMessage("error",se(f)):$.showMessage("error","Ошибка при поиске заказов")}finally{y.value=!1}};return he([()=>d.query.startDate,()=>d.query.endDate,()=>d.query.customerName,()=>d.query.productName],async()=>{!d.query.startDate&&!d.query.endDate||x()}),{isSearchLoading:y,isSearchFormActive:b,isSearchActive:v,startDate:_,endDate:u,customerName:A,productName:h,searchedOrders:S,resetSearch:g,addSearchQuery:q,searchOrders:x}},Ce=Y("span",{class:"px-5 text-wrap"},"Очистить ",-1),Ue=le({__name:"OrdersAddDialog",props:{isOpened:{type:Boolean}},emits:["closeDialog"],setup(d,{emit:M}){const p=me(),$=pe(),b=ne(),v=te(),{userProducts:y,productsErrorMessage:S}=oe(p),{customers:_,customersErrorMessage:u}=oe($),{userOrderSchema:A}=_e(),{handleSubmit:h,isSubmitting:q,resetForm:g}=fe({validationSchema:A}),{value:x,errorMessage:f}=Q("customerId"),{value:F,errorMessage:L}=Q("productId"),{value:G,errorMessage:H}=Q("productCount"),{value:T,errorMessage:Z}=Q("date"),ee=de(),J=h(async C=>{var n;try{const{data:I}=await re.addOrder(C);C.date=C.date.split("-").reverse().join("-"),b.addOrder({...C,...I}),v.showMessage("success","Заказ был успешно добавлен!"),g()}catch(I){if(ae(I)){if(((n=I.response)==null?void 0:n.status)===401){ee.push({name:"login-page",query:{isExpiredToken:"true",redirectedFrom:"orders-page"}});return}v.showMessage("error",se(I))}else v.showMessage("error","Ошибка при добавлении заказа")}finally{M("closeDialog")}});return(C,n)=>{const I=r("v-card-title"),w=r("v-autocomplete"),s=r("v-alert-title"),U=r("v-alert"),K=r("v-sheet"),V=r("v-col"),a=r("v-text-field"),R=r("v-btn"),E=r("v-row"),B=r("v-form"),k=r("v-card-actions"),j=r("v-card"),W=r("v-dialog");return i(),c(W,{"model-value":d.isOpened,"onUpdate:modelValue":n[6]||(n[6]=D=>C.$emit("closeDialog")),width:"auto",scrollable:"",transition:"dialog-bottom-transition"},{default:e(()=>[t(j,{width:"450",color:"white",class:"pa-4"},{default:e(()=>[t(I,{class:"font-weight-bold text-h6 mb-3"},{default:e(()=>[m(" Добавление заказа ")]),_:1}),t(k,null,{default:e(()=>[t(B,{onSubmit:ve(o(J),["prevent"])},{default:e(()=>[t(E,null,{default:e(()=>[t(V,{cols:"12"},{default:e(()=>[o(u)?(i(),c(K,{key:1},{default:e(()=>[t(U,{type:"error",border:"end",variant:"outlined",class:"pa-2"},{default:e(()=>[t(s,{class:"text-h6"},{default:e(()=>[m(z(o(u)),1)]),_:1})]),_:1})]),_:1})):(i(),c(w,{key:0,modelValue:o(x),"onUpdate:modelValue":n[0]||(n[0]=D=>O(x)?x.value=D:null),"error-messages":o(f),label:"Клиент",items:o(_),"item-title":"fullName","item-value":"id","no-data-text":"Клиенты не найдены"},null,8,["modelValue","error-messages","items"]))]),_:1}),t(V,{cols:"12"},{default:e(()=>[o(S)?(i(),c(K,{key:1},{default:e(()=>[t(U,{type:"error",border:"end",variant:"outlined",class:"pa-2"},{default:e(()=>[t(s,{class:"text-h6"},{default:e(()=>[m(z(o(S)),1)]),_:1})]),_:1})]),_:1})):(i(),c(w,{key:0,modelValue:o(F),"onUpdate:modelValue":n[1]||(n[1]=D=>O(F)?F.value=D:null),"error-messages":o(L),label:"Товар",items:o(y),"item-title":"name","item-value":"id","no-data-text":"Товары не найдены"},null,8,["modelValue","error-messages","items"]))]),_:1}),t(V,{cols:"12"},{default:e(()=>[t(a,{type:"number",modelValue:o(G),"onUpdate:modelValue":n[2]||(n[2]=D=>O(G)?G.value=D:null),modelModifiers:{number:!0},label:"Количество товара","error-messages":o(H)},null,8,["modelValue","error-messages"])]),_:1}),t(V,{cols:"12"},{default:e(()=>[t(a,{modelValue:o(T),"onUpdate:modelValue":n[3]||(n[3]=D=>O(T)?T.value=D:null),"error-messages":o(Z),type:"date"},null,8,["modelValue","error-messages"])]),_:1}),t(V,{cols:"12"},{default:e(()=>[t(E,null,{default:e(()=>[t(V,{sm:"auto",cols:"12"},{default:e(()=>[t(R,{color:"green-darken-4",variant:"flat",type:"submit",block:"",loading:o(q)},{default:e(()=>[m(" Добавить ")]),_:1},8,["loading"])]),_:1}),t(V,{sm:"5",cols:"6"},{default:e(()=>[t(R,{color:"error",variant:"flat",onClick:n[4]||(n[4]=D=>o(g)()),block:""},{default:e(()=>[Ce]),_:1})]),_:1}),t(V,{sm:"auto",cols:"6"},{default:e(()=>[t(R,{color:"blue-darken-4",block:"",variant:"flat",onClick:n[5]||(n[5]=D=>C.$emit("closeDialog"))},{default:e(()=>[m(" Отмена ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1},8,["model-value"])}}}),Ee={class:"text-h6"},Ne={class:"text-error"},Ae=le({__name:"OrdersDeleteDialog",props:{isOpened:{type:Boolean},order:null,isSearchActive:{type:Boolean}},emits:["closeDialog","updateSearchOrders"],setup(d,{emit:M}){const p=d,$=P(!1),b=te(),v=ne(),y=de(),S=async()=>{var _;try{$.value=!0,await re.deleteOrder(p.order.id),v.deleteOrder(p.order.id),p.isSearchActive&&M("updateSearchOrders"),b.showMessage("success","Заказ был успешно удален!")}catch(u){if(ae(u)){if(((_=u.response)==null?void 0:_.status)===401){y.push({name:"login-page",query:{isExpiredToken:"true",redirectedFrom:"orders-page"}});return}b.showMessage("error",se(u))}else b.showMessage("error","Ошибка при удалении заказа")}finally{$.value=!1,M("closeDialog")}};return(_,u)=>{const A=r("v-card-title"),h=r("v-card-text"),q=r("v-btn"),g=r("v-card-actions"),x=r("v-card"),f=r("v-dialog");return i(),c(f,{scrollable:"",width:"auto","model-value":d.isOpened,"onUpdate:modelValue":u[1]||(u[1]=F=>_.$emit("closeDialog")),persistent:""},{default:e(()=>[t(x,{width:"450",elevation:"3",class:"pa-4"},{default:e(()=>[t(A,{class:"font-weight-bold text-h6 mb-4 pa-0"},{default:e(()=>[m("Удаление заказа")]),_:1}),t(h,{class:"mb-4 pa-0"},{default:e(()=>[Y("p",Ee,[m(" Вы уверены что хотите удалить заказ за "+z(d.order.date)+" клиента ",1),Y("span",Ne,z(d.order.customerFullName),1),m(" ? ")])]),_:1}),t(g,{class:"pa-0"},{default:e(()=>[t(q,{onClick:u[0]||(u[0]=F=>_.$emit("closeDialog")),height:"40",color:"blue-darken-4",variant:"flat"},{default:e(()=>[m(" Нет ")]),_:1}),t(q,{height:"40",color:"error",variant:"flat",loading:$.value,onClick:S},{default:e(()=>[m("Да")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["model-value"])}}}),qe=le({__name:"OrdersEditDialog",props:{isOpened:{type:Boolean},order:null,isSearchActive:{type:Boolean}},emits:["closeDialog","updateSearchOrders"],setup(d,{emit:M}){const p=d,$=ce(()=>{const s=p.order.date.split("-");return s[2]+"-"+s[1]+"-"+s[0]}),b=ce(()=>({productCount:p.order.productCount,productId:p.order.productId,customerId:p.order.customerId,date:$.value})),{userOrderSchema:v}=_e(),{isSubmitting:y,resetForm:S,handleSubmit:_}=fe({validationSchema:v,initialValues:b}),{value:u,errorMessage:A}=Q("customerId"),{value:h,errorMessage:q}=Q("productId"),{value:g,errorMessage:x}=Q("productCount"),{value:f,errorMessage:F}=Q("date"),L=pe(),G=me(),H=ne(),T=te(),Z=de(),{customers:ee,customersErrorMessage:J}=oe(L),{userProducts:C,productsErrorMessage:n}=oe(G),I=_(async w=>{var s;try{const{data:U}=await re.updateOrder(w,p.order.id);w.date=w.date.split("-").reverse().join("-"),H.updateOrder({...w,...U}),p.isSearchActive&&M("updateSearchOrders"),T.showMessage("success","Заказ был успешно обновлен")}catch(U){if(ae(U)){if(((s=U.response)==null?void 0:s.status)===401){Z.push({name:"login-page",query:{isExpiredToken:"true",redirectedFrom:"orders-page"}});return}T.showMessage("error",se(U))}else T.showMessage("error","Ошибка при добавлении заказа")}finally{M("closeDialog"),S()}});return(w,s)=>{const U=r("v-card-title"),K=r("v-autocomplete"),V=r("v-alert-title"),a=r("v-alert"),R=r("v-sheet"),E=r("v-col"),B=r("v-text-field"),k=r("v-btn"),j=r("v-row"),W=r("v-form"),D=r("v-card-actions"),ue=r("v-card"),ie=r("v-dialog");return i(),c(ie,{"model-value":d.isOpened,"onUpdate:modelValue":s[5]||(s[5]=N=>w.$emit("closeDialog")),width:"auto",scrollable:"",transition:"dialog-bottom-transition"},{default:e(()=>[t(ue,{width:"450",color:"white",class:"pa-4"},{default:e(()=>[t(U,{class:"font-weight-bold text-h6 mb-3"},{default:e(()=>[m(" Редактирование заказа ")]),_:1}),t(D,null,{default:e(()=>[t(W,{onSubmit:ve(o(I),["prevent"])},{default:e(()=>[t(j,null,{default:e(()=>[t(E,{cols:"12"},{default:e(()=>[o(J)?(i(),c(R,{key:1},{default:e(()=>[t(a,{type:"error",border:"end",variant:"outlined",class:"pa-2"},{default:e(()=>[t(V,{class:"text-h6"},{default:e(()=>[m(z(o(J)),1)]),_:1})]),_:1})]),_:1})):(i(),c(K,{key:0,modelValue:o(u),"onUpdate:modelValue":s[0]||(s[0]=N=>O(u)?u.value=N:null),"error-messages":o(A),label:"Клиент",items:o(ee),"item-title":"fullName","item-value":"id","no-data-text":"Клиенты не найдены"},null,8,["modelValue","error-messages","items"]))]),_:1}),t(E,{cols:"12"},{default:e(()=>[o(n)?(i(),c(R,{key:1},{default:e(()=>[t(a,{type:"error",border:"end",variant:"outlined",class:"pa-2"},{default:e(()=>[t(V,{class:"text-h6"},{default:e(()=>[m(z(o(n)),1)]),_:1})]),_:1})]),_:1})):(i(),c(K,{key:0,modelValue:o(h),"onUpdate:modelValue":s[1]||(s[1]=N=>O(h)?h.value=N:null),"error-messages":o(q),label:"Товар",items:o(C),"item-title":"name","item-value":"id","no-data-text":"Товары не найдены"},null,8,["modelValue","error-messages","items"]))]),_:1}),t(E,{cols:"12"},{default:e(()=>[t(B,{modelValue:o(g),"onUpdate:modelValue":s[2]||(s[2]=N=>O(g)?g.value=N:null),modelModifiers:{number:!0},label:"Количество товара","error-messages":o(x),type:"number"},null,8,["modelValue","error-messages"])]),_:1}),t(E,{cols:"12"},{default:e(()=>[t(B,{modelValue:o(f),"onUpdate:modelValue":s[3]||(s[3]=N=>O(f)?f.value=N:null),"error-messages":o(F),type:"date"},null,8,["modelValue","error-messages"])]),_:1}),t(E,{cols:"12"},{default:e(()=>[t(j,null,{default:e(()=>[t(E,{sm:"auto",cols:"12"},{default:e(()=>[t(k,{color:"green-darken-4",variant:"flat",type:"submit",block:"",loading:o(y)},{default:e(()=>[m(" Добавить ")]),_:1},8,["loading"])]),_:1}),t(E,{sm:"auto",cols:"12"},{default:e(()=>[t(k,{color:"blue-darken-4",block:"",variant:"flat",onClick:s[4]||(s[4]=N=>w.$emit("closeDialog"))},{default:e(()=>[m(" Отмена ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1},8,["model-value"])}}}),Fe={class:"text-h6"},Te=Y("h2",{class:"title text-h2 mb-5"},"Заказы",-1),je=le({__name:"OrdersView",setup(d){const M=P([{fieldText:"Клиент",fieldName:"customerFullName"},{fieldText:"Товар",fieldName:"productName"},{fieldText:"Количество товара",fieldName:"productCount"},{fieldText:"Дата",fieldName:"date"}]),p=P("customerFullName"),$=Ve(),b=ne(),v=te(),{itemToEdit:y,isAddDialogActive:S,isEditDialogActive:_,isDeleteDialogActive:u,openDialog:A}=xe(),h=Oe(),q=de(),{isSearchFormActive:g,isSearchLoading:x,startDate:f,endDate:F,isSearchActive:L,searchedOrders:G,customerName:H,productName:T,addSearchQuery:Z,resetSearch:ee,searchOrders:J}=$e(h,q,$.currentUser.id),C=ke(()=>L.value?G.value:b.orders),{currentPage:n,paginatedElements:I,isInverseSort:w,elemetsPerPage:s,totalPages:U,setSortField:K}=we({tableElements:C,pageName:"orders-page",sortField:p,route:h,router:q});return(V,a)=>{const R=r("v-snackbar"),E=r("TableActions"),B=r("v-text-field"),k=r("v-col"),j=r("v-row"),W=r("v-btn"),D=r("v-expand-transition"),ue=r("v-card-title"),ie=r("v-alert"),N=r("v-sheet"),ge=r("v-progress-circular"),be=r("v-pagination"),ye=r("v-card");return i(),De("div",null,[t(R,{modelValue:o(v).isMessageShown,"onUpdate:modelValue":a[0]||(a[0]=l=>o(v).isMessageShown=l),"max-width":500,color:o(v).messageType},{default:e(()=>[Y("p",Fe,z(o(v).messageText),1)]),_:1},8,["modelValue","color"]),Te,t(ye,{elevation:"3",color:"white",class:"pa-5 rounded-lg mx-sm-0 mx-n5"},{default:e(()=>[o(b).ordersErrorMessage?X("",!0):(i(),c(ue,{key:0,class:"pa-0"},{default:e(()=>[t(E,{count:o(s),"onUpdate:count":[a[1]||(a[1]=l=>O(s)?s.value=l:null),a[2]||(a[2]=l=>s.value=l)],onToggleAddDialog:a[3]||(a[3]=l=>S.value=!0),onToggleSearch:a[4]||(a[4]=l=>g.value=!o(g)),"is-badge-active":!!(V.$route.query.startDate||V.$route.query.endDate)},{default:e(()=>[m(" Все заказы ")]),_:1},8,["count","is-badge-active"]),t(D,null,{default:e(()=>[o(g)?(i(),c(j,{key:0,class:"mb-5"},{default:e(()=>[t(k,{cols:"6"},{default:e(()=>[t(j,null,{default:e(()=>[t(k,{cols:"6"},{default:e(()=>[t(B,{modelValue:o(f),"onUpdate:modelValue":a[5]||(a[5]=l=>O(f)?f.value=l:null),type:"date",label:"Начальная дата",clearable:!1},null,8,["modelValue"])]),_:1}),t(k,{cols:"6"},{default:e(()=>[t(B,{modelValue:o(F),"onUpdate:modelValue":a[6]||(a[6]=l=>O(F)?F.value=l:null),type:"date",label:"Конечная дата",clearable:!1},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),t(k,{cols:"6"},{default:e(()=>[t(B,{modelValue:o(H),"onUpdate:modelValue":a[7]||(a[7]=l=>O(H)?H.value=l:null),label:"Клиент"},null,8,["modelValue"])]),_:1}),t(k,{cols:"6"},{default:e(()=>[t(B,{modelValue:o(T),"onUpdate:modelValue":a[8]||(a[8]=l=>O(T)?T.value=l:null),label:"Товар"},null,8,["modelValue"])]),_:1}),t(k,{cols:"6"},{default:e(()=>[t(j,null,{default:e(()=>[t(k,{cols:"auto"},{default:e(()=>[t(W,{onClick:o(Z),variant:"flat",color:"green-darken-3"},{default:e(()=>[m(" Искать ")]),_:1},8,["onClick"])]),_:1}),t(k,{cols:"auto"},{default:e(()=>[t(W,{onClick:o(ee),variant:"flat",color:"red-darken-4"},{default:e(()=>[m(" Сбросить поиск ")]),_:1},8,["onClick"])]),_:1}),t(k,{cols:"auto"},{default:e(()=>[t(W,{variant:"flat",color:"blue-darken-4",onClick:a[9]||(a[9]=l=>g.value=!1)},{default:e(()=>[m(" Закрыть ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):X("",!0)]),_:1})]),_:1})),o(b).ordersErrorMessage?(i(),c(N,{key:1},{default:e(()=>[t(ie,{variant:"outlined",border:"end",type:"error"},{default:e(()=>[Y("p",null,z(o(b).ordersErrorMessage),1)]),_:1})]),_:1})):o(x)?X("",!0):(i(),c(Me,{key:2,items:o(I),fields:M.value,"is-inverse-sort":o(w),"no-data-text":"Заказы не найдены","current-sort-field":p.value,"onUpdate:currentSortField":[a[10]||(a[10]=l=>p.value=l),a[11]||(a[11]=l=>o(K)(l))],onOpenDialog:a[12]||(a[12]=(l,Se)=>o(A)(l,Se))},null,8,["items","fields","is-inverse-sort","current-sort-field"])),o(x)?(i(),c(N,{key:3,class:"text-center mb-2"},{default:e(()=>[t(ge,{indeterminate:"",size:"32",color:"green"})]),_:1})):X("",!0),o(C).length?(i(),c(be,{key:4,length:o(U),modelValue:o(n),"onUpdate:modelValue":a[13]||(a[13]=l=>O(n)?n.value=l:null),rounded:"circle","total-visible":7,color:"deep-purple-darken-4"},null,8,["length","modelValue"])):X("",!0)]),_:1}),t(Ue,{"is-opened":o(S),onCloseDialog:a[14]||(a[14]=l=>S.value=!1)},null,8,["is-opened"]),o(y)?(i(),c(qe,{key:0,"is-search-active":o(L),onUpdateSearchOrders:o(J),order:o(y),"is-opened":o(_),onCloseDialog:a[15]||(a[15]=l=>_.value=!1)},null,8,["is-search-active","onUpdateSearchOrders","order","is-opened"])):X("",!0),o(y)?(i(),c(Ae,{key:1,"is-search-active":o(L),onUpdateSearchOrders:o(J),"is-opened":o(u),order:o(y),onCloseDialog:a[16]||(a[16]=l=>u.value=!1)},null,8,["is-search-active","onUpdateSearchOrders","is-opened","order"])):X("",!0)])}}});export{je as default};
