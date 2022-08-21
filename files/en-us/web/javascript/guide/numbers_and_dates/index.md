---
title: Numbers and dates
slug: Web/JavaScript/Guide/Numbers_and_dates
tags:
  - Calculation
  - Dates
  - FP
  - Floating Point
  - Floating-Point
  - Guide
  - Integer
  - JavaScript
  - Math
  - Numbers
  - Numeric
  - l10n:priority
---
{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Expressions_and_Operators", "Web/JavaScript/Guide/Text_formatting")}}

This chapter introduces the concepts, objects and functions used to work with and perform calculations using numbers and dates in JavaScript. This includes using numbers written in various bases including decimal, binary, and hexadecimal, as well as the use of the global {{jsxref("Math")}} object to perform a wide variety of mathematical operations on numbers.

## Numbers

In JavaScript, numbers are implemented in [double-precision 64-bit binary format IEEE 754](https://en.wikipedia.org/wiki/Double-precision_floating-point_format) (i.e., a number between ±2^−1022 and ±2^+1023, or about ±10^−308 to ±10^+308, with a numeric precision of 53 bits). Integer values up to ±2^53 − 1 can be represented exactly.

In addition to being able to represent floating-point numbers, the number type has three symbolic values: `+`{{jsxref("Infinity")}}, `-`{{jsxref("Infinity")}}, and {{jsxref("NaN")}} (not-a-number).

See also [JavaScript data types and structures](/en-US/docs/Web/JavaScript/Data_structures) for context with other primitive types in JavaScript.

You can use four types of number literals: decimal, binary, octal, and hexadecimal.

### Decimal numbers

```js
1234567890
42

// Caution when using leading zeros:

0888 // 888 parsed as decimal
0777 // parsed as octal in non-strict mode (511 in decimal)
```

Note that decimal literals can start with a zero (`0`) followed by another decimal digit, but if every digit after the leading `0` is smaller than 8, the number gets parsed as an octal number.

### Binary numbers

Binary number syntax uses a leading zero followed by a lowercase or uppercase Latin letter "B" (`0b` or `0B`). If the digits after the `0b` are not 0 or 1, the following {{jsxref("SyntaxError")}} is thrown: "Missing binary digits after 0b".

```js
const FLT_SIGNBIT  = 0b10000000000000000000000000000000; // 2147483648
const FLT_EXPONENT = 0b01111111100000000000000000000000; // 2139095040
const FLT_MANTISSA = 0B00000000011111111111111111111111; // 8388607
```

### Octal numbers

The standard syntax for octal numbers is to prefix them with `0o`. For example:

```js
const a = 0o10; // 8
```

There's also a legacy syntax for octal numbers — by prefixing the octal number with a zero: `0644 === 420` and `"\045" === "%"`. If the digits after the `0` are outside the range 0 through 7, the number will be interpreted as a decimal number.

```js
const n = 0755; // 493
const m = 0644; // 420
```

[Strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode) forbids this octal syntax.

### Hexadecimal numbers

Hexadecimal number syntax uses a leading zero followed by a lowercase or uppercase Latin letter "X" (`0x` or `0X`). If the digits after 0x are outside the range (0123456789ABCDEF), the following {{jsxref("SyntaxError")}} is thrown: "Identifier starts immediately after numeric literal".

```js
0xFFFFFFFFFFFFFFFFF // 295147905179352830000
0x123456789ABCDEF   // 81985529216486900
0XA                 // 10
```

### Exponentiation

```js
1E3   // 1000
2e6   // 2000000
0.1e2 // 10
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

| Property                                             | Description                                                                                                                                        |
| ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("Number.MAX_VALUE")}}             | The largest positive representable number (`1.7976931348623157e+308`)                                                                                      |
| {{jsxref("Number.MIN_VALUE")}}             | The smallest positive representable number (`5e-324`)                                                                                                      |
| {{jsxref("Number.NaN")}}                     | Special "not a number" value                                                                                                                       |
| {{jsxref("Number.NEGATIVE_INFINITY")}} | Special negative infinite value; returned on overflow                                                                                              |
| {{jsxref("Number.POSITIVE_INFINITY")}} | Special positive infinite value; returned on overflow                                                                                              |
| {{jsxref("Number.EPSILON")}}                 | Difference between `1` and the smallest value greater than `1` that can be represented as a {{jsxref("Number")}} (`2.220446049250313e-16`) |
| {{jsxref("Number.MIN_SAFE_INTEGER")}}     | Minimum safe integer in JavaScript (−2^53 + 1, or `−9007199254740991`)                                                                             |
| {{jsxref("Number.MAX_SAFE_INTEGER")}}     | Maximum safe integer in JavaScript (+2^53 − 1, or `+9007199254740991`)                                                                             |

| Method                                           | Description                                                                                                                                                                                           |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("Number.parseFloat()")}}     | Parses a string argument and returns a floating point number. Same as the global {{jsxref("parseFloat", "parseFloat()")}} function.                                                       |
| {{jsxref("Number.parseInt()")}}         | Parses a string argument and returns an integer of the specified radix or base. Same as the global {{jsxref("parseInt", "parseInt()")}} function.                                         |
| {{jsxref("Number.isFinite()")}}         | Determines whether the passed value is a finite number.                                                                                                                                               |
| {{jsxref("Number.isInteger()")}}     | Determines whether the passed value is an integer.                                                                                                                                                    |
| {{jsxref("Number.isNaN()")}}             | Determines whether the passed value is {{jsxref("Global_Objects/NaN", "NaN")}}. More robust version of the original global {{jsxref("Global_Objects/isNaN", "isNaN()")}}. |
| {{jsxref("Number.isSafeInteger()")}} | Determines whether the provided value is a number that is a _safe integer_.                                                                                                                           |

The `Number` prototype provides methods for retrieving information from `Number` objects in various formats. The following table summarizes the methods of `Number.prototype`.

| Method                                                                   | Description                                                                                |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| {{jsxref("Number.toExponential", "toExponential()")}} | Returns a string representing the number in exponential notation.                          |
| {{jsxref("Number.toFixed", "toFixed()")}}                 | Returns a string representing the number in fixed-point notation.                          |
| {{jsxref("Number.toPrecision", "toPrecision()")}}         | Returns a string representing the number to a specified precision in fixed-point notation. |

## Math object

The built-in {{jsxref("Math")}} object has properties and methods for mathematical constants and functions. For example, the `Math` object's `PI` property has the value of pi (3.141…), which you would use in an application as

```js
Math.PI
```

Similarly, standard mathematical functions are methods of `Math`. These include trigonometric, logarithmic, exponential, and other functions. For example, if you want to use the trigonometric function sine, you would write

```js
Math.sin(1.56)
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

Read more about what you can do with BigInt values in the [Expressions and Operators](/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#bigint_operators) section, or the [BigInt reference](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt).

## Date object

JavaScript does not have a date data type. However, you can use the {{jsxref("Date")}} object and its methods to work with dates and times in your applications. The `Date` object has a large number of methods for setting, getting, and manipulating dates. It does not have any properties.

JavaScript handles dates similarly to Java. The two languages have many of the same date methods, and both languages store dates as the number of milliseconds since January 1, 1970, 00:00:00, with a Unix Timestamp being the number of seconds since January 1, 1970, 00:00:00.

The `Date` object range is -100,000,000 days to 100,000,000 days relative to 01 January, 1970 UTC.

To create a `Date` object:

```js
const dateObjectName = new Date([parameters]);
```

where `dateObjectName` is the name of the `Date` object being created; it can be a new object or a property of an existing object.

Calling `Date` without the `new` keyword returns a string representing the current date and time.

The `parameters` in the preceding syntax can be any of the following:

- Nothing: creates today's date and time. For example, `today = new Date();`.
- A string representing a date in the following form: "Month day, year hours:minutes:seconds." For example, `let Xmas95 = new Date("December 25, 1995 13:30:00")`. If you omit hours, minutes, or seconds, the value will be set to zero.
- A set of integer values for year, month, and day. For example, `let Xmas95 = new Date(1995, 11, 25)`.
- A set of integer values for year, month, day, hour, minute, and seconds. For example, `let Xmas95 = new Date(1995, 11, 25, 9, 30, 0);`.

### Methods of the Date object

The `Date` object methods for handling dates and times fall into these broad categories:

- "set" methods, for setting date and time values in `Date` objects.
- "get" methods, for getting date and time values from `Date` objects.
- "to" methods, for returning string values from `Date` objects.
- parse and UTC methods, for parsing `Date` strings.

With the "get" and "set" methods you can get and set seconds, minutes, hours, day of the month, day of the week, months, and years separately. There is a `getDay` method that returns the day of the week, but no corresponding `setDay` method, because the day of the week is set automatically. These methods use integers to represent these values as follows:

- Seconds and minutes: 0 to 59
- Hours: 0 to 23
- Day: 0 (Sunday) to 6 (Saturday)
- Date: 1 to 31 (day of the month)
- Months: 0 (January) to 11 (December)
- Year: years since 1900

For example, suppose you define the following date:

```js
const Xmas95 = new Date('December 25, 1995');
```

Then `Xmas95.getMonth()` returns 11, and `Xmas95.getFullYear()` returns 1995.

The `getTime` and `setTime` methods are useful for comparing dates. The `getTime` method returns the number of milliseconds since January 1, 1970, 00:00:00 for a `Date` object.

For example, the following code displays the number of days left in the current year:

```js
const today = new Date();
const endYear = new Date(1995, 11, 31, 23, 59, 59, 999); // Set day and month
endYear.setFullYear(today.getFullYear()); // Set year to this year
const msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day
let daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
daysLeft = Math.round(daysLeft); //returns days left in the year
```

This example creates a `Date` object named `today` that contains today's date. It then creates a `Date` object named `endYear` and sets the year to the current year. Then, using the number of milliseconds per day, it computes the number of days between `today` and `endYear`, using `getTime` and rounding to a whole number of days.

The `parse` method is useful for assigning values from date strings to existing `Date` objects. For example, the following code uses `parse` and `setTime` to assign a date value to the `IPOdate` object:

```js
const IPOdate = new Date();
IPOdate.setTime(Date.parse('Aug 9, 1995'));
```

### Example

In the following example, the function `JSClock()` returns the time in the format of a digital clock.

```js
function JSClock() {
  const time = new Date();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();
  let temp = String(hour % 12);
  if (hour === 0)
    temp = '12';
  temp += ((minute < 10) ? ':0' : ':') + minute;
  temp += ((second < 10) ? ':0' : ':') + second;
  temp += (hour >= 12) ? ' P.M.' : ' A.M.';
  return temp;
}
```

The `JSClock` function first creates a new `Date` object called `time`; since no arguments are given, time is created with the current date and time. Then calls to the `getHours`, `getMinutes`, and `getSeconds` methods assign the value of the current hour, minute, and second to `hour`, `minute`, and `second`.

The next four statements build a string value based on the time. The first statement creates a variable `temp`, assigning it a value using a conditional expression; if `hour` is greater than 12, (`hour - 12`), otherwise hour, unless hour is 0, in which case it becomes 12.

The next statement appends a `minute` value to `temp`. If the value of `minute` is less than 10, the conditional expression adds a string with a preceding zero; otherwise it adds a string with a demarcating colon. Then a statement appends a seconds value to `temp` in the same way.

Finally, a conditional expression appends "P.M." to `temp` if `hour` is 12 or greater; otherwise, it appends "A.M." to `temp`.

{{PreviousNext("Web/JavaScript/Guide/Expressions_and_Operators", "Web/JavaScript/Guide/Text_formatting")}}
