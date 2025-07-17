---
title: <xsl:sort>
slug: Web/XML/XSLT/Reference/Element/sort
page-type: xslt-element
sidebar: xmlsidebar
---

The `<xsl:sort>` element defines a sort key for nodes selected by `<xsl:apply-templates>` or `<xsl:for-each>` and determines the order in which they are processed.

## Syntax

```xml
<xsl:sort
  select=EXPRESSION
  order="ascending" | "descending"
  case-order="upper-first" | "lower-first"
  lang=XML:LANG-CODE
  data-type="text" | "number" />
```

### Required Attributes

None.

### Optional Attributes

- `select`
  - : Uses an XPath expression to specify the nodes to be sorted.
- `order`
  - : Specifies whether the nodes should be processed in `ascending` or `descending` order. The default is `ascending`.
- `case-order`
  - : Indicates whether upper- or lowercase letters are to be ordered first. The allowable values are `upper-first` and `lower-first`.
- `lang`
  - : Specifies which language is to be used by the sort.
- `data-type`
  - : Defines whether items are to be ordered alphabetically or numerically. The allowable values are `text` and `number` with `text` being the default.

### Type

Subinstruction, always appears as a child of \<xsl:for-each>, where it must appear before the template proper or of \<xsl:apply-templates>.

## Specifications

XSLT, section10.

## Gecko support

Supported.
