---
title: UTF-16
slug: Glossary/UTF-16
page-type: glossary-definition
sidebar: glossarysidebar
---

UTF-16 is a {{glossary("character encoding")}} standard for {{glossary("Unicode")}}. It encodes each Unicode {{glossary("code point")}} using either one or two {{glossary("code unit", "code units")}}. Each code unit is a 16-bit value.

Code points whose values are less than 2<sup>16</sup> are encoded as a single code unit that is numerically equal to the code point's value. These code points comprise the [Basic Multilingual Plane (BMP)](<https://en.wikipedia.org/wiki/Plane_(Unicode)#Basic_Multilingual_Plane>), and include the most common characters, including Latin, Greek, Cyrillic, and many East Asian characters.

For example, the Latin character "A" is assigned the code point `U+0041` in Unicode, and this is represented in UTF-16 as the single code unit `41`.

Code points whose values are greater than 2<sup>16</sup> are encoded using a pair of code units, which is called a _surrogate pair_. The values used for surrogate pairs are not used for Unicode code points, so as to avoid ambiguity.

For example, the emoji character "🦊" (Fox Face) is assigned the code point `U+1F98A` in Unicode, and this is represented in UTF-16 as the surrogate pair `d83e dd8a`.

## UTF-16 in JavaScript

Strings in JavaScript are represented using UTF-16, and many {{jsxref("String")}} APIs operate on code units, not code points. For example, {{jsxref("String.length")}} returns `2` for a string containing a single Unicode character which is not in the BMP:

```js
const string = "🦊"; // U+1F98A
console.log(string.length); // 2
```

The {{jsxref("String.charCodeAt()")}} method returns the code unit at the given index, and the {{jsxref("String.codePointAt()")}} method returns the code point at the given index:

```js
const string = "🦊"; // U+1F98A

console.log(string.charCodeAt(0).toString(16)); // d83e
console.log(string.charCodeAt(1).toString(16)); // dd8a

console.log(string.codePointAt(0).toString(16)); // 1f98a
```

See [UTF-16 characters, Unicode code points, and grapheme clusters](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) to learn more about working with UTF-16 strings in JavaScript.

## UTF-16 and UTF-8

{{glossary("UTF-8")}} is an alternative encoding for Unicode, which uses one to four bytes for each Unicode code point. UTF-8 is a much more common encoding for documents on the Web than UTF-16.

## UTF-16 and UCS-2

UCS-2 is an obsolete encoding for Unicode. It is the same as UTF-16, except it does not support surrogate pairs, so is not able to encode code points outside the BMP.

## See also

- [UTF-16 characters, Unicode code points, and grapheme clusters](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters)
- {{glossary("UTF-8")}}
- [UTF-16](https://en.wikipedia.org/wiki/UTF-16) on Wikipedia
