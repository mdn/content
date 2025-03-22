---
title: Symbol.search
slug: Web/JavaScript/Reference/Global_Objects/Symbol/search
page-type: javascript-static-data-property
browser-compat: javascript.builtins.Symbol.search
---

{{JSRef}}

The **`Symbol.search`** static data property represents the [well-known symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.search`. The {{jsxref("String.prototype.search()")}} method looks up this symbol on its first argument for the method that returns the index within a string that matches the current object.

For more information, see [`RegExp.prototype[Symbol.search]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search) and {{jsxref("String.prototype.search()")}}.

{{InteractiveExample("JavaScript Demo: Symbol.search")}}

```js interactive-example
class Search1 {
  constructor(value) {
    this.value = value;
  }
  [Symbol.search](string) {
    return string.indexOf(this.value);
  }
}

console.log("foobar".search(new Search1("bar")));
// Expected output: 3
```

## Value

The well-known symbol `Symbol.search`.

{{js_property_attributes(0, 0, 0)}}

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

console.log("foobar".search(new caseInsensitiveSearch("BaR"))); // 3
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Symbol.search` in `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{jsxref("Symbol.match")}}
- {{jsxref("Symbol.matchAll")}}
- {{jsxref("Symbol.replace")}}
- {{jsxref("Symbol.split")}}
- {{jsxref("String.prototype.search()")}}
- [`RegExp.prototype[Symbol.search]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search)
