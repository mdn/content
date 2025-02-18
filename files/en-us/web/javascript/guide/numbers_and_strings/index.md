---
title: Numbers and strings
slug: Web/JavaScript/Guide/Numbers_and_strings
page-type: guide
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Expressions_and_operators", "Web/JavaScript/Guide/Representing_dates_times")}}

This chapter introduces the two most fundamental data types in JavaScript: numbers and strings. We will introduce their underlying representations, and functions used to work with and perform calculations on them.

## Numbers

In JavaScript, numbers are implemented in [double-precision 64-bit binary format IEEE 754](https://en.wikipedia.org/wiki/Double-precision_floating-point_format) (i.e., a number between ±2^−1022 and ±2^+1023, or about ±10^−308 to ±10^+308, with a numeric precision of 53 bits). Integer values up to ±2^53 − 1 can be represented exactly.

In addition to being able to represent floating-point numbers, the number type has three symbolic values: {{jsxref("Infinity")}}, `-Infinity`, and {{jsxref("NaN")}} (not-a-number).

See also [JavaScript data types and structures](/en-US/docs/Web/JavaScript/Data_structures) for context with other primitive types in JavaScript.

You can use four types of number literals: decimal, binary, octal, and hexadecimal.

### Decimal numbers

```js-nolint
1234567890
42
```

Decimal literals can start with a zero (`0`) followed by another decimal digit, but if all digits after the leading `0` are smaller than 8, the number is interpreted as an octal number. This is considered a legacy syntax, and number literals prefixed with `0`, whether interpreted as octal or decimal, cause a syntax error in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode#legacy_octal_literals) — so, use the `0o` prefix instead.

```js-nolint example-bad
0888 // 888 parsed as decimal
0777 // parsed as octal, 511 in decimal
```

### Binary numbers

Binary number syntax uses a leading zero followed by a lowercase or uppercase Latin letter "B" (`0b` or `0B`). If the digits after the `0b` are not 0 or 1, the following {{jsxref("SyntaxError")}} is thrown: "Missing binary digits after 0b".

```js-nolint
0b10000000000000000000000000000000 // 2147483648
0b01111111100000000000000000000000 // 2139095040
0B00000000011111111111111111111111 // 8388607
```

### Octal numbers

The standard syntax for octal numbers is to prefix them with `0o`. For example:

```js-nolint
0O755 // 493
0o644 // 420
```

There's also a legacy syntax for octal numbers — by prefixing the octal number with a zero: `0644 === 420` and `"\045" === "%"`. If the digits after the `0` are outside the range 0 through 7, the number will be interpreted as a decimal number.

```js
const n = 0755; // 493
const m = 0644; // 420
```

[Strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode) forbids this octal syntax.

### Hexadecimal numbers

Hexadecimal number syntax uses a leading zero followed by a lowercase or uppercase Latin letter "X" (`0x` or `0X`). If the digits after 0x are outside the range (0123456789ABCDEF), the following {{jsxref("SyntaxError")}} is thrown: "Identifier starts immediately after numeric literal".

```js-nolint
0xFFFFFFFFFFFFFFFFF // 295147905179352830000
0x123456789ABCDEF   // 81985529216486900
0XA                 // 10
```

### Exponentiation

```js-nolint
0e-5   // 0
0e+5   // 0
5e1    // 50
175e-2 // 1.75
1e3    // 1000
1e-3   // 0.001
1E3    // 1000
```

## Number object

The built-in {{jsxref("Number")}} object has properties for numerical constants, such as maximum value, not-a-number, and infinity. You cannot change the values of these properties and you use them as follows:

```js
const biggestNum = Number.MAX_VALUE;
const smallestNum = Number.MIN_VALUE;
const infiniteNum = Number.POSITIVE_INFINITY;
const negInfiniteNum = Number.NEGATIVE_INFINITY;
const notANum = Number.NaN;
```

You always refer to a property of the predefined `Number` object as shown above, and not as a property of a `Number` object you create yourself.

The following table summarizes the `Number` object's properties.

| Property                               | Description                                                                                                                                |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| {{jsxref("Number.MAX_VALUE")}}         | The largest positive representable number (`1.7976931348623157e+308`)                                                                      |
| {{jsxref("Number.MIN_VALUE")}}         | The smallest positive representable number (`5e-324`)                                                                                      |
| {{jsxref("Number.NaN")}}               | Special "not a number" value                                                                                                               |
| {{jsxref("Number.NEGATIVE_INFINITY")}} | Special negative infinite value; returned on overflow                                                                                      |
| {{jsxref("Number.POSITIVE_INFINITY")}} | Special positive infinite value; returned on overflow                                                                                      |
| {{jsxref("Number.EPSILON")}}           | Difference between `1` and the smallest value greater than `1` that can be represented as a {{jsxref("Number")}} (`2.220446049250313e-16`) |
| {{jsxref("Number.MIN_SAFE_INTEGER")}}  | Minimum safe integer in JavaScript (−2^53 + 1, or `−9007199254740991`)                                                                     |
| {{jsxref("Number.MAX_SAFE_INTEGER")}}  | Maximum safe integer in JavaScript (+2^53 − 1, or `+9007199254740991`)                                                                     |

| Method                               | Description                                                                                                                           |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("Number.parseFloat()")}}    | Parses a string argument and returns a floating point number. Same as the global {{jsxref("parseFloat()")}} function.                 |
| {{jsxref("Number.parseInt()")}}      | Parses a string argument and returns an integer of the specified radix or base. Same as the global {{jsxref("parseInt()")}} function. |
| {{jsxref("Number.isFinite()")}}      | Determines whether the passed value is a finite number.                                                                               |
| {{jsxref("Number.isInteger()")}}     | Determines whether the passed value is an integer.                                                                                    |
| {{jsxref("Number.isNaN()")}}         | Determines whether the passed value is {{jsxref("NaN")}}. More robust version of the original global {{jsxref("isNaN()")}}.           |
| {{jsxref("Number.isSafeInteger()")}} | Determines whether the provided value is a number that is a _safe integer_.                                                           |

