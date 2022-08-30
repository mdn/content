---
title: substring-after
slug: Web/XPath/Functions/substring-after
tags:
  - XSLT
  - XSLT_Reference
---
{{ XsltRef() }}

The `substring-after` function returns a string that is the rest of a given string after a given substring.

### Syntax

```
substring-after( haystack, needle )
```

### Arguments

- `haystack`
  - : The string to be evaluated. Part of this string will be returned.
- `needle`
  - : The substring to search for. Everything after the first occurrence of `needle` in `haystack` will be returned.

### Returns

A string.

### Examples

| XPath Example                  | Output         |
| ------------------------------ | -------------- |
| `substring-after('aa-bb','-')` | `bb`           |
| `substring-after('aa-bb','a')` | `a-bb`         |
| `substring-after('aa-bb','b')` | `b`            |
| `substring-after('aa-bb','q')` | (empty string) |

### Defined

[XPath 1.0 4.2](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-substring-after)

### Gecko support

Supported.
