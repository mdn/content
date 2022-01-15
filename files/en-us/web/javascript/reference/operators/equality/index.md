---
title: Equality (==)
slug: Web/JavaScript/Reference/Operators/Equality
tags:
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.equality
---
{{jsSidebar("Operators")}}

The equality operator (`==`) checks whether its two operands are equal,
returning a Boolean result. Unlike the [strict
equality](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality) operator, it attempts to convert and compare operands that are of
different types.

{{EmbedInteractiveExample("pages/js/expressions-equality.html")}}

## Syntax

```js
x == y
```

## Description

The equality operators (`==` and `!=`) use the [Abstract Equality
Comparison Algorithm](https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3) to compare two operands. This can be roughly summarised as
follows:

- If the operands are both objects, return `true` only if both operands
  reference the same object.
- If one operand is `null` and the other is `undefined`, return
  `true`.
- If the operands are of different types, try to convert them to the same type before
  comparing:

  - When comparing a number to a string, try to convert the string to a numeric
    value.
  - If one of the operands is a boolean, convert the boolean operand to 1
    if it is `true` and +0 if it is `false`.
  - If one of the operands is an object and the other is a number or a string, try
    to convert the object to a primitive using the object's `valueOf()` and
    `toString()` methods.

- If the operands have the same type, they are compared as follows:

  - String: return `true` only if both operands have the
    same characters in the same order.
  - Number: return `true` only if both operands have the
    same value. `+0` and `-0` are treated as the same value. If
    either operand is `NaN`, return `false`.
  - Boolean: return `true` only if operands are both
    `true` or both `false`.

The most notable difference between this operator and the [strict
equality](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality) (`===`) operator is that the strict equality operator does not
attempt type conversion. Instead, the strict equality operator always considers operands
of different types to be different.

## Examples

### Comparison with no type conversion

```js
1 == 1;              // true
"hello" == "hello";  // true
```

### Comparison with type conversion

```js
"1" ==  1;            // true
1 == "1";             // true
0 == false;           // true
0 == null;            // false
0 == undefined;       // false
0 == !!null;          // true, look at Logical NOT operator
0 == !!undefined;     // true, look at Logical NOT operator
null == undefined;    // true

const number1 = new Number(3);
const number2 = new Number(3);
number1 == 3;         // true
number1 == number2;   // false
```

### Comparison of objects

```js
const object1 = {"key": "value"}
const object2 = {"key": "value"};

object1 == object2 // false
object2 == object2 // true
```

### Comparing strings and String objects

Note that strings constructed using `new String()` are objects. If you
compare one of these with a string literal, the `String` object will be
converted to a string literal and the contents will be compared. However, if both
operands are `String` objects, then they are compared as objects and must
reference the same object for comparison to succeed:

```js
const string1 = "hello";
const string2 = String("hello");
const string3 = new String("hello");
const string4 = new String("hello");

console.log(string1 == string2); // true
console.log(string1 == string3); // true
console.log(string2 == string3); // true
console.log(string3 == string4); // false
console.log(string4 == string4); // true
```

### Comparing Dates and strings

```js
const d = new Date('December 17, 1995 03:24:00');
const s = d.toString(); // for example: "Sun Dec 17 1995 03:24:00 GMT-0800 (Pacific Standard Time)"
console.log(d == s);    //true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Inequality
  operator](/en-US/docs/Web/JavaScript/Reference/Operators/Inequality)
- [Strict
  equality operator](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality)
- [Strict
  inequality operator](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_inequality)
