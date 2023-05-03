---
title: "Escape characters: \\n, \\u{...}"
slug: Web/JavaScript/Reference/Regular_expressions/Escape_characters
---

{{JsSidebar}}

An **escape character** represents a character that may not be able to be conveniently represented in its literal form.

## Syntax

```regex
\f, \n, \r, \t, \v
\cA, \cB, …, \cz
\0
\^, \$, \\, \., \*, \+, \?, \(, \), \[, \], \{, \}, \|, \/

\xHH
\uHHHH
\u{HHH}
```

### Parameters

- `HHH`
  - : A hexadecimal number representing the Unicode code point of the character. The `\xHH` form must have two hexadecimal digits; the `\uHHHH` form must have four; the `\u{HHH}` form may have 1 to 6 hexadecimal digits.

## Description

The following escape characters are recognized in regular expressions:

- `\f`, `\n`, `\r`, `\t`, `\v`
  - : Same as those in [string literals](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#escape_sequences), except `\b` represents a [word boundary](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion) in regexes unless in a [character class](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class).
- `\c` followed by a letter from `A` to `Z` or `a` to `z`
  - : Represents the control character with value equal to the letter's character value modulo 32. For example, `\cJ` represents line break (`\n`), because the code point of `J` is 74, and 74 modulo 32 is 10, which is the code point of line break. Because an uppercase letter and its lowercase form differ by 32, `\cJ` and `\cj` are equivalent. You can represent control characters from 1 to 26 in this form.
- `\0`
  - : Represents the U+0000 NUL character. Cannot be followed by a digit (which makes it a [legacy octal escape](/en-US/docs/Web/JavaScript/Reference/Errors/Deprecated_octal) sequence).
- `\^`, `\$`, `\\`, `\.` `\*`, `\+`, `\?`, `\(`, `\)`, `\[`, `\]`, `\{`, `\}`, `\|`, `\/`
  - : Represents the character itself. For example, `\\` represents a backslash, and `\(` represents a left parenthesis. These are syntax characters in regexes (`/` is the delimiter of a regex literal), so they require escaping unless in a [character class](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class).
- `\xHH`
  - : Represents the character with the given hexadecimal Unicode code point. The hexadecimal number must be exactly two digits long.
- `\uHHHH`
  - : Represents the character with the given hexadecimal Unicode code point. The hexadecimal number must be exactly four digits long. Two such escape sequences can be used to represent a surrogate pair in [unicode](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) mode. (In non-unicode mode, they are always two separate characters.)
- `\u{HHH}`
  - : ([Unicode](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) mode only) Represents the character with the given hexadecimal Unicode code point. The hexadecimal number can be from 1 to 6 digits long.

In non-[unicode](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) mode, escape sequences that are not one of the above become _identity escapes_: they represent the character that follows the backslash. For example, `\a` represents the character `a`. This behavior limits the ability to introduce new escape sequences without causing backward compatibility issues, and is therefore forbidden in unicode mode.

In non-unicode mode, `]`, `{`, and `}` may appear literally if it's not possible to parse them as the end of a character class, or quantifier delimiters. This is a [deprecated syntax for web compatibility](/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp) and you should not rely on it.

## Examples

## See also

- [Regex guide: Quantifiers](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers)
- [Regex reference](/en-US/docs/Web/JavaScript/Reference/Regular_expressions)
- [Disjunction: `|`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
- [Character class: `[...]`, `[^...]`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
