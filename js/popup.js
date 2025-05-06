document.addEventListener('DOMContentLoaded', function() {
    const selects = document.querySelectorAll('.custom-select');

    selects.forEach(select => {
        const selected = select.querySelector('.select-selected');
        const items = select.querySelector('.select-items');
        const options = items.querySelectorAll('div');

        // Открытие/закрытие списка
        selected.addEventListener('click', function(e) {
            e.stopPropagation();

            // Закрываем все открытые списки
            document.querySelectorAll('.select-items.show').forEach(openItem => {
                if (openItem !== items) {
                    openItem.classList.remove('show');
                    openItem.previousElementSibling.classList.remove('select-arrow-active');
                }
            });

            // Переключаем текущий список
            items.classList.toggle('show');
            selected.classList.toggle('select-arrow-active');
        });

        // Выбор элемента из списка
        options.forEach(option => {
            option.addEventListener('click', function(e) {
                e.stopPropagation();

                // Убираем выделение у всех элементов
                options.forEach(opt => opt.classList.remove('same-as-selected'));

                // Выделяем текущий элемент
                this.classList.add('same-as-selected');

                // Устанавливаем выбранное значение
                selected.textContent = this.textContent;

                // Закрываем список
                items.classList.remove('show');
                selected.classList.remove('select-arrow-active');
            });
        });
    });

    // Закрытие списка при клике вне его
    document.addEventListener('click', function() {
        document.querySelectorAll('.select-items.show').forEach(items => {
            items.classList.remove('show');
            items.previousElementSibling.classList.remove('select-arrow-active');
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Обработчики для кнопок открытия попапов
    document.querySelectorAll('.open-popup-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const popupId = this.getAttribute('data-popup');
            const popup = document.getElementById(popupId);

            if (popup) {
                popup.style.display = 'flex';
                document.body.classList.add('popup-open');
            }
        });
    });

    // Обработчики для закрытия попапов
    document.querySelectorAll('.popup-overlay').forEach(popup => {
        // Закрытие по клику на оверлей
        popup.addEventListener('click', function(e) {
            if (e.target === this) {
                closePopup(this);
            }
        });

        // Закрытие по клику на крестик
        const closeBtn = popup.querySelector('.popup-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                closePopup(popup);
            });
        }
    });

    function closePopup(popup) {
        popup.style.display = 'none';
        document.body.classList.remove('popup-open');
    }

    // Закрытие по ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.popup-overlay').forEach(popup => {
                if (popup.style.display === 'flex') {
                    closePopup(popup);
                }
            });
        }
    });
});