---
title: namespace-uri
slug: Web/XPath/Functions/namespace-uri
page-type: xpath-function
---

{{XsltSidebar}}

The `namespace-uri` function returns a string representing the namespace URI of the first node in a given node-set.

### Syntax

```plain
namespace-uri( [node-set] )
```

### Arguments

- `node-set` (optional)
  - : The namespace URI of the first node in this node-set will be returned. If this argument is omitted, the current context node will be used.

### Returns

A string representing URI of the namespace in which the given node resides.

### Notes

- If the given node does not have a specified namespace, the returned string will be an empty string.
- For nodes other than element and attribute nodes, the returned string will always be an empty string.

### Defined

[XPath 1.0 4.1](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-local-name)

### Gecko support

Supported.
