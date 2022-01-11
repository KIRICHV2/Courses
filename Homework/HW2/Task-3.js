let message;
message = prompt("Введите пароль");
const ADMIN_PASSWORD = "adminpass";

if (message === ADMIN_PASSWORD) {
  console.log("Добро пожаловать!");
} else if (message) {
  console.log("Доступ запрещен, неверный пароль!");
} else {
  console.log("Отменено пользователем!");
}

alert(message);
