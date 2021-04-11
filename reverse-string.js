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