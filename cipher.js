function rot13(str) {
  const result = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (/[A-Z]/.test(char)) {
      // Shift only uppercase letters
      const charCode = char.charCodeAt(0);
      const shiftedCharCode = ((charCode - 65 + 13) % 26) + 65;
      result.push(String.fromCharCode(shiftedCharCode));
    } else {
      // Non-alphabetic characters, do not shift
      result.push(char);
    }
  }

  return result.join('');
}


console.log(rot13("SERR PBQR PNZC"));