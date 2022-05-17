---
title: class
slug: Web/JavaScript/Reference/Statements/class
tags:
  - Classes
  - Declaration
  - ECMAScript 2015
  - JavaScript
  - Language feature
  - Reference
  - Statement
browser-compat: javascript.statements.class
---
{{jsSidebar("Statements")}}

The **class declaration** creates a new class
with a given name using prototype-based inheritance.

{{EmbedInteractiveExample("pages/js/statement-class.html")}}

You can also define a class using a {{jsxref("Operators/class", "class expression",
    "", 1)}}, which allows redeclarations and omitting class names. Attempting to place **class declaration** in the same scope, under the same name, will throw a {{jsxref("SyntaxError")}}.

## Syntax

```js
class name [extends otherName] {
  // class body
}
```

## Description

The class body of a class declaration is executed in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode). The
`constructor` method is optional.

Class declarations are not {{Glossary("Hoisting", "hoisted")}}
(unlike [function declarations](/en-US/docs/Web/JavaScript/Reference/Statements/function)).

## Examples

### A simple class declaration

In the following example, we first define a class named `Rectangle`, then
extend it to create a class named `FilledRectangle`.

Note that `super()`, used in the `constructor`, can only be used
in constructors, and _must_ be called _before_ the `this`
keyword can be used.

```js
class Rectangle {
  constructor(height, width) {
    this.name = 'Rectangle';
    this.height = height;
    this.width = width;
  }
}

class FilledRectangle extends Rectangle {
  constructor(height, width, color) {
    super(height, width);
    this.name = 'Filled rectangle';
    this.color = color;
  }
}
```

### Attempting to declare a class twice

Re-declaring a class using the class declaration throws a {{jsxref("SyntaxError")}}.

```js example-bad
class Foo {};
class Foo {}; // Uncaught SyntaxError: Identifier 'Foo' has already been declared
```

The same error is thrown when a class has been defined before using the class
expression.

```js example-bad
let Foo = class {};
class Foo {}; // Uncaught SyntaxError: Identifier 'Foo' has already been declared
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`function` declaration](/en-US/docs/Web/JavaScript/Reference/Statements/function)
- [`class` expression](/en-US/docs/Web/JavaScript/Reference/Operators/class)
- [Classes](/en-US/docs/Web/JavaScript/Reference/Classes)
