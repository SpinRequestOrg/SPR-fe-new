import{_}from"./DQ9fuHlD.js";import{h as g,o as t,c as n,a as o,b as h,n as e,p as r,t as p,v as y,L as u,z as f}from"./DhYnNVen.js";import{u as b}from"./CCe5esQ8.js";const k={class:"border bg-white/5 p-6 rounded-2xl grid grid-cols-[56px_1fr_40px] lg:grid-cols-[56px_1fr_auto_40px] gap-x-4 items-center relative"},x={class:"aspect-square border bg-white/10 rounded-full grid place-items-center"},v={class:"space-y-px"},w={key:1,class:"text-xl lg:hidden font-semibold"},B={key:1,class:"text-3xl font-semibold hidden lg:block"},z=g({__name:"wallet",props:{hideCaret:{type:Boolean,default:!1}},setup(C){const{data:i,status:l}=b("/wallets");return(a,s)=>{var c,m;const d=_;return t(),n("div",k,[o("div",x,[h(d,{name:"wallet"})]),o("div",v,[s[0]||(s[0]=o("div",{class:"font-medium"},"Spin credits",-1)),s[1]||(s[1]=o("div",{class:"text-muted-foreground max-w-[350px]"}," Your refunds from failed request are kept here so that you can use it to request again ",-1)),e(l)==="pending"?(t(),r(e(u),{key:0,class:"size-6 animate-spin lg:hidden"})):(t(),n("div",w," ₦"+p(("formatMoney"in a?a.formatMoney:e(f))(((c=e(i))==null?void 0:c.wallet_balance)??0)),1))]),e(l)==="pending"?(t(),r(e(u),{key:0,class:"size-6 animate-spin hidden lg:block"})):(t(),n("div",B," ₦"+p(("formatMoney"in a?a.formatMoney:e(f))(((m=e(i))==null?void 0:m.wallet_balance)??0)),1)),a.hideCaret?y("",!0):(t(),r(d,{key:2,name:"right-caret"}))])}}});export{z as _};