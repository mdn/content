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
class ChildClass extends ParentClass { /* ... */ }
```

## Description

The `extends` keyword can be used to subclass custom classes as well as
built-in objects.

The `.prototype` of the extension must be an {{jsxref("Object")}} or
{{jsxref("null")}}.

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

This example extends the built-in {{jsxref("Date")}} object. This example is extracted
from this [live
demo](https://googlechrome.github.io/samples/classes-es6/index.html) [(source)](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html).

```js
class myDate extends Date {

  getFormattedDate() {
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return this.getDate() + '-' + months[this.getMonth()] + '-' + this.getFullYear();
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
- [Anurag
  Majumdar - Super & Extends in JavaScript](https://medium.com/beginners-guide-to-mobile-web-development/super-and-extends-in-javascript-es6-understanding-the-tough-parts-6120372d3420)
