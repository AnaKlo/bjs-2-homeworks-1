// Задание 1
function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg = 0;
  for(let i =0; i < arr.length; i++){
      sum = sum + arr[i];
      if(arr[i] > max){
        max = arr[i];
      } 
      if (arr[i] < min) {
        min = arr[i];
      }  
  }
  avg = parseFloat((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}
  

function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
       sum += arr[i];
    }

    return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let arrSum = func(arrOfArr[i]);
    if (arrSum > max) {
      max = arrSum;
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  let arrParams = getArrayParams(arr);
  return Math.abs(arrParams.max - arrParams.min);
}
