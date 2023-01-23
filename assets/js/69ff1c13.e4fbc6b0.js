"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7035],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),f=u(n),m=i,g=f["".concat(l,".").concat(m)]||f[m]||s[m]||o;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},38394:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>c});n(67294);var r=n(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const a={sidebar_label:"FrameWaitForFunctionOptions.polling"},p="FrameWaitForFunctionOptions.polling property",l={unversionedId:"api/puppeteer.framewaitforfunctionoptions.polling",id:"version-19.6.0/api/puppeteer.framewaitforfunctionoptions.polling",title:"FrameWaitForFunctionOptions.polling property",description:"An interval at which the pageFunction is executed, defaults to raf. If polling is a number, then it is treated as an interval in milliseconds at which the function would be executed. If polling is a string, then it can be one of the following values:",source:"@site/versioned_docs/version-19.6.0/api/puppeteer.framewaitforfunctionoptions.polling.md",sourceDirName:"api",slug:"/api/puppeteer.framewaitforfunctionoptions.polling",permalink:"/api/puppeteer.framewaitforfunctionoptions.polling",draft:!1,tags:[],version:"19.6.0",frontMatter:{sidebar_label:"FrameWaitForFunctionOptions.polling"},sidebar:"api",previous:{title:"FrameWaitForFunctionOptions",permalink:"/api/puppeteer.framewaitforfunctionoptions"},next:{title:"FrameWaitForFunctionOptions.timeout",permalink:"/api/puppeteer.framewaitforfunctionoptions.timeout"}},u={},c=[{value:"Signature:",id:"signature",level:4}],s={toc:c};function f(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",i({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",i({},{id:"framewaitforfunctionoptionspolling-property"}),"FrameWaitForFunctionOptions.polling property"),(0,r.kt)("p",null,"An interval at which the ",(0,r.kt)("inlineCode",{parentName:"p"},"pageFunction")," is executed, defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"raf"),". If ",(0,r.kt)("inlineCode",{parentName:"p"},"polling")," is a number, then it is treated as an interval in milliseconds at which the function would be executed. If ",(0,r.kt)("inlineCode",{parentName:"p"},"polling")," is a string, then it can be one of the following values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"raf")," - to constantly execute ",(0,r.kt)("inlineCode",{parentName:"p"},"pageFunction")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"requestAnimationFrame")," callback. This is the tightest polling mode which is suitable to observe styling changes.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"mutation")," - to execute ",(0,r.kt)("inlineCode",{parentName:"p"},"pageFunction")," on every DOM mutation."))),(0,r.kt)("h4",i({},{id:"signature"}),"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-typescript"}),"interface FrameWaitForFunctionOptions {\n  polling?: 'raf' | 'mutation' | number;\n}\n")))}f.isMDXComponent=!0}}]);