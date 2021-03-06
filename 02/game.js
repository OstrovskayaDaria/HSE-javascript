/*
Первая версия игры
  1 Пользователь открывает сайт, запускает игру
  2 Игра размещает корабль
  3 Пользователь играет:
    - Игра спрашивает куда стрелять и пользователь вводит ответ
    - Если корабль не потоплен, то игра снова спрашивает координаты выстрела
  4 Игра выводит статистику и рейтинг игрока
*/

/*
  Создаём 3 переменные для корабля: location1, location2, location3
  Создаём переменную для координат текущего выстрела currentShot
  Создаём переменную, чтобы считать все выстрелы shots и присваиваем ей значение 0
  Создаём переменную hits для описания количества попаданий и присваиваем ей значение 0
  Создаём переменную isSunk, чтобы отслеживать потоплен корабль или нет и присваиваем ей значение false

  Создаём цикл, который будет работать, пока корабль не потоплен:
    1. получаем координаты выстрела
    2. Сравниваем координаты выстрела с координатами корабля, если человек попал, то увеличиваем счётчик попаданий на 1
    3. Если кол-во попаданий =3, то меняем isSunk на true и завершаем цикл
    4. Выводим сообщение о победе, статистику игры и рейтинг

*/

let location1 = Math.floor(Math.random() * 8)
let location2 = location1 + 1
let location3 = location2 + 1
let currentShot
let shots = 0
let hits = 0
let isSunk = false


while (isSunk !== true) {
  currentShot = Number(prompt("Куда вы будете стрелять?"))
  if (currentShot >= 0 && currentShot <= 9) {
    shots = shots + 1
    if (currentShot === location1 ||
        currentShot === location2 ||
        currentShot === location3) {
      hits = hits + 1
    }
    if (hits === 3) {
      isSunk = true
      alert("Победа!")
    }
  } else {
    alert("Значение должно быть от 0 до 9")
  }
  }

let rating = Math.round(hits / shots * 100)
alert ("Статистика: " + shots + "," + "Рейтинг: " + rating)
