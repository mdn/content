---
title: Number.parseInt()
slug: Web/JavaScript/Reference/Global_Objects/Number/parseInt
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Number
  - Polyfill
browser-compat: javascript.builtins.Number.parseInt
---
{{JSRef}}

The **`Number.parseInt()`** method parses a string argument and
returns an integer of the specified radix or base.

{{EmbedInteractiveExample("pages/js/number-parseint.html", "taller")}}

## Syntax

```js
Number.parseInt(string)
Number.parseInt(string, radix)
```

### Parameters

- `string`
  - : The value to parse. If this argument is not a string, then it is converted to one
    using the [`ToString`](https://tc39.es/ecma262/#sec-tostring)
    abstract operation. Leading whitespace in this argument is ignored.
- `radix`_ {{optional_inline}}_

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

### Number.parseInt vs parseInt

This method has the same functionality as the global {{jsxref("parseInt",
  "parseInt()")}} function:

```js
Number.parseInt === parseInt // true
```

and is part of ECMAScript 2015 (its purpose is modularization of globals). Please see
{{jsxref("parseInt", "parseInt()")}} for more detail and examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `Number.parseInt` is available in [`core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- The {{jsxref("Number")}} object it belongs to.
- The global {{jsxref("parseInt", "parseInt()")}} method.
