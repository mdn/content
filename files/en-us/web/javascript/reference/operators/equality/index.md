---
title: Equality (==)
slug: Web/JavaScript/Reference/Operators/Equality
page-type: javascript-operator
browser-compat: javascript.operators.equality
---

{{jsSidebar("Operators")}}

The **equality (`==`)** operator checks whether its two operands are equal,
returning a Boolean result.
Unlike the [strict equality](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality) operator,
it attempts to convert and compare operands that are of different types.

{{EmbedInteractiveExample("pages/js/expressions-equality.html")}}

## Syntax

```js-nolint
x == y
```

## Description

The equality operators (`==` and `!=`) provide the [IsLooselyEqual](/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#loose_equality_using) semantic. This can be roughly summarized as follows:

1. If the operands have the same type, they are compared as follows:
   - Object: return `true` only if both operands reference the same object.
   - String: return `true` only if both operands have the same characters in the same order.
   - Number: return `true` only if both operands have the same value. `+0` and `-0` are treated as the same value. If either operand is `NaN`, return `false`; so, `NaN` is never equal to `NaN`.
   - Boolean: return `true` only if operands are both `true` or both `false`.
   - BigInt: return `true` only if both operands have the same value.
   - Symbol: return `true` only if both operands reference the same symbol.
2. If one of the operands is `null` or `undefined`, the other must also be `null` or `undefined` to return `true`. Otherwise return `false`.
3. If one of the operands is an object and the other is a primitive, [convert the object to a primitive](/en-US/docs/Web/JavaScript/Data_structures#primitive_coercion).
4. At this step, both operands are converted to primitives (one of String, Number, Boolean, Symbol, and BigInt). The rest of the conversion is done case-by-case.
   - If they are of the same type, compare them using step 1.
   - If one of the operands is a Symbol but the other is not, return `false`.
   - If one of the operands is a Boolean but the other is not, [convert the boolean to a number](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion): `true` is converted to 1, and `false` is converted to 0. Then compare the two operands loosely again.
   - Number to String: [convert the string to a number](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion). Conversion failure results in `NaN`, which will guarantee the equality to be `false`.
   - Number to BigInt: compare by their numeric value. If the number is ±Infinity or `NaN`, return `false`.
   - String to BigInt: convert the string to a BigInt using the same algorithm as the [`BigInt()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) constructor. If conversion fails, return `false`.

Loose equality is _symmetric_: `A == B` always has identical semantics to `B == A` for any values of `A` and `B` (except for the order of applied conversions).

The most notable difference between this operator and the [strict equality](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality) (`===`) operator is that the strict equality operator does not attempt type conversion. Instead, the strict equality operator always considers operands of different types to be different. The strict equality operator essentially carries out only step 1, and then returns `false` for all other cases.

There's a "willful violation" of the above algorithm: if one of the operands is [`document.all`](/en-US/docs/Web/API/Document/all), it is treated as if it's `undefined`. This means that `document.all == null` is `true`, but `document.all === undefined && document.all === null` is `false`.

## Examples

### Comparison with no type conversion

```js
1 == 1; // true
"hello" == "hello"; // true
```

### Comparison with type conversion

```js
"1" == 1; // true
1 == "1"; // true
0 == false; // true
0 == null; // false
0 == undefined; // false
0 == !!null; // true, look at Logical NOT operator
0 == !!undefined; // true, look at Logical NOT operator
null == undefined; // true

const number1 = new Number(3);
const number2 = new Number(3);
number1 == 3; // true
number1 == number2; // false
```

### Comparison of objects

```js
const object1 = {
  key: "value",
};

const object2 = {
  key: "value",
};

console.log(object1 == object2); // false
console.log(object1 == object1); // true
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
const d = new Date("1995-12-17T03:24:00");
const s = d.toString(); // for example: "Sun Dec 17 1995 03:24:00 GMT-0800 (Pacific Standard Time)"
console.log(d == s); //true
```

### Comparing arrays and strings

```js
const a = [1, 2, 3];
const b = "1,2,3";
a == b; // true, `a` converts to string

const c = [true, 0.5, "hey"];
const d = c.toString(); // "true,0.5,hey"
c == d; // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Inequality operator](/en-US/docs/Web/JavaScript/Reference/Operators/Inequality)
- [Strict equality operator](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality)
- [Strict inequality operator](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_inequality)
