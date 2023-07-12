---
title: "Named backreference: \\k<name>"
slug: Web/JavaScript/Reference/Regular_expressions/Named_backreference
page-type: javascript-language-feature
browser-compat: javascript.regular_expressions.named_backreference
---

{{JsSidebar}}

A **named backreference** refers to the submatch of a previous [named capturing group](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) and matches the same text as that group. For [unnamed capturing groups](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group), you need to use the normal [backreference](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) syntax.

## Syntax

```regex
\k<name>
```

### Parameters

- `name`
  - : The name of the group. Must be a valid [identifier](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) and refer to an existent named capturing group.

## Description

Named backreferences are very similar to normal backreferences: it refers to the text matched by a capturing group and matches the same text. The difference is that you refer to the capturing group by name instead of by number. This makes the regular expression more readable and easier to refactor and maintain.

In [Unicode-unaware mode](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode), the sequence `\k` only starts a named backreference if the regex contains at least one named capturing group. Otherwise, it is an [identity escape](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) and is the same as the literal character `k`. This is a [deprecated syntax for web compatibility](/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), and you should not rely on it.

```js
/\k/.test("k"); // true
```

## Examples

### Pairing quotes

The following function matches the `title='xxx'` and `title="xxx"` patterns in a string. To ensure the quotes match, we use a backreference to refer to the first quote. Accessing the second capturing group (`[2]`) returns the string between the matching quote characters:

```js
function parseTitle(metastring) {
  return metastring.match(/title=(?<quote>["'])(.*?)\k<quote>/)[2];
}

parseTitle('title="foo"'); // 'foo'
parseTitle("title='foo' lang='en'"); // 'foo'
parseTitle('title="Named capturing groups\' advantages"'); // "Named capturing groups' advantages"
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
- [Backreference: `\1`, `\2`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
