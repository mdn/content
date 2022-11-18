---
title: "Word boundary assertion: \\b, \\B"
slug: Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion
---

{{JsSidebar}}

A **word boundary assertion** checks if the current position in the string is a word boundary. A word boundary is where the next character is a word character and the previous character is not a word character, or vice versa.

## Syntax

```regex
\b
\B
```

## Description

`\b` asserts that the current position in the string is a word boundary. `\B` negates the assertion: it asserts that the current position is not a word boundary. Both are _assertions_, so they don't consume any characters.

A word character includes the following:

- Letters (A–Z, a–z), numbers (0–9), and underscore (_).
- If the [`u`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) and [`i`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase) flags are both set, other Unicode characters that get canonicalized to one of the characters above through [case folding](https://unicode.org/Public/UCD/latest/ucd/CaseFolding.txt).

Out-of-bounds input positions are considered non-word characters. For example, the following are successful matches:

```js
/\ba/.exec("abc");
/c\b/.exec("abc");

/\B /.exec(" abc");
/ \B/.exec("abc ");
```
