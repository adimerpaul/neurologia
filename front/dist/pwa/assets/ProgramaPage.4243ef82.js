import{_ as m,o as s,f as _,w as t,y as x,g as a,j as r,q as c,C as n,D as i,E as p,p as h,I as d,t as f,J as v,K as y}from"./index.de4815e6.js";const P={name:"ProgramaPage",data(){return{programas:[]}},mounted(){this.$q.loading.show(),this.$axios.get("programa").then(e=>{this.programas=e.data}).catch(e=>{this.$alert.error(e.response.data.message)}).finally(()=>{this.$q.loading.hide()})},methods:{}},u=e=>(v("data-v-2e8beda2"),e=e(),y(),e),$={class:"row"},q={class:"col-12"},b=u(()=>a("div",{class:"text-center text-bold text-white"}," PROGRAMA GENERAL ",-1)),w={class:"text-h6 text-blue-10 text-bold text-center",style:{"text-decoration":"underline"}},k={class:"text-red"},I=u(()=>a("div",{class:"text-h6"},null,-1));function S(e,B,C,E,g,N){return s(),_(x,{class:"fondo q-pa-lg"},{default:t(()=>[a("div",$,[a("div",q,[r(h,{class:"q-pa-md bg-grey-3"},{default:t(()=>[r(c,{class:"text-h4 fondo"},{default:t(()=>[b]),_:1}),r(c,{class:"q-pa-none"},{default:t(()=>[(s(!0),n(p,null,i(g.programas,l=>(s(),_(h,{key:l.date,class:"q-my-md"},{default:t(()=>[r(c,null,{default:t(()=>[a("div",w,d(e.$filters.dateDdM(l.date)),1),(s(!0),n(p,null,i(l.videos,o=>(s(),n("div",{class:"text-h6 texto-programa",key:o.id},[a("span",k,d(o.hora),1),f(" | "+d(o.text)+"-"+d(o.title),1)]))),128))]),_:2},1024)]),_:2},1024))),128)),I]),_:1})]),_:1})])])]),_:1})}var D=m(P,[["render",S],["__scopeId","data-v-2e8beda2"]]);export{D as default};