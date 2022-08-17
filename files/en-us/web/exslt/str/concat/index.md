---
title: str:concat()
slug: Web/EXSLT/str/concat
tags:
  - EXSLT
  - NeedsSpecTable
  - Reference
---
{{XSLTRef}}{{QuickLinksWithSubpages("/en-US/docs/Web/EXSLT")}}

`str:concat()` returns a string containing all the string values in a node-set concatenated together.

## Syntax

```plain
str:concat(nodeSet)
```

### Parameters

- `nodeSet`
  - : The node-set whose nodes' string values should be concatenated into one string.

### Returns

A string whose value is all the string values of the nodes in `nodeSet` concatenated together. If `nodeSet` is empty, an empty string is returned.

## Specifications

[EXSLT - STR:CONCAT](http://exslt.org/str/functions/concat/index.html)
