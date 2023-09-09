---
title: String.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/String/slice
page-type: javascript-instance-method
browser-compat: javascript.builtins.String.slice
---

{{JSRef}}

The **`slice()`** method of {{jsxref("String")}} values extracts a section of this string and
returns it as a new string, without modifying the original string.

{{EmbedInteractiveExample("pages/js/string-slice.html", "taller")}}

## Syntax

```js-nolint
slice(ignoreIndexBefore)
slice(ignoreIndexBefore, ignoreIndexFrom)
```

### Parameters

- `ignoreIndexBefore`
  - : The index of the first character to include in the returned substring.Ignore indexes before it.
- `ignoreIndexFrom` {{optional_inline}}
  - : The index of the first character to exclude from the returned substring.Ignore this index and those after it.

### Return value

A new string containing the extracted section of the string.

## Description

`slice()` extracts the text from one string and returns a new string. Changes to the text in one string do not affect the other string.

`slice()` extracts and returns indexvalues from `ignoreIndexBefore` until the index before `ignoreIndexFrom`. For example, `str.slice(1, 4)` extracts the second character through the fourth character (characters indexed `1`, `2`, and `3`).

- If `ignoreIndexBefore >= str.length`, an empty string is returned.
- If `ignoreIndexBefore < 0`, the index is counted from the end of the string. More formally, in this case, the substring starts at `max(ignoreIndexBefore + str.length, 0)`.
- If `ignoreIndexBefore` is omitted, undefined, or cannot be converted to a number (using {{jsxref('Number', 'Number(ignoreIndexBefore)')}}), it's treated as `0`.
- If `ignoreIndexFrom` is omitted, undefined, or cannot be converted to a number (using {{jsxref('Number', 'Number(ignoreIndexFrom)')}}), or if `indexEnd >= str.length`, `slice()` extracts to the end of the string.
- If `ignoreIndexFrom < 0`, the index is counted from the end of the string. More formally, in this case, the substring ends at `max(ignoreIndexFrom + str.length, 0)`.
- If `ignoreIndexFrom <= ignoreIndexBefore` after normalizing negative values (i.e. `ignoreIndexFrom` represents a character that's before `ignoreIndexBefore`), an empty string is returned.

## Examples

### Using slice() to create a new string

The following example uses `slice()` to create a new string.

```js
const str1 = "The morning is upon us."; // The length of str1 is 23.
const str2 = str1.slice(1, 8);
const str3 = str1.slice(4, -2);
const str4 = str1.slice(12);
const str5 = str1.slice(30);
console.log(str2); // he morn
console.log(str3); // morning is upon u
console.log(str4); // is upon us.
console.log(str5); // ""
```

### Using slice() with negative indexes

The slice method with negative indexes counts backwards from left to right.The following example uses `slice()` with negative indexes.

## Syntax

```js-nolint
slice(showIndexBefore)
slice(ignoreIndexFrom,ignoreIndexBefore)
```

## Single negative index

when dealing with a single negative index argument,it extracts and returns the index before the specified index while counting from the end of the string or from right to left,but instead of chopping it off,in this case it returns it as can be seen `slice(showIndexBefore)`

```js
const str = "The morning is upon us.";
str.slice(-3); // 'us.'
str.slice(-10) // 's upon us.'
```

## Two negative indexes

The two negative index arguments actually share the same extract and return pattern with postive index arguments except that this time around we count from end of the string (right to left) and then our first parameter becomes second and vice versa.

```js
const str = "The morning is upon us.";
str.slice(-3, -1); // 'us'
```

### Using slice() with positive and negative indexes

occasionally we see that our slice has positive and negative index arguments

## positive first,negative second

In this scenario, we count from both ends. More like ignore the indexes before the first index argument while counting from left to right and ignore indexes before the second index argument while counting from right to left.

## Syntax

```js-nolint
slice(ignoreIndexBefore,ignoreIndexBefore)
```

```js
const str = "The morning is upon us.";
str.slice(0, -1); // 'The morning is upon us'
str.slice(4, -1); // 'morning is upon us'
```

## negative first,positive second

In this scenario, our first index argument is negative which means we are counting right to left in reference to it.The second index is positive which means we count normally, left to right in reference to it

## Syntax

```js-nolint
slice(ignoreIndexFrom,ignoreIndexFrom)
```

```js
const str = "The morning is upon us.";
str.slice(-11, 16); // "is u"
```

This example counts backwards from the end of the string by `11` and cuts off index `11` and any index that comes after and forwards from the start of the string by `16` and cuts off index `16` and anything that comes after.

```js
console.log(str.slice(-11, 16)); // "is u"
```

Here it counts forwards from the start by `11` and cuts off index `11` and any index that comes after  and
backwards from the end by `7` and cuts off index `7` and anything that comes after .

```js
console.log(str.slice(11, -7)); // " is u"
```

These arguments count backwards from the end by `5` and cuts off index `11` and any index that comes after
and backwards from the end by `1` and cuts off index `1` and anything that comes after .
 
```js
console.log(str.slice(-5, -1)); // "n us"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("String.prototype.substr()")}}
- {{jsxref("String.prototype.substring()")}}
- {{jsxref("Array.prototype.slice()")}}
