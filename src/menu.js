// Реализуемый класс меню

import {Menu} from './core/menu'

export default class ContextMenu extends Menu {
    changeDefaultToCustomMenu() {
        this.el.addEventListener("contextmenu", (event) => { 
            event.preventDefault();                 //Отключение стандартного контекстного меню
            this.createCustomContextMenu(event);    //Открытие кастомного контекстного меню
        })
    }
    createCustomContextMenu(event) {
        let menuElement = document.querySelector("#menu"); 
        menuElement.style.top = `${event.clientY}px`;       // Позиционирование кастомного меню
        menuElement.style.left = `${event.clientX}px`;      // по вертикали и горизонтали относительно краев экрана
        this.open(menuElement);
    }
    open(element) {
        element.classList.add("open");                      // добавление класса кастомному меню
    }
    close() {
        let menuElement = document.querySelector("#menu");  // Дополнение метода родительского класса
        menuElement.classList.remove("open");               // для большей читаемости действий кода
    }
    add(object) {
        let menuElement = document.querySelector("#menu");
        menuElement.append(object.trigger());               // Принимает инстанс класса, применяет метод trigger
                                                            // этого класса и добавляет элемент в меню
    }
}