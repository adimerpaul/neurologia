import{c as x,a as g,d as v,e as w,_ as C,F as Q,r as d,o as i,f as m,w as t,Q as k,g as c,h as s,i as M,j as e,k as _,l as n,m as y,n as T,p as h,q as L,s as z,t as I,v as V}from"./index.fcb58617.js";var P=x({name:"QTab",props:g,emits:v,setup(r,{slots:o,emit:p}){const{renderTab:u}=w(r,o,p);return()=>u("div")}});const q={name:"MainLayout",components:{FooterComponent:Q},data(){return{modalMenu:!1}}},B={class:"bg-primary text-right"},F={class:"text-subtitle1 text-center"};function E(r,o,p,u,a,N){const f=d("router-view"),b=d("FooterComponent");return i(),m(k,{view:"lHh Lpr fff"},{default:t(()=>[c("div",B,[r.$q.screen.lt.md?(i(),m(s,{key:0,icon:"o_menu",color:"white",flat:"",onClick:o[0]||(o[0]=l=>a.modalMenu=!0)})):(i(),m(M,{key:1,class:""},{default:t(()=>[e(_),e(y,{shrink:"",class:"text-white"},{default:t(()=>[e(n,{name:"Inicio",label:"Inicio",to:"/","no-caps":""}),e(n,{name:"Programa general",label:"Programa general",to:"/programa","no-caps":""}),e(n,{name:"Contactos",label:"Contactos",to:"/contacto","no-caps":""}),e(n,{name:"Mapa",label:"Lugar Evento",to:"/mapa","no-caps":""}),e(P,{name:"ingresar","no-caps":""},{default:t(()=>[e(s,{label:"Ingresar",to:"/login",color:"white","text-color":"black","no-caps":"",size:"14px"})]),_:1})]),_:1})]),_:1}))]),e(T,null,{default:t(()=>[e(f)]),_:1}),e(b),e(V,{modelValue:a.modalMenu,"onUpdate:modelValue":o[6]||(o[6]=l=>a.modalMenu=l),position:"top"},{default:t(()=>[e(h,{class:"q-pa-md bg-primary"},{default:t(()=>[e(L,{class:"q-pa-md"},{default:t(()=>[c("div",F,[e(z,{header:"",class:"text-h6"},{default:t(()=>[I("Menu")]),_:1})]),e(s,{label:"Inicio",color:"primary",to:"/",size:"14px",class:"full-width text-bold text-white",flat:"",onClick:o[1]||(o[1]=l=>a.modalMenu=!1)}),e(s,{label:"Programa general",color:"primary",to:"/programa",size:"14px",class:"full-width text-bold text-white",flat:"",onClick:o[2]||(o[2]=l=>a.modalMenu=!1)}),e(s,{label:"Contactos",color:"primary",to:"/contacto",size:"14px",class:"full-width text-bold text-white",flat:"",onClick:o[3]||(o[3]=l=>a.modalMenu=!1)}),e(s,{label:"Lugar Evento",color:"primary",to:"/mapa",size:"14px",class:"full-width text-bold text-white",flat:"",onClick:o[4]||(o[4]=l=>a.modalMenu=!1)}),e(s,{icon:"login",label:"Ingresar",to:"/login",color:"primary",size:"14px",class:"full-width text-bold text-white",flat:"",onClick:o[5]||(o[5]=l=>a.modalMenu=!1)})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}var S=C(q,[["render",E]]);export{S as default};