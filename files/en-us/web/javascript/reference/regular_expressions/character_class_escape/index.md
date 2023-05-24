---
title: "Character class escape: \\d, \\D, \\w, \\W, \\s, \\S"
slug: Web/JavaScript/Reference/Regular_expressions/Character_class_escape
page-type: javascript-language-feature
browser-compat: javascript.regular_expressions.character_class_escape
---

{{JsSidebar}}

A **character class escape** is an escape sequence that represents a set of characters.

## Syntax

```regex
\d, \D
\s, \S
\w, \W
```

> **Note:** `,` is not part of the syntax.

## Description

Unlike [character escapes](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape), character class escapes represent a predefined _set_ of characters, much like a [character class](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class). The following character classes are supported:

- `\d`
  - : Matches any digit character. Equivalent to `[0-9]`.
- `\w`
  - : Matches any word character, where a word character includes letters (A–Z, a–z), numbers (0–9), and underscore (\_). If the regex is [Unicode-aware](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) and the [`i`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase) flag is set, it also matches other Unicode characters that get canonicalized to one of the characters above through [case folding](https://unicode.org/Public/UCD/latest/ucd/CaseFolding.txt).
- `\s`
  - : Matches any [whitespace](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#white_space) or [line terminator](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) character.

The uppercase forms `\D`, `\W`, and `\S` create complement character classes for `\d`, `\w`, and `\s`, respectively. They match any character that is not in the set of characters matched by the lowercase form.

[Unicode character class escapes](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) start with `\p` and `\P`, but they are only supported in [Unicode-aware mode](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode). In Unicode-unaware mode, they are [identity escapes](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) for the `p` or `P` character.

Character class escapes can be used in [character classes](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class). However, they cannot be used as boundaries of character ranges, which is only allowed as a [deprecated syntax for web compatibility](/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), and you should not rely on it.

## Examples

### Splitting by whitespace

The following example splits a string into an array of words, supporting all kinds of whitespace separators:

```js
function splitWords(str) {
  return str.split(/\s+/);
}

splitWords(`Look at the stars
Look  how they\tshine for you`);
// ['Look', 'at', 'the', 'stars', 'Look', 'how', 'they', 'shine', 'for', 'you']
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Character classes](/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)
- [Regular expressions reference](/en-US/docs/Web/JavaScript/Reference/Regular_expressions)
- [Character class: `[...]`, `[^...]`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [Unicode character class escape: `\p{...}`, `\P{...}`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
- [Character escape: `\n`, `\u{...}`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [Disjunction: `|`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
