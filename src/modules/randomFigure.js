//модуль рандомной фигуры

import Module from "../core/module";
import { GetRandomColor, GetRandomIndexArr } from "../utils";
import { arrFigure } from "../../constants/constants";
import { GetRandom } from "../utils";


export default class RandomFigure extends Module {
    trigger() {
        return this.createItemElement(); // Метод запускает работу модуля
    }
    createItemElement() {
        let menuItemElement = document.createElement("li"); // Метод создает элемент меню и сразу вешает на него 
        menuItemElement.className = "menu-item";            // обработчик событий
        menuItemElement.dataset.type = this.type;
        menuItemElement.textContent = this.text;
        menuItemElement.addEventListener("click", () => {
            this.randomFigure();                     // при клике запускает основной метод модуля, который что-то делает
        });
        return menuItemElement;
    }
    randomFigure() {
        // слздание рандомного элемента
        const figure = arrFigure[GetRandomIndexArr()];
        const figureHTML = document.createElement('div')
        figureHTML.id = figure;
        figureHTML.className = "randomFigure";
        // Проверка figure если класс будет равен triangle, то ему присвоить borderBottom с указанным згачением, потому что у стиль background у этой фигуры сменит не ее цвет, а задний фон
        if (figure === 'triangle') {
            figureHTML.style.borderBottom = `100px solid rgb(${GetRandomColor()})`;
        } else {
            figureHTML.style.background = `rgb(${GetRandomColor()})`
        }
        const size = GetRandom(30, 500);
        var maxTop = size.height - document.body;
        var maxLeft = size.width - document.body;
        figureHTML.style.height = figureHTML.style.width = size + 'px';
        figureHTML.style.position = 'absolute';
        figureHTML.style.top = GetRandom(0, maxTop) + 'px';
        figureHTML.style.left = GetRandom(0, maxLeft) + 'px';
        document.body.append(figureHTML);
        setTimeout(() => {
            let figure = document.querySelector(".randomFigure");
            figure.remove();
        }, 3000);
    }
}