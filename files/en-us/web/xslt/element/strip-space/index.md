---
title: <xsl:strip-space>
slug: Web/XSLT/Element/strip-space
tags:
  - Element
  - Reference
  - XSLT
  - strip-space
---
{{ XsltRef() }}

The `<xsl:strip-space>` element defines the elements in the source document for which whitespace should be removed.

### Syntax

    <xsl:strip-space elements=LIST-OF-ELEMENT-NAMES  />

### Required Attributes

- `elements`
  - : Specifies a space-separated list of elements in the source whose whitespace-only text nodes should be removed.

### Optional Attributes

None.

### Type

Top-level, must be a child of `<xsl:stylesheet>` or `<xsl:transform>`.

### Defined

XSLT, section 3.4

### Gecko support

Supported.
