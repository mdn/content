---
title: choose
slug: Web/XPath/Functions/choose
tags:
  - Function
  - XPath
  - XSLT
---
{{ XsltRef() }}

The `choose` function returns one of the specified objects based on a boolean parameter.

> **Note:** This method should be used instead of `if ()`, which has been deprecated.

### Syntax

```
choose( boolean , object1, object2 )
```

### Arguments

- `boolean`
  - : The boolean operation to use when determining which object to return.
- `object1`
  - : The first object to consider returning.
- `object2`
  - : The second object to consider returning.

### Returns

If the boolean parameter is true, the first object is returned; otherwise, the second object is returned.

> **Note:** All parameters are evaluated, even the one that's not returned.

### Defined

[XForms 1.1](https://www.w3.org/TR/xforms11/#fn-choose)

### Gecko support

Supported.
