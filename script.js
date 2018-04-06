
/* 1.функция принимает в качестве параметра строку и возвращает ее последний символ*/
string = 'Hello, world!'; //!
function lastSymbol(string) {
  var lastCharPosition = string.length - 1;
  lastSymbol = string.charAt(lastCharPosition);
  return lastSymbol;
}
  console.log(lastSymbol(string));

/*2.Функция принимает в качестве параметра строку и возвращает ту же самую строку, но без последнего символа*/
var string = 'Hello, world!';// Hello, world
function withoutLastSymbol(string) {
  var shortString = string.substring(0, string.length - 1);
  return shortString;
}
  console.log(withoutLastSymbol(string));

/*3.Функция принимает в качестве параметра строку и возвращает зеркально отраженную. Обратный порядок*/
var string = 'Hello, world!';
function reverseString(string) {
  return string.split('').reverse().join('');
}
  console.log(reverseString(string));

var string = 'Hello, world!';
function reverseString(string) {
  var newString = '';
  for (var i = string.length - 1; i >= 0; i--) {
    newString += string.charAt(i);
  }
  return newString;
}
  console.log(reverseString(string));
    
/*4.Удаляет лишние пробелы, вначале, в конце, между один пробел*/
var string = '    Институт программных      систем    ';
function correctSpaces(string) {
  var delSpaces = string.trim();
  var newString = delSpaces.replace(/\s{2,}/g, ' ').replace(/([,.!?]+)(?=\S)/g, '$1 ');
  return newString;
}
  console.log(correctSpaces(string));





