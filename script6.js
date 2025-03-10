/*
Задание 1
Дан массив: 
[1, 5, 4, 10, 0, 3].

Создайте цикл, который будет выводить элементы массива до тех пор, пока не встретит значение 
10
. После вывода значения 
10
 в консоль цикл должен прекратить свою работу.
 */

/*
 const numbers = [1, 5, 4, 10, 0, 3];
 for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    if (numbers[i] === 10) break;
    }
*/

/*
Задание 2
Дан массив: 
[1, 5, 4, 10, 0, 3].

Найдите индекс значения 
4 в этом массиве.
*/

/*
const arr = [1, 5, 4, 10, 0, 3];

const isLargeNumber = (element) => element === 4;

console.log(arr.findIndex(isLargeNumber));
*/



/*
Задание 3
Дан массив чисел: 
[1, 3, 5, 10, 20]
.

С помощью метода 
join
 выведите элементы массива через пробел (пустую строку ' ').
*/
/*
const arra = [1, 3, 5, 10, 20];
console.log(arra.join(' '));
*/


// Задание 4
// С помощью вложенных циклов создайте многомерный массив вида: 
// [[1, 1, 1], [1, 1, 1], [1, 1, 1]]
// .


// Критерии оценки
// Работа будет оценена по следующим критериям
// В консоль должен быть выведен многомерный массив 
// [[1, 1, 1], [1, 1, 1], [1, 1, 1]]
// .
// Результат работы загружен на GitHub и отправлена ссылка на pull request.
// Подсказка
// Используйте два вложенных цикла 
// for
// .


/*
const array = [];


for (let i = 0; i < 3; i++) {
    const arr2 = [];
    for (let i = 0; i < 3; i++) {
        arr2.push(1);
        
    }
    array.push(arr2);
}

console.log(array);
*/


/*
Задание 5
Дан массив: 
[1, 1, 1]
. Добавьте в конец массива значения 2, 2, 2.
*/

/*
const arro = [1, 1, 1,];
arro.push(2, 2, 2);
console.log(arro);
*/

/*
Задание 6
Дан массив: 
[9, 8, 7, 'a', 6, 5].

С помощью метода sort отсортируйте массив и удалите букву 'a' из массива. Затем выведите массив.
 */
/*
const numberdok = [9, 8, 7, 'a', 6, 5];

console.log(numberdok.sort());
console.log(numberdok.pop());
const filteredAges = numberdok.filter(numberdok => numberdok >= 5);
console.log(numberdok);
console.log(filteredAges);
*/

/*
Задание 7
Дан массив: 
[9, 8, 7, 6, 5].

Попросите пользователя угадать число с помощью метода prompt. Если значение, которое ввел пользователь, есть в массиве, выведите в 
alert «Угадал», в противном случае — «Не угадал».
*/

/*

const arru = [9, 8, 7, 6, 5,];

const userNuder = +prompt('Введите число');
if (arru.includes(userNuder)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}
*/




//  Задание 8
//  Дана строка: 
//  'abcdef'
//  . Выведите в консоль 
//  'fedcba'
//  .

//  Для этого задания вам пригодится метод 
//  reverse()
//  . Он располагает элементы массива в порядке, обратном исходному.


//  Критерии оценки
//  Работа будет оценена по следующим критериям
//  В консоль выведена строка в обратном порядке: 
//  'fedcba'
//  .
//  Не создана новая строка, а выведена именно оригинальная строка, но пересортированная.
//  Результат работы загружен на GitHub и отправлена ссылка на pull request.
//  Подсказка
//  Преобразуйте строку в массив, используйте 
//  reverse()
//   и снова преобразуйте в строку.

/*
let str = 'abcdef';

str = str.split('').reverse().join('');
console.log(str);
*/

//  Задание 9
//  Дан массив: 
//  [[1, 2, 3],[4, 5, 6]]
//  . Выведите в консоль массив вида: 
//  [1, 2, 3, 4, 5, 6]
//  .

//  Критерии оценки
//  Работа будет оценена по следующим критериям
//  В консоль должен быть выведен одномерный массив 
//  [1, 2, 3, 4, 5, 6]
//  .
//  Результат работы загружен на GitHub и отправлена ссылка на pull request.
//  Подсказка
//  Используйте оператор 
//  spread
//   для объединения массивов.


/*
const arry = [[1, 2, 3,], [4, 5, 6]];
console.log(arry.flat());
*/


//  Задание 10
//  Создайте массив с произвольными числами (диапазон от 
//  1
//   до 
//  10
//  ).
//  Переберите его с помощью цикла 
//  for
//  .
//  В каждой итерации выведите в консоль сумму текущего и следующего элементов массива.
//  Следующий элемент массива можно получить с помощью индекса: 
//  i + 1
//  . Обратите внимание, что у последнего элемента нет следующего.


