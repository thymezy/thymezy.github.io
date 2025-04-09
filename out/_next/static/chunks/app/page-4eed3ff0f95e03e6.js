(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7210:function(e,t,a){Promise.resolve().then(a.bind(a,6283))},6283:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return Y}});var s=a(7437),r=a(3715),n=a(2265),l=a(7256),o=a(9213),i=a(7042),d=a(4769);function c(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,d.m6)((0,i.W)(t))}let f=(0,o.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),u=n.forwardRef((e,t)=>{let{className:a,variant:r,size:n,asChild:o=!1,...i}=e,d=o?l.g7:"button";return(0,s.jsx)(d,{className:c(f({variant:r,size:n,className:a})),ref:t,...i})});u.displayName="Button";var m=a(8675);let x=n.forwardRef((e,t)=>{let{className:a,children:r,...n}=e;return(0,s.jsxs)(m.fC,{ref:t,className:c("relative overflow-hidden",a),...n,children:[(0,s.jsx)(m.l_,{className:"h-full w-full rounded-[inherit]",children:r}),(0,s.jsx)(p,{}),(0,s.jsx)(m.Ns,{})]})});x.displayName=m.fC.displayName;let p=n.forwardRef((e,t)=>{let{className:a,orientation:r="vertical",...n}=e;return(0,s.jsx)(m.gb,{ref:t,orientation:r,className:c("flex touch-none select-none transition-colors","vertical"===r&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===r&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",a),...n,children:(0,s.jsx)(m.q4,{className:"relative flex-1 rounded-full bg-border"})})});p.displayName=m.gb.displayName;var h=a(5505);let g=n.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{ref:t,className:c("rounded-lg border bg-card text-card-foreground shadow-sm",a),...r})});g.displayName="Card";let N=n.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{ref:t,className:c("flex flex-col space-y-1.5 p-6",a),...r})});N.displayName="CardHeader";let j=n.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("h3",{ref:t,className:c("text-2xl font-semibold leading-none tracking-tight",a),...r})});j.displayName="CardTitle";let b=n.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("p",{ref:t,className:c("text-sm text-muted-foreground",a),...r})});b.displayName="CardDescription";let v=n.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{ref:t,className:c("p-6 pt-0",a),...r})});v.displayName="CardContent";let y=n.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{ref:t,className:c("flex items-center p-6 pt-0",a),...r})});y.displayName="CardFooter";var w=a(8835),C=a(2442);let k=n.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(w.fC,{ref:t,className:c("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",a),...r,children:(0,s.jsx)(w.z$,{className:c("flex items-center justify-center text-current"),children:(0,s.jsx)(C.Z,{className:"h-4 w-4"})})})});function S(e){let{creator:t,isSelected:a,onSelect:r,onSettingsClick:n}=e;return(0,s.jsx)(g,{className:"p-4 transition-all hover:shadow-md ".concat(a?"border-primary":""),children:(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,s.jsx)(k,{checked:a,onCheckedChange:()=>r(t.id)}),(0,s.jsxs)("div",{children:[(0,s.jsx)("img",{src:t.avatar,alt:t.name,className:"w-10 h-10 rounded-full"}),(0,s.jsx)("h3",{className:"font-medium",children:t.name})]})]}),(0,s.jsx)(u,{variant:"ghost",size:"icon",onClick:()=>n(t.id),children:(0,s.jsx)(h.Z,{className:"h-4 w-4"})})]})})}k.displayName=w.fC.displayName;let R=Array.from({length:10},(e,t)=>({id:"creator_".concat(t+1),name:"Content Creator ".concat(t+1),avatar:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces"}));function z(e){let{selectedCreators:t,onCreatorSelect:a,onSettingsClick:r}=e;return(0,s.jsx)(x,{className:"h-[calc(100vh-5rem)]",children:(0,s.jsx)("div",{className:"p-4 space-y-4",children:R.map(e=>(0,s.jsx)(S,{creator:e,isSelected:t.includes(e.id),onSelect:a,onSettingsClick:r},e.id))})})}function _(e){let{className:t,...a}=e;return(0,s.jsx)("div",{className:c("animate-pulse rounded-md bg-muted",t),...a})}function D(e){let{isLoading:t,contentData:a}=e;return t?(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsx)(_,{className:"h-8 w-3/4"}),(0,s.jsx)(_,{className:"h-4 w-full"}),(0,s.jsx)(_,{className:"h-4 w-2/3"}),(0,s.jsx)(_,{className:"h-4 w-5/6"})]}):a?(0,s.jsxs)("div",{className:"prose dark:prose-invert",children:[(0,s.jsx)("h2",{className:"text-2xl font-bold mb-4",children:"Content Display"}),(0,s.jsx)("p",{className:"text-muted-foreground",children:a})]}):(0,s.jsx)("div",{className:"text-center text-muted-foreground",children:(0,s.jsx)("p",{children:'Select creators and click "Fetch Content" to view data'})})}var O=a(3983),V=a(2549);let F=O.fC;O.xz;let Z=O.h_;O.x8;let A=n.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(O.aV,{ref:t,className:c("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...r})});A.displayName=O.aV.displayName;let E=n.forwardRef((e,t)=>{let{className:a,children:r,...n}=e;return(0,s.jsxs)(Z,{children:[(0,s.jsx)(A,{}),(0,s.jsxs)(O.VY,{ref:t,className:c("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a),...n,children:[r,(0,s.jsxs)(O.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,s.jsx)(V.Z,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});E.displayName=O.VY.displayName;let P=e=>{let{className:t,...a}=e;return(0,s.jsx)("div",{className:c("flex flex-col space-y-1.5 text-center sm:text-left",t),...a})};P.displayName="DialogHeader";let H=n.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(O.Dx,{ref:t,className:c("text-lg font-semibold leading-none tracking-tight",a),...r})});H.displayName=O.Dx.displayName;let L=n.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(O.dk,{ref:t,className:c("text-sm text-muted-foreground",a),...r})});function T(e){let{isOpen:t,onOpenChange:a,activeCreator:r}=e;return(0,s.jsx)(F,{open:t,onOpenChange:a,children:(0,s.jsxs)(E,{children:[(0,s.jsx)(P,{children:(0,s.jsx)(H,{children:"Creator Settings"})}),(0,s.jsx)("div",{className:"py-4",children:(0,s.jsxs)("p",{className:"text-muted-foreground",children:["Configuration options for ",r]})})]})})}function Y(){let{selectedCreators:e,isSettingsOpen:t,setIsSettingsOpen:a,activeCreator:l,isLoading:o,contentData:i,handleCreatorSelect:d,handleSettingsClick:c,handleFetchContent:f}=function(){let[e,t]=(0,n.useState)([]),[a,s]=(0,n.useState)(!1),[r,l]=(0,n.useState)(null),[o,i]=(0,n.useState)(!1),[d,c]=(0,n.useState)(null),f=async()=>{i(!0),await new Promise(e=>setTimeout(e,1500)),c("Sample API response data for selected creators: "+e.join(", ")),i(!1)};return{selectedCreators:e,isSettingsOpen:a,setIsSettingsOpen:s,activeCreator:r,isLoading:o,contentData:d,handleCreatorSelect:e=>{t(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},handleSettingsClick:e=>{l(e),s(!0)},handleFetchContent:f}}();return(0,s.jsxs)("div",{className:"flex h-screen bg-background",children:[(0,s.jsxs)("div",{className:"w-1/3 border-r relative",children:[(0,s.jsx)(z,{selectedCreators:e,onCreatorSelect:d,onSettingsClick:c}),(0,s.jsx)("div",{className:"absolute bottom-0 left-0 right-0 p-4 bg-background border-t",children:(0,s.jsx)(u,{className:"w-full",onClick:f,disabled:0===e.length||o,children:o?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.Z,{className:"mr-2 h-4 w-4 animate-spin"}),"Loading..."]}):"Fetch Content"})})]}),(0,s.jsx)("div",{className:"flex-1 p-6",children:(0,s.jsx)("div",{className:"max-w-3xl mx-auto",children:(0,s.jsx)(D,{isLoading:o,contentData:i})})}),(0,s.jsx)(T,{isOpen:t,onOpenChange:a,activeCreator:l})]})}L.displayName=O.dk.displayName}},function(e){e.O(0,[140,971,864,744],function(){return e(e.s=7210)}),_N_E=e.O()}]);