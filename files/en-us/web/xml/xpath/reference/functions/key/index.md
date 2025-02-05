---
title: key
slug: Web/XML/XPath/Reference/Functions/key
page-type: xpath-function
sidebar: xmlsidebar
---

The `key` function returns a node-set of nodes that have the given value for the given key.

## Syntax

```plain
key( keyname, value )
```

### Parameters

- `keyname`
  - : A string containing the name of the [`xsl:key`](/en-US/docs/Web/XML/XSLT/Reference/Element/key) element to be used.
- `value`
  - : The returned node-set will contain every node that has this value for the given key.

### Return value

A node set.

## Description

- The [`xsl:key`](/en-US/docs/Web/XML/XSLT/Reference/Element/key) element defines what attribute on what given elements will be used to match the key.

This function is an XSLT-specific addition to XPath. It is not a part of the core XPath function library.

## Specifications

[XSLT 1.0 12.2](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-key)

## Gecko support

Supported.
