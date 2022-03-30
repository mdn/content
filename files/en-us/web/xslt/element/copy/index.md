---
title: <xsl:copy>
slug: Web/XSLT/Element/copy
tags:
  - Element
  - Reference
  - XSLT
  - copy
---
{{ XsltRef() }}

The `<xsl:copy>` element transfers a shallow copy (the node and any associated namespace node) of the current node to the output document. It does not copy any children or attributes of the current node.

### Syntax

```xml
<xsl:copy use-attribute-sets=LIST-OF-NAMES>
  TEMPLATE
</xsl:copy>
```

### Required Attributes

None.

### Optional Attributes

- `use-attribute-sets`
  - : Lists attribute sets that should be applied to the output node, if it is an element. Names of the sets should be separated with whitespace characters.

### Type

Instruction, appears within a template.

### Defined

XSLT, section 7.5.

### Gecko support

Supported.
