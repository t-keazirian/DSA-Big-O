/*

DONE

What is the Big O of the following algorithm? Explain your answer

Solution: Polynomial Time - we have a nested loop, so with 2 levels of looping, it will be O(n ^ 2)
*/

function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
      const el1 = arr1[i];
      for (let j = 0; j < arr2.length; j++) {
          const el2 = arr2[j];
          if (el1 === el2) return true;
      }
  }
  return false;
}

const arr1 = [1, 2, 3, 4,]
const arr2 = [5, 6]

console.log(areYouHere(arr1, arr2));