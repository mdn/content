---
title: <xsl:key>
slug: Web/XSLT/Element/key
tags:
  - Element
  - Key
  - Reference
  - XSLT
---
{{ XsltRef() }}

The `<xsl:key>` element declares a named key which can be used elsewhere in the stylesheet with the `key( )` function.

### Syntax

```xml
<xsl:key name=NAME match=EXPRESSION
  use=EXPRESSION />
```

### Required Attributes

- `name`
  - : Specifies a name for this key. Must be a QName.
- `match`
  - : Defines the nodes for which this key is applicable.
- `use`
  - : Specifies an XPath expression that will be used to determine the value of the key for each of the applicable nodes.

### Optional Attributes

None.

### Type

Top-level, must be the child of `<xsl:stylesheet>` or `<xsl:transform>`.

### Defined

XSLT, section 12.2.

### Gecko support

Supported.
