---
title: <xsl:template>
slug: Web/XSLT/Element/template
page-type: xslt-element
---

{{XsltSidebar}}

The `<xsl:template>` element defines an output producing template. This element must have either the match attribute or the name attribute set.

### Syntax

```xml
<xsl:template
  match=PATTERN
  name=NAME
  mode=NAME
  priority=NUMBER>
  <xsl:param> [optional]
  TEMPLATE
</xsl:template>
```

### Required Attributes

None.

### Optional Attributes

- `match`
  - : Specifies a pattern that determines the elements for which this template should be used. It is a required attribute if there is no `name` attribute.
- `name`
  - : Specifies a name for this template, by which it can be invoked through the `<xsl:call-template>` element.
- `mode`
  - : Specifies a particular mode for this template, which can be matched by an attribute of the `<xsl:apply-templates>` element. This is useful for processing the same information in multiple ways.
- `priority`
  - : Specifies a numeric priority for this template. This can be any number other than `Infinity`. The processor uses this number when more than one template matches the same node.

### Type

Top-level, must be the child of `<xsl:stylesheet>` or `<xsl:transform>`.

### Defined

XSLT, section 5.3.

### Gecko support

Supported.
