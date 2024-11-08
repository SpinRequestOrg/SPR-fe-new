import{_ as re}from"./9tlLPDsB.js";import{h as U,o as m,c as L,a6 as V,a as O,j as ie,p as j,w as c,v as ae,b as p,F as le,O as ce,n as z,_ as N,d as F,t as ue,a7 as fe}from"./CmKmz2PA.js";import{e as de,_ as pe}from"./L7Z0l0EL.js";import{u as me}from"./DNzFMpx1.js";import{D as ge}from"./Ch5q_c9-.js";const ye={direction:"forward",speed:2,startDelay:1e3,active:!0,breakpoints:{},playOnInit:!0,stopOnFocusIn:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,rootNode:null};function C(u={}){let n,e,s,t=!1,a=!0,f=0,b,M;function W(o,r){e=o;const{mergeOptions:g,optionsAtMedia:y}=r,_=g(ye,C.globalOptions),x=g(_,u);if(n=y(x),e.scrollSnapList().length<=1)return;b=n.startDelay,s=!1,M=e.internalEngine().scrollBody;const{eventStore:l}=e.internalEngine(),v=e.rootNode(),w=n.rootNode&&n.rootNode(v)||v,B=e.containerNode();e.on("pointerDown",i),n.stopOnInteraction||e.on("pointerUp",h),n.stopOnMouseEnter&&(l.add(w,"mouseenter",()=>{a=!1,i()}),n.stopOnInteraction||l.add(w,"mouseleave",()=>{a=!0,d()})),n.stopOnFocusIn&&(e.on("slideFocusStart",i),n.stopOnInteraction||l.add(B,"focusout",d)),n.playOnInit&&d()}function q(){e.off("pointerDown",i).off("pointerUp",h).off("slideFocusStart",i).off("settle",D),i(),s=!0,t=!1}function d(){if(s||t||!a)return;e.emit("autoScroll:play");const o=e.internalEngine(),{ownerWindow:r}=o;f=r.setTimeout(()=>{o.scrollBody=G(o),o.animation.start()},b),t=!0}function i(){if(s||!t)return;e.emit("autoScroll:stop");const o=e.internalEngine(),{ownerWindow:r}=o;o.scrollBody=M,r.clearTimeout(f),f=0,t=!1}function D(){a&&d(),e.off("settle",D)}function h(){e.on("settle",D)}function G(o){const{location:r,previousLocation:g,offsetLocation:y,target:_,scrollTarget:x,index:l,indexPrevious:v,limit:{reachedMin:w,reachedMax:B,constrain:X},options:{loop:Y}}=o,Z=n.direction==="forward"?-1:1,S=()=>I;let E=0,T=0,k=r.get(),$=0,A=!1;function ee(te){const ne=te/1e3;let P=0;g.set(r),E=Z*n.speed*55,k+=E,r.add(E*ne),_.set(r),P=k-$,T=Math.sign(P),$=k;const R=x.byDistance(0,!1).index;l.get()!==R&&(v.set(l.get()),l.set(R),e.emit("select"));const oe=n.direction==="forward"?w(y.get()):B(y.get());if(!Y&&oe){A=!0;const se=X(r.get());r.set(se),_.set(r),i()}return I}const I={direction:()=>T,duration:()=>-1,velocity:()=>E,settled:()=>A,seek:ee,useBaseFriction:S,useBaseDuration:S,useFriction:S,useDuration:S};return I}function H(o){typeof o<"u"&&(b=o),a=!0,d()}function J(){t&&i()}function K(){t&&(i(),h())}function Q(){return t}return{name:"autoScroll",options:u,init:W,destroy:q,play:H,stop:J,reset:K,isPlaying:Q}}C.globalOptions=void 0;const _e={class:"flex flex-row [&_>_*]:shrink-0 h-full items-center"},ve=U({__name:"auto-scroll-carousel",setup(u){const[n]=de({loop:!0},[C({stopOnInteraction:!1,stopOnFocusIn:!1,stopOnMouseEnter:!1,startDelay:10,speed:1.2})]);return(e,s)=>(m(),L("div",{class:"overflow-hidden",ref_key:"emblaRef",ref:n},[V(e.$slots,"container",{},()=>[O("div",_e,[V(e.$slots,"default")])])],512))}}),we={class:"fixed left-0 right-0 bg-[#FFEE99] py-2 z-[20]"},Se={class:"container flex justify-between items-center relative z-10"},Be=U({__name:"live-banner",props:{startDate:{},onEndEvent:{},ending:{type:Boolean},user:{default:"host"},animate:{type:Boolean,default:!1}},setup(u){const n=u,e=ie(()=>{const s=me(),t=n.startDate;return t?fe(t,s.value):"00:00:00"});return(s,t)=>{const a=re;return m(),L("div",we,[s.animate?(m(),j(ve,{key:0,class:"absolute inset-0"},{default:c(()=>[(m(),L(le,null,ce(40,f=>O("div",{key:f,class:"font-semibold text-background mx-2 flex items-center gap-x-2"},[p(z(ge)),t[0]||(t[0]=O("span",null,"LIVE",-1))])),64))]),_:1})):ae("",!0),O("div",Se,[p(a,null,{fallback:c(()=>[p(N,{variant:"outline",class:"min-w-[100px]"},{default:c(()=>t[1]||(t[1]=[F("00:00:00")])),_:1})]),default:c(()=>[p(N,{variant:"outline",class:"min-w-[100px]"},{default:c(()=>[F(ue(z(e)),1)]),_:1})]),_:1}),s.user==="host"?(m(),j(pe,{key:0,onConfirm:s.onEndEvent,message:"Are you sure you want to end this event?"},{default:c(()=>[p(N,{variant:"destructive",ending:s.ending},{default:c(()=>t[2]||(t[2]=[F("END EVENT")])),_:1},8,["ending"])]),_:1},8,["onConfirm"])):V(s.$slots,"default",{key:1})])])}}});export{Be as _};