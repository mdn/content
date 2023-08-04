---
title: "Backreference: \\1, \\2"
slug: Web/JavaScript/Reference/Regular_expressions/Backreference
page-type: javascript-language-feature
browser-compat: javascript.regular_expressions.backreference
---

{{JsSidebar}}

A **backreference** refers to the submatch of a previous [capturing group](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) and matches the same text as that group. For [named capturing groups](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group), you may prefer to use the [named backreference](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference) syntax.

## Syntax

```regex
\N
```

> **Note:** `N` is not a literal character.

### Parameters

- `N`
  - : A positive integer referring to the number of a capturing group.

## Description

A backreference is a way to match the same text as previously matched by a capturing group. Capturing groups count from 1, so the first capturing group's result can be referenced with `\1`, the second with `\2`, and so on. `\0` is a [character escape](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) for the NUL character.

In [case-insensitive](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase) matching, the backreference may match text with different casing from the original text.

```js
/(b)\1/i.test("bB"); // true
```

The backreference must refer to an existent capturing group. If the number it specifies is greater than the total number of capturing groups, a syntax error is thrown.

```js
/(a)\2/u; // SyntaxError: Invalid regular expression: Invalid escape
```

In [Unicode-unaware mode](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode), invalid backreferences become a [legacy octal escape](/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences) sequence. This is a [deprecated syntax for web compatibility](/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), and you should not rely on it.

```js
/(a)\2/.test("a\x02"); // true
```

If the referenced capturing group is unmatched (for example, because it belongs to an unmatched alternative in a [disjunction](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)), or the group hasn't matched yet (for example, because it lies to the right of the backreference), the backreference always succeeds (as if it matches the empty string).

```js
/(?:a|(b))\1c/.test("ac"); // true
/\1(a)/.test("a"); // true
```

## Examples

### Pairing quotes

The following function matches the `title='xxx'` and `title="xxx"` patterns in a string. To ensure the quotes match, we use a backreference to refer to the first quote. Accessing the second capturing group (`[2]`) returns the string between the matching quote characters:

```js
function parseTitle(metastring) {
  return metastring.match(/title=(["'])(.*?)\1/)[2];
}

parseTitle('title="foo"'); // 'foo'
parseTitle("title='foo' lang='en'"); // 'foo'
parseTitle('title="Named capturing groups\' advantages"'); // "Named capturing groups' advantages"
```

### Matching duplicate words

The following function finds duplicate words in a string (which are usually typos). Note that it uses the `\w` [character class escape](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape), which only matches English letters but not any accented letters or other alphabets. If you want more generic matching, you may want to [split](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) the string by whitespace and iterate over the resulting array.

```js
function findDuplicates(text) {
  return text.match(/\b(\w+)\s+\1\b/i)?.[1];
}

findDuplicates("foo foo bar"); // 'foo'
findDuplicates("foo bar foo"); // undefined
findDuplicates("Hello hello"); // 'Hello'
findDuplicates("Hello hellos"); // undefined
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Groups and backreferences](/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)
- [Regular expressions reference](/en-US/docs/Web/JavaScript/Reference/Regular_expressions)
- [Capturing group: `(...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [Named capturing group: `(?<name>...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- [Named backreference: `\k<name>`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
