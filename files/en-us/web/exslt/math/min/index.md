---
title: math:min()
slug: Web/EXSLT/math/min
tags:
  - EXSLT
  - NeedsCompatTable
  - NeedsSpecTable
  - Reference
---
{{XSLTRef}}{{QuickLinksWithSubpages("/en-US/docs/Web/EXSLT")}}

`math:min()` returns the minimum value of a node-set.

To compute the minimum value of the node-set, the node set is sorted into ascending order as it would be using [`xsl:sort()`](/en-US/XSLT/sort) with a data type of `number`. The minimum value is then the first node in the sorted list, converted into a number.

## Syntax

```
math:min(nodeSet)
```

### Parameters

- `nodeSet`
  - : The node-set whose lowest value is to be returned.

### Returns

A result tree fragment representing the lowest valued node's numeric value as a string.

## Specifications

[EXSLT - MATH:MIN](http://exslt.org/math/functions/min/index.html)
