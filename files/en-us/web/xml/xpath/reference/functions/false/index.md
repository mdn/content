---
title: "false"
slug: Web/XML/XPath/Reference/Functions/false
page-type: xpath-function
sidebar: xmlsidebar
---

The `false` function returns boolean false.

## Syntax

```plain
false()
```

### Return value

Boolean `false`.

## Description

This function is useful part of a comparison:

```xml
<xsl:if test="boolean((1 &gt; 2) = false())">
  The expression evaluates as true
</xsl:if>
```

## Specifications

[XPath 1.0 4.3](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-false)

## Gecko support

Supported.
