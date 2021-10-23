---
title: <xsl:include>
slug: Web/XSLT/Element/include
tags:
  - Element
  - Reference
  - XSLT
  - include
---
{{ XsltRef() }}

The `<xsl:include>` element merges the contents of one stylesheet with another. Unlike the case of `<xsl:import>`, the contents of an included stylesheet have exactly the same precedence as the contents of the including stylesheet.

### Syntax

    <xsl:include href=URI />

### Required Attributes

- `href`
  - : Specifies the URI of the stylesheet to include.

### Optional Attributes

None.

### Type

Top-level, may appear in any order as a child of `<xsl:stylesheet>` or `<xsl:transform>`.

### Defined

XSLT, section 2.6.1.

### Gecko support

Supported.
