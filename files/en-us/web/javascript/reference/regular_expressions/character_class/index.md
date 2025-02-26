---
title: "Character class: [...], [^...]"
slug: Web/JavaScript/Reference/Regular_expressions/Character_class
page-type: javascript-language-feature
browser-compat: javascript.regular_expressions.character_class
---

{{jsSidebar}}

A **character class** matches any character in or not in a custom set of characters. When the [`v`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) flag is enabled, it can also be used to match finite-length strings.

## Syntax

```regex
[]
[abc]
[A-Z]

[^]
[^abc]
[^A-Z]

// `v` mode only
[operand1&&operand2]
[operand1--operand2]
[\q{substring}]
```

### Parameters

- `operand1`, `operand2`
  - : Can be a single character, another square-bracket-enclosed character class, a [character class escape](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape), a [Unicode character class escape](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape), or a string using the `\q` syntax.
- `substring`
  - : A literal string.

## Description

A character class specifies a list of characters between square brackets and matches any character in the list. The [`v`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) flag drastically changes how character classes are parsed and interpreted. The following syntaxes are available in both `v` mode and non-`v` mode:

- A single character: matches the character itself.
- A range of characters: matches any character in the inclusive range. The range is specified by two characters separated by a dash (`-`). The first character must be smaller in character value than the second character. The _character value_ is the Unicode code point of the character. Because Unicode code points are usually assigned to alphabets in order, `[a-z]` specifies all lowercase Latin characters, while `[α-ω]` specifies all lowercase Greek characters. In [Unicode-unaware mode](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode), regexes are interpreted as a sequence of [BMP](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) characters. Therefore, surrogate pairs in character classes represent two characters instead of one; see below for details.
- Escape sequences: `\b`, `\-`, [character class escapes](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape), [Unicode character class escapes](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape), and other [character escapes](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape).

These syntaxes can occur any number of times, and the character sets they represent are unioned. For example, `/[a-zA-Z0-9]/` matches any letter or digit.

The `^` prefix in a character class creates a _complement class_. For example, `[^abc]` matches any character except `a`, `b`, or `c`. The `^` character is a literal character when it appears in the middle of a character class — for example, `[a^b]` matches the characters `a`, `^`, and `b`.

The [lexical grammar](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#regular_expression_literals) does a very rough parse of regex literals, so that it does not end the regex literal at a `/` character which appears within a character class. This means `/[/]/` is valid without needing to escape the `/`.

The boundaries of a character range must not specify more than one character, which happens if you use a [character class escape](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape). For example:

```js-nolint example-bad
/[\s-9]/u; // SyntaxError: Invalid regular expression: Invalid character class
```

In [Unicode-unaware mode](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode), character ranges where one boundary is a character class makes the `-` become a literal character. This is a [deprecated syntax for web compatibility](/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), and you should not rely on it.

```js
/[\s-9]/.test("-"); // true
```

In [Unicode-unaware mode](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode), regexes are interpreted as a sequence of BMP characters. Therefore, surrogate pairs in character classes represent two characters instead of one.

```js
/[😄]/.test("\ud83d"); // true
/[😄]/u.test("\ud83d"); // false

/[😄-😛]/.test("😑"); // SyntaxError: Invalid regular expression: /[😄-😛]/: Range out of order in character class
/[😄-😛]/u.test("😑"); // true
```

Even if the pattern [ignores case](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase), the case of the two ends of a range is significant in determining which characters belong to the range. For example, the pattern `/[E-F]/i` only matches `E`, `F`, `e`, and `f`, while the pattern `/[E-f]/i` matches all uppercase and lowercase {{Glossary("ASCII")}} letters (because it spans over `E–Z` and `a–f`), as well as `[`, `\`, `]`, `^`, `_`, and `` ` ``.

### Non-v-mode character class