//  Критерии оценки
//  Работа будет оценена по следующим критериям
//  В консоль должны быть выведены суммы пар соседних элементов.
//  Для последнего элемента пара не формируется, поэтому его сумма не выводится.
//  Результат работы загружен на GitHub и отправлена ссылка на pull request.
//  Подсказка
//  Используйте цикл 
//  for
//   для перебора элементов и вычисления суммы. Учтите, что для последнего элемента нет последующего!

/*
const arrn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arrn.length; i++) {
    if (arrn[i + 1]) {
        console.log(arrn[i] + arrn[i + 1]);
    }
    
}

*/

//  Задание 11
//  Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив квадратов этих чисел.


//  Критерии оценки
//  Работа будет оценена по следующим критериям
//  Функция должна возвращать новый массив, содержащий квадраты элементов исходного массива.
//  Результат работы функции должен быть выведен в консоль.
//  Результат работы загружен на GitHub и отправлена ссылка на pull request.
//  Подсказка
//  Используйте метод 
//  map()
//   для создания нового массива на основе исходного массива.

/*
function square(arr) {
    return arr.map(item => item ** 2);
}

console.log(square([5, 9, 12]));
*/

//  Задание 12
//  Создайте функцию, которая принимает на вход массив строк, а возвращает массив длины слов.


//  Критерии оценки
//  Работа будет оценена по следующим критериям
//  Функция должна возвращать новый массив, содержащий длины строк исходного массива.
//  Результат работы функции должен быть выведен в консоль.
//  Результат работы загружен на GitHub и отправлена ссылка на pull request.
//  Подсказка
//  Используйте метод 
//  map()
//   для создания нового массива, где каждый элемент является длиной строки из исходного массива.

/*
function texLength(arr) {
    return arr.map(item => item.length);
}

console.log(texLength(['love', 'eat']));
*/


//  Задание 13
//  Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив, содержащий только отрицательные значения.
//  
//  
//  Критерии оценки
//  Работа будет оценена по следующим критериям
//  Функция должна возвращать новый массив, содержащий только отрицательные числа исходного массива.
//  Результат работы функции должен быть выведен в консоль.
//  Результат работы загружен на GitHub и отправлена ссылка на pull request.
//  Подсказка
//  Используйте метод 
//  filter()
//   для создания нового массива на основе условия проверки отрицательности числа.
 
/*
 function number(array) {
    return array.filter(item => item < 0);
 }
console.log(number([3, 15, 25, -7, 12, -5, 10]));
*/


//  Задание 14
//  Создайте массив, состоящий из 10 значений. Значения массива необходимо сгенерировать с помощью метода 
//  Math.random()
//   в диапазоне от 0 до 10.

//  В данном массиве найдите все четные значения и добавьте их в новый массив. Результат работы программы необходимо вывести в консоль — это будут два массива: исходный массив и массив с четными значениями.


//  Критерии оценки
//  Работа будет оценена по следующим критериям
//  Должен быть сгенерирован массив из 10 случайных чисел в указанном диапазоне.
//  Должен быть создан второй массив, содержащий только четные значения из исходного массива.
//  Оба массива должны быть выведены в консоль.
//  Результат работы загружен на GitHub и отправлена ссылка на pull request.
//  Подсказка
//  Используйте цикл для генерации исходного массива и метод 
//  filter()
// для создания массива с четными числами.

/*
function randomNumb() {
    return Math.floor(Math.random() * 10);
}

const arrj = [];

for (let i = 0; i < 10; i++) {
    arrj.push(randomNumb());
    
}

console.log(arrj);

const evenArr = [];

for (let i = 0; i < arrj.length; i++) {
    if (arrj[i] % 2 === 0) {
        evenArr.push(arrj[i]);
    }
    
}

console.log(evenArr);
*/

//  Задание 15
//  Создайте массив, состоящий из 6 элементов. Элементы массива необходимо сгенерировать с помощью 
//  Math.random()
//   в диапазоне от 1 до 10.

//  Требуется найти среднее арифметическое этих цифр, результат программы вывести в консоль.


//  Критерии оценки
//  Работа будет оценена по следующим критериям
//  Должен быть сгенерирован массив из 6 случайных чисел в указанном диапазоне.
//  Должно быть выведено среднее арифметическое элементов массива в консоль.
//  Результат работы загружен на GitHub и отправлена ссылка на pull request.
//  Подсказка
//  Для вычисления среднего арифметического воспользуйтесь методом 
//  reduce()
//   для суммирования всех элементов массива и разделите результат на их количество.



/*
function randomNumb() {
    return Math.floor(Math.random() * 10);
}

const arre = [];

for (let i = 0; i < 10; i++) {
    arre.push(randomNumb());
    
}

console.log(arre);
console.log(arre.reduce((a, b) => a + b) / arr.length);
*/