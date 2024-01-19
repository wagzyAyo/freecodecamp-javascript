# freecodecamp-javascript
# Palindrome
<b>Palindrome Checker

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
``` javascript
//function prototype
function palindrome(str) {
  return true;
}

palindrome("eye");
```

## Roman Numeral Converter
<b>Roman Numeral Converter program
Convert the given number into a roman numeral.

|Roman numerals | Arabic numerals |
| --- | --- |
| M	  | 1000 |
|CM   |  900 |
|D    |  500 |
|CD   |  400 |
|C    |  100 |
|XC   |  90  |
|L    |  50  |
|XL   |  40  |
|X    |  10  |
|IX   |  9   |
|V    |  5   |
|IV   |  4   |
|I    |  1   |


All roman numerals answers should be provided in upper-case.
```javascript
//function prototype
function convertToRoman(num) {
 return num;
}

convertToRoman(36);
```

# Caesars Cipher

<b>Caesars Cipher program
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

```javascript
//function prototype
function rot13(str) {
  return str;
}

rot13("SERR PBQR PNZC");
```

# Telephone Number Validator
<b> Telephone Number Validator
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

```
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

```
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

``` javascript
//function prototype
function telephoneCheck(str) {
  return true;
}

telephoneCheck("555-555-5555");
```