Non-`v`-mode character classes interpret most character [literally](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) and have less restrictions about the characters they can contain. For example, `.` is the literal dot character, not the [wildcard](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard). The only characters that cannot appear literally are `\`, `]`, and `-`.

- In character classes, most escape sequences are supported, except `\b`, `\B`, and [backreferences](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Backreference). `\b` indicates a backspace character instead of a [word boundary](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion), while the other two cause syntax errors. To use `\` literally, escape it as `\\`.
- The `]` character indicates the end of the character class. To use it literally, escape it as `\]`.
- The dash (`-`) character, when used between two characters, indicates a range. When it appears at the start or end of a character class, it is a literal character. It's also a literal character when it's used in the boundary of a range. For example, `[a-]` matches the characters `a` and `-`, `[!--]` matches the characters `!` to `-`, and `[--9]` matches the characters `-` to `9`. You can also escape it as `\-` if you want to use it literally anywhere.

### v-mode character class

The basic idea of character classes in `v` mode remains the same: you can still use most characters literally, use `-` to denote character ranges, and use escape sequences. One of the most important features of the `v` flag is _set notation_ within character classes. As previously mentioned, normal character classes can express unions by concatenating two ranges, such as using `[A-Z0-9]` to mean "the union of the set `[A-Z]` and the set `[0-9]`". However, there's no easy way to represent other operations with character sets, such as intersection and difference.

With the `v` flag, intersection is expressed with `&&`, and subtraction with `--`. The absence of both implies union. The two operands of `&&` or `--` can be a character, character escape, character class escape, or even another character class. For example, to express "a word character that's not an underscore", you can use `[\w--_]`. You cannot mix operators on the same level. For example, `[\w&&[A-z]--_]` is a syntax error. However, because you can nest character classes, you can be explicit by writing `[\w&&[[A-z]--_]]` or `[[\w&&[A-z]]--_]` (which both mean `[A-Za-z]`). Similarly, `[AB--C]` is invalid and you need to write `[A[B--C]]` (which just means `[AB]`).

In `v` mode, the [Unicode character class escape](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) `\p` can match finite-length strings, such as emojis. For symmetry, regular character classes can also match more than one character. To write a "string literal" in a character class, you wrap the string in `\q{...}`. The only regex syntax supported here is [disjunction](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) — apart from this, `\q` must completely enclose literals (including escaped characters). This ensures that character classes can only match finite-length strings with finitely many possibilities.

Because the character class syntax is now more sophisticated, more characters are reserved and forbidden from appearing literally.

- In addition to `]` and `\`, the following characters must be escaped in character classes if they represent literal characters: `(`, `)`, `[`, `{`, `}`, `/`, `-`, `|`. This list is somewhat similar to the list of [syntax characters](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character), except that `^`, `$`, `*`, `+`, and `?` are not reserved inside character classes, while `/` and `-` are not reserved outside character classes (although `/` may delimit a regex literal and therefore still needs to be escaped). All these characters may also be optionally escaped in `u`-mode character classes.
- The following "double punctuator" sequences must be escaped as well (but they don't make much sense without the `v` flag anyway): `&&`, `!!`, `##`, `$$`, `%%`, `**`, `++`, `,,`, `..`, `::`, `;;`, `<<`, `==`, `>>`, `??`, `@@`, `^^`, ` `` `, `~~`. In `u` mode, some of these characters can only appear literally within character classes and cause a syntax error when escaped. In `v` mode, they must be escaped when appearing in pairs, but can be optionally escaped when appearing alone. For example, `/[\!]/u` is invalid because it's an [identity escape](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape), but both `/[\!]/v` and `/[!]/v` are valid, while `/[!!]/v` is invalid. The [literal character](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) reference has a detailed table of which characters can appear escaped or unescaped.

Complement character classes `[^...]` cannot possibly be able to match strings longer than one character. For example, `[\q{ab|c}]` is valid and matches the string `"ab"`, but `[^\q{ab|c}]` is invalid because it's unclear how many characters should be consumed. The check is done by checking if all `\q` contain single characters and all `\p` specify character properties — for unions, all operands must be purely characters; for intersections, at least one operand must be purely characters; for subtraction, the leftmost operand must be purely characters. The check is syntactic without looking at the actual character set being specified, which means although `/[^\q{ab|c}--\q{ab}]/v` is equivalent to `/[^c]/v`, it's still rejected.

### Complement classes and case-insensitive matching

[Case-insensitive](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase) matching works by case-folding both the expected character set and the matched string. When specifying complement classes, the order in which JavaScript performs case-folding and complementing is important. In brief, `[^...]` in `u` mode matches `allCharacters - caseFold(original)`, while in `v` mode matches `caseFold(allCharacters) - caseFold(original)`. This ensures that all complement class syntaxes, including `[^...]`, `\P`, `\W`, etc., cancel each other out.

Consider the following two regexes (to simplify things, let's assume that Unicode characters are one of three kinds: lowercase, uppercase, and caseless, and each uppercase letter has a unique lowercase counterpart, and vice versa):

```js
const r1 = /\p{Lowercase_Letter}/iu;
const r2 = /[^\P{Lowercase_Letter}]/iu;
```

The `r2` is a double negation and seems to be equivalent with `r1`. But in fact, `r1` matches all lower- and uppercase ASCII letters, while `r2` matches none. Here's a step-by-step explanation:

- In `r1`, `\p{Lowercase_Letter}` constructs a set of all lowercase characters. Characters in this set are then case-folded to their lowercase form, so they stay the same. The input string is also case-folded to lowercase. Therefore, `"A"` and `"a"` are both folded to `"a"` and matched by `r1`.
- In `r2`, `\P{Lowercase_Letter}` first constructs a set of all non-lowercase characters, i.e., uppercase letters and caseless characters. Characters in this set are then case-folded to their lowercase form, so the character set becomes all lowercase letters and caseless characters. `[^...]` negates the match, causing it to match anything that's _not_ in this set, i.e., an uppercase letter. However, the input is still case-folded to lowercase, so `"A"` is folded to `"a"` and not matched by `r2`.

The main observation here is that after `[^...]` negates the match, the expected character set may not be a subset of the set of case-folded Unicode characters, causing the case-folded input to not be in the expected character set. In `v` mode, the set of all characters is also case-folded. The `\P` character class itself also works slightly differently in `v` mode (see [Unicode character class escape](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)). All of these ensure that `[^\P{Lowercase_Letter}]` and `\p{Lowercase_Letter}` are strictly equivalent.

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

### Using intersection

The following function matches Greek letters.

```js
function greekLetters(str) {
  return str.match(/[\p{Script_Extensions=Greek}&&\p{Letter}]/gv);
}

// 𐆊 is U+1018A GREEK ZERO SIGN
greekLetters("π𐆊P0零αAΣ"); // [ 'π', 'α', 'Σ' ]
```

### Using subtraction

The following function matches all non-ASCII numbers.

```js
function nonASCIINumbers(str) {
  return str.match(/[\p{Decimal_Number}--[0-9]]/gv);
}

// 𑜹 is U+11739 AHOM DIGIT NINE
nonASCIINumbers("𐆊0零1𝟜𑜹a"); // [ '𝟜', '𑜹' ]
```

### Matching strings

The following function matches all line terminator sequences, including the [line terminator characters](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) and the sequence `\r\n` (CRLF).

```js
function getLineTerminators(str) {
  return str.match(/[\r\n\u2028\u2029\q{\r\n}]/gv);
}

getLineTerminators(`
A poem\r
Is split\r\n
Into many
Stanzas
`); // [ '\r', '\r\n', '\n' ]
```

This example is exactly equivalent to `/(?:\r|\n|\u2028|\u2029|\r\n)/gu` or `/(?:[\r\n\u2028\u2029]|\r\n)/gu`, except shorter.

The most useful case of `\q{}` is when doing subtraction and intersection. Previously, this was possible with [multiple lookaheads](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion#pattern_subtraction_and_intersection). The following function matches flags that are not one of the American, Chinese, Russian, British, and French flags.

```js
function notUNSCPermanentMember(flag) {
  return /^[\p{RGI_Emoji_Flag_Sequence}--\q{🇺🇸|🇨🇳|🇷🇺|🇬🇧|🇫🇷}]$/v.test(flag);
}

notUNSCPermanentMember("🇺🇸"); // false
notUNSCPermanentMember("🇩🇪"); // true
```

This example is mostly equivalent to `/^(?!🇺🇸|🇨🇳|🇷🇺|🇬🇧|🇫🇷)\p{RGI_Emoji_Flag_Sequence}$/v`, except perhaps more performant.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Character classes](/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) guide
- [Regular expressions](/en-US/docs/Web/JavaScript/Reference/Regular_expressions)
- [Character class escape: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
- [Unicode character class escape: `\p{...}`, `\P{...}`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
- [Literal character: `a`, `b`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)
- [Character escape: `\n`, `\u{...}`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [Disjunction: `|`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
- [RegExp v flag with set notation and properties of strings](https://v8.dev/features/regexp-v-flag) on v8.dev (2022)
