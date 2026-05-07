// Problem 1 :

function filterEvenNumber(evenN: number[]): number[] {
  const eventNumber = evenN.filter((event) => event % 2 === 0);
  return eventNumber;
}
const checkEvenNumber = filterEvenNumber([1, 2, 3, 4, 5, 6]);

// Problem 2
function reverseString(reString: string): string {
  const reStringType = reString.split("").reverse().join("");
  return reStringType;
}
const reveseCheck = reverseString("Mofassel");

// Promlem 3
type StringOrNumber = string | number;
function checkType(StringOrNu: StringOrNumber): StringOrNumber {
  if (typeof StringOrNu === "string") {
    return StringOrNu;
  } else {
    return StringOrNu;
  }
}
const checkStringOrNum = checkType(22);

// problem 4:
function getProperty<T, Y extends keyof T>(typeOb: T, key: Y) {
  return typeOb[key];
}
const user = { id: 1, name: "John Doe", age: 21 };
getProperty(user, "name");
const checkNameVa = getProperty(user, "name");

//Problem 5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}
function toggleReadStatus(book: Book) {
  return {
    ...book,
    isRead: true,
  };
}
const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};
const myBookResult = toggleReadStatus(myBook);

// Problem 6
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");
const studentBoResult = student.getDetails();

// Problem 7 :

function getIntersection(num1: number[], num2: number[]): number[] {
  return num1.filter((arrEle) => num2.includes(arrEle));
}
const result = getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
