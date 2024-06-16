type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Amanda',
  privileges: ['test'],
  startDate: new Date(),
};

type CombinableTwo = string | number;
type Numeric = number | boolean;
type Universal = CombinableTwo & Numeric; // is numeric because number is the only intersection of the two types

// typeguard example: type checking

function addItems(a: CombinableTwo, b: CombinableTwo) {
  if (typeof a === 'string' || typeof b === 'string') return a.toString() + b.toString();
  return a + b;
}

// typeguard example: property on object

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ', emp.name);

  if ('privileges' in emp) {
    console.log('Privileges: ', emp.privileges);
  }
}

// typeguard example: instance of

class Car {
  drive() {
    console.log('Driving..');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck..');
  }

  loadCargo(a: number) {
    console.log('loading cargo ', a);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(v: Vehicle) {
  if (v instanceof Truck) {
    console.log(v.loadCargo(100));
  }
}

// discriminated unions: has one property in each class/interface/type which can be used to typeguard

interface Bird {
  kind: 'bird';
  flyingSpeed: number;
}

interface Horse {
  kind: 'horse';
  groundSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.kind) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.groundSpeed;
      break;
  }
  console.log('moving with speed: ', speed);
}

moveAnimal({ kind: 'bird', flyingSpeed: 100 });

// typecasting

// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!; // equal to below
const userInputElement = document.getElementById('user-input')! as HTMLInputElement; // equal to above

userInputElement.value = 'hi';


// index types

interface ErrorContainer {
  [prop: string]: string;
}

const error1: ErrorContainer = {
  email: 'not a valid email',
};

const error2: ErrorContainer = {
  username: 'not a valid username',
  dob: 'not over eighteen'
}

// function overloads

function addTwo(a: number, b: number): number;
function addTwo(a: string, b: string): string;
function addTwo(a: number, b: string): string;
function addTwo(a: string, b: number): string;
function addTwo(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') return a.toString() + b.toString();
  return a + b;
}

const result1 = addTwo(10, 2);
const result2 = addTwo('A', 'B');

// optional chaining

const fetchedUserData = {
  id: '1',
  name: 'Amanda',
  job: {
    title: 'CEO',
    description: 'test',
    startDate: 'May',
  }
};

console.log(fetchedUserData.job.title);
console.log(fetchedUserData?.job?.startDate);

// nullish coalescing

const userInputTest = null;
const storedData = userInputTest ?? 'DEFAULT';
console.log(storedData);