// общий шаблон для новых модулей

import Module from "../core/module";

export default class ModuleName extends Module {
    trigger() {
        return this.createItemElement(); // Метод запускает работу модуля
    }
    createItemElement() {
        let menuItemElement = document.createElement("li"); // Метод создает элемент меню и сразу вешает на него 
        menuItemElement.className = "menu-item";            // обработчик событий
        menuItemElement.dataset.type = this.type;
        menuItemElement.textContent = this.text;
        menuItemElement.addEventListener("click", () => {
            this.methodDoSomething();                     // при клике запускает основной метод модуля, который что-то делает
        });
        return menuItemElement;
    }
    methodDoSomething() {
       // ...                                           // Тут происходит основная логика работы модуля (изменение фона,песни,пляски и 
    }                                                   // все такое прочее)
}