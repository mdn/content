---
title: class expression
slug: Web/JavaScript/Reference/Operators/class
page-type: javascript-operator
browser-compat: javascript.operators.class
---

{{jsSidebar("Operators")}}

The **`class`** keyword can be used to define a class inside an expression.

You can also define classes using the [`class` declaration](/en-US/docs/Web/JavaScript/Reference/Statements/class).

{{InteractiveExample("JavaScript Demo: Expressions - class expression")}}

```js interactive-example
const Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  area() {
    return this.height * this.width;
  }
};

console.log(new Rectangle(5, 8).area());
// Expected output: 40
```

## Syntax

```js-nolint
class {
  // class body
}
class name {
  // class body
}
```

> [!NOTE]
> An [expression statement](/en-US/docs/Web/JavaScript/Reference/Statements/Expression_statement) cannot begin with the keyword `class` to avoid ambiguity with a [`class` declaration](/en-US/docs/Web/JavaScript/Reference/Statements/class). The `class` keyword only begins an expression when it appears in a context that cannot accept statements.

## Description

A `class` expression is very similar to, and has almost the same syntax as, a [`class` declaration](/en-US/docs/Web/JavaScript/Reference/Statements/class). As with `class` declarations, the body of a `class` expression is executed in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode). The main difference between a `class` expression and a `class` declaration is the _class name_, which can be omitted in `class` expressions to create _anonymous_ classes. Class expressions allow you to redefine classes, while redeclaring a class using `class` declarations throws a {{jsxref("SyntaxError")}}. See also the chapter about [classes](/en-US/docs/Web/JavaScript/Reference/Classes) for more information.

## Examples

### A basic class expression

This is just an anonymous class expression which you can refer to using the variable `Foo`.

```js
const Foo = class {
  constructor() {}
  bar() {
    return "Hello World!";
  }
};

const instance = new Foo();
instance.bar(); // "Hello World!"
Foo.name; // "Foo"
```

### Named class expressions

If you want to refer to the current class inside the class body, you can create a _named class expression_. The name is only visible within the scope of the class expression itself.

```js
const Foo = class NamedFoo {
  constructor() {}
  whoIsThere() {
    return NamedFoo.name;
  }
};
const bar = new Foo();
bar.whoIsThere(); // "NamedFoo"
NamedFoo.name; // ReferenceError: NamedFoo is not defined
Foo.name; // "NamedFoo"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Statements/class", "class")}}
- {{jsxref("Classes", "Classes", "", 1)}}
