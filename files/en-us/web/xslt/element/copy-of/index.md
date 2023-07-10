---
title: <xsl:copy-of>
slug: Web/XSLT/Element/copy-of
page-type: xslt-element
---

{{XsltSidebar}}

The `<xsl:copy-of>` element makes a deep copy (including descendant nodes) of whatever the select attribute specifies to the output document.

### Syntax

```xml
<xsl:copy-of select=EXPRESSION />
```

### Required Attributes

- `select`
  - : Uses an XPath expression that specifies what is to be copied.

### Optional Attributes

None.

### Type

Instruction, appears within a template.

### Defined

XSLT, section 11.3.

### Gecko support

Supported.
