type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
  input1: Combinable,
  input2: Combinable,
  resultType: ConversionDescriptor
) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(10, 15, 'as-number');
const combinedStringAges = combine('10', '15', 'as-number');
const combinedLetters = combine('A', 'B', 'as-text');

console.log(combinedAges);
console.log(combinedStringAges);
console.log(combinedLetters);
