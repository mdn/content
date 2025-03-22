---
title: choose
slug: Web/XML/XPath/Reference/Functions/choose
page-type: xpath-function
sidebar: xmlsidebar
---

The `choose` function returns one of the specified objects based on a boolean parameter.

> [!NOTE]
> This method should be used instead of `if ()`, which has been deprecated.

## Syntax

```plain
choose( boolean, object1, object2 )
```

### Parameters

- `boolean`
  - : The boolean operation to use when determining which object to return.
- `object1`
  - : The first object to consider returning.
- `object2`
  - : The second object to consider returning.

### Return value

If the boolean parameter is true, the first object is returned; otherwise, the second object is returned.

> [!NOTE]
> All parameters are evaluated, even the one that's not returned.

## Specifications

[XForms 1.1](https://www.w3.org/TR/xforms11/#fn-choose)

## Gecko support

Supported.
