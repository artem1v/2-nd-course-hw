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
    if (numbers[i] == 0) break;
    console.log(numbers[i]);
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
const numbers = [1, 5, 4, 10, 0, 3];

numbers.forEach((el, index) => {
    console.log(`${index}: ${el}`);
});
*/
/*
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 4) break;
    console.log(numbers[i]);
}
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
let number = [1, 3, 5, 10, 20];
number = number.join(' ');
console.log(number);
*/

/*
Задание 4
С помощью вложенных циклов создайте многомерный массив вида: 
[[1, 1, 1], [1, 1, 1], [1, 1, 1]].
*/


const number = [
    [1, 1, 1,],
    [1, 1, 1,],
    [1, 1, 1,],
];

for (const arrIn of number) {
    for (const element of arrIn) {
        console.log(arrIn);
    }
}


for (const arrIn of number) {
        console.log(arrIn);
    }



