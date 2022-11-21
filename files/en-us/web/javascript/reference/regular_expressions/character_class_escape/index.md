---
title: "Character class escape: \\d, \\D, \\w, \\W, \\s, \\S"
slug: Web/JavaScript/Reference/Regular_expressions/Character_class_escape
---

{{JsSidebar}}

A **character class escape** is an escape sequence that represents a set of characters.

## Syntax

```regex
\d, \D
\s, \S
\w, \W
```

## Description

Unlike [character escapes](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape), character class escapes represent a predefined _set_ of characters, much like a [character class](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class). The following character classes are supported:

- `\d`
  - : Matches any digit character. Equivalent to `[0-9]`.
- `\w`
  - : Matches any word character.
- `\s`
  - : Matches any [whitespace](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#white_space) or [line terminator](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) character.

The uppercase forms `\D`, `\W`, and `\S` negates the match or `\d`, `\w`, and `\s`, respectively. They match any character that is not in the set of characters matched by the lowercase form.

[Unicode character class escapes](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) start with `\p` and `\P`, but they are only supported in [unicode mode](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode). In non-unicode mode, they are [identity escapes](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) for the `p` or `P` character.

Character class escapes can be used in [character classes](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class). However, using them as boundaries of character ranges is a [deprecated syntax for web compatibility](/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp) and you should not rely on it.

## See also

- [Regex guide: Character classes](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes)
- [Regex reference](/en-US/docs/Web/JavaScript/Reference/Regular_expressions)
- [Character class: `[...]`, `[^...]`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [Unicode character class escape: `\p{...}`, `\P{...}`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
- [Character escape: `\n`, `\u{...}`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [Disjunction: `|`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
