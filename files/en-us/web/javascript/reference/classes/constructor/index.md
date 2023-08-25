---
title: constructor
slug: Web/JavaScript/Reference/Classes/constructor
page-type: javascript-language-feature
browser-compat: javascript.classes.constructor
---

{{jsSidebar("Classes")}}

The **`constructor`** method is a special method of a [class](/en-US/docs/Web/JavaScript/Reference/Classes) for creating and initializing an object instance of that class.

> **Note:** This page introduces the `constructor` syntax. For the `constructor` property present on all objects, see {{jsxref("Object.prototype.constructor")}}.

{{EmbedInteractiveExample("pages/js/classes-constructor.html")}}

## Syntax

```js-nolint
constructor() { /* … */ }
constructor(argument0) { /* … */ }
constructor(argument0, argument1) { /* … */ }
constructor(argument0, argument1, /* …, */ argumentN) { /* … */ }
```

There are some additional syntax restrictions:

- A class method called `constructor` cannot be a [getter](/en-US/docs/Web/JavaScript/Reference/Functions/get), [setter](/en-US/docs/Web/JavaScript/Reference/Functions/set), [async](/en-US/docs/Web/JavaScript/Reference/Statements/async_function), or [generator](/en-US/docs/Web/JavaScript/Reference/Statements/function*).
- A class cannot have more than one `constructor` method.

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

const otto = new Person("Otto");

otto.introduce(); // Hello, my name is Otto
```

If you don't provide your own constructor, then a default constructor will be supplied for you.
If your class is a base class, the default constructor is empty:

```js-nolint
constructor() {}
```

If your class is a derived class, the default constructor calls the parent constructor, passing along any arguments that were provided:

```js-nolint
constructor(...args) {
  super(...args);
}
```

> **Note:** The difference between an explicit constructor like the one above and the default constructor is that the latter doesn't actually invoke [the array iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator) through [argument spreading](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax).

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
    console.log("Unknown error", error);
    throw error;
  }
}
```

The `ValidationError` class doesn't need an explicit constructor, because it doesn't need to do any custom initialization.
The default constructor then takes care of initializing the parent `Error` from the argument it is given.

However, if you provide your own constructor, and your class derives from some parent class, then you must explicitly call the parent class constructor using [`super()`](/en-US/docs/Web/JavaScript/Reference/Operators/super).
For example:

```js
class ValidationError extends Error {
  constructor(message) {
    super(message); // call parent class constructor
    this.name = "ValidationError";
    this.code = "42";
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
    console.log("Unknown error", error);
    throw error;
  }
}
```

Using [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new) on a class goes through the following steps:

1. (If it's a derived class) The `constructor` body before the `super()` call is evaluated. This part should not access `this` because it's not yet initialized.
2. (If it's a derived class) The `super()` call is evaluated, which initializes the parent class through the same process.
3. The current class's [fields](/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields) are initialized.
4. The `constructor` body after the `super()` call (or the entire body, if it's a base class) is evaluated.

Within the `constructor` body, you can access the object being created through [`this`](/en-US/docs/Web/JavaScript/Reference/Operators/this) and access the class that is called with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new) through [`new.target`](/en-US/docs/Web/JavaScript/Reference/Operators/new.target). Note that methods (including [getters](/en-US/docs/Web/JavaScript/Reference/Functions/get) and [setters](/en-US/docs/Web/JavaScript/Reference/Functions/set)) and the [prototype chain](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) are already initialized on `this` before the `constructor` is executed, so you can even access methods of the subclass from the constructor of the superclass. However, if those methods use `this`, the `this` will not have been fully initialized yet. This means reading public fields of the derived class will result in `undefined`, while reading private fields will result in a `TypeError`.

```js example-bad
new (class C extends class B {
  constructor() {
    console.log(this.foo());
  }
} {
  #a = 1;
  foo() {
    return this.#a; // TypeError: Cannot read private member #a from an object whose class did not declare it
    // It's not really because the class didn't declare it,
    // but because the private field isn't initialized yet
    // when the superclass constructor is running
  }
})();
```

The `constructor` method may have a return value. While the base class may return anything from its constructor, the derived class must return an object or `undefined`, or a {{jsxref("TypeError")}} will be thrown.

```js
class ParentClass {
  constructor() {
    return 1;
  }
}

console.log(new ParentClass()); // ParentClass {}
// The return value is ignored because it's not an object
// This is consistent with function constructors

class ChildClass extends ParentClass {
  constructor() {
    return 1;
  }
}

console.log(new ChildClass()); // TypeError: Derived constructors may only return object or undefined
```

If the parent class constructor returns an object, that object will be used as the `this` value on which [class fields](/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields) of the derived class will be defined. This trick is called ["return overriding"](/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields#returning_overriding_object), which allows a derived class's fields (including [private](/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields) ones) to be defined on unrelated objects.

The `constructor` follows normal [method](/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions) syntax, so [parameter default values](/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters), [rest parameters](/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters), etc. can all be used.

```js
class Person {
  constructor(name = "Anonymous") {
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
  ["constructor"]() {
    console.log("called");
    this.a = 1;
  }
}

const foo = new Foo(); // No log
console.log(foo); // Foo {}
foo.constructor(); // Logs "called"
console.log(foo); // Foo { a: 1 }
```

Async methods, generator methods, accessors, and class fields are forbidden from being called `constructor`. Private names cannot be called `#constructor`. Any member named `constructor` must be a plain method.

## Examples

### Using the constructor

This code snippet is taken from the [classes sample](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html) ([live demo](https://googlechrome.github.io/samples/classes-es6/index.html)).

```js
class Square extends Polygon {
  constructor(length) {
    // Here, it calls the parent class' constructor with lengths
    // provided for the Polygon's width and height
    super(length, length);
    // NOTE: In derived classes, `super()` must be called before you
    // can use `this`. Leaving this out will cause a ReferenceError.
    this.name = "Square";
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

### Calling super in a constructor bound to a different prototype

`super()` calls the constructor that's the prototype of the current class. If you change the prototype of the current class itself, `super()` will call the constructor that's the new prototype. Changing the prototype of the current class's `prototype` property doesn't affect which constructor `super()` calls.

```js
class Polygon {
  constructor() {
    this.name = "Polygon";
  }
}

class Rectangle {
  constructor() {
    this.name = "Rectangle";
  }
}

class Square extends Polygon {
  constructor() {
    super();
  }
}

// Make Square extend Rectangle (which is a base class) instead of Polygon
Object.setPrototypeOf(Square, Rectangle);

const newInstance = new Square();

// newInstance is still an instance of Polygon, because we didn't
// change the prototype of Square.prototype, so the prototype chain
// of newInstance is still
//   newInstance --> Square.prototype --> Polygon.prototype
console.log(newInstance instanceof Polygon); // true
console.log(newInstance instanceof Rectangle); // false

// However, because super() calls Rectangle as constructor, the name property
// of newInstance is initialized with the logic in Rectangle
console.log(newInstance.name); // Rectangle
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using classes](/en-US/docs/Web/JavaScript/Guide/Using_classes)
- [Classes](/en-US/docs/Web/JavaScript/Reference/Classes)
- [Static initialization blocks](/en-US/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)
- {{jsxref("Statements/class", "class")}}
- {{jsxref("Operators/super", "super()")}}
- {{jsxref("Object.prototype.constructor")}}
