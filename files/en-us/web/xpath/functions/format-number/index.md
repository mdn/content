---
title: format-number
slug: Web/XPath/Functions/format-number
page-type: xpath-function
---

{{XsltSidebar}}

The `format-number` function evaluates a number and returns a string representing the number in a given format.

## Syntax

```plain
format-number(number, pattern)
format-number(number, pattern, decimalFormat)
```

### Parameters

- `number`
  - : The number to be formatted
- `pattern`
  - : A string in the format of the Java [DecimalFormat](https://docs.oracle.com/javase/8/docs/api/java/text/DecimalFormat.html) class.
- `decimalFormat` (optional)
  - : The name of an [`xsl:decimal-format`](/en-US/docs/Web/XSLT/Element/decimal-format) element that defines the number format to be used. If omitted, the default decimal-format will be used.

### Return value

A string representing the number in the new format.

## Description

This function is an XSLT-specific addition to XPath. It is not a part of the core XPath function library.

## Specifications

[XSLT 1.0 12.3](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-format-number)

## Gecko support

Supported.
