!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=document.body,d=null;e.disabled=!0,t.addEventListener("click",(function(){d||(t.disabled=!0,e.disabled=!1,d=setInterval((function(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3))})),e.addEventListener("click",(function(){clearInterval(d),d=null,t.disabled=!1,e.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.4509ede1.js.map