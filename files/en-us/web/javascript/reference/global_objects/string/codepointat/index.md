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

The **`codePointAt()`** method returns a non-negative integer that is the UTF-16
code point value.

{{EmbedInteractiveExample("pages/js/string-codepointat.html","shorter")}}

## Syntax

```js
codePointAt(pos)
```

### Parameters

- `pos`
  - : Position of an element in `str` to return the code point value from.

### Return value

A number representing the code point value of the character at the given `pos`.
If there is no element at `pos`, returns {{jsxref("undefined")}}.

## Description

If there is no element at the specified position,
{{jsxref("undefined")}} is returned. If no UTF-16 surrogate pair begins
at `pos`, the code unit at `pos` is returned.

## Examples

### Using codePointAt()

```js
'ABC'.codePointAt(1)           // 66
'\uD800\uDC00'.codePointAt(0)  // 65536

'XYZ'.codePointAt(42)          // undefined
```

### Looping with codePointAt()

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

- A polyfill of `String.prototype.codePointAt` is available in
  [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.fromCodePoint()")}}
- {{jsxref("String.fromCharCode()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.charAt()")}}
