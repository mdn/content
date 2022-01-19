---
title: <xsl:apply-templates>
slug: Web/XSLT/Element/apply-templates
tags:
  - Element
  - Reference
  - XSLT
  - apply-templates
---
{{ XsltRef() }}

The `<xsl:apply-templates>` element selects a set of nodes in the input tree and instructs the processor to apply the proper templates to them.

### Syntax

```xml
<xsl:apply-templates select=EXPRESSION mode=NAME>
  <xsl:with-param> [optional]
  <xsl:sort> [optional]
</xsl:apply-templates>
```

### Required Attributes

None.

### Optional Attributes

- `select`
  - : Uses an XPath expression that specifies the nodes to be processed. An asterisk(`*`) selects the entire node-set. If this attribute is not set, all child nodes of the current node are selected.
- `mode`
  - : If there are multiple ways of processing defined for the same node, distinguishes among them.

### Type

Instruction, appears within a template.

### Defined

XSLT section 5.4.

### Gecko support

Supported.
