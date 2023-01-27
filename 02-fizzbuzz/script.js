/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 * 
*/

function fizzBuzz(num) {
    if (!Number.isInteger(num) || num < 1) {
        console.log("Формат входящих данных не подходит");
    }
    else {
        const arr = [];
        for (i = 1; i <= num; i++) {
            arr.push(i)
        }
        arr.forEach(elem => {
            switch (true) {
                case ((elem % 3 == 0) && (elem % 5 == 0)):
                    console.log("fizzbuzz");
                    break;
                case (elem % 3 == 0):
                    console.log("fizz");
                    break;
                case (elem % 5 == 0):
                    console.log("buzz");
                    break;
                default:
                    console.log(elem);
                    break;
            }
        });
    }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fizzBuzz(15));