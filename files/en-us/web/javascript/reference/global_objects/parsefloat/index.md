---
title: parseFloat()
slug: Web/JavaScript/Reference/Global_Objects/parseFloat
page-type: javascript-function
browser-compat: javascript.builtins.parseFloat
---

{{jsSidebar("Objects")}}

The **`parseFloat()`** function parses a string argument and returns a floating point number.

{{InteractiveExample("JavaScript Demo: Standard built-in objects - parseFloat()")}}

```js interactive-example
function circumference(r) {
  return parseFloat(r) * 2.0 * Math.PI;
}

console.log(circumference(4.567));
// Expected output: 28.695307297889173

console.log(circumference("4.567abcdefgh"));
// Expected output: 28.695307297889173

console.log(circumference("abcdefgh"));
// Expected output: NaN
```

## Syntax

```js-nolint
parseFloat(string)
```

### Parameters

- `string`
  - : The value to parse, [coerced to a string](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). Leading {{Glossary("whitespace")}} in this argument is ignored.

### Return value

A floating point number parsed from the given `string`, or {{jsxref("NaN")}} when the first non-whitespace character cannot be converted to a number.

> [!NOTE]
> JavaScript does not have the distinction of "floating point numbers" and "integers" on the language level. [`parseInt()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt) and `parseFloat()` only differ in their parsing behavior, but not necessarily their return values. For example, `parseInt("42")` and `parseFloat("42")` would return the same value: a {{jsxref("Number")}} 42.

## Description

The `parseFloat` function converts its first argument to a string, parses that string as a decimal number literal, then returns a number or `NaN`. The number syntax it accepts can be summarized as:

- The characters accepted by `parseFloat()` are plus sign (`+`), minus sign (`-` U+002D HYPHEN-MINUS), decimal digits (`0` – `9`), decimal point (`.`), exponent indicator (`e` or `E`), and the `"Infinity"` literal.
- The `+`/`-` signs can only appear strictly at the beginning of the string, or immediately following the `e`/`E` character. The decimal point can only appear once, and only before the `e`/`E` character. The `e`/`E` character can only appear once, and only if there is at least one digit before it.
- Leading spaces in the argument are trimmed and ignored.
- `parseFloat()` can also parse and return {{jsxref("Infinity")}} or `-Infinity` if the string starts with `"Infinity"` or `"-Infinity"` preceded by none or more white spaces.
- `parseFloat()` picks the longest substring starting from the beginning that generates a valid number literal. If it encounters an invalid character, it returns the number represented up to that point, ignoring the invalid character and all characters following it.
- If the argument's first character can't start a legal number literal per the syntax above, `parseFloat` returns {{jsxref("NaN")}}.

Syntax-wise, `parseFloat()` parses a subset of the syntax that the [`Number()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) function accepts. Namely, `parseFloat()` does not support non-decimal literals with `0x`, `0b`, or `0o` prefixes but supports everything else. However, `parseFloat()` is more lenient than `Number()` because it ignores trailing invalid characters, which would cause `Number()` to return `NaN`.

Similar to number literals and `Number()`, the number returned from `parseFloat()` may not be exactly equal to the number represented by the string, due to floating point range and inaccuracy. For numbers outside the `-1.7976931348623158e+308` – `1.7976931348623158e+308` range (see {{jsxref("Number.MAX_VALUE")}}), `-Infinity` or `Infinity` is returned.

## Examples

### Using parseFloat()

The following examples all return `3.14`:

```js
parseFloat(3.14);
parseFloat("3.14");
parseFloat("  3.14  ");
parseFloat("314e-2");
parseFloat("0.0314E+2");
parseFloat("3.14some non-digit characters");
parseFloat({
  toString() {
    return "3.14";
  },
});
```

### parseFloat() returning NaN

The following example returns `NaN`:

```js
parseFloat("FF2");
```

Anecdotally, because the string `NaN` itself is invalid syntax as accepted by `parseFloat()`, passing `"NaN"` returns `NaN` as well.

```js
parseFloat("NaN"); // NaN
```

### Returning Infinity

Infinity values are returned when the number is outside the double-precision 64-bit IEEE 754-2019 format range:

```js
parseFloat("1.7976931348623159e+308"); // Infinity
parseFloat("-1.7976931348623159e+308"); // -Infinity
```

Infinity is also returned when the string starts with `"Infinity"` or `"-Infinity"`:

```js
parseFloat("Infinity"); // Infinity
parseFloat("-Infinity"); // -Infinity
```

### Interaction with BigInt values

`parseFloat()` does not handle {{jsxref("BigInt")}} values. It stops at the `n` character, and treats the preceding string as a normal integer, with possible loss of precision. If a BigInt value is passed to `parseFloat()`, it will be converted to a string, and the string will be parsed as a floating-point number, which may result in loss of precision as well.

```js example-bad
parseFloat(900719925474099267n); // 900719925474099300
parseFloat("900719925474099267n"); // 900719925474099300
```

You should pass the string to the [`BigInt()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) function instead, without the trailing `n` character.

```js example-good
BigInt("900719925474099267");
// 900719925474099267n
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("parseInt()")}}
- {{jsxref("Number.parseFloat()")}}
- {{jsxref("Number.parseInt()")}}
- {{jsxref("Number.prototype.toFixed()")}}
