---
title: "SyntaxError: invalid character in class in regular expression"
slug: Web/JavaScript/Reference/Errors/Regex_invalid_char_in_class
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "invalid character in class in regular expression" occurs when a character appears in a [`v`-mode character class](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) but it's not allowed to appear literally.

## Message

```plain
SyntaxError: Invalid regular expression: /[|]/v: Invalid character in character class (V8-based)
SyntaxError: invalid character in class in regular expression (Firefox)
SyntaxError: Invalid regular expression: invalid class set character (Safari)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

Normally, character classes can contain almost all characters literally. However, the `v` mode made the character class syntax more sophisticated, and in order to leave room for future syntax extensions, some syntax characters are forbidden from appearing literally in a character class. They include: `(`, `)`, `[`, `]`, `{`, `}`, `/`, `-`, `|`. If you want to match these literal characters, escape them; for example: `/[\|]/v`.

## Examples

### Invalid cases

```js example-bad
/[(){}]/v;
```

### Valid cases

```js example-good
/[\(\)\{\}]/v;
```

## See also

- [Regular expressions](/en-US/docs/Web/JavaScript/Reference/Regular_expressions)
- [Character class: `[...]`, `[^...]`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
