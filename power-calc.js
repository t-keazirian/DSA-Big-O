const powerCalc = (base, exponent) => {
  let result = 1;
  if (exponent <= 0) {
		return 'exponent should be >= 0';
	}
	if (exponent === 1) {
		return base;
	}
  for(let i = 0; i < exponent; i++) {
    result = result * base;
  }
  console.log(result);
}

console.log(powerCalc(7, 2));