/*
 * Задача 9: «Простое число»
 *
 * Напишите функцию isPrime(n) для проверки, простое число n или нет.
 * Напомним, что число называют простым, если оно больше 1 и делится
 * без остатка только на 1 и на само себя.
 * 
 * На вход функция должна принимать число n и возвращать true,
 * если n простое, и false — если нет.
*/

function isPrime(n) {
  console.log(n);
  if (!Number.isInteger(n) || n <= 1) {
    return false;
  }
  else {
    const arr = [];
    for (i = 2; i < n; i++) {
      arr.push(i)
    }
    if (arr.length == 0) {
      return true;
    }
    const res = arr.reduce((res, elem) => {
      if ((res !== true) && (n % elem !== 0)) {
        return true;
      }
      else {
        return false;
      }
    }, false);
    console.log(res);
    return res;
  }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(isPrime(0)); // false
console.log(isPrime(1)); // false
console.log(isPrime(3)); // true
console.log(isPrime(6)); // false
console.log(isPrime(17)); // true