let credits = 35500;
let pricePerDroid = 3000;
let input = prompt("Дроиды Нннаада ?!");
let totalPrice = pricePerDroid * input;

if (input === null) {
  console.log("Отменено пользователем!");
} else if (totalPrice < credits) {
  let rest = credits - totalPrice;
  console.log(
    `Вы купили ${input} дроидов, на счету осталось ${rest} кредитов.`
  );
}
if (totalPrice > credits) {
  console.log("Недостаточно средств на счету!");
}
