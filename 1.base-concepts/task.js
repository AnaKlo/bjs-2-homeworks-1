function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  if(discriminant < 0){
    let arr = 0; 
    return(arr);
  }else if(discriminant == 0){
    let root = -b / (2 * a);
    arr[0] = Number(root.toFixed(2));
    return(arr)
  }else if(discriminant > 0){
    let root1 = (-b + Math.sqrt(discriminant) )/(2*a);
    let root2 = (-b - Math.sqrt(discriminant) )/(2*a);
    arr[0] = Number(root1.toFixed(2));
    arr[1] = Number(root2.toFixed(2));
    return( arr);
  }
   return arr; // array
}


