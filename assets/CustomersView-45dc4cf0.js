import{d as J,S as K,r as q,y as A,e as t,k as a,o as D,b as o,l as v,m as z,t as te,j as X,$ as Y,i as Z,h as ee,f as e,p as h,Q as Se,D as Ne,u as Ve,v as Ce,z as ye,c as we,x as Q,g as xe}from"./index-01698fc6.js";import{u as H}from"./alert-20e2704d.js";import{u as ae,a as le,b as F}from"./useFormSchemas-6566ee65.js";import{u as ke,a as De,_ as Ue}from"./ElementsTable.vue_vue_type_script_setup_true_lang-19b524f2.js";const $e={class:"text-error"},Me=J({__name:"CustomersDeleteDialog",props:{isOpened:{type:Boolean},customer:null,isSearchActive:{type:Boolean}},emits:["closeDialog","updateSearchCustomers"],setup(u,{emit:V}){const i=u,y=H(),U=K(),C=X(),p=q(!1),w=async()=>{var d;try{p.value=!0,await Y.deleteCustomer(i.customer.id),U.deleteCustomer(i.customer.id),i.isSearchActive&&V("updateSearchCustomers"),y.showMessage("success","Клиент был успешно удален!")}catch(c){if(Z(c)){if(((d=c.response)==null?void 0:d.status)===401){C.push({name:"login-page",query:{isExpiredToken:"true",redirectedFrom:"customers-page"}});return}y.showMessage("error",ee(c))}else y.showMessage("error","Ошибка при удалении клиента!")}finally{V("closeDialog"),p.value=!1}};return(d,c)=>{const b=a("v-card-title"),x=a("v-card-text"),S=a("v-btn"),$=a("v-card-actions"),m=a("v-card"),E=a("v-dialog");return D(),A(E,{width:"auto","model-value":u.isOpened,persistent:!0,transition:"dialog-bottom-transition"},{default:t(()=>[o(m,{color:"white",class:"pa-4","max-width":450},{default:t(()=>[o(b,{class:"text-h5 mb-4 pa-0 font-weight-bold"},{default:t(()=>[v("Подтвердите удаление клиента")]),_:1}),o(x,{class:"text-h6 mb-4 pa-0"},{default:t(()=>[v(" Вы уверены что хотиет удалить клиента "),z("span",$e,te(u.customer.firstName+" "+u.customer.secondName),1),v(" ? ")]),_:1}),o($,{class:"justify-center pa-0"},{default:t(()=>[o(S,{onClick:c[0]||(c[0]=_=>d.$emit("closeDialog")),height:"40",color:"blue-darken-4",variant:"flat"},{default:t(()=>[v(" Нет ")]),_:1}),o(S,{height:"40",color:"error",variant:"flat",loading:p.value,onClick:w},{default:t(()=>[v("Да")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["model-value"])}}}),Ae=z("p",{class:"text-h6"},"Премиум клиент",-1),Ee=J({__name:"CustomersAddDialog",props:{isOpened:{type:Boolean}},emits:["closeDialog"],setup(u,{emit:V}){const{userCustomerSchema:i}=ae(),{resetForm:y,handleSubmit:U,isSubmitting:C}=le({validationSchema:i}),{value:p,errorMessage:w}=F("firstName"),{value:d,errorMessage:c}=F("secondName"),{value:b,errorMessage:x}=F("thirdName"),{value:S,errorMessage:$}=F("phone"),{value:m,errorMessage:E}=F("premium");m.value="Нет";const _=H(),T=K(),O=X(),W=U(async f=>{var l;try{const{data:r}=await Y.addCustomer(f);T.addCustomer({...f,id:r.customerId,fullName:f.secondName+" "+f.firstName+" "+f.thirdName}),_.showMessage("success","Клиент "+f.secondName+" был успешно добавлен!")}catch(r){if(Z(r)){if(((l=r.response)==null?void 0:l.status)===401){O.push({name:"login-page",query:{isExpiredToken:"true",redirectedFrom:"customers-page"}});return}_.showMessage("error",ee(r))}else _.showMessage("error","Ошибка при добавлении клиента")}finally{V("closeDialog"),y()}});return(f,l)=>{const r=a("v-card-title"),k=a("v-text-field"),N=a("v-col"),M=a("v-switch"),P=a("v-btn"),j=a("v-row"),I=a("v-form"),B=a("v-card-actions"),L=a("v-card"),G=a("v-dialog");return D(),A(G,{"model-value":u.isOpened,"onUpdate:modelValue":l[6]||(l[6]=g=>V("closeDialog")),width:"auto",scrollable:"",transition:"dialog-bottom-transition"},{default:t(()=>[o(L,{color:"white",class:"pa-4",width:"450"},{default:t(()=>[o(r,{class:"font-weight-bold text-h6 mb-3"},{default:t(()=>[v(" Добавление нового клиента ")]),_:1}),o(B,null,{default:t(()=>[o(I,{onSubmit:e(W)},{default:t(()=>[o(j,null,{default:t(()=>[o(N,{cols:"12"},{default:t(()=>[o(k,{modelValue:e(p),"onUpdate:modelValue":l[0]||(l[0]=g=>h(p)?p.value=g:null),"error-messages":e(w),label:"Имя"},null,8,["modelValue","error-messages"])]),_:1}),o(N,{cols:"12"},{default:t(()=>[o(k,{modelValue:e(d),"onUpdate:modelValue":l[1]||(l[1]=g=>h(d)?d.value=g:null),"error-messages":e(c),label:"Фамилия"},null,8,["modelValue","error-messages"])]),_:1}),o(N,{cols:"12"},{default:t(()=>[o(k,{modelValue:e(b),"onUpdate:modelValue":l[2]||(l[2]=g=>h(b)?b.value=g:null),"error-messages":e(x),label:"Отчество"},null,8,["modelValue","error-messages"])]),_:1}),o(N,{cols:"12"},{default:t(()=>[o(k,{label:"Номер телефона",modelValue:e(S),"onUpdate:modelValue":l[3]||(l[3]=g=>h(S)?S.value=g:null),"error-messages":e($)},null,8,["modelValue","error-messages"])]),_:1}),o(N,{cols:"12"},{default:t(()=>[Ae,o(M,{modelValue:e(m),"onUpdate:modelValue":l[4]||(l[4]=g=>h(m)?m.value=g:null),"true-value":"Да","false-value":"Нет","hide-details":"",label:e(m),color:"indigo","error-messages":e(E)},null,8,["modelValue","label","error-messages"])]),_:1}),o(N,{cols:"12"},{default:t(()=>[o(P,{color:"green-darken-4",variant:"flat",type:"submit",loading:e(C)},{default:t(()=>[v(" Добавить ")]),_:1},8,["loading"]),o(P,{color:"blue-darken-4",variant:"flat",onClick:l[5]||(l[5]=g=>f.$emit("closeDialog"))},{default:t(()=>[v(" Отмена ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1},8,["model-value"])}}}),Te=z("p",{class:"text-h6"},"Премиум клиент ?",-1),qe=J({__name:"CustomersEditDialog",props:{isOpened:{type:Boolean},customer:null,isSearchActive:{type:Boolean}},emits:["closeDialog","updateSearchCustomers"],setup(u,{emit:V}){const i=u,y=Se(()=>({firstName:i.customer.firstName,secondName:i.customer.secondName,thirdName:i.customer.thirdName,phone:i.customer.phone,premium:i.customer.premium})),{userCustomerSchema:U}=ae(),{resetForm:C,handleSubmit:p,isSubmitting:w}=le({validationSchema:U,initialValues:y}),{value:d,errorMessage:c}=F("firstName"),{value:b,errorMessage:x}=F("secondName"),{value:S,errorMessage:$}=F("thirdName"),{value:m,errorMessage:E}=F("phone"),{value:_}=F("premium"),T=H(),O=K(),W=X(),f=p(async l=>{var r;console.log(l);try{await Y.updateCustomer(l,i.customer.id),O.updateCustomer({...l,id:i.customer.id,fullName:l.secondName+" "+l.firstName+" "+l.thirdName}),i.isSearchActive&&V("updateSearchCustomers"),T.showMessage("success","Клиент был успешно изменен")}catch(k){if(Z(k)){if(((r=k.response)==null?void 0:r.status)===401){W.push({name:"login-page",query:{isExpiredToken:"true",redirectedFrom:"customers-page"}});return}T.showMessage("error",ee(k))}else T.showMessage("error","Ошибка при изменении клиента")}finally{C(),V("closeDialog")}});return(l,r)=>{const k=a("v-card-title"),N=a("v-text-field"),M=a("v-col"),P=a("v-switch"),j=a("v-btn"),I=a("v-row"),B=a("v-form"),L=a("v-card-actions"),G=a("v-card"),g=a("v-dialog");return D(),A(g,{"model-value":u.isOpened,"onUpdate:modelValue":r[6]||(r[6]=s=>l.$emit("closeDialog")),scrollable:"",width:"auto"},{default:t(()=>[o(G,{width:"450",color:"white",class:"pa-4"},{default:t(()=>[o(k,{class:"text-h6 font-weight-bold"},{default:t(()=>[v(" Редактирование клиента ")]),_:1}),o(L,null,{default:t(()=>[o(B,{onSubmit:e(f)},{default:t(()=>[o(I,null,{default:t(()=>[o(M,{cols:"12"},{default:t(()=>[o(N,{modelValue:e(d),"onUpdate:modelValue":r[0]||(r[0]=s=>h(d)?d.value=s:null),"error-messages":e(c),label:"Имя"},null,8,["modelValue","error-messages"])]),_:1}),o(M,{cols:"12"},{default:t(()=>[o(N,{modelValue:e(b),"onUpdate:modelValue":r[1]||(r[1]=s=>h(b)?b.value=s:null),"error-messages":e(x),label:"Фамилия"},null,8,["modelValue","error-messages"])]),_:1}),o(M,{cols:"12"},{default:t(()=>[o(N,{modelValue:e(S),"onUpdate:modelValue":r[2]||(r[2]=s=>h(S)?S.value=s:null),"error-messages":e($),label:"Отчество"},null,8,["modelValue","error-messages"])]),_:1}),o(M,{cols:"12"},{default:t(()=>[o(N,{label:"Номер телефона",modelValue:e(m),"onUpdate:modelValue":r[3]||(r[3]=s=>h(m)?m.value=s:null),"error-messages":e(E)},null,8,["modelValue","error-messages"])]),_:1}),o(M,{cols:"12"},{default:t(()=>[Te,o(P,{modelValue:e(_),"onUpdate:modelValue":r[4]||(r[4]=s=>h(_)?_.value=s:null),"true-value":"Да","false-value":"Нет","hide-details":"",label:e(_),color:"indigo"},null,8,["modelValue","label"])]),_:1}),o(M,{cols:"12"},{default:t(()=>[o(j,{color:"green-darken-4",variant:"flat",type:"submit",loading:e(w)},{default:t(()=>[v(" Обновить ")]),_:1},8,["loading"]),o(j,{color:"blue-darken-4",variant:"flat",onClick:r[5]||(r[5]=s=>l.$emit("closeDialog"))},{default:t(()=>[v(" Отмена ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1},8,["model-value"])}}}),Fe=(u,V,i)=>{const y=H(),U=q(u.query.secondName||""),C=q(+u.query.premium||0),p=q(!1),w=q([]),d=q(!1),c=q(!1),b=q(!1),x=()=>{U.value="",p.value=!1,C.value=0,d.value=!1,w.value=[],V.push({name:"clients-page",query:{}})},S=()=>{V.push({name:"clients-page",query:{...u.query,secondName:U.value,searchWithPremium:String(p.value),premium:C.value}})},$=async()=>{try{c.value=!0;const{data:m}=await Y.getSearchedCustomers({userId:i,premium:+u.query.premium,secondName:u.query.secondName,searchWithPremium:u.query.searchWithPremium});w.value=m.customers,d.value=!0}catch(m){Z(m)?y.showMessage("error",ee(m)):y.showMessage("error","Ошибка при поиске товаров!")}finally{c.value=!1}};return Ne([()=>u.query.secondName,()=>u.query.premium,()=>u.query.searchWithPremium],async()=>{u.query.secondName===void 0&&!u.query.premium||$()},{immediate:!0}),{premium:C,searchWithPremium:p,isSearchFormActive:b,isSearchActive:d,isSearchLoading:c,secondName:U,searchedCustomers:w,searchUserCustomers:$,addSearchQuery:S,resetSearch:x}},Pe={class:"text-h6"},Be=z("h2",{class:"title text-h2 mb-5"},"Клиенты",-1),je=J({__name:"CustomersView",setup(u){const V=K(),i=H(),y=Ve(),U=q([{fieldText:"Имя",fieldName:"firstName"},{fieldText:"Фамилия",fieldName:"secondName"},{fieldText:"Отчество",fieldName:"thirdName"},{fieldText:"Телефон",fieldName:"phone"},{fieldText:"Есть премиум",fieldName:"premium"}]),C=q("firstName"),{customers:p,customersErrorMessage:w}=Ce(V),{isAddDialogActive:d,isEditDialogActive:c,isDeleteDialogActive:b,itemToEdit:x,openDialog:S}=ke(),$=xe(),m=X(),{isSearchFormActive:E,isSearchLoading:_,searchWithPremium:T,premium:O,isSearchActive:W,secondName:f,searchedCustomers:l,addSearchQuery:r,resetSearch:k,searchUserCustomers:N}=Fe($,m,y.currentUser.id),M=ye(()=>W.value?l.value:p.value),{currentPage:P,paginatedElements:j,isInverseSort:I,elemetsPerPage:B,totalPages:L,setSortField:G}=De({tableElements:M,pageName:"clients-page",sortField:C,route:$,router:m});return(g,s)=>{const re=a("v-snackbar"),ne=a("TableActions"),ue=a("v-text-field"),R=a("v-col"),ie=a("v-checkbox"),de=a("v-switch"),me=a("v-scale-transition"),oe=a("v-btn"),se=a("v-row"),ce=a("v-expand-transition"),ve=a("v-alert-title"),pe=a("v-alert"),_e=a("v-progress-circular"),fe=a("v-sheet"),ge=a("v-pagination"),he=a("v-card");return D(),we("div",null,[o(re,{modelValue:e(i).isMessageShown,"onUpdate:modelValue":s[0]||(s[0]=n=>e(i).isMessageShown=n),"max-width":500,color:e(i).messageType},{default:t(()=>[z("p",Pe,te(e(i).messageText),1)]),_:1},8,["modelValue","color"]),Be,o(he,{color:"white",elevation:"3",class:"pa-5 mb-6 rounded-lg mx-sm-0 mx-n5"},{default:t(()=>[o(ne,{count:e(B),"onUpdate:count":[s[1]||(s[1]=n=>h(B)?B.value=n:null),s[2]||(s[2]=n=>B.value=n)],onToggleAddDialog:s[3]||(s[3]=n=>d.value=!0),onToggleSearch:s[4]||(s[4]=n=>E.value=!e(E)),"is-badge-active":!!g.$route.query.secondName},{default:t(()=>[v(" Все клиенты ")]),_:1},8,["count","is-badge-active"]),o(ce,null,{default:t(()=>[e(E)?(D(),A(se,{key:0,class:"mb-5",align:"center"},{default:t(()=>[o(R,{cols:"8"},{default:t(()=>[o(ue,{label:"Имя клиента",modelValue:e(f),"onUpdate:modelValue":s[5]||(s[5]=n=>h(f)?f.value=n:null),"onClick:clear":s[6]||(s[6]=n=>f.value="")},null,8,["modelValue"])]),_:1}),o(R,{cols:"auto"},{default:t(()=>[o(ie,{modelValue:e(T),"onUpdate:modelValue":s[7]||(s[7]=n=>h(T)?T.value=n:null),color:"indigo-darken-4",label:"Искать с премиумом"},null,8,["modelValue"])]),_:1}),o(me,{"leave-absolute":!0},{default:t(()=>[e(T)?(D(),A(R,{key:0,cols:"auto"},{default:t(()=>[o(de,{modelValue:e(O),"onUpdate:modelValue":s[8]||(s[8]=n=>h(O)?O.value=n:null),"true-value":1,"false-value":0,color:"indigo-darken-4",label:"Есть премиум?"},null,8,["modelValue"])]),_:1})):Q("",!0)]),_:1}),o(R,{cols:"12"},{default:t(()=>[o(se,null,{default:t(()=>[o(R,{cols:"auto"},{default:t(()=>[o(oe,{variant:"flat",disabled:e(_),color:"green-darken-3",onClick:e(r)},{default:t(()=>[v(" Искать ")]),_:1},8,["disabled","onClick"])]),_:1}),o(R,{cols:"auto"},{default:t(()=>[o(oe,{variant:"flat",disabled:e(_),color:"error",onClick:e(k)},{default:t(()=>[v(" Сбросить поиск ")]),_:1},8,["disabled","onClick"])]),_:1}),o(R,{cols:"auto"},{default:t(()=>[o(oe,{variant:"flat",disabled:e(_),color:"blue-darken-4",onClick:s[9]||(s[9]=n=>E.value=!1)},{default:t(()=>[v(" Закрыть поиск ")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1})):Q("",!0)]),_:1}),e(w)?(D(),A(pe,{key:0,type:"error",border:"end",variant:"tonal"},{default:t(()=>[o(ve,{class:"mb-2"},{default:t(()=>[v(" Ошибка при загрузке клиентов")]),_:1}),z("p",null,te(e(w)),1)]),_:1})):e(_)?Q("",!0):(D(),A(Ue,{key:1,items:e(j),fields:U.value,"no-data-text":"Клиенты не найдены","current-sort-field":C.value,"onUpdate:currentSortField":[s[10]||(s[10]=n=>C.value=n),s[11]||(s[11]=n=>e(G)(n))],"is-inverse-sort":e(I),onOpenDialog:s[12]||(s[12]=(n,be)=>e(S)(n,be))},null,8,["items","fields","current-sort-field","is-inverse-sort"])),e(_)?(D(),A(fe,{key:2,class:"text-center mb-2"},{default:t(()=>[o(_e,{indeterminate:"",size:"32",color:"green"})]),_:1})):Q("",!0),e(M).length?(D(),A(ge,{key:3,length:e(L),modelValue:e(P),"onUpdate:modelValue":s[13]||(s[13]=n=>h(P)?P.value=n:null),rounded:"circle","total-visible":7,color:"deep-purple-darken-4"},null,8,["length","modelValue"])):Q("",!0)]),_:1}),e(x)?(D(),A(Me,{key:0,"is-opened":e(b),onCloseDialog:s[14]||(s[14]=n=>b.value=!1),"is-search-active":e(W),onUpdateSearchCustomers:e(N),customer:e(x)},null,8,["is-opened","is-search-active","onUpdateSearchCustomers","customer"])):Q("",!0),e(x)?(D(),A(qe,{key:1,"is-opened":e(c),onCloseDialog:s[15]||(s[15]=n=>c.value=!1),"is-search-active":e(W),onUpdateSearchCustomers:e(N),customer:e(x)},null,8,["is-opened","is-search-active","onUpdateSearchCustomers","customer"])):Q("",!0),o(Ee,{"is-opened":e(d),onCloseDialog:s[16]||(s[16]=n=>d.value=!1)},null,8,["is-opened"])])}}});export{je as default};
