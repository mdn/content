---
title: <xsl:variable>
slug: Web/XSLT/Element/variable
tags:
  - Element
  - Reference
  - XSLT
  - variable
---
{{ XsltRef() }}

The `<xsl:variable>` element declares a global or local variable in a stylesheet and gives it a value. Because XSLT permits no side-effects, once the value of the variable has been established, it remains the same until the variable goes out of scope

### Syntax

```xml
<xsl:variable name=NAME select=EXPRESSION >
  TEMPLATE
</xsl:variable>
```

### Required Attributes

- `name`
  - : Gives the variable a name.

### Optional Attributes

- `select`
  - : Defines the value of the variable through an XPath expression. If the element contains a template, this attribute is ignored.

### Type

Top-level or instruction. If it occurs as a top-level element, the variable is global in scope, and can be accessed throughout the document. If it occurs within a template, the variable is local in scope, accessible only within the template in which it appears.

### Defined

XSLT, section 11.

### Gecko support

Supported.
