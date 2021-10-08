---
title: sum
slug: Web/XPath/Functions/sum
tags:
  - XSLT
  - XSLT_Reference
---
{{ XsltRef() }}

The `sum` function returns a number that is the sum of the numeric values of each node in a given node-set.

### Syntax

    sum(node-set )

### Arguments

- _`node-set`_
  - : The node-set to be evaluated. Each node in this node-set is evaluated as if it were passed to the [number()](/en-US/docs/Web/XPath/Functions/number) function, and a sum of the resulting numbers is returned.

### Returns

A number.

### Notes

_(None)_

### Defined

[XPath 1.0 4.3](https://www.w3.org/TR/xpath#function-sum)

### Gecko support

Supported.
