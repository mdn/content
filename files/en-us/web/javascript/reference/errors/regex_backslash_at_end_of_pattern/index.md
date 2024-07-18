---
title: "SyntaxError: \\ at end of pattern"
slug: Web/JavaScript/Reference/Errors/Regex_backslash_at_end_of_pattern
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "\ at end of pattern" occurs when a regular expression pattern ends with an unescaped backslash (`\`). In a regex literal, the backslash would cause the closing slash `/` to be a literal character, so this can only appear when using the {{jsxref("RegExp/RegExp", "RegExp()")}} constructor.

## Message

```plain
SyntaxError: Invalid regular expression: /\/: \ at end of pattern (V8-based)
SyntaxError: \ at end of pattern (Firefox)
SyntaxError: Invalid regular expression: \ at end of pattern (Safari)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

A backslash cannot appear literally in a regular expression. It either precedes another character to [escape it](/en-US/docs/Web/JavaScript/Reference/Regular_expressions#escape_sequences), or is itself escaped by another backslash. A backslash at the end of a regular expression pattern is invalid because it is not escaping anything.

## Examples

### Double-escaping backslashes

This error can only happen when using the `RegExp()` constructor. Consider the following code, which intends to match a single backslash character:

```js example-bad
const pattern = new RegExp("\\");
```

In JavaScript strings, backslashes are also escape sequences. Therefore, the two backslashes in the string literal `"\\"` are interpreted as a single backslash. The `RegExp()` constructor then only sees a single backslash character in the regex source. To fix this, you need to double-escape the backslash:

```js example-good
const pattern = new RegExp("\\\\");
```

The four backslashes in the string literal represent two backslashes in the regex source, which then becomes a [character escape](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) for a single backslash literal character.

## See also

- [Regular expressions](/en-US/docs/Web/JavaScript/Reference/Regular_expressions)
- [Escape sequences](/en-US/docs/Web/JavaScript/Reference/Regular_expressions#escape_sequences)
