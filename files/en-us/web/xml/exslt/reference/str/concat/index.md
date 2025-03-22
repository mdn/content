---
title: str:concat()
slug: Web/XML/EXSLT/Reference/str/concat
page-type: exslt-function
sidebar: xmlsidebar
---

`str:concat()` returns a string containing all the string values in a node-set concatenated together.

## Syntax

```plain
str:concat(nodeSet)
```

### Parameters

- `nodeSet`
  - : The node-set whose nodes' string values should be concatenated into one string.

### Return value

A string whose value is all the string values of the nodes in `nodeSet` concatenated together. If `nodeSet` is empty, an empty string is returned.

## Specifications

[EXSLT - STR:CONCAT](https://exslt.github.io/str/functions/concat/index.html)
