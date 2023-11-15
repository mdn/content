---
title: <xsl:preserve-space>
slug: Web/XSLT/Element/preserve-space
page-type: xslt-element
---

{{XsltSidebar}}

The `<xsl:preserve-space>` element defines the elements in the source document for which whitespace should be preserved. If there is more than one element, separate the names with a whitespace character. Preserving whitespace is the default setting, so this element only needs to be used to counteract an `<xsl:strip-space>` element.

### Syntax

```xml
<xsl:preserve-space elements=LIST-OF-ELEMENT-NAMES />
```

### Required Attributes

- `elements`
  - : Specifies the elements for which whitespace should be preserved.

### Optional Attributes

None.

### Type

Top-level, must be a child of `<xsl:stylesheet>` or `<xsl:transform>`.

### Defined

XSLT, section 3.4

### Gecko support

Supported.
