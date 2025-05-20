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

// Основной контент для попапов
const popupContents = {
    'Купить': {
        header: 'Купить',
        content: `
            <div class="tabs tabs_mobile tabs_mobile_modal">
                <button class="tab-button active" data-type="Купить">Купить</button>
                <button class="tab-button" data-type="Аренда">Арендовать</button>
            </div>
            <div class="popup-buttons">
                <button class="popup-button" data-next="Квартира">
                    <span>Квартира</span>
                    <span class="arrow">200 000 <img src="./img/icon/arrow_forward_ios (1).svg" alt></span>
                </button>
                <button class="popup-button" data-next="Участок">
                    <span>Участок</span>
                    <span class="arrow">60 080 <img src="./img/icon/arrow_forward_ios (1).svg" alt></span>
                </button>
                <button class="popup-button" data-next="Дом">
                    <span>Дом или дача</span>
                    <span class="arrow">60 080 <img src="./img/icon/arrow_forward_ios (1).svg" alt></span>
                </button>
                <button class="popup-button" data-next="Гараж">
                    <span>Гараж или паркинг</span>
                    <span class="arrow">60 080 <img src="./img/icon/arrow_forward_ios (1).svg" alt></span>
                </button>
                <button class="popup-button" data-next="Коммерческая">
                    <span>Коммерческая недвижимость</span>
                    <span class="arrow">60 080 <img src="./img/icon/arrow_forward_ios (1).svg" alt></span>
                </button>
            </div>
            <div class="popup-footer">
                <button class="filter-button">Фильтр</button>
            </div>
        `
    },
    'Аренда': {
        header: 'Аренда',
        content: `
            <div class="tabs tabs_mobile tabs_mobile_modal">
                <button class="tab-button" data-type="Купить">Купить</button>
                <button class="tab-button active" data-type="Аренда">Арендовать</button>
            </div>
            <div class="popup-buttons">
                <button class="popup-button" data-next="Квартира">
                    <span>Квартира</span>
                    <span class="arrow">Аренда <img src="./img/icon/arrow_forward_ios (1).svg" alt></span>
                </button>
                <button class="popup-button" data-next="Коммерческая">
                    <span>Коммерческая недвижимость</span>
                    <span class="arrow">Аренда <img src="./img/icon/arrow_forward_ios (1).svg" alt></span>
                </button>
            </div>
           
        `
    },
    'Квартира': {
        header: 'Квартира',
        back: 'Купить',
        content: `
           <div class="board">
                    <div class="ad_info ad_hot" onclick="toggleAdDetails(this)">
                        <div class="ad_card ">
                            <div class="ad_top_line ad_line flex_da">
                                <div class="price flex_da">
                                    6,5 млн
                                    <svg width="15" height="21" viewBox="0 0 15 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M0.966 4.35175C0.322 5.48575 0 6.77375 0 8.21575C0 9.65775 0.322 10.9458 0.966 12.0798C1.624 13.2137 2.513 14.1027 3.633 14.7467C4.767 15.3767 6.034 15.6918 7.434 15.6918C9.086 15.6918 10.521 15.2788 11.739 14.4528C12.971 13.6128 13.832 12.4438 14.322 10.9458H10.941C10.605 11.6458 10.129 12.1777 9.513 12.5417C8.911 12.8918 8.211 13.0668 7.413 13.0668C6.559 13.0668 5.796 12.8708 5.124 12.4788C4.466 12.0728 3.948 11.5057 3.57 10.7778C3.206 10.0357 3.024 9.18175 3.024 8.21575C3.024 7.23575 3.206 6.38175 3.57 5.65375C3.948 4.92575 4.466 4.36575 5.124 3.97375C5.796 3.56775 6.559 3.36475 7.413 3.36475C8.211 3.36475 8.911 3.53975 9.513 3.88975C10.129 4.23975 10.605 4.76475 10.941 5.46475H14.322C13.832 3.98075 12.971 2.81875 11.739 1.97875C10.507 1.13875 9.072 0.71875 7.434 0.71875C6.034 0.71875 4.767 1.04075 3.633 1.68475C2.513 2.31475 1.624 3.20375 0.966 4.35175ZM14.265 17.5658H0.265V20.0658H14.265V17.5658Z"
                                                fill="#007CFF" />
                                        </svg>

                                </div>

                                <div class="rooms">

                                    <span>Комнат:</span> 3
                                </div>
                                <div class="area"><span class="ui">УИ</span> 62
                                    <span>м2</span></div>

                                <div class="status_ad">
                                    Срочно!
                                </div>
                                <div class="ad_geo">
                                    <img src="./img/icon/Location.svg" alt>
                                </div>
                            </div>
                            <div class="ad_center_line ad_line">
                                Продаю квартиру 104 серии в <br> 3 мкр 4 этаж
                                <div class="ad_img">
                                    <img src="./img/icon/image.svg" alt>
                                </div>
                            </div>
                            
                            <div class="ad_details" style="display: none;">
                                <div class="ad_details_content">
                                    <div class="ad_details_flex">
                                        <!-- Галерея фотографий с Fancybox -->

                                        <!-- Основная информация -->
                                        <div class="detail_section">
                                            <div class="detail_item price_item">
                                                <strong>Цена:</strong> 74 000$
                                            </div>
                                            <div class="detail_item contact_item">
                                                <strong>Телефон:</strong>
                                                <a href="tel:0999577792">0(999)57-77-92</a>
                                            </div>
                                            <div class="detail_item">
                                                <strong>Комнат:</strong> 3 (104 серия)
                                            </div>
                                            <div class="detail_item">
                                                <strong>Площадь:</strong> 62 м²
                                            </div>
                                            <div class="detail_item">
                                                <strong>Отопление:</strong> центральное
                                            </div>
                                            <div class="detail_item">
                                                <strong>Этаж:</strong> 4 из 4
                                            </div>
                                            <div class="detail_item">
                                                <strong> Частично с мебелью,
                                                        Евроремонт</strong>
                                            </div>
                                        </div>
                                        <div class="ad_gallery">
                                            <!-- Главное фото (открывается в Fancybox) -->
                                            <a href="./img/example.png" data-fancybox="gallery" data-caption="Главное фото квартиры">
                                                <img src="./img/example.png" alt="Главное фото квартиры" class="gallery_main_img">
                                            </a>

                                            <!-- Миниатюры (скрытые для Fancybox) -->
                                            <div class="thumbnail_container">
                                                <a href="./img/example.png" data-fancybox="gallery" data-caption="Фото квартиры 1" style="display:none;"></a>
                                                <a href="./img/example.png" data-fancybox="gallery" data-caption="Фото квартиры 2" style="display:none;"></a>
                                                <a href="./img/example.png" data-fancybox="gallery" data-caption="Фото квартиры 3" style="display:none;"></a>

                                                <!-- Миниатюры для навигации -->
                                                <img src="./img/example.png" alt="Фото 1" class="gallery_thumb" onclick="document.querySelector('[href=\'./img/example.png\']').click()">
                                                <img src="./img/example.png" alt="Фото 2" class="gallery_thumb" onclick="document.querySelector('[href=\'./img/example.png\']').click()">
                                                <img src="./img/example.png" alt="Фото 3" class="gallery_thumb" onclick="document.querySelector('[href=\'./img/example.png\']').click()">

                                            </div>
                                        </div>
                                    </div>
                                    <!-- Описание -->
                                    <div class="description_section">
                                        Продаётся просторная 3-комнатная квартира 104 серии – 64 м²<br> ???? Южные микрорайоны | 4 этаж | Не угловая | 85 000 $<br> ???? О квартире:
                                        <br> Просторная и светлая, с качественным свежим ремонтом<br> Площадь: 64 м², лоджия 6 м<br> Окна выходят на Юг и Север – хорошее естественное освещение
                                        <br> Большая кладовая – удобно для хранения вещей<br> Пластиковые окна, бронированные двери, натяжные потолки<br> В спальне гардеробная и кондиционер<br> ???? Состояние дома:
                                        <br> Крыша не течёт<br> Чистый подъезд, без посторонних запахов<br> ???? Район и инфраструктура:<br> Экологически чистый и комфортный для жизни
                                        <br> В шаговой доступности: школы, детские сады, ТЦ, супермаркеты, кафе, парки отдыха<br> ✨ Наша уютная квартира ждёт своих новых счастливых владельцев!
                                        <br> ???? Звоните: 0999 577792 Темирлан
                                    </div>

                                    <div class="dgis-map-container" data-lat="42.8679" data-lon="74.6129" data-title="3-комнатная квартира в 3 мкр" data-address="Кыргызстан, Бишкек, 3 микрорайон, дом 15" data-price="74 000$" data-floor="4/4">
                                        <div class="dgis-map" style="width: 100%; height: 300px;"></div>

                                    </div>
                                    <!-- Контактная информация -->
                                    <div class="ad_contacts_section">
                                        <div class="owner_info">
                                            <!-- Кнопка "Написать сообщение" -->
                                            <button class="message_button">
                                                    <svg width="29" height="27"
                                                        viewBox="0 0 29 27"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M19.0957 13.9314H19.1062"
                                                            stroke="white"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round" />
                                                        <path
                                                            d="M14.4199 13.9314H14.4304"
                                                            stroke="white"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round" />
                                                        <path
                                                            d="M9.74215 13.9314H9.75265"
                                                            stroke="white"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round" />
                                                        <path
                                                            fill-rule="evenodd"
                                                            clip-rule="evenodd"
                                                            d="M22.7502 20.8842C19.1859 24.0765 13.9052 24.7662 9.58468 22.9774C8.94686 22.7475 4.81864 23.771 3.92288 22.9701C3.02713 22.168 4.17144 18.4718 3.91468 17.9007C1.91564 14.0334 2.68711 9.30416 6.25256 6.11286C10.804 2.0366 18.1987 2.0366 22.7502 6.11286C27.3111 10.1954 27.3017 16.809 22.7502 20.8842Z"
                                                            stroke="white"
                                                            stroke-width="1.5"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round" />
                                                    </svg>

                                                    Написать сообщение
                                                </button>

                                            <span class="owner_label">Хозяин
                                                    недвижимости</span>
                                            <span class="phone_number">Телефон:
                                                    <a
                                                        href="tel:0999577792">0(999)57-77-92</a></span>
                                        </div>

                                        <!-- Даты создания и продления -->
                                        <div class="dates_info">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M3.66602 17.0343C3.66602 7.75961 6.75802 4.66895 16.0313 4.66895C25.306 4.66895 28.398 7.75961 28.398 17.0343C28.398 26.3089 25.306 29.3996 16.0313 29.3996C6.75802 29.3996 3.66602 26.3089 3.66602 17.0343Z"
                                                        stroke="black"
                                                        stroke-width="1.5"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path
                                                        d="M4.0332 12.4318H28.0439"
                                                        stroke="black"
                                                        stroke-width="1.5"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path
                                                        d="M21.9048 17.6813H21.9168"
                                                        stroke="black"
                                                        stroke-width="1.5"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path
                                                        d="M16.0376 17.6813H16.0496"
                                                        stroke="black"
                                                        stroke-width="1.5"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path
                                                        d="M10.1607 17.6813H10.1727"
                                                        stroke="black"
                                                        stroke-width="1.5"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path
                                                        d="M21.9048 22.8171H21.9168"
                                                        stroke="black"
                                                        stroke-width="1.5"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path
                                                        d="M16.0376 22.8171H16.0496"
                                                        stroke="black"
                                                        stroke-width="1.5"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path
                                                        d="M10.1607 22.8171H10.1727"
                                                        stroke="black"
                                                        stroke-width="1.5"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path
                                                        d="M21.3776 2.7334V7.08273"
                                                        stroke="black"
                                                        stroke-width="1.5"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path
                                                        d="M10.6999 2.7334V7.08273"
                                                        stroke="black"
                                                        stroke-width="1.5"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg>

                                            <span class="renewal_date">Дата
                                                    продления: 27.02.2025</span>
                                            <span class="creation_date">Дата
                                                    создания: 25.02.2025</span>
                                        </div>

                                        <!-- Ссылка на объявление -->
                                        <div class="ad_link">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M15.3234 16.5843C15.3234 16.5843 -0.645445 13.2808 4.90382 10.0774C9.58669 7.37436 25.7253 2.72696 27.98 3.92776C29.1808 6.18242 24.5334 22.321 21.8303 27.0039C18.6269 32.5532 15.3234 16.5843 15.3234 16.5843Z"
                                                        stroke="black"
                                                        stroke-width="1.5"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path
                                                        d="M15.3242 16.5843L27.9808 3.92773"
                                                        stroke="black"
                                                        stroke-width="1.5"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg>

                                            <span>Ссылка на это
                                                    объявление:</span>
                                            <a href="https://stroka.kg/?page=topic-view&topic_id=1075129" target="_blank">
                                                    https://stroka.kg/?page=topic-view&topic_id=1075129
                                                </a>
                                        </div>

                                        <!-- Кнопки действий -->
                                        <div class="action_buttons">
                                            <button class="action_button complain_button">
                                                    <svg width="27" height="28"
                                                        viewBox="0 0 27 28"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M13.4993 20.6665C13.8771 20.6665 14.1938 20.5387 14.4493 20.2832C14.7049 20.0276 14.8327 19.7109 14.8327 19.3332C14.8327 18.9554 14.7049 18.6387 14.4493 18.3832C14.1938 18.1276 13.8771 17.9998 13.4993 17.9998C13.1216 17.9998 12.8049 18.1276 12.5493 18.3832C12.2938 18.6387 12.166 18.9554 12.166 19.3332C12.166 19.7109 12.2938 20.0276 12.5493 20.2832C12.8049 20.5387 13.1216 20.6665 13.4993 20.6665ZM12.166 15.3332H14.8327V7.33317H12.166V15.3332ZM13.4993 27.3332C11.6549 27.3332 9.92157 26.9832 8.29935 26.2832C6.67713 25.5832 5.26602 24.6332 4.06602 23.4332C2.86602 22.2332 1.91602 20.8221 1.21602 19.1998C0.516016 17.5776 0.166016 15.8443 0.166016 13.9998C0.166016 12.1554 0.516016 10.4221 1.21602 8.79984C1.91602 7.17761 2.86602 5.7665 4.06602 4.5665C5.26602 3.3665 6.67713 2.4165 8.29935 1.7165C9.92157 1.0165 11.6549 0.666504 13.4993 0.666504C15.3438 0.666504 17.0771 1.0165 18.6993 1.7165C20.3216 2.4165 21.7327 3.3665 22.9327 4.5665C24.1327 5.7665 25.0827 7.17761 25.7827 8.79984C26.4827 10.4221 26.8327 12.1554 26.8327 13.9998C26.8327 15.8443 26.4827 17.5776 25.7827 19.1998C25.0827 20.8221 24.1327 22.2332 22.9327 23.4332C21.7327 24.6332 20.3216 25.5832 18.6993 26.2832C17.0771 26.9832 15.3438 27.3332 13.4993 27.3332ZM13.4993 24.6665C16.4771 24.6665 18.9993 23.6332 21.066 21.5665C23.1327 19.4998 24.166 16.9776 24.166 13.9998C24.166 11.0221 23.1327 8.49984 21.066 6.43317C18.9993 4.3665 16.4771 3.33317 13.4993 3.33317C10.5216 3.33317 7.99935 4.3665 5.93268 6.43317C3.86602 8.49984 2.83268 11.0221 2.83268 13.9998C2.83268 16.9776 3.86602 19.4998 5.93268 21.5665C7.99935 23.6332 10.5216 24.6665 13.4993 24.6665Z"
                                                            fill="#FF3535" />
                                                    </svg>
                                                    Пожаловаться</button>
                                            <button class="action_button note_button"><svg
                                                        width="21" height="22"
                                                        viewBox="0 0 21 22"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M0.5 22V18H20.5V22H0.5ZM4.5 14H5.9L13.7 6.225L12.275 4.8L4.5 12.6V14ZM2.5 16V11.75L13.7 0.575C13.8833 0.391667 14.0958 0.25 14.3375 0.15C14.5792 0.05 14.8333 0 15.1 0C15.3667 0 15.625 0.05 15.875 0.15C16.125 0.25 16.35 0.4 16.55 0.6L17.925 2C18.125 2.18333 18.2708 2.4 18.3625 2.65C18.4542 2.9 18.5 3.15833 18.5 3.425C18.5 3.675 18.4542 3.92083 18.3625 4.1625C18.2708 4.40417 18.125 4.625 17.925 4.825L6.75 16H2.5Z"
                                                            fill="#434343" />
                                                    </svg>
                                                    Оставить заметку</button>
                                            <button class="action_button other_button">Другое</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="ad_bottom_line flex_da ad_line">
                                <div class="ad_date">9 февраля</div>
                                <div class="view_info flex_da">
                                    <img src="./img/icon/visibility.svg" alt> 400
                                </div>
                                <div class="ad_function">
                                    <button>
                                            <svg width="28" height="29"
                                                viewBox="0 0 28 29" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <mask id="mask0_1518_18484"
                                                    style="mask-type:alpha"
                                                    maskUnits="userSpaceOnUse"
                                                    x="0" y="0" width="28"
                                                    height="29">
                                                    <rect y="0.395508"
                                                        width="28" height="28"
                                                        fill="#D9D9D9" />
                                                </mask>
                                                <g
                                                    mask="url(#mask0_1518_18484)">
                                                    <path
                                                        d="M2.33337 28.3952V23.7285H25.6667V28.3952H2.33337ZM7.00004 19.0618H8.63337L17.7334 9.99102L16.0709 8.32852L7.00004 17.4285V19.0618ZM4.66671 21.3952V16.4368L17.7334 3.39935C17.9473 3.18546 18.1952 3.02018 18.4771 2.90352C18.7591 2.78685 19.0556 2.72852 19.3667 2.72852C19.6778 2.72852 19.9792 2.78685 20.2709 2.90352C20.5625 3.02018 20.825 3.19518 21.0584 3.42852L22.6625 5.06185C22.8959 5.27574 23.066 5.52852 23.173 5.82018C23.2799 6.11185 23.3334 6.41324 23.3334 6.72435C23.3334 7.01602 23.2799 7.30282 23.173 7.58477C23.066 7.86671 22.8959 8.12435 22.6625 8.35768L9.62504 21.3952H4.66671Z"
                                                        fill="#B4B4B4" />
                                                </g>
                                            </svg>

                                        </button>
                                    <button>
                                            <svg width="28" height="29"
                                                viewBox="0 0 28 29" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M3.4089 14.9159C2.15707 11.0076 3.62124 6.14844 7.7244 4.82778C9.88274 4.13128 12.5462 4.71228 14.0594 6.79944C15.4862 4.63528 18.2267 4.13594 20.3827 4.82778C24.4847 6.14844 25.9571 11.0076 24.7064 14.9159C22.7581 21.1109 15.9599 24.3379 14.0594 24.3379C12.1601 24.3379 5.42257 21.1833 3.4089 14.9159Z"
                                                    stroke="#B4B4B4"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path
                                                    d="M18.42 9.21973C19.8282 9.36439 20.709 10.4809 20.6565 12.0454"
                                                    stroke="#B4B4B4"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>

                                        </button>
                                </div>
                            </div>
                            <div class="ad_fon">
                                <img src="./img/icon/mode_heat.svg" alt>
                            </div>
                            <div class="ad_widget">
                                <img src="./img/hot_widget.svg" alt>
                            </div>
                        </div>

                    </div>
                </div>
        `
    },
    // Добавьте другие варианты по аналогии
};

