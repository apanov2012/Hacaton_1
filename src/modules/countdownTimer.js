import Module from "../core/module";
import { addZero } from "../utils";

export default class Timer extends Module {
    trigger() {
        return this.createItemElement();
    }
    createItemElement() {
        let menuItemElement = document.createElement("li");
        menuItemElement.className = "menu-item";
        menuItemElement.dataset.type = this.type;
        menuItemElement.textContent = this.text;
        menuItemElement.addEventListener("click", () => {
            this.methodDoSomething();
        });
        return menuItemElement;
    }
    methodDoSomething() {
        let response = +prompt('Введите время(в секундах');
        console.log(response);
        if (response) {
            const block = document.createElement('div');
            block.classList.add('blockTimer');
            document.body.append(block);
            document.body.style.backgroundColor = 'rgb(69, 60, 60)';
            let diffTimeHours;
            let diffTimeMinutes;
            let diffTimeSeconds
            const changeTime = () => {
                // const date = Date.now();
                // const diffTime = msDeadline - date;
                // let diffTimeDay = Math.floor(diffTime/1000/60/60/24);
                if (response > 3600) {
                    diffTimeHours = Math.floor((response/60/60) - (1/3600));
                    diffTimeMinutes = Math.floor((response/60)%60) - (1/60);
                    diffTimeSeconds = Math.floor((response % 60) - 1);
                    response = response - 1;
                } else if (response > 60) {
                    diffTimeHours = '0';
                    diffTimeMinutes = Math.floor((response/60)%60 - (1/60));
                    diffTimeSeconds = Math.floor((response % 60) - 1);
                    response = response - 1;
                } else if (response < 60) {
                    diffTimeHours = '0';
                    diffTimeMinutes = '0';
                    diffTimeSeconds = Math.floor((response % 60) - 1);
                    response = response - 1;
                }
                
                block.textContent = `${addZero(diffTimeHours)}:${addZero(diffTimeMinutes)}:${addZero(diffTimeSeconds)}`;
                if (response === -1) {
                    block.textContent = `00:00:00`
                    alert('Конец отсчёта');
                    document.body.style.backgroundColor = 'white';
                    block.remove();
                    //return block.className = 'hide';
                }
            };
            setInterval(changeTime, 1000);
        }
        // const deadline = '2023.01.01';
        // const msDeadline = Date.parse(deadline);
        
    }
}