!function(){var t,e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]"),o=document.querySelector("body");function a(){o.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}e.addEventListener("click",(function(){t||(t=setInterval(a,1e3),e.disabled=!0)})),n.addEventListener("click",(function(){clearInterval(t),e.disabled=!1,t=null}))}();
//# sourceMappingURL=01-color-switcher.5ee63f0b.js.map