The `Number` prototype provides methods for retrieving information from `Number` objects in various formats. The following table summarizes the methods of `Number.prototype`.

| Method                                                | Description                                                                                |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| {{jsxref("Number/toExponential", "toExponential()")}} | Returns a string representing the number in exponential notation.                          |
| {{jsxref("Number/toFixed", "toFixed()")}}             | Returns a string representing the number in fixed-point notation.                          |
| {{jsxref("Number/toPrecision", "toPrecision()")}}     | Returns a string representing the number to a specified precision in fixed-point notation. |

## Math object

The built-in {{jsxref("Math")}} object has properties and methods for mathematical constants and functions. For example, the `Math` object's `PI` property has the value of pi (3.141…), which you would use in an application as

```js
Math.PI;
```

Similarly, standard mathematical functions are methods of `Math`. These include trigonometric, logarithmic, exponential, and other functions. For example, if you want to use the trigonometric function sine, you would write

```js
Math.sin(1.56);
```

Note that all trigonometric methods of `Math` take arguments in radians.

The following table summarizes the `Math` object's methods.

<table class="standard-table">
  <caption>
    Methods of
    <code>Math</code>
  </caption>
  <thead>
    <tr>
      <th scope="col">Method</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{jsxref("Math.abs", "abs()")}}</td>
      <td>Absolute value</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.sin", "sin()")}},
        {{jsxref("Math.cos", "cos()")}},
        {{jsxref("Math.tan", "tan()")}}
      </td>
      <td>Standard trigonometric functions; with the argument in radians.</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.asin", "asin()")}},
        {{jsxref("Math.acos", "acos()")}},
        {{jsxref("Math.atan", "atan()")}},
        {{jsxref("Math.atan2", "atan2()")}}
      </td>
      <td>Inverse trigonometric functions; return values in radians.</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.sinh", "sinh()")}},
        {{jsxref("Math.cosh", "cosh()")}},
        {{jsxref("Math.tanh", "tanh()")}}
      </td>
      <td>Hyperbolic functions; argument in hyperbolic angle.</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.asinh", "asinh()")}},
        {{jsxref("Math.acosh", "acosh()")}},
        {{jsxref("Math.atanh", "atanh()")}}
      </td>
      <td>Inverse hyperbolic functions; return values in hyperbolic angle.</td>
    </tr>
    <tr>
      <td>
        <p>
          {{jsxref("Math.pow", "pow()")}},
          {{jsxref("Math.exp", "exp()")}},
          {{jsxref("Math.expm1", "expm1()")}},
          {{jsxref("Math.log", "log()")}},
          {{jsxref("Math.log10", "log10()")}},
          {{jsxref("Math.log1p", "log1p()")}},
          {{jsxref("Math.log2", "log2()")}}
        </p>
      </td>
      <td>Exponential and logarithmic functions.</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.floor", "floor()")}},
        {{jsxref("Math.ceil", "ceil()")}}
      </td>
      <td>
        Returns the largest/smallest integer less/greater than or equal to an
        argument.
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.min", "min()")}},
        {{jsxref("Math.max", "max()")}}
      </td>
      <td>
        Returns the minimum or maximum (respectively) value of a comma separated
        list of numbers as arguments.
      </td>
    </tr>
    <tr>
      <td>{{jsxref("Math.random", "random()")}}</td>
      <td>Returns a random number between 0 and 1.</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.round", "round()")}},
        {{jsxref("Math.fround", "fround()")}},
        {{jsxref("Math.trunc", "trunc()")}},
      </td>
      <td>Rounding and truncation functions.</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.sqrt", "sqrt()")}},
        {{jsxref("Math.cbrt", "cbrt()")}},
        {{jsxref("Math.hypot", "hypot()")}}
      </td>
      <td>
        Square root, cube root, Square root of the sum of square arguments.
      </td>
    </tr>
    <tr>
      <td>{{jsxref("Math.sign", "sign()")}}</td>
      <td>
        The sign of a number, indicating whether the number is positive,
        negative or zero.
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.clz32", "clz32()")}},<br />{{jsxref("Math.imul", "imul()")}}
      </td>
      <td>
        Number of leading zero bits in the 32-bit binary representation.<br />The
        result of the C-like 32-bit multiplication of the two arguments.
      </td>
    </tr>
  </tbody>
