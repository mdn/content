---
title: String.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/String/slice
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
browser-compat: javascript.builtins.String.slice
---
{{JSRef}}

The **`slice()`** method extracts a section of a string and
returns it as a new string, without modifying the original string.

{{EmbedInteractiveExample("pages/js/string-slice.html", "taller")}}

## Syntax

```js
slice(indexStart)
slice(indexStart, indexEnd)
```

### Parameters

- `indexStart`
  - : The index of the first character to include in the returned substring.
- `indexEnd` {{optional_inline}}
  - : The index of the first character to exclude from the returned substring.

### Return value

A new string containing the extracted section of the string.

## Description

`slice()` extracts the text from one string and returns a new string. Changes to the text in one string do not affect the other string.

`slice()` extracts up to but not including `indexEnd`. For example, `str.slice(1, 4)` extracts the second character through the fourth character (characters indexed `1`, `2`, and `3`).

- If `indexStart >= str.length`, an empty string is returned.
- If `indexStart < 0`, the index is counted from the end of the string. More formally, in this case, the substring starts at `max(indexStart + str.length, 0)`.
- If `indexStart` is omitted, undefined, or cannot be converted to a number (using {{jsxref('Number', 'Number(indexStart)')}}), it's treated as `0`.
- If `indexEnd` is omitted, undefined, or cannot be converted to a number (using {{jsxref('Number', 'Number(indexEnd)')}}), or if `indexEnd >= str.length`, `slice()` extracts to the end of the string.
- If `indexEnd < 0`, the index is counted from the end of the string. More formally, in this case, the substring ends at `max(indexEnd + str.length, 0)`.
- If `indexEnd <= indexStart` after normalizing negative values (i.e. `indexEnd` represents a character that's before `indexStart`), an empty string is returned.

## Examples

### Using slice() to create a new string

The following example uses `slice()` to create a new string.

```js
const str1 = 'The morning is upon us.', // the length of str1 is 23.
      str2 = str1.slice(1, 8),
      str3 = str1.slice(4, -2),
      str4 = str1.slice(12),
      str5 = str1.slice(30);
console.log(str2);  // OUTPUT: he morn
console.log(str3);  // OUTPUT: morning is upon u
console.log(str4);  // OUTPUT: is upon us.
console.log(str5);  // OUTPUT: ""
```

### Using slice() with negative indexes

The following example uses `slice()` with negative indexes.

```js
const str = 'The morning is upon us.';
str.slice(-3);     // returns 'us.'
str.slice(-3, -1); // returns 'us'
str.slice(0, -1);  // returns 'The morning is upon us'
str.slice(4, -1);  // returns 'morning is upon us'
```

This example counts backwards from the end of the string by `11` to find the
start index and forwards from the start of the string by `16` to find the end
index.

```js
console.log(str.slice(-11, 16)); // => "is u"
```

Here it counts forwards from the start by `11` to find the start index and
backwards from the end by `7` to find the end index.

```js
console.log(str.slice(11, -7)); // => " is u"
```

These arguments count backwards from the end by `5` to find the start index
and backwards from the end by `1` to find the end index.

```js
console.log(str.slice(-5, -1)); // => "n us"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("String.prototype.substr()")}}
- {{jsxref("String.prototype.substring()")}}
- {{jsxref("Array.prototype.slice()")}}
