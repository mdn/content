---
title: String length
slug: Web/JavaScript/Reference/Global_Objects/String/length
tags:
  - JavaScript
  - Property
  - Reference
  - String
  - String Length
  - length
browser-compat: javascript.builtins.String.length
---

{{JSRef}}

The **`length`** property of a {{jsxref("String")}} object contains the length of the string, in UTF-16 code units. `length` is a read-only data property of string instances.

{{EmbedInteractiveExample("pages/js/string-length.html", "shorter")}}

## Description

This property returns the number of code units in the string. {{interwiki("wikipedia", "UTF-16")}}, the string format used by JavaScript, uses a single 16-bit code unit to represent the most common characters, but needs to use two code units for less commonly-used characters, so it's possible for the value returned by `length` to not match the actual number of characters in the string.

ECMAScript 2016 (ed. 7) established a maximum length of `2^53 - 1` elements. Previously, no maximum length was specified. In Firefox, strings have a maximum length of `2**30 - 2` (\~1GB). In versions prior to Firefox 65, the maximum length was `2**28 - 1` (\~256MB).

For an empty string, `length` is 0.

The static property `String.length` is unrelated to the length of strings, it's the arity of the `String` function (loosely, the number of formal parameters it has), which is 1.

## Unicode

Since \`length\` counts code units instead of characters, if you want to get the number of characters you need something like this:

```js
function getCharacterLength(str) {
  // The string iterator that is used here iterates over characters,
  //  not mere code units
  return [...str].length;
}

console.log(getCharacterLength("A\uD87E\uDC04Z")); // 3

// While not recommended, you could add this to each string as follows:

Object.defineProperty(String.prototype, "charLength", {
  get() {
    return getCharacterLength(this);
  },
});

console.log("A\uD87E\uDC04Z".charLength); // 3
```

## Examples

### Basic usage

```js
let x = "Mozilla";
let empty = "";

console.log(x + " is " + x.length + " code units long");
/* "Mozilla is 7 code units long" */

console.log("The empty string has a length of " + empty.length);
// expected output: "The empty string has a length of 0"
```

### Assigning to length

```js
let myString = "bluebells";

// Attempting to assign a value to a string's .length property has no observable effect.
myString.length = 4;
console.log(myString);
// expected output: "bluebells"
console.log(myString.length);
// expected output: 9
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript `String.length` and Internationalizing Web Applications](https://downloads.teradata.com/blog/jasonstrimpel/2011/11/javascript-string-length-and-internationalizing-web-applications)
