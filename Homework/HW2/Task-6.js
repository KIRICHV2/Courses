
let input = prompt("Put your number");
let total = 0;

// console.log(input);

for (let s = 0; input !== null; s++) {
  if (input !== null) {
    if (!isNaN(Number(input))) {
      total += Number(input);
      input = prompt("Put your number");
    } else {
      alert("Было введено не число, попробуйте еще раз");
      input = prompt("Put your number");
    }
  }
}

alert(`Общая сумма чисел равна ${total}`);
