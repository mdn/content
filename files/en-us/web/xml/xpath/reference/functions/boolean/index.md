---
title: boolean
slug: Web/XML/XPath/Reference/Functions/boolean
page-type: xpath-function
sidebar: xmlsidebar
---

The `boolean` function evaluates an expression and returns true or false.

## Syntax

```js-nolint
boolean( expression )
```

### Parameters

- `expression`
  - : The expression to be evaluated. The expression can refer to numbers and node-sets as well as booleans.

### Return value

Boolean `true` or `false` after evaluating `expression`.

## Description

- A number evaluates to false if it is positive or negative zero or `NaN`. Otherwise, it evaluates true.
- A node-set evaluates to true if it is non-empty.
- A string evaluates to false if it an empty string. Otherwise, it evaluates to true.
- An object of a type other than the four basic types is converted to a boolean in a way that is dependent on that type.

## Specifications

[XPath 1.0 4.3](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-boolean)

## Gecko support

Supported.
