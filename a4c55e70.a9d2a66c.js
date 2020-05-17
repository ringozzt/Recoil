(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(1),o=(n(0),n(149));const a={title:"Intro"},i={id:"basic-tutorial/intro",title:"Intro",description:"This section assumes you have installed Recoil and React. See the [Getting Started](/docs/introduction/getting-started) page for how to get started with Recoil and React from scratch. Components in the following sections are assumed to have a `<RecoilRoot />` in the parent tree.",source:"@site/docs/basic-tutorial/intro.md",permalink:"/docs/basic-tutorial/intro",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/basic-tutorial/intro.md",sidebar:"someSidebar",previous:{title:"Getting Started",permalink:"/docs/introduction/getting-started"},next:{title:"Atoms",permalink:"/docs/basic-tutorial/atoms"}},c=[],l={rightToc:c};function s({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This section assumes you have installed Recoil and React. See the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/introduction/getting-started"}),"Getting Started")," page for how to get started with Recoil and React from scratch. Components in the following sections are assumed to have a ",Object(o.b)("inlineCode",{parentName:"p"},"<RecoilRoot />")," in the parent tree."),Object(o.b)("p",null,"In this tutorial, we'll be building a simple todo-list application. Our app will be able to do the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Add todo items"),Object(o.b)("li",{parentName:"ul"},"Edit todo items"),Object(o.b)("li",{parentName:"ul"},"Delete todo items"),Object(o.b)("li",{parentName:"ul"},"Filter todo items"),Object(o.b)("li",{parentName:"ul"},"Display useful stats")),Object(o.b)("p",null,"Along the way, we'll cover atoms, selectors, atom families, and the hooks exposed by the Recoil API. We'll also cover optimization"))}s.isMDXComponent=!0},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return n?o.a.createElement(m,c({ref:t},s,{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);