import"./assets/modulepreload-polyfill-ec808ebb.js";const o="feedback-form-state",t=document.querySelector(".feedback-form");t.addEventListener("submit",m);t.addEventListener("input",n);function m(e){e.preventDefault(),console.log("Відправляємо форму"),console.log(JSON.parse(localStorage.getItem(o))),localStorage.removeItem(o),e.currentTarget.reset()}function n(e){const a={email:t.elements.email.value,message:t.elements.message.value};localStorage.setItem(o,JSON.stringify(a))}function s(){const e=JSON.parse(localStorage.getItem(o));e&&(t.elements.email.value=e.email,t.elements.message.value=e.message)}s();
//# sourceMappingURL=commonHelpers2.js.map