import{c as re,a as M,g as Z,n as se,s as ee,l as ue,d as R,p as W,e as te,f as H,h as ce,i as K,r as Y,j as f,w as N,k as G,m as de,o as g,T as ve,q as fe,t as U,K as me,v as J,x as pe,y as ge,z as ie,A as le,H as ne,B as he,C as _e,D as ye,E as be,Q as x,F as xe,_ as Ce,G as Pe,I as oe,J as D,L as j,M as P,O as qe,P as h,R as C,S as Se,U as we,V as ke,W as Ie,X as Ae,Y as $e,Z as Te,$ as Ne,a0 as X,a1 as Ee}from"./index.a90f29b7.js";function Ve(e){const n=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((l,s)=>{const a=parseFloat(l);a&&(n[s]=a)}),n}var Be=re({name:"touch-swipe",beforeMount(e,{value:n,arg:l,modifiers:s}){if(s.mouse!==!0&&M.has.touch!==!0)return;const a=s.mouseCapture===!0?"Capture":"",t={handler:n,sensitivity:Ve(l),direction:Z(s),noop:se,mouseStart(i){ee(i,t)&&ue(i)&&(R(t,"temp",[[document,"mousemove","move",`notPassive${a}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(i,!0))},touchStart(i){if(ee(i,t)){const r=i.target;R(t,"temp",[[r,"touchmove","move","notPassiveCapture"],[r,"touchcancel","end","notPassiveCapture"],[r,"touchend","end","notPassiveCapture"]]),t.start(i)}},start(i,r){M.is.firefox===!0&&W(e,!0);const c=te(i);t.event={x:c.left,y:c.top,time:Date.now(),mouse:r===!0,dir:!1}},move(i){if(t.event===void 0)return;if(t.event.dir!==!1){H(i);return}const r=Date.now()-t.event.time;if(r===0)return;const c=te(i),p=c.left-t.event.x,u=Math.abs(p),_=c.top-t.event.y,v=Math.abs(_);if(t.event.mouse!==!0){if(u<t.sensitivity[1]&&v<t.sensitivity[1]){t.end(i);return}}else if(window.getSelection().toString()!==""){t.end(i);return}else if(u<t.sensitivity[2]&&v<t.sensitivity[2])return;const y=u/r,q=v/r;t.direction.vertical===!0&&u<v&&u<100&&q>t.sensitivity[0]&&(t.event.dir=_<0?"up":"down"),t.direction.horizontal===!0&&u>v&&v<100&&y>t.sensitivity[0]&&(t.event.dir=p<0?"left":"right"),t.direction.up===!0&&u<v&&_<0&&u<100&&q>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&u<v&&_>0&&u<100&&q>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&u>v&&p<0&&v<100&&y>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&u>v&&p>0&&v<100&&y>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(H(i),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),ce(),t.styleCleanup=$=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const S=()=>{document.body.classList.remove("no-pointer-events--children")};$===!0?setTimeout(S,50):S()}),t.handler({evt:i,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:r,distance:{x:u,y:v}})):t.end(i)},end(i){t.event!==void 0&&(K(t,"temp"),M.is.firefox===!0&&W(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),i!==void 0&&t.event.dir!==!1&&H(i),t.event=void 0)}};if(e.__qtouchswipe=t,s.mouse===!0){const i=s.mouseCapture===!0||s.mousecapture===!0?"Capture":"";R(t,"main",[[e,"mousedown","mouseStart",`passive${i}`]])}M.has.touch===!0&&R(t,"main",[[e,"touchstart","touchStart",`passive${s.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const l=e.__qtouchswipe;l!==void 0&&(n.oldValue!==n.value&&(typeof n.value!="function"&&l.end(),l.handler=n.value),l.direction=Z(n.modifiers))},beforeUnmount(e){const n=e.__qtouchswipe;n!==void 0&&(K(n,"main"),K(n,"temp"),M.is.firefox===!0&&W(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchswipe)}});function Fe(){const e=new Map;return{getCache:function(n,l){return e[n]===void 0?e[n]=l:e[n]},getCacheWithFn:function(n,l){return e[n]===void 0?e[n]=l():e[n]}}}const Me={name:{required:!0},disable:Boolean},ae={setup(e,{slots:n}){return()=>g("div",{class:"q-panel scroll",role:"tabpanel"},U(n.default))}},De={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Le=["update:modelValue","beforeTransition","transition"];function Oe(){const{props:e,emit:n,proxy:l}=G(),{getCacheWithFn:s}=Fe();let a,t;const i=Y(null),r=Y(null);function c(o){const d=e.vertical===!0?"up":"left";w((l.$q.lang.rtl===!0?-1:1)*(o.direction===d?1:-1))}const p=f(()=>[[Be,c,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),u=f(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),_=f(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),v=f(()=>`--q-transition-duration: ${e.transitionDuration}ms`),y=f(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),q=f(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),$=f(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);N(()=>e.modelValue,(o,d)=>{const b=k(o)===!0?V(o):-1;t!==!0&&T(b===-1?0:b<V(d)?-1:1),i.value!==b&&(i.value=b,n("beforeTransition",o,d),de(()=>{n("transition",o,d)}))});function S(){w(1)}function O(){w(-1)}function E(o){n("update:modelValue",o)}function k(o){return o!=null&&o!==""}function V(o){return a.findIndex(d=>d.props.name===o&&d.props.disable!==""&&d.props.disable!==!0)}function Q(){return a.filter(o=>o.props.disable!==""&&o.props.disable!==!0)}function T(o){const d=o!==0&&e.animated===!0&&i.value!==-1?"q-transition--"+(o===-1?u.value:_.value):null;r.value!==d&&(r.value=d)}function w(o,d=i.value){let b=d+o;for(;b>-1&&b<a.length;){const A=a[b];if(A!==void 0&&A.props.disable!==""&&A.props.disable!==!0){T(o),t=!0,n("update:modelValue",A.props.name),setTimeout(()=>{t=!1});return}b+=o}e.infinite===!0&&a.length!==0&&d!==-1&&d!==a.length&&w(o,o===-1?a.length:-1)}function B(){const o=V(e.modelValue);return i.value!==o&&(i.value=o),!0}function z(){const o=k(e.modelValue)===!0&&B()&&a[i.value];return e.keepAlive===!0?[g(me,q.value,[g($.value===!0?s(y.value,()=>({...ae,name:y.value})):ae,{key:y.value,style:v.value},()=>o)])]:[g("div",{class:"q-panel scroll",style:v.value,key:y.value,role:"tabpanel"},[o])]}function m(){if(a.length!==0)return e.animated===!0?[g(ve,{name:r.value},z)]:z()}function I(o){return a=fe(U(o.default,[])).filter(d=>d.props!==null&&d.props.slot===void 0&&k(d.props.name)===!0),a.length}function F(){return a}return Object.assign(l,{next:S,previous:O,goTo:E}),{panelIndex:i,panelDirectives:p,updatePanelsList:I,updatePanelIndex:B,getPanelContent:m,getEnabledPanels:Q,getPanels:F,isValidPanelName:k,keepAliveProps:q,needsUniqueKeepAliveWrapper:$,goToPanelByOffset:w,goToPanel:E,nextPanel:S,previousPanel:O}}var Qe=J({name:"QCarouselSlide",props:{...Me,imgSrc:String},setup(e,{slots:n}){const l=f(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>g("div",{class:"q-carousel__slide",style:l.value},U(n.default))}}),ze=J({name:"QCarouselControl",props:{position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,default:()=>[18,18],validator:e=>e.length===2}},setup(e,{slots:n}){const l=f(()=>`q-carousel__control absolute absolute-${e.position}`),s=f(()=>({margin:`${e.offset[1]}px ${e.offset[0]}px`}));return()=>g("div",{class:l.value,style:s.value},U(n.default))}});let L=0;const Re={fullscreen:Boolean,noRouteFullscreenExit:Boolean},je=["update:fullscreen","fullscreen"];function Ue(){const e=G(),{props:n,emit:l,proxy:s}=e;let a,t,i;const r=Y(!1);pe(e)===!0&&N(()=>s.$route.fullPath,()=>{n.noRouteFullscreenExit!==!0&&u()}),N(()=>n.fullscreen,_=>{r.value!==_&&c()}),N(r,_=>{l("update:fullscreen",_),l("fullscreen",_)});function c(){r.value===!0?u():p()}function p(){r.value!==!0&&(r.value=!0,i=s.$el.parentNode,i.replaceChild(t,s.$el),document.body.appendChild(s.$el),L++,L===1&&document.body.classList.add("q-body--fullscreen-mixin"),a={handler:u},ne.add(a))}function u(){r.value===!0&&(a!==void 0&&(ne.remove(a),a=void 0),i.replaceChild(s.$el,t),r.value=!1,L=Math.max(0,L-1),L===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),s.$el.scrollIntoView!==void 0&&setTimeout(()=>{s.$el.scrollIntoView()})))}return ge(()=>{t=document.createElement("span")}),ie(()=>{n.fullscreen===!0&&p()}),le(u),Object.assign(s,{toggleFullscreen:c,setFullscreen:p,exitFullscreen:u}),{inFullscreen:r,toggleFullscreen:c}}const We=["top","right","bottom","left"],He=["regular","flat","outline","push","unelevated"];var Ke=J({name:"QCarousel",props:{...he,...De,...Re,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>He.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>We.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...je,...Le],setup(e,{slots:n}){const{proxy:{$q:l}}=G(),s=_e(e,l);let a=null,t;const{updatePanelsList:i,getPanelContent:r,panelDirectives:c,goToPanel:p,previousPanel:u,nextPanel:_,getEnabledPanels:v,panelIndex:y}=Oe(),{inFullscreen:q}=Ue(),$=f(()=>q.value!==!0&&e.height!==void 0?{height:e.height}:{}),S=f(()=>e.vertical===!0?"vertical":"horizontal"),O=f(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(q.value===!0?" fullscreen":"")+(s.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${S.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${Q.value}`:"")),E=f(()=>{const m=[e.prevIcon||l.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||l.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&l.lang.rtl===!0?m.reverse():m}),k=f(()=>e.navigationIcon||l.iconSet.carousel.navigationIcon),V=f(()=>e.navigationActiveIcon||k.value),Q=f(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),T=f(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));N(()=>e.modelValue,()=>{e.autoplay&&w()}),N(()=>e.autoplay,m=>{m?w():a!==null&&(clearTimeout(a),a=null)});function w(){const m=be(e.autoplay)===!0?Math.abs(e.autoplay):5e3;a!==null&&clearTimeout(a),a=setTimeout(()=>{a=null,m>=0?_():u()},m)}ie(()=>{e.autoplay&&w()}),le(()=>{a!==null&&clearTimeout(a)});function B(m,I){return g("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${m} q-carousel__navigation--${Q.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[g("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},v().map(I))])}function z(){const m=[];if(e.navigation===!0){const I=n["navigation-icon"]!==void 0?n["navigation-icon"]:o=>g(x,{key:"nav"+o.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${o.active===!0?"":"in"}active`,...o.btnProps,onClick:o.onClick}),F=t-1;m.push(B("buttons",(o,d)=>{const b=o.props.name,A=y.value===d;return I({index:d,maxIndex:F,name:b,active:A,btnProps:{icon:A===!0?V.value:k.value,size:"sm",...T.value},onClick:()=>{p(b)}})}))}else if(e.thumbnails===!0){const I=e.controlColor!==void 0?` text-${e.controlColor}`:"";m.push(B("thumbnails",F=>{const o=F.props;return g("img",{key:"tmb#"+o.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${o.name===e.modelValue?"":"in"}active`+I,src:o.imgSrc||o["img-src"],onClick:()=>{p(o.name)}})}))}return e.arrows===!0&&y.value>=0&&((e.infinite===!0||y.value>0)&&m.push(g("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${S.value} absolute flex flex-center`},[g(x,{icon:E.value[0],...T.value,onClick:u})])),(e.infinite===!0||y.value<t-1)&&m.push(g("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${S.value} absolute flex flex-center`},[g(x,{icon:E.value[1],...T.value,onClick:_})]))),xe(n.control,m)}return()=>(t=i(n),g("div",{class:O.value,style:$.value},[ye("div",{class:"q-carousel__slides-container"},r(),"sl-cont",e.swipeable,()=>c.value)].concat(z())))}});const Xe={name:"MainLayout",components:{FooterComponent:Pe},data(){return{modalMenu:!1,slide:1,textos:[{titulo:"4ta. JORNADA NACIONAL DE NEUROLOG\xCDA",subtitulo:"Actualizaci\xF3n en Enfermedades Neurol\xF3gicas",fecha:"Fechas: 13, 14, 15 de septiembre",img:"WhatsApp Image 2023-08-05 at 15.53.45.jpeg"},{titulo:"2DO. SIMPOSIO INTERNACIONAL",subtitulo:"Emergencias Neurol\xF3gicas",fecha:"Fechas: 16 y 12 de septiembre",img:"WhatsApp Image 2023-08-05 at 15.53.45 (1).jpeg"}]}}},Ye={class:"text-center full-width q-pa-lg background"},Ge={class:"text-left titulo"},Je={class:"subtitulo"},Ze=C("br",null,null,-1),et=C("div",{class:"text-subtitle1 text-center"},"Principal",-1),tt=C("div",{class:"text-subtitle1 text-center"},"Quienes Somos",-1),nt=C("div",{class:"text-subtitle1 text-center"},"Objetivos",-1),ot=C("div",{class:"text-subtitle1 text-center"},"Ponentes",-1),at={class:"text-subtitle1 text-center"};function it(e,n,l,s,a,t){const i=oe("router-view"),r=oe("FooterComponent");return D(),j(qe,{view:"lHh Lpr fff"},{default:P(()=>[h(Ke,{height:e.$q.screen.lt.md?"35vh":"70vh",swipeable:"",animated:"",modelValue:a.slide,"onUpdate:modelValue":n[1]||(n[1]=c=>a.slide=c),arrows:"","navigation-icon":"radio_button_unchecked",infinite:"",autoplay:"",dark:""},{control:P(()=>[h(ze,{position:"top-right",offset:[18,18],class:"text-white rounded-borders"},{default:P(()=>[C("div",null,[e.$q.screen.lt.md?(D(),j(x,{key:0,icon:"o_menu",flat:"",onClick:n[0]||(n[0]=c=>a.modalMenu=!0)})):(D(),j(Se,{key:1,class:""},{default:P(()=>[h(x,{flat:"",label:"Principal",to:"/principal","no-caps":""}),h(x,{flat:"",label:"Quienes Somos","no-caps":""}),h(x,{flat:"",label:"Objetivos","no-caps":""}),h(x,{flat:"",label:"Ponentes","no-caps":""}),h(x,{label:"Ingresar",color:"primary",to:"/login","no-caps":"",size:"14px"})]),_:1}))])]),_:1})]),default:P(()=>[(D(!0),we(Ie,null,ke(a.textos,(c,p)=>(D(),j(Qe,{name:p+1,key:p,class:"column no-wrap flex-center q-pa-none","img-src":c.img},{default:P(()=>[C("div",Ye,[C("div",Ge,X(c.titulo),1),C("div",Je,X(c.subtitulo),1),Ze,Ee(" "+X(c.fecha)+" ",1),C("div",null,[h(x,{label:"Ingresa aqu\xED",color:"primary",class:"q-mt-md","no-caps":"",to:"/login"})])])]),_:2},1032,["name","img-src"]))),128))]),_:1},8,["height","modelValue"]),h(Ae,null,{default:P(()=>[h(i)]),_:1}),h(r),h(Ne,{modelValue:a.modalMenu,"onUpdate:modelValue":n[2]||(n[2]=c=>a.modalMenu=c),position:"top"},{default:P(()=>[h($e,{class:"q-pa-md"},{default:P(()=>[h(Te,{class:"q-pa-md"},{default:P(()=>[et,tt,nt,ot,C("div",at,[h(x,{label:"Ingresar",color:"primary",to:"/login","no-caps":"",size:"14px"})])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}var rt=Ce(Xe,[["render",it]]);export{rt as default};