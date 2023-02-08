---
title: "Unicode character class escape: \\p{...}, \\P{...}"
slug: Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape
page-type: javascript-language-feature
---

{{JsSidebar}}

A **unicode character class escape** is a kind of [character class escape](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape) that matches a set of characters specified by a Unicode property. It's only supported in [unicode mode](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode).

## Syntax

```regex
\p{loneProperty}
\P{loneProperty}

\p{property=value}
\P{property=value}
```

### Parameters

- `loneProperty`
  - : A lone Unicode property name or value, following the same syntax as `value`. It specifies the value for the `General_Category` property, or a [binary property name](https://tc39.es/ecma262/#table-binary-unicode-properties).
- `property`
  - : A Unicode property name. Must be made of ASCII letters (`A–Z`, `a–z`) and underscores (`_`), and must be one of the [non-binary property names](https://tc39.es/ecma262/#table-nonbinary-unicode-properties).
- `value`
  - : A Unicode property value. Must be made of of ASCII letters (`A–Z`, `a–z`), underscores (`_`), and digits (`0–9`), and must be one of the supported values listed in [`PropertyValueAliases.txt`](https://unicode.org/Public/UCD/latest/ucd/PropertyValueAliases.txt).

## Description

`\p` and `\P` are only supported in [unicode mode](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode). In non-unicode mode, they are [identity escapes](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) for the `p` or `P` character.

Every Unicode character has a set of properties that describe it. For example, the character [`a`](https://util.unicode.org/UnicodeJsps/character.jsp?a=0061) has the `General_Category` property with value `Lowercase_Letter`, and the `Script` property with value `Latn`. The `\p` and `\P` escape sequences allow you to match a character based on its properties. For example, `a` can be matched by `\p{Lowercase_Letter}` (the `General_Category` property name is optional) as well as `\p{Script=Latn}`.

To compose multiple properties, see [pattern subtraction and intersection](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion#pattern_subtraction_and_intersection).

<!-- TODO: replace it with a better suggestion when the v flag ships: https://github.com/tc39/proposal-regexp-v-flag -->

## Examples

## See also

- [Regex guide: Character classes](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes)
- [Regex reference](/en-US/docs/Web/JavaScript/Reference/Regular_expressions)
- [Character class: `[...]`, `[^...]`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [Character class escape: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
- [Character escape: `\n`, `\u{...}`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [Disjunction: `|`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
