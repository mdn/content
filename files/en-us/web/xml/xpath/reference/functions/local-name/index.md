---
title: local-name
slug: Web/XML/XPath/Reference/Functions/local-name
page-type: xpath-function
sidebar: xmlsidebar
---

The `local-name` function returns a string representing the local name of the first node in a given node-set.

## Syntax

```plain
local-name( [node-set] )
```

### Parameters

- `node-set` (optional)
  - : The local name of the first node in this node-set will be returned. If this argument is omitted, the current context node will be used.

### Return value

A string.

## Description

- The local name is the local part of an [expanded-name](https://www.w3.org/TR/xpath/#dt-expanded-name).

## Specifications

[XPath 1.0 4.1](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-local-name)

## Gecko support

Supported.
