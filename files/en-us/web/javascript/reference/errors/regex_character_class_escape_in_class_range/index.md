---
title: "SyntaxError: character class escape cannot be used in class range in regular expression"
slug: Web/JavaScript/Reference/Errors/Regex_character_class_escape_in_class_range
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "character class escape cannot be used in class range in regular expression" occurs when a [Unicode-aware](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) regular expression pattern contains a [character class](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) where a boundary of a character range is another character class, such as a [character class escape](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape).

## Message

```plain
SyntaxError: Invalid regular expression: /[\s-1]/u: Invalid character class (V8-based)
SyntaxError: character class escape cannot be used in class range in regular expression (Firefox)
SyntaxError: Invalid regular expression: invalid range in character class for Unicode pattern (Safari)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

A character class can specify a range of characters by using a hyphen (`-`) between two characters. For example, `[a-z]` matches any lowercase letter from `a` to `z`. The two bounds of the range must represent single characters in order for the range to make sense. If one of the bounds actually represents multiple characters, an error is generated. In [non-`v`-mode character classes](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#non-v-mode_character_class), only character class escapes are allowed inside character classes; in [`v`-mode character classes](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class), this can also happen if one the bounds is another `[...]` character class.

In Unicode-unaware mode, this syntax causes the `-` to become a literal character instead of generating an error, but this is a [deprecated syntax](/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp) and you should not rely on it.

## Examples

### Invalid cases

```js example-bad
/[\s-_]/u; // \s is a character class escape for whitespace
/[A-\D]/u; // \D is a character class escape for non-digits
/[\p{L}-\p{N}]/u; // \p{L} is a character class escape for Unicode letters
/[[A-z]-_]/v; // In unicodeSets mode, character classes can be nested
```

### Valid cases

```js example-good
// Put the hyphen at the start of the character class,
// so it matches the literal character
/[-\s_]/u;
// Escape the hyphen so it also matches the literal character
/[\s\-_]/u;
// Remove the backslash so the bound is a literal character
/[A-D]/u;
// Remove the hyphen so the two bounds represent two alternatives
/[\p{L}\p{N}]/u;
// Use -- in unicodeSets mode, which represents set subtraction
/[[A-z]--_]]/v;
```

## See also

- [Regular expressions](/en-US/docs/Web/JavaScript/Reference/Regular_expressions)
- [Character class: `[...]`, `[^...]`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
