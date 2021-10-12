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

    substring(string ,start [,length] )

### Arguments

- _`string`_
  - : The string to evaluate.
- _`start`_
  - : The position within*`string`* the substring begins
- _`length`_(optional)
  - : The length of the substring. If omitted, the returned string will contain every character from the*`start`* position to the end of*`string`*.

### Returns

A string.

### Notes

As in other XPath functions, the position is not zero-based. The first character in the string has a position of 1, not 0.

### Defined

[XPath 1.0 4.2](https://www.w3.org/TR/xpath#function-substring)

### Gecko support

Supported.
