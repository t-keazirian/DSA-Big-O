/*
Solution: Constant time - it will always return the first two elements in the array (I think??) 
*/

function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
      for(let j = i + 1; j < arr.length; j++) {
          return arr[i] + ", " +  arr[j];
      }
  }
}

console.log(createPairs([5, 6, 8, 10, 12]));