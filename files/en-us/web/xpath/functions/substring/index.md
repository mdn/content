---
title: substring
slug: Web/XPath/Functions/substring
tags:
  - XSLT
  - XSLT_Reference
---
{{ XsltRef() }}

The `substring` function returns a part of a given string.

### Syntax

```
substring(string, start)
substring(string, start, length)
```

### Arguments

- `string`
  - : The string to evaluate.
- `start`
  - : The position within*`string`* the substring begins
- `length` {{optional_inline}}
  - : The length of the substring.
    If omitted, the returned string will contain every character from the `start` position to the end of `string`.

### Returns

A string.

### Notes

As in other XPath functions, the position is not zero-based. The first character in the string has a position of 1, not 0.

### Defined

[XPath 1.0 4.2](https://www.w3.org/TR/xpath#function-substring)

### Gecko support

Supported.
