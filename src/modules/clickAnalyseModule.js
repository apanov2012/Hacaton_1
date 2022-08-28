// модуль анализа кликов

import Module from "../core/module";

export default class ClickAnalyse extends Module {
    trigger() {
        return this.createItemElement(); // Метод запускает работу модуля
    }
    createItemElement() {
        let menuItemElement = document.createElement("li"); // Метод создает элемент меню и сразу вешает на него 
        menuItemElement.className = "menu-item";            // обработчик событий
        menuItemElement.dataset.type = this.type;
        menuItemElement.textContent = this.text;
        menuItemElement.addEventListener("click", () => {
            this.clickAnalyse();             // при клике запускает основной метод модуля, который что-то делает
        });
        return menuItemElement;
    }
    clickAnalyse() {
        
        let oneClick = [];
        let doubleClick = [];
        window.addEventListener("click", () => { // при одиночном клике добавляется элемент в массив oneClick
            oneClick.push(1);
        })
        window.addEventListener("dblclick", () => { // при двойном клике добавляется элемент в массив doubleClick
            doubleClick.push(1);
        })
        setTimeout(() => {
            //this.deleteElement(); // удаляет последнюю цифру обратного отсчета
            let sumOfOneClick = oneClick.length -(doubleClick.length*2)-1;// количество одиночных кликов получается из разницы между
            let sumOfDbClick = doubleClick.length; //количеством одиночных и двойных кликов и еще одного клика при запуске модуля
            this.renderResultsOfAnalyse(sumOfOneClick, sumOfDbClick); //который также учитывается
            setTimeout(() => {
                this.deleteElement(); //удаляет отображенные результаты анализа кликов
            }, 5800);
        }, 6850)  
        this.createTimer(); // запускает отображение обратного отсчета
    }
    renderResultsOfAnalyse(oneclickSum,doubleClickSum) {
        let result = `Вы совершили ${oneclickSum} одиночных кликов и ${doubleClickSum} двойных кликов`;
        this.renderElement(result,"resultAnalyse");
    }

    createTimer(){ // метод отображает обратный отсчет
        
        let i = 3;
        let createTime = setInterval(() => { //создает цифру
            if (document.querySelector("h1")){
                this.deleteElement();
            }
            this.renderElement(i);
            i--;
        }, 1000);
        let deleteTime = setInterval(() => { // удаляет цифру
            this.deleteElement(i);
        }, 1200);
        setTimeout(() => {
            clearInterval(createTime); // останавливает рендер цифр
        }, 4100);
        setTimeout(() => {
            clearInterval(deleteTime); // останавливает удаление цифр
        }, 4820);
    }
    
    renderElement(value,elementClass = "timer") { // метод создает элемент с цифрой обратного отсчета либо с результатом
        let timer = document.createElement("h1");
        timer.className = elementClass;
        timer.textContent = value;
        document.body.append(timer);
    }
    deleteElement(){ // удаляет последнюю цифру обратного отсчета
        let element = document.querySelector("h1");
        element.remove();
    }
                                                   
}