import"./assets/modulepreload-polyfill-ec808ebb.js";const t="feedback-msg",r=document.querySelector(".feedback-form"),o=document.querySelector("textarea");r.addEventListener("submit",n);o.addEventListener("input",c);function n(e){e.preventDefault(),console.log("Відправляємо форму"),localStorage.removeItem(t),e.currentTarget.reset()}function c(e){const a=e.target.value;localStorage.setItem(t,a)}function s(){const e=localStorage.getItem(t);e&&(o.value=e)}s();
//# sourceMappingURL=commonHelpers2.js.map
