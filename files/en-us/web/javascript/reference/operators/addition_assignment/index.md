---
title: Addition assignment (+=)
slug: Web/JavaScript/Reference/Operators/Addition_assignment
tags:
  - Assignment operator
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.addition_assignment
---
{{jsSidebar("Operators")}}

The addition assignment operator (`+=`) adds the value of the right operand
to a variable and assigns the result to the variable. The types of the two operands
determine the behavior of the addition assignment operator. Addition or concatenation is
possible.

{{EmbedInteractiveExample("pages/js/expressions-addition-assignment.html")}}

## Syntax

```js
x += y // x = x + y
```

## Examples

### Using addition assignment

```js
// Assuming the following variables
//  foo = 'foo'
//  bar = 5
//  baz = true

// Number + Number -> addition
bar += 2 // 7

// Boolean + Number -> addition
baz += 1 // 2

// Boolean + Boolean -> addition
baz += false // 1

// Number + String -> concatenation
bar += 'foo' // "5foo"

// String + Boolean -> concatenation
foo += false // "foofalse"

// String + String -> concatenation
foo += 'bar' // "foobar"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Assignment
  operators in the JS guide](/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#assignment)
- [Addition
  operator](/en-US/docs/Web/JavaScript/Reference/Operators/Addition)
