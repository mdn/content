---
title: "Buffer boundary assertion: \\A, \\z, \\Z"
slug: Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion
page-type: javascript-language-feature
status:
  - experimental
browser-compat: javascript.regular_expressions.buffer_boundary_assertion
sidebar: jssidebar
---

{{SeeCompatTable}}

A **buffer boundary assertion** checks if the current position in the string is strictly at the start or end of the entire string (`\Z` also allows a trailing newline), regardless of the presence of the [`m`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline) flag (which changes the meanings of the `^` and `$` [input boundary assertions](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)). It's only supported in [Unicode-aware mode](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode).

## Syntax

```regex
\A
\z
\Z
```

## Description

`\A` asserts that the current position is the start of the entire string. `\z` asserts that the current position is the end of the entire string. `\Z` is like `\z`, but also matches before a [line terminator](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) or `\r\n` (CRLF) sequence at the end of the string. All of them are _assertions_, so they don't consume any characters.

More precisely, `\A` asserts that the character to the left is out of bounds of the string; `\z` asserts that the character to the right is out of bounds of the string; `\Z` is equivalent to `(?=(?:\r?\n?|[\u{2028}\u{2029}]?)\z)`.

These assertions only make sense when no characters are expected to the left or right of them. For example, `f\Ao` never matches because it's not possible for `\A` to both be at the start of the string and have a character to its left.

The `\A` and `\z` assertions are only useful when the `m` flag is used. Without `m`, they behave just like `^` and `$`. If your pattern only needs to match the start or end of the entire string or a line (and never a mix of both), the recommended approach is to still use the `^` and `$` assertions, and set the `m` flag as needed, because they are more widely supported than the buffer boundary assertions. If you need to match both types of boundaries in the same pattern, you can technically use [modifiers](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) to enable or disable the `m` flag in different parts of the pattern, but using these escape sequences make the code much more readable.

## Examples

### Mixing buffer and input boundary assertions

Suppose you have a pattern that needs to match either at the start of the whole string or the start of one line. You can turn on `m` so that you can use `^` to refer to the latter, and then use `\A` to refer to the former (you also need to turn on `u` so you can use `\A`).

This example matches line comments on their own lines, which can be a [hashbang](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#hashbang_comments) at start of a file or a line comment on any line. It does not match line comments at the end of a line containing code.

```js
function findLineComments(code) {
  // Matches the hashbang syntax: #!... (which is only valid at start of file)
  // and line comment syntax: //... (which is valid everywhere)
  const pattern = /\A#!.*|^\s*\/\/.*/gmu;
  return code.match(pattern);
}

const program = `#!/usr/env/node

function findLineComments(code) {
  // Matches the hashbang syntax: #!... (which is only valid at start of file)
  // and line comment syntax: //... (which is valid everywhere)
  const pattern = /\\A#!.*|^\\/\\/.*/gmu;
  return code.match(pattern);
}
`;

console.log(findLineComments(program));
// [
//   '#!/usr/env/node',
//   '  // Matches the hashbang syntax: #!... (which is only valid at start of file)',
//   '  // and line comment syntax: //... (which is valid everywhere)'
// ]
```

Another major use case of buffer boundary assertions is when you cannot modify the flags, such as regular expression search in text editors. These cases usually enable `m` by default, so you need to use `\A` and `\z` to "opt out".

### Matching the end-of-file but allowing an optional trailing newline

File formats often allow an optional newline at the end of the file. If you want to match an end-of-file pattern that allows the trailing newline, you can use `\Z`. This feature is useful with or without the `m` flag.

```js
const endOfPDF = /%%EOF\Z/u;

console.log(endOfPDF.test("%%EOF")); // true
console.log(endOfPDF.test("%%EOF\n")); // true
console.log(endOfPDF.test("%%EOF\r\n")); // true
console.log(endOfPDF.test("%%EOF\n\n")); // false
console.log(endOfPDF.test("%%EOF\nsomething")); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Assertions](/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) guide
- [Regular expressions](/en-US/docs/Web/JavaScript/Reference/Regular_expressions)
- [Input boundary assertion: `^`, `$`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [Word boundary assertion: `\b`, `\B`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
- [Lookahead assertion: `(?=...)`, `(?!...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [Lookbehind assertion: `(?<=...)`, `(?<!...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
