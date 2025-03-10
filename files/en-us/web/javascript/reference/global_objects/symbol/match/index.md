---
title: Symbol.match
slug: Web/JavaScript/Reference/Global_Objects/Symbol/match
page-type: javascript-static-data-property
browser-compat: javascript.builtins.Symbol.match
---

{{JSRef}}

The **`Symbol.match`** static data property represents the [well-known symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.match`. The {{jsxref("String.prototype.match()")}} method looks up this symbol on its first argument for the method used to match an input string against the current object. This symbol is also used to determine if an object should be [treated as a regex](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes).

For more information, see [`RegExp.prototype[Symbol.match]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match) and {{jsxref("String.prototype.match()")}}.

{{InteractiveExample("JavaScript Demo: Symbol.match", "taller")}}

```js interactive-example
const regexp1 = /foo/;
// console.log('/foo/'.startsWith(regexp1));
// Expected output (Chrome): Error: First argument to String.prototype.startsWith must not be a regular expression
// Expected output (Firefox): Error: Invalid type: first can't be a Regular Expression
// Expected output (Safari): Error: Argument to String.prototype.startsWith cannot be a RegExp

regexp1[Symbol.match] = false;

console.log("/foo/".startsWith(regexp1));
// Expected output: true

console.log("/baz/".endsWith(regexp1));
// Expected output: false
```

## Value

The well-known symbol `Symbol.match`.

{{js_property_attributes(0, 0, 0)}}

## Description

This function is also used to identify [if objects have the behavior of regular expressions](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes). For example, the methods {{jsxref("String.prototype.startsWith()")}}, {{jsxref("String.prototype.endsWith()")}} and {{jsxref("String.prototype.includes()")}}, check if their first argument is a regular expression and will throw a {{jsxref("TypeError")}} if they are. Now, if the `match` symbol is set to `false` (or a [Falsy](/en-US/docs/Glossary/Falsy) value except `undefined`), it indicates that the object is not intended to be used as a regular expression object.

## Examples

### Marking a RegExp as not a regex

The following code will throw a {{jsxref("TypeError")}}:

```js
"/bar/".startsWith(/bar/);

// Throws TypeError, as /bar/ is a regular expression
// and Symbol.match is not modified.
```

However, if you set `Symbol.match` to `false`, the object will be considered as [not a regular expression object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes). The methods `startsWith` and `endsWith` won't throw a `TypeError` as a consequence.

```js
const re = /foo/;
re[Symbol.match] = false;
"/foo/".startsWith(re); // true
"/baz/".endsWith(re); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Symbol.match` in `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{jsxref("Symbol.matchAll")}}
- {{jsxref("Symbol.replace")}}
- {{jsxref("Symbol.search")}}
- {{jsxref("Symbol.split")}}
- {{jsxref("String.prototype.match()")}}
- [`RegExp.prototype[Symbol.match]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match)
