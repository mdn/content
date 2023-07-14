---
title: Number.parseFloat()
slug: Web/JavaScript/Reference/Global_Objects/Number/parseFloat
page-type: javascript-static-method
browser-compat: javascript.builtins.Number.parseFloat
---

{{JSRef}}

The **`Number.parseFloat()`** static method parses an argument and returns a floating point number. If a number cannot be parsed from the argument, it returns {{jsxref("NaN")}}.

{{EmbedInteractiveExample("pages/js/number-parsefloat.html")}}

## Syntax

```js-nolint
Number.parseFloat(string)
```

### Parameters

- `string`
  - : The value to parse, [coerced to a string](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). Leading {{glossary("whitespace")}} in this argument is ignored.

### Return value

A floating point number parsed from the given `string`.

Or {{jsxref("NaN")}} when the first non-whitespace character cannot be converted to a number.

## Examples

### Number.parseFloat vs. parseFloat

This method has the same functionality as the global {{jsxref("parseFloat", "parseFloat()")}} function:

```js
Number.parseFloat === parseFloat; // true
```

Its purpose is modularization of globals.

See {{jsxref("parseFloat", "parseFloat()")}} for more detail and examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Number.parseFloat` in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number")}}: The object this method belongs to.
- The global {{jsxref("parseFloat", "parseFloat()")}} method.
