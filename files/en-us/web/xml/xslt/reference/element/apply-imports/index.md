---
title: <xsl:apply-imports>
slug: Web/XML/XSLT/Reference/Element/apply-imports
page-type: xslt-element
sidebar: xmlsidebar
---

The `<xsl:apply-imports>` element is fairly arcane, used mostly in complex stylesheets. Import precedence requires that template rules in main stylesheets have higher precedence than template rules in imported stylesheets. Sometimes, however, it is useful to be able to force the processor to use a template rule from the (lower precedence) imported stylesheet rather than an equivalent rule in the main stylesheet.

## Syntax

```xml
<xsl:apply-imports/>
```

### Required Attributes

None.

### Optional Attributes

None.

### Type

Instruction, appears within a template.

## Specifications

XSLT, section 5.6.

## Gecko support

Supported.
