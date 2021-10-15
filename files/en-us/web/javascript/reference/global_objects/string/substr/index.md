---
title: String.prototype.substr()
slug: Web/JavaScript/Reference/Global_Objects/String/substr
tags:
  - Deprecated
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - Polyfill
browser-compat: javascript.builtins.String.substr
---
{{JSRef}}

The **`substr()`** method returns a portion
of the string, starting at the specified index and extending for a given number of
characters afterwards.

{{EmbedInteractiveExample("pages/js/string-substr.html")}}

## Syntax

```js
substr(start)
substr(start, length)
```

### Parameters

- `start`
  - : The index of the first character to include in the returned substring.
- `length`
  - : Optional. The number of characters to extract.

### Return value

A new string containing the specified part of the given string.

## Description

`substr()` extracts `length` characters from a
`str`, counting from the `start` index.

- If `start` is a non-negative number, the index starts counting at
  the start of the string. Its value is capped at `str.length`.
- If `start` is a negative number, the index starts counting
  from the end of the string. Its value is capped at
  `-str.length`.
- Note: In Microsoft JScript, negative values of the `start`
  argument are not considered to refer to the end of the string.
- If `length` is omitted, `substr()` extracts
  characters to the end of the string.
- If `length` is {{jsxref("undefined")}}, `substr()`
  extracts characters to the end of the string.
- If `length` is a negative number, it is treated as
  `0`.
- For both `start` and `length`,
  {{jsxref("NaN")}} is treated as `0`.

## Polyfill

Microsoft's JScript does not support negative values for the start index. To use this
feature in JScript, you can use the following code:

```js
// only run when the substr() function is broken
if ('ab'.substr(-1) != 'b') {
  /**
   *  Get the substring of a string
   *  @param  {integer}  start   where to start the substring
   *  @param  {integer}  length  how many characters to return
   *  @return {string}
   */
  String.prototype.substr = function(substr) {
    return function(start, length) {
      // call the original method
      return substr.call(this,
      	// did we get a negative start, calculate how much it is from the beginning of the string
        // adjust the start parameter for negative value
        start < 0 ? this.length + start : start,
        length)
    }
  }(String.prototype.substr);
}
```

## Examples

### Using substr()

```js
var aString = 'Mozilla';

console.log(aString.substr(0, 1));   // 'M'
console.log(aString.substr(1, 0));   // ''
console.log(aString.substr(-1, 1));  // 'a'
console.log(aString.substr(1, -1));  // ''
console.log(aString.substr(-3));     // 'lla'
console.log(aString.substr(1));      // 'ozilla'
console.log(aString.substr(-20, 2)); // 'Mo'
console.log(aString.substr(20, 2));  // ''
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `String.prototype.substr` is available in [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.slice()")}}
- {{jsxref("String.prototype.substring()")}}
