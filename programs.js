
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


   
    function rememberWords() {
    
        const words = ['Яблоко', 'Солнце', 'Книга', 'Море', 'Гора', 'Компьютер', 'Чашка', 'Собака', 'Цветок', 'Телефон'];

        const currentWords = getRandomWords(words, 5);
    
        alert('Запомните эти слова:\n' + currentWords.join(', '));
    
        setTimeout(() => {
            const userInput = prompt('Введите слова, которые вы запомнили, через запятую:');
    
            if (userInput) {
                const userWords = userInput.split(',').map(word => word.trim()); 
                const correctWords = currentWords.map(word => word.toLowerCase()); 
    
                const correctCount = userWords.filter(word => correctWords.includes(word.toLowerCase())).length;
    
                alert(`Вы правильно вспомнили ${correctCount} из ${currentWords.length} слов!`);
            } else {
                alert('Вы ничего не ввели!');
            }
        }, 5000); 
    }
    
    function getRandomWords(words, count) {
        const shuffled = words.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count); 
    }
    


const riddlesList = [
    {
        question: 'Висит груша, нельзя скушать. Что это?',
        answer: 'лампочка',
        hints: ['Это используется для освещения.', 'Оно висит на потолке.']
    },
    {
        question: 'Зимой и летом одним цветом. Что это?',
        answer: 'ель',
        hints: ['Это дерево.', 'На него вешают ёлочные игрушки.']
    },
    {
        question: 'Сидит дед, во сто шуб одет. Кто это?',
        answer: 'лук',
        hints: ['Это овощ.', 'Его добавляют в салаты.']
    }
];


function riddles() {
    
    const riddle = riddlesList[Math.floor(Math.random() * riddlesList.length)];

    let attempts = 3; 
    let hintsUsed = 0; 

   
    while (attempts > 0) {
        
        const userAnswer = prompt(`Загадка: ${riddle.question}\n\nПопыток осталось: ${attempts}\nПодсказок осталось: ${2 - hintsUsed}`);

        
        if (userAnswer === null) {
            alert('Игра завершена.');
            return;
        }

       
        if (userAnswer.toLowerCase() === riddle.answer) {
            alert('Поздравляю! Вы угадали!');
            return;
        } else {
            attempts--;

           
            if (attempts > 0) {
                const useHint = confirm('Неправильно! Хотите использовать подсказку?');

                if (useHint && hintsUsed < 2) {
                    alert(`Подсказка: ${riddle.hints[hintsUsed]}`);
                    hintsUsed++;
                }
            }
        }
    }

    alert(`К сожалению, вы не угадали. Правильный ответ: ${riddle.answer}`);
}


const scrollButton = document.querySelector('#scrollButton');
const menuElement = document.querySelector('.menu');

scrollButton.addEventListener('click', function () {
menuElement.scrollIntoView({ behavior: 'smooth'});    
});

    

