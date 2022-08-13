---
title: class expression
slug: Web/JavaScript/Reference/Operators/class
tags:
  - Classes
  - ECMAScript 2015
  - Expression
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.class
---
{{jsSidebar("Operators")}}

The **class expression** is one way to define a class. Similar to [function expressions](/en-US/docs/Web/JavaScript/Reference/Operators/function), class expressions can be named or unnamed. If named, the name of the class is local to the class body only.

JavaScript classes use prototype-based inheritance.

{{EmbedInteractiveExample("pages/js/expressions-classexpression.html")}}

## Syntax

```js
const MyClass = class [className] [extends otherClassName] {
  // class body
}
```

## Description

A class expression has a similar syntax to a {{jsxref("Statements/class", "class
  declaration (statement)", "", "true")}}. As with `class` statements, the body
of a `class` expression is executed in {{jsxref("Strict_mode", "strict mode",
  "", 1)}}.

There are several differences between class expressions and
{{jsxref("Statements/class", "class statements", "", "true")}}, however:

- Class expressions may omit the class name ("binding identifier"), which is not
  possible with {{jsxref("Statements/class", "class statements", "", "true")}}.
- Class expressions allow you to redefine (re-declare) classes **without
  throwing** a {{jsxref("Global_Objects/SyntaxError", "SyntaxError")}}. This is
  not the case with {{jsxref("Statements/class", "class statements", "", "true")}}.

The `constructor` method is optional. Classes generated with class
expressions will always respond to {{jsxref("Operators/typeof", "typeof")}} with the
value `"function"`.

```js
'use strict';
let Foo = class {};  // constructor property is optional
Foo = class {};      // Re-declaration is allowed

typeof Foo;             // returns "function"
typeof class {};        // returns "function"

Foo instanceof Object;   // true
Foo instanceof Function; // true
class Foo {}            // Throws SyntaxError (class declarations do not allow re-declaration)
```

## Examples

### A simple class expression

This is just a simple anonymous class expression which you can refer to using the
variable `Foo`.

```js
const Foo = class {
  constructor() {}
  bar() {
    return 'Hello World!';
  }
};

const instance = new Foo();
instance.bar();  // "Hello World!"
Foo.name;        // "Foo"
```

### Named class expressions

If you want to refer to the current class inside the class body, you can create a
_named class expression_. The name is only visible within the scope of the class
expression itself.

```js
const Foo = class NamedFoo {
  constructor() {}
  whoIsThere() {
    return NamedFoo.name;
  }
}
const bar = new Foo();
bar.whoIsThere();  // "NamedFoo"
NamedFoo.name;     // ReferenceError: NamedFoo is not defined
Foo.name;          // "NamedFoo"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Operators/function", "function expression", "", "true")}}
- {{jsxref("Statements/class", "class declaration", "", "true")}}
- {{jsxref("Classes", "Classes", "", "true")}}
