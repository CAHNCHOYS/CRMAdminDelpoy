import{d as Z,r as w,o as u,c as N,m as _,U as A,V as S,t as E,b as o,e as a,W as I,k as s,_ as re,a as T,u as le,z as ie,B as de,i as U,h as M,f as x,y as k,x as ce,X as G,Y as P,n as X,l as V,Z as ue,C as Y}from"./index-a08b3a6a.js";import{u as ve}from"./alert-6022647f.js";const _e={class:"d-flex align-center"},pe={class:"flex-grow-1"},me=Z({__name:"Note",props:{note:null},emits:["deleteNote","dragstart","dragend","updateNote"],setup(f,{emit:c}){const B=f,p=w(!1),L=()=>{c("updateNote",B.note),p.value=!1};return(l,i)=>{const g=s("v-text-field"),d=s("v-icon"),h=s("v-hover");return u(),N("div",{class:"note py-3 px-4 bg-white mb-3",onDragstart:i[3]||(i[3]=r=>l.$emit("dragstart",r,f.note.id)),onDragend:i[4]||(i[4]=r=>l.$emit("dragend",r))},[_("div",_e,[A(_("div",{class:"text-h6 flex-grow-1 pr-1"},E(f.note.title),513),[[S,!p.value]]),A(_("div",pe,[o(g,{modelValue:f.note.title,"onUpdate:modelValue":i[0]||(i[0]=r=>f.note.title=r),density:"comfortable",variant:"underlined",clearable:!1,"bg-color":"white"},null,8,["modelValue"])],512),[[S,p.value]]),_("div",null,[o(h,null,{default:a(({props:r,isHovering:y})=>[o(d,I({icon:"mdi-trash-can",size:"large",color:y?"red-darken-3":"grey",onClick:i[1]||(i[1]=D=>l.$emit("deleteNote",f.note.id))},r),null,16,["color"])]),_:1}),o(h,null,{default:a(({props:r,isHovering:y})=>[A(o(d,I({onClick:i[2]||(i[2]=D=>p.value=!p.value),icon:"mdi-pencil",size:"large",color:y?"blue":"grey"},r),null,16,["color"]),[[S,!p.value]])]),_:1}),o(h,null,{default:a(({props:r,isHovering:y})=>[A(o(d,I({onClick:L,style:{cursor:"pointer"},icon:"mdi-content-save-all",size:"large",color:y?"green":"grey"},r),null,16,["color"]),[[S,p.value]])]),_:1})])])],32)}}});const fe=re(me,[["__scopeId","data-v-44834e74"]]);class ge{async getNotes(c){return T.get(`/Notes/${c}`)}async updateNote(c){return await T.patch("/Notes",c)}async deleteNote(c){return await T.delete(`/Notes/${c}`)}async addNote(c){return await T.post("/Notes",c)}}const F=new ge,he={class:"text-h6"},ye=_("div",{class:"text-h2 mb-8 title"},"Ваши заметки",-1),xe={key:0,class:""},we=_("p",{class:"mb-3 text-h6"},"Загрузка заметок ...",-1),Ne={key:0,color:"transparent","max-height":700,style:{overflow:"auto","max-height":"700px"}},be=["onClick"],ke=_("p",{class:"mb-2"},"Загрузка...",-1),Se=Z({__name:"NotesView",setup(f){const c=w([{title:"В процессе",isFormActive:!1,addText:""},{title:"Сделать потом",isFormActive:!1,addText:""},{title:"Сделано",isFormActive:!1,addText:""}]),B=(e,t)=>{e.target.classList.add("dragging"),e.dataTransfer.setData("id",t.toString())},p=e=>{e.target.classList.remove("dragging")},L=async(e,t)=>{var b;const m=(b=e.dataTransfer)==null?void 0:b.getData("id");if(m){const C=g.value.find($=>$.id===+m);C.type=t,await D(C)}},l=ve(),i=le(),g=w([]),d=w(!1),h=w(!1),r=w(null),y=ie(()=>function(e){return g.value.filter(t=>t.type===e)});de(async()=>{h.value=!0;try{const{data:e}=await F.getNotes(i.currentUser.id);g.value=e.notes}catch(e){U(e)?r.value=M(e):r.value="Ошибка при загрузке заметок!"}h.value=!1});const D=async e=>{d.value=!0;try{await F.updateNote(e)}catch(t){U(t)?l.showMessage("error",M(t)):l.showMessage("error","Ошибка при добавлении заметки!")}d.value=!1},j=async(e,t)=>{if(!(e.length<1)){d.value=!0;try{const{data:m}=await F.addNote({title:e,type:t,userId:i.currentUser.id});g.value.push({id:m.noteId,title:e,type:t})}catch(m){U(m)?l.showMessage("error",M(m)):l.showMessage("error","Ошибка при добавлении заметки!")}d.value=!1}},q=async e=>{d.value=!0;try{await F.deleteNote(e),g.value=g.value.filter(t=>t.id!=e)}catch(t){U(t)?l.showMessage("error",M(t)):l.showMessage("error","Ошибка при добавлении заметки!")}d.value=!1},H=(e,t)=>{Y.from(e,{opacity:0,scale:0,ease:"sine.out",duration:.6,onComplete:t})},J=(e,t)=>{Y.to(e,{duration:.6,ease:"sine.out",opacity:0,scale:0,onComplete:t})};return(e,t)=>{const m=s("v-snackbar"),b=s("v-progress-linear"),C=s("v-card-title"),$=s("v-alert-title"),z=s("v-alert"),K=s("v-icon"),O=s("v-text-field"),Q=s("v-btn"),R=s("v-form"),ee=s("v-expand-transition"),te=s("v-card-actions"),W=s("v-card"),oe=s("v-col"),ae=s("v-row"),se=s("v-card-text"),ne=s("v-dialog");return u(),N("div",null,[o(m,{modelValue:x(l).isMessageShown,"onUpdate:modelValue":t[0]||(t[0]=n=>x(l).isMessageShown=n),color:x(l).messageType},{default:a(()=>[_("p",he,E(x(l).messageText),1)]),_:1},8,["modelValue","color"]),ye,h.value?(u(),N("div",xe,[we,o(b,{color:"green",height:"4",indeterminate:""})])):(u(),k(ae,{key:1,class:"row"},{default:a(()=>[(u(!0),N(G,null,P(c.value,n=>(u(),k(oe,{key:n.title,onDragover:t[1]||(t[1]=X(()=>{},["prevent"])),onDrop:v=>L(v,n.title)},{default:a(()=>[o(W,{color:"blue-grey-darken-1 pa-4"},{default:a(()=>[o(C,{class:"text-h4 text-white mb-5 pa-0"},{default:a(()=>[V(E(n.title),1)]),_:2},1024),x(y)(n.title).length?(u(),N("div",Ne,[o(ue,{onEnter:H,onLeave:J,css:!1,appear:""},{default:a(()=>[(u(!0),N(G,null,P(x(y)(n.title),v=>(u(),k(fe,{key:v.id,note:v,onDeleteNote:q,onUpdateNote:D,draggable:"true",onDragstart:B,onDragend:p},null,8,["note"]))),128))]),_:2},1024)])):(u(),k(z,{key:1,color:"white",class:"mb-2","border-color":"white"},{default:a(()=>[o($,null,{default:a(()=>[V("Пока нет заметок, добавьте хоть одну !")]),_:1})]),_:1})),o(te,{class:"d-flex flex-column pa-0 align-stretch",style:{"min-height":"auto"}},{default:a(()=>[_("div",{onClick:v=>n.isFormActive=!n.isFormActive,style:{cursor:"pointer"}},[o(K,{icon:n.isFormActive?"mdi-minus":"mdi-plus"},null,8,["icon"]),V(" Добавить заметку ")],8,be),o(ee,null,{default:a(()=>[A(o(R,{onSubmit:X(v=>{j(n.addText,n.title),n.addText=""},["prevent"])},{default:a(()=>[o(O,{"bg-color":"white",color:"black",placeholder:"Задача...",modelValue:n.addText,"onUpdate:modelValue":v=>n.addText=v,class:"my-2 white-input",rules:[v=>!!v||"Поле обязательное для ввода"]},null,8,["modelValue","onUpdate:modelValue","rules"]),o(Q,{type:"submit",variant:"flat",color:"green"},{default:a(()=>[V("Добавить")]),_:1})]),_:2},1032,["onSubmit"]),[[S,n.isFormActive]])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onDrop"]))),128))]),_:1})),!h.value&&r.value?(u(),k(z,{key:2,type:"error",border:"end",variant:"tonal"},{default:a(()=>[o($,{class:"mb-2"},{default:a(()=>[V(" Ошибка при загрузке товаров ")]),_:1}),_("p",null,E(r.value),1)]),_:1})):ce("",!0),o(ne,{modelValue:d.value,"onUpdate:modelValue":t[2]||(t[2]=n=>d.value=n),scrim:!1,persistent:"",width:"auto"},{default:a(()=>[o(W,{color:"indigo-darken-4"},{default:a(()=>[o(se,null,{default:a(()=>[ke,o(b,{indeterminate:"",color:"white",class:"mb-0"})]),_:1})]),_:1})]),_:1},8,["modelValue"])])}}});export{Se as default};
