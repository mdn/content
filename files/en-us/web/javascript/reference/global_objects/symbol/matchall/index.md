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

The **`Symbol.matchAll`** well-known symbol returns an iterator, that yields matches of the regular expression against a string. This function is called by the {{jsxref("String.prototype.matchAll()")}} method.

{{EmbedInteractiveExample("pages/js/symbol-matchall.html","shorter")}}

## Description

This Symbol is used for {{jsxref("String.prototype.matchAll()")}} and specifically in {{jsxref("RegExp.@@matchAll", "RegExp.prototype[@@matchAll]()")}}. The following two examples return same result:

```js
'abc'.matchAll(/a/);

/a/[Symbol.matchAll]('abc');
```

This method exists for customizing match behavior within {{jsxref("RegExp")}} subclasses.

{{js_property_attributes(0,0,0)}}

## Examples

### Using Symbol.matchAll

```js
const str = '2016-01-02|2019-03-07';

const numbers = {
  *[Symbol.matchAll](str) {
    for (const n of str.matchAll(/[0-9]+/g))
      yield n[0];
  }
};

console.log(Array.from(str.matchAll(numbers)));
//  Array ["2016", "01", "02", "2019", "03", "07"]
```

See {{jsxref("String.prototype.matchAll()")}} and {{jsxref("RegExp.@@matchAll", "RegExp.prototype[@@matchAll]()")}} for more examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Symbol.matchAll` in `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{jsxref("String.prototype.matchAll()")}}
- {{jsxref("RegExp.@@matchAll", "RegExp.prototype[@@matchAll]()")}}
