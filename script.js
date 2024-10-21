// 1

//Skriv en funktion som tar en sträng som parameter och returnerar längden på en sträng.
// Anropa funktion och console.log svaret. Tips! Du kan skriva .length på en variabel som är en
//sträng för att få längden.

// function howManyLetters(sträng) {
//   return sträng.length;
// }

// console.log(howManyLetters("hejsan"));
// // const myLetters = howManyLetters("hejsan");
// // console.log(myLetters);

// 2

//Skriv en funktion som plockar ut året från en sträng i datumformat.
// Använd substring(startIndex, endIndex)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring.
// Funktionen ska ta en parameter, som ska vara en sträng. Strängen ska alltid ha 10 tecken och följa mönstret 'YYYY-MM-DD'.
//  Man ska kunna skriva year('2019-10-14') och få talet 2019 som resultat.

// function makeToOnlyYear(date) {
//   let year = date.substring(0, 4);
//   return year;
// }

// // console.log(makeToOnlyYear("1987-06-18"));
// // let onlyYear = makeToOnlyYear("1987-06-18");
// // console.log(onlyYear);
// console.log(makeToOnlyYear("1987-06-18"));

// 3

// Skriv en funktion som tar tre parametrar.
// De första två är två tal och den sista är en operator d.v.s antingen '+', '-', '/', '*'.
// Utför beräkningen och returnera summan och skriv ut.
// Det ska enbart gå att skicka med siffror (förutom operanden som är en sträng då)
// och varje operation ska vara sin egen funktion.
// Tips! Här kan typeof vara bra att använda
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

function calculateNumber(num1, num2, operator) {
  let total;
  if (operator === "+") {
    total = num1 + num2;
  } else if (operator === "-") {
    total = num1 - num2;
  } else if (operator === "*") {
    total = num1 * num2;
  } else if (operator === "/") {
    total = num1 / num2;
  }

  return total;
}

console.log(calculateNumber(4, 3, "/"));
