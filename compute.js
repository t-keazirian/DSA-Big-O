/*
1. What does the following algorithm do? 
2. What is its runtime complexity?

Answers:
1. It is a function that takes in a number parameter. It will loop through the amount of times <= to the number. It initializes an empty array called result. When i = 1 (the first loop through), it will push 0 into the array. When i =2, it will push 1 into the array. Then, you will have an array of [0,1]. If i continues (if num is higher than 2), it will take the index of result[3-2 = 1] and add that to result[3-3 = 0] and put that into the array. And it will continue to loop through until you've reached where i is not <= to num and you will have the result array.
2. I think it is logarithmic - when num increases, it will add one more element to the array. It loops through however many times = to num.
*/

function compute(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {

      if (i === 1) {
          result.push(0);
      }
      else if (i === 2) {
          result.push(1);
      }
      else {
          result.push(result[i - 2] + result[i - 3]);
      }
  }
  return result;
}

console.log(compute(10));