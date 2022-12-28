---
title: Classes
slug: Web/JavaScript/Reference/Classes
page-type: guide
tags:
  - Classes
  - Constructors
  - ECMAScript 2015
  - Guide
  - Inheritance
  - Intermediate
  - JavaScript
browser-compat: javascript.classes
---

{{JsSidebar("Classes")}}

Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on [prototypes](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) but also have some syntax and semantics that are unique to classes.

For more examples and explanations, see the [Using classes](/en-US/docs/Web/JavaScript/Guide/Using_Classes) guide.

## Defining classes

Classes are in fact "special [functions](/en-US/docs/Web/JavaScript/Reference/Functions)", and just as you can define [function expressions](/en-US/docs/Web/JavaScript/Reference/Operators/function) and [function declarations](/en-US/docs/Web/JavaScript/Reference/Statements/function), a class can be defined in two ways: a [class expression](/en-US/docs/Web/JavaScript/Reference/Operators/class) or a [class declaration](/en-US/docs/Web/JavaScript/Reference/Statements/class).

```js
// Declaration
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// Expression; the class is anonymous but assigned to a variable
const Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// Expression; the class has its own name
const Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
```

Like function expressions, class expressions may be anonymous, or have a name that's different from the variable that it's assigned to. However, unlike function declarations, class declarations have the same [temporal dead zone](/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz) restrictions as `let` or `const` and behave as if they are [not hoisted](/en-US/docs/Web/JavaScript/Guide/Using_Classes#class_declaration_hoisting).

## Class body

The body of a class is the part that is in curly brackets `{}`. This is where you define class members, such as methods or constructor.

The body of a class is executed in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode) even without the `"use strict"` directive.

A class element can be characterized by three aspects:

- Kind: Getter, setter, method, or field
- Location: Static or instance
- Visibility: Public or private

Together, they add up to 16 possible combinations. To divide the reference more logically and avoid overlapping content, the different elements are introduced in detail in different pages:

- [Method definitions](/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions)
  - : Public instance method
- [getter](/en-US/docs/Web/JavaScript/Reference/Functions/get)
  - : Public instance getter
- [setter](/en-US/docs/Web/JavaScript/Reference/Functions/set)
  - : Public instance setter
- [Public class fields](/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields)
  - : Public instance field
- [`static`](/en-US/docs/Web/JavaScript/Reference/Classes/static)
  - : Public static method, getter, setter, and field
- [Private class features](/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)
  - : Everything that's private

