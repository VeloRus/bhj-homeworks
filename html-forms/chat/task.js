const chatWidget = document.querySelector('.chat-widget');
chatWidget.onclick = function() {
    chatWidget.classList.add('chat-widget_active');
};

const chatsWidgetInput = document.querySelector('.chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');

const answers = [
   'Добрый день!',
   'Никого нет дома.',
   'Пока!',
   'У меня болит голова.',
   'Отговорки помидорки.',
   'Нет времени'
   ];
    

chatsWidgetInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && chatsWidgetInput.value) {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        if (hours < 10) {
            hours = `0${hours}`;
          };
          if (minutes < 10) {
            minutes = `0${minutes}`;
          };
        const currentTime = `${hours}:${minutes}`;

        messages.innerHTML += `
        <div class="message message_client">
        <div class="message__time">${currentTime}</div>
        <div class="message__text">${chatsWidgetInput.value}
        </div>
        </div>`;

        chatsWidgetInput.value = '';

        const randomIndex = Math.round(Math.random() * (answers.length - 1));
        
        messages.innerHTML += `
        <div class="message">
        <div class="message__time">${currentTime}</div>
        <div class="message__text">${answers[randomIndex]}</div>
        </div>`;
    };

    messages.scrollIntoView(false);
});
    
    