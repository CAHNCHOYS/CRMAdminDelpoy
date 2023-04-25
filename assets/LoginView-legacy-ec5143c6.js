System.register(["./index-legacy-0d6d964e.js","./alert-legacy-c9f97587.js","./useFormSchemas-legacy-425f91b7.js"],(function(e,t){"use strict";var a,l,r,s,o,i,d,n,c,u,m,g,p,h,f,x,b,v,y,w,_,k,S,V,M,z,q,F,T,U,j,C,E,A,B,D,I,L,O,$,G,H=document.createElement("style");return H.textContent='.fullscreen[data-v-955e0cd7]{position:relative;padding:20px 15px}.form-card[data-v-955e0cd7]{position:relative;z-index:4}.bg-image[data-v-955e0cd7]{position:absolute;width:100%;height:100%;top:0;left:0;z-index:2}.bg-image[data-v-955e0cd7]:before{content:"";position:absolute;z-index:3;width:100%;height:100%;top:0;left:0;background-color:rgba(196,196,196,.3)}.form-title[data-v-955e0cd7]{background-color:#c6d9ee;font-weight:600;color:#0f1e54}.alert[data-v-955e0cd7]{position:fixed;z-index:1000;left:10px;top:15px;width:calc(100% - 20px)!important;height:auto}.icon[data-v-955e0cd7]{opacity:1!important;color:#0f1e54}\n',document.head.appendChild(H),{setters:[e=>{a=e.d,l=e.r,r=e.u,s=e.A,o=e.a,i=e.i,d=e.h,n=e.w,c=e.c,u=e.b,m=e.e,g=e.V,p=e.f,h=e.g,f=e.j,x=e.k,b=e.l,v=e.o,y=e.m,w=e.n,_=e.p,k=e.t,S=e.q,V=e.s,M=e.v,z=e.x,q=e.y,F=e.z,T=e.B,U=e.C,j=e.D,C=e.E,E=e.F,A=e.G,B=e.H,D=e.I,I=e._},e=>{L=e.u},e=>{O=e.u,$=e.a,G=e.b}],execute:function(){const H=""+new URL("bg-ffc91902.png",t.meta.url).href,P=e=>(B("data-v-955e0cd7"),e=e(),D(),e),R={class:"fullscreen h-100 d-flex justify-center align-center"},J={class:"text-white text-h6"},K=P((()=>S("div",{class:"form-title text-center text-h4 py-4"},"Авторизация",-1))),N=P((()=>S("span",{class:"text-white text-h6 font-weight-medium"},"Войти",-1))),Q={class:"mt-2"},W=P((()=>S("span",{class:"text-decoration-underline text-green"}," Зарегистрироваться ",-1)));e("default",I(a({__name:"LoginView",setup(e){const{loginSchema:t}=O(),{handleSubmit:a,isSubmitting:B,resetForm:D}=$({validationSchema:t}),{value:I,errorMessage:P}=G("email"),{value:X,errorMessage:Y}=G("password"),Z=l(!1),ee=r(),te=L(),ae=x(),le=b(),re=a((async e=>{try{const{data:t}=await s.login(e);ee.setToken(t.token),ee.setUser(t.user),await ee.fetchData(),o.defaults.headers.common.Authorization=`Bearer ${t.token}`,te.showMessage("success","Авторизация успешна, вскоре вы будете переведены на сайт"),setTimeout((()=>{ae.query.redirectedFrom?le.push({name:ae.query.redirectedFrom}):le.push("/")}),3500)}catch(t){i(t)?te.showMessage("error",d(t)):te.showMessage("error","Ошибка при авторизации, попробуйте позже")}finally{D()}}));return n((()=>{ae.query.redirectedFrom&&!ae.query.isExpiredToken&&te.showMessage("error",`Для доступа к странице ${ae.query.redirectedFrom} необходимо авторизироваться`),ae.query.isExpiredToken&&(te.showMessage("error","Сеанс авторизации истек, войдите в аккаунт снова!"),ee.logOutUser())})),(e,t)=>{const a=A("router-link");return v(),c("div",R,[u(g,null,{default:m((()=>[u(y,{class:"alert",type:h(te).messageType,"max-width":400,modelValue:h(te).isMessageShown,"onUpdate:modelValue":t[0]||(t[0]=e=>h(te).isMessageShown=e)},{default:m((()=>[u(w,{class:"text-h4 mb-2"},{default:m((()=>[_(k("error"===h(te).messageType?"Ошибка":"Уведомление"),1)])),_:1}),S("div",J,k(h(te).messageText),1)])),_:1},8,["type","modelValue"])])),_:1}),u(p,{class:"form-card flex-grow-1 pb-8 rounded-lg","max-width":486,elevation:0},{default:m((()=>[K,u(V,{class:"pt-4 pb-1 px-lg-10 px-md-8 px-4"},{default:m((()=>[u(M,{onSubmit:z(h(re),["prevent"]),class:"w-100"},{default:m((()=>[u(q,{class:"text-indigo-darken-2 text-center mb-2"},{default:m((()=>[_(" Введите ваши данные")])),_:1}),u(F,null,{default:m((()=>[u(T,{cols:"12"},{default:m((()=>[u(U,{modelValue:h(I),"onUpdate:modelValue":t[1]||(t[1]=e=>j(I)?I.value=e:null),"error-messages":h(P),"bg-color":"rgba(229, 229, 229, 0.25)",placeholder:"Ваша почта",hint:"Ваша почта при регистрации",clearable:""},{"prepend-inner":m((()=>[u(C,{icon:"mdi-email",class:"icon mr-lg-3 mr-1",size:"large"})])),_:1},8,["modelValue","error-messages","bg-color"])])),_:1}),u(T,{cols:"12"},{default:m((()=>[u(U,{modelValue:h(X),"onUpdate:modelValue":t[3]||(t[3]=e=>j(X)?X.value=e:null),"error-messages":h(Y),"bg-color":"rgba(229, 229, 229, 0.25)",placeholder:"Ваш пароль",hint:"Ваш пароль при регистрации",type:Z.value?"text":"password",clearable:""},{"prepend-inner":m((()=>[u(C,{icon:"mdi-lock",class:"icon mr-lg-3 mr-1",size:"large"})])),"append-inner":m((()=>[u(C,{onClick:t[2]||(t[2]=e=>Z.value=!Z.value),class:"text-dark-blue",icon:Z.value?"mdi-eye":"mdi-eye-off",size:"large"},null,8,["icon"])])),_:1},8,["modelValue","error-messages","bg-color","type"])])),_:1}),u(T,null,{default:m((()=>[u(E,{type:"submit",loading:h(B),disabled:h(B)||h(te).isMessageShown,block:"",color:"dark-blue",variant:"flat"},{default:m((()=>[N])),_:1},8,["loading","disabled"]),S("p",Q,[u(a,{to:{name:"register-page"},class:"text-black text-h6"},{default:m((()=>[_("Нет аккаунта? "),W])),_:1})])])),_:1})])),_:1})])),_:1},8,["onSubmit"])])),_:1})])),_:1}),u(f,{class:"bg-image",cover:"",src:h(H),alt:"OfficePic"},null,8,["src"])])}}}),[["__scopeId","data-v-955e0cd7"]]))}}}));
