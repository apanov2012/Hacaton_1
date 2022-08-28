import './styles.css'
import ContextMenu from "./menu";
import CustomMessage from "../src/modules/customMessageModule";
import ClickAnalyse from "../src/modules/clickAnalyseModule";
import XZero from "../src/modules/xZeroModule";
import RandomSound from "../src/modules/randomSound";
import RandomBackground from "../src/modules/randomBackground";
import RandomFigure from "../src/modules/randomFigure";
import ClickClick from "../src/modules/catchGame";
import HappyNewYear from "./modules/HappyNewYear";
import Timer from "./modules/countdownTimer";




let customMenu = new ContextMenu("body");

let customMessage = new CustomMessage("customMessage", "Бессмысленное сообщение");
let clickAnalyse = new ClickAnalyse("clickAnalyse","Анализ кликов");
let xZero = new XZero("xZero","Крестики-нолики");
let randomSound = new RandomSound("randomSound", "Случайный звук");
let randomBackground = new RandomBackground("randomBackground", "Случайный фон");
let randomFigure = new RandomFigure("randomFigure", "Случайная фигура");
let clickClick = new ClickClick("clickClick", "Игра-кликер");
let newYear = new HappyNewYear("newYear", "Секунд до НГ");
let timer = new Timer("timer","Обратный отсчет");


customMenu.changeDefaultToCustomMenu();
customMenu.add(customMessage);
customMenu.add(clickAnalyse);
customMenu.add(randomSound);
customMenu.add(randomBackground);
customMenu.add(randomFigure);
customMenu.add(timer);
customMenu.add(newYear);
customMenu.add(clickClick);
customMenu.add(xZero);




