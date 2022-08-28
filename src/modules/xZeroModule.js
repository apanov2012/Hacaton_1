// модуль крестики - нолики
import Module from "../core/module";

export default class XZero extends Module {
    constructor(type,text){
        super(type,text);
        this.player = "";
    }
    trigger() {
        return this.createItemElement(); // Метод запускает работу модуля
    }
    createItemElement() {
        let menuItemElement = document.createElement("li"); // Метод создает элемент меню и сразу вешает на него 
        menuItemElement.className = "menu-item";            // обработчик событий
        menuItemElement.dataset.type = this.type;
        menuItemElement.textContent = this.text;
        menuItemElement.addEventListener("click", () => {
            this.playGame();                     
        });
        return menuItemElement;
    }                                                 

    renderGameBoard() { // создает игровое поле
        let board = document.createElement("div");
        board.className = "boardGame";
        let boardCell = "<div class ='boardCell' id ='' ></div>";
        let player = document.createElement("div"); // дополнительный невидимый блок для определения очередности хода
        player.className = "hide";
        player.id = "player";
        player.textContent = "X";
        for (let i = 1; i < 10; i++) {
            boardCell = `<div class ='boardCell' id ='cell${i}' ></div>`;
            board.innerHTML += boardCell;
        }
        document.body.append(board);
        board.after(player);
    }

    playGame(){
        this.renderGameBoard();
        let board = document.querySelector(".boardGame");
        board.addEventListener("click", (event) => {
            let playerElement = document.querySelector("#player");
            if (playerElement.textContent === "X") {
                event.target.textContent = "X"; // отображает ход в ячейке
                playerElement.textContent = "O";// меняет очередь хода
                this.checkWinner(this.updateWinnerArray()); // проверяет на наличие победителя
            }
            else if (playerElement.textContent === "O") {
                event.target.textContent = "O";
                playerElement.textContent = "X";
                this.checkWinner(this.updateWinnerArray());
            }
        })
    }

    updateWinnerArray(){ // создает и возвращает массив со сделанными ходами
        let winnerArray = [];
        for(let i = 1; i < 10; i++) {
        let innerCell = document.querySelector(`#cell${i}`).textContent;
        winnerArray[i] = innerCell;
        }
        return winnerArray;
    }
    
    renderWinner(player){ // удаляет игровую досту, выводит информацию о победителе,затем также удаляет и ее
        setTimeout(() => {
            let board = document.querySelector(".boardGame");
            board.remove();
            let winner = document.createElement("h1");
            winner.className = "winner";
            winner.textContent = `The winner is ${player}`;
            document.body.append(winner);
        }, 1500);
        setTimeout(() => {
            let winner = document.querySelector(".winner");
            winner.remove();
        }, 3000);
    }

    colorWinnerCells(id1,id2,id3){ // раскрашивает выигравшую комбинацию ячеек
        let cell1 = document.querySelector(`#cell${id1}`);
        cell1.style.backgroundColor = "green";
        let cell2 = document.querySelector(`#cell${id2}`);
        cell2.style.backgroundColor = "green";
        let cell3 = document.querySelector(`#cell${id3}`);
        cell3.style.backgroundColor = "green";
    }

    checkWinner(array){ // долго и уныло проверяет массив на наличие выигравшего
        if (array[1] === "X" && array[2] === "X" && array[3] === "X"){
            this.colorWinnerCells(1,2,3); // в случае наличия такового красит ячейки и выводит инфу
            this.renderWinner("X");
        } else if (array[1] === "X" && array[4] === "X" && array[7] === "X"){
            this.colorWinnerCells(1, 4, 7);
            this.renderWinner("X");
        } else if (array[1] === "X" && array[5] === "X" && array[9] === "X") {
            this.colorWinnerCells(1, 5, 9);
            this.renderWinner("X");
        } else if (array[3] === "X" && array[5] === "X" && array[7] === "X") {
            this.colorWinnerCells(3, 5, 7);
            this.renderWinner("X");
        } else if (array[2] === "X" && array[5] === "X" && array[8] === "X") {
            this.colorWinnerCells(2, 5, 8);
            this.renderWinner("X");
        } else if (array[3] === "X" && array[6] === "X" && array[9] === "X") {
            this.colorWinnerCells(3, 6, 9);
            this.renderWinner("X");
        } else if (array[4] === "X" && array[5] === "X" && array[6] === "X") {
            this.colorWinnerCells(4, 5, 6);
            this.renderWinner("X");
        } else if (array[7] === "X" && array[8] === "X" && array[9] === "X") {
            this.colorWinnerCells(7, 8, 9);
            this.renderWinner("X");
        } else if(array[1] === "O" && array[2] === "O" && array[3] === "O"){
            this.colorWinnerCells(1,2,3);
            this.renderWinner("O");
        } else if (array[1] === "O" && array[4] === "O" && array[7] === "O"){
            this.colorWinnerCells(1, 4, 7);
            this.renderWinner("O");
        } else if (array[1] === "O" && array[5] === "O" && array[9] === "O") {
            this.colorWinnerCells(1, 5, 9);
            this.renderWinner("O");
        } else if (array[3] === "O" && array[5] === "O" && array[7] === "O") {
            this.colorWinnerCells(3, 5, 7);
            this.renderWinner("O");
        } else if (array[2] === "O" && array[5] === "O" && array[8] === "O") {
            this.colorWinnerCells(2, 5, 8);
            this.renderWinner("O");
        } else if (array[3] === "O" && array[6] === "O" && array[9] === "O") {
            this.colorWinnerCells(3, 6, 9);
            this.renderWinner("O");
        } else if (array[4] === "O" && array[5] === "O" && array[6] === "O") {
            this.colorWinnerCells(4, 5, 6);
            this.renderWinner("O");
        } else if (array[7] === "O" && array[8] === "O" && array[9] === "O") {
            this.colorWinnerCells(7, 8, 9);
            this.renderWinner("O");
        }
    }
}