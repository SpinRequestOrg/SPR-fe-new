import{_ as S}from"./BHcGG38Y.js";import{h as v,f as N,i as A,r as E,o as u,p as h,w as i,b as s,n,L as k,v as C,a as r,t as L,_ as O,s as y,q as P,m as R,c as $,y as B,d as g}from"./BGsvoEl1.js";import{_ as F}from"./Bh9zmEgN.js";import{_ as c,F as H}from"./DvodryvB.js";import{_ as G}from"./BiOvZn45.js";import{H as I}from"./KGbqBcss.js";import"./DQ2-OujW.js";import"./D_roRF6R.js";import"./DUXXyp4T.js";import"./Cpj98o6Y.js";const V=["DJ","MC","Artist","Hype Man","Radio Host","Business","Other"],M=v({__name:"host-signup-form",setup(w){const{$repo:{auth:d}}=N(),{saveAuthUser:t}=A(),a=E(!1),l=async m=>{var _,f,x;a.value=!0;const p={...m,password_confirmation:m.password};try{a.value=!0;const e=await d.registerHost(p),o=e==null?void 0:e.message;y({title:o,description:"Follow the link in your email to verify your email",variant:"normal",duration:8e4}),a.value=!1,t(e.data.token,e.data.user);const b=((_=e==null?void 0:e.data)==null?void 0:_.role)==="host"?"/dashboard":"/search";P().push(b)}catch(e){const o=e;a.value=!1,y({title:"Failed",description:((f=o==null?void 0:o.data)==null?void 0:f.message)??"Sign up failed. Please try again",variant:"warning"}),console.error("ERROR LOGGING IN",(x=o==null?void 0:o.data)==null?void 0:x.message)}};return(m,p)=>(u(),h(n(H),{"validation-schema":n(I),onSubmit:l,class:"space-y-7"},{default:i(()=>[s(c,{name:"email",placeholder:"Enter your email",label:"Email",type:"email"}),s(c,{name:"stage_name",placeholder:"Enter your stage name",label:"Stage name"}),s(G,{options:[...n(V)],name:"profession",placeholder:"Choose your profession",label:"Profession"},null,8,["options"]),s(c,{name:"password",placeholder:"Enter your password",type:"password",label:"Password"}),s(O,{class:"w-full",type:"submit",size:"lg",disabled:n(a)},{default:i(()=>[n(a)?(u(),h(n(k),{key:0,class:"animate-spin mr-2"})):C("",!0),r("span",null,L(n(a)?"Please wait...":"Submit"),1)]),_:1},8,["disabled"])]),_:1},8,["validation-schema"]))}}),T={class:"h-full"},D={class:"fixed top-12 left-0"},U={class:"pt-2"},q={class:"max-w-[90%] mx-auto w-[400px]"},z={class:"text-center mt-2"},st=v({__name:"host",setup(w){return R({title:"Sign Up As A host"}),(d,t)=>{const a=S,l=B;return u(),$("div",T,[s(l,{name:"auth"},{default:i(()=>[r("div",D,[s(F,{to:"/signup"})]),r("div",U,[t[2]||(t[2]=r("div",{class:"text-primary text-center my-2 text-xl"}," Create your account ",-1)),t[3]||(t[3]=r("div",{class:"text-4xl lg:text-5xl font-semibold my-4 text-center max-w-[595px] mx-auto font-display"}," Create your free host account ",-1)),r("div",q,[s(M),r("div",z,[t[1]||(t[1]=g(" Already a user? ")),s(a,{to:"/login",class:"underline hover:no-underline ml-1"},{default:i(()=>t[0]||(t[0]=[g("LOGIN")])),_:1})])])])]),_:1})])}}});export{st as default};