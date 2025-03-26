---
title: <xsl:attribute>
slug: Web/XML/XSLT/Reference/Element/attribute
page-type: xslt-element
sidebar: xmlsidebar
---

The `<xsl:attribute>` element creates an attribute in the output document, using any values that can be accessed from the stylesheet. The element must be defined before any other output document element inside the output document element for which it establishes attribute values. But it may be after or inside elements that won't be part of the output (like `<xsl:choose>` or `<xsl:apply-templates>` etc.).

## Syntax

```xml
<xsl:attribute name=NAME namespace=URI>
  TEMPLATE
</xsl:attribute>
```

### Required Attributes

- `name`
  - : Specifies the name of the attribute to be created in the output document. The name must be a valid QName.

### Optional Attributes

- `namespace`
  - : Defines the namespace URI for this attribute in the output document. You cannot set the related namespace prefix with this element.

### Type

Instruction, appears within a template or an `<xsl:attribute-set>` element.

## Specifications

XSLT, section 7.1.3.

## Gecko support

Supported.
