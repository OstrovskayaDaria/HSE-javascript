
let movieName = "Алита: Боевой ангел"
let movieRating = 7.3

function checkMovie(name, rating) {
  if (movieRating >= 7){
    console.log("На " + movieName + " стоит сходить в кино")
  } else {
    console.log(movieName + " лучше посмотреть дома")
  }
}

let movieName = "Алита: Боевой ангел"
let movieRating = 7.3
function checkMovie(movieName, movieRating)

movieName = "Спасти Ленинград"
movieRating = 5.5
function checkMovie(movieName, movieRating)

movieName = "Дом, который построил Джек"
movieRating = 5.5
function checkMovie(movieName, movieRating)


function sayHello(name) {
  alert("Привет, " + name)
}

sayHello("Даша")

function findMax(a, b)/*можно им задавать любые значения */ {
  if (a > b) {
    console.log(a);
  } else {
    console.log(b);
  }
}


function checkSeason(month) {
  if (month < 1 || month > 12){
    console.error("Error");
  }else {
    if ( month === 3 || month === 4 || month === 5){
    console.log("Весна");
    }
    if (month === 6 || month === 7 || month === 8) {
      console.log("Лето");
    }
    if (month === 9 || month === 10 || month === 11){
      console.log("Осень");
    }
    if (month === 12 || month === 1 || month === 2){
      console.log("Зима");
  }
}
}


function checkBedTimes(wakeUpTime) {
  let bedTime = wakeUpTime - 8
  if (wakeUpTime < 8) {
    bedTime = wakeUpTime + 16
  } else {
    bedTime = wakeUpTime - 8
  }
  console.log(bedTime);
}

checkBedTimes(5)

function addOne(a) {
  console.log(a + 1);
}

addOne(1)

function nextEven(a) {
  if(num % 2  === 0 ){
    return a + 2
  }
}

function calcPrice



function splitPrice(total, peopleNum) {
  return total / peopleNum
}
console.log ("")


function makeDiff(a, b, с) {
  let min = Math.min(a, b, c)
  let max = Math.max(a, b, c)
  let median = (a + b + c - max - min)
  let MinPlusOne = addOne(min)
  let evenMedian = nextEven(median)
  let newMax = max - min + evenMedian
  console.log("К наименьшему прибавлю 1:", minPlusOne)
  console.log("Среднее делаю четным: ", evenMedian)
  console.log("Jn большего отнимаю среднее: " newMax)
}
