---
title: name
slug: Web/XPath/Functions/name
tags:
  - XSLT
  - XSLT_Reference
---
{{ XsltRef() }}

The `name` function returns a string representing the QName of the first node in a given node-set.

### Syntax

    name( [node-set] )

### Arguments

- `node-set` (optional)
  - : The QName of the first node in this node-set will be returned. If this argument is omitted, the current context node will be used.

### Returns

A string representing the QName of a node.

### Notes

- The [QName](https://www.w3.org/TR/REC-xml-names/#NT-QName) is the node's qualified name, including its namespace prefix and its local name.

### Defined

[XPath 1.0 4.1](https://www.w3.org/TR/xpath#function-local-name)

### Gecko support

Supported.
