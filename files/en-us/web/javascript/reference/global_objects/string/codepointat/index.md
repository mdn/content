---
title: String.prototype.codePointAt()
slug: Web/JavaScript/Reference/Global_Objects/String/codePointAt
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - Polyfill
browser-compat: javascript.builtins.String.codePointAt
---
{{JSRef}}

The **`codePointAt()`** method returns a non-negative integer
that is the Unicode code point value at the given position.
Note that this function does not give the nth code point in a string,
but the code point starting at the specified string index.

{{EmbedInteractiveExample("pages/js/string-codepointat.html","shorter")}}

## Syntax

```js
codePointAt(pos)
```

### Parameters

- `pos`
  - : Position of an element in `str` to return the code point value
    from.

### Return value

A decimal number representing the code point value of the character at the given `pos`.

- If there is no element at `pos`, returns [`undefined`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined).
- If the element at `pos` is a UTF-16 high surrogate, returns the code point of the surrogate _pair_.
- If the element at `pos` is a UTF-16 low surrogate, returns _only_ the low surrogate code point.

## Examples

### Using codePointAt()

```js
'ABC'.codePointAt(0)                        // 65
'ABC'.codePointAt(0).toString(16)           // 41

'😍'.codePointAt(0)                         // 128525
'\ud83d\ude0d'.codePointAt(0)               // 128525
'\ud83d\ude0d'.codePointAt(0).toString(16)  // 1f60d

'😍'.codePointAt(1)                         // 56845
'\ud83d\ude0d'.codePointAt(1)               // 56845
'\ud83d\ude0d'.codePointAt(1).toString(16)  // de0d

'ABC'.codePointAt(42)                       // undefined
```

### Looping with codePointAt()

Because indexing to a `pos` whose element is a UTF-16 low surrogate, returns _only_ the low surrogate,
it's better not to index directly into a UTF-16 string.

Instead, use a [`for...of`](/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement) statement
or an Array's [`forEach()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) method
(or anything which correctly iterates UTF-16 surrogates) to iterate the string, using `codePointAt(0)` to get the code point of each element.

```js
for (const codePoint of '\ud83d\udc0e\ud83d\udc71\u2764') {
  console.log(codePoint.codePointAt(0).toString(16))
}
// '1f40e', '1f471', '2764'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.prototype.codePointAt` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.fromCodePoint()")}}
- {{jsxref("String.fromCharCode()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.charAt()")}}
