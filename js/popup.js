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

document.addEventListener('DOMContentLoaded', function() {
    // Обработчик для радио-кнопок
    const otherOption = document.querySelector('input[value="other"]');
    const otherContainer = document.querySelector('.other-complaint-container');

    document.querySelectorAll('input[name="complaint"]').forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === 'other') {
                otherContainer.style.display = 'block';
            } else {
                otherContainer.style.display = 'none';
            }
        });
    });

    // Обработчик для кнопки отправки жалобы
    document.querySelector('.submit-complaint-btn').addEventListener('click', function() {
        const selectedComplaint = document.querySelector('input[name="complaint"]:checked');
        const otherText = document.querySelector('.other-complaint-input').value;

        if (!selectedComplaint) {
            alert('Пожалуйста, выберите причину жалобы');
            return;
        }

        if (selectedComplaint.value === 'other' && !otherText.trim()) {
            alert('Пожалуйста, опишите проблему');
            return;
        }

        // Здесь можно добавить отправку жалобы на сервер
        alert('Жалоба отправлена! Спасибо за вашу помощь.');
        document.getElementById('complaint-popup').style.display = 'none';
        document.body.classList.remove('popup-open');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Обработчик для попапа заметки - показ/скрытие кнопки Удалить
    const noteTextarea = document.querySelector('.note-textarea');
    const deleteBtn = document.querySelector('.delete-btn');

    noteTextarea.addEventListener('input', function() {
        if (this.value.trim().length > 0) {
            deleteBtn.style.display = 'block';
        } else {
            deleteBtn.style.display = 'none';
        }
    });

    // Обработчик для кнопки Удалить
    deleteBtn.addEventListener('click', function() {
        noteTextarea.value = '';
        this.style.display = 'none';
    });

    // Обработчики для кнопок открытия попапов (пример)
    document.querySelectorAll('.open-save-search').forEach(btn => {
        btn.addEventListener('click', function() {
            document.getElementById('save-search-popup').style.display = 'flex';
        });
    });

    document.querySelectorAll('.open-confirm-exit').forEach(btn => {
        btn.addEventListener('click', function() {
            document.getElementById('confirm-exit-popup').style.display = 'flex';
        });
    });

    document.querySelectorAll('.open-note').forEach(btn => {
        btn.addEventListener('click', function() {
            document.getElementById('note-popup').style.display = 'flex';
        });
    });

    // Закрытие попапов по клику на крестик или оверлей
    document.querySelectorAll('.popup-overlay').forEach(popup => {
        popup.addEventListener('click', function(e) {
            if (e.target === this || e.target.classList.contains('popup-close')) {
                this.style.display = 'none';
            }
        });
    });

    // Обработчики для кнопок внутри попапов
    document.querySelector('.popup-btn.secondary').addEventListener('click', function() {
        this.closest('.popup-overlay').style.display = 'none';
    });
});
