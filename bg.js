const body = document.querySelector("body");

const PHOTO_NO = 11;



function loadBackground(fileName) {
    const background = document.createElement("img");
    background.classList.add("bgPhoto");
    background.src = `photo/${fileName}.jpg` ;
    body.appendChild(background);
}

function createRandomNo(){
    const randomNumber = Math.ceil(Math.random() * PHOTO_NO);
    return randomNumber;
} 

function init(){
    const randomNo = createRandomNo();
    loadBackground(randomNo);
}

init();