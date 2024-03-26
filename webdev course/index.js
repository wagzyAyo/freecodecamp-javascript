function whoIsPaying(names) {
    randomNumber = Math.floor(Math.random() * names.length)
    alert(names[randomNumber] +" is paying for dinner")

}

names = ["James", "Angela", "Jack", "Frank", "Betty"]
whoIsPaying(names)