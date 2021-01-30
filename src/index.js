module.exports = function toReadable (number) {
    if(!isFinite(number)) return null;
    if(number === 0) return 'zero';

    const arrZero = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let result = "";
    const rem100 = number % 100;

    if (number >= 100) { result += `${arrZero[Math.trunc(number / 100)]} hundred`;}
    if (rem100 >= 10 && rem100 < 20) { result += `${result.length !== 0 ? " " : ""}${teens[rem100 % 10]}`;}
    else if (rem100 < 10 && rem100 !== 0) { result += `${result.length !== 0 ? " " : ""}${arrZero[rem100]}`;}
    else if (rem100 >= 20) {
        result += `${result.length !== 0 ? " " : ""}${tens[Math.trunc(rem100 / 10)]}`;
        if (rem100 % 10 !== 0) { result += ` ${arrZero[rem100 % 10]}`;}
    }

    return result;
  }