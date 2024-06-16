// generic types
const names: Array<string> = [];
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('resolved');
  }, 2000)
});

// generic functions and constraints

function merge<T extends Object, U extends Object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
const mergedOjb = merge({ name: 'Amanda' }, { age: 34 });
console.log(mergedOjb.name);

interface Lengthy {
  length: number;
}
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let description = 'No Value';
  if (element.length > 0) description = `Got ${element.length} elements`;
  return [element, description];
}
console.log(countAndDescribe('hi there'));

// constraints

function extractAndConvert<T extends Object, U extends keyof T>(obj: T, key: U) {
  return `value: ${obj[key]}`;
}

console.log(extractAndConvert({ name: 'amanda' }, 'name'));

// generic classes

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data]
  }
}

const store1 = new DataStorage<string>();
store1.addItem('one');

const store2 = new DataStorage<number>();
store2.addItem(1);

// generic utility types

// Partial

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}
function createCourseGoal(title: string, description: string, date: Date) {
  let courseGoal: Partial<CourseGoal> = {}
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

// read only

const firstNames: Readonly<string[]> = ['Amanda', 'Jane'];
