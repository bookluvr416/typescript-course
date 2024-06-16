function addFn(n1: number, n2: number, showResult: boolean, resultPhrase: string) {
  if (showResult) console.log(`${resultPhrase}${n1 + n2}`); 
  return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;
const shouldPrintResult = true;
const resultPhrase = 'Result is: ';

const result = addFn(number1, number2, shouldPrintResult, resultPhrase);

// object and array

const person = {
  name: 'Amanda',
  age: 34,
  hobbies: ['writing', 'reading'],
}

console.log(person.name);

let favoriteActivities: string[];

// enum

enum Role {
  ADMIN, READ_ONLY, AUTHOR
};

const personTwo = {
  name: 'Amanda',
  age: 34,
  hobbies: ['writing', 'reading'],
  role: Role.ADMIN,
}

console.log(personTwo.role);


