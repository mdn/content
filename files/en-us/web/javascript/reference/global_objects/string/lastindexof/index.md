---
title: String.prototype.lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - lastIndexOf
browser-compat: javascript.builtins.String.lastIndexOf
---
{{JSRef}}

The **`lastIndexOf()`** method returns the index within the
calling {{jsxref("String")}} object of the last occurrence of the specified value,
searching backwards from `fromIndex`. Returns `-1` if the value is
not found.

{{EmbedInteractiveExample("pages/js/string-lastindexof.html", "shorter")}}

## Syntax

```js
lastIndexOf(searchValue)
lastIndexOf(searchValue, fromIndex)
```

### Parameters

- `searchValue`
  - : A string representing the value to search for. If
    `searchValue` is an empty string, then
    `fromIndex` is returned.
- `fromIndex` {{optional_inline}}
  - : The index of the last character in the string to be considered as the beginning of a
    match. The default value is `+Infinity`. If
    `fromIndex >= str.length`, the whole string is
    searched. If `fromIndex < 0`, the behavior will be the same
    as if it would be `0`.

### Return value

The index of the last occurrence of `searchValue`;
`-1` if not found.

## Description

Characters in a string are indexed from left to right. The index of the first character
is `0`, and the index of the last character is
`str.length - 1`.

```js
'canal'.lastIndexOf('a');     // returns 3
'canal'.lastIndexOf('a', 2);  // returns 1
'canal'.lastIndexOf('a', 0);  // returns -1
'canal'.lastIndexOf('x');     // returns -1
'canal'.lastIndexOf('c', -5); // returns 0
'canal'.lastIndexOf('c', 0);  // returns 0
'canal'.lastIndexOf('');      // returns 5
'canal'.lastIndexOf('', 2);   // returns 2
```

> **Note:** `'abab'.lastIndexOf('ab', 2)` will return
> `2` and not `0`, as `fromIndex` limits
> only the beginning of the match.

### Case-sensitivity

The `lastIndexOf()` method is case sensitive. For example, the following
expression returns `-1`:

```js
'Blue Whale, Killer Whale'.lastIndexOf('blue'); // returns -1
```

## Examples

### Using indexOf() and lastIndexOf()

The following example uses {{jsxref("String.prototype.indexOf()", "indexOf()")}} and
`lastIndexOf()` to locate values in the string
"`Brave new world`".

```js
let anyString = 'Brave new world';

console.log('The index of the first w from the beginning is ' + anyString.indexOf('w'));
// logs 8
console.log('The index of the first w from the end is ' + anyString.lastIndexOf('w'));
// logs 10
console.log('The index of "new" from the beginning is ' + anyString.indexOf('new'));
// logs 6
console.log('The index of "new" from the end is ' + anyString.lastIndexOf('new'));
// logs 6
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.split()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.lastIndexOf()")}}
