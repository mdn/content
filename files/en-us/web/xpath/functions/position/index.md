---
title: position
slug: Web/XPath/Functions/position
tags:
  - XSLT
  - XSLT_Reference
---
{{ XsltRef() }}

The `position` function returns a number equal to the context position from the expression evaluation context.

### Syntax

    position()

### Returns

An integer equal to the context position from the expression evaluation context.

### Notes

- Note that a node's position in a context is not zero-based. The first node has a position of 1.

<!---->

- The context is determined by the rest of the path.

<!---->

    <xsl:template match="//a[position() = 5]">
     <!-- this template matches the fifth a element
             anywhere in the document. -->
    </xsl:template>

<!---->

    <xsl:template match="//div[@class='foo']/bar[position() = 1]">
     <!-- this template matches the first bar element that is
          a child of a div element with a class attribute equal to "foo" -->
    </xsl:template>

### Defined

[XPath 1.0 4.1](https://www.w3.org/TR/xpath#function-position)

### Gecko support

Supported.
