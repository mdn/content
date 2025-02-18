---
title: number
slug: Web/XML/XPath/Reference/Functions/number
page-type: xpath-function
sidebar: xmlsidebar
---

The `number` function converts an object to a number and returns the number.

## Syntax

```plain
number( [object] )
```

### Parameters

- `object` (optional)
  - : The object to be converted to a number. If this argument is omitted, the current context node will be used.

### Return value

The resulting number after converting the object.

## Description

- Strings are converted to a number by stripping the leading whitespace in the string before the number and ignoring whitespace after the number. If the string does not match this pattern, then the string is converted to NaN.
- Boolean true is converted to 1. False is converted to 0.
- A node-set is first converted to a string as if by a call to the [string()](/en-US/docs/Web/XML/XPath/Reference/Functions/string) function and then converted in the same way as a string argument.
- An object of a type other than the four basic types is converted to a number in a way that is dependent on that type.

## Specifications

[XPath 1.0 4.4](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-number)

## Gecko support

Supported.
