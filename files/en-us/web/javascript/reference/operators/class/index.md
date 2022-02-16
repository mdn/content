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

The **class expression** is one way to define a class in ECMAScript 2015. Similar to {{jsxref("Operators/function", "function expressions", "", "true")}}, class expressions can be named or unnamed. If named, the name of the class is local to the class body only.

JavaScript classes use prototype-based inheritance.

{{EmbedInteractiveExample("pages/js/expressions-classexpression.html")}}

## Syntax

```js
const ClassIdentifier = class [ClassName] [extends ParentClassName] {
  // class body
};
```

## Description

A class expression has a similar syntax to a {{jsxref("Statements/class", "class declaration (statement)", "", "true")}}. As with `class` statements, the body of a `class` expression is executed in {{jsxref("Strict_mode", "strict mode", "", 1)}}.

There is s difference between class expression and {{jsxref("Statements/class", "class statements", "", "true")}}: class expressions may omit the class name ("binding identifier"), which is not possible with {{jsxref("Statements/class", "class statements", "", "true")}}.

The `constructor` method is optional. Classes generated with class expressions will always respond to {{jsxref("Operators/typeof", "typeof")}} with the value "`function`".

```js
const Abstraction = class {};  // constructor property is optional

console.log(Abstraction.name);                        // Abstraction
console.log(Abstraction.prototype.constructor.name);  // Abstraction

console.log(typeof Abstraction);             // function
console.log(Abstraction.constructor.name);  // Function

console.log(Abstraction instanceof Object);    // true
console.log(Abstraction instanceof Function);  // true
```

## Examples

### A simple class expression

This is just a simple anonymous class expression which you can refer to using the identifier `Abstraction`.

```js
const Abstraction = class {
  constructor() {}
  toString() {
    return 'Hello World!';
  }
};

const instance = new Abstraction();
console.log(instance.toString());  // Hello World!
```

### Named class expressions

If you want to refer to the current class inside the class body, you can create a _named class expression_. The name is only visible within the scope of the class expression itself.

```js
const usage = (ClassIdentifier) => {
  const instance = new ClassIdentifier();
  console.log(instance.whoIsThere());  // InternalName
  console.log(ClassIdentifier.name);   // InternalName
  try {
    console.log(InternalName.name);
  } catch (error) {
    console.log(error.message); // ReferenceError: InternalName is not defined
  }
};

usage(
  class InternalName {
    whoIsThere() {
      return InternalName.name;
    }
  }
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Operators/function", "function expression", "", "true")}}
- {{jsxref("Statements/class", "class declaration", "", "true")}}
- {{jsxref("Classes", "Classes", "", "true")}}
