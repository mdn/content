---
title: Symbol.match
slug: Web/JavaScript/Reference/Global_Objects/Symbol/match
tags:
  - ECMAScript 2015
  - JavaScript
  - Property
  - Symbol
  - Polyfill
browser-compat: javascript.builtins.Symbol.match
---
{{JSRef}}

The **`Symbol.match`** well-known symbol specifies the matching of a regular expression against a string. This function is called by the {{jsxref("String.prototype.match()")}} method.

{{EmbedInteractiveExample("pages/js/symbol-match.html", "taller")}}

## Description

This function is also used to identify if objects have the behavior of regular expressions. For example, the methods {{jsxref("String.prototype.startsWith()")}}, {{jsxref("String.prototype.endsWith()")}} and {{jsxref("String.prototype.includes()")}}, check if their first argument is a regular expression and will throw a {{jsxref("TypeError")}} if they are. Now, if the `match` symbol is set to `false` (or a [Falsy](/en-US/docs/Glossary/Falsy) value), it indicates that the object is not intended to be used as a regular expression object.

{{js_property_attributes(0,0,0)}}

## Examples

### Disabling the `isRegExp` check

The following code will throw a {{jsxref("TypeError")}}:

```js
'/bar/'.startsWith(/bar/);

// Throws TypeError, as /bar/ is a regular expression
// and Symbol.match is not modified.
```

However, if you set `Symbol.match` to `false`, the `isRegExp` check (that uses the `match` property) will indicate that the object is not a regular expression object. The methods `startsWith` and `endsWith` won't throw a `TypeError` as a consequence.

```js
const re = /foo/;
re[Symbol.match] = false;
'/foo/'.startsWith(re); // true
'/baz/'.endsWith(re);   // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Symbol.match` in `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{jsxref("Symbol.replace")}}
- {{jsxref("Symbol.search")}}
- {{jsxref("Symbol.split")}}
- {{jsxref("RegExp.@@match", "RegExp.prototype[@@match]()")}}
