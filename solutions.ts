// Batch 7 - Assignment 1 - Md. Samin Israk (saminisrak1991@gmail.com)

// problem 1
function filterEvenNumbers(arr: number[]): number[] {
  const result = arr.filter((index) => index % 2 === 0)
  return result;
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// problem 2

function reverseString(str: string): string {
  const reverse = str.split('').reverse().join('');
  return reverse;
}

console.log(reverseString("typescript"));

// problem 3

type StringOrNumber = string | number;

function checkType(value: StringOrNumber): string {
  if (typeof value === "string"){
    return "String";
  } else{
    return "Number";
  }
}

console.log(checkType(54))

// problem 4

function getProperty <T, K extends keyof T> (obj: T, key: K): T[K]{
  return obj[key];
}

const user = { id: 1, name: "John Doe", age: 21 };
console.log(getProperty(user, "name"));

// problem 5 

interface Book {
  title: string;
  author: string;
  publishedYear: number
}

function toggleReadStatus (book: Book): Book & {isRead: boolean} {
  return {...book, isRead: true};
}

const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
console.log(toggleReadStatus(myBook));

// problem 6 

class Person {
  name: string;
  age: number;

  constructor (name: string, age: number){
    this.name = name;
    this.age  = age;
  }
}

class Student extends Person {
  grade: string;
  
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  //"Name: Alice, Age: 20, Grade: A";
  getDetails() : string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");
console.log(student.getDetails());

// problem 7

function getIntersection(arr1: number[], arr2: number[]): number[]{
  return arr1.filter((num) => arr2.includes(num));
}

console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]))
