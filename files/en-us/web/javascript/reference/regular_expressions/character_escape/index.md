---
title: "Character escape: \\n, \\u{...}"
slug: Web/JavaScript/Reference/Regular_expressions/Character_escape
page-type: javascript-language-feature
browser-compat: javascript.regular_expressions.character_escape
---

{{JsSidebar}}

A **character escape** represents a character that may not be able to be conveniently represented in its literal form.

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

> **Note:** `,` is not part of the syntax.

### Parameters

- `HHH`
  - : A hexadecimal number representing the Unicode code point of the character. The `\xHH` form must have two hexadecimal digits; the `\uHHHH` form must have four; the `\u{HHH}` form may have 1 to 6 hexadecimal digits.

## Description

The following character escapes are recognized in regular expressions:

- `\f`, `\n`, `\r`, `\t`, `\v`
  - : Same as those in [string literals](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences), except `\b`, which represents a [word boundary](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion) in regexes unless in a [character class](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class).
- `\c` followed by a letter from `A` to `Z` or `a` to `z`
  - : Represents the control character with value equal to the letter's character value modulo 32. For example, `\cJ` represents line break (`\n`), because the code point of `J` is 74, and 74 modulo 32 is 10, which is the code point of line break. Because an uppercase letter and its lowercase form differ by 32, `\cJ` and `\cj` are equivalent. You can represent control characters from 1 to 26 in this form.
- `\0`
  - : Represents the U+0000 NUL character. Cannot be followed by a digit (which makes it a [legacy octal escape](/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences) sequence).
- `\^`, `\$`, `\\`, `\.` `\*`, `\+`, `\?`, `\(`, `\)`, `\[`, `\]`, `\{`, `\}`, `\|`, `\/`
  - : Represents the character itself. For example, `\\` represents a backslash, and `\(` represents a left parenthesis. These are [syntax characters](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) in regexes (`/` is the delimiter of a regex literal), so they require escaping unless in a [character class](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class).
- `\xHH`
  - : Represents the character with the given hexadecimal Unicode code point. The hexadecimal number must be exactly two digits long.
- `\uHHHH`
  - : Represents the character with the given hexadecimal Unicode code point. The hexadecimal number must be exactly four digits long. Two such escape sequences can be used to represent a surrogate pair in [Unicode-aware mode](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode). (In Unicode-unaware mode, they are always two separate characters.)
- `\u{HHH}`
  - : ([Unicode-aware mode](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) only) Represents the character with the given hexadecimal Unicode code point. The hexadecimal number can be from 1 to 6 digits long.

In [Unicode-unaware mode](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode), escape sequences that are not one of the above become _identity escapes_: they represent the character that follows the backslash. For example, `\a` represents the character `a`. This behavior limits the ability to introduce new escape sequences without causing backward compatibility issues, and is therefore forbidden in Unicode-aware mode.

In Unicode-unaware mode, `]`, `{`, and `}` may appear [literally](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) if it's not possible to parse them as the end of a character class or quantifier delimiters. This is a [deprecated syntax for web compatibility](/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), and you should not rely on it.

In Unicode-unaware mode, escape sequences within [character classes](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) of the form `\cX` where `X` is a number or `_` are decoded in the same way as those with {{Glossary("ASCII")}} letters: `\c0` is the same as `\cP` when taken modulo 32. In addition, if the form `\cX` is encountered anywhere where `X` is not one of the recognized characters, then the backslash is treated as a literal character. These syntaxes are also deprecated.

```js
/[\c0]/.test("\x10"); // true
/[\c_]/.test("\x1f"); // true
/[\c*]/.test("\\"); // true
/\c/.test("\\c"); // true
/\c0/.test("\\c0"); // true (the \c0 syntax is only supported in character classes)
```

## Examples

### Using character escapes

Character escapes are useful when you want to match a character that is not easily represented in its literal form. For example, you cannot use a line break literally in a regex literal, so you must use a character escape:

```js
const pattern = /a\nb/;
const string = `a
b`;
console.log(pattern.test(string)); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Character classes](/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)
- [Regular expressions reference](/en-US/docs/Web/JavaScript/Reference/Regular_expressions)
- [Character class: `[...]`, `[^...]`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [Character class escape: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
- [Literal character: `a`, `b`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)
- [Unicode character class escape: `\p{...}`, `\P{...}`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
- [Backreference: `\1`, `\2`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
- [Named backreference: `\k<name>)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
- [Word boundary assertion: `\b`, `\B`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
