
const numbers = [];
let total = 0;

for (let i = 0; true; i++) {
  let input = +prompt("Введите число");

  if (input) {
    numbers.push(input);
  } else {
    if (numbers.length) {
      for (let s of numbers) {
        total += s;
      }
    }
    break;
  }
}

console.log(`Общая сумма чисел ${total}`);
