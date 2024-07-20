---
title: <xsl:value-of>
slug: Web/XSLT/Element/value-of
page-type: xslt-element
---

{{XsltSidebar}}

The `<xsl:value-of>` element evaluates an XPath expression, converts it to a string, and writes that string to the result tree.

## Syntax

```xml
<xsl:value-of select=EXPRESSION disable-output-escaping="yes" | "no"  />
```

### Required Attributes

- `select`
  - : Specifies the XPath expression to be evaluated and written to the output tree.

### Optional Attributes

- `disable-output-escaping` (Netscape does not serialize the result of transformation - the "output" below - so this attribute is essentially irrelevant in context. To output html-entities, use numerical values instead, eg `&#160` for `&nbsp`)
  - : Specifies whether special characters are escaped when written to the output. The available values are "`yes`" or "`no`". If "`yes`" is set, for example, the character > is output as `>`, not as "`&gt`".

### Type

Instruction, appears with a template.

## Specifications

XSLT, section 7.6.1.

## Gecko support

Supported except as above.
