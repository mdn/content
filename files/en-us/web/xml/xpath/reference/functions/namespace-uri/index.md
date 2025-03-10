---
title: namespace-uri
slug: Web/XML/XPath/Reference/Functions/namespace-uri
page-type: xpath-function
sidebar: xmlsidebar
---

The `namespace-uri` function returns a string representing the namespace URI of the first node in a given node-set.

## Syntax

```plain
namespace-uri( [node-set] )
```

### Parameters

- `node-set` (optional)
  - : The namespace URI of the first node in this node-set will be returned. If this argument is omitted, the current context node will be used.

### Return value

A string representing URI of the namespace in which the given node resides.

## Description

- If the given node does not have a specified namespace, the returned string will be an empty string.
- For nodes other than element and attribute nodes, the returned string will always be an empty string.

## Specifications

[XPath 1.0 4.1](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-local-name)

## Gecko support

Supported.
