---
title: substring-before
slug: Web/XPath/Functions/substring-before
tags:
  - XSLT
  - XSLT_Reference
---
{{ XsltRef() }}

The `substring-before` function returns a string that is the part of a given string before a given substring.

### Syntax

```
substring-before( haystack, needle )
```

### Arguments

- `haystack`
  - : The string to be evaluated. Part of this string will be returned.
- `needle`
  - : The substring to search for. Everything before the first occurrence of `needle` in `haystack` will be returned.

### Returns

A string.

### Examples

| XPath Example                   | Output           |
| ------------------------------- | ---------------- |
| `substring-before('aa-bb','-')` | `aa`             |
| `substring-before('aa-bb','a')` | `(empty string)` |
| `substring-before('aa-bb','b')` | `aa-`            |
| `substring-before('aa-bb','q')` | (empty string)   |

### Defined

[XPath 1.0 4.2](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-substring-before)

### Gecko support

Supported.
