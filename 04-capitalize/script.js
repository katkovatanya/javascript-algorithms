/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    str = str.trim();
    switch (true) {
        case (str.length == 0):
            return str;
            break;
        case (typeof str == 'string'):
            let arr = str.split(' ');
            arr = arr.map(word => {
                return `${word[0].toUpperCase()}${word.slice(1, word.length)}`
            });
            let newString = arr.join(' ');
            return newString;
            break;
        default:
            return 'нет данных';
            break;
    }
}
    // Протестируйте решение, вызывая функцию с разными аргументами:

    console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"
