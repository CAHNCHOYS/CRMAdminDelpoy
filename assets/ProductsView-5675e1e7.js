import{r as I,D as xe,P as ee,i as te,h as oe,d as se,z as de,E as re,v as ne,y as _,e as o,j as ae,k as s,o as v,b as t,n as ue,f as e,p as A,l as P,t as Y,m as C,u as Ve,B as Me,c as ke,x as j,g as we}from"./index-6bc77bae.js";import{u as Z}from"./alert-ad4a9987.js";import{u as Ue,a as $e,_ as Ae}from"./ElementsTable.vue_vue_type_script_setup_true_lang-f962e500.js";import{u as ie,a as me,b as z}from"./useFormSchemas-2bba9048.js";const Ee=(n,x,c)=>{const V=Z(),U=I([+n.query.startPrice||1,+n.query.endPrice||99999]),b=I(n.query.productName||""),M=I(!1),k=I(!1),g=I(!1),d=I([]),y=()=>{b.value="",U.value=[1,99999],M.value=!1,d.value=[],x.push({name:"products-page",query:{}})},q=()=>{x.push({name:"products-page",query:{...n.query,productName:b.value,startPrice:U.value[0],endPrice:U.value[1]}})},f=async()=>{try{k.value=!0;const{data:$}=await ee.getSearchedProducts({startPrice:n.query.startPrice,endPrice:n.query.endPrice,productName:n.query.productName,userId:c});d.value=$.products,console.log(d.value),M.value=!0}catch($){te($)?V.showMessage("error",oe($)):V.showMessage("error","Ошибка при поиске товара(")}finally{k.value=!1}};return xe([()=>n.query.startPrice,()=>n.query.endPrice,()=>n.query.productName],async()=>{!n.query.startPrice&&!n.query.endPrice||f()},{immediate:!0}),{searchPrices:U,searchName:b,isSearchActive:M,searchedProducts:d,isSearchLoading:k,isSearchFormActive:g,searchUserProducts:f,addSearchQuery:q,resetSearch:y}},Ce=C("p",{class:"text-h6 font-weight-bold mb-4"},"Редактирование товара",-1),qe=C("p",{class:"text-h6 mb-2"},"Загрузка категорий....",-1),Te=se({__name:"ProductEditDialog",props:{isActive:{type:Boolean},product:null,isSearchActive:{type:Boolean}},emits:["closeModal","updateSearchProducts"],setup(n,{emit:x}){const c=n,V=de(()=>{var i,a,m,S;return{name:((i=c.product)==null?void 0:i.name)||"Товар не был выбран",price:((a=c.product)==null?void 0:a.price)||0,count:((m=c.product)==null?void 0:m.count)||0,categoryId:((S=c.product)==null?void 0:S.categoryId)||0}}),{userProductSchema:U}=ie(),{handleSubmit:b,isSubmitting:M,resetForm:k}=me({validationSchema:U,initialValues:V}),{value:g,errorMessage:d}=z("name"),{value:y,errorMessage:q}=z("price"),{value:f,errorMessage:$}=z("count"),{value:E,errorMessage:T}=z("categoryId"),F=re(),N=Z(),{productsCategories:Q,categoriesErrorMessage:L,isCategoriesLoading:B}=ne(F),h=ae(),u=b(async i=>{var a;try{await ee.updateProduct(i,c.product.id);const m=Q.value.find(S=>S.id===i.categoryId).name;F.updateUserProduct({...i,category:m,id:c.product.id}),c.isSearchActive&&x("updateSearchProducts"),N.showMessage("success","Товар был изменен")}catch(m){if(te(m)){if(((a=m.response)==null?void 0:a.status)===401){h.push({name:"login-page",query:{isExpiredToken:"true",redirectedFrom:"products-page"}});return}N.showMessage("error",oe(m))}else N.showMessage("error","Ошибка при обновлении товара!")}finally{k(),x("closeModal")}});return(i,a)=>{const m=s("v-card-title"),S=s("v-text-field"),D=s("v-col"),G=s("v-progress-linear"),H=s("v-sheet"),R=s("v-autocomplete"),O=s("v-alert-title"),J=s("v-alert"),r=s("v-btn"),K=s("v-row"),W=s("v-form"),X=s("v-card-actions"),p=s("v-card"),le=s("v-dialog");return v(),_(le,{transition:"dialog-bottom-transition","max-width":"500","onUpdate:modelValue":a[5]||(a[5]=w=>i.$emit("closeModal")),"model-value":n.isActive},{default:o(()=>[t(p,{class:"pa-5",color:"white",elevation:"4"},{default:o(()=>[t(m,null,{default:o(()=>[Ce]),_:1}),t(X,null,{default:o(()=>[t(W,{onSubmit:ue(e(u),["prevent"])},{default:o(()=>[t(K,null,{default:o(()=>[t(D,{cols:"12"},{default:o(()=>[t(S,{modelValue:e(g),"onUpdate:modelValue":a[0]||(a[0]=w=>A(g)?g.value=w:null),"error-messages":e(d),label:"Название товара"},null,8,["modelValue","error-messages"])]),_:1}),t(D,{cols:"12"},{default:o(()=>[e(B)?(v(),_(H,{key:0},{default:o(()=>[qe,t(G,{indeterminate:"",height:"6",color:"green"})]),_:1})):e(L)?(v(),_(H,{key:2},{default:o(()=>[t(J,{type:"error",border:"end",variant:"outlined",class:"pa-2"},{default:o(()=>[t(O,{class:"text-h6"},{default:o(()=>[P(Y(e(L)),1)]),_:1})]),_:1})]),_:1})):(v(),_(R,{key:1,modelValue:e(E),"onUpdate:modelValue":a[1]||(a[1]=w=>A(E)?E.value=w:null),label:"Категория товара","error-messages":e(T),items:e(Q),"item-title":"name",clearable:!1,"item-value":"id","no-data-text":"Нет категорий"},null,8,["modelValue","error-messages","items"]))]),_:1}),t(D,{sm:"6",cols:"12"},{default:o(()=>[t(S,{modelValue:e(f),"onUpdate:modelValue":a[2]||(a[2]=w=>A(f)?f.value=w:null),modelModifiers:{number:!0},"error-messages":e($),label:"Количество",type:"number"},null,8,["modelValue","error-messages"])]),_:1}),t(D,{sm:"6",cols:"12"},{default:o(()=>[t(S,{modelValue:e(y),"onUpdate:modelValue":a[3]||(a[3]=w=>A(y)?y.value=w:null),modelModifiers:{number:!0},"error-messages":e(q),label:"Цена",type:"number",suffix:"руб"},null,8,["modelValue","error-messages"])]),_:1}),t(D,{cols:"12"},{default:o(()=>[t(r,{color:"green-darken-4",variant:"flat",loading:e(M),type:"submit"},{default:o(()=>[P(" Сохранить ")]),_:1},8,["loading"]),t(r,{color:"blue-darken-4",variant:"flat",onClick:a[4]||(a[4]=w=>i.$emit("closeModal"))},{default:o(()=>[P(" Отмена ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1},8,["model-value"])}}}),Ne=C("p",{class:"font-weight-bold text-h5"},"Подтверждение удаления",-1),De={class:"text-h6"},Fe={class:"text-red"},Be=C("span",{class:"text-white"},"Нет",-1),Ie=se({__name:"ProductDeleteDialog",props:{product:null,isActive:{type:Boolean},isSearchActive:{type:Boolean}},emits:["closeModal","updateSearchProducts"],setup(n,{emit:x}){const c=n,V=I(!1),U=re(),b=Z(),M=ae(),k=async()=>{var g;try{V.value=!0,await ee.deleteProduct(c.product.id),U.deleteUserProduct(c.product.id),c.isSearchActive&&x("updateSearchProducts"),b.showMessage("success","Товар был успешно удален")}catch(d){if(te(d)){if(((g=d.response)==null?void 0:g.status)===401){M.push({name:"login-page",query:{isExpiredToken:"true",redirectedFrom:"products-page"}});return}b.showMessage("error",oe(d))}else b.showMessage("error","Ошибка при удалении товара!")}finally{V.value=!1,x("closeModal")}};return(g,d)=>{const y=s("v-card-title"),q=s("v-card-text"),f=s("v-btn"),$=s("v-card-actions"),E=s("v-card"),T=s("v-dialog");return v(),_(T,{"model-value":n.isActive,"max-width":450,persistent:"",transition:"dialog-bottom-transition"},{default:o(()=>[t(E,{class:"pa-4"},{default:o(()=>[t(y,{class:"pa-0 mb-3"},{default:o(()=>[Ne]),_:1}),t(q,{class:"pa-0 mb-4"},{default:o(()=>[C("p",De,[P(" Вы уверены что хотите удалить товар "),C("span",Fe,Y(c.product.name),1),P(" из списка? ")])]),_:1}),t($,{class:"justify-center"},{default:o(()=>[t(f,{onClick:d[0]||(d[0]=F=>g.$emit("closeModal")),height:"40",color:"blue-darken-4",variant:"flat"},{default:o(()=>[Be]),_:1}),t(f,{height:"40",loading:V.value,color:"error",variant:"flat",onClick:k},{default:o(()=>[P("Да")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["model-value"])}}}),Le=C("p",{class:"text-h6 font-weight-bold mb-4"},"Добавление нового товара",-1),Re=C("p",{class:"text-h6 mb-2"},"Загрузка категорий....",-1),je=se({__name:"ProductAddDialog",props:{isActive:{type:Boolean}},emits:["closeModal"],setup(n,{emit:x}){const{userProductSchema:c}=ie(),{handleSubmit:V,isSubmitting:U,resetForm:b}=me({validationSchema:c}),{value:M,errorMessage:k}=z("name"),{value:g,errorMessage:d}=z("categoryId"),{value:y,errorMessage:q}=z("count"),{value:f,errorMessage:$}=z("price"),E=re(),T=Z(),{productsCategories:F,categoriesErrorMessage:N,isCategoriesLoading:Q}=ne(E),L=ae(),B=V(async h=>{var u;try{const{data:i}=await ee.addProduct(h);console.log(h),E.addUserProduct({...h,...i}),T.showMessage("success",`Товар ${h.name} был успешно добавлен!`)}catch(i){if(te(i)){if(((u=i.response)==null?void 0:u.status)===401){L.push({name:"login-page",query:{isExpiredToken:"true",redirectedFrom:"products-page"}});return}T.showMessage("error",oe(i))}else T.showMessage("error","Ошибка при добавлении товара !")}finally{b(),x("closeModal")}});return(h,u)=>{const i=s("v-card-title"),a=s("v-text-field"),m=s("v-col"),S=s("v-progress-linear"),D=s("v-sheet"),G=s("v-autocomplete"),H=s("v-alert-title"),R=s("v-alert"),O=s("v-btn"),J=s("v-row"),r=s("v-form"),K=s("v-card-actions"),W=s("v-card"),X=s("v-dialog");return v(),_(X,{transition:"dialog-bottom-transition","max-width":"500","onUpdate:modelValue":u[5]||(u[5]=p=>h.$emit("closeModal")),scrollable:"","model-value":n.isActive},{default:o(()=>[t(W,{class:"pa-5",color:"white",elevation:"4"},{default:o(()=>[t(i,null,{default:o(()=>[Le]),_:1}),t(K,null,{default:o(()=>[t(r,{onSubmit:ue(e(B),["prevent"])},{default:o(()=>[t(J,null,{default:o(()=>[t(m,{cols:"12"},{default:o(()=>[t(a,{modelValue:e(M),"onUpdate:modelValue":u[0]||(u[0]=p=>A(M)?M.value=p:null),"error-messages":e(k),label:"Название товара"},null,8,["modelValue","error-messages"])]),_:1}),t(m,{cols:"12"},{default:o(()=>[e(Q)?(v(),_(D,{key:0},{default:o(()=>[Re,t(S,{indeterminate:"",height:"6",color:"green"})]),_:1})):e(N)?(v(),_(D,{key:2},{default:o(()=>[t(R,{type:"error",border:"end",variant:"outlined",class:"pa-2"},{default:o(()=>[t(H,{class:"text-h6"},{default:o(()=>[P(Y(e(N)),1)]),_:1})]),_:1})]),_:1})):(v(),_(G,{key:1,modelValue:e(g),"onUpdate:modelValue":u[1]||(u[1]=p=>A(g)?g.value=p:null),label:"Категория товара","error-messages":e(d),items:e(F),"item-title":"name",clearable:!1,"item-value":"id","no-data-text":"Нет категорий"},null,8,["modelValue","error-messages","items"]))]),_:1}),t(m,{sm:"6",cols:"12"},{default:o(()=>[t(a,{modelValue:e(y),"onUpdate:modelValue":u[2]||(u[2]=p=>A(y)?y.value=p:null),modelModifiers:{number:!0},"error-messages":e(q),label:"Количество",type:"number"},null,8,["modelValue","error-messages"])]),_:1}),t(m,{sm:"6",cols:"12"},{default:o(()=>[t(a,{modelValue:e(f),"onUpdate:modelValue":u[3]||(u[3]=p=>A(f)?f.value=p:null),modelModifiers:{number:!0},"error-messages":e($),label:"Цена",suffix:"руб",type:"number"},null,8,["modelValue","error-messages"])]),_:1}),t(m,{cols:"12"},{default:o(()=>[t(O,{color:"green-darken-4",variant:"flat",loading:e(U),type:"submit"},{default:o(()=>[P(" Добавить ")]),_:1},8,["loading"]),t(O,{color:"blue-darken-4",variant:"flat",onClick:u[4]||(u[4]=p=>h.$emit("closeModal"))},{default:o(()=>[P(" Отмена ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1},8,["model-value"])}}}),ze={key:0},Qe={class:"text-h6"},He=C("h2",{class:"title text-h2 mb-5"},"Товары",-1),Oe={class:"text-h6"},Xe=se({__name:"ProductsView",setup(n){const x=re(),c=Z(),V=Ve(),U=I([{fieldText:"Имя",fieldName:"name"},{fieldText:"Цена(руб)",fieldName:"price"},{fieldText:"Кол-во",fieldName:"count"},{fieldText:"Категория",fieldName:"category"}]),b=I("name"),{userProducts:M,productsErrorMessage:k,productsCategories:g}=ne(x);Me(async()=>{g.value.length||x.getAllProductsCategories()});const{itemToEdit:d,isAddDialogActive:y,isEditDialogActive:q,isDeleteDialogActive:f,openDialog:$}=Ue(),E=we(),T=ae(),{searchName:F,searchPrices:N,searchedProducts:Q,isSearchActive:L,isSearchLoading:B,isSearchFormActive:h,resetSearch:u,addSearchQuery:i,searchUserProducts:a}=Ee(E,T,V.currentUser.id),m=de(()=>L.value?Q.value:M.value),{currentPage:S,paginatedElements:D,totalPages:G,isInverseSort:H,elemetsPerPage:R,setSortField:O}=$e({tableElements:m,pageName:"products-page",sortField:b,route:E,router:T});return(J,r)=>{const K=s("v-snackbar"),W=s("TableActions"),X=s("v-text-field"),p=s("v-col"),le=s("v-range-slider"),w=s("v-btn"),ce=s("v-row"),pe=s("v-form"),ve=s("v-expand-transition"),_e=s("v-card-title"),ge=s("v-alert-title"),fe=s("v-alert"),be=s("v-progress-circular"),ye=s("v-sheet"),he=s("v-pagination"),Se=s("v-card");return e(V).currentUser?(v(),ke("div",ze,[t(K,{modelValue:e(c).isMessageShown,"onUpdate:modelValue":r[0]||(r[0]=l=>e(c).isMessageShown=l),"max-width":500,color:e(c).messageType},{default:o(()=>[C("p",Qe,Y(e(c).messageText),1)]),_:1},8,["modelValue","color"]),He,t(Se,{color:"white",elevation:"3",class:"pa-5 mb-6 rounded-lg mx-sm-0 mx-n5"},{default:o(()=>[e(k)?j("",!0):(v(),_(_e,{key:0,class:"pa-0"},{default:o(()=>[t(W,{count:e(R),"onUpdate:count":[r[1]||(r[1]=l=>A(R)?R.value=l:null),r[2]||(r[2]=l=>R.value=l)],onToggleAddDialog:r[3]||(r[3]=l=>y.value=!0),onToggleSearch:r[4]||(r[4]=l=>h.value=!e(h)),"is-badge-active":!!J.$route.query.startPrice},{default:o(()=>[P(" Все товары ")]),_:1},8,["count","is-badge-active"]),t(ve,null,{default:o(()=>[e(h)?(v(),_(pe,{key:0,class:"mb-8"},{default:o(()=>[t(ce,{align:"center"},{default:o(()=>[t(p,{sm:"6",cols:"12"},{default:o(()=>[t(X,{modelValue:e(F),"onUpdate:modelValue":r[5]||(r[5]=l=>A(F)?F.value=l:null),variant:"outlined",label:"Название товара"},null,8,["modelValue"])]),_:1}),t(p,{sm:"6",cols:"12",class:"pr-7"},{default:o(()=>[t(le,{modelValue:e(N),"onUpdate:modelValue":r[6]||(r[6]=l=>A(N)?N.value=l:null),min:"1",step:"10",max:"99999",color:"blue-grey-darken-2",label:"Цена:"},null,8,["modelValue"])]),_:1}),t(p,{cols:"auto"},{default:o(()=>[t(ce,null,{default:o(()=>[t(p,null,{default:o(()=>[t(w,{variant:"flat",color:"green-darken-3",onClick:e(i),disabled:e(B)},{default:o(()=>[P(" Искать ")]),_:1},8,["onClick","disabled"])]),_:1}),t(p,null,{default:o(()=>[t(w,{variant:"flat",color:"red-darken-4",onClick:e(u),disabled:e(B)},{default:o(()=>[P(" Сбросить поиск ")]),_:1},8,["onClick","disabled"])]),_:1}),t(p,null,{default:o(()=>[t(w,{variant:"flat",color:"blue-darken-4",onClick:r[7]||(r[7]=l=>h.value=!1),disabled:e(B)},{default:o(()=>[P(" Закрыть ")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):j("",!0)]),_:1})]),_:1})),e(k)?(v(),_(fe,{key:1,type:"error",border:"end",variant:"tonal"},{default:o(()=>[t(ge,{class:"mb-2 text-h5"},{default:o(()=>[P(" Ошибка при загрузке товаров ")]),_:1}),C("p",Oe,Y(e(k)),1)]),_:1})):e(B)?j("",!0):(v(),_(Ae,{key:2,items:e(D),fields:U.value,"is-inverse-sort":e(H),"no-data-text":"Товары не найдены","current-sort-field":b.value,"onUpdate:currentSortField":[r[8]||(r[8]=l=>b.value=l),r[9]||(r[9]=l=>e(O)(l))],onOpenDialog:r[10]||(r[10]=(l,Pe)=>e($)(l,Pe))},null,8,["items","fields","is-inverse-sort","current-sort-field"])),e(B)?(v(),_(ye,{key:3,class:"text-center mb-2"},{default:o(()=>[t(be,{indeterminate:"",size:"48",color:"green"})]),_:1})):j("",!0),e(m).length?(v(),_(he,{key:4,length:e(G),modelValue:e(S),"onUpdate:modelValue":r[11]||(r[11]=l=>A(S)?S.value=l:null),rounded:"circle","total-visible":7,color:"indigo-darken-4"},null,8,["length","modelValue"])):j("",!0)]),_:1}),e(d)?(v(),_(Te,{key:0,product:e(d),onCloseModal:r[12]||(r[12]=l=>q.value=!1),"is-active":e(q),"is-search-active":e(L),onUpdateSearchProducts:e(a)},null,8,["product","is-active","is-search-active","onUpdateSearchProducts"])):j("",!0),e(d)?(v(),_(Ie,{key:1,"is-active":e(f),product:e(d),onCloseModal:r[13]||(r[13]=l=>f.value=!1),"is-search-active":e(L),onUpdateSearchProducts:e(a)},null,8,["is-active","product","is-search-active","onUpdateSearchProducts"])):j("",!0),t(je,{onCloseModal:r[14]||(r[14]=l=>y.value=!1),"is-active":e(y)},null,8,["is-active"])])):j("",!0)}}});export{Xe as default};
