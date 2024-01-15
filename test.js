function getIndexToIns(arr, num) {
    let position = 0
    arr.sort(function(a,b){
      return a - b
    })
    console.log(arr)
    for (let i = 0; i < arr.length; i++){
      if (arr[i] < num){
        position = i + 1
      }
    }
    return position;
  }
  
  console.log(getIndexToIns([45, 40, 60], 50));
  console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
  console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
  console.log(getIndexToIns([40, 60], 50));
  console.log(getIndexToIns([2, 20, 10], 19));