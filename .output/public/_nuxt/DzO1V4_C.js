import{_ as O}from"./OWLNppFj.js";import{_ as Q}from"./CJILJlnD.js";import{h as I,k as J,j as F,m as K,o as l,c as m,b as r,n as e,w as $,a as t,t as a,z as u,G as j,H as N,v as c,d as W,_ as X}from"./B3oCP8tS.js";import{_ as Z}from"./Ce61rJgB.js";import{_ as ee}from"./jTEWzYvs.js";import{u as B}from"./fJQd6cbo.js";import{u as te}from"./DdZJIirX.js";import"./DMAhSTlz.js";import"./B9wSsAje.js";import"./P-jVyfhg.js";const se={class:"container py-10"},ne={class:"max-w-full w-[400px] mx-auto"},oe={class:"bg-white/5 border rounded-2xl p-6"},ae={class:"pb-6 space-y-1 text-center border-b"},re={class:"font-bold text-primary text-4xl"},ie={class:"my-6 space-y-4"},le={class:"flex items-center justify-between"},me={key:0,class:"flex items-center justify-between"},de={key:1,class:"flex items-center justify-between"},ue={key:2,class:"flex items-center justify-between"},ce={class:"flex items-center justify-between"},pe={class:"bg-white/5 border pt-1 pb-8 rounded-tr-3xl rounded-tl-3xl"},fe={class:"flex justify-center items-center gap-x-2"},Me=I({__name:"make-payment",setup(xe){const i=J(),{status:C,data:P,error:R}=B(`/requests/${i.params.request_id}`),{status:T,data:d,error:V}=B("/wallets"),o=F(()=>{var n;return(n=P.value)==null?void 0:n.data}),z=F(()=>{var n,s;return Number(((n=d.value)==null?void 0:n.wallet_balance)??0)>=Number(((s=o.value)==null?void 0:s.price)??0)}),{payForRequest:A,paying:H}=te(),Y=()=>{var n;o.value&&A(o.value,i.params.host,((n=d.value)==null?void 0:n.wallet_balance)??0)};return K({title:"Payment"}),(n,s)=>{const D=O,G=Q,L=X,U=Z;return l(),m("div",se,[r(D,{class:"fixed top-20",to:`/${e(i).params.host}/${e(i).params.event_id}/make-a-request`},null,8,["to"]),r(U,{loading:e(C)==="pending"||e(T)==="pending",error:e(R)??e(V)},{default:$(()=>{var p,f,x,y,v,_,g,b,w,k,S,h,E,M;return[t("div",ne,[s[7]||(s[7]=t("div",{class:"text-primary text-center"},"Payment",-1)),s[8]||(s[8]=t("div",{class:"text-center font-display font-semibold text-3xl my-6"}," Make payment to submit your request ",-1)),t("div",oe,[t("div",ae,[s[0]||(s[0]=t("div",{class:"text-muted-foreground text-sm"},"Total amount",-1)),t("div",re," ₦"+a(("formatMoney"in n?n.formatMoney:e(u))(((p=e(o))==null?void 0:p.price)??0)),1)]),t("div",ie,[t("div",le,[s[1]||(s[1]=t("div",{class:"text-sm text-muted-foreground"},"Request",-1)),t("div",{class:j(("cn"in n?n.cn:e(N))("px-1 rounded-[26px] flex items-center gap-x-px text-xs min-w-[120px] max-h-6",((f=e(o))==null?void 0:f.type)==="song"?"bg-[#FFEE99]/20":"bg-[#FF99F1]/20"))},[r(ee,{name:((x=e(o))==null?void 0:x.type)==="song"?"music":"mic",class:"scale-50"},null,8,["name"]),t("div",null,a(((y=e(o))==null?void 0:y.type)==="song"?"SONG":"HYPE")+" REQUEST ",1)],2)]),((v=e(o))==null?void 0:v.type)==="hype"?(l(),m("div",me,[s[2]||(s[2]=t("div",{class:"text-sm text-muted-foreground"},"Hype",-1)),r(G,{content:((_=e(o))==null?void 0:_.description)??"",class:"max-w-[50%] text-right"},null,8,["content"])])):c("",!0),((g=e(o))==null?void 0:g.type)==="song"?(l(),m("div",de,[s[3]||(s[3]=t("div",{class:"text-sm text-muted-foreground"},"Title",-1)),t("div",null,a(((b=e(o))==null?void 0:b.song_title)??""),1)])):c("",!0),((w=e(o))==null?void 0:w.type)==="song"?(l(),m("div",ue,[s[4]||(s[4]=t("div",{class:"text-sm text-muted-foreground"},"Artsite",-1)),t("div",null,a(((k=e(o))==null?void 0:k.artist)??""),1)])):c("",!0),t("div",ce,[s[5]||(s[5]=t("div",{class:"text-sm text-muted-foreground"},"Your nickname",-1)),t("div",null,a(((S=e(o))==null?void 0:S.nickname)??((E=(h=e(o))==null?void 0:h.audience)==null?void 0:E.stage_name)??""),1)])]),t("div",pe,[t("div",fe,[s[6]||(s[6]=t("div",{class:"text-muted-foreground"},"Spin request balance",-1)),t("div",{class:j(("cn"in n?n.cn:e(N))(e(z)?"text-[#38F08D]":"text-[#E66840]"))}," ₦"+a(("formatMoney"in n?n.formatMoney:e(u))(((M=e(d))==null?void 0:M.wallet_balance)??0)),3)])]),r(L,{size:"lg",class:"relative -translate-y-7 w-full",onClick:Y,loading:e(H)},{default:$(()=>{var q;return[W(" PAY ₦"+a(("formatMoney"in n?n.formatMoney:e(u))(((q=e(o))==null?void 0:q.price)??0)),1)]}),_:1},8,["loading"])])])]}),_:1},8,["loading","error"])])}}});export{Me as default};