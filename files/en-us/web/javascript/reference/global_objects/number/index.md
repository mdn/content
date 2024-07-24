---
title: Number
slug: Web/JavaScript/Reference/Global_Objects/Number
page-type: javascript-class
browser-compat: javascript.builtins.Number
---

{{JSRef}}

**`Number`** values represent floating-point numbers like `37` or `-9.25`.

The `Number` constructor contains constants and methods for working with numbers. Values of other types can be converted to numbers using the `Number()` function.

## Description

Numbers are most commonly expressed in literal forms like `255` or `3.14159`. The [lexical grammar](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals) contains a more detailed reference.

```js
255; // two-hundred and fifty-five
255.0; // same number
255 === 255.0; // true
255 === 0xff; // true (hexadecimal notation)
255 === 0b11111111; // true (binary notation)
255 === 0.255e3; // true (decimal exponential notation)
```

A number literal like `37` in JavaScript code is a floating-point value, not an integer. There is no separate integer type in common everyday use. (JavaScript also has a {{jsxref("BigInt")}} type, but it's not designed to replace Number for everyday uses. `37` is still a number, not a BigInt.)

When used as a function, `Number(value)` converts a string or other value to the Number type. If the value can't be converted, it returns {{jsxref("NaN")}}.

```js
Number("123"); // returns the number 123
Number("123") === 123; // true

Number("unicorn"); // NaN
Number(undefined); // NaN
```

### Number encoding

The JavaScript `Number` type is a [double-precision 64-bit binary format IEEE 754](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) value, like `double` in Java or C#. This means it can represent fractional values, but there are some limits to the stored number's magnitude and precision. Very briefly, an IEEE 754 double-precision number uses 64 bits to represent 3 parts:

- 1 bit for the _sign_ (positive or negative)
- 11 bits for the _exponent_ (-1022 to 1023)
- 52 bits for the _mantissa_ (representing a number between 0 and 1)

The mantissa (also called _significand_) is the part of the number representing the actual value (significant digits). The exponent is the power of 2 that the mantissa should be multiplied by. Thinking about it as scientific notation:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mtext>Number</mtext><mo>=</mo><mo stretchy="false">(</mo><mrow><mo>−</mo><mn>1</mn></mrow><msup><mo stretchy="false">)</mo><mtext>sign</mtext></msup><mo>⋅</mo><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mtext>mantissa</mtext><mo stretchy="false">)</mo><mo>⋅</mo><msup><mn>2</mn><mtext>exponent</mtext></msup></mrow><annotation encoding="TeX">\text{Number} = ({-1})^{\text{sign}} \cdot (1 + \text{mantissa}) \cdot 2^{\text{exponent}}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

The mantissa is stored with 52 bits, interpreted as digits after `1.…` in a binary fractional number. Therefore, the mantissa's precision is 2<sup>-52</sup> (obtainable via {{jsxref("Number.EPSILON")}}), or about 15 to 17 decimal places; arithmetic above that level of precision is subject to [rounding](https://en.wikipedia.org/wiki/Floating-point_arithmetic#Representable_numbers,_conversion_and_rounding).

The largest value a number can hold is 2<sup>1023</sup> × (2 - 2<sup>-52</sup>) (with the exponent being 1023 and the mantissa being 0.1111… in base 2), which is obtainable via {{jsxref("Number.MAX_VALUE")}}. Values higher than that are replaced with the special number constant {{jsxref("Infinity")}}.

Integers can only be represented without loss of precision in the range -2<sup>53</sup> + 1 to 2<sup>53</sup> - 1, inclusive (obtainable via {{jsxref("Number.MIN_SAFE_INTEGER")}} and {{jsxref("Number.MAX_SAFE_INTEGER")}}), because the mantissa can only hold 53 bits (including the leading 1).

