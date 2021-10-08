---
title: string
slug: Web/XPath/Functions/string
tags:
  - XSLT
  - XSLT_Reference
---
{{ XsltRef() }}

The `string` function converts the given argument to a string.

### Syntax

    string( [object] )

### Arguments

- _`object`_(optional)
  - : The object to convert to a string. If omitted, the context node is used.

### Returns

A string

### Notes

- If the object is a node-set, the string value of the first node in the set is returned.
- A number is converted as follows:

  - NaN is converted to the string NaN.
  - Positive zero is converted to the string 0.
  - Negative zero is converted to the string 0.
  - Positive infinity is converted to the string Infinity.
  - Negative infinity is converted to the string -Infinity.
  - Decimal numbers between -1 and 1 are converted to a string with a single leading 0 before the decimal point.
  - Boolean true is converted to the string true.
  - Boolean false is converted to the string false.

### Defined

[XPath 1.0 4.2](https://www.w3.org/TR/xpath#function-string)

### Gecko support

Supported.
