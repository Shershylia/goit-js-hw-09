import"./assets/modulepreload-polyfill-ec808ebb.js";const a="feedback-form-state",e=document.querySelector(".feedback-form");e.addEventListener("submit",m);e.addEventListener("input",l);function m(t){if(t.preventDefault(),e.elements.email.value===""||e.elements.message.value===""){alert("Всі поля форми повинні бути заповнені");return}console.log("Відправляємо форму"),console.log(JSON.parse(localStorage.getItem(a))),localStorage.removeItem(a),t.currentTarget.reset()}function l(t){const o={email:e.elements.email.value.trim(),message:e.elements.message.value.trim()};localStorage.setItem(a,JSON.stringify(o))}function s(){const t=JSON.parse(localStorage.getItem(a));t&&(e.elements.email.value=t.email,e.elements.message.value=t.message)}s();
//# sourceMappingURL=commonHelpers2.js.map
