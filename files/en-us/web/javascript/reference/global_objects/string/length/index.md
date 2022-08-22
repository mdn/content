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

This property returns the number of code units in the string. [UTF-16](https://en.wikipedia.org/wiki/UTF-16), the string format used by JavaScript, uses a single 16-bit code unit to represent the most common characters, but needs to use two code units for less commonly-used characters, so it's possible for the value returned by `length` to not match the actual number of Unicode characters in the string.

ECMAScript 2016 (ed. 7) established a maximum length of 2<sup>53</sup> - 1 elements. Previously, no maximum length was specified. In Firefox, strings have a maximum length of 2<sup>30</sup> - 2 (\~1GB). In versions prior to Firefox 65, the maximum length was 2<sup>28</sup> - 1 (\~256MB).

For an empty string, `length` is 0.

The static property `String.length` is unrelated to the length of strings. It's the [arity](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length) of the `String` function (loosely, the number of formal parameters it has), which is 1.

Since `length` counts code units instead of characters, if you want to get the number of characters you need something like this:

```js
function getCharacterLength(str) {
  // The string iterator that is used here iterates over characters,
  //  not mere code units
  return [...str].length;
}

console.log(getCharacterLength('A\uD87E\uDC04Z')); // 3
```

## Examples

### Basic usage

```js
const x = 'Mozilla';
const empty = '';

console.log(`${x} is ${x.length} code units long`);
/* "Mozilla is 7 code units long" */

console.log(`The empty string has a length of ${empty.length}`);
// expected output: "The empty string has a length of 0"
```

### Assigning to length

Because string is a primitive, attempting to assign a value to a string's `length` property has no observable effect, and will throw in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode).

```js
const myString = "bluebells";

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
