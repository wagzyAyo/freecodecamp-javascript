const userName = prompt("What is your name? ")
const nameLength = userName.length;
const nameUppercase = userName.slice(0, 1).toUpperCase();
const sliceToLower = userName.slice(1, nameLength).toLowerCase();

alert(nameUppercase+sliceToLower)