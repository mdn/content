---
title: position
slug: Web/XPath/Functions/position
page-type: xpath-function
---

{{XsltSidebar}}

The `position` function returns a number equal to the context position from the expression evaluation context.

### Syntax

```plain
position()
```

### Returns

An integer equal to the context position from the expression evaluation context.

### Notes

- Note that a node's position in a context is not zero-based. The first node has a position of 1.

- The context is determined by the rest of the path.

  ```xml
  <xsl:template match="//a[position() = 5]">
    <!-- this template matches the fifth a element
            anywhere in the document. -->
  </xsl:template>
  ```

  ```xml
  <xsl:template match="//div[@class='foo']/bar[position() = 1]">
    <!-- this template matches the first bar element that is
        a child of a div element with a class attribute equal to "foo" -->
  </xsl:template>
  ```

### Defined

[XPath 1.0 4.1](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-position)

### Gecko support

Supported.
