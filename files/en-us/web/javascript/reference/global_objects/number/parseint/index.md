---
title: Number.parseInt()
slug: Web/JavaScript/Reference/Global_Objects/Number/parseInt
page-type: javascript-static-method
browser-compat: javascript.builtins.Number.parseInt
---

{{JSRef}}

The **`Number.parseInt()`** static method parses a string argument and
returns an integer of the specified radix or base.

{{InteractiveExample("JavaScript Demo: Number.parseInt()", "taller")}}

```js interactive-example
function roughScale(x, base) {
  const parsed = Number.parseInt(x, base);
  if (Number.isNaN(parsed)) {
    return 0;
  }
  return parsed * 100;
}

console.log(roughScale(" 0xF", 16));
// Expected output: 1500

console.log(roughScale("321", 2));
// Expected output: 0
```

## Syntax

```js-nolint
Number.parseInt(string)
Number.parseInt(string, radix)
```

### Parameters

- `string`
  - : The value to parse, [coerced to a string](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). Leading whitespace in this argument is ignored.
- `radix` {{optional_inline}}

  - : An integer between `2` and `36` that represents the
    _radix_ (the base in mathematical numeral systems) of the
    `string`.

    If `radix` is undefined or `0`, it is assumed to be `10` except when the number begins with the code unit pairs `0x` or `0X`, in which case a radix of `16` is assumed.

### Return value

An integer parsed from the given `string`.

If the `radix` is smaller than `2` or bigger than
`36`, or the first non-whitespace character cannot be converted to a number,
{{jsxref("NaN")}} is returned.

## Examples

### Number.parseInt vs. parseInt

This method has the same functionality as the global {{jsxref("parseInt()")}} function:

```js
Number.parseInt === parseInt; // true
```

Its purpose is modularization of globals. Please see
{{jsxref("parseInt()")}} for more detail and examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Number.parseInt` in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number")}}
- {{jsxref("parseInt()")}}
