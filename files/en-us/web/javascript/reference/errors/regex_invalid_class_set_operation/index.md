---
title: "SyntaxError: invalid class set operation in regular expression"
slug: Web/JavaScript/Reference/Errors/Regex_invalid_class_set_operation
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "invalid class set operation in regular expression" occurs when a double punctuator sequence appears in a [`v`-mode character class](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) but it is not recognized by the syntax.

## Message

```plain
SyntaxError: Invalid regular expression: /[&&]/v: Invalid set operation in character class (V8-based)
SyntaxError: invalid class set operation in regular expression (Firefox)
SyntaxError: Invalid regular expression: invalid operation in class set (Safari)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

There are three possible ways this could happen:

- You are trying to use `&&` or `--`, but the syntax is wrong. Each of these operators must join two characters or character sets.
- You are mixing operators on the same level. For example, `[\w&&[A-z]--_]` is invalid because it uses `&&` and `--` on the same level. You need to use nested character classes to disambiguate, such as `[\w&&[[A-z]--_]]`. Note that the union operation uses an operator that has no text; for example, `[AB&&C]` is invalid because `A` and `B` are implicitly joined by the union operator. You need to use `[A[B&&C]]` instead.
- You are using a double punctuator sequence that's not `&&` or `--`. These sequences are reserved for future syntax extensions. They include: `&&`, `!!`, `##`, `$$`, `%%`, `**`, `++`, `,,`, `..`, `::`, `;;`, `<<`, `==`, `>>`, `??`, `@@`, `^^`, ` `` `, `~~`. However, these sequences don't make much sense anyway, and can either be replaced with a single character or cause two adjacent ranges to be merged.

## See also

- [Regular expressions](/en-US/docs/Web/JavaScript/Reference/Regular_expressions)
- [Character class: `[...]`, `[^...]`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
