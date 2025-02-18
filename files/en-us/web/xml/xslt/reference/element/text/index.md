---
title: <xsl:text>
slug: Web/XML/XSLT/Reference/Element/text
page-type: xslt-element
sidebar: xmlsidebar
---

The `<xsl:text>` element writes literal text to the output tree. It may contain `#PCDATA`, literal text, and entity references.

## Syntax

```xml
<xsl:text disable-output-escaping="yes" | "no">
  TEXT
</xsl:text>
```

### Required Attributes

None.

### Optional Attributes

- `disable-output-escaping`

  - : Specifies whether special characters are escaped when written to the output. The available values are `yes` or `no`. If `yes` is set, for example, the character `>` is output as `>`, not as `&gt;`.

    > [!NOTE]
    > Older browsers may not serialize the result of transformation (the "output" below), making this attribute irrelevant in such contexts. To output HTML entities, use numerical values instead, e.g., `&#160;` for `&nbsp;`.

### Type

Instruction, appears within a template.

## Specifications

XSLT, section 7.2

## Gecko support

Supported as noted.
