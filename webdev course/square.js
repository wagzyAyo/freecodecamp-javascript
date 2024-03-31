function square(row, column) {
    
    for (let i = 0; i < row; i++) {
        let arr = '';
        for (let j = 0; j < column; j++) {
            arr += '#'
        }
        console.log(arr)
    }
    
}

square(4,10)