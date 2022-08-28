// Модуль кастомного сообщения

import Module from "../core/module";

export default class CustomMessage extends Module {
    trigger() {
        return this.createItemElement(); // Метод запускает работу модуля
    }
    createItemElement() {
        let menuItemElement = document.createElement("li"); // Метод создает элемент меню и сразу вешает на него 
        menuItemElement.className = "menu-item";            // обработчик событий
        menuItemElement.dataset.type = this.type;
        menuItemElement.textContent = this.text;
        menuItemElement.addEventListener("click",()=> {
            this.createMessageElement();                    // При событии вызывается метод генерации сообщения
        });
        return menuItemElement;
    }
    createMessageElement() {
        let messageElement = document.createElement("h1"); // Метод создает элеиент с сообщением
        messageElement.className = "custom-message";
        messageElement.textContent = "Находчивость - это за неимением горничной облапать дворника!";
        document.body.append(messageElement);
        setTimeout(() => {
            messageElement.style.opacity = 0;
        }, 5000);                                           // Сообщение висит 5 секунд
    }

}

