function addNumbers(n1: number, n2: number) {
  return n1 + n2;
}

// bad habit to specify return type, but shows return void type
function printResult(num: number): void {
  console.log('result ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(addNumbers(5, 2));

// declare function type
let combineValues: (a: number, b: number) => number;
combineValues = addNumbers;

console.log(combineValues(1, 2));

addAndHandle(1, 5, (result) => {
  console.log(result);
});
