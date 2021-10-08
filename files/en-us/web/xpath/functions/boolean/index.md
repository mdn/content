---
title: boolean
slug: Web/XPath/Functions/boolean
tags:
  - XSLT
  - XSLT_Reference
---
{{XsltRef()}}

The `boolean` function evaluates an expression and returns true or false.

## Syntax

```js
boolean( expression )
```

## Arguments

- `expression`
  - : The expression to be evaluated. The expression can refer to numbers and node-sets as well as booleans.

## Returns

Boolean `true` or `false` after evaluating `expression`.

## Notes

- A number evaluates to false if it is positive or negative zero or `NaN`. Otherwise, it evaluates true.
- A node-set evaluates to true if it is non-empty.
- A string evaluates to false if it an empty string. Otherwise, it evaluates to true.
- An object of a type other than the four basic types is converted to a boolean in a way that is dependent on that type.

## Defined

[XPath 1.0 4.3](https://www.w3.org/TR/xpath#function-boolean)

## Gecko support

Supported.
