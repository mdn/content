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
that is the UTF-16 code point value.

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
for (let codePoint of '\ud83d\udc0e\ud83d\udc71\u2764') {
   console.log(codePoint.codePointAt(0).toString(16))
}
// '1f40e', '1f471', '2764'
```

## Polyfill

The following extends Strings to include the `codePointAt()` function as
specified in ECMAScript 2015 for browsers without native support.

```js
/*! https://mths.be/codepointat v0.2.0 by @mathias */
if (!String.prototype.codePointAt) {
  (function() {
    'use strict'; // needed to support `apply`/`call` with `undefined`/`null`
    var defineProperty = (function() {
      // IE 8 only supports `Object.defineProperty` on DOM elements
      try {
        var object = {};
        var $defineProperty = Object.defineProperty;
        var result = $defineProperty(object, object, object) && $defineProperty;
      } catch(error) {}
      return result;
    }());
    var codePointAt = function(position) {
      if (this == null) {
        throw TypeError();
      }
      var string = String(this);
      var size = string.length;
      // `ToInteger`
      var index = position ? Number(position) : 0;
      if (index != index) { // better `isNaN`
        index = 0;
      }
      // Account for out-of-bounds indices:
      if (index < 0 || index >= size) {
        return undefined;
      }
      // Get the first code unit
      var first = string.charCodeAt(index);
      var second;
      if ( // check if it’s the start of a surrogate pair
        first >= 0xD800 && first <= 0xDBFF && // high surrogate
        size > index + 1 // there is a next code unit
      ) {
        second = string.charCodeAt(index + 1);
        if (second >= 0xDC00 && second <= 0xDFFF) { // low surrogate
          // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
          return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
        }
      }
      return first;
    };
    if (defineProperty) {
      defineProperty(String.prototype, 'codePointAt', {
        'value': codePointAt,
        'configurable': true,
        'writable': true
      });
    } else {
      String.prototype.codePointAt = codePointAt;
    }
  }());
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `String.prototype.codePointAt` is available in [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.fromCodePoint()")}}
- {{jsxref("String.fromCharCode()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.charAt()")}}
