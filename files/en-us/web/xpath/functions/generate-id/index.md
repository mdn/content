---
title: generate-id
slug: Web/XPath/Functions/generate-id
tags:
  - XSLT
  - XSLT_Reference
---
{{ XsltRef() }}

The `generate-id` function generates a unique id for the first node in a given node-set and returns a string containing that id.

### Syntax

    generate-id( [node-set] )

### Arguments

- `node-set` (optional)
  - : An id will be generated for the first node in this node-set. If omitted, the current context node will be used.

### Returns

A string containing the generated id.

### Notes

- The same id must be generated every time for the same node in the current document in the current transformation.

<!---->

- The generated id may not be the same in subsequent transformations.

This function is an XSLT-specific addition to XPath. It is not a part of the core XPath function library.

### Defined

[XSLT 1.0 12.4](https://www.w3.org/TR/xslt#function-generate-id)

### Gecko support

Supported.
