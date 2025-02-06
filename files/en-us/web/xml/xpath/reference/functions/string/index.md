---
title: string
slug: Web/XML/XPath/Reference/Functions/string
page-type: xpath-function
sidebar: xmlsidebar
---

The `string` function converts the given argument to a string.

## Syntax

```plain
string( [object] )
```

### Parameters

- `object` (optional)
  - : The object to convert to a string. If omitted, the context node is used.

### Return value

A string

## Description

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

## Specifications

[XPath 1.0 4.2](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-string)

## Gecko support

Supported.
