import Module from "../core/module";
import { addZero } from "../utils";

export default class NewYear extends Module {
    trigger() {
        return this.createItemElement();
    }
    createItemElement() {
        let menuItemElement = document.createElement("li");
        menuItemElement.className = "menu-item";
        menuItemElement.dataset.type = this.type;
        menuItemElement.textContent = this.text;
        menuItemElement.addEventListener("click", () => {
            this.countDownTimer();
        });
        return menuItemElement;
    }
    countDownTimer() {
        const deadline = '2023.01.01';
        const msDeadline = Date.parse(deadline);
        const block = document.createElement('div');
        block.classList.add('blockTimer');
        let stopBtn = document.createElement("div");
        stopBtn.className = "stopbtn";
        stopBtn.textContent = "STOP"
        stopBtn.addEventListener("click",()=> {
            let countdown = document.querySelector(".blockTimer");
            document.body.style.backgroundColor = "white";
            countdown.remove();
            stopBtn.remove();
        })
        document.body.append(block,stopBtn);
        document.body.style.backgroundColor = 'rgb(69, 60, 60)';
        const changeTime = () => {
            const date = Date.now();
            const diffTime = msDeadline - date;
            let diffTimeDay = Math.floor(diffTime/1000/60/60/24);
            let diffTimeHours = Math.floor((diffTime/1000/60/60)%24);
            let diffTimeMinutes = Math.floor((diffTime/1000/60)%60);
            let diffTimeSeconds = Math.floor((diffTime/1000)%60);
            block.textContent = `${addZero(diffTimeDay)}:${addZero(diffTimeHours)}:${addZero(diffTimeMinutes)}:${addZero(diffTimeSeconds)}`;
            if (diffTimeDay < 0) {
                return block.textContent = `00:00:00:00`;
            }
        };
        setInterval(changeTime, 1000);
    }
}