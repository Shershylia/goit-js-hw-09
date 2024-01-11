const STORAGE_KEY = "feedback-msg";

const form = document.querySelector(".feedback-form");
const textarea = document.querySelector("textarea");

form.addEventListener("submit", onFormSubmit);
textarea.addEventListener("input", onTextareaInput);

function onFormSubmit(event) {
    event.preventDefault();
    
    console.log("Відправляємо форму");
    localStorage.removeItem(STORAGE_KEY);

    event.currentTarget.reset();
}


function onTextareaInput(event) {
  const value = event.target.value;
    
    localStorage.setItem(STORAGE_KEY, value);
}

function saveTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY); 
    
    if (savedMessage) {
        textarea.value = savedMessage;
    }
}
saveTextarea();