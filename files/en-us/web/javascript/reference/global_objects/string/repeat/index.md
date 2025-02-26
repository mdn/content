---
title: String.prototype.repeat()
slug: Web/JavaScript/Reference/Global_Objects/String/repeat
page-type: javascript-instance-method
browser-compat: javascript.builtins.String.repeat
---

{{JSRef}}

The **`repeat()`** method of {{jsxref("String")}} values constructs and returns a new string
which contains the specified number of copies of this string, concatenated together.

{{InteractiveExample("JavaScript Demo: String.repeat()", "shorter")}}

```js interactive-example
const mood = "Happy! ";

console.log(`I feel ${mood.repeat(3)}`);
// Expected output: "I feel Happy! Happy! Happy! "
```

## Syntax

```js-nolint
repeat(count)
```

### Parameters

- `count`
  - : An integer between `0` and
    {{jsxref("Number/POSITIVE_INFINITY", "+Infinity")}}, indicating the
    number of times to repeat the string.

### Return value

A new string containing the specified number of copies of the given string.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if `count` is negative or if `count` overflows maximum string length.

## Examples

### Using repeat()

```js
"abc".repeat(-1); // RangeError
"abc".repeat(0); // ''
"abc".repeat(1); // 'abc'
"abc".repeat(2); // 'abcabc'
"abc".repeat(3.5); // 'abcabcabc' (count will be converted to integer)
"abc".repeat(1 / 0); // RangeError

({ toString: () => "abc", repeat: String.prototype.repeat }).repeat(2);
// 'abcabc' (repeat() is a generic method)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.prototype.repeat` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.concat()")}}
