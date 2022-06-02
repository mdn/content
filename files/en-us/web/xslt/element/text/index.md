---
title: <xsl:text>
slug: Web/XSLT/Element/text
tags:
  - Element
  - Reference
  - Text
  - XSLT
---
{{ XsltRef() }}

The `<xsl:text>` element writes literal text to the output tree. It may contain `#PCDATA`, literal text, and entity references.

### Syntax

```xml
<xsl:text disable-output-escaping="yes" | "no">
  TEXT
</xsl:text>
```

### Required Attributes

None.

### Optional Attributes

- `disable-output-escaping` (Netscape does not serialize the result of transformation - the "output" below - so this attribute is essentially irrelevant in context. To output html-entities, use numerical values instead, eg `&#160;` for `&nbsp;`)
  - : Specifies whether special characters are escaped when written to the output. The available values are "`yes`" or "`no`". If "`yes`" is set, for example, the character `>` is output as `>`, not as `&gt;`.

### Type

Instruction, appears within a template.

### Defined

XSLT, section 7.2

### Gecko support

Supported as noted.
