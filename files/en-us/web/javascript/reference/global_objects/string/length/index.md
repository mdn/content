---
title: "String: length"
slug: Web/JavaScript/Reference/Global_Objects/String/length
page-type: javascript-instance-data-property
browser-compat: javascript.builtins.String.length
---

{{JSRef}}

The **`length`** data property of a {{jsxref("String")}} value contains the length of the string in UTF-16 code units.

{{EmbedInteractiveExample("pages/js/string-length.html", "shorter")}}

## Value

A non-negative integer.

{{js_property_attributes(0, 0, 0)}}

## Description

This property returns the number of code units in the string. JavaScript uses [UTF-16](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) encoding, where each Unicode character may be encoded as one or two code units, so it's possible for the value returned by `length` to not match the actual number of Unicode characters in the string. For common scripts like Latin, Cyrillic, wellknown CJK characters, etc., this should not be an issue, but if you are working with certain scripts, such as emojis, [mathematical symbols](https://en.wikipedia.org/wiki/Mathematical_Alphanumeric_Symbols), or obscure Chinese characters, you may need to account for the difference between code units and characters.

The language specification requires strings to have a maximum length of 2<sup>53</sup> - 1 elements, which is the upper limit for [precise integers](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER). However, a string with this length needs 16384TiB of storage, which cannot fit in any reasonable device's memory, so implementations tend to lower the threshold, which allows the string's length to be conveniently stored in a 32-bit integer.

- In V8 (used by Chrome and Node), the maximum length is 2<sup>29</sup> - 24 (\~1GiB). On 32-bit systems, the maximum length is 2<sup>28</sup> - 16 (\~512MiB).
- In Firefox, the maximum length is 2<sup>30</sup> - 2 (\~2GiB). Before Firefox 65, the maximum length was 2<sup>28</sup> - 1 (\~512MiB).
- In Safari, the maximum length is 2<sup>31</sup> - 1 (\~4GiB).

For an empty string, `length` is 0.

The static property `String.length` is unrelated to the length of strings. It's the [arity](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length) of the `String` function (loosely, the number of formal parameters it has), which is 1.

Since `length` counts code units instead of characters, if you want to get the number of characters, you can first split the string with its [iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator), which iterates by characters:

```js
function getCharacterLength(str) {
  // The string iterator that is used here iterates over characters,
  // not mere code units
  return [...str].length;
}

console.log(getCharacterLength("A\uD87E\uDC04Z")); // 3
```

## Examples

### Basic usage

```js
const x = "Mozilla";
const empty = "";

console.log(`${x} is ${x.length} code units long`);
// Mozilla is 7 code units long

console.log(`The empty string has a length of ${empty.length}`);
// The empty string has a length of 0
```

### Strings with length not equal to the number of characters

```js
const emoji = "😄";
console.log(emoji.length); // 2
console.log([...emoji].length); // 1
const adlam = "𞤲𞥋𞤣𞤫";
console.log(adlam.length); // 8
console.log([...adlam].length); // 4
const formula = "∀𝑥∈ℝ,𝑥²≥0";
console.log(formula.length); // 11
console.log([...formula].length); // 9
```

### Assigning to length

Because string is a primitive, attempting to assign a value to a string's `length` property has no observable effect, and will throw in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode).

```js
const myString = "bluebells";

myString.length = 4;
console.log(myString); // "bluebells"
console.log(myString.length); // 9
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript `String.length` and Internationalizing Web Applications](https://downloads.teradata.com/blog/jasonstrimpel/2011/11/javascript-string-length-and-internationalizing-web-applications)
