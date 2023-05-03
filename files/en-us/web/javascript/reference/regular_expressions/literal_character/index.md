---
title: "Literal character: a, b"
slug: Web/JavaScript/Reference/Regular_expressions/Literal_character
page-type: javascript-language-feature
browser-compat: javascript.regular_expressions.literal_character
---

{{JsSidebar}}

A **literal character** specifies exactly itself to be matched in the input text.

## Syntax

```regex
c
```

### Parameters

- `c`
  - : A single character that is not one of the syntax characters described below.

## Description

In regular expressions, most characters can appear literally. They are usually the most basic building blocks of patterns. For example, here is a pattern from the [Removing HTML tags](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier#removing_html_tags) example:

```js
const pattern = /<.+?>/g;
```

In this example, `.`, `+`, and `?` are called _syntax characters_. They have special meanings in regular expressions. The rest of the characters in the pattern (`<` and `>`) are literal characters. They match themselves in the input text: the left and right angle brackets.

The following characters are syntax characters in regular expressions, and they cannot appear as literal characters:

- [`^`, `$`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [`\`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [`*`, `+`, `?`, `{`, `}`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
- [`(`, `)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [`[`, `]`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [`|`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)

Whenever you want to match a syntax character literally, you need to [escape](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) it with a backslash (`\`). For example, to match a literal `*` in a pattern, you need to write `\*` in the pattern. Using syntax characters as literal characters either leads to unexpected results or causes syntax errors — for example, `/*/` is not a valid regular expression because the quantifier is not preceded by a pattern. In non-[unicode](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) mode, `]`, `{`, and `}` may appear literally if it's not possible to parse them as the end of a character class or quantifier delimiters. This is a [deprecated syntax for web compatibility](/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), and you should not rely on it.

Regular expression literals cannot be specified with certain non-syntax literal characters. `/` cannot appear as a literal character in a regular expression literal, because `/` is used as the delimiter of the literal itself. You need to escape it as `\/` if you want to match a literal `/`. Line terminators cannot appear as literal characters in a regular expression literal either, because a literal cannot span multiple lines. You need to use a [character escape](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) like `\n` instead. There are no such restrictions when using the {{jsxref("RegExp/RegExp", "RegExp()")}} constructor, although string literals have their own escaping rules (for example, `"\\"` actually denotes a single backslash character, so `new RegExp("\\*")` and `/\*/` are equivalent).

Within character classes, more characters can appear literally. For more information, see the [Character class](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) page. For example `\.` and `[.]` both match a literal `.`.

In non-[unicode](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) mode, the pattern is interpreted as a sequence of [UTF-16 code units](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters). This means surrogate pairs actually represent two literal characters. This causes unexpected behaviors when paired with other features:

```js
/^[😄]$/.test("😄"); // false, because the pattern is interpreted as /^[\ud83d\udc04]$/
/^😄+$/.test("😄😄"); // false, because the pattern is interpreted as /^\ud83d\udc04+$/
```

In unicode mode, the pattern is interpreted as a sequence of Unicode code points, and surrogate pairs do not get split. Therefore, you should always prefer to use the `u` flag.

## Examples

### Using literal characters

The following example is copied from [Character escape](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape#using_character_escapes). The `a` and `b` characters are literal characters in the pattern, and `\n` is an escaped character because it cannot appear literally in a regular expression literal.

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
- [Character escape: `\n`, `\u{...}`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
