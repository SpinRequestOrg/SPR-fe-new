import{h as f,a0 as _,a1 as v,o as b,n as y,w as s,a,b as t,_ as l,d,a2 as g,a3 as x,a4 as N,a5 as V}from"./BP-Jkhhp.js";const w={class:"grid items-center grid-cols-[auto_1fr_auto] gap-2"},F={class:"relative w-full"},B=f({__name:"number-input",props:_({min:{default:0},step:{default:1},id:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(u){const o=v(u,"modelValue");return(n,e)=>{const i=g,r=x,m=N,p=V;return b(),y(p,{id:n.id,class:"text-sm text-white",min:n.min,step:n.step,"default-value":o.value,"onUpdate:modelValue":e[0]||(e[0]=c=>o.value=c)},{default:s(()=>[a("div",w,[t(i,{"as-child":""},{default:s(()=>[t(l,{class:"h-full aspect-square rounded-full",size:"icon",variant:"secondary"},{default:s(()=>e[1]||(e[1]=[d(" - ")])),_:1})]),_:1}),a("div",F,[e[2]||(e[2]=a("div",{class:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"},[a("span",{class:"text-muted-foreground sm:text-sm"},"₦")],-1)),t(r,{class:"outline-none ring-[0.5px] max-w-28 rounded-md focus:ring-primary pr-4 pl-6 py-2 bg-white/5 border-none tabular-nums"})]),t(m,{"as-child":""},{default:s(()=>[t(l,{class:"h-full aspect-square rounded-full",size:"icon",variant:"secondary"},{default:s(()=>e[3]||(e[3]=[d(" + ")])),_:1})]),_:1})])]),_:1},8,["id","min","step","default-value"])}}});export{B as _};