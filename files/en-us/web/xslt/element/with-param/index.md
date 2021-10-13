---
title: <xsl:with-param>
slug: Web/XSLT/Element/with-param
tags:
  - Element
  - Reference
  - XSLT
  - with-param
---
{{ XsltRef() }}

The `<xsl:with-param>` element sets the value of a parameter to be passed into a template.

### Syntax

    <xsl:with-param name=NAME select=EXPRESSION>
    	TEMPLATE
    </xsl:with-param>

### Required Attributes

- `name`
  - : Gives this parameter a name.

### Optional Attributes

- `select`
  - : Defines the value of the parameter through an XPath expression. If the element contains a template, this attribute is ignored.

### Type

Subinstruction, always appears within an `<xsl:apply-templates>` or an `<xsl:call-template>` element.

### Defined

XSLT 11.6

### Gecko support

Supported.
