---
title: <xsl:import>
slug: Web/XSLT/Element/import
page-type: xslt-element
---

{{XsltSidebar}}

The `<xsl:import>` element is a top-level element that serves to import the contents of one stylesheet into another stylesheet. Generally speaking, the contents of the imported stylesheet have a lower import precedence than that of the importing stylesheet. This is in contrast to `<xsl:include>` where the contents of the included stylesheet have exactly the same precedence as the contents of the including stylesheet.

## Syntax

```xml
<xsl:import href=URI />
```

### Required Attributes

- `href`
  - : Specifies the URI of the stylesheet to import.

### Optional Attributes

None.

### Type

Top-level, must appear before any other child of `<xsl:stylesheet>` or `<xsl:transform>` in the importing stylesheet.

## Specifications

XSLT, section 2.6.2.

## Gecko support

Mostly supported with a few issues with top level variables and parameters as of Mozilla 1.0.
