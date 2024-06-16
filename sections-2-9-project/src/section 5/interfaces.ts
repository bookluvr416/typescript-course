// interfaces and functions

interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
}

// interface and classes

interface Named {
  readonly firstName: string;
  readonly lastName: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  firstName: string;
  lastName: string;
  age: number;
  hobbies?: string[];

  constructor(fn: string, ln: string, a: number, h?: string[]) {
    this.firstName = fn;
    this.lastName = ln;
    this.age = a;

    if (h) this.hobbies = h;
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.firstName}`)
  }
}

let user1: Greetable;

user1 = new Person('amanda', 'witecki', 34);

user1.greet('hi');
console.log(user1);