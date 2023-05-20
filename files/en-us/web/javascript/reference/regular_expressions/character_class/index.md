---
title: "Character class: [...], [^...]"
slug: Web/JavaScript/Reference/Regular_expressions/Character_class
page-type: javascript-language-feature
browser-compat: javascript.regular_expressions.character_class
---

{{JsSidebar}}

A **character class** matches any character in or not in a custom set of characters.

## Syntax

```regex
[]
[abc]
[A-Z]

[^]
[^abc]
[^A-Z]
```

## Description

A character class specifies a list of characters between square brackets and matches any character in the list. The following syntaxes are available:

- A single character: matches the character itself.
- A range of characters: matches any character in the inclusive range. The range is specified by two characters separated by a dash (`-`). The first character must be smaller in character value than the second character. The _character value_ is the Unicode code point of the character. Because Unicode code points are usually assigned to alphabets in order, `[a-z]` specifies all lowercase Latin characters, while `[α-ω]` specifies all lowercase Greek characters. In non-[unicode](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) mode, regexes are interpreted as a sequence of [BMP](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) characters. Therefore, surrogate pairs in character classes represent two characters instead of one; see below for details.
- Escape sequences: `\b`, `\-`, [character class escapes](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape), [Unicode character class escapes](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape), and other [character escapes](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape).

These syntaxes can occur any number of times, and the character sets they represent are unioned. For example, `/[a-zA-Z0-9]/` matches any letter or digit.

Unlike other parts of the regex, character classes interpret most character [literally](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) and have less restrictions about the characters they can contain. For example, `.` is the literal dot character, not the [wildcard](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard). The only characters that cannot appear literally are `\`, `]`, and `-`.

- In character classes, most escape sequences are supported, except `\b`, `\B`, and [backreferences](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Backreference). `\b` indicates a backspace character instead of a [word boundary](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion), while the other two cause syntax errors. To use `\` literally, escape it as `\\`.
- The `]` character indicates the end of the character class. To use it literally, escape it as `\]`.
- The dash (`-`) character, when used between two characters, indicates a range. When it appears at the start or end of a character class, it is a literal character. It's also a literal character when it's used in the boundary of a range. For example, `[a-]` matches the characters `a` and `-`, `[!--]` matches the characters `!` to `-`, and `[--9]` matches the characters `-` to `9`. You can also escape it as `\-` if you want to use it literally anywhere.

The [lexical grammar](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#regular_expression_literals) does a very rough parse of regex literals, so that it does not end the regex literal at a `/` character which appears within a character class. This means `/[/]/` is valid without needing to escape the `/`.

The boundaries of a character range must not specify more than one character, which happens if you use a [character class escape](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape). For example:

```js
/[\s-9]/u; // SyntaxError: Invalid regular expression: Invalid character class
```

In non-[unicode](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) mode, character ranges where one boundary is a character class makes the `-` become a literal character. This is a [deprecated syntax for web compatibility](/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), and you should not rely on it.

```js
/[\s-9]/.test("-"); // true
```

In non-[unicode](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) mode, regexes are interpreted as a sequence of BMP characters. Therefore, surrogate pairs in character classes represent two characters instead of one.

```js
/[😄]/.test("\ud83d"); // true
/[😄]/u.test("\ud83d"); // false

/[😄-😛]/.test("😑"); // SyntaxError: Invalid regular expression: /[😄-😛]/: Range out of order in character class
/[😄-😛]/u.test("😑"); // true
```

Even if the pattern [ignores case](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase), the case of the two ends of a range is significant in determining which characters belong to the range. For example, the pattern `/[E-F]/i` only matches `E`, `F`, `e`, and `f`, while the pattern `/[E-f]/i` matches all uppercase and lowercase ASCII letters (because it spans over `E–Z` and `a–f`), as well as `[`, `\`, `]`, `^`, `_`, and `` ` ``.

The `^` prefix in a character class inverts the match. For example, `[^abc]` matches any character except `a`, `b`, or `c`. The `^` character is a literal character when it appears in the middle of a character class — for example, `[a^b]` matches the characters `a`, `^`, and `b`.

## Examples

### Matching hexadecimal digits

The following function determines whether a string contains a valid hexadecimal number:

```js
function isHexadecimal(str) {
  return /^[0-9A-F]+$/i.test(str);
}

isHexadecimal("2F3"); // true
isHexadecimal("beef"); // true
isHexadecimal("undefined"); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Character classes](/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)
- [Regular expressions reference](/en-US/docs/Web/JavaScript/Reference/Regular_expressions)
- [Character class escape: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
- [Unicode character class escape: `\p{...}`, `\P{...}`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
- [Literal character: `a`, `b`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)
- [Character escape: `\n`, `\u{...}`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [Disjunction: `|`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
