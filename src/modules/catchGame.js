// игра клик-клик

import Module from "../core/module";

export default class ClickClick extends Module {
    trigger() {
        return this.createItemElement(); // Метод запускает работу модуля
    }
    createItemElement() {
        let menuItemElement = document.createElement("li"); // Метод создает элемент меню и сразу вешает на него 
        menuItemElement.className = "menu-item";            // обработчик событий
        menuItemElement.dataset.type = this.type;
        menuItemElement.textContent = this.text;
        menuItemElement.addEventListener("click", () => {
            this.renderGameBoard();
            this.clickClick();                     // при клике запускает основной метод модуля, который что-то делает
        });
        return menuItemElement;
    }
    clickClick() {
        var $start = document.querySelector('#start');
        var $game = document.querySelector('#game');
        var $time = document.querySelector('#time');
        var $timeHeader = document.querySelector('#time-header');
        var $result = document.querySelector('#result');
        var $resultHeader = document.querySelector('#result-header');
        var $gameTime = document.querySelector('#game-time');

        var score = 0;
        var isGameStarted = false;

        $start.addEventListener('click', startGame);
        $game.addEventListener('click', handleBoxClick);
        $gameTime.addEventListener('input', setGameTime);

        function handleBoxClick(event) {
            if (!isGameStarted) {
                return;
            }

            if (event.target.dataset.box) {
                score++;
                renderBox();
            }
        }

        function startGame() {
            score = 0;
            $resultHeader.classList.add('hide');
            $timeHeader.classList.remove('hide');
            $gameTime.setAttribute('disabled', true);
            setGameTime();
            console.log($time.textContent);

            isGameStarted = true;
            $start.classList.add('hide');
            $game.style.backgroundColor = '#fff';

            //функция, которая запускает определенный интревал. В нее 1-й аргументом - передаем функцию, которая будет выполняться каждую итерацию данного интервала
            // вторым аргументом передается количество милисекунды, через которые надо запускать интревал
            var interval = setInterval(function () {
                var time = parseFloat($time.textContent);// parseFloat переведет в чисовое значение содержимое TextConten
                if (time <= 0) {
                    clearInterval(interval);
                    endGame();
                } else {
                    $time.textContent = (time - 0.1).toFixed(1);
                }
            }, 100);


            renderBox();
            setTimeout(() => {
                let btn = document.querySelector(".btn");
                btn.remove();
            },Number($time.textContent) );
            setTimeout(() => {
                let app = document.querySelector(".app");
                app.remove();
            }, (Number($time.textContent)*1000 + 1500));
        }

        function endGame() {
            isGameStarted = false;
            $start.classList.remove('hide');
            $game.style.backgroundColor = '#ccc';
            $game.innerHTML = '';
            $timeHeader.classList.add('hide');
            $resultHeader.classList.remove('hide');
            setGameScore();
            $gameTime.removeAttribute('disabled');

        }

        function renderBox() {
            $game.innerHTML = '';
            var box = document.createElement('div');
            var boxSize = getRandom(30, 100);
            var gameSize = $game.getBoundingClientRect();// получаем размер и позицию объекта dib.game
            var maxTop = gameSize.height - boxSize;
            var maxLeft = gameSize.width - boxSize;

            box.style.height = box.style.width = boxSize + 'px';
            box.style.position = 'absolute';
            box.style.backgroundColor = 'green';
            box.style.top = getRandom(0, maxTop) + 'px';
            box.style.left = getRandom(0, maxLeft) + 'px';
            box.style.cursor = 'pointer';
            box.setAttribute('data-box', 'true');

            $game.insertAdjacentElement('afterbegin', box);//insertAdjacentElement(позиция, элемент) -функция позволяет положить переданный элемент в ДОМ-дерево
        }

        function getRandom(min, max) {// функция герирует число в диапозоне от мин до макс
            return Math.floor(Math.random() * (max - min) + min)
        }

        function setGameScore() {
            $result.textContent = score.toString();
        }

        function setGameTime() {
            $time.textContent = +$gameTime.value;
        }

    } 
    renderGameBoard(){
        let app = document.createElement("div");
        app.className = "app";

        let appHeader = document.createElement("div");
        appHeader.className = "app__header";

        let timeHeader = document.createElement("h1");
        timeHeader.id = "time-header";
        timeHeader.textContent = "Время игры: ";
        let time = document.createElement("span");
        time.id = "time";
        time.textContent = "5.0";
        timeHeader.append(time);

        let resultHeader = document.createElement("h1");
        resultHeader.id = "result-header";
        resultHeader.className = "hide";
        resultHeader.textContent = "Ваш результат: ";
        let result = document.createElement("span");
        result.id = "result";
        resultHeader.append(result);

        appHeader.append(timeHeader,resultHeader);

        let appContent = document.createElement("div");
        appContent.className = "app__content";

        let btn = document.createElement("button");
        btn.className = "btn";
        btn.id = "start";
        btn.textContent = "Начать";

        let game = document.createElement("div");
        game.className = "game";
        game.id = "game";

        appContent.append(btn,game);

        let appFooter = document.createElement("div");
        appFooter.className = "app__footer";

        let input = document.createElement("div");
        input.className = "input";

        let gameTime = document.createElement("label");
        gameTime.setAttribute("for", "game-time");
        gameTime.textContent = "Время игры, (сек)";

        let number = document.createElement("input");
        number.type = "number";
        number.id = "game-time";
        number.min = "5";
        number.step = "1";
        number.value = "5";

        input.append(gameTime,number);
        appFooter.append(input);

        app.append(appHeader,appContent,appFooter);
        document.body.append(app);

    }

}