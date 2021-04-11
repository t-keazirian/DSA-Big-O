/*
Solution: Constant time - no matter what the number the value is equal to, you are only doing one equation - testing whether or not it is divisible by 2.  If it is, return true.  If not, return false.
*/


function isEven(value) {
  if (value % 2 === 0) {
      return true;
  }
  else {
      return false;
  }
}