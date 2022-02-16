---
title: Classes
slug: Web/JavaScript/Reference/Classes
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

Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.

## Defining classes

Classes are in fact "special {{jsxref("Functions", "functions", "", "true")}}", and just as you can define {{jsxref("Operators/function", "function expressions", "", "true")}} and {{jsxref("Statements/function", "function declarations", "", "true")}}, the class syntax has two components: {{jsxref("Operators/class", "class expressions", "", "true")}} and {{jsxref("Statements/class", "class declarations", "", "true")}}.

### Class declarations

One way to define a class is using a **class declaration**. To declare a class, you use the `class` keyword with the name of the class ("Rectangle" here).

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

#### Hoisting

An important difference between **function declarations** and **class declarations** is that while functions can be called in code that appears before they are defined, classes must be defined before they can be constructed. Code like the following will throw a {{jsxref("ReferenceError")}}:

```js example-bad
const rect = new Rectangle(); // ReferenceError

class Rectangle {}
```

This occurs because while the class is {{Glossary("Hoisting", "hoisted")}} its values are not initialized.

### Class expressions

A **class expression** is another way to define a class. Class expressions can be named or unnamed. The name given to a named class expression is local to the class's body. However, it can be accessed via the {{jsxref("Function.name", "name")}} property.

```js
const Rectangle = class { // unnamed
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name); // Rectangle
```

```js
const Abstraction = class Rectangle { // named
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Abstraction.name); // Rectangle2
```

