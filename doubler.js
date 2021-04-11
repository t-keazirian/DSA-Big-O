/*
Solution: Logarithmic time - when you increase the array by 1, the tick goes up by 1
*/

function doubleArrayValues(array) {
	let ticks = 1;
	for (let i = 0; i < array.length; i++) {
    ticks ++
		array[i] *= 2;
	}
	return {
		array,
		ticks
	};
}

console.log(doubleArrayValues([1, 2, 3]));