More details on this are described in the [ECMAScript standard](https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html#sec-ecmascript-language-types-number-type).

### Number coercion

Many built-in operations that expect numbers first coerce their arguments to numbers (which is largely why `Number` objects behave similarly to number primitives). [The operation](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tonumber) can be summarized as follows:

- Numbers are returned as-is.
- [`undefined`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) turns into [`NaN`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN).
- [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) turns into `0`.
- `true` turns into `1`; `false` turns into `0`.
- Strings are converted by parsing them as if they contain a [number literal](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals). Parsing failure results in `NaN`. There are some minor differences compared to an actual number literal:
  - Leading and trailing whitespace/line terminators are ignored.
  - A leading `0` digit does not cause the number to become an octal literal (or get rejected in strict mode).
  - `+` and `-` are allowed at the start of the string to indicate its sign. (In actual code, they "look like" part of the literal, but are actually separate unary operators.) However, the sign can only appear once, and must not be followed by whitespace.
  - `Infinity` and `-Infinity` are recognized as literals. In actual code, they are global variables.
  - Empty or whitespace-only strings are converted to `0`.
  - [Numeric separators](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_separators) are not allowed.
- [BigInts](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) throw a {{jsxref("TypeError")}} to prevent unintended implicit coercion causing loss of precision.
- [Symbols](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) throw a {{jsxref("TypeError")}}.
- Objects are first [converted to a primitive](/en-US/docs/Web/JavaScript/Data_structures#primitive_coercion) by calling their [`[Symbol.toPrimitive]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (with `"number"` as hint), `valueOf()`, and `toString()` methods, in that order. The resulting primitive is then converted to a number.

There are two ways to achieve nearly the same effect in JavaScript.

- [Unary plus](/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus): `+x` does exactly the number coercion steps explained above to convert `x`.
- The [`Number()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) function: `Number(x)` uses the same algorithm to convert `x`, except that [BigInts](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) don't throw a {{jsxref("TypeError")}}, but return their number value, with possible loss of precision.

{{jsxref("Number.parseFloat()")}} and {{jsxref("Number.parseInt()")}} are similar to `Number()` but only convert strings, and have slightly different parsing rules. For example, `parseInt()` doesn't recognize the decimal point, and `parseFloat()` doesn't recognize the `0x` prefix.

#### Integer conversion

Some operations expect integers, most notably those that work with array/string indices, date/time components, and number radixes. After performing the number coercion steps above, the result is [truncated](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc) to an integer (by discarding the fractional part). If the number is ±Infinity, it's returned as-is. If the number is `NaN` or `-0`, it's returned as `0`. The result is therefore always an integer (which is not `-0`) or ±Infinity.

Notably, when converted to integers, both `undefined` and `null` become `0`, because `undefined` is converted to `NaN`, which also becomes `0`.

#### Fixed-width number conversion

JavaScript has some lower-level functions that deal with the binary encoding of integer numbers, most notably [bitwise operators](/en-US/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators) and {{jsxref("TypedArray")}} objects. Bitwise operators always convert the operands to 32-bit integers. In these cases, after converting the value to a number, the number is then normalized to the given width by first [truncating](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc) the fractional part and then taking the lowest bits in the integer's two's complement encoding.

```js
new Int32Array([1.1, 1.9, -1.1, -1.9]); // Int32Array(4) [ 1, 1, -1, -1 ]

new Int8Array([257, -257]); // Int8Array(2) [ 1, -1 ]
// 257 = 0001 0000 0001
//     =      0000 0001 (mod 2^8)
//     = 1
// -257 = 1110 1111 1111
//      =      1111 1111 (mod 2^8)
//      = -1 (as signed integer)

new Uint8Array([257, -257]); // Uint8Array(2) [ 1, 255 ]
// -257 = 1110 1111 1111
//      =      1111 1111 (mod 2^8)
//      = 255 (as unsigned integer)
```

## Constructor

- {{jsxref("Number/Number", "Number()")}}
  - : Creates `Number` objects. When called as a function, it returns primitive values of type Number.

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

## Static methods

- {{jsxref("Number.isFinite()")}}
  - : Determine whether the passed value is a finite number.
- {{jsxref("Number.isInteger()")}}
  - : Determine whether the passed value is an integer.
- {{jsxref("Number.isNaN()")}}
  - : Determine whether the passed value is `NaN`.
- {{jsxref("Number.isSafeInteger()")}}
  - : Determine whether the passed value is a safe integer (number between -(2<sup>53</sup> - 1) and 2<sup>53</sup> - 1).
- {{jsxref("Number.parseFloat()")}}
  - : This is the same as the global {{jsxref("parseFloat()")}} function.
- {{jsxref("Number.parseInt()")}}
  - : This is the same as the global {{jsxref("parseInt()")}} function.

## Instance properties

These properties are defined on `Number.prototype` and shared by all `Number` instances.

- {{jsxref("Object/constructor", "Number.prototype.constructor")}}
  - : The constructor function that created the instance object. For `Number` instances, the initial value is the {{jsxref("Number/Number", "Number")}} constructor.

## Instance methods

- {{jsxref("Number.prototype.toExponential()")}}
  - : Returns a string representing the number in exponential notation.
- {{jsxref("Number.prototype.toFixed()")}}
  - : Returns a string representing the number in fixed-point notation.
- {{jsxref("Number.prototype.toLocaleString()")}}
  - : Returns a string with a language sensitive representation of this number. Overrides the {{jsxref("Object.prototype.toLocaleString()")}} method.
- {{jsxref("Number.prototype.toPrecision()")}}
  - : Returns a string representing the number to a specified precision in fixed-point or exponential notation.
- {{jsxref("Number.prototype.toString()")}}
  - : Returns a string representing the specified object in the specified _radix_ ("base"). Overrides the {{jsxref("Object.prototype.toString()")}} method.
- {{jsxref("Number.prototype.valueOf()")}}
  - : Returns the primitive value of the specified object. Overrides the {{jsxref("Object.prototype.valueOf()")}} method.

## Examples

### Using the Number object to assign values to numeric variables

The following example uses the `Number` object's properties to assign values to several numeric variables:

```js
const biggestNum = Number.MAX_VALUE;
const smallestNum = Number.MIN_VALUE;
const infiniteNum = Number.POSITIVE_INFINITY;
const negInfiniteNum = Number.NEGATIVE_INFINITY;
const notANum = Number.NaN;
```

### Integer range for Number

The following example shows the minimum and maximum integer values that can be represented as `Number` object.

```js
const biggestInt = Number.MAX_SAFE_INTEGER; // (2**53 - 1) => 9007199254740991
const smallestInt = Number.MIN_SAFE_INTEGER; // -(2**53 - 1) => -9007199254740991
```

When parsing data that has been serialized to JSON, integer values falling outside of this range can be expected to become corrupted when JSON parser coerces them to `Number` type.

A possible workaround is to use {{jsxref("String")}} instead.

Larger numbers can be represented using the {{jsxref("BigInt")}} type.

### Using Number() to convert a Date object

The following example converts the {{jsxref("Date")}} object to a numerical value using `Number` as a function:

```js
const d = new Date("1995-12-17T03:24:00");
console.log(Number(d));
```

This logs `819199440000`.

### Convert numeric strings and null to numbers

```js
Number("123"); // 123
Number("123") === 123; // true
Number("12.3"); // 12.3
Number("12.00"); // 12
Number("123e-1"); // 12.3
Number(""); // 0
Number(null); // 0
Number("0x11"); // 17
Number("0b11"); // 3
Number("0o11"); // 9
Number("foo"); // NaN
Number("100a"); // NaN
Number("-Infinity"); // -Infinity
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of modern `Number` behavior (with support binary and octal literals) in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("NaN")}}
- [Arithmetic operators](/en-US/docs/Web/JavaScript/Reference/Operators#arithmetic_operators)
- {{jsxref("Math")}}
- {{jsxref("BigInt")}}