> **Note:** Class **expressions** must be declared before they can be used (they are subject to the same hoisting restrictions as described in the [class declarations](#class_declarations) section).

## Class body and method definitions

The body of a class is the part that is in curly brackets `{}`. This is where you define class members, such as methods or constructor.

### Strict mode

The body of a class is executed in {{jsxref("Strict_mode", "strict mode", "", "true")}}, i.e., code written here is subject to stricter syntax for increased performance, some otherwise silent errors will be thrown, and certain keywords are reserved for future versions of ECMAScript.

### Constructor

The {{jsxref("Classes/constructor", "constructor", "", "true")}} method is a special method for creating and initializing an object created with a `class`. There can only be one special method with the name "constructor" in a class. A {{jsxref("SyntaxError")}} will be thrown if the class contains more than one occurrence of a `constructor` method.

A constructor can use the `super` keyword to call the constructor of the super class.

### Static initialization blocks

[Class `static` initialization blocks](/en-US/docs/Web/JavaScript/Reference/Classes/Class_static_initialization_blocks) allow flexible initialization of [class `static` properties](#static_methods_and_properties) including the evaluation of statements during initialization, and granting access to private scope.

Multiple static blocks can be declared, and these can be interleaved with the declaration of static properties and methods (all static items are evaluated in declaration order).

### Prototype methods

See also {{jsxref("Functions/Method_definitions", "method definitions", "", "true")}}.

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get area() { // Getter
    return this.calcArea();
  }

  calcArea() { // Method
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

  *getSides() { // Generator method
    for (const side of this.sides) {
      yield side;
    }
  }
}

const pentagon = new Polygon(1, 2, 3, 4, 5);
console.log([...pentagon.getSides()]); // [1, 2, 3, 4, 5]
```

### Static methods and properties

The {{jsxref("Classes/static", "static", "", "true")}} keyword defines a static method or property for a class. Static members (properties and methods) are called without instantiating their class and **cannot** be called through a class instance. Static methods are often used to create utility functions for an application, whereas static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.

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

console.log(p1.displayName);  // undefined
console.log(p1.distance);     // undefined
console.log(p2.displayName);  // undefined
console.log(p2.distance);     // undefined

console.log(Point.displayName);       // Point
console.log(Point.distance(p1, p2));  // 7.0710678118654755
```

### Binding `this` with prototype and static methods

When a static or prototype method is called without a value for {{jsxref("Operators/this", "this")}}, such as by assigning the method to a variable and then calling it, the `this` value will be `undefined` inside the method.
This behavior will be the same even if the {{jsxref("Strict_mode", "\"use strict\"")}} directive isn't present, because code within the `class` body's syntactic boundary is always executed in strict mode.

```js
class Polygon {
  getInstance() {
    return this;
  }

  static getClass() {
    return this;
  }
}

const polygon = new Polygon();
console.log(polygon.getInstance());  // Polygon

const { getInstance } = polygon;
console.log(getInstance());  // undefined

console.log(Polygon.getClass());  // [class Polygon]

const { getClass } = Polygon;
console.log(getClass());  // undefined
```

If we rewrite the above using traditional function-based syntax in non–strict mode, then `this` method calls are automatically bound to the initial `this` value, which by default is the {{Glossary("Global_object", "global object")}}.
In strict mode, autobinding will not happen; the value of `this` remains as passed.

```js
function Polygon() {}

Polygon.prototype.getInstance = function() {
  return this;
};

Polygon.getClass = function() {
  return this;
};

const polygon = new Polygon();
const { getInstance } = polygon;
console.log(getInstance());
// global object (in non–strict mode)
// undefined in strict mode

const { getClass } = Polygon;
console.log(getClass());
// global object (in non–strict mode)
// undefined in strict mode
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
class Polygon {
  constructor(...points) {
    this.points = points;
  }

  area() {
    let value = 0;
    let d = this.points[this.points.length - 1];
    for (const p of this.points) {
      value += p.x * d.y - d.x * p.y;
      d = p;
    }
    return Math.abs(value) / 2;
  }
}

class Rectangle extends Polygon {
  constructor(x1, y1, x2, y2) {
    super(
      { x: x1, y: y1 },
      { x: x2, y: y1 },
      { x: x2, y: y2 },
      { x: x1, y: y2 }
    );
  }

  area() {
    const [a, b, c] = this.points;
    const width = a.x - b.x;
    const height = a.y - c.y;
    return Math.abs(width * height);
  }
}

const rectangle = new Rectangle(10, 10, 30, -10);
console.log(rectangle.area());  // 400

const polygon = new Polygon({ x: 0, y: 0 }, { x: 15, y: 0 }, { x: 0, y: 15 });
console.log(polygon.area());  // 112.5
```

If there is a constructor present in the subclass, it needs to first call super() before using "this".

One may also extend traditional function-based "classes":

```js
function Polygon(...points) {
  this.points = points;
};

Polygon.prototype.toString = function() {
  return this.points.map((p) => `(${p.x}, ${p.y})`).join('; ');
};

class Triangle extends Polygon {
  toString() {
    const [a, b, c] = this.points;
    return `A (${a.x}, ${a.y}); B (${b.x}, ${b.y}); C (${c.x}, ${c.y})`;
  }
}

const triangle = new Triangle({ x: 0, y: 0 }, { x: 15, y: 0 }, { x: 0, y: 15 });
console.log(triangle.toString());  // A (0, 0); B (15, 0); C (0, 15)'

// For similar methods, the child's method takes precedence over parent's method
```

Note that classes cannot extend regular (non-constructible) objects. If you want to inherit from a regular object, you can instead use {{jsxref("Object.setPrototypeOf()")}}:

```js
const Polygon = {
  toString() {
    return this.points.map((p) => `(${p.x}, ${p.y})`).join('; ');
  }
};

class Triangle {
  constructor(...points) {
    this.points = points;
  }
}

Object.setPrototypeOf(Triangle.prototype, Polygon);
const triangle = new Triangle({ x: 0, y: 0 }, { x: 15, y: 0 }, { x: 0, y: 15 });
console.log(triangle.toString());  // (0, 0); (15, 0); (0, 15)
```

## Species

You might want to return {{jsxref("Array")}} objects in your derived array class `MyArray`.
The species pattern lets you override default constructors.

For example, when using methods such as {{jsxref("Array.map", "map()")}} that returns the default constructor, you want these methods to return a parent `Array` object, instead of the `MyArray` object.
The {{jsxref("Symbol.species")}} symbol lets you do this:

```js
class MyArray extends Array {
  // Overwrite species to the parent Array constructor
  static get [Symbol.species]() {
    return Array;
  }
}

const array = new MyArray(1, 2, 3);
const squares = array.map((x) => x * x);

console.log(squares instanceof MyArray);  // false
console.log(squares instanceof Array);    // true
```

## Super class calls with `super`

The {{jsxref("Operators/super", "super")}} keyword is used to call corresponding methods of super class.
This is one advantage over prototype-based inheritance.

```js
class Polygon {
  constructor(...points) {
    this.points = points;
  }

  toString() {
    return this.points.map((p) => `(${p.x}, ${p.y})`).join('; ');
  }
};

class Triangle extends Polygon {
  toString() {
    return `Triangle { ${super.toString()} }`;
  }
}

const triangle = new Triangle({ x: 0, y: 0 }, { x: 15, y: 0 }, { x: 0, y: 15 });
console.log(triangle.toString());
```

## Class Mix-ins

Abstract subclasses or _class mix-ins_ are templates for classes.
An ECMAScript class can only have a single superclass, so multiple inheritance from tooling classes, for example, is not possible.
The functionality must be provided by the superclass.

A function with a superclass as input and a subclass extending that superclass as output can be used to implement class mix-ins in ECMAScript:

```js
const serializable = (Category) => class extends Category {
  toString() {
    return `[${this.x}, ${this.y}, ${this.width}, ${this.height}]`;
  }
};

const measurable = (Category) => class extends Category {
  get area() {
    return this.width * this.height;
  }
};

const movable = (Category) => class extends Category {
  move(x, y) {
    this.x += x;
    this.y += y;
  }
};
```

A class that uses these _class mix-ins_ can then be written like this:

```js
class Rect {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}

class Rectangle extends movable(measurable(serializable(Rect))) {}

const rect = new Rectangle(10, 20, 50, 50);
console.log(rect.toString());
console.log('Area:', rect.area);
```

## Re-running a class definition

A class can't be redefined. Attempting to do so produces a `SyntaxError`.

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
