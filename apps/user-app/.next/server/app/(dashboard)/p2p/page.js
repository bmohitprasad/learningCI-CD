(()=>{var e={};e.id=563,e.ids=[563],e.modules={53524:e=>{"use strict";e.exports=require("@prisma/client")},67096:e=>{"use strict";e.exports=require("bcrypt")},47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},71017:e=>{"use strict";e.exports=require("path")},63477:e=>{"use strict";e.exports=require("querystring")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},68553:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d});var s=t(59441),n=t(1498),a=t(6580),i=t.n(a),o=t(15511),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);t.d(r,l);let d=["",{children:["(dashboard)",{children:["p2p",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,43538)),"/home/mohit/Documents/Code/WebDev/week18/week-18-live-1-final/apps/user-app/app/(dashboard)/p2p/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,49443)),"/home/mohit/Documents/Code/WebDev/week18/week-18-live-1-final/apps/user-app/app/(dashboard)/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,33250,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,66952))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,58246)),"/home/mohit/Documents/Code/WebDev/week18/week-18-live-1-final/apps/user-app/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,33250,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,66952))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/home/mohit/Documents/Code/WebDev/week18/week-18-live-1-final/apps/user-app/app/(dashboard)/p2p/page.tsx"],u="/(dashboard)/p2p/page",p={require:t,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/(dashboard)/p2p/page",pathname:"/p2p",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},35306:(e,r,t)=>{let s={"462d33bc92b3b9296912561df37712ddd001d115":()=>Promise.resolve().then(t.bind(t,41175)).then(e=>e.p2pTransfer)};async function n(e,...r){return(await s[e]()).apply(null,r)}e.exports={"462d33bc92b3b9296912561df37712ddd001d115":n.bind(null,"462d33bc92b3b9296912561df37712ddd001d115")}},72193:(e,r,t)=>{Promise.resolve().then(t.bind(t,79317)),Promise.resolve().then(t.bind(t,91714))},28705:(e,r,t)=>{Promise.resolve().then(t.bind(t,54417))},75422:(e,r,t)=>{Promise.resolve().then(t.bind(t,64287))},76007:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,49489,23)),Promise.resolve().then(t.t.bind(t,76225,23)),Promise.resolve().then(t.t.bind(t,85964,23)),Promise.resolve().then(t.t.bind(t,5804,23)),Promise.resolve().then(t.t.bind(t,27255,23)),Promise.resolve().then(t.t.bind(t,1021,23))},79317:(e,r,t)=>{"use strict";t.r(r),t.d(r,{AppbarClient:()=>l});var s=t(27685),n=t(8517),a=t(69316);let i=({user:e,onSignin:r,onSignout:t})=>(0,s.jsxs)("div",{className:"flex justify-between border-b px-4 border-slate-300",children:[s.jsx("div",{className:"text-lg flex flex-col justify-center",children:"PayTM"}),s.jsx("div",{className:"flex flex-col justify-center pt-2",children:s.jsx(a.z,{onClick:e?t:r,children:e?"Logout":"Login"})})]});var o=t(35817);function l(){let e=(0,n.useSession)(),r=(0,o.useRouter)();return s.jsx("div",{children:s.jsx(i,{onSignin:n.signIn,onSignout:async()=>{await (0,n.signOut)(),r.push("/api/auth/signin")},user:e.data?.user})})}},54417:(e,r,t)=>{"use strict";t.r(r),t.d(r,{SendCard:()=>c});var s=t(27685),n=t(69316),a=t(77015),i=t(83810);let o=({children:e})=>s.jsx("div",{className:"flex justify-center flex-col h-full",children:s.jsx("div",{className:"flex justify-center",children:e})});var l=t(29897);t(52641);var d=(0,t(56077).$)("462d33bc92b3b9296912561df37712ddd001d115");function c(){let[e,r]=(0,i.useState)(""),[t,c]=(0,i.useState)("");return s.jsx("div",{className:"h-[90vh]",children:s.jsx(o,{children:s.jsx(a.Z,{title:"Send",children:(0,s.jsxs)("div",{className:"min-w-72 pt-2",children:[s.jsx(l.o,{placeholder:"Number",label:"Number",onChange:e=>{r(e)}}),s.jsx(l.o,{placeholder:"Amount",label:"Amount",onChange:e=>{c(e)}}),s.jsx("div",{className:"pt-4 flex justify-center",children:s.jsx(n.z,{onClick:async()=>{await d(e,100*Number(t))},children:"Send"})})]})})})})}},64287:(e,r,t)=>{"use strict";t.r(r),t.d(r,{SidebarItem:()=>a});var s=t(27685),n=t(35817);t(83810);let a=({href:e,title:r,icon:t})=>{let a=(0,n.useRouter)(),i=(0,n.usePathname)()===e;return(0,s.jsxs)("div",{className:`flex ${i?"text-[#6a51a6]":"text-slate-500"} cursor-pointer  p-2 pl-8`,onClick:()=>{a.push(e)},children:[s.jsx("div",{className:"pr-2",children:t}),s.jsx("div",{className:`font-bold ${i?"text-[#6a51a6]":"text-slate-500"}`,children:r})]})}},91714:(e,r,t)=>{"use strict";t.r(r),t.d(r,{Providers:()=>i});var s=t(27685),n=t(94864),a=t(8517);let i=({children:e})=>s.jsx(n.Wh,{children:s.jsx(a.SessionProvider,{children:e})})},29897:(e,r,t)=>{"use strict";t.d(r,{o:()=>n});var s=t(27685);let n=({placeholder:e,onChange:r,label:t})=>(0,s.jsxs)("div",{className:"pt-2",children:[s.jsx("label",{className:"block mb-2 text-sm font-medium text-gray-900",children:t}),s.jsx("input",{onChange:e=>r(e.target.value),type:"text",id:"first_name",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",placeholder:e})]})},69316:(e,r,t)=>{"use strict";t.d(r,{z:()=>n});var s=t(27685);let n=({onClick:e,children:r})=>s.jsx("button",{onClick:e,type:"button",className:"text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2",children:r})},77015:(e,r,t)=>{"use strict";t.d(r,{Z:()=>n});var s=t(27685);function n({title:e,children:r}){return(0,s.jsxs)("div",{className:"border p-6 bg-white rounded-xl bg-[#ededed]",children:[s.jsx("h1",{className:"text-xl border-b pb-2",children:e}),s.jsx("p",{children:r})]})}t(83810)},49443:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>d});var s=t(36491),n=t(30599);let a=(0,n.createProxy)(String.raw`/home/mohit/Documents/Code/WebDev/week18/week-18-live-1-final/apps/user-app/components/SidebarItem.tsx`),{__esModule:i,$$typeof:o}=a;a.default;let l=(0,n.createProxy)(String.raw`/home/mohit/Documents/Code/WebDev/week18/week-18-live-1-final/apps/user-app/components/SidebarItem.tsx#SidebarItem`);function d({children:e}){return(0,s.jsxs)("div",{className:"flex",children:[s.jsx("div",{className:"w-72 border-r border-slate-300 min-h-screen mr-4 pt-28",children:(0,s.jsxs)("div",{children:[s.jsx(l,{href:"/dashboard",icon:s.jsx(c,{}),title:"Home"}),s.jsx(l,{href:"/transfer",icon:s.jsx(u,{}),title:"Transfer"}),s.jsx(l,{href:"/transactions",icon:s.jsx(p,{}),title:"Transactions"}),s.jsx(l,{href:"/p2p",icon:s.jsx(m,{}),title:"P2P Transfer"})]})}),e]})}function c(){return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"w-6 h-6",children:s.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"})})}function u(){return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"w-6 h-6",children:s.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"})})}function p(){return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"w-6 h-6",children:s.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"})})}function m(){return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"w-6 h-6",children:s.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"})})}},43538:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>d});var s=t(36491),n=t(30599);let a=(0,n.createProxy)(String.raw`/home/mohit/Documents/Code/WebDev/week18/week-18-live-1-final/apps/user-app/components/SendCard.tsx`),{__esModule:i,$$typeof:o}=a;a.default;let l=(0,n.createProxy)(String.raw`/home/mohit/Documents/Code/WebDev/week18/week-18-live-1-final/apps/user-app/components/SendCard.tsx#SendCard`);function d(){return s.jsx("div",{className:"w-full",children:s.jsx(l,{})})}},58246:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>b,metadata:()=>x});var s=t(36491),n=t(52169),a=t.n(n);t(20001);var i=t(30599);let o=(0,i.createProxy)(String.raw`/home/mohit/Documents/Code/WebDev/week18/week-18-live-1-final/apps/user-app/provider.tsx`),{__esModule:l,$$typeof:d}=o;o.default;let c=(0,i.createProxy)(String.raw`/home/mohit/Documents/Code/WebDev/week18/week-18-live-1-final/apps/user-app/provider.tsx#Providers`),u=(0,i.createProxy)(String.raw`/home/mohit/Documents/Code/WebDev/week18/week-18-live-1-final/apps/user-app/components/AppbarClient.tsx`),{__esModule:p,$$typeof:m}=u;u.default;let h=(0,i.createProxy)(String.raw`/home/mohit/Documents/Code/WebDev/week18/week-18-live-1-final/apps/user-app/components/AppbarClient.tsx#AppbarClient`),x={title:"Wallet",description:"Simple wallet app"};function b({children:e}){return s.jsx("html",{lang:"en",children:s.jsx(c,{children:s.jsx("body",{className:a().className,children:(0,s.jsxs)("div",{className:"min-w-screen min-h-screen bg-[#ebe6e6]",children:[s.jsx(h,{}),e]})})})})}},41175:(e,r,t)=>{"use strict";t.r(r),t.d(r,{p2pTransfer:()=>o});var s=t(90105);t(81838);var n=t(50829),a=t(96614),i=t(9490);async function o(e,r){let t=await (0,n.getServerSession)(a.authOptions),s=t?.user?.id;if(!s)return{message:"Error while sending"};let o=await i.default.user.findFirst({where:{number:e}});if(!o)return{message:"User not found"};await i.default.$transaction(async e=>{await e.$queryRaw`SELECT * FROM "Balance" WHERE "userId" = ${Number(s)} FOR UPDATE`;let t=await e.balance.findUnique({where:{userId:Number(s)}});if(!t||t.amount<r)throw Error("Insufficient funds");await e.balance.update({where:{userId:Number(s)},data:{amount:{decrement:r}}}),await e.balance.update({where:{userId:o.id},data:{amount:{increment:r}}}),await e.p2pTransfer.create({data:{fromUserId:Number(s),toUserId:o.id,amount:r,timestamp:new Date}})})}(0,t(26487).ensureServerEntryExports)([o]),(0,s.registerServerReference)("462d33bc92b3b9296912561df37712ddd001d115",o)},96614:(e,r,t)=>{"use strict";t.d(r,{authOptions:()=>o});var s=t(9490),n=t(39608),a=t(67096),i=t.n(a);let o={providers:[(0,n.default)({name:"Credentials",credentials:{phone:{label:"Phone number",type:"text",placeholder:"1231231231",required:!0},password:{label:"Password",type:"password",required:!0}},async authorize(e){let r=await i().hash(e.password,10),t=await s.default.user.findFirst({where:{number:e.phone}});if(t)return await i().compare(e.password,t.password)?{id:t.id.toString(),name:t.name,email:t.number}:null;try{let t=await s.default.user.create({data:{number:e.phone,password:r}});return{id:t.id.toString(),name:t.name,email:t.number}}catch(e){console.error(e)}return null}})],secret:process.env.JWT_SECRET||"secret",callbacks:{session:async({token:e,session:r})=>(r.user.id=e.sub,r)}}},9490:(e,r,t)=>{"use strict";t.d(r,{default:()=>n});var s=t(53524);let n=globalThis.prismaGlobal??new s.PrismaClient},66952:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>n});var s=t(47786);let n=e=>[{type:"image/x-icon",sizes:"192x192",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},20001:()=>{}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[369,479,786,510],()=>t(68553));module.exports=s})();