---
title: <xsl:attribute-set>
slug: Web/XSLT/Element/attribute-set
page-type: xslt-element
---

{{XsltSidebar}}

The `<xsl:attribute-set>` element creates a named set of attributes, which can then be applied as whole to the output document, in a manner similar to named styles in CSS.

## Syntax

```xml
<xsl:attribute-set name=NAME use-attribute-sets=LIST-OF-NAMES>
  <xsl:attribute>
</xsl:attribute-set>
```

### Required Attributes

- `name`
  - : Specifies the name of the attribute set. The name must be a valid QName.

### Optional Attributes

- `use-attribute-sets`
  - : Builds an attribute set from other attribute sets. The names of the contributing sets must be separated with whitespace characters and must not directly or indirectly embed themselves.

### Type

Top-level, must be the child of `<xsl:stylesheet>` or `<xsl:transform>`.

## Specifications

XSLT, section 7.1.4.

## Gecko support

Supported.
