// Get elements
const menuIcon = document.getElementById('menu-icon');
const userMenu = document.getElementById('user-menu');
const userMenuItems = document.querySelectorAll("#user-menu a")

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