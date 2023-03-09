"use strict";
(self["webpackChunkbte_docs"] = self["webpackChunkbte_docs"] || []).push([[514,486],{

/***/ 8146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8495);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9094);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5117);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2445);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5800);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2644);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7294);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2263);
/* harmony import */ var _mantine_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4065);
const Page=props=>{const{siteConfig}=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();const matches=(0,_mantine_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useMediaQuery */ .a)("(min-width: 900px)");const theme=(0,_mantine_core__WEBPACK_IMPORTED_MODULE_5__/* .useMantineTheme */ .rZ)();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{style:{backgroundColor:theme.colorScheme==="dark"?theme.colors.dark[8]:theme.white,width:"calc(100vw - (100vw - 100%))",minHeight:"100vh",display:"flex",flexDirection:"column"}},!props.disabled?.header&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{links:siteConfig.themeConfig.navbar?.items.map(i=>({label:i.label,link:i.to})),title:siteConfig.themeConfig.navbar.title}),props.head&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{style:{width:"100%",height:props.head.large?"100vh":"20vh",position:"relative"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{style:{backgroundColor:theme.colorScheme==="dark"?theme.colors.dark[8]:theme.colors.gray[0],background:`url(${props.head?.image})`,filter:props.head?.filter||"brightness(0.8)",width:"100%",height:"100%",marginTop:props.disabled?.header?0:60}}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mantine_core__WEBPACK_IMPORTED_MODULE_6__/* .Center */ .M,{style:{width:"100%",height:"100%",position:"absolute",top:props.disabled?.header?0:60,left:0}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h1",{style:{color:"#ffffff",fontSize:"48px",zIndex:"99"}},props.head?.title,props.head?.subtitle&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mantine_core__WEBPACK_IMPORTED_MODULE_7__/* .Text */ .x,{style:{fontWeight:"normal"}},props.head?.subtitle))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{style:{position:"absolute",bottom:"0",width:"100%",height:"100px",background:"linear-gradient(180deg,transparent,rgba(0, 0, 0, 0.26))"}}))),props.children&&(props.fullWidth?props.children:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mantine_core__WEBPACK_IMPORTED_MODULE_8__/* .Container */ .W,{size:"xl",style:{backgroundColor:theme.colorScheme==="dark"?theme.colors.dark[7]:"#ffffff",boxShadow:"none",marginTop:theme.spacing.xl*2+(props.disabled?.header?0:60),marginBottom:theme.spacing.xl*2,padding:!matches?`${theme.spacing.xs*3}px`:`${theme.spacing.xl*3}px`,paddingBottom:!matches?`${theme.spacing.xs*1.5}px`:`${theme.spacing.xl*1.5}px`,paddingTop:!matches?`${theme.spacing.xs*1}px`:`${theme.spacing.xl*1}px`,flex:1,width:"100%",position:"relative",...props.style}},props.children)),!props.disabled?.footer&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Footer__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,{links:[{link:"/faq",label:"FAQ"},{link:"/contact",label:"Contact"},{link:"/about",label:"About us"}]}));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);

/***/ }),

/***/ 477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BackToTopButton)
/* harmony export */ });
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8495);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9834);
/* harmony import */ var _tabler_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3991);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5999);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2730);
function BackToTopButton(){const theme=(0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__/* .useMantineTheme */ .rZ)();const{shown,scrollToTop}=(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__/* .useBackToTopButton */ .a)({threshold:10});return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mantine_core__WEBPACK_IMPORTED_MODULE_4__/* .ActionIcon */ .A,{color:"blue",size:"xl",variant:"default",style:{zIndex:100,position:"fixed",bottom:theme.spacing.xl,right:theme.spacing.xl,opacity:shown?1:0,transition:"opacity ease-out 0.1s"},"aria-label":(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),onClick:scrollToTop},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tabler_icons__WEBPACK_IMPORTED_MODULE_5__/* .IconChevronUp */ .y_Q,null));}

/***/ }),

