# The Four Pillars of OOP in TypeScript

## Introduction

The four pillars of Object-Oriented Programming (OOP) help developers manage complex applications more easily. These pillars are Inheritance, Polymorphism, Abstraction, and Encapsulation.

## Inheritance

Inheritance allows one class to reuse the properties and methods of another class. This reduces code duplication and makes the code easier to maintain.

```ts
class Person {
  name: string = "John";
}

class Student extends Person {
  grade: string = "A";
}
```

## Polymorphism

Polymorphism allows different classes to use the same method in different ways. This makes code more flexible and reusable.

```ts
class Animal {
  sound(): void {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  sound(): void {
    console.log("Bark");
  }
}
```

## Abstraction

Abstraction hides complex implementation details and only shows the necessary parts to the user. This helps reduce complexity in large projects.

```ts
abstract class Shape {
  abstract draw(): void;
}
```

## Encapsulation

Encapsulation protects data by controlling access to class properties. This improves security and keeps the application stable.

```ts
class User {
  private password: string = "12345";
}
```

## Conclusion

The four pillars of OOP help developers write clean, reusable, and maintainable TypeScript applications. They reduce complexity and improve code organization.