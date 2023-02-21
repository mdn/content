---
title: Classes
slug: Web/JavaScript/Reference/Classes
page-type: guide
browser-compat: javascript.classes
---

{{JsSidebar("Classes")}}

Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on [prototypes](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) but also have some syntax and semantics that are unique to classes.

For more examples and explanations, see the [Using classes](/en-US/docs/Web/JavaScript/Guide/Using_Classes) guide.

## Description

### Defining classes

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

### Class body

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

> **Note:** Private features have the restriction that all property names declared in the same class must be unique. All other public properties do not have this restriction — you can have multiple public properties with the same name, and the last one overwrites the others. This is the same behavior as in [object initializers](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#duplicate_property_names).

In addition, there are two special class element syntaxes: [`constructor`](#constructor) and [static initialization blocks](#static_initialization_blocks), with their own references.

#### Constructor

The {{jsxref("Classes/constructor", "constructor")}} method is a special method for creating and initializing an object created with a class. There can only be one special method with the name "constructor" in a class — a {{jsxref("SyntaxError")}} is thrown if the class contains more than one occurrence of a `constructor` method.

A constructor can use the [`super`](/en-US/docs/Web/JavaScript/Reference/Operators/super) keyword to call the constructor of the super class.

You can create instance properties inside the constructor:

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

Alternatively, if your instance properties' values do not depend on the constructor's arguments, you can define them as [class fields](#field_declarations).

#### Static initialization blocks

[Static initialization blocks](/en-US/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) allow flexible initialization of [static properties](#static_methods_and_fields), including the evaluation of statements during initialization, while granting access to the private scope.

Multiple static blocks can be declared, and these can be interleaved with the declaration of static fields and methods (all static items are evaluated in declaration order).

#### Methods

Methods are defined on the prototype of each class instance and are shared by all instances. Methods can be plain functions, async functions, generator functions, or async generator functions. For more information, see [method definitions](/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions).

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
  *getSides() {
    yield this.height;
    yield this.width;
    yield this.height;
    yield this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100
console.log([...square.getSides()]); // [10, 10, 10, 10]
```

#### Static methods and fields

The {{jsxref("Classes/static", "static")}} keyword defines a static method or field for a class. Static properties (fields and methods) are defined on the class itself instead of each instance. Static methods are often used to create utility functions for an application, whereas static fields are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.

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
p1.distance; // undefined
p2.displayName; // undefined
p2.distance; // undefined

console.log(Point.displayName); // "Point"
console.log(Point.distance(p1, p2)); // 7.0710678118654755
```

#### Field declarations

With the class field declaration syntax, the [constructor](#constructor) example can be written as:

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

Class fields are similar to object properties, not variables, so we don't use keywords such as `const` to declare them. In JavaScript, [private features](#private_class_features) use a special identifier syntax, so modifier keywords like `public` and `private` should not be used either.

As seen above, the fields can be declared with or without a default value. Fields without default values default to `undefined`. By declaring fields up-front, class definitions become more self-documenting, and the fields are always present, which help with optimizations.

See [public class fields](/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields) for more information.

#### Private class features

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

Private fields can only be declared up-front in a field declaration. They cannot be created later through assigning to them, the way that normal properties can.

For more information, see [private class features](/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields).

### Inheritance

The {{jsxref("Classes/extends", "extends")}} keyword is used in _class declarations_ or _class expressions_ to create a class as a child of another constructor (either a class or a function).

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

const d = new Dog("Mitzie");
d.speak(); // Mitzie barks.
```

If there is a constructor present in the subclass, it needs to first call `super()` before using `this`. The {{jsxref("Operators/super", "super")}} keyword can also be used to call corresponding methods of super class.

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

const l = new Lion("Fuzzy");
l.speak();
// Fuzzy makes a noise.
// Fuzzy roars.
```

## Examples

### Binding this with instance and static methods

When a static or instance method is called without a value for {{jsxref("Operators/this", "this")}}, such as by assigning the method to a variable and then calling it, the `this` value will be `undefined` inside the method. This behavior is the same even if the {{jsxref("Strict_mode", "\"use strict\"")}} directive isn't present, because code within the `class` body is always executed in strict mode.

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

Animal.eat(); // class Animal
const eat = Animal.eat;
eat(); // undefined
```

If we rewrite the above using traditional function-based syntax in non–strict mode, then `this` method calls are automatically bound to {{jsxref("globalThis")}}. In strict mode, the value of `this` remains as `undefined`.

```js
function Animal() {}

Animal.prototype.speak = function () {
  return this;
};

Animal.eat = function () {
  return this;
};

const obj = new Animal();
const speak = obj.speak;
speak(); // global object (in non–strict mode)

const eat = Animal.eat;
eat(); // global object (in non-strict mode)
```

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
