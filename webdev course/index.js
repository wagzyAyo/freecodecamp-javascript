function fibonacciGenerator(n) {
   let seq = [];
   if (n < 1) {
    return
   }
   else if (n === 1) {
    seq.push(0)
   } else if (n >= 2) {
    seq.push(0,1);
    while (n > seq.length) {
        lastInt = seq.length - 1
        secondToLast = seq.length - 2
        seq.push(seq[secondToLast] + seq[lastInt])
    }
   }
   return seq

}

alert(fibonacciGenerator(5))