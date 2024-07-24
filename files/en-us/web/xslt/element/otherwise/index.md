---
title: <xsl:otherwise>
slug: Web/XSLT/Element/otherwise
page-type: xslt-element
---

{{XsltSidebar}}

The `<xsl:otherwise>` element is used to define the action that should be taken when none of the `<xsl:when>` conditions apply. It is similar to the `else` or `default` case in other programming languages.

## Syntax

```xml
<xsl:otherwise>
  TEMPLATE
</xsl:otherwise>
```

### Required Attributes

None.

### Optional Attributes

None.

### Type

Subinstruction, must appear as the last child of an `<xsl:choose>` element, within a template.

## Specifications

XSLT, section 9.2

## Gecko support

Supported.
