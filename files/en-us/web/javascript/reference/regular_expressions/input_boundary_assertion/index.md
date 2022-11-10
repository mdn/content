---
title: Input boundary assertion ^, $
slug: Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion
---

{{JsSidebar}}

An **input boundary assertion** checks if the current position in the string is an input boundary. An input boundary is the start or end of the string; or, if the `m` flag is set, the start or end of a line.

## Syntax

```js-nolint
/^/
/$/
```

## Description

`^` asserts that the current position is the start of input. `$` asserts that the current position is the end of input. Both are _assertions_, so they don't consume any characters.

More precisely, `^` asserts that the character to the left is out of bounds of the string; `$` asserts that the character to the right is out of bounds of the string. If the [`m`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline) flag is set, `^` also matches if the character to the left is a [line terminator](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) character, and `$` also matches if the character to the right is a line terminator.

The `y` flag doesn't change the meaning of these assertions — see also [anchored sticky flag](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky#anchored_sticky_flag).