// История навигации
let navigationHistory = [];

// Открытие попапа
function openPopup(type) {
    const popup = document.querySelector('.fullscreen-popup');
    const title = popup.querySelector('.popup-title');
    const content = popup.querySelector('.popup-content');
    const backButton = popup.querySelector('.back-button');

    if (popupContents[type]) {
        // Добавляем в историю
        navigationHistory.push(type);

        // Устанавливаем контент
        title.textContent = popupContents[type].header;
        content.innerHTML = popupContents[type].content;

        // Настраиваем кнопку "Назад"
        if (popupContents[type].back) {
            backButton.style.display = 'block';
            backButton.onclick = () => {
                const prevType = popupContents[type].back;
                openPopup(prevType);
                navigationHistory = navigationHistory.slice(0, -2);
            };
        } else {
            backButton.style.display = 'none';
        }

        popup.style.display = 'flex';

        // Добавляем обработчики для новых кнопок
        setupPopupButtons();
    }
}

// Настройка обработчиков кнопок в попапе
function setupPopupButtons() {
    // Обработчики для кнопок перехода
    document.querySelectorAll('.popup-button').forEach(button => {
        button.addEventListener('click', (e) => {
            const nextPopup = button.dataset.next;
            if (nextPopup) {
                openPopup(nextPopup);
            }
        });
    });

    // Обработчики для табов
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', (e) => {
            const type = button.dataset.type;
            openPopup(type);
            navigationHistory = navigationHistory.slice(0, -1);
        });
    });

    // Обработчик для кнопки фильтра
    const filterButton = document.querySelector('.filter-button');
    if (filterButton) {
        filterButton.addEventListener('click', () => {
            // Здесь будет открытие модального окна с фильтрами
            console.log('Открыть фильтры');
        });
    }
}

// Инициализация
document.querySelectorAll('.mobile_filters button').forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = button.querySelector('span:first-child').textContent.trim();
        navigationHistory = []; // Сбрасываем историю
        openPopup(buttonText);
    });
});

// Закрытие попапа
document.querySelector('.close-popup').addEventListener('click', () => {
    document.querySelector('.fullscreen-popup').style.display = 'none';
    navigationHistory = [];
});