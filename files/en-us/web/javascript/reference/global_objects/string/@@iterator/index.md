---
title: String.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/String/@@iterator
tags:
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - Polyfill
browser-compat: javascript.builtins.String.@@iterator
---
{{JSRef}}

The **`[@@iterator]()`** method returns a new iterator object
that iterates over the code points of a String value, returning each code point as a
String value.

{{EmbedInteractiveExample("pages/js/string-iterator.html")}}

## Syntax

```js
str[Symbol.iterator]
```

### Return value

A new iterator object.

## Description

A String is [iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) because it implements the `@@iterator` method. It means strings can be used in [`for...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loops, be [spread](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) in arrays, etc.

Strings are iterated by Unicode codepoints. This means grapheme clusters will be split, but surrogate pairs will be preserved.

```js
// "Backhand Index Pointing Right: Dark Skin Tone"
[..."👉🏿"]; // ['👉', '🏿']
// splits into the basic "Backhand Index Pointing Right" emoji and
// the "Dark skin tone" emoji

// "Family: Man, Boy"
[..."👨‍👦"]; // [ '👨', '‍', '👦' ]
// splits into the "Man" and "Boy" emoji, joined by a ZWJ
```

## Examples

### Using \[@@iterator]\()

```js
const str = 'A\uD835\uDC68';

const strIter = str[Symbol.iterator]();

console.log(strIter.next().value); // "A"
console.log(strIter.next().value); // "\uD835\uDC68"
```

### Using \[@@iterator]\() with for..of

```js
const str = 'A\uD835\uDC68B\uD835\uDC69C\uD835\uDC6A';

for (const v of str) {
  console.log(v);
}
// "A"
// "\uD835\uDC68"
// "B"
// "\uD835\uDC69"
// "C"
// "\uD835\uDC6A"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.prototype[@@iterator]` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Iteration protocols](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
