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

// Контент для каждого попапа
const popupContents = {
    'Купить': `
        <div class="popup-buttons">
            <button class="popup-button">
                <span>Квартира</span>
                <span class="arrow">200 000 <img src="./img/icon/arrow_forward_ios (1).svg" alt></span>
            </button>
            <button class="popup-button">
                <span>Участок</span>
                <span class="arrow">60 080 <img src="./img/icon/arrow_forward_ios (1).svg" alt></span>
            </button>
            <button class="popup-button">
                <span>Дом или дача</span>
                <span class="arrow">60 080 <img src="./img/icon/arrow_forward_ios (1).svg" alt></span>
            </button>
            <button class="popup-button">
                <span>Гараж или паркинг</span>
                <span class="arrow">60 080 <img src="./img/icon/arrow_forward_ios (1).svg" alt></span>
            </button>
            <button class="popup-button">
                <span>Коммерческая недвижимость</span>
                <span class="arrow">60 080 <img src="./img/icon/arrow_forward_ios (1).svg" alt></span>
            </button>
            <button class="popup-button">
                <span>Бизнес</span>
                <span class="arrow">60 080 <img src="./img/icon/arrow_forward_ios (1).svg" alt></span>
            </button>
            <button class="popup-button">
                <span>Промбазы и заводы</span>
                <span class="arrow">60 080 <img src="./img/icon/arrow_forward_ios (1).svg" alt></span>
            </button>
        </div>
    `,
    'Аренда': `
        <div class="popup-buttons">
            <button class="popup-button">
                <span>Квартира</span>
                <span class="arrow">Аренда <img src="./img/icon/arrow_forward_ios (1).svg" alt></span>
            </button>
            <button class="popup-button">
                <span>Коммерческая недвижимость</span>
                <span class="arrow">Аренда <img src="./img/icon/arrow_forward_ios (1).svg" alt></span>
            </button>
        </div>
    `,
    'Компании': `
        <div class="popup-buttons">
            <button class="popup-button">
                <span>Риэлторские компании</span>
                <span class="arrow"><img src="./img/icon/arrow_forward_ios (1).svg" alt></span>
            </button>
            <button class="popup-button">
                <span>Застройщики</span>
                <span class="arrow"><img src="./img/icon/arrow_forward_ios (1).svg" alt></span>
            </button>
        </div>
    `,
    'Новости': `
        <div class="popup-buttons">
            <button class="popup-button">
                <span>Новости недвижимости</span>
                <span class="arrow"><img src="./img/icon/arrow_forward_ios (1).svg" alt></span>
            </button>
            <button class="popup-button">
                <span>Аналитика</span>
                <span class="arrow"><img src="./img/icon/arrow_forward_ios (1).svg" alt></span>
            </button>
        </div>
    `,
    'Мои объявления': `
        <div class="popup-buttons">
            <button class="popup-button">
                <span>Активные объявления</span>
                <span class="arrow"><img src="./img/icon/arrow_forward_ios (1).svg" alt></span>
            </button>
            <button class="popup-button">
                <span>Архивные объявления</span>
                <span class="arrow"><img src="./img/icon/arrow_forward_ios (1).svg" alt></span>
            </button>
        </div>
    `
};

document.querySelectorAll('.mobile_filters button').forEach(button => {
    button.addEventListener('click', (e) => {
        const popup = document.querySelector('.fullscreen-popup');
        const title = popup.querySelector('.popup-title');
        const content = popup.querySelector('.popup-content');

        // Получаем текст кнопки (удаляем иконку и числа)
        const buttonText = button.querySelector('span:first-child').textContent.trim();

        // Устанавливаем заголовок
        title.textContent = buttonText;

        // Устанавливаем контент
        content.innerHTML = popupContents[buttonText] || '<p>Контент не найден</p>';

        popup.style.display = 'flex';
    });
});

document.querySelector('.close-popup').addEventListener('click', () => {
    document.querySelector('.fullscreen-popup').style.display = 'none';
});