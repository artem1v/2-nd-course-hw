const user = {
    name:'Паша',
    age:'23',
    isAdmin:'true',
};
user.citeOfResidence = 'Vladivostok';
delete user.citeOfResidence;

let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info])