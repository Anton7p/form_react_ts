(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],[,,function(e,t,c){e.exports={output:"style_output__3AQG4",form:"style_form__1waFP",output_row:"style_output_row__1pDpK",form_row:"style_form_row__1iX0I",output_row__checkbox:"style_output_row__checkbox__6VXYl",form_row__checkbox:"style_form_row__checkbox__3ZLeJ",output_row__button:"style_output_row__button__19Ki5",form_row__button:"style_form_row__button__2DOHq",output_row__title:"style_output_row__title__2v4Qy",form_row__title:"style_form_row__title__3q1f3",output_row__text:"style_output_row__text__2mKm4",form_row__text:"style_form_row__text__1c0TD",output_row__row:"style_output_row__row__2YxlF",output_row__column:"style_output_row__column__2oWoE"}},,function(e,t,c){e.exports={wrapper:"style_wrapper__1eEVp",search:"style_search__31KCN",input:"style_input__1YCdz",error:"style_error__21uPk",search_icon:"style_search_icon__3bCOZ",icon:"style_icon__18tz2",value:"style_value__WhEjm",up:"style_up__3_feZ",popup:"style_popup__2xWDZ",popup_content:"style_popup_content__3LeCm",close:"style_close__1RZSc"}},,function(e,t,c){e.exports={popup:"style_popup__101s6",border:"style_border__Uos0G",noborder:"style_noborder__3s6U-",popup_content:"style_popup_content__1flDL",popup_content__list:"style_popup_content__list__Ucybs",dropdown:"style_dropdown__2gBh4",dropdown_value:"style_dropdown_value__3bFcC",sort:"style_sort__18yBk",value:"style_value__3RJgB",error:"style_error__1xi4r",wrapper:"style_wrapper__Gza5h"}},function(e,t,c){e.exports={icon:"style_icon__2nNFG",close:"style_close__1gnzw",text:"style_text__1ZhDM",check:"style_check__pbJyn"}},,function(e,t,c){e.exports={file:"style_file__2O2HH"}},function(e,t,c){e.exports={checkbox:"style_checkbox__3eDpS",checkbox_custom__checkbox:"style_checkbox_custom__checkbox__2Jy4J",label:"style_label__dhok1"}},,function(e,t,c){e.exports={icon_up:"style_icon_up__1qyTs",up:"style_up__ttal1",icon_down:"style_icon_down__2fjMO"}},,function(e,t,c){e.exports={app:"App_app__2ziFi"}},function(e,t,c){e.exports={error:"style_error__2FQXG"}},function(e,t,c){e.exports={button:"style_button__2N6Bl"}},,,,,function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),o=c(13),r=c.n(o),s=(c(21),c(3)),l=c(14),i=c.n(l),u=c(8),j=c(5),d=c(4),_=c.n(d);function b(e,t){if(!e||e.length<3)return[];var c=new RegExp(e,"gm");return t.filter((function(e){return e.value.toString().toLowerCase().match(c)}))}var p=c(0),O=function(e){var t=e.dropdown,c=e.setInputValue,a=e.inputValue,o=e.openPopup,r=e.setOpenPopup,s=e.name;return Object(n.useEffect)((function(){!o&&a.length<3&&r(!0)}),[a,o,r]),Object(p.jsx)(p.Fragment,{children:o&&Object(p.jsx)("div",{className:_.a.popup,style:{border:"".concat(o?"none":"1px solid rgba(0, 0, 0, 0.2)")},children:Object(p.jsx)("div",{className:_.a.popup_content,children:t&&b(a,t).map((function(e,t){return Object(p.jsx)("span",{onClick:function(){c(e.value.toString(),s,""),r(!1)},children:e.value},t)}))})})})},h=c(15),v=c.n(h),x=function(e){var t=e.error;return Object(p.jsx)("span",{className:v.a.error,children:t})},f=function(e,t,c,n){return" ".concat(n[e||""]," ").concat(n[t?"error":""]," ").concat(n[c])},m=function(e){var t=e.color;return Object(p.jsx)("svg",{width:"8",height:"8",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(p.jsx)("path",{d:"M4.42 0.47998L4.36 3.25998L7.02 2.35998L7.44 3.65998L4.78 4.49998L6.44 6.73998L5.32 7.51998L3.72 5.25998L2.1 7.51998L1 6.73998L2.66 4.49998L0 3.65998L0.42 2.35998L3.06 3.25998L3.02 0.47998H4.42Z",fill:t})})},A=function(e){var t=e.searchOrStarIcon,c=e.id,a=e.closeIcon,o=e.name,r=e.validation,l=e.handleChangeFieldValue,i=e.field,u=e.custom,j=e.dropdown,d=Object(n.useState)(!1),b=Object(s.a)(d,2),h=b[0],v=b[1],A=Object(n.useState)(c),w=Object(s.a)(A,2),g=w[0],y=w[1],C=Object(n.useState)(!1),N=Object(s.a)(C,2),B=N[0],U=N[1],E=Object(n.useState)(""),k=Object(s.a)(E,2),S=k[0],F=k[1];return Object(n.useEffect)((function(){!function(e,t,c){if(!e)return c("");var n=/^[a-z-A-Z\u0410-\u042f\u0430-\u044f\s]+$/gi;"string"!==t&&(n=/^[0-9]+$/g),e.match(n)?c(""):c("string"===t?"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0431\u0443\u043a\u0432\u044b":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0446\u0438\u0444\u0440\u044b")}(i.value,r,F)}),[i]),Object(n.useEffect)((function(){S||l(i.value,o,S)}),[S]),Object(n.useEffect)((function(){i.value||v(!1)}),[i.value]),Object(p.jsxs)("div",{className:_.a.wrapper,children:[Object(p.jsx)("span",{className:_.a[u?"".concat(u,"_icon"):"icon"],style:{display:!u&&h?"none":"flex"},children:(i.visible||i.required)&&t(h)}),u&&"string"===typeof i.value&&i.value.length>2&&Object(p.jsx)("span",{className:_.a.close,children:a&&a(B,U,l,o)}),Object(p.jsx)("input",{className:f(u,i.error,"input",_.a),id:c,name:o,onFocus:function(){S&&F(""),v(!0),i.value&&y(g)},onBlur:function(){i.value||v(!1)},onChange:function(e){l(e.target.value,o,S)},placeholder:g,value:i.value,style:function(e,t){return{color:i.value?"#000000":"#B2B2B2",paddingBottom:e?t?25:15:25,paddingRight:t?95:30,paddingLeft:e?t?80:30:t?110:35}}(h,u)}),!u&&Object(p.jsxs)("span",{className:_.a.value,style:{display:h?"flex":"none"},children:[g,(i.visible||i.required)&&Object(p.jsx)(m,{color:i.required?"#E62B25":"#F99B1C"})]}),i.error&&Object(p.jsx)(x,{error:i.error}),j&&Object(p.jsx)(O,{inputValue:i.value,name:o,setInputValue:l,dropdown:j,openPopup:B,setOpenPopup:U})]})},w=c(7),g=c.n(w),y=function(e){var t=e.custom;return Object(p.jsxs)("div",{className:g.a.icon,children:[!t&&Object(p.jsx)(m,{color:"#F99B1C"}),Object(p.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALESURBVHgBvZddUhpBEMe7B7B89NWoVWuJKYxYISdwOUHICUJOIJwAOAHeALyBniDkBOEhWFQk5VaC4ZUXKrIf0+nZ7C67sOhCSP4v7AzD/ma6e7obhIQa5TQNIK2BQA0kGY7A8f7tXRdWFD4JyWd1IngLiGUg2IldRHSNSNe7vW9XsC7wvqDtZOxMXRBcQHIZ04xVPOwaBqwCHBVyGlnyI29dC02P2YxtFGJmQpIaIej8Cj38eyJs7N1+rUMSoAuznc+B+QgMlFTe7Q8+LXvBKJdjvzo1hpeTQHHZyQigbU6s6qFhjCGBhqfZigBs+mPHoeJBf9BZDjw9bjGk7MP2encfYEUNXx2XBULLGyqfvmGfRjYsXJg6nQdTZlQngzXE16TNH5feUNs20wtB5wLBcmr+BKKsJzVjnPhUDVBBxpKIlVgg+ZHGp0t6n5bJM2FbPbO/dn7ksnoEyHYvhAKlAxuQg3TjP6cQX0eAKUFBBkGClVNVnOy0HbyHUBYiQDa0FgCFXNt3Yc1HZgQoU5uBJJUgRxj+gIOnABvQn7jwAIBGBGhtWWrCO+VmgKzgPQgUiQvh2duf1MO7W1cCMbjXv7acSB527yGHcWO2GJrwF1LpLbhmBO3Y1HbwxU2yHW9OH55kK7CGVIoMn86UVmN+jfAfIqcU2FwVulBtiOqH/cViHKmH8yVG1TVzy2w/V8W/nxyV0inRmrUh1HnRGxTj1i5U/Id8toaE9dCUoVKecOjqcdvuKp+4LYiZ0dICztlPJf5eny2nznRiv1tWAGJ7moezoxI6qSbnOg1WkAS63O8NqrPNv6zzJISr/9KuTbUOMm2/RynKz4DHbPuOBGyE20YFQyI3gMItx5NtYgA/y56zmQuOnCViHo9VU/U4MW/izDfvGh+aCLiu5qFSUvWfAiNQLu5TaRXhf+hn/vji3v2rAPAb+utd7CwhUpEAAAAASUVORK5CYII=",alt:"search"})]})},C=c(12),N=c.n(C);var B=function(e){var t=e.active;return Object(p.jsx)("img",{className:t?N.a.icon_down:N.a.icon_up,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAXCAYAAABwOa1vAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD0SURBVHgBzdfbDYJAEEbhU4Il/CVYiqXYgXZgCdIJJVgCJVCCLoEJLAsY7nOSedEIn4nsRGhTmCv+UjPJi0WYMswNP4naVdBD52G+nblzfqKGmimferOaJ+clYk/JxM/ibLRIsaPP1iXMhxj95rjEDGy3jBhdfYkL+yYWYq0HMTp5UjdMrMRaR6DFRljrToreasGIjbHWrblY98JrF4zYCWtdSY+9pQtG7Iwdu9GSs1ochB274Ry0OBhrDS2Y15/PiJOw3TJidM7wghEOsNaD6bNaOMJaY2jhEGsNLRi3WKu/YFxjrf6CcY21RPsf0T3WEjtgf/O/oqNCdXKRAAAAAElFTkSuQmCC",alt:"arrow"})},U=function(e){var t=e.active,c=e.setActive,n=e.clearInput,a=e.name;return Object(p.jsxs)("div",{className:g.a.close,children:[Object(p.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMmSURBVHgBrZZdctowEIBXMtM81jO9gHuCpjcgz32oSdqHzvCnG8AJgBOQGzgmD31oErhB6Q3ICeKeoKRvbZDVXVvCQrHBZLozCZa02k9e7a6XwRESRfMAYBN4Hg+kVGsA+mushGit69pgNSCnngc9NB7iMKhQS9DUUkqYIDyBlwAR5CNoiqA+HCXsah+4FHh9PW8qpeb46FvT6Da2YAxWjKnMhUoxX6n0FH+bOB9YuomU6VCIT4uDwCi67Xsei8xYKUjQWL/bPf8Be4T2cc5GNhj39nu987gSGEU3IQbEvJhRl93uxRCOEPTOCL0zNmMp5ZkQn5fPgBSBnqe+gw4M2tTrXUzgBeJA11I+vhVCZNfAjRIGyOh/wEg6ndaEvKOHGHz+1Kxlb6jf7iGHQYJ+f2sbyNfTEN17WQaYzW4HUvKFG5lxfPdg7lRK9h7XV9x6OyPj5zByNZtG0bexC4vj2zGtkU5eGArBIBLmGQ/cy+byoWpabxfvmky3Ce953siGEowxZg4bcA4f7Z3o2iVk6UTCwux/nuDqlwZfodsEOFISeROO1i1Y5b3PZvPIFA/OTwLeaMCpWWSMr6BEKAjQ+NiM6U3rwHKbsLWZpn8CdKn0i0VVWYRdaB1Yvp4+mmd0SsCpPEFNSdOU1ZmrEqyxa45uTIrTVMOdANmKG0iuoP3XxTMCNxv6tBhgcZ/7YORG906roLZNrDj3XCdropdDdwMldVmAlAUS6ZYgmxqcUHnTecjMZ8THkzZtdSn/LkjZhpk1G0o6pOsctg86hzEgl/TLc6NPsXXSyN4kxJcEw/kMo21QFo0aOiAd0t1dLTyDh8n2Mus0CGJ9rYifpdZRnyVXdu+9KCi8OAEngM5DNdgXecfAtKu3ntkCqfNCpZYZHwr3atjdpR1kmKdD29UHWwyUBCvEuN12i/qu6D6I9gVm7mCLUUBvQizOU7cxolaQaqMpV5TUeZ5l6eQ0XBCW9UF72sSv+B18NSoCqa4obBN/D01LURvogktaQVsSBGELya46nfP7ffZqF94cHvknJ2/ePT1tqEn2OW9gjnpJu/3hZ10b/wDTV8T2Ul13WAAAAABJRU5ErkJggg==",alt:"close",onClick:function(){return n("",a,"")}}),Object(p.jsx)("span",{className:g.a.close,onClick:function(){return c(!t)},children:Object(p.jsx)(B,{active:t})})]})},E=c(16),k=c.n(E),S=function(e){var t=e.custom,c=e.type,n=e.handleClearForm,a=e.text;return Object(p.jsx)("button",{type:c,className:k.a.button,onClick:function(){"button"===c&&n&&n()},style:{backgroundColor:"".concat(t.backgroundColor),border:"2px solid ".concat(t.borderColor),color:" ".concat(t.color)},children:Object(p.jsx)("span",{children:a})})},F=c(6),I=c.n(F),V=function(e){var t=e.dropdown,c=e.name,a=e.field,o=e.handleChangeFieldValue,r=Object(n.useState)(!1),l=Object(s.a)(r,2),i=l[0],u=l[1],j=Object(n.useState)("0px"),d=Object(s.a)(j,2),_=d[0],b=d[1],O=Object(n.useState)("0"),h=Object(s.a)(O,2),v=h[0],A=h[1],w=Object(n.useState)(a.error),g=Object(s.a)(w,2),y=g[0],C=g[1],N=Object(n.useRef)(null);function U(){u(!i),A(i?"0":"100%"),C(""),i&&N&&N.current&&b("0px"),i||N&&N.current&&b("".concat(N.current.scrollHeight,"px"))}return Object(n.useEffect)((function(){C(a.error)}),[a.error]),Object(p.jsxs)("div",{className:I.a.wrapper,children:[Object(p.jsxs)("div",{className:f("",y,"dropdown",I.a),children:[Object(p.jsxs)("div",{className:I.a.dropdown_value,children:[Object(p.jsxs)("small",{children:["\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u044f",Object(p.jsx)(m,{color:"#E62B25"})]}),Object(p.jsx)("span",{children:a.value})]}),Object(p.jsx)("span",{onClick:U,children:Object(p.jsx)(B,{active:i})}),Object(p.jsx)("div",{className:"".concat(I.a.popup," ").concat(I.a[i?"border":"noborder"]),children:Object(p.jsx)("div",{className:I.a.popup_content,ref:N,style:{height:"".concat(_),opacity:"".concat(v)},children:Object(p.jsx)("div",{className:I.a.popup_content__list,children:t.map((function(e,t){return Object(p.jsx)("span",{onClick:function(){o(e.value,c,""),U()},children:e.value},t)}))})})})]}),y&&Object(p.jsx)(x,{error:y})]})},L=c(10),G=c.n(L),Y=function(e){var t=e.title,c=e.handleChecked,n=e.label,a=e.name;return Object(p.jsxs)("div",{className:G.a.checkbox,children:[Object(p.jsx)("input",{className:G.a.checkbox_custom__checkbox,type:"checkbox",name:a,id:t,onChange:function(e){return c(e.target.checked,a,"")},value:t}),Object(p.jsx)("label",{htmlFor:t,children:Object(p.jsx)("span",{className:G.a.label,children:n})})]})},R=c(2),Q=c.n(R),H=c(9),J=c.n(H),M=function(e){var t=e.name,c=e.setUrl;return Object(p.jsxs)("label",{className:J.a.file,children:[Object(p.jsx)("span",{children:"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442: "}),"\xa0",Object(p.jsx)("span",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u0430\u0439\u043b\u044b \u0438\u043b\u0438 "}),"\xa0",Object(p.jsx)("span",{children:"\u043e\u0442\u043a\u0440\u044b\u0442\u044c \u043f\u0440\u043e\u0432\u043e\u0434\u043d\u0438\u043a"}),Object(p.jsx)("input",{type:"file",onChange:function(e){return function(e,t){if(e){var n=e[0];if("image/gif"!==n.type&&"image/jpeg"!==n.type&&"image/png"!==n.type&&"image/tiff"!==n.type&&"application/pdf"!==n.type&&"application/msword"!==n.type&&"application/vnd.openxmlformats-officedocument.wordprocessingml.document"!==n.type);else{var a=new FileReader;a.readAsDataURL(n),a.onload=function(e){null!==e.target&&"string"===typeof e.target.result&&c&&c(e.target.result,t,"")}}}}(e.target.files,t)}})]})},Z=function(e){var t=e.text,c=e.color,n=e.icon,a=e.custom;return Object(p.jsxs)("small",{className:g.a[a],children:[n(c),t]})},D=[{value:"ASD\u0434\u043d\u0435\u0435 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0435"},{value:"ddd\u0434\u043d\u0435\u0435 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0435"},{value:"fff\u043d\u0435\u0435 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u0430\u043b\u044c\u043d\u043e\u0435"},{value:"aaaaaaaa\u0441\u0435"},{value:"aaaaaaaa\u0441\u0435"},{value:"aaaaa\u0441\u0435"},{value:"aaaaaaaaaaa\u0441\u0435"},{value:"aaaaa\u0441sssssss\u0435"},{value:"aaaaa\u0441sssssss\u0435"},{value:"aaaaa\u0441sssssss\u0435"},{value:"aaaaafffffff\u0441\u0435"},{value:"\u0412\u044b\u0441\u0448\u0435\u0435"},{value:"\u041c\u0430\u0433\u0438\u0441\u0442\u0440\u0430\u0442\u0443\u0440\u0430"}],X=[{value:"\u0421\u0440\u0435\u0434\u043d\u0435\u0435 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0435"},{value:"\u0421\u0440\u0435\u0434\u043d\u0435\u0435 \u043f"},{value:"\u0421\u0440\u0435\u0434\u043d\u0435\u0435 \u043f\u0440\u043e\u0444\u044c\u043d\u043e\u0435"},{value:"\u0412\u044b\u0441\u0448\u0435\u0435"},{value:"\u0412\u044b\u0441\u0448\u0435\u0435"},{value:"\u041c\u0430\u0433\u0438\u0441\u0442\u0440\u0430\u0442\u0443\u0440\u0430"}],q=function(e){var t=e.showUserData,c={year:{value:"",error:"",required:!0},education:{value:"",error:"",required:!0},university:{value:"",error:"",required:!0},series:{value:"",error:"",required:!0},number:{value:"",error:""},speciality:{value:"",error:"",visible:!0},qualification:{value:"",error:"",visible:!0},notification:{value:!1,error:""},url:{value:"",error:""}},a=Object(n.useState)(c),o=Object(s.a)(a,2),r=o[0],l=o[1],i=r.education,d=r.year,_=r.university,b=r.series,O=r.number,h=r.speciality,v=r.qualification,x=r.notification,f=function(e,t,c){l(Object(j.a)(Object(j.a)({},r),{},Object(u.a)({},t,Object(j.a)(Object(j.a)({},r[t]),{},{value:e,error:c}))))};return Object(p.jsxs)("form",{className:Q.a.form,onSubmit:function(e){e.preventDefault();var c=!1,n=JSON.parse(JSON.stringify(r));for(var a in["year","education","series","university"].forEach((function(e){r[e].value||(n=Object(j.a)(Object(j.a)({},n),{},Object(u.a)({},e,Object(j.a)(Object(j.a)({},n[e]),{},{error:"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"}))),c=!0)})),n)n[a].error&&(c=!0);l(n),!c&&t(r)},children:[Object(p.jsx)("section",{className:Q.a.form_row__title,children:Object(p.jsx)("span",{children:"\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435"})}),Object(p.jsxs)("section",{className:Q.a.form_row,children:[Object(p.jsx)(V,{dropdown:X,name:"education",handleChangeFieldValue:f,field:i}),Object(p.jsx)(A,{id:"\u0413\u043e\u0434 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f",name:"year",validation:"number",searchOrStarIcon:function(){return Object(p.jsx)(m,{color:"#E62B25"})},field:d,handleChangeFieldValue:f})]}),Object(p.jsx)("section",{className:Q.a.form_row,children:Object(p.jsx)(A,{id:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u043b\u044f \u0432\u044b\u0431\u043e\u0440\u0430 \u0412\u0423\u0417\u0430",custom:"search",name:"university",validation:"string",dropdown:D,field:_,handleChangeFieldValue:f,searchOrStarIcon:function(e){return Object(p.jsx)(y,{custom:e})},closeIcon:function(e,t,c){return Object(p.jsx)(U,{name:"university",active:e,setActive:t,clearInput:c})}})}),Object(p.jsxs)("section",{className:Q.a.form_row,children:[Object(p.jsx)(A,{id:"\u0421\u0435\u0440\u0438\u044f \u0434\u0438\u043f\u043b\u043e\u043c\u0430",name:"series",validation:"number",field:b,handleChangeFieldValue:f,searchOrStarIcon:function(){return Object(p.jsx)(m,{color:"#E62B25"})}}),b.value&&Object(p.jsx)(A,{id:"\u041d\u043e\u043c\u0435\u0440 \u0434\u0438\u043f\u043b\u043e\u043c\u0430",name:"number",validation:"number",field:O,handleChangeFieldValue:f,searchOrStarIcon:function(){return Object(p.jsx)(m,{color:"#F99B1C"})}})]}),Object(p.jsx)("section",{className:Q.a.form_row,children:b.value&&O.value&&Object(p.jsx)(A,{id:"\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043f\u043e \u0434\u0438\u043f\u043b\u043e\u043c\u0443",name:"speciality",validation:"string",field:h,handleChangeFieldValue:f,searchOrStarIcon:function(){return Object(p.jsx)(m,{color:"#F99B1C"})}})}),Object(p.jsx)("section",{className:Q.a.form_row,children:b.value&&O.value&&h.value&&Object(p.jsx)(A,{id:"\u041a\u0432\u0430\u043b\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f \u043f\u043e \u0434\u0438\u043f\u043b\u043e\u043c\u0443",name:"qualification",validation:"string",field:v,handleChangeFieldValue:f,searchOrStarIcon:function(){return Object(p.jsx)(m,{color:"#F99B1C"})}})}),Object(p.jsx)("section",{className:Q.a.form_row__checkbox,children:Object(p.jsx)(Y,{title:"checkbox",label:"\u041d\u043e\u0441\u0442\u0440\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f",name:"notification",field:x,handleChecked:f})}),Object(p.jsx)("section",{className:Q.a.form_row,children:Object(p.jsx)(M,{name:"url",setUrl:f})}),Object(p.jsxs)("section",{className:Q.a.form_row__button,children:[Object(p.jsx)(S,{text:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",type:"submit",custom:{backgroundColor:"#E62B25",borderColor:"#E62B25",color:"#FFFFFF"}}),Object(p.jsx)(S,{text:"\u041e\u0442\u043c\u0435\u043d\u0430",handleClearForm:function(){l(c),t(c)},type:"button",custom:{backgroundColor:"#FFFFFF",borderColor:"#E5E5E5",color:"#A2A2AE"}})]}),Object(p.jsxs)("section",{className:Q.a.form_row__text,children:[Object(p.jsx)(Z,{custom:"text",color:"#E62B25",text:"\u041f\u043e\u043b\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f",icon:function(e){return Object(p.jsx)(m,{color:e})}}),Object(p.jsx)(Z,{custom:"text",color:"#E78E24",text:"\u041f\u043e\u043b\u044f \u0432\u0438\u0434\u043d\u044b \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439",icon:function(e){return Object(p.jsx)(m,{color:e})}})]})]})},K=function(e){var t=e.url,c=e.setUrl;return Object(p.jsxs)("label",{className:J.a.file,children:[Object(p.jsx)("span",{children:"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442: "}),"\xa0",Object(p.jsx)("a",{href:t,download:!0,onClick:function(e){t||e.preventDefault(),setTimeout((function(){c&&c("")}),0)},children:"\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442"})]})},W=function(e){var t=e.color;return Object(p.jsx)("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(p.jsx)("path",{d:"M7.5 13.5323L12.9516 18.9839L20.5 8.5",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},T=function(e){var t=e.user;return Object(p.jsxs)("form",{className:Q.a.output,children:[Object(p.jsx)("section",{className:Q.a.output_row__title,children:Object(p.jsx)("div",{children:"\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435"})}),Object(p.jsxs)("section",{className:Q.a.output_row,children:[Object(p.jsxs)("div",{className:Q.a.output_row__column,children:[Object(p.jsx)("p",{children:"\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u044f"}),Object(p.jsx)("span",{children:null===t||void 0===t?void 0:t.education.value})]}),Object(p.jsxs)("div",{className:Q.a.output_row__column,children:[Object(p.jsx)("p",{children:"\u0413\u043e\u0434 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f"}),Object(p.jsxs)("span",{children:[" ",null===t||void 0===t?void 0:t.year.value]})]})]}),Object(p.jsx)("section",{className:Q.a.output_row,children:Object(p.jsx)("div",{className:Q.a.output_row__row,children:Object(p.jsx)("small",{children:null===t||void 0===t?void 0:t.university.value})})}),Object(p.jsxs)("section",{className:Q.a.output_row,children:[Object(p.jsxs)("div",{className:Q.a.output_row__row,children:[Object(p.jsx)("small",{children:"\u0421\u0435\u0440\u0438\u044f \u0434\u0438\u043f\u043b\u043e\u043c\u0430"}),Object(p.jsx)("span",{children:null===t||void 0===t?void 0:t.series.value})]}),Object(p.jsxs)("div",{className:Q.a.output_row__row,children:[Object(p.jsx)("small",{children:"\u041d\u043e\u043c\u0435\u0440 \u0434\u0438\u043f\u043b\u043e\u043c\u0430"}),Object(p.jsx)("span",{children:null===t||void 0===t?void 0:t.number.value})]})]}),Object(p.jsx)("section",{className:Q.a.output_row,children:(null===t||void 0===t?void 0:t.speciality.value)&&Object(p.jsxs)("div",{className:Q.a.output_row__row,children:[Object(p.jsx)("small",{children:"\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043f\u043e \u0434\u0438\u043f\u043b\u043e\u043c\u0443"}),Object(p.jsx)("span",{children:null===t||void 0===t?void 0:t.speciality.value})]})}),Object(p.jsx)("section",{className:Q.a.output_row,children:(null===t||void 0===t?void 0:t.qualification.value)&&Object(p.jsxs)("div",{className:Q.a.output_row__row,children:[Object(p.jsx)("small",{children:"\u041a\u0432\u0430\u043b\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f \u043f\u043e \u0434\u0438\u043f\u043b\u043e\u043c\u0443"}),Object(p.jsx)("span",{children:null===t||void 0===t?void 0:t.qualification.value})]})}),Object(p.jsx)("section",{className:Q.a.output_row__checkbox,children:(null===t||void 0===t?void 0:t.notification.value)&&Object(p.jsx)(Z,{color:"#E62B25",text:"\u041d\u043e\u0441\u0442\u0440\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f",custom:"check",icon:function(e){return Object(p.jsx)(W,{color:e})}})}),Object(p.jsx)("section",{className:Q.a.form_row,children:Object(p.jsx)(K,{url:null===t||void 0===t?void 0:t.url.value})})]})};var P=function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),c=t[0],a=t[1];return Object(p.jsx)("div",{className:"_container",children:Object(p.jsxs)("div",{className:i.a.app,children:[Object(p.jsx)(q,{showUserData:a}),Object(p.jsx)(T,{user:c})]})})};r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(P,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.55d120b2.chunk.js.map