</table>

Unlike many other objects, you never create a `Math` object of your own. You always use the built-in `Math` object.

## BigInts

One shortcoming of number values is they only have 64 bits. In practice, due to using IEEE 754 encoding, they cannot represent any integer larger than [`Number.MAX_SAFE_INTEGER`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) (which is 2<sup>53</sup> - 1) accurately. To solve the need of encoding binary data and to interoperate with other languages that offer wide integers like `i64` (64-bit integers) and `i128` (128-bit integers), JavaScript also offers another data type to represent _arbitrarily large integers_: [`BigInt`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt).

A BigInt can be defined as an integer literal suffixed by `n`:

```js
const b1 = 123n;
// Can be arbitrarily large.
const b2 = -1234567890987654321n;
```

BigInts can also be constructed from number values or string values using the [`BigInt`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) constructor.

```js
const b1 = BigInt(123);
// Using a string prevents loss of precision, since long number
// literals don't represent what they seem like.
const b2 = BigInt("-1234567890987654321");
```

Conceptually, a BigInt is just an arbitrarily long sequence of bits which encodes an integer. You can safely do any arithmetic operations without losing precision or over-/underflowing.

```js
const integer = 12 ** 34; // 4.9222352429520264e+36; only has limited precision
const bigint = 12n ** 34n; // 4922235242952026704037113243122008064n
```

Compared to numbers, BigInt values yield higher precision when representing large _integers_; however, they cannot represent _floating-point numbers_. For example, division would round to zero:

```js
const bigintDiv = 5n / 2n; // 2n, because there's no 2.5 in BigInt
```

