---
title: "TypeError: can't convert x to BigInt"
slug: Web/JavaScript/Reference/Errors/Cant_convert_x_to_BigInt
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "x can't be converted to BigInt" occurs when attempting to convert a {{jsxref("Symbol")}}, [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null), or {{jsxref("undefined")}} value to a {{jsxref("BigInt")}}, or if an operation expecting a BigInt parameter receives a number.

## Message

```plain
TypeError: Cannot convert null to a BigInt (V8-based)
TypeError: can't convert null to BigInt (Firefox)
TypeError: Invalid argument type in ToBigInt operation (Safari)
```

## Error type

{{jsxref("TypeError")}}.

## What went wrong?

When using the [`BigInt()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) function to convert a value to a BigInt, the value would first be converted to a primitive. Then, if it's not one of BigInt, string, number, and boolean, the error is thrown.

Some operations, like [`BigInt.asIntN`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/asIntN), require the parameter to be a BigInt. Passing in a number in this case will also throw this error.

## Examples

### Using BigInt() on invalid values

```js example-bad
const a = BigInt(null);
// TypeError: can't convert null to BigInt
const b = BigInt(undefined);
// TypeError: can't convert undefined to BigInt
const c = BigInt(Symbol("1"));
// TypeError: can't convert Symbol("1") to BigInt
```

```js example-good
const a = BigInt(1);
const b = BigInt(true);
const c = BigInt("1");
const d = BigInt(Symbol("1").description);
```

> **Note:** Simply coercing the value to a string or number using [`String()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/String) or [`Number()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) before passing it to `BigInt()` is usually not sufficient to avoid all errors. If the string is not a valid integer number string, a [SyntaxError](/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_BigInt_syntax) is thrown; if the number is not an integer (most notably, {{jsxref("NaN")}}), a [RangeError](/en-US/docs/Web/JavaScript/Reference/Errors/Cant_be_converted_to_BigInt_because_it_isnt_an_integer) is thrown. If the range of input is unknown, properly validate it before using `BigInt()`.

### Passing a number to a function expecting a BigInt

```js example-bad
const a = BigInt.asIntN(4, 8);
// TypeError: can't convert 8 to BigInt
const b = new BigInt64Array(3).fill(3);
// TypeError: can't convert 3 to BigInt
```

```js example-good
const a = BigInt.asIntN(4, 8n);
const b = new BigInt64Array(3).fill(3n);
```

## See also

- [`BigInt()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)
