---
title: Wildcard .
slug: Web/JavaScript/Reference/Regular_expressions/Wildcard
---

{{JsSidebar}}

A **wildcard** matches all characters except line terminators. It also matches line terminators if the `s` flag is set.

## Syntax

```js-nolint
/./
```

## Description

`.` matches any character except [line terminators](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators). If the [`s`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll) flag is set, it also matches line terminators.

The exact character set matched by `.` depends on whether the [`u`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) flag is set. If the `u` flag is set, `.` matches any Unicode codepoint; otherwise, it matches any UTF-16 code unit. For example:

```js
/../.test("😄"); // true; matches two UTF-16 code units as a surrogate pair
/../u.test("😄"); // false; input only has one Unicode character
```
