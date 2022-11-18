---
title: "Lookbehind assertion: (?<=...), (?<!...)"
slug: Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion
---

{{JsSidebar}}

A **lookbehind assertion** TODO

## Syntax

```regex
(?<=disjunction)
(?<!disjunction)
```

## Description

A regular expression generally matches from left to right. This is why lookahead and lookbehind assertions are called as such (lookahead asserts what's on the right, and lookbehind asserts what's on the left). However, within a lookbehind assertion, the regular expression matches backwards. For example,

```js
/(?<=([ab]*)([bc]+))/.exec("ab");
```

## See also

- [Regex reference](/en-US/docs/Web/JavaScript/Reference/Regular_Expressions)
- [Input boundary assertion: `^`, `$`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [Word boundary assertion: `\b`, `\B`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
- [Lookahead assertion: `(?=...)`, `(?!...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [Capturing group: `(...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