`Math` functions cannot be used on BigInt values. There is [an open proposal](https://github.com/tc39/proposal-bigint-math) to overload certain `Math` functions like `Math.max()` to allow BigInt values.

Choosing between BigInt and number depends on your use-case and your input's range. The precision of numbers should be able to accommodate most day-to-day tasks already, and BigInts are most suitable for handling binary data.

Read more about what you can do with BigInt values in the [Expressions and Operators](/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#bigint_operators) section, or the [BigInt reference](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt).

## Strings

JavaScript's [String](/en-US/docs/Glossary/String) type is used to represent textual data. It is a set of "elements" of 16-bit unsigned integer values (UTF-16 code units). Each element in the String occupies a position in the String. The first element is at index 0, the next at index 1, and so on. The length of a String is the number of elements in it. You can create strings using string literals or string objects.

### String literals

You can declare strings in source code using either single or double quotes:

```js-nolint
'foo'
"bar"
```

Within a string literal, most characters can be entered literally. The only exceptions are the backslash (`\`, which starts an escape sequence), the quote character being used to enclose the string, which terminates the string, and the newline character, which is a syntax error if not preceded by a backslash.

More advanced strings can be created using escape sequences:

#### Hexadecimal escape sequences

The number after \x is interpreted as a [hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal) number.

```js-nolint
"\xA9" // "©"
```

#### Unicode escape sequences

The Unicode escape sequences require at least four hexadecimal digits following `\u`.

```js-nolint
"\u00A9" // "©"
```

#### Unicode code point escapes

With Unicode code point escapes, any character can be escaped using hexadecimal numbers so that it is possible to use Unicode code points up to `0x10FFFF`. With the four-digit Unicode escapes it is often necessary to write the surrogate halves separately to achieve the same result.

See also {{jsxref("String.fromCodePoint()")}} or {{jsxref("String.prototype.codePointAt()")}}.

```js-nolint
"\u{2F804}"

// the same with simple Unicode escapes
"\uD87E\uDC04"
```

## String object

You can call methods directly on a string value:

```js
console.log("hello".toUpperCase()); // HELLO
```

The following methods are available on {{jsxref("String")}} values:

- Query: get the character or character code at a particular string index. Methods include {{jsxref("String/at", "at()")}}, {{jsxref("String/charAt", "charAt()")}}, {{jsxref("String/charCodeAt", "charCodeAt()")}}, and {{jsxref("String/codePointAt", "codePointAt()")}}.
- Search: get information about a substring that conforms to a pattern, or test if a particular substring exists. Methods include {{jsxref("String/indexOf", "indexOf()")}}, {{jsxref("String/lastIndexOf", "lastIndexOf()")}}, {{jsxref("String/startsWith", "startsWith()")}}, {{jsxref("String/endsWith", "endsWith()")}}, {{jsxref("String/includes", "includes()")}}, {{jsxref("String/match", "match()")}}, {{jsxref("String/matchAll", "matchAll()")}}, and {{jsxref("String/search", "search()")}}
- Composition: combine strings into a longer string. Methods include {{jsxref("String/padStart", "padStart()")}}, {{jsxref("String/padEnd", "padEnd()")}}, {{jsxref("String/concat", "concat()")}}, and {{jsxref("String/repeat", "repeat()")}}.
- Decomposition: break a string into smaller strings. Methods include {{jsxref("String/split", "split()")}}, {{jsxref("String/slice", "slice()")}}, {{jsxref("String/substring", "substring()")}}, {{jsxref("String/substr", "substr()")}}, {{jsxref("String/trim", "trim()")}}, {{jsxref("String/trimStart", "trimStart()")}}, and {{jsxref("String/trimEnd", "trimEnd()")}}.
- Transformation: return a new string based on the current string's content. Methods include {{jsxref("String/toLowerCase", "toLowerCase()")}}, {{jsxref("String/toUpperCase", "toUpperCase()")}}, {{jsxref("String/toLocaleLowerCase", "toLocaleLowerCase()")}}, {{jsxref("String/toLocaleUpperCase", "toLocaleUpperCase()")}}, {{jsxref("String/normalize", "normalize()")}}, and {{jsxref("String/toWellFormed", "toWellFormed()")}}.

When working with strings, there are two other objects that provide important functionality for string manipulation: {{jsxref("RegExp")}} and {{jsxref("Intl")}}. They are introduced in [regular expressions](/en-US/docs/Web/JavaScript/Guide/Regular_expressions) and [internationalization](/en-US/docs/Web/JavaScript/Guide/Internationalization) respectively.

## Template literals

[Template literals](/en-US/docs/Web/JavaScript/Reference/Template_literals) are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.

Template literals are enclosed by backtick ([grave accent](https://en.wikipedia.org/wiki/Grave_accent)) characters (`` ` ``) instead of double or single quotes. Template literals can contain placeholders. These are indicated by the dollar sign and curly braces (`${expression}`).

### Multi-lines

Any new line characters inserted in the source are part of the template literal. Using normal strings, you would have to use the following syntax in order to get multi-line strings:

```js
console.log(
  "string text line 1\n\
string text line 2",
);
// "string text line 1
// string text line 2"
```

To get the same effect with multi-line strings, you can now write:

```js
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"
```

### Embedded expressions

In order to embed expressions within normal strings, you would use the following syntax:

```js
const five = 5;
const ten = 10;
console.log(
  "Fifteen is " + (five + ten) + " and not " + (2 * five + ten) + ".",
);
// "Fifteen is 15 and not 20."
```

Now, with template literals, you are able to make use of the syntactic sugar making substitutions like this more readable:

```js
const five = 5;
const ten = 10;
console.log(`Fifteen is ${five + ten} and not ${2 * five + ten}.`);
// "Fifteen is 15 and not 20."
```

For more information, read about [Template literals](/en-US/docs/Web/JavaScript/Reference/Template_literals) in the [JavaScript reference](/en-US/docs/Web/JavaScript/Reference).

{{PreviousNext("Web/JavaScript/Guide/Expressions_and_operators", "Web/JavaScript/Guide/Representing_dates_times")}}
