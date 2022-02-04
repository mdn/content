---
title: Symbol.search
slug: Web/JavaScript/Reference/Global_Objects/Symbol/search
tags:
  - ECMAScript 2015
  - JavaScript
  - Property
  - Symbol
  - Polyfill
browser-compat: javascript.builtins.Symbol.search
---
{{JSRef}}

The **`Symbol.search`** well-known symbol specifies the method that returns the index within a string that matches the regular expression. This function is called by the {{jsxref("String.prototype.search()")}} method.

For more information, see {{jsxref("RegExp.@@search", "RegExp.prototype[@@search]()")}} and {{jsxref("String.prototype.search()")}}.

{{EmbedInteractiveExample("pages/js/symbol-search.html")}}{{js_property_attributes(0,0,0)}}

## Examples

### Custom string search

```js
class caseInsensitiveSearch {
  constructor(value) {
    this.value = value.toLowerCase();
  }
  [Symbol.search](string) {
    return string.toLowerCase().indexOf(this.value);
  }
}

console.log('foobar'.search(new caseInsensitiveSearch('BaR')));
// expected output: 3
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Symbol.search` in `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{jsxref("Symbol.match")}}
- {{jsxref("Symbol.replace")}}
- {{jsxref("Symbol.split")}}
- {{jsxref("RegExp.@@search", "RegExp.prototype[@@search]()")}}
