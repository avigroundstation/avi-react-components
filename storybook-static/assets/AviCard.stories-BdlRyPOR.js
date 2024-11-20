import{r as R,R as n}from"./index-DRjF_FHU.js";import{a as w,g as A,s as g,m as tt,d as et,c as M,b as T}from"./createSimplePaletteValueFilter-Cvro64qi.js";import{j as d}from"./jsx-runtime-DR9Q75dM.js";import{P as rt}from"./Paper-CizNr6Ik.js";import{c as $,u as S}from"./DefaultPropsProvider-Klq3xZ3l.js";import{i as at}from"./index-DMztqGKo.js";import{B as q}from"./Button-C49wxnTH.js";import"./emotion-react.browser.esm-CIoIeMZx.js";import"./ButtonBase-DkUMK-tf.js";import"./TransitionGroupContext-D-rYTltT.js";function ot(t){return A("MuiTypography",t)}const D=w("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]),st={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},nt=at(),it=t=>{const{align:r,gutterBottom:e,noWrap:a,paragraph:i,variant:o,classes:l}=t,s={root:["root",o,t.align!=="inherit"&&`align${$(r)}`,e&&"gutterBottom",a&&"noWrap",i&&"paragraph"]};return T(s,ot,l)},lt=g("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:e}=t;return[r.root,e.variant&&r[e.variant],e.align!=="inherit"&&r[`align${$(e.align)}`],e.noWrap&&r.noWrap,e.gutterBottom&&r.gutterBottom,e.paragraph&&r.paragraph]}})(tt(({theme:t})=>{var r;return{margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}},...Object.entries(t.typography).filter(([e,a])=>e!=="inherit"&&a&&typeof a=="object").map(([e,a])=>({props:{variant:e},style:a})),...Object.entries(t.palette).filter(et()).map(([e])=>({props:{color:e},style:{color:(t.vars||t).palette[e].main}})),...Object.entries(((r=t.palette)==null?void 0:r.text)||{}).filter(([,e])=>typeof e=="string").map(([e])=>({props:{color:`text${$(e)}`},style:{color:(t.vars||t).palette.text[e]}})),{props:({ownerState:e})=>e.align!=="inherit",style:{textAlign:"var(--Typography-textAlign)"}},{props:({ownerState:e})=>e.noWrap,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:({ownerState:e})=>e.gutterBottom,style:{marginBottom:"0.35em"}},{props:({ownerState:e})=>e.paragraph,style:{marginBottom:16}}]}})),_={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},y=R.forwardRef(function(r,e){const{color:a,...i}=S({props:r,name:"MuiTypography"}),o=!st[a],l=nt({...i,...o&&{color:a}}),{align:s="inherit",className:c,component:N,gutterBottom:j=!1,noWrap:B=!1,paragraph:E=!1,variant:v="body1",variantMapping:u=_,...p}=l,m={...l,align:s,color:a,className:c,component:N,gutterBottom:j,noWrap:B,paragraph:E,variant:v,variantMapping:u},h=N||(E?"p":u[v]||_[v])||"span",Z=it(m);return d.jsx(lt,{as:h,ref:e,className:M(Z.root,c),...p,ownerState:m,style:{...s!=="inherit"&&{"--Typography-textAlign":s},...p.style}})});function ct(t){return A("MuiCard",t)}w("MuiCard",["root"]);const dt=t=>{const{classes:r}=t;return T({root:["root"]},ct,r)},pt=g(rt,{name:"MuiCard",slot:"Root",overridesResolver:(t,r)=>r.root})({overflow:"hidden"}),ut=R.forwardRef(function(r,e){const a=S({props:r,name:"MuiCard"}),{className:i,raised:o=!1,...l}=a,s={...a,raised:o},c=dt(s);return d.jsx(pt,{className:M(c.root,i),elevation:o?8:void 0,ref:e,ownerState:s,...l})});function mt(t){return A("MuiCardActions",t)}w("MuiCardActions",["root","spacing"]);const gt=t=>{const{classes:r,disableSpacing:e}=t;return T({root:["root",!e&&"spacing"]},mt,r)},ht=g("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:e}=t;return[r.root,!e.disableSpacing&&r.spacing]}})({display:"flex",alignItems:"center",padding:8,variants:[{props:{disableSpacing:!1},style:{"& > :not(style) ~ :not(style)":{marginLeft:8}}}]}),vt=R.forwardRef(function(r,e){const a=S({props:r,name:"MuiCardActions"}),{disableSpacing:i=!1,className:o,...l}=a,s={...a,disableSpacing:i},c=gt(s);return d.jsx(ht,{className:M(c.root,o),ownerState:s,ref:e,...l})});function yt(t){return A("MuiCardContent",t)}w("MuiCardContent",["root"]);const Ct=t=>{const{classes:r}=t;return T({root:["root"]},yt,r)},ft=g("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(t,r)=>r.root})({padding:16,"&:last-child":{paddingBottom:24}}),bt=R.forwardRef(function(r,e){const a=S({props:r,name:"MuiCardContent"}),{className:i,component:o="div",...l}=a,s={...a,component:o},c=Ct(s);return d.jsx(ft,{as:o,className:M(c.root,i),ownerState:s,ref:e,...l})});function xt(t){return A("MuiCardHeader",t)}const H=w("MuiCardHeader",["root","avatar","action","content","title","subheader"]),Rt=t=>{const{classes:r}=t;return T({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},xt,r)},wt=g("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(t,r)=>({[`& .${H.title}`]:r.title,[`& .${H.subheader}`]:r.subheader,...r.root})})({display:"flex",alignItems:"center",padding:16}),At=g("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(t,r)=>r.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),Mt=g("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(t,r)=>r.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),Tt=g("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(t,r)=>r.content})({flex:"1 1 auto",[`.${D.root}:where(& .${H.title})`]:{display:"block"},[`.${D.root}:where(& .${H.subheader})`]:{display:"block"}}),St=R.forwardRef(function(r,e){const a=S({props:r,name:"MuiCardHeader"}),{action:i,avatar:o,className:l,component:s="div",disableTypography:c=!1,subheader:N,subheaderTypographyProps:j,title:B,titleTypographyProps:E,...v}=a,u={...a,component:s,disableTypography:c},p=Rt(u);let m=B;m!=null&&m.type!==y&&!c&&(m=d.jsx(y,{variant:o?"body2":"h5",className:p.title,component:"span",...E,children:m}));let h=N;return h!=null&&h.type!==y&&!c&&(h=d.jsx(y,{variant:o?"body2":"body1",className:p.subheader,color:"textSecondary",component:"span",...j,children:h})),d.jsxs(wt,{className:M(p.root,l),as:s,ref:e,ownerState:u,...v,children:[o&&d.jsx(At,{className:p.avatar,ownerState:u,children:o}),d.jsxs(Tt,{className:p.content,ownerState:u,children:[m,h]}),i&&d.jsx(Mt,{className:p.action,ownerState:u,children:i})]})});function P({title:t,subtitle:r,actions:e,children:a,contentVariant:i="regular",elevation:o=24}){return n.createElement(ut,{variant:"elevation",elevation:o,style:i==="stretch"?{height:"100%",width:"100%",display:"flex",flexDirection:"column"}:{}},n.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},t&&n.createElement(St,{title:t,subheader:r}),e&&n.createElement(vt,null,e)),n.createElement("div",null,a&&n.createElement(bt,{style:i==="stretch"?{flex:1}:{}},a)))}P.__docgenInfo={description:"",methods:[],displayName:"AviCard",props:{title:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},subtitle:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},actions:{required:!1,tsType:{name:"ReactNode"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},contentVariant:{required:!1,tsType:{name:"union",raw:'"stretch" | "regular"',elements:[{name:"literal",value:'"stretch"'},{name:"literal",value:'"regular"'}]},description:"",defaultValue:{value:'"regular"',computed:!1}},elevation:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"24",computed:!1}}}};const qt={title:"Example/AviCard",component:P,tags:["autodocs"],argTypes:{title:{control:"text"},subtitle:{control:"text"},actions:{table:{disable:!0}},children:{table:{disable:!0}}}},V=t=>n.createElement("div",{style:{height:"600px",width:"100%"}},n.createElement(P,{elevation:t.elevation,contentVariant:t.contentVariant,title:t.title,subtitle:t.subtitle,actions:t.actions},t.children)),U=n.createElement("div",{style:{height:"100%",width:"100%",display:"flex",flexDirection:"column"}},n.createElement("div",{style:{height:"20%"}},n.createElement(y,{variant:"h5"},"Text")),n.createElement("div",{style:{flex:"1"}},"div2")),W=n.createElement(n.Fragment,null,n.createElement(q,{size:"small"},"Action 1"),n.createElement(q,{size:"small"},"Action 2")),C=V.bind({});C.args={elevation:3,contentVariant:"regular",title:"Card title",actions:W,children:U};const f=V.bind({});f.args={elevation:3,contentVariant:"regular",title:"Card title",subtitle:"Card subtitle",actions:W,children:U};const b=V.bind({});b.args={elevation:3,contentVariant:"stretch",children:U};const x=V.bind({});x.args={elevation:3,contentVariant:"regular",title:"Card title",actions:W};var O,z,I;C.parameters={...C.parameters,docs:{...(O=C.parameters)==null?void 0:O.docs,source:{originalSource:`args => <div style={{
  height: '600px',
  width: '100%'
}}>\r
    <AviCard elevation={args.elevation} contentVariant={args.contentVariant} title={args.title} subtitle={args.subtitle} actions={args.actions}>\r
      {args.children}\r
    </AviCard>\r
\r
\r
  </div>`,...(I=(z=C.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var k,F,L;f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:`args => <div style={{
  height: '600px',
  width: '100%'
}}>\r
    <AviCard elevation={args.elevation} contentVariant={args.contentVariant} title={args.title} subtitle={args.subtitle} actions={args.actions}>\r
      {args.children}\r
    </AviCard>\r
\r
\r
  </div>`,...(L=(F=f.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var J,G,K;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`args => <div style={{
  height: '600px',
  width: '100%'
}}>\r
    <AviCard elevation={args.elevation} contentVariant={args.contentVariant} title={args.title} subtitle={args.subtitle} actions={args.actions}>\r
      {args.children}\r
    </AviCard>\r
\r
\r
  </div>`,...(K=(G=b.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Q,X,Y;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`args => <div style={{
  height: '600px',
  width: '100%'
}}>\r
    <AviCard elevation={args.elevation} contentVariant={args.contentVariant} title={args.title} subtitle={args.subtitle} actions={args.actions}>\r
      {args.children}\r
    </AviCard>\r
\r
\r
  </div>`,...(Y=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const Dt=["Default","subHeader","WithoutHeader","WithoutBody"];export{C as Default,x as WithoutBody,b as WithoutHeader,Dt as __namedExportsOrder,qt as default,f as subHeader};