/***/ 6279:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ DocSidebar)
});

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Mobile/index.js + 10 modules
var Mobile = __webpack_require__(7816);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Accordion/Accordion.js + 13 modules
var Accordion = __webpack_require__(6222);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./src/components/nav/NavbarItem.tsx
const NavbarItem=props=>{return/*#__PURE__*/react.createElement(Accordion/* Accordion */.U,null,props.items.map(element=>/*#__PURE__*/react.createElement(Accordion/* Accordion.Item */.U.Item,{value:element.href},/*#__PURE__*/react.createElement(Accordion/* Accordion.Control */.U.Control,{chevron:element.type=="link"&&"ㅤ",onClick:e=>element.type=="link"?window.location.href=element.href:undefined},element.label),element.type!="link"&&/*#__PURE__*/react.createElement(Accordion/* Accordion.Panel */.U.Panel,null,/*#__PURE__*/react.createElement(NavbarItem,element)))));};/* harmony default export */ const nav_NavbarItem = (NavbarItem);
;// CONCATENATED MODULE: ./src/components/nav/NavbarRoot.tsx
const NavbarRoot=props=>{return/*#__PURE__*/react.createElement(Accordion/* Accordion */.U,{mt:120,defaultValue:props.path},props.sidebar.map(element=>/*#__PURE__*/react.createElement(Accordion/* Accordion.Item */.U.Item,{value:element.href},/*#__PURE__*/react.createElement(Accordion/* Accordion.Control */.U.Control,{chevron:element.type=="link"&&"ㅤ",onClick:e=>element.type=="link"?window.location.href=element.href:undefined},element.label),element.type!="link"&&/*#__PURE__*/react.createElement(Accordion/* Accordion.Panel */.U.Panel,null,/*#__PURE__*/react.createElement(nav_NavbarItem,element)))));};/* harmony default export */ const nav_NavbarRoot = (NavbarRoot);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(7524);
;// CONCATENATED MODULE: ./src/theme/DocSidebar/index.tsx
function DocSidebar(props){const windowSize=(0,useWindowSize/* useWindowSize */.i)();// Desktop sidebar visible on hydration: need SSR rendering
const shouldRenderSidebarDesktop=windowSize==="desktop"||windowSize==="ssr";// Mobile sidebar not visible on hydration: can avoid SSR rendering
const shouldRenderSidebarMobile=windowSize==="mobile";console.log(props);return/*#__PURE__*/react.createElement(react.Fragment,null,shouldRenderSidebarDesktop&&/*#__PURE__*/react.createElement(nav_NavbarRoot,props),shouldRenderSidebarMobile&&/*#__PURE__*/react.createElement(Mobile/* default */.Z,props));}

/***/ }),

/***/ 4818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ IconArrow)
/* harmony export */ });
/* harmony import */ var _tabler_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3991);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
function IconArrow(props){console.log(props);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tabler_icons__WEBPACK_IMPORTED_MODULE_1__/* .IconArrowRight */ .Ec8,null);}

/***/ }),

/***/ 486:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ErrorPage)
/* harmony export */ });
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8495);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9094);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9236);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6869);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5999);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8146);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1944);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7294);
/* harmony import */ var _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(412);
function ErrorPage(){const theme=(0,_mantine_core__WEBPACK_IMPORTED_MODULE_4__/* .useMantineTheme */ .rZ)();const status={code:404,title:"Not Found",message:"We can't find the page you're looking for. Please check the URL and try again."};if(!_docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_3__/* ["default"].canUseDOM */ .Z.canUseDOM)return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment,null);else return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__/* .PageMetadata */ .d,{title:(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_0__/* .translate */ .I)({id:"theme.NotFound.title",message:"Page Not Found"})}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{fullWidth:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{style:{width:"100%",position:"relative"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{style:{backgroundColor:theme.colorScheme==="dark"?theme.colors.dark[8]:theme.colors.gray[0],background:`url("/images/placeholder.png")`,filter:"brightness(0.5)",width:"100%",height:"calc(100vh - 60px)",marginTop:60}}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mantine_core__WEBPACK_IMPORTED_MODULE_6__/* .Center */ .M,{style:{width:"100%",height:"100%",position:"absolute",top:0,left:0}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mantine_core__WEBPACK_IMPORTED_MODULE_7__/* .Title */ .D,{style:{color:"#ffffff",fontSize:220},align:"center",order:1},"404"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mantine_core__WEBPACK_IMPORTED_MODULE_7__/* .Title */ .D,{style:{color:"#ffffff"},align:"center",order:1},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},status.title)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mantine_core__WEBPACK_IMPORTED_MODULE_7__/* .Title */ .D,{style:{color:theme.colors.gray[4]},align:"center",order:3},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},status.message),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("br",null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mantine_core__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .z,{variant:"outline",size:"xl",style:{color:"white",borderColor:"white",borderWidth:3,marginTop:theme.spacing.xl*1.5},onClick:()=>window.history.back()},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Back"))))))));}

/***/ })

}]);