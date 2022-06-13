---
title: String.prototype.substring()
slug: Web/JavaScript/Reference/Global_Objects/String/substring
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
browser-compat: javascript.builtins.String.substring
---
{{JSRef}}

The **`substring()`** method returns the part of the
`string` between the start and end indexes, or to the end of the string.

{{EmbedInteractiveExample("pages/js/string-substring.html")}}

## Syntax

```js
substring(indexStart)
substring(indexStart, indexEnd)
```

### Parameters

- `indexStart`
  - : The index of the first character to include in the returned substring.
- `indexEnd` {{optional_inline}}
  - : The index of the first character to exclude from the returned substring.

### Return value

A new string containing the specified part of the given string.

## Description

`substring()` extracts characters from `indexStart` up
to _but not including_ `indexEnd`. In particular:

- If `indexEnd` is omitted, `substring()` extracts
  characters to the end of the string.
- If `indexStart` is equal to `indexEnd`,
  `substring()` returns an empty string.
- If `indexStart` is greater than
  `indexEnd`, then the effect of `substring()` is as if
  the two arguments were swapped; See example below.

Any argument value that is less than `0` or greater than
`stringName.length` is treated as if it were `0` and
`stringName.length`, respectively.

Any argument value that is {{jsxref("NaN")}} is treated as if it were `0`.

## Examples

### Using substring()

The following example uses `substring()` to display characters from the
string `'Mozilla'`:

```js
let anyString = 'Mozilla'

// Displays 'M'
console.log(anyString.substring(0, 1))
console.log(anyString.substring(1, 0))

// Displays 'Mozill'
console.log(anyString.substring(0, 6))

// Displays 'lla'
console.log(anyString.substring(4))
console.log(anyString.substring(4, 7))
console.log(anyString.substring(7, 4))

// Displays 'Mozilla'
console.log(anyString.substring(0, 7))
console.log(anyString.substring(0, 10))
```

### Using substring() with length property

The following example uses the `substring()` method and
{{jsxref("String.length", "length")}} property to extract the last characters of a
particular string. This method may be easier to remember, given that you don't need to
know the starting and ending indices as you would in the above examples.

```js
// Displays 'illa' the last 4 characters
let anyString = 'Mozilla'
let anyString4 = anyString.substring(anyString.length - 4)
console.log(anyString4)

// Displays 'zilla' the last 5 characters
let anyString = 'Mozilla'
let anyString5 = anyString.substring(anyString.length - 5)
console.log(anyString5)
```

### The difference between substring() and substr()

There's a subtle difference between the `substring()` and
{{jsxref("String.substr", "substr()")}} methods, so you should be careful not to get
them confused.

The arguments of `substring()` represent the starting and ending indexes,
while the arguments of `substr()` represent the starting index and the number
of characters to include in the returned string.

Furthermore, `substr()` is considered a **legacy feature in
ECMAScript** and could be removed from future versions, so it is best to avoid
using it if possible.

```js
let text = 'Mozilla'
console.log(text.substring(2,5))  // => "zil"
console.log(text.substr(2,3))     // => "zil"
```

### Differences between substring() and slice()

The `substring()` and {{jsxref("String.slice", "slice()")}} methods are
almost identical, but there are a couple of subtle differences between the two,
especially in the way negative arguments are dealt with.

The `substring()` method swaps its two arguments if
`indexStart` is greater than `indexEnd`,
meaning that a string is still returned. The {{jsxref("String.slice", "slice()")}}
method returns an empty string if this is the case.

```js
let text = 'Mozilla'
console.log(text.substring(5, 2))  // => "zil"
console.log(text.slice(5, 2))      // => ""
```

If either or both of the arguments are negative or `NaN`, the
`substring()` method treats them as if they were `0`.

```js
console.log(text.substring(-5, 2))  // => "Mo"
console.log(text.substring(-5, -2)) // => ""
```

`slice()` also treats `NaN` arguments as `0`, but when
it is given negative values it counts backwards from the end of the string to find the
indexes.

```js
console.log(text.slice(-5, 2))   // => ""
console.log(text.slice(-5, -2))  // => "zil"
```

See the {{jsxref("String.slice", "slice()")}} page for more examples with negative
numbers.

### Replacing a substring within a string

The following example replaces a substring within a string. It will replace both
individual characters and substrings. The function call at the end of the example
changes the string `Brave New World` to `Brave New Web`.

```js
// Replaces oldS with newS in the string fullS
function replaceString(oldS, newS, fullS) {
  for (let i = 0; i < fullS.length; ++i) {
    if (fullS.substring(i, i + oldS.length) == oldS) {
      fullS = fullS.substring(0, i) + newS + fullS.substring(i + oldS.length, fullS.length)
    }
  }
  return fullS
}

replaceString('World', 'Web', 'Brave New World')
```

Note that this can result in an infinite loop if `oldS` is itself a
substring of `newS` — for example, if you attempted to replace
'`World`' with '`OtherWorld`' here.

A better method for replacing strings is as follows:

```js
function replaceString(oldS, newS, fullS) {
  return fullS.split(oldS).join(newS)
}
```

The code above serves as an example for substring operations. If you need to replace
substrings, most of the time you will want to use
{{jsxref("String.prototype.replace()")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("String.prototype.substr()")}}
- {{jsxref("String.prototype.slice()")}}
