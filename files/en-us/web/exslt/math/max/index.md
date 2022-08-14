---
title: math:max()
slug: Web/EXSLT/math/max
tags:
  - EXSLT
  - NeedsSpecTable
  - Reference
---
{{XSLTRef}}{{QuickLinksWithSubpages("/en-US/docs/Web/EXSLT")}}

`math:max()` returns the maximum value of a node-set.

To compute the maximum value of the node-set, the node set is sorted into descending order as it would be using [`xsl:sort()`](/en-US/XSLT/sort) with a data type of `number`. The maximum value is then the first node in the sorted list, converted into a number.

## Syntax

```plain
math:max(nodeSet)
```

### Parameters

- `nodeSet`
  - : The node-set whose highest value is to be returned.

### Returns

A result tree fragment representing the highest valued node's numeric value as a string.

## Specifications

[EXSLT - MATH:MAX](http://exslt.org/math/functions/max/index.html)
