---
title: 'false'
slug: Web/XPath/Functions/false
tags:
  - XSLT
  - XSLT_Reference
---
{{ XsltRef() }}

The `false` function returns boolean false.

### Syntax

    false()

### Returns

Boolean `false`.

### Notes

This function is useful part of a comparison:

    <xsl:if test="boolean((1 &gt; 2) = false())">
     The expression evaluates as true
    </xsl:if>

### Defined

[XPath 1.0 4.3](https://www.w3.org/TR/xpath#function-false)

### Gecko support

Supported.
