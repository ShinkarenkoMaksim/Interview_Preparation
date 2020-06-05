let number = Math.floor(Math.random() * 101);
console.log(number);

let userValue = parseInt(prompt("Введи число"));

function check() {

    if (userValue < 0 || userValue > 100 || (typeof userValue) !== 'number') {
        userValue = parseInt(prompt("Необходимо ввести число от 0 до 100!"));
        check();
    }

    if (userValue < number) {
        userValue = parseInt(prompt("Меньше"));
        check();
    }

    if (userValue > number) {
        userValue = parseInt(prompt("Больше>"));
        check();
    }

    if (userValue === number) {
        alert("Число угадано");
        exit();
    }
}

check(number);