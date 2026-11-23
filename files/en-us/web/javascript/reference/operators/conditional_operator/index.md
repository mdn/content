---
title: Conditional (ternary) operator
slug: Web/JavaScript/Reference/Operators/Conditional_operator
page-type: javascript-operator
browser-compat: javascript.operators.conditional
sidebar: jssidebar
---

The **conditional (ternary) operator** is the only JavaScript operator that takes three operands:
a condition followed by a question mark (`?`), then an expression to execute if the condition is {{Glossary("truthy")}} followed by a colon (`:`), and finally the expression to execute if the condition is {{Glossary("falsy")}}.
This operator is frequently used as an alternative to an [`if...else`](/en-US/docs/Web/JavaScript/Reference/Statements/if...else) statement.

{{InteractiveExample("JavaScript Demo: Conditional operator")}}

```js interactive-example
function getFee(isMember) {
  return isMember ? "$2.00" : "$10.00";
}

console.log(getFee(true));
// Expected output: "$2.00"

console.log(getFee(false));
// Expected output: "$10.00"

console.log(getFee(null));
// Expected output: "$10.00"
```

## Syntax

```js-nolint
condition ? exprIfTrue : exprIfFalse
```

### Parameters

- `condition`
  - : An expression with [precedence](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) 3 (logical OR or nullish coalescing) or above whose value is used as the condition. Besides `false`, possible falsy values are: `null`, `NaN`, `0`, `0n`, the empty string (`""`), and `undefined`.
- `exprIfTrue`
  - : An expression with [precedence](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) 2 (assignment) or above, evaluated only if `condition` is {{Glossary("truthy")}}.
- `exprIfFalse`
  - : An expression with [precedence](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) 2 (assignment) or above, evaluated only if `condition` is {{Glossary("falsy")}}.

### Return value

The value of `exprIfTrue` if `condition` is truthy, or the value of `exprIfFalse` otherwise.

## Examples

### A basic example

```js
const age = 26;
const beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage); // "Beer"
```

### Handling null values

One common usage is to handle a value that may be `null`:

```js
const greeting = (person) => {
  const name = person ? person.name : "stranger";
  return `Howdy, ${name}`;
};

console.log(greeting({ name: "Alice" })); // "Howdy, Alice"
console.log(greeting(null)); // "Howdy, stranger"
```

### Conditional chains

The ternary operator is right-associative, which means it can be "chained" in the following way, similar to an `if … else if … else if … else` chain:

```js-nolint
function example() {
  return condition1 ? value1
    : condition2 ? value2
    : condition3 ? value3
    : value4;
}
```

This is equivalent to the following [`if...else`](/en-US/docs/Web/JavaScript/Reference/Statements/if...else) chain.

```js
function example() {
  if (condition1) {
    return value1;
  } else if (condition2) {
    return value2;
  } else if (condition3) {
    return value3;
  } else {
    return value4;
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`if...else`](/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [Nullish coalescing operator (`??`)](/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [Optional chaining (`?.`)](/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [Learn: Making decisions in your code — conditionals](/en-US/docs/Learn_web_development/Core/Scripting/Conditionals)
- [Expressions and operators](/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators) guide