In addition, there are two special class element syntaxes: [`constructor`](#constructor) and [static initialization blocks](#static_initialization_blocks), with their own references.

### Constructor

The {{jsxref("Classes/constructor", "constructor", "", "true")}} method is a special method for creating and initializing an object created with a `class`.
There can only be one special method with the name "constructor" in a class.
A {{jsxref("SyntaxError")}} will be thrown if the class contains more than one occurrence of a `constructor` method.

A constructor can use the `super` keyword to call the constructor of the super class.

### Static initialization blocks

[Static initialization blocks](/en-US/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) allow flexible initialization of [static properties](#static_methods_and_properties) including the evaluation of statements during initialization, and granting access to private scope.

Multiple static blocks can be declared, and these can be interleaved with the declaration of static properties and methods (all static items are evaluated in declaration order).

### Prototype methods

See also {{jsxref("Functions/Method_definitions", "method definitions", "", "true")}}.

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100
```

### Generator methods

See also [Iterators and generators](/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators).

```js
class Polygon {
  constructor(...sides) {
    this.sides = sides;
  }
  // Method
  *getSides() {
    for (const side of this.sides) {
      yield side;
    }
  }
}

const pentagon = new Polygon(1,2,3,4,5);

console.log([...pentagon.getSides()]); // [1,2,3,4,5]
```

### Static methods and fields

The {{jsxref("Classes/static", "static")}} keyword defines a static method or field for a class.
Static properties (fields and methods) are defined on the class itself instead of each instance.
Static methods are often used to create utility functions for an application, whereas static fields are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.

```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static displayName = "Point";
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.displayName; // undefined
p1.distance;    // undefined
p2.displayName; // undefined
p2.distance;    // undefined

console.log(Point.displayName);      // "Point"
console.log(Point.distance(p1, p2)); // 7.0710678118654755
```

### Binding `this` with prototype and static methods

When a static or prototype method is called without a value for {{jsxref("Operators/this", "this")}}, such as by assigning the method to a variable and then calling it, the `this` value will be `undefined` inside the method.
This behavior will be the same even if the {{jsxref("Strict_mode", "\"use strict\"")}} directive isn't present, because code within the `class` body's syntactic boundary is always executed in strict mode.

```js
class Animal {
  speak() {
    return this;
  }
  static eat() {
    return this;
  }
}

const obj = new Animal();
obj.speak(); // the Animal object
const speak = obj.speak;
speak(); // undefined

Animal.eat() // class Animal
const eat = Animal.eat;
eat(); // undefined
```

If we rewrite the above using traditional function-based syntax in non–strict mode, then `this` method calls are automatically bound to the initial `this` value, which by default is the {{Glossary("Global_object", "global object")}}.
In strict mode, autobinding will not happen; the value of `this` remains as passed.

```js
function Animal() { }

Animal.prototype.speak = function () {
  return this;
}

Animal.eat = function () {
  return this;
}

const obj = new Animal();
const speak = obj.speak;
speak(); // global object (in non–strict mode)

const eat = Animal.eat;
eat(); // global object (in non-strict mode)
```

### Instance properties

Instance properties must be defined inside of class methods:

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

### Field declarations

#### Public field declarations

With the JavaScript field declaration syntax, the above example can be written as:

```js
class Rectangle {
  height = 0;
  width;
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

Class fields are similar to object properties, not variables, so we don't use keywords such as `const` to declare them. In JavaScript, [private fields](#private_field_declarations) use a special identifier syntax, so modifier keywords like `public` and `private` should not be used either.

By declaring fields up-front, class definitions become more self-documenting, and the fields are always present.

As seen above, the fields can be declared with or without a default value.

See {{jsxref("Classes/Public_class_fields", "public class fields", "", "true")}} for more information.

#### Private field declarations

Using private fields, the definition can be refined as below.

```js
class Rectangle {
  #height = 0;
  #width;
  constructor(height, width) {
    this.#height = height;
    this.#width = width;
  }
}
```

It's an error to reference private fields from outside of the class; they can only be read or written within the class body.
By defining things that are not visible outside of the class, you ensure that your classes' users can't depend on internals, which may change from version to version.

> **Note:** Private fields can only be declared up-front in a field declaration.

Private fields cannot be created later through assigning to them, the way that normal properties can.

For more information, see {{jsxref("Classes/Private_class_fields", "private class features", "", "true")}}.

## Sub classing with `extends`

The {{jsxref("Classes/extends", "extends")}} keyword is used in _class declarations_ or _class expressions_ to create a class as a child of another class.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // call the super class constructor and pass in the name parameter
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const d = new Dog('Mitzie');
d.speak(); // Mitzie barks.
```

If there is a constructor present in the subclass, it needs to first call super() before using "this".

One may also extend traditional function-based "classes":

```js
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a noise.`);
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const d = new Dog('Mitzie');
d.speak(); // Mitzie barks.

// For similar methods, the child's method takes precedence over parent's method
```

Note that classes cannot extend regular (non-constructible) objects.
If you want to inherit from a regular object, you can instead use {{jsxref("Object.setPrototypeOf()")}}:

```js
const Animal = {
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
};

class Dog {
  constructor(name) {
    this.name = name;
  }
}

// If you do not do this you will get a TypeError when you invoke speak
Object.setPrototypeOf(Dog.prototype, Animal);

const d = new Dog('Mitzie');
d.speak(); // Mitzie makes a noise.
```

## Species

You might want to return {{jsxref("Array")}} objects in your derived array class `MyArray`.
The species pattern lets you override default constructors.

For example, when using methods such as {{jsxref("Array.prototype.map()")}} that returns the default constructor, you want these methods to return a parent `Array` object, instead of the `MyArray` object.
The {{jsxref("Symbol.species")}} symbol lets you do this:

```js
class MyArray extends Array {
  // Overwrite species to the parent Array constructor
  static get [Symbol.species]() { return Array; }
}

const a = new MyArray(1, 2, 3);
const mapped = a.map((x) => x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array);   // true
```

## Super class calls with `super`

The {{jsxref("Operators/super", "super")}} keyword is used to call corresponding methods of super class.
This is one advantage over prototype-based inheritance.

```js
class Cat {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(`${this.name} roars.`);
  }
}

const l = new Lion('Fuzzy');
l.speak();
// Fuzzy makes a noise.
// Fuzzy roars.
```

## Mix-ins

Abstract subclasses or _mix-ins_ are templates for classes.
An ECMAScript class can only have a single superclass, so multiple inheritance from tooling classes, for example, is not possible.
The functionality must be provided by the superclass.

A function with a superclass as input and a subclass extending that superclass as output can be used to implement mix-ins in ECMAScript:

```js
const calculatorMixin = (Base) => class extends Base {
  calc() { }
};

const randomizerMixin = (Base) => class extends Base {
  randomize() { }
};
```

A class that uses these mix-ins can then be written like this:

```js
class Foo { }
class Bar extends calculatorMixin(randomizerMixin(Foo)) { }
```

## Re-running a class definition

A class can't be redefined.
Attempting to do so produces a `SyntaxError`.

If you're experimenting with code in a web browser, such as the Firefox Web Console (**Tools** > **Web Developer** > **Web Console**) and you 'Run' a definition of a class with the same name twice, you'll get a `SyntaxError: redeclaration of let ClassName;`. (See further discussion of this issue in {{Bug(1428672)}}.) Doing something similar in Chrome Developer Tools gives you a message like `Uncaught SyntaxError: Identifier 'ClassName' has already been declared at <anonymous>:1:1`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Functions", "Functions", "", "true")}}
- {{jsxref("Statements/class", "class declaration", "", "true")}}
- {{jsxref("Operators/class", "class expression", "", "true")}}
- {{jsxref("Classes/Public_class_fields", "Public class fields", "", "true")}}
- {{jsxref("Classes/Private_class_fields", "Private class features", "", "true")}}
- {{jsxref("Operators/super", "super")}}
- [Blog post: "ES6 In Depth: Classes"](https://hacks.mozilla.org/2015/07/es6-in-depth-classes/)
- [Fields and public/private class properties proposal (stage 3)](https://github.com/tc39/proposal-class-fields)
