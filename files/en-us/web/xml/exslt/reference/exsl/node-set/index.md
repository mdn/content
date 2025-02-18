---
title: exsl:node-set()
slug: Web/XML/EXSLT/Reference/exsl/node-set
page-type: exslt-function
sidebar: xmlsidebar
---

`exsl:node-set()` returns a node-set from a result tree fragment, which is what you get when you look at the `xsl:variable` instead of its select attribute to fetch a variable's value. This lets you process the XML created within a variable to process it in multiple steps.

You can also use `exsl:node-set()` to turn strings into text nodes.

## Syntax

```plain
exsl:node-set(object)
```

### Parameters

- `object`
  - : The object for which to return the corresponding node-set.

### Return value

The node-set corresponding to the specified `object`.

## Specifications

[EXSLT - EXSL:NODE-SET](https://exslt.github.io/exsl/functions/node-set/index.html)
