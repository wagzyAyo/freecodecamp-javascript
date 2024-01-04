function convertToRoman(num) {
    const RomanNumerals = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let result = '';
    for (let symbol in RomanNumerals){
        const count = Math.floor(num / RomanNumerals[symbol])
        //console.log(count)

        result += symbol.repeat(count)
        num -= count * RomanNumerals[symbol]
    }
    return result;
   }
   
   console.log(convertToRoman(36));