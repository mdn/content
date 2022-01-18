---
title: <xsl:namespace-alias>
slug: Web/XSLT/Element/namespace-alias
tags:
  - Element
  - Reference
  - XSLT
  - namespace-alias
---
{{ XsltRef() }}

The `<xsl:namespace-alias>` element is a rarely used device that maps a namespace in the stylesheet to a different namespace in the output tree. The most common use for this element is in generating a stylesheet from another stylesheet. To prevent a normally `xsl:`-prefixed literal result element (which should be copied as-is to the result tree) from being misunderstood by the processor, it is assigned a temporary namespace which is appropriately re-converted back to the XSLT namespace in the output tree.

### Syntax

```xml
<xsl:namespace-alias stylesheet-prefix=NAME result-prefix=NAME />
```

### Required Attributes

- `stylesheet-prefix`
  - : Specifies the temporary namespace.
- `result-prefix`
  - : Specifies the desired namespace for the output tree.

### Optional Attributes

None.

### Type

Top-level, must be the child of `<xsl:stylesheet>` or `<xsl:transform>`.

### Defined

XSLT, section 7.1.1

### Gecko support

Not supported at this time.
