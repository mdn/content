---
title: Symbol.split
slug: Web/JavaScript/Reference/Global_Objects/Symbol/split
page-type: javascript-static-data-property
browser-compat: javascript.builtins.Symbol.split
---

{{JSRef}}

The **`Symbol.split`** static data property represents the well-known symbol specifying the method that splits a string at the indices that match a regular expression. This function is called by the {{jsxref("String.prototype.split()")}} method.

For more information, see {{jsxref("RegExp.@@split", "RegExp.prototype[@@split]()")}} and {{jsxref("String.prototype.split()")}}.

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
- {{jsxref("Symbol.replace")}}
- {{jsxref("Symbol.search")}}
- {{jsxref("RegExp.@@split", "RegExp.prototype[@@split]()")}}
