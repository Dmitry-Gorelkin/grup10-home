"use strict";

// const empl = [
//   "Dima1",
//   "Dima101",
//   "Dima121",
//   "Dima12121",
//   "Dima11",
//   "NadyaYatebyaproshu",
//   "Dima-porasnomy",
// ];

// const min = 500;
// const max = 5000;
// let totalSalary = 0;

// for (const emp of empl) {
//   let employeeSalary = Math.round(Math.random() * (max - min) + min);
//   console.log(`Salary of ${emp} = ${employeeSalary}`);
//   totalSalary += employeeSalary;
// }
// console.log(totalSalary);

// Объявление переменных
const workers = ["Наташа", "Дима", "Надя", "Марина"];
const min = 500;
const max = 5000;
const salarys = [];
const totalSalary = 0;

//написать функцию которая принимает массив сотрудников, мин и макс уровень зарплаты; считает зарплату каждому сотруднику и записывает её в массив
function salaryWorker(array, min, max) {
  //начинаем цикл по кол-ву сотрудников
  for (let i = 0; i < array.length; i++) {
    let salary = Math.round(Math.random() * (max - min) + min); // с помощью Math.random() определяем зарплату каждому сотруднику и Math.round() округляем её до целого числа
    console.log(`Зарплата сотрудника ${array[i]} равна: ${salary}$`); // выводим в консоль результаты
    salarys.push(salary); //записываем все значения в массив
  }
}

//теперь надо определить у кого самая максимальная зарплата
// function salaryMax(arrWorkers, arrSalary) {
//   let max = arrSalary[0];
//   let index = 0;
//   for (let i = 0; i < arrSalary.length; i++) {
//     if (max < arrSalary[i]) {
//       max = arrSalary[i];
//       index = i;
//     }
//   }
//   return `Самая большая зарплата у ${arrWorkers[index]} равна ${max}$`;
// }

//высчитываем у какого сотрудника самая максимальная зарплата получаем массивы сотрудников и зарплат
function salaryMax(arrWorkers, arrSalary) {
  let max = Math.max(...arrSalary); // с помощью Math.max() определяем максимальную зарплату НО т.к. на входе получаем массивно его надо распылить
  let index = arrSalary.indexOf(max); // опредлеяем индекс в максимального значения
  return `Самая большая зарплата у ${arrWorkers[index]} равна ${max}$`;
}

salaryWorker(workers, min, max);
console.log(salarys);

console.log(salaryMax(workers, salarys));
