---
title: Lookbehind assertion (?<=...), (?<!...)
slug: Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion
---

{{JsSidebar}}

A **lookbehind assertion** TODO

## Syntax

```js-nolint
/(?<=disjunction)/
/(?<!disjunction)/
```

## Description

A regular expression generally matches from left to right. This is why lookahead and lookbehind assertions are called as such (lookahead asserts what's on the right, and lookbehind asserts what's on the left). However, within a lookbehind assertion, the regular expression matches backwards. For example,

```js
/(?<=([ab]*)([bc]+))/.exec("ab");
```
