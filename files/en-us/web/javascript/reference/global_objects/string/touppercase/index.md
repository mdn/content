---
title: String.prototype.toUpperCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toUpperCase
page-type: javascript-instance-method
browser-compat: javascript.builtins.String.toUpperCase
---

{{JSRef}}

The **`toUpperCase()`** method of {{jsxref("String")}} values returns this string converted to uppercase.

{{EmbedInteractiveExample("pages/js/string-touppercase.html","shorter")}}

## Syntax

```js-nolint
toUpperCase()
```

### Parameters

None.

### Return value

A new string representing the calling string converted to upper case.

## Description

The `toUpperCase()` method returns the value of the string converted to
uppercase. This method does not affect the value of the string itself since JavaScript
strings are immutable.

## Examples

### Basic usage

```js
console.log("alphabet".toUpperCase()); // 'ALPHABET'
```

### Conversion of non-string `this` values to strings

This method will convert any non-string value to a string, when you set its
`this` to a value that is not a string:

```js
const a = String.prototype.toUpperCase.call({
  toString() {
    return "abcdef";
  },
});

const b = String.prototype.toUpperCase.call(true);

// prints out 'ABCDEF TRUE'.
console.log(a, b);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("String.prototype.toLocaleLowerCase()")}}
- {{jsxref("String.prototype.toLocaleUpperCase()")}}
- {{jsxref("String.prototype.toLowerCase()")}}
