window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.main_menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.menu_hbr');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('menu_hbr_active');
        menu.classList.toggle('main_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('menu_hbr_active');
            menu.classList.toggle('main_active');
        })
    })
})