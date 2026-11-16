---
title: set:leading()
slug: Web/XML/EXSLT/Reference/set/leading
page-type: exslt-function
sidebar: xmlsidebar
---

`set:leading()` returns the nodes in one node-set that come before the first node in the other node-set.

## Syntax

```js-nolint
set:leading(nodeSet1, nodeSet2)
```

### Parameters

- `nodeSet1`
  - : The node set to find nodes in that precede the first node in the second node set.
- `nodeSet2`
  - : The node set to compare against.

### Return value

A node-set containing the nodes from `nodeSet1` whose values precede the first node in `nodeSet2`.

> [!NOTE]
> If the first node in `nodeSet2` isn't contained in `nodeSet1`, an empty set is returned. If `nodeSet2` is empty, then the result is `nodeSet1`.

## Specifications

[EXSLT - SET:LEADING](https://exslt.github.io/set/functions/leading/index.html)
