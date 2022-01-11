---
title: Code unit
slug: Glossary/Code_unit
tags:
  - Glossary
---
A *code unit* is the basic component used by a character encoding system (such as UTF-8 or UTF-16). A character encoding system uses one or more code units to encode a Unicode {{Glossary("code point")}}.

In UTF-16 (the encoding system used for JavaScript strings) code units are 16-bit values. This means that operations such as indexing into a string or getting the length of a string operate on these 16-bit units. These units do not always map 1-1 onto what we might consider characters.

For example, sometimes characters with diacritics such as accents are represented using two Unicode code points:

```js
const myString = 'ñ';
myString.length;
// 2
```

Also, since not all of the code points defined by Unicode fit into 16 bits, many Unicode code points are encoded as a pair of UTF-16 code units, which is called a *surrogate pair*:

```js
const face = '🥵';
face.length;
// 2
```

The {{jsxref("String/codePointAt", "codePointAt()")}} method of the JavaScript {{jsxref("String")}} object enables you to retrieve the Unicode code point from its encoded form:

```js
const face = '🥵';
face.codePointAt(0)
// 129397
```

## See also

- [Unicode encoding FAQ](https://www.unicode.org/faq/utf_bom.html)
