---
title: "SyntaxError: duplicate capture group name in regular expression"
slug: Web/JavaScript/Reference/Errors/Regex_duplicate_capture_group_name
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "duplicate capture group name in regular expression" occurs when a regular expression pattern contains two or more [named capturing groups](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) with the same name, and these capture groups could be matched at the same time.

## Message

```plain
SyntaxError: Invalid regular expression: /(?<a>)(?<a>)/: Duplicate capture group name (V8-based)
SyntaxError: duplicate capture group name in regular expression (Firefox)
SyntaxError: Invalid regular expression: duplicate group specifier name (Safari)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

All [named capturing groups](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) in a regular expression pattern must have unique names. A more recent feature allows named capturing groups to share names, as long as they belong to different [disjunction alternatives](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) and cannot be matched at the same time (see [browser compatibility](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group#browser_compatibility) for this). However, it is still an error if the named capturing groups with the same name could be matched at the same time, as that would make other features, such as [named backreferences](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference), ambiguous.

## Examples

### Invalid cases

```js example-bad
/(?<name>\w+) (?<name>\w+)/;
```

### Valid cases

```js example-good
/(?<firstName>\w+) (?<lastName>\w+)/;
/(?<year>\d{4})-\d{2}|\d{2}-(?<year>\d{4})/;
```

## See also

- [Regular expressions](/en-US/docs/Web/JavaScript/Reference/Regular_expressions)
- [Named capturing group: `(?<name>...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
