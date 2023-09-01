---
title: <xsl:choose>
slug: Web/XSLT/Element/choose
page-type: xslt-element
---

{{XsltSidebar}}

The `<xsl:choose>` element defines a choice among a number of alternatives. It behaves like a switch statement in procedural languages.

### Syntax

```xml
<xsl:choose>
  <xsl:when test="[whatever to test1]"></xsl:when>
  <xsl:when test="[whatever to test2]"></xsl:when>
  <xsl:otherwise></xsl:otherwise> [optional]
</xsl:choose>
```

### Required Attributes

None.

### Optional Attributes

None.

### Type

Instruction, appears with a template. It contains one or more `<xsl:when>` elements, and, optionally, a final `<xsl:otherwise>` element.

### Defined

XSLT, section 9.2.

### Gecko support

Supported.
