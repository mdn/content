---
title: normalize-space
slug: Web/XPath/Functions/normalize-space
tags:
  - XSLT
  - XSLT_Reference
---
{{ XsltRef() }}

The `normalize-space` function strips leading and trailing white-space from a string, replaces sequences of whitespace characters by a single space, and returns the resulting string.

### Syntax

    normalize-space( [string] )

### Arguments

- `string` (optional)
  - : The string to be normalized. If omitted, string used will be the same as the context node converted to a string.

### Returns

The normalized string.

### Defined

[XPath 1.0 4.2](https://www.w3.org/TR/xpath#function-normalize-space)

### Gecko support

Supported.
