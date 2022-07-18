---
title: id
slug: Web/XPath/Functions/id
tags:
  - XSLT
  - XSLT_Reference
---
{{ XsltRef() }}

The `id` function finds nodes matching the given ids and returns a node-set containing the identified nodes.

### Syntax

```
id( expression )
```

### Arguments

- `expression`
  - : If `expression` is a node-set, then the string value of each node in the node-set is treated as an individual id. The returned node set is the nodes corresponding to those ids.
    If `expression` is a string, or anything other than a node-set, then `expression` is treated as a space-separated list of ids. The returned node set is the nodes corresponding to those ids.

### Returns

A node-set containing the node or nodes identified by the given id or ids.

### Notes

- The DTD of the XML document determines what attribute is an ID. See [XPath 1.0 5.2.1](https://www.w3.org/TR/xpath/#unique-id)

### Defined

[XPath 1.0 4.1](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-id)

### Gecko support

Partially supported.
