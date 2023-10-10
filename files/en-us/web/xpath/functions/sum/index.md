---
title: sum
slug: Web/XPath/Functions/sum
page-type: xpath-function
---

{{XsltSidebar}}

The `sum` function returns a number that is the sum of the numeric values of each node in a given node-set.

### Syntax

```plain
sum(node-set)
```

### Arguments

- `node-set`
  - : The node-set to be evaluated. Each node in this node-set is evaluated as if it were passed to the [number()](/en-US/docs/Web/XPath/Functions/number) function, and a sum of the resulting numbers is returned.

### Returns

A number.

### Notes

None.

### Defined

[XPath 1.0 4.3](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-sum)

### Gecko support

Supported.
