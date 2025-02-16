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
let mainText = null
let randomTextNum = Math.floor(Math.random() * texts.length);
let isFirstType = true

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
window.addEventListener('load', textFaind())