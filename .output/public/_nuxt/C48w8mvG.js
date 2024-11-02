import{_ as ae}from"./NNAKqq86.js";import{h as M,o as m,n as F,w as a,ab as k,b as u,d as _,_ as y,a as p,t as W,c as L,j as re,q as le,F as ce,Q as ue,m as U,ac as fe}from"./BP-Jkhhp.js";import{_ as de}from"./BXUezrAx.js";import{e as pe,D as me}from"./AngBzdxv.js";import{u as _e}from"./Bo9_g9zS.js";const ye={class:"p-[25px]"},ve={class:"py-6 text-2xl font-medium text-center font-display"},ge={class:"flex items-center gap-4"},we=M({__name:"confirm-dialog",props:{message:{default:"Are you sure you want to continue?"},closeOnConfirm:{type:Boolean,default:!0},onConfirm:{}},setup(f){const n=f,t=o=>{var e;(e=n.onConfirm)==null||e.call(n),n.closeOnConfirm&&(o==null||o())};return(o,e)=>{const r=de;return m(),F(r,{size:"sm"},{trigger:a(()=>[k(o.$slots,"default",{},()=>[u(y,{variant:"destructive"},{default:a(()=>e[0]||(e[0]=[_("Confirm")])),_:1})])]),default:a(({toggle:c})=>[p("div",ye,[p("div",ve,W(o.message),1),p("div",ge,[u(y,{variant:"destructive",class:"w-full",onClick:g=>t(c)},{default:a(()=>e[1]||(e[1]=[_(" Yes ")])),_:2},1032,["onClick"]),u(y,{variant:"outline",class:"w-full",onClick:c},{default:a(()=>e[2]||(e[2]=[_(" No ")])),_:2},1032,["onClick"])])])]),_:3})}}}),Oe={direction:"forward",speed:2,startDelay:1e3,active:!0,breakpoints:{},playOnInit:!0,stopOnFocusIn:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,rootNode:null};function V(f={}){let n,t,o,e=!1,r=!0,c=0,g,T;function q(s,i){t=s;const{mergeOptions:w,optionsAtMedia:O}=i,S=w(Oe,V.globalOptions),B=w(S,f);if(n=O(B),t.scrollSnapList().length<=1)return;g=n.startDelay,o=!1,T=t.internalEngine().scrollBody;const{eventStore:d}=t.internalEngine(),b=t.rootNode(),x=n.rootNode&&n.rootNode(b)||b,N=t.containerNode();t.on("pointerDown",l),n.stopOnInteraction||t.on("pointerUp",h),n.stopOnMouseEnter&&(d.add(x,"mouseenter",()=>{r=!1,l()}),n.stopOnInteraction||d.add(x,"mouseleave",()=>{r=!0,v()})),n.stopOnFocusIn&&(t.on("slideFocusStart",l),n.stopOnInteraction||d.add(N,"focusout",v)),n.playOnInit&&v()}function Q(){t.off("pointerDown",l).off("pointerUp",h).off("slideFocusStart",l).off("settle",C),l(),o=!0,e=!1}function v(){if(o||e||!r)return;t.emit("autoScroll:play");const s=t.internalEngine(),{ownerWindow:i}=s;c=i.setTimeout(()=>{s.scrollBody=Y(s),s.animation.start()},g),e=!0}function l(){if(o||!e)return;t.emit("autoScroll:stop");const s=t.internalEngine(),{ownerWindow:i}=s;s.scrollBody=T,i.clearTimeout(c),c=0,e=!1}function C(){r&&v(),t.off("settle",C)}function h(){t.on("settle",C)}function Y(s){const{location:i,previousLocation:w,offsetLocation:O,target:S,scrollTarget:B,index:d,indexPrevious:b,limit:{reachedMin:x,reachedMax:N,constrain:X},options:{loop:Z}}=s,ee=n.direction==="forward"?-1:1,E=()=>$;let D=0,A=0,I=i.get(),P=0,z=!1;function te(ne){const oe=ne/1e3;let R=0;w.set(i),D=ee*n.speed*55,I+=D,i.add(D*oe),S.set(i),R=I-P,A=Math.sign(R),P=I;const j=B.byDistance(0,!1).index;d.get()!==j&&(b.set(d.get()),d.set(j),t.emit("select"));const se=n.direction==="forward"?x(O.get()):N(O.get());if(!Z&&se){z=!0;const ie=X(i.get());i.set(ie),S.set(i),l()}return $}const $={direction:()=>A,duration:()=>-1,velocity:()=>D,settled:()=>z,seek:te,useBaseFriction:E,useBaseDuration:E,useFriction:E,useDuration:E};return $}function G(s){typeof s<"u"&&(g=s),r=!0,v()}function H(){e&&l()}function J(){e&&(l(),h())}function K(){return e}return{name:"autoScroll",options:f,init:q,destroy:Q,play:G,stop:H,reset:J,isPlaying:K}}V.globalOptions=void 0;const Se={class:"flex flex-row [&_>_*]:shrink-0 h-full items-center"},be=M({__name:"auto-scroll-carousel",setup(f){const[n]=pe({loop:!0},[V({stopOnInteraction:!1,stopOnFocusIn:!1,stopOnMouseEnter:!1,startDelay:10,speed:1.2})]);return(t,o)=>(m(),L("div",{class:"overflow-hidden",ref_key:"emblaRef",ref:n},[k(t.$slots,"container",{},()=>[p("div",Se,[k(t.$slots,"default")])])],512))}}),xe={class:"fixed left-0 right-0 bg-[#FFEE99] py-2 z-[20]"},Ee={class:"container flex justify-between items-center relative z-10"},Ie=M({__name:"live-banner",props:{startDate:{},onEndEvent:{},ending:{type:Boolean},user:{default:"host"},animate:{type:Boolean,default:!1}},setup(f){const n=f,t=re(()=>{const o=_e(),e=n.startDate;return e?fe(e,o.value):"00:00:00"});return(o,e)=>{const r=ae;return m(),L("div",xe,[o.animate?(m(),F(be,{key:0,class:"absolute inset-0"},{default:a(()=>[(m(),L(ce,null,ue(40,c=>p("div",{key:c,class:"font-semibold text-background mx-2 flex items-center gap-x-2"},[u(U(me)),e[0]||(e[0]=p("span",null,"LIVE",-1))])),64))]),_:1})):le("",!0),p("div",Ee,[u(r,null,{fallback:a(()=>[u(y,{variant:"outline",class:"min-w-[100px]"},{default:a(()=>e[1]||(e[1]=[_("00:00:00")])),_:1})]),default:a(()=>[u(y,{variant:"outline",class:"min-w-[100px]"},{default:a(()=>[_(W(U(t)),1)]),_:1})]),_:1}),o.user==="host"?(m(),F(we,{key:0,onConfirm:o.onEndEvent,message:"Are you sure you want to end this event?"},{default:a(()=>[u(y,{variant:"destructive",ending:o.ending},{default:a(()=>e[2]||(e[2]=[_("END EVENT")])),_:1},8,["ending"])]),_:1},8,["onConfirm"])):k(o.$slots,"default",{key:1})])])}}});export{we as _,Ie as a};