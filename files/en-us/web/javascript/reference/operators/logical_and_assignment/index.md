---
title: Logical AND assignment (&&=)
slug: Web/JavaScript/Reference/Operators/Logical_AND_assignment
page-type: javascript-operator
browser-compat: javascript.operators.logical_and_assignment
---

{{jsSidebar("Operators")}}

The **logical AND assignment (`&&=`)** operator only evaluates the right operand and assigns to the left if the left operand is {{Glossary("truthy")}}.

{{InteractiveExample("JavaScript Demo: Expressions - Logical AND assignment")}}

```js interactive-example
let a = 1;
let b = 0;

a &&= 2;
console.log(a);
// Expected output: 2

b &&= 2;
console.log(b);
// Expected output: 0
```

## Syntax

```js-nolint
x &&= y
```

## Description

Logical AND assignment [_short-circuits_](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#short-circuiting), meaning that `x &&= y` is equivalent to `x && (x = y)`, except that the expression `x` is only evaluated once.

No assignment is performed if the left-hand side is not truthy, due to short-circuiting of the [logical AND](/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND) operator. For example, the following does not throw an error, despite `x` being `const`:

```js
const x = 0;
x &&= 2;
```

Neither would the following trigger the setter:

```js
const x = {
  get value() {
    return 0;
  },
  set value(v) {
    console.log("Setter called");
  },
};

x.value &&= 2;
```

In fact, if `x` is not truthy, `y` is not evaluated at all.

```js
const x = 0;
x &&= console.log("y evaluated");
// Logs nothing
```

## Examples

### Using logical AND assignment

```js
let x = 0;
let y = 1;

x &&= 0; // 0
x &&= 1; // 0
y &&= 1; // 1
y &&= 0; // 0
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Logical AND (`&&`)](/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND)
- [Nullish coalescing operator (`??`)](/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [Bitwise AND assignment (`&=`)](/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment)
- {{Glossary("Truthy")}}
- {{Glossary("Falsy")}}
