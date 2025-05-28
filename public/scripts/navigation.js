let navigationMenu = document.querySelector('header');
let hamburgerButton = document.querySelector('#hamburger-button');
let hamburgerNav = document.querySelector('nav') 

hamburgerButton.addEventListener('click', function(){
    navigationMenu.classList.toggle('navigation-menu-open');
    hamburgerNav.classList.toggle('hamburger-open');
});

