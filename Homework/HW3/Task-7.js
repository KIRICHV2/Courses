const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  let len = login.length;
  if (len >= 4 && len <= 16) {
    return true;
  } else {
    alert(`Ошибка! Логин должен быть от 4 до 16 символов`);
    return false;
  }
};
// console.log(isLoginValid('Я больше чем 16 символов не добавляй меня в массив')) - check function

const isLoginUnique = function (allLogins, login) {
  if (allLogins.includes(login)) {
    alert(`Такой ${login} уже используется!`);
    return false;
  } else {
    return true;
  }
};

// let res = isLoginUnique(logins, 'robotGoogles');
// console.log(res); - check function

const addLogin = function (allLogins, login) {
  if (isLoginValid(login) && isLoginUnique(allLogins, login)) {
    logins.push(login);
    return `Логин успешно добавлен`;
  }
};
console.log(logins);

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
// console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
// console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
