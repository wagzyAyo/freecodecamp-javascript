const totalChars = 240;

const userChars = prompt("What is Happening ? ")
const charsInput = userChars.length
const remainChar = totalChars - charsInput

alert('You entered ' + charsInput + ' characters. Remaining characters is ' + remainChar)