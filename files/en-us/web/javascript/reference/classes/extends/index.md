---
title: extends
slug: Web/JavaScript/Reference/Classes/extends
tags:
  - Classes
  - ECMAScript 2015
  - JavaScript
  - Language feature
browser-compat: javascript.classes.extends
---
{{jsSidebar("Classes")}}

The **`extends`** keyword is used in [class declarations](/en-US/docs/Web/JavaScript/Reference/Statements/class) or
[class expressions](/en-US/docs/Web/JavaScript/Reference/Operators/class) to
create a class that is a child of another class.

{{EmbedInteractiveExample("pages/js/classes-extends.html")}}

## Syntax

```js
class ChildClass extends ParentClass { /* … */ }
```

## Description

The `extends` keyword can be used to subclass custom classes as well as
built-in objects.

Any constructor that can be called with `new` (that is, it has the `prototype` property) can be the candidate for the parent class.

```js
function OldStyleClass() {
  this.someProperty = 1;
}
OldStyleClass.prototype.someMethod = function () {};

class ChildClass extends OldStyleClass {}

class ModernClass {
  someProperty = 1;
  someMethod() {}
}

class AnotherChildClass extends ModernClass {}
```

The `.prototype` of the `ParentClass` must be an {{jsxref("Object")}} or [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null).

```js
function ParentClass() {}
ParentClass.prototype = 3;

class ChildClass extends ParentClass {}
// Uncaught TypeError: Class extends value does not have valid prototype property 3
```

> **Note:** You would rarely worry about this in practice, because a non-object `prototype` doesn't behave as it should anyway.
>
> ```js
> function ParentClass() {}
> ParentClass.prototype = 3;
> console.log(Object.getPrototypeOf(new ParentClass()));
> // Logs "[Object: null prototype] {}": not actually a number!
> ```

`extends` will set the prototype for both `ChildClass` and `ChildClass.prototype`.

```js
class ParentClass {}
class ChildClass extends ParentClass {}

// Allows inheritance of static properties
Object.getPrototypeOf(ChildClass) === ParentClass;
// Allows inheritance of instance properties
Object.getPrototypeOf(ChildClass.prototype) === ParentClass.prototype;
```

The right-hand side of `extends` does not have to be an identifier. You can use any expression that evaluates to a constructor.

```js
class SomeClass extends class {
  constructor() {
    console.log("Base class");
  }
} {
  constructor() {
    super();
    console.log("Derived class");
  }
}

new SomeClass();
// Base class
// Derived class
```

This is often useful to create [mixins](/en-US/docs/Web/JavaScript/Reference/Classes#mix-ins).

## Examples

### Using extends

The first example creates a class called `Square` from a class called
`Polygon`. This example is extracted from this [live demo](https://googlechrome.github.io/samples/classes-es6/index.html) [(source)](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html).

```js
class Square extends Polygon {
  constructor(length) {
    // Here, it calls the parent class' constructor with lengths
    // provided for the Polygon's width and height
    super(length, length);
    // Note: In derived classes, super() must be called before you
    // can use 'this'. Leaving this out will cause a reference error.
    this.name = 'Square';
  }

  get area() {
    return this.height * this.width;
  }
}
```

### Using extends with built-in objects

This example extends the built-in {{jsxref("Date")}} object.
This example is extracted from this [live demo](https://googlechrome.github.io/samples/classes-es6/index.html)
[(source)](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html).

```js
class myDate extends Date {
  getFormattedDate() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Classes](/en-US/docs/Web/JavaScript/Reference/Classes)
- [constructor](/en-US/docs/Web/JavaScript/Reference/Classes/constructor)
- [super](/en-US/docs/Web/JavaScript/Reference/Operators/super)
- [Anurag Majumdar - Super & Extends in JavaScript](https://medium.com/beginners-guide-to-mobile-web-development/super-and-extends-in-javascript-es6-understanding-the-tough-parts-6120372d3420)
