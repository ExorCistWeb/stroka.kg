//  Год в футере
const currentYear = new Date().getFullYear();
document.querySelector('.date').textContent = currentYear;
//  Год в футере

// Цена в фильтре
document.getElementById('priceButton').addEventListener('click', function() {

    this.style.display = 'none';
    document.querySelector('.price_input').style.display = 'flex';
});

document.addEventListener("DOMContentLoaded", function() {
    const profileBtn = document.querySelector(".profile-btn");
    const modal = document.querySelector(".lk_modal");

    profileBtn.addEventListener("click", function() {
        modal.classList.toggle("active");
    });
});

// Скрипт для работы мобильного меню
document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burger-menu');
    const mobileNav = document.getElementById('mobile-nav');

    burgerMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileNav.classList.toggle('active');

        // Анимация бургер-кнопки в крестик
        if (this.classList.contains('active')) {
            this.querySelector('span:nth-child(1)').style.transform = 'rotate(45deg) translate(5px, 5px)';
            this.querySelector('span:nth-child(2)').style.opacity = '0';
            this.querySelector('span:nth-child(3)').style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            this.querySelector('span:nth-child(1)').style.transform = 'none';
            this.querySelector('span:nth-child(2)').style.opacity = '1';
            this.querySelector('span:nth-child(3)').style.transform = 'none';
        }
    });
});