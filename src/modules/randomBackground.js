// модуль рандомного фона

import Module from "../core/module";
import randomFunc from "../utils";

export default class RandomBackground extends Module {
    trigger() {
        return this.createItemElement(); // Метод запускает работу модуля
    }
    createItemElement() {
        let menuItemElement = document.createElement("li"); // Метод создает элемент меню и сразу вешает на него 
        menuItemElement.className = "menu-item";            // обработчик событий
        menuItemElement.dataset.type = this.type;
        menuItemElement.textContent = this.text;
        menuItemElement.addEventListener("click", () => {
            this.randomBackground();                     // при клике запускает основной метод модуля, который что-то делает
        });
        return menuItemElement;
    }
    randomBackground() {
        document.body.style.backgroundImage = `url(../assets/img/image_${randomFunc(1,9)}.jpg)`;
        setTimeout(() => {
            document.body.style.backgroundImage = "";
        }, 5000);
    } 
}