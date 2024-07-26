---
title: <xsl:decimal-format>
slug: Web/XSLT/Element/decimal-format
page-type: xslt-element
---

{{XsltSidebar}}

The `<xsl:decimal-format>` element defines the characters and symbols that are to be used in converting numbers into strings using the `format-number( )` function.

## Syntax

```xml
<xsl:decimal-format
  name=NAME
  decimal-separator=CHARACTER
  grouping-separator=CHARACTER
  infinity=STRING
  minus-sign=CHARACTER
  NaN=STRING
  percent=CHARACTER
  per-mille=CHARACTER
  zero-digit=CHARACTER
  digit=CHARACTER
  pattern-separator=CHARACTER />
```

### Required Attributes

None.

### Optional Attributes

- `name`
  - : Specifies a name for this format.
- `decimal-separator`
  - : Specifies the decimal point character. The default is (`.`).
- `grouping-separator`
  - : Specifies the thousands separator character. The default is (`,`).
- `infinity`
  - : Specifies the string used to represent infinity. The default is the string "`Infinity`".
- `minus-sign`
  - : Specifies the minus sign character. The default is the hyphen (`-`).
- `NaN`
  - : Specifies the string used when the value is not a number. The default is the string "`NaN`".
- `percent`
  - : Specifies the percentage sign character. The default is (`%`).
- `per-mille`
  - : Specifies the per thousand character. The default is (`‰`).
- `zero-digit`
  - : Specifies the digit zero character. The default is (`0`).
- `digit`
  - : Specifies the character used in the format pattern to stand for a digit. The default is (`#`).
- `pattern-separator`
  - : Specifies the character separating positive and negative subpatterns in a format pattern. The default is the semicolon (`;`).

### Type

Top-level, must be the child of `<xsl:stylesheet>` or `<xsl:transform>`.

## Specifications

XSLT, section 12.3.

## Gecko support

Supported as of 1.0 (Mozilla 1.0, Netscape 7.0).
