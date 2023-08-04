---
title: Symbol.replace
slug: Web/JavaScript/Reference/Global_Objects/Symbol/replace
page-type: javascript-static-data-property
browser-compat: javascript.builtins.Symbol.replace
---

{{JSRef}}

The **`Symbol.replace`** static data property represents the [well-known symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `@@replace`. The {{jsxref("String.prototype.replace()")}} method looks up this symbol on its first argument for the method that replaces substrings matched by the current object.

For more information, see [`RegExp.prototype[@@replace]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@replace) and {{jsxref("String.prototype.replace()")}}.

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
- {{jsxref("Symbol.matchAll")}}
- {{jsxref("Symbol.search")}}
- {{jsxref("Symbol.split")}}
- {{jsxref("String.prototype.replace()")}}
- [`RegExp.prototype[@@replace]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@replace)
