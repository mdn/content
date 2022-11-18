---
title: "Input boundary assertion: ^, $"
slug: Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion
---

{{JsSidebar}}

An **input boundary assertion** checks if the current position in the string is an input boundary. An input boundary is the start or end of the string; or, if the `m` flag is set, the start or end of a line.

## Syntax

```regex
^
$
```

## Description

`^` asserts that the current position is the start of input. `$` asserts that the current position is the end of input. Both are _assertions_, so they don't consume any characters.

More precisely, `^` asserts that the character to the left is out of bounds of the string; `$` asserts that the character to the right is out of bounds of the string. If the [`m`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline) flag is set, `^` also matches if the character to the left is a [line terminator](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) character, and `$` also matches if the character to the right is a line terminator.

The `y` flag doesn't change the meaning of these assertions — see also [anchored sticky flag](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky#anchored_sticky_flag).

## Examples

### Removing trailing slashes

The following example removes trailing slashes from a URL string:

```js
function removeTrailingSlash(url) {
  return url.replace(/\/$/, "");
}

removeTrailingSlash("https://example.com/"); // "https://example.com"
removeTrailingSlash("https://example.com/docs/"); // "https://example.com/docs"
```

### Matching file extensions

The following example checks file types by matching the file extension, which always comes at the end of the string:

```js
function isImage(filename) {
  return /\.(png|jpe?g|webp|avif|gif)$/i.test(filename);
}

isImage("image.png"); // true
isImage("image.jpg"); // true
isImage("image.pdf"); // false
```

### Matching entire input

Sometimes you want to make sure that your regex matches the entire input, not just a substring of the input. For example, if you are determining if a string is a valid [identifier](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) (so that when doing codegen, you can use it as an object literal property name without quoting), you can add input boundary assertions to both ends of the pattern:

```js
function isValidIdentifier(str) {
  return /^[$_\p{ID_Start}][$_\p{ID_Continue}]*$/u.test(str);
}

isValidIdentifier("foo"); // true
isValidIdentifier("$1"); // true
isValidIdentifier("1foo"); // false
isValidIdentifier("  foo  "); // true
```

## See also

- [Regex reference](/en-US/docs/Web/JavaScript/Reference/Regular_Expressions)
- [Word boundary assertion: `\b`, `\B`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
- [Lookahead assertion: `(?=...)`, `(?!...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [Lookbehind assertion: `(?<=...)`, `(?<!...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
