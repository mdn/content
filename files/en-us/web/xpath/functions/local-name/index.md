---
title: local-name
slug: Web/XPath/Functions/local-name
tags:
  - XSLT
  - XSLT_Reference
---
{{ XsltRef() }}

The `local-name` function returns a string representing the local name of the first node in a given node-set.

### Syntax

```
local-name( [node-set] )
```

### Arguments

- `node-set` (optional)
  - : The local name of the first node in this node-set will be returned. If this argument is omitted, the current context node will be used.

### Returns

A string.

### Notes

- The local name is the local part of an [expanded-name](https://www.w3.org/TR/xpath/#dt-expanded-name).

### Defined

[XPath 1.0 4.1](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-local-name)

### Gecko support

Supported.
