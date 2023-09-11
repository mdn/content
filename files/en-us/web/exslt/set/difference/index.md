---
title: set:difference()
slug: Web/EXSLT/set/difference
page-type: exslt-function
---

{{XSLTRef}}{{QuickLinksWithSubpages("/en-US/docs/Web/EXSLT")}}

`set:difference()` returns the difference between two node-sets. In other words, it returns a node-set whose nodes are in one node-set but not in the other.

The template version of `set:difference` applies templates to these nodes in `set:difference` mode, copying the nodes so that a result tree fragment consisting of the nodes is returned.

## Syntax

```plain
set:difference(nodeSet1, nodeSet2)
```

### Parameters

- `nodeSet1`
  - : The node-set from which to subtract nodes.
- `nodeSet2`
  - : The set of nodes to subtract from `nodeSet1`.

### Returns

A node-set containing the nodes that are in `nodeSet1` but not in `nodeSet2`.

## Specifications

[EXSLT - SET:DIFFERENCE](https://exslt.github.io/set/functions/difference/index.html)
