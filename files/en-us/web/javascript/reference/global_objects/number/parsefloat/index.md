---
title: Number.parseFloat()
slug: Web/JavaScript/Reference/Global_Objects/Number/parseFloat
page-type: javascript-static-method
browser-compat: javascript.builtins.Number.parseFloat
---

{{JSRef}}

The **`Number.parseFloat()`** static method parses an argument and returns a floating point number. If a number cannot be parsed from the argument, it returns {{jsxref("NaN")}}.

{{InteractiveExample("JavaScript Demo: Number.parseFloat()")}}

```js interactive-example
function circumference(r) {
  if (Number.isNaN(Number.parseFloat(r))) {
    return 0;
  }
  return parseFloat(r) * 2.0 * Math.PI;
}

console.log(circumference("4.567abcdefgh"));
// Expected output: 28.695307297889173

console.log(circumference("abcdefgh"));
// Expected output: 0
```

## Syntax

```js-nolint
Number.parseFloat(string)
```

### Parameters

- `string`
  - : The value to parse, [coerced to a string](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). Leading {{Glossary("whitespace")}} in this argument is ignored.

### Return value

A floating point number parsed from the given `string`.

Or {{jsxref("NaN")}} when the first non-whitespace character cannot be converted to a number.

## Examples

### Number.parseFloat vs. parseFloat

This method has the same functionality as the global {{jsxref("parseFloat()")}} function:

```js
Number.parseFloat === parseFloat; // true
```

Its purpose is modularization of globals.

See {{jsxref("parseFloat()")}} for more detail and examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Number.parseFloat` in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number")}}
- {{jsxref("parseFloat()")}}
