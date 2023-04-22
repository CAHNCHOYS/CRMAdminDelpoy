System.register(["./index-legacy-8b0be313.js","./alert-legacy-299e871f.js","./useFormSchemas-legacy-4c013c40.js"],(function(e,a){"use strict";var t,l,r,o,s,i,n,d,c,u,m,g,p,f,h,b,v,x,w,y,_,k,S,M,V,z,q,T,F=document.createElement("style");return F.textContent='.fullscreen[data-v-82b06e6a]{position:relative;padding:20px 15px}.form-card[data-v-82b06e6a]{position:relative;z-index:4}.bg-image[data-v-82b06e6a]{position:absolute;width:100%;height:100%;top:0;left:0;z-index:2}.bg-image[data-v-82b06e6a]:before{content:"";position:absolute;z-index:3;width:100%;height:100%;top:0;left:0;background-color:rgba(196,196,196,.3)}.form-title[data-v-82b06e6a]{background-color:#c6d9ee;font-weight:600;color:#0f1e54}.alert[data-v-82b06e6a]{position:fixed;z-index:1000;left:10px;top:15px;width:calc(100% - 20px)!important;height:auto}.icon[data-v-82b06e6a]{opacity:1!important;color:#0f1e54}\n',document.head.appendChild(F),{setters:[e=>{t=e.d,l=e.r,r=e.u,o=e.A,s=e.a,i=e.i,n=e.h,d=e.w,c=e.c,u=e.b,m=e.e,g=e.f,p=e.g,f=e.j,h=e.k,b=e.o,v=e.l,x=e.t,w=e.m,y=e.n,_=e.p,k=e.q,S=e.s,M=e._},e=>{V=e.u},e=>{z=e.u,q=e.a,T=e.b}],execute:function(){const F=""+new URL("bg-ffc91902.png",a.meta.url).href,U=e=>(k("data-v-82b06e6a"),e=e(),S(),e),j={class:"fullscreen h-100 d-flex justify-center align-center"},C={class:"text-white text-h6"},E=U((()=>w("div",{class:"form-title text-center text-h4 py-4"},"Авторизация",-1))),A=U((()=>w("span",{class:"text-white text-h6 font-weight-medium"},"Войти",-1))),L={class:"mt-2"},O=U((()=>w("span",{class:"text-decoration-underline text-green"}," Зарегистрироваться ",-1)));e("default",M(t({__name:"LoginView",setup(e){const{loginSchema:a}=z(),{handleSubmit:t,isSubmitting:k,resetForm:S}=q({validationSchema:a}),{value:M,errorMessage:U}=T("email"),{value:$,errorMessage:B}=T("password"),D=l(!1),I=r(),P=V(),R=p(),G=f(),H=t((async e=>{try{const{data:a}=await o.login(e);I.setToken(a.token),I.setUser(a.user),await I.fetchData(),s.defaults.headers.common.Authorization=`Bearer ${a.token}`,P.showMessage("success","Авторизация успешна, вскоре вы будете переведены на сайт"),setTimeout((()=>{R.query.redirectedFrom?G.push({name:R.query.redirectedFrom}):G.push("/")}),3500)}catch(a){i(a)?P.showMessage("error",n(a)):P.showMessage("error","Ошибка при авторизации, попробуйте позже")}finally{S()}}));return d((()=>{R.query.redirectedFrom&&!R.query.isExpiredToken&&P.showMessage("error",`Для доступа к странице ${R.query.redirectedFrom} необходимо авторизироваться`),R.query.isExpiredToken&&(P.showMessage("error","Сеанс авторизации истек, войдите в аккаунт снова!"),I.logOutUser())})),(e,a)=>{const t=h("v-alert-title"),l=h("v-alert"),r=h("v-dialog-transition"),o=h("v-card-title"),s=h("v-icon"),i=h("v-text-field"),n=h("v-col"),d=h("v-btn"),p=h("router-link"),f=h("v-row"),S=h("v-form"),V=h("v-card-actions"),z=h("v-card"),q=h("v-img");return b(),c("div",j,[u(r,null,{default:m((()=>[u(l,{class:"alert",type:g(P).messageType,"max-width":400,modelValue:g(P).isMessageShown,"onUpdate:modelValue":a[0]||(a[0]=e=>g(P).isMessageShown=e)},{default:m((()=>[u(t,{class:"text-h4 mb-2"},{default:m((()=>[v(x("error"===g(P).messageType?"Ошибка":"Уведомление"),1)])),_:1}),w("div",C,x(g(P).messageText),1)])),_:1},8,["type","modelValue"])])),_:1}),u(z,{class:"form-card flex-grow-1 pb-8 rounded-lg","max-width":486,elevation:0},{default:m((()=>[E,u(V,{class:"pt-4 pb-1 px-lg-10 px-md-8 px-4"},{default:m((()=>[u(S,{onSubmit:y(g(H),["prevent"]),class:"w-100"},{default:m((()=>[u(o,{class:"text-indigo-darken-2 text-center mb-2"},{default:m((()=>[v(" Введите ваши данные")])),_:1}),u(f,null,{default:m((()=>[u(n,{cols:"12"},{default:m((()=>[u(i,{modelValue:g(M),"onUpdate:modelValue":a[1]||(a[1]=e=>_(M)?M.value=e:null),"error-messages":g(U),"bg-color":"rgba(229, 229, 229, 0.25)",placeholder:"Ваша почта",hint:"Ваша почта при регистрации",clearable:""},{"prepend-inner":m((()=>[u(s,{icon:"mdi-email",class:"icon mr-lg-3 mr-1",size:"large"})])),_:1},8,["modelValue","error-messages","bg-color"])])),_:1}),u(n,{cols:"12"},{default:m((()=>[u(i,{modelValue:g($),"onUpdate:modelValue":a[3]||(a[3]=e=>_($)?$.value=e:null),"error-messages":g(B),"bg-color":"rgba(229, 229, 229, 0.25)",placeholder:"Ваш пароль",hint:"Ваш пароль при регистрации",type:D.value?"text":"password",clearable:""},{"prepend-inner":m((()=>[u(s,{icon:"mdi-lock",class:"icon mr-lg-3 mr-1",size:"large"})])),"append-inner":m((()=>[u(s,{onClick:a[2]||(a[2]=e=>D.value=!D.value),class:"text-dark-blue",icon:D.value?"mdi-eye":"mdi-eye-off",size:"large"},null,8,["icon"])])),_:1},8,["modelValue","error-messages","bg-color","type"])])),_:1}),u(n,null,{default:m((()=>[u(d,{type:"submit",loading:g(k),disabled:g(k)||g(P).isMessageShown,block:"",color:"dark-blue",variant:"flat"},{default:m((()=>[A])),_:1},8,["loading","disabled"]),w("p",L,[u(p,{to:{name:"register-page"},class:"text-black text-h6"},{default:m((()=>[v("Нет аккаунта? "),O])),_:1})])])),_:1})])),_:1})])),_:1},8,["onSubmit"])])),_:1})])),_:1}),u(q,{class:"bg-image",cover:"",src:g(F),alt:"OfficePic"},null,8,["src"])])}}}),[["__scopeId","data-v-82b06e6a"]]))}}}));
