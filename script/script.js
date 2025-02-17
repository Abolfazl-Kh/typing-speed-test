//texts sorce
const texts = [
    "The quick brown fox jumps over the lazy dog.",
    "Coding is like humor. If you have to explain it, it’s bad.",
    "Simplicity is the soul of efficiency.",
    "Life is short. Code more.",
    "First, solve the problem. Then, write the code.",
    "Talk is cheap. Show me the code.",
    "Before software can be reusable it first has to be usable."
];
// Get elements
const menuIcon = document.getElementById('menu-icon');
const userMenu = document.getElementById('user-menu');
const userMenuItems = document.querySelectorAll("#user-menu a")
const textHolder = document.getElementById("random-text")
const typingBoxElm = document.getElementById("typing-box")
const timerConter = document.getElementById("timer")
const modalElem = document.getElementById("result")
const wordCount = document.getElementById("word-count")
const elapsedTime = document.getElementById("elapsed-time")
const resultText = document.getElementById("result-text")
const closeModal = document.querySelector(".close-btn")

let mainText = null
let randomTextNum = Math.floor(Math.random() * texts.length);
let isFirstType = true
let miliSeconds = 0;
let seconds = 0;
let stopwatch;

// Toggle menu on click
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('open');
    userMenu.classList.toggle('d-block');
});
//Alert users when clicking on menu links (for unavailable sections)
userMenuItems.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        alert("This section is not available yet!");
    });
});
function textFaind() {
    mainText = texts[randomTextNum]
    textHolder.innerHTML = mainText
}
function timer() {
    stopwatch = setInterval(() => {
        miliSeconds++;
        if (miliSeconds > 99) {
            seconds++;
            miliSeconds = 0;
        }
        timerConter.innerHTML = `${seconds.toString().padStart(2, "0")}:${miliSeconds.toString().padStart(2, "0")}`;
    }, 10);
}
function showresult() {
    let countOfDigits = mainText.replace(/[.,!?]/g, "").trim().split(/\s+/).length;
    wordCount.innerHTML = `${countOfDigits} <br/> words.`
    elapsedTime.innerHTML = `${seconds}:${miliSeconds} <br/> seconds.`
    resultText.innerHTML = `You typed ${countOfDigits} words in ${seconds} seconds and ${miliSeconds} mili seconds.`
    if (modalElem.style.display !== 'block') {
        modalElem.style.display = 'block';
    }    
}
function textValidation() {
    if (isFirstType) {
        timer()
        isFirstType = false
    }
    let typedText = typingBoxElm.value
    let finalText = mainText.substring(0, typedText.length)
    if (typedText == finalText) {
        typingBoxElm.style.border = '3px solid  rgb(247, 215, 52)'
    } else {
        typingBoxElm.style.border = '3px solid  rgb(247, 52, 52)'
    }
    if (typedText === mainText) {
        typingBoxElm.style.border = '3px solid rgba(52, 247, 117)'
        clearInterval(stopwatch)
        showresult()
    }
}
function hidModal(){
    modalElem.style.display = 'none'
}

window.addEventListener('load', textFaind())
typingBoxElm.addEventListener('keyup', textValidation)
closeModal.addEventListener('click', hidModal)