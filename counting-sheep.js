const countSheep = (sheep) => {
  for (let i = sheep; i > 0; i--) {
    console.log(`${i}: Another sheep jumps over the fence`)
  }
  return 'All the sheep jumped!';
}

console.log(countSheep(6));