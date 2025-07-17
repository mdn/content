---
title: <xsl:for-each>
slug: Web/XML/XSLT/Reference/Element/for-each
page-type: xslt-element
sidebar: xmlsidebar
---

The `<xsl:for-each>` element selects a set of nodes and processes each of them in the same way. It is often used to iterate through a set of nodes or to change the current node. If one or more `<xsl:sort>` elements appear as the children of this element, sorting occurs before processing. Otherwise, nodes are processed in document order.

## Syntax

```xml
<xsl:for-each select=EXPRESSION>
  <xsl:sort> [optional]
  TEMPLATE
</xsl:for-each>
```

### Required Attributes

- `select`
  - : Uses an XPath expression to select nodes to be processed.

### Optional Attributes

None.

### Type

Instruction, appears within a template.

## Specifications

XSLT, section 8.

## Gecko support

Supported.
