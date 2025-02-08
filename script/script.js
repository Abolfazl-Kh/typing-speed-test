const menuIcon = document.getElementById('menu-icon');
const userMenu = document.getElementById('user-menu');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('open');
    userMenu.classList.toggle('d-block');
});
