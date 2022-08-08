---
title: constructor
slug: Web/JavaScript/Reference/Classes/constructor
tags:
  - Classes
  - ECMAScript 2015
  - JavaScript
  - Language feature
browser-compat: javascript.classes.constructor
---
{{jsSidebar("Classes")}}

The `constructor` method is a special method of a {{jsxref("Statements/class", "class")}} for creating and initializing an object instance of that class.

{{EmbedInteractiveExample("pages/js/classes-constructor.html")}}

## Syntax

```js
constructor() { /* … */ }
constructor(argument0) { /* … */ }
constructor(argument0, argument1) { /* … */ }
constructor(argument0, argument1, /* … ,*/ argumentN) { /* … */ }
```

## Description

A constructor enables you to provide any custom initialization that must be done before any other methods can be called on an instantiated object.

```js
class Person {

  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name}`);
  }

}

const otto = new Person('Otto');

otto.introduce();
```

If you don't provide your own constructor, then a default constructor will be supplied for you.
If your class is a base class, the default constructor is empty:

```js
constructor() {}
```

If your class is a derived class, the default constructor calls the parent constructor, passing along any arguments that were provided:

```js
constructor(...args) {
  super(...args);
}
```

That enables code like this to work:

```js
class ValidationError extends Error {
  printCustomerMessage() {
    return `Validation failed :-( (details: ${this.message})`;
  }
}

try {
  throw new ValidationError("Not a valid phone number");
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(error.name); // This is Error instead of ValidationError!
    console.log(error.printCustomerMessage());
  } else {
    console.log('Unknown error', error);
    throw error;
  }
}
```

The `ValidationError` class doesn't need an explicit constructor, because it doesn't need to do any custom initialization.
The default constructor then takes care of initializing the parent `Error` from the argument it is given.

However, if you provide your own constructor, and your class derives from some parent class, then you must explicitly call the parent class constructor using `super`.
For example:

```js
class ValidationError extends Error {
  constructor(message) {
    super(message);  // call parent class constructor
    this.name = 'ValidationError';
    this.code = '42';
  }

  printCustomerMessage() {
    return `Validation failed :-( (details: ${this.message}, code: ${this.code})`;
  }
}

try {
  throw new ValidationError("Not a valid phone number");
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(error.name); // Now this is ValidationError!
    console.log(error.printCustomerMessage());
  } else {
    console.log('Unknown error', error);
    throw error;
  }
}
```

There can be only one special method with the name `constructor` in a class.
Having more than one occurrence of a `constructor` method in a class will throw a {{jsxref("SyntaxError")}} error. Having a getter or setter called `constructor` is also a {{jsxref("SyntaxError")}}.

The `constructor` follows normal method syntax, so [parameter default values](/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters), [rest parameters](/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters), etc. can all be used.

```js
class Person {
  constructor(name = 'Anonymous') {
    this.name = name;
  }
  introduce() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person = new Person();
person.introduce(); // Hello, my name is Anonymous
```

The constructor must be a literal name. Computed properties cannot become constructors.

```js
class Foo {
  // This is a computed property. It will not be picked up as a constructor.
  ['constructor']() {
    console.log('called');
    this.a = 1;
  }
}

const foo = new Foo(); // No log
console.log(foo); // Foo {}
foo.constructor(); // Logs "called"
console.log(foo); // Foo { a: 1 }
```

## Examples

### Using the `constructor` method

This code snippet is taken from the [classes sample](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html) ([live demo](https://googlechrome.github.io/samples/classes-es6/index.html)).

```js
class Square extends Polygon {
  constructor(length) {
    // Here, it calls the parent class' constructor with lengths
    // provided for the Polygon's width and height
    super(length, length);
    // NOTE: In derived classes, `super()` must be called before you
    // can use `this`. Leaving this out will cause a ReferenceError.
    this.name = 'Square';
  }

  get area() {
    return this.height * this.width;
  }

  set area(value) {
    this.height = value ** 0.5;
    this.width = value ** 0.5;
  }
}
```

### Another example

Here the prototype of `Square` class is changed—but the constructor of its base class `Polygon` is still called when a new instance of a square is created.

```js
class Polygon {
  constructor() {
    this.name = "Polygon";
  }
}

class Square extends Polygon {
  constructor() {
    super();
  }
}

class Rectangle {}

Object.setPrototypeOf(Square.prototype, Rectangle.prototype);

console.log(Object.getPrototypeOf(Square.prototype) === Polygon.prototype); //false
console.log(Object.getPrototypeOf(Square.prototype) === Rectangle.prototype); //true

const newInstance = new Square();
console.log(newInstance.name); //Polygon
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Operators/super", "super()")}}
- {{jsxref("Statements/class", "class declaration", "", "true")}}
- {{jsxref("Operators/class", "class expression", "", "true")}}
- {{jsxref("Classes")}}
- [Object.prototype.constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)
- [Class static initialization block](/en-US/docs/Web/JavaScript/Reference/Classes/Class_static_initialization_blocks)
