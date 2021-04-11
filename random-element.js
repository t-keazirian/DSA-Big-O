/*
Solution: Constant time - no loops, no matter the amount of items in the array - it will find a random number and multiply it by the array length, and then return that array element
*/

function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}