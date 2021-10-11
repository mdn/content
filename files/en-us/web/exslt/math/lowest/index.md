---
title: math:lowest()
slug: Web/EXSLT/math/lowest
tags:
  - EXSLT
  - NeedsSpecTable
  - Reference
---
{{XSLTRef}}{{QuickLinksWithSubpages("/en-US/docs/Web/EXSLT")}}

`math:lowest()` returns the node in the specified node-set with the lowest value (where the lowest value calculated using [`math:min()`](/en-US/docs/Web/EXSLT/math/min)).

A node has this minimum value if converting its string value to a number equals the minimum value.

## Syntax

```js
math:lowest(nodeSet)
```

### Parameters

- `nodeSet`
  - : The node-set whose lowest value is to be returned.

### Returns

A result tree fragment consisting of copies of the nodes returned by [`math:min()`](/en-US/docs/Web/EXSLT/math/min).

## Specifications

[EXSLT - MATH:LOWEST](http://www.exslt.org/math/functions/lowest/index.html)
