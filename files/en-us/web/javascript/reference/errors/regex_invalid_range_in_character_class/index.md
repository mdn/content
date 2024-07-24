---
title: "SyntaxError: invalid range in character class"
slug: Web/JavaScript/Reference/Errors/Regex_invalid_range_in_character_class
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "invalid range in character class" occurs when a [character class](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) in a regular expression uses a range, but the start of the range is greater than the end.

## Message

```plain
SyntaxError: Invalid regular expression: /[2-1]/: Range out of order in character class (V8-based)
SyntaxError: invalid range in character class (Firefox)
SyntaxError: Invalid regular expression: range out of order in character class (Safari)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

In character classes, you can join two characters with a hyphen `-` to represent an inclusive interval of characters based on their Unicode code points. For example, `[a-z]` matches any lowercase letter. However, if the end of the range is less than the start, the range cannot match anything and is likely a mistake.

## Examples

### Invalid cases

```js example-bad
/[2-1]/; // The range is out of order
/[_-=]/; // _ has value 95, = has value 61
```

### Valid cases

```js example-good
/[1-2]/; // Swap the range
/[_\-=]/; // Escape the hyphen so it matches the literal character
```

## See also

- [Regular expressions](/en-US/docs/Web/JavaScript/Reference/Regular_expressions)
- [Character class: `[...]`, `[^...]`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
