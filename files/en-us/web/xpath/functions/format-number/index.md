---
title: format-number
slug: Web/XPath/Functions/format-number
tags:
  - XSLT
  - XSLT_Reference
---
{{ XsltRef() }}

The `format-number` function evaluates a number and returns a string representing the number in a given format.

### Syntax

    format-number(number ,pattern [,decimal-format] )

### Arguments

- `number`
  - : The number to be formatted
- `pattern`
  - : A string in the format of the [JDK 1.1](http://java.sun.com/products/archive/jdk/1.1/) DecimalFormat class. (The documentation for JDK 1.1 is not available online. Here is the [Java SE 6 DecimalFormat](http://java.sun.com/javase/6/docs/api/java/text/DecimalFormat.html).)
- `decimal-format` (optional)
  - : The name of an [`xsl:decimal-format`](/en-US/docs/Web/XSLT/Element/decimal-format) element that defines the number format to be used. If omitted, the default decimal-format will be used.

### Returns

A string representing the number in the new format.

### Notes

This function is an XSLT-specific addition to XPath. It is not a part of the core XPath function library.

### Defined

[XSLT 1.0 12.3](https://www.w3.org/TR/xslt#function-format-number)

### Gecko support

Supported.
