import { arrFigure } from "../constants/constants";

export default function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

//Функция генерирует случайное число
export const GetRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Функция генерирует случайное число в диапозоне массива с названием стилей фигур
export const GetRandomIndexArr = (min = 0, max = arrFigure.length - 1) => {
  min = Math.ceil(min);
  max = Math.ceil(max);
  const number = Math.floor(Math.random() * (max - min + 1) + min);
  return number;
}
// Функция генерирует случайный цвет rgb
export const GetRandomColor = (min = 0, max = 255) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const r = Math.floor(Math.random() * (max - min + 1) + min);
  const g = Math.floor(Math.random() * (max - min + 1) + min);
  const b = Math.floor(Math.random() * (max - min + 1) + min);
  const color = [r, g, b].toString();
  return color;
}

//для таймера обратного отсчета
export const addZero = (num) => {
  if (num >= 0 && num <= 9) {
    return '0' + num;
  } else return num
};