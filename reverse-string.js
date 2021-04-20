const reverse = (string) => {
  if (string === '') {
    return ''
  }
  let splitArray = string.split('')
  let reverseArray = splitArray.reverse()
  let joinArray = reverseArray.join('')
  console.log(joinArray);
}

console.log(reverse('hello'));

// let arr1 = [1,2,3,4,5];
// let arr2 = [...arr1, 6, 7, 8]
// console.log(arr2);