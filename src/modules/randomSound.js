// Модуль случайного звука

import Module from "../core/module";
import randomFunc from "../utils";

export default class RandomSound extends Module {
  trigger() {
    return this.createItemElement(); // Метод запускает работу модуля
  }
  createItemElement() {
    let menuItemElement = document.createElement("li"); // Метод создает элемент меню и сразу вешает на него 
    menuItemElement.className = "menu-item";            // обработчик событий
    menuItemElement.dataset.type = this.type;
    menuItemElement.textContent = this.text;
    menuItemElement.addEventListener("click", () => {
      this.getRandomSound();                     // при клике запускает основной метод модуля, который что-то делает
    });
    return menuItemElement;
  }
  getRandomSound() {
    let audio = new Audio();
    audio.src = `../assets/sound/Sound_${randomFunc(1,3)}.mp3`;
    audio.play();
  }
}      