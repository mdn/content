---
title: Nullish coalescing operator (??)
slug: Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
tags:
  - JavaScript
  - Language feature
  - Operator
  - Reference
  - nullish coalescing
browser-compat: javascript.operators.nullish_coalescing
---

{{JSSidebar("Operators")}}

The **nullish coalescing operator (`??`)** is a logical
operator that returns its right-hand side operand when its left-hand side operand is
{{jsxref("null")}} or {{jsxref("undefined")}}, and otherwise returns its left-hand side
operand.

This can be contrasted with the [logical OR
(`||`) operator](/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR), which returns the right-hand side operand if the left
operand is _any_ {{Glossary("falsy")}} value, not only `null` or `undefined`. In other words,
if you use `||` to provide some default value to another variable
`foo`, you may encounter unexpected behaviors if you consider some falsy
values as usable (e.g., `''` or `0`). See below for more examples.

The nullish coalescing operator has the fifth-lowest [operator
precedence](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence), directly lower than `||` and directly higher than the [conditional
(ternary) operator](/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator).

{{EmbedInteractiveExample("pages/js/expressions-nullishcoalescingoperator.html")}}

## Syntax

```js
leftExpr ?? rightExpr;
```

## Examples

### Using the nullish coalescing operator

In this example, we will provide default values but keep values other than
`null` or `undefined`.

```js
const nullValue = null;
const emptyText = ""; // falsy
const someNumber = 42;

const valA = nullValue ?? "default for A";
const valB = emptyText ?? "default for B";
const valC = someNumber ?? 0;

console.log(valA); // "default for A"
console.log(valB); // "" (as the empty string is not null or undefined)
console.log(valC); // 42
```

### Assigning a default value to a variable

Earlier, when one wanted to assign a default value to a variable, a common pattern was
to use the logical OR operator
([`||`](/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)):

```js
let foo;

//  foo is never assigned any value so it is still undefined
let someDummyText = foo || "Hello!";
```

However, due to `||` being a boolean logical operator, the left hand-side
operand was coerced to a boolean for the evaluation and any _falsy_ value
(`0`, `''`, `NaN`, `null`,
`undefined`) was not returned. This behavior may cause unexpected
consequences if you consider `0`, `''`, or `NaN` as
valid values.

```js
let count = 0;
let text = "";

let qty = count || 42;
let message = text || "hi!";
console.log(qty); // 42 and not 0
console.log(message); // "hi!" and not ""
```

The nullish coalescing operator avoids this pitfall by only returning the second
operand when the first one evaluates to either `null` or
`undefined` (but no other falsy values):

```js
let myText = ""; // An empty string (which is also a falsy value)

let notFalsyText = myText || "Hello world";
console.log(notFalsyText); // Hello world

let preservingFalsy = myText ?? "Hi neighborhood";
console.log(preservingFalsy); // '' (as myText is neither undefined nor null)
```

### Short-circuiting

Like the OR and AND logical operators, the right-hand side expression is not evaluated
if the left-hand side proves to be neither `null` nor `undefined`.

```js
function A() {
  console.log("A was called");
  return undefined;
}
function B() {
  console.log("B was called");
  return false;
}
function C() {
  console.log("C was called");
  return "foo";
}

console.log(A() ?? C());
// logs "A was called" then "C was called" and then "foo"
// as A() returned undefined so both expressions are evaluated

console.log(B() ?? C());
// logs "B was called" then "false"
// as B() returned false (and not null or undefined), the right
// hand side expression was not evaluated
```

### No chaining with AND or OR operators

It is not possible to combine both the AND (`&&`) and OR operators
(`||`) directly with `??`. A
[`SyntaxError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)
will be thrown in such cases.

```js example-bad
null || undefined ?? "foo"; // raises a SyntaxError
true || undefined ?? "foo"; // raises a SyntaxError
```

However, providing parenthesis to explicitly indicate precedence is correct:

```js example-good
(null || undefined) ?? "foo"; // returns "foo"
```

### Relationship with the optional chaining operator (`?.`)

The nullish coalescing operator treats `undefined` and `null` as
specific values and so does the [optional
chaining operator (`?.`)](/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) which is useful to access a property of an
object which may be `null` or `undefined`.

```js
let foo = { someFooProp: "hi" };

console.log(foo.someFooProp?.toUpperCase() ?? "not available"); // "HI"
console.log(foo.someBarProp?.toUpperCase() ?? "not available"); // "not available"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [optional chaining operator](/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- The [logical OR (`||`) operator](/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [Default parameters in functions](/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
