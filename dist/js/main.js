(()=>{"use strict";(()=>{const e=document.getElementById("timer-hours"),t=document.getElementById("timer-minutes"),n=document.getElementById("timer-seconds"),o=e=>e<10?"0"+e:e,c=()=>{const c=(()=>{let e=(new Date("4 march 2025").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();e.textContent=o(c.hours),t.textContent=o(c.minutes),n.textContent=o(c.seconds),c.timeRemaining<0&&(clearInterval(l),e.textContent="00",t.textContent="00",n.textContent="00")},l=setInterval(c,1e3);c()})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),o=t.querySelectorAll("ul>li>a"),c=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",c),n.addEventListener("click",c),o.forEach((e=>e.addEventListener("click",c)))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=document.querySelector(".popup-close"),o=document.querySelector(".popup-content"),c=window.innerWidth<=768;let l,r=0;const i=()=>{r++,l=requestAnimationFrame(i),r<=10?(e.style.display="block",o.style.top=`${r}%`):cancelAnimationFrame(l)},s=()=>{r--,l=requestAnimationFrame(s),r>=0?o.style.top=`${r}%`:(cancelAnimationFrame(l),e.style.display="none")};t.forEach((t=>{t.addEventListener("click",(()=>{c?e.style.display="block":i()}))})),n.addEventListener("click",(()=>{c?e.style.display="none":s()}))})(),(()=>{const e=document.querySelector("main>a"),t=document.getElementById("service-block");let n;const o=()=>{const e=document.documentElement.scrollTop;e<t.offsetTop?(document.documentElement.scrollTop=e+16,n=requestAnimationFrame(o)):cancelAnimationFrame(n)};e.addEventListener("click",(e=>{e.preventDefault(),o()}))})()})();