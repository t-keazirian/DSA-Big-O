/*
1. What does the following algorithm do? 
2. What is the Big O of the following algorithm? Explain your answer

Answers:
1. 
- First if statement - if n is less than 2, or if the remainder left over after n is divided by 1 is not equal to 0, return false
- Loop - start with i = 2, run the loop as long as i is less than n, if the remainder after n is divided by i = 0, then return false
- All Else - return true
2. Possibly Linear or Polynomial - it has an if statement and a for loop to analyze 
*/

function isWhat(n) {
  if (n < 2 || n % 1 !== 0) {
      return false;
  }
  for (let i = 2; i < n; ++i) {
      if (n % i === 0) return false;
  }
  return true;
}

console.log(isWhat(9));