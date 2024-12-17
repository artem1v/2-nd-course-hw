
function seasons() {
    n = Number(prompt('Введите число'));

    if (isNaN(n)) {
        return alert('Переданный параметр не является числом')
    } if (n === 1 || n === 2 || n === 12) {
        return alert('Зима');
    } if (n === 3 || n === 4 || n === 5) {
        return alert('Весна');
    } if (n === 6 || n === 7 || n === 8) {
        return alert('Лето');
    } if (n === 9 || n === 10 || n === 11) {
        return alert('Осень');
    } else {
        return alert('Токого месяца нету');
    }}



    

