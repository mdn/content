---
title: String.fromCodePoint()
slug: Web/JavaScript/Reference/Global_Objects/String/fromCodePoint
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Reference
  - String
  - UTF-32
  - Unicode
  - Polyfill
browser-compat: javascript.builtins.String.fromCodePoint
---
{{JSRef}}

The static **`String.fromCodePoint()`** method returns a string
created by using the specified sequence of code points.

{{EmbedInteractiveExample("pages/js/string-fromcodepoint.html","shorter")}}

## Syntax

```js
String.fromCodePoint(num1)
String.fromCodePoint(num1, num2)
String.fromCodePoint(num1, num2, ..., numN)
```

### Parameters

- `num1, ..., numN`
  - : A sequence of code points.

### Return value

A string created by using the specified sequence of code points.

### Exceptions

- A {{jsxref("Errors/Not_a_codepoint", "RangeError")}} is thrown if an invalid Unicode
  code point is given (e.g. `"RangeError: NaN is not a valid code point"`).

## Description

This method returns a string (and _not_ a {{jsxref("String")}} object).

Because `fromCodePoint()` is a static method of {{jsxref("String")}}, you
must call it as `String.fromCodePoint()`, rather than as a method of a
{{jsxref("String")}} object you created.

## Polyfill

The `String.fromCodePoint()` method has been added to ECMAScript 2015 and
may not be supported in all web browsers or environments yet.

Use the code below for a polyfill:

```js
if (!String.fromCodePoint) (function(stringFromCharCode) {
    var fromCodePoint = function(_) {
      var codeUnits = [], codeLen = 0, result = "";
      for (var index=0, len = arguments.length; index !== len; ++index) {
        var codePoint = +arguments[index];
        // correctly handles all cases including `NaN`, `-Infinity`, `+Infinity`
        // The surrounding `!(...)` is required to correctly handle `NaN` cases
        // The (codePoint>>>0) === codePoint clause handles decimals and negatives
        if (!(codePoint < 0x10FFFF && (codePoint>>>0) === codePoint))
          throw RangeError("Invalid code point: " + codePoint);
        if (codePoint <= 0xFFFF) { // BMP code point
          codeLen = codeUnits.push(codePoint);
        } else { // Astral code point; split in surrogate halves
          // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
          codePoint -= 0x10000;
          codeLen = codeUnits.push(
            (codePoint >> 10) + 0xD800,  // highSurrogate
            (codePoint % 0x400) + 0xDC00 // lowSurrogate
          );
        }
        if (codeLen >= 0x3fff) {
          result += stringFromCharCode.apply(null, codeUnits);
          codeUnits.length = 0;
        }
      }
      return result + stringFromCharCode.apply(null, codeUnits);
    };
    try { // IE 8 only supports `Object.defineProperty` on DOM elements
      Object.defineProperty(String, "fromCodePoint", {
        "value": fromCodePoint, "configurable": true, "writable": true
      });
    } catch(e) {
      String.fromCodePoint = fromCodePoint;
    }
}(String.fromCharCode));
```

## Examples

### Using `fromCodePoint()`

Valid input:

```js
String.fromCodePoint(42);       // "*"
String.fromCodePoint(65, 90);   // "AZ"
String.fromCodePoint(0x404);    // "\u0404" == "Є"
String.fromCodePoint(0x2F804);  // "\uD87E\uDC04"
String.fromCodePoint(194564);   // "\uD87E\uDC04"
String.fromCodePoint(0x1D306, 0x61, 0x1D307); // "\uD834\uDF06a\uD834\uDF07"
```

Invalid input:

```js
String.fromCodePoint('_');      // RangeError
String.fromCodePoint(Infinity); // RangeError
String.fromCodePoint(-1);       // RangeError
String.fromCodePoint(3.14);     // RangeError
String.fromCodePoint(3e-2);     // RangeError
String.fromCodePoint(NaN);      // RangeError
```

### Compared to `fromCharCode()`

{{jsxref("String.fromCharCode()")}} cannot return supplementary characters (i.e. code
points `0x010000` – `0x10FFFF`) by specifying their code point.
Instead, it requires the UTF-16 surrogate pair in order to return a supplementary
character:

```js
String.fromCharCode(0xD83C, 0xDF03); // Code Point U+1F303 "Night with
String.fromCharCode(55356, 57091);   // Stars" == "\uD83C\uDF03"
```

`String.fromCodePoint()`, on the other hand, can return 4-byte supplementary
characters, as well as the more common 2-byte BMP characters, by specifying their code
point (which is equivalent to the UTF-32 code unit):

```js
String.fromCodePoint(0x1F303); // or 127747 in decimal
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `String.fromCodePoint` is available in [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.fromCharCode()")}}
- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.codePointAt()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
