 // Данные чатов
 const chats = [{
         id: 1,
         name: "Олег",
         avatar: "https://randomuser.me/api/portraits/men/1.jpg",
         lastMessage: "Привет",
         time: "14.01.25",
         unread: false,
         ad: {
             title: "Продаю квартиру 104 серии в 3 мкр 4/4 этаж",
             details: "Комнат: 3, 62м²",
             price: "15 мил сом"
         },
         messages: [{
                 text: "Здравствуйте, квартира ещё актуальна?",
                 time: "10:30",
                 sent: true,
                 read: true
             },
             {
                 text: "Да, квартира ещё в продаже",
                 time: "10:32",
                 sent: false,
                 read: true
             },
             {
                 text: "Можно посмотреть сегодня после 18:00?",
                 time: "10:33",
                 sent: true,
                 read: true
             },
             {
                 text: "Да, приходите по адресу...",
                 time: "10:35",
                 sent: false,
                 read: true
             },
             {
                 text: "Привет",
                 time: "14.01.25",
                 sent: false,
                 read: true
             }
         ]
     },
     {
         id: 2,
         name: "Анна",
         avatar: "https://randomuser.me/api/portraits/women/2.jpg",
         lastMessage: "Отправила вам документы",
         time: "1 час назад",
         unread: true,
         ad: {
             title: "Сдам 2-комнатную квартиру в центре",
             details: "Комнат: 2, 45м², 5/9 этаж",
             price: "25 000 сом/мес"
         },
         messages: [{
                 text: "Добрый день! Интересует ваша квартира",
                 time: "вчера",
                 sent: true,
                 read: true
             },
             {
                 text: "Здравствуйте! Какие у вас условия?",
                 time: "вчера",
                 sent: false,
                 read: true
             },
             {
                 text: "Отправила вам документы",
                 time: "1 час назад",
                 sent: false,
                 read: false
             }
         ]
     },
     {
         id: 3,
         name: "Иван Петрович",
         avatar: "https://randomuser.me/api/portraits/men/3.jpg",
         lastMessage: "Фото прилагаю",
         time: "5 мин назад",
         unread: false,
         ad: {
             title: "Продажа дома в пригороде",
             details: "Площадь: 120м², участок 6 соток",
             price: "35 мил сом"
         },
         messages: [{
                 text: "Интересует ваш дом, можно подробнее?",
                 time: "2 часа назад",
                 sent: true,
                 read: true
             },
             {
                 text: "Конечно, что вас интересует?",
                 time: "1 час назад",
                 sent: false,
                 read: true
             },
             {
                 text: "Какое состояние коммуникаций?",
                 time: "45 мин назад",
                 sent: true,
                 read: true
             },
             {
                 text: "Все коммуникации новые, сделаны 2 года назад",
                 time: "30 мин назад",
                 sent: false,
                 read: true
             },
             {
                 text: "Фото прилагаю",
                 time: "5 мин назад",
                 sent: false,
                 read: true,
                 image: "https://via.placeholder.com/200x150?text=Фото+дома"
             }
         ]
     }
 ];
 // Функция для прокрутки вниз
 function scrollToBottom() {
     const messagesContainer = document.getElementById('messages');
     if (messagesContainer) {
         messagesContainer.scrollTop = messagesContainer.scrollHeight;
     }
 }

 // Модифицируйте функцию openChat
 function openChat(chatId) {
     currentChatId = chatId;
     const chat = chats.find(c => c.id === chatId);

     // ... остальной код функции ...

     // Прокручиваем вниз после рендеринга сообщений
     setTimeout(scrollToBottom, 0);
 }

 // Модифицируйте функцию sendMessage
 function sendMessage() {
     const input = document.getElementById('messageInput');
     const text = input.value.trim();

     if (text) {
         const chat = chats.find(c => c.id === currentChatId);
         const now = new Date();
         const timeString = formatTime(now);

         const newMessage = {
             text: text,
             time: timeString,
             sent: true,
             read: false
         };

         chat.messages.push(newMessage);
         chat.lastMessage = text.length > 20 ? text.substring(0, 20) + '...' : text;
         chat.time = 'только что';

         openChat(currentChatId);
         input.value = '';

         // Прокручиваем вниз после добавления сообщения
         scrollToBottom();

         // ... остальной код функции ...
     }
 }

 // Также добавьте вызов scrollToBottom в обработчик ответа
 setTimeout(() => {
     const replyMessage = {
         text: getRandomReply(),
         time: formatTime(new Date()),
         sent: false,
         read: true
     };

     chat.messages.push(replyMessage);
     chat.lastMessage = replyMessage.text.length > 20 ? replyMessage.text.substring(0, 20) + '...' : replyMessage.text;
     chat.time = '1 мин назад';

     openChat(currentChatId);
     scrollToBottom(); // Добавьте это
 }, 1000 + Math.random() * 3000);
 let currentChatId = null;

 // Инициализация чатов
 function initChats() {
     const chatList = document.getElementById('chatList');
     chatList.innerHTML = '';

     chats.forEach(chat => {
         const chatItem = document.createElement('div');
         chatItem.className = `chat-item ${chat.unread ? 'unread' : ''}`;
         chatItem.dataset.id = chat.id;

         chatItem.innerHTML = `
                    <div class="chat-avatar">
                        <img src="${chat.avatar}" alt="${chat.name}">
                    </div>
                    <div class="chat-info">
                        <div class="chat-name">${chat.name}</div>
                        <div class="chat-preview">${chat.lastMessage}</div>
                    </div>
                    <div class="chat-time">${chat.time}</div>
                `;

         chatItem.addEventListener('click', () => openChat(chat.id));
         chatList.appendChild(chatItem);
     });
 }

 // Открытие чата
 function openChat(chatId) {
     currentChatId = chatId;
     const chat = chats.find(c => c.id === chatId);

     // Обновляем список чатов (помечаем как прочитанное)
     chat.unread = false;
     initChats();

     // Помечаем текущий чат как активный
     document.querySelectorAll('.chat-item').forEach(item => {
         item.classList.remove('active');
         if (parseInt(item.dataset.id) === chatId) {
             item.classList.add('active');
         }
     });

     // Отображаем чат
     const chatContent = document.getElementById('chatContent');
     chatContent.innerHTML = `
                <div class="chat-header">
                    <div class="chat-avatar">
                        <img src="${chat.avatar}" alt="${chat.name}">
                    </div>
                    <div class="chat-name">${chat.name}</div>
                </div>
                <div class="ad-info">
                    <div class="ad-title">${chat.ad.title}</div>
                    <div class="ad-details">${chat.ad.details}</div>
                    <div class="ad-price">${chat.ad.price}</div>
                </div>
                <div class="messages" id="messages">
                    ${renderMessages(chat.messages)}
                </div>
                <div class="message-input">
                    <button class="attachment-btn" id="attachBtn">📎</button>
                    <textarea id="messageInput" placeholder="Введите текст"></textarea>
                    <button id="sendBtn">➤</button>
                    <input type="file" id="fileInput" style="display: none;">
                </div>
            `;

     // Прокручиваем вниз
     const messagesContainer = document.getElementById('messages');
     messagesContainer.scrollTop = messagesContainer.scrollHeight;

     // Назначаем обработчики событий
     document.getElementById('sendBtn').addEventListener('click', sendMessage);
     document.getElementById('messageInput').addEventListener('keypress', (e) => {
         if (e.key === 'Enter' && !e.shiftKey) {
             e.preventDefault();
             sendMessage();
         }
     });

     document.getElementById('attachBtn').addEventListener('click', () => {
         document.getElementById('fileInput').click();
     });

     document.getElementById('fileInput').addEventListener('change', handleFileUpload);
 }

 // Рендер сообщений
 function renderMessages(messages) {
     return messages.map(msg => `
                <div class="message ${msg.sent ? 'sent' : 'received'}">
                    <div class="message-content">
                        ${msg.text}
                        ${msg.image ? `<img src="${msg.image}" class="message-image">` : ''}
                    </div>
                    <div class="message-time">
                        ${msg.time}
                        ${msg.sent ? `<span class="message-status">${msg.read ? '✓✓' : '✓'}</span>` : ''}
                    </div>
                </div>
            `).join('');
        }

        // Отправка сообщения
        function sendMessage() {
            const input = document.getElementById('messageInput');
            const text = input.value.trim();
            
            if (text) {
                const chat = chats.find(c => c.id === currentChatId);
                const now = new Date();
                const timeString = formatTime(now);
                
                const newMessage = {
                    text: text,
                    time: timeString,
                    sent: true,
                    read: false
                };
                
                chat.messages.push(newMessage);
                chat.lastMessage = text.length > 20 ? text.substring(0, 20) + '...' : text;
                chat.time = 'только что';
                
                openChat(currentChatId);
                input.value = '';
                
                // Имитация ответа
                setTimeout(() => {
                    const replyMessage = {
                        text: getRandomReply(),
                        time: formatTime(new Date()),
                        sent: false,
                        read: true
                    };
                    
                    chat.messages.push(replyMessage);
                    chat.lastMessage = replyMessage.text.length > 20 ? replyMessage.text.substring(0, 20) + '...' : replyMessage.text;
                    chat.time = '1 мин назад';
                    
                    openChat(currentChatId);
                }, 1000 + Math.random() * 3000);
            }
        }

        // Загрузка файла
        function handleFileUpload(e) {
            const file = e.target.files[0];
            if (!file) return;
            
            // В реальном приложении здесь была бы загрузка на сервер
            // Для демо используем заглушку
            const chat = chats.find(c => c.id === currentChatId);
            const now = new Date();
            const timeString = formatTime(now);
            
            const newMessage = {
                text: 'Фото',
                time: timeString,
                sent: true,
                read: false,
                image: URL.createObjectURL(file)
            };
            
            chat.messages.push(newMessage);
            chat.lastMessage = 'Фото';
            chat.time = 'только что';
            
            openChat(currentChatId);
            e.target.value = '';
        }

        // Форматирование времени
        function formatTime(date) {
            const now = new Date();
            const diff = now - date;
            const minutes = Math.floor(diff / (1000 * 60));
            
            if (minutes < 1) return 'только что';
            if (minutes < 5) return '1 мин назад';
            if (minutes < 10) return '5 мин назад';
            if (minutes < 30) return '10 мин назад';
            if (minutes < 60) return '30 мин назад';
            if (minutes < 120) return '1 час назад';
            
            const hours = date.getHours();
            const mins = date.getMinutes();
            return `${hours}:${mins < 10 ? '0' + mins : mins}`;
        }

        // Случайные ответы
        function getRandomReply() {
            const replies = [
                "Да, конечно",
                "Можете приехать посмотреть",
                "Отправлю вам подробности",
                "Какие у вас вопросы?",
                "Цена договорная",
                "Есть ещё фото, отправить?",
                "Когда вам удобно приехать?",
                "Рассматриваете ли вы обмен?"
            ];
            return replies[Math.floor(Math.random() * replies.length)];
        }

        // Инициализация при загрузке
        document.addEventListener('DOMContentLoaded', () => {
            initChats();
            
            // Обработчики для вкладок
            document.querySelectorAll('.tab').forEach(tab => {
                tab.addEventListener('click', () => {
                    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
                });
            });
        });