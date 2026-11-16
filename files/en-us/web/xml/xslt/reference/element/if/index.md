---
title: <xsl:if>
slug: Web/XML/XSLT/Reference/Element/if
page-type: xslt-element
sidebar: xmlsidebar
---

The `<xsl:if>` element contains a test attribute and a template. If the test evaluates to true, the template is processed. In this it is similar to an if statement in other languages. To achieve the functionality of an if-then-else statement, however, use the `<xsl:choose>` element with one `<xsl:when>` and one `<xsl:otherwise>` children.

## Syntax

```xml
<xsl:if test=EXPRESSION>
  TEMPLATE
</xsl:if>
```

### Required Attributes

- `test`
  - : Contains an XPath expression that can be evaluated (using the rules defined for `boolean( )` if necessary) to a Boolean value. If the value is true, the template is processed; if it is not, no action is taken.

### Optional Attributes

None.

### Type

Instruction, appears within a template.

## Specifications

XSL section 9.1.

## Gecko support

Supported
