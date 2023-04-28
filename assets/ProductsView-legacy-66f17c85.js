System.register(["./index-legacy-9bb8cf7f.js","./alert-legacy-1f2322f2.js","./useLogoutHandler-legacy-692f2d2e.js","./useFormSchemas-legacy-1f7ae4a9.js"],(function(e,a){"use strict";var l,t,r,o,s,u,d,i,c,n,m,g,p,v,f,h,y,b,_,P,S,V,k,x,w,M,U,D,A,C,q,N,T,F,I,E,L,$,B,j,z,O,Q,G,H,J,W,X,Y,Z,K,R,ee,ae;return{setters:[e=>{l=e.r,t=e.W,r=e.X,o=e.i,s=e.h,u=e.d,d=e.P,i=e.Y,c=e.J,n=e.O,m=e.e,g=e.Z,p=e.o,v=e.b,f=e.s,h=e.v,y=e.x,b=e.y,_=e.g,P=e.z,S=e.B,V=e.C,k=e.D,x=e.$,w=e.a0,M=e.a1,U=e.m,D=e.n,A=e.p,C=e.t,q=e.F,N=e.f,T=e.q,F=e.a2,I=e.u,E=e.S,L=e.c,$=e.U,B=e.M,j=e.k,z=e.l,O=e.a3,Q=e.a4,G=e.a5,H=e.a6,J=e.G},e=>{W=e.u},e=>{X=e.u,Y=e.a,Z=e.b,K=e._},e=>{R=e.u,ee=e.a,ae=e.b}],execute:function(){const a=T("p",{class:"text-h6 font-weight-bold mb-4"},"Редактирование товара",-1),le=T("p",{class:"text-h6 mb-2"},"Загрузка категорий....",-1),te=u({__name:"ProductEditDialog",props:{isActive:{type:Boolean},product:null,isSearchActive:{type:Boolean}},emits:["closeDialog","updateSearchProducts"],setup(e,{emit:l}){const t=e,u=d((()=>({name:t.product?.name||"Товар не был выбран",price:t.product?.price||0,count:t.product?.count||0,categoryId:t.product?.categoryId||0}))),{userProductSchema:T}=R(),{handleSubmit:F,isSubmitting:I,resetForm:E}=ee({validationSchema:T,initialValues:u}),{value:L,errorMessage:$}=ae("name"),{value:B,errorMessage:j}=ae("price"),{value:z,errorMessage:O}=ae("count"),{value:Q,errorMessage:G}=ae("categoryId"),H=i(),J=W(),{handleLogout:Y}=X("products-page"),{productsCategories:Z,categoriesErrorMessage:K,isCategoriesLoading:te}=c(H),re=F((async e=>{try{await r.updateProduct(e,t.product.id);const a=Z.value.find((a=>a.id===e.categoryId)).name;H.updateUserProduct({...e,category:a,id:t.product.id}),t.isSearchActive&&l("updateSearchProducts"),J.showMessage("success","Товар был изменен")}catch(a){if(o(a)){if(401===a.response?.status)return void(await Y());J.showMessage("error",s(a))}else J.showMessage("error","Ошибка при обновлении товара!")}finally{E(),l("closeDialog")}}));return(l,t)=>(p(),n(g,{transition:"dialog-bottom-transition","max-width":"500","onUpdate:modelValue":t[5]||(t[5]=e=>l.$emit("closeDialog")),"model-value":e.isActive},{default:m((()=>[v(N,{class:"pa-5",color:"white",elevation:"4"},{default:m((()=>[v(f,null,{default:m((()=>[a])),_:1}),v(h,null,{default:m((()=>[v(y,{onSubmit:b(_(re),["prevent"])},{default:m((()=>[v(P,null,{default:m((()=>[v(S,{cols:"12"},{default:m((()=>[v(V,{modelValue:_(L),"onUpdate:modelValue":t[0]||(t[0]=e=>k(L)?L.value=e:null),"error-messages":_($),label:"Название товара"},null,8,["modelValue","error-messages"])])),_:1}),v(S,{cols:"12"},{default:m((()=>[_(te)?(p(),n(x,{key:0},{default:m((()=>[le,v(w,{indeterminate:"",height:"6",color:"green"})])),_:1})):_(K)?(p(),n(x,{key:2},{default:m((()=>[v(U,{type:"error",border:"end",variant:"outlined",class:"pa-2"},{default:m((()=>[v(D,{class:"text-h6"},{default:m((()=>[A(C(_(K)),1)])),_:1})])),_:1})])),_:1})):(p(),n(M,{key:1,modelValue:_(Q),"onUpdate:modelValue":t[1]||(t[1]=e=>k(Q)?Q.value=e:null),label:"Категория товара","error-messages":_(G),items:_(Z),"item-title":"name",clearable:!1,"item-value":"id","no-data-text":"Нет категорий"},null,8,["modelValue","error-messages","items"]))])),_:1}),v(S,{sm:"6",cols:"12"},{default:m((()=>[v(V,{modelValue:_(z),"onUpdate:modelValue":t[2]||(t[2]=e=>k(z)?z.value=e:null),modelModifiers:{number:!0},"error-messages":_(O),label:"Количество",type:"number"},null,8,["modelValue","error-messages"])])),_:1}),v(S,{sm:"6",cols:"12"},{default:m((()=>[v(V,{modelValue:_(B),"onUpdate:modelValue":t[3]||(t[3]=e=>k(B)?B.value=e:null),modelModifiers:{number:!0},"error-messages":_(j),label:"Цена",type:"number",suffix:"руб"},null,8,["modelValue","error-messages"])])),_:1}),v(S,{cols:"12"},{default:m((()=>[v(q,{color:"green-darken-4",variant:"flat",loading:_(I),type:"submit"},{default:m((()=>[A(" Сохранить ")])),_:1},8,["loading"]),v(q,{color:"blue-darken-4",variant:"flat",onClick:t[4]||(t[4]=e=>l.$emit("closeDialog"))},{default:m((()=>[A(" Отмена ")])),_:1})])),_:1})])),_:1})])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["model-value"]))}}),re=T("p",{class:"font-weight-bold text-h5"},"Подтверждение удаления",-1),oe={class:"text-h6"},se={class:"text-red"},ue=T("span",{class:"text-white"},"Нет",-1),de=u({__name:"ProductDeleteDialog",props:{product:null,isActive:{type:Boolean},isSearchActive:{type:Boolean}},emits:["closeDialog","updateSearchProducts"],setup(e,{emit:a}){const t=e,u=l(!1),d=i(),c=W(),{handleLogout:y}=X("products-page"),b=async()=>{try{u.value=!0,await r.deleteProduct(t.product.id),d.deleteUserProduct(t.product.id),t.isSearchActive&&a("updateSearchProducts"),c.showMessage("success","Товар был успешно удален")}catch(e){if(o(e)){if(401===e.response?.status)return void(await y());c.showMessage("error",s(e))}else c.showMessage("error","Ошибка при удалении товара!")}finally{u.value=!1,a("closeDialog")}};return(a,l)=>(p(),n(g,{"model-value":e.isActive,"max-width":450,persistent:"",transition:"dialog-bottom-transition"},{default:m((()=>[v(N,{class:"pa-4"},{default:m((()=>[v(f,{class:"pa-0 mb-3"},{default:m((()=>[re])),_:1}),v(F,{class:"pa-0 mb-4"},{default:m((()=>[T("p",oe,[A(" Вы уверены что хотите удалить товар "),T("span",se,C(t.product.name),1),A(" из списка? ")])])),_:1}),v(h,{class:"justify-center"},{default:m((()=>[v(q,{onClick:l[0]||(l[0]=e=>a.$emit("closeDialog")),height:"40",color:"blue-darken-4",variant:"flat"},{default:m((()=>[ue])),_:1}),v(q,{height:"40",loading:u.value,color:"error",variant:"flat",onClick:b},{default:m((()=>[A("Да")])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1},8,["model-value"]))}}),ie=T("p",{class:"text-h6 font-weight-bold mb-4"},"Добавление нового товара",-1),ce=T("p",{class:"text-h6 mb-2"},"Загрузка категорий....",-1),ne=u({__name:"ProductAddDialog",props:{isActive:{type:Boolean}},emits:["closeDialog"],setup(e,{emit:a}){const{userProductSchema:l}=R(),{handleSubmit:t,isSubmitting:u,resetForm:d}=ee({validationSchema:l}),{value:T,errorMessage:F}=ae("name"),{value:I,errorMessage:E}=ae("categoryId"),{value:L,errorMessage:$}=ae("count"),{value:B,errorMessage:j}=ae("price"),z=i(),O=W(),{handleLogout:Q}=X("products-page"),{productsCategories:G,categoriesErrorMessage:H,isCategoriesLoading:J}=c(z),Y=t((async e=>{try{const{data:a}=await r.addProduct(e),l=G.value.find((a=>a.id===e.categoryId)).name;z.addUserProduct({...e,id:a.productId,category:l}),O.showMessage("success",`Товар ${e.name} был успешно добавлен!`)}catch(l){if(o(l)){if(401===l.response?.status)return void(await Q());O.showMessage("error",s(l))}else O.showMessage("error","Ошибка при добавлении товара !")}finally{d(),a("closeDialog")}}));return(a,l)=>(p(),n(g,{transition:"dialog-bottom-transition","max-width":"500","onUpdate:modelValue":l[5]||(l[5]=e=>a.$emit("closeDialog")),scrollable:"","model-value":e.isActive},{default:m((()=>[v(N,{class:"pa-5",color:"white",elevation:"4"},{default:m((()=>[v(f,null,{default:m((()=>[ie])),_:1}),v(h,null,{default:m((()=>[v(y,{onSubmit:b(_(Y),["prevent"])},{default:m((()=>[v(P,null,{default:m((()=>[v(S,{cols:"12"},{default:m((()=>[v(V,{modelValue:_(T),"onUpdate:modelValue":l[0]||(l[0]=e=>k(T)?T.value=e:null),"error-messages":_(F),label:"Название товара"},null,8,["modelValue","error-messages"])])),_:1}),v(S,{cols:"12"},{default:m((()=>[_(J)?(p(),n(x,{key:0},{default:m((()=>[ce,v(w,{indeterminate:"",height:"6",color:"green"})])),_:1})):_(H)?(p(),n(x,{key:2},{default:m((()=>[v(U,{type:"error",border:"end",variant:"outlined",class:"pa-2"},{default:m((()=>[v(D,{class:"text-h6"},{default:m((()=>[A(C(_(H)),1)])),_:1})])),_:1})])),_:1})):(p(),n(M,{key:1,modelValue:_(I),"onUpdate:modelValue":l[1]||(l[1]=e=>k(I)?I.value=e:null),label:"Категория товара","error-messages":_(E),items:_(G),"item-title":"name",clearable:!1,"item-value":"id","no-data-text":"Нет категорий"},null,8,["modelValue","error-messages","items"]))])),_:1}),v(S,{sm:"6",cols:"12"},{default:m((()=>[v(V,{modelValue:_(L),"onUpdate:modelValue":l[2]||(l[2]=e=>k(L)?L.value=e:null),modelModifiers:{number:!0},"error-messages":_($),label:"Количество",type:"number"},null,8,["modelValue","error-messages"])])),_:1}),v(S,{sm:"6",cols:"12"},{default:m((()=>[v(V,{modelValue:_(B),"onUpdate:modelValue":l[3]||(l[3]=e=>k(B)?B.value=e:null),modelModifiers:{number:!0},"error-messages":_(j),label:"Цена",suffix:"руб",type:"number"},null,8,["modelValue","error-messages"])])),_:1}),v(S,{cols:"12"},{default:m((()=>[v(q,{color:"green-darken-4",variant:"flat",loading:_(u),type:"submit"},{default:m((()=>[A(" Добавить ")])),_:1},8,["loading"]),v(q,{color:"blue-darken-4",variant:"flat",onClick:l[4]||(l[4]=e=>a.$emit("closeDialog"))},{default:m((()=>[A(" Отмена ")])),_:1})])),_:1})])),_:1})])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["model-value"]))}}),me={key:0},ge={class:"text-h6"},pe=T("h2",{class:"title text-h2 mb-5"},"Товары",-1),ve=T("span",{class:"text-wrap"}," Сбросить поиск",-1),fe={class:"text-h6"};e("default",u({__name:"ProductsView",setup(e){const a=i(),u=W(),g=I(),h=l([{fieldText:"Имя",fieldName:"name"},{fieldText:"Цена(руб)",fieldName:"price"},{fieldText:"Кол-во",fieldName:"count"},{fieldText:"Категория",fieldName:"category"}]),b=l("name"),{userProducts:w,productsErrorMessage:M,productsCategories:F}=c(a);E((async()=>{F.value.length||a.getAllProductsCategories()}));const{itemToEdit:X,isAddDialogActive:R,isEditDialogActive:ee,isDeleteDialogActive:ae,openDialog:le}=Y(),re=j(),oe=z(),{searchName:se,searchPrices:ue,searchedProducts:ie,isSearchActive:ce,isSearchLoading:he,isSearchFormActive:ye,resetSearch:be,addSearchQuery:_e,searchUserProducts:Pe}=((e,a,u)=>{const d=W(),i=l([+e.query.startPrice||1,+e.query.endPrice||99999]),c=l(e.query.productName||""),n=l([]),m=l(!1),g=l(!1),p=l(!1),v=async()=>{try{g.value=!0;const{data:a}=await r.getSearchedProducts({startPrice:e.query.startPrice,endPrice:e.query.endPrice,productName:e.query.productName,userId:u});n.value=a.products,console.log(n.value),m.value=!0}catch(a){o(a)?d.showMessage("error",s(a)):d.showMessage("error","Ошибка при поиске товара(")}finally{g.value=!1}};return t([()=>e.query.startPrice,()=>e.query.endPrice,()=>e.query.productName],(async()=>{(e.query.startPrice||e.query.endPrice)&&v()}),{immediate:!0}),{searchPrices:i,searchName:c,isSearchActive:m,searchedProducts:n,isSearchLoading:g,isSearchFormActive:p,searchUserProducts:v,addSearchQuery:()=>{a.push({name:"products-page",query:{...e.query,productName:c.value,startPrice:i.value[0],endPrice:i.value[1]}})},resetSearch:()=>{c.value="",i.value=[1,99999],m.value=!1,n.value=[],a.push({name:"products-page",query:{}})}}})(re,oe,g.currentUser.id),Se=d((()=>ce.value?ie.value:w.value)),{currentPage:Ve,paginatedElements:ke,totalPages:xe,isInverseSort:we,elementsPerPageCount:Me,setSortField:Ue}=Z({tableElements:Se,pageName:"products-page",sortField:b,route:re,router:oe});return(e,a)=>{const l=J("TableActions");return _(g).currentUser?(p(),L("div",me,[v($,{modelValue:_(u).isMessageShown,"onUpdate:modelValue":a[0]||(a[0]=e=>_(u).isMessageShown=e),color:_(u).messageType,"location-strategy":"connected"},{default:m((()=>[T("p",ge,C(_(u).messageText),1)])),_:1},8,["modelValue","color"]),pe,v(N,{color:"white",elevation:"3",class:"pa-5 mb-6 rounded-lg mx-sm-0 mx-n5"},{default:m((()=>[_(M)?B("",!0):(p(),n(f,{key:0,class:"pa-0"},{default:m((()=>[v(l,{count:_(Me),"onUpdate:count":a[1]||(a[1]=e=>k(Me)?Me.value=e:null),onToggleAddDialog:a[2]||(a[2]=e=>R.value=!0),onToggleSearch:a[3]||(a[3]=e=>ye.value=!_(ye)),"is-badge-active":!!e.$route.query.startPrice},{default:m((()=>[A(" Все товары ")])),_:1},8,["count","is-badge-active"]),v(O,null,{default:m((()=>[_(ye)?(p(),n(y,{key:0,class:"mb-8"},{default:m((()=>[v(P,{align:"center"},{default:m((()=>[v(S,{sm:"6",cols:"12",class:"mb-sm-0 mb-2"},{default:m((()=>[v(V,{modelValue:_(se),"onUpdate:modelValue":a[4]||(a[4]=e=>k(se)?se.value=e:null),variant:"outlined",label:"Название товара"},null,8,["modelValue"])])),_:1}),v(S,{sm:"6",cols:"12",class:"pr-7"},{default:m((()=>[v(Q,{modelValue:_(ue),"onUpdate:modelValue":a[5]||(a[5]=e=>k(ue)?ue.value=e:null),min:"1",step:"10",max:"99999",color:"blue-grey-darken-2",label:"Цена:"},null,8,["modelValue"])])),_:1}),v(S,{sm:"auto",cols:"12"},{default:m((()=>[v(P,null,{default:m((()=>[v(S,{sm:"auto",cols:"6"},{default:m((()=>[v(q,{variant:"flat",color:"green-darken-3",onClick:_(_e),disabled:_(he),block:""},{default:m((()=>[A(" Искать ")])),_:1},8,["onClick","disabled"])])),_:1}),v(S,{sm:"auto",cols:"6"},{default:m((()=>[v(q,{variant:"flat",color:"red-darken-4",onClick:_(be),disabled:_(he),block:""},{default:m((()=>[ve])),_:1},8,["onClick","disabled"])])),_:1}),v(S,{sm:"auto",cols:"12"},{default:m((()=>[v(q,{variant:"flat",color:"blue-darken-4",onClick:a[6]||(a[6]=e=>ye.value=!1),disabled:_(he),block:""},{default:m((()=>[A(" Закрыть ")])),_:1},8,["disabled"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})):B("",!0)])),_:1})])),_:1})),_(M)?(p(),n(U,{key:1,type:"error",border:"end",variant:"tonal"},{default:m((()=>[v(D,{class:"mb-2 text-h5"},{default:m((()=>[A(" Ошибка при загрузке товаров ")])),_:1}),T("p",fe,C(_(M)),1)])),_:1})):_(he)?B("",!0):(p(),n(K,{key:2,items:_(ke),fields:h.value,"current-sort-field":b.value,onUpdateSortField:a[7]||(a[7]=e=>_(Ue)(e)),"is-inverse-sort":_(we),"no-data-text":"Товары не найдены",onOpenDialog:a[8]||(a[8]=(e,a)=>_(le)(e,a))},null,8,["items","fields","current-sort-field","is-inverse-sort"])),_(he)?(p(),n(x,{key:3,class:"text-center mb-2"},{default:m((()=>[v(G,{indeterminate:"",size:"48",color:"green"})])),_:1})):B("",!0),_(Se).length?(p(),n(H,{key:4,length:_(xe),modelValue:_(Ve),"onUpdate:modelValue":a[9]||(a[9]=e=>k(Ve)?Ve.value=e:null),rounded:"circle","total-visible":7,color:"indigo-darken-4"},null,8,["length","modelValue"])):B("",!0)])),_:1}),_(X)?(p(),n(te,{key:0,"is-active":_(ee),onCloseDialog:a[10]||(a[10]=e=>ee.value=!1),product:_(X),"is-search-active":_(ce),onUpdateSearchProducts:_(Pe)},null,8,["is-active","product","is-search-active","onUpdateSearchProducts"])):B("",!0),_(X)?(p(),n(de,{key:1,"is-active":_(ae),onCloseDialog:a[11]||(a[11]=e=>ae.value=!1),product:_(X),"is-search-active":_(ce),onUpdateSearchProducts:_(Pe)},null,8,["is-active","product","is-search-active","onUpdateSearchProducts"])):B("",!0),v(ne,{onCloseDialog:a[12]||(a[12]=e=>R.value=!1),"is-active":_(R)},null,8,["is-active"])])):B("",!0)}}}))}}}));
