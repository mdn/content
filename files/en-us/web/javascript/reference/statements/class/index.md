---
title: class
slug: Web/JavaScript/Reference/Statements/class
page-type: javascript-statement
browser-compat: javascript.statements.class
---

{{jsSidebar("Statements")}}

The **`class`** declaration creates a {{glossary("binding")}} of a new [class](/en-US/docs/Web/JavaScript/Reference/Classes) to a given name.

You can also define classes using the [`class` expression](/en-US/docs/Web/JavaScript/Reference/Operators/class).

{{EmbedInteractiveExample("pages/js/statement-class.html")}}

## Syntax

```js-nolint
class name {
  // class body
}
class name extends otherName {
  // class body
}
```

## Description

The class body of a class declaration is executed in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode). The `class` declaration is very similar to {{jsxref("Statements/let", "let")}}:

- `class` declarations are scoped to blocks as well as functions.
- `class` declarations can only be accessed after the line of declaration is reached (see [temporal dead zone](/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)). For this reason, `class` declarations are commonly regarded as [non-hoisted](/en-US/docs/Glossary/Hoisting) (unlike [function declarations](/en-US/docs/Web/JavaScript/Reference/Statements/function)).
- `class` declarations do not create properties on {{jsxref("globalThis")}} when declared at the top level of a script (unlike [function declarations](/en-US/docs/Web/JavaScript/Reference/Statements/function)).
- `class` declarations cannot be [redeclared](/en-US/docs/Web/JavaScript/Reference/Statements/let#redeclarations) by any other declaration in the same scope.

Outside the class body, `class` declarations can be re-assigned like `let`, but you should avoid doing so. Within the class body, the binding is constant like `const`.

```js
class Foo {
  static {
    Foo = 1; // TypeError: Assignment to constant variable.
  }
}

class Foo2 {
  bar = (Foo2 = 1); // TypeError: Assignment to constant variable.
}

class Foo3 {}
Foo3 = 1;
console.log(Foo3); // 1
```

## Examples

### A simple class declaration

In the following example, we first define a class named `Rectangle`, then extend it to create a class named `FilledRectangle`.

Note that `super()`, used in the `constructor`, can only be used in constructors, and _must_ be called _before_ the `this` keyword can be used.

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`function`](/en-US/docs/Web/JavaScript/Reference/Statements/function)
- [`class` expression](/en-US/docs/Web/JavaScript/Reference/Operators/class)
- [Classes](/en-US/docs/Web/JavaScript/Reference/Classes)
