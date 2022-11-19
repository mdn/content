---
title: "Named backreference: \\k<name>"
slug: Web/JavaScript/Reference/Regular_expressions/Named_backreference
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

## Examples

### Pairing quotes

The following function matches the `title='xxx'` pattern in a string. To ensure the quotes match, we use a backreference to refer to the first quote.

```js
function parseTitle(metastring) {
  return metastring.match(/title=(?<quote>["'])(.*?)\k<quote>/)[2];
}

parseTitle('title="foo"'); // 'foo'
parseTitle("title='foo' lang='en'"); // 'foo'
parseTitle('title="Named capturing groups\' advantages"'); // "Named capturing groups' advantages"
```

## See also

- [Regex guide: Groups and backreferences](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Backreferences)
- [Regex reference](/en-US/docs/Web/JavaScript/Reference/Regular_expressions)
- [Capturing group: `(...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [Named capturing group: `(?<name>...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- [Backreference: `\1`, `\2`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
