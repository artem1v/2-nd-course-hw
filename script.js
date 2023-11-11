/*
Задание 1
Напишите функцию, которая возвращает меньшее из 2 чисел. Например, из двух чисел — 8 и 4 — функция должна вернуть 4. Если передадим 6 и 6, то функция должна вернуть 6.
*/


function tsyfra(a, d) {
  //  a = prompt('введите первое число');
  //  d = prompt('введите второе число');

if (a <= d) {
    return(a);
} else {
    return(d);
    
}

};
    
alert(tsyfra(6, 5));
let resultTsyfra = tsyfra();


/*
Задание 2
Напишите функцию, которая принимает число, а возвращает строку 'Число четное', если число четное, 'Число нечетное' — если нечетное.
*/

function evenNotEven(n) {

if (n % 2 == 0) {
    return('Число четное');
} else {
    return('Число нечетное');
}

}
const n = prompt('введите первое число');
const resultEvenNotEven = evenNotEven(n);
alert(resultEvenNotEven);

/*
Задание 3
3.1. Напишите функцию, которая принимает параметром число и выводит в консоль квадрат этого числа.

3.2. Напишите функцию, которая принимает параметром число и возвращает квадрат этого числа.
*/

function square(b) {
    b = prompt('введите число');
    return alert(b ** 2);
    
}

let resultSquare = square();


function squareConsole(c) {
    return c ** 2;
    
}


let resultSquareConsole = squareConsole();
console.log(squareConsole(7));

/*
Задание 4
Создайте функцию, которая:

Спрашивает у пользователя, сколько ему лет.
Если пользователь вводит отрицательное число, выводит на экран «Вы ввели неправильное значение».
Если пользователь введет число от 0 до 12, выводит на экран «Привет, друг!».
Если пользователь введет число больше или равно 13, выводит на экран «Добро пожаловать!».
*Подсказка: можете выполнить это задание с помощью оператора 
if else
*/

function age(e) {
   const e = prompt('Сколько вам лет?');
    
    if (e < 0  ) {
    return('Вы ввели неправильное значение');
} else if (e <= 12) {
    return('Привет, друг!');
} else {
    return('Добро пожаловать!');
}
}
     
let resultAge = age();

/*
Задание 5
Напишите функцию, которая на вход принимает 2 числа:

Проверяет, являются ли переданные параметры корректными числами. (Преобразование типов и 
isNaN()
 помогут.)
Если нет, то вернуть строку 'Одно или оба значения не являются числом'.
Если оба параметра — числа, то вернуть произведение данных чисел.
*/

function number(f, g) {
    f = Number(prompt('Введите первое число'));
    g = Number(prompt('Введите второе число'));

    if (isNaN(f, g)) {
        return alert('Одно или оба значения не являются числом')
    } else if (isNaN(g, f)) {
        return alert('Одно или оба значения не являются числом')
    } else {
       return alert(`${f * g}`);
    }  
}

let resultNumber = number();

/*
Задание 6
Напишите функцию, которая спрашивает у пользователя число, проверяет его на корректность, после чего возводит его в куб и возвращает следующую строку: 
'n в кубе равняется <получившееся значение>'
. Если переданный параметр не число, вернуть строку 'Переданный параметр не является числом'.

Проверьте самостоятельно, что данная функция работает корректно и выводит правильный результат с параметрами 
от 0 до 10
 включительно.
*/

function cubeNumber() {
    n = Number(prompt('Введите число'));

    if (isNaN(n)) {
        return alert('Переданный параметр не является числом')
    } else {
    const cube = Math.pow(n, 3); 
    return `${n} в кубе равняется ${cube}`;
    }

    
}

for (let n = 0; n <= 10; n++) {
    console.log(cubeNumber(n));
    
} 
alert(cubeNumber());
let resultCubeNumber = cubeNumber();


 /*
Задание 7
Создайте объекты circle1 и circle2 со свойством 
radius
. У объектов должен быть методам 
getArea
 , которое возвращает площадь круга через радиус, а также 
getPerimeter
 , который возвращает периметр окружности.
*/

function getRectangleArea() {
    return this.radius * this.area;
  }
  function getRectanglePerimeter() {
    return this.radius * 2 + this.area * 2;
  }

const circle1 = {
    radius: 5,
    area: 10,
    
    getArea: getRectangleArea,
    getPerimeter:  getRectanglePerimeter,
}

const circle2 = {
    radius: 8,
    area: 12,
    
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
}

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());

 /*
Задание 8. Работа с макетом
Сверстайте второй блок сайта с играми. Ссылка на макет.
Создайте его адаптивную версию и добавьте эффекты наведения.
Свяжите ваш сайт с первой игрой.
Сделайте функцию, которая принимает параметром номер месяца (от 1 до 12) и возвращает время года, в которое попадает этот месяц ("Зима", "Лето", "Весна", "Осень").

Придумайте, как должна работать функция, если ей передать неправильный параметр.

Выведите пример использования функции в консоль.

Для решения задачи используйте конструкцию 
else if
 и логические операторы 
||
 (логическое ИЛИ) и 
&&
 (логическое И).
 */

 function seasons() {
    n = Number(prompt('Введите число'));

    if (isNaN(n)) {
        return alert('Переданный параметр не является числом')
    } else if (n === 1) {
        return alert('Январь');
    } else if (n === 2) {
        return alert('Февраль');
    } else if (n === 3) {
        return alert('Март');
    } else if (n === 4) {
        return alert('Аптель');
    } else if (n === 5) {
        return alert('Май');
    } else if (n === 6) {
        return alert('Июнь');
    } else if (n === 7) {
        return alert('Июль');
    } else if (n === 8) {
        return alert('Август');
    } else if (n === 9) {
        return alert('Сентябрь');
    } else if (n === 10) {
        return alert('Октябрь');
    } else if (n === 11) {
        return alert('Ноябрь');
    } else if (n === 12) {
        return alert('Декабрь');
    } else if (n => 12) {
        return alert('Такова месяца нету');
    } 
 }


 //let resultseasons = seasons();