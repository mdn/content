---
title: <xsl:param>
slug: Web/XSLT/Element/param
tags:
  - Element
  - Reference
  - XSLT
  - param
---
{{ XsltRef() }}

The `<xsl:param>` element establishes a parameter by name and, optionally, a default value for that parameter. When used as a top-level element, the parameter is global . When used inside an `<xsl:template>` element, the parameter is local to that template. In this case it must be the first child element of the template.

### Syntax

    <xsl:param name=NAME select=EXPRESSION>
    	TEMPLATE
    </xsl:param>

### Required Attributes

- `name`
  - : Names the parameter. This must be a QName.

### Optional Attributes

- `select`
  - : Uses an XPath expression to provide a default value if none is specified.

### Type

Instruction, can appear as a top-level element or within a template.

### Defined

XSLT, section 11.

### Gecko support

Supported.
