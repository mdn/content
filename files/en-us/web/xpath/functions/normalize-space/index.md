---
title: normalize-space
slug: Web/XPath/Functions/normalize-space
page-type: xpath-function
---

{{XsltSidebar}}

The `normalize-space` function strips leading and trailing white-space from a string, replaces sequences of whitespace characters by a single space, and returns the resulting string.

## Syntax

```plain
normalize-space( [string] )
```

### Parameters

- `string` (optional)
  - : The string to be normalized. If omitted, string used will be the same as the context node converted to a string.

### Return value

The normalized string.

## Specifications

[XPath 1.0 4.2](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-normalize-space)

## Gecko support

Supported.
