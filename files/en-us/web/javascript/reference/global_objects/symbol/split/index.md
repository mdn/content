---
title: Symbol.split
slug: Web/JavaScript/Reference/Global_Objects/Symbol/split
page-type: javascript-static-data-property
browser-compat: javascript.builtins.Symbol.split
---

{{JSRef}}

The **`Symbol.split`** static data property represents the [well-known symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `@@split`. The {{jsxref("String.prototype.split()")}} method looks up this symbol on its first argument for the method that splits a string at the indices that match the current object.

For more information, see[`RegExp.prototype[@@split]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@split) and {{jsxref("String.prototype.split()")}}.

{{EmbedInteractiveExample("pages/js/symbol-split.html")}}

## Value

The well-known symbol `@@split`.

{{js_property_attributes(0, 0, 0)}}

## Examples

### Custom reverse split

```js
class ReverseSplit {
  [Symbol.split](string) {
    const array = string.split(" ");
    return array.reverse();
  }
}

console.log("Another one bites the dust".split(new ReverseSplit()));
// [ "dust", "the", "bites", "one", "Another" ]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Symbol.split` in `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{jsxref("Symbol.match")}}
- {{jsxref("Symbol.matchAll")}}
- {{jsxref("Symbol.replace")}}
- {{jsxref("Symbol.search")}}
- {{jsxref("String.prototype.split()")}}
- [`RegExp.prototype[@@split]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@split)
