---
title: math:highest()
slug: Web/EXSLT/math/highest
tags:
  - EXSLT
  - NeedsSpecTable
  - Reference
---
{{XSLTRef}}{{QuickLinksWithSubpages("/en-US/docs/Web/EXSLT")}}

`math:highest()` returns the node in the specified node-set with the highest value (where the highest value calculated using [`math:max()`](/en-US/docs/Web/EXSLT/math/max)).

A node has this maximum value if converting its string value to a number equals the maximum value.

## Syntax

```plain
math:highest(nodeSet)
```

### Parameters

- `nodeSet`
  - : The node-set whose highest value is to be returned.

### Returns

A result tree fragment consisting of copies of the nodes returned by [`math:max()`](/en-US/docs/Web/EXSLT/math/max).

## Specifications

[EXSLT - MATH:HIGHEST](http://exslt.org/math/functions/highest/index.html)
