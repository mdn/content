---
title: Symbol.replace
slug: Web/JavaScript/Reference/Global_Objects/Symbol/replace
page-type: javascript-static-data-property
browser-compat: javascript.builtins.Symbol.replace
---

{{JSRef}}

The **`Symbol.replace`** static data property represents the well-known symbol specifying the method that replaces matched substrings of a string. This function is called by the {{jsxref("String.prototype.replace()")}} method.

For more information, see {{jsxref("RegExp.@@replace", "RegExp.prototype[@@replace]()")}} and {{jsxref("String.prototype.replace()")}}.

{{EmbedInteractiveExample("pages/js/symbol-replace.html")}}

## Value

The well-known symbol `@@replace`.

{{js_property_attributes(0, 0, 0)}}

## Examples

### Using Symbol.replace

```js
class CustomReplacer {
  constructor(value) {
    this.value = value;
  }
  [Symbol.replace](string) {
    return string.replace(this.value, "#!@?");
  }
}

console.log("football".replace(new CustomReplacer("foo"))); // "#!@?tball"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Symbol.replace` in `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{jsxref("Symbol.match")}}
- {{jsxref("Symbol.search")}}
- {{jsxref("Symbol.split")}}
- {{jsxref("RegExp.@@replace", "RegExp.prototype[@@replace]()")}}
