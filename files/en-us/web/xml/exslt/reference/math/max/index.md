---
title: math:max()
slug: Web/XML/EXSLT/Reference/math/max
page-type: exslt-function
sidebar: xmlsidebar
---

`math:max()` returns the maximum value of a node-set.

To compute the maximum value of the node-set, the node set is sorted into descending order as it would be using [`xsl:sort()`](/en-US/docs/Web/XML/XSLT/Reference/Element/sort) with a data type of `number`. The maximum value is then the first node in the sorted list, converted into a number.

## Syntax

```plain
math:max(nodeSet)
```

### Parameters

- `nodeSet`
  - : The node-set whose highest value is to be returned.

### Return value

A result tree fragment representing the highest valued node's numeric value as a string.

## Specifications

[EXSLT - MATH:MAX](https://exslt.github.io/math/functions/max/index.html)
