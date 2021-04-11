/*
In this example, we return to the problem of searching using a more sophisticated approach than in naive search. 
Assume that the input array is always sorted. 
What is the Big O of the following algorithm? Explain your answer

Solution: Logarithmic complexity - like the example in the curriculum, it will take the sorted array and it will cut the problem size in half each round through.
*/

function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
      currentIndex = Math.floor((minIndex + maxIndex) / 2);
      currentElement = array[currentIndex];

      if (currentElement < item) {
          minIndex = currentIndex + 1;
      }
      else if (currentElement > item) {
          maxIndex = currentIndex - 1;
      }
      else {
          return currentIndex;
      }
  }
  return -1;
}
