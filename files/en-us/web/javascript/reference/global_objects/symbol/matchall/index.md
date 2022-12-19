---
title: Symbol.matchAll
slug: Web/JavaScript/Reference/Global_Objects/Symbol/matchAll
tags:
  - JavaScript
  - Property
  - Reference
  - Symbol
  - Polyfill
browser-compat: javascript.builtins.Symbol.matchAll
---

{{JSRef}}

The **`Symbol.matchAll`** well-known symbol specifies the method that returns an iterator, that yields matches of the regular expression against a string. This function is called by the {{jsxref("String.prototype.matchAll()")}} method.

For more information, see {{jsxref("RegExp.@@matchAll", "RegExp.prototype[@@matchAll]()")}} and {{jsxref("String.prototype.matchAll()")}}.

{{EmbedInteractiveExample("pages/js/symbol-matchall.html")}}

## Value

The well-known symbol `@@matchAll`.

{{js_property_attributes(0, 0, 0)}}

## Examples

### Using Symbol.matchAll

```js
const str = "2016-01-02|2019-03-07";

const numbers = {
  *[Symbol.matchAll](str) {
    for (const n of str.matchAll(/[0-9]+/g)) yield n[0];
  },
};

console.log(Array.from(str.matchAll(numbers)));
// ["2016", "01", "02", "2019", "03", "07"]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Symbol.matchAll` in `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{jsxref("String.prototype.matchAll()")}}
- {{jsxref("RegExp.@@matchAll", "RegExp.prototype[@@matchAll]()")}}
