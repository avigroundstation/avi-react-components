import{R as e}from"./index-DRjF_FHU.js";import{B as t}from"./Button-BY9hlUZi.js";const i=({user:n,onLogin:a,onLogout:r,onCreateAccount:l})=>e.createElement("header",null,e.createElement("div",{className:"storybook-header"},e.createElement("div",null,e.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},e.createElement("g",{fill:"none",fillRule:"evenodd"},e.createElement("path",{d:"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",fill:"#FFF"}),e.createElement("path",{d:"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",fill:"#555AB9"}),e.createElement("path",{d:"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",fill:"#91BAF8"}))),e.createElement("h1",null,"Acme")),e.createElement("div",null,n?e.createElement(e.Fragment,null,e.createElement("span",{className:"welcome"},"Welcome, ",e.createElement("b",null,n.name),"!"),e.createElement(t,{size:"small",onClick:r,label:"Log out"})):e.createElement(e.Fragment,null,e.createElement(t,{size:"small",onClick:a,label:"Log in"}),e.createElement(t,{primary:!0,size:"small",onClick:l,label:"Sign up"})))));i.__docgenInfo={description:"",methods:[],displayName:"Header",props:{user:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  name: string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}}]}},description:""},onLogin:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onLogout:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCreateAccount:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{i as H};
