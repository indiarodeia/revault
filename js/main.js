const menuIcon = document.querySelector("#icon-hamburguer");
const mobileMenu = document.querySelector("#mobile-menu");
const mobileMenuLink = document.querySelectorAll("#mobile-menu nav ul li a");
const openFormBtn = document.querySelector('#openFormBtn');
const form = document.querySelector('.form-container');

// Methods
function toggleMenu() {
    menuIcon.classList.toggle("open");
    mobileMenu.classList.toggle("open");
}

function toggleForm() {
    form.classList.toggle("formOpen");
}
// Events
mobileMenuLink.forEach((link) => {
    link.addEventListener("click", toggleMenu);
});
menuIcon.addEventListener("click", toggleMenu);
openFormBtn.addEventListener("click", toggleForm);