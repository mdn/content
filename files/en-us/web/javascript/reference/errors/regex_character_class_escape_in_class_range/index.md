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

## Examples

## See also

- [Regular expressions](/en-US/docs/Web/JavaScript/Reference/Regular_expressions)
- [Character class: `[...]`, `[^...]`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
