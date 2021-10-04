---
title: parseFloat()
slug: Web/JavaScript/Reference/Global_Objects/parseFloat
tags:
  - JavaScript
  - Method
  - Reference
browser-compat: javascript.builtins.parseFloat
---

{{jsSidebar("Objects")}}

The **`parseFloat()`** function parses
an argument (converting it to a string first if needed) and returns a floating
point number.

{{EmbedInteractiveExample("pages/js/globalprops-parsefloat.html")}}

## Syntax

```js
parseFloat(string);
```

### Parameters

- `string`
  - : The value to parse. If this argument is not a string, then it is converted to one
    using the
    [`ToString`](https://tc39.es/ecma262/#sec-tostring) abstract
    operation. Leading {{glossary("whitespace")}} in this argument is ignored.

### Return value

A floating point number parsed from the given `string`.

Or {{jsxref("NaN")}} when the first non-whitespace character cannot be converted to a
number.

## Description

`parseFloat` is a function property of the global object.

- If `parseFloat` encounters a character other than a plus sign
  (`+`), minus sign (`-` U+002D HYPHEN-MINUS), numeral
  (`0`–`9`), decimal point (`.`), or exponent
  (`e` or `E`), it returns the value up to that character,
  ignoring the invalid character and characters following it.
- A _second_ decimal point also stops parsing (characters up to that point
  will still be parsed).
- Leading and trailing spaces in the argument are ignored.
- If the argument’s first character can’t be converted to a number (it’s not any of
  the above characters), `parseFloat` returns {{jsxref("NaN")}}.
- `parseFloat` can also parse and return {{jsxref("Infinity")}}.
- `parseFloat` converts {{jsxref("BigInt")}} syntax to {{jsxref("Number",
  	"Numbers")}}, losing precision. This happens because the trailing `n`
  character is discarded.

Consider {{jsxref("Number", "Number(value)")}} for stricter parsing, which converts to
{{jsxref("NaN")}} for arguments with invalid characters anywhere.

`parseFloat` will parse non-string objects if they have a
{{jsxref("Object.toString", "toString")}} or {{jsxref("Object.valueOf", "valueOf")}}
method. The returned value is the same as if `parseFloat` had been called
on the result of those methods.

## Examples

### `parseFloat` returning a number

The following examples all return `3.14`:

```js
parseFloat(3.14);
parseFloat("3.14");
parseFloat("  3.14  ");
parseFloat("314e-2");
parseFloat("0.0314E+2");
parseFloat("3.14some non-digit characters");
parseFloat({
  toString: function () {
    return "3.14";
  },
});
```

### `parseFloat` returning `NaN`

The following example returns `NaN`:

```js
parseFloat("FF2");
```

### `parseFloat` and `BigInt`

The following examples both return `900719925474099300`, losing precision as
the integer is too large to be represented as a float:

```js
parseFloat(900719925474099267n);
parseFloat("900719925474099267n");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("parseInt", "parseInt()")}}
- {{jsxref("Number.parseFloat()")}}
- {{jsxref("Number.parseInt()")}}
- {{jsxref("Number.toFixed()")}}
- {{jsxref("isNaN", "isNaN()")}}
