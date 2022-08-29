---
title: Number
slug: Web/JavaScript/Reference/Global_Objects/Number
tags:
  - Class
  - JavaScript
  - Number
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Number
---
{{JSRef}}

**`Number`** is a [primitive wrapper object](/en-US/docs/Glossary/Primitive#primitive_wrapper_objects_in_javascript) used to represent and manipulate numbers like `37` or `-9.25`.

The `Number` constructor contains constants and methods for working with numbers. Values of other types can be converted to numbers using the `Number()` function.

The JavaScript `Number` type is a [double-precision 64-bit binary format IEEE 754](https://en.wikipedia.org/wiki/Floating-point_arithmetic) value, like `double` in Java or C#. This means it can represent fractional values, but there are some limits to what it can store. A `Number` only keeps about 17 decimal places of precision; arithmetic is subject to [rounding](https://en.wikipedia.org/wiki/Floating-point_arithmetic#Representable_numbers,_conversion_and_rounding). The largest value a `Number` can hold is about 1.8E308. Values higher than that are replaced with the special `Number` constant {{jsxref("Infinity")}}.

A number literal like `37` in JavaScript code is a floating-point value, not an integer. There is no separate integer type in common everyday use. (JavaScript now has a {{jsxref("BigInt")}} type, but it was not designed to replace Number for everyday uses. `37` is still a `Number`, not a BigInt.)

`Number` may also be expressed in literal forms like `0b101`, `0o13`, `0x0A`. Learn more on numeric [lexical grammar here](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals).

## Description

When used as a function, `Number(value)` converts a string or other value to the Number type. If the value can't be converted, it returns {{jsxref("NaN")}}.

### Literal syntax

```js
123    // one-hundred twenty-three
123.0  // same
123 === 123.0  // true
```

### Function syntax

```js
Number('123')  // returns the number 123
Number('123') === 123  // true

Number("unicorn")  // NaN
Number(undefined)  // NaN
```

## Constructor

- [`Number()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)
  - : Creates a new `Number` value.

When `Number` is called as a constructor (with `new`), it creates a {{jsxref("Number")}} object, which is **not** a primitive. For example, `typeof new Number(42) === "object"`, and `new Number(42) !== 42` (although `new Number(42) == 42`).

> **Warning:** You should rarely find yourself using `Number` as a constructor.

## Static properties

- {{jsxref("Number.EPSILON")}}
  - : The smallest interval between two representable numbers.
- {{jsxref("Number.MAX_SAFE_INTEGER")}}
  - : The maximum safe integer in JavaScript (2<sup>53</sup> - 1).
- {{jsxref("Number.MAX_VALUE")}}
  - : The largest positive representable number.
- {{jsxref("Number.MIN_SAFE_INTEGER")}}
  - : The minimum safe integer in JavaScript (-(2<sup>53</sup> - 1)).
- {{jsxref("Number.MIN_VALUE")}}
  - : The smallest positive representable number—that is, the positive number closest to zero (without actually being zero).
- {{jsxref("Number.NaN")}}
  - : Special "**N**ot **a** **N**umber" value.
- {{jsxref("Number.NEGATIVE_INFINITY")}}
  - : Special value representing negative infinity. Returned on overflow.
- {{jsxref("Number.POSITIVE_INFINITY")}}
  - : Special value representing infinity. Returned on overflow.
- {{jsxref("Number", "Number.prototype")}}
  - : Allows the addition of properties to the `Number` object.

## Static methods

- {{jsxref("Number.isNaN()")}}
  - : Determine whether the passed value is `NaN`.
- {{jsxref("Number.isFinite()")}}
  - : Determine whether the passed value is a finite number.
- {{jsxref("Number.isInteger()")}}
  - : Determine whether the passed value is an integer.
- {{jsxref("Number.isSafeInteger()")}}
  - : Determine whether the passed value is a safe integer (number between -(2<sup>53</sup> - 1) and 2<sup>53</sup> - 1).
- {{jsxref("Number.parseFloat()", "Number.parseFloat(<var>string</var>)")}}
  - : This is the same as the global {{jsxref("parseFloat", "parseFloat()")}} function.
- {{jsxref("Number.parseInt()", "Number.parseInt(<var>string</var>, [<var>radix</var>])")}}
  - : This is the same as the global {{jsxref("parseInt", "parseInt()")}} function.

## Instance methods

- {{jsxref("Number.prototype.toExponential()" ,"Number.prototype.toExponential(<var>fractionDigits</var>)")}}
  - : Returns a string representing the number in exponential notation.
- {{jsxref("Number.prototype.toFixed()", "Number.prototype.toFixed(<var>digits</var>)")}}
  - : Returns a string representing the number in fixed-point notation.
- {{jsxref("Number.prototype.toLocaleString()", "Number.prototype.toLocaleString([<var>locales</var> [, <var>options</var>]])")}}
  - : Returns a string with a language sensitive representation of this number. Overrides the {{jsxref("Object.prototype.toLocaleString()")}} method.
- {{jsxref("Number.prototype.toPrecision()", "Number.prototype.toPrecision(<var>precision</var>)")}}
  - : Returns a string representing the number to a specified precision in fixed-point or exponential notation.
- {{jsxref("Number.prototype.toString()", "Number.prototype.toString([<var>radix</var>])")}}
  - : Returns a string representing the specified object in the specified _radix_ ("base"). Overrides the {{jsxref("Object.prototype.toString()")}} method.
- {{jsxref("Number.prototype.valueOf()")}}
  - : Returns the primitive value of the specified object. Overrides the {{jsxref("Object.prototype.valueOf()")}} method.

## Examples

### Using the Number object to assign values to numeric variables

The following example uses the `Number` object's properties to assign values to several numeric variables:

```js
const biggestNum     = Number.MAX_VALUE
const smallestNum    = Number.MIN_VALUE
const infiniteNum    = Number.POSITIVE_INFINITY
const negInfiniteNum = Number.NEGATIVE_INFINITY
const notANum        = Number.NaN
```

### Integer range for Number

The following example shows the minimum and maximum integer values that can be represented as `Number` object. (More details on this are described in the ECMAScript standard, chapter _[6.1.6 The Number Type](https://tc39.es/ecma262/#sec-ecmascript-language-types-number-type)._)

```js
const biggestInt  = Number.MAX_SAFE_INTEGER  //  (2**53 - 1) =>  9007199254740991
const smallestInt = Number.MIN_SAFE_INTEGER  // -(2**53 - 1) => -9007199254740991
```

When parsing data that has been serialized to JSON, integer values falling outside of this range can be expected to become corrupted when JSON parser coerces them to `Number` type.

A possible workaround is to use {{jsxref("String")}} instead.

Larger numbers can be represented using the {{jsxref("BigInt")}} type.

### Using Number to convert a Date object

The following example converts the {{jsxref("Date")}} object to a numerical value using `Number` as a function:

```js
const d = new Date('December 17, 1995 03:24:00');
console.log(Number(d));
```

This logs `819199440000`.

### Convert numeric strings and null to numbers

```js
Number('123')     // 123
Number('123') === 123 // true
Number('12.3')    // 12.3
Number('12.00')   // 12
Number('123e-1')  // 12.3
Number('')        // 0
Number(null)      // 0
Number('0x11')    // 17
Number('0b11')    // 3
Number('0o11')    // 9
Number('foo')     // NaN
Number('100a')    // NaN
Number('-Infinity') // -Infinity
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of modern `Number` behavior (with support binary and octal literals) in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("NaN")}}
- [Arithmetic operators](/en-US/docs/Web/JavaScript/Reference/Operators#arithmetic_operators)
- The {{jsxref("Math")}} global object
- Integers with arbitrary precision: {{jsxref("BigInt")}}
