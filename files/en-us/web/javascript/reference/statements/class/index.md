---
title: class
slug: Web/JavaScript/Reference/Statements/class
page-type: javascript-statement
browser-compat: javascript.statements.class
---

{{jsSidebar("Statements")}}

The **`class`** declaration creates a new class
with a given name using prototype-based inheritance.

You can also define a class using a {{jsxref("Operators/class", "class expression",
    "", 1)}}, which allows redeclarations and omitting class names. Attempting to place **class declaration** in the same scope, under the same name, will throw a {{jsxref("SyntaxError")}}.

{{EmbedInteractiveExample("pages/js/statement-class.html")}}

## Syntax

```js-nolint
class name [extends otherName] {
  // class body
}
```

## Description

The class body of a class declaration is executed in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode). The
`constructor` method is optional.

Class declarations behave like [`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let) and [`const`](/en-US/docs/Web/JavaScript/Reference/Statements/const) and are not {{Glossary("Hoisting", "hoisted")}}
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
    this.name = "Rectangle";
    this.height = height;
    this.width = width;
  }
}

class FilledRectangle extends Rectangle {
  constructor(height, width, color) {
    super(height, width);
    this.name = "Filled rectangle";
    this.color = color;
  }
}
```

### Attempting to declare a class twice

Re-declaring a class using the class declaration throws a {{jsxref("SyntaxError")}}.

```js example-bad
class Foo {}
class Foo {} // Uncaught SyntaxError: Identifier 'Foo' has already been declared
```

The same error is thrown when a class has been defined before using the class
expression.

```js example-bad
let Foo = class {};
class Foo {} // Uncaught SyntaxError: Identifier 'Foo' has already been declared
```

If you're experimenting in a REPL, such as the Firefox web console (**Tools** > **Web Developer** > **Web Console**), and you run two class declarations with the same name in two separate inputs, you may get the same re-declaration error. See further discussion of this issue in [Firefox bug 1580891](https://bugzil.la/1580891). The Chrome console allows class re-declarations between different REPL inputs.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`function` declaration](/en-US/docs/Web/JavaScript/Reference/Statements/function)
- [`class` expression](/en-US/docs/Web/JavaScript/Reference/Operators/class)
- [Classes](/en-US/docs/Web/JavaScript/Reference/Classes)
