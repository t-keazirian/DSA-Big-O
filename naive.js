/*
Solution: Logarithmic time - the more items you add to the array, it will tick that many times to search the array
*/

function naiveSearch(array, item) {
  let ticks = 1;
  for (let i = 0; i < array.length; i++) {
    ticks++
      if (array[i] === item) {
          return {i, ticks};
      }
  }
  
}

console.log(naiveSearch([1,2,9], 1));