const nameForm = document.querySelector(".js-name-form"),
    nameInput = nameForm.querySelector(".js-name-input"),
    greeting = document.querySelector(".js-greeting");

const thirdDiv = document.querySelector(".third-row"),
      btnX = thirdDiv.querySelector(".btnX");

const USER_LS = "currentUser",
      SHOWING_CN = "showing";

function deleteName(){
    localStorage.removeItem(USER_LS);
    greeting.classList.remove(SHOWING_CN);
    btnX.classList.remove(SHOWING_CN);
    nameInput.value = "";
    askForName();
}
function handleClick(event){
    event.preventDefault();
    deleteName();
}

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = nameInput.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    nameForm.classList.add(SHOWING_CN);
    nameForm.addEventListener("submit",handleSubmit);
}

function paintGreeting(text){
    nameForm.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `${text}님, 안녕하세요!`;
    btnX.classList.add(SHOWING_CN);
    btnX.addEventListener("click", handleClick);
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser == null){
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();